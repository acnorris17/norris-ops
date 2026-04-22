<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterworth — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warn: #b8860b;
      --nu-danger: #a02030;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-light-gray);
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      width: 72px; height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 24px;
      display: inline-block;
      padding: 8px 22px;
      border: 1.5px solid rgba(255,255,255,0.65);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.35em;
      text-transform: uppercase;
      backdrop-filter: blur(2px);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 10px 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 180px; left: 50%;
      transform: translateX(-50%);
      width: 650px; height: 650px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* DOC TITLE BLOCK */
    .doc-title-block {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin: -20px 0 32px;
      box-shadow: 0 6px 28px rgba(0,0,0,0.08);
      border-top: 4px solid var(--nu-blue);
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-blue);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .doc-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .doc-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 28px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .doc-meta-item {
      display: flex;
      flex-direction: column;
    }
    .doc-meta-label {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.72rem;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .doc-meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .section {
      margin-bottom: 36px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CARDS */
    .card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .card h3 span.num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px; height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 50%;
      font-size: 0.85rem;
      margin-right: 10px;
      font-weight: 900;
    }
    .card p { margin-bottom: 8px; }
    .card ul {
      margin: 10px 0 4px 0;
      padding-left: 22px;
    }
    .card ul li {
      margin-bottom: 6px;
    }
    .card ul li::marker { color: var(--nu-blue); }

    /* PRICE MATRIX */
    .price-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 14px 0 8px;
    }
    .price-tier {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
    }
    .price-tier.opening { border-left-color: var(--nu-success); }
    .price-tier.target { border-left-color: var(--nu-blue); }
    .price-tier.ceiling { border-left-color: var(--nu-warn); }
    .price-tier.walk { border-left-color: var(--nu-danger); }
    .price-tier-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .price-tier-amount {
      font-size: 1.75rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .price-tier-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* TABLE */
    .tbl-wrap { overflow-x: auto; margin: 8px 0; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    table.nu-table th {
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 16px;
      font-size: 0.88rem;
      letter-spacing: 0.03em;
    }
    table.nu-table td {
      padding: 12px 16px;
      font-size: 0.93rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:last-child td { border-bottom: none; }
    table.nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill.leverage { background: #e8f4ec; color: var(--nu-success); }
    .pill.risk { background: #fbeae8; color: var(--nu-danger); }
    .pill.neutral { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    /* SCRIPT BLOCK */
    .script-block {
      background: var(--nu-navy);
      color: rgba(255,255,255,0.92);
      padding: 26px 30px;
      border-radius: 8px;
      border-left: 4px solid var(--nu-cyan);
      margin: 14px 0;
      font-size: 0.96rem;
      line-height: 1.7;
    }
    .script-block strong { color: var(--nu-cyan); }
    .script-block em {
      display: block;
      margin-top: 10px;
      font-style: italic;
      color: rgba(255,255,255,0.65);
      font-size: 0.85rem;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 26px;
      border-radius: 6px;
      margin: 16px 0;
    }
    .callout.warn {
      background: #fff8e6;
      border-left-color: var(--nu-warn);
    }
    .callout .label {
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.78rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .callout.warn .label { color: var(--nu-warn); }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; margin: 8px 0; }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin: 12px 0;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 5px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
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
    .nu-footer-fine {
      margin-top: 22px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 0 20px; }
      .doc-title-block { padding: 26px 22px; }
      .doc-title { font-size: 1.6rem; }
      .section-title { font-size: 1.3rem; }
      .card { padding: 20px; }
      .price-tier-amount { font-size: 1.4rem; }
      .script-block { padding: 20px; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .card, .doc-title-block { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential — Negotiation Strategy</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-title">Negotiation <span>Strategy</span></div>
        <div class="doc-subtitle">$900,000 Opening Offer — 4505 Butterworth Estate (7,098 sq ft), Birmingham, Alabama</div>
        <div class="doc-meta">
          <div class="doc-meta-item">
            <span class="doc-meta-label">Principal</span>
            <span class="doc-meta-value">Aaron C. Norris</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Property</span>
            <span class="doc-meta-value">4505 Butterworth — 7,098 sq ft</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Opening Offer</span>
            <span class="doc-meta-value">$900,000</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Prepared</span>
            <span class="doc-meta-value">April 22, 2026</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Status</span>
            <span class="doc-meta-value">Pre-Offer Planning</span>
          </div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <section class="section">
        <div class="section-title">Executive <span>Summary</span></div>
        <div class="card">
          <p>This document lays out the full negotiation approach for the $900,000 opening offer on the 4505 Butterworth estate. The property is a 7,098 sq ft residence previously scoped under Task 239. The objective is to close at a target basis between $905,000 and $935,000, all-in, with seller concessions that reduce Aaron's out-of-pocket at closing.</p>
          <p>The strategy is built around four principles: <strong>open with anchored discipline</strong>, <strong>lead with proof, not pressure</strong>, <strong>concede on terms before price</strong>, and <strong>preserve the walk-away</strong>. The $900,000 opening is deliberately below the expected clearing price so that counter-moves are earned, not volunteered.</p>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="section">
        <div class="section-title">Price <span>Ladder</span></div>
        <p style="margin-bottom:12px;">Four anchor points govern every movement at the table. Do not cross the ceiling without pulling a term concession the other direction. Do not cross the walk without reopening the deal structure entirely.</p>
        <div class="price-grid">
          <div class="price-tier opening">
            <div class="price-tier-label">Opening Offer</div>
            <div class="price-tier-amount">$900,000</div>
            <div class="price-tier-note">Submitted in writing with proof-of-funds, 14-day close option.</div>
          </div>
          <div class="price-tier target">
            <div class="price-tier-label">Target Landing</div>
            <div class="price-tier-amount">$920,000</div>
            <div class="price-tier-note">Where the deal should close if the seller is realistic.</div>
          </div>
          <div class="price-tier ceiling">
            <div class="price-tier-label">Hard Ceiling</div>
            <div class="price-tier-amount">$935,000</div>
            <div class="price-tier-note">Do not exceed without seller-paid closing costs or 2-10 warranty.</div>
          </div>
          <div class="price-tier walk">
            <div class="price-tier-label">Walk-Away</div>
            <div class="price-tier-amount">$945,000</div>
            <div class="price-tier-note">Beyond this, the numbers no longer earn the position. Walk.</div>
          </div>
        </div>
        <div class="callout warn">
          <div class="label">Discipline Rule</div>
          Never move price and terms in the same round. One lever per round. This forces the seller to show their hand in exchange for each concession rather than bundling.
        </div>
      </section>

      <!-- LEVERAGE ANALYSIS -->
      <section class="section">
        <div class="section-title">Leverage <span>Analysis</span></div>
        <div class="tbl-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:28%;">Factor</th>
                <th style="width:50%;">Read on the Deal</th>
                <th style="width:22%;">Posture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Days on market</strong></td>
                <td>Longer listing history widens the discount room. If past 60 days, lead the narrative with time-on-market; if fresh, lead with certainty-of-close instead.</td>
                <td><span class="pill leverage">Buyer Side</span></td>
              </tr>
              <tr>
                <td><strong>Comparable sales</strong></td>
                <td>Pull three closed comps within 0.75 miles in the last 180 days on 5,500&ndash;8,000 sq ft homes. Use the weakest three to anchor at $900,000.</td>
                <td><span class="pill leverage">Buyer Side</span></td>
              </tr>
              <tr>
                <td><strong>Inspection exposure</strong></td>
                <td>7,098 sq ft means roof, HVAC zones, and foundation are all large-ticket line items. Inspection findings typically justify a $12k&ndash;$25k credit.</td>
                <td><span class="pill leverage">Buyer Side</span></td>
              </tr>
              <tr>
                <td><strong>Certainty of close</strong></td>
                <td>Proof-of-funds + short contingency period is the single strongest non-price lever. Sellers at this price point weigh closure risk heavily.</td>
                <td><span class="pill leverage">Buyer Side</span></td>
              </tr>
              <tr>
                <td><strong>Local scarcity</strong></td>
                <td>7,000+ sq ft inventory in Birmingham is thin. This limits downward pressure once a credible counter-buyer appears.</td>
                <td><span class="pill risk">Seller Side</span></td>
              </tr>
              <tr>
                <td><strong>Seller motivation</strong></td>
                <td>Unknown until the showing. Probe: relocation, estate sale, downsizing, or trade-up. Each motive has a different concession pattern.</td>
                <td><span class="pill neutral">Research</span></td>
              </tr>
              <tr>
                <td><strong>Agent posture</strong></td>
                <td>If dual-agency is in play, the listing agent wants the sale more than the maximum price. Use this if it appears.</td>
                <td><span class="pill neutral">Research</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- TACTICAL PLAYBOOK -->
      <section class="section">
        <div class="section-title">Tactical <span>Playbook</span></div>

        <div class="card">
          <h3><span class="num">1</span>Anchor the opening in documented evidence.</h3>
          <p>The $900,000 number is presented with a one-page comp sheet attached. The sheet shows three recent closed sales, the list-to-close ratio for the zip, and a neutral conclusion. The seller's agent cannot reject a number supported by their own market.</p>
          <ul>
            <li>Attach: three comps, zip-level close ratio, days-on-market curve.</li>
            <li>Do not annotate or argue on the sheet. Let the data sit.</li>
            <li>Submit in writing; never open with a verbal number.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span class="num">2</span>Lead with certainty before leading with price.</h3>
          <p>Before any price discussion, establish two facts: proof-of-funds on letterhead, and a willingness to close in 14&ndash;21 days. Sellers at this price range have usually seen one offer fall through on financing. Removing that risk is worth real dollars.</p>
          <ul>
            <li>Proof-of-funds dated within 7 days of offer.</li>
            <li>Earnest money at 1.5%&ndash;2% of purchase price (signals seriousness without overcommitting).</li>
            <li>Inspection period: 10 business days; appraisal contingency only if financing.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span class="num">3</span>Move terms, not dollars, on the first counter.</h3>
          <p>When the first counter comes back (expected range $960,000&ndash;$985,000), respond by adjusting <em>terms</em>, not price, on the next pass. Shorten the close window, increase earnest money, or drop the appraisal contingency. The price move comes on round three.</p>
          <div class="callout">
            <div class="label">Why this works</div>
            A seller who has been given a term concession but not a price concession begins to see the ceiling of their side. When the buyer then moves price in round three, it lands with much more weight.
          </div>
        </div>

        <div class="card">
          <h3><span class="num">4</span>Trade concessions, never donate them.</h3>
          <p>Every item given up must pull something in return. A shorter inspection period is traded for a repair credit cap. An increased earnest deposit is traded for a reduced contingency window. If the other side takes without giving, the deal is being overpaid.</p>
          <ul>
            <li>Inspection credit cap in exchange for faster close.</li>
            <li>Appliance inclusions in exchange for as-is sale.</li>
            <li>Seller-paid title policy in exchange for increased earnest.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span class="num">5</span>Preserve silence as a lever.</h3>
          <p>After the counter goes in, do not follow up for 48&ndash;72 hours. Silence on a seven-figure offer is uncomfortable to the seller in a way that a follow-up call never is. Let them absorb the number before re-engaging.</p>
        </div>

        <div class="card">
          <h3><span class="num">6</span>Pre-write the walk-away letter.</h3>
          <p>Draft the walk letter before the first offer goes in. It should be respectful, numeric, and final. Having it drafted in advance removes emotion from the decision if the price pushes past $945,000.</p>
        </div>
      </section>

      <!-- ROUND-BY-ROUND -->
      <section class="section">
        <div class="section-title">Round-by-Round <span>Sequence</span></div>
        <div class="card">
          <div class="timeline">
            <div class="timeline-item">
              <strong>Round 1 — Open</strong>
              $900,000 with comp sheet, proof-of-funds, 14-day close, 1.5% earnest. No cover letter, no emotion. Paper only.
            </div>
            <div class="timeline-item">
              <strong>Round 2 — Expected Counter</strong>
              Seller returns somewhere between $960,000 and $985,000. Absorb silently. Do not respond same-day.
            </div>
            <div class="timeline-item">
              <strong>Round 3 — Buyer Response (Terms)</strong>
              Hold price at $900,000. Strengthen terms: 10-business-day inspection window, waive appraisal contingency if cash, bump earnest to 2%.
            </div>
            <div class="timeline-item">
              <strong>Round 4 — Seller Second Counter</strong>
              Expected range $935,000&ndash;$955,000. This is the true signal. Anything under $945,000 confirms the deal is within reach.
            </div>
            <div class="timeline-item">
              <strong>Round 5 — Buyer Response (Price)</strong>
              Move to $915,000. Anchor the move with one specific finding (inspection-assumed deferred maintenance, comp reinforcement, or timeline cost).
            </div>
            <div class="timeline-item">
              <strong>Round 6 — Landing</strong>
              Target close between $920,000 and $935,000, with at least one seller-paid concession (title, warranty, or closing costs).
            </div>
          </div>
        </div>
      </section>

      <!-- SCRIPT -->
      <section class="section">
        <div class="section-title">Opening <span>Script</span></div>
        <p style="margin-bottom:12px;">To the listing agent, on the initial presentation of the $900,000 written offer:</p>
        <div class="script-block">
          <strong>Aaron:</strong> "I've reviewed the home and the recent sales in the area. I'm a serious buyer, financing is confirmed, and I can close in fourteen days. The offer is $900,000, in writing, with proof-of-funds and earnest money attached.
          <br><br>
          The comp sheet walks through three closed sales within three-quarters of a mile in the last six months. The number is not arbitrary — it's anchored in the neighborhood's own market. I'm comfortable with where it lands and I'm ready to move quickly when your seller is.
          <br><br>
          Take the weekend with it. I'll follow up Monday."
          <em>Tone: warm, confident, unhurried. Never apologetic for the number. Never explanatory beyond the comp sheet.</em>
        </div>
      </section>

      <!-- DEFENSIVE LINES -->
      <section class="section">
        <div class="section-title">Defensive <span>Lines</span></div>
        <div class="card">
          <h3>If the agent says "The seller won't even respond to that number."</h3>
          <div class="script-block">
            "That's fair. The number is what the comps support. If your seller has something in the data that changes the picture, I'll look at it. Otherwise the offer stands until Monday."
          </div>
        </div>
        <div class="card">
          <h3>If the seller counters near list price.</h3>
          <div class="script-block">
            "I understand where they're starting. We're a long way apart. I'd rather not trade small numbers back and forth — if there's a serious counter in the $935,000 range, I'll meet it with a stronger close. Short of that, we're probably not the right buyer."
          </div>
        </div>
        <div class="card">
          <h3>If a competing offer is mentioned.</h3>
          <div class="script-block">
            "Understood. My offer is firm, documented, and can close in fourteen days. If the other offer is stronger on certainty or timing, I respect that and I'll step aside. If it's only stronger on headline price, the seller should weigh what actually closes versus what might close."
          </div>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="section">
        <div class="section-title">Pre-Offer <span>Checklist</span></div>
        <div class="card">
          <ul class="checklist">
            <li>Proof-of-funds letter from Renasant Bank, dated within 7 days.</li>
            <li>Comp sheet — three closed sales, 0.75 mile radius, last 180 days.</li>
            <li>Zip-level list-to-close ratio and days-on-market curve.</li>
            <li>Earnest money wire confirmation ready (1.5% of $900,000 = $13,500).</li>
            <li>Title company selected and called. Confirm 14-day close feasibility.</li>
            <li>Inspector booked on contingency (reserve date for day 2 of window).</li>
            <li>Walk-away letter pre-drafted and saved.</li>
            <li>Ceiling and walk numbers written down, signed, and kept off the phone.</li>
            <li>Agent briefed on silence protocol — no follow-up calls during seller review.</li>
          </ul>
        </div>
      </section>

      <!-- RISK REGISTER -->
      <section class="section">
        <div class="section-title">Risk <span>Register</span></div>
        <div class="tbl-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:28%;">Risk</th>
                <th style="width:44%;">Mitigation</th>
                <th style="width:28%;">Trigger to Walk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bidding war emerges</td>
                <td>Do not escalate. Hold at $935,000 ceiling with superior terms. Let certainty-of-close argument work.</td>
                <td>Price required exceeds $945,000.</td>
              </tr>
              <tr>
                <td>Inspection reveals major defect</td>
                <td>Request credit equal to repair bid + 15% contingency; if refused, renegotiate price down by same figure.</td>
                <td>Seller refuses both credit and price adjustment.</td>
              </tr>
              <tr>
                <td>Appraisal comes in low</td>
                <td>Use appraisal to pull price back to appraised value + up to 2%. Standard protocol.</td>
                <td>Seller refuses to meet appraisal and gap exceeds $20,000.</td>
              </tr>
              <tr>
                <td>Seller ghosts after counter</td>
                <td>48&ndash;72 hour silent window, then one firm email re-stating position with expiration date.</td>
                <td>No response within 7 days of firm expiration.</td>
              </tr>
              <tr>
                <td>Title issue surfaces</td>
                <td>Require seller-paid title insurance and full title search before escrow releases.</td>
                <td>Unresolvable title cloud or liens exceeding $10,000.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CLOSING NOTE -->
      <section class="section">
        <div class="section-title">Closing <span>Note</span></div>
        <div class="callout">
          <div class="label">Principle</div>
          The purpose of the $900,000 opening is not to buy the house for $900,000. It is to set the anchor from which every subsequent number is measured. The house is worth what it closes at, and the close price is earned by discipline, not by enthusiasm. Move slowly. Let the paper talk. Stay ready to walk.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris | Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fine">Confidential — Prepared for Aaron C. Norris, April 22, 2026. Do not distribute.</div>
  </footer>

</body>
</html>