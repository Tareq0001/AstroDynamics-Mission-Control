/**
 * AstroDynamics Mission Control - Keplerian Orbit Engine
 * Complete two-body mechanics, state vector transformations, and orbital derivations.
 */

import { EARTH } from './constants';

export interface KeplerianElements {
  semiMajorAxis: number; // a in km
  eccentricity: number; // e (dimensionless)
  inclination: number; // i in radians (0 to pi)
  raan: number; // Right Ascension of Ascending Node Omega in radians (0 to 2pi)
  argPeriapsis: number; // Argument of Periapsis omega in radians (0 to 2pi)
  trueAnomaly: number; // nu in radians (0 to 2pi)
}

export interface StateVector {
  r: [number, number, number]; // Position [x, y, z] in km
  v: [number, number, number]; // Velocity [vx, vy, vz] in km/s
}

export interface DerivedOrbitalState {
  rMag: number; // Current distance from central body (km)
  vMag: number; // Current orbital speed (km/s)
  period: number; // Orbital period T (s)
  apoapsis: number; // Apoapsis radius ra (km)
  periapsis: number; // Periapsis radius rp (km)
  apoapsisAlt: number; // Apoapsis altitude above surface (km)
  periapsisAlt: number; // Periapsis altitude above surface (km)
  specificEnergy: number; // Specific orbital energy epsilon (km^2 / s^2)
  angularMomentum: number; // Specific angular momentum h (km^2 / s)
  semiLatusRectum: number; // p = a(1 - e^2) (km)
  flightPathAngle: number; // gamma (radians)
  timeToPeriapsis: number; // s
  meanAnomaly: number; // M (radians)
  eccentricAnomaly: number; // E (radians)
}

/**
 * Solve Kepler's equation for Eccentric Anomaly E given Mean Anomaly M and eccentricity e
 * M = E - e * sin(E)
 * Uses high-precision Newton-Raphson iteration with cubic Halley correction.
 */
export function solveKepler(M: number, e: number, tolerance = 1e-11, maxIter = 100): number {
  // Normalize M to [0, 2pi)
  const twoPi = 2 * Math.PI;
  M = ((M % twoPi) + twoPi) % twoPi;

  if (e < 1.0) {
    // Elliptic orbit initial guess
    let E = e > 0.8 ? Math.PI : M;
    for (let i = 0; i < maxIter; i++) {
      const f = E - e * Math.sin(E) - M;
      const fPrime = 1 - e * Math.cos(E);
      const fDoublePrime = e * Math.sin(E);
      // Halley's method step
      const delta = f / (fPrime - (0.5 * f * fDoublePrime) / fPrime);
      E -= delta;
      if (Math.abs(delta) < tolerance) break;
    }
    return E;
  } else {
    // Hyperbolic orbit (M_h = e * sinh(H) - H)
    let H = Math.log(2 * Math.abs(M) / e + 1.8);
    for (let i = 0; i < maxIter; i++) {
      const f = e * Math.sinh(H) - H - M;
      const fPrime = e * Math.cosh(H) - 1;
      const delta = f / fPrime;
      H -= delta;
      if (Math.abs(delta) < tolerance) break;
    }
    return H;
  }
}

/**
 * Convert Eccentric Anomaly E to True Anomaly nu
 */
export function eccentricToTrueAnomaly(E: number, e: number): number {
  if (e < 1.0) {
    const beta = e / (1 + Math.sqrt(1 - e * e));
    return E + 2 * Math.atan((beta * Math.sin(E)) / (1 - beta * Math.cos(E)));
  } else {
    // Hyperbolic
    return 2 * Math.atan(Math.sqrt((e + 1) / (e - 1)) * Math.tanh(E / 2));
  }
}

/**
 * Convert True Anomaly nu to Eccentric Anomaly E
 */
