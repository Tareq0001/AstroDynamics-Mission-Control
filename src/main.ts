/**
 * AstroDynamics Mission Control - Main Engine Coordinator
 * Three.js WebGL scene, RK4 / Kepler physics loop, ADCS, DSN telemetry, and flight HUD.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { EARTH, MOON, MARS, SUN, JUPITER } from './physics/constants';
import {
  KeplerianElements,
  keplerianToCartesian,
  cartesianToKeplerian,
  deriveOrbitalState,
  solveKepler,
  eccentricToTrueAnomaly,
} from './physics/kepler';
import { stepRK4, predictTrajectory, CelestialBody } from './physics/rk4-integrator';
import { computeLinkBudget, geoToEci } from './physics/link-budget';
import { computeLagrangePoints, generateHaloOrbitPoints, SUN_EARTH_SYSTEM, EARTH_MOON_SYSTEM } from './physics/lagrange';
import { SpacecraftModel } from './spacecraft/spacecraft-model';
import { ADCSController, ADCSMode } from './spacecraft/adcs';
import { SolarSystemScene } from './scene/solar-system';
import { OrbitRenderer } from './scene/orbit-renderer';
import { AudioManager } from './ui/audio';
import { I18nManager } from './ui/i18n';
import { TelemetryHUD } from './ui/telemetry-hud';
import { OrbitController } from './ui/orbit-controller';
import { ManeuverPlanner } from './ui/maneuver-planner';
import { MISSIONS, MissionConfig } from './ui/missions';

export class AstroDynamicsEngine {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;

  private solarSystem!: SolarSystemScene;
  private orbitRenderer!: OrbitRenderer;
  private spacecraft!: SpacecraftModel;
  private adcs!: ADCSController;

  private audio!: AudioManager;
  private i18n!: I18nManager;
  private hud!: TelemetryHUD;
  private orbitCtrl!: OrbitController;
  private maneuverPlanner!: ManeuverPlanner;

  // Active Flight State
  private currentElements: KeplerianElements = {
    semiMajorAxis: EARTH.radius + 500, // 500 km LEO
    eccentricity: 0.0015,
    inclination: (28.5 * Math.PI) / 180,
    raan: (30 * Math.PI) / 180,
    argPeriapsis: (45 * Math.PI) / 180,
    trueAnomaly: 0,
  };

  private currentBodyMu: number = EARTH.mu;
  private simTimeSeconds: number = 0;
  private timeWarp: number = 1.0;
  private isPaused: boolean = false;
  private cameraMode: 'CHASE' | 'EARTH' | 'SOLAR' | 'TARGET' = 'CHASE';

  private activeMission: MissionConfig | null = null;
  private lastBeepTime: number = 0;
  private earthRotationRad: number = 0;

  constructor() {
    this.init();
  }

  private init() {
    const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100000);
    this.camera.position.set(0, 15, 30);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 50000;
    this.controls.minDistance = 2.0;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(2000, 1000, 2000);
    this.scene.add(sunLight);

    // Subsystems
    this.solarSystem = new SolarSystemScene();
    this.scene.add(this.solarSystem.group);

    this.orbitRenderer = new OrbitRenderer();
    this.scene.add(this.orbitRenderer.group);

    this.spacecraft = new SpacecraftModel();
    this.scene.add(this.spacecraft.group);

    this.adcs = new ADCSController();
    this.audio = new AudioManager();
    this.i18n = new I18nManager();
    this.hud = new TelemetryHUD(this.i18n);

    // Orbit Controller
    this.orbitCtrl = new OrbitController(this.currentElements, newElem => {
      this.currentElements = { ...newElem };
      this.orbitRenderer.clearTrail();
      this.audio.playTelemetryBeep(1800, 0.03);
    });

    // Maneuver Planner
    this.maneuverPlanner = new ManeuverPlanner(this.audio, (newElem, prop) => {
      this.currentElements = { ...newElem };
      this.orbitCtrl.setElements(newElem);
      this.orbitRenderer.clearTrail();
    });

    // Bind DOM events
    this.bindDomControls();

    // Initial setup
    this.i18n.updateDomTranslations();
    this.updateLagrangeDisplay();

    // Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start loop
    this.animate(0);
  }

  private bindDomControls() {
    // Language toggle
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = this.i18n.currentLang === 'en' ? 'ar' : 'en';
        this.i18n.setLanguage(nextLang);
        langBtn.textContent = nextLang === 'en' ? 'العربية' : 'English';
      });
    }

    // Audio Mute toggle
    const audioBtn = document.getElementById('btn-audio-toggle');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isMuted = this.audio.toggleMute();
        audioBtn.textContent = isMuted ? '🔇' : '🔊';
      });
    }

    // Time Warp Buttons
    const warpButtons: { id: string; warp: number }[] = [
      { id: 'btn-warp-pause', warp: 0 },
      { id: 'btn-warp-1x', warp: 1 },
      { id: 'btn-warp-10x', warp: 10 },
      { id: 'btn-warp-100x', warp: 100 },
      { id: 'btn-warp-1000x', warp: 1000 },
    ];

    warpButtons.forEach(wb => {
      const btn = document.getElementById(wb.id);
      if (btn) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.warp-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (wb.warp === 0) {
            this.isPaused = true;
          } else {
            this.isPaused = false;
            this.timeWarp = wb.warp;
          }
          this.audio.playTelemetryBeep(1200, 0.03);
        });
      }
    });

    // Camera Modes
    const camButtons: { id: string; mode: 'CHASE' | 'EARTH' | 'SOLAR' | 'TARGET' }[] = [
      { id: 'btn-cam-chase', mode: 'CHASE' },
      { id: 'btn-cam-earth', mode: 'EARTH' },
      { id: 'btn-cam-solar', mode: 'SOLAR' },
      { id: 'btn-cam-target', mode: 'TARGET' },
    ];

    camButtons.forEach(cb => {
      const btn = document.getElementById(cb.id);
      if (btn) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.cam-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.cameraMode = cb.mode;
          this.setupCameraForMode(cb.mode);
        });
      }
    });

    // Tab Navigation
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        const activeContent = document.getElementById(`tab-${targetId}`);
        if (activeContent) activeContent.classList.add('active');

        this.audio.playTelemetryBeep(1600, 0.02);
      });
    });

    // ADCS Mode Buttons
    const adcsButtons: { id: string; mode: ADCSMode }[] = [
      { id: 'btn-adcs-prograde', mode: 'PROGRADE' },
      { id: 'btn-adcs-retrograde', mode: 'RETROGRADE' },
      { id: 'btn-adcs-normal', mode: 'NORMAL' },
      { id: 'btn-adcs-antinormal', mode: 'ANTI_NORMAL' },
      { id: 'btn-adcs-earth', mode: 'EARTH_POINTING' },
      { id: 'btn-adcs-sun', mode: 'SUN_POINTING' },
      { id: 'btn-adcs-target', mode: 'TARGET_POINTING' },
    ];

    adcsButtons.forEach(ab => {
      const btn = document.getElementById(ab.id);
      if (btn) {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.adcs-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.adcs.setMode(ab.mode);
          this.audio.playThrusterBurst(0.12);
        });
      }
    });

    // Turnkey Mission Buttons
    MISSIONS.forEach(mission => {
      const btn = document.getElementById(`btn-mission-${mission.id}`);
      if (btn) {
        btn.addEventListener('click', () => {
          this.loadMission(mission);
        });
      }
    });

    // Reset nominal orbit button
    const resetBtn = document.getElementById('btn-reset-orbit');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentElements = {
          semiMajorAxis: EARTH.radius + 500,
          eccentricity: 0.0015,
          inclination: (28.5 * Math.PI) / 180,
          raan: (30 * Math.PI) / 180,
          argPeriapsis: (45 * Math.PI) / 180,
          trueAnomaly: 0,
        };
        this.orbitCtrl.setElements(this.currentElements);
        this.orbitRenderer.clearTrail();
        this.audio.playAlert();
      });
    }

    // Directional burn triggers in Maneuver Planner
    const triggerBurn = (direction: 'prograde' | 'retrograde' | 'normal' | 'antinormal' | 'radialIn' | 'radialOut') => {
      const dvInput = document.getElementById('burn-dv-amount') as HTMLInputElement;
      const dv = dvInput ? parseFloat(dvInput.value) || 0.1 : 0.1;
      this.maneuverPlanner.executeDirectionalBurn(direction, dv, this.currentElements);
    };

    const burnKeys: { [key: string]: 'prograde' | 'retrograde' | 'normal' | 'antinormal' | 'radialIn' | 'radialOut' } = {
      'btn-burn-prograde': 'prograde',
      'btn-burn-retrograde': 'retrograde',
      'btn-burn-normal': 'normal',
      'btn-burn-antinormal': 'antinormal',
      'btn-burn-radialin': 'radialIn',
      'btn-burn-radialout': 'radialOut',
    };

    Object.entries(burnKeys).forEach(([id, dir]) => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', () => triggerBurn(dir));
    });
  }

  private setupCameraForMode(mode: 'CHASE' | 'EARTH' | 'SOLAR' | 'TARGET') {
    switch (mode) {
      case 'CHASE':
        this.controls.minDistance = 2.0;
        this.controls.maxDistance = 50.0;
        break;
      case 'EARTH':
        this.controls.minDistance = 8.0;
        this.controls.maxDistance = 800.0;
        this.camera.position.set(0, 30, 45);
        this.controls.target.set(0, 0, 0);
        break;
      case 'SOLAR':
        this.controls.minDistance = 50.0;
        this.controls.maxDistance = 30000.0;
        this.camera.position.set(0, 1200, 2400);
        this.controls.target.set(0, 0, 0);
        break;
      case 'TARGET':
        this.controls.minDistance = 5.0;
        this.controls.maxDistance = 2000.0;
        break;
    }
  }

  public loadMission(mission: MissionConfig) {
    this.activeMission = mission;
    this.currentElements = { ...mission.initialElements };
    this.orbitCtrl.setElements(this.currentElements);
    this.adcs.setMode(mission.adcsMode);
    this.spacecraft.setSolarDeployment(mission.solarDeployment);
    this.cameraMode = mission.cameraMode;
    this.setupCameraForMode(mission.cameraMode);
    this.orbitRenderer.clearTrail();

    if (mission.haloPoints) {
      this.orbitRenderer.updateHaloOrbit(mission.haloPoints);
    } else {
      this.orbitRenderer.updateHaloOrbit([]);
    }

    // Audio notification
    this.audio.playAlert();
    this.audio.playRadarPing();
  }

  private updateLagrangeDisplay() {
    const lagrangePoints = computeLagrangePoints(EARTH_MOON_SYSTEM);
    this.orbitRenderer.updateLagrangePoints(lagrangePoints);
  }

  private animate = (timestamp: number) => {
    requestAnimationFrame(this.animate);

    const deltaTime = 0.016; // 60 FPS nominal step
    const effectiveDt = this.isPaused ? 0 : deltaTime * this.timeWarp;
    this.simTimeSeconds += effectiveDt;

    // Earth rotation
    this.earthRotationRad += (effectiveDt / EARTH.rotationPeriod) * 2 * Math.PI;
    this.solarSystem.update(deltaTime, this.earthRotationRad);

    // Propagate Orbit
    if (!this.isPaused) {
      const derived = deriveOrbitalState(this.currentElements, this.currentBodyMu, EARTH.radius);
      // Mean motion n = sqrt(mu / a^3)
      if (this.currentElements.semiMajorAxis > 0) {
        const n = Math.sqrt(this.currentBodyMu / Math.pow(this.currentElements.semiMajorAxis, 3));
        let M = derived.meanAnomaly + n * effectiveDt;
        const E = solveKepler(M, this.currentElements.eccentricity);
        this.currentElements.trueAnomaly = eccentricToTrueAnomaly(E, this.currentElements.eccentricity);
      }
    }

    // Get current state vector
    const state = keplerianToCartesian(this.currentElements, this.currentBodyMu);
    const derived = deriveOrbitalState(this.currentElements, this.currentBodyMu, EARTH.radius);

    // Update Spacecraft 3D position
    const scPosUnits = new THREE.Vector3(
      state.r[0] * this.orbitRenderer.scaleRatio,
      state.r[2] * this.orbitRenderer.scaleRatio,
      -state.r[1] * this.orbitRenderer.scaleRatio
    );
    this.spacecraft.group.position.copy(scPosUnits);

    // Camera chase logic
    if (this.cameraMode === 'CHASE') {
      this.controls.target.copy(scPosUnits);
    }

    // ADCS update
    this.adcs.updateTargetAttitude(state.r, state.v, [2000000, 0, 0]);
    const adcsRes = this.adcs.update(deltaTime, this.spacecraft);
    if (adcsRes.firedThrusters && Math.random() < 0.2) {
      this.audio.playThrusterBurst(0.08);
    }

    // Compute N-body accelerations & predict trajectory
    const moonPos: [number, number, number] = [
      MOON.semiMajorAxis * Math.cos(this.simTimeSeconds * 2.66e-6),
      MOON.semiMajorAxis * Math.sin(this.simTimeSeconds * 2.66e-6),
      0,
    ];
    const nBodyList: CelestialBody[] = [
      {
        id: 'moon',
        name: 'Moon',
        mass: MOON.mass,
        mu: MOON.mu,
        radius: MOON.radius,
        position: moonPos,
        velocity: [0, 1.02, 0],
      },
    ];

    // Update Moon mesh in 3D
    this.solarSystem.celestialBodies.moon.position.set(
      moonPos[0] * this.orbitRenderer.scaleRatio,
      moonPos[2] * this.orbitRenderer.scaleRatio,
      -moonPos[1] * this.orbitRenderer.scaleRatio
    );

    // Step RK4 for instantaneous acceleration forces
    const rk4Res = stepRK4(state, 1.0, nBodyList, this.currentBodyMu, true, [0, 0, 0]);

    // Predict future trajectory
    const predTrajectory = predictTrajectory(state, derived.period > 0 && derived.period < 86400 * 20 ? derived.period : 86400, 180, nBodyList, this.currentBodyMu);
    this.orbitRenderer.updatePredictedTrajectory(predTrajectory);

    // Update Keplerian orbit line
    this.orbitRenderer.updateKeplerOrbit(this.currentElements, this.currentBodyMu);

    // Update vector arrows
    this.orbitRenderer.updateSpacecraftVectors(state.r, state.v, rk4Res.forces.total);

    // Compute DSN link budget
    const linkBudget = computeLinkBudget(state.r, state.v, 25, 2.4, this.earthRotationRad);

    // Update DSN beam in 3D
    const activeStEci = geoToEci(linkBudget.activeStation.lat, linkBudget.activeStation.lon, this.earthRotationRad);
    this.orbitRenderer.updateDsnBeam(activeStEci, state.r, linkBudget.isInLineOfSight);

    // Point spacecraft High-Gain Antenna at Earth
    const toEarth = new THREE.Vector3(-state.r[0], -state.r[2], state.r[1]).normalize();
    const dishAz = Math.atan2(toEarth.x, toEarth.z);
    const dishEl = Math.asin(toEarth.y);
    this.spacecraft.pointHGA(dishAz, dishEl);

    // Update Telemetry HUD
    this.hud.updateTelemetry(
      this.currentElements,
      derived,
      this.adcs.getState(),
      linkBudget,
      this.maneuverPlanner.propellant
    );

    // Periodic telemetry audio heartbeat (every ~3 seconds in real time)
    if (timestamp - this.lastBeepTime > 3000) {
      this.audio.playTelemetryBeep(1200, 0.03);
      this.lastBeepTime = timestamp;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}

// Bootstrap on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new AstroDynamicsEngine();
});
