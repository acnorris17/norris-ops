<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
  --nu-success: #0E7C3A;
  --nu-warn: #B8860B;
  --nu-danger: #B22222;
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

/* ══ HEADER ══ */
.nu-header {
  position: relative;
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
  z-index: 1;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: -30%; right: -20%;
  width: 70%; height: 160%;
  background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
  z-index: 1;
}
.nu-header > * { position: relative; z-index: 2; }

.nu-phoenix-watermark {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  max-width: 600px;
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
  margin-bottom: 22px;
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
  margin-top: 28px;
  display: inline-block;
  padding: 8px 22px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 3px;
  color: var(--nu-white);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* ══ CHEVRON ══ */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
}
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* ══ CONTENT AREA ══ */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  padding: 10px 0 60px;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 200px; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 50px 40px;
  position: relative;
  z-index: 1;
}

/* ══ TITLE BLOCK ══ */
.brief-title-block {
  border-bottom: 3px solid var(--nu-blue);
  padding-bottom: 24px;
  margin-bottom: 40px;
}
.brief-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 10px;
}
.brief-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 10px;
}
.brief-title span.accent { color: var(--nu-blue); }
.brief-subtitle {
  font-size: 1.05rem;
  color: var(--nu-body-text);
  font-weight: 400;
}
.brief-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 18px;
  font-size: 0.88rem;
  color: var(--nu-body-text);
}
.brief-meta div strong {
  color: var(--nu-dark-text);
  font-weight: 700;
  margin-right: 6px;
}

/* ══ SECTION TITLE ══ */
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin-bottom: 18px;
  letter-spacing: 0.01em;
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* ══ SECTIONS ══ */
section { margin-bottom: 44px; }

/* ══ FACTS GRID ══ */
.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}
.fact-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-cyan);
  border-radius: 6px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.fact-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nu-blue);
  margin-bottom: 6px;
}
.fact-value {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.25;
}
.fact-sub {
  font-size: 0.82rem;
  color: var(--nu-body-text);
  margin-top: 4px;
}

/* ══ CHEVRON BADGE ══ */
.nu-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
  color: var(--nu-white);
  padding: 14px 28px 14px 18px;
  margin-bottom: 14px;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.02em;
}
.nu-badge-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  background: var(--nu-cyan);
  color: var(--nu-navy);
  border-radius: 50%;
  font-weight: 900;
  font-size: 0.85rem;
  margin-right: 14px;
  flex-shrink: 0;
}

/* ══ NEGOTIATION TABLE ══ */
.nego-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--nu-white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 18px;
}
.nego-table thead {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
}
.nego-table th {
  padding: 14px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nego-table td {
  padding: 14px 16px;
  border-top: 1px solid var(--nu-medium-gray);
  font-size: 0.95rem;
  vertical-align: top;
}
.nego-table tr:nth-child(even) td { background: var(--nu-light-gray); }
.nego-table .row-label {
  font-weight: 700;
  color: var(--nu-dark-text);
  width: 30%;
}
.price-hi { color: var(--nu-danger); font-weight: 900; }
.price-mid { color: var(--nu-dark-text); font-weight: 900; }
.price-lo { color: var(--nu-success); font-weight: 900; }

/* ══ TIER CARDS ══ */
.tier-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 16px;
}
.tier-card {
  border-radius: 8px;
  padding: 24px 22px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--nu-medium-gray);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  background: var(--nu-white);
}
.tier-card.walk { border-top: 5px solid var(--nu-danger); }
.tier-card.target { border-top: 5px solid var(--nu-blue); background: linear-gradient(180deg, rgba(0,0,255,0.02) 0%, var(--nu-white) 100%); }
.tier-card.stretch { border-top: 5px solid var(--nu-success); }
.tier-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.tier-card.walk .tier-label { color: var(--nu-danger); }
.tier-card.target .tier-label { color: var(--nu-blue); }
.tier-card.stretch .tier-label { color: var(--nu-success); }
.tier-price {
  font-size: 2rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.1;
  margin-bottom: 6px;
}
.tier-ppsf {
  font-size: 0.85rem;
  color: var(--nu-body-text);
  margin-bottom: 14px;
}
.tier-notes {
  font-size: 0.88rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}
.tier-notes strong { color: var(--nu-dark-text); }

