<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
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
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 78px; height: 78px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-document-label {
      margin-top: 16px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      color: var(--nu-white);
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* GHOST PHOENIX */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 70px 40px 90px;
    }

    /* INTRO */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 30px 50px;
      padding-bottom: 28px;
      margin-bottom: 40px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta-item { min-width: 180px; }
    .doc-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .doc-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      max-width: 800px;
      margin-bottom: 36px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 4px;
      background: var(--nu-cyan);
      margin: 8px 0 22px;
    }
    .nu-section { margin-bottom: 50px; }

    /* PROPERTY SUMMARY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .property-stat {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 24px;
      border-radius: 0 6px 6px 0;
    }
    .property-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .property-stat-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .property-stat-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 8px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      width: 34px; height: 34px;
      margin-right: 14px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0 12px;
      font-size: 0.95rem;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table .col-amt { text-align: right; font-weight: 700; white-space: nowrap; }
    .nu-table tfoot td {
      font-weight: 900;
      background: var(--nu-navy);
      color: var(--nu-white);
      font-size: 1rem;
    }

    /* CARD GRID */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 22px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { font-size: 0.95rem; color: var(--nu-body-text); }
    .nu-card ul { margin-top: 10px; padding-left: 20px; }
    .nu-card li { margin-bottom: 6px; font-size: 0.93rem; }

    /* TIMELINE */
    .timeline {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 28px;
      margin-left: 8px;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 26px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px; top: 4px;
      width: 16px; height: 16px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-phase {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-body {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #eef0ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 28px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .callout-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .callout p { font-size: 1rem; color: var(--nu-dark-text); }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 18px 0;
    }
    .offer-rung {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .offer-rung.opening { border-color: var(--nu-blue); }
    .offer-rung.target { border-color: var(--nu-cyan); background: linear-gradient(180deg, var(--nu-white) 0%, #f0fbff 100%); }
    .offer-rung.walk { border-color: #C9A84C; }
    .offer-tier {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .offer-rung.target .offer-tier { color: #0099CC; }
    .offer-rung.walk .offer-tier { color: #B89238; }
    .offer-amount {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .offer-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-confidential {
      margin-top: 22px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-title { font-size: 1.7rem; }
      .nu-content-inner { padding: 50px 24px 70px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .offer-ladder { grid-template-columns: 1fr; }
      .nu-table { font-size: 0.85rem; }
      .nu-table th, .nu-table td { padding: 10px 12px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-document-label">Acquisition Strategy Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <div class="doc-meta-label">Prepared For</div>
          <div class="doc-meta-value">Aaron C. Norris, CEO</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Document Type</div>
          <div class="doc-meta-value">Negotiation Playbook</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Date</div>
          <div class="doc-meta-value">April 25, 2026</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Status</div>
          <div class="doc-meta-value">Active — Pre-Offer</div>
        </div>
      </div>

      <h1 class="doc-title">Estate Acquisition: <span>4505 Buttewoods</span></h1>
      <p class="doc-subtitle">
        Negotiation strategy and decision framework for the proposed purchase of the
        7,098 square foot estate at 4505 Buttewoods. Source: reMarkable action item.
      </p>

      <!-- PROPERTY SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Summary</span></h2>
        <div class="nu-section-rule"></div>

        <div class="property-grid">
          <div class="property-stat">
            <div class="property-stat-label">Address</div>
            <div class="property-stat-value">4505 Buttewoods</div>
            <div class="property-stat-sub">Subject property</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Heated Square Feet</div>
            <div class="property-stat-value">7,098 sq ft</div>
            <div class="property-stat-sub">Primary residence</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Property Class</div>
            <div class="property-stat-value">Estate Residence</div>
            <div class="property-stat-sub">Negotiated purchase</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Action Source</div>
            <div class="property-stat-value">reMarkable Note</div>
            <div class="property-stat-sub">Open action item</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-label">Action Item — Verbatim</div>
          <p>"Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods."</p>
        </div>
      </section>

      <!-- DATA TO CONFIRM -->
      <section class="nu-section">
        <h2 class="nu-section-title">Information <span>to Confirm Before Offer</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px;">
          The reMarkable note captures square footage and street address only. The fields below must be
          filled in from the listing, county records, and a walk-through before any offer is sent.
        </p>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full street + city / state / zip</td>
              <td>Listing or seller</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Lot size (acres)</td>
              <td>County tax records</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Year built and last major renovation</td>
              <td>County records / seller</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Bedrooms / bathrooms</td>
              <td>Listing</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Asking price</td>
              <td>Seller / agent</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Tax appraised value (most recent)</td>
              <td>County assessor</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Annual property taxes</td>
              <td>County assessor</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Existing liens, mortgage payoff, HOA</td>
              <td>Title search</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Days on market and prior price changes</td>
              <td>MLS history</td>
              <td>To confirm</td>
            </tr>
            <tr>
              <td>Recent comps within 1-mile, 7,000 sq ft +</td>
              <td>Buyer's agent / appraiser</td>
              <td>To confirm</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEGOTIATION SEQUENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Sequence</span></h2>
        <div class="nu-section-rule"></div>

        <div class="badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Engage buyer's agent and order independent comp report — no shared agency.</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Order pre-offer inspection and structural walk-through with a licensed engineer.</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Pull title work and confirm clean chain, payoff, and easements before any earnest money.</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Underwrite the deal at three price points — opening, target, walk-away.</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Submit written offer with proof of funds, financing letter, and 14-day inspection.</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Counter with credits — not price reductions — when seller resists list-price drops.</div>
          <div class="nu-badge"><span class="nu-badge-num">7</span>Close through Renasant — Patrick Lavette is the lender of record on bank-financed pieces.</div>
        </div>
      </section>

      <!-- OFFER STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 16px;">
          Once asking price and supporting comps are confirmed, set the three numbers below
          before the first conversation. Do not negotiate without a written walk-away figure.
        </p>

        <div class="offer-ladder">
          <div class="offer-rung opening">
            <div class="offer-tier">Opening Offer</div>
            <div class="offer-amount">— set after comps</div>
            <div class="offer-note">Approx. 88–92% of comp-supported value. Leaves room to move up.</div>
          </div>
          <div class="offer-rung target">
            <div class="offer-tier">Target Settle</div>
            <div class="offer-amount">— set after comps</div>
            <div class="offer-note">Comp-supported value less inspection items and closing credits.</div>
          </div>
          <div class="offer-rung walk">
            <div class="offer-tier">Walk-Away</div>
            <div class="offer-amount">— set after comps</div>
            <div class="offer-note">Fixed in writing before negotiation. Past this number, the deal dies.</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-label">Discipline Rule</div>
          <p>
            Do not raise the walk-away number once negotiation begins. If the seller will not meet
            the target settle inside 30 days, withdraw and revisit at 90 days. Sellers come back; bad deals don't get better.
          </p>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Leverage <span>Points</span></h2>
        <div class="nu-section-rule"></div>

        <div class="card-grid">
          <div class="nu-card">
            <h3>Cash Position</h3>
            <p>A clean offer with proof of funds beats a higher financed offer almost every time on estate-class property.</p>
            <ul>
              <li>Lead with cash component if available</li>
              <li>Show 60-day bank statement, not a screenshot</li>
              <li>Shorten close to 21 days</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Days on Market</h3>
            <p>7,000+ sq ft estates have a thin buyer pool. Time on market is the single largest leverage point.</p>
            <ul>
              <li>30 days: full ask is realistic</li>
              <li>60–90 days: 5–8% under ask</li>
              <li>120+ days: 10–15% under ask plus credits</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Inspection Findings</h3>
            <p>Convert inspection items to closing credits, not price reductions. Credits preserve appraisal and lower seller's tax basis less.</p>
            <ul>
              <li>Roof, HVAC, foundation — full credit</li>
              <li>Cosmetic items — pass</li>
              <li>Major items: get two written bids</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Carry Cost Pressure</h3>
            <p>Confirm whether the seller has already moved out. Vacant carry costs are a 30-day-per-month negotiation lever.</p>
            <ul>
              <li>Vacant + listed 60 days = strong leverage</li>
              <li>Probate or estate sale = strongest leverage</li>
              <li>Owner-occupied = weakest leverage</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Financing Flexibility</h3>
            <p>Patrick Lavette at Renasant Bank is the relationship lender. Pre-approval letter from Patrick reads stronger locally than an out-of-state bank.</p>
            <ul>
              <li>Get pre-approval before first showing</li>
              <li>Patrick to issue commitment letter on offer day</li>
              <li>Backup: in-house portfolio financing route</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Walk-Away Credibility</h3>
            <p>The buyer who can walk gets the best price. Have a second property identified before the first conversation.</p>
            <ul>
              <li>One backup property under written consideration</li>
              <li>No emotional commentary in writing or text</li>
              <li>Caroline Butler routes all written communication</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Working <span>Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Week 1 — Discovery</div>
            <div class="timeline-title">Confirm full address, asking price, comps, and tax history</div>
            <div class="timeline-body">Pull MLS history, county records, and verify the property is currently for sale and not under contract.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 1 — Financing</div>
            <div class="timeline-title">Pre-approval letter from Patrick Lavette at Renasant Bank</div>
            <div class="timeline-body">Issue letter at the proposed target settle number, not at the asking price. Letter dated within 14 days of offer.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 2 — Walk-Through</div>
            <div class="timeline-title">In-person showing plus licensed inspector and structural engineer</div>
            <div class="timeline-body">Aaron walks the property once with eyes only — second walk-through with inspector to record findings before any number is sent.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 2 — Offer</div>
            <div class="timeline-title">Submit written offer at opening number with 14-day inspection contingency</div>
            <div class="timeline-body">Offer expires in 72 hours. No verbal extensions. Earnest money sized to be credible without exposing capital.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 3 — Negotiation</div>
            <div class="timeline-title">Counter to target settle through credits, not price drops</div>
            <div class="timeline-body">Move once between opening and target. If seller refuses, hold and wait — do not chase.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 4 — Diligence</div>
            <div class="timeline-title">Title work, survey, appraisal, and final inspection items</div>
            <div class="timeline-body">Confirm zero liens, clean easements, and that appraisal supports purchase price.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Week 5 — Close</div>
            <div class="timeline-title">Close through Renasant with Patrick Lavette as lender of record</div>
            <div class="timeline-body">Recording at county courthouse same day. Insurance bound day-of close.</div>
          </div>
        </div>
      </section>

      <!-- DEAL BREAKERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Deal <span>Breakers</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px;">If any of the following surface during diligence, the deal pauses immediately. No counter, no concession.</p>

        <ul class="checklist">
          <li>Foundation, roof structure, or major framing failure exceeding $50,000 in remediation</li>
          <li>Active or unresolved litigation tied to the property or seller</li>
          <li>Title defect, lien, or easement that cannot be cleared at closing</li>
          <li>Environmental issue disclosed or discovered (asbestos, lead, prior fuel storage, mold)</li>
          <li>Appraisal coming in more than 5% below the negotiated purchase price</li>
          <li>Seller refusing to extend inspection contingency to a full 14 calendar days</li>
          <li>Any request to waive title insurance or attorney review</li>
        </ul>
      </section>

      <!-- DECISION OWNERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Decision <span>Owners</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Owner</th>
              <th>Authority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Final price authority</td>
              <td>Aaron C. Norris</td>
              <td>Sole signer. No verbal commitments without written follow-up.</td>
            </tr>
            <tr>
              <td>Banking and pre-approval</td>
              <td>Patrick Lavette — Renasant Bank</td>
              <td>Issues pre-approval and commitment letters. Closing lender of record.</td>
            </tr>
            <tr>
              <td>Document handling</td>
              <td>Caroline Butler (CB)</td>
              <td>Routes inspection reports, comp reports, and offer paperwork. Aaron reviews before send.</td>
            </tr>
            <tr>
              <td>Inspection and engineering</td>
              <td>Licensed inspector + structural engineer</td>
              <td>Independent of seller. Written reports only.</td>
            </tr>
            <tr>
              <td>Title and closing</td>
              <td>Selected closing attorney</td>
              <td>Title work, deed recording, escrow disbursement.</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="text-align: center;">All written communication routes through Aaron before send — A Legacy of Commitment®</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <!-- IMMEDIATE ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Next Actions</span></h2>
        <div class="nu-section-rule"></div>

        <ul class="checklist">
          <li>Confirm full street, city, and county for 4505 Buttewoods (reMarkable note has street only)</li>
          <li>Pull MLS listing if active; pull county tax record either way</li>
          <li>Order independent comp report — minimum five 6,500+ sq ft sales within twelve months and one mile</li>
          <li>Schedule pre-approval call with Patrick Lavette at Renasant Bank</li>
          <li>Identify one backup property to preserve walk-away credibility</li>
          <li>Set opening, target, and walk-away numbers in writing before first conversation with seller or seller's agent</li>
          <li>Block first walk-through window on Aaron's calendar — no joint showings with seller present</li>
        </ul>
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
    <div class="nu-footer-confidential">
      Confidential — Internal Acquisition Brief — Not for Distribution
    </div>
  </footer>

</body>
</html>