<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1A7F37;
      --nu-warn: #B85C00;
      --nu-danger: #B42318;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border-radius: 2px;
      backdrop-filter: blur(4px);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
    }

    /* TITLE BLOCK */
    .nu-doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .nu-doc-meta .meta-block {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .nu-doc-meta .meta-block strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    h1.page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    h1.page-title .accent {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 780px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .lead {
      color: var(--nu-blue);
    }

    /* PROPERTY SUMMARY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .stat-card .label {
      font-size: 0.7rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .stat-card .value {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .stat-card .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }
    .stat-card.cyan { border-left-color: var(--nu-cyan); }
    .stat-card.gold { border-left-color: var(--nu-accent-gold); }

    /* CHEVRON BADGES */
    .badge-row {
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
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.4rem;
      line-height: 1;
      top: 8px;
    }

    /* OFFER LADDER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 12px;
    }
    .offer-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .offer-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .offer-table tbody tr:last-child td { border-bottom: none; }
    .offer-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .offer-table .tier {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .offer-table .price {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      white-space: nowrap;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: var(--nu-cyan);
    }
    .timeline-step {
      position: relative;
      padding: 0 0 18px 0;
    }
    .timeline-step::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .timeline-step .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 2px;
    }
    .timeline-step .what {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .timeline-step .why {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f8ff 0%, #e6f4ff 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 20px 22px;
      border-radius: 4px;
      margin-bottom: 24px;
    }
    .callout h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout.warn {
      background: linear-gradient(135deg, #fff7e6 0%, #ffefd1 100%);
      border-left-color: var(--nu-warn);
    }
    .callout.warn h4 { color: var(--nu-warn); }
    .callout.danger {
      background: linear-gradient(135deg, #fdecec 0%, #fad7d7 100%);
      border-left-color: var(--nu-danger);
    }
    .callout.danger h4 { color: var(--nu-danger); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* TALKING POINTS */
    .talking-points {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 8px 24px rgba(0,0,51,0.18);
    }
    .talking-points h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .talking-points ol {
      padding-left: 22px;
    }
    .talking-points ol li {
      padding: 8px 0;
      font-size: 0.98rem;
      line-height: 1.55;
    }
    .talking-points ol li strong {
      color: var(--nu-cyan);
      display: block;
      font-weight: 900;
      letter-spacing: 0.04em;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 60px; }
      h1.page-title { font-size: 1.8rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .offer-table thead { display: none; }
      .offer-table, .offer-table tbody, .offer-table tr, .offer-table td { display: block; width: 100%; }
      .offer-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px; }
      .offer-table td { border-bottom: 1px solid var(--nu-medium-gray); padding: 10px 14px; }
      .offer-table td:before {
        content: attr(data-label);
        display: block;
        font-weight: 900;
        font-size: 0.7rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--nu-blue);
        margin-bottom: 4px;
      }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .offer-table, .stat-card { box-shadow: none; }
      .talking-points { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    <div class="nu-doc-label">Estate Acquisition Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-doc-meta">
        <div class="meta-block">
          <strong>Action Item</strong>
          reMarkable — Negotiate Purchase
        </div>
        <div class="meta-block">
          <strong>Property</strong>
          4505 Buttewoods — 7,098 sq ft estate
        </div>
        <div class="meta-block">
          <strong>Prepared</strong>
          April 25, 2026
        </div>
        <div class="meta-block">
          <strong>Owner</strong>
          Aaron C. Norris, Founder &amp; CEO
        </div>
      </div>

      <h1 class="page-title">
        Negotiate <span class="accent">Purchase</span> — 4505 Buttewoods
      </h1>
      <p class="page-subtitle">
        Working brief and offer strategy for the 7,098 sq ft estate at 4505 Buttewoods.
        This document captures the negotiation plan, walk-away points, structure options,
        and the action checklist needed to move from offer to closing.
      </p>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Property</span> Snapshot</div>
        <div class="property-grid">
          <div class="stat-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Estate property — primary residence class</div>
          </div>
          <div class="stat-card cyan">
            <div class="label">Square Footage</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Confirm under-roof vs. heated/cooled at walk-through</div>
          </div>
          <div class="stat-card gold">
            <div class="label">Negotiation Posture</div>
            <div class="value">Buyer — Cash Preferred</div>
            <div class="sub">Lead with strength, leave room to escalate</div>
          </div>
          <div class="stat-card">
            <div class="label">Decision Owner</div>
            <div class="value">Aaron C. Norris</div>
            <div class="sub">All offers, counters, and walk-aways approved by Aaron</div>
          </div>
        </div>
      </section>

      <!-- INFORMATION TO LOCK BEFORE OFFER -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Information</span> to Lock Before First Offer</div>
        <p style="margin-bottom: 18px;">
          The property file is light. Before any number goes on paper, these items must be
          confirmed in writing — otherwise the negotiation is being run on assumptions.
        </p>
        <div class="badge-row">
          <div class="nu-badge"><span class="num">1</span>Confirm full legal address, parcel ID, and current owner of record (county recorder)</div>
          <div class="nu-badge"><span class="num">2</span>Pull current tax assessment, last sale price, and any open liens</div>
          <div class="nu-badge"><span class="num">3</span>Independent appraisal — order same week offer is presented</div>
          <div class="nu-badge"><span class="num">4</span>Three comparable sales within 0.5 mile, last 12 months, similar sq ft</div>
          <div class="nu-badge"><span class="num">5</span>Inspection scope: roof, HVAC, foundation, electrical service capacity</div>
          <div class="nu-badge"><span class="num">6</span>Survey, easements, and any utility ROW that crosses the parcel</div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Offer</span> Ladder &amp; Walk-Away</div>
        <p style="margin-bottom: 18px;">
          Three-step ladder. Aaron approves each step before it goes to the seller.
          Numbers are placed against the appraised value once the appraisal is in hand —
          enter percentages here, dollar figures get filled in by Aaron at the time of offer.
        </p>
        <table class="offer-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Position</th>
              <th>Anchor</th>
              <th>Concessions Allowed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Tier"><span class="tier">Opening</span></td>
              <td data-label="Position" class="price">88–92% of appraised value</td>
              <td data-label="Anchor">Cash, 21-day close, no contingencies beyond inspection &amp; clear title</td>
              <td data-label="Concessions">None at this tier — set the floor</td>
            </tr>
            <tr>
              <td data-label="Tier"><span class="tier">Counter</span></td>
              <td data-label="Position" class="price">93–97% of appraised value</td>
              <td data-label="Anchor">Same close terms; offer to absorb half of standard closing costs</td>
              <td data-label="Concessions">Earnest money increase; flexible possession date up to 30 days post-close</td>
            </tr>
            <tr>
              <td data-label="Tier"><span class="tier">Walk-Away</span></td>
              <td data-label="Position" class="price">100% of appraised value</td>
              <td data-label="Anchor">Hard ceiling. Will not exceed appraisal without new comparable evidence.</td>
              <td data-label="Concessions">Above this number the deal does not pencil — walk and revisit in 60 days</td>
            </tr>
          </tbody>
        </table>
        <div class="callout warn">
          <h4>Walk-Away Discipline</h4>
          The ceiling is the appraised value. If the seller will not meet that number, Aaron walks
          and the file gets a 60-day cooling pause. No verbal commitments above the ceiling — every
          counter goes back through this brief first.
        </div>
      </section>

      <!-- DEAL STRUCTURE OPTIONS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Deal</span> Structure Options</div>
        <div class="two-col">
          <div class="nu-card">
            <h3>Option A — Cash Close</h3>
            <ul>
              <li>Strongest leverage on price; cleanest path to close</li>
              <li>21-day target from contract to recording</li>
              <li>Funds confirmed via Renasant Bank (Patrick Lavette) before offer goes out</li>
              <li>Inspection contingency only — no financing contingency</li>
              <li>Best fit if seller wants speed and certainty</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Option B — Financed</h3>
            <ul>
              <li>Pre-approval letter ready before any offer is signed</li>
              <li>30–45 day close window; rate-lock confirmed at contract</li>
              <li>Use only if cash deployment would constrain Norris Utilities® operations</li>
              <li>Expect to give up 2–4% on negotiated price vs. cash</li>
              <li>Require appraisal and financing contingencies in writing</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Option C — Seller Financing</h3>
            <ul>
              <li>Use only if seller is motivated by tax treatment or steady income</li>
              <li>Down payment 20–25%; balloon at 5–7 years</li>
              <li>Rate at or below current commercial mortgage market</li>
              <li>First lien position recorded; no subordination</li>
              <li>Attorney-drafted promissory note — no template forms</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Option D — Hybrid / Earnest Bridge</h3>
            <ul>
              <li>Cash earnest at 5–10% to lock the deal during diligence</li>
              <li>Switch to financed close at funding</li>
              <li>Used to win against competing offers without full cash deployment</li>
              <li>Earnest hard after inspection clears, refundable until then</li>
              <li>Requires same pre-approval discipline as Option B</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Due</span> Diligence Checklist</div>
        <div class="nu-card">
          <ul class="checklist">
            <li>Title search — clear chain back 30 years; flag any prior probate or quitclaim entries</li>
            <li>Lien and judgment search — federal, state, county; UCC filings against the parcel</li>
            <li>Property tax — current paid status; verify assessment vs. listing/asking</li>
            <li>Survey — current boundary survey; flag encroachments or fence-line discrepancies</li>
            <li>Easements and ROW — utility, drainage, ingress/egress, mineral rights</li>
            <li>Zoning and use — confirm current use is conforming; check any pending rezone</li>
            <li>Flood zone — FEMA map; insurance availability and premium estimate</li>
            <li>Inspection — licensed inspector; separate roof and HVAC reports if older than 10 years</li>
            <li>Appraisal — independent licensed appraiser; not the seller's choice</li>
            <li>Insurance binder — quoted before close; coverage in place at funding</li>
            <li>HOA / covenants — full document set if applicable; transfer fees disclosed</li>
            <li>Utility transfer — power, water, gas, internet — service in Norris Utilities® or personal name as Aaron directs</li>
          </ul>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Negotiation</span> Timeline</div>
        <div class="timeline">
          <div class="timeline-step">
            <span class="when">Day 0 — This Week</span>
            <div class="what">Confirm property file, order appraisal, pull comps</div>
            <div class="why">No offer goes out without an independent appraisal in hand and three verified comparable sales.</div>
          </div>
          <div class="timeline-step">
            <span class="when">Day 3–5</span>
            <div class="what">Funds confirmation with Renasant Bank — Patrick Lavette</div>
            <div class="why">Cash position written confirmation. Sets up Option A as the lead structure.</div>
          </div>
          <div class="timeline-step">
            <span class="when">Day 5–7</span>
            <div class="what">Aaron approves opening offer at 88–92% of appraised value</div>
            <div class="why">Offer goes out in writing only. No verbal numbers. Counter window 72 hours.</div>
          </div>
          <div class="timeline-step">
            <span class="when">Day 8–14</span>
            <div class="what">Counter response handled per offer ladder</div>
            <div class="why">Each counter routes back through this brief; Aaron approves before reply.</div>
          </div>
          <div class="timeline-step">
            <span class="when">Day 14–35</span>
            <div class="what">Inspection, title, survey, insurance — all running in parallel</div>
            <div class="why">Diligence runs concurrent, not sequential. Any failure here is a renegotiation point or walk-away.</div>
          </div>
          <div class="timeline-step">
            <span class="when">Day 35–45</span>
            <div class="what">Close and record</div>
            <div class="why">Cash close target 21 days from contract; financed close target 35–45 days.</div>
          </div>
        </div>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <div class="talking-points">
          <h3>Aaron's Talking Points — Opening Conversation</h3>
          <ol>
            <li>
              <strong>Lead with intent.</strong>
              "I'm a serious buyer for 4505 Buttewoods. I'm prepared to move on a clean,
              fast-close basis if the number is right."
            </li>
            <li>
              <strong>Anchor on appraisal.</strong>
              "My offer will be tied to an independent appraised value. That gives both of us
              a defensible number we can stand behind."
            </li>
            <li>
              <strong>Show certainty of close.</strong>
              "Funds are confirmed through Renasant Bank. I can close in 21 days, no
              financing contingency, inspection only."
            </li>
            <li>
              <strong>Earn the seller's confidence.</strong>
              "I've built Norris Utilities® on doing what I say I'll do. If we shake on
              terms, the contract follows in writing the same week."
            </li>
            <li>
              <strong>Hold the ceiling.</strong>
              "I won't go above appraised value. If we can't get there, I respect your
              position and we'll part ways cleanly — no hard feelings."
            </li>
          </ol>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Risks</span> &amp; Watch Items</div>
        <div class="callout danger">
          <h4>Do Not Proceed Without</h4>
          A clear title report and a current independent appraisal. Either one missing kills the
          discipline of the offer ladder and turns the negotiation into guesswork.
        </div>
        <div class="callout warn">
          <h4>Operational Cash Discipline</h4>
          Estate purchases compete with Norris Utilities® working capital — FlexPro Armor inventory,
          Skylift PO commitments, and Samson Rope distributor float. Confirm with Patrick Lavette
          that the cash structure does not constrain operating reserves before going to Option A.
        </div>
        <div class="callout">
          <h4>Decision Cadence</h4>
          Counters get a 24-hour internal review window, then a 72-hour seller response window.
          Anything outside that cadence is a signal — re-evaluate the seller's intent before
          escalating tier.
        </div>
      </section>

      <!-- IMMEDIATE NEXT STEPS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="lead">Immediate</span> Next Steps</div>
        <div class="nu-card">
          <ul class="checklist">
            <li>Pull county recorder file on 4505 Buttewoods — owner, parcel ID, last sale, liens</li>
            <li>Order independent appraisal — licensed, not seller's referral</li>
            <li>Run three-comp report within 0.5 mile, last 12 months, similar sq ft</li>
            <li>Funds confirmation in writing from Renasant Bank — Patrick Lavette</li>
            <li>Schedule licensed inspection — separate roof and HVAC reports if older than 10 years</li>
            <li>Aaron reviews this brief, approves opening tier, and authorizes written offer</li>
            <li>Offer drafted, reviewed by attorney, signed, and delivered in writing</li>
          </ul>
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
  </footer>

</body>
</html>