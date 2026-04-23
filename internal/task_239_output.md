<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0A7A3C;
      --nu-warning: #C9701E;
      --nu-danger: #B82020;
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
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 20px;
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 20px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 20px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* DOC META */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 36px;
    }
    .doc-title-block h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .doc-title-block h1 .accent {
      color: var(--nu-blue);
    }
    .doc-title-block .doc-subtitle {
      font-size: 1rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-stamp {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-stamp .stamp-id {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      font-size: 0.95rem;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .first-word {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
    }

    /* PROPERTY SNAPSHOT */
    .prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .prop-stat {
      background: linear-gradient(180deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 16px;
    }
    .prop-stat .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .prop-stat .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 2px;
    }
    .prop-stat .unit {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* NEGOTIATION BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .badge-num {
      width: 34px;
      height: 34px;
      margin-right: 14px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }

    /* TABLES */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 11px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table tbody tr:last-child td {
      border-bottom: none;
    }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table tfoot td {
      font-weight: 900;
      background: var(--nu-navy);
      color: var(--nu-white);
      font-size: 1rem;
      border-bottom: none;
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .offer-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .offer-card .tier {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .offer-card .price {
      font-size: 1.75rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .offer-card .delta {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .offer-card .rationale {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .offer-card.target {
      border-top: 5px solid var(--nu-cyan);
      border-left: 1px solid var(--nu-cyan);
      background: linear-gradient(180deg, #F0FBFF 0%, var(--nu-white) 60%);
    }
    .offer-card.opening { border-top: 5px solid var(--nu-success); }
    .offer-card.walkaway { border-top: 5px solid var(--nu-warning); }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 10px 10px 10px 36px;
      margin-bottom: 6px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      border-radius: 0 4px 4px 0;
      font-size: 0.96rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      top: 14px;
      left: 12px;
      width: 14px;
      height: 14px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .flag-box {
      border-radius: 6px;
      padding: 18px 20px;
      border-left: 4px solid;
    }
    .flag-box h4 {
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .flag-box ul {
      padding-left: 18px;
      font-size: 0.92rem;
    }
    .flag-box li { margin-bottom: 5px; }
    .flag-box.strengths {
      background: #F0F9F3;
      border-left-color: var(--nu-success);
    }
    .flag-box.strengths h4 { color: var(--nu-success); }
    .flag-box.risks {
      background: #FFF8F0;
      border-left-color: var(--nu-warning);
    }
    .flag-box.risks h4 { color: var(--nu-warning); }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 20px 0 10px;
      padding-left: 34px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      top: 8px; bottom: 8px; left: 10px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .phase {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .timeline-item .detail {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 30px 0 10px;
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-callout h3 {
      font-weight: 900;
      font-size: 1.2rem;
      margin-bottom: 10px;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-callout p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.92);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 46px 20px 68px; min-height: 230px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 22px 44px; }
      .doc-title-block h1 { font-size: 1.55rem; }
      .two-col { grid-template-columns: 1fr; }
      .doc-meta { flex-direction: column; align-items: flex-start; }
      .doc-stamp { align-items: flex-start; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 16px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .offer-card { box-shadow: none; }
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
    <div class="nu-doc-label">Internal Action Item</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-title-block">
          <h1><span class="accent">Estate</span> Acquisition Negotiation</h1>
          <div class="doc-subtitle">4505 Buttewoods — 7,098 sq ft Private Estate</div>
        </div>
        <div class="doc-stamp">
          <div class="stamp-id">ACTION ITEM · PERSONAL</div>
          <div>Source: reMarkable Notes</div>
          <div>Prepared: April 22, 2026</div>
          <div>Owner: Aaron C. Norris</div>
        </div>
      </div>

      <!-- SECTION 1 — PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
        <p class="nu-section-lead">
          Captured from reMarkable handwritten notes. These are the confirmed property parameters that will
          anchor every conversation, every offer, and every walk-away decision. All comp pricing and financing
          terms below will be reconciled against this baseline before sitting down at the table.
        </p>

        <div class="prop-grid">
          <div class="prop-stat">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="unit">Subject property</div>
          </div>
          <div class="prop-stat">
            <div class="label">Heated Area</div>
            <div class="value">7,098</div>
            <div class="unit">square feet</div>
          </div>
          <div class="prop-stat">
            <div class="label">Classification</div>
            <div class="value">Estate</div>
            <div class="unit">Single-family, premium tier</div>
          </div>
          <div class="prop-stat">
            <div class="label">Acquisition Intent</div>
            <div class="value">Personal</div>
            <div class="unit">Not Norris Utilities® asset</div>
          </div>
          <div class="prop-stat">
            <div class="label">Status</div>
            <div class="value">Pre-Offer</div>
            <div class="unit">Negotiation phase opening</div>
          </div>
          <div class="prop-stat">
            <div class="label">Urgency</div>
            <div class="value">Deliberate</div>
            <div class="unit">No forced timeline</div>
          </div>
        </div>
      </section>

      <!-- SECTION 2 — NEGOTIATION PRINCIPLES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Principles</span></h2>
        <p class="nu-section-lead">
          Direct, warm, genuine, confident — never pushy or apologetic. Lead with the ask. Never bury the price.
          Every conversation is on the record from the seller's side, so every conversation is on the record from ours.
        </p>

        <div class="nu-badge"><span class="badge-num">1</span>The first number spoken sets the ceiling. Make the seller name it.</div>
        <div class="nu-badge"><span class="badge-num">2</span>Silence after a counter-offer is a tool. Use it.</div>
        <div class="nu-badge"><span class="badge-num">3</span>Every concession must be traded — never given.</div>
        <div class="nu-badge"><span class="badge-num">4</span>Inspections are leverage; they are not a courtesy.</div>
        <div class="nu-badge"><span class="badge-num">5</span>Walk-away price is written in ink before the first meeting.</div>
        <div class="nu-badge"><span class="badge-num">6</span>Every verbal concession gets confirmed in email the same day.</div>
      </section>

      <!-- SECTION 3 — DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Due</span> <span class="rest">Diligence Checklist — Pre-Offer</span></h2>
        <p class="nu-section-lead">
          Nothing is offered until this list is complete. Each item supplies either leverage or a walk-away trigger.
        </p>

        <ul class="checklist">
          <li>Pull last three tax-assessed values for 4505 Buttewoods — establish trend line and assessment gap vs. any list price.</li>
          <li>Request full seller's disclosure, including disclosure of prior rental listing terms if the property ever appeared on the rental market.</li>
          <li>Verify heated square footage (7,098) against appraisal district record — measured square footage discrepancies are the number-one price reset.</li>
          <li>Order three independent sold-comp pulls: past 6 months, 12 months, and 24 months within a 1-mile radius, estate class only.</li>
          <li>Confirm lot size, easements, setback lines, and any utility right-of-way crossings — relevant to long-term value and insurability.</li>
          <li>Request HVAC, roof, and major-mechanical service records for the last five years. Age of roof and age of primary HVAC units drive initial inspection-reset offers.</li>
          <li>Pull plat, survey, and title commitment before offer is written. Any encumbrance, lien, or easement changes the price immediately.</li>
          <li>Obtain two independent insurance quotes — premium spreads flag hidden risk the seller has not disclosed.</li>
          <li>Drive the property at three different times (morning, weekday rush, Saturday midday). Traffic and neighborhood behavior shape long-term livability.</li>
          <li>Confirm school district assignment and any pending rezoning — estate value is long-term, and rezoning is a silent price mover.</li>
          <li>Pre-qualify financing with primary lender — Renasant / Patrick Lavette — before first written offer. Cash-or-financing posture shapes negotiating stance.</li>
          <li>Engage a buyer-side agent or attorney for representation before any written offer is delivered. Never negotiate written terms alone.</li>
        </ul>
      </section>

      <!-- SECTION 4 — VALUATION GRID -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Valuation</span> <span class="rest">Grid — Comp Targets</span></h2>
        <p class="nu-section-lead">
          Comparable sales will be organized into this grid before any number is discussed with the seller.
          Numbers in the placeholder columns will be filled in once due-diligence pulls are complete — no price
          gets spoken until each row here carries a confirmed figure.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Comp Bucket</th>
                <th>Radius</th>
                <th>Window</th>
                <th>Min Sq Ft Band</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recent sold — tight</td>
                <td>≤ 0.5 mi</td>
                <td>Last 6 months</td>
                <td>6,500 – 7,700 sq ft</td>
                <td>Opening offer anchor</td>
              </tr>
              <tr>
                <td>Recent sold — neighborhood</td>
                <td>≤ 1.0 mi</td>
                <td>Last 12 months</td>
                <td>6,000 – 8,000 sq ft</td>
                <td>Counter-offer defense</td>
              </tr>
              <tr>
                <td>Extended history</td>
                <td>≤ 1.0 mi</td>
                <td>Last 24 months</td>
                <td>6,000 – 8,000 sq ft</td>
                <td>Trend-line narrative</td>
              </tr>
              <tr>
                <td>Expired / withdrawn</td>
                <td>≤ 1.0 mi</td>
                <td>Last 18 months</td>
                <td>6,000 – 8,000 sq ft</td>
                <td>Seller-pricing-psychology read</td>
              </tr>
              <tr>
                <td>Active competition</td>
                <td>≤ 1.5 mi</td>
                <td>Currently listed</td>
                <td>6,500 – 8,000 sq ft</td>
                <td>Substitution leverage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 5 — OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Offer</span> <span class="rest">Ladder — Three Positions</span></h2>
        <p class="nu-section-lead">
          Three positions are locked in before the first meeting — opening, target, walk-away. Each position
          is driven by the comp grid above; numbers are left intentionally open until the comp pulls are complete
          so the ladder is never written against a guess.
        </p>

        <div class="offer-ladder">
          <div class="offer-card opening">
            <div class="tier">Opening Position</div>
            <div class="price">Comp floor − 7%</div>
            <div class="delta">Written first offer</div>
            <p class="rationale">
              Anchored to the tightest-radius sold-comp floor, minus a 7% concession budget. Delivered in writing
              with earnest money, financing letter, and a 10-day inspection contingency. Never delivered verbally.
            </p>
          </div>
          <div class="offer-card target">
            <div class="tier">Target Close</div>
            <div class="price">Comp median</div>
            <div class="delta">Walk-out handshake</div>
            <p class="rationale">
              Settlement point that leaves dignity on both sides. Backed by the 12-month neighborhood median,
              adjusted for measured square footage and verified roof/HVAC age. This is the price Aaron is
              willing to sign against without hesitation.
            </p>
          </div>
          <div class="offer-card walkaway">
            <div class="tier">Walk-Away Ceiling</div>
            <div class="price">Comp median + 4%</div>
            <div class="delta">Final hard line</div>
            <p class="rationale">
              One cent above this number is a walk. Written on paper before the first meeting and placed
              out of sight. Seller never learns the ceiling. Renegotiation beyond this line only reopens if
              disclosure data materially improves the value.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — LEVERAGE AUDIT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">Audit</span></h2>
        <div class="two-col">
          <div class="flag-box strengths">
            <h4>Buyer Strengths</h4>
            <ul>
              <li>Qualified financing relationship at Renasant Bank (Patrick Lavette) — strong local lender posture.</li>
              <li>No current home sale contingency — clean contract for seller.</li>
              <li>No forced move-in deadline — time is on the buyer's side.</li>
              <li>Discipline to walk if numbers break — emotional detachment preserved by written walk-away line.</li>
              <li>Can close on cash-equivalent timeline if inspection is favorable.</li>
            </ul>
          </div>
          <div class="flag-box risks">
            <h4>Known Risks &amp; Flags</h4>
            <ul>
              <li>Square footage claim of 7,098 must be independently measured — discrepancy is a repricing trigger.</li>
              <li>Estate-class homes carry outsized maintenance cost exposure (roof, HVAC zoning, irrigation, pool if present).</li>
              <li>Any prior rental-listing history requires disclosure reconciliation before offer.</li>
              <li>Insurance premium spread (high-end estate) may flag undisclosed prior claim history.</li>
              <li>Property tax reassessment on resale can meaningfully shift carrying cost.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Timeline</span></h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="phase">Phase 1 — Due Diligence</div>
            <div class="detail">Comps pulled, disclosures requested, financing pre-qualified, independent measurement ordered. No price is spoken. Expected duration: 7–10 business days.</div>
          </div>
          <div class="timeline-item">
            <div class="phase">Phase 2 — Position Lock</div>
            <div class="detail">Opening, target, and walk-away written and signed by Aaron. Ladder placed in a sealed document. Conversation strategy rehearsed with buyer-side representation.</div>
          </div>
          <div class="timeline-item">
            <div class="phase">Phase 3 — First Written Offer</div>
            <div class="detail">Offer delivered in writing with earnest money, pre-qualification letter, and 10-day inspection window. Valid for 72 hours. No verbal negotiation before it is on paper.</div>
          </div>
          <div class="timeline-item">
            <div class="phase">Phase 4 — Counter &amp; Concession Trade</div>
            <div class="detail">Every counter met with a trade, never a match. Concessions requested on closing cost, repair credits, closing date, and personal-property inclusions — never pure price movement.</div>
          </div>
          <div class="timeline-item">
            <div class="phase">Phase 5 — Inspection Reset</div>
            <div class="detail">Post-inspection price reset is a separate negotiation. Use written repair findings to recover any concessions given in Phase 4 above the target price.</div>
          </div>
          <div class="timeline-item">
            <div class="phase">Phase 6 — Close or Walk</div>
            <div class="detail">If walk-away ceiling is tested, walk. Walking once positions the next offer stronger. A deal that does not respect the walk-away line is not a deal worth closing.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 8 — COUNTER-OFFER PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Counter</span> <span class="rest">Response Playbook</span></h2>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Seller Move</th>
                <th>Aaron's Response</th>
                <th>Trade Asked In Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Counter at list price, no concession</td>
                <td>Hold at opening. Ask for disclosure clarifications before next move.</td>
                <td>Request roof and HVAC age verification.</td>
              </tr>
              <tr>
                <td>Counter splits the difference</td>
                <td>Move halfway to target, not halfway to counter.</td>
                <td>Closing cost credit equal to movement.</td>
              </tr>
              <tr>
                <td>Seller refuses repair credit post-inspection</td>
                <td>Present independent contractor estimate; hold on credit figure.</td>
                <td>Faster close date if credit is honored.</td>
              </tr>
              <tr>
                <td>Multiple offers claimed</td>
                <td>Ask for escalation evidence in writing. If none, hold position.</td>
                <td>No trade — claim without proof is not leverage.</td>
              </tr>
              <tr>
                <td>Seller demands verbal commitment</td>
                <td>Decline. All commitments go in writing same day.</td>
                <td>Offer to sign amendment tonight if terms are in email.</td>
              </tr>
              <tr>
                <td>Counter at or above walk-away ceiling</td>
                <td>Thank seller. Withdraw offer cleanly. Leave the door open.</td>
                <td>None — position reset is the trade.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 9 — CALLOUT -->
      <div class="nu-callout">
        <h3>Discipline Reminder</h3>
        <p>
          The best negotiators lose deals that should be lost. A 7,098 sq ft estate is a 20-year decision, not a
          90-day decision. If the walk-away line is crossed, walking is not failure — it is the plan executed
          exactly as written. Every written concession is traded, every verbal agreement is followed by same-day
          email confirmation, and every price spoken before due diligence is a mistake.
        </p>
      </div>

      <!-- SECTION 10 — IMMEDIATE NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Immediate</span> <span class="rest">Next Steps</span></h2>
        <ul class="checklist">
          <li>Call Patrick Lavette at Renasant Bank to open a personal pre-qualification conversation for the acquisition.</li>
          <li>Engage a buyer-side real-estate attorney in the Birmingham, AL market before any written offer.</li>
          <li>Order independent measurement of 4505 Buttewoods — verify the 7,098 sq ft claim.</li>
          <li>Pull six-month, twelve-month, and twenty-four-month sold-comp reports within a one-mile radius.</li>
          <li>Request full seller disclosure, including any prior rental-listing history, in writing.</li>
          <li>Lock opening, target, and walk-away numbers on paper — sealed, signed, dated — before first meeting.</li>
          <li>Confirm insurance quotes from two carriers; review for flag language indicating prior claims.</li>
          <li>Schedule first property walk-through with buyer-side representation present — not alone.</li>
        </ul>
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