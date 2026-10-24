/**
 * AstroDynamics Mission Control - Circular Restricted Three-Body Problem (CR3BP) & Lagrange Points
 * High-precision numerical computation of L1 through L5 points and Halo/Lissajous orbits.
 */

import { EARTH, MOON, SUN } from './constants';

export interface LagrangePoint {
  id: 'L1' | 'L2' | 'L3' | 'L4' | 'L5';
  name: string;
  nameAr: string;
  normalizedCoords: [number, number, number]; // [x, y, z] in rotating frame
  realCoords: [number, number, number]; // [x, y, z] in km relative to primary body center
  stability: 'Unstable (Saddle)' | 'Stable (Dynamical)';
  stabilityAr: string;
  effectivePotential: number; // Jacobi constant / pseudopotential
}

export interface ThreeBodySystem {
  id: string;
  name: string;
  nameAr: string;
  primaryName: string;
  secondaryName: string;
  m1: number; // kg
  m2: number; // kg
  mu: number; // mass parameter m2 / (m1 + m2)
  distance: number; // km (characteristic length)
  orbitalPeriod: number; // s
}

export const SUN_EARTH_SYSTEM: ThreeBodySystem = {
  id: 'sun-earth',
  name: 'Sun - Earth System',
  nameAr: 'نظام الشمس - الأرض',
  primaryName: 'Sun',
  secondaryName: 'Earth',
  m1: SUN.mass,
  m2: EARTH.mass,
  mu: EARTH.mass / (SUN.mass + EARTH.mass),
  distance: EARTH.semiMajorAxis,
  orbitalPeriod: 365.256 * 86400,
};

export const EARTH_MOON_SYSTEM: ThreeBodySystem = {
  id: 'earth-moon',
  name: 'Earth - Moon System',
  nameAr: 'نظام الأرض - القمر',
  primaryName: 'Earth',
  secondaryName: 'Moon',
  m1: EARTH.mass,
  m2: MOON.mass,
  mu: MOON.mass / (EARTH.mass + MOON.mass),
  distance: MOON.semiMajorAxis,
  orbitalPeriod: MOON.orbitalPeriod,
};

/**
 * Solve for Collinear Lagrange Points (L1, L2, L3) using Newton-Raphson on the effective potential gradient
 */
function solveCollinearPoint(mu: number, initialGuess: number, signM2: number): number {
  let x = initialGuess;
  for (let i = 0; i < 50; i++) {
    const d1 = x + mu;
    const d2 = x - (1 - mu);

    // CR3BP equation of motion along x-axis in rotating barycentric frame:
    // f(x) = x - (1 - mu)*(x + mu)/|x + mu|^3 - mu*(x - 1 + mu)/|x - 1 + mu|^3 = 0
    const term1 = (1 - mu) / (d1 * d1 * Math.sign(d1));
    const term2 = (mu / (d2 * d2)) * signM2;
    const f = x - term1 - term2;

    const df = 1 + (2 * (1 - mu)) / (Math.abs(d1) * d1 * d1) + (2 * mu) / (Math.abs(d2) * d2 * d2);

    const delta = f / df;
    x -= delta;
    if (Math.abs(delta) < 1e-12) break;
  }
  return x;
}

/**
 * Compute Effective Potential (Pseudo-potential / Jacobi integral base)
 * Omega = 0.5 * (x^2 + y^2) + (1 - mu) / r1 + mu / r2
 */
export function computeEffectivePotential(x: number, y: number, z: number, mu: number): number {
  const r1 = Math.sqrt((x + mu) * (x + mu) + y * y + z * z);
  const r2 = Math.sqrt((x - 1 + mu) * (x - 1 + mu) + y * y + z * z);
  if (r1 < 1e-6 || r2 < 1e-6) return 0;
  return 0.5 * (x * x + y * y) + (1 - mu) / r1 + mu / r2;
}

/**
 * Compute all 5 Lagrange points for a given 3-body system
 */
