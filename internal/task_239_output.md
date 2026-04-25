<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Brief — 4505 Buttewoods | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #2D7D4F;
      --nu-warning: #C9701C;
      --nu-danger: #B8202A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 65%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    /* GHOST PHOENIX WATERMARK */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 24px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.78em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-document-label {
      display: inline-block;
      margin-top: 28px;
      padding: 8px 24px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
    }

    /* WHITE CHEVRON TRANSITION */
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
      padding-bottom: 80px;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 0;
      position: relative;
      z-index: 2;
    }

    /* DOCUMENT TITLE BLOCK */
    .doc-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 36px;
    }
    .doc-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SUMMARY GRID */
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-bottom: 28px;
    }
    .property-stat {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 0 6px 6px 0;
    }
    .property-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .property-stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .property-stat-detail {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* TWO-COLUMN LAYOUT */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 28px;
    }

    /* INFO CARDS */
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .info-card h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .info-card ul { list-style: none; padding: 0; }
    .info-card ul li {
      padding: 6px 0;
      font-size: 0.95rem;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .info-card ul li:last-child { border-bottom: none; }
    .info-card ul li .label { color: #666; font-weight: 400; }
    .info-card ul li .value { color: var(--nu-dark-text); font-weight: 700; text-align: right; }

    /* NEGOTIATION TABLE */
    .neg-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.92rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
    }
    .neg-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .neg-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .neg-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .neg-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .neg-table tbody tr:last-child td { border-bottom: none; }
    .neg-table .num { text-align: right; font-weight: 700; font-family: 'Lato', sans-serif; }
    .neg-table .scenario {
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* STRATEGY BADGES */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }
    .strat-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 18px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }
    .strat-badge.cyan { background: linear-gradient(135deg, #0a3a55 0%, #0d5a7a 100%); }
    .strat-badge.gold { background: linear-gradient(135deg, #6b5418 0%, #8a6f24 100%); }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 16px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .timeline-phase {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .timeline-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* RISK / OPPORTUNITY GRID */
    .ro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    .ro-card {
      padding: 20px;
      border-radius: 8px;
      border-left: 5px solid;
    }
    .ro-card.risk {
      background: #FBEDEE;
      border-left-color: var(--nu-danger);
    }
    .ro-card.opp {
      background: #EAF5EE;
      border-left-color: var(--nu-success);
    }
    .ro-card h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .ro-card.risk h4 { color: var(--nu-danger); }
    .ro-card.opp h4 { color: var(--nu-success); }
    .ro-card ul { padding-left: 18px; }
    .ro-card ul li {
      margin-bottom: 8px;
      font-size: 0.92rem;
      line-height: 1.5;
    }

    /* OPENING POSITION CALLOUT */
    .position-callout {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin: 28px 0;
      text-align: center;
      box-shadow: 0 8px 30px rgba(0,0,255,0.2);
    }
    .position-callout .label {
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      opacity: 0.9;
      margin-bottom: 8px;
    }
    .position-callout .amount {
      font-size: 2.6rem;
      font-weight: 900;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
    }
    .position-callout .note {
      font-size: 0.95rem;
      opacity: 0.92;
      font-style: italic;
    }

    /* WALK-AWAY BAR */
    .walkaway {
      display: flex;
      gap: 0;
      border-radius: 8px;
      overflow: hidden;
      margin: 12px 0 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .walkaway-cell {
      flex: 1;
      padding: 18px 16px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .walkaway-cell:last-child { border-right: none; }
    .walkaway-cell .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 4px;
    }
    .walkaway-cell .amount {
      font-size: 1.25rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .walkaway-cell.target { background: linear-gradient(135deg, #EAF5EE 0%, #D5EBDD 100%); }
    .walkaway-cell.target .amount { color: var(--nu-success); }
    .walkaway-cell.ceiling { background: linear-gradient(135deg, #FBEDEE 0%, #F7DCDE 100%); }
    .walkaway-cell.ceiling .amount { color: var(--nu-danger); }

    /* TALKING POINTS */
    .points-list {
      list-style: none;
      padding: 0;
      counter-reset: pt;
    }
    .points-list li {
      counter-increment: pt;
      position: relative;
      padding: 14px 16px 14px 56px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      font-size: 0.95rem;
      border-left: 3px solid var(--nu-cyan);
    }
    .points-list li::before {
      content: counter(pt);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }

    /* SIGNATURE BLOCK */
    .signature-block {
      margin-top: 40px;
      padding: 28px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-top: 4px solid var(--nu-blue);
    }
    .signature-block h4 {
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .signature-block p {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 12px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong { color: var(--nu-white); font-weight: 700; }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.6;
    }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 14px;
      letter-spacing: 0.08em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .two-col, .ro-grid { grid-template-columns: 1fr; }
      .nu-logo-text { font-size: 2.4rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1.05rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .doc-title { font-size: 1.6rem; }
      .nu-container { padding: 36px 24px 0; }
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .position-callout .amount { font-size: 2rem; }
      .walkaway { flex-direction: column; }
      .walkaway-cell { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .walkaway-cell:last-child { border-bottom: none; }
      .neg-table { font-size: 0.82rem; }
      .neg-table th, .neg-table td { padding: 10px 10px; }
    }
    @media (max-width: 520px) {
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.18em; }
      .property-grid { grid-template-columns: 1fr 1fr; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .position-callout, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .info-card, .neg-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-document-label">Estate Acquisition Brief</div>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="doc-title-block">
        <div class="doc-eyebrow">Confidential — Negotiation Strategy</div>
        <h1 class="doc-title">Estate Purchase Negotiation — 4505 Buttewoods</h1>
        <div class="doc-subtitle">7,098 sq ft estate acquisition strategy, valuation framework, and counter-offer playbook.</div>
        <div class="doc-meta">
          <span><strong>Prepared for:</strong> Aaron C. Norris</span>
          <span><strong>Date:</strong> April 25, 2026</span>
          <span><strong>Status:</strong> Active — Pre-Offer</span>
          <span><strong>Source:</strong> reMarkable Action Item</span>
        </div>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Property</span> <span class="rest">Snapshot</span></h2>

        <div class="property-grid">
          <div class="property-stat">
            <div class="property-stat-label">Address</div>
            <div class="property-stat-value">4505 Buttewoods</div>
            <div class="property-stat-detail">Subject Estate Property</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Total Living Area</div>
            <div class="property-stat-value">7,098 sq ft</div>
            <div class="property-stat-detail">Estate-class residence</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Property Class</div>
            <div class="property-stat-value">Estate</div>
            <div class="property-stat-detail">High-end residential</div>
          </div>
          <div class="property-stat">
            <div class="property-stat-label">Negotiation Stage</div>
            <div class="property-stat-value">Pre-Offer</div>
            <div class="property-stat-detail">Strategy development</div>
          </div>
        </div>

        <div class="two-col">
          <div class="info-card">
            <h3>Subject Property — Items to Confirm</h3>
            <ul>
              <li><span class="label">Lot size (acres)</span><span class="value">Confirm with seller</span></li>
              <li><span class="label">Year built</span><span class="value">Confirm with seller</span></li>
              <li><span class="label">Bedrooms / Bathrooms</span><span class="value">Confirm with seller</span></li>
              <li><span class="label">Garage / outbuildings</span><span class="value">Confirm with seller</span></li>
              <li><span class="label">HVAC / roof age</span><span class="value">Inspection item</span></li>
              <li><span class="label">Recent capital improvements</span><span class="value">Request seller list</span></li>
              <li><span class="label">Current asking price</span><span class="value">Request from seller</span></li>
              <li><span class="label">Days on market</span><span class="value">Pull from MLS</span></li>
            </ul>
          </div>

          <div class="info-card">
            <h3>Diligence Required Before Offer</h3>
            <ul>
              <li><span class="label">Independent appraisal</span><span class="value">Order</span></li>
              <li><span class="label">Title commitment</span><span class="value">Order</span></li>
              <li><span class="label">Survey (boundary + topo)</span><span class="value">Order</span></li>
              <li><span class="label">Home inspection (full)</span><span class="value">Order at offer</span></li>
              <li><span class="label">Roof / HVAC / foundation</span><span class="value">Specialist inspections</span></li>
              <li><span class="label">Comps (3-mile, 12-month)</span><span class="value">Pull MLS</span></li>
              <li><span class="label">Tax history (5 years)</span><span class="value">Pull from county</span></li>
              <li><span class="label">Lien / judgment search</span><span class="value">Title company</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 2: VALUATION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Valuation</span> <span class="rest">Framework</span></h2>

        <p style="margin-bottom: 18px;">Three independent methods. Anchor the offer to the lowest defensible number; let the seller justify any premium.</p>

        <table class="neg-table">
          <thead>
            <tr>
              <th>Valuation Method</th>
              <th>Inputs</th>
              <th>Why It Matters</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="scenario">Comparable Sales</td>
              <td>3 closed sales within 3 miles, last 12 months, 5,500–8,500 sq ft</td>
              <td>Market floor &mdash; what buyers actually paid</td>
              <td>Pull comps</td>
            </tr>
            <tr>
              <td class="scenario">Replacement Cost</td>
              <td>Land value + (7,098 sq ft &times; per-sq-ft build cost) &minus; depreciation</td>
              <td>Caps the upside &mdash; cannot rationally pay more than rebuild cost</td>
              <td>Order build estimate</td>
            </tr>
            <tr>
              <td class="scenario">Income / Use Value</td>
              <td>If held: rental comparable. If primary: lifestyle premium quantified</td>
              <td>Sets the personal walk-away ceiling</td>
              <td>Aaron decision</td>
            </tr>
            <tr>
              <td class="scenario">Tax-Assessed Value</td>
              <td>County assessor record</td>
              <td>Public anchor &mdash; useful in negotiation, rarely matches market</td>
              <td>Pull from county</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- OPENING POSITION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Opening</span> <span class="rest">Position &amp; Walk-Away Bands</span></h2>

        <div class="position-callout">
          <div class="label">Recommended Opening Offer</div>
          <div class="amount">85% of Verified Market Value</div>
          <div class="note">Leaves 5–10% room to move. Anchored to comps, not asking price.</div>
        </div>

        <p style="margin-bottom: 12px;"><strong>Final numbers depend on confirmed comps and appraisal.</strong> Below are the bands as percentages of verified market value (VMV) &mdash; populate the dollar figures once the appraisal lands.</p>

        <div class="walkaway">
          <div class="walkaway-cell target">
            <div class="label">Target — Best Case</div>
            <div class="amount">85% of VMV</div>
          </div>
          <div class="walkaway-cell">
            <div class="label">Likely Settle</div>
            <div class="amount">92–95% of VMV</div>
          </div>
          <div class="walkaway-cell ceiling">
            <div class="label">Walk-Away Ceiling</div>
            <div class="amount">100% of VMV</div>
          </div>
        </div>

        <div class="info-card" style="margin-top: 18px;">
          <h3>Why a Hard Ceiling at Verified Market Value</h3>
          <p style="font-size: 0.95rem; line-height: 1.6;">
            Estate-class properties carry illiquidity premium. Paying above verified market value compresses
            future return, restricts resale options, and creates equity exposure if the regional market softens.
            The discipline is not "get the deal" &mdash; it is "get the right deal." Every estate has a price at
            which walking away is the correct answer. Define that price <em>before</em> the negotiation, not during.
          </p>
        </div>
      </section>

      <!-- SECTION 4: NEGOTIATION TACTICS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Negotiation</span> <span class="rest">Tactics</span></h2>

        <div class="badge-row">
          <span class="strat-badge">Anchor to Comps</span>
          <span class="strat-badge cyan">Patience as Leverage</span>
          <span class="strat-badge gold">Cash + Quick Close</span>
          <span class="strat-badge">Concession Trades</span>
          <span class="strat-badge cyan">Single Point of Contact</span>
        </div>

        <ol class="points-list">
          <li><strong>Lead with the appraisal, not the wallet.</strong> Hand the seller a documented valuation packet with offer #1. Removes the conversation from emotion to evidence.</li>
          <li><strong>Anchor low, justify hard.</strong> Open at 85% of VMV with three closed comparable sales attached. Let the seller move first toward the middle.</li>
          <li><strong>Trade concessions, do not give them.</strong> If asked to come up on price, ask for closing-cost credit, retained appliances, or extended due-diligence in exchange. Never raise price for nothing.</li>
          <li><strong>Use silence after each counter.</strong> Resist the urge to fill the pause. Seller's anxiety works for the buyer who is not in a hurry.</li>
          <li><strong>Lead with cash and a 21-day close if financing supports it.</strong> A clean, fast close is worth real dollars to a motivated seller &mdash; quantify that premium and capture it as a price reduction.</li>
          <li><strong>Inspection contingency is non-negotiable.</strong> 7,098 sq ft of structure means real-money exposure on roof, HVAC, foundation, and septic/well if applicable. Reserve the right to renegotiate or walk based on findings.</li>
          <li><strong>Establish a single point of contact.</strong> One representative, one channel. Prevents seller's agent from playing parties off each other.</li>
          <li><strong>Set an expiration on every offer.</strong> 72 hours, in writing. Forces a decision and prevents the offer from being shopped to other buyers.</li>
        </ol>
      </section>

      <!-- SECTION 5: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Recommended</span> <span class="rest">Timeline</span></h2>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Phase 1 — Days 1 to 5</div>
            <div class="timeline-title">Verification &amp; Comps</div>
            <div class="timeline-detail">Pull MLS comps (3-mile, 12-month). Order independent appraisal. Confirm asking price, days on market, and seller motivation through listing agent.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 2 — Days 6 to 10</div>
            <div class="timeline-title">Title &amp; Diligence Pre-Work</div>
            <div class="timeline-detail">Open title commitment. Run lien and judgment searches. Pull tax history. Confirm financing letter or proof of funds for cash position.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 3 — Days 11 to 14</div>
            <div class="timeline-title">Offer #1 — Anchor</div>
            <div class="timeline-detail">Submit written offer at 85% of verified market value. Include valuation packet, proof of funds, and 72-hour expiration. Inspection contingency, financing contingency (if applicable), title contingency.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 4 — Days 15 to 25</div>
            <div class="timeline-title">Counter Cycle</div>
            <div class="timeline-detail">Respond to seller counters with concession trades, not pure price moves. Hold to walk-away ceiling. Move in $5,000–$10,000 increments, never round numbers.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 5 — Days 26 to 35</div>
            <div class="timeline-title">Inspection &amp; Repair Negotiation</div>
            <div class="timeline-detail">Full home inspection plus specialist trades (roof, HVAC, foundation). Use findings to negotiate seller credits or repairs. Expect a second-round price adjustment of 1–3%.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 6 — Days 36 to 50</div>
            <div class="timeline-title">Close</div>
            <div class="timeline-detail">Final walk-through 24–48 hours pre-close. Confirm clear title, all credits applied, all repairs completed. Close, fund, record.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6: RISK / OPPORTUNITY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Risks</span> <span class="rest">&amp; Opportunities</span></h2>

        <div class="ro-grid">
          <div class="ro-card risk">
            <h4>Risks to Manage</h4>
            <ul>
              <li><strong>Estate liquidity:</strong> 7,098 sq ft homes have a thin buyer pool. Resale takes longer.</li>
              <li><strong>Carrying cost:</strong> Property tax, insurance, and utilities on an estate-class home are material monthly expenses.</li>
              <li><strong>Deferred maintenance:</strong> Larger structure means more systems &mdash; roof, HVAC, plumbing &mdash; each with replacement cost. Budget a maintenance reserve.</li>
              <li><strong>Title or boundary surprises:</strong> Older estates often have easements, encroachments, or undocumented improvements. Survey is non-negotiable.</li>
              <li><strong>Emotional attachment:</strong> Falling in love with the property destroys leverage. Walk-away ceiling must be set in writing before showings.</li>
            </ul>
          </div>

          <div class="ro-card opp">
            <h4>Opportunities to Capture</h4>
            <ul>
              <li><strong>Motivated seller signal:</strong> If days on market exceed 90, seller is likely flexible on price and terms.</li>
              <li><strong>Cash + quick close premium:</strong> Sellers will trade 3–7% off price for certainty and speed.</li>
              <li><strong>As-is concession:</strong> Offering to take the property as-is in exchange for a lower price can save the seller repair headache and accelerate the deal.</li>
              <li><strong>Personal property included:</strong> Furniture, appliances, generator, equipment &mdash; itemize what stays. Free value if negotiated upfront.</li>
              <li><strong>Long-term hold appreciation:</strong> Estate-class properties in established neighborhoods typically outperform median market over 10+ year horizons.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 7: TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Opening</span> <span class="rest">Conversation Script</span></h2>

        <div class="info-card">
          <h3>Use With Listing Agent — First Call</h3>
          <p style="font-size: 0.95rem; line-height: 1.7;">
            "I'm a serious, qualified buyer interested in 4505 Buttewoods. Before I bring an offer, I'd like to understand
            a few things: How long has the property been listed? What's the seller's situation &mdash; relocation, downsizing,
            estate sale? Any known issues from prior inspections? I'm prepared to move quickly with a clean offer if the
            numbers work, and I'd rather have one honest conversation now than three rounds of back-and-forth later."
          </p>
        </div>

        <div class="info-card" style="margin-top: 16px;">
          <h3>When Presenting Offer #1</h3>
          <p style="font-size: 0.95rem; line-height: 1.7;">
            "This offer is anchored to three closed comparable sales in the area within the last twelve months &mdash; I've attached
            them. It's not designed to be the final number; it's designed to be a fair starting point that respects both
            parties' time. Proof of funds is included. Offer expires in 72 hours. If the seller wants to discuss terms,
            I'm available."
          </p>
        </div>
      </section>

      <!-- SIGNATURE BLOCK -->
      <section class="nu-section">
        <div class="signature-block">
          <h4>Authorization &amp; Next Step</h4>
          <p>
            This brief is the working framework for the 4505 Buttewoods acquisition. Final offer figures are pending
            confirmed comparable sales and an independent appraisal. No offer will be submitted until verified market
            value is established, walk-away ceiling is set in writing, and proof-of-funds documentation is in hand.
          </p>
          <p>
            <strong>Immediate next step:</strong> Pull MLS comparables and order independent appraisal. Target completion
            within five business days. All inbound communication on this property routes through Aaron C. Norris, Founder
            &amp; CEO, as the single point of contact.
          </p>
          <p style="margin-top: 18px; font-style: italic; color: #666; font-size: 0.88rem;">
            Confidential. For internal Norris Utilities® use. Do not distribute.
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
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Estate Acquisition Brief &middot; 4505 Buttewoods &middot; Prepared April 25, 2026
    </div>
  </footer>

</body>
</html>