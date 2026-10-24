/**
 * AstroDynamics Mission Control - Orbit Renderer & Tactical Vector Overlays
 * Keplerian ellipses, RK4 predicted trajectories, velocity/acceleration vector arrows,
 * Lagrange points, and DSN RF ground link beams.
 */

import * as THREE from 'three';
import { KeplerianElements, keplerianToCartesian } from '../physics/kepler';
import { LagrangePoint } from '../physics/lagrange';

export class OrbitRenderer {
  public group: THREE.Group;
  public scaleRatio: number = 1 / 1000; // 1 Three.js unit = 1000 km

  private keplerOrbitLine: THREE.Line;
  private predictedTrajectoryLine: THREE.Line;
  private pastTrailLine: THREE.Line;
  private periapsisMarker: THREE.Mesh;
  private apoapsisMarker: THREE.Mesh;
  private velocityArrow: THREE.ArrowHelper;
  private accelerationArrow: THREE.ArrowHelper;
  private dsnBeamLine: THREE.Line;

  private lagrangeMarkersGroup: THREE.Group;
  private haloOrbitLine: THREE.Line;

  private pastPositions: THREE.Vector3[] = [];
  private maxTrailPoints: number = 300;

  constructor() {
    this.group = new THREE.Group();

    // 1. Keplerian Orbit Line
    const keplerGeo = new THREE.BufferGeometry();
    const keplerMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    this.keplerOrbitLine = new THREE.Line(keplerGeo, keplerMat);
    this.group.add(this.keplerOrbitLine);

    // 2. RK4 Predicted Trajectory Line
    const predGeo = new THREE.BufferGeometry();
    const predMat = new THREE.LineDashedMaterial({
      color: 0xffd000,
      linewidth: 2,
      scale: 1,
      dashSize: 3,
      gapSize: 2,
      transparent: true,
      opacity: 0.9,
    });
    this.predictedTrajectoryLine = new THREE.Line(predGeo, predMat);
    this.group.add(this.predictedTrajectoryLine);

    // 3. Past Trajectory Trail
    const trailGeo = new THREE.BufferGeometry();
    const trailMat = new THREE.LineBasicMaterial({
      color: 0x3d74ff,
      transparent: true,
      opacity: 0.5,
    });
    this.pastTrailLine = new THREE.Line(trailGeo, trailMat);
    this.group.add(this.pastTrailLine);

    // 4. Periapsis & Apoapsis 3D Diamond Markers
    const markerGeo = new THREE.OctahedronGeometry(0.35, 0);

    const periMat = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
    this.periapsisMarker = new THREE.Mesh(markerGeo, periMat);
    this.group.add(this.periapsisMarker);

    const apoMat = new THREE.MeshBasicMaterial({ color: 0xff4466, wireframe: true });
    this.apoapsisMarker = new THREE.Mesh(markerGeo, apoMat);
    this.group.add(this.apoapsisMarker);

    // 5. Dynamic Velocity Vector Arrow (Green)
    this.velocityArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      2.5,
      0x00ff88,
      0.6,
      0.3
    );
    this.group.add(this.velocityArrow);

