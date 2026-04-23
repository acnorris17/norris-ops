<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SA V5 Production Finalization — Norris Utilities®</title>
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
      --nu-success: #1A8754;
      --nu-warning: #C9A84C;
      --nu-danger: #C42B2B;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* Ghost phoenix watermark */
    .nu-header .ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 550px;
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
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ HERO STATUS ══ */
    .status-hero {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 50%, #0066ee 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 40px;
      margin-bottom: 48px;
      box-shadow: 0 8px 32px rgba(0, 51, 204, 0.25);
    }
    .status-hero h1 {
      font-weight: 900;
      font-size: 2rem;
      letter-spacing: 0.02em;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .status-hero .subtitle {
      font-size: 1.05rem;
      opacity: 0.92;
      margin-bottom: 28px;
    }
    .status-hero-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    .status-stat {
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px;
      padding: 18px;
    }
    .status-stat-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .status-stat-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.1;
    }
    .status-stat-note {
      font-size: 0.82rem;
      opacity: 0.85;
      margin-top: 4px;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-intro {
      color: #555;
      font-size: 1rem;
      margin-bottom: 24px;
      max-width: 760px;
    }

    /* ══ CHECKLIST CARDS ══ */
    .checklist-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }
    .checklist-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .checklist-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    .checklist-card.done {
      border-left-color: var(--nu-success);
      background: #F4FBF7;
    }
    .checklist-card.pending {
      border-left-color: var(--nu-warning);
      background: #FDFBF3;
    }
    .checklist-card.blocked {
      border-left-color: var(--nu-danger);
      background: #FDF5F5;
    }
    .checklist-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 10px;
    }
    .checklist-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .checklist-badge {
      flex-shrink: 0;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }
    .badge-done { background: var(--nu-success); color: var(--nu-white); }
    .badge-pending { background: var(--nu-warning); color: var(--nu-white); }
    .badge-blocked { background: var(--nu-danger); color: var(--nu-white); }
    .checklist-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .checklist-meta {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.82rem;
      color: #666;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }
    .checklist-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION LIST (numbered) ══ */
    .section-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .section-row {
      display: grid;
      grid-template-columns: 70px 1fr 140px;
      gap: 18px;
      align-items: center;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 16px 20px;
      transition: background 0.2s ease;
    }
    .section-row:hover { background: var(--nu-light-gray); }
    .section-num {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      letter-spacing: 0.02em;
    }
    .section-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.4;
    }
    .section-label small {
      display: block;
      font-weight: 400;
      color: #666;
      font-size: 0.85rem;
      margin-top: 2px;
    }
    .section-status {
      text-align: right;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .status-pass { color: var(--nu-success); }
    .status-progress { color: var(--nu-warning); }
    .status-open { color: #777; }

    /* ══ GATE TABLE ══ */
    .gate-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .gate-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 14px 18px;
      text-align: left;
    }
    .gate-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .gate-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .gate-table .gate-num { font-weight: 900; color: var(--nu-blue); }
    .gate-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .pill-pass { background: #D9F0E3; color: var(--nu-success); }
    .pill-progress { background: #FBF1D3; color: #8A6D13; }
    .pill-open { background: #E8E8EC; color: #555; }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #F0F6FF 0%, #E6F3FF 100%);
      border: 1px solid #C9DCF5;
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      margin: 24px 0 32px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* ══ FINAL ACTIONS ══ */
    .action-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      padding: 24px;
      background: var(--nu-light-gray);
      border-radius: 10px;
      margin-top: 28px;
    }
    .action-btn {
      flex: 1 1 220px;
      display: flex;
      flex-direction: column;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 16px 18px;
      text-decoration: none;
      color: var(--nu-dark-text);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      border-color: var(--nu-blue);
    }
    .action-btn-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .action-btn-text {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3;
    }

    /* ══ SIGN-OFF ══ */
    .signoff-box {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      margin: 40px 0 0;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
    }
    .signoff-text h3 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .signoff-text p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .signoff-stamp {
      text-align: center;
      border: 2px dashed var(--nu-blue);
      border-radius: 8px;
      padding: 14px 22px;
      color: var(--nu-blue);
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-size: 0.8rem;
      line-height: 1.3;
    }
    .signoff-stamp strong { display: block; font-size: 1rem; margin-top: 4px; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: Georgia, 'Times New Roman', serif;
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
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .status-hero { padding: 28px 22px; }
      .status-hero h1 { font-size: 1.5rem; }
      .section-row { grid-template-columns: 50px 1fr; }
      .section-status { grid-column: 2; text-align: left; margin-top: 4px; }
      .signoff-box { grid-template-columns: 1fr; text-align: center; }
      .gate-table th, .gate-table td { padding: 10px 12px; font-size: 0.85rem; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; }
      .checklist-card { break-inside: avoid; }
      .section-row { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    <div class="nu-doc-label">SA V5 — Production Finalization</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- HERO STATUS -->
      <section class="status-hero">
        <h1>Finalize V5 Version for Production</h1>
        <div class="subtitle">Sales Agent V5 — final pre-release gate review for the Norris Utilities® internal shipment and invoicing portal. Branch: <strong>feature/sa-v5-completion</strong>.</div>
        <div class="status-hero-grid">
          <div class="status-stat">
            <div class="status-stat-label">Sections Complete</div>
            <div class="status-stat-value">5 of 7</div>
            <div class="status-stat-note">Sections 1, 2, 4, 7-lite locked; 3 & 5 in review</div>
          </div>
          <div class="status-stat">
            <div class="status-stat-label">Tests Passing</div>
            <div class="status-stat-value">27 / 27</div>
            <div class="status-stat-note">Playwright + pytest green on last run</div>
          </div>
          <div class="status-stat">
            <div class="status-stat-label">Target Merge</div>
            <div class="status-stat-value">2026-04-25</div>
            <div class="status-stat-note">Ahead of mobile release freeze</div>
          </div>
          <div class="status-stat">
            <div class="status-stat-label">Owner</div>
            <div class="status-stat-value">Aaron C. Norris</div>
            <div class="status-stat-note">Final sign-off — Founder &amp; CEO</div>
          </div>
        </div>
      </section>

      <!-- PRODUCTION READINESS CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Production <span>Readiness Checklist</span></h2>
        <p class="nu-section-intro">Every item below must show a green badge before V5 merges to main. Items are independently verifiable — no "trust me" entries.</p>

        <div class="checklist-grid">

          <div class="checklist-card done">
            <div class="checklist-header">
              <div class="checklist-title">Brand Inheritance Verified</div>
              <span class="checklist-badge badge-done">Done</span>
            </div>
            <div class="checklist-body">
              Gradient header, white chevron transition, and ghost Phoenix Icon® render across all seven portal sections. Playwright smoke test asserts computed styles against the Line Card spec.
            </div>
            <div class="checklist-meta">
              <span><strong>Commit:</strong> 877e93a</span>
              <span><strong>Run:</strong> 2026-04-22</span>
            </div>
          </div>

          <div class="checklist-card done">
            <div class="checklist-header">
              <div class="checklist-title">Section 1 — Shipments Table</div>
              <span class="checklist-badge badge-done">Done</span>
            </div>
            <div class="checklist-body">
              14-column shipments table with PULSE KPI strip, combined status filter chips, and full-text search. Rule R9 (Abadie) scoped to file sources only per the fix in commit b241427.
            </div>
            <div class="checklist-meta">
              <span><strong>Tests:</strong> 14 passing</span>
              <span><strong>Owner:</strong> Aaron</span>
            </div>
          </div>

          <div class="checklist-card done">
            <div class="checklist-header">
              <div class="checklist-title">Section 4 — Copy-Button Matrix</div>
              <span class="checklist-badge badge-done">Done</span>
            </div>
            <div class="checklist-body">
              Thirteen copy buttons verified against real QuickBooks and UPS reference data. Clipboard payloads match fixture strings byte-for-byte — no trailing whitespace, no smart-quote drift.
            </div>
            <div class="checklist-meta">
              <span><strong>Commit:</strong> bfc3fee</span>
              <span><strong>Tests:</strong> 13 passing</span>
            </div>
          </div>

          <div class="checklist-card done">
            <div class="checklist-header">
              <div class="checklist-title">Section 7-lite — Registry Loader</div>
              <span class="checklist-badge badge-done">Done</span>
            </div>
            <div class="checklist-body">
              Phase A scope: Python registry loader hydrates customer, contact, and ship-to tables from the canonical JSON. CSV review artifact (customer_registry_review.csv) generated for Aaron.
            </div>
            <div class="checklist-meta">
              <span><strong>Commit:</strong> 4878fe5</span>
              <span><strong>Scope:</strong> Phase A only</span>
            </div>
          </div>

          <div class="checklist-card pending">
            <div class="checklist-header">
              <div class="checklist-title">Section 3 — Invoicing PULSE KPI</div>
              <span class="checklist-badge badge-pending">In Review</span>
            </div>
            <div class="checklist-body">
              Six-tile KPI strip with Today/This Week/This Month/This Quarter/YTD toggle. Waiting on final reconciliation of open invoice totals against QuickBooks export — last outstanding number was ~$5,760.
            </div>
            <div class="checklist-meta">
              <span><strong>Blocker:</strong> QB figure recheck</span>
              <span><strong>ETA:</strong> 2026-04-24</span>
            </div>
          </div>

          <div class="checklist-card pending">
            <div class="checklist-header">
              <div class="checklist-title">Section 5 — Deal Pipeline View</div>
              <span class="checklist-badge badge-pending">In Review</span>
            </div>
            <div class="checklist-body">
              Terex (Bill Kugler) and Skylift PO ($1,091,402.50) must render with correct stage, last-contact, and next-step fields. CC-rule enforcement for Boss (Troy + Thayne) and Samson (Donna + Sarah) verified in QA.
            </div>
            <div class="checklist-meta">
              <span><strong>Test:</strong> CC-rule fixture</span>
              <span><strong>Owner:</strong> Aaron</span>
            </div>
          </div>

          <div class="checklist-card done">
            <div class="checklist-header">
              <div class="checklist-title">GitHub Push Pipeline</div>
              <span class="checklist-badge badge-done">Done</span>
            </div>
            <div class="checklist-body">
              Every internal build under ~/norris-agent/output/ auto-mirrors to ~/norris-ops/ with commit + push. Failure path sends a Telegram alert rather than silent drop.
            </div>
            <div class="checklist-meta">
              <span><strong>Live at:</strong> ops.norrisutilities.com</span>
            </div>
          </div>

          <div class="checklist-card pending">
            <div class="checklist-header">
              <div class="checklist-title">Rollback Plan Documented</div>
              <span class="checklist-badge badge-pending">Open</span>
            </div>
            <div class="checklist-body">
              One-command revert path: <em>git revert</em> of the V5 merge commit plus instructions for restoring the pre-V5 registry snapshot. Draft written — needs Aaron's final read.
            </div>
            <div class="checklist-meta">
              <span><strong>ETA:</strong> 2026-04-24</span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION BY SECTION -->
      <section class="nu-section">
        <h2 class="nu-section-title">Section-by-Section <span>Freeze Status</span></h2>
        <p class="nu-section-intro">Each V5 section has its own test file under tests/ and a named commit. The table below is the canonical freeze map — the order I will merge them in.</p>

        <div class="section-list">
          <div class="section-row">
            <div class="section-num">01</div>
            <div class="section-label">Shipments Table &amp; PULSE<small>14-col layout, filter chips, full-text search</small></div>
            <div class="section-status status-pass">Frozen · Passing</div>
          </div>
          <div class="section-row">
            <div class="section-num">02</div>
            <div class="section-label">Filter + Search Chrome<small>PULSE strip, combined status chips, responsive collapse</small></div>
            <div class="section-status status-pass">Frozen · Passing</div>
          </div>
          <div class="section-row">
            <div class="section-num">03</div>
            <div class="section-label">Invoicing KPI Tiles<small>Today / Week / Month / Quarter / YTD toggles</small></div>
            <div class="section-status status-progress">Review · QB Tie-out</div>
          </div>
          <div class="section-row">
            <div class="section-num">04</div>
            <div class="section-label">Copy-Button Matrix<small>13 clipboard payloads verified against fixtures</small></div>
            <div class="section-status status-pass">Frozen · Passing</div>
          </div>
          <div class="section-row">
            <div class="section-num">05</div>
            <div class="section-label">Deal Pipeline View<small>Terex, Skylift, Boss, Samson — CC-rule enforced</small></div>
            <div class="section-status status-progress">Review · CC Fixtures</div>
          </div>
          <div class="section-row">
            <div class="section-num">06</div>
            <div class="section-label">Operations Journal Feed<small>Daily journal + session-summary cross-link</small></div>
            <div class="section-status status-open">Deferred to V5.1</div>
          </div>
          <div class="section-row">
            <div class="section-num">07</div>
            <div class="section-label">Customer Registry (Phase A)<small>Python loader + CSV review artifact</small></div>
            <div class="section-status status-pass">Frozen · Phase A Only</div>
          </div>
        </div>
      </section>

      <!-- RELEASE GATES -->
      <section class="nu-section">
        <h2 class="nu-section-title">Release <span>Gates &amp; Evidence</span></h2>
        <p class="nu-section-intro">Seven gates separate feature/sa-v5-completion from main. Each gate has a named verifier and an artifact link so Aaron can audit later without re-running tests.</p>

        <table class="gate-table">
          <thead>
            <tr>
              <th>Gate</th>
              <th>Requirement</th>
              <th>Evidence</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="gate-num">G1</td>
              <td>Brand inheritance Playwright smoke</td>
              <td>commit 877e93a — tests/section1_brand.spec.js</td>
              <td><span class="gate-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="gate-num">G2</td>
              <td>Section 1 table + filter + search</td>
              <td>commit 71215e5 — 14 tests passing</td>
              <td><span class="gate-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="gate-num">G3</td>
              <td>Section 4 copy buttons vs real data</td>
              <td>commit bfc3fee — 13 tests passing</td>
              <td><span class="gate-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="gate-num">G4</td>
              <td>Section 7-lite registry loader (Phase A)</td>
              <td>commit 4878fe5 — customer_registry_review.csv</td>
              <td><span class="gate-pill pill-pass">Pass</span></td>
            </tr>
            <tr>
              <td class="gate-num">G5</td>
              <td>Section 3 QB tie-out (open invoices)</td>
              <td>Pending — reconcile against QuickBooks export</td>
              <td><span class="gate-pill pill-progress">In&nbsp;Progress</span></td>
            </tr>
            <tr>
              <td class="gate-num">G6</td>
              <td>Section 5 deal pipeline + CC rules</td>
              <td>Pending — CC-rule fixture for Boss &amp; Samson</td>
              <td><span class="gate-pill pill-progress">In&nbsp;Progress</span></td>
            </tr>
            <tr>
              <td class="gate-num">G7</td>
              <td>Rollback instructions reviewed by Aaron</td>
              <td>Draft in docs/rollback-sa-v5.md</td>
              <td><span class="gate-pill pill-open">Open</span></td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-title">Rule R9 (Abadie) — Resolved</div>
          <p>During Section 1 test fixup, the Abadie guard was over-broadly applied to every data source. Commit <strong>b241427</strong> now scopes R9 to file sources only, matching the original ruling. This closed the last failing Section 1 test.</p>
        </div>
      </section>

      <!-- PRODUCTION CUTOVER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Production <span>Cutover Plan</span></h2>
        <p class="nu-section-intro">Four sequenced steps from "branch frozen" to "live at ops.norrisutilities.com". No step may be skipped — this ordering protects the invoice and shipment tables from a half-migrated registry.</p>

        <div class="section-list">
          <div class="section-row">
            <div class="section-num">1</div>
            <div class="section-label">Close G5 and G6<small>Finish QB tie-out and CC-rule fixture; mark checklist cards green</small></div>
            <div class="section-status status-progress">2026-04-24</div>
          </div>
          <div class="section-row">
            <div class="section-num">2</div>
            <div class="section-label">Full-run test suite on clean clone<small>pytest + Playwright from a fresh checkout of feature/sa-v5-completion</small></div>
            <div class="section-status status-open">2026-04-24 PM</div>
          </div>
          <div class="section-row">
            <div class="section-num">3</div>
            <div class="section-label">Aaron final review &amp; sign-off<small>Walk the portal end-to-end, confirm brand + data + copy buttons</small></div>
            <div class="section-status status-open">2026-04-25 AM</div>
          </div>
          <div class="section-row">
            <div class="section-num">4</div>
            <div class="section-label">Squash-merge to main &amp; push<small>Mirror to ~/norris-ops/, git push, verify ops.norrisutilities.com loads V5</small></div>
            <div class="section-status status-open">2026-04-25 Noon</div>
          </div>
        </div>

        <div class="action-bar">
          <a class="action-btn" href="#g5">
            <span class="action-btn-label">Gate G5</span>
            <span class="action-btn-text">Reconcile QB Open Invoices</span>
          </a>
          <a class="action-btn" href="#g6">
            <span class="action-btn-label">Gate G6</span>
            <span class="action-btn-text">Freeze Deal Pipeline CC Rules</span>
          </a>
          <a class="action-btn" href="#g7">
            <span class="action-btn-label">Gate G7</span>
            <span class="action-btn-text">Rollback Plan — Aaron Review</span>
          </a>
          <a class="action-btn" href="#merge">
            <span class="action-btn-label">Merge Step</span>
            <span class="action-btn-text">Squash-Merge to main</span>
          </a>
        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <div class="signoff-box">
          <div class="signoff-text">
            <h3>Final Production Sign-Off</h3>
            <p>V5 merges only after Aaron C. Norris, Founder &amp; CEO, confirms every gate above. No bypass. No partial merge. If a gate fails, we fix the gate — we do not lower the bar.</p>
          </div>
          <div class="signoff-stamp">
            Release Owner<strong>Aaron C. Norris</strong>Target: 2026-04-25
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