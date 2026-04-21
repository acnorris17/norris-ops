<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Purchase Negotiation — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-alert-red: #C41E3A;
      --nu-success-green: #1B6B3A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .page-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 8px 0 8px 24px;
      margin-bottom: 14px;
    }
    .page-eyebrow {
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      margin-top: 10px;
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }

    /* ══ STATUS BAR ══ */
    .status-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 28px 0 36px;
      padding: 14px 18px;
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border: 1px solid #dbe1ff;
      border-radius: 8px;
    }
    .status-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .status-chip.priority { background: var(--nu-alert-red); color: #fff; border-color: var(--nu-alert-red); }
    .status-chip.source { background: var(--nu-navy); color: #fff; border-color: var(--nu-navy); }
    .status-chip.date { background: var(--nu-cyan); color: var(--nu-navy); border-color: var(--nu-cyan); }
    .status-chip .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: currentColor;
    }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 40px;
    }
    .section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-number {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
    }
    .section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ PROPERTY FACTS GRID ══ */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 12px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .fact-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,255,0.08);
    }
    .fact-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .fact-value .sub {
      display: block;
      font-size: 0.85rem;
      font-weight: 400;
      color: #666;
      margin-top: 3px;
    }

    /* ══ CALLOUT BOX ══ */
    .callout {
      background: linear-gradient(135deg, #fff8f2 0%, #ffefe0 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      font-size: 1.05rem;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ NEGOTIATION TABLE ══ */
    .nego-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border-radius: 6px;
      overflow: hidden;
    }
    .nego-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.85rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nego-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nego-table tr:last-child td { border-bottom: none; }
    .nego-table tr:nth-child(even) td { background: #fafbff; }
    .nego-table .lever-name {
      font-weight: 700;
      color: var(--nu-blue);
      min-width: 160px;
    }

    /* ══ PLAYBOOK STEPS ══ */
    .playbook {
      counter-reset: step;
    }
    .play-step {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px 22px 76px;
      margin-bottom: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    .play-step::before {
      counter-increment: step;
      content: counter(step, decimal-leading-zero);
      position: absolute;
      left: 18px;
      top: 20px;
      width: 42px; height: 42px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 10px rgba(0,0,255,0.25);
    }
    .play-step h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .play-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .play-step .meta {
      font-size: 0.82rem;
      color: #777;
      font-style: italic;
    }

    /* ══ DUAL COLUMN (pros/cons, walk-away/proceed) ══ */
    .dual-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .col-box {
      padding: 22px;
      border-radius: 8px;
    }
    .col-box.proceed {
      background: linear-gradient(135deg, #f0fbf4 0%, #e2f5ea 100%);
      border-left: 5px solid var(--nu-success-green);
    }
    .col-box.walkaway {
      background: linear-gradient(135deg, #fdf1f3 0%, #fbe1e6 100%);
      border-left: 5px solid var(--nu-alert-red);
    }
    .col-box h4 {
      font-size: 1.05rem;
      font-weight: 900;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
    }
    .col-box ul {
      list-style: none;
      padding: 0;
    }
    .col-box li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
      font-size: 0.92rem;
      line-height: 1.5;
    }
    .col-box.proceed li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--nu-success-green);
      font-weight: 900;
    }
    .col-box.walkaway li::before {
      content: '✕';
      position: absolute;
      left: 0;
      color: var(--nu-alert-red);
      font-weight: 900;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist-text strong { color: var(--nu-blue); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 60px; }
      .page-title { font-size: 1.55rem; }
      .dual-col { grid-template-columns: 1fr; }
      .facts-grid { grid-template-columns: 1fr 1fr; }
      .nego-table th, .nego-table td { padding: 10px 12px; font-size: 0.85rem; }
      .play-step { padding: 22px 18px 22px 66px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .fact-card, .play-step, .checklist { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 20 L110 55 L145 35 L125 70 L165 60 L135 95 L155 135 L115 115 L100 165 L85 115 L45 135 L65 95 L35 60 L75 70 L55 35 L90 55 Z" fill="#ffffff"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">reMarkable Action Item · Personal Real Estate</div>
        <h1 class="page-title">Negotiate Purchase — <span class="accent">4505 Buttewoods Estate</span></h1>
        <div class="page-subtitle">7,098 sq ft estate — strategy, levers, and playbook for Aaron C. Norris</div>
      </div>

      <div class="status-bar">
        <span class="status-chip priority"><span class="dot"></span>PRIORITY · ACTIVE NEGOTIATION</span>
        <span class="status-chip source">SOURCE · reMarkable Notes</span>
        <span class="status-chip date">LOGGED · 2026-04-17</span>
        <span class="status-chip">OWNER · Aaron C. Norris</span>
        <span class="status-chip">CATEGORY · Personal / Real Estate</span>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="section">
        <div class="section-header">
          <div class="section-number">01</div>
          <div class="section-title">Property <span class="rest">Snapshot</span></div>
        </div>

        <div class="facts-grid">
          <div class="fact-card">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods<span class="sub">Target property</span></div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Heated Sq Ft</div>
            <div class="fact-value">7,098<span class="sub">Large estate footprint</span></div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Property Type</div>
            <div class="fact-value">Estate Home<span class="sub">Single-family residential</span></div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Negotiation Status</div>
            <div class="fact-value">Open<span class="sub">Offer / counter phase</span></div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Decision Maker</div>
            <div class="fact-value">Aaron C. Norris<span class="sub">Sole buyer-side principal</span></div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Target Timeline</div>
            <div class="fact-value">30–45 Days<span class="sub">To contract or walk</span></div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">Ground Rule</div>
          <p>This is a personal transaction. Keep it separate from Norris Utilities® business operations. Any legal, inspection, or financing correspondence routes through Aaron's personal email and personal counsel — not company channels. Do not CC company staff on anything related to this estate.</p>
        </div>
      </section>

      <!-- SECTION 2: NEGOTIATION LEVERS -->
      <section class="section">
        <div class="section-header">
          <div class="section-number">02</div>
          <div class="section-title">Negotiation <span class="rest">Levers</span></div>
        </div>

        <table class="nego-table">
          <thead>
            <tr>
              <th>Lever</th>
              <th>Use It When</th>
              <th>Concession Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="lever-name">Price Reduction</td>
              <td>Comps, days-on-market, or appraisal gap support a lower number.</td>
              <td>Primary lever. Every $10K reduces monthly P&amp;I materially.</td>
            </tr>
            <tr>
              <td class="lever-name">Seller Concessions</td>
              <td>Seller is anchored on price but flexible on cash flow to closing.</td>
              <td>Ask 2–3% toward closing costs / rate buydown.</td>
            </tr>
            <tr>
              <td class="lever-name">Repair Credits</td>
              <td>Inspection uncovers HVAC, roof, water, or structural items.</td>
              <td>Credit at close beats retail repair cost every time.</td>
            </tr>
            <tr>
              <td class="lever-name">Closing Date Control</td>
              <td>Seller needs speed — or needs to delay into next tax year.</td>
              <td>Trade timing flexibility for $$$ off price.</td>
            </tr>
            <tr>
              <td class="lever-name">Inclusions / Exclusions</td>
              <td>Appliances, fixtures, outdoor equipment, furnishings in play.</td>
              <td>List items explicitly in contract. Do not assume.</td>
            </tr>
            <tr>
              <td class="lever-name">Earnest Money Posture</td>
              <td>Competing offers; show seriousness without over-exposure.</td>
              <td>Higher earnest + tight contingencies signals strength.</td>
            </tr>
            <tr>
              <td class="lever-name">Contingency Structure</td>
              <td>Protect downside without killing the deal.</td>
              <td>Keep inspection + financing; release appraisal only if you can cover gap.</td>
            </tr>
            <tr>
              <td class="lever-name">Rent-Back / Possession</td>
              <td>Seller has nowhere to go on day one.</td>
              <td>Offer short post-closing occupancy in exchange for price.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-title">Rule of Thumb</div>
          <p>Never move two levers in the same round. Concede or request one at a time so every counter has a clear purpose and the other side can say yes without feeling squeezed.</p>
        </div>
      </section>

      <!-- SECTION 3: PLAYBOOK -->
      <section class="section">
        <div class="section-header">
          <div class="section-number">03</div>
          <div class="section-title">Negotiation <span class="rest">Playbook</span></div>
        </div>

        <div class="playbook">
          <div class="play-step">
            <h4>Establish Fair Market Value</h4>
            <p>Pull active, pending, and sold comps in the Buttewoods area for 5,000–8,000 sq ft homes over the last 12 months. Adjust for lot size, condition, upgrades, and days on market. Build a one-page valuation memo for your own file.</p>
            <p class="meta">Outcome: a defensible walk-up price and a firm ceiling.</p>
          </div>
          <div class="play-step">
            <h4>Understand Seller Motivation</h4>
            <p>Ask the listing agent directly: Why are they selling? What's their timeline? Have they already purchased their next home? Is the price set by the seller or by the agent? Motivation dictates which levers work.</p>
            <p class="meta">Outcome: know whether price, timing, or certainty is the real currency.</p>
          </div>
          <div class="play-step">
            <h4>Pre-Qualify Financing First</h4>
            <p>Have proof-of-funds and a current pre-approval letter ready before the first offer. On a 7,098 sq ft estate, sellers will not take a vague offer seriously. Use Renasant (Patrick Lavette) for relationship lending if terms are competitive.</p>
            <p class="meta">Outcome: instant credibility; faster response from the listing side.</p>
          </div>
          <div class="play-step">
            <h4>Open with a Firm, Defensible Number</h4>
            <p>Do not low-ball — that invites the agent to dismiss the offer. Open 4–8% under your strike price with a tight expiration (48–72 hours) and a clean contingency package. Attach the comp memo summary as support.</p>
            <p class="meta">Outcome: serious buyer signal, room to move on the next round.</p>
          </div>
          <div class="play-step">
            <h4>Control the Inspection Phase</h4>
            <p>Use a licensed inspector plus specialty eyes if needed (roof, HVAC, structural/foundation, sewer scope, pool if applicable). An estate of this size hides six-figure problems in plain sight. Convert findings into a repair-credit ask, not a renegotiation of price.</p>
            <p class="meta">Outcome: protect yourself without re-opening the price fight.</p>
          </div>
          <div class="play-step">
            <h4>Lock Contract Language Personally</h4>
            <p>Read every line of the contract and addenda. Confirm: included fixtures, exact square footage basis, title company choice, closing date, possession, warranty coverage, HOA assignment, earnest money handling, and default remedies. Do not delegate this read.</p>
            <p class="meta">Outcome: no post-closing surprises. You signed what you read.</p>
          </div>
          <div class="play-step">
            <h4>Set Your Walk-Away Number — In Writing</h4>
            <p>Before the first counter, write your ceiling on paper and put it in a drawer. If the deal crosses that line, walk. Do not renegotiate with yourself mid-cycle. Discipline here is worth more than any single lever above.</p>
            <p class="meta">Outcome: you never overpay because of deal momentum.</p>
          </div>
          <div class="play-step">
            <h4>Close Cleanly and Move On</h4>
            <p>Once under contract, communicate through counsel and the title company only. Keep emotional conversation out of email. Confirm final walk-through 24–48 hours before close. Wire funds only after voice-verifying wiring instructions with the title company directly.</p>
            <p class="meta">Outcome: clean close, clean paper trail, zero wire-fraud exposure.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: PROCEED vs WALK -->
      <section class="section">
        <div class="section-header">
          <div class="section-number">04</div>
          <div class="section-title">Proceed <span class="rest">or Walk</span></div>
        </div>

        <div class="dual-col">
          <div class="col-box proceed">
            <h4>Signals to Proceed</h4>
            <ul>
              <li>Price lands at or below defensible comp range.</li>
              <li>Inspection reveals no structural, water, or systems bombshells.</li>
              <li>Financing terms protect monthly cash flow under stress scenarios.</li>
              <li>Seller accepts standard contingency package without gutting it.</li>
              <li>Title comes back clean; no easement or boundary surprises.</li>
              <li>Insurance quote is reasonable for the size and location.</li>
            </ul>
          </div>
          <div class="col-box walkaway">
            <h4>Signals to Walk</h4>
            <ul>
              <li>Seller refuses to move off list price with zero justification.</li>
              <li>Inspection surfaces undisclosed water, foundation, or roof issues.</li>
              <li>Appraisal misses contract price and seller will not close the gap.</li>
              <li>Title defects or unresolved liens on the property.</li>
              <li>Seller demands waiver of inspection or financing contingencies.</li>
              <li>Deal momentum pushes you past your pre-written ceiling number.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: NEXT ACTIONS -->
      <section class="section">
        <div class="section-header">
          <div class="section-number">05</div>
          <div class="section-title">Next <span class="rest">Actions</span></div>
        </div>

        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Pull comps</strong> for 5,000–8,000 sq ft homes in Buttewoods — last 12 months, sold and pending.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Confirm pre-approval</strong> with Patrick Lavette at Renasant Bank — get current rate sheet.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Call listing agent</strong> and ask the motivation questions directly — take notes immediately after.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Retain real estate counsel</strong> for contract review (personal, not company counsel).</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Line up inspection team</strong> — general inspector, roof, HVAC, structural, and sewer scope.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Write the walk-away number</strong> on paper. Date it. Seal it. Do not share it.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Get preliminary insurance quote</strong> for a 7,098 sq ft estate — replacement cost basis.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Draft opening offer</strong> with 48–72 hour expiration, standard contingencies, proof-of-funds attached.</div>
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
  </footer>

</body>
</html>