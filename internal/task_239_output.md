<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — 4505 Buttewoods Estate — Norris Utilities®</title>
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
      --nu-warning: #C9501C;
      --nu-danger: #B8231C;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-doc {
      margin-top: 22px;
      display: inline-block;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.25);
      padding: 8px 22px;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 18%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 65%;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.07;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section {
      margin-bottom: 48px;
    }

    .nu-intro {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 880px;
    }

    /* SUMMARY BAR */
    .nu-summary-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 48px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-summary-cell {
      background: var(--nu-white);
      padding: 22px 18px;
      text-align: center;
    }
    .nu-summary-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .nu-summary-value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-summary-sub {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* PROPERTY CARD */
    .nu-property-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 24px;
    }
    .nu-property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px 32px;
      margin-top: 18px;
    }
    .nu-fact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 4px;
    }
    .nu-fact-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* CHEVRON BADGES — for negotiation tactics */
    .nu-badge-list { list-style: none; padding: 0; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 28px 16px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 16px;
      flex-shrink: 0;
      font-size: 0.95rem;
    }

    /* PHASE CARDS */
    .nu-phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 12px;
    }
    .nu-phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .nu-phase-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 6px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-phase-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .nu-phase-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-phase-card ul {
      padding-left: 18px;
      font-size: 0.92rem;
    }
    .nu-phase-card li { margin-bottom: 6px; }

    /* PRICING TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: #fafbff; }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table .label { font-weight: 700; color: var(--nu-dark-text); }
    .nu-table .num { font-weight: 700; font-family: 'Lato', monospace; text-align: right; }
    .nu-table .target-row td {
      background: rgba(6, 208, 255, 0.1) !important;
      border-top: 2px solid var(--nu-blue);
      border-bottom: 2px solid var(--nu-blue);
    }
    .nu-table .target-row .label { color: #0033cc; font-weight: 900; }

    /* TWO-COLUMN LAYOUT */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    /* LEVERAGE / RISK BLOCKS */
    .nu-leverage-block {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      height: 100%;
    }
    .nu-block-title {
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-leverage-block.our-side .nu-block-title { color: var(--nu-success); border-bottom-color: var(--nu-success); }
    .nu-leverage-block.their-side .nu-block-title { color: var(--nu-warning); border-bottom-color: var(--nu-warning); }
    .nu-leverage-block ul { list-style: none; padding: 0; }
    .nu-leverage-block li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-leverage-block li:last-child { border-bottom: none; }
    .nu-leverage-block li::before {
      content: '';
      position: absolute;
      left: 0; top: 16px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }

    /* SCRIPT / TALK TRACK */
    .nu-script-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef2ff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      margin-bottom: 16px;
    }
    .nu-script-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .nu-script-quote {
      font-size: 1.02rem;
      font-style: italic;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-script-note {
      margin-top: 10px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 12px 16px 12px 42px;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 4px;
      margin-bottom: 8px;
      font-size: 0.94rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-callout-label {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-callout-body {
      font-size: 1rem;
      line-height: 1.65;
    }
    .nu-callout-body strong { color: var(--nu-cyan); }

    /* FOOTER */
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-property-card { padding: 22px; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-phase-card, .nu-property-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-header-doc">Negotiation Strategy Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-section-title" style="font-size: 2rem; margin-bottom: 8px;">
        <span class="first">Negotiate</span> <span class="rest">Purchase — 4505 Buttewoods Estate</span>
      </h1>
      <p class="nu-intro">
        Action-item brief for the negotiation and acquisition of a 7,098 sq ft estate at
        4505 Buttewoods. This document captures the property facts, target pricing posture,
        leverage on both sides, and the talk-track sequence to move from offer to executed contract
        without overpaying or losing the deal.
      </p>

      <!-- SUMMARY BAR -->
      <section class="nu-summary-bar">
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Property</div>
          <div class="nu-summary-value">4505 Buttewoods</div>
          <div class="nu-summary-sub">Single-family estate</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Heated Sq Ft</div>
          <div class="nu-summary-value">7,098</div>
          <div class="nu-summary-sub">Per listing record</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Action Type</div>
          <div class="nu-summary-value">Acquisition</div>
          <div class="nu-summary-sub">Owner-occupied</div>
        </div>
        <div class="nu-summary-cell">
          <div class="nu-summary-label">Owner</div>
          <div class="nu-summary-value">Aaron C. Norris</div>
          <div class="nu-summary-sub">Personal — not company</div>
        </div>
      </section>

      <!-- PROPERTY FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Property</span> <span class="rest">Facts on Record</span>
        </h2>
        <div class="nu-property-card">
          <div class="nu-property-grid">
            <div>
              <div class="nu-fact-label">Address</div>
              <div class="nu-fact-value">4505 Buttewoods</div>
            </div>
            <div>
              <div class="nu-fact-label">Heated Square Footage</div>
              <div class="nu-fact-value">7,098 sq ft</div>
            </div>
            <div>
              <div class="nu-fact-label">Property Class</div>
              <div class="nu-fact-value">Estate / Luxury Single-Family</div>
            </div>
            <div>
              <div class="nu-fact-label">Buyer</div>
              <div class="nu-fact-value">Aaron C. Norris (personal)</div>
            </div>
            <div>
              <div class="nu-fact-label">Funding Source</div>
              <div class="nu-fact-value">To confirm — cash vs. financed</div>
            </div>
            <div>
              <div class="nu-fact-label">Status</div>
              <div class="nu-fact-value">Pre-offer — strategy phase</div>
            </div>
          </div>
        </div>
        <div class="nu-callout">
          <div class="nu-callout-label">Data Confirmation Needed</div>
          <div class="nu-callout-body">
            Before opening negotiation, lock down the following from the listing
            agent or county records: <strong>list price, days on market, lot size,
            year built, last sale price &amp; date, current tax assessment,</strong>
            and <strong>any prior price reductions</strong>. These five data points
            drive the opening number and the leverage posture below.
          </div>
        </div>
      </section>

      <!-- TARGET PRICING TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Target</span> <span class="rest">Pricing Framework</span>
        </h2>
        <p class="nu-intro" style="margin-bottom: 18px;">
          Three anchors govern the offer. Walk-away discipline is non-negotiable —
          if the seller will not move below the ceiling, this deal closes without us.
        </p>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Anchor</th>
                <th>Definition</th>
                <th>Posture</th>
                <th style="text-align:right;">Per Sq Ft Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label">Opening Offer</td>
                <td>Defensible low number — supported by comps + condition findings</td>
                <td>Quiet, factual, written</td>
                <td class="num">~80% of asking</td>
              </tr>
              <tr class="target-row">
                <td class="label">Target Close</td>
                <td>The number we expect to land on after one or two rounds</td>
                <td>Walk-up zone — accept if reached</td>
                <td class="num">~88–92% of asking</td>
              </tr>
              <tr>
                <td class="label">Ceiling / Walk-Away</td>
                <td>Above this we walk — discipline matters more than this deal</td>
                <td>Silent — never disclosed</td>
                <td class="num">~95% of asking</td>
              </tr>
              <tr>
                <td class="label">Concession Reserve</td>
                <td>Closing costs, repairs, rate-buy-down credits we will request</td>
                <td>Use after price is set</td>
                <td class="num">2–3% of contract price</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="nu-intro" style="margin-top: 14px; font-size: 0.9rem; color: var(--nu-body-text);">
          Final dollar figures plug in the moment list price and verified comps are confirmed.
          The percentages above are the rules — the dollars follow.
        </p>
      </section>

      <!-- LEVERAGE — TWO COLUMNS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Leverage</span> <span class="rest">Map — Both Sides of the Table</span>
        </h2>
        <div class="nu-two-col">
          <div class="nu-leverage-block our-side">
            <div class="nu-block-title">Our Leverage</div>
            <ul>
              <li>Qualified, motivated, ready-to-close buyer</li>
              <li>Discretionary purchase — no forced timeline, can walk</li>
              <li>Estate-class property has a thin buyer pool — we are a real one</li>
              <li>Inspection and due diligence will likely surface concession items</li>
              <li>Ability to pre-qualify or show proof of funds quickly</li>
              <li>No home-sale contingency required</li>
            </ul>
          </div>
          <div class="nu-leverage-block their-side">
            <div class="nu-block-title">Seller Leverage</div>
            <ul>
              <li>Unique property — fewer direct comps to anchor against</li>
              <li>Carrying cost may be modest if owned outright</li>
              <li>Emotional attachment to original price may delay reduction</li>
              <li>Listing agent paid on price, not on speed</li>
              <li>Possible competing interest — to be verified, not assumed</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 5-PHASE PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Five-Phase</span> <span class="rest">Negotiation Plan</span>
        </h2>
        <div class="nu-phase-grid">
          <div class="nu-phase-card">
            <div class="nu-phase-tag">Phase 1 · Discovery</div>
            <div class="nu-phase-title">Pre-Offer Intelligence</div>
            <ul>
              <li>Confirm list price, DOM, prior reductions</li>
              <li>Pull last 12 months of comps within 2 miles</li>
              <li>Drive the property — exterior + neighborhood</li>
              <li>Quietly gauge seller motivation through agent</li>
            </ul>
          </div>
          <div class="nu-phase-card">
            <div class="nu-phase-tag">Phase 2 · Position</div>
            <div class="nu-phase-title">Open the Conversation</div>
            <ul>
              <li>Build rapport with listing agent — no pressure</li>
              <li>Establish you are a real, qualified buyer</li>
              <li>Ask about seller timeline, reason for sale</li>
              <li>Do not anchor on a price yet</li>
            </ul>
          </div>
          <div class="nu-phase-card">
            <div class="nu-phase-tag">Phase 3 · Offer</div>
            <div class="nu-phase-title">Submit Written Offer</div>
            <ul>
              <li>Open at 80% of asking — defensible, not insulting</li>
              <li>Include proof of funds or pre-approval</li>
              <li>Request 10-day inspection period</li>
              <li>Short response window — 48 hours</li>
            </ul>
          </div>
          <div class="nu-phase-card">
            <div class="nu-phase-tag">Phase 4 · Counter</div>
            <div class="nu-phase-title">Manage the Counter</div>
            <ul>
              <li>Expect counter at 95–98% of asking</li>
              <li>Respond at 88–92% — split the gap once, not twice</li>
              <li>Stay silent for 24 hours between rounds</li>
              <li>Stop at the walk-away ceiling — no exceptions</li>
            </ul>
          </div>
          <div class="nu-phase-card">
            <div class="nu-phase-tag">Phase 5 · Close</div>
            <div class="nu-phase-title">Inspection &amp; Close-Out</div>
            <ul>
              <li>Use inspection to recover concessions on real findings</li>
              <li>Lock financing or wire confirmation early</li>
              <li>Title, survey, insurance ordered within 48 hours</li>
              <li>Final walk-through 24 hours before closing</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TACTICS BADGES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Negotiation</span> <span class="rest">Tactics — Aaron's Rules</span>
        </h2>
        <ul class="nu-badge-list">
          <li class="nu-badge"><span class="nu-badge-num">1</span>Lead with the ask. Never bury the number.</li>
          <li class="nu-badge"><span class="nu-badge-num">2</span>Put every offer in writing. Verbal numbers do not bind.</li>
          <li class="nu-badge"><span class="nu-badge-num">3</span>Use silence after each counter — 24 hours minimum.</li>
          <li class="nu-badge"><span class="nu-badge-num">4</span>Never reveal the walk-away ceiling. Ever.</li>
          <li class="nu-badge"><span class="nu-badge-num">5</span>Anchor with comps and findings, not feelings.</li>
          <li class="nu-badge"><span class="nu-badge-num">6</span>Concessions come after price — never bundled in.</li>
          <li class="nu-badge"><span class="nu-badge-num">7</span>Be willing to walk. The deal that breaks discipline is the deal you regret.</li>
        </ul>
      </section>

      <!-- TALK TRACK -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Talk</span> <span class="rest">Track — Sample Language</span>
        </h2>

        <div class="nu-script-card">
          <div class="nu-script-tag">Opening Call to Listing Agent</div>
          <div class="nu-script-quote">
            "I am a qualified buyer looking seriously at 4505 Buttewoods. Before I put
            anything on paper, what can you tell me about the seller's timeline and what
            they are hoping to accomplish with this sale?"
          </div>
          <div class="nu-script-note">
            Goal — gather motivation signals before disclosing a number. Listen more than you talk.
          </div>
        </div>

        <div class="nu-script-card">
          <div class="nu-script-tag">Submitting the Opening Offer</div>
          <div class="nu-script-quote">
            "Attached is my written offer. The number reflects recent comparable sales
            in the area and accounts for the work I anticipate after a full inspection.
            Proof of funds is included. I would appreciate a response within 48 hours
            so we can either move forward or part as friends."
          </div>
          <div class="nu-script-note">
            Goal — defensible, businesslike, and time-bound. No apology, no hedge.
          </div>
        </div>

        <div class="nu-script-card">
          <div class="nu-script-tag">Responding to a High Counter</div>
          <div class="nu-script-quote">
            "I appreciate the response. I cannot move to that number, but I can come
            up to [target close] — final and best on price. If that works, we can move
            to inspection this week. If not, I understand."
          </div>
          <div class="nu-script-note">
            Goal — name the number, frame it as final, give the seller a clean choice.
          </div>
        </div>

        <div class="nu-script-card">
          <div class="nu-script-tag">Post-Inspection Concession Request</div>
          <div class="nu-script-quote">
            "The inspection identified [specific items]. I am not asking the price to
            change — I am asking for a closing-cost credit of [amount] to address them
            after closing. This keeps the deal moving without re-trading the price."
          </div>
          <div class="nu-script-note">
            Goal — separate price from repairs. Easier yes for the seller.
          </div>
        </div>
      </section>

      <!-- RISK / RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Red</span> <span class="rest">Flags — Walk-Away Triggers</span>
        </h2>
        <div class="nu-two-col">
          <div class="nu-leverage-block their-side">
            <div class="nu-block-title">Property-Side Risks</div>
            <ul>
              <li>Undisclosed water intrusion or foundation movement</li>
              <li>Septic, well, or major system at end of life</li>
              <li>Unpermitted additions affecting the 7,098 sq ft figure</li>
              <li>Title clouds, easements, or boundary disputes</li>
              <li>Material defects withheld in the seller disclosure</li>
            </ul>
          </div>
          <div class="nu-leverage-block their-side">
            <div class="nu-block-title">Deal-Side Risks</div>
            <ul>
              <li>Seller refuses to entertain any number under list</li>
              <li>Listing agent will not provide comp data</li>
              <li>Deadline pressure manufactured by other side</li>
              <li>Required escalation clauses or auction-style process</li>
              <li>Demand to waive inspection or appraisal contingencies</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Action</span> <span class="rest">Checklist — This Week</span>
        </h2>
        <ul class="nu-checklist">
          <li>Confirm list price, days on market, last sale, and tax assessment for 4505 Buttewoods</li>
          <li>Pull 12-month comparable sales within 2 miles, similar sq ft and lot</li>
          <li>Decide funding posture — cash, conventional, or hybrid — and obtain proof of funds letter</li>
          <li>Engage real estate attorney for offer review and contract drafting</li>
          <li>Schedule a quiet exterior drive-by; do not signal intent to listing agent yet</li>
          <li>Identify inspector — structural, septic, mold, and electrical specialists for an estate-class property</li>
          <li>Set walk-away ceiling in writing in personal file — Aaron only — before any number is offered</li>
          <li>Open conversation with listing agent using the Phase 2 talk track above</li>
        </ul>
      </section>

      <!-- FINAL CALLOUT -->
      <section class="nu-section">
        <div class="nu-callout">
          <div class="nu-callout-label">Discipline Statement</div>
          <div class="nu-callout-body">
            The job here is to <strong>buy this estate at the right number</strong> — not to
            buy it at any number. The walk-away ceiling exists to protect the next ten years
            of cash flow, not to make today's negotiation easier. If the seller will not move
            below the ceiling, the right answer is <strong>"thank you, not at this price"</strong>
            — and we re-engage in 30, 60, or 90 days. Patience is leverage.
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