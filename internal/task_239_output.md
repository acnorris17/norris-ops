<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estate Negotiation Brief — 4505 Buttewoods — Norris Utilities®</title>
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
      --nu-success: #0E8F4E;
      --nu-warn: #B8860B;
      --nu-danger: #B22222;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
      padding: 64px 40px 96px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 80px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 100px);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
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
      padding-left: 0.35em;
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* DOCUMENT META STRIP */
    .nu-doc-meta {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 18px 40px;
    }
    .nu-doc-meta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      letter-spacing: 0.02em;
    }
    .nu-doc-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-pill-confidential {
      background: #fff4e5;
      color: #8a5a00;
      border: 1px solid #e8c98a;
    }
    .nu-pill-action {
      background: #e6f0ff;
      color: #0033cc;
      border: 1px solid #b3ccff;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 56px 40px 40px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 44px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-doc-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 10px;
    }
    .nu-doc-title em {
      color: var(--nu-blue);
      font-style: normal;
    }
    .nu-doc-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 820px;
    }

    /* SECTION */
    section.nu-section {
      margin-bottom: 48px;
    }
    .nu-section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-num {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      letter-spacing: 0.1em;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      letter-spacing: -0.005em;
    }
    .nu-section-title .lead-word {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section p {
      margin-bottom: 14px;
    }

    /* PROPERTY SNAPSHOT GRID */
    .nu-snapshot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .nu-snap-cell {
      background: var(--nu-white);
      padding: 22px 20px;
    }
    .nu-snap-label {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-snap-value {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.2;
    }
    .nu-snap-sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 22px 0 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #101638 0%, #1f2a5e 100%);
      color: var(--nu-white);
      padding: 14px 34px 14px 20px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.015em;
      padding-left: 34px;
    }
    .nu-badge-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .nu-card-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.08rem;
      margin-bottom: 8px;
    }
    .nu-card-title .tag {
      display: inline-block;
      vertical-align: middle;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 999px;
      margin-left: 10px;
    }
    .tag-strength { background: #e6f7ee; color: #0e6b3a; border: 1px solid #b5e3c9; }
    .tag-risk     { background: #fdeaea; color: #9b1c1c; border: 1px solid #f0b4b4; }
    .tag-leverage { background: #e6f0ff; color: #0033cc; border: 1px solid #b3ccff; }

    /* TWO-COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 760px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    /* PRICING TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin: 8px 0 6px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background: var(--nu-white);
    }
    .nu-table thead th {
      background: linear-gradient(135deg, #0a0e5c, #0033cc);
      color: var(--nu-white);
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 12px 16px;
    }
    .nu-table tbody td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) td {
      background: #fafbff;
    }
    .nu-table .num {
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .nu-table .note {
      color: var(--nu-body-text);
      font-size: 0.88rem;
    }
    .nu-table tfoot td {
      padding: 14px 16px;
      background: #eaf1ff;
      font-weight: 900;
      color: var(--nu-dark-text);
      border-top: 2px solid var(--nu-blue);
    }

    /* OFFER LADDER */
    .nu-ladder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 10px;
    }
    @media (max-width: 760px) {
      .nu-ladder { grid-template-columns: 1fr; }
    }
    .nu-rung {
      border-radius: 10px;
      padding: 22px;
      color: var(--nu-white);
      position: relative;
      min-height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .nu-rung-1 { background: linear-gradient(135deg, #0a0e5c, #0033cc); }
    .nu-rung-2 { background: linear-gradient(135deg, #0033cc, #0066ee); }
    .nu-rung-3 { background: linear-gradient(135deg, #0066ee, #00aaff 70%, var(--nu-cyan)); }
    .nu-rung-name {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.9;
    }
    .nu-rung-price {
      font-size: 1.85rem;
      font-weight: 900;
      letter-spacing: -0.01em;
      margin: 8px 0 6px;
    }
    .nu-rung-note {
      font-size: 0.88rem;
      opacity: 0.94;
      line-height: 1.45;
    }

    /* BULLETS */
    ul.nu-bullets {
      list-style: none;
      padding: 0;
      margin: 4px 0 12px;
    }
    ul.nu-bullets li {
      padding: 7px 0 7px 26px;
      position: relative;
      line-height: 1.55;
    }
    ul.nu-bullets li::before {
      content: '•';
      position: absolute;
      left: 6px;
      top: 4px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      line-height: 1;
    }

    /* SCRIPT BOX */
    .nu-script {
      background: #f8faff;
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: var(--nu-dark-text);
      margin: 10px 0 16px;
      line-height: 1.7;
    }
    .nu-script:not(:last-child) { margin-bottom: 12px; }
    .nu-script-label {
      font-style: normal;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      display: block;
      margin-bottom: 6px;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 6px 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checkbox {
      flex-shrink: 0;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-checklist .who {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-right: 8px;
    }

    /* RED LINES */
    .nu-redlines {
      background: linear-gradient(135deg, #fff9f9 0%, #fff4f4 100%);
      border: 1px solid #f0c8c8;
      border-radius: 10px;
      padding: 22px 24px;
    }
    .nu-redlines h3 {
      color: var(--nu-danger);
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-meta {
      margin-top: 14px;
      font-size: 0.76rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 72px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; padding-left: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 30px; }
      .nu-doc-title { font-size: 1.9rem; }
      .nu-badge { clip-path: none; border-radius: 8px; padding-left: 20px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-rung, .nu-badge, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-snapshot-grid { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#ffffff"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#ffffff"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- DOC META -->
  <div class="nu-doc-meta">
    <div class="nu-doc-meta-inner">
      <div>
        <strong>Prepared for:</strong> Aaron C. Norris &nbsp;•&nbsp;
        <strong>Date:</strong> April 21, 2026 &nbsp;•&nbsp;
        <strong>Asset:</strong> 4505 Buttewoods
      </div>
      <div>
        <span class="nu-pill nu-pill-confidential">Confidential — Personal</span>
        <span class="nu-pill nu-pill-action">Action Brief</span>
      </div>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE BLOCK -->
      <div class="nu-title-block">
        <div class="nu-eyebrow">reMarkable Action Item — Negotiation Playbook</div>
        <h1 class="nu-doc-title">Estate Purchase <em>Negotiation Brief</em><br>4505 Buttewoods — 7,098 sq ft</h1>
        <p class="nu-doc-subtitle">A structured framework for opening, countering, and closing on a 7,098 square foot estate at 4505 Buttewoods. Includes offer ladder, diligence checklist, walk-away criteria, and a 14-day timeline. Personal transaction — separate from Norris Utilities® operations.</p>
      </div>

      <!-- SECTION 1 — PROPERTY SNAPSHOT -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">01</div>
          <div class="nu-section-title"><span class="lead-word">Property</span> <span class="rest">Snapshot</span></div>
        </div>

        <div class="nu-snapshot-grid">
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Address</div>
            <div class="nu-snap-value">4505 Buttewoods</div>
            <div class="nu-snap-sub">Estate property</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Living Area</div>
            <div class="nu-snap-value">7,098 sq ft</div>
            <div class="nu-snap-sub">Per listing</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Asset Class</div>
            <div class="nu-snap-value">Luxury Estate</div>
            <div class="nu-snap-sub">Primary residence candidate</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Transaction Type</div>
            <div class="nu-snap-value">Direct Purchase</div>
            <div class="nu-snap-sub">Negotiated — non-auction</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Buyer</div>
            <div class="nu-snap-value">Aaron C. Norris</div>
            <div class="nu-snap-sub">Personal / entity TBD with counsel</div>
          </div>
          <div class="nu-snap-cell">
            <div class="nu-snap-label">Status</div>
            <div class="nu-snap-value">Pre-Offer</div>
            <div class="nu-snap-sub">Diligence window open</div>
          </div>
        </div>

        <p>This brief treats 4505 Buttewoods as a high-value negotiation requiring the same discipline Aaron applies to a utility equipment package deal: anchor low, protect optionality, control the timeline, and walk away if the numbers do not clear. Square footage at 7,098 sq ft places this property well above regional median — per-foot pricing will drive the final number more than comparable closed-sale counts.</p>
      </section>

      <!-- SECTION 2 — OBJECTIVES -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">02</div>
          <div class="nu-section-title"><span class="lead-word">Negotiation</span> <span class="rest">Objectives &amp; Priorities</span></div>
        </div>

        <div class="nu-two-col">
          <div>
            <div class="nu-card">
              <div class="nu-card-title">Primary Objective</div>
              <p>Secure 4505 Buttewoods at or below the supported market value per an independent appraisal — not per the seller's list price — with financing, inspection, and title contingencies fully intact.</p>
            </div>
            <div class="nu-card">
              <div class="nu-card-title">Secondary Objectives</div>
              <ul class="nu-bullets">
                <li>Obtain seller credit for any deferred maintenance uncovered at inspection</li>
                <li>Lock a close date that aligns with Aaron's cash-flow calendar (post-Skylift receivables)</li>
                <li>Preserve ability to walk during the inspection period without losing earnest money</li>
                <li>Keep the transaction out of Norris Utilities®, LLC operating cash entirely</li>
              </ul>
            </div>
          </div>
          <div>
            <div class="nu-card">
              <div class="nu-card-title">What "Win" Looks Like</div>
              <ul class="nu-bullets">
                <li>Purchase price at least 6–10% below appraised value</li>
                <li>Financing contingency: minimum 21 days</li>
                <li>Inspection period: 10 business days minimum</li>
                <li>Clean title with seller paying owner's title policy</li>
                <li>Closing costs split per local custom, no concessions pulled from buyer</li>
              </ul>
            </div>
            <div class="nu-card">
              <div class="nu-card-title">What "Walk" Looks Like</div>
              <ul class="nu-bullets">
                <li>Seller refuses independent appraisal contingency</li>
                <li>Material defects found without seller willing to credit</li>
                <li>Title cloud, easement surprise, or lien that counsel cannot clear pre-close</li>
                <li>Per-foot pricing above documented area comps without justified premium</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3 — DILIGENCE CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">03</div>
          <div class="nu-section-title"><span class="lead-word">Diligence</span> <span class="rest">Checklist — Do Before Offer</span></div>
        </div>

        <p>Every item below must clear before a written offer goes out. No verbal offers. No "placeholder" numbers. If data is missing, pause and request it.</p>

        <ul class="nu-checklist">
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Agent</span>Pull last 24 months of closed comps within 1-mile radius, 6,000–8,500 sq ft range. Calculate $/sq ft median and outliers.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Agent</span>Days on market, prior list-price changes, and any withdrawn/re-listed history for 4505 Buttewoods.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Agent</span>Seller motivation — estate sale, relocation, divorce, financial — plus timeline pressure.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Walk the property in person. Photograph roof, foundation lines, HVAC units, attic, crawl space, all penetrations.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Verify property tax history and any pending assessment or millage change at the county tax office.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Confirm HOA / covenants / deed restrictions — get the actual document, not a summary.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Lender</span>Pre-approval letter updated to match target purchase range, 20% down assumption.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Counsel</span>Review the title commitment and plat before offer — surface easements, setbacks, encroachments.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Counsel</span>Confirm holding entity structure — personal name vs. LLC — with tax and liability implications documented.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Run the all-in monthly number: P&amp;I, taxes, insurance (incl. liability rider for 7,000+ sq ft), HOA, utilities, maintenance reserve at 1% of value annually.</div></li>
        </ul>
      </section>

      <!-- SECTION 4 — OFFER LADDER -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">04</div>
          <div class="nu-section-title"><span class="lead-word">Offer</span> <span class="rest">Ladder — Anchor, Counter, Ceiling</span></div>
        </div>

        <p>Three rungs. Do not move to the next rung without a new piece of information from the seller. Each rung is paired to a strategic message, not just a number.</p>

        <div class="nu-ladder">
          <div class="nu-rung nu-rung-1">
            <div>
              <div class="nu-rung-name">Rung 1 — Anchor</div>
              <div class="nu-rung-price">List − 12 to 15%</div>
            </div>
            <div class="nu-rung-note">Opening offer. Tied to comps &amp; diligence findings. Pairs with a short cover letter citing specific data points. Signals discipline, not insult.</div>
          </div>
          <div class="nu-rung nu-rung-2">
            <div>
              <div class="nu-rung-name">Rung 2 — Working</div>
              <div class="nu-rung-price">List − 6 to 8%</div>
            </div>
            <div class="nu-rung-note">First counter range. Only moves here after seller rejects and offers a meaningful concession (price, timing, or credits). Keep contingencies intact.</div>
          </div>
          <div class="nu-rung nu-rung-3">
            <div>
              <div class="nu-rung-name">Rung 3 — Ceiling</div>
              <div class="nu-rung-price">Appraised Value</div>
            </div>
            <div class="nu-rung-note">Hard stop. No price above independent appraisal, ever. If ceiling does not close the deal, the deal does not close. Walk.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — PRICING WORKSHEET -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">05</div>
          <div class="nu-section-title"><span class="lead-word">Pricing</span> <span class="rest">Worksheet — Fill at Diligence Close</span></div>
        </div>

        <p>Populate once comps are pulled and inspection completes. Do not commit numbers until this sheet reconciles.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Basis</th>
                <th>Per Sq Ft</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seller list price</td>
                <td class="note">Current list</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Area comp median (closed, last 24 mo)</td>
                <td class="note">6,000–8,500 sq ft, 1-mi radius</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Area comp adjusted for 4505 features</td>
                <td class="note">Lot, finishes, age, condition</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Independent appraisal (ordered)</td>
                <td class="note">Licensed appraiser, buyer-paid</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Deferred maintenance credit needed</td>
                <td class="note">From inspection report</td>
                <td class="num">—</td>
                <td class="num">$(____)</td>
              </tr>
              <tr>
                <td>Anchor offer (Rung 1)</td>
                <td class="note">List − 12 to 15%</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Working offer (Rung 2)</td>
                <td class="note">List − 6 to 8%</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
              <tr>
                <td>Ceiling (Rung 3)</td>
                <td class="note">Appraised value</td>
                <td class="num">$____ / sq ft</td>
                <td class="num">$____</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Target Negotiation Band</td>
                <td class="num">$____ – $____</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p style="font-size: 0.88rem; color: var(--nu-body-text); margin-top: 10px;">Per-square-foot view is the only honest comparison when a property is this large. Total price alone hides whether 4505 is priced with the market or ahead of it.</p>
      </section>

      <!-- SECTION 6 — LEVERAGE MAP -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">06</div>
          <div class="nu-section-title"><span class="lead-word">Leverage</span> <span class="rest">Map — Strengths, Risks, Levers</span></div>
        </div>

        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">Buyer Strengths <span class="tag tag-strength">Strength</span></div>
            <ul class="nu-bullets">
              <li>Pre-approved, clean credit, documented income — not a speculative buyer</li>
              <li>Can close on the seller's preferred timeline if the number is right</li>
              <li>Owner-occupant intent — stronger than an investor offer in most seller eyes</li>
              <li>No contingent sale required — not waiting on another house to close</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Buyer Risks <span class="tag tag-risk">Risk</span></div>
            <ul class="nu-bullets">
              <li>7,098 sq ft properties carry higher carrying cost — insurance and taxes are non-trivial</li>
              <li>Larger homes have thinner comp pools and longer resale cycles</li>
              <li>Any undisclosed deferred maintenance scales with square footage</li>
              <li>Emotional attachment pre-close is the single biggest negotiation leak — guard against it</li>
            </ul>
          </div>
        </div>

        <div class="nu-badge-row">
          <div class="nu-badge"><span class="nu-badge-icon">1</span>Lever — Days on market. The longer it has sat, the more price flexibility exists.</div>
          <div class="nu-badge"><span class="nu-badge-icon">2</span>Lever — Inspection findings. Every documented defect is a credit, not a walk-away alone.</div>
          <div class="nu-badge"><span class="nu-badge-icon">3</span>Lever — Close timing. Sellers value certainty. Trade a firm close date for a better price.</div>
          <div class="nu-badge"><span class="nu-badge-icon">4</span>Lever — Appraisal gap. Refuse to cover more than a small, pre-defined gap.</div>
        </div>
      </section>

      <!-- SECTION 7 — SCRIPTS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">07</div>
          <div class="nu-section-title"><span class="lead-word">Negotiation</span> <span class="rest">Scripts — Opening &amp; Counters</span></div>
        </div>

        <p>Direct language. No filler. Aaron's voice — warm, confident, never apologetic. Email, do not negotiate material terms by text.</p>

        <div class="nu-script">
          <span class="nu-script-label">Opening — Cover Letter with Rung 1</span>
          "Thanks for the conversation on 4505 Buttewoods. Attached is our written offer. The number is built off closed comps in the neighborhood for properties in the 6,000–8,500 square foot range over the last twenty-four months, adjusted for condition and features. We are pre-approved, flexible on close date, and prepared to move quickly once terms are agreed. Happy to discuss."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Counter — After Seller Rejects Rung 1</span>
          "Appreciate the response. Before we move our number, help me understand where you are — is the gap on price, timing, or contingencies? That tells me what is worth re-working on our side. We want to close this, but the number has to be defensible against the appraisal the lender is going to order."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Inspection — Requesting Credit</span>
          "The inspection surfaced the following items — [list]. We are not asking you to do the work. We are asking for a credit at closing equal to contractor-quoted repair costs so we can address it on our timeline after close. That is the cleanest path for both sides."
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Walk-Away — Said Once, Mean It</span>
          "We have taken this as far as the numbers support. If you can meet us at [ceiling], we close on the date you want. If not, we wish you well with the next buyer. Either outcome is fine on our side — we just need an answer by [date]."
        </div>
      </section>

      <!-- SECTION 8 — RED LINES -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">08</div>
          <div class="nu-section-title"><span class="lead-word">Red</span> <span class="rest">Lines — Non-Negotiable</span></div>
        </div>

        <div class="nu-redlines">
          <h3>Do Not Cross These — No Exceptions</h3>
          <ul class="nu-bullets">
            <li>No waived inspection contingency. Ever. 7,098 sq ft is too much surface area to buy sight-unseen.</li>
            <li>No waived financing contingency beyond what the lender has committed in writing.</li>
            <li>No appraisal-gap coverage above a pre-defined dollar cap. Cap it in the contract.</li>
            <li>No "as-is" with no seller disclosures. Require the standard seller's disclosure form.</li>
            <li>No closing before title commitment is reviewed by counsel and all items are cleared.</li>
            <li>No purchase in Norris Utilities®, LLC. This transaction does not touch the operating entity.</li>
            <li>No emotional decisions after a walk-through. Sleep on every counter for at least one night.</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 9 — TIMELINE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">09</div>
          <div class="nu-section-title"><span class="lead-word">14-Day</span> <span class="rest">Timeline — Diligence to Offer</span></div>
        </div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Milestone</th>
                <th>Owner</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="num">Day 1</td><td>Comp pull &amp; seller motivation report</td><td>Agent</td><td>Written summary, $/sq ft table</td></tr>
              <tr><td class="num">Day 2</td><td>On-site walk-through with photo log</td><td>Aaron</td><td>Condition memo, questions list</td></tr>
              <tr><td class="num">Day 3</td><td>Tax, HOA, deed restriction pull</td><td>Agent / Aaron</td><td>Document set</td></tr>
              <tr><td class="num">Day 4</td><td>Counsel review — entity &amp; title preview</td><td>Counsel</td><td>Written recommendation</td></tr>
              <tr><td class="num">Day 5</td><td>Lender pre-approval updated to target band</td><td>Lender</td><td>Fresh letter</td></tr>
              <tr><td class="num">Day 6</td><td>Pricing worksheet populated &amp; reviewed</td><td>Aaron</td><td>Anchor / Working / Ceiling locked</td></tr>
              <tr><td class="num">Day 7</td><td>Offer package drafted (contract + letter + proof of funds/pre-approval)</td><td>Agent + Counsel</td><td>Signature-ready package</td></tr>
              <tr><td class="num">Day 8</td><td>Offer delivered — Rung 1</td><td>Agent</td><td>Delivery confirmation, deadline set</td></tr>
              <tr><td class="num">Day 9–11</td><td>Seller response window — counter or accept</td><td>Seller</td><td>Written response</td></tr>
              <tr><td class="num">Day 12</td><td>Internal review &amp; decision on counter (Rung 2 if warranted)</td><td>Aaron + Counsel</td><td>Decision memo</td></tr>
              <tr><td class="num">Day 13</td><td>Counter or walk communicated in writing</td><td>Agent</td><td>Written reply</td></tr>
              <tr><td class="num">Day 14</td><td>Ratified contract OR formal withdrawal — no middle ground</td><td>All</td><td>Signed contract or clean exit</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 10 — POST-CONTRACT -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">10</div>
          <div class="nu-section-title"><span class="lead-word">Post-Contract</span> <span class="rest">Checklist — Under Contract to Close</span></div>
        </div>

        <ul class="nu-checklist">
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Order full inspection within 48 hours of ratification — general, HVAC, roof, termite, sewer scope.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Lender</span>Submit full loan package same day contract ratifies. Lock rate per strategy.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Counsel</span>Order title commitment, survey, and any required endorsements.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Shop homeowner's insurance — 7,098 sq ft requires specialty quote, not standard binder.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Verify wire instructions by phone — never by email — before sending closing funds.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Aaron</span>Final walk-through within 24 hours of closing. Confirm condition matches contract.</div></li>
          <li><span class="nu-checkbox" aria-hidden="true"></span><div><span class="who">Counsel</span>Review every page of the closing disclosure line by line before signing.</div></li>
        </ul>
      </section>

      <!-- SECTION 11 — PROFESSIONAL TEAM -->
      <section class="nu-section">
        <div class="nu-section-header">
          <div class="nu-section-num">11</div>
          <div class="nu-section-title"><span class="lead-word">Professional</span> <span class="rest">Team to Line Up</span></div>
        </div>

        <div class="nu-two-col">
          <div class="nu-card">
            <div class="nu-card-title">Required <span class="tag tag-leverage">Engage First</span></div>
            <ul class="nu-bullets">
              <li>Buyer's real estate agent — fiduciary to Aaron, not dual-agency</li>
              <li>Real estate attorney — contract review &amp; entity structuring</li>
              <li>Mortgage lender — ideally Patrick Lavette at Renasant Bank (existing relationship)</li>
              <li>Licensed appraiser — independent, ordered through lender</li>
              <li>Licensed home inspector — specialty: large estate / historic if applicable</li>
            </ul>
          </div>
          <div class="nu-card">
            <div class="nu-card-title">Recommended <span class="tag tag-leverage">Engage After Ratify</span></div>
            <ul class="nu-bullets">
              <li>Insurance broker — specialty residential, luxury home rider</li>
              <li>Title &amp; escrow officer — coordinated through counsel</li>
              <li>Surveyor — if existing survey is older than 5 years or lot lines are unclear</li>
              <li>CPA — tax consultation on entity choice &amp; primary-residence treatment</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CLOSING NOTE -->
      <section class="nu-section" style="margin-bottom: 12px;">
        <div class="nu-card" style="background: linear-gradient(135deg, #f6f9ff 0%, #eef5ff 100%); border: 1px solid #cfe0ff;">
          <div class="nu-card-title">Bottom Line</div>
          <p>Treat 4505 Buttewoods like any other major Norris Utilities® negotiation: the number is defensible or it is not. Do the diligence, anchor to comps, stay off emotion, keep the contingencies intact, and have one clear ceiling written down before the first offer goes out. The property will still be there tomorrow — and if it is not, the next one will.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Confidential negotiation brief — prepared April 21, 2026. For Aaron's personal use. Not a legal document. Consult licensed counsel before executing any offer or contract.
    </div>
  </footer>

</body>
</html>