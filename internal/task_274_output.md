<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open PO Follow-Up — Inventory Status — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-warning: #C8102E;
      --nu-success: #2E7D32;
      --nu-pending: #ED6C02;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
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
      margin-top: 22px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 20px;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-white);
      font-weight: 700;
    }

    /* CHEVRON TRANSITION */
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
      padding: 50px 0 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 65%;
      max-width: 700px;
      max-height: 700px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 22 L72 12 L60 28 L82 22 L65 38 L78 52 L55 42 L50 62 L45 42 L22 52 L35 38 L18 22 L40 28 L28 12 L45 22 Z M50 58 L52 72 L62 67 L55 78 L50 96 L45 78 L38 67 L48 72 Z' fill='%230033cc' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    /* META BAR */
    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      background: linear-gradient(90deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .meta-bar .meta-item {
      font-size: 0.85rem;
    }
    .meta-bar .meta-label {
      display: block;
      font-weight: 700;
      color: var(--nu-blue-deep);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
    .meta-bar .meta-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .priority-pill {
      display: inline-block;
      padding: 6px 14px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.75rem;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue-deep); }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .section-sub {
      color: var(--nu-body-text);
      font-size: 0.98rem;
      margin-bottom: 24px;
    }
    .section { margin-bottom: 48px; }

    /* PO TABLE / CARDS */
    .po-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      gap: 20px;
    }
    .po-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .po-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.10);
    }
    .po-card.urgent { border-top-color: var(--nu-warning); }
    .po-card.pending { border-top-color: var(--nu-pending); }
    .po-card.confirmed { border-top-color: var(--nu-success); }

    .po-vendor {
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .po-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      line-height: 1.3;
    }
    .po-number {
      font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .po-meta-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .po-meta-row:last-of-type { border-bottom: none; }
    .po-meta-row .label {
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .po-meta-row .value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .po-status {
      margin-top: 14px;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 700;
    }
    .po-status.warning {
      background: rgba(200,16,46,0.08);
      color: var(--nu-warning);
      border-left: 3px solid var(--nu-warning);
    }
    .po-status.pending {
      background: rgba(237,108,2,0.08);
      color: var(--nu-pending);
      border-left: 3px solid var(--nu-pending);
    }
    .po-status.success {
      background: rgba(46,125,50,0.08);
      color: var(--nu-success);
      border-left: 3px solid var(--nu-success);
    }
    .po-actions {
      margin-top: 16px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    /* BUTTONS */
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: var(--nu-blue-deep);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* EMAIL DRAFT BLOCKS */
    .draft-block {
      background: var(--nu-light-gray);
      border-radius: 10px;
      padding: 28px;
      margin-bottom: 24px;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
    }
    .draft-header {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 24px;
      align-items: baseline;
      padding-bottom: 16px;
      margin-bottom: 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .draft-vendor {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue-deep);
    }
    .draft-fields {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .draft-fields div { margin-bottom: 4px; }
    .draft-fields strong {
      display: inline-block;
      width: 60px;
      color: var(--nu-dark-text);
    }
    .draft-body {
      background: var(--nu-white);
      padding: 22px 26px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
      font-family: var(--font-primary);
    }
    .draft-body p { margin-bottom: 14px; }
    .draft-body .indent { padding-left: 1.5em; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .checklist h3 {
      font-weight: 900;
      color: var(--nu-blue-deep);
      margin-bottom: 16px;
      font-size: 1.1rem;
      letter-spacing: 0.02em;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 14px;
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .check-text {
      flex: 1;
      font-size: 0.95rem;
    }
    .check-text strong { color: var(--nu-dark-text); }
    .check-text small {
      display: block;
      color: var(--nu-body-text);
      margin-top: 2px;
      font-size: 0.82rem;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 32px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .timeline-item {
      position: relative;
      padding: 12px 0 12px 12px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -29px;
      top: 18px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item.now::before {
      background: var(--nu-warning);
      box-shadow: 0 0 0 2px var(--nu-warning), 0 0 0 6px rgba(200,16,46,0.2);
    }
    .timeline-date {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
    }
    .timeline-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin: 2px 0 4px;
    }
    .timeline-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* CONTACT GRID */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .contact-chip {
      background: var(--nu-white);
      padding: 16px 20px;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-name {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 2px;
    }
    .contact-role {
      font-size: 0.78rem;
      color: var(--nu-blue-deep);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .contact-line {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      display: block;
      margin-bottom: 2px;
    }
    .contact-line a {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .contact-line a:hover { text-decoration: underline; }

    /* CALL-OUT */
    .callout {
      background: linear-gradient(135deg, #fff8e6 0%, #fff3d0 100%);
      border: 1px solid #f0d77a;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    .callout strong { color: var(--nu-dark-text); }
    .callout p { color: var(--nu-body-text); font-size: 0.95rem; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: -50%; left: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.08) 0%, transparent 70%);
    }
    .nu-footer * { position: relative; }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
      color: rgba(255,255,255,0.85);
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      display: block;
      margin-bottom: 4px;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .container { padding: 0 22px; }
      .meta-bar { flex-direction: column; align-items: flex-start; gap: 12px; }
      .nu-section-title { font-size: 1.4rem; }
      .draft-fields strong { width: 55px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .po-card, .draft-block, .checklist { box-shadow: none; break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 22 L72 12 L60 28 L82 22 L65 38 L78 52 L55 42 L50 62 L45 42 L22 52 L35 38 L18 22 L40 28 L28 12 L45 22 Z M50 58 L52 72 L62 67 L55 78 L50 96 L45 78 L38 67 L48 72 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Item · Open PO Follow-Up</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- META BAR -->
      <div class="meta-bar">
        <div class="meta-item">
          <span class="meta-label">Action Item</span>
          <span class="meta-value">Follow up on order from last PO — anxiously waiting on inventory</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Source</span>
          <span class="meta-value">reMarkable Capture</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Captured</span>
          <span class="meta-value">2026-04-24</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Owner</span>
          <span class="meta-value">Aaron C. Norris</span>
        </div>
        <div class="meta-item">
          <span class="priority-pill">Priority · High</span>
        </div>
      </div>

      <!-- SECTION 1: SITUATION -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Situation.</span> <span class="rest">What this action covers</span></h2>
        <p class="section-sub">Aaron flagged on reMarkable that he is anxiously waiting on inventory from the last open POs. Three POs are currently outstanding across our top three vendor relationships. Each one has a customer commitment behind it. This page consolidates ETA, contact, and a ready-to-send follow-up draft for each so the calls and emails can be cleared in one sitting.</p>

        <div class="callout">
          <p><strong>Why this matters now.</strong> Customer-side commitments are stacked behind each open PO — Skylift trucks against the 1/12 PO, FlexPro Armor reorders against the BOSS Products production line, and Samson Rope inventory replenishment against active dealer/distributor demand. The longer ETA confirmation slips, the more exposure on follow-through promises Aaron has already made to the field.</p>
        </div>
      </section>

      <!-- SECTION 2: OPEN POs -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Open</span> <span class="rest">Purchase Orders</span></h2>
        <p class="section-sub">Three POs awaiting inventory confirmation, ranked by dollar exposure and customer urgency.</p>

        <div class="po-grid">

          <!-- SKYLIFT PO -->
          <div class="po-card urgent">
            <div class="po-vendor">Skylift</div>
            <div class="po-title">5× SBA40i-LW + 1× SBA47i-MH</div>
            <div class="po-number">PO Issued · 2026-01-12</div>

            <div class="po-meta-row"><span class="label">PO Total</span><span class="value">$1,091,402.50</span></div>
            <div class="po-meta-row"><span class="label">Quoted Lead</span><span class="value">~3 weeks (per Nick Gordon)</span></div>
            <div class="po-meta-row"><span class="label">Time Elapsed</span><span class="value">14+ weeks since PO</span></div>
            <div class="po-meta-row"><span class="label">Primary Contact</span><span class="value">Nick Gordon</span></div>

            <div class="po-status warning">
              Significantly past the original 3-week build window. Customer-side delivery commitments at risk. Need a hard chassis-by-chassis status and confirmed ship dates.
            </div>

            <div class="po-actions">
              <a href="#draft-skylift" class="nu-btn-primary">Open Draft</a>
              <a href="tel:+1" class="nu-btn-secondary">Call Skylift</a>
            </div>
          </div>

          <!-- BOSS / FLEXPRO ARMOR PO -->
          <div class="po-card pending">
            <div class="po-vendor">BOSS Products · FlexPro Armor</div>
            <div class="po-title">FlexPro Armor Bucket Cover Reorder</div>
            <div class="po-number">SKUs: NU-BC-2851 · NU-BC-2834 · NU-BC-2851-C · NU-BC-2834-C</div>

            <div class="po-meta-row"><span class="label">Margin Lock</span><span class="value">50% (per pricing rule)</span></div>
            <div class="po-meta-row"><span class="label">Production Status</span><span class="value">Awaiting confirmation</span></div>
            <div class="po-meta-row"><span class="label">Primary Contacts</span><span class="value">Troy Gongwer · Thayne Grove</span></div>
            <div class="po-meta-row"><span class="label">CC Rule</span><span class="value">Always CC both</span></div>

            <div class="po-status pending">
              Need confirmed production ship date by SKU. Active demand: Dominion Energy (Coy Crosby), Linetec, plus open dealer pipeline. Inventory shortfall delays March-shipment invoicing follow-through.
            </div>

            <div class="po-actions">
              <a href="#draft-boss" class="nu-btn-primary">Open Draft</a>
              <a href="#contacts" class="nu-btn-secondary">View Contacts</a>
            </div>
          </div>

          <!-- SAMSON ROPE PO -->
          <div class="po-card pending">
            <div class="po-vendor">Samson Rope</div>
            <div class="po-title">Authorized Distributor Replenishment</div>
            <div class="po-number">Margin Locked · 30%</div>

            <div class="po-meta-row"><span class="label">Order Status</span><span class="value">Open · awaiting ETA</span></div>
            <div class="po-meta-row"><span class="label">Primary Contacts</span><span class="value">Donna Poll · Sarah Daniels</span></div>
            <div class="po-meta-row"><span class="label">CC Rule</span><span class="value">Always CC both</span></div>
            <div class="po-meta-row"><span class="label">Channel</span><span class="value">Distributor (40% off list)</span></div>

            <div class="po-status pending">
              Need shipment tracking + ETA breakdown by line item to clear distributor commitments. Confirm whether any line items are on backorder so we can pre-warn customers rather than miss promises.
            </div>

            <div class="po-actions">
              <a href="#draft-samson" class="nu-btn-primary">Open Draft</a>
              <a href="#contacts" class="nu-btn-secondary">View Contacts</a>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3: EMAIL DRAFTS -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Follow-Up</span> <span class="rest">Drafts (Aaron's voice)</span></h2>
        <p class="section-sub">Three drafts written in Aaron's voice — em-dash greeting, indented paragraphs, no filler words, no apology. Send as-is or edit and send.</p>

        <!-- SKYLIFT DRAFT -->
        <div class="draft-block" id="draft-skylift">
          <div class="draft-header">
            <div class="draft-vendor">Skylift — Truck PO Status</div>
            <div class="draft-fields">
              <div><strong>To:</strong> Nick Gordon — Skylift</div>
              <div><strong>CC:</strong> Andrew Jarmoszuk · Dale Williams · Nick Jarmoszuk Jr</div>
              <div><strong>Subject:</strong> 1/12 PO — Status check on the five SBA40i-LW and the SBA47i-MH</div>
            </div>
          </div>
          <div class="draft-body">
<p>Nick —</p>
<p class="indent">Following up on the PO we issued 1/12 — five SBA40i-LW units plus the one SBA47i-MH. Total of $1,091,402.50.</p>
<p class="indent">When we placed the order, the lead time you quoted was around three weeks. We're well past that window now and I have customer-side delivery commitments riding on these chassis.</p>
<p class="indent">Two things I need from you to get straight on:</p>
<p class="indent">• A unit-by-unit production status — what stage each truck is in today<br>
• A confirmed ship date for each, even if staggered</p>
<p class="indent">If anything is sliding I'd rather know now so I can manage expectations on this end. Appreciate a quick reply on these — happy to jump on a call this week if it's easier.</p>
<p>Sincerely,</p>
<p class="indent">Aaron C. Norris<br>
Founder &amp; CEO<br>
Norris Utilities, LLC<br>
Cell: 205-500-1343<br>
acnorris@norrisutilities.com</p>
          </div>
        </div>

        <!-- BOSS / FLEXPRO ARMOR DRAFT -->
        <div class="draft-block" id="draft-boss">
          <div class="draft-header">
            <div class="draft-vendor">BOSS Products — FlexPro Armor Production Status</div>
            <div class="draft-fields">
              <div><strong>To:</strong> Troy Gongwer · Thayne Grove</div>
              <div><strong>CC:</strong> (always CC both)</div>
              <div><strong>Subject:</strong> FlexPro Armor Reorder — Need confirmed ship dates by SKU</div>
            </div>
          </div>
          <div class="draft-body">
<p>Troy, Thayne —</p>
<p class="indent">Checking in on the open FlexPro Armor PO. I have active demand pulling against this inventory and need to lock down production status by SKU.</p>
<p class="indent">Specifically, can y'all confirm the current build status and confirmed ship date on each of the following:</p>
<p class="indent">• NU-BC-2851 — 2-Man, 28"×51"<br>
• NU-BC-2834 — 1.5-Man, 28"×34"<br>
• NU-BC-2851-C — 2-Man Combo<br>
• NU-BC-2834-C — 1.5-Man Combo</p>
<p class="indent">If any of these are on hold for material or labor, that's the first thing I need flagged so I can pre-warn the customer side. Coy Crosby at Dominion is one of the orders riding behind this and I'd rather give him a real date than a soft one.</p>
<p class="indent">Whatever the status — just give it to me straight and I'll work it from there.</p>
<p>Sincerely,</p>
<p class="indent">Aaron C. Norris<br>
Founder &amp; CEO<br>
Norris Utilities, LLC<br>
Cell: 205-500-1343<br>
acnorris@norrisutilities.com</p>
          </div>
        </div>

        <!-- SAMSON ROPE DRAFT -->
        <div class="draft-block" id="draft-samson">
          <div class="draft-header">
            <div class="draft-vendor">Samson Rope — Distributor Replenishment ETA</div>
            <div class="draft-fields">
              <div><strong>To:</strong> Donna Poll · Sarah Daniels</div>
              <div><strong>CC:</strong> (always CC both)</div>
              <div><strong>Subject:</strong> Open PO — ETA and tracking by line item</div>
            </div>
          </div>
          <div class="draft-body">
<p>Donna, Sarah —</p>
<p class="indent">Following up on our open Samson Rope PO. I'm anxiously waiting on this inventory to clear active distributor commitments on this end.</p>
<p class="indent">Can y'all send over:</p>
<p class="indent">• Confirmed ETA for the shipment<br>
• Tracking once it cuts<br>
• Any line items on backorder, with a realistic restock date</p>
<p class="indent">If there's anything sliding, the earlier I know the better — I'd rather adjust on the dealer side than miss a date. Appreciate the quick turn.</p>
<p>Sincerely,</p>
<p class="indent">Aaron C. Norris<br>
Founder &amp; CEO<br>
Norris Utilities, LLC<br>
Cell: 205-500-1343<br>
acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: ACTION CHECKLIST -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Today's</span> <span class="rest">Action Checklist</span></h2>
        <p class="section-sub">Run top to bottom. Each item is one phone call or one email. Whole list should clear in under 30 minutes.</p>

        <div class="checklist">
          <h3>Order of operations</h3>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>1. Call Nick Gordon — Skylift truck PO.</strong>
              <small>Get unit-by-unit status on the five SBA40i-LW + one SBA47i-MH. Highest dollar exposure ($1.09M) and longest elapsed time. Lead with the call, follow with the email if no answer.</small>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>2. Send the BOSS / FlexPro Armor draft.</strong>
              <small>To Troy Gongwer + Thayne Grove (always CC both). Need confirmed ship dates per SKU. Coy Crosby / Dominion sits behind this — flag if any SKU slides.</small>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>3. Send the Samson Rope draft.</strong>
              <small>To Donna Poll + Sarah Daniels (always CC both). Ask for ETA, tracking number once cut, and any backorder flags.</small>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>4. Update Master Tracker.</strong>
              <small>Once each vendor responds, log confirmed ship date and updated status against the open PO row in <code>master_tracker</code>. Roll any slipped dates forward to customer commitments.</small>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>5. Pre-warn affected customers.</strong>
              <small>If any vendor slips, send proactive heads-up to the affected customer (Coy Crosby / Dominion is the most exposed). One short email — better to set the right expectation now than miss a promise.</small>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-box"></div>
            <div class="check-text">
              <strong>6. Close the loop with CB.</strong>
              <small>Caroline gets the updated ship dates so she can adjust internal scheduling and any pending invoice prep against the March-shipment follow-through.</small>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: CONTACTS -->
      <section class="section" id="contacts">
        <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contacts</span></h2>
        <p class="section-sub">Quick-reference contacts for the three vendors with open POs.</p>

        <div class="contact-grid">

          <div class="contact-chip">
            <div class="contact-name">Nick Gordon</div>
            <div class="contact-role">Skylift · Pricing &amp; Specs</div>
            <span class="contact-line">Primary contact for the 1/12 truck PO</span>
            <span class="contact-line">CC: Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr</span>
          </div>

          <div class="contact-chip">
            <div class="contact-name">Troy Gongwer</div>
            <div class="contact-role">BOSS Products · FlexPro Armor</div>
            <span class="contact-line">Primary on FlexPro Armor production</span>
            <span class="contact-line">Always CC: Thayne Grove</span>
          </div>

          <div class="contact-chip">
            <div class="contact-name">Thayne Grove</div>
            <div class="contact-role">BOSS Products · FlexPro Armor</div>
            <span class="contact-line">Always CC alongside Troy Gongwer</span>
            <span class="contact-line">No solo emails to either</span>
          </div>

          <div class="contact-chip">
            <div class="contact-name">Donna Poll</div>
            <div class="contact-role">Samson Rope</div>
            <span class="contact-line">Primary distributor contact</span>
            <span class="contact-line">Always CC: Sarah Daniels</span>
          </div>

          <div class="contact-chip">
            <div class="contact-name">Sarah Daniels</div>
            <div class="contact-role">Samson Rope</div>
            <span class="contact-line">Always CC alongside Donna Poll</span>
            <span class="contact-line">No solo emails to either</span>
          </div>

          <div class="contact-chip">
            <div class="contact-name">Caroline Butler (CB)</div>
            <div class="contact-role">Norris Utilities · Admin</div>
            <span class="contact-line">Tier 1 trust · loop in on confirmed ship dates</span>
            <span class="contact-line">Customer-facing replies need Aaron's review</span>
          </div>

        </div>
      </section>

      <!-- SECTION 6: TIMELINE -->
      <section class="section">
        <h2 class="nu-section-title"><span class="first">Timeline.</span> <span class="rest">From PO to today</span></h2>
        <p class="section-sub">Where each open PO sits against today's date.</p>

        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-date">2026-01-12</div>
            <div class="timeline-title">Skylift PO issued</div>
            <div class="timeline-detail">5× SBA40i-LW + 1× SBA47i-MH. Total $1,091,402.50. Lead time quoted ~3 weeks by Nick Gordon.</div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">2026-02-02</div>
            <div class="timeline-title">Original Skylift ship window</div>
            <div class="timeline-detail">3-week mark from PO. Ship date passed without confirmation.</div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">2026-03-20</div>
            <div class="timeline-title">FlexPro Armor March shipment dispatched</div>
            <div class="timeline-detail">Bucket covers shipped — invoicing follow-through pending. Demand on the next production run is already stacked.</div>
          </div>

          <div class="timeline-item">
            <div class="timeline-date">2026-04-13</div>
            <div class="timeline-title">Last invoice / status audit</div>
            <div class="timeline-detail">Open invoices flagged. Skylift, BOSS, and Samson POs all logged as still-open against active customer demand.</div>
          </div>

          <div class="timeline-item now">
            <div class="timeline-date">2026-04-24 — Today</div>
            <div class="timeline-title">Aaron flags it on reMarkable</div>
            <div class="timeline-detail">"Follow up on order from last PO — anxiously waiting on inventory." This action page resolves it.</div>
          </div>

        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris — Founder &amp; CEO</strong>
      Norris Utilities®, LLC · Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> ·
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Internal action page · generated 2026-04-24 · reMarkable action item · Norris Utilities®, A Legacy of Commitment®, and Phoenix Icon® are registered trademarks of Norris Utilities, LLC.
    </div>
  </footer>

</body>
</html>