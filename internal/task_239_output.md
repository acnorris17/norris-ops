<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Norris Utilities®</title>
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
    .nu-header > * { position: relative; z-index: 2; }

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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 30px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-inner {
      max-width: 1160px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 22px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .nu-section {
      margin-bottom: 48px;
    }

    .nu-lead {
      font-size: 1.12rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
      max-width: 900px;
    }
    .nu-lead strong { color: #0033cc; }

    /* ══ SUMMARY BAR ══ */
    .nu-summary-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-summary-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .nu-summary-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .nu-summary-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .nu-summary-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ PROPERTY GRID ══ */
    .nu-property-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 30px;
      margin-bottom: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 28px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: #0033cc;
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-data-list {
      list-style: none;
      padding: 0;
    }
    .nu-data-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-data-list li:last-child { border-bottom: none; }
    .nu-data-list .label {
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .nu-data-list .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }

    /* ══ BADGES ══ */
    .nu-badge-row {
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
      padding: 10px 22px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.03em;
    }

    /* ══ STRATEGY / NEGOTIATION ══ */
    .nu-strategy-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 18px;
    }
    .nu-strategy-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 24px;
      border-radius: 0 8px 8px 0;
    }
    .nu-strategy-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: #0033cc;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-strategy-card ul {
      margin: 0;
      padding-left: 18px;
      color: var(--nu-dark-text);
    }
    .nu-strategy-card li {
      margin-bottom: 8px;
      font-size: 0.95rem;
      line-height: 1.55;
    }

    /* ══ OFFER LADDER ══ */
    .nu-offer-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 18px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 10px;
      overflow: hidden;
    }
    .nu-offer-table thead {
      background: linear-gradient(135deg, #0a0e5c, #0033cc);
      color: var(--nu-white);
    }
    .nu-offer-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    .nu-offer-table tbody tr {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-offer-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-offer-table td {
      padding: 14px 16px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-offer-table .tier {
      font-weight: 900;
      color: #0033cc;
    }
    .nu-offer-table .amount {
      font-weight: 700;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 30px;
      margin-top: 18px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, #0033cc, var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding: 0 0 22px 18px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid #0033cc;
      box-shadow: 0 0 0 3px rgba(0,51,204,0.12);
    }
    .nu-timeline-item h4 {
      font-size: 0.98rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-item .when {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-timeline-item p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin: 0;
    }

    /* ══ DUE DILIGENCE CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 24px;
      margin-top: 18px;
    }
    .nu-checklist li {
      position: relative;
      padding: 10px 12px 10px 36px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      font-size: 0.92rem;
      color: var(--nu-dark-text);
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 3px;
      border: 2px solid #0033cc;
      background: var(--nu-white);
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #f5f8ff 0%, #eaf5ff 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 0 10px 10px 0;
      margin: 18px 0 0;
    }
    .nu-callout h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: #0033cc;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-callout p {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* ══ DECISION BAR ══ */
    .nu-decision {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 55%, #00aaff 100%);
      border-radius: 12px;
      padding: 34px 34px 30px;
      color: var(--nu-white);
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 30px;
      align-items: center;
    }
    .nu-decision h3 {
      font-size: 1.35rem;
      font-weight: 900;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-decision p {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.88);
      line-height: 1.55;
      margin: 0;
    }
    .nu-decision .buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .nu-btn {
      display: inline-block;
      padding: 13px 26px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-align: center;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .nu-btn-primary {
      background: var(--nu-cyan);
      color: var(--nu-navy);
    }
    .nu-btn-primary:hover { background: var(--nu-white); }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid rgba(255,255,255,0.6);
    }
    .nu-btn-secondary:hover {
      background: rgba(255,255,255,0.12);
      border-color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px 38px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-meta {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      margin-top: 20px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-summary-bar { grid-template-columns: repeat(2, 1fr); }
      .nu-property-grid { grid-template-columns: 1fr; }
      .nu-strategy-grid { grid-template-columns: 1fr; }
      .nu-checklist { grid-template-columns: 1fr; }
      .nu-decision { grid-template-columns: 1fr; }
      .nu-decision .buttons { flex-direction: row; flex-wrap: wrap; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-inner { padding: 40px 22px 24px; }
      .nu-summary-bar { grid-template-columns: 1fr 1fr; }
      .nu-offer-table { font-size: 0.85rem; }
      .nu-offer-table th, .nu-offer-table td { padding: 10px 10px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-offer-table { box-shadow: none; }
      .nu-decision { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- INTRO -->
      <section class="nu-section">
        <h1 class="nu-section-title"><span class="first">Buttewoods</span> <span class="rest">Estate Acquisition Brief</span></h1>
        <p class="nu-lead">
          Action item captured on Aaron's reMarkable: <strong>negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods.</strong>
          This brief frames the opportunity, sets an offer ladder, and lists the due-diligence items that must clear before any number goes in writing.
          Treat every figure here as a working framework, not a final offer — nothing goes to the seller until Aaron confirms.
        </p>
        <div class="nu-badge-row">
          <span class="nu-badge">Status: Pre-Offer</span>
          <span class="nu-badge">Priority: High</span>
          <span class="nu-badge">Owner: Aaron C. Norris</span>
        </div>
      </section>

      <!-- SUMMARY BAR -->
      <section class="nu-summary-bar">
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Address</div>
          <div class="nu-summary-value">4505 Buttewoods</div>
          <div class="nu-summary-sub">Subject property</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Living Area</div>
          <div class="nu-summary-value">7,098 sq ft</div>
          <div class="nu-summary-sub">Per listing</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Classification</div>
          <div class="nu-summary-value">Estate</div>
          <div class="nu-summary-sub">Single-family residence</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Current Phase</div>
          <div class="nu-summary-value">Negotiation</div>
          <div class="nu-summary-sub">Pre-contract</div>
        </div>
      </section>

      <!-- PROPERTY + ASK -->
      <section class="nu-section">
        <div class="nu-property-grid">

          <div class="nu-card">
            <h3>Property Snapshot</h3>
            <ul class="nu-data-list">
              <li><span class="label">Address</span><span class="value">4505 Buttewoods</span></li>
              <li><span class="label">Total Living Area</span><span class="value">7,098 sq ft</span></li>
              <li><span class="label">Property Type</span><span class="value">Residential Estate</span></li>
              <li><span class="label">Intended Use</span><span class="value">To confirm with Aaron</span></li>
              <li><span class="label">Condition</span><span class="value">Verify on walkthrough</span></li>
              <li><span class="label">Days on Market</span><span class="value">Pull from MLS</span></li>
              <li><span class="label">Disclosure Review</span><span class="value">Required pre-offer</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>What We Need From the Listing</h3>
            <ul class="nu-data-list">
              <li><span class="label">Current Ask</span><span class="value">Pending pull</span></li>
              <li><span class="label">Price / sq ft</span><span class="value">Calculate on ask</span></li>
              <li><span class="label">Tax Assessment</span><span class="value">County records</span></li>
              <li><span class="label">Comp Range (3 mi)</span><span class="value">Agent CMA</span></li>
              <li><span class="label">Seller Motivation</span><span class="value">Ask listing agent</span></li>
              <li><span class="label">Prior Offers</span><span class="value">Request history</span></li>
              <li><span class="label">Contingencies Open</span><span class="value">Inspection + financing</span></li>
            </ul>
          </div>

        </div>

        <div class="nu-callout">
          <h4>Rule of the Road</h4>
          <p>
            No number goes to the seller's agent until the CMA and disclosures are in Aaron's hands, financing is pre-confirmed, and the walkthrough is complete.
            Caroline Butler (CB) routes all inbound seller communication to Aaron for review before any reply goes out.
          </p>
        </div>
      </section>

      <!-- STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <p class="nu-lead">
          Open below list, anchor to the comp-supported value of a 7,098 sq ft home in the Buttewoods submarket, and keep terms (close date, financing, inspection window)
          as the second and third levers. Walk-away price is set before we open the conversation so emotion never drives the number.
        </p>

        <div class="nu-strategy-grid">

          <div class="nu-strategy-card">
            <h4>Opening Position</h4>
            <ul>
              <li>Anchor to the lower band of comparable $ / sq ft closings in the last 180 days.</li>
              <li>Lead with clean financing and a flexible close date — both cost the seller nothing and cost us little.</li>
              <li>Frame the offer as cash-equivalent certainty, not a discount request.</li>
            </ul>
          </div>

          <div class="nu-strategy-card">
            <h4>Concession Order</h4>
            <ul>
              <li>Move price last. Move terms first: close timing, possession date, inspection window.</li>
              <li>Only one concession per round — never give two in a single reply.</li>
              <li>If the seller holds firm on price, negotiate credit at close (repairs, rate buy-down) instead.</li>
            </ul>
          </div>

          <div class="nu-strategy-card">
            <h4>Leverage We Hold</h4>
            <ul>
              <li>Serious, pre-qualified, local buyer — not a speculative flipper.</li>
              <li>Willingness to close on the seller's timeline, including rent-back if useful.</li>
              <li>Clean, short contingency list — every item removed is days off the seller's calendar.</li>
            </ul>
          </div>

          <div class="nu-strategy-card">
            <h4>Walk-Away Triggers</h4>
            <ul>
              <li>Disclosures show unresolved structural, foundation, or water-intrusion issues.</li>
              <li>Seller refuses reasonable inspection access or asks for waiver of standard contingencies.</li>
              <li>Final negotiated price exceeds the pre-set walk-away number by any margin.</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder Framework</span></h2>
        <p class="nu-lead">
          Exact numbers are locked once the CMA comes back. The ladder below is the <strong>shape</strong> Aaron approves before we plug values in — each tier tied to what the seller gives back.
        </p>
        <table class="nu-offer-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Role</th>
              <th>Anchor</th>
              <th>Paired Term Ask</th>
              <th>Trigger to Advance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier">Tier 1</td>
              <td>Opening</td>
              <td class="amount">Low band of comp $ / sq ft</td>
              <td>Flexible close; clean financing</td>
              <td>Seller counter received</td>
            </tr>
            <tr>
              <td class="tier">Tier 2</td>
              <td>Adjusted</td>
              <td class="amount">Mid-band of comps</td>
              <td>Inspection credit on repairs</td>
              <td>Counter within 3% of our target</td>
            </tr>
            <tr>
              <td class="tier">Tier 3</td>
              <td>Best & Final</td>
              <td class="amount">Walk-away ceiling</td>
              <td>Rent-back offered if needed</td>
              <td>Signed within 48 hours or we disengage</td>
            </tr>
            <tr>
              <td class="tier">Walk</td>
              <td>Exit</td>
              <td class="amount">Any number above ceiling</td>
              <td>N/A</td>
              <td>Polite withdrawal; door left open</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <p class="nu-lead">Every item below is gated before Tier 1 goes out. Anything flagged "verify" becomes an inspection or contract contingency.</p>
        <ul class="nu-checklist">
          <li>Pull current MLS listing, price history, and days on market.</li>
          <li>Order 3-mile CMA: 180-day closed sales, 7,000+ sq ft tier.</li>
          <li>Request seller disclosure packet and HOA / covenant docs.</li>
          <li>County records: tax assessment, parcel map, zoning class.</li>
          <li>Verify permitted vs. actual square footage (7,098 sq ft).</li>
          <li>Confirm title is clean — no liens, easements, or encumbrances.</li>
          <li>Pre-qualification letter from lender at offer ceiling.</li>
          <li>Schedule walkthrough; bring structural checklist.</li>
          <li>Inspection vendor booked: roof, HVAC, foundation, plumbing.</li>
          <li>Flood zone, elevation certificate, insurance quote.</li>
          <li>Utilities, easements, and right-of-way review.</li>
          <li>Survey ordered if boundary lines are unclear.</li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Timeline</span></h2>
        <div class="nu-timeline">

          <div class="nu-timeline-item">
            <span class="when">Day 0 — Today</span>
            <h4>Reconfirm Intent With Aaron</h4>
            <p>Aaron reviews this brief and confirms price ceiling, target close date, and who signs the offer.</p>
          </div>

          <div class="nu-timeline-item">
            <span class="when">Day 1–2</span>
            <h4>Pull Listing, Comps, Disclosures</h4>
            <p>Listing agent contacted, CMA ordered, seller disclosures requested. All items logged to master tracker.</p>
          </div>

          <div class="nu-timeline-item">
            <span class="when">Day 3–4</span>
            <h4>Walkthrough &amp; Financing Lock</h4>
            <p>In-person walkthrough with Aaron. Pre-qualification letter updated at offer ceiling. Red flags escalated same day.</p>
          </div>

          <div class="nu-timeline-item">
            <span class="when">Day 5</span>
            <h4>Tier 1 Offer Submitted</h4>
            <p>Written offer at opening anchor with flexible close and clean financing. Response deadline: 48 hours.</p>
          </div>

          <div class="nu-timeline-item">
            <span class="when">Day 6–10</span>
            <h4>Counter Cycle</h4>
            <p>Move through Tier 2 and Tier 3 per response. Aaron approves each step in writing before it goes back.</p>
          </div>

          <div class="nu-timeline-item">
            <span class="when">Day 11+</span>
            <h4>Under Contract or Disengage</h4>
            <p>Either executed contract moves to inspection and appraisal, or we close the file with a clean withdrawal.</p>
          </div>

        </div>
      </section>

      <!-- RISK + NEXT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <div class="nu-property-grid">
          <div class="nu-card">
            <h3>Financial Risks</h3>
            <ul class="nu-data-list">
              <li><span class="label">Overpayment vs. comps</span><span class="value">Cap with ceiling</span></li>
              <li><span class="label">Appraisal gap</span><span class="value">Define max gap up front</span></li>
              <li><span class="label">Rate movement pre-close</span><span class="value">Lock at acceptance</span></li>
              <li><span class="label">Hidden carrying costs</span><span class="value">Tax + insurance check</span></li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Property Risks</h3>
            <ul class="nu-data-list">
              <li><span class="label">Structural / foundation</span><span class="value">Inspection contingent</span></li>
              <li><span class="label">Roof / HVAC lifecycle</span><span class="value">Budget reserve</span></li>
              <li><span class="label">Water intrusion history</span><span class="value">Disclosure + inspection</span></li>
              <li><span class="label">Boundary / survey</span><span class="value">Order if unclear</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DECISION BAR -->
      <section class="nu-section">
        <div class="nu-decision">
          <div>
            <h3>Decision Required From Aaron</h3>
            <p>Confirm (1) the walk-away ceiling, (2) target close date, and (3) whether Caroline Butler runs listing-agent communications with your review, or whether you handle direct. Once approved, CMA and disclosure pulls start the same day.</p>
          </div>
          <div class="buttons">
            <a href="tel:2055001343" class="nu-btn nu-btn-primary">Approve &amp; Proceed</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=Buttewoods%20Estate%20%E2%80%94%20Negotiation%20Brief" class="nu-btn nu-btn-secondary">Reply With Changes</a>
          </div>
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
    <div class="nu-footer-meta">Internal Negotiation Brief · Confidential · Norris Utilities®</div>
  </footer>

</body>
</html>