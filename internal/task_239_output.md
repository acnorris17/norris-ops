<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #1B7F3A;
      --nu-warning: #C9531B;
      --nu-danger: #B8232C;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
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

    /* DOCUMENT MARK */
    .doc-meta {
      max-width: 1100px;
      margin: 0 auto;
      padding: 28px 40px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 18px;
    }
    .doc-meta .label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .doc-meta .value {
      font-size: 0.85rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .doc-meta-block { line-height: 1.4; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 40px 80px;
    }

    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 36px;
      max-width: 760px;
    }

    /* PROPERTY HERO STRIP */
    .property-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 44px;
    }
    .property-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .property-cell .stat {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .property-cell .stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      font-weight: 700;
    }

    /* SECTIONS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 20px;
      border-radius: 2px;
    }

    /* BADGES */
    .badge-stack { display: flex; flex-direction: column; gap: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge .num {
      display: inline-block;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      text-align: center;
      line-height: 28px;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* CARDS */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .nu-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-card.danger { border-left-color: var(--nu-danger); }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-card p { font-size: 0.94rem; color: var(--nu-body-text); }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      font-size: 0.92rem;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 0;
      top: -2px;
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .ladder-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      position: relative;
      overflow: hidden;
    }
    .ladder-step::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .ladder-step.opener::before { background: var(--nu-success); }
    .ladder-step.middle::before { background: var(--nu-accent-gold); }
    .ladder-step.walk::before { background: var(--nu-danger); }
    .ladder-step .step-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .ladder-step .step-name {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .ladder-step .step-amount {
      font-weight: 900;
      font-size: 1.85rem;
      color: var(--nu-blue);
      line-height: 1.1;
      margin-bottom: 10px;
    }
    .ladder-step .step-rationale {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* CHECKLIST TABLE */
    .checklist-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .checklist-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
    }
    .checklist-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .checklist-table td {
      padding: 14px 18px;
      font-size: 0.92rem;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .checklist-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .checklist-table .pri {
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 9px;
      border-radius: 3px;
      display: inline-block;
    }
    .pri.high { background: var(--nu-danger); color: var(--nu-white); }
    .pri.med { background: var(--nu-accent-gold); color: var(--nu-navy); }
    .pri.low { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      margin-bottom: 22px;
      padding-bottom: 6px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .timeline-item .when {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-item .what {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .timeline-item .detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f4f8ff 0%, #e8f4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 28px;
    }
    .callout strong { color: var(--nu-blue); }
    .callout.warning {
      background: linear-gradient(135deg, #fff8eb 0%, #fff1d6 100%);
      border-left-color: var(--nu-accent-gold);
    }
    .callout.warning strong { color: var(--nu-warning); }

    /* TALK TRACK */
    .script-block {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 16px;
      border-left: 4px solid var(--nu-cyan);
    }
    .script-block .script-label {
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .script-block .script-text {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
      font-style: italic;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.94rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-strip { grid-template-columns: repeat(2, 1fr); }
      .card-grid { grid-template-columns: 1fr; }
      .offer-ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .container { padding: 30px 22px 60px; }
      .page-title { font-size: 1.85rem; }
      .doc-meta { padding: 22px 22px 16px; }
      .nu-badge { clip-path: none; border-radius: 8px; padding-right: 18px; }
      .checklist-table th, .checklist-table td { padding: 10px 12px; font-size: 0.85rem; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META -->
  <div class="nu-content-area">
    <div class="doc-meta">
      <div class="doc-meta-block">
        <div class="label">Confidential — Personal</div>
        <div class="value">Estate Acquisition Strategy</div>
      </div>
      <div class="doc-meta-block">
        <div class="label">Property</div>
        <div class="value">4505 Buttewoods</div>
      </div>
      <div class="doc-meta-block">
        <div class="label">Prepared</div>
        <div class="value">April 21, 2026</div>
      </div>
      <div class="doc-meta-block">
        <div class="label">Principal</div>
        <div class="value">Aaron C. Norris</div>
      </div>
    </div>

    <div class="container">

      <h1 class="page-title">Negotiate the <span class="accent">Buttewoods</span> Acquisition</h1>
      <p class="page-subtitle">A structured negotiation playbook for the 7,098 sq ft estate at 4505 Buttewoods. This document captures the offer ladder, walk-away thresholds, due-diligence calendar, and talking points so the acquisition can move from interest to executed contract without losing leverage at any stage.</p>

      <!-- PROPERTY STRIP -->
      <div class="property-strip">
        <div class="property-cell">
          <div class="stat">7,098</div>
          <div class="stat-label">Sq Ft Estate</div>
        </div>
        <div class="property-cell">
          <div class="stat">4505</div>
          <div class="stat-label">Buttewoods</div>
        </div>
        <div class="property-cell">
          <div class="stat">$900K</div>
          <div class="stat-label">Opening Offer</div>
        </div>
        <div class="property-cell">
          <div class="stat">30 Day</div>
          <div class="stat-label">Inspection Window</div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objective</span></h2>
        <div class="nu-section-rule"></div>
        <div class="callout">
          <p>Acquire 4505 Buttewoods at a price and on terms that protect liquidity for ongoing <strong>Norris Utilities®</strong> operations, preserve cash for the FlexPro Armor inventory build, and lock favorable inspection, financing, and closing-date contingencies before any earnest money is at risk.</p>
        </div>
      </section>

      <!-- PRINCIPLES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Five</span> <span class="rest">Principles That Govern Every Offer</span></h2>
        <div class="nu-section-rule"></div>
        <div class="badge-stack">
          <div class="nu-badge"><span class="num">1</span>Anchor first — opening number framed against comparable sales, not seller's ask.</div>
          <div class="nu-badge"><span class="num">2</span>Never reveal the ceiling — every counter must look like the last one Aaron will make.</div>
          <div class="nu-badge"><span class="num">3</span>Trade concessions, never give them — every dollar up requires a term down.</div>
          <div class="nu-badge"><span class="num">4</span>Silence is leverage — after a number is on the table, stop talking.</div>
          <div class="nu-badge"><span class="num">5</span>Walk-away is real — if the deal exceeds the ceiling, the deal does not happen.</div>
        </div>
      </section>

      <!-- OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <div class="offer-ladder">
          <div class="ladder-step opener">
            <div class="step-label">Opening Anchor</div>
            <div class="step-name">Initial Offer</div>
            <div class="step-amount">$900,000</div>
            <div class="step-rationale">Anchored against pulled comps for 7,000+ sq ft estates in the corridor. Strong but defensible — leaves runway for two upward concessions without exposing ceiling.</div>
          </div>
          <div class="ladder-step middle">
            <div class="step-label">Counter Range</div>
            <div class="step-name">Negotiating Band</div>
            <div class="step-amount">$925K – $950K</div>
            <div class="step-rationale">Movement only in exchange for terms: extended inspection window, seller-paid title, repair credits, or appliances/fixtures retained.</div>
          </div>
          <div class="ladder-step walk">
            <div class="step-label">Hard Ceiling</div>
            <div class="step-name">Walk-Away Line</div>
            <div class="step-amount">$975,000</div>
            <div class="step-rationale">Above this number the deal pulls cash from operations, FlexPro Armor inventory, and Bay Shore travel reserve. Walk without apology.</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist Before Earnest Money</span></h2>
        <div class="nu-section-rule"></div>
        <table class="checklist-table">
          <thead>
            <tr>
              <th style="width:48%">Item</th>
              <th style="width:22%">Owner</th>
              <th style="width:14%">Priority</th>
              <th style="width:16%">Target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pull last 24 months of comparable sales within 1.5 mile radius (7,000+ sq ft, single-family)</td>
              <td>Buyer's Agent</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-offer</td>
            </tr>
            <tr>
              <td>Verify lot survey, easements, setbacks, and any utility right-of-way encumbrances</td>
              <td>Title Co. / Survey</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-contract</td>
            </tr>
            <tr>
              <td>Tax assessor record review — last 3 years of taxable value and millage trend</td>
              <td>Aaron / CB</td>
              <td><span class="pri med">Med</span></td>
              <td>Pre-offer</td>
            </tr>
            <tr>
              <td>Confirm flood zone designation and pull FEMA map for parcel</td>
              <td>Insurance Agent</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-contract</td>
            </tr>
            <tr>
              <td>HOA / covenants / restrictions review — verify any deed restrictions on outbuildings or commercial use</td>
              <td>Buyer's Agent</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-contract</td>
            </tr>
            <tr>
              <td>Pre-offer drive-by + interior walkthrough — note systems age, roof, HVAC, foundation cues</td>
              <td>Aaron</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-offer</td>
            </tr>
            <tr>
              <td>Lender pre-approval letter on letterhead — Renasant first call (Patrick Lavette)</td>
              <td>Aaron</td>
              <td><span class="pri high">High</span></td>
              <td>Pre-offer</td>
            </tr>
            <tr>
              <td>Independent appraisal contingency language drafted into offer</td>
              <td>Buyer's Agent</td>
              <td><span class="pri high">High</span></td>
              <td>With offer</td>
            </tr>
            <tr>
              <td>Sewer scope, structural, termite, mold, radon — full inspection panel scheduled day one of inspection window</td>
              <td>Inspection Vendor</td>
              <td><span class="pri high">High</span></td>
              <td>Day 1 of window</td>
            </tr>
            <tr>
              <td>Insurance bind quote — confirm policy availability and premium before earnest money releases</td>
              <td>Insurance Agent</td>
              <td><span class="pri med">Med</span></td>
              <td>Inspection week</td>
            </tr>
            <tr>
              <td>Prior owner disclosure pull — permits, prior insurance claims, water intrusion history</td>
              <td>Title Co.</td>
              <td><span class="pri med">Med</span></td>
              <td>Inspection week</td>
            </tr>
            <tr>
              <td>School district / future development review — pending zoning changes within 1 mile</td>
              <td>Aaron</td>
              <td><span class="pri low">Low</span></td>
              <td>Pre-close</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CONTINGENCIES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Contingencies — Non-Negotiable Protections</span></h2>
        <div class="nu-section-rule"></div>
        <div class="card-grid">
          <div class="nu-card">
            <h3>Inspection Contingency</h3>
            <ul>
              <li>Minimum 14-day inspection window — request 21 days as opening</li>
              <li>Right to terminate and recover earnest money for any unsatisfactory finding</li>
              <li>Right to negotiate repair credits OR price reduction — buyer's option</li>
            </ul>
          </div>
          <div class="nu-card cyan">
            <h3>Financing Contingency</h3>
            <ul>
              <li>30-day financing window from contract acceptance</li>
              <li>Termination right if loan denied at appraisal or underwriting</li>
              <li>Earnest money fully refundable if financing fails through no fault of buyer</li>
            </ul>
          </div>
          <div class="nu-card gold">
            <h3>Appraisal Contingency</h3>
            <ul>
              <li>Property must appraise at or above contract price</li>
              <li>If short — seller reduces price OR buyer terminates with full earnest refund</li>
              <li>Buyer reserves right to bring own appraiser if lender appraisal is contested</li>
            </ul>
          </div>
          <div class="nu-card danger">
            <h3>Title &amp; Survey Contingency</h3>
            <ul>
              <li>Clear, marketable title required at closing</li>
              <li>Right to terminate for any title defect or survey discrepancy</li>
              <li>Seller responsible for curing any title cloud at seller's expense</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- COUNTER PLAYBOOK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Counter</span> <span class="rest">Playbook — If Seller Pushes Back</span></h2>
        <div class="nu-section-rule"></div>

        <div class="callout warning">
          <p><strong>Discipline:</strong> Never raise the offer in the same breath as receiving a counter. Acknowledge, take the counter, end the conversation. The next response always comes after a 24-hour pause — that pause is leverage.</p>
        </div>

        <div class="card-grid">
          <div class="nu-card">
            <h3>If Seller Counters at Full Ask</h3>
            <p>Hold the $900,000 anchor. Walk through pulled comps in writing. Position the opening as a serious cash-funded offer with no contingency on selling another property. Ask the seller for their three best reasons the price is justified.</p>
          </div>
          <div class="nu-card cyan">
            <h3>If Seller Counters Mid-Range ($930K – $950K)</h3>
            <p>Move up to $920,000 — but only if the seller covers title insurance, accepts a 21-day inspection, and includes the listed appliances and any agreed fixtures in writing. Every dollar up trades for a term down.</p>
          </div>
          <div class="nu-card gold">
            <h3>If Seller Counters Inside Ceiling ($955K – $975K)</h3>
            <p>Final move to $940,000 — present as best and final, with a 48-hour expiration. Add inspection-period repair credit cap of $7,500 and seller-paid closing costs up to 1.5%. Be silent after the offer.</p>
          </div>
          <div class="nu-card danger">
            <h3>If Seller Holds Above $975,000</h3>
            <p>Walk. Send a courteous written close-out: "We respect your number. Our analysis does not support it. If circumstances change, we remain available." Then disengage completely. Do not chase. Time will return the deal — or it won't.</p>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="when">Week 1 — Foundation</div>
            <div class="what">Pull comps, secure pre-approval letter, drive-by walkthrough, draft offer language</div>
            <div class="detail">Renasant call to Patrick Lavette to lock pre-approval terms. Buyer's agent pulls full comp set with photos.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Week 2 — Submission</div>
            <div class="what">Deliver $900,000 written offer with 48-hour acceptance window</div>
            <div class="detail">Offer carries inspection, financing, appraisal, and title contingencies. Earnest money structured to release in two tranches.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Week 2 – 3 — Negotiation</div>
            <div class="what">Counter exchange — disciplined movement only inside negotiating band</div>
            <div class="detail">All counters in writing. 24-hour pause before each response. Concessions traded for terms.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 1 – 21 of Contract — Inspection</div>
            <div class="what">Full inspection panel — structural, termite, sewer scope, HVAC, electrical, mold, radon</div>
            <div class="detail">Aaron present for walkthrough debrief. Repair credit negotiation closes by day 21.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Days 22 – 30 — Financing &amp; Title</div>
            <div class="what">Lock financing, finalize title commitment, schedule closing date</div>
            <div class="detail">Insurance bound. Wire instructions verified by phone — never by email.</div>
          </div>
          <div class="timeline-item">
            <div class="when">Day 30 – 45 — Closing</div>
            <div class="what">Funds wire, signatures executed, keys transfer</div>
            <div class="detail">Final walkthrough 24 hours before closing. Confirm property in agreed condition.</div>
          </div>
        </div>
      </section>

      <!-- TALK TRACKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Talk</span> <span class="rest">Tracks for Live Negotiation</span></h2>
        <div class="nu-section-rule"></div>

        <div class="script-block">
          <div class="script-label">Opening the Offer</div>
          <div class="script-text">"We've done the work on this property — pulled the comparables, walked the lot, and run the numbers against what the corridor has actually transacted at over the last twenty-four months. Our offer is $900,000. It's serious, it's funded, and it reflects what the market will support."</div>
        </div>

        <div class="script-block">
          <div class="script-label">Responding to a High Counter</div>
          <div class="script-text">"I appreciate the response. I'm going to take this back, sit with it, and come back to you. I'll have a written answer within twenty-four hours."</div>
        </div>

        <div class="script-block">
          <div class="script-label">Best and Final</div>
          <div class="script-text">"This is the number. $940,000, with the terms attached. I'd rather walk away from this property as a friend than overpay for it and resent the deal for ten years. The offer expires in forty-eight hours. I hope we get there."</div>
        </div>

        <div class="script-block">
          <div class="script-label">The Walk-Away</div>
          <div class="script-text">"I respect what you're asking. The math doesn't work for me at that level. I wish you the best with the listing — if anything changes on your end, my number stays the same. Thank you for the time."</div>
        </div>
      </section>

      <!-- RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <div class="nu-section-rule"></div>
        <table class="checklist-table">
          <thead>
            <tr>
              <th style="width:34%">Risk</th>
              <th style="width:33%">Mitigation</th>
              <th style="width:33%">Trigger to Walk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hidden structural or foundation issue in 7,098 sq ft footprint</td>
              <td>Independent structural engineer added to inspection panel</td>
              <td>Repair estimate above $25,000 with no seller credit</td>
            </tr>
            <tr>
              <td>Appraisal short of contract price</td>
              <td>Appraisal contingency in writing — buyer right to terminate or renegotiate</td>
              <td>Seller refuses to reduce price to appraised value</td>
            </tr>
            <tr>
              <td>Cash drain impacts FlexPro Armor inventory build or Samson Rope working capital</td>
              <td>Hard ceiling at $975,000 — operations cash protected first</td>
              <td>Any scenario forcing draw on operating reserves</td>
            </tr>
            <tr>
              <td>Title defect, easement, or covenant restriction discovered late</td>
              <td>Title commitment review with attorney inside contingency window</td>
              <td>Seller unwilling to cure or insure around defect</td>
            </tr>
            <tr>
              <td>Property taxes reassess sharply on transfer</td>
              <td>Pull millage history and project worst-case escrow</td>
              <td>Annual carrying cost exceeds underwriting model by 15%+</td>
            </tr>
            <tr>
              <td>Insurance premium higher than projected — flood, wind, age of systems</td>
              <td>Bind quote before earnest money release</td>
              <td>Annual premium more than double the underwriting estimate</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- DECISION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Authority</span></h2>
        <div class="nu-section-rule"></div>
        <div class="callout">
          <p><strong>Aaron C. Norris alone</strong> approves every counter, every concession, and the final close decision. Caroline Butler may coordinate documents, schedule inspections, and route paperwork — no number, term, or signature moves without Aaron's direct sign-off. Communications with the seller's agent route exclusively through the buyer's agent. No direct contact between principals during active negotiation.</p>
        </div>
      </section>

    </div>
  </div>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Confidential personal acquisition strategy — prepared April 21, 2026</div>
  </footer>

</body>
</html>