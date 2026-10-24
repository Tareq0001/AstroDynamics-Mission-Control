/**
 * AstroDynamics Mission Control - Telemetry Flight HUD & Live Canvas Strip-Charts
 * High-performance 2D Canvas telemetry monitors for velocity, Delta-V expenditure,
 * and DSN signal quality, plus KaTeX mathematical formula rendering.
 */

import katex from 'katex';
import { DerivedOrbitalState, KeplerianElements } from '../physics/kepler';
import { LinkBudgetResult } from '../physics/link-budget';
import { ADCSState } from '../spacecraft/adcs';
import { PropellantBudget } from '../physics/maneuvers';
import { I18nManager } from './i18n';

export class TelemetryHUD {
  private velocityHistory: number[] = [];
  private deltaVHistory: number[] = [];
  private snrHistory: number[] = [];
  private maxHistoryLength: number = 80;

  private velCanvas: HTMLCanvasElement | null = null;
  private deltaVCanvas: HTMLCanvasElement | null = null;
  private snrCanvas: HTMLCanvasElement | null = null;

  private i18n: I18nManager;

  constructor(i18n: I18nManager) {
    this.i18n = i18n;
    this.initCanvases();
    this.renderFormulas();
  }

  private initCanvases() {
    this.velCanvas = document.getElementById('chart-velocity') as HTMLCanvasElement;
    this.deltaVCanvas = document.getElementById('chart-deltav') as HTMLCanvasElement;
    this.snrCanvas = document.getElementById('chart-snr') as HTMLCanvasElement;
  }

