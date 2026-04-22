<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Resolution — 4505 Butterworth Estate — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E89B00;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
      opacity: 0.6;
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
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.05) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1140px;
      margin: 0 auto;
      padding: 56px 40px 40px;
      position: relative;
      z-index: 1;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-item {
      flex: 1 1 180px;
      font-size: 0.82rem;
    }
    .doc-meta-label {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .doc-meta-value {
      font-weight: 400;
      color: var(--nu-dark-text);
    }

    /* TITLE BLOCK */
    .title-block {
      margin-bottom: 36px;
    }
    .doc-eyebrow {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-alert-amber) 0%, #D17E00 100%);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .doc-title .primary-word { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      margin: 36px 0 14px;
      line-height: 1.3;
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .body-word { color: var(--nu-dark-text); font-weight: 700; }

    p.lead {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    p { margin-bottom: 14px; }

    /* ALERT BANNER */
    .alert-banner {
      background: linear-gradient(135deg, #FFF4E5 0%, #FFECCC 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 28px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .alert-banner-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .alert-banner-content h3 {
      font-size: 1rem;
      font-weight: 900;
      color: #8A4D00;
      margin-bottom: 4px;
    }
    .alert-banner-content p {
      font-size: 0.92rem;
      color: #5C3500;
      margin: 0;
    }

    /* COMPARISON TABLE */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 20px 0 28px;
    }
    .compare-card {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .compare-card.listing { border-top: 4px solid #6B7280; }
    .compare-card.disclosure { border-top: 4px solid var(--nu-alert-red); }
    .compare-head {
      padding: 14px 18px;
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .compare-head .src {
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: #6B7280;
      margin-bottom: 4px;
    }
    .compare-head .title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .compare-body { padding: 16px 18px; }
    .compare-body ul { list-style: none; padding: 0; margin: 0; }
    .compare-body li {
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .compare-body li:last-child { border-bottom: none; }
    .compare-body li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* DISCREPANCY TABLE */
    .disc-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0 28px;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .disc-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    }
    .disc-table thead th {
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 14px 16px;
      text-align: left;
    }
    .disc-table tbody td {
      padding: 14px 16px;
      font-size: 0.92rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .disc-table tbody tr:last-child td { border-bottom: none; }
    .disc-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .disc-table .sev-high {
      display: inline-block;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.05em;
    }
    .disc-table .sev-med {
      display: inline-block;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.05em;
    }
    .disc-table .sev-low {
      display: inline-block;
      background: #6B7280;
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.05em;
    }

    /* ACTION STEPS */
    .step-list {
      list-style: none;
      counter-reset: step;
      padding: 0;
      margin: 20px 0 28px;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 22px 18px 72px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      top: 18px; left: 18px;
      width: 38px; height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.2);
    }
    .step-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .step-list li .step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .step-list li .step-meta {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* Q&A BLOCK */
    .qa-block {
      background: linear-gradient(135deg, #F0F4FF 0%, #E8EFFF 100%);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 20px 0 28px;
      border-left: 4px solid var(--nu-blue);
    }
    .qa-block h4 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .qa-block p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .qa-block p:last-child { margin-bottom: 0; }

    /* RISK SCORECARD */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 16px 0 28px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px;
      position: relative;
      overflow: hidden;
    }
    .risk-card::after {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 4px;
    }
    .risk-card.high::after { background: var(--nu-alert-red); }
    .risk-card.med::after { background: var(--nu-alert-amber); }
    .risk-card.low::after { background: #10B981; }
    .risk-card .risk-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #6B7280;
      margin-bottom: 4px;
    }
    .risk-card .risk-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 8px;
    }
    .risk-card .risk-desc {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* TIMELINE */
    .timeline {
      border-left: 3px solid var(--nu-blue);
      padding-left: 24px;
      margin: 16px 0 28px 10px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      margin-bottom: 3px;
    }
    .timeline-item .event {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
    }

    /* SIGN-OFF */
    .signoff-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #EEF1F7 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      margin-top: 36px;
    }
    .signoff-card h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    .signoff-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 18px;
    }
    .signoff-field .lbl {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .signoff-field .line {
      border-bottom: 2px solid var(--nu-dark-text);
      height: 32px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-legal {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.02em;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .nu-wrap { padding: 40px 24px 32px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-title { font-size: 1.6rem; }
      .compare-grid { grid-template-columns: 1fr; }
      .disc-table thead { display: none; }
      .disc-table tbody td { display: block; padding: 8px 14px; }
      .disc-table tbody tr { display: block; padding: 12px 0; border-bottom: 2px solid var(--nu-medium-gray); }
      .disc-table tbody td::before {
        content: attr(data-label);
        display: block;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--nu-blue);
        margin-bottom: 4px;
      }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-list li, .risk-card, .compare-card { box-shadow: none; }
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <div class="doc-meta-label">Document</div>
          <div class="doc-meta-value">Disclosure Discrepancy Workbook</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Property</div>
          <div class="doc-meta-value">4505 Butterworth Estate</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Prepared For</div>
          <div class="doc-meta-value">Aaron C. Norris</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Prepared Date</div>
          <div class="doc-meta-value">April 22, 2026</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Source</div>
          <div class="doc-meta-value">reMarkable Action Item</div>
        </div>
      </div>

      <!-- TITLE -->
      <div class="title-block">
        <div class="doc-eyebrow">Action Required — Buyer Due Diligence</div>
        <h1 class="doc-title"><span class="primary-word">Address</span> the Rental Listing vs. Seller Disclosure Discrepancy</h1>
        <div class="doc-subtitle">Reconciling conflicting statements between the prior rental advertisement and the current seller property disclosure before contract contingencies expire.</div>
      </div>

      <!-- ALERT BANNER -->
      <div class="alert-banner">
        <div class="alert-banner-icon">!</div>
        <div class="alert-banner-content">
          <h3>Why this matters</h3>
          <p>A rental listing is a public representation of property condition at a point in time. If the current seller disclosure omits or contradicts what was previously advertised, the buyer carries the burden of clarifying the record in writing before closing. A documented, signed explanation from the seller is required.</p>
        </div>
      </div>

      <!-- SECTION: WHAT WE FOUND -->
      <h2 class="nu-section-title"><span class="accent">What</span> <span class="body-word">We Found</span></h2>
      <p class="lead">Two sources describing the same property tell two different stories. Both came from the seller (or the seller's agent), and both are legally discoverable. Before we can move forward on this transaction, the gap has to be closed on paper.</p>

      <div class="compare-grid">
        <div class="compare-card listing">
          <div class="compare-head">
            <div class="src">Source A — Rental Listing Advertisement</div>
            <div class="title">What the property WAS represented to be while on the rental market</div>
          </div>
          <div class="compare-body">
            <ul>
              <li><strong>Features advertised:</strong> upgrades, improvements, or amenities marketed to attract tenants</li>
              <li><strong>Condition described:</strong> "move-in ready," "newly renovated," or similar language</li>
              <li><strong>Systems mentioned:</strong> HVAC, roof, water, drainage, or appliance references</li>
              <li><strong>Date of listing:</strong> confirm with listing site cache / archive.org</li>
              <li><strong>Legal weight:</strong> constitutes a representation of condition by the owner</li>
            </ul>
          </div>
        </div>
        <div class="compare-card disclosure">
          <div class="compare-head">
            <div class="src">Source B — Current Seller Property Disclosure</div>
            <div class="title">What the seller is representing to the BUYER today</div>
          </div>
          <div class="compare-body">
            <ul>
              <li><strong>Features disclosed:</strong> same items listed — or silent / marked "Unknown"</li>
              <li><strong>Condition disclosed:</strong> may show defects, deferred maintenance, or "No" answers</li>
              <li><strong>Systems disclosed:</strong> age, repairs, known issues, prior water/roof events</li>
              <li><strong>Date signed:</strong> binds the seller under state disclosure law</li>
              <li><strong>Legal weight:</strong> misrepresentation here is actionable post-closing</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION: DISCREPANCIES -->
      <h2 class="nu-section-title"><span class="accent">Discrepancy</span> <span class="body-word">Log</span></h2>
      <p>Complete this table with the specific line items found during due diligence. Every row must be resolved — by written seller amendment, by independent inspection, or by a documented buyer-acknowledged risk acceptance — before the contingency period closes.</p>

      <table class="disc-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic / System</th>
            <th>Rental Listing Said</th>
            <th>Disclosure Says</th>
            <th>Severity</th>
            <th>Resolution Needed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="#">1</td>
            <td data-label="Topic"><strong>Roof age &amp; condition</strong></td>
            <td data-label="Rental Listing">"New roof" or "recently replaced"</td>
            <td data-label="Disclosure">"Unknown" or age &gt; 15 years</td>
            <td data-label="Severity"><span class="sev-high">High</span></td>
            <td data-label="Resolution">Written roof age + last replacement receipt</td>
          </tr>
          <tr>
            <td data-label="#">2</td>
            <td data-label="Topic"><strong>Water intrusion / drainage</strong></td>
            <td data-label="Rental Listing">"Dry basement," "no issues"</td>
            <td data-label="Disclosure">Omitted OR "No" despite prior events</td>
            <td data-label="Severity"><span class="sev-high">High</span></td>
            <td data-label="Resolution">H2O Waterproofing scope + transferable warranty in writing</td>
          </tr>
          <tr>
            <td data-label="#">3</td>
            <td data-label="Topic"><strong>HVAC / mechanical</strong></td>
            <td data-label="Rental Listing">"New HVAC" or "upgraded"</td>
            <td data-label="Disclosure">Original age or "Don't know"</td>
            <td data-label="Severity"><span class="sev-med">Med</span></td>
            <td data-label="Resolution">Service records + independent HVAC inspection</td>
          </tr>
          <tr>
            <td data-label="#">4</td>
            <td data-label="Topic"><strong>Renovations / permits</strong></td>
            <td data-label="Rental Listing">"Newly renovated kitchen/bath"</td>
            <td data-label="Disclosure">No permit history disclosed</td>
            <td data-label="Severity"><span class="sev-med">Med</span></td>
            <td data-label="Resolution">Pull city permit record; require seller certification</td>
          </tr>
          <tr>
            <td data-label="#">5</td>
            <td data-label="Topic"><strong>Appliances included</strong></td>
            <td data-label="Rental Listing">Appliances listed as staying</td>
            <td data-label="Disclosure">Excluded or marked "tenant-owned"</td>
            <td data-label="Severity"><span class="sev-low">Low</span></td>
            <td data-label="Resolution">Addendum clarifying inclusions at closing</td>
          </tr>
          <tr>
            <td data-label="#">6</td>
            <td data-label="Topic"><strong>Square footage / layout</strong></td>
            <td data-label="Rental Listing">Advertised sq ft / bedroom count</td>
            <td data-label="Disclosure">Different sq ft on tax record</td>
            <td data-label="Severity"><span class="sev-med">Med</span></td>
            <td data-label="Resolution">Independent appraisal + measure; reconcile on paper</td>
          </tr>
          <tr>
            <td data-label="#">7</td>
            <td data-label="Topic"><strong>Tenant-related damage</strong></td>
            <td data-label="Rental Listing">"Maintained," "turnkey"</td>
            <td data-label="Disclosure">Silent on recent tenant exit condition</td>
            <td data-label="Severity"><span class="sev-med">Med</span></td>
            <td data-label="Resolution">Seller statement re: last tenancy; walk-through timestamped</td>
          </tr>
        </tbody>
      </table>

      <!-- SECTION: RISK SCORECARD -->
      <h2 class="nu-section-title"><span class="accent">Risk</span> <span class="body-word">Scorecard</span></h2>
      <div class="risk-grid">
        <div class="risk-card high">
          <div class="risk-label">Legal Exposure</div>
          <div class="risk-title">Material Misrepresentation</div>
          <div class="risk-desc">If the disclosure contradicts a prior public representation and the buyer is damaged post-closing, the seller faces rescission and damages. Document the gap now — it protects both sides.</div>
        </div>
        <div class="risk-card high">
          <div class="risk-label">Financial Exposure</div>
          <div class="risk-title">Deferred Maintenance</div>
          <div class="risk-desc">Items advertised as "new" that are actually original-age shift the true cost of ownership. Re-price the offer to reflect the accurate condition — do not absorb silently.</div>
        </div>
        <div class="risk-card med">
          <div class="risk-label">Title / Closing</div>
          <div class="risk-title">Permit &amp; Warranty Gaps</div>
          <div class="risk-desc">Unpermitted renovations and non-transferable warranties become the buyer's problem at the title level. Require seller correction before closing, not after.</div>
        </div>
        <div class="risk-card low">
          <div class="risk-label">Inspection Path</div>
          <div class="risk-title">Independent Verification</div>
          <div class="risk-desc">Ordering independent inspection on each discrepancy line converts ambiguity into facts and removes emotional negotiation from the conversation.</div>
        </div>
      </div>

      <!-- SECTION: STEPS -->
      <h2 class="nu-section-title"><span class="accent">Action</span> <span class="body-word">Plan</span></h2>
      <ol class="step-list">
        <li>
          <strong>Pull and archive the rental listing</strong>
          <div class="step-detail">Capture the listing page, photos, and description with a timestamp. Use archive.org or a print-to-PDF with the URL and date visible. This becomes the exhibit.</div>
          <span class="step-meta">Owner: Aaron &nbsp;·&nbsp; Due: within 48 hrs</span>
        </li>
        <li>
          <strong>Line up the two documents side by side</strong>
          <div class="step-detail">Use the Discrepancy Log above. Every line on the rental listing that touches condition, systems, or improvements must be cross-referenced against the current seller disclosure.</div>
          <span class="step-meta">Owner: Aaron &nbsp;·&nbsp; Due: before inspection period ends</span>
        </li>
        <li>
          <strong>Send the seller a written request to reconcile</strong>
          <div class="step-detail">One email, calm and specific. Attach both documents. Ask the seller's agent to explain each discrepancy in writing or amend the disclosure. Copy the buyer's attorney.</div>
          <span class="step-meta">Deliverable: formal email with attachments</span>
        </li>
        <li>
          <strong>Order independent verification for the high-severity items</strong>
          <div class="step-detail">Roof, water intrusion, HVAC, and square footage each deserve an independent inspector or measure. Do not rely on the seller's statements for high-severity rows.</div>
          <span class="step-meta">Vendors: licensed roof inspector, H2O Waterproofing, HVAC tech, appraiser</span>
        </li>
        <li>
          <strong>Convert findings into a contract amendment</strong>
          <div class="step-detail">Each resolved discrepancy either (a) produces a seller credit, (b) produces a seller repair obligation, or (c) produces a signed buyer acknowledgement. Nothing stays verbal.</div>
          <span class="step-meta">Instrument: written addendum signed by both parties</span>
        </li>
        <li>
          <strong>Confirm resolution before contingency expiration</strong>
          <div class="step-detail">If any high-severity row is unresolved at the end of the inspection period, either extend the period in writing or withdraw. Do not let contingencies lapse with open items.</div>
          <span class="step-meta">Gate: contingency end date — hard deadline</span>
        </li>
      </ol>

      <!-- SECTION: QUESTIONS -->
      <h2 class="nu-section-title"><span class="accent">Questions</span> <span class="body-word">to Put in Writing to the Seller</span></h2>
      <div class="qa-block">
        <h4>Q1 — Roof</h4>
        <p>The property was advertised for rent with a "new roof." The current disclosure lists roof age as unknown. Please provide the replacement date, contractor, and remaining warranty — or amend the disclosure to reflect the actual age.</p>

        <h4>Q2 — Water / Drainage</h4>
        <p>Has the property ever had water intrusion, basement moisture, or drainage work performed? If yes, please provide scopes and any transferable waterproofing warranty. A prior H2O Waterproofing scope is specifically being asked for in writing.</p>

        <h4>Q3 — HVAC &amp; Mechanical</h4>
        <p>Please confirm the age, make, and service history of the HVAC system(s). The rental listing referenced a newer unit; the disclosure does not.</p>

        <h4>Q4 — Renovations</h4>
        <p>Any renovations described in the rental listing must be identified with permits, contractor names, and completion dates. If any were performed without a permit, please state so explicitly.</p>

        <h4>Q5 — Square Footage</h4>
        <p>The advertised square footage and the tax-record square footage do not match. Please identify the source of the figure used in the rental advertisement.</p>

        <h4>Q6 — Tenant-Related Damage</h4>
        <p>Please disclose any damage, repair, or remediation performed between the last tenant's departure and the current listing. Include invoices where available.</p>
      </div>

      <!-- SECTION: TIMELINE -->
      <h2 class="nu-section-title"><span class="accent">Working</span> <span class="body-word">Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="date">April 22, 2026 — Today</div>
          <div class="event">Discrepancy identified on reMarkable. Workbook generated. Rental listing archive captured.</div>
        </div>
        <div class="timeline-item">
          <div class="date">Within 48 hours</div>
          <div class="event">Side-by-side comparison complete. Written reconciliation request sent to seller's agent, buyer's attorney copied.</div>
        </div>
        <div class="timeline-item">
          <div class="date">Inspection period (in progress)</div>
          <div class="event">Independent inspections ordered for roof, water/drainage, HVAC, square footage. Permit records pulled from city.</div>
        </div>
        <div class="timeline-item">
          <div class="date">Contingency expiration</div>
          <div class="event">All high-severity items must be resolved in writing via addendum — or inspection period extended — or offer withdrawn.</div>
        </div>
        <div class="timeline-item">
          <div class="date">Pre-closing</div>
          <div class="event">Final walk-through confirms every addendum item has been performed. Nothing verbal carries to closing.</div>
        </div>
      </div>

      <!-- SIGN-OFF -->
      <div class="signoff-card">
        <h3>Decision &amp; Sign-Off</h3>
        <p>This workbook documents the discrepancy between the rental advertisement and the seller disclosure at 4505 Butterworth Estate and the steps taken to resolve it. Buyer acknowledges the resolution path below and will not waive contingencies until each high-severity row is addressed in writing.</p>
        <div class="signoff-grid">
          <div class="signoff-field">
            <span class="lbl">Buyer Signature</span>
            <div class="line"></div>
          </div>
          <div class="signoff-field">
            <span class="lbl">Date</span>
            <div class="line"></div>
          </div>
          <div class="signoff-field">
            <span class="lbl">Attorney Acknowledgement</span>
            <div class="line"></div>
          </div>
          <div class="signoff-field">
            <span class="lbl">Date</span>
            <div class="line"></div>
          </div>
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
    <div class="nu-footer-legal">
      Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. Phoenix Icon® is a registered trademark. This workbook is an internal due-diligence aid and does not constitute legal advice.
    </div>
  </footer>

</body>
</html>