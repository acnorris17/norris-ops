<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-success: #1B7F3A;
      --nu-warning: #C8771A;
      --nu-danger: #B8322A;
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
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 24px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
      background: var(--nu-light-gray);
      padding: 50px 40px 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE BLOCK */
    .nu-title-block {
      text-align: center;
      margin-bottom: 40px;
    }
    .nu-title-block h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-title-block h1 .accent { color: var(--nu-blue); }
    .nu-title-block .subtitle {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      max-width: 760px;
      margin: 0 auto;
    }
    .nu-meta-row {
      display: flex;
      justify-content: center;
      gap: 18px;
      flex-wrap: wrap;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #555;
    }
    .nu-meta-pill {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 6px 14px;
      border-radius: 16px;
      font-weight: 700;
    }
    .nu-meta-pill strong { color: var(--nu-blue); }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 50px 0 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      width: 80px;
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* SUMMARY GRID */
    .nu-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-bottom: 10px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-stat-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-stat-card .value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .nu-stat-card .sub {
      font-size: 0.82rem;
      color: #777;
      margin-top: 4px;
    }
    .nu-stat-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-stat-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-stat-card.navy { border-left-color: var(--nu-navy); }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* TWO-COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 768px) { .nu-two-col { grid-template-columns: 1fr; } }

    /* PROPERTY DETAILS TABLE */
    .nu-table {
      width: 100%;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-collapse: collapse;
    }
    .nu-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: #fafafd; }
    .nu-table td.label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 35%;
    }

    /* NEGOTIATION BANDS */
    .nu-band-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 14px;
    }
    @media (max-width: 768px) { .nu-band-row { grid-template-columns: 1fr 1fr; } }
    .nu-band {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 18px 16px;
      text-align: center;
      border-top: 5px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-band.opening { border-top-color: var(--nu-success); }
    .nu-band.target { border-top-color: var(--nu-blue); background: linear-gradient(180deg, #f0f3ff 0%, var(--nu-white) 60%); }
    .nu-band.walk { border-top-color: var(--nu-warning); }
    .nu-band.ask { border-top-color: #999; }
    .nu-band .band-label {
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-band .band-amount {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-band .band-note {
      font-size: 0.78rem;
      color: #666;
      margin-top: 6px;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 8px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 7px; top: 4px; bottom: 4px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .nu-timeline-item {
      position: relative;
      margin-bottom: 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 14px 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -25px; top: 18px;
      width: 13px; height: 13px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-item .day {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-item .title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-item .desc {
      font-size: 0.92rem;
      color: #555;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* LEVERAGE LIST */
    .nu-leverage-list {
      list-style: none;
      padding: 0;
    }
    .nu-leverage-list li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-leverage-list li:last-child { border-bottom: none; }
    .nu-leverage-list li::before {
      content: '◆';
      position: absolute;
      left: 8px; top: 11px;
      color: var(--nu-cyan);
      font-size: 1rem;
    }
    .nu-leverage-list li strong { color: var(--nu-blue); display: block; margin-bottom: 2px; }

    /* CONTINGENCIES */
    .nu-contingency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .nu-contingency {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 18px;
      border-radius: 6px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .nu-contingency .ctype {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-contingency .cdesc {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .nu-contingency .cnote {
      font-size: 0.85rem;
      color: #555;
    }

    /* RISK MATRIX */
    .nu-risk-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-risk-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      font-size: 0.74rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: left;
    }
    .nu-risk-table td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .nu-risk-table tr:nth-child(even) td { background: #fafafd; }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-pill.high { background: #fdecea; color: var(--nu-danger); }
    .nu-pill.med { background: #fff5e6; color: var(--nu-warning); }
    .nu-pill.low { background: #e7f6ec; color: var(--nu-success); }

    /* DECISION CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-top: 30px;
      box-shadow: 0 6px 22px rgba(0,30,180,0.18);
    }
    .nu-callout h3 {
      font-weight: 900;
      font-size: 1.2rem;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-callout p { color: rgba(255,255,255,0.92); }
    .nu-callout .sigline {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,0.25);
      font-size: 0.85rem;
      color: var(--nu-cyan);
      font-style: italic;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 38px 30px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 36px 20px 50px; }
      .nu-title-block h1 { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; margin-top: 38px; }
      .nu-card, .nu-callout { padding: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-stat-card, .nu-band, .nu-timeline-item { box-shadow: none; }
      .nu-callout { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Acquisition Strategy Brief</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1><span class="accent">4505 Buttewoods</span> Estate Acquisition</h1>
        <p class="subtitle">Negotiation strategy for the purchase of a 7,098 sq ft estate property — including target pricing, leverage points, contingency framework, and timeline to executed contract.</p>
        <div class="nu-meta-row">
          <span class="nu-meta-pill">Property: <strong>4505 Buttewoods</strong></span>
          <span class="nu-meta-pill">Size: <strong>7,098 sq ft</strong></span>
          <span class="nu-meta-pill">Status: <strong>Active Negotiation</strong></span>
          <span class="nu-meta-pill">Prepared: <strong>April 21, 2026</strong></span>
        </div>
      </div>

      <!-- SUMMARY STATS -->
      <h2 class="nu-section-title"><span class="first">Deal</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-summary-grid">
        <div class="nu-stat-card">
          <div class="label">Property Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="sub">Single-family estate</div>
        </div>
        <div class="nu-stat-card cyan">
          <div class="label">Heated Square Feet</div>
          <div class="value">7,098 sq ft</div>
          <div class="sub">Per listing measurement</div>
        </div>
        <div class="nu-stat-card gold">
          <div class="label">Strategy Posture</div>
          <div class="value">Disciplined Buyer</div>
          <div class="sub">Walk-away authority intact</div>
        </div>
        <div class="nu-stat-card navy">
          <div class="label">Decision Owner</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">No verbal commitments without sign-off</div>
        </div>
      </div>

      <!-- PROPERTY PROFILE -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Profile &amp; Diligence Inputs</span></h2>
      <div class="nu-section-rule"></div>
      <table class="nu-table">
        <thead>
          <tr><th>Field</th><th>Value / Action Required</th></tr>
        </thead>
        <tbody>
          <tr><td class="label">Address</td><td>4505 Buttewoods</td></tr>
          <tr><td class="label">Heated Area</td><td>7,098 sq ft</td></tr>
          <tr><td class="label">Property Type</td><td>Single-family residential estate</td></tr>
          <tr><td class="label">Listing Price</td><td>Pull from MLS / listing agent before first written offer</td></tr>
          <tr><td class="label">Days on Market</td><td>Confirm DOM and any prior price reductions before opening offer</td></tr>
          <tr><td class="label">Seller Motivation</td><td>Identify reason for sale (relocation, estate, downsize, divorce) — drives leverage</td></tr>
          <tr><td class="label">Title History</td><td>Pull deed chain and any liens before contract execution</td></tr>
          <tr><td class="label">Tax Assessment</td><td>Verify county appraised value and current tax bill</td></tr>
          <tr><td class="label">Inspection Status</td><td>Schedule full inspection within option period</td></tr>
          <tr><td class="label">Financing Posture</td><td>Pre-approval letter in hand before submitting offer (or proof of funds if cash)</td></tr>
        </tbody>
      </table>

      <!-- NEGOTIATION BANDS -->
      <h2 class="nu-section-title"><span class="first">Price</span> <span class="rest">Bands &amp; Negotiation Discipline</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-card">
        <p>Set four numbers <strong>before</strong> the first conversation with the listing agent. Negotiate from numbers, not feelings. Each band must be calculated against confirmed comparable sales (recent closings within ½ mile, similar square footage, condition adjusted) — not the listing price.</p>
        <div class="nu-band-row">
          <div class="nu-band ask">
            <div class="band-label">Seller Ask</div>
            <div class="band-amount">$ ___</div>
            <div class="band-note">Confirm from MLS</div>
          </div>
          <div class="nu-band opening">
            <div class="band-label">Opening Offer</div>
            <div class="band-amount">$ ___</div>
            <div class="band-note">Defensible by comps</div>
          </div>
          <div class="nu-band target">
            <div class="band-label">Target Strike</div>
            <div class="band-amount">$ ___</div>
            <div class="band-note">Goal close price</div>
          </div>
          <div class="nu-band walk">
            <div class="band-label">Walk-Away</div>
            <div class="band-amount">$ ___</div>
            <div class="band-note">Hard ceiling — no exceptions</div>
          </div>
        </div>
        <p style="margin-top: 18px; font-size: 0.92rem; color: #555;"><strong>Rule:</strong> Aaron sets the four numbers in writing before any verbal exchange. The walk-away is locked. If the seller will not meet the target strike within terms, the deal is dead — move on.</p>
      </div>

      <!-- LEVERAGE -->
      <h2 class="nu-section-title"><span class="first">Buyer-Side</span> <span class="rest">Leverage Points</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-card">
        <ul class="nu-leverage-list">
          <li>
            <strong>Speed to close.</strong>
            Estates of this size often sit. A clean 21–30 day close with strong earnest money is worth real basis points to a motivated seller.
          </li>
          <li>
            <strong>Financing certainty.</strong>
            Lender pre-approval (or proof of funds) attached to the offer beats higher offers from buyers without one. Hard documentation removes seller risk.
          </li>
          <li>
            <strong>Limited contingencies.</strong>
            Tighten inspection window. Waive non-essential contingencies. Keep title and financing protection — drop everything else.
          </li>
          <li>
            <strong>Days-on-market pressure.</strong>
            If DOM exceeds 60 days or there have been price reductions, opening offer should reflect that softness. Cite the data in the offer cover letter.
          </li>
          <li>
            <strong>Repair credit posture.</strong>
            Use the inspection report — not the asking price — to negotiate the second round. Itemized repair credits read as objective, not adversarial.
          </li>
          <li>
            <strong>Cash or near-cash leverage.</strong>
            If financing is competitive but slow, structure the offer to highlight earnest money size and short close — not just price.
          </li>
        </ul>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="day">Day 0 — Today</div>
          <div class="title">Lock the four numbers</div>
          <div class="desc">Pull comps, confirm DOM, set ask / opening / target / walk-away in writing. No conversations until this is done.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 1–2</div>
          <div class="title">Quiet diligence</div>
          <div class="desc">Title chain, tax record, plat, any HOA documents, recent comparable closings within ½ mile. No tipping the listing agent.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 3</div>
          <div class="title">First showing &amp; agent conversation</div>
          <div class="desc">Walk the property. Listen for seller motivation. Take photos of any condition issues that will support price negotiation later.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 4–5</div>
          <div class="title">Submit written opening offer</div>
          <div class="desc">Pre-approval letter attached. Earnest money sized to signal seriousness. Short option period. Cover letter is short, professional, no emotion.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 6–10</div>
          <div class="title">Counter rounds</div>
          <div class="desc">Move in disciplined increments toward the target strike. Never cross the walk-away. Silence is a tool.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 11–14</div>
          <div class="title">Contract executed → Inspection</div>
          <div class="desc">Full inspection within option period. Use findings for repair-credit round if warranted.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="day">Day 15–30</div>
          <div class="title">Financing, appraisal, title, close</div>
          <div class="desc">Lender milestones tracked weekly. Title clearance confirmed before closing date is finalized. Walk-through 24 hours before close.</div>
        </div>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-two-col">
        <div class="nu-card">
          <h3>Pre-Offer</h3>
          <ul class="nu-checklist">
            <li><strong>Comparable sales</strong> — 3 to 5 recent closings within ½ mile, similar square footage</li>
            <li><strong>Days on market</strong> &amp; full price-reduction history</li>
            <li><strong>Tax assessment</strong> &amp; current annual tax bill</li>
            <li><strong>HOA / covenants</strong> — pull governing documents and dues</li>
            <li><strong>Lender pre-approval</strong> letter or proof of funds in hand</li>
            <li><strong>Insurance quote</strong> — confirm property is insurable at expected rate</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Under Contract</h3>
          <ul class="nu-checklist">
            <li><strong>General home inspection</strong> within option period</li>
            <li><strong>Termite / pest</strong> inspection</li>
            <li><strong>Septic / well</strong> if applicable</li>
            <li><strong>Survey</strong> — confirm boundaries, easements, encroachments</li>
            <li><strong>Title commitment</strong> reviewed for liens, easements, exceptions</li>
            <li><strong>Appraisal</strong> ordered through lender; review before closing</li>
            <li><strong>Final walk-through</strong> within 24 hours of closing</li>
          </ul>
        </div>
      </div>

      <!-- CONTINGENCIES -->
      <h2 class="nu-section-title"><span class="first">Contingencies</span> <span class="rest">to Hold</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-contingency-grid">
        <div class="nu-contingency">
          <div class="ctype">Inspection</div>
          <div class="cdesc">Hold a tight option period</div>
          <div class="cnote">Long enough to inspect properly, short enough to signal certainty.</div>
        </div>
        <div class="nu-contingency">
          <div class="ctype">Financing</div>
          <div class="cdesc">Standard loan contingency</div>
          <div class="cnote">Drop only if structuring as cash. Lender letter attached to offer.</div>
        </div>
        <div class="nu-contingency">
          <div class="ctype">Appraisal</div>
          <div class="cdesc">Appraisal-gap clause (capped)</div>
          <div class="cnote">If competitive, cap exposure above appraised value at a defined dollar amount — never open-ended.</div>
        </div>
        <div class="nu-contingency">
          <div class="ctype">Title</div>
          <div class="cdesc">Clear marketable title</div>
          <div class="cnote">Non-negotiable. Any liens, easements, or boundary issues must be cured before closing.</div>
        </div>
        <div class="nu-contingency">
          <div class="ctype">Survey</div>
          <div class="cdesc">New or recertified survey</div>
          <div class="cnote">Required on a 7,098 sq ft estate — boundaries and improvements must be confirmed.</div>
        </div>
        <div class="nu-contingency">
          <div class="ctype">Repair Credit</div>
          <div class="cdesc">Itemized after inspection</div>
          <div class="cnote">Negotiate as a price reduction or seller credit at close — not as seller-performed work.</div>
        </div>
      </div>

      <!-- RISK MATRIX -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Matrix</span></h2>
      <div class="nu-section-rule"></div>
      <table class="nu-risk-table">
        <thead>
          <tr>
            <th style="width: 26%;">Risk</th>
            <th style="width: 14%;">Severity</th>
            <th>Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Overpaying vs. comps</strong></td>
            <td><span class="nu-pill high">High</span></td>
            <td>Walk-away number is locked before negotiations open. Comps drive the band, not seller's ask.</td>
          </tr>
          <tr>
            <td><strong>Hidden defects</strong></td>
            <td><span class="nu-pill med">Medium</span></td>
            <td>Full inspection within option period; itemized repair credit round before final commitment.</td>
          </tr>
          <tr>
            <td><strong>Title or easement issues</strong></td>
            <td><span class="nu-pill med">Medium</span></td>
            <td>Title commitment reviewed early; survey ordered on contract execution.</td>
          </tr>
          <tr>
            <td><strong>Appraisal shortfall</strong></td>
            <td><span class="nu-pill med">Medium</span></td>
            <td>Capped appraisal-gap clause; renegotiate or walk if gap exceeds cap.</td>
          </tr>
          <tr>
            <td><strong>Competing offers escalate price</strong></td>
            <td><span class="nu-pill med">Medium</span></td>
            <td>Lead with terms (close speed, earnest money, financing certainty), not just price.</td>
          </tr>
          <tr>
            <td><strong>Seller pulls listing</strong></td>
            <td><span class="nu-pill low">Low</span></td>
            <td>Maintain professional posture; stay reachable through listing agent for 30+ days.</td>
          </tr>
          <tr>
            <td><strong>Financing delay</strong></td>
            <td><span class="nu-pill low">Low</span></td>
            <td>Pre-approval secured before offer; weekly milestone check-ins with lender.</td>
          </tr>
        </tbody>
      </table>

      <!-- COUNTER PLAYBOOK -->
      <h2 class="nu-section-title"><span class="first">Counter-Offer</span> <span class="rest">Playbook</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-two-col">
        <div class="nu-card">
          <h3>If seller counters near ask</h3>
          <p>Hold position. Re-cite comps in writing. Move in small increments toward target — never jump. Silence between rounds is acceptable; in fact, useful.</p>
          <p><strong>Move only on:</strong> documented seller concession, new market data, or genuine repair-credit basis from inspection.</p>
        </div>
        <div class="nu-card">
          <h3>If seller counters near target</h3>
          <p>Close the gap on terms (close date, earnest money, contingencies dropped) before giving more on price. Terms cost less than dollars.</p>
          <p><strong>Goal:</strong> reach written agreement at or below target strike with inspection and title contingencies intact.</p>
        </div>
        <div class="nu-card">
          <h3>If seller counters above walk-away</h3>
          <p>One clear, professional response: thank them, restate the offer, set a 24–48 hour expiration. Do not chase.</p>
          <p><strong>Then walk.</strong> The walk-away exists for exactly this moment. Move on to the next opportunity without re-litigating.</p>
        </div>
        <div class="nu-card">
          <h3>If silence from the seller</h3>
          <p>Hold the line. Do not raise the offer to break silence. Reach out once at the 72-hour mark, professional and brief, then wait.</p>
          <p><strong>Discipline:</strong> the offer is the offer. Re-bidding against yourself is the most common buyer mistake.</p>
        </div>
      </div>

      <!-- DECISION CALLOUT -->
      <div class="nu-callout">
        <h3>Decision Required Before Going Live</h3>
        <p>Before contacting the listing agent or submitting a written offer on 4505 Buttewoods, Aaron must lock the four price bands (ask, opening, target, walk-away) in writing, confirm financing posture (pre-approval letter or proof of funds), and approve the contingency package above. No verbal commitments, no offer letters, no agent conversations until this brief is signed off.</p>
        <div class="sigline">Prepared for review — Aaron C. Norris, Founder &amp; CEO, Norris Utilities®</div>
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
  </footer>

</body>
</html>