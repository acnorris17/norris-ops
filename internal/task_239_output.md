<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #1B873F;
      --nu-warning: #C97A1A;
      --nu-danger: #B8232A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
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
      width: 78px;
      height: 78px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
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

    /* CONTENT AREA WITH GHOST PHOENIX */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 8%; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PROPERTY HERO BAR */
    .property-hero {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 50%, #002499 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 12px;
      margin-bottom: 40px;
      box-shadow: 0 10px 40px rgba(0,0,51,0.18);
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 32px;
      align-items: center;
    }
    .property-hero h1 {
      font-weight: 900;
      font-size: 1.9rem;
      letter-spacing: 0.02em;
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .property-hero .address {
      font-size: 1.05rem;
      font-weight: 400;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .property-hero .meta {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.7;
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .stat-cell {
      background: rgba(6, 208, 255, 0.08);
      border: 1px solid rgba(6, 208, 255, 0.25);
      border-radius: 8px;
      padding: 14px 16px;
      text-align: center;
    }
    .stat-cell .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .stat-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-white);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: #0033cc;
      margin: 48px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 900;
    }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 64px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-top: 10px;
      border-radius: 2px;
    }
    .section-lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
      max-width: 880px;
    }

    /* CARDS */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-card.cyan-top { border-top-color: var(--nu-cyan); }
    .nu-card.gold-top { border-top-color: var(--nu-accent-gold); }
    .nu-card.navy-top { border-top-color: var(--nu-navy); }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card .kicker {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-card p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }
    .nu-card ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 8px;
      font-size: 0.92rem;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 0;
      top: -2px;
      font-size: 1.2rem;
    }

    /* OFFER LADDER TABLE */
    .ladder-wrap {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    table.ladder {
      width: 100%;
      border-collapse: collapse;
    }
    table.ladder thead {
      background: linear-gradient(135deg, #0033cc 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
    }
    table.ladder thead th {
      padding: 16px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    table.ladder tbody tr {
      border-bottom: 1px solid var(--nu-medium-gray);
      transition: background 0.15s ease;
    }
    table.ladder tbody tr:last-child { border-bottom: none; }
    table.ladder tbody tr:hover { background: var(--nu-light-gray); }
    table.ladder tbody td {
      padding: 16px 18px;
      font-size: 0.94rem;
      vertical-align: top;
    }
    table.ladder .step-pill {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      padding: 4px 12px;
      border-radius: 999px;
      letter-spacing: 0.06em;
    }
    table.ladder .price {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    table.ladder tr.target-row {
      background: rgba(6, 208, 255, 0.06);
    }
    table.ladder tr.target-row .step-pill {
      background: var(--nu-success);
    }
    table.ladder tr.walk-row {
      background: rgba(184, 35, 42, 0.04);
    }
    table.ladder tr.walk-row .step-pill {
      background: var(--nu-danger);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 4px;
      bottom: 4px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .timeline-item .when {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-item .what {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .timeline-item .detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 10px;
      padding: 24px 28px;
      border-left: 4px solid var(--nu-cyan);
    }
    .checklist h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .checklist ul {
      list-style: none;
      padding: 0;
    }
    .checklist ul li {
      padding-left: 28px;
      position: relative;
      margin-bottom: 10px;
      font-size: 0.94rem;
      line-height: 1.5;
    }
    .checklist ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* NEGOTIATION SCRIPT BOX */
    .script-box {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border: 1px solid #d6e0ff;
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 18px;
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      box-shadow: 0 2px 8px rgba(0,0,255,0.04);
    }
    .script-box .who {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: 900;
      font-size: 0.74rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      display: block;
      margin-bottom: 8px;
    }

    /* RISK MATRIX */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 20px;
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-card .severity {
      display: inline-block;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .risk-card .severity.high { background: #fdecec; color: var(--nu-danger); }
    .risk-card .severity.med { background: #fff4e6; color: var(--nu-warning); }
    .risk-card .severity.low { background: #e6f4ea; color: var(--nu-success); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .risk-card .mitigation {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .risk-card .mitigation strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #001a66 0%, var(--nu-navy) 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 32px 36px;
      margin: 36px 0;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 24px;
      align-items: center;
    }
    .callout .badge {
      width: 64px;
      height: 64px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-navy);
    }
    .callout h3 {
      font-weight: 900;
      font-size: 1.2rem;
      margin-bottom: 6px;
    }
    .callout p {
      color: rgba(255,255,255,0.88);
      font-size: 0.96rem;
    }

    /* ACTIONS */
    .actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 30px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 13px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
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
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 36px 20px; }
      .property-hero { grid-template-columns: 1fr; padding: 26px; }
      .property-hero h1 { font-size: 1.5rem; }
      .stat-grid { grid-template-columns: repeat(2, 1fr); }
      .callout { grid-template-columns: 1fr; text-align: center; padding: 24px; }
      table.ladder thead { display: none; }
      table.ladder tbody td {
        display: block;
        padding: 8px 16px;
      }
      table.ladder tbody tr {
        padding: 14px 0;
        display: block;
      }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .ladder-wrap { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .actions { display: none; }
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

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div>
          <h1>Estate Acquisition Negotiation Strategy</h1>
          <div class="address">4505 Buttewoods • 7,098 sq ft Estate</div>
          <div class="meta">
            Prepared for Aaron C. Norris, Founder &amp; CEO • Norris Utilities®<br>
            Internal working document — Action plan, offer ladder, scripts, and walk-away terms.<br>
            Last updated: April 22, 2026
          </div>
        </div>
        <div class="stat-grid">
          <div class="stat-cell">
            <div class="label">Square Feet</div>
            <div class="value">7,098</div>
          </div>
          <div class="stat-cell">
            <div class="label">Target Offer</div>
            <div class="value">$900K</div>
          </div>
          <div class="stat-cell">
            <div class="label">Walk-Away</div>
            <div class="value">$985K</div>
          </div>
          <div class="stat-cell">
            <div class="label">Close Goal</div>
            <div class="value">≤ 45 Days</div>
          </div>
        </div>
      </section>

      <!-- PHASE 1: PRE-NEGOTIATION INTEL -->
      <h2 class="nu-section-title">Phase 1 — <span>Pre-Negotiation Intelligence</span></h2>
      <p class="section-lead">
        Walk into the negotiation knowing more than the seller's agent. Every number quoted in this plan
        must be backed by a verifiable source before the first offer is delivered.
      </p>

      <div class="card-grid">
        <div class="nu-card">
          <div class="kicker">Comparable Sales</div>
          <h3>Pull 3 Comps Within ½ Mile</h3>
          <p>Estate-class homes 6,500–7,500 sq ft, sold in the last 12 months. Adjust for lot size, age, and finish level.</p>
          <ul>
            <li>Source: county tax records + MLS</li>
            <li>Compute $/sq ft median &amp; range</li>
            <li>Note any sales above asking — that signals seller leverage</li>
          </ul>
        </div>
        <div class="nu-card cyan-top">
          <div class="kicker">Days On Market</div>
          <h3>Time = Leverage</h3>
          <p>The longer 4505 Buttewoods has been listed, the more carrying cost the seller is bleeding monthly.</p>
          <ul>
            <li>0–30 days: seller has leverage, expect firm pricing</li>
            <li>31–90 days: seller is open to terms negotiation</li>
            <li>90+ days: seller will entertain price cuts</li>
          </ul>
        </div>
        <div class="nu-card gold-top">
          <div class="kicker">Seller Motivation</div>
          <h3>Why Are They Selling?</h3>
          <p>Estate sale, divorce, relocation, downsize, financial pressure — each motivation changes the negotiation lever you pull.</p>
          <ul>
            <li>Estate / probate → speed &amp; certainty win</li>
            <li>Relocation → flexible close date wins</li>
            <li>Financial → cash &amp; quick close wins</li>
          </ul>
        </div>
        <div class="nu-card navy-top">
          <div class="kicker">Property History</div>
          <h3>Title, Tax &amp; Permit Pull</h3>
          <p>Pull the full title chain, tax assessment history, and permit record before submitting offer.</p>
          <ul>
            <li>Last sale price &amp; date (sets seller's basis)</li>
            <li>Outstanding liens or HOA dues</li>
            <li>Permitted vs. unpermitted square footage</li>
          </ul>
        </div>
      </div>

      <!-- PHASE 2: OFFER LADDER -->
      <h2 class="nu-section-title">Phase 2 — <span>Offer Ladder &amp; Pricing Discipline</span></h2>
      <p class="section-lead">
        Discipline beats enthusiasm. Each rung is pre-decided. No verbal commitments above the rung
        you are currently on. Move only after the seller has rejected the prior offer in writing.
      </p>

      <div class="ladder-wrap">
        <table class="ladder">
          <thead>
            <tr>
              <th>Step</th>
              <th>Offer Price</th>
              <th>Trigger / Conditions</th>
              <th>Concessions Requested</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="step-pill">1</span></td>
              <td class="price">$835,000</td>
              <td>Opening offer. Anchored 12% below asking. 30-day close. 14-day inspection period.</td>
              <td>Seller pays title insurance + 50% of closing costs.</td>
            </tr>
            <tr>
              <td><span class="step-pill">2</span></td>
              <td class="price">$865,000</td>
              <td>Counter received. Hold position 48 hours before responding. No verbal agreement.</td>
              <td>Seller credits $8,000 for inspection findings (use as repair allowance).</td>
            </tr>
            <tr class="target-row">
              <td><span class="step-pill">TARGET</span></td>
              <td class="price">$900,000</td>
              <td><strong>Sweet spot.</strong> Best price + acceptable terms. Sign here if the seller meets or beats it.</td>
              <td>Standard close. No seller concessions. Cash or 25% down conventional financing.</td>
            </tr>
            <tr>
              <td><span class="step-pill">3</span></td>
              <td class="price">$935,000</td>
              <td>Only if comps + inspection confirm value AND seller agrees to extended close window.</td>
              <td>60–75 day close. Possession at close. All appliances convey.</td>
            </tr>
            <tr>
              <td><span class="step-pill">4</span></td>
              <td class="price">$965,000</td>
              <td>Final ceiling. Only triggered by competing offer evidence in writing.</td>
              <td>Strict close timeline + earnest money increase to $25,000.</td>
            </tr>
            <tr class="walk-row">
              <td><span class="step-pill">WALK</span></td>
              <td class="price">$985,000+</td>
              <td><strong>Walk away.</strong> Anything above $985K breaks the underwriting. Politely close the file.</td>
              <td>None. Send the walk-away letter (script below) within 24 hours.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout">
        <div class="badge">!</div>
        <div>
          <h3>The 24-Hour Rule</h3>
          <p>Never accept, counter, or improve an offer in the same conversation. Always wait 24 hours minimum
          before responding to a seller counter. Time pressure is the seller's tool — patience is yours.</p>
        </div>
      </div>

      <!-- PHASE 3: NEGOTIATION SCRIPTS -->
      <h2 class="nu-section-title">Phase 3 — <span>Negotiation Scripts</span></h2>
      <p class="section-lead">
        Use these as starting language. Adapt tone — direct, warm, never apologetic, never pushy.
      </p>

      <div class="script-box">
        <span class="who">Opening Offer Delivery</span>
        "We've reviewed the property carefully and pulled comparable sales within a half mile from the
        last twelve months. Our offer is $835,000, written clean — 30-day close, standard inspection, proof
        of funds attached. We're ready to sign today. We'd appreciate hearing back by end of business Thursday."
      </div>

      <div class="script-box">
        <span class="who">Responding to a High Counter</span>
        "We appreciate the response. The number isn't where we need to be, but we want to keep working
        toward this. Help me understand what's driving the seller's position above the comps — if there's
        something we're not seeing, we'd like to factor it in before we move."
      </div>

      <div class="script-box">
        <span class="who">Inspection Leverage Conversation</span>
        "The inspection identified items we didn't price into our original offer. Rather than re-trade
        the price, we'd like a $8,000 credit at closing toward the work. That keeps your seller's
        headline number intact and gets us across the finish line on the original timeline."
      </div>

      <div class="script-box">
        <span class="who">Walk-Away Letter</span>
        "Thank you for the time and the showings. After running the numbers against current comparable
        sales, we're not able to meet the seller's price expectations and remain disciplined to our
        underwriting. We'll close our file on this property. If circumstances change on the seller's
        side, our offer at $935,000 stands open through May 31."
      </div>

      <!-- PHASE 4: TIMELINE -->
      <h2 class="nu-section-title">Phase 4 — <span>45-Day Execution Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="when">Day 0 — Today</div>
          <div class="what">Pull comps, tax records, title chain, and permit history</div>
          <div class="detail">Confirm seller motivation through listing agent. Verify financing pre-approval is current and stamped with proof-of-funds letter.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 1–3</div>
          <div class="what">Submit Step 1 offer at $835,000</div>
          <div class="detail">Written, clean terms, 30-day close, 14-day inspection. Earnest money $10,000 to title company. Set 48-hour response deadline.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 4–7</div>
          <div class="what">Counter rounds — Step 2 then Target ($900K)</div>
          <div class="detail">Hold the 24-hour discipline between every move. Keep listing agent's responses in writing — emails only, no verbal commitments.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 8</div>
          <div class="what">Mutual contract executed — open escrow</div>
          <div class="detail">Earnest money wired same day. Title company opens file. Inspection scheduled within 72 hours.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 9–22</div>
          <div class="what">Inspection, appraisal, title work</div>
          <div class="detail">Inspection on Day 10. Negotiate repair credits or seller fixes by Day 16. Appraisal complete Day 18. Title commitment delivered Day 20.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 23–37</div>
          <div class="what">Loan underwriting &amp; clear-to-close</div>
          <div class="detail">Submit underwriting conditions weekly. Confirm homeowners insurance binder. Lock rate if not already locked.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 38–43</div>
          <div class="what">Final walkthrough &amp; closing disclosure review</div>
          <div class="detail">Compare CD against original LE — flag any line-item delta over $100. Walkthrough 24 hours before close.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Day 45</div>
          <div class="what">Close &amp; record</div>
          <div class="detail">Wire funds morning of close. Sign at title office. Possession at funding &amp; recording. Keys in hand.</div>
        </div>
      </div>

      <!-- PHASE 5: RISK MATRIX -->
      <h2 class="nu-section-title">Phase 5 — <span>Risk Matrix &amp; Mitigation</span></h2>
      <div class="risk-grid">
        <div class="risk-card">
          <span class="severity high">High</span>
          <h4>Appraisal Comes In Low</h4>
          <p>If the bank appraises below the contracted price, the lender will not fund the difference. This is the most common deal-killer at this price point.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Include an appraisal contingency. If the gap is under $25K, request seller meet halfway. Walk if gap exceeds $40K.</div>
        </div>
        <div class="risk-card">
          <span class="severity high">High</span>
          <h4>Hidden Structural / Mechanical Issues</h4>
          <p>7,098 sq ft estates carry HVAC, roof, foundation, and pool/septic exposure that can total six figures.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Hire a licensed structural engineer separate from the standard inspector. Cost: ~$650. Worth every dollar.</div>
        </div>
        <div class="risk-card">
          <span class="severity med">Medium</span>
          <h4>Competing Offer Pressure</h4>
          <p>Listing agent claims another offer is incoming to force escalation. May be real, may be tactic.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Require written proof of competing offer terms. If unwilling to provide, treat as bluff and hold position.</div>
        </div>
        <div class="risk-card">
          <span class="severity med">Medium</span>
          <h4>Title or Lien Encumbrance</h4>
          <p>Estate properties often carry probate complications, easements, or unrecorded liens.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Order preliminary title report Day 1. Use a title company with attorney oversight, not just a closer.</div>
        </div>
        <div class="risk-card">
          <span class="severity low">Low</span>
          <h4>Insurance Binding Difficulty</h4>
          <p>Older estate roofs or rural locations can complicate homeowners insurance binding.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Get insurance quote within Day 7. If declined, requote with three carriers before alarming the deal.</div>
        </div>
        <div class="risk-card">
          <span class="severity low">Low</span>
          <h4>Seller Re-Trade After Inspection</h4>
          <p>Some sellers attempt to reopen price after buyer requests repairs.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Frame inspection requests as credit-only, not price reduction. Sellers protect headline price more than net.</div>
        </div>
      </div>

      <!-- PRE-OFFER CHECKLIST -->
      <h2 class="nu-section-title">Pre-Offer <span>Checklist</span></h2>
      <div class="checklist">
        <h4>Complete Every Item Before Offer Goes In Writing</h4>
        <ul>
          <li>Three comparable sales pulled within ½ mile, last 12 months</li>
          <li>Tax assessment and last sale price verified through county records</li>
          <li>Title chain reviewed for liens, easements, and encumbrances</li>
          <li>Permit history confirms square footage is fully permitted</li>
          <li>Days-on-market and price-cut history documented</li>
          <li>Seller motivation confirmed through agent or public records</li>
          <li>Proof-of-funds letter or pre-approval dated within 30 days</li>
          <li>Earnest money wire instructions confirmed with title company</li>
          <li>Inspection contractor and structural engineer identified and on standby</li>
          <li>Insurance quote requested from primary carrier</li>
          <li>Walk-away price ($985,000) committed in writing to self before negotiation begins</li>
          <li>Drive-by completed at three different times of day (morning, afternoon, dusk)</li>
        </ul>
      </div>

      <!-- DECISION RULES -->
      <h2 class="nu-section-title">Decision <span>Rules</span></h2>
      <div class="card-grid">
        <div class="nu-card">
          <h3>Rule 1: Discipline Over Emotion</h3>
          <p>The walk-away price is a contract with yourself. Falling in love with the property is the most expensive mistake a buyer can make. The next house exists.</p>
        </div>
        <div class="nu-card cyan-top">
          <h3>Rule 2: Everything In Writing</h3>
          <p>No verbal commitments, no handshake adjustments. If it isn't in an email or signed addendum, it didn't happen. Memories are unreliable; PDFs are not.</p>
        </div>
        <div class="nu-card gold-top">
          <h3>Rule 3: 24 Hours Before Every Move</h3>
          <p>Never respond to a counter inside the same business day. Pause, sleep on it, then move. Pace dictates leverage.</p>
        </div>
        <div class="nu-card navy-top">
          <h3>Rule 4: Inspection Findings = Credit, Not Re-Trade</h3>
          <p>Sellers protect their headline number. Frame post-inspection asks as closing credits, not price drops. Same dollars, lower friction.</p>
        </div>
      </div>

      <div class="actions">
        <a href="#" class="nu-btn-primary">Print This Strategy Document</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation" class="nu-btn-secondary">Email Working Notes</a>
      </div>

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
      INTERNAL WORKING DOCUMENT • CONFIDENTIAL • PREPARED 2026-04-22
    </div>
  </footer>

</body>
</html>