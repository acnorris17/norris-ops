<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Buttewoods Estate Acquisition — Negotiation Strategy — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
  --nu-success: #1B7F3B;
  --nu-warn: #B8860B;
  --nu-danger: #B00020;
  --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--font-primary);
  color: var(--nu-body-text);
  background: var(--nu-white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
  padding: 60px 40px 80px;
  text-align: center;
  overflow: hidden;
  min-height: 300px;
}
.nu-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
  z-index: 1;
  opacity: 0.6;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px; height: 72px;
  margin: 0 auto 14px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--nu-white);
  letter-spacing: 0.7em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
  color: rgba(255,255,255,0.92);
  letter-spacing: 0.04em;
  margin-bottom: 22px;
}
.nu-doc-label {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.35);
  color: var(--nu-white);
  padding: 8px 20px;
  border-radius: 22px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* CHEVRON */
.nu-chevron { position: relative; height: 50px; margin-top: -50px; z-index: 10; }
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* CONTENT AREA */
.nu-content-area { position: relative; background: var(--nu-white); }
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 400px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 700px; aspect-ratio: 1;
  background: radial-gradient(circle, rgba(0,0,255,0.05) 0%, transparent 60%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-wrap { max-width: 1180px; margin: 0 auto; padding: 60px 40px 80px; position: relative; z-index: 1; }

/* TITLE */
.doc-title {
  font-weight: 900;
  font-size: 2.3rem;
  color: var(--nu-dark-text);
  line-height: 1.2;
  margin-bottom: 10px;
}
.doc-title .accent { color: #0033cc; }
.doc-sub {
  font-size: 1.05rem;
  color: var(--nu-body-text);
  margin-bottom: 8px;
}
.doc-meta {
  font-size: 0.85rem;
  color: #666;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.doc-meta strong { color: var(--nu-dark-text); }

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.45rem;
  margin: 40px 0 18px;
  padding-bottom: 8px;
  border-bottom: 3px solid var(--nu-cyan);
}
.nu-section-title .first { color: #0033cc; }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

/* SUMMARY CALLOUT */
.summary-box {
  background: linear-gradient(135deg, #f2f6ff 0%, #e9f7ff 100%);
  border-left: 5px solid var(--nu-blue);
  padding: 22px 26px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.summary-box h3 {
  font-weight: 900;
  font-size: 1rem;
  color: #0033cc;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.summary-box p {
  font-size: 1rem;
  color: var(--nu-dark-text);
  line-height: 1.65;
}

/* PROPERTY CARD */
.prop-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 28px;
  box-shadow: 0 3px 14px rgba(0,0,0,0.06);
  margin-bottom: 10px;
}
.prop-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--nu-medium-gray);
}
.prop-address {
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--nu-dark-text);
  letter-spacing: 0.01em;
}
.prop-address .sub { display: block; font-weight: 400; font-size: 0.9rem; color: #666; margin-top: 3px; }
.prop-tag {
  background: #0033cc;
  color: var(--nu-white);
  padding: 6px 14px;
  border-radius: 14px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;
}
.stat {
  background: var(--nu-light-gray);
  padding: 14px 16px;
  border-radius: 6px;
  border-left: 3px solid var(--nu-cyan);
}
.stat-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #666;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.stat-value {
  font-weight: 900;
  font-size: 1.15rem;
  color: var(--nu-dark-text);
}

/* TWO COLUMN */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}
@media (max-width: 760px) { .two-col { grid-template-columns: 1fr; } }

