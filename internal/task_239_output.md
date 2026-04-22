<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-red: #C0392B;
      --nu-amber: #E67E22;
      --nu-green: #27AE60;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ DOC META ══ */
    .doc-meta-bar {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 18px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta-bar strong { color: var(--nu-dark-text); font-weight: 700; }
    .doc-classification {
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 4px 10px;
      border-radius: 3px;
      font-weight: 700;
      letter-spacing: 0.08em;
      font-size: 0.72rem;
      text-transform: uppercase;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .page-eyebrow {
      font-weight: 700;
      font-size: 0.8rem;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      line-height: 1.5;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-dark-text);
      margin: 42px 0 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-title:first-of-type { margin-top: 10px; }

    /* ══ PROPERTY SUMMARY CARD ══ */
    .property-card {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border: 1px solid #d0d8ff;
      border-left: 6px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 28px;
    }
    .property-card .prop-address {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .property-card .prop-desc {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      margin-bottom: 18px;
    }
    .property-specs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
    }
    .spec-cell {
      background: var(--nu-white);
      padding: 14px 16px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .spec-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 4px;
    }
    .spec-value {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
    }
    .spec-sub {
      font-size: 0.75rem;
      color: #6b7280;
      margin-top: 2px;
    }

    /* ══ STATUS PILL ══ */
    .status-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .pill-open { background: #fff4e5; color: var(--nu-amber); border: 1px solid #ffd9a8; }
    .pill-action { background: #fde8e6; color: var(--nu-red); border: 1px solid #f7c3be; }
    .pill-info { background: #e6f1ff; color: var(--nu-blue); border: 1px solid #b8d4ff; }
    .pill::before {
      content: '';
      width: 8px; height: 8px;
      border-radius: 50%;
      background: currentColor;
    }

    /* ══ OBJECTIVE CALLOUT ══ */
    .objective-box {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
    }
    .objective-box::before {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.12) 0%, transparent 70%);
    }
    .objective-box > * { position: relative; z-index: 1; }
    .objective-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .objective-text {
      font-size: 1.15rem;
      line-height: 1.55;
      color: var(--nu-white);
    }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 10px;
    }
    @media (max-width: 820px) { .two-col { grid-template-columns: 1fr; } }

    /* ══ GENERIC CARD ══ */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-card ul { list-style: none; padding: 0; }
    .nu-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card li:last-child { border-bottom: none; }
    .nu-card li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .nu-card li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ DILIGENCE TABLE ══ */
    .dd-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.92rem;
    }
    .dd-table thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 14px 16px;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .dd-table tbody td {
      padding: 14px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .dd-table tbody tr:nth-child(even) { background: #fafbff; }
    .dd-table .status-cell {
      font-weight: 700;
      white-space: nowrap;
    }
    .dd-table .s-pending { color: var(--nu-amber); }
    .dd-table .s-done { color: var(--nu-green); }
    .dd-table .s-block { color: var(--nu-red); }

    /* ══ NEGOTIATION LADDER ══ */
    .ladder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    .rung {
      background: var(--nu-white);
      padding: 20px;
      text-align: center;
      position: relative;
    }
    .rung-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 6px;
    }
    .rung-value {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .rung-note {
      font-size: 0.78rem;
      color: var(--nu-body-text);
    }
    .rung.rung-opening { border-top: 4px solid var(--nu-blue); }
    .rung.rung-target { border-top: 4px solid var(--nu-cyan); background: #f8fdff; }
    .rung.rung-walk { border-top: 4px solid var(--nu-red); }

    /* ══ TIMELINE ══ */
    .timeline {
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline li {
      position: relative;
      padding: 10px 0 18px 42px;
    }
    .timeline li::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 14px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      z-index: 1;
    }
    .timeline .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 2px;
    }
    .timeline .step-meta {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline .step-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ RISK GRID ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .risk-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-amber);
      border-radius: 6px;
      padding: 16px 18px;
    }
    .risk-tile.high { border-left-color: var(--nu-red); }
    .risk-tile.low { border-left-color: var(--nu-green); }
    .risk-tile h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .risk-tile .sev {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-amber);
      margin-bottom: 6px;
    }
    .risk-tile.high .sev { color: var(--nu-red); }
    .risk-tile.low .sev { color: var(--nu-green); }
    .risk-tile p {
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* ══ NEXT ACTIONS ══ */
    .next-actions {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 30px 34px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .next-actions h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.88rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .next-actions ol {
      list-style: none;
      counter-reset: action;
      padding: 0;
    }
    .next-actions li {
      counter-increment: action;
      padding: 12px 0 12px 44px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.15);
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .next-actions li:last-child { border-bottom: none; }
    .next-actions li::before {
      content: counter(action);
      position: absolute;
      left: 0; top: 10px;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.88rem;
    }
    .next-actions li strong { color: var(--nu-cyan); font-weight: 700; }

    /* ══ NOTE CALLOUT ══ */
    .note-callout {
      background: #fffbea;
      border: 1px solid #f5e3a0;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 16px 20px;
      border-radius: 6px;
      margin: 18px 0;
      font-size: 0.92rem;
    }
    .note-callout strong { color: var(--nu-dark-text); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 32px;
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
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.45);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 32px 22px 50px; }
      .page-title { font-size: 1.7rem; }
      .ladder { grid-template-columns: 1fr; }
      .doc-meta-bar { padding: 14px 22px; font-size: 0.78rem; }
      .dd-table { font-size: 0.84rem; }
      .dd-table thead th, .dd-table tbody td { padding: 10px 12px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer, .objective-box, .next-actions {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-content-area { padding: 20px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="doc-meta-bar">
    <div><strong>Document:</strong> Estate Acquisition Negotiation Brief</div>
    <div><strong>Prepared:</strong> April 22, 2026</div>
    <div><strong>Owner:</strong> Aaron C. Norris</div>
    <div class="doc-classification">Internal • Confidential</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">

    <!-- PAGE TITLE -->
    <div class="page-title-block">
      <div class="page-eyebrow">reMarkable Action Item • Real Estate</div>
      <h1 class="page-title">Negotiate Purchase — <span class="accent">4505 Buttewoods Estate</span></h1>
      <div class="page-subtitle">7,098 sq ft single-family residence. Structured acquisition plan, diligence checklist, and negotiation ladder to move from first offer to contract in under 30 days.</div>
    </div>

    <!-- PROPERTY CARD -->
    <div class="property-card">
      <div class="prop-address">4505 Buttewoods</div>
      <div class="prop-desc">Large estate-class single-family residence captured from reMarkable action list on April 22, 2026. Specs below reflect the recorded square footage; all other figures require confirmation during inspection and appraisal.</div>
      <div class="property-specs">
        <div class="spec-cell">
          <div class="spec-label">Living Area</div>
          <div class="spec-value">7,098 sq ft</div>
          <div class="spec-sub">Recorded on reMarkable</div>
        </div>
        <div class="spec-cell">
          <div class="spec-label">Property Type</div>
          <div class="spec-value">Estate</div>
          <div class="spec-sub">Single-family residence</div>
        </div>
        <div class="spec-cell">
          <div class="spec-label">Address</div>
          <div class="spec-value">4505 Buttewoods</div>
          <div class="spec-sub">City / ZIP to confirm</div>
        </div>
        <div class="spec-cell">
          <div class="spec-label">Status</div>
          <div class="spec-value">Negotiation</div>
          <div class="spec-sub">Pre-offer stage</div>
        </div>
      </div>
    </div>

    <!-- STATUS PILLS -->
    <div class="status-row">
      <span class="pill pill-open">Active — Open Item</span>
      <span class="pill pill-action">Owner: Aaron</span>
      <span class="pill pill-info">Source: reMarkable</span>
    </div>

    <!-- OBJECTIVE -->
    <div class="objective-box">
      <div class="objective-label">Objective</div>
      <div class="objective-text">Acquire the 7,098 sq ft Buttewoods estate at a defensible price, on terms that protect cash flow for Norris Utilities® operations and preserve optionality for long-term family use or hold-and-rent conversion.</div>
    </div>

    <!-- NEGOTIATION LADDER -->
    <h2 class="nu-section-title"><span class="lead">Negotiation</span> Ladder</h2>
    <p style="margin-bottom: 18px; color: var(--nu-body-text);">Three price points to lock before any verbal or written offer is made. Confirm appraisal and comps before filling final numbers; placeholders intentionally avoided — values below are expressed as decision anchors, not bids.</p>
    <div class="ladder">
      <div class="rung rung-opening">
        <div class="rung-label">Opening Offer</div>
        <div class="rung-value">Comps − 8%</div>
        <div class="rung-note">Based on closed sales within 6 months, same ZIP, 5,500+ sq ft</div>
      </div>
      <div class="rung rung-target">
        <div class="rung-label">Target (Best Case)</div>
        <div class="rung-value">Comps − 3%</div>
        <div class="rung-note">Where a clean, 30-day close earns the discount</div>
      </div>
      <div class="rung rung-walk">
        <div class="rung-label">Walk-Away Ceiling</div>
        <div class="rung-value">Comps + 0%</div>
        <div class="rung-note">No premium paid without a verified scarcity driver</div>
      </div>
    </div>

    <!-- TWO COLUMN: LEVERAGE + SELLER READ -->
    <div class="two-col" style="margin-top: 22px;">
      <div class="nu-card">
        <h3>Our Leverage</h3>
        <ul>
          <li><strong>Cash posture</strong> — ability to waive financing contingency if diligence is clean</li>
          <li><strong>Fast close</strong> — 30-day timeline attractive to estate or relocation sellers</li>
          <li><strong>No home-sale contingency</strong> — not waiting on another house to clear</li>
          <li><strong>As-is willingness</strong> — selectively, in exchange for price concession</li>
          <li><strong>Local reputation</strong> — Norris family 3rd-generation, trusted name</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>What To Learn About The Seller</h3>
        <ul>
          <li><strong>Motivation</strong> — downsizing, estate, relocation, or divorce</li>
          <li><strong>Timeline pressure</strong> — have they already bought next property?</li>
          <li><strong>Days on market</strong> — if listed; price reductions to date</li>
          <li><strong>Prior offers</strong> — any that fell through, and why</li>
          <li><strong>Carry cost</strong> — taxes, HOA, insurance per month</li>
          <li><strong>Flexibility</strong> — on rent-back, personal property, close date</li>
        </ul>
      </div>
    </div>

    <!-- DILIGENCE CHECKLIST -->
    <h2 class="nu-section-title"><span class="lead">Due</span> Diligence Checklist</h2>
    <table class="dd-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Why It Matters</th>
          <th>Owner</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Verify exact address, ZIP, and parcel ID</strong></td>
          <td>reMarkable note recorded "4505 Buttewoods" without city. Confirm before running title or comps.</td>
          <td>Aaron</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Pull recorded comps</strong></td>
          <td>Closed sales, same submarket, 5,500+ sq ft, last 6 months. Anchors the ladder above.</td>
          <td>Agent / Aaron</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Title search & lien check</strong></td>
          <td>7,098 sq ft estates often carry legacy encumbrances, easements, or open permits.</td>
          <td>Title company</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Survey & boundary confirmation</strong></td>
          <td>Estate lots frequently have setback or fence-line disputes with neighbors.</td>
          <td>Surveyor</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Full home inspection</strong></td>
          <td>A 7,098 sq ft structure carries roof, HVAC, foundation, and moisture risk by scale.</td>
          <td>Licensed inspector</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>HVAC, electrical, plumbing sub-inspections</strong></td>
          <td>Separate trade eyes on large mechanicals — generalist inspection is not enough at this size.</td>
          <td>Trade specialists</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Tax history & mill rate</strong></td>
          <td>Annual carry can swing $10K+ on a property this size; must be priced into offer.</td>
          <td>Aaron</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Insurance quote (pre-offer)</strong></td>
          <td>Large older homes can be uninsurable at standard rates. Confirm before signing.</td>
          <td>Insurance broker</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>HOA / covenant review</strong></td>
          <td>Restrictions on rental use, exterior modifications, or commercial vehicles matter for future options.</td>
          <td>Aaron</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
        <tr>
          <td><strong>Appraisal (independent)</strong></td>
          <td>Lender appraisal is a floor check; independent one is the ceiling check.</td>
          <td>Appraiser</td>
          <td class="status-cell s-pending">Pending</td>
        </tr>
      </tbody>
    </table>

    <!-- TIMELINE -->
    <h2 class="nu-section-title"><span class="lead">Negotiation</span> Timeline</h2>
    <ul class="timeline">
      <li>
        <div class="step-meta">Week 1</div>
        <div class="step-title">Confirm property identity & pull comps</div>
        <div class="step-body">Verify full address, parcel ID, and listing status. Pull 6-month comps for same submarket and square footage bracket. Build the real ladder numbers that replace the decision anchors above.</div>
      </li>
      <li>
        <div class="step-meta">Week 1 – 2</div>
        <div class="step-title">Back-channel seller motivation</div>
        <div class="step-body">Through listing agent or mutual contact, understand the why. Motivation always beats list price as a signal. Get days-on-market, prior offers, and carry cost.</div>
      </li>
      <li>
        <div class="step-meta">Week 2</div>
        <div class="step-title">Written offer — opening rung</div>
        <div class="step-body">Submit opening offer (Comps − 8%) with 30-day close, financing contingency intact, inspection contingency 10 days. Short expiration window to force response.</div>
      </li>
      <li>
        <div class="step-meta">Week 2 – 3</div>
        <div class="step-title">Counter cycle & inspection</div>
        <div class="step-body">Expect counter. Use inspection findings as justification for re-negotiation down from list. Walk once on material defects uncovered unless seller covers or credits.</div>
      </li>
      <li>
        <div class="step-meta">Week 3</div>
        <div class="step-title">Lock target price or walk</div>
        <div class="step-body">Either close the gap inside the target rung (Comps − 3%) or walk. Do not cross the walk-away ceiling without a verified scarcity reason.</div>
      </li>
      <li>
        <div class="step-meta">Week 4</div>
        <div class="step-title">Signed contract & title work</div>
        <div class="step-body">Executed P&amp;S agreement, earnest money deposited, title opened. Appraisal and survey ordered same day.</div>
      </li>
    </ul>

    <!-- RISK REGISTER -->
    <h2 class="nu-section-title"><span class="lead">Risk</span> Register</h2>
    <div class="risk-grid">
      <div class="risk-tile high">
        <div class="sev">High severity</div>
        <h4>Deferred maintenance at scale</h4>
        <p>7,098 sq ft means every dollar-per-sq-ft failure compounds. Roof replacement, HVAC, or foundation work on an estate this size can exceed $100K. Inspection-contingency budget must match.</p>
      </div>
      <div class="risk-tile high">
        <div class="sev">High severity</div>
        <h4>Ownership carry drag</h4>
        <p>Taxes, insurance, utilities, and landscaping on an estate can run significantly more than a standard home. If hold horizon is uncertain, the monthly burn matters as much as the purchase price.</p>
      </div>
      <div class="risk-tile">
        <div class="sev">Medium severity</div>
        <h4>Appraisal gap risk</h4>
        <p>Large estates have thin comp sets. An appraisal below contract price can force a renegotiation or gap coverage out of pocket. Pre-offer valuation read reduces this risk.</p>
      </div>
      <div class="risk-tile">
        <div class="sev">Medium severity</div>
        <h4>Insurance availability</h4>
        <p>Older or high-value estates can be declined or surcharged by standard carriers. Confirm a quote in writing before the offer goes firm.</p>
      </div>
      <div class="risk-tile">
        <div class="sev">Medium severity</div>
        <h4>Title / easement surprises</h4>
        <p>Legacy parcels often carry utility, driveway, or access easements. A clean title commitment is non-negotiable before closing.</p>
      </div>
      <div class="risk-tile low">
        <div class="sev">Low severity</div>
        <h4>Market timing</h4>
        <p>At estate price points, seasonal swings are muted. The negotiation is driven more by seller motivation than by macro market timing.</p>
      </div>
    </div>

    <!-- NOTE CALLOUT -->
    <div class="note-callout">
      <strong>Note on figures:</strong> Every number used as a ladder rung is expressed as a delta from verified comps, not a hard-coded dollar amount. Comps, appraisal, and seller motivation must be confirmed before any written offer is submitted. This is a working plan — not an authorization to offer.
    </div>

    <!-- DECISION CRITERIA -->
    <h2 class="nu-section-title"><span class="lead">Go</span> / No-Go Decision Criteria</h2>
    <div class="two-col">
      <div class="nu-card">
        <h3>Go if all three hold</h3>
        <ul>
          <li><strong>Price</strong> — final price lands at or under Comps − 3%</li>
          <li><strong>Inspection</strong> — no single-item repair over $25K uncovered, or seller credits to cover</li>
          <li><strong>Carry</strong> — total monthly carry (PITI + HOA + utilities) fits within planned budget without pressure on Norris Utilities® operating cash</li>
        </ul>
      </div>
      <div class="nu-card">
        <h3>Walk if any hold</h3>
        <ul>
          <li><strong>Seller will not cross</strong> the walk-away ceiling — no emotional chase</li>
          <li><strong>Material defect</strong> surfaces that seller will not credit or repair</li>
          <li><strong>Title / survey</strong> uncovers an easement, encroachment, or lien that impairs use</li>
          <li><strong>Insurance</strong> comes back declined or surcharged beyond carry tolerance</li>
          <li><strong>Appraisal gap</strong> larger than seller is willing to close by price reduction</li>
        </ul>
      </div>
    </div>

    <!-- NEXT ACTIONS -->
    <div class="next-actions">
      <h3>Immediate Next Actions — Aaron</h3>
      <ol>
        <li><strong>Confirm full property identity.</strong> Verify city, ZIP, and parcel ID for "4505 Buttewoods" before anything else — the reMarkable note is address-only.</li>
        <li><strong>Engage a buyer's agent</strong> experienced with 5,000+ sq ft estate sales in the relevant market. Avoid the listing agent as dual representation.</li>
        <li><strong>Pull 6-month comp set</strong> and replace the ladder decision anchors with real dollar figures.</li>
        <li><strong>Request seller disclosures</strong> and days-on-market history from listing side.</li>
        <li><strong>Get insurance pre-quote</strong> in writing on the specific address before submitting offer.</li>
        <li><strong>Schedule inspection slate</strong> — generalist plus HVAC, electrical, and structural — ready to deploy the day an offer is accepted.</li>
        <li><strong>Lock financing posture</strong> — decide cash vs. financed before offer submission, because that determines which contingencies appear on the P&amp;S.</li>
      </ol>
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
    <div class="nu-footer-meta">Internal Document • Prepared April 22, 2026 • Source: reMarkable Action Item</div>
  </footer>

</body>
</html>