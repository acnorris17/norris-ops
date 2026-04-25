<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Negotiation — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0a7a3f;
      --nu-warning: #b87a00;
      --nu-danger: #b8002e;
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOCUMENT META */
    .doc-meta {
      max-width: 1200px;
      margin: 0 auto;
      padding: 28px 40px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .doc-title-block { flex: 1; min-width: 280px; }
    .doc-eyebrow {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-stamp {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 10px 16px;
      border-radius: 4px;
      font-size: 0.8rem;
      color: var(--nu-body-text);
    }
    .doc-stamp strong { color: var(--nu-dark-text); display: block; font-weight: 700; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 40px 60px;
    }

    /* PROPERTY HERO CARD */
    .property-hero {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      padding: 32px;
      margin-bottom: 28px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .property-info h2 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .property-info h2 span { color: var(--nu-dark-text); }
    .property-address {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 18px;
    }
    .stat-tile {
      background: var(--nu-light-gray);
      padding: 14px 16px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .stat-tile .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .stat-tile .value {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
    }
    .stat-tile .sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    .price-summary {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .price-summary .label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.12);
    }
    .price-row:last-child { border-bottom: none; }
    .price-row .name { font-weight: 400; color: rgba(255,255,255,0.85); font-size: 0.92rem; }
    .price-row .amt { font-weight: 900; font-size: 1.15rem; }
    .price-row.target { padding-top: 14px; }
    .price-row.target .name { color: var(--nu-cyan); font-weight: 700; }
    .price-row.target .amt { color: var(--nu-cyan); font-size: 1.4rem; }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO-COL GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 28px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 28px;
    }

    /* CARDS */
    .card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .card h3 .badge {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      padding: 3px 9px;
      border-radius: 12px;
      margin-left: 8px;
      font-weight: 700;
      letter-spacing: 0.05em;
      vertical-align: middle;
    }
    .card h3 .badge.gold { background: var(--nu-accent-gold); }
    .card h3 .badge.warn { background: var(--nu-warning); }

    .card ul { list-style: none; padding: 0; }
    .card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .card ul li:last-child { border-bottom: none; }
    .card ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      top: 8px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .card ul li strong { color: var(--nu-dark-text); }

    /* NEGOTIATION LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 14px;
    }
    .rung {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .rung-header {
      padding: 14px 18px;
      color: var(--nu-white);
      font-weight: 900;
      letter-spacing: 0.04em;
    }
    .rung.opener .rung-header { background: linear-gradient(135deg, #0a7a3f 0%, #0a9d50 100%); }
    .rung.target .rung-header { background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%); }
    .rung.walk .rung-header { background: linear-gradient(135deg, #b8002e 0%, #d63056 100%); }
    .rung-amount {
      padding: 18px;
      text-align: center;
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .rung-amount .pct {
      display: block;
      font-size: 0.78rem;
      color: var(--nu-body-text);
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-top: 4px;
    }
    .rung-body {
      padding: 14px 18px;
      font-size: 0.88rem;
      color: var(--nu-body-text);
      min-height: 90px;
    }

    /* TIMELINE */
    .timeline {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .timeline-row {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 18px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: start;
    }
    .timeline-row:last-child { border-bottom: none; }
    .timeline-day {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 8px 12px;
      border-radius: 6px;
      text-align: center;
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
    }
    .timeline-day .num {
      display: block;
      font-size: 1.4rem;
      line-height: 1;
      margin-bottom: 2px;
    }
    .timeline-content h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-content p { font-size: 0.92rem; }

    /* CONTINGENCY TABLE */
    .table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 28px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table tr:last-child td { border-bottom: none; }
    table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .pill.must { background: #ffe1e6; color: var(--nu-danger); }
    .pill.want { background: #fff3d6; color: var(--nu-warning); }
    .pill.nice { background: #d6f0e0; color: var(--nu-success); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 28px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .callout p { font-size: 0.95rem; color: var(--nu-dark-text); }
    .callout p + p { margin-top: 8px; }

    /* SCRIPT BLOCK */
    .script {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .script .who {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .script .line {
      font-style: italic;
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      padding-left: 18px;
      border-left: 3px solid var(--nu-cyan);
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .check-row {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .check-row:last-child { border-bottom: none; }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-text { font-size: 0.95rem; }
    .check-text strong { color: var(--nu-dark-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero { grid-template-columns: 1fr; }
      .grid-2 { grid-template-columns: 1fr; }
      .grid-3 { grid-template-columns: 1fr; }
      .ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 24px 20px 40px; }
      .doc-meta { padding: 20px 20px 0; }
      .doc-title { font-size: 1.5rem; }
      .timeline-row { grid-template-columns: 80px 1fr; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card, .timeline, .table-wrap, .property-hero, .checklist, .script { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
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

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main class="nu-content-area">

    <!-- DOCUMENT META -->
    <div class="doc-meta">
      <div class="doc-title-block">
        <div class="doc-eyebrow">Action Item · Personal · Confidential</div>
        <h1 class="doc-title">Estate Negotiation Strategy <span>— 4505 Buttewoods</span></h1>
      </div>
      <div class="doc-stamp">
        <strong>Prepared:</strong>April 24, 2026<br>
        <strong>Owner:</strong>Aaron C. Norris
      </div>
    </div>

    <div class="container">

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="property-info">
          <h2>Subject <span>Property</span></h2>
          <div class="property-address">4505 Buttewoods · 7,098 sq ft Estate</div>
          <p style="font-size:0.95rem;color:var(--nu-body-text);">
            Single-family estate property targeted for acquisition. Strategy below frames the
            opening offer, target close, and walk-away threshold along with diligence gates
            that must clear before any number goes in writing.
          </p>
          <div class="property-stats">
            <div class="stat-tile">
              <div class="label">Living Area</div>
              <div class="value">7,098</div>
              <div class="sub">square feet</div>
            </div>
            <div class="stat-tile">
              <div class="label">Property Class</div>
              <div class="value">Estate</div>
              <div class="sub">single-family residential</div>
            </div>
            <div class="stat-tile">
              <div class="label">Stage</div>
              <div class="value">Pre-Offer</div>
              <div class="sub">due diligence first</div>
            </div>
            <div class="stat-tile">
              <div class="label">Decision Date</div>
              <div class="value">14 days</div>
              <div class="sub">from this document</div>
            </div>
          </div>
        </div>

        <div class="price-summary">
          <div class="label">Price Discipline</div>
          <div class="price-row">
            <span class="name">Anchor — last comparable sale</span>
            <span class="amt">TBD per comp pull</span>
          </div>
          <div class="price-row">
            <span class="name">Opening offer (≈ 88% of ask)</span>
            <span class="amt">Step 1</span>
          </div>
          <div class="price-row target">
            <span class="name">Target close (94–96% of ask)</span>
            <span class="amt">Step 2</span>
          </div>
          <div class="price-row">
            <span class="name">Walk-away ceiling</span>
            <span class="amt">Step 3</span>
          </div>
          <div class="price-row">
            <span class="name">Cash-equivalent premium cap</span>
            <span class="amt">+1.5%</span>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-title">Aaron's Negotiation Principle</div>
        <p>
          Earn the business. Lead with the ask, never bury it. Numbers come from comps and
          inspection findings — not emotion, not what the seller "needs." Once a walk-away
          number is set in writing here, it does not move at the table.
        </p>
      </div>

      <!-- NEGOTIATION LADDER -->
      <h2 class="nu-section-title">Negotiation <span>Ladder</span></h2>
      <div class="ladder">
        <div class="rung opener">
          <div class="rung-header">STEP 1 · OPENING</div>
          <div class="rung-amount">88% of ask<span class="pct">anchor low, defensible</span></div>
          <div class="rung-body">
            Submit with comp summary attached. 30-day close, 10-day inspection, 21-day financing.
            Earnest money 1% — not 3%. Position as a clean, ready buyer.
          </div>
        </div>
        <div class="rung target">
          <div class="rung-header">STEP 2 · TARGET</div>
          <div class="rung-amount">94–96% of ask<span class="pct">where this should land</span></div>
          <div class="rung-body">
            Move in two increments, never one big concession. Each move pulls something back —
            shorter inspection, faster close, rate-lock cushion. Trade, do not give.
          </div>
        </div>
        <div class="rung walk">
          <div class="rung-header">STEP 3 · WALK-AWAY</div>
          <div class="rung-amount">≤ 98% of ask<span class="pct">hard ceiling</span></div>
          <div class="rung-body">
            If seller will not cross to this number, walk. Do not chase. Re-engage in 30 days
            only if the listing is still active and unchanged.
          </div>
        </div>
      </div>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title">Due Diligence <span>Before Any Offer Goes Out</span></h2>
      <div class="grid-2">
        <div class="card">
          <h3>Comp & Valuation Pull <span class="badge">DAY 1–3</span></h3>
          <ul>
            <li><strong>Pull 5 closed comps</strong> within 1 mile, 6,500–7,800 sq ft, last 12 months.</li>
            <li><strong>$/sq ft median</strong> on closed sales, not list. Discard outliers.</li>
            <li><strong>Days on market trend</strong> for the segment — leverage indicator.</li>
            <li><strong>Tax assessment</strong> vs. ask — flag any gap > 15%.</li>
            <li><strong>School / zoning / HOA</strong> — confirm no pending special assessments.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Title & Encumbrance Check <span class="badge gold">PRE-OFFER</span></h3>
          <ul>
            <li><strong>Pull deed history</strong> — recent transfers, intra-family or arm's length.</li>
            <li><strong>Mortgage balance estimate</strong> — recorded liens, HELOC, judgments.</li>
            <li><strong>Easements / covenants</strong> — utility, drainage, setback.</li>
            <li><strong>Probate or estate</strong> sale path? Multiple signers complicate timeline.</li>
            <li><strong>Survey on file</strong>? If not, request before closing — not after.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Physical Condition <span class="badge warn">INSPECT</span></h3>
          <ul>
            <li><strong>Roof age</strong> — replacement = 20–35k credit ask if &gt; 18 yrs.</li>
            <li><strong>HVAC units</strong> — count, age, capacity for 7,098 sq ft.</li>
            <li><strong>Foundation</strong> — Birmingham clay soil; cracks &gt; 1/4" trigger structural eng.</li>
            <li><strong>Termite letter</strong> — non-negotiable, seller pays.</li>
            <li><strong>Pool / detached structures</strong> — separate scope, separate credit.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Financial Readiness <span class="badge">SELF</span></h3>
          <ul>
            <li><strong>Pre-approval letter</strong> — Patrick Lavette / Renasant Bank, current within 30 days.</li>
            <li><strong>Cash-down ladder</strong> — 20% / 25% / 30% scenarios already modeled.</li>
            <li><strong>Rate lock window</strong> — confirm 45 or 60 day with lender.</li>
            <li><strong>Closing cost reserve</strong> — 3% of purchase plus inspection + appraisal.</li>
            <li><strong>Insurance quote</strong> — bind ready before final walk.</li>
          </ul>
        </div>
      </div>

      <!-- TERMS LEVERAGE -->
      <h2 class="nu-section-title">Non-Price Terms <span>— Leverage Beyond the Number</span></h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width:24%;">Lever</th>
              <th style="width:26%;">Aaron's Position</th>
              <th style="width:26%;">Trade Value</th>
              <th style="width:24%;">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Close timeline</strong></td>
              <td>30-day standard; can compress to 21 with cash-equivalent</td>
              <td>Seller views as risk reduction — worth ~1% off price</td>
              <td><span class="pill must">Must Hold</span></td>
            </tr>
            <tr>
              <td><strong>Inspection window</strong></td>
              <td>10 business days, all-clear or written objections</td>
              <td>Shorten to 7 only in exchange for repair credit</td>
              <td><span class="pill must">Must Hold</span></td>
            </tr>
            <tr>
              <td><strong>Earnest money</strong></td>
              <td>1% opening; up to 2% if needed to break impasse</td>
              <td>Each 1% increase = ~$0.5–1% price concession ask</td>
              <td><span class="pill want">Trade</span></td>
            </tr>
            <tr>
              <td><strong>Financing contingency</strong></td>
              <td>21 days, do NOT waive, even with strong pre-approval</td>
              <td>Non-negotiable — this is risk insurance</td>
              <td><span class="pill must">Must Hold</span></td>
            </tr>
            <tr>
              <td><strong>Appraisal contingency</strong></td>
              <td>Standard; ceiling at appraisal value plus 1.5% cash-equivalent gap</td>
              <td>Cap the gap exposure in writing — never open-ended</td>
              <td><span class="pill must">Must Hold</span></td>
            </tr>
            <tr>
              <td><strong>Repair credits</strong></td>
              <td>Cash at close, not seller-managed work</td>
              <td>Cleaner, faster, no quality dispute later</td>
              <td><span class="pill want">Trade</span></td>
            </tr>
            <tr>
              <td><strong>Possession date</strong></td>
              <td>At close, no leaseback; 7-day post-close grace if needed</td>
              <td>Flex up to 14 days seller stay = ~0.25–0.5% concession</td>
              <td><span class="pill nice">Flexible</span></td>
            </tr>
            <tr>
              <td><strong>Personal property</strong></td>
              <td>Itemize what conveys; do not assume</td>
              <td>Appliances, fixtures, outdoor equipment all in writing</td>
              <td><span class="pill nice">Flexible</span></td>
            </tr>
            <tr>
              <td><strong>Home warranty</strong></td>
              <td>Seller-paid 1-year warranty — ask, do not insist</td>
              <td>~$600 value, useful in mid-negotiation as throwaway concession</td>
              <td><span class="pill nice">Flexible</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title">14-Day <span>Execution Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">01</span>DAY</div>
          <div class="timeline-content">
            <h4>Comp pull, tax records, deed history</h4>
            <p>Establish anchor price and confirm seller motivation. No conversation with listing
              agent yet — strategy first, contact second.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">02</span>DAY</div>
          <div class="timeline-content">
            <h4>Patrick Lavette / Renasant — refresh pre-approval</h4>
            <p>30-day pre-approval letter, two scenarios modeled. Confirm rate lock window and
              closing-cost reserve in writing.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">03</span>DAY</div>
          <div class="timeline-content">
            <h4>Drive-by + neighborhood walk</h4>
            <p>Visual condition, neighbor turnover, what's visible from the curb. Photo log time-stamped.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">04</span>DAY</div>
          <div class="timeline-content">
            <h4>First showing — exploratory only</h4>
            <p>Take notes on condition, ask listing agent open questions: how long on market,
              prior offers, why selling, flexibility on close date. Do not signal interest level.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">05</span>DAY</div>
          <div class="timeline-content">
            <h4>Strategy session — draft Step 1 offer</h4>
            <p>Pull all data together, set the three rungs in writing, confirm walk-away number
              with spouse / financial advisor before submission.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">06</span>DAY</div>
          <div class="timeline-content">
            <h4>Submit Step 1 offer</h4>
            <p>Written offer with comp packet attached, 48-hour response window. Pre-approval letter included.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">08</span>DAY</div>
          <div class="timeline-content">
            <h4>Counter — first move toward target</h4>
            <p>Move price up no more than 35–40% of the gap; pair with one term concession. Two-counter rule:
              never make three back-to-back price moves without a term trade.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">10</span>DAY</div>
          <div class="timeline-content">
            <h4>Target close or walk decision</h4>
            <p>If within target band → accept. If above walk-away → walk, in writing, kindly. Do not chase.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">11</span>DAY</div>
          <div class="timeline-content">
            <h4>Inspection scheduled, attorney engaged</h4>
            <p>Birmingham real estate attorney for title review. Termite inspector booked separately.</p>
          </div>
        </div>
        <div class="timeline-row">
          <div class="timeline-day"><span class="num">14</span>DAY</div>
          <div class="timeline-content">
            <h4>Inspection report, repair-credit ask</h4>
            <p>Findings reviewed, written credit request submitted within 48 hours of report. Cash at close, never seller work.</p>
          </div>
        </div>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title">Negotiation <span>Language — Aaron's Voice</span></h2>

      <div class="script">
        <div class="who">First Conversation with Listing Agent</div>
        <p class="line">
          "I'm interested in the property and I'd like to do this cleanly. Before I write anything
          up, can you tell me how long it's been on the market, whether there have been prior
          offers, and how flexible the seller is on the close date? I'd rather make one fair
          offer than waste anyone's time."
        </p>
      </div>

      <div class="script">
        <div class="who">Submitting Step 1 Offer</div>
        <p class="line">
          "Attached is my offer along with the five comparable sales that informed the number.
          I'm pre-approved with Renasant Bank and I can close in 30 days. The offer holds for
          48 hours. I want to be straightforward — this is the number my data supports, and
          I'd rather get to a clean yes or a clean no than dance around it."
        </p>
      </div>

      <div class="script">
        <div class="who">Mid-Negotiation, Trading Terms</div>
        <p class="line">
          "I can move on price if you can move on close. I can be at the table in 21 days
          instead of 30, but the price needs to come down to reflect the certainty I'm offering.
          That's a fair trade and it's advantageous for both of us."
        </p>
      </div>

      <div class="script">
        <div class="who">Walking Away</div>
        <p class="line">
          "I appreciate the time. The number doesn't work for me at this level, and I won't
          stretch beyond what the comps support — that's not how I do business. If the
          seller revisits in the next 30 days, my offer stands at the last figure I put in writing.
          Sincerely, Aaron."
        </p>
      </div>

      <!-- RED LINES -->
      <h2 class="nu-section-title">Red Lines <span>— Do Not Cross</span></h2>
      <div class="grid-3">
        <div class="card">
          <h3>Never Waive Inspection</h3>
          <ul>
            <li>7,098 sq ft is too much surface area to skip.</li>
            <li>Foundation issues alone can be six figures.</li>
            <li>Inspection cost is &lt; 0.1% of purchase — always worth it.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Never Waive Financing</h3>
          <ul>
            <li>Even with strong pre-approval, appraisal can come in low.</li>
            <li>Risk insurance is non-negotiable.</li>
            <li>Cash-equivalent gap capped at 1.5% in writing.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Never Move Walk-Away</h3>
          <ul>
            <li>The number is set with a clear head, before the table.</li>
            <li>Emotional escalation is the most expensive negotiating mistake.</li>
            <li>If it changes, document why in writing — never on a phone call.</li>
          </ul>
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
      <div class="checklist">
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Five closed comps pulled</strong> — within 1 mile, last 12 months, similar size band</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Tax assessment vs. ask delta</strong> documented in writing</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Deed history pulled</strong> — confirm seller has clean title authority</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Pre-approval letter refreshed</strong> with Patrick Lavette / Renasant Bank</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Three price scenarios modeled</strong> — opening, target, walk-away</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Walk-away number locked</strong> — signed by Aaron before offer goes out</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Inspector & termite letter</strong> vendor selected and on standby</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Real estate attorney engaged</strong> for title and contract review</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>Insurance quote bound-ready</strong> before final walk-through</div>
        </div>
        <div class="check-row">
          <div class="check-box"></div>
          <div class="check-text"><strong>48-hour response window</strong> stated on every written offer</div>
        </div>
      </div>

      <!-- FINAL CALLOUT -->
      <div class="callout">
        <div class="callout-title">The Bottom Line</div>
        <p>
          This is a discipline problem more than a deal problem. The data sets the anchor,
          the terms are the leverage, and the walk-away is the line. Run it the way the line
          card sells equipment — clear ask, fair trade, earn the business or move on.
        </p>
        <p>
          A Legacy of Commitment® applies to every transaction Aaron's name is on, including
          his own. The next move is the comp pull. Everything else follows that.
        </p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> ·
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential personal action item · Prepared April 24, 2026 · Not for external distribution
    </div>
  </footer>

</body>
</html>