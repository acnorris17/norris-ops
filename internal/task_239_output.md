<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Negotiation — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 20px;
      border: 1px solid rgba(255,255,255,0.5);
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      background: rgba(0,0,0,0.15);
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 64px 40px 80px;
    }

    /* PAGE INTRO */
    .doc-title {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title .blue { color: #0033cc; }
    .doc-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 28px;
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 28px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      margin-bottom: 44px;
      border-left: 4px solid var(--nu-blue);
    }
    .doc-meta div { font-size: 0.9rem; }
    .doc-meta .k {
      display: block;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.7rem;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .doc-meta .v { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 42px 0 18px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT */
    .snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .snap-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .snap-cell .label {
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #888;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .snap-cell .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .snap-cell .hint {
      font-size: 0.78rem;
      color: #666;
      margin-top: 4px;
    }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 26px 12px 18px;
      margin-bottom: 16px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* PHASE CARDS */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-bottom: 12px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.09);
    }
    .phase-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .phase-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .phase-card ul { list-style: none; padding: 0; }
    .phase-card ul li {
      padding: 5px 0 5px 18px;
      position: relative;
      font-size: 0.92rem;
      color: #444;
    }
    .phase-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.1rem;
      line-height: 1;
      top: 7px;
    }

    /* NEGOTIATION RANGE */
    .range-wrap {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef4ff 100%);
      border: 1px solid #d8e0ff;
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 20px;
    }
    .range-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 0.94rem;
    }
    .range-table th {
      text-align: left;
      padding: 12px 14px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .range-table th:first-child { border-radius: 6px 0 0 0; }
    .range-table th:last-child { border-radius: 0 6px 0 0; }
    .range-table td {
      padding: 12px 14px;
      border-bottom: 1px solid #dfe4f0;
      background: var(--nu-white);
    }
    .range-table tr:last-child td { border-bottom: none; }
    .range-table tr:last-child td:first-child { border-radius: 0 0 0 6px; }
    .range-table tr:last-child td:last-child { border-radius: 0 0 6px 0; }
    .range-table td.amount {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
    }
    .range-table tr.target td { background: #e8f4ff; }
    .range-table tr.walk td { background: #fff5f5; }
    .range-table tr.walk td.amount { color: #b84949; }

    /* LEVERAGE / RISK */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 12px;
    }
    .col-card {
      border-radius: 10px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
    }
    .col-card.leverage {
      background: linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 100%);
      border-left: 4px solid var(--nu-cyan);
    }
    .col-card.risk {
      background: linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%);
      border-left: 4px solid var(--nu-accent-gold);
    }
    .col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
    }
    .col-card ul { list-style: none; padding: 0; }
    .col-card li {
      padding: 7px 0 7px 22px;
      position: relative;
      font-size: 0.92rem;
      color: #333;
      line-height: 1.5;
    }
    .col-card.leverage li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .col-card.risk li::before {
      content: '⚠';
      position: absolute;
      left: 0;
      color: var(--nu-accent-gold);
      font-weight: 900;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 6px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: #333;
    }
    .checklist .box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 1px;
    }
    .checklist .num {
      flex-shrink: 0;
      width: 26px;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.9rem;
    }

    /* TALK TRACKS */
    .talk-block {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin-bottom: 14px;
      border-radius: 0 8px 8px 0;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .talk-block .label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 6px;
    }
    .talk-block .script {
      font-style: italic;
      color: #2a2a2a;
      line-height: 1.6;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin: 40px 0 10px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .callout .mark {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 3rem;
      color: var(--nu-cyan);
      line-height: 1;
      flex-shrink: 0;
    }
    .callout p {
      font-size: 1.05rem;
      line-height: 1.55;
    }
    .callout strong { color: var(--nu-cyan); font-weight: 900; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px 40px;
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 48px 22px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 44px 22px 60px; }
      .doc-title { font-size: 1.65rem; }
      .two-col { grid-template-columns: 1fr; }
      .callout { flex-direction: column; text-align: center; padding: 24px; }
      .callout .mark { font-size: 2.4rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    @media print {
      body { font-size: 11pt; }
      .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .col-card, .range-wrap { page-break-inside: avoid; box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-type">Confidential Negotiation Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="doc-title"><span class="blue">Estate</span> Purchase Negotiation</h1>
      <div class="doc-sub">4505 Buttewoods — 7,098 sq ft private estate acquisition strategy</div>

      <div class="doc-meta">
        <div>
          <span class="k">Property</span>
          <span class="v">4505 Buttewoods</span>
        </div>
        <div>
          <span class="k">Size</span>
          <span class="v">7,098 sq ft</span>
        </div>
        <div>
          <span class="k">Source</span>
          <span class="v">reMarkable Action Item</span>
        </div>
        <div>
          <span class="k">Prepared</span>
          <span class="v">April 17, 2026</span>
        </div>
        <div>
          <span class="k">Owner</span>
          <span class="v">Aaron C. Norris</span>
        </div>
        <div>
          <span class="k">Status</span>
          <span class="v">Active — Negotiation Phase</span>
        </div>
      </div>

      <!-- SNAPSHOT -->
      <div class="nu-badge">Property Snapshot</div>
      <div class="snapshot">
        <div class="snap-cell">
          <div class="label">Living Area</div>
          <div class="value">7,098</div>
          <div class="hint">square feet</div>
        </div>
        <div class="snap-cell">
          <div class="label">Classification</div>
          <div class="value">Estate</div>
          <div class="hint">single-family residential</div>
        </div>
        <div class="snap-cell">
          <div class="label">Address</div>
          <div class="value" style="font-size: 1.05rem;">4505 Buttewoods</div>
          <div class="hint">verify municipality &amp; parcel ID</div>
        </div>
        <div class="snap-cell">
          <div class="label">Action Type</div>
          <div class="value" style="font-size: 1.1rem;">Negotiate</div>
          <div class="hint">purchase, not list</div>
        </div>
      </div>

      <!-- INTENT -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objective</span></h2>
      <p style="margin-bottom: 16px;">
        Secure the 7,098 sq ft estate at 4505 Buttewoods at a price and on terms that protect Norris Utilities® cash flow through the
        Q2 Skylift PO cycle and Samson Rope distributor commitments. Close price, closing date, and contingencies all matter — do not
        chase a headline number at the expense of due-diligence protections.
      </p>

      <!-- PHASES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Plan — 4 Phases</span></h2>
      <div class="phase-grid">
        <div class="phase-card">
          <span class="phase-num">PHASE 01</span>
          <h4>Verify the Facts</h4>
          <ul>
            <li>Confirm 7,098 sq ft via tax records</li>
            <li>Pull deed, liens, and easement history</li>
            <li>Request seller disclosure in writing</li>
            <li>Pull 3 comparable sales within 1 mile</li>
            <li>Order independent appraisal baseline</li>
          </ul>
        </div>

        <div class="phase-card">
          <span class="phase-num">PHASE 02</span>
          <h4>Anchor the Offer</h4>
          <ul>
            <li>Lead with appraisal, not asking price</li>
            <li>Open 8–12% below target close</li>
            <li>Back every adjustment with a written reason</li>
            <li>Keep earnest money modest but credible</li>
            <li>Build in inspection &amp; financing contingencies</li>
          </ul>
        </div>

        <div class="phase-card">
          <span class="phase-num">PHASE 03</span>
          <h4>Negotiate Terms, Not Just Price</h4>
          <ul>
            <li>Trade closing date for concessions</li>
            <li>Push seller credits for repair items</li>
            <li>Request extended due-diligence window</li>
            <li>Lock in fixtures/furnishings in writing</li>
            <li>Keep financing terms flexible (cash vs. loan)</li>
          </ul>
        </div>

        <div class="phase-card">
          <span class="phase-num">PHASE 04</span>
          <h4>Close &amp; Document</h4>
          <ul>
            <li>Attorney-reviewed purchase agreement</li>
            <li>Title insurance — no exceptions accepted blind</li>
            <li>Walk-through within 48 hours of closing</li>
            <li>All repairs certified by licensed trades</li>
            <li>Funds wire — verified by voice, not email</li>
          </ul>
        </div>
      </div>

      <!-- RANGE -->
      <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Price Range</span></h2>
      <div class="range-wrap">
        <p style="margin-bottom: 12px; color: #444;">
          Final figures to be set after independent appraisal and comparable-sales review. Use the structure below — fill the dollar
          amounts during the verification phase. Every tier must be defensible in writing before it is spoken aloud.
        </p>
        <table class="range-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Purpose</th>
              <th style="text-align: right;">Set After Appraisal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>Anchor low, leaves room to move up</td>
              <td class="amount" style="text-align: right;">Appraisal × 0.88</td>
            </tr>
            <tr class="target">
              <td><strong>Target Close</strong></td>
              <td>Fair number, fully documented</td>
              <td class="amount" style="text-align: right;">Appraisal × 0.96</td>
            </tr>
            <tr>
              <td><strong>Ceiling (Stretch)</strong></td>
              <td>Only with seller concessions matching the gap</td>
              <td class="amount" style="text-align: right;">Appraisal × 1.02</td>
            </tr>
            <tr class="walk">
              <td><strong>Walk-Away</strong></td>
              <td>Any offer above this line — walk, no counter</td>
              <td class="amount" style="text-align: right;">Appraisal × 1.05</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- LEVERAGE / RISK -->
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">vs. Risk</span></h2>
      <div class="two-col">
        <div class="col-card leverage">
          <h4>Leverage On Our Side</h4>
          <ul>
            <li>Qualified buyer ready to close on seller's timeline</li>
            <li>Cash or cash-equivalent financing available — no chain</li>
            <li>Willingness to waive minor cosmetic items for price movement</li>
            <li>Independent appraisal in hand — facts, not feelings</li>
            <li>Third-generation business reputation — sellers trust the handshake</li>
          </ul>
        </div>
        <div class="col-card risk">
          <h4>Risks To Manage</h4>
          <ul>
            <li>Estate size — 7,098 sq ft carries outsized carrying costs</li>
            <li>Undisclosed structural, roof, or HVAC issues on older estates</li>
            <li>Title defects, easements, or boundary disputes</li>
            <li>Emotional attachment by seller driving list price above market</li>
            <li>Opportunity cost — capital tied up versus Q2 inventory commitments</li>
          </ul>
        </div>
      </div>

      <!-- TALK TRACKS -->
      <h2 class="nu-section-title"><span class="first">Talk</span> <span class="rest">Tracks — Use Verbatim</span></h2>

      <div class="talk-block">
        <div class="label">Opening — First Seller Conversation</div>
        <div class="script">
          "I've been through the property and the market comps. I'm a serious buyer, I can move on your timeline, and I'd rather be
          straight with you than chase each other around. Here's what the numbers tell me, and here's what I can do today."
        </div>
      </div>

      <div class="talk-block">
        <div class="label">When They Counter High</div>
        <div class="script">
          "I respect the number. I can't get there on price, but I can be flexible on closing date, earnest money, or leaving the
          fixtures where they are. Which of those would help you most?"
        </div>
      </div>

      <div class="talk-block">
        <div class="label">When Inspection Reveals Issues</div>
        <div class="script">
          "The inspector flagged items we didn't know about going in. I'm not walking — I want to close. I need either a price
          adjustment that matches the repair bids, or the repairs completed by licensed trades before closing. Your call."
        </div>
      </div>

      <div class="talk-block">
        <div class="label">Walk-Away Language</div>
        <div class="script">
          "I've given you my best number and my reasoning. If that doesn't work on your end, I understand — and I'd rather we
          part on good terms now than force a deal that neither of us is happy with. The offer stays open through Friday."
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <ol class="checklist">
        <li><span class="num">01</span><span class="box" aria-hidden="true"></span><span>Confirm 7,098 sq ft against county tax assessor records and request any permitted additions.</span></li>
        <li><span class="num">02</span><span class="box" aria-hidden="true"></span><span>Pull full title commitment — identify liens, judgments, easements, HOA restrictions.</span></li>
        <li><span class="num">03</span><span class="box" aria-hidden="true"></span><span>Order independent appraisal from an appraiser with estate-class experience.</span></li>
        <li><span class="num">04</span><span class="box" aria-hidden="true"></span><span>Review minimum three comparable sales within one mile, closed within twelve months.</span></li>
        <li><span class="num">05</span><span class="box" aria-hidden="true"></span><span>Request seller's property disclosure in writing — do not accept verbal representations.</span></li>
        <li><span class="num">06</span><span class="box" aria-hidden="true"></span><span>Schedule whole-house inspection plus specialty inspections (roof, foundation, HVAC, sewer).</span></li>
        <li><span class="num">07</span><span class="box" aria-hidden="true"></span><span>Confirm financing pre-approval and earnest money sourcing before the offer is written.</span></li>
        <li><span class="num">08</span><span class="box" aria-hidden="true"></span><span>Engage real estate attorney for contract review — not just the title company.</span></li>
        <li><span class="num">09</span><span class="box" aria-hidden="true"></span><span>Document the target price, ceiling, and walk-away figures in writing before talking to seller.</span></li>
        <li><span class="num">10</span><span class="box" aria-hidden="true"></span><span>Review capital deployment against Q2 Skylift PO and Samson Rope commitments — no surprises.</span></li>
      </ol>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="mark">"</div>
        <p>
          Negotiate in writing. Commit nothing verbally. Every concession — on price, on closing date, on fixtures, on repairs —
          goes on the addendum before it goes in the bank. <strong>If it is not written, it did not happen.</strong>
        </p>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
      <div class="phase-grid">
        <div class="phase-card" style="border-top-color: var(--nu-cyan);">
          <span class="phase-num" style="background: var(--nu-cyan); color: var(--nu-navy);">THIS WEEK</span>
          <h4>Verification &amp; Team</h4>
          <ul>
            <li>Pull county records on 4505 Buttewoods</li>
            <li>Engage real estate attorney</li>
            <li>Line up inspector &amp; appraiser</li>
            <li>Confirm capital position with CPA</li>
          </ul>
        </div>
        <div class="phase-card" style="border-top-color: var(--nu-accent-gold);">
          <span class="phase-num" style="background: var(--nu-accent-gold); color: var(--nu-navy);">NEXT 14 DAYS</span>
          <h4>Offer Preparation</h4>
          <ul>
            <li>Complete appraisal &amp; comp review</li>
            <li>Lock price tiers in writing</li>
            <li>Draft offer with contingencies</li>
            <li>Confirm financing pre-approval</li>
          </ul>
        </div>
        <div class="phase-card" style="border-top-color: var(--nu-blue);">
          <span class="phase-num">AT OFFER</span>
          <h4>Execution</h4>
          <ul>
            <li>Submit written offer with deadline</li>
            <li>Hold to walk-away tier discipline</li>
            <li>Document every counter in writing</li>
            <li>Attorney review before signature</li>
          </ul>
        </div>
      </div>

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
    <div class="nu-footer-meta">
      Confidential — Prepared for Aaron C. Norris | reMarkable Action Item Dossier | April 17, 2026
    </div>
  </footer>

</body>
</html>