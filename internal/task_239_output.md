<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-success-green: #1E7E34;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOCUMENT RIBBON */
    .doc-ribbon {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 24px 40px;
      text-align: center;
    }
    .doc-kicker {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.4em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.85rem;
      color: #777;
      letter-spacing: 0.02em;
    }

    /* CONTENT */
    .content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 32px 72px;
    }

    /* CONFIDENTIAL BAR */
    .confidential {
      background: linear-gradient(90deg, var(--nu-navy) 0%, #0a1a66 100%);
      color: var(--nu-white);
      padding: 14px 24px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 32px;
      border-left: 4px solid var(--nu-cyan);
    }
    .confidential span { color: var(--nu-cyan); }

    /* SUMMARY GRID */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .summary-card {
      background: var(--nu-white);
      padding: 20px 22px;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-top: 3px solid var(--nu-blue);
    }
    .summary-card:nth-child(2) { border-top-color: var(--nu-cyan); }
    .summary-card:nth-child(3) { border-top-color: var(--nu-accent-gold); }
    .summary-card:nth-child(4) { border-top-color: var(--nu-navy); }
    .summary-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: #888;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .summary-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .summary-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* SECTION */
    .section {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .section-title span { color: var(--nu-blue); }
    .section-subtitle {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 22px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .section p { margin-bottom: 14px; }
    .section p:last-child { margin-bottom: 0; }

    /* CHEVRON BADGES */
    .chevron-list { list-style: none; }
    .chevron-list li {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 400;
      font-size: 0.95rem;
    }
    .chevron-list li strong {
      color: var(--nu-cyan);
      font-weight: 900;
      margin-right: 10px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .two-col h4 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .two-col ul { list-style: none; padding: 0; }
    .two-col li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .two-col li:last-child { border-bottom: none; }
    .two-col li::before {
      content: '●';
      color: var(--nu-cyan);
      position: absolute;
      left: 0;
      font-size: 0.8rem;
      top: 11px;
    }
    .col-strength h4 { color: var(--nu-success-green); }
    .col-strength li::before { color: var(--nu-success-green); }
    .col-risk h4 { color: var(--nu-alert-red); }
    .col-risk li::before { color: var(--nu-alert-red); }

    /* VALUATION TABLE */
    .val-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
    }
    .val-table th, .val-table td {
      padding: 12px 14px;
      text-align: left;
      font-size: 0.92rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .val-table th {
      background: var(--nu-light-gray);
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .val-table tbody tr:hover { background: #fafbff; }
    .val-table .val-num {
      font-weight: 700;
      color: var(--nu-blue);
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .val-table tfoot td {
      font-weight: 900;
      background: linear-gradient(90deg, #eaf4ff 0%, #f6faff 100%);
      border-top: 2px solid var(--nu-blue);
      border-bottom: none;
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
      top: 4px;
      bottom: 4px;
      width: 3px;
      background: linear-gradient(to bottom, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .tl-item {
      position: relative;
      padding-bottom: 20px;
    }
    .tl-item:last-child { padding-bottom: 0; }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .tl-step {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .tl-heading {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 8px;
    }
    .offer-card {
      padding: 22px 18px;
      border-radius: 6px;
      text-align: center;
      border: 2px solid var(--nu-medium-gray);
      background: var(--nu-white);
      transition: transform 0.2s ease;
    }
    .offer-card:hover { transform: translateY(-3px); }
    .offer-card.opening {
      border-color: var(--nu-success-green);
      background: linear-gradient(180deg, #f3fbf5 0%, #ffffff 100%);
    }
    .offer-card.target {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, #eef4ff 0%, #ffffff 100%);
      transform: scale(1.03);
    }
    .offer-card.walk {
      border-color: var(--nu-alert-red);
      background: linear-gradient(180deg, #fdf3f2 0%, #ffffff 100%);
    }
    .offer-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .offer-card.opening .offer-label { color: var(--nu-success-green); }
    .offer-card.target .offer-label { color: var(--nu-blue); }
    .offer-card.walk .offer-label { color: var(--nu-alert-red); }
    .offer-amount {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
      margin-bottom: 6px;
    }
    .offer-desc {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      line-height: 1.4;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(90deg, #fff8e1 0%, #fffdf5 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin-top: 20px;
      font-size: 0.92rem;
    }
    .callout strong {
      display: block;
      color: #8a6d0e;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.78rem;
      margin-bottom: 6px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      columns: 2;
      column-gap: 32px;
    }
    .checklist li {
      padding: 9px 0 9px 30px;
      position: relative;
      font-size: 0.93rem;
      break-inside: avoid;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.8);
      padding: 44px 32px;
      text-align: center;
      font-family: var(--font-primary);
      font-size: 0.95rem;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.9; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-rule {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .doc-title { font-size: 1.4rem; }
      .content-wrap { padding: 32px 18px 48px; }
      .section { padding: 24px 22px; }
      .two-col { grid-template-columns: 1fr; }
      .offer-ladder { grid-template-columns: 1fr; }
      .offer-card.target { transform: none; }
      .checklist { columns: 1; }
      .chevron-list li { clip-path: none; border-radius: 6px; padding: 14px 16px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section { box-shadow: none; border: 1px solid #ddd; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

  <!-- DOC RIBBON -->
  <div class="doc-ribbon">
    <div class="doc-kicker">Estate Acquisition · Negotiation Brief</div>
    <div class="doc-title">4505 Buttewoods &mdash; <span>7,098 sq ft Estate</span></div>
    <div class="doc-meta">Prepared for Aaron C. Norris · Founder &amp; CEO · Brief Dated 2026-04-21</div>
  </div>

  <!-- CONTENT -->
  <div class="content-wrap">

    <div class="confidential">
      <span>Confidential &middot;</span> Internal Strategy Document &middot; Do Not Distribute Outside Norris Utilities®
    </div>

    <!-- SUMMARY GRID -->
    <div class="summary-grid">
      <div class="summary-card">
        <div class="summary-label">Property</div>
        <div class="summary-value">4505 Buttewoods</div>
        <div class="summary-sub">Residential estate &middot; single family</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Interior Size</div>
        <div class="summary-value">7,098 sq ft</div>
        <div class="summary-sub">Luxury tier · above neighborhood median</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Action</div>
        <div class="summary-value">Negotiate Purchase</div>
        <div class="summary-sub">Open dialogue &middot; build offer strategy</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Owner</div>
        <div class="summary-value">Aaron C. Norris</div>
        <div class="summary-sub">Personal acquisition &middot; not company</div>
      </div>
    </div>

    <!-- OBJECTIVE -->
    <section class="section">
      <h2 class="section-title"><span>01.</span> Objective &amp; Framing</h2>
      <p class="section-subtitle">What success looks like before the first conversation</p>
      <p>Acquire the 7,098 sq ft estate at <strong>4505 Buttewoods</strong> on terms that reflect true market comparables, account for deferred maintenance, and preserve cash flow flexibility for ongoing Norris Utilities® growth. The negotiation is a <strong>long-horizon play</strong>: winning means walking away with either the property at a defensible price, or a clean relationship preserved for a future attempt.</p>
      <p>Primary motivation: generational residence with scale for family, hosting, and a professional home office. Secondary motivation: durable asset appreciation in a tight Birmingham luxury submarket. This is a patient acquisition &mdash; not a forced timeline.</p>
    </section>

    <!-- STRENGTH / RISK -->
    <section class="section">
      <h2 class="section-title"><span>02.</span> Position Assessment</h2>
      <p class="section-subtitle">What leverage Aaron walks in with, and where he is exposed</p>
      <div class="two-col">
        <div class="col-strength">
          <h4>Negotiating Strengths</h4>
          <ul>
            <li>Cash-credible buyer &mdash; real operating business, not a speculator</li>
            <li>No contingency on selling another residence</li>
            <li>Flexibility on closing timeline (can accommodate seller)</li>
            <li>Professional reputation &mdash; 3rd-generation local roots</li>
            <li>Direct principal-to-principal option (no agent friction)</li>
            <li>Ability to write earnest money check on the spot</li>
          </ul>
        </div>
        <div class="col-risk">
          <h4>Exposure &amp; Risks</h4>
          <ul>
            <li>Luxury comps thin &mdash; hard to anchor price objectively</li>
            <li>Carrying cost of 7,098 sq ft (utilities, insurance, taxes, upkeep)</li>
            <li>Possible deferred maintenance on a larger estate footprint</li>
            <li>Emotional attachment risk &mdash; overpaying if it becomes "the one"</li>
            <li>Opportunity cost vs. NU working capital deployment</li>
            <li>Seller motivation currently unknown &mdash; asymmetric info</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- VALUATION -->
    <section class="section">
      <h2 class="section-title"><span>03.</span> Valuation Framework</h2>
      <p class="section-subtitle">Before offering a number, triangulate from at least three independent methods</p>
      <table class="val-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>What to Pull</th>
            <th style="text-align:right;">Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Comparable Sales</strong></td>
            <td>Last 3 closed sales in same submarket, 5,500&ndash;8,500 sq ft, past 18 months</td>
            <td class="val-num">40%</td>
          </tr>
          <tr>
            <td><strong>Price per Sq Ft</strong></td>
            <td>Submarket median $/sq ft &times; 7,098, adjusted for condition &amp; lot</td>
            <td class="val-num">25%</td>
          </tr>
          <tr>
            <td><strong>Tax Assessment</strong></td>
            <td>Jefferson / Shelby County appraised value &times; local market multiplier</td>
            <td class="val-num">15%</td>
          </tr>
          <tr>
            <td><strong>Replacement Cost</strong></td>
            <td>Land value + construction cost new &minus; depreciation (condition-adjusted)</td>
            <td class="val-num">15%</td>
          </tr>
          <tr>
            <td><strong>Rental Yield Check</strong></td>
            <td>Implied cap rate if rented at luxury market rate (sanity test only)</td>
            <td class="val-num">5%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Weighted Fair Value &mdash; <em>to be computed after data pull</em></td>
            <td class="val-num">100%</td>
          </tr>
        </tfoot>
      </table>
      <div class="callout">
        <strong>Aaron&rsquo;s Rule</strong>
        Do not name a price first. Let the seller or listing anchor the conversation, then pull the number toward the weighted fair value &mdash; not toward what Aaron personally wants it to cost.
      </div>
    </section>

    <!-- OFFER LADDER -->
    <section class="section">
      <h2 class="section-title"><span>04.</span> Offer Ladder</h2>
      <p class="section-subtitle">Three numbers set before the first conversation &mdash; never negotiate without them</p>
      <div class="offer-ladder">
        <div class="offer-card opening">
          <div class="offer-label">Opening</div>
          <div class="offer-amount">~85%</div>
          <div class="offer-desc">of weighted fair value &mdash; justified by specific comps and condition findings, never insulting</div>
        </div>
        <div class="offer-card target">
          <div class="offer-label">Target Close</div>
          <div class="offer-amount">~93%</div>
          <div class="offer-desc">of weighted fair value &mdash; the price Aaron is willing to sign at today with reasonable terms</div>
        </div>
        <div class="offer-card walk">
          <div class="offer-label">Walk-Away</div>
          <div class="offer-amount">~102%</div>
          <div class="offer-desc">of weighted fair value &mdash; the ceiling. Past this number, the deal must lose. Write it on paper.</div>
        </div>
      </div>
      <div class="callout">
        <strong>Discipline</strong>
        The walk-away number is set before the first conversation and is never revised upward in the heat of negotiation. If the seller lands above the ceiling, the answer is &ldquo;We can't get there today&rdquo; &mdash; said calmly, in person, and the relationship stays intact for a future attempt.
      </div>
    </section>

    <!-- LEVERS -->
    <section class="section">
      <h2 class="section-title"><span>05.</span> Negotiation Levers</h2>
      <p class="section-subtitle">Non-price terms that can close a gap without moving the number</p>
      <ul class="chevron-list">
        <li><strong>01</strong> Cash or near-cash financing &mdash; eliminate appraisal and financing contingency risk for seller</li>
        <li><strong>02</strong> Flexible closing date &mdash; accommodate the seller&rsquo;s move-out timeline, not Aaron&rsquo;s</li>
        <li><strong>03</strong> As-is sale with limited inspection contingencies &mdash; simplify the seller&rsquo;s exit</li>
        <li><strong>04</strong> Rent-back option &mdash; let the seller stay 30&ndash;90 days post-close at market rent</li>
        <li><strong>05</strong> Earnest money sized up &mdash; demonstrate seriousness, reduce perceived risk of fall-through</li>
        <li><strong>06</strong> Personal property included or excluded &mdash; use furnishings, appliances, equipment as trade bait</li>
        <li><strong>07</strong> Quiet / off-market transaction &mdash; privacy is often worth real dollars to a luxury seller</li>
      </ul>
    </section>

    <!-- DUE DILIGENCE CHECKLIST -->
    <section class="section">
      <h2 class="section-title"><span>06.</span> Due Diligence Checklist</h2>
      <p class="section-subtitle">Complete before any offer is signed</p>
      <ul class="checklist">
        <li>Full property inspection by licensed inspector</li>
        <li>Roof, HVAC, electrical, plumbing age &amp; condition reports</li>
        <li>Structural engineer review (7,098 sq ft is large enough to warrant)</li>
        <li>Termite / pest certification (Alabama standard)</li>
        <li>Foundation and moisture inspection</li>
        <li>Radon, mold, asbestos testing as appropriate</li>
        <li>Survey &amp; boundary verification (confirm lot dimensions)</li>
        <li>Title search &amp; owner&rsquo;s title insurance quote</li>
        <li>Property tax history &mdash; last 3 years actual paid</li>
        <li>Utility bill history &mdash; 12 months power, gas, water</li>
        <li>HOA documents, covenants, restrictions (if applicable)</li>
        <li>Flood zone &amp; insurance premium quote</li>
        <li>Homeowner&rsquo;s insurance quote (luxury-tier carrier)</li>
        <li>Permit history &amp; unpermitted work check</li>
        <li>School district confirmation</li>
        <li>Zoning &amp; any easements or encumbrances</li>
      </ul>
    </section>

    <!-- TIMELINE -->
    <section class="section">
      <h2 class="section-title"><span>07.</span> Action Timeline</h2>
      <p class="section-subtitle">Sequenced next steps &mdash; each one unlocks the next</p>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-step">Step 01 &middot; Week 1</div>
          <div class="tl-heading">Intelligence Gathering</div>
          <div class="tl-body">Pull comps, tax records, ownership history, days on market (if listed), and neighborhood sales velocity. Identify listing agent, if any, or owner of record.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 02 &middot; Week 1&ndash;2</div>
          <div class="tl-heading">Financing Confirmation</div>
          <div class="tl-body">Confirm capital source &mdash; cash, bridge, or jumbo mortgage pre-approval. Patrick Lavette at Renasant Bank is the first call for personal jumbo financing. Have a signed pre-approval letter in hand before the first offer.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 03 &middot; Week 2</div>
          <div class="tl-heading">Compute the Three Numbers</div>
          <div class="tl-body">Finalize weighted fair value and lock the opening, target, and walk-away prices on paper. Share with one trusted advisor for a gut-check &mdash; never negotiate alone against your own anchoring bias.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 04 &middot; Week 2&ndash;3</div>
          <div class="tl-heading">Initial Contact</div>
          <div class="tl-body">Open dialogue with the seller or listing agent. Tone: genuine interest, patient buyer, asking questions about the home&rsquo;s story. Do not lead with a number. Ask what the seller wants and why &mdash; motivation shapes everything.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 05 &middot; Week 3</div>
          <div class="tl-heading">Property Walk &amp; Inspection Order</div>
          <div class="tl-body">Walk the property in person. Document condition issues with photos. Order professional inspection immediately after a verbal handshake on price range &mdash; not before, not after a signed contract.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 06 &middot; Week 4</div>
          <div class="tl-heading">Written Offer</div>
          <div class="tl-body">Submit opening offer in writing with a short response window (48&ndash;72 hours). Include earnest money, financing terms, inspection period, closing date. Keep language clean and straightforward &mdash; no clever clauses.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 07 &middot; Week 5</div>
          <div class="tl-heading">Counter, Close, or Walk</div>
          <div class="tl-body">Seller will counter, accept, or pass. Move toward target close. If seller&rsquo;s floor exceeds Aaron&rsquo;s ceiling, walk cleanly &mdash; preserve the relationship. Some estates come back to the market in 6&ndash;12 months.</div>
        </div>
        <div class="tl-item">
          <div class="tl-step">Step 08 &middot; Week 6&ndash;8</div>
          <div class="tl-heading">Close &amp; Transition</div>
          <div class="tl-body">Execute due diligence within contractual period. Coordinate title, insurance, utility transfers, and possession date. Maintain written communication trail for the entire process.</div>
        </div>
      </div>
    </section>

    <!-- PRINCIPLES -->
    <section class="section">
      <h2 class="section-title"><span>08.</span> Guiding Principles</h2>
      <p class="section-subtitle">Hold these through every conversation &mdash; especially the hard ones</p>
      <ul class="chevron-list">
        <li><strong>01</strong> Patience wins &mdash; the buyer who can walk always negotiates from the strongest seat</li>
        <li><strong>02</strong> The first number named loses leverage &mdash; let the seller anchor, then work it down</li>
        <li><strong>03</strong> Every concession must earn a concession &mdash; never give something for nothing</li>
        <li><strong>04</strong> Honesty preserves the relationship &mdash; even a failed negotiation can become a future yes</li>
        <li><strong>05</strong> Write everything down &mdash; verbal agreements on a home of this size are worthless</li>
        <li><strong>06</strong> Emotion is a tax &mdash; if Aaron falls in love with it out loud, the price goes up</li>
        <li><strong>07</strong> The ceiling is the ceiling &mdash; set once, respected always, period</li>
      </ul>
    </section>

    <div class="confidential" style="margin-top: 36px; margin-bottom: 0;">
      <span>Next Step &middot;</span> Block a 90-minute session this week to pull comps &amp; lock the three numbers before the first outbound call
    </div>

  </div>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-rule"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210 &middot; Birmingham, Alabama 35242
    </div>
  </footer>

</body>
</html>