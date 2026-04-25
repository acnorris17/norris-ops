<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Brief — 4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-success: #1B7F4E;
      --nu-warn: #B8860B;
      --nu-alert: #C0392B;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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

    /* TITLE BAND */
    .nu-title-band {
      background: var(--nu-white);
      padding: 40px 40px 24px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-doc-eyebrow {
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.35em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-sub {
      font-weight: 400;
      font-size: 1rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }
    .nu-meta-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .nu-meta-row strong { color: var(--nu-dark-text); }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 30px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .nu-section { margin-bottom: 40px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      letter-spacing: -0.005em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 56px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 18px;
      border-radius: 2px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card + .nu-card { margin-top: 16px; }

    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* PROPERTY SUMMARY GRID */
    .nu-prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
    }
    .nu-prop-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 4px;
    }
    .nu-prop-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-prop-cell .value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .nu-prop-cell .sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGE STEP LIST */
    .nu-step {
      display: flex;
      gap: 14px;
      align-items: stretch;
      margin-bottom: 12px;
    }
    .nu-step-num {
      flex-shrink: 0;
      width: 54px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
    }
    .nu-step-body {
      flex: 1;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 0 6px 6px 0;
      padding: 14px 18px;
    }
    .nu-step-body h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-step-body p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-table th {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 12px 14px;
      text-align: left;
    }
    .nu-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table .total td {
      background: #eef3ff !important;
      font-weight: 900;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }

    /* RISK / PRO ROWS */
    .nu-twocol {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .nu-list-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
    }
    .nu-list-card.pro { border-top: 4px solid var(--nu-success); }
    .nu-list-card.risk { border-top: 4px solid var(--nu-alert); }
    .nu-list-card h3 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-list-card.pro h3 { color: var(--nu-success); }
    .nu-list-card.risk h3 { color: var(--nu-alert); }
    .nu-list-card ul { list-style: none; }
    .nu-list-card li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      font-size: 0.93rem;
      line-height: 1.55;
    }
    .nu-list-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 8px;
    }
    .nu-ladder .rung {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px;
      text-align: center;
      position: relative;
    }
    .nu-ladder .rung .stage {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-ladder .rung .price {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
    }
    .nu-ladder .rung .ppsf {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }
    .nu-ladder .rung.target {
      background: linear-gradient(135deg, #f7faff 0%, #eef3ff 100%);
      border: 2px solid var(--nu-blue);
    }
    .nu-ladder .rung.walk { opacity: 0.92; }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 22px 26px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .nu-callout .mark {
      flex-shrink: 0;
      width: 40px; height: 40px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.3rem;
      display: flex; align-items: center; justify-content: center;
    }
    .nu-callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .nu-callout p { color: rgba(255,255,255,0.92); font-size: 0.95rem; }

    /* CHECKLIST */
    .nu-check ul { list-style: none; }
    .nu-check li {
      padding: 10px 0 10px 30px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-check li:last-child { border-bottom: none; }
    .nu-check li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-footer-mark {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .nu-twocol { grid-template-columns: 1fr; }
      .nu-ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-doc-title { font-size: 1.5rem; }
      .nu-content-area { padding: 30px 20px; }
      .nu-title-band { padding: 30px 20px 20px; }
      .nu-step-num { width: 44px; font-size: 1.1rem; }
      .nu-table th, .nu-table td { padding: 10px 8px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .nu-list-card, .nu-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
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
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- TITLE BAND -->
  <section class="nu-title-band">
    <div class="nu-doc-eyebrow">Action Brief — Principal / Confidential</div>
    <h1 class="nu-doc-title"><span>Negotiate Acquisition:</span> 4505 Buttewoods Estate (7,098 SF)</h1>
    <p class="nu-doc-sub">
      Working framework to evaluate, structure, and negotiate the purchase of the 7,098 sq ft estate at
      4505 Buttewoods. Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.
    </p>
    <div class="nu-meta-row">
      <div><strong>Prepared:</strong> April 25, 2026</div>
      <div><strong>Owner:</strong> Aaron C. Norris</div>
      <div><strong>Status:</strong> Negotiation Phase — Pre-Offer</div>
      <div><strong>Source:</strong> reMarkable Action Item</div>
    </div>
  </section>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- 1. PROPERTY SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Summary</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-prop-grid">
          <div class="nu-prop-cell">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Subject estate property</div>
          </div>
          <div class="nu-prop-cell">
            <div class="label">Heated Area</div>
            <div class="value">7,098 SF</div>
            <div class="sub">Per listing description</div>
          </div>
          <div class="nu-prop-cell">
            <div class="label">Property Type</div>
            <div class="value">Estate Residence</div>
            <div class="sub">Single-family, large lot</div>
          </div>
          <div class="nu-prop-cell">
            <div class="label">Use Case</div>
            <div class="value">Personal Residence</div>
            <div class="sub">Not a business asset of Norris Utilities®</div>
          </div>
        </div>
      </section>

      <!-- 2. NEGOTIATION OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Objective</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <h3>Primary Goal</h3>
          <p>
            Acquire 4505 Buttewoods at a price and on terms that protect long-term equity, preserve
            personal cash reserves needed for Norris Utilities® operations, and avoid creating a
            financial commitment that constrains the business through the next 18-month equipment cycle.
          </p>
          <p>
            Buy below replacement cost and below recent comparable sales per square foot. Walk away
            cleanly if the seller will not move on price, contingencies, or closing terms.
          </p>
        </div>
      </section>

      <!-- 3. PRE-OFFER DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Pre-Offer <span>Due Diligence</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-step">
          <div class="nu-step-num">01</div>
          <div class="nu-step-body">
            <h4>Verify Ownership &amp; Title History</h4>
            <p>Pull the recorded deed, plat map, and last three transfers from the county probate / land records office. Identify current titled owner, confirm no outstanding lis pendens, mechanic's liens, or unreleased mortgages.</p>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">02</div>
          <div class="nu-step-body">
            <h4>Comparable Sales (12-Month Window)</h4>
            <p>Run three sets of comps: (1) 6,500–7,500 SF homes within 3 miles, (2) homes in the same school zone, (3) estate properties on lots of comparable acreage. Establish a defensible per-SF range and median sale price.</p>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">03</div>
          <div class="nu-step-body">
            <h4>Tax Assessment vs. Asking Price</h4>
            <p>Pull current county tax appraisal. Compare to seller's asking price. Note any pending reassessment or millage rate change. This is a quiet leverage point in negotiation.</p>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">04</div>
          <div class="nu-step-body">
            <h4>Days on Market &amp; Price History</h4>
            <p>Document original list price, every reduction, total days on market, and any prior contracts that fell through. Each prior reduction is a documented seller concession ceiling.</p>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">05</div>
          <div class="nu-step-body">
            <h4>Physical Condition Pre-Walk</h4>
            <p>Walk the property before making an offer. Note roof age, HVAC count and age, foundation indicators, water staining, electrical panel age, septic vs. sewer, well vs. municipal water. These become contingency anchors.</p>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">06</div>
          <div class="nu-step-body">
            <h4>Seller Motivation Read</h4>
            <p>Determine why the seller is selling: relocation, downsizing, divorce, estate, financial distress. The reason directly informs how aggressive the opening offer can be and what non-price terms (closing date, leaseback, fixtures) will move the deal.</p>
          </div>
        </div>
      </section>

      <!-- 4. OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 14px;">
          A three-rung offer structure. Each rung must be set against verified comps. The walk-away
          number must be defined in writing <em>before</em> the first offer is submitted and must not
          be revised under emotional pressure during negotiation.
        </p>
        <div class="nu-ladder">
          <div class="rung">
            <div class="stage">Opening Offer</div>
            <div class="price">10–12% Below Ask</div>
            <div class="ppsf">Anchored to comp median per SF</div>
          </div>
          <div class="rung target">
            <div class="stage">Target Close</div>
            <div class="price">5–7% Below Ask</div>
            <div class="ppsf">Acceptable if condition is sound</div>
          </div>
          <div class="rung walk">
            <div class="stage">Walk-Away Ceiling</div>
            <div class="price">Ask Price, Firm</div>
            <div class="ppsf">No further movement above this</div>
          </div>
        </div>
      </section>

      <!-- 5. PRICE ANALYSIS PLACEHOLDER TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Price <span>Analysis Worksheet</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 14px;">
          Fill in once asking price and three comps are confirmed. Per-SF benchmarks decide the offer rungs.
        </p>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Line</th>
              <th>Item</th>
              <th class="num">Total</th>
              <th class="num">Per SF (7,098)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Seller asking price</td>
              <td class="num">— enter —</td>
              <td class="num">— calc —</td>
            </tr>
            <tr>
              <td>2</td>
              <td>County tax appraisal</td>
              <td class="num">— enter —</td>
              <td class="num">— calc —</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Comp A — closed sale</td>
              <td class="num">— enter —</td>
              <td class="num">— calc —</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Comp B — closed sale</td>
              <td class="num">— enter —</td>
              <td class="num">— calc —</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Comp C — closed sale</td>
              <td class="num">— enter —</td>
              <td class="num">— calc —</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Median comp $/SF benchmark</td>
              <td class="num">—</td>
              <td class="num">— calc —</td>
            </tr>
            <tr class="total">
              <td>7</td>
              <td>Indicated fair value (median × 7,098)</td>
              <td class="num">— calc —</td>
              <td class="num">—</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 6. NEGOTIATION LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Levers</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-twocol">
          <div class="nu-list-card pro">
            <h3>Buyer's Leverage</h3>
            <ul>
              <li>Pre-approval letter or proof of funds in hand at first offer.</li>
              <li>Flexible closing window — match the seller's timing precisely.</li>
              <li>Limited contingencies (well-defined inspection and financing only).</li>
              <li>Earnest money higher than typical to signal seriousness.</li>
              <li>Cash purchase, if structured, accelerates and lowers price expectation.</li>
              <li>Willingness to take property as-is on cosmetic items in exchange for price.</li>
            </ul>
          </div>
          <div class="nu-list-card risk">
            <h3>Risks &amp; Anti-Patterns</h3>
            <ul>
              <li>Bidding emotionally on a "dream property" without comp discipline.</li>
              <li>Tying up personal cash that Norris Utilities® may need for inventory or AR float.</li>
              <li>Waiving inspection on a 7,098 SF home — too much surface area for hidden defects.</li>
              <li>Accepting verbal seller concessions without written addenda.</li>
              <li>Underestimating carrying cost: insurance, taxes, utilities, maintenance reserve.</li>
              <li>Skipping a survey on an estate-sized lot — boundary issues are common.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 7. TERMS BEYOND PRICE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Terms <span>Beyond Price</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <h3>Negotiate These Even If Price is Locked</h3>
          <p>
            Price is one variable. Closing date, possession date, included fixtures and personal property,
            seller-paid closing costs, home warranty, repair credit at close, and the appraisal contingency
            language all carry real dollar value. Trade movement on these against price hold-firms.
          </p>
          <p>
            Specifically request: full inclusion of all built-ins, appliances, window treatments, generator,
            outdoor equipment, and any equipment that services the property. Itemize what stays in the
            contract. What is not in writing is not included.
          </p>
        </div>
      </section>

      <!-- 8. FINANCING SCENARIOS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Financing <span>Scenarios</span></h2>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Down</th>
              <th>Loan Type</th>
              <th>Closing Speed</th>
              <th>Negotiating Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash</td>
              <td>100%</td>
              <td>None</td>
              <td>14–21 days</td>
              <td>Strongest — expect 3–8% price concession</td>
            </tr>
            <tr>
              <td>Conventional, 20% down</td>
              <td>20%</td>
              <td>Jumbo conventional</td>
              <td>30–45 days</td>
              <td>Standard — appraisal contingency required</td>
            </tr>
            <tr>
              <td>Portfolio loan (Renasant — Patrick Lavette)</td>
              <td>20–25%</td>
              <td>Bank-held</td>
              <td>30–45 days</td>
              <td>Strong — faster, fewer underwriting surprises</td>
            </tr>
            <tr>
              <td>Bridge / interim</td>
              <td>Varies</td>
              <td>Short-term, replaced post-close</td>
              <td>21–30 days</td>
              <td>Useful only if existing assets must liquidate</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 9. BUSINESS-IMPACT GUARDRAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title">Business <span>Guardrail</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-callout">
          <div class="mark">!</div>
          <div>
            <h3>Protect Norris Utilities® Cash Position</h3>
            <p>
              This is a personal acquisition. It must not draw from the working capital that supports
              Norris Utilities® inventory commitments, the open Skylift PO, FlexPro Armor production
              float, or Samson Rope distributor terms. Set a hard line on personal cash deployed and
              honor it. If the deal requires breaking that line, the deal is wrong — not the line.
            </p>
          </div>
        </div>
      </section>

      <!-- 10. OFFER-DAY CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer-Day <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card nu-check">
          <ul>
            <li>Walk-away price written down before any offer is sent.</li>
            <li>Three closed comps verified and documented.</li>
            <li>Pre-approval or proof of funds attached to offer.</li>
            <li>Inspection contingency language reviewed by attorney.</li>
            <li>Earnest money amount and escrow holder confirmed.</li>
            <li>Closing date, possession date, and fixtures list itemized in writing.</li>
            <li>Seller-paid closing cost ask included as a fallback price lever.</li>
            <li>Survey and title commitment ordered upon contract acceptance.</li>
            <li>Insurance quote obtained before removing inspection contingency.</li>
            <li>Final number reviewed against business-cash guardrail one more time.</li>
          </ul>
        </div>
      </section>

      <!-- 11. NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Next <span>Actions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <h3>Immediate (this week)</h3>
          <p>
            • Pull county records on 4505 Buttewoods (deed, tax appraisal, prior transfers).<br>
            • Identify three closed comparable sales in the past 12 months.<br>
            • Schedule a discreet drive-by and a formal walkthrough.<br>
            • Phone Patrick Lavette at Renasant Bank to confirm portfolio-loan parameters.<br>
            • Set the walk-away ceiling in writing and lock it.
          </p>
        </div>
        <div class="nu-card">
          <h3>Then (within 14 days)</h3>
          <p>
            • Submit opening offer at 10–12% below ask with documented comp support.<br>
            • Negotiate in writing only — no verbal concessions accepted.<br>
            • Hold the line on the walk-away number; trade non-price terms instead.<br>
            • Engage a real estate attorney to review the purchase agreement before signing.
          </p>
        </div>
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
    <div class="nu-footer-mark">
      Confidential working document — prepared for Aaron C. Norris. Not for distribution.
    </div>
  </footer>

</body>
</html>