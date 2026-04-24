<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
<style>
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
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--font-primary);
  color: var(--nu-body-text);
  background: var(--nu-white);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* ══ HEADER ══ */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
  padding: 70px 40px 90px;
  text-align: center;
  overflow: hidden;
  min-height: 300px;
}
.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -40%; right: -10%;
  width: 70%; height: 180%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
}
.nu-logo-text {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* ══ CHEVRON ══ */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg {
  width: 100%;
  height: 50px;
  display: block;
}

/* ══ CONTENT ══ */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 320px; left: 50%;
  transform: translate(-50%, 0);
  width: 65%; max-width: 780px; height: 780px;
  background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.nu-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

/* ══ DOCUMENT TITLE ══ */
.doc-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--nu-medium-gray);
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 12px;
}
.doc-meta .label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nu-blue);
}
.doc-meta .date {
  font-size: 0.9rem;
  color: var(--nu-body-text);
}

.doc-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 2.4rem;
  line-height: 1.2;
  color: var(--nu-dark-text);
  margin-bottom: 14px;
}
.doc-title .accent { color: var(--nu-blue); }
.doc-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 820px;
}

/* ══ SECTION HEADER ══ */
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin-bottom: 18px;
  padding-top: 10px;
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* ══ PROPERTY SNAPSHOT ══ */
.snapshot {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
  margin-bottom: 44px;
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  overflow: hidden;
  background: var(--nu-white);
  box-shadow: 0 2px 14px rgba(0,0,0,0.04);
}
.snapshot-cell {
  padding: 22px 24px;
  border-right: 1px solid var(--nu-medium-gray);
  background: linear-gradient(180deg, var(--nu-white) 0%, #fafbff 100%);
}
.snapshot-cell:last-child { border-right: none; }
.snapshot-cell .k {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--nu-blue);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.snapshot-cell .v {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--nu-dark-text);
}
.snapshot-cell .sub {
  font-size: 0.82rem;
  color: #666;
  margin-top: 2px;
}

/* ══ BADGES ══ */
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 13px 28px 13px 18px;
  margin-bottom: 14px;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.02em;
  max-width: 620px;
}
.nu-badge .num {
  color: var(--nu-cyan);
  font-weight: 900;
  margin-right: 14px;
  font-size: 1.05rem;
  flex-shrink: 0;
}

/* ══ TWO-COL GRID ══ */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 44px;
}

/* ══ CARD ══ */
.nu-card {
  background: var(--nu-white);
  border-radius: 10px;
  padding: 26px 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
}
.nu-card h3 {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  margin-bottom: 14px;
  letter-spacing: 0.01em;
}
.nu-card h3 .tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--nu-cyan);
  background: var(--nu-navy);
  padding: 3px 8px;
  border-radius: 3px;
  margin-left: 8px;
  letter-spacing: 0.1em;
  vertical-align: middle;
}
.nu-card ul { list-style: none; padding: 0; }
.nu-card li {
  position: relative;
  padding: 6px 0 6px 22px;
  font-size: 0.95rem;
  line-height: 1.55;
}
.nu-card li::before {
  content: '•';
  position: absolute;
  left: 4px;
  color: var(--nu-blue);
  font-weight: 900;
  font-size: 1.1rem;
  top: 4px;
}
.nu-card p {
  font-size: 0.95rem;
  margin-bottom: 10px;
}
.nu-card p:last-child { margin-bottom: 0; }

