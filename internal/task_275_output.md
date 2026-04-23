<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterworth Estate — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0A7F3F;
      --nu-warn: #C9551A;
      --nu-danger: #A8161A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px; margin: 0 auto 12px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-meta {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 30px;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.035) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* DOC TITLE */
    .nu-doc-title {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-doc-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-doc-title h1 .nu-accent { color: var(--nu-blue); }
    .nu-doc-title .nu-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }
    .nu-property-badge {
      display: inline-block;
      margin-top: 18px;
      padding: 8px 20px;
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      line-height: 1.2;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT GRID */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .nu-snap-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-snap-value {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-snap-note {
      display: block;
      margin-top: 4px;
      font-size: 0.78rem;
      font-weight: 400;
      color: var(--nu-body-text);
    }

    /* STRATEGY COLUMN LAYOUT */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 820px) { .nu-two-col { grid-template-columns: 1fr; } }

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
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nu-card h3::before {
      content: '';
      width: 6px; height: 20px;
      background: var(--nu-blue);
      border-radius: 2px;
    }
    .nu-card p, .nu-card li {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .nu-card ul, .nu-card ol { padding-left: 20px; margin-top: 8px; }
    .nu-card li { margin-bottom: 6px; }

    /* OFFER LADDER TABLE */
    .nu-ladder {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0 12px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-ladder thead {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
    }
    .nu-ladder th {
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-ladder td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .nu-ladder tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-ladder .nu-step {
      font-weight: 900;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .nu-ladder .nu-amount {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }

    /* LEVERAGE POINTS */
    .nu-leverage-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-leverage {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
    }
    .nu-leverage .lv-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-leverage .lv-title {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-leverage p { font-size: 0.9rem; }

    /* WALK-AWAY BLOCK */
    .nu-walkaway {
      background: linear-gradient(135deg, #fff8f0 0%, #ffe8d4 100%);
      border: 2px solid var(--nu-warn);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 24px 0;
    }
    .nu-walkaway h3 {
      color: var(--nu-warn);
      font-weight: 900;
      margin-bottom: 10px;
      font-size: 1.1rem;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 8px 0;
    }
    .nu-checklist li {
      padding: 10px 10px 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 8px; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding: 6px 0 6px 30px;
      border-left: 3px solid var(--nu-cyan);
    }
    .nu-timeline-item {
      position: relative;
      margin-bottom: 20px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -39px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-timeline-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-item p { font-size: 0.93rem; }

    /* COUNTER RESPONSES */
    .nu-counter {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 14px;
      overflow: hidden;
    }
    .nu-counter-head {
      background: var(--nu-light-gray);
      padding: 12px 18px;
      font-weight: 700;
      color: var(--nu-dark-text);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-counter-head .nu-tag {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 2px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-right: 10px;
      vertical-align: middle;
    }
    .nu-counter-body {
      padding: 16px 18px;
      font-size: 0.95rem;
    }
    .nu-counter-body strong { color: var(--nu-blue); }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 28px 0;
      text-align: center;
    }
    .nu-callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 10px;
      letter-spacing: 0.03em;
    }
    .nu-callout p { color: rgba(255,255,255,0.9); font-size: 1.02rem; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.5;
    }
    .nu-conf-note {
      margin-top: 18px;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 44px 20px 60px; }
      .nu-doc-title h1 { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-ladder th, .nu-ladder td { padding: 10px 8px; font-size: 0.85rem; }
    }

    @media print {
      .nu-header, .nu-footer, .nu-callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-counter, .nu-ladder { box-shadow: none; break-inside: avoid; }
      .nu-section { break-inside: avoid; }
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
    <div class="nu-doc-meta">Internal Strategy Brief · Prepared 2026-04-23</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-doc-title">
        <h1>Negotiation Strategy —<br><span class="nu-accent">$900,000 Offer</span> on 4505 Butterworth</h1>
        <div class="nu-subtitle">
          Pre-offer positioning, offer ladder, concession framework, and walk-away discipline for the
          7,098 sq ft estate acquisition. Prepared for Aaron C. Norris, Founder &amp; CEO.
        </div>
        <div class="nu-property-badge">Target Property · 4505 Butterworth · 7,098 SQ FT Estate</div>
      </div>

      <!-- DEAL SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Deal</span> <span class="rest">Snapshot</span></h2>
        <div class="nu-snapshot">
          <div class="nu-snap-card">
            <div class="nu-snap-label">Opening Offer</div>
            <div class="nu-snap-value">$900,000<span class="nu-snap-note">Written, with proof of funds</span></div>
          </div>
          <div class="nu-snap-card">
            <div class="nu-snap-label">Property Size</div>
            <div class="nu-snap-value">7,098 SF<span class="nu-snap-note">Estate home, 4505 Butterworth</span></div>
          </div>
          <div class="nu-snap-card">
            <div class="nu-snap-label">Price per SF (Opening)</div>
            <div class="nu-snap-value">$126.80<span class="nu-snap-note">Benchmark against comps</span></div>
          </div>
          <div class="nu-snap-card">
            <div class="nu-snap-label">Walk-Away Ceiling</div>
            <div class="nu-snap-value">$960,000<span class="nu-snap-note">Hard cap — no further movement</span></div>
          </div>
          <div class="nu-snap-card">
            <div class="nu-snap-label">Earnest Money</div>
            <div class="nu-snap-value">$15,000<span class="nu-snap-note">1.67% of opening — shows seriousness</span></div>
          </div>
          <div class="nu-snap-card">
            <div class="nu-snap-label">Target Close</div>
            <div class="nu-snap-value">30–45 Days<span class="nu-snap-note">Cash / hybrid financing posture</span></div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Primary Goal</h3>
            <p>Acquire 4505 Butterworth at or below <strong>$930,000</strong> all-in, with seller-paid closing
            costs of up to <strong>$9,000</strong> and a survey + title credit folded in.</p>
          </div>
          <div class="nu-card">
            <h3>Secondary Wins</h3>
            <ul>
              <li>15-day inspection period with right to renegotiate on material defects.</li>
              <li>Seller-provided recent termite bond + HVAC service records.</li>
              <li>Fixtures, appliances, and window treatments convey.</li>
              <li>Rent-back limited to 14 days max if requested.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- LEVERAGE POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Points in Our Favor</span></h2>
        <div class="nu-leverage-grid">
          <div class="nu-leverage">
            <div class="lv-label">Buyer Profile</div>
            <div class="lv-title">Serious, Documented Buyer</div>
            <p>Proof of funds and pre-approval letter accompany the offer. No contingencies on sale of
            another property. This separates us from 80%+ of tire-kicker offers at this price point.</p>
          </div>
          <div class="nu-leverage">
            <div class="lv-label">Speed to Close</div>
            <div class="lv-title">30–45 Day Clean Close</div>
            <p>Fast, predictable close with minimal financing risk is a measurable premium for any seller
            carrying dual mortgages, probate pressure, or relocation deadlines.</p>
          </div>
          <div class="nu-leverage">
            <div class="lv-label">Market Reality</div>
            <div class="lv-title">Days on Market Work Against Seller</div>
            <p>Every 30 days on market compounds carrying cost and perceived staleness. Anchor the
            conversation to the list-to-sale trend on comparable estates in the zip code.</p>
          </div>
          <div class="nu-leverage">
            <div class="lv-label">Property Condition</div>
            <div class="lv-title">Deferred Maintenance = Price Concession</div>
            <p>Inspection items — roof age, HVAC tonnage balance, pool equipment, any settling or moisture
            flags — convert directly into dollar concessions, not emotional arguments.</p>
          </div>
          <div class="nu-leverage">
            <div class="lv-label">Financing Optionality</div>
            <div class="lv-title">Cash or Conventional</div>
            <p>Flexibility to pivot between cash-equivalent and conventional financing lets us respond to
            seller timelines without losing price leverage.</p>
          </div>
          <div class="nu-leverage">
            <div class="lv-label">No Emotional Entanglement</div>
            <div class="lv-title">Discipline on Walk-Away</div>
            <p>We have not publicly committed to this specific property. The willingness to walk is
            credible — and credibility is what closes a discount.</p>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &amp; Concession Budget</span></h2>
        <p style="margin-bottom:14px; font-size:0.95rem;">
          Stair-step the negotiation in deliberate moves. Never offer a round number twice. Decreasing
          increments signal that you are approaching your ceiling, not bluffing below it.
        </p>
        <table class="nu-ladder">
          <thead>
            <tr>
              <th>Step</th>
              <th>Our Position</th>
              <th>Amount</th>
              <th>Trigger / Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="nu-step">Step 1 — Opening</td>
              <td>Written offer, 72-hr expiration</td>
              <td class="nu-amount">$900,000</td>
              <td>Anchor the conversation. Frame as data-driven, not aggressive.</td>
            </tr>
            <tr>
              <td class="nu-step">Step 2 — First Counter</td>
              <td>Move on price, hold terms</td>
              <td class="nu-amount">$920,000</td>
              <td>If seller counters near list. $20K increment shows good faith.</td>
            </tr>
            <tr>
              <td class="nu-step">Step 3 — Split-the-Difference Trap</td>
              <td>Reject symbolic splits</td>
              <td class="nu-amount">$935,000</td>
              <td>Only if seller concedes inspection credits or appliances. Smaller increment.</td>
            </tr>
            <tr>
              <td class="nu-step">Step 4 — Final &amp; Best</td>
              <td>Explicitly labeled final</td>
              <td class="nu-amount">$950,000</td>
              <td>Paired with clean terms: waive minor contingencies, fast close.</td>
            </tr>
            <tr>
              <td class="nu-step">Step 5 — Ceiling</td>
              <td>Hard walk-away line</td>
              <td class="nu-amount">$960,000</td>
              <td>Only in exchange for seller concession &ge; $10K in credits or repairs.</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:0.88rem; color:#555; font-style:italic;">
          Concession increments shrink at every step. The pattern itself is a message: we are near the
          ceiling, and the next "no" ends the negotiation.
        </p>
      </section>

      <!-- WALK-AWAY -->
      <section class="nu-section">
        <div class="nu-walkaway">
          <h3>Walk-Away Discipline — $960,000 is the Ceiling</h3>
          <p style="margin-bottom:8px;">
            Above $960,000, or without at least one of the below seller concessions, the deal does not
            meet our return profile. Walk — quietly, respectfully, in writing. Preserve the relationship;
            sellers often come back within 30–60 days once they test the market again.
          </p>
          <ul style="padding-left:20px; margin-top:8px;">
            <li>Roof replacement credit of $8,000+, <em>or</em></li>
            <li>HVAC credit / warranty equivalent to $5,000+, <em>or</em></li>
            <li>Closing-cost contribution of $9,000+, <em>or</em></li>
            <li>30-day free rent-back converted to price credit.</li>
          </ul>
        </div>
      </section>

      <!-- COUNTER-RESPONSE SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Counter-Response</span> <span class="rest">Playbook</span></h2>

        <div class="nu-counter">
          <div class="nu-counter-head"><span class="nu-tag">Seller Says</span>"You're too far off list — not worth responding."</div>
          <div class="nu-counter-body">
            <strong>Respond:</strong> "Our offer reflects last-12-month sold comps and current days-on-market
            for estates of this footprint. We are ready to close in 30 days with funds verified. If there's a
            number where the deal works for you, we would like to see it — we are not married to list price,
            but we are serious about closing."
          </div>
        </div>

        <div class="nu-counter">
          <div class="nu-counter-head"><span class="nu-tag">Seller Says</span>"We need full list price."</div>
          <div class="nu-counter-body">
            <strong>Respond:</strong> "We understand. Before we walk, would you consider $950,000 with a 30-day
            close, as-is inspection, and $15,000 earnest money? That is a concrete, financeable path. If not,
            we wish you luck and will revisit in 60 days if the property is still available."
          </div>
        </div>

        <div class="nu-counter">
          <div class="nu-counter-head"><span class="nu-tag">Seller Says</span>"Can you move up if we cover closing costs?"</div>
          <div class="nu-counter-body">
            <strong>Respond:</strong> "Yes — if your closing contribution is at or above $9,000 and you
            include the stated appliances and window treatments, we can meet at $935,000. Above that, we
            would need something meaningful on the roof or HVAC to make the numbers work."
          </div>
        </div>

        <div class="nu-counter">
          <div class="nu-counter-head"><span class="nu-tag">Seller Says</span>"Another buyer is circling."</div>
          <div class="nu-counter-body">
            <strong>Respond:</strong> "Understood — please move on that offer if it's stronger. Our number is
            firm through Friday at 5 PM. If it falls through, we are here." <em>Never</em> raise price in
            response to an unverified competing-offer claim. Time pressure is their tool; patience is ours.
          </div>
        </div>

        <div class="nu-counter">
          <div class="nu-counter-head"><span class="nu-tag">Seller Says</span>"Can you remove the inspection contingency?"</div>
          <div class="nu-counter-body">
            <strong>Respond:</strong> "We can compress to a 10-day inspection window with an info-only
            review — we won't nickel-and-dime on cosmetics, but we reserve the right to renegotiate on
            material structural, roof, HVAC, plumbing, or moisture findings. In exchange we'll need
            $5,000 in additional seller concession."
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 0 — Pre-Offer</div>
            <div class="nu-timeline-title">Comp Pull &amp; Proof of Funds</div>
            <p>Pull last 12 months of sold comps for 6,500–8,000 SF estates in the zip code. Obtain
            current bank letter dated within 30 days. Confirm earnest-money source.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 1 — Offer Delivered</div>
            <div class="nu-timeline-title">Submit $900,000 in Writing, 72-Hour Expiration</div>
            <p>Delivered in writing through listing agent. Include proof of funds, pre-approval (if
            hybrid), and a one-paragraph buyer summary establishing credibility.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 2–3 — Silence Protocol</div>
            <div class="nu-timeline-title">Do Not Chase</div>
            <p>Do not call. Do not soften. Let the expiration do the work. A 72-hour written expiration
            is the single most effective pressure tool — provided we honor it.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 3–5 — Counter Phase</div>
            <div class="nu-timeline-title">Step 2 &amp; Step 3 Responses</div>
            <p>Work the offer ladder. Every counter must include at least one non-price concession
            request (appliances, credits, close date). Price concessions feel better when they arrive
            with something earned.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 7–10 — Final &amp; Best</div>
            <div class="nu-timeline-title">Deliver Step 4 — Label It Final</div>
            <p>Written, explicit "final and best" letter at $950,000. Include a 48-hour expiration.
            If seller counters above $960,000, acknowledge and walk.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 10–15 — Under Contract or Walk</div>
            <div class="nu-timeline-title">Binding Agreement or Exit Letter</div>
            <p>If accepted, launch inspection, title, and appraisal tracks. If walking, send a one-
            paragraph courteous exit — no burned bridges, no reopened negotiation.</p>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-date">Day 15–45 — Close</div>
            <div class="nu-timeline-title">Inspection, Appraisal, Title, Funding</div>
            <p>Target contract-to-close in 30 days; 45 days maximum. Use inspection findings as the
            last leverage window for credits — not price reductions.</p>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist (Pre-Offer)</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Property Intel</h3>
            <ul class="nu-checklist">
              <li>Pull tax-assessed value and annual trend (3-year).</li>
              <li>Confirm lot size, zoning, and any easement restrictions.</li>
              <li>Check FEMA flood zone and insurance implications.</li>
              <li>Review HOA status, dues, and any special assessments.</li>
              <li>Pull permit history — additions, roof, HVAC, electrical.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Comp &amp; Market Intel</h3>
            <ul class="nu-checklist">
              <li>6,500–8,000 SF sold comps, 12-month window, same zip.</li>
              <li>Average list-to-sale ratio on estates in the corridor.</li>
              <li>Current active listings (supply side of our position).</li>
              <li>Days-on-market trend specifically for 4505 Butterworth.</li>
              <li>Prior listing history — price cuts, relists, expireds.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Seller Motivation Signals</h3>
            <ul class="nu-checklist">
              <li>Why is the property on the market? Relocation / estate / divorce / upgrade.</li>
              <li>Has the price been reduced already? How many times?</li>
              <li>Is the home vacant or occupied? Vacancy = carrying cost pressure.</li>
              <li>Are prior offers on record? Any that fell through?</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Our Side</h3>
            <ul class="nu-checklist">
              <li>Earnest-money account funded and traceable.</li>
              <li>Attorney / closing agent selected and briefed.</li>
              <li>Insurance quote in hand before offer goes out.</li>
              <li>Financing path confirmed — cash, hybrid, or conventional.</li>
              <li>Inspector scheduled to be available within 5 days of binding.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TACTICAL RULES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Tactical</span> <span class="rest">Rules of Engagement</span></h2>
        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Do</h3>
            <ul>
              <li>Put every offer and counter in writing — verbal moves don't bind anyone.</li>
              <li>Use 48–72 hour expirations on every price move.</li>
              <li>Keep concession increments <em>shrinking</em> — it telegraphs discipline.</li>
              <li>Anchor every price argument to a comp or a carrying cost number.</li>
              <li>Ask for a non-price concession with every price increase — always.</li>
              <li>Stay courteous. Respect wins the tiebreaker in close deals.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Don't</h3>
            <ul>
              <li>Don't negotiate against yourself — no two consecutive offers without a counter.</li>
              <li>Don't react to phantom "other buyers" without verification.</li>
              <li>Don't split the difference on the first counter — it resets the midpoint.</li>
              <li>Don't fall in love with the property in front of the listing agent.</li>
              <li>Don't discuss our ceiling, timeline urgency, or financing flexibility verbally.</li>
              <li>Don't accept a counter higher than $960,000. That is the line.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <table class="nu-ladder">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Impact</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Appraisal comes in below contract price</td>
              <td>Forces renegotiation or buyer-side gap cash</td>
              <td>Cap appraisal gap exposure at $10,000 in offer language.</td>
            </tr>
            <tr>
              <td>Inspection reveals material structural issue</td>
              <td>Repair cost or deal kill</td>
              <td>15-day inspection with explicit renegotiation right.</td>
            </tr>
            <tr>
              <td>Title cloud or unrecorded easement</td>
              <td>Close delay or title-insurance exclusion</td>
              <td>Run title early; require seller to cure before close.</td>
            </tr>
            <tr>
              <td>Competing buyer emerges late</td>
              <td>Pressure to escalate above ceiling</td>
              <td>Written, firm final-and-best; honor the walk-away line.</td>
            </tr>
            <tr>
              <td>Seller relists at lower price after walk</td>
              <td>Missed acquisition opportunity</td>
              <td>60-day courteous re-engagement window agreed internally.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CALLOUT -->
      <div class="nu-callout">
        <h3>The Discipline Is the Deal</h3>
        <p>
          $900,000 gets us to the table. $960,000 is the line we will not cross. Every move in between is
          earned with a concession — never given as a gesture. The negotiation is won before the first
          response by preparing every counter, every walk, and every silence in advance.
        </p>
      </div>

      <!-- EXECUTIVE SIGN-OFF -->
      <section class="nu-section" style="margin-bottom:0;">
        <h2 class="nu-section-title"><span class="first">Executive</span> <span class="rest">Sign-Off</span></h2>
        <div class="nu-card">
          <p style="margin-bottom:12px;">
            Prepared under the discipline and commercial judgment of Aaron C. Norris, Founder &amp; CEO,
            Norris Utilities®. This brief governs all negotiating authority related to 4505 Butterworth
            until superseded in writing.
          </p>
          <p style="font-size:0.88rem; color:#555;">
            <strong>Authority Required for Deviation:</strong> Any move above $960,000 or any reduction
            in walk-away discipline requires Aaron's written approval before delivery. No verbal
            authorizations. No exceptions.
          </p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-conf-note">Confidential — Internal Negotiation Strategy</div>
  </footer>

</body>
</html>