<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #0a7f3f;
      --nu-warning: #b8860b;
      --nu-danger: #a8282c;
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
      margin: 0 auto 14px;
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
      font-size: 1.3rem;
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
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.02em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-cyan);
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      font-weight: 700;
      border-radius: 2px;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65vw; height: 65vw;
      max-width: 700px; max-height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
      line-height: 1.15;
    }
    .doc-title .first { color: #0033cc; }
    .doc-subtitle {
      font-size: 1.1rem;
      color: #666;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION TITLES */
    .nu-section {
      margin-top: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      letter-spacing: 0.005em;
      border-bottom: 3px solid var(--nu-cyan);
      padding-bottom: 8px;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: #1a1a1a; font-weight: 700; }

    /* PROPERTY SUMMARY CARD */
    .property-card {
      background: linear-gradient(135deg, #f8f9ff 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 30px;
      margin-top: 24px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
    }
    .property-address {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-note {
      font-size: 0.92rem;
      color: #555;
      margin-bottom: 18px;
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 16px;
      margin-top: 18px;
    }
    .stat-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      padding: 14px 16px;
    }
    .stat-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #888;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .stat-value {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .stat-value.accent { color: var(--nu-blue); }

    /* OBJECTIVE BOX */
    .objective-box {
      background: #fffdf5;
      border: 1px solid #f0e5b8;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 4px;
      margin-top: 20px;
    }
    .objective-box p {
      margin-bottom: 10px;
    }
    .objective-box p:last-child { margin-bottom: 0; }

    /* PHASES */
    .phase-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 22px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .phase-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .phase-num {
      width: 42px; height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .phase-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .phase-timeline {
      font-size: 0.78rem;
      color: #0033cc;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .phase-body ul {
      margin-left: 4px;
      padding-left: 0;
      list-style: none;
    }
    .phase-body li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
    }
    .phase-body li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 6px;
      font-size: 1.1rem;
      top: -2px;
    }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
      font-size: 0.93rem;
    }
    .val-table thead {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
    }
    .val-table th {
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .val-table th.num, .val-table td.num { text-align: right; }
    .val-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .val-table tr:last-child td { border-bottom: none; }
    .val-table tr:hover td { background: #fafbff; }
    .val-table tr.total {
      background: #f0f4ff;
      font-weight: 900;
    }
    .val-table tr.total td {
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }

    /* TWO-COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-top: 22px;
    }
    .leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 24px;
    }
    .leverage-card.ours { border-top: 4px solid var(--nu-success); }
    .leverage-card.theirs { border-top: 4px solid var(--nu-warning); }
    .leverage-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .leverage-label.ours { color: var(--nu-success); }
    .leverage-label.theirs { color: var(--nu-warning); }
    .leverage-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .leverage-card ul { list-style: none; padding: 0; }
    .leverage-card li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.92rem;
    }
    .leverage-card li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* SCRIPTS / TALKING POINTS */
    .script-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin-top: 14px;
      font-style: italic;
      border-radius: 2px;
      color: #2a2a40;
    }
    .script-block strong { font-style: normal; font-weight: 700; color: var(--nu-blue); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 22px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 18px;
      padding-left: 8px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .timeline-date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    .timeline-text {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* RISK TABLE */
    .risk-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 18px;
      font-size: 0.9rem;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
    }
    .risk-table thead {
      background: #1a1a3e;
      color: var(--nu-white);
    }
    .risk-table th {
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 700;
    }
    .risk-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .risk-table tr:last-child td { border-bottom: none; }
    .risk-table tr:hover td { background: #fafbff; }
    .severity {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .severity.high { background: #fde8e9; color: var(--nu-danger); }
    .severity.med  { background: #fff4dc; color: var(--nu-warning); }
    .severity.low  { background: #e3f4ea; color: var(--nu-success); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      margin-top: 18px;
    }
    .checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px;
      margin-bottom: 8px;
      border-radius: 4px;
      position: relative;
      padding-left: 48px;
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #0033cc 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin-top: 32px;
      text-align: center;
    }
    .callout h3 {
      font-weight: 900;
      font-size: 1.35rem;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .callout p {
      opacity: 0.95;
      font-size: 1rem;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-sep {
      color: rgba(255,255,255,0.4);
      margin: 0 8px;
    }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.55);
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-top: 14px;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .two-col { grid-template-columns: 1fr; }
      .nu-wrap { padding: 40px 22px; }
      .doc-title { font-size: 1.8rem; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; padding-left: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-header { padding: 50px 22px 70px; min-height: 230px; }
      .property-card { padding: 22px 20px; }
      .phase-card { padding: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .phase-card, .property-card, .leverage-card { box-shadow: none; page-break-inside: avoid; }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
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
    <div class="nu-doc-label">Confidential — Acquisition Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE BLOCK -->
      <div>
        <h1 class="doc-title"><span class="first">Estate</span> Acquisition — Negotiation Playbook</h1>
        <div class="doc-subtitle">4505 Buttewoods — 7,098 sq ft Primary Residence Target</div>
        <div class="doc-meta">
          <div><strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO</div>
          <div><strong>Prepared:</strong> April 24, 2026</div>
          <div><strong>Status:</strong> Pre-Offer Planning</div>
          <div><strong>Classification:</strong> Confidential</div>
        </div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Subject</span> <span class="rest">Property</span></h2>

        <div class="property-card">
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-note">7,098 sq ft estate — primary negotiation target. Confirm exact street suffix, municipality, and parcel ID from county records before submitting any written offer.</div>

          <div class="property-grid">
            <div class="stat-tile">
              <div class="stat-label">Living Area</div>
              <div class="stat-value accent">7,098 sq ft</div>
            </div>
            <div class="stat-tile">
              <div class="stat-label">Property Type</div>
              <div class="stat-value">Estate Residence</div>
            </div>
            <div class="stat-tile">
              <div class="stat-label">Owner</div>
              <div class="stat-value">Pull from Deed</div>
            </div>
            <div class="stat-tile">
              <div class="stat-label">List Price</div>
              <div class="stat-value">Confirm from MLS</div>
            </div>
            <div class="stat-tile">
              <div class="stat-label">Days on Market</div>
              <div class="stat-value">Confirm from MLS</div>
            </div>
            <div class="stat-tile">
              <div class="stat-label">Tax Assessed</div>
              <div class="stat-value">Pull from County</div>
            </div>
          </div>
        </div>

        <div class="objective-box">
          <p><strong>Objective:</strong> Secure 4505 Buttewoods at the lowest justifiable price with clean terms, a conservative inspection period, and flexibility on closing date — while preserving the ability to walk away if the valuation, inspection, or financing does not support the deal.</p>
          <p><strong>Guiding principle:</strong> Never fall in love with the house at the negotiating table. Pre-commit to a walk-away number and stick to it.</p>
        </div>
      </section>

      <!-- PHASE PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Phases</span></h2>

        <div class="phase-grid">

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">1</div>
              <div>
                <div class="phase-title">Intelligence &amp; Baseline</div>
                <div class="phase-timeline">Days 1–5 — Before First Contact</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Pull current MLS listing, full listing history, and any prior listings (same address, last 10 years).</li>
                <li>Pull county tax record: assessed value, owner of record, lien status, last sale price/date.</li>
                <li>Pull comparable sales: 3–5 closed estates within 2 miles, &gt;5,500 sq ft, last 12 months.</li>
                <li>Drive by the property at two different times of day; photograph exterior condition.</li>
                <li>Identify listing agent and brokerage. Note their typical days-to-close and price-reduction behavior.</li>
                <li>Search for motivation signals: estate sale, divorce, relocation, price reductions, expired prior listings.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">2</div>
              <div>
                <div class="phase-title">Financing &amp; Proof-of-Funds</div>
                <div class="phase-timeline">Days 3–7 — Parallel with Intel</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Call Patrick Lavette at Renasant Bank. Request pre-approval letter sized to target offer, not asking price.</li>
                <li>Decide: personal purchase, LLC, or trust. Coordinate with CPA on tax/entity implications.</li>
                <li>Line up a backup lender quote — never rely on a single institution for leverage.</li>
                <li>Prepare proof-of-funds documentation for earnest money and down payment.</li>
                <li>Confirm appraisal contingency language with lender — a high appraisal is the best renegotiation tool.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">3</div>
              <div>
                <div class="phase-title">Agent Engagement &amp; Showing</div>
                <div class="phase-timeline">Days 5–10</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Engage a buyer's agent with luxury-estate experience, or approach unrepresented (negotiate the listing side commission into the price).</li>
                <li>Schedule the first showing. Bring a second set of eyes — spouse, contractor, or trusted friend.</li>
                <li>Photograph every defect, every deferred-maintenance item. Build the repair list before you negotiate.</li>
                <li>Ask the listing agent open-ended questions: "Why are they selling?" "Have they had other offers?" "What's their ideal timeline?"</li>
                <li>Do not express emotion. Stay curious, not interested.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">4</div>
              <div>
                <div class="phase-title">Opening Offer &amp; Terms</div>
                <div class="phase-timeline">Days 10–14</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Submit written offer at 85–90% of list price — anchored to comparable-sales data, not emotion.</li>
                <li>Include 10-day inspection period, 21-day financing contingency, 30–45 day close.</li>
                <li>Request seller concessions: closing costs, home warranty, or specific repairs.</li>
                <li>Attach a concise, professional cover letter — establish credibility without disclosing urgency.</li>
                <li>Set offer expiration within 48–72 hours. Urgency favors the disciplined party.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">5</div>
              <div>
                <div class="phase-title">Counter, Inspection, &amp; Re-negotiation</div>
                <div class="phase-timeline">Days 14–30</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Expect a counter. Split the difference no faster than two rounds — slow concession signals discipline.</li>
                <li>Hire a licensed, independent inspector. Add specialty inspections: roof, HVAC, structural, septic/well if applicable, pool.</li>
                <li>Price every material defect. Present findings as a credit-request or price reduction — with documentation.</li>
                <li>If the appraisal comes in low, present the appraisal as leverage to renegotiate price, not to cancel.</li>
                <li>Re-confirm walk-away threshold before every counter. Never negotiate past it.</li>
              </ul>
            </div>
          </div>

          <div class="phase-card">
            <div class="phase-header">
              <div class="phase-num">6</div>
              <div>
                <div class="phase-title">Close &amp; Transition</div>
                <div class="phase-timeline">Days 30–60</div>
              </div>
            </div>
            <div class="phase-body">
              <ul>
                <li>Walk the property 48 hours before closing — verify all contracted repairs are complete.</li>
                <li>Confirm final HUD-1 / Closing Disclosure line items match the executed contract.</li>
                <li>Wire funds through verified bank channels only. Confirm wire instructions by phone with the title company.</li>
                <li>Take possession, change all locks, update utilities, notify insurance, file homestead (if applicable).</li>
                <li>File all transaction documents in a single permanent folder — closing statement, deed, warranty.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- VALUATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>

        <p style="margin-top:10px;">Complete each row using data pulled during Phase 1. Do not submit a written offer until every cell is populated with a verified number.</p>

        <table class="val-table">
          <thead>
            <tr>
              <th>Valuation Method</th>
              <th class="num">Per Sq Ft</th>
              <th class="num">Implied Value (7,098 sf)</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recent Comp Sales — Adjusted Avg</td>
              <td class="num">Pull from MLS</td>
              <td class="num">Calculate</td>
              <td>3–5 closed comps, same neighborhood</td>
            </tr>
            <tr>
              <td>County Tax Assessed Value</td>
              <td class="num">Calculate</td>
              <td class="num">Pull from County</td>
              <td>Property tax record</td>
            </tr>
            <tr>
              <td>Replacement Cost (Insurance)</td>
              <td class="num">$200–$275</td>
              <td class="num">Calculate</td>
              <td>Insurance replacement estimate</td>
            </tr>
            <tr>
              <td>Seller's Asking Price</td>
              <td class="num">Calculate</td>
              <td class="num">Confirm from MLS</td>
              <td>Current MLS listing</td>
            </tr>
            <tr class="total">
              <td>Target Offer Price (Opening)</td>
              <td class="num">—</td>
              <td class="num">85–90% of List</td>
              <td>Data-anchored, not sentiment</td>
            </tr>
            <tr class="total">
              <td>Walk-Away Ceiling</td>
              <td class="num">—</td>
              <td class="num">Set Before First Offer</td>
              <td>Hard limit — do not exceed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Map</span></h2>

        <div class="two-col">
          <div class="leverage-card ours">
            <div class="leverage-label ours">Our Leverage</div>
            <h4>Strengths We Bring to the Table</h4>
            <ul>
              <li>Pre-approved financing with established banking relationship (Patrick Lavette, Renasant).</li>
              <li>No home-to-sell contingency — positions us as a clean buyer.</li>
              <li>Willingness to walk. The best negotiator always has the option to leave.</li>
              <li>Business-owner credibility, documented income history, CPA on standby.</li>
              <li>Flexibility on closing timeline — can accommodate seller needs where it costs us nothing.</li>
              <li>Ability to move quickly on earnest money and inspection scheduling.</li>
            </ul>
          </div>

          <div class="leverage-card theirs">
            <div class="leverage-label theirs">Their Leverage (Assume Until Disproven)</div>
            <h4>What the Seller May Have</h4>
            <ul>
              <li>Another offer already on the table (ask; verify through agent disclosure).</li>
              <li>No urgency — owner could sit for 12+ months if financially comfortable.</li>
              <li>Emotional attachment may inflate their perceived floor price.</li>
              <li>Listing agent pushing for list price to protect commission.</li>
              <li>Unique features that limit direct comparables.</li>
              <li>Strong local market supporting current asking price.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Talking</span> <span class="rest">Points &amp; Scripts</span></h2>

        <p style="margin-top:10px;"><strong>Opening call to the listing agent:</strong></p>
        <div class="script-block">
          <strong>Aaron:</strong> "Good morning — I'm looking at 4505 Buttewoods. I'd like to understand a little about the seller before I put anything on paper. Can you walk me through why they're selling and what their ideal timeline looks like?"
        </div>

        <p style="margin-top:18px;"><strong>Framing the offer price:</strong></p>
        <div class="script-block">
          <strong>Aaron:</strong> "Our number is based on three recent comparable sales in the neighborhood and on the inspection items we've already identified from the showing. I'd rather give you a number we can actually close at than a number that has to fall apart in appraisal."
        </div>

        <p style="margin-top:18px;"><strong>Responding to a counter:</strong></p>
        <div class="script-block">
          <strong>Aaron:</strong> "I appreciate the counter. I want to be direct — we're near the top of what the comps support. Let me look at the numbers tonight and come back to you tomorrow. If there's flexibility on the closing date or the repair credit, that helps us move."
        </div>

        <p style="margin-top:18px;"><strong>After inspection findings:</strong></p>
        <div class="script-block">
          <strong>Aaron:</strong> "The inspection turned up more than we expected. I have contractor estimates for the items that matter. I'm sending over the full report and a revised price that reflects what it'll actually cost to put this house in the condition we were expecting."
        </div>

        <p style="margin-top:18px;"><strong>Walking away (leave the door open):</strong></p>
        <div class="script-block">
          <strong>Aaron:</strong> "I've enjoyed the conversation and I respect where the seller is. The numbers just aren't there for us at this price. If anything changes on their side in the next thirty days, I'd welcome the call."
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Week 1</div>
            <div class="timeline-text">Pull MLS, tax records, deed history. Drive by property. Engage Patrick Lavette for pre-approval. Confirm acquisition entity with CPA.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 2</div>
            <div class="timeline-text">Schedule first showing. Complete comparable-sales analysis. Finalize target offer and walk-away ceiling. Prepare written offer package.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Week 3</div>
            <div class="timeline-text">Submit opening offer. Handle counters. Execute purchase agreement. Wire earnest money. Open escrow at title company.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Weeks 4–5</div>
            <div class="timeline-text">Complete inspection and specialty inspections. Review findings with contractor. Renegotiate on material defects. Order appraisal.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Weeks 6–8</div>
            <div class="timeline-text">Close financing contingency. Complete final walkthrough. Fund at closing. Take possession, change locks, update insurance and utilities.</div>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Matrix</span></h2>

        <table class="risk-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Severity</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bidding war drives price above walk-away ceiling</td>
              <td><span class="severity high">High</span></td>
              <td>Set and honor the ceiling in writing before the first offer. Do not revisit under pressure.</td>
            </tr>
            <tr>
              <td>Appraisal comes in below contract price</td>
              <td><span class="severity med">Medium</span></td>
              <td>Maintain appraisal contingency. Use the gap to renegotiate or walk, not to add cash.</td>
            </tr>
            <tr>
              <td>Inspection surfaces structural, roof, or foundation issues</td>
              <td><span class="severity high">High</span></td>
              <td>Keep inspection period ≥10 days. Get contractor bids, not agent estimates, for every defect.</td>
            </tr>
            <tr>
              <td>Seller demands short close / all-cash terms we cannot match</td>
              <td><span class="severity med">Medium</span></td>
              <td>Offer lender-verified fast-close timeline. Walk if terms cannot be met without overpaying.</td>
            </tr>
            <tr>
              <td>Title defect, lien, or easement discovery</td>
              <td><span class="severity med">Medium</span></td>
              <td>Insist on extended title search and owner's title insurance. Resolve before funding.</td>
            </tr>
            <tr>
              <td>HOA or deed restriction limiting future use</td>
              <td><span class="severity low">Low</span></td>
              <td>Request HOA documents and covenants during inspection period. Review with attorney.</td>
            </tr>
            <tr>
              <td>Market shift during escrow</td>
              <td><span class="severity low">Low</span></td>
              <td>Shorter escrow reduces exposure. Lock rate early. Maintain financing contingency.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PRE-OFFER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
        <ul class="checklist">
          <li>MLS listing history pulled and filed</li>
          <li>County tax record and deed history pulled</li>
          <li>Three to five comparable-sales pulled and adjusted</li>
          <li>Drive-by completed and exterior photographed</li>
          <li>Pre-approval letter from Renasant in hand, sized to offer price</li>
          <li>Acquisition entity decided (personal, LLC, or trust) with CPA sign-off</li>
          <li>Backup lender quote obtained</li>
          <li>Buyer's agent engaged — or unrepresented strategy confirmed</li>
          <li>First showing scheduled</li>
          <li>Target offer price and walk-away ceiling documented and signed</li>
          <li>Written offer package prepared: offer form, pre-approval, proof-of-funds, cover letter</li>
          <li>Title company and closing attorney identified</li>
        </ul>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>Discipline Wins Real Estate Negotiations</h3>
        <p>Pull every number. Verify every assumption. Set the ceiling before the first offer. Never negotiate against the walk-away.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      <span class="nu-footer-sep">|</span>
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      <span class="nu-footer-sep">|</span>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential acquisition strategy — prepared April 24, 2026 — for internal use by Norris Utilities®, LLC only.
    </div>
  </footer>

</body>
</html>