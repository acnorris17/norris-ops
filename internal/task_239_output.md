<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Plan — Norris Utilities®</title>
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
      --nu-warning-amber: #B45309;
      --nu-success-green: #047857;
      --nu-alert-red: #B91C1C;
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
      font-weight: 900;
      font-size: 3rem;
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
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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

    /* DOC TITLE BANNER */
    .nu-doc-banner {
      background: var(--nu-white);
      padding: 36px 40px 20px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 18px;
      margin-top: 16px;
      font-size: 0.85rem;
      color: #666;
    }
    .nu-doc-meta span strong {
      color: var(--nu-dark-text);
    }

    /* MAIN */
    main {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 32px 60px;
    }

    /* SUMMARY STRIP */
    .nu-summary-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 40px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-stat-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-stat-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-stat-card.amber { border-left-color: var(--nu-warning-amber); }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-stat-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 12px 0 22px;
      border-radius: 2px;
    }

    /* TWO-COL */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    @media (max-width: 760px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    /* DATA TABLE */
    .nu-data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
    }
    .nu-data-table th {
      text-align: left;
      padding: 10px 12px;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-bottom: 2px solid var(--nu-blue);
    }
    .nu-data-table td {
      padding: 11px 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-data-table tr:last-child td { border-bottom: none; }
    .nu-data-table td.label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 38%;
    }
    .nu-data-table td.value-num {
      font-weight: 700;
      color: var(--nu-blue);
      text-align: right;
      font-variant-numeric: tabular-nums;
    }

    /* BADGES */
    .nu-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-badge.priority { background: #FEF2F2; color: var(--nu-alert-red); }
    .nu-badge.action   { background: #ECFDF5; color: var(--nu-success-green); }
    .nu-badge.review   { background: #FFFBEB; color: var(--nu-warning-amber); }
    .nu-badge.info     { background: #EFF6FF; color: var(--nu-blue); }

    /* CHEVRON BADGE (negotiation phases) */
    .nu-phase {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-phase-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }
    .nu-phase-body {
      flex: 1;
    }
    .nu-phase-title {
      display: block;
      font-weight: 900;
      letter-spacing: 0.04em;
    }
    .nu-phase-meta {
      display: block;
      font-weight: 400;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.75);
      margin-top: 2px;
    }

    /* ACTION LIST */
    .nu-action-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-action-list li {
      display: flex;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-action-list li:last-child { border-bottom: none; }
    .nu-action-check {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-action-text {
      flex: 1;
      font-size: 0.95rem;
    }
    .nu-action-text strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }
    .nu-action-text .meta {
      font-size: 0.82rem;
      color: #666;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
      border-left: 4px solid var(--nu-warning-amber);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 22px 0;
      font-size: 0.93rem;
    }
    .nu-callout strong {
      color: var(--nu-warning-amber);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
      display: block;
      margin-bottom: 6px;
    }
    .nu-callout.info {
      background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
      border-left-color: var(--nu-blue);
    }
    .nu-callout.info strong { color: var(--nu-blue); }

    /* PROS / CONS */
    .nu-procon {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 600px) {
      .nu-procon { grid-template-columns: 1fr; }
    }
    .nu-procon-box {
      padding: 18px 20px;
      border-radius: 6px;
    }
    .nu-procon-box.pros {
      background: #ECFDF5;
      border-left: 4px solid var(--nu-success-green);
    }
    .nu-procon-box.cons {
      background: #FEF2F2;
      border-left: 4px solid var(--nu-alert-red);
    }
    .nu-procon-box h4 {
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-procon-box.pros h4 { color: var(--nu-success-green); }
    .nu-procon-box.cons h4 { color: var(--nu-alert-red); }
    .nu-procon-box ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-procon-box li {
      padding: 5px 0 5px 18px;
      position: relative;
      font-size: 0.92rem;
    }
    .nu-procon-box li::before {
      position: absolute;
      left: 0;
      top: 5px;
      font-weight: 900;
    }
    .nu-procon-box.pros li::before { content: '+'; color: var(--nu-success-green); }
    .nu-procon-box.cons li::before { content: '−'; color: var(--nu-alert-red); }

    /* SCRIPT BLOCKS */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin: 14px 0;
      border-radius: 4px;
      font-size: 0.93rem;
      line-height: 1.65;
    }
    .nu-script p + p { margin-top: 10px; }
    .nu-script .speaker {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, #000022 0%, #000044 50%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px 36px;
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
    .nu-footer-fine {
      font-size: 0.74rem;
      color: rgba(255,255,255,0.45);
      margin-top: 18px;
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-doc-title { font-size: 1.55rem; }
      main { padding: 32px 18px 40px; }
      .nu-section { padding: 24px 22px; }
      .nu-phase { clip-path: none; border-radius: 8px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- DOC TITLE -->
  <div class="nu-doc-banner">
    <div class="nu-doc-eyebrow">Acquisition File · Personal Real Estate</div>
    <h1 class="nu-doc-title">4505 Buttewoods Estate — Negotiation Plan</h1>
    <div class="nu-doc-subtitle">7,098 sq ft custom estate · Strategy, walk-away discipline, and offer ladder</div>
    <div class="nu-doc-meta">
      <span><strong>Owner:</strong> Aaron C. Norris</span>
      <span><strong>Status:</strong> Pre-offer / due diligence</span>
      <span><strong>Document Date:</strong> April 21, 2026</span>
      <span><strong>Source:</strong> reMarkable action item</span>
    </div>
  </div>

  <main>

    <!-- SUMMARY STRIP -->
    <section class="nu-summary-strip">
      <div class="nu-stat-card">
        <div class="nu-stat-label">Property Size</div>
        <div class="nu-stat-value">7,098 sq ft</div>
        <div class="nu-stat-sub">Above-grade conditioned</div>
      </div>
      <div class="nu-stat-card cyan">
        <div class="nu-stat-label">Address</div>
        <div class="nu-stat-value" style="font-size:1.05rem; line-height:1.3;">4505 Buttewoods</div>
        <div class="nu-stat-sub">Subject parcel</div>
      </div>
      <div class="nu-stat-card gold">
        <div class="nu-stat-label">Negotiation Phase</div>
        <div class="nu-stat-value" style="font-size:1.05rem; line-height:1.3;">Phase 1 — Discovery</div>
        <div class="nu-stat-sub">Pre-offer intelligence</div>
      </div>
      <div class="nu-stat-card amber">
        <div class="nu-stat-label">Decision Discipline</div>
        <div class="nu-stat-value" style="font-size:1.05rem; line-height:1.3;">Walk-away set</div>
        <div class="nu-stat-sub">No emotional bidding</div>
      </div>
    </section>

    <!-- OBJECTIVE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Objective</span> <span class="rest">— What we are buying and why</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:14px;">Acquire the 7,098 sq ft estate at 4505 Buttewoods at a price that reflects current market reality, condition-adjusted comps, and the carrying-cost risk of a property of this size. The negotiation must protect Norris Utilities® cash position — Aaron is sole sales force and the business is in active growth mode (FlexPro Armor build-out, Skylift PO in delivery cycle, Bay Shore SE territory ramp). No dollar from this purchase should compromise inventory, payroll runway, or the ability to fund the next round of FlexPro Armor production.</p>
      <div class="nu-callout info">
        <strong>Posture</strong>
        We are the disciplined buyer, not the eager buyer. The seller needs to feel that we like the property — and that we will walk if the price, terms, or disclosures don't match what we believe is fair. Quiet leverage beats loud leverage every time.
      </div>
    </section>

    <!-- DUE DILIGENCE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Discovery</span> <span class="rest">— Information to gather BEFORE making any offer</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-two-col">
        <div>
          <h3 style="font-size:1rem; font-weight:900; color:var(--nu-dark-text); margin-bottom:12px; letter-spacing:0.04em; text-transform:uppercase;">Title &amp; Ownership</h3>
          <ul class="nu-action-list">
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Pull current deed of record</strong>
                <span class="meta">Probate / county recorder. Confirm vesting, joint tenancy, any life estate.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Title commitment ordered</strong>
                <span class="meta">Look for liens, mortgage payoff, mechanic's liens, easements.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Property tax history — 5 years</strong>
                <span class="meta">Spot millage changes, exemption status, assessed-vs-market spread.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>HOA / covenant review</strong>
                <span class="meta">Restrictions on guest housing, vehicles, accessory structures.</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:1rem; font-weight:900; color:var(--nu-dark-text); margin-bottom:12px; letter-spacing:0.04em; text-transform:uppercase;">Condition &amp; Carry</h3>
          <ul class="nu-action-list">
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Independent inspection (no seller referral)</strong>
                <span class="meta">7,098 sq ft = roof, multiple HVAC zones, foundation, drainage all critical line items.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>HVAC scope &amp; age — every unit</strong>
                <span class="meta">A house this size typically has 3–5 systems. Replacement cost is 5-figure per unit.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Utility cost history — 24 months</strong>
                <span class="meta">Power, gas, water. Real monthly carry = mortgage + tax + insurance + utilities + lawn.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Insurance quote BEFORE offer is binding</strong>
                <span class="meta">Replacement cost on a 7,098 sq ft custom is significant — premium drives true cost-of-ownership.</span>
              </div>
            </li>
            <li>
              <div class="nu-action-check"></div>
              <div class="nu-action-text">
                <strong>Survey on file vs. boundary verification</strong>
                <span class="meta">Confirm acreage matches MLS. Encroachments are deal-changers.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- COMPS & VALUATION -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">— Anchor the number on facts, not seller hopes</span></h2>
      <div class="nu-section-rule"></div>
      <p style="margin-bottom:18px;">Before any number leaves our mouth, we will have three independently-built valuations. The negotiation walks down from the seller's ask toward our justified number — never the reverse.</p>

      <table class="nu-data-table">
        <thead>
          <tr>
            <th>Valuation Anchor</th>
            <th>Method</th>
            <th>Owner</th>
            <th style="text-align:right;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label">Market comps — sold last 6 months</td>
            <td>Same submarket, 5,500–8,500 sq ft, adjusted $/sq ft</td>
            <td>Buyer's agent</td>
            <td style="text-align:right;"><span class="nu-badge action">To pull</span></td>
          </tr>
          <tr>
            <td class="label">Active &amp; pending comps</td>
            <td>Where the market is heading, not where it was</td>
            <td>Buyer's agent</td>
            <td style="text-align:right;"><span class="nu-badge action">To pull</span></td>
          </tr>
          <tr>
            <td class="label">Days on market history (this listing)</td>
            <td>Original list, all reductions, date of every change</td>
            <td>Aaron</td>
            <td style="text-align:right;"><span class="nu-badge review">In progress</span></td>
          </tr>
          <tr>
            <td class="label">Replacement cost (insurance proxy)</td>
            <td>$/sq ft new construction × 7,098 — depreciation</td>
            <td>Insurance carrier</td>
            <td style="text-align:right;"><span class="nu-badge info">Pending quote</span></td>
          </tr>
          <tr>
            <td class="label">County assessor value</td>
            <td>Assessed × local market adjustment ratio</td>
            <td>Aaron</td>
            <td style="text-align:right;"><span class="nu-badge action">To pull</span></td>
          </tr>
          <tr>
            <td class="label">All-in carry cost (annual)</td>
            <td>P&amp;I + tax + insurance + utilities + maintenance reserve</td>
            <td>Aaron</td>
            <td style="text-align:right;"><span class="nu-badge action">To model</span></td>
          </tr>
        </tbody>
      </table>

      <div class="nu-callout">
        <strong>Walk-away rule</strong>
        Set the maximum number BEFORE the first conversation with the seller's agent. Write it down. Tell Caroline. If we cross it during negotiation, we walk — even if the property "feels" right. The walk-away is the only thing standing between a good deal and an emotional decision.
      </div>
    </section>

    <!-- PROS / CONS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">— Honest pros and cons before we commit</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-procon">
        <div class="nu-procon-box pros">
          <h4>Reasons to pursue</h4>
          <ul>
            <li>Estate-class properties at the right price create generational wealth — A Legacy of Commitment®</li>
            <li>7,098 sq ft supports family + home office + entertaining customers (Aaron hosts Boss / Samson / Skylift)</li>
            <li>Birmingham metro estate inventory at this size is thin — scarcity supports long-term value</li>
            <li>Custom builds rarely come back to market; missed window may not return for years</li>
            <li>Tax advantages of converting personal residence vs. investment carry differently — model both</li>
          </ul>
        </div>
        <div class="nu-procon-box cons">
          <h4>Reasons to walk</h4>
          <ul>
            <li>Carry cost on 7,098 sq ft is non-trivial — taxes, insurance, utilities, upkeep compound monthly</li>
            <li>Capital tied up here cannot fund FlexPro Armor inventory, Skylift float, or Samson Rope position</li>
            <li>Custom estates often have one-of-a-kind systems — repairs are bespoke and expensive</li>
            <li>Resale market for 7,000+ sq ft homes is thinner than 3,000–5,000 sq ft — exit liquidity matters</li>
            <li>Aaron works from 4 AM, travels for sales — does the lifestyle actually match a house this size?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- NEGOTIATION PHASES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Phases</span> <span class="rest">— The negotiation in five disciplined moves</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-phase">
        <span class="nu-phase-num">1</span>
        <div class="nu-phase-body">
          <span class="nu-phase-title">DISCOVERY — Listen more than talk</span>
          <span class="nu-phase-meta">Find out why the seller is selling, how long it has been listed, and what they truly need.</span>
        </div>
      </div>

      <div class="nu-phase">
        <span class="nu-phase-num">2</span>
        <div class="nu-phase-body">
          <span class="nu-phase-title">VALUATION — Build three independent numbers</span>
          <span class="nu-phase-meta">Comps, replacement cost, all-in carry. The honest middle is our anchor.</span>
        </div>
      </div>

      <div class="nu-phase">
        <span class="nu-phase-num">3</span>
        <div class="nu-phase-body">
          <span class="nu-phase-title">OPENING OFFER — Justified, not insulting</span>
          <span class="nu-phase-meta">First offer below our walk-away with documented rationale. Always in writing.</span>
        </div>
      </div>

      <div class="nu-phase">
        <span class="nu-phase-num">4</span>
        <div class="nu-phase-body">
          <span class="nu-phase-title">COUNTER MANAGEMENT — Move on terms before price</span>
          <span class="nu-phase-meta">Closing date, repair credits, retained items, possession — concede here before raising the number.</span>
        </div>
      </div>

      <div class="nu-phase">
        <span class="nu-phase-num">5</span>
        <div class="nu-phase-body">
          <span class="nu-phase-title">CLOSE OR WALK — No third "best and final"</span>
          <span class="nu-phase-meta">If we hit the walk-away with no agreement, we walk and mean it. Discipline preserves leverage for the next deal.</span>
        </div>
      </div>
    </section>

    <!-- OFFER LADDER -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">— Ladder of moves and what each one signals</span></h2>
      <div class="nu-section-rule"></div>

      <table class="nu-data-table">
        <thead>
          <tr>
            <th>Round</th>
            <th>Move</th>
            <th>Signal to seller</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label">Opening</td>
            <td>Justified offer with comp packet attached</td>
            <td>"Serious buyer, has done the work, knows the market"</td>
            <td>Seller may reject without counter — acceptable</td>
          </tr>
          <tr>
            <td class="label">Counter 1</td>
            <td>Hold price, improve terms (close date, possession)</td>
            <td>"Number is firm, willing to be flexible elsewhere"</td>
            <td>Seller may push price again — hold the line</td>
          </tr>
          <tr>
            <td class="label">Counter 2</td>
            <td>Small price move + named inspection items</td>
            <td>"We are still here, but the issues are real"</td>
            <td>Looks like price-creep — anchor on inspection findings</td>
          </tr>
          <tr>
            <td class="label">Best &amp; Final</td>
            <td>Final number, 48-hour acceptance window</td>
            <td>"This is the deal. Take it or we walk."</td>
            <td>Must be willing to actually walk for this to work</td>
          </tr>
          <tr>
            <td class="label">Walk</td>
            <td>Polite, written, leave the door open</td>
            <td>"We respect your decision. Here is our number if it changes."</td>
            <td>Sometimes the seller calls back in 30 days</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- SELLER QUESTIONS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Questions</span> <span class="rest">— What to ask the seller's agent (and Aaron's voice for asking)</span></h2>
      <div class="nu-section-rule"></div>

      <div class="nu-script">
        <span class="speaker">Discovery — opening call</span>
        <p>"Appreciate you taking the call — the property looks well cared for, and I want to understand the situation before we go any further. Can you tell me a little about why the sellers are moving, and the timeline they're hoping for?"</p>
      </div>

      <div class="nu-script">
        <span class="speaker">Days on market &amp; price history</span>
        <p>"I noticed the listing has been active for a while, and there's been a price adjustment. What's the seller's read on why it hasn't moved at the prior numbers? That helps me bring you a real offer instead of guessing."</p>
      </div>

      <div class="nu-script">
        <span class="speaker">Condition &amp; recent work</span>
        <p>"On a property this size, mechanical systems are the big-ticket items. Can you walk me through the age of the HVAC units, the roof, and any major work the sellers have done in the last five years?"</p>
      </div>

      <div class="nu-script">
        <span class="speaker">Disclosures &amp; known issues</span>
        <p>"Are there any items the sellers have already disclosed that I should know about up front? I'd rather hear it from you than find it during inspection — keeps us efficient."</p>
      </div>

      <div class="nu-script">
        <span class="speaker">Signaling discipline</span>
        <p>"I'm a serious buyer — I'll bring you a fair, written offer with comps backing the number. If we can find the right deal, we'll close clean. If we can't, I'll thank you for your time and you'll never wonder what I'm thinking. That's how I do business."</p>
      </div>
    </section>

    <!-- ACTION ITEMS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">— What happens this week</span></h2>
      <div class="nu-section-rule"></div>
      <ul class="nu-action-list">
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Confirm exact street address &amp; parcel ID</strong>
            <span class="meta">Aaron — pull from county GIS. The reMarkable note reads "Buttewoods" — verify spelling against tax records.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Order MLS history packet (active, sold, pending)</strong>
            <span class="meta">Buyer's agent — same submarket, 5,500–8,500 sq ft, last 6 months sold + all current actives.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Pull deed, tax history, and any recorded liens</strong>
            <span class="meta">Aaron — county recorder. Look for the same kind of probate-instrument detail used on the Compass Bank / McKnight deed pull.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Build the all-in carry-cost model</strong>
            <span class="meta">Aaron — taxes + insurance estimate + utilities + maintenance reserve at 1.5% of value. Decide what monthly burden is acceptable BEFORE talking price.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Set the walk-away number in writing</strong>
            <span class="meta">Aaron — written, dated, shared with Caroline so it cannot be moved in the heat of negotiation.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Schedule discovery call with seller's agent</strong>
            <span class="meta">Aaron — use the discovery script above. Listen first. Take notes. No number floated on this call.</span>
          </div>
        </li>
        <li>
          <div class="nu-action-check"></div>
          <div class="nu-action-text">
            <strong>Cash impact analysis vs. business runway</strong>
            <span class="meta">Aaron — confirm the deal does not pull from FlexPro Armor production capital, Skylift float, or Samson Rope position.</span>
          </div>
        </li>
      </ul>

      <div class="nu-callout info" style="margin-top:24px;">
        <strong>Decision gate</strong>
        Discovery work above completes before any written offer is presented. If any single item comes back red — title cloud, undisclosed major repair, comps that don't support the asking range, or carry cost that pressures the business — the answer is "not at this price, not at this time."
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fine">
      Internal acquisition working document · Not for distribution outside Aaron C. Norris and authorized advisors · Prepared April 21, 2026
    </div>
  </footer>

</body>
</html>