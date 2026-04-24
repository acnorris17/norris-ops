<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Brief — 4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-success: #0a7f3f;
      --nu-warn: #b8860b;
      --nu-danger: #c41e3a;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 70px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 90px);
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
      margin: 0 auto 18px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 20px;
      display: inline-block;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 2px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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

    /* GHOST PHOENIX WATERMARK */
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
      width: 65%;
      height: 600px;
      background-image: radial-gradient(ellipse, rgba(0,0,255,0.05) 0%, transparent 70%);
      opacity: 0.07;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-doc-title span.accent { color: var(--nu-blue); }
    .nu-doc-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 28px;
    }

    /* META STRIP */
    .nu-meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      padding: 16px 20px;
    }
    .nu-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTIONS */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    p { margin-bottom: 14px; }

    /* PROPERTY FACT GRID */
    .nu-prop-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .nu-prop-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-prop-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .nu-prop-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-prop-sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
      font-weight: 400;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #f7fbff 0%, #eff6ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      margin: 18px 0 22px;
      border-radius: 4px;
    }
    .nu-callout h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-callout.warn {
      background: linear-gradient(135deg, #fffaf0 0%, #fff5e0 100%);
      border-left-color: var(--nu-warn);
    }
    .nu-callout.warn h4 { color: var(--nu-warn); }

    /* TABLES */
    .nu-table-wrap { overflow-x: auto; margin-bottom: 16px; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background: var(--nu-white);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    table.nu-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:nth-child(even) td { background: #fafafc; }
    table.nu-table tr:last-child td { border-bottom: none; }
    table.nu-table td.num { font-variant-numeric: tabular-nums; font-weight: 700; text-align: right; }

    /* TACTIC LIST */
    .nu-tactics {
      counter-reset: tactic;
      list-style: none;
    }
    .nu-tactics li {
      counter-increment: tactic;
      position: relative;
      padding: 14px 18px 14px 64px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
    }
    .nu-tactics li::before {
      content: counter(tactic, decimal-leading-zero);
      position: absolute;
      left: 18px;
      top: 14px;
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      letter-spacing: 0.02em;
    }
    .nu-tactics li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
      display: block;
      margin-bottom: 2px;
    }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 18px;
    }
    .nu-ladder-rung {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px;
      text-align: center;
      position: relative;
    }
    .nu-ladder-rung.mid {
      border-color: var(--nu-blue);
      box-shadow: 0 4px 18px rgba(0,0,255,0.12);
      transform: translateY(-6px);
    }
    .nu-ladder-rung .tier {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .nu-ladder-rung.mid .tier { color: var(--nu-blue); }
    .nu-ladder-rung .price {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-ladder-rung .note {
      font-size: 0.82rem;
      color: #666;
      margin-top: 8px;
    }

    /* CHECKLIST */
    .nu-check {
      list-style: none;
      padding: 0;
    }
    .nu-check li {
      padding: 8px 0 8px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-check li:last-child { border-bottom: none; }
    .nu-check li::before {
      content: '☐';
      position: absolute;
      left: 0;
      top: 6px;
      color: var(--nu-blue);
      font-size: 1.2rem;
      font-weight: 700;
    }

    /* RISK GRID */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .nu-risk {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-danger);
      padding: 16px 18px;
      border-radius: 4px;
    }
    .nu-risk.mitigation { border-top-color: var(--nu-success); }
    .nu-risk h5 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-risk p { font-size: 0.9rem; margin-bottom: 0; }

    /* BADGES */
    .nu-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .b-priority { background: var(--nu-blue); color: var(--nu-white); }
    .b-open { background: var(--nu-warn); color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, #000033 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-ladder-rung, .nu-prop-card, .nu-risk, table.nu-table {
        box-shadow: none;
        break-inside: avoid;
      }
      .nu-section { break-inside: avoid; }
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-doc-title { font-size: 1.7rem; }
      .nu-ladder { grid-template-columns: 1fr; }
      .nu-ladder-rung.mid { transform: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Negotiation Brief — Confidential</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <h1 class="nu-doc-title">
        Estate Acquisition: <span class="accent">4505 Buttewoods</span><br>
        Negotiation Strategy &amp; Offer Framework
      </h1>
      <p class="nu-doc-subtitle">
        7,098 sq ft private residence — acquisition plan for Aaron C. Norris, Founder &amp; CEO, Norris Utilities®
      </p>

      <!-- META STRIP -->
      <div class="nu-meta-strip">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Prepared For</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Prepared</div>
          <div class="nu-meta-value">April 24, 2026</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Action Item</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value"><span class="nu-badge b-open">Open</span> <span class="nu-badge b-priority">Priority</span></div>
        </div>
      </div>

      <!-- SECTION 1 — TARGET PROPERTY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Property</span></h2>
        <div class="nu-prop-grid">
          <div class="nu-prop-card">
            <div class="nu-prop-label">Address</div>
            <div class="nu-prop-value">4505 Buttewoods</div>
            <div class="nu-prop-sub">Private estate residence</div>
          </div>
          <div class="nu-prop-card">
            <div class="nu-prop-label">Interior Square Footage</div>
            <div class="nu-prop-value">7,098 sq ft</div>
            <div class="nu-prop-sub">Per current listing</div>
          </div>
          <div class="nu-prop-card">
            <div class="nu-prop-label">Property Class</div>
            <div class="nu-prop-value">Single-Family Estate</div>
            <div class="nu-prop-sub">Owner-occupied target</div>
          </div>
          <div class="nu-prop-card">
            <div class="nu-prop-label">Acquisition Vehicle</div>
            <div class="nu-prop-value">Personal / Trust — TBD with counsel</div>
            <div class="nu-prop-sub">Not a Norris Utilities®, LLC asset</div>
          </div>
        </div>
        <div class="nu-callout warn">
          <h4>Data Confirmations Required Before Offer</h4>
          <p>Lot size, year built, most recent tax-assessed value, prior list/sold history (on/off-market cycles), HOA status, and any pending permits or open code items. These fields inform the offer ladder in Section 4. Do not submit written offer until confirmed.</p>
        </div>
      </section>

      <!-- SECTION 2 — OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objective</span></h2>
        <p>Acquire 4505 Buttewoods at a fair, defensible price — with closing terms that protect liquidity and preserve the capital plan for Norris Utilities®. The goal is not to "win" the negotiation; it is to close the right house at the right number, with documentation tight enough to survive lender and counsel review.</p>
        <p>Aaron is the sole decision-maker. Caroline Butler (CB) does not handle personal real-estate correspondence. All communications routed through acnorris@norrisutilities.com or personal counsel only.</p>
      </section>

      <!-- SECTION 3 — PRE-OFFER CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Due Diligence Checklist</span></h2>
        <ul class="nu-check">
          <li>Pull last 5 years of tax-assessed values and any homestead status</li>
          <li>Confirm 7,098 sq ft figure against county record vs. listing (interior vs. gross)</li>
          <li>Request seller disclosure; reconcile against prior rental/for-sale listing history for discrepancies</li>
          <li>Order preliminary title / encumbrance check — liens, easements, utility rights-of-way</li>
          <li>Comparable sales: 3–5 closed comps within 12 months, 6,000+ sq ft, same submarket</li>
          <li>Days-on-market history: original list date, any price reductions, withdrawals</li>
          <li>Pre-inspection scope: roof age, HVAC count/age, foundation, electrical service size</li>
          <li>Financing pre-approval letter in hand (or proof-of-funds if cash)</li>
          <li>Attorney engaged; wire-fraud protocol confirmed with title company</li>
          <li>Insurance quote pulled — wind/hail and water-damage carriers particularly</li>
        </ul>
      </section>

      <!-- SECTION 4 — OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder — Three Rungs</span></h2>
        <p>Set these three numbers before opening talks. Do not improvise at the table. The middle rung is the anchor; the low rung is the opener; the high rung is the walk-away ceiling.</p>
        <div class="nu-ladder">
          <div class="nu-ladder-rung">
            <div class="tier">Opening Offer</div>
            <div class="price">−8% to −12%</div>
            <div class="note">Off confirmed comp-adjusted value. Leaves negotiating room without insulting the seller.</div>
          </div>
          <div class="nu-ladder-rung mid">
            <div class="tier">Target Close</div>
            <div class="price">Fair Value</div>
            <div class="note">Comp-adjusted number. Where Aaron expects to land after one or two counters.</div>
          </div>
          <div class="nu-ladder-rung">
            <div class="tier">Walk-Away Ceiling</div>
            <div class="price">+2% to +3%</div>
            <div class="note">Hard stop. Above this, the deal does not pencil against the capital plan — walk.</div>
          </div>
        </div>
        <div class="nu-callout">
          <h4>Anchor on Terms, Not Just Price</h4>
          <p>On a 7,000+ sq ft estate, closing costs, repair credits, and possession timing often move more real dollars than the headline price. A seller fixated on list price may concede $25K in repair credits or a 60-day rent-back without flinching. Sequence concessions accordingly.</p>
        </div>
      </section>

      <!-- SECTION 5 — TACTICS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Tactics</span></h2>
        <ol class="nu-tactics">
          <li>
            <strong>Open in writing, not in person.</strong>
            First offer travels through counsel or the buyer's agent in a clean written package — price, earnest money, inspection window, financing contingency, closing date. Verbal softens the anchor.
          </li>
          <li>
            <strong>Price the house, not the listing.</strong>
            Counter with the comp sheet, not with emotion. "Three closed comps in the last nine months at $X — this is where the market is" beats any aesthetic argument.
          </li>
          <li>
            <strong>Use the disclosure discrepancy.</strong>
            If the rental-versus-for-sale disclosure gap (flagged separately in Task 288) reveals deferred maintenance or undisclosed issues, that becomes a credit at closing, not a reason to walk.
          </li>
          <li>
            <strong>Earnest money calibrated, not maximal.</strong>
            Enough to show seriousness (1%–2% of price), not so much it's punitive if the deal fails inspection. Hold back the rest for closing.
          </li>
          <li>
            <strong>Tight inspection window, real teeth.</strong>
            10 business days. Specify structural, roof, HVAC, electrical, and moisture — if findings exceed a defined credit threshold, reopen price or exit cleanly.
          </li>
          <li>
            <strong>Financing contingency stays in.</strong>
            Even with strong pre-approval, do not waive the financing contingency on a property this size. Appraisal risk is real above $1M.
          </li>
          <li>
            <strong>Silence after the counter.</strong>
            After each counter is sent, stop talking. Silence pressures the seller more than any follow-up message. Resist the urge to "just check in."
          </li>
          <li>
            <strong>Walk credibly, once.</strong>
            If the ceiling is breached, walk — in writing, polite, final. Sellers who refuse a fair number often re-engage within 14 days once the market confirms the price.
          </li>
        </ol>
      </section>

      <!-- SECTION 6 — TERMS SHEET -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Proposed</span> <span class="rest">Terms Sheet</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Term</th>
                <th>Proposed Position</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Earnest Money</td>
                <td>1.5% of accepted price</td>
                <td>Serious, not punitive. Refundable within inspection &amp; financing periods.</td>
              </tr>
              <tr>
                <td>Inspection Period</td>
                <td>10 business days</td>
                <td>Sufficient for structural, roof, HVAC, electrical, moisture, and chimney.</td>
              </tr>
              <tr>
                <td>Financing Contingency</td>
                <td>30 days</td>
                <td>Preserves appraisal protection on a 7,098 sq ft property.</td>
              </tr>
              <tr>
                <td>Appraisal Gap</td>
                <td>Capped at 2%, seller splits above</td>
                <td>Shows good faith without assuming unlimited risk.</td>
              </tr>
              <tr>
                <td>Closing Date</td>
                <td>45 days from acceptance</td>
                <td>Allows clean lender process and title review.</td>
              </tr>
              <tr>
                <td>Possession</td>
                <td>At closing, or 7-day rent-back at seller's cost</td>
                <td>Flexibility for seller without Aaron paying to wait on his own house.</td>
              </tr>
              <tr>
                <td>Repairs</td>
                <td>As-is with right to credit for material findings</td>
                <td>Cleaner than negotiating individual repair line items.</td>
              </tr>
              <tr>
                <td>Title &amp; Survey</td>
                <td>Buyer's choice of title company</td>
                <td>Aaron controls escrow and wire-fraud protocol.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 7 — RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register &amp; Mitigations</span></h2>
        <div class="nu-risk-grid">
          <div class="nu-risk">
            <h5>Appraisal Shortfall</h5>
            <p>Property appraises below contract price. Mitigated by capped appraisal gap and ability to renegotiate or exit via financing contingency.</p>
          </div>
          <div class="nu-risk">
            <h5>Disclosure Discrepancy</h5>
            <p>Prior rental-versus-sale listings show inconsistent square footage, condition, or amenities. Resolve via written seller clarification before inspection.</p>
          </div>
          <div class="nu-risk">
            <h5>Deferred Maintenance</h5>
            <p>Roof, HVAC, or foundation issues surface during inspection. Mitigated by as-is-with-credits structure and defined credit threshold.</p>
          </div>
          <div class="nu-risk">
            <h5>Title Defects</h5>
            <p>Liens, unrecorded easements, or utility rights-of-way. Mitigated by buyer-selected title company and full title commitment review by counsel.</p>
          </div>
          <div class="nu-risk">
            <h5>Capital Timing</h5>
            <p>Personal liquidity tightens during an active Q2 for Norris Utilities®. Mitigated by confirming financing pre-approval before offer and 45-day close.</p>
          </div>
          <div class="nu-risk mitigation">
            <h5>Wire Fraud</h5>
            <p>Mitigated by verified phone confirmation of wire instructions with title officer, before any funds move. No wires based on emailed instructions alone.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 8 — NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Steps — 10 Days</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Action</th>
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="num">Day 1</td>
                <td>Engage buyer's counsel; pull county record for 4505 Buttewoods</td>
                <td>Aaron</td>
              </tr>
              <tr>
                <td class="num">Day 2</td>
                <td>Order preliminary title search; request seller disclosure</td>
                <td>Counsel</td>
              </tr>
              <tr>
                <td class="num">Day 3</td>
                <td>Pull comparable-sales sheet (3–5 closed, 12-month window, 6,000+ sq ft)</td>
                <td>Aaron / Agent</td>
              </tr>
              <tr>
                <td class="num">Day 4</td>
                <td>Confirm financing pre-approval or proof-of-funds package</td>
                <td>Aaron</td>
              </tr>
              <tr>
                <td class="num">Day 5</td>
                <td>Finalize offer ladder — opening, target, walk-away — on paper</td>
                <td>Aaron</td>
              </tr>
              <tr>
                <td class="num">Day 6</td>
                <td>Submit written offer with terms sheet attached</td>
                <td>Counsel</td>
              </tr>
              <tr>
                <td class="num">Day 7–8</td>
                <td>Silent window — no follow-up messaging. Let the offer breathe.</td>
                <td>Aaron</td>
              </tr>
              <tr>
                <td class="num">Day 9</td>
                <td>Evaluate seller counter against ladder; respond in writing only</td>
                <td>Aaron / Counsel</td>
              </tr>
              <tr>
                <td class="num">Day 10</td>
                <td>Either binding contract signed or walk-away letter issued — no third round without ceiling review</td>
                <td>Aaron</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 9 — DECISION RULE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Rule</span></h2>
        <div class="nu-callout">
          <h4>Walk-Away Is a Feature, Not a Failure</h4>
          <p>The walk-away ceiling in Section 4 is the single most important number in this document. If the seller will not meet Aaron at or below that ceiling, the correct answer is to leave — cleanly, politely, and in writing — and come back to a new property or the same property at a later date. Stretching past the ceiling to "save the deal" is how buyers end up with the wrong house at the wrong price. Do not do it.</p>
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
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
  </footer>

</body>
</html>