<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
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
      --nu-success: #0a7a3a;
      --nu-warning: #b8860b;
      --nu-danger: #a02020;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
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
      padding: 6px 18px;
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.15;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-sub {
      font-size: 1.05rem;
      color: #5a5a70;
      margin-bottom: 8px;
      font-weight: 400;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      margin-top: 18px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 44px;
    }
    .nu-meta-item {
      font-size: 0.82rem;
      color: #666;
    }
    .nu-meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 0.72rem;
      margin-bottom: 3px;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      color: var(--nu-dark-text);
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
      display: inline-block;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }

    /* PROPERTY SUMMARY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .property-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .property-cell .label {
      font-size: 0.7rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .property-cell .value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .property-cell .unit {
      font-size: 0.8rem;
      color: #777;
      font-weight: 400;
      margin-top: 4px;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #f5f7ff 0%, #ecf4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 6px 6px 0;
      margin: 20px 0;
    }
    .nu-callout.warning {
      background: linear-gradient(135deg, #fff9ec 0%, #fff4d8 100%);
      border-left-color: var(--nu-accent-gold);
    }
    .nu-callout h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-size: 1rem;
      letter-spacing: 0.02em;
    }
    .nu-callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* BADGES */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 16px 0;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.85rem;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 20px 0;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card h3 .subline {
      display: block;
      color: var(--nu-dark-text);
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.05em;
      margin-top: 2px;
      text-transform: none;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 0.92rem;
      background: var(--nu-white);
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table thead th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: #fafbfd; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table .total-row td {
      font-weight: 900;
      background: #eef3ff !important;
      color: var(--nu-dark-text);
      border-top: 2px solid var(--nu-blue);
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 10px 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 8px 0 8px 32px;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .nu-checklist li span.sub {
      color: #666;
      font-size: 0.85rem;
      font-weight: 400;
    }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin: 20px 0;
    }
    @media (max-width: 768px) {
      .ladder { grid-template-columns: 1fr; }
    }
    .ladder-step {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px;
      text-align: center;
      border-top: 6px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .ladder-step.opening { border-top-color: var(--nu-success); }
    .ladder-step.target { border-top-color: var(--nu-blue); background: #f5f8ff; }
    .ladder-step.walk { border-top-color: var(--nu-danger); }
    .ladder-step .label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
      font-weight: 900;
    }
    .ladder-step .amt {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      font-variant-numeric: tabular-nums;
    }
    .ladder-step .note {
      font-size: 0.82rem;
      color: #666;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 20px 0;
      padding-left: 28px;
      border-left: 3px solid var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 16px 16px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px; top: 14px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item .tl-date {
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .timeline-item .tl-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* LEVERAGE POINTS */
    .leverage {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin: 18px 0;
    }
    .lev-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 18px 20px;
    }
    .lev-card h5 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .lev-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* SCRIPT BLOCK */
    .script {
      background: #1a1a2e;
      color: #e8ecf5;
      padding: 22px 26px;
      border-radius: 6px;
      font-size: 0.92rem;
      line-height: 1.7;
      margin: 14px 0;
      border-left: 4px solid var(--nu-cyan);
    }
    .script em { color: var(--nu-cyan); font-style: normal; font-weight: 700; }

    /* SIGN-OFF */
    .signoff-block {
      background: linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      margin-top: 30px;
    }
    .signoff-block .line {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .signoff-block .line:last-child { border-bottom: none; }
    .signoff-block .line strong { color: var(--nu-dark-text); font-weight: 700; }
    .signoff-block .sig-area {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 26px;
    }
    @media (max-width: 640px) {
      .signoff-block .sig-area { grid-template-columns: 1fr; }
    }
    .sig-line {
      border-bottom: 2px solid var(--nu-dark-text);
      padding-bottom: 40px;
      position: relative;
    }
    .sig-line .sig-label {
      position: absolute;
      bottom: -22px; left: 0;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px 40px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
    }
    .nu-footer-meta {
      margin-top: 24px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-page-title { font-size: 1.65rem; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .property-cell .value { font-size: 1.2rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .ladder-step { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-section { page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Real Estate Acquisition — Negotiation Brief</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span class="accent">Buttewoods Estate</span> — Purchase Negotiation Plan</h1>
      <p class="nu-page-sub">7,098 sq ft residential estate — 4505 Buttewoods</p>

      <div class="nu-meta-row">
        <div class="nu-meta-item"><strong>Property</strong>4505 Buttewoods — 7,098 sq ft</div>
        <div class="nu-meta-item"><strong>Buyer</strong>Aaron C. Norris</div>
        <div class="nu-meta-item"><strong>Prepared</strong>2026-04-24</div>
        <div class="nu-meta-item"><strong>Status</strong>Pre-Offer — Leverage Build</div>
        <div class="nu-meta-item"><strong>Source</strong>reMarkable Action Item</div>
      </div>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> At A Glance</h2>
        <div class="property-grid">
          <div class="property-cell">
            <div class="label">Living Area</div>
            <div class="value">7,098</div>
            <div class="unit">square feet</div>
          </div>
          <div class="property-cell">
            <div class="label">Address</div>
            <div class="value" style="font-size:1.1rem;">4505<br>Buttewoods</div>
          </div>
          <div class="property-cell">
            <div class="label">Asset Class</div>
            <div class="value" style="font-size:1.1rem;">Luxury<br>Residential</div>
          </div>
          <div class="property-cell">
            <div class="label">Intended Use</div>
            <div class="value" style="font-size:1.1rem;">Primary<br>Residence</div>
          </div>
          <div class="property-cell">
            <div class="label">Phase</div>
            <div class="value" style="font-size:1.1rem;">Negotiation<br>Prep</div>
          </div>
        </div>

        <div class="nu-callout">
          <h4>Why this brief exists</h4>
          <p>This document sets the strategy, offer ladder, and deal architecture for the purchase of a 7,098-square-foot estate at 4505 Buttewoods. The objective is to walk into every seller conversation with the numbers known, the leverage mapped, and a written walk-away point — so the best deal wins, not the longest negotiation.</p>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Negotiation</span> Checklist</h2>
        <p style="margin-bottom:14px;">Nothing gets offered until every one of these boxes is closed. Confirm each item before the first written number leaves this office.</p>

        <div class="two-col">
          <div class="nu-card">
            <h3>Data &amp; Valuation <span class="subline">Know the number before you speak it</span></h3>
            <ul class="nu-checklist">
              <li><strong>Pull full tax-assessor card</strong><span class="sub">Recorded lot size, year built, prior sales, assessed value, tax history (3 yrs)</span></li>
              <li><strong>Pull last recorded deed + mortgage</strong><span class="sub">Original purchase price, existing lien balance, release provisions</span></li>
              <li><strong>Run 3-comp &amp; 6-comp CMA</strong><span class="sub">Closed sales within 0.75 mi, same sq-ft band ±15%, last 12 months</span></li>
              <li><strong>Order independent appraisal</strong><span class="sub">Order before first written offer — not after</span></li>
              <li><strong>$/sq ft ceiling memo</strong><span class="sub">Write it down, sign it, put it in this folder</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Seller Intel <span class="subline">Know who sits across the table</span></h3>
            <ul class="nu-checklist">
              <li><strong>Identify seller motivation</strong><span class="sub">Relocation, estate, divorce, distressed, seasoned? Each changes the ask.</span></li>
              <li><strong>Days on market</strong><span class="sub">Every 30 days cold = roughly 2-4% of give</span></li>
              <li><strong>Prior price changes</strong><span class="sub">Track every reduction — signals the real floor</span></li>
              <li><strong>Neighborhood absorption rate</strong><span class="sub">Months of inventory in this band tells you who has leverage</span></li>
              <li><strong>Listing agent read</strong><span class="sub">Name, brokerage, track record, how they handle counters</span></li>
            </ul>
          </div>
        </div>

        <div class="two-col">
          <div class="nu-card">
            <h3>Financial <span class="subline">Cash plus capacity, documented</span></h3>
            <ul class="nu-checklist">
              <li><strong>Pre-approval letter on file</strong><span class="sub">Full pre-approval (not pre-qual) — Renasant (Patrick Lavette) first call</span></li>
              <li><strong>Proof-of-funds letter</strong><span class="sub">Dated within 30 days of offer</span></li>
              <li><strong>Rate scenario sheet</strong><span class="sub">Conventional / jumbo / portfolio — compare total cost</span></li>
              <li><strong>Monthly carry cost worksheet</strong><span class="sub">PITI + HOA + insurance + utilities + maintenance reserve</span></li>
              <li><strong>Earnest money amount decided</strong><span class="sub">1-2% standard; higher = stronger offer signal</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Property Condition <span class="subline">Leverage hides in inspection reports</span></h3>
            <ul class="nu-checklist">
              <li><strong>Exterior drive-by w/ notes</strong><span class="sub">Photograph every deferred maintenance item before tour</span></li>
              <li><strong>Full pre-offer inspection</strong><span class="sub">If seller allows — if not, aggressive inspection contingency</span></li>
              <li><strong>Roof / HVAC / plumbing age</strong><span class="sub">Each system past useful life = dollar credit in the counter</span></li>
              <li><strong>Title &amp; survey pre-check</strong><span class="sub">Easements, setbacks, encroachments, lis pendens</span></li>
              <li><strong>Zoning &amp; HOA review</strong><span class="sub">Any restrictions that affect use, resale, or renovation</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> Ladder</h2>
        <p style="margin-bottom:18px;">Three numbers, written before the first phone call. Each tier is a deliberate commitment with defined terms — not a vibe.</p>

        <div class="ladder">
          <div class="ladder-step opening">
            <div class="label">Opening Offer</div>
            <div class="amt">Tier 1</div>
            <div class="note">Anchored at ~88–92% of adjusted CMA midpoint. Shorter inspection window (10 days). Standard contingencies. Signals serious, not desperate.</div>
          </div>
          <div class="ladder-step target">
            <div class="label">Target Price</div>
            <div class="amt">Tier 2</div>
            <div class="note">Final counter range — the number that closes the deal. Set at adjusted CMA less documented condition deductions. This is where we want to land.</div>
          </div>
          <div class="ladder-step walk">
            <div class="label">Walk-Away</div>
            <div class="amt">Tier 3</div>
            <div class="note">Written ceiling. One dollar over and we tip our hat and leave. Saved in this folder, signed. No verbal exceptions.</div>
          </div>
        </div>

        <div class="nu-callout warning">
          <h4>Rule of the room</h4>
          <p>Dollar amounts stay unfilled in this brief until the CMA and appraisal are both in hand. Negotiating from assumed numbers is how good buyers overpay. The ladder is the structure — the numbers go in only after the data is on the desk.</p>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> Points</h2>
        <p style="margin-bottom:18px;">Every item below is a reason the seller should move off list price. Used in sequence, not all at once — each is worth something.</p>
        <div class="leverage">
          <div class="lev-card">
            <h5>1. Clean Financing</h5>
            <p>Full pre-approval on letterhead, strong earnest money, quick appraisal turnaround. Certainty of close is worth real dollars against a shaky higher offer.</p>
          </div>
          <div class="lev-card">
            <h5>2. Shorter Close Timeline</h5>
            <p>Offer a 30- or 21-day close if seller's motivation is speed. Time is the cheapest concession we can give.</p>
          </div>
          <div class="lev-card">
            <h5>3. As-Is Language (Strategic)</h5>
            <p>Offering "as-is" with full inspection rights signals confidence, blocks repair-request haggling, and opens the door to bigger condition-based price reductions up front.</p>
          </div>
          <div class="lev-card">
            <h5>4. Days on Market</h5>
            <p>Every 30 days of listing age reduces seller leverage. Document DOM in the cover letter to your offer — politely.</p>
          </div>
          <div class="lev-card">
            <h5>5. Condition Deductions</h5>
            <p>Every deferred-maintenance item becomes a line item in the counter. Roof age, HVAC age, landscape, cosmetic — each one priced, each one defended.</p>
          </div>
          <div class="lev-card">
            <h5>6. Comp Memo</h5>
            <p>Walk in with closed comps that justify the number. Reasoned offers get countered; "lowball" offers get rejected.</p>
          </div>
          <div class="lev-card">
            <h5>7. Flexible Close Date</h5>
            <p>If seller needs to rent back or delay, offer it for free — in exchange for price. Non-monetary terms are underpriced in most negotiations.</p>
          </div>
          <div class="lev-card">
            <h5>8. Single-Close, No Sale Contingency</h5>
            <p>Not contingent on selling another home = cleaner than 90% of competing offers at this size.</p>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Deal</span> Architecture — Key Terms</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Opening Position</th>
              <th>Acceptable Position</th>
              <th>Hard Line</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Earnest Money</strong></td>
              <td>1% of offer price</td>
              <td>2% of offer price</td>
              <td>Never refundable past inspection period</td>
            </tr>
            <tr>
              <td><strong>Inspection Period</strong></td>
              <td>14 days</td>
              <td>10 days</td>
              <td>Minimum 7 days — non-negotiable</td>
            </tr>
            <tr>
              <td><strong>Financing Contingency</strong></td>
              <td>21 days</td>
              <td>17 days</td>
              <td>Keep the contingency — do not waive</td>
            </tr>
            <tr>
              <td><strong>Appraisal Contingency</strong></td>
              <td>Full appraisal gap protection</td>
              <td>Up to $X gap coverage (TBD)</td>
              <td>Must retain right to renegotiate if appraisal short</td>
            </tr>
            <tr>
              <td><strong>Close Date</strong></td>
              <td>45 days from acceptance</td>
              <td>30 days from acceptance</td>
              <td>Flex if financing requires</td>
            </tr>
            <tr>
              <td><strong>Possession</strong></td>
              <td>At closing</td>
              <td>Up to 7-day free rent-back</td>
              <td>No rent-back past 30 days</td>
            </tr>
            <tr>
              <td><strong>Title / Survey</strong></td>
              <td>Seller pays owner's title policy</td>
              <td>Split at custom</td>
              <td>New survey required if none within 24 mo</td>
            </tr>
            <tr>
              <td><strong>Home Warranty</strong></td>
              <td>Seller provides 1-yr warranty</td>
              <td>Either party</td>
              <td>Not a deal-breaker</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Conversation</span> Roadmap</h2>
        <p style="margin-bottom:18px;">Five scripted moves. Each one has a purpose — opening anchor, counter, walk-away frame, reconciliation, close.</p>

        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>OPENING CALL — Listing agent introduction, soft fact-finding</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>WRITTEN OFFER — Tier 1 with comp memo and pre-approval attached</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>COUNTER RESPONSE — Move to Tier 2 only after one seller concession</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>INSPECTION REPRICE — Quantified condition deductions, delivered in writing</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>CLOSE OR WALK — Tier 3 is a ceiling; no verbal overrides</div>
        </div>

        <div class="script">
          <strong>Opening call — listing agent script:</strong><br><br>
          "<em>Afternoon — this is Aaron Norris calling on 4505 Buttewoods. I'm a serious buyer, pre-approved, local, and I wanted to introduce myself before we put anything on paper. Before I put together an offer, can you help me understand a few things — how long has the property been active, has there been inspection activity, and is the seller flexible on timing?</em>"<br><br>
          <em>Wait. Listen. Take notes. Do not volunteer a number. Do not talk about price.</em><br><br>
          "<em>Appreciate the color. You'll see something from us in the next few days — and when it comes through, you'll find it's clean, it's fast, and it's reasoned. I want to make this easy for you and the seller.</em>"
        </div>

        <div class="script" style="border-left-color:var(--nu-accent-gold);">
          <strong>Counter response script (seller countered above Tier 1):</strong><br><br>
          "<em>Thank you for the counter. I appreciate the seller meeting us halfway. Here's what we're able to do — we can move to [Tier 2 number] and we can tighten the close to 30 days. What we'd ask in return is [one specific concession — warranty, survey, possession, minor repair]. If that works, I'll have my attorney draft the revision this afternoon.</em>"
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Professional</span> Team</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name / Firm</th>
              <th>Purpose</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lender</td>
              <td>Patrick Lavette — Renasant Bank</td>
              <td>Pre-approval, rate scenarios, jumbo vs conventional</td>
              <td>Call first — standing relationship</td>
            </tr>
            <tr>
              <td>Real Estate Attorney</td>
              <td>To be retained</td>
              <td>Contract review, closing package, title opinion</td>
              <td>Engage before written offer</td>
            </tr>
            <tr>
              <td>Buyer's Agent / Broker</td>
              <td>To be retained (or direct)</td>
              <td>MLS access, comp data, offer submission, counter negotiation</td>
              <td>Decide direct vs represented</td>
            </tr>
            <tr>
              <td>Home Inspector</td>
              <td>Licensed AL inspector — scheduled within 48 hr of acceptance</td>
              <td>Full systems inspection + report</td>
              <td>Line up candidates now</td>
            </tr>
            <tr>
              <td>Independent Appraiser</td>
              <td>Residential-certified AL appraiser</td>
              <td>Pre-offer valuation anchor</td>
              <td>Order before Tier 1 goes out</td>
            </tr>
            <tr>
              <td>Title Company</td>
              <td>Buyer's choice (standard practice)</td>
              <td>Title search, closing, escrow</td>
              <td>Select when offer drafted</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>Homeowners + umbrella quote</td>
              <td>Binder before closing, quoted before offer</td>
              <td>Quote during due diligence</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Timeline</span> — Next 21 Days</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-date">Day 1–2 — Data Pull</div>
            <div class="tl-body">Tax record, deed, mortgage history, DOM, price changes, comp pull, HOA/zoning quick check. Folder built in norris-ops/internal/.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 3 — Lender Call</div>
            <div class="tl-body">Call Patrick Lavette (Renasant). Dollar amount, rate scenarios, pre-approval letter ordered, proof-of-funds requested.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 4–6 — Valuation</div>
            <div class="tl-body">Independent appraisal ordered. CMA finalized. Ladder numbers written and signed. Walk-away ceiling locked.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 6 — Listing Agent Intro</div>
            <div class="tl-body">Soft fact-finding call. Do not disclose number. Gather motivation, timeline, prior offers, seller flexibility.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 7–8 — Walkthrough</div>
            <div class="tl-body">Property tour with condition notes + photos. Pre-offer inspection if allowed.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 9 — Team Assembly</div>
            <div class="tl-body">Attorney engaged. Title company identified. Insurance quotes pulled. Inspector tentative-scheduled.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 10 — Tier 1 Offer</div>
            <div class="tl-body">Written offer delivered with comp memo, pre-approval, POF. Clean package. 48-hour response deadline.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 11–14 — Counter Cycle</div>
            <div class="tl-body">One counter. Move to Tier 2 only if seller gives a concession. Inspection period begins at acceptance.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">Day 15–21 — Due Diligence</div>
            <div class="tl-body">Full inspection, title, survey, condition-based renegotiation. Appraisal ordered by lender. Finalize financing commitment.</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> Register</h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Appraisal comes in below contract price</td>
              <td>Keep appraisal contingency. Cap gap coverage. Right to renegotiate or terminate.</td>
            </tr>
            <tr>
              <td>Hidden defects discovered at inspection</td>
              <td>Inspection contingency retained. Written reprice allowed or walk with earnest refunded.</td>
            </tr>
            <tr>
              <td>Title defect / easement surprise</td>
              <td>Owner's title policy required. Title opinion before closing. Survey ordered in first 7 days.</td>
            </tr>
            <tr>
              <td>Competing offer emerges</td>
              <td>Our leverage = clean financing + speed + flexibility — not highest number. Do not abandon ladder to chase.</td>
            </tr>
            <tr>
              <td>Seller backs out post-acceptance</td>
              <td>Binding contract with specific performance language. Attorney reviews before signature.</td>
            </tr>
            <tr>
              <td>Interest rate rises before lock</td>
              <td>Lock rate at contract signing if scenario sheet favors it. Otherwise float with float-down option.</td>
            </tr>
            <tr>
              <td>Post-close major repair emerges</td>
              <td>1-year home warranty negotiated. Inspection documentation retained. Budget a 1% first-year reserve.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Walk-Away</span> Triggers</h2>
        <div class="nu-callout warning">
          <h4>These are non-negotiable. If any one occurs, deal dies.</h4>
          <p>Written in this brief so that in the heat of the room there is no question about what ends the negotiation.</p>
        </div>
        <ul class="nu-checklist">
          <li><strong>Price exceeds Tier 3 walk-away ceiling</strong><span class="sub">Even by $1. No exceptions.</span></li>
          <li><strong>Seller refuses inspection contingency</strong><span class="sub">We do not buy a 7,098 sq ft property blind.</span></li>
          <li><strong>Material title defect with no cure path</strong><span class="sub">Cloud on title, active lis pendens, boundary dispute without resolution</span></li>
          <li><strong>Structural or foundation finding seller refuses to address</strong><span class="sub">No repair, no credit, no walk — full stop.</span></li>
          <li><strong>Appraisal short and seller will not flex</strong><span class="sub">Contingency exists for a reason. Use it.</span></li>
          <li><strong>Financing cannot close at terms inside carry-cost budget</strong><span class="sub">If monthly PITI pushes past the limit set on day 3, we walk.</span></li>
        </ul>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Sign-Off</span> &amp; Next Action</h2>
        <div class="signoff-block">
          <div class="line"><strong>Next Action</strong><span>Day 1–2 data pull — tax record, deed, comps, DOM</span></div>
          <div class="line"><strong>Owner</strong><span>Aaron C. Norris</span></div>
          <div class="line"><strong>Deadline to start</strong><span>Within 5 business days of this brief</span></div>
          <div class="line"><strong>Ladder numbers due</strong><span>By Day 4 — before any seller call</span></div>
          <div class="line"><strong>Document location</strong><span>norris-ops/internal/ — keep updated as deal progresses</span></div>

          <div class="sig-area">
            <div class="sig-line">
              <span class="sig-label">Aaron C. Norris — Buyer</span>
            </div>
            <div class="sig-line">
              <span class="sig-label">Date</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal Document — Negotiation Brief — Prepared 2026-04-24<br>
      3rd-Generation Utility Equipment Dealer/Distributor | Birmingham, Alabama
    </div>
  </footer>

</body>
</html>