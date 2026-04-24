<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Negotiation — 4505 Buttewoods — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-success: #0a8754;
      --nu-warning: #c77700;
      --nu-danger: #b91c1c;
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

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* Chevron transition */
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

    /* Content area */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* Action banner */
    .nu-action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 8px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 6px 20px rgba(10, 14, 92, 0.18);
    }
    .nu-action-banner-icon {
      flex-shrink: 0;
      width: 48px; height: 48px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.4rem;
    }
    .nu-action-banner-text {
      flex: 1;
    }
    .nu-action-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-action-title {
      font-weight: 900;
      font-size: 1.15rem;
      line-height: 1.35;
      color: var(--nu-white);
    }

    /* Section heading */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue-deep);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-sub {
      color: #555;
      font-size: 0.95rem;
      margin-bottom: 20px;
    }

    .nu-section { margin-bottom: 44px; }

    /* Property hero card */
    .nu-property-hero {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      overflow: hidden;
      margin-bottom: 44px;
    }
    .nu-property-hero-top {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-blue) 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
    }
    .nu-property-address {
      font-weight: 900;
      font-size: 1.75rem;
      letter-spacing: 0.01em;
      margin-bottom: 4px;
    }
    .nu-property-sub {
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.92;
    }
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0;
    }
    .nu-stat {
      padding: 22px 20px;
      border-right: 1px solid var(--nu-medium-gray);
      border-top: 1px solid var(--nu-medium-gray);
      text-align: center;
    }
    .nu-stat:last-child { border-right: none; }
    .nu-stat-value {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue-deep);
      line-height: 1.1;
    }
    .nu-stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #666;
      text-transform: uppercase;
      margin-top: 6px;
    }

    /* Two-column */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 820px) { .nu-two-col { grid-template-columns: 1fr; } }

    /* Cards */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.95rem;
    }
    .nu-card ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 4px;
      font-size: 1.1rem;
    }

    /* Key-value list */
    .nu-kv {
      display: grid;
      grid-template-columns: 40% 60%;
      gap: 8px 16px;
      font-size: 0.95rem;
    }
    .nu-kv dt {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-kv dd {
      color: var(--nu-body-text);
    }

    /* Strategy steps */
    .nu-steps {
      counter-reset: step;
      display: grid;
      gap: 16px;
    }
    .nu-step {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px 18px 62px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.05);
      position: relative;
      counter-increment: step;
    }
    .nu-step::before {
      content: counter(step);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-step h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-step p {
      font-size: 0.93rem;
      color: #444;
      margin: 0;
    }

    /* Price ladder */
    .nu-ladder {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef3ff 100%);
      border: 1px solid #d6ddf2;
      border-radius: 10px;
      padding: 28px;
    }
    .nu-ladder-row {
      display: grid;
      grid-template-columns: 140px 1fr 140px;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px dashed #c9d0e8;
      gap: 16px;
    }
    .nu-ladder-row:last-child { border-bottom: none; }
    .nu-ladder-tier {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
    }
    .nu-ladder-desc {
      font-size: 0.93rem;
      color: #444;
    }
    .nu-ladder-amount {
      font-weight: 900;
      font-size: 1.2rem;
      text-align: right;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
    }
    .nu-ladder-row.is-target .nu-ladder-amount { color: var(--nu-success); }
    .nu-ladder-row.is-walk .nu-ladder-amount { color: var(--nu-danger); }
    @media (max-width: 640px) {
      .nu-ladder-row { grid-template-columns: 1fr; }
      .nu-ladder-amount { text-align: left; }
    }

    /* Callout */
    .nu-callout {
      background: #fff8e6;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 24px 0;
      font-size: 0.95rem;
      color: #5a4a10;
    }
    .nu-callout strong { color: #3a2f00; }

    /* Risk table */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-pill.high { background: #fee2e2; color: var(--nu-danger); }
    .nu-pill.med  { background: #fef3c7; color: var(--nu-warning); }
    .nu-pill.low  { background: #d1fae5; color: var(--nu-success); }

    /* Checklist */
    .nu-check {
      display: grid;
      gap: 10px;
    }
    .nu-check label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.15s ease;
      font-size: 0.95rem;
    }
    .nu-check label:hover { background: #f7f9ff; }
    .nu-check input[type="checkbox"] {
      margin-top: 3px;
      width: 18px; height: 18px;
      accent-color: var(--nu-blue);
      flex-shrink: 0;
    }

    /* Timeline */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 18px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 6px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .nu-timeline-date {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue-deep);
      letter-spacing: 0.05em;
    }
    .nu-timeline-body {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* Action bar */
    .nu-action-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 26px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 13px 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* Footer */
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 68px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-wrap { padding: 40px 20px 60px; }
      .nu-property-address { font-size: 1.35rem; }
      .nu-property-hero-top { padding: 22px; }
      .nu-stat { border-right: none; }
      .nu-section-title { font-size: 1.35rem; }
      .nu-action-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-step, .nu-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-bar { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF"/>
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <div class="nu-action-banner-icon">!</div>
        <div class="nu-action-banner-text">
          <div class="nu-action-label">reMarkable Action Item · 2026-04-23</div>
          <div class="nu-action-title">Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods</div>
        </div>
      </div>

      <!-- PROPERTY HERO -->
      <section class="nu-property-hero">
        <div class="nu-property-hero-top">
          <div class="nu-property-address">4505 Buttewoods</div>
          <div class="nu-property-sub">7,098 sq ft private estate · Target acquisition</div>
        </div>
        <div class="nu-property-grid">
          <div class="nu-stat">
            <div class="nu-stat-value">7,098</div>
            <div class="nu-stat-label">Square Feet</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">Estate</div>
            <div class="nu-stat-label">Property Class</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">Direct</div>
            <div class="nu-stat-label">Negotiation Path</div>
          </div>
          <div class="nu-stat">
            <div class="nu-stat-value">30-Day</div>
            <div class="nu-stat-label">Target Close Window</div>
          </div>
        </div>
      </section>

      <!-- STRATEGY OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title">Negotiation <span>Strategy</span></h2>
        <p class="nu-section-sub">A disciplined, step-by-step approach — anchored in verified comparable sales, measured offers, and clear walk-away terms. No emotion at the table; every number is defensible.</p>

        <div class="nu-steps">
          <div class="nu-step">
            <h4>Pull the Facts Before the First Call</h4>
            <p>Order the title abstract, verify current tax assessment, confirm seller of record, and gather three comparable sales within one mile of 4505 Buttewoods closed in the last twelve months. No conversations with the seller until these numbers are in hand.</p>
          </div>
          <div class="nu-step">
            <h4>Confirm Seller Motivation</h4>
            <p>A short, direct call or letter to the owner — introduce yourself, state interest, and ask one question: what is the seller's timeline? Motivation determines price; price does not determine motivation.</p>
          </div>
          <div class="nu-step">
            <h4>Open Below Appraisal, Anchor With Reason</h4>
            <p>First offer anchors the conversation. Open 8–12% below fair market value with a written justification tied to comparable sales and any deferred maintenance noted during walkthrough. Never offer a round number.</p>
          </div>
          <div class="nu-step">
            <h4>Negotiate Terms, Not Just Price</h4>
            <p>Close date, earnest money, inspection period, contingency waivers, and included fixtures all carry dollar value. Flex on terms to hold firm on price where possible.</p>
          </div>
          <div class="nu-step">
            <h4>Document Every Counter in Writing</h4>
            <p>Every counteroffer goes through the attorney or agent on paper or email — never verbal-only. Same day written confirmation of every conversation. If it is not written, it did not happen.</p>
          </div>
          <div class="nu-step">
            <h4>Walk Away Ready Means Walk Away Willing</h4>
            <p>Pre-decide the ceiling price before the first counter lands. Write it down. If the seller crosses it, exit graciously and leave the door open for a later return.</p>
          </div>
        </div>
      </section>

      <!-- PRICE LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Price <span>Framework</span></h2>
        <p class="nu-section-sub">Fill exact dollar figures after comparable-sales analysis is complete. This ladder structures the conversation — opening offer, target, and ceiling all decided before the seller hears a number.</p>

        <div class="nu-ladder">
          <div class="nu-ladder-row">
            <div class="nu-ladder-tier">Opening Offer</div>
            <div class="nu-ladder-desc">8–12% below verified fair market value. Anchored with comparable sales sheet attached to offer.</div>
            <div class="nu-ladder-amount">Set pre-call</div>
          </div>
          <div class="nu-ladder-row is-target">
            <div class="nu-ladder-tier">Target Price</div>
            <div class="nu-ladder-desc">The number the deal closes at if both sides negotiate in good faith. Based on appraised value less reasonable adjustments.</div>
            <div class="nu-ladder-amount">Set pre-call</div>
          </div>
          <div class="nu-ladder-row">
            <div class="nu-ladder-tier">Stretch Price</div>
            <div class="nu-ladder-desc">Acceptable if — and only if — the seller concedes terms (extended close, furniture included, no inspection contingency relief).</div>
            <div class="nu-ladder-amount">Set pre-call</div>
          </div>
          <div class="nu-ladder-row is-walk">
            <div class="nu-ladder-tier">Walk Price</div>
            <div class="nu-ladder-desc">Ceiling. One dollar over this number and the deal is dead. This decision is made in writing before negotiation begins and does not move under pressure.</div>
            <div class="nu-ladder-amount">Set pre-call</div>
          </div>
        </div>

        <div class="nu-callout">
          <strong>Discipline note:</strong> The walk price must be committed to paper before any negotiation begins. In a live conversation, the seller's counter always sounds reasonable. The pre-committed ceiling is the only thing standing between a good deal and a compromise you will regret in ninety days.
        </div>
      </section>

      <!-- DUE DILIGENCE + CONTACTS -->
      <section class="nu-section nu-two-col">
        <div class="nu-card">
          <h3>Due Diligence Pull List</h3>
          <ul>
            <li>Current deed and title history — last three transfers</li>
            <li>County tax card and assessment trend (last 5 years)</li>
            <li>Confirmed lot size, zoning, and any restrictive covenants</li>
            <li>Three arms-length comparable sales within one mile, last 12 months</li>
            <li>Any pending liens, judgments, or mechanic's claims</li>
            <li>Septic, well, and utility connection documentation</li>
            <li>Survey of record — note any encroachments or easements</li>
            <li>Permit history — additions, renovations, and code compliance</li>
          </ul>
        </div>

        <div class="nu-card">
          <h3>Transaction Team</h3>
          <dl class="nu-kv">
            <dt>Buyer Principal</dt>
            <dd>Aaron C. Norris</dd>

            <dt>Closing Attorney</dt>
            <dd>Confirm selection before first offer</dd>

            <dt>Title Company</dt>
            <dd>To be selected — buyer's choice</dd>

            <dt>Inspector</dt>
            <dd>Licensed, bonded, full-report format</dd>

            <dt>Lender / Capital</dt>
            <dd>Pre-confirm funds or pre-approval letter in hand before opening offer</dd>

            <dt>Surveyor</dt>
            <dd>On standby post-contract</dd>
          </dl>
        </div>
      </section>

      <!-- RISK TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Register</span></h2>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Exposure</th>
              <th>Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Undisclosed liens or title defects on a 7,000+ sq ft estate</td>
              <td><span class="nu-pill high">High</span></td>
              <td>Title search ordered before earnest money deposit. Owner's policy mandatory at close.</td>
            </tr>
            <tr>
              <td>Deferred maintenance hidden from standard walk-through</td>
              <td><span class="nu-pill high">High</span></td>
              <td>Full inspection contingency — roof, foundation, HVAC, electrical, plumbing, septic/well. No waiver.</td>
            </tr>
            <tr>
              <td>Seller counters above written walk price</td>
              <td><span class="nu-pill med">Medium</span></td>
              <td>Pre-committed walk-away decision. Exit graciously, leave door open, revisit in 60–90 days.</td>
            </tr>
            <tr>
              <td>Appraisal comes in below contract price</td>
              <td><span class="nu-pill med">Medium</span></td>
              <td>Appraisal contingency written into offer. Renegotiate or walk.</td>
            </tr>
            <tr>
              <td>Unexpected zoning, easement, or HOA restriction on use</td>
              <td><span class="nu-pill med">Medium</span></td>
              <td>Zoning verification and survey review during due diligence window. Buyer's attorney issues written opinion.</td>
            </tr>
            <tr>
              <td>Emotional attachment shifts decision making mid-negotiation</td>
              <td><span class="nu-pill low">Low</span></td>
              <td>Decisions made in writing before each call. No verbal commitments. Sleep on any price above target.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CHECKLIST + TIMELINE -->
      <section class="nu-section nu-two-col">
        <div>
          <h2 class="nu-section-title">Pre-Call <span>Checklist</span></h2>
          <p class="nu-section-sub">Complete every item before dialing the seller.</p>
          <div class="nu-check">
            <label><input type="checkbox"> Three comparable sales pulled, printed, and annotated</label>
            <label><input type="checkbox"> Current tax card and assessment trend documented</label>
            <label><input type="checkbox"> Title preliminary check ordered</label>
            <label><input type="checkbox"> Opening, target, stretch, and walk prices written down and signed</label>
            <label><input type="checkbox"> Funds or pre-approval confirmed in writing</label>
            <label><input type="checkbox"> Closing attorney and title company identified</label>
            <label><input type="checkbox"> First-call script rehearsed — one question, three follow-ups</label>
            <label><input type="checkbox"> Earnest money amount and holder pre-decided</label>
          </div>
        </div>

        <div>
          <h2 class="nu-section-title">Negotiation <span>Timeline</span></h2>
          <p class="nu-section-sub">Target window from first contact to closing table — roughly 30 to 45 days.</p>
          <div class="nu-timeline">
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Days 1–3 · Preparation</div>
              <div class="nu-timeline-body">Pull comps, title, and tax records. Confirm funding. Commit price ladder to paper.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Day 4 · First Contact</div>
              <div class="nu-timeline-body">Direct letter or call to seller. One question: timeline and motivation.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Days 5–10 · Walk-through &amp; Opening Offer</div>
              <div class="nu-timeline-body">On-site visit, take notes on deferred maintenance. Submit written opening offer with comp-sheet justification.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Days 10–20 · Counter Cycle</div>
              <div class="nu-timeline-body">Two to three rounds of counters. Flex on terms to hold price. Every counter documented in writing.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Days 20–35 · Contract &amp; Inspection</div>
              <div class="nu-timeline-body">Binding contract, earnest money deposit, inspection window, appraisal ordered.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Days 35–45 · Close</div>
              <div class="nu-timeline-body">Title clear, financing final, walk-through complete, funds to attorney trust, deed recorded.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTION BAR -->
      <div class="nu-action-bar">
        <a class="nu-btn-primary" href="tel:2055001343">Call Aaron · 205-500-1343</a>
        <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=Buttewoods%20Estate%20%E2%80%94%204505%20Negotiation">Email Aaron</a>
        <a class="nu-btn-secondary" href="javascript:window.print()">Print Action Plan</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal action plan · 4505 Buttewoods acquisition · Generated 2026-04-23
    </div>
  </footer>

</body>
</html>