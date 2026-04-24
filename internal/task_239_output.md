<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estate Acquisition Action Plan — 4505 Buttewoods — Norris Utilities®</title>
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
  background: var(--nu-white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* HEADER */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
  opacity: 0.7;
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
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
}
.nu-logo-text {
  font-weight: 900;
  font-size: 3rem;
  color: var(--nu-white);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 2px;
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
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  letter-spacing: 0.04em;
}
.nu-doc-type {
  display: inline-block;
  margin-top: 18px;
  padding: 6px 18px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  color: var(--nu-white);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 2px;
  backdrop-filter: blur(4px);
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
  top: 180px; left: 50%;
  transform: translateX(-50%);
  width: 65%; max-width: 700px;
  padding-bottom: 65%;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }
.nu-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* INTRO BLOCK */
.nu-intro {
  text-align: center;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--nu-medium-gray);
  margin-bottom: 50px;
}
.nu-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 16px;
}
.nu-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.2;
  margin-bottom: 14px;
}
.nu-title span { color: var(--nu-blue); }
.nu-subtitle {
  font-size: 1.1rem;
  color: var(--nu-body-text);
  max-width: 720px;
  margin: 0 auto;
  font-weight: 400;
}
.nu-meta-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
  font-size: 0.85rem;
  color: #666;
}
.nu-meta-row span strong { color: var(--nu-dark-text); font-weight: 700; }

/* SECTION HEADERS */
.nu-section { margin-bottom: 56px; }
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: var(--nu-dark-text);
}
.nu-section-title::first-letter,
.nu-section-title .lead { color: var(--nu-blue); }
.nu-section-rule {
  width: 60px;
  height: 3px;
  background: var(--nu-cyan);
  margin-bottom: 24px;
}

/* PROPERTY SNAPSHOT GRID */
.nu-snapshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
.nu-snapshot-cell {
  background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-blue);
  padding: 22px 20px;
  border-radius: 4px;
}
.nu-snapshot-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 6px;
}
.nu-snapshot-value {
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.2;
}
.nu-snapshot-sub {
  font-size: 0.8rem;
  color: var(--nu-body-text);
  margin-top: 4px;
}

/* NEGOTIATION PHASES — CHEVRON BADGES */
.nu-phase {
  display: flex;
  align-items: stretch;
  margin-bottom: 14px;
  gap: 0;
}
.nu-phase-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 20px 28px 20px 20px;
  min-width: 160px;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  flex-shrink: 0;
}
.nu-phase-badge .num {
  color: var(--nu-cyan);
  font-size: 1.6rem;
  margin-right: 10px;
  font-weight: 900;
}
.nu-phase-body {
  flex: 1;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: none;
  padding: 18px 24px;
  border-radius: 0 4px 4px 0;
}
.nu-phase-body h4 {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.nu-phase-body p {
  font-size: 0.92rem;
  color: var(--nu-body-text);
  margin-bottom: 8px;
}
.nu-phase-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nu-phase-body ul li {
  font-size: 0.9rem;
  color: var(--nu-body-text);
  padding-left: 18px;
  position: relative;
  margin-bottom: 4px;
}
.nu-phase-body ul li::before {
  content: '•';
  color: var(--nu-blue);
  font-weight: 900;
  position: absolute;
  left: 0;
  top: 0;
}

/* TWO-COLUMN STRATEGY */
.nu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.nu-col-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  padding: 28px;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.nu-col-card.leverage { border-top-color: var(--nu-blue); }
.nu-col-card.risk { border-top-color: var(--nu-accent-gold); }
.nu-col-card h3 {
  font-weight: 900;
  font-size: 1.15rem;
  margin-bottom: 14px;
  color: var(--nu-dark-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.nu-col-card ul {
  list-style: none;
  padding: 0;
}
.nu-col-card ul li {
  padding: 10px 0 10px 28px;
  position: relative;
  border-bottom: 1px solid var(--nu-light-gray);
  font-size: 0.93rem;
}
.nu-col-card ul li:last-child { border-bottom: none; }
.nu-col-card.leverage ul li::before {
  content: '▲';
  color: var(--nu-blue);
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 0.8rem;
}
.nu-col-card.risk ul li::before {
  content: '⚑';
  color: var(--nu-accent-gold);
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 0.95rem;
}

/* PRICING BLOCK */
.nu-pricing-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border-radius: 6px;
  overflow: hidden;
}
.nu-pricing-table thead {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
}
.nu-pricing-table th {
  padding: 14px 18px;
  text-align: left;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nu-pricing-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
}
.nu-pricing-table tr:last-child td { border-bottom: none; }
.nu-pricing-table tr.target { background: rgba(6,208,255,0.08); font-weight: 700; }
.nu-pricing-table tr.target td:first-child { color: var(--nu-blue); }
.nu-pricing-table td.num { text-align: right; font-variant-numeric: tabular-nums; }

/* TIMELINE */
.nu-timeline {
  position: relative;
  padding-left: 32px;
}
.nu-timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
}
.nu-timeline-item {
  position: relative;
  margin-bottom: 26px;
}
.nu-timeline-item::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 4px;
  width: 14px;
  height: 14px;
  background: var(--nu-white);
  border: 3px solid var(--nu-blue);
  border-radius: 50%;
}
.nu-timeline-date {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 4px;
}
.nu-timeline-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 4px;
}
.nu-timeline-desc {
  font-size: 0.92rem;
  color: var(--nu-body-text);
}

