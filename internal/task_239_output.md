<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
  --font-display: 'Playfair Display', Georgia, serif;
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 70px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 90px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -40%; right: -15%;
  width: 75%; height: 180%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}

.nu-logo-text {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 3.2rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-left: 0.75em;
}
.nu-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}
.nu-doc-label {
  display: inline-block;
  margin-top: 20px;
  padding: 6px 20px;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 2px;
  color: var(--nu-white);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* CHEVRON */
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

/* CONTENT */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 5%; left: 50%;
  transform: translateX(-50%);
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-wrap {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  z-index: 1;
}

/* PAGE TITLE */
.nu-page-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
  line-height: 1.15;
}
.nu-page-title span { color: var(--nu-blue); }
.nu-page-subtitle {
  font-size: 1.1rem;
  color: var(--nu-body-text);
  margin-bottom: 8px;
  font-weight: 400;
}
.nu-page-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 16px;
  padding: 16px 20px;
  background: var(--nu-light-gray);
  border-left: 4px solid var(--nu-cyan);
  border-radius: 2px;
  font-size: 0.9rem;
}
.nu-page-meta div { display: flex; flex-direction: column; }
.nu-page-meta .label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #777;
  font-weight: 700;
}
.nu-page-meta .value {
  font-weight: 700;
  color: var(--nu-dark-text);
}

/* SECTION */
.nu-section { margin-top: 48px; }
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-section-title .first { color: var(--nu-blue); }
.nu-section-title .rest { color: var(--nu-dark-text); }

/* PROPERTY HERO */
.nu-property-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
}
.nu-property-card {
  background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.nu-property-card h3 {
  font-size: 0.8rem;
  color: var(--nu-blue);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 12px;
  font-weight: 700;
}
.nu-property-card .big-stat {
  font-weight: 900;
  font-size: 2.6rem;
  color: var(--nu-dark-text);
  line-height: 1.1;
  margin-bottom: 6px;
}
.nu-property-card .big-stat small {
  font-size: 1rem;
  font-weight: 400;
  color: var(--nu-body-text);
}
.nu-property-card p {
  font-size: 0.95rem;
  color: var(--nu-body-text);
}

/* BADGE ROW */
.nu-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 20px;
}
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 14px 28px 14px 16px;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.02em;
}
.nu-badge-icon {
  width: 28px;
  height: 28px;
  margin-right: 12px;
  fill: var(--nu-cyan);
  flex-shrink: 0;
}

