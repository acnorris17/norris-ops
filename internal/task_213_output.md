<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asplundh Store Front Update — Action Plan — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #2D8F3C;
      --nu-warning: #D97706;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-white);
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
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* PAGE INTRO */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-kicker {
      display: block;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-page-lead {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin-bottom: 40px;
    }

    /* METADATA BAR */
    .nu-meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 50px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      padding: 18px 22px;
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-value small {
      display: block;
      font-size: 0.82rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* SECTION HEADER */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-sub {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    /* BADGE / CHEVRON LIST ITEMS */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* STEP CARD */
    .nu-steps {
      display: grid;
      gap: 18px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 22px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-step-number {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-blue);
      line-height: 1;
      letter-spacing: -0.02em;
    }
    .nu-step-body h4 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-step-body p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-step-body ul {
      margin: 8px 0 0 0;
      padding-left: 0;
      list-style: none;
    }
    .nu-step-body ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 6px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-step-body ul li::before {
      content: '•';
      position: absolute;
      left: 8px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .nu-step-tag {
      display: inline-block;
      margin-top: 8px;
      padding: 3px 10px;
      background: rgba(6, 208, 255, 0.12);
      color: var(--nu-navy);
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h4 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card p {
      font-size: 0.93rem;
      margin-bottom: 10px;
    }
    .nu-card ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }
    .nu-card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 8px;
      font-size: 0.92rem;
    }
    .nu-card ul li::before {
      content: '▸';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* CONTENT BLOCKS */
    .nu-content-block {
      background: linear-gradient(135deg, #f9f9fb 0%, var(--nu-light-gray) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 14px;
    }
    .nu-content-block h5 {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-content-block p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin: 0;
    }
    .nu-content-block em {
      display: block;
      margin-top: 6px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: flex-start;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-check-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-check-text strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 0.96rem;
      margin-bottom: 2px;
    }
    .nu-check-text span {
      font-size: 0.87rem;
      color: var(--nu-body-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 30px 34px;
      margin-bottom: 48px;
    }
    .nu-callout h3 {
      font-size: 1.2rem;
      font-weight: 900;
      color: var(--nu-cyan);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-callout p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.88);
      margin-bottom: 10px;
    }
    .nu-callout p:last-child { margin-bottom: 0; }
    .nu-callout strong { color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 64px; min-height: 230px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-step { grid-template-columns: 1fr; gap: 10px; padding: 20px; }
      .nu-step-number { font-size: 2rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding-right: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-step, .nu-card, .nu-checklist { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Plan</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <span class="nu-page-kicker">reMarkable Action Item · Marketing</span>
      <h1 class="nu-page-title">Update the <span>Asplundh</span> Store Front</h1>
      <p class="nu-page-lead">
        Refresh the Norris Utilities® dealer store front presented to Asplundh crews and purchasing contacts.
        Objective: ensure current SKUs, pricing, imagery, and contact details reflect the 2026 line — FlexPro Armor
        bucket covers, Samson Rope, Skylift, and Bay Shore Systems — and that every touchpoint points to Aaron C. Norris, Founder & CEO.
      </p>

      <!-- METADATA -->
      <div class="nu-meta-bar">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris<small>MK Smith — creative support</small></div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Customer</div>
          <div class="nu-meta-value">Asplundh Tree Expert<small>National fleet account</small></div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Priority</div>
          <div class="nu-meta-value">Medium<small>Marketing refresh, non-blocking</small></div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable<small>Captured 2026-04-16</small></div>
        </div>
      </div>

      <!-- WHY -->
      <div class="nu-callout">
        <h3>Why this matters</h3>
        <p>
          Asplundh is one of the largest tree-care fleets in North America and a repeat buyer of bucket
          cover programs. The store front is the first surface their purchasing team sees when they
          reorder — if it shows stale pricing, retired contacts, or the old "FlexPro Armor Guard"
          naming, orders stall and phone calls come to the cell at inconvenient hours.
        </p>
        <p>
          <strong>Goal:</strong> the store front reflects the 2026 line card exactly — current SKUs
          (NU-BC-2851, NU-BC-2834, Combo variants), 50% margin pricing, updated shipping formula,
          correct trademarks, and direct-to-Aaron contact routing.
        </p>
      </div>

      <!-- SECTION 1: SCOPE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Scope</span> <span class="rest">— What Needs to Change</span></h2>
        <div class="nu-section-sub">Every element on the Asplundh store front reviewed against the current Norris Utilities® line card standard.</div>

        <div class="nu-two-col">
          <div class="nu-card">
            <h4>Product Catalog</h4>
            <ul>
              <li>FlexPro Armor bucket covers — NU-BC-2851 (2-Man, 28"×51")</li>
              <li>NU-BC-2834 (1.5-Man, 28"×34")</li>
              <li>NU-BC-2851-C Combo and NU-BC-2834-C Combo</li>
              <li>Samson Rope authorized distributor listings</li>
              <li>Remove any legacy "FlexPro Armor Guard" naming</li>
            </ul>
          </div>

          <div class="nu-card">
            <h4>Pricing & Terms</h4>
            <ul>
              <li>FlexPro Armor: 50% margin on every SKU</li>
              <li>Samson Rope: 30% margin on listed items</li>
              <li>Shipping: ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</li>
              <li>Asplundh fleet tier — confirm dealer discount level</li>
              <li>Lead time language for made-in-USA bucket covers</li>
            </ul>
          </div>

          <div class="nu-card">
            <h4>Brand & Trademarks</h4>
            <ul>
              <li>Norris Utilities® — ® on first mention</li>
              <li>A Legacy of Commitment® — italic Playfair</li>
              <li>Phoenix Icon® — correct registration mark</li>
              <li>FlexPro Armor — NO ® anywhere, ever</li>
              <li>Primary Blue #0000FF, Cyan Accent #06D0FF</li>
            </ul>
          </div>

          <div class="nu-card">
            <h4>Contact & Routing</h4>
            <ul>
              <li>Aaron C. Norris, Founder & CEO — primary</li>
              <li>Cell: 205-500-1343</li>
              <li>acnorris@norrisutilities.com</li>
              <li>Caroline Butler (CB) — admin / order intake cc</li>
              <li>Remove any outdated legacy rep names</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 2: STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Action</span> <span class="rest">Plan — Execution Order</span></h2>
        <div class="nu-section-sub">Work these in order. Each step either Aaron owns directly or routes through MK Smith with Aaron's review before publish.</div>

        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-number">01</div>
            <div class="nu-step-body">
              <h4>Pull the current store front state</h4>
              <p>Capture exactly what Asplundh sees today so the delta is clear before any changes ship.</p>
              <ul>
                <li>Screenshot every product tile, detail page, and cart flow</li>
                <li>Export current SKU list with prices and stock status</li>
                <li>Note any retired contact names, phone numbers, or email routes</li>
                <li>Save to ~/norris-agent/output/internal/asplundh-storefront-audit/</li>
              </ul>
              <span class="nu-step-tag">Owner: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">02</div>
            <div class="nu-step-body">
              <h4>Rebuild the catalog against the 2026 line card</h4>
              <p>Every SKU on the store front must match the master line card — names, sizes, and images.</p>
              <ul>
                <li>Replace any "FlexPro Armor Guard" copy with "FlexPro Armor" (no ®)</li>
                <li>Set NU-BC-2851 (2-Man, 28"×51") as the lead SKU for Asplundh crew trucks</li>
                <li>Translate legacy competitor sizes: their 24×48 = NU-BC-2851; their 24×34 = NU-BC-2834</li>
                <li>Post current Combo bundles with correct component descriptions</li>
              </ul>
              <span class="nu-step-tag">Owner: MK Smith · Review: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">03</div>
            <div class="nu-step-body">
              <h4>Refresh pricing with the correct margin formulas</h4>
              <p>Pricing must follow the standard Customer Price = Cost ÷ (1 − Margin%) formula for every item.</p>
              <ul>
                <li>FlexPro Armor bucket covers: 50% margin, no exceptions</li>
                <li>Samson Rope line items: 30% margin</li>
                <li>Apply Ben's shipping formula to any pre-quoted freight: ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</li>
                <li>If Asplundh qualifies for dealer tier (30% off), flag for Aaron to confirm before publish</li>
              </ul>
              <span class="nu-step-tag">Owner: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">04</div>
            <div class="nu-step-body">
              <h4>Apply the line card design language</h4>
              <p>Store front banners, hero imagery, and section headers should read as one family with the printed line card.</p>
              <ul>
                <li>Header gradient: #0a0e5c → #0033cc → #0066ee → #00aaff → #06D0FF</li>
                <li>White asymmetric chevron transition below the hero (apex ~38%)</li>
                <li>Ghost Phoenix Icon® watermark at 7% opacity behind hero text</li>
                <li>Lato Black 900 for headlines, Bold 700 for section headers, Regular 400 for body</li>
                <li>"A Legacy of Commitment®" in Playfair Display italic, cyan on dark navy</li>
              </ul>
              <span class="nu-step-tag">Owner: MK Smith · Review: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">05</div>
            <div class="nu-step-body">
              <h4>Update imagery and lifestyle photography</h4>
              <p>Tree-care fleet context — not generic utility imagery — so Asplundh buyers see themselves in the catalog.</p>
              <ul>
                <li>Lead hero: bucket cover installed on a chipper-crew truck</li>
                <li>Detail shots of FlexPro Armor stitching, grommets, and handmade-USA callout</li>
                <li>Samson Rope rigging photography tied to tree work, not line work</li>
                <li>Remove any stock images that conflict with current brand direction</li>
              </ul>
              <span class="nu-step-tag">Owner: MK Smith</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">06</div>
            <div class="nu-step-body">
              <h4>Rewrite the contact and ordering block</h4>
              <p>Every request from Asplundh should land with Aaron first, then cascade to CB for order entry.</p>
              <ul>
                <li>Primary: Aaron C. Norris, Founder & CEO · 205-500-1343 · acnorris@norrisutilities.com</li>
                <li>Order intake cc: Caroline Butler (CB), admin</li>
                <li>Remove any references to retired or departed reps</li>
                <li>Include Norris Utilities®, LLC · 130 Inverness Plaza #210, Birmingham, AL 35242</li>
              </ul>
              <span class="nu-step-tag">Owner: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">07</div>
            <div class="nu-step-body">
              <h4>QA proof and publish</h4>
              <p>Final check before the store front goes live to Asplundh buyers.</p>
              <ul>
                <li>Trademark audit: ® on Norris Utilities, A Legacy of Commitment, Phoenix Icon — never on FlexPro Armor</li>
                <li>Mobile responsive check: iPhone Safari and Android Chrome</li>
                <li>Every phone number tel: linked, every email mailto: linked</li>
                <li>Test order flow with a dummy SKU before announcing the refresh</li>
                <li>Aaron gives final sign-off before publish</li>
              </ul>
              <span class="nu-step-tag">Owner: Aaron · Support: MK Smith</span>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: CONTENT PROMPTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Copy</span> <span class="rest">Blocks — Ready to Drop In</span></h2>
        <div class="nu-section-sub">Approved wording for the Asplundh store front. Use as-is unless a specific SKU or price changes.</div>

        <div class="nu-content-block">
          <h5>Hero Tagline</h5>
          <p>Handmade in the USA. Built for crews who can't afford downtime.</p>
          <em>Pairs with lead hero image of an Asplundh chipper crew bucket truck with a FlexPro Armor cover installed.</em>
        </div>

        <div class="nu-content-block">
          <h5>FlexPro Armor Product Blurb</h5>
          <p>FlexPro Armor bucket covers are cut, sewn, and finished in the United States to protect
          your crew's bucket from sun, weather, and road debris. Every cover carries the Norris Utilities®
          standard — A Legacy of Commitment® — and is backed by direct-to-founder support.</p>
          <em>Do not add ® to FlexPro Armor. FlexPro Armor is not a registered trademark.</em>
        </div>

        <div class="nu-content-block">
          <h5>Samson Rope Product Blurb</h5>
          <p>Norris Utilities® is an authorized Samson Rope distributor. Whether you need rigging
          line for tree work or pulling rope for line crews, we stock the spec you need and ship it
          with the same white-glove handling we give every FlexPro Armor order.</p>
          <em>Donna Poll and Sarah Daniels at Samson should be cc'd on any quote that references their pricing.</em>
        </div>

        <div class="nu-content-block">
          <h5>Order Footer Line</h5>
          <p>Questions, custom sizing, or fleet pricing? Call Aaron direct at 205-500-1343 or email
          acnorris@norrisutilities.com. A Legacy of Commitment® — we answer the phone.</p>
          <em>Aaron's direct contact is the entire value proposition. Never route Asplundh through a generic inbox.</em>
        </div>
      </section>

      <!-- SECTION 4: CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Pre-Publish</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-sub">Print or mark off on screen before the refresh goes live to Asplundh.</div>

        <div class="nu-checklist">
          <ul>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Audit file saved</strong>
                <span>Before-state screenshots and SKU export stored at ~/norris-agent/output/internal/asplundh-storefront-audit/</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Catalog matches the 2026 line card</strong>
                <span>NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C all listed with current imagery and copy</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Pricing formulas applied</strong>
                <span>FlexPro Armor at 50% margin, Samson Rope at 30%, shipping via Ben's formula</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Trademark audit clean</strong>
                <span>® on Norris Utilities, A Legacy of Commitment, Phoenix Icon. No ® on FlexPro Armor anywhere.</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Design language matches line card</strong>
                <span>Header gradient, chevron transition, ghost phoenix watermark, Lato typography</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Contact routing verified</strong>
                <span>Aaron C. Norris as primary, 205-500-1343 live, acnorris@norrisutilities.com live, retired names removed</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Mobile responsive</strong>
                <span>Tested on iPhone Safari and Android Chrome — no broken layout, all buttons reachable</span>
              </div>
            </li>
            <li>
              <div class="nu-check-box"></div>
              <div class="nu-check-text">
                <strong>Aaron final sign-off</strong>
                <span>Aaron reviews the live preview URL before publish. No exceptions.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- NEXT -->
      <div class="nu-callout">
        <h3>What happens after publish</h3>
        <p>
          Once the refresh is live, send a short note to the Asplundh purchasing contact announcing the
          updated catalog and confirming Aaron as the direct line for fleet orders. Archive the
          before-state audit so we have a clean paper trail if anything comes up in the first 30 days.
        </p>
        <p>
          <strong>Next milestone:</strong> measure whether reorder cadence improves over the following
          quarter. If Asplundh orders accelerate, use this same playbook for the next tree-care fleet account.
        </p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>