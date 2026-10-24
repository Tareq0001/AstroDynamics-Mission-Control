/**
 * AstroDynamics Mission Control - Deep Space Network (DSN) Telemetry & RF Link Budget
 * Friis equation, free-space path loss, speed-of-light delay, and Doppler shift.
 */

import { C_LIGHT, DSN_STATIONS, EARTH, GroundStation } from './constants';

export interface LinkBudgetResult {
  activeStation: GroundStation;
  distanceKm: number;
  oneWayLightTimeSeconds: number; // OWLT
  oneWayLightTimeString: string;
  roundTripLightTimeSeconds: number; // RTLT
  fsplDb: number; // Free Space Path Loss (dB)
  receivedPowerDbm: number; // Pr (dBm)
  snrDb: number; // Signal to Noise Ratio (dB)
  carrierFrequencyGHz: number;
  dopplerShiftHz: number; // delta f (Hz)
  stationElevationDeg: number; // Elevation angle above local horizon (degrees)
  isInLineOfSight: boolean;
  bitrateKbps: number;
  stationAzimuthDeg: number;
}

/**
 * Calculate Antenna Gain in dBi from physical diameter and efficiency
 * G = 10 * log10( eta * (pi * D / lambda)^2 )
 */
export function calculateAntennaGain(diameterMeters: number, frequencyGHz: number, efficiency: number = 0.65): number {
  const lambda = C_LIGHT / (frequencyGHz * 1e9); // wavelength in meters
  const linearGain = efficiency * Math.pow((Math.PI * diameterMeters) / lambda, 2);
  return 10 * Math.log10(Math.max(1, linearGain));
}

/**
 * Convert Earth Lat/Lon/Alt to Earth-Centered Inertial (ECI) coordinates at a given epoch time
 */
export function geoToEci(
  latDeg: number,
  lonDeg: number,
  earthRotationAngleRad: number,
  altitudeKm: number = 0
): [number, number, number] {
  const latRad = (latDeg * Math.PI) / 180;
  const lonRad = (lonDeg * Math.PI) / 180 + earthRotationAngleRad;
  const r = EARTH.radius + altitudeKm;

  return [
    r * Math.cos(latRad) * Math.cos(lonRad),
    r * Math.cos(latRad) * Math.sin(lonRad),
    r * Math.sin(latRad),
  ];
}

/**
 * Compute RF Link Budget between Spacecraft and DSN Ground Stations
 */
