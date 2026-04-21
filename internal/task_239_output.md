<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Purchase Negotiation Plan — Norris Utilities®</title>
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
      --nu-red: #C8102E;
      --nu-green: #006B3C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, #06D0FF 100%);
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-content { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 18px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* CHEVRON TRANSITION */
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
      padding: 60px 40px 80px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 40px;
    }
    .nu-eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-sub {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }

    /* META STRIP */
    .nu-meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 48px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      padding: 16px 20px;
    }
    .nu-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      color: #888;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-value.accent { color: var(--nu-blue); }

    /* SECTION */
    .nu-section { margin-bottom: 56px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* OVERVIEW GRID */
    .nu-overview-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-card-title {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 10px; color: var(--nu-body-text); }
    .nu-card p:last-child { margin-bottom: 0; }

    /* DATA TABLE */
    .nu-table-wrap {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table td strong { color: var(--nu-dark-text); }

    /* STRATEGY TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 40px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .nu-phase {
      position: relative;
      padding-bottom: 30px;
    }
    .nu-phase:last-child { padding-bottom: 0; }
    .nu-phase::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-phase-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-phase-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-phase-body { color: var(--nu-body-text); }
    .nu-phase-body ul { margin: 8px 0 0 20px; }
    .nu-phase-body li { margin-bottom: 4px; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 12px 16px 12px 46px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      display: block;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }

    /* RISK GRID */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 20px;
    }
    .nu-risk-card.high { border-left-color: var(--nu-red); }
    .nu-risk-card.medium { border-left-color: var(--nu-accent-gold); }
    .nu-risk-card.low { border-left-color: var(--nu-green); }
    .nu-risk-level {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .nu-risk-card.high .nu-risk-level { background: #fde8ec; color: var(--nu-red); }
    .nu-risk-card.medium .nu-risk-level { background: #fbf3df; color: #8a6d1c; }
    .nu-risk-card.low .nu-risk-level { background: #e3f3ec; color: var(--nu-green); }
    .nu-risk-title {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-risk-body { font-size: 0.92rem; color: var(--nu-body-text); }

    /* OFFER BLOCK */
    .nu-offer-block {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }
    .nu-offer-block::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
    }
    .nu-offer-block > * { position: relative; }
    .nu-offer-eyebrow {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-offer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 28px;
      margin-top: 18px;
    }
    .nu-offer-cell .label {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-offer-cell .value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-white);
    }
    .nu-offer-cell .value.cyan { color: var(--nu-cyan); }
    .nu-offer-note {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
      line-height: 1.7;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #f5f8ff 0%, #e8f2ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 4px;
      margin: 28px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .nu-callout p { color: var(--nu-dark-text); }

    /* BUTTONS */
    .nu-cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
      text-transform: uppercase;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover { background: #0000CC; transform: translateY(-1px); }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

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
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 18px auto;
      border: none;
    }
    .nu-footer-meta {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.55);
      margin-top: 16px;
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .nu-overview-grid { grid-template-columns: 1fr; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-content-area { padding: 40px 22px 60px; }
      .nu-offer-cell .value { font-size: 1.3rem; }
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table-wrap, .nu-offer-block { box-shadow: none; }
      .nu-cta-row { display: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-header-content">
      <div class="nu-phoenix-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Internal · Action Item Brief</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-title-block">
        <div class="nu-eyebrow">reMarkable Action Item · Real Estate</div>
        <h1 class="nu-page-title">Negotiate Purchase: <span>4505 Buttewoods Estate</span></h1>
        <div class="nu-page-sub">7,098 sq ft residence — acquisition planning, strategy &amp; execution checklist</div>
      </div>

      <div class="nu-meta-strip">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Property Address</div>
          <div class="nu-meta-value">4505 Buttewoods</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Total Sq Ft</div>
          <div class="nu-meta-value accent">7,098</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Action Type</div>
          <div class="nu-meta-value">Purchase Negotiation</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner / Buyer</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Brief Prepared</div>
          <div class="nu-meta-value">April 21, 2026</div>
        </div>
      </div>

      <!-- OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Executive</span> <span class="rest">Overview</span></h2>
        <div class="nu-overview-grid">
          <div class="nu-card">
            <div class="nu-card-title">The Objective</div>
            <h3>Acquire 4505 Buttewoods at a price that preserves capital for the operating business.</h3>
            <p>This brief captures every moving piece behind the purchase negotiation of the 7,098 sq ft estate at 4505 Buttewoods so the offer, counter, and closing sequence can move without guesswork.</p>
            <p>The goal is a clean acquisition at a defensible price, a financing structure that does not choke Norris Utilities® working capital, and a closing timeline long enough to handle diligence but short enough to keep the seller engaged.</p>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Why It Matters</div>
            <h3>Personal real estate decisions reach into business liquidity — treat this like a capital allocation decision.</h3>
            <p>A 7,098 sq ft home is a material balance sheet item. Down payment, reserves, and monthly carry all compete with the same capital that funds Samson Rope inventory, FlexPro Armor production runs, and Skylift PO float.</p>
            <p>Every offer number in this document has a business-cash consequence. Negotiate with that in mind.</p>
          </div>
        </div>
      </section>

      <!-- PROPERTY PROFILE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Profile &amp; Fact Sheet</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr><th style="width:32%">Data Point</th><th>Known / To Confirm</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Street Address</strong></td><td>4505 Buttewoods</td></tr>
              <tr><td><strong>Total Heated Square Footage</strong></td><td>7,098 sq ft (confirm against tax card + appraisal district record)</td></tr>
              <tr><td><strong>Parcel / Tax ID</strong></td><td>Pull from county probate / tax assessor record before offer</td></tr>
              <tr><td><strong>Lot Size &amp; Zoning</strong></td><td>Confirm acreage, residential zoning, and any setback or HOA restrictions</td></tr>
              <tr><td><strong>Year Built / Renovated</strong></td><td>Confirm original build year and any major renovations (roof, HVAC, electrical)</td></tr>
              <tr><td><strong>Last Sale Price &amp; Date</strong></td><td>Pull from deed record; use as anchor for opening offer analysis</td></tr>
              <tr><td><strong>Current Tax Assessed Value</strong></td><td>Pull from county assessor; compare to list price to gauge stretch</td></tr>
              <tr><td><strong>Current Mortgage / Liens</strong></td><td>Request title commitment to surface all recorded liens</td></tr>
              <tr><td><strong>HOA / Dues</strong></td><td>Confirm whether within HOA; pull covenants if yes</td></tr>
              <tr><td><strong>Utilities &amp; Carrying Cost</strong></td><td>Request last 12 months of utility bills during diligence</td></tr>
              <tr><td><strong>Seller Motivation</strong></td><td>Estate sale, relocation, divorce, upgrade? — drives leverage</td></tr>
            </tbody>
          </table>
        </div>
        <div class="nu-callout">
          <div class="nu-callout-title">Do Not Offer Until This Table Is Full</div>
          <p>Every blank line above is a negotiation variable walking around unsupervised. Fill the whole table with pulled records (deed, tax card, title commitment) before putting a number on paper. Aaron does not negotiate on vibes.</p>
        </div>
      </section>

      <!-- VALUATION WORKSHEET -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Worksheet</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>How It's Built</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Comparable Sales (Comps)</strong></td>
                <td>Pull 3–5 closed sales within 12 months, within 1 mile, within 15% square footage. Adjust for lot, condition, pool, garage bays.</td>
                <td>Fair market range — this is the defensible offer anchor</td>
              </tr>
              <tr>
                <td><strong>Price Per Square Foot</strong></td>
                <td>Average $/sq ft from comps × 7,098 sq ft. Discount 5–8% for any deferred maintenance identified.</td>
                <td>Secondary price anchor; sanity check for list price</td>
              </tr>
              <tr>
                <td><strong>Tax Assessed Benchmark</strong></td>
                <td>Compare list price to assessed value. Gap &gt; 25% means the seller is stretching or the assessor is behind.</td>
                <td>Tells you whether to lead low or meet mid-range</td>
              </tr>
              <tr>
                <td><strong>Replacement Cost</strong></td>
                <td>Estimate cost per sq ft to rebuild + lot value. Useful on older estates where condition matters.</td>
                <td>Ceiling check — rarely the driver, always the sanity rail</td>
              </tr>
              <tr>
                <td><strong>Cash-Flow Carry Test</strong></td>
                <td>Monthly PITI + utilities + maintenance reserve vs. household cash flow net of business draw.</td>
                <td>Walk-away number — below it, deal strains the operating business</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- OFFER STRUCTURE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Structure &amp; Negotiation Envelope</span></h2>
        <div class="nu-offer-block">
          <div class="nu-offer-eyebrow">Negotiation Envelope — To Be Locked Before Submission</div>
          <h3 style="font-weight:900; font-size:1.6rem; color:#fff; margin-bottom:6px;">Three numbers. Commit before the first offer goes out.</h3>
          <p style="color:rgba(255,255,255,0.85); font-size:0.98rem;">These are the three price points that define the negotiation. Aaron writes them down, Caroline Butler sees them, and nobody gets to improvise in the middle of a counter.</p>
          <div class="nu-offer-grid">
            <div class="nu-offer-cell">
              <div class="label">Opening Offer</div>
              <div class="value cyan">$___________</div>
            </div>
            <div class="nu-offer-cell">
              <div class="label">Target Settlement</div>
              <div class="value">$___________</div>
            </div>
            <div class="nu-offer-cell">
              <div class="label">Walk-Away Ceiling</div>
              <div class="value cyan">$___________</div>
            </div>
            <div class="nu-offer-cell">
              <div class="label">Earnest Money</div>
              <div class="value">1%–2%</div>
            </div>
          </div>
          <div class="nu-offer-note">
            Opening offer sits roughly 8–12% below fair market anchor if comps support it. Target settlement is the honest number the deal should close at. Walk-away ceiling is the line where the business cash impact turns unacceptable — cross it and the answer is no, regardless of how much time has been spent.
          </div>
        </div>

        <div class="nu-callout" style="margin-top:32px;">
          <div class="nu-callout-title">Contingencies To Build Into The Offer</div>
          <p>Financing contingency (30 days), inspection contingency (10 business days with right to renegotiate or terminate), appraisal contingency (must appraise at or above purchase price), title contingency (clean title commitment), and a seller-disclosure acknowledgement. These protect the earnest money if diligence turns up problems.</p>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-table-wrap">
          <ul class="nu-checklist">
            <li><strong>Professional Home Inspection</strong>Licensed inspector — full report covering roof, foundation, HVAC, electrical, plumbing, attic, crawl space. Non-negotiable on a 7,098 sq ft home.</li>
            <li><strong>Roof &amp; HVAC Specialist Inspections</strong>Specialty inspections where the general inspector flags uncertainty. Estate-sized homes usually need both.</li>
            <li><strong>Pest / Termite Letter</strong>WDO / termite inspection, especially on Alabama properties with any wood framing.</li>
            <li><strong>Radon &amp; Mold Screen</strong>Request where basement or crawl space exists. Cheap to run, expensive to miss.</li>
            <li><strong>Septic / Sewer Scope</strong>If on septic, pump and inspect. If on sewer, scope the line to the main.</li>
            <li><strong>Well &amp; Water Quality</strong>If applicable — full potability panel and flow rate test.</li>
            <li><strong>Title Commitment &amp; Survey</strong>Commitment from title company; existing survey or new ALTA survey if any boundary questions.</li>
            <li><strong>Property Tax History (5 Years)</strong>Pull five years of tax history — spot any assessment jumps or exemption changes.</li>
            <li><strong>Insurance Binder Quote</strong>Get a homeowners insurance quote in diligence window. High-value home premium needs to be sized before closing.</li>
            <li><strong>Permit &amp; Code History</strong>Pull permit history from municipality — confirm additions and major work were permitted.</li>
            <li><strong>Seller Disclosures &amp; Prior Claims</strong>Written seller disclosures plus a CLUE report if available — identifies prior insurance claims on the property.</li>
            <li><strong>HOA / Covenant Review</strong>Read the covenants end to end if within an HOA. Restrictions on fences, outbuildings, rentals, or vehicles can matter later.</li>
          </ul>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">&amp; Close Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-phase">
            <div class="nu-phase-label">Phase 1 · Days 0–5</div>
            <div class="nu-phase-title">Data Gathering &amp; Pre-Offer Prep</div>
            <div class="nu-phase-body">
              Pull deed, tax card, and comparable sales. Fill in every blank on the property fact sheet above. Get pre-approval letter updated with buyer's agent. Lock opening offer, target settlement, and walk-away ceiling in writing before any verbal signals are sent.
            </div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-label">Phase 2 · Days 6–10</div>
            <div class="nu-phase-title">Written Offer &amp; First Counter</div>
            <div class="nu-phase-body">
              Submit written offer with earnest money, pre-approval, and proof of funds. Expect first counter within 48–72 hours. Respond once, not twice — crisp moves, not chatter.
              <ul>
                <li>Do not go over target settlement in the first counter</li>
                <li>Escalate in small, specific increments ($2,500–$5,000)</li>
                <li>Trade price for closing date, inclusions, or repair credits — not just dollars</li>
              </ul>
            </div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-label">Phase 3 · Days 11–25</div>
            <div class="nu-phase-title">Diligence Period</div>
            <div class="nu-phase-body">
              Schedule inspection stack inside the first 5–7 days of the diligence window so there is runway to renegotiate. Issue a single consolidated repair request based on inspection findings — not a drip of requests.
            </div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-label">Phase 4 · Days 26–40</div>
            <div class="nu-phase-title">Financing, Appraisal, Title</div>
            <div class="nu-phase-body">
              Appraisal ordered immediately after repair negotiations are resolved. Title commitment reviewed and any objections raised in writing. Lock rate at a point that matches the confirmed close date — not earlier.
            </div>
          </div>
          <div class="nu-phase">
            <div class="nu-phase-label">Phase 5 · Days 41–50</div>
            <div class="nu-phase-title">Closing &amp; Possession</div>
            <div class="nu-phase-body">
              Clear-to-close, final walk-through within 48 hours of closing, wire instructions verified by phone (never by email), sign, record, possess. Move insurance binder to effective-at-closing.
            </div>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <div class="nu-risk-grid">
          <div class="nu-risk-card high">
            <span class="nu-risk-level">High</span>
            <div class="nu-risk-title">Overpaying vs. Comparable Sales</div>
            <div class="nu-risk-body">A 7,098 sq ft estate has a thinner comp set than a tract home. Without disciplined $/sq ft analysis, the stretch is easy. Mitigation: insist on three true comps within 15% size.</div>
          </div>
          <div class="nu-risk-card high">
            <span class="nu-risk-level">High</span>
            <div class="nu-risk-title">Business Cash Strain</div>
            <div class="nu-risk-body">Down payment or carrying cost that forces a pull from Norris Utilities® working capital puts inventory and PO float at risk. Mitigation: respect walk-away ceiling; keep 6 months of business reserves untouched.</div>
          </div>
          <div class="nu-risk-card medium">
            <span class="nu-risk-level">Medium</span>
            <div class="nu-risk-title">Deferred Maintenance Surprises</div>
            <div class="nu-risk-body">Estate-size homes hide deferred maintenance in roof systems, HVAC zones, and mechanical rooms. Mitigation: specialist inspections inside diligence window.</div>
          </div>
          <div class="nu-risk-card medium">
            <span class="nu-risk-level">Medium</span>
            <div class="nu-risk-title">Appraisal Gap</div>
            <div class="nu-risk-body">Appraisal lands below contract price — either seller comes down, buyer brings cash, or deal dies. Mitigation: appraisal contingency in offer; do not waive it.</div>
          </div>
          <div class="nu-risk-card medium">
            <span class="nu-risk-level">Medium</span>
            <div class="nu-risk-title">Title Defects</div>
            <div class="nu-risk-body">Liens, easements, or unrecorded interests on an older property. Mitigation: full title commitment review; owner's title insurance policy at closing.</div>
          </div>
          <div class="nu-risk-card low">
            <span class="nu-risk-level">Low</span>
            <div class="nu-risk-title">Escalation In Counters</div>
            <div class="nu-risk-body">Getting pulled past target settlement through emotional momentum. Mitigation: the three offer numbers are locked in writing before any counter is sent.</div>
          </div>
        </div>
      </section>

      <!-- ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <div class="nu-table-wrap">
          <ul class="nu-checklist">
            <li><strong>Pull public records for 4505 Buttewoods</strong>Deed, tax card, parcel map, prior sale history, recorded liens. Source: county assessor + probate office.</li>
            <li><strong>Order a comparable sales report</strong>Buyer's agent to produce a 12-month comp set within 1 mile and within 15% square footage.</li>
            <li><strong>Refresh mortgage pre-approval letter</strong>Current letter dated within 30 days, showing approved loan amount at the walk-away ceiling, not just the target price.</li>
            <li><strong>Lock the three offer numbers in writing</strong>Opening offer, target settlement, walk-away ceiling — written, dated, signed by Aaron. No improvisation mid-negotiation.</li>
            <li><strong>Line up inspection team in advance</strong>Pre-book general home inspector, roof specialist, HVAC specialist, and pest/termite inspector so the diligence window is not wasted on scheduling.</li>
            <li><strong>Confirm business cash buffer stays intact</strong>Verify operating business retains a minimum of six months of working capital after down payment wires — no exceptions.</li>
          </ul>
        </div>

        <div class="nu-cta-row">
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Negotiation%20Numbers%20Locked" class="nu-btn-primary">Lock Offer Numbers By Email</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call Aaron — 205-500-1343</a>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <hr class="nu-footer-rule">
    <div class="nu-footer-contact">
      <strong style="color:#fff;">Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal Action Item Brief · Prepared April 21, 2026 · Confidential</div>
  </footer>

</body>
</html>