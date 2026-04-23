<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Negotiation Strategy — $900,000 Offer on 4505 Butterworth — Norris Utilities®</title>
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
      --nu-success: #1B8E3F;
      --nu-warning: #D97706;
      --nu-danger: #B91C1C;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
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
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 22px;
      margin-bottom: 36px;
      font-size: 0.9rem;
    }
    .nu-meta-bar strong { color: var(--nu-dark-text); font-weight: 700; }
    .nu-meta-item { margin: 4px 16px 4px 0; }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin: 48px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-title:first-child { margin-top: 0; }

    .nu-subsection-title {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin: 22px 0 10px;
    }

    /* PAGE INTRO */
    .nu-page-intro {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--nu-body-text);
      max-width: 860px;
      margin-bottom: 10px;
    }

    /* HEADLINE TITLE */
    .nu-doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-doc-subtitle {
      font-family: var(--font-primary);
      font-weight: 400;
      font-style: italic;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 28px;
    }

    /* KEY NUMBERS STRIP */
    .nu-keynums {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin: 10px 0 30px;
    }
    .nu-keynum {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 20px 22px;
      border-radius: 8px;
      box-shadow: 0 4px 14px rgba(0,0,51,0.15);
    }
    .nu-keynum-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .nu-keynum-value {
      font-size: 1.65rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.1;
    }
    .nu-keynum-note {
      font-size: 0.82rem;
      font-weight: 400;
      color: rgba(255,255,255,0.85);
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .nu-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    .nu-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
    }

    /* TABLES */
    .nu-table-wrap {
      overflow-x: auto;
      margin: 12px 0 20px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background: var(--nu-white);
    }
    .nu-table th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 700;
      text-align: left;
      padding: 12px 14px;
      letter-spacing: 0.02em;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 12px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-table td strong { color: var(--nu-dark-text); }

    .nu-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-tag-success { background: #D1FADF; color: var(--nu-success); }
    .nu-tag-warn { background: #FEF3C7; color: var(--nu-warning); }
    .nu-tag-danger { background: #FEE2E2; color: var(--nu-danger); }
    .nu-tag-info { background: #DBEAFE; color: var(--nu-blue); }

    /* LISTS */
    ul.nu-list, ol.nu-list {
      padding-left: 22px;
      margin: 8px 0 16px;
    }
    ul.nu-list li, ol.nu-list li {
      margin-bottom: 8px;
      line-height: 1.65;
    }
    ul.nu-list { list-style: none; padding-left: 4px; }
    ul.nu-list li {
      position: relative;
      padding-left: 22px;
    }
    ul.nu-list li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      position: absolute;
      left: 2px;
      top: -2px;
    }

    /* CALLOUTS */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.08) 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      margin: 18px 0;
    }
    .nu-callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-callout-warn {
      background: #FEF3C7;
      border-left-color: var(--nu-warning);
    }
    .nu-callout-warn .nu-callout-title { color: var(--nu-warning); }
    .nu-callout-danger {
      background: #FEE2E2;
      border-left-color: var(--nu-danger);
    }
    .nu-callout-danger .nu-callout-title { color: var(--nu-danger); }

    /* WALK-AWAY / ANCHOR SCALE */
    .nu-scale {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0;
      margin: 18px 0 12px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-scale-cell {
      padding: 16px 12px;
      text-align: center;
      color: var(--nu-white);
    }
    .nu-scale-cell .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.9;
    }
    .nu-scale-cell .val {
      font-size: 1.15rem;
      font-weight: 900;
      margin-top: 4px;
    }
    .nu-scale-cell:nth-child(1) { background: #0a0e5c; }
    .nu-scale-cell:nth-child(2) { background: #0033cc; }
    .nu-scale-cell:nth-child(3) { background: var(--nu-blue); }
    .nu-scale-cell:nth-child(4) { background: #0066ee; }
    .nu-scale-cell:nth-child(5) { background: var(--nu-cyan); color: var(--nu-navy); }

    /* SCRIPT QUOTES */
    .nu-quote {
      background: var(--nu-light-gray);
      border-left: 3px solid var(--nu-cyan);
      padding: 14px 20px;
      margin: 10px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      border-radius: 0 4px 4px 0;
    }
    .nu-quote::before { content: '"'; color: var(--nu-blue); font-weight: 900; }
    .nu-quote::after { content: '"'; color: var(--nu-blue); font-weight: 900; }

    /* TWO COL */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 10px 0;
    }
    .nu-pro { border-top: 4px solid var(--nu-success); }
    .nu-con { border-top: 4px solid var(--nu-danger); }

    /* CHECKLIST */
    .nu-check {
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    .nu-check-box {
      flex-shrink: 0;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 12px;
      margin-top: 3px;
    }
    .nu-check-text { flex: 1; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      margin-top: 50px;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .nu-doc-title { font-size: 1.6rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-scale { grid-template-columns: 1fr 1fr; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-section-title { page-break-after: avoid; }
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-doc-title">Negotiation Strategy — $900,000 Offer on 4505 Butterworth</h1>
      <p class="nu-doc-subtitle">Private Real Estate Acquisition | 7,098 sq ft Estate | Prepared for Aaron C. Norris</p>

      <div class="nu-meta-bar">
        <div class="nu-meta-item"><strong>Property:</strong> 4505 Butterworth — 7,098 sq ft estate</div>
        <div class="nu-meta-item"><strong>Target Offer:</strong> $900,000</div>
        <div class="nu-meta-item"><strong>Prepared:</strong> 2026-04-22</div>
        <div class="nu-meta-item"><strong>Status:</strong> <span class="nu-tag nu-tag-warn">Pre-Submission</span></div>
      </div>

      <p class="nu-page-intro">
        This document lays out the negotiation playbook for the $900,000 offer on the 4505 Butterworth estate.
        Aaron works this deal personally — no buyer's agent between him and the seller. The structure below keeps
        the offer anchored, protects against counter-drift, and preserves the option to walk at every stage.
      </p>

      <!-- KEY NUMBERS -->
      <div class="nu-keynums">
        <div class="nu-keynum">
          <div class="nu-keynum-label">Opening Offer</div>
          <div class="nu-keynum-value">$900,000</div>
          <div class="nu-keynum-note">Anchored below market mid-point</div>
        </div>
        <div class="nu-keynum">
          <div class="nu-keynum-label">Ceiling (Walk-Away)</div>
          <div class="nu-keynum-value">$985,000</div>
          <div class="nu-keynum-note">Hard stop — no exceptions</div>
        </div>
        <div class="nu-keynum">
          <div class="nu-keynum-label">Target Close</div>
          <div class="nu-keynum-value">$935,000</div>
          <div class="nu-keynum-note">Settlement zone we aim for</div>
        </div>
        <div class="nu-keynum">
          <div class="nu-keynum-label">Earnest Money</div>
          <div class="nu-keynum-value">$10,000</div>
          <div class="nu-keynum-note">Signals seriousness; refundable in inspection period</div>
        </div>
      </div>

      <!-- SECTION 1 -->
      <h2 class="nu-section-title">Opening <span>Position & Rationale</span></h2>

      <p>
        $900,000 is not a lowball. It is an anchor. The job of the anchor is to pull the final settlement down
        toward our target, not to insult the seller. The offer must be defensible with hard numbers the moment
        the seller pushes back.
      </p>

      <div class="nu-card-grid">
        <div class="nu-card">
          <h4>Why $900K is the right anchor</h4>
          <ul class="nu-list">
            <li>Below the likely list-to-close ratio for comparable 7,000+ sq ft estates in the submarket</li>
            <li>Leaves $85K of negotiating room before hitting the walk-away ceiling</li>
            <li>Allows a principled step-up to $935K that looks like movement, not capitulation</li>
            <li>Forces the seller to counter — which surfaces their actual floor</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>What the anchor is NOT</h4>
          <ul class="nu-list">
            <li>Not a final number — the seller will assume we have room</li>
            <li>Not a statement about property value — it is a negotiation mechanic</li>
            <li>Not contingent on the seller liking it — they do not need to like it, they need to respond</li>
            <li>Not to be defended emotionally — defend with comps, carry costs, and condition notes</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 2 -->
      <h2 class="nu-section-title">The <span>Five-Step Walk-Up</span></h2>

      <p>Each step gets smaller. Smaller increments signal we are approaching our limit. Never move twice without a counter-move from the seller.</p>

      <div class="nu-scale">
        <div class="nu-scale-cell"><div class="lbl">Step 1 — Open</div><div class="val">$900,000</div></div>
        <div class="nu-scale-cell"><div class="lbl">Step 2</div><div class="val">$920,000</div></div>
        <div class="nu-scale-cell"><div class="lbl">Step 3 — Target</div><div class="val">$935,000</div></div>
        <div class="nu-scale-cell"><div class="lbl">Step 4</div><div class="val">$960,000</div></div>
        <div class="nu-scale-cell"><div class="lbl">Step 5 — Ceiling</div><div class="val">$985,000</div></div>
      </div>

      <div class="nu-callout">
        <div class="nu-callout-title">Rule of the Walk-Up</div>
        <p>
          The gaps shrink deliberately: $20K, $15K, $25K, $25K. Step 4 reopens slightly to make the walk-away
          at Step 5 credible. If the seller sees a flat $20K ladder, they will wait you out at the top. Uneven
          increments break the pattern and keep the seller reading.
        </p>
      </div>

      <!-- SECTION 3 -->
      <h2 class="nu-section-title">Leverage <span>Points to Use</span></h2>

      <div class="nu-badge"><span class="nu-badge-num">1</span>Cash or near-cash buyer — no financing drama</div>
      <div class="nu-badge"><span class="nu-badge-num">2</span>Flexible close date — accommodate the seller's schedule</div>
      <div class="nu-badge"><span class="nu-badge-num">3</span>Short inspection window — 10 days instead of 15</div>
      <div class="nu-badge"><span class="nu-badge-num">4</span>Willingness to take property "as-is" on cosmetic items</div>
      <div class="nu-badge"><span class="nu-badge-num">5</span>No home-sale contingency — ready to move immediately</div>
      <div class="nu-badge"><span class="nu-badge-num">6</span>Local buyer with reputation — closes cleanly, no re-trades</div>

      <p>
        Each of these has a dollar value to the seller. If the seller pushes on price, start trading on these
        terms <em>before</em> giving more money. Every concession on terms preserves capital; every concession
        on price spends it.
      </p>

      <!-- SECTION 4 -->
      <h2 class="nu-section-title">Seller's Likely <span>Objections & Responses</span></h2>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width:28%">Seller Says</th>
              <th style="width:40%">Aaron's Response</th>
              <th style="width:32%">Underlying Move</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>"That's well below our asking."</strong></td>
              <td>"I understand. The number reflects what the carry, the condition, and the comps actually support for us today. I would rather put a real number on the table than waste your time."</td>
              <td>Hold. Do not move. Force the counter.</td>
            </tr>
            <tr>
              <td><strong>"We already turned down more than that."</strong></td>
              <td>"That may well be true. Those offers aren't on the table anymore. Mine is — and it's clean, short inspection, flexible close."</td>
              <td>Redirect to terms. Don't chase lost offers.</td>
            </tr>
            <tr>
              <td><strong>"What's your real number?"</strong></td>
              <td>"$900,000 is my number today. Show me what works for you, and we'll see where there's room."</td>
              <td>Never reveal the ceiling. Make them counter first.</td>
            </tr>
            <tr>
              <td><strong>"We need at least $1,050,000."</strong></td>
              <td>"I can't get there. I can move to $920,000 if we lock the close date and keep inspection at 10 days." <em>(Use only after a real counter, never on first push.)</em></td>
              <td>Step 2 — concede in exchange for terms.</td>
            </tr>
            <tr>
              <td><strong>"We'll split the difference."</strong></td>
              <td>"I appreciate that. Splitting from where you sit lands higher than I can go. Let me come back with what I can actually do."</td>
              <td>Never accept split-the-difference. It is a rhetorical trap that concedes the midpoint as fair.</td>
            </tr>
            <tr>
              <td><strong>"We'll think about it."</strong></td>
              <td>"Take the time you need. My offer holds for 72 hours."</td>
              <td>Put a clock on it. Silence favors the seller otherwise.</td>
            </tr>
            <tr>
              <td><strong>"What if we left the furniture?"</strong></td>
              <td>"Depends on what stays. Send me a list and I'll tell you what it changes."</td>
              <td>Never price chattel in the room. Always defer.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 5 -->
      <h2 class="nu-section-title">Anchor <span>Scripts — Word for Word</span></h2>

      <p class="nu-subsection-title">Opening the conversation</p>
      <div class="nu-quote">
        I've walked the property, run the numbers, and I'm prepared to put $900,000 on the table, cash, with a 10-day inspection and a close date that works for you. It's a serious, clean offer. I wanted to bring it to you directly before anyone else did.
      </div>

      <p class="nu-subsection-title">After the first pushback</p>
      <div class="nu-quote">
        I hear you. The figure isn't arbitrary — it's what the comps, the carry, and the condition line up to. I'd rather be honest up front than start where I can't finish. Where do you need to be?
      </div>

      <p class="nu-subsection-title">Stepping to Step 3 ($935,000 — target)</p>
      <div class="nu-quote">
        $935,000, close on your timeline, inspection wraps in 10 days, no seller concessions requested. That is a full stretch for us. If that works, we draft tonight.
      </div>

      <p class="nu-subsection-title">At the ceiling ($985,000)</p>
      <div class="nu-quote">
        $985,000 is the most I can responsibly do on this property. Beyond that, the numbers don't work for me — and I'd rather walk as friends than stretch into a deal I regret. Let me know by Friday.
      </div>

      <p class="nu-subsection-title">The walk-away line</p>
      <div class="nu-quote">
        I appreciate the conversation, and I respect where you are. This one isn't going to come together at your number, and I won't push mine past where it should go. If anything changes on your end, the door is open.
      </div>

      <!-- SECTION 6 -->
      <h2 class="nu-section-title">Pros <span>& Risks of Proceeding</span></h2>

      <div class="nu-two-col">
        <div class="nu-card nu-pro">
          <h4 style="color: var(--nu-success);">Pros of Pursuing at $900K Anchor</h4>
          <ul class="nu-list">
            <li>Structured approach avoids emotional over-payment</li>
            <li>Disciplined ceiling protects downside</li>
            <li>Terms-for-price trade preserves cash</li>
            <li>72-hour clock prevents the offer from going stale</li>
            <li>Clean-buyer profile gives real leverage vs. financed offers</li>
          </ul>
        </div>
        <div class="nu-card nu-con">
          <h4 style="color: var(--nu-danger);">Risks to Watch</h4>
          <ul class="nu-list">
            <li>Seller may take the anchor personally — soften tone, keep numbers firm</li>
            <li>Competing offer could surface mid-negotiation — hold ceiling anyway</li>
            <li>Inspection surprises on a 7,098 sq ft estate can swing repairs $30K+</li>
            <li>Emotional attachment to the property itself — easiest way to lose discipline</li>
            <li>Seller stalls past 72 hours — be prepared to actually withdraw</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 7 -->
      <h2 class="nu-section-title">Pre-Submission <span>Checklist</span></h2>

      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Comps pulled:</strong> 3–5 recent closes on 6,500+ sq ft estates in submarket, last 180 days</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Days on market:</strong> Confirm current DOM and any prior price reductions</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Title & liens:</strong> Preliminary title check before offer goes out</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Carry cost:</strong> Taxes, insurance, HOA (if any), estimated utilities through close</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Inspection scope defined:</strong> 10-day window, major systems only, cosmetic waived</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Proof of funds:</strong> Letter dated within 30 days, attached to offer packet</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Close date flexibility:</strong> 30 / 45 / 60 day options drafted</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Earnest money:</strong> $10,000 to escrow, refundable during inspection</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Attorney on standby:</strong> Real estate counsel briefed to review counter within 4 hours</div></div>
      <div class="nu-check"><div class="nu-check-box"></div><div class="nu-check-text"><strong>Ceiling written down and signed:</strong> $985,000 — physically on paper, not in head</div></div>

      <div class="nu-callout nu-callout-warn">
        <div class="nu-callout-title">Discipline Note</div>
        <p>
          Write the $985,000 ceiling on paper before the first conversation. Sign and date it. The single biggest
          risk in an owner-direct negotiation is quiet ceiling-creep — a few thousand here, a few thousand there,
          and suddenly the deal is at $1.02M with no clear moment where the discipline broke. The signed number
          is the anchor <em>against yourself</em>.
        </p>
      </div>

      <!-- SECTION 8 -->
      <h2 class="nu-section-title">Timeline <span>& Decision Gates</span></h2>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Hour / Day</th>
              <th>Action</th>
              <th>Decision Gate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Day 0</strong></td>
              <td>Submit $900,000 offer with 72-hour acceptance clock</td>
              <td>Offer packet complete — all checklist items signed</td>
            </tr>
            <tr>
              <td><strong>Day 0–3</strong></td>
              <td>Await seller response. No follow-up calls. No softening.</td>
              <td>If silence at 72hr mark → withdraw, reset, or re-engage on new terms</td>
            </tr>
            <tr>
              <td><strong>Day 3–5</strong></td>
              <td>Receive counter. Respond with Step 2 ($920K) + terms lock.</td>
              <td>Counter must be specific — not "somewhere between." Force a real number.</td>
            </tr>
            <tr>
              <td><strong>Day 5–8</strong></td>
              <td>If seller counters again, move to Step 3 ($935K — target).</td>
              <td>If we land here, close. This is the win.</td>
            </tr>
            <tr>
              <td><strong>Day 8–12</strong></td>
              <td>If still apart, Step 4 ($960K) with explicit "close to ceiling" signal.</td>
              <td>Seller must move meaningfully to earn Step 5.</td>
            </tr>
            <tr>
              <td><strong>Day 12–15</strong></td>
              <td>Step 5 ($985K) as final. Signed ceiling statement shown if needed.</td>
              <td>Accepted = close. Rejected = walk. No Step 6 exists.</td>
            </tr>
            <tr>
              <td><strong>Day 15+</strong></td>
              <td>Walk. Revisit in 60 days if property still available.</td>
              <td>Walking is a position, not a failure. Some deals need time to mature.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 9 -->
      <h2 class="nu-section-title">Tactics <span>to Avoid</span></h2>

      <div class="nu-callout nu-callout-danger">
        <div class="nu-callout-title">Do Not</div>
        <ul class="nu-list" style="margin-top: 6px;">
          <li><strong>Do not</strong> negotiate against yourself. If the seller doesn't counter, the number stands.</li>
          <li><strong>Do not</strong> explain the ceiling, imply the ceiling, or hint at the ceiling. Ever.</li>
          <li><strong>Do not</strong> accept a verbal "yes" without a signed contract within 24 hours.</li>
          <li><strong>Do not</strong> re-trade the price after inspection unless repair costs materially exceed $15K of what was known.</li>
          <li><strong>Do not</strong> rush to Step 3. Each step requires a genuine seller counter.</li>
          <li><strong>Do not</strong> let the seller combine concessions (price + furniture + close date) and bill them as one package — break them apart.</li>
          <li><strong>Do not</strong> take a bad deal because it has been a long process. Sunk costs are not a reason to close.</li>
        </ul>
      </div>

      <!-- SECTION 10 -->
      <h2 class="nu-section-title">Post-Acceptance <span>Execution Notes</span></h2>

      <div class="nu-card-grid">
        <div class="nu-card">
          <h4>Within 24 hours of acceptance</h4>
          <ul class="nu-list">
            <li>Earnest money wired to escrow — confirmed with attorney</li>
            <li>Inspector booked for earliest available slot</li>
            <li>Title company engaged, prelim ordered</li>
            <li>Insurance quotes requested for close date</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Inspection window</h4>
          <ul class="nu-list">
            <li>Major systems only: roof, HVAC, electrical, plumbing, foundation</li>
            <li>Sewer scope if property has any drainage history</li>
            <li>Re-trade threshold: material defects > $15K or safety issues</li>
            <li>Cosmetic items: already taken "as-is" per offer terms</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Pre-close week</h4>
          <ul class="nu-list">
            <li>Final walk-through 24–48 hours before signing</li>
            <li>Confirm all personal property disposition matches contract</li>
            <li>Utility transfers scheduled for day-of close</li>
            <li>Wire funds 24 hours ahead to avoid last-minute settlement drama</li>
          </ul>
        </div>
        <div class="nu-card">
          <h4>Documentation to retain</h4>
          <ul class="nu-list">
            <li>All offer and counter-offer correspondence</li>
            <li>Inspection report and any re-trade documentation</li>
            <li>Title commitment, survey, and ALTA settlement statement</li>
            <li>Proof of earnest money, funds wire, and final close disbursement</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 11 -->
      <h2 class="nu-section-title">Summary <span>— The Discipline in One Page</span></h2>

      <div class="nu-callout">
        <div class="nu-callout-title">Three things to hold onto</div>
        <p><strong>1. Anchor at $900,000.</strong> It is the mechanic, not the insult. Defend it with comps, not emotion.</p>
        <p><strong>2. Target at $935,000.</strong> Walk-up in uneven steps. Trade terms before dollars. Never split the difference on command.</p>
        <p><strong>3. Ceiling at $985,000.</strong> Written on paper, signed, dated. If we hit it and the seller won't move, walk. The ceiling is the anchor against our own discipline.</p>
      </div>

      <p style="margin-top: 20px; font-size: 1.02rem;">
        Owner-direct negotiation on a personal-use estate is as much about protecting Aaron from Aaron as it is
        about handling the seller. The framework above is designed to keep the deal structured even when
        the property starts to feel like a must-have. Structure is what turns a $1.05M emotional buy into a
        $935K disciplined close.
      </p>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>