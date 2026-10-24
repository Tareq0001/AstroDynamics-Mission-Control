/**
 * AstroDynamics Mission Control - Interactive Keplerian Orbit Controller
 * Real-time bidirectional sliders for orbital elements (a, e, i, Omega, omega, nu)
 * and turnkey presets (LEO, SSO, Molniya, GEO, Escape).
 */

import { KeplerianElements } from '../physics/kepler';
import { EARTH } from '../physics/constants';

export class OrbitController {
  private elements: KeplerianElements;
  private onChangeCallback: (elem: KeplerianElements) => void;

  constructor(initialElements: KeplerianElements, onChange: (elem: KeplerianElements) => void) {
    this.elements = { ...initialElements };
    this.onChangeCallback = onChange;
    this.bindInputs();
    this.bindPresets();
    this.syncSlidersFromState();
  }

  private bindInputs() {
    const bindSlider = (
      sliderId: string,
      numId: string,
      getter: () => number,
      setter: (v: number) => void,
      toDeg: boolean = false
    ) => {
      const slider = document.getElementById(sliderId) as HTMLInputElement;
      const numInput = document.getElementById(numId) as HTMLInputElement;

      if (!slider || !numInput) return;

      const update = (val: number) => {
        setter(toDeg ? (val * Math.PI) / 180 : val);
        slider.value = val.toString();
        numInput.value = val.toFixed(toDeg ? 1 : sliderId.includes('ecc') ? 4 : 0);
        this.onChangeCallback(this.elements);
      };

      slider.addEventListener('input', () => update(parseFloat(slider.value)));
      numInput.addEventListener('change', () => update(parseFloat(numInput.value)));
    };

    // Semi-major axis (km)
    bindSlider(
      'input-sma-slider',
      'input-sma-num',
      () => this.elements.semiMajorAxis,
      v => (this.elements.semiMajorAxis = v)
    );

    // Eccentricity
    bindSlider(
      'input-ecc-slider',
      'input-ecc-num',
      () => this.elements.eccentricity,
      v => (this.elements.eccentricity = v)
    );

    // Inclination (degrees to rad)
    bindSlider(
      'input-inc-slider',
      'input-inc-num',
      () => (this.elements.inclination * 180) / Math.PI,
      v => (this.elements.inclination = v),
      true
    );

    // RAAN (degrees to rad)
    bindSlider(
      'input-raan-slider',
      'input-raan-num',
      () => (this.elements.raan * 180) / Math.PI,
      v => (this.elements.raan = v),
      true
    );

    // Argument of Periapsis (degrees to rad)
    bindSlider(
      'input-argp-slider',
      'input-argp-num',
      () => (this.elements.argPeriapsis * 180) / Math.PI,
      v => (this.elements.argPeriapsis = v),
      true
    );

    // True Anomaly (degrees to rad)
    bindSlider(
      'input-nu-slider',
      'input-nu-num',
      () => (this.elements.trueAnomaly * 180) / Math.PI,
      v => (this.elements.trueAnomaly = v),
      true
    );
  }

  private bindPresets() {
    const presets: { id: string; elem: KeplerianElements }[] = [
      {
        id: 'btn-preset-leo',
        elem: {
          semiMajorAxis: EARTH.radius + 400, // 400 km ISS orbit
          eccentricity: 0.0008,
          inclination: (51.64 * Math.PI) / 180,
          raan: 0,
          argPeriapsis: 0,
          trueAnomaly: 0,
        },
      },
      {
        id: 'btn-preset-sso',
        elem: {
          semiMajorAxis: EARTH.radius + 700, // 700 km SSO
          eccentricity: 0.001,
          inclination: (98.2 * Math.PI) / 180,
          raan: (45 * Math.PI) / 180,
          argPeriapsis: 0,
          trueAnomaly: 0,
        },
      },
      {
        id: 'btn-preset-molniya',
        elem: {
          semiMajorAxis: 26600, // 12-hour Molniya
          eccentricity: 0.72,
          inclination: (63.4 * Math.PI) / 180, // critical inclination (zero apsidal drift)
          raan: (90 * Math.PI) / 180,
          argPeriapsis: (270 * Math.PI) / 180,
          trueAnomaly: 0,
        },
      },
      {
        id: 'btn-preset-geo',
        elem: {
          semiMajorAxis: 42164, // GEO
          eccentricity: 0.0002,
          inclination: (0.1 * Math.PI) / 180,
          raan: 0,
          argPeriapsis: 0,
          trueAnomaly: 0,
        },
      },
      {
        id: 'btn-preset-escape',
        elem: {
          semiMajorAxis: 18000,
          eccentricity: 1.25, // Hyperbolic escape
          inclination: (28.5 * Math.PI) / 180,
          raan: (30 * Math.PI) / 180,
          argPeriapsis: 0,
          trueAnomaly: -0.8,
        },
      },
    ];

    presets.forEach(p => {
      const btn = document.getElementById(p.id);
      if (btn) {
        btn.addEventListener('click', () => {
          this.setElements(p.elem);
        });
      }
    });
  }

  public setElements(newElem: KeplerianElements) {
    this.elements = { ...newElem };
    this.syncSlidersFromState();
    this.onChangeCallback(this.elements);
  }

  public getElements(): KeplerianElements {
    return { ...this.elements };
  }

  public syncSlidersFromState() {
    const setVal = (sliderId: string, numId: string, val: number, isDeg: boolean = false) => {
      const s = document.getElementById(sliderId) as HTMLInputElement;
      const n = document.getElementById(numId) as HTMLInputElement;
      const displayVal = isDeg ? (val * 180) / Math.PI : val;
      if (s) s.value = displayVal.toString();
      if (n) n.value = displayVal.toFixed(isDeg ? 1 : sliderId.includes('ecc') ? 4 : 0);
    };

    setVal('input-sma-slider', 'input-sma-num', this.elements.semiMajorAxis);
    setVal('input-ecc-slider', 'input-ecc-num', this.elements.eccentricity);
    setVal('input-inc-slider', 'input-inc-num', this.elements.inclination, true);
    setVal('input-raan-slider', 'input-raan-num', this.elements.raan, true);
    setVal('input-argp-slider', 'input-argp-num', this.elements.argPeriapsis, true);
    setVal('input-nu-slider', 'input-nu-num', this.elements.trueAnomaly, true);
  }
}