.col-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 22px 24px;
}
.col-card h4 {
  font-weight: 900;
  font-size: 1rem;
  color: #0033cc;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.col-card ul { list-style: none; padding: 0; }
.col-card ul li {
  padding: 6px 0 6px 20px;
  position: relative;
  font-size: 0.95rem;
  color: var(--nu-body-text);
}
.col-card ul li::before {
  content: '•';
  color: var(--nu-cyan);
  font-weight: 900;
  font-size: 1.3rem;
  position: absolute;
  left: 4px;
  top: 2px;
}

/* STRATEGY PHASES */
.phase-row {
  display: flex;
  gap: 0;
  margin-bottom: 22px;
  align-items: stretch;
  flex-wrap: wrap;
}
.phase-num {
  flex: 0 0 70px;
  background: linear-gradient(135deg, #0033cc, var(--nu-cyan));
  color: var(--nu-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.8rem;
  border-radius: 8px 0 0 8px;
  min-height: 100px;
}
.phase-body {
  flex: 1 1 300px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: none;
  border-radius: 0 8px 8px 0;
  padding: 16px 22px;
}
.phase-body h4 {
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.phase-body .meta {
  font-size: 0.78rem;
  color: #666;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-weight: 700;
}
.phase-body p { font-size: 0.95rem; color: var(--nu-body-text); }
@media (max-width: 520px) {
  .phase-num { flex-basis: 100%; min-height: 50px; border-radius: 8px 8px 0 0; }
  .phase-body { border-radius: 0 0 8px 8px; border-left: 1px solid var(--nu-medium-gray); border-top: none; }
}

/* VALUATION TABLE */
.val-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}
.val-table th {
  background: linear-gradient(135deg, #0a0e5c, #0033cc);
  color: var(--nu-white);
  padding: 12px 16px;
  text-align: left;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}
.val-table td {
  padding: 12px 16px;
  border-top: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
  vertical-align: top;
}
.val-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.val-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
.val-table tr.total td {
  background: #f2f6ff !important;
  font-weight: 900;
  color: #0033cc;
  border-top: 2px solid #0033cc;
}

/* CHECKLIST */
.check-list {
  list-style: none;
  padding: 0;
  counter-reset: ck;
}
.check-list li {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-cyan);
  padding: 14px 18px 14px 52px;
  margin-bottom: 8px;
  border-radius: 6px;
  position: relative;
  font-size: 0.97rem;
  counter-increment: ck;
}
.check-list li::before {
  content: counter(ck);
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px; height: 26px;
  background: #0033cc;
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.82rem;
}
.check-list li strong { color: var(--nu-dark-text); }

/* RISK GRID */
.risk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}
.risk-card {
  padding: 18px 20px;
  border-radius: 8px;
  border-left: 4px solid;
  background: var(--nu-white);
  border-top: 1px solid var(--nu-medium-gray);
  border-right: 1px solid var(--nu-medium-gray);
  border-bottom: 1px solid var(--nu-medium-gray);
}
.risk-card.high { border-left-color: var(--nu-danger); }
.risk-card.med  { border-left-color: var(--nu-warn); }
.risk-card.low  { border-left-color: var(--nu-success); }
.risk-card h5 {
  font-weight: 900;
  font-size: 0.95rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.risk-card .level {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 900;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 8px;
}
.risk-card.high .level { background: #fce8ea; color: var(--nu-danger); }
.risk-card.med  .level { background: #fcf3da; color: var(--nu-warn); }
.risk-card.low  .level { background: #e3f3e9; color: var(--nu-success); }
.risk-card p { font-size: 0.9rem; color: var(--nu-body-text); }

/* DECISION GATE */
.gate {
  background: linear-gradient(135deg, #0a0e5c, #0033cc);
  color: var(--nu-white);
  padding: 28px 30px;
  border-radius: 10px;
  margin-top: 10px;
}
.gate h3 {
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.gate .gate-line {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.15);
  font-size: 0.98rem;
}
.gate .gate-line:last-child { border-bottom: none; }
.gate .gate-line span:first-child { color: rgba(255,255,255,0.8); }
.gate .gate-line span:last-child { font-weight: 700; color: var(--nu-cyan); text-align: right; }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact { font-size: 0.92rem; line-height: 1.9; }
.nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
.nu-footer-contact a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .nu-header { padding: 45px 20px 60px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
  .nu-tagline { font-size: 1rem; }
  .nu-wrap { padding: 40px 22px 60px; }
  .doc-title { font-size: 1.7rem; }
  .nu-section-title { font-size: 1.2rem; }
}

@media print {
  .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  .prop-card, .col-card, .risk-card { box-shadow: none; break-inside: avoid; }
}
</style>
</head>
<body>

<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-label">Private Acquisition Brief</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <h1 class="doc-title">Buttewoods Estate <span class="accent">Acquisition &amp; Negotiation Plan</span></h1>
    <p class="doc-sub">7,098 sq ft private residence — 4505 Buttewoods — confidential offer strategy &amp; close-ready checklist.</p>
    <div class="doc-meta">
      <strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO &nbsp;•&nbsp;
      <strong>Date:</strong> April 21, 2026 &nbsp;•&nbsp;
      <strong>Classification:</strong> Private — Do Not Distribute
    </div>

    <div class="summary-box">
      <h3>Objective</h3>
      <p>Secure the 7,098 sq ft estate at 4505 Buttewoods at a defensible price, on terms that protect personal liquidity and the operating capital base of Norris Utilities®. This brief establishes the property profile, valuation framework, negotiation sequence, diligence checklist, risk register, and final decision gate — so the offer moves forward with discipline and no guesswork.</p>
    </div>

    <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Profile</span></h2>
    <div class="prop-card">
      <div class="prop-head">
        <div class="prop-address">
          4505 Buttewoods
          <span class="sub">Single-family residential estate</span>
        </div>
        <div class="prop-tag">Target Acquisition</div>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="stat-label">Heated Sq Ft</div><div class="stat-value">7,098</div></div>
        <div class="stat"><div class="stat-label">Property Type</div><div class="stat-value">Estate Home</div></div>
        <div class="stat"><div class="stat-label">Status</div><div class="stat-value">In Negotiation</div></div>
        <div class="stat"><div class="stat-label">Buyer</div><div class="stat-value">A. Norris</div></div>
        <div class="stat"><div class="stat-label">Financing</div><div class="stat-value">TBD — to confirm</div></div>
        <div class="stat"><div class="stat-label">Target Close</div><div class="stat-value">To Set</div></div>
      </div>
    </div>

    <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Principles</span></h2>
    <div class="two-col">
      <div class="col-card">
        <h4>Non-Negotiables</h4>
        <ul>
          <li>Cash reserves for Norris Utilities® operations are not touched. Acquisition funds come from personal capital only.</li>
          <li>Independent appraisal and independent inspection — both before any earnest money is non-refundable.</li>
          <li>Written seller disclosures on all prior repairs, water events, foundation work, and roof age.</li>
          <li>Clear title with owner's title insurance. No verbal assurances on easements or encroachments.</li>
          <li>Financing contingency protected until underwriting is in writing.</li>
        </ul>
      </div>
      <div class="col-card">
        <h4>Leverage Points</h4>
        <ul>
          <li>Ready, qualified buyer — zero contingency on selling another home.</li>
          <li>Flexible close date accommodates seller's timeline.</li>
          <li>Clean offer: no low-ball games, no relisting risk for the seller.</li>
          <li>Willing to carry earnest money above market custom in exchange for price concession.</li>
          <li>Aaron negotiates directly — decisions are made at the table, not through layers.</li>
        </ul>
      </div>
    </div>

    <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
    <p style="margin-bottom:14px; font-size:0.97rem;">Three anchors establish the defensible ceiling on the offer. The binding number is the lesser of appraised value and independently-modeled value — not the list price and not the seller's asking number.</p>
    <table class="val-table">
      <thead>
        <tr>
          <th>Anchor</th>
          <th>Input</th>
          <th>Purpose</th>
          <th style="text-align:right;">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Comparable Sales</strong></td>
          <td>Last 12 months, 6,500–7,700 sq ft, same submarket</td>
          <td>Market ceiling</td>
          <td class="num">40%</td>
        </tr>
        <tr>
          <td><strong>Replacement Cost</strong></td>
          <td>Construction cost × sq ft, less age depreciation, plus land</td>
          <td>Floor &amp; sanity check</td>
          <td class="num">25%</td>
        </tr>
        <tr>
          <td><strong>Independent Appraisal</strong></td>
          <td>Licensed appraiser, buyer-commissioned</td>
          <td>Binding reference number</td>
          <td class="num">30%</td>
        </tr>
        <tr>
          <td><strong>Condition Adjustment</strong></td>
          <td>Deferred maintenance &amp; system age (HVAC, roof, etc.)</td>
          <td>Price reduction lever</td>
          <td class="num">5%</td>
        </tr>
        <tr class="total">
          <td colspan="3">Offer Ceiling = weighted blend, then reduced by inspection findings</td>
          <td class="num">100%</td>
        </tr>
      </tbody>
    </table>

    <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Sequence</span></h2>

    <div class="phase-row">
      <div class="phase-num">1</div>
      <div class="phase-body">
        <h4>Anchor the Conversation</h4>
        <div class="meta">Week 1 — Pre-Offer</div>
        <p>Open with the comp set and replacement-cost math, not a number. Position Aaron as a serious, informed buyer who has already modeled the property. The first number on the table must be the seller's — and must be spoken before the buyer's.</p>
      </div>
    </div>

    <div class="phase-row">
      <div class="phase-num">2</div>
      <div class="phase-body">
        <h4>Written Offer with Contingencies</h4>
        <div class="meta">Week 1–2 — Offer Submission</div>
        <p>Initial offer approximately 7–10% below anticipated ceiling. Contingencies: financing (if used), inspection, appraisal, clear title, seller disclosures. Earnest money meaningful but fully refundable until contingencies clear.</p>
      </div>
    </div>

    <div class="phase-row">
      <div class="phase-num">3</div>
      <div class="phase-body">
        <h4>Inspection &amp; Appraisal</h4>
        <div class="meta">Week 2–4 — Diligence</div>
        <p>Licensed inspector, licensed appraiser, foundation specialist if warranted, HVAC/roof/plumbing/electrical scoped independently on a 7,098 sq ft structure. Deliverables in writing — verbal findings do not move the number.</p>
      </div>
    </div>

    <div class="phase-row">
      <div class="phase-num">4</div>
      <div class="phase-body">
        <h4>Re-Negotiation on Findings</h4>
        <div class="meta">Week 4 — Price &amp; Credits</div>
        <p>Inspection findings convert to dollar-credits or price reduction — itemized, not lumped. If appraisal comes in below contract, buyer exercises appraisal contingency: seller reduces to appraised value, buyer covers gap, or deal re-sets.</p>
      </div>
    </div>

    <div class="phase-row">
      <div class="phase-num">5</div>
      <div class="phase-body">
        <h4>Walk-Away Readiness</h4>
        <div class="meta">Continuous</div>
        <p>A fixed walk-away number is written down before Phase 2 begins and is not altered mid-negotiation. Leverage exists only as long as the willingness to leave is real. If the seller will not meet the math, Aaron walks — the next property is always the better deal.</p>
      </div>
    </div>

    <div class="phase-row">
      <div class="phase-num">6</div>
      <div class="phase-body">
        <h4>Close &amp; Record</h4>
        <div class="meta">Week 5–6 — Settlement</div>
        <p>Final walk-through 24–48 hours before close. Funds wired per verified instructions only — wire fraud is the #1 real estate loss vector. Owner's title insurance policy in hand at signing. Deed recorded same-day if jurisdiction allows.</p>
      </div>
    </div>

    <h2 class="nu-section-title"><span class="first">Diligence</span> <span class="rest">Checklist</span></h2>
    <ol class="check-list">
      <li><strong>Title search</strong> — full chain, easements, encroachments, liens, unpaid taxes. Resolved before earnest money becomes non-refundable.</li>
      <li><strong>Survey</strong> — current boundary survey matching deed legal description. No assumptions on lot lines for a 7,098 sq ft structure.</li>
      <li><strong>Structural inspection</strong> — licensed inspector. Separate foundation and roof specialist if any signal of settlement or prior repair.</li>
      <li><strong>HVAC, plumbing, electrical</strong> — documented age, condition, remaining life. For 7,098 sq ft, multiple HVAC units common — each scoped individually.</li>
      <li><strong>Environmental</strong> — radon test, mold review in basement/crawlspace, prior flood/water-event disclosures, termite letter.</li>
      <li><strong>Insurance quote</strong> — obtain binding homeowner's quote before close. Some markets are becoming uninsurable; verify before committing.</li>
      <li><strong>Property tax review</strong> — last three years' tax bills plus millage rate; confirm assessed value will not spike post-sale.</li>
      <li><strong>HOA / deed restrictions</strong> — covenants, architectural review, assessments outstanding or anticipated.</li>
      <li><strong>Utility &amp; service records</strong> — last 12 months of power, gas, water bills to true-carry cost.</li>
      <li><strong>Appraisal</strong> — buyer-commissioned and licensed. Seller's prior appraisal is reference only.</li>
      <li><strong>Financing lock</strong> (if applicable) — rate, term, points in writing before contingency expires.</li>
      <li><strong>Closing attorney / escrow</strong> — buyer-selected where jurisdiction permits. Wire instructions verified by phone to a known number.</li>
    </ol>

    <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
    <div class="risk-grid">
      <div class="risk-card high">
        <h5>Hidden Structural Issues</h5>
        <div class="level">High Impact</div>
        <p>A 7,098 sq ft home has thousands of linear feet of framing, plumbing, and wiring. Unseen defects dominate post-close surprises. Mitigation: independent structural + foundation + roof inspection, in writing.</p>
      </div>
      <div class="risk-card high">
        <h5>Wire Fraud at Close</h5>
        <div class="level">High Impact</div>
        <p>Fraudulent wiring instructions are the leading real-estate loss vector. Mitigation: verify instructions by voice to a number the buyer already has — never to a number from the email itself.</p>
      </div>
      <div class="risk-card med">
        <h5>Appraisal Gap</h5>
        <div class="level">Medium Impact</div>
        <p>Appraisal comes in below contract. Mitigation: appraisal contingency stays live; three outcomes — seller reduces, buyer covers gap, or deal re-sets.</p>
      </div>
      <div class="risk-card med">
        <h5>Insurance Availability</h5>
        <div class="level">Medium Impact</div>
        <p>Coverage for large homes in certain markets has become difficult. Mitigation: binding quote in hand before final contingency removal.</p>
      </div>
      <div class="risk-card med">
        <h5>Title or Easement Surprise</h5>
        <div class="level">Medium Impact</div>
        <p>Undisclosed easement, encroachment, or prior lien surfaces mid-process. Mitigation: full title search + owner's title insurance policy — not lender's only.</p>
      </div>
      <div class="risk-card low">
        <h5>Timeline Slippage</h5>
        <div class="level">Low Impact</div>
        <p>Close date drifts by one to three weeks. Mitigation: written flexibility both directions, no hard occupancy pressure built into offer.</p>
      </div>
    </div>

    <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Gate — Before Aaron Signs</span></h2>
    <div class="gate">
      <h3>These five confirmations must all be YES before any offer becomes binding</h3>
      <div class="gate-line"><span>1. Is the offer price ≤ the blended valuation ceiling?</span><span>Yes / No</span></div>
      <div class="gate-line"><span>2. Is the walk-away number written down and untouched?</span><span>Yes / No</span></div>
      <div class="gate-line"><span>3. Are financing and insurance confirmed in writing?</span><span>Yes / No</span></div>
      <div class="gate-line"><span>4. Are inspection credits itemized, not lumped?</span><span>Yes / No</span></div>
      <div class="gate-line"><span>5. Are business operating reserves fully protected?</span><span>Yes / No</span></div>
    </div>

    <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
    <div class="two-col">
      <div class="col-card">
        <h4>This Week</h4>
        <ul>
          <li>Assemble 12-month comp set for 6,500–7,700 sq ft homes in the submarket.</li>
          <li>Engage licensed appraiser (buyer-commissioned).</li>
          <li>Engage structural inspector and separate foundation specialist.</li>
          <li>Obtain binding homeowner's insurance quote.</li>
          <li>Set walk-away number in writing — do not share with seller's side.</li>
        </ul>
      </div>
      <div class="col-card">
        <h4>Before First Offer</h4>
        <ul>
          <li>Select closing attorney or escrow agent.</li>
          <li>Confirm financing path (cash vs. mortgage) and liquidity plan.</li>
          <li>Confirm operating-reserve firewall — acquisition does not touch Norris Utilities® working capital.</li>
          <li>Written seller-disclosure request prepared.</li>
          <li>Draft offer reviewed by attorney before submission.</li>
        </ul>
      </div>
    </div>

  </div>
</main>

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