export function trueToEccentricAnomaly(nu: number, e: number): number {
  if (e < 1.0) {
    return 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(nu / 2));
  } else {
    return 2 * Math.atanh(Math.sqrt((e - 1) / (e + 1)) * Math.tan(nu / 2));
  }
}

/**
 * Convert Keplerian Orbital Elements to Cartesian State Vector [r, v] in the inertial frame
 */
export function keplerianToCartesian(elem: KeplerianElements, mu: number = EARTH.mu): StateVector {
  const { semiMajorAxis: a, eccentricity: e, inclination: i, raan: Omega, argPeriapsis: omega, trueAnomaly: nu } = elem;

  // Semi-latus rectum p
  const p = a * (1 - e * e);
  const rMag = p / (1 + e * Math.cos(nu));

  // Position and velocity in the orbital perifocal frame (PQW)
  const r_pqw: [number, number, number] = [
    rMag * Math.cos(nu),
    rMag * Math.sin(nu),
    0
  ];

  const vCoeff = Math.sqrt(mu / Math.max(1e-6, Math.abs(p)));
  const v_pqw: [number, number, number] = [
    -vCoeff * Math.sin(nu),
    vCoeff * (e + Math.cos(nu)),
    0
  ];

  // Rotation matrix from Perifocal to Inertial frame: R = R_z(-Omega) * R_x(-i) * R_z(-omega)
  const cosO = Math.cos(Omega);
  const sinO = Math.sin(Omega);
  const cosi = Math.cos(i);
  const sini = Math.sin(i);
  const cosw = Math.cos(omega);
  const sinw = Math.sin(omega);

  // Direction cosine matrix entries
  const Px = cosO * cosw - sinO * sinw * cosi;
  const Py = sinO * cosw + cosO * sinw * cosi;
  const Pz = sinw * sini;

  const Qx = -cosO * sinw - sinO * cosw * cosi;
  const Qy = -sinO * sinw + cosO * cosw * cosi;
  const Qz = cosw * sini;

  // Transform coordinates
  const r: [number, number, number] = [
    r_pqw[0] * Px + r_pqw[1] * Qx,
    r_pqw[0] * Py + r_pqw[1] * Qy,
    r_pqw[0] * Pz + r_pqw[1] * Qz,
  ];

  const v: [number, number, number] = [
    v_pqw[0] * Px + v_pqw[1] * Qx,
    v_pqw[0] * Py + v_pqw[1] * Qy,
    v_pqw[0] * Pz + v_pqw[1] * Qz,
  ];

  return { r, v };
}

/**
 * Convert Cartesian State Vector [r, v] to Keplerian Orbital Elements
 */
