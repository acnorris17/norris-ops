<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan: 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-warning: #C9701A;
      --nu-danger: #B91C1C;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 0 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 24px;
      margin-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-left {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .doc-meta-left .label {
      color: var(--nu-blue);
    }
    .doc-status {
      display: inline-block;
      padding: 6px 16px;
      background: var(--nu-warning);
      color: white;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
    }

    /* HERO TITLE */
    .hero-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .hero-title .accent {
      color: var(--nu-blue);
    }
    .hero-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 36px;
      max-width: 800px;
    }

    /* PROPERTY SUMMARY CARD */
    .property-summary {
      background: linear-gradient(135deg, #f8f9ff 0%, #eaf2ff 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
    }
    .summary-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
      display: block;
    }
    .summary-cell .value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .summary-cell .value-large {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* SECTION */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .section-title .first {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border: none;
    }

    /* PHASE TIMELINE */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .phase-card .phase-num {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .phase-card h3 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.25;
    }
    .phase-card .timeframe {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .phase-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 0.92rem;
    }
    .phase-card ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
      line-height: 1.45;
    }
    .phase-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.1rem;
      line-height: 1.3;
    }

    /* DUE DILIGENCE TABLE */
    .dd-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .dd-table thead {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .dd-table thead th {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .dd-table tbody tr {
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .dd-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .dd-table tbody tr:last-child {
      border-bottom: none;
    }
    .dd-table tbody td {
      padding: 13px 18px;
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      vertical-align: top;
    }
    .dd-table tbody td:first-child {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .priority-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pri-critical { background: #fdecec; color: var(--nu-danger); }
    .pri-high { background: #fef3e6; color: var(--nu-warning); }
    .pri-standard { background: #e6f4ee; color: var(--nu-success); }

    /* NEGOTIATION STRATEGY */
    .strategy-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .strategy-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .strategy-block.opening {
      border-left: 5px solid var(--nu-blue);
    }
    .strategy-block.target {
      border-left: 5px solid var(--nu-success);
    }
    .strategy-block.walkaway {
      border-left: 5px solid var(--nu-danger);
    }
    .strategy-block.fallback {
      border-left: 5px solid var(--nu-warning);
    }
    .strategy-block h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .strategy-block .strategy-amount {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .strategy-block p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* LEVERAGE POINTS */
    .leverage-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 8px 0;
    }
    .leverage-item {
      display: flex;
      align-items: flex-start;
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .leverage-item:last-child { border-bottom: none; }
    .leverage-num {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 16px;
    }
    .leverage-content h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .leverage-content p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border-radius: 8px;
      padding: 28px 32px;
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dashed rgba(0,0,255,0.15);
      font-size: 0.95rem;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 36px 0 8px;
      position: relative;
      overflow: hidden;
    }
    .callout::before {
      content: '';
      position: absolute;
      top: -50px; right: -30px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .callout h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
      position: relative;
    }
    .callout p {
      font-size: 1.05rem;
      line-height: 1.55;
      position: relative;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
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
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 0 22px; }
      .hero-title { font-size: 1.7rem; }
      .strategy-grid { grid-template-columns: 1fr; }
      .dd-table thead { display: none; }
      .dd-table tbody td { display: block; padding: 8px 18px; }
      .dd-table tbody td:first-child { padding-top: 16px; }
      .dd-table tbody td:last-child { padding-bottom: 16px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .strategy-block, .checklist { box-shadow: none; }
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
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-left">
          <span class="label">Action Plan</span> &nbsp;|&nbsp; Real Estate Acquisition &nbsp;|&nbsp; Prepared 04.22.2026
        </div>
        <div class="doc-status">In Negotiation</div>
      </div>

      <!-- HERO -->
      <h1 class="hero-title">
        <span class="accent">Negotiate the Acquisition</span> of 4505 Buttewoods — 7,098 sq ft Estate
      </h1>
      <p class="hero-subtitle">
        Structured negotiation, due diligence, and closing roadmap for the 7,098 square foot estate at 4505 Buttewoods. Originated as a reMarkable action item; expanded into a complete acquisition workflow with discovery, valuation, leverage, and execution phases.
      </p>

      <!-- PROPERTY SUMMARY -->
      <div class="property-summary">
        <div class="summary-cell">
          <span class="label">Address</span>
          <span class="value">4505 Buttewoods</span>
        </div>
        <div class="summary-cell">
          <span class="label">Living Area</span>
          <span class="value-large">7,098 sq ft</span>
        </div>
        <div class="summary-cell">
          <span class="label">Asset Class</span>
          <span class="value">Estate Residence</span>
        </div>
        <div class="summary-cell">
          <span class="label">Acquisition Mode</span>
          <span class="value">Direct Negotiation</span>
        </div>
        <div class="summary-cell">
          <span class="label">Lead Negotiator</span>
          <span class="value">Aaron C. Norris</span>
        </div>
      </div>

      <!-- PHASE 1: DISCOVERY -->
      <section class="section">
        <h2 class="section-title"><span class="first">Phase</span> <span class="rest">Roadmap</span></h2>
        <hr class="section-rule">
        <div class="phase-grid">

          <div class="phase-card">
            <div class="phase-num">Phase 01</div>
            <div class="timeframe">Days 1 – 5</div>
            <h3>Property &amp; Seller Discovery</h3>
            <ul>
              <li>Pull tax record, deed history, plat map for 4505 Buttewoods</li>
              <li>Identify current owner, mortgage holder, motivation to sell</li>
              <li>Confirm 7,098 sq ft figure against county records</li>
              <li>Note days on market, prior listing history, price drops</li>
            </ul>
          </div>

          <div class="phase-card">
            <div class="phase-num">Phase 02</div>
            <div class="timeframe">Days 4 – 8</div>
            <h3>Comparative Valuation</h3>
            <ul>
              <li>Pull 5 recent comps within 1.5 mi, 5,500 – 8,500 sq ft</li>
              <li>Compute price per sq ft band (low / mid / high)</li>
              <li>Order independent appraisal with negotiation in mind</li>
              <li>Run rental + carry-cost model for Plan B hold scenario</li>
            </ul>
          </div>

          <div class="phase-card">
            <div class="phase-num">Phase 03</div>
            <div class="timeframe">Days 7 – 14</div>
            <h3>Walk-Through &amp; Defect List</h3>
            <ul>
              <li>On-site walk with contractor — roof, HVAC, foundation, water</li>
              <li>Build a written defect / deferred maintenance log</li>
              <li>Photograph every condition issue used for price reduction</li>
              <li>Confirm acreage, fence lines, easements, encroachments</li>
            </ul>
          </div>

          <div class="phase-card">
            <div class="phase-num">Phase 04</div>
            <div class="timeframe">Days 10 – 20</div>
            <h3>Offer Construction</h3>
            <ul>
              <li>Set opening offer, target close, walk-away ceiling</li>
              <li>Decide cash vs. financed presentation strategy</li>
              <li>Draft LOI with inspection &amp; financing contingencies</li>
              <li>Pre-clear funding source — bank or escrow letter ready</li>
            </ul>
          </div>

          <div class="phase-card">
            <div class="phase-num">Phase 05</div>
            <div class="timeframe">Days 18 – 30</div>
            <h3>Negotiation Cycles</h3>
            <ul>
              <li>Submit offer in writing — never verbal as the lead anchor</li>
              <li>Anchor on defect list, comps, and time-on-market data</li>
              <li>Run two counter cycles maximum before walk pause</li>
              <li>Hold leverage in reserve — never spend it on round one</li>
            </ul>
          </div>

          <div class="phase-card">
            <div class="phase-num">Phase 06</div>
            <div class="timeframe">Days 28 – 60</div>
            <h3>Contract &amp; Closing</h3>
            <ul>
              <li>Title search through Renasant — Patrick Lavette as banker</li>
              <li>Schedule formal inspection — re-trade window if defects found</li>
              <li>Survey, insurance binder, HOA &amp; covenant review</li>
              <li>Wire instructions verified by phone before any transfer</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- DUE DILIGENCE TABLE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Due</span> <span class="rest">Diligence Punch List</span></h2>
        <hr class="section-rule">
        <table class="dd-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>What to Verify</th>
              <th>Source</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Clear chain of title; no liens, judgments, or unreleased deeds of trust</td>
              <td>County recorder; title company</td>
              <td><span class="priority-tag pri-critical">Critical</span></td>
            </tr>
            <tr>
              <td>Tax Status</td>
              <td>Property taxes current, no special assessments pending</td>
              <td>County tax assessor</td>
              <td><span class="priority-tag pri-critical">Critical</span></td>
            </tr>
            <tr>
              <td>Square Footage</td>
              <td>Confirm 7,098 sq ft per county records vs. listing claim</td>
              <td>Tax card &amp; survey</td>
              <td><span class="priority-tag pri-high">High</span></td>
            </tr>
            <tr>
              <td>Roof &amp; Envelope</td>
              <td>Age of roof, signs of leak, gutters, chimney, soffit condition</td>
              <td>Walk-through + inspector</td>
              <td><span class="priority-tag pri-high">High</span></td>
            </tr>
            <tr>
              <td>HVAC</td>
              <td>System age, capacity for 7,098 sq ft, recent service records</td>
              <td>HVAC technician inspection</td>
              <td><span class="priority-tag pri-high">High</span></td>
            </tr>
            <tr>
              <td>Foundation &amp; Drainage</td>
              <td>Settling cracks, grading away from structure, water intrusion history</td>
              <td>Structural engineer if flagged</td>
              <td><span class="priority-tag pri-critical">Critical</span></td>
            </tr>
            <tr>
              <td>Plumbing &amp; Electrical</td>
              <td>Panel capacity, GFCI compliance, copper vs. polybutylene</td>
              <td>Licensed inspectors</td>
              <td><span class="priority-tag pri-high">High</span></td>
            </tr>
            <tr>
              <td>Survey &amp; Easements</td>
              <td>Confirm boundaries, utility easements, no encroachments</td>
              <td>Licensed surveyor</td>
              <td><span class="priority-tag pri-standard">Standard</span></td>
            </tr>
            <tr>
              <td>HOA / Covenants</td>
              <td>Active HOA dues, restrictive covenants, architectural approval rules</td>
              <td>HOA documents request</td>
              <td><span class="priority-tag pri-standard">Standard</span></td>
            </tr>
            <tr>
              <td>Insurance Quote</td>
              <td>Bind-able quote — roof age &amp; claims history can derail closing</td>
              <td>Carrier of record</td>
              <td><span class="priority-tag pri-high">High</span></td>
            </tr>
            <tr>
              <td>Comparable Sales</td>
              <td>Five closed sales in last 90 days, 5,500 – 8,500 sq ft, 1.5 mi radius</td>
              <td>MLS / appraiser</td>
              <td><span class="priority-tag pri-critical">Critical</span></td>
            </tr>
            <tr>
              <td>Appraisal</td>
              <td>Independent valuation; bank appraisal if financing</td>
              <td>Licensed appraiser</td>
              <td><span class="priority-tag pri-critical">Critical</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="section">
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Framework</span></h2>
        <hr class="section-rule">
        <p style="margin-bottom:20px; max-width:780px; color:var(--nu-body-text);">
          Anchor pricing on the appraisal and comp band — never on the listing price. The goal is a defensible offer supported by data, not a guess. The four anchor points below get filled in once the appraisal and comp pull are complete.
        </p>
        <div class="strategy-grid">
          <div class="strategy-block opening">
            <h4>Opening Offer</h4>
            <div class="strategy-amount">Low end of comp band</div>
            <p>Submit written offer at the lower bound of the verified comparable sales range. Cite appraisal, defect list, and days on market in the offer letter. Always leave verbal room for negotiation.</p>
          </div>
          <div class="strategy-block target">
            <h4>Target Close</h4>
            <div class="strategy-amount">5–8% below appraisal</div>
            <p>Settle range that delivers immediate equity on close. This is the band where the deal still works after defect-list credits, closing costs, and any required deferred maintenance.</p>
          </div>
          <div class="strategy-block fallback">
            <h4>Fallback Position</h4>
            <div class="strategy-amount">At appraisal</div>
            <p>If pushed, accept appraised value only with seller-paid closing costs, repair credits, or rate buy-down concessions. Concession value must equal at least 3% of price.</p>
          </div>
          <div class="strategy-block walkaway">
            <h4>Walk-Away Ceiling</h4>
            <div class="strategy-amount">Above appraisal = walk</div>
            <p>If seller refuses to come below appraised value with no concessions, exit cleanly and in writing. Walk leverage is the strongest signal in any negotiation — preserve credibility for a possible re-engagement.</p>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Leverage</span> <span class="rest">Points to Press</span></h2>
        <hr class="section-rule">
        <div class="leverage-list">
          <div class="leverage-item">
            <div class="leverage-num">1</div>
            <div class="leverage-content">
              <h4>Days on Market</h4>
              <p>Every week past 60 days strengthens the buyer position. Pull MLS history and document every price reduction in the offer cover letter.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">2</div>
            <div class="leverage-content">
              <h4>Defect Inventory</h4>
              <p>A photo-documented punch list converts vague concerns into hard dollar credits. Every defect = a justified line item against the offer price.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">3</div>
            <div class="leverage-content">
              <h4>Carrying Cost Math</h4>
              <p>A 7,098 sq ft estate carries serious tax, insurance, utility, and HOA costs monthly. Sellers feel the burn — patience is leverage.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">4</div>
            <div class="leverage-content">
              <h4>Funding Certainty</h4>
              <p>Pre-cleared financing or proof of funds from Renasant / Patrick Lavette removes seller risk and justifies a lower price. Closing certainty has measurable value.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">5</div>
            <div class="leverage-content">
              <h4>Quick Close Option</h4>
              <p>Offering 21-day close vs. 45-day standard is worth real concessions when the seller is carrying two properties or staring down a deadline.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">6</div>
            <div class="leverage-content">
              <h4>Limited Contingencies</h4>
              <p>Clean offers with only inspection and financing contingencies beat higher offers loaded with appraisal, sale-of-home, and review clauses.</p>
            </div>
          </div>
          <div class="leverage-item">
            <div class="leverage-num">7</div>
            <div class="leverage-content">
              <h4>Walk Credibility</h4>
              <p>The willingness to walk — and follow through — is the single biggest factor in price recovery. The strongest move in any negotiation is a calm exit.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="first">Aaron's</span> <span class="rest">Action Checklist</span></h2>
        <hr class="section-rule">
        <div class="checklist">
          <div class="checklist-item"><div class="checklist-box"></div><div>Pull county tax record, deed history, and plat map for 4505 Buttewoods</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Identify current owner of record and confirm seller motivation</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Pull 5 closed comps within 1.5 mi, 5,500 – 8,500 sq ft, last 90 days</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Schedule on-site walk-through with trusted contractor for defect inventory</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Order independent appraisal — keep separate from any seller-supplied number</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Call Patrick Lavette at Renasant Bank — pre-clear financing or POF letter</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Request bind-able homeowners insurance quote — flag any roof age issues</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Draft written LOI with opening offer, contingencies, close timeline</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Set personal walk-away ceiling — write it down before the first counter</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Submit offer in writing only — never anchor verbally</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Title search and survey ordered through closing attorney</div></div>
          <div class="checklist-item"><div class="checklist-box"></div><div>Verify wire instructions by phone before any funds transfer at closing</div></div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <h4>Closing Posture</h4>
        <p>This is a disciplined acquisition, not an emotional one. Walk away ready in writing. Anchor every offer in the appraisal, the comp band, and the defect list — not the seller's asking price. Move with patience: the side that carries less urgency wins the price.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>