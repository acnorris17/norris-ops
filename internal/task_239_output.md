<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Action Plan — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #2D7A4F;
      --nu-warning: #C9A84C;
      --nu-danger: #B8302C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
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
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
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

    /* PAGE TITLE STRIP */
    .nu-title-strip {
      background: var(--nu-white);
      padding: 28px 40px 8px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue-deep);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-page-title {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .nu-page-title .blue { color: var(--nu-blue-deep); }
    .nu-page-sub {
      font-size: 1rem;
      color: #555;
      font-weight: 400;
      margin-bottom: 18px;
    }

    /* CONTENT WRAP */
    .nu-content {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 28px 60px;
    }

    /* PROPERTY CARD */
    .property-card {
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 32px;
    }
    .property-card-head {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .property-card-head h2 {
      font-size: 1.3rem;
      font-weight: 900;
      letter-spacing: 0.02em;
    }
    .status-pill {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
    }
    .property-cell {
      padding: 22px 24px;
      border-right: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .property-cell:last-child { border-right: none; }
    .property-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue-deep);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .property-cell .value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .property-cell .sub {
      font-size: 0.82rem;
      color: #777;
      margin-top: 4px;
      font-weight: 400;
    }

    /* SECTION */
    .section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px 32px 28px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      border: 1px solid var(--nu-medium-gray);
    }
    .section-title {
      font-size: 1.4rem;
      font-weight: 900;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .section-title .first { color: var(--nu-blue-deep); }
    .section-title .rest { color: var(--nu-dark-text); }
    .section-intro {
      font-size: 0.98rem;
      color: #555;
      margin-bottom: 20px;
      max-width: 780px;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* SUB CARDS */
    .sub-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue-deep);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 14px;
    }
    .sub-card.cyan { border-left-color: var(--nu-cyan); }
    .sub-card.gold { border-left-color: var(--nu-accent-gold); }
    .sub-card.danger { border-left-color: var(--nu-danger); }
    .sub-card h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .sub-card p {
      font-size: 0.92rem;
      color: #444;
      line-height: 1.55;
    }
    .sub-card ul {
      margin-top: 6px;
      padding-left: 18px;
    }
    .sub-card li {
      font-size: 0.9rem;
      color: #444;
      margin-bottom: 4px;
    }

    /* STEPS */
    .steps {
      counter-reset: step;
      list-style: none;
    }
    .steps li {
      counter-increment: step;
      position: relative;
      padding: 16px 18px 16px 64px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .steps li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 14px;
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      box-shadow: 0 2px 6px rgba(0,51,204,0.25);
    }
    .steps .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .steps .step-body {
      font-size: 0.92rem;
      color: #555;
      line-height: 1.55;
    }
    .steps .step-meta {
      display: inline-block;
      margin-top: 6px;
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--nu-blue-deep);
      background: rgba(0,51,204,0.08);
      padding: 3px 9px;
      border-radius: 4px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* OFFER LADDER */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .offer-table th {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .offer-table td {
      padding: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      color: #333;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr:nth-child(even) td { background: #fafafc; }
    .offer-table .amt {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 1rem;
      white-space: nowrap;
    }
    .offer-table .label-cell { font-weight: 700; color: var(--nu-dark-text); }

    /* WALK-AWAY BAR */
    .walkaway {
      margin-top: 16px;
      background: linear-gradient(135deg, #fff8e8 0%, #fff3d0 100%);
      border: 2px solid var(--nu-accent-gold);
      border-radius: 8px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .walkaway .l {
      font-size: 0.78rem;
      font-weight: 900;
      color: #8a6d1c;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .walkaway .r {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }

    /* CHECKLIST */
    .checklist { list-style: none; }
    .checklist li {
      padding: 10px 12px 10px 38px;
      position: relative;
      font-size: 0.94rem;
      color: #333;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue-deep);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* CONTINGENCY GRID */
    .cg {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .cg-item {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8efff 100%);
      padding: 18px;
      border-radius: 8px;
      border: 1px solid #d0dcf5;
    }
    .cg-item h5 {
      font-size: 0.82rem;
      font-weight: 900;
      color: var(--nu-blue-deep);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .cg-item p {
      font-size: 0.88rem;
      color: #444;
      line-height: 1.5;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 4px;
      bottom: 4px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue-deep), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding-bottom: 18px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -25px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue-deep);
    }
    .tl-day {
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue-deep);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .tl-text {
      font-size: 0.92rem;
      color: #333;
      line-height: 1.5;
    }

    /* TALKING POINTS */
    .quote-block {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 22px 26px;
      border-radius: 8px;
      border-left: 5px solid var(--nu-cyan);
      margin-bottom: 12px;
    }
    .quote-block .speaker {
      font-size: 0.74rem;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .quote-block p {
      font-size: 0.96rem;
      line-height: 1.55;
      font-style: italic;
      color: rgba(255,255,255,0.92);
    }

    /* RISK ROW */
    .risk-row {
      display: grid;
      grid-template-columns: 1fr 90px 1fr;
      gap: 12px;
      align-items: center;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .risk-row:last-child { border-bottom: none; }
    .risk-row .risk-name {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.92rem;
    }
    .risk-row .risk-level {
      text-align: center;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 4px 8px;
      border-radius: 12px;
    }
    .risk-row .risk-level.high { background: #fde0df; color: var(--nu-danger); }
    .risk-row .risk-level.med { background: #fff3d0; color: #8a6d1c; }
    .risk-row .risk-level.low { background: #d8efe0; color: var(--nu-success); }
    .risk-row .risk-mit {
      font-size: 0.88rem;
      color: #555;
      line-height: 1.45;
    }
    @media (max-width: 600px) {
      .risk-row { grid-template-columns: 1fr; gap: 6px; }
      .risk-row .risk-level { justify-self: start; }
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-page-title { font-size: 1.55rem; }
      .nu-content { padding: 28px 16px 48px; }
      .section { padding: 22px 18px; }
      .property-card-head { padding: 18px 20px; }
      .property-cell { border-right: none; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer, .quote-block { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section, .property-card { box-shadow: none; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
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

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- TITLE STRIP -->
  <div class="nu-title-strip">
    <div class="nu-eyebrow">Internal Action Plan · reMarkable Capture</div>
    <h1 class="nu-page-title"><span class="blue">Negotiate Purchase</span> — 4505 Buttewoods Estate</h1>
    <div class="nu-page-sub">7,098 sq ft estate · Acquisition strategy, offer ladder, and execution checklist</div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content">

    <!-- PROPERTY SUMMARY -->
    <div class="property-card">
      <div class="property-card-head">
        <h2>Property Snapshot</h2>
        <span class="status-pill">Negotiation Phase</span>
      </div>
      <div class="property-grid">
        <div class="property-cell">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Birmingham metro area</div>
        </div>
        <div class="property-cell">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Estate-class home</div>
        </div>
        <div class="property-cell">
          <div class="label">Stage</div>
          <div class="value">Pre-Offer</div>
          <div class="sub">Comps and walk-through pending</div>
        </div>
        <div class="property-cell">
          <div class="label">Buyer</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">Personal acquisition</div>
        </div>
      </div>
    </div>

    <!-- SECTION 1: OBJECTIVE -->
    <section class="section">
      <h2 class="section-title"><span class="first">Objective</span> <span class="rest">& Strategic Frame</span></h2>
      <p class="section-intro">
        Acquire 4505 Buttewoods at the lowest defensible price the market and seller will accept, with clean contingencies that protect Aaron through inspection, financing, and title. Move with conviction, but never above the walk-away number set in writing before the first offer.
      </p>

      <div class="two-col">
        <div class="sub-card">
          <h4>Win Conditions</h4>
          <ul>
            <li>Final price at or below appraised value</li>
            <li>Inspection contingency intact (10 business days)</li>
            <li>Financing contingency intact (21 days)</li>
            <li>Title clean — no easements blocking intended use</li>
            <li>Closing aligned with current cash position and Q3 priorities</li>
          </ul>
        </div>
        <div class="sub-card cyan">
          <h4>Posture at the Table</h4>
          <p>
            Friendly, prepared, and unhurried. Aaron is a third-generation business owner — he buys assets, not stories. The seller should leave every conversation feeling respected, never pressured, and never confused about the position.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: PRE-OFFER DUE DILIGENCE -->
    <section class="section">
      <h2 class="section-title"><span class="first">Step 1</span> <span class="rest">— Due Diligence Before Any Number Is Spoken</span></h2>
      <p class="section-intro">
        Do not engage on price until these items are complete. Negotiating without comps and a walk-through is negotiating with a blindfold on.
      </p>

      <ol class="steps">
        <li>
          <div class="step-title">Pull comparable sales — last 12 months, 1-mile radius, 5,500–8,500 sq ft</div>
          <div class="step-body">Request from buyer's agent or pull directly from MLS. Save min, median, max $/sq ft. Identify the three closest physical comps and what made each sell where it did.</div>
          <span class="step-meta">Day 0–1</span>
        </li>
        <li>
          <div class="step-title">Determine days on market and price-history</div>
          <div class="step-body">Original list price, every reduction, withdrawals, expired listings on the same parcel, and any prior sales of the home. Long DOM and prior reductions are leverage.</div>
          <span class="step-meta">Day 0–1</span>
        </li>
        <li>
          <div class="step-title">Verify tax assessment, lot size, and any liens</div>
          <div class="step-body">County tax records and a preliminary title pull. Confirm legal description matches the listing. Note any HOA, special assessments, or easements.</div>
          <span class="step-meta">Day 1–2</span>
        </li>
        <li>
          <div class="step-title">Walk the property — twice if possible</div>
          <div class="step-body">Once for emotional read, once with a contractor or trusted builder for repair-cost estimate. Document every visible defect with photos: roof, HVAC, foundation, windows, water staining, electrical panel age.</div>
          <span class="step-meta">Day 2–4</span>
        </li>
        <li>
          <div class="step-title">Identify seller motivation</div>
          <div class="step-body">Why are they selling? Relocation, downsizing, divorce, estate sale, financial pressure? The "why" sets the ceiling on flexibility. Listen more than you ask.</div>
          <span class="step-meta">Throughout</span>
        </li>
        <li>
          <div class="step-title">Lock the walk-away number in writing — before the first offer</div>
          <div class="step-body">Aaron sets a number. The number does not move during negotiation. This is the single most important step. Write it on a sticky note, fold it, put it in the drawer.</div>
          <span class="step-meta">Day 4 — Locked</span>
        </li>
      </ol>
    </section>

    <!-- SECTION 3: OFFER LADDER -->
    <section class="section">
      <h2 class="section-title"><span class="first">Step 2</span> <span class="rest">— The Offer Ladder</span></h2>
      <p class="section-intro">
        Once due diligence is complete, set three numbers: opening offer, target close, and walk-away. Negotiate within that band only. The exact dollar figures depend on the comps pulled in Step 1 — fill in the right column once data is in hand.
      </p>

      <table class="offer-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Anchor / Logic</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Opening Offer</td>
            <td>10–15% below list, supported by comps and at least three named cost concerns from the walk-through.</td>
            <td class="amt">List × 0.85 – 0.90</td>
          </tr>
          <tr>
            <td class="label-cell">Target Close</td>
            <td>At or just below median $/sq ft for the comp set. The number Aaron expects to land at after one or two counters.</td>
            <td class="amt">Comp Median × 7,098</td>
          </tr>
          <tr>
            <td class="label-cell">Walk-Away</td>
            <td>The number above which the deal stops making financial sense. Set in writing before any offer is sent. Does not move.</td>
            <td class="amt">≤ Appraised Value</td>
          </tr>
        </tbody>
      </table>

      <div class="walkaway">
        <span class="l">Walk-Away Discipline</span>
        <span class="r">If they say no above the walk-away — say "thank you" and leave.</span>
      </div>
    </section>

    <!-- SECTION 4: TALKING POINTS -->
    <section class="section">
      <h2 class="section-title"><span class="first">Step 3</span> <span class="rest">— Talking Points & Counter-Strategy</span></h2>
      <p class="section-intro">Use these openers verbatim or as scaffolding. Tone is direct, warm, never defensive.</p>

      <div class="quote-block">
        <div class="speaker">Opening Offer Cover Note</div>
        <p>"We've reviewed the comps in this neighborhood over the last twelve months and walked the property carefully. Our offer reflects what the market supports today and accounts for the work we know we'll need to take on after closing. We're serious buyers — clean contingencies, conventional financing pre-approved, and we can close on your timeline."</p>
      </div>

      <div class="quote-block">
        <div class="speaker">When They Counter High</div>
        <p>"Appreciate the response. Help me understand where that number comes from — what comps are you working from? We want to land in the right place, but we have to stay tied to what the appraisal will support."</p>
      </div>

      <div class="quote-block">
        <div class="speaker">When They Refuse To Move</div>
        <p>"I respect that. I'm at my best-and-final, and I don't want to waste your time pretending otherwise. If something changes on your end, my number is good for ten days."</p>
      </div>

      <div class="two-col" style="margin-top: 18px;">
        <div class="sub-card">
          <h4>What To Lead With</h4>
          <ul>
            <li>Comps — specific addresses and sale prices</li>
            <li>Documented repair items from the walk-through</li>
            <li>Strength of buyer position (financing, timeline)</li>
            <li>Clean contract terms</li>
          </ul>
        </div>
        <div class="sub-card danger">
          <h4>What To Never Say</h4>
          <ul>
            <li>"I love this house" — never, until contract is signed</li>
            <li>"I have to have it" — never, ever</li>
            <li>Anything about budget ceiling or pre-approval amount</li>
            <li>Personal financial details or other properties owned</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 5: CONTINGENCIES -->
    <section class="section">
      <h2 class="section-title"><span class="first">Step 4</span> <span class="rest">— Contingencies That Stay In</span></h2>
      <p class="section-intro">These four protect Aaron between contract and closing. Do not strip any of them to "win" the deal — sellers negotiate by asking buyers to drop protection. Keep them in.</p>

      <div class="cg">
        <div class="cg-item">
          <h5>Inspection</h5>
          <p>10 business days post-acceptance. Right to renegotiate or terminate based on findings. Use a licensed Alabama home inspector plus a separate roofing/HVAC sub.</p>
        </div>
        <div class="cg-item">
          <h5>Financing</h5>
          <p>21 days for loan commitment. Conventional, 20%+ down. Aaron is pre-approved — but contingency stays in until clear-to-close.</p>
        </div>
        <div class="cg-item">
          <h5>Appraisal</h5>
          <p>Property must appraise at or above purchase price. If short, right to renegotiate or terminate. This is the appraisal-gap protection.</p>
        </div>
        <div class="cg-item">
          <h5>Title & Survey</h5>
          <p>Clean title, no undisclosed easements, no encroachments. New survey if no survey is current within 24 months. Owner's title policy at closing.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 6: TIMELINE -->
    <section class="section">
      <h2 class="section-title"><span class="first">Step 5</span> <span class="rest">— Execution Timeline</span></h2>
      <p class="section-intro">Target: contract signed within 14 days of first walk-through. Close within 45 days of contract.</p>

      <div class="timeline">
        <div class="tl-item">
          <div class="tl-day">Days 0–4 · Due Diligence</div>
          <div class="tl-text">Pull comps, walk property, contractor estimate, title prelim, lock walk-away number.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 5 · Opening Offer Sent</div>
          <div class="tl-text">Written offer with cover note, pre-approval letter, proof of funds for earnest money.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Days 6–12 · Negotiation</div>
          <div class="tl-text">One to two counters. Stay anchored to comps. Walk-away number does not move.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 14 · Contract Signed</div>
          <div class="tl-text">Earnest money to escrow within 48 hours. All contingencies running.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Days 15–25 · Inspection Period</div>
          <div class="tl-text">Inspection completed. Repair requests or price reductions submitted in writing. Resolve before contingency expires.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Days 26–35 · Appraisal & Loan Underwriting</div>
          <div class="tl-text">Appraisal ordered. Lender clears underwriting conditions. Title commitment reviewed.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Days 36–45 · Clear-to-Close & Closing</div>
          <div class="tl-text">Final walk-through 24–48 hours before closing. Wire instructions verified by phone — never email. Sign at closing table.</div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: RISK REGISTER -->
    <section class="section">
      <h2 class="section-title"><span class="first">Risks</span> <span class="rest">& Mitigations</span></h2>
      <div class="risk-row">
        <div class="risk-name">Multiple-offer situation</div>
        <div class="risk-level high">High Stakes</div>
        <div class="risk-mit">Submit best terms (not just best price) — fast close, clean contingencies, larger earnest deposit. Do not exceed walk-away.</div>
      </div>
      <div class="risk-row">
        <div class="risk-name">Appraisal gap</div>
        <div class="risk-level med">Medium</div>
        <div class="risk-mit">Appraisal contingency stays in. If gap, renegotiate down or terminate. Do not cover a gap on a personal home.</div>
      </div>
      <div class="risk-row">
        <div class="risk-name">Hidden defects discovered post-inspection</div>
        <div class="risk-level med">Medium</div>
        <div class="risk-mit">Submit repair-or-credit request in writing. Be willing to walk if seller refuses material items (foundation, roof, HVAC).</div>
      </div>
      <div class="risk-row">
        <div class="risk-name">Wire-fraud at closing</div>
        <div class="risk-level high">Critical</div>
        <div class="risk-mit">Verify wire instructions by phone using a number from the closing attorney's website — never the email signature. Wire only after voice confirmation.</div>
      </div>
      <div class="risk-row">
        <div class="risk-name">Title cloud / undisclosed lien</div>
        <div class="risk-level low">Low / Insurable</div>
        <div class="risk-mit">Owner's title policy at closing. Closing attorney resolves before funding.</div>
      </div>
      <div class="risk-row">
        <div class="risk-name">Emotional escalation above walk-away</div>
        <div class="risk-level high">High</div>
        <div class="risk-mit">Walk-away number is written down before any offer. If tempted to exceed, sleep one night and re-read the comps.</div>
      </div>
    </section>

    <!-- SECTION 8: PRE-OFFER CHECKLIST -->
    <section class="section">
      <h2 class="section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <p class="section-intro">Every item must be a "yes" before the opening offer is delivered.</p>
      <ul class="checklist">
        <li><strong>Comps pulled</strong> — last 12 months, similar size, 1-mile radius, $/sq ft documented</li>
        <li><strong>Property walked</strong> — at least once, contractor present for second walk if possible</li>
        <li><strong>Repair-cost estimate in hand</strong> — written, itemized, defensible at the negotiation table</li>
        <li><strong>Title prelim ordered</strong> — no surprises before contract</li>
        <li><strong>Tax assessment confirmed</strong> — current and prior year, any pending assessments</li>
        <li><strong>HOA/easements/restrictions reviewed</strong> — confirmed compatible with intended use</li>
        <li><strong>Pre-approval letter ready</strong> — current within 30 days, dollar amount appropriate</li>
        <li><strong>Walk-away number written down</strong> — and sealed before opening offer is sent</li>
        <li><strong>Closing attorney identified</strong> — Alabama-licensed, prior experience with Aaron preferred</li>
        <li><strong>Earnest money source confirmed</strong> — funds liquid and ready to wire within 48 hours</li>
      </ul>
    </section>

    <!-- SECTION 9: NEXT ACTIONS -->
    <section class="section">
      <h2 class="section-title"><span class="first">Next</span> <span class="rest">Actions for Aaron</span></h2>
      <div class="two-col">
        <div class="sub-card gold">
          <h4>This Week</h4>
          <ul>
            <li>Engage buyer's agent or proceed direct — confirm representation</li>
            <li>Pull MLS comps and price history on 4505 Buttewoods</li>
            <li>Schedule first walk-through</li>
            <li>Confirm pre-approval letter is current</li>
          </ul>
        </div>
        <div class="sub-card cyan">
          <h4>Before First Offer</h4>
          <ul>
            <li>Complete second walk with contractor</li>
            <li>Order title prelim through closing attorney</li>
            <li>Set and seal walk-away number</li>
            <li>Draft offer letter using cover note above</li>
          </ul>
        </div>
      </div>
    </section>

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
    <div class="nu-footer-meta">
      Internal Action Plan · 4505 Buttewoods Estate Acquisition · Generated for Aaron C. Norris
    </div>
  </footer>

</body>
</html>