/* ══ CHECKLIST ══ */
.checklist {
  list-style: none;
  padding: 0;
}
.checklist li {
  display: flex;
  align-items: flex-start;
  padding: 12px 14px;
  background: var(--nu-light-gray);
  border-left: 3px solid var(--nu-cyan);
  margin-bottom: 8px;
  border-radius: 0 4px 4px 0;
  font-size: 0.95rem;
}
.checklist li::before {
  content: '☐';
  color: var(--nu-blue);
  font-size: 1.3rem;
  font-weight: 900;
  margin-right: 12px;
  line-height: 1.2;
  flex-shrink: 0;
}
.checklist li strong { color: var(--nu-dark-text); margin-right: 4px; }

/* ══ CALLOUT ══ */
.callout {
  background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
  border-left: 5px solid var(--nu-blue);
  padding: 20px 24px;
  border-radius: 0 6px 6px 0;
  margin: 20px 0;
}
.callout.warn {
  background: linear-gradient(135deg, rgba(184,134,11,0.06) 0%, rgba(201,168,76,0.08) 100%);
  border-left-color: var(--nu-warn);
}
.callout-title {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.callout.warn .callout-title { color: var(--nu-warn); }
.callout p { font-size: 0.95rem; }
.callout p + p { margin-top: 10px; }

/* ══ TWO COL ══ */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}
.col-panel {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  padding: 22px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.col-panel h3 {
  font-size: 0.95rem;
  font-weight: 900;
  color: var(--nu-blue);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--nu-cyan);
}
.col-panel ul {
  list-style: none;
  padding: 0;
}
.col-panel li {
  padding: 6px 0;
  font-size: 0.92rem;
  display: flex;
  align-items: flex-start;
}
.col-panel li::before {
  content: '•';
  color: var(--nu-blue);
  font-weight: 900;
  margin-right: 10px;
  font-size: 1.2rem;
  line-height: 1;
}

/* ══ SCRIPT BLOCK ══ */
.script-block {
  background: var(--nu-navy);
  color: rgba(255,255,255,0.92);
  padding: 28px 32px;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.75;
}
.script-block em {
  color: var(--nu-cyan);
  font-style: normal;
  font-weight: 700;
}
.script-block .script-label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--nu-cyan);
  font-weight: 700;
  margin-bottom: 6px;
  margin-top: 16px;
}
.script-block .script-label:first-child { margin-top: 0; }

/* ══ FOOTER ══ */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 48px 40px;
  text-align: center;
}
.nu-footer-tagline {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--nu-cyan);
  margin-bottom: 16px;
  letter-spacing: 0.03em;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.85;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-legal {
  margin-top: 18px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 16px;
}

