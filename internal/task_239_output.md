<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #0a8a3e;
      --nu-warning: #c47d00;
      --nu-critical: #b91c1c;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      color: var(--nu-white);
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* WHITE CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      background: var(--nu-light-gray);
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 60px 40px 80px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-left: 6px solid var(--nu-blue);
      margin-bottom: 32px;
    }
    .nu-title-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-title-main {
      font-size: 2.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .nu-title-main .highlight {
      color: var(--nu-blue);
    }
    .nu-title-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .nu-meta-item {
      display: flex;
      flex-direction: column;
    }
    .nu-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px 36px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* PROPERTY FACTS GRID */
    .nu-facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }
    .nu-fact-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 18px;
      border-radius: 6px;
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }

    /* PRICING SUMMARY */
    .nu-pricing-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.95rem;
    }
    .nu-pricing-table thead th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-pricing-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-pricing-table tbody tr:nth-child(even) {
      background: #fafbff;
    }
    .nu-pricing-table .amount {
      text-align: right;
      font-weight: 700;
      font-family: 'Lato', monospace;
      color: var(--nu-dark-text);
    }
    .nu-pricing-table .target-row {
      background: #e8f7ec !important;
    }
    .nu-pricing-table .target-row td {
      font-weight: 900;
      color: var(--nu-success);
      border-top: 2px solid var(--nu-success);
    }
    .nu-pricing-table .walk-row td {
      background: #fff4e6;
      font-weight: 700;
      color: var(--nu-warning);
    }

    /* STRATEGY CARDS */
    .nu-strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 16px;
    }
    .nu-strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-strategy-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .nu-strategy-card.open {
      border-top: 4px solid var(--nu-cyan);
    }
    .nu-strategy-card.target {
      border-top: 4px solid var(--nu-success);
    }
    .nu-strategy-card.walk {
      border-top: 4px solid var(--nu-critical);
    }
    .nu-strategy-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .nu-strategy-amount {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.1;
    }
    .nu-strategy-desc {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin-top: 8px;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .check-icon {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 900;
      margin-right: 14px;
      margin-top: 2px;
    }
    .nu-checklist .step-text {
      flex: 1;
    }
    .nu-checklist .step-text strong {
      color: var(--nu-dark-text);
    }

    /* LEVERAGE POINTS */
    .nu-leverage-list {
      list-style: none;
      padding: 0;
    }
    .nu-leverage-list li {
      position: relative;
      padding: 14px 20px 14px 44px;
      margin-bottom: 10px;
      background: #fafbff;
      border-radius: 6px;
      border-left: 3px solid var(--nu-blue);
      font-size: 0.95rem;
    }
    .nu-leverage-list li::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background: var(--nu-cyan);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(6,208,255,0.2);
    }
    .nu-leverage-list li strong {
      color: var(--nu-blue);
      display: block;
      margin-bottom: 2px;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
      margin-top: 16px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item:last-child { padding-bottom: 0; }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-phase {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-timeline-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #fff8e6 0%, #fff1cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 20px 24px;
      border-radius: 6px;
      margin-top: 16px;
    }
    .nu-callout-title {
      font-weight: 900;
      color: #8a6d1a;
      font-size: 1rem;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.85rem;
    }
    .nu-callout-body {
      font-size: 0.95rem;
      color: #5a4810;
      line-height: 1.5;
    }

    /* CONTINGENCY TABLE */
    .nu-contingency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .nu-contingency {
      background: #f8f9ff;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 18px;
    }
    .nu-contingency-name {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .nu-contingency-text {
      font-size: 0.88rem;
      line-height: 1.5;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.5;
    }
    .nu-footer-confidential {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
      margin-top: 16px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 20px 60px; }
      .nu-title-block, .nu-section { padding: 24px; }
      .nu-title-main { font-size: 1.5rem; }
      .nu-strategy-amount { font-size: 1.6rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section, .nu-title-block { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential — Negotiation Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-title-block">
        <div class="nu-title-eyebrow">Action Item — Real Estate Negotiation</div>
        <h1 class="nu-title-main">Negotiate Purchase: <span class="highlight">4505 Buttewoods Estate</span></h1>
        <p class="nu-title-sub">7,098 square foot estate acquisition — strategy, leverage points, and execution plan for Aaron C. Norris, Founder &amp; CEO.</p>
        <div class="nu-meta-row">
          <div class="nu-meta-item">
            <span class="nu-meta-label">Property</span>
            <span class="nu-meta-value">4505 Buttewoods</span>
          </div>
          <div class="nu-meta-item">
            <span class="nu-meta-label">Size</span>
            <span class="nu-meta-value">7,098 sq ft</span>
          </div>
          <div class="nu-meta-item">
            <span class="nu-meta-label">Document Date</span>
            <span class="nu-meta-value">April 21, 2026</span>
          </div>
          <div class="nu-meta-item">
            <span class="nu-meta-label">Prepared For</span>
            <span class="nu-meta-value">Aaron C. Norris</span>
          </div>
          <div class="nu-meta-item">
            <span class="nu-meta-label">Source</span>
            <span class="nu-meta-value">reMarkable Action Item</span>
          </div>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <p style="margin-bottom: 8px;">Key data points for 4505 Buttewoods. Verify every number with a licensed Alabama appraiser and current MLS comps before signing anything.</p>
        <div class="nu-facts-grid">
          <div class="nu-fact-card">
            <div class="nu-fact-label">Address</div>
            <div class="nu-fact-value">4505 Buttewoods</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Gross Living Area</div>
            <div class="nu-fact-value">7,098 sq ft</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Property Type</div>
            <div class="nu-fact-value">Estate Residence</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Buyer</div>
            <div class="nu-fact-value">Aaron C. Norris</div>
          </div>
        </div>
      </section>

      <!-- PRICING STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Strategy &amp; Price Bands</span></h2>
        <p style="margin-bottom: 12px;">Three anchor numbers. Open low, target the middle, and walk if the seller will not come off the top.</p>

        <div class="nu-strategy-grid">
          <div class="nu-strategy-card open">
            <div class="nu-strategy-label">Opening Offer</div>
            <div class="nu-strategy-amount">$850,000</div>
            <div class="nu-strategy-desc">First written offer. Leaves room to move up in two increments while still closing under target. Condition on inspection, financing, and appraisal.</div>
          </div>
          <div class="nu-strategy-card target">
            <div class="nu-strategy-label">Target Close Price</div>
            <div class="nu-strategy-amount">$900,000</div>
            <div class="nu-strategy-desc">The number Aaron is willing to sign at with standard contingencies intact. This is the real goal — present it only after the seller counters.</div>
          </div>
          <div class="nu-strategy-card walk">
            <div class="nu-strategy-label">Walk-Away Ceiling</div>
            <div class="nu-strategy-amount">$935,000</div>
            <div class="nu-strategy-desc">Hard cap. Above this number the deal does not pencil against comparable 7,000+ sq ft estates in the area. Walk without regret.</div>
          </div>
        </div>

        <table class="nu-pricing-table" style="margin-top: 24px;">
          <thead>
            <tr>
              <th>Round</th>
              <th>Our Position</th>
              <th class="amount">Price</th>
              <th class="amount">$/sq ft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Round 1 — Open</strong></td>
              <td>Written offer with full contingencies</td>
              <td class="amount">$850,000</td>
              <td class="amount">$119.75</td>
            </tr>
            <tr>
              <td><strong>Round 2 — Counter</strong></td>
              <td>Move up after seller counter above $900K</td>
              <td class="amount">$875,000</td>
              <td class="amount">$123.27</td>
            </tr>
            <tr class="target-row">
              <td><strong>Round 3 — Target</strong></td>
              <td>Final number we sign at</td>
              <td class="amount">$900,000</td>
              <td class="amount">$126.80</td>
            </tr>
            <tr class="walk-row">
              <td><strong>Ceiling</strong></td>
              <td>Walk above this number</td>
              <td class="amount">$935,000</td>
              <td class="amount">$131.73</td>
            </tr>
          </tbody>
        </table>

        <div class="nu-callout">
          <div class="nu-callout-title">Pricing Discipline</div>
          <div class="nu-callout-body">Never move up more than $25,000 per round. Never give concessions without getting something back (repairs, closing credits, appliances, closing date flex). The seller must feel they earned the increase.</div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points to Use in Negotiation</span></h2>
        <p style="margin-bottom: 12px;">These are the facts you lead with when the seller pushes back on price.</p>
        <ul class="nu-leverage-list">
          <li><strong>Proof of funds in hand</strong>Pre-qualification letter and bank statement ready to attach — signals serious, non-tire-kicker buyer most sellers dream about.</li>
          <li><strong>Short inspection window</strong>Offer 7-day inspection instead of the typical 14 — faster to certainty for the seller.</li>
          <li><strong>Flexible closing date</strong>Willing to close in 30 days or wait 60 if the seller needs time to move out. Flexibility is free to us, valuable to them.</li>
          <li><strong>Clean offer language</strong>No rent-back demands, no contingent-on-sale-of-other-home clause, no unusual concessions. Cleaner than 90% of offers.</li>
          <li><strong>Documented comps</strong>Bring a one-page comp sheet showing three comparable 6,500–7,500 sq ft estates that sold under $130/sq ft in the last 12 months.</li>
          <li><strong>Days-on-market (DOM)</strong>If property has been listed 45+ days, use that to anchor lower. Every week past 30 days strengthens our position.</li>
          <li><strong>No agent fee on our side (if direct)</strong>If purchasing directly from seller, the 2.5–3% buyer-agent commission savings become a concession pool.</li>
        </ul>
      </section>

      <!-- EXECUTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Checklist — Before the First Call</span></h2>
        <p style="margin-bottom: 12px;">Work the list top to bottom. Do not open negotiations until every item is checked.</p>
        <ul class="nu-checklist">
          <li>
            <span class="check-icon">1</span>
            <div class="step-text"><strong>Pull comparable sales.</strong> Three 6,500–7,500 sq ft estates sold within 12 months and 5 miles. Note $/sq ft, lot size, condition.</div>
          </li>
          <li>
            <span class="check-icon">2</span>
            <div class="step-text"><strong>Order independent appraisal or BPO.</strong> Do not rely on Zillow, Redfin, or the listing agent's number. Get a licensed opinion.</div>
          </li>
          <li>
            <span class="check-icon">3</span>
            <div class="step-text"><strong>Confirm financing.</strong> Written pre-approval from Patrick Lavette at Renasant Bank — loan amount, rate lock terms, required down.</div>
          </li>
          <li>
            <span class="check-icon">4</span>
            <div class="step-text"><strong>Retain a real-estate attorney.</strong> Alabama closings benefit from attorney review. Have one on retainer before drafting the offer.</div>
          </li>
          <li>
            <span class="check-icon">5</span>
            <div class="step-text"><strong>Review title history.</strong> Check for liens, easements, unpaid taxes, HOA dues, and any litigation attached to the parcel.</div>
          </li>
          <li>
            <span class="check-icon">6</span>
            <div class="step-text"><strong>Learn seller's motivation.</strong> Relocation? Downsizing? Estate sale? Each one changes the leverage you apply.</div>
          </li>
          <li>
            <span class="check-icon">7</span>
            <div class="step-text"><strong>Draft the written offer.</strong> Opening offer at $850,000 with contingencies: inspection (7 days), financing (21 days), appraisal (21 days), clean title.</div>
          </li>
          <li>
            <span class="check-icon">8</span>
            <div class="step-text"><strong>Set walk-away rule in writing.</strong> $935,000 ceiling. Sign and date it. Do not renegotiate the ceiling in the heat of the moment.</div>
          </li>
        </ul>
      </section>

      <!-- NEGOTIATION TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 1 — Preparation</div>
            <div class="nu-timeline-title">Comps, financing, attorney</div>
            <div class="nu-timeline-desc">Complete the 8-item execution checklist. No outreach to seller yet.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 2 — Opening Offer</div>
            <div class="nu-timeline-title">Submit $850,000 written offer</div>
            <div class="nu-timeline-desc">Include proof of funds, pre-qualification letter, and 7-day inspection terms. Give seller 72 hours to respond.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 2–3 — Counter Round</div>
            <div class="nu-timeline-title">Evaluate seller response</div>
            <div class="nu-timeline-desc">If counter above $935,000, send one polite final at $900,000 with 48-hour expiration. If counter between $900–935K, negotiate repairs/credits instead of price.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 3 — Close or Walk</div>
            <div class="nu-timeline-title">Sign under $935,000 or disengage</div>
            <div class="nu-timeline-desc">No emotional attachment. If walk-away triggers, send a polite decline letter — doors stay open if the seller revisits later.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Weeks 4–7 — Due Diligence</div>
            <div class="nu-timeline-title">Inspection, appraisal, title, financing</div>
            <div class="nu-timeline-desc">All contingencies worked in parallel. Any material defect = renegotiate price or walk without penalty.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-phase">Week 8 — Closing</div>
            <div class="nu-timeline-title">Attorney-supervised closing</div>
            <div class="nu-timeline-desc">Wire funds only from Aaron's verified account to verified attorney escrow. Zero tolerance for wire-fraud risk.</div>
          </div>
        </div>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Non-Negotiable</span> <span class="rest">Contract Contingencies</span></h2>
        <p style="margin-bottom: 14px;">Every offer Aaron signs must contain these four contingencies. Waiving any of them on a $900,000 estate exposes the buyer to unacceptable risk.</p>
        <div class="nu-contingency-grid">
          <div class="nu-contingency">
            <div class="nu-contingency-name">Inspection Contingency</div>
            <div class="nu-contingency-text">7-day window for full home inspection, pest, radon, septic/well (if applicable). Right to renegotiate or terminate.</div>
          </div>
          <div class="nu-contingency">
            <div class="nu-contingency-name">Financing Contingency</div>
            <div class="nu-contingency-text">21 days to secure loan commitment. If financing denied, earnest money returns to buyer.</div>
          </div>
          <div class="nu-contingency">
            <div class="nu-contingency-name">Appraisal Contingency</div>
            <div class="nu-contingency-text">Property must appraise at or above purchase price. If short, seller must reduce or buyer walks.</div>
          </div>
          <div class="nu-contingency">
            <div class="nu-contingency-name">Clear Title Contingency</div>
            <div class="nu-contingency-text">Clean title policy required at closing. All liens, judgments, and encumbrances must be resolved by seller.</div>
          </div>
        </div>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Talking</span> <span class="rest">Points — Key Scripts</span></h2>

        <div style="margin-bottom: 18px;">
          <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;">Opening the Conversation</div>
          <p style="font-style: italic; color: var(--nu-dark-text); padding: 12px 16px; background: #fafbff; border-left: 3px solid var(--nu-cyan); border-radius: 4px;">"I've done the work on 4505 Buttewoods. Comps in the area show estates of this size transacting between $118 and $128 per square foot. I've pulled together a serious offer — pre-qualified, proof of funds, short inspection window. I'd like to earn the business at a price that works for both of us."</p>
        </div>

        <div style="margin-bottom: 18px;">
          <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;">If Seller Rejects Opening</div>
          <p style="font-style: italic; color: var(--nu-dark-text); padding: 12px 16px; background: #fafbff; border-left: 3px solid var(--nu-cyan); border-radius: 4px;">"I understand. Help me see what you're seeing — which comparable property is supporting your number? I want to be fair, and I'd rather move up than walk away from a house that fits our family."</p>
        </div>

        <div style="margin-bottom: 18px;">
          <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;">Approaching the Ceiling</div>
          <p style="font-style: italic; color: var(--nu-dark-text); padding: 12px 16px; background: #fafbff; border-left: 3px solid var(--nu-cyan); border-radius: 4px;">"My final number is $900,000, clean terms, close in 30 days. I can sign today. Above that, the math stops working against comparable sales in this market, and I'll have to respectfully step back."</p>
        </div>

        <div>
          <div style="font-weight: 900; color: var(--nu-blue); margin-bottom: 6px; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;">The Walk-Away</div>
          <p style="font-style: italic; color: var(--nu-dark-text); padding: 12px 16px; background: #fafbff; border-left: 3px solid var(--nu-cyan); border-radius: 4px;">"I appreciate your time and the property is beautiful. We're not going to meet on price today, but I'll leave my offer on the table for 7 days in case circumstances change. Either way, I wish you well."</p>
        </div>
      </section>

      <!-- RISK / DECISION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Watchlist</span></h2>
        <ul class="nu-leverage-list">
          <li><strong>Emotional escalation</strong>If Aaron falls in love with the house, the $935,000 ceiling will feel cheap. Write the ceiling down. Honor it.</li>
          <li><strong>Seller stall tactics</strong>"I need to think about it" past 72 hours usually means they are shopping your offer to other buyers. Put expiration dates on everything in writing.</li>
          <li><strong>Hidden defects</strong>7,098 sq ft estates often have issues invisible to the naked eye — roof, foundation, HVAC, septic. Budget $8K–$15K for inspection and specialist reports.</li>
          <li><strong>Appraisal gap</strong>If appraisal comes in below purchase price, do not volunteer to cover the gap out of pocket. Renegotiate or walk.</li>
          <li><strong>Wire fraud</strong>Verify wire instructions by voice, to a known phone number, immediately before sending. Never trust emailed wire instructions without voice confirmation.</li>
          <li><strong>Business cash flow impact</strong>Coordinate closing with the Skylift PO timeline and open FlexPro Armor receivables. Do not starve Norris Utilities® working capital to fund personal real estate.</li>
        </ul>

        <div class="nu-callout" style="margin-top: 20px;">
          <div class="nu-callout-title">Decision Rule</div>
          <div class="nu-callout-body">This is a personal decision with business cash-flow implications. Review the open invoices file and operations/open-items before signing anything. Independent appraisal + attorney sign-off are mandatory, not optional.</div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Confidential — Prepared for Aaron C. Norris</div>
  </footer>

</body>
</html>