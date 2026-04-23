<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-success: #0a8043;
      --nu-warning: #d97706;
      --nu-danger: #b91c1c;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 50%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.8;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 20px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 3px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron { position: relative; height: 50px; margin-top: -50px; z-index: 10; }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px 80px;
    }
    .nu-content-inner {
      max-width: 1180px;
      margin: 0 auto;
      position: relative;
    }

    .nu-doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-subtitle {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 6px;
    }
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin: 24px 0 40px;
      font-size: 0.9rem;
    }
    .nu-doc-meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin: 44px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-subsection-title {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin: 24px 0 10px;
    }

    p { margin-bottom: 14px; }

    /* PROPERTY SUMMARY CARD */
    .nu-property-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 36px;
    }
    .nu-property-address {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 30px 28px;
    }
    .nu-property-address-label {
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
      font-weight: 700;
    }
    .nu-property-address-street {
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .nu-property-address-city {
      font-weight: 300;
      font-size: 1.05rem;
      color: rgba(255,255,255,0.85);
      margin-bottom: 22px;
    }
    .nu-property-quick-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .nu-quick-stat .v {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      display: block;
      line-height: 1.1;
    }
    .nu-quick-stat .k {
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      margin-top: 4px;
    }
    .nu-property-pricing {
      background: var(--nu-white);
      padding: 30px 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .nu-price-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-price-row:last-child { border-bottom: none; }
    .nu-price-label {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-price-value {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .nu-price-value.target {
      color: var(--nu-blue);
      font-size: 1.4rem;
    }

    /* FACT TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 18px 0 28px;
      font-size: 0.93rem;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-table td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: #fafafb; }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 34%;
    }

    /* BADGE */
    .nu-badge-inline {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 3px;
      margin-left: 6px;
    }
    .nu-badge-inline.warn { background: var(--nu-warning); color: var(--nu-white); }
    .nu-badge-inline.ok { background: var(--nu-success); color: var(--nu-white); }
    .nu-badge-inline.danger { background: var(--nu-danger); color: var(--nu-white); }

    /* COLUMNS / CARDS */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin: 20px 0;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin: 20px 0;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 22px 24px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-card.success { border-left-color: var(--nu-success); }
    .nu-card.warn { border-left-color: var(--nu-warning); }
    .nu-card.danger { border-left-color: var(--nu-danger); }
    .nu-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-card .metric {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-card .metric-label {
      font-size: 0.75rem;
      color: #666;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* LIST STYLING */
    ul.nu-list, ol.nu-list {
      padding-left: 0;
      list-style: none;
      margin: 12px 0 20px;
    }
    ul.nu-list li, ol.nu-list li {
      position: relative;
      padding: 8px 0 8px 28px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    ul.nu-list li:last-child, ol.nu-list li:last-child { border-bottom: none; }
    ul.nu-list li::before {
      content: '•';
      position: absolute;
      left: 8px; top: 8px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
    }
    ol.nu-list { counter-reset: item; }
    ol.nu-list li { counter-increment: item; }
    ol.nu-list li::before {
      content: counter(item);
      position: absolute;
      left: 0; top: 8px;
      width: 20px; height: 20px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.72rem;
      font-weight: 900;
      text-align: center;
      line-height: 20px;
    }

    /* NEGOTIATION SCRIPT */
    .nu-script {
      background: #fafafb;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 22px 26px;
      margin: 18px 0;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.02rem;
      line-height: 1.7;
      color: #2a2a3e;
    }
    .nu-script::before {
      content: 'SCRIPT — SAY IT LIKE THIS';
      display: block;
      font-family: var(--font-primary);
      font-style: normal;
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 10px;
    }

    /* CALLOUT / WARNING */
    .nu-callout {
      padding: 18px 24px;
      border-radius: 4px;
      margin: 20px 0;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .nu-callout.info {
      background: #eff6ff;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-callout.warn {
      background: #fef3c7;
      border-left: 4px solid var(--nu-warning);
    }
    .nu-callout.danger {
      background: #fee2e2;
      border-left: 4px solid var(--nu-danger);
    }
    .nu-callout.success {
      background: #d1fae5;
      border-left: 4px solid var(--nu-success);
    }
    .nu-callout-icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 50%;
      color: var(--nu-white);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
    }
    .nu-callout.info .nu-callout-icon { background: var(--nu-blue); }
    .nu-callout.warn .nu-callout-icon { background: var(--nu-warning); }
    .nu-callout.danger .nu-callout-icon { background: var(--nu-danger); }
    .nu-callout.success .nu-callout-icon { background: var(--nu-success); }
    .nu-callout-body strong { display: block; margin-bottom: 4px; color: var(--nu-dark-text); }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      margin: 24px 0;
      padding-left: 30px;
      border-left: 2px solid var(--nu-cyan);
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -38px; top: 4px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.8rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-property-hero { grid-template-columns: 1fr; }
      .nu-grid-2, .nu-grid-3 { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 44px 22px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 22px 60px; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-property-quick-stats { grid-template-columns: 1fr; }
      .nu-table td:first-child { width: 42%; }
    }

    /* PRINT */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-script, .nu-callout { break-inside: avoid; }
      .nu-section-title { break-after: avoid; }
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
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Private Acquisition Brief</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <h1 class="nu-doc-title">4505 Buttewoods — <span>Negotiation Brief</span></h1>
      <p class="nu-doc-subtitle">Private residential acquisition strategy — 7,098 sq ft estate</p>

      <div class="nu-doc-meta">
        <div class="nu-doc-meta-item">
          <strong>Prepared For</strong>
          Aaron C. Norris
        </div>
        <div class="nu-doc-meta-item">
          <strong>Date Prepared</strong>
          April 23, 2026
        </div>
        <div class="nu-doc-meta-item">
          <strong>Status</strong>
          Active — Pre-Offer
        </div>
        <div class="nu-doc-meta-item">
          <strong>Classification</strong>
          Confidential
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <div class="nu-property-hero">
        <div class="nu-property-address">
          <div class="nu-property-address-label">Subject Property</div>
          <div class="nu-property-address-street">4505 Buttewoods Drive</div>
          <div class="nu-property-address-city">Birmingham, Alabama</div>
          <div class="nu-property-quick-stats">
            <div class="nu-quick-stat">
              <span class="v">7,098</span>
              <div class="k">Square Feet</div>
            </div>
            <div class="nu-quick-stat">
              <span class="v">Estate</span>
              <div class="k">Class</div>
            </div>
            <div class="nu-quick-stat">
              <span class="v">SF MLS</span>
              <div class="k">Market</div>
            </div>
            <div class="nu-quick-stat">
              <span class="v">Single Family</span>
              <div class="k">Use</div>
            </div>
          </div>
        </div>
        <div class="nu-property-pricing">
          <div class="nu-price-row">
            <span class="nu-price-label">Asking Price (Seller List)</span>
            <span class="nu-price-value">To Be Confirmed</span>
          </div>
          <div class="nu-price-row">
            <span class="nu-price-label">Recent Comparable Avg. ($/sf)</span>
            <span class="nu-price-value">Pending Verification</span>
          </div>
          <div class="nu-price-row">
            <span class="nu-price-label">Initial Offer Strategy</span>
            <span class="nu-price-value target">92% of Asking</span>
          </div>
          <div class="nu-price-row">
            <span class="nu-price-label">Walk-Away Ceiling</span>
            <span class="nu-price-value">97% of Asking</span>
          </div>
          <div class="nu-price-row">
            <span class="nu-price-label">Earnest Money Plan</span>
            <span class="nu-price-value">1% (non-refundable after inspection)</span>
          </div>
        </div>
      </div>

      <div class="nu-callout warn">
        <div class="nu-callout-icon">!</div>
        <div class="nu-callout-body">
          <strong>Data still to confirm before offer is signed</strong>
          Seller's current list price, year built, lot acreage, MLS days-on-market, and active mortgage balance against the McKnight title. All placeholders above must be replaced with verified figures before offer submission.
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <h2 class="nu-section-title">Executive <span>Summary</span></h2>
      <p>4505 Buttewoods is a 7,098 sq ft residence being targeted for acquisition as a primary or investment estate. The home sits in the Buttewoods pocket of Birmingham and, based on prior deed research, most recently passed from Compass Bank to the current owner (McKnight) via Instrument 2018 recording. That 2018 conveyance is central to this negotiation — it establishes the seller's cost basis, time in the home, and likely equity position. All three work in the buyer's favor if the seller is motivated.</p>

      <p>The recommended posture is <strong>firm but friendly</strong>: open at 92% of ask with a clean, short-fuse offer backed by proof of funds or a lender letter. Rely on the 2018 basis and any soft comps to anchor the price. Do not disclose the ceiling. Keep contingencies narrow to stand out from financed offers.</p>

      <div class="nu-grid-3">
        <div class="nu-card">
          <div class="metric">7,098</div>
          <div class="metric-label">Gross SF</div>
        </div>
        <div class="nu-card cyan">
          <div class="metric">2018</div>
          <div class="metric-label">Seller Acquired</div>
        </div>
        <div class="nu-card gold">
          <div class="metric">~8 yrs</div>
          <div class="metric-label">Ownership Tenure</div>
        </div>
      </div>

      <!-- KEY FACTS TABLE -->
      <h2 class="nu-section-title">Key <span>Property &amp; Title Facts</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Subject Address</td>
            <td>4505 Buttewoods Drive, Birmingham, AL</td>
          </tr>
          <tr>
            <td>Building Size</td>
            <td>7,098 square feet</td>
          </tr>
          <tr>
            <td>Property Class</td>
            <td>Single-family estate residence</td>
          </tr>
          <tr>
            <td>Current Record Owner</td>
            <td>McKnight (per 2018 deed conveyance)</td>
          </tr>
          <tr>
            <td>Prior Owner</td>
            <td>Compass Bank (REO / bank-held prior to 2018)</td>
          </tr>
          <tr>
            <td>Source Deed</td>
            <td>Compass Bank → McKnight, Instrument 2018 <span class="nu-badge-inline">Pull before offer</span></td>
          </tr>
          <tr>
            <td>Seller Motivation Signal</td>
            <td>Bank-owned prior sale suggests 2018 price was below current market — seller likely has strong equity</td>
          </tr>
          <tr>
            <td>Financing Plan</td>
            <td>To be confirmed — cash vs. conventional vs. seller-carry</td>
          </tr>
          <tr>
            <td>Representation</td>
            <td>Aaron C. Norris (principal) — buyer's agent optional</td>
          </tr>
        </tbody>
      </table>

      <!-- PRE-OFFER DILIGENCE -->
      <h2 class="nu-section-title">Pre-Offer <span>Diligence Checklist</span></h2>
      <p>Complete every item below <em>before</em> submitting a signed offer. Any gap here becomes a negotiation vulnerability.</p>

      <ol class="nu-list">
        <li><strong>Pull the 2018 Compass Bank → McKnight deed.</strong> Confirm price paid, lien position, and legal description. File it in the acquisition folder.</li>
        <li><strong>Order current title commitment.</strong> Verify open mortgages, tax liens, HOA assessments, mechanic's liens, and any lis pendens.</li>
        <li><strong>Pull Jefferson County tax records.</strong> Confirm assessed value, current year taxes, payment status, and homestead exemption.</li>
        <li><strong>Run 6-month comp sweep.</strong> Pull every sale of 5,500+ sq ft Birmingham estates within 3 miles closed in the last 180 days. Record price per square foot and days on market.</li>
        <li><strong>Confirm MLS days-on-market.</strong> If over 60 days, the seller has absorbed carrying costs — leverage favors buyer.</li>
        <li><strong>Pull permit history.</strong> Confirm any additions, roof replacement, or mechanical work was permitted.</li>
        <li><strong>Verify flood and elevation.</strong> FEMA flood zone and elevation certificate on file where applicable.</li>
        <li><strong>Secure proof of funds or written lender pre-approval.</strong> A clean offer with POF attached closes faster and pressures competing bids.</li>
      </ol>

      <!-- MARKET COMPS -->
      <h2 class="nu-section-title">Market <span>Comparable Framework</span></h2>
      <p>Pricing authority comes from closed sales, not list prices. When the comp sheet is complete, the chart below is the anchor the offer will reference.</p>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Target Comp Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geography</td>
            <td>Within 3 miles of 4505 Buttewoods, similar school zone</td>
          </tr>
          <tr>
            <td>Building Size</td>
            <td>5,500 – 8,500 sq ft (±20% of subject)</td>
          </tr>
          <tr>
            <td>Age Bracket</td>
            <td>Within 15 years of subject build year</td>
          </tr>
          <tr>
            <td>Sale Window</td>
            <td>Last 180 days closed</td>
          </tr>
          <tr>
            <td>Minimum Comp Count</td>
            <td>Three closed sales, two actives, one expired</td>
          </tr>
          <tr>
            <td>Adjustment Basis</td>
            <td>$/sq ft after adjustments for lot, garages, pool, recent renovation</td>
          </tr>
        </tbody>
      </table>

      <div class="nu-callout info">
        <div class="nu-callout-icon">i</div>
        <div class="nu-callout-body">
          <strong>Rule of thumb</strong>
          Use the <em>median</em> adjusted $/sf of three closed comps — not the average. A single outlier skews the mean and overstates defensible value.
        </div>
      </div>

      <!-- OFFER STRATEGY -->
      <h2 class="nu-section-title">Offer <span>Ladder &amp; Ceiling</span></h2>
      <p>Three-step ladder. Each step is pre-planned with its own justification language so there is no hesitation at the table.</p>

      <div class="nu-grid-3">
        <div class="nu-card success">
          <h4>Opening Offer — 92%</h4>
          <p>Anchor on the adjusted comp median. Cite the 2018 basis and average $/sf in the cover letter. Short response window (48 hours) and a clean inspection clause.</p>
        </div>
        <div class="nu-card warn">
          <h4>Counter Position — 94–95%</h4>
          <p>Triggered only if seller counters within 3% of list. Frame as "meeting in the middle." Hold contingency terms. Offer faster close in exchange for the price concession.</p>
        </div>
        <div class="nu-card danger">
          <h4>Ceiling — 97%</h4>
          <p>Hard walk-away line. Never reveal this number. If reached, request seller concessions (closing costs, home warranty, repair credit) instead of raising price further.</p>
        </div>
      </div>

      <h3 class="nu-subsection-title">Non-Price Levers That Move the Deal</h3>
      <ul class="nu-list">
        <li><strong>Fast close (21 days).</strong> Attractive to sellers who have already mentally moved on. Requires cash or fully underwritten loan.</li>
        <li><strong>Leaseback.</strong> Offer seller 30–60 days rent-back at market rate if they need transition time. Costs little, buys goodwill.</li>
        <li><strong>Reduced contingencies.</strong> Waive appraisal contingency only if POF covers any shortfall. Keep inspection but shorten to 7 days.</li>
        <li><strong>As-is language.</strong> Pair with aggressive inspection period — you still get to walk, but seller feels relief.</li>
        <li><strong>Earnest money posture.</strong> Offer 1% earnest, going non-refundable after inspection clears. Signals serious, disciplined buyer.</li>
      </ul>

      <!-- NEGOTIATION SEQUENCE -->
      <h2 class="nu-section-title">Negotiation <span>Sequence &amp; Cadence</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 1 — Initial Contact</div>
          <p>Warm call or meeting with seller or seller's agent. Express interest as principal. Do not quote a number. Ask open questions: reason for selling, timeline, what matters most outside of price.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 2 — Deliver Written Offer</div>
          <p>Deliver the 92% offer in writing with proof of funds attached and a short cover letter referencing the comp basis. 48-hour response window.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 3 — First Response</div>
          <p>If accepted: proceed to diligence. If countered above 95%: respond with a split-the-difference counter inside 24 hours. If countered at or near list: restate the comp position, slow the pace, and let the seller sit on the offer.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 4 — Mid-Negotiation Pause</div>
          <p>If talks stall, take a deliberate 3–5 day silence. Silence is a tool. Most sellers call back with motion.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 5 — Final Move</div>
          <p>Best-and-final at or below 97% ceiling with a clean, short contingency list. Explicitly state it is final. Mean it. Walk if not accepted.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Step 6 — Diligence &amp; Close</div>
          <p>Inspection within 7 days. Appraisal ordered day 1. Title commitment reviewed by day 10. Close on day 21–30. No scope creep on repair requests — stick to safety, structure, and systems only.</p>
        </div>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title">Talking <span>Scripts</span></h2>

      <h3 class="nu-subsection-title">Opening the Conversation (Seller or Seller's Agent)</h3>
      <div class="nu-script">
        "I'm Aaron Norris in Birmingham. I'm the buyer — not a flipper, not a wholesaler. I've taken a serious look at 4505 Buttewoods and I want to understand the seller's situation before I put anything on paper. What's most important to them — price, timing, or certainty of close?"
      </div>

      <h3 class="nu-subsection-title">Anchoring the Offer</h3>
      <div class="nu-script">
        "My number is built off closed comps within three miles that match the size bracket. I'm not trying to low-ball — I'm trying to price it where it will appraise and close without drama. Here's what I'm at. It's clean, it's funded, and it's real. I'd rather be direct than drag this out."
      </div>

      <h3 class="nu-subsection-title">Responding to Pushback on Price</h3>
      <div class="nu-script">
        "I hear you. I built this number off the math, not off wishful thinking. If the comps had supported a higher price, my offer would be higher. I'm open to moving on terms — close date, earnest, leaseback. Where I can't move is past what the numbers will hold."
      </div>

      <h3 class="nu-subsection-title">Best-and-Final</h3>
      <div class="nu-script">
        "This is my best and final. I'd rather say it plainly than play games with you. If it works, I'll close quickly and cleanly. If it doesn't, I respect the seller's decision and I'll step back. I'd like an answer by Friday at 5."
      </div>

      <!-- RISK REGISTER -->
      <h2 class="nu-section-title">Risk <span>Register</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th>Risk</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Appraisal gap at 7,098 sq ft — few comps in bracket</td>
            <td>Pre-fund the gap with cash; insert appraisal-gap language capped at a set dollar amount so both sides know the ceiling.</td>
          </tr>
          <tr>
            <td>Hidden deferred maintenance on an older estate</td>
            <td>Inspector with HVAC, roof, foundation, and sewer scope. Roof and mechanical bids ordered during the inspection window.</td>
          </tr>
          <tr>
            <td>Title defect from 2018 Compass Bank conveyance</td>
            <td>Title commitment reviewed line-by-line. Owner's policy at closing. Underwriter approval of any quit-claim or affidavit.</td>
          </tr>
          <tr>
            <td>Competing buyer emerges during negotiation</td>
            <td>Do not raise price on rumor. Ask the seller's agent to produce the competing offer in writing before reacting.</td>
          </tr>
          <tr>
            <td>Seller overestimates value from Zillow or automated estimates</td>
            <td>Present the three closed comps politely but firmly. Anchor to closed sales only, never active listings.</td>
          </tr>
          <tr>
            <td>Carrying cost surprises (taxes, HOA, insurance)</td>
            <td>Budget insurance at replacement-cost premium, not market price. Get a binder quote before offer goes firm.</td>
          </tr>
          <tr>
            <td>Emotional overrun — falling in love with the house</td>
            <td>The ceiling number is written here and signed off before negotiations begin. Do not revise it mid-conversation.</td>
          </tr>
        </tbody>
      </table>

      <!-- CLOSING POSITION -->
      <h2 class="nu-section-title">Closing <span>Position &amp; Next Action</span></h2>
      <div class="nu-grid-2">
        <div class="nu-card success">
          <h4>Walk-Away Authority</h4>
          <p>The ceiling is 97% of verified asking. If the seller will not accept terms at or under that figure, the disciplined move is to walk. There will be other estates. There will not be other chances to overpay this cleanly.</p>
        </div>
        <div class="nu-card cyan">
          <h4>Immediate Next Action</h4>
          <p>Pull the 2018 Compass Bank → McKnight deed (Instrument 2018) from Jefferson County records. That single document sets the floor of the negotiation and should be in hand before any conversation with the seller.</p>
        </div>
      </div>

      <div class="nu-callout success">
        <div class="nu-callout-icon">✓</div>
        <div class="nu-callout-body">
          <strong>Discipline wins this deal</strong>
          Firm opening. Clear ceiling. Short contingencies. Silence when the room gets emotional. The seller's 2018 basis, eight years of equity, and carrying costs all favor the patient buyer.
        </div>
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
    <div class="nu-footer-meta">
      Confidential Acquisition Brief &nbsp;·&nbsp; Prepared April 23, 2026 &nbsp;·&nbsp; For Principal Use Only
    </div>
  </footer>

</body>
</html>