    // 6. Dynamic Acceleration Vector Arrow (Amber)
    this.accelerationArrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 0),
      2.0,
      0xffa600,
      0.5,
      0.25
    );
    this.group.add(this.accelerationArrow);

    // 7. DSN Ground-to-Space RF Beam Line
    const beamGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0),
    ]);
    const beamMat = new THREE.LineBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    this.dsnBeamLine = new THREE.Line(beamGeo, beamMat);
    this.group.add(this.dsnBeamLine);

    // 8. Lagrange Markers & Halo Orbit
    this.lagrangeMarkersGroup = new THREE.Group();
    this.group.add(this.lagrangeMarkersGroup);

    const haloGeo = new THREE.BufferGeometry();
    const haloMat = new THREE.LineBasicMaterial({
      color: 0xbf5af2,
      transparent: true,
      opacity: 0.8,
    });
    this.haloOrbitLine = new THREE.Line(haloGeo, haloMat);
    this.group.add(this.haloOrbitLine);
  }

  /**
   * Update Keplerian osculating ellipse line
   */
  public updateKeplerOrbit(elem: KeplerianElements, mu: number, numPoints: number = 240) {
    const points: THREE.Vector3[] = [];
    const isHyperbolic = elem.eccentricity >= 1.0;
    const maxNu = isHyperbolic ? Math.min(2.2, Math.acos(-1 / elem.eccentricity) * 0.92) : Math.PI;

    if (!isHyperbolic) {
      for (let i = 0; i <= numPoints; i++) {
        const nu = (i / numPoints) * 2 * Math.PI;
        const state = keplerianToCartesian({ ...elem, trueAnomaly: nu }, mu);
        points.push(
          new THREE.Vector3(
            state.r[0] * this.scaleRatio,
            state.r[2] * this.scaleRatio,
            -state.r[1] * this.scaleRatio
          )
        );
      }
    } else {
      // Hyperbola arc
      for (let i = -numPoints; i <= numPoints; i++) {
        const nu = (i / numPoints) * maxNu;
        const state = keplerianToCartesian({ ...elem, trueAnomaly: nu }, mu);
        points.push(
          new THREE.Vector3(
            state.r[0] * this.scaleRatio,
            state.r[2] * this.scaleRatio,
            -state.r[1] * this.scaleRatio
          )
        );
      }
    }

    this.keplerOrbitLine.geometry.dispose();
    this.keplerOrbitLine.geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Update Periapsis & Apoapsis Marker Positions
    const periState = keplerianToCartesian({ ...elem, trueAnomaly: 0 }, mu);
    this.periapsisMarker.position.set(
      periState.r[0] * this.scaleRatio,
      periState.r[2] * this.scaleRatio,
      -periState.r[1] * this.scaleRatio
    );

    if (!isHyperbolic) {
      const apoState = keplerianToCartesian({ ...elem, trueAnomaly: Math.PI }, mu);
      this.apoapsisMarker.position.set(
        apoState.r[0] * this.scaleRatio,
        apoState.r[2] * this.scaleRatio,
        -apoState.r[1] * this.scaleRatio
      );
      this.apoapsisMarker.visible = true;
    } else {
      this.apoapsisMarker.visible = false;
    }
  }

  /**
   * Update RK4 predicted trajectory curve
   */
  public updatePredictedTrajectory(trajectoryKm: [number, number, number][]) {
    const points = trajectoryKm.map(
      p => new THREE.Vector3(p[0] * this.scaleRatio, p[2] * this.scaleRatio, -p[1] * this.scaleRatio)
    );
    this.predictedTrajectoryLine.geometry.dispose();
    this.predictedTrajectoryLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
    this.predictedTrajectoryLine.computeLineDistances();
  }

  /**
   * Update Spacecraft vectors: Velocity arrow, Acceleration arrow, and past breadcrumb trail
   */
  public updateSpacecraftVectors(
    positionKm: [number, number, number],
    velocityKmS: [number, number, number],
    accelKmS2: [number, number, number]
  ) {
    const pos = new THREE.Vector3(
      positionKm[0] * this.scaleRatio,
      positionKm[2] * this.scaleRatio,
      -positionKm[1] * this.scaleRatio
    );

    // Breadcrumb trail
    this.pastPositions.push(pos.clone());
    if (this.pastPositions.length > this.maxTrailPoints) {
      this.pastPositions.shift();
    }
    this.pastTrailLine.geometry.dispose();
    this.pastTrailLine.geometry = new THREE.BufferGeometry().setFromPoints(this.pastPositions);

    // Velocity arrow
    const vDir = new THREE.Vector3(velocityKmS[0], velocityKmS[2], -velocityKmS[1]);
    const vLen = vDir.length();
    if (vLen > 1e-4) {
      vDir.normalize();
      this.velocityArrow.position.copy(pos);
      this.velocityArrow.setDirection(vDir);
      this.velocityArrow.setLength(Math.min(12, Math.max(1.8, vLen * 0.8)), 0.6, 0.25);
      this.velocityArrow.visible = true;
    } else {
      this.velocityArrow.visible = false;
    }

    // Acceleration arrow
    const aDir = new THREE.Vector3(accelKmS2[0], accelKmS2[2], -accelKmS2[1]);
    const aLen = aDir.length();
    if (aLen > 1e-6) {
      aDir.normalize();
      this.accelerationArrow.position.copy(pos);
      this.accelerationArrow.setDirection(aDir);
      this.accelerationArrow.setLength(Math.min(10, Math.max(1.5, aLen * 2000)), 0.5, 0.2);
      this.accelerationArrow.visible = true;
    } else {
      this.accelerationArrow.visible = false;
    }
  }

  /**
   * Update DSN Ground Station radio link line
   */
  public updateDsnBeam(
    stationPosKm: [number, number, number],
    scPosKm: [number, number, number],
    inLineOfSight: boolean
  ) {
    const p1 = new THREE.Vector3(
      stationPosKm[0] * this.scaleRatio,
      stationPosKm[2] * this.scaleRatio,
      -stationPosKm[1] * this.scaleRatio
    );
    const p2 = new THREE.Vector3(
      scPosKm[0] * this.scaleRatio,
      scPosKm[2] * this.scaleRatio,
      -scPosKm[1] * this.scaleRatio
    );

    this.dsnBeamLine.geometry.dispose();
    this.dsnBeamLine.geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    (this.dsnBeamLine.material as THREE.LineBasicMaterial).color.setHex(inLineOfSight ? 0x00ffcc : 0xff3b30);
    this.dsnBeamLine.visible = true;
  }

  /**
   * Update Lagrange Points visual indicators
   */
  public updateLagrangePoints(points: LagrangePoint[]) {
    // Clear old markers
    while (this.lagrangeMarkersGroup.children.length > 0) {
      const child = this.lagrangeMarkersGroup.children[0];
      this.lagrangeMarkersGroup.remove(child);
    }

    const geo = new THREE.DodecahedronGeometry(0.5, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0xbf5af2, wireframe: true });

    points.forEach(pt => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(
        pt.realCoords[0] * this.scaleRatio,
        pt.realCoords[2] * this.scaleRatio,
        -pt.realCoords[1] * this.scaleRatio
      );
      this.lagrangeMarkersGroup.add(m);
    });
  }

  /**
   * Update 3D Halo Orbit Spline
   */
  public updateHaloOrbit(haloPointsKm: [number, number, number][]) {
    const points = haloPointsKm.map(
      p => new THREE.Vector3(p[0] * this.scaleRatio, p[2] * this.scaleRatio, -p[1] * this.scaleRatio)
    );
    this.haloOrbitLine.geometry.dispose();
    this.haloOrbitLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
    this.haloOrbitLine.visible = points.length > 0;
  }

  public clearTrail() {
    this.pastPositions = [];
  }
}
