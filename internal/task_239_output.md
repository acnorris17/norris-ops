<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Property Negotiation Brief — 4505 Buttewoods Estate — Norris Utilities®</title>
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
      --nu-deep-blue: #0033CC;
      --nu-mid-blue: #0066EE;
      --nu-light-blue: #00AAFF;
      --nu-header-start: #0a0e5c;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* HEADER — gradient with phoenix watermark */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, var(--nu-header-start) 0%, var(--nu-deep-blue) 25%, var(--nu-mid-blue) 55%, var(--nu-light-blue) 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 100px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 90%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 22 L72 12 L62 28 L82 22 L66 38 L78 52 L56 42 L50 62 L44 42 L22 52 L34 38 L18 22 L38 28 L28 12 L45 22 Z M50 58 L52 72 L60 67 L55 78 L50 96 L45 78 L40 67 L48 72 Z' fill='white'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.07;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.4em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 20px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(6,208,255,0.5);
      border-radius: 2px;
    }

    /* WHITE CHEVRON TRANSITION (apex 38% from left) */
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOCUMENT META BAR */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .doc-meta-item { padding: 4px 12px; }
    .doc-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.7rem;
      display: block;
      margin-bottom: 2px;
    }
    .doc-meta-value { font-weight: 400; }

    /* HEADLINE BLOCK */
    .doc-headline {
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .doc-headline h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .doc-headline h1 .accent { color: var(--nu-blue); }
    .doc-headline .subtitle {
      font-size: 1.15rem;
      font-weight: 300;
      color: var(--nu-body-text);
      line-height: 1.5;
      max-width: 800px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 50px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-deep-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY SNAPSHOT GRID */
    .snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    .snapshot-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 20px;
      border-radius: 4px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .snapshot-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,255,0.08);
    }
    .snapshot-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .snapshot-value {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .snapshot-sub {
      font-size: 0.8rem;
      color: var(--nu-body-text);
    }

    /* INFO TABLE */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      overflow: hidden;
    }
    .info-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .info-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .info-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 30%;
    }

    /* TWO-COLUMN LAYOUT */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-deep-blue);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* CHEVRON BADGES — strategy items */
    .strategy-list { padding: 0; list-style: none; }
    .strategy-item {
      display: flex;
      align-items: flex-start;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 32px 18px 22px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .strategy-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }
    .strategy-text { padding-top: 4px; }
    .strategy-text strong {
      display: block;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
      font-size: 0.95rem;
    }

    /* OFFER LADDER */
    .offer-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      margin: 20px 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .offer-tier {
      padding: 24px 20px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
      position: relative;
    }
    .offer-tier:last-child { border-right: none; }
    .offer-tier.opening { background: var(--nu-light-gray); }
    .offer-tier.target {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-deep-blue) 100%);
      color: var(--nu-white);
    }
    .offer-tier.walkaway { background: var(--nu-white); }
    .offer-tier-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
      opacity: 0.85;
    }
    .offer-tier-value {
      font-size: 1.7rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .offer-tier-note {
      font-size: 0.75rem;
      opacity: 0.85;
      line-height: 1.4;
    }
    .offer-tier.target .offer-tier-label { color: var(--nu-cyan); opacity: 1; }

    /* TIMELINE */
    .timeline {
      list-style: none;
      padding: 0;
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
      padding: 0 0 22px 44px;
    }
    .timeline li::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 5px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      z-index: 1;
    }
    .timeline-day {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 4px;
      display: block;
    }
    .timeline-action {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      margin: 24px 0;
      border-radius: 0 6px 6px 0;
    }
    .callout-title {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout-body {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 16px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      font-size: 0.92rem;
      border-left: 3px solid var(--nu-cyan);
    }
    .checklist li::before {
      content: '☐';
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      margin-right: 12px;
      line-height: 1;
    }

    /* CONTACT BLOCK */
    .contact-block {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
      margin-top: 16px;
    }
    .contact-card {
      padding: 18px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .contact-card-name {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-card-role {
      font-size: 0.8rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .contact-card-detail {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #00004d 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-white);
      margin-bottom: 6px;
      letter-spacing: 0.05em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.5;
    }
    .nu-footer-confidential {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
      margin-top: 14px;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .two-col { grid-template-columns: 1fr; }
      .offer-ladder { grid-template-columns: 1fr; }
      .offer-tier { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .offer-tier:last-child { border-bottom: none; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 80px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px; }
      .doc-headline h1 { font-size: 1.85rem; }
      .strategy-item { clip-path: none; border-radius: 6px; padding: 18px 22px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .snapshot-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .strategy-item { background: #1a1a3e !important; -webkit-print-color-adjust: exact; }
      .offer-tier.target { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-eyebrow">Internal — Negotiation Brief</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META BAR -->
      <div class="doc-meta">
        <div class="doc-meta-item">
          <span class="doc-meta-label">Document</span>
          <span class="doc-meta-value">Property Acquisition Brief</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Prepared For</span>
          <span class="doc-meta-value">Aaron C. Norris</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Source</span>
          <span class="doc-meta-value">reMarkable Action Item</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Date</span>
          <span class="doc-meta-value">April 24, 2026</span>
        </div>
        <div class="doc-meta-item">
          <span class="doc-meta-label">Status</span>
          <span class="doc-meta-value">Active — Negotiation Phase</span>
        </div>
      </div>

      <!-- HEADLINE -->
      <div class="doc-headline">
        <h1><span class="accent">Negotiate</span> Purchase of 7,098 SF Estate at <span class="accent">4505 Buttewoods</span></h1>
        <p class="subtitle">Negotiation playbook, offer ladder, due diligence checklist, and 30-day execution timeline for the Buttewoods Lane estate acquisition.</p>
      </div>

      <!-- SECTION 1: PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="snapshot-grid">
          <div class="snapshot-card">
            <div class="snapshot-label">Address</div>
            <div class="snapshot-value" style="font-size:1.1rem;">4505 Buttewoods Lane</div>
            <div class="snapshot-sub">Birmingham metro area</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Living Area</div>
            <div class="snapshot-value">7,098</div>
            <div class="snapshot-sub">square feet</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Property Class</div>
            <div class="snapshot-value" style="font-size:1.1rem;">Estate</div>
            <div class="snapshot-sub">Residential — luxury tier</div>
          </div>
          <div class="snapshot-card">
            <div class="snapshot-label">Phase</div>
            <div class="snapshot-value" style="font-size:1.1rem;">Negotiation</div>
            <div class="snapshot-sub">Pre-offer or counter</div>
          </div>
        </div>
        <div class="callout">
          <div class="callout-title">Source Reference</div>
          <div class="callout-body">
            This brief was generated from a reMarkable handwritten action item flagged as
            <strong>"urgent"</strong> in the palace-rules tracker. Prior cross-references in
            <em>palace-rules</em> note: <em>"Review and negotiate property purchase at 4505 Buttewoods Lane."</em>
            Treat all figures below as planning anchors — confirm asking price, square footage,
            and seller motivation before final offer.
          </div>
        </div>
      </section>

      <!-- SECTION 2: NEGOTIATION OBJECTIVES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Objectives</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Primary Goal</h3>
            <ul>
              <li>Secure 4505 Buttewoods at a price that produces clear after-repair equity from day one.</li>
              <li>Lock favorable terms on closing date, financing contingency, and earnest money.</li>
              <li>Preserve the right to walk on inspection findings without losing leverage.</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Secondary Goals</h3>
            <ul>
              <li>Identify seller's true motivation (relocation, divorce, estate, downsize).</li>
              <li>Negotiate seller-paid items: home warranty, repair credits, closing costs.</li>
              <li>Establish quiet rapport — no pressure, no apology, no over-reach.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3: PROPERTY DUE DILIGENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Due</span> <span class="rest">Diligence Profile</span></h2>
        <table class="info-table">
          <thead>
            <tr><th>Data Point</th><th>Status / Action</th></tr>
          </thead>
          <tbody>
            <tr><td>Verified square footage</td><td>Confirm 7,098 SF via tax records and appraiser measurement</td></tr>
            <tr><td>Lot size &amp; survey</td><td>Pull current plat; order new survey if last one &gt; 5 years old</td></tr>
            <tr><td>Year built &amp; major systems</td><td>Identify roof age, HVAC age, water heater, electrical panel</td></tr>
            <tr><td>Tax assessment</td><td>Pull current and 5-year tax history; identify reassessment risk</td></tr>
            <tr><td>Title &amp; liens</td><td>Order preliminary title commitment before contract signing</td></tr>
            <tr><td>Comparable sales</td><td>Pull last 12 months of comps within 1-mile radius, ≥5,500 SF</td></tr>
            <tr><td>Days on market</td><td>Longer DOM = stronger buyer leverage</td></tr>
            <tr><td>Seller disclosures</td><td>Request full Alabama property disclosure form</td></tr>
            <tr><td>HOA / restrictions</td><td>Confirm HOA dues, special assessments, deed restrictions</td></tr>
            <tr><td>Inspection scope</td><td>General + termite/wood-destroying organism + radon + sewer scope</td></tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 4: OFFER LADDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder Framework</span></h2>
        <p style="margin-bottom: 12px; color: var(--nu-body-text);">
          Use this three-tier framework once a verified asking price is confirmed. Numbers below
          are placeholders for percentages — apply them to the seller's confirmed list price.
        </p>
        <div class="offer-ladder">
          <div class="offer-tier opening">
            <div class="offer-tier-label">Opening Offer</div>
            <div class="offer-tier-value">87–90%</div>
            <div class="offer-tier-note">of asking price<br>Strong but defensible</div>
          </div>
          <div class="offer-tier target">
            <div class="offer-tier-label">Target Close</div>
            <div class="offer-tier-value">93–95%</div>
            <div class="offer-tier-note">of asking price<br>Plus seller concessions</div>
          </div>
          <div class="offer-tier walkaway">
            <div class="offer-tier-label">Walk-Away</div>
            <div class="offer-tier-value">98%</div>
            <div class="offer-tier-note">of asking price<br>Above this — pass</div>
          </div>
        </div>
        <div class="callout">
          <div class="callout-title">Pricing Discipline</div>
          <div class="callout-body">
            The walk-away line is the most important number on this page. Discipline beats
            enthusiasm in every real estate negotiation. If the seller crosses the walk-away
            line, the right move is to close the file and revisit in 30–60 days.
          </div>
        </div>
      </section>

      <!-- SECTION 5: TACTICAL APPROACH -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Tactical</span> <span class="rest">Approach</span></h2>
        <ul class="strategy-list">
          <li class="strategy-item">
            <span class="strategy-num">1</span>
            <div class="strategy-text">
              <strong>Establish Seller Motivation First</strong>
              Before any number is exchanged, learn why they are selling. Estate, relocation,
              divorce, and downsize all command different price elasticity.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">2</span>
            <div class="strategy-text">
              <strong>Anchor With Comparable Sales</strong>
              Open the conversation with three recent comps that justify the opening number.
              Data anchors are harder to dismiss than opinions.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">3</span>
            <div class="strategy-text">
              <strong>Lead With Cash-Equivalent Strength</strong>
              Pre-approval letter on first contact. Strong earnest money. Short inspection window.
              These signal seriousness and earn price flexibility.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">4</span>
            <div class="strategy-text">
              <strong>Use Silence After Counter-Offers</strong>
              Once an offer is on the table, do not negotiate against yourself. Wait the full
              response window. The first party to fill silence usually concedes.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">5</span>
            <div class="strategy-text">
              <strong>Trade Terms for Price When Stuck</strong>
              If the seller will not move on price, trade: faster close, larger earnest money,
              waived contingencies (only when supported by inspection), or shorter due diligence.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">6</span>
            <div class="strategy-text">
              <strong>Re-Negotiate After Inspection</strong>
              Major findings reset the negotiation. Ask for a credit at closing rather than
              pre-close repair work — keeps control of vendor selection and quality.
            </div>
          </li>
          <li class="strategy-item">
            <span class="strategy-num">7</span>
            <div class="strategy-text">
              <strong>Be Prepared to Walk — Visibly</strong>
              The most powerful negotiating posture is genuine willingness to leave. If the
              walk-away line is breached, end the conversation politely and immediately.
            </div>
          </li>
        </ul>
      </section>

      <!-- SECTION 6: 30-DAY TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">30-Day</span> <span class="rest">Execution Timeline</span></h2>
        <ul class="timeline">
          <li>
            <span class="timeline-day">Days 1–3 — Intelligence</span>
            <span class="timeline-action">Pull tax records, title history, plat, MLS history, and comparable sales. Drive the property and the surrounding two blocks at three different times of day.</span>
          </li>
          <li>
            <span class="timeline-day">Days 4–5 — Pre-Approval</span>
            <span class="timeline-action">Confirm financing position with Patrick Lavette at Renasant Bank. Obtain a clean pre-approval letter at the upper bound of the planned offer range.</span>
          </li>
          <li>
            <span class="timeline-day">Days 6–7 — Initial Contact</span>
            <span class="timeline-action">Reach out through listing agent or directly if FSBO. First conversation is information-only — build rapport, ask about timeline, learn motivation. No price discussion.</span>
          </li>
          <li>
            <span class="timeline-day">Days 8–10 — Opening Offer</span>
            <span class="timeline-action">Submit written offer at the opening tier. Include pre-approval, proof of funds for earnest money, and a one-page cover letter (no story, no apology — terms only).</span>
          </li>
          <li>
            <span class="timeline-day">Days 11–14 — Counter Cycle</span>
            <span class="timeline-action">Manage counter-offers. Stay inside the offer ladder. Trade terms for price when stuck. Document every concession in writing.</span>
          </li>
          <li>
            <span class="timeline-day">Days 15–17 — Contract Execution</span>
            <span class="timeline-action">Execute purchase agreement. Open escrow. Wire earnest money. Order title commitment, survey, and inspections.</span>
          </li>
          <li>
            <span class="timeline-day">Days 18–24 — Due Diligence</span>
            <span class="timeline-action">Complete general inspection, termite, radon, sewer scope. Review HOA documents, deed restrictions, and seller disclosures.</span>
          </li>
          <li>
            <span class="timeline-day">Days 25–28 — Re-Negotiation Window</span>
            <span class="timeline-action">Negotiate inspection credits or repair concessions in writing. Decide whether to proceed, request credits, or terminate per inspection contingency.</span>
          </li>
          <li>
            <span class="timeline-day">Days 29–30 — Close Preparation</span>
            <span class="timeline-action">Final walkthrough, closing disclosure review, wire instructions verified by phone, recording instructions confirmed with title company.</span>
          </li>
        </ul>
      </section>

      <!-- SECTION 7: CONTINGENCY CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Contract</span> <span class="rest">Contingency Checklist</span></h2>
        <ul class="checklist">
          <li>Financing contingency (typically 21 days)</li>
          <li>Inspection contingency (10–14 days)</li>
          <li>Appraisal contingency tied to financing</li>
          <li>Title contingency with marketable-title standard</li>
          <li>HOA / CCR review contingency (5 days)</li>
          <li>Seller disclosure review contingency</li>
          <li>Termite / WDO inspection contingency</li>
          <li>Survey contingency for boundary issues</li>
          <li>Insurance binder contingency (flood, hazard)</li>
          <li>Right to re-inspect after seller repairs</li>
        </ul>
      </section>

      <!-- SECTION 8: RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Flags — Walk-Away Triggers</span></h2>
        <div class="two-col">
          <div class="nu-card">
            <h3>Structural &amp; Systems</h3>
            <ul>
              <li>Foundation movement, settling, or active cracks &gt; 1/4 inch</li>
              <li>Roof at end of life with no seller credit</li>
              <li>Major HVAC, plumbing, or electrical replacement needed</li>
              <li>Water intrusion, mold, or unresolved drainage issues</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Title, Legal &amp; Financial</h3>
            <ul>
              <li>Unresolved liens, judgments, or boundary disputes</li>
              <li>HOA in litigation or with pending special assessment</li>
              <li>Easements limiting use of the property</li>
              <li>Permit history showing unpermitted additions</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 9: KEY CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Contacts for This Deal</span></h2>
        <div class="contact-block">
          <div class="contact-card">
            <div class="contact-card-name">Patrick Lavette</div>
            <div class="contact-card-role">Renasant Bank — Financing</div>
            <div class="contact-card-detail">Pre-approval letter, rate lock, and closing coordination.</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-name">Listing Agent / Seller</div>
            <div class="contact-card-role">Confirm and Add</div>
            <div class="contact-card-detail">Pull listing agent name, brokerage, phone, and email before first contact.</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-name">Buyer's Agent (if used)</div>
            <div class="contact-card-role">Confirm and Add</div>
            <div class="contact-card-detail">Decide on representation before first written offer.</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-name">Closing Attorney / Title Co.</div>
            <div class="contact-card-role">Confirm and Add</div>
            <div class="contact-card-detail">Alabama is an attorney-closing state for residential transactions in most counties.</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-name">Home Inspector</div>
            <div class="contact-card-role">Confirm and Add</div>
            <div class="contact-card-detail">Engage a licensed inspector with experience on homes &gt; 5,000 SF.</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-name">Insurance Broker</div>
            <div class="contact-card-role">Confirm and Add</div>
            <div class="contact-card-detail">Bind hazard and flood coverage prior to closing.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 10: NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Immediate</span> <span class="rest">Next Actions</span></h2>
        <ul class="checklist">
          <li>Confirm verified asking price and seller motivation</li>
          <li>Pull tax records and 12-month comps within 1 mile</li>
          <li>Drive the property — exterior and neighborhood walk</li>
          <li>Call Patrick Lavette to refresh pre-approval at target range</li>
          <li>Identify and engage closing attorney before written offer</li>
          <li>Set internal walk-away number — write it down, keep it private</li>
          <li>Schedule first contact with listing agent within 7 days</li>
        </ul>
        <div class="callout" style="margin-top: 30px;">
          <div class="callout-title">Decision Checkpoint</div>
          <div class="callout-body">
            Once verified asking price and seller motivation are confirmed, this brief should be
            updated with concrete dollar values for the opening, target, and walk-away tiers.
            Do not submit a written offer until those three numbers are committed to paper.
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-name">Aaron C. Norris, Founder &amp; CEO</div>
    <div class="nu-footer-contact">
      Norris Utilities®, LLC &nbsp;|&nbsp; 130 Inverness Plaza #210 &nbsp;|&nbsp; Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-confidential">Internal Document — Confidential — Not for Distribution</div>
  </footer>

</body>
</html>