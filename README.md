# AstroDynamics Mission Control 🛰️
### محاكي ديناميكا المدارات والتحكم في المهام الفضائية العميقة

> **A production-grade, aerospace-standard Space Mission Control & Orbital Mechanics Simulation Platform inspired by NASA JPL Eyes on the Solar System, ESA Mission Operations Center (ESOC), and Systems Tool Kit (STK).**

**Live Platform URL:** [https://tareq0001.github.io/AstroDynamics-Mission-Control/](https://tareq0001.github.io/AstroDynamics-Mission-Control/)  
**Engineering & Architecture:** أ. طارق ابوعشي | Tareq Abuashi

---

## 🌟 Core Features & Physics Architecture

### 1. 4th-Order Runge-Kutta (RK4) N-Body Integrator
- High-precision numerical integration of gravitational equations of motion:
  $$\ddot{\mathbf{r}} = -\mu \frac{\mathbf{r}}{r^3} + \sum_{i} \mu_i \left( \frac{\mathbf{r}_i - \mathbf{r}}{\|\mathbf{r}_i - \mathbf{r}\|^3} - \frac{\mathbf{r}_i}{r_i^3} \right) + \mathbf{a}_{J2}$$
- Accounts for primary central body gravitational field, third-body perturbations (Moon, Sun, Mars, Jupiter), and Earth $J_2$ oblateness nodal precession.
- Multi-step predictive future trajectory calculation rendered as glowing dynamic orbital splines.

### 2. Classical Keplerian Orbital Elements Engine
- Real-time interactive adjustment and bidirectional synchronization of the 6 classical orbital parameters:
  - Semi-major axis ($a$)
  - Eccentricity ($e$: circular, elliptical, parabolic, hyperbolic)
  - Inclination ($i$)
  - Right Ascension of Ascending Node ($\Omega$)
  - Argument of Periapsis ($\omega$)
  - True Anomaly ($\nu$)
- Instant derivation of Orbital Period ($T = 2\pi\sqrt{a^3/\mu}$), Specific Orbital Energy ($\varepsilon = -\mu/(2a)$), Apoapsis ($r_a$), Periapsis ($r_p$), and Instantaneous Velocity ($v = \sqrt{\mu(2/r - 1/a)}$).
- Newton-Raphson & Halley's cubic solver for Kepler's equation ($M = E - e \sin E$).

### 3. Interplanetary Maneuvers & Delta-V Planner
- **Hohmann Transfer Calculator**: Exact computation of $\Delta v_1$, $\Delta v_2$, total $\Delta v$, transfer duration, and rendezvous phase angle.
- **Bi-Elliptic Transfer Mode**: Compares total $\Delta v$ against Hohmann for high-ratio transfers ($r_2/r_1 > 11.94$).
- **Gravitational Slingshot (Flyby Assist)**: Turn angle $\delta = 2 \arcsin\left(\frac{1}{1 + \frac{r_p v_\infty^2}{\mu}}\right)$ and heliocentric velocity boost vector calculation.
- **Tsiolkovsky Rocket Equation**: Real-time propellant consumption tracking based on $I_{sp} = 320\text{ s}$ hypergolic propulsion mass fraction.
- **Real-Time Vector Thruster Ignition**: Impulsive burns along Prograde, Retrograde, Normal, Anti-Normal, Radial-In, and Radial-Out vectors.

### 4. Attitude Determination & Control System (ADCS)
- Real-time 3D spacecraft orientation via Quaternions ($q = [w, x, y, z]$) and Euler angles (Pitch, Roll, Yaw).
- Guidance targeting modes: Prograde, Retrograde, Normal, Anti-Normal, Earth-Pointing, Sun-Pointing, Target-Pointing, and Manual Euler.
- Realistic slew-rate limiting with Slerp interpolation and particle thruster plume bursts.

### 5. Deep Space Network (DSN) Telemetry & RF Link Budget
- Friis Free-Space Path Loss equation:
  $$P_r = P_t + G_t + G_r - 20\log_{10}\left(\frac{4\pi d}{\lambda}\right)$$
- Realistic speed-of-light One-Way Light Time (OWLT) and Round-Trip Light Time (RTLT).
- Ground station line-of-sight tracking and Doppler frequency shift ($\Delta f = f_0 \frac{v_r}{c}$) for Goldstone (DSS-14), Madrid (DSS-63), and Canberra (DSS-43).

### 6. Turnkey Mission Profiles (1-Click Execution)
1. **Artemis Lunar Gateway & Insertion**: Translunar Injection (TLI), Lunar Orbit Insertion (LOI), and Near-Rectilinear Halo Orbit (NRHO).
2. **Mars 2026 Transit & Aerocapture**: Heliocentric Hohmann transfer arc with hypervelocity atmospheric entry interface.
3. **James Webb Space Telescope (JWST)**: Sun-Earth L2 Lagrange Halo Orbit with deployable 5-layer Kapton sunshield orientation.
4. **Voyager Grand Tour Slingshot**: Hyperbolic solar system escape trajectory via Jupiter & Saturn gravity assists.

### 7. Procedural Web Audio API Synthesizer
- Zero external audio files required. Real-time procedural synthesis of telemetry beeps, filtered-noise RCS thruster bursts, DSN radar pings, and rocket burn ignition rumbles.

### 8. Full Bilingual Internationalization (Arabic & English)
- Instant RTL/LTR toggle with complete aerospace engineering terminology.

---

## 🛠️ Tech Stack
- **Framework**: Vite + TypeScript
- **3D Graphics**: Three.js + Custom WebGL Shaders (Rayleigh atmospheric scattering, procedural planetary textures)
- **Mathematical Typography**: KaTeX LaTeX equation rendering
- **Audio**: Web Audio API Procedural Synthesizer
- **Styling**: Modern Aerospace Dark Glassmorphism CSS

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/Tareq0001/AstroDynamics-Mission-Control.git
cd AstroDynamics-Mission-Control

# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Production build
npm run build
```

---

© 2026 **أ. طارق ابوعشي | Tareq Abuashi** - All rights reserved.