  /**
   * Render mathematical equations using KaTeX into designated containers
   */
  public renderFormulas() {
    const formulas: { id: string; tex: string }[] = [
      {
        id: 'eq-rk4',
        tex: '\\ddot{\\mathbf{r}} = -\\mu \\frac{\\mathbf{r}}{r^3} + \\sum_{i} \\mu_i \\left( \\frac{\\mathbf{r}_i - \\mathbf{r}}{\\|\\mathbf{r}_i - \\mathbf{r}\\|^3} - \\frac{\\mathbf{r}_i}{r_i^3} \\right) + \\mathbf{a}_{J2}',
      },
      {
        id: 'eq-vis-viva',
        tex: 'v = \\sqrt{\\mu \\left( \\frac{2}{r} - \\frac{1}{a} \\right)}, \\quad \\varepsilon = -\\frac{\\mu}{2a}',
      },
      {
        id: 'eq-hohmann',
        tex: '\\Delta v_1 = \\sqrt{\\frac{\\mu}{r_1}} \\left( \\sqrt{\\frac{2r_2}{r_1 + r_2}} - 1 \\right), \\quad t_{tx} = \\pi \\sqrt{\\frac{a_{tx}^3}{\\mu}}',
      },
      {
        id: 'eq-friis',
        tex: 'P_r = P_t + G_t + G_r - 20\\log_{10}\\left(\\frac{4\\pi d}{\\lambda}\\right), \\quad t_{OWLT} = \\frac{d}{c}',
      },
      {
        id: 'eq-slingshot',
        tex: '\\delta = 2 \\arcsin\\left( \\frac{1}{1 + \\frac{r_p v_\\infty^2}{\\mu}} \\right), \\quad \\Delta v_{max} = 2 v_\\infty \\sin\\left(\\frac{\\delta}{2}\\right)',
      },
    ];

    formulas.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) {
        try {
          katex.render(f.tex, el, {
            throwOnError: false,
            displayMode: true,
          });
        } catch {
          el.textContent = f.tex;
        }
      }
    });
  }

  /**
   * Update live telemetry digital readouts
   */
  public updateTelemetry(
    elem: KeplerianElements,
    derived: DerivedOrbitalState,
    adcs: ADCSState,
    link: LinkBudgetResult,
    propellant: PropellantBudget
  ) {
    // Velocity & Altitude
    this.setText('hud-speed', `${derived.vMag.toFixed(3)} km/s`);
    this.setText('hud-alt', `${Math.max(0, derived.rMag - 6371).toFixed(1)} km`);

    // Periapsis & Apoapsis
    this.setText('hud-rp', `${derived.periapsisAlt > 0 ? derived.periapsisAlt.toFixed(1) + ' km' : 'IMPACT'}`);
    this.setText(
      'hud-ra',
      `${derived.apoapsisAlt !== Infinity ? derived.apoapsisAlt.toFixed(1) + ' km' : 'ESCAPE (Hyperbolic)'}`
    );

    // Period
    if (derived.period !== Infinity) {
      const hours = Math.floor(derived.period / 3600);
      const mins = Math.floor((derived.period % 3600) / 60);
      const secs = Math.floor(derived.period % 60);
      this.setText('hud-period', `${hours}h ${mins}m ${secs}s`);
    } else {
      this.setText('hud-period', '∞ (Escape)');
    }

    // Specific Energy
    this.setText('hud-energy', `${derived.specificEnergy.toFixed(2)} km²/s²`);

    // Fuel remaining & Delta-V
    const fuelPercent = (propellant.propellantRemaining / 1500) * 100; // 1500kg nominal tank
    this.setText('hud-fuel', `${propellant.propellantRemaining.toFixed(1)} kg (${fuelPercent.toFixed(0)}%)`);
    this.setText('hud-deltav-rem', `${propellant.deltaVRemaining.toFixed(3)} km/s`);

    // ADCS Attitude
    this.setText('hud-adcs-mode', adcs.mode);
    this.setText(
      'hud-euler',
      `R: ${adcs.eulerDeg.roll.toFixed(1)}° | P: ${adcs.eulerDeg.pitch.toFixed(1)}° | Y: ${adcs.eulerDeg.yaw.toFixed(1)}°`
    );
    this.setText(
      'hud-quat',
      `[${adcs.quaternion[0].toFixed(3)}, ${adcs.quaternion[1].toFixed(3)}, ${adcs.quaternion[2].toFixed(3)}, ${adcs.quaternion[3].toFixed(3)}]`
    );
    this.setText('hud-pointing-error', `${adcs.pointingErrorDeg.toFixed(2)}°`);

    // DSN Link
    this.setText('dsn-station-name', link.activeStation.name);
    this.setText('dsn-owlt', link.oneWayLightTimeString);
    this.setText('dsn-fspl', `${link.fsplDb.toFixed(1)} dB`);
    this.setText('dsn-rx-power', `${link.receivedPowerDbm.toFixed(1)} dBm`);
    this.setText('dsn-snr', `${link.snrDb.toFixed(1)} dB`);
    this.setText('dsn-doppler', `${(link.dopplerShiftHz / 1000).toFixed(2)} kHz`);
    this.setText('dsn-bitrate', `${link.bitrateKbps.toFixed(0)} kbps`);
    this.setText('dsn-elevation', `${link.stationElevationDeg.toFixed(1)}°`);
    this.setText(
      'dsn-los-badge',
      link.isInLineOfSight ? 'LOCKED / ONLINE' : 'OCCULTED / LOS LOSS'
    );

    const losEl = document.getElementById('dsn-los-badge');
    if (losEl) {
      losEl.className = link.isInLineOfSight ? 'badge-online' : 'badge-offline';
    }

    // Push into history buffers for strip charts
    this.velocityHistory.push(derived.vMag);
    if (this.velocityHistory.length > this.maxHistoryLength) this.velocityHistory.shift();

    this.deltaVHistory.push(propellant.deltaVExpended);
    if (this.deltaVHistory.length > this.maxHistoryLength) this.deltaVHistory.shift();

    this.snrHistory.push(link.snrDb);
    if (this.snrHistory.length > this.maxHistoryLength) this.snrHistory.shift();

    // Redraw strip charts
    this.drawStripChart(this.velCanvas, this.velocityHistory, '#00e5ff', 'km/s');
    this.drawStripChart(this.deltaVCanvas, this.deltaVHistory, '#ffd000', 'km/s');
    this.drawStripChart(this.snrCanvas, this.snrHistory, '#00ff88', 'dB');
  }

  private drawStripChart(canvas: HTMLCanvasElement | null, data: number[], color: string, unit: string) {
    if (!canvas || data.length < 2) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Clear
    ctx.clearRect(0, 0, w, h);

    // Background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.25);
    ctx.lineTo(w, h * 0.25);
    ctx.moveTo(0, h * 0.5);
    ctx.lineTo(w, h * 0.5);
    ctx.moveTo(0, h * 0.75);
    ctx.lineTo(w, h * 0.75);
    ctx.stroke();

    const minVal = Math.min(...data) * 0.95;
    const maxVal = Math.max(...data) * 1.05 || 1;
    const range = Math.max(0.1, maxVal - minVal);

    // Plot stroke
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();

    const stepX = w / (this.maxHistoryLength - 1);
    const startOffset = this.maxHistoryLength - data.length;

    for (let i = 0; i < data.length; i++) {
      const x = (startOffset + i) * stepX;
      const normalizedY = (data[i] - minVal) / range;
      const y = h - normalizedY * (h - 10) - 5;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Fill area under curve
    ctx.lineTo(w, h);
    ctx.lineTo(startOffset * stepX, h);
    ctx.closePath();
    ctx.fillStyle = color.replace(')', ', 0.12)').replace('rgb', 'rgba').replace('#', '');
    // Simple gradient
    ctx.fillStyle = `${color}18`;
    ctx.fill();

    // Value watermark
    ctx.fillStyle = color;
    ctx.font = '10px "JetBrains Mono", monospace';
    const lastVal = data[data.length - 1];
    ctx.fillText(`${lastVal.toFixed(2)} ${unit}`, w - 75, 14);
  }

  private setText(id: string, text: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
}
