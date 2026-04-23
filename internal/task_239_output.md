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
      --nu-success: #0a8f4a;
      --nu-warning: #d97706;
      --nu-danger: #b91c1c;
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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

    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      fill: var(--nu-white);
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    .nu-doc-label {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 20px;
    }

    h1.nu-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    h1.nu-title span.blue { color: var(--nu-blue); }

    .nu-subtitle {
      font-size: 1.15rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
      font-weight: 400;
    }

    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 20px;
      padding: 18px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .nu-meta-item {
      font-size: 0.9rem;
    }
    .nu-meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .nu-section {
      margin-top: 54px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }

    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .nu-stat {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      text-align: center;
    }
    .nu-stat-value {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .nu-stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--nu-body-text);
      font-weight: 700;
    }

    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 14px 14px 14px 44px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 18px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
    }

    .nu-numbered {
      counter-reset: step;
      list-style: none;
      padding: 0;
    }
    .nu-numbered li {
      counter-increment: step;
      position: relative;
      padding: 16px 16px 16px 62px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 12px;
      font-size: 0.98rem;
    }
    .nu-numbered li::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-numbered li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }

    .nu-offer-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      font-size: 0.95rem;
    }
    .nu-offer-table thead {
      background: var(--nu-navy);
    }
    .nu-offer-table thead th {
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-offer-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-offer-table tbody tr:last-child td {
      border-bottom: none;
    }
    .nu-offer-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-offer-table .label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 40%;
    }
    .nu-offer-table .value {
      font-family: var(--font-primary);
      font-weight: 700;
      color: var(--nu-blue);
    }

    .nu-tier-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      margin-top: 12px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-tier {
      padding: 22px 18px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .nu-tier:last-child { border-right: none; }
    .nu-tier-opening { background: #e6f7ff; }
    .nu-tier-target { background: #dbeafe; }
    .nu-tier-walkaway { background: #fee2e2; }
    .nu-tier-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-tier-opening .nu-tier-label { color: #0369a1; }
    .nu-tier-target .nu-tier-label { color: #1d4ed8; }
    .nu-tier-walkaway .nu-tier-label { color: var(--nu-danger); }
    .nu-tier-value {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .nu-tier-desc {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.4;
    }

    .nu-callout {
      background: linear-gradient(135deg, #fef9e7 0%, #fef3c7 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 16px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: #92400e;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.8rem;
      margin-bottom: 6px;
    }
    .nu-callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }
    .nu-chip {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-chip.blue { background: #dbeafe; border-color: #bfdbfe; color: var(--nu-blue); }
    .nu-chip.green { background: #d1fae5; border-color: #a7f3d0; color: var(--nu-success); }
    .nu-chip.gold { background: #fef3c7; border-color: #fde68a; color: #92400e; }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
      margin-top: 80px;
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
      font-size: 0.92rem;
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
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      h1.nu-title { font-size: 1.9rem; }
      .nu-container { padding: 40px 20px; }
      .nu-grid-2, .nu-grid-3, .nu-tier-row { grid-template-columns: 1fr; }
      .nu-tier { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-tier:last-child { border-bottom: none; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-stat, .nu-checklist li, .nu-numbered li { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <span class="nu-doc-label">Action Plan · Confidential</span>
      <h1 class="nu-title"><span class="blue">Estate Acquisition</span> Negotiation Strategy</h1>
      <p class="nu-subtitle">4505 Buttewoods — 7,098 sq ft residential estate</p>
      <p class="nu-subtitle" style="font-size: 0.95rem; color: #666;">Prepared for Aaron C. Norris, Founder &amp; CEO · reMarkable action item intake</p>

      <div class="nu-meta-row">
        <div class="nu-meta-item">
          <strong>Property</strong>
          4505 Buttewoods
        </div>
        <div class="nu-meta-item">
          <strong>Square Footage</strong>
          7,098 sq ft
        </div>
        <div class="nu-meta-item">
          <strong>Action Type</strong>
          Purchase Negotiation
        </div>
        <div class="nu-meta-item">
          <strong>Date Opened</strong>
          2026-04-23
        </div>
        <div class="nu-meta-item">
          <strong>Owner</strong>
          Aaron C. Norris
        </div>
        <div class="nu-meta-item">
          <strong>Status</strong>
          Pre-Offer Prep
        </div>
      </div>

      <section class="nu-section">
        <h2 class="nu-section-title">Snapshot <span>— the numbers that matter</span></h2>
        <div class="nu-grid-3">
          <div class="nu-stat">
            <div class="nu-stat-value">7,098</div>
            <div class="nu-stat-label">Square Feet</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">4505</div>
            <div class="nu-stat-label">Buttewoods Address</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">1</div>
            <div class="nu-stat-label">Shot at Getting It Right</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Phase 1 <span>— Due Diligence (do before making any offer)</span></h2>
        <ol class="nu-numbered">
          <li>
            <strong>Pull comparable sales within 1 mile, last 12 months</strong>
            Filter to homes between 6,000 and 8,500 sq ft. Separate new construction from resale. Calculate median price-per-square-foot and adjust for lot size, pool, and finish level.
          </li>
          <li>
            <strong>Order a pre-offer inspection if the seller will allow</strong>
            Roof age, HVAC age, foundation, termite history, water intrusion. At 7,098 sq ft, deferred maintenance on systems is the single largest hidden cost. A $400 inspection can prevent a $40,000 surprise.
          </li>
          <li>
            <strong>Confirm lot, zoning, and survey</strong>
            Pull the plat, confirm setbacks, verify no encroachments. Flag any HOA covenants, architectural review requirements, or pending assessments.
          </li>
          <li>
            <strong>Run the property tax trajectory</strong>
            Look at the last 5 years of assessed value. A large estate often reassesses sharply on sale — model the year-two tax bill, not the year-one teaser.
          </li>
          <li>
            <strong>Establish seller motivation</strong>
            Days on market, price history, listing agent, reason for sale. A seller who has already dropped price once is a different negotiation than a seller on day 10.
          </li>
          <li>
            <strong>Line up financing or proof of funds</strong>
            A written pre-approval at the offer price (or a POF letter for cash) is non-negotiable. No seller at this price tier entertains an offer without it.
          </li>
        </ol>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Phase 2 <span>— Offer Tiers</span></h2>
        <p style="margin-bottom: 14px; color: var(--nu-body-text);">Three price points locked in before the first conversation. Never negotiate without knowing your walk-away number written down in advance.</p>
        <div class="nu-tier-row">
          <div class="nu-tier nu-tier-opening">
            <div class="nu-tier-label">Opening</div>
            <div class="nu-tier-value">List − 10% to 12%</div>
            <div class="nu-tier-desc">Low enough to leave room, high enough to not insult. Anchors the negotiation.</div>
          </div>
          <div class="nu-tier nu-tier-target">
            <div class="nu-tier-label">Target</div>
            <div class="nu-tier-value">List − 5% to 7%</div>
            <div class="nu-tier-desc">Where a fair deal lands after reasonable back-and-forth. The number you plan to close at.</div>
          </div>
          <div class="nu-tier nu-tier-walkaway">
            <div class="nu-tier-label">Walk-Away</div>
            <div class="nu-tier-value">List − 2%</div>
            <div class="nu-tier-desc">Above this number the deal no longer serves the goal. Written down. No exceptions.</div>
          </div>
        </div>
        <div class="nu-callout">
          <div class="nu-callout-title">Rule</div>
          <p>Aaron — the walk-away number is written before the first counter, not discovered in the heat of it. If you can't write it down tonight, you're not ready to offer Monday.</p>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Phase 3 <span>— Terms That Win the Deal (beyond price)</span></h2>
        <div class="nu-grid-2">
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Earnest Money</h3>
            <p>Offer 1% to 2% of purchase price. A stronger earnest deposit signals seriousness without exposing excessive capital before inspection contingency clears.</p>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Closing Timeline</h3>
            <p>30 days for cash, 45 days for financed. Match the seller's stated timeline if known — flexibility on closing date is often worth real dollars to the right seller.</p>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Inspection Contingency</h3>
            <p>10 business days. Non-negotiable on a 7,098 sq ft property. Right to renegotiate or walk based on findings. Do not waive this.</p>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Financing Contingency</h3>
            <p>If financed, 21 days. If cash, remove this and put it in writing — sellers value certainty, and removing a contingency is often worth more than raising the price.</p>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Seller Concessions</h3>
            <p>Request 2% to 3% toward closing costs on the opening offer. Drop it in later rounds as a give-back that costs you nothing relative to price.</p>
          </div>
          <div class="nu-card">
            <h3 style="color: var(--nu-blue); font-weight: 900; margin-bottom: 10px;">Possession</h3>
            <p>Possession at closing. If the seller needs a rent-back, cap it at 30 days at fair market rent with a daily penalty after.</p>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Phase 4 <span>— Negotiation Sequence</span></h2>
        <ol class="nu-numbered">
          <li>
            <strong>Written offer with full package</strong>
            Offer letter, POF or pre-approval, earnest money instructions, proposed closing date. Clean, professional, one pass — no typos, no round numbers that scream low effort.
          </li>
          <li>
            <strong>48-hour response deadline</strong>
            Keeps the seller from shopping your offer. Long enough to be reasonable, short enough to force a decision.
          </li>
          <li>
            <strong>Expect one counter; plan for two</strong>
            Seller counters high. You counter back at target. If they counter a third time, you are either at walk-away or the seller is not serious.
          </li>
          <li>
            <strong>Silence is leverage</strong>
            After each counter, let the seller sit with it. Do not follow up the same day. The second-hardest thing in a negotiation is waiting; the hardest is walking.
          </li>
          <li>
            <strong>Inspection-period renegotiation</strong>
            If inspection surfaces material issues, request a credit equal to 1.25× the documented repair estimate. Three contractor bids in hand, not guesses.
          </li>
          <li>
            <strong>Final walk-through 24 hours before closing</strong>
            Every system operational. Every repair completed and documented. Every negotiated item present. Walk-throughs prevent closing-day surprises.
          </li>
        </ol>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Professional Team <span>— line up before offer</span></h2>
        <ul class="nu-checklist">
          <li><strong>Buyer's agent</strong> — experienced at this price tier, in this submarket, with at least three closed transactions over $1M in the last 12 months.</li>
          <li><strong>Real estate attorney</strong> — Alabama-licensed, reviews the contract before signature, not after. Fixed fee preferred over hourly for a single transaction.</li>
          <li><strong>Lender</strong> — if financing, jumbo product at competitive rate. Pre-approval letter valid through projected closing date.</li>
          <li><strong>Inspector</strong> — licensed home inspector plus specialty inspectors for HVAC, roof, pool/spa, and foundation if flagged.</li>
          <li><strong>Title company</strong> — preferred closer with turnkey escrow, title insurance, and recording. Ask for the CD three days before closing, not at the table.</li>
          <li><strong>Insurance agent</strong> — homeowners quote bound 14 days before closing. Flood determination pulled. Replacement-cost coverage, not market value.</li>
          <li><strong>CPA</strong> — confirm the transaction's tax position, any 1031 implications, and property tax prorations.</li>
        </ul>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Red Flags <span>— walk-away triggers</span></h2>
        <ul class="nu-checklist">
          <li>Foundation movement, active water intrusion, or structural settlement flagged by inspection and confirmed by a structural engineer.</li>
          <li>Undisclosed liens, easements, or boundary disputes surfaced in the title commitment.</li>
          <li>Seller refusal to permit inspection or unwillingness to provide seller disclosure.</li>
          <li>Tax assessment increase that pushes annual carrying costs more than 15% above underwriting.</li>
          <li>Appraisal shortfall of more than 5% with seller unwilling to meet in the middle.</li>
          <li>Any attempt by the seller to change material terms after mutual acceptance without reciprocal concession.</li>
        </ul>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Immediate Next Actions <span>— this week</span></h2>
        <ul class="nu-checklist">
          <li><strong>Day 1 (Thu 4/23):</strong> Confirm MLS listing status, pull listing sheet, note days on market and price history.</li>
          <li><strong>Day 2 (Fri 4/24):</strong> Pull 12-month comps within 1 mile. Build price-per-square-foot model.</li>
          <li><strong>Day 3 (Sat 4/25):</strong> Drive the property. Drive the neighborhood. Drive it again at a different time of day.</li>
          <li><strong>Day 4 (Sun 4/26):</strong> Call buyer's agent. Schedule showing for early next week.</li>
          <li><strong>Day 5 (Mon 4/27):</strong> Loan pre-approval or POF letter secured in writing.</li>
          <li><strong>Day 6 (Tue 4/28):</strong> In-person walkthrough. Photograph condition, measure rooms, note every question.</li>
          <li><strong>Day 7 (Wed 4/29):</strong> Write walk-away number on paper. Sign it. Then draft offer.</li>
        </ul>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Aaron's Principles <span>— pinned for this negotiation</span></h2>
        <div class="nu-badge-row">
          <span class="nu-chip blue">Lead with the ask</span>
          <span class="nu-chip blue">Never bury the number</span>
          <span class="nu-chip green">Honesty over posture</span>
          <span class="nu-chip green">Earn the business</span>
          <span class="nu-chip gold">Walk-away written first</span>
          <span class="nu-chip gold">Silence is leverage</span>
          <span class="nu-chip">No filler</span>
          <span class="nu-chip">Direct and warm</span>
        </div>
        <div class="nu-callout" style="margin-top: 20px;">
          <div class="nu-callout-title">Reminder</div>
          <p>This is a negotiation, not a pitch. The best outcome is a fair deal both sides can defend a year from now — not the lowest possible price. Reputation compounds; savings on one deal do not.</p>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Decision Log <span>— fill as negotiation progresses</span></h2>
        <table class="nu-offer-table">
          <thead>
            <tr>
              <th>Milestone</th>
              <th>Date</th>
              <th>Value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="label">List Price</td><td>—</td><td class="value">to confirm</td><td>Pull from MLS listing sheet</td></tr>
            <tr><td class="label">Opening Offer</td><td>—</td><td class="value">List − 10% to 12%</td><td>Written offer with POF and earnest</td></tr>
            <tr><td class="label">Target</td><td>—</td><td class="value">List − 5% to 7%</td><td>Plan to close here</td></tr>
            <tr><td class="label">Walk-Away</td><td>—</td><td class="value">List − 2%</td><td>Written before first counter</td></tr>
            <tr><td class="label">Accepted Price</td><td>—</td><td class="value">—</td><td>Record at mutual acceptance</td></tr>
            <tr><td class="label">Inspection Credit</td><td>—</td><td class="value">—</td><td>1.25× documented repair estimates</td></tr>
            <tr><td class="label">Close Date</td><td>—</td><td class="value">—</td><td>Target 30 cash / 45 financed</td></tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

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