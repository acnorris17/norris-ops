<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition Strategy — 4505 Buttewoods — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-success: #1B8A3A;
      --nu-warn: #B8860B;
      --nu-danger: #B82C2C;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-serif: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header-inner { position: relative; z-index: 2; max-width: 1000px; margin: 0 auto; }

    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 18px;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-badge {
      display: inline-block;
      margin-top: 28px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* MAIN CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px 80px;
    }
    .nu-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

    .nu-doc-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .nu-doc-title .lead-word {
      color: #0033CC;
    }
    .nu-doc-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 8px;
    }
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px 0;
      margin-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .nu-doc-meta div strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    /* SECTION */
    .nu-section { margin-top: 46px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
      line-height: 1.25;
    }
    .nu-section-title .lead {
      color: #0033CC;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin: 10px 0 22px;
    }

    /* SUMMARY CARD */
    .nu-summary {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      margin-top: 28px;
      border-radius: 0 6px 6px 0;
    }
    .nu-summary p { font-size: 1.02rem; color: #2a2a3a; }
    .nu-summary p + p { margin-top: 10px; }

    /* PROPERTY BOX */
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 0;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-top: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-property-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      border-right: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-property-cell .label {
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .nu-property-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .nu-property-cell .unit {
      font-size: 0.78rem;
      font-weight: 400;
      color: #777;
      display: block;
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge-list { margin-top: 10px; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 26px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }
    .nu-badge-text { flex: 1; }

    /* STEP TABLE */
    .nu-step {
      display: grid;
      grid-template-columns: 90px 1fr;
      gap: 24px;
      padding: 22px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-step:last-child { border-bottom: none; }
    .nu-step-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.8rem;
      color: var(--nu-cyan);
      line-height: 1;
    }
    .nu-step-body h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-step-body p { font-size: 0.97rem; color: #444; }
    .nu-step-body ul {
      margin-top: 10px;
      padding-left: 0;
      list-style: none;
    }
    .nu-step-body li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
      font-size: 0.95rem;
      color: #444;
    }
    .nu-step-body li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      top: -2px;
    }

    /* VALUATION TABLE */
    .nu-table-wrap {
      margin-top: 12px;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-table { width: 100%; border-collapse: collapse; }
    .nu-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 14px 16px;
      text-align: left;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) { background: #fafbff; }
    .nu-table td.num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
    .nu-table td.target { color: var(--nu-blue); font-weight: 900; }
    .nu-table tr.target-row { background: #eef3ff !important; }
    .nu-table tr.target-row td { border-top: 2px solid var(--nu-blue); font-weight: 900; }

    /* ASK VS OFFER */
    .nu-offer-stack {
      display: grid;
      grid-template-columns: 1fr 60px 1fr;
      gap: 0;
      align-items: stretch;
      margin-top: 16px;
    }
    .nu-offer-card {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 22px;
      text-align: center;
    }
    .nu-offer-card.ask {
      border-color: #bbb;
    }
    .nu-offer-card.target {
      border-color: var(--nu-blue);
      background: linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%);
      box-shadow: 0 6px 24px rgba(0,0,255,0.08);
    }
    .nu-offer-card .label {
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 700;
      color: #666;
      margin-bottom: 10px;
    }
    .nu-offer-card.target .label { color: var(--nu-blue); }
    .nu-offer-card .big {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-offer-card .note {
      font-size: 0.82rem;
      color: #777;
    }
    .nu-offer-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* RISK CARDS */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 14px;
    }
    .nu-risk {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-danger);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-risk.mitigation { border-top-color: var(--nu-success); }
    .nu-risk h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-risk h4 .chip {
      display: inline-block;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      padding: 3px 8px;
      background: var(--nu-danger);
      color: white;
      border-radius: 2px;
      margin-right: 8px;
      vertical-align: middle;
      text-transform: uppercase;
    }
    .nu-risk.mitigation h4 .chip { background: var(--nu-success); }
    .nu-risk p { font-size: 0.9rem; color: #444; line-height: 1.55; }

    /* TERMS LIST */
    .nu-terms {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: white;
      padding: 30px 32px;
      border-radius: 10px;
      margin-top: 14px;
      position: relative;
      overflow: hidden;
    }
    .nu-terms::before {
      content: '';
      position: absolute;
      top: -30%; right: -10%;
      width: 60%; height: 160%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.2) 0%, transparent 70%);
    }
    .nu-terms h3 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.05em;
      margin-bottom: 16px;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
    }
    .nu-terms ul {
      list-style: none;
      position: relative;
      z-index: 1;
    }
    .nu-terms li {
      padding: 10px 0 10px 28px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      font-size: 0.95rem;
    }
    .nu-terms li:last-child { border-bottom: none; }
    .nu-terms li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 14px; height: 14px;
      border: 2px solid var(--nu-cyan);
      border-radius: 2px;
      background: transparent;
    }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
      margin-top: 20px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 8px; bottom: 8px; left: 10px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-time-item {
      position: relative;
      padding: 12px 0 18px;
    }
    .nu-time-item::before {
      content: '';
      position: absolute;
      left: -32px; top: 18px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(0,0,255,0.1);
    }
    .nu-time-item .when {
      font-weight: 900;
      font-size: 0.82rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-time-item h4 {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-time-item p {
      font-size: 0.92rem;
      color: #555;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 20px 24px;
      margin-top: 24px;
      border-radius: 0 6px 6px 0;
    }
    .nu-callout strong { color: #7a6322; font-weight: 900; }
    .nu-callout p { color: #5a4a18; font-size: 0.95rem; }

    /* DECISION BOX */
    .nu-decision {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 30px;
      margin-top: 30px;
      box-shadow: 0 6px 20px rgba(0,0,255,0.08);
    }
    .nu-decision h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-decision-opts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .nu-decision-opt {
      border: 1px dashed #aaa;
      padding: 18px;
      border-radius: 6px;
      text-align: center;
      font-size: 0.95rem;
    }
    .nu-decision-opt strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .nu-decision-opt .approve { color: var(--nu-success); font-weight: 900; }
    .nu-decision-opt .counter { color: var(--nu-warn); font-weight: 900; }
    .nu-decision-opt .walk { color: var(--nu-danger); font-weight: 900; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 400;
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
    .nu-footer-brand {
      font-weight: 900;
      letter-spacing: 0.15em;
      color: var(--nu-white);
      margin-bottom: 6px;
      font-size: 0.95rem;
    }
    .nu-footer-confidential {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 22px 60px; }
      .nu-doc-title { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-offer-stack { grid-template-columns: 1fr; }
      .nu-offer-arrow { transform: rotate(90deg); padding: 6px 0; }
      .nu-step { grid-template-columns: 60px 1fr; gap: 14px; }
      .nu-step-num { font-size: 2rem; }
      .nu-table th, .nu-table td { padding: 10px; font-size: 0.85rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-risk, .nu-decision, .nu-terms { page-break-inside: avoid; }
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
    <div class="nu-header-inner">
      <div class="nu-phoenix-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-badge">Internal · Acquisition Strategy</div>
    </div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-doc-title"><span class="lead-word">Estate</span> Acquisition Negotiation Plan</div>
      <div class="nu-doc-sub">7,098 sq ft residence · 4505 Buttewoods · Target purchase strategy and offer framework</div>
      <div class="nu-doc-meta">
        <div><strong>Subject Property</strong>4505 Buttewoods</div>
        <div><strong>Home Size</strong>7,098 sq ft</div>
        <div><strong>Prepared For</strong>Aaron C. Norris</div>
        <div><strong>Prepared By</strong>Norris Utilities® Agent</div>
        <div><strong>Date</strong>April 22, 2026</div>
        <div><strong>Status</strong>Strategy Draft — awaiting Aaron's review</div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Executive</span> <span class="rest">Summary</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-summary">
          <p>4505 Buttewoods is a 7,098 sq ft estate being evaluated as a personal acquisition. This document frames the negotiation as a disciplined, data-anchored process — not an emotional one. The objective is to purchase at or below fair market value, with contingencies that protect Aaron's position, and with financing terms aligned to Norris Utilities'® operating cash cycle.</p>
          <p>The recommended path: order a full appraisal and inspection, anchor the opening offer to the low-end comparable sale per square foot, negotiate in three scripted rounds, and walk away if the seller will not meet the target price or clear known defects. No verbal commitments. Every concession written.</p>
          <p>This plan assumes no listing price or seller counter is presently known to the agent. All price bands below are illustrative frameworks — Aaron will provide the actual asking price and comp data before the first offer is submitted.</p>
        </div>
      </div>

      <!-- PROPERTY PROFILE -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Property</span> <span class="rest">Profile</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-property-grid">
          <div class="nu-property-cell">
            <div class="label">Address</div>
            <div class="value">4505 Buttewoods</div>
            <span class="unit">Subject property</span>
          </div>
          <div class="nu-property-cell">
            <div class="label">Living Area</div>
            <div class="value">7,098</div>
            <span class="unit">square feet, heated &amp; cooled</span>
          </div>
          <div class="nu-property-cell">
            <div class="label">Classification</div>
            <div class="value">Estate Home</div>
            <span class="unit">Large single-family residence</span>
          </div>
          <div class="nu-property-cell">
            <div class="label">Intended Use</div>
            <div class="value">Primary Residence</div>
            <span class="unit">Owner-occupied, not investment</span>
          </div>
          <div class="nu-property-cell">
            <div class="label">Buyer</div>
            <div class="value">Aaron C. Norris</div>
            <span class="unit">Individually or via entity TBD with counsel</span>
          </div>
          <div class="nu-property-cell">
            <div class="label">Priority</div>
            <div class="value">Strategic</div>
            <span class="unit">No urgency — disciplined approach</span>
          </div>
        </div>
        <div class="nu-callout">
          <p><strong>Data to confirm with Aaron before offer:</strong> current asking price, days on market, lot acreage, year built, recent improvements, HOA or covenant status, property tax history, and any seller disclosures (prior repairs, water intrusion, roof age, HVAC age, septic/sewer, well/public water).</p>
        </div>
      </div>

      <!-- NEGOTIATION PRINCIPLES -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Principles</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-badge-list">
          <div class="nu-badge"><span class="nu-badge-num">1</span><span class="nu-badge-text">Know the target number before the first conversation — never let the seller anchor</span></div>
          <div class="nu-badge"><span class="nu-badge-num">2</span><span class="nu-badge-text">Every concession must be written — no verbal side agreements, ever</span></div>
          <div class="nu-badge"><span class="nu-badge-num">3</span><span class="nu-badge-text">Use silence as a tool — let the seller fill the air after a counter</span></div>
          <div class="nu-badge"><span class="nu-badge-num">4</span><span class="nu-badge-text">Contingencies protect capital — inspection, appraisal, financing, and title are non-negotiable</span></div>
          <div class="nu-badge"><span class="nu-badge-num">5</span><span class="nu-badge-text">Walk-away price is fixed in writing before round one — do not revise mid-negotiation</span></div>
          <div class="nu-badge"><span class="nu-badge-num">6</span><span class="nu-badge-text">Treat the listing agent with respect — they drive the timeline and earn a trusted relationship</span></div>
        </div>
      </div>

      <!-- STEP PLAN -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Step-by-Step</span> <span class="rest">Playbook</span></div>
        <div class="nu-section-rule"></div>

        <div class="nu-step">
          <div class="nu-step-num">01</div>
          <div class="nu-step-body">
            <h3>Diligence Before Offer</h3>
            <p>Build the fact base. Every offer number and contingency must be traceable to data.</p>
            <ul>
              <li>Pull three closed comparable sales within 12 months, ≥ 5,500 sq ft, same submarket</li>
              <li>Pull tax assessor record: assessed value, last transfer date, last transfer price</li>
              <li>Order preliminary title search — confirm clean chain and any encumbrances</li>
              <li>Engage licensed home inspector — full structural, roof, HVAC, electrical, plumbing</li>
              <li>Engage licensed real estate attorney (Alabama) to represent Aaron from day one</li>
            </ul>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">02</div>
          <div class="nu-step-body">
            <h3>Establish Target, Opening, and Walk-Away Prices</h3>
            <p>Three numbers, written down, signed by Aaron, sealed in a drawer before any conversation with the seller.</p>
            <ul>
              <li><strong>Opening:</strong> the floor of comparable $/sq ft × 7,098 (low-anchor, not insulting)</li>
              <li><strong>Target:</strong> the median of comparable $/sq ft × 7,098 (realistic close point)</li>
              <li><strong>Walk-away:</strong> hard ceiling — typically 3–5% above target, never revisited</li>
            </ul>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">03</div>
          <div class="nu-step-body">
            <h3>Submit a Written Offer with Full Contingency Stack</h3>
            <p>A clean, written offer with proof of funds or pre-approval signals seriousness and protects Aaron.</p>
            <ul>
              <li>Purchase price at opening number, with earnest money ≤ 1% of offer price</li>
              <li>10-day inspection period with right to renegotiate or terminate</li>
              <li>Appraisal contingency — purchase price cannot exceed appraised value</li>
              <li>Financing contingency (if applicable) — specific lender and rate cap</li>
              <li>Clear title contingency — all liens, easements, encroachments resolved before closing</li>
              <li>30-day closing from acceptance — standard, non-pressured timeline</li>
            </ul>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">04</div>
          <div class="nu-step-body">
            <h3>Counter Discipline — Three Rounds Maximum</h3>
            <p>Plan each round in advance. Movement is earned, not volunteered.</p>
            <ul>
              <li><strong>Round 1:</strong> seller counters high — Aaron moves toward target by ≤ 40% of the gap</li>
              <li><strong>Round 2:</strong> request concession (repair credit, closing costs, inclusion of fixtures) in exchange for additional price movement</li>
              <li><strong>Round 3:</strong> best-and-final at walk-away price with 48-hour expiration — no further negotiation</li>
            </ul>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">05</div>
          <div class="nu-step-body">
            <h3>Inspection Period — Renegotiate on Findings</h3>
            <p>The inspection is not a formality. Defects reset the conversation.</p>
            <ul>
              <li>Review inspection report with attorney within 48 hours of receipt</li>
              <li>Categorize findings: structural (hard renegotiate), systems (credit or repair), cosmetic (accept)</li>
              <li>Issue written repair/credit request — specific scope, specific dollars</li>
              <li>If seller refuses material items: terminate and reclaim earnest money</li>
            </ul>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">06</div>
          <div class="nu-step-body">
            <h3>Closing — Signed, Funded, Recorded</h3>
            <p>Nothing is final until the deed is recorded in Aaron's name.</p>
            <ul>
              <li>Final walk-through 24 hours before closing — confirm property condition unchanged</li>
              <li>Wire funds only through attorney's verified escrow account — confirm by phone call to known number</li>
              <li>Obtain owner's title insurance policy in full amount</li>
              <li>Record deed same day — verify recording with county the following business day</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- VALUATION MATRIX -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Valuation</span> <span class="rest">Matrix (Framework)</span></div>
        <div class="nu-section-rule"></div>
        <p style="font-size:0.95rem; color:#555; margin-bottom: 4px;">Illustrative bands — to be populated with actual comparable sales before offer submission. The formula is transparent: price-per-square-foot band × 7,098 sq ft = offer anchor.</p>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>$ / Sq Ft Basis</th>
                <th style="text-align:right;">Implied Price (7,098 sq ft)</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Low Comp Floor</strong></td>
                <td>Cheapest closed comp, last 12 months</td>
                <td class="num">Comp $/sf × 7,098</td>
                <td>Opening offer — low anchor</td>
              </tr>
              <tr class="target-row">
                <td class="target">Target — Median Comp</td>
                <td>Median closed comp, last 12 months</td>
                <td class="num target">Comp $/sf × 7,098</td>
                <td>Target close point</td>
              </tr>
              <tr>
                <td><strong>High Comp Ceiling</strong></td>
                <td>Highest closed comp, last 12 months</td>
                <td class="num">Comp $/sf × 7,098</td>
                <td>Walk-away ceiling reference</td>
              </tr>
              <tr>
                <td><strong>Tax Assessment</strong></td>
                <td>County assessor appraised value</td>
                <td class="num">Public record</td>
                <td>Sanity check, not negotiation anchor</td>
              </tr>
              <tr>
                <td><strong>Independent Appraisal</strong></td>
                <td>Licensed appraiser, ordered by Aaron</td>
                <td class="num">Report value</td>
                <td>Appraisal contingency trigger</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="nu-callout">
          <p><strong>Rule:</strong> If the independent appraisal comes in below the agreed purchase price, Aaron either renegotiates down to appraised value or terminates under the appraisal contingency. Do not waive this contingency under any circumstances.</p>
        </div>
      </div>

      <!-- ASK vs TARGET vs WALK -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Offer</span> <span class="rest">Architecture</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-offer-stack">
          <div class="nu-offer-card ask">
            <div class="label">Opening Offer</div>
            <div class="big">Low Anchor</div>
            <div class="note">Floor of comp $/sf — justified, not insulting</div>
          </div>
          <div class="nu-offer-arrow">→</div>
          <div class="nu-offer-card target">
            <div class="label">Target Close</div>
            <div class="big">Median Comp</div>
            <div class="note">Where Aaron expects to settle</div>
          </div>
        </div>
        <div style="text-align:center; margin-top:20px; padding: 18px; border: 2px dashed var(--nu-danger); border-radius:8px; background:#fff7f7;">
          <div style="font-size:0.72rem; letter-spacing:0.16em; text-transform:uppercase; font-weight:700; color:var(--nu-danger); margin-bottom:6px;">Walk-Away Ceiling</div>
          <div style="font-weight:900; color:var(--nu-danger); font-size:1.1rem;">Fixed Before Round One · Never Revised · Confirmed In Writing</div>
        </div>
      </div>

      <!-- TERMS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Non-Negotiable</span> <span class="rest">Terms &amp; Contingencies</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-terms">
          <h3>Must Appear In The Written Offer</h3>
          <ul>
            <li>Inspection contingency — 10 days minimum, right to terminate for any reason</li>
            <li>Appraisal contingency — purchase price tied to appraised value</li>
            <li>Clear and marketable title — owner's title insurance policy required</li>
            <li>Survey contingency — confirm lot boundaries and no encroachments</li>
            <li>Disclosure contingency — full review of seller property disclosure form</li>
            <li>Earnest money held by neutral escrow or closing attorney — not seller or listing brokerage</li>
            <li>Closing location, date, and attorney named in contract</li>
            <li>Risk of loss remains with seller until deed is recorded</li>
            <li>Fixtures list — every included item enumerated (no "we assumed the chandelier stayed")</li>
            <li>Default and remedy clauses reviewed and approved by Aaron's counsel</li>
          </ul>
        </div>
      </div>

      <!-- RISKS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Risk</span> <span class="rest">Register</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-risk-grid">
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Overpayment</h4>
            <p>Estate homes carry emotional premium. Without disciplined comp analysis, Aaron could overpay by 5–15%.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Appraisal Contingency</h4>
            <p>Independent appraisal caps purchase price at market value. Written walk-away ceiling holds discipline.</p>
          </div>
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Concealed Defects</h4>
            <p>A 7,098 sq ft home has many systems. Roof, foundation, HVAC, plumbing, and electrical each represent five- to six-figure exposure.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Full Inspection + Specialist Visits</h4>
            <p>General inspector plus specialists for roof, HVAC, and foundation. Radon and mold testing. Write findings into renegotiation.</p>
          </div>
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Title Encumbrances</h4>
            <p>Old estates often carry easements, covenants, or unpaid tax claims that surface only at closing.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Preliminary Title + Owner's Policy</h4>
            <p>Order preliminary title commitment before offer. Require clear title and owner's title insurance at closing.</p>
          </div>
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Financing Disruption</h4>
            <p>Jumbo mortgage pricing and approval can shift during the contract period, impacting debt service plans.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Locked Rate + Backup Lender</h4>
            <p>Full pre-approval with rate lock, second lender as backup. Cash buffer held through closing.</p>
          </div>
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Seller Regret / Retraction</h4>
            <p>Sellers sometimes attempt to back out mid-contract — especially on emotional estate sales.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Specific Performance Clause</h4>
            <p>Contract grants Aaron right to specific performance (force sale) if seller defaults. Attorney drafts language.</p>
          </div>
          <div class="nu-risk">
            <h4><span class="chip">Risk</span>Operating Cash Impact</h4>
            <p>Large personal outlay should not strain Norris Utilities® operating cash — Samson, FlexPro Armor, Skylift payables come first.</p>
          </div>
          <div class="nu-risk mitigation">
            <h4><span class="chip">Mitigation</span>Separate Capital Source</h4>
            <p>Funding from personal reserves or Renasant Bank (Patrick Lavette) — never from company operating accounts.</p>
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Proposed</span> <span class="rest">Timeline</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-timeline">
          <div class="nu-time-item">
            <div class="when">Week 1 — Diligence</div>
            <h4>Comps, title, attorney, inspector engaged</h4>
            <p>Aaron provides asking price and comp data; agent assembles valuation matrix and defines the three offer numbers.</p>
          </div>
          <div class="nu-time-item">
            <div class="when">Week 2 — Offer Submission</div>
            <h4>Written opening offer delivered through listing agent</h4>
            <p>Full contingency stack, proof of funds or pre-approval, 72-hour response window.</p>
          </div>
          <div class="nu-time-item">
            <div class="when">Week 2–3 — Negotiation Rounds</div>
            <h4>Three disciplined counter rounds, ending with best-and-final</h4>
            <p>Either seller accepts at or below walk-away ceiling, or Aaron withdraws.</p>
          </div>
          <div class="nu-time-item">
            <div class="when">Week 4 — Inspection Period</div>
            <h4>Full inspections complete, renegotiation on findings</h4>
            <p>Structural and system defects drive credit requests or contract termination.</p>
          </div>
          <div class="nu-time-item">
            <div class="when">Week 5–6 — Financing &amp; Title</div>
            <h4>Appraisal ordered, loan finalized, title cleared</h4>
            <p>Any appraisal gap triggers renegotiation under contingency.</p>
          </div>
          <div class="nu-time-item">
            <div class="when">Week 7 — Closing</div>
            <h4>Walk-through, funding, recording</h4>
            <p>Deed recorded in Aaron's name — transaction complete.</p>
          </div>
        </div>
      </div>

      <!-- DECISION -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Decision</span> <span class="rest">Requested</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-decision">
          <h3>Aaron's Call — Choose One Path</h3>
          <p>This strategy plan cannot move forward without Aaron's written direction. The three choices are clear:</p>
          <div class="nu-decision-opts">
            <div class="nu-decision-opt">
              <strong class="approve">Approve as Written</strong>
              Agent proceeds to Week 1 diligence once Aaron provides asking price, comp data, and lender preference.
            </div>
            <div class="nu-decision-opt">
              <strong class="counter">Modify Scope</strong>
              Aaron specifies changes to contingencies, timeline, or negotiation rounds — agent revises and re-submits.
            </div>
            <div class="nu-decision-opt">
              <strong class="walk">Pause or Walk</strong>
              Hold strategy in archive. No outreach, no offer, no further work until Aaron reactivates.
            </div>
          </div>
        </div>
      </div>

      <!-- NEXT ACTIONS -->
      <div class="nu-section">
        <div class="nu-section-title"><span class="lead">Next</span> <span class="rest">Actions — Awaiting Aaron</span></div>
        <div class="nu-section-rule"></div>
        <div class="nu-badge-list">
          <div class="nu-badge"><span class="nu-badge-num">A</span><span class="nu-badge-text">Confirm asking price and any seller counter already received</span></div>
          <div class="nu-badge"><span class="nu-badge-num">B</span><span class="nu-badge-text">Provide or authorize pull of three closed comparable estate sales</span></div>
          <div class="nu-badge"><span class="nu-badge-num">C</span><span class="nu-badge-text">Name preferred real estate attorney and home inspector</span></div>
          <div class="nu-badge"><span class="nu-badge-num">D</span><span class="nu-badge-text">Confirm funding source — personal reserves, Renasant Bank (Patrick Lavette), or hybrid</span></div>
          <div class="nu-badge"><span class="nu-badge-num">E</span><span class="nu-badge-text">Sign off on the three numbers: opening, target, walk-away</span></div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-brand">NORRIS UTILITIES®</div>
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      130 Inverness Plaza #210, Birmingham, Alabama 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">
      Confidential — Internal Strategy Document · Prepared 2026-04-22 · Not an offer to purchase until signed by Aaron C. Norris
    </div>
  </footer>

</body>
</html>