<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #0a8043;
      --nu-warning: #d97706;
      --nu-danger: #b91c1c;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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

    /* HEADER */
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
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin: 4px 0 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-meta {
      margin-top: 22px;
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      color: rgba(255,255,255,0.85);
      text-transform: uppercase;
      font-weight: 700;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
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
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 40px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .doc-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 36px;
    }
    .doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }

    /* QUICK FACTS */
    .quick-facts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 48px;
    }
    .fact-tile {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .fact-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* SECTION */
    .nu-section { margin-bottom: 50px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
      margin-right: 6px;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CHEVRON BADGES */
    .chevron-list { display: flex; flex-direction: column; gap: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .step {
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-title::before {
      content: '';
      width: 8px; height: 22px;
      background: var(--nu-blue);
      border-radius: 2px;
    }
    .card-list { list-style: none; padding: 0; }
    .card-list li {
      padding: 8px 0 8px 22px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .card-list li:last-child { border-bottom: none; }
    .card-list li::before {
      content: '◆';
      color: var(--nu-cyan);
      position: absolute;
      left: 0;
      font-size: 0.75rem;
      top: 12px;
    }
    .card-list li strong { color: var(--nu-dark-text); }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pill-low { background: #ecfdf5; color: var(--nu-success); }
    .pill-med { background: #fef3c7; color: var(--nu-warning); }
    .pill-high { background: #fee2e2; color: var(--nu-danger); }
    .pill-info { background: #e0f2fe; color: var(--nu-blue); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .tl-item {
      position: relative;
      padding-bottom: 22px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
    }
    .tl-week {
      font-size: 0.76rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .tl-action {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .tl-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .offer-rung {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      position: relative;
    }
    .offer-rung.opening { border-color: var(--nu-success); }
    .offer-rung.target { border-color: var(--nu-blue); background: linear-gradient(180deg, #f0f4ff 0%, var(--nu-white) 100%); }
    .offer-rung.walk { border-color: var(--nu-danger); }
    .offer-tag {
      position: absolute;
      top: -10px;
      left: 16px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 12px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .offer-rung.opening .offer-tag { background: var(--nu-success); }
    .offer-rung.walk .offer-tag { background: var(--nu-danger); }
    .offer-amount {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin: 10px 0 4px;
      font-variant-numeric: tabular-nums;
    }
    .offer-psf {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .offer-rationale {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8f8ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin: 24px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .callout p { margin: 0; }

    /* DUE DILIGENCE GRID */
    .dd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .dd-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    .dd-check {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .dd-text { font-size: 0.9rem; }
    .dd-text strong { display: block; color: var(--nu-dark-text); margin-bottom: 2px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.55);
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .two-col, .offer-ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 30px; }
      .doc-title { font-size: 1.7rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    @media print {
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-table, .offer-rung { box-shadow: none; }
      body { font-size: 11pt; }
    }
  </style>
</head>
<body>

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
    <div class="nu-doc-meta">Acquisition Strategy Brief &nbsp;•&nbsp; Confidential — Internal Use</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-eyebrow">Real Estate Negotiation Plan</div>
        <h1 class="doc-title"><span>4505 Buttewoods</span> Estate Acquisition</h1>
        <p class="doc-subtitle">7,098 sq ft single-family estate. Strategic negotiation framework, offer ladder, due-diligence checklist, and 60-day execution timeline. Sourced from reMarkable action item, prepared for Aaron C. Norris.</p>
      </div>

      <!-- QUICK FACTS -->
      <div class="quick-facts">
        <div class="fact-tile">
          <div class="fact-label">Property</div>
          <div class="fact-value">4505 Buttewoods</div>
          <div class="fact-sub">Single-family estate</div>
        </div>
        <div class="fact-tile">
          <div class="fact-label">Total Area</div>
          <div class="fact-value">7,098 sq ft</div>
          <div class="fact-sub">Heated &amp; cooled (per record)</div>
        </div>
        <div class="fact-tile">
          <div class="fact-label">Action Source</div>
          <div class="fact-value">reMarkable</div>
          <div class="fact-sub">Logged 2026-04-24</div>
        </div>
        <div class="fact-tile">
          <div class="fact-label">Owner</div>
          <div class="fact-value">Aaron C. Norris</div>
          <div class="fact-sub">Lead negotiator</div>
        </div>
        <div class="fact-tile">
          <div class="fact-label">Target Close</div>
          <div class="fact-value">60 Days</div>
          <div class="fact-sub">From offer acceptance</div>
        </div>
      </div>

      <!-- SECTION 1: NEGOTIATION OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span><span class="rest">Objective</span></h2>
        <div class="callout">
          <div class="callout-title">Primary Objective</div>
          <p>Acquire 4505 Buttewoods at or below independent appraised value with seller-paid concessions covering inspection-driven repairs, with closing inside 60 days, financing contingencies preserved, and zero deferred-maintenance surprises uncovered post-close.</p>
        </div>
        <div class="two-col">
          <div class="nu-card">
            <div class="card-title">Must-Haves (non-negotiable)</div>
            <ul class="card-list">
              <li><strong>Clean title</strong> — full title insurance, no easement disputes</li>
              <li><strong>Inspection contingency</strong> — minimum 14-day window</li>
              <li><strong>Financing contingency</strong> — preserved through underwriting</li>
              <li><strong>Appraisal protection</strong> — purchase price ≤ appraised value</li>
              <li><strong>Survey</strong> — current boundary survey at seller's expense or split</li>
              <li><strong>Final walk-through</strong> — within 48 hours of close</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="card-title">Strong Wants (high-leverage asks)</div>
            <ul class="card-list">
              <li><strong>Seller credits</strong> for any inspection items over $2,500</li>
              <li><strong>Home warranty</strong> — 1 year, seller-paid (~$650 value)</li>
              <li><strong>Possession at close</strong> — no leaseback unless rent-credited</li>
              <li><strong>Working systems certification</strong> — HVAC, roof, septic/sewer in writing</li>
              <li><strong>Appliances + fixtures</strong> stay (refrigerator, washer, dryer, mounted TVs)</li>
              <li><strong>Mineral &amp; water rights</strong> conveyed (verify Alabama statute on transfer)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 2: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span><span class="rest">Ladder &amp; Pricing Anchors</span></h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Three-rung negotiation ladder. Final dollar figures must be locked once independent appraisal and three local comparables are pulled. Anchors below are placeholders for the negotiation framework — fill from CMA before submission.</p>

        <div class="offer-ladder">
          <div class="offer-rung opening">
            <div class="offer-tag">Opening</div>
            <div class="offer-amount">88% of Ask</div>
            <div class="offer-psf">Below appraised value floor</div>
            <div class="offer-rationale">Anchor low, signal seriousness with earnest money at 1% and 30-day inspection. Justify with comparables and known repair items from drive-by review.</div>
          </div>
          <div class="offer-rung target">
            <div class="offer-tag">Target Close</div>
            <div class="offer-amount">93% of Ask</div>
            <div class="offer-psf">At or below appraised value</div>
            <div class="offer-rationale">Walk-away price for first round. Includes seller paying $5,000 toward closing costs, home warranty, and home stays as-shown for fixtures/appliances.</div>
          </div>
          <div class="offer-rung walk">
            <div class="offer-tag">Walk-Away</div>
            <div class="offer-amount">97% of Ask</div>
            <div class="offer-psf">Hard ceiling</div>
            <div class="offer-rationale">Above this number, the deal does not pencil. Dad and CPA review required to exceed. No emotional bidding — walk and re-engage in 30 days if listing sits.</div>
          </div>
        </div>

        <div class="callout" style="margin-top: 24px;">
          <div class="callout-title">Pricing Discipline</div>
          <p>Customer Price logic does not apply here — this is a real estate transaction, not a margin calc. Price discipline comes from: (1) independent appraisal, (2) three sold comparables within 0.5 miles in last 6 months, (3) deferred-maintenance dollar estimate from inspection. Do not exceed walk-away under any condition without 24-hour cooling period.</p>
        </div>
      </section>

      <!-- SECTION 3: NEGOTIATION SEQUENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span><span class="rest">Sequence</span></h2>
        <div class="chevron-list">
          <div class="nu-badge"><span class="step">1</span>Pull MLS history, days on market, prior list-price reductions, and tax-assessed value before first contact.</div>
          <div class="nu-badge"><span class="step">2</span>Engage buyer's agent (or attorney if for-sale-by-owner) — never negotiate directly without representation in the room.</div>
          <div class="nu-badge"><span class="step">3</span>Submit opening offer in writing with proof of funds and pre-approval letter attached.</div>
          <div class="nu-badge"><span class="step">4</span>Counter-strategy: meet in the middle on price only after seller has moved twice. Trade non-price terms for price reductions.</div>
          <div class="nu-badge"><span class="step">5</span>Inspection phase: re-open price negotiation if findings exceed $2,500 in repair value. Use bid documentation, not estimates.</div>
          <div class="nu-badge"><span class="step">6</span>Appraisal contingency: if low, request seller meet appraisal or split the gap — do not pay over appraised value.</div>
          <div class="nu-badge"><span class="step">7</span>Final walk-through, clear-to-close, fund and record. Close.</div>
        </div>
      </section>

      <!-- SECTION 4: DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span><span class="rest">Diligence Checklist</span></h2>
        <p style="margin-bottom: 18px;">Every item below must be cleared before final commitment. Check off as completed.</p>
        <div class="dd-grid">
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Title search &amp; insurance</strong>Confirm clean chain of title, no liens, no unresolved easements.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Boundary survey</strong>Current ALTA/NSPS or Alabama state-equivalent survey.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Property tax history</strong>Last 5 years of assessments and any pending appeals.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Full home inspection</strong>Licensed inspector. Roof, foundation, HVAC, electrical, plumbing.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Termite / WDO inspection</strong>Required in Alabama. Bond transfer if existing.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Septic / sewer inspection</strong>Camera-scope sewer line. Septic pump &amp; certify if applicable.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Radon &amp; mold testing</strong>Especially below-grade space &amp; basement mechanicals.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Flood zone &amp; elevation cert</strong>FEMA flood map; elevation cert if Zone A or X-shaded.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>HOA documents</strong>Bylaws, CCRs, financials, special assessments, transfer fees.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Insurance binder quote</strong>Pre-bind quote — confirm insurability before contract goes hard.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Independent appraisal</strong>Lender-ordered + optional independent for negotiation.</div></div>
          <div class="dd-item"><div class="dd-check"></div><div class="dd-text"><strong>Utility transfer plan</strong>Power, water, gas, internet — schedule for day-of-close.</div></div>
        </div>
      </section>

      <!-- SECTION 5: RISK & LEVERAGE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span><span class="rest">Register &amp; Leverage Map</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 30%;">Risk / Leverage Item</th>
              <th style="width: 14%;">Severity</th>
              <th>Mitigation / Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bidding war / multiple offers</strong></td>
              <td><span class="pill pill-high">High</span></td>
              <td>Hold to walk-away ceiling. Add escalation clause capped at 97% of ask. Strongest letter, fastest close, biggest earnest.</td>
            </tr>
            <tr>
              <td><strong>Appraisal comes in low</strong></td>
              <td><span class="pill pill-med">Med</span></td>
              <td>Use as price-reduction lever. Request seller meet appraisal or split gap. Never waive appraisal contingency on a 7,098 sq ft estate.</td>
            </tr>
            <tr>
              <td><strong>Hidden deferred maintenance</strong></td>
              <td><span class="pill pill-high">High</span></td>
              <td>Aggressive inspection scope. Engineering inspection on foundation. Sewer scope mandatory at this size.</td>
            </tr>
            <tr>
              <td><strong>Title defects / liens</strong></td>
              <td><span class="pill pill-low">Low</span></td>
              <td>Title insurance covers most. Cure period in contract. Walk if curable defects extend close beyond 90 days.</td>
            </tr>
            <tr>
              <td><strong>Seller emotional attachment / overpricing</strong></td>
              <td><span class="pill pill-med">Med</span></td>
              <td>Patience. Comparable-driven offer letter. Walk if needed and re-engage in 30 days at lower number.</td>
            </tr>
            <tr>
              <td><strong>Financing surprise (rate / underwriting)</strong></td>
              <td><span class="pill pill-med">Med</span></td>
              <td>Lock rate at contract acceptance. Two lender backup. CPA reviews DTI before first offer.</td>
            </tr>
            <tr>
              <td><strong>Days-on-market leverage</strong></td>
              <td><span class="pill pill-info">Lever</span></td>
              <td>If &gt;60 DOM or prior price drops, anchor opening below 88% of current ask. Sellers tire quickly past 75 days.</td>
            </tr>
            <tr>
              <td><strong>Cash position vs. financed buyer pool</strong></td>
              <td><span class="pill pill-info">Lever</span></td>
              <td>If cash, reduce contingencies but never inspection. Compress close to 21 days for premium leverage.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 6: 60-DAY TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">60-Day</span><span class="rest">Execution Timeline</span></h2>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-week">Week 1 — Days 1-7</div>
            <div class="tl-action">Research &amp; pre-positioning</div>
            <div class="tl-detail">Pull MLS history, tax records, ownership chain, prior listings. Engage buyer's agent. Lock pre-approval letter and proof of funds. Drive the property; note exterior condition, neighborhood comps, school district, flood zone.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 2 — Days 8-14</div>
            <div class="tl-action">Opening offer submitted</div>
            <div class="tl-detail">Written offer at 88% of ask with full contingency package, 14-day inspection, 45-day close. Earnest money 1% in escrow on acceptance.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 3 — Days 15-21</div>
            <div class="tl-action">Counter cycle &amp; contract execution</div>
            <div class="tl-detail">Two-round counter expected. Land at target price (≤93% of ask) with seller credits and home warranty. Contract fully executed; earnest money deposited.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 4 — Days 22-28</div>
            <div class="tl-action">Inspection &amp; due diligence sprint</div>
            <div class="tl-detail">Full home inspection, termite, radon, sewer scope, mold, foundation engineer if flagged. Title order placed. Survey ordered. Insurance quote requested.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 5 — Days 29-35</div>
            <div class="tl-action">Inspection negotiation</div>
            <div class="tl-detail">Repair request submitted with bid documentation. Negotiate seller credits for items over $2,500. Lock final terms or walk.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 6 — Days 36-42</div>
            <div class="tl-action">Appraisal &amp; underwriting</div>
            <div class="tl-detail">Lender appraisal completed. Underwriting in process. Address any conditions immediately. Lock interest rate if not already locked.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 7 — Days 43-49</div>
            <div class="tl-action">Clear to close</div>
            <div class="tl-detail">Final loan approval. Closing disclosure issued (3-day review window). Schedule closing date and final walk-through.</div>
          </div>
          <div class="tl-item">
            <div class="tl-week">Week 8 — Days 50-60</div>
            <div class="tl-action">Final walk-through, fund &amp; close</div>
            <div class="tl-detail">Walk-through inside 48 hours of closing. Wire down payment. Sign and record. Possession transfers. Utilities live in Norris name day-of-close.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: TEAM -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span><span class="rest">Team</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <div class="card-title">Internal</div>
            <ul class="card-list">
              <li><strong>Aaron C. Norris</strong> — Lead negotiator, all final pricing decisions</li>
              <li><strong>Wayne (Dad)</strong> — Sounding board on walk-away ceiling and deferred-maintenance estimates</li>
              <li><strong>CPA — LA Agent (Mark or Katie)</strong> — DTI clearance, tax-treatment review</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="card-title">External</div>
            <ul class="card-list">
              <li><strong>Buyer's Agent</strong> — to be engaged Week 1; prefer dual-agent referral from Patrick Lavette / Renasant Bank</li>
              <li><strong>Real Estate Attorney</strong> — Alabama-licensed, FSBO option requires attorney lead</li>
              <li><strong>Lender</strong> — Renasant Bank (Patrick Lavette primary), one backup lender for rate competition</li>
              <li><strong>Title Company</strong> — chosen at contract execution; review title insurance binder pre-close</li>
              <li><strong>Inspector</strong> — licensed Alabama home inspector; structural engineer on standby</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 8: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span><span class="rest">Next Actions</span></h2>
        <div class="chevron-list">
          <div class="nu-badge"><span class="step">A</span>Confirm full property address (4505 Buttewoods — verify city, ZIP, parcel ID).</div>
          <div class="nu-badge"><span class="step">B</span>Pull current MLS listing or Zillow / county appraiser record. Capture asking price, DOM, prior list history.</div>
          <div class="nu-badge"><span class="step">C</span>Phone Patrick Lavette at Renasant Bank to start pre-approval refresh and request agent referral.</div>
          <div class="nu-badge"><span class="step">D</span>Order three sold comparables within 0.5 miles, last 6 months. Lock target and walk-away dollar figures.</div>
          <div class="nu-badge"><span class="step">E</span>Schedule drive-by and exterior visual review. Photo deferred-maintenance items.</div>
          <div class="nu-badge"><span class="step">F</span>Update Master Tracker entry: 4505 Buttewoods — In Discovery — Owner: Aaron — Next review: 7 days.</div>
        </div>
      </section>

      <div class="callout">
        <div class="callout-title">Discipline Reminder</div>
        <p>This is a Norris Utilities® "earn the business" discipline applied to the buy side: anchor low with respect, hold the walk-away, never bid against yourself, trade non-price terms before raising price, and walk if the math stops working. Patience earns the deal — emotion loses it.</p>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC &nbsp;•&nbsp; Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Prepared 2026-04-25 &nbsp;•&nbsp; Confidential — Internal Negotiation Brief</div>
  </footer>

</body>
</html>