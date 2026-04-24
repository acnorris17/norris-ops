<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 26px;
      display: inline-block;
      padding: 7px 22px;
      background: rgba(0,0,0,0.28);
      color: var(--nu-cyan);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      border: 1px solid rgba(6,208,255,0.45);
      border-radius: 2px;
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 65%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230033cc' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230033cc' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .lead { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 28px;
    }

    /* OVERVIEW GRID */
    .nu-overview {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 36px;
      margin-bottom: 56px;
    }
    .nu-overview-intro p {
      font-size: 1rem;
      margin-bottom: 14px;
      color: #2a2a2a;
    }
    .nu-overview-intro strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .nu-facts-card {
      background: linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 26px 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
    }
    .nu-facts-card h3 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 16px;
    }
    .nu-facts-list {
      list-style: none;
    }
    .nu-facts-list li {
      display: flex;
      justify-content: space-between;
      padding: 9px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .nu-facts-list li:last-child { border-bottom: none; }
    .nu-facts-list .label {
      color: #555;
      font-weight: 400;
    }
    .nu-facts-list .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }

    /* FINANCIAL TABLE */
    .nu-money-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 44px;
    }
    .nu-money-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 20px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-money-tile .tile-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 10px;
    }
    .nu-money-tile .tile-value {
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-money-tile .tile-sub {
      font-size: 0.75rem;
      color: #888;
    }
    .nu-money-tile.hero {
      border-top-color: var(--nu-blue);
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
    }
    .nu-money-tile.hero .tile-label { color: rgba(255,255,255,0.75); }
    .nu-money-tile.hero .tile-value { color: var(--nu-white); }
    .nu-money-tile.hero .tile-sub { color: var(--nu-cyan); }

    /* NEGOTIATION STRATEGY */
    .nu-strategy {
      margin-bottom: 52px;
    }
    .nu-phase-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .nu-phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 22px;
      position: relative;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-phase-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.1);
    }
    .nu-phase-num {
      display: inline-block;
      width: 42px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 50%;
      margin-bottom: 14px;
    }
    .nu-phase-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-phase-card .phase-timing {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-phase-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-phase-card ul li {
      font-size: 0.88rem;
      padding: 5px 0 5px 18px;
      position: relative;
      color: #444;
    }
    .nu-phase-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 2px;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* LEVERAGE BADGES */
    .nu-leverage {
      margin-bottom: 52px;
    }
    .nu-badge-stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 30px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 400;
      font-size: 0.92rem;
    }
    .nu-badge .badge-head {
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
      display: block;
      margin-bottom: 4px;
      font-size: 0.78rem;
      text-transform: uppercase;
    }
    .nu-badge .badge-body {
      line-height: 1.5;
    }

    /* RISK / MITIGATION */
    .nu-risks {
      margin-bottom: 52px;
    }
    .nu-risk-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-risk-table th {
      background: linear-gradient(135deg, var(--nu-blue), #0066EE);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
      padding: 14px 18px;
    }
    .nu-risk-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      vertical-align: top;
    }
    .nu-risk-table tr:last-child td { border-bottom: none; }
    .nu-risk-table tr:nth-child(even) td { background: #fafbff; }
    .nu-risk-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 24%;
    }
    .nu-risk-level {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      padding: 2px 9px;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .nu-risk-level.high { background: #ffe3e3; color: #b32020; }
    .nu-risk-level.med  { background: #fff3d6; color: #a57500; }
    .nu-risk-level.low  { background: #d7f5e1; color: #21743d; }

    /* ACTION BAR */
    .nu-action-bar {
      background: linear-gradient(135deg, #f5f7ff 0%, #e9eeff 100%);
      border: 1px solid #cbd5ff;
      border-radius: 8px;
      padding: 28px 32px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 48px;
    }
    .nu-action-bar .action-copy h4 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-action-bar .action-copy p {
      font-size: 0.92rem;
      color: #444;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }

    /* NEXT STEPS CHECKLIST */
    .nu-next-steps {
      margin-bottom: 20px;
    }
    .nu-check-list {
      list-style: none;
      counter-reset: step;
    }
    .nu-check-list li {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px 16px 60px;
      margin-bottom: 10px;
      border-radius: 4px;
      position: relative;
      font-size: 0.95rem;
      box-shadow: 0 1px 6px rgba(0,0,0,0.03);
    }
    .nu-check-list li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .nu-check-list li strong {
      color: var(--nu-dark-text);
      display: block;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .nu-check-list li .owner {
      float: right;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      padding: 2px 8px;
      background: #eef1ff;
      border-radius: 3px;
      margin-top: 2px;
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
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.45);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 960px) {
      .nu-overview { grid-template-columns: 1fr; }
      .nu-money-grid { grid-template-columns: repeat(2, 1fr); }
      .nu-phase-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 45px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 22px 60px; }
      .nu-money-grid { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-risk-table th:nth-child(2), .nu-risk-table td:nth-child(2) { display: none; }
      .nu-check-list li .owner { float: none; display: inline-block; margin-top: 8px; }
      .nu-action-bar { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-phase-card, .nu-money-tile, .nu-facts-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-label">Acquisition Brief &nbsp;·&nbsp; Confidential</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- OVERVIEW -->
      <section class="nu-overview">
        <div class="nu-overview-intro">
          <h2 class="nu-section-title"><span class="lead">4505</span> <span class="rest">Buttewoods Estate</span></h2>
          <div class="nu-section-rule"></div>
          <p><strong>Objective.</strong> Negotiate the acquisition of the 7,098 sq ft estate at 4505 Buttewoods at a defensible price, structured to protect Norris Utilities®, LLC’s liquidity through the Q3 Skylift order cycle and the FlexPro Armor production ramp.</p>
          <p><strong>Context.</strong> This is a legacy-grade residence well above typical Birmingham SFR comps. It warrants a deliberate, data-led negotiation — not a retail offer. The goal is to secure the home at market-just value while preserving leverage on closing timeline, inspection outs, and seller concessions.</p>
          <p><strong>Approach.</strong> Anchor the opening with independent comps, lead with a short-fuse written offer, and reserve real concession room for inspection and appraisal findings. Keep the conversation warm, professional, and direct — the way Aaron handles every negotiation.</p>
        </div>

        <aside class="nu-facts-card">
          <h3>Property Snapshot</h3>
          <ul class="nu-facts-list">
            <li><span class="label">Address</span><span class="value">4505 Buttewoods</span></li>
            <li><span class="label">Heated Sq Ft</span><span class="value">7,098</span></li>
            <li><span class="label">Property Type</span><span class="value">Estate / SFR</span></li>
            <li><span class="label">Principal</span><span class="value">Aaron C. Norris</span></li>
            <li><span class="label">Entity</span><span class="value">TBD at offer</span></li>
            <li><span class="label">Status</span><span class="value">Negotiation — Open</span></li>
            <li><span class="label">Brief Date</span><span class="value">2026-04-24</span></li>
          </ul>
        </aside>
      </section>

      <!-- FINANCIAL FRAMEWORK -->
      <section>
        <h2 class="nu-section-title"><span class="lead">Financial</span> <span class="rest">Framework</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 22px; max-width: 860px;">The tile values below are planning anchors, not commitments. Each should be recalibrated against the most recent MLS comps, county assessor records, and a current appraisal at the time of offer. Nothing here is shared with the seller.</p>

        <div class="nu-money-grid">
          <div class="nu-money-tile hero">
            <div class="tile-label">Target Close</div>
            <div class="tile-value">$/Sq Ft × 7,098</div>
            <div class="tile-sub">Comp-anchored ceiling</div>
          </div>
          <div class="nu-money-tile">
            <div class="tile-label">Opening Offer</div>
            <div class="tile-value">−7% to −9%</div>
            <div class="tile-sub">Off final comp value</div>
          </div>
          <div class="nu-money-tile">
            <div class="tile-label">Walk-Away</div>
            <div class="tile-value">+3% max</div>
            <div class="tile-sub">Over comp ceiling</div>
          </div>
          <div class="nu-money-tile">
            <div class="tile-label">Concession Target</div>
            <div class="tile-value">2–3%</div>
            <div class="tile-sub">Seller credits at closing</div>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: #666; max-width: 860px;">Pull three closed comps above 6,500 sq ft within 12 months and 3 miles before finalizing the ceiling. Adjust for lot size, year built, and finish level. Pair with a private appraisal before the opening number is written.</p>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-strategy" style="margin-top: 52px;">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Phases</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-phase-grid">
          <div class="nu-phase-card">
            <div class="nu-phase-num">1</div>
            <div class="phase-timing">Day 0–3 · Positioning</div>
            <h4>Research &amp; Anchoring</h4>
            <ul>
              <li>Pull closed comps ≥ 6,500 sq ft, last 12 months</li>
              <li>Order BPO or appraisal (private, not seller-facing)</li>
              <li>Confirm title status, liens, HOA, tax basis</li>
              <li>Identify seller motivation — days on market, price drops</li>
              <li>Set ceiling, opening, and walk-away in writing</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">2</div>
            <div class="phase-timing">Day 3–10 · First Offer</div>
            <h4>Written, Short-Fuse Offer</h4>
            <ul>
              <li>Submit written offer 7–9% below comp ceiling</li>
              <li>72-hour response window — signals seriousness</li>
              <li>Proof of funds letter attached at submission</li>
              <li>Standard inspection &amp; appraisal contingencies</li>
              <li>Flexible close date offered as goodwill lever</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">3</div>
            <div class="phase-timing">Day 10–30 · Close</div>
            <h4>Counter &amp; Settlement</h4>
            <ul>
              <li>Meet seller once on price; earn concessions elsewhere</li>
              <li>Use inspection report to reprice — not renegotiate tone</li>
              <li>Target 2–3% in seller credits at closing</li>
              <li>Lock rate only after appraisal clears ceiling</li>
              <li>Final walk-through 24 hours before funding</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-leverage">
        <h2 class="nu-section-title"><span class="lead">Leverage</span> <span class="rest">Points</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge-stack">
          <div class="nu-badge">
            <div>
              <span class="badge-head">Cash-Strong Buyer</span>
              <span class="badge-body">Pre-qualified with proof of funds in hand. Removes financing uncertainty from the seller’s decision tree and shortens appraisal-to-close by 10–14 days versus a conventional buyer.</span>
            </div>
          </div>
          <div class="nu-badge">
            <div>
              <span class="badge-head">Flexible Close Date</span>
              <span class="badge-body">Willing to close in 21 days or rent-back up to 60 days at no cost — usable as a trade for price reduction or seller-paid concessions.</span>
            </div>
          </div>
          <div class="nu-badge">
            <div>
              <span class="badge-head">Clean Contingency Stack</span>
              <span class="badge-body">Inspection, appraisal, and title only. No sale-of-home contingency. Signals certainty and reduces perceived execution risk for the seller.</span>
            </div>
          </div>
          <div class="nu-badge">
            <div>
              <span class="badge-head">Private Showings</span>
              <span class="badge-body">Second walk-through with contractor and inspector before offer escalation. Prevents surprises post-contract and justifies any repricing on inspection findings.</span>
            </div>
          </div>
          <div class="nu-badge">
            <div>
              <span class="badge-head">Local Principal</span>
              <span class="badge-body">Birmingham-based principal — quick response, in-person closings, referenceable banking relationship at Renasant. Reduces friction a distant or syndicated buyer cannot match.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- RISK / MITIGATION -->
      <section class="nu-risks">
        <h2 class="nu-section-title"><span class="lead">Risk</span> <span class="rest">&amp; Mitigation</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-risk-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Level</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Appraisal comes in low</td>
              <td><span class="nu-risk-level med">Medium</span></td>
              <td>Require appraisal contingency. If gap &lt; 2%, absorb. If &gt; 2%, request seller meet in the middle or walk.</td>
            </tr>
            <tr>
              <td>Inspection reveals structural issue</td>
              <td><span class="nu-risk-level high">High</span></td>
              <td>Full inspection plus foundation &amp; roof specialists. Negotiate seller credits line-by-line or walk via contingency.</td>
            </tr>
            <tr>
              <td>Cash outlay strains Q3 operations</td>
              <td><span class="nu-risk-level high">High</span></td>
              <td>Confirm financing plan with Renasant before offer. Preserve working capital buffer for Skylift PO and FlexPro Armor production.</td>
            </tr>
            <tr>
              <td>Seller rejects short-fuse offer</td>
              <td><span class="nu-risk-level low">Low</span></td>
              <td>Do not chase. Quiet 7-day follow-up with revised terms, not a higher price. Walk if no response within 14 days.</td>
            </tr>
            <tr>
              <td>Title or lien surprise</td>
              <td><span class="nu-risk-level med">Medium</span></td>
              <td>Title work ordered Day 1. Include a 10-day title review out. Escrow holds on any unresolved lien.</td>
            </tr>
            <tr>
              <td>Competing offer emerges</td>
              <td><span class="nu-risk-level med">Medium</span></td>
              <td>Respond once with best-and-final at the predetermined walk-away. Do not escalate above ceiling — the deal must pencil.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ACTION BAR -->
      <div class="nu-action-bar">
        <div class="action-copy">
          <h4>Ready to open the file.</h4>
          <p>Confirm comps, walk 4505 Buttewoods once more, then authorize the written offer.</p>
        </div>
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron · 205-500-1343</a>
      </div>

      <!-- NEXT STEPS -->
      <section class="nu-next-steps">
        <h2 class="nu-section-title"><span class="lead">Next</span> <span class="rest">Steps</span></h2>
        <div class="nu-section-rule"></div>

        <ol class="nu-check-list">
          <li>
            <span class="owner">Aaron</span>
            <strong>Confirm comp ceiling</strong>
            Pull three closed comps ≥ 6,500 sq ft within 3 miles, last 12 months. Document adjusted $/sq ft. Lock the ceiling number before any conversation with the seller.
          </li>
          <li>
            <span class="owner">Aaron + Renasant</span>
            <strong>Secure proof of funds letter</strong>
            Refresh POF with Patrick Lavette at Renasant Bank. Confirm financing structure preserves Q3 operating liquidity for Skylift and FlexPro Armor.
          </li>
          <li>
            <span class="owner">Aaron</span>
            <strong>Schedule private walk-through</strong>
            Second walk with a licensed inspector and a trusted contractor before the offer goes out. Photograph and note every deferred-maintenance item.
          </li>
          <li>
            <span class="owner">CB</span>
            <strong>Draft written offer package</strong>
            Assemble POF letter, offer cover letter (in Aaron’s voice), and standard contingency stack. Queue for Aaron’s review before anything is sent to the seller or listing agent.
          </li>
          <li>
            <span class="owner">Aaron</span>
            <strong>Submit offer with 72-hour fuse</strong>
            Written, dated, short-fuse response window. Keep the tone warm and direct — lead with the number and the close date, not the contingencies.
          </li>
          <li>
            <span class="owner">Aaron</span>
            <strong>Decision gate after counter</strong>
            On the first counter: meet once on price, earn concessions elsewhere. On the second counter: hold or walk — do not exceed the walk-away ceiling.
          </li>
          <li>
            <span class="owner">CB</span>
            <strong>Log to master tracker</strong>
            Record all offers, counters, dates, and deadlines in the Norris Utilities® master tracker. Flag any seller-side delay beyond 48 hours.
          </li>
        </ol>
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
    <div class="nu-footer-meta">Acquisition Brief · Confidential · Internal Use</div>
  </footer>

</body>
</html>