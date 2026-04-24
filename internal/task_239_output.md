<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
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
      --nu-green: #0a7a3a;
      --nu-red: #b71c1c;
      --nu-amber: #c77c00;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.8;
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

    /* Ghost phoenix watermark */
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
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
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
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 20px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-white);
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 55px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 55px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC TITLE BLOCK ══ */
    .doc-title-block {
      border-left: 5px solid var(--nu-blue);
      padding: 4px 0 4px 22px;
      margin-bottom: 14px;
    }
    .doc-kicker {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin: 22px 0 36px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-radius: 6px;
    }
    .meta-item .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .meta-item .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 38px 0 14px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    p { margin-bottom: 12px; }

    /* ══ CALLOUT ══ */
    .callout {
      border-left: 4px solid var(--nu-blue);
      background: #f0f4ff;
      padding: 16px 20px;
      margin: 18px 0;
      border-radius: 0 6px 6px 0;
    }
    .callout.warn {
      border-left-color: var(--nu-amber);
      background: #fff7e6;
    }
    .callout.danger {
      border-left-color: var(--nu-red);
      background: #fdecea;
    }
    .callout-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 6px;
      color: var(--nu-blue);
    }
    .callout.warn .callout-label { color: var(--nu-amber); }
    .callout.danger .callout-label { color: var(--nu-red); }

    /* ══ FACT GRID ══ */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 18px 0 10px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .fact-card .fact-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .fact-card .fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .fact-card .fact-note {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ PRICE LADDER ══ */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      margin: 18px 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .price-step {
      padding: 18px 16px;
      text-align: center;
      background: var(--nu-white);
      border-right: 1px solid var(--nu-medium-gray);
    }
    .price-step:last-child { border-right: none; }
    .price-step .step-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .price-step .step-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .price-step.opening { background: #fff7e6; }
    .price-step.opening .step-label { color: var(--nu-amber); }
    .price-step.target { background: #e8f0ff; }
    .price-step.target .step-label { color: var(--nu-blue); }
    .price-step.target .step-value { color: var(--nu-blue); }
    .price-step.walk { background: #fdecea; }
    .price-step.walk .step-label { color: var(--nu-red); }

    /* ══ TABLE ══ */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 0.92rem;
    }
    th, td {
      padding: 11px 14px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.09em;
      text-transform: uppercase;
    }
    tr:nth-child(even) td { background: var(--nu-light-gray); }
    td.num { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; }

    /* ══ CHECKLIST ══ */
    .check-list {
      list-style: none;
      padding: 0;
      margin: 12px 0;
    }
    .check-list li {
      position: relative;
      padding: 10px 14px 10px 42px;
      margin-bottom: 6px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
    }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* ══ PHASE CARDS ══ */
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-cyan);
      padding: 18px 22px;
      margin-bottom: 14px;
      border-radius: 4px;
    }
    .phase-card.phase-1 { border-left-color: var(--nu-blue); }
    .phase-card.phase-2 { border-left-color: var(--nu-cyan); }
    .phase-card.phase-3 { border-left-color: var(--nu-accent-gold); }
    .phase-card.phase-4 { border-left-color: var(--nu-green); }

    .phase-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 6px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .phase-num {
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      text-transform: uppercase;
    }
    .phase-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .phase-timing {
      font-size: 0.82rem;
      font-weight: 700;
      color: #666;
    }
    .phase-body { font-size: 0.95rem; }
    .phase-body ul { margin: 6px 0 0 20px; }
    .phase-body li { margin-bottom: 4px; }

    /* ══ SCRIPT BLOCK ══ */
    .script-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin: 14px 0;
      border-radius: 0 6px 6px 0;
      font-size: 0.95rem;
    }
    .script-block .speaker {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .script-block em { color: #666; font-size: 0.88rem; }

    /* ══ CONCESSION LADDER ══ */
    .concession-table th { background: var(--nu-blue); }
    .concession-row-target td { background: #e8f0ff !important; font-weight: 700; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-legal {
      margin-top: 16px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.03em;
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-cyan) 100%) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .phase-card, .fact-card, .callout { break-inside: avoid; }
      .nu-section-title { break-after: avoid; }
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.55em; }
      .nu-wrap { padding: 30px 20px 50px; }
      .doc-title { font-size: 1.55rem; }
      .nu-section-title { font-size: 1.25rem; }
      .price-ladder { grid-template-columns: 1fr 1fr; }
      .price-step { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
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
    <div class="nu-doc-badge">Confidential — Negotiation Playbook</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,55 L1440,0 L1440,55 L0,55 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-kicker">Negotiation Strategy · Residential Acquisition</div>
        <h1 class="doc-title">4505 Buttewoods Estate — 7,098 sq ft</h1>
        <div class="doc-subtitle">Purchase negotiation plan prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®</div>
      </div>

      <div class="doc-meta">
        <div class="meta-item">
          <div class="label">Property</div>
          <div class="value">4505 Buttewoods</div>
        </div>
        <div class="meta-item">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft</div>
        </div>
        <div class="meta-item">
          <div class="label">Buyer</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="meta-item">
          <div class="label">Doc Date</div>
          <div class="value">April 23, 2026</div>
        </div>
        <div class="meta-item">
          <div class="label">Status</div>
          <div class="value">Active Negotiation</div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-label">Executive Summary</div>
        <p>This is a personal, non-business real-estate acquisition — a 7,098 sq ft estate at 4505 Buttewoods. The plan below sequences the negotiation into four phases: research &amp; leverage, opening offer, structured concessions, and close. Every price figure below must be validated against the appraisal, the listing price, and recent comparable sales <strong>before</strong> any offer is submitted in writing. No number here is a commitment.</p>
      </div>

      <!-- PHASE 0 — RESEARCH -->
      <h2 class="nu-section-title"><span class="first">Phase</span> <span class="rest">0 — Research &amp; Leverage (Complete Before Any Offer)</span></h2>

      <p>Negotiation leverage is built <em>before</em> the first number is spoken. The bigger the dossier, the lower the opening offer can land without offending the seller. Complete all eight items before contacting the seller or listing agent.</p>

      <ul class="check-list">
        <li><strong>Pull comparables.</strong> Last 90 days, ±1,500 sq ft, within 3 miles. Sold price per square foot is the negotiation anchor.</li>
        <li><strong>Days on market (DOM).</strong> Anything over 60 days shifts leverage to the buyer. Anything over 120 days shifts it decisively.</li>
        <li><strong>Price history.</strong> Every prior reduction is a seller concession already made — note the dollar amount and the date.</li>
        <li><strong>Tax assessment vs. asking price.</strong> A wide gap becomes an objective anchor in counter-offer discussions.</li>
        <li><strong>Seller motivation.</strong> Estate sale? Relocation? Carrying two mortgages? Each scenario unlocks different concession levers.</li>
        <li><strong>Independent appraisal commitment.</strong> Financing contingency must require appraisal at or above contract price.</li>
        <li><strong>Pre-inspection if allowed.</strong> A 7,098 sq ft home has roofing, HVAC (likely multiple zones), foundation, and envelope risk. Each deferred maintenance item is a concession lever.</li>
        <li><strong>Pre-approval letter in hand.</strong> Nothing moves without proof of funds or financing. This is table stakes.</li>
      </ul>

      <div class="callout warn">
        <div class="callout-label">Missing Data — Must Be Filled Before Offer</div>
        <p>Listing price, asking price history, seller identity &amp; motivation, DOM, MLS number, lot size, year built, and recent comps are <strong>not</strong> in this dossier. This document is a framework, not a priced offer. Aaron must populate those fields — or have his agent populate them — before moving from Phase 0 to Phase 1.</p>
      </div>

      <!-- DUE DILIGENCE FACT GRID -->
      <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Dossier — Fields To Fill</span></h2>

      <div class="fact-grid">
        <div class="fact-card">
          <div class="fact-label">Listing Price</div>
          <div class="fact-value">$ _____</div>
          <div class="fact-note">Per MLS — source of truth</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Price Per Sq Ft (Listed)</div>
          <div class="fact-value">$ _____ / sq ft</div>
          <div class="fact-note">Listing price ÷ 7,098</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Market Avg $/Sq Ft (Comps)</div>
          <div class="fact-value">$ _____ / sq ft</div>
          <div class="fact-note">Last 90 days, similar homes</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Days On Market</div>
          <div class="fact-value">___ days</div>
          <div class="fact-note">Higher = more leverage</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Prior Reductions</div>
          <div class="fact-value">$ _____</div>
          <div class="fact-note">Cumulative seller concession to date</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Tax-Assessed Value</div>
          <div class="fact-value">$ _____</div>
          <div class="fact-note">County records</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Est. Carry Cost/Month (Seller)</div>
          <div class="fact-value">$ _____</div>
          <div class="fact-note">Mortgage + tax + insurance + HOA</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Seller Motivation</div>
          <div class="fact-value">_________</div>
          <div class="fact-note">Estate / relocation / other</div>
        </div>
      </div>

      <!-- PRICING FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first">Pricing</span> <span class="rest">Framework — Anchor, Target, Walk</span></h2>

      <p>Every offer needs three numbers set in advance: the <strong>opening</strong> (anchor — aggressive but defensible), the <strong>target</strong> (the number the deal is genuinely worth), and the <strong>walk-away</strong> (the line that is not crossed under any circumstance). Setting the walk-away before negotiation begins is the single most important discipline in this process.</p>

      <div class="price-ladder">
        <div class="price-step opening">
          <div class="step-label">Opening Offer</div>
          <div class="step-value">≈ 88% of list</div>
        </div>
        <div class="price-step target">
          <div class="step-label">Target Close</div>
          <div class="step-value">≈ 93% of list</div>
        </div>
        <div class="price-step walk">
          <div class="step-label">Walk-Away Ceiling</div>
          <div class="step-value">≤ 97% of list</div>
        </div>
      </div>

      <p><strong>Adjust these percentages</strong> based on Phase 0 findings. If DOM &gt; 120 days or comps land 10%+ below list, the opening shifts to 82–85% and the walk-away to 93%. If the property is priced at or below comp average, the opening rises to 92% and the walk-away to 99% — or the pass becomes the right call.</p>

      <div class="callout danger">
        <div class="callout-label">Hard Rule — Walk-Away Discipline</div>
        <p>The walk-away number is written down before the first counter-offer is exchanged, and it does not move once set. Emotional attachment to a property — especially a 7,098 sq ft estate — is the single most expensive mistake a buyer can make. If the seller counters above the walk-away, the answer is a polite, firm no. If the seller calls back three days later, the answer is still no at that number. The walk-away only moves if the <em>facts</em> change: a new appraisal, a concession on terms, a credit at close. Never because Aaron has decided he wants the house.</p>
      </div>

      <!-- COMP ANALYSIS TABLE -->
      <h2 class="nu-section-title"><span class="first">Comparable</span> <span class="rest">Sales Worksheet</span></h2>
      <p>Fill with the three closest comps from the last 90 days. The implied value is the defensible price this property should sell for, all-else-equal.</p>

      <table>
        <thead>
          <tr>
            <th>Comp Address</th>
            <th>Sq Ft</th>
            <th>Sale Price</th>
            <th>$/Sq Ft</th>
            <th>Sale Date</th>
            <th>Notes / Adjustments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comp #1 — __________</td>
            <td class="num">_____</td>
            <td class="num">$_____</td>
            <td class="num">$_____</td>
            <td>__________</td>
            <td>Condition, lot, upgrades</td>
          </tr>
          <tr>
            <td>Comp #2 — __________</td>
            <td class="num">_____</td>
            <td class="num">$_____</td>
            <td class="num">$_____</td>
            <td>__________</td>
            <td>Condition, lot, upgrades</td>
          </tr>
          <tr>
            <td>Comp #3 — __________</td>
            <td class="num">_____</td>
            <td class="num">$_____</td>
            <td class="num">$_____</td>
            <td>__________</td>
            <td>Condition, lot, upgrades</td>
          </tr>
          <tr>
            <td><strong>Average $/Sq Ft</strong></td>
            <td class="num">—</td>
            <td class="num">—</td>
            <td class="num"><strong>$_____</strong></td>
            <td>—</td>
            <td>Anchor for counter-math</td>
          </tr>
          <tr>
            <td><strong>Implied 4505 Buttewoods Value</strong></td>
            <td class="num">7,098</td>
            <td class="num"><strong>$_____</strong></td>
            <td class="num">—</td>
            <td>—</td>
            <td>Avg $/sq ft × 7,098</td>
          </tr>
        </tbody>
      </table>

      <!-- PHASES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Sequence — Four Phases</span></h2>

      <div class="phase-card phase-1">
        <div class="phase-head">
          <div>
            <div class="phase-num">Phase 1</div>
            <div class="phase-title">Opening Offer &amp; Terms Package</div>
          </div>
          <div class="phase-timing">Day 1 · Written offer only</div>
        </div>
        <div class="phase-body">
          <ul>
            <li>Submit the opening in writing through the agent. Never verbal.</li>
            <li>Attach pre-approval letter, earnest money proof, and a short, respectful cover note framing Aaron as a serious cash-ready buyer.</li>
            <li>Include a 48–72 hour response deadline. This prevents the seller from shopping the offer to backup buyers indefinitely.</li>
            <li>Terms to request alongside price: seller-paid closing costs (2–3%), 14-day inspection, 21-day financing contingency, 30-day close.</li>
            <li>Do <strong>not</strong> include a personal letter to the seller. It creates legal fair-housing risk and rarely moves price.</li>
          </ul>
        </div>
      </div>

      <div class="phase-card phase-2">
        <div class="phase-head">
          <div>
            <div class="phase-num">Phase 2</div>
            <div class="phase-title">Counter-Offer Exchange</div>
          </div>
          <div class="phase-timing">Days 2–7 · Expect 2–3 rounds</div>
        </div>
        <div class="phase-body">
          <ul>
            <li>Sellers almost never accept the opening. Expect a counter 3–6% below list.</li>
            <li>Close half the gap between opening and their counter on Round 2. This signals good faith without overpaying.</li>
            <li>On Round 3, move one-quarter of the remaining gap — or hold firm and trade terms instead of price (close date, appliances, repairs).</li>
            <li>Every concession on price should be paired with a concession from the seller. Never give without getting.</li>
            <li>If the seller refuses to move past the walk-away: pause for 48 hours. Silence is a negotiation tool. Do not re-engage until they do.</li>
          </ul>
        </div>
      </div>

      <div class="phase-card phase-3">
        <div class="phase-head">
          <div>
            <div class="phase-num">Phase 3</div>
            <div class="phase-title">Inspection &amp; Repair Credit</div>
          </div>
          <div class="phase-timing">Days 8–22 · Second price lever</div>
        </div>
        <div class="phase-body">
          <ul>
            <li>A 7,098 sq ft home has 3–4 HVAC systems, a large roof, and long-run plumbing. Inspection <em>will</em> find material issues.</li>
            <li>Prioritize major-systems findings (roof age, HVAC age, foundation, water intrusion, electrical) for credit requests. Ignore cosmetic items.</li>
            <li>Request credit at closing rather than seller-completed repairs. Control over vendor and quality stays with Aaron.</li>
            <li>Typical realistic credit range on an estate this size: $8,000–$25,000 depending on findings.</li>
            <li>If findings are severe (failed foundation, active water, unpermitted work): invoke inspection contingency and renegotiate price, or walk.</li>
          </ul>
        </div>
      </div>

      <div class="phase-card phase-4">
        <div class="phase-head">
          <div>
            <div class="phase-num">Phase 4</div>
            <div class="phase-title">Close &amp; Risk Control</div>
          </div>
          <div class="phase-timing">Days 23–30</div>
        </div>
        <div class="phase-body">
          <ul>
            <li>Final walk-through 24–48 hours before close. Confirm all negotiated repairs, fixtures, and inclusions are in place.</li>
            <li>Review closing disclosure the moment it arrives. Line-item every fee against the original good-faith estimate.</li>
            <li>Title insurance (owner's policy), survey, and flood certification — all non-negotiable line items.</li>
            <li>Wire fraud is the #1 closing-day risk. Call the title company on a known number to verify wire instructions before sending any funds. Never trust emailed wire instructions.</li>
            <li>Record deed. Retain full closing package in permanent records.</li>
          </ul>
        </div>
      </div>

      <!-- CONCESSION LADDER -->
      <h2 class="nu-section-title"><span class="first">Concession</span> <span class="rest">Ladder — What To Trade For What</span></h2>

      <p>Every concession should be pre-classified: what Aaron is willing to give, what he wants in return, and the maximum he'll stretch. This table keeps the negotiation disciplined and prevents "just to close the deal" drift.</p>

      <table class="concession-table">
        <thead>
          <tr>
            <th>Lever</th>
            <th>Aaron's Max Give</th>
            <th>What To Demand In Return</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price per sq ft</td>
            <td>Up to comp-average $/sq ft</td>
            <td>Repair credit OR closing-cost credit</td>
            <td>High</td>
          </tr>
          <tr class="concession-row-target">
            <td>Earnest money</td>
            <td>1–2% of contract price</td>
            <td>Inspection contingency intact</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Close date</td>
            <td>30–45 days</td>
            <td>Seller-paid closing costs 2–3%</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Post-close seller occupancy</td>
            <td>Max 14 days, pro-rated rent</td>
            <td>Price reduction $X,000</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Appliances / fixtures</td>
            <td>Accept as-is</td>
            <td>Nothing — unless seller pulls items</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>As-is language</td>
            <td>Never waive inspection contingency</td>
            <td>N/A — non-negotiable</td>
            <td>Hard rule</td>
          </tr>
          <tr>
            <td>Financing contingency</td>
            <td>Keep 21-day minimum</td>
            <td>N/A — non-negotiable</td>
            <td>Hard rule</td>
          </tr>
        </tbody>
      </table>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title"><span class="first">Script</span> <span class="rest">Snippets — Opening &amp; Counter Language</span></h2>

      <div class="script-block">
        <div class="speaker">Opening Offer — Cover Note</div>
        <p>"We're serious, cash-ready buyers and submitting our best thoughtful offer today. It's grounded in recent comparable sales in the area and the current condition disclosures. We've included our pre-approval and proof of earnest money. We'd like to close in 30 days and keep terms clean. We look forward to your response by [date + 72 hours]."</p>
        <em>— Keep it short. Frame as respectful, data-driven, ready-to-close.</em>
      </div>

      <div class="script-block">
        <div class="speaker">If Seller Counters Above Target</div>
        <p>"Thanks for the counter. Our offer reflects the comparable sales we've reviewed — recent closings in the area are averaging $_____ per square foot. We can move from our opening to $_____, which is still below that average, in exchange for [closing cost credit / repair credit / appliance inclusion]. That is our realistic range."</p>
        <em>— Lead with data. Move with a demand attached. Never move on price alone.</em>
      </div>

      <div class="script-block">
        <div class="speaker">If Seller Holds Firm Above Walk-Away</div>
        <p>"We've stretched as far as the numbers will support. If $_____ isn't workable for you, we understand and we'll step back. If circumstances change on your side in the coming weeks, please do reach out — we remain interested at a price that makes sense."</p>
        <em>— Polite, firm, no bridge burned. Silence afterward. Do not re-engage first.</em>
      </div>

      <div class="script-block">
        <div class="speaker">Post-Inspection Repair Credit Request</div>
        <p>"The inspection identified [specific items]. Our contractor estimates remediation at $_____. We'd like to proceed to close with a seller credit of $_____ at closing, applied toward these items. This keeps the deal on the original timeline."</p>
        <em>— Quantify. Attach estimates. Request credit not repairs.</em>
      </div>

      <!-- RED FLAGS -->
      <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Flags — Walk-Away Triggers</span></h2>

      <p>Any one of the following is a signal to pause, investigate, and potentially exit. Two or more together is a clear exit signal.</p>

      <ul class="check-list">
        <li>Appraisal comes in more than 5% below contract price and seller refuses to reduce.</li>
        <li>Inspection reveals foundation movement, active water intrusion, or unpermitted structural work.</li>
        <li>Title defects, boundary disputes, easement issues, or liens the seller cannot clear.</li>
        <li>Seller requests pre-close occupancy beyond 14 days, or demands non-refundable earnest money.</li>
        <li>Seller refuses inspection contingency or demands waiver of appraisal contingency.</li>
        <li>Disclosures reveal prior insurance claims for flood, fire, or foundation — and no remediation proof.</li>
        <li>Aaron finds himself emotionally justifying crossing the walk-away line. That feeling is the signal.</li>
      </ul>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Steps — Immediate Actions</span></h2>

      <ol style="margin-left: 22px; margin-top: 10px;">
        <li style="margin-bottom: 8px;"><strong>Populate the dossier.</strong> Have Aaron's agent fill every blank in the Due Diligence and Comparable Sales worksheets above. No offer goes out until this is complete.</li>
        <li style="margin-bottom: 8px;"><strong>Lock the walk-away number.</strong> Written down, signed by Aaron, before any price conversation. Filed in the acquisition folder.</li>
        <li style="margin-bottom: 8px;"><strong>Pre-approval refresh.</strong> Ensure the lender letter is dated within 30 days and reflects current rates.</li>
        <li style="margin-bottom: 8px;"><strong>Pre-inspection scoping.</strong> If listing allows, schedule a walk-through with a trusted inspector for major-systems assessment before offer.</li>
        <li style="margin-bottom: 8px;"><strong>Title company selected in advance.</strong> Known, reputable. Wire instructions confirmed by phone only.</li>
        <li style="margin-bottom: 8px;"><strong>Submit Phase 1 opening offer in writing</strong> with the terms package outlined above.</li>
      </ol>

      <div class="callout">
        <div class="callout-label">Final Reminder</div>
        <p>This is a personal transaction, separate from Norris Utilities® business operations. The same disciplines apply: data first, emotion last, walk-away defined in advance. If at any point the deal requires Aaron to talk himself into it, the deal is not right at that price.</p>
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
    <div class="nu-footer-legal">
      Confidential negotiation playbook — prepared April 23, 2026. All figures illustrative until dossier is populated with verified listing data, comparables, and appraisal.
    </div>
  </footer>

</body>
</html>