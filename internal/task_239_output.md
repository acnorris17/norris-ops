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
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #16794B;
      --nu-warn: #B45309;
      --nu-danger: #B91C1C;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* WHITE CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* PAGE TITLE BAR */
    .nu-title-bar {
      background: var(--nu-white);
      padding: 40px 40px 20px;
      text-align: center;
      position: relative;
    }
    .nu-eyebrow {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-meta {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      opacity: 0.8;
    }
    .nu-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 20px 40px 60px;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a1a66 100%);
      color: var(--nu-white);
      padding: 40px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 10px 30px rgba(0,0,51,0.2);
    }
    .snapshot h2 {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-cyan);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .snapshot .address {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-white);
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .snapshot .locale {
      font-size: 1rem;
      color: rgba(255,255,255,0.75);
      margin-bottom: 20px;
    }
    .snapshot-desc {
      font-size: 0.95rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.92);
    }
    .offer-box {
      background: rgba(6, 208, 255, 0.08);
      border: 1px solid rgba(6, 208, 255, 0.35);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .offer-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .offer-amount {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-white);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .offer-note {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.7);
      font-style: italic;
      margin-top: 6px;
    }

    /* STAT STRIP */
    .stat-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 40px;
    }
    .stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .stat-value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-body-text);
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-sub {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      opacity: 0.75;
      margin-bottom: 22px;
    }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .val-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .val-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .val-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .val-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .val-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    .val-table tfoot td {
      background: #0a0e5c;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
    }

    /* ANCHOR / TARGET / WALK */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }
    .rung {
      background: var(--nu-white);
      border-top: 4px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .rung.anchor { border-top-color: var(--nu-success); }
    .rung.target { border-top-color: var(--nu-blue); background: #F0F3FF; }
    .rung.walk { border-top-color: var(--nu-danger); }
    .rung-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .rung.anchor .rung-label { color: var(--nu-success); }
    .rung.target .rung-label { color: var(--nu-blue); }
    .rung.walk .rung-label { color: var(--nu-danger); }
    .rung-price {
      font-weight: 900;
      font-size: 1.9rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1;
    }
    .rung-desc {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* STEP CARDS (strategy) */
    .step-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      display: flex;
      gap: 16px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step-num {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step-body h4 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--nu-body-text);
    }

    /* LEVERAGE TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .list-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
    }
    .list-card.ours {
      border-left: 4px solid var(--nu-success);
    }
    .list-card.theirs {
      border-left: 4px solid var(--nu-warn);
    }
    .list-card h4 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 14px;
      color: var(--nu-dark-text);
    }
    .list-card.ours h4 { color: var(--nu-success); }
    .list-card.theirs h4 { color: var(--nu-warn); }
    .list-card ul {
      list-style: none;
      padding: 0;
    }
    .list-card li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.92rem;
      line-height: 1.55;
    }
    .list-card li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 8px; height: 8px;
      border-radius: 50%;
    }
    .list-card.ours li::before { background: var(--nu-success); }
    .list-card.theirs li::before { background: var(--nu-warn); }

    /* DUE DILIGENCE CHECKLIST */
    .check-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .check-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 16px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
      font-size: 0.9rem;
    }
    .check-box {
      flex-shrink: 0;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 1px;
    }
    .check-item strong { color: var(--nu-dark-text); display: block; margin-bottom: 2px; }
    .check-item span { color: var(--nu-body-text); font-size: 0.85rem; }

    /* SCRIPT */
    .script-block {
      background: #0a0e5c;
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      position: relative;
    }
    .script-block::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 18px;
      font-family: Georgia, serif;
      font-size: 5rem;
      color: var(--nu-cyan);
      opacity: 0.3;
      line-height: 1;
    }
    .script-block p {
      font-size: 0.98rem;
      line-height: 1.75;
      margin-bottom: 14px;
    }
    .script-block p:last-child { margin-bottom: 0; }
    .script-block em { color: var(--nu-cyan); font-style: normal; font-weight: 700; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding-bottom: 20px;
    }
    .tl-item:last-child { padding-bottom: 0; }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -27px; top: 4px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .tl-day {
      font-weight: 900;
      font-size: 0.82rem;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .tl-body {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 18px;
      font-size: 0.9rem;
      line-height: 1.55;
    }
    .tl-body strong { color: var(--nu-dark-text); }

    /* NOTE / CALLOUT */
    .callout {
      background: linear-gradient(135deg, #FFF9E6 0%, #FFF2CC 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 20px 24px;
      border-radius: 6px;
      font-size: 0.93rem;
      line-height: 1.65;
      margin-bottom: 40px;
    }
    .callout strong { color: #5C4A10; display: block; margin-bottom: 6px; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-seal {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    /* RESPONSIVE */
    @media (max-width: 960px) {
      .snapshot { grid-template-columns: 1fr; }
      .stat-strip { grid-template-columns: repeat(2, 1fr); }
      .price-ladder { grid-template-columns: 1fr; }
      .step-grid { grid-template-columns: 1fr; }
      .two-col { grid-template-columns: 1fr; }
      .check-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-container { padding: 14px 20px 40px; }
      .stat-strip { grid-template-columns: 1fr 1fr; }
      .offer-amount { font-size: 2rem; }
      .snapshot .address { font-size: 1.5rem; }
      .val-table th, .val-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step, .list-card, .stat-card, .val-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- TITLE BAR -->
  <div class="nu-title-bar">
    <div class="nu-eyebrow">Real Estate Negotiation Playbook</div>
    <h1 class="nu-page-title"><span>4505 Buttewoods</span> Estate Acquisition</h1>
    <div class="nu-meta">
      <strong>Property:</strong> 7,098 sq ft single-family estate &nbsp;·&nbsp;
      <strong>Prepared for:</strong> Aaron C. Norris &nbsp;·&nbsp;
      <strong>Date:</strong> April 23, 2026
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- SNAPSHOT -->
      <section class="snapshot">
        <div>
          <h2>Property Snapshot</h2>
          <div class="address">4505 Buttewoods</div>
          <div class="locale">7,098 sq ft estate &nbsp;·&nbsp; Residential — Birmingham metro area</div>
          <p class="snapshot-desc">
            The negotiation objective is to acquire this 7,098 sq ft estate at a price and on terms that reflect true condition, deferred maintenance, and current market comparables — not seller asking price. This playbook opens with an anchored offer of $900,000, defines a target close in the mid-range of comparable sales, and sets a written walk-away floor before any conversation with the seller. Every concession we make must be traded for something, and every inspection finding must translate into a credit request in writing.
          </p>
        </div>
        <div class="offer-box">
          <div class="offer-label">Opening Offer</div>
          <div class="offer-amount">$900,000</div>
          <div class="offer-note">Anchor set — concessions must be earned, never given</div>
        </div>
      </section>

      <!-- STAT STRIP -->
      <section class="stat-strip">
        <div class="stat-card">
          <div class="stat-value">7,098</div>
          <div class="stat-label">Sq Ft</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$126.80</div>
          <div class="stat-label">$/Sq Ft @ Opening</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">3–5%</div>
          <div class="stat-label">Target Net Concession</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">30 Days</div>
          <div class="stat-label">Target Close Window</div>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Price</span> Ladder — Three Numbers Set in Advance</h2>
        <p class="nu-section-sub">Memorize these three numbers before the first call. Never deviate without stepping away to recalculate.</p>
        <div class="price-ladder">
          <div class="rung anchor">
            <div class="rung-label">Anchor — Opening</div>
            <div class="rung-price">$900,000</div>
            <div class="rung-desc">First written offer. Set low enough to leave room for counters, high enough to keep the seller at the table. Paired with strong earnest money and a 30-day close.</div>
          </div>
          <div class="rung target">
            <div class="rung-label">Target — Close</div>
            <div class="rung-price">$945,000</div>
            <div class="rung-desc">The number we settle at after 2–3 rounds. Justified by comps, inspection findings, and our clean-terms concession. Anything below this is a win.</div>
          </div>
          <div class="rung walk">
            <div class="rung-label">Walk-Away — Floor</div>
            <div class="rung-price">$975,000</div>
            <div class="rung-desc">Hard ceiling. Above this, the math stops working. Written down, signed off, and non-negotiable in the heat of the deal.</div>
          </div>
        </div>
      </section>

      <div class="callout">
        <strong>⚠ Discipline Note</strong>
        Write your walk-away number on paper before the first call. The moment you exceed it verbally, you own it. The seller will ask for concessions — trade, don't give. Every dollar off the price should buy a day of close, an inspection credit, a fixture, or an earlier possession date.
      </div>

      <!-- VALUATION TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Valuation</span> Framework</h2>
        <p class="nu-section-sub">Build the offer from the ground up — not from the asking price. Comparable sales, adjusted for condition, set the real ceiling.</p>
        <table class="val-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Basis</th>
              <th class="num">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Base Comp Average</strong></td>
              <td>3–5 closed sales within 1 mile, past 6 months, 6,500–7,500 sq ft</td>
              <td class="num">Pull before offer</td>
            </tr>
            <tr>
              <td>Condition Adjustment</td>
              <td>Age, roof, HVAC, foundation — request seller disclosure form</td>
              <td class="num">–2% to –8%</td>
            </tr>
            <tr>
              <td>Deferred Maintenance Credit</td>
              <td>Pending H2O Waterproofing findings (written confirmation required)</td>
              <td class="num">–$8K to –$25K</td>
            </tr>
            <tr>
              <td>Days-on-Market Leverage</td>
              <td>If on market &gt; 60 days, seller motivation rises</td>
              <td class="num">–1% to –4%</td>
            </tr>
            <tr>
              <td>Clean-Terms Premium</td>
              <td>Cash or pre-approved, 30-day close, minimal contingencies</td>
              <td class="num">+1% to +3%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Reconciled Target Close</td>
              <td class="num">$945,000</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <!-- STRATEGY STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> Sequence — Six Moves</h2>
        <p class="nu-section-sub">Each move earns the next. Do not skip sequence steps; they build leverage compoundingly.</p>
        <div class="step-grid">

          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Pull Comps &amp; Days-on-Market</h4>
              <p>Request the full CMA from buyer's agent: 3–5 closed sales within 1 mile, past 6 months, similar square footage. Note days-on-market for 4505 Buttewoods — longer market time means more leverage.</p>
            </div>
          </div>

          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Confirm H2O Waterproofing in Writing</h4>
              <p>Before submitting any offer, get the H2O Waterproofing findings in writing — scope, cost, and warranty terms. Every dollar of documented defect becomes a line-item credit request, not a vague "the house needs work" concession.</p>
            </div>
          </div>

          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Submit Anchored Written Offer</h4>
              <p>Lead with $900,000 in writing. Pair with strong earnest money (1.5–2%), 30-day close, financing pre-approval, and a concise cover letter. Written anchors weigh 3× verbal ones.</p>
            </div>
          </div>

          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <h4>Silence After the Offer</h4>
              <p>Do not call to "check in" or apologize for the number. Let the offer sit. The seller's agent will respond within 48–72 hours. Every hour of silence shifts perceived leverage to us.</p>
            </div>
          </div>

          <div class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <h4>Trade, Don't Give</h4>
              <p>When the counter arrives, raise the price only in exchange for terms: shorter close, as-is clause removal, inspection credits, appliance retention, or escrow holdback for H2O repairs. Every dollar up buys something back.</p>
            </div>
          </div>

          <div class="step">
            <div class="step-num">6</div>
            <div class="step-body">
              <h4>Use Inspection as a Second Negotiation</h4>
              <p>After contract signing, the inspection creates a second negotiation window. Present all findings in writing with contractor estimates attached. Request credit at closing, not seller-completed repairs — cash is cleaner.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- LEVERAGE TWO-COL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Leverage</span> Map — Who Holds What</h2>
        <p class="nu-section-sub">Know the board before the first move. Our leverage compounds when we present it together, not in pieces.</p>
        <div class="two-col">
          <div class="list-card ours">
            <h4>Our Leverage</h4>
            <ul>
              <li>Clean financing — pre-approval letter ready to attach</li>
              <li>Flexible close date — 30 or 45 days at seller's choice</li>
              <li>Willingness to walk — we have documented the floor</li>
              <li>Pending H2O Waterproofing findings — objective defect data</li>
              <li>No home-sale contingency — one less variable for seller</li>
              <li>Serious buyer signal — earnest money above local average</li>
            </ul>
          </div>
          <div class="list-card theirs">
            <h4>Seller's Leverage (Neutralize)</h4>
            <ul>
              <li>Any multiple-offer narrative — ask for proof in writing</li>
              <li>Appraisal confidence — we control appraisal ordering</li>
              <li>Emotional attachment — avoid personal letters, stay transactional</li>
              <li>Time pressure on us — remove by never revealing our timeline</li>
              <li>"Firm" asking price — anchor low in writing first to reframe</li>
              <li>Favorable recent comps — contest with condition-adjusted comps</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Due</span> Diligence Checklist</h2>
        <p class="nu-section-sub">Complete before the offer is written. Every missing item is a risk transferred to us at closing.</p>
        <div class="check-grid">
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Seller disclosure form</strong>
              <span>Known defects, past water intrusion, prior insurance claims</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Title report — preliminary</strong>
              <span>Liens, easements, restrictive covenants</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Property tax history (3 years)</strong>
              <span>Assessed value trajectory, millage, exemptions</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Utility bill averages (12 months)</strong>
              <span>Envelope performance indicator — high bills = insulation issue</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>HOA documents &amp; fees</strong>
              <span>Special assessments, pending litigation, reserve study</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Roof age &amp; last inspection</strong>
              <span>Insurance underwriting driver — required for quote</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>HVAC age &amp; service records</strong>
              <span>Replacement cost — typical $8K–$18K per system</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>H2O Waterproofing written scope</strong>
              <span>Confirmation of work, cost, warranty — directly drives credit ask</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Homeowner insurance quote</strong>
              <span>Pull before offer — Alabama premiums can reshape math</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div>
              <strong>Appraisal contingency language</strong>
              <span>Right to terminate if appraisal is below contract price</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SCRIPT BLOCK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Opening</span> Conversation — Script</h2>
        <p class="nu-section-sub">Use with seller's agent on the first call. Warm, direct, no apologies for the number.</p>
        <div class="script-block">
          <p>"<em>Thank you for the time on 4505 Buttewoods.</em> We've walked the property, pulled comparable sales in the area, and have a written offer ready for you today."</p>
          <p>"<em>The number is $900,000,</em> with 2% earnest money, financing pre-approval attached, a 30-day close, and a standard inspection period. No home-sale contingency."</p>
          <p>"<em>We're serious buyers,</em> and we'd like to get under contract this week. If there's a path to yes, we're ready to move."</p>
          <p><em>— Then stop talking. Do not fill silence. The next speaker concedes.</em></p>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Execution</span> Timeline — 30 Days to Close</h2>
        <p class="nu-section-sub">A disciplined cadence keeps us in control and removes seller stall tactics.</p>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-day">Day 0 — Before Offer</div>
            <div class="tl-body">
              <strong>Pre-offer intake.</strong> Pull comps, review seller disclosures, confirm H2O Waterproofing written scope, lock financing pre-approval, finalize walk-away number on paper.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 1 — Submit</div>
            <div class="tl-body">
              <strong>Written offer delivered at $900,000.</strong> Cover letter + pre-approval + earnest money commitment. Expect 48–72 hour response window.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Days 2–5 — Counter</div>
            <div class="tl-body">
              <strong>Counter cycle.</strong> Work toward $945,000 target. Trade every price increase for terms concessions. Walk away verbally at $975,000 if needed — be prepared to.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Days 6–7 — Contract</div>
            <div class="tl-body">
              <strong>Contract signed.</strong> Open escrow, deposit earnest money, order title insurance. Begin inspection scheduling immediately.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Days 8–15 — Inspection Window</div>
            <div class="tl-body">
              <strong>Full inspection + H2O Waterproofing verification.</strong> Document every finding with contractor estimates. Submit credit request in writing before contingency expires.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Days 16–25 — Appraisal + Underwriting</div>
            <div class="tl-body">
              <strong>Appraisal ordered.</strong> If low, invoke appraisal contingency to renegotiate. Lender underwriting completed in parallel.
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 30 — Close</div>
            <div class="tl-body">
              <strong>Close and fund.</strong> Final walk-through morning of close. Credits applied at settlement, not promised for later.
            </div>
          </div>
        </div>
      </section>

      <div class="callout">
        <strong>Final Rule — The Three-Person Room</strong>
        Every real estate negotiation has three people in the room: the buyer, the seller, and the future version of yourself who has to live with the deal. Negotiate for that third person. If the numbers or the terms don't serve them, walk — and walk without apology. The best deal is often the one we don't make.
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-seal">Norris Utilities® &nbsp;·&nbsp; Birmingham, Alabama &nbsp;·&nbsp; Founded November 2021</div>
  </footer>

</body>
</html>