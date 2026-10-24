/**
 * AstroDynamics Mission Control - Turnkey Mission Profiles (Instant 1-Click Load)
 * Artemis NRHO, Mars 2026 Transit, James Webb Telescope L2 Halo, and Voyager Grand Tour.
 */

import { KeplerianElements } from '../physics/kepler';
import { EARTH, MOON, SUN } from '../physics/constants';
import { computeLagrangePoints, generateHaloOrbitPoints, SUN_EARTH_SYSTEM, EARTH_MOON_SYSTEM } from '../physics/lagrange';
import { ADCSMode } from '../spacecraft/adcs';

export interface MissionConfig {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  initialElements: KeplerianElements;
  centralBody: 'EARTH' | 'SUN' | 'MOON' | 'MARS';
  adcsMode: ADCSMode;
  solarDeployment: number;
  cameraMode: 'CHASE' | 'EARTH' | 'SOLAR' | 'TARGET';
  haloPoints?: [number, number, number][];
  targetPosition?: [number, number, number];
  missionDurationDays: number;
}

export const MISSIONS: MissionConfig[] = [
  {
    id: 'artemis',
    name: 'Artemis Lunar Gateway & NRHO',
    nameAr: 'أرتميس: بوابة القمر ومدار الهالة NRHO',
    description: 'Translunar Injection (TLI), Lunar Orbit Insertion (LOI), and Near-Rectilinear Halo Orbit (NRHO) 9:2 lunar resonant orbit.',
    descriptionAr: 'حقن المدار القمري (TLI)، وأسر المدار القمري (LOI)، والدخول في مدار الهالة شبه المستطيل (NRHO) المخصص للمحطة القمرية.',
    centralBody: 'EARTH',
    initialElements: {
      semiMajorAxis: 195000, // Highly eccentric translunar / lunar resonant ellipse
      eccentricity: 0.942,
      inclination: (28.5 * Math.PI) / 180,
      raan: (40 * Math.PI) / 180,
      argPeriapsis: (180 * Math.PI) / 180,
      trueAnomaly: 0.2,
    },
    adcsMode: 'EARTH_POINTING',
    solarDeployment: 1.0,
    cameraMode: 'CHASE',
    targetPosition: [MOON.semiMajorAxis, 0, 0],
    missionDurationDays: 6.5,
  },
  {
    id: 'mars2026',
    name: 'Mars 2026 Transit & Aerocapture',
    nameAr: 'رحلة المريخ 2026 والكبح الجوي',
    description: 'Heliocentric Hohmann transfer arc departing Earth at 11.2 km/s with hypervelocity aerocapture entry interface trajectory.',
    descriptionAr: 'قوس انتقال هوهمان الشمسي من مدار الأرض بسرعة انطلاق 11.2 كم/ث، مع مناورة الكبح الجوي في غلاف المريخ الرقيق.',
    centralBody: 'SUN',
    initialElements: {
      semiMajorAxis: 188768000, // ~1.26 AU transfer ellipse to Mars
      eccentricity: 0.207,
      inclination: (1.85 * Math.PI) / 180,
      raan: (25 * Math.PI) / 180,
      argPeriapsis: 0,
      trueAnomaly: 0.85,
    },
    adcsMode: 'PROGRADE',
    solarDeployment: 1.0,
    cameraMode: 'SOLAR',
    targetPosition: [227939366, 0, 0],
    missionDurationDays: 259,
  },
  {
    id: 'jwst',
    name: 'James Webb Space Telescope (JWST)',
    nameAr: 'تلسكوب جيمس ويب (نقطة لاغرانج L2)',
    description: 'Sun-Earth L2 Lagrange Halo Orbit 1.5 million km from Earth, keeping the 5-layer Kapton sunshield permanently facing Sun & Earth.',
    descriptionAr: 'مدار هالة متوازن ثلاثي الأبعاد حول نقطة لاغرانج L2 على مسافة 1.5 مليون كم، مع توجيه الدرع الشمسي لحجب حرارة الشمس والأرض.',
    centralBody: 'EARTH',
    initialElements: {
      semiMajorAxis: 1500000,
      eccentricity: 0.05,
      inclination: (0.1 * Math.PI) / 180,
      raan: 0,
      argPeriapsis: 0,
      trueAnomaly: 0,
    },
    adcsMode: 'SUN_POINTING',
    solarDeployment: 1.0,
    cameraMode: 'CHASE',
    haloPoints: generateHaloOrbitPoints(
      computeLagrangePoints(SUN_EARTH_SYSTEM).find(p => p.id === 'L2')!,
      400000,
      800000,
      120
    ),
    missionDurationDays: 30,
  },
  {
    id: 'voyager',
    name: 'Voyager Grand Tour Slingshot',
    nameAr: 'رحلة فوياجر والمقلاع الجاذبي لكوكب المشتري',
    description: 'Hyperbolic solar system escape trajectory accelerated past Jupiter and Saturn via multiple planetary gravitational assists.',
    descriptionAr: 'مسار هروب هائل بقطع زائد فائق السرعة متجاوزاً جاذبية المشتري وزحل نحو فضاء النجوم السحيق خارج حافة الهيليوسفير.',
    centralBody: 'SUN',
    initialElements: {
      semiMajorAxis: 778000000,
      eccentricity: 1.38, // Hyperbolic escape
      inclination: (3.1 * Math.PI) / 180,
      raan: (110 * Math.PI) / 180,
      argPeriapsis: (45 * Math.PI) / 180,
      trueAnomaly: -0.6,
    },
    adcsMode: 'EARTH_POINTING',
    solarDeployment: 0.0, // Voyager used RTG nuclear power, not solar panels
    cameraMode: 'SOLAR',
    targetPosition: [778412020, 0, 0],
    missionDurationDays: 1460,
  },
];
