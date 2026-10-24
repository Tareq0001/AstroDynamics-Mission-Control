/**
 * AstroDynamics Mission Control - Interplanetary Maneuvers & Orbital Transfers
 * Hohmann transfers, bi-elliptic transfers, gravitational flyby slingshots, and rocket equations.
 */

import { EARTH, G0 } from './constants';

export interface HohmannTransferResult {
  r1: number; // km
  r2: number; // km
  semiMajorAxis: number; // a_tx in km
  eccentricity: number; // e_tx
  deltaV1: number; // km/s
  deltaV2: number; // km/s
  totalDeltaV: number; // km/s
  transferTimeSeconds: number; // s
  transferTimeHours: number; // hr
  transferTimeDays: number; // days
  phaseAngleRad: number; // lead angle needed at departure
  phaseAngleDeg: number;
}

export interface BiEllipticResult {
  r1: number;
  r2: number;
  rb: number; // intermediate apoapsis
  deltaV1: number;
  deltaV2: number;
  deltaV3: number;
  totalDeltaV: number;
  transferTimeSeconds: number;
  transferTimeDays: number;
  isMoreEfficientThanHohmann: boolean;
}

export interface SlingshotResult {
  vInf: number; // Hyperbolic excess velocity (km/s)
  periapsisRadius: number; // rp (km)
  periapsisAltitude: number; // rp - R_body (km)
  turnAngleRad: number; // delta in radians
  turnAngleDeg: number; // delta in degrees
  impactParameter: number; // b = rp * sqrt(1 + 2*mu/(rp * vInf^2)) (km)
  deltaVHelio: number; // Maximum velocity change vector magnitude (km/s)
  heliocentricEnergyGain: number; // km^2 / s^2
}

export interface PropellantBudget {
  initialMass: number; // kg
  finalMass: number; // kg
  propellantConsumed: number; // kg
  propellantRemaining: number; // kg
  isp: number; // specific impulse (s)
  deltaVExpended: number; // km/s
  deltaVRemaining: number; // km/s
}

/**
 * Calculate Hohmann Transfer between two coplanar circular orbits
 */
export function calculateHohmannTransfer(r1: number, r2: number, mu: number = EARTH.mu): HohmannTransferResult {
  const a_tx = (r1 + r2) / 2;
  const e_tx = Math.abs(r2 - r1) / (r1 + r2);

  const v1 = Math.sqrt(mu / r1);
  const v2 = Math.sqrt(mu / r2);

  const v_tx1 = Math.sqrt(mu * (2 / r1 - 1 / a_tx));
  const v_tx2 = Math.sqrt(mu * (2 / r2 - 1 / a_tx));

  const deltaV1 = Math.abs(v_tx1 - v1);
  const deltaV2 = Math.abs(v2 - v_tx2);
  const totalDeltaV = deltaV1 + deltaV2;

  // Half-period of transfer ellipse
  const transferTimeSeconds = Math.PI * Math.sqrt(Math.pow(a_tx, 3) / mu);
  const transferTimeHours = transferTimeSeconds / 3600;
  const transferTimeDays = transferTimeSeconds / 86400;

  // Phase angle required for rendezvous
  // Target angular velocity omega2 = sqrt(mu / r2^3)
  const omega2 = Math.sqrt(mu / Math.pow(r2, 3));
  const targetMotion = omega2 * transferTimeSeconds;
  let phaseAngleRad = Math.PI - targetMotion;
  while (phaseAngleRad < 0) phaseAngleRad += 2 * Math.PI;
  while (phaseAngleRad >= 2 * Math.PI) phaseAngleRad -= 2 * Math.PI;
  const phaseAngleDeg = (phaseAngleRad * 180) / Math.PI;

  return {
    r1,
    r2,
    semiMajorAxis: a_tx,
    eccentricity: e_tx,
    deltaV1,
    deltaV2,
    totalDeltaV,
    transferTimeSeconds,
    transferTimeHours,
    transferTimeDays,
    phaseAngleRad,
    phaseAngleDeg,
  };
}

/**
 * Calculate Bi-Elliptic Transfer
 */
export function calculateBiEllipticTransfer(
  r1: number,
  r2: number,
  rb: number,
  mu: number = EARTH.mu
): BiEllipticResult {
  // Transfer ellipse 1: r1 to rb
  const a1 = (r1 + rb) / 2;
  const v1 = Math.sqrt(mu / r1);
  const v_tx1_peri = Math.sqrt(mu * (2 / r1 - 1 / a1));
  const deltaV1 = Math.abs(v_tx1_peri - v1);

  // At intermediate apoapsis rb
  const v_tx1_apo = Math.sqrt(mu * (2 / rb - 1 / a1));
  const a2 = (rb + r2) / 2;
  const v_tx2_apo = Math.sqrt(mu * (2 / rb - 1 / a2));
  const deltaV2 = Math.abs(v_tx2_apo - v_tx1_apo);

  // At final orbit r2
  const v_tx2_peri = Math.sqrt(mu * (2 / r2 - 1 / a2));
  const v2 = Math.sqrt(mu / r2);
  const deltaV3 = Math.abs(v2 - v_tx2_peri);

  const totalDeltaV = deltaV1 + deltaV2 + deltaV3;
  const t1 = Math.PI * Math.sqrt(Math.pow(a1, 3) / mu);
  const t2 = Math.PI * Math.sqrt(Math.pow(a2, 3) / mu);
  const transferTimeSeconds = t1 + t2;

  // Compare with Hohmann
  const hohmann = calculateHohmannTransfer(r1, r2, mu);
  const isMoreEfficientThanHohmann = totalDeltaV < hohmann.totalDeltaV;

  return {
    r1,
    r2,
    rb,
    deltaV1,
    deltaV2,
    deltaV3,
    totalDeltaV,
    transferTimeSeconds,
    transferTimeDays: transferTimeSeconds / 86400,
    isMoreEfficientThanHohmann,
  };
}

