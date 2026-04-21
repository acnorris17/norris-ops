<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation Action Plan — Norris Utilities®</title>
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
      --nu-warning-red: #C8102E;
      --nu-warning-amber: #F0A800;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }

    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      width: 78px;
      height: 78px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }

    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }

    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* DOCUMENT META BAR */
    .nu-doc-meta {
      background: var(--nu-light-gray);
      border-bottom: 3px solid var(--nu-blue);
      padding: 18px 40px;
    }
    .nu-doc-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-doc-meta-inner span { display: inline-flex; align-items: center; gap: 8px; }
    .nu-doc-meta-inner strong { color: var(--nu-blue); font-weight: 900; }
    .nu-priority-badge {
      background: var(--nu-warning-red);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 4px;
      font-weight: 900;
      letter-spacing: 0.08em;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      max-width: 700px; max-height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .nu-page-title-block {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-page-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 16px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .nu-page-title em {
      color: var(--nu-blue);
      font-style: normal;
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
      line-height: 1.55;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 56px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ALERT BANNER */
    .nu-alert {
      display: flex;
      gap: 18px;
      align-items: flex-start;
      background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
      border-left: 5px solid var(--nu-warning-red);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(200, 16, 46, 0.08);
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: var(--nu-warning-red);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      font-family: Georgia, serif;
    }
    .nu-alert-body h3 {
      font-weight: 900;
      color: var(--nu-warning-red);
      font-size: 1.05rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-alert-body p {
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      line-height: 1.55;
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin-bottom: 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding-left: 28px;
    }

    /* PHASE CARDS */
    .nu-phases {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 26px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
    }
    .nu-phase-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .nu-phase-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 14px;
    }
    .nu-phase-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.15rem;
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .nu-phase-timing {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-phase-card ul {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }
    .nu-phase-card ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-phase-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      line-height: 1;
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.93rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table tbody tr:hover {
      background: #eef4ff;
    }
    .nu-table .col-priority { font-weight: 700; }
    .priority-high { color: var(--nu-warning-red); }
    .priority-med { color: var(--nu-warning-amber); }
    .priority-routine { color: var(--nu-blue); }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 10px;
      padding: 28px 30px;
      border-left: 5px solid var(--nu-cyan);
    }
    .nu-checklist h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.1rem;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist ul li {
      padding: 10px 0 10px 36px;
      border-bottom: 1px dashed rgba(0,0,0,0.08);
      position: relative;
      font-size: 0.97rem;
      line-height: 1.5;
    }
    .nu-checklist ul li:last-child { border-bottom: none; }
    .nu-checklist ul li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 13px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* QUESTIONS BLOCK */
    .nu-questions {
      background: linear-gradient(135deg, #f0f6ff 0%, #ffffff 100%);
      border: 1px solid #d6e4ff;
      border-radius: 10px;
      padding: 28px 30px;
    }
    .nu-questions ol {
      padding-left: 22px;
    }
    .nu-questions ol li {
      margin-bottom: 12px;
      font-size: 0.97rem;
      line-height: 1.5;
      padding-left: 6px;
    }
    .nu-questions ol li::marker {
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* CONTRACTOR BLOCK */
    .nu-contractor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .nu-contractor-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 22px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .nu-contractor-card:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 6px 20px rgba(0,0,255,0.08);
    }
    .nu-contractor-card h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 8px;
    }
    .nu-contractor-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .nu-contractor-card .tag {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      padding: 3px 10px;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 3px;
      margin-bottom: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* BUDGET TABLE */
    .nu-budget {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-budget table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-budget th, .nu-budget td {
      padding: 14px 18px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-budget thead {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-budget thead th {
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.82rem;
    }
    .nu-budget td.amount {
      text-align: right;
      font-weight: 700;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
    }
    .nu-budget tfoot td {
      background: var(--nu-light-gray);
      font-weight: 900;
      color: var(--nu-dark-text);
      border-top: 2px solid var(--nu-blue);
      font-size: 1.02rem;
    }

    /* ACTION CTA */
    .nu-cta {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 10px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-cta h3 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-cta p {
      font-size: 1.02rem;
      margin-bottom: 22px;
      opacity: 0.95;
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }
    .nu-cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .nu-btn-cta {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 900;
      text-decoration: none;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.88rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .nu-btn-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }
    .nu-btn-cta.outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .nu-btn-cta.outline:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
    }

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
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.4;
    }
    .nu-footer-meta {
      font-size: 0.78rem;
      opacity: 0.6;
      margin-top: 14px;
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.85rem; }
      .nu-page-subtitle { font-size: 0.98rem; }
      .nu-doc-meta-inner { font-size: 0.75rem; }
      .nu-cta { padding: 28px 22px; }
      .nu-cta h3 { font-size: 1.25rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-phase-card, .nu-table-wrap { box-shadow: none; }
      .nu-cta-buttons { display: none; }
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
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="nu-doc-meta">
    <div class="nu-doc-meta-inner">
      <span>Document: <strong>Action Plan — Water Intrusion Remediation</strong></span>
      <span>Prepared: <strong>April 21, 2026</strong></span>
      <span>Owner: <strong>Aaron C. Norris</strong></span>
      <span class="nu-priority-badge">Priority: High</span>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-page-title-block">
        <span class="nu-page-eyebrow">reMarkable Action Item — Property Maintenance</span>
        <h1 class="nu-page-title">Address <em>Water Intrusion</em> Issue<br>Requiring Professional Waterproofing</h1>
        <p class="nu-page-subtitle">Defined scope, contractor sourcing plan, decision checklist, and budget envelope to move from observation to a permanently dry building envelope without further damage to interior finishes, structure, or stored materials.</p>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-body">
          <h3>Why this can't wait</h3>
          <p>Active or recurring water intrusion compounds quickly. Every additional rain cycle expands moisture migration into wall cavities, accelerates mold colonization (24–48 hours after sustained wetting), and weakens substrate adhesion for any future repair. Locking in professional waterproofing now is materially cheaper than redoing finishes later.</p>
        </div>
      </div>

      <!-- SECTION 1: SCOPE -->
      <section class="nu-section">
        <div class="nu-badge">Step 01 — Define the Problem</div>
        <h2 class="nu-section-title">Document the <span>Intrusion Before Calling Anyone</span></h2>
        <p style="margin-bottom: 18px;">A waterproofer cannot scope a fix from a phone call. The first 30 minutes of work — done by Aaron or Caroline before any contractor visit — sets the entire job up for accurate quotes and apples-to-apples comparison.</p>

        <div class="nu-checklist">
          <h4>Pre-Inspection Checklist</h4>
          <ul>
            <li>Photograph every visible stain, efflorescence (white mineral deposit), peeling paint, or buckled trim — wide shot AND close-up of each location.</li>
            <li>Note the date and weather of the most recent observed intrusion (heavy rain, prolonged drizzle, snow melt, irrigation overspray, etc.).</li>
            <li>Identify the affected wall(s), floor(s), and ceiling(s). Mark approximate square footage for each.</li>
            <li>Check exterior grading: is the soil sloping toward the foundation within 10 feet of the affected wall?</li>
            <li>Inspect gutters and downspouts above the affected area. Confirm downspouts discharge at least 5 feet from the foundation.</li>
            <li>Open the nearest crawlspace or basement access and photograph the wall side opposite the interior staining.</li>
            <li>Use a moisture meter (Home Depot, ~$30) on suspect drywall — anything reading above 17% on wood-scale is actively wet.</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 2: PHASES -->
      <section class="nu-section">
        <div class="nu-badge">Step 02 — Execution Plan</div>
        <h2 class="nu-section-title">Five-Phase <span>Remediation Sequence</span></h2>
        <p style="margin-bottom: 22px;">Phases must run in order. Skipping diagnosis to install waterproofing first is the most common — and most expensive — mistake. Verify the water source before sealing anything.</p>

        <div class="nu-phases">

          <div class="nu-phase-card">
            <div class="nu-phase-num">1</div>
            <span class="nu-phase-timing">Days 1–3</span>
            <h4>Source Diagnosis</h4>
            <ul>
              <li>Schedule licensed waterproofing contractor for on-site inspection.</li>
              <li>Request written diagnosis identifying entry point: above-grade (roof, flashing, window) or below-grade (foundation, footing drain).</li>
              <li>Get diagnosis in writing before authorizing any repair work.</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">2</div>
            <span class="nu-phase-timing">Days 4–10</span>
            <h4>Quotes &amp; Selection</h4>
            <ul>
              <li>Collect a minimum of three written quotes from licensed, insured contractors.</li>
              <li>Verify each contractor carries general liability and workers' comp.</li>
              <li>Confirm warranty length — 10-year transferable is the industry benchmark for interior basement systems.</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">3</div>
            <span class="nu-phase-timing">Days 11–14</span>
            <h4>Drying &amp; Mold Check</h4>
            <ul>
              <li>If wetted area is greater than 10 sq ft or has been wet for more than 48 hours, bring in a certified mold inspector before repair.</li>
              <li>Run dehumidifiers continuously until moisture meter reads under 15% on framing.</li>
              <li>Remove and bag any visibly compromised insulation or drywall.</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">4</div>
            <span class="nu-phase-timing">Days 15–25</span>
            <h4>Waterproofing Install</h4>
            <ul>
              <li>Schedule installation. Expect 2–5 working days on site for a typical residential basement scope.</li>
              <li>Be present (or send Caroline) for the first day's work to confirm scope matches the signed quote.</li>
              <li>Photograph each stage of installation as documentation for the warranty file.</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <div class="nu-phase-num">5</div>
            <span class="nu-phase-timing">Days 26–35</span>
            <h4>Restoration &amp; Verify</h4>
            <ul>
              <li>Replace drywall, paint, trim, and any flooring impacted by the intrusion.</li>
              <li>Test the system by triggering the largest reasonable water load — heavy hose at the foundation or after the next significant rain event.</li>
              <li>File the contractor's written warranty in the property records folder.</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- SECTION 3: SOURCES -->
      <section class="nu-section">
        <div class="nu-badge">Step 03 — Likely Root Causes</div>
        <h2 class="nu-section-title">Common <span>Water Intrusion Sources, Ranked</span></h2>
        <p style="margin-bottom: 22px;">Use this matrix to triage where to look first. The most expensive thing to fix is rarely the most likely cause — most residential intrusions are exterior drainage issues, not foundation failures.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 28%;">Source</th>
                <th style="width: 14%;">Likelihood</th>
                <th style="width: 18%;">Diagnostic Signal</th>
                <th>First Fix to Try</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gutter overflow / clogged downspout</strong></td>
                <td class="col-priority priority-high">Very High</td>
                <td>Vertical streaks on exterior wall; water at base of foundation during rain</td>
                <td>Clean gutters, install downspout extensions to discharge 5+ ft away from foundation</td>
              </tr>
              <tr>
                <td><strong>Negative grading toward foundation</strong></td>
                <td class="col-priority priority-high">Very High</td>
                <td>Standing water within 5 ft of the wall after rain</td>
                <td>Re-grade soil to slope away at minimum 6 inches over first 10 feet</td>
              </tr>
              <tr>
                <td><strong>Failed window or door flashing</strong></td>
                <td class="col-priority priority-med">High</td>
                <td>Stains on interior wall directly below a window or door head</td>
                <td>Re-flash and re-caulk the opening; replace damaged trim</td>
              </tr>
              <tr>
                <td><strong>Roof leak (flashing, valley, or penetration)</strong></td>
                <td class="col-priority priority-med">Moderate</td>
                <td>Ceiling stain, especially near chimneys, vents, or roof valleys</td>
                <td>Roofer inspection — flashing repair or shingle replacement at the entry point</td>
              </tr>
              <tr>
                <td><strong>Foundation crack (hairline or structural)</strong></td>
                <td class="col-priority priority-routine">Moderate</td>
                <td>Damp vertical line on basement wall; efflorescence trail</td>
                <td>Polyurethane crack injection from interior — typical $400–$700 per crack</td>
              </tr>
              <tr>
                <td><strong>Failed footing drain (French drain)</strong></td>
                <td class="col-priority priority-routine">Lower</td>
                <td>Water along the floor-wall joint after sustained rain</td>
                <td>Interior perimeter drain + sump — full-system installation</td>
              </tr>
              <tr>
                <td><strong>Plumbing leak (supply or waste line)</strong></td>
                <td class="col-priority priority-routine">Lower</td>
                <td>Wet area unrelated to weather; meter spins with no fixtures running</td>
                <td>Plumber, not waterproofer — leak isolation and pipe repair</td>
              </tr>
              <tr>
                <td><strong>Hydrostatic pressure (high water table)</strong></td>
                <td class="col-priority priority-routine">Lower</td>
                <td>Water seeping from floor center, not walls; worsens during wet season</td>
                <td>Sump pump system; in severe cases, exterior excavation + membrane</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 4: CONTRACTOR SOURCING -->
      <section class="nu-section">
        <div class="nu-badge">Step 04 — Vendor Sourcing</div>
        <h2 class="nu-section-title">Birmingham-Area <span>Contractor Categories to Call</span></h2>
        <p style="margin-bottom: 22px;">Based on the diagnosis from Phase 1, contact contractors from the appropriate category. Always request three quotes minimum. Verify license, insurance, and BBB rating before scheduling any on-site visit.</p>

        <div class="nu-contractor-grid">

          <div class="nu-contractor-card">
            <span class="tag">Category A</span>
            <h4>Basement Waterproofing Specialists</h4>
            <p>Below-grade water issues, foundation crack injection, interior perimeter drains, sump pump systems. Look for IICRC-certified firms with at least 10 years in business and a transferable warranty.</p>
          </div>

          <div class="nu-contractor-card">
            <span class="tag">Category B</span>
            <h4>Roofing &amp; Flashing Contractors</h4>
            <p>For ceiling stains or upper-wall intrusion. Require GAF Master Elite or Owens Corning Platinum certification for warranty-grade workmanship. Confirm they will photograph attic side of the suspect area.</p>
          </div>

          <div class="nu-contractor-card">
            <span class="tag">Category C</span>
            <h4>Mold Remediation Firms</h4>
            <p>Required if wet area exceeds 10 sq ft or wetting has continued more than 48 hours. Must hold IICRC AMRT certification. Get an independent post-remediation clearance test, not the contractor's own.</p>
          </div>

          <div class="nu-contractor-card">
            <span class="tag">Category D</span>
            <h4>Grading &amp; Drainage</h4>
            <p>Landscape contractors with foundation drainage experience. Often the cheapest fix and the highest-value first move. Many waterproofing companies sub this work — getting it directly can cut the line item by 30–50%.</p>
          </div>

          <div class="nu-contractor-card">
            <span class="tag">Category E</span>
            <h4>Licensed Plumber</h4>
            <p>For any leak unrelated to weather, or for sump pump and ejector pit installations. Verify Alabama state plumbing license and that the firm carries leak-detection equipment, not just basic repair tools.</p>
          </div>

          <div class="nu-contractor-card">
            <span class="tag">Category F</span>
            <h4>Structural Engineer (PE)</h4>
            <p>Bring in only if a contractor identifies cracks wider than 1/4 inch, horizontal cracking, or wall bowing. A licensed PE letter is what insurance and any future buyer will require, not the contractor's own assessment.</p>
          </div>

        </div>
      </section>

      <!-- SECTION 5: BUDGET -->
      <section class="nu-section">
        <div class="nu-badge">Step 05 — Budget Envelope</div>
        <h2 class="nu-section-title">Reasonable <span>Cost Ranges by Scope</span></h2>
        <p style="margin-bottom: 22px;">Use these ranges as a sanity check on quotes received. Anything significantly below the low end of the range is a red flag — the contractor is either underscoping the work or planning to upsell mid-job. Anything well above the high end requires a detailed line-item explanation.</p>

        <div class="nu-budget">
          <table>
            <thead>
              <tr>
                <th>Scope of Work</th>
                <th style="text-align: right;">Low End</th>
                <th style="text-align: right;">Typical</th>
                <th style="text-align: right;">High End</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gutter cleaning &amp; downspout extensions</td>
                <td class="amount">$250</td>
                <td class="amount">$450</td>
                <td class="amount">$900</td>
              </tr>
              <tr>
                <td>Re-grading &amp; surface drainage corrections</td>
                <td class="amount">$800</td>
                <td class="amount">$2,200</td>
                <td class="amount">$5,500</td>
              </tr>
              <tr>
                <td>Window or door flashing repair (per opening)</td>
                <td class="amount">$400</td>
                <td class="amount">$900</td>
                <td class="amount">$1,800</td>
              </tr>
              <tr>
                <td>Foundation crack injection (per crack)</td>
                <td class="amount">$400</td>
                <td class="amount">$650</td>
                <td class="amount">$1,200</td>
              </tr>
              <tr>
                <td>Roof flashing repair (limited area)</td>
                <td class="amount">$500</td>
                <td class="amount">$1,400</td>
                <td class="amount">$3,500</td>
              </tr>
              <tr>
                <td>Interior perimeter drain + sump (full basement)</td>
                <td class="amount">$5,500</td>
                <td class="amount">$9,500</td>
                <td class="amount">$15,000</td>
              </tr>
              <tr>
                <td>Mold remediation (greater than 10 sq ft area)</td>
                <td class="amount">$1,500</td>
                <td class="amount">$3,800</td>
                <td class="amount">$7,500</td>
              </tr>
              <tr>
                <td>Drywall, paint &amp; trim restoration</td>
                <td class="amount">$1,200</td>
                <td class="amount">$2,800</td>
                <td class="amount">$6,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Reserve to authorize before contractor calls (typical mid-scope)</td>
                <td class="amount">—</td>
                <td class="amount">$8,000–$15,000</td>
                <td class="amount">—</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <!-- SECTION 6: QUESTIONS TO ASK -->
      <section class="nu-section">
        <div class="nu-badge">Step 06 — Diligence Questions</div>
        <h2 class="nu-section-title">Ten Questions <span>for Every Contractor Interview</span></h2>
        <p style="margin-bottom: 22px;">Aaron should ask all ten of these before signing any contract. The way a contractor answers these questions tells you more than the price on the bid sheet.</p>

        <div class="nu-questions">
          <ol>
            <li>What specifically do you believe is the source of this water intrusion, and what evidence led you to that conclusion?</li>
            <li>What is the scope of work in writing — and what is explicitly excluded?</li>
            <li>What warranty do you provide, in years, and is it transferable to a future owner of the property?</li>
            <li>Will you pull permits, or is permitting my responsibility?</li>
            <li>Are your installers W-2 employees of your company, or are they subcontractors? If subs, who carries the workers' comp?</li>
            <li>Can I see proof of general liability insurance and workers' comp, current and naming me as additional insured during the job?</li>
            <li>What is the payment schedule — and is there any deposit greater than 10% before work begins? (Anything over 30% upfront is a red flag.)</li>
            <li>Who is the on-site foreman, and what is their direct cell phone number for the duration of the project?</li>
            <li>If the issue recurs within the warranty period, what is the response time, and what is covered versus excluded?</li>
            <li>Can you provide three references from completed jobs in the past 24 months that I can call directly?</li>
          </ol>
        </div>
      </section>

      <!-- CTA -->
      <div class="nu-cta">
        <h3>Next 48 Hours</h3>
        <p>Complete the pre-inspection checklist (above) and request three on-site evaluations. Aaron's preferred contact path for vendors during business hours is direct cell. Caroline can manage scheduling intake and forward documents for review.</p>
        <div class="nu-cta-buttons">
          <a href="tel:2055001343" class="nu-btn-cta">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com" class="nu-btn-cta outline">Email acnorris@norrisutilities.com</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      130 Inverness Plaza #210, Birmingham, AL 35242 &nbsp;·&nbsp; Internal Action Plan &nbsp;·&nbsp; Prepared 2026-04-21
    </div>
  </footer>

</body>
</html>