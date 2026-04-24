<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --nu-danger: #C62828;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--nu-blue);
      margin-bottom: 4px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      margin-bottom: 28px;
      padding-bottom: 16px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    /* PROPERTY SUMMARY HERO CARD */
    .property-hero {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border-radius: 12px;
      padding: 36px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-left: 6px solid var(--nu-cyan);
    }
    .property-hero-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 32px;
      align-items: start;
    }
    .property-address {
      font-size: 1.65rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.25;
    }
    .property-locale {
      color: var(--nu-body-text);
      font-size: 1rem;
      margin-bottom: 20px;
    }
    .property-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 20px;
    }
    .property-meta-item {
      display: flex;
      flex-direction: column;
    }
    .property-meta-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-body-text);
      margin-bottom: 4px;
      font-weight: 700;
    }
    .property-meta-value {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .ask-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 24px;
      border-radius: 10px;
      text-align: center;
    }
    .ask-box-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .ask-box-value {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-white);
      margin-bottom: 4px;
    }
    .ask-box-sub {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.75);
      font-style: italic;
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-top: 16px;
    }
    .offer-step {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px 16px;
      text-align: center;
      position: relative;
      transition: transform 0.2s ease;
    }
    .offer-step.opening { border-color: var(--nu-warning); }
    .offer-step.first { border-color: #E0A800; }
    .offer-step.second { border-color: var(--nu-cyan); }
    .offer-step.walk { border-color: var(--nu-danger); background: #fff5f5; }
    .offer-step-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .offer-step-amount {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .offer-step-note {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      line-height: 1.4;
    }

    /* LEVERAGE CARDS */
    .leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .leverage-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .leverage-card-num {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-bottom: 12px;
    }
    .leverage-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .leverage-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* TERMS TABLE */
    .terms-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .terms-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
    }
    .terms-table th {
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .terms-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .terms-table tr:last-child td { border-bottom: none; }
    .terms-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .terms-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }

    /* TALKING POINTS */
    .script-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 0 10px 10px 0;
      padding: 20px 24px;
      margin-bottom: 14px;
    }
    .script-block strong {
      color: var(--nu-blue);
      display: block;
      margin-bottom: 6px;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .script-block p {
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 14px 18px 14px 48px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-blue); }

    /* RED FLAG BOX */
    .red-flag {
      background: #fff5f5;
      border: 2px solid var(--nu-danger);
      border-radius: 10px;
      padding: 22px 26px;
      margin-top: 24px;
    }
    .red-flag h4 {
      color: var(--nu-danger);
      font-weight: 900;
      margin-bottom: 10px;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .red-flag ul {
      margin-left: 20px;
      color: var(--nu-dark-text);
      font-size: 0.92rem;
      line-height: 1.7;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-confidential {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero-grid { grid-template-columns: 1fr; }
      .offer-ladder { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 24px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-section-title { font-size: 1.4rem; }
      .property-hero { padding: 24px; }
      .property-address { font-size: 1.3rem; }
      .ask-box-value { font-size: 1.6rem; }
      .offer-ladder { grid-template-columns: 1fr; }
      .terms-table th, .terms-table td { padding: 10px 12px; font-size: 0.85rem; }
      .terms-table td:first-child { width: 40%; }
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
    <div class="nu-doc-label">Estate Acquisition Playbook</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PROPERTY HERO -->
      <div class="property-hero">
        <div class="property-hero-grid">
          <div>
            <div class="property-address">4505 Buttewoods — 7,098 sq ft Estate</div>
            <div class="property-locale">Single-family estate acquisition target · Off-market negotiation</div>
            <div class="property-meta">
              <div class="property-meta-item">
                <span class="property-meta-label">Square Footage</span>
                <span class="property-meta-value">7,098 sq ft</span>
              </div>
              <div class="property-meta-item">
                <span class="property-meta-label">Buyer</span>
                <span class="property-meta-value">A. Norris (cash)</span>
              </div>
              <div class="property-meta-item">
                <span class="property-meta-label">Posture</span>
                <span class="property-meta-value">Patient · Disciplined</span>
              </div>
            </div>
          </div>
          <div class="ask-box">
            <div class="ask-box-label">Listed / Expected Ask</div>
            <div class="ask-box-value">$900,000</div>
            <div class="ask-box-sub">Anchor point for counter-offer</div>
          </div>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Offer <span>Ladder</span></h2>
        <p class="nu-section-subtitle">Pre-committed price points. Do not improvise at the table — walk through these in order and stop when the seller accepts.</p>
        <div class="offer-ladder">
          <div class="offer-step opening">
            <div class="offer-step-label">Opening</div>
            <div class="offer-step-amount">$780,000</div>
            <div class="offer-step-note">Justified by comps &amp; deferred maintenance. Leaves room.</div>
          </div>
          <div class="offer-step first">
            <div class="offer-step-label">First Counter</div>
            <div class="offer-step-amount">$815,000</div>
            <div class="offer-step-note">Move only if seller counters in writing.</div>
          </div>
          <div class="offer-step second">
            <div class="offer-step-label">Best &amp; Final</div>
            <div class="offer-step-amount">$835,000</div>
            <div class="offer-step-note">Cash, 21-day close, no seller concessions.</div>
          </div>
          <div class="offer-step walk">
            <div class="offer-step-label">Walk-Away</div>
            <div class="offer-step-amount">$850,000</div>
            <div class="offer-step-note">Above this number, the deal does not work.</div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Leverage <span>Points</span></h2>
        <p class="nu-section-subtitle">Every dollar of reduction must be tied to a specific, documented reason. Lead with these.</p>
        <div class="leverage-grid">
          <div class="leverage-card">
            <span class="leverage-card-num">1</span>
            <h4>Cash Offer, No Financing Contingency</h4>
            <p>Elimination of lender risk, appraisal risk, and 30–45 days of waiting. Worth 3–5% against list in most private-transaction negotiations.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">2</span>
            <h4>Days on Market &amp; Price History</h4>
            <p>Pull the full listing history: original ask, reductions, withdrawals, re-lists. Each reduction is a data point that the ask is above market.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">3</span>
            <h4>Comparable Sales — Past 180 Days</h4>
            <p>Target 3–5 closed comps within 1 mile, same school zone, comparable square footage. Present a one-page comp sheet at the offer meeting.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">4</span>
            <h4>Deferred Maintenance &amp; Inspection Findings</h4>
            <p>Roof age, HVAC units, foundation, windows, pool equipment. Get written estimates — a $40k roof quote is a $40k negotiation tool.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">5</span>
            <h4>Carrying Costs for the Seller</h4>
            <p>Taxes, insurance, utilities, HOA, and mortgage interest accrue monthly the home sits. A fast, clean close saves them real money.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">6</span>
            <h4>Short Close Window — 21 Days</h4>
            <p>Offer a calendar-certain close without financing hurdles. Sellers often trade price for certainty and speed.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">7</span>
            <h4>No Seller Concessions Requested</h4>
            <p>No credits for closing costs, no repair credits, no leasebacks. Clean, simple, signable.</p>
          </div>
          <div class="leverage-card">
            <span class="leverage-card-num">8</span>
            <h4>Patience — The Best Leverage</h4>
            <p>Willingness to walk is the strongest position at the table. This is an investment property, not an emotional one. No home is irreplaceable.</p>
          </div>
        </div>
      </section>

      <!-- DEAL TERMS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Deal <span>Terms — Non-Negotiable</span></h2>
        <p class="nu-section-subtitle">These are the terms that accompany the offer. Do not weaken them during the conversation.</p>
        <table class="terms-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Financing</td>
              <td>All cash. Proof of funds from Renasant Bank (Patrick Lavette) available on request.</td>
            </tr>
            <tr>
              <td>Earnest Money</td>
              <td>$10,000, held by title company, non-refundable after inspection period.</td>
            </tr>
            <tr>
              <td>Inspection Period</td>
              <td>10 calendar days. Right to cancel or renegotiate based on written findings.</td>
            </tr>
            <tr>
              <td>Close Date</td>
              <td>21 calendar days from binding agreement. No extensions except for title defects.</td>
            </tr>
            <tr>
              <td>Seller Concessions</td>
              <td>None requested. Buyer pays own closing costs.</td>
            </tr>
            <tr>
              <td>Repairs / Credits</td>
              <td>Property sold as-is. Any material inspection findings = price adjustment, not repair credit.</td>
            </tr>
            <tr>
              <td>Possession</td>
              <td>At closing. No post-closing occupancy. No rent-back.</td>
            </tr>
            <tr>
              <td>Offer Expiration</td>
              <td>48 hours from delivery. Written response required.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Talking <span>Points — Aaron's Voice</span></h2>
        <p class="nu-section-subtitle">Direct, warm, genuine. Never pushy. Never apologetic. Lead with the ask.</p>

        <div class="script-block">
          <strong>Opening the conversation</strong>
          <p>"I've done my homework on the property and the street. I'm a serious cash buyer, I can close in 21 days, and I'd like to put a real number in front of you today. Can we walk through what I'm seeing?"</p>
        </div>

        <div class="script-block">
          <strong>Presenting $780,000</strong>
          <p>"Based on closed comps in the last 180 days and the work the home will need in the first two years, $780,000 is a fair number for a clean, cash, 21-day close. That's my opening — I know you'll want to talk about it."</p>
        </div>

        <div class="script-block">
          <strong>Anchoring on certainty</strong>
          <p>"I'm not asking you to credit me anything. No financing contingency, no appraisal, no repair credits. You know exactly what you're walking to the closing table with. That certainty is worth real money to you."</p>
        </div>

        <div class="script-block">
          <strong>If they push back hard on price</strong>
          <p>"I hear you. I'm not trying to steal it — I'm trying to buy it at a number that works for both of us. What would it take on your side to get this done this month?"</p>
        </div>

        <div class="script-block">
          <strong>Walk-away line (deliver calmly)</strong>
          <p>"I'd love to make this work, but above $850,000 the math doesn't work for me. If we can't land there today, I understand — and my number holds for 48 hours if anything changes on your end."</p>
        </div>
      </section>

      <!-- PRE-MEETING CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Pre-Meeting <span>Checklist</span></h2>
        <p class="nu-section-subtitle">Complete every item before sitting down at the table.</p>
        <ul class="checklist">
          <li><strong>Proof of funds letter</strong> — dated within 30 days, Renasant Bank (Patrick Lavette)</li>
          <li><strong>Comparable sales package</strong> — 3–5 closed comps, last 180 days, one-page printout</li>
          <li><strong>Listing history pull</strong> — original ask, every reduction, days on market, prior withdrawals</li>
          <li><strong>Contractor estimates</strong> — roof, HVAC, foundation, any visible deferred maintenance</li>
          <li><strong>Title company selected</strong> — pre-aligned so close date is credible, not theoretical</li>
          <li><strong>Purchase agreement drafted</strong> — ready to deliver same day with the offer</li>
          <li><strong>Walk-away number confirmed</strong> — $850,000. Written on a card in the folder. Do not exceed.</li>
          <li><strong>Spouse / counsel alignment</strong> — decision authority clear before the meeting starts</li>
        </ul>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Red <span>Flags — Pause &amp; Reassess</span></h2>
        <p class="nu-section-subtitle">If any of the following show up during negotiation, take a break before signing anything.</p>
        <div class="red-flag">
          <h4>Walk back to the car if you see:</h4>
          <ul>
            <li>Seller refusing to share the full listing and price-history documentation</li>
            <li>Pressure to waive the inspection period or shorten it below 10 days</li>
            <li>Any request to release earnest money before the inspection contingency expires</li>
            <li>Undisclosed liens, easements, HOA disputes, or boundary questions surfacing late</li>
            <li>A verbal counter instead of a written counter — always require writing</li>
            <li>An emotional push to decide "today" that skips a second look at the comps</li>
            <li>Any number above $850,000 that is being rationalized with feelings rather than data</li>
          </ul>
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
    <div class="nu-footer-confidential">Confidential — Personal Acquisition Strategy</div>
  </footer>

</body>
</html>