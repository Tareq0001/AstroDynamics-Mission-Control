/**
 * AstroDynamics Mission Control - 4th-Order Runge-Kutta (RK4) N-Body Integrator
 * High-precision numerical orbital integration including N-Body perturbations and Earth J2 oblateness.
 */

import { EARTH } from './constants';
import { StateVector } from './kepler';

export interface CelestialBody {
  id: string;
  name: string;
  mass: number; // kg
  mu: number; // km^3 / s^2
  radius: number; // km
  position: [number, number, number]; // km (relative to central coordinate origin)
  velocity: [number, number, number]; // km/s
}

export interface AccelerationForces {
  centralGravity: [number, number, number];
  nBodyGravity: [number, number, number];
  j2Oblateness: [number, number, number];
  thrust: [number, number, number];
  total: [number, number, number];
}

/**
 * Compute the J2 oblateness perturbation acceleration (Earth equatorial bulge)
 * a_J2 = -3/2 * J2 * mu * (R_e^2 / r^4) * [ (1 - 5*(z/r)^2)*r/r + 2*(z/r)*z_hat ]
 */
export function computeJ2Acceleration(
  r: [number, number, number],
  mu: number = EARTH.mu,
  radius: number = EARTH.equatorialRadius,
  j2: number = EARTH.J2
): [number, number, number] {
  const r2 = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  const rMag = Math.sqrt(r2);
  if (rMag < 1e-3) return [0, 0, 0];

  const z = r[2];
  const z2OverR2 = (z * z) / r2;
  const factor = (1.5 * j2 * mu * radius * radius) / (r2 * r2);

  const ax = -factor * (r[0] / rMag) * (1 - 5 * z2OverR2);
  const ay = -factor * (r[1] / rMag) * (1 - 5 * z2OverR2);
  const az = -factor * (r[2] / rMag) * (3 - 5 * z2OverR2);

  return [ax, ay, az];
}

/**
 * Compute total gravitational + perturbation acceleration at state r, v
 */
export function computeTotalAcceleration(
  r: [number, number, number],
  bodies: CelestialBody[],
  centralMu: number = EARTH.mu,
  includeJ2: boolean = true,
  centralRadius: number = EARTH.equatorialRadius,
  j2: number = EARTH.J2,
  thrustAcc: [number, number, number] = [0, 0, 0]
): AccelerationForces {
  const r2 = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  const rMag = Math.sqrt(r2);

  // Central body primary two-body gravity: a = -mu * r / r^3
  const centralFactor = -centralMu / (rMag * r2);
  const aCentral: [number, number, number] = [
    centralFactor * r[0],
    centralFactor * r[1],
    centralFactor * r[2],
  ];

  // N-Body third-body gravitational perturbations
  // a_3rd = sum( mu_i * ( (r_i - r) / |r_i - r|^3 - r_i / |r_i|^3 ) )
  const aNBody: [number, number, number] = [0, 0, 0];

  for (const b of bodies) {
    // Vector from spacecraft to 3rd body: d = r_i - r
    const dx = b.position[0] - r[0];
    const dy = b.position[1] - r[1];
    const dz = b.position[2] - r[2];
    const d2 = dx * dx + dy * dy + dz * dz;
    const dMag = Math.sqrt(d2);

    // Vector from central origin to 3rd body
    const rB2 = b.position[0] * b.position[0] + b.position[1] * b.position[1] + b.position[2] * b.position[2];
    const rBMag = Math.sqrt(rB2);

    if (dMag > 1.0 && rBMag > 1.0) {
      const directFactor = b.mu / (d2 * dMag);
      const indirectFactor = b.mu / (rB2 * rBMag);

      aNBody[0] += directFactor * dx - indirectFactor * b.position[0];
      aNBody[1] += directFactor * dy - indirectFactor * b.position[1];
      aNBody[2] += directFactor * dz - indirectFactor * b.position[2];
    }
  }

  // J2 oblateness perturbation
  let aJ2: [number, number, number] = [0, 0, 0];
  if (includeJ2 && centralMu === EARTH.mu) {
    aJ2 = computeJ2Acceleration(r, centralMu, centralRadius, j2);
  }

  const total: [number, number, number] = [
    aCentral[0] + aNBody[0] + aJ2[0] + thrustAcc[0],
    aCentral[1] + aNBody[1] + aJ2[1] + thrustAcc[1],
    aCentral[2] + aNBody[2] + aJ2[2] + thrustAcc[2],
  ];

  return {
    centralGravity: aCentral,
    nBodyGravity: aNBody,
    j2Oblateness: aJ2,
    thrust: thrustAcc,
    total,
  };
}

