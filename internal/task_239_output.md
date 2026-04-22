<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Negotiation Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #0B8043;
      --nu-warning: #D93025;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
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
      width: 82px; height: 82px;
      margin: 0 auto 16px;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      backdrop-filter: blur(6px);
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

    /* CONTENT WRAP */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1160px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .nu-title-block h1 {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .nu-title-block h1 .accent {
      color: var(--nu-blue);
    }
    .nu-title-block .subtitle {
      font-size: 1.05rem;
      color: #666;
      font-weight: 400;
      letter-spacing: 0.04em;
    }
    .nu-meta-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px 24px;
      margin-top: 20px;
      font-size: 0.88rem;
      color: #555;
    }
    .nu-meta-row span strong {
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-right: 6px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-top: 8px;
    }

    /* PROPERTY SNAPSHOT */
    .nu-property-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border: 1px solid #d6e3ff;
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 24px;
    }
    .nu-property-card h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-navy);
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px 28px;
    }
    .nu-property-grid dt {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-property-grid dd {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* STAT ROW */
    .nu-stat-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .nu-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-stat .num {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-stat .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
    }

    /* BADGES */
    .nu-badge-list { list-style: none; padding: 0; margin: 0; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
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
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TABLE */
    .nu-table-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      margin-bottom: 24px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-table td.num, .nu-table th.num { text-align: right; font-variant-numeric: tabular-nums; }
    .nu-table td.pos { color: var(--nu-success); font-weight: 700; }
    .nu-table td.neg { color: var(--nu-warning); font-weight: 700; }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-navy);
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed #e8e8ec;
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      position: absolute;
      left: 6px;
      top: 5px;
    }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      margin-bottom: 24px;
    }
    .nu-rung {
      padding: 26px 22px;
      text-align: center;
      color: var(--nu-white);
      position: relative;
    }
    .nu-rung-1 { background: linear-gradient(135deg, #0B8043 0%, #34A853 100%); }
    .nu-rung-2 { background: linear-gradient(135deg, var(--nu-blue) 0%, #0066ee 100%); }
    .nu-rung-3 { background: linear-gradient(135deg, #D93025 0%, #E8712C 100%); }
    .nu-rung .rung-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0.92;
      margin-bottom: 8px;
    }
    .nu-rung .rung-price {
      font-size: 1.9rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-rung .rung-sub {
      font-size: 0.85rem;
      font-weight: 400;
      opacity: 0.95;
    }

    /* SCRIPT BOX */
    .nu-script {
      background: #f8faff;
      border: 1px solid #d6e3ff;
      border-left: 4px solid var(--nu-cyan);
      border-radius: 0 8px 8px 0;
      padding: 22px 26px;
      margin-bottom: 18px;
    }
    .nu-script .script-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-script p {
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-script p + p { margin-top: 10px; }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      border-left: 3px solid var(--nu-cyan);
      margin-left: 8px;
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -37px;
      top: 4px;
      width: 16px; height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .nu-timeline-item .when {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-timeline-item .what {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 20px 26px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
    }
    .nu-callout .cal-label {
      font-weight: 900;
      color: #8a6500;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      margin-bottom: 6px;
    }
    .nu-callout p { color: var(--nu-dark-text); font-size: 0.98rem; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 12px 16px 12px 48px;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-blue);
      margin-right: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
      font-weight: 400;
    }
    .nu-footer-contact strong {
      font-weight: 700;
      color: var(--nu-white);
      display: block;
      margin-bottom: 4px;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.12);
      font-size: 0.78rem;
      opacity: 0.7;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-two-col, .nu-ladder { grid-template-columns: 1fr; }
      .nu-wrap { padding: 44px 22px 60px; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-title-block h1 { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .nu-rung .rung-price { font-size: 1.4rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-stat { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-label">Acquisition Negotiation Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1><span class="accent">4505 Buttewoods</span> Estate — Purchase Negotiation Brief</h1>
        <div class="subtitle">7,098 sq ft private residence acquisition · Strategic framework &amp; offer ladder</div>
        <div class="nu-meta-row">
          <span><strong>Prepared For</strong> Aaron C. Norris</span>
          <span><strong>Prepared</strong> April 22, 2026</span>
          <span><strong>Classification</strong> Personal &amp; Confidential</span>
          <span><strong>Source</strong> reMarkable Action Item</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>

        <div class="nu-property-card">
          <h3>4505 Buttewoods — Subject Property</h3>
          <dl class="nu-property-grid">
            <div>
              <dt>Address</dt>
              <dd>4505 Buttewoods</dd>
            </div>
            <div>
              <dt>Heated Square Feet</dt>
              <dd>7,098 sq ft</dd>
            </div>
            <div>
              <dt>Classification</dt>
              <dd>Private Estate Residence</dd>
            </div>
            <div>
              <dt>Transaction Type</dt>
              <dd>Direct Purchase Negotiation</dd>
            </div>
            <div>
              <dt>Buyer Entity</dt>
              <dd>To be confirmed at offer</dd>
            </div>
            <div>
              <dt>Target Close</dt>
              <dd>Aaron to set</dd>
            </div>
          </dl>
        </div>

        <div class="nu-stat-row">
          <div class="nu-stat">
            <div class="num">7,098</div>
            <div class="lbl">Heated Sq Ft</div>
          </div>
          <div class="nu-stat">
            <div class="num">1</div>
            <div class="lbl">Primary Objective</div>
          </div>
          <div class="nu-stat">
            <div class="num">3</div>
            <div class="lbl">Offer Rungs</div>
          </div>
          <div class="nu-stat">
            <div class="num">30</div>
            <div class="lbl">Days to Inspection</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Objective</span></h2>
        <div class="nu-card">
          <p style="font-size:1.05rem; color: var(--nu-dark-text);">
            Acquire the 7,098 sq ft residence at 4505 Buttewoods at the lowest defensible price the seller will accept, with clean terms, a conservative inspection window, and no appraisal surprises. Secondary objective: protect optionality — the deal should be easy to walk from if material defects surface or pricing drifts above the ceiling.
          </p>
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Pre-Negotiation</span> <span class="rest">Checklist</span></h2>
        <ul class="nu-checklist">
          <li><strong>1.</strong> Pull last three comparable sales within one mile at 5,500–8,500 sq ft; compute $/sq ft median and high/low.</li>
          <li><strong>2.</strong> Pull tax assessor value, last deed, and any outstanding liens or mortgages of record.</li>
          <li><strong>3.</strong> Confirm seller motivation — estate, relocation, upgrade, distressed, or lifestyle sale. Motivation dictates anchor.</li>
          <li><strong>4.</strong> Verify days on market and any prior price reductions. Every reduction is leverage.</li>
          <li><strong>5.</strong> Identify any dual agency, selling agent relationship, or listing exclusivity that affects negotiation posture.</li>
          <li><strong>6.</strong> Confirm financing track: cash, conventional, portfolio, or bridge from Patrick Lavette at Renasant Bank.</li>
          <li><strong>7.</strong> Independent pre-offer walkthrough: roof, HVAC age, foundation, waterproofing, electrical panel, and drainage.</li>
          <li><strong>8.</strong> Set personal ceiling (walk-away price) in writing before first offer is tendered.</li>
        </ul>
      </section>

      <!-- VALUATION TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Valuation Lane</th>
                <th>Method</th>
                <th class="num">$/Sq Ft Input</th>
                <th class="num">Implied Value</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comparable Sales — Median</td>
                <td>Comparable sales, last 12 months, 5,500–8,500 sq ft, same zip</td>
                <td class="num">Pull from MLS</td>
                <td class="num">Median $/sf × 7,098</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Comparable Sales — Low Band</td>
                <td>Lowest third of recent comps (condition-adjusted floor)</td>
                <td class="num">Pull from MLS</td>
                <td class="num">Low $/sf × 7,098</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Replacement Cost</td>
                <td>Land + current build cost at estate tier (est. $225–$275/sf)</td>
                <td class="num">$225–$275</td>
                <td class="num">Land + (7,098 × build)</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Tax Assessor</td>
                <td>Public record — floor only, typically understates market</td>
                <td class="num">Assessor record</td>
                <td class="num">Assessed value</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Income / Rental Parity</td>
                <td>If held as rental: gross rent × 120 = rough cap test</td>
                <td class="num">Market rent est.</td>
                <td class="num">Rent × 120</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout">
          <div class="cal-label">Rule of the room</div>
          <p>Never reveal financing capacity, target price, or timeline until seller has stated theirs. First number on the table always becomes the anchor — make it theirs, not yours.</p>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-ladder">
          <div class="nu-rung nu-rung-1">
            <div class="rung-label">Opening Offer</div>
            <div class="rung-price">Low Comp − 8%</div>
            <div class="rung-sub">Anchors low, preserves walk-room. Expect counter.</div>
          </div>
          <div class="nu-rung nu-rung-2">
            <div class="rung-label">Target Close</div>
            <div class="rung-price">Median Comp − 5%</div>
            <div class="rung-sub">The number you actually expect to sign at. Clean terms.</div>
          </div>
          <div class="nu-rung nu-rung-3">
            <div class="rung-label">Walk-Away Ceiling</div>
            <div class="rung-price">Median Comp + 2%</div>
            <div class="rung-sub">Hard stop. Above this line, deal is not worth doing.</div>
          </div>
        </div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h4>Leverage Points to Push</h4>
            <ul>
              <li>Days on market — every week past 60 is a concession.</li>
              <li>Prior price reductions are evidence of seller flexibility.</li>
              <li>Inspection findings: HVAC age, roof, drainage, waterproofing.</li>
              <li>Short-dated close date (certainty of execution) is its own currency.</li>
              <li>No-contingency or limited-contingency offer earns 1–3% back.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h4>Concessions to Hold in Reserve</h4>
            <ul>
              <li>Flexible close date to accommodate seller move-out.</li>
              <li>Rent-back for 30–60 days post-close at market rate.</li>
              <li>Seller keeps specific fixtures or personal items.</li>
              <li>Accept "as-is" on cosmetic items only, not structural.</li>
              <li>Larger earnest money in exchange for price concession.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TERMS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Key</span> <span class="rest">Terms to Lock</span></h2>
        <ol class="nu-badge-list">
          <li class="nu-badge"><span class="badge-num">1</span>Purchase price at or below walk-away ceiling — no exceptions.</li>
          <li class="nu-badge"><span class="badge-num">2</span>Due diligence / inspection window: 14–21 days minimum; 30 preferred.</li>
          <li class="nu-badge"><span class="badge-num">3</span>Financing contingency if not paying cash — 30 to 45 days.</li>
          <li class="nu-badge"><span class="badge-num">4</span>Appraisal contingency at or above purchase price.</li>
          <li class="nu-badge"><span class="badge-num">5</span>Clean title with title insurance; seller pays owner's policy.</li>
          <li class="nu-badge"><span class="badge-num">6</span>Seller disclosures in writing, including roof age, HVAC age, any water intrusion.</li>
          <li class="nu-badge"><span class="badge-num">7</span>Home warranty from seller at close — $700–$900 item, high-leverage.</li>
          <li class="nu-badge"><span class="badge-num">8</span>Earnest money held by neutral third party, refundable within inspection window.</li>
        </ol>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Scripts</span></h2>

        <div class="nu-script">
          <div class="script-label">Opening the conversation</div>
          <p>"I appreciate you taking the time. Before I put anything in writing, I want to understand what you're looking for from a sale — timing, any must-haves, how you'd like to get to closing. Once I know what matters to you, I can structure something that works for both of us."</p>
        </div>

        <div class="nu-script">
          <div class="script-label">Anchoring low without insult</div>
          <p>"Based on the comparable sales I've pulled — homes between 5,500 and 8,500 square feet sold in the last twelve months within a mile — the data lands me in a range that's below list. I'm prepared to move quickly with clean terms, but the number has to be supported by the market."</p>
        </div>

        <div class="nu-script">
          <div class="script-label">Handling a counter above ceiling</div>
          <p>"I hear you, and I respect where you are on price. My ceiling on this property is a firm number — I've looked at it every way I know how. If we can't close the gap, I'd rather leave things cordial and revisit in ninety days than push past what the comps support."</p>
        </div>

        <div class="nu-script">
          <div class="script-label">Asking for a concession after inspection</div>
          <p>"The inspection turned up three items I wasn't expecting. I'm not asking you to fix them — I'm asking you to adjust the price by the cost of the repairs my contractor quoted, so the deal still works at close. That keeps the timeline intact and lets us both move on."</p>
        </div>

        <div class="nu-script">
          <div class="script-label">Closing the deal</div>
          <p>"Here's where I can land — price, terms, close date. If we agree tonight, I'll have my attorney draft the contract in the morning and earnest money wired by end of week. I'd like to shake hands on this and be done."</p>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Red</span> <span class="rest">Flags — Walk Triggers</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h4>Structural &amp; Physical</h4>
            <ul>
              <li>Foundation movement, visible cracks wider than 1/4".</li>
              <li>Active water intrusion or prior flooding not disclosed.</li>
              <li>Roof with less than 5 years of life without credit at close.</li>
              <li>Electrical panel: Federal Pacific, Zinsco, or known defect brand.</li>
              <li>Septic or drainage issues on an estate-sized lot.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h4>Title, Legal &amp; Financial</h4>
            <ul>
              <li>Unclear title, missing deeds, probate not closed.</li>
              <li>Open permits, unpermitted additions to the 7,098 sq ft count.</li>
              <li>HOA or covenant restrictions not disclosed in listing.</li>
              <li>Seller unwilling to sign standard disclosure documents.</li>
              <li>Appraisal comes in more than 3% below contract price.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Execution</span> <span class="rest">Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="when">Day 0 — Pre-Offer</div>
            <div class="what">Complete valuation framework, confirm financing, set walk-away ceiling in writing. Independent walkthrough before any offer.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 1 — First Offer</div>
            <div class="what">Tender opening offer at low-comp minus 8%. Do not reveal ceiling. Hold on inspection window length and earnest money as trade chips.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 2–5 — Counter Cycle</div>
            <div class="what">Work seller counter to target close number. If gap exceeds 5% of target, pause 24 hours before responding. Silence is leverage.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 5–7 — Contract Execution</div>
            <div class="what">Attorney drafts or reviews; earnest money wired to escrow. Confirm title order opened the same day.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 7–28 — Due Diligence</div>
            <div class="what">Full inspection, roof certification, HVAC service records, termite bond, survey, title review. Any finding triggers concession request, not a cancellation — unless red-flag territory.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 28–45 — Financing &amp; Appraisal</div>
            <div class="what">Appraisal ordered, underwriting completed. If appraisal comes in low, re-open price conversation with data in hand.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="when">Day 45–60 — Close</div>
            <div class="what">Final walkthrough 24 hours before close. Closing statement reviewed line-by-line. Wire on morning of close, keys at funding, not before.</div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Aaron's</span> <span class="rest">Next Three Actions</span></h2>
        <ol class="nu-badge-list">
          <li class="nu-badge"><span class="badge-num">1</span>Pull comps, tax record, and days-on-market file for 4505 Buttewoods — before any seller conversation.</li>
          <li class="nu-badge"><span class="badge-num">2</span>Call Patrick Lavette at Renasant Bank to confirm financing capacity and pre-approval terms if not cash.</li>
          <li class="nu-badge"><span class="badge-num">3</span>Schedule independent walkthrough with a licensed inspector before first offer is tendered. No offer goes out without eyes on the property.</li>
        </ol>
      </section>

      <div class="nu-callout">
        <div class="cal-label">Discipline note</div>
        <p>The seller can only sell what you are willing to buy. The best deal on this property is the one where you walk away and come back at your number — or where you walk away and never come back. Both are wins.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>
      Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      4505 Buttewoods Acquisition Negotiation Brief · Prepared April 22, 2026 · Personal &amp; Confidential · Norris Utilities®, LLC · Birmingham, Alabama
    </div>
  </footer>

</body>
</html>