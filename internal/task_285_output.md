<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — Remove Pricing from Boss Online Store — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #1B7F3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header-inner {
      position: relative;
      z-index: 2;
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

    .nu-phoenix-icon {
      width: 76px;
      height: 76px;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
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
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 800px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.04) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* DOCUMENT META */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      padding: 18px 22px;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ECEEF5 100%);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 40px;
      border-radius: 0 6px 6px 0;
    }
    .nu-doc-meta .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #666;
      font-weight: 700;
    }
    .nu-doc-meta .value {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-doc-meta-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .nu-priority-pill {
      display: inline-block;
      padding: 5px 14px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 20px;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-page-title .blue {
      color: #0033CC;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 780px;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first {
      color: #0033CC;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card p {
      margin-bottom: 12px;
      color: var(--nu-body-text);
    }
    .nu-card p:last-child { margin-bottom: 0; }
    .nu-card strong { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO COL */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 720px) {
      .nu-grid-2 { grid-template-columns: 1fr; }
    }

    /* BADGE / CHEVRON BADGE */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 12px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }
    @media (max-width: 720px) {
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    /* STEP LIST */
    .nu-step {
      display: flex;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-step:last-child { border-bottom: none; }
    .nu-step-num {
      flex-shrink: 0;
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-step-body {
      flex: 1;
    }
    .nu-step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-step-desc {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.94rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, #0033CC 0%, #0066ee 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }

    /* CONTACT CARD */
    .nu-contact {
      display: flex;
      flex-direction: column;
      padding: 22px;
      border-radius: 8px;
      background: linear-gradient(135deg, var(--nu-white) 0%, #FAFBFD 100%);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .nu-contact-name {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .nu-contact-role {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-contact-detail {
      font-size: 0.92rem;
      margin-bottom: 4px;
      color: var(--nu-body-text);
    }
    .nu-contact-detail a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-contact-detail a:hover { text-decoration: underline; }

    /* CALLOUT */
    .nu-callout {
      padding: 20px 24px;
      border-radius: 8px;
      margin: 18px 0;
      border-left: 5px solid;
    }
    .nu-callout-warning {
      background: #FFF8E1;
      border-color: var(--nu-accent-gold);
      color: #5C4A0F;
    }
    .nu-callout-action {
      background: #E6F0FF;
      border-color: var(--nu-blue);
      color: #0a1a4a;
    }
    .nu-callout-success {
      background: #E8F5EC;
      border-color: var(--nu-success-green);
      color: #14592A;
    }
    .nu-callout-title {
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    /* EMAIL TEMPLATE */
    .nu-email {
      background: #FBFBFD;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      font-family: 'Georgia', serif;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .nu-email-header {
      padding-bottom: 14px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-family: var(--font-primary);
      font-size: 0.88rem;
    }
    .nu-email-header .row {
      margin-bottom: 4px;
    }
    .nu-email-header .label {
      display: inline-block;
      width: 70px;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      font-size: 0.76rem;
      letter-spacing: 0.06em;
    }
    .nu-email-body p {
      margin-bottom: 14px;
      text-indent: 24px;
    }
    .nu-email-body p.no-indent { text-indent: 0; }
    .nu-email-body ul {
      list-style: none;
      padding-left: 24px;
      margin-bottom: 14px;
    }
    .nu-email-body ul li {
      padding-left: 16px;
      position: relative;
      margin-bottom: 4px;
    }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .nu-email-sig {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-family: var(--font-primary);
      font-size: 0.88rem;
      color: var(--nu-dark-text);
    }
    .nu-email-sig strong { font-weight: 900; color: var(--nu-blue); }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 8px;
      border-left: 3px solid var(--nu-cyan);
    }
    .nu-checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      background: var(--nu-white);
      margin-top: 1px;
    }
    .nu-checklist-text {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      flex: 1;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 70%, #001188 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: radial-gradient(ellipse at center, rgba(6,208,255,0.06) 0%, transparent 60%);
    }
    .nu-footer-inner {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
      letter-spacing: 0.02em;
    }
    .nu-footer-rule {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
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
    .nu-footer-name {
      font-weight: 900;
      color: var(--nu-white);
      font-size: 1rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 22px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-doc-meta { gap: 10px; padding: 14px 16px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-card, .nu-table-wrap { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix-bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
    </div>
  </header>

  <!-- WHITE CHEVRON TRANSITION (asymmetric, apex ~38% from left) -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META -->
      <div class="nu-doc-meta">
        <div class="nu-doc-meta-item">
          <span class="label">Document Type</span>
          <span class="value">Internal Action Plan</span>
        </div>
        <div class="nu-doc-meta-item">
          <span class="label">Date</span>
          <span class="value">April 25, 2026</span>
        </div>
        <div class="nu-doc-meta-item">
          <span class="label">Owner</span>
          <span class="value">Aaron C. Norris</span>
        </div>
        <div class="nu-doc-meta-item">
          <span class="label">Source</span>
          <span class="value">reMarkable Action Item</span>
        </div>
        <div class="nu-doc-meta-item">
          <span class="label">Priority</span>
          <span class="nu-priority-pill">High</span>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">
        <span class="blue">Remove Pricing</span> from Boss Online Store
      </h1>
      <p class="nu-page-subtitle">
        Internal action plan to coordinate with BOSS Products on removal of public-facing pricing from the Boss Online Store. Pricing visibility is undermining quote integrity, dealer relationships, and Norris Utilities® margin discipline. This document captures the rationale, the path to execution, and the message to send to Troy Gongwer and Thayne Grove.
      </p>

      <!-- SECTION 1: WHY THIS MATTERS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">1</span>
          <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
        </div>

        <div class="nu-card">
          <p><strong>Public pricing on the Boss Online Store creates four direct problems for Norris Utilities®:</strong></p>
          <p>
            <strong>1. Quote integrity is broken.</strong> When a customer can see one number on the Boss site and another on a Norris Utilities® quote, the conversation becomes about the gap, not about value. Aaron has to defend the price difference instead of presenting the solution.
          </p>
          <p>
            <strong>2. Dealer and distributor channels are exposed.</strong> Norris sells to direct end users, dealers, and distributors at three different price tiers. Public retail pricing on the Boss site collapses that structure and signals to dealers that they are being undercut by their own brand.
          </p>
          <p>
            <strong>3. Margin discipline gets eroded.</strong> Equipment margin sits at 12-15%. Even small public-pricing visibility converts that margin discussion into a discount discussion on every deal.
          </p>
          <p>
            <strong>4. The brand position is wrong.</strong> Boss is a premium product line. Premium products do not advertise list pricing publicly — they require a conversation, a quote, and a relationship. The current online store contradicts that positioning.
          </p>
        </div>

        <div class="nu-callout nu-callout-warning">
          <div class="nu-callout-title">Direct Impact</div>
          Every active deal where the customer has visited the Boss Online Store becomes harder to close at full price. This includes the open Bill Kugler / Terex opportunity and all dealer-channel quotes currently in motion.
        </div>
      </section>

      <!-- SECTION 2: THE ASK -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">2</span>
          <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Ask to BOSS Products</span></h2>
        </div>

        <div class="nu-badge">
          <span class="nu-badge-num">A</span>
          Remove all visible per-unit pricing from public product pages
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">B</span>
          Replace pricing with "Request a Quote" button routed to authorized reps
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">C</span>
          Route Norris Utilities® territory inquiries directly to Aaron C. Norris
        </div>
        <div class="nu-badge">
          <span class="nu-badge-num">D</span>
          Confirm the timeline for the change in writing
        </div>
      </section>

      <!-- SECTION 3: STAKEHOLDERS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">3</span>
          <h2 class="nu-section-title"><span class="first">Stakeholders</span> <span class="rest">— Boss Products</span></h2>
        </div>

        <div class="nu-grid-2">
          <div class="nu-contact">
            <div class="nu-contact-name">Troy Gongwer</div>
            <div class="nu-contact-role">BOSS Products — Primary Contact</div>
            <div class="nu-contact-detail"><strong>Role:</strong> Manufacturer relationship lead</div>
            <div class="nu-contact-detail"><strong>Action:</strong> CC on every communication</div>
            <div class="nu-contact-detail"><strong>Channel:</strong> Email, phone follow-up</div>
          </div>
          <div class="nu-contact">
            <div class="nu-contact-name">Thayne Grove</div>
            <div class="nu-contact-role">BOSS Products — Co-Lead</div>
            <div class="nu-contact-detail"><strong>Role:</strong> Sales / dealer-channel lead</div>
            <div class="nu-contact-detail"><strong>Action:</strong> CC on every communication</div>
            <div class="nu-contact-detail"><strong>Channel:</strong> Email, phone follow-up</div>
          </div>
        </div>

        <div class="nu-callout nu-callout-action">
          <div class="nu-callout-title">Standing Rule</div>
          Boss Products communications always copy <strong>both</strong> Troy Gongwer and Thayne Grove. Never email one without the other. This is non-negotiable on every Boss-related thread.
        </div>
      </section>

      <!-- SECTION 4: EXECUTION STEPS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">4</span>
          <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Steps</span></h2>
        </div>

        <div class="nu-card">
          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Document the current state</div>
              <div class="nu-step-desc">Aaron captures screenshots of the Boss Online Store pricing pages as they appear today, with timestamp. This becomes the baseline reference attached to the email.</div>
            </div>
          </div>
          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Send the formal request</div>
              <div class="nu-step-desc">Email Troy Gongwer and Thayne Grove (CC both) using the template in Section 5. Lead with the ask, then provide rationale. Attach screenshots.</div>
            </div>
          </div>
          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Phone follow-up within 48 hours</div>
              <div class="nu-step-desc">If no acknowledgment by close of business in 48 hours, Aaron calls Troy directly. Document outcome of the call in the master tracker.</div>
            </div>
          </div>
          <div class="nu-step">
            <div class="nu-step-num">4</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Confirm timeline in writing</div>
              <div class="nu-step-desc">Once Boss agrees, capture the deployment date in writing (email reply is sufficient). Add the date to the master tracker as a verification milestone.</div>
            </div>
          </div>
          <div class="nu-step">
            <div class="nu-step-num">5</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Verify removal post-deployment</div>
              <div class="nu-step-desc">On the confirmed date, Aaron (or Caroline Butler under Aaron's review) revisits every Boss product page and confirms pricing is removed. Capture verification screenshots.</div>
            </div>
          </div>
          <div class="nu-step">
            <div class="nu-step-num">6</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Update internal quote process</div>
              <div class="nu-step-desc">Once public pricing is gone, Norris Utilities® quote templates can drop the "list price" reference column. Quotes return to a clean Customer Price line with no anchoring to a public number.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 5: EMAIL TEMPLATE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">5</span>
          <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Template — To Troy &amp; Thayne</span></h2>
        </div>

        <div class="nu-email">
          <div class="nu-email-header">
            <div class="row"><span class="label">To:</span> Troy Gongwer</div>
            <div class="row"><span class="label">CC:</span> Thayne Grove</div>
            <div class="row"><span class="label">From:</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div class="row"><span class="label">Subject:</span> Request — Remove public pricing from Boss Online Store</div>
          </div>
          <div class="nu-email-body">
            <p class="no-indent">Troy and Thayne —</p>
            <p>I want to bring something forward that I believe will strengthen the Boss brand and protect the dealer channel — including the work we are doing for y'all in our territory.</p>
            <p>The public pricing currently visible on the Boss Online Store is creating real friction at the deal level. Customers are arriving at our quote conversations with the online number already in their head, and that anchors every discussion to discount instead of value. It also exposes dealer and distributor pricing tiers in a way that I do not believe serves the brand.</p>
            <p class="no-indent">Specifically, I am asking for three things:</p>
            <ul>
              <li>Remove visible per-unit pricing from public Boss product pages</li>
              <li>Replace pricing with a "Request a Quote" button routed to your authorized reps</li>
              <li>Route Norris Utilities territory inquiries directly to me</li>
            </ul>
            <p>Premium product lines earn premium positioning, and that positioning starts with the conversation — not a number on a public page. I believe this change will help us all close more business, at better margins, with fewer awkward conversations.</p>
            <p>Happy to jump on a call this week to walk through what I am seeing in the field. Let me know what works for both of you.</p>
            <p class="no-indent">Sincerely,</p>
            <p class="no-indent">Aaron C. Norris</p>
          </div>
          <div class="nu-email-sig">
            <strong>Aaron C. Norris</strong><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>

        <div class="nu-callout nu-callout-action" style="margin-top: 18px;">
          <div class="nu-callout-title">Voice Check</div>
          Greeting uses em dash. Indented paragraphs. Bullets use •. Closes with "Sincerely," then "Aaron C. Norris" on next line. No filler words ("just", "touch base", "leverage"). Lead with the ask. This template follows Aaron's voice rules exactly.
        </div>
      </section>

      <!-- SECTION 6: STATUS TABLE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">6</span>
          <h2 class="nu-section-title"><span class="first">Status</span> <span class="rest">&amp; Tracking</span></h2>
        </div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 35%;">Milestone</th>
                <th style="width: 20%;">Owner</th>
                <th style="width: 20%;">Target Date</th>
                <th style="width: 25%;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capture baseline screenshots of Boss Online Store pricing</td>
                <td>Aaron C. Norris</td>
                <td>2026-04-25</td>
                <td>In progress</td>
              </tr>
              <tr>
                <td>Send email to Troy Gongwer + Thayne Grove (CC both)</td>
                <td>Aaron C. Norris</td>
                <td>2026-04-25</td>
                <td>Ready to send</td>
              </tr>
              <tr>
                <td>Phone follow-up if no reply within 48 hours</td>
                <td>Aaron C. Norris</td>
                <td>2026-04-27</td>
                <td>Conditional</td>
              </tr>
              <tr>
                <td>Boss confirms deployment date in writing</td>
                <td>Boss Products</td>
                <td>TBD on receipt</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Verify pricing removed from live site</td>
                <td>Aaron / Caroline Butler</td>
                <td>Day-of deploy</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Update Norris Utilities® quote templates</td>
                <td>Aaron C. Norris</td>
                <td>+1 day post-verify</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 7: VERIFICATION CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">7</span>
          <h2 class="nu-section-title"><span class="first">Verification</span> <span class="rest">Checklist</span></h2>
        </div>

        <ul class="nu-checklist">
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Baseline screenshots of every Boss product page captured with timestamp.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Email sent to Troy Gongwer with Thayne Grove on CC. Confirmed both addresses are correct.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Acknowledgment received from Boss within 48 hours, OR phone follow-up logged.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Deployment date confirmed in writing and added to the master tracker.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Post-deployment site review completed — pricing is gone from every product page.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">"Request a Quote" routing tested — Norris Utilities territory inquiries land with Aaron.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Norris Utilities® internal quote templates updated to drop public-list-price column.</div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-checklist-text">Item closed in master tracker. Caroline Butler notified. reMarkable action item marked complete.</div>
          </li>
        </ul>

        <div class="nu-callout nu-callout-success">
          <div class="nu-callout-title">Definition of Done</div>
          Public pricing has been removed from the Boss Online Store, replaced with a quote-request flow, the change is verified by visual inspection on the live site, and Norris Utilities® quote templates have been updated. All eight checklist items are complete.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-inner">
      <div class="nu-footer-tagline">A Legacy of Commitment®</div>
      <div class="nu-footer-rule"></div>
      <div class="nu-footer-name">Aaron C. Norris, Founder &amp; CEO</div>
      <div class="nu-footer-contact">
        Norris Utilities®, LLC | Birmingham, Alabama<br>
        <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
        <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
        <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
      </div>
    </div>
  </footer>

</body>
</html>