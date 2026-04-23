<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
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
      --nu-success: #0a7c3a;
      --nu-warning: #b8860b;
      --nu-danger: #a8201a;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    /* ══ HEADER ══ */
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
      opacity: 0.6;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 180%;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='white' opacity='0.07'/%3E%3Cpath d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='white' opacity='0.07'/%3E%3C/svg%3E") center/contain no-repeat;
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-eyebrow {
      display: inline-block;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 24px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 22px;
      backdrop-filter: blur(8px);
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
      line-height: 1;
      margin-bottom: 4px;
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-header-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-white);
      max-width: 820px;
      margin: 16px auto 10px;
      line-height: 1.25;
      text-shadow: 0 2px 14px rgba(0,0,0,0.25);
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.02em;
    }

    /* ══ CHEVRON ══ */
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
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ CONFIDENTIAL BANNER ══ */
    .nu-confidential {
      background: linear-gradient(90deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 20px;
      text-align: center;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-top: 2px solid var(--nu-cyan);
      border-bottom: 2px solid var(--nu-cyan);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .nu-section-number {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-weight: 900;
      font-size: 1.2rem;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(0,0,255,0.2);
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }

    /* ══ PROPERTY SUMMARY CARD ══ */
    .property-summary {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fafbfd 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 40px;
    }
    .property-address {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: 0.005em;
    }
    .property-sub {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      font-weight: 400;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .stat-box {
      background: var(--nu-white);
      padding: 18px 16px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid var(--nu-medium-gray);
    }
    .stat-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .stat-label {
      font-size: 0.72rem;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 700;
    }

    /* ══ OBJECTIVE CARD ══ */
    .objective-card {
      background: var(--nu-navy);
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 36px;
      position: relative;
      overflow: hidden;
    }
    .objective-card::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .objective-card > * { position: relative; z-index: 1; }
    .objective-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .objective-text {
      font-size: 1.15rem;
      line-height: 1.55;
      font-weight: 400;
    }

    /* ══ PHASE CARDS ══ */
    .phase-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 28px;
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 24px;
      align-items: start;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .phase-number {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      box-shadow: 0 4px 14px rgba(0,0,255,0.25);
    }
    .phase-number .pn-label { font-size: 0.6rem; letter-spacing: 0.15em; opacity: 0.9; }
    .phase-number .pn-num { font-size: 1.5rem; line-height: 1; }
    .phase-body h3 {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .phase-timing {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .phase-body ul {
      list-style: none;
      padding: 0;
    }
    .phase-body ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .phase-body ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }

    /* ══ VALUATION TABLE ══ */
    .valuation-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      font-size: 0.95rem;
    }
    .valuation-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .valuation-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .valuation-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .valuation-table tr:last-child td {
      border-bottom: none;
    }
    .valuation-table tr.highlight-row {
      background: linear-gradient(90deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      font-weight: 700;
    }
    .valuation-table td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .valuation-table .label-cell {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ OFFER LADDER ══ */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 20px;
    }
    .offer-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px;
      text-align: center;
      position: relative;
    }
    .offer-card.primary {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, rgba(0,0,255,0.02) 0%, var(--nu-white) 100%);
      transform: scale(1.03);
      box-shadow: 0 8px 24px rgba(0,0,255,0.12);
    }
    .offer-tier {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .offer-card.primary .offer-tier { color: var(--nu-blue); }
    .offer-amount {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 4px;
    }
    .offer-card.primary .offer-amount { color: var(--nu-blue); }
    .offer-psf {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .offer-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.5;
      padding-top: 12px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .offer-badge {
      position: absolute;
      top: -12px; left: 50%;
      transform: translateX(-50%);
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 4px 14px;
      border-radius: 12px;
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .bullet-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px;
    }
    .bullet-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .bullet-card.leverage { border-top: 4px solid var(--nu-success); }
    .bullet-card.risk { border-top: 4px solid var(--nu-warning); }
    .bullet-card ul {
      list-style: none;
      padding: 0;
    }
    .bullet-card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.92rem;
      line-height: 1.55;
    }
    .bullet-card.leverage ul li::before {
      content: '+';
      position: absolute;
      left: 0; top: 0;
      color: var(--nu-success);
      font-weight: 900;
      font-size: 1.05rem;
    }
    .bullet-card.risk ul li::before {
      content: '!';
      position: absolute;
      left: 4px; top: 0;
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.05rem;
    }

    /* ══ NEXT ACTIONS ══ */
    .actions-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
    }
    .action-row {
      display: grid;
      grid-template-columns: 60px 1fr 140px;
      gap: 18px;
      align-items: center;
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .action-row:last-child { border-bottom: none; }
    .action-row:nth-child(odd) { background: #fafbfd; }
    .action-check {
      width: 24px; height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      justify-self: center;
    }
    .action-text {
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .action-text strong { color: var(--nu-dark-text); }
    .action-when {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      text-align: right;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 6px;
      margin: 20px 0;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .callout strong { color: var(--nu-blue); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 45px 20px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-header-title { font-size: 1.4rem; }
      .nu-tagline { font-size: 0.95rem; }
      .nu-container { padding: 40px 20px; }
      .property-address { font-size: 1.25rem; }
      .phase-card { grid-template-columns: 1fr; text-align: left; }
      .phase-number { margin-bottom: 8px; }
      .offer-ladder { grid-template-columns: 1fr; }
      .offer-card.primary { transform: none; }
      .two-col { grid-template-columns: 1fr; }
      .action-row { grid-template-columns: 1fr; gap: 8px; }
      .action-when { text-align: left; }
      .action-check { justify-self: start; }
      .valuation-table { font-size: 0.82rem; }
      .valuation-table th, .valuation-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .bullet-card, .offer-card { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-eyebrow">Confidential Acquisition Brief</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <h1 class="nu-header-title">4505 Buttewoods — Estate Acquisition Negotiation Playbook</h1>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONFIDENTIAL BANNER -->
  <div class="nu-confidential">
    Prepared for Aaron C. Norris &nbsp;·&nbsp; Internal Use Only &nbsp;·&nbsp; Do Not Forward
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PROPERTY SUMMARY -->
      <div class="property-summary">
        <div class="property-address">4505 Buttewoods Drive</div>
        <div class="property-sub">Private estate &nbsp;·&nbsp; Single-family residential &nbsp;·&nbsp; Subject property for acquisition analysis</div>
        <div class="property-stats">
          <div class="stat-box">
            <div class="stat-value">7,098</div>
            <div class="stat-label">Square Feet</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">Estate</div>
            <div class="stat-label">Class</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">Buttewoods</div>
            <div class="stat-label">Neighborhood</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">Direct</div>
            <div class="stat-label">Approach</div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <div class="objective-card">
        <div class="objective-label">Negotiation Objective</div>
        <div class="objective-text">
          Acquire 4505 Buttewoods at the lowest defensible price with clean contingencies, a 30-day close, and a seller who feels respected throughout. Build the deal the way Norris Utilities® builds every deal — with patience, preparation, and a firm walk-away number.
        </div>
      </div>

      <!-- SECTION 1: GROUNDWORK -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">1</div>
          <div class="nu-section-title"><span class="accent">Groundwork</span> — Before the First Call</div>
        </div>

        <div class="phase-grid">
          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">STEP</div>
              <div class="pn-num">A</div>
            </div>
            <div class="phase-body">
              <h3>Confirm Ownership & Seller Motivation</h3>
              <span class="phase-timing">Days 1–3</span>
              <ul>
                <li>Pull Jefferson County property records — owner of record, lien status, most recent sale, tax assessment history.</li>
                <li>Identify whether seller is listed with an agent, FSBO, or pre-market. Each path changes the opening move.</li>
                <li>Find the "why now" — divorce, estate, relocation, carrying cost fatigue. Motivation sets the floor.</li>
                <li>If listed, review days-on-market and any price reductions. Each reduction is a concession already given.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">STEP</div>
              <div class="pn-num">B</div>
            </div>
            <div class="phase-body">
              <h3>Financing & Proof of Funds</h3>
              <span class="phase-timing">Days 1–5</span>
              <ul>
                <li>Call Patrick Lavette at Renasant Bank — secure pre-approval letter or private POF at target purchase price + 10% cushion.</li>
                <li>Decide cash vs. conventional vs. portfolio loan before first offer. Cash gets a price concession; leverage keeps working capital free.</li>
                <li>Pre-stage earnest money — confirm wire instructions with title company so EMD can clear within 24 hours of binding contract.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">STEP</div>
              <div class="pn-num">C</div>
            </div>
            <div class="phase-body">
              <h3>Inspection & Due-Diligence Team</h3>
              <span class="phase-timing">Days 3–7</span>
              <ul>
                <li>Line up general inspector, HVAC, roof, sewer/septic, pool (if applicable), and structural — all ready to deploy within 48 hours of contract.</li>
                <li>Request seller's disclosure, repair history, utility bills (24 months), property tax card, and any open permits prior to offer.</li>
                <li>Engage real estate attorney to review title, survey, and any HOA covenants. Estate-class properties often carry deed restrictions worth catching early.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: VALUATION -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">2</div>
          <div class="nu-section-title"><span class="accent">Valuation</span> — Anchor the Number with Data</div>
        </div>

        <p style="margin-bottom: 20px; font-size: 1rem;">
          At 7,098 square feet, this is a luxury-segment property where pricing is driven by condition, lot, and finish quality far more than raw area. Build three independent valuations before naming a price.
        </p>

        <table class="valuation-table">
          <thead>
            <tr>
              <th>Valuation Approach</th>
              <th>What to Pull</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Comparable Sales</td>
              <td>Closed sales of 5,500–8,500 sq ft estates within 3-mile radius, past 12 months. Adjust for lot size, pool, finishes, age.</td>
              <td>50%</td>
            </tr>
            <tr>
              <td class="label-cell">Price-per-Square-Foot</td>
              <td>Average $/sq ft of top 5 comps × 7,098. Then cross-check against active listings to gauge current market.</td>
              <td>25%</td>
            </tr>
            <tr>
              <td class="label-cell">Replacement Cost</td>
              <td>Land value + replacement cost of improvements (depreciated). Useful as a floor — no estate sells below fresh build cost for long.</td>
              <td>15%</td>
            </tr>
            <tr class="highlight-row">
              <td class="label-cell">Norris Fair Value</td>
              <td>Weighted blend of the three. This is the number that goes in the deal file — not the asking price.</td>
              <td class="num">100%</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <strong>Third-generation rule:</strong> Never let an asking price set your anchor. The seller picked that number to leave room. Build your own number from the data, then work backward to an opening offer. Dad would say — you don't pay what they ask, you pay what it's worth.
        </div>
      </section>

      <!-- SECTION 3: OFFER LADDER -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">3</div>
          <div class="nu-section-title"><span class="accent">Offer Ladder</span> — Three Numbers, One Discipline</div>
        </div>

        <p style="margin-bottom: 18px; font-size: 1rem;">
          Write all three numbers on paper before you make contact. Then never improvise past them. Every estate negotiation lives or dies on whether the buyer knew his ceiling going in.
        </p>

        <div class="offer-ladder">
          <div class="offer-card">
            <div class="offer-tier">Opening</div>
            <div class="offer-amount">82%</div>
            <div class="offer-psf">of Norris Fair Value</div>
            <div class="offer-note">Leaves room to concede. Expect rejection or sharp counter. That's fine — you've anchored low.</div>
          </div>
          <div class="offer-card primary">
            <div class="offer-badge">Target</div>
            <div class="offer-tier">Landing Zone</div>
            <div class="offer-amount">92%</div>
            <div class="offer-psf">of Norris Fair Value</div>
            <div class="offer-note">The deal you write in the contract. 30-day close, standard contingencies, strong EMD. This is the win.</div>
          </div>
          <div class="offer-card">
            <div class="offer-tier">Walk-Away</div>
            <div class="offer-amount">98%</div>
            <div class="offer-psf">of Norris Fair Value</div>
            <div class="offer-note">Absolute ceiling. Above this number the math stops working. Stand up from the table — politely.</div>
          </div>
        </div>

        <div class="callout" style="margin-top: 28px;">
          <strong>Ben's-formula discipline:</strong> Just as shipping gets rounded up twice to protect margin, the walk-away number gets locked in before emotion enters the room. When the seller counters at 101% of fair value, you already know the answer. No re-math at the table.
        </div>
      </section>

      <!-- SECTION 4: LEVERAGE VS RISK -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">4</div>
          <div class="nu-section-title"><span class="accent">Leverage</span> & Risks — Play the Board Honestly</div>
        </div>

        <div class="two-col">
          <div class="bullet-card leverage">
            <h4>Norris Utilities® Leverage</h4>
            <ul>
              <li>Verified proof of funds from Renasant Bank — most estate offers die in financing.</li>
              <li>30-day close capability with no home-sale contingency — rare in the luxury tier.</li>
              <li>Business-owner buyer with established local track record since 2021 — reduces closing risk in seller's eyes.</li>
              <li>Willingness to waive minor repair credits in exchange for price — a sweetener that costs little.</li>
              <li>Time on our side — Aaron is not housing-constrained. No deal is better than a bad deal.</li>
            </ul>
          </div>

          <div class="bullet-card risk">
            <h4>Risks to Price In</h4>
            <ul>
              <li>Estate-class deferred maintenance hides in HVAC, roofing, and pool equipment — budget 2–3% of price for year-one capex.</li>
              <li>Carrying cost: property taxes on 7,098 sq ft + insurance + utilities add material monthly burn before move-in.</li>
              <li>Appraisal gap risk if financing — pre-negotiate an appraisal-gap clause or plan to cover shortfall in cash.</li>
              <li>Seller emotional attachment to custom features — avoid criticizing finishes during walkthroughs.</li>
              <li>Any active HOA dues, liens, or covenants that restrict future use. Read every page before signing.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: NEGOTIATION SCRIPTS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">5</div>
          <div class="nu-section-title"><span class="accent">Posture</span> & Language — How Aaron Talks in the Room</div>
        </div>

        <div class="phase-grid">
          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">PHASE</div>
              <div class="pn-num">I</div>
            </div>
            <div class="phase-body">
              <h3>First Contact</h3>
              <span class="phase-timing">Direct — Warm — No Pressure</span>
              <ul>
                <li>Open with respect: "I know this home has meant a lot to the family. I want to have a real conversation about whether we can come together on a number that works for both of us."</li>
                <li>Ask, don't tell: "Help me understand what the right number looks like from your side."</li>
                <li>Never lead with your offer verbally. Get the seller's floor first, then write the offer in paper.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">PHASE</div>
              <div class="pn-num">II</div>
            </div>
            <div class="phase-body">
              <h3>Offer Presentation</h3>
              <span class="phase-timing">Written — Backed by Data</span>
              <ul>
                <li>Deliver in writing with a one-page summary: price, earnest money, closing date, contingencies, POF letter attached.</li>
                <li>Include a short cover letter — not begging, not selling. One paragraph on who Aaron is and why the number is the number.</li>
                <li>Expiration date: 72 hours. Urgency protects the anchor. Without it, the seller shops your offer against the market.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-number">
              <div class="pn-label">PHASE</div>
              <div class="pn-num">III</div>
            </div>
            <div class="phase-body">
              <h3>Counter & Close</h3>
              <span class="phase-timing">Slow Concessions — Trade, Don't Give</span>
              <ul>
                <li>Never concede price without taking something back: repair credit, closing-cost contribution, included furnishings, longer rent-back for seller.</li>
                <li>Move in shrinking increments — each counter smaller than the last. Telegraphs that the floor is near.</li>
                <li>Silence is a tool. After naming a number, stop talking. Let the seller fill the quiet.</li>
                <li>If the deal crosses the walk-away number, stand up warmly: "I respect where y'all are. It's just not the right fit for us at that price. Keep my number if anything changes."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: NEXT ACTIONS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-number">6</div>
          <div class="nu-section-title"><span class="accent">Next</span> Actions — This Week</div>
        </div>

        <div class="actions-list">
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Pull Jefferson County property record</strong> on 4505 Buttewoods — owner, tax card, lien status, prior sale.</div>
            <div class="action-when">Today</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Call Patrick Lavette at Renasant Bank</strong> — request proof of funds / pre-approval letter at estate-tier limit.</div>
            <div class="action-when">This Week</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Build comp set</strong> — 8–10 closed sales, 5,500–8,500 sq ft, 3-mile radius, past 12 months.</div>
            <div class="action-when">Days 1–3</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Calculate Norris Fair Value</strong> using weighted blend. Lock in opening, target, and walk-away numbers on paper.</div>
            <div class="action-when">Days 3–5</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Identify seller's representation</strong> — listing agent, FSBO, or unrepresented. Determine first-contact approach.</div>
            <div class="action-when">Days 1–5</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Engage real estate attorney</strong> — title review, survey, covenants. Pre-draft contract language.</div>
            <div class="action-when">Week 1</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Schedule private walkthrough</strong> — Aaron only, no commentary. Take photos, notes on condition, deferred maintenance.</div>
            <div class="action-when">Week 2</div>
          </div>
          <div class="action-row">
            <div class="action-check"></div>
            <div class="action-text"><strong>Deliver written offer</strong> with cover letter, POF, 72-hour expiration. Open at 82% of Norris Fair Value.</div>
            <div class="action-when">Week 2–3</div>
          </div>
        </div>

        <div class="callout" style="margin-top: 28px;">
          <strong>What would Dad do?</strong> Wayne would tell you: the house isn't going anywhere, and the seller will sell to whoever shows up prepared. Do the homework. Know the number. Treat people right. Then let the deal come to you.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> &nbsp;|&nbsp; Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;·&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential Acquisition Brief &nbsp;·&nbsp; Internal Use Only &nbsp;·&nbsp; Third-Generation Discipline
    </div>
  </footer>

</body>
</html>