<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — 4505 Buttewoods | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 300px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* HEADLINE BLOCK */
    .hero-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 40px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .hero-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 18px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 20px;
      border-radius: 2px;
    }
    .hero-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .hero-title span {
      color: var(--nu-blue);
    }
    .hero-sub {
      font-weight: 400;
      font-size: 1.15rem;
      color: #555;
      max-width: 720px;
      margin: 0 auto;
    }

    /* SECTION TITLES */
    .section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 8px;
      color: var(--nu-blue);
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-subtitle {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 24px;
    }

    /* PROPERTY SUMMARY CARD */
    .property-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 50px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .prop-cell {
      background: var(--nu-white);
      padding: 24px 20px;
      text-align: center;
    }
    .prop-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .prop-value {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .prop-suffix {
      font-size: 0.8rem;
      font-weight: 400;
      color: #777;
      margin-top: 4px;
    }

    /* BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-icon {
      width: 24px;
      height: 24px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* NEGOTIATION STRATEGY */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 50px;
    }
    .strategy-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 26px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .strategy-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .strategy-card.highlight { border-top-color: var(--nu-cyan); }
    .strategy-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-weight: 900;
      border-radius: 50%;
      font-size: 0.95rem;
      margin-bottom: 12px;
    }
    .strategy-card.highlight .strategy-num { background: var(--nu-cyan); color: var(--nu-navy); }
    .strategy-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .strategy-card p {
      font-size: 0.92rem;
      color: #555;
      line-height: 1.6;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 40px;
      margin-bottom: 50px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 8px; bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding: 0 0 26px 20px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px; top: 6px;
      width: 18px; height: 18px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .timeline-date {
      font-weight: 900;
      font-size: 0.8rem;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-body {
      font-size: 0.92rem;
      color: #555;
    }

    /* FINANCIAL TABLE */
    .fin-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 50px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .fin-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .fin-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .fin-table th.num, .fin-table td.num { text-align: right; }
    .fin-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      background: var(--nu-white);
    }
    .fin-table tr:last-child td { border-bottom: none; }
    .fin-table tr.subtotal td {
      background: var(--nu-light-gray);
      font-weight: 700;
    }
    .fin-table tr.total td {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
    }
    .fin-table tr.total td .tag {
      display: inline-block;
      color: var(--nu-cyan);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      margin-left: 8px;
    }

    /* DUE DILIGENCE CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 26px 28px;
      border-radius: 4px;
      margin-bottom: 50px;
    }
    .checklist h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-navy);
      margin-bottom: 14px;
    }
    .checklist ul {
      list-style: none;
    }
    .checklist li {
      position: relative;
      padding: 6px 0 6px 30px;
      font-size: 0.95rem;
      color: #333;
      border-bottom: 1px dashed #ccc;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 11px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* CTA BLOCK */
    .cta-block {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 44px 36px;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 40px;
      box-shadow: 0 8px 28px rgba(0,0,51,0.25);
    }
    .cta-block h3 {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .cta-block p {
      color: rgba(255,255,255,0.85);
      margin-bottom: 24px;
      font-size: 1rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 30px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(255,255,255,0.2);
    }
    .btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 14px 30px;
      border: 2px solid rgba(255,255,255,0.6);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.1);
      border-color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .hero-title { font-size: 1.9rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .fin-table th, .fin-table td { padding: 10px 12px; font-size: 0.85rem; }
      .timeline { padding-left: 30px; }
      .cta-block { padding: 32px 22px; }
      .cta-block h3 { font-size: 1.35rem; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
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

      <!-- HERO -->
      <section class="hero-block">
        <span class="hero-eyebrow">Real Estate Acquisition Brief</span>
        <h1 class="hero-title">4505 Buttewoods —<br><span>7,098 Sq Ft Estate Negotiation</span></h1>
        <p class="hero-sub">Structured acquisition playbook for the Buttewoods estate. This brief consolidates property facts, valuation framework, negotiation ladder, and due-diligence checklist into one decision document for Aaron C. Norris.</p>
      </section>

      <!-- PROPERTY SUMMARY -->
      <section>
        <h2 class="section-title">Property <span>at a Glance</span></h2>
        <p class="section-subtitle">Key facts pulled from the reMarkable action item.</p>

        <div class="property-summary">
          <div class="prop-cell">
            <div class="prop-label">Address</div>
            <div class="prop-value" style="font-size: 1.05rem;">4505 Buttewoods</div>
            <div class="prop-suffix">Target Property</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Living Area</div>
            <div class="prop-value">7,098</div>
            <div class="prop-suffix">Square Feet</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Asset Class</div>
            <div class="prop-value" style="font-size: 1.1rem;">Estate</div>
            <div class="prop-suffix">Single-Family Residence</div>
          </div>
          <div class="prop-cell">
            <div class="prop-label">Status</div>
            <div class="prop-value" style="font-size: 1.1rem; color: var(--nu-blue);">Active</div>
            <div class="prop-suffix">Negotiation Phase</div>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section>
        <h2 class="section-title">Negotiation <span>Strategy</span></h2>
        <p class="section-subtitle">Five-step framework to open strong, concede selectively, and close on favorable terms.</p>

        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          PLAYBOOK — FIVE MOVES FROM OPENING BID TO CLOSE
        </div>

        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-num">1</div>
            <h3>Anchor Below Market</h3>
            <p>Open at 88–92% of the most recent comparable sale per square foot for Buttewoods. Justify the anchor with a written recap of roof, HVAC, and deferred maintenance observations from the walkthrough.</p>
          </div>
          <div class="strategy-card highlight">
            <div class="strategy-num">2</div>
            <h3>Earnest Money with Teeth</h3>
            <p>Offer 1.0–1.5% earnest money, fully refundable through inspection period. Signals seriousness without exposing the balance sheet if the home inspection surfaces material defects.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">3</div>
            <h3>Contingency Stack</h3>
            <p>Financing (45 days), inspection (10 business days), appraisal (shall equal or exceed contract), and title (clean commitment). Do not waive any contingency during the first round of negotiation.</p>
          </div>
          <div class="strategy-card highlight">
            <div class="strategy-num">4</div>
            <h3>Concede on Timing, Not Price</h3>
            <p>If the seller pushes back on price, move on closing date or leaseback instead. A 30-day leaseback after close is cheaper than a $25,000 price bump on a 7,098 sq ft home.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-num">5</div>
            <h3>Walk Away Trigger</h3>
            <p>Pre-commit a hard ceiling before the counter-offer cycle begins. If the seller refuses to clear the ceiling after two rounds, the offer is withdrawn in writing the same business day.</p>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section>
        <h2 class="section-title">Deal <span>Timeline</span></h2>
        <p class="section-subtitle">Target cadence from opening offer through close. Dates keyed off acceptance (Day 0).</p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Day -7 to Day 0</div>
            <div class="timeline-title">Walkthrough, Comp Pull, Opening Offer Submitted</div>
            <div class="timeline-body">Second walkthrough with a qualified inspector, pull last 90 days of comparable sales within a 1-mile radius, prepare written opening offer and rationale.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 0 to Day 5</div>
            <div class="timeline-title">Negotiation Round 1 & 2 — Terms Locked</div>
            <div class="timeline-body">Exchange counter-offers. Agree on price, contingencies, closing date, and any seller credits. Fully executed contract by Day 5 at the latest.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 5 to Day 15</div>
            <div class="timeline-title">Inspection Period — Due Diligence Sprint</div>
            <div class="timeline-body">Licensed home inspector, termite/WDO, septic or sewer lateral, HVAC check, roof certification. Negotiate repair credits or price reduction based on findings.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 15 to Day 35</div>
            <div class="timeline-title">Appraisal, Title, & Financing</div>
            <div class="timeline-body">Lender-ordered appraisal, title commitment review, survey if required, loan underwriting, clear-to-close issued by lender.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 35 to Day 45</div>
            <div class="timeline-title">Close & Possession</div>
            <div class="timeline-body">Final walkthrough 24 hours before close. Wire funds, sign documents, record deed. Keys handed over at close — or per leaseback if negotiated.</div>
          </div>
        </div>
      </section>

      <!-- FINANCIAL FRAMEWORK -->
      <section>
        <h2 class="section-title">Financial <span>Framework</span></h2>
        <p class="section-subtitle">Working template for offer modeling. Numbers are placeholders for Aaron to populate after comp pull — no assumed sale price.</p>

        <table class="fin-table">
          <thead>
            <tr>
              <th>Line Item</th>
              <th>Basis</th>
              <th class="num">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opening Offer Price</td>
              <td>88–92% of comp avg $/sq ft × 7,098 sq ft</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr>
              <td>Earnest Money Deposit</td>
              <td>1.0–1.5% of offer price</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr>
              <td>Down Payment Target</td>
              <td>20% of agreed price (avoid PMI)</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr>
              <td>Inspection Reserve</td>
              <td>Repair credit budget held back</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr class="subtotal">
              <td>Seller Concessions Requested</td>
              <td>Closing costs, title, survey if applicable</td>
              <td class="num">NEGOTIATE</td>
            </tr>
            <tr>
              <td>Closing Costs (Buyer Side)</td>
              <td>~2.5–3.5% of purchase price</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr>
              <td>Reserves Post-Close</td>
              <td>6 months PITI minimum</td>
              <td class="num">TO CALCULATE</td>
            </tr>
            <tr class="total">
              <td>Walk-Away Ceiling<span class="tag">HARD LIMIT</span></td>
              <td>Set before Round 1 counter-offer</td>
              <td class="num">SET BY AARON</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          DUE DILIGENCE — ITEMS TO CLEAR BEFORE REMOVING CONTINGENCIES
        </div>

        <div class="checklist">
          <h3>Pre-Close Verification Checklist</h3>
          <ul>
            <li>Licensed home inspection completed, report in hand, major issues priced</li>
            <li>Termite / wood-destroying organism inspection — clean letter or treatment credit</li>
            <li>HVAC inspection — age, tonnage, remaining useful life documented</li>
            <li>Roof certification — licensed roofer, remaining life in years</li>
            <li>Septic or sewer lateral inspection if applicable</li>
            <li>Survey ordered — confirms lot lines, easements, encroachments</li>
            <li>Title commitment reviewed — no undisclosed liens, mechanic's liens, or judgments</li>
            <li>HOA documents, CC&Rs, dues history, and any pending special assessments reviewed</li>
            <li>Property tax history pulled — five-year trend, last reassessment date</li>
            <li>Insurance binder quoted — flood zone confirmed, replacement cost adequate</li>
            <li>Appraisal ordered, comes in at or above contract price</li>
            <li>Lender clear-to-close issued in writing</li>
            <li>Final walkthrough within 24 hours of closing — confirms condition, items conveyed</li>
          </ul>
        </div>
      </section>

      <!-- RISKS & RED FLAGS -->
      <section>
        <h2 class="section-title">Risks <span>to Watch</span></h2>
        <p class="section-subtitle">Estate-size homes (7,098 sq ft) carry carrying-cost exposure that mid-size homes do not. Price each of these before committing.</p>

        <div class="strategy-grid">
          <div class="strategy-card">
            <div class="strategy-num" style="background: #C9A84C; color: var(--nu-white);">A</div>
            <h3>Carrying Cost Drag</h3>
            <p>Property taxes, insurance, and utilities on a 7,098 sq ft home run materially higher than a 3,500 sq ft home. Model 12 months of carrying costs into the walk-away ceiling.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-num" style="background: #C9A84C; color: var(--nu-white);">B</div>
            <h3>Deferred Maintenance</h3>
            <p>Larger footprint means larger roof, more HVAC zones, more plumbing runs. One failed zone or one roof section can cost five figures. Build a $20,000–$40,000 reserve assumption.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-num" style="background: #C9A84C; color: var(--nu-white);">C</div>
            <h3>Appraisal Risk</h3>
            <p>Estate-size homes have thinner comp sets. If the appraisal comes in short, the contract price must be renegotiated, or the buyer brings cash to close. Include an appraisal contingency without exception.</p>
          </div>
          <div class="strategy-card">
            <div class="strategy-num" style="background: #C9A84C; color: var(--nu-white);">D</div>
            <h3>Resale Velocity</h3>
            <p>Luxury estates sell slowly. If exit is within 36 months, the transaction costs and carrying costs can erase appreciation. Confirm hold horizon before signing.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section>
        <div class="cta-block">
          <h3>Ready to Open the Offer?</h3>
          <p>Next step is a written opening offer backed by a comp pull and walk-away ceiling locked in before the first counter. This brief lives in the Norris Utilities® ops portal for reference throughout the negotiation.</p>
          <div class="cta-buttons">
            <a href="mailto:acnorris@norrisutilities.com?subject=Buttewoods%20Estate%20%E2%80%94%20Opening%20Offer%20Review" class="btn-primary">Draft Opening Offer</a>
            <a href="tel:2055001343" class="btn-secondary">Call Aaron — 205-500-1343</a>
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
      Real Estate Acquisition Brief — 4505 Buttewoods Estate — Internal Use — Generated 2026-04-24
    </div>
  </footer>

</body>
</html>