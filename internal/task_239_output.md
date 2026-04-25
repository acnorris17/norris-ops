<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 50%, #00aaff 75%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
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
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    .nu-document-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 32px;
      padding: 20px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .nu-meta-item {
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .nu-meta-item strong {
      display: block;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }

    .nu-page-intro {
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 48px;
      max-width: 900px;
      line-height: 1.7;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 20px;
    }

    /* PROPERTY OVERVIEW */
    .nu-overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .nu-stat-label {
      font-size: 0.7rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
    }
    .nu-stat-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-stat-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    /* INFO CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-card li::before {
      content: '';
      position: absolute;
      left: 0; top: 0.55em;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
      border-left: 3px solid var(--nu-medium-gray);
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 28px;
    }
    .nu-timeline-item:last-child { padding-bottom: 0; }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -40px; top: 6px;
      width: 16px; height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-phase {
      font-weight: 900;
      font-size: 0.7rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 4px;
    }
    .nu-timeline-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-timeline-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-table td {
      padding: 14px 18px;
      font-size: 0.95rem;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .nu-table .num {
      font-weight: 700;
      color: var(--nu-blue);
      white-space: nowrap;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 24px 28px;
      border-radius: 0 8px 8px 0;
      margin: 32px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    .nu-callout p {
      font-size: 1rem;
      color: var(--nu-dark-text);
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checkbox {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }

    /* CTA */
    .nu-cta-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 32px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 32px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 24px; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 20px; }
      .nu-stat-value { font-size: 1.35rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-stat-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-cta-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META -->
      <div class="nu-document-meta">
        <div class="nu-meta-item">
          <strong>Document</strong>
          Estate Acquisition Strategy Brief
        </div>
        <div class="nu-meta-item">
          <strong>Property</strong>
          4505 Buttewoods — 7,098 sq ft
        </div>
        <div class="nu-meta-item">
          <strong>Owner</strong>
          Aaron C. Norris, Founder &amp; CEO
        </div>
        <div class="nu-meta-item">
          <strong>Status</strong>
          Active — Negotiation Phase
        </div>
        <div class="nu-meta-item">
          <strong>Classification</strong>
          Internal / Confidential
        </div>
      </div>

      <h1 class="nu-section-title" style="font-size:2.2rem; margin-bottom:12px;">
        <span class="accent">Negotiate</span> <span class="rest">Purchase — 4505 Buttewoods Estate</span>
      </h1>
      <div class="nu-section-rule"></div>

      <p class="nu-page-intro">
        Action item captured from the reMarkable: pursue purchase of the 7,098 sq ft estate located at
        4505 Buttewoods. This brief organizes the property snapshot, the negotiation playbook, the diligence
        checklist, and the next concrete steps so the deal can move forward with the same discipline applied
        to every Norris Utilities® transaction.
      </p>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Property</span> <span class="rest">Snapshot</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-overview-grid">
          <div class="nu-stat-card">
            <div class="nu-stat-label">Address</div>
            <div class="nu-stat-value" style="font-size:1.1rem;">4505 Buttewoods</div>
            <div class="nu-stat-sub">Subject property</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Heated Area</div>
            <div class="nu-stat-value">7,098</div>
            <div class="nu-stat-sub">square feet</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Asset Type</div>
            <div class="nu-stat-value" style="font-size:1.1rem;">Estate Residence</div>
            <div class="nu-stat-sub">Primary single-family</div>
          </div>
          <div class="nu-stat-card">
            <div class="nu-stat-label">Phase</div>
            <div class="nu-stat-value" style="font-size:1.1rem;">Negotiation</div>
            <div class="nu-stat-sub">Pre-offer to LOI</div>
          </div>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-title">Source of Record</div>
          <p>
            This task originates from a reMarkable handwritten note captured by Aaron C. Norris.
            Property facts beyond the address and square footage will be confirmed through public records,
            the listing broker, and on-site inspection before any offer is finalized.
          </p>
        </div>
      </section>

      <!-- SECTION 2: NEGOTIATION OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Negotiation</span> <span class="rest">Objectives</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge-list">
          <div class="nu-badge"><span class="nu-badge-num">1</span> Acquire 4505 Buttewoods at the lowest defensible price supported by comparable sales</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span> Lock favorable terms — flexible closing date, reasonable inspection window, seller-paid items where leverage allows</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span> Confirm the asset is free of legal, environmental, structural, or title encumbrances before earnest money is at risk</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span> Preserve cash position for ongoing Norris Utilities® operations — no acquisition that strains working capital</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span> Document every step so the deal can withstand legal, lender, and CPA review without rework</div>
        </div>
      </section>

      <!-- SECTION 3: VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Valuation</span> <span class="rest">Framework</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Anchor</th>
                <th>Method</th>
                <th>What It Tells Us</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Market Comparables</td>
                <td>3–5 closed sales within 12 months, similar sq ft, same submarket</td>
                <td>Defensible price-per-square-foot range</td>
                <td>MLS / Realtor partner</td>
              </tr>
              <tr>
                <td>Tax Assessment</td>
                <td>Pull county assessor record</td>
                <td>Floor reference; gap vs. asking signals over-listing</td>
                <td>County records</td>
              </tr>
              <tr>
                <td>Replacement Cost</td>
                <td>Estimate cost to rebuild 7,098 sq ft at current local rates</td>
                <td>Sanity check vs. land + improvements offered</td>
                <td>Licensed contractor</td>
              </tr>
              <tr>
                <td>Independent Appraisal</td>
                <td>Order under contract — required by lender regardless</td>
                <td>Final, defensible valuation for closing and financing</td>
                <td>Appraiser</td>
              </tr>
              <tr>
                <td>Carry &amp; Operating Cost</td>
                <td>Annual property tax, insurance, utilities, maintenance reserve</td>
                <td>True annual cost of ownership beyond purchase price</td>
                <td>CPA review</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 4: NEGOTIATION TACTICS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Negotiation</span> <span class="rest">Tactics &amp; Levers</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Price Levers</h3>
            <ul>
              <li>Open below comparable sale average and walk price up only with reciprocal seller concessions</li>
              <li>Use any inspection finding (roof, HVAC, foundation, electrical) as a credit request, not a renegotiation surprise</li>
              <li>Tie price to appraisal — written appraisal contingency keeps a financing escape if value comes in low</li>
              <li>If property has been listed more than 60 days, anchor offer to days-on-market dynamics</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Term Levers</h3>
            <ul>
              <li>Offer a flexible closing date in exchange for price — sellers value certainty</li>
              <li>Reasonable inspection window — long enough to be thorough, short enough to signal seriousness</li>
              <li>Seller-paid title insurance, transfer tax, or specific repairs in lieu of price reductions</li>
              <li>Earnest money sized to signal commitment without overexposing capital</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Information Levers</h3>
            <ul>
              <li>Understand seller motivation — relocation, estate, financial pressure, downsizing — and align offer accordingly</li>
              <li>Document time on market, prior price reductions, and any pending offers</li>
              <li>Identify any known repair issues already disclosed to set inspection expectations</li>
              <li>Verify whether seller has a backup offer before assuming negotiating room</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Discipline Lines</h3>
            <ul>
              <li>Walkaway price set in writing before first offer — never moved verbally in the moment</li>
              <li>No earnest money released until inspection, title, and appraisal contingencies cleared</li>
              <li>All counteroffers reviewed against carry-cost model, not just sticker price</li>
              <li>Final approval to sign by Aaron only — no agent or attorney commits without sign-off</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Due</span> <span class="rest">Diligence Checklist</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Title &amp; Legal</h3>
            <ul class="nu-checklist" style="padding:0;">
              <li><span class="nu-checkbox"></span><span>Order title commitment from preferred title company</span></li>
              <li><span class="nu-checkbox"></span><span>Review for liens, easements, encroachments, restrictive covenants</span></li>
              <li><span class="nu-checkbox"></span><span>Confirm survey is current or order new ALTA survey</span></li>
              <li><span class="nu-checkbox"></span><span>Verify HOA / neighborhood association status, dues, restrictions</span></li>
              <li><span class="nu-checkbox"></span><span>Attorney review of purchase contract before signing</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Physical Condition</h3>
            <ul class="nu-checklist" style="padding:0;">
              <li><span class="nu-checkbox"></span><span>Whole-house inspection by licensed inspector</span></li>
              <li><span class="nu-checkbox"></span><span>Separate roof inspection — age, condition, remaining life</span></li>
              <li><span class="nu-checkbox"></span><span>HVAC service records and current condition</span></li>
              <li><span class="nu-checkbox"></span><span>Foundation evaluation if any cracks, settlement, or moisture</span></li>
              <li><span class="nu-checkbox"></span><span>Termite / wood-destroying organism inspection</span></li>
              <li><span class="nu-checkbox"></span><span>Septic / sewer scope if applicable</span></li>
              <li><span class="nu-checkbox"></span><span>Radon test where customary in the area</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Financial</h3>
            <ul class="nu-checklist" style="padding:0;">
              <li><span class="nu-checkbox"></span><span>Confirm financing path — cash, conventional, jumbo, portfolio</span></li>
              <li><span class="nu-checkbox"></span><span>Pre-approval letter in hand before submitting offer</span></li>
              <li><span class="nu-checkbox"></span><span>CPA review of acquisition impact — cash flow, taxes, structuring</span></li>
              <li><span class="nu-checkbox"></span><span>Insurance quote prior to going under contract</span></li>
              <li><span class="nu-checkbox"></span><span>Property tax history and reassessment risk on transfer</span></li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Environmental &amp; Use</h3>
            <ul class="nu-checklist" style="padding:0;">
              <li><span class="nu-checkbox"></span><span>Flood zone determination from current FEMA maps</span></li>
              <li><span class="nu-checkbox"></span><span>Lead paint and asbestos status if applicable to age of structure</span></li>
              <li><span class="nu-checkbox"></span><span>Zoning verification — confirm intended use is allowed</span></li>
              <li><span class="nu-checkbox"></span><span>Utility service confirmations — electric, water, sewer, gas, internet</span></li>
              <li><span class="nu-checkbox"></span><span>Neighborhood walk and conversation with adjacent owners</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 6: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Negotiation</span> <span class="rest">Timeline</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 1 — This Week</div>
            <div class="nu-timeline-title">Information Gathering</div>
            <div class="nu-timeline-detail">
              Pull county records, comparable sales, days on market, listing history.
              Drive by the property. Identify listing agent and seller motivation. Confirm financing path and pre-approval.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 2 — Days 7–14</div>
            <div class="nu-timeline-title">Initial Showing &amp; Offer</div>
            <div class="nu-timeline-detail">
              Schedule walkthrough. Build offer with attorney review.
              Submit with documented pre-approval, reasonable contingencies, and an expiration window that creates urgency without ultimatum.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 3 — Under Contract</div>
            <div class="nu-timeline-title">Diligence Window</div>
            <div class="nu-timeline-detail">
              Inspections, title commitment review, appraisal, insurance binding.
              Negotiate any inspection-driven credits in writing. No verbal agreements.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 4 — Pre-Closing</div>
            <div class="nu-timeline-title">Final Approval &amp; Funding</div>
            <div class="nu-timeline-detail">
              Loan clear-to-close, final walkthrough, settlement statement reconciled
              against contract, wire instructions verified by phone with title company on a known number.
            </div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 5 — Close</div>
            <div class="nu-timeline-title">Title Transfer &amp; Possession</div>
            <div class="nu-timeline-detail">
              Sign at title. Funds disbursed. Keys, codes, and warranties transferred.
              Update insurance, utilities, address records, and CPA file.
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Immediate</span> <span class="rest">Next Actions</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-card" style="background: var(--nu-light-gray);">
          <ul class="nu-checklist" style="padding:0;">
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Confirm walkaway price ceiling in writing before any agent conversation</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Identify listing agent of record at 4505 Buttewoods and request full property details</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Pull tax assessor record and any available MLS history for the address</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Schedule a CPA call to confirm acquisition structure and cash impact</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Secure mortgage pre-approval letter sized to support intended offer</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Engage real estate attorney for contract review prior to first offer submission</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Drive the property and the surrounding block in person before submitting any offer</span></li>
            <li><span class="nu-checkbox"></span><span><strong>Aaron</strong> — Document this action item in the master tracker and set a 7-day check-in</span></li>
          </ul>

          <div class="nu-cta-row">
            <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Estate%20Acquisition" class="nu-btn-secondary">Email Aaron</a>
          </div>
        </div>
      </section>

      <!-- SECTION 8: GUIDING PRINCIPLES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="accent">Guiding</span> <span class="rest">Principles</span>
        </h2>
        <div class="nu-section-rule"></div>

        <div class="nu-callout">
          <div class="nu-callout-title">The Norris Utilities® Standard</div>
          <p>
            Every transaction — equipment, rope, bucket covers, real estate — is run with the same discipline:
            verified facts before commitments, written terms before money moves, and walkaway lines that hold
            under pressure. This estate negotiation is no exception. A Legacy of Commitment® means the work
            is done right the first time, and decisions are documented so they hold up under any review.
          </p>
        </div>

        <div class="nu-two-col" style="margin-top:24px;">
          <div class="nu-card">
            <h3>What Wins Deals</h3>
            <ul>
              <li>Preparation that makes the offer credible on day one</li>
              <li>Clean financing and proof of funds in hand before negotiating</li>
              <li>Patience to wait for the right number, not the fastest one</li>
              <li>Plain, direct communication with seller and broker</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>What Kills Deals</h3>
            <ul>
              <li>Emotional bidding above the documented walkaway price</li>
              <li>Contracts signed without attorney and CPA review</li>
              <li>Skipping inspections to win a multiple-offer situation</li>
              <li>Verbal agreements never reduced to writing</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>