<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

:root {
  --nu-blue: #0000FF;
  --nu-cyan: #06D0FF;
  --nu-navy: #000033;
  --nu-white: #FFFFFF;
  --nu-light-gray: #F5F5F7;
  --nu-medium-gray: #E8E8EC;
  --nu-dark-text: #1A1A2E;
  --nu-body-text: #333333;
  --nu-accent-gold: #C9A84C;
  --nu-success: #0A7D3E;
  --nu-warn: #C77700;
  --nu-danger: #B42318;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--font-primary);
  color: var(--nu-body-text);
  background: var(--nu-light-gray);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
  padding: 64px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 300px;
}
.nu-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
  z-index: 1;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }
.nu-phoenix {
  width: 72px; height: 72px;
  margin: 0 auto 14px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3.1rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.92);
  letter-spacing: 0.03em;
}
.nu-eyebrow {
  display: inline-block;
  margin-top: 18px;
  padding: 6px 18px;
  background: rgba(0,0,0,0.28);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nu-cyan);
}

/* CHEVRON */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* CONTENT */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 120px; left: 50%;
  transform: translateX(-50%);
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 40px 72px;
}

/* DOC META BAR */
.meta-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  padding: 18px 24px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-blue);
  border-radius: 6px;
  margin-bottom: 40px;
  font-size: 0.88rem;
}
.meta-bar strong {
  display: block;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 2px;
}

/* SECTION */
.section { margin-bottom: 48px; }
.section-title {
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 6px;
  line-height: 1.25;
}
.section-title .w1 { color: var(--nu-blue); }
.section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
.section-underline {
  width: 60px; height: 4px;
  background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
  margin-bottom: 20px;
}

/* KPI GRID */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}
.kpi {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  border-radius: 8px;
  padding: 20px 22px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.kpi .label {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.kpi .value {
  font-size: 1.45rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.kpi .sub {
  font-size: 0.82rem;
  color: var(--nu-body-text);
  margin-top: 4px;
}

/* BADGES */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 10px 22px 10px 16px;
  margin: 0 10px 12px 0;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
}
.badge .dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--nu-cyan);
}

/* STEP CARDS */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}
.step {
  position: relative;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 22px 22px 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.step:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.09);
}
.step .num {
  position: absolute;
  top: -14px; left: 18px;
  width: 32px; height: 32px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px rgba(0,0,255,0.35);
}
.step h3 {
  font-weight: 900;
  font-size: 1.02rem;
  color: var(--nu-dark-text);
  margin: 6px 0 10px;
  line-height: 1.3;
}
.step p {
  font-size: 0.92rem;
  color: var(--nu-body-text);
}
.step .tag {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--nu-blue);
}

