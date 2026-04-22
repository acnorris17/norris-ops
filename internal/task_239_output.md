<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #1B7F3B;
      --nu-warning: #D97706;
      --nu-danger: #B91C1C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 50%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header-inner { position: relative; z-index: 2; }

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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
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

    /* DOCUMENT META BAR */
    .doc-meta {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 16px 40px;
    }
    .doc-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta strong {
      color: var(--nu-navy);
      font-weight: 700;
    }
    .doc-status {
      display: inline-block;
      background: #FEF3C7;
      color: #92400E;
      padding: 4px 12px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* MAIN CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 70px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* PAGE TITLE */
    .page-title-block {
      text-align: center;
      margin-bottom: 40px;
    }
    .page-eyebrow {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 6px 18px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.5rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 800px;
      margin: 0 auto;
    }

    /* SECTION */
    .section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      color: var(--nu-blue);
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-divider {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin: 0 0 24px;
      border-radius: 2px;
    }

    /* PROPERTY SUMMARY GRID */
    .prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .prop-cell {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 6px;
    }
    .prop-cell-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .prop-cell-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .prop-cell-value small {
      display: block;
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* CONTEXT NOTE */
    .context-note {
      background: linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 16px;
      font-size: 0.95rem;
    }
    .context-note strong { color: var(--nu-blue); }

    /* APPROACH STEPS */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      position: relative;
      padding: 18px 18px 18px 64px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      counter-increment: step;
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 16px;
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .step-list .step-title {
      display: block;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .step-list .step-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .col-card {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px;
    }
    .col-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-navy);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .col-card ul {
      list-style: none;
      padding: 0;
    }
    .col-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .col-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0 4px;
      font-size: 0.95rem;
    }
    .val-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .val-table thead th:last-child { text-align: right; }
    .val-table tbody td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .val-table tbody td:last-child {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .val-table tbody tr:hover { background: var(--nu-light-gray); }
    .val-table tfoot td {
      padding: 14px;
      background: #EBF4FF;
      font-weight: 900;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }
    .val-table tfoot td:last-child {
      text-align: right;
      font-size: 1.1rem;
    }

    /* RISK / OPPORTUNITY GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .risk-card {
      padding: 22px;
      border-radius: 8px;
      border-top: 4px solid;
    }
    .risk-card.opp { background: #ECFDF5; border-color: var(--nu-success); }
    .risk-card.risk { background: #FEF2F2; border-color: var(--nu-danger); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 10px;
    }
    .risk-card.opp h4 { color: var(--nu-success); }
    .risk-card.risk h4 { color: var(--nu-danger); }
    .risk-card ul {
      list-style: none;
      padding: 0;
    }
    .risk-card ul li {
      padding: 5px 0 5px 18px;
      position: relative;
      font-size: 0.92rem;
    }
    .risk-card.opp ul li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--nu-success);
      font-weight: 900;
    }
    .risk-card.risk ul li::before {
      content: '!';
      position: absolute;
      left: 4px;
      color: var(--nu-danger);
      font-weight: 900;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 6px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .timeline-action {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* OFFER STRATEGY HIGHLIGHT */
    .offer-strategy {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 10px;
      margin-top: 8px;
    }
    .offer-strategy h4 {
      color: var(--nu-cyan);
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .offer-tiers {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 18px;
    }
    .offer-tier {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(6, 208, 255, 0.3);
      border-radius: 6px;
      padding: 18px;
      text-align: center;
    }
    .offer-tier-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .offer-tier-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-white);
      margin-bottom: 4px;
    }
    .offer-tier-note {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.75);
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
      left: 0;
      top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

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
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-title { font-size: 1.7rem; }
      .section { padding: 24px 20px; }
      .nu-content-area { padding: 30px 16px 50px; }
      .doc-meta { padding: 14px 20px; }
      .two-col, .risk-grid { grid-template-columns: 1fr; }
      .offer-tiers { grid-template-columns: 1fr; }
    }
    @media print {
      body { background: white; }
      .section { box-shadow: none; break-inside: avoid; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOCUMENT META -->
  <div class="doc-meta">
    <div class="doc-meta-inner">
      <div><strong>Action Item:</strong> Buttewoods Estate Acquisition</div>
      <div><strong>Source:</strong> reMarkable note, 2026-04-21</div>
      <div><strong>Owner:</strong> Aaron C. Norris</div>
      <div><span class="doc-status">Open — Negotiation</span></div>
    </div>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="container">

      <!-- TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">Personal / Real Estate Action Plan</div>
        <h1 class="page-title">Negotiate Purchase — <span>4505 Buttewoods Estate</span></h1>
        <p class="page-subtitle">7,098 sq ft single-family estate. Structured negotiation plan, valuation framework, due-diligence checklist, and offer strategy.</p>
      </div>

      <!-- PROPERTY SUMMARY -->
      <section class="section">
        <h2 class="section-title">Property <span>Summary</span></h2>
        <div class="section-divider"></div>

        <div class="prop-grid">
          <div class="prop-cell">
            <div class="prop-cell-label">Address</div>
            <div class="prop-cell-value">4505 Buttewoods<small>Birmingham metro area</small></div>
          </div>
          <div class="prop-cell">
            <div class="prop-cell-label">Living Area</div>
            <div class="prop-cell-value">7,098 sq ft<small>Estate-class single family</small></div>
          </div>
          <div class="prop-cell">
            <div class="prop-cell-label">Status</div>
            <div class="prop-cell-value">Negotiation<small>Pre-offer / due diligence</small></div>
          </div>
          <div class="prop-cell">
            <div class="prop-cell-label">Decision Window</div>
            <div class="prop-cell-value">14 days<small>From 2026-04-21</small></div>
          </div>
        </div>

        <div class="context-note">
          <strong>Context:</strong> This is a personal real estate item captured on the reMarkable. The action is to move from interest into a structured negotiation — establish independent valuation, identify deal structure leverage, and present a written offer that protects against the disclosure and rental/for-sale discrepancies flagged in companion notes.
        </div>
      </section>

      <!-- NEGOTIATION APPROACH -->
      <section class="section">
        <h2 class="section-title">Negotiation <span>Approach</span></h2>
        <div class="section-divider"></div>

        <ol class="step-list">
          <li>
            <span class="step-title">Establish independent value before talking price</span>
            <span class="step-body">Pull comps for estate-class properties (6,500–7,500 sq ft) within a 3-mile radius, sold in the last 12 months. Order an arms-length appraisal in parallel — do not rely on the seller's listing price as anchor.</span>
          </li>
          <li>
            <span class="step-title">Reconcile the disclosure discrepancy first</span>
            <span class="step-body">The rental listing and the for-sale listing carry different representations. Get every discrepancy in writing from the listing agent before any offer. Treat unresolved items as price-reduction levers, not deal-killers.</span>
          </li>
          <li>
            <span class="step-title">Lead with the ask in writing</span>
            <span class="step-body">Submit a written letter of intent (LOI) with offer price, earnest money, inspection period, financing contingency, and target close date. Verbal offers waste leverage. The first written number sets the negotiation frame.</span>
          </li>
          <li>
            <span class="step-title">Hold three concession levers — never give up more than one per round</span>
            <span class="step-body">Price, close-date flexibility, and post-close occupancy. Concede on the cheapest lever first. Walk-away authority must be established internally before the first counter.</span>
          </li>
          <li>
            <span class="step-title">Close on terms, not just price</span>
            <span class="step-body">Inspection findings, title warranties, seller-paid repairs, and the disclosure addendum are where real money lives. A $25K price win lost to a $40K roof punt is a loss.</span>
          </li>
        </ol>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="section">
        <h2 class="section-title">Valuation <span>Framework</span></h2>
        <div class="section-divider"></div>

        <p style="margin-bottom: 18px; font-size: 0.95rem;">Three independent value benchmarks. Make the offer below the lowest — do not anchor to seller's list price. Final numbers populate during the comp pull and appraisal.</p>

        <table class="val-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Source / Inputs</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Comparable Sales</strong></td>
              <td>3 closed comps, 6,500–7,500 sq ft, sold in last 12 months, within 3-mile radius</td>
              <td>Pull within 3 days</td>
            </tr>
            <tr>
              <td><strong>2. Independent Appraisal</strong></td>
              <td>Licensed appraiser, ordered separately from lender appraisal</td>
              <td>Order day 1</td>
            </tr>
            <tr>
              <td><strong>3. Cost-to-Replicate</strong></td>
              <td>Lot value + replacement cost per sq ft − depreciation</td>
              <td>Day 5–7</td>
            </tr>
            <tr>
              <td><strong>4. Income Approach</strong></td>
              <td>Cross-check against rental listing pricing — what would this rent for, and what cap rate does it imply?</td>
              <td>Day 5–7</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Offer Anchor</td>
              <td>Lowest of the four benchmarks, less concession reserve</td>
              <td>Day 8</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <!-- OPPORTUNITIES VS RISKS -->
      <section class="section">
        <h2 class="section-title">Opportunities <span>vs. Risks</span></h2>
        <div class="section-divider"></div>

        <div class="risk-grid">
          <div class="risk-card opp">
            <h4>Negotiating Leverage</h4>
            <ul>
              <li>Rental/for-sale disclosure discrepancy is unresolved — written documentation is a direct price lever</li>
              <li>Estate-class square footage in this market has thin buyer pool — fewer competing offers</li>
              <li>Seller running dual track (rent or sell) often signals carrying-cost pressure</li>
              <li>Cash or strong-financing buyer commands premium concessions</li>
            </ul>
          </div>
          <div class="risk-card risk">
            <h4>Risks to Manage</h4>
            <ul>
              <li>Disclosure discrepancy may indicate undisclosed defects — independent inspection is non-negotiable</li>
              <li>7,098 sq ft carries elevated maintenance, insurance, and property tax burden</li>
              <li>Estate-class resale velocity is slower — exit liquidity matters</li>
              <li>Emotional attachment to the property is the single largest risk to price discipline</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER STRATEGY -->
      <section class="section">
        <h2 class="section-title">Offer <span>Strategy</span></h2>
        <div class="section-divider"></div>

        <p style="margin-bottom: 12px; font-size: 0.95rem;">Three-tier offer ladder — establish all three internally before submitting the first one. Concede only between tiers, never below the walk-away.</p>

        <div class="offer-strategy">
          <h4>Three-Tier Offer Ladder</h4>
          <p style="font-size: 0.9rem; opacity: 0.9;">Final dollar values are set after comps and appraisal complete. The structure below is locked; the numbers populate at Day 8.</p>
          <div class="offer-tiers">
            <div class="offer-tier">
              <div class="offer-tier-label">Opening Offer</div>
              <div class="offer-tier-value">Anchor − 12%</div>
              <div class="offer-tier-note">Below lowest valuation benchmark; preserves room for counters</div>
            </div>
            <div class="offer-tier">
              <div class="offer-tier-label">Target Close</div>
              <div class="offer-tier-value">Anchor − 5%</div>
              <div class="offer-tier-note">Where the deal should land; concede only after seller counter</div>
            </div>
            <div class="offer-tier">
              <div class="offer-tier-label">Walk-Away</div>
              <div class="offer-tier-value">Anchor flat</div>
              <div class="offer-tier-note">Above this number, walk. No exceptions, no emotional override.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="section">
        <h2 class="section-title">Due-Diligence <span>Checklist</span></h2>
        <div class="section-divider"></div>

        <div class="two-col">
          <div class="col-card">
            <h4>Documents to Request</h4>
            <ul class="checklist">
              <li>Full seller disclosure statement (current, signed)</li>
              <li>Survey and plat with easements identified</li>
              <li>Last 24 months utility bills (load test the carrying cost)</li>
              <li>Property tax history, 5-year</li>
              <li>HOA documents, covenants, restrictions</li>
              <li>Insurance claims history (CLUE report)</li>
              <li>Permits and certificates of occupancy for any additions</li>
              <li>Existing rental listing materials and any prior leases</li>
            </ul>
          </div>
          <div class="col-card">
            <h4>Inspections to Order</h4>
            <ul class="checklist">
              <li>General home inspection (whole-home, licensed)</li>
              <li>Independent appraisal (separate from lender's)</li>
              <li>Roof inspection (separate report — estate roofs are expensive)</li>
              <li>HVAC inspection — every system in the house</li>
              <li>Foundation / structural engineer review</li>
              <li>Sewer scope and water service line</li>
              <li>Termite / WDO bond status</li>
              <li>Pool / outbuilding inspection if applicable</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="section">
        <h2 class="section-title">14-Day <span>Action Timeline</span></h2>
        <div class="section-divider"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Day 1 — 2026-04-21</div>
            <div class="timeline-action">Order independent appraisal. Request full disclosure packet, survey, tax history, CLUE report, and HOA documents from listing agent in writing.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Days 2–3 — Apr 22–23</div>
            <div class="timeline-action">Pull comparable sales (6,500–7,500 sq ft, sold last 12 months, 3-mile radius). Document every disclosure discrepancy between rental and for-sale listings.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Days 4–5 — Apr 24–25</div>
            <div class="timeline-action">Schedule general inspection, roof, HVAC, structural, sewer scope. Confirm financing pre-approval letter is current and at the high end of price ladder.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Days 6–7 — Apr 26–27</div>
            <div class="timeline-action">Receive independent appraisal. Cross-check against comps and cost-to-replicate. Set Anchor value and lock the three-tier offer ladder internally.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 8 — 2026-04-28</div>
            <div class="timeline-action">Submit written Letter of Intent at Opening Offer (Anchor − 12%). Include earnest money, inspection period, financing contingency, target close, requested concessions.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Days 9–11 — Apr 29 – May 1</div>
            <div class="timeline-action">Negotiate counters. Concede on the cheapest lever first. Hold price discipline. Do not extend past Walk-Away under any circumstance.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Days 12–14 — May 2–4</div>
            <div class="timeline-action">Either contract executed and inspection period begins, or formal walk-away letter sent to listing agent. Decision is binary — no extending.</div>
          </div>
        </div>
      </section>

      <!-- DECISION RULES -->
      <section class="section">
        <h2 class="section-title">Decision <span>Rules</span></h2>
        <div class="section-divider"></div>

        <ul class="checklist" style="font-size: 0.98rem;">
          <li>Walk away if the disclosure discrepancy cannot be reconciled in writing.</li>
          <li>Walk away if the independent appraisal comes in more than 8% below the seller's asking price and seller refuses to meet appraisal.</li>
          <li>Walk away if any inspection finds undisclosed structural, foundation, or roof defects exceeding $40,000 to remedy and seller will not credit.</li>
          <li>Walk away if seller will not allow a full 14-day inspection period.</li>
          <li>Decision authority sits with Aaron C. Norris alone. No third-party pressure changes the offer ladder.</li>
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
  </footer>

</body>
</html>