/**
 * AstroDynamics Mission Control - 3D Spacecraft Bus Model & Particle Thrusters
 * Production Three.js procedural deep space probe with deployable solar panels,
 * gimbaled High-Gain Antenna dish, RCS pods, and dynamic plasma plume particles.
 */

import * as THREE from 'three';

export interface SpacecraftVisualComponents {
  rootGroup: THREE.Group;
  busGroup: THREE.Group;
  leftSolarWing: THREE.Group;
  rightSolarWing: THREE.Group;
  hgaDishGroup: THREE.Group;
  hgaGimbalElevation: THREE.Group;
  thrusterPlumes: THREE.Mesh[];
  reactionWheelsGroup: THREE.Group;
}

export class SpacecraftModel {
  public group: THREE.Group;
  public components: SpacecraftVisualComponents;
  private plumeMaterials: THREE.MeshBasicMaterial[] = [];
  private solarDeploymentProgress: number = 1.0; // 0 (stowed) to 1 (fully deployed)
  private hgaAzimuth: number = 0;
  private hgaElevation: number = 0.3;

  constructor() {
    this.group = new THREE.Group();
    this.components = this.buildModel();
  }

  private buildModel(): SpacecraftVisualComponents {
    const root = new THREE.Group();

    // 1. Core Spacecraft Bus (Octagonal Prism Body)
    const busGroup = new THREE.Group();

    // Gold Multi-Layer Insulation (MLI) Foil Material
    const mliMaterial = new THREE.MeshStandardMaterial({
      color: 0xdf9a14,
      metalness: 0.85,
      roughness: 0.25,
      bumpScale: 0.05,
    });

    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f232b,
      metalness: 0.9,
      roughness: 0.4,
    });

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8dee9,
      metalness: 0.7,
      roughness: 0.3,
    });

    // Octagonal cylinder bus
    const busGeo = new THREE.CylinderGeometry(1.6, 1.8, 2.6, 8);
    const busMesh = new THREE.Mesh(busGeo, mliMaterial);
    busMesh.rotation.y = Math.PI / 8;
    busMesh.castShadow = true;
    busMesh.receiveShadow = true;
    busGroup.add(busMesh);

    // Avionics equipment bays & top/bottom structural rings
    const ringGeo = new THREE.TorusGeometry(1.75, 0.08, 16, 32);
    const topRing = new THREE.Mesh(ringGeo, darkMetalMaterial);
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 1.3;
    busGroup.add(topRing);

    const bottomRing = new THREE.Mesh(ringGeo, darkMetalMaterial);
    bottomRing.rotation.x = Math.PI / 2;
    bottomRing.position.y = -1.3;
    busGroup.add(bottomRing);

    // Main Engine Nozzle (Hypergolic 450N Bipropellant OMS engine at aft)
    const nozzleGeo = new THREE.ConeGeometry(0.7, 1.4, 32, 1, true);
    const nozzleMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });
    const mainNozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
    mainNozzle.position.y = -1.9;
    mainNozzle.rotation.x = Math.PI; // point downwards along -Y
    busGroup.add(mainNozzle);

    // 2. High-Gain Antenna (HGA) Parabolic Dish with Dual-Axis Gimbal
    const hgaDishGroup = new THREE.Group();
    hgaDishGroup.position.set(0, 1.4, 0); // mounted on top deck

    // Azimuth Turret Base
    const hgaBaseGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.3, 16);
    const hgaBase = new THREE.Mesh(hgaBaseGeo, titaniumMaterial);
    hgaDishGroup.add(hgaBase);

    // Elevation Gimbal
    const hgaGimbalElevation = new THREE.Group();
    hgaGimbalElevation.position.set(0, 0.35, 0);

    // Parabolic Dish Curvature (Sphere segment)
    const dishRadius = 1.5;
    const dishGeo = new THREE.SphereGeometry(dishRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3.2);
    const dishMat = new THREE.MeshStandardMaterial({
      color: 0xf5f7fa,
      metalness: 0.4,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });
    const dishMesh = new THREE.Mesh(dishGeo, dishMat);
    dishMesh.rotation.x = -Math.PI / 2; // Dish faces outward
    dishMesh.position.z = 0.5;
    hgaGimbalElevation.add(dishMesh);

    // Sub-reflector tripod struts & feed horn
    const strutMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 });
    for (let i = 0; i < 3; i++) {
      const angle = (i * 2 * Math.PI) / 3;
      const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.3);
      const strut = new THREE.Mesh(strutGeo, strutMat);
      strut.position.set(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5, 0.9);
      strut.rotation.z = angle + Math.PI / 2;
      strut.rotation.x = 0.4;
      hgaGimbalElevation.add(strut);
    }

    // Feed horn apex
    const hornGeo = new THREE.ConeGeometry(0.12, 0.3, 16);
    const horn = new THREE.Mesh(hornGeo, mliMaterial);
    horn.position.set(0, 0, 1.35);
    horn.rotation.x = Math.PI / 2;
    hgaGimbalElevation.add(horn);

    hgaDishGroup.add(hgaGimbalElevation);
    busGroup.add(hgaDishGroup);

    // 3. Dual Deployable Solar Panel Wings
    const leftSolarWing = this.createSolarWing(1); // Left (+X)
    const rightSolarWing = this.createSolarWing(-1); // Right (-X)
    busGroup.add(leftSolarWing);
    busGroup.add(rightSolarWing);

    // 4. Reaction Control System (RCS) Quad Thruster Blocks & Plumes
    const thrusterPlumes: THREE.Mesh[] = [];
    const rcsPositions = [
      { pos: [1.3, 0.9, 1.3], rot: [0, Math.PI / 4, 0] },
      { pos: [-1.3, 0.9, 1.3], rot: [0, (3 * Math.PI) / 4, 0] },
      { pos: [-1.3, 0.9, -1.3], rot: [0, (5 * Math.PI) / 4, 0] },
      { pos: [1.3, 0.9, -1.3], rot: [0, (7 * Math.PI) / 4, 0] },
      { pos: [1.3, -0.9, 1.3], rot: [0, Math.PI / 4, 0] },
      { pos: [-1.3, -0.9, 1.3], rot: [0, (3 * Math.PI) / 4, 0] },
      { pos: [-1.3, -0.9, -1.3], rot: [0, (5 * Math.PI) / 4, 0] },
      { pos: [1.3, -0.9, -1.3], rot: [0, (7 * Math.PI) / 4, 0] },
    ];

    const plumeGeo = new THREE.ConeGeometry(0.2, 0.9, 16);
    plumeGeo.translate(0, 0.45, 0); // pivot at base

    rcsPositions.forEach(cfg => {
      const podGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const pod = new THREE.Mesh(podGeo, darkMetalMaterial);
      pod.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

      // Micro nozzle
      const microNozzleGeo = new THREE.ConeGeometry(0.06, 0.14, 8);
      const nozzle = new THREE.Mesh(microNozzleGeo, darkMetalMaterial);
      nozzle.rotation.x = Math.PI / 2;
      nozzle.position.z = 0.15;
      pod.add(nozzle);

      // Dynamic plasma flame plume
      const plumeMat = new THREE.MeshBasicMaterial({
        color: 0x44aaff,
        transparent: true,
        opacity: 0.0,
        blending: THREE.AdditiveBlending,
      });
      this.plumeMaterials.push(plumeMat);

      const plumeMesh = new THREE.Mesh(plumeGeo, plumeMat);
      plumeMesh.position.set(0, 0, 0.16);
      plumeMesh.rotation.x = -Math.PI / 2;
      pod.add(plumeMesh);
      thrusterPlumes.push(plumeMesh);

      pod.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      busGroup.add(pod);
    });

    // 5. Star Trackers & Science Boom
    const boomGeo = new THREE.CylinderGeometry(0.03, 0.03, 3.2);
    const boom = new THREE.Mesh(boomGeo, titaniumMaterial);
    boom.position.set(0, 0, -2.2);
    boom.rotation.x = Math.PI / 2;
    busGroup.add(boom);

    // Magnetometer sensor at tip
    const magSensorGeo = new THREE.SphereGeometry(0.15, 12, 12);
    const magSensor = new THREE.Mesh(magSensorGeo, mliMaterial);
    magSensor.position.set(0, 0, -3.8);
    busGroup.add(magSensor);

    // Star tracker optical camera cones
    for (let st = 0; st < 2; st++) {
      const stGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.35, 16);
      const stMesh = new THREE.Mesh(stGeo, darkMetalMaterial);
      stMesh.position.set(st === 0 ? 0.7 : -0.7, 1.2, 0.7);
      stMesh.rotation.x = 0.6;
      stMesh.rotation.y = st === 0 ? 0.4 : -0.4;
      busGroup.add(stMesh);
    }

    // 6. Reaction Wheel Assembly (Flywheels visible)
    const reactionWheelsGroup = new THREE.Group();
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x00e5ff, metalness: 0.8, roughness: 0.2 });
    for (let rw = 0; rw < 3; rw++) {
      const wheelGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 24);
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      if (rw === 0) wheel.rotation.x = Math.PI / 2;
      if (rw === 1) wheel.rotation.z = Math.PI / 2;
      reactionWheelsGroup.add(wheel);
    }
    reactionWheelsGroup.position.set(0, 0, 0);
    busGroup.add(reactionWheelsGroup);

    root.add(busGroup);
    this.group.add(root);

    return {
      rootGroup: root,
      busGroup,
      leftSolarWing,
      rightSolarWing,
      hgaDishGroup,
      hgaGimbalElevation,
      thrusterPlumes,
      reactionWheelsGroup,
    };
  }

  /**
   * Helper to construct realistic articulated multi-panel solar array wing
   */
  private createSolarWing(direction: number): THREE.Group {
    const wingGroup = new THREE.Group();
    wingGroup.position.set(direction * 1.8, 0, 0);

    // Yoke mount gimbal
    const yokeGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8);
    const yokeMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.8 });
    const yoke = new THREE.Mesh(yokeGeo, yokeMat);
    yoke.rotation.z = Math.PI / 2;
    yoke.position.x = direction * 0.4;
    wingGroup.add(yoke);

    // Panel assembly
    const panelGroup = new THREE.Group();
    panelGroup.position.x = direction * 0.8;

    // Solar cells material (Dark Blue / Iridescent photovoltaic pattern)
    const solarCellMat = new THREE.MeshStandardMaterial({
      color: 0x0a1d4a,
      metalness: 0.8,
      roughness: 0.1,
      emissive: 0x030818,
    });

    const backingMat = new THREE.MeshStandardMaterial({
      color: 0x222226,
      metalness: 0.5,
      roughness: 0.7,
    });

    // 3 hinged panel sections per wing
    const panelCount = 3;
    const panelWidth = 1.4;
    const panelHeight = 2.4;

    for (let i = 0; i < panelCount; i++) {
      const singlePanel = new THREE.Group();
      singlePanel.position.x = direction * (i * (panelWidth + 0.1));

      // Front Photovoltaic surface
      const cellGeo = new THREE.BoxGeometry(panelWidth, panelHeight, 0.04);
      const cellMesh = new THREE.Mesh(cellGeo, solarCellMat);
      singlePanel.add(cellMesh);

      // Back carbon-fiber backing structure
      const gridGeo = new THREE.BoxGeometry(panelWidth * 0.96, panelHeight * 0.96, 0.042);
      const gridMesh = new THREE.Mesh(gridGeo, backingMat);
      gridMesh.position.z = -0.01;
      singlePanel.add(gridMesh);

      panelGroup.add(singlePanel);
    }

    wingGroup.add(panelGroup);
    return wingGroup;
  }

  /**
   * Fire RCS Thruster Plumes visually
   */
  public fireThrusterBurst(intensity: number = 1.0) {
    this.plumeMaterials.forEach(mat => {
      mat.opacity = Math.min(1.0, intensity * (0.7 + Math.random() * 0.3));
    });
  }

  /**
   * Update spacecraft visual state per render frame
   */
  public update(deltaTime: number) {
    // Fade out thruster plumes
    this.plumeMaterials.forEach(mat => {
      if (mat.opacity > 0) {
        mat.opacity = Math.max(0, mat.opacity - deltaTime * 3.5);
      }
    });

    // Slowly spin reaction wheels to show active attitude control
    this.components.reactionWheelsGroup.children.forEach((w, idx) => {
      w.rotation.y += (idx + 1) * 3.0 * deltaTime;
    });
  }

  /**
   * Aim High-Gain Antenna at Earth
   */
  public pointHGA(azimuthRad: number, elevationRad: number) {
    this.components.hgaDishGroup.rotation.y = azimuthRad;
    this.components.hgaGimbalElevation.rotation.x = Math.max(-0.2, Math.min(Math.PI / 2, elevationRad));
  }

  /**
   * Set Solar Array deployment level (0 = folded, 1 = fully open)
   */
  public setSolarDeployment(progress: number) {
    this.solarDeploymentProgress = Math.max(0, Math.min(1, progress));
    this.components.leftSolarWing.scale.set(this.solarDeploymentProgress, 1, 1);
    this.components.rightSolarWing.scale.set(this.solarDeploymentProgress, 1, 1);
  }
}
