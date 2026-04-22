<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — $900,000 Offer on 4505 Butteword — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0b7a3b;
      --nu-warning: #b8860b;
      --nu-alert: #a02020;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 60px 60px, 80px 80px;
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* DOC META */
    .doc-meta {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      margin-bottom: 40px;
      border-radius: 0 6px 6px 0;
    }
    .doc-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 32px;
      font-size: 0.92rem;
    }
    .doc-meta-item { display: flex; gap: 8px; }
    .doc-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.78rem;
      padding-top: 2px;
    }
    .doc-meta-value { color: var(--nu-dark-text); font-weight: 400; }

    /* TITLE */
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 780px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin: 40px 0 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* EXEC SUMMARY */
    .exec-summary {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8f6ff 100%);
      border: 1px solid #c9d9ff;
      border-radius: 10px;
      padding: 28px 32px;
      margin: 20px 0 10px;
    }
    .exec-summary h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .exec-summary p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .exec-summary p:last-child { margin-bottom: 0; }
    .exec-summary strong { color: var(--nu-blue); font-weight: 900; }

    /* NUMBER ROW — price points */
    .price-points {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin: 24px 0 10px;
    }
    .price-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .price-card.walk   { border-top-color: var(--nu-alert); }
    .price-card.target { border-top-color: var(--nu-success); }
    .price-card.open   { border-top-color: var(--nu-blue); }
    .price-card.ceiling { border-top-color: var(--nu-warning); }
    .price-label {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .price-value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-dark-text);
      line-height: 1;
      margin-bottom: 6px;
    }
    .price-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 16px 0;
    }
    @media (max-width: 820px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card h4.leverage { color: var(--nu-success); border-bottom-color: var(--nu-success); }
    .nu-card h4.risk { color: var(--nu-alert); border-bottom-color: var(--nu-alert); }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      top: -2px;
    }
    .nu-card ul.leverage li::before { color: var(--nu-success); }
    .nu-card ul.risk li::before { color: var(--nu-alert); }

    /* TIMELINE */
    .timeline {
      position: relative;
      margin: 20px 0 10px;
      padding-left: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: 14px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-step {
      position: relative;
      padding: 0 0 22px 44px;
    }
    .timeline-step:last-child { padding-bottom: 0; }
    .timeline-step::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.08);
    }
    .timeline-head {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 4px;
      flex-wrap: wrap;
    }
    .timeline-step h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
    }
    .timeline-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 3px 10px;
      border-radius: 12px;
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .timeline-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .timeline-step ul {
      list-style: none;
      padding-left: 0;
      margin-top: 6px;
    }
    .timeline-step ul li {
      padding-left: 18px;
      position: relative;
      font-size: 0.92rem;
      margin-bottom: 4px;
    }
    .timeline-step ul li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* BADGE ROW (tactics) */
    .tactics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
      margin: 18px 0;
    }
    .tactic-badge {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 20px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .tactic-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-cyan);
      line-height: 1;
      flex-shrink: 0;
      width: 32px;
    }
    .tactic-body h5 {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-white);
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .tactic-body p {
      font-size: 0.86rem;
      color: rgba(255,255,255,0.82);
      line-height: 1.5;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 8px;
      overflow: hidden;
      font-size: 0.95rem;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.82rem;
    }
    .nu-table tbody td {
      padding: 13px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td strong { color: var(--nu-blue); font-weight: 900; }

    /* SCRIPT / TALK TRACK */
    .script-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 0 8px 8px 0;
      padding: 22px 26px;
      margin: 14px 0;
    }
    .script-block h5 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .script-block blockquote {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
      padding-left: 14px;
      border-left: 2px solid var(--nu-cyan);
    }
    .script-block blockquote + blockquote { margin-top: 10px; }

    /* RED LINES */
    .redline {
      background: #fff5f5;
      border: 1px solid #f4c7c7;
      border-radius: 8px;
      padding: 18px 22px;
      margin: 14px 0;
    }
    .redline h4 {
      color: var(--nu-alert);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .redline ul {
      list-style: none;
      padding: 0;
    }
    .redline ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    .redline ul li::before {
      content: '✕';
      position: absolute;
      left: 0;
      color: var(--nu-alert);
      font-weight: 900;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      margin: 14px 0;
    }
    .checklist ul { list-style: none; padding: 0; }
    .checklist li {
      position: relative;
      padding: 6px 0 6px 30px;
      font-size: 0.96rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .callout {
      display: flex;
      gap: 16px;
      background: linear-gradient(135deg, #fffbea 0%, #fff6d9 100%);
      border: 1px solid #e8d480;
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 0 8px 8px 0;
      padding: 18px 22px;
      margin: 16px 0;
    }
    .callout-icon {
      font-weight: 900;
      color: var(--nu-accent-gold);
      font-size: 1.3rem;
      line-height: 1.4;
      flex-shrink: 0;
    }
    .callout-body {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .callout-body strong { color: var(--nu-accent-gold); font-weight: 900; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.9);
      padding: 46px 40px;
      text-align: center;
      font-family: var(--font-primary);
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
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
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      margin-top: 14px;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 30px; }
      .page-title { font-size: 1.8rem; }
      .doc-meta-row { gap: 12px 20px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .script-block, .redline, .checklist, .exec-summary, .price-card { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
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
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="doc-meta">
        <div class="doc-meta-row">
          <div class="doc-meta-item">
            <span class="doc-meta-label">Document</span>
            <span class="doc-meta-value">Negotiation Strategy Brief</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Prepared For</span>
            <span class="doc-meta-value">Aaron C. Norris</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Date</span>
            <span class="doc-meta-value">April 22, 2026</span>
          </div>
          <div class="doc-meta-item">
            <span class="doc-meta-label">Classification</span>
            <span class="doc-meta-value">Confidential — Internal</span>
          </div>
        </div>
      </div>

      <h1 class="page-title">Negotiation Strategy — <span>$900,000 Offer</span><br>4505 Butteword Estate</h1>
      <p class="page-subtitle">
        A complete strategy brief for preparing and presenting a $900,000 offer on the 7,098 sq ft estate
        at 4505 Butteword. Covers price anchoring, leverage inventory, the offer presentation sequence,
        counter-response decision points, and walk-away discipline.
      </p>

      <!-- EXEC SUMMARY -->
      <div class="exec-summary">
        <h3>Executive Summary</h3>
        <p>
          The objective is to secure the 4505 Butteword estate at a final all-in price at or below <strong>$960,000</strong>,
          opening at <strong>$900,000</strong> with a well-documented, fully-funded, short-contingency offer. The seller
          values certainty of close and timeline control more than the last $25,000 on the table — our posture is
          calm, prepared, and willing to walk.
        </p>
        <p>
          The structure below is built to give the seller three reasons to accept at our target number: (1) a clean,
          non-contingent offer on financing, (2) a tight 21-day close, and (3) documented concessions (furniture,
          closing cost splits, rent-back) that move value without raising price. <strong>Walk-away price is firm at $1,000,000.</strong>
        </p>
      </div>

      <!-- PRICE ANCHORS -->
      <h2 class="nu-section-title">Price <span>Anchors &amp; Decision Points</span></h2>
      <div class="price-points">
        <div class="price-card open">
          <div class="price-label">Opening Offer</div>
          <div class="price-value">$900,000</div>
          <div class="price-sub">Anchored below list; credible not insulting</div>
        </div>
        <div class="price-card target">
          <div class="price-label">Target Close</div>
          <div class="price-value">$945,000</div>
          <div class="price-sub">Expected settlement zone</div>
        </div>
        <div class="price-card ceiling">
          <div class="price-label">Hard Ceiling</div>
          <div class="price-value">$960,000</div>
          <div class="price-sub">Only with seller-paid concessions</div>
        </div>
        <div class="price-card walk">
          <div class="price-label">Walk-Away</div>
          <div class="price-value">$1,000,000</div>
          <div class="price-sub">Non-negotiable; decision made in advance</div>
        </div>
      </div>

      <div class="callout">
        <div class="callout-icon">§</div>
        <div class="callout-body">
          <strong>Pricing discipline:</strong> These numbers are decided before the conversation begins. In the room,
          do not re-calculate. Do not negotiate against yourself. If the seller counters above $1,000,000, the answer
          is a respectful, unhurried "I appreciate it, but that's past where we can go" — and you leave.
        </div>
      </div>

      <!-- LEVERAGE / RISK -->
      <h2 class="nu-section-title">Leverage <span>Inventory</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h4 class="leverage">Our Leverage</h4>
          <ul class="leverage">
            <li><strong>Fully funded offer.</strong> No financing contingency. Proof of funds letter ready to attach.</li>
            <li><strong>Short close window.</strong> 21-day close; seller gets certainty and liquidity fast.</li>
            <li><strong>Flexible possession.</strong> Offer of 30–60 day seller rent-back at $1/month — costs us nothing, gives them move-out runway.</li>
            <li><strong>Clean inspection posture.</strong> Willing to waive repair negotiation under a capped credit (e.g., $10k), not re-open the price.</li>
            <li><strong>No contingent sale.</strong> We are not selling another property to buy this one.</li>
            <li><strong>Documented comps.</strong> Three comparable sales within 0.5 miles supporting $870–$950 range.</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4 class="risk">Seller Leverage &amp; Our Counters</h4>
          <ul class="risk">
            <li><strong>Unique property:</strong> 7,098 sq ft estate has limited direct comps. <em>Counter:</em> lead with cost-per-sq-ft of nearest comps and time-on-market risk.</li>
            <li><strong>Multiple interested parties (claimed):</strong> Assume real until proven otherwise. <em>Counter:</em> emphasize our certainty-to-close, not price.</li>
            <li><strong>Emotional attachment:</strong> Long-held family home. <em>Counter:</em> lead the relationship, not the transaction.</li>
            <li><strong>Seller's agent pushing "list price":</strong> <em>Counter:</em> "We're not buying the list; we're buying the house. Here's what the comps say."</li>
            <li><strong>Time on our side:</strong> Longer on market = weaker seller position. Patience is a weapon.</li>
          </ul>
        </div>
      </div>

      <!-- OFFER STRUCTURE -->
      <h2 class="nu-section-title">Offer <span>Structure</span></h2>
      <table class="nu-table">
        <thead>
          <tr>
            <th style="width:26%">Term</th>
            <th style="width:32%">Opening Position</th>
            <th style="width:42%">Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Purchase Price</strong></td>
            <td>$900,000</td>
            <td>Below list but comp-defensible. Establishes the anchor for the whole negotiation.</td>
          </tr>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>$25,000 (2.8%)</td>
            <td>Above-typical earnest signals seriousness without over-committing if we walk post-inspection.</td>
          </tr>
          <tr>
            <td><strong>Financing Contingency</strong></td>
            <td>None (cash or pre-cleared)</td>
            <td>This is the single largest lever. Removing this concern is worth $20–30k to most sellers.</td>
          </tr>
          <tr>
            <td><strong>Inspection Contingency</strong></td>
            <td>10 days, capped credit</td>
            <td>Short and bounded. Seller knows we won't re-open price on cosmetic items.</td>
          </tr>
          <tr>
            <td><strong>Appraisal Contingency</strong></td>
            <td>Waived or gap-covered to $20k</td>
            <td>Removes the #2 deal-killer on high-dollar homes. Protect our position with a cap.</td>
          </tr>
          <tr>
            <td><strong>Close Timeline</strong></td>
            <td>21 calendar days</td>
            <td>Fast close = certainty; certainty = price concession from the seller side.</td>
          </tr>
          <tr>
            <td><strong>Possession</strong></td>
            <td>60-day seller rent-back at $1/month</td>
            <td>Costs us nothing; saves the seller a stressful move and two mortgage payments.</td>
          </tr>
          <tr>
            <td><strong>Closing Costs</strong></td>
            <td>Each party pays own</td>
            <td>Standard; hold in reserve as a later-stage giveback if needed.</td>
          </tr>
          <tr>
            <td><strong>Offer Expiration</strong></td>
            <td>48 hours</td>
            <td>Creates urgency without pressure. Long enough to review, short enough to prevent shopping.</td>
          </tr>
        </tbody>
      </table>

      <!-- TACTICS -->
      <h2 class="nu-section-title">Core <span>Negotiation Tactics</span></h2>
      <div class="tactics-grid">
        <div class="tactic-badge">
          <div class="tactic-num">1</div>
          <div class="tactic-body">
            <h5>Anchor First, Anchor Hard</h5>
            <p>First number spoken frames the deal. Open at $900,000 with written comps — not with an apology.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">2</div>
          <div class="tactic-body">
            <h5>Separate Price From Terms</h5>
            <p>Trade terms (possession, close date, credits) before giving price. Terms cost less than cash.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">3</div>
          <div class="tactic-body">
            <h5>Decreasing Concession Sizes</h5>
            <p>Move $30k, then $15k, then $7k, then $3k. The shrinking gap signals you're at your number.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">4</div>
          <div class="tactic-body">
            <h5>Silence After the Ask</h5>
            <p>State the offer. Stop talking. Whoever speaks next loses ground. Count to thirty internally.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">5</div>
          <div class="tactic-body">
            <h5>Name the Seller's Concern</h5>
            <p>"I know you're worried about the close actually happening." Label it. Then solve it with terms.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">6</div>
          <div class="tactic-body">
            <h5>Never Negotiate Against Yourself</h5>
            <p>If no counter comes back in 24 hours, do not raise the offer. Ask instead: "What would get a yes?"</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">7</div>
          <div class="tactic-body">
            <h5>Walk-Away Is a Posture, Not a Threat</h5>
            <p>Demonstrate willingness through calm, written correspondence and a documented alternative.</p>
          </div>
        </div>
        <div class="tactic-badge">
          <div class="tactic-num">8</div>
          <div class="tactic-body">
            <h5>Trade, Never Gift</h5>
            <p>Every concession we make is matched by one we receive. "I can do X if you can do Y."</p>
          </div>
        </div>
      </div>

      <!-- SEQUENCE -->
      <h2 class="nu-section-title">Presentation <span>Sequence</span></h2>
      <div class="timeline">

        <div class="timeline-step">
          <div class="timeline-head">
            <h4>Phase 1 — Pre-Offer Positioning</h4>
            <span class="timeline-tag">Days –3 to 0</span>
          </div>
          <p>Set the table before the offer lands. The seller should already know us as the serious buyer.</p>
          <ul>
            <li>Confirm proof of funds letter, dated within 7 days</li>
            <li>Pull three written comps from within 0.5 miles and past 6 months</li>
            <li>Walk the property a second time; document any condition issues with photos</li>
            <li>Warm call to listing agent: "We're preparing a serious offer this week. What timeline and terms matter most to your seller?"</li>
          </ul>
        </div>

        <div class="timeline-step">
          <div class="timeline-head">
            <h4>Phase 2 — Offer Delivery</h4>
            <span class="timeline-tag">Day 0</span>
          </div>
          <p>Submit the full written offer with a short cover letter from Aaron. Human before numbers.</p>
          <ul>
            <li>Written offer at $900,000 with full term sheet</li>
            <li>One-page cover letter: who we are, why this house, commitment to close clean</li>
            <li>48-hour response window clearly stated</li>
            <li>No verbal offer first — go written to avoid being shopped</li>
          </ul>
        </div>

        <div class="timeline-step">
          <div class="timeline-head">
            <h4>Phase 3 — First Counter</h4>
            <span class="timeline-tag">Days 1–2</span>
          </div>
          <p>Expect a counter in the $985–$1,010k range. Do not react emotionally. Respond inside 24 hours.</p>
          <ul>
            <li>If counter ≤ $985k: raise to $930k with 60-day rent-back reaffirmed</li>
            <li>If counter $985k–$1,010k: raise to $920k; ask what matters most beyond price</li>
            <li>If counter &gt; $1,010k: respond at $915k with a note that we are one of several properties under consideration</li>
          </ul>
        </div>

        <div class="timeline-step">
          <div class="timeline-head">
            <h4>Phase 4 — Second Counter</h4>
            <span class="timeline-tag">Days 3–5</span>
          </div>
          <p>This is where most deals actually close. Narrow the gap with terms, not just price.</p>
          <ul>
            <li>Bring the price up in smaller increments ($10–15k)</li>
            <li>Offer to pay a defined closing-cost item as the concession that moves them</li>
            <li>Restate the 21-day close and $25k earnest as certainty they won't get elsewhere</li>
            <li>If stuck, introduce the "best-and-final" frame from our side, not theirs</li>
          </ul>
        </div>

        <div class="timeline-step">
          <div class="timeline-head">
            <h4>Phase 5 — Close or Walk</h4>
            <span class="timeline-tag">Days 5–7</span>
          </div>
          <p>Agree in writing at or below $960,000, or step back cleanly.</p>
          <ul>
            <li>Final price must be documented in a signed addendum, not a text message</li>
            <li>If we walk: written note to the agent keeping the door open ("If circumstances change, we remain interested at the terms previously discussed")</li>
            <li>Do not re-engage within 10 days; let the market pressure them</li>
          </ul>
        </div>

      </div>

      <!-- TALK TRACKS -->
      <h2 class="nu-section-title">Talk <span>Tracks &amp; Scripts</span></h2>

      <div class="script-block">
        <h5>Opening the Offer (to the listing agent)</h5>
        <blockquote>
          "I want to be straightforward with you. We love the property, we're fully funded, and we can close in
          twenty-one days. Our number is nine hundred thousand. That's not a throwaway — it's where the comps support
          the house, and we can back it up in writing. If that doesn't work for your seller, we'd rather know now than
          chase a number we can't defend."
        </blockquote>
      </div>

      <div class="script-block">
        <h5>Responding to a High Counter</h5>
        <blockquote>
          "I appreciate them coming back. We're still a ways apart on price, and I don't want to waste anyone's time
          pretending otherwise. Before we talk dollars, help me understand what matters most to your seller — timeline,
          possession, certainty? If we can solve one of those cleanly, I have some room to move."
        </blockquote>
      </div>

      <div class="script-block">
        <h5>When the Agent Invokes "Other Offers"</h5>
        <blockquote>
          "That's good to hear — means your seller has options, and so do we. I'll tell you what we bring that those
          offers probably don't: cash, twenty-one days to close, and no appraisal risk. If the numbers are close, that's
          worth more than the last ten thousand dollars. If they're not close, we'll wish you well."
        </blockquote>
      </div>

      <div class="script-block">
        <h5>The Walk-Away</h5>
        <blockquote>
          "I respect where they are. We're at our number. If anything changes on their end, we'd be glad to pick it
          back up. Until then, thank you for your time, and please thank the seller for considering us."
        </blockquote>
        <blockquote>
          Short. Calm. No ultimatum. Leave the door open — the next call is often theirs.
        </blockquote>
      </div>

      <!-- RED LINES -->
      <h2 class="nu-section-title">Red <span>Lines — Do Not Cross</span></h2>
      <div class="redline">
        <h4>Discipline Rules</h4>
        <ul>
          <li>Never go above $1,000,000 — decision is already made before the conversation</li>
          <li>Never waive an inspection on a 7,098 sq ft home. Cap it, don't eliminate it.</li>
          <li>Never verbally commit to a number you haven't put in writing</li>
          <li>Never raise your own offer twice in a row without a corresponding seller move</li>
          <li>Never negotiate against the listing agent's narrative — only against the signed counter</li>
          <li>Never let the seller's timeline become urgency pressure on our side</li>
          <li>Never agree to "take this to the seller and see" without a stated expiration on our offer</li>
        </ul>
      </div>

      <!-- PRE-MEETING CHECKLIST -->
      <h2 class="nu-section-title">Pre-Meeting <span>Checklist</span></h2>
      <div class="checklist">
        <ul>
          <li>Proof of funds letter dated within the last 7 days, on bank letterhead</li>
          <li>Three comparable sales printed, with cost-per-sq-ft calculated for each</li>
          <li>Title company preselected and on standby for the 21-day close</li>
          <li>Pre-inspection or inspector pre-scheduled for within 72 hours of acceptance</li>
          <li>Second walkthrough photos, documenting any visible condition concerns</li>
          <li>Written offer draft reviewed by legal counsel; signature-ready PDF prepared</li>
          <li>Personal cover letter from Aaron — one page, handwritten signature</li>
          <li>Walk-away price confirmed in writing to self: $1,000,000</li>
          <li>Calendar held open for 48-hour offer response window</li>
          <li>Alternative property identified — so we are negotiating from abundance, not scarcity</li>
        </ul>
      </div>

      <!-- CLOSING -->
      <h2 class="nu-section-title">Closing <span>Principles</span></h2>
      <div class="two-col">
        <div class="nu-card">
          <h4>What Wins This Deal</h4>
          <ul>
            <li>Preparation that is visible to the other side — paperwork, numbers, timeline</li>
            <li>A calm posture that communicates "we don't need this house; we want it"</li>
            <li>Giving the seller a story they can tell themselves about why they accepted</li>
            <li>Trading terms that cost us nothing for price concessions that cost them real dollars</li>
            <li>Silence used as a tool, not a gap in the conversation</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4 class="risk">What Loses This Deal</h4>
          <ul class="risk">
            <li>Emotional attachment to the property bleeding into the number</li>
            <li>Chasing the seller's counter upward in large, predictable steps</li>
            <li>Starting the negotiation verbally before the written offer is in hand</li>
            <li>Treating the walk-away price as aspirational instead of absolute</li>
            <li>Letting the listing agent set the pace of the conversation</li>
          </ul>
        </div>
      </div>

      <div class="callout">
        <div class="callout-icon">→</div>
        <div class="callout-body">
          <strong>Next action:</strong> Confirm proof-of-funds letter is dated within 7 days, finalize the three
          comparable sales, and place the first warm call to the listing agent before close of business. Target offer
          delivery: within 72 hours of checklist completion.
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
      Confidential negotiation brief — prepared April 22, 2026 — for internal use only
    </div>
  </footer>

</body>
</html>