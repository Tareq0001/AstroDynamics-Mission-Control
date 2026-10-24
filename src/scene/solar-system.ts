/**
 * AstroDynamics Mission Control - 3D Solar System & Planetary Renderers
 * Procedural Earth with atmospheric Rayleigh scattering glow, Moon, Mars, Sun, and Starfield.
 */

import * as THREE from 'three';
import { EARTH, MOON, MARS, SUN, JUPITER, SATURN } from '../physics/constants';

export interface CelestialMeshMap {
  earth: THREE.Group;
  earthSurface: THREE.Mesh;
  earthClouds: THREE.Mesh;
  earthAtmosphere: THREE.Mesh;
  moon: THREE.Mesh;
  mars: THREE.Mesh;
  jupiter: THREE.Group;
  saturn: THREE.Group;
  sun: THREE.Mesh;
  sunCorona: THREE.Mesh;
  starfield: THREE.Points;
}

export class SolarSystemScene {
  public group: THREE.Group;
  public celestialBodies: CelestialMeshMap;
  public scaleRatio: number = 1 / 1000; // 1 unit in Three.js = 1000 km
  private earthRotationAngle: number = 0;

  constructor() {
    this.group = new THREE.Group();
    this.celestialBodies = this.buildCelestialBodies();
  }

  private buildCelestialBodies(): CelestialMeshMap {
    // 1. Procedural Deep-Space Starfield & Milky Way
    const starfield = this.createStarfield(7000);
    this.group.add(starfield);

    // 2. Earth Group (Equatorial tilt 23.4 deg)
    const earth = new THREE.Group();
    earth.rotation.z = (23.4 * Math.PI) / 180;

    // Earth Surface Canvas Procedural Texture
    const earthRadiusUnits = EARTH.radius * this.scaleRatio; // ~6.37 units
    const earthGeo = new THREE.SphereGeometry(earthRadiusUnits, 64, 64);

    const earthTex = this.generateEarthCanvasTexture();
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTex,
      roughness: 0.6,
      metalness: 0.1,
    });
    const earthSurface = new THREE.Mesh(earthGeo, earthMat);
    earthSurface.castShadow = true;
    earthSurface.receiveShadow = true;
    earth.add(earthSurface);

    // Earth Clouds Layer
    const cloudGeo = new THREE.SphereGeometry(earthRadiusUnits * 1.015, 48, 48);
    const cloudTex = this.generateCloudsTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTex,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const earthClouds = new THREE.Mesh(cloudGeo, cloudMat);
    earth.add(earthClouds);

    // Earth Atmospheric Rayleigh Blue Scattering Rim Glow
    const atmosGeo = new THREE.SphereGeometry(earthRadiusUnits * 1.05, 48, 48);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity * 1.8;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const earthAtmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    earth.add(earthAtmosphere);
    this.group.add(earth);

    // 3. Moon
    const moonRadiusUnits = MOON.radius * this.scaleRatio;
    const moonGeo = new THREE.SphereGeometry(moonRadiusUnits, 32, 32);
    const moonTex = this.generateMoonCanvasTexture();
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTex,
      roughness: 0.9,
      metalness: 0.05,
    });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.castShadow = true;
    moon.receiveShadow = true;
    this.group.add(moon);

    // 4. Mars
    const marsRadiusUnits = MARS.radius * this.scaleRatio;
    const marsGeo = new THREE.SphereGeometry(marsRadiusUnits, 48, 48);
    const marsTex = this.generateMarsCanvasTexture();
    const marsMat = new THREE.MeshStandardMaterial({
      map: marsTex,
      roughness: 0.8,
      metalness: 0.1,
    });
    const mars = new THREE.Mesh(marsGeo, marsMat);
    mars.castShadow = true;
    mars.receiveShadow = true;
    this.group.add(mars);

    // 5. Jupiter
    const jupiter = new THREE.Group();
    const jupRadiusUnits = 25.0; // Scaled for visible majestic presence
    const jupGeo = new THREE.SphereGeometry(jupRadiusUnits, 48, 48);
    const jupTex = this.generateJupiterCanvasTexture();
    const jupMat = new THREE.MeshStandardMaterial({
      map: jupTex,
      roughness: 0.7,
    });
    const jupMesh = new THREE.Mesh(jupGeo, jupMat);
    jupiter.add(jupMesh);
    this.group.add(jupiter);

    // 6. Saturn & Rings
    const saturn = new THREE.Group();
    const satRadiusUnits = 20.0;
    const satGeo = new THREE.SphereGeometry(satRadiusUnits, 48, 48);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xdec088,
      roughness: 0.7,
    });
    const satMesh = new THREE.Mesh(satGeo, satMat);
    saturn.add(satMesh);

    // Rings
    const ringGeo = new THREE.RingGeometry(satRadiusUnits * 1.3, satRadiusUnits * 2.3, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xcbb585,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    saturn.add(ringMesh);
    this.group.add(saturn);

    // 7. Sun & Solar Corona Glow
    const sunRadiusUnits = 50.0;
    const sunGeo = new THREE.SphereGeometry(sunRadiusUnits, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xfff0aa,
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);

    // Corona Glow
    const coronaGeo = new THREE.SphereGeometry(sunRadiusUnits * 1.6, 32, 32);
    const coronaMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(1.0, 0.75, 0.2, 1.0) * intensity * 2.0;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const sunCorona = new THREE.Mesh(coronaGeo, coronaMat);
    sun.add(sunCorona);
    this.group.add(sun);

    return {
      earth,
      earthSurface,
      earthClouds,
      earthAtmosphere,
      moon,
      mars,
      jupiter,
      saturn,
      sun,
      sunCorona,
      starfield,
    };
  }

  /**
   * Procedural Starfield with realistic stellar temperatures
   */
  private createStarfield(count: number): THREE.Points {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Color palettes for stars: bluish-white, white, yellowish, reddish
    const palette = [
      new THREE.Color(0xaabbff),
      new THREE.Color(0xffffff),
      new THREE.Color(0xfff2cc),
      new THREE.Color(0xffbbaa),
    ];

    for (let i = 0; i < count; i++) {
      // Sphere surface distribution at large radius ~40,000 units
      const radius = 30000 + Math.random() * 20000;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    return new THREE.Points(geo, mat);
  }

  /**
   * High-contrast Earth Canvas procedural texture generator
   */
  private generateEarthCanvasTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Ocean deep blue gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#0c274c');
    grad.addColorStop(0.5, '#0d3266');
    grad.addColorStop(1, '#0c274c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Continents procedural blobs
    ctx.fillStyle = '#2d5e37'; // lush green / brownish terrain
    // Africa / Europe
    ctx.beginPath();
    ctx.ellipse(520, 240, 70, 110, 0.2, 0, Math.PI * 2);
    ctx.fill();
    // Asia
    ctx.beginPath();
    ctx.ellipse(680, 180, 120, 70, -0.1, 0, Math.PI * 2);
    ctx.fill();
    // Americas
    ctx.beginPath();
    ctx.ellipse(250, 190, 60, 90, 0.3, 0, Math.PI * 2);
    ctx.ellipse(310, 320, 50, 80, 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Australia
    ctx.fillStyle = '#9e6231';
    ctx.beginPath();
    ctx.ellipse(820, 340, 45, 30, 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Polar ice caps
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, 25);
    ctx.fillRect(0, canvas.height - 30, canvas.width, 30);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }

  private generateCloudsTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * canvas.width;
      const cy = 40 + Math.random() * (canvas.height - 80);
      const rw = 30 + Math.random() * 80;
      const rh = 10 + Math.random() * 30;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rw, rh, Math.random() * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  private generateMoonCanvasTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#8b8e94';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dark lunar maria patches
    ctx.fillStyle = '#56585c';
    for (let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 20 + Math.random() * 40, 0, Math.PI * 2);
      ctx.fill();
    }
    // Bright crater rims
    ctx.strokeStyle = '#c5c9d1';
    ctx.lineWidth = 2;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 5 + Math.random() * 15, 0, Math.PI * 2);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  private generateMarsCanvasTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#b84e27';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dark volcanic basalt regions (Syrtis Major)
    ctx.fillStyle = '#6e2f18';
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * canvas.width, Math.random() * canvas.height, 40 + Math.random() * 50, 20 + Math.random() * 30, 0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Polar ice caps
    ctx.fillStyle = '#f0f5ff';
    ctx.fillRect(0, 0, canvas.width, 16);
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  private generateJupiterCanvasTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const bands = ['#d8a873', '#ba8151', '#f3d6b0', '#9d633b', '#e7caa1', '#bc804c'];
    const h = canvas.height / bands.length;

    bands.forEach((b, idx) => {
      ctx.fillStyle = b;
      ctx.fillRect(0, idx * h, canvas.width, h);
    });

    // Great Red Spot
    ctx.fillStyle = '#c8442a';
    ctx.beginPath();
    ctx.ellipse(280, 160, 45, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  /**
   * Update planetary rotations and positions per frame
   */
  public update(deltaTime: number, earthRotationRad: number) {
    this.earthRotationAngle = earthRotationRad;
    this.celestialBodies.earthSurface.rotation.y = this.earthRotationAngle;
    this.celestialBodies.earthClouds.rotation.y = this.earthRotationAngle * 1.05;
  }
}
