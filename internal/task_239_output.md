<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      margin: 0 auto 12px;
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
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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
      background: var(--nu-light-gray);
      padding: 0 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65vw; height: 65vw;
      max-width: 700px; max-height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1160px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* PAGE TITLE */
    .page-intro {
      padding: 48px 0 24px;
    }
    .page-kicker {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title .first { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: #555;
      max-width: 780px;
    }

    /* META STRIP */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin: 28px 0 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 18px 20px;
    }
    .meta-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADER */
    .section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin: 40px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-number {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.1em;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
    }
    .section-title .lead { color: var(--nu-blue); }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.01em;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 6px 0 6px 18px;
      position: relative;
      line-height: 1.55;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .label {
      font-weight: 900;
      color: var(--nu-cyan);
      margin-right: 10px;
      letter-spacing: 0.05em;
    }

    /* DATA TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 18px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td {
      background: #fafbfd;
    }
    .nu-table td.num {
      font-weight: 700;
      color: var(--nu-navy);
      white-space: nowrap;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 0 0 22px 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -25px; top: 5px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .tl-date {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 3px;
    }
    .timeline-item .tl-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-item .tl-body {
      font-size: 0.93rem;
      color: #555;
    }

    /* PRICING CARDS */
    .price-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 10px 0 8px;
    }
    .price-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      position: relative;
    }
    .price-card.center {
      border: 2px solid var(--nu-blue);
      box-shadow: 0 6px 20px rgba(0,0,255,0.12);
      transform: translateY(-4px);
    }
    .price-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .price-value {
      font-weight: 900;
      font-size: 1.9rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .price-note {
      font-size: 0.82rem;
      color: #666;
    }

    /* CTA */
    .cta-strip {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000088 55%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 32px 28px;
      border-radius: 10px;
      margin: 40px 0 16px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 22px;
      align-items: center;
    }
    .cta-strip h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 6px;
      color: var(--nu-white);
    }
    .cta-strip p {
      color: rgba(255,255,255,0.85);
      font-size: 0.95rem;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 30px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.92rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(6,208,255,0.4);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
      .price-grid { grid-template-columns: 1fr; }
      .price-card.center { transform: none; }
      .cta-strip { grid-template-columns: 1fr; text-align: center; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .page-title { font-size: 1.75rem; }
      .nu-wrap { padding: 0 20px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table-wrap { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer, .cta-strip { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- INTRO -->
      <section class="page-intro">
        <span class="page-kicker">Action Item · Executive Brief</span>
        <h1 class="page-title"><span class="first">Estate Acquisition</span> — 4505 Buttewoods</h1>
        <p class="page-subtitle">Negotiation framework, valuation references, and action plan for the 7,098 sq ft residential estate at 4505 Buttewoods. Prepared for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®.</p>
      </section>

      <!-- META -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-label">Property</div>
          <div class="meta-value">4505 Buttewoods</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Gross Area</div>
          <div class="meta-value">7,098 sq ft</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Status</div>
          <div class="meta-value">Pre-Offer · Prep</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Lead</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Review Date</div>
          <div class="meta-value">2026-04-21</div>
        </div>
      </div>

      <!-- SECTION 1 — OBJECTIVE -->
      <div class="section-header">
        <span class="section-number">§ 01</span>
        <h2 class="section-title"><span class="lead">Objective</span> &amp; Deal Thesis</h2>
      </div>
      <div class="two-col">
        <div class="nu-card">
          <h3>Primary Objective</h3>
          <p>Negotiate purchase of 4505 Buttewoods — a 7,098 sq ft estate — at terms that deliver long-term value without disrupting working capital tied to Norris Utilities® operations, inventory commitments, and pending receivables.</p>
          <ul>
            <li>Close price at or below independent appraisal</li>
            <li>Seller concessions toward closing costs where possible</li>
            <li>Rate-lock secured before purchase contract is binding</li>
            <li>Contingencies protect on inspection, appraisal, and financing</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Deal Thesis</h3>
          <p>Buttewoods represents a long-hold personal real-estate position. Square footage (7,098) places it in the upper tier of comparable estates in the submarket, meaning valuation must be disciplined — not anchored to the list price.</p>
          <ul>
            <li>Walk-away discipline: the second-best deal is always available</li>
            <li>No emotional anchoring to list price</li>
            <li>Purchase funds come from personal accounts — not NU® operating cash</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 2 — KEY TERMS -->
      <div class="section-header">
        <span class="section-number">§ 02</span>
        <h2 class="section-title"><span class="lead">Key Terms</span> to Negotiate</h2>
      </div>

      <div class="nu-badge"><span class="label">01 —</span> Purchase price based on appraisal, not list price</div>
      <div class="nu-badge"><span class="label">02 —</span> Earnest money capped; fully refundable during due diligence</div>
      <div class="nu-badge"><span class="label">03 —</span> Inspection contingency: 10 business days minimum</div>
      <div class="nu-badge"><span class="label">04 —</span> Appraisal contingency: right to renegotiate or exit if appraisal &lt; contract</div>
      <div class="nu-badge"><span class="label">05 —</span> Financing contingency with explicit rate ceiling</div>
      <div class="nu-badge"><span class="label">06 —</span> Seller-paid closing cost credit or title policy assignment</div>
      <div class="nu-badge"><span class="label">07 —</span> Flexible closing window to coordinate with seasonal cash flow</div>
      <div class="nu-badge"><span class="label">08 —</span> Personal property inclusions itemized in writing</div>

      <!-- SECTION 3 — DUE DILIGENCE -->
      <div class="section-header">
        <span class="section-number">§ 03</span>
        <h2 class="section-title"><span class="lead">Due Diligence</span> Checklist</h2>
      </div>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 32%;">Item</th>
              <th>What to Verify</th>
              <th style="width: 18%;">Responsible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">Independent Appraisal</td>
              <td>Licensed appraiser, not seller-referred. Pull three sold comps within 0.5 mi &amp; 12 months at matched sq ft.</td>
              <td>Buyer's lender</td>
            </tr>
            <tr>
              <td class="num">Full Home Inspection</td>
              <td>Roof, foundation, HVAC (age &amp; SEER), electrical panel, plumbing, water heater, crawl/attic moisture.</td>
              <td>Licensed inspector</td>
            </tr>
            <tr>
              <td class="num">Termite / WDI Letter</td>
              <td>Alabama WDI report; active infestation, prior treatment history, transferable bond.</td>
              <td>Pest contractor</td>
            </tr>
            <tr>
              <td class="num">Survey &amp; Plat</td>
              <td>Boundary survey, easements, encroachments, setback compliance. Compare to tax parcel.</td>
              <td>Surveyor</td>
            </tr>
            <tr>
              <td class="num">Title Search</td>
              <td>Chain of title, outstanding liens, HOA covenants &amp; restrictions, unpaid assessments.</td>
              <td>Title attorney</td>
            </tr>
            <tr>
              <td class="num">Property Tax History</td>
              <td>Last 3 years tax bills, upcoming reassessment, homestead exemption status.</td>
              <td>Buyer</td>
            </tr>
            <tr>
              <td class="num">Insurance Quote</td>
              <td>Bind quote before removing financing contingency. Confirm no flood zone exposure.</td>
              <td>Insurance broker</td>
            </tr>
            <tr>
              <td class="num">Utilities &amp; Services</td>
              <td>12 months of electric, gas, water bills. Internet provider availability.</td>
              <td>Seller disclosure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 4 — OFFER STRATEGY -->
      <div class="section-header">
        <span class="section-number">§ 04</span>
        <h2 class="section-title"><span class="lead">Offer Strategy</span> — Three Price Points</h2>
      </div>
      <div class="price-grid">
        <div class="price-card">
          <div class="price-label">Opening Offer</div>
          <div class="price-value">92% of List</div>
          <div class="price-note">Leaves negotiation room. Anchored to 12-month comps at $/sq ft.</div>
        </div>
        <div class="price-card center">
          <div class="price-label">Target Price</div>
          <div class="price-value">96% of List</div>
          <div class="price-note">Most likely landing zone after one round of counters. Appraisal must support.</div>
        </div>
        <div class="price-card">
          <div class="price-label">Walk-Away</div>
          <div class="price-value">98% of List</div>
          <div class="price-note">Above this, market has better alternatives. No emotional premium paid.</div>
        </div>
      </div>

      <div class="two-col" style="margin-top: 20px;">
        <div class="nu-card">
          <h3>Leverage Points</h3>
          <ul>
            <li>Days on market — each week past day 30 strengthens buyer position</li>
            <li>Prior price reductions already printed on the listing</li>
            <li>Any inspection items: convert defects into dollar concessions</li>
            <li>Cash-capable posture (even with financing) signals deal certainty</li>
            <li>Flexible closing date matched to the seller's next move</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Seller Concession Priorities</h3>
          <ul>
            <li>Price reduction (ranks first — drops basis and future tax assessment)</li>
            <li>Closing cost credit (ranks second — preserves appraisal comp integrity)</li>
            <li>Rate buy-down (ranks third — cash-flow benefit, not equity)</li>
            <li>Home warranty (modest, but useful on a 7,098 sq ft footprint)</li>
            <li>Repair escrow for deferred maintenance uncovered at inspection</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 5 — TIMELINE -->
      <div class="section-header">
        <span class="section-number">§ 05</span>
        <h2 class="section-title"><span class="lead">Negotiation</span> Timeline</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="tl-date">Week 1 — Preparation</div>
          <div class="tl-title">Comps, Financing Pre-Approval, Inspector Line-Up</div>
          <div class="tl-body">Pull three hard comps, obtain written pre-approval letter, schedule inspection and appraisal contacts, confirm source of funds for earnest money.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">Week 2 — Opening Offer</div>
          <div class="tl-title">Submit Written Offer at 92% of List</div>
          <div class="tl-body">Offer includes all contingencies, 10-day inspection window, appraisal gap capped, earnest money held in title attorney's escrow — not seller's agent.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">Week 2–3 — Counter Cycle</div>
          <div class="tl-title">Receive, Evaluate, Respond</div>
          <div class="tl-body">Target one or two rounds of counters. Each counter moves toward the target price or collects seller concessions of equivalent value. Walk if counter lands above 98%.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">Week 3–4 — Under Contract</div>
          <div class="tl-title">Due Diligence &amp; Inspections</div>
          <div class="tl-body">Full home inspection, termite, survey, title search. Re-negotiate on any material defects. Keep all contingencies alive until resolution documented in writing.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">Week 5–6 — Appraisal &amp; Underwriting</div>
          <div class="tl-title">Lock Rate, Finalize Loan</div>
          <div class="tl-body">Rate lock at application. If appraisal comes in low, exercise appraisal contingency to renegotiate or walk. Clear-to-close before removing financing contingency.</div>
        </div>
        <div class="timeline-item">
          <div class="tl-date">Week 7–8 — Close</div>
          <div class="tl-title">Final Walk-Through &amp; Settlement</div>
          <div class="tl-body">Final walk-through within 48 hours of closing. Wire funds per title attorney's written wire instructions only — verified by phone. Record deed. Update insurance.</div>
        </div>
      </div>

      <!-- SECTION 6 — RISK REGISTER -->
      <div class="section-header">
        <span class="section-number">§ 06</span>
        <h2 class="section-title"><span class="lead">Risk</span> Register</h2>
      </div>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 26%;">Risk</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">Appraisal Gap</td>
              <td>Appraisal contingency with right to renegotiate. Cap appraisal gap coverage to a defined dollar figure, not "any amount."</td>
            </tr>
            <tr>
              <td class="num">Hidden Defects</td>
              <td>Independent inspection. Budget 3–5% of purchase price as deferred-maintenance reserve for Year 1.</td>
            </tr>
            <tr>
              <td class="num">Title Defects</td>
              <td>Owner's title insurance policy. Use a title attorney, not a title-only company. Review exception schedule before closing.</td>
            </tr>
            <tr>
              <td class="num">Interest Rate Drift</td>
              <td>Rate lock at application. Shorter lock if market is falling, longer lock if market is rising. Do not float into closing.</td>
            </tr>
            <tr>
              <td class="num">HOA Assessment</td>
              <td>Request HOA resale package. Read minutes for pending special assessments. Confirm reserve study is funded.</td>
            </tr>
            <tr>
              <td class="num">Cash Flow Conflict with NU®</td>
              <td>Fund purchase from personal accounts only. Do not draw on Norris Utilities® operating cash, inventory capital, or vendor prepay balances.</td>
            </tr>
            <tr>
              <td class="num">Wire Fraud</td>
              <td>Verbally verify wire instructions with title attorney on a number pulled independently — never one from an email.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 7 — NEXT ACTIONS -->
      <div class="section-header">
        <span class="section-number">§ 07</span>
        <h2 class="section-title"><span class="lead">Next</span> Actions (This Week)</h2>
      </div>
      <div class="two-col">
        <div class="nu-card">
          <h3>Aaron — Owner Actions</h3>
          <ul>
            <li>Confirm source of funds for earnest money &amp; down payment</li>
            <li>Request comps report from buyer's agent — three sold comps, 0.5 mi, last 12 months</li>
            <li>Re-pull lender pre-approval letter with updated dollar ceiling</li>
            <li>Draft proposed opening-offer terms for attorney review</li>
            <li>Select title attorney (not seller's referral)</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Support — Caroline Butler</h3>
          <ul>
            <li>Organize file: appraisal, inspection report, title docs in one folder</li>
            <li>Calendar key contingency expiration dates as hard reminders</li>
            <li>Track all seller-side correspondence in single thread</li>
            <li>Confirm insurance quote bound before financing contingency removal</li>
            <li>Flag any document requiring Aaron's signature for Tier 1 review</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-strip">
        <div>
          <h3>Ready to move on Buttewoods?</h3>
          <p>When comps, pre-approval, and attorney are in place, the opening offer can be drafted in under 48 hours.</p>
        </div>
        <a href="tel:2055001343" class="nu-btn-primary">Call 205-500-1343</a>
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
  </footer>

</body>
</html>