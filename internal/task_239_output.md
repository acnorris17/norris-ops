<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods — Purchase Negotiation Strategy — Norris Utilities®</title>
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
      --nu-success: #0a8a3a;
      --nu-warn: #c96a10;
      --nu-danger: #b3261e;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 12px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin: 4px 0 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-meta {
      margin-top: 22px;
      display: inline-block;
      padding: 10px 22px;
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      color: var(--nu-white);
      font-size: 0.85rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .wrap {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* PAGE TITLE BAND */
    .page-title {
      margin-bottom: 12px;
    }
    .page-kicker {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .page-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title h1 .accent { color: var(--nu-blue); }
    .page-sub {
      font-size: 1.05rem;
      color: #555;
      max-width: 820px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-top: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
      padding-bottom: 10px;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* HERO CARD — Property Snapshot */
    .hero-card {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 28px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 30px;
      margin-top: 28px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.06);
    }
    .hero-card h2 {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .hero-card .addr {
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 1.05rem;
      margin-bottom: 14px;
    }
    .hero-card p { margin-bottom: 10px; }
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .stat-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 16px 14px;
      text-align: center;
    }
    .stat-label {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .stat-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-navy);
      line-height: 1.15;
    }
    .stat-value .unit {
      font-size: 0.75rem;
      font-weight: 700;
      color: #666;
      margin-left: 4px;
    }

    /* GRID LAYOUTS */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .three-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    /* INFO CARDS */
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.04);
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .info-card h3 .sub { color: var(--nu-dark-text); font-weight: 700; }
    .info-card p { font-size: 0.96rem; margin-bottom: 8px; }
    .info-card ul { list-style: none; padding: 0; }
    .info-card ul li {
      padding: 6px 0 6px 20px;
      position: relative;
      font-size: 0.95rem;
    }
    .info-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      position: absolute;
      left: 4px;
      top: 4px;
      font-size: 1.1rem;
    }

    /* CHEVRON BADGES */
    .chevron-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 18px;
    }
    .chev-badge {
      display: flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 20px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .chev-num {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: var(--nu-cyan);
      font-size: 1.4rem;
      font-weight: 700;
      min-width: 28px;
      text-align: center;
    }

    /* TABLES */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,51,0.05);
      border: 1px solid var(--nu-medium-gray);
      margin-top: 14px;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafbff; }
    .nu-table td.num { font-variant-numeric: tabular-nums; white-space: nowrap; }
    .nu-table td.strong { font-weight: 900; color: var(--nu-navy); }

    /* PRICE LADDER */
    .ladder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 16px;
    }
    .rung {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 14px;
      text-align: center;
      position: relative;
    }
    .rung.highlight {
      background: linear-gradient(135deg, #002a8a 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      border-color: var(--nu-blue);
      box-shadow: 0 6px 18px rgba(0,0,255,0.22);
    }
    .rung .tier {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 700;
      color: #666;
      margin-bottom: 8px;
    }
    .rung.highlight .tier { color: var(--nu-cyan); }
    .rung .amt {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-navy);
    }
    .rung.highlight .amt { color: var(--nu-white); }
    .rung .note {
      font-size: 0.78rem;
      color: #666;
      margin-top: 4px;
    }
    .rung.highlight .note { color: rgba(255,255,255,0.85); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #f0f5ff 0%, #e8f4ff 100%);
      border-left: 5px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      margin: 22px 0;
      font-size: 0.97rem;
    }
    .callout strong { color: var(--nu-navy); }
    .callout.warn {
      background: linear-gradient(135deg, #fff8ee 0%, #fff1df 100%);
      border-left-color: var(--nu-warn);
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 26px;
      box-shadow: 0 2px 10px rgba(0,0,51,0.04);
    }
    .checklist li {
      list-style: none;
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 6px; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 30px;
      margin-top: 20px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 9px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .t-item {
      position: relative;
      padding: 12px 0 12px 18px;
    }
    .t-item::before {
      content: '';
      position: absolute;
      left: -26px; top: 18px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px rgba(0,0,255,0.12);
    }
    .t-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .t-head { font-weight: 700; color: var(--nu-dark-text); margin: 2px 0 4px; }

    /* SCRIPT BLOCK */
    .script-block {
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 24px 28px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.15);
      margin-top: 18px;
    }
    .script-block h4 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .script-block p { margin-bottom: 12px; font-size: 0.98rem; line-height: 1.65; }
    .script-block p:last-child { margin-bottom: 0; }

    /* SIGN-OFF */
    .signoff {
      margin-top: 60px;
      padding: 26px 30px;
      background: linear-gradient(135deg, #f5f7ff 0%, #eaf2ff 100%);
      border: 1px solid #d5dffc;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }
    .signoff .who {
      font-size: 0.85rem;
      color: #555;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .signoff .line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      min-width: 240px;
      height: 32px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001a99 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer .rule {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(6,208,255,0.6), transparent);
      margin: 18px auto;
      max-width: 360px;
    }
    .nu-footer .fine {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      margin-top: 10px;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .hero-card { grid-template-columns: 1fr; }
      .two-col, .three-col { grid-template-columns: 1fr; }
      .ladder { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .wrap { padding: 40px 22px 60px; }
      .page-title h1 { font-size: 1.7rem; }
      .chev-badge { clip-path: none; border-radius: 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .info-card, .hero-card, .checklist, .nu-table { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon" aria-hidden="true">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-meta">Principal Action Brief &middot; 2026-04-22</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="wrap">

      <div class="page-title">
        <div class="page-kicker">reMarkable Action Item &middot; Aaron C. Norris &middot; Personal</div>
        <h1><span class="accent">Negotiate Purchase</span> — 4505 Buttewoods</h1>
        <p class="page-sub">A structured negotiation plan for the 7,098 sq ft estate at 4505 Buttewoods. Captures target price, walk-away, leverage, counter-offer ladder, diligence gates, and the day-by-day sequence through offer acceptance.</p>
      </div>

      <!-- HERO: Property Snapshot -->
      <section class="hero-card">
        <div>
          <h2>Target Property</h2>
          <div class="addr">4505 Buttewoods</div>
          <p><strong>Class.</strong> Single-family residential estate — principal residence candidate for Aaron C. Norris.</p>
          <p><strong>Headline size.</strong> 7,098 square feet of finished living area. Price-per-square-foot analysis will be the anchor of all counter-offer math (see Pricing Ladder below).</p>
          <p><strong>Read before signing anything.</strong> This page is a planning instrument, not a contract. Every number below flexes after the inspection, appraisal, and title work clear. Do not waive inspection, appraisal, or financing contingencies on the first writing.</p>
        </div>
        <div class="hero-stats">
          <div class="stat-tile">
            <div class="stat-label">Finished Area</div>
            <div class="stat-value">7,098<span class="unit">sq ft</span></div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Property Type</div>
            <div class="stat-value" style="font-size:1.05rem;">Estate<br>Residential</div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Earnest Money Target</div>
            <div class="stat-value">1.0%<span class="unit">of price</span></div>
          </div>
          <div class="stat-tile">
            <div class="stat-label">Target Close</div>
            <div class="stat-value" style="font-size:1.05rem;">45-Day<br>Timeline</div>
          </div>
        </div>
      </section>

      <div class="callout warn">
        <strong>Data to confirm before the offer goes in.</strong> Square footage (7,098) is the only property figure captured from the reMarkable note. List price, lot size, year built, tax parcel ID, HOA, school zoning, and last-sale history all need to be pulled from the MLS sheet and recorder of deeds before the Pricing Ladder numbers are populated. Keep the framework; replace the dollar inputs after the listing packet arrives.
      </div>

      <!-- SECTION: Objectives -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Deal</span> <span class="rest">Objectives</span></div>
        <div class="three-col">
          <div class="info-card">
            <h3>Primary <span class="sub">Win Condition</span></h3>
            <p>Acquire 4505 Buttewoods at a price and on terms that preserve liquidity for Norris Utilities® operating capital and the open Skylift PO commitments already in flight.</p>
          </div>
          <div class="info-card">
            <h3>Secondary <span class="sub">Must-Haves</span></h3>
            <ul>
              <li>Full inspection contingency — no waiver</li>
              <li>Appraisal contingency retained</li>
              <li>Financing contingency if not all-cash</li>
              <li>Seller to produce all known disclosures in writing</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Never <span class="sub">Trade Away</span></h3>
            <ul>
              <li>Clear title and marketable deed</li>
              <li>Survey review rights</li>
              <li>Right to walk on material defect discovery</li>
              <li>Personal indemnity from seller on known issues</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: Pricing Ladder -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Pricing</span> <span class="rest">Ladder &amp; Counter Strategy</span></div>
        <p style="margin-top:6px;">Four-step ladder. Start low with a defensible anchor, reveal ceiling only at round three, walk at round four. The target landing zone is round two.</p>

        <div class="ladder">
          <div class="rung">
            <div class="tier">Opening Offer</div>
            <div class="amt">88% of List</div>
            <div class="note">Anchor — justified by comps &amp; inspection risk</div>
          </div>
          <div class="rung highlight">
            <div class="tier">Target Landing</div>
            <div class="amt">93% of List</div>
            <div class="note">Expected meet point after 1-2 counters</div>
          </div>
          <div class="rung">
            <div class="tier">Ceiling</div>
            <div class="amt">97% of List</div>
            <div class="note">Only if inspection is clean &amp; appraisal supports</div>
          </div>
          <div class="rung">
            <div class="tier">Walk-Away</div>
            <div class="amt">&gt; 100%</div>
            <div class="note">At list or over — walk. 7,098 sq ft does not justify a bidding war.</div>
          </div>
        </div>

        <table class="nu-table" aria-label="Negotiation round-by-round plan">
          <thead>
            <tr>
              <th>Round</th>
              <th>Position</th>
              <th>Rationale Given</th>
              <th>Concession Requested</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="strong">1</td>
              <td class="num">88% of list</td>
              <td>Comparable-sale analysis; carrying costs; identified near-term repairs</td>
              <td>Seller to cover title insurance; 45-day close</td>
            </tr>
            <tr>
              <td class="strong">2</td>
              <td class="num">92%–93% of list</td>
              <td>Meet-in-middle, flexibility signal, contingent on clean inspection</td>
              <td>Home warranty; retention of inspection and appraisal contingencies</td>
            </tr>
            <tr>
              <td class="strong">3</td>
              <td class="num">95%–97% of list</td>
              <td>Best and final; conditional on appraisal meeting price</td>
              <td>Credits for any inspection items &gt; $2,500 single-line-item</td>
            </tr>
            <tr>
              <td class="strong">4</td>
              <td class="num">Walk</td>
              <td>"Appreciate the dialog — we're not able to land at that number."</td>
              <td>Leave door open; re-engage in 30 days if it re-lists</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: Leverage -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Buyer-Side</span> <span class="rest">Leverage to Press</span></div>
        <div class="two-col">
          <div class="info-card">
            <h3>Financial <span class="sub">Signals</span></h3>
            <ul>
              <li>Qualified, pre-underwritten buyer (not just pre-approved) — ask lender for the stronger letter</li>
              <li>Flexible close date to match seller's move-out</li>
              <li>Meaningful earnest money deposit to signal seriousness without exceeding 1% of price</li>
              <li>Minimal seller-side concession asks on round one — tightens psychology</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Transactional <span class="sub">Signals</span></h3>
            <ul>
              <li>Short, clean inspection window (7–10 days) — reduces seller uncertainty</li>
              <li>No home-sale contingency on buyer side</li>
              <li>Buyer willing to close on seller-preferred title company (if reputable)</li>
              <li>Direct-principal cadence — responses within the business day</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION: Seller Leverage (what to neutralize) -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Seller</span> <span class="rest">Leverage to Neutralize</span></div>
        <div class="chevron-row">
          <div class="chev-badge"><span class="chev-num">1</span>Competing offers — ask the listing agent for written confirmation before escalating price</div>
          <div class="chev-badge"><span class="chev-num">2</span>"As-is" posture — counter with a full inspection and a repair-credit request, not price reduction</div>
          <div class="chev-badge"><span class="chev-num">3</span>Emotional attachment — do not denigrate the home in writing; critique is for the inspection report</div>
          <div class="chev-badge"><span class="chev-num">4</span>Time pressure on seller side — probe gently via agent ("any must-close-by date we should plan around?")</div>
        </div>
      </section>

      <!-- SECTION: Diligence Gates -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Diligence</span> <span class="rest">Gates — Must Clear Before Closing</span></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th>Gate</th>
              <th>What Must Be Verified</th>
              <th>Who Handles</th>
              <th>Cost-Center</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="strong">Title &amp; Deed</td>
              <td>Marketable title; no liens, easements, or encroachments that impair use; confirm legal description matches survey</td>
              <td>Title company / closing attorney</td>
              <td class="num">Seller-paid (targeted)</td>
            </tr>
            <tr>
              <td class="strong">Survey</td>
              <td>Current boundary survey; confirm 7,098 sq ft representation against tax card; identify setback or encroachment issues</td>
              <td>Licensed surveyor (buyer-selected)</td>
              <td class="num">Buyer-paid</td>
            </tr>
            <tr>
              <td class="strong">Inspection</td>
              <td>Full home inspection + specialist sub-inspections: roof, HVAC, foundation, plumbing, electrical, radon, termite/wood destroying insect</td>
              <td>Primary inspector + sub-trades</td>
              <td class="num">Buyer-paid</td>
            </tr>
            <tr>
              <td class="strong">Water &amp; Moisture</td>
              <td>Basement and crawlspace moisture reading; grading/drainage check; prior water-intrusion claims via seller disclosure</td>
              <td>Certified water-intrusion specialist (H2O or equiv.) before closing — obtain written findings</td>
              <td class="num">Buyer-paid</td>
            </tr>
            <tr>
              <td class="strong">Appraisal</td>
              <td>Appraised value ≥ contract price; discrepancy triggers renegotiation or walk</td>
              <td>Lender-selected appraiser</td>
              <td class="num">Buyer-paid (lender passthrough)</td>
            </tr>
            <tr>
              <td class="strong">Disclosure Review</td>
              <td>Read every seller disclosure line-by-line; compare to rental-listing history and any prior MLS descriptions for discrepancies</td>
              <td>Buyer + real-estate attorney</td>
              <td class="num">Attorney fee</td>
            </tr>
            <tr>
              <td class="strong">HOA / Covenants</td>
              <td>Obtain covenants, assessments, pending litigation, reserve study; confirm no special assessment in queue</td>
              <td>HOA management company via listing agent</td>
              <td class="num">Admin fee</td>
            </tr>
            <tr>
              <td class="strong">Insurance Binder</td>
              <td>Homeowner insurance quote in-hand before appraisal; confirms no CLUE-report disqualifiers</td>
              <td>Buyer's insurance broker</td>
              <td class="num">Buyer-paid</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <strong>Pattern to watch.</strong> Recent action items have flagged water-intrusion disclosure gaps and discrepancies between rental-listing text and sale-listing disclosures. Treat <em>both</em> of those as mandatory review items for this property. Compare any prior rental or sale marketing against the signed disclosure — ask the listing agent, in writing, to reconcile any mismatch.
        </div>
      </section>

      <!-- SECTION: Timeline -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Sequence</span> <span class="rest">— Day by Day to Offer Acceptance</span></div>
        <div class="timeline">
          <div class="t-item">
            <div class="t-day">Day 0 — Today</div>
            <div class="t-head">Intake &amp; Packet Assembly</div>
            <div>Pull MLS sheet, tax card, prior listing history, and any rental marketing. Confirm list price, lot size, year built, tax parcel, HOA, schools. Populate the Pricing Ladder with real dollar numbers.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 1</div>
            <div class="t-head">Financing Posture Locked</div>
            <div>Escalate lender pre-approval to a full-credit, underwritten letter. Confirm rate-lock window covers a 45-day close. Coordinate with CPA on tax implications for a personal (non-business) purchase.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 2</div>
            <div class="t-head">Agent Brief &amp; Seller Probe</div>
            <div>Buyer's agent calls the listing agent. Soft probe on days-on-market, prior offers, seller's timing needs, any must-close-by date. No price signal from the buyer's side yet.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 3</div>
            <div class="t-head">Walk-Through — Documented</div>
            <div>On-site walk. Photograph everything. Compare disclosure text to what is visible. Flag any mismatch (especially moisture, grading, roof age, crawlspace, foundation cracks).</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 4</div>
            <div class="t-head">Round 1 Offer Submitted</div>
            <div>Submit Opening Offer at 88% of list with retained inspection, appraisal, and financing contingencies. 48-hour response window requested.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Days 5-6</div>
            <div class="t-head">Counter &amp; Round 2</div>
            <div>Receive seller counter. Respond with Round 2 — target landing zone 92-93% of list. Document every concession in writing.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 7</div>
            <div class="t-head">Offer Acceptance &amp; Earnest Money</div>
            <div>Signed contract. Earnest money wired to escrow. Inspection clock begins. Notify lender to order appraisal.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Days 8-17</div>
            <div class="t-head">Inspection Window (10 days)</div>
            <div>Primary inspection, specialist sub-inspections, water-intrusion review. Any defects &gt; the agreed threshold trigger either price credit, seller repair, or termination.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Days 18-40</div>
            <div class="t-head">Appraisal, Title, Underwriting</div>
            <div>Appraisal completed. Title binder issued. Loan clear-to-close targeted by Day 40.</div>
          </div>
          <div class="t-item">
            <div class="t-day">Day 45</div>
            <div class="t-head">Close &amp; Deed Recording</div>
            <div>Final walk-through morning-of. Wire funds. Sign at table. Deed recorded same day.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: Scripts -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Scripts</span> <span class="rest">Aaron Can Use Directly</span></div>

        <div class="script-block">
          <h4>Script A — Probe call from buyer's agent to listing agent</h4>
          <p>"I'm representing Aaron Norris on 4505 Buttewoods. He's a qualified, principal buyer — looking at this as a primary residence. Before we structure an offer, a couple of quick questions: how long's it been active, has there been any offer activity, and is there a move-out timing your seller is working around? I want to write something that works for everyone at the table."</p>
        </div>

        <div class="script-block">
          <h4>Script B — Opening-offer cover note (buyer's agent to listing agent)</h4>
          <p>"Aaron's offer is attached. He's a serious, qualified buyer — pre-underwritten letter enclosed, proof of funds for the earnest money and down payment. The number reflects our read of comparable sales and a responsible allowance for the condition items we noted on walk-through. He retains standard inspection, appraisal, and financing contingencies. We'd welcome a counter by [date]. If there's a path to a clean meeting point, Aaron wants to find it."</p>
        </div>

        <div class="script-block">
          <h4>Script C — Response to a counter at or near list</h4>
          <p>"Appreciate the response. Aaron's not in a position to come in at list — the square-footage math and the items we flagged on walk-through don't support it. We can stretch to [Round 2 number] with the contingencies retained. That's our best meet-in-the-middle; if it works for your seller, we're ready to sign today."</p>
        </div>

        <div class="script-block">
          <h4>Script D — Walk-away (soft close, keep door open)</h4>
          <p>"We've valued the dialog, and Aaron respects where your seller is. We're not able to land at that number on these terms. If circumstances change in the next thirty days, we'd welcome another conversation. Best of luck with the listing."</p>
        </div>
      </section>

      <!-- SECTION: Pre-Offer Checklist -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Pre-Offer</span> <span class="rest">Checklist — Do Not Submit Until Every Box Is Ticked</span></div>
        <ul class="checklist">
          <li>MLS sheet pulled, list price confirmed, tax parcel ID recorded</li>
          <li>Three comparable-sale analyses completed within 1 mile and the last 180 days</li>
          <li>Price-per-square-foot calculated against the 7,098 sq ft basis</li>
          <li>Pre-underwritten lender letter in hand (stronger than pre-approval)</li>
          <li>Proof-of-funds statement dated within 30 days</li>
          <li>Earnest money target (1% of price) confirmed and wireable</li>
          <li>Buyer's agent briefed on the four-round ladder, with walk-away number</li>
          <li>Real-estate attorney engaged and contract rider drafted</li>
          <li>Insurance broker notified — preliminary quote requested</li>
          <li>CPA consulted on personal-purchase tax posture</li>
          <li>Calendar blocked for Day 3 walk-through and Day 8-17 inspection window</li>
          <li>Rental-listing vs. sale-listing disclosure comparison completed for mismatches</li>
        </ul>
      </section>

      <!-- SECTION: Post-Acceptance Guardrails -->
      <section class="nu-section">
        <div class="nu-section-title"><span class="first">Post-Acceptance</span> <span class="rest">Guardrails</span></div>
        <div class="two-col">
          <div class="info-card">
            <h3>Inspection <span class="sub">Response Framework</span></h3>
            <ul>
              <li>Single-item defect &lt; $2,500: absorb, do not renegotiate</li>
              <li>Single-item defect $2,500–$10,000: seller credit or repair</li>
              <li>Single-item defect &gt; $10,000: price reduction or walk</li>
              <li>Material undisclosed defect: exercise termination right</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Appraisal <span class="sub">Shortfall Framework</span></h3>
            <ul>
              <li>Appraisal ≥ contract price: proceed</li>
              <li>Shortfall ≤ 2%: request seller meet the gap</li>
              <li>Shortfall 2-5%: split the gap 50/50</li>
              <li>Shortfall &gt; 5%: renegotiate price to appraisal or terminate</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="signoff">
        <div>
          <div class="who">Decision</div>
          <div style="font-weight:900;color:var(--nu-dark-text);font-size:1.05rem;">Proceed to Pricing-Ladder population &amp; offer preparation</div>
        </div>
        <div>
          <div class="who">Principal Signature</div>
          <div class="line"></div>
          <div style="margin-top:6px;font-size:0.85rem;color:#555;">Aaron C. Norris</div>
        </div>
        <div>
          <div class="who">Date</div>
          <div class="line"></div>
          <div style="margin-top:6px;font-size:0.85rem;color:#555;">Prepared 2026-04-22</div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="rule"></div>
    <div class="fine">Principal action brief prepared for Aaron C. Norris. Personal real-estate matter — not a Norris Utilities®, LLC transaction. Not legal, tax, or financial advice; retain licensed counsel before signing.</div>
  </footer>

</body>
</html>