<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
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
      --nu-success: #2D7A3E;
      --nu-warning: #B8860B;
      --nu-danger: #B22222;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 80px);
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
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 8px 24px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* DOC TITLE */
    .doc-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-title-block h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.15;
    }
    .doc-title-block h1 .accent { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.95rem;
      color: #666;
      letter-spacing: 0.04em;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section { margin-bottom: 50px; }

    /* PROPERTY SUMMARY CARD */
    .property-summary {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 50px;
      box-shadow: 0 8px 28px rgba(0,0,51,0.18);
      position: relative;
      overflow: hidden;
    }
    .property-summary::after {
      content: '';
      position: absolute;
      top: -30%; right: -10%;
      width: 50%; height: 160%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
      pointer-events: none;
    }
    .property-summary h2 {
      font-weight: 900;
      font-size: 1.35rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
      position: relative;
    }
    .property-summary .address {
      font-size: 1.7rem;
      font-weight: 700;
      margin-bottom: 22px;
      position: relative;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      position: relative;
    }
    .stat {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .stat-label {
      font-size: 0.72rem;
      color: rgba(255,255,255,0.7);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-white);
    }

    /* TWO-COLUMN GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-card p { margin-bottom: 10px; font-size: 0.95rem; }
    .nu-card ul { padding-left: 20px; }
    .nu-card ul li {
      margin-bottom: 8px;
      font-size: 0.95rem;
      list-style: none;
      position: relative;
      padding-left: 16px;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* PRIORITY BADGE */
    .priority-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 30px 12px 18px;
      margin-bottom: 28px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .priority-badge::before {
      content: '';
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      margin-right: 12px;
      box-shadow: 0 0 8px var(--nu-cyan);
    }

    /* OFFER SCENARIO TABLE */
    .scenario-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .scenario-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .scenario-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .scenario-table tr:last-child td { border-bottom: none; }
    .scenario-table tr.recommended {
      background: rgba(6,208,255,0.08);
    }
    .scenario-table tr.recommended td:first-child {
      border-left: 4px solid var(--nu-blue);
      font-weight: 900;
    }
    .tag-rec {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-left: 8px;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .tl-item {
      position: relative;
      margin-bottom: 22px;
      padding-left: 18px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }
    .tl-action {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CONTINGENCY LIST */
    .contingency-list {
      list-style: none;
      padding: 0;
    }
    .contingency-list li {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px;
      margin-bottom: 10px;
      border-radius: 0 6px 6px 0;
    }
    .contingency-list li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    .contingency-list li span {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin: 28px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p { font-size: 0.96rem; }

    /* SCRIPT BOX */
    .script-box {
      background: #fafafc;
      border: 1px dashed #aaa;
      border-radius: 6px;
      padding: 20px 24px;
      font-style: italic;
      color: var(--nu-dark-text);
      margin-top: 14px;
      line-height: 1.7;
    }
    .script-box::before {
      content: 'PROPOSED LANGUAGE';
      display: block;
      font-style: normal;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      color: #888;
      margin-bottom: 10px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
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
      margin: 14px auto 18px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-container { padding: 40px 22px 60px; }
      .doc-title-block h1 { font-size: 1.7rem; }
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .property-summary { padding: 26px 22px; }
      .property-summary .address { font-size: 1.3rem; }
      .scenario-table { font-size: 0.85rem; }
      .scenario-table th, .scenario-table td { padding: 10px 8px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Acquisition Strategy Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE -->
      <div class="doc-title-block">
        <h1><span class="accent">Negotiation</span> Strategy — 4505 Buttewoods Estate</h1>
        <div class="doc-meta">
          <strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp;
          <strong>Date:</strong> April 21, 2026 &nbsp;|&nbsp;
          <strong>Source:</strong> reMarkable Action Item
        </div>
      </div>

      <!-- PRIORITY BADGE -->
      <div class="priority-badge">High-Value Personal Acquisition</div>

      <!-- PROPERTY SUMMARY -->
      <section class="property-summary">
        <h2>Subject Property</h2>
        <div class="address">4505 Buttewoods — 7,098 sq ft Estate</div>
        <div class="property-stats">
          <div class="stat">
            <div class="stat-label">Total Sq Ft</div>
            <div class="stat-value">7,098</div>
          </div>
          <div class="stat">
            <div class="stat-label">Property Type</div>
            <div class="stat-value">Estate</div>
          </div>
          <div class="stat">
            <div class="stat-label">Status</div>
            <div class="stat-value">Negotiation</div>
          </div>
          <div class="stat">
            <div class="stat-label">Buyer</div>
            <div class="stat-value">A.C. Norris</div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>1. Objective &amp;</span> Position</h2>
        <div class="grid-2">
          <div class="nu-card">
            <h3>Primary Objective</h3>
            <p>Acquire 4505 Buttewoods at a price and terms that protect Aaron's capital, preserve liquidity for Norris Utilities® operations, and resolve every open disclosure question in writing before closing.</p>
            <p>The deal must close clean — no unresolved water, structural, or title items carried forward as post-close risk.</p>
          </div>
          <div class="nu-card">
            <h3>Negotiating Position</h3>
            <ul>
              <li>Buyer is financially qualified and decisive — credible close.</li>
              <li>Open disclosure items (water intrusion, rental-listing discrepancies) create legitimate downward pressure.</li>
              <li>Walk-away authority preserved — no emotional attachment communicated to listing side.</li>
              <li>All concessions traded for written confirmations, not verbal assurances.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>2. Verified</span> Leverage Points</h2>
        <p style="margin-bottom: 22px;">These items, already documented in prior reMarkable action records, form the factual basis for any price reduction or contingency request. Each is to be presented as a fact-finding inquiry first, then converted to a written concession.</p>

        <ul class="contingency-list">
          <li>
            <strong>Water Intrusion Disclosure Omission</strong>
            <span>Identified in prior file review (Task 270, 04/17). Listing materials did not disclose water intrusion history. Establishes basis for written H2O Waterproofing scope, transferable warranty, and price credit.</span>
          </li>
          <li>
            <strong>Rental Listing vs. For-Sale Listing Discrepancy</strong>
            <span>Identified in prior file review (Task 272, 04/21). Property was previously offered as a rental with material details that differ from current sale listing. Requires seller-signed clarification or a credit at closing.</span>
          </li>
          <li>
            <strong>Pre-Close Written Verification Requirement</strong>
            <span>Identified in prior file review (Task 271, 04/17). Written confirmation from H2O Waterproofing required before closing — not after. Non-negotiable condition.</span>
          </li>
          <li>
            <strong>Estate Carry Cost</strong>
            <span>7,098 sq ft generates substantial monthly utility, insurance, and maintenance burden for the seller. Time-on-market pressure compounds in seller's favor of a clean cash-equivalent close.</span>
          </li>
        </ul>
      </section>

      <!-- OFFER SCENARIOS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>3. Offer</span> Scenarios</h2>
        <p style="margin-bottom: 22px;">Three structured scenarios, ranked from opening bid to walk-away ceiling. The recommended track is Scenario B — anchors below ask, leaves room to concede upward in exchange for written cures, and preserves walk-away credibility.</p>

        <table class="scenario-table">
          <thead>
            <tr>
              <th style="width: 22%;">Scenario</th>
              <th>Price Position</th>
              <th>Earnest Money</th>
              <th>Key Terms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A — Opening Probe</td>
              <td>List minus 12% to 14%</td>
              <td>1% — held in escrow</td>
              <td>30-day inspection. Water + rental-listing disclosure cure required before EM goes hard. Cash-equivalent close.</td>
            </tr>
            <tr class="recommended">
              <td>B — Anchored Move <span class="tag-rec">Recommended</span></td>
              <td>List minus 7% to 9%</td>
              <td>2% — split escrow</td>
              <td>21-day inspection. Seller delivers H2O Waterproofing written scope + transferable warranty. Written reconciliation of rental-vs-sale listing variances. Title insurance at seller cost.</td>
            </tr>
            <tr>
              <td>C — Walk-Away Ceiling</td>
              <td>List minus 4% to 5%</td>
              <td>3% — partial hard at day 14</td>
              <td>14-day inspection. Seller cures all written disclosures. Aaron retains right to walk if any post-inspection finding materially exceeds disclosed scope.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-title">Concession Strategy</div>
          <p>Move from Scenario A to B only after the seller responds in writing. Move from B to C only if the seller delivers signed cures on water intrusion and listing reconciliation. Never concede price without receiving a documented cure in exchange.</p>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>4. Negotiation</span> Timeline</h2>
        <div class="timeline">
          <div class="tl-item">
            <span class="tl-day">Day 0 — April 21</span>
            <div class="tl-action">Internal Strategy Lock-In</div>
            <div class="tl-detail">Confirm price ceiling, walk-away threshold, and required written cures with Aaron. Brief buyer's agent on Scenario B as opening posture.</div>
          </div>
          <div class="tl-item">
            <span class="tl-day">Day 1 to 2</span>
            <div class="tl-action">Submit Scenario A (Opening Probe)</div>
            <div class="tl-detail">Written offer delivered with disclosure inquiry letter attached. Calls out water intrusion and rental-listing items as standalone issues — not yet linked to price.</div>
          </div>
          <div class="tl-item">
            <span class="tl-day">Day 3 to 7</span>
            <div class="tl-action">Receive Counter, Pivot to Scenario B</div>
            <div class="tl-detail">Concede measured ground on price. Hold firm on written H2O Waterproofing scope and rental-vs-sale reconciliation as conditions of moving forward.</div>
          </div>
          <div class="tl-item">
            <span class="tl-day">Day 8 to 14</span>
            <div class="tl-action">Inspection Period &amp; Disclosure Cures</div>
            <div class="tl-detail">Independent inspection ordered. H2O Waterproofing letter received in writing. Rental-listing variances reconciled in seller-signed addendum.</div>
          </div>
          <div class="tl-item">
            <span class="tl-day">Day 15 to 21</span>
            <div class="tl-action">Final Terms or Walk</div>
            <div class="tl-detail">If all cures delivered, finalize at Scenario B price. If material findings exceed disclosed scope, invoke Scenario C ceiling or exit cleanly with EM returned.</div>
          </div>
          <div class="tl-item">
            <span class="tl-day">Day 22 to 35</span>
            <div class="tl-action">Close</div>
            <div class="tl-detail">Title insurance verified. Transferable waterproofing warranty assigned at closing table. Funds wired only after all cures appear in the closing package.</div>
          </div>
        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>5. Required</span> Contingencies</h2>
        <p style="margin-bottom: 22px;">These contingencies must appear in the offer in writing. None are negotiable. Each was identified in a prior reMarkable action review and is now codified here as a closing condition.</p>

        <ul class="contingency-list">
          <li>
            <strong>Water Intrusion Cure (Pre-Close, In Writing)</strong>
            <span>H2O Waterproofing must provide written scope of work, completion confirmation, and transferable warranty. Delivered before closing — not after. Carries to buyer at closing.</span>
          </li>
          <li>
            <strong>Disclosure Reconciliation Addendum</strong>
            <span>Seller-signed addendum reconciling all material differences between the prior rental listing and the current for-sale listing. No verbal explanations accepted.</span>
          </li>
          <li>
            <strong>Independent Inspection</strong>
            <span>Buyer's choice of licensed inspector. Right to terminate with full EM return if findings materially exceed disclosed condition.</span>
          </li>
          <li>
            <strong>Title &amp; Survey</strong>
            <span>Owner's title policy at seller cost. Current survey delivered before closing. Any encroachments or easements cured or credited.</span>
          </li>
          <li>
            <strong>Financing or Cash-Equivalent Close</strong>
            <span>Aaron retains optionality between cash close and conventional financing. Closing date driven by buyer convenience, not seller pressure.</span>
          </li>
          <li>
            <strong>Walk-Away Without Penalty</strong>
            <span>If any contingency goes uncured, EM returns in full and buyer exits with no further obligation.</span>
          </li>
        </ul>
      </section>

      <!-- LANGUAGE / SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>6. Negotiation</span> Language</h2>
        <div class="grid-2">
          <div class="nu-card">
            <h3>Opening Disclosure Inquiry</h3>
            <div class="script-box">
              We want to move on this property and are prepared to perform. Before we paper terms, we need written confirmation on two open items: the water intrusion history and the variances between the prior rental listing and the current for-sale listing. Please have the seller's side address both in writing within five business days.
            </div>
          </div>
          <div class="nu-card">
            <h3>Counter Response (Move to Scenario B)</h3>
            <div class="script-box">
              We can come up on price in exchange for a written H2O Waterproofing scope of work, transferable warranty, and a seller-signed addendum reconciling the rental and sale listing details. Concession is contingent on receiving both cures in writing before earnest money goes hard.
            </div>
          </div>
          <div class="nu-card">
            <h3>If Disclosure Cures Are Refused</h3>
            <div class="script-box">
              Without written cures on the water intrusion item and listing reconciliation, we cannot proceed. We will release the property and our earnest money will return per the contract. We are still interested if the seller is willing to address these items in writing.
            </div>
          </div>
          <div class="nu-card">
            <h3>Closing Confirmation Language</h3>
            <div class="script-box">
              Funds will wire only after the closing package includes the H2O Waterproofing transferable warranty, the seller-signed disclosure reconciliation addendum, the owner's title policy at seller cost, and a current survey. No funding before package is complete.
            </div>
          </div>
        </div>
      </section>

      <!-- DECISION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>7. Aaron's</span> Pre-Offer Checklist</h2>
        <div class="nu-card">
          <ul class="checklist">
            <li>Confirm walk-away price ceiling and write it down before any conversation with listing side.</li>
            <li>Confirm cash position and financing optionality with Patrick Lavette at Renasant Bank.</li>
            <li>Confirm acquisition does not constrain working capital required for Norris Utilities® operations (Skylift PO carry, FlexPro Armor inventory, Samson Rope orders).</li>
            <li>Authorize buyer's agent to deliver Scenario A in writing with disclosure inquiry attached.</li>
            <li>Pre-line up independent inspector — booked for Day 8 of the timeline.</li>
            <li>Confirm H2O Waterproofing contact and required documentation format before requesting from seller.</li>
            <li>Set internal review checkpoints at Day 7 and Day 14 to evaluate seller responsiveness.</li>
            <li>Pre-draft walk-away letter so it is ready to send the moment a hard line is crossed.</li>
          </ul>
        </div>
      </section>

      <!-- RISK FRAME -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>8. Risk</span> Frame</h2>
        <div class="grid-3">
          <div class="nu-card">
            <h3>Capital Risk</h3>
            <p>Estate-level acquisition consumes liquidity that would otherwise back Norris Utilities® receivables float and FlexPro Armor inventory build. Mitigated by financing optionality and clear walk-away ceiling.</p>
          </div>
          <div class="nu-card">
            <h3>Disclosure Risk</h3>
            <p>Two known open disclosure items (water intrusion, rental-vs-sale variance) signal the seller's record-keeping is incomplete. Treated as a leading indicator — assume more will surface in inspection.</p>
          </div>
          <div class="nu-card">
            <h3>Execution Risk</h3>
            <p>7,098 sq ft estates close slower than the buyer's preferred 30-day window. Build seller-pressure leverage by anchoring an early close date with cash-equivalent financing.</p>
          </div>
        </div>
      </section>

      <!-- CALLOUT — FINAL POSTURE -->
      <div class="callout">
        <div class="callout-title">Final Posture</div>
        <p>Open with disclosure inquiry — not price. Convert verified disclosure gaps into written cures. Trade price concessions only for documented seller actions. Hold walk-away credibility throughout. Close clean or do not close at all.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color: var(--nu-white);">Aaron C. Norris</strong> — Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;|&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>