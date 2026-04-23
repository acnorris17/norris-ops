<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Brief — 4505 Buttewoods Estate</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet">
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
      --nu-success: #2D7A3E;
      --nu-warning: #C9721F;
      --nu-danger: #B8312F;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
    .nu-header-inner { position: relative; z-index: 2; }
    .nu-phoenix {
      width: 7%;
      max-width: 90px;
      margin: 0 auto 12px;
      opacity: 0.95;
    }
    .nu-phoenix svg { width: 100%; height: auto; }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.03em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* PAGE TITLE STRIP */
    .page-title-strip {
      background: var(--nu-white);
      padding: 40px 40px 20px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .page-eyebrow {
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 6px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* MAIN */
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 32px 80px;
    }

    /* SECTION TITLE */
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title span:first-child { color: var(--nu-blue); }
    .section-title span:last-child { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SUMMARY CARD */
    .property-summary {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      overflow: hidden;
      margin-bottom: 40px;
    }
    .property-summary-header {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.4rem;
      letter-spacing: 0.01em;
    }
    .property-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 4px;
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
    }
    .property-fact {
      padding: 22px 24px;
      border-right: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .property-fact:last-child { border-right: none; }
    .property-fact-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .property-fact-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .property-fact-note {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* ALERT BANNER */
    .alert {
      display: flex;
      gap: 16px;
      background: #FFF5EC;
      border-left: 5px solid var(--nu-warning);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .alert-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .alert-body strong {
      display: block;
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .alert-body p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* LEVERAGE CARDS */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    .leverage-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-top: 4px solid var(--nu-blue);
    }
    .leverage-card.high { border-top-color: var(--nu-danger); }
    .leverage-card.medium { border-top-color: var(--nu-warning); }
    .leverage-card.info { border-top-color: var(--nu-cyan); }
    .leverage-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 12px;
    }
    .leverage-tag.high { background: #FCE8E7; color: var(--nu-danger); }
    .leverage-tag.medium { background: #FFF0E0; color: var(--nu-warning); }
    .leverage-tag.info { background: #E0F7FF; color: #006F8C; }
    .leverage-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .leverage-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .leverage-card .dollar {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }

    /* PRICE LADDER */
    .price-ladder {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      overflow: hidden;
      margin-bottom: 20px;
    }
    .price-row {
      display: grid;
      grid-template-columns: 140px 1fr 180px;
      align-items: center;
      padding: 20px 28px;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 20px;
    }
    .price-row:last-child { border-bottom: none; }
    .price-row.highlight { background: #F0F7FF; border-left: 5px solid var(--nu-blue); }
    .price-step {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .price-label {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
    }
    .price-label small {
      display: block;
      font-weight: 400;
      color: var(--nu-body-text);
      font-size: 0.85rem;
      margin-top: 2px;
    }
    .price-value {
      text-align: right;
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-navy);
      font-variant-numeric: tabular-nums;
    }
    .price-value small {
      display: block;
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* ACTION LIST */
    .action-list {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 8px 0;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .action-item {
      display: grid;
      grid-template-columns: 40px 1fr auto;
      gap: 16px;
      padding: 18px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: flex-start;
    }
    .action-item:last-child { border-bottom: none; }
    .action-num {
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .action-body h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .action-body p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .action-when {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      white-space: nowrap;
      padding-top: 6px;
    }

    /* CONTINGENCY BOX */
    .contingency-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001155 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 32px 36px;
      margin-bottom: 20px;
    }
    .contingency-box h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .contingency-box ul {
      list-style: none;
    }
    .contingency-box li {
      padding: 10px 0 10px 28px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .contingency-box li:last-child { border-bottom: none; }
    .contingency-box li::before {
      content: '';
      position: absolute;
      left: 0; top: 18px;
      width: 14px; height: 14px;
      background: var(--nu-cyan);
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    /* SCRIPT */
    .script-block {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      margin-bottom: 18px;
      border-radius: 0 8px 8px 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .script-block .speaker {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .script-block p {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      font-style: italic;
    }
    .script-block p:last-child { margin-bottom: 0; }

    /* WALK-AWAY */
    .walkaway {
      background: #FCE8E7;
      border: 2px dashed var(--nu-danger);
      border-radius: 10px;
      padding: 24px 28px;
      margin-bottom: 20px;
      text-align: center;
    }
    .walkaway h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-danger);
      margin-bottom: 10px;
      letter-spacing: 0.04em;
    }
    .walkaway p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      max-width: 720px;
      margin: 0 auto;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .page-title { font-size: 1.7rem; }
      main { padding: 32px 18px 60px; }
      .property-fact { border-right: none; }
      .price-row { grid-template-columns: 1fr; gap: 8px; padding: 18px 22px; }
      .price-value { text-align: left; }
      .action-item { grid-template-columns: 40px 1fr; }
      .action-when { grid-column: 1 / -1; padding-top: 0; padding-left: 56px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-phoenix">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <section class="page-title-strip">
    <div class="page-eyebrow">Action Brief · Personal · Confidential</div>
    <h1 class="page-title">Negotiate <span>4505 Buttewoods</span> Estate Purchase</h1>
    <p class="page-subtitle">7,098 sq ft estate · Pre-close negotiation strategy, leverage points, and target pricing built around the disclosed water-intrusion issue and H2O Waterproofing follow-up.</p>
  </section>

  <main>

    <div class="property-summary">
      <div class="property-summary-header">
        <div class="property-address">4505 Buttewoods Drive</div>
        <div class="property-tag">Under Negotiation</div>
      </div>
      <div class="property-grid">
        <div class="property-fact">
          <div class="property-fact-label">Living Area</div>
          <div class="property-fact-value">7,098 sq ft</div>
          <div class="property-fact-note">Per listing — verify in appraisal</div>
        </div>
        <div class="property-fact">
          <div class="property-fact-label">Property Type</div>
          <div class="property-fact-value">Estate / Single-Family</div>
          <div class="property-fact-note">High-end residential</div>
        </div>
        <div class="property-fact">
          <div class="property-fact-label">Known Issue</div>
          <div class="property-fact-value">Water Intrusion</div>
          <div class="property-fact-note">Disclosure gap confirmed</div>
        </div>
        <div class="property-fact">
          <div class="property-fact-label">Stage</div>
          <div class="property-fact-value">Pre-Close</div>
          <div class="property-fact-note">Leverage window open</div>
        </div>
      </div>
    </div>

    <div class="alert">
      <div class="alert-icon">!</div>
      <div class="alert-body">
        <strong>Disclosure Gap — Primary Leverage</strong>
        <p>The water intrusion issue was omitted from the original seller disclosure. That omission is the single strongest negotiation lever on this deal. Anchor every counter to a written remediation scope from H2O Waterproofing — not a verbal estimate.</p>
      </div>
    </div>

    <h2 class="section-title"><span>Negotiation </span><span>Leverage Map</span></h2>

    <div class="leverage-grid">
      <div class="leverage-card high">
        <span class="leverage-tag high">High Leverage</span>
        <h3>Water Intrusion — Disclosure Omission</h3>
        <p>Seller failed to disclose the water intrusion issue. In Alabama, a known latent defect that is concealed gives the buyer grounds to reprice, require repair, or walk without penalty.</p>
        <span class="dollar">Price anchor: H2O written quote</span>
      </div>
      <div class="leverage-card high">
        <span class="leverage-tag high">High Leverage</span>
        <h3>H2O Waterproofing Written Scope</h3>
        <p>Call H2O Waterproofing before closing. Get the remediation scope, warranty terms, and dollar figure in writing. A signed estimate anchors the price-reduction ask.</p>
        <span class="dollar">Target: full scope + transferable warranty</span>
      </div>
      <div class="leverage-card medium">
        <span class="leverage-tag medium">Medium Leverage</span>
        <h3>Inspection Period</h3>
        <p>A second inspection focused on moisture mapping, crawl space, foundation seal, and roof-to-wall flashings creates a documented paper trail of the defect's scope.</p>
        <span class="dollar">Cost: ~$500–$1,200 inspection</span>
      </div>
      <div class="leverage-card medium">
        <span class="leverage-tag medium">Medium Leverage</span>
        <h3>Days on Market</h3>
        <p>At a 7,098 sq ft price point, the buyer pool is small. Every day on market strengthens the position. Don't rush a counter — let silence work.</p>
        <span class="dollar">Use time as free leverage</span>
      </div>
      <div class="leverage-card info">
        <span class="leverage-tag info">Supporting</span>
        <h3>Comparable Sales</h3>
        <p>Pull comps of estate-size homes with remediated water damage in the same ZIP. Adjusted comps justify a lower anchor and counter any "but the list price is fair" pushback.</p>
        <span class="dollar">Data: MLS adjusted comps</span>
      </div>
      <div class="leverage-card info">
        <span class="leverage-tag info">Supporting</span>
        <h3>Financing &amp; Appraisal</h3>
        <p>A known water issue often triggers appraiser adjustments and lender repair requirements. Mention the appraisal risk to the listing agent — it is the seller's problem, not yours.</p>
        <span class="dollar">Shift risk back to seller</span>
      </div>
    </div>

    <h2 class="section-title"><span>Target </span><span>Price Ladder</span></h2>

    <div class="price-ladder">
      <div class="price-row">
        <div class="price-step">Step 1</div>
        <div class="price-label">Opening Ask — Full List
          <small>Used only as reference anchor; never paid at this price given the defect.</small>
        </div>
        <div class="price-value">List Price
          <small>Reference only</small>
        </div>
      </div>
      <div class="price-row">
        <div class="price-step">Step 2</div>
        <div class="price-label">First Counter — List minus H2O Quote + Contingency
          <small>Subtract the H2O written scope. Add 15% contingency cushion for scope creep during repair.</small>
        </div>
        <div class="price-value">−(Quote × 1.15)
          <small>Credit at closing</small>
        </div>
      </div>
      <div class="price-row highlight">
        <div class="price-step">Step 3</div>
        <div class="price-label">Target Landing Zone
          <small>List price reduced by full H2O scope, plus a disclosure penalty of 1.5% of list price for the omission.</small>
        </div>
        <div class="price-value">−(Quote + 1.5%)
          <small>Preferred outcome</small>
        </div>
      </div>
      <div class="price-row">
        <div class="price-step">Step 4</div>
        <div class="price-label">Floor Offer
          <small>Absolute minimum acceptable — if seller won't meet here, walk. Full H2O scope only, no extras.</small>
        </div>
        <div class="price-value">−(Quote only)
          <small>Walk if refused</small>
        </div>
      </div>
      <div class="price-row">
        <div class="price-step">Walk</div>
        <div class="price-label">Walk-Away Trigger
          <small>No signed repair credit or no transferable H2O warranty — terminate under inspection contingency.</small>
        </div>
        <div class="price-value">$0
          <small>No deal</small>
        </div>
      </div>
    </div>

    <h2 class="section-title"><span>Action </span><span>Sequence</span></h2>

    <div class="action-list">
      <div class="action-item">
        <div class="action-num">1</div>
        <div class="action-body">
          <h4>Call H2O Waterproofing — Get Written Scope</h4>
          <p>Request an on-site inspection, a written remediation scope, dollar figure, and transferable warranty terms. Confirm warranty survives a change of ownership.</p>
        </div>
        <div class="action-when">Today</div>
      </div>
      <div class="action-item">
        <div class="action-num">2</div>
        <div class="action-body">
          <h4>Document the Disclosure Omission</h4>
          <p>Save a copy of the original seller disclosure form. Mark every page where the water issue should have been noted. Keep date-stamped copies of every email and text with the listing agent.</p>
        </div>
        <div class="action-when">Today</div>
      </div>
      <div class="action-item">
        <div class="action-num">3</div>
        <div class="action-body">
          <h4>Commission a Focused Re-Inspection</h4>
          <p>Hire an independent moisture/envelope inspector. Scope: crawl space, foundation, basement or slab seal, roof-to-wall flashing, window and door head flashings, grading and drainage.</p>
        </div>
        <div class="action-when">This Week</div>
      </div>
      <div class="action-item">
        <div class="action-num">4</div>
        <div class="action-body">
          <h4>Pull Comparable Sales</h4>
          <p>Request MLS comps from the buyer's agent for estate-size homes within the same ZIP with remediated water damage. Adjusted values anchor the first counter.</p>
        </div>
        <div class="action-when">This Week</div>
      </div>
      <div class="action-item">
        <div class="action-num">5</div>
        <div class="action-body">
          <h4>Submit the First Written Counter</h4>
          <p>Present H2O's written scope, the re-inspection report, and the adjusted comps as a single package. Ask for the full remediation credit at closing — not a reduced list price. Credits preserve the buyer's loan basis and survive the appraisal.</p>
        </div>
        <div class="action-when">Day 7</div>
      </div>
      <div class="action-item">
        <div class="action-num">6</div>
        <div class="action-body">
          <h4>Hold the Line — Let Silence Work</h4>
          <p>If the seller rejects the first counter, wait 48 hours before responding. At this price point every day on market shifts leverage toward the buyer.</p>
        </div>
        <div class="action-when">Day 8–10</div>
      </div>
      <div class="action-item">
        <div class="action-num">7</div>
        <div class="action-body">
          <h4>Close or Walk</h4>
          <p>If the seller hits the landing zone with a signed amendment and transferable H2O warranty — close. If they refuse the floor offer — terminate cleanly under the inspection contingency and recover earnest money.</p>
        </div>
        <div class="action-when">Day 10–14</div>
      </div>
    </div>

    <h2 class="section-title"><span>Required </span><span>Contract Contingencies</span></h2>

    <div class="contingency-box">
      <h3>Do Not Sign an Amendment Without These</h3>
      <ul>
        <li>Remediation credit at closing equal to the full H2O written scope.</li>
        <li>Transferable H2O Waterproofing warranty naming the buyer as covered party.</li>
        <li>Right to a final walk-through with moisture meter within 48 hours of closing.</li>
        <li>Seller retention of liability for any undisclosed defect discovered after closing for 12 months.</li>
        <li>Written acknowledgement from the seller of the prior water intrusion event and its scope.</li>
        <li>Earnest money released immediately if the seller refuses any of the above.</li>
      </ul>
    </div>

    <h2 class="section-title"><span>Talking </span><span>Points — Listing Agent</span></h2>

    <div class="script-block">
      <div class="speaker">Opening</div>
      <p>"We are still committed to the property, but the water intrusion issue was omitted from the disclosure. That changes the math. Before we go further, we need H2O Waterproofing's written scope in hand and a credit at closing that reflects it."</p>
    </div>

    <div class="script-block">
      <div class="speaker">When Pushed on Price</div>
      <p>"A credit at closing is cleaner than a price reduction for everyone. The bank sees the full list price on the contract. The appraiser isn't going to miss the moisture evidence — this way we close on schedule."</p>
    </div>

    <div class="script-block">
      <div class="speaker">When Given Resistance</div>
      <p>"We want to close. The alternative is we exit under inspection and the disclosure has to be refiled for the next buyer. That slows this down for everyone. The written scope anchors a fair number. Let's use it."</p>
    </div>

    <div class="script-block">
      <div class="speaker">Closing the Call</div>
      <p>"Send over the amendment by end of week. If we're aligned, we close on schedule. If not, we'll need to re-evaluate. Either way, we'll have a decision by Friday."</p>
    </div>

    <div class="walkaway">
      <h3>Walk-Away Discipline</h3>
      <p>There is nothing in this deal worth buying at full price with a concealed water defect. If the seller refuses the full H2O scope as a closing credit and will not provide a transferable warranty — terminate under the inspection contingency. A clean exit protects the capital for the right deal.</p>
    </div>

  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>