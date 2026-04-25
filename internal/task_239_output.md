<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0B7A4B;
      --nu-warn: #B8860B;
      --nu-danger: #8B1A1A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue-deep) 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 72px 40px 96px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      width: 78px;
      height: 78px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-banner {
      margin-top: 28px;
      display: inline-block;
      padding: 10px 28px;
      background: rgba(0, 0, 51, 0.35);
      border: 1px solid rgba(255,255,255,0.25);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      border-radius: 2px;
      backdrop-filter: blur(4px);
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 56px;
      margin-top: -56px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 56px;
      display: block;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-inner {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 64px 40px 80px;
    }

    /* ══ DOCUMENT TITLE ══ */
    .doc-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 8px 0 8px 22px;
      margin-bottom: 36px;
    }
    .doc-kicker {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-blue-deep);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .doc-title .highlight { color: var(--nu-blue-deep); }
    .doc-sub {
      font-size: 1.02rem;
      color: #555;
      font-weight: 400;
    }

    /* ══ SUMMARY STRIP ══ */
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 48px;
      border: 1px solid var(--nu-medium-gray);
    }
    .summary-cell {
      background: var(--nu-white);
      padding: 20px 18px;
      text-align: center;
    }
    .summary-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: #777;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .summary-cell .value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .summary-cell .value.accent { color: var(--nu-blue-deep); }
    .summary-cell .unit {
      display: block;
      font-size: 0.72rem;
      font-weight: 400;
      color: #888;
      letter-spacing: 0.1em;
      margin-top: 4px;
      text-transform: uppercase;
    }

    /* ══ SECTIONS ══ */
    .section {
      margin-bottom: 52px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .section-title .first { color: var(--nu-blue-deep); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    /* ══ CARDS ══ */
    .card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-blue);
      letter-spacing: 0.02em;
    }
    .card p { margin-bottom: 10px; font-size: 0.96rem; }
    .card ul { padding-left: 18px; margin-bottom: 4px; }
    .card li { margin-bottom: 8px; font-size: 0.95rem; }

    /* ══ NUMBERS TABLE (Offer Ladder) ══ */
    .ladder {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      font-size: 0.94rem;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
      background: var(--nu-white);
    }
    .ladder thead tr {
      background: linear-gradient(135deg, var(--nu-navy), var(--nu-blue-deep));
      color: var(--nu-white);
    }
    .ladder th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .ladder td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .ladder tr:last-child td { border-bottom: none; }
    .ladder tr:nth-child(even) td { background: #FAFAFC; }
    .ladder .tier-name {
      font-weight: 900;
      color: var(--nu-blue-deep);
      white-space: nowrap;
    }
    .ladder .amt {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .ladder .psf {
      font-variant-numeric: tabular-nums;
      color: #555;
      white-space: nowrap;
    }
    .badge-row {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .badge-open { background: #E6F7EE; color: var(--nu-success); }
    .badge-target { background: #E6ECFA; color: var(--nu-blue-deep); }
    .badge-walk { background: #FBE9E9; color: var(--nu-danger); }
    .badge-stretch { background: #FFF4D6; color: var(--nu-warn); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 10px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 4px; bottom: 4px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .step {
      position: relative;
      padding-bottom: 22px;
    }
    .step:last-child { padding-bottom: 0; }
    .step::before {
      content: '';
      position: absolute;
      left: -30px; top: 4px;
      width: 16px; height: 16px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 4px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
    }
    .step .when {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--nu-blue-deep);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .step .what {
      font-weight: 700;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .step .detail {
      font-size: 0.93rem;
      color: #555;
    }

    /* ══ CHEVRON BADGES (Leverage & Contingencies) ══ */
    .chev-list { margin-top: 4px; }
    .chev {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 13px 28px 13px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.01em;
    }
    .chev .num {
      display: inline-block;
      width: 28px; height: 28px;
      line-height: 28px; text-align: center;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.85rem;
    }
    .chev .txt { line-height: 1.4; }
    .chev .txt small {
      display: block;
      font-weight: 400;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.78);
      margin-top: 2px;
      letter-spacing: 0.01em;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #F5F7FF 0%, #EAF4FF 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 28px;
    }
    .callout .label {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* ══ DATA BLOCK (Property Facts) ══ */
    .facts {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0;
      font-size: 0.94rem;
    }
    .facts .k,
    .facts .v {
      padding: 10px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .facts .k {
      font-weight: 700;
      color: #555;
      background: #F9FAFC;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }
    .facts .v { color: var(--nu-dark-text); }
    .facts > div:nth-last-child(-n+2) { border-bottom: none; }

    /* ══ TACTIC GRID ══ */
    .tactic-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .tactic {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 20px;
      border-radius: 6px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .tactic:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .tactic .t-num {
      display: inline-block;
      font-weight: 900;
      color: var(--nu-cyan);
      font-size: 1.6rem;
      line-height: 1;
      margin-bottom: 6px;
    }
    .tactic h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .tactic p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.55;
    }

    /* ══ SIGN LINE ══ */
    .sign-line {
      margin-top: 36px;
      padding: 24px 28px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 18px;
    }
    .sign-line .label {
      font-size: 0.78rem;
      font-weight: 700;
      color: #666;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .sign-line .name {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.1rem;
    }
    .sign-line .sub {
      font-size: 0.88rem;
      color: #555;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: -40%; left: 50%;
      transform: translateX(-50%);
      width: 80%; aspect-ratio: 2;
      background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
    }
    .nu-footer > * { position: relative; }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.76rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .two-col { grid-template-columns: 1fr; }
      .tactic-grid { grid-template-columns: 1fr 1fr; }
      .summary-strip { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 48px 20px 72px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; padding-left: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .nu-inner { padding: 44px 22px 60px; }
      .doc-title { font-size: 1.7rem; }
      .tactic-grid { grid-template-columns: 1fr; }
      .ladder th, .ladder td { padding: 10px 10px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card, .tactic, .ladder { box-shadow: none; }
      .section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-banner">Confidential — Internal Negotiation Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,56 L1440,0 L1440,56 L0,56 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- TITLE -->
      <div class="doc-title-block">
        <div class="doc-kicker">Acquisition Strategy · Personal Residence</div>
        <h1 class="doc-title">Negotiate Purchase — <span class="highlight">4505 Buttewoods</span></h1>
        <div class="doc-sub">7,098 sq ft estate · Prepared for Aaron C. Norris, Founder &amp; CEO · Dated April 24, 2026</div>
      </div>

      <!-- SUMMARY STRIP -->
      <div class="summary-strip">
        <div class="summary-cell">
          <div class="label">Home Size</div>
          <div class="value">7,098<span class="unit">Square Feet</span></div>
        </div>
        <div class="summary-cell">
          <div class="label">Opening Offer</div>
          <div class="value accent">$850K<span class="unit">Step 1 Anchor</span></div>
        </div>
        <div class="summary-cell">
          <div class="label">Target Close</div>
          <div class="value accent">$900K<span class="unit">Mid-Ladder</span></div>
        </div>
        <div class="summary-cell">
          <div class="label">Walk-Away</div>
          <div class="value">$945K<span class="unit">Ceiling · Firm</span></div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="label">Negotiation Thesis</div>
        <p>Lead with a disciplined, data-anchored opening at $850,000 ($119.75/sq ft). Move in measured $25,000 increments toward a target close of $900,000 ($126.80/sq ft). Hold the walk-away line at $945,000 ($133.14/sq ft). Every concession earns a concession in return — either on price, terms, or contents. Stay warm, stay patient, stay willing to walk.</p>
      </div>

      <!-- PROPERTY FACTS + OBJECTIVES -->
      <section class="section">
        <h2 class="section-title"><span class="first">Property</span> <span class="rest">&amp; Objectives</span></h2>
        <div class="section-rule"></div>

        <div class="two-col">
          <div class="card">
            <h3>Subject Property — 4505 Buttewoods</h3>
            <div class="facts">
              <div class="k">Address</div><div class="v">4505 Buttewoods</div>
              <div class="k">Gross Living Area</div><div class="v">7,098 sq ft</div>
              <div class="k">Classification</div><div class="v">Single-family estate</div>
              <div class="k">Buyer Purpose</div><div class="v">Primary residence / legacy home</div>
              <div class="k">Buyer</div><div class="v">Aaron C. Norris</div>
              <div class="k">Financing Posture</div><div class="v">Pre-approved · Renasant Bank (P. Lavette)</div>
              <div class="k">Earnest Money</div><div class="v">$10,000 at contract</div>
              <div class="k">Close Target</div><div class="v">45–60 days from executed contract</div>
            </div>
          </div>

          <div class="card">
            <h3>Acquisition Objectives — In Priority Order</h3>
            <ul>
              <li><strong>Price discipline.</strong> Hit the target close ($900K) without signaling urgency. Treat $945K as a hard ceiling, not a starting point.</li>
              <li><strong>Clean contingencies.</strong> Financing, inspection, and appraisal — all three must stay in the contract. No waivers without a compensating concession.</li>
              <li><strong>Terms flexibility.</strong> Offer a seller-friendly close date or rent-back in exchange for price movement.</li>
              <li><strong>Included contents.</strong> Secure built-ins, major appliances, and any outdoor furniture in writing.</li>
              <li><strong>Relationship.</strong> Do not burn the seller. This is a small town; reputation compounds.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="first">Offer</span> <span class="rest">Ladder &amp; Price Discipline</span></h2>
        <div class="section-rule"></div>

        <table class="ladder">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Amount</th>
              <th>$ / sq ft</th>
              <th>Posture</th>
              <th>Use When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier-name">Opening Anchor</td>
              <td class="amt">$850,000</td>
              <td class="psf">$119.75</td>
              <td><span class="badge-row badge-open">Step 1</span></td>
              <td>Initial written offer. Firm, quiet, and attached to comps memo.</td>
            </tr>
            <tr>
              <td class="tier-name">Second Move</td>
              <td class="amt">$875,000</td>
              <td class="psf">$123.27</td>
              <td><span class="badge-row badge-open">Step 2</span></td>
              <td>After first counter. Pair with a concession request (close date, contents).</td>
            </tr>
            <tr>
              <td class="tier-name">Target Close</td>
              <td class="amt">$900,000</td>
              <td class="psf">$126.80</td>
              <td><span class="badge-row badge-target">Goal</span></td>
              <td>Bull's-eye — this is where a balanced deal lands.</td>
            </tr>
            <tr>
              <td class="tier-name">Stretch</td>
              <td class="amt">$925,000</td>
              <td class="psf">$130.32</td>
              <td><span class="badge-row badge-stretch">Stretch</span></td>
              <td>Only if seller gives meaningful terms: repairs credit, appliances, or short close.</td>
            </tr>
            <tr>
              <td class="tier-name">Ceiling</td>
              <td class="amt">$945,000</td>
              <td class="psf">$133.14</td>
              <td><span class="badge-row badge-walk">Walk Line</span></td>
              <td>Absolute maximum. Above this, Aaron walks — no exceptions, no second thoughts.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Leverage</span> <span class="rest">Points In Aaron's Favor</span></h2>
        <div class="section-rule"></div>
        <div class="chev-list">
          <div class="chev"><span class="num">1</span><span class="txt">Cash-strong, pre-approved buyer with clean financing from Renasant<small>Sellers discount 3–6% for certainty of close — this is worth real money at the table.</small></span></div>
          <div class="chev"><span class="num">2</span><span class="txt">No contingent sale — Aaron is not rolling proceeds from another house<small>Removes the most common deal-killer; emphasize this in the offer cover letter.</small></span></div>
          <div class="chev"><span class="num">3</span><span class="txt">Flexible close date — can accommodate seller's moving timeline<small>Offer a 30-day or 75-day close, or a free 14-day rent-back, in exchange for price movement.</small></span></div>
          <div class="chev"><span class="num">4</span><span class="txt">Local buyer, Birmingham-based, long-term owner intent<small>Sellers of legacy estates often prefer buyers who will respect the home — lean into this.</small></span></div>
          <div class="chev"><span class="num">5</span><span class="txt">Willingness to take the property as-is on cosmetic items<small>Waive small cosmetic repair asks in exchange for a price concession. Never waive structural, roof, HVAC, or foundation.</small></span></div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Sequence &amp; Timeline</span></h2>
        <div class="section-rule"></div>

        <div class="timeline">
          <div class="step">
            <div class="when">Day 0 — Preparation</div>
            <div class="what">Lock comps and financing letter.</div>
            <div class="detail">Pull three closed comps within 0.75 mi, 18 mos, ±15% sq ft. Refresh Renasant pre-approval letter to match $945K ceiling (never show the seller this figure).</div>
          </div>
          <div class="step">
            <div class="when">Day 1 — Written Offer</div>
            <div class="what">Submit $850,000 opening anchor in writing.</div>
            <div class="detail">Attach comps memo. Include $10K earnest money, 10-day inspection period, 30-day financing, 45-day close. Short, warm cover letter from Aaron — no urgency language.</div>
          </div>
          <div class="step">
            <div class="when">Days 2–4 — Seller Counter</div>
            <div class="what">Receive counter; do not respond same day.</div>
            <div class="detail">Wait 24–48 hours before responding. Silence is a negotiation tool. Read the counter for what the seller values — price, close date, contents — and plan the next move around their priorities.</div>
          </div>
          <div class="step">
            <div class="when">Days 5–7 — Counter at $875K</div>
            <div class="what">Move to $875,000 plus a paired concession request.</div>
            <div class="detail">Example: "$875K with appliances and outdoor furniture included, 45-day close." Every move up in price must pull something down for Aaron — terms, contents, credits, or time.</div>
          </div>
          <div class="step">
            <div class="when">Days 8–12 — Close the Gap</div>
            <div class="what">Settle between $890K and $915K.</div>
            <div class="detail">Target the $900K line. If the seller holds above $925K without offering terms, pause the process for 48 hours — scarcity builds on both sides. Be prepared to walk.</div>
          </div>
          <div class="step">
            <div class="when">Days 12–22 — Due Diligence</div>
            <div class="what">Inspection, appraisal, and title.</div>
            <div class="detail">Any material finding (roof, HVAC, foundation, termite, water intrusion) re-opens price. Prepare a clean repair-credit request — never a list of nitpicks. Credit is cleaner than repairs.</div>
          </div>
          <div class="step">
            <div class="when">Days 45–60 — Close</div>
            <div class="what">Execute closing with Renasant.</div>
            <div class="detail">Wire transfer, final walk-through morning-of, keys at table. Send a handwritten thank-you note to the seller the following week — small town, long memory.</div>
          </div>
        </div>
      </section>

      <!-- TACTICS GRID -->
      <section class="section">
        <h2 class="section-title"><span class="first">Tactical</span> <span class="rest">Principles At The Table</span></h2>
        <div class="section-rule"></div>

        <div class="tactic-grid">
          <div class="tactic">
            <span class="t-num">01</span>
            <h4>Never Be The First To Flinch</h4>
            <p>Silence after a counter is worth money. Let the seller fill the air. Aaron's calm is his leverage.</p>
          </div>
          <div class="tactic">
            <span class="t-num">02</span>
            <h4>Concede In Shrinking Steps</h4>
            <p>$25K, then $15K, then $10K, then $5K. Pattern telegraphs that the well is running dry — forces the seller to meet in the middle.</p>
          </div>
          <div class="tactic">
            <span class="t-num">03</span>
            <h4>Every Concession Earns A Concession</h4>
            <p>If price goes up, terms must come down — shorter close, included contents, repair credit, or rent-back at no cost.</p>
          </div>
          <div class="tactic">
            <span class="t-num">04</span>
            <h4>Anchor With Data, Not Emotion</h4>
            <p>Attach three comps to the opening offer. Let the numbers do the arguing. Keep personal attachment out of the paperwork.</p>
          </div>
          <div class="tactic">
            <span class="t-num">05</span>
            <h4>Protect The Walk-Away</h4>
            <p>$945K is the ceiling. Write it on a card. Don't share it — with anyone. Emotional drift at the table is the enemy.</p>
          </div>
          <div class="tactic">
            <span class="t-num">06</span>
            <h4>Close Warm, Always</h4>
            <p>Whether the deal closes or not, leave the seller with dignity. Birmingham is small; Aaron's name is on every door.</p>
          </div>
        </div>
      </section>

      <!-- CONTINGENCIES + RISKS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Contingencies,</span> <span class="rest">Protections &amp; Risks</span></h2>
        <div class="section-rule"></div>

        <div class="two-col">
          <div class="card">
            <h3>Must-Have Contract Protections</h3>
            <ul>
              <li><strong>Financing contingency</strong> — 30 days, Renasant Bank, tied to appraisal-at-or-above contract price.</li>
              <li><strong>Inspection contingency</strong> — 10 business days, right to renegotiate or terminate on material finding.</li>
              <li><strong>Appraisal contingency</strong> — right to renegotiate if appraisal comes in below contract price; do not waive.</li>
              <li><strong>Title &amp; survey</strong> — clean title opinion, updated boundary survey, no encroachment acceptance.</li>
              <li><strong>Disclosures</strong> — full Alabama seller disclosure, prior insurance claims, and any known structural work.</li>
              <li><strong>Earnest money</strong> — $10,000 held in escrow with real-estate attorney, not brokerage, if possible.</li>
            </ul>
          </div>

          <div class="card">
            <h3>Known Risks &amp; Mitigations</h3>
            <ul>
              <li><strong>Appraisal shortfall</strong> on a 7,098 sq ft home with thin comps — mitigate by asking Renasant for a pre-order desk review before full commitment.</li>
              <li><strong>Deferred maintenance</strong> typical of large estates — budget a 10% contingency reserve post-close for first-year repairs.</li>
              <li><strong>Property tax reassessment</strong> post-sale — model new tax basis before bidding the ceiling.</li>
              <li><strong>Insurance</strong> — get a binder quote before going firm on any offer above $900K; high-value home policies can surprise.</li>
              <li><strong>Competing offers</strong> — if a bidding situation develops, raise terms (close speed, earnest size) before raising price.</li>
              <li><strong>Emotional drift</strong> — Aaron's personal attachment to the home is the single largest risk. The walk-away is only useful if it's honored.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SIGN LINE -->
      <div class="sign-line">
        <div>
          <div class="label">Prepared For</div>
          <div class="name">Aaron C. Norris, Founder &amp; CEO</div>
          <div class="sub">Norris Utilities®, LLC · Birmingham, Alabama</div>
        </div>
        <div>
          <div class="label">Document Date</div>
          <div class="name">April 24, 2026</div>
          <div class="sub">Valid through executed contract or 60 days, whichever is sooner</div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Confidential · Internal Negotiation Brief · Do Not Distribute</div>
  </footer>

</body>
</html>