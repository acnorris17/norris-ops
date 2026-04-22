<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --nu-blue: #0000FF;
    --nu-blue-deep: #0033CC;
    --nu-cyan: #06D0FF;
    --nu-navy: #000033;
    --nu-white: #FFFFFF;
    --nu-light-gray: #F5F5F7;
    --nu-medium-gray: #E8E8EC;
    --nu-dark-text: #1A1A2E;
    --nu-body-text: #333333;
    --nu-accent-gold: #C9A84C;
    --nu-warning: #C84C1A;
    --nu-success: #1A7F3E;
    --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-tagline: 'Playfair Display', Georgia, serif;
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
    background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
      repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

  .nu-phoenix-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 14px;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    opacity: 0.95;
  }
  .nu-logo-text {
    font-weight: 900;
    font-size: 3.2rem;
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
    margin-bottom: 18px;
  }
  .nu-tagline {
    font-family: var(--font-tagline);
    font-style: italic;
    font-weight: 400;
    font-size: 1.3rem;
    color: var(--nu-cyan);
    letter-spacing: 0.03em;
  }

  /* BRIEF TITLE BAND */
  .nu-brief-band {
    background: rgba(0,0,0,0.15);
    display: inline-block;
    padding: 10px 28px;
    margin-top: 24px;
    border-radius: 2px;
    border: 1px solid rgba(255,255,255,0.25);
  }
  .nu-brief-band-label {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    color: var(--nu-cyan);
    text-transform: uppercase;
    font-weight: 700;
  }
  .nu-brief-band-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--nu-white);
    margin-top: 2px;
    letter-spacing: 0.05em;
  }

  /* CHEVRON */
  .nu-chevron {
    position: relative;
    height: 50px;
    margin-top: -50px;
    z-index: 10;
  }
  .nu-chevron svg { width: 100%; height: 50px; display: block; }

  /* CONTENT AREA */
  .nu-content-area {
    position: relative;
    background: var(--nu-white);
    overflow: hidden;
  }
  .nu-content-area::before {
    content: '';
    position: absolute;
    top: 220px; left: 50%;
    transform: translateX(-50%);
    width: 65%;
    max-width: 700px;
    aspect-ratio: 1;
    background: radial-gradient(circle, rgba(0, 51, 204, 0.07) 0%, rgba(0, 51, 204, 0.03) 40%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
  }
  .nu-content-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 40px 80px;
  }

  /* SECTION HEADERS */
  .nu-section {
    margin-bottom: 48px;
  }
  .nu-section-title {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  .nu-section-title .first-word { color: var(--nu-blue-deep); }
  .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
  .nu-section-rule {
    width: 60px;
    height: 3px;
    background: var(--nu-cyan);
    margin-bottom: 22px;
  }
  .nu-section-lede {
    font-size: 1.05rem;
    color: var(--nu-body-text);
    margin-bottom: 24px;
    max-width: 780px;
  }

  /* EXECUTIVE SUMMARY CARD */
  .nu-summary-card {
    background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
    border-left: 6px solid var(--nu-blue);
    padding: 28px 32px;
    border-radius: 4px;
    box-shadow: 0 2px 14px rgba(0,0,0,0.06);
    margin-bottom: 32px;
  }
  .nu-summary-card h3 {
    font-weight: 900;
    font-size: 1.1rem;
    color: var(--nu-blue-deep);
    margin-bottom: 10px;
    letter-spacing: 0.02em;
  }
  .nu-summary-card p {
    font-size: 1rem;
    color: var(--nu-dark-text);
    line-height: 1.7;
  }

  /* PROPERTY FACTS GRID */
  .nu-facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }
  .nu-fact {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-top: 3px solid var(--nu-cyan);
    border-radius: 4px;
    padding: 22px 20px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  }
  .nu-fact-label {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--nu-blue-deep);
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .nu-fact-value {
    font-size: 1.35rem;
    font-weight: 900;
    color: var(--nu-dark-text);
    line-height: 1.2;
  }
  .nu-fact-sub {
    font-size: 0.85rem;
    color: var(--nu-body-text);
    margin-top: 4px;
    font-weight: 400;
  }

  /* CHEVRON BADGES (objectives) */
  .nu-badge-stack { margin-bottom: 18px; }
  .nu-badge {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    color: var(--nu-white);
    padding: 14px 36px 14px 18px;
    margin-bottom: 10px;
    clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.01em;
  }
  .nu-badge-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: var(--nu-cyan);
    color: var(--nu-navy);
    border-radius: 50%;
    font-weight: 900;
    font-size: 0.9rem;
    margin-right: 14px;
    flex-shrink: 0;
  }

  /* STRATEGY TABLE */
  .nu-strategy-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--nu-white);
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    border-radius: 4px;
    overflow: hidden;
  }
  .nu-strategy-table thead th {
    background: var(--nu-navy);
    color: var(--nu-white);
    text-align: left;
    padding: 14px 18px;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 700;
  }
  .nu-strategy-table tbody td {
    padding: 16px 18px;
    border-bottom: 1px solid var(--nu-medium-gray);
    vertical-align: top;
    font-size: 0.95rem;
  }
  .nu-strategy-table tbody tr:last-child td { border-bottom: none; }
  .nu-strategy-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
  .nu-strategy-table .stage-cell {
    font-weight: 900;
    color: var(--nu-blue-deep);
    white-space: nowrap;
  }

  /* TWO COLUMN */
  .nu-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 24px;
  }
  .nu-col-panel {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 4px;
    padding: 24px 26px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  }
  .nu-col-panel h4 {
    font-weight: 900;
    font-size: 1rem;
    color: var(--nu-blue-deep);
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--nu-cyan);
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .nu-col-panel ul { list-style: none; padding: 0; }
  .nu-col-panel li {
    padding: 7px 0 7px 20px;
    position: relative;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .nu-col-panel li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--nu-blue);
    font-weight: 900;
  }
  .nu-col-panel.risk li::before { color: var(--nu-warning); }
  .nu-col-panel.lever li::before { color: var(--nu-success); }

  /* PRICE ANCHOR BOX */
  .nu-price-anchor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    background: var(--nu-medium-gray);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 20px;
  }
  .nu-price-cell {
    background: var(--nu-white);
    padding: 22px 20px;
    text-align: center;
  }
  .nu-price-cell.anchor-low { border-top: 4px solid var(--nu-success); }
  .nu-price-cell.anchor-target { border-top: 4px solid var(--nu-blue); background: linear-gradient(180deg, #f7faff 0%, #ffffff 100%); }
  .nu-price-cell.anchor-walk { border-top: 4px solid var(--nu-warning); }
  .nu-price-label {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--nu-body-text);
    margin-bottom: 8px;
  }
  .nu-price-value {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--nu-dark-text);
    line-height: 1;
  }
  .nu-price-caption {
    font-size: 0.82rem;
    color: var(--nu-body-text);
    margin-top: 8px;
  }

  /* CHECKLIST */
  .nu-checklist {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 4px;
    padding: 22px 28px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  }
  .nu-checklist-item {
    display: flex;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid var(--nu-light-gray);
    font-size: 0.95rem;
  }
  .nu-checklist-item:last-child { border-bottom: none; }
  .nu-check-box {
    width: 20px;
    height: 20px;
    border: 2px solid var(--nu-blue);
    border-radius: 3px;
    margin-right: 14px;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .nu-check-label {
    font-weight: 700;
    color: var(--nu-dark-text);
  }
  .nu-check-sub {
    font-weight: 400;
    color: var(--nu-body-text);
    display: block;
    font-size: 0.88rem;
    margin-top: 2px;
  }

  /* CALLOUT */
  .nu-callout {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #001155 100%);
    color: var(--nu-white);
    padding: 28px 32px;
    border-radius: 4px;
    margin: 32px 0;
    position: relative;
    overflow: hidden;
  }
  .nu-callout::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 200px; height: 100%;
    background: radial-gradient(circle at top right, rgba(6,208,255,0.25) 0%, transparent 70%);
  }
  .nu-callout-label {
    font-size: 0.72rem;
    letter-spacing: 0.25em;
    color: var(--nu-cyan);
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 8px;
    position: relative;
  }
  .nu-callout-body {
    font-size: 1.05rem;
    line-height: 1.7;
    font-weight: 400;
    position: relative;
  }

  /* FOOTER */
  .nu-footer {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: rgba(255,255,255,0.85);
    padding: 48px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .nu-footer::before {
    content: '';
    position: absolute;
    top: -40%; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 200%;
    background: radial-gradient(ellipse, rgba(6,208,255,0.08) 0%, transparent 65%);
  }
  .nu-footer > * { position: relative; }
  .nu-footer-tagline {
    font-family: var(--font-tagline);
    font-style: italic;
    font-weight: 400;
    font-size: 1.2rem;
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
  .nu-footer-meta {
    margin-top: 18px;
    font-size: 0.78rem;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.05em;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .nu-header { padding: 45px 22px 70px; }
    .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
    .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
    .nu-tagline { font-size: 1rem; }
    .nu-brief-band { padding: 8px 18px; }
    .nu-brief-band-title { font-size: 1rem; }
    .nu-content-inner { padding: 40px 22px 60px; }
    .nu-two-col { grid-template-columns: 1fr; }
    .nu-price-anchor { grid-template-columns: 1fr; }
    .nu-badge { clip-path: none; border-radius: 4px; padding: 14px 18px; }
    .nu-strategy-table thead { display: none; }
    .nu-strategy-table tbody tr { display: block; margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); }
    .nu-strategy-table tbody td { display: block; border-bottom: 1px dashed var(--nu-medium-gray); }
    .nu-strategy-table tbody td::before {
      content: attr(data-label);
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--nu-blue-deep);
      margin-bottom: 4px;
    }
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
  <div class="nu-brief-band">
    <div class="nu-brief-band-label">Acquisition Negotiation Brief</div>
    <div class="nu-brief-band-title">4505 Buttewoods — 7,098 sq ft Estate</div>
  </div>
</header>

<!-- CHEVRON TRANSITION -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-content-inner">

    <!-- EXECUTIVE SUMMARY -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Executive</span> <span class="rest">Summary</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-summary-card">
        <h3>Objective</h3>
        <p>
          Negotiate the purchase of the 7,098 sq ft estate located at <strong>4505 Buttewoods</strong>.
          Establish defensible anchors, protect walk-away position, and secure terms
          that reflect the true condition, holding costs, and comparable activity — not the asking price.
          This brief converts the reMarkable action item into a disciplined negotiation plan executed
          by Aaron C. Norris on behalf of Norris Utilities®.
        </p>
      </div>
    </section>

    <!-- PROPERTY FACTS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-section-rule"></div>
      <p class="nu-section-lede">
        Confirmed facts from the reMarkable entry. Items marked <em>Confirm</em> must be verified
        with the listing agent, tax assessor, or title company before the first offer is sent.
      </p>
      <div class="nu-facts-grid">
        <div class="nu-fact">
          <div class="nu-fact-label">Address</div>
          <div class="nu-fact-value">4505 Buttewoods</div>
          <div class="nu-fact-sub">Primary negotiation target</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Living Area</div>
          <div class="nu-fact-value">7,098 sq ft</div>
          <div class="nu-fact-sub">Estate-class footprint</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Property Class</div>
          <div class="nu-fact-value">Estate</div>
          <div class="nu-fact-sub">Limited comparable pool</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Intent</div>
          <div class="nu-fact-value">Acquire</div>
          <div class="nu-fact-sub">Purchase negotiation</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Asking Price</div>
          <div class="nu-fact-value">Confirm</div>
          <div class="nu-fact-sub">Request full listing sheet</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Days on Market</div>
          <div class="nu-fact-value">Confirm</div>
          <div class="nu-fact-sub">Leverage indicator</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Seller Motivation</div>
          <div class="nu-fact-value">Confirm</div>
          <div class="nu-fact-sub">Relocation, estate, distress</div>
        </div>
        <div class="nu-fact">
          <div class="nu-fact-label">Last Sale / Basis</div>
          <div class="nu-fact-value">Confirm</div>
          <div class="nu-fact-sub">Sets seller's floor</div>
        </div>
      </div>
    </section>

    <!-- NEGOTIATION OBJECTIVES -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Objectives</span></h2>
      <div class="nu-section-rule"></div>
      <p class="nu-section-lede">
        Every conversation, email, and counter must map back to one of these five objectives.
        If it does not, it is noise — and noise concedes position.
      </p>
      <div class="nu-badge-stack">
        <div class="nu-badge"><span class="nu-badge-num">1</span>Price at or below verified fair market value — not asking price.</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span>Favorable terms: inspection rights, appraisal contingency, earnest money protection.</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span>Seller concessions: repairs, closing costs, home warranty, or credits in lieu of price reduction.</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span>Closing timeline aligned to Aaron's financing and operational readiness.</div>
        <div class="nu-badge"><span class="nu-badge-num">5</span>Protect walk-away discipline — no emotional anchoring to the property.</div>
      </div>
    </section>

    <!-- PRICE ANCHORS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Price</span> <span class="rest">Anchors</span></h2>
      <div class="nu-section-rule"></div>
      <p class="nu-section-lede">
        Anchors are set <em>before</em> talks begin and do not move based on seller pressure.
        Finalize these three numbers with the agent and CPA before the first written offer is submitted.
      </p>
      <div class="nu-price-anchor">
        <div class="nu-price-cell anchor-low">
          <div class="nu-price-label">Opening Offer</div>
          <div class="nu-price-value">Set Before First Contact</div>
          <div class="nu-price-caption">Defensible low; backed by comps &amp; condition findings.</div>
        </div>
        <div class="nu-price-cell anchor-target">
          <div class="nu-price-label">Target Close</div>
          <div class="nu-price-value">Fair Market Value</div>
          <div class="nu-price-caption">The number Aaron is willing to sign at — no higher.</div>
        </div>
        <div class="nu-price-cell anchor-walk">
          <div class="nu-price-label">Walk-Away</div>
          <div class="nu-price-value">Hard Ceiling</div>
          <div class="nu-price-caption">Cross this line and the deal dies. No exceptions.</div>
        </div>
      </div>
      <div class="nu-callout">
        <div class="nu-callout-label">Discipline Rule</div>
        <div class="nu-callout-body">
          The asking price is the seller's opening statement. Norris Utilities® negotiates from
          verified value — comps, condition, carrying cost, and seller motivation — never from
          the number printed on the listing sheet.
        </div>
      </div>
    </section>

    <!-- STRATEGY TIMELINE -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Stages</span></h2>
      <div class="nu-section-rule"></div>
      <table class="nu-strategy-table">
        <thead>
          <tr>
            <th style="width: 22%;">Stage</th>
            <th>Action</th>
            <th style="width: 22%;">Outcome Sought</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="stage-cell" data-label="Stage">1 — Intelligence</td>
            <td data-label="Action">Pull full MLS history, tax records, three nearest comps, and days-on-market trend. Verify if listed as estate sale or private sale.</td>
            <td data-label="Outcome">Confirmed FMV range</td>
          </tr>
          <tr>
            <td class="stage-cell" data-label="Stage">2 — Rapport</td>
            <td data-label="Action">Initial call with listing agent. Ask why seller is moving, what timeline matters, and what prior offers have looked like. Listen more than speak.</td>
            <td data-label="Outcome">Seller motivation signal</td>
          </tr>
          <tr>
            <td class="stage-cell" data-label="Stage">3 — Inspection</td>
            <td data-label="Action">Walk the property with a contractor. Document roof, foundation, HVAC, plumbing, electrical, and cosmetic issues. Photos &amp; written estimates.</td>
            <td data-label="Outcome">Condition-based leverage</td>
          </tr>
          <tr>
            <td class="stage-cell" data-label="Stage">4 — Opening Offer</td>
            <td data-label="Action">Submit written offer at the pre-set Opening Anchor. Include inspection, appraisal, and financing contingencies. Short acceptance window.</td>
            <td data-label="Outcome">Force a counter, not rejection</td>
          </tr>
          <tr>
            <td class="stage-cell" data-label="Stage">5 — Counter Response</td>
            <td data-label="Action">Trade concessions, not just price. Offer flexible closing, rent-back, or earnest terms in exchange for price movement toward Target.</td>
            <td data-label="Outcome">Close gap on value</td>
          </tr>
          <tr>
            <td class="stage-cell" data-label="Stage">6 — Final Walk &amp; Close</td>
            <td data-label="Action">Reinspect 48 hrs pre-close. Verify repair credits honored, utilities, and title clear. Execute closing with attorney present.</td>
            <td data-label="Outcome">Clean transfer of title</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- LEVERAGE VS RISK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Leverage</span> <span class="rest">&amp; Risk</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-two-col">
        <div class="nu-col-panel lever">
          <h4>Our Leverage</h4>
          <ul>
            <li>Cash-ready or pre-approved buyer — shortens close to 21–30 days.</li>
            <li>Estate-class properties have a thin buyer pool; offers are rare.</li>
            <li>Discipline to walk — emotion-free posture raises our credibility.</li>
            <li>Written contractor findings turn cosmetic complaints into hard-dollar deductions.</li>
            <li>Every day on market above 60 compounds seller fatigue in our favor.</li>
          </ul>
        </div>
        <div class="nu-col-panel risk">
          <h4>Risks to Manage</h4>
          <ul>
            <li>Competing offer from another buyer resets leverage — confirm activity weekly.</li>
            <li>Seller with no carrying-cost pressure can outwait a low opening bid.</li>
            <li>Appraisal gap on estate homes — budget cash to cover or negotiate rebate.</li>
            <li>Undisclosed structural or title issues — order independent title search.</li>
            <li>Emotional attachment to the property — disqualifies objective judgment.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TALK TRACKS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Talk</span> <span class="rest">Tracks</span></h2>
      <div class="nu-section-rule"></div>
      <p class="nu-section-lede">
        Pre-written phrases Aaron can deploy verbatim. Each one controls framing without burning the relationship.
      </p>
      <div class="nu-two-col">
        <div class="nu-col-panel">
          <h4>Opening the Conversation</h4>
          <ul>
            <li>"Help me understand the seller's timeline — that shapes how I write this up."</li>
            <li>"I'm serious, I'm pre-approved, and I don't need to buy this week. Where does that leave us?"</li>
            <li>"What has the seller already said no to? I'd rather not waste anybody's time."</li>
          </ul>
        </div>
        <div class="nu-col-panel">
          <h4>Defending the Offer</h4>
          <ul>
            <li>"My number is built from three comps and a contractor's punch list — I can share both."</li>
            <li>"I can move on terms, but the price is tied to the inspection findings."</li>
            <li>"If we can't get there, I understand — send me your best counter and I'll give you a yes or a no by Friday."</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PRE-NEGOTIATION CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first-word">Pre-Offer</span> <span class="rest">Checklist</span></h2>
      <div class="nu-section-rule"></div>
      <p class="nu-section-lede">
        Every item must be ✔ before the first written offer is submitted. Skipping any of these
        hands leverage to the seller.
      </p>
      <div class="nu-checklist">
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Full MLS listing sheet obtained</span>
            <span class="nu-check-sub">Price history, prior listings, days on market, disclosures.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Three comparable sales within 12 months pulled</span>
            <span class="nu-check-sub">Same zip / estate tier / 6,000–8,000 sq ft band.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Tax assessor record &amp; current taxes verified</span>
            <span class="nu-check-sub">County assessor site + projected millage.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Contractor walk-through scheduled</span>
            <span class="nu-check-sub">Roof, HVAC, foundation, plumbing, electrical written estimate.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Pre-approval or proof of funds letter in hand</span>
            <span class="nu-check-sub">Renasant Bank — Patrick Lavette contact.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Title company lined up</span>
            <span class="nu-check-sub">Pre-order preliminary title search before offer acceptance.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Opening / Target / Walk-Away numbers locked in writing</span>
            <span class="nu-check-sub">Shared only with Aaron's buyer's agent — nobody else.</span>
          </div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-check-box"></div>
          <div>
            <span class="nu-check-label">Earnest money &amp; escrow terms drafted</span>
            <span class="nu-check-sub">Refundable during inspection &amp; appraisal contingency periods.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT ACTIONS -->
    <section class="nu-section" style="margin-bottom: 12px;">
      <h2 class="nu-section-title"><span class="first-word">Next</span> <span class="rest">Actions</span></h2>
      <div class="nu-section-rule"></div>
      <div class="nu-two-col">
        <div class="nu-col-panel">
          <h4>This Week</h4>
          <ul>
            <li>Confirm asking price, days on market, and seller motivation with listing agent.</li>
            <li>Pull three verified comparable sales and condense into a one-page valuation.</li>
            <li>Set Opening / Target / Walk-Away in writing — do not share the last two externally.</li>
            <li>Confirm financing letter with Patrick Lavette at Renasant Bank.</li>
          </ul>
        </div>
        <div class="nu-col-panel">
          <h4>Before First Offer</h4>
          <ul>
            <li>Complete contractor walk-through with written repair estimate.</li>
            <li>Order preliminary title search through chosen closing attorney.</li>
            <li>Draft written opening offer with inspection &amp; appraisal contingencies.</li>
            <li>Rehearse talk tracks — Aaron delivers the offer personally, in writing.</li>
          </ul>
        </div>
      </div>
      <div class="nu-callout">
        <div class="nu-callout-label">Owner's Note — Aaron C. Norris</div>
        <div class="nu-callout-body">
          This acquisition is a Norris Utilities® decision, driven by the same discipline
          used on every equipment and real-property decision we've made since 2021:
          verify the truth, write the numbers down, walk if the math breaks.
          Patience wins estate deals — and Norris Utilities® has the patience.
        </div>
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
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-meta">
    Negotiation Brief — 4505 Buttewoods Estate Acquisition · Internal Use · Norris Utilities®
  </div>
</footer>

</body>
</html>