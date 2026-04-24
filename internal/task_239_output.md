<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 50%, #00aaff 75%, var(--nu-cyan) 100%);
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
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* Ghost phoenix watermark */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ PAGE BANNER ══ */
    .page-banner {
      background: var(--nu-white);
      padding: 40px 40px 20px;
      text-align: center;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .page-banner .eyebrow {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 6px 16px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 2px;
      margin-bottom: 16px;
    }
    .page-banner h1 {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .page-banner h1 span { color: var(--nu-blue); }
    .page-banner .subhead {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 760px;
      margin: 0 auto;
    }

    /* ══ MAIN CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .content-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ PROPERTY FACT BAR ══ */
    .fact-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.15);
    }
    .fact-cell {
      padding: 22px 20px;
      text-align: center;
      border-right: 1px solid rgba(255,255,255,0.08);
      color: var(--nu-white);
    }
    .fact-cell:last-child { border-right: none; }
    .fact-cell .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .fact-cell .value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-white);
    }
    .fact-cell .suffix {
      font-size: 0.8rem;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
      margin-top: 2px;
    }

    /* ══ SECTION TITLE ══ */
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--nu-blue);
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .section-title .num {
      color: var(--nu-blue);
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 0.1em;
    }
    .section-title .main { color: var(--nu-dark-text); }

    /* ══ TWO COLUMN ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-bottom: 40px;
    }

    /* ══ CARDS ══ */
    .card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .card h3 span { color: var(--nu-blue); }
    .card p { margin-bottom: 10px; }
    .card ul { list-style: none; padding: 0; }
    .card li {
      padding: 8px 0 8px 22px;
      position: relative;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .card li:last-child { border-bottom: none; }
    .card li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .card li strong { color: var(--nu-dark-text); }

    /* ══ STRATEGY TABLE ══ */
    .strategy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 40px;
    }
    .strategy-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .strategy-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .strategy-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
      font-size: 0.95rem;
    }
    .strategy-table tr:last-child td { border-bottom: none; }
    .strategy-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .strategy-table .tier-label {
      font-weight: 900;
      color: var(--nu-blue);
      white-space: nowrap;
    }
    .strategy-table .price {
      font-weight: 900;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-bottom: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 8px;
      bottom: 8px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 20px 18px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 14px;
      width: 16px;
      height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-item .phase {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-item .title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .timeline-item .desc {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #f5f9ff 0%, #e8f4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .callout h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .callout p { color: var(--nu-dark-text); font-size: 0.98rem; }

    /* ══ RISK MATRIX ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .risk-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px;
      border-left: 4px solid var(--nu-accent-gold);
    }
    .risk-item h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .risk-item .mitigation {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px dashed var(--nu-medium-gray);
    }
    .risk-item .mitigation strong { color: var(--nu-blue); }

    /* ══ CTA BOX ══ */
    .cta-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 38px 32px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 40px;
    }
    .cta-box h3 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: var(--nu-white);
    }
    .cta-box p { color: rgba(255,255,255,0.85); margin-bottom: 20px; }
    .cta-btn {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 900;
      text-decoration: none;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    .cta-btn:hover { background: var(--nu-white); transform: translateY(-1px); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.9; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .page-banner { padding: 30px 20px 16px; }
      .page-banner h1 { font-size: 1.7rem; }
      .content-wrap { padding: 36px 20px 40px; }
      .two-col { grid-template-columns: 1fr; gap: 20px; }
      .fact-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
      .fact-cell:last-child { border-bottom: none; }
      .strategy-table { font-size: 0.85rem; }
      .strategy-table th, .strategy-table td { padding: 10px 10px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
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

  <!-- PAGE BANNER -->
  <div class="page-banner">
    <span class="eyebrow">Action Item — Personal / Confidential</span>
    <h1><span>4505 Buttewoods</span> — Estate Acquisition Strategy</h1>
    <p class="subhead">7,098 sq ft estate property. Negotiation playbook, valuation framework, offer ladder, and execution timeline prepared for Aaron C. Norris.</p>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="content-wrap">

      <!-- FACT BAR -->
      <div class="fact-bar">
        <div class="fact-cell">
          <div class="label">Address</div>
          <div class="value">4505 Buttewoods</div>
        </div>
        <div class="fact-cell">
          <div class="label">Size</div>
          <div class="value">7,098</div>
          <div class="suffix">Square Feet</div>
        </div>
        <div class="fact-cell">
          <div class="label">Classification</div>
          <div class="value">Estate</div>
        </div>
        <div class="fact-cell">
          <div class="label">Status</div>
          <div class="value">Negotiation</div>
          <div class="suffix">Open</div>
        </div>
        <div class="fact-cell">
          <div class="label">Source</div>
          <div class="value">reMarkable</div>
          <div class="suffix">Action Item</div>
        </div>
      </div>

      <!-- SECTION 1: SITUATION -->
      <div class="section-title">
        <span class="num">§ 01</span>
        <span class="main">Situation Summary</span>
      </div>

      <div class="callout">
        <h4>THE OBJECTIVE</h4>
        <p>Negotiate and close on the 7,098 sq ft estate at 4505 Buttewoods at a price that preserves cash position, protects borrowing capacity for Norris Utilities®, and delivers a defensible long-term asset. This is a personal acquisition — it must not distract from Phase B or impair the company balance sheet.</p>
      </div>

      <div class="two-col">
        <div class="card">
          <h3><span>Why</span> This Matters</h3>
          <ul>
            <li><strong>Asset base.</strong> A 7,098 sq ft estate is a generational holding, not a turn-over property.</li>
            <li><strong>Legacy alignment.</strong> Fits the "A Legacy of Commitment®" posture — build, hold, pass down.</li>
            <li><strong>Leverage ratio.</strong> Any mortgage directly affects debt-to-income for future equipment financing and line-of-credit headroom at Renasant.</li>
            <li><strong>Time cost.</strong> Negotiations can consume 3–8 weeks of focus. That window overlaps open deals with Bill Kugler (Terex), Coy Crosby (Dominion), and Chain Electric reconciliation.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span>What</span> We Know So Far</h3>
          <ul>
            <li><strong>Property:</strong> 4505 Buttewoods — 7,098 sq ft estate class.</li>
            <li><strong>Seller:</strong> To be confirmed (direct or listed).</li>
            <li><strong>Asking price:</strong> To be gathered — do not proceed without it.</li>
            <li><strong>Comps:</strong> Pull 3 sold comps within 12 months, same zip code, 6,500–7,500 sq ft band.</li>
            <li><strong>Inspection status:</strong> Not started. Required before any binding offer.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 2: PRE-NEGOTIATION CHECKLIST -->
      <div class="section-title">
        <span class="num">§ 02</span>
        <span class="main">Pre-Negotiation Checklist — Complete Before First Offer</span>
      </div>

      <div class="two-col">
        <div class="card">
          <h3><span>Information</span> Gathering</h3>
          <ul>
            <li>Pull current listing (MLS, Zillow, Redfin) and screenshot listing history.</li>
            <li>Pull 5-year tax record — verify assessed value vs. asking.</li>
            <li>Pull deed history — flag prior owner holding period and last sale price.</li>
            <li>Pull 3 sold comps (6,500–7,500 sq ft, within 12 months, same submarket).</li>
            <li>Pull 3 active comps still on market — days-on-market average.</li>
            <li>Check permit history for additions, renovations, roof, HVAC.</li>
            <li>Run flood zone, easement, and setback check.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span>Financial</span> Preparation</h3>
          <ul>
            <li>Confirm cash-on-hand reserve separate from NU operating account.</li>
            <li>Get written pre-approval (Patrick Lavette, Renasant Bank) before first offer.</li>
            <li>Model three financing stacks: 20% down, 25% down, all-cash.</li>
            <li>Calculate monthly carry at each scenario (PITI + utilities + upkeep).</li>
            <li>Set walk-away price before first conversation. Write it down. Do not move.</li>
            <li>Confirm no new personal debt taken on between pre-approval and close.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 3: VALUATION & OFFER LADDER -->
      <div class="section-title">
        <span class="num">§ 03</span>
        <span class="main">Valuation Framework &amp; Offer Ladder</span>
      </div>

      <div class="callout">
        <h4>RULE OF THUMB</h4>
        <p>On a 7,098 sq ft estate, every $10/sq ft shift in price = $70,980. Small concessions move real money. Never negotiate off-the-cuff. Every counter-offer goes back to this spreadsheet first.</p>
      </div>

      <table class="strategy-table">
        <thead>
          <tr>
            <th style="width: 14%;">Tier</th>
            <th style="width: 22%;">Offer Position</th>
            <th style="width: 32%;">Rationale</th>
            <th style="width: 32%;">Terms / Leverage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tier-label">Anchor</td>
            <td class="price">85% of fair-market comp value</td>
            <td>Establishes reference point below asking. Seller knows you've done the work.</td>
            <td>Short inspection window (10 days), proof of funds attached, 30-day close.</td>
          </tr>
          <tr>
            <td class="tier-label">Opening</td>
            <td class="price">88–90% of comp value</td>
            <td>First written offer. Leaves room for 2 counters before hitting target.</td>
            <td>Earnest money at 1%, standard contingencies, escalation language held back.</td>
          </tr>
          <tr>
            <td class="tier-label">Target</td>
            <td class="price">92–94% of comp value</td>
            <td>This is where a good deal lives. Signed papers by this number = win.</td>
            <td>Waive nothing material. Keep inspection &amp; financing contingencies intact.</td>
          </tr>
          <tr>
            <td class="tier-label">Ceiling</td>
            <td class="price">96% of comp value</td>
            <td>Absolute maximum — only if inspection clean &amp; property is rare-to-market.</td>
            <td>Add escalation clause capped here. Require seller concessions on closing costs.</td>
          </tr>
          <tr>
            <td class="tier-label">Walk</td>
            <td class="price">Above 96% of comp value</td>
            <td>Leave. Another property will come. Do not chase.</td>
            <td>Polite exit — keep relationship open, property may re-list in 60–90 days.</td>
          </tr>
        </tbody>
      </table>

      <!-- SECTION 4: NEGOTIATION PLAYBOOK -->
      <div class="section-title">
        <span class="num">§ 04</span>
        <span class="main">Negotiation Playbook — Aaron's Voice</span>
      </div>

      <div class="two-col">
        <div class="card">
          <h3><span>Opening</span> Moves</h3>
          <ul>
            <li><strong>Lead with the ask.</strong> No small talk. "I'm prepared to move on 4505 Buttewoods at the right number."</li>
            <li><strong>Name the homework.</strong> "I've pulled 3 recent comps and the tax record. Here's what I'm seeing."</li>
            <li><strong>State the terms, not just price.</strong> Close date, inspection window, earnest deposit — these move sellers as much as price.</li>
            <li><strong>Silence is a tool.</strong> Make the offer, stop talking. Let them respond first.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span>Counter</span> Discipline</h3>
          <ul>
            <li><strong>Never counter on the phone in-the-moment.</strong> "Let me look at that and come back to you by end of day." Always.</li>
            <li><strong>Write every counter down before sending.</strong> If it feels good in your head but bad on paper — trust the paper.</li>
            <li><strong>Concede on terms before concessing on price.</strong> Close date flexibility costs nothing. Price concession costs real dollars.</li>
            <li><strong>Two-counter rule.</strong> After the seller has moved twice toward you, you've found the zone. Close it.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 5: TIMELINE -->
      <div class="section-title">
        <span class="num">§ 05</span>
        <span class="main">Execution Timeline</span>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="phase">Week 1 — Due Diligence</div>
          <div class="title">Data gathering &amp; financial readiness</div>
          <div class="desc">Pull listing, comps, tax record, deed history, permit file. Confirm Renasant pre-approval letter in hand. Set walk-away price and commit it to writing.</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 2 — First Contact</div>
          <div class="title">Seller or listing agent conversation</div>
          <div class="desc">Introduce yourself, state serious intent, ask questions about seller motivation and timing. No offer yet. Listen. Take notes. Identify what seller values beyond price (close date, post-close occupancy, personal property).</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 3 — Opening Offer</div>
          <div class="title">Written offer at Opening tier (88–90% of comp value)</div>
          <div class="desc">Submit written offer with proof of funds. Include 10-day inspection window, 30-day close, 1% earnest money. No escalation clause yet. Wait 48–72 hours for response.</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 4 — Counter Round One</div>
          <div class="title">Respond to seller's first counter</div>
          <div class="desc">Adjust price modestly (1–2%), hold terms firm. Signal that price improvements will now require seller concessions (closing costs, home warranty, appliance inclusion).</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 5 — Close the Gap</div>
          <div class="title">Target tier engagement</div>
          <div class="desc">If seller is within 2% of Target tier — sign. If seller is above Ceiling tier — walk politely. Never split the difference out of fatigue; split it because the math supports it.</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 6–7 — Inspection &amp; Financing</div>
          <div class="title">Verify what you're buying</div>
          <div class="desc">Full inspection (foundation, roof, HVAC, electrical, plumbing, septic/sewer, pool if applicable). Finalize loan with Renasant. Renegotiate for material defects only — do not nickel-and-dime cosmetic findings.</div>
        </div>
        <div class="timeline-item">
          <div class="phase">Week 8 — Close</div>
          <div class="title">Final walk-through &amp; funding</div>
          <div class="desc">Morning walk-through, confirm property matches contract condition. Sign. Fund. File deed. Send thank-you note to seller regardless of how hard negotiations got — relationships matter.</div>
        </div>
      </div>

      <!-- SECTION 6: RISK MATRIX -->
      <div class="section-title">
        <span class="num">§ 06</span>
        <span class="main">Risk Matrix &amp; Mitigations</span>
      </div>

      <div class="risk-grid">
        <div class="risk-item">
          <h4>Over-paying against comps</h4>
          <p>Emotional attachment drives price above defensible value.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Walk-away price committed to paper before first call. Spouse or trusted advisor reviews any move above Target tier.</div>
        </div>
        <div class="risk-item">
          <h4>Financing disruption</h4>
          <p>Credit pull shifts, new debt during contract, or rate lock expiration.</p>
          <div class="mitigation"><strong>Mitigation:</strong> No new credit lines or large purchases from pre-approval through close. Rate lock for 60 days at contract signing.</div>
        </div>
        <div class="risk-item">
          <h4>Hidden property defects</h4>
          <p>Foundation, roof, septic, or structural surprise post-close.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Full inspection. Specialist follow-up (foundation engineer, septic pump/dye test) for any flagged item. Never waive inspection.</div>
        </div>
        <div class="risk-item">
          <h4>Title or easement surprise</h4>
          <p>Unrecorded easement, boundary dispute, or lien discovered late.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Title commitment reviewed within 5 business days of receipt. Survey ordered on any estate-class property regardless of cost.</div>
        </div>
        <div class="risk-item">
          <h4>Business focus erosion</h4>
          <p>Negotiation consumes attention needed for active NU deals.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Block one fixed hour per day for property matters. CB handles routine email triage during weeks 3–5 crunch.</div>
        </div>
        <div class="risk-item">
          <h4>Seller backs out</h4>
          <p>Seller re-lists higher or pulls property mid-negotiation.</p>
          <div class="mitigation"><strong>Mitigation:</strong> Keep 2 backup properties on watchlist. Do not let loss of one deal force a bad deal on this one.</div>
        </div>
      </div>

      <!-- SECTION 7: SUCCESS METRICS -->
      <div class="section-title">
        <span class="num">§ 07</span>
        <span class="main">Success Metrics — How We'll Know We Won</span>
      </div>

      <div class="two-col">
        <div class="card">
          <h3><span>Quantitative</span> Wins</h3>
          <ul>
            <li><strong>Final price at or below Target tier</strong> (92–94% of comp value).</li>
            <li><strong>Monthly carry ≤ 28%</strong> of Aaron's personal take-home, not NU revenue.</li>
            <li><strong>Zero material surprises</strong> in first 90 days post-close.</li>
            <li><strong>Renasant line of credit preserved</strong> — no reduction in NU borrowing capacity.</li>
          </ul>
        </div>

        <div class="card">
          <h3><span>Qualitative</span> Wins</h3>
          <ul>
            <li><strong>Relationship preserved.</strong> Seller would recommend Aaron to a friend even if they negotiated hard.</li>
            <li><strong>No regret.</strong> Both over-paying and walking away carry regret — the Target zone carries neither.</li>
            <li><strong>No disruption to Norris Utilities® operations</strong> during the negotiation window.</li>
            <li><strong>Property serves its purpose</strong> — the reason for buying is still true a year later.</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-box">
        <h3>Next Action — This Week</h3>
        <p>Complete the pre-negotiation checklist in Section 2. Do not make contact with the seller until every line item is checked.</p>
        <a href="tel:2055001343" class="cta-btn">Aaron — 205-500-1343</a>
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
  </footer>

</body>
</html>