export function cartesianToKeplerian(r: [number, number, number], v: [number, number, number], mu: number = EARTH.mu): KeplerianElements {
  const rMag = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
  const vMag = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);

  // Angular momentum vector h = r x v
  const h: [number, number, number] = [
    r[1] * v[2] - r[2] * v[1],
    r[2] * v[0] - r[0] * v[2],
    r[0] * v[1] - r[1] * v[0],
  ];
  const hMag = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);

  // Node line vector n = z_hat x h = [-hy, hx, 0]
  const n: [number, number, number] = [-h[1], h[0], 0];
  const nMag = Math.sqrt(n[0] * n[0] + n[1] * n[1]);

  // Eccentricity vector e_vec = ( (v^2 - mu/r)*r - (r.v)*v ) / mu
  const rDotV = r[0] * v[0] + r[1] * v[1] + r[2] * v[2];
  const vSqMinusMuOverR = vMag * vMag - mu / rMag;

  const eVec: [number, number, number] = [
    (vSqMinusMuOverR * r[0] - rDotV * v[0]) / mu,
    (vSqMinusMuOverR * r[1] - rDotV * v[1]) / mu,
    (vSqMinusMuOverR * r[2] - rDotV * v[2]) / mu,
  ];
  const e = Math.sqrt(eVec[0] * eVec[0] + eVec[1] * eVec[1] + eVec[2] * eVec[2]);

  // Specific orbital energy
  const energy = 0.5 * vMag * vMag - mu / rMag;
  const a = Math.abs(energy) > 1e-8 ? -mu / (2 * energy) : Infinity;

  // Inclination i: cos(i) = hz / h
  const i = Math.acos(Math.max(-1, Math.min(1, h[2] / (hMag || 1))));

  // RAAN Omega
  let Omega = 0;
  if (nMag > 1e-8) {
    Omega = Math.acos(Math.max(-1, Math.min(1, n[0] / nMag)));
    if (n[1] < 0) Omega = 2 * Math.PI - Omega;
  }

  // Argument of Periapsis omega
  let omega = 0;
  if (nMag > 1e-8 && e > 1e-6) {
    const nDotE = n[0] * eVec[0] + n[1] * eVec[1];
    omega = Math.acos(Math.max(-1, Math.min(1, nDotE / (nMag * e))));
    if (eVec[2] < 0) omega = 2 * Math.PI - omega;
  } else if (e > 1e-6) {
    omega = Math.atan2(eVec[1], eVec[0]);
    if (omega < 0) omega += 2 * Math.PI;
  }

  // True Anomaly nu
  let nu = 0;
  if (e > 1e-6) {
    const eDotR = eVec[0] * r[0] + eVec[1] * r[1] + eVec[2] * r[2];
    nu = Math.acos(Math.max(-1, Math.min(1, eDotR / (e * rMag))));
    if (rDotV < 0) nu = 2 * Math.PI - nu;
  } else {
    nu = Math.atan2(r[1], r[0]);
    if (nu < 0) nu += 2 * Math.PI;
  }

  return {
    semiMajorAxis: a,
    eccentricity: e,
    inclination: i,
    raan: Omega,
    argPeriapsis: omega,
    trueAnomaly: nu,
  };
}

/**
 * Derive comprehensive orbital state metrics from elements
 */
export function deriveOrbitalState(elem: KeplerianElements, mu: number = EARTH.mu, centralRadius: number = EARTH.radius): DerivedOrbitalState {
  const { semiMajorAxis: a, eccentricity: e, trueAnomaly: nu } = elem;

  const p = a * (1 - e * e);
  const rMag = p / (1 + e * Math.cos(nu));
  const vMag = Math.sqrt(Math.max(0, mu * (2 / rMag - 1 / a)));

  const period = a > 0 ? 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / mu) : Infinity;
  const periapsis = a * (1 - e);
  const apoapsis = e < 1.0 ? a * (1 + e) : Infinity;

  const periapsisAlt = periapsis - centralRadius;
  const apoapsisAlt = apoapsis !== Infinity ? apoapsis - centralRadius : Infinity;

  const specificEnergy = -mu / (2 * a);
  const angularMomentum = Math.sqrt(Math.max(0, mu * p));

  // Flight path angle gamma
  const gamma = Math.atan2(e * Math.sin(nu), 1 + e * Math.cos(nu));

  // Eccentric and mean anomalies
  const E = trueToEccentricAnomaly(nu, e);
  const M = e < 1.0 ? E - e * Math.sin(E) : e * Math.sinh(E) - E;

  // Mean motion n (rad/s)
  const n = a > 0 ? Math.sqrt(mu / Math.pow(a, 3)) : 0;
  // Time since/to periapsis
  const timeToPeriapsis = n > 0 ? (2 * Math.PI - ((M % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / n : 0;

  return {
    rMag,
    vMag,
    period,
    apoapsis,
    periapsis,
    apoapsisAlt,
    periapsisAlt,
    specificEnergy,
    angularMomentum,
    semiLatusRectum: p,
    flightPathAngle: gamma,
    timeToPeriapsis,
    meanAnomaly: M,
    eccentricAnomaly: E,
  };
}
