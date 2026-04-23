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
      --nu-success: #2E7D32;
      --nu-warning: #E65100;
      --nu-danger: #C62828;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
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
      opacity: 0.07;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      z-index: 1;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 22px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.4em;
      text-transform: uppercase;
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ DOCUMENT TITLE ══ */
    .doc-title {
      text-align: center;
      margin-bottom: 48px;
    }
    .doc-title h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .doc-title h1 span {
      color: var(--nu-blue);
    }
    .doc-title .sub {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.05rem;
      color: #666;
      letter-spacing: 0.02em;
    }
    .doc-meta {
      display: inline-flex;
      gap: 24px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #555;
      flex-wrap: wrap;
      justify-content: center;
    }
    .doc-meta span b {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 20px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-top: 8px;
    }

    /* ══ PROPERTY SNAPSHOT ══ */
    .snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      background: var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 32px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .snap-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
      border-right: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .snap-cell:last-child { border-right: none; }
    .snap-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: #888;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .snap-value {
      font-size: 1.55rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .snap-unit {
      font-size: 0.8rem;
      font-weight: 400;
      color: #777;
      margin-top: 2px;
    }

    /* ══ SITUATION CARD ══ */
    .situation {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 26px 30px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .situation h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .situation p {
      color: var(--nu-body-text);
      font-size: 1rem;
    }
    .situation strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ NEGOTIATION STRATEGY ══ */
    .strategy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }
    .strat-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .strat-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.08);
    }
    .strat-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
    }
    .strat-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--nu-blue), #0066EE);
      color: white;
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-bottom: 12px;
    }
    .strat-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 10px;
    }
    .strat-card p {
      font-size: 0.92rem;
      color: #555;
      line-height: 1.55;
    }

    /* ══ OFFER LADDER ══ */
    .ladder {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .ladder-head {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: white;
      padding: 18px 24px;
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .ladder-row {
      display: grid;
      grid-template-columns: 110px 1fr 1fr 140px;
      gap: 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: center;
    }
    .ladder-row:last-child { border-bottom: none; }
    .ladder-row.head {
      background: var(--nu-light-gray);
      font-weight: 700;
      font-size: 0.78rem;
      color: #555;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .ladder-cell {
      padding: 16px 18px;
      font-size: 0.95rem;
    }
    .ladder-cell.tier {
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.85rem;
    }
    .ladder-cell.price {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      text-align: right;
    }
    .ladder-row.tier-1 { background: #f8fffb; }
    .ladder-row.tier-2 { background: #fffdf5; }
    .ladder-row.tier-3 { background: #fff5f5; }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .checklist ul { list-style: none; padding: 0; }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
      color: var(--nu-body-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 16px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ RED FLAGS ══ */
    .flags {
      background: #fff8f3;
      border: 1px solid #ffcc99;
      border-left: 5px solid var(--nu-warning);
      border-radius: 6px;
      padding: 22px 28px;
      margin-bottom: 32px;
    }
    .flags h4 {
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .flags ul {
      padding-left: 20px;
    }
    .flags li {
      font-size: 0.95rem;
      color: #5c3d1f;
      margin-bottom: 8px;
      line-height: 1.5;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding: 10px 0 10px 36px;
      margin-bottom: 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 10px; bottom: 10px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 2px;
    }
    .tl-item {
      position: relative;
      padding: 12px 0 18px 18px;
    }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -31px; top: 18px;
      width: 15px; height: 15px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-day {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .tl-action {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .tl-note {
      font-size: 0.88rem;
      color: #666;
    }

    /* ══ NEXT STEP BOX ══ */
    .next-step {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, #0066EE 100%);
      color: white;
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 6px 22px rgba(0, 0, 255, 0.25);
    }
    .next-step .label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-cyan);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .next-step h3 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
      line-height: 1.25;
    }
    .next-step p {
      font-size: 1rem;
      color: rgba(255,255,255,0.92);
      line-height: 1.6;
    }
    .next-step .btns {
      margin-top: 20px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-light {
      background: white;
      color: var(--nu-blue);
    }
    .btn-light:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .btn-outline {
      background: transparent;
      color: white;
      border: 2px solid rgba(255,255,255,0.6);
    }
    .btn-outline:hover {
      background: rgba(255,255,255,0.1);
      border-color: white;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .wrap { padding: 40px 22px 60px; }
      .doc-title h1 { font-size: 1.65rem; }
      .ladder-row { grid-template-columns: 90px 1fr 110px; }
      .ladder-row .hide-mobile { display: none; }
      .snap-value { font-size: 1.3rem; }
      .next-step { padding: 24px; }
      .next-step h3 { font-size: 1.2rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .strat-card, .ladder, .checklist { box-shadow: none; page-break-inside: avoid; }
      .next-step { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Acquisition Negotiation Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="wrap">

      <div class="doc-title">
        <h1>4505 <span>Buttewoods</span> Estate Acquisition</h1>
        <div class="sub">Negotiation strategy, offer ladder, and action checklist for a 7,098 sq ft estate</div>
        <div class="doc-meta">
          <span><b>Prepared:</b> April 23, 2026</span>
          <span><b>For:</b> Aaron C. Norris</span>
          <span><b>Status:</b> Pre-Offer Planning</span>
        </div>
      </div>

      <!-- PROPERTY SNAPSHOT -->
      <div class="snapshot">
        <div class="snap-cell">
          <div class="snap-label">Address</div>
          <div class="snap-value" style="font-size:1.15rem;">4505 Buttewoods</div>
          <div class="snap-unit">Subject Property</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Living Area</div>
          <div class="snap-value">7,098</div>
          <div class="snap-unit">square feet</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Classification</div>
          <div class="snap-value" style="font-size:1.15rem;">Estate</div>
          <div class="snap-unit">Luxury Tier</div>
        </div>
        <div class="snap-cell">
          <div class="snap-label">Phase</div>
          <div class="snap-value" style="font-size:1.15rem;">Negotiate</div>
          <div class="snap-unit">Offer Prep</div>
        </div>
      </div>

      <!-- SITUATION -->
      <div class="situation">
        <h3>ACTION ITEM FROM reMARKABLE</h3>
        <p>Negotiate the purchase of the <strong>7,098 sq ft estate at 4505 Buttewoods</strong>. This is a material personal/real-estate decision flagged during a reMarkable review session. Before any number goes on paper, settle the walk-away price, the financing path, and the due-diligence window. The goal is a clean, unemotional negotiation anchored by data — not by the asking price.</p>
      </div>

      <!-- NEGOTIATION STRATEGY -->
      <h2 class="nu-section-title"><span class="first">Negotiation</span> <span class="rest">Strategy</span></h2>
      <div class="strategy-grid">
        <div class="strat-card">
          <div class="strat-num">1</div>
          <h4>Anchor on Data, Not List Price</h4>
          <p>Pull three independent comparables for 6,500–7,700 sq ft homes in the same zip code that closed in the last 180 days. Build a $/sq ft range. The list price is marketing — comps are reality.</p>
        </div>
        <div class="strat-card">
          <div class="strat-num">2</div>
          <h4>Understand the Seller's Why</h4>
          <p>Motivation drives concession. Relocation, divorce, estate, or carrying-cost pressure all signal flexibility. A discretionary move signals none. Have the agent ask directly: "Why are they selling, and when do they need to close?"</p>
        </div>
        <div class="strat-card">
          <div class="strat-num">3</div>
          <h4>Lead with Terms, Not Just Price</h4>
          <p>Sellers of a 7,098 sq ft estate often care more about certainty than headline price. Shorter inspection window, larger earnest money, proof of funds up front, and a flexible closing date can close a $25–$100K gap on price.</p>
        </div>
        <div class="strat-card">
          <div class="strat-num">4</div>
          <h4>Separate Price From Concessions</h4>
          <p>Negotiate the number first. Only after it's agreed, introduce closing cost credits, repair allowances, and the inspection-period list. Bundling them up front gives the seller a reason to say no to everything.</p>
        </div>
        <div class="strat-card">
          <div class="strat-num">5</div>
          <h4>Protect the Walk-Away Line</h4>
          <p>Write the maximum number on a sheet of paper before the first offer goes out, and put it in the safe. If negotiation pushes past it, the answer is no. An estate purchase that breaks the budget is never worth the address.</p>
        </div>
        <div class="strat-card">
          <div class="strat-num">6</div>
          <h4>Keep the Transaction Private</h4>
          <p>No social posts, no Telegram forwarding, no verbal mentions to vendors or customers until closing. Public awareness of a pending estate purchase weakens negotiating posture and creates unnecessary noise around the business.</p>
        </div>
      </div>

      <!-- OFFER LADDER -->
      <h2 class="nu-section-title"><span class="first">Offer</span> <span class="rest">Ladder</span></h2>
      <div class="ladder">
        <div class="ladder-head">Three-Tier Offer Framework</div>
        <div class="ladder-row head">
          <div class="ladder-cell">Tier</div>
          <div class="ladder-cell">Posture</div>
          <div class="ladder-cell hide-mobile">Terms</div>
          <div class="ladder-cell" style="text-align:right;">Target</div>
        </div>
        <div class="ladder-row tier-1">
          <div class="ladder-cell tier">Opening</div>
          <div class="ladder-cell">Data-anchored, credible, not insulting. Leaves clear room to move up.</div>
          <div class="ladder-cell hide-mobile">30-day close, 10-day inspection, strong earnest money, proof of funds attached.</div>
          <div class="ladder-cell price">85–88%<br><span style="font-weight:400;font-size:0.8rem;color:#666;">of comp-based value</span></div>
        </div>
        <div class="ladder-row tier-2">
          <div class="ladder-cell tier">Walk-To</div>
          <div class="ladder-cell">Fair, defensible, still below asking. This is where a rational seller lands.</div>
          <div class="ladder-cell hide-mobile">Same terms, $5K earnest bump, willing to pay own closing costs.</div>
          <div class="ladder-cell price">92–95%<br><span style="font-weight:400;font-size:0.8rem;color:#666;">of comp-based value</span></div>
        </div>
        <div class="ladder-row tier-3">
          <div class="ladder-cell tier">Walk-Away</div>
          <div class="ladder-cell">Absolute ceiling. Past this number, the deal is no longer worth doing.</div>
          <div class="ladder-cell hide-mobile">Only if major premium justified (finished basement, lot premium, recent $150K+ renovations).</div>
          <div class="ladder-cell price">100%<br><span style="font-weight:400;font-size:0.8rem;color:#666;">of comp-based value</span></div>
        </div>
      </div>

      <!-- DUE DILIGENCE CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Due-Diligence</span> <span class="rest">Checklist</span></h2>
      <div class="checklist">
        <ul>
          <li><strong>Comparable sales</strong> — 3 recent closes in 6,500–7,700 sq ft range, same submarket, last 180 days.</li>
          <li><strong>Price history</strong> — days on market, any prior listings, prior under-contract falls, original list vs. current.</li>
          <li><strong>Title / liens</strong> — preliminary title report pulled before offer; confirm no IRS, mechanic's, or HOA liens.</li>
          <li><strong>Property taxes</strong> — last 3 years of millage, reassessment risk at sale, any homestead implications.</li>
          <li><strong>HOA / covenants</strong> — if applicable, full declarations, dues, assessments, pending capital projects.</li>
          <li><strong>Structural inspection</strong> — licensed inspector + structural engineer for an estate of this size; roof, foundation, HVAC, electrical panel load.</li>
          <li><strong>Systems / capacity</strong> — HVAC zones, water heater sizing, electrical service (200A vs 400A), well/septic if applicable.</li>
          <li><strong>Environmental</strong> — radon, mold, lead/asbestos (if pre-1980), floodplain, wetland boundary review.</li>
          <li><strong>Survey</strong> — current ALTA or boundary survey; verify square footage is GLA, not gross including basement.</li>
          <li><strong>Financing letter</strong> — pre-approval at full offer amount before submitting; jumbo if price tier requires.</li>
          <li><strong>Insurance quote</strong> — get a bindable quote before closing; large square-footage estates carry premium surprises.</li>
          <li><strong>Utilities / run rates</strong> — pull 12 months of electric, gas, water actuals from seller; estates carry real carrying cost.</li>
        </ul>
      </div>

      <!-- RED FLAGS -->
      <div class="flags">
        <h4>⚠ Red Flags That Change the Offer</h4>
        <ul>
          <li><strong>Recent price drops with no story</strong> — signals either a defect or that the market is voting against the list price.</li>
          <li><strong>Square footage disputes</strong> — tax record, MLS, and appraisal often disagree on estates; get a licensed measurement.</li>
          <li><strong>Seller-financed history</strong> — prior land contracts or assumable notes can cloud title; insist on a full chain review.</li>
          <li><strong>Recent cosmetic-only renovation</strong> — fresh paint over deferred maintenance on estates is common; look past finishes.</li>
          <li><strong>Adjacent development</strong> — check zoning map for nearby rezonings, planned roads, or commercial creep that can destroy future resale.</li>
          <li><strong>Buyer urgency from the agent</strong> — if an agent is rushing the offer, slow down. Urgency is rarely the buyer's friend.</li>
        </ul>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Timeline</span></h2>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-day">Day 0 — Today</div>
          <div class="tl-action">Lock the walk-away number in writing</div>
          <div class="tl-note">Write the ceiling on paper and seal it. Do not share it — not with the agent, not with family, not with the seller's side.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 1–3</div>
          <div class="tl-action">Pull comps and confirm financing</div>
          <div class="tl-note">Three closed comps in the last 180 days, same submarket. Pre-approval letter at full offer amount from a lender comfortable with jumbo estate purchases.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 3–5</div>
          <div class="tl-action">Request seller disclosures + utility history</div>
          <div class="tl-note">12 months of electric/gas/water actuals, HOA docs, tax statements, and the full disclosure packet. Review before writing the offer.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 5–7</div>
          <div class="tl-action">Submit Tier 1 offer with strong terms</div>
          <div class="tl-note">Opening offer with proof of funds, pre-approval, earnest money, short inspection period. Let terms do the talking — not price.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 7–14</div>
          <div class="tl-action">Negotiate to Tier 2 — not past it without cause</div>
          <div class="tl-note">Respond with discipline. Each counter should move slower than the prior one. Never re-raise on the same day as the last counter.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 14–24</div>
          <div class="tl-action">Inspection period + full due diligence</div>
          <div class="tl-note">Licensed inspector + structural engineer + survey + environmental screen. Any material finding triggers a repair credit request or walk.</div>
        </div>
        <div class="tl-item">
          <div class="tl-day">Day 30–45</div>
          <div class="tl-action">Clear to close</div>
          <div class="tl-note">Final walk-through 24 hours before closing. Wire instructions verified by phone with the title company — not trusted from email.</div>
        </div>
      </div>

      <!-- NEXT STEP -->
      <div class="next-step">
        <div class="label">NEXT ACTION — TODAY</div>
        <h3>Lock the walk-away number and pull three comps before any offer is written.</h3>
        <p>Everything else downstream — the agent's pressure, the seller's story, the financing terms — only matters if the ceiling is settled first. Decide the maximum number in private, then let the data decide the opening. Estates are won with discipline, not emotion.</p>
        <div class="btns">
          <a href="tel:2055001343" class="btn btn-light">Call 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Buttewoods%20—%20Negotiation%20Prep" class="btn btn-outline">Email Aaron</a>
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
  </footer>

</body>
</html>