<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-success: #0A7A3B;
      --nu-warn: #B5651D;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 14px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.28);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      border: 1px solid rgba(6,208,255,0.4);
      border-radius: 2px;
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* TITLE BLOCK */
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .doc-title .lead { color: var(--nu-blue); }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 22px;
      font-size: 0.85rem;
      color: #555;
      margin-bottom: 36px;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-meta span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.72rem;
      margin-right: 6px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* SUMMARY GRID */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 8px;
    }
    .summary-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 16px 18px;
    }
    .summary-card .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #667;
      margin-bottom: 6px;
    }
    .summary-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .summary-card .sub {
      font-size: 0.8rem;
      color: #666;
      margin-top: 2px;
    }

    /* BRIEFING BOX */
    .brief-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #000066 100%);
      color: rgba(255,255,255,0.95);
      border-radius: 8px;
      padding: 26px 30px;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
    }
    .brief-box::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
    }
    .brief-box h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 10px;
      position: relative;
    }
    .brief-box p {
      font-size: 1rem;
      line-height: 1.65;
      position: relative;
    }

    /* BADGES / CHIPS */
    .chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .chip.blue { background: var(--nu-blue); color: #fff; border-color: var(--nu-blue); }
    .chip.cyan { background: var(--nu-cyan); color: var(--nu-navy); border-color: var(--nu-cyan); }
    .chip.warn { background: #FFF4E0; color: var(--nu-warn); border-color: #F0D9A8; }

    /* STRATEGY STEPS */
    .strategy-list {
      counter-reset: step;
      list-style: none;
    }
    .strategy-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 18px 18px 72px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .strategy-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 40px; height: 40px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: #fff;
      font-weight: 900;
      font-size: 1.1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .strategy-list h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .strategy-list p { font-size: 0.92rem; color: #444; }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .col-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
    }
    .col-box h4 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .col-box ul { list-style: none; padding: 0; }
    .col-box li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.92rem;
      line-height: 1.5;
    }
    .col-box li::before {
      content: '•';
      position: absolute;
      left: 0; top: -2px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.4rem;
    }

    /* TABLE */
    .offer-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .offer-table th {
      background: linear-gradient(135deg, var(--nu-blue), #0033CC);
      color: #fff;
      text-align: left;
      padding: 12px 16px;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .offer-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .offer-table tr:last-child td { border-bottom: none; }
    .offer-table tr.total td {
      background: #f3f5ff;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .num { text-align: right; font-variant-numeric: tabular-nums; }

    /* DILIGENCE CHECKLIST */
    .check-list { list-style: none; padding: 0; }
    .check-list li {
      position: relative;
      padding: 10px 12px 10px 42px;
      margin-bottom: 6px;
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.92rem;
    }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: #fff;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 0 0 18px 10px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .when {
      font-weight: 900;
      font-size: 0.82rem;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .timeline-item .what {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-top: 2px;
    }

    /* CALLOUT */
    .callout {
      background: #FFF8E6;
      border: 1px solid #F0D9A8;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 16px 20px;
      border-radius: 4px;
      font-size: 0.92rem;
      color: #5a4a1e;
      margin-top: 14px;
    }
    .callout strong { color: var(--nu-warn); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
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
    .nu-footer-small {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 46px 20px 68px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 56px; }
      .doc-title { font-size: 1.6rem; }
      .two-col { grid-template-columns: 1fr; }
      .offer-table th, .offer-table td { padding: 10px 10px; font-size: 0.85rem; }
    }

    @media print {
      body { background: #fff; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strategy-list li, .col-box, .offer-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Strategic Acquisition Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="doc-title"><span class="lead">4505 Buttewoods</span> — Estate Acquisition Playbook</h1>
      <div class="doc-meta">
        <span><strong>Property</strong>7,098 sq ft Estate</span>
        <span><strong>Address</strong>4505 Buttewoods</span>
        <span><strong>Prepared For</strong>Aaron C. Norris</span>
        <span><strong>Date</strong>April 17, 2026</span>
        <span><strong>Status</strong>Active Negotiation</span>
      </div>

      <!-- EXECUTIVE BRIEF -->
      <section class="nu-section">
        <div class="brief-box">
          <h3>Executive Brief</h3>
          <p>This document lays out the negotiation strategy for the 7,098 sq ft estate at 4505 Buttewoods. The objective is to secure the property at the strongest achievable terms while keeping the deal clean, fast, and on Norris Utilities' schedule. Every step below is designed to protect downside risk, preserve optionality, and keep leverage on Aaron's side of the table.</p>
        </div>
      </section>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="summary-grid">
          <div class="summary-card">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <div class="sub">Primary residence / estate</div>
          </div>
          <div class="summary-card">
            <div class="label">Home Size</div>
            <div class="value">7,098 sq ft</div>
            <div class="sub">Above-grade finished living area</div>
          </div>
          <div class="summary-card">
            <div class="label">Category</div>
            <div class="value">Estate-Class</div>
            <div class="sub">Premium residential tier</div>
          </div>
          <div class="summary-card">
            <div class="label">Transaction Type</div>
            <div class="value">Direct Negotiation</div>
            <div class="sub">Buyer-side representation</div>
          </div>
        </div>
        <div class="chip-row" style="margin-top:14px;">
          <span class="chip blue">Primary Buyer: A. Norris</span>
          <span class="chip cyan">Cash-Ready Positioning</span>
          <span class="chip">Clean Close Preferred</span>
          <span class="chip warn">Confidential — Internal</span>
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Strategy — 7 Moves</span></h2>
        <ol class="strategy-list">
          <li>
            <h4>Establish Market Truth First</h4>
            <p>Pull last 12 months of closed comps within 0.75 miles for homes 5,500–8,500 sq ft. Adjust for lot size, finish level, and days-on-market. Build a defensible floor and a defensible ceiling before the first number is said out loud.</p>
          </li>
          <li>
            <h4>Let the Seller Name Price First</h4>
            <p>Anchor discipline. If a list price already exists, treat it as opening — not closing. If no price is set, ask the seller or their agent to provide the number in writing before responding.</p>
          </li>
          <li>
            <h4>Open With Range, Not a Point</h4>
            <p>Present an opening offer 8–12% below defensible market value with written justification — comps, condition notes, and carrying-cost math. Frame it as "thoughtful," not "low." Preserve room to move up while still winning.</p>
          </li>
          <li>
            <h4>Lead With Terms, Not Just Price</h4>
            <p>Strong earnest money, short inspection window (7–10 days), flexible close date, and no financing contingency if cash-backed. Sellers trade price for certainty — give them certainty and capture price.</p>
          </li>
          <li>
            <h4>Reserve Concessions for Real Findings</h4>
            <p>Use the inspection period to surface legitimate issues (roof age, HVAC life, foundation, water intrusion, pool equipment). Re-trade only on documented items. Do not nickel-and-dime — credibility is the asset.</p>
          </li>
          <li>
            <h4>Walk-Away Number in Writing Before Round Two</h4>
            <p>Set the absolute ceiling today, signed off privately, before the counter arrives. Emotional discipline is the #1 variable in estate negotiations. Never raise the ceiling mid-negotiation without a 24-hour pause.</p>
          </li>
          <li>
            <h4>Close on Value Signals, Not Pressure</h4>
            <p>Final move: reiterate the strongest buyer profile — clean funds, quick close, professional conduct, minimal post-close demands. Sellers of estate homes often choose the cleaner deal over the higher one.</p>
          </li>
        </ol>
      </section>

      <!-- LEVERAGE / RISKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Leverage</span> <span class="rest">& Risk Ledger</span></h2>
        <div class="two-col">
          <div class="col-box">
            <h4>Buyer Leverage (Aaron's Side)</h4>
            <ul>
              <li>Ability to close cash or with proof of funds — elimination of financing risk</li>
              <li>Flexible closing timeline — accommodates seller's move-out schedule</li>
              <li>Willingness to take the home as-is on cosmetic items</li>
              <li>Professional, documented process — no emotional sellers' remorse triggers</li>
              <li>Known local buyer reputation — Birmingham, AL business owner, third-generation</li>
            </ul>
          </div>
          <div class="col-box">
            <h4>Risk Ledger (Protect Against)</h4>
            <ul>
              <li>Hidden condition: roof, foundation, water intrusion, HVAC end-of-life</li>
              <li>Title, easement, or covenant surprises on estate-class lot</li>
              <li>Appraisal gap if market softens between contract and close</li>
              <li>Property tax reassessment triggered at transfer of title</li>
              <li>Insurance cost and coverage availability on 7,098 sq ft structure</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- OFFER FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Offer</span> <span class="rest">Framework</span></h2>
        <table class="offer-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Role</th>
              <th>Purpose</th>
              <th class="num">Target Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opening Offer</td>
              <td>Anchor Low, Anchor Defensible</td>
              <td>Signal serious buyer, preserve room to move up</td>
              <td class="num">88–92% of market value</td>
            </tr>
            <tr>
              <td>First Counter Response</td>
              <td>Split Movement Unevenly</td>
              <td>Move less than half of the gap to keep leverage</td>
              <td class="num">+30–40% of gap</td>
            </tr>
            <tr>
              <td>Second Counter Response</td>
              <td>Tighten to Walk-Away</td>
              <td>Show seller the final zone without revealing ceiling</td>
              <td class="num">Within 1–2% of ceiling</td>
            </tr>
            <tr>
              <td>Inspection Re-Trade</td>
              <td>Documented Only</td>
              <td>Capture real findings as credit, not price cut</td>
              <td class="num">Credit at close</td>
            </tr>
            <tr class="total">
              <td>Walk-Away Ceiling</td>
              <td>Non-Negotiable</td>
              <td>Signed and dated before first counter is read</td>
              <td class="num">Set in writing</td>
            </tr>
          </tbody>
        </table>
        <div class="callout"><strong>Rule:</strong> The ceiling number is written down, sealed, and not revisited during any single negotiation session. Any request to raise it requires a 24-hour pause, cold review of comps, and a written justification.</div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <ul class="check-list">
          <li>Pull recorded deed, title commitment, and lien history on 4505 Buttewoods</li>
          <li>Survey and boundary verification — confirm lot lines and easements</li>
          <li>Full home inspection — structural, mechanical, roof, envelope</li>
          <li>Specialty inspections — foundation, sewer scope, HVAC life, pool/spa if present</li>
          <li>Radon, mold, and water intrusion testing on lower levels</li>
          <li>Insurance quote with 7,098 sq ft replacement-cost binder in hand before closing</li>
          <li>Property tax history — 5-year trend and reassessment exposure at transfer</li>
          <li>HOA or covenant review, including architectural control restrictions</li>
          <li>Seller's Property Disclosure — compare against inspection findings line by line</li>
          <li>Utility history — 12 months of power, gas, water bills</li>
          <li>Appraisal ordered as informational step even on cash purchase</li>
          <li>Attorney review of contract before signature — Alabama-licensed</li>
        </ul>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="when">Day 1 — Preparation</div>
            <div class="what">Comps pulled, walk-away ceiling set in writing, buyer profile letter drafted, proof-of-funds confirmed.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 2–3 — Opening</div>
            <div class="what">Written opening offer delivered with comp justification. Request 48-hour response window. Stay patient, stay quiet.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 4–7 — First Round</div>
            <div class="what">Receive counter. Review against ceiling. Respond per framework — move less than half the gap. Keep tone professional, never personal.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 8–10 — Final Terms</div>
            <div class="what">Tighten on price; trade on terms (close date, earnest money, inspection scope). Reach binding agreement.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 11–21 — Inspection Period</div>
            <div class="what">Execute full diligence checklist. Surface only documented, material findings. Request credits, not re-trades.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 22–45 — Close</div>
            <div class="what">Title work clears, insurance binds, final walk-through, funding, recording. Keys delivered. Deal complete.</div>
          </div>
        </div>
      </section>

      <!-- COMMUNICATION PROTOCOL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Communication</span> <span class="rest">Protocol</span></h2>
        <div class="two-col">
          <div class="col-box">
            <h4>What Aaron Says</h4>
            <ul>
              <li>"This is the number that works for us — here's the math behind it."</li>
              <li>"I'm prepared to close clean and on your timeline."</li>
              <li>"We'll only re-trade on documented findings. You have my word."</li>
              <li>"Take the weekend. I'll have my answer Monday."</li>
            </ul>
          </div>
          <div class="col-box">
            <h4>What Aaron Never Says</h4>
            <ul>
              <li>"This is my dream home." — Removes price discipline</li>
              <li>"I can go higher." — Signals the ceiling is movable</li>
              <li>"My wife loves the kitchen." — Gives away emotional leverage</li>
              <li>"How much did you put into it?" — Seller's cost is not buyer's problem</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Next</span> <span class="rest">Actions — This Week</span></h2>
        <ul class="check-list">
          <li>Confirm listing status, current asking price, and seller's agent contact for 4505 Buttewoods</li>
          <li>Commission comp report — 5,500 to 8,500 sq ft, 0.75 mi radius, last 12 months closed</li>
          <li>Obtain proof-of-funds letter dated within 30 days from primary banking relationship</li>
          <li>Set walk-away ceiling in writing and store in secure record</li>
          <li>Engage Alabama-licensed real estate attorney for contract review standby</li>
          <li>Schedule preliminary drive-by and exterior walk for condition scoring</li>
        </ul>
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
    <div class="nu-footer-small">Confidential — Internal Negotiation Document — Prepared April 17, 2026</div>
  </footer>

</body>
</html>