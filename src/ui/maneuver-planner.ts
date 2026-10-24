/**
 * AstroDynamics Mission Control - Interplanetary Maneuver & Delta-V Planner
 * Computes Hohmann, Bi-elliptic, and Slingshot flybys with real-time rocket burn execution.
 */

import {
  calculateHohmannTransfer,
  calculateBiEllipticTransfer,
  calculateSlingshot,
  getManeuverFrame,
  PropellantBudget,
  calculateRocketEquation,
} from '../physics/maneuvers';
import { EARTH, JUPITER } from '../physics/constants';
import { KeplerianElements, cartesianToKeplerian, keplerianToCartesian } from '../physics/kepler';
import { AudioManager } from './audio';

export class ManeuverPlanner {
  private audio: AudioManager;
  public propellant: PropellantBudget;
  private onManeuverExecuted: (newElem: KeplerianElements, propellant: PropellantBudget) => void;

  constructor(
    audio: AudioManager,
    onManeuverExecuted: (newElem: KeplerianElements, propellant: PropellantBudget) => void
  ) {
    this.audio = audio;
    this.onManeuverExecuted = onManeuverExecuted;
    this.propellant = calculateRocketEquation(4200, 1500, 0, 320);

    this.bindInputs();
    this.computeHohmann();
    this.computeBiElliptic();
    this.computeSlingshot();
  }

