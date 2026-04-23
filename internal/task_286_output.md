<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SA V5 Production Finalization — Norris Utilities®</title>
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
      --nu-success: #0A7A3B;
      --nu-warning: #B8860B;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header-inner { position: relative; z-index: 2; }

    /* Ghost phoenix watermark inside header */
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 24px;
      display: inline-block;
      background: rgba(0,0,0,0.25);
      color: var(--nu-cyan);
      padding: 8px 20px;
      border: 1px solid rgba(6,208,255,0.5);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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
    }
    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.65rem;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .lead { color: #0033cc; }
    .nu-section-title .tail { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-sub {
      color: #555;
      font-size: 0.98rem;
      margin-bottom: 24px;
      max-width: 820px;
    }
    .nu-rule {
      height: 3px;
      width: 64px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
    }

    /* EXEC SUMMARY */
    .exec-summary {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 48px;
    }
    .exec-summary h2 {
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .exec-summary p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .exec-summary p + p { margin-top: 10px; }
    .exec-summary strong { color: #0033cc; }

    /* KPI GRID */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .kpi {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .kpi-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .kpi-value {
      font-size: 1.9rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.1;
      margin-bottom: 4px;
    }
    .kpi-value.blue { color: var(--nu-blue); }
    .kpi-value.green { color: var(--nu-success); }
    .kpi-note {
      font-size: 0.82rem;
      color: #666;
    }

    /* GATE TABLE */
    .gate-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .gate-table thead th {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .gate-table tbody td {
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .gate-table tbody tr:nth-child(even) td { background: #fafbff; }
    .gate-table tbody tr:last-child td { border-bottom: none; }
    .gate-table td.num { font-weight: 900; color: var(--nu-blue); white-space: nowrap; }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .pill-pass { background: #e7f6ed; color: var(--nu-success); border: 1px solid #bfe4cd; }
    .pill-lock { background: #e6ecff; color: var(--nu-blue); border: 1px solid #c4d0ff; }

    /* FIX GRID */
    .fix-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
    }
    .fix-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      position: relative;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .fix-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.07);
    }
    .fix-card .fix-num {
      position: absolute;
      top: 14px; right: 16px;
      font-weight: 900;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
    }
    .fix-card h3 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      padding-right: 40px;
    }
    .fix-card p {
      font-size: 0.88rem;
      color: #555;
      line-height: 1.5;
    }
    .fix-card .status {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--nu-success);
      text-transform: uppercase;
    }

    /* CANARY BOX */
    .canary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .canary {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 22px 24px;
      border-radius: 6px;
      position: relative;
      overflow: hidden;
    }
    .canary::after {
      content: '';
      position: absolute;
      top: -40%; right: -30%;
      width: 140%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .canary * { position: relative; z-index: 1; }
    .canary-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .canary-value {
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 4px;
    }
    .canary-note {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.4;
    }
    .canary-tag {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      padding: 3px 9px;
      background: rgba(6,208,255,0.18);
      border: 1px solid rgba(6,208,255,0.5);
      color: var(--nu-cyan);
      font-weight: 700;
      text-transform: uppercase;
    }

    /* CHECKLIST */
    .checklist {
      background: #fbfbfd;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 26px;
    }
    .checklist ul { list-style: none; }
    .checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px dashed #e2e2ea;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 20px; height: 20px;
      border-radius: 50%;
      background: var(--nu-success);
      box-shadow: 0 0 0 3px rgba(10,122,59,0.12);
    }
    .checklist li::after {
      content: '';
      position: absolute;
      left: 6px; top: 16px;
      width: 8px; height: 4px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg);
    }
    .checklist li strong {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* PROTOCOL CALLOUT */
    .protocol {
      background: #fff9e6;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 6px;
      margin-top: 18px;
    }
    .protocol h3 {
      color: #8a6d1f;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .protocol p { font-size: 0.94rem; color: #4a3d0f; line-height: 1.6; }
    .protocol p + p { margin-top: 8px; }
    .protocol code {
      background: rgba(0,0,0,0.06);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.88rem;
    }

    /* SIGN-OFF */
    .signoff {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 60%, var(--nu-cyan) 150%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      margin-top: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .signoff::before {
      content: '';
      position: absolute;
      top: -20%; right: -15%;
      width: 60%; height: 160%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.22) 0%, transparent 70%);
    }
    .signoff * { position: relative; z-index: 1; }
    .signoff .status-title {
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .signoff .status-headline {
      font-weight: 900;
      font-size: 2.1rem;
      letter-spacing: 0.02em;
      margin-bottom: 10px;
    }
    .signoff .status-sub {
      font-size: 1rem;
      color: rgba(255,255,255,0.9);
      max-width: 720px;
      margin: 0 auto;
    }
    .signoff .meta {
      margin-top: 18px;
      font-size: 0.82rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.75);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .gate-table { font-size: 0.82rem; }
      .gate-table thead th, .gate-table tbody td { padding: 10px 8px; }
      .signoff .status-headline { font-size: 1.5rem; }
      .kpi-value { font-size: 1.5rem; }
    }

    @media print {
      .nu-header, .signoff, .canary, .gate-table thead th {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .fix-card, .kpi, .checklist { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-phoenix-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">SA V5 · Production Finalization</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <section class="exec-summary">
        <h2>Executive Summary</h2>
        <p>The <strong>Sales Audit V5 (SA V5)</strong> reconciliation system has completed all five gates and is ready for production use. Session 2 merged <strong>56 feature commits</strong> from the reconciliation branch, delivering eleven closed fixes (FIX 1 through FIX 11), a hardened Notes-field scraping protocol, box-size P/N inference, and a documented pricing source priority lesson.</p>
        <p>Immutable canaries hold: <strong>Chain Electric $8,930.48</strong>, <strong>Pickle $1,834.00</strong>, <strong>FIX 9 5/5</strong>, <strong>FIX 10 6/6</strong>, and <strong>FIX 11 Notes 9/9</strong>. The full test matrix is green at <strong>171 / 171 passing</strong>. This build is the production-finalization checkpoint — merge candidate <code>ea77e76</code> on <code>feature/sa-v5-completion</code>.</p>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">V5</span> <span class="tail">Production Scorecard</span></h2>
        <p class="nu-section-sub">Point-in-time production readiness as of Session 2 merge. All numbers match the latest run in <code>audit_results.json</code> and the Session 2 merge commit.</p>

        <div class="kpi-grid">
          <div class="kpi">
            <div class="kpi-label">Tests Passing</div>
            <div class="kpi-value green">171 / 171</div>
            <div class="kpi-note">Full suite green — no skipped cases</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">Gates Complete</div>
            <div class="kpi-value blue">5 / 5</div>
            <div class="kpi-note">Gate 5 signed off Session 2</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">Fixes Closed</div>
            <div class="kpi-value">11</div>
            <div class="kpi-note">FIX 1 → FIX 11, all verified</div>
          </div>
          <div class="kpi">
            <div class="kpi-label">Commits Absorbed</div>
            <div class="kpi-value">56</div>
            <div class="kpi-note">Merge tip <code>ea77e76</code></div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Gate</span> <span class="tail">Completion Matrix</span></h2>
        <p class="nu-section-sub">Each gate has been executed end-to-end against real QuickBooks and master pricing data. Gates are locked once signed off and are not re-run in isolation.</p>

        <table class="gate-table" role="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Gate</th>
              <th>Scope</th>
              <th>Evidence</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">1</td>
              <td>Source Truth Ingest</td>
              <td>QuickBooks + master pricing workbook pulled into canonical invoice index</td>
              <td>Chain Electric $8,930.48 canary locked</td>
              <td><span class="pill pill-pass">Passed</span></td>
            </tr>
            <tr>
              <td class="num">2</td>
              <td>Cross-Source Reconciliation</td>
              <td>Invoice-to-PO-to-shipment three-way match across SKU families</td>
              <td>Pickle $1,834 canary immutable</td>
              <td><span class="pill pill-pass">Passed</span></td>
            </tr>
            <tr>
              <td class="num">3</td>
              <td>Pricing Tier Enforcement</td>
              <td>Dealer, distributor, direct tiers applied to NU-BC-28xx lines</td>
              <td>NU-BC-2851 dealer tier at $235 verified</td>
              <td><span class="pill pill-pass">Passed</span></td>
            </tr>
            <tr>
              <td class="num">4</td>
              <td>Notes-Field Scraping</td>
              <td>Extract invoice-linked context from QB Notes before minting SDs</td>
              <td>FIX 11 Notes sweep 9 / 9 invoices</td>
              <td><span class="pill pill-pass">Passed</span></td>
            </tr>
            <tr>
              <td class="num">5</td>
              <td>Production Finalization</td>
              <td>Session 2 merge, canaries held, test suite green</td>
              <td>171 / 171 tests, merge tip <code>ea77e76</code></td>
              <td><span class="pill pill-lock">Locked</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Eleven</span> <span class="tail">Closed Fixes</span></h2>
        <p class="nu-section-sub">Every FIX listed below is verified against the live data set. No fix is marked closed on intent alone — each one carries a reproducible test case in the suite.</p>

        <div class="fix-grid">
          <div class="fix-card">
            <span class="fix-num">FIX 01</span>
            <h3>Invoice Key Normalization</h3>
            <p>Canonical invoice numbering across QuickBooks export variants to prevent duplicate SD mint.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 02</span>
            <h3>Customer Name Collapse</h3>
            <p>Merges parent/child account variants so shipments and invoices land on one ledger row.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 03</span>
            <h3>SKU Family Resolver</h3>
            <p>Maps competitor sizes (24x48, 24x34) onto NU-BC-2851 and NU-BC-2834 families.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 04</span>
            <h3>Shipping Line Reattach</h3>
            <p>Reattaches freight lines to the correct invoice header using Ben's rounding formula.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 05</span>
            <h3>Tier Determination</h3>
            <p>Dealer / distributor / direct tier decision locked to master workbook, not invoice hints.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 06</span>
            <h3>Combo Kit Decomposition</h3>
            <p>Splits NU-BC-2851-C and NU-BC-2834-C combos into cover + rope components for audit math.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 07</span>
            <h3>Shipment-Without-Invoice Sweep</h3>
            <p>Flags shipped units that never produced a QuickBooks invoice so revenue is not lost.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 08</span>
            <h3>Currency &amp; Rounding Lock</h3>
            <p>Forces USD, two-decimal cents and banker's rounding through the entire pipeline.</p>
            <span class="status">Verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 09</span>
            <h3>Multi-Ship-To Parent Order</h3>
            <p>Five-of-five test cases confirm one parent order can fan out to multiple ship destinations.</p>
            <span class="status">5 / 5 verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 10</span>
            <h3>Box-Size P/N Inference</h3>
            <p>Six-of-six test cases derive part number from box size when the SKU is missing on the invoice.</p>
            <span class="status">6 / 6 verified</span>
          </div>
          <div class="fix-card">
            <span class="fix-num">FIX 11</span>
            <h3>Notes-Field Scraping Bake-In</h3>
            <p>Nine-of-nine invoices reconciled via Notes scrape; T01–T04 closed without duplication, T05–T07 minted with corrected tiers, T08 linked to 1501.</p>
            <span class="status">9 / 9 verified</span>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Immutable</span> <span class="tail">Canaries</span></h2>
        <p class="nu-section-sub">Canaries are hand-verified reference values. They must match on every run before a release can ship. A canary miss blocks the merge.</p>

        <div class="canary-grid">
          <div class="canary">
            <div class="canary-label">Chain Electric</div>
            <div class="canary-value">$8,930.48</div>
            <div class="canary-note">Reconciled total, held across all Session 2 runs.</div>
            <span class="canary-tag">Immutable</span>
          </div>
          <div class="canary">
            <div class="canary-label">Pickle</div>
            <div class="canary-value">$1,834.00</div>
            <div class="canary-note">Reference shipment total, tier-validated.</div>
            <span class="canary-tag">Immutable</span>
          </div>
          <div class="canary">
            <div class="canary-label">FIX 9 — Multi-Ship-To</div>
            <div class="canary-value">5 / 5</div>
            <div class="canary-note">All parent-order fan-outs resolve correctly.</div>
            <span class="canary-tag">Locked</span>
          </div>
          <div class="canary">
            <div class="canary-label">FIX 10 — Box-Size P/N</div>
            <div class="canary-value">6 / 6</div>
            <div class="canary-note">Inference path produces correct NU-BC family.</div>
            <span class="canary-tag">Locked</span>
          </div>
          <div class="canary">
            <div class="canary-label">FIX 11 — Notes Scrape</div>
            <div class="canary-value">9 / 9</div>
            <div class="canary-note">T01–T04 closed · T05–T07 minted · T08 linked to 1501.</div>
            <span class="canary-tag">Locked</span>
          </div>
          <div class="canary">
            <div class="canary-label">NU-BC-2851 Dealer</div>
            <div class="canary-value">$235.00</div>
            <div class="canary-note">Verified against master pricing workbook.</div>
            <span class="canary-tag">Reference</span>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Pricing</span> <span class="tail">Source Priority</span></h2>
        <p class="nu-section-sub">A lesson added during FIX 11 reconciliation. Documented here so every future audit applies the same order of authority.</p>

        <div class="protocol">
          <h3>Priority of Authority</h3>
          <p><strong>1. Master pricing workbook</strong> — always the first source of truth for any part number that appears in the sheet. NU-BC-2851 dealer price <code>$235.00</code> is drawn directly from the master, not inferred.</p>
          <p><strong>2. Tiered formula fallback</strong> — Customer Price = Cost ÷ (1 − Margin%), applied <em>only</em> when a part number is unlisted in the master workbook. Never use the formula to override a listed price.</p>
          <p><strong>3. Invoice line hint</strong> — used for context only, never as a pricing source. If the invoice and the master disagree, the master wins and the invoice is flagged.</p>
        </div>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Notes-Field</span> <span class="tail">Scraping Protocol</span></h2>
        <p class="nu-section-sub">Before minting any new shipment document (SD), the reconciler must scrape the QuickBooks Notes field on related invoices. Locked as a permanent protocol during Session 2.</p>

        <div class="checklist">
          <ul>
            <li><strong>Scan first, mint last.</strong> Every candidate invoice gets a Notes sweep before an SD is created — avoids the four duplicates that would have been minted for T01–T04.</li>
            <li><strong>Invoice cross-check before mint.</strong> QB invoice table is queried for any ship-to, PO, or tracking token that matches the pending SD.</li>
            <li><strong>Link instead of duplicate.</strong> If a match is found, the SD is linked to the existing invoice (example: T08 → 1501) rather than minted fresh.</li>
            <li><strong>Mint with corrected tier.</strong> When the Notes scrape confirms a tier delta, SDs are minted with the corrected tier — not the invoice-stated tier.</li>
            <li><strong>Every scrape is logged.</strong> The scrape result — hit or miss — is written to the audit trail so reviewers can see why an SD was or wasn't created.</li>
          </ul>
        </div>
      </section>

      <section class="nu-section">
        <div class="nu-rule"></div>
        <h2 class="nu-section-title"><span class="lead">Production</span> <span class="tail">Release Checklist</span></h2>
        <p class="nu-section-sub">Final gating items confirmed before V5 is cleared for production. Each line is already green on the current merge tip.</p>

        <div class="checklist">
          <ul>
            <li>All <strong>5 gates</strong> passed and locked.</li>
            <li><strong>FIX 1 through FIX 11</strong> closed with reproducible test coverage.</li>
            <li><strong>Notes-field scraping protocol</strong> committed and referenced in sa_learnings.</li>
            <li><strong>Pricing source priority</strong> lesson appended to sa_learnings.</li>
            <li><strong>Box-size P/N inference</strong> covers all NU-BC-28xx families.</li>
            <li><strong>56 feature commits</strong> absorbed from reconciliation branch into <code>feature/sa-v5-completion</code>.</li>
            <li>Test suite: <strong>171 / 171 passing</strong>, no warnings suppressed.</li>
            <li>Canaries <strong>Chain Electric $8,930.48</strong> and <strong>Pickle $1,834</strong> match on clean re-run.</li>
          </ul>
        </div>

        <div class="signoff">
          <div class="status-title">SA V5 · Production Status</div>
          <div class="status-headline">Finalized &amp; Ready for Production</div>
          <div class="status-sub">Merge candidate <code style="background:rgba(255,255,255,0.15); padding:2px 8px; border-radius:3px; color:#fff;">ea77e76</code> on <code style="background:rgba(255,255,255,0.15); padding:2px 8px; border-radius:3px; color:#fff;">feature/sa-v5-completion</code>. Session 2 complete. Gate 5 signed. Canaries immutable.</div>
          <div class="meta">Prepared 2026-04-23 · Norris Utilities®</div>
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