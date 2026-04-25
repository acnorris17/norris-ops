<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Brief — 4505 Buttewoods Estate Purchase — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-success: #0a8a3a;
      --nu-warning: #c47600;
      --nu-danger: #b8222a;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 50%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      margin: 0 auto 16px;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC HEADER */
    .doc-header {
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 24px;
      margin-bottom: 36px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-top: 14px;
    }
    .doc-meta-item strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.75rem;
      display: block;
      margin-bottom: 2px;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 44px 0 18px;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SUMMARY CARD */
    .summary-card {
      background: linear-gradient(135deg, #f4f7ff 0%, #ffffff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
      margin-bottom: 16px;
    }
    .summary-card p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
    }
    .summary-card p + p { margin-top: 12px; }

    /* PROPERTY SNAPSHOT GRID */
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .stat-value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .stat-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 16px 0;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    @media (max-width: 800px) {
      .two-col { grid-template-columns: 1fr; }
    }

    .strategy-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .strategy-card ul { list-style: none; padding: 0; }
    .strategy-card li {
      position: relative;
      padding: 6px 0 6px 22px;
      font-size: 0.95rem;
    }
    .strategy-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      top: 4px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* OFFER LADDER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
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
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr.target {
      background: rgba(6, 208, 255, 0.08);
    }
    .offer-table tr.target td:first-child {
      border-left: 4px solid var(--nu-cyan);
    }
    .offer-table .price {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .offer-table .stage {
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin: 8px 0;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item {
      position: relative;
      padding: 8px 0 16px 12px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -25px;
      top: 14px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 1px var(--nu-blue);
    }
    .tl-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .tl-action {
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      font-weight: 700;
    }
    .tl-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .checklist h4 {
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 12px;
    }
    .checklist ul { list-style: none; padding: 0; }
    .checklist li {
      position: relative;
      padding: 6px 0 6px 28px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 9px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* RISK CALLOUT */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      border-left: 4px solid var(--nu-warning);
    }
    .risk-card.opportunity { border-left-color: var(--nu-success); }
    .risk-card.threat { border-left-color: var(--nu-danger); }
    .risk-card h5 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 6px;
    }
    .risk-card .risk-tag {
      display: inline-block;
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 3px;
      background: var(--nu-warning);
      color: var(--nu-white);
      margin-bottom: 8px;
    }
    .risk-card.opportunity .risk-tag { background: var(--nu-success); }
    .risk-card.threat .risk-tag { background: var(--nu-danger); }
    .risk-card p { font-size: 0.9rem; }

    /* SCRIPT BLOCK */
    .script-block {
      background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 14px;
    }
    .script-label {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .script-block p {
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.65;
    }
    .script-block p + p { margin-top: 10px; }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .strategy-card, .stat-card, .risk-card, .script-block { box-shadow: none; }
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .doc-title { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 12px 18px; }
      .offer-table th, .offer-table td { padding: 10px 10px; font-size: 0.85rem; }
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
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
    <div class="nu-doc-label">Negotiation Brief — Internal</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC HEADER -->
      <div class="doc-header">
        <div class="doc-title">
          <span class="accent">Negotiate</span> Purchase — 4505 Buttewoods Estate
        </div>
        <div class="doc-meta">
          <div class="doc-meta-item">
            <strong>Property</strong>
            7,098 sq ft estate · 4505 Buttewoods
          </div>
          <div class="doc-meta-item">
            <strong>Source</strong>
            reMarkable action item
          </div>
          <div class="doc-meta-item">
            <strong>Date Captured</strong>
            April 25, 2026
          </div>
          <div class="doc-meta-item">
            <strong>Owner</strong>
            Aaron C. Norris
          </div>
          <div class="doc-meta-item">
            <strong>Status</strong>
            Negotiation prep — pre-offer
          </div>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <h2 class="nu-section-title"><span class="first">Executive</span> <span class="rest">Summary</span></h2>
      <div class="summary-card">
        <p>The 7,098 sq ft estate at 4505 Buttewoods is a sizable property that warrants a deliberate negotiation approach rather than a single-shot offer. This brief lays out the discovery work, offer ladder, walk-away points, and timeline so that every conversation with the listing agent and the seller is positioned from a place of preparation — not urgency.</p>
        <p>The objective is to acquire the property at a price and on terms that reflect its true condition and the current local market — not the asking price. The four-phase plan below moves from due diligence to closing inside a 35-day window, with two clear stop points where Aaron can re-evaluate before committing further.</p>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Address</div>
          <div class="stat-value" style="font-size:1.15rem;">4505 Buttewoods</div>
          <div class="stat-sub">Verify full street suffix &amp; ZIP at first call</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Living Area</div>
          <div class="stat-value">7,098 <span style="font-size:0.85rem;font-weight:700;">sq ft</span></div>
          <div class="stat-sub">Confirm against tax records and survey</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Property Class</div>
          <div class="stat-value" style="font-size:1.15rem;">Estate / Luxury Residential</div>
          <div class="stat-sub">Outsized for typical neighborhood comp set</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Negotiation Posture</div>
          <div class="stat-value" style="font-size:1.15rem;color:var(--nu-blue);">Patient Buyer</div>
          <div class="stat-sub">No emotional attachment. Walk-away ready.</div>
        </div>
      </div>

      <!-- PHASES -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Plan — Four Phases</span></h2>
      <div class="nu-badge-row">
        <div class="nu-badge"><span class="badge-num">1</span>Discovery &amp; Comp Build — establish a defensible price floor and ceiling</div>
        <div class="nu-badge"><span class="badge-num">2</span>Initial Offer &amp; Position — set anchor below ask, with terms that protect Aaron</div>
        <div class="nu-badge"><span class="badge-num">3</span>Counter Strategy — controlled concessions, preserve walk-away leverage</div>
        <div class="nu-badge"><span class="badge-num">4</span>Inspection Re-Trade &amp; Close — convert findings into final price reduction</div>
      </div>

      <!-- DISCOVERY -->
      <h2 class="nu-section-title"><span class="first">Phase</span> <span class="rest">1 — Discovery &amp; Comp Build</span></h2>
      <div class="two-col">
        <div class="strategy-card">
          <h3>Information to Confirm Before First Offer</h3>
          <ul>
            <li>Full address, parcel ID, lot size, year built</li>
            <li>Current days on market and listing history</li>
            <li>Original list price and any prior price reductions</li>
            <li>Tax assessment and last sale price</li>
            <li>HOA, easements, deed restrictions</li>
            <li>Why is the seller selling? Timeline pressure?</li>
            <li>Any prior offers — accepted, withdrawn, or rejected</li>
          </ul>
        </div>
        <div class="strategy-card">
          <h3>Comp Set to Build (last 12 months)</h3>
          <ul>
            <li>3 closed sales — same neighborhood, 5,500–8,500 sq ft</li>
            <li>3 active listings — direct competition right now</li>
            <li>2 expired/withdrawn listings — what didn't sell &amp; why</li>
            <li>Price per square foot — closed median for the band</li>
            <li>Days-on-market average for properties &gt; 6,000 sq ft</li>
            <li>Adjustments for lot size, age, condition, finishes</li>
          </ul>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &amp; Walk-Away Discipline</span></h2>
      <p style="margin-bottom:14px;color:var(--nu-body-text);">The price column is intentionally formulaic — fill in once the comp build returns a defensible market value (MV). Discipline matters more than the exact dollars: the rule is open low, move in shrinking increments, and stop at the walk-away.</p>
      <table class="offer-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Position</th>
            <th>Price Anchor</th>
            <th>Terms / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="stage">Anchor</span></td>
            <td>Opening offer</td>
            <td class="price">MV − 12%</td>
            <td>Cash or strong financing, 21-day close, modest earnest, full inspection contingency</td>
          </tr>
          <tr>
            <td><span class="stage">Counter 1</span></td>
            <td>Move up</td>
            <td class="price">MV − 8%</td>
            <td>Drop one minor contingency, hold inspection &amp; appraisal protection</td>
          </tr>
          <tr class="target">
            <td><span class="stage">Counter 2 — Target</span></td>
            <td>Best &amp; final shape</td>
            <td class="price">MV − 5%</td>
            <td>This is the target close zone. Inspection contingency stays.</td>
          </tr>
          <tr>
            <td><span class="stage">Ceiling</span></td>
            <td>Hard stop</td>
            <td class="price">MV − 2%</td>
            <td>Above this, walk. The deal must justify a premium with concessions elsewhere.</td>
          </tr>
          <tr>
            <td><span class="stage">Walk-Away</span></td>
            <td>No deal</td>
            <td class="price">≥ Asking</td>
            <td>Do not negotiate at or above asking unless seller pays closing &amp; major repairs.</td>
          </tr>
        </tbody>
      </table>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Operating</span> <span class="rest">Timeline (35-Day Window)</span></h2>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-day">Day 1–3 · Discovery</div>
          <div class="tl-action">Pull comps, parcel data, listing history</div>
          <div class="tl-detail">Identify why the seller is selling — timeline, motivation, prior offers.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 4 · First Showing</div>
          <div class="tl-action">Walk the property in person — quiet, observational</div>
          <div class="tl-detail">Note deferred maintenance, finishes, mechanical age, roof, HVAC, foundation.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 5–6 · Offer Prep</div>
          <div class="tl-action">Build comp memo &amp; finalize anchor price</div>
          <div class="tl-detail">Confirm proof of funds or pre-approval letter is ready before submitting.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 7 · Submit Anchor Offer</div>
          <div class="tl-action">Written offer at MV − 12%, 48-hour response window</div>
          <div class="tl-detail">Short response window keeps tempo on the buyer's side.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 8–14 · Counter Round</div>
          <div class="tl-action">Two structured counters max — shrinking increments</div>
          <div class="tl-detail">Use script: "I want this to work — here is what I can do, here is what I need."</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 15 · Under Contract</div>
          <div class="tl-action">Open escrow, deliver earnest money, schedule inspection</div>
          <div class="tl-detail">Independent inspector — no listing-agent referrals.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 16–22 · Inspection &amp; Re-Trade</div>
          <div class="tl-action">Convert findings into a written repair-or-credit request</div>
          <div class="tl-detail">Lead with the four highest-dollar items. Ask for credit at closing — not repairs.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 23–34 · Title, Appraisal, Final Walk</div>
          <div class="tl-action">Clear title &amp; survey, complete appraisal, final walkthrough</div>
          <div class="tl-detail">If appraisal comes in low, re-trade again — that gap belongs to the seller.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 35 · Close</div>
          <div class="tl-action">Sign, fund, record</div>
          <div class="tl-detail">Confirm wire instructions verbally before sending funds.</div>
        </div>
      </div>

      <!-- LEVERAGE -->
      <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points &amp; Pressure Risks</span></h2>
      <div class="risk-grid">
        <div class="risk-card opportunity">
          <span class="risk-tag">Leverage</span>
          <h5>Days on Market</h5>
          <p>Every week past 60 days softens the seller's position. Track DOM weekly — patience converts to price.</p>
        </div>
        <div class="risk-card opportunity">
          <span class="risk-tag">Leverage</span>
          <h5>Carrying Cost</h5>
          <p>A 7,098 sq ft estate is expensive to hold — taxes, insurance, utilities, lawn. Every month of vacancy costs the seller real money.</p>
        </div>
        <div class="risk-card opportunity">
          <span class="risk-tag">Leverage</span>
          <h5>Clean Buyer Profile</h5>
          <p>Strong financing or cash, flexible close date, minimal contingencies — these are worth real dollars to a motivated seller.</p>
        </div>
        <div class="risk-card">
          <span class="risk-tag">Watch</span>
          <h5>Multiple Offer Pressure</h5>
          <p>If the listing agent claims a competing offer, ask for it in writing or treat the claim as bluff. Do not raise blind.</p>
        </div>
        <div class="risk-card threat">
          <span class="risk-tag">Threat</span>
          <h5>Emotional Anchor</h5>
          <p>Estates are often family homes. Sellers may not move on price quickly. If anchored at ask, walk and revisit in 30 days.</p>
        </div>
        <div class="risk-card threat">
          <span class="risk-tag">Threat</span>
          <h5>Hidden Defects</h5>
          <p>Large homes hide expensive problems — roof, HVAC zones, foundation, pool. Inspection contingency is non-negotiable.</p>
        </div>
      </div>

      <!-- SCRIPTS -->
      <h2 class="nu-section-title"><span class="first">Conversation</span> <span class="rest">Scripts</span></h2>

      <div class="script-block">
        <div class="script-label">Opening Call to Listing Agent</div>
        <p>"Good morning — Aaron Norris. I'm a serious buyer for the Buttewoods estate. Before I waste anyone's time, I'd like to ask a few questions about the seller's situation and the property's history. Is now a good time, or should we set up a 15-minute call?"</p>
      </div>

      <div class="script-block">
        <div class="script-label">Submitting the Anchor Offer</div>
        <p>"My offer is below the ask, and I want to be straight about why. The comp data I'm working from supports this number, and my terms are clean — strong financing, short close, modest contingencies. I'd rather have one honest conversation than five rounds of back-and-forth. The offer is good through Wednesday at 5 PM."</p>
      </div>

      <div class="script-block">
        <div class="script-label">Inspection Re-Trade</div>
        <p>"The inspection turned up four items that weren't visible during the showing. I'm not asking the seller to do the work — I'd rather take a credit at closing and handle it on my schedule. Here is the credit number that gets us back to the deal we agreed to."</p>
      </div>

      <div class="script-block">
        <div class="script-label">Walk-Away Posture</div>
        <p>"I appreciate the time you've put into this. The number we're at doesn't work for me, and I'd rather part on good terms than push past my limit. If the seller's position changes in the next few weeks, please give me a call."</p>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <div class="checklist">
        <h4>Complete before submitting any written offer</h4>
        <ul>
          <li>Comp memo built — three closed, three active, two expired</li>
          <li>Median price per square foot calculated for the size band</li>
          <li>Property walked in person at least once</li>
          <li>Listing history pulled — original ask, all reductions, days on market</li>
          <li>Seller motivation assessed — timeline, prior offers, life event</li>
          <li>Financing locked — pre-approval letter or proof of funds in hand</li>
          <li>Independent inspector identified and available</li>
          <li>Real estate attorney lined up to review contract</li>
          <li>Title company selected — not the seller's referral</li>
          <li>Walk-away price written down on paper before negotiation begins</li>
          <li>Offer letter drafted with 48-hour response window</li>
          <li>Earnest money source confirmed and ready to wire</li>
        </ul>
      </div>

      <!-- DECISION GATES -->
      <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Gates</span></h2>
      <div class="two-col">
        <div class="strategy-card">
          <h3>Gate A — After Comp Build</h3>
          <ul>
            <li>If MV is more than 15% below ask, proceed with anchor offer</li>
            <li>If MV is roughly at ask, walk unless seller is highly motivated</li>
            <li>If comps are scarce, expand search radius before deciding</li>
            <li>Stop and re-evaluate if days-on-market is under 14</li>
          </ul>
        </div>
        <div class="strategy-card">
          <h3>Gate B — After Inspection</h3>
          <ul>
            <li>If repair total exceeds 3% of contract price, demand credit</li>
            <li>If structural or roof issues surface, re-trade or walk</li>
            <li>If seller refuses any inspection-based concession, walk</li>
            <li>If appraisal misses by &gt; 2%, the gap belongs to the seller</li>
          </ul>
        </div>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Steps</span></h2>
      <div class="summary-card">
        <p><strong>This week (April 25–May 1, 2026):</strong> Confirm the full address and parcel of 4505 Buttewoods. Pull the listing record, tax assessment, and prior sales history. Identify a real estate attorney and an independent inspector. Schedule the first showing.</p>
        <p><strong>Before any offer is written:</strong> Complete the pre-offer checklist in full. Walk-away price must be written down before the offer is sent — not negotiated against in real time.</p>
        <p><strong>Reporting cadence:</strong> Status update after Discovery (Day 3), after First Showing (Day 4), at submission of Anchor Offer (Day 7), and at every counter received. No silent decisions — every move logged.</p>
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
      Negotiation Brief — Internal Working Document · Prepared April 25, 2026
    </div>
  </footer>

</body>
</html>