/* ══ RESPONSIVE ══ */
@media (max-width: 900px) {
  .tier-row { grid-template-columns: 1fr; }
  .two-col { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 220px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
  .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1.05rem; }
  .nu-container { padding: 32px 20px; }
  .brief-title { font-size: 1.75rem; }
  .nu-badge { clip-path: none; border-radius: 6px; }
  .nego-table th, .nego-table td { padding: 10px 12px; font-size: 0.85rem; }
  .nu-footer-contact { font-size: 0.88rem; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  section { page-break-inside: avoid; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
    <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
  </svg>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-label">Acquisition Brief — Confidential</div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- TITLE -->
    <div class="brief-title-block">
      <div class="brief-eyebrow">Personal Acquisition — Negotiation Brief</div>
      <h1 class="brief-title">4505 Buttewoods — <span class="accent">7,098 sq ft Estate</span></h1>
      <div class="brief-subtitle">Purchase negotiation playbook: target price, leverage points, walk-away terms, and a step-by-step plan to close on favorable terms.</div>
      <div class="brief-meta">
        <div><strong>Source:</strong> reMarkable action item</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Prepared:</strong> 2026-04-22</div>
        <div><strong>Status:</strong> Negotiation Prep — Pre-Offer</div>
      </div>
    </div>

    <!-- FAST FACTS -->
    <section>
      <h2 class="nu-section-title">Property <span>Fast Facts</span></h2>
      <div class="facts-grid">
        <div class="fact-card">
          <div class="fact-label">Address</div>
          <div class="fact-value">4505 Buttewoods</div>
          <div class="fact-sub">Subject property</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Size</div>
          <div class="fact-value">7,098 sq ft</div>
          <div class="fact-sub">Heated / living area</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Type</div>
          <div class="fact-value">Estate Residence</div>
          <div class="fact-sub">Negotiated private purchase</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Action</div>
          <div class="fact-value">Negotiate Purchase</div>
          <div class="fact-sub">Owner-to-buyer direct</div>
        </div>
      </div>
      <div class="callout warn">
        <div class="callout-title">Data Confirmation Required — Before Offer</div>
        <p>Confirm the following before submitting any written offer: <strong>current tax assessed value, days on market, listing price history, seller carry costs (mortgage, taxes, HOA), and title condition.</strong> Negotiation strategy adjusts materially once these five figures are locked. Aaron to provide confirmed listing price — playbook below scales to any anchor.</p>
      </div>
    </section>

    <!-- OBJECTIVE -->
    <section>
      <h2 class="nu-section-title">Negotiation <span>Objective</span></h2>
      <div class="callout">
        <div class="callout-title">The Ask</div>
        <p>Acquire 4505 Buttewoods at a price and on terms that protect Norris Utilities® cash flow, preserve borrowing capacity for business growth (FlexPro Armor inventory, Skylift units, Bay Shore Systems rep territory), and leave margin for improvements. <strong>This is a personal acquisition — business capital is not at risk, but business borrowing capacity is.</strong></p>
        <p><strong>Primary goal:</strong> Close at 88–92% of listing price, with seller concessions covering inspection-found repairs and a portion of closing costs.</p>
        <p><strong>Secondary goal:</strong> If the property has been on market &gt; 60 days or has had a price reduction, push toward 85% of current ask or a seller-carry component.</p>
      </div>
    </section>

    <!-- THREE TIER PRICING -->
    <section>
      <h2 class="nu-section-title">Three-Tier <span>Price Discipline</span></h2>
      <p style="margin-bottom:10px;">Set these numbers <em>before</em> the first conversation. Do not negotiate against yourself — every counter moves only between Walk and Stretch, never above.</p>
      <div class="tier-row">
        <div class="tier-card walk">
          <div class="tier-label">Walk-Away</div>
          <div class="tier-price">92% of Ask</div>
          <div class="tier-ppsf">Absolute ceiling. Above this = walk.</div>
          <div class="tier-notes">
            <strong>Rule:</strong> If seller won't come below this, the deal is dead — no exceptions. <strong>Triggered by:</strong> competing offer, inspection concessions rejected, appraisal gap &gt; 3%. Walk, wait 14 days, re-approach.
          </div>
        </div>
        <div class="tier-card target">
          <div class="tier-label">Target (Realistic)</div>
          <div class="tier-price">88–90%</div>
          <div class="tier-ppsf">Landing zone for a clean, confident offer.</div>
          <div class="tier-notes">
            <strong>Rule:</strong> Open here with justification (comps, condition, carrying-cost math). <strong>Structure:</strong> 20% down, conventional financing, 30-day close, seller covers $8,000–$12,000 in closing costs or inspection repairs.
          </div>
        </div>
        <div class="tier-card stretch">
          <div class="tier-label">Stretch (Best Case)</div>
          <div class="tier-price">82–85%</div>
          <div class="tier-ppsf">Only if conditions align in our favor.</div>
          <div class="tier-notes">
            <strong>Rule:</strong> Deploy opening offer here <em>only</em> when seller has leverage loss: &gt;90 DOM, prior price cut, vacant, expired listing, or cash-equivalent close. <strong>Premium:</strong> cash or &lt;14-day close can buy another 2–3%.
          </div>
        </div>
      </div>
    </section>

    <!-- LEVERAGE -->
    <section>
      <h2 class="nu-section-title">Leverage <span>Inventory</span></h2>
      <p style="margin-bottom:16px;">Every negotiation is a sum of leverage points. Catalog them, then use only as many as needed.</p>

      <div class="nu-badge"><span class="nu-badge-num">1</span> Cash or Near-Cash Position (20%+ Down)</div>
      <div class="nu-badge"><span class="nu-badge-num">2</span> Flexible Close Date — 14 to 45 Days</div>
      <div class="nu-badge"><span class="nu-badge-num">3</span> No Home-Sale Contingency</div>
      <div class="nu-badge"><span class="nu-badge-num">4</span> Clean Inspection Posture — Major Items Only</div>
      <div class="nu-badge"><span class="nu-badge-num">5</span> Pre-Approval Letter in Hand Before First Offer</div>
      <div class="nu-badge"><span class="nu-badge-num">6</span> Willingness to Walk — Demonstrated, Not Stated</div>

      <div class="two-col" style="margin-top:24px;">
        <div class="col-panel">
          <h3>Our Strengths</h3>
          <ul>
            <li>Established business with documented income history (Norris Utilities®, LLC — founded Nov 2021)</li>
            <li>Strong banking relationship — Patrick Lavette at Renasant Bank</li>
            <li>No contingent sale required</li>
            <li>Ability to close quickly if terms align</li>
            <li>Patience — can wait 30–90 days for the right deal</li>
          </ul>
        </div>
        <div class="col-panel">
          <h3>Seller's Likely Pressures</h3>
          <ul>
            <li>Carry cost per month: taxes + insurance + maintenance on a 7,098 sq ft estate</li>
            <li>Vacancy risk if unoccupied</li>
            <li>Market-season timing — estates sell better in spring/early summer</li>
            <li>Appraisal risk for the next buyer if we walk</li>
            <li>Commission exposure if expired and re-listed</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- COMPS -->
    <section>
      <h2 class="nu-section-title">Comparable <span>Sales Framework</span></h2>
      <p style="margin-bottom:12px;">Pull 5 comparable sales from the last 12 months. Use this table to structure the comp analysis — fill in once confirmed.</p>
      <table class="nego-table">
        <thead>
          <tr>
            <th>Criterion</th>
            <th>Subject Property</th>
            <th>Target Comp Range</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="row-label">Living area</td>
            <td>7,098 sq ft</td>
            <td>6,500–7,700 sq ft</td>
            <td>Adjust ±$150/sq ft for delta</td>
          </tr>
          <tr>
            <td class="row-label">Lot size</td>
            <td>Aaron to confirm</td>
            <td>Within ±25%</td>
            <td>Adjust +$5k–$25k for acreage</td>
          </tr>
          <tr>
            <td class="row-label">Age / year built</td>
            <td>Aaron to confirm</td>
            <td>Within ±10 years</td>
            <td>Condition trumps age — weight accordingly</td>
          </tr>
          <tr>
            <td class="row-label">Days on market</td>
            <td>Aaron to confirm</td>
            <td>&lt; 90 days preferred</td>
            <td>If subject &gt; 60 DOM, leverage increases</td>
          </tr>
          <tr>
            <td class="row-label">Sale vs. list ratio</td>
            <td>To be determined</td>
            <td>88–95% typical</td>
            <td>Anchor opening offer at lower end of this band</td>
          </tr>
          <tr>
            <td class="row-label">Price per sq ft</td>
            <td>Target derived</td>
            <td>Weighted average of comps</td>
            <td>Multiply adjusted $/sq ft × 7,098</td>
          </tr>
        </tbody>
      </table>
      <div class="callout">
        <div class="callout-title">Comp Math Rule</div>
        <p>Target offer = <strong>(median adjusted $/sq ft of 3 closest comps) × 7,098 × 0.92</strong>. The 0.92 factor accounts for negotiation room and the reality that list prices run ~5–8% above final sale on estate properties.</p>
      </div>
    </section>

    <!-- STEP BY STEP -->
    <section>
      <h2 class="nu-section-title">Step-by-Step <span>Negotiation Plan</span></h2>

      <div class="nu-badge"><span class="nu-badge-num">1</span> Pre-Offer Reconnaissance — Days 1–5</div>
      <ul class="checklist" style="margin-left:0;">
        <li><strong>Pull listing history:</strong> original list price, all reductions, days on market, previous listings (expired/withdrawn).</li>
        <li><strong>Order tax record:</strong> assessed value, annual tax bill, any liens. County recorder is free.</li>
        <li><strong>Run 5 comparable sales:</strong> same subdivision or within 3 miles, last 12 months, ±15% square footage.</li>
        <li><strong>Drive by twice:</strong> once weekday, once weekend. Note occupancy clues, condition, neighbor properties.</li>
        <li><strong>Get pre-approval letter:</strong> call Patrick Lavette at Renasant Bank — documented buyer strength is leverage.</li>
      </ul>

      <div class="nu-badge"><span class="nu-badge-num">2</span> First Conversation with Listing Agent — Day 6</div>
      <ul class="checklist">
        <li><strong>Ask open questions:</strong> "How long has the seller owned it? What's motivating the move? Are they considering offers below list?"</li>
        <li><strong>Listen for motivation signals:</strong> job relocation, downsizing, estate sale, financial pressure, divorce. Each shifts leverage.</li>
        <li><strong>Don't reveal top price:</strong> "We're working through comps — want to make sure any offer we bring is one the seller can take seriously."</li>
        <li><strong>Request disclosures:</strong> seller property disclosure, any prior inspections, HOA docs, survey, utility history.</li>
      </ul>

      <div class="nu-badge"><span class="nu-badge-num">3</span> First Written Offer — Day 10–14</div>
      <ul class="checklist">
        <li><strong>Open at Stretch tier (82–85%)</strong> if leverage is strong (&gt;60 DOM, prior reduction, vacant). Otherwise open at low Target (87%).</li>
        <li><strong>Include a cover letter:</strong> personal tone, confident buyer, funds documented, close-date flexibility. No sob stories — factual strength.</li>
        <li><strong>Set response deadline:</strong> 48–72 hours. Creates urgency, protects against shopping the offer.</li>
        <li><strong>Ask for concessions:</strong> $8k–$12k toward closing costs OR home warranty OR specific repairs — not all three.</li>
        <li><strong>Inspection period:</strong> 10 days. Financing contingency: 21 days. Appraisal contingency: yes. Survey: seller-paid if possible.</li>
      </ul>

      <div class="nu-badge"><span class="nu-badge-num">4</span> Counter-Offer Strategy — Days 14–25</div>
      <ul class="checklist">
        <li><strong>Seller counters high (&gt; Walk tier):</strong> respond with patient reiteration of comp math, move your number up by 25–33% of the gap, not 50%.</li>
        <li><strong>Seller counters mid (Target range):</strong> accept terms with a small concession gain — e.g., meet them on price if they cover $5k closing.</li>
        <li><strong>Seller refuses to counter:</strong> wait 7 days, return with the same offer and a written comp summary. Silence is a tactic.</li>
        <li><strong>Seller aggressive / insulting response:</strong> withdraw cleanly, send a one-line note: "Respectfully, we're not aligned. Wishing you success with the property." Come back in 30 days.</li>
      </ul>

      <div class="nu-badge"><span class="nu-badge-num">5</span> Inspection &amp; Re-Negotiation — Days 25–35</div>
      <ul class="checklist">
        <li><strong>Hire a certified inspector</strong> — estate-grade property, budget $800–$1,500 for thorough inspection including roof, foundation, HVAC, septic (if applicable), and pool/water features.</li>
        <li><strong>Ask for separate pest, HVAC, sewer scope</strong> if any red flags. Itemized reports give negotiating weight.</li>
        <li><strong>Issue repair request or credit:</strong> lead with credit ($) not repair list — you control workmanship post-close, and credit is tax-advantaged.</li>
        <li><strong>Walk trigger:</strong> structural, environmental (mold, asbestos, radon), or undisclosed-defect findings that are not cured with seller credit. This is the second walk-away point.</li>
      </ul>

      <div class="nu-badge"><span class="nu-badge-num">6</span> Close — Days 35–45</div>
      <ul class="checklist">
        <li><strong>Title company review:</strong> clear title, no unreleased liens, easements mapped. Use a neutral title company or the one handling seller's mortgage payoff.</li>
        <li><strong>Final walk-through:</strong> 24–48 hours before close. Confirm agreed repairs, included fixtures, no new damage.</li>
        <li><strong>HUD / closing disclosure review:</strong> verify every line — lender fees, title, taxes, prepaid items — against the Good Faith Estimate.</li>
        <li><strong>Wire fraud defense:</strong> confirm wire instructions by phone to a number you independently verified. Never trust emailed wire updates.</li>
      </ul>
    </section>

    <!-- SCRIPTS -->
    <section>
      <h2 class="nu-section-title">Conversation <span>Scripts</span></h2>
      <div class="script-block">
        <span class="script-label">Opening call to listing agent</span>
        "Hi — this is Aaron Norris. I'm interested in 4505 Buttewoods. Before I look at making an offer, I'd like to understand a few things. <em>How long has it been on market? Is the seller open to discussing price? What's motivating the sale?</em> I'm a serious, financed buyer with flexibility on timing — I want to make sure any offer I bring is one the seller can take seriously."

        <span class="script-label">Presenting the first offer</span>
        "We've pulled comps in the area and run the numbers carefully. Our offer reflects current market conditions, the property's square footage, and what comparable estates have closed at in the last twelve months. <em>We're prepared to move quickly with documented financing and a flexible close date.</em> I'd appreciate the seller reviewing it with the comp package attached and giving us a response by [date]."

        <span class="script-label">When seller counters high</span>
        "I appreciate the response. I'm not going to negotiate against myself, but I'll share where we got our number. <em>[Three comps, adjusted $/sq ft, carry-cost math.]</em> I can move [specific number] — that's meaningful movement from where we started. If we can land there, we have a deal today. If not, I understand, and I wish you well."

        <span class="script-label">After inspection — asking for credit</span>
        "The inspection identified [specific items] — I've attached the report. Rather than ask the seller to manage repairs, we're requesting a [$ amount] closing credit so we can handle the work ourselves post-close. <em>This keeps the timeline clean and removes any warranty dispute on the repair quality.</em> We'd like to keep moving toward the scheduled close date."

        <span class="script-label">Walking away, cleanly</span>
        "Respectfully, we're not going to be able to make this one work at these numbers. I appreciate your time and the seller's willingness to engage. <em>If circumstances change, I'd welcome a call.</em> Wishing you success with the property."
      </div>
    </section>

    <!-- FINANCING -->
    <section>
      <h2 class="nu-section-title">Financing &amp; <span>Cash Flow Discipline</span></h2>
      <div class="two-col">
        <div class="col-panel">
          <h3>Loan Structure</h3>
          <ul>
            <li>20–25% down payment — preserves liquidity for Norris Utilities® inventory needs</li>
            <li>30-year fixed — protect against rate risk over ownership horizon</li>
            <li>Jumbo loan territory — rate-shop at minimum 3 lenders (Renasant primary)</li>
            <li>Avoid PMI — hit 20% down minimum</li>
            <li>Lock rate on acceptance, not at close</li>
          </ul>
        </div>
        <div class="col-panel">
          <h3>Cash Flow Guardrails</h3>
          <ul>
            <li>Total monthly PITI &lt; 28% of verified personal income</li>
            <li>Reserve 6 months of PITI in separate account before close</li>
            <li>Do not deplete business operating capital for down payment</li>
            <li>Do not open new credit lines in 60 days before close</li>
            <li>Maintain Norris Utilities® borrowing capacity for inventory — FlexPro Armor, Skylift, Samson Rope purchasing should not be constrained</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- DEAL KILLERS -->
    <section>
      <h2 class="nu-section-title">Deal <span>Killers</span></h2>
      <div class="callout warn">
        <div class="callout-title">Any one of these and we walk</div>
        <p>1. <strong>Title defects</strong> that can't be cured at close. 2. <strong>Material undisclosed defects</strong> — foundation, environmental, structural. 3. <strong>Appraisal gap &gt; 3%</strong> that seller won't absorb. 4. <strong>Seller refuses reasonable inspection contingencies.</strong> 5. <strong>Seller's mortgage exceeds sale price</strong> (short sale) and lender won't commit.</p>
        <p>Walking is not failure. The deal either works on numbers or it doesn't. Norris Utilities® was built on patience — this acquisition should be, too.</p>
      </div>
    </section>

    <!-- FINAL CHECKLIST -->
    <section>
      <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
      <ul class="checklist">
        <li><strong>Listing price &amp; history</strong> — original list, all reductions, days on market confirmed</li>
        <li><strong>5 comparable sales</strong> — pulled, adjusted, weighted average calculated</li>
        <li><strong>Walk / Target / Stretch</strong> — three numbers written down, committed before first conversation</li>
        <li><strong>Pre-approval letter</strong> — Renasant Bank, Patrick Lavette, dated within 30 days</li>
        <li><strong>Title search (preliminary)</strong> — any liens, judgments, easements identified</li>
        <li><strong>Tax record</strong> — assessed value, annual bill, any delinquency</li>
        <li><strong>Seller motivation</strong> — at least one credible signal documented</li>
        <li><strong>Inspector lined up</strong> — certified, estate-experienced, available inside contingency window</li>
        <li><strong>Attorney on standby</strong> — real estate attorney, contract review, pre-drafted contingency language</li>
        <li><strong>Cash reserve confirmed</strong> — 6 months PITI plus repairs budget segregated</li>
      </ul>
    </section>

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
  <div class="nu-footer-legal">
    Confidential — Personal Acquisition Brief. Norris Utilities®, A Legacy of Commitment®, and the Phoenix Icon® are registered trademarks of Norris Utilities, LLC. Prepared 2026-04-22.
  </div>
</footer>

</body>
</html>