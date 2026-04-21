<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-success: #0B7A3E;
      --nu-warn: #B8860B;
      --nu-danger: #B00020;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 56px 40px 72px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
      z-index: 1;
      opacity: 0.8;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
      padding: 48px 0 64px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* DOCUMENT BANNER */
    .doc-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      padding: 18px 22px;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 10px;
      margin-bottom: 32px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
    }
    .doc-banner-left { display: flex; align-items: center; gap: 14px; }
    .doc-tag {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      padding: 5px 12px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .doc-banner-title {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.02em;
    }
    .doc-banner-meta {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.8);
      font-weight: 400;
    }

    /* PAGE HEADLINE */
    .page-headline {
      margin-bottom: 10px;
    }
    .page-kicker {
      display: inline-block;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      padding: 4px 0;
      border-bottom: 3px solid var(--nu-cyan);
      margin-bottom: 14px;
    }
    h1.page-title {
      font-weight: 900;
      font-size: 2.35rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 10px;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: #555;
      max-width: 760px;
      margin-bottom: 36px;
    }

    /* AT-A-GLANCE GRID */
    .glance-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 40px;
    }
    .glance-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 18px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .glance-card.cyan { border-left-color: var(--nu-cyan); }
    .glance-card.gold { border-left-color: var(--nu-accent-gold); }
    .glance-card.navy { border-left-color: var(--nu-navy); }
    .glance-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .glance-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .glance-value.small { font-size: 0.95rem; }

    /* SECTION */
    .nu-section {
      margin-bottom: 42px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* BRIEF BODY */
    .brief-body p {
      margin-bottom: 14px;
      color: var(--nu-body-text);
    }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.01em;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* CHEVRON BADGES (step list) */
    .step-list { display: flex; flex-direction: column; gap: 10px; }
    .step-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }
    @media (max-width: 640px) {
      .step-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
    }

    /* OFFER TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .offer-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .offer-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .offer-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .offer-table .num {
      font-variant-numeric: tabular-nums;
      text-align: right;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .offer-table .strategy-walk td { background: #FFF8E6; }
    .offer-table .strategy-target td { background: #E8F1FF; font-weight: 700; }

    /* RISK / LEVERAGE GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) { .risk-grid { grid-template-columns: 1fr; } }
    .risk-box {
      padding: 18px 20px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-box.lever {
      background: #F0F9F3;
      border-left: 5px solid var(--nu-success);
    }
    .risk-box.risk {
      background: #FFF4F4;
      border-left: 5px solid var(--nu-danger);
    }
    .risk-box h4 {
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .risk-box.lever h4 { color: var(--nu-success); }
    .risk-box.risk h4 { color: var(--nu-danger); }
    .risk-box ul { padding-left: 18px; }
    .risk-box ul li { margin-bottom: 6px; font-size: 0.93rem; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #F5FBFF 0%, #E6F4FF 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 20px 0;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      margin-bottom: 6px;
    }
    .callout p { margin: 0; color: var(--nu-dark-text); font-weight: 400; }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 8px;
      width: 3px;
      background: linear-gradient(var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .t-item {
      position: relative;
      margin-bottom: 18px;
      padding-left: 4px;
    }
    .t-item::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .t-item strong {
      display: block;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    /* SIGNOFF */
    .signoff {
      margin-top: 36px;
      padding: 22px 26px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border: 1px dashed #AAA;
    }
    .signoff-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      align-items: flex-end;
    }
    .sig-line {
      flex: 1 1 260px;
    }
    .sig-line .label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 4px;
    }
    .sig-line .line {
      border-bottom: 2px solid var(--nu-dark-text);
      height: 30px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.9);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-meta {
      margin-top: 14px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 42px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      h1.page-title { font-size: 1.75rem; }
      .nu-container { padding: 0 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .offer-table { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L110 40 L140 20 L125 55 L160 45 L135 75 L155 110 L120 90 L100 130 L80 90 L45 110 L65 75 L40 45 L75 55 L60 20 L90 40 Z" fill="#ffffff"/>
      <path d="M100 125 L105 155 L125 145 L115 170 L100 210 L85 170 L75 145 L95 155 Z" fill="#ffffff"/>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC BANNER -->
      <div class="doc-banner">
        <div class="doc-banner-left">
          <span class="doc-tag">Action Item</span>
          <div>
            <div class="doc-banner-title">Negotiation Brief — 4505 Buttewoods Estate</div>
            <div class="doc-banner-meta">Prepared 2026-04-20 · Source: reMarkable Action Item · Owner: Aaron C. Norris</div>
          </div>
        </div>
        <span class="doc-tag" style="background:var(--nu-accent-gold);color:var(--nu-navy);">Priority · Active</span>
      </div>

      <!-- HEADLINE -->
      <div class="page-headline">
        <span class="page-kicker">Real Estate · Negotiation Play</span>
        <h1 class="page-title">Negotiate Purchase of the <span class="accent">7,098 sq ft Estate</span> at 4505 Buttewoods</h1>
        <p class="page-subtitle">A structured plan to walk from first conversation to signed purchase agreement — with a clear walk-away number, three offer waypoints, and a sequence that protects Aaron's leverage.</p>
      </div>

      <!-- AT A GLANCE -->
      <div class="glance-grid">
        <div class="glance-card">
          <div class="glance-label">Property</div>
          <div class="glance-value">4505 Buttewoods</div>
        </div>
        <div class="glance-card cyan">
          <div class="glance-label">Home Size</div>
          <div class="glance-value">7,098 sq ft</div>
        </div>
        <div class="glance-card gold">
          <div class="glance-label">Stage</div>
          <div class="glance-value small">Active Negotiation</div>
        </div>
        <div class="glance-card navy">
          <div class="glance-label">Owner</div>
          <div class="glance-value small">Aaron C. Norris</div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Objective</span> <span class="rest">&amp; Outcome We Want</span></h2>
        <div class="brief-body">
          <p>Close on the 4505 Buttewoods estate at a price that reflects true market value for a 7,098 sq ft property in this submarket — not the seller's anchor. The win is a signed purchase agreement at or below our target, with clean contingencies (inspection, financing, clear title) and a closing timeline Aaron controls.</p>
          <p>Everything in this brief is structured around three outcomes: <strong>(1)</strong> understand what the property is actually worth, <strong>(2)</strong> open at a defensible number with room to move, and <strong>(3)</strong> know exactly when to walk.</p>
        </div>

        <div class="callout">
          <div class="callout-title">Guiding Principle</div>
          <p>The first party to name a firm number loses leverage. Ask the seller for their "best price" before disclosing any of ours. If pressed, offer a range — never a point.</p>
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Prep</span> <span class="rest">Before the Next Conversation</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Market &amp; Valuation Research</h3>
            <ul>
              <li>Pull three comparable sales within 1 mile, 6,500–7,500 sq ft, closed in the last 12 months</li>
              <li>Confirm current assessed value with the county tax office</li>
              <li>Order a broker price opinion (BPO) or order an appraisal if financing</li>
              <li>Identify days on market for the property — longer DOM = more leverage</li>
              <li>Check property tax history for any back-tax or lien exposure</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Condition &amp; Cost-to-Own</h3>
            <ul>
              <li>Estimate deferred maintenance: roof age, HVAC, plumbing, electrical</li>
              <li>Budget pre-inspection with a licensed home inspector — non-negotiable</li>
              <li>Confirm zoning, HOA rules, and any easements on title</li>
              <li>Get an insurance quote before offer — flood, wind, and replacement cost</li>
              <li>Project 12-month carrying cost: tax + insurance + utilities + maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &amp; Walk-Away Number</span></h2>
        <p class="brief-body">Three waypoints. Aaron opens at the first, moves to the second only after the seller counters, and holds firm at the third. Below the walk-away, the deal does not make financial sense — walk without apology.</p>

        <table class="offer-table">
          <thead>
            <tr>
              <th>Waypoint</th>
              <th>Position</th>
              <th>What Triggers the Move</th>
              <th class="num">% of Asking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opening</strong></td>
              <td>Anchor low against comps and DOM</td>
              <td>First written offer after walkthrough + inspection</td>
              <td class="num">82–86%</td>
            </tr>
            <tr class="strategy-target">
              <td><strong>Target</strong></td>
              <td>True fair value based on BPO &amp; comps</td>
              <td>Seller counters opening; we move once</td>
              <td class="num">88–92%</td>
            </tr>
            <tr class="strategy-walk">
              <td><strong>Walk-Away</strong></td>
              <td>Absolute ceiling — no exceptions</td>
              <td>Final counter; above this number, leave</td>
              <td class="num">94%</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-title">Rule of the Room</div>
          <p>Every concession from Aaron must be matched by a concession from the seller — price, closing date, inclusions (appliances, fixtures), seller credit, or repair allowance. Never give without getting.</p>
        </div>
      </section>

      <!-- NEGOTIATION PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Playbook — Step by Step</span></h2>
        <div class="step-list">
          <div class="step-badge"><span class="step-number">1</span>Ask the seller or listing agent: "What's the lowest number you'd take today, all cash, no contingencies?" — then stay silent.</div>
          <div class="step-badge"><span class="step-number">2</span>Tour with an inspector present. Photograph every defect. Every finding becomes a price lever.</div>
          <div class="step-badge"><span class="step-number">3</span>Submit opening offer in writing with a 48-hour response window. Include proof of funds or pre-approval.</div>
          <div class="step-badge"><span class="step-number">4</span>On counter, move to target only with a concession in return (closing date, fixtures, seller-paid costs).</div>
          <div class="step-badge"><span class="step-number">5</span>If seller comes back above walk-away, thank them in writing and close the file. Do not chase.</div>
          <div class="step-badge"><span class="step-number">6</span>Under contract: inspection period is the second negotiation — use findings to request repair credits.</div>
          <div class="step-badge"><span class="step-number">7</span>Close with clean title, recorded deed, and a copy of every disclosure in the file.</div>
        </div>
      </section>

      <!-- LEVERAGE / RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">on Our Side &amp; Risks to Watch</span></h2>
        <div class="risk-grid">
          <div class="risk-box lever">
            <h4>Our Leverage</h4>
            <ul>
              <li>Qualified, funded buyer — fewer competing offers will match</li>
              <li>Ability to close fast if the seller needs out</li>
              <li>Willingness to walk — the strongest position at the table</li>
              <li>Every day on market beyond 60 softens the seller's price</li>
              <li>A 7,098 sq ft home is a narrow buyer pool — sellers know this</li>
            </ul>
          </div>
          <div class="risk-box risk">
            <h4>Risks to Watch</h4>
            <ul>
              <li>Falling in love with the property — emotional anchoring kills price discipline</li>
              <li>Hidden structural, foundation, or moisture issues on a home this size</li>
              <li>Tax reassessment after sale could spike carrying cost</li>
              <li>Insurance coverage exclusions for large-home replacement cost</li>
              <li>Competing bidder surfacing late — stay ready to walk, not bid up</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="t-item">
            <strong>Week 1 — Research Lock</strong>
            Comps pulled, BPO ordered, tax + title confirmed, insurance quote in hand.
          </div>
          <div class="t-item">
            <strong>Week 2 — Walkthrough &amp; Opening Offer</strong>
            In-person tour with inspector. Submit opening offer in writing with 48-hour response.
          </div>
          <div class="t-item">
            <strong>Week 3 — Counter Exchange</strong>
            Move from opening to target only on matching concession. Hold firm at walk-away.
          </div>
          <div class="t-item">
            <strong>Weeks 4–5 — Inspection &amp; Repair Credits</strong>
            Formal inspection, re-negotiate based on findings, lock final number.
          </div>
          <div class="t-item">
            <strong>Weeks 6–8 — Appraisal, Financing &amp; Close</strong>
            Appraisal, title work, final walkthrough, funding, recorded deed.
          </div>
        </div>
      </section>

      <!-- OPEN QUESTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Open</span> <span class="rest">Questions to Resolve</span></h2>
        <div class="nu-card">
          <ul>
            <li>Full street address — confirm "Buttewoods" spelling and city/state for title and tax records</li>
            <li>Current asking price and days on market</li>
            <li>Seller motivation — relocation, estate sale, downsizing, or distressed?</li>
            <li>Financing path — cash, conventional, bridge from current residence?</li>
            <li>Who represents Aaron as buyer's agent? Confirm agent and dual-agency exposure</li>
            <li>Intended use — primary residence, rental, or long-term hold?</li>
          </ul>
        </div>
      </section>

      <!-- SIGNOFF -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">&amp; Sign-Off</span></h2>
        <div class="signoff">
          <div class="signoff-row">
            <div class="sig-line">
              <div class="label">Approved Walk-Away Number ($)</div>
              <div class="line"></div>
            </div>
            <div class="sig-line">
              <div class="label">Target Close Date</div>
              <div class="line"></div>
            </div>
          </div>
          <div class="signoff-row" style="margin-top:22px;">
            <div class="sig-line">
              <div class="label">Aaron C. Norris — Signature</div>
              <div class="line"></div>
            </div>
            <div class="sig-line">
              <div class="label">Date</div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal negotiation brief — confidential. Prepared for Aaron C. Norris on 2026-04-20.</div>
  </footer>

</body>
</html>