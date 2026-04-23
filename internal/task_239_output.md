<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success-green: #1a7a3e;
      --nu-warning-amber: #b7791f;
      --nu-danger-red: #9b2c2c;
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
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 26px;
      padding: 8px 22px;
      border: 1.5px solid rgba(255,255,255,0.6);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border-radius: 2px;
      background: rgba(0,0,0,0.15);
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 0 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* ══ TITLE BLOCK ══ */
    .doc-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 36px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-kicker {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 300;
      max-width: 780px;
      margin: 0 auto;
    }
    .doc-meta-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
      margin-top: 22px;
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta-row span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
      display: inline-block;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ HERO STATS ══ */
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 44px;
    }
    .stat-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, #fafbff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 22px 20px;
      border-radius: 6px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .stat-value {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .stat-value .unit {
      font-size: 0.9rem;
      font-weight: 400;
      color: #888;
    }
    .stat-sub {
      font-size: 0.78rem;
      color: #666;
    }

    /* ══ PROPERTY SUMMARY BLOCK ══ */
    .property-summary {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 4px;
      margin-bottom: 36px;
    }
    .property-summary p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .property-summary p + p { margin-top: 12px; }
    .property-summary strong { color: var(--nu-blue); }

    /* ══ TWO-COLUMN LAYOUT ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 36px;
    }
    @media (max-width: 820px) { .two-col { grid-template-columns: 1fr; } }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .card-header {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .card-body p { margin-bottom: 12px; font-size: 0.95rem; }
    .card-body p:last-child { margin-bottom: 0; }

    /* ══ DATA LIST ══ */
    .data-list { list-style: none; }
    .data-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .data-list li:last-child { border-bottom: none; }
    .data-list .label {
      color: #555;
      font-weight: 400;
    }
    .data-list .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -31px;
      top: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-item.active::before {
      background: var(--nu-cyan);
      border-color: var(--nu-blue);
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-desc {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.55;
    }

    /* ══ CHECKLIST ══ */
    .checklist { list-style: none; }
    .checklist li {
      position: relative;
      padding: 12px 0 12px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 2px;
    }
    .checklist li span {
      color: #666;
      font-size: 0.87rem;
    }

    /* ══ NEGOTIATION TABLE ══ */
    .neg-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      font-size: 0.92rem;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .neg-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .neg-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .neg-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .neg-table tr:last-child td { border-bottom: none; }
    .neg-table tr:nth-child(even) td { background: #fafbff; }
    .neg-table .num { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }
    .neg-table .positive { color: var(--nu-success-green); font-weight: 700; }
    .neg-table .negative { color: var(--nu-danger-red); font-weight: 700; }

    /* ══ BADGES ══ */
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .badge-blue { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .badge-green { background: rgba(26,122,62,0.12); color: var(--nu-success-green); }
    .badge-amber { background: rgba(183,121,31,0.12); color: var(--nu-warning-amber); }
    .badge-red { background: rgba(155,44,44,0.12); color: var(--nu-danger-red); }

    /* ══ LEVERAGE BLOCK ══ */
    .leverage-block {
      background: linear-gradient(135deg, #fff9e6 0%, #fef5d4 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .leverage-title {
      font-weight: 900;
      color: var(--nu-warning-amber);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
    }
    .leverage-block p { font-size: 0.95rem; color: #554a2a; }

    /* ══ SCRIPT / TALK TRACK ══ */
    .script-block {
      background: var(--nu-navy);
      color: rgba(255,255,255,0.92);
      padding: 26px 30px;
      border-radius: 6px;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.02rem;
      line-height: 1.75;
      position: relative;
      margin-bottom: 18px;
    }
    .script-block::before {
      content: '\201C';
      position: absolute;
      top: -6px;
      left: 14px;
      font-size: 5rem;
      color: var(--nu-cyan);
      font-family: Georgia, serif;
      line-height: 1;
      opacity: 0.7;
    }
    .script-block p { padding-left: 32px; }
    .script-block p + p { margin-top: 14px; }
    .script-attrib {
      display: block;
      margin-top: 14px;
      padding-left: 32px;
      font-family: var(--font-primary);
      font-style: normal;
      font-size: 0.78rem;
      color: var(--nu-cyan);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #e6f7ff 0%, #d1edff 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 4px;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.88rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* ══ SIGN-OFF BLOCK ══ */
    .signoff {
      background: linear-gradient(135deg, #f4f7ff 0%, #e9efff 100%);
      padding: 32px 36px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      margin-top: 48px;
    }
    .signoff h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.2rem;
      margin-bottom: 14px;
    }
    .signoff p { font-size: 0.95rem; line-height: 1.7; margin-bottom: 10px; }
    .signoff .sig {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(0,0,255,0.15);
      font-size: 0.9rem;
    }
    .signoff .sig strong { color: var(--nu-dark-text); font-weight: 900; display: block; font-size: 1rem; margin-bottom: 2px; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 70%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.6;
    }
    .nu-footer-fine {
      font-size: 0.76rem;
      color: rgba(255,255,255,0.55);
      margin-top: 18px;
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 0 22px; }
      .doc-title { font-size: 1.8rem; }
      .property-summary, .nu-card, .signoff, .leverage-block { padding: 20px; }
      .script-block { padding: 22px; }
      .script-block p, .script-attrib { padding-left: 24px; }
      .neg-table { font-size: 0.85rem; }
      .neg-table th, .neg-table td { padding: 10px 12px; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .stat-card { box-shadow: none; break-inside: avoid; }
      .nu-section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Executive Acquisition Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-kicker">Real Estate Acquisition · Private &amp; Confidential</div>
        <h1 class="doc-title">Negotiation Brief — <span class="accent">4505 Buttewoods Estate</span></h1>
        <p class="doc-subtitle">7,098 sq ft residential estate — strategic approach, price discovery, and counter-offer framework for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.</p>
        <div class="doc-meta-row">
          <span><strong>Prepared:</strong> 2026-04-22</span>
          <span><strong>Principal:</strong> Aaron C. Norris</span>
          <span><strong>Source:</strong> reMarkable action item</span>
          <span><strong>Status:</strong> <span class="badge badge-amber">Negotiation Prep</span></span>
        </div>
      </div>

      <!-- HERO STATS -->
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Living Area</div>
          <div class="stat-value">7,098 <span class="unit">sq ft</span></div>
          <div class="stat-sub">Interior finished area</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Address</div>
          <div class="stat-value" style="font-size:1.1rem;">4505 Buttewoods</div>
          <div class="stat-sub">Subject property</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Classification</div>
          <div class="stat-value" style="font-size:1.1rem;">Estate</div>
          <div class="stat-sub">Residential — luxury tier</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Action Owner</div>
          <div class="stat-value" style="font-size:1.1rem;">A. Norris</div>
          <div class="stat-sub">Direct negotiation</div>
        </div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <div class="property-summary">
        <p><strong>Objective.</strong> Secure acquisition of the 7,098 sq ft estate at 4505 Buttewoods at a defensible price with clean terms — minimizing overpay risk, protecting cash runway, and structuring close timing that does not compete with Norris Utilities® working capital commitments.</p>
        <p><strong>Approach.</strong> Direct, disciplined, relationship-first. The goal is not to win a bidding war; the goal is to earn the deal on merit, with a cash-strong, contingency-light offer that solves the seller's problem and reflects a fair market read — anchored by comparable sales, condition credits, and a clear walk-away line.</p>
      </div>

      <!-- SECTION: PROPERTY DOSSIER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Dossier</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <div class="card-header">Subject Data</div>
            <ul class="data-list">
              <li><span class="label">Street Address</span><span class="value">4505 Buttewoods</span></li>
              <li><span class="label">Interior Sq Ft</span><span class="value">7,098</span></li>
              <li><span class="label">Property Type</span><span class="value">Single-Family Estate</span></li>
              <li><span class="label">Occupancy</span><span class="value">To be verified on tour</span></li>
              <li><span class="label">Listing Channel</span><span class="value">To be confirmed</span></li>
              <li><span class="label">Days on Market</span><span class="value">Pending confirmation</span></li>
              <li><span class="label">Seller Motivation</span><span class="value">Unknown — discovery required</span></li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="card-header">Discovery Items to Confirm</div>
            <ul class="data-list">
              <li><span class="label">Lot size / acreage</span><span class="value">Confirm</span></li>
              <li><span class="label">Year built / renovations</span><span class="value">Confirm</span></li>
              <li><span class="label">Bedrooms / bathrooms</span><span class="value">Confirm</span></li>
              <li><span class="label">HVAC age / roof age</span><span class="value">Confirm</span></li>
              <li><span class="label">Annual property taxes</span><span class="value">Confirm</span></li>
              <li><span class="label">HOA / covenants</span><span class="value">Confirm</span></li>
              <li><span class="label">Title / liens / easements</span><span class="value">Confirm</span></li>
            </ul>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Confidentiality Note</div>
          <p>Dollar figures are deliberately not prefilled in this brief. Final list price, appraised value, and offer numbers are populated during price discovery and comp pull — not guessed. Placeholders are avoided per Norris Utilities® documentation standards.</p>
        </div>
      </section>

      <!-- SECTION: VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Valuation <span>Framework</span></h2>
        <p style="margin-bottom: 20px;">Price is triangulated from three independent anchors. The offer is built off the <em>lower of the three</em>, adjusted up only when one anchor clearly dominates on merit.</p>

        <table class="neg-table">
          <thead>
            <tr>
              <th style="width: 30%;">Anchor</th>
              <th style="width: 40%;">Method</th>
              <th>What It Tells Us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">1. Comparable Sales</td>
              <td>Pull 3–5 closed sales within 1 mile, 6 months, 5,500–8,500 sq ft. Adjust for condition, lot, and upgrades.</td>
              <td>Market-clearing price per sq ft on actual transactions — the strongest anchor.</td>
            </tr>
            <tr>
              <td class="num">2. Replacement Cost</td>
              <td>Land value + depreciated cost to rebuild the improvements at current construction cost.</td>
              <td>Floor value. If list price is below this, the deal is structurally strong.</td>
            </tr>
            <tr>
              <td class="num">3. Income / Use Value</td>
              <td>If held, rental comp. If owner-occupied, opportunity cost vs. alternative deployment of the same capital.</td>
              <td>Sanity check against Norris Utilities® capital deployment alternatives.</td>
            </tr>
          </tbody>
        </table>

        <div class="leverage-block">
          <div class="leverage-title">Discipline Rule</div>
          <p>The opening offer lands at the lower boundary of the comp range, not the midpoint. A disciplined opener preserves room to concede and signals that the buyer has done the work — which, in practice, flushes out a motivated seller faster than a close-to-ask offer ever does.</p>
        </div>
      </section>

      <!-- SECTION: NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>

        <div class="two-col">
          <div class="nu-card">
            <div class="card-header">Leverage — What Works For Us</div>
            <ul class="data-list">
              <li><span class="label">Cash / strong financing</span><span class="value"><span class="badge badge-green">Strong</span></span></li>
              <li><span class="label">Flexible close timing</span><span class="value"><span class="badge badge-green">Strong</span></span></li>
              <li><span class="label">Shortened contingency window</span><span class="value"><span class="badge badge-green">Strong</span></span></li>
              <li><span class="label">Clean inspection posture</span><span class="value"><span class="badge badge-blue">Neutral</span></span></li>
              <li><span class="label">Aaron's direct principal involvement</span><span class="value"><span class="badge badge-green">Strong</span></span></li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="card-header">Pressure — What Works Against Us</div>
            <ul class="data-list">
              <li><span class="label">Limited comparable inventory</span><span class="value"><span class="badge badge-amber">Watch</span></span></li>
              <li><span class="label">Seller sentiment / anchoring high</span><span class="value"><span class="badge badge-amber">Watch</span></span></li>
              <li><span class="label">Unknown deferred maintenance</span><span class="value"><span class="badge badge-red">Risk</span></span></li>
              <li><span class="label">Competing capital priorities at NU</span><span class="value"><span class="badge badge-amber">Watch</span></span></li>
              <li><span class="label">Timing pressure from Aaron's side</span><span class="value"><span class="badge badge-red">Risk</span></span></li>
            </ul>
          </div>
        </div>

        <div class="leverage-block">
          <div class="leverage-title">Core Principle</div>
          <p>Never negotiate against a number you haven't validated. If the seller anchors on list, the response is not a counter — the response is, "Help me understand how you arrived at that number," followed by a quiet walk-through of the comp set. Data wins the room; emotion loses it.</p>
        </div>
      </section>

      <!-- SECTION: OFFER STRUCTURE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Structure</span></h2>
        <p style="margin-bottom: 20px;">A clean offer beats a clever offer. The structure below prioritizes certainty of close — which is what sells a seller at this tier — while preserving Norris Utilities®-style protection on the back end.</p>

        <table class="neg-table">
          <thead>
            <tr>
              <th style="width: 26%;">Term</th>
              <th style="width: 38%;">Position</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">Price</td>
              <td>Open at lower bound of validated comp range</td>
              <td>Leaves room to move, signals buyer is informed, protects from overpay.</td>
            </tr>
            <tr>
              <td class="num">Earnest Money</td>
              <td>Strong earnest deposit, held in reputable escrow</td>
              <td>Offsets a lower headline price by demonstrating commitment.</td>
            </tr>
            <tr>
              <td class="num">Financing Contingency</td>
              <td>Pre-qualified or cash; shortened timeline</td>
              <td>Certainty of close is the single most valuable concession a buyer can make.</td>
            </tr>
            <tr>
              <td class="num">Inspection</td>
              <td>Keep inspection contingency — non-negotiable</td>
              <td>Never waive inspection on a 7,098 sq ft estate. Age, systems, and hidden defects justify the window.</td>
            </tr>
            <tr>
              <td class="num">Appraisal</td>
              <td>Retained unless cash-only; gap coverage capped</td>
              <td>Protects against an appraisal miss without killing the deal for a small delta.</td>
            </tr>
            <tr>
              <td class="num">Close Date</td>
              <td>Offer the seller's preferred date</td>
              <td>Free concession to us; meaningful to seller. Classic price-for-terms trade.</td>
            </tr>
            <tr>
              <td class="num">Post-Close Possession</td>
              <td>Up to 30 days rent-back at no charge if needed</td>
              <td>Reduces seller moving pressure — often worth thousands in price negotiation.</td>
            </tr>
            <tr>
              <td class="num">Repairs / Credits</td>
              <td>Reserved until inspection; asked in credit form, not repair form</td>
              <td>Credits close faster than contractor repairs and give us control of the work.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: WALK-AWAY LINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Walk-Away <span>Line</span></h2>
        <div class="property-summary">
          <p><strong>Every negotiation needs a pre-committed ceiling.</strong> The walk-away price is set <em>before</em> the first counter arrives — and it is set in writing, not in the moment. Aaron sets the ceiling; advisors hold it accountable. Once the ceiling is hit, the offer expires and the negotiation ends cleanly, without hard feelings.</p>
          <p><strong>Ceiling triggers:</strong> appraisal short by more than the capped gap; inspection discovery of structural, roof, HVAC, or moisture issues exceeding a pre-agreed credit budget; seller insistence on waiving inspection or closing at list; discovery of title defects or undisclosed easements.</p>
          <p><strong>Re-engagement posture:</strong> If the deal dies at the ceiling, leave the door open. "At this price and these terms, we're not there today. Circumstances change — if yours do, please call me directly." That sentence has closed more deals on the second pass than any first-round counter.</p>
        </div>
      </section>

      <!-- SECTION: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Execution <span>Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item active">
            <div class="timeline-date">Day 0 · 2026-04-22</div>
            <div class="timeline-title">Brief assembled, discovery list issued</div>
            <div class="timeline-desc">Property dossier open. Comp pull and title search requested.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 1–3</div>
            <div class="timeline-title">Comp set validated; property walked</div>
            <div class="timeline-desc">In-person tour with written condition notes. Confirm systems age, roof, moisture history.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 3–5</div>
            <div class="timeline-title">Financing posture finalized</div>
            <div class="timeline-desc">Cash or pre-qual letter in hand before any written offer is delivered.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 5–7</div>
            <div class="timeline-title">Opening offer delivered</div>
            <div class="timeline-desc">Written, price and terms per structure above. 48–72 hour response window.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 7–14</div>
            <div class="timeline-title">Counter exchange &amp; inspection</div>
            <div class="timeline-desc">Max two counters from our side before walking. Inspection scheduled on mutual acceptance.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 14–30</div>
            <div class="timeline-title">Title, appraisal, close</div>
            <div class="timeline-desc">Title clear, appraisal in hand, close on seller's preferred date with post-close possession available.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: TALK TRACK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Conversation <span>Talk Track</span></h2>
        <p style="margin-bottom: 18px;">Tone: warm, direct, unhurried. Aaron is the principal, not a bidder — he behaves like one.</p>

        <div class="script-block">
          <p>Thank you for making time. I've walked the property, pulled the recent comparable sales, and I've put together what I believe is a fair, defensible number — along with terms I think will actually work for you.</p>
          <p>I'm not here to haggle. I'd rather give you a clear picture, give you my best first offer, and let you decide whether that's a conversation worth having. If the number doesn't work today, I completely understand — and my door stays open.</p>
          <span class="script-attrib">— Opening Posture</span>
        </div>

        <div class="script-block">
          <p>The inspection window is the one thing I can't release — not because I doubt the property, but because a home this size deserves a careful look. Everything else on the terms sheet, I'll flex on where it's reasonable.</p>
          <span class="script-attrib">— Inspection Defense</span>
        </div>

        <div class="script-block">
          <p>At this price, with these terms, I can't get there today. If something changes on your side — timing, circumstances — please call me directly. I'll answer.</p>
          <span class="script-attrib">— Clean Walk-Away</span>
        </div>
      </section>

      <!-- SECTION: DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <ul class="checklist">
          <li><strong>Title search, preliminary</strong><span>Ordered through reputable title company. Identify any liens, easements, encumbrances.</span></li>
          <li><strong>Survey review</strong><span>Current plat confirmed; boundary lines match legal description.</span></li>
          <li><strong>Tax history, last 3 years</strong><span>Annual taxes, assessment trend, any exemptions or protest history.</span></li>
          <li><strong>Comparable sales pull</strong><span>3–5 closed sales, 1 mile radius, 6 months, 5,500–8,500 sq ft, adjusted.</span></li>
          <li><strong>Permit history</strong><span>Municipal permit file — confirm any additions / renovations were permitted.</span></li>
          <li><strong>HOA / covenant review</strong><span>Dues, restrictions, reserve study, any pending assessments.</span></li>
          <li><strong>Insurance pre-quote</strong><span>Dwelling coverage at estate replacement cost, no red-flag conditions.</span></li>
          <li><strong>Professional home inspection</strong><span>Structural, roof, HVAC (all units), electrical panel, plumbing, foundation, moisture.</span></li>
          <li><strong>Specialized inspections as indicated</strong><span>Sewer scope, pest / WDO, well / septic where applicable, pool / spa systems.</span></li>
          <li><strong>Environmental review</strong><span>Flood zone, prior claims history, any recorded environmental notices.</span></li>
          <li><strong>Financing or proof of funds</strong><span>Pre-approval at offer amount or bank letter for cash purchase.</span></li>
          <li><strong>Attorney review of contract</strong><span>Purchase agreement and closing documents reviewed before signature.</span></li>
        </ul>
      </section>

      <!-- SIGN-OFF -->
      <div class="signoff">
        <h3>Principal Direction</h3>
        <p>This brief is a working framework, not a final offer. Numbers are left open where real data is still being collected. The principle that controls every decision: <strong>the deal that does not get done at a disciplined price is better than the deal that gets done at a reckless one.</strong> A walk-away with the door open is a complete negotiation, not a failed one.</p>
        <p>Aaron's direct rule of thumb: if the number being discussed would embarrass him to defend to the 3rd-generation Norris family legacy, the number is wrong. That legacy — <em>A Legacy of Commitment®</em> — applies to how we buy as much as to how we sell.</p>
        <div class="sig">
          <strong>Aaron C. Norris</strong>
          Founder &amp; CEO, Norris Utilities®, LLC<br>
          Cell: 205-500-1343 &nbsp;·&nbsp; acnorris@norrisutilities.com
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-fine">
      Private &amp; Confidential — Executive Acquisition Brief · Prepared 2026-04-22 · Subject: 4505 Buttewoods Estate (7,098 sq ft)
    </div>
  </footer>

</body>
</html>