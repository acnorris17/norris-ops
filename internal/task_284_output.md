<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
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
      --nu-success: #1a7f3e;
      --nu-warning: #b8860b;
      --nu-danger: #c62828;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.9;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* DOCUMENT HEADER */
    .doc-title-bar {
      background: var(--nu-white);
      padding: 40px 40px 24px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .doc-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .doc-title {
      font-size: 2.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }
    .doc-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 20px;
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta span strong { color: var(--nu-dark-text); }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .content-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 48px 40px 60px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
    }
    .section-block { margin-bottom: 40px; }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }

    /* SUMMARY STRIP */
    .summary-strip {
      background: linear-gradient(135deg, #1a1a3e 0%, #0033cc 50%, #06D0FF 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 24px;
    }
    .summary-item .label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
      margin-bottom: 6px;
    }
    .summary-item .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.2;
    }
    .summary-item .sub {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.7);
      margin-top: 4px;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .three-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }

    /* TABLES */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .data-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 14px;
      letter-spacing: 0.03em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .data-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:nth-child(even) td { background: #fafafc; }
    .data-table .num { text-align: right; font-variant-numeric: tabular-nums; }
    .data-table .col-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 38%;
    }

    /* BADGES */
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .badge-priority { background: #fff4e5; color: var(--nu-warning); border: 1px solid #f0c37e; }
    .badge-action { background: #e8f0ff; color: var(--nu-blue); border: 1px solid #9fb8ff; }
    .badge-research { background: #f0f0f5; color: #444; border: 1px solid #ccc; }
    .badge-critical { background: #fee; color: var(--nu-danger); border: 1px solid #f0a0a0; }

    /* CHEVRON BADGE */
    .chev-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      margin-bottom: 14px;
    }

    /* LISTS */
    .strategy-list {
      list-style: none;
      counter-reset: step;
    }
    .strategy-list li {
      position: relative;
      padding: 14px 14px 14px 56px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 0 6px 6px 0;
      counter-increment: step;
    }
    .strategy-list li::before {
      content: counter(step);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .strategy-list li strong { color: var(--nu-dark-text); display: block; margin-bottom: 3px; }

    .check-list {
      list-style: none;
    }
    .check-list li {
      position: relative;
      padding: 8px 8px 8px 32px;
      line-height: 1.5;
    }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 14px;
      width: 14px;
      height: 14px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    .bullet-list { list-style: none; }
    .bullet-list li {
      position: relative;
      padding: 5px 0 5px 20px;
      line-height: 1.6;
    }
    .bullet-list li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f5f7ff 0%, #eaf3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 24px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout.warn {
      background: linear-gradient(135deg, #fff8e8 0%, #fff1d0 100%);
      border-left-color: var(--nu-warning);
    }
    .callout.warn .callout-title { color: var(--nu-warning); }
    .callout.danger {
      background: linear-gradient(135deg, #fff0f0 0%, #ffe0e0 100%);
      border-left-color: var(--nu-danger);
    }
    .callout.danger .callout-title { color: var(--nu-danger); }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .ladder-step {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      position: relative;
    }
    .ladder-step.anchor { border-color: var(--nu-danger); background: #fff5f5; }
    .ladder-step.target { border-color: var(--nu-success); background: #f0faf4; transform: scale(1.03); box-shadow: 0 6px 20px rgba(26,127,62,0.15); }
    .ladder-step.walkaway { border-color: var(--nu-blue); }
    .ladder-step .tier {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .ladder-step.anchor .tier { color: var(--nu-danger); }
    .ladder-step.target .tier { color: var(--nu-success); }
    .ladder-step.walkaway .tier { color: var(--nu-blue); }
    .ladder-step .amount {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .ladder-step .note { font-size: 0.82rem; color: #666; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .tl-item {
      position: relative;
      padding: 8px 0 8px 0;
      margin-bottom: 6px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -26px;
      top: 14px;
      width: 12px;
      height: 12px;
      background: var(--nu-blue);
      border-radius: 50%;
      border: 2px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .tl-item .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .tl-item .what { margin-top: 2px; }

    /* DECISION GRID */
    .decision-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .dec-cell {
      background: var(--nu-white);
      padding: 20px;
    }
    .dec-cell h4 {
      font-size: 0.95rem;
      font-weight: 900;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .dec-cell.pros h4 { color: var(--nu-success); border-bottom-color: var(--nu-success); }
    .dec-cell.cons h4 { color: var(--nu-danger); border-bottom-color: var(--nu-danger); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-note {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .two-col { grid-template-columns: 1fr; }
      .ladder { grid-template-columns: 1fr; }
      .decision-grid { grid-template-columns: 1fr; }
      .doc-title { font-size: 1.6rem; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .content-wrap { padding: 32px 20px 40px; }
      .doc-title-bar { padding: 28px 20px 20px; }
      .nu-card { padding: 20px; }
      .summary-strip { padding: 24px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section-block { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC TITLE -->
  <div class="doc-title-bar">
    <div class="doc-eyebrow">Private Acquisition Brief · Confidential</div>
    <h1 class="doc-title">4505 Buttewoods Estate — <span>Negotiation Plan</span></h1>
    <p class="doc-subtitle">7,098 sq ft residential estate acquisition — strategy, offer ladder, due diligence checklist, and execution timeline.</p>
    <div class="doc-meta">
      <span><strong>Prepared for:</strong> Aaron C. Norris</span>
      <span><strong>Source:</strong> reMarkable Action Item</span>
      <span><strong>Date:</strong> April 21, 2026</span>
      <span><strong>Status:</strong> Pre-offer</span>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="content-wrap">

      <!-- SUMMARY STRIP -->
      <div class="summary-strip">
        <div class="summary-item">
          <div class="label">Subject Property</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Residential estate</div>
        </div>
        <div class="summary-item">
          <div class="label">Gross Living Area</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Per listing record</div>
        </div>
        <div class="summary-item">
          <div class="label">Objective</div>
          <div class="value">Negotiate Purchase</div>
          <div class="sub">Secure below ask</div>
        </div>
        <div class="summary-item">
          <div class="label">Current Phase</div>
          <div class="value">Intel &amp; Strategy</div>
          <div class="sub">Pre-offer preparation</div>
        </div>
      </div>

      <!-- PRIORITY CALLOUT -->
      <div class="callout warn">
        <div class="callout-title">⚑ Action Item Context</div>
        <p>This brief captures the reMarkable-logged directive: <em>"Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods."</em> The plan below converts that one-line directive into an actionable framework — comparable analysis, value drivers, offer ladder, and execution cadence — so Aaron can move from intent to signed contract without losing leverage.</p>
      </div>

      <!-- SECTION 1 — OBJECTIVE -->
      <div class="section-block">
        <div class="chev-badge">STRATEGIC OBJECTIVE</div>
        <h2 class="nu-section-title">Mission <span>Brief</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p style="margin-bottom: 14px;"><strong>Primary goal:</strong> Acquire the 7,098 sq ft estate located at 4505 Buttewoods at a price and under terms that protect Aaron's long-term capital, minimize surprise post-close, and preserve negotiating authority throughout the process.</p>
          <p style="margin-bottom: 14px;"><strong>Guiding principles for this transaction:</strong></p>
          <ul class="bullet-list">
            <li>Lead every conversation with certainty — not urgency. Sellers respond to buyers who will walk.</li>
            <li>Control the information flow. Never volunteer a ceiling, timeline, or motivation the seller hasn't asked for.</li>
            <li>Separate the real estate decision from the emotional one. This is a capital allocation.</li>
            <li>Document everything in writing. Verbal agreements on price, closing, inclusions, and repairs are worth exactly zero.</li>
            <li>Reserve the right to walk until the day the deed records.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 2 — INTEL TO GATHER -->
      <div class="section-block">
        <div class="chev-badge">INTELLIGENCE REQUIRED</div>
        <h2 class="nu-section-title">Property &amp; Seller <span>Intel</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 12px; font-size: 1.05rem;">Property Data Points</h3>
            <table class="data-table">
              <tr><td class="col-label">Address</td><td>4505 Buttewoods</td></tr>
              <tr><td class="col-label">Gross Living Area</td><td>7,098 sq ft</td></tr>
              <tr><td class="col-label">Lot Size</td><td><span class="badge badge-research">Confirm</span></td></tr>
              <tr><td class="col-label">Year Built</td><td><span class="badge badge-research">Confirm</span></td></tr>
              <tr><td class="col-label">Bedrooms / Baths</td><td><span class="badge badge-research">Confirm</span></td></tr>
              <tr><td class="col-label">Tax Assessment</td><td><span class="badge badge-research">Pull from county</span></td></tr>
              <tr><td class="col-label">Last Sale Price / Date</td><td><span class="badge badge-research">Pull from county</span></td></tr>
              <tr><td class="col-label">List Price (current)</td><td><span class="badge badge-research">Confirm</span></td></tr>
              <tr><td class="col-label">Days on Market</td><td><span class="badge badge-research">Confirm</span></td></tr>
              <tr><td class="col-label">HOA / Covenants</td><td><span class="badge badge-research">Confirm</span></td></tr>
            </table>
          </div>

          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 12px; font-size: 1.05rem;">Seller &amp; Market Signals</h3>
            <ul class="bullet-list">
              <li><strong>Who owns it?</strong> Individual, trust, estate, or corporate entity? Pull the deed from the county recorder.</li>
              <li><strong>Why are they selling?</strong> Relocation, downsizing, divorce, estate settlement, financial pressure — motivation drives price flexibility.</li>
              <li><strong>How long have they owned it?</strong> 20+ years of ownership = substantial basis + emotional attachment; &lt; 5 years = likely sensitive to break-even.</li>
              <li><strong>Is there a mortgage?</strong> Payoff position sets the seller's hard floor.</li>
              <li><strong>Prior listings or price drops?</strong> Check MLS history for withdrawn/expired listings and cumulative days on market.</li>
              <li><strong>Recent comparable sales</strong> within 1 mile, 7,000+ sq ft, sold in last 6-12 months. Pull three minimum.</li>
              <li><strong>Active competing listings</strong> of similar size and price tier — what is the seller truly up against?</li>
              <li><strong>Neighborhood trajectory</strong> — rising, stable, or softening? School ratings, permits, commercial activity.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 3 — VALUATION FRAMEWORK -->
      <div class="section-block">
        <div class="chev-badge">VALUATION FRAMEWORK</div>
        <h2 class="nu-section-title">Anchor the <span>Price</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p style="margin-bottom: 16px;">Never negotiate from the list price. Build an independent value before the first number is exchanged. Use three anchors and triangulate:</p>
          <div class="three-col">
            <div style="background: var(--nu-light-gray); padding: 18px; border-radius: 6px; border-top: 4px solid var(--nu-blue);">
              <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px;">1 · Comparable Sales</div>
              <p style="font-size: 0.92rem;">Pull 3–5 closed sales within 12 months, similar sq ft (6,000–8,500), same school/submarket. Adjust $/sq ft for condition, lot, finishes. This is the floor.</p>
            </div>
            <div style="background: var(--nu-light-gray); padding: 18px; border-radius: 6px; border-top: 4px solid var(--nu-blue);">
              <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px;">2 · Replacement Cost</div>
              <p style="font-size: 0.92rem;">Current build cost for 7,098 sq ft custom (est. $225–$325/sq ft + land). This frames what it would cost to recreate — useful for insurance and upper bound.</p>
            </div>
            <div style="background: var(--nu-light-gray); padding: 18px; border-radius: 6px; border-top: 4px solid var(--nu-blue);">
              <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px;">3 · Tax Assessment</div>
              <p style="font-size: 0.92rem;">County assessed value × local market ratio. Typically 70–90% of market. Useful as a sanity check and seller-facing data point.</p>
            </div>
          </div>
          <div class="callout" style="margin-top: 20px; margin-bottom: 0;">
            <div class="callout-title">Target Range Output</div>
            <p>After completing the three anchors, produce three numbers: <strong>(a) fair market value</strong>, <strong>(b) strong-buy price</strong> (FMV minus 8–12%), and <strong>(c) walkaway ceiling</strong>. All three must be written down before the first conversation with the seller's agent.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 4 — NEGOTIATION STRATEGY -->
      <div class="section-block">
        <div class="chev-badge">NEGOTIATION TACTICS</div>
        <h2 class="nu-section-title">Negotiation <span>Playbook</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ol class="strategy-list">
            <li>
              <strong>Open with a data-backed number, not a percentage.</strong>
              Cite the three comps. Say, "Based on 123 Example Ln ($X), 456 Sample Dr ($Y), and 789 Demo Ct ($Z), our number is $____." Numbers with evidence are hard to dismiss.
            </li>
            <li>
              <strong>Never lead with "best and final."</strong>
              Always leave room for two counter-moves. First offer should be 8–15% below target, not at target.
            </li>
            <li>
              <strong>Use silence as a tool.</strong>
              After stating a number, stop talking. The first person to speak after a price is the one who moves.
            </li>
            <li>
              <strong>Trade on terms, not just price.</strong>
              Faster close, cash or limited contingencies, flexible possession, or waived minor repairs can buy $30–$80K of price reduction without either side losing face.
            </li>
            <li>
              <strong>Bring proof of funds early, reveal price late.</strong>
              POF signals "serious buyer." It does not signal "I can pay anything." Those are different messages — do not conflate.
            </li>
            <li>
              <strong>Anchor on the inspection report, not the offer.</strong>
              Second-round leverage is the inspection. Order a thorough inspection and use documented findings to renegotiate price or demand credits — not "cosmetic" complaints.
            </li>
            <li>
              <strong>Name one unambiguous walkaway condition up front.</strong>
              "If the septic/well/roof fails inspection, we're out." That sets expectations and gives dignity to walking if needed.
            </li>
            <li>
              <strong>Keep the listing agent, not just the seller, as an ally.</strong>
              They get paid at close. A credible buyer who is close on price is worth more than a dreamer at list. Help them sell the seller.
            </li>
          </ol>
        </div>
      </div>

      <!-- SECTION 5 — OFFER LADDER -->
      <div class="section-block">
        <div class="chev-badge">OFFER LADDER</div>
        <h2 class="nu-section-title">Three-Tier <span>Price Structure</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p style="margin-bottom: 18px;">Build all three prices <em>before</em> the first offer goes out. Anchor low, target mid, walk at the top.</p>
          <div class="ladder">
            <div class="ladder-step anchor">
              <div class="tier">Anchor · First Offer</div>
              <div class="amount">FMV – 12%</div>
              <div class="note">Aggressive, evidence-backed, not insulting. Written with comps attached.</div>
            </div>
            <div class="ladder-step target">
              <div class="tier">Target · Signable Deal</div>
              <div class="amount">FMV – 5% to 8%</div>
              <div class="note">Where you want to land. Meeting here is a win for both sides.</div>
            </div>
            <div class="ladder-step walkaway">
              <div class="tier">Walkaway · Hard Ceiling</div>
              <div class="amount">FMV + 2% max</div>
              <div class="note">Only with extraordinary terms (flexible close, major inclusions, clean condition). Above this — walk.</div>
            </div>
          </div>
          <div class="callout danger" style="margin-top: 22px; margin-bottom: 0;">
            <div class="callout-title">⚠ Discipline Rule</div>
            <p>The walkaway number is sacred. Once written down, it does not move during the heat of the negotiation. If the seller refuses to come under the ceiling, the answer is "thank you, we wish you well" — not "let me stretch."</p>
          </div>
        </div>
      </div>

      <!-- SECTION 6 — DUE DILIGENCE -->
      <div class="section-block">
        <div class="chev-badge">DUE DILIGENCE CHECKLIST</div>
        <h2 class="nu-section-title">Pre-Close <span>Verification</span></h2>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px; font-size: 1.05rem;">Property Condition</h3>
            <ul class="check-list">
              <li>Full home inspection by licensed, independent inspector</li>
              <li>Roof specialist — age, remaining life, leaks</li>
              <li>HVAC inspection — each system, age, service records</li>
              <li>Foundation / structural walk — cracks, settlement</li>
              <li>Termite / wood-destroying organism report</li>
              <li>Sewer scope camera on main line</li>
              <li>Electrical panel and breaker review</li>
              <li>Plumbing pressure and leak test</li>
              <li>Pool / spa inspection (if applicable)</li>
              <li>Radon test (if regional concern)</li>
              <li>Mold screen if any moisture history</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px; font-size: 1.05rem;">Legal, Title &amp; Financial</h3>
            <ul class="check-list">
              <li>Title search and preliminary title report</li>
              <li>Survey — boundaries, easements, encroachments</li>
              <li>HOA / covenants / deed restrictions review</li>
              <li>All permits pulled for additions / renovations</li>
              <li>Unpaid liens, judgments, or tax delinquencies</li>
              <li>Property tax history — past 5 years</li>
              <li>Homeowners insurance quote before close</li>
              <li>Flood zone determination</li>
              <li>Utility cost history — 12 months from seller</li>
              <li>Loan payoff letter (if mortgaged seller)</li>
              <li>Closing cost estimate from settlement agent</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 7 — DECISION MATRIX -->
      <div class="section-block">
        <div class="chev-badge">DECISION MATRIX</div>
        <h2 class="nu-section-title">Acquire vs. <span>Walk</span></h2>
        <div class="nu-section-rule"></div>
        <div class="decision-grid">
          <div class="dec-cell pros">
            <h4>✓ Proceed Signals</h4>
            <ul class="bullet-list">
              <li>Comps support a price at or below walkaway ceiling</li>
              <li>Inspection returns no major structural, roof, or systems issues</li>
              <li>Seller is motivated (relocation, estate, extended DOM)</li>
              <li>Title is clean; no easements that affect use</li>
              <li>Property fits Aaron's long-term plan — residence, legacy asset, or defined income producer</li>
              <li>Capital deployed does not compromise Norris Utilities® operating reserves</li>
            </ul>
          </div>
          <div class="dec-cell cons">
            <h4>✗ Walk Signals</h4>
            <ul class="bullet-list">
              <li>Seller will not come under walkaway ceiling</li>
              <li>Material inspection findings — foundation, roof, systems — not offset by credits</li>
              <li>Title clouds, liens, or easements that restrict use</li>
              <li>Neighborhood trajectory softening or adverse zoning activity</li>
              <li>Purchase would require liquidating operating capital or pressuring company cash flow</li>
              <li>Emotional attachment forming — "I want it" is not a reason to overpay</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 8 — EXECUTION TIMELINE -->
      <div class="section-block">
        <div class="chev-badge">EXECUTION TIMELINE</div>
        <h2 class="nu-section-title">30-Day <span>Action Cadence</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <div class="timeline">
            <div class="tl-item">
              <div class="when">Days 1–3 · Intel</div>
              <div class="what">Pull county records, tax card, deed, prior sale. Identify owner entity and motivation. Compile 3–5 closed comps. Draft FMV, target, and walkaway numbers.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 4–7 · Positioning</div>
              <div class="what">Secure proof of funds / lender pre-approval letter. Line up attorney and inspector. Initial call with listing agent — listen more than talk.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 7–10 · First Offer</div>
              <div class="what">Submit written offer at anchor price with comps attached. Clean terms, short response window (48–72 hours). Do not chase.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 10–14 · Counter Cycle</div>
              <div class="what">Expect counter. Respond with second number moving toward target. Trade terms for price if needed. Remain willing to walk.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 14–16 · Contract</div>
              <div class="what">Sign purchase agreement contingent on inspection, title, appraisal, financing. Earnest money per local custom. Attorney reviews before signature.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 16–25 · Due Diligence</div>
              <div class="what">Execute every item on the due diligence checklist. Use findings to renegotiate price or credits. Do not waive inspection contingency early.</div>
            </div>
            <div class="tl-item">
              <div class="when">Days 25–30 · Close or Walk</div>
              <div class="what">Final walk-through 24 hours before close. Confirm funds, title, insurance. Close — or invoke contingency and walk clean with earnest money returned.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 9 — CAPITAL & RISK -->
      <div class="section-block">
        <div class="chev-badge">CAPITAL &amp; RISK GUARDRAILS</div>
        <h2 class="nu-section-title">Protect the <span>Business First</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p style="margin-bottom: 14px;">Norris Utilities® is a 3rd-generation operating business. Any personal real estate acquisition must be firewalled from company capital and cash flow. Before signing:</p>
          <ul class="bullet-list">
            <li><strong>Funds source documented.</strong> Down payment, reserves, and closing costs come from personal capital — never from company operating accounts.</li>
            <li><strong>Minimum 6-month reserve preserved</strong> on the business side after all personal capital is deployed.</li>
            <li><strong>Ownership entity chosen deliberately</strong> — individual, LLC, or trust — after consult with attorney and CPA. Tax and liability outcomes differ materially.</li>
            <li><strong>Insurance coverage finalized before close</strong> — homeowners, umbrella, and any entity-specific coverage.</li>
            <li><strong>Hold-cost stress test.</strong> Can Aaron cover taxes, insurance, utilities, and maintenance for 24 months on personal income alone, independent of NU® distributions? If not, the deal is too rich.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 10 — NEXT 3 STEPS -->
      <div class="section-block">
        <div class="chev-badge">IMMEDIATE NEXT STEPS</div>
        <h2 class="nu-section-title">The Next <span>Three Moves</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ol class="strategy-list">
            <li>
              <strong>Pull the public record today.</strong>
              County tax assessor + recorder: owner name, deed history, last sale, tax assessment, lot size, permits. This sets the factual floor before any conversation with the listing side.
            </li>
            <li>
              <strong>Build the three-number valuation this week.</strong>
              Comps, replacement cost, and assessment. Write FMV, target, and walkaway numbers in ink and hand-sign the page. Discipline is easier with a signed commitment to yourself.
            </li>
            <li>
              <strong>Schedule the first call with the listing agent once — and only once — valuation is done.</strong>
              Go in with numbers and questions, not with interest. Listen for motivation, timeline, and price flexibility before revealing any position.
            </li>
          </ol>
        </div>
      </div>

      <!-- CLOSING NOTE -->
      <div class="callout">
        <div class="callout-title">Philosophy</div>
        <p>A Legacy of Commitment® applies to personal decisions as much as to customers. The best deals are the ones that still feel right 10 years later — not the ones won in the heat of a bidding moment. Buy well or walk well. Both are victories.</p>
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
    <div class="nu-footer-note">
      Confidential acquisition brief prepared for internal planning only. Not an offer, contract, or binding representation. All values, timelines, and tactics require verification with licensed real estate, legal, and tax professionals before execution. Norris Utilities®, A Legacy of Commitment®, and the Phoenix Icon® are registered marks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>