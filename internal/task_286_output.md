<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finalize V5 for Production — Norris Utilities®</title>
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
      --nu-success: #1F8A4C;
      --nu-warning: #C9761A;
      --nu-danger: #B3261E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
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
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }
    .nu-doc-meta {
      margin-top: 28px;
      display: inline-flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .nu-doc-pill {
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.28);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      backdrop-filter: blur(4px);
    }

    /* ══ CHEVRON ══ */
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
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 320px; left: 50%;
      transform: translateX(-50%);
      width: 560px; height: 560px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 64px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* ══ INTRO ══ */
    .intro-block {
      text-align: center;
      margin-bottom: 56px;
    }
    .intro-kicker {
      display: inline-block;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-blue);
      padding: 6px 14px;
      border: 1px solid rgba(0,0,255,0.25);
      border-radius: 999px;
      margin-bottom: 20px;
    }
    .intro-title {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .intro-title span { color: var(--nu-blue); }
    .intro-lead {
      max-width: 780px;
      margin: 0 auto;
      font-size: 1.08rem;
      color: #555;
    }

    /* ══ SECTION TITLES ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-blue);
      margin: 48px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title span { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::after {
      content: '';
      position: absolute;
      left: 0; bottom: -2px;
      width: 80px; height: 2px;
      background: var(--nu-cyan);
    }
    .section-sub {
      color: #666;
      font-size: 0.98rem;
      margin-bottom: 24px;
    }

    /* ══ STATUS STRIP ══ */
    .status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 16px;
    }
    .status-tile {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .status-tile.ok { border-left-color: var(--nu-success); }
    .status-tile.warn { border-left-color: var(--nu-warning); }
    .status-tile.block { border-left-color: var(--nu-danger); }
    .status-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .status-value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
    }
    .status-note {
      margin-top: 4px;
      font-size: 0.85rem;
      color: #666;
    }

    /* ══ GATE CARDS ══ */
    .gate-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }
    .gate-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .gate-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .gate-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 12px;
    }
    .gate-num {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
    }
    .gate-badge {
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 999px;
    }
    .badge-pass { background: rgba(31,138,76,0.12); color: var(--nu-success); }
    .badge-progress { background: rgba(201,118,26,0.12); color: var(--nu-warning); }
    .badge-locked { background: rgba(0,0,255,0.10); color: var(--nu-blue); }
    .gate-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .gate-body {
      font-size: 0.93rem;
      color: #555;
      margin-bottom: 10px;
    }
    .gate-list {
      list-style: none;
      padding: 0;
      margin: 10px 0 0;
    }
    .gate-list li {
      position: relative;
      padding: 4px 0 4px 22px;
      font-size: 0.9rem;
      color: #444;
    }
    .gate-list li::before {
      content: '';
      position: absolute;
      left: 4px; top: 12px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }

    /* ══ TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      background: var(--nu-white);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
    }
    table.nu-table thead th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    table.nu-table tbody td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:nth-child(even) { background: #fafbff; }
    .td-check { color: var(--nu-success); font-weight: 900; }
    .td-x { color: var(--nu-danger); font-weight: 900; }
    .td-dash { color: #aaa; font-weight: 700; }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%);
      border: 1px solid rgba(0,0,255,0.12);
      border-radius: 10px;
      padding: 24px 28px;
    }
    .checklist ol {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .checklist ol li {
      counter-increment: step;
      position: relative;
      padding: 10px 0 10px 44px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist ol li:last-child { border-bottom: none; }
    .checklist ol li::before {
      content: counter(step);
      position: absolute;
      left: 0; top: 10px;
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checklist ol li strong { color: var(--nu-dark-text); }

    /* ══ CALLOUTS ══ */
    .callout {
      display: flex;
      gap: 16px;
      padding: 18px 22px;
      border-radius: 10px;
      margin: 16px 0;
      background: #f6f9ff;
      border-left: 4px solid var(--nu-blue);
    }
    .callout.warn { background: #fff8ef; border-left-color: var(--nu-warning); }
    .callout.danger { background: #fff1f0; border-left-color: var(--nu-danger); }
    .callout.ok { background: #f0faf4; border-left-color: var(--nu-success); }
    .callout-icon {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      line-height: 1;
      flex-shrink: 0;
    }
    .callout.warn .callout-icon { color: var(--nu-warning); }
    .callout.danger .callout-icon { color: var(--nu-danger); }
    .callout.ok .callout-icon { color: var(--nu-success); }
    .callout-body { font-size: 0.95rem; color: #333; }
    .callout-body strong { color: var(--nu-dark-text); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 18px 12px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -24px; top: 16px;
      width: 12px; height: 12px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-date {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .timeline-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-body { font-size: 0.92rem; color: #555; }

    /* ══ APPROVAL BOX ══ */
    .approval-block {
      margin-top: 48px;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 70%, #0066EE 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 36px 40px;
      position: relative;
      overflow: hidden;
    }
    .approval-block::before {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 60%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.25) 0%, transparent 70%);
    }
    .approval-block > * { position: relative; z-index: 1; }
    .approval-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin-bottom: 12px;
    }
    .approval-text {
      font-size: 0.98rem;
      color: rgba(255,255,255,0.9);
      max-width: 780px;
      margin-bottom: 22px;
    }
    .approval-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }
    .approval-slot {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 8px;
      padding: 16px 18px;
    }
    .approval-role {
      font-size: 0.74rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .approval-name {
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .approval-sig {
      border-top: 1px solid rgba(255,255,255,0.3);
      padding-top: 8px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.7);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .intro-title { font-size: 1.9rem; }
      .approval-block { padding: 28px 22px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .gate-card, .nu-table-wrap, .checklist, .callout, .approval-block {
        box-shadow: none;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>

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
    <div class="nu-doc-meta">
      <span class="nu-doc-pill">V5 Production Release</span>
      <span class="nu-doc-pill">Sprint 2 — Gate 2 Locked</span>
      <span class="nu-doc-pill">Prepared 2026-04-21</span>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <section class="intro-block">
        <span class="intro-kicker">reMarkable Action Item</span>
        <h1 class="intro-title">Finalize <span>V5</span> for Production</h1>
        <p class="intro-lead">
          V5 of the Norris Utilities® shipping and invoice engine is ready to exit staging. This brief
          is the single source of truth for what is locked, what remains, and how we sign off before
          the first live customer order runs through the V5 pipeline.
        </p>
      </section>

      <h2 class="nu-section-title">Release <span>Snapshot</span></h2>
      <p class="section-sub">Current status of the V5 branch as of 2026-04-21 against the Sprint 2 exit criteria.</p>
      <div class="status-strip">
        <div class="status-tile ok">
          <div class="status-label">Branch</div>
          <div class="status-value">feature/shipping-agent-v5</div>
          <div class="status-note">Behind main by 0 commits, ahead by 5</div>
        </div>
        <div class="status-tile ok">
          <div class="status-label">Unit Tests</div>
          <div class="status-value">26 / 26 Passing</div>
          <div class="status-note">Decimal math, Ben's formula, UPS parsers</div>
        </div>
        <div class="status-tile ok">
          <div class="status-label">Regression Anchor</div>
          <div class="status-value">Chain Electric $8,930.48</div>
          <div class="status-note">Matches QuickBooks invoice to the cent</div>
        </div>
        <div class="status-tile warn">
          <div class="status-label">Tandem Agreement</div>
          <div class="status-value">78.7% (63 / 80)</div>
          <div class="status-note">Target 95% before Gate 3</div>
        </div>
        <div class="status-tile block">
          <div class="status-label">Akamai Browser Probe</div>
          <div class="status-value">Blocked</div>
          <div class="status-note">Documented — API path used instead</div>
        </div>
        <div class="status-tile ok">
          <div class="status-label">Production Order</div>
          <div class="status-value">9-Method Pipeline</div>
          <div class="status-note">ups_store_receipt added as explicit rung</div>
        </div>
      </div>

      <h2 class="nu-section-title">Gate <span>Readiness</span></h2>
      <p class="section-sub">
        V5 ships in three gates. Gate 1 and Gate 2 are locked. Gate 3 is the finalization pass that
        closes this action item.
      </p>
      <div class="gate-grid">
        <div class="gate-card">
          <div class="gate-head">
            <span class="gate-num">Gate 1</span>
            <span class="gate-badge badge-pass">Locked</span>
          </div>
          <div class="gate-title">Invoice Math &amp; Shipping Formulas</div>
          <div class="gate-body">
            Decimal-based invoice_prep.py with Ben's Shipping Formula and Dealer's shipping
            formula both green. Chain Electric regression anchors the math.
          </div>
          <ul class="gate-list">
            <li>ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0) verified</li>
            <li>FlexPro Armor 50% / Samson 30% margin rules wired</li>
            <li>15 / 15 pricing tests green</li>
          </ul>
        </div>

        <div class="gate-card">
          <div class="gate-head">
            <span class="gate-num">Gate 2</span>
            <span class="gate-badge badge-pass">Locked</span>
          </div>
          <div class="gate-title">UPS Tracking + 9-Method Production Order</div>
          <div class="gate-body">
            Multi-method tracking pipeline with ups_store_receipt promoted to an explicit rung.
            Live probe behavior captured; Akamai block is the documented headline.
          </div>
          <ul class="gate-list">
            <li>9-method order frozen in process-rules/v5-order-rules</li>
            <li>Tandem mode with Apps Script enabled</li>
            <li>3-month silent-drop window documented</li>
          </ul>
        </div>

        <div class="gate-card">
          <div class="gate-head">
            <span class="gate-num">Gate 3</span>
            <span class="gate-badge badge-progress">In Progress</span>
          </div>
          <div class="gate-title">Historical Backprocess &amp; Canonical Persistence</div>
          <div class="gate-body">
            Email + V8 sheet reconciliation at 78.7% tandem agreement. Benz SD-2026-BENZ-SWEPCO-0320
            rendered with 4-source canonical persistence as the template pattern.
          </div>
          <ul class="gate-list">
            <li>Lift tandem agreement from 78.7% to ≥95%</li>
            <li>Close the historical gap inventory</li>
            <li>Re-render the remaining 14 shipment HTMLs on the Benz pattern</li>
          </ul>
        </div>

        <div class="gate-card">
          <div class="gate-head">
            <span class="gate-num">Gate 4</span>
            <span class="gate-badge badge-locked">Pending Gate 3</span>
          </div>
          <div class="gate-title">Production Cutover</div>
          <div class="gate-body">
            Flip feature/shipping-agent-v5 to main, freeze V4 scripts, and point the ops portal
            at the V5 canonical JSON. Triggered only after Aaron signs the approval block below.
          </div>
          <ul class="gate-list">
            <li>Merge to main with squash commit and release tag v5.0.0</li>
            <li>Retire V4 invoice_prep path</li>
            <li>Push to ops.norrisutilities.com and verify live</li>
          </ul>
        </div>
      </div>

      <h2 class="nu-section-title">Scope <span>Lock &amp; Acceptance Matrix</span></h2>
      <p class="section-sub">What is in V5, what was deferred to V5.1, and the accept/verify status of each.</p>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th>In V5</th>
              <th>V5.1 Later</th>
              <th>Verified Against</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ben's Shipping Formula (Decimal math)</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>Chain Electric invoice $8,930.48</td>
            </tr>
            <tr>
              <td>Dealer Shipping Formula</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>15 / 15 unit tests</td>
            </tr>
            <tr>
              <td>UPS Tracking — 9-method waterfall</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>Gate 2 report + 26 unit tests</td>
            </tr>
            <tr>
              <td>UPS Store Receipt Rung (explicit)</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>Gate 2 lock — 2026-04-20</td>
            </tr>
            <tr>
              <td>Tandem mode with Apps Script</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>Enabled, 63/80 matched</td>
            </tr>
            <tr>
              <td>Canonical JSON persistence (4-source)</td>
              <td class="td-check">Yes</td>
              <td class="td-dash">—</td>
              <td>Benz SWEPCO-0320 pattern</td>
            </tr>
            <tr>
              <td>Akamai browser-path live probe</td>
              <td class="td-x">No</td>
              <td class="td-check">V5.1</td>
              <td>Environment blocks headless browsers</td>
            </tr>
            <tr>
              <td>Automated remaining-shipment re-render</td>
              <td class="td-x">No</td>
              <td class="td-check">Gate 3 pass</td>
              <td>Currently: Benz done, 14 outstanding</td>
            </tr>
            <tr>
              <td>Tandem agreement ≥95% auto-gate</td>
              <td class="td-x">No</td>
              <td class="td-check">Gate 3 pass</td>
              <td>Current: 78.7%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="nu-section-title">Production <span>Cutover Checklist</span></h2>
      <p class="section-sub">Execute in order. Do not skip. Each step must be verified before the next begins.</p>
      <div class="checklist">
        <ol>
          <li><strong>Run full test suite</strong> — <code>pytest -q</code> must show 26 / 26 passing on feature/shipping-agent-v5.</li>
          <li><strong>Re-run Chain Electric regression</strong> — invoice_prep.py must output $8,930.48 to the cent.</li>
          <li><strong>Close tandem gap</strong> — Lift email + V8 sheet agreement from 78.7% to ≥95% and commit the reconciliation delta.</li>
          <li><strong>Re-render 14 remaining shipment HTMLs</strong> on the Benz SD-2026-BENZ-SWEPCO-0320 4-source pattern.</li>
          <li><strong>Document Akamai limitation</strong> in process-rules/v5-order-rules-2026-04-18.md as a known V5.1 item.</li>
          <li><strong>Freeze V4 scripts</strong> — Move V4 invoice_prep path to /archive/v4/ and mark read-only.</li>
          <li><strong>Squash-merge</strong> feature/shipping-agent-v5 → main with commit message "V5 Production Release".</li>
          <li><strong>Tag release</strong> <code>v5.0.0</code> and push tag to origin.</li>
          <li><strong>Copy built assets</strong> to ~/norris-ops/ under internal/ and tools/ per the permanent GitHub push rule.</li>
          <li><strong>Push ops portal</strong> — <code>cd ~/norris-ops &amp;&amp; git add -A &amp;&amp; git commit -m "V5 live" &amp;&amp; git push</code>. Verify ops.norrisutilities.com serves the new pages.</li>
          <li><strong>Send Telegram confirmation</strong> to Aaron with green checks for each gate and a link to the first live V5 invoice.</li>
        </ol>
      </div>

      <h2 class="nu-section-title">Risk <span>&amp; Mitigation</span></h2>

      <div class="callout danger">
        <div class="callout-icon">!</div>
        <div class="callout-body">
          <strong>Akamai blocks headless browsers.</strong> The browser-based UPS probe will not run from
          this environment. Mitigation: the 9-method waterfall routes around it via API paths,
          ups_store_receipt, and tandem Apps Script. V5 ships without headless browser dependency.
        </div>
      </div>

      <div class="callout warn">
        <div class="callout-icon">!</div>
        <div class="callout-body">
          <strong>Tandem agreement at 78.7%.</strong> Must reach ≥95% before flipping to production so
          Aaron does not see disagreement between email-sourced and sheet-sourced shipment totals on a
          live customer invoice.
        </div>
      </div>

      <div class="callout ok">
        <div class="callout-icon">+</div>
        <div class="callout-body">
          <strong>Chain Electric regression is green.</strong> Decimal-based math produces $8,930.48,
          matching the QuickBooks invoice. This is the anchor that proves V5 does not drift pennies
          on real customer totals.
        </div>
      </div>

      <div class="callout">
        <div class="callout-icon">i</div>
        <div class="callout-body">
          <strong>3-month silent-drop window documented.</strong> If UPS returns no data for a tracking
          number within 90 days of ship date, V5 treats the shipment as delivered-and-closed rather
          than retrying indefinitely. This is captured in Gate 2 rules.
        </div>
      </div>

      <h2 class="nu-section-title">Release <span>Timeline</span></h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2026-04-18</div>
          <div class="timeline-title">V5 Sprint 2 — D.5 Landed</div>
          <div class="timeline-body">invoice_prep.py with Decimal math committed. Chain Electric regression passes. 15 / 15 pricing tests green.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2026-04-19</div>
          <div class="timeline-title">D.6 — UPS Tracking Multi-Method</div>
          <div class="timeline-body">8-method tracking pipeline plus live probe shipped. Gate 2 report published. Akamai block confirmed as environment headline.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2026-04-20</div>
          <div class="timeline-title">D.6b + Gate 2 Lock</div>
          <div class="timeline-body">Backprocess dry-run across 5 email sources plus V8 sheet. Tandem agreement measured at 78.7%. 9-method order locked with ups_store_receipt added.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2026-04-20</div>
          <div class="timeline-title">D.8 — Benz SWEPCO-0320 Rendered</div>
          <div class="timeline-body">First 4-source canonical persistence page produced. This becomes the template for the remaining 14 shipments.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2026-04-21</div>
          <div class="timeline-title">Finalize V5 for Production (this brief)</div>
          <div class="timeline-body">Gate 3 work identified. Cutover checklist issued. Approval block ready for Aaron's signature.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">Target</div>
          <div class="timeline-title">V5.0.0 Tag + Ops Portal Cutover</div>
          <div class="timeline-body">Squash-merge to main, retire V4, push to ops.norrisutilities.com, Telegram confirmation to Aaron.</div>
        </div>
      </div>

      <section class="approval-block">
        <div class="approval-title">Sign-Off to Ship V5</div>
        <p class="approval-text">
          V5 goes live only after Aaron signs below. Signature authorizes the cutover checklist to
          execute, V4 to be frozen, and the v5.0.0 tag to be pushed. This is a one-way door — after
          merge, the next customer invoice runs through the V5 pipeline.
        </p>
        <div class="approval-grid">
          <div class="approval-slot">
            <div class="approval-role">Owner &amp; Release Authority</div>
            <div class="approval-name">Aaron C. Norris — Founder &amp; CEO</div>
            <div class="approval-sig">Signature / Date</div>
          </div>
          <div class="approval-slot">
            <div class="approval-role">Admin Verification</div>
            <div class="approval-name">Caroline Butler — Admin</div>
            <div class="approval-sig">Initials / Date</div>
          </div>
          <div class="approval-slot">
            <div class="approval-role">Build Engine</div>
            <div class="approval-name">Norris Utilities® Autonomous Agent</div>
            <div class="approval-sig">Run ID / Timestamp</div>
          </div>
        </div>
      </section>

    </div>
  </main>

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