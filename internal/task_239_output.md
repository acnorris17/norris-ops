<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1b7a3e;
      --nu-warn: #b8541a;
      --nu-danger: #a81d1d;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 40%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
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
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOC TITLE STRIP */
    .doc-title-strip {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 28px 40px 20px;
      text-align: center;
    }
    .doc-kicker {
      text-transform: uppercase;
      letter-spacing: 0.25em;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      margin-top: 12px;
      font-size: 0.9rem;
      color: #666;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px 22px;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* STATUS BANNER */
    .status-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      background: linear-gradient(135deg, #fff8e6 0%, #fff1cc 100%);
      border-left: 6px solid var(--nu-accent-gold);
      border-radius: 8px;
      padding: 20px 26px;
      margin-bottom: 36px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .status-banner .pulse {
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-accent-gold);
      box-shadow: 0 0 0 0 rgba(201,168,76,0.6);
      animation: pulse 1.8s infinite;
      flex-shrink: 0;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.55); }
      70% { box-shadow: 0 0 0 14px rgba(201,168,76,0); }
      100% { box-shadow: 0 0 0 0 rgba(201,168,76,0); }
    }
    .status-banner-text { flex: 1; }
    .status-banner-text .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #8a6a0a;
      margin-bottom: 2px;
    }
    .status-banner-text .msg {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION */
    .section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      margin-bottom: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-sub {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 22px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-cyan);
    }

    /* PROPERTY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-top: 4px;
    }
    .prop-cell {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 16px;
      border-radius: 4px;
    }
    .prop-cell .k {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 700;
      color: #666;
      margin-bottom: 4px;
    }
    .prop-cell .v {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
    }
    .prop-cell .v small {
      font-weight: 400;
      color: #666;
      font-size: 0.8rem;
    }

    /* CHEVRON BADGES (action items) */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      width: 28px; height: 28px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    /* NEGOTIATION TABLE */
    table.neg-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 0.95rem;
    }
    table.neg-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    table.neg-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.neg-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .pill {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 9px;
      border-radius: 10px;
    }
    .pill.walk { background: #fce6e6; color: var(--nu-danger); }
    .pill.target { background: #e6f4ea; color: var(--nu-success); }
    .pill.open { background: #fff1cc; color: #8a6a0a; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-top: 4px;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 42px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 10px; top: 12px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }
    .checklist li .owner {
      float: right;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      background: #e8eeff;
      padding: 2px 10px;
      border-radius: 10px;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      border-left: 3px solid var(--nu-cyan);
      margin-top: 8px;
    }
    .t-item {
      position: relative;
      margin-bottom: 22px;
    }
    .t-item::before {
      content: '';
      position: absolute;
      left: -36px;
      top: 4px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .t-item .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .t-item .what {
      color: var(--nu-dark-text);
      margin-top: 2px;
      font-size: 0.98rem;
    }

    /* RISK CARDS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 4px;
    }
    .risk-card {
      border: 1px solid var(--nu-medium-gray);
      border-top: 5px solid var(--nu-danger);
      border-radius: 8px;
      padding: 18px 20px;
      background: var(--nu-white);
    }
    .risk-card.ok { border-top-color: var(--nu-success); }
    .risk-card.warn { border-top-color: var(--nu-warn); }
    .risk-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: #555;
    }
    .risk-card .mit {
      display: block;
      margin-top: 10px;
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* DECISION BOX */
    .decision-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-top: 6px;
    }
    .decision-box h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .decision-box p {
      color: rgba(255,255,255,0.92);
      margin-bottom: 10px;
    }
    .decision-box .sig {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.7);
      font-size: 0.88rem;
    }

    /* ACTION BUTTONS */
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }
    .btn {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
      letter-spacing: 0.02em;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-cyan);
    }
    .btn-secondary:hover {
      background: var(--nu-cyan);
      color: var(--nu-navy);
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .doc-title { font-size: 1.5rem; }
      .wrap { padding: 30px 18px 40px; }
      .section { padding: 22px 20px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .checklist li .owner { float: none; display: inline-block; margin-left: 8px; }
    }

    @media print {
      body { background: white; }
      .section { box-shadow: none; break-inside: avoid; }
      .actions { display: none; }
      .nu-header, .nu-footer, .decision-box {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC TITLE STRIP -->
  <section class="doc-title-strip" style="background: var(--nu-light-gray); border-bottom: none; padding-top: 0;">
    <div style="background: var(--nu-white); border-radius: 10px; padding: 28px 30px; max-width: 1080px; margin: 0 auto; box-shadow: 0 4px 18px rgba(0,0,0,0.06);">
      <div class="doc-kicker">Internal Action Brief · Real Estate</div>
      <div class="doc-title">Estate Acquisition — <span>4505 Buttewoods</span></div>
      <div class="doc-meta">
        <span><strong>Property:</strong> 7,098 sq ft residence</span>
        <span><strong>Prepared:</strong> April 24, 2026</span>
        <span><strong>Owner:</strong> Aaron C. Norris</span>
        <span><strong>Classification:</strong> Confidential</span>
      </div>
    </div>
  </section>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="wrap">

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="pulse"></div>
        <div class="status-banner-text">
          <div class="label">Current Status</div>
          <div class="msg">Pre-offer diligence — negotiation strategy assembled, awaiting Aaron's go/no-go on opening position.</div>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <p class="section-sub">Subject property at 4505 Buttewoods — the data points that frame every negotiation decision below.</p>
        <div class="property-grid">
          <div class="prop-cell">
            <div class="k">Address</div>
            <div class="v">4505 Buttewoods</div>
          </div>
          <div class="prop-cell">
            <div class="k">Structure</div>
            <div class="v">7,098 <small>sq ft</small></div>
          </div>
          <div class="prop-cell">
            <div class="k">Asset Class</div>
            <div class="v">Estate Residence</div>
          </div>
          <div class="prop-cell">
            <div class="k">Transaction</div>
            <div class="v">Purchase</div>
          </div>
          <div class="prop-cell">
            <div class="k">Buyer</div>
            <div class="v">Aaron C. Norris</div>
          </div>
          <div class="prop-cell">
            <div class="k">Phase</div>
            <div class="v">Negotiation</div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION PLAN -->
      <section class="section">
        <h2 class="nu-section-title">Negotiation <span>Plan</span></h2>
        <p class="section-sub">Six disciplined steps from diligence through close — do not skip, do not re-order.</p>

        <div class="nu-badge"><span class="num">1</span>Confirm asking price, days-on-market, and any prior offer history</div>
        <div class="nu-badge"><span class="num">2</span>Pull three recent comps within 1 mile matching ±10% sq ft</div>
        <div class="nu-badge"><span class="num">3</span>Order pre-inspection walkthrough; document repair/deferred items</div>
        <div class="nu-badge"><span class="num">4</span>Lock financing pre-approval letter; confirm proof-of-funds format</div>
        <div class="nu-badge"><span class="num">5</span>Present written offer with seller-concession ask and 14-day inspection window</div>
        <div class="nu-badge"><span class="num">6</span>Hold walk-away line; counter only twice before strategic pause</div>
      </section>

      <!-- PRICE POSITION MATRIX -->
      <section class="section">
        <h2 class="nu-section-title">Price <span>Position Matrix</span></h2>
        <p class="section-sub">Fill in dollar figures before submitting offer. Keep target, opening, and walk-away visible during every call.</p>
        <table class="neg-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>$ / Sq Ft</th>
              <th>Total</th>
              <th>Concessions</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening Offer</strong></td>
              <td>to set</td>
              <td>to set</td>
              <td>Seller pays title &amp; $10k closing credit</td>
              <td><span class="pill open">Anchor Low</span></td>
            </tr>
            <tr>
              <td><strong>Target Close</strong></td>
              <td>to set</td>
              <td>to set</td>
              <td>Split title, $5k credit, 30-day close</td>
              <td><span class="pill target">Goal</span></td>
            </tr>
            <tr>
              <td><strong>Walk-Away Ceiling</strong></td>
              <td>to set</td>
              <td>to set</td>
              <td>Clean — no credits, no repairs</td>
              <td><span class="pill walk">Do Not Exceed</span></td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 14px; font-size: 0.85rem; color: #777;">Note — figures are intentionally blank until comps and inspection are complete. No dollar amount should go in writing before step 2 and step 3 above are documented.</p>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <p class="section-sub">Everything that must be verified before a number goes in writing.</p>
        <ul class="checklist">
          <li><strong>Title history</strong> — 20-year chain, deed instruments, easements <span class="owner">Attorney</span></li>
          <li><strong>Tax assessment &amp; millage</strong> — last three years of property tax <span class="owner">Aaron</span></li>
          <li><strong>Survey &amp; boundary</strong> — recent survey or order a new one <span class="owner">Surveyor</span></li>
          <li><strong>Structural inspection</strong> — foundation, roof, HVAC, electrical, plumbing <span class="owner">Inspector</span></li>
          <li><strong>Environmental / septic / well</strong> — verify public utilities or private systems <span class="owner">Inspector</span></li>
          <li><strong>HOA or covenant review</strong> — dues, architectural restrictions, pending assessments <span class="owner">Attorney</span></li>
          <li><strong>Financing pre-approval</strong> — letter from Renasant (Patrick Lavette) <span class="owner">Aaron</span></li>
          <li><strong>Insurance quote</strong> — hazard, flood zone verification, replacement cost <span class="owner">Agent</span></li>
          <li><strong>Comparable sales</strong> — three closed comps within 1 mile, last 180 days <span class="owner">Aaron</span></li>
          <li><strong>Seller motivation</strong> — reason for sale, timeline pressure, prior offers <span class="owner">Agent</span></li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="section">
        <h2 class="nu-section-title">Working <span>Timeline</span></h2>
        <p class="section-sub">Target 45-day path from diligence to close. Dates anchor off signed purchase agreement (Day 0).</p>
        <div class="timeline">
          <div class="t-item">
            <div class="when">Week 0 — Pre-offer</div>
            <div class="what">Comps pulled, pre-inspection walkthrough, financing pre-approval confirmed, walk-away ceiling locked in writing.</div>
          </div>
          <div class="t-item">
            <div class="when">Day 0 — Offer Submitted</div>
            <div class="what">Written offer delivered with proof-of-funds, pre-approval letter, and 14-day inspection contingency.</div>
          </div>
          <div class="t-item">
            <div class="when">Day 1–5 — Negotiation Window</div>
            <div class="what">Two counter rounds maximum. If spread does not close inside walk-away ceiling, pause 72 hours and reassess.</div>
          </div>
          <div class="t-item">
            <div class="when">Day 6–20 — Under Contract</div>
            <div class="what">Formal inspection, appraisal ordered, title commitment pulled, repair/credit negotiation based on inspection report.</div>
          </div>
          <div class="t-item">
            <div class="when">Day 21–35 — Underwriting</div>
            <div class="what">Lender underwriting, insurance binder, final walkthrough scheduled, wire instructions verified by phone directly with closing attorney.</div>
          </div>
          <div class="t-item">
            <div class="when">Day 36–45 — Close</div>
            <div class="what">Final walkthrough 24 hours before closing, HUD reviewed line-by-line, signing, keys, deed recorded.</div>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="section">
        <h2 class="nu-section-title">Risk <span>Register</span></h2>
        <p class="section-sub">Known exposures on a 7,098 sq ft estate transaction — each listed with the intended mitigation.</p>
        <div class="risk-grid">
          <div class="risk-card">
            <h4>Appraisal Gap</h4>
            <p>Large-footprint estates are hard to comp and frequently appraise below agreed price. Shortfall falls on buyer cash-to-close.</p>
            <span class="mit">Mitigation · Cap appraisal-gap coverage at a fixed dollar number inside the contract.</span>
          </div>
          <div class="risk-card warn">
            <h4>Deferred Maintenance</h4>
            <p>7,000+ sq ft homes carry oversized HVAC, roof, and mechanical systems. A single replacement can exceed $25k.</p>
            <span class="mit">Mitigation · Full inspection + specialist HVAC/roof inspections before inspection period expires.</span>
          </div>
          <div class="risk-card warn">
            <h4>Title or Easement Surprises</h4>
            <p>Estate parcels often carry old easements, boundary encroachments, or family deed history that can cloud title.</p>
            <span class="mit">Mitigation · Attorney-pulled 20-year chain + current survey before removing contingency.</span>
          </div>
          <div class="risk-card">
            <h4>Emotional Anchoring</h4>
            <p>Sellers of personal estates often price above market based on sentiment. Easy to chase and break the walk-away line.</p>
            <span class="mit">Mitigation · Ceiling is written down in advance, shared with attorney, not moved mid-call.</span>
          </div>
          <div class="risk-card ok">
            <h4>Financing Capacity</h4>
            <p>Pre-approval pathway exists through Renasant with an established relationship.</p>
            <span class="mit">Status · Confirm letter amount before offer submission.</span>
          </div>
          <div class="risk-card warn">
            <h4>Insurance &amp; Flood Zone</h4>
            <p>Some Buttewoods parcels touch FEMA special-flood-hazard overlay; carrier appetite for large estates is narrow.</p>
            <span class="mit">Mitigation · Bind insurance quote before appraisal contingency drops.</span>
          </div>
        </div>
      </section>

      <!-- GROUND RULES -->
      <section class="section">
        <h2 class="nu-section-title">Ground <span>Rules</span></h2>
        <p class="section-sub">Non-negotiables during the negotiation itself.</p>
        <ul class="checklist">
          <li><strong>No verbal numbers.</strong> Every price, credit, and timeline in writing only.</li>
          <li><strong>Walk-away ceiling is sacred.</strong> If counter crosses it, pause 72 hours minimum before any response.</li>
          <li><strong>Only two counters.</strong> After the second counter, restate final position in writing and stop.</li>
          <li><strong>Always sleep on it.</strong> No same-day response on any number above the target-close figure.</li>
          <li><strong>Wire verification is voice-only.</strong> Closing attorney's wire instructions confirmed by phone at a number pulled from their public website — never from the emailed instructions.</li>
          <li><strong>Final walkthrough is mandatory.</strong> Within 24 hours of closing, in person, with the inspection report in hand.</li>
        </ul>
      </section>

      <!-- DECISION BOX -->
      <div class="decision-box">
        <h3>Decision Required</h3>
        <p><strong style="color:#fff;">Before any offer goes in writing on 4505 Buttewoods, Aaron signs off on three numbers:</strong> the opening offer, the target-close price, and the walk-away ceiling. Those three figures — set with fresh comps and a completed pre-inspection — become the guardrails for every counter that follows.</p>
        <p>Until those numbers are locked in writing, this file stays in <em>pre-offer diligence</em> and no verbal indication of price is given to the listing agent.</p>
        <div class="actions">
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20-%20Offer%20Position%20Locked&amp;body=Opening%20offer%3A%20%0ATarget%20close%3A%20%0AWalk-away%20ceiling%3A%20%0A%0ASigned%2C%20Aaron" class="btn btn-primary">Lock Offer Position</a>
          <a href="tel:2055001343" class="btn btn-secondary">Call Aaron · 205-500-1343</a>
        </div>
        <div class="sig">
          Prepared for Aaron C. Norris — Founder &amp; CEO, Norris Utilities®, LLC · April 24, 2026
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
    <div class="nu-footer-confidential">Confidential · Internal Use Only</div>
  </footer>

</body>
</html>