<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rental Listing Disclosure Discrepancy — Action Plan — Norris Utilities®</title>
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
      --nu-warn-red: #B91C1C;
      --nu-warn-bg: #FEF2F2;
      --nu-caution-amber: #B45309;
      --nu-caution-bg: #FFFBEB;
      --nu-ok-green: #047857;
      --nu-ok-bg: #ECFDF5;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
    .nu-header > * { position: relative; z-index: 2; }

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
      margin: 0 auto 18px;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ WHITE CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 55px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 55px;
      display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ DOC META BAR ══ */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 24px;
      margin-bottom: 40px;
      border-radius: 4px;
      font-size: 0.9rem;
    }
    .nu-doc-meta strong {
      color: var(--nu-navy);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .nu-doc-meta .meta-item { display: flex; flex-direction: column; gap: 2px; }
    .nu-doc-meta .meta-value { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ PAGE TITLE ══ */
    .page-title-wrap { margin-bottom: 48px; }
    .page-kicker {
      display: inline-block;
      background: var(--nu-warn-bg);
      color: var(--nu-warn-red);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 16px;
      border: 1px solid rgba(185, 28, 28, 0.25);
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      max-width: 820px;
      line-height: 1.55;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      letter-spacing: -0.005em;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section { margin-bottom: 52px; }

    /* ══ ALERT CALLOUT ══ */
    .nu-alert {
      display: flex;
      gap: 18px;
      background: var(--nu-warn-bg);
      border-left: 5px solid var(--nu-warn-red);
      padding: 22px 26px;
      border-radius: 4px;
      margin-bottom: 28px;
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--nu-warn-red);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .nu-alert h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-warn-red);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .nu-alert p { color: #7a1919; font-size: 0.95rem; line-height: 1.55; }

    /* ══ DISCREPANCY COMPARE TABLE ══ */
    .compare-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .compare-col { padding: 0; }
    .compare-col.listing { background: #FFFBEB; border-right: 1px solid var(--nu-medium-gray); }
    .compare-col.disclosure { background: #F0F9FF; }
    .compare-head {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 14px 22px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .compare-col.listing .compare-head { background: #FEF3C7; color: var(--nu-caution-amber); }
    .compare-col.disclosure .compare-head { background: #DBEAFE; color: var(--nu-blue); }
    .compare-row {
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      line-height: 1.55;
    }
    .compare-row:last-child { border-bottom: none; }
    .compare-row .field {
      display: block;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 4px;
    }
    .compare-row .value { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ ACTION STEPS ══ */
    .step-grid {
      display: grid;
      gap: 18px;
    }
    .step {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 20px;
      padding: 22px 24px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step-num {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.35rem;
      flex-shrink: 0;
    }
    .step-body h4 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body .step-meta {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: #EEF2FF;
      padding: 3px 10px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .step-body p { color: var(--nu-body-text); font-size: 0.95rem; }
    .step-body ul { margin-top: 8px; padding-left: 20px; }
    .step-body li { margin-bottom: 4px; font-size: 0.93rem; }

    /* ══ EVIDENCE CHECKLIST ══ */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 26px 30px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist-item:last-child { border-bottom: none; }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-item .label { color: var(--nu-dark-text); font-weight: 700; display: block; }
    .checklist-item .hint { color: #666; font-size: 0.85rem; font-weight: 400; }

    /* ══ LEGAL GRID ══ */
    .legal-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .legal-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .legal-card h4 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .legal-card h4::before {
      content: '';
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: inline-block;
    }
    .legal-card p { font-size: 0.92rem; color: var(--nu-body-text); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 36px;
      margin-top: 8px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .tl-item { position: relative; padding-bottom: 22px; }
    .tl-item:last-child { padding-bottom: 0; }
    .tl-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .tl-date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .tl-event { color: var(--nu-dark-text); font-size: 0.95rem; font-weight: 700; }
    .tl-detail { color: #555; font-size: 0.88rem; font-weight: 400; margin-top: 2px; }

    /* ══ DECISION BOX ══ */
    .decision-box {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      margin-top: 12px;
    }
    .decision-box h3 {
      font-size: 1.3rem;
      font-weight: 900;
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    .decision-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 18px;
    }
    .decision-opt {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 6px;
      padding: 16px 18px;
      backdrop-filter: blur(4px);
    }
    .decision-opt .opt-label {
      display: block;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .decision-opt .opt-text {
      color: var(--nu-white);
      font-size: 0.92rem;
      line-height: 1.5;
    }

    /* ══ BUTTON ROW ══ */
    .button-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
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
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 48px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px 56px; }
      .page-title { font-size: 1.75rem; }
      .compare-wrap { grid-template-columns: 1fr; }
      .compare-col.listing { border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .step { grid-template-columns: 44px 1fr; gap: 14px; padding: 18px; }
      .step-num { width: 40px; height: 40px; font-size: 1.15rem; }
    }

    @media print {
      .nu-header, .nu-footer, .decision-box {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .step:hover, .legal-card { box-shadow: none; }
      .button-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 55" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,55 L1440,0 L1440,55 L0,55 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-doc-meta">
        <div class="meta-item">
          <strong>Document</strong>
          <span class="meta-value">Action Plan — Real Estate Due Diligence</span>
        </div>
        <div class="meta-item">
          <strong>Source</strong>
          <span class="meta-value">reMarkable Action Item</span>
        </div>
        <div class="meta-item">
          <strong>Prepared</strong>
          <span class="meta-value">April 21, 2026</span>
        </div>
        <div class="meta-item">
          <strong>For</strong>
          <span class="meta-value">Aaron C. Norris</span>
        </div>
      </div>

      <!-- TITLE -->
      <div class="page-title-wrap">
        <span class="page-kicker">Priority — Pre-Closing Review</span>
        <h1 class="page-title">Rental Listing <span>Disclosure Discrepancy</span> — Address Before Closing</h1>
        <p class="page-subtitle">A material difference between the subject property's active rental listing advertisement and the seller's property condition disclosure has been identified. This plan lays out the exact steps to resolve the discrepancy, preserve legal protection, and keep the transaction on track.</p>
      </div>

      <!-- ALERT -->
      <section class="nu-section">
        <div class="nu-alert">
          <div class="nu-alert-icon">!</div>
          <div>
            <h3>Material Discrepancy Flagged</h3>
            <p>The rental listing advertises features or conditions that are not consistent with what the seller has represented in the written property disclosure. In Alabama, misrepresentation (even unintentional) in a real estate transaction can form the basis for rescission or post-closing claims. Do not sign closing documents until every inconsistency is reconciled in writing.</p>
          </div>
        </div>
      </section>

      <!-- DISCREPANCY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Side-by-Side</span> <span class="rest">Comparison</span></h2>
        <p style="margin-bottom:20px; color:#555;">Document each conflicting claim. Screenshot the live listing today — URLs disappear, and a rental ad can be edited within minutes once the seller knows it is being examined.</p>

        <div class="compare-wrap">
          <div class="compare-col listing">
            <div class="compare-head">Rental Listing Advertisement</div>
            <div class="compare-row">
              <span class="field">Marketed Condition</span>
              <span class="value">"Fully renovated, move-in ready, no known issues"</span>
            </div>
            <div class="compare-row">
              <span class="field">Systems Advertised</span>
              <span class="value">New HVAC, updated electrical, finished basement</span>
            </div>
            <div class="compare-row">
              <span class="field">Occupancy / History</span>
              <span class="value">Tenant occupied, current lease in place</span>
            </div>
            <div class="compare-row">
              <span class="field">Square Footage Advertised</span>
              <span class="value">As listed in the rental ad</span>
            </div>
          </div>
          <div class="compare-col disclosure">
            <div class="compare-head">Seller's Property Disclosure</div>
            <div class="compare-row">
              <span class="field">Disclosed Condition</span>
              <span class="value">Silent or "unknown" on several items the ad represents as new</span>
            </div>
            <div class="compare-row">
              <span class="field">Systems Disclosed</span>
              <span class="value">Ages / repairs not matching the "updated" language in the ad</span>
            </div>
            <div class="compare-row">
              <span class="field">Occupancy / History</span>
              <span class="value">No mention of active tenancy or prior rental use</span>
            </div>
            <div class="compare-row">
              <span class="field">Square Footage Disclosed</span>
              <span class="value">Different figure than the public advertisement</span>
            </div>
          </div>
        </div>

        <p style="margin-top:14px; font-size:0.88rem; color:#666; font-style:italic;">Replace each row with the exact quoted language from both documents before sending to counsel. Quoted language carries more weight than paraphrase.</p>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Action</span> <span class="rest">Steps</span></h2>

        <div class="step-grid">

          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <span class="step-meta">Today — Before 5:00 PM</span>
              <h4>Preserve the Evidence</h4>
              <p>Capture the listing in its current public form. Once the seller or their agent is notified, the ad can and often will be edited.</p>
              <ul>
                <li>Full-page PDF screenshots of the rental listing (Zillow, Realtor.com, Facebook Marketplace, Craigslist — every platform it appears on).</li>
                <li>Archive each URL via archive.org Wayback Machine to create an independent timestamp.</li>
                <li>Save the seller's signed disclosure PDF side-by-side in the same folder.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <span class="step-meta">Within 24 Hours</span>
              <h4>Loop in Your Real Estate Attorney</h4>
              <p>Forward the evidence bundle and a one-paragraph summary of the discrepancy to your closing attorney. Ask specifically whether the inconsistency rises to the level of a material misrepresentation under Alabama law, and whether it triggers a right to rescind or re-negotiate.</p>
              <ul>
                <li>Request a written opinion, not just a phone call.</li>
                <li>Copy your buyer's agent on the email so the conversation is documented.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <span class="step-meta">Within 48 Hours</span>
              <h4>Issue a Formal Written Request for Clarification</h4>
              <p>Through your agent, send the listing agent a written request asking the seller to confirm or correct each conflicting item. Use the exact quoted language from both documents. Set a firm response deadline — 72 hours is standard.</p>
              <ul>
                <li>Phrase every question as a yes/no or fill-in-the-blank — no open-ended prose.</li>
                <li>State clearly: "Closing will not proceed until each item below is reconciled in writing."</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <span class="step-meta">Before Closing</span>
              <h4>Require an Amended Disclosure — or a Price Adjustment</h4>
              <p>If the seller confirms the advertised condition, they must sign an amended property disclosure reflecting that condition. If they admit the ad overstated the property, push for one of three outcomes:</p>
              <ul>
                <li><strong>Price concession</strong> equal to the cost to bring the property to the advertised condition (get two licensed contractor estimates).</li>
                <li><strong>Seller-funded repair credit</strong> held in escrow and released on inspection sign-off.</li>
                <li><strong>Walk-away clause</strong> — exercise the inspection / due diligence contingency and recover earnest money.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <span class="step-meta">At Closing</span>
              <h4>Confirm Protective Language in the Closing Documents</h4>
              <p>Even after a satisfactory resolution, make sure the final closing package preserves your rights:</p>
              <ul>
                <li>Amended disclosure is attached to the closing binder and referenced in the deed of sale addendum.</li>
                <li>Any seller representations made via email are incorporated by reference into the final purchase agreement.</li>
                <li>Any independent inspection report obtained during due diligence is retained with closing documents for the full statute-of-limitations window.</li>
              </ul>
            </div>
          </div>

          <div class="step">
            <div class="step-num">6</div>
            <div class="step-body">
              <span class="step-meta">Post-Closing — First 30 Days</span>
              <h4>Verify In-Hand Condition Against Final Representations</h4>
              <p>Within 30 days of possession, walk the property with a licensed inspector and confirm the condition matches the final signed representations. If a previously-disclosed item is found to be materially false after closing, the window to act is short — document immediately.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- EVIDENCE CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Evidence</span> <span class="rest">Bundle — Required Documents</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Full-page PDF of the current rental listing (every platform)</span>
              <span class="hint">Capture URL, timestamp, platform logo, and all photos in a single document.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Wayback Machine archive URL for each listing</span>
              <span class="hint">Independent third-party timestamp — immune to seller edits.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Signed Seller's Property Condition Disclosure</span>
              <span class="hint">Keep the original PDF exactly as received — do not annotate the master copy.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Executed Purchase Agreement + any addenda</span>
              <span class="hint">Needed to confirm which contingencies and remedies are still available.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">MLS listing history (price changes, status changes, agent remarks)</span>
              <span class="hint">Request from your buyer's agent — full history, not just current view.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Independent inspection report (if completed)</span>
              <span class="hint">Flag every inspection finding that contradicts the rental ad.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Two licensed contractor estimates for any claimed-but-absent improvements</span>
              <span class="hint">Hard numbers are the foundation of any price-concession negotiation.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="check-box"></div>
            <div>
              <span class="label">Full email thread with listing agent and seller</span>
              <span class="hint">Preserve the chain exactly — do not edit subject lines or forward piecemeal.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- LEGAL CONSIDERATIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Legal</span> <span class="rest">Considerations</span></h2>
        <div class="legal-grid">
          <div class="legal-card">
            <h4>Caveat Emptor Standard</h4>
            <p>Alabama is a "buyer beware" state for most residential resales. The seller's duty is narrow — but it expands sharply when the seller makes an affirmative representation that turns out to be false. Advertising "fully renovated" in a rental ad is an affirmative representation.</p>
          </div>
          <div class="legal-card">
            <h4>Fraudulent Misrepresentation</h4>
            <p>A claim requires (1) a false representation, (2) of a material fact, (3) relied upon by the buyer, (4) to their damage. The rental ad vs. disclosure gap can satisfy elements 1–3 on its face. Preserving the evidence today is what protects element 4.</p>
          </div>
          <div class="legal-card">
            <h4>Latent Defect Exception</h4>
            <p>Even under caveat emptor, sellers must disclose known latent defects that affect health or safety. If the disclosure is silent on an item the ad brags about, the seller cannot claim ignorance on that same item after closing.</p>
          </div>
          <div class="legal-card">
            <h4>Active Lease Complication</h4>
            <p>If the rental ad shows the property as tenant-occupied under an active lease, but the seller is selling as "vacant on transfer," you may be inheriting an existing tenancy or a wrongful-eviction risk. Verify the lease status in writing before closing.</p>
          </div>
          <div class="legal-card">
            <h4>Contract Contingency Window</h4>
            <p>Your inspection / due diligence contingency almost certainly has a hard expiration date. Discovering the discrepancy does not automatically extend it. Make the formal written request for clarification inside that window — even if the response comes after.</p>
          </div>
          <div class="legal-card">
            <h4>Title Insurance Will Not Cover This</h4>
            <p>Title insurance covers defects in title — not misrepresentations about condition. Do not assume your closing coverage includes this issue. This is exactly the kind of risk that must be handled before closing, not after.</p>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Target</span> <span class="rest">Timeline</span></h2>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-date">Day 0 — Today, April 21, 2026</div>
            <div class="tl-event">Preserve evidence; open file with attorney</div>
            <div class="tl-detail">Screenshots, Wayback archives, disclosure PDF filed in one folder.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Day 1 — April 22</div>
            <div class="tl-event">Attorney reviews bundle; written opinion requested</div>
            <div class="tl-detail">Confirm whether to proceed via re-negotiation or contingency exit.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Day 2 — April 23</div>
            <div class="tl-event">Written clarification request sent to listing agent</div>
            <div class="tl-detail">72-hour response deadline stated explicitly.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Day 5 — April 26</div>
            <div class="tl-event">Seller response received; position locked in</div>
            <div class="tl-detail">Amended disclosure, price concession, or contingency exit triggered.</div>
          </div>
          <div class="tl-item">
            <div class="tl-date">Day 7 — April 28</div>
            <div class="tl-event">Final decision: proceed, re-negotiate, or walk</div>
            <div class="tl-detail">Document the reasoning in writing regardless of direction.</div>
          </div>
        </div>
      </section>

      <!-- DECISION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Three</span> <span class="rest">Paths Forward</span></h2>
        <div class="decision-box">
          <h3>Choose deliberately — do not drift into closing</h3>
          <p style="opacity:0.9;">Each path is legitimate. The wrong move is to close without a written resolution and hope it holds up later.</p>
          <div class="decision-options">
            <div class="decision-opt">
              <span class="opt-label">Path A — Clarify &amp; Close</span>
              <span class="opt-text">Seller confirms the ad's claims, signs an amended disclosure matching the ad, and closing proceeds on current terms. Cleanest outcome if the seller responds candidly.</span>
            </div>
            <div class="decision-opt">
              <span class="opt-label">Path B — Re-negotiate</span>
              <span class="opt-text">Seller admits the ad overstated; buyer receives a price concession or repair credit backed by two contractor estimates. Closing proceeds on amended terms.</span>
            </div>
            <div class="decision-opt">
              <span class="opt-label">Path C — Exercise Contingency</span>
              <span class="opt-text">Seller refuses to clarify or refuses fair concession; buyer exercises the due-diligence contingency, recovers earnest money, and walks. Document reason in writing.</span>
            </div>
          </div>
        </div>

        <div class="button-row">
          <a href="mailto:acnorris@norrisutilities.com?subject=Rental%20Listing%20Disclosure%20Discrepancy%20%E2%80%94%20Evidence%20Bundle" class="nu-btn-primary">Email Evidence Bundle</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call 205-500-1343</a>
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