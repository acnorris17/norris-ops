<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
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
      --nu-red: #B91C1C;
      --nu-green: #15803D;
      --nu-amber: #B45309;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 16px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      backdrop-filter: blur(6px);
    }

    /* ══ WHITE CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC TITLE BLOCK ══ */
    .nu-title-block {
      border-bottom: 2px solid var(--nu-medium-gray);
      padding-bottom: 28px;
      margin-bottom: 40px;
    }
    .nu-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 18px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .nu-page-meta span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-right: 6px;
    }

    /* ══ EXECUTIVE SUMMARY CARD ══ */
    .nu-exec-summary {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 26px 30px;
      margin-bottom: 44px;
      border-radius: 0 6px 6px 0;
    }
    .nu-exec-summary h2 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-exec-summary p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* ══ KEY FIGURES STRIP ══ */
    .nu-figures {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 48px;
    }
    .nu-figure {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 22px 18px;
      text-align: center;
      border-radius: 4px;
    }
    .nu-figure .label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--nu-body-text);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-figure .value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1.1;
    }
    .nu-figure .sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }
    .nu-figure.accent { border-top-color: var(--nu-cyan); }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 52px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .nu-section-intro {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 860px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 26px 10px 18px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
    }

    /* ══ LEVERAGE GRID ══ */
    .nu-leverage-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .nu-leverage {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      position: relative;
    }
    .nu-leverage .chip {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .nu-leverage .chip.pro { background: #E7F5EC; color: var(--nu-green); }
    .nu-leverage .chip.con { background: #FBEAEA; color: var(--nu-red); }
    .nu-leverage h3 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-leverage p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ NEGOTIATION LADDER ══ */
    .nu-ladder {
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-ladder-row {
      display: grid;
      grid-template-columns: 90px 1fr 170px 170px;
      align-items: stretch;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-ladder-row:last-child { border-bottom: none; }
    .nu-ladder-head {
      background: var(--nu-navy);
      color: var(--nu-white);
    }
    .nu-ladder-head > div {
      padding: 14px 16px;
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .nu-ladder-row > div { padding: 16px; font-size: 0.92rem; }
    .nu-ladder-step {
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nu-ladder-row.opening .nu-ladder-step { background: #0033CC; }
    .nu-ladder-row.counter-1 .nu-ladder-step { background: #0052E0; }
    .nu-ladder-row.counter-2 .nu-ladder-step { background: #0073EF; }
    .nu-ladder-row.walkaway .nu-ladder-step { background: var(--nu-red); }
    .nu-ladder-body strong { color: var(--nu-dark-text); font-weight: 900; display: block; margin-bottom: 3px; }
    .nu-ladder-price {
      text-align: right;
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .nu-ladder-price span {
      font-weight: 400;
      font-size: 0.72rem;
      color: var(--nu-body-text);
      letter-spacing: 0.05em;
      margin-top: 2px;
    }
    .nu-ladder-trigger {
      font-size: 0.86rem;
      color: var(--nu-body-text);
      display: flex;
      align-items: center;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline { position: relative; padding-left: 28px; }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-tl-item { position: relative; padding: 0 0 22px 18px; }
    .nu-tl-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-tl-item h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 3px;
    }
    .nu-tl-item .when {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-tl-item p { font-size: 0.93rem; color: var(--nu-body-text); }

    /* ══ CONDITIONS + RED FLAGS ══ */
    .nu-twocol {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-panel {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 26px;
    }
    .nu-panel.musts { border-top: 4px solid var(--nu-green); }
    .nu-panel.flags { border-top: 4px solid var(--nu-red); }
    .nu-panel h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-list { list-style: none; padding: 0; }
    .nu-list li {
      position: relative;
      padding: 8px 0 8px 28px;
      font-size: 0.93rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-list li:last-child { border-bottom: none; }
    .nu-list.check li::before {
      content: '✓';
      position: absolute;
      left: 0; top: 7px;
      color: var(--nu-green);
      font-weight: 900;
      font-size: 1.05rem;
    }
    .nu-list.warn li::before {
      content: '!';
      position: absolute;
      left: 2px; top: 7px;
      width: 18px; height: 18px;
      line-height: 18px;
      text-align: center;
      background: var(--nu-red);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.72rem;
    }

    /* ══ SCRIPTS ══ */
    .nu-script {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 18px;
      position: relative;
      overflow: hidden;
    }
    .nu-script::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 40%; height: 100%;
      background: radial-gradient(circle at 100% 50%, rgba(6,208,255,0.18), transparent 60%);
    }
    .nu-script .scenario {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-script blockquote {
      font-family: var(--font-serif);
      font-style: italic;
      font-size: 1.12rem;
      line-height: 1.55;
      color: var(--nu-white);
      border-left: 3px solid var(--nu-cyan);
      padding-left: 20px;
      position: relative;
      z-index: 1;
    }

    /* ══ ACTION CHECKLIST ══ */
    .nu-actions {
      background: linear-gradient(135deg, #fafbff, #eef3ff);
      border: 1px solid #d5dcf5;
      border-radius: 6px;
      padding: 28px 32px;
    }
    .nu-actions h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-action-list { list-style: none; padding: 0; counter-reset: step; }
    .nu-action-list li {
      counter-increment: step;
      position: relative;
      padding: 10px 0 10px 48px;
      border-bottom: 1px solid rgba(0,0,255,0.08);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-action-list li:last-child { border-bottom: none; }
    .nu-action-list li::before {
      content: counter(step);
      position: absolute;
      left: 0; top: 9px;
      width: 32px; height: 32px;
      line-height: 32px;
      text-align: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-action-list li strong { display: block; font-weight: 900; margin-bottom: 2px; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 48px 40px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.92);
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 20px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .nu-figures { grid-template-columns: repeat(2, 1fr); }
      .nu-leverage-grid { grid-template-columns: 1fr; }
      .nu-twocol { grid-template-columns: 1fr; }
      .nu-ladder-row { grid-template-columns: 70px 1fr; }
      .nu-ladder-row > div.nu-ladder-price,
      .nu-ladder-row > div.nu-ladder-trigger { grid-column: 2; padding-top: 0; }
      .nu-ladder-row .nu-ladder-step { grid-row: span 3; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 50px 22px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 20px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-figures { grid-template-columns: 1fr 1fr; gap: 10px; }
      .nu-figure .value { font-size: 1.4rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-exec-summary, .nu-script, .nu-actions, .nu-panel { padding: 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-leverage, .nu-panel, .nu-figure { box-shadow: none; break-inside: avoid; }
      .nu-section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Confidential &mdash; Internal Negotiation Brief</div>
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
      <div class="nu-title-block">
        <div class="nu-eyebrow">reMarkable Action Item &middot; Real Estate Acquisition</div>
        <h1 class="nu-page-title">Negotiate Purchase of the <span class="accent">4505 Buttewoods</span> Estate</h1>
        <div class="nu-page-meta">
          <span><strong>Property:</strong> 7,098 sq ft estate</span>
          <span><strong>Address:</strong> 4505 Buttewoods</span>
          <span><strong>Principal:</strong> Aaron C. Norris</span>
          <span><strong>Prepared:</strong> 2026-04-21</span>
        </div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <div class="nu-exec-summary">
        <h2>Executive Summary</h2>
        <p>Aaron is moving to negotiate acquisition of the 7,098 sq ft estate at 4505 Buttewoods. A working offer at <strong>$900,000</strong> has already been framed in prior sessions. This brief converts that directional number into a disciplined negotiation plan: laddered offer tiers, red-flag tripwires, inspection and financing guardrails, and the exact language to use on each round so the process does not drift off structure.</p>
      </div>

      <!-- KEY FIGURES -->
      <div class="nu-figures">
        <div class="nu-figure">
          <div class="label">Square Footage</div>
          <div class="value">7,098</div>
          <div class="sub">livable area (per listing)</div>
        </div>
        <div class="nu-figure accent">
          <div class="label">Working Offer</div>
          <div class="value">$900,000</div>
          <div class="sub">opening position</div>
        </div>
        <div class="nu-figure">
          <div class="label">Price Ceiling</div>
          <div class="value">$975,000</div>
          <div class="sub">hard walk-away above</div>
        </div>
        <div class="nu-figure accent">
          <div class="label">$/SqFt at Ceiling</div>
          <div class="value">$137.36</div>
          <div class="sub">all-in acquisition basis</div>
        </div>
      </div>

      <!-- LEVERAGE MAP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Leverage</span> <span class="rest">Map &mdash; What We Have, What They Have</span></h2>
        <p class="nu-section-intro">Every concession on price should be tied back to one of these levers. If we are giving on number, we are taking on terms &mdash; and vice versa. Never move on both at the same time.</p>

        <div class="nu-badge-row">
          <div class="nu-badge">OUR LEVERAGE</div>
          <div class="nu-badge" style="background: linear-gradient(135deg, #7a1a1a 0%, #b32b2b 100%);">THEIR LEVERAGE</div>
        </div>

        <div class="nu-leverage-grid">
          <div class="nu-leverage">
            <div class="chip pro">Ours</div>
            <h3>Qualified, Non-Contingent on Sale</h3>
            <p>We are not carrying a sale-of-residence contingency into this deal. That alone separates our offer from most of the market and gives us room to move on price in exchange for speed.</p>
          </div>
          <div class="nu-leverage">
            <div class="chip pro">Ours</div>
            <h3>Proof of Funds in Hand</h3>
            <p>Provide PoF letter up front only after they counter once. Showing it too early caps the discount; showing it at the right moment is the accelerator that closes a stalled round.</p>
          </div>
          <div class="nu-leverage">
            <div class="chip pro">Ours</div>
            <h3>Days on Market</h3>
            <p>If DOM is trending past the neighborhood average, the seller&rsquo;s patience narrative collapses. Use the exact day count in the second counter, not adjectives.</p>
          </div>
          <div class="nu-leverage">
            <div class="chip pro">Ours</div>
            <h3>Willingness to Walk</h3>
            <p>The single most valuable chip at the table. The estate is desirable, not irreplaceable. Never verbalize urgency &mdash; Aaron&rsquo;s cadence stays the same whether we are $50k apart or $5k apart.</p>
          </div>
          <div class="nu-leverage">
            <div class="chip con">Theirs</div>
            <h3>Comparable Sales Above Our Range</h3>
            <p>Expect them to anchor on the two or three strongest comps in the neighborhood. Neutralize with median &mdash; not max &mdash; and back it up with median-by-$/SqFt, not headline price.</p>
          </div>
          <div class="nu-leverage">
            <div class="chip con">Theirs</div>
            <h3>Replacement Property Scarcity</h3>
            <p>7,098 sq ft estates with comparable lots are rare. If they push this point, we acknowledge it &mdash; and redirect to condition, age of systems, and deferred maintenance.</p>
          </div>
        </div>
      </section>

      <!-- NEGOTIATION LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder &mdash; Four Rounds, Pre-Committed</span></h2>
        <p class="nu-section-intro">Decide the entire ladder before Round 1 goes out. Moving in unplanned increments is how deals get expensive. Each move is anchored to a trigger &mdash; no trigger, no movement.</p>

        <div class="nu-ladder">
          <div class="nu-ladder-row nu-ladder-head">
            <div>Round</div>
            <div>Position &amp; Rationale</div>
            <div style="text-align:right;">Price</div>
            <div>Trigger to Advance</div>
          </div>

          <div class="nu-ladder-row opening">
            <div class="nu-ladder-step">1</div>
            <div class="nu-ladder-body">
              <strong>Opening Offer</strong>
              Written offer at our anchor. Clean terms, 30-day close, 10-day inspection, earnest money 1%. Short 48-hour response window to force seller to engage.
            </div>
            <div class="nu-ladder-price">$900,000<span>anchor</span></div>
            <div class="nu-ladder-trigger">Submit Monday AM. Respond window closes Wed 5 PM.</div>
          </div>

          <div class="nu-ladder-row counter-1">
            <div class="nu-ladder-step">2</div>
            <div class="nu-ladder-body">
              <strong>First Counter</strong>
              Move only if seller has countered below list by a real number. Deliver PoF letter at this stage, not before. Keep inspection and earnest unchanged.
            </div>
            <div class="nu-ladder-price">$930,000<span>+$30k</span></div>
            <div class="nu-ladder-trigger">Seller counters &le; list. No real movement? Hold.</div>
          </div>

          <div class="nu-ladder-row counter-2">
            <div class="nu-ladder-step">3</div>
            <div class="nu-ladder-body">
              <strong>Final Counter</strong>
              Final number framed as final. Attach a one-line basis: median neighborhood $/SqFt times 7,098. Add a concession ask &mdash; seller credits for a known defect or HVAC &mdash; to preserve ground.
            </div>
            <div class="nu-ladder-price">$955,000<span>+$25k</span></div>
            <div class="nu-ladder-trigger">Seller splits the spread or identifies real gap.</div>
          </div>

          <div class="nu-ladder-row walkaway">
            <div class="nu-ladder-step">&#10006;</div>
            <div class="nu-ladder-body">
              <strong>Walk-Away Ceiling</strong>
              Hard stop. Above $975k the $/SqFt math breaks versus our comparable basis and the deal stops being advantageous. Communicate the walk in writing &mdash; keep door cracked for 14 days.
            </div>
            <div class="nu-ladder-price">$975,000<span>ceiling</span></div>
            <div class="nu-ladder-trigger">Seller demands above ceiling &rarr; withdraw.</div>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Process</span> <span class="rest">Timeline &mdash; 14 Business Days to Executed Contract</span></h2>
        <p class="nu-section-intro">A compressed, disciplined schedule. Every round has a pre-set response window so the other side cannot slow-walk us into emotional movement.</p>

        <div class="nu-timeline">
          <div class="nu-tl-item">
            <div class="when">Day 1 &middot; Monday</div>
            <h4>Submit Opening Offer at $900,000</h4>
            <p>Delivered in writing by buyer&rsquo;s agent. 48-hour response required. No verbal pre-pitch &mdash; the paper is the pitch.</p>
          </div>
          <div class="nu-tl-item">
            <div class="when">Day 2&ndash;3</div>
            <h4>Seller Response &mdash; Evaluate, Do Not React</h4>
            <p>Whatever comes back, Aaron waits a full 24 hours before countering. Speed on our side signals weakness on price. Deliberation signals conviction.</p>
          </div>
          <div class="nu-tl-item">
            <div class="when">Day 4&ndash;5</div>
            <h4>Counter at $930,000 + Release Proof of Funds</h4>
            <p>PoF letter attached. Written basis: &ldquo;priced against median comparable sales across the last 90 days.&rdquo; Request 72-hour response.</p>
          </div>
          <div class="nu-tl-item">
            <div class="when">Day 6&ndash;8</div>
            <h4>Final Counter at $955,000 Framed as Final</h4>
            <p>Include a concession ask (credit for HVAC, roof, or known defect surfaced during initial walk). Set a firm 48-hour clock.</p>
          </div>
          <div class="nu-tl-item">
            <div class="when">Day 9&ndash;10</div>
            <h4>Decision Point</h4>
            <p>Either we have a meeting at or below $975k ceiling &mdash; or we execute the written walk-away and reset timer for 14 days. No middle option.</p>
          </div>
          <div class="nu-tl-item">
            <div class="when">Day 11&ndash;14</div>
            <h4>Contract Execution &amp; Inspection Scheduling</h4>
            <p>Binder signed, earnest money wired, inspector scheduled. Close target 30 days from binding date.</p>
          </div>
        </div>
      </section>

      <!-- MUSTS + RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Terms &amp; Red Flag Tripwires</span></h2>
        <p class="nu-section-intro">What we must preserve in the contract, and what automatically collapses the deal. Non-negotiables on both columns.</p>

        <div class="nu-twocol">
          <div class="nu-panel musts">
            <h3>Contract Non-Negotiables</h3>
            <ul class="nu-list check">
              <li>10-day inspection window with full right to terminate and earnest money returned.</li>
              <li>Survey contingency &mdash; encroachments or lot-line issues void.</li>
              <li>Clean title commitment from a title company Aaron approves, not seller&rsquo;s preferred.</li>
              <li>Seller disclosure of all known defects, prior water intrusion, foundation work, and insurance claims in last 7 years.</li>
              <li>Walk-through 48 hours pre-close with right to hold back funds for unresolved issues.</li>
              <li>Earnest money held by neutral third-party escrow, not listing brokerage.</li>
            </ul>
          </div>

          <div class="nu-panel flags">
            <h3>Red Flag Tripwires &mdash; Deal Stops</h3>
            <ul class="nu-list warn">
              <li>Seller refuses to allow independent inspection or tries to limit scope.</li>
              <li>Any evidence of undisclosed foundation, roof, or moisture remediation.</li>
              <li>Refusal to issue a clean Seller&rsquo;s Disclosure Form.</li>
              <li>Title defects, liens, or unresolved probate on file.</li>
              <li>Survey reveals boundary or easement issues seller is unwilling to cure before close.</li>
              <li>Seller insists on as-is sale with no contingencies &mdash; not at our price, not at any price.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SCRIPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Scripts</span> <span class="rest">&mdash; Exact Language for Each Round</span></h2>
        <p class="nu-section-intro">Use these verbatim. The goal is not eloquence &mdash; it is consistency. Deviating creates room for the other side to reframe the conversation.</p>

        <div class="nu-script">
          <div class="scenario">Scenario 1 &mdash; Delivering the Opening Offer</div>
          <blockquote>&ldquo;The offer is $900,000, clean terms, 30-day close, 10-day inspection. We&rsquo;ve structured it to close quickly and without financing friction. The number reflects median comparable sales over the last 90 days. We&rsquo;ll need a response by Wednesday at 5 PM so we can move this or move on. Sincerely, Aaron.&rdquo;</blockquote>
        </div>

        <div class="nu-script">
          <div class="scenario">Scenario 2 &mdash; Seller Counters Near List Price</div>
          <blockquote>&ldquo;Thank you for the counter. That number is above where the comparables support, and above where we&rsquo;re prepared to move. Our position is $930,000. I&rsquo;ve attached proof of funds. At this price, we are ready to bind the contract immediately. If the number doesn&rsquo;t work, we understand &mdash; we&rsquo;ll step away on good terms.&rdquo;</blockquote>
        </div>

        <div class="nu-script">
          <div class="scenario">Scenario 3 &mdash; Final Counter</div>
          <blockquote>&ldquo;This is our final number: $955,000, with a $10,000 credit at close for the items surfaced on the initial walk. We&rsquo;ve moved twice; the path to a closing table runs through a meeting at this price. We&rsquo;ll hold this for 48 hours.&rdquo;</blockquote>
        </div>

        <div class="nu-script">
          <div class="scenario">Scenario 4 &mdash; Walk-Away Letter</div>
          <blockquote>&ldquo;We appreciate the time and the back-and-forth. At this price point the math no longer supports the acquisition, and we&rsquo;re withdrawing our offer. If the seller&rsquo;s position shifts in the next two weeks, we&rsquo;d be open to reopening the conversation &mdash; otherwise we&rsquo;ll move on to other properties. Sincerely, Aaron.&rdquo;</blockquote>
        </div>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-actions">
          <h3>Aaron&rsquo;s Next Steps &mdash; Pre-Submission Checklist</h3>
          <ul class="nu-action-list">
            <li><strong>Pull the comparable sales data.</strong> Median $/SqFt across last 90 days within 1-mile radius. Keep source screenshots for the negotiation file.</li>
            <li><strong>Confirm proof-of-funds letter is dated within 30 days.</strong> Refresh if stale. Do not send on Round 1.</li>
            <li><strong>Engage buyer&rsquo;s agent in writing.</strong> Fee structure agreed, representation scope clear, dual-agency disallowed.</li>
            <li><strong>Order preliminary title check.</strong> Surface liens, probate, or encumbrances before the offer lands, not after.</li>
            <li><strong>Schedule drive-by of exterior and lot lines.</strong> Document in photos. Identify concession-ask items for the final counter.</li>
            <li><strong>Pre-wire earnest money to escrow.</strong> Removes friction between acceptance and binding.</li>
            <li><strong>Set pre-committed ladder limits in writing before Round 1.</strong> Aaron signs the ladder internally. No deviation without a cooling-off hour.</li>
            <li><strong>Block calendar for response windows.</strong> Aaron must be reachable within the seller&rsquo;s response window, not the other way around.</li>
          </ul>
        </div>
      </section>

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
    <div class="nu-footer-meta">Confidential &middot; Prepared 2026-04-21 &middot; Internal Use Only</div>
  </footer>

</body>
</html>