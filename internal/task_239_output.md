<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1B7E3A;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* PROPERTY HERO */
    .property-hero {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 36px 40px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 36px;
      border-left: 6px solid var(--nu-blue);
    }
    .property-hero .eyebrow {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .property-hero h1 {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .property-hero .address {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 18px;
      padding-top: 22px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .stat {
      text-align: left;
    }
    .stat .label {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #6b6b80;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .stat .value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .stat .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* SECTION */
    .section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      color: var(--nu-blue);
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .card-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-title .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .card-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .card-body p + p { margin-top: 10px; }
    .card-body ul { padding-left: 0; list-style: none; margin-top: 8px; }
    .card-body ul li {
      padding: 4px 0 4px 20px;
      position: relative;
      font-size: 0.92rem;
    }
    .card-body ul li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      line-height: 1;
      top: 6px;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 0;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
    }
    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 12px;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* FINANCIAL TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table th.num, .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; }
    .nu-table tbody tr { border-top: 1px solid var(--nu-medium-gray); }
    .nu-table tbody tr:nth-child(even) { background: #fafafc; }
    .nu-table td {
      padding: 13px 16px;
      font-size: 0.93rem;
      color: var(--nu-dark-text);
    }
    .nu-table tr.highlight {
      background: rgba(6, 208, 255, 0.08) !important;
      font-weight: 900;
    }
    .nu-table tr.highlight td { color: var(--nu-blue); }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .ladder .rung {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      position: relative;
    }
    .ladder .rung.opening { border-color: var(--nu-success); }
    .ladder .rung.target  { border-color: var(--nu-blue); background: linear-gradient(180deg, #f0f0ff 0%, #ffffff 100%); }
    .ladder .rung.walk    { border-color: var(--nu-danger); }
    .ladder .rung .tag {
      display: inline-block;
      padding: 3px 12px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 3px;
      margin-bottom: 12px;
      color: var(--nu-white);
    }
    .ladder .opening .tag { background: var(--nu-success); }
    .ladder .target .tag  { background: var(--nu-blue); }
    .ladder .walk .tag    { background: var(--nu-danger); }
    .ladder .price {
      font-weight: 900;
      font-size: 1.85rem;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .ladder .ppsf {
      font-size: 0.85rem;
      color: #6b6b80;
      margin-bottom: 10px;
    }
    .ladder .note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.4;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline .step {
      position: relative;
      padding: 8px 0 18px 20px;
    }
    .timeline .step::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 14px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline .step .when {
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 4px;
    }
    .timeline .step .what {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline .step .detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #fffbe6 0%, #fff8d6 100%);
      border-left: 5px solid var(--nu-warn);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 18px;
    }
    .callout .label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-warn);
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.94rem; color: var(--nu-dark-text); }

    .callout.danger {
      background: linear-gradient(135deg, #fff0f0 0%, #ffe6e6 100%);
      border-left-color: var(--nu-danger);
    }
    .callout.danger .label { color: var(--nu-danger); }

    .callout.success {
      background: linear-gradient(135deg, #effff3 0%, #e0fbe6 100%);
      border-left-color: var(--nu-success);
    }
    .callout.success .label { color: var(--nu-success); }

    /* SCRIPT BOX */
    .script {
      background: var(--nu-navy);
      color: #e8e8f5;
      border-radius: 8px;
      padding: 22px 26px;
      margin: 14px 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-size: 0.98rem;
      line-height: 1.7;
      border-left: 4px solid var(--nu-cyan);
    }
    .script::before {
      content: '"';
      font-family: Georgia, serif;
      font-style: normal;
      font-size: 3rem;
      color: var(--nu-cyan);
      line-height: 0;
      position: relative;
      top: 18px;
      margin-right: 6px;
      opacity: 0.6;
    }
    .script .speaker {
      display: block;
      font-family: var(--font-primary);
      font-style: normal;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 900;
      margin-top: 10px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .property-hero { padding: 26px 22px; }
      .property-hero h1 { font-size: 1.6rem; }
      .ladder { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .nu-table th, .nu-table td { padding: 10px 10px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table { box-shadow: none; }
      .script { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
    <div class="nu-doc-label">Estate Acquisition — Negotiation Playbook</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="eyebrow">Subject Property</div>
        <h1>4505 Buttewoods — 7,098 sq ft Estate</h1>
        <div class="address">Negotiation strategy, offer ladder, walk-away discipline, and counter-script for the Buttewoods acquisition.</div>
        <div class="property-stats">
          <div class="stat">
            <div class="label">Living Area</div>
            <div class="value">7,098</div>
            <div class="sub">square feet</div>
          </div>
          <div class="stat">
            <div class="label">Address</div>
            <div class="value" style="font-size:1.05rem; font-weight:700; color:var(--nu-dark-text);">4505 Buttewoods</div>
            <div class="sub">Subject parcel</div>
          </div>
          <div class="stat">
            <div class="label">Action Source</div>
            <div class="value" style="font-size:1.05rem; font-weight:700; color:var(--nu-dark-text);">reMarkable</div>
            <div class="sub">Action item — captured by Aaron</div>
          </div>
          <div class="stat">
            <div class="label">Status</div>
            <div class="value" style="font-size:1.05rem; font-weight:700; color:var(--nu-warn);">Pre-Offer</div>
            <div class="sub">Strategy in development</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="section">
        <h2 class="nu-section-title">Negotiation <span>Objectives</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <div class="card-title"><span class="num">1</span>Acquire at or below target</div>
            <div class="card-body">
              <p>Close the property at or under the disciplined target price. Refuse to chase. The walk-away number is the walk-away number — emotion does not move it.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">2</span>Protect downside with diligence</div>
            <div class="card-body">
              <p>Earn-back inspection windows, financing contingencies, and clean title review. Never waive inspection on a 7,098 sq ft house — the surface area for hidden problems is too large.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">3</span>Preserve relationship optionality</div>
            <div class="card-body">
              <p>If the deal does not happen at the right number, leave the door open for a future re-engagement. Never burn a seller — sellers talk, and a rejected offer today can become an accepted offer in 90 days.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTELLIGENCE TO GATHER -->
      <section class="section">
        <h2 class="nu-section-title">Intelligence <span>Required Before First Offer</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <div class="card-title"><span class="num">A</span>Market comparables</div>
            <div class="card-body">
              <ul>
                <li>3 closed sales within 0.5 mile, last 6 months, comparable sq ft (5,500–8,500)</li>
                <li>Active listings in same school zone — what is competing today</li>
                <li>Days-on-market trend — is the seller's leverage increasing or decreasing</li>
                <li>Price-per-sq-ft range, then back into a number for 7,098 sq ft</li>
              </ul>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">B</span>Seller motivation</div>
            <div class="card-body">
              <ul>
                <li>Why are they selling? Job relocation, downsizing, divorce, estate, distress</li>
                <li>How long have they owned? Equity position drives flexibility</li>
                <li>Have they already bought their next home? Carrying-cost pressure cuts asking</li>
                <li>Any prior price reductions on this listing?</li>
              </ul>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">C</span>Property condition</div>
            <div class="card-body">
              <ul>
                <li>Roof age, HVAC ages (likely 2 or 3 systems at this size), water heaters</li>
                <li>Foundation — Birmingham clay soil, look for movement and prior repairs</li>
                <li>Drainage and grading on the lot</li>
                <li>Any prior insurance claims (CLUE report)</li>
                <li>Flood / wind zone status</li>
              </ul>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">D</span>Title and tax</div>
            <div class="card-body">
              <ul>
                <li>Pull tax-assessor record — assessed value, exemptions, current mil rate</li>
                <li>Open permits, code violations, liens, easements</li>
                <li>HOA / covenant restrictions if applicable</li>
                <li>Survey on file or required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="section">
        <h2 class="nu-section-title">Offer <span>Ladder — Anchor, Target, Walk-Away</span></h2>
        <div class="ladder">
          <div class="rung opening">
            <div class="tag">Opening</div>
            <div class="price">85% of Ask</div>
            <div class="ppsf">Anchor low — leave room to move up</div>
            <div class="note">Justified by closed comps, condition deductions, and as-is risk premium. Keep written justification ready to share if challenged.</div>
          </div>
          <div class="rung target">
            <div class="tag">Target</div>
            <div class="price">90–92% of Ask</div>
            <div class="ppsf">Where deal should land</div>
            <div class="note">The number Aaron is willing to sign for. Tied to appraisal-supportable value plus 2 % strategic margin for inspection re-trade.</div>
          </div>
          <div class="rung walk">
            <div class="tag">Walk-Away</div>
            <div class="price">95% of Ask</div>
            <div class="ppsf">One penny higher and we leave</div>
            <div class="note">Hard ceiling. Written down, signed by Aaron before negotiation begins. No mid-negotiation revision — that is how people overpay.</div>
          </div>
        </div>
        <div class="callout" style="margin-top:22px;">
          <div class="label">Discipline Note</div>
          <p>Percentages above are the framework. The actual dollar numbers must be locked in writing before the first offer goes out — based on confirmed list price, comparable evidence, and inspection-cost reserves. Do not skip this step.</p>
        </div>
      </section>

      <!-- VALUATION TABLE -->
      <section class="section">
        <h2 class="nu-section-title">Valuation <span>Worksheet</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th>Source</th>
              <th class="num">$/sq ft</th>
              <th class="num">Implied Value (× 7,098)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Closed comps — past 6 mo, 0.5 mi radius</td>
              <td>MLS</td>
              <td class="num">to be filled</td>
              <td class="num">to be filled</td>
            </tr>
            <tr>
              <td>Active comps — competing inventory</td>
              <td>MLS</td>
              <td class="num">to be filled</td>
              <td class="num">to be filled</td>
            </tr>
            <tr>
              <td>Tax assessor — assessed value</td>
              <td>County records</td>
              <td class="num">to be filled</td>
              <td class="num">to be filled</td>
            </tr>
            <tr>
              <td>Replacement cost (insurance basis)</td>
              <td>Cost approach</td>
              <td class="num">to be filled</td>
              <td class="num">to be filled</td>
            </tr>
            <tr>
              <td>Less: estimated repair / update reserve</td>
              <td>Walk-through + inspection</td>
              <td class="num">(deduct)</td>
              <td class="num">(deduct)</td>
            </tr>
            <tr class="highlight">
              <td>Anchored Target Value</td>
              <td>Aaron — final call</td>
              <td class="num">—</td>
              <td class="num">Locked before offer</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- OFFER TERMS -->
      <section class="section">
        <h2 class="nu-section-title">Non-Price <span>Terms That Win Deals</span></h2>
        <div class="card-grid">
          <div class="nu-card">
            <div class="card-title"><span class="num">i</span>Earnest money</div>
            <div class="card-body">
              <p>Strong but not reckless. Enough to signal seriousness; refundable inside the inspection window. Never wire non-refundable earnest before inspection clears.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">ii</span>Inspection window</div>
            <div class="card-body">
              <p>Minimum 10 business days. Right to terminate or re-trade for any reason. On a 7,098 sq ft estate, plan for general inspection plus roof, HVAC, sewer scope, and structural. Do not waive.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">iii</span>Financing contingency</div>
            <div class="card-body">
              <p>Keep the financing contingency unless paying cash. A pre-approval letter from a lender Aaron has worked with carries more weight with sellers than a cold pre-qual.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">iv</span>Closing date flexibility</div>
            <div class="card-body">
              <p>Ask the listing agent what timeline the seller prefers. Matching the seller's calendar is often worth more to them than the last 1 % of price. Use it as a trade.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">v</span>Appliances, fixtures, included items</div>
            <div class="card-body">
              <p>List specifically what conveys: refrigerator, washer/dryer, mounted TVs, generator, lawn equipment, window treatments. Vague language is where deals come apart at closing.</p>
            </div>
          </div>
          <div class="nu-card">
            <div class="card-title"><span class="num">vi</span>Repair credit vs price reduction</div>
            <div class="card-body">
              <p>For inspection-driven re-trade, prefer a price reduction over a repair credit. Cleaner closing, lower transfer-tax basis, and Aaron controls scope/contractor for the repair.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SCRIPT -->
      <section class="section">
        <h2 class="nu-section-title">Counter-Script <span>— When the Listing Agent Pushes Back</span></h2>

        <div class="script">
          We've looked carefully at closed sales in the neighborhood from the last six months. The number we've put in front of you is supported by those comps. We're serious buyers, our financing is solid, and we can close on the seller's preferred timeline. We're not here to insult anyone — we're here to make a deal that works for both sides.
          <span class="speaker">— Opening tone with the listing agent</span>
        </div>

        <div class="script">
          I appreciate that. Here's what we can do — we'll move on price by X if the seller can move on Y. If the gap is still too wide after that, I respect their position and we'll step back. Either way, we've enjoyed working with you on this.
          <span class="speaker">— When the seller counters above target</span>
        </div>

        <div class="script">
          We'd like to keep this clean. Rather than a long list of repair credits, let's settle this with a price adjustment of $___ . We'll handle the work post-close on our schedule. Same net to the seller, easier for everyone at closing.
          <span class="speaker">— Inspection re-trade — preferring price over credits</span>
        </div>

        <div class="script">
          I understand. That number doesn't work on our side. We've got to pass — but if the situation changes in the next 60 to 90 days, please call us first. We were ready to close.
          <span class="speaker">— Walking away — graceful, door left open</span>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="section">
        <h2 class="nu-section-title">Execution <span>Timeline</span></h2>
        <div class="nu-card">
          <div class="timeline">
            <div class="step">
              <div class="when">Day 1–3 — Intelligence</div>
              <div class="what">Pull comps, tax record, CLUE if available, drive the property and the neighborhood at three different times of day</div>
              <div class="detail">Speak with at least one agent who knows the street. Confirm seller motivation if possible.</div>
            </div>
            <div class="step">
              <div class="when">Day 3 — Lock numbers</div>
              <div class="what">Aaron signs off on opening, target, and walk-away in writing</div>
              <div class="detail">No verbal commitments. Numbers go into this document and do not move during negotiation.</div>
            </div>
            <div class="step">
              <div class="when">Day 4 — Offer in</div>
              <div class="what">Submit written offer with pre-approval letter and proof-of-funds for earnest money</div>
              <div class="detail">Cover letter is short, professional, no over-explaining. Let the offer speak.</div>
            </div>
            <div class="step">
              <div class="when">Day 4–7 — Negotiation window</div>
              <div class="what">Counters, scripts as above. Maximum two counters from our side before reaching walk-away</div>
              <div class="detail">If the seller stalls past 5 business days with no counter, escalate or walk.</div>
            </div>
            <div class="step">
              <div class="when">Day 8–18 — Due diligence</div>
              <div class="what">General inspection, roof, HVAC, sewer scope, structural review, title commitment</div>
              <div class="detail">Re-trade in writing within the contractual window if material defects are found.</div>
            </div>
            <div class="step">
              <div class="when">Day 19–35 — Financing & closing prep</div>
              <div class="what">Loan underwriting, appraisal, insurance binder, final walk-through</div>
              <div class="detail">Watch appraisal closely on a 7,098 sq ft estate — large homes can appraise short on $/sq ft basis.</div>
            </div>
            <div class="step">
              <div class="when">Day ~35 — Close</div>
              <div class="what">Funds wired only to a number Aaron has independently verified by phone with the title company</div>
              <div class="detail">Wire fraud on real-estate closings is rampant. Verify wiring instructions by voice, not email.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="section">
        <h2 class="nu-section-title">Red <span>Flags — Pull Out If You See These</span></h2>

        <div class="callout danger">
          <div class="label">Title or Disclosure</div>
          <p>Open permits the seller did not disclose, undisclosed prior insurance claims, easements that limit use, or a pattern of disclosure inconsistencies between the listing and the seller's property condition statement.</p>
        </div>

        <div class="callout danger">
          <div class="label">Structural or Water</div>
          <p>Foundation movement that has been cosmetically patched, evidence of repeated water intrusion, mold remediation without documentation, or grading that pitches water toward the foundation.</p>
        </div>

        <div class="callout danger">
          <div class="label">Counterparty Behavior</div>
          <p>Listing agent refusing reasonable inspection windows, pressure to waive contingencies, demands for non-refundable earnest before inspection, or "verbal" promises that never make it into the contract.</p>
        </div>

        <div class="callout success">
          <div class="label">Green Light Signals</div>
          <p>Cooperative listing agent, clean disclosure with documented updates, recent permits properly closed, willing seller flexibility on closing date, and comps that comfortably support the target price.</p>
        </div>
      </section>

      <!-- BADGES — KEY DISCIPLINES -->
      <section class="section">
        <h2 class="nu-section-title">Negotiation <span>Disciplines</span></h2>
        <div style="display:flex; flex-direction:column; gap:0;">
          <div class="nu-badge"><span class="badge-num">1</span>Walk-away in writing — before the first conversation</div>
          <div class="nu-badge"><span class="badge-num">2</span>Lead with terms, follow with price — sellers reveal themselves in the terms</div>
          <div class="nu-badge"><span class="badge-num">3</span>Two counters max — then accept, walk, or escalate</div>
          <div class="nu-badge"><span class="badge-num">4</span>Inspection is non-negotiable — full scope on a 7,098 sq ft house</div>
          <div class="nu-badge"><span class="badge-num">5</span>Verify wiring instructions by voice — title company, known number</div>
          <div class="nu-badge"><span class="badge-num">6</span>Leave the door open — sellers talk, the market is small</div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="section">
        <h2 class="nu-section-title">Aaron's <span>Next Actions</span></h2>
        <div class="nu-card">
          <div class="card-body">
            <ul>
              <li>Confirm exact street name and city for 4505 Buttewoods (capture in deal record)</li>
              <li>Pull MLS history, tax assessor record, and CLUE report (if accessible) for the parcel</li>
              <li>Identify a local agent and a closing attorney Aaron trusts for this deal</li>
              <li>Lock opening, target, and walk-away dollar figures and sign this document</li>
              <li>Line up financing pre-approval letter dated within 30 days</li>
              <li>Schedule the property walk-through with a contractor present, not just an agent</li>
              <li>Set calendar reminder — 60-day re-engagement check if the deal does not close</li>
            </ul>
          </div>
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
    <div class="nu-footer-confidential">Internal — Negotiation Strategy — Not for Distribution</div>
  </footer>

</body>
</html>