/* DECISION BOX */
.nu-decision {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: var(--nu-white);
  padding: 36px 40px;
  border-radius: 6px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}
.nu-decision::before {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 60%; height: 200%;
  background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
}
.nu-decision * { position: relative; z-index: 1; }
.nu-decision h3 {
  font-weight: 900;
  font-size: 1.3rem;
  margin-bottom: 14px;
  color: var(--nu-cyan);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.nu-decision p {
  font-size: 1rem;
  margin-bottom: 14px;
  line-height: 1.7;
  color: rgba(255,255,255,0.9);
}
.nu-decision-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.nu-decision-option {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(6,208,255,0.3);
  padding: 18px;
  border-radius: 4px;
}
.nu-decision-option strong {
  display: block;
  color: var(--nu-cyan);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* NEXT ACTIONS */
.nu-actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.nu-action {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  padding: 22px;
  border-radius: 4px;
  border-left: 4px solid var(--nu-cyan);
}
.nu-action-num {
  display: inline-block;
  background: var(--nu-blue);
  color: var(--nu-white);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  line-height: 28px;
  font-weight: 900;
  font-size: 0.85rem;
  margin-bottom: 10px;
}
.nu-action h5 {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.nu-action p {
  font-size: 0.88rem;
  color: var(--nu-body-text);
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 48px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.8;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-rule {
  width: 80px;
  height: 2px;
  background: var(--nu-cyan);
  margin: 20px auto;
  opacity: 0.5;
}
.nu-footer-fine {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  margin-top: 16px;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-title { font-size: 1.7rem; }
  .nu-container { padding: 40px 20px; }
  .nu-phase { flex-direction: column; }
  .nu-phase-badge { clip-path: none; border-radius: 4px 4px 0 0; min-width: 0; padding: 14px 20px; }
  .nu-phase-body { border-left: 1px solid var(--nu-medium-gray); border-radius: 0 0 4px 4px; }
  .nu-two-col { grid-template-columns: 1fr; }
  .nu-decision { padding: 24px 22px; }
}

@media print {
  .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-col-card, .nu-action, .nu-snapshot-cell { box-shadow: none; border: 1px solid #ccc; }
}
</style>
</head>
<body>

<!-- HEADER -->
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
  <div class="nu-doc-type">Action Plan · Confidential</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-container">

    <!-- INTRO -->
    <section class="nu-intro">
      <div class="nu-eyebrow">reMarkable Action Item · Real Estate</div>
      <h1 class="nu-title">Negotiate Purchase of the <span>7,098 sq ft Estate</span> at 4505 Buttewoods</h1>
      <p class="nu-subtitle">A disciplined negotiation framework to secure the Buttewoods estate at the lowest justified price, on terms that preserve capital flexibility for Norris Utilities® operations.</p>
      <div class="nu-meta-row">
        <span><strong>Owner / Principal:</strong> Aaron C. Norris</span>
        <span><strong>Opened:</strong> 2026-04-24</span>
        <span><strong>Status:</strong> Negotiation — Prep Phase</span>
      </div>
    </section>

    <!-- PROPERTY SNAPSHOT -->
    <section class="nu-section">
      <h2 class="nu-section-title">Property <span class="lead">Snapshot</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-snapshot-grid">
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Address</div>
          <div class="nu-snapshot-value">4505 Buttewoods</div>
          <div class="nu-snapshot-sub">Primary subject property</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Heated Area</div>
          <div class="nu-snapshot-value">7,098 sq ft</div>
          <div class="nu-snapshot-sub">Estate-class main residence</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Use Case</div>
          <div class="nu-snapshot-value">Personal Residence</div>
          <div class="nu-snapshot-sub">Not a business asset</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Funding Source</div>
          <div class="nu-snapshot-value">Personal Capital</div>
          <div class="nu-snapshot-sub">Separate from Norris Utilities® balance sheet</div>
        </div>
      </div>
    </section>

    <!-- PRE-NEGOTIATION DUE DILIGENCE -->
    <section class="nu-section">
      <h2 class="nu-section-title">Pre-Negotiation <span class="lead">Due Diligence</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-phase">
        <div class="nu-phase-badge"><span class="num">1</span>Comps</div>
        <div class="nu-phase-body">
          <h4>Pull and document three tiers of comparables</h4>
          <p>Establish a defensible price band before a single number is spoken.</p>
          <ul>
            <li>Sold comps — last 6 months, 5,500–8,500 sq ft, within 2 miles</li>
            <li>Active listings — same band, note days-on-market and price drops</li>
            <li>Expired / withdrawn listings — signals the market's ceiling</li>
          </ul>
        </div>
      </div>

      <div class="nu-phase">
        <div class="nu-phase-badge"><span class="num">2</span>Seller Motive</div>
        <div class="nu-phase-body">
          <h4>Identify why the seller is selling — and how fast</h4>
          <p>Motive drives flexibility. The more we understand, the sharper our offer.</p>
          <ul>
            <li>Listing history — has it been relisted, price cut, pulled and returned?</li>
            <li>Occupancy — owner-occupied, vacant, or tenanted?</li>
            <li>Life events — divorce, relocation, estate, job change</li>
            <li>Carrying cost — taxes, HOA, insurance, mortgage service</li>
          </ul>
        </div>
      </div>

      <div class="nu-phase">
        <div class="nu-phase-badge"><span class="num">3</span>Condition</div>
        <div class="nu-phase-body">
          <h4>Inventory every item that becomes a price lever</h4>
          <p>Walk the property with a contractor's eye and a buyer's checklist.</p>
          <ul>
            <li>Roof age, HVAC units, water heaters, major appliances</li>
            <li>Foundation, moisture, drainage, grading</li>
            <li>Electrical panel capacity, plumbing material, septic or sewer</li>
            <li>Cosmetic vs. structural — separate the two on paper</li>
          </ul>
        </div>
      </div>

      <div class="nu-phase">
        <div class="nu-phase-badge"><span class="num">4</span>Financials</div>
        <div class="nu-phase-body">
          <h4>Line up financing and proof of funds before the first offer</h4>
          <p>A clean, pre-underwritten buyer is worth real dollars at the table.</p>
          <ul>
            <li>Pre-approval letter from Renasant Bank (Patrick Lavette) on file</li>
            <li>Proof-of-funds letter for cash-equivalent portion of offer</li>
            <li>Rate-lock window aligned to anticipated close</li>
            <li>Confirm personal-capital funding is fully ring-fenced from Norris Utilities® working capital</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- LEVERAGE vs RISK -->
    <section class="nu-section">
      <h2 class="nu-section-title">Leverage <span class="lead">and Risk</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-two-col">
        <div class="nu-col-card leverage">
          <h3>Our Leverage</h3>
          <ul>
            <li>Qualified buyer with clean financing and ready capital</li>
            <li>No sale-contingency — we are not waiting on another closing</li>
            <li>Flexible close date — we can match the seller's timeline</li>
            <li>As-is willingness for cosmetic items, discounted against price</li>
            <li>Short, professional contingency list — inspection, appraisal, clear title</li>
            <li>Strong local reputation — brokers know the name closes</li>
          </ul>
        </div>
        <div class="nu-col-card risk">
          <h3>Risks to Manage</h3>
          <ul>
            <li>Estate-class properties have thin comps — appraisal risk is real</li>
            <li>Emotional attachment from sellers who built or renovated the home</li>
            <li>Deferred maintenance on a 7,098 sq ft footprint scales fast</li>
            <li>Property tax reassessment after close can shift monthly carry</li>
            <li>Insurance availability for high-value estate — confirm early</li>
            <li>Opportunity cost — capital tied up vs. deployed into growth of Norris Utilities®</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PRICE LADDER -->
    <section class="nu-section">
      <h2 class="nu-section-title">Offer <span class="lead">Ladder</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:20px; color:var(--nu-body-text); font-size:0.95rem;">Rather than anchor to the list price, we build a ladder from independent value. Final numbers are filled after the comps and inspection phases are complete — the ladder itself is the discipline.</p>
      <table class="nu-pricing-table">
        <thead>
          <tr>
            <th>Rung</th>
            <th>Basis</th>
            <th>Purpose</th>
            <th class="num">Posture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Walk-Away</strong></td>
            <td>Appraised value minus all repair credits, minus risk buffer</td>
            <td>The number above which we walk, no regrets</td>
            <td class="num">Hard Ceiling</td>
          </tr>
          <tr class="target">
            <td><strong>Target</strong></td>
            <td>Sold-comp median adjusted for condition and lot</td>
            <td>Price we expect to close at after two rounds</td>
            <td class="num">Planned Close</td>
          </tr>
          <tr>
            <td><strong>Opening Offer</strong></td>
            <td>Target minus negotiation room — defensible, not insulting</td>
            <td>First written offer, backed by the comp packet</td>
            <td class="num">First Move</td>
          </tr>
          <tr>
            <td><strong>Probe</strong></td>
            <td>Conversational, pre-offer question to listing agent</td>
            <td>"What would a serious cash-strong offer look like?"</td>
            <td class="num">Intel Only</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- TERMS STRATEGY -->
    <section class="nu-section">
      <h2 class="nu-section-title">Terms <span class="lead">Strategy</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-actions-grid">
        <div class="nu-action">
          <div class="nu-action-num">A</div>
          <h5>Inspection Window</h5>
          <p>10 business days, right to terminate or renegotiate for any material finding. Non-negotiable.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">B</div>
          <h5>Appraisal Contingency</h5>
          <p>Hold the appraisal contingency. Estate-class valuations are thin — this is our insurance.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">C</div>
          <h5>Earnest Money</h5>
          <p>Meaningful but protected — 1% on signing, balance at inspection clearance.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">D</div>
          <h5>Close Date</h5>
          <p>Offered as a seller-choice concession. Flexibility here often saves more than five-figure price cuts.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">E</div>
          <h5>Possession</h5>
          <p>Possession at close. No rent-back beyond 3 days without written agreement and per-diem rate.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">F</div>
          <h5>Personal Property</h5>
          <p>Any conveying items listed explicitly on addendum — lighting, appliances, outdoor equipment.</p>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title">Negotiation <span class="lead">Timeline</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 1 · Prep</div>
          <div class="nu-timeline-title">Due diligence packet assembled</div>
          <div class="nu-timeline-desc">Comps pulled, seller motive assessed, pre-approval and proof-of-funds letters in hand. Nothing sent to the other side yet.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 2 · Probe</div>
          <div class="nu-timeline-title">Listing agent intake call</div>
          <div class="nu-timeline-desc">Introductory conversation — surface seller timeline, flexibility, and pain points without disclosing our ceiling.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 2–3 · Walk</div>
          <div class="nu-timeline-title">Private walkthrough with contractor</div>
          <div class="nu-timeline-desc">Document condition with photos and a written punch list. Condition findings become price-adjustment evidence.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 3 · Offer</div>
          <div class="nu-timeline-title">Opening offer submitted in writing</div>
          <div class="nu-timeline-desc">Clean contract, tight contingencies, short response window (48–72 hours). Comp packet attached as support.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 3–4 · Counter</div>
          <div class="nu-timeline-title">Counter-offer management</div>
          <div class="nu-timeline-desc">Two planned counter rounds. Concede on terms (close date, possession) before conceding on price.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 4 · Under Contract</div>
          <div class="nu-timeline-title">Executed contract · inspection period opens</div>
          <div class="nu-timeline-desc">Order formal inspection, appraisal, title, and survey. Renegotiate off inspection report findings if material.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Week 8–10 · Close</div>
          <div class="nu-timeline-title">Close and record</div>
          <div class="nu-timeline-desc">Funds wired from the ring-fenced personal account. Keys and possession transferred. Insurance active at 12:01 AM on close date.</div>
        </div>
      </div>
    </section>

    <!-- DECISION FRAME -->
    <section class="nu-section">
      <h2 class="nu-section-title">Aaron's <span class="lead">Decision Frame</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-decision">
        <h3>Three Clean Exits</h3>
        <p>Before we negotiate, we pre-commit to the three outcomes we accept. This is the discipline that keeps emotion out of the room.</p>
        <div class="nu-decision-options">
          <div class="nu-decision-option">
            <strong>Outcome 1 — Win</strong>
            Close at or below Target price, with our terms intact. Move forward.
          </div>
          <div class="nu-decision-option">
            <strong>Outcome 2 — Draw</strong>
            Close between Target and Walk-Away on their terms with measurable concessions. Acceptable if the property still pencils out.
          </div>
          <div class="nu-decision-option">
            <strong>Outcome 3 — Walk</strong>
            Above Walk-Away, or seller refuses reasonable inspection findings. Walk, thank the listing agent, keep the relationship warm for a possible re-approach.
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT ACTIONS -->
    <section class="nu-section">
      <h2 class="nu-section-title">Next <span class="lead">Actions</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-actions-grid">
        <div class="nu-action">
          <div class="nu-action-num">1</div>
          <h5>Order the comp packet</h5>
          <p>Request sold, active, and expired comparables within 2 miles, 5,500–8,500 sq ft, last 6 months.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">2</div>
          <h5>Call Patrick Lavette — Renasant Bank</h5>
          <p>Confirm pre-approval terms and rate-lock window. Request a second proof-of-funds letter for cash-equivalent portion.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">3</div>
          <h5>Schedule private walkthrough</h5>
          <p>Bring a trusted contractor. Photograph every room, mechanical, and exterior elevation.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">4</div>
          <h5>Draft probe-call script</h5>
          <p>Short talking points for the listing agent intake. Ask, don't tell. Listen for timeline and flexibility.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">5</div>
          <h5>Lock the Walk-Away number</h5>
          <p>Write it down. Put it in the palace. Do not discuss it outside of the decision frame above.</p>
        </div>
        <div class="nu-action">
          <div class="nu-action-num">6</div>
          <h5>Ring-fence personal capital</h5>
          <p>Confirm the down-payment and reserves are in a personal account fully separate from Norris Utilities® operating funds.</p>
        </div>
      </div>
    </section>

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
  <div class="nu-footer-rule"></div>
  <div class="nu-footer-fine">Confidential — Internal Negotiation Plan · Prepared 2026-04-24</div>
</footer>

</body>
</html>