/* ══ LEVERAGE TABLE ══ */
.leverage {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
  background: var(--nu-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.leverage th {
  background: var(--nu-navy);
  color: var(--nu-white);
  padding: 14px 18px;
  text-align: left;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}
.leverage td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.93rem;
  vertical-align: top;
}
.leverage tr:last-child td { border-bottom: none; }
.leverage tr:nth-child(even) td { background: #fafbff; }
.leverage .point {
  font-weight: 900;
  color: var(--nu-dark-text);
  white-space: nowrap;
}
.leverage .impact {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
  letter-spacing: 0.06em;
}
.impact.high { background: #ffe8e8; color: #a00; }
.impact.med { background: #fff4d6; color: #8a5a00; }
.impact.low { background: #e0f4ff; color: #005580; }

/* ══ OFFER LADDER ══ */
.ladder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.ladder-step {
  background: linear-gradient(160deg, var(--nu-white) 0%, #f2f5ff 100%);
  border: 2px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 22px 22px;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ladder-step:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,255,0.08);
}
.ladder-step.target {
  border-color: var(--nu-blue);
  background: linear-gradient(160deg, #fafcff 0%, #e6ecff 100%);
}
.ladder-step .step {
  font-size: 0.72rem;
  font-weight: 900;
  color: var(--nu-blue);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.ladder-step .amount {
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.1;
  margin-bottom: 6px;
}
.ladder-step .note {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.45;
}
.ladder-step.target .step { color: #0000CC; }

/* ══ ACTION LIST ══ */
.action-list {
  background: var(--nu-white);
  border-radius: 10px;
  border: 1px solid var(--nu-medium-gray);
  overflow: hidden;
  margin-bottom: 24px;
}
.action-row {
  display: grid;
  grid-template-columns: 40px 1fr 120px 130px;
  gap: 16px;
  padding: 16px 22px;
  align-items: center;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.93rem;
}
.action-row:last-child { border-bottom: none; }
.action-row.head {
  background: var(--nu-light-gray);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--nu-dark-text);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.action-row .num {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1rem;
}
.action-row .owner {
  font-weight: 700;
  color: var(--nu-dark-text);
}
.action-row .due {
  font-size: 0.85rem;
  color: #555;
  font-weight: 700;
}

/* ══ WALK POINT ══ */
.walk-point {
  background: linear-gradient(135deg, #fff9e6 0%, #fff4d6 100%);
  border-left: 5px solid var(--nu-accent-gold);
  padding: 22px 28px;
  border-radius: 6px;
  margin-bottom: 44px;
}
.walk-point .title {
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8a5a00;
  margin-bottom: 8px;
}
.walk-point p {
  font-size: 0.98rem;
  color: var(--nu-dark-text);
  line-height: 1.6;
}
.walk-point strong { color: #000; }

/* ══ FOOTER ══ */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
  color: rgba(255,255,255,0.85);
  padding: 48px 40px;
  text-align: center;
  font-family: var(--font-primary);
}
.nu-footer-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact {
  font-size: 0.92rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }

/* ══ RESPONSIVE ══ */
@media (max-width: 900px) {
  .grid-2 { grid-template-columns: 1fr; }
  .snapshot { grid-template-columns: 1fr 1fr; }
  .snapshot-cell { border-right: 1px solid var(--nu-medium-gray); border-bottom: 1px solid var(--nu-medium-gray); }
  .snapshot-cell:nth-child(2n) { border-right: none; }
  .action-row { grid-template-columns: 30px 1fr; }
  .action-row .owner, .action-row .due, .action-row.head .owner, .action-row.head .due { grid-column: 2; }
  .action-row.head { display: none; }
}
@media (max-width: 620px) {
  .nu-header { padding: 48px 22px 70px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
  .nu-tagline { font-size: 1rem; }
  .nu-container { padding: 40px 22px 60px; }
  .doc-title { font-size: 1.7rem; }
  .nu-badge { clip-path: none; border-radius: 8px; }
  .leverage th, .leverage td { padding: 10px 12px; font-size: 0.85rem; }
}
@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-card, .ladder-step, .snapshot { box-shadow: none; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-container">

    <div class="doc-meta">
      <span class="label">Action Item · Personal · reMarkable Capture</span>
      <span class="date">Owner: Aaron C. Norris &nbsp;·&nbsp; Drafted: April 24, 2026</span>
    </div>

    <h1 class="doc-title">Negotiate Purchase — <span class="accent">4505 Buttewoods</span> Estate</h1>
    <p class="doc-subtitle">Working playbook for the acquisition of the 7,098 sq ft estate at 4505 Buttewoods. This is a personal real-estate action item captured from the reMarkable tablet — separate from Norris Utilities® operating business. Use this as the negotiation prep sheet: what is known, what must be verified, what the offer ladder looks like, and the walk-away line.</p>

    <!-- ═══ PROPERTY SNAPSHOT ═══ -->
    <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
    <div class="snapshot">
      <div class="snapshot-cell">
        <div class="k">Address</div>
        <div class="v">4505 Buttewoods</div>
        <div class="sub">Target acquisition</div>
      </div>
      <div class="snapshot-cell">
        <div class="k">Living Area</div>
        <div class="v">7,098 sq ft</div>
        <div class="sub">Confirm per appraisal district</div>
      </div>
      <div class="snapshot-cell">
        <div class="k">Use Case</div>
        <div class="v">Primary / Estate</div>
        <div class="sub">Personal acquisition</div>
      </div>
      <div class="snapshot-cell">
        <div class="k">Status</div>
        <div class="v">Pre-Offer</div>
        <div class="sub">Due diligence open</div>
      </div>
    </div>

    <!-- ═══ NEGOTIATION PRINCIPLES ═══ -->
    <h2 class="nu-section-title">Negotiation <span>Principles</span></h2>

    <div class="nu-badge"><span class="num">01</span> Never lead with an emotional anchor — lead with documented comparables.</div>
    <div class="nu-badge"><span class="num">02</span> Every concession must pull a concession the other direction.</div>
    <div class="nu-badge"><span class="num">03</span> The walk-away number is set BEFORE the first counter, not during it.</div>
    <div class="nu-badge"><span class="num">04</span> Silence is a tool — do not fill it with justifications.</div>
    <div class="nu-badge"><span class="num">05</span> Close on terms first, price second; sellers negotiate price, buyers negotiate terms.</div>

    <!-- ═══ DUE DILIGENCE + LEVERAGE ═══ -->
    <div class="grid-2" style="margin-top: 36px;">
      <div class="nu-card">
        <h3>Due-Diligence Checklist <span class="tag">BEFORE OFFER</span></h3>
        <ul>
          <li>Pull county tax appraisal — compare assessed value to list price</li>
          <li>Order independent appraisal — do not rely on seller's number</li>
          <li>Confirm 7,098 sq ft figure against county records and MLS</li>
          <li>Lot size, easements, flood zone, and setbacks pulled from plat</li>
          <li>Last three years of property tax history (trend of the tax burden)</li>
          <li>HOA review — dues, special assessments, transfer fee, restrictions</li>
          <li>Utilities audit — 12 months of electric, gas, water, internet</li>
          <li>Roof age, HVAC age, electrical panel, plumbing material</li>
          <li>Foundation and termite letter</li>
          <li>Title search — liens, judgments, back taxes, easements</li>
        </ul>
      </div>

      <div class="nu-card">
        <h3>Seller Discovery <span class="tag">LISTEN</span></h3>
        <ul>
          <li>How long on market? Longer on market = more leverage</li>
          <li>Price reductions since listing? Count and size</li>
          <li>Why are they selling? (relocation, divorce, downsizing, estate)</li>
          <li>Timeline pressure — do they need a fast close?</li>
          <li>Are they buying another property that is contingent on this sale?</li>
          <li>Are there other offers? Ask and verify — do not assume</li>
          <li>What's staying vs. going? (appliances, fixtures, furniture)</li>
          <li>Any open permits or inspection concerns they've disclosed?</li>
        </ul>
      </div>
    </div>

    <!-- ═══ LEVERAGE TABLE ═══ -->
    <h2 class="nu-section-title">Leverage <span>Points</span></h2>
    <table class="leverage">
      <thead>
        <tr>
          <th style="width: 230px;">Point</th>
          <th>How to Use</th>
          <th style="width: 100px;">Impact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="point">Days on market</td>
          <td>If over 60 days, lead counter with documented stagnation — "the market has already priced this."</td>
          <td><span class="impact high">HIGH</span></td>
        </tr>
        <tr>
          <td class="point">Independent appraisal gap</td>
          <td>Any gap between list price and independent appraisal anchors the counter downward with a third-party document, not an opinion.</td>
          <td><span class="impact high">HIGH</span></td>
        </tr>
        <tr>
          <td class="point">Inspection findings</td>
          <td>Roof, HVAC, foundation, electrical — each deferred-maintenance item is a line-item reduction, not a vague "lower the price."</td>
          <td><span class="impact high">HIGH</span></td>
        </tr>
        <tr>
          <td class="point">Cash / fast close</td>
          <td>If financing is not required, use 21-day close and waived appraisal contingency as negotiation currency — only deploy for a real price drop.</td>
          <td><span class="impact med">MED</span></td>
        </tr>
        <tr>
          <td class="point">Clean contract</td>
          <td>No seller concessions, no repair credits, no personal property requests — signal seriousness and swap for price.</td>
          <td><span class="impact med">MED</span></td>
        </tr>
        <tr>
          <td class="point">Tax / assessment delta</td>
          <td>If county-assessed value is materially below list, reference it as a market data point — it frames the counter as reasonable, not aggressive.</td>
          <td><span class="impact med">MED</span></td>
        </tr>
        <tr>
          <td class="point">Comp neighborhood sales</td>
          <td>Pull at least 5 closed comps within 6 months, within 1 mile, within 15% of sq ft. These are the anchor of every counter.</td>
          <td><span class="impact high">HIGH</span></td>
        </tr>
        <tr>
          <td class="point">Survey / boundary</td>
          <td>If survey exposes encroachments or easement issues, use as a concession path (seller fixes or credits, not walked).</td>
          <td><span class="impact low">LOW</span></td>
        </tr>
      </tbody>
    </table>

    <!-- ═══ OFFER LADDER ═══ -->
    <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
    <p style="margin-bottom: 22px; color: #555; font-size: 0.96rem;">Populate each tier after comps and appraisal are in hand. The target column is the number worth closing at — everything above it requires a matched concession from the seller side.</p>

    <div class="ladder">
      <div class="ladder-step">
        <div class="step">Tier 1 · Opening</div>
        <div class="amount">Comp-Low</div>
        <div class="note">Based on lowest defensible comp, adjusted for condition. Leaves room for the seller to move and still feel like they won.</div>
      </div>
      <div class="ladder-step target">
        <div class="step">Tier 2 · Target</div>
        <div class="amount">Comp-Avg</div>
        <div class="note">The number worth closing at. Average of 5 closed comps within 6 months, adjusted for condition, age, and lot.</div>
      </div>
      <div class="ladder-step">
        <div class="step">Tier 3 · Ceiling</div>
        <div class="amount">Appraisal</div>
        <div class="note">Independent appraisal is the hard ceiling. Above this, walk — or require a material non-price concession that offsets.</div>
      </div>
      <div class="ladder-step">
        <div class="step">Tier 4 · Walk</div>
        <div class="amount">+3% Cap</div>
        <div class="note">Above appraisal + 3% the answer is no — and the answer is delivered once, in writing, not argued.</div>
      </div>
    </div>

    <div class="walk-point">
      <div class="title">Walk-Away Discipline</div>
      <p><strong>The walk-away number is written down before the first offer is submitted.</strong> It is not shown to the agent, not debated mid-negotiation, and not moved because the seller "is close." If the final counter lands above the Tier 4 ceiling, the response is a brief, professional pass — not a re-negotiation. The property will still be there; another will be in front of it inside 90 days.</p>
    </div>

    <!-- ═══ CONTRACT TERMS ═══ -->
    <h2 class="nu-section-title">Contract <span>Terms to Control</span></h2>
    <div class="grid-2">
      <div class="nu-card">
        <h3>Must-Haves</h3>
        <ul>
          <li>10-day inspection period — non-negotiable</li>
          <li>Right to re-negotiate or terminate on any material finding</li>
          <li>Title insurance owner's policy paid by seller (standard)</li>
          <li>Clear survey delivered pre-close</li>
          <li>Final walk-through within 48 hours of close</li>
          <li>All systems operational at close — written warranty on HVAC, roof, plumbing, electrical</li>
          <li>Earnest money escrowed with neutral third party, never seller</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>Concessions to Offer (only if needed)</h3>
        <ul>
          <li>Flexible close date — let them pick inside a window</li>
          <li>Seller rent-back up to 30 days at no cost (if cash / no financing pressure)</li>
          <li>As-is on cosmetic items (keep inspection rights on systems)</li>
          <li>Larger earnest money deposit — signals seriousness</li>
          <li>Shortened financing contingency (only if pre-underwritten)</li>
        </ul>
      </div>
    </div>

    <!-- ═══ ACTION ITEMS ═══ -->
    <h2 class="nu-section-title">Immediate <span>Next Steps</span></h2>
    <div class="action-list">
      <div class="action-row head">
        <span></span>
        <span>Action</span>
        <span class="owner">Owner</span>
        <span class="due">Due</span>
      </div>
      <div class="action-row">
        <span class="num">01</span>
        <span>Pull current listing details, MLS history, and all price changes from listing agent or public record.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 1</span>
      </div>
      <div class="action-row">
        <span class="num">02</span>
        <span>Pull 5 closed comparables within 6 months, 1 mile, and ±15% sq ft. Document in a single one-page sheet.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 1</span>
      </div>
      <div class="action-row">
        <span class="num">03</span>
        <span>Order independent appraisal — do not use seller's appraisal or lender's AVM as the anchor.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 2</span>
      </div>
      <div class="action-row">
        <span class="num">04</span>
        <span>Engage a buyer's agent or real-estate attorney for the contract, inspection, and close. Negotiate their fee before signing.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 2</span>
      </div>
      <div class="action-row">
        <span class="num">05</span>
        <span>Confirm financing posture — cash, conventional, or portfolio. Get pre-underwriting letter, not just pre-qual.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 2</span>
      </div>
      <div class="action-row">
        <span class="num">06</span>
        <span>Draft the four offer tiers (Opening, Target, Ceiling, Walk) with dollar figures once comps and appraisal are in hand.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 3</span>
      </div>
      <div class="action-row">
        <span class="num">07</span>
        <span>Submit written offer at Tier 1 with 72-hour response window. Do not verbalize a number in advance.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 3</span>
      </div>
      <div class="action-row">
        <span class="num">08</span>
        <span>On acceptance, schedule inspection inside 48 hours. Renegotiate line-item on findings — not a blanket price drop.</span>
        <span class="owner">Aaron</span>
        <span class="due">Week 4</span>
      </div>
    </div>

    <!-- ═══ CLOSING NOTE ═══ -->
    <h2 class="nu-section-title">Closing <span>Note</span></h2>
    <div class="nu-card" style="border-top-color: var(--nu-cyan);">
      <p>This is a personal acquisition and is kept separate from Norris Utilities®, LLC operating accounts, entities, and communications. All correspondence with the listing agent, seller, attorney, and lender is routed through the personal email — not the company address. Keep the Norris Utilities® business reputation out of a private real-estate negotiation; never let a listing agent connect the two.</p>
      <p>Update this action item as offers move. Any material change — new comps, a counter received, an inspection finding — is logged back into the reMarkable capture so the next-morning review at 4:00 AM has the current picture.</p>
    </div>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>