/* TABLE */
.cost-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.cost-table thead {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
}
.cost-table th {
  text-align: left;
  padding: 14px 18px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.cost-table td {
  padding: 14px 18px;
  border-top: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
}
.cost-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.cost-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
.cost-table tfoot td {
  background: #fff8e6 !important;
  font-weight: 900;
  color: var(--nu-dark-text);
  border-top: 2px solid var(--nu-accent-gold);
}

/* CHECKLIST */
.checklist {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px 28px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 20px 24px;
}
.checklist li {
  padding: 6px 0 6px 28px;
  position: relative;
  font-size: 0.95rem;
}
.checklist li::before {
  content: '';
  position: absolute;
  left: 0; top: 10px;
  width: 16px; height: 16px;
  border: 2px solid var(--nu-blue);
  border-radius: 3px;
  background: var(--nu-white);
}

/* CALLOUT */
.callout {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 18px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  border: 1px solid #c9dcff;
  border-left: 5px solid var(--nu-blue);
  border-radius: 8px;
  margin: 14px 0;
}
.callout.warn {
  background: linear-gradient(135deg, #fff8e6 0%, #fff1cc 100%);
  border-color: #f3d887;
  border-left-color: var(--nu-warn);
}
.callout .icon {
  width: 44px; height: 44px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900;
  font-size: 1.3rem;
}
.callout.warn .icon { background: var(--nu-warn); }
.callout h4 {
  font-weight: 900;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.callout p { font-size: 0.92rem; }

/* CTA */
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
}
.btn {
  display: inline-block;
  padding: 12px 26px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid var(--nu-blue);
}
.btn-primary { background: var(--nu-blue); color: var(--nu-white); }
.btn-primary:hover { background: #0000cc; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,255,0.3); }
.btn-secondary { background: transparent; color: var(--nu-blue); }
.btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

/* TWO-COL */
.two-col {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.85;
}
.nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
.nu-footer-contact a:hover { text-decoration: underline; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 44px 22px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .wrap { padding: 40px 22px 56px; }
  .two-col { grid-template-columns: 1fr; }
  .badge { clip-path: none; border-radius: 8px; padding: 10px 16px; }
  .section-title { font-size: 1.3rem; }
  .cost-table th, .cost-table td { padding: 10px 12px; font-size: 0.86rem; }
}

@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  .step, .kpi, .cost-table { box-shadow: none; }
  .btn { display: none; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-eyebrow">Private Acquisition Brief</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="wrap">

    <!-- TITLE -->
    <div class="section">
      <h1 style="font-weight:900; font-size:2.1rem; color:var(--nu-dark-text); line-height:1.2; margin-bottom:6px;">
        4505 Buttewoods Estate — Acquisition Negotiation Strategy
      </h1>
      <p style="font-size:1rem; color:var(--nu-body-text); max-width:820px;">
        Action plan for negotiating the purchase of the 7,098 sq ft residential estate at 4505 Buttewoods. This brief captures the property profile, negotiation posture, financial framework, and the sequenced action steps from first offer through closing.
      </p>
    </div>

    <!-- META BAR -->
    <div class="meta-bar">
      <div><strong>Prepared For</strong>Aaron C. Norris — Principal</div>
      <div><strong>Property</strong>4505 Buttewoods</div>
      <div><strong>Size</strong>7,098 sq ft</div>
      <div><strong>Status</strong>Pre-Offer / Due Diligence</div>
      <div><strong>Document Date</strong>April 21, 2026</div>
      <div><strong>Priority</strong>Active — reMarkable Action Item</div>
    </div>

    <!-- KPI -->
    <div class="section">
      <div class="section-title"><span class="w1">Property</span> <span class="rest">Snapshot</span></div>
      <div class="section-underline"></div>
      <div class="kpi-grid">
        <div class="kpi">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Target acquisition — private residence</div>
        </div>
        <div class="kpi">
          <div class="label">Interior Square Footage</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Large-estate scale</div>
        </div>
        <div class="kpi">
          <div class="label">Acquisition Type</div>
          <div class="value">Direct Negotiation</div>
          <div class="sub">Principal-to-seller; no auction</div>
        </div>
        <div class="kpi">
          <div class="label">Financing Posture</div>
          <div class="value">Pre-Approved</div>
          <div class="sub">Proof of funds ready on request</div>
        </div>
      </div>
    </div>

    <!-- NEGOTIATION POSTURE -->
    <div class="section">
      <div class="section-title"><span class="w1">Negotiation</span> <span class="rest">Posture & Principles</span></div>
      <div class="section-underline"></div>
      <p style="margin-bottom:14px;">
        The operating principle is simple: arrive informed, negotiate with respect, and leave a deal on the table that both sides feel good about. Every move in this brief is sequenced so that leverage builds naturally through preparation, not pressure.
      </p>
      <div>
        <span class="badge"><span class="dot"></span>Respectful &amp; Direct</span>
        <span class="badge"><span class="dot"></span>Data-Backed Valuation</span>
        <span class="badge"><span class="dot"></span>Clean Contingencies</span>
        <span class="badge"><span class="dot"></span>Proof-of-Funds Ready</span>
        <span class="badge"><span class="dot"></span>Walk-Away Discipline</span>
      </div>
    </div>

    <!-- STEP PLAN -->
    <div class="section">
      <div class="section-title"><span class="w1">Negotiation</span> <span class="rest">Action Plan — Seven Steps</span></div>
      <div class="section-underline"></div>
      <div class="steps" style="margin-top:24px;">

        <div class="step">
          <div class="num">1</div>
          <h3>Confirm Property &amp; Ownership</h3>
          <p>Pull county records on 4505 Buttewoods — legal description, parcel ID, current titleholder, lot size, year built, and tax assessment. Confirm the 7,098 sq ft figure against the assessor record and any MLS history.</p>
          <span class="tag">Week 1 · Due Diligence</span>
        </div>

        <div class="step">
          <div class="num">2</div>
          <h3>Comparable Sales Analysis</h3>
          <p>Pull three to five recent comparable sales (similar square footage, same market area, last 12 months). Establish price-per-square-foot bands and identify any distressed, premium, or off-market outliers.</p>
          <span class="tag">Week 1 · Valuation</span>
        </div>

        <div class="step">
          <div class="num">3</div>
          <h3>Seller Motivation Discovery</h3>
          <p>Understand the why behind the sale: relocation, estate, downsizing, hold-time pressure, or opportunistic listing. Motivation drives flexibility on price, terms, and timeline more than any number does.</p>
          <span class="tag">Week 1–2 · Intel</span>
        </div>

        <div class="step">
          <div class="num">4</div>
          <h3>Financing &amp; Proof-of-Funds</h3>
          <p>Secure a current pre-approval letter sized for the target range and a bank-issued proof-of-funds statement. Both go out with the offer to signal a serious, frictionless buyer.</p>
          <span class="tag">Week 2 · Readiness</span>
        </div>

        <div class="step">
          <div class="num">5</div>
          <h3>Initial Offer &amp; Term Sheet</h3>
          <p>Present a written offer with price, earnest money, inspection window, financing window, title/survey terms, and target closing date. Open at the floor-of-reasonable; leave room to move up twice.</p>
          <span class="tag">Week 2–3 · Offer</span>
        </div>

        <div class="step">
          <div class="num">6</div>
          <h3>Inspection &amp; Repair Negotiation</h3>
          <p>Commission a full home inspection plus roof, HVAC, foundation, and termite reports. Use material findings as the lever for a price concession, credit, or seller repair — not to renegotiate from scratch.</p>
          <span class="tag">Week 3–4 · Diligence</span>
        </div>

        <div class="step">
          <div class="num">7</div>
          <h3>Final Terms &amp; Closing</h3>
          <p>Lock financing, clear title, confirm insurance binder, complete final walk-through, and coordinate closing funds. Document all concessions in the settlement statement; nothing verbal survives closing.</p>
          <span class="tag">Week 4–6 · Close</span>
        </div>

      </div>
    </div>

    <!-- FINANCIAL FRAMEWORK -->
    <div class="section">
      <div class="section-title"><span class="w1">Financial</span> <span class="rest">Framework</span></div>
      <div class="section-underline"></div>
      <p style="margin-bottom:18px;">
        The framework below reserves room for two counter-moves and accounts for closing costs, inspection outcomes, and a buffer for carry and move-in. Actual figures are populated once comparable sales and assessor data are confirmed in Step 1 and Step 2.
      </p>

      <table class="cost-table" aria-label="Acquisition financial framework">
        <thead>
          <tr>
            <th>Line Item</th>
            <th>Role in Negotiation</th>
            <th style="text-align:right;">Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Opening Offer Price</td>
            <td>Anchor at floor-of-reasonable, supported by comp analysis</td>
            <td class="num">Comp-Adjusted</td>
          </tr>
          <tr>
            <td>First Counter Ceiling</td>
            <td>Move-up target if seller counters within expected band</td>
            <td class="num">Comp + Premium</td>
          </tr>
          <tr>
            <td>Walk-Away Ceiling</td>
            <td>Hard limit — above this, deal is renegotiated or declined</td>
            <td class="num">Appraisal-Aligned</td>
          </tr>
          <tr>
            <td>Earnest Money Deposit</td>
            <td>Signals seriousness; returnable under contingencies</td>
            <td class="num">1–2% of Price</td>
          </tr>
          <tr>
            <td>Inspection &amp; Survey Reserve</td>
            <td>Out-of-pocket during contingency window</td>
            <td class="num">Actual</td>
          </tr>
          <tr>
            <td>Closing Costs (Buyer Side)</td>
            <td>Title, origination, prepaids, recording, taxes</td>
            <td class="num">2–3% of Price</td>
          </tr>
          <tr>
            <td>Repair / Concession Buffer</td>
            <td>Held for post-inspection credit or seller repair</td>
            <td class="num">Finding-Based</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Discipline: Every counter-offer must be tied to data, not emotion.</td>
            <td class="num">Rule</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- TWO-COL: CALLOUTS + CHECKLIST -->
    <div class="section">
      <div class="section-title"><span class="w1">Readiness</span> <span class="rest">& Guardrails</span></div>
      <div class="section-underline"></div>

      <div class="two-col">
        <div>
          <div class="callout">
            <div class="icon">i</div>
            <div>
              <h4>Lead With Preparation, Not Price</h4>
              <p>The strongest anchor in a negotiation is a buyer who has already done the work. Walk into the first conversation with the comp analysis, pre-approval, and proof-of-funds already in hand — the seller reads that as certainty.</p>
            </div>
          </div>

          <div class="callout warn">
            <div class="icon">!</div>
            <div>
              <h4>Protect the Walk-Away</h4>
              <p>The walk-away ceiling is set before the first counter lands and does not move mid-negotiation. If it moves, it moves in writing, once, and only for a material new fact — never for momentum.</p>
            </div>
          </div>

          <div class="callout">
            <div class="icon">§</div>
            <div>
              <h4>Everything in Writing</h4>
              <p>Price, contingencies, timelines, inclusions, repairs, and concessions all live inside the contract or the amendment. Side agreements and handshake items do not survive closing and are not enforceable.</p>
            </div>
          </div>
        </div>

        <div>
          <ul class="checklist" aria-label="Pre-offer readiness checklist">
            <li>County property record &amp; parcel ID pulled</li>
            <li>7,098 sq ft verified against assessor data</li>
            <li>Three to five comparable sales compiled</li>
            <li>Price-per-square-foot band established</li>
            <li>Seller motivation understood</li>
            <li>Current lender pre-approval letter secured</li>
            <li>Bank proof-of-funds statement dated within 30 days</li>
            <li>Earnest money source identified and liquid</li>
            <li>Real estate attorney engaged for review</li>
            <li>Title company selected and briefed</li>
            <li>Inspection vendors short-listed</li>
            <li>Insurance binder quote requested</li>
            <li>Walk-away ceiling committed to paper</li>
            <li>Offer, counter-1, counter-2 prices pre-decided</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- NEXT ACTIONS / CTA -->
    <div class="section">
      <div class="section-title"><span class="w1">Immediate</span> <span class="rest">Next Actions</span></div>
      <div class="section-underline"></div>
      <p style="margin-bottom:6px;">
        The next 72 hours are reserved for data collection and financing readiness. No offer goes out until Steps 1 through 4 are complete and the walk-away ceiling is written down.
      </p>
      <div class="cta-row">
        <a href="tel:2055001343" class="btn btn-primary">Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Acquisition" class="btn btn-secondary">Email the Deal Desk</a>
      </div>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>