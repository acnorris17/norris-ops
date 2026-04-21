<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-success: #0a7d3e;
      --nu-warn: #c47f00;
      --nu-risk: #c22d2d;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      margin: 0 auto 18px;
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
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
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
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(0,0,255,0.028) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 20px;
    }

    /* DOCUMENT CLASSIFICATION */
    .doc-class {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 22px;
      background: linear-gradient(90deg, var(--nu-navy) 0%, #001b66 100%);
      color: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      margin-bottom: 40px;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-weight: 700;
    }
    .doc-class .chip {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.08em;
    }

    /* PAGE TITLE */
    .page-title {
      margin-bottom: 12px;
    }
    .page-title .eyebrow {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.22em;
      margin-bottom: 12px;
    }
    .page-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title h1 .accent { color: var(--nu-blue); }
    .page-title .subtitle {
      font-size: 1.08rem;
      color: #555;
      font-weight: 400;
      max-width: 780px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-top: 52px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SUMMARY GRID */
    .spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .spec-cell {
      background: var(--nu-white);
      padding: 22px 20px;
    }
    .spec-cell .label {
      font-size: 0.72rem;
      color: #777;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .spec-cell .value {
      font-size: 1.3rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .spec-cell .value small {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: #666;
      margin-top: 4px;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.96rem;
      color: #444;
      border-bottom: 1px dashed #eee;
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 16px;
      width: 8px;
      height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }
    .nu-card ul li strong { color: var(--nu-dark-text); }

    /* NEGOTIATION BANDS */
    .price-bands {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 10px;
    }
    .band {
      position: relative;
      padding: 22px 20px 22px 28px;
      border-radius: 8px;
      border-left: 6px solid;
      background: var(--nu-light-gray);
    }
    .band .band-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 700;
      color: #666;
      margin-bottom: 6px;
    }
    .band .band-amount {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .band .band-note {
      font-size: 0.88rem;
      color: #555;
    }
    .band.opening { border-color: var(--nu-success); }
    .band.target  { border-color: var(--nu-blue); background: #eef0ff; }
    .band.walk    { border-color: var(--nu-risk); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding: 0 0 22px 0;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 6px;
      width: 18px;
      height: 18px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-item .tl-date {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .tl-item .tl-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-item .tl-body {
      font-size: 0.93rem;
      color: #555;
    }

    /* LEVERS TABLE */
    table.levers {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
    }
    table.levers th, table.levers td {
      text-align: left;
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.levers thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    table.levers tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    table.levers td.pri {
      font-weight: 900;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .pill-high { background: #ffe5e5; color: var(--nu-risk); }
    .pill-med  { background: #fff3db; color: var(--nu-warn); }
    .pill-low  { background: #dff5e8; color: var(--nu-success); }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .checklist ol {
      counter-reset: step;
      list-style: none;
      padding: 0;
    }
    .checklist ol li {
      counter-increment: step;
      position: relative;
      padding: 10px 0 10px 44px;
      font-size: 0.96rem;
      color: #333;
      border-bottom: 1px dashed #ddd;
    }
    .checklist ol li:last-child { border-bottom: none; }
    .checklist ol li::before {
      content: counter(step);
      position: absolute;
      left: 0;
      top: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      text-align: center;
      line-height: 30px;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .checklist ol li strong { color: var(--nu-dark-text); }

    /* CALLOUT */
    .callout {
      border-left: 4px solid var(--nu-cyan);
      background: #ecfbff;
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin: 20px 0;
      font-size: 0.96rem;
    }
    .callout strong { color: var(--nu-navy); }

    /* NEXT ACTIONS */
    .action-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }
    .nu-btn {
      display: inline-block;
      padding: 13px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s ease;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn.primary { background: var(--nu-blue); color: var(--nu-white); }
    .nu-btn.primary:hover { background: #0000cc; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,255,0.3); }
    .nu-btn.secondary { background: transparent; color: var(--nu-blue); }
    .nu-btn.secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
      font-weight: 400;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.82rem;
      color: rgba(255,255,255,0.6);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 10px; }
      .page-title h1 { font-size: 1.7rem; }
      .nu-footer-contact { font-size: 0.92rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .action-bar, .nu-btn { display: none; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- CLASSIFICATION STRIP -->
      <div class="doc-class">
        <span><span class="chip">Confidential</span>&nbsp;&nbsp;Internal Negotiation Brief</span>
        <span>Prepared for: Aaron C. Norris</span>
        <span>Issued: 2026-04-20</span>
      </div>

      <!-- PAGE TITLE -->
      <div class="page-title">
        <div class="eyebrow">Action Item &nbsp;·&nbsp; Estate Acquisition</div>
        <h1>Negotiate Purchase — <span class="accent">4505 Buttewoods</span></h1>
        <p class="subtitle">
          7,098 sq ft residential estate. Prepared negotiation playbook, pricing bands, due-diligence checklist,
          and a timeline for moving from initial offer to closing without over-extending on capital committed to
          Norris Utilities® growth through 2026.
        </p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="spec-grid">
          <div class="spec-cell">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods<small>Primary subject property</small></div>
          </div>
          <div class="spec-cell">
            <div class="label">Living Area</div>
            <div class="value">7,098 sq ft<small>Above-grade finished space</small></div>
          </div>
          <div class="spec-cell">
            <div class="label">Classification</div>
            <div class="value">Estate Home<small>Single-family residential</small></div>
          </div>
          <div class="spec-cell">
            <div class="label">Role of Buyer</div>
            <div class="value">Aaron C. Norris<small>Personal / family purchase</small></div>
          </div>
          <div class="spec-cell">
            <div class="label">Status</div>
            <div class="value">Negotiation Phase<small>Pre-contract</small></div>
          </div>
          <div class="spec-cell">
            <div class="label">Funding Posture</div>
            <div class="value">Confirm First<small>Renasant Bank — Patrick Lavette</small></div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES + CONSTRAINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Objectives</span> <span class="rest">&amp; Constraints</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Negotiation Objectives</h3>
            <ul>
              <li><strong>Buy right, not fast.</strong> Land inside target band or walk.</li>
              <li>Preserve liquidity for the Skylift PO ($1,091,402.50) and FlexPro Armor inventory build.</li>
              <li>Lock closing timeline that does not collide with payroll or vendor cycles.</li>
              <li>Secure seller credits for known defects rather than price cuts where possible.</li>
              <li>Protect relationship — estate sales are referral-driven; keep tone professional.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Hard Constraints</h3>
            <ul>
              <li><strong>Do not commingle funds</strong> with Norris Utilities®, LLC operating accounts.</li>
              <li>Mortgage or cash structure must not touch the business line of credit.</li>
              <li>Inspection contingency required — 7,098 sq ft is too large to skip.</li>
              <li>Appraisal contingency required unless cash offer with price protection.</li>
              <li>No verbal agreements — all counters in writing through listing broker.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PRICING BANDS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Bands</span></h2>
        <p style="margin-bottom: 16px; color: #555;">
          Populate the three bands below once the comparable market analysis (CMA) and recent
          7,000+ sq ft sales within 3 miles are pulled. Work the opening offer up toward target;
          anything past the walk-away signals this is not the right estate.
        </p>
        <div class="price-bands">
          <div class="band opening">
            <div class="band-label">Opening Offer</div>
            <div class="band-amount">Low end of CMA</div>
            <div class="band-note">Supported by at least 3 comparable 6,500–7,500 sq ft sales in last 12 months.</div>
          </div>
          <div class="band target">
            <div class="band-label">Target Close</div>
            <div class="band-amount">CMA Median</div>
            <div class="band-note">Acceptable final price after inspection credits and seller concessions.</div>
          </div>
          <div class="band walk">
            <div class="band-label">Walk-Away</div>
            <div class="band-amount">CMA High + 3%</div>
            <div class="band-note">If seller will not come below this, withdraw respectfully and revisit in 60 days.</div>
          </div>
        </div>
        <div class="callout">
          <strong>Rule:</strong> Anchor the first number in writing — not over the phone. Written offers give
          the seller time to process, reduce emotional back-and-forth, and create a paper record for the broker.
        </div>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Levers</span></h2>
        <table class="levers">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Lever</th>
              <th>How to Use It</th>
              <th>Leverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pri">1</td>
              <td>Inspection Findings</td>
              <td>Use the inspection report to request targeted credits for roof, HVAC, foundation, drainage on 7,098 sq ft footprint.</td>
              <td><span class="pill pill-high">High</span></td>
            </tr>
            <tr>
              <td class="pri">2</td>
              <td>Appraisal Gap</td>
              <td>If appraisal comes in below contract, renegotiate to appraised value or split the gap.</td>
              <td><span class="pill pill-high">High</span></td>
            </tr>
            <tr>
              <td class="pri">3</td>
              <td>Close Timing</td>
              <td>Offer a faster close or flexible possession date — estate sellers often value certainty over last dollars.</td>
              <td><span class="pill pill-med">Medium</span></td>
            </tr>
            <tr>
              <td class="pri">4</td>
              <td>Financing Certainty</td>
              <td>Present a fully underwritten pre-approval from Renasant (Patrick Lavette) at offer submission.</td>
              <td><span class="pill pill-med">Medium</span></td>
            </tr>
            <tr>
              <td class="pri">5</td>
              <td>Days on Market</td>
              <td>Every 30 days on market weakens the seller's position. Track days-on-market weekly.</td>
              <td><span class="pill pill-med">Medium</span></td>
            </tr>
            <tr>
              <td class="pri">6</td>
              <td>Included Chattels</td>
              <td>Request appliances, window treatments, outdoor equipment, lawn tractor in lieu of price reduction.</td>
              <td><span class="pill pill-low">Low</span></td>
            </tr>
            <tr>
              <td class="pri">7</td>
              <td>Repair Allowance</td>
              <td>Take cash at closing for known items instead of having the seller do the work — control the outcome.</td>
              <td><span class="pill pill-low">Low</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="checklist">
          <h3>Complete before removing contingencies</h3>
          <ol>
            <li><strong>Pull comps.</strong> 3+ closed sales of 6,500–7,500 sq ft homes within 3 miles, last 12 months.</li>
            <li><strong>Licensed home inspection.</strong> Full report on a 7,098 sq ft structure — do not waive.</li>
            <li><strong>Specialty inspections.</strong> Roof, HVAC (count systems on a house this size), foundation, sewer scope, termite/WDO.</li>
            <li><strong>Survey &amp; plat review.</strong> Confirm lot size, easements, encroachments, setbacks.</li>
            <li><strong>Title search.</strong> Preliminary title commitment before offer goes hard on earnest money.</li>
            <li><strong>Tax history.</strong> Pull 3 years of property tax bills and millage trajectory.</li>
            <li><strong>HOA/covenants.</strong> Request and read all CC&amp;Rs — restrictions on outbuildings, fencing, vehicles.</li>
            <li><strong>Utility history.</strong> 12 months of power, gas, water bills — operating cost of a 7,098 sq ft home is material.</li>
            <li><strong>Seller's disclosure.</strong> Read carefully. Any prior water intrusion, insurance claims, or environmental issues.</li>
            <li><strong>Insurance quote.</strong> Bind-ready quote before contract close — estate homes can surprise on premium.</li>
            <li><strong>Financing confirmation.</strong> Updated pre-approval letter from Renasant tied to the contract price.</li>
            <li><strong>Appraisal.</strong> Lender-ordered. Review the comp set the appraiser uses; challenge if weak.</li>
          </ol>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Proposed</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-date">Week 1 — Prep</div>
            <div class="tl-title">Market Analysis &amp; Financing</div>
            <div class="tl-body">Pull CMA. Confirm pre-approval and proof of funds letter with Patrick Lavette at Renasant Bank.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 2 — Offer</div>
            <div class="tl-title">Written Opening Offer</div>
            <div class="tl-body">Submit written offer at low end of CMA band, with inspection &amp; appraisal contingencies. Earnest money moderate.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 2–3 — Counter</div>
            <div class="tl-title">Negotiation Rounds</div>
            <div class="tl-body">Expect 2–3 counters. Hold to target band. Use financing certainty and close timing as soft levers.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 3–4 — Inspection</div>
            <div class="tl-title">Full Inspection Window</div>
            <div class="tl-body">Complete home, roof, HVAC, foundation, sewer, and WDO inspections. Compile repair request.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 4–5 — Repair Negotiation</div>
            <div class="tl-title">Credits &amp; Concessions</div>
            <div class="tl-body">Request credits at closing rather than seller-performed work. Lock final net number.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 5–6 — Appraisal &amp; Title</div>
            <div class="tl-title">Lender Milestones</div>
            <div class="tl-body">Appraisal ordered. Title commitment reviewed. Insurance bound. Clear to close.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Week 6–7 — Close</div>
            <div class="tl-title">Settlement</div>
            <div class="tl-body">Final walkthrough within 24 hours of closing. Wire funds from personal account — never from Norris Utilities®.</div>
          </div>
        </div>
      </section>

      <!-- RISK REGISTER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Risk</span> <span class="rest">Register</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Top Risks</h3>
            <ul>
              <li><strong>Liquidity drag.</strong> Large estate tying up cash while Skylift PO and FlexPro Armor inventory build consume working capital.</li>
              <li><strong>Carrying cost.</strong> 7,098 sq ft has real operating cost — taxes, insurance, utilities, upkeep.</li>
              <li><strong>Appraisal gap.</strong> Unique estate properties are harder for appraisers to comp.</li>
              <li><strong>Deferred maintenance.</strong> Large older homes often hide roof, HVAC, and foundation issues.</li>
              <li><strong>Emotional anchoring.</strong> Falling for the house before the numbers work.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Mitigations</h3>
            <ul>
              <li><strong>Ring-fence capital.</strong> Personal funds only. Keep business reserves untouched.</li>
              <li><strong>Run a 12-month carrying model</strong> before contract — taxes, insurance, utilities, upkeep, debt service.</li>
              <li><strong>Appraisal contingency stays in</strong> until the appraisal clears.</li>
              <li><strong>Inspection + specialty</strong> inspections are non-negotiable on a 7,098 sq ft home.</li>
              <li><strong>Pre-committed walk-away number</strong> — written down before the first counter.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Next</span> <span class="rest">Actions</span></h2>
        <div class="checklist">
          <h3>This Week</h3>
          <ol>
            <li><strong>Contact listing broker.</strong> Request disclosures, plat, HOA docs, recent improvements list, and property tax history.</li>
            <li><strong>Renasant Bank — Patrick Lavette.</strong> Refresh pre-approval and proof-of-funds letter. Confirm rate lock window.</li>
            <li><strong>Commission CMA.</strong> Have buyer's agent pull comps and set CMA median — feed into the pricing bands above.</li>
            <li><strong>Write walk-away number on paper.</strong> Lock it before talking numbers with the seller.</li>
            <li><strong>Draft written opening offer.</strong> Contingencies: financing, inspection, appraisal, title, insurance.</li>
            <li><strong>Line up inspectors.</strong> Schedule home + roof + HVAC + foundation + sewer for first available week post-acceptance.</li>
            <li><strong>Calendar review with Aaron.</strong> Confirm the purchase timeline doesn't collide with Skylift delivery or Samson Rope PO cycle.</li>
          </ol>
        </div>

        <div class="action-bar">
          <a class="nu-btn primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="nu-btn secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Negotiation%20Brief">Email Brief</a>
          <a class="nu-btn secondary" href="#" onclick="window.print();return false;">Print Brief</a>
        </div>

        <div class="callout" style="margin-top: 26px;">
          <strong>Reminder:</strong> This is a personal acquisition. All correspondence, signatures, inspections, and
          funding must flow through Aaron's personal accounts — never through Norris Utilities®, LLC. Keep the
          company's balance sheet clean for vendor and banking purposes.
        </div>
      </section>

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
    <div class="nu-footer-meta">
      Confidential negotiation brief &middot; Prepared 2026-04-20 &middot; Subject property: 4505 Buttewoods
    </div>
  </footer>

</body>
</html>