/**
 * Calculate Gravitational Slingshot (Flyby Assist)
 * Hyperbolic excess velocity turn angle: delta = 2 * arcsin(1 / (1 + rp * vInf^2 / mu))
 */
export function calculateSlingshot(
  vInf: number,
  periapsisRadius: number,
  planetRadius: number,
  mu: number,
  planetOrbitalSpeed: number
): SlingshotResult {
  const periapsisAltitude = periapsisRadius - planetRadius;
  const denom = 1 + (periapsisRadius * vInf * vInf) / mu;
  const sinHalfDelta = 1 / Math.max(1.0001, denom);
  const turnAngleRad = 2 * Math.asin(Math.min(0.99999, sinHalfDelta));
  const turnAngleDeg = (turnAngleRad * 180) / Math.PI;

  // Impact parameter b
  const impactParameter = periapsisRadius * Math.sqrt(1 + (2 * mu) / (periapsisRadius * vInf * vInf));

  // In heliocentric frame: max delta-V change vector magnitude
  const deltaVHelio = 2 * vInf * Math.sin(turnAngleRad / 2);

  // Maximum heliocentric energy gain approx: delta_E = 2 * v_planet * vInf * sin(delta/2)
  const heliocentricEnergyGain = 2 * planetOrbitalSpeed * vInf * Math.sin(turnAngleRad / 2);

  return {
    vInf,
    periapsisRadius,
    periapsisAltitude,
    turnAngleRad,
    turnAngleDeg,
    impactParameter,
    deltaVHelio,
    heliocentricEnergyGain,
  };
}

/**
 * Tsiolkovsky Rocket Equation & Mass Budget
 * Delta-V = Isp * g0 * ln(m0 / mf)
 */
export function calculateRocketEquation(
  m0: number, // Initial wet mass (kg)
  propellantCapacity: number, // Max fuel (kg)
  deltaVNeeded: number, // Target Delta-V in km/s (converted to m/s)
  isp: number = 320 // Specific Impulse in seconds (hypergolic RCS/OMS)
): PropellantBudget {
  const deltaVMeters = deltaVNeeded * 1000;
  const cEffective = isp * G0; // Effective exhaust velocity (m/s)

  // Mass ratio needed: m0 / mf = exp(deltaV / c)
  const massRatio = Math.exp(deltaVMeters / cEffective);
  const mf = m0 / massRatio;
  const propellantConsumed = m0 - mf;
  const propellantRemaining = Math.max(0, propellantCapacity - propellantConsumed);

  // Total delta-V available with remaining propellant
  const dryMass = m0 - propellantCapacity;
  const deltaVRemaining = ((isp * G0 * Math.log((dryMass + propellantRemaining) / dryMass)) / 1000);

  return {
    initialMass: m0,
    finalMass: mf,
    propellantConsumed,
    propellantRemaining,
    isp,
    deltaVExpended: deltaVNeeded,
    deltaVRemaining: Math.max(0, deltaVRemaining),
  };
}

/**
 * Compute Unit Directions for Maneuver Burns
 * [prograde, normal, radial]
 */
export function getManeuverFrame(
  r: [number, number, number],
  v: [number, number, number]
): {
  prograde: [number, number, number];
  retrograde: [number, number, number];
  normal: [number, number, number];
  antiNormal: [number, number, number];
  radialOut: [number, number, number];
  radialIn: [number, number, number];
} {
  const vMag = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  const prograde: [number, number, number] = [v[0] / vMag, v[1] / vMag, v[2] / vMag];
  const retrograde: [number, number, number] = [-prograde[0], -prograde[1], -prograde[2]];

  // Normal = r x v / |r x v|
  const hx = r[1] * v[2] - r[2] * v[1];
  const hy = r[2] * v[0] - r[0] * v[2];
  const hz = r[0] * v[1] - r[1] * v[0];
  const hMag = Math.sqrt(hx * hx + hy * hy + hz * hz);

  const normal: [number, number, number] = [hx / (hMag || 1), hy / (hMag || 1), hz / (hMag || 1)];
  const antiNormal: [number, number, number] = [-normal[0], -normal[1], -normal[2]];

  // Radial-Out = Normal x Prograde
  const rx = normal[1] * prograde[2] - normal[2] * prograde[1];
  const ry = normal[2] * prograde[0] - normal[0] * prograde[2];
  const rz = normal[0] * prograde[1] - normal[1] * prograde[0];
  const rMag = Math.sqrt(rx * rx + ry * ry + rz * rz);

  const radialOut: [number, number, number] = [rx / (rMag || 1), ry / (rMag || 1), rz / (rMag || 1)];
  const radialIn: [number, number, number] = [-radialOut[0], -radialOut[1], -radialOut[2]];

  return { prograde, retrograde, normal, antiNormal, radialOut, radialIn };
}
