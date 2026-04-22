<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
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
      --nu-success: #1a7a3e;
      --nu-warning: #C9A84C;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* ══ PAGE TITLE BAR ══ */
    .page-title-bar {
      background: var(--nu-white);
      padding: 40px 40px 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .page-title-inner {
      max-width: 1100px;
      margin: 0 auto;
    }
    .page-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .page-title {
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .page-title span {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .page-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 18px;
    }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      border: 1px solid var(--nu-medium-gray);
    }
    .meta-pill.status-open {
      background: #fff5e6;
      color: #8a5a00;
      border-color: #ffdca3;
    }
    .meta-pill.priority-high {
      background: #fde8e8;
      color: var(--nu-danger);
      border-color: #f5b5b5;
    }

    /* ══ MAIN CONTENT ══ */
    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 40px 60px;
    }

    .section {
      margin-bottom: 40px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 4px;
      letter-spacing: -0.01em;
    }
    .section-title .first-word {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
    }
    .section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 20px;
      border-radius: 2px;
    }

    /* ══ PROPERTY CARD ══ */
    .property-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }

    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
      margin-top: 8px;
    }
    .property-stat {
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-cyan);
    }
    .property-stat .label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-body-text);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .property-stat .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .property-stat .unit {
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-left: 4px;
    }

    .address-block {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.5;
      padding: 16px 20px;
      background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.04));
      border-radius: 8px;
      border-left: 4px solid var(--nu-blue);
    }
    .address-block .label {
      display: block;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    /* ══ NEGOTIATION STRATEGY ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .strategy-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .strategy-card h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .strategy-card .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .strategy-card ul {
      list-style: none;
      padding: 0;
    }
    .strategy-card li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .strategy-card li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1.2;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child {
      border-bottom: none;
    }
    .checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist-item .text {
      flex: 1;
    }
    .checklist-item .task {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .checklist-item .note {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ VALUATION TABLE ══ */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .val-table th {
      background: linear-gradient(135deg, var(--nu-navy), #0a0e5c);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 20px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .val-table td {
      padding: 14px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .val-table tr:last-child td {
      border-bottom: none;
    }
    .val-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .val-table .num {
      font-weight: 700;
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .val-table .highlight {
      background: linear-gradient(135deg, rgba(0,0,255,0.06), rgba(6,208,255,0.06)) !important;
      font-weight: 900;
    }

    /* ══ ALERT BOX ══ */
    .alert {
      background: linear-gradient(135deg, #fff8e6, #fff3d6);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 20px 0;
    }
    .alert .title {
      font-weight: 900;
      color: #8a5a00;
      font-size: 0.95rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .alert p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ CONTEXT NOTE ══ */
    .context-note {
      background: linear-gradient(135deg, rgba(0,0,255,0.03), rgba(6,208,255,0.03));
      border: 1px solid rgba(0,0,255,0.12);
      border-radius: 8px;
      padding: 20px 24px;
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }
    .context-note strong {
      color: var(--nu-blue);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-brand {
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-white);
      margin-bottom: 4px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .page-title-bar { padding: 28px 20px 18px; }
      .page-title { font-size: 1.7rem; }
      main { padding: 28px 20px 40px; }
      .property-card { padding: 22px; }
      .checklist { padding: 22px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .strategy-card, .property-card, .checklist { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- PAGE TITLE BAR -->
  <div class="page-title-bar">
    <div class="page-title-inner">
      <div class="page-eyebrow">Action Item · reMarkable Capture</div>
      <h1 class="page-title">Negotiate <span>Estate Acquisition</span><br>4505 Buttewoods &mdash; 7,098 sq ft</h1>
      <div class="page-subtitle">Strategy brief &amp; negotiation framework for a seven-thousand square foot residential estate purchase.</div>
      <div class="page-meta">
        <span class="meta-pill status-open">Status: Open</span>
        <span class="meta-pill priority-high">Priority: High</span>
        <span class="meta-pill">Owner: Aaron C. Norris</span>
        <span class="meta-pill">Captured: 2026-04-21</span>
        <span class="meta-pill">Source: reMarkable</span>
      </div>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main>

    <!-- PROPERTY OVERVIEW -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Property</span> <span class="rest">Overview</span></h2>
      <div class="section-rule"></div>

      <div class="property-card">
        <div class="address-block">
          <span class="label">Subject Property</span>
          4505 Buttewoods
        </div>

        <div class="property-grid">
          <div class="property-stat">
            <div class="label">Total Living Area</div>
            <div class="value">7,098<span class="unit">sq ft</span></div>
          </div>
          <div class="property-stat">
            <div class="label">Property Type</div>
            <div class="value">Estate</div>
          </div>
          <div class="property-stat">
            <div class="label">Transaction</div>
            <div class="value">Purchase</div>
          </div>
          <div class="property-stat">
            <div class="label">Stage</div>
            <div class="value">Negotiation</div>
          </div>
        </div>

        <div class="alert" style="margin-top: 24px; margin-bottom: 0;">
          <div class="title">Data to Confirm Before First Offer</div>
          <p>Asking price, lot size, year built, listing agent, current listing status (on-market vs. off-market), HOA, annual taxes, and any existing offers on the table. Pull the full MLS sheet and the most recent appraisal district record before writing the letter of intent.</p>
        </div>
      </div>
    </section>

    <!-- CONTEXT -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Deal</span> <span class="rest">Context</span></h2>
      <div class="section-rule"></div>

      <div class="context-note">
        <p>This action item was captured from the reMarkable tablet as part of Aaron&rsquo;s working-notes pipeline. A 7,098 sq ft residence sits near the upper end of the regional luxury bracket, which means the negotiation will be driven as much by <strong>financing terms, contingencies, and closing speed</strong> as by headline price. The seller&rsquo;s motivation &mdash; job relocation, estate sale, divorce, downsizing, or discretionary move &mdash; typically determines whether price or terms carries the most weight.</p>
        <br>
        <p>Approach this the same way Norris Utilities&reg; approaches equipment acquisitions: <strong>quiet diligence first, firm offer second, no public counter-bids.</strong> Buttewoods-caliber properties rarely trade twice in a decade &mdash; the goal is to be the obvious and easiest closer, not the highest bidder caught in a frenzy.</p>
      </div>
    </section>

    <!-- NEGOTIATION STRATEGY -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Negotiation</span> <span class="rest">Strategy</span></h2>
      <div class="section-rule"></div>

      <div class="strategy-grid">

        <div class="strategy-card">
          <h3><span class="num">1</span> Establish Independent Value</h3>
          <ul>
            <li>Pull three closed comparable sales within twelve months, same school zone, same square-footage band (6,500&ndash;7,800 sq ft)</li>
            <li>Calculate price-per-square-foot range and flag the listing&rsquo;s position against the median</li>
            <li>Order or request a pre-offer appraisal if the asking price exceeds the comp median by more than eight percent</li>
            <li>Document days-on-market and any prior price reductions &mdash; leverage every cut</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h3><span class="num">2</span> Read the Seller</h3>
          <ul>
            <li>Identify the listing agent and request a seller disclosure packet before drafting an offer</li>
            <li>Ask directly: timeline, reason for sale, flexibility on close date, leaseback need</li>
            <li>Check whether the home has been listed previously and withdrawn &mdash; prior failed deals signal price elasticity</li>
            <li>Match the terms to the pain point: a relocating seller values a fast close more than an extra 2% on price</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h3><span class="num">3</span> Opening Offer Construction</h3>
          <ul>
            <li>Open at 88&ndash;92% of ask when days-on-market exceeds 45; open at 95&ndash;97% when fresh listing with comparable closed sales supporting</li>
            <li>Lead with proof-of-funds or a pre-approval letter attached to the offer &mdash; removes seller financing concern up front</li>
            <li>Keep contingencies tight: inspection and appraisal, not financing if cash or rate-locked</li>
            <li>Attach a short personal cover letter where legally permitted &mdash; the Norris Utilities&reg; brand and three-generation Alabama story land well with owner-occupants</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h3><span class="num">4</span> Inspection &amp; Due Diligence</h3>
          <ul>
            <li>Full home inspection plus dedicated specialty inspections: HVAC (multi-zone on a 7K sq ft build), roof, foundation, pool/outdoor systems</li>
            <li>Sewer scope and any private well/septic if applicable</li>
            <li>Prior-permit and renovation history pull from the county &mdash; unpermitted additions on large homes are common and expensive</li>
            <li>Use inspection findings surgically: one consolidated concession request, never a nibble-list</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h3><span class="num">5</span> Closing Costs &amp; Terms Levers</h3>
          <ul>
            <li>Seller-paid closing costs (3&ndash;5% of price) often easier to concede than a headline price cut</li>
            <li>Extended or rent-back close can replace a discount for relocation sellers</li>
            <li>Property-tax proration, HOA transfer fees, and home-warranty cost are seller-side asks that rarely break a deal</li>
            <li>Flexible earnest money release language signals seriousness without raising price</li>
          </ul>
        </div>

        <div class="strategy-card">
          <h3><span class="num">6</span> Walk-Away Discipline</h3>
          <ul>
            <li>Pre-set a hard ceiling price &mdash; write it down, share it with no one, do not move it mid-negotiation</li>
            <li>Pre-set a hard &ldquo;terms floor&rdquo; &mdash; inspection waiver, as-is, or no appraisal contingency are not negotiable here</li>
            <li>If the listing returns to market within 60 days after walking, re-engage from a stronger position</li>
            <li>Same discipline that governs equipment deals: no deal is better than a bad deal</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- VALUATION FRAMEWORK -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Valuation</span> <span class="rest">Framework</span></h2>
      <div class="section-rule"></div>

      <table class="val-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th style="text-align: right;">% of Ask</th>
            <th>Rationale</th>
            <th>Terms Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aggressive Open (stale listing)</td>
            <td class="num">88&ndash;90%</td>
            <td>45+ DOM, one prior price cut, below-median comps</td>
            <td>Standard contingencies, 30&ndash;45 day close</td>
          </tr>
          <tr>
            <td>Market Open (normal listing)</td>
            <td class="num">93&ndash;95%</td>
            <td>Under 30 DOM, comps support ask within 5%</td>
            <td>Tight inspection window, proof of funds up front</td>
          </tr>
          <tr>
            <td>Competitive Open (hot listing)</td>
            <td class="num">98&ndash;100%</td>
            <td>Fresh listing, multiple-offer situation, comps tight</td>
            <td>Escalation clause capped, appraisal gap limit set</td>
          </tr>
          <tr class="highlight">
            <td>Target Final Price Band</td>
            <td class="num">92&ndash;96%</td>
            <td>Where most Buttewoods-caliber estates settle when negotiated with discipline</td>
            <td>Seller credits preferred over price reduction</td>
          </tr>
          <tr>
            <td>Walk-Away Threshold</td>
            <td class="num">&gt; Ceiling</td>
            <td>Price exceeds pre-set ceiling OR terms erode inspection/appraisal protection</td>
            <td>Written withdrawal, cordial, leave door open</td>
          </tr>
        </tbody>
      </table>

      <div class="alert">
        <div class="title">Rule of Thumb on a 7,098 sq ft Estate</div>
        <p>Every 1% on price is meaningful dollars. On a seven-figure home, a single percentage point often exceeds $10,000&mdash;$20,000. Fight harder on terms (closing costs, repair credits, rent-back) than on headline price once you&rsquo;re inside the 93&ndash;97% zone; sellers&rsquo; agents protect face on the number more than on the net.</p>
      </div>
    </section>

    <!-- ACTION CHECKLIST -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Action</span> <span class="rest">Checklist</span></h2>
      <div class="section-rule"></div>

      <div class="checklist">

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Confirm current listing status and asking price</div>
            <div class="note">MLS pull or direct call to listing agent. Verify whether on-market, off-market, or pocket listing.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Order full comparable-sales report</div>
            <div class="note">Three closed sales in last 12 months, same zone, 6,500&ndash;7,800 sq ft band. Buyer&rsquo;s agent or direct MLS access.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Pull county property records</div>
            <div class="note">Appraisal district card, permit history, tax assessment trajectory, recorded liens, HOA bylaws.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Secure financing position</div>
            <div class="note">Pre-approval letter or proof-of-funds document ready to attach to the first offer. Patrick Lavette at Renasant Bank on standby.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Engage buyer&rsquo;s agent and real-estate attorney</div>
            <div class="note">Dual representation risk on a property this size &mdash; use independent buyer&rsquo;s agent and attorney review on the contract.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Set hard ceiling price and terms floor</div>
            <div class="note">Written, private, non-negotiable. This is the single most important step &mdash; discipline beats emotion on every deal.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Draft letter of intent / initial offer</div>
            <div class="note">Open in the appropriate band (see Valuation Framework). Attach financing proof. Personal cover letter where permitted.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Schedule inspections on signed contract</div>
            <div class="note">General, HVAC, roof, foundation, sewer scope, pool/outdoor systems. Book within 72 hours of acceptance.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Consolidate inspection findings into single concession request</div>
            <div class="note">One clean ask &mdash; repair credits or price reduction &mdash; never a list of small items that irritates the seller.</div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="text">
            <div class="task">Lock appraisal, title, and close date</div>
            <div class="note">Title search, survey where needed, final walk-through 24&ndash;48 hours before close. Funds wired day-of.</div>
          </div>
        </div>

      </div>
    </section>

    <!-- RISK WATCHLIST -->
    <section class="section">
      <h2 class="section-title"><span class="first-word">Risk</span> <span class="rest">Watchlist</span></h2>
      <div class="section-rule"></div>

      <div class="strategy-grid">
        <div class="strategy-card" style="border-top-color: var(--nu-danger);">
          <h3><span class="num" style="background: var(--nu-danger);">!</span> Appraisal Gap</h3>
          <ul>
            <li>On homes over 6,000 sq ft, appraisals frequently come in below contract price</li>
            <li>Pre-set appraisal gap coverage maximum &mdash; typically 1&ndash;2% of price</li>
            <li>If gap exceeds ceiling, walk or renegotiate &mdash; do not stretch</li>
          </ul>
        </div>

        <div class="strategy-card" style="border-top-color: var(--nu-danger);">
          <h3><span class="num" style="background: var(--nu-danger);">!</span> Hidden Deferred Maintenance</h3>
          <ul>
            <li>Large homes accumulate expensive deferred maintenance &mdash; roofs, HVAC, pools, outbuildings</li>
            <li>Budget 1&ndash;1.5% of purchase price annually for maintenance reserves</li>
            <li>Inspection contingency is non-negotiable on a property this size</li>
          </ul>
        </div>

        <div class="strategy-card" style="border-top-color: var(--nu-warning);">
          <h3><span class="num" style="background: var(--nu-warning);">!</span> Tax Reassessment Post-Close</h3>
          <ul>
            <li>Purchase price often triggers reassessment that raises annual taxes significantly</li>
            <li>Model out three-year tax trajectory before finalizing offer</li>
            <li>Protest rights and homestead exemption timing matter</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- NEXT STEP -->
    <section class="section" style="margin-bottom: 10px;">
      <h2 class="section-title"><span class="first-word">Next</span> <span class="rest">Step</span></h2>
      <div class="section-rule"></div>

      <div class="property-card" style="margin-bottom: 0;">
        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--nu-dark-text);">
          <strong style="color: var(--nu-blue);">Immediate action:</strong> Confirm the Buttewoods listing source and current asking price, then pull the three closed comparable sales. Until both are in hand, no offer should be drafted. Target completion of the full pre-offer diligence package within <strong>five business days</strong> of this brief, aligned with the &ldquo;quiet diligence first, firm offer second&rdquo; principle that guides every Norris Utilities&reg; acquisition.
        </p>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-brand">Norris Utilities®, LLC</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>