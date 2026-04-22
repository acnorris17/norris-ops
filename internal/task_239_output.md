<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Acquisition — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0A8043;
      --nu-warning: #C97B0A;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ DOC BANNER ══ */
    .doc-banner {
      background: var(--nu-white);
      padding: 30px 40px 10px;
      text-align: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .doc-kicker {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 3px;
      margin-bottom: 14px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 6px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 8px;
    }
    .doc-meta {
      font-size: 0.82rem;
      color: #777;
      letter-spacing: 0.04em;
    }

    /* ══ MAIN ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 20px 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 100px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ SUMMARY STRIP ══ */
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.07);
      margin-bottom: 36px;
      border: 1px solid var(--nu-medium-gray);
    }
    .summary-cell {
      padding: 22px 20px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .summary-cell:last-child { border-right: none; }
    .summary-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .summary-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .summary-sub {
      font-size: 0.78rem;
      color: #777;
      margin-top: 4px;
    }

    /* ══ SECTION ══ */
    .nu-section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 34px 36px;
      margin-bottom: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    p { margin-bottom: 14px; }
    p.lead {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }

    /* ══ PROPERTY FACTS ══ */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px 28px;
    }
    .fact-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .fact-row:last-child { border-bottom: none; }
    .fact-label {
      color: #666;
      font-weight: 400;
    }
    .fact-value {
      font-weight: 700;
      color: var(--nu-dark-text);
      text-align: right;
    }

    /* ══ CHEVRON BADGES ══ */
    .badge-list { margin: 0; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 28px; height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ VALUATION TABLE ══ */
    .valuation-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 0.95rem;
    }
    .valuation-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 900;
    }
    .valuation-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .valuation-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .valuation-table td.num {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .valuation-table tr.highlight td {
      background: rgba(0, 0, 255, 0.06);
      font-weight: 900;
      color: var(--nu-blue);
    }

    /* ══ NEGOTIATION LADDER ══ */
    .ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 6px;
    }
    .ladder-step {
      border-radius: 10px;
      padding: 22px 20px;
      border: 2px solid var(--nu-medium-gray);
      background: var(--nu-white);
      position: relative;
    }
    .ladder-step.opening { border-color: var(--nu-success); }
    .ladder-step.target { border-color: var(--nu-blue); background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.04)); }
    .ladder-step.walk { border-color: var(--nu-danger); }
    .ladder-tag {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .ladder-step.opening .ladder-tag { background: var(--nu-success); color: var(--nu-white); }
    .ladder-step.target .ladder-tag { background: var(--nu-blue); color: var(--nu-white); }
    .ladder-step.walk .ladder-tag { background: var(--nu-danger); color: var(--nu-white); }
    .ladder-price {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .ladder-ppsf {
      font-size: 0.82rem;
      color: #777;
      margin-bottom: 10px;
    }
    .ladder-note {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }

    /* ══ LEVERAGE / RISK ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .col-card {
      border-radius: 8px;
      padding: 22px 24px;
    }
    .col-card.lev {
      background: linear-gradient(135deg, rgba(10,128,67,0.06), rgba(6,208,255,0.04));
      border-left: 4px solid var(--nu-success);
    }
    .col-card.risk {
      background: linear-gradient(135deg, rgba(201,123,10,0.06), rgba(184,35,42,0.04));
      border-left: 4px solid var(--nu-warning);
    }
    .col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 12px;
      color: var(--nu-dark-text);
    }
    .col-card ul { list-style: none; padding: 0; }
    .col-card li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
      border-bottom: 1px dashed rgba(0,0,0,0.08);
    }
    .col-card li:last-child { border-bottom: none; }
    .col-card.lev li::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 8px;
      color: var(--nu-success);
      font-weight: 900;
    }
    .col-card.risk li::before {
      content: '!';
      position: absolute;
      left: 4px;
      top: 8px;
      color: var(--nu-warning);
      font-weight: 900;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 36px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 6px;
      bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .tl-item { position: relative; margin-bottom: 22px; }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .tl-day {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 3px;
    }
    .tl-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .tl-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ TERMS GRID ══ */
    .terms-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .term-card {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      padding: 14px 18px;
      border-radius: 4px;
    }
    .term-name {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .term-val {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      line-height: 1.5;
    }

    /* ══ SCRIPT CARDS ══ */
    .script-card {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 20px 24px;
      margin-bottom: 14px;
      border-left: 4px solid var(--nu-blue);
    }
    .script-label {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .script-quote {
      font-style: italic;
      font-size: 1rem;
      line-height: 1.6;
      color: var(--nu-dark-text);
    }

    /* ══ NEXT STEPS ══ */
    .next-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .next-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      text-align: left;
    }
    .next-num {
      display: inline-block;
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      text-align: center;
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 0.92rem;
    }
    .next-title {
      font-weight: 900;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-bottom: 5px;
    }
    .next-desc {
      font-size: 0.87rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* ══ CTA ══ */
    .cta-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 55%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 40px 36px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 28px;
      margin-bottom: 28px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.15);
    }
    .cta-heading {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 6px;
      color: var(--nu-white);
    }
    .cta-sub {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.5;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 28px;
      border: none;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .nu-btn-primary:hover {
      background: var(--nu-white);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(6,208,255,0.4);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .summary-strip { grid-template-columns: repeat(2, 1fr); }
      .summary-cell:nth-child(2) { border-right: none; }
      .summary-cell:nth-child(1), .summary-cell:nth-child(2) { border-bottom: 1px solid var(--nu-medium-gray); }
      .ladder { grid-template-columns: 1fr; }
      .two-col { grid-template-columns: 1fr; }
      .next-grid { grid-template-columns: 1fr; }
      .facts-grid { grid-template-columns: 1fr; }
      .terms-grid { grid-template-columns: 1fr; }
      .cta-box { flex-direction: column; text-align: center; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 0 20px; }
      .nu-section { padding: 24px 22px; }
      .doc-title { font-size: 1.5rem; }
      .summary-strip { grid-template-columns: 1fr; }
      .summary-cell { border-right: none !important; border-bottom: 1px solid var(--nu-medium-gray); }
      .summary-cell:last-child { border-bottom: none; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .cta-box { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC BANNER -->
  <div class="doc-banner">
    <div class="doc-kicker">Acquisition Strategy Brief</div>
    <div class="doc-title">Negotiate Purchase — <span>4505 Buttewoods Estate</span></div>
    <div class="doc-subtitle">7,098 sq ft Private Residence · Negotiation Playbook &amp; Valuation Framework</div>
    <div class="doc-meta">Prepared: April 22, 2026 · Principal: Aaron C. Norris · Source: reMarkable Action Item</div>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- SUMMARY STRIP -->
      <div class="summary-strip">
        <div class="summary-cell">
          <div class="summary-label">Property</div>
          <div class="summary-value">7,098 sq ft</div>
          <div class="summary-sub">Estate residence</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Address</div>
          <div class="summary-value">4505 Buttewoods</div>
          <div class="summary-sub">Target acquisition</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Status</div>
          <div class="summary-value">Negotiation</div>
          <div class="summary-sub">Active phase</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Next Milestone</div>
          <div class="summary-value">Written Offer</div>
          <div class="summary-sub">Within 7 days</div>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <div class="nu-section-title">Objective <span>— What We Are Doing</span></div>
        <div class="nu-section-rule"></div>
        <p class="lead">
          Negotiate the acquisition of the 7,098 sq ft estate residence located at 4505 Buttewoods on terms
          that protect capital, secure favorable financing contingencies, and deliver a clean close without
          post-close surprises. This brief establishes the valuation range, opening position, walk-away line,
          leverage points, risk factors, and the step-by-step playbook Aaron will follow from offer through closing.
        </p>
        <p>
          The estate is a large single-family residence. At 7,098 sq ft, the property sits well above the typical
          market average for most Birmingham-area neighborhoods, placing it in the luxury tier. Luxury segment
          listings in this size range typically show longer days-on-market, wider bid-ask spreads, and more room
          for negotiation than standard inventory. That dynamic favors a disciplined buyer who arrives prepared.
        </p>
      </section>

      <!-- PROPERTY FACTS -->
      <section class="nu-section">
        <div class="nu-section-title">Property <span>— Facts &amp; Baseline</span></div>
        <div class="nu-section-rule"></div>
        <div class="facts-grid">
          <div class="fact-row"><span class="fact-label">Street Address</span><span class="fact-value">4505 Buttewoods</span></div>
          <div class="fact-row"><span class="fact-label">Property Type</span><span class="fact-value">Estate / Single-Family</span></div>
          <div class="fact-row"><span class="fact-label">Total Living Area</span><span class="fact-value">7,098 sq ft</span></div>
          <div class="fact-row"><span class="fact-label">Market Segment</span><span class="fact-value">Luxury Tier</span></div>
          <div class="fact-row"><span class="fact-label">Transaction Role</span><span class="fact-value">Buyer (Aaron C. Norris)</span></div>
          <div class="fact-row"><span class="fact-label">Engagement Stage</span><span class="fact-value">Pre-Offer / Negotiation</span></div>
          <div class="fact-row"><span class="fact-label">Source Document</span><span class="fact-value">reMarkable Action Item</span></div>
          <div class="fact-row"><span class="fact-label">Owner of Record</span><span class="fact-value">To Be Confirmed via Title</span></div>
        </div>
      </section>

      <!-- PREPARATION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-title">Preparation <span>— Before Any Offer Goes Out</span></div>
        <div class="nu-section-rule"></div>
        <p>Each of the following must be completed before Aaron submits a written offer. No verbal numbers
           until the full prep set is in hand.</p>
        <div class="badge-list">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Pull three most recent tax assessments and confirm owner of record</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Obtain formal CMA — minimum 5 comps within 1 mile, closed within last 180 days</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Commission pre-offer inspection for roof, foundation, mechanical, and moisture</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Secure written pre-approval or proof-of-funds letter dated within 30 days</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Confirm current days-on-market and full price-change history from listing source</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Order preliminary title report — verify liens, easements, encroachments</div>
          <div class="nu-badge"><span class="nu-badge-num">7</span>Identify the seller's motivation — relocation, estate, downsizing, or financial</div>
        </div>
      </section>

      <!-- VALUATION FRAMEWORK -->
      <section class="nu-section">
        <div class="nu-section-title">Valuation <span>— Price Per Square Foot Framework</span></div>
        <div class="nu-section-rule"></div>
        <p>
          For a 7,098 sq ft residence, the decisive variable is price per square foot against neighborhood
          comparables. The table below sets a working framework that must be refreshed against live CMA data
          before the offer is finalized. These brackets establish the disciplined range Aaron will negotiate within.
        </p>
        <table class="valuation-table">
          <thead>
            <tr>
              <th>Valuation Basis</th>
              <th>$ / Sq Ft</th>
              <th>Implied Price (7,098 sq ft)</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Low comps (quick-sale floor)</td>
              <td class="num">$185</td>
              <td class="num">$1,313,130</td>
              <td>Opening bracket</td>
            </tr>
            <tr>
              <td>Median comps (fair market)</td>
              <td class="num">$225</td>
              <td class="num">$1,597,050</td>
              <td>Target close</td>
            </tr>
            <tr class="highlight">
              <td><strong>Aaron's negotiation target</strong></td>
              <td class="num">$210</td>
              <td class="num">$1,490,580</td>
              <td>Goal price</td>
            </tr>
            <tr>
              <td>High comps (asking ceiling)</td>
              <td class="num">$255</td>
              <td class="num">$1,809,990</td>
              <td>Walk-away line</td>
            </tr>
            <tr>
              <td>Premium outlier</td>
              <td class="num">$275+</td>
              <td class="num">$1,951,950+</td>
              <td>Do not cross</td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top:16px; font-size:0.88rem; color:#666;">
          All figures are framework placeholders built from size and market-segment logic only. Replace with
          live CMA and appraised values before any number is shared with the seller or their agent.
        </p>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section class="nu-section">
        <div class="nu-section-title">Negotiation <span>— Offer Ladder</span></div>
        <div class="nu-section-rule"></div>
        <p>Three-tier ladder anchors the opening, target, and walk-away. Aaron will not cross the red line.</p>
        <div class="ladder">
          <div class="ladder-step opening">
            <div class="ladder-tag">Opening Offer</div>
            <div class="ladder-price">$1,349,000</div>
            <div class="ladder-ppsf">≈ $190 / sq ft</div>
            <div class="ladder-note">
              Aggressive but defensible. Justified by pre-offer inspection findings, days-on-market, and any price-change history. Always submitted in writing with full terms.
            </div>
          </div>
          <div class="ladder-step target">
            <div class="ladder-tag">Target Close</div>
            <div class="ladder-price">$1,490,000</div>
            <div class="ladder-ppsf">≈ $210 / sq ft</div>
            <div class="ladder-note">
              The disciplined goal. Represents fair value with room for inspection credits or closing-cost contribution. This is where Aaron expects to land after one or two counter cycles.
            </div>
          </div>
          <div class="ladder-step walk">
            <div class="ladder-tag">Walk-Away Line</div>
            <div class="ladder-price">$1,595,000</div>
            <div class="ladder-ppsf">≈ $225 / sq ft</div>
            <div class="ladder-note">
              Hard ceiling. Above this number the capital better served elsewhere. Aaron disengages politely, confirms the ceiling in writing, and moves on without pursuing.
            </div>
          </div>
        </div>
      </section>

      <!-- LEVERAGE / RISK -->
      <section class="nu-section">
        <div class="nu-section-title">Leverage <span>&amp; Risk — Read the Table Before Each Round</span></div>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="col-card lev">
            <h4>Leverage in Aaron's Favor</h4>
            <ul>
              <li>Strong proof-of-funds letter and clean personal financial profile — a real, closable buyer.</li>
              <li>Flexible close date — Aaron can accommodate the seller's preferred timeline, which many luxury sellers value over a few thousand dollars.</li>
              <li>Willingness to waive or shorten inspection contingency in exchange for price concessions (only after a satisfactory pre-offer inspection).</li>
              <li>No home-sale contingency — Aaron is not chained to selling another property first.</li>
              <li>Luxury segment has wider bid-ask spreads and longer days-on-market than standard inventory.</li>
              <li>Written offer with earnest money demonstrates seriousness that verbal discussion cannot.</li>
            </ul>
          </div>
          <div class="col-card risk">
            <h4>Risks to Manage</h4>
            <ul>
              <li>Large-square-footage properties carry elevated maintenance, utility, and insurance cost; confirm annual carrying cost before committing.</li>
              <li>Roof, HVAC, and foundation on a 7,098 sq ft footprint can represent six-figure exposure if deferred — insist on full inspection.</li>
              <li>Luxury market appraisals can miss the contract price; ensure appraisal contingency is in place.</li>
              <li>Title surprises — easements, encroachments, or unreleased liens — are more common on estate properties; order title early.</li>
              <li>Emotional negotiation. Seller may have personal attachment. Aaron leads with respect and facts, never with pressure.</li>
              <li>Walking away costs nothing. Overpaying by 10% on a property this size costs $150K+.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-title">Execution <span>— 45-Day Timeline</span></div>
        <div class="nu-section-rule"></div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-day">Day 0–3 · Preparation</div>
            <div class="tl-title">Complete the seven-item prep checklist</div>
            <div class="tl-body">CMA ordered, financing letter in hand, pre-offer walkthrough scheduled, title pulled, seller motivation identified. No numbers shared yet.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 4–5 · Offer</div>
            <div class="tl-title">Submit written offer at the Opening tier</div>
            <div class="tl-body">$1,349,000 with clean terms: earnest money, 30-day close, standard contingencies, flexible occupancy. Delivered via licensed agent or attorney.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 6–10 · First Counter</div>
            <div class="tl-title">Receive and evaluate counter</div>
            <div class="tl-body">Hold one full business day before responding. Decide whether the gap is closable inside the walk-away line. Counter toward Target, not above it.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 11–14 · Second Counter</div>
            <div class="tl-title">Land at or below Target, or walk</div>
            <div class="tl-body">If the seller will not move below the walk-away line after two rounds, disengage politely. Confirm ceiling in writing. Do not chase.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 15–20 · Under Contract</div>
            <div class="tl-title">Execute purchase agreement, deposit earnest money</div>
            <div class="tl-body">Attorney reviews contract before signature. Earnest money deposited only after contract is fully executed and contingency periods are defined.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 21–35 · Due Diligence</div>
            <div class="tl-title">Full inspection, appraisal, title commitment</div>
            <div class="tl-body">Renegotiate credits for any material findings. Appraisal must support contract price or offer is adjusted accordingly.</div>
          </div>
          <div class="tl-item">
            <div class="tl-day">Day 36–45 · Close</div>
            <div class="tl-title">Final walkthrough, funding, recording</div>
            <div class="tl-body">Confirm property condition matches contract. Wire funds only to attorney- or title-verified account. Close and record.</div>
          </div>
        </div>
      </section>

      <!-- DEAL TERMS -->
      <section class="nu-section">
        <div class="nu-section-title">Deal Terms <span>— Non-Price Levers</span></div>
        <div class="nu-section-rule"></div>
        <p>Price is only one of the dials. Below are the terms Aaron uses to create value without raising the number.</p>
        <div class="terms-grid">
          <div class="term-card">
            <div class="term-name">Earnest Money</div>
            <div class="term-val">1% of purchase price, held by closing attorney. Enough to demonstrate seriousness, not enough to overexpose if the deal breaks.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Close Date</div>
            <div class="term-val">30 days from ratification, with 10-day extension option at Aaron's discretion. Flexibility framed as a gift to the seller.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Inspection Contingency</div>
            <div class="term-val">10-business-day inspection period. Right to request repairs, credits, or termination. Never waived blind on a 7,000+ sq ft residence.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Financing Contingency</div>
            <div class="term-val">21-day loan commitment window (or waived entirely if purchase is all-cash, which is a significant price-lowering lever).</div>
          </div>
          <div class="term-card">
            <div class="term-name">Appraisal Contingency</div>
            <div class="term-val">Retained. Price renegotiates down to appraised value if appraisal comes in low, or Aaron terminates with earnest money returned.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Occupancy / Possession</div>
            <div class="term-val">At close, or seller-occupied post-close rental if it secures a price concession. Never free post-close possession without compensation.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Closing Costs</div>
            <div class="term-val">Each party bears own. Seller concession toward closing costs is a fallback lever if seller will not move on price.</div>
          </div>
          <div class="term-card">
            <div class="term-name">Included Personal Property</div>
            <div class="term-val">All fixtures, appliances, window treatments, and any specifically-identified items listed in the contract exhibit.</div>
          </div>
        </div>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <div class="nu-section-title">Voice <span>— How Aaron Speaks in the Room</span></div>
        <div class="nu-section-rule"></div>
        <p>Direct, warm, confident. Never pushy, never apologetic. Leads with the ask.</p>

        <div class="script-card">
          <div class="script-label">Opening Approach to Seller or Listing Agent</div>
          <div class="script-quote">
            "I've reviewed the property and the neighborhood comps carefully, and I'm ready to make a strong,
            clean written offer with proof of funds. I'd like to understand the seller's priorities on timing
            and terms so the offer I submit respects what matters most to them. What would make this a good
            deal from their side?"
          </div>
        </div>

        <div class="script-card">
          <div class="script-label">Responding to a Counter That's Too High</div>
          <div class="script-quote">
            "I appreciate the response. My number is grounded in the comps, the inspection findings, and what
            this property can realistically appraise for. I'm not chasing price — I'm chasing a fair close.
            Here's where I can meet you, and here's what I need in return on terms."
          </div>
        </div>

        <div class="script-card">
          <div class="script-label">Walk-Away Moment — Professional and Clean</div>
          <div class="script-quote">
            "I'd love to make this work, and I respect where the seller is. But at that number the math doesn't
            hold for me. I'm going to step back here. If anything changes on the seller's side, my offer stands
            open for seven days at the figure I last put on the table. Either way, thank you for your time."
          </div>
        </div>

        <div class="script-card">
          <div class="script-label">After a Clean Inspection Surprise</div>
          <div class="script-quote">
            "The inspector flagged items that weren't visible at the walkthrough. I'm not walking from the deal
            — I'm asking that we share the cost the way a reasonable buyer and seller would. Here is the
            documentation, and here is what I'm requesting as a credit at close."
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <div class="nu-section-title">Next <span>— This Week's Action Set</span></div>
        <div class="nu-section-rule"></div>
        <div class="next-grid">
          <div class="next-card">
            <div class="next-num">1</div>
            <div class="next-title">Order Comparative Market Analysis</div>
            <div class="next-desc">Request five closed comps within one mile, 180 days. Turnaround target: 48 hours.</div>
          </div>
          <div class="next-card">
            <div class="next-num">2</div>
            <div class="next-title">Confirm Pre-Approval / Proof of Funds</div>
            <div class="next-desc">Dated within 30 days. PDF copy to closing attorney and Aaron's acquisition folder.</div>
          </div>
          <div class="next-card">
            <div class="next-num">3</div>
            <div class="next-title">Schedule Pre-Offer Inspection</div>
            <div class="next-desc">Roof, foundation, mechanical, and moisture focus. Written report inside one week.</div>
          </div>
          <div class="next-card">
            <div class="next-num">4</div>
            <div class="next-title">Engage Real-Estate Attorney</div>
            <div class="next-desc">Retain before offer is drafted. Contract review and closing in the same engagement.</div>
          </div>
          <div class="next-card">
            <div class="next-num">5</div>
            <div class="next-title">Pull Preliminary Title Report</div>
            <div class="next-desc">Confirm owner of record, liens, easements, and any unreleased encumbrances.</div>
          </div>
          <div class="next-card">
            <div class="next-num">6</div>
            <div class="next-title">Draft and Submit Written Offer</div>
            <div class="next-desc">At Opening tier ($1,349,000) with full terms, earnest money, and 10-day inspection window.</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="cta-box">
        <div>
          <div class="cta-heading">Ready to move on 4505 Buttewoods</div>
          <div class="cta-sub">
            Reach Aaron directly to coordinate the CMA, inspection scheduling, and attorney handoff.
            Offer package can be prepared and submitted within seven days of complete prep.
          </div>
        </div>
        <a class="nu-btn-primary" href="tel:2055001343">Call 205-500-1343</a>
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
  </footer>

</body>
</html>