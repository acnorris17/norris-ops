<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: 4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-success: #10a05a;
      --nu-warn: #e09a24;
      --nu-danger: #c62828;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
      pointer-events: none;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
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
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* Ghost phoenix watermark on header */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -45%);
      width: 65%;
      max-width: 640px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-wrap {
      max-width: 1160px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ STATUS STRIP ══ */
    .status-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background: linear-gradient(90deg, #f3f5ff 0%, #eaf6ff 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
    }
    .status-strip .label {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .status-strip .val {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-top: 2px;
    }
    .status-strip .pill {
      display: inline-block;
      background: var(--nu-warn);
      color: #fff;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.65rem;
      color: #0033cc;
      margin-bottom: 18px;
      margin-top: 40px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-title:first-of-type { margin-top: 0; }

    /* ══ HERO SUMMARY ══ */
    .action-hero {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
      margin-bottom: 14px;
    }
    .action-hero-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .action-hero-card h2 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .action-hero-card p {
      color: var(--nu-body-text);
      font-size: 1rem;
    }
    .action-hero-meta {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.25);
    }
    .action-hero-meta h3 {
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .action-hero-meta dl { display: grid; grid-template-columns: 1fr; gap: 10px; }
    .action-hero-meta dt {
      font-size: 0.72rem;
      font-weight: 700;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .action-hero-meta dd {
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--nu-white);
      margin-bottom: 4px;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px; height: 34px;
      margin-right: 14px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      flex-shrink: 0;
    }

    /* ══ CARDS / GRID ══ */
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-card ul { padding-left: 20px; color: var(--nu-body-text); }
    .nu-card ul li { margin-bottom: 6px; }

    /* ══ STAT DIAMONDS ══ */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin: 10px 0 30px;
    }
    .stat-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 16px;
      text-align: center;
    }
    .stat-tile .stat-num {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .stat-tile .stat-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-body-text);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: 6px;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 10px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding: 0 0 22px 0;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(0,0,255,0.08);
    }
    .timeline-item .when {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .timeline-item .what {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin: 4px 0 4px;
    }
    .timeline-item .detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ TABLES ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table thead th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      text-align: left;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 14px 16px;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: #fafbff; }
    .nu-table .num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--nu-dark-text); }
    .nu-table tfoot td {
      padding: 16px;
      font-weight: 900;
      background: #f3f5ff;
      color: var(--nu-navy);
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 16px;
      background: #fafbff;
      border-left: 3px solid var(--nu-cyan);
      border-radius: 4px;
      margin-bottom: 8px;
    }
    .checklist li .box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 12px;
      margin-top: 2px;
    }
    .checklist li .text { color: var(--nu-body-text); }
    .checklist li .text strong { color: var(--nu-dark-text); }

    /* ══ BUTTONS ══ */
    .btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 28px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover { background: #0000CC; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,255,0.3); }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 12px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #fff8e1 0%, #fff3cc 100%);
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 4px;
      padding: 20px 24px;
      margin: 20px 0;
    }
    .callout strong {
      color: var(--nu-navy);
      font-weight: 900;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-footer-meta {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .action-hero { grid-template-columns: 1fr; }
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .stats-row { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 30px 20px 40px; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .stats-row { grid-template-columns: 1fr 1fr; }
      .status-strip { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L112 40 L140 22 L122 52 L160 44 L130 72 L150 100 L110 82 L100 120 L90 82 L50 100 L70 72 L40 44 L78 52 L60 22 L88 40 Z" fill="white"/>
      <path d="M100 110 L104 140 L120 130 L108 150 L100 190 L92 150 L80 130 L96 140 Z" fill="white"/>
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
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- STATUS STRIP -->
      <div class="status-strip">
        <div>
          <div class="label">Action Item</div>
          <div class="val">Negotiate Estate Acquisition — 4505 Buttewoods</div>
        </div>
        <div>
          <div class="label">Source</div>
          <div class="val">reMarkable Capture</div>
        </div>
        <div>
          <div class="label">Opened</div>
          <div class="val">April 21, 2026</div>
        </div>
        <div>
          <div class="label">Owner</div>
          <div class="val">Aaron C. Norris</div>
        </div>
        <div>
          <span class="pill">In Negotiation</span>
        </div>
      </div>

      <!-- HERO -->
      <section class="action-hero">
        <div class="action-hero-card">
          <h2>Estate Acquisition Brief</h2>
          <p>
            This page tracks the active negotiation to acquire the <strong>7,098 sq ft estate at 4505 Buttewoods</strong>.
            The property is under evaluation as a long-term personal residence and
            anchor asset for the Norris family legacy. This dashboard captures the
            offer posture, next steps, financing path, due-diligence checklist, and
            every dated milestone until the deal either closes or is formally walked away from.
          </p>
        </div>
        <aside class="action-hero-meta">
          <h3>Property Snapshot</h3>
          <dl>
            <dt>Address</dt>
            <dd>4505 Buttewoods</dd>

            <dt>Living Area</dt>
            <dd>7,098 sq ft</dd>

            <dt>Transaction Type</dt>
            <dd>Negotiated Private Purchase</dd>

            <dt>Decision Holder</dt>
            <dd>Aaron C. Norris</dd>

            <dt>Status</dt>
            <dd>Active Negotiation</dd>
          </dl>
        </aside>
      </section>

      <!-- KEY NUMBERS -->
      <div class="stats-row">
        <div class="stat-tile">
          <div class="stat-num">7,098</div>
          <div class="stat-label">Square Feet</div>
        </div>
        <div class="stat-tile">
          <div class="stat-num">1</div>
          <div class="stat-label">Action Item</div>
        </div>
        <div class="stat-tile">
          <div class="stat-num">4</div>
          <div class="stat-label">Active Phases</div>
        </div>
        <div class="stat-tile">
          <div class="stat-num">Priority</div>
          <div class="stat-label">Personal / Legacy</div>
        </div>
      </div>

      <!-- PHASES -->
      <h3 class="nu-section-title">NEGOTIATION <span>Phases</span></h3>

      <div class="nu-badge"><span class="nu-badge-num">1</span> Intake &amp; Baseline Research</div>
      <div class="nu-badge"><span class="nu-badge-num">2</span> Offer Construction &amp; Counter Strategy</div>
      <div class="nu-badge"><span class="nu-badge-num">3</span> Due Diligence &amp; Financing Alignment</div>
      <div class="nu-badge"><span class="nu-badge-num">4</span> Contract, Close &amp; Handoff</div>

      <!-- NEXT ACTIONS -->
      <h3 class="nu-section-title">NEXT <span>Actions</span></h3>

      <ul class="checklist">
        <li>
          <span class="box"></span>
          <span class="text"><strong>Pull comparable sales</strong> — request a written CMA for properties between 6,500 and 8,000 sq ft within a 3-mile radius of 4505 Buttewoods in the trailing 12 months.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Confirm ownership of record</strong> — pull the current deed, tax assessor card, and any open liens for 4505 Buttewoods before extending any offer in writing.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Engage counsel</strong> — have real-estate counsel review the purchase agreement, earnest-money terms, and any deed restrictions prior to signature.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Loop Patrick Lavette at Renasant Bank</strong> — pre-clear financing options (mortgage vs. asset-backed) so the offer is backed by proof of funds.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Schedule walkthrough</strong> — confirm a walk with Aaron onsite at 4505 Buttewoods; bring tape, moisture meter, and a punch-list notebook.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Draft opening offer</strong> — prepare a written offer with clean contingencies: inspection, financing, title, and appraisal.</span>
        </li>
        <li>
          <span class="box"></span>
          <span class="text"><strong>Define walk-away price</strong> — Aaron sets an internal ceiling before the first conversation; everything above the ceiling is a no.</span>
        </li>
      </ul>

      <!-- NEGOTIATION FRAMEWORK -->
      <h3 class="nu-section-title">NEGOTIATION <span>Framework</span></h3>

      <div class="grid-3">
        <div class="nu-card">
          <h4>Opening Posture</h4>
          <ul>
            <li>Lead with a genuine, non-pushy tone</li>
            <li>Anchor the opening offer to verified comps, not list price</li>
            <li>Present proof of funds with the written offer</li>
            <li>Keep contingencies clean and short-dated</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Counter Strategy</h4>
          <ul>
            <li>Never counter in the moment — always &quot;let me look at the numbers and come back&quot;</li>
            <li>Trade price concessions for term concessions (closing date, fixtures, seller-paid repairs)</li>
            <li>Hold one escalation move in reserve</li>
            <li>Keep every commitment written, never verbal</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Walk-Away Discipline</h4>
          <ul>
            <li>Define the ceiling before starting — do not adjust it mid-call</li>
            <li>Walking away is a valid outcome; momentum is not a reason to overpay</li>
            <li>Document the walk-away conversation in writing</li>
            <li>Leave the door open for a future re-engagement</li>
          </ul>
        </div>
      </div>

      <!-- DUE DILIGENCE -->
      <h3 class="nu-section-title">DUE <span>Diligence Checklist</span></h3>

      <table class="nu-table">
        <thead>
          <tr>
            <th style="width:22%;">Category</th>
            <th>Item</th>
            <th style="width:18%;">Owner</th>
            <th style="width:14%;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title &amp; Deed</td>
            <td>Current deed, chain of title, easements, liens</td>
            <td>Counsel</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>Assessor card, trailing 3 years of property-tax bills</td>
            <td>Aaron C. Norris</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Survey</td>
            <td>Recent boundary / plat survey; stake corners if needed</td>
            <td>Surveyor</td>
            <td>Not started</td>
          </tr>
          <tr>
            <td>Inspection</td>
            <td>Whole-house inspection, roof, HVAC, foundation, plumbing, electrical</td>
            <td>Licensed inspector</td>
            <td>Not started</td>
          </tr>
          <tr>
            <td>Environmental</td>
            <td>Radon, moisture, septic / sewer, well water if applicable</td>
            <td>Licensed inspector</td>
            <td>Not started</td>
          </tr>
          <tr>
            <td>Appraisal</td>
            <td>Independent appraisal; compare against verified comps</td>
            <td>Lender / appraiser</td>
            <td>Not started</td>
          </tr>
          <tr>
            <td>Insurance</td>
            <td>Quote homeowners + umbrella coverage before closing</td>
            <td>Aaron C. Norris</td>
            <td>Not started</td>
          </tr>
          <tr>
            <td>Financing</td>
            <td>Confirm mortgage vs. cash vs. asset-backed with Renasant</td>
            <td>Patrick Lavette (Renasant)</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>HOA / Covenants</td>
            <td>Pull recorded covenants, any HOA dues and architectural rules</td>
            <td>Counsel</td>
            <td>Not started</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Clear all categories before Aaron signs the purchase agreement.</td>
            <td>—</td>
          </tr>
        </tfoot>
      </table>

      <!-- FINANCING -->
      <h3 class="nu-section-title">FINANCING <span>Options</span></h3>

      <div class="grid-2">
        <div class="nu-card">
          <h4>Primary Path — Renasant</h4>
          <ul>
            <li>Point of contact: Patrick Lavette</li>
            <li>Pre-clear financing options before making a formal offer</li>
            <li>Request written pre-approval letter referencing 4505 Buttewoods</li>
            <li>Compare 15-year vs. 30-year vs. asset-backed terms</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Alternate Path — Cash / Bridge</h4>
          <ul>
            <li>Consider if the seller will discount for speed of close</li>
            <li>Preserve operating liquidity for Norris Utilities® first</li>
            <li>Any cash move must not starve the business working capital</li>
            <li>Run scenario side-by-side against the Renasant quote</li>
          </ul>
        </div>
      </div>

      <!-- TIMELINE -->
      <h3 class="nu-section-title">TIMELINE <span>&amp; Milestones</span></h3>

      <div class="timeline">
        <div class="timeline-item">
          <div class="when">April 21, 2026</div>
          <div class="what">Action item captured on reMarkable</div>
          <div class="detail">Aaron flagged the 7,098 sq ft estate at 4505 Buttewoods as an active negotiation. Tracking opened here.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Next 7 Days</div>
          <div class="what">Research &amp; financing pre-clear</div>
          <div class="detail">Pull comps, title, tax card. Confirm financing path with Patrick Lavette at Renasant Bank.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Next 14 Days</div>
          <div class="what">Walkthrough &amp; written offer</div>
          <div class="detail">Onsite walkthrough, inspector scheduled, opening offer letter drafted and reviewed by counsel.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Next 30 Days</div>
          <div class="what">Negotiate to signed purchase agreement</div>
          <div class="detail">Counter cycles, due-diligence period triggered, earnest money held in escrow.</div>
        </div>
        <div class="timeline-item">
          <div class="when">Target Close</div>
          <div class="what">Funding &amp; recording</div>
          <div class="detail">All contingencies cleared, appraisal in line with purchase price, deed recorded, insurance bound.</div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <strong>Discipline note —</strong>
        This is a personal / legacy asset. It must not compete with Norris Utilities®, LLC
        operating capital, and it must not distract Aaron from customer deliveries,
        the Skylift PO, Samson Rope commitments, or any open invoice in QuickBooks.
        If any part of this deal starts to pull focus away from the business, pause the negotiation.
      </div>

      <!-- BUTTONS -->
      <div class="btn-row">
        <a class="nu-btn-primary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
        <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20Estate%20Negotiation">Email Aaron</a>
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
      Internal action-item dashboard. Norris Utilities®, LLC — 130 Inverness Plaza #210, Birmingham, AL 35242.
    </div>
  </footer>

</body>
</html>