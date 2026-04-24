<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-warning: #C9302C;
      --nu-success: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
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
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

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
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* DOC HEADER */
    .doc-header {
      text-align: center;
      padding-bottom: 32px;
      margin-bottom: 40px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .doc-category {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 6px 18px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 18px;
      border-radius: 3px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-meta {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* SECTION */
    .section { margin-bottom: 44px; }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .first-word { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SUMMARY CARD */
    .property-card {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 30px;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-locale {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 20px;
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 18px;
      padding-top: 20px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .prop-stat {
      text-align: center;
    }
    .prop-stat .label {
      font-size: 0.7rem;
      color: #888;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .prop-stat .value {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
    }
    .prop-stat .unit {
      display: block;
      font-size: 0.75rem;
      color: #666;
      font-weight: 400;
      margin-top: 2px;
    }

    /* NEGOTIATION STRATEGY */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .strategy-card .num {
      display: inline-block;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      text-align: center;
      line-height: 32px;
      font-weight: 900;
      font-size: 0.9rem;
      margin-bottom: 12px;
    }
    .strategy-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .strategy-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* OFFER LADDER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      font-size: 0.92rem;
    }
    .offer-table thead {
      background: var(--nu-navy);
      color: var(--nu-white);
    }
    .offer-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .offer-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .offer-table tbody tr:nth-child(even) { background: #fafafc; }
    .offer-table tbody tr:hover { background: #f0f4ff; }
    .offer-table td.round {
      font-weight: 900;
      color: var(--nu-blue);
    }
    .offer-table td.amount {
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .tag {
      display: inline-block;
      padding: 3px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .tag-open { background: #E3F2FD; color: #0d47a1; }
    .tag-target { background: #E8F5E9; color: var(--nu-success); }
    .tag-walk { background: #FBE9E7; color: var(--nu-warning); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 38px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 8px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      padding: 18px 20px;
      border-radius: 6px;
      border-left: 4px solid;
    }
    .risk-high {
      background: #FFF5F5;
      border-color: var(--nu-warning);
    }
    .risk-med {
      background: #FFF8E1;
      border-color: #F57C00;
    }
    .risk-low {
      background: #F1F8E9;
      border-color: var(--nu-success);
    }
    .risk-card h5 {
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }
    .risk-card p {
      font-size: 0.88rem;
      line-height: 1.5;
    }
    .risk-label {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .risk-high .risk-label { color: var(--nu-warning); }
    .risk-med .risk-label { color: #F57C00; }
    .risk-low .risk-label { color: var(--nu-success); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 4px;
      width: 13px; height: 13px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .timeline-item h5 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-item p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      margin: 30px 0;
    }
    .callout h4 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .callout p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.92);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
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
      color: rgba(255,255,255,0.6);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 32px 20px 40px; }
      .doc-title { font-size: 1.7rem; }
      .doc-meta { gap: 14px; font-size: 0.78rem; }
      .section-title { font-size: 1.25rem; }
      .property-card { padding: 20px; }
      .property-address { font-size: 1.3rem; }
      .offer-table { font-size: 0.82rem; }
      .offer-table th, .offer-table td { padding: 10px 8px; }
      .nu-footer { padding: 32px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .strategy-card, .offer-table { box-shadow: none; }
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

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- DOC HEADER -->
      <div class="doc-header">
        <div class="doc-category">Acquisition Brief</div>
        <h1 class="doc-title"><span>4505 Buttewoods</span> — 7,098 Sq Ft Estate</h1>
        <p class="doc-subtitle">Negotiation Playbook &amp; Purchase Strategy</p>
        <div class="doc-meta">
          <span><strong>Prepared for:</strong> Aaron C. Norris</span>
          <span><strong>Date:</strong> April 24, 2026</span>
          <span><strong>Status:</strong> Open — Pre-Offer</span>
        </div>
      </div>

      <!-- PROPERTY SUMMARY -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="property-card">
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-locale">Private estate residence — single-family</div>
          <div class="property-grid">
            <div class="prop-stat">
              <div class="label">Living Area</div>
              <div class="value">7,098</div>
              <div class="unit">square feet</div>
            </div>
            <div class="prop-stat">
              <div class="label">Property Class</div>
              <div class="value">Estate</div>
              <div class="unit">single-family</div>
            </div>
            <div class="prop-stat">
              <div class="label">Negotiation Stage</div>
              <div class="value">Open</div>
              <div class="unit">pre-offer</div>
            </div>
            <div class="prop-stat">
              <div class="label">Action Source</div>
              <div class="value">reMarkable</div>
              <div class="unit">action item</div>
            </div>
          </div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Objective</span> <span class="rest">&amp; Mandate</span></h2>
        <p style="font-size: 1.02rem; color: var(--nu-body-text); margin-bottom: 12px;">
          Negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods on terms that protect
          household cash reserves, preserve the working capital backing Norris Utilities®, and avoid
          collateralizing any business-owned asset against a personal real-estate transaction.
        </p>
        <p style="font-size: 1.02rem; color: var(--nu-body-text);">
          Target outcome: a signed purchase agreement at or below fair market, with contingencies that
          give a full inspection, financing, and appraisal window, and a closing calendar that does not
          compete with Norris Utilities® Q2–Q3 cash needs.
        </p>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="strategy-grid">

          <div class="strategy-card">
            <div class="num">1</div>
            <h4>Establish Independent Value</h4>
            <p>Commission a written comparative market analysis from a buyer's-side broker before
              naming any number. Pull three to five closed comps within the last 12 months for 5,500+
              sq ft homes in the same submarket. Anchor every counter back to that written value.</p>
          </div>

          <div class="strategy-card">
            <div class="num">2</div>
            <h4>Verify Seller Motivation</h4>
            <p>Before the first offer, confirm why the seller is moving, how long the property has been
              listed, and whether prior offers fell through. A motivated seller earns a lower opening
              bid; a patient seller earns a longer contingency window instead.</p>
          </div>

          <div class="strategy-card">
            <div class="num">3</div>
            <h4>Open Low — Anchored, Not Insulting</h4>
            <p>Open 8–12% below list on the asking price, with a clean written rationale tied to the
              comps. Never open without a written justification — a bracketed, documented offer carries
              more weight than a verbal lowball.</p>
          </div>

          <div class="strategy-card">
            <div class="num">4</div>
            <h4>Protect the Contingencies</h4>
            <p>Non-negotiable: financing contingency, appraisal contingency, 10-business-day
              inspection period, and title contingency. Earnest money stays in escrow with a licensed
              attorney or title company — never directly to the seller.</p>
          </div>

          <div class="strategy-card">
            <div class="num">5</div>
            <h4>Trade Terms for Price</h4>
            <p>If the seller refuses movement on price, trade flexibility on closing date, rent-back,
              or repair credits in exchange for a lower final number. Movement on calendar is often
              cheaper for us than movement on purchase price.</p>
          </div>

          <div class="strategy-card">
            <div class="num">6</div>
            <h4>Walk-Away Is the Leverage</h4>
            <p>Set the walk-away number before the first conversation and write it down. The deal
              only works if Aaron can genuinely leave at the walk number — leverage comes from the
              real, documented willingness to step away from the table.</p>
          </div>

        </div>
      </div>

      <!-- OFFER LADDER -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Offer</span> <span class="rest">Ladder</span></h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Set each price point against the written CMA before the first call. Dollar amounts below
          are expressed as percentages of the seller's current asking price, to be filled in once the
          list price and CMA are confirmed in writing.
        </p>
        <table class="offer-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Position</th>
              <th>% of List</th>
              <th>Stance</th>
              <th>Written Justification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="round">1</td>
              <td class="amount">Opening Offer</td>
              <td class="amount">88–92%</td>
              <td><span class="tag tag-open">Open</span></td>
              <td>CMA comps, condition notes, days-on-market, documented deferred maintenance.</td>
            </tr>
            <tr>
              <td class="round">2</td>
              <td class="amount">First Counter</td>
              <td class="amount">92–95%</td>
              <td><span class="tag tag-open">Responsive</span></td>
              <td>Signals willingness to close; trades closing-date flexibility for price.</td>
            </tr>
            <tr>
              <td class="round">3</td>
              <td class="amount">Target Zone</td>
              <td class="amount">95–97%</td>
              <td><span class="tag tag-target">Target</span></td>
              <td>Acceptable final number when tied to full inspection and appraisal contingencies.</td>
            </tr>
            <tr>
              <td class="round">4</td>
              <td class="amount">Walk-Away</td>
              <td class="amount">&gt; 98%</td>
              <td><span class="tag tag-walk">Walk</span></td>
              <td>Above this, the yield on capital does not clear Aaron's personal threshold — stop.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- DUE DILIGENCE CHECKLIST -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <ul class="checklist">
          <li><strong>Written CMA</strong> — buyer's-side broker, 3–5 closed comps within 12 months, 5,500+ sq ft, same submarket.</li>
          <li><strong>Full property inspection</strong> — structural, roof, HVAC, plumbing, electrical, foundation, drainage.</li>
          <li><strong>Separate roof and HVAC inspections</strong> — estates of this size justify specialist reports, not a general pass.</li>
          <li><strong>Termite / wood-destroying organism letter</strong> — required by most lenders in the Southeast; schedule early.</li>
          <li><strong>Survey</strong> — current boundary survey, easements, setbacks, and any encroachments documented.</li>
          <li><strong>Title search &amp; title insurance</strong> — owner's policy quote, lien check, HOA / covenant review.</li>
          <li><strong>Tax history</strong> — last three years of county assessments, millage, any pending reassessment.</li>
          <li><strong>Insurance quote</strong> — bind-able homeowner's quote in writing before removing the insurance contingency.</li>
          <li><strong>Flood zone &amp; elevation certificate</strong> — confirm FEMA zone and obtain cert if in or near a flood map.</li>
          <li><strong>Utility cost history</strong> — 12 months of electric, gas, water bills on a 7,098 sq ft home — material to monthly carry.</li>
          <li><strong>HOA disclosure</strong> — bylaws, covenants, dues, assessments, and any open special assessments in writing.</li>
          <li><strong>Seller's property disclosure</strong> — fully completed, signed, and dated before the offer.</li>
        </ul>
      </div>

      <!-- FINANCING -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Financing</span> <span class="rest">Guardrails</span></h2>
        <div class="risk-grid">
          <div class="risk-card risk-low">
            <div class="risk-label">Preferred Path</div>
            <h5>Personal Mortgage — Jumbo Conventional</h5>
            <p>20–25% down, 30-year fixed, through Patrick Lavette at Renasant Bank. Keeps the
              transaction fully separate from Norris Utilities® balance sheet.</p>
          </div>
          <div class="risk-card risk-med">
            <div class="risk-label">Cautious Path</div>
            <h5>Personal Mortgage — Portfolio Lender</h5>
            <p>Only if Renasant terms are unfavorable. Compare APR, points, and prepayment penalties
              across two additional quotes before signing.</p>
          </div>
          <div class="risk-card risk-high">
            <div class="risk-label">Do Not Use</div>
            <h5>Business Collateral or Inventory Lien</h5>
            <p>No Norris Utilities® asset — FlexPro Armor inventory, receivables, or equipment —
              may be pledged, cross-collateralized, or guaranteed against this personal purchase.</p>
          </div>
        </div>
      </div>

      <!-- RISKS -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Risk</span> <span class="rest">Map</span></h2>
        <div class="risk-grid">
          <div class="risk-card risk-high">
            <div class="risk-label">High Risk</div>
            <h5>Appraisal Shortfall</h5>
            <p>On a 7,098 sq ft home, an appraisal under contract price can kill the deal or force
              additional cash down. The appraisal contingency exists for exactly this scenario.</p>
          </div>
          <div class="risk-card risk-high">
            <div class="risk-label">High Risk</div>
            <h5>Cross-Collateralization Pressure</h5>
            <p>Any lender who requests a business guarantee, inventory lien, or blanket UCC against
              Norris Utilities® is disqualified — regardless of rate offered.</p>
          </div>
          <div class="risk-card risk-med">
            <div class="risk-label">Medium Risk</div>
            <h5>Deferred Maintenance</h5>
            <p>Large estates routinely carry $25K–$100K of deferred maintenance. Price the inspection
              report into the counter, not into a post-closing repair surprise.</p>
          </div>
          <div class="risk-card risk-med">
            <div class="risk-label">Medium Risk</div>
            <h5>Property Tax Reassessment</h5>
            <p>Purchase price resets the assessed value in many jurisdictions. Model the new annual
              tax number, not the seller's legacy bill.</p>
          </div>
          <div class="risk-card risk-low">
            <div class="risk-label">Lower Risk</div>
            <h5>Closing Calendar Conflict</h5>
            <p>Do not set closing against a Norris Utilities® inventory-buy cycle or a scheduled
              shipment week — pick a calm week on the business side.</p>
          </div>
          <div class="risk-card risk-low">
            <div class="risk-label">Lower Risk</div>
            <h5>Insurance Cost Surprise</h5>
            <p>Mitigated by binding a written homeowner's quote before contingency removal. Quote in
              hand, no surprise at close.</p>
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Target</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <h5>Week 1 — Preparation</h5>
            <p>Engage buyer's broker. Order written CMA. Confirm seller motivation and days on market.
              Pull pre-approval letter from Renasant Bank.</p>
          </div>
          <div class="timeline-item">
            <h5>Week 2 — Opening Offer</h5>
            <p>Submit written offer at Round 1 price with full standard contingencies. Include
              pre-approval letter and proof-of-funds for down payment.</p>
          </div>
          <div class="timeline-item">
            <h5>Week 3 — Counter &amp; Trade</h5>
            <p>Respond to seller counter with Round 2 position. Trade closing date, rent-back, or
              repair credits in exchange for price movement toward target zone.</p>
          </div>
          <div class="timeline-item">
            <h5>Week 4 — Under Contract</h5>
            <p>Ratify purchase agreement. Open escrow. Deliver earnest money to title company.
              Begin 10-business-day inspection period.</p>
          </div>
          <div class="timeline-item">
            <h5>Weeks 5–6 — Due Diligence</h5>
            <p>Complete full inspection, specialist reports, survey, title search, appraisal order,
              insurance binding, and HOA document review. Negotiate repair credit if warranted.</p>
          </div>
          <div class="timeline-item">
            <h5>Weeks 7–8 — Clear to Close</h5>
            <p>Remove remaining contingencies in writing. Final walk-through 48 hours before closing.
              Wire funds. Record deed. Close.</p>
          </div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <h4>Guiding Principle</h4>
        <p>The deal that works is the one Aaron can walk away from without flinching. Price follows
          leverage. Leverage follows preparation: written comps, a pre-approval in hand, documented
          contingencies, and a ready alternative. Negotiate from that posture — never from urgency.</p>
      </div>

      <!-- NEXT STEPS -->
      <div class="section">
        <h2 class="section-title"><span class="first-word">Next</span> <span class="rest">Actions</span></h2>
        <ul class="checklist">
          <li><strong>Confirm list price and days on market</strong> — call listing agent this week, log in master tracker.</li>
          <li><strong>Engage buyer's-side broker</strong> — exclusive representation, no dual agency on a transaction this size.</li>
          <li><strong>Order written CMA</strong> — from the buyer's broker, not a free online estimator.</li>
          <li><strong>Request pre-approval from Patrick Lavette, Renasant Bank</strong> — for the target purchase range.</li>
          <li><strong>Set Aaron's walk-away number</strong> — in writing, in the master tracker, before the first offer.</li>
          <li><strong>Schedule a personal financial check</strong> — liquid reserves after down payment must cover 6 months of business and household outflows.</li>
        </ul>
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
    <div class="nu-footer-meta">
      Internal acquisition brief — prepared April 24, 2026 — not a binding offer or legal advice. Consult licensed counsel before executing any purchase agreement.
    </div>
  </footer>

</body>
</html>