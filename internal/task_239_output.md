<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 180%;
      background: radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
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

    /* ══ DOC BADGE ══ */
    .doc-badge-bar {
      background: var(--nu-white);
      padding: 22px 40px 6px;
      text-align: center;
    }
    .doc-badge {
      display: inline-block;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 8px 28px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
    }
    .doc-meta {
      display: block;
      margin-top: 12px;
      font-size: 0.85rem;
      color: #666;
      letter-spacing: 0.04em;
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
      width: 65%;
      max-width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 40px 40px 70px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      border-bottom: 3px solid var(--nu-cyan);
      padding-bottom: 10px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    section { margin-bottom: 44px; }

    /* ══ HERO SUMMARY ══ */
    .hero-summary {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 10px 30px rgba(0,0,51,0.15);
      position: relative;
      overflow: hidden;
    }
    .hero-summary::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
    }
    .hero-address {
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .hero-headline {
      font-size: 2rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 16px;
      color: var(--nu-white);
    }
    .hero-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.1rem;
      color: rgba(255,255,255,0.85);
      max-width: 720px;
    }

    /* ══ KEY FACTS GRID ══ */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 14px;
      margin-bottom: 10px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-label {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #6a6a7a;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .fact-sub {
      font-size: 0.78rem;
      color: #888;
      margin-top: 4px;
      font-weight: 400;
    }

    /* ══ TWO-COL LAYOUT ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 30px;
    }
    @media (max-width: 860px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* ══ STRATEGY CARDS ══ */
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .strategy-card h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .strategy-card h3 .num {
      color: var(--nu-cyan);
      margin-right: 10px;
    }
    .strategy-card p {
      margin-bottom: 10px;
      color: var(--nu-body-text);
    }
    .strategy-card ul {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
    }
    .strategy-card li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.95rem;
    }
    .strategy-card li::before {
      content: '•';
      position: absolute;
      left: 6px;
      top: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* ══ OFFER LADDER ══ */
    .offer-ladder {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
      border: 1px solid var(--nu-medium-gray);
    }
    .offer-ladder h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 2px solid var(--nu-cyan);
      padding-bottom: 8px;
    }
    .offer-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 12px;
      padding: 10px 0;
      align-items: center;
      border-bottom: 1px dashed #ccc;
    }
    .offer-row:last-child { border-bottom: none; }
    .offer-step {
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .offer-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.92rem;
    }
    .offer-label small {
      display: block;
      color: #777;
      font-weight: 400;
      font-size: 0.78rem;
      margin-top: 2px;
    }
    .offer-amount {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      white-space: nowrap;
    }

    /* ══ TERMS TABLE ══ */
    .terms-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .terms-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .terms-table td {
      padding: 12px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .terms-table tr:last-child td { border-bottom: none; }
    .terms-table tr:nth-child(even) td { background: #fafafc; }
    .terms-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding: 0 0 22px 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -25px;
      top: 5px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-task {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-detail {
      color: #555;
      font-size: 0.9rem;
    }

    /* ══ LEVERAGE LIST ══ */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .leverage-item {
      background: linear-gradient(135deg, rgba(0,0,255,0.03) 0%, rgba(6,208,255,0.05) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      padding: 20px;
      border-radius: 4px;
    }
    .leverage-item h4 {
      font-weight: 900;
      color: var(--nu-navy);
      font-size: 0.98rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .leverage-item p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin: 0;
    }

    /* ══ WALK-AWAY BOX ══ */
    .walkaway {
      background: #fff8e1;
      border: 2px solid var(--nu-accent-gold);
      border-radius: 8px;
      padding: 22px 28px;
      margin-top: 20px;
    }
    .walkaway h3 {
      color: #7a5a00;
      font-weight: 900;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }
    .walkaway p {
      color: #5a4200;
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
    .walkaway ul {
      list-style: none;
      padding: 0;
      margin: 6px 0 0;
    }
    .walkaway li {
      padding: 4px 0 4px 22px;
      position: relative;
      color: #5a4200;
      font-size: 0.92rem;
    }
    .walkaway li::before {
      content: '◆';
      position: absolute;
      left: 4px;
      color: var(--nu-accent-gold);
    }

    /* ══ STATUS CHIP ══ */
    .chip {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .chip-open { background: #e8f4ff; color: var(--nu-blue); }
    .chip-warn { background: #fff4cc; color: #8a6500; }
    .chip-action { background: var(--nu-cyan); color: var(--nu-navy); }

    /* ══ NEXT ACTIONS ══ */
    .next-actions {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 34px 36px;
      border-radius: 10px;
      margin-top: 10px;
    }
    .next-actions h2 {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 16px;
      border-bottom: 3px solid var(--nu-cyan);
      padding-bottom: 10px;
    }
    .next-actions ol {
      padding-left: 22px;
      margin: 0;
    }
    .next-actions li {
      padding: 10px 0;
      font-size: 0.98rem;
      line-height: 1.5;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .next-actions li:last-child { border-bottom: none; }
    .next-actions strong { color: var(--nu-cyan); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 45px 24px 65px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 30px 20px 50px; }
      .hero-summary { padding: 26px 22px; }
      .hero-headline { font-size: 1.45rem; }
      .next-actions { padding: 26px 22px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .hero-summary, .next-actions, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC BADGE -->
  <div class="doc-badge-bar">
    <span class="doc-badge">Acquisition Negotiation Brief</span>
    <span class="doc-meta">Prepared: April 22, 2026 &nbsp;•&nbsp; Prepared by: Aaron C. Norris &nbsp;•&nbsp; Status: Active</span>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="container">

      <!-- HERO SUMMARY -->
      <div class="hero-summary">
        <div class="hero-address">Subject Property</div>
        <div class="hero-headline">4505 Buttewoods — 7,098 sq ft Estate<br>Purchase Negotiation Strategy</div>
        <div class="hero-tagline">A disciplined acquisition plan built on verified comparables, clear walk-away terms, and a staged offer ladder designed to close at or below the market ceiling.</div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section>
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-sub">Subject property</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Living Area</div>
            <div class="fact-value">7,098 sq ft</div>
            <div class="fact-sub">Estate-class inventory</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Classification</div>
            <div class="fact-value">Estate</div>
            <div class="fact-sub">Luxury tier</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Transaction Type</div>
            <div class="fact-value">Purchase</div>
            <div class="fact-sub">Owner-occupied intent</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Posture</div>
            <div class="fact-value">Patient Buyer</div>
            <div class="fact-sub">Discipline over urgency</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Target Close</div>
            <div class="fact-value">45–60 Days</div>
            <div class="fact-sub">After accepted offer</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES + OFFER LADDER -->
      <section>
        <h2 class="nu-section-title">Objectives <span>&amp; Offer Ladder</span></h2>
        <div class="two-col">
          <div>
            <div class="strategy-card">
              <h3><span class="num">01</span> Primary Objective</h3>
              <p>Acquire 4505 Buttewoods at a price and on terms that preserve capital, protect liquidity for ongoing Norris Utilities® operations, and leave room for expected closing costs, inspections, and deferred maintenance on a 7,098 sq ft estate.</p>
            </div>
            <div class="strategy-card">
              <h3><span class="num">02</span> Secondary Objective</h3>
              <p>Secure seller-friendly terms that make the offer attractive without overpaying — a clean earnest money commitment, a realistic close window, and a short, professional inspection period.</p>
            </div>
            <div class="strategy-card">
              <h3><span class="num">03</span> Non-Negotiables</h3>
              <ul>
                <li>Financing &amp; appraisal contingency remain intact through agreed period</li>
                <li>Full inspection period honored — no waiver under pressure</li>
                <li>Clear, marketable title delivered at closing</li>
                <li>Written seller disclosures on known defects, prior repairs, and any pending claims</li>
              </ul>
            </div>
          </div>

          <aside class="offer-ladder">
            <h3>Offer Ladder (Staged)</h3>
            <div class="offer-row">
              <div class="offer-step">1</div>
              <div class="offer-label">Opening Offer
                <small>Anchor low — leave room to move</small>
              </div>
              <div class="offer-amount">~88% of ask</div>
            </div>
            <div class="offer-row">
              <div class="offer-step">2</div>
              <div class="offer-label">First Counter
                <small>Move only on verified data</small>
              </div>
              <div class="offer-amount">~92% of ask</div>
            </div>
            <div class="offer-row">
              <div class="offer-step">3</div>
              <div class="offer-label">Final Number
                <small>Walk-away ceiling — firm</small>
              </div>
              <div class="offer-amount">~95% of ask</div>
            </div>
            <div class="offer-row">
              <div class="offer-step">✕</div>
              <div class="offer-label">Walk Away
                <small>Above ceiling, or bad terms</small>
              </div>
              <div class="offer-amount">No deal</div>
            </div>
            <p style="margin-top:14px; font-size:0.82rem; color:#555; line-height:1.5;">
              Ladder anchors to the verified fair-market range (see Comp Analysis). Each step requires a reciprocal concession from seller — never move twice without movement back.
            </p>
          </aside>
        </div>
      </section>

      <!-- COMP ANALYSIS PLAN -->
      <section>
        <h2 class="nu-section-title">Comp <span>Analysis Plan</span></h2>
        <table class="terms-table">
          <thead>
            <tr>
              <th>Data Point</th>
              <th>Source / Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recent sold comps — 6,000–8,500 sq ft within 2 miles</td>
              <td>Pull last 180 days via licensed realtor / MLS</td>
              <td><span class="chip chip-open">To Request</span></td>
            </tr>
            <tr>
              <td>Active &amp; pending listings in the same tier</td>
              <td>Identify competing inventory &amp; days-on-market trend</td>
              <td><span class="chip chip-open">To Request</span></td>
            </tr>
            <tr>
              <td>Prior sale history on 4505 Buttewoods</td>
              <td>County records — price, year, delta</td>
              <td><span class="chip chip-open">To Pull</span></td>
            </tr>
            <tr>
              <td>Tax appraisal vs. asking price</td>
              <td>Public assessor records</td>
              <td><span class="chip chip-open">To Pull</span></td>
            </tr>
            <tr>
              <td>Days on market for current listing</td>
              <td>Listing platform / agent</td>
              <td><span class="chip chip-warn">Track Weekly</span></td>
            </tr>
            <tr>
              <td>Any prior price reductions</td>
              <td>Listing history</td>
              <td><span class="chip chip-warn">Track Weekly</span></td>
            </tr>
            <tr>
              <td>Seller motivation signals</td>
              <td>Agent conversation, relocation cues, estate/divorce flags</td>
              <td><span class="chip chip-action">Gather Now</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LEVERAGE FACTORS -->
      <section>
        <h2 class="nu-section-title">Leverage <span>Factors</span></h2>
        <div class="leverage-grid">
          <div class="leverage-item">
            <h4>Days on Market</h4>
            <p>Every week the listing sits without a credible offer strengthens the buyer's position. Document &amp; reference tactfully during counters.</p>
          </div>
          <div class="leverage-item">
            <h4>Cash or Strong Financing</h4>
            <p>Pre-approval letter in hand — or proof of funds for a cash component — reduces seller risk and justifies a lower price.</p>
          </div>
          <div class="leverage-item">
            <h4>Clean Contract</h4>
            <p>Short inspection window (10 business days), reasonable closing window, minimal seller concessions requested — clean terms win negotiations.</p>
          </div>
          <div class="leverage-item">
            <h4>Comparable Sales</h4>
            <p>Written comp sheet attached to the counter — lets the seller's agent justify the lower number back to their client.</p>
          </div>
          <div class="leverage-item">
            <h4>Condition Findings</h4>
            <p>Any inspection finding — roof, HVAC, foundation, pool — is a second negotiation lever after the first price is accepted.</p>
          </div>
          <div class="leverage-item">
            <h4>Quiet Professional Tone</h4>
            <p>No drama, no ultimatums, no ego — written, concise, respectful. Keeps the door open for one more round when needed.</p>
          </div>
        </div>
      </section>

      <!-- KEY DEAL TERMS -->
      <section>
        <h2 class="nu-section-title">Key <span>Deal Terms</span></h2>
        <table class="terms-table">
          <tbody>
            <tr>
              <td>Earnest Money Deposit</td>
              <td>1% of offer price — held in escrow with licensed title company. Reasonable signal of seriousness without over-exposure.</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>10 business days from binding acceptance — covers general, HVAC, roof, structural, pool/well/septic (if applicable).</td>
            </tr>
            <tr>
              <td>Financing Contingency</td>
              <td>21 days from binding acceptance to obtain loan commitment, or longer if a jumbo/portfolio product is needed.</td>
            </tr>
            <tr>
              <td>Appraisal Contingency</td>
              <td>Retain appraisal contingency; do not waive. If appraisal comes in short, right to renegotiate or terminate.</td>
            </tr>
            <tr>
              <td>Closing Window</td>
              <td>45–60 days after binding acceptance — accommodates underwriting on a large estate loan.</td>
            </tr>
            <tr>
              <td>Seller Disclosures</td>
              <td>Written property disclosures, prior insurance claims, known defects, renovation/permit history required at offer.</td>
            </tr>
            <tr>
              <td>Title &amp; Survey</td>
              <td>Title insurance through buyer-selected firm. Current survey requested from seller; new survey ordered if unavailable.</td>
            </tr>
            <tr>
              <td>Possession</td>
              <td>At funding — no post-closing occupancy unless rent-back is clearly priced and time-limited.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section>
        <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-day">Days 1–3 — Data</div>
            <div class="timeline-task">Assemble verified comps, tax records, prior sale history</div>
            <div class="timeline-detail">Engage buyer's agent. Pull MLS &amp; county records. Draft one-page comp sheet to attach to opening offer.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Days 4–5 — Financing</div>
            <div class="timeline-task">Lock pre-approval letter &amp; proof-of-funds</div>
            <div class="timeline-detail">Coordinate with lender on pre-approval at the walk-away ceiling number, not the opening offer — prevents lender letter leaking the max.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 6 — Opening Offer</div>
            <div class="timeline-task">Submit written offer at opening-ladder number</div>
            <div class="timeline-detail">Attach comp sheet. Short, professional cover memo. 48-hour response window.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Days 7–10 — Counter Phase</div>
            <div class="timeline-task">Respond only on written counter — no verbal movement</div>
            <div class="timeline-detail">Move only one ladder step per seller concession. Reinforce terms (earnest money, close window) as non-price value to seller.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Days 11–14 — Binding Acceptance</div>
            <div class="timeline-task">Executed contract, earnest money wired, inspections ordered</div>
            <div class="timeline-detail">Title company opened, inspectors scheduled, lender submits file.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Days 15–25 — Inspection Leverage</div>
            <div class="timeline-task">Complete inspections; second-round negotiation on findings</div>
            <div class="timeline-detail">Prioritize health, safety, structural, and mechanical items. Request credit at closing over seller-performed repairs.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Days 26–45 — Underwriting</div>
            <div class="timeline-task">Appraisal, underwriting, clear-to-close</div>
            <div class="timeline-detail">Monitor appraisal — reserve right to renegotiate if short. Assemble closing funds; review CD 3+ days before signing.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 46–60 — Close</div>
            <div class="timeline-task">Fund, record, take possession</div>
            <div class="timeline-detail">Final walk-through within 24 hours of closing. Confirm all negotiated repairs/credits on settlement statement.</div>
          </div>
        </div>
      </section>

      <!-- WALK-AWAY -->
      <section>
        <h2 class="nu-section-title">Walk-Away <span>Discipline</span></h2>
        <p style="margin-bottom:14px; color:#555;">A disciplined buyer wins the negotiation before the first offer goes in — by deciding in advance what ends the conversation.</p>
        <div class="walkaway">
          <h3>Deal-Breakers — Immediate Walk</h3>
          <ul>
            <li>Seller refuses written property disclosures</li>
            <li>Seller refuses appraisal or financing contingency on a financed portion</li>
            <li>Title issues that cannot be cured before closing</li>
            <li>Structural, foundation, or major environmental finding the seller will not address or credit</li>
            <li>Any demand that pushes price above the walk-away ceiling on the offer ladder</li>
            <li>Pressure tactics to waive inspection or shorten the review window below 10 business days</li>
          </ul>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section>
        <div class="next-actions">
          <h2>Aaron&apos;s Next Actions</h2>
          <ol>
            <li><strong>Engage buyer&apos;s agent</strong> and request comps, tax records, and listing history on 4505 Buttewoods within 3 business days.</li>
            <li><strong>Pre-approval letter</strong> pulled with lender — amount set to the walk-away ceiling, not the opening offer.</li>
            <li><strong>Set the three ladder numbers</strong> (opening, first counter, walk-away) in writing before any verbal conversation with the listing agent.</li>
            <li><strong>Draft opening offer</strong> with comp sheet attached, 48-hour response window, and clean terms.</li>
            <li><strong>Pre-line inspectors</strong> — general, structural, HVAC, roof — so binding acceptance triggers immediate scheduling.</li>
            <li><strong>Log every movement</strong> (price, terms, concessions) in the negotiation file — protects leverage in later rounds.</li>
            <li><strong>Re-read walk-away list</strong> before every counter. The discipline is the strategy.</li>
          </ol>
        </div>
      </section>

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
    <div class="nu-footer-confidential">Confidential — Prepared for Aaron C. Norris — Acquisition Brief 4505 Buttewoods</div>
  </footer>

</body>
</html>