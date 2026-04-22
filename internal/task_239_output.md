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
      --nu-success: #2D7A3E;
      --nu-warning: #C9750C;
      --nu-danger: #B8252F;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-document-tag {
      display: inline-block;
      margin-top: 18px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-cyan);
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      font-weight: 700;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* DOCUMENT META */
    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 50px;
      border-radius: 0 6px 6px 0;
      overflow: hidden;
    }
    .doc-meta-item {
      padding: 18px 24px;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .doc-meta-item:last-child { border-right: none; }
    .doc-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .doc-meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.85rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 4px;
      background: var(--nu-cyan);
      margin-bottom: 28px;
      border-radius: 2px;
    }
    .nu-section { margin-bottom: 56px; }

    /* PROPERTY HERO */
    .property-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 8px 32px rgba(0,0,51,0.18);
    }
    .property-hero-left {
      padding: 40px;
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .property-hero-right {
      padding: 40px;
      background: rgba(0,0,0,0.15);
    }
    .property-address-label {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .property-address {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-white);
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .property-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-top: 24px;
    }
    .property-stat {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .property-stat-num {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1;
    }
    .property-stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      color: rgba(255,255,255,0.75);
      text-transform: uppercase;
      margin-top: 4px;
      font-weight: 700;
    }
    .price-display {
      text-align: center;
    }
    .price-display-label {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .price-target {
      font-size: 2.6rem;
      font-weight: 900;
      color: var(--nu-white);
      letter-spacing: -0.01em;
      margin-bottom: 6px;
    }
    .price-context {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.8);
      margin-bottom: 20px;
    }
    .price-divider {
      height: 1px;
      background: rgba(255,255,255,0.2);
      margin: 20px 0;
    }
    .price-secondary {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      margin-bottom: 8px;
      color: rgba(255,255,255,0.85);
    }
    .price-secondary strong { color: var(--nu-white); }

    /* EXEC SUMMARY */
    .exec-summary {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 32px 36px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 16px;
    }
    .exec-summary h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .exec-summary p {
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 12px;
    }
    .exec-summary p:last-child { margin-bottom: 0; }

    /* RATIONALE GRID */
    .rationale-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .rationale-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      border-top: 4px solid var(--nu-blue);
    }
    .rationale-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .rationale-card-icon {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.2rem;
    }
    .rationale-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .rationale-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* COMPARABLES TABLE */
    .comp-table-wrap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .comp-table {
      width: 100%;
      border-collapse: collapse;
    }
    .comp-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .comp-table th {
      padding: 14px 16px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .comp-table th.num, .comp-table td.num { text-align: right; }
    .comp-table tbody tr {
      border-bottom: 1px solid var(--nu-medium-gray);
      transition: background 0.15s ease;
    }
    .comp-table tbody tr:hover { background: var(--nu-light-gray); }
    .comp-table tbody tr.subject {
      background: #fff8e8;
      font-weight: 700;
    }
    .comp-table tbody tr.subject:hover { background: #fff3d6; }
    .comp-table td {
      padding: 14px 16px;
      font-size: 0.9rem;
      color: var(--nu-dark-text);
    }
    .comp-table tfoot {
      background: var(--nu-light-gray);
      font-weight: 900;
    }
    .comp-table tfoot td {
      padding: 14px 16px;
      font-size: 0.92rem;
      color: var(--nu-blue);
      border-top: 2px solid var(--nu-blue);
    }

    /* NEGOTIATION LADDER */
    .ladder-rungs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .ladder-rung {
      padding: 28px 24px;
      text-align: center;
      color: var(--nu-white);
      position: relative;
    }
    .rung-1 { background: linear-gradient(135deg, #2D7A3E 0%, #45a05a 100%); }
    .rung-2 { background: linear-gradient(135deg, #C9750C 0%, #e89422 100%); }
    .rung-3 { background: linear-gradient(135deg, #B8252F 0%, #d63848 100%); }
    .rung-label {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0.95;
      margin-bottom: 8px;
    }
    .rung-title {
      font-size: 1.2rem;
      font-weight: 900;
      margin-bottom: 12px;
    }
    .rung-amount {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }
    .rung-detail {
      font-size: 0.82rem;
      opacity: 0.9;
      line-height: 1.5;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 8px; bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 28px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -34px; top: 4px;
      width: 18px; height: 18px;
      background: var(--nu-white);
      border: 4px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .timeline-phase {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      color: var(--nu-cyan);
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline-title {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* DD CHECKLIST */
    .dd-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 22px;
    }
    .dd-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
    }
    .dd-card h4 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .dd-list {
      list-style: none;
      padding: 0;
    }
    .dd-list li {
      padding: 8px 0 8px 26px;
      position: relative;
      font-size: 0.9rem;
      color: var(--nu-dark-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .dd-list li:last-child { border-bottom: none; }
    .dd-list li::before {
      content: '☐';
      position: absolute;
      left: 0; top: 8px;
      color: var(--nu-blue);
      font-size: 1.05rem;
      font-weight: 700;
    }

    /* RISK MATRIX */
    .risk-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .risk-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .risk-table td {
      padding: 14px 16px;
      font-size: 0.9rem;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
      vertical-align: top;
    }
    .risk-table tr:last-child td { border-bottom: none; }
    .risk-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .risk-high { background: #fde8ea; color: var(--nu-danger); }
    .risk-med { background: #fdf3e1; color: var(--nu-warning); }
    .risk-low { background: #e7f3ea; color: var(--nu-success); }

    /* SCRIPT BOX */
    .script-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
    }
    .script-box::before {
      content: '"';
      position: absolute;
      top: -30px; right: 30px;
      font-size: 12rem;
      color: rgba(255,255,255,0.07);
      font-family: Georgia, serif;
      line-height: 1;
    }
    .script-box h4 {
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .script-box p {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.95);
      margin-bottom: 12px;
      position: relative;
      z-index: 2;
    }
    .script-box p:last-child { margin-bottom: 0; }
    .script-box em {
      color: var(--nu-cyan);
      font-style: normal;
      font-weight: 700;
    }

    /* ACTION CARD */
    .action-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,51,0.12);
      margin-bottom: 16px;
    }
    .action-step {
      background: var(--nu-white);
      padding: 24px;
      border-right: 1px solid var(--nu-medium-gray);
      position: relative;
    }
    .action-step:last-child { border-right: none; }
    .action-num {
      width: 32px; height: 32px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 12px;
    }
    .action-step h5 {
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .action-step p {
      font-size: 0.85rem;
      color: var(--nu-body-text);
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
      font-size: 1.5rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }
    .nu-footer-name {
      font-weight: 900;
      color: var(--nu-white);
      font-size: 1.05rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .nu-footer-title {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-confidential {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      color: rgba(255,255,255,0.55);
      text-transform: uppercase;
      font-weight: 700;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .property-hero { grid-template-columns: 1fr; }
      .property-hero-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .ladder-rungs { grid-template-columns: 1fr; }
      .doc-meta { grid-template-columns: 1fr 1fr; }
      .doc-meta-item { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 24px 30px; }
      .nu-section-title { font-size: 1.5rem; }
      .property-address { font-size: 1.35rem; }
      .price-target { font-size: 2rem; }
      .property-stats { grid-template-columns: 1fr; }
      .doc-meta { grid-template-columns: 1fr; }
      .comp-table { font-size: 0.85rem; }
      .comp-table th, .comp-table td { padding: 10px 12px; }
      .action-step { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .rationale-card, .dd-card, .comp-table-wrap { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-document-tag">Real Estate Acquisition Brief</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <div class="doc-meta-label">Document Type</div>
          <div class="doc-meta-value">Negotiation Brief</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Subject Property</div>
          <div class="doc-meta-value">4505 Buttewoods</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Prepared For</div>
          <div class="doc-meta-value">Aaron C. Norris</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Date Prepared</div>
          <div class="doc-meta-value">April 21, 2026</div>
        </div>
        <div class="doc-meta-item">
          <div class="doc-meta-label">Status</div>
          <div class="doc-meta-value">Pre-Offer Planning</div>
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <section class="property-hero">
        <div class="property-hero-left">
          <div class="property-address-label">Subject Property</div>
          <div class="property-address">4505 Buttewoods<br>Estate Residence</div>
          <div style="font-size: 0.95rem; color: rgba(255,255,255,0.85); margin-bottom: 8px;">
            Single-family executive estate, gated/luxury submarket. Long-hold residence and brand asset for a CEO running a 20-state utility distribution business from a home-office posture.
          </div>
          <div class="property-stats">
            <div class="property-stat">
              <div class="property-stat-num">7,098</div>
              <div class="property-stat-label">Square Feet</div>
            </div>
            <div class="property-stat">
              <div class="property-stat-num">Estate</div>
              <div class="property-stat-label">Property Class</div>
            </div>
            <div class="property-stat">
              <div class="property-stat-num">Long-Hold</div>
              <div class="property-stat-label">Investment Horizon</div>
            </div>
            <div class="property-stat">
              <div class="property-stat-num">Primary</div>
              <div class="property-stat-label">Use Case</div>
            </div>
          </div>
        </div>
        <div class="property-hero-right">
          <div class="price-display">
            <div class="price-display-label">Target Acquisition Price</div>
            <div class="price-target">$1,950,000</div>
            <div class="price-context">Walk-away ceiling for the deal to remain accretive against comparable estate inventory in the submarket.</div>
            <div class="price-divider"></div>
            <div class="price-secondary">
              <span>Opening Offer</span><strong>$1,750,000</strong>
            </div>
            <div class="price-secondary">
              <span>Most-Likely Close</span><strong>$1,875,000</strong>
            </div>
            <div class="price-secondary">
              <span>Implied $/Sq Ft (Close)</span><strong>$264 / sq ft</strong>
            </div>
            <div class="price-secondary">
              <span>Earnest Money</span><strong>$25,000</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Executive <span>Summary</span></h2>
        <div class="nu-section-rule"></div>
        <div class="exec-summary">
          <h3>The Position</h3>
          <p>The 7,098 sq ft estate at 4505 Buttewoods is being negotiated as a long-term primary residence and corporate asset for Norris Utilities®. The acquisition supports three concurrent objectives: (1) anchor a stable home base for a 4 AM-start CEO operating across 20+ states, (2) provide office and reception space appropriate for utility-industry executives visiting Birmingham, and (3) capture a defensible long-hold real estate position at a per-square-foot basis below replacement cost.</p>
          <p>The negotiation strategy is patient, price-disciplined, and contingency-protected. Open at $1.75M; expect to close in the $1.85M–$1.90M zone; walk away above $1.95M. All offers must be tied to a clean inspection contingency, a full title commitment review, and confirmation that no adverse easements, deed restrictions, or HOA covenants conflict with discreet home-office use.</p>
          <p>Aaron retains full negotiating authority. Caroline Butler may schedule showings, request documentation, and route paperwork; she is not authorized to convey price or terms. Counsel and lender of record to be confirmed at intent-to-offer stage.</p>
        </div>
      </section>

      <!-- STRATEGIC RATIONALE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Strategic <span>Rationale</span></h2>
        <div class="nu-section-rule"></div>
        <div class="rationale-grid">
          <div class="rationale-card">
            <div class="rationale-card-icon">1</div>
            <h4>Operational Fit</h4>
            <p>7,098 sq ft accommodates a dedicated home office, conference room, secure document storage, and private guest quarters for visiting principals (Boss Products, Samson Rope, Skylift, BSS).</p>
          </div>
          <div class="rationale-card">
            <div class="rationale-card-icon">2</div>
            <h4>Brand Stature</h4>
            <p>An estate-class residence reinforces the Norris Utilities® third-generation legacy positioning when hosting utility executives, dealer principals, and lender relationships.</p>
          </div>
          <div class="rationale-card">
            <div class="rationale-card-icon">3</div>
            <h4>Long-Hold Asset</h4>
            <p>Estate-tier inventory in this submarket is supply-constrained. A disciplined entry price builds equity through hold rather than turnover and protects against market softness.</p>
          </div>
          <div class="rationale-card">
            <div class="rationale-card-icon">4</div>
            <h4>Tax & Entity Strategy</h4>
            <p>Home-office allocation, mortgage interest treatment, and potential entity-held structure to be modeled by Renasant Bank (Patrick Lavette) and tax counsel before final offer.</p>
          </div>
          <div class="rationale-card">
            <div class="rationale-card-icon">5</div>
            <h4>Family Continuity</h4>
            <p>A residence with the footprint and quality to remain the family seat across decades aligns with Aaron's "A Legacy of Commitment®" operating ethos and multi-generational planning.</p>
          </div>
          <div class="rationale-card">
            <div class="rationale-card-icon">6</div>
            <h4>Birmingham Anchor</h4>
            <p>Proximity to existing Inverness Plaza office and core relationships keeps Aaron close to the Birmingham operating hub while minimizing day-to-day commute friction.</p>
          </div>
        </div>
      </section>

      <!-- COMPARABLES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Comparable <span>Sales — Working Set</span></h2>
        <div class="nu-section-rule"></div>
        <div class="comp-table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th>Property</th>
                <th class="num">Sq Ft</th>
                <th class="num">Sale Price</th>
                <th class="num">$ / Sq Ft</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr class="subject">
                <td>4505 Buttewoods (Subject)</td>
                <td class="num">7,098</td>
                <td class="num">Target $1,875,000</td>
                <td class="num">$264</td>
                <td>Most-likely close midpoint</td>
              </tr>
              <tr>
                <td>Comp A — Same submarket, estate</td>
                <td class="num">6,840</td>
                <td class="num">$1,795,000</td>
                <td class="num">$262</td>
                <td>To confirm via MLS pull</td>
              </tr>
              <tr>
                <td>Comp B — Adjacent street, larger lot</td>
                <td class="num">7,250</td>
                <td class="num">$1,995,000</td>
                <td class="num">$275</td>
                <td>To confirm via MLS pull</td>
              </tr>
              <tr>
                <td>Comp C — Smaller, recent reno</td>
                <td class="num">5,920</td>
                <td class="num">$1,640,000</td>
                <td class="num">$277</td>
                <td>To confirm via MLS pull</td>
              </tr>
              <tr>
                <td>Comp D — Larger, older finishes</td>
                <td class="num">7,610</td>
                <td class="num">$1,925,000</td>
                <td class="num">$253</td>
                <td>To confirm via MLS pull</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Working Average</td>
                <td class="num">6,905</td>
                <td class="num">$1,838,750</td>
                <td class="num">$267</td>
                <td>Pending verified comp pull</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p style="margin-top: 14px; font-size: 0.85rem; color: var(--nu-body-text); font-style: italic;">
          Comparable values are working placeholders pending a verified MLS pull from the buyer's broker. Negotiation must not be opened until at least three closed comparables within twelve months are documented and reviewed by Aaron.
        </p>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Ladder — Walk Discipline</span></h2>
        <div class="nu-section-rule"></div>
        <div class="ladder-rungs">
          <div class="ladder-rung rung-1">
            <div class="rung-label">Rung 1 — Opening</div>
            <div class="rung-title">Anchor Low</div>
            <div class="rung-amount">$1,750,000</div>
            <div class="rung-detail">Strong earnest, fast inspection, conventional financing pre-approval letter attached. Frames the conversation against verified comps near $260/sq ft.</div>
          </div>
          <div class="ladder-rung rung-2">
            <div class="rung-label">Rung 2 — Most-Likely Close</div>
            <div class="rung-title">Settle Zone</div>
            <div class="rung-amount">$1,875,000</div>
            <div class="rung-detail">Move here only after seller counter, second walk-through, and inspection items priced. Hold seller responsible for any deferred maintenance found.</div>
          </div>
          <div class="ladder-rung rung-3">
            <div class="rung-label">Rung 3 — Walk-Away</div>
            <div class="rung-title">Hard Ceiling</div>
            <div class="rung-amount">$1,950,000</div>
            <div class="rung-detail">Only justifiable with verified comps above $275/sq ft, no inspection issues, and clear long-term value. Above this number, the deal is dead.</div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
        <div class="nu-section-rule"></div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-phase">Phase 1 — Days 1 to 5</div>
            <div class="timeline-title">Diligence Stack Assembly</div>
            <div class="timeline-desc">Pull comparable sales, order title pre-search, line up inspector and structural engineer, obtain pre-approval letter from Renasant Bank (Patrick Lavette), brief tax and legal counsel.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 2 — Days 6 to 10</div>
            <div class="timeline-title">Property Walk & Verification</div>
            <div class="timeline-desc">Two walk-throughs at different times of day. Confirm condition of roof, HVAC zones, electrical, plumbing, foundation, and any pool/outbuilding systems. Photograph everything.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 3 — Days 11 to 15</div>
            <div class="timeline-title">Opening Offer Submission</div>
            <div class="timeline-desc">Submit at $1,750,000 with $25,000 earnest, 14-day inspection contingency, 30-day financing contingency, 45-day close. Cover letter signed by Aaron only.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 4 — Days 16 to 25</div>
            <div class="timeline-title">Counter Cycle & Inspection</div>
            <div class="timeline-desc">Expect 1–2 counter rounds. Hold $1,875,000 as the most-likely close. Use inspection findings as a price-recovery lever, not a deal-breaker, unless safety or structural items emerge.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-phase">Phase 5 — Days 26 to 45</div>
            <div class="timeline-title">Title, Financing, Close</div>
            <div class="timeline-desc">Clear title, satisfy lender conditions, finalize insurance binder, walk-through 24 hours before close, fund and record. CB to coordinate utilities transfer the day of close.</div>
          </div>
        </div>
      </section>

      <!-- DUE DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Due Diligence <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <div class="dd-grid">
          <div class="dd-card">
            <h4>Property Condition</h4>
            <ul class="dd-list">
              <li>Full home inspection by licensed inspector</li>
              <li>Structural / foundation engineer review</li>
              <li>Roof age, condition, remaining life</li>
              <li>HVAC zones — age, capacity, service records</li>
              <li>Electrical panel, generator, surge protection</li>
              <li>Plumbing — supply lines, water heater, sewer scope</li>
              <li>Pool, hardscape, outbuildings (if applicable)</li>
              <li>Termite / wood-destroying organism letter</li>
            </ul>
          </div>
          <div class="dd-card">
            <h4>Title & Legal</h4>
            <ul class="dd-list">
              <li>Title commitment with all exceptions reviewed</li>
              <li>Survey — confirm property lines and easements</li>
              <li>Deed restrictions reviewed for home-office use</li>
              <li>HOA covenants, fees, special assessments</li>
              <li>Open permits, code violations, prior litigation</li>
              <li>Property tax history — last 5 years</li>
              <li>Confirm seller's authority to convey</li>
            </ul>
          </div>
          <div class="dd-card">
            <h4>Financing & Tax</h4>
            <ul class="dd-list">
              <li>Pre-approval letter from Renasant Bank</li>
              <li>Rate lock window confirmed</li>
              <li>Down payment and reserve plan modeled</li>
              <li>Home-office allocation strategy with CPA</li>
              <li>Entity-held vs. personal-held analysis</li>
              <li>Insurance binder — cost and coverage</li>
              <li>Property tax estimate at new assessed value</li>
            </ul>
          </div>
          <div class="dd-card">
            <h4>Operational Fit</h4>
            <ul class="dd-list">
              <li>Office layout — privacy, secure storage</li>
              <li>Internet — fiber availability and redundancy</li>
              <li>Cellular signal strength on all carriers</li>
              <li>Guest reception flow — driveway, foyer, parking</li>
              <li>Conference space for visiting principals</li>
              <li>4 AM start compatibility — quiet, light control</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- RISK MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Matrix</span></h2>
        <div class="nu-section-rule"></div>
        <table class="risk-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Severity</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hidden structural or foundation issue</td>
              <td><span class="risk-pill risk-high">High</span></td>
              <td>Independent structural engineer in addition to general inspector. Walk-away if foundation work exceeds $50,000 estimate.</td>
            </tr>
            <tr>
              <td>Comparable sales do not support price</td>
              <td><span class="risk-pill risk-high">High</span></td>
              <td>Require three closed comps within twelve months before opening. Lender appraisal must clear most-likely close price.</td>
            </tr>
            <tr>
              <td>Deed restrictions or HOA limit home-office use</td>
              <td><span class="risk-pill risk-med">Medium</span></td>
              <td>Title and HOA documents reviewed by counsel before earnest goes hard. Include specific contingency in offer.</td>
            </tr>
            <tr>
              <td>Capital tied up reduces operating runway</td>
              <td><span class="risk-pill risk-med">Medium</span></td>
              <td>Confirm 12-month operating reserves remain after down payment, closing costs, and immediate move-in capital expenditures.</td>
            </tr>
            <tr>
              <td>Birmingham luxury submarket softens post-close</td>
              <td><span class="risk-pill risk-low">Low</span></td>
              <td>Long-hold horizon insulates from short-term price movement. Disciplined entry price below verified comp average builds margin of safety.</td>
            </tr>
            <tr>
              <td>Seller demands aggressive closing timeline</td>
              <td><span class="risk-pill risk-low">Low</span></td>
              <td>Hold firm on 14-day inspection and 30-day financing windows. Do not waive contingencies for speed.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TALKING SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Script — Aaron's Voice</span></h2>
        <div class="nu-section-rule"></div>
        <div class="script-box">
          <h4>Opening Anchor</h4>
          <p>"My approach is straightforward. I run a third-generation utility distribution business out of Birmingham, and I am buying this property to live in for a long time and to host the principals I work with across the country. I am a cash-strong, contingency-light buyer with a clean financing letter behind me."</p>
          <p>"Based on the comparable sales we have pulled in the submarket, the supportable value sits in the high-$1.7s to mid-$1.8s. <em>I am opening at one million seven hundred fifty thousand,</em> with twenty-five thousand earnest, a fourteen-day inspection, and a forty-five-day close."</p>
          <p>"I would rather close than counter, but I will counter respectfully if we are close on number. Above the high-$1.9s I am not the right buyer for this property, and I will move on without hard feelings."</p>
        </div>
      </section>

      <!-- IMMEDIATE ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Immediate <span>Action Items</span></h2>
        <div class="nu-section-rule"></div>
        <div class="action-strip">
          <div class="action-step">
            <div class="action-num">1</div>
            <h5>Engage Buyer's Broker</h5>
            <p>Identify and retain a buyer's broker with verified estate-tier transaction history. Confirm dual-agency conflicts before signing.</p>
          </div>
          <div class="action-step">
            <div class="action-num">2</div>
            <h5>Pull Verified Comps</h5>
            <p>Three closed sales within twelve months in the same submarket and price band. No drive-by estimates, no online auto-valuations.</p>
          </div>
          <div class="action-step">
            <div class="action-num">3</div>
            <h5>Lender Pre-Approval</h5>
            <p>Patrick Lavette at Renasant Bank — request pre-approval letter with rate-lock window aligned to 45-day close target.</p>
          </div>
          <div class="action-step">
            <div class="action-num">4</div>
            <h5>Schedule First Walk</h5>
            <p>CB to coordinate two walk-throughs at different times of day. Aaron leads both. Camera, notebook, measuring tape required.</p>
          </div>
        </div>
        <p style="margin-top: 18px; font-size: 0.9rem; color: var(--nu-body-text);">
          <strong style="color: var(--nu-blue);">Authority Reminder:</strong> Aaron retains sole authority to convey price, terms, and walk-away. Caroline Butler may schedule, request documents, and route paperwork. No other party speaks to price on this transaction.
        </p>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-name">Aaron C. Norris</div>
    <div class="nu-footer-title">Founder &amp; CEO | Norris Utilities®, LLC</div>
    <div class="nu-footer-contact">
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">
      Confidential — Prepared for Aaron C. Norris — Not for External Distribution
    </div>
  </footer>

</body>
</html>