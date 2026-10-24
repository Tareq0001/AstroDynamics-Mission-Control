/**
 * AstroDynamics Mission Control - Attitude Determination & Control System (ADCS)
 * Quaternion 3D orientation kinematics, guidance targeting modes, and slew rate interpolation.
 */

import * as THREE from 'three';
import { SpacecraftModel } from './spacecraft-model';

export type ADCSMode =
  | 'PROGRADE'
  | 'RETROGRADE'
  | 'NORMAL'
  | 'ANTI_NORMAL'
  | 'EARTH_POINTING'
  | 'SUN_POINTING'
  | 'TARGET_POINTING'
  | 'MANUAL';

export interface ADCSState {
  mode: ADCSMode;
  quaternion: [number, number, number, number]; // [x, y, z, w]
  eulerDeg: { roll: number; pitch: number; yaw: number };
  angularVelocityDegS: [number, number, number];
  isSlewing: boolean;
  pointingErrorDeg: number;
}

export class ADCSController {
  public mode: ADCSMode = 'PROGRADE';
  public currentQuat: THREE.Quaternion = new THREE.Quaternion();
  public targetQuat: THREE.Quaternion = new THREE.Quaternion();
  public maxSlewRateDegPerSec: number = 2.5; // realistic max reaction wheel / RCS slew speed
  private lastFiredThrusters: boolean = false;

  constructor() {
    this.currentQuat.identity();
    this.targetQuat.identity();
  }

  /**
   * Set active ADCS Guidance Mode
   */
  public setMode(mode: ADCSMode) {
    this.mode = mode;
  }

  /**
   * Set manual target attitude from Euler angles in degrees
   */
  public setManualEuler(rollDeg: number, pitchDeg: number, yawDeg: number) {
    this.mode = 'MANUAL';
    const euler = new THREE.Euler(
      (pitchDeg * Math.PI) / 180,
      (yawDeg * Math.PI) / 180,
      (rollDeg * Math.PI) / 180,
      'YXZ'
    );
    this.targetQuat.setFromEuler(euler);
  }

  /**
   * Compute desired orientation quaternion based on current flight state
   */
  public updateTargetAttitude(
    r: [number, number, number],
    v: [number, number, number],
    sunPosition: [number, number, number] = [0, 0, 0],
    targetPosition?: [number, number, number]
  ) {
    if (this.mode === 'MANUAL') return;

    const vVec = new THREE.Vector3(v[0], v[1], v[2]).normalize();
    const rVec = new THREE.Vector3(r[0], r[1], r[2]).normalize();
    const hVec = new THREE.Vector3().crossVectors(rVec, vVec).normalize();

    const forward = new THREE.Vector3();
    const up = new THREE.Vector3();

    switch (this.mode) {
      case 'PROGRADE':
        forward.copy(vVec);
        up.copy(hVec);
        break;

      case 'RETROGRADE':
        forward.copy(vVec).negate();
        up.copy(hVec);
        break;

      case 'NORMAL':
        forward.copy(hVec);
        up.copy(rVec);
        break;

      case 'ANTI_NORMAL':
        forward.copy(hVec).negate();
        up.copy(rVec);
        break;

      case 'EARTH_POINTING':
        // High-gain antenna or nose points towards Earth center (-r)
        forward.copy(rVec).negate();
        up.copy(hVec);
        break;

      case 'SUN_POINTING': {
        const toSun = new THREE.Vector3(sunPosition[0] - r[0], sunPosition[1] - r[1], sunPosition[2] - r[2]).normalize();
        forward.copy(toSun);
        up.copy(hVec);
        break;
      }

      case 'TARGET_POINTING': {
        if (targetPosition) {
          const toTarget = new THREE.Vector3(
            targetPosition[0] - r[0],
            targetPosition[1] - r[1],
            targetPosition[2] - r[2]
          ).normalize();
          forward.copy(toTarget);
          up.copy(hVec);
        } else {
          forward.copy(vVec);
          up.copy(hVec);
        }
        break;
      }
    }

    if (forward.lengthSq() > 0.01) {
      // Build orientation matrix: Spacecraft +Z forward, +Y up
      const right = new THREE.Vector3().crossVectors(up, forward).normalize();
      const realUp = new THREE.Vector3().crossVectors(forward, right).normalize();

      const m = new THREE.Matrix4();
      m.makeBasis(right, realUp, forward);
      this.targetQuat.setFromRotationMatrix(m);
    }
  }

  /**
   * Slew attitude towards target quaternion using Slerp
   */
  public update(deltaTime: number, model: SpacecraftModel): { firedThrusters: boolean; pointingErrorDeg: number } {
    // Angular angle between current and target
    const angleRad = this.currentQuat.angleTo(this.targetQuat);
    const angleDeg = (angleRad * 180) / Math.PI;

    let firedThrusters = false;
    const maxStepRad = ((this.maxSlewRateDegPerSec * Math.PI) / 180) * deltaTime;

    if (angleRad > 1e-4) {
      const alpha = Math.min(1.0, maxStepRad / angleRad);
      this.currentQuat.slerp(this.targetQuat, alpha);

      // Trigger thruster pulse if slewing significantly
      if (angleDeg > 1.0) {
        firedThrusters = true;
        model.fireThrusterBurst(Math.min(1.0, angleDeg / 10));
      }
    }

    // Apply orientation to 3D model
    model.group.quaternion.copy(this.currentQuat);
    model.update(deltaTime);

    this.lastFiredThrusters = firedThrusters;
    return { firedThrusters, pointingErrorDeg: angleDeg };
  }

  /**
   * Get telemetry state
   */
  public getState(): ADCSState {
    const euler = new THREE.Euler().setFromQuaternion(this.currentQuat, 'YXZ');
    const angleDeg = (this.currentQuat.angleTo(this.targetQuat) * 180) / Math.PI;

    return {
      mode: this.mode,
      quaternion: [this.currentQuat.x, this.currentQuat.y, this.currentQuat.z, this.currentQuat.w],
      eulerDeg: {
        roll: (euler.z * 180) / Math.PI,
        pitch: (euler.x * 180) / Math.PI,
        yaw: (euler.y * 180) / Math.PI,
      },
      angularVelocityDegS: [0.0, this.lastFiredThrusters ? 1.2 : 0.05, 0.0],
      isSlewing: angleDeg > 0.5,
      pointingErrorDeg: angleDeg,
    };
  }
}
