<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Lane — Property Acquisition Brief — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-success: #1A8754;
      --nu-warning: #B8860B;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 84px; height: 84px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
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
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 7px 22px;
      border: 1px solid rgba(255,255,255,0.45);
      border-radius: 2px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.32em;
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
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.045) 0%, rgba(6,208,255,0.025) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* TITLE BLOCK */
    .nu-doc-title {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-doc-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-doc-title h1 span { color: var(--nu-blue); }
    .nu-doc-title .nu-address {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 14px;
    }
    .nu-doc-title .nu-meta {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px 22px;
      font-size: 0.85rem;
      color: #666;
    }
    .nu-doc-title .nu-meta span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
    }
    section.nu-block { margin-bottom: 56px; }

    /* SUMMARY CARD */
    .nu-summary {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0033cc 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      box-shadow: 0 8px 28px rgba(0,0,51,0.18);
      position: relative;
      overflow: hidden;
    }
    .nu-summary::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .nu-summary > * { position: relative; z-index: 1; }
    .nu-summary h2 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-summary p {
      font-size: 1.02rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.92);
    }
    .nu-summary p + p { margin-top: 12px; }
    .nu-summary strong { color: var(--nu-white); font-weight: 700; }

    /* KPI GRID */
    .nu-kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 48px;
    }
    .nu-kpi {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 20px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-kpi .nu-kpi-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 8px;
    }
    .nu-kpi .nu-kpi-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .nu-kpi .nu-kpi-sub {
      font-size: 0.78rem;
      color: #777;
    }
    .nu-kpi.cyan { border-top-color: var(--nu-cyan); }
    .nu-kpi.cyan .nu-kpi-value { color: var(--nu-blue); }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    @media (max-width: 800px) { .nu-two-col { grid-template-columns: 1fr; } }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* DATA LIST */
    .nu-datalist {
      list-style: none;
    }
    .nu-datalist li {
      display: flex;
      justify-content: space-between;
      gap: 14px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .nu-datalist li:last-child { border-bottom: none; }
    .nu-datalist .label {
      color: #555;
      font-weight: 400;
      flex-shrink: 0;
    }
    .nu-datalist .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.92rem;
      min-width: 540px;
    }
    table.nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy), #000066);
      color: var(--nu-white);
    }
    table.nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    table.nu-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    table.nu-table tbody tr:last-child td { border-bottom: none; }
    table.nu-table .num { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; }
    table.nu-table .total-row { background: #EAF1FF !important; }
    table.nu-table .total-row td {
      font-weight: 900;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 24px 0 8px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 30px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      flex-shrink: 0;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 16px;
    }
    @media (max-width: 700px) {
      .nu-badge {
        clip-path: none;
        border-radius: 6px;
        padding: 14px 18px;
      }
    }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      position: relative;
      padding-left: 30px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline li {
      position: relative;
      padding: 0 0 22px 18px;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      left: -27px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .nu-timeline li:last-child { padding-bottom: 0; }
    .nu-timeline .step-label {
      display: block;
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 4px;
    }
    .nu-timeline .step-meta {
      display: inline-block;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-timeline .step-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CALLOUT */
    .nu-callout {
      border-left: 4px solid var(--nu-cyan);
      background: #F1FBFF;
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin: 18px 0;
      font-size: 0.94rem;
    }
    .nu-callout strong { color: var(--nu-blue); }
    .nu-callout.warning {
      border-left-color: var(--nu-warning);
      background: #FFF8E6;
    }
    .nu-callout.warning strong { color: #8B6914; }

    /* RISK GRID */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-risk {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 20px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-warning);
    }
    .nu-risk h4 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-risk .level {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .nu-risk .level.high { background: #FFE5E5; color: var(--nu-danger); }
    .nu-risk .level.med  { background: #FFF1D6; color: #8B6914; }
    .nu-risk .level.low  { background: #E0F5E9; color: var(--nu-success); }
    .nu-risk p { font-size: 0.9rem; color: var(--nu-body-text); }
    .nu-risk.high { border-left-color: var(--nu-danger); }
    .nu-risk.low { border-left-color: var(--nu-success); }

    /* DECISION BOX */
    .nu-decision {
      background: linear-gradient(135deg, #EAF1FF 0%, #F0FBFF 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 32px;
      text-align: center;
    }
    .nu-decision h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-decision p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      max-width: 720px;
      margin: 0 auto 22px;
      line-height: 1.65;
    }
    .nu-decision .nu-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 2px solid transparent;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border-color: var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      box-shadow: 0 4px 14px rgba(0,0,255,0.32);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
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
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
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
    .nu-footer-bar {
      margin-top: 18px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 44px 22px; }
      .nu-doc-title h1 { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-summary { padding: 26px 22px; }
      .nu-decision { padding: 24px 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-kpi, .nu-table-wrap { box-shadow: none; }
      .nu-decision .nu-actions { display: none; }
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
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Acquisition Brief</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-doc-title">
        <h1><span>Property Acquisition</span> Negotiation Brief</h1>
        <div class="nu-address">4505 Buttewoods Lane &nbsp;•&nbsp; 7,098 sq ft Estate</div>
        <div class="nu-meta">
          <span><strong>Prepared for:</strong> Aaron C. Norris, Founder &amp; CEO</span>
          <span><strong>Document Date:</strong> April 25, 2026</span>
          <span><strong>Source:</strong> reMarkable Action Item</span>
          <span><strong>Status:</strong> Open — Negotiation Phase</span>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <section class="nu-block">
        <div class="nu-summary">
          <h2>Executive Summary</h2>
          <p>The action item flagged on the reMarkable tablet directs leadership to <strong>negotiate the purchase of the 7,098 sq ft estate located at 4505 Buttewoods Lane</strong>. This is a high-value, non-operational asset acquisition that sits outside the day-to-day work of Norris Utilities® and requires deliberate handling, professional representation, and full documentation before any number is offered.</p>
          <p>This brief consolidates the negotiation framework into one document: scope of the property, due-diligence checklist, valuation reference points, negotiation strategy, and the decision gate for moving from research to written offer. <strong>No verbal commitments are to be made until the due-diligence checklist is complete and a written offer has been reviewed by counsel.</strong></p>
        </div>
      </section>

      <!-- PROPERTY KPIs -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">at a Glance</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-kpi-grid">
          <div class="nu-kpi">
            <div class="nu-kpi-label">Address</div>
            <div class="nu-kpi-value" style="font-size:1.05rem;">4505 Buttewoods Lane</div>
            <div class="nu-kpi-sub">Subject Property</div>
          </div>
          <div class="nu-kpi cyan">
            <div class="nu-kpi-label">Living Area</div>
            <div class="nu-kpi-value">7,098</div>
            <div class="nu-kpi-sub">Square Feet</div>
          </div>
          <div class="nu-kpi">
            <div class="nu-kpi-label">Asset Class</div>
            <div class="nu-kpi-value" style="font-size:1.1rem;">Estate</div>
            <div class="nu-kpi-sub">Single-Family Residential</div>
          </div>
          <div class="nu-kpi cyan">
            <div class="nu-kpi-label">Action Status</div>
            <div class="nu-kpi-value" style="font-size:1.1rem;">Negotiate</div>
            <div class="nu-kpi-sub">Tablet-flagged priority</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-callout">
          <strong>Rule of the negotiation:</strong> every line below must be confirmed, in writing, before a price is offered. Anything that cannot be verified moves to the contingency clause inside the offer letter.
        </div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h3>Title &amp; Legal</h3>
            <ul class="nu-datalist">
              <li><span class="label">Title commitment ordered</span><span class="value">Required</span></li>
              <li><span class="label">Survey on file</span><span class="value">Required</span></li>
              <li><span class="label">Liens / judgments</span><span class="value">Pull report</span></li>
              <li><span class="label">HOA / covenants</span><span class="value">Verify</span></li>
              <li><span class="label">Easements / rights of way</span><span class="value">Verify</span></li>
              <li><span class="label">Zoning &amp; permitted use</span><span class="value">Verify</span></li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Physical Condition</h3>
            <ul class="nu-datalist">
              <li><span class="label">Whole-house inspection</span><span class="value">Required</span></li>
              <li><span class="label">Roof age &amp; condition</span><span class="value">Verify</span></li>
              <li><span class="label">HVAC age &amp; condition</span><span class="value">Verify</span></li>
              <li><span class="label">Foundation report</span><span class="value">If indicated</span></li>
              <li><span class="label">Septic / sewer scope</span><span class="value">Required</span></li>
              <li><span class="label">Termite / pest letter</span><span class="value">Required</span></li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Financial &amp; Tax</h3>
            <ul class="nu-datalist">
              <li><span class="label">Most recent tax bill</span><span class="value">Pull</span></li>
              <li><span class="label">Assessment vs. asking</span><span class="value">Compare</span></li>
              <li><span class="label">Insurance quote (replacement)</span><span class="value">Required</span></li>
              <li><span class="label">Utility cost history (12 mo.)</span><span class="value">Request</span></li>
              <li><span class="label">Preliminary loan term sheet</span><span class="value">Renasant — Patrick Lavette</span></li>
              <li><span class="label">Cash-vs-finance scenarios</span><span class="value">Prepare both</span></li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Market Position</h3>
            <ul class="nu-datalist">
              <li><span class="label">Days on market</span><span class="value">Track</span></li>
              <li><span class="label">Prior listing history</span><span class="value">Verify</span></li>
              <li><span class="label">Comparable sales (3 closed)</span><span class="value">Required</span></li>
              <li><span class="label">Active comparables</span><span class="value">Required</span></li>
              <li><span class="label">Price per sq ft analysis</span><span class="value">Required</span></li>
              <li><span class="label">Seller motivation read</span><span class="value">Through agent</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- VALUATION -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Valuation</span> <span class="rest">Framework</span></h2>
        <div class="nu-section-rule"></div>

        <p style="margin-bottom:18px; max-width:880px;">Three independent reference points must converge before an offer is written. The lowest of the three sets the opening number; the highest sets the walk-away ceiling. Document each on the worksheet stored under <strong>~/norris-ops/internal/</strong>.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Reference Method</th>
                <th>Source</th>
                <th>Output</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Closed Comparable Sales</strong></td>
                <td>Local MLS — last 6 months, 0.5-mile radius</td>
                <td>$ per sq ft applied to 7,098 sq ft</td>
                <td>Open</td>
              </tr>
              <tr>
                <td><strong>Tax Assessment</strong></td>
                <td>County assessor of record</td>
                <td>Assessed value × local market multiplier</td>
                <td>Open</td>
              </tr>
              <tr>
                <td><strong>Replacement Cost</strong></td>
                <td>Insurance carrier replacement quote + land value</td>
                <td>Reconstruction floor</td>
                <td>Open</td>
              </tr>
              <tr>
                <td><strong>Income Test (optional)</strong></td>
                <td>Long-term rental comps if held as investment</td>
                <td>Cap rate sanity check</td>
                <td>Conditional</td>
              </tr>
              <tr class="total-row">
                <td colspan="2">Decision Output</td>
                <td colspan="2">Opening offer, walk-away ceiling, and contingency cushion</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout warning">
          <strong>No offer goes out</strong> until all three methods are documented and the spread between low and high is fully understood. A wide spread is a signal to investigate, not to average.
        </div>
      </section>

      <!-- NEGOTIATION STRATEGY -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Lead with information, not money — open on condition reports and clean title before discussing price.</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Establish a pre-set walk-away number in writing before the first conversation. Do not adjust it verbally.</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Use a buyer's agent for all listing-side communication — keeps Norris Utilities® off the negotiation surface.</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Make every contingency a written line item: financing, inspection, appraisal, title.</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Ask for seller concessions instead of pure price reductions — closing costs, repair credits, retained items.</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Never reveal the financing path. Cash-equivalent posture preserves leverage even when financing is the actual plan.</div>
        </div>

        <div class="nu-callout">
          <strong>Voice rule:</strong> all written communication on this matter follows Aaron's standard format — em-dash greeting, indented paragraphs, "Sincerely," — no filler words, no apologies, no urgency cues.
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Process</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <ol class="nu-timeline">
          <li>
            <span class="step-meta">Step 01 — Week 1</span>
            <span class="step-label">Engage Buyer's Agent &amp; Order Title</span>
            <span class="step-body">Retain licensed buyer's representation. Order preliminary title commitment and survey. Pull tax records and prior listing history. No pricing discussion yet.</span>
          </li>
          <li>
            <span class="step-meta">Step 02 — Week 1–2</span>
            <span class="step-label">Build Comparable Sales File</span>
            <span class="step-body">Closed sales (last 6 months) + active listings within 0.5 miles. Apply price-per-square-foot model to 7,098 sq ft and stress test across condition tiers.</span>
          </li>
          <li>
            <span class="step-meta">Step 03 — Week 2</span>
            <span class="step-label">Pre-Qualify Financing</span>
            <span class="step-body">Patrick Lavette at Renasant Bank — request preliminary term sheet. Run cash-purchase and financed scenarios side-by-side. Hold the financing detail close.</span>
          </li>
          <li>
            <span class="step-meta">Step 04 — Week 2–3</span>
            <span class="step-label">Inspection Bundle</span>
            <span class="step-body">Schedule whole-house, termite, septic / sewer scope, and any specialist inspections flagged by the general report. Repair cost estimates feed the offer math.</span>
          </li>
          <li>
            <span class="step-meta">Step 05 — Week 3</span>
            <span class="step-label">Walk-Away Number Locked</span>
            <span class="step-body">Aaron sets opening offer, target close, and walk-away ceiling — in writing, in this brief. Numbers do not move verbally after this point.</span>
          </li>
          <li>
            <span class="step-meta">Step 06 — Week 3</span>
            <span class="step-label">Counsel Review</span>
            <span class="step-body">Real estate attorney reviews offer letter, contingency stack, earnest money terms, and timeline language before anything is presented.</span>
          </li>
          <li>
            <span class="step-meta">Step 07 — Week 3–4</span>
            <span class="step-label">Written Offer Submitted</span>
            <span class="step-body">Buyer's agent presents the offer. All counters returned to this brief for re-review. Verbal counters are documented before any reply.</span>
          </li>
          <li>
            <span class="step-meta">Step 08 — Week 4–6</span>
            <span class="step-label">Under Contract → Close</span>
            <span class="step-body">Inspection period, appraisal, title clearance, financing finalization, walk-through, closing. Each phase signed off in writing before advancing.</span>
          </li>
        </ol>
      </section>

      <!-- RISK -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Register</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-risk-grid">
          <div class="nu-risk high">
            <h4>Overpaying on a Thin Comp Set</h4>
            <span class="level high">High Impact</span>
            <p>Estate properties at 7,098 sq ft are statistically rare. A weak comp set tempts averaging where ranging is more honest. Mitigation: triangulate with replacement cost and tax-assessment ratios.</p>
          </div>
          <div class="nu-risk">
            <h4>Hidden Condition Issues</h4>
            <span class="level med">Medium Impact</span>
            <p>Older estates concentrate maintenance debt in roof, HVAC, foundation, and septic. Mitigation: every system inspected; repair credits become a negotiation lever rather than a surprise.</p>
          </div>
          <div class="nu-risk">
            <h4>Title or Easement Surprise</h4>
            <span class="level med">Medium Impact</span>
            <p>Large parcels often carry old utility easements, mineral rights, or boundary disputes. Mitigation: full title commitment plus current survey ordered in Step 01.</p>
          </div>
          <div class="nu-risk high">
            <h4>Emotional Anchor Pricing</h4>
            <span class="level high">High Impact</span>
            <p>Sellers of estate properties often anchor on aspirational numbers. Mitigation: pre-set walk-away ceiling; agent-only communication keeps Norris Utilities® unattached.</p>
          </div>
          <div class="nu-risk low">
            <h4>Financing Disruption</h4>
            <span class="level low">Lower Impact</span>
            <p>Renasant Bank relationship (Patrick Lavette) is established. Mitigation: pre-approved term sheet in hand before offer; cash-equivalent posture maintained externally.</p>
          </div>
          <div class="nu-risk">
            <h4>Operational Distraction</h4>
            <span class="level med">Medium Impact</span>
            <p>Norris Utilities® is in active build-out (FlexPro Armor production, Skylift PO, Bay Shore territory). Mitigation: this brief lives outside the work queue; buyer's agent shields the day.</p>
          </div>
        </div>
      </section>

      <!-- DECISION GATE -->
      <section class="nu-block">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Gate</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-decision">
          <h3>Authorize Steps 01–04 to Begin</h3>
          <p>Approval of this brief unlocks engagement of buyer's representation, ordering of title and survey, pre-qualification with Renasant, and scheduling of the inspection bundle. <strong>No price is offered, and no commitment is implied to the seller, until the brief returns signed at Step 05 with a locked walk-away number.</strong></p>
          <div class="nu-actions">
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20%E2%80%94%20Authorize%20Steps%2001%E2%80%9304" class="nu-btn-primary">Authorize Steps 01–04</a>
            <a href="tel:2055001343" class="nu-btn-secondary">Discuss by Phone</a>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
    <div class="nu-footer-bar">
      Internal acquisition brief — confidential. Not a binding offer. Negotiation values pending due-diligence completion.
    </div>
  </footer>

</body>
</html>