<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #2D7A3E;
      --nu-warning: #B8860B;
      --nu-danger: #A52A2A;
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
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 30px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* DOC TITLE */
    .doc-title {
      text-align: center;
      margin-bottom: 50px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .doc-title h1 span { color: var(--nu-blue); }
    .doc-title .doc-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
    }
    .doc-meta {
      display: inline-flex;
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 14px 28px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .doc-meta span strong { color: var(--nu-blue); font-weight: 700; }

    /* SECTION */
    .nu-section { margin-bottom: 56px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .blue { color: var(--nu-blue); }
    .nu-section-title .dark { color: var(--nu-dark-text); }

    /* PROPERTY SUMMARY */
    .property-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .property-card h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .property-card .address {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 18px;
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }
    .stat {
      background: var(--nu-white);
      padding: 16px 18px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-blue);
    }
    .stat-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* OBJECTIVE BANNER */
    .objective-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .objective-banner::after {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 50%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
    }
    .objective-banner h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-cyan);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
      position: relative;
    }
    .objective-banner p {
      font-size: 1.1rem;
      line-height: 1.55;
      position: relative;
    }

    /* TWO COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .info-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .info-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .info-card ul {
      list-style: none;
      padding: 0;
    }
    .info-card ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .info-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 8px;
    }

    /* PHASE TIMELINE */
    .phase-list {
      counter-reset: phase;
    }
    .phase {
      position: relative;
      padding: 24px 24px 24px 80px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      counter-increment: phase;
    }
    .phase::before {
      content: counter(phase);
      position: absolute;
      left: 22px;
      top: 24px;
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .phase h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .phase .phase-window {
      font-size: 0.8rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .phase p {
      font-size: 0.93rem;
      line-height: 1.55;
    }
    .phase ul {
      margin-top: 8px;
      padding-left: 18px;
    }
    .phase ul li {
      font-size: 0.92rem;
      margin-bottom: 4px;
    }

    /* OFFER LADDER */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .offer-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .offer-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr.target-row { background: rgba(6,208,255,0.08); }
    .offer-table tr.target-row td { font-weight: 700; }
    .offer-table .pos {
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* RISK BLOCKS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 20px;
      border-left: 5px solid var(--nu-warning);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .risk-card.low { border-left-color: var(--nu-success); }
    .risk-card.high { border-left-color: var(--nu-danger); }
    .risk-card .risk-tag {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-warning);
      color: var(--nu-white);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 12px;
      margin-bottom: 10px;
    }
    .risk-card.low .risk-tag { background: var(--nu-success); }
    .risk-card.high .risk-tag { background: var(--nu-danger); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.88rem;
      line-height: 1.5;
    }
    .risk-card .mitigation {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
    }
    .risk-card .mitigation strong { color: var(--nu-blue); }

    /* DUE DILIGENCE */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .checklist-group {
      margin-bottom: 22px;
    }
    .checklist-group:last-child { margin-bottom: 0; }
    .checklist-group h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-right: 12px;
      margin-top: 2px;
    }

    /* NEXT ACTIONS */
    .actions-list {
      list-style: none;
      counter-reset: act;
    }
    .actions-list li {
      counter-increment: act;
      padding: 14px 18px 14px 56px;
      position: relative;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .actions-list li::before {
      content: counter(act);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .actions-list li strong { color: var(--nu-dark-text); }

    /* CTA */
    .cta-block {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 40px;
      border-radius: 10px;
      text-align: center;
      margin-top: 40px;
    }
    .cta-block h3 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .cta-block p {
      font-size: 1rem;
      max-width: 640px;
      margin: 0 auto 20px;
      opacity: 0.95;
    }
    .cta-block .cta-buttons {
      display: inline-flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .nu-btn {
      display: inline-block;
      padding: 12px 26px;
      background: var(--nu-white);
      color: var(--nu-blue);
      font-weight: 900;
      text-decoration: none;
      border-radius: 4px;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.2);
    }
    .nu-btn.outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
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
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .doc-title h1 { font-size: 1.8rem; }
      .two-col { grid-template-columns: 1fr; }
      .stat-grid { grid-template-columns: repeat(2, 1fr); }
      .offer-table { font-size: 0.85rem; }
      .offer-table th, .offer-table td { padding: 10px 8px; }
      .phase { padding: 20px 18px 20px 70px; }
      .cta-block { padding: 30px 22px; }
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
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Acquisition Strategy — Internal</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE -->
      <div class="doc-title">
        <h1>Estate Acquisition <span>Strategy</span></h1>
        <div class="doc-sub">Negotiating the Purchase of a 7,098 sq ft Estate at 4505 Buttewoods</div>
        <div class="doc-meta">
          <span><strong>Prepared:</strong> April 22, 2026</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Source:</strong> reMarkable Action Item</span>
          <span><strong>Status:</strong> Pre-Offer Workup</span>
        </div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Property</span> <span class="dark">Snapshot</span></h2>

        <div class="property-card">
          <h3>4505 Buttewoods</h3>
          <div class="address">7,098 sq ft estate — full address & MLS to be confirmed at file open</div>

          <div class="stat-grid">
            <div class="stat">
              <div class="stat-label">Living Area</div>
              <div class="stat-value">7,098</div>
              <div class="stat-sub">square feet</div>
            </div>
            <div class="stat">
              <div class="stat-label">Property Type</div>
              <div class="stat-value">Estate</div>
              <div class="stat-sub">single residence</div>
            </div>
            <div class="stat">
              <div class="stat-label">Negotiation Status</div>
              <div class="stat-value">Open</div>
              <div class="stat-sub">pre-offer workup</div>
            </div>
            <div class="stat">
              <div class="stat-label">Decision Window</div>
              <div class="stat-value">21 Days</div>
              <div class="stat-sub">from market intel pull</div>
            </div>
          </div>
        </div>

        <div class="objective-banner">
          <h3>Acquisition Objective</h3>
          <p>Secure 4505 Buttewoods at the lowest defensible price under fair market value, with contingencies that protect inspection findings, financing, and clean title — without giving up speed-to-close, which is the strongest leverage we hold against a tired listing or motivated seller.</p>
        </div>
      </section>

      <!-- INTELLIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Pre-Negotiation</span> <span class="dark">Intelligence to Pull</span></h2>

        <div class="two-col">
          <div class="info-card">
            <h4>Seller-Side Signals</h4>
            <ul>
              <li>Days on market — every 30 days softens position by ~2-4%</li>
              <li>Price reduction history — number, magnitude, cadence</li>
              <li>Listing agent's other inventory — overloaded agents close softer</li>
              <li>Reason for sale — estate, relocation, divorce, downsize</li>
              <li>Showing activity — competing offer pressure or vacuum</li>
              <li>Original purchase date and price — equity headroom</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>Property Comparables</h4>
            <ul>
              <li>Sold comps in subdivision, last 6 months, 6,000-8,000 sq ft</li>
              <li>Active listings competing for the same buyer pool</li>
              <li>Withdrawn or expired listings — pricing ceiling signal</li>
              <li>Price per square foot vs. county average</li>
              <li>Tax assessment vs. asking price delta</li>
              <li>Days on market average for the segment</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>Title & Encumbrance Pre-Check</h4>
            <ul>
              <li>Probate posture — heirship, estate filings, executor authority</li>
              <li>Open mortgages, HELOCs, judgment liens</li>
              <li>HOA arrears, special assessments, transfer fees</li>
              <li>Easements, right-of-way encroachments, utility servitudes</li>
              <li>Open or unpermitted improvements visible at the assessor</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>Hard Costs to Underwrite</h4>
            <ul>
              <li>Roof age, HVAC count and age, water heater status</li>
              <li>Foundation/structural — drainage, settling, retaining walls</li>
              <li>Pool, well, septic, generator, irrigation systems</li>
              <li>Code/permit gap on additions — square footage match to records</li>
              <li>Insurance pre-quote on a property of this size and age</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Negotiation</span> <span class="dark">Phases</span></h2>

        <div class="phase-list">
          <div class="phase">
            <h4>Discovery & Walk-Through</h4>
            <div class="phase-window">Days 1-5</div>
            <p>Tour the property at least twice, including one walkthrough at a different time of day. Document every condition issue with photos. Build a per-line repair budget so the eventual price logic is grounded in numbers, not opinions.</p>
            <ul>
              <li>First visit: high-level condition, layout, neighborhood feel</li>
              <li>Second visit: contractor or trusted builder along for hard items</li>
              <li>Photograph every defect — undisputable record for negotiations</li>
            </ul>
          </div>

          <div class="phase">
            <h4>Comparable & Underwriting Build-Up</h4>
            <div class="phase-window">Days 3-8</div>
            <p>Pull the comp set, anchor a defensible value range, and back into a target offer that leaves room for inspection credits. Underwrite to a price that works even if the appraisal comes in 3% under.</p>
            <ul>
              <li>Establish low / market / high comp anchors</li>
              <li>Subtract estimated deferred maintenance from market anchor</li>
              <li>Reserve 1.5-2% holdback for post-inspection credits</li>
            </ul>
          </div>

          <div class="phase">
            <h4>Initial Offer Submission</h4>
            <div class="phase-window">Days 6-10</div>
            <p>Lead with a written offer that is firm but not insulting. Include earnest money sized to signal seriousness, a short due diligence window, and pre-approval or proof of funds attached. The cover letter establishes credibility without disclosing maximum price.</p>
            <ul>
              <li>Earnest money: 1-2% of offer, refundable through DD period</li>
              <li>Due diligence: 10-14 calendar days</li>
              <li>Close window: 30-35 days, flexible if seller needs leaseback</li>
            </ul>
          </div>

          <div class="phase">
            <h4>Counter Sequence</h4>
            <div class="phase-window">Days 8-14</div>
            <p>Expect 1-2 counters. Move price in shrinking increments (e.g. $25k, then $10k, then $5k), so each move signals approaching the line. Trade non-price terms — close date, leaseback, included items — when price gives.</p>
            <ul>
              <li>Never volunteer the next number — let silence do work</li>
              <li>Bundle concessions, never give one for free</li>
              <li>Keep walk-away price written down before each call</li>
            </ul>
          </div>

          <div class="phase">
            <h4>Inspection & Repair Re-Trade</h4>
            <div class="phase-window">Days 12-20</div>
            <p>The second negotiation. Lead the credit ask with the highest-impact, highest-cost items. Tie every dollar to a written contractor estimate. Cash credits at closing typically beat seller repairs done in haste.</p>
            <ul>
              <li>Stack written estimates from 2 vendors per major item</li>
              <li>Ask for a closing credit, not a price reduction (preserves loan basis)</li>
              <li>Reserve right to walk under DD without penalty</li>
            </ul>
          </div>

          <div class="phase">
            <h4>Close & Possession</h4>
            <div class="phase-window">Days 21-35</div>
            <p>Lock financing, finalize title, walk the property within 24 hours of closing. Confirm all included items remain on site. Hold seller responsible for anything removed beyond what the contract allowed.</p>
            <ul>
              <li>Final walk: morning of closing, with photos vs. listing photos</li>
              <li>Wire fraud protection — call escrow direct on every wiring instruction</li>
              <li>Possession: same day as funding, unless leaseback negotiated</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Offer</span> <span class="dark">Ladder Framework</span></h2>

        <p style="margin-bottom: 18px; font-size: 0.95rem;">Each rung is a percentage of confirmed market value (CMV) once comps are pulled. Use as a structural framework — actual dollar amounts populate after Days 3-8 underwriting.</p>

        <table class="offer-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>% of CMV</th>
              <th>When to Use</th>
              <th>Risk Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="pos">Floor</span> — Walk Away</td>
              <td>~85%</td>
              <td>Distressed seller, long DOM, condition discount</td>
              <td>Low — only if true motivation signals confirmed</td>
            </tr>
            <tr>
              <td><span class="pos">Opening</span> — Initial Offer</td>
              <td>88-91%</td>
              <td>Standard market with no competing offers</td>
              <td>Moderate — leaves credible room to move up</td>
            </tr>
            <tr class="target-row">
              <td><span class="pos">Target</span> — Settle Range</td>
              <td>93-96%</td>
              <td>Anticipated final settle after counters</td>
              <td>This is the planned landing zone</td>
            </tr>
            <tr>
              <td><span class="pos">Stretch</span> — Maximum</td>
              <td>97-99%</td>
              <td>Multiple-offer pressure, strong condition</td>
              <td>Higher — only with appraisal protection clause</td>
            </tr>
            <tr>
              <td><span class="pos">Pass</span> — Above</td>
              <td>100%+</td>
              <td>Never. Walk to next opportunity.</td>
              <td>No deal at or above ask without major concessions</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Due Diligence</span> <span class="dark">Checklist</span></h2>

        <div class="checklist">
          <div class="checklist-group">
            <h4>Inspections (within 7 days of acceptance)</h4>
            <div class="checklist-item"><div class="check-box"></div><div>General home inspection by licensed inspector</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Foundation / structural inspection (mandatory at 7,098 sq ft)</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Roof inspection — independent of general inspector</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>HVAC inspection — every unit, separately</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Plumbing scope of main and lateral lines</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Electrical panel and load assessment</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Pest, termite, and wood-destroying organism inspection</div></div>
          </div>

          <div class="checklist-group">
            <h4>Title & Legal</h4>
            <div class="checklist-item"><div class="check-box"></div><div>Title commitment ordered through chosen closing attorney</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Survey ordered — boundary, easements, encroachments</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>HOA estoppel letter (if applicable) — fees, assessments, restrictions</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Probate status confirmed if estate sale</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Tax assessment and any open code violations pulled</div></div>
          </div>

          <div class="checklist-group">
            <h4>Financing & Insurance</h4>
            <div class="checklist-item"><div class="check-box"></div><div>Lender selected, loan application submitted</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Appraisal ordered through lender</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Insurance binder quoted from 2-3 carriers</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Wind / flood zone confirmed; quotes adjusted accordingly</div></div>
          </div>

          <div class="checklist-group">
            <h4>Practical / Personal</h4>
            <div class="checklist-item"><div class="check-box"></div><div>Walk-through with spouse / family before final commitment</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Holding cost analysis if existing home doesn't sell first</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Movers, utilities, change-of-address scheduled post-acceptance</div></div>
            <div class="checklist-item"><div class="check-box"></div><div>Final walk 24 hours before closing — photographed</div></div>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Risk</span> <span class="dark">Register & Mitigations</span></h2>

        <div class="risk-grid">
          <div class="risk-card high">
            <div class="risk-tag">High</div>
            <h4>Hidden Structural / Foundation Issues</h4>
            <p>An estate of this size on an older foundation can carry tens of thousands in deferred work. Drainage failures and settling are common.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Independent structural engineer separate from home inspection. Walk perimeter for water signs. Reserve 2% of price for credits.</div>
          </div>

          <div class="risk-card high">
            <div class="risk-tag">High</div>
            <h4>Appraisal Below Contract Price</h4>
            <p>Lenders fund based on appraisal, not contract. A low appraisal forces price cut, additional cash to close, or deal collapse.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Include appraisal contingency. Pull comp set yourself and challenge a low appraisal in writing with supporting comps.</div>
          </div>

          <div class="risk-card">
            <div class="risk-tag">Medium</div>
            <h4>Title Defects or Probate Delay</h4>
            <p>Estates often carry unclear heirship, missing signatures, or unrecorded transfers. Closing date slips become weeks or months.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Order title commitment within 5 days. Build a 45-day close window if estate, with extension language pre-negotiated.</div>
          </div>

          <div class="risk-card">
            <div class="risk-tag">Medium</div>
            <h4>Insurance Cost Spike</h4>
            <p>Larger square footage, age of home, roof condition, and any prior claim history can push annual insurance well above projection.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Pull CLUE report through chosen carrier. Get binders from 2-3 carriers before removing financing contingency.</div>
          </div>

          <div class="risk-card">
            <div class="risk-tag">Medium</div>
            <h4>Carrying-Cost Exposure if Existing Home Doesn't Sell</h4>
            <p>Owning two properties simultaneously burns cash quickly. Bridge loans add debt service plus origination friction.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Underwrite 90-day overlap as base case. List existing home before, not after, ratifying offer on Buttewoods.</div>
          </div>

          <div class="risk-card low">
            <div class="risk-tag">Low</div>
            <h4>Competing Offer Emerges Mid-Negotiation</h4>
            <p>If timed against incoming buyers, leverage shifts back to seller and counters firm up.</p>
            <div class="mitigation"><strong>Mitigate:</strong> Move from offer to inspection within 48 hours of acceptance. Don't telegraph hesitation. Walk-away price keeps emotion out.</div>
          </div>
        </div>
      </section>

      <!-- IMMEDIATE NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue">Immediate</span> <span class="dark">Next Actions</span></h2>

        <ol class="actions-list">
          <li><strong>Confirm full property record.</strong> Pull MLS sheet, county tax record, parcel ID, recorded deed history for 4505 Buttewoods. Verify the 7,098 sq ft figure against the assessor.</li>
          <li><strong>Engage buyer's agent or attorney.</strong> If going un-represented, retain real estate counsel before any written offer leaves the door.</li>
          <li><strong>Order comp set.</strong> Six-month sold comps within subdivision plus surrounding 1-mile radius for 6,000-8,000 sq ft. Establish low / market / high anchor prices.</li>
          <li><strong>Request seller motivation read.</strong> Have agent ask listing agent open-ended questions about timing, plans, prior offers. Listen for divorce, estate, relocation language.</li>
          <li><strong>Schedule first walk-through.</strong> Camera ready. Photograph every defect. Note off-record items not in MLS photos.</li>
          <li><strong>Pre-qualify financing or confirm cash.</strong> Have proof-of-funds letter or pre-approval ready before any verbal offer surfaces.</li>
          <li><strong>Set written walk-away number.</strong> Aaron locks the maximum on paper before the first counter — out of inbox, in a sealed file. Discipline beats memory.</li>
          <li><strong>Block calendar for negotiation window.</strong> Reserve 21 days where Aaron is reachable for fast responses. Speed compounds leverage.</li>
        </ol>
      </section>

      <!-- CTA -->
      <div class="cta-block">
        <h3>Move on This Property With Discipline, Not Urgency</h3>
        <p>The walk-away price is the only number that protects the deal. Set it, sign it, and let every counter prove the property is worth more — never less.</p>
        <div class="cta-buttons">
          <a href="tel:2055001343" class="nu-btn">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com" class="nu-btn outline">Email acnorris@norrisutilities.com</a>
        </div>
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
    <div class="nu-footer-meta">
      Internal Acquisition Strategy — Prepared April 22, 2026 — Confidential
    </div>
  </footer>

</body>
</html>