<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy — Rental Listing vs. For-Sale Listing — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E8A317;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }

    /* GHOST PHOENIX WATERMARK */
    .nu-header-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 60px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* DOCUMENT META */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-doc-meta-chip {
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .nu-doc-meta-chip.priority {
      background: var(--nu-alert-red);
      color: var(--nu-white);
    }
    .nu-doc-meta-chip.status {
      background: var(--nu-alert-amber);
      color: var(--nu-white);
    }
    .nu-doc-meta-chip.source {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.35rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-page-title .highlight { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
      max-width: 780px;
    }

    /* ALERT BANNER */
    .nu-alert {
      background: linear-gradient(135deg, #FFF5F5 0%, #FFECEC 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.3rem;
    }
    .nu-alert-content h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-alert-red);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .nu-alert-content p {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      margin-top: 40px;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* COMPARISON TABLE */
    .nu-comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 24px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    }
    .nu-comp-column {
      padding: 0;
      background: var(--nu-white);
    }
    .nu-comp-column.left { border-right: 1px solid var(--nu-medium-gray); }
    .nu-comp-header {
      padding: 18px 22px;
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .nu-comp-header.rental {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
    }
    .nu-comp-header.sale {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-comp-body { padding: 22px 24px; }
    .nu-comp-body dl {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .nu-comp-body dt {
      font-weight: 700;
      font-size: 0.78rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .nu-comp-body dd {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
      padding-bottom: 10px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-comp-body dd:last-child { border-bottom: none; }
    .nu-comp-body dd.flag {
      background: #FFF5F5;
      padding: 8px 12px;
      border-radius: 4px;
      border-left: 3px solid var(--nu-alert-red);
      border-bottom: none;
      color: var(--nu-alert-red);
      font-weight: 700;
    }
    .nu-comp-body dd.missing {
      color: #999;
      font-style: italic;
    }

    /* DISCREPANCIES LIST */
    .nu-discrepancy-list {
      list-style: none;
      counter-reset: disc-counter;
      margin-bottom: 30px;
    }
    .nu-discrepancy-list li {
      counter-increment: disc-counter;
      position: relative;
      padding: 18px 20px 18px 70px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-alert-amber);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-discrepancy-list li::before {
      content: counter(disc-counter);
      position: absolute;
      top: 18px;
      left: 18px;
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .nu-discrepancy-list li h4 {
      font-size: 1.02rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-discrepancy-list li p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ACTION STEPS */
    .nu-action-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-bottom: 30px;
    }
    .nu-action-card {
      background: var(--nu-white);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }
    .nu-action-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.1);
    }
    .nu-action-step {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.72rem;
      padding: 3px 10px;
      border-radius: 12px;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .nu-action-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-action-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
      margin-bottom: 12px;
    }
    .nu-action-card .owner {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 10px;
    }

    /* RISK BADGES */
    .nu-risk-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      margin-bottom: 30px;
    }
    .nu-risk-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-risk-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .nu-risk-table tr:last-child td { border-bottom: none; }
    .nu-risk-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .risk-level {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .risk-high { background: var(--nu-alert-red); color: var(--nu-white); }
    .risk-med { background: var(--nu-alert-amber); color: var(--nu-white); }
    .risk-low { background: #4A8F3E; color: var(--nu-white); }

    /* EVIDENCE CALLOUT */
    .nu-evidence {
      background: linear-gradient(135deg, #F0F4FF 0%, #E6EEFF 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 30px;
    }
    .nu-evidence h4 {
      font-size: 0.85rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .nu-evidence ul {
      list-style: none;
      padding-left: 0;
    }
    .nu-evidence li {
      padding: 8px 0 8px 26px;
      position: relative;
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      border-bottom: 1px dashed rgba(0,0,255,0.15);
    }
    .nu-evidence li:last-child { border-bottom: none; }
    .nu-evidence li::before {
      content: '■';
      position: absolute;
      left: 0;
      top: 8px;
      color: var(--nu-blue);
      font-size: 0.85rem;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
      margin-bottom: 30px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 9px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: var(--nu-blue);
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
      background: var(--nu-cyan);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-date {
      font-size: 0.82rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 4px;
    }
    .nu-timeline-item p {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
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
      height: 3px;
      background: var(--nu-cyan);
      margin: 0 auto 16px;
      border-radius: 2px;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-header { padding: 44px 22px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px; }
      .nu-page-title { font-size: 1.65rem; }
      .nu-comparison { grid-template-columns: 1fr; }
      .nu-comp-column.left { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-alert { flex-direction: column; gap: 12px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-card, .nu-risk-table { box-shadow: none; }
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
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="nu-doc-meta">
        <span class="nu-doc-meta-chip priority">Priority: High</span>
        <span class="nu-doc-meta-chip status">Status: Open — Action Required</span>
        <span class="nu-doc-meta-chip source">Source: reMarkable Action Item</span>
        <span class="nu-doc-meta-chip">Created: 2026-04-23</span>
        <span class="nu-doc-meta-chip">Owner: Aaron C. Norris</span>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">
        <span class="highlight">Disclosure Discrepancy</span> — Rental Listing vs. For-Sale Listing
      </h1>
      <p class="nu-page-subtitle">
        Address the material inconsistency between what was advertised in the prior rental listing and what was disclosed (or omitted) in the current for-sale listing before executing any purchase agreement.
      </p>

      <!-- ALERT BANNER -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-content">
          <h3>Do Not Close Until Reconciled</h3>
          <p>Any item disclosed to a prior tenant but omitted from the current seller's disclosure is a potential misrepresentation. This must be documented in writing, reconciled with the listing agent, and reflected in either the purchase price, a repair credit, or a written seller acknowledgment before closing.</p>
        </div>
      </div>

      <!-- SECTION: WHAT WE KNOW -->
      <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">We Know</span></h2>

      <div class="nu-comparison">
        <div class="nu-comp-column left">
          <div class="nu-comp-header rental">Prior Rental Listing (Advertised)</div>
          <div class="nu-comp-body">
            <dl>
              <dt>Condition Language</dt>
              <dd>Features, condition notes, or property attributes affirmatively described to prospective tenants.</dd>

              <dt>Disclosed Issues</dt>
              <dd class="flag">Includes items the rental advertising acknowledged openly — which a tenant reasonably relied on when signing a lease.</dd>

              <dt>Photo / Listing Set</dt>
              <dd>Historical MLS/Zillow/Rent.com photo archive — captures the as-rented state of the property.</dd>

              <dt>Dates of Record</dt>
              <dd>Listing activity window and any renewal periods — establishes what seller/landlord knew and when.</dd>
            </dl>
          </div>
        </div>
        <div class="nu-comp-column">
          <div class="nu-comp-header sale">Current For-Sale Listing (Disclosed)</div>
          <div class="nu-comp-body">
            <dl>
              <dt>Seller's Disclosure Statement</dt>
              <dd>The signed statutory disclosure form that accompanies the purchase agreement.</dd>

              <dt>Omitted Items</dt>
              <dd class="missing">One or more conditions previously acknowledged in the rental advertising are not carried over into the seller's disclosure.</dd>

              <dt>Listing Agent Representations</dt>
              <dd>Written or verbal statements by the current listing agent that may be inconsistent with the rental-era record.</dd>

              <dt>Inspection vs. Disclosure</dt>
              <dd>Whether the inspection report independently surfaced the same items — if so, the omission is material.</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- EVIDENCE TO PULL -->
      <div class="nu-evidence">
        <h4>Evidence to Pull &amp; Preserve</h4>
        <ul>
          <li>Full text of the prior rental listing advertisement (HTML and PDF capture).</li>
          <li>Archived rental listing photos from Zillow, Apartments.com, Rent.com, and the local MLS.</li>
          <li>Wayback Machine snapshot (web.archive.org) of the rental listing URL.</li>
          <li>Signed seller's disclosure statement from the current for-sale transaction.</li>
          <li>Current MLS listing remarks — public and agent-only fields.</li>
          <li>Inspection report findings that overlap with rental-era claims.</li>
          <li>Any written tenant complaint, work-order history, or landlord response from the rental period.</li>
        </ul>
      </div>

      <!-- DISCREPANCIES TO FLAG -->
      <h2 class="nu-section-title"><span class="first">Specific</span> <span class="rest">Discrepancies to Flag</span></h2>
      <ol class="nu-discrepancy-list">
        <li>
          <h4>Features Advertised, Now Silent</h4>
          <p>Amenities or systems the rental listing affirmatively advertised that are now absent from the for-sale materials and disclosure — did they fail, get removed, or get replaced?</p>
        </li>
        <li>
          <h4>Issues Previously Acknowledged, Now Omitted</h4>
          <p>Any condition the rental listing openly noted (for example: foundation repair, water intrusion history, roof age, HVAC replacement) that does not appear on the current seller's disclosure.</p>
        </li>
        <li>
          <h4>Square Footage or Room Count Variance</h4>
          <p>Measurements or room designations that changed between listings — rental vs. sale — without an accompanying remodel permit or seller note.</p>
        </li>
        <li>
          <h4>Inclusions / Exclusions</h4>
          <p>Appliances, fixtures, or equipment included in the rental that are now marked as excluded from the sale without explanation.</p>
        </li>
        <li>
          <h4>Known-Material-Facts Gap</h4>
          <p>Any fact the owner is legally required to disclose under Alabama law (or the governing state) that the rental record shows they already knew about.</p>
        </li>
      </ol>

      <!-- RISK ASSESSMENT -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Assessment</span></h2>
      <table class="nu-risk-table">
        <thead>
          <tr>
            <th style="width: 30%;">Risk</th>
            <th style="width: 15%;">Level</th>
            <th>Consequence if Not Addressed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seller misrepresentation / nondisclosure claim</td>
            <td><span class="risk-level risk-high">High</span></td>
            <td>Buyer closes on a property with undisclosed defects; recourse post-closing is expensive and slow through litigation.</td>
          </tr>
          <tr>
            <td>Inspection contingency window expires</td>
            <td><span class="risk-level risk-high">High</span></td>
            <td>Loss of the right to walk away with earnest money returned; contract remedy becomes limited.</td>
          </tr>
          <tr>
            <td>Lender / appraisal repair call-outs</td>
            <td><span class="risk-level risk-med">Medium</span></td>
            <td>Appraiser or lender requires repairs that seller refuses, delaying or killing the deal.</td>
          </tr>
          <tr>
            <td>Title or insurance complication</td>
            <td><span class="risk-level risk-med">Medium</span></td>
            <td>Undisclosed conditions surface in title review or affect homeowner's insurance bindability.</td>
          </tr>
          <tr>
            <td>Post-closing warranty / documentation gap</td>
            <td><span class="risk-level risk-low">Low</span></td>
            <td>Manageable if reconciled before closing; escalates if ignored.</td>
          </tr>
        </tbody>
      </table>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps</span></h2>
      <div class="nu-action-grid">

        <div class="nu-action-card">
          <span class="nu-action-step">Step 1</span>
          <h4>Capture the Evidence</h4>
          <p>Archive the rental listing ad, photos, and any Wayback Machine snapshots before they are taken down. Save as PDFs with timestamps in the transaction folder.</p>
          <div class="owner">Owner: Aaron</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 2</span>
          <h4>Build the Side-by-Side</h4>
          <p>Put the rental advertising language and the seller's disclosure side-by-side, line by line. Highlight every item that appears in one but not the other.</p>
          <div class="owner">Owner: Aaron</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 3</span>
          <h4>Send Written Inquiry to Listing Agent</h4>
          <p>Email — not text — listing agent with the specific discrepancies and request a written response within 48 hours. Copy buyer's agent and keep all responses in the file.</p>
          <div class="owner">Owner: Aaron + Buyer's Agent</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 4</span>
          <h4>Loop In Real Estate Attorney</h4>
          <p>Forward the side-by-side and listing agent response to a licensed real estate attorney. Ask for a written opinion on whether the omission is actionable and what remedy to demand.</p>
          <div class="owner">Owner: Aaron</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 5</span>
          <h4>Request Amended Disclosure</h4>
          <p>Require the seller to sign an amended seller's disclosure statement acknowledging each previously advertised condition — or issue a written explanation for each omission.</p>
          <div class="owner">Owner: Buyer's Agent</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 6</span>
          <h4>Negotiate Remedy</h4>
          <p>Based on the reconciled list, negotiate either (a) a price reduction, (b) a repair credit at closing, or (c) seller-performed repairs with receipts before closing.</p>
          <div class="owner">Owner: Aaron</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 7</span>
          <h4>Document in the Contract</h4>
          <p>Amend the purchase agreement or add an addendum memorializing the reconciliation. Do not rely on email — put it in the contract.</p>
          <div class="owner">Owner: Buyer's Agent + Attorney</div>
        </div>

        <div class="nu-action-card">
          <span class="nu-action-step">Step 8</span>
          <h4>Preserve File Post-Closing</h4>
          <p>Retain the evidence pack, attorney opinion, and amended disclosure in the permanent transaction file. Statute of limitations for nondisclosure claims varies — do not discard.</p>
          <div class="owner">Owner: Aaron</div>
        </div>

      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Day 0 — Today (2026-04-23)</div>
          <p>Capture rental listing evidence, build side-by-side comparison, and send written inquiry to listing agent.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Day 1–2</div>
          <p>Listing agent response received. Attorney engaged with side-by-side and response in hand.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Day 3–5</div>
          <p>Amended seller's disclosure requested and received, or explanation documented in writing for every omission.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Day 5–7</div>
          <p>Negotiate remedy — price reduction, repair credit, or seller-performed repairs with proof.</p>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-date">Before Inspection Contingency Expires</div>
          <p>Addendum signed by all parties. If not reconciled, formally exercise inspection/disclosure contingency in writing to preserve earnest money.</p>
        </div>
      </div>

      <!-- KEY PRINCIPLES -->
      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Principles</span></h2>
      <div class="nu-evidence">
        <h4>Aaron's Rules for This Transaction</h4>
        <ul>
          <li>Everything goes in writing — email, not text, not voicemail.</li>
          <li>Every claim the rental advertising made is a claim the seller once stood behind — hold them to it.</li>
          <li>An omission by a seller who has operated the property as a rental is not a mistake; it is a choice worth reconciling.</li>
          <li>The reconciliation lives in the contract — not in an email chain.</li>
          <li>Walk-away authority is preserved only while the contingency is open. Move with urgency.</li>
        </ul>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>