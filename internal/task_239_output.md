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
      --nu-success: #0a8a3f;
      --nu-warning: #C9A84C;
      --nu-critical: #b71c1c;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px),
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
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      background: transparent;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* ══ DOC TITLE STRIP ══ */
    .doc-strip {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 28px 40px;
      text-align: center;
    }
    .doc-kicker {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.2;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      margin-top: 10px;
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      height: 700px;
      background:
        radial-gradient(circle at center, rgba(0,0,255,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ STATUS BANNER ══ */
    .status-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 36px;
      border-left: 6px solid var(--nu-cyan);
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
    }
    .status-pulse {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--nu-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.5rem;
      box-shadow: 0 0 0 0 rgba(6,208,255,0.6);
      animation: pulse 2.2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(6,208,255,0.7); }
      70% { box-shadow: 0 0 0 14px rgba(6,208,255,0); }
      100% { box-shadow: 0 0 0 0 rgba(6,208,255,0); }
    }
    .status-text h2 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .status-text p {
      color: rgba(255,255,255,0.85);
      font-size: 0.95rem;
    }

    /* ══ SECTION ══ */
    .section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
    }
    .fact-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .fact-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist .box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      position: relative;
    }
    .checklist .box::after {
      content: '';
      position: absolute;
      inset: 2px;
      background: transparent;
      border-radius: 2px;
    }
    .checklist .text {
      font-size: 0.98rem;
      color: var(--nu-body-text);
    }
    .checklist .text strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 20px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 14px;
      width: 12px;
      height: 12px;
      background: var(--nu-blue);
      border: 2px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .timeline-date {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin: 2px 0 4px;
    }
    .timeline-desc {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* ══ RISK TABLE ══ */
    .risk-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .risk-table th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .risk-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .risk-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .flag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      padding: 3px 10px;
      border-radius: 12px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .flag-high { background: #fde4e4; color: var(--nu-critical); }
    .flag-med { background: #fff4d4; color: #8a6500; }
    .flag-info { background: #e0e8ff; color: var(--nu-blue); }

    /* ══ QUOTE / CONTEXT ══ */
    .context-note {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .context-note::before {
      content: '“';
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      color: var(--nu-cyan);
      line-height: 0.6;
      margin-bottom: 4px;
    }

    /* ══ CTA ROW ══ */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 26px;
      padding-top: 26px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 26px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
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
      padding: 12px 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .container { padding: 36px 22px 44px; }
      .doc-title { font-size: 1.5rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding-right: 20px; }
      .status-banner { flex-direction: column; text-align: center; align-items: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .fact-card, .risk-table { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .status-pulse { animation: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC STRIP -->
  <div class="doc-strip">
    <div class="doc-kicker">Action Item &nbsp;·&nbsp; reMarkable Capture &nbsp;·&nbsp; Personal Real Estate</div>
    <h1 class="doc-title"><span>Estate</span> Acquisition — 4505 Buttewoods</h1>
    <div class="doc-meta">
      <strong>Captured:</strong> 2026-04-23 &nbsp;|&nbsp;
      <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
      <strong>Type:</strong> Negotiation Brief
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="status-pulse">!</div>
        <div class="status-text">
          <h2>Negotiation Phase — Action Required</h2>
          <p>Negotiate purchase of 7,098 sq ft estate at 4505 Buttewoods. Offer terms, price strategy, and diligence items below.</p>
        </div>
      </div>

      <!-- QUICK FACTS -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Property</span> <span class="rest">Snapshot</span></h2>
        <div class="section-rule"></div>
        <div class="card-grid">
          <div class="fact-card">
            <div class="fact-label">Address</div>
            <div class="fact-value">4505 Buttewoods</div>
            <div class="fact-sub">Single-family estate</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Living Area</div>
            <div class="fact-value">7,098 sq ft</div>
            <div class="fact-sub">Per captured note</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Transaction Type</div>
            <div class="fact-value">Negotiated Purchase</div>
            <div class="fact-sub">Owner-direct or listed</div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Current Phase</div>
            <div class="fact-value">Price &amp; Terms</div>
            <div class="fact-sub">Pre-offer preparation</div>
          </div>
        </div>
      </section>

      <!-- WHY THIS MATTERS -->
      <section class="section">
        <div class="context-note">
          Aaron flagged this on the reMarkable: negotiate the purchase of the 7,098 sq ft estate at 4505 Buttewoods. This page tracks the negotiation plan, open diligence items, and the sequence of actions so nothing slips while the deal is live.
        </div>
      </section>

      <!-- NEGOTIATION PLAY -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Play — Order of Operations</span></h2>
        <div class="section-rule"></div>
        <div class="nu-badge-row">
          <div class="nu-badge"><span class="num">1</span>Confirm comparable sales within 1 mile, last 12 months — establish objective ceiling</div>
          <div class="nu-badge"><span class="num">2</span>Pull seller motivation signals: days on market, prior price cuts, relocation timing</div>
          <div class="nu-badge"><span class="num">3</span>Anchor with a defensible first offer — lead with price per sq ft, not gross number</div>
          <div class="nu-badge"><span class="num">4</span>Negotiate terms first (close date, inspection window, earnest), then price second</div>
          <div class="nu-badge"><span class="num">5</span>Protect the deal with a written inspection contingency and financing safety net</div>
          <div class="nu-badge"><span class="num">6</span>Close final terms in writing — signed addendum, not verbal handshake</div>
        </div>
      </section>

      <!-- DILIGENCE CHECKLIST -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Diligence</span> <span class="rest">Checklist</span></h2>
        <div class="section-rule"></div>
        <div class="nu-card">
          <ul class="checklist">
            <li>
              <span class="box"></span>
              <span class="text"><strong>Title &amp; deed search</strong>Pull deed history, confirm current vesting, and verify no undisclosed liens or easements against 4505 Buttewoods.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Tax assessment &amp; parcel records</strong>Compare assessed value against asking price. Confirm square footage of record matches the 7,098 sq ft represented.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Professional inspection</strong>Full home inspection with structural, roof, HVAC, electrical, and plumbing scope. Separate termite (WDI) letter.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Water intrusion &amp; moisture review</strong>Basement, crawl space, roof flashings, grading. Cross-check with H2O Waterproofing notes already in the Brain.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Disclosure review</strong>Seller's property condition disclosure — flag anything omitted or contradicting MLS/listing representations in writing.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Survey &amp; boundary</strong>Order boundary survey. Confirm improvements are inside lot lines and no encroachments exist.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Insurance quotes</strong>Obtain homeowner's quote early — large square footage often drives coverage cost surprises that affect offer math.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Financing pre-approval</strong>Confirm loan program and pre-approval amount with Patrick Lavette at Renasant before submitting offer.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Working</span> <span class="rest">Timeline</span></h2>
        <div class="section-rule"></div>
        <div class="nu-card">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">This Week</div>
              <div class="timeline-title">Comp analysis &amp; offer range</div>
              <div class="timeline-desc">Finalize comparable sales. Set target price, walk-away price, and opening offer.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Next Step</div>
              <div class="timeline-title">Submit written offer with contingencies</div>
              <div class="timeline-desc">Price + close date + inspection period + financing contingency + earnest money held in escrow.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Upon Acceptance</div>
              <div class="timeline-title">Inspection &amp; due diligence window</div>
              <div class="timeline-desc">Inspection, survey, title, insurance, water intrusion review. Negotiate repairs or credits from findings.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Pre-Close</div>
              <div class="timeline-title">Final walkthrough &amp; closing prep</div>
              <div class="timeline-desc">Confirm all agreed repairs complete. Review closing disclosure 72 hours before close. Wire instructions verified by phone.</div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Closing Day</div>
              <div class="timeline-title">Execute &amp; record</div>
              <div class="timeline-desc">Sign, fund, and record deed. Retain copies of settlement statement and title policy.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- RISK & LEVERAGE -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">&amp; Leverage Watch</span></h2>
        <div class="section-rule"></div>
        <table class="risk-table">
          <thead>
            <tr>
              <th style="width: 120px;">Flag</th>
              <th>Item</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="flag flag-high">High</span></td>
              <td>Water intrusion exposure</td>
              <td>Require written H2O Waterproofing scope before closing. Use any unresolved finding as price or credit leverage.</td>
            </tr>
            <tr>
              <td><span class="flag flag-high">High</span></td>
              <td>Undisclosed defects</td>
              <td>Any disclosure gap uncovered at inspection is grounds to renegotiate price, demand repairs, or walk.</td>
            </tr>
            <tr>
              <td><span class="flag flag-med">Medium</span></td>
              <td>Square footage verification</td>
              <td>7,098 sq ft representation must match tax records and appraisal. Discrepancy reopens price.</td>
            </tr>
            <tr>
              <td><span class="flag flag-med">Medium</span></td>
              <td>Appraisal gap risk</td>
              <td>At this square footage, low comps could trigger an appraisal shortfall. Pre-negotiate an appraisal contingency.</td>
            </tr>
            <tr>
              <td><span class="flag flag-info">Info</span></td>
              <td>Seller timing leverage</td>
              <td>Flexible close date is a non-price concession that can win the deal without raising offer.</td>
            </tr>
            <tr>
              <td><span class="flag flag-info">Info</span></td>
              <td>Financing pre-approval</td>
              <td>A strong pre-approval letter from Renasant strengthens the offer without moving the price.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- OFFER STRATEGY -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Strategy Notes</span></h2>
        <div class="section-rule"></div>
        <div class="nu-card">
          <ul class="checklist">
            <li>
              <span class="box"></span>
              <span class="text"><strong>Lead with terms, not price</strong>Clean close date, short inspection period, and strong earnest money carry as much weight as headline price — sometimes more.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Never reveal the ceiling</strong>Negotiate in writing. Keep walk-away number private. Let the written counter-offers do the talking.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Document every concession</strong>Price credits, repair credits, personal property, and closing costs — all captured in a signed addendum, never verbally.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Protect the inspection window</strong>Resist any push to shorten the inspection period below what's needed to complete the full diligence checklist above.</span>
            </li>
            <li>
              <span class="box"></span>
              <span class="text"><strong>Silence is a tool</strong>After submitting a counter, wait. Don't chase. Don't re-negotiate against yourself.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- CTA -->
      <section class="section">
        <div class="nu-card">
          <h3 style="font-weight: 900; color: var(--nu-dark-text); font-size: 1.15rem; margin-bottom: 8px;">Next Action</h3>
          <p style="color: var(--nu-body-text); font-size: 0.95rem;">Lock in comparable sales and finalize the offer range before the next seller touchpoint. All diligence items flow from a confirmed target price and walk-away price.</p>
          <div class="cta-row">
            <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
            <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Negotiation" class="nu-btn-secondary">Email Aaron</a>
          </div>
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
  </footer>

</body>
</html>