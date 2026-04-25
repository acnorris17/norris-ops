<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
  background: var(--nu-light-gray);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
  padding: 70px 40px 100px;
  text-align: center;
  overflow: hidden;
  min-height: 320px;
}
.nu-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
  z-index: 1;
  opacity: 0.7;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 80%; height: 200%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 76px;
  height: 76px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3.2rem;
  color: var(--nu-white);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.nu-logo-subtitle {
  font-weight: 900;
  font-size: 1.3rem;
  color: var(--nu-white);
  letter-spacing: 0.75em;
  text-transform: uppercase;
  margin-bottom: 18px;
  padding-left: 0.75em;
}
.nu-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  color: rgba(255,255,255,0.95);
  letter-spacing: 0.04em;
}

/* CHEVRON */
.nu-chevron {
  position: relative;
  height: 60px;
  margin-top: -60px;
  z-index: 10;
}
.nu-chevron svg {
  width: 100%;
  height: 60px;
  display: block;
}

/* CONTENT AREA */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  overflow: hidden;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%; height: 65%;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  z-index: 0;
  opacity: 0.07;
}
.nu-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 70px 40px 90px;
  position: relative;
  z-index: 1;
}

/* PAGE TITLE */
.page-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  border-bottom: 3px solid var(--nu-blue);
  padding-bottom: 20px;
  margin-bottom: 36px;
}
.page-title {
  font-weight: 900;
  font-size: 2.1rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
}
.page-title span { color: var(--nu-blue); }
.page-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--nu-blue), #0033cc);
  color: var(--nu-white);
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.page-tag::before {
  content: '';
  width: 8px; height: 8px;
  background: var(--nu-cyan);
  border-radius: 50%;
}

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 18px;
  letter-spacing: -0.01em;
}
.nu-section-title .first { color: var(--nu-blue); }
.nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

/* SUMMARY GRID */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 50px;
}
.summary-card {
  background: var(--nu-white);
  border-left: 4px solid var(--nu-blue);
  padding: 22px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border-radius: 0 8px 8px 0;
}
.summary-card .label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.summary-card .value {
  font-weight: 900;
  font-size: 1.45rem;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.summary-card .sub {
  font-size: 0.85rem;
  color: var(--nu-body-text);
  margin-top: 4px;
}

/* SECTION BLOCK */
.section-block {
  margin-bottom: 50px;
}

/* BADGE STRIP (objectives) */
.objective-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 16px 28px 16px 18px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.02em;
}
.nu-badge .num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  border-radius: 50%;
  font-weight: 900;
  font-size: 0.95rem;
  margin-right: 14px;
  flex-shrink: 0;
}

/* TWO COLUMN LAYOUT */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
@media (max-width: 820px) { .two-col { grid-template-columns: 1fr; } }

.info-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 28px 30px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.05);
}
.info-card h3 {
  font-weight: 900;
  font-size: 1.15rem;
  color: var(--nu-dark-text);
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--nu-cyan);
}
.info-card ul {
  list-style: none;
  padding: 0;
}
.info-card li {
  padding: 8px 0 8px 22px;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.55;
}
.info-card li::before {
  content: '';
  position: absolute;
  left: 0; top: 16px;
  width: 8px; height: 8px;
  background: var(--nu-blue);
  transform: rotate(45deg);
}
.info-card .key { font-weight: 700; color: var(--nu-dark-text); }

/* PROPERTY DETAILS TABLE */
.detail-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}
.detail-table tr { border-bottom: 1px solid var(--nu-medium-gray); }
.detail-table tr:last-child { border-bottom: none; }
.detail-table th, .detail-table td {
  padding: 12px 14px;
  text-align: left;
  font-size: 0.92rem;
}
.detail-table th {
  background: var(--nu-light-gray);
  font-weight: 700;
  color: var(--nu-blue);
  text-transform: uppercase;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  width: 38%;
}
.detail-table td { color: var(--nu-body-text); }

