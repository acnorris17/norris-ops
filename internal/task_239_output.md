<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition Strategy — Norris Utilities®</title>
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
      --nu-success: #0A8F3C;
      --nu-warning: #C98200;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
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
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.18em;
      font-size: 0.78rem;
      text-transform: uppercase;
    }

    /* GHOST PHOENIX WATERMARK on header */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
      top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* INTRO BLOCK */
    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
      padding: 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .doc-meta-item {
      display: flex;
      flex-direction: column;
    }
    .doc-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 4px;
    }
    .doc-meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION TITLES */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.65rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      letter-spacing: 0.01em;
    }
    .nu-section-title .kicker {
      color: var(--nu-blue);
    }
    .nu-section-title .body {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-lead {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 820px;
    }

    /* PROPERTY SNAPSHOT GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .property-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .property-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .property-card-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 8px;
    }
    .property-card-value {
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 4px;
    }
    .property-card-note {
      font-size: 0.82rem;
      color: #666;
    }

    /* PRICING LADDER */
    .offer-ladder {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .offer-row {
      display: grid;
      grid-template-columns: 60px 1fr 160px 180px;
      gap: 16px;
      padding: 18px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .offer-row:last-child { border-bottom: none; }
    .offer-row.header {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 22px;
    }
    .offer-step {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
    }
    .offer-row.header .offer-step { color: var(--nu-cyan); }
    .offer-label {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .offer-sub {
      display: block;
      font-weight: 400;
      font-size: 0.85rem;
      color: #666;
      margin-top: 2px;
    }
    .offer-amount {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      text-align: right;
    }
    .offer-ppsf {
      font-weight: 700;
      color: var(--nu-blue);
      text-align: right;
      font-size: 0.95rem;
    }
    .offer-row.header .offer-amount,
    .offer-row.header .offer-ppsf { color: var(--nu-white); font-weight: 700; }
    .offer-row.highlight {
      background: linear-gradient(90deg, rgba(6,208,255,0.08) 0%, rgba(0,0,255,0.04) 100%);
      border-left: 4px solid var(--nu-blue);
      padding-left: 18px;
    }

    /* STRATEGY STEPS */
    .strategy-list {
      list-style: none;
      counter-reset: strategy;
      margin: 0;
      padding: 0;
    }
    .strategy-list li {
      counter-increment: strategy;
      position: relative;
      padding: 18px 20px 18px 70px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .strategy-list li::before {
      content: counter(strategy);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 38px; height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 50%;
    }
    .strategy-list strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 1.05rem;
    }
    .strategy-list span {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }

    /* LEVERAGE POINTS */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .leverage-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      position: relative;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .leverage-card-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 12px;
    }
    .tag-our { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .tag-their { background: rgba(201,130,0,0.12); color: var(--nu-warning); }
    .leverage-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      font-size: 1.1rem;
    }
    .leverage-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* CONTINGENCY BADGES */
    .contingency-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 26px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.02em;
    }

    /* WALK-AWAY CALLOUT */
    .walkaway {
      background: linear-gradient(135deg, #fff8e1 0%, #fff4d1 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 24px 28px;
      border-radius: 4px;
      margin-top: 20px;
    }
    .walkaway h4 {
      color: var(--nu-warning);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.95rem;
      margin-bottom: 10px;
    }
    .walkaway p {
      color: var(--nu-dark-text);
      font-size: 1.02rem;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      border-left: 2px solid var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -35px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-action {
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 3px;
    }
    .timeline-detail {
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }

    /* NEXT STEPS */
    .next-steps {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .next-steps h4 {
      color: var(--nu-cyan);
      font-weight: 900;
      margin-bottom: 14px;
      font-size: 1.2rem;
    }
    .next-steps ul {
      list-style: none;
      padding: 0;
    }
    .next-steps li {
      padding: 8px 0 8px 26px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .next-steps li:last-child { border-bottom: none; }
    .next-steps li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Lato', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      border: none;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .nu-section-title { font-size: 1.35rem; }
      .offer-row {
        grid-template-columns: 1fr;
        gap: 6px;
      }
      .offer-row.header { display: none; }
      .offer-amount, .offer-ppsf { text-align: left; }
      .nu-badge {
        clip-path: none;
        border-radius: 4px;
        padding: 10px 16px;
      }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .property-card, .leverage-card, .strategy-list li { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Acquisition Strategy Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="doc-meta-label">Property</span>
          <span class="doc-meta-value">4505 Buttewoods</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Size</span>
          <span class="doc-meta-value">7,098 sq ft</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Prepared For</span>
          <span class="doc-meta-value">Aaron C. Norris</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Date</span>
          <span class="doc-meta-value">April 23, 2026</span>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Objective</span> <span class="body">— Negotiate Purchase</span>
        </h2>
        <p class="nu-section-lead">
          Acquire the 7,098 sq ft estate at 4505 Buttewoods at a price and on terms that protect capital, preserve liquidity for Norris Utilities® working capital needs, and leave a clear exit if the deal no longer serves the business. This brief is the negotiation playbook — offer ladder, leverage points, contingencies, timeline, and walk-away line.
        </p>
      </section>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Property</span> <span class="body">Snapshot</span>
        </h2>
        <p class="nu-section-lead">
          Key facts that anchor every dollar figure in the offer ladder below. Any fact marked "confirm" must be verified by independent source (tax records, survey, inspection) before a written offer is delivered.
        </p>
        <div class="property-grid">
          <div class="property-card">
            <div class="property-card-label">Address</div>
            <div class="property-card-value">4505 Buttewoods</div>
            <div class="property-card-note">Verify full legal address and parcel ID before offer</div>
          </div>
          <div class="property-card">
            <div class="property-card-label">Living Area</div>
            <div class="property-card-value">7,098 sq ft</div>
            <div class="property-card-note">Confirm via appraisal district records</div>
          </div>
          <div class="property-card">
            <div class="property-card-label">Use Classification</div>
            <div class="property-card-value">Estate Residence</div>
            <div class="property-card-note">Confirm zoning and any deed restrictions</div>
          </div>
          <div class="property-card">
            <div class="property-card-label">Transaction Type</div>
            <div class="property-card-value">Direct Negotiation</div>
            <div class="property-card-note">Off-market or listed — strategy adapts below</div>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Offer</span> <span class="body">Ladder</span>
        </h2>
        <p class="nu-section-lead">
          Price per square foot is the honest math. Final dollar amounts should be set after independent comparable sales are pulled for Buttewoods and the surrounding submarket. These tiers illustrate the discipline: open low, anchor on data, step up slowly, and stop at the ceiling.
        </p>

        <div class="offer-ladder">
          <div class="offer-row header">
            <div class="offer-step">Step</div>
            <div class="offer-label">Position &amp; Purpose</div>
            <div class="offer-amount">Price / Sq Ft</div>
            <div class="offer-ppsf">Est. Total (7,098 sf)</div>
          </div>

          <div class="offer-row">
            <div class="offer-step">1</div>
            <div class="offer-label">Opening Offer
              <span class="offer-sub">Establish anchor well below market, justified with comps and condition notes.</span>
            </div>
            <div class="offer-amount">~85%<br>of market $/sf</div>
            <div class="offer-ppsf">Anchor Low</div>
          </div>

          <div class="offer-row">
            <div class="offer-step">2</div>
            <div class="offer-label">First Counter
              <span class="offer-sub">Move modestly; trade price for terms (inspection window, closing date, earnest money).</span>
            </div>
            <div class="offer-amount">~90%<br>of market $/sf</div>
            <div class="offer-ppsf">Reciprocated Concession</div>
          </div>

          <div class="offer-row highlight">
            <div class="offer-step">3</div>
            <div class="offer-label">Target Landing Zone
              <span class="offer-sq">This is where the deal should close if both sides negotiate in good faith.</span>
            </div>
            <div class="offer-amount">~93–96%<br>of market $/sf</div>
            <div class="offer-ppsf">Target Close</div>
          </div>

          <div class="offer-row">
            <div class="offer-step">4</div>
            <div class="offer-label">Ceiling (Best &amp; Final)
              <span class="offer-sub">Only if appraisal, inspection, and comps all confirm value. Seller must give something material in return.</span>
            </div>
            <div class="offer-amount">≤ 100%<br>of market $/sf</div>
            <div class="offer-ppsf">Do Not Exceed</div>
          </div>

          <div class="offer-row">
            <div class="offer-step">5</div>
            <div class="offer-label">Walk-Away
              <span class="offer-sub">Any price above ceiling or terms that remove contingencies Norris Utilities® requires.</span>
            </div>
            <div class="offer-amount">Above<br>Ceiling</div>
            <div class="offer-ppsf">Walk</div>
          </div>
        </div>

        <div class="walkaway">
          <h4>Walk-Away Line</h4>
          <p>
            The deal must pencil with real comparable sales and a current inspection report in hand. If the seller will not move off a price that exceeds the ceiling, or will not accept standard financing, inspection, and appraisal contingencies, the correct answer is to walk. There will be another property. Capital preserved for Norris Utilities® working inventory is always the higher-return use.
          </p>
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Negotiation</span> <span class="body">Strategy — Step by Step</span>
        </h2>
        <p class="nu-section-lead">
          Run this sequence in order. Do not skip steps. Each step either advances the deal or removes a risk; neither is optional.
        </p>
        <ol class="strategy-list">
          <li>
            <strong>Pull Independent Comps First</strong>
            <span>Before any conversation about price, pull at least five recent sales of 5,500+ sq ft homes within a defined radius. Note price per square foot, days on market, and concessions. This is the anchor for every number in the offer ladder.</span>
          </li>
          <li>
            <strong>Order an Independent Inspection Early</strong>
            <span>Condition drives price. A detailed inspection report — roof, foundation, HVAC, electrical, plumbing, moisture — produces line-item reasons to negotiate. Budget for this expense up front; it pays back at the table.</span>
          </li>
          <li>
            <strong>Understand the Seller's Motivation</strong>
            <span>Time pressure, divorce, estate sale, tax deadline, relocation — every seller has a reason. Ask open questions, then listen. The motivation dictates which terms carry real weight (speed of close, leaseback, flexibility on earnest money).</span>
          </li>
          <li>
            <strong>Open Low, Justified — Never Insulting</strong>
            <span>Deliver the opening offer in writing with a one-page summary of comps and inspection items. A justified low offer is respected. An unjustified low offer ends the conversation.</span>
          </li>
          <li>
            <strong>Negotiate Terms, Not Just Price</strong>
            <span>Closing date, earnest money, inspection window, financing contingency, appraisal contingency, title, survey, repair credits, fixtures included. Every one of these has dollar value. Trade where it costs you little and earns the seller something they want.</span>
          </li>
          <li>
            <strong>Put Silence to Work</strong>
            <span>After every counter, wait. Do not fill silence with new concessions. Let the seller's side move next. Patience is leverage.</span>
          </li>
          <li>
            <strong>Escalate Only Against Hard Evidence</strong>
            <span>Each upward move needs justification: a new comp, a revised appraisal, a removed repair credit. Do not move because the other side is pushing — move because the math changed.</span>
          </li>
          <li>
            <strong>Document Every Offer in Writing</strong>
            <span>Verbal numbers disappear. Every offer and counter goes on paper through the attorney or agent of record. A paper trail protects the deal and protects Norris Utilities®.</span>
          </li>
        </ol>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Leverage</span> <span class="body">— Ours and Theirs</span>
        </h2>
        <p class="nu-section-lead">
          Know both sides of the table before the first number is said. The leverage you hold is only useful if the other side can see it, and the leverage they hold only hurts you if you ignore it.
        </p>
        <div class="leverage-grid">
          <div class="leverage-card">
            <span class="leverage-card-tag tag-our">Our Leverage</span>
            <h4>Cash-Ready Buyer</h4>
            <p>A funded buyer with clean credit and a short close window is worth real dollars to a motivated seller. Use this to negotiate price down, not to justify moving up.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-tag tag-our">Our Leverage</span>
            <h4>No Contingent Sale</h4>
            <p>The offer is not dependent on selling another property. That removes a major deal-killer and is worth 1–3% in price.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-tag tag-our">Our Leverage</span>
            <h4>Willingness to Walk</h4>
            <p>Norris Utilities® working capital is the highest-return alternative use of these dollars. Any deal that does not pencil loses to that alternative. That discipline is the strongest negotiating position in any room.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-tag tag-their">Seller Leverage</span>
            <h4>Unique Inventory</h4>
            <p>7,098 sq ft estates on Buttewoods are not fungible. Scarcity is real. Acknowledge it, but do not pay a premium for the address alone.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-tag tag-their">Seller Leverage</span>
            <h4>Multiple Buyers</h4>
            <p>If the property is listed and competitive, treat competing offers as fact only when confirmed in writing. Otherwise assume they are bluff until proven.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-tag tag-their">Seller Leverage</span>
            <h4>Time on Our Side or Theirs</h4>
            <p>If the seller is not under time pressure, patience shifts the leverage to them. If they are, patience shifts it back. Find out which applies before making step two.</p>
          </div>
        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Required</span> <span class="body">Contingencies</span>
        </h2>
        <p class="nu-section-lead">
          Any offer submitted on 4505 Buttewoods must carry these protections. Removing any of them is a material concession and must be traded for price or terms of equal value.
        </p>
        <div class="contingency-wrap">
          <span class="nu-badge">Financing Contingency</span>
          <span class="nu-badge">Appraisal Contingency</span>
          <span class="nu-badge">Inspection Window</span>
          <span class="nu-badge">Clear Title &amp; Survey</span>
          <span class="nu-badge">Repair Credit Right</span>
          <span class="nu-badge">Earnest Money Protection</span>
          <span class="nu-badge">Closing Date Flexibility</span>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Deal</span> <span class="body">Timeline</span>
        </h2>
        <p class="nu-section-lead">
          A disciplined cadence keeps the negotiation moving without ceding urgency to the seller. Each milestone is a go/no-go decision point.
        </p>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-day">Day 0 — Preparation</div>
            <div class="timeline-action">Comps pulled, financing pre-approved, attorney engaged</div>
            <div class="timeline-detail">Nothing leaves the office until the math is anchored in data and the money is ready.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 1–3 — Opening Offer</div>
            <div class="timeline-action">Written opening delivered with comp summary</div>
            <div class="timeline-detail">Signals seriousness without giving away the ceiling. Expect an immediate counter.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 3–10 — Counter Exchange</div>
            <div class="timeline-action">Two rounds of counters at most before terms are engaged</div>
            <div class="timeline-detail">Price movement must be paired with term movement from the seller, or the math stops moving.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 10–14 — Inspection Window</div>
            <div class="timeline-action">Full inspection and repair credit negotiation</div>
            <div class="timeline-detail">Findings either reduce price, move repair credits, or trigger the walk-away clause.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 14–30 — Appraisal &amp; Financing</div>
            <div class="timeline-action">Third-party valuation and loan lock</div>
            <div class="timeline-detail">If appraisal comes in low, the contract is renegotiated or terminated per contingency.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-day">Day 30–45 — Close or Walk</div>
            <div class="timeline-action">Final walkthrough, title clear, funds wired</div>
            <div class="timeline-detail">Either the property transfers at an honest number, or the earnest money returns and the search resumes.</div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="kicker">Immediate</span> <span class="body">Next Steps</span>
        </h2>
        <div class="next-steps">
          <h4>Before Any Offer Is Made</h4>
          <ul>
            <li>Confirm full legal address, parcel ID, and ownership of record for 4505 Buttewoods</li>
            <li>Pull five recent comparable sales within a defined radius and price-per-sq-ft range</li>
            <li>Engage real estate attorney to draft standard purchase agreement with all seven contingencies</li>
            <li>Secure written mortgage pre-approval at target purchase range</li>
            <li>Schedule independent property inspection and budget for inspection fees</li>
            <li>Identify seller motivation through listing agent conversation or direct outreach</li>
            <li>Lock the ceiling price in writing before the first conversation with the other side</li>
          </ul>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <hr class="nu-footer-divider">
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>