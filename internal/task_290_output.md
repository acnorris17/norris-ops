<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory Receiving Action — PO Processing | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B7F3A;
      --nu-warning: #C9670B;
      --nu-danger: #B0152A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 70px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 90px);
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.78em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-doc-eyebrow {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 30px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: var(--nu-white);
      text-transform: uppercase;
    }

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix-bg {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 0 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 50px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOCUMENT META BAR ══ */
    .nu-meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
      background: var(--nu-white);
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      overflow: hidden;
      margin-bottom: 36px;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-meta-item {
      padding: 18px 22px;
      border-right: 1px solid var(--nu-medium-gray);
    }
    .nu-meta-item:last-child { border-right: none; }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-status-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-status-active {
      background: #FFF5E6;
      color: var(--nu-warning);
      border: 1px solid #F5C681;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 38px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.75rem;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title-first {
      color: #0033cc;
    }
    .nu-section-title-rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-intro {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      line-height: 1.7;
    }

    /* ══ ACTION CALLOUT ══ */
    .nu-action-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 60%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 8px 28px rgba(0, 0, 102, 0.25);
      position: relative;
      overflow: hidden;
    }
    .nu-action-callout::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.22) 0%, transparent 65%);
    }
    .nu-action-callout-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
      position: relative;
      z-index: 2;
    }
    .nu-action-callout-title {
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 12px;
      line-height: 1.3;
      position: relative;
      z-index: 2;
    }
    .nu-action-callout-text {
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,0.92);
      line-height: 1.7;
      position: relative;
      z-index: 2;
      max-width: 780px;
    }

    /* ══ CHECKLIST STEPS ══ */
    .nu-step-grid {
      display: grid;
      gap: 16px;
    }
    .nu-step {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 26px 22px 78px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.1);
    }
    .nu-step-number {
      position: absolute;
      top: 22px;
      left: 22px;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .nu-step-title {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .nu-step-body {
      font-size: 0.96rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-step-meta {
      margin-top: 10px;
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ TWO-COLUMN ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 36px;
    }

    /* ══ INFO CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card-title {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nu-card-title::before {
      content: '';
      width: 6px;
      height: 22px;
      background: var(--nu-blue);
      border-radius: 3px;
    }
    .nu-card-list {
      list-style: none;
      padding: 0;
    }
    .nu-card-list li {
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
    }
    .nu-card-list li:last-child { border-bottom: none; }
    .nu-card-list .label { font-weight: 700; color: var(--nu-dark-text); }
    .nu-card-list .value { color: var(--nu-body-text); text-align: right; }

    /* ══ DATA TABLE ══ */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.94rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
    }
    .nu-table thead th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:hover { background: var(--nu-light-gray); }
    .nu-table .col-sku { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }
    .nu-table .col-qty { font-weight: 700; text-align: center; }
    .nu-table .col-status { white-space: nowrap; }
    .check-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .pill-pending { background: #FFF5E6; color: var(--nu-warning); border: 1px solid #F5C681; }
    .pill-ready { background: #E6F5EE; color: var(--nu-success); border: 1px solid #8BC9A4; }

    /* ══ CHECK BOXES ══ */
    .nu-checkbox {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-right: 10px;
      vertical-align: middle;
    }

    /* ══ ALERT BOX ══ */
    .nu-alert {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      background: linear-gradient(135deg, #FFF8E6 0%, #FFEFCC 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 28px;
    }
    .nu-alert-icon {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      fill: var(--nu-warning);
    }
    .nu-alert-content h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-alert-content p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 6px;
      bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .nu-timeline-item {
      position: relative;
      padding: 8px 0 18px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 14px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }
    .nu-timeline-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-text {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ SIGNOFF ══ */
    .nu-signoff {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .nu-signoff-block .label {
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-signoff-line {
      border-bottom: 2px solid var(--nu-dark-text);
      height: 36px;
      margin-bottom: 6px;
    }
    .nu-signoff-helper {
      font-size: 0.82rem;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001188 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-rule {
      max-width: 220px;
      margin: 18px auto;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, var(--nu-cyan) 50%, transparent 100%);
    }
    .nu-footer-fineprint {
      margin-top: 12px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 880px) {
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-signoff { grid-template-columns: 1fr; }
      .nu-meta-item { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-meta-item:last-child { border-bottom: none; }
    }
    @media (max-width: 640px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; padding-left: 0.55em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-container { padding: 36px 20px; }
      .nu-section-title { font-size: 1.4rem; }
      .nu-action-callout { padding: 24px 22px; }
      .nu-action-callout-title { font-size: 1.25rem; }
      .nu-step { padding: 20px 22px 20px 64px; }
      .nu-step-number { width: 34px; height: 34px; font-size: 1rem; top: 20px; left: 18px; }
      .nu-table thead th, .nu-table tbody td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-step, .nu-table-wrap, .nu-signoff { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-eyebrow">Inventory Receiving Action</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <div class="nu-meta-label">Action Item</div>
          <div class="nu-meta-value">PO Receiving &amp; Processing</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Action Item</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Logged</div>
          <div class="nu-meta-value">April 25, 2026</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value"><span class="nu-status-pill nu-status-active">Open — Action Required</span></div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
      </div>

      <!-- ACTION CALLOUT -->
      <div class="nu-action-callout">
        <div class="nu-action-callout-eyebrow">Action Item</div>
        <div class="nu-action-callout-title">Receive and process inventory from the last PO order.</div>
        <div class="nu-action-callout-text">
          Verify physical receipt against the purchase order, inspect for transit damage, document discrepancies, label and shelve to the assigned bin location, then close out the PO in QuickBooks so inventory counts and cost layers are accurate before the next sale or quote pulls from this stock.
        </div>
      </div>

      <!-- STEP-BY-STEP -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="nu-section-title-first">Receiving</span>
          <span class="nu-section-title-rest">— Step-by-Step Workflow</span>
        </h2>
        <p class="nu-section-intro">Work the steps in order. Do not skip the inspection step — damaged or short shipments must be documented before signing the carrier's BOL or POD; otherwise the freight claim window narrows or closes entirely.</p>

        <div class="nu-step-grid">

          <div class="nu-step">
            <div class="nu-step-number">1</div>
            <div class="nu-step-title">Pull the Open PO</div>
            <div class="nu-step-body">Open QuickBooks Online &rarr; Expenses &rarr; Vendors &rarr; locate the most recent open Purchase Order. Print or pull on iPad. Match PO# to the carrier paperwork before unloading.</div>
            <div class="nu-step-meta">Reference: QBO Vendor Center · Status filter "Open"</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">2</div>
            <div class="nu-step-title">Inspect Freight on the Truck</div>
            <div class="nu-step-body">Walk every pallet and carton before signing. Note crushed corners, water staining, broken bands, leaning pallets. Photograph any damage. Mark concealed damage suspicions on the BOL/POD with the driver present — this preserves the freight claim.</div>
            <div class="nu-step-meta">Photos: timestamp on, side &amp; top angles, label visible</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">3</div>
            <div class="nu-step-title">Count Against the Packing List</div>
            <div class="nu-step-body">Carton count matches BOL piece count first. Then break-down to unit count against the packing list. Tally on the printed PO. Any short or over goes in red ink with initials and date.</div>
            <div class="nu-step-meta">Tolerance: zero. Every unit gets a tick mark.</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">4</div>
            <div class="nu-step-title">Verify SKU &amp; Description</div>
            <div class="nu-step-body">Confirm each line — Norris Utilities® SKU, description, and revision/lot match what was ordered. FlexPro Armor covers must match size code (NU-BC-2851 vs NU-BC-2834) and combo flag (-C). Wrong SKU = do not put away — quarantine.</div>
            <div class="nu-step-meta">Critical for FlexPro Armor: 2-Man vs 1.5-Man</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">5</div>
            <div class="nu-step-title">Quality Check Each Unit</div>
            <div class="nu-step-body">Open one unit per SKU minimum. For FlexPro Armor: zipper run, stitch quality, hardware count, Phoenix Icon® placement and orientation, label sewn flat. For Samson Rope: spool integrity, splice tags, length tag matches order. For equipment: serial plate, key/manual packet.</div>
            <div class="nu-step-meta">QC fail = photograph + isolate + email vendor same day</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">6</div>
            <div class="nu-step-title">Label &amp; Bin Stock</div>
            <div class="nu-step-body">Apply receiving label (date received, PO#, qty, bin). Move to assigned location. FlexPro Armor stages off the floor on pallet racking — never directly on concrete. Samson Rope spools store vertical, out of UV.</div>
            <div class="nu-step-meta">Storage: dry, off-ground, away from direct sunlight</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">7</div>
            <div class="nu-step-title">Receive in QuickBooks</div>
            <div class="nu-step-body">QBO &rarr; PO &rarr; "Copy to Bill" &rarr; verify quantities match the physical count tally, not the original PO. Adjust any short/over lines before saving. Attach the vendor invoice PDF and the signed BOL to the bill record.</div>
            <div class="nu-step-meta">Cost layer locks here — accuracy = correct margin downstream</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">8</div>
            <div class="nu-step-title">File &amp; Notify</div>
            <div class="nu-step-body">File hard copies (signed BOL, packing list, marked PO) in the vendor folder. Email vendor contact confirming receipt and noting any discrepancies. CC the standard vendor pair where applicable — Donna Poll &amp; Sarah Daniels for Samson, Troy Gongwer &amp; Thayne Grove for BOSS Products.</div>
            <div class="nu-step-meta">Email window: same business day, before 5:00 PM CT</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-number">9</div>
            <div class="nu-step-title">Update the Master Tracker</div>
            <div class="nu-step-body">Mark the PO line as "Received" with the actual receipt date and any short/damage notes. Move any allocated customer orders forward — quotes pending stock can now release. Telegram update if a customer was waiting.</div>
            <div class="nu-step-meta">Trigger: Caroline Butler reviews allocations next morning</div>
          </div>

        </div>
      </section>

      <!-- ALERT BOX -->
      <div class="nu-alert">
        <svg class="nu-alert-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L1 21h22L12 2zm0 6l7.53 13H4.47L12 8zm-1 4v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
        </svg>
        <div class="nu-alert-content">
          <h4>Concealed Damage — 15 Day Rule</h4>
          <p>If damage is discovered after the truck leaves but within 15 calendar days, file a concealed damage claim with the carrier <em>before</em> day 16. Photograph the carton in the same condition you opened it, hold the packaging until the claim is resolved, and email the vendor the same day so they can support the claim from their end.</p>
        </div>
      </div>

      <!-- TWO COLUMN: PRE-RECEIVING + DISCREPANCY -->
      <div class="nu-two-col">
        <div class="nu-card">
          <div class="nu-card-title">Pre-Receiving Checklist</div>
          <ul class="nu-card-list">
            <li><span class="label"><span class="nu-checkbox"></span>Open PO printed</span><span class="value">PDF + paper</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Forklift fueled / charged</span><span class="value">If pallet freight</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Box cutter, pallet jack, scale</span><span class="value">Staged at dock</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Receiving labels printed</span><span class="value">Date / PO# / qty</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Bin locations assigned</span><span class="value">From master plan</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Phone charged for photos</span><span class="value">≥ 50%</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Vendor contact on speed dial</span><span class="value">For live calls</span></li>
          </ul>
        </div>

        <div class="nu-card">
          <div class="nu-card-title">If You Find a Discrepancy</div>
          <ul class="nu-card-list">
            <li><span class="label">Short shipment</span><span class="value">Note on BOL · email vendor</span></li>
            <li><span class="label">Over shipment</span><span class="value">Quarantine · do not invoice</span></li>
            <li><span class="label">Visible damage</span><span class="value">Photo + BOL note + claim</span></li>
            <li><span class="label">Concealed damage</span><span class="value">File w/in 15 days</span></li>
            <li><span class="label">Wrong SKU</span><span class="value">Quarantine · RMA request</span></li>
            <li><span class="label">QC failure</span><span class="value">Photo · isolate · vendor email</span></li>
            <li><span class="label">Missing paperwork</span><span class="value">Email vendor, hold PO close</span></li>
          </ul>
        </div>
      </div>

      <!-- INVENTORY TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="nu-section-title-first">Receiving</span>
          <span class="nu-section-title-rest">— Line-by-Line Verification Sheet</span>
        </h2>
        <p class="nu-section-intro">Use this sheet at the dock. Tick each box as the line is verified. Any line that fails verification stays in receiving — do not put it away to active bins until the discrepancy is closed.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Description</th>
                <th>Qty Ordered</th>
                <th>Qty Received</th>
                <th>Inspected</th>
                <th>Bin</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-sku">NU-BC-2851</td>
                <td>FlexPro Armor — 2-Man Bucket Cover, 28"×51"</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
              <tr>
                <td class="col-sku">NU-BC-2834</td>
                <td>FlexPro Armor — 1.5-Man Bucket Cover, 28"×34"</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
              <tr>
                <td class="col-sku">NU-BC-2851-C</td>
                <td>FlexPro Armor — 2-Man Combo Bucket Cover</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
              <tr>
                <td class="col-sku">NU-BC-2834-C</td>
                <td>FlexPro Armor — 1.5-Man Combo Bucket Cover</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
              <tr>
                <td class="col-sku">SAMSON</td>
                <td>Samson Rope — line items per spec sheet</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
              <tr>
                <td class="col-sku">OTHER</td>
                <td>Additional PO line items (write below)</td>
                <td class="col-qty">__</td>
                <td class="col-qty">__</td>
                <td class="col-qty"><span class="nu-checkbox"></span></td>
                <td>____</td>
                <td class="col-status"><span class="check-pill pill-pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.85rem; color: var(--nu-body-text); margin-top: 6px;">SKU rows above reflect the standard Norris Utilities® FlexPro Armor catalog. Add or strike rows to match the actual PO before walking the dock.</p>
      </section>

      <!-- POST-RECEIVING + TIMELINE -->
      <div class="nu-two-col">
        <div class="nu-card">
          <div class="nu-card-title">Post-Receiving Tasks</div>
          <ul class="nu-card-list">
            <li><span class="label"><span class="nu-checkbox"></span>PO converted to Bill in QBO</span><span class="value">Same day</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Vendor invoice + BOL attached</span><span class="value">PDFs on bill</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Master tracker updated</span><span class="value">Status: Received</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Allocated customer orders flagged</span><span class="value">Caroline notified</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Vendor confirmation email sent</span><span class="value">CC vendor pair</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Hard copies filed</span><span class="value">Vendor folder</span></li>
            <li><span class="label"><span class="nu-checkbox"></span>Telegram status posted</span><span class="value">Operations channel</span></li>
          </ul>
        </div>

        <div class="nu-card">
          <div class="nu-card-title">Same-Day Timeline</div>
          <div class="nu-timeline">
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">T-1 Day · Evening</div>
              <div class="nu-timeline-title">Pre-stage</div>
              <div class="nu-timeline-text">Print PO, stage labels, confirm bin assignments, charge equipment.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Receipt · 0:00</div>
              <div class="nu-timeline-title">Truck Arrival</div>
              <div class="nu-timeline-text">Inspect freight on truck, count cartons, photograph any damage.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Receipt · +30 min</div>
              <div class="nu-timeline-title">Sign &amp; Unload</div>
              <div class="nu-timeline-text">BOL signed with notations, freight inside, driver released.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Receipt · +90 min</div>
              <div class="nu-timeline-title">Verify &amp; QC</div>
              <div class="nu-timeline-text">Line-by-line count, SKU verify, sample QC each line.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Receipt · +3 hrs</div>
              <div class="nu-timeline-title">Bin &amp; QBO Bill</div>
              <div class="nu-timeline-text">Stock to bins, convert PO to Bill in QuickBooks, attach paperwork.</div>
            </div>
            <div class="nu-timeline-item">
              <div class="nu-timeline-date">Receipt · End of Day</div>
              <div class="nu-timeline-title">Notify &amp; File</div>
              <div class="nu-timeline-text">Vendor email sent, master tracker updated, hard copies filed.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- VENDOR CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="nu-section-title-first">Vendor</span>
          <span class="nu-section-title-rest">— Notification Contacts</span>
        </h2>
        <p class="nu-section-intro">When confirming receipt or reporting a discrepancy, always CC the standard vendor pair so both contacts have the same record. This is a hard rule for Norris Utilities® vendor relationships.</p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Primary Contact</th>
                <th>CC Contact</th>
                <th>Notification Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Samson Rope</strong></td>
                <td>Donna Poll</td>
                <td>Sarah Daniels</td>
                <td>Always — receipt confirmation + any discrepancy</td>
              </tr>
              <tr>
                <td><strong>BOSS Products</strong></td>
                <td>Troy Gongwer</td>
                <td>Thayne Grove</td>
                <td>Always — receipt confirmation + any discrepancy</td>
              </tr>
              <tr>
                <td><strong>Skylift</strong></td>
                <td>Andrew Jarmoszuk</td>
                <td>Dale Williams · Nick Jarmoszuk Jr</td>
                <td>Equipment receipts &amp; PDI items</td>
              </tr>
              <tr>
                <td><strong>Bay Shore Systems</strong></td>
                <td>Andy Barron</td>
                <td>Herb Minatre (owner)</td>
                <td>Drill rig receipts &amp; SE territory deliveries</td>
              </tr>
              <tr>
                <td><strong>Irby Construction</strong></td>
                <td>Jared Lemoine</td>
                <td>—</td>
                <td>If receipt is for an Irby-tied PO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SIGN OFF -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="nu-section-title-first">Receiving</span>
          <span class="nu-section-title-rest">— Sign-Off</span>
        </h2>
        <p class="nu-section-intro">Sign here once the PO is fully received, billed in QuickBooks, the master tracker is updated, and the vendor has been notified. This sign-off is the trigger that releases allocated customer orders for fulfillment.</p>
        <div class="nu-signoff">
          <div class="nu-signoff-block">
            <div class="label">Received By</div>
            <div class="nu-signoff-line"></div>
            <div class="nu-signoff-helper">Print name · Signature · Date</div>
          </div>
          <div class="nu-signoff-block">
            <div class="label">Verified By (QBO Bill Posted)</div>
            <div class="nu-signoff-line"></div>
            <div class="nu-signoff-helper">Aaron C. Norris · Caroline Butler · Date</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-rule"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210 &nbsp;|&nbsp; Birmingham, AL 35242
    </div>
    <div class="nu-footer-fineprint">
      Norris Utilities® and A Legacy of Commitment® are registered trademarks of Norris Utilities, LLC. The Phoenix Icon® is a registered trademark of Norris Utilities, LLC. Third-generation utility equipment dealer/distributor · Founded November 2021 · Birmingham, Alabama · Serving 20+ states.
    </div>
  </footer>

</body>
</html>