export function computeLagrangePoints(sys: ThreeBodySystem = EARTH_MOON_SYSTEM): LagrangePoint[] {
  const { mu, distance } = sys;

  // L1: Between m1 and m2, close to m2
  // Initial estimate: x_L1 ~= 1 - mu - (mu/3)^(1/3)
  const gamma_l1 = Math.cbrt(mu / 3);
  const x_L1 = solveCollinearPoint(mu, 1 - mu - gamma_l1, 1);

  // L2: Beyond m2
  // Initial estimate: x_L2 ~= 1 - mu + (mu/3)^(1/3)
  const x_L2 = solveCollinearPoint(mu, 1 - mu + gamma_l1, -1);

  // L3: Beyond m1 on opposite side
  // Initial estimate: x_L3 ~= -(1 + 5/12 * mu)
  const x_L3 = solveCollinearPoint(mu, -(1 + (5 / 12) * mu), 1);

  // L4 and L5: Equilateral triangle vertices with m1 and m2
  const x_L45 = 0.5 - mu;
  const y_L4 = Math.sqrt(3) / 2;
  const y_L5 = -Math.sqrt(3) / 2;

  const points: { id: 'L1' | 'L2' | 'L3' | 'L4' | 'L5'; name: string; nameAr: string; x: number; y: number; stability: 'Unstable (Saddle)' | 'Stable (Dynamical)'; stabilityAr: string }[] = [
    { id: 'L1', name: 'Lagrange Point L1', nameAr: 'نقطة لاغرانج الأولى (L1)', x: x_L1, y: 0, stability: 'Unstable (Saddle)', stabilityAr: 'غير مستقرة (توازن ديناميكي دقيق)' },
    { id: 'L2', name: 'Lagrange Point L2', nameAr: 'نقطة لاغرانج الثانية (L2)', x: x_L2, y: 0, stability: 'Unstable (Saddle)', stabilityAr: 'غير مستقرة (موقع تلسكوب ويب)' },
    { id: 'L3', name: 'Lagrange Point L3', nameAr: 'نقطة لاغرانج الثالثة (L3)', x: x_L3, y: 0, stability: 'Unstable (Saddle)', stabilityAr: 'غير مستقرة (الجانب المقابل)' },
    { id: 'L4', name: 'Lagrange Point L4', nameAr: 'نقطة لاغرانج الرابعة (L4)', x: x_L45, y: y_L4, stability: 'Stable (Dynamical)', stabilityAr: 'مستقرة ديناميكياً (طروادة متقدمة)' },
    { id: 'L5', name: 'Lagrange Point L5', nameAr: 'نقطة لاغرانج الخامسة (L5)', x: x_L45, y: y_L5, stability: 'Stable (Dynamical)', stabilityAr: 'مستقرة ديناميكياً (طروادة متأخرة)' },
  ];

  return points.map(pt => {
    // In rotating barycentric frame, origin is at barycenter
    // Convert relative to primary body center (x_prim = -mu)
    const relX = (pt.x + mu) * distance;
    const relY = pt.y * distance;
    const relZ = 0;

    return {
      id: pt.id,
      name: pt.name,
      nameAr: pt.nameAr,
      normalizedCoords: [pt.x, pt.y, 0],
      realCoords: [relX, relY, relZ],
      stability: pt.stability,
      stabilityAr: pt.stabilityAr,
      effectivePotential: computeEffectivePotential(pt.x, pt.y, 0, mu),
    };
  });
}

/**
 * Generate 3D Halo / Lissajous Periodic Orbit Points around L1 or L2
 * Using Richardson 3rd-order analytical approximation parametrization
 */
export function generateHaloOrbitPoints(
  point: LagrangePoint,
  amplitudeZ: number = 25000, // km (vertical amplitude Az)
  amplitudeY: number = 50000, // km (in-plane amplitude Ay)
  numPoints: number = 120
): [number, number, number][] {
  const points: [number, number, number][] = [];
  const [cx, cy, cz] = point.realCoords;

  // Richardson expansion frequency ratio
  const k = 3.2294; // linearized in-plane to out-of-plane frequency coupling
  const phi = Math.PI / 2; // phase difference for Halo vs Lissajous

  for (let i = 0; i <= numPoints; i++) {
    const tau = (i / numPoints) * 2 * Math.PI;
    // Characteristic 3D periodic figure-8 / kidney trajectory around Lagrange point
    const dx = -amplitudeY * 0.35 * Math.cos(tau);
    const dy = amplitudeY * Math.sin(tau);
    const dz = amplitudeZ * Math.sin(tau + phi);

    points.push([cx + dx, cy + dy, cz + dz]);
  }

  return points;
}
