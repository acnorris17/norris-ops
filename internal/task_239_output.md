<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: 4505 Buttewoods Estate Negotiation — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-red: #DC2626;
      --nu-green: #059669;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

    /* Ghost phoenix watermark */
    .nu-header .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 380px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* WHITE ASYMMETRIC CHEVRON */
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* DOCUMENT META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      font-size: 0.85rem;
    }
    .nu-meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nu-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.75rem;
    }
    .nu-meta-value {
      font-weight: 400;
      color: var(--nu-dark-text);
    }
    .nu-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-pill-action { background: rgba(245, 158, 11, 0.15); color: #B45309; }
    .nu-pill-priority-high { background: rgba(220, 38, 38, 0.12); color: var(--nu-red); }
    .nu-pill-status-open { background: rgba(0, 0, 255, 0.12); color: var(--nu-blue); }

    /* PAGE HEADLINE */
    .nu-page-headline {
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-page-headline .accent { color: var(--nu-blue); }
    .nu-page-deck {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      max-width: 780px;
      margin-bottom: 36px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.01em;
      margin: 40px 0 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: #1a1a1a; font-weight: 700; }

    /* PROPERTY OVERVIEW GRID */
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 16px;
    }
    .nu-stat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 16px;
      text-align: center;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-stat-card .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .nu-stat-card .value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .nu-stat-card .sub {
      font-size: 0.78rem;
      color: #888;
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 26px 12px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STEP CARDS */
    .nu-step-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 8px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 70px 1fr;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .nu-step-num {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.6rem;
    }
    .nu-step-body {
      padding: 14px 18px;
    }
    .nu-step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .nu-step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 8px;
    }
    .nu-col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .nu-col-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-col-card ul { list-style: none; padding: 0; }
    .nu-col-card li {
      position: relative;
      padding: 6px 0 6px 20px;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-col-card li:last-child { border-bottom: none; }
    .nu-col-card li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      line-height: 1.4;
    }
    .nu-col-card li strong { color: var(--nu-dark-text); }

    /* PRICING TABLE */
    .nu-pricing-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
      margin-bottom: 12px;
    }
    .nu-pricing-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 700;
    }
    .nu-pricing-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .nu-pricing-table tr:last-child td { border-bottom: none; }
    .nu-pricing-table tr.highlight td {
      background: rgba(6, 208, 255, 0.08);
      font-weight: 700;
      color: var(--nu-blue);
    }
    .nu-pricing-table .num { text-align: right; font-variant-numeric: tabular-nums; }

    /* RISK / NOTE BOXES */
    .nu-note {
      padding: 16px 20px;
      border-radius: 6px;
      margin: 12px 0;
      font-size: 0.93rem;
      border-left: 4px solid;
    }
    .nu-note-warn {
      background: rgba(245, 158, 11, 0.08);
      border-color: var(--nu-amber);
      color: #92400E;
    }
    .nu-note-info {
      background: rgba(0, 0, 255, 0.05);
      border-color: var(--nu-blue);
      color: var(--nu-dark-text);
    }
    .nu-note strong { display: block; margin-bottom: 4px; font-weight: 900; }

    /* DECISION ROW */
    .nu-decision-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 14px;
      margin-bottom: 16px;
    }
    .nu-decision-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px;
      text-align: center;
      transition: all 0.2s ease;
    }
    .nu-decision-card.recommended {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, rgba(0,0,255,0.04) 0%, var(--nu-white) 60%);
      position: relative;
    }
    .nu-decision-card.recommended::before {
      content: 'RECOMMENDED';
      position: absolute;
      top: -10px; left: 50%;
      transform: translateX(-50%);
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.65rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      padding: 3px 10px;
      border-radius: 10px;
    }
    .nu-decision-card .opt-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .nu-decision-card .opt-price {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-decision-card .opt-desc {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* NEXT ACTION CTA */
    .nu-cta-band {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 40px;
      border-radius: 8px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .nu-cta-band h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 4px;
    }
    .nu-cta-band p {
      font-size: 0.95rem;
      opacity: 0.92;
      max-width: 520px;
    }
    .nu-cta-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .nu-btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
    }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      padding: 0;
      position: relative;
      margin-left: 12px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 6px; bottom: 6px; left: 6px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .nu-timeline li {
      position: relative;
      padding: 6px 0 14px 28px;
      font-size: 0.93rem;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      top: 10px; left: 0;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline li .when {
      font-weight: 900;
      color: var(--nu-blue);
      display: block;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.2rem;
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
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 20px 50px; }
      .nu-page-headline { font-size: 1.85rem; }
      .nu-two-col, .nu-decision-row { grid-template-columns: 1fr; }
      .nu-step { grid-template-columns: 50px 1fr; }
      .nu-step-num { font-size: 1.3rem; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-cta-band { padding: 24px; flex-direction: column; align-items: flex-start; }
      .nu-pricing-table th, .nu-pricing-table td { padding: 10px 8px; font-size: 0.82rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta-band, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-col-card, .nu-stat-card, .nu-pricing-table { box-shadow: none !important; break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
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

  <!-- WHITE ASYMMETRIC CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <span class="nu-meta-label">Source</span>
          <span class="nu-meta-value">reMarkable Action Item</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Captured</span>
          <span class="nu-meta-value">2026-04-24</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Owner</span>
          <span class="nu-meta-value">Aaron C. Norris</span>
        </div>
        <div class="nu-meta-item" style="gap:6px;">
          <span class="nu-pill nu-pill-action">Action Item</span>
          <span class="nu-pill nu-pill-priority-high">High Priority</span>
          <span class="nu-pill nu-pill-status-open">Open</span>
        </div>
      </div>

      <!-- HEADLINE -->
      <h1 class="nu-page-headline">
        Negotiate Purchase: <span class="accent">4505 Buttewoods Estate</span>
      </h1>
      <p class="nu-page-deck">
        7,098 sq ft estate evaluation and negotiation strategy. Personal real estate transaction
        being tracked through the Norris Utilities® operational engine for follow-through, document
        control, and decision logging.
      </p>

      <!-- PROPERTY OVERVIEW -->
      <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Overview</span></h2>
      <div class="nu-property-grid">
        <div class="nu-stat-card">
          <div class="label">Address</div>
          <div class="value" style="font-size:1.15rem;">4505 Buttewoods</div>
          <div class="sub">Subject Property</div>
        </div>
        <div class="nu-stat-card">
          <div class="label">Living Area</div>
          <div class="value">7,098</div>
          <div class="sub">Square Feet</div>
        </div>
        <div class="nu-stat-card">
          <div class="label">Property Class</div>
          <div class="value" style="font-size:1.15rem;">Estate</div>
          <div class="sub">Residential</div>
        </div>
        <div class="nu-stat-card">
          <div class="label">Status</div>
          <div class="value" style="font-size:1.15rem; color: var(--nu-amber);">Negotiating</div>
          <div class="sub">Offer phase</div>
        </div>
      </div>

      <!-- NEGOTIATION ROADMAP -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Roadmap</span></h2>

      <div style="margin-bottom: 18px;">
        <div class="nu-badge"><span class="nu-badge-num">1</span> PHASE I — DUE DILIGENCE &amp; VALUATION</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span> PHASE II — OFFER STRATEGY &amp; TERMS</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span> PHASE III — INSPECTIONS &amp; CLOSING</div>
      </div>

      <div class="nu-step-list">
        <div class="nu-step">
          <div class="nu-step-num">01</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Pull Comparable Sales (Comps)</div>
            <div class="nu-step-detail">Request CMA from listing agent and a second independent CMA. Pull last 24 months of estate sales 6,500–8,000 sq ft within 5-mile radius. Adjust for lot size, condition, and amenities.</div>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">02</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Order Pre-Offer Property Walk</div>
            <div class="nu-step-detail">Walk the home with a contractor before submitting offer. Identify roof age, HVAC unit count/age, foundation movement, and any visible water intrusion — particularly in basement, given prior Buttewoods-area history.</div>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">03</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Confirm Financing Posture</div>
            <div class="nu-step-detail">Call Patrick Lavette at Renasant Bank for jumbo pre-approval letter at full ask. Hold a backup proof-of-funds document so the offer can be presented as flexible (financed or cash).</div>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">04</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Build the Opening Offer</div>
            <div class="nu-step-detail">Anchor opening offer to comps minus condition deductions. Lead with non-price concessions (close timing, post-close occupancy, earnest money size) before moving on price.</div>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">05</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Negotiate Inspection Contingencies</div>
            <div class="nu-step-detail">Insist on full inspection period: structural, mechanical, septic/sewer, well/water (if applicable), termite/WDO, radon, mold. Reserve right to renegotiate or withdraw on material findings.</div>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">06</div>
          <div class="nu-step-body">
            <div class="nu-step-title">Lock the Closing Window</div>
            <div class="nu-step-detail">Target 45-day close to allow appraisal, title work, and survey. Confirm title insurance, deed type (warranty), and HOA / covenant docs delivered prior to contingency removal.</div>
          </div>
        </div>
      </div>

      <!-- LEVERAGE / RISKS -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Leverage &amp; Risks</span></h2>
      <div class="nu-two-col">
        <div class="nu-col-card">
          <h3>Leverage Points</h3>
          <ul>
            <li><strong>Days on market:</strong> Longer DOM softens seller anchor; reference comparable expired listings.</li>
            <li><strong>Carrying cost:</strong> Estate-class properties carry $4K–$8K/month in taxes, insurance, and utilities — every month favors buyer.</li>
            <li><strong>Pre-approval in hand:</strong> Renasant jumbo letter signals certainty of close.</li>
            <li><strong>Flexible close:</strong> Offer to accommodate seller's move-out timeline as a price-neutral concession.</li>
            <li><strong>Cash-equivalent posture:</strong> Demonstrating proof of funds removes financing-contingency risk in seller's eyes.</li>
          </ul>
        </div>
        <div class="nu-col-card">
          <h3>Risks to Price In</h3>
          <ul>
            <li><strong>Basement water intrusion:</strong> Cross-reference with prior contract addendum and H2O Waterproofing scope of work.</li>
            <li><strong>Roof &amp; HVAC age:</strong> 7,098 sq ft homes typically have 3–4 HVAC zones — replacement is $25K–$45K.</li>
            <li><strong>Septic/well status:</strong> If applicable, septic pump and well yield tests required.</li>
            <li><strong>Insurance binding:</strong> Confirm carrier will bind on a 7,000+ sq ft estate at quoted rate before final commitment.</li>
            <li><strong>Property tax reassessment:</strong> Sale will trigger re-valuation; budget for higher annual tax bill.</li>
          </ul>
        </div>
      </div>

      <!-- OFFER FRAMEWORK -->
      <h2 class="nu-section-title"><span class="first">Opening</span> <span class="rest">Offer Framework</span></h2>
      <p style="margin-bottom: 14px; font-size:0.95rem; color:#555;">
        Final dollar values to be filled once Aaron confirms list price and pre-offer walk findings.
        Framework below shows the negotiation ladder and concessions ranked from cheapest to most costly.
      </p>
      <table class="nu-pricing-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Position</th>
            <th>Concession Cost</th>
            <th class="num">Negotiation Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Earnest money</td>
            <td>Increase to 2% of purchase price</td>
            <td>Low (refundable on contingency)</td>
            <td class="num">High signal value</td>
          </tr>
          <tr>
            <td>Inspection period</td>
            <td>Hold at 14 days minimum</td>
            <td>Free</td>
            <td class="num">High protective value</td>
          </tr>
          <tr>
            <td>Closing timeline</td>
            <td>Match seller's preferred date</td>
            <td>Low</td>
            <td class="num">High goodwill</td>
          </tr>
          <tr>
            <td>Post-close occupancy</td>
            <td>Offer up to 30 days at $0 rent</td>
            <td>Medium (carrying cost)</td>
            <td class="num">Strong — often unlocks price</td>
          </tr>
          <tr>
            <td>Repair credit vs. price reduction</td>
            <td>Always prefer credit at close</td>
            <td>Equal cash impact</td>
            <td class="num">Better at-close liquidity</td>
          </tr>
          <tr class="highlight">
            <td>Final purchase price</td>
            <td>Anchor 6–9% below ask, walk-away set in writing</td>
            <td>Negotiated</td>
            <td class="num">Primary lever</td>
          </tr>
        </tbody>
      </table>

      <!-- DECISION OPTIONS -->
      <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Posture Options</span></h2>
      <div class="nu-decision-row">
        <div class="nu-decision-card">
          <div class="opt-label">Option A — Walk</div>
          <div class="opt-price">Pass</div>
          <div class="opt-desc">If pre-offer walk surfaces material structural or water issues without seller credit appetite.</div>
        </div>
        <div class="nu-decision-card recommended">
          <div class="opt-label">Option B — Negotiate</div>
          <div class="opt-price">Offer</div>
          <div class="opt-desc">Submit anchored offer with 14-day inspection. Use post-close occupancy as price unlock. Two-round ladder.</div>
        </div>
        <div class="nu-decision-card">
          <div class="opt-label">Option C — Aggressive</div>
          <div class="opt-price">Cash-Style</div>
          <div class="opt-desc">Lead with cash-equivalent proof of funds, shorter close, modest discount — wins certainty premium.</div>
        </div>
      </div>

      <!-- RISK NOTE -->
      <div class="nu-note nu-note-warn">
        <strong>Cross-Reference Required</strong>
        Confirm whether 4505 Buttewoods is the same parcel referenced in the open "Basement Water Intrusion contract addendum" item from 2026-04-24. If yes, treat the addendum scope as a binding negotiation input — do not submit offer until the addendum has been reviewed and either accepted, modified, or made a closing condition.
      </div>

      <div class="nu-note nu-note-info">
        <strong>Personal vs. Business Note</strong>
        This action item is a personal real estate transaction tracked through the Norris Utilities® operational system for follow-through discipline only. No company funds, no Norris Utilities®, LLC entity exposure, and no commingling of records. Files belong in the personal wing of the operational portal.
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Suggested</span> <span class="rest">Timeline</span></h2>
      <ul class="nu-timeline">
        <li>
          <span class="when">Within 48 Hours</span>
          Request CMA from listing agent. Call Patrick Lavette at Renasant for jumbo pre-approval refresh. Pull current contract addendum file for review.
        </li>
        <li>
          <span class="when">This Week</span>
          Schedule pre-offer contractor walk. Pull independent CMA. Confirm whether basement water intrusion addendum applies to this parcel.
        </li>
        <li>
          <span class="when">Days 7–10</span>
          Submit opening offer using the ladder framework above. Set walk-away price in writing before negotiation begins.
        </li>
        <li>
          <span class="when">Days 10–24</span>
          Inspection period: structural, mechanical, septic/well, termite, radon, mold. Negotiate repair credits at close, not price reductions.
        </li>
        <li>
          <span class="when">Days 25–45</span>
          Appraisal, title, survey. Confirm insurance binding. Final walk-through 24 hours before close. Close.
        </li>
      </ul>

      <!-- CTA -->
      <div class="nu-cta-band">
        <div>
          <h3>Next Action — This Week</h3>
          <p>Pull the comparable sales report, confirm whether the basement water addendum applies to this parcel, and refresh the Renasant jumbo pre-approval letter so the offer can be submitted from a position of certainty.</p>
        </div>
        <div class="nu-cta-buttons">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com" class="nu-btn-secondary">Email Aaron</a>
        </div>
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
      Internal action-item tracker — sourced from reMarkable capture 2026-04-24 — Phoenix Icon® and Norris Utilities® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>