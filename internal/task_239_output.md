<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #2D8B3E;
      --nu-warn: #C97A1F;
      --nu-danger: #B33030;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
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

    /* DOCUMENT META BAR */
    .nu-meta-bar {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-meta-bar span strong {
      color: var(--nu-cyan);
      margin-right: 6px;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-title {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 22px;
      margin-bottom: 36px;
    }
    .nu-page-title .eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-page-title h1 {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .nu-page-title h1 .blue { color: var(--nu-blue); }
    .nu-page-title .subhead {
      margin-top: 10px;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 800px;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 44px 0 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .blue { color: var(--nu-blue); }
    .nu-section-title .dark { color: var(--nu-dark-text); }

    /* PROPERTY SNAPSHOT */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .nu-snapshot .cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: left;
    }
    .nu-snapshot .cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-snapshot .cell .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .nu-snapshot .cell .note {
      margin-top: 4px;
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* CHEVRON BADGES (objectives) */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .num {
      display: inline-flex;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      align-items: center; justify-content: center;
      margin-right: 14px;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 8px;
    }
    @media (max-width: 768px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 26px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card.cyan-top { border-top-color: var(--nu-cyan); }
    .nu-card.gold-top { border-top-color: var(--nu-accent-gold); }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { font-size: 0.95rem; margin-bottom: 10px; }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      top: 0;
    }

    /* TABLE */
    .nu-table-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 8px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
    }
    .nu-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .num { font-weight: 700; color: var(--nu-dark-text); white-space: nowrap; }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 8px;
    }
    @media (max-width: 768px) { .nu-ladder { grid-template-columns: 1fr; } }
    .nu-ladder .step {
      padding: 22px;
      border-radius: 8px;
      color: var(--nu-white);
      position: relative;
    }
    .nu-ladder .step.opening {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .nu-ladder .step.middle {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
    }
    .nu-ladder .step.walk {
      background: linear-gradient(135deg, #0066ee 0%, var(--nu-cyan) 100%);
      color: var(--nu-navy);
    }
    .nu-ladder .step .tier {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
      opacity: 0.85;
    }
    .nu-ladder .step .price {
      font-size: 1.85rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      margin-bottom: 4px;
    }
    .nu-ladder .step .delta {
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 12px;
      opacity: 0.9;
    }
    .nu-ladder .step .rationale {
      font-size: 0.88rem;
      line-height: 1.5;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin: 20px 0 28px;
    }
    .nu-callout strong { color: var(--nu-blue); }

    /* TIMELINE */
    .nu-timeline { list-style: none; padding: 0; margin: 0; position: relative; }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 14px; top: 6px; bottom: 6px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .nu-timeline li {
      position: relative;
      padding-left: 44px;
      margin-bottom: 18px;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      left: 7px; top: 4px;
      width: 16px; height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline .stage {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-bottom: 4px;
    }
    .nu-timeline .what {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline .detail { font-size: 0.93rem; color: var(--nu-body-text); }

    /* RISK LIST */
    .nu-risk {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 768px) { .nu-risk { grid-template-columns: 1fr; } }
    .nu-risk .item {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-warn);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
    }
    .nu-risk .item.green { border-left-color: var(--nu-success); }
    .nu-risk .item.red { border-left-color: var(--nu-danger); }
    .nu-risk .item h4 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-risk .item p { font-size: 0.9rem; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      font-family: 'Lato', serif;
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
    .nu-footer .confidential {
      margin-top: 18px;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 56px; }
      .nu-page-title h1 { font-size: 1.65rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-meta-bar { padding: 12px 20px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 16px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- META BAR -->
  <div class="nu-meta-bar">
    <span><strong>Document</strong> Acquisition Strategy Brief</span>
    <span><strong>Subject</strong> 4505 Buttewoods · 7,098 sq ft Estate</span>
    <span><strong>Prepared</strong> 2026-04-25</span>
    <span><strong>Owner</strong> Aaron C. Norris</span>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="nu-page-title">
        <div class="eyebrow">Internal Acquisition Brief · Confidential</div>
        <h1><span class="blue">Estate Acquisition</span> Strategy — 4505 Buttewoods</h1>
        <div class="subhead">Negotiation framework for the purchase of a 7,098 sq ft estate at 4505 Buttewoods. This brief defines the objective, the offer ladder, walk-away discipline, due-diligence checkpoints, and the day-by-day path from first contact to executed contract.</div>
      </div>

      <!-- SNAPSHOT -->
      <h2 class="nu-section-title"><span class="blue">Property</span> <span class="dark">Snapshot</span></h2>
      <div class="nu-snapshot">
        <div class="cell">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
          <div class="note">Subject parcel — primary residence acquisition</div>
        </div>
        <div class="cell">
          <div class="label">Heated SqFt</div>
          <div class="value">7,098</div>
          <div class="note">Per source action item</div>
        </div>
        <div class="cell">
          <div class="label">Class</div>
          <div class="value">Estate</div>
          <div class="note">Single-family, executive tier</div>
        </div>
        <div class="cell">
          <div class="label">Status</div>
          <div class="value">In Negotiation</div>
          <div class="note">Pre-offer / strategy lock</div>
        </div>
      </div>

      <!-- OBJECTIVES -->
      <h2 class="nu-section-title"><span class="blue">Negotiation</span> <span class="dark">Objectives</span></h2>
      <div class="nu-badge"><span class="num">1</span>Acquire 4505 Buttewoods at a price that preserves cash reserves for Norris Utilities® operations.</div>
      <div class="nu-badge"><span class="num">2</span>Lock in price ceiling, contingency window, and closing date in writing before earnest money funds.</div>
      <div class="nu-badge"><span class="num">3</span>Confirm clear title, current tax basis, and any easement or HOA obligations before option period expires.</div>
      <div class="nu-badge"><span class="num">4</span>Hold a defined walk-away number — protect the discipline that built the company.</div>

      <!-- VALUATION -->
      <h2 class="nu-section-title"><span class="blue">Valuation</span> <span class="dark">Inputs to Confirm</span></h2>
      <div class="nu-callout">
        <strong>Discipline:</strong> Do not present a price until the four valuation inputs below are confirmed in writing. A number offered without verified comps is a number you will overpay.
      </div>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Input</th>
              <th>What to Confirm</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">List Price</td>
              <td>Current asking price and date last reduced</td>
              <td>Listing agent / MLS</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td class="num">Comparable Sales</td>
              <td>3–5 closed sales, 6,500–7,500 sq ft, within 12 months, same submarket</td>
              <td>Buyer's agent CMA</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td class="num">Days on Market</td>
              <td>DOM, history of price changes, any prior contracts that fell through</td>
              <td>MLS history</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td class="num">Tax Assessment</td>
              <td>Current assessed value vs. asking — flag overage of 15%+</td>
              <td>County tax records</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td class="num">Carry Cost</td>
              <td>Property taxes, insurance, HOA, utilities — annualized</td>
              <td>Seller disclosure</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td class="num">Repair Reserve</td>
              <td>Roof age, HVAC count and age, foundation, pool/grounds — order inspections</td>
              <td>Licensed inspector</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="blue">Offer</span> <span class="dark">Ladder</span></h2>
      <p style="margin-bottom: 18px; max-width: 880px;">Three-tier ladder anchored to verified comps once gathered. Lock the percentages now; plug confirmed list price in when received. Never go above the walk-away.</p>
      <div class="nu-ladder">
        <div class="step opening">
          <div class="tier">Tier 1 · Opening</div>
          <div class="price">List × 0.88</div>
          <div class="delta">12% under asking</div>
          <div class="rationale">Anchored low but defensible. Justified by closed comps, repair reserve, and current carrying cost.</div>
        </div>
        <div class="step middle">
          <div class="tier">Tier 2 · Counter</div>
          <div class="price">List × 0.93</div>
          <div class="delta">7% under asking</div>
          <div class="rationale">Move to this only after seller counters and after a written response to the inspection report.</div>
        </div>
        <div class="step walk">
          <div class="tier">Tier 3 · Walk-Away</div>
          <div class="price">List × 0.96</div>
          <div class="delta">4% under asking — final</div>
          <div class="rationale">Hard ceiling. If the seller will not meet this, walk. There will be another estate.</div>
        </div>
      </div>
      <div class="nu-callout">
        <strong>Note:</strong> Replace ratio with a verified dollar number once Tier 1 list price is confirmed and the CMA is in hand. Cap is a function of comps + walk-away discipline, not seller emotion.
      </div>

      <!-- TERMS -->
      <h2 class="nu-section-title"><span class="blue">Non-Price</span> <span class="dark">Terms That Move The Needle</span></h2>
      <div class="nu-two-col">
        <div class="nu-card">
          <h3>Concessions Worth Asking For</h3>
          <ul>
            <li>Seller-paid title policy</li>
            <li>Survey existing or paid by seller</li>
            <li>Home warranty, one-year, seller-paid</li>
            <li>Major repairs from inspection — credit at closing rather than seller-completed work</li>
            <li>Existing systems left in working order with receipts (HVAC service, pool service, generator)</li>
            <li>Rent-back capped at 30 days, market rate, no extension without written consent</li>
          </ul>
        </div>
        <div class="nu-card cyan-top">
          <h3>Concessions Worth Trading</h3>
          <ul>
            <li>Slightly faster close — only if financing is locked</li>
            <li>Larger earnest money — only after option period and inspection cleared</li>
            <li>Flexible closing date inside a defined window</li>
            <li>"As-is" cosmetic items — never structural, never roof, never HVAC</li>
            <li>Personal property items the seller does not want to move</li>
          </ul>
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="blue">Negotiation</span> <span class="dark">Timeline</span></h2>
      <ul class="nu-timeline">
        <li>
          <div class="stage">Day 0 · Preparation</div>
          <div class="what">Pull full CMA, tax record, deed history, and any prior contract history.</div>
          <div class="detail">Lock financing pre-approval letter dated within 14 days. Do not contact listing agent without comps in hand.</div>
        </li>
        <li>
          <div class="stage">Day 1 · First Contact</div>
          <div class="what">Buyer's agent reaches out to listing agent; ask seller motivation, ideal close date, prior offers.</div>
          <div class="detail">Listen more than talk. Information now is leverage at offer time.</div>
        </li>
        <li>
          <div class="stage">Day 2–3 · Tier 1 Offer</div>
          <div class="what">Submit written offer at List × 0.88 with 7-day option period and standard contingencies.</div>
          <div class="detail">Pre-approval letter, proof of funds for earnest money, and a clean cover letter — short, professional, no emotion.</div>
        </li>
        <li>
          <div class="stage">Day 4–6 · Counter Cycle</div>
          <div class="what">Receive counter; respond at Tier 2 only. Do not jump to ceiling under pressure.</div>
          <div class="detail">If seller will not move below Tier 3 ceiling, walk. Re-engage in 14 days if listing remains active.</div>
        </li>
        <li>
          <div class="stage">Day 7–14 · Option Period</div>
          <div class="what">Inspection, survey, title search, HOA documents, insurance binder.</div>
          <div class="detail">Any material defect = re-open price OR terminate. Do not waive option period for any reason.</div>
        </li>
        <li>
          <div class="stage">Day 15–35 · Financing &amp; Appraisal</div>
          <div class="what">Lock rate, order appraisal, clear underwriting conditions.</div>
          <div class="detail">If appraisal comes in under contract price, seller adjusts price OR contract terminates — buyer covers no gap.</div>
        </li>
        <li>
          <div class="stage">Day 36–45 · Close</div>
          <div class="what">Final walkthrough 24 hours before closing. Wire funds only after receiving the closing disclosure 3 business days prior.</div>
          <div class="detail">Verify wire instructions by phone with the title company directly — never trust an emailed change.</div>
        </li>
      </ul>

      <!-- DUE DILIGENCE -->
      <h2 class="nu-section-title"><span class="blue">Due-Diligence</span> <span class="dark">Checklist</span></h2>
      <div class="nu-table-wrap">
        <ul class="nu-checklist">
          <li><strong>Title Search</strong>Pull deed history; flag any liens, easements, or unreleased mortgages.</li>
          <li><strong>Survey</strong>Confirm boundaries, encroachments, and any structures over setback lines.</li>
          <li><strong>Inspection — General</strong>Roof, foundation, plumbing, electrical, HVAC count and age, attic, crawl, drainage.</li>
          <li><strong>Inspection — Specialty</strong>Pool/spa, septic if applicable, generator, well if applicable, termite/WDI letter.</li>
          <li><strong>HOA / Covenant Review</strong>Dues, reserve study, pending special assessments, architectural committee restrictions.</li>
          <li><strong>Tax Verification</strong>Current year taxes, exemptions in place or transferring, any pending reassessment.</li>
          <li><strong>Insurance Quote</strong>Bind a homeowner's policy quote before option period closes — verify replacement cost coverage.</li>
          <li><strong>Utility History</strong>12-month bill history for electric, gas, water — flag anything inconsistent with sq ft.</li>
          <li><strong>Disclosure Review</strong>Seller's disclosure, lead-based paint disclosure if pre-1978, prior repair receipts.</li>
          <li><strong>Permits</strong>Verify any additions, pools, decks, or mechanical work were permitted and closed.</li>
        </ul>
      </div>

      <!-- RISKS -->
      <h2 class="nu-section-title"><span class="blue">Risk</span> <span class="dark">&amp; Counter-Move</span></h2>
      <div class="nu-risk">
        <div class="item">
          <h4>Seller refuses to counter Tier 1</h4>
          <p>Hold 72 hours, then move to Tier 2 with a written rationale tied to comps and inspection findings.</p>
        </div>
        <div class="item red">
          <h4>Multiple-offer scenario claimed</h4>
          <p>Ask for proof — listing agent should disclose. Do not bid against an unverified offer. Hold the ceiling.</p>
        </div>
        <div class="item">
          <h4>Inspection surfaces structural / roof / HVAC issue</h4>
          <p>Re-open price by full repair cost. Demand credit at close, not seller-completed work. Reset option period if needed.</p>
        </div>
        <div class="item red">
          <h4>Appraisal short of contract price</h4>
          <p>Seller drops to appraised value OR cancel. Walk before covering an appraisal gap on a primary residence.</p>
        </div>
        <div class="item green">
          <h4>Title clean, comps support price</h4>
          <p>Move with confidence. Reduce option period only after this confirmation, never before.</p>
        </div>
        <div class="item">
          <h4>HOA discloses pending assessment</h4>
          <p>Demand seller pay assessment in full at close OR credit equivalent. Do not assume the obligation.</p>
        </div>
      </div>

      <!-- FINANCING -->
      <h2 class="nu-section-title"><span class="blue">Financing</span> <span class="dark">Discipline</span></h2>
      <div class="nu-two-col">
        <div class="nu-card gold-top">
          <h3>Cash-Flow Guardrails</h3>
          <ul>
            <li>Down payment must not draw from Norris Utilities® operating capital — personal funds only.</li>
            <li>Reserve a minimum of 6 months PITI in liquid savings after closing.</li>
            <li>Estimate first-year carry cost (taxes + insurance + utilities + maintenance) and confirm it fits personal budget independent of business distributions.</li>
            <li>Lock rate as soon as contract is executed; do not float a residential rate after option period.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Lender Requirements</h3>
          <ul>
            <li>Pre-approval letter, dated within 14 days, for amount equal to walk-away ceiling.</li>
            <li>Two years tax returns plus year-to-date P&amp;L for Norris Utilities®, LLC.</li>
            <li>Proof of funds for earnest money and down payment in writing.</li>
            <li>Lender's appraisal contingency must remain intact until cleared.</li>
          </ul>
        </div>
      </div>

      <!-- WALK-AWAY -->
      <h2 class="nu-section-title"><span class="blue">Walk-Away</span> <span class="dark">Discipline</span></h2>
      <div class="nu-callout">
        <strong>Rule of the house:</strong> The number that protects the company is the number that closes the deal. If the seller will not meet Tier 3, the answer is "thank you, we'll watch the listing." Re-engage in 14 days. There is no estate worth breaking the discipline that built Norris Utilities®.
      </div>

      <!-- NEXT ACTIONS -->
      <h2 class="nu-section-title"><span class="blue">Immediate</span> <span class="dark">Next Actions</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Owner</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order full CMA on 4505 Buttewoods (5 closed comps, 6.5k–7.5k sq ft, last 12 months)</td>
              <td>Buyer's agent</td>
              <td class="num">Within 48 hours</td>
            </tr>
            <tr>
              <td>Refresh lender pre-approval letter to Tier 3 ceiling amount</td>
              <td>Aaron C. Norris</td>
              <td class="num">Within 48 hours</td>
            </tr>
            <tr>
              <td>Pull deed history and county tax record</td>
              <td>Title attorney / agent</td>
              <td class="num">Within 72 hours</td>
            </tr>
            <tr>
              <td>Confirm Tier 1 dollar amount once list price and CMA are in hand</td>
              <td>Aaron C. Norris</td>
              <td class="num">Same day as CMA</td>
            </tr>
            <tr>
              <td>Submit Tier 1 written offer with 7-day option period</td>
              <td>Buyer's agent</td>
              <td class="num">Day 2–3</td>
            </tr>
            <tr>
              <td>Schedule general inspection + specialty inspections (roof, pool, HVAC)</td>
              <td>Aaron C. Norris</td>
              <td class="num">Day of contract</td>
            </tr>
            <tr>
              <td>Bind insurance quote, verify replacement cost</td>
              <td>Aaron C. Norris</td>
              <td class="num">Inside option period</td>
            </tr>
          </tbody>
        </table>
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
    <div class="confidential">Confidential · Internal Acquisition Brief · Not For Distribution</div>
  </footer>

</body>
</html>