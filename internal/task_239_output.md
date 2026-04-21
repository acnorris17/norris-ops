<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #2A7F3E;
      --nu-warning: #C9751A;
      --nu-alert: #B83232;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      width: 72px; height: 72px;
      margin: 0 auto 12px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    /* ══ WHITE CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 260px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 65%;
      background-image: radial-gradient(circle, rgba(0,51,204,0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
      z-index: 1;
    }

    /* ══ DOCUMENT TITLE ══ */
    .doc-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .doc-title-kicker {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .doc-title span.highlight {
      color: var(--nu-blue);
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY SNAPSHOT ══ */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 14px;
    }
    .snap-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
    }
    .snap-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .snap-card .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snap-card .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
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

    /* ══ STEP CARDS ══ */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-item {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px 22px 78px;
      margin-bottom: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      counter-increment: step;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .step-item:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step-item::before {
      content: counter(step);
      position: absolute;
      left: 20px; top: 20px;
      width: 42px; height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .step-item h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-item p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .step-item .meta {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ DATA TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      font-size: 0.94rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td.num {
      font-weight: 700;
      color: var(--nu-blue);
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .nu-table tfoot td {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 900;
      padding: 14px 18px;
      font-size: 0.95rem;
    }
    .nu-table tfoot td.num { color: var(--nu-cyan); }

    /* ══ CALLOUT ══ */
    .callout {
      border-radius: 8px;
      padding: 20px 24px;
      margin-bottom: 20px;
      border-left: 5px solid var(--nu-blue);
      background: #F0F4FF;
    }
    .callout.warning { border-left-color: var(--nu-warning); background: #FFF7ED; }
    .callout.alert { border-left-color: var(--nu-alert); background: #FFF1F1; }
    .callout.success { border-left-color: var(--nu-success); background: #F0F9F2; }
    .callout h5 {
      font-weight: 900;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
    }
    .col-card h4 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 10px;
      font-size: 1.02rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .col-card ul {
      list-style: none;
    }
    .col-card li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.94rem;
    }
    .col-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 2px;
    }

    /* ══ SIGNATURE BLOCK ══ */
    .sig-block {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 30px;
    }
    .sig-block h4 {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      font-size: 1.05rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .sig-block p {
      margin-bottom: 10px;
      font-size: 0.96rem;
    }
    .sig-line {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 22px;
    }
    .sig-line .line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      padding-bottom: 4px;
      margin-bottom: 6px;
      min-height: 28px;
    }
    .sig-line .caption {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px; height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
    }
    .nu-footer-meta {
      margin-top: 20px;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .sig-line { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 56px; }
      .doc-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .step-item { padding: 18px 18px 18px 70px; }
      .step-item::before { width: 36px; height: 36px; font-size: 1rem; left: 16px; top: 18px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 18px; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-item, .col-card, .nu-table { box-shadow: none; }
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
    <div class="nu-doc-label">Internal Acquisition Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-title-kicker">Action Item · reMarkable · Priority</div>
        <h1 class="doc-title">Negotiate Purchase of the <span class="highlight">4505 Buttewoods</span> Estate</h1>
        <p class="doc-subtitle">A 7,098 sq ft residential estate opportunity — structured negotiation plan, valuation reference, and execution timeline. Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®, LLC.</p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="snapshot-grid">
          <div class="snap-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Residential estate property</div>
          </div>
          <div class="snap-card">
            <div class="label">Living Area</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Per action-item source</div>
          </div>
          <div class="snap-card">
            <div class="label">Status</div>
            <div class="value">Active Negotiation</div>
            <div class="sub">reMarkable action item — open</div>
          </div>
          <div class="snap-card">
            <div class="label">Owner / Principal</div>
            <div class="value">Aaron C. Norris</div>
            <div class="sub">Founder &amp; CEO, Norris Utilities®</div>
          </div>
        </div>
        <div class="callout">
          <h5>Why This Brief Exists</h5>
          <p>The Buttewoods negotiation is a high-dollar, multi-stage decision that will move through offer, counter, inspection, financing, and closing. This brief documents the plan so nothing falls through the cracks during parallel Norris Utilities® business operations.</p>
        </div>
      </section>

      <!-- NEGOTIATION OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="nu-badge"><span class="badge-num">1</span>Lock in purchase price at or below defensible appraised value</div>
        <div class="nu-badge"><span class="badge-num">2</span>Retain all inspection, financing, and title contingencies</div>
        <div class="nu-badge"><span class="badge-num">3</span>Negotiate seller credits for any deferred maintenance uncovered</div>
        <div class="nu-badge"><span class="badge-num">4</span>Set closing timeline that aligns with Norris Utilities® cash flow cycle</div>
      </section>

      <!-- NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Playbook — Step by Step</span></h2>
        <ol class="step-list">
          <li class="step-item">
            <h4>Pull Independent Comparables</h4>
            <p>Request three recent comparable sales within a one-mile radius and a matching square-footage band (6,000–8,000 sq ft). Cross-check against the county tax appraiser card.</p>
            <div class="meta">Owner: Aaron · Target completion: before any written offer</div>
          </li>
          <li class="step-item">
            <h4>Order a Pre-Offer Drive-By Appraisal</h4>
            <p>Engage a licensed Alabama appraiser for a limited-scope valuation. This anchors the opening offer and provides negotiating leverage if the listing price is stretched.</p>
            <div class="meta">Owner: Aaron · Vendor: licensed AL real estate appraiser</div>
          </li>
          <li class="step-item">
            <h4>Draft Opening Offer with Escalation Clause</h4>
            <p>Submit an initial offer 6–8% below asking with an escalation clause capped at the appraisal-supported value. Include proof of funds or pre-approval letter to signal serious intent.</p>
            <div class="meta">Owner: Aaron · Review: real estate attorney before signing</div>
          </li>
          <li class="step-item">
            <h4>Hold Firm on Contingencies</h4>
            <p>Do not waive inspection, financing, or title contingencies to win the deal. Non-negotiable floor: 10-day inspection period, 30-day financing contingency, full title review.</p>
            <div class="meta">Owner: Aaron · Red line: no contingency waivers</div>
          </li>
          <li class="step-item">
            <h4>Commission Full Inspection Suite</h4>
            <p>On a 7,098 sq ft structure order: general home inspection, HVAC (likely multi-zone), roof, foundation/structural, termite/WDI, sewer scope, and radon. Expect findings given the size.</p>
            <div class="meta">Owner: Aaron · Budget: inspection costs scale with square footage</div>
          </li>
          <li class="step-item">
            <h4>Return with Repair-Based Counter</h4>
            <p>Use the inspection report to negotiate either seller repairs, a closing-cost credit, or a price reduction. On a property this size, $15K–$40K in deferred maintenance is normal.</p>
            <div class="meta">Owner: Aaron · Leverage window: within inspection contingency period</div>
          </li>
          <li class="step-item">
            <h4>Lock Financing &amp; Clear Title</h4>
            <p>Finalize lender commitment (Patrick Lavette at Renasant Bank is the primary banking relationship). Confirm clean title with no easements, liens, or boundary disputes before clear-to-close.</p>
            <div class="meta">Owner: Aaron · Key contact: Patrick Lavette — Renasant Bank</div>
          </li>
          <li class="step-item">
            <h4>Final Walk-Through &amp; Closing</h4>
            <p>Conduct final walk-through within 48 hours of closing. Verify all negotiated repairs completed, all fixtures remain, and property condition matches contract. Close with certified funds.</p>
            <div class="meta">Owner: Aaron · Last checkpoint before funds transfer</div>
          </li>
        </ol>
      </section>

      <!-- VALUATION REFERENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Reference Grid</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Price Point</th>
              <th>$/Sq Ft</th>
              <th>Total Investment</th>
              <th>Negotiation Posture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aggressive opening offer</td>
              <td>$175</td>
              <td class="num">$1,242,150</td>
              <td>Anchor low — expect counter</td>
            </tr>
            <tr>
              <td>Target purchase price</td>
              <td>$210</td>
              <td class="num">$1,490,580</td>
              <td>Walk-away-ready mid-point</td>
            </tr>
            <tr>
              <td>Stretch ceiling</td>
              <td>$245</td>
              <td class="num">$1,739,010</td>
              <td>Only if comps &amp; appraisal support</td>
            </tr>
            <tr>
              <td>Hard walk-away</td>
              <td>$275+</td>
              <td class="num">$1,951,950+</td>
              <td>Decline &amp; re-engage in 90 days</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Reference basis — 7,098 sq ft × price-per-foot</td>
              <td class="num">Verify with appraisal</td>
              <td>Grid, not a quote</td>
            </tr>
          </tfoot>
        </table>
        <div class="callout warning" style="margin-top: 16px;">
          <h5>Important</h5>
          <p>This grid is a planning reference — actual market value depends on location, condition, lot size, recent comparables, and appraisal. Do not treat these numbers as an offer authorization; confirm with a licensed appraiser before submitting anything in writing.</p>
        </div>
      </section>

      <!-- RISKS & LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risks</span> <span class="rest">&amp; Leverage Points</span></h2>
        <div class="two-col">
          <div class="col-card">
            <h4>Leverage In Your Favor</h4>
            <ul>
              <li>Pre-approved financing via Renasant Bank — cash-equivalent to most sellers</li>
              <li>Long hold horizon reduces pressure to over-pay in a bidding war</li>
              <li>Willingness to close on seller's preferred timeline</li>
              <li>No contingent home sale — clean offer structure</li>
              <li>Local reputation — third-generation Birmingham business principal</li>
            </ul>
          </div>
          <div class="col-card">
            <h4>Risks To Manage</h4>
            <ul>
              <li>Estates this size often hide $15K–$40K in deferred maintenance</li>
              <li>Large-home insurance premiums and property taxes scale steeply</li>
              <li>HVAC, roof, and foundation costs are materially higher at 7,098 sq ft</li>
              <li>Resale pool is narrower — liquidity risk in a downturn</li>
              <li>Appraisal gap risk if list price runs ahead of comps</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE & OWNERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Timeline</span> <span class="rest">&amp; Ownership</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Window</th>
              <th>Owner</th>
              <th>Deliverable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comps &amp; valuation prep</td>
              <td>Week 1</td>
              <td>Aaron</td>
              <td>Comparable sales packet + drive-by appraisal</td>
            </tr>
            <tr>
              <td>Opening offer submitted</td>
              <td>Week 2</td>
              <td>Aaron + attorney</td>
              <td>Signed purchase agreement with contingencies</td>
            </tr>
            <tr>
              <td>Counter-offer &amp; mutual acceptance</td>
              <td>Week 2–3</td>
              <td>Aaron</td>
              <td>Fully executed contract</td>
            </tr>
            <tr>
              <td>Inspections</td>
              <td>Days 1–10 post-acceptance</td>
              <td>Aaron + inspectors</td>
              <td>Full inspection report suite</td>
            </tr>
            <tr>
              <td>Repair counter / credit negotiation</td>
              <td>Days 10–14</td>
              <td>Aaron</td>
              <td>Amendment — repairs or credits</td>
            </tr>
            <tr>
              <td>Financing commitment</td>
              <td>Days 14–30</td>
              <td>Patrick Lavette — Renasant Bank</td>
              <td>Clear-to-close letter</td>
            </tr>
            <tr>
              <td>Final walk-through &amp; closing</td>
              <td>Days 30–35</td>
              <td>Aaron</td>
              <td>Recorded deed + keys</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions — This Week</span></h2>
        <div class="callout success">
          <h5>Immediate Action Items</h5>
          <p>1. Pull 3 comparable sales within 1-mile radius of 4505 Buttewoods. &nbsp; 2. Request updated pre-approval letter from Patrick Lavette at Renasant Bank. &nbsp; 3. Engage Alabama-licensed real estate attorney for contract review. &nbsp; 4. Schedule limited-scope appraisal with a local licensed appraiser.</p>
        </div>
        <div class="callout alert">
          <h5>Do Not Do</h5>
          <p>Do not submit a verbal offer. Do not waive inspection or financing contingencies to win the deal. Do not close without a clean title commitment. Do not commit in writing before the appraisal and comps packet are in hand.</p>
        </div>
      </section>

      <!-- DECISION LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Log &amp; Sign-Off</span></h2>
        <div class="sig-block">
          <h4>Authorization to Proceed</h4>
          <p>This brief documents the Norris Utilities® principal's negotiation plan for the 4505 Buttewoods estate. Execution begins upon sign-off below. All written offers must be reviewed by retained counsel before submission.</p>
          <div class="sig-line">
            <div>
              <div class="line">&nbsp;</div>
              <div class="caption">Aaron C. Norris — Principal</div>
            </div>
            <div>
              <div class="line">&nbsp;</div>
              <div class="caption">Date</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal Acquisition Brief · Prepared for executive review · Confidential
    </div>
  </footer>

</body>
</html>