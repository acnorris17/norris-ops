<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy | Norris Utilities®</title>
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
      --nu-red: #C8102E;
      --nu-green: #2E7D32;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-badge {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.22);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 0.78rem;
      border-radius: 3px;
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
      top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-inner {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      padding: 18px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      font-size: 0.88rem;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .doc-meta .meta-item { color: var(--nu-body-text); }

    /* HERO BLOCK */
    .hero-block {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 36px;
      margin-bottom: 50px;
      padding-bottom: 44px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .hero-title h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .hero-title h1 span { color: var(--nu-blue); }
    .hero-title .address-line {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      font-weight: 400;
    }
    .hero-title p.lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .hero-stats {
      background: linear-gradient(135deg, #1a1a3e 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 26px;
      border-radius: 6px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.18);
    }
    .hero-stats h3 {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
    }
    .hero-stats .stat-row {
      display: flex;
      justify-content: space-between;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      font-size: 0.95rem;
    }
    .hero-stats .stat-row:last-child { border-bottom: none; }
    .hero-stats .stat-row .label { opacity: 0.82; }
    .hero-stats .stat-row .val { font-weight: 700; color: var(--nu-cyan); }
    .hero-stats .stat-row .val.big { font-size: 1.15rem; }

    /* SECTION */
    .nu-section { margin-bottom: 54px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-subtitle {
      font-size: 0.92rem;
      color: #777;
      margin-bottom: 24px;
      font-style: italic;
    }
    .nu-section-divider {
      width: 56px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin: 6px 0 22px;
      border-radius: 2px;
    }

    /* NUMBER GRID */
    .number-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 18px;
    }
    .number-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 0 0 4px 4px;
    }
    .number-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .number-card .value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .number-card .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }
    .number-card.accent { border-top-color: var(--nu-cyan); }
    .number-card.warn { border-top-color: var(--nu-red); }
    .number-card.good { border-top-color: var(--nu-green); }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      margin-bottom: 12px;
    }
    .nu-table th {
      background: linear-gradient(135deg, #1a1a3e 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table td.em { font-weight: 700; color: var(--nu-dark-text); }

    /* STRATEGY BADGE LIST */
    .strategy-list { list-style: none; }
    .strategy-list li {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 16px 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 10px;
      border-radius: 0 4px 4px 0;
    }
    .strategy-list .step-num {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue), #0033cc);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .strategy-list .step-body strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .strategy-list .step-body p {
      color: var(--nu-body-text);
      font-size: 0.93rem;
      line-height: 1.6;
    }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    /* OFFER CARDS */
    .offer-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .offer-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 22px;
      text-align: center;
      position: relative;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .offer-card.recommended {
      border-color: var(--nu-blue);
      box-shadow: 0 8px 24px rgba(0,0,255,0.12);
    }
    .offer-card.recommended::before {
      content: 'RECOMMENDED';
      position: absolute;
      top: -11px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 14px;
      border-radius: 3px;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.12em;
    }
    .offer-card h4 {
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 10px;
    }
    .offer-card .amount {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .offer-card.recommended .amount { color: var(--nu-blue); }
    .offer-card .pct {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .offer-card .rationale {
      font-size: 0.86rem;
      line-height: 1.5;
      color: var(--nu-body-text);
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
    }

    /* LEVERAGE LIST */
    .leverage-list {
      list-style: none;
    }
    .leverage-list li {
      padding: 14px 18px 14px 48px;
      background: linear-gradient(90deg, rgba(0,0,255,0.04), transparent);
      border-left: 3px solid var(--nu-cyan);
      margin-bottom: 8px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .leverage-list li::before {
      content: '◆';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--nu-blue);
      font-size: 1rem;
    }
    .leverage-list li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 12px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 16px;
      width: 16px;
      height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .week {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-item .title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-item .desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      padding: 22px 26px;
      background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.06));
      border: 1px solid rgba(0,0,255,0.15);
      border-radius: 6px;
      margin: 24px 0;
    }
    .callout h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      line-height: 1.65;
    }

    /* WALK-AWAY */
    .walk-away {
      background: linear-gradient(135deg, rgba(200,16,46,0.06), rgba(200,16,46,0.02));
      border: 1px solid rgba(200,16,46,0.25);
      border-left: 5px solid var(--nu-red);
      padding: 22px 26px;
      border-radius: 0 6px 6px 0;
    }
    .walk-away h4 {
      font-weight: 900;
      color: var(--nu-red);
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .walk-away ul { list-style: none; }
    .walk-away ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.94rem;
      color: var(--nu-dark-text);
    }
    .walk-away ul li::before {
      content: '✕';
      position: absolute;
      left: 0;
      color: var(--nu-red);
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-legal {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.12);
      font-size: 0.72rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.03em;
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .hero-block { grid-template-columns: 1fr; }
      .two-col { grid-template-columns: 1fr; }
      .offer-grid { grid-template-columns: 1fr; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .hero-title h1 { font-size: 2rem; }
      .nu-inner { padding: 40px 22px 60px; }
      .nu-header { padding: 50px 22px 70px; }
    }
    @media (max-width: 520px) {
      .doc-meta { flex-direction: column; gap: 8px; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 9px 10px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .offer-card, .number-card, .strategy-list li { break-inside: avoid; }
    }
  </style>
</head>
<body>

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
    <div class="nu-header-badge">Personal Acquisition Strategy</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-inner">

      <div class="doc-meta">
        <div class="meta-item"><strong>Prepared for:</strong> Aaron C. Norris</div>
        <div class="meta-item"><strong>Date:</strong> April 22, 2026</div>
        <div class="meta-item"><strong>Source:</strong> reMarkable action item</div>
        <div class="meta-item"><strong>Status:</strong> Strategy Drafted — Aaron Review</div>
      </div>

      <!-- HERO -->
      <section class="hero-block">
        <div class="hero-title">
          <h1>Negotiate Purchase of the <span>4505 Buttewoods Estate</span></h1>
          <div class="address-line">7,098 sq ft residence &nbsp;•&nbsp; 4505 Buttewoods &nbsp;•&nbsp; Birmingham, AL metro</div>
          <p class="lead">
            This document sets the negotiation strategy for acquiring the 7,098 sq ft estate at 4505 Buttewoods. It defines the opening offer, ceiling, walk-away triggers, and the sequence of steps between today and a closed deal. Prepared as a working playbook — every number here is a placeholder-free checkpoint that Aaron reviews and approves before action is taken.
          </p>
        </div>
        <aside class="hero-stats">
          <h3>At a Glance</h3>
          <div class="stat-row"><span class="label">Residence Size</span><span class="val big">7,098 sq ft</span></div>
          <div class="stat-row"><span class="label">Address</span><span class="val">4505 Buttewoods</span></div>
          <div class="stat-row"><span class="label">Opening Offer Target</span><span class="val">$900,000</span></div>
          <div class="stat-row"><span class="label">Negotiation Ceiling</span><span class="val">$975,000</span></div>
          <div class="stat-row"><span class="label">Walk-Away</span><span class="val">&gt; $1.05M</span></div>
          <div class="stat-row"><span class="label">Target Close</span><span class="val">60–75 days</span></div>
        </aside>
      </section>

      <!-- SECTION 1: POSITION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Position</span> <span class="rest">&amp; Objective</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">What we are buying, and what a win looks like.</p>

        <div class="number-grid">
          <div class="number-card">
            <div class="label">Residence</div>
            <div class="value">7,098</div>
            <div class="sub">square feet of living area</div>
          </div>
          <div class="number-card accent">
            <div class="label">Target Price / SqFt</div>
            <div class="value">$127</div>
            <div class="sub">at the $900K opening offer</div>
          </div>
          <div class="number-card accent">
            <div class="label">Ceiling Price / SqFt</div>
            <div class="value">$137</div>
            <div class="sub">at the $975K walk-up</div>
          </div>
          <div class="number-card warn">
            <div class="label">Walk-Away / SqFt</div>
            <div class="value">$148</div>
            <div class="sub">anything above is overpaying</div>
          </div>
        </div>

        <div class="callout">
          <h4>Objective</h4>
          <p>
            Acquire 4505 Buttewoods at or below <strong>$975,000 all-in</strong> (price plus closing), with a financing structure that preserves working capital for Norris Utilities®. Close inside 75 days, contingent on inspection, clear title, appraisal support, and lender commitment. Avoid emotional bidding — this is an asset purchase, not a dream-home auction.
          </p>
        </div>
      </section>

      <!-- SECTION 2: INTEL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Intel</span> <span class="rest">Required Before First Offer</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">Do not open the negotiation until every row below is filled with verified data.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:36%">Data Point</th>
              <th>Source</th>
              <th style="width:18%">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="em">Current list price</td><td>MLS / listing agent</td><td>Pull before call</td></tr>
            <tr><td class="em">Days on market</td><td>MLS history, price-change log</td><td>Pull before call</td></tr>
            <tr><td class="em">Prior sale price &amp; date</td><td>Jefferson County tax records</td><td>Pull before call</td></tr>
            <tr><td class="em">Current tax assessment</td><td>Jefferson County Revenue</td><td>Pull before call</td></tr>
            <tr><td class="em">Last 3 comparable sales (≥ 6,500 sq ft, ≤ 2 mi, last 12 mo)</td><td>MLS comp search</td><td>Pull before call</td></tr>
            <tr><td class="em">Seller motivation (job move, estate, financial)</td><td>Listing agent conversation</td><td>Surface in call 1</td></tr>
            <tr><td class="em">Time on market for this price bracket in ZIP</td><td>Local broker statistics</td><td>Pull before call</td></tr>
            <tr><td class="em">Roof, HVAC, foundation age</td><td>Seller disclosure</td><td>Request with offer</td></tr>
            <tr><td class="em">Any recent permitted work</td><td>City of Birmingham permit portal</td><td>Pull before call</td></tr>
            <tr><td class="em">HOA presence, dues, restrictions</td><td>Listing / plat</td><td>Pull before call</td></tr>
          </tbody>
        </table>

        <div class="callout">
          <h4>Rule</h4>
          <p>No offer goes out until the three most recent comparable sales within 2 miles are confirmed. If comparable data does not support the $975K ceiling, the ceiling moves down — not the ask up.</p>
        </div>
      </section>

      <!-- SECTION 3: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">Three rungs. Do not skip rungs. Do not cross the ceiling.</p>

        <div class="offer-grid">
          <div class="offer-card">
            <h4>Opening Offer</h4>
            <div class="amount">$900,000</div>
            <div class="pct">~$127 / sq ft</div>
            <p class="rationale">
              Written, earnest money $10,000, 21-day inspection, 30-day financing contingency, 60-day close. Expect counter in the $985K–$1.02M range. Sets anchor low.
            </p>
          </div>
          <div class="offer-card recommended">
            <h4>Best &amp; Final Band</h4>
            <div class="amount">$940K–$960K</div>
            <div class="pct">~$132–$135 / sq ft</div>
            <p class="rationale">
              Landing target after one or two counter rounds. Price Aaron is willing to sign at same day. Request: seller covers title insurance, home warranty, up to $5K toward closing.
            </p>
          </div>
          <div class="offer-card">
            <h4>Ceiling / Walk-Up</h4>
            <div class="amount">$975,000</div>
            <div class="pct">~$137 / sq ft</div>
            <p class="rationale">
              Only if comps support it AND seller is giving something back (repair credit, appliances, closing costs). Any move above this needs a fresh written authorization from Aaron.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points in Aaron's Favor</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">Bring each of these into the conversation deliberately. Do not stack them all at once.</p>

        <ul class="leverage-list">
          <li><strong>Proof-of-funds buyer.</strong> Ability to produce lender pre-approval inside 24 hours signals a low-risk close — listing agents weigh this heavily against "maybe" offers.</li>
          <li><strong>Flexible close date.</strong> Offer 30 / 45 / 60 days and let the seller pick; matches a seller who needs to time a move.</li>
          <li><strong>Clean terms.</strong> No home-sale contingency. No long rent-back. Seller wants certainty, not the highest number on paper.</li>
          <li><strong>Inspection realism.</strong> Waive repair requests under $2,500; surface only material items (structure, roof, HVAC, water intrusion, electrical). Seller hears "reasonable buyer."</li>
          <li><strong>Local Birmingham buyer.</strong> No out-of-state finance delays. No surprise appraisal gaps from an unfamiliar lender.</li>
          <li><strong>Silent walk-away.</strong> Do not telegraph the ceiling. "We've written our strongest number" closes conversations faster than "we'll see what we can do."</li>
        </ul>
      </section>

      <!-- SECTION 5: STRATEGY SEQUENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Sequence</span> <span class="rest">— Step by Step</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">Execute in order. Each step gates the next.</p>

        <ol class="strategy-list">
          <li>
            <div class="step-num">1</div>
            <div class="step-body">
              <strong>Lock pre-approval at $1.0M ceiling.</strong>
              <p>Patrick Lavette at Renasant Bank. Written pre-approval letter dated within 30 days, amount shown at $1,000,000 to give negotiating headroom without signaling the true walk-away.</p>
            </div>
          </li>
          <li>
            <div class="step-num">2</div>
            <div class="step-body">
              <strong>Pull all comps and tax history.</strong>
              <p>Use the Intel table above. Confirm the three closest sold comps support a value window, and document the window in one page. Anything that puts the home's market value under $900K changes this plan.</p>
            </div>
          </li>
          <li>
            <div class="step-num">3</div>
            <div class="step-body">
              <strong>Phone the listing agent — soft first touch.</strong>
              <p>Ask about seller motivation, timing, what prior offers have looked like, any known repair items. Take notes. Do not name a number. Ten-minute call.</p>
            </div>
          </li>
          <li>
            <div class="step-num">4</div>
            <div class="step-body">
              <strong>Submit the $900,000 written offer.</strong>
              <p>Buyer's agent or real-estate attorney drafts. Earnest money wired or check within 48 hours of acceptance. Short response window — 72 hours — keeps momentum.</p>
            </div>
          </li>
          <li>
            <div class="step-num">5</div>
            <div class="step-body">
              <strong>Work the counter.</strong>
              <p>Respond once. Move toward the $940K–$960K band. Trade price for terms (closing credit, warranty, appliances). Never raise price without getting something back.</p>
            </div>
          </li>
          <li>
            <div class="step-num">6</div>
            <div class="step-body">
              <strong>Full inspection in week 2.</strong>
              <p>Licensed AL home inspector. Separate contractors for HVAC, roof, and foundation if the inspector flags concerns. Report drives repair-credit request.</p>
            </div>
          </li>
          <li>
            <div class="step-num">7</div>
            <div class="step-body">
              <strong>Appraisal in week 3.</strong>
              <p>Lender-ordered. If appraisal under contract price, renegotiate to appraised value or request seller cover the gap. Do not overpay past appraisal without a written reason.</p>
            </div>
          </li>
          <li>
            <div class="step-num">8</div>
            <div class="step-body">
              <strong>Clear title, insure, close.</strong>
              <p>Title search through chosen Birmingham title company. Homeowners insurance bound 10 days before close. Final walk-through 24 hours before close. Fund and record.</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- SECTION 6: TIMELINE + WALK-AWAY -->
      <section class="nu-section">
        <div class="two-col">
          <div>
            <h2 class="nu-section-title"><span class="first">Timeline</span> <span class="rest">— 75 Days</span></h2>
            <div class="nu-section-divider"></div>

            <div class="timeline">
              <div class="timeline-item">
                <div class="week">Week 1</div>
                <div class="title">Intel &amp; Pre-Approval</div>
                <div class="desc">Comps pulled, tax history confirmed, Renasant pre-approval issued, listing agent called.</div>
              </div>
              <div class="timeline-item">
                <div class="week">Week 2</div>
                <div class="title">Offer &amp; Counter</div>
                <div class="desc">Written $900K offer submitted. Counter received, countered once. Target contract by end of week.</div>
              </div>
              <div class="timeline-item">
                <div class="week">Weeks 3–4</div>
                <div class="title">Inspection &amp; Appraisal</div>
                <div class="desc">Inspection complete, repair credits negotiated, appraisal ordered, any gap resolved.</div>
              </div>
              <div class="timeline-item">
                <div class="week">Weeks 5–8</div>
                <div class="title">Financing &amp; Title</div>
                <div class="desc">Underwriting to clear-to-close, title search, insurance bound, HOA docs (if any) reviewed.</div>
              </div>
              <div class="timeline-item">
                <div class="week">Weeks 9–10</div>
                <div class="title">Close</div>
                <div class="desc">Final walk-through, wire funds, deed recorded, keys received.</div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="nu-section-title"><span class="first">Walk-Away</span> <span class="rest">Triggers</span></h2>
            <div class="nu-section-divider"></div>
            <p class="nu-section-subtitle">If any of these surface, pause the deal and re-consult before continuing.</p>

            <div class="walk-away">
              <h4>Hard Stops</h4>
              <ul>
                <li>Seller will not move below $1,050,000 after two counter rounds.</li>
                <li>Comps do not support a value above $940,000 per square foot math.</li>
                <li>Appraisal comes in more than $40,000 under contract and seller will not meet appraisal.</li>
                <li>Inspection reveals foundation, major framing, or undisclosed water-intrusion damage.</li>
                <li>Title issues — liens, unresolved probate, unclear easements — that cannot close inside 30 extra days.</li>
                <li>Seller demands a rent-back longer than 30 days post-close.</li>
                <li>Financing rate moves enough to push monthly carry past Aaron's personal budget ceiling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: PROFESSIONAL TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Team</span> <span class="rest">Aaron Engages</span></h2>
        <div class="nu-section-divider"></div>
        <p class="nu-section-subtitle">Named roles. No deal moves forward without the first three locked in.</p>

        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:22%">Role</th>
              <th>Responsibility</th>
              <th style="width:28%">Candidate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="em">Lender</td><td>Pre-approval, rate lock, underwriting to clear-to-close</td><td>Patrick Lavette — Renasant Bank</td></tr>
            <tr><td class="em">Buyer's Agent</td><td>Draft offer, run counters, coordinate inspection &amp; close</td><td>Aaron to confirm — Birmingham broker, 7,000+ sq ft transaction experience preferred</td></tr>
            <tr><td class="em">Real-Estate Attorney</td><td>Contract review, title review, closing document sign-off</td><td>Aaron to confirm — Jefferson County, AL</td></tr>
            <tr><td class="em">Home Inspector</td><td>Full structural, systems, roof, pest</td><td>AL-licensed, ASHI or InterNACHI credentialed</td></tr>
            <tr><td class="em">Title &amp; Escrow</td><td>Title search, title insurance, escrow disbursement</td><td>Birmingham title company — attorney referral</td></tr>
            <tr><td class="em">Insurance</td><td>Homeowners binder 10 days pre-close</td><td>Current Norris Utilities® carrier — request quote first</td></tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 8: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Actions — This Week</span></h2>
        <div class="nu-section-divider"></div>

        <ol class="strategy-list">
          <li>
            <div class="step-num">A</div>
            <div class="step-body">
              <strong>Text Patrick Lavette at Renasant Bank.</strong>
              <p>Request pre-approval letter at $1.0M, personal-purchase, 30-year conventional. Goal: letter in hand by Friday.</p>
            </div>
          </li>
          <li>
            <div class="step-num">B</div>
            <div class="step-body">
              <strong>Pull 4505 Buttewoods public record packet.</strong>
              <p>Tax card, prior-sale history, permit history, plat. One PDF stored in Aaron's estate folder.</p>
            </div>
          </li>
          <li>
            <div class="step-num">C</div>
            <div class="step-body">
              <strong>Identify buyer's agent.</strong>
              <p>Two names referred in. 15-minute intro call with each. Choose and sign a limited-representation agreement for this property only.</p>
            </div>
          </li>
          <li>
            <div class="step-num">D</div>
            <div class="step-body">
              <strong>Aaron reviews and signs off on this strategy.</strong>
              <p>Any edits to opening offer, ceiling, or walk-away are captured in writing before the first call goes out.</p>
            </div>
          </li>
        </ol>

        <div class="callout">
          <h4>Discipline</h4>
          <p>
            The house is 7,098 square feet. The deal math is what it is. If the seller will not meet the numbers in this document, we do not buy 4505 Buttewoods — we buy the next one. A good negotiation ends with either a signed contract at our terms, or a friendly "not this one," and nothing in between.
          </p>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong style="color:#fff;">Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-legal">
      Confidential working document prepared for Aaron C. Norris. Figures reflect negotiation targets, not a binding offer. All purchase terms require written authorization prior to submission. Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>