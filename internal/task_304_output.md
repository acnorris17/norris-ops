<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Review — 7,098 Sq Ft on 2.11 Acres — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-success-green: #1E7E34;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      opacity: 0.65;
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
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 300;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-document-type {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* ASYMMETRIC CHEVRON — apex ~38% from left */
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

    /* CONTENT AREA */
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
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 54px 40px 70px;
    }

    /* SUBJECT LINE / DOC META */
    .doc-meta {
      border-left: 5px solid var(--nu-blue);
      background: var(--nu-light-gray);
      padding: 20px 24px;
      margin-bottom: 38px;
      border-radius: 0 6px 6px 0;
    }
    .doc-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 0.88rem;
    }
    .doc-meta-item {
      display: flex;
      flex-direction: column;
    }
    .doc-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .doc-meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .section {
      margin-bottom: 42px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      line-height: 1.2;
    }
    .section-title .first {
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SUMMARY BOX */
    .summary-box {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border: 1px solid #d0d6f0;
      border-radius: 8px;
      padding: 28px 30px;
      margin-bottom: 10px;
    }
    .summary-box p {
      margin-bottom: 12px;
    }
    .summary-box p:last-child { margin-bottom: 0; }

    /* STATS GRID */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 10px;
    }
    .stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 18px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .stat-card.cyan { border-top-color: var(--nu-cyan); }
    .stat-card.gold { border-top-color: var(--nu-accent-gold); }
    .stat-value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
    }

    /* DATA TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .data-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .data-table td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .data-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .data-table .label-col {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }

    /* CHEVRON BADGE ROW */
    .badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .chev-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .chev-badge .num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* NEGOTIATION LEVERS */
    .levers {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .lever-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .lever-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .lever-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .lever-num {
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 10px;
      flex-shrink: 0;
    }
    .lever-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
    }
    .lever-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      border-left: 5px solid var(--nu-cyan);
      background: #f0fbff;
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin: 14px 0;
      font-size: 0.94rem;
    }
    .callout.alert {
      border-left-color: var(--nu-alert-red);
      background: #fff5f5;
    }
    .callout strong {
      color: var(--nu-dark-text);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 12px 14px 12px 42px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
    }

    /* PRICE LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-top: 10px;
    }
    .ladder-rung {
      background: var(--nu-white);
      padding: 20px 18px;
      text-align: center;
    }
    .ladder-rung.target {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
    }
    .ladder-rung .tier {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 6px;
      opacity: 0.85;
    }
    .ladder-rung .amount {
      font-weight: 900;
      font-size: 1.35rem;
      line-height: 1.1;
    }
    .ladder-rung .note {
      font-size: 0.78rem;
      margin-top: 4px;
      opacity: 0.85;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.76rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .wrap { padding: 36px 20px 50px; }
      .chev-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .section-title { font-size: 1.25rem; }
      .stat-value { font-size: 1.35rem; }
      .doc-meta-row { gap: 14px; }
      .data-table { font-size: 0.85rem; }
      .data-table th, .data-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .lever-card, .stat-card { box-shadow: none; break-inside: avoid; }
      .section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-document-type">Acquisition Review &amp; Negotiation Brief</div>
  </header>

  <!-- ASYMMETRIC CHEVRON (apex ~38% from left) -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="wrap">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-meta-row">
          <div class="doc-meta-item">
            <span class="doc-meta-label">Subject</span>
            <span class="doc-meta-value">7,098 Sq Ft Estate on 2.11 Acres</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Source</span>
            <span class="doc-meta-value">reMarkable Action Item</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Prepared For</span>
            <span class="doc-meta-value">Aaron C. Norris, Founder &amp; CEO</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Date</span>
            <span class="doc-meta-value">April 24, 2026</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Status</span>
            <span class="doc-meta-value">Review &amp; Negotiate</span>
          </div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <section class="section">
        <h2 class="section-title"><span class="first">Executive</span> <span class="rest">Summary</span></h2>
        <div class="summary-box">
          <p>This brief organizes the review-and-negotiate action item captured on the reMarkable for the 7,098-square-foot residence sitting on 2.11 acres. The purpose of this page is to frame the decision, surface the data gaps, and hand Aaron a clean path from inspection to offer.</p>
          <p>Two tracks run in parallel: <strong>(1) Diligence</strong> — confirm the physical condition, title, taxes, and any liens; and <strong>(2) Negotiation</strong> — set a walk-away price, an opening offer, and a target close so the counter-offers never catch us flat-footed. The goal is a signed purchase agreement at or under target, with contingencies Aaron can exit cleanly.</p>
        </div>
      </section>

      <!-- PROPERTY AT A GLANCE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Property</span> <span class="rest">at a Glance</span></h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">7,098</div>
            <div class="stat-label">Heated Sq Ft</div>
          </div>
          <div class="stat-card cyan">
            <div class="stat-value">2.11</div>
            <div class="stat-label">Acres</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">~91,912</div>
            <div class="stat-label">Lot Sq Ft</div>
          </div>
          <div class="stat-card gold">
            <div class="stat-value">Estate</div>
            <div class="stat-label">Class</div>
          </div>
        </div>
        <div class="callout" style="margin-top:18px;">
          <strong>Data to confirm before offer:</strong> listing price, bedrooms / baths, year built, garage bays, current tax assessment, most recent sale price, seller motivation, and days on market. These drive every number below — capture them from the MLS sheet or listing agent before the walkthrough.
        </div>
      </section>

      <!-- KEY FACTS TABLE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Key</span> <span class="rest">Facts to Capture</span></h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Confirmed Value</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-col">Street Address</td>
              <td>Pending — pull from listing sheet</td>
              <td>Listing agent / MLS</td>
            </tr>
            <tr>
              <td class="label-col">Parcel ID / Tax ID</td>
              <td>Pending — pull from county records</td>
              <td>County tax assessor</td>
            </tr>
            <tr>
              <td class="label-col">Heated Square Footage</td>
              <td>7,098 sq ft</td>
              <td>reMarkable note</td>
            </tr>
            <tr>
              <td class="label-col">Lot Size</td>
              <td>2.11 acres (≈91,912 sq ft)</td>
              <td>reMarkable note</td>
            </tr>
            <tr>
              <td class="label-col">Asking Price</td>
              <td>Pending — obtain from listing</td>
              <td>Listing agent</td>
            </tr>
            <tr>
              <td class="label-col">Current Tax Assessment</td>
              <td>Pending — pull from county</td>
              <td>County tax assessor</td>
            </tr>
            <tr>
              <td class="label-col">Days on Market</td>
              <td>Pending</td>
              <td>MLS</td>
            </tr>
            <tr>
              <td class="label-col">Prior Sale History</td>
              <td>Pending — 5-year history</td>
              <td>County deed records</td>
            </tr>
            <tr>
              <td class="label-col">Liens / Encumbrances</td>
              <td>Pending — title search</td>
              <td>Title company</td>
            </tr>
            <tr>
              <td class="label-col">Zoning</td>
              <td>Pending — confirm residential</td>
              <td>City / county planning</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- REVIEW CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="first">Review</span> <span class="rest">Checklist — Run Before Any Offer</span></h2>
        <ul class="checklist">
          <li><strong>Walkthrough in person.</strong> Do not rely on photos. Inspect roof age, foundation, HVAC count and age, plumbing material, electrical panel amperage, and water source (city vs. well).</li>
          <li><strong>Pull the last two years of property tax bills</strong> and confirm they are paid current. A delinquency signals seller distress and opens room on price.</li>
          <li><strong>Order a full title search</strong> through a reputable local title company. Flag any mortgage balance, HELOC, mechanics liens, or IRS liens.</li>
          <li><strong>Confirm survey is current.</strong> 2.11 acres deserves a fresh stamped survey — verify boundary lines, easements, and setbacks.</li>
          <li><strong>Obtain Seller's Property Disclosure.</strong> Any "unknown" answers on major systems are a negotiation lever.</li>
          <li><strong>Pull 3–5 genuine comparables</strong> sold within the last 12 months, within a 1-mile radius, within ±15% square footage. Estate properties have thin comps — go wider on radius if needed.</li>
          <li><strong>Order a licensed inspection</strong> and, if the home is over 20 years old, a separate sewer scope and HVAC/electrical specialist pass.</li>
          <li><strong>Confirm insurability</strong> with an independent agent before going under contract — estate-size homes with older systems can be decline-risk.</li>
          <li><strong>Document any outbuildings, wells, septic, or fencing</strong> that convey with the 2.11 acres. Value each separately.</li>
          <li><strong>Verify financing pre-approval or cash position</strong> is current and documented — Aaron's leverage improves with a proof-of-funds letter in hand at offer time.</li>
        </ul>
      </section>

      <!-- NEGOTIATION LEVERS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Levers</span></h2>
        <div class="levers">
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">1</div>
              <div class="lever-title">Inspection Findings</div>
            </div>
            <div class="lever-body">Every deferred-maintenance item is a line-item credit request. Roof, HVAC, septic, and foundation are the big four — get written bids and present them as concessions, not price cuts.</div>
          </div>
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">2</div>
              <div class="lever-title">Days on Market</div>
            </div>
            <div class="lever-body">If the property is past the local average days-on-market, seller fatigue is the lever. Frame the opening offer as "where recent comps clear."</div>
          </div>
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">3</div>
              <div class="lever-title">Appraisal Gap</div>
            </div>
            <div class="lever-body">Estate properties often appraise under list. An appraisal contingency re-opens the price conversation without Aaron losing earnest money.</div>
          </div>
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">4</div>
              <div class="lever-title">Close Speed</div>
            </div>
            <div class="lever-body">A fast, clean close — 21 to 30 days, limited contingencies, proof of funds attached — is worth 2–4% off list to motivated sellers. Use it only if due diligence is already clean.</div>
          </div>
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">5</div>
              <div class="lever-title">Seller Concessions</div>
            </div>
            <div class="lever-body">Ask for closing costs, a home warranty, and rate buy-down points rather than price alone. These move the cash-to-close number without disturbing the headline sale price the seller reports.</div>
          </div>
          <div class="lever-card">
            <div class="lever-header">
              <div class="lever-num">6</div>
              <div class="lever-title">Personal Property</div>
            </div>
            <div class="lever-body">Appliances, riding mower, tractors, window treatments, and any workshop equipment on a 2.11-acre estate should be itemized as "conveys." Every piece kept is money saved post-close.</div>
          </div>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="section">
        <h2 class="section-title"><span class="first">Price</span> <span class="rest">Ladder — Fill In Before Offer</span></h2>
        <p style="margin-bottom:14px;">Set these four numbers before the first phone call to the listing agent. Write them down, sign them, and do not improvise past the walk-away line.</p>
        <div class="ladder">
          <div class="ladder-rung">
            <div class="tier">Ask Price</div>
            <div class="amount">TBD</div>
            <div class="note">Pull from listing</div>
          </div>
          <div class="ladder-rung">
            <div class="tier">Opening Offer</div>
            <div class="amount">85–90%</div>
            <div class="note">Of list, adjusted for comps</div>
          </div>
          <div class="ladder-rung target">
            <div class="tier">Target Close</div>
            <div class="amount">92–95%</div>
            <div class="note">Of list — signed here</div>
          </div>
          <div class="ladder-rung">
            <div class="tier">Walk-Away</div>
            <div class="amount">Hard Line</div>
            <div class="note">Set it, do not move it</div>
          </div>
        </div>
        <div class="callout alert" style="margin-top:18px;">
          <strong>Discipline note:</strong> The walk-away is a decision made before emotion enters the negotiation. Aaron sets it on paper, tells one person (Caroline Butler is the right check), and sticks to it. Every deal Aaron walks from strengthens the next one.
        </div>
      </section>

      <!-- ACTION SEQUENCE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Sequence — Next 14 Days</span></h2>
        <div class="badge-row">
          <div class="chev-badge"><div class="num">1</div>Pull full listing sheet, tax record, and comparable sales — today</div>
          <div class="chev-badge"><div class="num">2</div>Call listing agent, gauge seller motivation and timing — within 48 hours</div>
          <div class="chev-badge"><div class="num">3</div>Schedule in-person walkthrough — within 5 days</div>
          <div class="chev-badge"><div class="num">4</div>Order title pre-search and survey status check — in parallel with walkthrough</div>
          <div class="chev-badge"><div class="num">5</div>Lock financing pre-approval or proof of funds — before offer</div>
          <div class="chev-badge"><div class="num">6</div>Write opening offer with 10-day inspection, appraisal, and financing contingencies</div>
          <div class="chev-badge"><div class="num">7</div>Hold the walk-away line through counter-offers — no exceptions</div>
        </div>
      </section>

      <!-- RISK FLAGS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Risk</span> <span class="rest">Flags to Watch</span></h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Why It Matters</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-col">Thin Comparables</td>
              <td>Estate-size homes rarely have 3 clean comps within 1 mile.</td>
              <td>Widen radius to 3 miles; price per sq ft rather than lump sum.</td>
            </tr>
            <tr>
              <td class="label-col">Older Major Systems</td>
              <td>Roof, HVAC, well pump on 2.11 acres — any one of these at end of life is a five-figure cost.</td>
              <td>Dedicated inspection passes; negotiate credits, not repairs.</td>
            </tr>
            <tr>
              <td class="label-col">Title Clouds</td>
              <td>Older estates often have heir-property issues or unreleased liens.</td>
              <td>Full title search before earnest money; require clear title at close.</td>
            </tr>
            <tr>
              <td class="label-col">Appraisal Risk</td>
              <td>Rural or large-lot appraisals commonly miss by 5–10%.</td>
              <td>Keep the appraisal contingency. Do not waive it on this deal.</td>
            </tr>
            <tr>
              <td class="label-col">Insurability</td>
              <td>Age, roof, wiring, or water source can make the home decline-risk with major carriers.</td>
              <td>Bind coverage in principle before going under contract.</td>
            </tr>
            <tr>
              <td class="label-col">Opportunity Cost</td>
              <td>Capital tied up here is capital not deployed in Norris Utilities® inventory, FlexPro Armor tooling, or Skylift deposits.</td>
              <td>Run the personal-vs-business capital decision alongside the price ladder.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- FINAL NOTE -->
      <section class="section" style="margin-bottom:0;">
        <h2 class="section-title"><span class="first">Owner's</span> <span class="rest">Note</span></h2>
        <div class="summary-box">
          <p>This is a review-and-negotiate action item. It is not a commitment to buy. The best outcome of this brief is either a signed deal at or below target — or a clean, unemotional walk-away that protects capital for the business.</p>
          <p>Aaron makes the call. Caroline Butler is the right second set of eyes on the walk-away number before any offer goes out.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-meta">
      Internal acquisition review brief — prepared for Aaron's negotiation file.
    </div>
  </footer>

</body>
</html>