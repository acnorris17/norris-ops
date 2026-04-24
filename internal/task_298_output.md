<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>V5 Bucket Cover — Production Release Action Plan — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success: #0a8a3e;
      --nu-warning: #c9680a;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.3em;
      color: rgba(255,255,255,0.85);
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* CONTENT AREA — ghost phoenix */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-ghost-phoenix {
      position: absolute;
      top: 180px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* HERO BLOCK */
    .nu-hero {
      text-align: center;
      margin-bottom: 56px;
      padding-bottom: 36px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-hero-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 2px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-hero h1 {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 12px;
    }
    .nu-hero h1 span.highlight {
      color: var(--nu-blue);
    }
    .nu-hero-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin: 0 auto;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px 22px;
      margin-top: 22px;
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .nu-meta-row span strong { color: var(--nu-blue); font-weight: 700; }

    /* SECTION TITLE */
    .nu-section {
      margin-bottom: 52px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 22px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 48px; height: 3px;
      background: var(--nu-cyan);
      margin-top: 10px;
    }

    /* SPEC / SKU TABLE */
    .nu-spec-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }
    .nu-spec-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 14px 16px;
      text-align: left;
    }
    .nu-spec-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-spec-table tbody tr:last-child td { border-bottom: none; }
    .nu-spec-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-spec-table td.sku { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* PHASE CARDS */
    .nu-phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-phase-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-phase-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.09);
    }
    .nu-phase-card .phase-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      padding: 4px 12px;
      border-radius: 2px;
      margin-bottom: 12px;
    }
    .nu-phase-card h3 {
      font-weight: 900;
      font-size: 1.12rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-phase-card .phase-window {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-phase-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-phase-card li {
      padding: 6px 0 6px 18px;
      position: relative;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-phase-card li::before {
      content: '•';
      position: absolute;
      left: 0; top: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
    }

    /* BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.93rem;
    }
    .nu-badge-icon {
      width: 24px; height: 24px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 24px 28px;
      list-style: none;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      font-size: 0.96rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* RISK GRID */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-warning);
      border-radius: 4px;
      padding: 18px 20px;
    }
    .nu-risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-risk-card .mitigation {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .nu-risk-card .mitigation strong {
      color: var(--nu-success);
      display: block;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* GO/NO-GO CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 8px;
      text-align: center;
      margin: 48px 0 8px;
      box-shadow: 0 8px 24px rgba(0,0,255,0.18);
    }
    .nu-callout h3 {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-callout p {
      font-size: 1.05rem;
      max-width: 720px;
      margin: 0 auto 20px;
    }
    .nu-callout .signoff {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 10px 26px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      margin: 0 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
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
      font-size: 0.93rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 48px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-inner { padding: 40px 20px 60px; }
      .nu-hero h1 { font-size: 1.8rem; }
      .nu-section-title { font-size: 1.3rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-callout { padding: 28px 22px; }
      .nu-callout h3 { font-size: 1.2rem; }
      .nu-spec-table thead { display: none; }
      .nu-spec-table, .nu-spec-table tbody, .nu-spec-table tr, .nu-spec-table td { display: block; width: 100%; }
      .nu-spec-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 4px; }
      .nu-spec-table td { border-bottom: 1px solid var(--nu-medium-gray); padding: 10px 14px; }
      .nu-spec-table td::before {
        content: attr(data-label) ": ";
        font-weight: 700;
        color: var(--nu-blue);
        display: block;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-phase-card, .nu-risk-card { box-shadow: none; }
      .nu-callout { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-label">V5 Production Release — Action Plan</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">

    <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#0000FF"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#0000FF"/>
    </svg>

    <div class="nu-content-inner">

      <!-- HERO -->
      <section class="nu-hero">
        <div class="nu-hero-eyebrow">Action Item — Production Release</div>
        <h1>Take the <span class="highlight">V5 FlexPro Armor</span> Bucket Cover to Production as the Final Version</h1>
        <p class="nu-hero-subtitle">
          V5 is the locked, final revision. This plan moves it from engineering approval into full production fulfillment —
          with specs frozen, cutting files released, and all four SKUs shipping as the current catalog standard.
        </p>
        <div class="nu-meta-row">
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Status:</strong> Release Authorized</span>
          <span><strong>Revision:</strong> V5 — FINAL</span>
          <span><strong>Effective:</strong> 2026-04-24</span>
        </div>
      </section>

      <!-- SECTION 1: V5 SKU LINEUP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">V5</span> <span class="rest">SKU Lineup — Production Catalog</span></h2>
        <p style="margin-bottom: 18px;">
          All four FlexPro Armor bucket cover SKUs move to V5 specification as of this release.
          V5 becomes the one and only in-production revision — prior rev drawings are archived.
        </p>
        <table class="nu-spec-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Configuration</th>
              <th>Size (W × H)</th>
              <th>Application</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sku" data-label="SKU">NU-BC-2851</td>
              <td data-label="Configuration">2-Man Standard</td>
              <td data-label="Size">28" × 51"</td>
              <td data-label="Application">Full-size 2-man utility bucket</td>
              <td data-label="Margin">50%</td>
            </tr>
            <tr>
              <td class="sku" data-label="SKU">NU-BC-2834</td>
              <td data-label="Configuration">1.5-Man Standard</td>
              <td data-label="Size">28" × 34"</td>
              <td data-label="Application">1.5-man and mid-size bucket</td>
              <td data-label="Margin">50%</td>
            </tr>
            <tr>
              <td class="sku" data-label="SKU">NU-BC-2851-C</td>
              <td data-label="Configuration">2-Man Combo</td>
              <td data-label="Size">28" × 51"</td>
              <td data-label="Application">2-man bucket + liner combo pack</td>
              <td data-label="Margin">50%</td>
            </tr>
            <tr>
              <td class="sku" data-label="SKU">NU-BC-2834-C</td>
              <td data-label="Configuration">1.5-Man Combo</td>
              <td data-label="Size">28" × 34"</td>
              <td data-label="Application">1.5-man bucket + liner combo pack</td>
              <td data-label="Margin">50%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 2: RELEASE PHASES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Release</span> <span class="rest">Phases — From Prototype to Live Catalog</span></h2>
        <div class="nu-phase-grid">

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 1</span>
            <h3>Lock the V5 Specification</h3>
            <div class="phase-window">Week 1 — Engineering Freeze</div>
            <ul>
              <li>Confirm V5 pattern drawings are the final revision</li>
              <li>Archive V1–V4 drawings as "superseded — do not cut"</li>
              <li>Sign off on material spec: FlexPro fabric, stitch pattern, hardware</li>
              <li>Issue revision-controlled cut sheets to the sewing team</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 2</span>
            <h3>Manufacturing Handoff</h3>
            <div class="phase-window">Week 1–2 — Line Readiness</div>
            <ul>
              <li>Release V5 cutting templates to the shop floor</li>
              <li>Walk one pilot unit per SKU through start-to-finish</li>
              <li>Document cycle time, waste, and pain points</li>
              <li>Confirm raw-material on hand for first production run</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 3</span>
            <h3>First Production Run</h3>
            <div class="phase-window">Week 2–3 — Build Inventory</div>
            <ul>
              <li>Run minimum 10 units per SKU (40 total) as opening stock</li>
              <li>QC every unit against the V5 inspection checklist</li>
              <li>Serial-tag and photograph each unit for records</li>
              <li>Stage finished goods in dedicated V5 inventory zone</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 4</span>
            <h3>Catalog &amp; Pricing Update</h3>
            <div class="phase-window">Week 2 — Customer-Facing</div>
            <ul>
              <li>Update line card, website, and dealer sheets to V5</li>
              <li>Refresh product photography using V5 samples</li>
              <li>Confirm pricing: Direct → Dealer (-30%) → Distributor (-40%)</li>
              <li>Push new SKU data to QuickBooks item list</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 5</span>
            <h3>Channel Notification</h3>
            <div class="phase-window">Week 3 — Go-Live</div>
            <ul>
              <li>Email dealers and distributors: "V5 now shipping"</li>
              <li>Notify Boss Products (Troy Gongwer + Thayne Grove)</li>
              <li>Update open quotes to reflect V5 availability</li>
              <li>Post V5 announcement to ops.norrisutilities.com</li>
            </ul>
          </div>

          <div class="nu-phase-card">
            <span class="phase-num">PHASE 6</span>
            <h3>Field Validation</h3>
            <div class="phase-window">Week 4+ — Ongoing</div>
            <ul>
              <li>Capture customer feedback on the first 40 units shipped</li>
              <li>Log any warranty returns in the V5 issue register</li>
              <li>Review production data at 30 / 60 / 90 days</li>
              <li>Lock V5 as the catalog standard — no further revisions without a V6 trigger</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- SECTION 3: PRODUCTION READINESS CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Production</span> <span class="rest">Readiness Checklist</span></h2>
        <ul class="nu-checklist">
          <li><strong>Drawings signed off.</strong> V5 pattern files approved and revision-stamped "FINAL — 2026-04-24."</li>
          <li><strong>Material inventory verified.</strong> FlexPro fabric, thread, webbing, and hardware in stock for first 40 units.</li>
          <li><strong>Cutting templates distributed.</strong> Shop floor has the V5 cut sheets; superseded revisions pulled.</li>
          <li><strong>QC checklist updated.</strong> V5 inspection points documented; reviewers trained on the revised pass/fail criteria.</li>
          <li><strong>Serial tagging in place.</strong> V5 units carry a unique serial for warranty traceability.</li>
          <li><strong>Pricing locked.</strong> 50% margin confirmed across all four SKUs; dealer and distributor tiers published.</li>
          <li><strong>Line card refreshed.</strong> Public catalog reflects V5 specs, photos, and SKU codes.</li>
          <li><strong>Open quotes reviewed.</strong> Any quoted prior-rev orders flagged for customer confirmation before shipment.</li>
        </ul>
      </section>

      <!-- SECTION 4: RISKS & MITIGATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risks</span> <span class="rest">&amp; Mitigation</span></h2>
        <div class="nu-risk-grid">

          <div class="nu-risk-card">
            <h4>Legacy inventory of prior revisions</h4>
            <p>V1–V4 units already built or partially assembled could reach customers after V5 go-live.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Inventory every unit in process. Ship prior-rev units only against orders placed before the V5 effective date.
            </div>
          </div>

          <div class="nu-risk-card">
            <h4>Sewing-team retraining time</h4>
            <p>V5 construction steps may differ from prior rev — first units often run slower than target cycle time.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Budget one pilot unit per SKU with Aaron walking the floor. Record changes and update the SOP before the full run.
            </div>
          </div>

          <div class="nu-risk-card">
            <h4>Dealer confusion between revisions</h4>
            <p>Dealers may have prior-rev sheets or photos they continue to quote from.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Email notification with V5 sheet attached. Pull prior-rev PDFs from ops.norrisutilities.com and replace with V5.
            </div>
          </div>

          <div class="nu-risk-card">
            <h4>Field failure discovered post-release</h4>
            <p>A V5-specific defect could surface only after units are in service.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Run the 30 / 60 / 90-day field-validation check. Warranty returns flagged and logged to the V5 issue register.
            </div>
          </div>

          <div class="nu-risk-card">
            <h4>QuickBooks item-list mismatch</h4>
            <p>Invoices may still pull prior-rev descriptions if the item list isn't updated before the first V5 ship.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Update the QB item list in Phase 4 — before any V5 unit ships. CB confirms on the first invoice.
            </div>
          </div>

          <div class="nu-risk-card">
            <h4>Photography lag</h4>
            <p>Marketing photos of V5 may not be ready when the line card needs to go live.</p>
            <div class="mitigation">
              <strong>Mitigation</strong>
              Use a production-sample unit for first-round photos. MK Smith schedules a formal shoot in Phase 6.
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 5: COMMUNICATION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Communication</span> <span class="rest">Plan</span></h2>

        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Internal — Shop floor and CB briefed before Phase 2 handoff
        </div>

        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          Dealer Channel — Email with V5 sheet attached, pricing confirmed, lead times posted
        </div>

        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.83L19.53 19H4.47L12 5.83zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>
          Manufacturing Partners — Boss Products (Troy Gongwer + Thayne Grove, CC both) notified of V5 going live
        </div>

        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm2 5h12v2H6zm-2 5h16v2H4z"/></svg>
          Ops Portal — V5 product page and downloadable sheet live at ops.norrisutilities.com
        </div>
      </section>

      <!-- GO/NO-GO CALLOUT -->
      <section class="nu-callout">
        <h3>V5 — Cleared for Production</h3>
        <p>
          Engineering is done. Specs are locked. The four SKUs above are the catalog as of today.
          The next FlexPro Armor bucket cover to leave the shop ships as V5.
        </p>
        <div>
          <span class="signoff">APPROVED — AARON C. NORRIS</span>
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