/* TABLE */
.nu-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  background: var(--nu-white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.nu-table th {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
  text-align: left;
  padding: 14px 18px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-table td {
  padding: 13px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
}
.nu-table tr:last-child td { border-bottom: none; }
.nu-table tr:nth-child(even) td { background: #fafafd; }
.nu-table td.num { font-weight: 700; color: var(--nu-dark-text); text-align: right; font-variant-numeric: tabular-nums; }

/* STRATEGY GRID */
.nu-strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.nu-strategy-card {
  background: var(--nu-white);
  border-radius: 8px;
  padding: 24px;
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-cyan);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.nu-strategy-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.nu-strategy-card .step-num {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  font-weight: 900;
  margin-bottom: 12px;
}
.nu-strategy-card h4 {
  color: var(--nu-dark-text);
  font-weight: 900;
  font-size: 1.15rem;
  margin-bottom: 10px;
}
.nu-strategy-card p {
  font-size: 0.92rem;
  color: var(--nu-body-text);
  margin-bottom: 10px;
}
.nu-strategy-card ul {
  padding-left: 18px;
  font-size: 0.9rem;
}
.nu-strategy-card li { margin-bottom: 6px; }

/* OFFER LADDER */
.nu-ladder {
  margin-top: 20px;
  border-left: 3px solid var(--nu-cyan);
  padding-left: 24px;
}
.nu-ladder-step {
  position: relative;
  padding: 16px 20px;
  background: var(--nu-light-gray);
  border-radius: 6px;
  margin-bottom: 14px;
}
.nu-ladder-step::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 22px;
  width: 14px;
  height: 14px;
  background: var(--nu-blue);
  border: 3px solid var(--nu-white);
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--nu-cyan);
}
.nu-ladder-step h4 {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1rem;
  margin-bottom: 4px;
}
.nu-ladder-step .price {
  font-weight: 900;
  color: var(--nu-dark-text);
  font-size: 1.4rem;
  margin-bottom: 6px;
  font-variant-numeric: tabular-nums;
}
.nu-ladder-step p {
  font-size: 0.9rem;
  color: var(--nu-body-text);
}

/* CHECKLIST */
.nu-checklist {
  background: var(--nu-light-gray);
  border-radius: 8px;
  padding: 24px 28px;
  margin-top: 20px;
}
.nu-checklist ul { list-style: none; }
.nu-checklist li {
  padding: 10px 0 10px 32px;
  position: relative;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
}
.nu-checklist li:last-child { border-bottom: none; }
.nu-checklist li::before {
  content: '';
  position: absolute;
  left: 0; top: 14px;
  width: 18px; height: 18px;
  border: 2px solid var(--nu-blue);
  border-radius: 3px;
  background: var(--nu-white);
}
.nu-checklist li strong { color: var(--nu-dark-text); }

/* CALLOUT */
.nu-callout {
  background: linear-gradient(135deg, #fff8e6 0%, #fff3d1 100%);
  border-left: 5px solid var(--nu-accent-gold);
  padding: 20px 24px;
  border-radius: 4px;
  margin-top: 24px;
}
.nu-callout h4 {
  color: #7a5a1a;
  font-weight: 900;
  margin-bottom: 6px;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.nu-callout p {
  color: #4a3a10;
  font-size: 0.95rem;
}

/* RISK MATRIX */
.nu-risk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.nu-risk-card {
  padding: 18px 20px;
  border-radius: 6px;
  border: 1px solid var(--nu-medium-gray);
  background: var(--nu-white);
}
.nu-risk-card.high { border-left: 4px solid #c9302c; }
.nu-risk-card.med { border-left: 4px solid var(--nu-accent-gold); }
.nu-risk-card.low { border-left: 4px solid #2e8540; }
.nu-risk-card h5 {
  font-weight: 900;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
  font-size: 1rem;
}
.nu-risk-card .level {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.nu-risk-card.high .level { background: #fde8e7; color: #c9302c; }
.nu-risk-card.med .level { background: #fff3d1; color: #8a6410; }
.nu-risk-card.low .level { background: #e6f4e9; color: #2e8540; }
.nu-risk-card p { font-size: 0.88rem; color: var(--nu-body-text); }

/* NEXT ACTIONS */
.nu-actions {
  margin-top: 20px;
  background: linear-gradient(135deg, var(--nu-dark-text) 0%, #2a2a5e 100%);
  color: var(--nu-white);
  border-radius: 8px;
  padding: 28px;
}
.nu-actions h3 {
  color: var(--nu-cyan);
  margin-bottom: 16px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 1rem;
}
.nu-actions ol { padding-left: 22px; }
.nu-actions li {
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 0.95rem;
}
.nu-actions li strong { color: var(--nu-cyan); }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px;
  text-align: center;
  margin-top: 60px;
}
.nu-footer-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
  color: var(--nu-cyan);
  margin-bottom: 16px;
}
.nu-footer-contact {
  font-size: 1rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-divider {
  width: 60px;
  height: 2px;
  background: var(--nu-cyan);
  margin: 16px auto;
  opacity: 0.5;
}
.nu-confidential {
  margin-top: 20px;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 50px 20px 70px; min-height: 220px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-content-wrap { padding: 40px 20px; }
  .nu-page-title { font-size: 1.75rem; }
  .nu-property-hero { grid-template-columns: 1fr; }
  .nu-badge { clip-path: none; border-radius: 6px; padding-right: 16px; }
  .nu-footer { padding: 40px 20px; }
  .nu-footer-contact { font-size: 0.95rem; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-strategy-card:hover { transform: none; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<header class="nu-header">
  <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-label">Acquisition Brief — Internal</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-content-wrap">

    <h1 class="nu-page-title"><span>Estate Acquisition</span> — 4505 Buttewoods</h1>
    <p class="nu-page-subtitle">Negotiation strategy for the 7,098 sq ft residence. Prepared for Aaron C. Norris, Founder &amp; CEO.</p>

    <div class="nu-page-meta">
      <div>
        <span class="label">Property</span>
        <span class="value">4505 Buttewoods</span>
      </div>
      <div>
        <span class="label">Livable Area</span>
        <span class="value">7,098 sq ft</span>
      </div>
      <div>
        <span class="label">Asset Class</span>
        <span class="value">Residential Estate</span>
      </div>
      <div>
        <span class="label">Status</span>
        <span class="value">Pre-Offer</span>
      </div>
      <div>
        <span class="label">Brief Date</span>
        <span class="value">April 21, 2026</span>
      </div>
    </div>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">at a Glance</span></h2>

      <div class="nu-property-hero">
        <div class="nu-property-card">
          <h3>Size &amp; Footprint</h3>
          <div class="big-stat">7,098 <small>sq ft</small></div>
          <p>Large-format estate footprint. At this size, every $10 per sq ft of negotiated savings equals roughly $70,980 of equity retained at closing.</p>
        </div>
        <div class="nu-property-card">
          <h3>Address on File</h3>
          <div class="big-stat" style="font-size:1.9rem;">4505 Buttewoods</div>
          <p>Address as captured on the reMarkable action item. Confirm exact street suffix, municipality, and legal parcel description against county records before submitting a written offer.</p>
        </div>
      </div>

      <div class="nu-badges">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 L2 9 V22 H9 V15 H15 V22 H22 V9 Z"/></svg>
          Residential Estate — Pre-Offer
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L3 5 V11 Q3 17 12 23 Q21 17 21 11 V5 Z"/></svg>
          Legal &amp; Title Review Required
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17 L9 11 L13 15 L21 7 V13 H19 V11 L13 17 L9 13 L3 19 Z M3 19 H21 V21 H3 Z"/></svg>
          Comps Pull Pending
        </div>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Pre-Negotiation</span> <span class="rest">Due Diligence</span></h2>
      <p style="margin-top:10px;">Before any number is put in writing, the file must be complete. Walking into a negotiation on a 7,098 sq ft property without the data below is what costs sellers — and buyers — hundreds of thousands.</p>

      <table class="nu-table">
        <thead>
          <tr>
            <th style="width:35%;">Data Item</th>
            <th>Why It Matters</th>
            <th style="width:18%;">Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Confirmed legal address &amp; parcel ID</strong></td>
            <td>Confirms the asset being negotiated is actually the asset on the deed.</td>
            <td>County recorder</td>
          </tr>
          <tr>
            <td><strong>Prior sale history (5-year look-back)</strong></td>
            <td>Reveals the seller's basis and holding period — informs their likely floor.</td>
            <td>County recorder / MLS</td>
          </tr>
          <tr>
            <td><strong>Active listing price &amp; days on market</strong></td>
            <td>The longer it has sat, the greater the leverage for a buyer.</td>
            <td>Listing agent / MLS</td>
          </tr>
          <tr>
            <td><strong>Three closed comps (6,500–7,800 sq ft)</strong></td>
            <td>Anchors the offer to market reality rather than the asking price.</td>
            <td>Licensed REALTOR®</td>
          </tr>
          <tr>
            <td><strong>Assessed value &amp; current tax bill</strong></td>
            <td>Signals carrying cost and any tax reassessment risk at closing.</td>
            <td>County assessor</td>
          </tr>
          <tr>
            <td><strong>Title search / lien status</strong></td>
            <td>Surfaces any encumbrances that must clear before transfer.</td>
            <td>Title company</td>
          </tr>
          <tr>
            <td><strong>Known defects / seller disclosures</strong></td>
            <td>Each disclosed item is a line-item for price reduction.</td>
            <td>Listing side</td>
          </tr>
          <tr>
            <td><strong>Survey &amp; flood zone determination</strong></td>
            <td>Material to insurability and long-term resale.</td>
            <td>Title / FEMA map</td>
          </tr>
          <tr>
            <td><strong>HOA or covenant restrictions</strong></td>
            <td>Governs future modifications and monthly carrying cost.</td>
            <td>HOA / deed records</td>
          </tr>
          <tr>
            <td><strong>Mechanical age (roof, HVAC, systems)</strong></td>
            <td>Basis for credit requests at the inspection stage.</td>
            <td>Pre-inspection walk</td>
          </tr>
        </tbody>
      </table>

      <div class="nu-callout">
        <h4>Principle</h4>
        <p>Information asymmetry is the single biggest driver of price in a private-treaty negotiation. The side with the cleaner file dictates the terms.</p>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Playbook</span></h2>

      <div class="nu-strategy-grid">
        <div class="nu-strategy-card">
          <span class="step-num">1</span>
          <h4>Open with Listening</h4>
          <p>Start every seller conversation with questions — not a number. The seller's motivation is the most valuable piece of data in the deal.</p>
          <ul>
            <li>"What's driving the move?"</li>
            <li>"What's your ideal timeline?"</li>
            <li>"Have there been prior offers?"</li>
          </ul>
        </div>

        <div class="nu-strategy-card">
          <span class="step-num">2</span>
          <h4>Anchor on Comps</h4>
          <p>When the first number goes on the table, it should be anchored to closed sales of comparable 6,500–7,800 sq ft estates — not the list price.</p>
          <ul>
            <li>Present three comps in writing</li>
            <li>Show price-per-sq-ft range</li>
            <li>Let the math frame the offer</li>
          </ul>
        </div>

        <div class="nu-strategy-card">
          <span class="step-num">3</span>
          <h4>Separate Price from Terms</h4>
          <p>Price is one lever. Closing date, contingencies, fixtures, closing costs, leaseback — each is a currency that can be spent or saved.</p>
          <ul>
            <li>Trade calendar for dollars</li>
            <li>Offer clean, short contingencies</li>
            <li>Ask for seller-paid closing costs</li>
          </ul>
        </div>

        <div class="nu-strategy-card">
          <span class="step-num">4</span>
          <h4>Write, Don't Talk</h4>
          <p>A written offer in the seller's hand is leverage. A verbal "what if" is not. Every meaningful counter goes on paper.</p>
          <ul>
            <li>Short expiration window (48–72 hrs)</li>
            <li>Proof of funds attached</li>
            <li>Clear, itemized credits requested</li>
          </ul>
        </div>

        <div class="nu-strategy-card">
          <span class="step-num">5</span>
          <h4>Use the Inspection</h4>
          <p>Inspection is the second negotiation. Itemize every significant finding and request credits in dollars, not promises of repair.</p>
          <ul>
            <li>Licensed inspector, written report</li>
            <li>Request credits, not repairs</li>
            <li>Target roof, HVAC, foundation, water</li>
          </ul>
        </div>

        <div class="nu-strategy-card">
          <span class="step-num">6</span>
          <h4>Walk-Away Authority</h4>
          <p>Define the ceiling before the first conversation. A buyer who will walk always outnegotiates a buyer who won't — every single time.</p>
          <ul>
            <li>Set max price in writing, internally</li>
            <li>Define minimum acceptable terms</li>
            <li>Commit to the walk-away before offer</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder Framework</span></h2>
      <p style="margin-top:10px;">Do not negotiate by gut feel. Build the ladder before the first conversation and work it sequentially. Actual dollar amounts are anchored to appraisal, comps, and walk-away ceiling — to be set once due diligence is complete.</p>

      <div class="nu-ladder">
        <div class="nu-ladder-step">
          <h4>Rung 1 — Opening Offer</h4>
          <div class="price">~ 88% of list</div>
          <p>Anchored below the bottom of the comp range. Signals a serious, informed buyer without insulting the seller. Includes proof of funds and 48-hour expiration.</p>
        </div>
        <div class="nu-ladder-step">
          <h4>Rung 2 — First Counter Response</h4>
          <div class="price">~ 92–94% of list</div>
          <p>Move only if the seller counters in writing. Concession should be paired with an equivalent ask — a closing-cost credit, an appliance inclusion, or a flexible closing date.</p>
        </div>
        <div class="nu-ladder-step">
          <h4>Rung 3 — Inspection Re-Negotiation</h4>
          <div class="price">−$15K to −$45K</div>
          <p>After written inspection report, request credits for specific, documented items. This is often where the deal's real economics are set.</p>
        </div>
        <div class="nu-ladder-step">
          <h4>Ceiling — Walk-Away Price</h4>
          <div class="price">Pre-Set, Internal Only</div>
          <p>Defined before negotiation starts. Never disclosed. If the counter exceeds the ceiling, exit with courtesy — deals come back when sellers realize the ceiling was real.</p>
        </div>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Matrix</span></h2>
      <div class="nu-risk-grid">
        <div class="nu-risk-card high">
          <h5>Title / Lien Defects</h5>
          <span class="level">High Impact</span>
          <p>Any unresolved lien or boundary dispute can delay closing 60–90 days. Pull a preliminary title report before the inspection period ends.</p>
        </div>
        <div class="nu-risk-card high">
          <h5>Appraisal Gap</h5>
          <span class="level">High Impact</span>
          <p>On a 7,098 sq ft estate, a soft appraisal can create a five-figure gap. Order the appraisal early and keep the option to renegotiate if it comes in short.</p>
        </div>
        <div class="nu-risk-card med">
          <h5>Deferred Mechanical</h5>
          <span class="level">Medium Impact</span>
          <p>Roof, HVAC, and major systems in properties of this scale are expensive to replace. Budget for credits, not seller promises.</p>
        </div>
        <div class="nu-risk-card med">
          <h5>Financing Contingency</h5>
          <span class="level">Medium Impact</span>
          <p>Rate movement during a 30–45 day close can shift monthly cost materially. Lock the rate early and keep a financing contingency in the contract.</p>
        </div>
        <div class="nu-risk-card low">
          <h5>Cosmetic Condition</h5>
          <span class="level">Low Impact</span>
          <p>Paint, flooring, and fixtures are negotiable but not deal-breakers. Use them as last-mile concession currency, not as structural objections.</p>
        </div>
        <div class="nu-risk-card low">
          <h5>Neighborhood Trend</h5>
          <span class="level">Low Impact</span>
          <p>Validate by pulling six months of closed sales within a half-mile radius. Stable or rising trendline supports the offer price.</p>
        </div>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <div class="nu-checklist">
        <ul>
          <li><strong>Confirm full legal address and parcel ID</strong> for 4505 Buttewoods with the county recorder.</li>
          <li><strong>Engage a licensed REALTOR®</strong> familiar with estate-scale residential sales in the immediate market.</li>
          <li><strong>Pull three closed comps</strong> between 6,500 and 7,800 sq ft, within a one-mile radius, closed within six months.</li>
          <li><strong>Order preliminary title report</strong> and confirm no liens, judgments, or open permits.</li>
          <li><strong>Verify property tax status</strong> — current year, any arrears, and next reassessment date.</li>
          <li><strong>Pre-approval letter in hand</strong> or equivalent proof of funds for a cash close.</li>
          <li><strong>Define walk-away ceiling in writing</strong> — internal file only, never disclosed.</li>
          <li><strong>Pre-identify inspection team</strong> — licensed home inspector, roof, HVAC, foundation specialists on standby.</li>
          <li><strong>Draft offer letter</strong> with short expiration window, clean contingencies, and itemized terms.</li>
          <li><strong>Schedule two separate walkthroughs</strong> — one at listing, one before offer submission.</li>
        </ul>
      </div>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Questions for the Seller</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th style="width:5%;">#</th>
            <th>Question</th>
            <th style="width:35%;">What It Reveals</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="num">1</td><td>What is the ideal closing timeline for you and your family?</td><td>Urgency / flexibility on price</td></tr>
          <tr><td class="num">2</td><td>How did you arrive at the current asking price?</td><td>Whether the price is anchored or flexible</td></tr>
          <tr><td class="num">3</td><td>Have there been prior offers? Why didn't they close?</td><td>Known deal-killers and seller sensitivities</td></tr>
          <tr><td class="num">4</td><td>What work has been done on the property in the last five years?</td><td>Mechanical age and deferred maintenance</td></tr>
          <tr><td class="num">5</td><td>Are there any open permits, easements, or disputes with neighbors?</td><td>Hidden legal friction</td></tr>
          <tr><td class="num">6</td><td>Which fixtures and furnishings would you consider including?</td><td>Non-cash concession currency</td></tr>
          <tr><td class="num">7</td><td>Would a leaseback after closing be helpful to you?</td><td>Creates timeline flexibility in exchange for price</td></tr>
          <tr><td class="num">8</td><td>What would it take for you to accept an offer this week?</td><td>Surfaces the real floor</td></tr>
        </tbody>
      </table>
    </section>

    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions — Aaron</span></h2>
      <div class="nu-actions">
        <h3>Immediate — This Week</h3>
        <ol>
          <li><strong>Confirm property address</strong> — verify the full legal address at 4505 Buttewoods against the county recorder and capture the parcel ID for the file.</li>
          <li><strong>Engage representation</strong> — retain a licensed REALTOR® or real-estate attorney before making any written contact with the listing side.</li>
          <li><strong>Commission comps package</strong> — three closed sales, 6,500–7,800 sq ft, within one mile, closed within the last six months.</li>
          <li><strong>Order preliminary title</strong> — pull a title search and confirm no liens, judgments, or open permits.</li>
          <li><strong>Secure proof of funds</strong> — pre-approval letter or cash POF letter dated within 30 days.</li>
          <li><strong>Set the internal walk-away ceiling</strong> — record it in the file. Never discuss it outside the file.</li>
          <li><strong>Schedule first walkthrough</strong> — observe, ask the eight seller questions, do not negotiate on the spot.</li>
          <li><strong>Return to this brief before submitting any written offer</strong> — the ladder and the checklist are the contract with yourself.</li>
        </ol>
      </div>
    </section>

  </div>
</main>

<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-divider"></div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
    130 Inverness Plaza #210, Birmingham, AL 35242
  </div>
  <div class="nu-confidential">Confidential — Internal Acquisition Brief — Do Not Distribute</div>
</footer>

</body>
</html>