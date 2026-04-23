<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-eyebrow {
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--nu-cyan);
      letter-spacing: 0.4em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-white);
      letter-spacing: 0.04em;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    .nu-page-subtitle {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.02em;
    }

    /* ══ CHEVRON ══ */
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 22px;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
    }
    .nu-section-title span.accent {
      color: #0033cc;
    }
    .nu-section-lead {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 32px;
      max-width: 820px;
    }

    /* ══ PROPERTY HERO CARD ══ */
    .property-hero {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 0;
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.06);
    }
    .property-hero-left {
      padding: 36px 36px 36px 30px;
    }
    .property-hero-right {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      padding: 36px;
      color: var(--nu-white);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .property-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .property-address {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .property-sub {
      font-size: 1rem;
      color: #555;
      margin-bottom: 20px;
    }
    .property-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 18px;
    }
    .stat {
      text-align: left;
    }
    .stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      margin-top: 4px;
    }
    .right-eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .objective-title {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-white);
      margin-bottom: 10px;
      line-height: 1.25;
    }
    .objective-body {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.88);
      line-height: 1.65;
    }

    /* ══ PHASE GRID ══ */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin-bottom: 48px;
    }
    .phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 24px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,51,0.08);
    }
    .phase-number {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 6px 12px;
      border-radius: 3px;
      margin-bottom: 14px;
    }
    .phase-title {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .phase-duration {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }
    .phase-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ CHECKLIST ══ */
    .checklist-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-bottom: 48px;
    }
    .checklist-col h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-blue);
    }
    .checklist {
      list-style: none;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-right: 12px;
      flex-shrink: 0;
      margin-top: 3px;
    }

    /* ══ NEGOTIATION TABLE ══ */
    .nego-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      font-size: 0.95rem;
      box-shadow: 0 2px 8px rgba(0,0,51,0.04);
    }
    .nego-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nego-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nego-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nego-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nego-table td strong {
      color: var(--nu-dark-text);
    }
    .tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .tag-high { background: #fff0f0; color: #c00; }
    .tag-med { background: #fff8e0; color: #a67600; }
    .tag-low { background: #e8f5e9; color: #2e7d32; }

    /* ══ RISK GRID ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 48px;
    }
    .risk-card {
      padding: 22px;
      border-radius: 8px;
      border-left: 4px solid;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-card.risk-high { border-left-color: #c00; }
    .risk-card.risk-med { border-left-color: var(--nu-accent-gold); }
    .risk-card.risk-low { border-left-color: #2e7d32; }
    .risk-card h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .risk-card .mitigation {
      display: block;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
      color: #555;
    }
    .risk-card .mitigation strong {
      color: var(--nu-blue);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }

    /* ══ CTA BAND ══ */
    .cta-band {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .cta-band h3 {
      font-size: 1.35rem;
      font-weight: 900;
      margin-bottom: 6px;
    }
    .cta-band p {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.9);
      max-width: 600px;
    }
    .cta-btn {
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 14px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      letter-spacing: 0.03em;
      white-space: nowrap;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }

    /* ══ DIVIDER ══ */
    .section-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, var(--nu-medium-gray) 25%, var(--nu-medium-gray) 75%, transparent 100%);
      margin: 56px 0;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
      font-size: 1rem;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact { line-height: 1.9; font-size: 0.95rem; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-fineprint {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 820px) {
      .property-hero { grid-template-columns: 1fr; }
      .property-hero-left { padding: 28px 24px; }
      .property-hero-right { padding: 28px 24px; }
      .checklist-wrap { grid-template-columns: 1fr; gap: 24px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-page-title { font-size: 1.5rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .property-address { font-size: 1.4rem; }
      .cta-band { padding: 28px 24px; }
      .nego-table { font-size: 0.85rem; }
      .nego-table th, .nego-table td { padding: 10px 10px; }
      .property-stats { grid-template-columns: 1fr 1fr; gap: 14px 0; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .risk-card, .property-hero { box-shadow: none; break-inside: avoid; }
      .cta-band { break-inside: avoid; }
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
    <div class="nu-eyebrow">Confidential Acquisition Brief</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-page-title">Estate Acquisition Strategy</div>
    <div class="nu-page-subtitle">4505 Buttewoods — 7,098 Sq Ft Residence</div>
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
      <section class="property-hero">
        <div class="property-hero-left">
          <div class="property-label">Target Property</div>
          <div class="property-address">4505 Buttewoods</div>
          <div class="property-sub">Single-family estate residence — 7,098 sq ft</div>
          <div class="property-stats">
            <div class="stat">
              <div class="stat-value">7,098</div>
              <div class="stat-label">Square Feet</div>
            </div>
            <div class="stat">
              <div class="stat-value">Estate</div>
              <div class="stat-label">Class</div>
            </div>
            <div class="stat">
              <div class="stat-value">Active</div>
              <div class="stat-label">Pursuit Status</div>
            </div>
          </div>
        </div>
        <div class="property-hero-right">
          <div class="right-eyebrow">Objective</div>
          <div class="objective-title">Negotiate a favorable purchase on terms that protect capital and preserve business liquidity.</div>
          <div class="objective-body">
            This brief walks the acquisition from first contact through closing. The goal is a purchase price and terms below asking, a clean title, contingencies that protect against unknown defects, and a closing timeline that aligns with Norris Utilities<sup>&reg;</sup> cash-flow commitments.
          </div>
        </div>
      </section>

      <!-- PHASE PLAN -->
      <h2 class="nu-section-title"><span class="accent">Negotiation</span> Phase Plan</h2>
      <p class="nu-section-lead">Every serious acquisition runs on a disciplined sequence. Treat each phase as a checkpoint — do not advance until its deliverables are confirmed.</p>

      <div class="phase-grid">
        <div class="phase-card">
          <span class="phase-number">PHASE 01</span>
          <div class="phase-title">Intelligence &amp; Valuation</div>
          <div class="phase-duration">Week 1 — 3 to 7 days</div>
          <div class="phase-body">Pull comparables within one mile over the last 12 months. Verify square footage on tax records. Request seller disclosure and days-on-market history. Establish ceiling price, target price, and walk-away price before making contact.</div>
        </div>
        <div class="phase-card">
          <span class="phase-number">PHASE 02</span>
          <div class="phase-title">Opening Contact</div>
          <div class="phase-duration">Week 1 — 1 to 2 days</div>
          <div class="phase-body">Schedule a walk-through through the listing agent. Ask open questions about seller motivation, timeline, and any prior offers. Listen more than you speak. Record every detail within an hour of leaving the property.</div>
        </div>
        <div class="phase-card">
          <span class="phase-number">PHASE 03</span>
          <div class="phase-title">Initial Written Offer</div>
          <div class="phase-duration">Week 2 — 5 to 10 days</div>
          <div class="phase-body">Submit a firm, clearly structured offer with proof of funds or pre-approval attached. Include inspection, financing, and title contingencies. Price the opening bid below target to preserve room to move up.</div>
        </div>
        <div class="phase-card">
          <span class="phase-number">PHASE 04</span>
          <div class="phase-title">Counter &amp; Leverage</div>
          <div class="phase-duration">Week 2 — 3 to 5 days</div>
          <div class="phase-body">Respond to counters with small, deliberate movements. Each concession paired with a concession request. Use inspection findings as principled leverage — never emotional pressure.</div>
        </div>
        <div class="phase-card">
          <span class="phase-number">PHASE 05</span>
          <div class="phase-title">Due Diligence</div>
          <div class="phase-duration">Week 3 to 4 — 10 to 14 days</div>
          <div class="phase-body">Professional inspection, structural assessment, HVAC and roof review, survey, and title search. Document every finding in writing. Re-negotiate credits or repairs based on material defects only.</div>
        </div>
        <div class="phase-card">
          <span class="phase-number">PHASE 06</span>
          <div class="phase-title">Close &amp; Fund</div>
          <div class="phase-duration">Week 5 to 6</div>
          <div class="phase-body">Finalize financing with Patrick Lavette at Renasant Bank. Confirm title commitment, wire funds through the closing attorney only, and record the deed. Retain digital copies of every signed document and closing statement.</div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <h2 class="nu-section-title"><span class="accent">Pre-Negotiation</span> Checklist</h2>
      <p class="nu-section-lead">Complete every item below before the first offer leaves Norris Utilities<sup>&reg;</sup>. Do not move forward while any box is empty.</p>

      <div class="checklist-wrap">
        <div class="checklist-col">
          <h3>Financial Readiness</h3>
          <ul class="checklist">
            <li>Pre-approval letter from Renasant Bank — Patrick Lavette</li>
            <li>Proof of funds document for earnest money deposit</li>
            <li>Down payment source verified and seasoned</li>
            <li>Cash reserves independent of Norris Utilities<sup>&reg;</sup> operating capital</li>
            <li>Confirmed that acquisition does not impair FlexPro Armor / Skylift order funding</li>
            <li>Debt-to-income and cash-flow stress test complete</li>
          </ul>
        </div>
        <div class="checklist-col">
          <h3>Property &amp; Market Intel</h3>
          <ul class="checklist">
            <li>Three recent closed comparables pulled within one mile</li>
            <li>Original list price, current list price, and days on market</li>
            <li>Public record square footage confirmed against listing</li>
            <li>Tax assessment and annual property tax history</li>
            <li>HOA status, covenants, and any special assessments</li>
            <li>Seller motivation and transaction timeline understood</li>
          </ul>
        </div>
      </div>

      <!-- NEGOTIATION PLAYBOOK -->
      <h2 class="nu-section-title"><span class="accent">Negotiation</span> Playbook</h2>
      <p class="nu-section-lead">Each lever below has a specific purpose. Pull one at a time. Do not give multiple concessions in a single exchange.</p>

      <table class="nego-table" role="table" aria-label="Negotiation Levers">
        <thead>
          <tr>
            <th>Lever</th>
            <th>When To Use</th>
            <th>Expected Effect</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Price</strong></td>
            <td>Opening offer and response to every counter</td>
            <td>Directly reduces cost basis and total loan amount</td>
            <td><span class="tag tag-high">Primary</span></td>
          </tr>
          <tr>
            <td><strong>Closing Timeline</strong></td>
            <td>When seller is relocation-driven or tax-year sensitive</td>
            <td>Faster close often unlocks a price reduction</td>
            <td><span class="tag tag-high">Primary</span></td>
          </tr>
          <tr>
            <td><strong>Inspection Credits</strong></td>
            <td>After documented material defects are found</td>
            <td>Effective price reduction without re-opening list price</td>
            <td><span class="tag tag-med">Secondary</span></td>
          </tr>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>To signal seriousness on a tight negotiation</td>
            <td>Increases seller confidence; risk stays low with firm contingencies</td>
            <td><span class="tag tag-med">Secondary</span></td>
          </tr>
          <tr>
            <td><strong>Appliances &amp; Fixtures</strong></td>
            <td>Late-stage to close a small remaining gap</td>
            <td>Low dollar concession on either side; useful to signal willingness to finalize</td>
            <td><span class="tag tag-low">Tertiary</span></td>
          </tr>
          <tr>
            <td><strong>Rent-Back / Possession</strong></td>
            <td>When seller needs time after closing</td>
            <td>Valuable seller accommodation — trade it for a meaningful price concession</td>
            <td><span class="tag tag-med">Secondary</span></td>
          </tr>
          <tr>
            <td><strong>Contingency Strength</strong></td>
            <td>Holds through the entire contract period</td>
            <td>Protects deposit and exit rights — never weaken without cause</td>
            <td><span class="tag tag-high">Primary</span></td>
          </tr>
        </tbody>
      </table>

      <div class="section-divider"></div>

      <!-- RISKS -->
      <h2 class="nu-section-title"><span class="accent">Risk</span> Assessment &amp; Mitigation</h2>
      <p class="nu-section-lead">A 7,098 sq ft estate carries non-trivial carrying cost, maintenance, and liquidity risk. Plan for each item below in writing before binding.</p>

      <div class="risk-grid">
        <div class="risk-card risk-high">
          <h4>Liquidity Strain on Norris Utilities<sup>&reg;</sup></h4>
          <p>A large down payment could restrict working capital needed for FlexPro Armor production and Skylift inventory commitments.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Fund the purchase from personal capital and reserves only. Do not commingle with LLC operating accounts. Keep a three-month operating runway untouched.
          </span>
        </div>
        <div class="risk-card risk-high">
          <h4>Hidden Structural or Envelope Defects</h4>
          <p>Homes of this size frequently have roof, HVAC, and drainage issues that do not appear in a walk-through.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Require licensed inspector, separate roof and HVAC assessments, and written seller disclosure. Treat inspection findings as principal negotiation leverage in Phase 04.
          </span>
        </div>
        <div class="risk-card risk-med">
          <h4>Appraisal Gap</h4>
          <p>Lender appraisal may come in below contract price, requiring additional cash at closing.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Include an appraisal contingency. Reserve capacity to renegotiate or walk away rather than cover the gap with business capital.
          </span>
        </div>
        <div class="risk-card risk-med">
          <h4>Property Tax &amp; Insurance Carry</h4>
          <p>Annual property tax and replacement-cost insurance on a 7,098 sq ft estate are substantial recurring costs.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Pull three-year tax history and get a written homeowner's insurance quote before final offer. Model monthly PITI inside total household budget.
          </span>
        </div>
        <div class="risk-card risk-low">
          <h4>Title &amp; Easement Issues</h4>
          <p>Unknown liens, easements, or boundary disputes can delay or block closing.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Order owner's title policy. Require a recent survey. Do not waive title contingency under any circumstance.
          </span>
        </div>
        <div class="risk-card risk-low">
          <h4>Emotional Anchoring</h4>
          <p>Falling in love with the property weakens walk-away discipline and invites overpayment.</p>
          <span class="mitigation">
            <strong>Mitigation</strong>
            Walk-away price set in writing in Phase 01, before any walk-through. A second trusted reviewer must confirm before any concession that breaches it.
          </span>
        </div>
      </div>

      <!-- WALK-AWAY RULES -->
      <h2 class="nu-section-title"><span class="accent">Walk-Away</span> Triggers</h2>
      <p class="nu-section-lead">The following conditions require exiting the transaction regardless of emotional investment. Respecting these rules is what makes the rest of the playbook work.</p>

      <div class="checklist-wrap">
        <div class="checklist-col">
          <h3>Hard Triggers</h3>
          <ul class="checklist">
            <li>Seller refuses reasonable inspection access or timeline</li>
            <li>Seller will not provide a written property disclosure</li>
            <li>Title search reveals unresolved liens or boundary disputes</li>
            <li>Inspection reveals structural or foundation failure requiring full repair</li>
            <li>Appraisal gap exceeds pre-set cash-cushion threshold</li>
          </ul>
        </div>
        <div class="checklist-col">
          <h3>Soft Triggers — Reassess</h3>
          <ul class="checklist">
            <li>Seller becomes unresponsive for more than five business days</li>
            <li>Listing agent introduces undisclosed competing offers mid-negotiation</li>
            <li>Multiple small concessions requested outside written counter</li>
            <li>Material change in Norris Utilities<sup>&reg;</sup> cash position during due diligence</li>
            <li>Any pressure to waive inspection, title, or appraisal contingency</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-band">
        <div>
          <h3>Kick Off Phase 01 This Week</h3>
          <p>Pull comparables, confirm funding capacity with Patrick Lavette, and lock the ceiling and walk-away price in writing before scheduling the first walk-through of 4505 Buttewoods.</p>
        </div>
        <a class="cta-btn" href="tel:2055001343">Call 205-500-1343</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment<sup>&reg;</sup></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities<sup>&reg;</sup>, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-fineprint">
      Confidential — prepared for Aaron C. Norris. Not an offer, contract, or legal advice. Consult qualified legal and tax counsel before executing any real estate transaction.
    </div>
  </footer>

</body>
</html>