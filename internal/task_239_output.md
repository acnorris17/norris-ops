<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods | Norris Utilities®</title>
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
      --nu-success: #0a7c3e;
      --nu-warning: #c9821a;
      --nu-danger: #b8232c;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 76px; height: 76px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
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
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOCUMENT META BAR */
    .doc-meta-bar {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 18px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .doc-meta-left { display: flex; flex-direction: column; gap: 4px; }
    .doc-type {
      font-weight: 900;
      font-size: 0.75rem;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .doc-title {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
    }
    .doc-meta-right {
      display: flex;
      gap: 20px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta-item strong { color: var(--nu-dark-text); display: block; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2px; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 80px;
    }
    .container { max-width: 1100px; margin: 0 auto; }

    /* HERO SUMMARY */
    .hero-card {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
      border-radius: 12px;
      padding: 36px 40px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.08);
      border-left: 6px solid var(--nu-blue);
      margin-bottom: 36px;
    }
    .hero-eyebrow {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .hero-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 14px;
    }
    .hero-title .accent { color: var(--nu-blue); }
    .hero-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 800px;
    }

    /* QUICK FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 14px;
      margin-bottom: 36px;
    }
    .fact-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
    }
    .fact-label {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .fact-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .fact-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 36px 40px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      width: 50px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 0 0 22px;
      border-radius: 2px;
    }

    /* BADGES */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 22px;
    }
    .nu-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.82rem;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-pill.priority {
      background: linear-gradient(135deg, #fff4e6 0%, #ffe7c2 100%);
      color: #8a4a00;
      border-color: #f5c97a;
    }
    .nu-pill.status {
      background: linear-gradient(135deg, #e6f0ff 0%, #cce0ff 100%);
      color: #002b80;
      border-color: #99c2ff;
    }
    .nu-pill.dot::before {
      content: '';
      width: 8px; height: 8px;
      border-radius: 50%;
      background: currentColor;
      display: inline-block;
    }

    /* PROPERTY DETAIL TABLE */
    .detail-table {
      width: 100%;
      border-collapse: collapse;
    }
    .detail-table tr { border-bottom: 1px solid var(--nu-medium-gray); }
    .detail-table tr:last-child { border-bottom: none; }
    .detail-table th, .detail-table td {
      padding: 14px 16px;
      text-align: left;
      font-size: 0.95rem;
    }
    .detail-table th {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 40%;
      background: var(--nu-light-gray);
    }
    .detail-table td { color: var(--nu-body-text); }

    /* STRATEGY GRID */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .strategy-card {
      background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 22px;
      position: relative;
    }
    .strategy-num {
      position: absolute;
      top: -12px; left: 18px;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .strategy-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 8px;
      margin-top: 6px;
    }
    .strategy-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ACTION CHECKLIST */
    .checklist { list-style: none; }
    .checklist li {
      display: flex;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      align-items: flex-start;
    }
    .checklist li:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .check-content { flex: 1; }
    .check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .check-meta {
      font-size: 0.83rem;
      color: var(--nu-body-text);
    }
    .check-meta .owner {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-right: 8px;
    }

    /* TIMELINE */
    .timeline { position: relative; padding-left: 30px; }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-phase {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-head {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .timeline-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* RISK / OPPORTUNITY */
    .ro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .ro-card {
      border-radius: 10px;
      padding: 22px 22px;
    }
    .ro-card.opp {
      background: linear-gradient(135deg, #f0fbf4 0%, #e3f5ec 100%);
      border-left: 5px solid var(--nu-success);
    }
    .ro-card.risk {
      background: linear-gradient(135deg, #fff5f5 0%, #fde8e8 100%);
      border-left: 5px solid var(--nu-danger);
    }
    .ro-head {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .ro-card.opp .ro-head { color: var(--nu-success); }
    .ro-card.risk .ro-head { color: var(--nu-danger); }
    .ro-card ul { list-style: none; }
    .ro-card li {
      padding: 6px 0;
      font-size: 0.92rem;
      padding-left: 18px;
      position: relative;
    }
    .ro-card li::before {
      position: absolute;
      left: 0; top: 6px;
      font-weight: 900;
    }
    .ro-card.opp li::before { content: '+'; color: var(--nu-success); }
    .ro-card.risk li::before { content: '!'; color: var(--nu-danger); }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
    }
    .val-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .val-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .val-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .val-table .num { text-align: right; font-weight: 700; color: var(--nu-dark-text); font-variant-numeric: tabular-nums; }
    .val-table .target td { background: linear-gradient(90deg, #fff8e1 0%, #ffeebc 100%); }
    .val-table .target td:first-child { font-weight: 900; color: var(--nu-navy); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 32px 36px;
      margin-bottom: 28px;
      position: relative;
      overflow: hidden;
    }
    .callout::after {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .callout-eyebrow {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
      position: relative;
    }
    .callout-text {
      font-size: 1.15rem;
      line-height: 1.55;
      position: relative;
      max-width: 800px;
    }
    .callout-text strong { color: var(--nu-cyan); font-weight: 700; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      opacity: 0.65;
      letter-spacing: 0.05em;
    }

    /* CONFIDENTIAL STAMP */
    .confidential-stamp {
      display: inline-block;
      border: 2px solid var(--nu-danger);
      color: var(--nu-danger);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-area { padding: 32px 18px 60px; }
      .nu-section { padding: 26px 22px; }
      .hero-card { padding: 26px 22px; }
      .hero-title { font-size: 1.55rem; }
      .ro-grid { grid-template-columns: 1fr; }
      .doc-meta-bar { padding: 14px 22px; }
      .doc-meta-right { gap: 14px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section, .hero-card, .fact-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="doc-meta-bar">
    <div class="doc-meta-left">
      <div class="doc-type">Internal Action Brief · reMarkable</div>
      <div class="doc-title">Estate Acquisition — 4505 Buttewoods</div>
    </div>
    <div class="doc-meta-right">
      <div class="doc-meta-item"><strong>Owner</strong>Aaron C. Norris</div>
      <div class="doc-meta-item"><strong>Date</strong>April 22, 2026</div>
      <div class="doc-meta-item"><strong>Doc ID</strong>NU-RE-2026-0422</div>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- HERO SUMMARY -->
      <div class="hero-card">
        <div class="confidential-stamp">Confidential — Internal Use Only</div>
        <div class="hero-eyebrow">Action Item · Real Estate · Personal</div>
        <h1 class="hero-title">Negotiate purchase of the <span class="accent">7,098 sq ft estate at 4505 Buttewoods</span></h1>
        <p class="hero-sub">Pulled from the reMarkable action queue on April 22, 2026. This brief sets the negotiation framework, target price band, due-diligence checklist, and timeline for advancing from initial inquiry to a signed purchase agreement.</p>
        <div class="nu-badge-row" style="margin-top: 22px; margin-bottom: 0;">
          <span class="nu-pill priority dot">Priority — High</span>
          <span class="nu-pill status dot">Status — Negotiation Phase</span>
          <span class="nu-pill dot" style="color: var(--nu-blue);">Source — reMarkable Tablet</span>
        </div>
      </div>

      <!-- QUICK FACTS -->
      <div class="facts-grid">
        <div class="fact-card">
          <div class="fact-label">Address</div>
          <div class="fact-value" style="font-size: 1.15rem;">4505 Buttewoods</div>
          <div class="fact-sub">Property of record</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Living Area</div>
          <div class="fact-value">7,098 <span style="font-size: 0.95rem; font-weight: 700; color: var(--nu-body-text);">sq ft</span></div>
          <div class="fact-sub">Estate-class residence</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Phase</div>
          <div class="fact-value" style="font-size: 1.15rem; color: var(--nu-blue);">Negotiation</div>
          <div class="fact-sub">Pre-offer positioning</div>
        </div>
        <div class="fact-card">
          <div class="fact-label">Decision Lead</div>
          <div class="fact-value" style="font-size: 1.15rem;">Aaron C. Norris</div>
          <div class="fact-sub">Founder &amp; CEO</div>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px;">Confirmed details from the reMarkable note are listed below. Items marked <em>verify</em> require pulling the listing sheet, county records, or seller-side disclosures before drafting an offer — do not proceed to offer without these confirmed.</p>

        <table class="detail-table">
          <tr><th>Street Address</th><td>4505 Buttewoods</td></tr>
          <tr><th>Property Type</th><td>Estate / Single-family residential</td></tr>
          <tr><th>Living Area (Confirmed)</th><td>7,098 sq ft</td></tr>
          <tr><th>Lot Size</th><td><em>Verify</em> — pull from listing &amp; county GIS</td></tr>
          <tr><th>Year Built</th><td><em>Verify</em> — pull from listing &amp; tax record</td></tr>
          <tr><th>Asking Price</th><td><em>Verify</em> — current MLS or seller-direct number</td></tr>
          <tr><th>Days on Market</th><td><em>Verify</em> — leverage point if extended</td></tr>
          <tr><th>Listing Source</th><td><em>Verify</em> — MLS / FSBO / off-market lead</td></tr>
          <tr><th>Seller Motivation</th><td><em>Verify</em> through agent dialogue before first offer</td></tr>
        </table>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="nu-section-rule"></div>
        <p>Anchor the offer to a defensible per-square-foot range derived from at least three closed comparables within the last 90 days. Use the structure below to set the floor, opening offer, and walk-away ceiling before the first conversation with the seller-side agent.</p>

        <table class="val-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Definition</th>
              <th class="num">$ / sq ft</th>
              <th class="num">Total at 7,098 sq ft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Floor (opening)</td>
              <td>Aggressive — leaves room to move</td>
              <td class="num">Set after comp pull</td>
              <td class="num">Calculate</td>
            </tr>
            <tr class="target">
              <td>Target (close zone)</td>
              <td>The number Aaron will sign at</td>
              <td class="num">Set after comp pull</td>
              <td class="num">Calculate</td>
            </tr>
            <tr>
              <td>Walk-away (ceiling)</td>
              <td>Hard cap — no exceptions without 24h pause</td>
              <td class="num">Set after comp pull</td>
              <td class="num">Calculate</td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top: 16px; font-size: 0.92rem; color: var(--nu-body-text);"><strong style="color: var(--nu-dark-text);">Discipline rule:</strong> if the asking price is more than 12% above the target tier, the opening offer goes in below the floor and Aaron walks if seller refuses to negotiate within 7 days.</p>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="nu-section-rule"></div>

        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-num">1</div>
            <div class="strategy-head">Lead with diligence, not enthusiasm</div>
            <div class="strategy-body">First conversation focuses on understanding the seller's situation — timeline, why they're moving, what's flexible. Never anchor against asking price in the opening dialogue. Listen first.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">2</div>
            <div class="strategy-head">Anchor on comps, not on emotion</div>
            <div class="strategy-body">Every counter cites a specific closed comparable. The number always traces back to data. Removes the personal element and keeps the conversation professional.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">3</div>
            <div class="strategy-head">Leverage cash &amp; speed</div>
            <div class="strategy-body">If proceeding with cash or pre-approved financing, surface that early. Estate sellers value certainty of close — frame the offer as "lower number, faster close, fewer contingencies."</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">4</div>
            <div class="strategy-head">Hold the walk-away hard</div>
            <div class="strategy-body">Pre-commit to the ceiling in writing in this brief. If negotiation pushes past it, the answer is no — and the seller is told no in the same call, not after a delay. Discipline beats hope.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">5</div>
            <div class="strategy-head">Ask for concessions, not just price</div>
            <div class="strategy-body">Closing costs, fixtures, appliances, lawn equipment, generator, post-close occupancy terms — these have real dollar value and are easier wins than a straight price cut.</div>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">6</div>
            <div class="strategy-head">Document every promise in writing</div>
            <div class="strategy-body">Verbal agreements at this stage are forgotten by closing. Every concession, every repair, every item-included gets memorialized in the offer or the addendum. Same discipline used for utility-equipment quoting.</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 12px;">All items below must be cleared <strong>before</strong> a binding offer is signed. Aaron owns the decisions — assigned support roles handle the legwork.</p>

        <ul class="checklist">
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Pull current MLS listing sheet &amp; full photo set</div>
              <div class="check-meta"><span class="owner">Aaron</span>Confirms square footage, lot, year built, asking, days on market, seller's agent of record.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Run 3+ closed-sale comparables within 90 days, ½ mile radius</div>
              <div class="check-meta"><span class="owner">Aaron</span>Establishes the $/sq ft band that anchors the floor, target, and ceiling.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Pull county tax record, parcel ID, and assessed value</div>
              <div class="check-meta"><span class="owner">Aaron</span>Tax history reveals the seller's basis and signals room to negotiate.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Confirm financing structure (cash vs. mortgage)</div>
              <div class="check-meta"><span class="owner">Aaron</span>If financing, secure pre-approval letter from Patrick Lavette at Renasant Bank before first offer.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Identify and engage a buyer's agent OR proceed unrepresented</div>
              <div class="check-meta"><span class="owner">Aaron</span>Decision affects negotiation tactics, commission allocation, and earnest-money path.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Schedule on-site walkthrough &amp; independent inspection</div>
              <div class="check-meta"><span class="owner">Aaron</span>Estate-class properties hide deferred maintenance — never skip the inspector.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Title search &amp; survey ordered through closing attorney</div>
              <div class="check-meta"><span class="owner">Aaron + Attorney</span>Confirms clear title, easements, encroachments before earnest money is at risk.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Set the walk-away ceiling in writing — Aaron initials this brief</div>
              <div class="check-meta"><span class="owner">Aaron</span>The number that prevents emotional overpay. Filled in once comps are pulled.</div>
            </div>
          </li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Week 1 — Discovery</div>
            <div class="timeline-head">Pull data, build comp file, schedule walkthrough</div>
            <div class="timeline-body">Listing sheet, county records, financing pre-approval, comp set, on-site visit. Decision tree built before any seller-side contact.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 2 — Opening Offer</div>
            <div class="timeline-head">First written offer at the floor tier with concessions list</div>
            <div class="timeline-body">Offer goes in writing, accompanied by pre-approval (or proof of funds) and a 7-day response window. No verbal pre-negotiation.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Weeks 2–3 — Counter Cycle</div>
            <div class="timeline-head">Two-counter maximum to reach target zone</div>
            <div class="timeline-body">If seller cannot reach target within two counters, pause for 5 days. Silence is leverage. Re-engage only if seller responds.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 4 — Under Contract</div>
            <div class="timeline-head">Signed purchase agreement, earnest money posted, inspection ordered</div>
            <div class="timeline-body">Inspection contingency: 10 business days. Financing contingency: 21 days. Title work: 14 days. All deadlines tracked in master tracker.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Weeks 5–7 — Diligence Window</div>
            <div class="timeline-head">Inspection, appraisal, title clearance, repair negotiation</div>
            <div class="timeline-body">Material findings trigger price re-negotiation or repair credit. Walk-away remains an option through this entire phase.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 8 — Close</div>
            <div class="timeline-head">Funding, recording, keys</div>
            <div class="timeline-body">Closing scheduled with attorney. Final walkthrough 24 hours pre-close. Wire instructions verified by phone — never email-only.</div>
          </div>
        </div>
      </section>

      <!-- RISK / OPPORTUNITY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">&amp; Opportunity Map</span></h2>
        <div class="nu-section-rule"></div>

        <div class="ro-grid">
          <div class="ro-card opp">
            <div class="ro-head">Opportunities</div>
            <ul>
              <li>Estate-class inventory in this size range is illiquid — buyers with cash and speed have leverage</li>
              <li>If days-on-market is extended, seller psychology favors the buyer who shows up serious and decisive</li>
              <li>Concession stacking (closing costs, fixtures, post-close occupancy) often delivers more value than a price cut</li>
              <li>A clean, contingency-light offer can win against a higher financed offer with weak terms</li>
            </ul>
          </div>
          <div class="ro-card risk">
            <div class="ro-head">Risks to Manage</div>
            <ul>
              <li>Emotional overpay — the property is large and impressive; the walk-away ceiling exists to prevent this</li>
              <li>Hidden deferred maintenance on 7,098 sq ft can equal six-figure repair exposure — inspection is non-negotiable</li>
              <li>Unrepresented buyer status without an attorney creates contract-language risk; engage closing attorney early</li>
              <li>Wire fraud at close — verify wiring instructions by voice call to a known number, never trust email-only</li>
              <li>Time drag on Aaron's primary business — block calendar time so negotiation does not bleed into Norris Utilities® operations</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DECISION CALLOUT -->
      <div class="callout">
        <div class="callout-eyebrow">Decision Discipline</div>
        <p class="callout-text">The most expensive mistake in estate-class real estate is paying for the building you walked through instead of the comparable that closed. <strong>Set the walk-away number before the first conversation. Honor it.</strong> If the seller cannot meet the target, the next property exists — Aaron's capital does not need to chase this one.</p>
      </div>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="checklist">
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Confirm full property address and county jurisdiction</div>
              <div class="check-meta"><span class="owner">Aaron</span>Before any offer drafting — single most important data point still outstanding from the reMarkable note.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Pull MLS listing or seller-direct asking number</div>
              <div class="check-meta"><span class="owner">Aaron</span>Establishes the gap between asking and target — sets the negotiation distance.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Initiate financing pre-approval conversation with Patrick Lavette / Renasant Bank</div>
              <div class="check-meta"><span class="owner">Aaron</span>Even if cash is the path, having the line confirmed gives optionality at the table.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Engage real-estate attorney for contract review &amp; closing</div>
              <div class="check-meta"><span class="owner">Aaron</span>Identify the attorney now — not after the offer is accepted.</div>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Block 90 minutes on calendar this week to fill in valuation tiers</div>
              <div class="check-meta"><span class="owner">Aaron</span>Floor, target, and walk-away numbers entered into this brief and initialed.</div>
            </div>
          </li>
        </ul>
      </section>

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
    <div class="nu-footer-meta">
      Internal Action Brief · Generated April 22, 2026 · Source: reMarkable Action Queue · Doc ID NU-RE-2026-0422
    </div>
  </footer>

</body>
</html>