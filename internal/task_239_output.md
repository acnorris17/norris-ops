<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
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
      --nu-success: #2E7D32;
      --nu-warning: #ED6C02;
      --nu-danger: #C62828;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.65;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-doc-label {
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      padding: 6px 18px;
      border: 1px solid rgba(6,208,255,0.5);
      border-radius: 20px;
      margin-bottom: 20px;
      background: rgba(0,0,0,0.15);
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ TITLE BLOCK ══ */
    .title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .title-block h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .title-block h1 .accent { color: var(--nu-blue-deep); }
    .title-block .subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 760px;
      margin: 0 auto 18px;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 16px;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
      padding: 8px 16px;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
    }
    .meta-chip .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--nu-blue);
    }
    .meta-chip.priority .dot { background: var(--nu-warning); }
    .meta-chip.action .dot { background: var(--nu-danger); }

    /* ══ SECTION HEADERS ══ */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      letter-spacing: -0.01em;
    }
    .section-title .first-word { color: var(--nu-blue-deep); }
    .section-title .rest { color: var(--nu-dark-text); }
    .section-title::after {
      content: '';
      display: block;
      width: 60px; height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-top: 8px;
      border-radius: 2px;
    }

    /* ══ PROPERTY SUMMARY CARD ══ */
    .property-summary {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, var(--nu-blue-deep) 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 10px 30px rgba(0,0,51,0.25);
      margin-bottom: 48px;
      position: relative;
      overflow: hidden;
    }
    .property-summary::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 60%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(6,208,255,0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .property-summary h2 {
      font-weight: 900;
      font-size: 1.8rem;
      margin-bottom: 6px;
      color: var(--nu-white);
      position: relative;
      z-index: 1;
    }
    .property-summary .address {
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.05em;
      margin-bottom: 24px;
      position: relative;
      z-index: 1;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 20px;
      position: relative;
      z-index: 1;
    }
    .stat {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .stat .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.65);
      margin-bottom: 4px;
    }
    .stat .value {
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.15;
    }
    .stat .sub {
      font-size: 0.8rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      margin-top: 2px;
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* ══ CARDS ══ */
    .card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue-deep);
      margin-bottom: 14px;
      letter-spacing: -0.005em;
    }
    .card ul {
      list-style: none;
    }
    .card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .card ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 10px; height: 10px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      transform: rotate(45deg);
      border-radius: 1px;
    }

    /* ══ NEGOTIATION POSTURE TABLE ══ */
    .posture-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      font-size: 0.92rem;
    }
    .posture-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .posture-table th:first-child { border-top-left-radius: 8px; }
    .posture-table th:last-child { border-top-right-radius: 8px; }
    .posture-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .posture-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .posture-table td strong { color: var(--nu-blue-deep); }
    .price-cell {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }

    /* ══ STEP LIST (Action Plan) ══ */
    .steps {
      counter-reset: step;
      list-style: none;
    }
    .steps > li {
      counter-increment: step;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 20px 22px 20px 72px;
      margin-bottom: 14px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .steps > li::before {
      content: counter(step, decimal-leading-zero);
      position: absolute;
      left: 18px; top: 18px;
      width: 40px; height: 40px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-blue-deep));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .steps > li h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1.02rem;
    }
    .steps > li p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .step-owner {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      background: rgba(0,0,255,0.06);
      padding: 4px 10px;
      border-radius: 4px;
      margin-top: 6px;
    }

    /* ══ DUE DILIGENCE CHECKLIST ══ */
    .checklist-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .checklist-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
    }
    .checklist-card h4 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue-deep);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-cyan);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .checklist-card ul {
      list-style: none;
    }
    .checklist-card li {
      position: relative;
      padding-left: 26px;
      margin-bottom: 8px;
      font-size: 0.88rem;
      line-height: 1.5;
    }
    .checklist-card li::before {
      content: '';
      position: absolute;
      left: 0; top: 3px;
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ FINANCIAL SUMMARY ══ */
    .finance-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .finance-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px;
    }
    .finance-box .fb-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .finance-box .fb-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .finance-box .fb-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 6px;
    }
    .finance-box.highlight {
      border-top-color: var(--nu-cyan);
      background: linear-gradient(135deg, rgba(6,208,255,0.05), rgba(0,0,255,0.03));
    }

    /* ══ BADGES ══ */
    .badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 20px 10px 14px;
      margin: 0 8px 8px 0;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.03em;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, rgba(6,208,255,0.08), rgba(0,0,255,0.04));
      border-left: 5px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 28px;
    }
    .callout h4 {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 0.85rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-divider {
      width: 80px; height: 2px;
      background: linear-gradient(90deg, transparent, var(--nu-cyan), transparent);
      margin: 18px auto;
    }
    .nu-footer-small {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 10px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px 60px; }
      .title-block h1 { font-size: 1.75rem; }
      .property-summary { padding: 24px; }
      .property-summary h2 { font-size: 1.4rem; }
      .stat .value { font-size: 1.2rem; }
      .posture-table { font-size: 0.85rem; }
      .posture-table th, .posture-table td { padding: 10px 12px; }
      .steps > li { padding: 16px 18px 16px 62px; }
      .steps > li::before { left: 12px; top: 14px; width: 36px; height: 36px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card, .property-summary, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
    <div class="nu-doc-label">Confidential Acquisition Brief</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- TITLE BLOCK -->
      <section class="title-block">
        <h1><span class="accent">Estate Acquisition</span> — 4505 Buttewoods</h1>
        <p class="subtitle">Private negotiation brief for a 7,098 sq ft estate. Working file for Aaron C. Norris — outlines stance, position, financial framing, due diligence, and the sequenced steps from first contact through close.</p>
        <div class="meta-row">
          <span class="meta-chip action"><span class="dot"></span>reMarkable Action Item</span>
          <span class="meta-chip priority"><span class="dot"></span>Priority — Confidential</span>
          <span class="meta-chip"><span class="dot"></span>Prepared 2026-04-24</span>
          <span class="meta-chip"><span class="dot"></span>Owner: Aaron C. Norris</span>
        </div>
      </section>

      <!-- PROPERTY SUMMARY -->
      <section class="property-summary">
        <h2>Target Property Snapshot</h2>
        <div class="address">4505 BUTTEWOODS — PRIVATE RESIDENCE</div>
        <div class="stats-grid">
          <div class="stat">
            <div class="label">Total Floor Area</div>
            <div class="value">7,098</div>
            <div class="sub">square feet</div>
          </div>
          <div class="stat">
            <div class="label">Property Type</div>
            <div class="value">Estate</div>
            <div class="sub">single-owner residence</div>
          </div>
          <div class="stat">
            <div class="label">Transaction Mode</div>
            <div class="value">Negotiated</div>
            <div class="sub">direct to seller</div>
          </div>
          <div class="stat">
            <div class="label">Status</div>
            <div class="value">Open</div>
            <div class="sub">working the offer</div>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <h4>Aaron's Working Principle</h4>
        <p>Lead with the ask, not the apology. The offer is real, the money is ready, and the close is clean. Patience wins price — walk-away leverage is the strongest lever on the table.</p>
      </div>

      <!-- OBJECTIVES SECTION -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="two-col">
          <div class="card">
            <h3>Primary Objectives</h3>
            <ul>
              <li>Acquire 4505 Buttewoods at a price that leaves room for improvements and reserves.</li>
              <li>Secure favorable terms on closing date, earnest money, contingencies, and possession.</li>
              <li>Retain walk-away posture through every round — price discipline over deal momentum.</li>
              <li>Keep the negotiation private, direct, and documented end-to-end.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Non-Negotiable Protections</h3>
            <ul>
              <li>Financing contingency — protects against appraisal or underwriting surprises.</li>
              <li>Independent inspection contingency — structural, roof, HVAC, electrical, plumbing, foundation.</li>
              <li>Clean title review — survey, easements, liens, restrictive covenants.</li>
              <li>Attorney review period before binding signature.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION POSTURE -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Offer</span> <span class="rest">Ladder &amp; Posture</span></h2>
        <p style="margin-bottom: 18px; font-size: 0.95rem;">The ladder below is a framework for structured rounds. Numeric anchors get set once comparable sales and condition reports are in hand — do not commit to opening figures until step 3 of the action plan is complete.</p>
        <div style="overflow-x: auto;">
          <table class="posture-table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Posture</th>
                <th>Talking Point</th>
                <th>Walk-Away Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>01 — Opening</strong></td>
                <td class="price-cell">Anchor below comps</td>
                <td>Based on independent comps and current condition, here is where a clean cash close lands.</td>
                <td>Seller counters at or above list without movement on terms.</td>
              </tr>
              <tr>
                <td><strong>02 — Counter</strong></td>
                <td class="price-cell">Adjust on terms</td>
                <td>Trade small price concessions for faster close, no seller credits, or favorable possession.</td>
                <td>Seller refuses inspection contingency or rushes timeline.</td>
              </tr>
              <tr>
                <td><strong>03 — Final</strong></td>
                <td class="price-cell">Best &amp; last</td>
                <td>This is the number that works. We close clean at this figure — otherwise we're done.</td>
                <td>Gap remains wider than renovation reserve can absorb.</td>
              </tr>
              <tr>
                <td><strong>04 — Walk</strong></td>
                <td class="price-cell">Pause, don't argue</td>
                <td>Thank you for your time. The door is open if the number comes back to us.</td>
                <td>Signal lost — re-engage only if seller reaches back within 30 days.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Sequenced</span> <span class="rest">Action Plan</span></h2>
        <ol class="steps">
          <li>
            <h4>Confirm Seller Motivation &amp; Channel</h4>
            <p>Identify who is authorized to negotiate. Is it the owner directly, a representative, an agent, or an estate executor? Establish the single point of contact and the preferred channel (phone, email, in-person).</p>
            <span class="step-owner">Owner: Aaron</span>
          </li>
          <li>
            <h4>Pull Comparable Sales &amp; Market Reads</h4>
            <p>Request a comparable market analysis of estates 5,000–8,000 sq ft within a defined radius sold in the trailing 12 months. Note price-per-square-foot range, average days on market, and any seller concessions.</p>
            <span class="step-owner">Owner: Aaron + buyer's agent if engaged</span>
          </li>
          <li>
            <h4>Commission Independent Valuation</h4>
            <p>Order a private appraisal before any written offer goes in. Pair with a walk-through by a contractor to flag deferred maintenance, roof life, HVAC age, and any structural concerns. Build a reserve budget from findings.</p>
            <span class="step-owner">Owner: Aaron + contractor</span>
          </li>
          <li>
            <h4>Pre-Qualify Financing or Proof of Funds</h4>
            <p>Have financing pre-approval in hand, or proof of funds letter from Renasant Bank (Patrick Lavette). A clean, verified buyer carries more weight than any verbal promise.</p>
            <span class="step-owner">Owner: Aaron — Patrick Lavette at Renasant</span>
          </li>
          <li>
            <h4>Draft Opening Offer &amp; Letter of Intent</h4>
            <p>Non-binding LOI with price, earnest money, contingency list, proposed close date, and possession terms. Route through attorney before sending. The LOI signals seriousness without exposure.</p>
            <span class="step-owner">Owner: Aaron + real estate attorney</span>
          </li>
          <li>
            <h4>Open Negotiation — Round 01</h4>
            <p>Deliver the offer directly. Be cordial, firm, and unhurried. Listen twice as much as you speak in the first meeting. Seller tells you what matters most within the first ten minutes — price, timing, or legacy.</p>
            <span class="step-owner">Owner: Aaron</span>
          </li>
          <li>
            <h4>Work the Ladder — Rounds 02, 03, 04</h4>
            <p>Hold the posture framework. Trade terms for price where possible. Document every counter in writing. Never concede without a reciprocal move from the other side.</p>
            <span class="step-owner">Owner: Aaron + attorney review each round</span>
          </li>
          <li>
            <h4>Under Contract — Due Diligence Window</h4>
            <p>Activate the full inspection and title review checklist below. Any material finding re-opens price or terms negotiation, or triggers the contingency exit.</p>
            <span class="step-owner">Owner: Aaron + inspection team</span>
          </li>
          <li>
            <h4>Close &amp; Funding</h4>
            <p>Confirm title is clean, financing or funds clear, closing statement matches the negotiated terms, and possession is timed to your plan. Sign, fund, close. Record the deed.</p>
            <span class="step-owner">Owner: Aaron + closing attorney + Renasant</span>
          </li>
        </ol>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="checklist-grid">
          <div class="checklist-card">
            <h4>Structural &amp; Building</h4>
            <ul>
              <li>Foundation inspection — settlement, cracks, drainage</li>
              <li>Roof age, condition, remaining life</li>
              <li>Framing, load-bearing walls, attic</li>
              <li>Exterior envelope — siding, flashing, masonry</li>
              <li>Windows, doors, garage systems</li>
            </ul>
          </div>
          <div class="checklist-card">
            <h4>Mechanical Systems</h4>
            <ul>
              <li>HVAC — all units, age, service history</li>
              <li>Plumbing — supply lines, drains, water heater</li>
              <li>Electrical — panel, grounding, capacity</li>
              <li>Generator, solar, backup systems if present</li>
              <li>Pool, irrigation, well, septic if applicable</li>
            </ul>
          </div>
          <div class="checklist-card">
            <h4>Title &amp; Legal</h4>
            <ul>
              <li>Title search — liens, judgments, encumbrances</li>
              <li>Survey — boundary, encroachments, easements</li>
              <li>Restrictive covenants, HOA documents</li>
              <li>Tax history and current assessed value</li>
              <li>Any prior permits and unpermitted work</li>
            </ul>
          </div>
          <div class="checklist-card">
            <h4>Environmental &amp; Safety</h4>
            <ul>
              <li>Radon, mold, asbestos, lead-based paint</li>
              <li>Termite and wood-destroying organism letter</li>
              <li>Flood zone verification and insurance quote</li>
              <li>Oil tank or underground storage history</li>
              <li>Water quality test if on well</li>
            </ul>
          </div>
          <div class="checklist-card">
            <h4>Financial Verification</h4>
            <ul>
              <li>Utility bills — 12-month history</li>
              <li>Property tax bill — current and prior year</li>
              <li>Insurance quote on current replacement cost</li>
              <li>HOA dues, assessments, and transfer fees</li>
              <li>Mortgage payoff confirmation from seller side</li>
            </ul>
          </div>
          <div class="checklist-card">
            <h4>Condition &amp; Reserves</h4>
            <ul>
              <li>Punch list of deferred maintenance</li>
              <li>Renovation wish list with contractor bids</li>
              <li>Immediate repair reserve (first 12 months)</li>
              <li>Capital reserve (36-month horizon)</li>
              <li>Contingency fund for surprises post-close</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FINANCIAL FRAMING -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Financial</span> <span class="rest">Framing</span></h2>
        <div class="finance-grid">
          <div class="finance-box">
            <div class="fb-label">Purchase Price Target</div>
            <div class="fb-value">To Set</div>
            <div class="fb-note">Anchored to comps + condition — populate after appraisal in step 3.</div>
          </div>
          <div class="finance-box">
            <div class="fb-label">Earnest Money</div>
            <div class="fb-value">1–2%</div>
            <div class="fb-note">Standard range — held in escrow, refundable within contingencies.</div>
          </div>
          <div class="finance-box">
            <div class="fb-label">Closing Costs</div>
            <div class="fb-value">2–4%</div>
            <div class="fb-note">Title, recording, attorney, lender origination if financed.</div>
          </div>
          <div class="finance-box highlight">
            <div class="fb-label">Repair Reserve</div>
            <div class="fb-value">Build</div>
            <div class="fb-note">Sized from contractor walk-through — protects year-one cash flow.</div>
          </div>
          <div class="finance-box">
            <div class="fb-label">Cash vs. Financed</div>
            <div class="fb-value">Decide</div>
            <div class="fb-note">Renasant pre-approval via Patrick Lavette — compare leverage cost vs. cash premium leverage at the table.</div>
          </div>
          <div class="finance-box">
            <div class="fb-label">Annual Carry</div>
            <div class="fb-value">Model</div>
            <div class="fb-note">Taxes, insurance, utilities, HOA, maintenance — full 12-month operating cost.</div>
          </div>
        </div>
      </section>

      <!-- COMMUNICATION RULES -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Communication</span> <span class="rest">Protocol</span></h2>
        <div class="two-col">
          <div class="card">
            <h3>Tone at the Table</h3>
            <ul>
              <li>Direct, warm, genuine, confident. Never pushy. Never apologetic.</li>
              <li>Lead with the ask or the key point — never bury it.</li>
              <li>Silence is a tool. After the number lands, let it sit.</li>
              <li>Always earn the business — never plead for it.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Documentation Discipline</h3>
            <ul>
              <li>Every offer, counter, and concession in writing — email or signed form.</li>
              <li>Summary email after every verbal conversation, same day.</li>
              <li>Attorney copied on every binding document before signature.</li>
              <li>Maintain private file — no details shared outside the decision circle.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PROFESSIONAL TEAM -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Professional</span> <span class="rest">Team</span></h2>
        <div>
          <span class="badge">Real Estate Attorney — to engage</span>
          <span class="badge">Renasant Bank — Patrick Lavette</span>
          <span class="badge">Independent Appraiser — to engage</span>
          <span class="badge">Licensed Home Inspector — to engage</span>
          <span class="badge">Title Company — to select</span>
          <span class="badge">Trusted Contractor — walk-through</span>
        </div>
        <p style="margin-top: 16px; font-size: 0.92rem; color: var(--nu-body-text);">Engage each role in writing with a defined scope and flat fee where possible. The professional team is there to protect the transaction, not to drive it — Aaron runs the negotiation personally.</p>
      </section>

      <!-- RISKS -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Risks</span> <span class="rest">&amp; Watch-Outs</span></h2>
        <div class="two-col">
          <div class="card">
            <h3>Deal Risks</h3>
            <ul>
              <li>Emotional overpay — the property feels right, discipline slips. Walk-away posture protects against this.</li>
              <li>Hidden condition issues behind cosmetic finish — always pull back covers, crawl spaces, attic.</li>
              <li>Title surprises — estate properties can carry unresolved claims, old easements, or boundary disputes.</li>
              <li>Seller re-trade after inspection — lock the price unless a material defect is documented.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Market &amp; Carry Risks</h3>
            <ul>
              <li>Interest rate drift during the option period — lock early if financing.</li>
              <li>Insurance premium shock — Alabama market has hardened. Quote before committing.</li>
              <li>Unexpected tax reassessment post-sale — review history and factor in worst case.</li>
              <li>Maintenance on a 7,098 sq ft envelope is non-trivial — the carry model must be honest.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SUCCESS CRITERIA -->
      <section class="section">
        <h2 class="section-title"><span class="first-word">Success</span> <span class="rest">Looks Like</span></h2>
        <div class="card" style="border-left: 5px solid var(--nu-blue);">
          <ul>
            <li>Signed purchase contract at or below the final-round target price.</li>
            <li>All protective contingencies in place — financing, inspection, title, attorney review.</li>
            <li>Clean inspection outcome or documented concessions covering every material finding.</li>
            <li>Title clear, survey clean, insurance bound, closing costs within the 2–4% working range.</li>
            <li>Reserves funded on day one — house doesn't deplete operating capital in the first 12 months.</li>
            <li>Private transaction — nothing leaked, nothing rushed, nothing regretted.</li>
          </ul>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="section" style="margin-bottom: 16px;">
        <h2 class="section-title"><span class="first-word">Immediate</span> <span class="rest">Next Actions</span></h2>
        <ol class="steps" style="counter-reset: step;">
          <li>
            <h4>Confirm Who to Call</h4>
            <p>Pin down the seller-side point of contact for 4505 Buttewoods this week. Log the name, role, phone, email, and preferred channel.</p>
            <span class="step-owner">This Week</span>
          </li>
          <li>
            <h4>Schedule an Appraisal &amp; Contractor Walk</h4>
            <p>Line up private valuation and an honest condition read before any number goes in writing.</p>
            <span class="step-owner">Next 14 Days</span>
          </li>
          <li>
            <h4>Engage Real Estate Attorney</h4>
            <p>Retain attorney for LOI drafting, contract review, and closing. Flat-fee engagement letter on file.</p>
            <span class="step-owner">Before Offer</span>
          </li>
          <li>
            <h4>Refresh Renasant Pre-Approval</h4>
            <p>Get an updated pre-approval or proof of funds letter from Patrick Lavette dated within 30 days of offer.</p>
            <span class="step-owner">Before Offer</span>
          </li>
        </ol>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-small">
      Confidential working document — prepared 2026-04-24. For the decision circle only.
    </div>
  </footer>

</body>
</html>