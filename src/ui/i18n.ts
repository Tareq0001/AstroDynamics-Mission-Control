/**
 * AstroDynamics Mission Control - Bilingual Aerospace Dictionary (English / Arabic)
 * Full aerospace engineering terminology with instant RTL/LTR switching.
 */

export type Language = 'en' | 'ar';

export const TRANSLATIONS = {
  en: {
    appTitle: 'AstroDynamics Mission Control',
    appSubtitle: 'Orbital Mechanics & Deep Space Flight Director',
    authorBadge: 'Engineered by Tareq Abuashi',

    // Nav Tabs
    tabTelemetry: 'Flight Telemetry',
    tabKepler: 'Keplerian Elements',
    tabManeuvers: 'Maneuver Planner',
    tabMissions: 'Mission Profiles',
    tabDsn: 'DSN Link Budget',
    tabLagrange: 'Lagrange Points',

    // Mission Profiles
    missionArtemisTitle: 'Artemis Lunar Gateway & NRHO',
    missionArtemisDesc: 'Translunar Injection (TLI), Lunar Orbit Insertion (LOI), and Near-Rectilinear Halo Orbit (NRHO).',
    missionMarsTitle: 'Mars 2026 Transit & Aerocapture',
    missionMarsDesc: 'Heliocentric Hohmann transfer arc with hypervelocity Mars atmospheric entry interface.',
    missionJwstTitle: 'James Webb Space Telescope (JWST)',
    missionJwstDesc: 'Sun-Earth L2 Lagrange Halo Orbit with multi-layer deployable sunshield orientation.',
    missionVoyagerTitle: 'Voyager Grand Tour Slingshot',
    missionVoyagerDesc: 'Barycentric gravity assist flybys past Jupiter and Saturn escaping the solar system.',
    btnLaunchMission: 'Execute Mission Profile',

    // Keplerian Elements
    semiMajorAxis: 'Semi-Major Axis (a)',
    eccentricity: 'Eccentricity (e)',
    inclination: 'Inclination (i)',
    raan: 'RAAN (Ω)',
    argPeriapsis: 'Arg. of Periapsis (ω)',
    trueAnomaly: 'True Anomaly (ν)',
    resetOrbit: 'Reset Nominal Orbit',

    // Telemetry HUD
    flightStatus: 'TRAJECTORY STATUS',
    orbitalVelocity: 'Orbital Speed (v)',
    altitude: 'Current Altitude',
    periapsisAlt: 'Periapsis Alt (rp)',
    apoapsisAlt: 'Apoapsis Alt (ra)',
    orbitalPeriod: 'Orbital Period (T)',
    specificEnergy: 'Specific Energy (ε)',
    timeToPeriapsis: 'Time to Periapsis',
    fuelRemaining: 'Propellant Remaining',
    deltaVRemaining: 'Remaining Δv',

    // ADCS
    adcsMode: 'ADCS Guidance Mode',
    adcsPrograde: 'Prograde (+v)',
    adcsRetrograde: 'Retrograde (-v)',
    adcsNormal: 'Normal (+h)',
    adcsAntiNormal: 'Anti-Normal (-h)',
    adcsEarth: 'Earth-Point',
    adcsSun: 'Sun-Point',
    adcsTarget: 'Target-Point',
    adcsManual: 'Manual',
    slewRate: 'Attitude Slew Rate',
    pointingError: 'Pointing Error',

    // Maneuver Planner
    maneuverHeading: 'Delta-V & Transfer Calculator',
    hohmannTransfer: 'Hohmann Transfer',
    biEllipticTransfer: 'Bi-Elliptic Transfer',
    slingshotAssist: 'Gravitational Slingshot',
    initialRadius: 'Initial Orbit Radius (r1)',
    finalRadius: 'Target Orbit Radius (r2)',
    intermediateRadius: 'Intermediate Apoapsis (rb)',
    burn1DeltaV: 'Burn 1 (Δv1)',
    burn2DeltaV: 'Burn 2 (Δv2)',
    burn3DeltaV: 'Burn 3 (Δv3)',
    totalDeltaV: 'Total Delta-V (Δv_tot)',
    transferTime: 'Transfer Duration',
    executeBurn: 'Execute Maneuver Burn',

    // DSN
    dsnHeading: 'Deep Space Network (DSN) Telemetry',
    activeStation: 'Active Ground Station',
    owlt: 'One-Way Light Time (OWLT)',
    rtlt: 'Round-Trip Light Time (RTLT)',
    fspl: 'Free Space Path Loss (FSPL)',
    signalStrength: 'Received Power (Pr)',
    snr: 'Signal-to-Noise Ratio (SNR)',
    dopplerShift: 'Doppler Frequency Shift',
    lineOfSight: 'Line of Sight Status',
    bitrate: 'Downlink Data Rate',

    // Cameras
    camCockpit: 'Spacecraft Chase',
    camEarth: 'Earth Centered',
    camSolar: 'Solar System',
    camTarget: 'Target Track',

    // Audio
    soundMute: 'Mute Audio',
    soundUnmute: 'Unmute Audio',

    // Graphs
    chartVelocity: 'VELOCITY HISTORY (km/s)',
    chartDeltaV: 'DELTA-V CONSUMPTION (km/s)',
    chartSnr: 'DSN LINK SNR (dB)',
  },

  ar: {
    appTitle: 'محاكي ديناميكا المدارات والتحكم في المهام الفضائية',
    appSubtitle: 'غرفة العمليات المركزية لميكانيكا الفضاء ومسارات الملاحة العميقة',
    authorBadge: 'تطوير وهندسة: أ. طارق ابوعشي',

    // Nav Tabs
    tabTelemetry: 'القياسات الحيوية للرحلة',
    tabKepler: 'العناصر المدارية لكبلر',
    tabManeuvers: 'مخطط المناورات ودلتا-V',
    tabMissions: 'ملفات المهام الجاهزة',
    tabDsn: 'شبكة الفضاء العميق DSN',
    tabLagrange: 'نقاط لاغرانج وتلسكوب ويب',

    // Mission Profiles
    missionArtemisTitle: 'أرتميس: بوابة القمر ومدار الهالة NRHO',
    missionArtemisDesc: 'حقن المدار القمري (TLI)، وأسر المدار القمري (LOI)، والدخول في مدار الهالة شبه المستطيل.',
    missionMarsTitle: 'رحلة المريخ 2026 والكبح الجوي',
    missionMarsDesc: 'قوس هوهمان الانتقالي الشمسي مع نقطة الدخول في الغلاف الجوي للمريخ بسرعة فائقة.',
    missionJwstTitle: 'تلسكوب جيمس ويب (نقطة لاغرانج L2)',
    missionJwstDesc: 'مدار هالة متوازن حول نقطة L2 مع توجيه الدرع الشمسي خماسي الطبقات بعيداً عن الشمس.',
    missionVoyagerTitle: 'رحلة فوياجر والمقلاع الجاذبي لكوكب المشتري',
    missionVoyagerDesc: 'الاستفادة من جاذبية المشتري وزحل لزيادة السرعة والهروب خارج النظام الشمسي.',
    btnLaunchMission: 'تحميل وتنفيذ المهمة',

    // Keplerian Elements
    semiMajorAxis: 'المحور شبه الرئيسي (a)',
    eccentricity: 'الانحراف المداري (e)',
    inclination: 'ميلان المدار (i)',
    raan: 'صعود العقدة الصاعدة (Ω)',
    argPeriapsis: 'حجة نقطة الحضيض (ω)',
    trueAnomaly: 'الشذوذ الحقيقي (ν)',
    resetOrbit: 'إعادة ضبط المدار الاسمي',

    // Telemetry HUD
    flightStatus: 'حالة المسار المداري',
    orbitalVelocity: 'السرعة المدارية (v)',
    altitude: 'الارتفاع الفعلي',
    periapsisAlt: 'ارتفاع الحضيض (rp)',
    apoapsisAlt: 'ارتفاع الأوج (ra)',
    orbitalPeriod: 'الزمن الدوري (T)',
    specificEnergy: 'الطاقة المدارية النوعية (ε)',
    timeToPeriapsis: 'الوقت المتبقي للحضيض',
    fuelRemaining: 'الوقود الصاروخي المتبقي',
    deltaVRemaining: 'رصيد سرعة دلتا-V',

    // ADCS
    adcsMode: 'نظام التوجيه والتحكم الوضعي ADCS',
    adcsPrograde: 'أمامي تسارعي (+v)',
    adcsRetrograde: 'عكسي كبحي (-v)',
    adcsNormal: 'عمودي مداري (+h)',
    adcsAntiNormal: 'مضاد العمودي (-h)',
    adcsEarth: 'توجيه للأرض',
    adcsSun: 'توجيه للشمس',
    adcsTarget: 'توجيه للهدف',
    adcsManual: 'يدوي',
    slewRate: 'معدل الدوران الوضعي',
    pointingError: 'خطأ زاوية التوجيه',

    // Maneuver Planner
    maneuverHeading: 'حساب مناورات الانتقال المداري ودلتا-V',
    hohmannTransfer: 'انتقال هوهمان المداري',
    biEllipticTransfer: 'الانتقال ثنائي القطع الناقص',
    slingshotAssist: 'المقلاع الجاذبي (Flyby)',
    initialRadius: 'نصف قطر المدار الابتدائي (r1)',
    finalRadius: 'نصف قطر مدار الهدف (r2)',
    intermediateRadius: 'نقطة الأوج الوسيطة (rb)',
    burn1DeltaV: 'الحرقة الأولى (Δv1)',
    burn2DeltaV: 'الحرقة الثانية (Δv2)',
    burn3DeltaV: 'الحرقة الثالثة (Δv3)',
    totalDeltaV: 'إجمالي دلتا-V المطلوبة (Δv)',
    transferTime: 'زمن الرحلة الانتقالية',
    executeBurn: 'تنفيذ حرقة المحرك الصاروخي',

    // DSN
    dsnHeading: 'اتصالات شبكة الفضاء العميق (DSN)',
    activeStation: 'المحطة الأرضية النشطة',
    owlt: 'زمن انتقال الإشارة بالاتجاه الواحد (OWLT)',
    rtlt: 'زمن الإشارة ذهاباً وإياباً (RTLT)',
    fspl: 'فقدان المسار في الفضاء الحر (FSPL)',
    signalStrength: 'قدرة الإشارة المستقبلة (Pr)',
    snr: 'نسبة الإشارة إلى الضوضاء (SNR)',
    dopplerShift: 'انزياح دوبلر الترددي',
    lineOfSight: 'خط الرؤية المباشر',
    bitrate: 'معدل تدفق البيانات الفعلي',

    // Cameras
    camCockpit: 'كاميرا المركبة',
    camEarth: 'منظور الأرض',
    camSolar: 'المجموعة الشمسية',
    camTarget: 'تتبع الهدف',

    // Audio
    soundMute: 'كتم الصوت',
    soundUnmute: 'تشغيل الصوت',

    // Graphs
    chartVelocity: 'مخطط تغير السرعة المدارية (km/s)',
    chartDeltaV: 'استهلاك وقود دلتا-V الصاروخي',
    chartSnr: 'جودة إشارة شبكة DSN (dB)',
  },
};

export class I18nManager {
  public currentLang: Language = 'ar'; // Default Arabic as per user profile preference

  constructor() {
    // Check saved language or default to Arabic
    const saved = localStorage.getItem('astrodynamics_lang') as Language;
    if (saved === 'en' || saved === 'ar') {
      this.currentLang = saved;
    }
  }

  public setLanguage(lang: Language) {
    this.currentLang = lang;
    localStorage.setItem('astrodynamics_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.updateDomTranslations();
  }

  public t(key: keyof typeof TRANSLATIONS['en']): string {
    return TRANSLATIONS[this.currentLang][key] || TRANSLATIONS['en'][key] || key;
  }

  public updateDomTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n') as keyof typeof TRANSLATIONS['en'];
      if (key && TRANSLATIONS[this.currentLang][key]) {
        if (el.tagName === 'INPUT' && (el as HTMLInputElement).placeholder) {
          (el as HTMLInputElement).placeholder = TRANSLATIONS[this.currentLang][key];
        } else {
          el.textContent = TRANSLATIONS[this.currentLang][key];
        }
      }
    });

    // Update body class for styling adjustments
    if (this.currentLang === 'ar') {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }
  }
}
