<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Brief — Norris Utilities®</title>
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
      --nu-success: #2D7A3E;
      --nu-warning: #C9A84C;
      --nu-danger: #B91C1C;
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

    /* ══ HEADER ══ */
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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

    /* ══ DOC META BAR ══ */
    .nu-doc-meta {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 40px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-doc-meta .label { color: var(--nu-cyan); margin-right: 6px; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 560px; height: 560px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-eyebrow {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      padding: 6px 16px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-title-block h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-title-block h1 span { color: var(--nu-blue); }
    .nu-title-block .address {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      letter-spacing: 0.02em;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ STAT STRIP ══ */
    .nu-stat-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .nu-stat-cell {
      background: var(--nu-white);
      padding: 22px 16px;
      text-align: center;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-stat-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      font-weight: 700;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 20px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    .nu-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-card.danger { border-left-color: var(--nu-danger); }
    .nu-card.success { border-left-color: var(--nu-success); }

    /* ══ GRID LAYOUTS ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    /* ══ DEAL SHEET TABLE ══ */
    .nu-deal-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 20px;
    }
    .nu-deal-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-deal-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-deal-table tr:last-child td { border-bottom: none; }
    .nu-deal-table tr.highlight td {
      background: #FFF9E6;
      font-weight: 700;
    }
    .nu-deal-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-deal-table td.pos { color: var(--nu-success); }
    .nu-deal-table td.neg { color: var(--nu-danger); }

    /* ══ BADGE / PILL ══ */
    .nu-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 100px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-pill.blue { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .nu-pill.cyan { background: rgba(6,208,255,0.15); color: #005a73; }
    .nu-pill.gold { background: rgba(201,168,76,0.18); color: #7a6423; }
    .nu-pill.red { background: rgba(185,28,28,0.1); color: var(--nu-danger); }
    .nu-pill.green { background: rgba(45,122,62,0.12); color: var(--nu-success); }

    /* ══ ACTION LIST ══ */
    .nu-action-list {
      list-style: none;
      counter-reset: step;
    }
    .nu-action-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 16px 16px 60px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .nu-action-list li::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-action-list li .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    .nu-action-list li .step-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ BULLETS ══ */
    .nu-bullet-list {
      list-style: none;
      padding-left: 0;
    }
    .nu-bullet-list li {
      padding-left: 24px;
      position: relative;
      margin-bottom: 10px;
      line-height: 1.6;
    }
    .nu-bullet-list li::before {
      content: '•';
      position: absolute;
      left: 4px;
      top: 0;
      color: var(--nu-blue);
      font-size: 1.3rem;
      font-weight: 900;
      line-height: 1.4;
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.08) 100%);
      border: 1px solid rgba(6,208,255,0.3);
      border-radius: 6px;
      padding: 24px 28px;
      margin: 20px 0;
    }
    .nu-callout .label {
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      margin-bottom: 8px;
      display: block;
    }

    .nu-callout.warning {
      background: linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%);
      border-color: rgba(201,168,76,0.4);
    }
    .nu-callout.warning .label { color: #7a6423; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px 36px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 20px; }
      .nu-title-block h1 { font-size: 1.7rem; }
      .nu-stat-strip { grid-template-columns: repeat(2, 1fr); }
      .nu-grid-2, .nu-grid-3 { grid-template-columns: 1fr; }
      .nu-doc-meta { padding: 12px 20px; font-size: 0.72rem; }
      .nu-deal-table th, .nu-deal-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-deal-table { box-shadow: none; break-inside: avoid; }
      .nu-footer { -webkit-print-color-adjust: exact; }
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
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="nu-doc-meta">
    <div><span class="label">Document:</span> Acquisition Negotiation Brief</div>
    <div><span class="label">Prepared:</span> April 22, 2026</div>
    <div><span class="label">Prepared By:</span> Aaron C. Norris</div>
    <div><span class="label">Confidential:</span> Internal Use</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TITLE BLOCK -->
      <section class="nu-title-block">
        <span class="nu-eyebrow">Real Estate Acquisition</span>
        <h1>Negotiate Purchase of<br><span>7,098 sq ft Estate</span> at 4505 Buttewoods</h1>
        <div class="address">4505 Buttewoods Drive &nbsp;·&nbsp; Primary Residence / Legacy Holding</div>
      </section>

      <!-- KEY STATS STRIP -->
      <section class="nu-section">
        <div class="nu-stat-strip">
          <div class="nu-stat-cell">
            <div class="nu-stat-value">7,098</div>
            <div class="nu-stat-label">Square Feet</div>
          </div>
          <div class="nu-stat-cell">
            <div class="nu-stat-value">4505</div>
            <div class="nu-stat-label">Buttewoods Dr.</div>
          </div>
          <div class="nu-stat-cell">
            <div class="nu-stat-value">1</div>
            <div class="nu-stat-label">Seller / Estate</div>
          </div>
          <div class="nu-stat-cell">
            <div class="nu-stat-value">TBD</div>
            <div class="nu-stat-label">Ask &nbsp;·&nbsp; To Confirm</div>
          </div>
        </div>
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Executive <span>Summary</span></h2>
        <div class="nu-card cyan">
          <p>
            This brief captures the negotiation framework for the purchase of the
            7,098-square-foot estate located at <strong>4505 Buttewoods Drive</strong>.
            The action item originated from Aaron's reMarkable field notes and is
            now formally tracked as an active acquisition target for Norris Utilities®
            leadership.
          </p>
          <p>
            The purpose of this document is to organize the deal into a disciplined,
            repeatable negotiation process: clear valuation anchors, written offer
            strategy, diligence milestones, and a close timeline that protects both
            the buyer and the counterparty. Every number that is currently unknown
            is flagged as <strong>"To Confirm"</strong> so this page remains a true working record, not a placeholder document.
          </p>
          <p>
            Ownership of the negotiation sits with Aaron C. Norris directly.
            Caroline Butler (CB) will support scheduling, document collection, and
            any communication requiring a written record. No commitments, offers,
            or counteroffers go out without Aaron's signed approval.
          </p>
        </div>
      </section>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Property <span>Snapshot</span></h2>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3>Address</h3>
            <p>4505 Buttewoods Drive</p>
            <p><span class="nu-pill blue">Under Evaluation</span></p>
          </div>
          <div class="nu-card">
            <h3>Size</h3>
            <p><strong>7,098 sq ft</strong> &mdash; heated / finished interior as represented by seller side.</p>
          </div>
          <div class="nu-card">
            <h3>Intended Use</h3>
            <p>Legacy family estate &middot; long-horizon hold &middot; Norris family use. Not a flip, not a short-term rental.</p>
          </div>
          <div class="nu-card">
            <h3>Lot &amp; Site</h3>
            <p>Confirm acreage, frontage, and setbacks via public parcel data before first offer.</p>
          </div>
          <div class="nu-card">
            <h3>Year Built &amp; Condition</h3>
            <p>Confirm age, roof, HVAC, foundation, and any prior remediation through a signed seller disclosure plus independent inspection.</p>
          </div>
          <div class="nu-card">
            <h3>Zoning / HOA</h3>
            <p>Confirm zoning classification, any HOA covenants, and use restrictions before offer is written.</p>
          </div>
        </div>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title">Valuation <span>Framework</span></h2>
        <p style="margin-bottom:18px;">
          Rather than anchor to the seller's ask, the offer is built from three
          independent valuation lanes. The working offer is the <strong>lower of the
          three defensible numbers</strong>, adjusted for any diligence findings.
        </p>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3>1. Comparable Sales</h3>
            <p>Last 12 months of closed sales for 6,500+ sq ft homes within a 3-mile radius. Weight by price per square foot, lot size, and finish level.</p>
          </div>
          <div class="nu-card cyan">
            <h3>2. Replacement Cost</h3>
            <p>Land value plus estimated cost-to-build at current construction pricing, less depreciation for age and condition. Useful ceiling check on the ask.</p>
          </div>
          <div class="nu-card gold">
            <h3>3. Income / Hold Value</h3>
            <p>If ever repositioned as an income asset, what would a 10-year hold return? Anchors the downside floor, not the target price.</p>
          </div>
        </div>

        <div class="nu-callout">
          <span class="label">Pricing Discipline</span>
          <p>
            The offer strategy is defined by numbers, not emotion. The estate is
            attractive, but <strong>the spread between ask and defensible value is
            the negotiation</strong>. If the three lanes converge within 5% of the ask,
            proceed. If they diverge by more than 15%, the offer is built off the
            comp average, not the ask.
          </p>
        </div>
      </section>

      <!-- DEAL SHEET -->
      <section class="nu-section">
        <h2 class="nu-section-title">Working <span>Deal Sheet</span></h2>
        <p style="margin-bottom:18px;">
          All dollar figures are placeholders until comps and seller disclosures
          are in hand. Aaron fills these in during the first working session and
          revises at each offer round. <strong>No figure leaves this page unless
          Aaron has written it himself.</strong>
        </p>
        <table class="nu-deal-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th>Round 1 &mdash; Opening</th>
              <th>Round 2 &mdash; Counter</th>
              <th>Walk-Away</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purchase Price</td>
              <td class="num">To Confirm</td>
              <td class="num">To Confirm</td>
              <td class="num">To Confirm</td>
            </tr>
            <tr>
              <td>Earnest Money Deposit</td>
              <td class="num">1% of offer</td>
              <td class="num">2% of offer</td>
              <td class="num">3% of offer</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td class="num">14 days</td>
              <td class="num">10 days</td>
              <td class="num">7 days</td>
            </tr>
            <tr>
              <td>Financing Contingency</td>
              <td class="num">30 days</td>
              <td class="num">21 days</td>
              <td class="num">Cash close</td>
            </tr>
            <tr>
              <td>Seller Concessions</td>
              <td class="num">2%</td>
              <td class="num">1%</td>
              <td class="num">0%</td>
            </tr>
            <tr>
              <td>Close Date</td>
              <td class="num">60 days</td>
              <td class="num">45 days</td>
              <td class="num">30 days</td>
            </tr>
            <tr class="highlight">
              <td>Net to Seller (Est.)</td>
              <td class="num">To Confirm</td>
              <td class="num">To Confirm</td>
              <td class="num">To Confirm</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- NEGOTIATION POSTURE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Posture</span></h2>
        <div class="nu-grid-2">
          <div class="nu-card success">
            <h3>Leverage For Us</h3>
            <ul class="nu-bullet-list">
              <li>Serious, qualified buyer with a real close history.</li>
              <li>Willing to close fast if terms are right.</li>
              <li>No contingent sale &mdash; not waiting on another property.</li>
              <li>Clean financing relationship (Patrick Lavette &middot; Renasant Bank) already in place.</li>
              <li>Long-horizon hold &mdash; not shopping the market on flipper math.</li>
            </ul>
          </div>
          <div class="nu-card danger">
            <h3>Leverage For Seller</h3>
            <ul class="nu-bullet-list">
              <li>7,098 sq ft is a scarce footprint in this market.</li>
              <li>No obvious distress pushing seller to discount.</li>
              <li>Emotional pull of the estate can tempt us off price discipline.</li>
              <li>Limited supply of true direct comps at this size tier.</li>
              <li>Seller may have multiple interested parties &mdash; confirm early.</li>
            </ul>
          </div>
        </div>

        <div class="nu-callout warning">
          <span class="label">Guardrail</span>
          <p>
            Walk-away number is set <strong>before</strong> the first offer and is not
            moved during live negotiation. If the deal crosses the walk-away,
            the correct answer is "thank you, we're out" &mdash; not a stretched offer.
          </p>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <div class="nu-grid-2">
          <div class="nu-card">
            <h3>Property &amp; Title</h3>
            <ul class="nu-bullet-list">
              <li>Title commitment &mdash; confirm free of liens, judgments, mechanic's liens.</li>
              <li>Survey &mdash; current or updated; confirm encroachments and easements.</li>
              <li>Parcel tax records &mdash; last 3 years, confirm assessed value trajectory.</li>
              <li>Plat map &mdash; boundaries, setbacks, right-of-way.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Structural &amp; Systems</h3>
            <ul class="nu-bullet-list">
              <li>Licensed home inspection &mdash; full report with photos.</li>
              <li>Roof &mdash; age, warranty, last service.</li>
              <li>HVAC &mdash; units, age, tonnage, service record.</li>
              <li>Foundation &mdash; any prior remediation or settlement.</li>
              <li>Sewer scope &mdash; mainline inspection for any 10+ year home.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Financial &amp; Legal</h3>
            <ul class="nu-bullet-list">
              <li>Seller's written property disclosure.</li>
              <li>Insurance quote &mdash; confirm insurable at reasonable premium.</li>
              <li>Flood zone &mdash; FEMA map check.</li>
              <li>Attorney review of contract before signing.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Neighborhood &amp; Use</h3>
            <ul class="nu-bullet-list">
              <li>HOA documents &mdash; covenants, dues, any special assessments.</li>
              <li>Schools &mdash; current ratings, boundary confirmation.</li>
              <li>Planned development within 1 mile &mdash; zoning, permits pending.</li>
              <li>Drive the route at 7 AM and 5 PM &mdash; confirm the livability.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan &amp; Timeline</span></h2>
        <ol class="nu-action-list">
          <li>
            <span class="step-title">Pull the public record file</span>
            <span class="step-detail">County parcel lookup &mdash; confirm legal description, current owner of record, last sale price, last sale date, assessed value, and lot size. Target: within 48 hours of this brief.</span>
          </li>
          <li>
            <span class="step-title">Run three comp lanes</span>
            <span class="step-detail">Build the comparable sales, replacement cost, and hold-value numbers outlined in the Valuation Framework. Write the three results on this page before any contact with the seller.</span>
          </li>
          <li>
            <span class="step-title">Confirm financing envelope</span>
            <span class="step-detail">Call Patrick Lavette at Renasant Bank. Confirm pre-approval ceiling, terms, down-payment target, and any portfolio-loan flexibility for a property of this size.</span>
          </li>
          <li>
            <span class="step-title">Open dialogue with the seller side</span>
            <span class="step-detail">Initial conversation is listening only &mdash; timeline, motivation, flexibility, any other interest on the property. Do not float a number in the first call.</span>
          </li>
          <li>
            <span class="step-title">Draft Round 1 offer</span>
            <span class="step-detail">Written offer letter. Clean terms, short contingency windows, deposit proportioned to seriousness. Aaron signs; CB delivers through whichever channel the seller side prefers.</span>
          </li>
          <li>
            <span class="step-title">Inspection &amp; diligence window</span>
            <span class="step-detail">Schedule licensed inspection, sewer scope, and any specialty inspections within the first 7 days of contract to leave time for renegotiation if warranted.</span>
          </li>
          <li>
            <span class="step-title">Counter &amp; close</span>
            <span class="step-detail">One disciplined counter informed by the inspection. Attorney-reviewed contract. Cash-to-close wired from the Renasant operating line per Patrick's instructions. Target 30&ndash;60 day close from accepted offer.</span>
          </li>
        </ol>
      </section>

      <!-- DECISION LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title">Decision <span>Log</span></h2>
        <table class="nu-deal-table">
          <thead>
            <tr>
              <th style="width:130px;">Date</th>
              <th style="width:180px;">Stage</th>
              <th>Decision / Note</th>
              <th style="width:120px;">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-04-22</td>
              <td>Intake</td>
              <td>Action item captured from reMarkable. Negotiation brief opened; working file created in Norris Utilities® internal system.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>Valuation</td>
              <td>Three-lane valuation numbers to be filled in before first seller contact.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>Financing</td>
              <td>Call Patrick Lavette at Renasant Bank to confirm envelope &amp; structure.</td>
              <td>Aaron</td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>Offer</td>
              <td>Round 1 offer drafted and signed. Delivered by CB.</td>
              <td>Aaron &middot; CB</td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>Close</td>
              <td>Contract executed, diligence cleared, wire funded, deed recorded.</td>
              <td>Aaron</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- KEY STAKEHOLDERS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Key <span>Stakeholders</span></h2>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3>Aaron C. Norris</h3>
            <p>Buyer &middot; Principal &middot; sole negotiator of record. All offers, counters, and signatures run through Aaron.</p>
            <p><span class="nu-pill blue">Decision Maker</span></p>
          </div>
          <div class="nu-card">
            <h3>Patrick Lavette</h3>
            <p>Renasant Bank &middot; financing contact. Confirms pre-approval envelope and wire instructions at close.</p>
            <p><span class="nu-pill cyan">Lender</span></p>
          </div>
          <div class="nu-card">
            <h3>Caroline Butler (CB)</h3>
            <p>Admin support. Scheduling, document collection, written correspondence. Customer-facing items reviewed by Aaron before sending.</p>
            <p><span class="nu-pill gold">Tier 1 Support</span></p>
          </div>
        </div>
      </section>

      <!-- CONFIDENTIALITY -->
      <section class="nu-section">
        <div class="nu-callout">
          <span class="label">Confidentiality</span>
          <p>
            This document is internal to Norris Utilities® leadership and is not
            shared with the seller, the seller's agent, or any outside party.
            The three-lane valuation numbers, the walk-away price, and the
            financing ceiling are the negotiation &mdash; they stay in this file.
          </p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential &middot; Internal Acquisition Brief &middot; Prepared April 22, 2026
    </div>
  </footer>

</body>
</html>