  private bindInputs() {
    // Hohmann Inputs
    const r1Input = document.getElementById('hohmann-r1') as HTMLInputElement;
    const r2Input = document.getElementById('hohmann-r2') as HTMLInputElement;

    const onHohmannChange = () => this.computeHohmann();
    if (r1Input) r1Input.addEventListener('input', onHohmannChange);
    if (r2Input) r2Input.addEventListener('input', onHohmannChange);

    // Bi-Elliptic Inputs
    const rbInput = document.getElementById('bielliptic-rb') as HTMLInputElement;
    if (rbInput) rbInput.addEventListener('input', () => this.computeBiElliptic());

    // Slingshot Inputs
    const vInfInput = document.getElementById('slingshot-vinf') as HTMLInputElement;
    const rpInput = document.getElementById('slingshot-rp') as HTMLInputElement;
    const onSlingshotChange = () => this.computeSlingshot();
    if (vInfInput) vInfInput.addEventListener('input', onSlingshotChange);
    if (rpInput) rpInput.addEventListener('input', onSlingshotChange);

    // Directional Burn Buttons
    const bindBurnBtn = (btnId: string, direction: 'prograde' | 'retrograde' | 'normal' | 'antinormal' | 'radialIn' | 'radialOut') => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener('click', () => {
          const deltaVInput = document.getElementById('burn-dv-amount') as HTMLInputElement;
          const dvKmS = deltaVInput ? parseFloat(deltaVInput.value) || 0.1 : 0.1;
          this.executeDirectionalBurn(direction, dvKmS);
        });
      }
    };

    bindBurnBtn('btn-burn-prograde', 'prograde');
    bindBurnBtn('btn-burn-retrograde', 'retrograde');
    bindBurnBtn('btn-burn-normal', 'normal');
    bindBurnBtn('btn-burn-antinormal', 'antinormal');
    bindBurnBtn('btn-burn-radialin', 'radialIn');
    bindBurnBtn('btn-burn-radialout', 'radialOut');
  }

  public computeHohmann() {
    const r1 = parseFloat((document.getElementById('hohmann-r1') as HTMLInputElement)?.value || '6771');
    const r2 = parseFloat((document.getElementById('hohmann-r2') as HTMLInputElement)?.value || '42164');

    const res = calculateHohmannTransfer(r1, r2, EARTH.mu);

    this.setText('hohmann-dv1', `${(res.deltaV1 * 1000).toFixed(1)} m/s`);
    this.setText('hohmann-dv2', `${(res.deltaV2 * 1000).toFixed(1)} m/s`);
    this.setText('hohmann-dv-tot', `${res.totalDeltaV.toFixed(3)} km/s`);
    this.setText('hohmann-time', `${res.transferTimeHours.toFixed(2)} h (${res.transferTimeDays.toFixed(1)} d)`);
    this.setText('hohmann-phase', `${res.phaseAngleDeg.toFixed(1)}°`);
  }

  public computeBiElliptic() {
    const r1 = parseFloat((document.getElementById('hohmann-r1') as HTMLInputElement)?.value || '6771');
    const r2 = parseFloat((document.getElementById('hohmann-r2') as HTMLInputElement)?.value || '42164');
    const rb = parseFloat((document.getElementById('bielliptic-rb') as HTMLInputElement)?.value || '80000');

    const res = calculateBiEllipticTransfer(r1, r2, rb, EARTH.mu);

    this.setText('bielliptic-dv-tot', `${res.totalDeltaV.toFixed(3)} km/s`);
    this.setText('bielliptic-time', `${res.transferTimeDays.toFixed(2)} d`);
    this.setText(
      'bielliptic-efficiency',
      res.isMoreEfficientThanHohmann ? 'More Efficient than Hohmann' : 'Less Efficient (Time costly)'
    );
  }

  public computeSlingshot() {
    const vInf = parseFloat((document.getElementById('slingshot-vinf') as HTMLInputElement)?.value || '9.5');
    const rpAlt = parseFloat((document.getElementById('slingshot-rp') as HTMLInputElement)?.value || '350000');

    const rp = JUPITER.radius + rpAlt;
    const res = calculateSlingshot(vInf, rp, JUPITER.radius, JUPITER.mu, 13.07);

    this.setText('slingshot-delta-deg', `${res.turnAngleDeg.toFixed(1)}°`);
    this.setText('slingshot-dv-helio', `+${res.deltaVHelio.toFixed(2)} km/s`);
    this.setText('slingshot-impact-param', `${(res.impactParameter / 1000).toFixed(0)}k km`);
  }

  /**
   * Execute real-time impulsive thruster burn in given direction
   */
  public executeDirectionalBurn(
    direction: 'prograde' | 'retrograde' | 'normal' | 'antinormal' | 'radialIn' | 'radialOut',
    dvMagnitudeKmS: number,
    currentElem?: KeplerianElements
  ) {
    if (!currentElem) return;

    // Get Cartesian state
    const state = keplerianToCartesian(currentElem, EARTH.mu);
    const frame = getManeuverFrame(state.r, state.v);

    let unitVec: [number, number, number] = [0, 0, 0];
    switch (direction) {
      case 'prograde':
        unitVec = frame.prograde;
        break;
      case 'retrograde':
        unitVec = frame.retrograde;
        break;
      case 'normal':
        unitVec = frame.normal;
        break;
      case 'antinormal':
        unitVec = frame.antiNormal;
        break;
      case 'radialIn':
        unitVec = frame.radialIn;
        break;
      case 'radialOut':
        unitVec = frame.radialOut;
        break;
    }

    // Apply delta-V to velocity vector
    const newV: [number, number, number] = [
      state.v[0] + unitVec[0] * dvMagnitudeKmS,
      state.v[1] + unitVec[1] * dvMagnitudeKmS,
      state.v[2] + unitVec[2] * dvMagnitudeKmS,
    ];

    // Recalculate Keplerian elements
    const newElem = cartesianToKeplerian(state.r, newV, EARTH.mu);

    // Update propellant consumption via Tsiolkovsky equation
    const totalExpended = this.propellant.deltaVExpended + dvMagnitudeKmS;
    this.propellant = calculateRocketEquation(4200, 1500, totalExpended, 320);

    // Play sounds
    this.audio.playBurnIgnition();
    this.audio.playThrusterBurst(0.3);

    this.onManeuverExecuted(newElem, this.propellant);
  }

  private setText(id: string, text: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
}
