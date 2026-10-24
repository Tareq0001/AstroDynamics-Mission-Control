/**
 * AstroDynamics Mission Control - Astronomical & Physical Constants
 * Standard Gravitational Parameters (mu = G * M), Radii, and Reference Units
 */

// Universal Gravitational Constant (m^3 / kg / s^2)
export const G = 6.67430e-11;

// Speed of Light (m/s)
export const C_LIGHT = 299792458;

// Standard Gravity at Earth Sea Level (m/s^2)
export const G0 = 9.80665;

// Earth Parameters (WGS84 / EGM96)
export const EARTH = {
  name: 'Earth',
  mass: 5.9722e24, // kg
  radius: 6371.0, // km (mean radius)
  equatorialRadius: 6378.137, // km
  polarRadius: 6356.752, // km
  mu: 398600.4418, // km^3 / s^2 (Standard gravitational parameter)
  J2: 1.08263e-3, // Second dynamic form factor (oblateness perturbation)
  rotationPeriod: 86164.0905, // s (Sidereal day ~23h 56m 4.09s)
  semiMajorAxis: 149597870.7, // km (1 AU)
  color: 0x2277ff,
  atmosphereHeight: 120.0, // km
};

// Moon Parameters
export const MOON = {
  name: 'Moon',
  mass: 7.342e22, // kg
  radius: 1737.4, // km
  mu: 4902.800066, // km^3 / s^2
  semiMajorAxis: 384400.0, // km (relative to Earth)
  eccentricity: 0.0549,
  inclination: 5.145, // deg
  orbitalPeriod: 27.321661 * 86400, // s
  color: 0xcccccc,
};

// Mars Parameters
export const MARS = {
  name: 'Mars',
  mass: 6.4171e23, // kg
  radius: 3389.5, // km
  mu: 42828.375214, // km^3 / s^2
  semiMajorAxis: 227939366.0, // km (1.524 AU)
  eccentricity: 0.0934,
  inclination: 1.85, // deg
  orbitalPeriod: 686.971 * 86400, // s
  color: 0xdd5533,
};

// Sun Parameters
export const SUN = {
  name: 'Sun',
  mass: 1.9885e30, // kg
  radius: 696340.0, // km
  mu: 1.32712440018e11, // km^3 / s^2
  color: 0xffcc33,
};

// Jupiter Parameters
export const JUPITER = {
  name: 'Jupiter',
  mass: 1.8982e27, // kg
  radius: 69911.0, // km
  mu: 126686534.0, // km^3 / s^2
  semiMajorAxis: 778412020.0, // km (5.204 AU)
  eccentricity: 0.0484,
  inclination: 1.305, // deg
  orbitalPeriod: 4332.59 * 86400, // s
  color: 0xd4a373,
};

// Saturn Parameters
export const SATURN = {
  name: 'Saturn',
  mass: 5.6834e26, // kg
  radius: 58232.0, // km
  mu: 37931187.0, // km^3 / s^2
  semiMajorAxis: 1433530000.0, // km (9.582 AU)
  eccentricity: 0.0541,
  inclination: 2.484, // deg
  orbitalPeriod: 10759.22 * 86400, // s
  color: 0xe2c892,
};

// Deep Space Network (DSN) Ground Stations
export interface GroundStation {
  id: string;
  name: string;
  location: string;
  lat: number; // deg
  lon: number; // deg
  antennaDiameter: number; // meters (70m main dish)
  txPowerWatts: number; // 20kW uplink
  frequencyGHz: number; // X-Band ~8.4 GHz
}

export const DSN_STATIONS: GroundStation[] = [
  {
    id: 'goldstone',
    name: 'Goldstone DSN (DSS-14)',
    location: 'Mojave Desert, California, USA',
    lat: 35.4267,
    lon: -116.89,
    antennaDiameter: 70,
    txPowerWatts: 20000,
    frequencyGHz: 8.45,
  },
  {
    id: 'madrid',
    name: 'Madrid DSN (DSS-63)',
    location: 'Robledo de Chavela, Spain',
    lat: 40.4314,
    lon: -4.2481,
    antennaDiameter: 70,
    txPowerWatts: 20000,
    frequencyGHz: 8.45,
  },
  {
    id: 'canberra',
    name: 'Canberra DSN (DSS-43)',
    location: 'Tidbinbilla, ACT, Australia',
    lat: -35.4014,
    lon: 148.9817,
    antennaDiameter: 70,
    txPowerWatts: 20000,
    frequencyGHz: 8.45,
  },
];