export function computeLinkBudget(
  scPosition: [number, number, number], // km in ECI
  scVelocity: [number, number, number], // km/s in ECI
  scTxPowerWatts: number = 25, // 25W spacecraft high-gain TWTA
  scAntennaDiameterMeters: number = 2.4, // 2.4m HGA dish
  earthRotationAngleRad: number = 0,
  frequencyGHz: number = 8.42 // X-Band deep space downlink
): LinkBudgetResult {
  // Find highest elevation / best line-of-sight DSN station
  let bestStation = DSN_STATIONS[0];
  let maxElevation = -90;
  let bestDist = Infinity;
  let bestAzimuth = 0;
  let bestStationEci: [number, number, number] = [0, 0, 0];

  for (const st of DSN_STATIONS) {
    const stEci = geoToEci(st.lat, st.lon, earthRotationAngleRad);
    // Vector from station to spacecraft
    const rho: [number, number, number] = [
      scPosition[0] - stEci[0],
      scPosition[1] - stEci[1],
      scPosition[2] - stEci[2],
    ];
    const dist = Math.sqrt(rho[0] * rho[0] + rho[1] * rho[1] + rho[2] * rho[2]);

    // Local zenith vector is station ECI direction
    const stMag = Math.sqrt(stEci[0] * stEci[0] + stEci[1] * stEci[1] + stEci[2] * stEci[2]);
    const zenith: [number, number, number] = [stEci[0] / stMag, stEci[1] / stMag, stEci[2] / stMag];

    // Elevation angle: sin(el) = (rho . zenith) / |rho|
    const sinEl = (rho[0] * zenith[0] + rho[1] * zenith[1] + rho[2] * zenith[2]) / dist;
    const elevationDeg = (Math.asin(Math.max(-1, Math.min(1, sinEl))) * 180) / Math.PI;

    if (elevationDeg > maxElevation) {
      maxElevation = elevationDeg;
      bestStation = st;
      bestDist = dist;
      bestStationEci = stEci;
      bestAzimuth = Math.atan2(rho[1], rho[0]) * (180 / Math.PI);
    }
  }

  // If none above horizon, use station with least negative elevation (or goldstone by default)
  const distanceKm = Math.max(10, bestDist);
  const distanceMeters = distanceKm * 1000;

  // Speed-of-Light Time Delays
  const owlt = distanceMeters / C_LIGHT;
  const rtlt = owlt * 2;

  // Format OWLT nicely
  let owltStr = `${owlt.toFixed(2)} s`;
  if (owlt > 60) {
    const mins = Math.floor(owlt / 60);
    const secs = (owlt % 60).toFixed(1);
    owltStr = `${mins}m ${secs}s`;
  }

  // Wavelength lambda = c / f
  const lambda = C_LIGHT / (frequencyGHz * 1e9);

  // Friis Free-Space Path Loss: FSPL = 20*log10(4*pi*d / lambda)
  const fsplDb = 20 * Math.log10((4 * Math.PI * distanceMeters) / lambda);

  // Transmitter power in dBm
  const txPowerDbm = 10 * Math.log10(scTxPowerWatts * 1000);

  // Spacecraft HGA Antenna Gain
  const txGainDbi = calculateAntennaGain(scAntennaDiameterMeters, frequencyGHz, 0.60);

  // Ground Station 70m Dish Gain
  const rxGainDbi = calculateAntennaGain(bestStation.antennaDiameter, frequencyGHz, 0.70);

  // Received Power: Pr (dBm) = Pt + Gt + Gr - FSPL - AtmLoss(approx 0.5dB)
  const receivedPowerDbm = txPowerDbm + txGainDbi + rxGainDbi - fsplDb - 0.5;

  // Thermal noise floor: N0 = k * T * B (for cryogenic 20K cooled receiver)
  // Approximate realistic SNR (Signal-to-Noise Ratio) in dB
  const noiseFloorDbm = -174 + 10 * Math.log10(20) + 10 * Math.log10(100000); // ~ -111 dBm for 100kHz bandwidth
  const snrDb = Math.max(-5, Math.min(65, receivedPowerDbm - noiseFloorDbm));

  // Doppler Shift: delta_f = f0 * (v_radial / c)
  // Radial relative velocity = v . (rho / |rho|)
  const rhoNorm: [number, number, number] = [
    (scPosition[0] - bestStationEci[0]) / distanceKm,
    (scPosition[1] - bestStationEci[1]) / distanceKm,
    (scPosition[2] - bestStationEci[2]) / distanceKm,
  ];
  const vRadialKmS = scVelocity[0] * rhoNorm[0] + scVelocity[1] * rhoNorm[1] + scVelocity[2] * rhoNorm[2];
  const vRadialMS = vRadialKmS * 1000;
  const dopplerShiftHz = -(frequencyGHz * 1e9 * (vRadialMS / C_LIGHT));

  // Adaptive telemetry bitrate based on SNR
  let bitrateKbps = 1.0;
  if (snrDb > 25) bitrateKbps = 2048;
  else if (snrDb > 18) bitrateKbps = 512;
  else if (snrDb > 10) bitrateKbps = 128;
  else if (snrDb > 5) bitrateKbps = 32;
  else bitrateKbps = 4;

  return {
    activeStation: bestStation,
    distanceKm,
    oneWayLightTimeSeconds: owlt,
    oneWayLightTimeString: owltStr,
    roundTripLightTimeSeconds: rtlt,
    fsplDb,
    receivedPowerDbm,
    snrDb,
    carrierFrequencyGHz: frequencyGHz,
    dopplerShiftHz,
    stationElevationDeg: maxElevation,
    isInLineOfSight: maxElevation > 5.0,
    bitrateKbps,
    stationAzimuthDeg: ((bestAzimuth % 360) + 360) % 360,
  };
}
