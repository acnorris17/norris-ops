<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Review — Rental vs For-Sale Listings — Norris Utilities®</title>
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
      --nu-warning-red: #C8102E;
      --nu-warning-amber: #E8A317;
      --nu-success-green: #2E7D32;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-banner {
      margin-top: 22px;
      display: inline-block;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      padding: 8px 22px;
      border-radius: 4px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    /* WHITE CHEVRON */
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

    /* CONTENT AREA */
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
      width: 65%; height: auto;
      aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      opacity: 0.7;
      z-index: 0;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* DOC TITLE */
    .nu-doc-title {
      text-align: center;
      margin-bottom: 14px;
    }
    .nu-doc-title h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
    }
    .nu-doc-title h1 span {
      color: var(--nu-blue);
    }
    .nu-doc-meta {
      text-align: center;
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-doc-meta strong { color: var(--nu-dark-text); }

    /* PRIORITY BANNER */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      background: linear-gradient(135deg, #fff8e6 0%, #fff3d0 100%);
      border-left: 6px solid var(--nu-warning-amber);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-priority-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background: var(--nu-warning-amber);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 900;
    }
    .nu-priority-banner h3 {
      font-weight: 900;
      color: #7a5a10;
      font-size: 1.05rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-priority-banner p {
      color: #5c4500;
      font-size: 0.95rem;
      margin: 0;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }
    .nu-section p { margin-bottom: 14px; }

    /* CHEVRON BADGE (numbered step) */
    .nu-step-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 30px 10px 14px;
      margin-bottom: 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-step-badge .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      margin-right: 12px;
      margin-left: 6px;
      font-size: 0.85rem;
    }

    /* COMPARISON TABLE */
    .nu-compare-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 24px;
    }
    .nu-compare {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      min-width: 640px;
    }
    .nu-compare thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-compare thead th:first-child {
      width: 28%;
      background: linear-gradient(135deg, #0d0d2a 0%, #1a1a3e 100%);
    }
    .nu-compare tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
      font-size: 0.95rem;
    }
    .nu-compare tbody tr:last-child td { border-bottom: none; }
    .nu-compare tbody tr:nth-child(even) { background: #fafafc; }
    .nu-compare td.label {
      font-weight: 700;
      color: var(--nu-dark-text);
      background: var(--nu-light-gray) !important;
    }
    .nu-compare td.rental {
      color: #1d4d8a;
    }
    .nu-compare td.sale {
      color: #6b4500;
    }
    .nu-mismatch-flag {
      display: inline-block;
      background: var(--nu-warning-red);
      color: white;
      font-size: 0.7rem;
      font-weight: 900;
      padding: 2px 8px;
      border-radius: 3px;
      letter-spacing: 0.08em;
      margin-left: 6px;
      vertical-align: middle;
      text-transform: uppercase;
    }
    .nu-match-flag {
      display: inline-block;
      background: var(--nu-success-green);
      color: white;
      font-size: 0.7rem;
      font-weight: 900;
      padding: 2px 8px;
      border-radius: 3px;
      letter-spacing: 0.08em;
      margin-left: 6px;
      vertical-align: middle;
      text-transform: uppercase;
    }

    /* TWO-COLUMN GRID */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 24px;
    }
    .nu-pane {
      border-radius: 8px;
      padding: 24px;
      border: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-pane.rental { border-top: 4px solid #1976D2; }
    .nu-pane.sale { border-top: 4px solid var(--nu-warning-amber); }
    .nu-pane h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-pane.rental h4 .tag {
      color: #1976D2;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }
    .nu-pane.sale h4 .tag {
      color: var(--nu-warning-amber);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }
    .nu-pane ul {
      list-style: none;
      padding: 0;
    }
    .nu-pane ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.93rem;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-pane ul li:last-child { border-bottom: none; }
    .nu-pane ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 10px;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-checklist ol {
      list-style: none;
      counter-reset: checkitem;
      padding: 0;
    }
    .nu-checklist ol li {
      counter-increment: checkitem;
      padding: 12px 0 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .nu-checklist ol li:last-child { border-bottom: none; }
    .nu-checklist ol li::before {
      content: counter(checkitem);
      position: absolute;
      left: 0;
      top: 12px;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-checklist ol li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }

    /* RISK CARDS */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .nu-risk-card {
      padding: 22px;
      border-radius: 8px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-risk-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.1);
    }
    .nu-risk-card .level {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-risk-card.high .level { background: #fde8eb; color: var(--nu-warning-red); }
    .nu-risk-card.medium .level { background: #fff3d0; color: #8a6300; }
    .nu-risk-card.low .level { background: #e3f4e4; color: var(--nu-success-green); }
    .nu-risk-card h5 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 8px;
    }
    .nu-risk-card p {
      font-size: 0.9rem;
      color: #555;
      margin: 0;
    }

    /* RECOMMENDATION */
    .nu-recommendation {
      background: linear-gradient(135deg, #001f7a 0%, var(--nu-blue) 50%, #0066ee 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-top: 8px;
    }
    .nu-recommendation h3 {
      font-weight: 900;
      font-size: 1.3rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 14px;
      color: var(--nu-cyan);
    }
    .nu-recommendation p {
      font-size: 1.02rem;
      line-height: 1.65;
      margin-bottom: 14px;
    }
    .nu-recommendation p:last-child { margin-bottom: 0; }
    .nu-recommendation strong {
      color: var(--nu-cyan);
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px; }
      .nu-doc-title h1 { font-size: 1.55rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-step-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-priority-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-risk-card, .nu-pane { box-shadow: none; border: 1px solid #ccc; }
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
    <div class="nu-doc-banner">Action Item — Due Diligence Review</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-doc-title">
        <h1><span>Disclosure Discrepancy Review —</span> Rental vs For-Sale Listings</h1>
      </div>
      <div class="nu-doc-meta">
        <strong>Source:</strong> reMarkable Action Item &nbsp;|&nbsp;
        <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
        <strong>Date Logged:</strong> 2026-04-24 &nbsp;|&nbsp;
        <strong>Status:</strong> Open — Review Required
      </div>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-icon">!</div>
        <div>
          <h3>Why This Matters</h3>
          <p>When the same property carries different facts in its rental listing versus its for-sale listing, a buyer or tenant may rely on the wrong figures. Identifying and reconciling these discrepancies before contracting protects the deal from rescission claims, financing surprises, and post-closing disputes.</p>
        </div>
      </div>

      <!-- SECTION 1: SCOPE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Scope</span> <span class="rest">of This Review</span></h2>
        <p>This document defines the disciplined process for comparing the active rental listing against the for-sale listing for the same property and resolving every gap before any offer, lease renewal, or transaction document is signed. It covers what to compare, how to flag a discrepancy, who corrects what, and how to record the outcome.</p>
      </section>

      <!-- SECTION 2: STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Review</span> <span class="rest">Workflow</span></h2>

        <div class="nu-step-badge"><span class="num">1</span>Pull Both Listings Side-by-Side</div>
        <p>Open the active rental MLS / Zillow / Realtor / property-management posting AND the for-sale MLS sheet for the same address. Save PDFs of both with today's date stamp so the snapshot is preserved even if either listing changes overnight.</p>

        <div class="nu-step-badge"><span class="num">2</span>Compare the Critical Fields</div>
        <p>Walk the comparison matrix below row-by-row. Anything that differs gets a red MISMATCH flag. Anything that matches gets a green MATCH flag. Blanks on either side count as a discrepancy until a written source is found.</p>

        <div class="nu-step-badge"><span class="num">3</span>Document the Source of Truth</div>
        <p>For every mismatched field, identify the authoritative source: county tax record, deed, survey, certificate of occupancy, recorded plat, HOA bylaws, or signed seller's disclosure. The agent's marketing copy is never the source of truth.</p>

        <div class="nu-step-badge"><span class="num">4</span>Request Written Correction</div>
        <p>Email the listing agent (or property manager) and request the inaccurate side be corrected in writing. Keep the email chain — that paper trail demonstrates good-faith reliance on corrected data.</p>

        <div class="nu-step-badge"><span class="num">5</span>Re-verify Before Signing Anything</div>
        <p>Do not sign an offer, lease, addendum, or earnest-money agreement until both listings reflect the same verified facts OR the contract explicitly carves out the disputed item.</p>
      </section>

      <!-- SECTION 3: COMPARISON MATRIX -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Comparison</span> <span class="rest">Matrix — Fields to Audit</span></h2>
        <div class="nu-compare-wrap">
          <table class="nu-compare">
            <thead>
              <tr>
                <th>Field</th>
                <th>Rental Listing Says</th>
                <th>For-Sale Listing Says</th>
                <th>Source of Truth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label">Square Footage (heated/cooled)</td>
                <td class="rental">Capture verbatim from rental ad</td>
                <td class="sale">Capture verbatim from MLS sheet</td>
                <td>County tax record / appraisal</td>
              </tr>
              <tr>
                <td class="label">Lot Size</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Recorded plat / survey</td>
              </tr>
              <tr>
                <td class="label">Bedroom / Bathroom Count</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Certificate of occupancy</td>
              </tr>
              <tr>
                <td class="label">Year Built / Year Renovated</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>County records / building permits</td>
              </tr>
              <tr>
                <td class="label">Zoning Classification</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Municipal zoning office</td>
              </tr>
              <tr>
                <td class="label">HOA Fees / Assessments</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>HOA estoppel letter</td>
              </tr>
              <tr>
                <td class="label">Property Taxes (annual)</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>County tax bill (current year)</td>
              </tr>
              <tr>
                <td class="label">Included Appliances / Fixtures</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Seller's disclosure form</td>
              </tr>
              <tr>
                <td class="label">Known Defects / Repairs</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Seller's property disclosure</td>
              </tr>
              <tr>
                <td class="label">Flood Zone / Environmental</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>FEMA flood map / Phase I report</td>
              </tr>
              <tr>
                <td class="label">Utilities Available / In Service</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Utility provider account records</td>
              </tr>
              <tr>
                <td class="label">Easements / Encumbrances</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Title commitment / preliminary report</td>
              </tr>
              <tr>
                <td class="label">Parking Spaces / Garage Capacity</td>
                <td class="rental">Capture verbatim</td>
                <td class="sale">Capture verbatim</td>
                <td>Physical inspection + plat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.88rem; color: #666; font-style: italic;">Fill the verbatim columns directly from each listing. Mark every row as MATCH or MISMATCH after side-by-side comparison.</p>
      </section>

      <!-- SECTION 4: COMMON DISCREPANCY PATTERNS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Common</span> <span class="rest">Discrepancy Patterns to Watch For</span></h2>
        <div class="nu-two-col">
          <div class="nu-pane rental">
            <h4><span class="tag">Rental Listing</span>What Tends to Be Inflated or Vague</h4>
            <ul>
              <li>Square footage rounded up to make rent-per-sqft look better</li>
              <li>"Recently renovated" without specifying year or scope</li>
              <li>Appliances "included" that the seller intends to remove</li>
              <li>Utilities described as "tenant pays all" with no historical bill data</li>
              <li>Parking described as "2 spaces" when one is on-street</li>
              <li>Pet policy or HOA restrictions omitted entirely</li>
            </ul>
          </div>
          <div class="nu-pane sale">
            <h4><span class="tag">For-Sale Listing</span>What Tends to Be Inflated or Hidden</h4>
            <ul>
              <li>Lot size matching county record but not the recorded survey</li>
              <li>Tax figure pulled from the prior year before reassessment</li>
              <li>HOA fee shown without special assessment line</li>
              <li>Defects disclosed in writing but absent from MLS narrative</li>
              <li>Flood zone status outdated against latest FEMA map</li>
              <li>Year built reflecting addition, not original structure</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: RISK BUCKETS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Tier — How to Triage What You Find</span></h2>
        <div class="nu-risk-grid">
          <div class="nu-risk-card high">
            <span class="level">High Risk</span>
            <h5>Material Misrepresentation</h5>
            <p>Square footage off by more than 5%, undisclosed defects, wrong zoning, easements not shown. Stop. Do not proceed without a written corrected disclosure and a price adjustment if warranted.</p>
          </div>
          <div class="nu-risk-card medium">
            <span class="level">Medium Risk</span>
            <h5>Financial Variance</h5>
            <p>Tax figure outdated, HOA fee missing the assessment line, utility cost estimates differ. Verify with the actual provider statements and update the offer worksheet before signing.</p>
          </div>
          <div class="nu-risk-card medium">
            <span class="level">Medium Risk</span>
            <h5>Inclusion Conflicts</h5>
            <p>Rental shows refrigerator/washer included; for-sale lists them as personal property. Resolve in the bill of sale or addendum so post-closing disputes never start.</p>
          </div>
          <div class="nu-risk-card low">
            <span class="level">Low Risk</span>
            <h5>Marketing Wording</h5>
            <p>"Updated kitchen" vs "renovated kitchen", "spacious" vs "open-concept". Cosmetic differences that warrant a note but rarely a contract change.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6: ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Checklist Before Signing</span></h2>
        <div class="nu-checklist">
          <ol>
            <li><strong>Snapshot saved</strong>PDF of rental listing AND for-sale listing captured today, filed by address.</li>
            <li><strong>Comparison matrix completed</strong>Every row marked MATCH or MISMATCH; nothing left blank.</li>
            <li><strong>Source-of-truth pulled for each mismatch</strong>County records, plat, FEMA map, HOA estoppel — collect the authoritative document, not the marketing copy.</li>
            <li><strong>Written correction requested</strong>Email to listing agent / property manager asking the inaccurate side be updated; reply preserved in the file.</li>
            <li><strong>Seller's property disclosure form reviewed</strong>Compared line-by-line against both listings.</li>
            <li><strong>Title commitment ordered</strong>Confirms easements, encumbrances, and ownership match what is being represented.</li>
            <li><strong>Offer / lease language adjusted</strong>If a discrepancy cannot be resolved before signing, the contract carves it out explicitly with a contingency.</li>
            <li><strong>Findings logged</strong>Discrepancy summary saved to the deal file so the audit trail is complete.</li>
          </ol>
        </div>
      </section>

      <!-- RECOMMENDATION -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Framework</span></h2>
        <div class="nu-recommendation">
          <h3>Bottom Line</h3>
          <p>A discrepancy between a rental listing and a for-sale listing is not just sloppy marketing — it is a <strong>signal that the underlying facts of the property have not been independently verified</strong>. Treat every mismatch as a question that must be answered in writing before any commitment is made.</p>
          <p>If the seller, agent, or property manager will not produce written corrections backed by source documents, that itself is the answer: <strong>walk away or restructure the deal so the unverified fact does not control your downside</strong>.</p>
          <p>Once every row of the matrix is verified or contractually carved out, the deal is safe to advance. Until then, hold the line — the cost of a 48-hour delay is always less than the cost of unwinding a closed transaction.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-divider"></div>
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