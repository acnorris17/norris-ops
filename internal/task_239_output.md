<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #0A7B3E;
      --nu-warning: #C9761A;
      --nu-danger: #B8212F;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 18px;
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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 6px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.75rem;
      letter-spacing: 0.25em;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 600px;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>") center/contain no-repeat;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* INTRO */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 36px;
      padding: 20px 26px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .doc-meta-item { font-size: 0.88rem; }
    .doc-meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.72rem;
      margin-bottom: 3px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin: 48px 0 8px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 12px;
    }
    .snapshot-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .snapshot-cell .label {
      font-size: 0.72rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .snapshot-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .snapshot-cell .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* PRICE LADDER */
    .price-ladder {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .price-row {
      display: grid;
      grid-template-columns: 220px 1fr 140px;
      gap: 16px;
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .price-row:last-child { border-bottom: none; }
    .price-row.header {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.78rem;
    }
    .price-row.ask { background: #FFF5F5; }
    .price-row.opening { background: #F0F7FF; }
    .price-row.target { background: #F0FBF5; }
    .price-row.walk { background: #FDF4EA; }
    .price-label { font-weight: 700; }
    .price-amount {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .price-pct {
      text-align: right;
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* LEVERAGE */
    .leverage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .leverage-col {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 24px;
    }
    .leverage-col.us { border-top: 4px solid var(--nu-blue); }
    .leverage-col.them { border-top: 4px solid #8A8A94; }
    .leverage-col h4 {
      font-size: 0.9rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
    }
    .leverage-col.us h4 { color: var(--nu-blue); }
    .leverage-col ul { list-style: none; padding: 0; }
    .leverage-col li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .leverage-col li:last-child { border-bottom: none; }
    .leverage-col li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.4rem;
      line-height: 1;
      top: 9px;
    }
    .leverage-col.them li::before { color: #8A8A94; }

    /* PLAYBOOK STEPS */
    .playbook-step {
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 20px;
      margin-bottom: 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .step-number {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 900;
    }
    .step-body { padding: 18px 22px 20px 0; }
    .step-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .step-when {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }
    .step-body p { font-size: 0.95rem; margin-bottom: 8px; }
    .step-script {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      padding: 12px 16px;
      margin-top: 10px;
      font-style: italic;
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      border-radius: 0 4px 4px 0;
    }
    .step-script strong { font-style: normal; display: block; font-weight: 900; font-size: 0.7rem; letter-spacing: 0.1em; color: var(--nu-blue); text-transform: uppercase; margin-bottom: 6px; }

    /* TERMS TABLE */
    .terms-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .terms-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.78rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .terms-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .terms-table tr:nth-child(even) td { background: #FAFAFC; }
    .terms-table .term-name { font-weight: 700; color: var(--nu-blue); width: 30%; }

    /* CONTINGENCY */
    .contingency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contingency-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-warning);
      padding: 18px 22px;
      border-radius: 4px;
    }
    .contingency-card h5 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .contingency-card .tag {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      font-size: 0.68rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      border-radius: 2px;
      margin-bottom: 8px;
    }
    .contingency-card p { font-size: 0.88rem; }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px 40px;
      border-radius: 8px;
      margin: 40px 0 20px;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.25) 0%, transparent 70%);
    }
    .nu-callout > * { position: relative; }
    .nu-callout h3 {
      font-size: 1.3rem;
      font-weight: 900;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-callout p { font-size: 1rem; opacity: 0.95; }

    /* ACTION CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 28px;
    }
    .checklist-item {
      display: grid;
      grid-template-columns: 28px 1fr 110px;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
      font-size: 0.94rem;
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }
    .check-when {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: right;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
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
    .nu-footer-confid {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.6);
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .price-row { grid-template-columns: 1fr; gap: 4px; }
      .price-row.header { display: none; }
      .price-amount, .price-pct { text-align: left; }
      .leverage-grid { grid-template-columns: 1fr; }
      .playbook-step { grid-template-columns: 1fr; }
      .step-number { padding: 14px; font-size: 1.4rem; }
      .step-body { padding: 16px 22px 20px; }
      .checklist-item { grid-template-columns: 24px 1fr; }
      .check-when { grid-column: 1 / -1; text-align: left; padding-left: 38px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .playbook-step, .leverage-col, .contingency-card, .terms-table, .price-ladder, .checklist { box-shadow: none; break-inside: avoid; }
      .nu-callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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
    <div class="nu-doc-label">Negotiation Strategy — Private &amp; Confidential</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-section-title"><span class="first">4505</span> <span class="rest">Buttewoods — Acquisition Play</span></h1>
      <div class="nu-section-rule"></div>

      <div class="doc-meta">
        <div class="doc-meta-item">
          <strong>Property</strong>
          4505 Buttewoods
        </div>
        <div class="doc-meta-item">
          <strong>Size</strong>
          7,098 sq ft estate
        </div>
        <div class="doc-meta-item">
          <strong>Buyer</strong>
          Aaron C. Norris
        </div>
        <div class="doc-meta-item">
          <strong>Prepared</strong>
          April 23, 2026
        </div>
        <div class="doc-meta-item">
          <strong>Status</strong>
          Active Negotiation
        </div>
      </div>

      <p style="font-size:1rem; margin-bottom:18px;">
        This playbook governs the acquisition of the 7,098 sq ft estate at 4505 Buttewoods. Every number, script, and concession in this document has been chosen deliberately. Do not deviate from the walk-away ceiling without sleeping on it. The goal is the right house at the right number — not the fastest close.
      </p>

      <!-- ══ PROPERTY SNAPSHOT ══ -->
      <div class="nu-badge">Property Snapshot</div>
      <div class="snapshot-grid">
        <div class="snapshot-cell">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Estate home</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Living Area</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Main residence</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Asking Price</div>
          <div class="value">$1,100,000</div>
          <div class="sub">$155/sq ft list</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Our Offer</div>
          <div class="value">$900,000</div>
          <div class="sub">$127/sq ft basis</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Spread</div>
          <div class="value">$200,000</div>
          <div class="sub">18.2% below ask</div>
        </div>
        <div class="snapshot-cell">
          <div class="label">Days on Market</div>
          <div class="value">Verify</div>
          <div class="sub">Pull before first call</div>
        </div>
      </div>

      <!-- ══ PRICE LADDER ══ -->
      <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Ladder &amp; Walk-Away</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:18px;">
        Four numbers, in order. Do not skip rungs. Each move up must earn a concession from the seller (close date, leaseback, earnest money, inspection scope).
      </p>

      <div class="price-ladder">
        <div class="price-row header">
          <div>Position</div>
          <div>Meaning</div>
          <div>Amount</div>
        </div>
        <div class="price-row ask">
          <div class="price-label">Seller Ask</div>
          <div>Starting point. Treat as aspirational, not anchored.</div>
          <div class="price-amount">$1,100,000</div>
        </div>
        <div class="price-row opening">
          <div class="price-label">Our Opening Offer</div>
          <div>Documented. Anchors the negotiation well below ask.</div>
          <div class="price-amount">$900,000</div>
        </div>
        <div class="price-row target">
          <div class="price-label">Target Landing</div>
          <div>Where a rational seller lands after 2–3 rounds.</div>
          <div class="price-amount">$955,000</div>
        </div>
        <div class="price-row walk">
          <div class="price-label">Hard Walk-Away</div>
          <div>Above this, the math stops working. No exceptions without 24-hour cool-off.</div>
          <div class="price-amount">$985,000</div>
        </div>
      </div>

      <p style="font-size:0.92rem; color:var(--nu-body-text); margin-bottom:12px;">
        <strong style="color:var(--nu-blue);">Move discipline:</strong> first counter up $30k ($900k → $930k). Second counter up $20k ($930k → $950k). Final move up $5k ($950k → $955k) and only if seller concedes a term of equal value. Never move price twice in a row without a seller move between.
      </p>

      <!-- ══ LEVERAGE MAP ══ -->
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Map</span></h2>
      <div class="nu-section-rule"></div>
      <div class="leverage-grid">
        <div class="leverage-col us">
          <h4>What Works For Us</h4>
          <ul>
            <li>Cash or near-cash close posture — no financing delay for the seller.</li>
            <li>Quiet, private buyer — no neighborhood gossip, no social pressure.</li>
            <li>Fast due-diligence window (10 business days) if seller concedes price.</li>
            <li>Willingness to accept property "as-is" above $985k cutoff — gives us leverage at $950k–$960k.</li>
            <li>Flexible close date — can wait, or can sprint to 30 days if seller has a timing pinch.</li>
            <li>No home-sale contingency. Clean contract.</li>
          </ul>
        </div>
        <div class="leverage-col them">
          <h4>What Works For Them</h4>
          <ul>
            <li>7,098 sq ft estates carry a small buyer pool — emotional pricing bias.</li>
            <li>Seller may have non-financial attachment that won't show in comps.</li>
            <li>Comparable sales in the last 12 months will anchor the low end.</li>
            <li>Carrying costs (taxes, insurance, utilities) accrue monthly they hold.</li>
            <li>Spring market tail gives us roughly 8–10 selling weeks before pressure rises.</li>
            <li>If vacant: every month vacant is insurance + risk + no income.</li>
          </ul>
        </div>
      </div>

      <!-- ══ INTELLIGENCE TO PULL ══ -->
      <h2 class="nu-section-title"><span class="first">Pre-Call</span> <span class="rest">Intelligence Checklist</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:18px;">Do not initiate negotiation until every line below is verified. Missing data at the table is a $10k-per-gap tax.</p>

      <div class="checklist">
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Days on market and price-cut history for 4505 Buttewoods.</div>
          <div class="check-when">Before Call 1</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Three closed comparable sales within 18 months, 6,000–8,500 sq ft, same submarket.</div>
          <div class="check-when">Before Call 1</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Current tax assessment vs. list price — gap reveals seller's true basis.</div>
          <div class="check-when">Before Call 1</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Owner of record, length of ownership, any public liens or mortgage balance signals.</div>
          <div class="check-when">Before Call 1</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Occupancy status — owner-occupied, vacant, or tenanted. Drives leverage.</div>
          <div class="check-when">Before Call 1</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Roof age, HVAC age, foundation flags, septic/sewer status. Every defect = credit.</div>
          <div class="check-when">Before Round 2</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Zoning confirmation and any easements recorded.</div>
          <div class="check-when">Before Round 2</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Insurance quote and annual carrying cost (taxes + insurance + utility baseline).</div>
          <div class="check-when">Before Contract</div>
        </div>
      </div>

      <!-- ══ THE PLAYBOOK ══ -->
      <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Playbook — Five Moves</span></h2>
      <div class="nu-section-rule"></div>

      <div class="playbook-step">
        <div class="step-number">1</div>
        <div class="step-body">
          <div class="step-when">Move 1 — Initial Contact</div>
          <div class="step-title">Put $900,000 on the table in writing</div>
          <p>Submit a clean, written offer at $900,000 with a 10-business-day due diligence window, earnest money escrowed within 48 hours, flexible close date (seller choice, 30–75 days), and an as-is inspection posture pending roof/HVAC/foundation review. Written offer — not verbal. Paper anchors. Talk does not.</p>
          <div class="step-script">
            <strong>Script — leading line</strong>
            "I'm serious about 4505. I've already run my numbers — my opening, in writing, is $900,000 with flexible terms. I'd rather start with a real number than waste anyone's time."
          </div>
        </div>
      </div>

      <div class="playbook-step">
        <div class="step-number">2</div>
        <div class="step-body">
          <div class="step-when">Move 2 — Absorb the Counter</div>
          <div class="step-title">Let them come back. Do not chase.</div>
          <p>A reasonable seller counters between $1,050,000 and $1,075,000. An emotional seller counters at or near ask. Either way — no response for 24 hours. Silence is a tool. When you respond, acknowledge their counter, share two or three comp data points (not a lecture), and move to $930,000. Note it is a $30,000 move on our side; highlight that.</p>
          <div class="step-script">
            <strong>Script — response to first counter</strong>
            "Appreciate the response. I've looked at the three closest comps in the last year — they land between $[X] and $[Y]. I'm willing to move $30,000 to $930,000. That's a real number grounded in what's trading. If there's a term that matters to you — close date, leaseback, earnest — tell me and I'll consider it."
          </div>
        </div>
      </div>

      <div class="playbook-step">
        <div class="step-number">3</div>
        <div class="step-body">
          <div class="step-when">Move 3 — Trade Terms for Price</div>
          <div class="step-title">Every dollar up needs a concession back</div>
          <p>The third round is where amateurs overpay. Do not move price again without the seller moving a term — earnest forfeiture reduction, quicker close, leaseback, inspection waiver on cosmetics, or appliance inclusions. If they concede a term worth real value, move to $950,000. If they don't concede, stay at $930,000 and wait 48 hours.</p>
          <div class="step-script">
            <strong>Script — the trade</strong>
            "I can move to $950,000, but I need the close date inside 45 days and the earnest reduced to a hard cap if inspection turns up a structural issue. That's my last meaningful move on price — I can be flexible on close, or flexible on terms, not both."
          </div>
        </div>
      </div>

      <div class="playbook-step">
        <div class="step-number">4</div>
        <div class="step-body">
          <div class="step-when">Move 4 — Final Landing</div>
          <div class="step-title">Close the gap with precision, not volume</div>
          <p>At or near $950,000 the deal should close. If seller insists on $960k–$975k, move $5,000 to $955,000 and declare it a final number. Be willing to walk for 72 hours. Most deals in this range close in the 72-hour silence that follows a credible walk. Do not blink inside those 72 hours.</p>
          <div class="step-script">
            <strong>Script — the finisher</strong>
            "$955,000 is where I need to land. I've given you a clean contract, fast close, and real earnest. If that doesn't work, I understand and we part respectfully. Take 72 hours. If you come back by [date/time], the offer stands. After that, I have other paths."
          </div>
        </div>
      </div>

      <div class="playbook-step">
        <div class="step-number">5</div>
        <div class="step-body">
          <div class="step-when">Move 5 — Walk Away Cleanly</div>
          <div class="step-title">If they will not land at or under $985,000 — walk</div>
          <p>A bad acquisition is worse than no acquisition. Above $985,000 the math and the emotional calculus both fail. Walk without anger, without lectures, and without burning the bridge. Leave the door open in 90 days — the market will bring them back if it is meant to come back.</p>
          <div class="step-script">
            <strong>Script — the exit</strong>
            "I respect where you are — it's just not where I can be. If circumstances change on your side in the next 60–90 days, reach out. I'll take the call. Until then, I wish you well with the sale."
          </div>
        </div>
      </div>

      <!-- ══ TERMS BEYOND PRICE ══ -->
      <h2 class="nu-section-title"><span class="first">Terms</span> <span class="rest">Beyond the Number</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:18px;">Price is one of seven variables. Trade the right ones and the number gets better on its own.</p>

      <table class="terms-table">
        <thead>
          <tr><th>Term</th><th>Our Position</th><th>Willing to Concede</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="term-name">Earnest Money</td>
            <td>2% at binding, escrowed within 48 hours.</td>
            <td>Up to 3% if price lands at or below $940k.</td>
          </tr>
          <tr>
            <td class="term-name">Due Diligence Window</td>
            <td>10 business days, full inspection rights.</td>
            <td>Shorten to 7 days in exchange for a $10k price move from seller.</td>
          </tr>
          <tr>
            <td class="term-name">Close Date</td>
            <td>Flexible — seller's choice 30 to 75 days.</td>
            <td>Strong leverage point. Use it to pull price down.</td>
          </tr>
          <tr>
            <td class="term-name">Financing Contingency</td>
            <td>None, or minimal (appraisal only).</td>
            <td>This is our strongest quiet lever — do not give it up cheaply.</td>
          </tr>
          <tr>
            <td class="term-name">Leaseback / Rent-Back</td>
            <td>Up to 30 days post-close at market rent, seller covers utilities.</td>
            <td>Offer in Move 3 only. Valuable to sellers with timing problem.</td>
          </tr>
          <tr>
            <td class="term-name">As-Is Posture</td>
            <td>Major systems (roof, HVAC, foundation, septic) subject to review and credit.</td>
            <td>Waive cosmetic claims in exchange for $15k–$25k price move.</td>
          </tr>
          <tr>
            <td class="term-name">Inclusions</td>
            <td>All fixtures, appliances, and any built-in furniture.</td>
            <td>Request a short inclusions list in writing; do not pay extra for anything.</td>
          </tr>
        </tbody>
      </table>

      <!-- ══ CONTINGENCIES ══ -->
      <h2 class="nu-section-title"><span class="first">Known</span> <span class="rest">Risks &amp; Contingencies</span></h2>
      <div class="nu-section-rule"></div>

      <div class="contingency-grid">
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Multiple-Offer Scenario</h5>
          <p>If seller claims another offer, ask for proof of funds or written second offer terms. Do not chase on faith. If confirmed, raise only to walk-away ceiling, then hold firm.</p>
        </div>
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Hidden Structural Issues</h5>
          <p>7,098 sq ft means multiple roof planes, long plumbing runs, larger HVAC load. Budget a full inspection with thermal and foundation specialists. Every flag becomes a credit request.</p>
        </div>
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Appraisal Gap</h5>
          <p>If financing is used downstream, a $955k landing may appraise short. Either pay the difference from cash reserve or use the appraisal as a reopen lever — decide in advance.</p>
        </div>
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Emotional Seller</h5>
          <p>If the seller is personally attached (built it, raised kids there), lead with respect — not comps. Discuss stewardship of the property before discussing price.</p>
        </div>
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Slow Response / Ghosting</h5>
          <p>If seller goes silent more than 5 business days after any move, send one written follow-up stating the offer has an expiration date 72 hours out. Then enforce it.</p>
        </div>
        <div class="contingency-card">
          <span class="tag">Risk</span>
          <h5>Title or Easement Surprise</h5>
          <p>Order title early. Any easement or unrecorded encroachment over shared property lines becomes a credit or a walk trigger — decide before signing.</p>
        </div>
      </div>

      <!-- ══ CALLOUT: THE DISCIPLINE ══ -->
      <div class="nu-callout">
        <h3>The One Rule That Wins This</h3>
        <p>The number on the contract matters less than the discipline around it. Five moves. Walk at $985,000. Trade terms for price, never the other way around. Every silence is a tool. The deal is either won by discipline or lost by hurry — it is almost never won by charm.</p>
      </div>

      <!-- ══ POST-ACCEPTANCE ══ -->
      <h2 class="nu-section-title"><span class="first">Post-</span><span class="rest">Acceptance Checklist</span></h2>
      <div class="nu-section-rule"></div>

      <div class="checklist">
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Binding contract executed and countersigned by both parties.</div>
          <div class="check-when">Day 0</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Earnest money wired and receipt confirmed in writing.</div>
          <div class="check-when">Day +2</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Inspection teams scheduled: general, HVAC, roof, foundation, termite.</div>
          <div class="check-when">Day +3</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Title ordered and preliminary report reviewed.</div>
          <div class="check-when">Day +5</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Insurance quote locked and bindable effective close date.</div>
          <div class="check-when">Day +7</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Inspection findings reviewed; credit request or repair addendum drafted.</div>
          <div class="check-when">Day +10</div>
        </div>
        <div class="checklist-item">
          <div class="check-box"></div>
          <div>Final walk-through 48 hours pre-close; deliver keys and funds at close.</div>
          <div class="check-when">Close Day</div>
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
    <div class="nu-footer-confid">Private &amp; Confidential — Prepared 2026-04-23</div>
  </footer>

</body>
</html>