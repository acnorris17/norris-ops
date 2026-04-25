<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #1F7A3A;
      --nu-warning: #C9620E;
      --nu-danger: #B22222;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
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
      font-size: 1.25rem;
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
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOC HEADER STRIP */
    .doc-strip {
      background: var(--nu-white);
      border-bottom: 3px solid var(--nu-blue);
      padding: 22px 40px;
      text-align: center;
    }
    .doc-strip-eyebrow {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .doc-strip-title {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
    }
    .doc-strip-meta {
      margin-top: 8px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      letter-spacing: 0.04em;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 0 70px;
    }
    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .section-block { margin-bottom: 44px; }

    /* PROPERTY HERO */
    .property-hero {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      padding: 36px 40px;
      margin-bottom: 36px;
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 36px;
      align-items: center;
    }
    .property-hero h2 {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .property-hero .address {
      font-size: 1.05rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: 0.01em;
    }
    .property-hero p {
      color: var(--nu-body-text);
      font-size: 0.98rem;
      line-height: 1.7;
    }
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .stat-tile {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
      border: 1px solid #d4dafa;
      border-left: 4px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 6px;
    }
    .stat-tile .label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .stat-tile .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .stat-tile .sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .card-header .num {
      width: 34px; height: 34px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }
    .card-header h3 {
      font-size: 1.18rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.005em;
    }

    /* GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    /* PRICE LADDER */
    .price-ladder {
      background: var(--nu-white);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .ladder-row {
      display: grid;
      grid-template-columns: 200px 1fr 180px;
      align-items: center;
      padding: 18px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 18px;
    }
    .ladder-row:last-child { border-bottom: none; }
    .ladder-row.highlight {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
      border-left: 5px solid var(--nu-blue);
    }
    .ladder-label {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .ladder-label .sub {
      display: block;
      font-weight: 400;
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }
    .ladder-rationale {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .ladder-amount {
      text-align: right;
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      letter-spacing: -0.01em;
    }
    .ladder-amount .ppsf {
      display: block;
      font-size: 0.72rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* LISTS */
    .nu-list {
      list-style: none;
      padding: 0;
    }
    .nu-list li {
      padding: 10px 0 10px 28px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-list li:last-child { border-bottom: none; }
    .nu-list li::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 18px;
      width: 8px;
      height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }
    .nu-list li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .check-list { list-style: none; padding: 0; }
    .check-list li {
      padding: 10px 0 10px 32px;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.55;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-list li:last-child { border-bottom: none; }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 13px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
    }

    /* CONTINGENCY GRID */
    .contingency-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }
    .contingency-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 20px 22px;
    }
    .contingency-tile h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .contingency-tile .days {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }
    .contingency-tile p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
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
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding: 12px 0 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 18px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 4px rgba(0,0,255,0.08);
    }
    .timeline-day {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-action {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
      padding: 28px 34px;
      border-radius: 10px;
      margin: 30px 0;
      position: relative;
    }
    .callout::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 5px;
      background: var(--nu-cyan);
      border-radius: 10px 0 0 10px;
    }
    .callout h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 1rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.92);
    }
    .callout p strong { color: var(--nu-white); }

    /* WALKAWAY */
    .walkaway {
      background: linear-gradient(135deg, #fff5f0 0%, #ffe8db 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 8px;
      margin-top: 18px;
    }
    .walkaway h4 {
      font-size: 0.98rem;
      font-weight: 900;
      color: var(--nu-warning);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .walkaway p {
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
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
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero { grid-template-columns: 1fr; gap: 24px; padding: 28px 24px; }
      .grid-2, .grid-3, .contingency-grid { grid-template-columns: 1fr; }
      .ladder-row { grid-template-columns: 1fr; gap: 8px; padding: 18px; }
      .ladder-amount { text-align: left; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-strip { padding: 18px 20px; }
      .doc-strip-title { font-size: 1.4rem; }
      .container { padding: 0 18px; }
      .nu-card { padding: 22px 20px; }
      .property-hero h2 { font-size: 1.6rem; }
      .hero-stats { grid-template-columns: 1fr 1fr; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .property-hero, .price-ladder { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
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
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC STRIP -->
  <div class="doc-strip">
    <div class="doc-strip-eyebrow">reMarkable Action Item · Negotiation Strategy</div>
    <div class="doc-strip-title">4505 Buttewoods — Estate Acquisition Plan</div>
    <div class="doc-strip-meta">Prepared for Aaron C. Norris · April 24, 2026 · Confidential / Internal</div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div>
          <h2>7,098 sq ft Estate Acquisition</h2>
          <div class="address">4505 Buttewoods · Birmingham, AL Metro</div>
          <p>This document captures the negotiation framework, price ladder, contingencies, and 30-day execution timeline for the 4505 Buttewoods estate. Use it as the working playbook from the first agent conversation through the closing table. Every number, deadline, and walkaway trigger below is held by Aaron — nothing moves without his approval.</p>
        </div>
        <div class="hero-stats">
          <div class="stat-tile">
            <div class="label">Square Feet</div>
            <div class="value">7,098</div>
            <div class="sub">Heated &amp; cooled</div>
          </div>
          <div class="stat-tile">
            <div class="label">Address</div>
            <div class="value">4505</div>
            <div class="sub">Buttewoods</div>
          </div>
          <div class="stat-tile">
            <div class="label">Strategy</div>
            <div class="value">Cash-strong</div>
            <div class="sub">Fast close, clean offer</div>
          </div>
          <div class="stat-tile">
            <div class="label">Timeline</div>
            <div class="value">30 Days</div>
            <div class="sub">Offer → close</div>
          </div>
        </div>
      </div>

      <!-- SECTION 1: PRE-NEGOTIATION INTEL -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 1.</span> <span class="rest">Pre-Negotiation Intelligence</span></div>
        <div class="grid-2">
          <div class="nu-card">
            <div class="card-header">
              <div class="num">A</div>
              <h3>Comparables &amp; Market Position</h3>
            </div>
            <ul class="nu-list">
              <li><strong>Pull last 12 months of comps</strong> within 1 mile and within ±15% of 7,098 sq ft. Source: MLS via licensed agent or Zillow / Redfin price history.</li>
              <li><strong>Calculate true $/sq ft</strong> for closed sales (not list prices). Apply that rate to 7,098 sq ft to set a defensible market value.</li>
              <li><strong>Days-on-market trend</strong> — homes over 60 DOM signal seller fatigue and room to negotiate down 5–8%.</li>
              <li><strong>Active competing listings</strong> — count homes 6,000–8,500 sq ft currently for sale within 3 miles. Tight inventory weakens our leverage.</li>
              <li><strong>Tax assessor record</strong> — pull from county website. Compare last assessed value to ask. Assessment ÷ 0.85 ≈ taxable market estimate.</li>
            </ul>
          </div>

          <div class="nu-card">
            <div class="card-header">
              <div class="num">B</div>
              <h3>Seller Intelligence</h3>
            </div>
            <ul class="nu-list">
              <li><strong>Why are they selling?</strong> Estate sale, divorce, job relocation, downsizing, financial distress — each one shifts our leverage.</li>
              <li><strong>How long have they owned it?</strong> Long-time owners with low cost basis have flexibility. Recent buyers underwater do not.</li>
              <li><strong>Liens, mortgages, judgments</strong> — pull from county records. A clear-title seller closes faster.</li>
              <li><strong>Prior list/de-list cycles</strong> — repeated relistings indicate the property has been hard to move at this price.</li>
              <li><strong>Listing agent's reputation</strong> — high-volume agents push fast closes; boutique agents protect seller emotion. Match the tone accordingly.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 2: PRICE LADDER -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 2.</span> <span class="rest">Price Ladder &amp; Anchoring Framework</span></div>
        <p style="margin-bottom: 18px; font-size: 0.95rem; color: var(--nu-body-text);">A laddered offer strategy holds discipline at the table. Lock these numbers <strong>before</strong> the first call so emotion never sets the price. Replace the placeholder list price with the actual asking price once confirmed and recalculate each tier.</p>

        <div class="price-ladder">
          <div class="ladder-row">
            <div class="ladder-label">Asking Price<span class="sub">Seller's published number</span></div>
            <div class="ladder-rationale">Confirm exact MLS list price before drafting any offer. Use as the anchor — never as the starting point for our offer.</div>
            <div class="ladder-amount">100% of List<span class="ppsf">Reference only</span></div>
          </div>

          <div class="ladder-row">
            <div class="ladder-label">Opening Offer<span class="sub">First written offer</span></div>
            <div class="ladder-rationale">Submit at <strong>87–90% of list</strong> with a 48-hour response window. Frame as "cash-strong, fast close, minimal contingencies." Justify with comps from Step 1.</div>
            <div class="ladder-amount">87–90%<span class="ppsf">Anchor low, justify clearly</span></div>
          </div>

          <div class="ladder-row highlight">
            <div class="ladder-label">Target Close<span class="sub">Where we want to land</span></div>
            <div class="ladder-rationale"><strong>This is the goal.</strong> Land between <strong>92–94% of list</strong> for a typical estate transaction. Above this, we're paying retail. Below this, we're stealing it — and the seller may walk.</div>
            <div class="ladder-amount">92–94%<span class="ppsf">Win condition</span></div>
          </div>

          <div class="ladder-row">
            <div class="ladder-label">Stretch Ceiling<span class="sub">Absolute maximum</span></div>
            <div class="ladder-rationale">Only authorize this number if (a) inspection reveals no major issues and (b) two competing offers are confirmed in writing. Aaron must approve verbally before submitting.</div>
            <div class="ladder-amount">96%<span class="ppsf">Hard ceiling</span></div>
          </div>

          <div class="ladder-row">
            <div class="ladder-label">Walk-Away Line<span class="sub">No exceptions</span></div>
            <div class="ladder-rationale">If price exceeds 96% of list <strong>or</strong> total cost (price + repairs + closing + 12-month carrying) exceeds the walkaway budget, we walk. Document and move on.</div>
            <div class="ladder-amount">&gt; 96%<span class="ppsf">Disengage, document why</span></div>
          </div>
        </div>

        <div class="callout">
          <h4>Aaron's Rule of Thumb</h4>
          <p>"<strong>Lead with cash, hold a number, walk away clean.</strong>" Do not move up in increments larger than 1.5% of list per round. Never make a counter on the spot — always sleep on it, even if just by an hour.</p>
        </div>
      </div>

      <!-- SECTION 3: NEGOTIATION LEVERS -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 3.</span> <span class="rest">Beyond Price — Other Levers</span></div>
        <div class="grid-3">
          <div class="nu-card">
            <div class="card-header"><div class="num">1</div><h3>Closing Speed</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Offer 21–30 day close. For estate sellers carrying utilities and insurance, every week saved is real money. Trade speed for price reduction.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">2</div><h3>Earnest Money</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Put down 2–3% earnest. Signals commitment without overexposing capital. Hold in escrow with a neutral title company.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">3</div><h3>As-Is Language</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Offer to take property "as-is" — but <strong>preserve inspection rights and walkaway</strong>. Sellers love the phrase; we keep our protections.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">4</div><h3>Personal Property</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Negotiate inclusion of appliances, fixtures, riding mowers, equipment. Each item is value captured at no additional cash outlay.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">5</div><h3>Closing Costs</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Ask seller to cover title insurance and 50% of closing costs. Effective price reduction without changing the contract number.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">6</div><h3>Rent-Back / Possession</h3></div>
            <p style="font-size: 0.92rem; line-height: 1.6;">Offer 30-day free rent-back if seller needs time to move. Costs us nothing, and sellers will trade $5–10K of price for it.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 4: CONTINGENCIES -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 4.</span> <span class="rest">Contingencies — Required in Every Offer</span></div>
        <div class="contingency-grid">
          <div class="contingency-tile">
            <h4>Inspection Contingency</h4>
            <span class="days">10 Days</span>
            <p>Right to perform full home, structural, HVAC, roof, and termite inspections. Right to renegotiate or walk based on findings. Hire two inspectors on a 7,098 sq ft estate — one general, one specialist (foundation/roof).</p>
          </div>
          <div class="contingency-tile">
            <h4>Financing Contingency</h4>
            <span class="days">21 Days</span>
            <p>Even on a cash deal, retain a financing option clause for protection. Drop only if cash close is final and capital is liquid in operating account.</p>
          </div>
          <div class="contingency-tile">
            <h4>Appraisal Contingency</h4>
            <span class="days">14 Days</span>
            <p>Retain right to walk if appraisal comes in below 95% of contract price. Critical at this size — 7,098 sq ft properties have wide appraisal variance.</p>
          </div>
          <div class="contingency-tile">
            <h4>Title &amp; Survey</h4>
            <span class="days">15 Days</span>
            <p>Clear title certification and current survey required. Address any encroachments, easements, or unrecorded claims before closing.</p>
          </div>
          <div class="contingency-tile">
            <h4>Insurance Quote</h4>
            <span class="days">10 Days</span>
            <p>Obtain bound insurance quote within contingency window. 7,098 sq ft estates can carry surprising premiums — verify before committing.</p>
          </div>
          <div class="contingency-tile">
            <h4>HOA / Restrictions</h4>
            <span class="days">7 Days</span>
            <p>Review CC&amp;Rs, HOA dues, architectural review requirements. Confirm no pending special assessments or litigation against the association.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 5: 30-DAY TIMELINE -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 5.</span> <span class="rest">30-Day Execution Timeline</span></div>
        <div class="nu-card">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-day">Day 0 — Today</div>
              <div class="timeline-action">Engage buyer's agent &amp; pull intel</div>
              <div class="timeline-detail">Hire a buyer's agent (separate from listing agent — never dual-represent on a deal this size). Pull comps, tax records, and seller history. Confirm exact list price.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 1–2</div>
              <div class="timeline-action">Walkthrough &amp; verbal interest</div>
              <div class="timeline-detail">Tour the property. Take photos. Note any visible defects (foundation cracks, water staining, roof age, HVAC equipment age). Have agent signal "serious cash buyer" without naming a number.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 3</div>
              <div class="timeline-action">Submit opening offer (87–90% of list)</div>
              <div class="timeline-detail">Written offer with proof of funds, all six contingencies, 21-day close, 2.5% earnest. 48-hour response window. CC Aaron on every email.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 4–6</div>
              <div class="timeline-action">Counter / negotiate</div>
              <div class="timeline-detail">Expect counter at 95–98% of list. Counter back at 91–92%. Hold at 93% if pressed. Use non-price levers (closing costs, rent-back, personal property) before raising the price further.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 7</div>
              <div class="timeline-action">Contract executed — earnest deposited</div>
              <div class="timeline-detail">Sign contract. Wire 2.5% earnest to title company escrow. Inspection, appraisal, and insurance clocks all start now.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 8–17</div>
              <div class="timeline-action">Inspection period (10 days)</div>
              <div class="timeline-detail">Two inspectors. Termite letter. Sewer scope. Roof certification. If any major issue surfaces, immediately renegotiate price or walk per Step 4 contingencies.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 18–22</div>
              <div class="timeline-action">Appraisal &amp; title review</div>
              <div class="timeline-detail">Order appraisal. Review title commitment. Confirm survey. Resolve any defects in writing before clearing the appraisal contingency.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 23–27</div>
              <div class="timeline-action">Final walkthrough &amp; closing prep</div>
              <div class="timeline-detail">Final walkthrough 24–48 hours before closing — confirm property condition unchanged. Title company prepares closing disclosure. Aaron reviews every line.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-day">Day 28–30</div>
              <div class="timeline-action">Closing — keys in hand</div>
              <div class="timeline-detail">Wire balance of funds to title company morning of closing. Sign at closing table. Take possession. Change locks within 24 hours. Update insurance to active policy.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION 6: KEY QUESTIONS -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 6.</span> <span class="rest">Questions to Ask the Listing Agent</span></div>
        <div class="grid-2">
          <div class="nu-card">
            <div class="card-header"><div class="num">Q</div><h3>Seller Position</h3></div>
            <ul class="check-list">
              <li>How long has the property been on market?</li>
              <li>Has it been listed previously and de-listed?</li>
              <li>Why is the seller selling? Estate, relocation, downsizing?</li>
              <li>Has the seller already purchased another property?</li>
              <li>Are there any other offers currently on the table?</li>
              <li>What close date does the seller prefer?</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">Q</div><h3>Property Specifics</h3></div>
            <ul class="check-list">
              <li>Age of roof, HVAC, water heater, electrical panel?</li>
              <li>Any known foundation, drainage, or moisture issues?</li>
              <li>Recent renovations — permitted? Final inspection signed?</li>
              <li>What conveys with the property (appliances, fixtures)?</li>
              <li>Annual property tax bill and most recent utility costs?</li>
              <li>HOA dues, special assessments, or pending litigation?</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 7: WALKAWAY -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 7.</span> <span class="rest">Walk-Away Triggers</span></div>
        <div class="nu-card">
          <p style="margin-bottom: 16px; font-size: 0.95rem;">Discipline at the negotiation table is enforced by predetermined walkaway lines. The moment any of these is hit, disengage in writing within 24 hours. Document the reason. Move on. The deal that breaks our discipline is the deal that costs us money.</p>
          <ul class="nu-list">
            <li><strong>Price exceeds 96% of list</strong> after all counters, with no offsetting concessions on closing costs or personal property.</li>
            <li><strong>Inspection reveals structural, foundation, or roof issues</strong> exceeding 5% of contract price to repair, and seller refuses credit.</li>
            <li><strong>Appraisal comes in more than 5% below contract price</strong>, and seller will not lower price to within 2% of appraisal.</li>
            <li><strong>Title defect that cannot be cured</strong> within the contingency window — unrecorded easements, boundary disputes, lis pendens.</li>
            <li><strong>Seller refuses standard contingencies</strong> on inspection, appraisal, or title — this signals knowledge of defects.</li>
            <li><strong>Insurance premium exceeds budget</strong> by more than 25%, indicating risk profile we did not price in.</li>
          </ul>
          <div class="walkaway">
            <h4>The Discipline</h4>
            <p>Real estate is not a fair fight when emotion enters the room. The seller wants their number. We want our number. The math has to work — for the next 5, 10, 20 years of holding cost, taxes, insurance, and resale. <strong>If the math does not work, we walk. Every time. No exceptions.</strong></p>
          </div>
        </div>
      </div>

      <!-- SECTION 8: AARON'S NEXT 3 ACTIONS -->
      <div class="section-block">
        <div class="nu-section-title"><span class="first">Step 8.</span> <span class="rest">Aaron's Next 3 Actions</span></div>
        <div class="grid-3">
          <div class="nu-card">
            <div class="card-header"><div class="num">1</div><h3>Today</h3></div>
            <p style="font-size: 0.93rem; line-height: 1.6;">Confirm exact list price for 4505 Buttewoods. Pull MLS sheet. Fill in the price ladder above with real numbers (87% / 90% / 92% / 94% / 96% of list).</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">2</div><h3>This Week</h3></div>
            <p style="font-size: 0.93rem; line-height: 1.6;">Engage buyer's agent (not listing agent). Pull 12 months of comps within 1 mile and 6,000–8,500 sq ft. Verify proof-of-funds letter is ready from the bank.</p>
          </div>
          <div class="nu-card">
            <div class="card-header"><div class="num">3</div><h3>Before Offer</h3></div>
            <p style="font-size: 0.93rem; line-height: 1.6;">Walkthrough property in person. Review this document one more time. Approve final opening offer number with the buyer's agent. Then submit on Day 3.</p>
          </div>
        </div>
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
    <div class="nu-footer-meta">
      Internal negotiation strategy · 4505 Buttewoods Estate · Prepared April 24, 2026 · Confidential
    </div>
  </footer>

</body>
</html>