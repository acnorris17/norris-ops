<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0B8E3E;
      --nu-warn: #B8860B;
      --nu-danger: #C0392B;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }

    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }

    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ DOCUMENT META STRIP ══ */
    .nu-meta-strip {
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 14px 40px;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
    }
    .nu-meta-strip strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.72rem;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .nu-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 40px;
    }
    .nu-eyebrow {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-subtitle {
      font-weight: 300;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section { margin-bottom: 52px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 22px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY SNAPSHOT GRID ══ */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-snapshot-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .nu-snapshot-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-snapshot-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-snapshot-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ TWO-COLUMN GRID ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-three-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    /* ══ CARD ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card h3 .accent { color: var(--nu-blue); }
    .nu-card p { font-size: 0.95rem; margin-bottom: 10px; }
    .nu-card ul { margin: 8px 0 0 18px; }
    .nu-card li { font-size: 0.94rem; margin-bottom: 6px; }

    /* ══ CHEVRON BADGE (for negotiation priorities) ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ DATA TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      font-size: 0.93rem;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table .num {
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .nu-table .pos { color: var(--nu-success); font-weight: 700; }
    .nu-table .neg { color: var(--nu-danger); font-weight: 700; }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 34px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 6px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .nu-timeline-phase {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 6px;
    }
    .nu-timeline-body { font-size: 0.93rem; }

    /* ══ HIGHLIGHT CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.08) 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 28px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      font-size: 1.02rem;
    }

    /* ══ CHIPS ══ */
    .nu-chip {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-right: 6px;
    }
    .chip-open { background: rgba(184,134,11,0.15); color: var(--nu-warn); }
    .chip-priority { background: rgba(192,57,43,0.12); color: var(--nu-danger); }
    .chip-private { background: rgba(0,0,255,0.1); color: var(--nu-blue); }

    /* ══ BUTTONS ══ */
    .nu-btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 18px; }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ CONFIDENTIAL STRIP ══ */
    .nu-confidential {
      background: var(--nu-dark-text);
      color: var(--nu-cyan);
      text-align: center;
      font-size: 0.75rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      font-weight: 700;
      padding: 10px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.96rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-two-col, .nu-three-col { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding-right: 20px; }
      .nu-meta-strip { flex-direction: column; gap: 6px; }
    }

    /* ══ PRINT ══ */
    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- CONFIDENTIAL BANNER -->
  <div class="nu-confidential">Private &amp; Confidential — Aaron C. Norris — Personal Real Estate Matter</div>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- META STRIP -->
  <div class="nu-meta-strip">
    <div><strong>Document</strong> &nbsp; Acquisition Strategy &amp; Negotiation Plan</div>
    <div><strong>Property</strong> &nbsp; 4505 Buttewoods — 7,098 sq ft Estate</div>
    <div><strong>Prepared</strong> &nbsp; 2026-04-23</div>
    <div><strong>Owner</strong> &nbsp; Aaron C. Norris (Personal)</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-title-block">
        <div class="nu-eyebrow">reMarkable Action Item &nbsp; · &nbsp; Personal Real Estate</div>
        <h1 class="nu-page-title">Negotiate Purchase of 7,098 sq ft Estate at 4505 Buttewoods</h1>
        <div class="nu-page-subtitle">
          Structured negotiation roadmap covering property review, financial parameters, offer strategy, due diligence, and a phased timeline to move from initial offer to executed contract with discipline.
        </div>
        <div style="margin-top:14px;">
          <span class="nu-chip chip-priority">High Priority</span>
          <span class="nu-chip chip-open">Open</span>
          <span class="nu-chip chip-private">Personal Matter</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-snapshot">
          <div class="nu-snapshot-cell">
            <div class="nu-snapshot-label">Address</div>
            <div class="nu-snapshot-value" style="font-size:1.05rem;">4505 Buttewoods</div>
            <div class="nu-snapshot-sub">Single-family estate</div>
          </div>
          <div class="nu-snapshot-cell">
            <div class="nu-snapshot-label">Living Area</div>
            <div class="nu-snapshot-value">7,098</div>
            <div class="nu-snapshot-sub">Square feet (finished)</div>
          </div>
          <div class="nu-snapshot-cell">
            <div class="nu-snapshot-label">Property Type</div>
            <div class="nu-snapshot-value" style="font-size:1.1rem;">Estate</div>
            <div class="nu-snapshot-sub">Primary residence candidate</div>
          </div>
          <div class="nu-snapshot-cell">
            <div class="nu-snapshot-label">Status</div>
            <div class="nu-snapshot-value" style="font-size:1.1rem; color:var(--nu-warn);">In Negotiation</div>
            <div class="nu-snapshot-sub">Pre-offer stage</div>
          </div>
          <div class="nu-snapshot-cell">
            <div class="nu-snapshot-label">Next Step</div>
            <div class="nu-snapshot-value" style="font-size:1.1rem;">CMA + Offer</div>
            <div class="nu-snapshot-sub">Target: within 14 days</div>
          </div>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-title">Guiding Principle</div>
          Lead with preparation, not emotion. The seller sets the asking price; the market sets the value; the buyer sets the terms. Win on terms, not ego. Every concession asked must be matched by a concession earned.
        </div>
      </section>

      <!-- INFORMATION TO CONFIRM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Information</span> <span class="rest">to Confirm Before Offer</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3><span class="accent">Property</span> Facts</h3>
            <ul>
              <li>Full legal address, lot size, parcel/APN number</li>
              <li>Year built, year of last major renovation</li>
              <li>Bedroom/bathroom count and garage capacity</li>
              <li>HVAC age, roof age, water heater age</li>
              <li>Structural history (foundation, slab, moisture)</li>
              <li>HOA presence, dues, rules, special assessments</li>
              <li>School district, flood zone, tornado shelter</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Market</span> Intelligence</h3>
            <ul>
              <li>Days on market and listing history</li>
              <li>Original list price vs. current ask</li>
              <li>Previous offers, contingent falls, cancellations</li>
              <li>Comparable sales (past 6 months, 1-mile radius)</li>
              <li>Active competing listings in neighborhood</li>
              <li>Price per sq ft relative to comps</li>
              <li>Seller motivation and target closing date</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Financial</span> Readiness</h3>
            <ul>
              <li>Pre-approval letter from Renasant Bank (Patrick Lavette)</li>
              <li>Cash vs. financed ratio decision (impact on offer strength)</li>
              <li>Earnest money amount and escrow holder</li>
              <li>Max walk-away price and target offer price</li>
              <li>Closing cost budget and prorations plan</li>
              <li>Reserve cushion post-closing (minimum 6 months)</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Legal</span> &amp; Tax</h3>
            <ul>
              <li>Current tax assessment vs. last sale price</li>
              <li>Title search: liens, easements, encumbrances</li>
              <li>Survey on file? If not, budget for one</li>
              <li>Title insurance provider and cost</li>
              <li>Disclosures: lead paint, prior repairs, insurance claims</li>
              <li>Attorney review — engage before signing anything</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FINANCIAL FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Financial</span> <span class="rest">Framework</span></h2>
        <p style="margin-bottom:18px;">Fill these numbers in before opening negotiation. Do not name a price until all six rows are answered.</p>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:28%;">Parameter</th>
                <th style="width:22%;">Target Figure</th>
                <th>Reasoning / Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seller's asking price</td>
                <td class="num">To confirm</td>
                <td>Current MLS listing or broker quote</td>
              </tr>
              <tr>
                <td>CMA fair-market value</td>
                <td class="num">To confirm</td>
                <td>Weighted average of 3 closed comps adjusted for sq ft, age, lot, condition</td>
              </tr>
              <tr>
                <td>Initial offer (opening)</td>
                <td class="num">90–94% of CMA</td>
                <td>Leaves room to negotiate up while anchoring low; supported by comps</td>
              </tr>
              <tr>
                <td>Ceiling (walk-away)</td>
                <td class="num">≤ CMA + 2%</td>
                <td>Hard line. If pushed above, walk. Do not chase the property.</td>
              </tr>
              <tr>
                <td>Earnest money</td>
                <td class="num">1–2% of price</td>
                <td>Signals seriousness without overexposing; refundable under contingencies</td>
              </tr>
              <tr>
                <td>Closing cost ask (seller concession)</td>
                <td class="num">1–3% of price</td>
                <td>Trade for a higher nominal price if seller needs the headline number</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- NEGOTIATION PRIORITIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Priorities — In Order</span></h2>
        <div class="nu-badge"><span class="nu-badge-number">1</span>Price — anchor at a defensible number backed by CMA data, not gut</div>
        <div class="nu-badge"><span class="nu-badge-number">2</span>Inspection contingency — 10 business days, right to rescind on material defects</div>
        <div class="nu-badge"><span class="nu-badge-number">3</span>Financing contingency — matches pre-approval terms; protects earnest money</div>
        <div class="nu-badge"><span class="nu-badge-number">4</span>Appraisal contingency — buyer not obligated above appraised value</div>
        <div class="nu-badge"><span class="nu-badge-number">5</span>Seller repairs or credits — prioritize credits over promised work</div>
        <div class="nu-badge"><span class="nu-badge-number">6</span>Included personal property — appliances, fixtures, outdoor items</div>
        <div class="nu-badge"><span class="nu-badge-number">7</span>Closing date and possession — align with lender lock and move logistics</div>
        <div class="nu-badge"><span class="nu-badge-number">8</span>Home warranty — one-year policy, seller-paid, buyer's choice of provider</div>
      </section>

      <!-- PHASED TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phased</span> <span class="rest">Acquisition Timeline</span></h2>
        <div class="nu-timeline">

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 1 &nbsp;·&nbsp; Days 1–3</div>
            <div class="nu-timeline-title">Preparation &amp; Intelligence Gathering</div>
            <div class="nu-timeline-body">Pull CMA, confirm pre-approval letter with Renasant (Patrick Lavette), line up inspector and real-estate attorney. Gather all property facts above. Do not contact the seller yet.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 2 &nbsp;·&nbsp; Days 4–7</div>
            <div class="nu-timeline-title">Property Walk &amp; Seller Read</div>
            <div class="nu-timeline-body">Schedule private showing. Walk slow, take notes, photograph defects, listen for seller motivation signals (relocation, estate, divorce, financial pressure). Ask no price questions on first visit.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 3 &nbsp;·&nbsp; Days 8–10</div>
            <div class="nu-timeline-title">Offer Assembly &amp; Attorney Review</div>
            <div class="nu-timeline-body">Draft written offer with all contingencies, earnest money, proposed closing date. Attorney reviews every clause. Include personal cover letter only if seller is emotionally tied to the home.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 4 &nbsp;·&nbsp; Days 11–14</div>
            <div class="nu-timeline-title">Deliver Offer &amp; First Response</div>
            <div class="nu-timeline-body">Offer delivered in writing with 48-hour response window. Do not chase. If countered, evaluate against ceiling. If rejected flat, stand firm or walk — never raise more than once without a concession in return.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 5 &nbsp;·&nbsp; Days 15–20</div>
            <div class="nu-timeline-title">Counter-Negotiation</div>
            <div class="nu-timeline-body">Each concession on price must be matched by a concession on terms (closing date, repairs, personal property, warranty). Keep the paper trail tight. No verbal agreements — everything amended on the contract.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 6 &nbsp;·&nbsp; Days 21–35</div>
            <div class="nu-timeline-title">Due Diligence Window</div>
            <div class="nu-timeline-body">Full home inspection, HVAC specialist, roof certification, sewer scope, termite letter, survey, appraisal, title search. Use findings to renegotiate price or credits — not to re-litigate the whole deal.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 7 &nbsp;·&nbsp; Days 36–50</div>
            <div class="nu-timeline-title">Lender Clear-to-Close &amp; Final Walk</div>
            <div class="nu-timeline-body">Confirm loan approval, lock rate if unlocked, review closing disclosure 3 business days prior. Final walk-through 24 hours before closing to verify agreed repairs and condition.</div>
          </div>

          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Phase 8 &nbsp;·&nbsp; Day 50+</div>
            <div class="nu-timeline-title">Closing &amp; Possession</div>
            <div class="nu-timeline-body">Sign at attorney's office or title company. Take possession per contract terms. File homestead exemption with county. Save all closing documents in personal records vault.</div>
          </div>

        </div>
      </section>

      <!-- TACTICAL RULES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Tactical</span> <span class="rest">Rules at the Table</span></h2>
        <div class="nu-three-col">
          <div class="nu-card">
            <h3><span class="accent">Do</span> This</h3>
            <ul>
              <li>Let the seller speak first on price</li>
              <li>Reference comps, not feelings</li>
              <li>Put every ask in writing</li>
              <li>Keep a neutral, friendly tone</li>
              <li>Use silence after a counter</li>
              <li>Set a response deadline</li>
              <li>Walk if terms cross the ceiling</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Never</span> Do This</h3>
            <ul>
              <li>Never show how much you want it</li>
              <li>Never name a price first unverified</li>
              <li>Never reveal the ceiling or timeline pressure</li>
              <li>Never skip inspection to "win" the offer</li>
              <li>Never waive appraisal above CMA</li>
              <li>Never negotiate verbally without confirmation in writing</li>
              <li>Never chase a counter that ignores your last concession</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Watch</span> For Signals</h3>
            <ul>
              <li>Seller volunteers motivation — leverage</li>
              <li>Multiple price reductions already — weak position</li>
              <li>High days-on-market — leverage</li>
              <li>Deferred maintenance visible — credit lever</li>
              <li>Agent eager to close — structural pressure</li>
              <li>Rising comp sales in area — act quickly</li>
              <li>Seller already bought next home — time pressure on them</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PROFESSIONALS TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Professionals</span> <span class="rest">to Engage</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Purpose</th>
                <th>Engagement Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Real Estate Attorney</td>
                <td>Review offer, contract, title, closing documents</td>
                <td>Before signing any offer</td>
              </tr>
              <tr>
                <td>Buyer's Agent (if used)</td>
                <td>CMA, showing coordination, market intel</td>
                <td>Phase 1 — before any contact with seller</td>
              </tr>
              <tr>
                <td>Lender — Renasant Bank</td>
                <td>Pre-approval, rate lock, financing</td>
                <td>Phase 1 — Patrick Lavette</td>
              </tr>
              <tr>
                <td>Home Inspector</td>
                <td>Structural, mechanical, electrical, plumbing</td>
                <td>Phase 6 — within inspection window</td>
              </tr>
              <tr>
                <td>HVAC / Roof Specialist</td>
                <td>Deep evaluation of big-ticket systems</td>
                <td>Phase 6 — if inspector flags</td>
              </tr>
              <tr>
                <td>Title / Escrow Company</td>
                <td>Title search, escrow of earnest money, closing</td>
                <td>After contract execution</td>
              </tr>
              <tr>
                <td>Surveyor</td>
                <td>Verify lot lines, easements, encroachments</td>
                <td>Phase 6 — if no recent survey</td>
              </tr>
              <tr>
                <td>CPA</td>
                <td>Tax implications, homestead, property tax planning</td>
                <td>Before closing</td>
              </tr>
              <tr>
                <td>Insurance Agent</td>
                <td>Homeowner's policy, windstorm, flood if applicable</td>
                <td>Phase 7 — before closing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- RISK REGISTER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Likelihood</th>
                <th>Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Appraisal comes in below contract price</td>
                <td class="num">Medium</td>
                <td>Appraisal contingency; renegotiate price down or walk</td>
              </tr>
              <tr>
                <td>Major defect found in inspection</td>
                <td class="num">Medium</td>
                <td>Inspection contingency; demand credit, repair, or rescind</td>
              </tr>
              <tr>
                <td>Title defect or undisclosed lien</td>
                <td class="num">Low</td>
                <td>Title insurance + attorney review; seller must clear before closing</td>
              </tr>
              <tr>
                <td>Competing offers drive emotional bidding</td>
                <td class="num">Medium</td>
                <td>Hard ceiling discipline; willing to walk; no escalation clauses above CMA +2%</td>
              </tr>
              <tr>
                <td>Interest rate increase mid-process</td>
                <td class="num">Low–Medium</td>
                <td>Lock rate at contract acceptance; budget sensitivity analysis at +50 bps</td>
              </tr>
              <tr>
                <td>Seller backs out or disputes terms</td>
                <td class="num">Low</td>
                <td>Specific performance clause in contract; attorney-drafted language</td>
              </tr>
              <tr>
                <td>Unexpected flood zone / insurance cost spike</td>
                <td class="num">Low</td>
                <td>Pull FEMA flood map Phase 1; quote insurance before offer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- DECISION SIGNALS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">When</span> <span class="rest">to Walk Away</span></h2>
        <div class="nu-callout">
          <div class="nu-callout-title">The No-Regret Exit Criteria</div>
          Walk away without hesitation if any one of these occurs: (1) price crosses CMA + 2%; (2) seller refuses inspection or appraisal contingency; (3) material undisclosed defect surfaces and seller will not credit or repair; (4) title cannot be cleared; (5) financing terms worsen to where total monthly carry exceeds pre-set budget by more than 10%.
        </div>
        <p style="margin-top:10px;">
          A good deal turned bad is not a deal — it is a liability with a front door. Discipline at the table today protects decades of equity. The next property exists. Emotion is the most expensive closing cost.
        </p>
      </section>

      <!-- IMMEDIATE ACTION ITEMS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Action Items — This Week</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3><span class="accent">Today</span></h3>
            <ul>
              <li>Confirm full property address and parcel number</li>
              <li>Pull public records (tax assessment, sale history)</li>
              <li>Call Patrick Lavette — update pre-approval amount</li>
              <li>Request MLS sheet and seller disclosures</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3><span class="accent">Within</span> 7 Days</h3>
            <ul>
              <li>Commission a CMA from licensed agent or appraiser</li>
              <li>Schedule private walk-through with Aaron only</li>
              <li>Select and retain real estate attorney</li>
              <li>Line up inspector and insurance quote</li>
              <li>Finalize offer price, ceiling, and concession matrix</li>
            </ul>
          </div>
        </div>

        <div class="nu-btn-row">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Acquisition%20Strategy">Email the Plan</a>
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
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      <span style="font-size:0.82rem; opacity:0.8;">Private &amp; Confidential — Personal Real Estate Matter — Not for External Distribution</span>
    </div>
  </footer>

</body>
</html>