/**
 * 4th-Order Runge-Kutta Integrator Step
 * y = [r, v], dy/dt = [v, a(r, v)]
 */
export function stepRK4(
  state: StateVector,
  dt: number,
  bodies: CelestialBody[] = [],
  centralMu: number = EARTH.mu,
  includeJ2: boolean = true,
  thrustAcc: [number, number, number] = [0, 0, 0]
): { nextState: StateVector; forces: AccelerationForces } {
  const { r, v } = state;

  // k1
  const f1 = computeTotalAcceleration(r, bodies, centralMu, includeJ2, EARTH.equatorialRadius, EARTH.J2, thrustAcc);
  const k1_v = f1.total;
  const k1_r = v;

  // k2
  const r_k2: [number, number, number] = [
    r[0] + 0.5 * dt * k1_r[0],
    r[1] + 0.5 * dt * k1_r[1],
    r[2] + 0.5 * dt * k1_r[2],
  ];
  const v_k2: [number, number, number] = [
    v[0] + 0.5 * dt * k1_v[0],
    v[1] + 0.5 * dt * k1_v[1],
    v[2] + 0.5 * dt * k1_v[2],
  ];
  const f2 = computeTotalAcceleration(r_k2, bodies, centralMu, includeJ2, EARTH.equatorialRadius, EARTH.J2, thrustAcc);
  const k2_v = f2.total;
  const k2_r = v_k2;

  // k3
  const r_k3: [number, number, number] = [
    r[0] + 0.5 * dt * k2_r[0],
    r[1] + 0.5 * dt * k2_r[1],
    r[2] + 0.5 * dt * k2_r[2],
  ];
  const v_k3: [number, number, number] = [
    v[0] + 0.5 * dt * k2_v[0],
    v[1] + 0.5 * dt * k2_v[1],
    v[2] + 0.5 * dt * k2_v[2],
  ];
  const f3 = computeTotalAcceleration(r_k3, bodies, centralMu, includeJ2, EARTH.equatorialRadius, EARTH.J2, thrustAcc);
  const k3_v = f3.total;
  const k3_r = v_k3;

  // k4
  const r_k4: [number, number, number] = [
    r[0] + dt * k3_r[0],
    r[1] + dt * k3_r[1],
    r[2] + dt * k3_r[2],
  ];
  const v_k4: [number, number, number] = [
    v[0] + dt * k3_v[0],
    v[1] + dt * k3_v[1],
    v[2] + dt * k3_v[2],
  ];
  const f4 = computeTotalAcceleration(r_k4, bodies, centralMu, includeJ2, EARTH.equatorialRadius, EARTH.J2, thrustAcc);
  const k4_v = f4.total;
  const k4_r = v_k4;

  // Final weighted RK4 state update
  const nextR: [number, number, number] = [
    r[0] + (dt / 6) * (k1_r[0] + 2 * k2_r[0] + 2 * k3_r[0] + k4_r[0]),
    r[1] + (dt / 6) * (k1_r[1] + 2 * k2_r[1] + 2 * k3_r[1] + k4_r[1]),
    r[2] + (dt / 6) * (k1_r[2] + 2 * k2_r[2] + 2 * k3_r[2] + k4_r[2]),
  ];

  const nextV: [number, number, number] = [
    v[0] + (dt / 6) * (k1_v[0] + 2 * k2_v[0] + 2 * k3_v[0] + k4_v[0]),
    v[1] + (dt / 6) * (k1_v[1] + 2 * k2_v[1] + 2 * k3_v[1] + k4_v[1]),
    v[2] + (dt / 6) * (k1_v[2] + 2 * k2_v[2] + 2 * k3_v[2] + k4_v[2]),
  ];

  return {
    nextState: { r: nextR, v: nextV },
    forces: f1,
  };
}

/**
 * Predict future orbital trajectory points using multi-step RK4
 */
export function predictTrajectory(
  initialState: StateVector,
  totalTimeSeconds: number,
  numPoints: number = 200,
  bodies: CelestialBody[] = [],
  centralMu: number = EARTH.mu
): [number, number, number][] {
  const points: [number, number, number][] = [initialState.r];
  let curr = { ...initialState };
  const dt = totalTimeSeconds / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const res = stepRK4(curr, dt, bodies, centralMu, true, [0, 0, 0]);
    curr = res.nextState;
    points.push(curr.r);
  }

  return points;
}
