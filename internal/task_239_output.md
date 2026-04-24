<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      --nu-success: #0A7D4F;
      --nu-warning: #C9680A;
      --nu-alert: #C41E3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
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
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
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
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ WHITE CHEVRON TRANSITION (asymmetric, apex ~38%) ══ */
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

    /* ══ HERO BLOCK ══ */
    .nu-hero {
      background: var(--nu-white);
      padding: 48px 40px 24px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-hero-eyebrow {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0, 0, 255, 0.06);
      padding: 6px 16px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-hero h1 {
      font-weight: 900;
      font-size: clamp(1.8rem, 3.8vw, 2.7rem);
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 12px;
      max-width: 900px;
      margin-left: auto; margin-right: auto;
    }
    .nu-hero h1 em {
      font-style: normal;
      color: var(--nu-blue);
    }
    .nu-hero-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto 8px;
    }
    .nu-hero-address {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-top: 6px;
    }

    /* ══ CONTENT AREA WITH GHOST PHOENIX ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 56px 40px 72px;
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      background-image: radial-gradient(circle, rgba(0, 0, 255, 0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
    }

    /* ══ AT-A-GLANCE METRIC BAR ══ */
    .nu-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 48px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
    }
    .nu-metric {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .nu-metric-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.72;
      margin-bottom: 8px;
    }
    .nu-metric-value {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .nu-metric-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span:first-child {
      color: #0033cc;
    }
    .nu-section-title span:last-child {
      color: var(--nu-dark-text);
    }
    .nu-section-rule {
      height: 3px;
      width: 52px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.01em;
      padding-left: 30px;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center; justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 12px;
      flex-shrink: 0;
    }

    /* ══ CARDS ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px 26px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .nu-card-accent-cyan { border-left-color: var(--nu-cyan); }
    .nu-card-accent-gold { border-left-color: var(--nu-accent-gold); }
    .nu-card-accent-navy { border-left-color: var(--nu-navy); }
    .nu-card-accent-alert { border-left-color: var(--nu-alert); }

    .nu-card h3 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-card h3 .tag {
      display: inline-block;
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 8px;
      border-radius: 3px;
      margin-left: 8px;
      vertical-align: middle;
    }
    .nu-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      font-size: 0.93rem;
      padding: 6px 0 6px 18px;
      position: relative;
      color: var(--nu-body-text);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      top: 6px;
    }

    /* ══ DATA TABLE ══ */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    }
    .nu-table thead th {
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 16px;
      text-align: left;
    }
    .nu-table tbody td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafafb; }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table .th-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 28%;
    }
    .nu-pill {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 100px;
    }
    .nu-pill-blue { background: rgba(0,0,255,0.1); color: var(--nu-blue); }
    .nu-pill-cyan { background: rgba(6,208,255,0.15); color: #0580a0; }
    .nu-pill-warn { background: rgba(201,104,10,0.12); color: var(--nu-warning); }
    .nu-pill-alert { background: rgba(196,30,58,0.12); color: var(--nu-alert); }
    .nu-pill-ok { background: rgba(10,125,79,0.12); color: var(--nu-success); }

    /* ══ OFFER LADDER ══ */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 8px;
    }
    .nu-ladder-step {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 22px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      position: relative;
      border-top: 5px solid var(--nu-medium-gray);
    }
    .nu-ladder-step.step-open { border-top-color: var(--nu-blue); }
    .nu-ladder-step.step-target { border-top-color: var(--nu-cyan); }
    .nu-ladder-step.step-walk { border-top-color: var(--nu-alert); }
    .nu-ladder-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      opacity: 0.7;
      margin-bottom: 6px;
    }
    .nu-ladder-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-ladder-price {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 4px;
    }
    .nu-ladder-ppsf {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .nu-ladder-note {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.55;
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 12px;
      margin-top: 6px;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .nu-timeline-item:last-child { padding-bottom: 0; }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 5px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
    }
    .nu-timeline-item.active::before { background: var(--nu-cyan); border-color: var(--nu-blue); }
    .nu-timeline-day {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .nu-timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-timeline-body {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* ══ SCRIPT / CALLOUT BOX ══ */
    .nu-callout {
      background: linear-gradient(135deg, #f7f9ff 0%, #eaf4ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .nu-callout-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-callout-body {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 20px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      font-size: 0.95rem;
    }
    .nu-checklist-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-check-body strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }
    .nu-check-body span {
      color: var(--nu-body-text);
      font-size: 0.88rem;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000044 100%);
      color: rgba(255,255,255,0.88);
      padding: 48px 40px 38px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(6,208,255,0.08) 0%, transparent 70%);
    }
    .nu-footer > * { position: relative; }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: opacity 0.2s ease;
    }
    .nu-footer-contact a:hover { opacity: 0.8; }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.12);
      letter-spacing: 0.05em;
    }
    .nu-footer-confidential {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.72rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      opacity: 0.7;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-grid-2, .nu-grid-3, .nu-ladder { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 44px 22px 68px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 22px 56px; }
      .nu-hero { padding: 36px 22px 20px; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-table thead { display: none; }
      .nu-table tbody td { display: block; border-bottom: none; padding: 6px 16px; }
      .nu-table tbody tr { display: block; border-bottom: 1px solid var(--nu-medium-gray); padding: 10px 0; }
      .nu-table .th-label { width: 100%; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--nu-blue); padding-bottom: 0; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-content-area { background: var(--nu-white); padding: 30px 20px; }
      .nu-card, .nu-ladder-step, .nu-table-wrap, .nu-checklist { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-metrics { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON (asymmetric, apex at ~38%) -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- HERO -->
  <section class="nu-hero">
    <div class="nu-hero-eyebrow">Acquisition Strategy • Private &amp; Confidential</div>
    <h1><em>4505 Buttewoods</em> Estate Acquisition</h1>
    <p class="nu-hero-sub">Negotiation playbook for the 7,098 sq ft residence — target price, anchor strategy, due-diligence stack, and 45-day close timeline.</p>
    <p class="nu-hero-address">4505 Buttewoods · Birmingham, Alabama</p>
  </section>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- AT-A-GLANCE METRICS -->
      <div class="nu-metrics">
        <div class="nu-metric">
          <div class="nu-metric-label">Subject Property</div>
          <div class="nu-metric-value">7,098</div>
          <div class="nu-metric-sub">sq ft residence</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Opening Offer</div>
          <div class="nu-metric-value">$1.65M</div>
          <div class="nu-metric-sub">anchor — 91% of ask</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Target Close</div>
          <div class="nu-metric-value">$1.78M</div>
          <div class="nu-metric-sub">defensible midpoint</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Walk-Away Ceiling</div>
          <div class="nu-metric-value">$1.86M</div>
          <div class="nu-metric-sub">hard stop — no exceptions</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Earnest Money</div>
          <div class="nu-metric-value">$25K</div>
          <div class="nu-metric-sub">to Title Group Alabama</div>
        </div>
        <div class="nu-metric">
          <div class="nu-metric-label">Target Close Date</div>
          <div class="nu-metric-value">June 7</div>
          <div class="nu-metric-sub">45 days from acceptance</div>
        </div>
      </div>

      <!-- SECTION 1: NEGOTIATION OBJECTIVES -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Negotiation</span> <span>Objectives</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-badge-grid">
          <div class="nu-badge"><span class="nu-badge-num">1</span>Land at or under $1.78M — target price</div>
          <div class="nu-badge"><span class="nu-badge-num">2</span>Secure 14-day financing &amp; inspection contingency</div>
          <div class="nu-badge"><span class="nu-badge-num">3</span>Seller pays title insurance + survey</div>
          <div class="nu-badge"><span class="nu-badge-num">4</span>Lock 45-day close — no extensions past June 30</div>
          <div class="nu-badge"><span class="nu-badge-num">5</span>Zero post-close seller occupancy</div>
          <div class="nu-badge"><span class="nu-badge-num">6</span>Full repair credit for any systems &gt; $2,500</div>
        </div>
      </div>

      <!-- SECTION 2: OFFER LADDER -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Offer</span> <span>Ladder — Three Positions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-ladder">
          <div class="nu-ladder-step step-open">
            <div class="nu-ladder-label">Opening Position</div>
            <div class="nu-ladder-name">First Offer</div>
            <div class="nu-ladder-price">$1,650,000</div>
            <div class="nu-ladder-ppsf">$232.46 per sq ft</div>
            <div class="nu-ladder-note">Anchors low but credibly. Backed by three Mountain Brook comps averaging $238/sq ft. Leaves $130K of movement room before reaching target.</div>
          </div>
          <div class="nu-ladder-step step-target">
            <div class="nu-ladder-label">Desired Landing</div>
            <div class="nu-ladder-name">Target Close</div>
            <div class="nu-ladder-price">$1,780,000</div>
            <div class="nu-ladder-ppsf">$250.78 per sq ft</div>
            <div class="nu-ladder-note">Fair midpoint. Offer this only if seller counters above $1.82M or after inspection report is delivered. Final before walkaway threshold.</div>
          </div>
          <div class="nu-ladder-step step-walk">
            <div class="nu-ladder-label">Absolute Ceiling</div>
            <div class="nu-ladder-name">Walk-Away</div>
            <div class="nu-ladder-price">$1,860,000</div>
            <div class="nu-ladder-ppsf">$262.05 per sq ft</div>
            <div class="nu-ladder-note">Hard stop. Do not exceed. If seller holds above, thank them, leave business card, walk out. Re-engage in 21 days if listing still active.</div>
          </div>
        </div>
      </div>

      <!-- SECTION 3: PROPERTY & DEAL TERMS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Property</span> <span>&amp; Deal Terms</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr><th style="width:28%">Term</th><th>Position</th><th style="width:16%">Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td class="th-label">Address</td>
                <td>4505 Buttewoods, Birmingham, AL</td>
                <td><span class="nu-pill nu-pill-blue">Verified</span></td>
              </tr>
              <tr>
                <td class="th-label">Living Area</td>
                <td>7,098 sq ft (per listing)</td>
                <td><span class="nu-pill nu-pill-warn">Verify w/ appraisal</span></td>
              </tr>
              <tr>
                <td class="th-label">Financing</td>
                <td>Conventional 30-yr · 25% down · Renasant Bank (Patrick Lavette)</td>
                <td><span class="nu-pill nu-pill-ok">Pre-approved</span></td>
              </tr>
              <tr>
                <td class="th-label">Inspection Window</td>
                <td>14 calendar days from executed contract</td>
                <td><span class="nu-pill nu-pill-blue">Firm</span></td>
              </tr>
              <tr>
                <td class="th-label">Appraisal Contingency</td>
                <td>21 days — full refund of earnest if appraisal &lt; contract price</td>
                <td><span class="nu-pill nu-pill-blue">Firm</span></td>
              </tr>
              <tr>
                <td class="th-label">Earnest Money</td>
                <td>$25,000 to Title Group Alabama within 72 hours of acceptance</td>
                <td><span class="nu-pill nu-pill-cyan">Ready</span></td>
              </tr>
              <tr>
                <td class="th-label">Title Insurance</td>
                <td>Seller pays owner's policy; buyer pays lender's policy</td>
                <td><span class="nu-pill nu-pill-warn">Negotiate</span></td>
              </tr>
              <tr>
                <td class="th-label">Survey</td>
                <td>New ALTA/NSPS survey — seller expense</td>
                <td><span class="nu-pill nu-pill-warn">Negotiate</span></td>
              </tr>
              <tr>
                <td class="th-label">Closing Date</td>
                <td>On or before June 7, 2026 — 45 days</td>
                <td><span class="nu-pill nu-pill-blue">Fixed</span></td>
              </tr>
              <tr>
                <td class="th-label">Possession</td>
                <td>At closing — no seller holdover</td>
                <td><span class="nu-pill nu-pill-alert">Non-negotiable</span></td>
              </tr>
              <tr>
                <td class="th-label">Repairs Threshold</td>
                <td>Credit at closing for any single-system defect over $2,500</td>
                <td><span class="nu-pill nu-pill-blue">Firm</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SECTION 4: COMPARATIVE MARKET ANALYSIS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Comparable</span> <span>Sales — Anchor Your Numbers</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Comparable</th>
                <th>Sq Ft</th>
                <th>Sold Price</th>
                <th>$/Sq Ft</th>
                <th>Sold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="th-label">4412 Overhill Rd — Mountain Brook</td>
                <td>6,840</td>
                <td>$1,615,000</td>
                <td>$236.11</td>
                <td>Feb 2026</td>
              </tr>
              <tr>
                <td class="th-label">3918 Cherokee Rd — Mountain Brook</td>
                <td>7,220</td>
                <td>$1,725,000</td>
                <td>$238.92</td>
                <td>Jan 2026</td>
              </tr>
              <tr>
                <td class="th-label">4801 Crestline Ln — English Village</td>
                <td>6,950</td>
                <td>$1,682,500</td>
                <td>$242.09</td>
                <td>Dec 2025</td>
              </tr>
              <tr>
                <td class="th-label"><strong>Weighted Comp Average</strong></td>
                <td><strong>7,003</strong></td>
                <td><strong>$1,674,167</strong></td>
                <td><strong>$239.04</strong></td>
                <td><strong>—</strong></td>
              </tr>
              <tr style="background:#f0f4ff;">
                <td class="th-label"><strong>Subject — 4505 Buttewoods (list)</strong></td>
                <td><strong>7,098</strong></td>
                <td><strong>$1,812,000 ask</strong></td>
                <td><strong>$255.28</strong></td>
                <td><strong>Active</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.9rem; color: var(--nu-body-text); margin-top: 12px; font-style: italic;">Subject is listed 6.8% above the comp average. A close at $1.78M ($250.78/sq ft) still pays a modest premium for condition and lot but removes the overreach.</p>
      </div>

      <!-- SECTION 5: LEVERAGE & COUNTER-LEVERAGE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Leverage</span> <span>— What We Carry Into the Room</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-grid-2">
          <div class="nu-card">
            <h3>Our Leverage <span class="tag">Buyer</span></h3>
            <ul>
              <li>Cash-strength buyer — 25% down documented by Renasant</li>
              <li>No home-sale contingency — no chain to break</li>
              <li>Fast 45-day close the seller can bank on</li>
              <li>Listed 74 days — DOM pressure building on seller</li>
              <li>One prior offer fell through (financing) — seller risk-averse</li>
              <li>Willing to close in cash if needed via personal reserves</li>
            </ul>
          </div>
          <div class="nu-card nu-card-accent-alert">
            <h3>Seller's Leverage <span class="tag" style="background:var(--nu-alert);">Seller</span></h3>
            <ul>
              <li>Estate-grade property — limited inventory at this sq footage</li>
              <li>No immediate time pressure on seller (per listing agent)</li>
              <li>Two drive-by buyers reportedly circling</li>
              <li>Spring market — demand side is thickening</li>
              <li>Recent renovations (kitchen, primary bath) support premium</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 6: DUE DILIGENCE STACK -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Due</span> <span>Diligence Stack — 14-Day Window</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3>Structural &amp; Systems</h3>
            <ul>
              <li>Licensed Alabama home inspector</li>
              <li>Separate HVAC technician — 4+ zones expected</li>
              <li>Licensed roofer inspection</li>
              <li>Foundation/structural engineer if basement shows cracking</li>
              <li>Pool &amp; pool-deck inspection (if applicable)</li>
            </ul>
          </div>
          <div class="nu-card nu-card-accent-cyan">
            <h3>Environmental &amp; Hazards</h3>
            <ul>
              <li>Radon test — 48-hour charcoal kit</li>
              <li>Mold/moisture inspection — basement &amp; attic</li>
              <li>Termite/pest (required by Alabama lenders)</li>
              <li>Lead-based paint disclosure if built pre-1978</li>
              <li>Sewer scope — 7,000+ sq ft home justifies this</li>
            </ul>
          </div>
          <div class="nu-card nu-card-accent-gold">
            <h3>Legal &amp; Title</h3>
            <ul>
              <li>Full title search — Title Group Alabama</li>
              <li>Survey: verify lot boundaries &amp; easements</li>
              <li>HOA documents review (if applicable)</li>
              <li>Jefferson County property-tax verification</li>
              <li>Permit history pull — confirm renovations legal</li>
              <li>Insurance quote — Cincinnati Insurance / USAA comparison</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECTION 7: TIMELINE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Close</span> <span>Timeline — 45 Days</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-timeline">
          <div class="nu-timeline-item active">
            <div class="nu-timeline-day">Day 0 — April 23, 2026</div>
            <div class="nu-timeline-title">Opening Offer Submitted</div>
            <div class="nu-timeline-body">Written offer at $1,650,000 delivered with pre-approval letter. 48-hour response deadline attached.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Days 1–3</div>
            <div class="nu-timeline-title">Negotiation &amp; Counter Rounds</div>
            <div class="nu-timeline-body">Expect first counter $1,790K–$1,805K. Our response: $1,710K. Target acceptance at $1,780K by Day 3.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 4</div>
            <div class="nu-timeline-title">Contract Execution &amp; Earnest Deposit</div>
            <div class="nu-timeline-body">Fully executed PSA. Wire $25,000 earnest money to Title Group Alabama within 72 hours.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Days 5–18</div>
            <div class="nu-timeline-title">Inspection Window (14 Days)</div>
            <div class="nu-timeline-body">All inspections booked Day 5. Repair-request letter submitted by Day 16. Seller responds by Day 18.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Days 5–25</div>
            <div class="nu-timeline-title">Financing &amp; Appraisal</div>
            <div class="nu-timeline-body">Loan application submitted Day 5 with Renasant. Appraisal ordered Day 10, completed Day 20. Underwriting Day 21–30.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Days 26–30</div>
            <div class="nu-timeline-title">Final Walk-Through &amp; Clear-to-Close</div>
            <div class="nu-timeline-body">CTC from lender. Final walk-through scheduled 48 hours before closing. Verify all repairs executed.</div>
          </div>
          <div class="nu-timeline-item">
            <div class="nu-timeline-day">Day 45 — June 7, 2026</div>
            <div class="nu-timeline-title">Closing &amp; Possession</div>
            <div class="nu-timeline-body">Sign at Title Group Alabama. Keys delivered at table. Deed recorded with Jefferson County same day.</div>
          </div>
        </div>
      </div>

      <!-- SECTION 8: NEGOTIATION SCRIPTS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Negotiation</span> <span>Scripts — Use These Verbatim</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-callout">
          <div class="nu-callout-label">Opening Delivery</div>
          <div class="nu-callout-body">"We're genuine buyers. We have the funds, we have the lender, and we can close in 45 days without drama. Our opening is $1,650,000 — it's based on three Mountain Brook comps in the last 90 days averaging $239 a foot. We'd like to come to a fair number quickly, and we'd rather earn your confidence than argue over the last $10K."</div>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-label">When Seller Counters High ($1.80M+)</div>
          <div class="nu-callout-body">"I appreciate that. Let me be straight with you — we've looked at three other homes in this pocket. What we can do today is $1,710,000. We close in 45 days, no home-sale contingency, and the earnest wires Monday. That's a real, closable number."</div>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-label">At Target ($1.78M)</div>
          <div class="nu-callout-body">"If you'll meet us at $1,780,000 with seller covering the owner's title policy and the survey, we have a deal. We'll sign tonight."</div>
        </div>

        <div class="nu-callout">
          <div class="nu-callout-label">Walk-Away (&gt; $1.86M)</div>
          <div class="nu-callout-body">"I respect the home and I respect your position. That number is beyond where we can go and stay disciplined. If the situation changes over the next three weeks, you have my card. Thank you for the consideration."</div>
        </div>
      </div>

      <!-- SECTION 9: ADVISORY TEAM -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Advisory</span> <span>Team — Who's On Call</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-grid-3">
          <div class="nu-card">
            <h3>Financing</h3>
            <p><strong>Patrick Lavette</strong><br>Renasant Bank — Private Client</p>
            <p style="font-size:0.88rem;">Pre-approval letter on file. Jumbo portfolio product, 30-year fixed, 25% down documented.</p>
          </div>
          <div class="nu-card nu-card-accent-cyan">
            <h3>Title &amp; Escrow</h3>
            <p><strong>Title Group Alabama</strong><br>Birmingham office</p>
            <p style="font-size:0.88rem;">Handles earnest money trust, ALTA survey coordination, title search and final closing.</p>
          </div>
          <div class="nu-card nu-card-accent-gold">
            <h3>Legal Review</h3>
            <p><strong>Real estate counsel TBD</strong><br>Alabama-licensed, residential specialty</p>
            <p style="font-size:0.88rem;">Reviews purchase agreement before signature. Required for any seller-authored addenda.</p>
          </div>
          <div class="nu-card">
            <h3>Tax &amp; Structure</h3>
            <p><strong>Warren Averett</strong><br>Tax &amp; advisory</p>
            <p style="font-size:0.88rem;">Confirms title-holding entity (personal vs. LLC), implications for Alabama property-tax homestead exemption.</p>
          </div>
          <div class="nu-card nu-card-accent-cyan">
            <h3>Insurance</h3>
            <p><strong>USAA · Cincinnati Insurance</strong><br>Dual-quote comparison</p>
            <p style="font-size:0.88rem;">Jumbo-home dwelling coverage, umbrella, flood verification (Jefferson County FEMA map).</p>
          </div>
          <div class="nu-card nu-card-accent-navy">
            <h3>Banking &amp; Wire</h3>
            <p><strong>Renasant Treasury · Patrick Lavette</strong></p>
            <p style="font-size:0.88rem;">Earnest-money wire and closing funds wire. Verify receiving account verbally before every transfer.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 10: EXECUTION CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span>Execution</span> <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-checklist">
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Confirm Renasant pre-approval letter is current (dated within 30 days)</strong>
              <span>Action: Call Patrick Lavette. Request PDF on bank letterhead for $1.86M purchase price.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Submit written offer at $1,650,000 with 48-hour expiration</strong>
              <span>Action: Buyer's agent delivers. Attach pre-approval letter and earnest-ready confirmation.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Open escrow with Title Group Alabama on acceptance</strong>
              <span>Action: Wire $25,000 earnest within 72 hours. Verify wire instructions by phone before sending.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Book all inspections within 72 hours of contract execution</strong>
              <span>Action: Home inspector, HVAC, roofer, sewer scope, radon, termite, pest — all scheduled Day 5–10.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Submit repair-request letter by Day 16</strong>
              <span>Action: Credits for any single-system finding over $2,500. Negotiated at table, not after.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Lock rate with Renasant after appraisal clears</strong>
              <span>Action: Day 20–21. 30-day rate lock matches closing timeline with buffer.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Final walk-through 48 hours before closing</strong>
              <span>Action: Verify agreed repairs executed. Photograph every room. Note any new damage.</span>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-body">
              <strong>Close June 7, 2026 — possession at table</strong>
              <span>Action: Sign at Title Group Alabama. Keys, openers, gate codes, manuals in hand before leaving.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris, Founder &amp; CEO</strong><br>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Prepared April 23, 2026 · Acquisition Strategy Memo — 4505 Buttewoods
      <div class="nu-footer-confidential">Private &amp; Confidential · Internal Use</div>
    </div>
  </footer>

</body>
</html>