/* TIMELINE */
.timeline {
  position: relative;
  padding-left: 36px;
  margin-top: 12px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 12px; top: 8px; bottom: 8px;
  width: 3px;
  background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  padding: 14px 0 18px 14px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -30px; top: 18px;
  width: 16px; height: 16px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--nu-white);
}
.timeline-phase {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}
.timeline-title {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.timeline-detail {
  font-size: 0.92rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* NEGOTIATION TACTICS */
.tactics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 8px;
}
.tactic-card {
  background: linear-gradient(135deg, var(--nu-white) 0%, #f8f9ff 100%);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 22px 22px 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.tactic-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.09);
}
.tactic-card .icon {
  width: 36px; height: 36px;
  background: var(--nu-blue);
  color: var(--nu-white);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  margin-bottom: 12px;
}
.tactic-card h4 {
  font-weight: 900;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
  font-size: 1rem;
}
.tactic-card p {
  font-size: 0.9rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* PRICE STRATEGY */
.price-strategy {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-top: 12px;
}
@media (max-width: 720px) { .price-strategy { grid-template-columns: 1fr; } }
.price-tier {
  padding: 26px 22px;
  text-align: center;
  color: var(--nu-white);
}
.price-tier.opening { background: linear-gradient(135deg, #00aaff, var(--nu-cyan)); color: var(--nu-navy); }
.price-tier.target { background: linear-gradient(135deg, #0033cc, var(--nu-blue)); }
.price-tier.walk { background: linear-gradient(135deg, var(--nu-navy), #1a1a3e); }
.price-tier .tier-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  opacity: 0.95;
}
.price-tier .tier-value {
  font-weight: 900;
  font-size: 1.85rem;
  margin-bottom: 6px;
}
.price-tier .tier-note {
  font-size: 0.85rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* CONTINGENCIES */
.contingency-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 10px;
}
.contingency-item {
  background: var(--nu-light-gray);
  padding: 16px 18px;
  border-radius: 6px;
  border-left: 4px solid var(--nu-cyan);
}
.contingency-item .ct-title {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}
.contingency-item .ct-desc {
  font-size: 0.88rem;
  color: var(--nu-body-text);
  line-height: 1.5;
}

/* CTA */
.cta-row {
  background: linear-gradient(135deg, #0a0e5c, var(--nu-blue));
  border-radius: 12px;
  padding: 36px 40px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  color: var(--nu-white);
}
.cta-text h3 {
  font-weight: 900;
  font-size: 1.35rem;
  margin-bottom: 6px;
}
.cta-text p { opacity: 0.9; font-size: 0.95rem; }
.cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.nu-btn-primary {
  display: inline-block;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
}
.nu-btn-primary:hover { background: var(--nu-white); transform: translateY(-2px); }
.nu-btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--nu-white);
  padding: 14px 28px;
  border: 2px solid var(--nu-white);
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease;
}
.nu-btn-secondary:hover { background: var(--nu-white); color: var(--nu-blue); }

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 50px 40px 44px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--nu-cyan);
  margin-bottom: 16px;
}
.nu-footer-contact {
  font-size: 1rem;
  line-height: 1.9;
}
.nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .nu-header { padding: 50px 20px 80px; min-height: 240px; }
  .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-container { padding: 50px 22px 70px; }
  .page-title { font-size: 1.55rem; }
  .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
  .price-tier .tier-value { font-size: 1.55rem; }
  .cta-row { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
}
@media print {
  body { background: var(--nu-white); }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .info-card, .tactic-card, .summary-card { box-shadow: none; }
  .cta-row { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- CHEVRON TRANSITION -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
  </svg>
</div>

<!-- MAIN CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- PAGE TITLE -->
    <div class="page-title-row">
      <div>
        <div class="page-tag">reMarkable Action Item</div>
        <h1 class="page-title" style="margin-top:14px;">Estate <span>Acquisition Strategy</span></h1>
        <div style="margin-top:6px; color: var(--nu-body-text); font-size: 1.05rem;">
          Negotiate purchase of 7,098 sq ft estate at <strong style="color: var(--nu-dark-text);">4505 Buttewoods</strong>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--nu-blue); text-transform: uppercase; letter-spacing: 0.08em;">Owner / Buyer</div>
        <div style="font-weight: 900; color: var(--nu-dark-text); font-size: 1.05rem; margin-top: 4px;">Aaron C. Norris</div>
        <div style="font-size: 0.85rem; color: var(--nu-body-text);">Founder &amp; CEO, Norris Utilities®</div>
      </div>
    </div>

    <!-- SUMMARY GRID -->
    <div class="summary-grid">
      <div class="summary-card">
        <div class="label">Property</div>
        <div class="value">4505 Buttewoods</div>
        <div class="sub">Single-family estate</div>
      </div>
      <div class="summary-card">
        <div class="label">Living Area</div>
        <div class="value">7,098 sq ft</div>
        <div class="sub">Estate-class residence</div>
      </div>
      <div class="summary-card">
        <div class="label">Status</div>
        <div class="value">Pre-Offer</div>
        <div class="sub">Strategy &amp; valuation phase</div>
      </div>
      <div class="summary-card">
        <div class="label">Action Date</div>
        <div class="value">2026-04-24</div>
        <div class="sub">Captured from reMarkable</div>
      </div>
    </div>

    <!-- OBJECTIVES -->
    <div class="section-block">
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
      <div class="objective-list">
        <div class="nu-badge"><span class="num">1</span>Secure the estate at or below comparable market value</div>
        <div class="nu-badge"><span class="num">2</span>Preserve favorable contingencies for inspection &amp; financing</div>
        <div class="nu-badge"><span class="num">3</span>Close on a timeline that aligns with NU operations cycle</div>
        <div class="nu-badge"><span class="num">4</span>Protect privacy &amp; minimize public-record exposure</div>
      </div>
    </div>

    <!-- PROPERTY + SELLER DETAILS -->
    <div class="section-block two-col">
      <div class="info-card">
        <h3>Property Snapshot</h3>
        <table class="detail-table">
          <tr><th>Address</th><td>4505 Buttewoods</td></tr>
          <tr><th>Living Area</th><td>7,098 sq ft</td></tr>
          <tr><th>Use Class</th><td>Single-family estate</td></tr>
          <tr><th>Strategic Fit</th><td>Primary residence — long-hold</td></tr>
          <tr><th>Source</th><td>reMarkable action item, 2026-04-24</td></tr>
        </table>
      </div>
      <div class="info-card">
        <h3>Pre-Offer Diligence Required</h3>
        <ul>
          <li><span class="key">Title &amp; Survey</span> — confirm legal description, easements, and lot lines</li>
          <li><span class="key">Tax Assessment</span> — pull last 3 years of tax history and millage</li>
          <li><span class="key">Days on Market</span> — verify list date and any prior price reductions</li>
          <li><span class="key">Comparable Sales</span> — pull 5 closed estate-class comps within 5 miles, last 12 months</li>
          <li><span class="key">Seller Motivation</span> — relocation, estate, divorce, or hold capacity</li>
          <li><span class="key">Financing Position</span> — confirm Renasant Bank pre-approval (Patrick Lavette)</li>
        </ul>
      </div>
    </div>

    <!-- PRICE STRATEGY -->
    <div class="section-block">
      <h2 class="nu-section-title"><span class="first">Pricing</span> <span class="rest">Bands</span></h2>
      <p style="color: var(--nu-body-text); margin-bottom: 16px; max-width: 780px;">
        Final figures are seated against verified comparable sales. The bands below define the negotiation envelope — opening offer, target close, and the walk-away ceiling that protects against overpayment on a long-hold residence.
      </p>
      <div class="price-strategy">
        <div class="price-tier opening">
          <div class="tier-label">Opening Offer</div>
          <div class="tier-value">−12% to −15%</div>
          <div class="tier-note">From verified market value (anchor low, leave room to move)</div>
        </div>
        <div class="price-tier target">
          <div class="tier-label">Target Close</div>
          <div class="tier-value">−5% to −8%</div>
          <div class="tier-note">From verified market value with seller-paid concessions</div>
        </div>
        <div class="price-tier walk">
          <div class="tier-label">Walk-Away Ceiling</div>
          <div class="tier-value">Market</div>
          <div class="tier-note">Hard stop — no premium without unique value justification</div>
        </div>
      </div>
    </div>

    <!-- NEGOTIATION TACTICS -->
    <div class="section-block">
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Tactics</span></h2>
      <div class="tactics-grid">
        <div class="tactic-card">
          <div class="icon">A</div>
          <h4>Anchor on Comparables</h4>
          <p>Open every conversation by referencing the closed comp set. Frame the offer as data-driven rather than personal opinion of the property.</p>
        </div>
        <div class="tactic-card">
          <div class="icon">B</div>
          <h4>Cash-Equivalent Strength</h4>
          <p>Lead with proof-of-funds and a Renasant pre-approval letter from Patrick Lavette. Liquidity is the strongest non-price lever in estate deals.</p>
        </div>
        <div class="tactic-card">
          <div class="icon">C</div>
          <h4>Tight, Confident Close</h4>
          <p>Offer a 21-to-30-day close window. Sellers of estate-class homes weigh certainty heavily — a clean timeline can be worth 2–3 percent in price.</p>
        </div>
        <div class="tactic-card">
          <div class="icon">D</div>
          <h4>Strategic Silence</h4>
          <p>After every counter, wait. Do not refill the silence with concessions. The first party to speak after a counter typically loses ground.</p>
        </div>
        <div class="tactic-card">
          <div class="icon">E</div>
          <h4>Concessions Over Price</h4>
          <p>Trade visible price for invisible value: closing costs, post-close possession, included furnishings, repair credits. Protect the headline number.</p>
        </div>
        <div class="tactic-card">
          <div class="icon">F</div>
          <h4>Walk-Away Discipline</h4>
          <p>The ceiling is a ceiling. If counters push past it, pause, document, and revisit in 30 days. Most estate-class properties return to the table.</p>
        </div>
      </div>
    </div>

    <!-- TIMELINE -->
    <div class="section-block">
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-phase">Phase 1 — Week of 2026-04-24</div>
          <div class="timeline-title">Diligence &amp; Valuation</div>
          <div class="timeline-detail">Pull tax history, comparable sales, days-on-market, and prior reductions. Confirm financing readiness with Renasant Bank (Patrick Lavette). Walk the property a second time.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 2 — Week of 2026-05-01</div>
          <div class="timeline-title">Opening Offer Submitted</div>
          <div class="timeline-detail">Written offer at the −12% to −15% band, supported by comparable-sales summary and proof-of-funds. 48-hour acceptance window to set tempo.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 3 — Weeks of 2026-05-08 to 2026-05-15</div>
          <div class="timeline-title">Counter &amp; Negotiation</div>
          <div class="timeline-detail">Trade non-price terms — closing costs, possession date, included items — to protect the headline price. Hold the walk-away ceiling firm.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 4 — Weeks of 2026-05-15 to 2026-06-05</div>
          <div class="timeline-title">Inspection, Appraisal &amp; Underwriting</div>
          <div class="timeline-detail">Order full inspection (structural, mechanical, roof, foundation), appraisal, and clear title. Re-negotiate on material findings only.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 5 — Target close 2026-06-15 to 2026-06-30</div>
          <div class="timeline-title">Closing &amp; Possession</div>
          <div class="timeline-detail">Final walkthrough, settlement statement review, fund &amp; record. Confirm utilities, insurance binder, and homestead filing on day one.</div>
        </div>
      </div>
    </div>

    <!-- CONTINGENCIES -->
    <div class="section-block">
      <h2 class="nu-section-title"><span class="first">Required</span> <span class="rest">Contingencies</span></h2>
      <div class="contingency-list">
        <div class="contingency-item">
          <div class="ct-title">Inspection</div>
          <div class="ct-desc">10-business-day window with right to re-negotiate or terminate on material findings.</div>
        </div>
        <div class="contingency-item">
          <div class="ct-title">Financing</div>
          <div class="ct-desc">21-day financing contingency tied to Renasant pre-approval. Earnest money refundable on lender denial.</div>
        </div>
        <div class="contingency-item">
          <div class="ct-title">Appraisal</div>
          <div class="ct-desc">Right to re-negotiate or walk if appraisal comes in below contract price.</div>
        </div>
        <div class="contingency-item">
          <div class="ct-title">Title &amp; Survey</div>
          <div class="ct-desc">Clear title insurance commitment and current survey free of material encroachments.</div>
        </div>
        <div class="contingency-item">
          <div class="ct-title">Disclosures</div>
          <div class="ct-desc">Full seller disclosures including roof age, prior insurance claims, and any litigation history.</div>
        </div>
        <div class="contingency-item">
          <div class="ct-title">Walk-Through</div>
          <div class="ct-desc">Final walk-through within 48 hours of close to confirm condition matches contract terms.</div>
        </div>
      </div>
    </div>

    <!-- DECISION CRITERIA -->
    <div class="section-block two-col">
      <div class="info-card">
        <h3>Move Forward If…</h3>
        <ul>
          <li>Comparable sales support the target-close band</li>
          <li>Inspection findings are cosmetic, not structural</li>
          <li>Title is clean and survey shows no encroachments</li>
          <li>Financing terms hold firm with Renasant Bank</li>
          <li>Seller accepts requested contingencies in writing</li>
          <li>Long-hold thesis remains intact for the address</li>
        </ul>
      </div>
      <div class="info-card">
        <h3>Walk Away If…</h3>
        <ul>
          <li>Counter-offers push past the walk-away ceiling</li>
          <li>Inspection reveals structural, foundation, or major water issues</li>
          <li>Title carries unresolved liens or boundary disputes</li>
          <li>Appraisal underperforms by more than 5% with no seller credit</li>
          <li>Seller refuses standard inspection or financing contingencies</li>
          <li>Disclosures reveal undisclosed material defects</li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-row">
      <div class="cta-text">
        <h3>Ready to Open Negotiations</h3>
        <p>Lock in diligence the week of 2026-04-24 and prepare a written opening offer for the week of 2026-05-01.</p>
      </div>
      <div class="cta-actions">
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Acquisition%20Strategy" class="nu-btn-secondary">Email Strategy</a>
      </div>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    <strong>Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>