<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Butterworth Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-success: #1B7F3A;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-eyebrow {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 2px;
      backdrop-filter: blur(4px);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .doc-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-classification {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 5px 14px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      border-radius: 2px;
      margin-bottom: 18px;
    }
    .doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .doc-title .accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.1rem;
      color: #5a5a6e;
      font-weight: 400;
      max-width: 780px;
      margin: 0 auto;
    }
    .doc-meta {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 28px;
      margin-top: 22px;
      font-size: 0.85rem;
      color: #6a6a7e;
    }
    .doc-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.72rem;
      display: block;
      margin-bottom: 2px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 6px;
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
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* HEADLINE NUMBER STRIP */
    .number-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 14px;
    }
    .num-cell {
      background: var(--nu-white);
      padding: 24px 20px;
      text-align: center;
    }
    .num-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6a6a7e;
      margin-bottom: 8px;
    }
    .num-value {
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
      letter-spacing: -0.01em;
    }
    .num-sub {
      font-size: 0.78rem;
      color: #6a6a7e;
      margin-top: 4px;
    }
    .num-cell.accent .num-value { color: var(--nu-navy); }
    .num-cell.warn .num-value { color: var(--nu-warning); }
    .num-cell.good .num-value { color: var(--nu-success); }

    /* CHEVRON BADGES */
    .chev-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .chev-badge .chev-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      border-radius: 50%;
      margin-right: 14px;
      font-size: 0.85rem;
      flex-shrink: 0;
    }

    /* CARDS */
    .card-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 22px;
    }
    .card-grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
    }
    .nu-card.cyan-top { border-top-color: var(--nu-cyan); }
    .nu-card.gold-top { border-top-color: var(--nu-accent-gold); }
    .nu-card.navy-top { border-top-color: var(--nu-navy); }
    .nu-card.warn-top { border-top-color: var(--nu-warning); }
    .nu-card.danger-top { border-top-color: var(--nu-danger); }
    .nu-card.success-top { border-top-color: var(--nu-success); }

    .card-eyebrow {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .card-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      line-height: 1.3;
    }
    .card-body { font-size: 0.94rem; color: var(--nu-body-text); }
    .card-body p { margin-bottom: 10px; }
    .card-body p:last-child { margin-bottom: 0; }
    .card-body ul { margin: 8px 0 8px 18px; }
    .card-body li { margin-bottom: 6px; }
    .card-body strong { color: var(--nu-dark-text); }

    /* DATA TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.92rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .data-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0e5c 100%);
      color: var(--nu-white);
    }
    .data-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .data-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:nth-child(even) td { background: #fafafc; }
    .data-table tr.row-highlight td {
      background: rgba(6, 208, 255, 0.08);
      font-weight: 700;
    }
    .data-table .num { text-align: right; font-variant-numeric: tabular-nums; }
    .data-table .center { text-align: center; }

    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .pill-blue { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .pill-cyan { background: rgba(6,208,255,0.18); color: #006d85; }
    .pill-gold { background: rgba(201,168,76,0.18); color: #8a7128; }
    .pill-green { background: rgba(27,127,58,0.14); color: var(--nu-success); }
    .pill-red { background: rgba(178,34,34,0.12); color: var(--nu-danger); }
    .pill-gray { background: var(--nu-medium-gray); color: #4a4a5e; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin: 22px 0;
    }
    .callout.warn {
      background: linear-gradient(135deg, #fff8e8 0%, #fef4dc 100%);
      border-left-color: var(--nu-warning);
    }
    .callout.danger {
      background: linear-gradient(135deg, #fdecec 0%, #fbe0e0 100%);
      border-left-color: var(--nu-danger);
    }
    .callout.success {
      background: linear-gradient(135deg, #e8f6ee 0%, #d8f0e2 100%);
      border-left-color: var(--nu-success);
    }
    .callout-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .callout-body { font-size: 0.94rem; color: var(--nu-body-text); }
    .callout-body p { margin-bottom: 8px; }
    .callout-body p:last-child { margin-bottom: 0; }

    /* OFFER LADDER */
    .ladder {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      margin-top: 8px;
    }
    .ladder-rung {
      display: grid;
      grid-template-columns: 90px 1fr 180px;
      gap: 18px;
      align-items: center;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
    }
    .ladder-rung.r1 { border-left-color: var(--nu-success); }
    .ladder-rung.r2 { border-left-color: var(--nu-cyan); }
    .ladder-rung.r3 { border-left-color: var(--nu-blue); }
    .ladder-rung.r4 { border-left-color: var(--nu-warning); }
    .ladder-rung.walk { border-left-color: var(--nu-danger); background: #fdf6f6; }

    .ladder-step {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6a6a7e;
    }
    .ladder-step strong {
      display: block;
      font-size: 1.6rem;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: -0.01em;
      margin-top: 2px;
    }
    .ladder-rung.r1 .ladder-step strong { color: var(--nu-success); }
    .ladder-rung.r4 .ladder-step strong { color: var(--nu-warning); }
    .ladder-rung.walk .ladder-step strong { color: var(--nu-danger); }

    .ladder-mid strong { color: var(--nu-dark-text); }
    .ladder-mid p { font-size: 0.9rem; color: var(--nu-body-text); margin-top: 4px; }

    .ladder-amt {
      text-align: right;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 12px 0 0 18px;
      padding-left: 28px;
      border-left: 3px solid var(--nu-cyan);
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -36px;
      top: 4px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .timeline-day {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .timeline-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* SCRIPT BLOCK */
    .script-block {
      background: #fafafc;
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 16px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .script-cue {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }

    /* TWO-COL LIST */
    .two-col-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .two-col-list h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .two-col-list h4.opp { border-bottom-color: var(--nu-success); }
    .two-col-list h4.risk { border-bottom-color: var(--nu-danger); }
    .two-col-list ul { margin-left: 20px; }
    .two-col-list li { margin-bottom: 8px; font-size: 0.92rem; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist h4 {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .checklist ul { list-style: none; }
    .checklist li {
      position: relative;
      padding: 10px 0 10px 32px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 40px;
      text-align: center;
      font-family: var(--font-primary);
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, transparent 0%, var(--nu-cyan) 50%, transparent 100%);
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .ladder-rung { grid-template-columns: 80px 1fr; }
      .ladder-amt { grid-column: 1 / -1; text-align: left; padding-top: 8px; border-top: 1px dashed var(--nu-medium-gray); }
      .two-col-list { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 60px; }
      .doc-title { font-size: 1.7rem; }
      .chev-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .data-table { font-size: 0.84rem; }
      .data-table th, .data-table td { padding: 10px 10px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .data-table, .callout, .ladder-rung { box-shadow: none; break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-eyebrow">Confidential — Internal Negotiation Strategy</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="doc-title-block">
        <div class="doc-classification">Confidential — For Aaron's Eyes Only</div>
        <h1 class="doc-title">Negotiation Strategy — <span class="accent">$900,000 Offer</span><br>4505 Butterworth Estate</h1>
        <p class="doc-subtitle">Structured plan, walk-away math, and counter-offer ladder for the 7,098 sq ft estate acquisition. Designed so you can negotiate from confidence, not from pressure.</p>
        <div class="doc-meta">
          <div><strong>Prepared</strong>2026-04-20</div>
          <div><strong>Subject Property</strong>4505 Butterworth — 7,098 sq ft</div>
          <div><strong>Opening Offer</strong>$900,000</div>
          <div><strong>Owner</strong>Aaron C. Norris</div>
        </div>
      </div>

      <!-- SECTION 1: AT A GLANCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Strategy</span> <span class="rest">at a Glance</span></h2>
        <div class="nu-section-rule"></div>

        <div class="number-strip">
          <div class="num-cell">
            <div class="num-label">Opening Offer</div>
            <div class="num-value">$900,000</div>
            <div class="num-sub">Anchored low, room to move</div>
          </div>
          <div class="num-cell accent">
            <div class="num-label">Target Close</div>
            <div class="num-value">$945,000</div>
            <div class="num-sub">Midpoint — most likely settle</div>
          </div>
          <div class="num-cell warn">
            <div class="num-label">Walk-Away Ceiling</div>
            <div class="num-value">$985,000</div>
            <div class="num-sub">Hard line — do not exceed</div>
          </div>
          <div class="num-cell good">
            <div class="num-label">Price / Sq Ft Ceiling</div>
            <div class="num-value">$138.77</div>
            <div class="num-sub">$985,000 ÷ 7,098 sq ft</div>
          </div>
        </div>

        <div class="callout">
          <div class="callout-title">The One-Line Strategy</div>
          <div class="callout-body">
            <p>Open at $900,000 with a clean, fast-close, cash-friendly offer. Move in three small, declining steps. Refuse to chase if the seller anchors above $1,000,000. The leverage is your willingness to walk — protect it from the first conversation forward.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 2: ANCHORS & POSITION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Position</span> <span class="rest">& Anchors</span></h2>
        <div class="nu-section-rule"></div>

        <div class="card-grid-2">
          <div class="nu-card">
            <div class="card-eyebrow">Your Opening Position</div>
            <div class="card-title">$900,000 — Strong, Clean, Defendable</div>
            <div class="card-body">
              <p>This number is <strong>not</strong> framed as "below asking." It's framed as the value of the home in current condition with the terms you bring (speed, certainty, no contingencies you can avoid).</p>
              <ul>
                <li><strong>Cash or cash-equivalent</strong> close — biggest lever you own</li>
                <li><strong>14–21 day close</strong> if seller is motivated by timing</li>
                <li><strong>As-is</strong> with inspection-for-information only (not for re-trade)</li>
                <li><strong>No contingency creep</strong> — limit to financing (if used) and clean title</li>
              </ul>
            </div>
          </div>

          <div class="nu-card cyan-top">
            <div class="card-eyebrow">Seller's Likely Anchor</div>
            <div class="card-title">Expect a Counter Between $975K – $1.05M</div>
            <div class="card-body">
              <p>Sellers of estate-class homes anchor high to defend "what they have in it." Don't argue the anchor — <strong>reframe</strong> with comparable price-per-square-foot, days on market, and your terms.</p>
              <ul>
                <li>If counter ≤ $975K — you're ahead of pace, move slowly</li>
                <li>If counter $976K–$1.05M — normal, this is the negotiation zone</li>
                <li>If counter > $1.05M — seller is not yet motivated; pause 7–10 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: COUNTER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Counter-Offer</span> <span class="rest">Ladder</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px; color: #5a5a6e;">Move in <strong>declining increments</strong> ($25K → $15K → $10K → $0). Each move is smaller than the last — this signals you are nearing your ceiling and conditions further give.</p>

        <div class="ladder">
          <div class="ladder-rung r1">
            <div class="ladder-step">Step 1 <strong>OPEN</strong></div>
            <div class="ladder-mid">
              <strong>Initial Written Offer — $900,000</strong>
              <p>Cash or cash-equivalent. 14-day inspection (information only). 21-day close. Earnest money $10K.</p>
            </div>
            <div class="ladder-amt">$900,000</div>
          </div>

          <div class="ladder-rung r2">
            <div class="ladder-step">Step 2 <strong>+$25K</strong></div>
            <div class="ladder-mid">
              <strong>First Counter — $925,000</strong>
              <p>Triggered only if seller responds with realistic counter (≤ $975K). Ask for one concession in return: home warranty, retained fixture, or a $5K closing credit.</p>
            </div>
            <div class="ladder-amt">$925,000</div>
          </div>

          <div class="ladder-rung r3">
            <div class="ladder-step">Step 3 <strong>+$20K</strong></div>
            <div class="ladder-mid">
              <strong>Mid-Negotiation Move — $945,000</strong>
              <p>This is your <em>most likely settlement number</em>. Pair with a closing-date concession the seller wants. Frame as "this is where the math works for me."</p>
            </div>
            <div class="ladder-amt">$945,000</div>
          </div>

          <div class="ladder-rung r4">
            <div class="ladder-step">Step 4 <strong>+$25K</strong></div>
            <div class="ladder-mid">
              <strong>Final Position — $970,000</strong>
              <p>Best-and-final, in writing, with a 48-hour expiration. Only used if seller is at $985K–$1.0M and clearly engaged. No further movement after this.</p>
            </div>
            <div class="ladder-amt">$970,000</div>
          </div>

          <div class="ladder-rung walk">
            <div class="ladder-step">Step 5 <strong>STOP</strong></div>
            <div class="ladder-mid">
              <strong>Hard Walk-Away — $985,000 Ceiling</strong>
              <p>If the seller will not meet at or below $985,000, walk. Send a polite "leave the door open" letter. Most deals that walk at this stage return within 45 days at the buyer's number.</p>
            </div>
            <div class="ladder-amt">$985,000</div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: NON-PRICE LEVERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Non-Price</span> <span class="rest">Levers (Use to Hold the Number)</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 18px; color: #5a5a6e;">When the seller pushes for more dollars, trade <strong>terms</strong> instead. Every term below is worth real money to the right seller — and costs you little or nothing.</p>

        <div class="card-grid-3">
          <div class="nu-card">
            <div class="card-eyebrow">Lever 01</div>
            <div class="card-title">Speed of Close</div>
            <div class="card-body">14 or 21 days vs. typical 45–60. Worth $5K–$15K to a seller who has already moved or carries dual mortgages.</div>
          </div>
          <div class="nu-card cyan-top">
            <div class="card-eyebrow">Lever 02</div>
            <div class="card-title">Certainty of Close</div>
            <div class="card-body">Cash or proof-of-funds. No financing contingency. Larger earnest money ($25K) released early. Worth real dollars to a tired seller.</div>
          </div>
          <div class="nu-card gold-top">
            <div class="card-eyebrow">Lever 03</div>
            <div class="card-title">As-Is Acceptance</div>
            <div class="card-body">Inspect for information only — no repair list, no re-trade. Seller saves $8K–$25K of typical negotiated repairs.</div>
          </div>
          <div class="nu-card">
            <div class="card-eyebrow">Lever 04</div>
            <div class="card-title">Post-Close Possession</div>
            <div class="card-body">Offer 14–30 days rent-back at $0 or $1. Lets seller move at their own pace — often more valuable than $10K in price.</div>
          </div>
          <div class="nu-card cyan-top">
            <div class="card-eyebrow">Lever 05</div>
            <div class="card-title">Earnest Money Posture</div>
            <div class="card-body">Offer $25K earnest, $10K released non-refundable after inspection. Demonstrates commitment without exposure.</div>
          </div>
          <div class="nu-card gold-top">
            <div class="card-eyebrow">Lever 06</div>
            <div class="card-title">Personal Property / Fixtures</div>
            <div class="card-body">Let the seller keep items they want (chandelier, appliance, lawn equipment). Costs $0, saves face on the price line.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: COMPS & MATH -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Math — Defend the Number</span></h2>
        <div class="nu-section-rule"></div>
        <p style="margin-bottom: 16px; color: #5a5a6e;">Use these reference points in writing — never argue them verbally. A one-page written rationale makes a $900,000 offer feel <em>researched</em>, not <em>cheap</em>.</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Reference Point</th>
              <th class="num">Total Price</th>
              <th class="num">$ / Sq Ft</th>
              <th class="center">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-highlight">
              <td><strong>Your Opening Offer</strong></td>
              <td class="num">$900,000</td>
              <td class="num">$126.80</td>
              <td class="center"><span class="pill pill-blue">Anchor</span></td>
            </tr>
            <tr>
              <td>Target Settlement (midpoint)</td>
              <td class="num">$945,000</td>
              <td class="num">$133.14</td>
              <td class="center"><span class="pill pill-cyan">Goal</span></td>
            </tr>
            <tr>
              <td>Final / Best-and-Final</td>
              <td class="num">$970,000</td>
              <td class="num">$136.66</td>
              <td class="center"><span class="pill pill-gold">Stretch</span></td>
            </tr>
            <tr class="row-highlight">
              <td><strong>Walk-Away Ceiling</strong></td>
              <td class="num">$985,000</td>
              <td class="num">$138.77</td>
              <td class="center"><span class="pill pill-red">Stop</span></td>
            </tr>
            <tr>
              <td>$1,000,000 — Symbolic Round Number</td>
              <td class="num">$1,000,000</td>
              <td class="num">$140.89</td>
              <td class="center"><span class="pill pill-gray">Avoid</span></td>
            </tr>
            <tr>
              <td>$1,065,000 — Typical Estate-Class Counter</td>
              <td class="num">$1,065,000</td>
              <td class="num">$150.04</td>
              <td class="center"><span class="pill pill-gray">Reject</span></td>
            </tr>
          </tbody>
        </table>

        <div class="callout warn" style="margin-top: 22px;">
          <div class="callout-title">Why $985,000 Is the Hard Ceiling</div>
          <div class="callout-body">
            <p>At $138.77 / sq ft you are buying square footage at a defensible discount to estate-class comps and leaving room for closing costs, immediate repairs, and any furnishing or grounds investment after the deal. Above $985,000 the math compresses the margin you need to operate the property without strain — and the deal stops working in your favor.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6: TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Timeline</span></h2>
        <div class="nu-section-rule"></div>

        <div class="card-grid-2">
          <div>
            <div class="chev-badge"><span class="chev-num">1</span>14-Day Negotiation Window</div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-day">Day 0 — Today</div>
                <div class="timeline-title">Submit Written $900,000 Offer</div>
                <div class="timeline-detail">Clean cover letter. Proof of funds attached. 5-day expiration. No verbal pre-discussion of price.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-day">Day 2–4</div>
                <div class="timeline-title">Seller Responds</div>
                <div class="timeline-detail">Receive counter. Acknowledge same day. Do not counter the same day — sleep on it once.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-day">Day 5</div>
                <div class="timeline-title">First Counter — Move to $925,000</div>
                <div class="timeline-detail">Pair with one term concession from seller. Re-state speed and certainty advantages in writing.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-day">Day 8</div>
                <div class="timeline-title">Mid Move — $945,000</div>
                <div class="timeline-detail">Frame as "this is where it works for me." Ask one direct closing question: "If we land here, can we open escrow Monday?"</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-day">Day 12</div>
                <div class="timeline-title">Best-and-Final — $970,000</div>
                <div class="timeline-detail">In writing. 48-hour expiration. No emotion in delivery. This is the last move on the ladder.</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-day">Day 14</div>
                <div class="timeline-title">Decision Point — Sign or Walk</div>
                <div class="timeline-detail">If at or under $985,000: sign. If above: send polite walk-away letter, leave the door open.</div>
              </div>
            </div>
          </div>

          <div>
            <div class="chev-badge"><span class="chev-num">2</span>Decision Tree by Seller Response</div>

            <div class="callout success">
              <div class="callout-title">Seller Counters at $950,000 or Less</div>
              <div class="callout-body"><p><strong>Move:</strong> Counter at $930K. You're already inside the target zone. Slow the pace; let seller chase the close.</p></div>
            </div>

            <div class="callout">
              <div class="callout-title">Seller Counters $951,000 – $1,000,000</div>
              <div class="callout-body"><p><strong>Move:</strong> Standard ladder ($925K → $945K → $970K). This is the expected fairway.</p></div>
            </div>

            <div class="callout warn">
              <div class="callout-title">Seller Counters $1,001,000 – $1,050,000</div>
              <div class="callout-body"><p><strong>Move:</strong> Hold at $925K. Add a written rationale page. Send. Wait 5 days. Often the second counter drops materially.</p></div>
            </div>

            <div class="callout danger">
              <div class="callout-title">Seller Counters Above $1,050,000 or Refuses to Move</div>
              <div class="callout-body"><p><strong>Move:</strong> Politely withdraw with a 30-day standing offer at $925K. Walk fully. Seller is not motivated yet — time is your tool.</p></div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: TALK TRACKS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Talk</span> <span class="rest">Tracks — What to Say</span></h2>
        <div class="nu-section-rule"></div>

        <div class="script-block">
          <span class="script-cue">Opening — Delivering the $900,000 Offer</span>
          "I've put together a clean offer at $900,000. It's cash-friendly, a fast close, and as-is so we don't get stuck in a repair conversation later. The number reflects the home's current condition, the comparable square-footage in the area, and the certainty I'm bringing to the table. I want this to work for both of us — take a day with it and let me know."
        </div>

        <div class="script-block">
          <span class="script-cue">When Seller Pushes Back on Price</span>
          "I hear you, and I respect what you have in the home. The reality on my side is the math has to work in current condition, with what I'll need to do after close. I'd rather give on terms than on the number — talk to me about timing, possession, or what you want to take with you. I have room to move on those."
        </div>

        <div class="script-block">
          <span class="script-cue">When Seller Anchors Above $1,000,000</span>
          "That number is outside what I can make work. I'm not going to chase it — that wouldn't be fair to either of us. My offer at $900,000 stands for the next 30 days. If you reach a point where it's the right move, my number is on the cover sheet."
        </div>

        <div class="script-block">
          <span class="script-cue">Closing the Deal at $945,000 (Target)</span>
          "$945,000 is where this works for me. If we land there, I'll open escrow Monday, earnest is wired the same day, and we're at the closing table inside three weeks. Do we have a deal?"
        </div>

        <div class="script-block">
          <span class="script-cue">Walk-Away Letter (Polite, Door-Open)</span>
          "It's clear we aren't aligned on price today, and I respect your position. My offer at $925,000 will stay on the table for the next 30 days with no changes to the terms. If circumstances shift, please reach out directly — there's no need to start over. I appreciate the time you've given this."
        </div>
      </section>

      <!-- SECTION 8: OPP / RISK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">Helps You / What Hurts You</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col-list">
          <div>
            <h4 class="opp">Leverage Working in Your Favor</h4>
            <ul>
              <li><strong>Cash or cash-equivalent</strong> — eliminates the seller's biggest fear (financing fall-through)</li>
              <li><strong>You can walk</strong> — this is not your only opportunity, and it must show in your posture</li>
              <li><strong>Speed</strong> — you can close in 14–21 days, not 45–60</li>
              <li><strong>Clean offer</strong> — no contingency stack, no re-trade, no drama</li>
              <li><strong>Days on market</strong> — every additional week of listing strengthens your position</li>
              <li><strong>Estate-class homes</strong> have a thin buyer pool — most sellers know this internally</li>
            </ul>
          </div>
          <div>
            <h4 class="risk">Risks to Manage</h4>
            <ul>
              <li><strong>Anchoring on the round number</strong> — $1.0M is a magnet; resist crossing it</li>
              <li><strong>Verbal commitments</strong> — never commit to a price verbally; everything in writing</li>
              <li><strong>Inspection re-trade temptation</strong> — you bought "as-is"; honor it unless something material is hidden</li>
              <li><strong>Emotional attachment</strong> to the property — drives buyers above their ceiling every time</li>
              <li><strong>Splitting the difference</strong> — sounds fair, often costs $20K–$40K of your margin</li>
              <li><strong>Closing-cost creep</strong> — title, transfer, prorations can add 1.5–2.0% if not capped</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 9: CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Pre-Negotiation</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <div class="checklist">
          <h4>Complete Before Submitting the $900,000 Offer</h4>
          <ul>
            <li>Proof-of-funds letter prepared and dated within 30 days</li>
            <li>Earnest money source confirmed and ready to wire same-day</li>
            <li>Title company / closing attorney identified and on standby</li>
            <li>Inspector lined up — can be on-site within 5 days of acceptance</li>
            <li>Insurance quote in hand (especially for an estate-class square footage)</li>
            <li>Written offer letter drafted with cover rationale (terms-first, price-second)</li>
            <li>Walk-away ceiling ($985,000) committed to on paper — and honored</li>
            <li>Counter ladder ($925K → $945K → $970K) written down before first conversation</li>
            <li>Decision rule for "what we walk on" beyond price (seller delays, term creep, hidden material defect)</li>
            <li>Quiet contingency plan — alternate property or alternate use of capital identified, so walking is real</li>
          </ul>
        </div>
      </section>

      <!-- FINAL CALLOUT -->
      <section class="nu-section">
        <div class="callout success">
          <div class="callout-title">The Discipline That Wins This Deal</div>
          <div class="callout-body">
            <p>Open at $900,000. Move in declining steps. Trade terms before dollars. Settle at or under $945,000 if possible, $985,000 absolute maximum. Walk politely if the seller refuses to meet you — and let time do the work.</p>
            <p>You are negotiating from a position of strength: cash, certainty, and the genuine ability to walk. Protect that posture from the first conversation forward, and the price comes to you.</p>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential Negotiation Strategy — 4505 Butterworth Estate &nbsp;·&nbsp; Prepared 2026-04-20 &nbsp;·&nbsp; For Internal Use Only
    </div>
  </footer>

</body>
</html>