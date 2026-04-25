<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Negotiation Brief — Norris Utilities®</title>
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
      --nu-success: #2D7A4F;
      --nu-warning: #C9620E;
      --nu-danger: #B22222;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
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

    /* DOCUMENT META BAR */
    .doc-meta-bar {
      background: var(--nu-white);
      border-bottom: 3px solid var(--nu-cyan);
      padding: 20px 40px;
    }
    .doc-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
    }
    .doc-meta-item {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }
    .doc-meta-label {
      display: block;
      font-weight: 900;
      font-size: 0.7rem;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .doc-meta-value { font-weight: 700; color: var(--nu-dark-text); }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 60px;
    }
    .content-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-title-block {
      text-align: center;
      margin-bottom: 40px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }

    /* PROPERTY HERO CARD */
    .property-hero {
      background: var(--nu-white);
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid var(--nu-medium-gray);
      overflow: hidden;
      margin-bottom: 40px;
    }
    .property-hero-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      padding: 28px 32px;
      color: var(--nu-white);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    .property-address {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.02em;
    }
    .property-address-sub {
      font-size: 0.9rem;
      color: var(--nu-cyan);
      font-weight: 400;
      margin-top: 4px;
    }
    .status-pill {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 8px 18px;
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .property-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
    }
    .stat-cell {
      background: var(--nu-white);
      padding: 24px 18px;
      text-align: center;
    }
    .stat-value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .stat-label {
      font-size: 0.72rem;
      color: var(--nu-body-text);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* SECTION */
    .section-block {
      background: var(--nu-white);
      border-radius: 12px;
      padding: 32px 36px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .section-title .first { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .section-kicker {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .section-divider {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 14px 0 22px;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    /* DATA TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.92rem;
    }
    .data-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .data-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
    }
    .data-table tr:nth-child(even) td { background: #fafafa; }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table .label-col { font-weight: 700; color: var(--nu-dark-text); width: 38%; }
    .data-table .value-num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }

    /* BADGES inline */
    .inline-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .badge-green { background: #E0F2E9; color: var(--nu-success); }
    .badge-amber { background: #FCEFD9; color: var(--nu-warning); }
    .badge-red   { background: #F8DCDC; color: var(--nu-danger); }
    .badge-blue  { background: #DDE6FF; color: var(--nu-blue); }

    /* PRICING LADDER */
    .price-ladder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-top: 18px;
    }
    @media (max-width: 768px) { .price-ladder { grid-template-columns: 1fr 1fr; } }
    .price-rung {
      background: linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 18px 14px;
      border-radius: 8px;
      text-align: center;
    }
    .price-rung.target { border-top-color: var(--nu-success); background: linear-gradient(180deg, #ffffff 0%, #f0f9f3 100%); }
    .price-rung.walk   { border-top-color: var(--nu-danger); }
    .price-rung-label {
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .price-rung-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .price-rung-note {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 6px;
    }

    /* CHEVRON BADGES (negotiation tactics) */
    .tactic-list { list-style: none; margin-top: 10px; }
    .tactic-item {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 24px 16px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 16px 50%);
      padding-left: 28px;
    }
    @media (max-width: 768px) {
      .tactic-item { clip-path: none; border-radius: 8px; padding-left: 18px; }
    }
    .tactic-num {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 14px;
      margin-top: 2px;
    }
    .tactic-body { flex: 1; font-size: 0.95rem; line-height: 1.5; }
    .tactic-body strong { color: var(--nu-cyan); display: block; margin-bottom: 2px; font-size: 0.95rem; }

    /* TIMELINE */
    .timeline { position: relative; padding-left: 28px; margin-top: 8px; }
    .timeline::before {
      content: '';
      position: absolute;
      left: 7px; top: 4px; bottom: 4px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .timeline-item { position: relative; margin-bottom: 18px; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -25px; top: 4px;
      width: 13px; height: 13px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .timeline-date {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .timeline-event {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 2px;
    }
    .timeline-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* RISKS */
    .risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 12px;
    }
    @media (max-width: 768px) { .risk-grid { grid-template-columns: 1fr; } }
    .risk-card {
      border-left: 4px solid var(--nu-warning);
      background: #FFFBF4;
      padding: 16px 18px;
      border-radius: 0 8px 8px 0;
    }
    .risk-card.high   { border-left-color: var(--nu-danger); background: #FEF6F6; }
    .risk-card.low    { border-left-color: var(--nu-success); background: #F4FBF6; }
    .risk-title {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
    .risk-mitigation {
      font-size: 0.86rem;
      color: var(--nu-body-text);
    }
    .risk-mitigation strong { color: var(--nu-blue); }

    /* CHECKLIST */
    .checklist { list-style: none; margin-top: 8px; }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
    }
    .checklist li strong { color: var(--nu-dark-text); display: block; margin-bottom: 2px; }
    .checklist li span.due { color: var(--nu-blue); font-weight: 700; font-size: 0.82rem; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 12px;
      margin-bottom: 28px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 24px;
      box-shadow: 0 6px 20px rgba(0,0,255,0.18);
    }
    .callout-icon {
      width: 56px; height: 56px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.6rem;
      font-family: var(--font-tagline);
      font-style: italic;
    }
    .callout-body { flex: 1; min-width: 240px; }
    .callout-title {
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .callout-text { font-size: 0.95rem; color: rgba(255,255,255,0.92); }

    /* COMP TABLE shaded value cell */
    .comp-card {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 16px 18px;
      border-left: 3px solid var(--nu-cyan);
    }
    .comp-card + .comp-card { margin-top: 10px; }
    .comp-card-head {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 4px;
    }
    .comp-addr { font-weight: 900; color: var(--nu-dark-text); font-size: 0.95rem; }
    .comp-price { font-weight: 900; color: var(--nu-blue); font-size: 1.05rem; }
    .comp-meta { font-size: 0.82rem; color: var(--nu-body-text); }

    /* SCRIPT BOX */
    .script-box {
      background: #F8FAFF;
      border: 1px dashed var(--nu-blue);
      border-radius: 8px;
      padding: 18px 22px;
      margin-top: 14px;
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .script-box em {
      display: block;
      font-style: italic;
      color: var(--nu-blue);
      font-size: 0.78rem;
      margin-bottom: 8px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.85; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.04em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 30px 18px 40px; }
      .section-block { padding: 22px 20px; }
      .doc-meta-bar { padding: 16px 20px; }
      .property-hero-banner { padding: 20px; }
      .page-title { font-size: 1.7rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section-block { box-shadow: none; page-break-inside: avoid; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOCUMENT META BAR -->
  <div class="doc-meta-bar">
    <div class="doc-meta-inner">
      <div class="doc-meta-item">
        <span class="doc-meta-label">Document</span>
        <span class="doc-meta-value">Negotiation Brief — Confidential</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Prepared For</span>
        <span class="doc-meta-value">Aaron C. Norris, Founder &amp; CEO</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Date</span>
        <span class="doc-meta-value">April 25, 2026</span>
      </div>
      <div class="doc-meta-item">
        <span class="doc-meta-label">Source</span>
        <span class="doc-meta-value">reMarkable Action Item</span>
      </div>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="content-inner">

      <!-- TITLE -->
      <div class="page-title-block">
        <div class="page-title">Negotiate Purchase of <span>4505 Buttewoods</span></div>
        <p class="page-subtitle">7,098 sq ft estate acquisition — strategy, pricing, due diligence, and step-by-step playbook to take the property under contract on terms that protect Norris Utilities®.</p>
      </div>

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="property-hero-banner">
          <div>
            <div class="property-address">4505 Buttewoods</div>
            <div class="property-address-sub">Single-Family Residence — Estate Acquisition Target</div>
          </div>
          <div class="status-pill">Pre-Offer Stage</div>
        </div>
        <div class="property-stats">
          <div class="stat-cell">
            <div class="stat-value">7,098</div>
            <div class="stat-label">Heated Sq Ft</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">Estate</div>
            <div class="stat-label">Listing Type</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">Cash</div>
            <div class="stat-label">Offer Type</div>
          </div>
          <div class="stat-cell">
            <div class="stat-value">21 Day</div>
            <div class="stat-label">Target Close</div>
          </div>
        </div>
      </section>

      <!-- CALLOUT -->
      <section class="callout">
        <div class="callout-icon">!</div>
        <div class="callout-body">
          <div class="callout-title">Bottom Line Up Front</div>
          <div class="callout-text">Estate sales reward speed, certainty, and emotional discipline. Lead with a clean, fast cash offer at <strong>~85–90% of fair value</strong>, hold a hard walk-away ceiling, and let the executor's clock work for us. Verify clear title, scope hidden costs, and confirm one accurate per-square-foot comp set before any number is committed in writing.</div>
        </div>
      </section>

      <!-- SECTION: NEGOTIATION OBJECTIVES -->
      <section class="section-block">
        <div class="section-kicker">Section 01</div>
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="section-divider"></div>
        <div class="two-col">
          <div>
            <h3 style="font-weight:900; color:var(--nu-dark-text); font-size:1rem; margin-bottom:10px;">Primary Goals</h3>
            <ul style="list-style:none;">
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-blue">P1</span> &nbsp; Acquire 4505 Buttewoods at or below the established walk-away ceiling.</li>
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-blue">P2</span> &nbsp; Secure a 10–14 day inspection / due-diligence window with earnest money escrowed.</li>
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-blue">P3</span> &nbsp; Close in 21–30 days to give the executor speed and certainty.</li>
              <li style="padding:8px 0;"><span class="inline-badge badge-blue">P4</span> &nbsp; Protect Norris Utilities® cash position — no waivers of inspection or title.</li>
            </ul>
          </div>
          <div>
            <h3 style="font-weight:900; color:var(--nu-dark-text); font-size:1rem; margin-bottom:10px;">Non-Negotiables</h3>
            <ul style="list-style:none;">
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-red">Hard</span> &nbsp; Owner's title insurance with full search of the estate chain.</li>
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-red">Hard</span> &nbsp; Inspection contingency &mdash; no "as-is, no inspection" deals.</li>
              <li style="padding:8px 0; border-bottom:1px solid var(--nu-medium-gray);"><span class="inline-badge badge-red">Hard</span> &nbsp; Probate / executor authority documented in writing.</li>
              <li style="padding:8px 0;"><span class="inline-badge badge-red">Hard</span> &nbsp; Earnest money capped at 1% until inspection is cleared.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: VALUATION & PRICE LADDER -->
      <section class="section-block">
        <div class="section-kicker">Section 02</div>
        <h2 class="section-title"><span class="first">Valuation</span> <span class="rest">&amp; Price Ladder</span></h2>
        <div class="section-divider"></div>

        <p style="margin-bottom:14px;">The 7,098 sq ft footprint puts this property in the upper end of any typical residential market. Until the comp set, condition report, and any deferred-maintenance scope are confirmed, all numbers below are <strong>placeholders to be replaced with verified data</strong> before the offer goes out. Aaron must approve the final ladder.</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Valuation Anchor</th>
              <th>Source</th>
              <th class="value-num">$ / Sq Ft</th>
              <th class="value-num">Implied Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-col">List / Asking Price</td>
              <td>Estate listing or executor</td>
              <td class="value-num">— confirm —</td>
              <td class="value-num">— confirm —</td>
            </tr>
            <tr>
              <td class="label-col">Tax Assessed Value</td>
              <td>County assessor record</td>
              <td class="value-num">— confirm —</td>
              <td class="value-num">— confirm —</td>
            </tr>
            <tr>
              <td class="label-col">Comparable Sales (last 12 mo)</td>
              <td>3–5 closed comps within 1 mile</td>
              <td class="value-num">— confirm —</td>
              <td class="value-num">— confirm —</td>
            </tr>
            <tr>
              <td class="label-col">Replacement Cost (improvements)</td>
              <td>Insurance / builder estimate</td>
              <td class="value-num">— confirm —</td>
              <td class="value-num">— confirm —</td>
            </tr>
            <tr>
              <td class="label-col">Independent Appraisal</td>
              <td>Order before final offer</td>
              <td class="value-num">— confirm —</td>
              <td class="value-num">— confirm —</td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top:18px; font-size:0.85rem; color:var(--nu-body-text); font-style:italic;">Once the four anchors above are filled in, the ladder below will be expressed in real dollars. The structure (anchor → opening → target → walk-away) does not change.</p>

        <div class="price-ladder">
          <div class="price-rung">
            <div class="price-rung-label">Anchor (Listing)</div>
            <div class="price-rung-value">100%</div>
            <div class="price-rung-note">Reference only — never accept first ask.</div>
          </div>
          <div class="price-rung">
            <div class="price-rung-label">Opening Offer</div>
            <div class="price-rung-value">82–85%</div>
            <div class="price-rung-note">Cash, fast close, clean terms.</div>
          </div>
          <div class="price-rung target">
            <div class="price-rung-label">Target Settlement</div>
            <div class="price-rung-value">88–92%</div>
            <div class="price-rung-note">Where Aaron expects to land.</div>
          </div>
          <div class="price-rung walk">
            <div class="price-rung-label">Walk-Away Ceiling</div>
            <div class="price-rung-value">95%</div>
            <div class="price-rung-note">No further movement. Walk and revisit in 30 days.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: COMP STRATEGY -->
      <section class="section-block">
        <div class="section-kicker">Section 03</div>
        <h2 class="section-title"><span class="first">Comparable</span> <span class="rest">Sales Strategy</span></h2>
        <div class="section-divider"></div>
        <p>Pull <strong>5 closed sales</strong> from the last 12 months that match on three of these four criteria: same submarket / school zone, 5,500–8,500 sq ft, similar lot, similar age. Discard outliers. Use the median price-per-sq-ft to anchor the offer in writing — the executor's attorney will respect a documented number more than a verbal opinion.</p>

        <div style="margin-top:18px;">
          <div class="comp-card">
            <div class="comp-card-head">
              <span class="comp-addr">Comp #1 — to be pulled from MLS / county records</span>
              <span class="comp-price">— confirm —</span>
            </div>
            <div class="comp-meta">Sq Ft, lot, sale date, $/sq ft — fill in before offer.</div>
          </div>
          <div class="comp-card">
            <div class="comp-card-head">
              <span class="comp-addr">Comp #2 — to be pulled from MLS / county records</span>
              <span class="comp-price">— confirm —</span>
            </div>
            <div class="comp-meta">Sq Ft, lot, sale date, $/sq ft — fill in before offer.</div>
          </div>
          <div class="comp-card">
            <div class="comp-card-head">
              <span class="comp-addr">Comp #3 — to be pulled from MLS / county records</span>
              <span class="comp-price">— confirm —</span>
            </div>
            <div class="comp-meta">Sq Ft, lot, sale date, $/sq ft — fill in before offer.</div>
          </div>
          <div class="comp-card">
            <div class="comp-card-head">
              <span class="comp-addr">Comp #4 — to be pulled from MLS / county records</span>
              <span class="comp-price">— confirm —</span>
            </div>
            <div class="comp-meta">Sq Ft, lot, sale date, $/sq ft — fill in before offer.</div>
          </div>
          <div class="comp-card">
            <div class="comp-card-head">
              <span class="comp-addr">Comp #5 — to be pulled from MLS / county records</span>
              <span class="comp-price">— confirm —</span>
            </div>
            <div class="comp-meta">Sq Ft, lot, sale date, $/sq ft — fill in before offer.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: NEGOTIATION TACTICS -->
      <section class="section-block">
        <div class="section-kicker">Section 04</div>
        <h2 class="section-title"><span class="first">Negotiation</span> <span class="rest">Playbook — 10 Tactics</span></h2>
        <div class="section-divider"></div>
        <ul class="tactic-list">
          <li class="tactic-item">
            <span class="tactic-num">1</span>
            <span class="tactic-body"><strong>Lead with certainty, not the highest number.</strong> Estate sellers want a deal that closes &mdash; cash, no financing contingency, fast close. Frame the offer around <em>"this will close"</em>, then talk price.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">2</span>
            <span class="tactic-body"><strong>Anchor with the comp median, not the list price.</strong> Quote the documented $/sq ft from the 5 comp set in writing. Forces the conversation onto our turf.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">3</span>
            <span class="tactic-body"><strong>Use silence after the offer.</strong> Submit, then stop talking. Most price movement happens because buyers fill silence with concessions. Aaron does not.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">4</span>
            <span class="tactic-body"><strong>Move price in shrinking increments.</strong> $25K → $10K → $4K signals "this is the last move." Equal-sized concessions train the seller to keep asking.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">5</span>
            <span class="tactic-body"><strong>Trade non-price terms for price.</strong> Faster close, post-close possession for the executor, contents removal flexibility &mdash; these can be worth $10–30K to the other side at zero hard cost to us.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">6</span>
            <span class="tactic-body"><strong>Never negotiate against ourselves.</strong> If the executor doesn't counter, do not bump the offer. Wait for movement before we move.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">7</span>
            <span class="tactic-body"><strong>Get every change in writing same-day.</strong> Verbal agreements with estates evaporate when heirs disagree. Email confirmation within 4 hours of every conversation.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">8</span>
            <span class="tactic-body"><strong>Identify the real decision-maker.</strong> Executor, co-executor, attorney, or majority heir &mdash; ask directly: <em>"who has authority to bind the estate today?"</em></span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">9</span>
            <span class="tactic-body"><strong>Use the inspection as a second negotiation.</strong> Findings &gt; $5K become a credit request, not a renegotiation of the headline price. Keeps the deal intact.</span>
          </li>
          <li class="tactic-item">
            <span class="tactic-num">10</span>
            <span class="tactic-body"><strong>Hold the walk-away in writing before the first call.</strong> The number is set in advance and not modified mid-negotiation. Discipline beats improvisation every time.</span>
          </li>
        </ul>
      </section>

      <!-- SECTION: DUE DILIGENCE -->
      <section class="section-block">
        <div class="section-kicker">Section 05</div>
        <h2 class="section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="section-divider"></div>
        <div class="two-col">
          <div>
            <h3 style="font-weight:900; color:var(--nu-dark-text); font-size:1rem; margin-bottom:6px;">Title &amp; Estate</h3>
            <ul class="checklist">
              <li><strong>Letters Testamentary verified</strong> <span class="due">Before offer</span></li>
              <li><strong>Will / probate filing pulled from county</strong> <span class="due">Before offer</span></li>
              <li><strong>Owner's title commitment ordered</strong> <span class="due">Day 1 under contract</span></li>
              <li><strong>Lien &amp; judgment search (10-yr)</strong> <span class="due">Day 1 under contract</span></li>
              <li><strong>Heir consents (if multiple)</strong> <span class="due">Before earnest money funds</span></li>
            </ul>
          </div>
          <div>
            <h3 style="font-weight:900; color:var(--nu-dark-text); font-size:1rem; margin-bottom:6px;">Property &amp; Cost</h3>
            <ul class="checklist">
              <li><strong>Full home inspection (7,098 sq ft &mdash; budget for it)</strong> <span class="due">Days 1–7</span></li>
              <li><strong>Roof, HVAC, foundation specialist reports</strong> <span class="due">Days 1–10</span></li>
              <li><strong>Survey / boundary verification</strong> <span class="due">Days 1–14</span></li>
              <li><strong>Insurance binder &amp; quote</strong> <span class="due">Days 1–10</span></li>
              <li><strong>Tax / HOA / utility transfer estimates</strong> <span class="due">Days 1–14</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: TIMELINE -->
      <section class="section-block">
        <div class="section-kicker">Section 06</div>
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Timeline — 30 Days</span></h2>
        <div class="section-divider"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Day 0 — April 25, 2026</div>
            <div class="timeline-event">Brief reviewed and approved by Aaron</div>
            <div class="timeline-detail">Confirm walk-away ceiling, opening number, and authorized representative.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 1–3</div>
            <div class="timeline-event">Verify executor authority &amp; pull comp set</div>
            <div class="timeline-detail">Probate filing, Letters Testamentary, county records, MLS comp pull.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 4–5</div>
            <div class="timeline-event">Walk-through &amp; preliminary scope</div>
            <div class="timeline-detail">Visual condition, photos, deferred-maintenance estimate. Refine ladder.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 6</div>
            <div class="timeline-event">Submit written offer + comp packet</div>
            <div class="timeline-detail">Cash, 21-day close, 10-day inspection, 1% earnest. Aaron signs.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 7–10</div>
            <div class="timeline-event">Negotiation &amp; counter-cycle</div>
            <div class="timeline-detail">Hold price discipline. Trade non-price terms. Walk if ceiling breached.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 10–20</div>
            <div class="timeline-event">Inspection, title, financing confirmation</div>
            <div class="timeline-detail">Specialist reports, repair credit negotiation if &gt; $5K.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Day 21–30</div>
            <div class="timeline-event">Close, fund, record deed</div>
            <div class="timeline-detail">Wire instructions verified by phone. Recorded deed in hand same week.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: RISK MATRIX -->
      <section class="section-block">
        <div class="section-kicker">Section 07</div>
        <h2 class="section-title"><span class="first">Risk</span> <span class="rest">Matrix &amp; Mitigations</span></h2>
        <div class="section-divider"></div>
        <div class="risk-grid">
          <div class="risk-card high">
            <div class="risk-title">Probate not yet closed <span class="inline-badge badge-red">High</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Contract contingent on court confirmation; do not fund earnest until executor authority is recorded.</div>
          </div>
          <div class="risk-card high">
            <div class="risk-title">Multiple heirs disputing sale <span class="inline-badge badge-red">High</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Require written consent of all heirs or court-ordered sale order before closing.</div>
          </div>
          <div class="risk-card">
            <div class="risk-title">Hidden title defects (estate chain) <span class="inline-badge badge-amber">Med</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Owner's title insurance, full 10-year lien &amp; judgment search, attorney review.</div>
          </div>
          <div class="risk-card">
            <div class="risk-title">Deferred maintenance &gt; $50K <span class="inline-badge badge-amber">Med</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Full inspection + roof / HVAC / foundation specialists. Repair credit or walk.</div>
          </div>
          <div class="risk-card">
            <div class="risk-title">Possession dispute (heirs occupying) <span class="inline-badge badge-amber">Med</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Vacant-at-close clause, written possession date, holdback escrow if needed.</div>
          </div>
          <div class="risk-card low">
            <div class="risk-title">Appraisal below offer <span class="inline-badge badge-green">Low</span></div>
            <div class="risk-mitigation"><strong>Mitigation:</strong> Cash deal — no lender appraisal blocker. Independent appraisal is for our records.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: SCRIPTS -->
      <section class="section-block">
        <div class="section-kicker">Section 08</div>
        <h2 class="section-title"><span class="first">Talking</span> <span class="rest">Scripts — Aaron's Voice</span></h2>
        <div class="section-divider"></div>

        <div class="script-box">
          <em>Opening Call &mdash; to executor or listing agent</em>
          "Good morning &mdash; this is Aaron Norris. I understand the family is working through the estate at 4505 Buttewoods, and I'd like to make this as straightforward as possible for y'all. I'm a cash buyer, I can close in three weeks, and I won't waste your time with a contingency-loaded contract. Before I put a number in writing, who has authority to bind the estate today?"
        </div>

        <div class="script-box">
          <em>Submitting the Offer</em>
          "Based on five closed sales within a mile in the last twelve months, the median is [$X / sq ft]. My written offer reflects that comp set, a 21-day cash close, a 10-day inspection window, and 1% earnest. It's a clean offer. I'd appreciate a response by [date + 3 business days]."
        </div>

        <div class="script-box">
          <em>Holding the Line</em>
          "I appreciate the counter, and I understand where you're coming from. My number is built off documented sales, not opinion. I can move to [next step on ladder] and that's where I need to land. If the estate needs more than that, I understand &mdash; we can revisit in thirty days if it's still available."
        </div>

        <div class="script-box">
          <em>Walking Away</em>
          "I respect your position. We're at our ceiling, and I won't go past it. Please keep my information &mdash; if circumstances change, I'd like first call. Sincerely, Aaron."
        </div>
      </section>

      <!-- SECTION: APPROVAL -->
      <section class="section-block">
        <div class="section-kicker">Section 09</div>
        <h2 class="section-title"><span class="first">Sign-Off</span> <span class="rest">&amp; Authorization</span></h2>
        <div class="section-divider"></div>
        <p>This brief becomes binding internal guidance once Aaron approves the price ladder and signs the bottom of this document. Any deviation from the walk-away ceiling requires explicit written re-authorization &mdash; no verbal modifications.</p>

        <table class="data-table" style="margin-top:18px;">
          <thead>
            <tr>
              <th>Authorization</th>
              <th>Name</th>
              <th>Approval</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-col">Final Price Ladder</td>
              <td>Aaron C. Norris, Founder &amp; CEO</td>
              <td>____________________</td>
              <td>____________</td>
            </tr>
            <tr>
              <td class="label-col">Walk-Away Ceiling</td>
              <td>Aaron C. Norris, Founder &amp; CEO</td>
              <td>____________________</td>
              <td>____________</td>
            </tr>
            <tr>
              <td class="label-col">Authorized Negotiator</td>
              <td>Aaron C. Norris (sole)</td>
              <td>____________________</td>
              <td>____________</td>
            </tr>
            <tr>
              <td class="label-col">Title / Closing Attorney</td>
              <td>To be assigned</td>
              <td>____________________</td>
              <td>____________</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential — Internal Use Only &nbsp;•&nbsp; Prepared April 25, 2026 &nbsp;•&nbsp; reMarkable Action Item: 4505 Buttewoods Estate Negotiation
    </div>
  </footer>

</body>
</html>