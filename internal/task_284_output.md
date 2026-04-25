<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate — Acquisition Strategy | Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #2D7D46;
      --nu-warning: #C77800;
      --nu-danger: #B91C1C;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-eyebrow {
      display: inline-block;
      margin-top: 26px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* PAGE TITLE */
    .page-title-block {
      text-align: center;
      margin-bottom: 50px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      margin-bottom: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
      margin-bottom: 22px;
    }

    /* PROPERTY SNAPSHOT */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 18px;
      margin-bottom: 8px;
    }
    .snapshot-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #FFFFFF 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
    }
    .snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .snapshot-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .snapshot-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* OBJECTIVE BANNER */
    .objective-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 30px 36px;
      margin-bottom: 28px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
    }
    .objective-banner h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 8px;
      color: var(--nu-cyan);
      letter-spacing: 0.02em;
    }
    .objective-banner p {
      font-size: 0.98rem;
      line-height: 1.55;
      color: rgba(255,255,255,0.92);
    }
    .objective-budget {
      text-align: right;
      border-left: 2px solid rgba(6,208,255,0.4);
      padding-left: 24px;
    }
    .objective-budget .label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .objective-budget .value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-white);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 22px;
      padding-bottom: 4px;
    }
    .timeline-item:last-child { margin-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -25px; top: 5px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-day {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 3px 10px;
      border-radius: 12px;
      margin-bottom: 6px;
    }
    .timeline-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* NEGOTIATION TACTICS */
    .tactic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .tactic-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
    }
    .tactic-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .tactic-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .tactic-num {
      display: inline-block;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      color: var(--nu-blue);
      margin-bottom: 6px;
      text-transform: uppercase;
    }
    .tactic-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .tactic-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .col-card {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      background: var(--nu-light-gray);
    }
    .col-card.leverage { border-left: 4px solid var(--nu-success); }
    .col-card.risk { border-left: 4px solid var(--nu-warning); }
    .col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
    }
    .col-card.leverage h4 { color: var(--nu-success); }
    .col-card.risk h4 { color: var(--nu-warning); }
    .col-card ul { list-style: none; }
    .col-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.92rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .col-card li:last-child { border-bottom: none; }
    .col-card.leverage li::before {
      content: '▲';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-success);
      font-size: 0.75rem;
    }
    .col-card.risk li::before {
      content: '⚠';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-warning);
      font-size: 0.85rem;
    }

    /* OFFER LADDER */
    .ladder-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .ladder-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    .ladder-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .ladder-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .ladder-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .ladder-table .tier {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
    }
    .ladder-table .price {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .ladder-table .ppsf {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 0 12px 38px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 2px;
    }

    /* SCRIPT BLOCK */
    .script-block {
      background: linear-gradient(135deg, #FAFAFC 0%, #FFFFFF 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.7;
      margin: 14px 0;
    }
    .script-label {
      display: inline-block;
      font-style: normal;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }

    /* WALK-AWAY */
    .walkaway-banner {
      background: linear-gradient(135deg, #FFF8E6 0%, #FFFDF5 100%);
      border: 2px solid var(--nu-warning);
      border-radius: 10px;
      padding: 22px 26px;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 18px;
      align-items: center;
    }
    .walkaway-icon {
      width: 48px; height: 48px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.6rem;
    }
    .walkaway-banner h4 {
      font-weight: 900;
      color: var(--nu-warning);
      margin-bottom: 4px;
      letter-spacing: 0.04em;
    }
    .walkaway-banner p {
      font-size: 0.93rem;
      color: var(--nu-dark-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-divider {
      width: 60px; height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .nu-container { padding: 40px 22px; }
      .nu-section { padding: 28px 24px; }
      .objective-banner {
        grid-template-columns: 1fr;
      }
      .objective-budget {
        text-align: left;
        border-left: none;
        border-top: 2px solid rgba(6,208,255,0.4);
        padding-left: 0;
        padding-top: 18px;
      }
      .two-col { grid-template-columns: 1fr; }
      .ladder-table { font-size: 0.85rem; }
      .ladder-table th, .ladder-table td { padding: 10px 12px; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .page-title { font-size: 1.7rem; }
      .ladder-table { display: block; overflow-x: auto; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-header-eyebrow">Action Item · Acquisition Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="page-title-block">
        <h1 class="page-title">4505 Buttewoods Estate <span class="accent">— Acquisition Strategy</span></h1>
        <p class="page-subtitle">Negotiation playbook for the 7,098 sq ft residential estate. Disciplined offer ladder, leverage points, and walk-away discipline — built so the deal works for Norris Utilities®, not the other way around.</p>
      </div>

      <!-- OBJECTIVE BANNER -->
      <div class="objective-banner">
        <div>
          <h3>Primary Objective</h3>
          <p>Secure 4505 Buttewoods at a price that protects capital, preserves cash flow for the Norris Utilities® inventory and Skylift PO commitments, and delivers measurable upside vs. recent comparable sales. Win the property — never the bidding war.</p>
        </div>
        <div class="objective-budget">
          <div class="label">Walk-Away Discipline</div>
          <div class="value">Hard Cap Set</div>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">PROPERTY</span> <span class="rest">SNAPSHOT</span></div>
        <div class="nu-section-rule"></div>
        <div class="snapshot-grid">
          <div class="snapshot-card">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value">4505 Buttewoods</div>
            <div class="snapshot-sub">Subject estate property</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Heated Sq Ft</div>
            <div class="snapshot-value">7,098</div>
            <div class="snapshot-sub">Per listing</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Property Type</div>
            <div class="snapshot-value">Estate</div>
            <div class="snapshot-sub">Single-family residential</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Status</div>
            <div class="snapshot-value">In Negotiation</div>
            <div class="snapshot-sub">Action item — open</div>
          </div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">OFFER</span> <span class="rest">LADDER</span></div>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">Tiered approach — confirm each tier with Aaron before advancing. Final dollar values to be set against pulled comps and inspection findings; structure and discipline below stand regardless.</p>
        <table class="ladder-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Move</th>
              <th>Trigger</th>
              <th>Posture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tier">Opening</td>
              <td>Anchor low — defensible, comp-backed</td>
              <td>First written offer</td>
              <td>Friendly, factual, with comps attached</td>
            </tr>
            <tr>
              <td class="tier">Counter 1</td>
              <td>Concede on price, hold on terms</td>
              <td>Seller counters above ask</td>
              <td>Move slightly; demand inspection &amp; financing windows</td>
            </tr>
            <tr>
              <td class="tier">Counter 2</td>
              <td>Final realistic number — split the gap, not in half</td>
              <td>Seller within striking range</td>
              <td>Frame as best &amp; final; quiet, firm</td>
            </tr>
            <tr>
              <td class="tier">Walk-Away</td>
              <td>Hold line — silence over capitulation</td>
              <td>Seller exceeds ceiling</td>
              <td>Polite exit, leave door open in writing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">EXECUTION</span> <span class="rest">TIMELINE</span></div>
        <div class="nu-section-rule"></div>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-day">Day 0–2</span>
            <div class="timeline-title">Comp pull &amp; valuation</div>
            <div class="timeline-desc">Pull last 12 months of estate sales within a 3-mile radius. Establish price-per-square-foot bands. Identify the bottom, median, and top of the comp set. This is the foundation — every subsequent number ties back here.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 2–3</span>
            <div class="timeline-title">Seller motivation discovery</div>
            <div class="timeline-desc">Days on market, prior price reductions, listing agent's relationship with seller, reason for sale. Motivation is leverage. A seller in a hurry pays for that hurry.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 3–5</span>
            <div class="timeline-title">Walk-through &amp; condition assessment</div>
            <div class="timeline-desc">In-person tour. Photograph and note every defect — roof age, HVAC, foundation, water intrusion. Each finding is a future negotiation chip and a downward price pressure point.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 5–7</span>
            <div class="timeline-title">Submit opening offer</div>
            <div class="timeline-desc">Written, comp-backed, with proof-of-funds or pre-approval. Set a 48-hour response deadline. Friendly tone, firm number.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 7–14</span>
            <div class="timeline-title">Counter cycle</div>
            <div class="timeline-desc">Two counters maximum. Concede slowly. Pace of concession matters — fast moves signal eagerness and invite further squeeze.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 14–18</span>
            <div class="timeline-title">Inspection &amp; due diligence</div>
            <div class="timeline-desc">Independent inspector. Title search. Survey if not current. Use defects to renegotiate price down — never to back out unless material.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-day">Day 18–30</span>
            <div class="timeline-title">Close or walk</div>
            <div class="timeline-desc">Final terms locked, financing in place, closing scheduled. If terms shifted unfavorably mid-process, walk. The walk is the leverage.</div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE / RISK -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">LEVERAGE</span> <span class="rest">&amp; RISK MAP</span></div>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="col-card leverage">
            <h4>Leverage In Our Favor</h4>
            <ul>
              <li>Cash or near-cash buyer posture — fewer financing contingencies than typical residential bidder</li>
              <li>Discipline to walk — most buyers will not, and sellers can sense the difference</li>
              <li>7,098 sq ft estates have a thinner buyer pool than mid-size homes — fewer competing offers</li>
              <li>Days on market each become a price-pressure point we can cite</li>
              <li>Defects discovered during inspection convert directly to credits or price reductions</li>
              <li>Flexible close date — accommodate seller's timing in exchange for price concessions</li>
            </ul>
          </div>
          <div class="col-card risk">
            <h4>Risks &amp; Squeeze Points</h4>
            <ul>
              <li>Emotional anchoring to the property — fall in love with the deal, not the house</li>
              <li>Listing agent dual-incentive — they get paid only on a sale; do not treat them as an advisor</li>
              <li>Hidden defects: roof, foundation, well/septic if rural — budget contingency for surprises</li>
              <li>Property tax reassessment post-purchase — model the increased annual carrying cost</li>
              <li>Capital tied up here is capital not deployed in Norris Utilities® inventory or growth</li>
              <li>Financing rate movement during a 30-day window — lock early if leveraging debt</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TACTICS -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">NEGOTIATION</span> <span class="rest">TACTICS</span></div>
        <div class="nu-section-rule"></div>
        <div class="tactic-grid">
          <div class="tactic-card">
            <div class="tactic-num">Tactic 01</div>
            <div class="tactic-title">Anchor with comps, not feelings</div>
            <div class="tactic-body">The opening number is defensible only if it ties to specific comparable sales. Attach the comps to the offer. Take the conversation out of "what the seller wants" and into "what the market shows."</div>
          </div>
          <div class="tactic-card">
            <div class="tactic-num">Tactic 02</div>
            <div class="tactic-title">Silence is a tool</div>
            <div class="tactic-body">After submitting a number, stop talking. Do not justify, soften, or fill the pause. Silence puts the weight of the next move on the seller. Most negotiators lose ground in the seconds after they make their offer.</div>
          </div>
          <div class="tactic-card">
            <div class="tactic-num">Tactic 03</div>
            <div class="tactic-title">Concede on terms before price</div>
            <div class="tactic-body">Flexible close date, faster inspection, reduced contingencies — these cost nothing but feel valuable to the seller. Trade them for dollars. Always.</div>
          </div>
          <div class="tactic-card">
            <div class="tactic-num">Tactic 04</div>
            <div class="tactic-title">Use the inspection report — quietly</div>
            <div class="tactic-body">Findings should produce a single, calm, written request for credit or repair. Not a list of grievances. A short letter from a credible inspector beats a long argument.</div>
          </div>
          <div class="tactic-card">
            <div class="tactic-num">Tactic 05</div>
            <div class="tactic-title">Set a deadline. Honor it.</div>
            <div class="tactic-body">Every offer carries a 48-hour expiration. If the seller misses it, the next offer is lower — never higher. Train the counterparty that delay costs them money.</div>
          </div>
          <div class="tactic-card">
            <div class="tactic-num">Tactic 06</div>
            <div class="tactic-title">The walk is real — make it credible</div>
            <div class="tactic-body">Identify a legitimate alternative deployment for the capital before negotiating. The walk is only leverage if the buyer believes it. If you would not actually walk, do not pretend to.</div>
          </div>
        </div>
      </section>

      <!-- SCRIPT -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">OPENING</span> <span class="rest">SCRIPT</span></div>
        <div class="nu-section-rule"></div>
        <div class="script-block">
          <div class="script-label">To the listing agent — first call</div>
          "I'm preparing a written offer on 4505 Buttewoods this week. Before I send it, I'd appreciate a few minutes — what's the seller's timeline, and have there been other offers? My number will be tied to recent comparable estate sales in the area, and I want it to land at a level your seller can take seriously. I'm a serious, qualified buyer. I plan to be straightforward and respectful through the whole process."
        </div>
        <div class="script-block">
          <div class="script-label">When countered above ceiling</div>
          "I appreciate the response. The number you've come back with is above where the comparable sales support, and above where this works for me. I'm going to hold at [counter price] — that's a fair number, and it's the highest I can go. If that doesn't work for the seller, I understand, and I wish you both well."
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">DUE</span> <span class="rest">DILIGENCE CHECKLIST</span></div>
        <div class="nu-section-rule"></div>
        <ul class="checklist">
          <li><strong>Comparable sales analysis</strong>Pull 12-month sold comps within 3 miles, 6,000–8,500 sq ft range. Establish median price-per-sq-ft and define the defensible offering band.</li>
          <li><strong>Days on market &amp; price history</strong>Document every list-price reduction. Each cut is a public admission the prior number was too high — use it.</li>
          <li><strong>Title &amp; survey review</strong>Order a title search and current survey. Verify no easements, encroachments, or liens that affect value or use.</li>
          <li><strong>Independent inspection</strong>Roof, HVAC, foundation, plumbing, electrical, water intrusion. Photograph everything. Estimate repair costs in writing.</li>
          <li><strong>Property tax projection</strong>Model the post-sale reassessment. Build the annual carrying cost into the financial picture before signing.</li>
          <li><strong>Insurance quote</strong>Get a binder quote on the actual property before close. A 7,098 sq ft estate may carry surprises in coverage cost.</li>
          <li><strong>Capital opportunity cost</strong>Compare the down payment to inventory deployment, Skylift PO commitments, or other Norris Utilities® growth uses. Confirm this is the highest-return use of the capital.</li>
          <li><strong>Exit scenario</strong>Define a 5-year sale or hold scenario before close. If the numbers do not work on the exit, they do not work on the entry.</li>
        </ul>
      </section>

      <!-- WALK-AWAY -->
      <div class="walkaway-banner">
        <div class="walkaway-icon">!</div>
        <div>
          <h4>Walk-Away Discipline</h4>
          <p>Set the ceiling number in writing before the first offer goes out. Once written, do not move it under negotiation pressure. The walk-away is the only real leverage in any deal — protect it. The right deal at the wrong price is the wrong deal.</p>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>