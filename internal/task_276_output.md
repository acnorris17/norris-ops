<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Call H2O Waterproofing — Norris Utilities®</title>
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
      --nu-red: #C62828;
      --nu-green: #2E7D32;
      --nu-amber: #F57C00;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 50%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 20px 28px;
      border-radius: 6px;
      margin-bottom: 32px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.15);
    }
    .priority-banner .flag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      padding: 6px 12px;
      border-radius: 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .priority-banner .banner-text {
      font-weight: 700;
      font-size: 1.02rem;
      flex: 1;
    }
    .priority-banner .banner-meta {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.75);
      font-weight: 400;
      white-space: nowrap;
    }

    /* ══ SECTION TITLE ══ */
    .section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .section-title .first-word { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .section-subtitle {
      font-size: 0.92rem;
      color: #666;
      margin-bottom: 20px;
      letter-spacing: 0.02em;
    }

    /* ══ HERO CARD ══ */
    .hero-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 36px 40px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      margin-bottom: 32px;
    }
    .hero-card h1 {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .hero-card .vendor {
      color: var(--nu-blue);
    }
    .hero-card .lede {
      font-size: 1.05rem;
      color: #444;
      max-width: 780px;
      margin-bottom: 22px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid transparent;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-ghost {
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      border-color: var(--nu-medium-gray);
    }
    .btn-ghost:hover {
      background: var(--nu-medium-gray);
    }

    /* ══ TWO-COLUMN LAYOUT ══ */
    .grid-2col {
      display: grid;
      grid-template-columns: 1.35fr 1fr;
      gap: 28px;
      margin-bottom: 32px;
    }
    @media (max-width: 900px) {
      .grid-2col { grid-template-columns: 1fr; }
    }

    /* ══ PANEL ══ */
    .panel {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .panel h2 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-blue);
      display: inline-block;
    }
    .panel h2 .accent { color: var(--nu-blue); }

    /* ══ GET IN WRITING LIST ══ */
    .writing-list {
      list-style: none;
      counter-reset: writing-counter;
    }
    .writing-list li {
      counter-increment: writing-counter;
      position: relative;
      padding: 18px 16px 18px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
      transition: background 0.2s ease;
    }
    .writing-list li:hover {
      background: #eef4ff;
    }
    .writing-list li::before {
      content: counter(writing-counter);
      position: absolute;
      left: 16px; top: 18px;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .writing-list .item-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .writing-list .item-detail {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    /* ══ CONTACT CARD ══ */
    .contact-card .contact-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .contact-card .contact-row:last-child { border-bottom: none; }
    .contact-card .label {
      font-weight: 700;
      color: #666;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .contact-card .value {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }
    .contact-card a.value {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .contact-card a.value:hover { text-decoration: underline; }

    /* ══ SCRIPT BLOCK ══ */
    .script-block {
      background: linear-gradient(180deg, #fafbff 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 14px;
      font-size: 0.97rem;
      line-height: 1.75;
    }
    .script-block .speaker {
      display: inline-block;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .script-block p {
      color: #333;
      margin-bottom: 8px;
    }
    .script-block p:last-child { margin-bottom: 0; }
    .script-block .emphasis {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ STATUS GRID ══ */
    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .status-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 18px;
      position: relative;
      overflow: hidden;
    }
    .status-tile::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 4px;
      background: var(--nu-medium-gray);
    }
    .status-tile.pending::before { background: var(--nu-amber); }
    .status-tile.confirmed::before { background: var(--nu-green); }
    .status-tile.blocked::before { background: var(--nu-red); }
    .status-tile .tile-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 6px;
    }
    .status-tile .tile-value {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .status-tile .tile-note {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 32px;
    }
    .checklist h2 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .checklist h2 .accent { color: var(--nu-blue); }
    .checklist ul {
      list-style: none;
    }
    .checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px dashed #d8d8e0;
      font-size: 0.96rem;
      color: #333;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* ══ EMAIL TEMPLATE ══ */
    .email-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 32px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
    }
    .email-block .email-header {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .email-block .email-header h3 {
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .email-block .email-header .pill {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.72rem;
      font-weight: 900;
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .email-block .email-meta {
      background: #fafbff;
      padding: 14px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .email-block .email-meta div {
      padding: 3px 0;
      color: #555;
    }
    .email-block .email-meta strong {
      color: var(--nu-dark-text);
      display: inline-block;
      width: 62px;
    }
    .email-block .email-body {
      padding: 24px 28px;
      font-size: 0.98rem;
      line-height: 1.75;
      color: #333;
    }
    .email-block .email-body p {
      margin-bottom: 14px;
      text-indent: 24px;
    }
    .email-block .email-body p.no-indent { text-indent: 0; }
    .email-block .email-body .sig {
      margin-top: 18px;
      text-indent: 0;
    }

    /* ══ ESCALATION CALLOUT ══ */
    .callout {
      background: #fff8ec;
      border: 1px solid #f2dfa8;
      border-left: 4px solid var(--nu-amber);
      border-radius: 6px;
      padding: 18px 22px;
      margin-bottom: 32px;
      font-size: 0.95rem;
    }
    .callout strong { color: var(--nu-dark-text); }
    .callout .callout-title {
      display: block;
      font-weight: 900;
      color: var(--nu-amber);
      margin-bottom: 6px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
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
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .content-wrap { padding: 36px 20px 48px; }
      .hero-card { padding: 26px 22px; }
      .hero-card h1 { font-size: 1.45rem; }
      .panel { padding: 22px 20px; }
      .priority-banner { flex-wrap: wrap; }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .panel, .hero-card, .email-block { box-shadow: none; break-inside: avoid; }
      .hero-actions { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="content-wrap">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <span class="flag">Action Required</span>
        <span class="banner-text">reMarkable action item — call H2O Waterproofing and get terms in writing.</span>
        <span class="banner-meta">Logged 2026-04-22</span>
      </div>

      <!-- HERO -->
      <div class="hero-card">
        <h1>Call <span class="vendor">H2O Waterproofing</span> — Capture Written Confirmation</h1>
        <p class="lede">Aaron is the only person authorized to commit Norris Utilities® to this work. Place the call during business hours, walk the vendor through every item on the checklist below, and end the call by requesting a written confirmation email that restates scope, pricing, warranty, and timeline. Nothing is final until it is in writing.</p>
        <div class="hero-actions">
          <a href="tel:2055001343" class="btn btn-primary">Ready Phone — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=H2O%20Waterproofing%20%E2%80%94%20written%20confirmation%20requested" class="btn btn-secondary">Draft Confirmation Email</a>
          <a href="#script" class="btn btn-ghost">Jump to Call Script</a>
        </div>
      </div>

      <!-- STATUS GRID -->
      <section class="panel" style="margin-bottom:32px;">
        <h2><span class="accent">Current</span> Status</h2>
        <div class="status-grid">
          <div class="status-tile pending">
            <div class="tile-label">Call Status</div>
            <div class="tile-value">Pending</div>
            <div class="tile-note">No call logged yet</div>
          </div>
          <div class="status-tile pending">
            <div class="tile-label">Written Confirmation</div>
            <div class="tile-value">Not Received</div>
            <div class="tile-note">Required before work proceeds</div>
          </div>
          <div class="status-tile pending">
            <div class="tile-label">Scope Lock</div>
            <div class="tile-value">Unverified</div>
            <div class="tile-note">Confirm materials &amp; square footage</div>
          </div>
          <div class="status-tile pending">
            <div class="tile-label">Price Lock</div>
            <div class="tile-value">Unverified</div>
            <div class="tile-note">Confirm total &amp; payment terms</div>
          </div>
          <div class="status-tile pending">
            <div class="tile-label">Warranty</div>
            <div class="tile-value">Unverified</div>
            <div class="tile-note">Years + what is covered</div>
          </div>
          <div class="status-tile pending">
            <div class="tile-label">Schedule</div>
            <div class="tile-value">Unverified</div>
            <div class="tile-note">Start &amp; completion dates</div>
          </div>
        </div>
      </section>

      <!-- TWO COLUMN -->
      <div class="grid-2col">

        <!-- GET IN WRITING -->
        <section class="panel">
          <h2><span class="accent">Get</span> In Writing</h2>
          <ol class="writing-list">
            <li>
              <div class="item-title">Confirmation of scope of work</div>
              <div class="item-detail">Exact square footage, surfaces covered, prep work included (grinding, patching, priming), and any surfaces explicitly excluded. If the quote is for a specific area at 130 Inverness Plaza #210, the written scope must name the room or location.</div>
            </li>
            <li>
              <div class="item-title">Confirmation of product and application method</div>
              <div class="item-detail">Name the exact waterproofing product(s) being installed (manufacturer and model), number of coats, dry time between coats, and whether the material is self-leveling, spray-applied, or roller-applied.</div>
            </li>
            <li>
              <div class="item-title">Confirmation of total price and payment terms</div>
              <div class="item-detail">All-in price, what is included (materials, labor, cleanup, warranty), what is not included, deposit amount if any, and when final payment is due. Norris Utilities® pays on Net-30 after satisfactory completion unless otherwise negotiated.</div>
            </li>
            <li>
              <div class="item-title">Confirmation of warranty</div>
              <div class="item-detail">Length in years, whether it is a manufacturer warranty, a workmanship warranty, or both, what voids it, and whether it transfers to a future owner. No verbal "lifetime" claims — must be in the written confirmation.</div>
            </li>
            <li>
              <div class="item-title">Confirmation of schedule</div>
              <div class="item-detail">Mobilization date, expected working hours each day, total days on site, and firm completion date. Weather contingencies must be spelled out — not "as weather permits" without a cap.</div>
            </li>
            <li>
              <div class="item-title">Confirmation of insurance and licensing</div>
              <div class="item-detail">Current general liability certificate naming Norris Utilities®, LLC as additional insured, workers' comp certificate, and any Alabama licenses required for waterproofing work. Request PDFs attached to the confirmation email.</div>
            </li>
          </ol>
        </section>

        <!-- VENDOR + AARON SIDEBAR -->
        <div>
          <section class="panel contact-card" style="margin-bottom:20px;">
            <h2><span class="accent">Vendor</span> File</h2>
            <div class="contact-row">
              <span class="label">Company</span>
              <span class="value">H2O Waterproofing</span>
            </div>
            <div class="contact-row">
              <span class="label">Category</span>
              <span class="value">Waterproofing / Coatings</span>
            </div>
            <div class="contact-row">
              <span class="label">First Call</span>
              <span class="value">Aaron C. Norris</span>
            </div>
            <div class="contact-row">
              <span class="label">Authority to Commit</span>
              <span class="value">Aaron only</span>
            </div>
            <div class="contact-row">
              <span class="label">Documentation Lead</span>
              <span class="value">Caroline Butler (post-call)</span>
            </div>
          </section>

          <section class="panel contact-card">
            <h2><span class="accent">Route</span> Replies To</h2>
            <div class="contact-row">
              <span class="label">Aaron — Cell</span>
              <a href="tel:2055001343" class="value">205-500-1343</a>
            </div>
            <div class="contact-row">
              <span class="label">Aaron — Email</span>
              <a href="mailto:acnorris@norrisutilities.com" class="value">acnorris@norrisutilities.com</a>
            </div>
            <div class="contact-row">
              <span class="label">Mail To</span>
              <span class="value">130 Inverness Plaza #210<br>Birmingham, AL 35242</span>
            </div>
            <div class="contact-row">
              <span class="label">Website</span>
              <a href="https://www.norrisutilities.com" class="value">www.NorrisUtilities.com</a>
            </div>
          </section>
        </div>
      </div>

      <!-- CALL SCRIPT -->
      <section class="panel" id="script" style="margin-bottom:32px;">
        <h2><span class="accent">Call</span> Script — Aaron's Voice</h2>
        <p class="section-subtitle">Direct, warm, confident. No filler. End with the written-confirmation ask.</p>

        <div class="script-block">
          <span class="speaker">Open</span>
          <p>"This is Aaron Norris with Norris Utilities® in Birmingham. I want to move forward with the waterproofing work we discussed, and before I do I need the terms in writing. Is this a good time to walk through it?"</p>
        </div>

        <div class="script-block">
          <span class="speaker">Scope</span>
          <p>"Let's start with <span class="emphasis">scope</span>. Tell me exactly what's included, exactly what's excluded, and the square footage you're quoting. I want all of that in your confirmation email."</p>
        </div>

        <div class="script-block">
          <span class="speaker">Product</span>
          <p>"What <span class="emphasis">product</span> are you installing — manufacturer and model? How many coats, how is it applied, and what's the dry time between coats?"</p>
        </div>

        <div class="script-block">
          <span class="speaker">Price &amp; terms</span>
          <p>"What's the <span class="emphasis">all-in price</span>, what's included in that number, and what's not? Any deposit required? I pay Net-30 after completion unless we agree on something different — put the payment terms in the email."</p>
        </div>

        <div class="script-block">
          <span class="speaker">Warranty</span>
          <p>"What's the <span class="emphasis">warranty</span> — how many years, workmanship or manufacturer or both, and what voids it? I need the warranty language written in the email, not just spoken."</p>
        </div>

        <div class="script-block">
          <span class="speaker">Schedule</span>
          <p>"When do you <span class="emphasis">mobilize</span>, what are the working hours, how many days on site, and what's the firm completion date? If weather pushes it, I need a cap in writing."</p>
        </div>

        <div class="script-block">
          <span class="speaker">Insurance</span>
          <p>"Attach your <span class="emphasis">general liability certificate</span> naming Norris Utilities®, LLC as additional insured, your workers' comp certificate, and any Alabama license that applies to this work."</p>
        </div>

        <div class="script-block">
          <span class="speaker">Close</span>
          <p>"Send the written confirmation today to <span class="emphasis">acnorris@norrisutilities.com</span>. Once I have it in hand and everything matches what we just discussed, I'll give you the green light. Appreciate you — talk soon."</p>
        </div>
      </section>

      <!-- POST-CALL CHECKLIST -->
      <section class="checklist">
        <h2><span class="accent">After</span> the Call — Verification Checklist</h2>
        <ul>
          <li><strong>Confirmation email received</strong> at acnorris@norrisutilities.com within 24 hours of the call.</li>
          <li><strong>Scope matches</strong> what was discussed — square footage, surfaces, prep work, exclusions.</li>
          <li><strong>Product name and application method</strong> are explicitly stated (no "industry-standard waterproofing").</li>
          <li><strong>Total price, deposit, and payment terms</strong> match — no surprise line items or "plus materials at cost."</li>
          <li><strong>Warranty length and coverage</strong> stated in writing. Any "lifetime" claim must be backed by the manufacturer document.</li>
          <li><strong>Firm schedule</strong> with mobilization date and completion cap, not open-ended "weather permitting."</li>
          <li><strong>COI and license PDFs</strong> attached to the email.</li>
          <li><strong>File the email</strong> in Gmail label <em>Vendors / H2O Waterproofing</em> and log in the master tracker.</li>
          <li><strong>Send acknowledgement</strong> to vendor only after Aaron has read the confirmation end-to-end.</li>
        </ul>
      </section>

      <!-- CONFIRMATION EMAIL TEMPLATE -->
      <section class="email-block">
        <div class="email-header">
          <h3>Follow-Up Email — If Confirmation Does Not Arrive Same Day</h3>
          <span class="pill">Aaron's Voice</span>
        </div>
        <div class="email-meta">
          <div><strong>To:</strong> H2O Waterproofing</div>
          <div><strong>From:</strong> acnorris@norrisutilities.com</div>
          <div><strong>Subject:</strong> Written confirmation — waterproofing scope, price, warranty, schedule</div>
        </div>
        <div class="email-body">
          <p class="no-indent">Name —</p>
          <p>Following up on our call today. To move forward, I need a single email from you confirming the scope of work, the product and application method, the all-in price and payment terms, the warranty length and coverage, the mobilization and completion dates, and your general liability and workers' comp certificates naming Norris Utilities, LLC as additional insured.</p>
          <p>Once I have that in writing and everything matches what we discussed, I'll give you the green light to schedule the work.</p>
          <p>If anything has changed on your end since we spoke, flag it in the same email so we can square it away before you mobilize.</p>
          <p class="no-indent">Sincerely,</p>
          <p class="sig">
            Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </p>
        </div>
      </section>

      <!-- ESCALATION CALLOUT -->
      <div class="callout">
        <span class="callout-title">Escalation — If Vendor Will Not Put It in Writing</span>
        <p><strong>Do not authorize the work.</strong> A vendor that will not put scope, price, warranty, and schedule in writing is not a vendor Norris Utilities® does business with. Move the file to <em>Vendors / On Hold</em> and request a second quote from an alternate waterproofing contractor. Aaron signs off on the pivot before any replacement call is made.</p>
      </div>

      <!-- SECTION TITLE CLOSE -->
      <section>
        <h2 class="section-title"><span class="first-word">Legacy</span> <span class="rest">of Commitment</span></h2>
        <p class="section-subtitle">Norris Utilities® does not shake hands on big money. We get it in writing, we honor it to the letter, and we expect the same from every vendor on our ledger.</p>
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