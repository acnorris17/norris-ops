<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan: Remove Pricing from Boss Online Store — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-warning: #D32F2F;
      --nu-success: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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

    /* ══ CONTENT AREA ══ */
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
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
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

    /* ══ DOCUMENT META BAR ══ */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.88rem;
    }
    .nu-meta-item {
      display: flex;
      flex-direction: column;
    }
    .nu-meta-label {
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      font-size: 0.72rem;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .nu-meta-value {
      font-weight: 400;
      color: var(--nu-dark-text);
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }
    .nu-section {
      margin-bottom: 56px;
    }

    /* ══ HERO TITLE ══ */
    .nu-hero {
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 3px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-hero h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .nu-hero h1 .accent {
      color: var(--nu-blue);
    }
    .nu-hero-lead {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      line-height: 1.65;
    }

    /* ══ ALERT BANNER ══ */
    .nu-alert {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      background: var(--nu-warning);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .nu-alert-body h3 {
      color: var(--nu-warning);
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-alert-body p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      line-height: 1.55;
    }

    /* ══ REASONS GRID ══ */
    .nu-reasons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .nu-reason-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 24px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-reason-num {
      display: inline-block;
      font-weight: 900;
      font-size: 0.82rem;
      color: var(--nu-cyan);
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    .nu-reason-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .nu-reason-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ ACTION CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      counter-reset: step;
    }
    .nu-checklist li {
      counter-increment: step;
      display: flex;
      gap: 18px;
      padding: 20px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: counter(step);
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-checklist-body { flex: 1; }
    .nu-checklist-body h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-checklist-body p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-checklist-body .meta {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ══ EMAIL DRAFT BLOCK ══ */
    .nu-email {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 32px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-email-header {
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 16px;
      margin-bottom: 20px;
      font-size: 0.92rem;
    }
    .nu-email-header div { margin-bottom: 4px; }
    .nu-email-header strong {
      color: var(--nu-blue);
      font-weight: 700;
      display: inline-block;
      width: 70px;
    }
    .nu-email-body {
      font-size: 0.96rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .nu-email-body p {
      margin-bottom: 16px;
      padding-left: 20px;
    }
    .nu-email-body .greeting,
    .nu-email-body .closing,
    .nu-email-body .sig {
      padding-left: 0;
    }
    .nu-email-body .sig {
      padding-left: 20px;
      margin-top: 4px;
    }
    .nu-email-body ul {
      list-style: none;
      padding-left: 40px;
      margin-bottom: 16px;
    }
    .nu-email-body ul li {
      position: relative;
      margin-bottom: 6px;
    }
    .nu-email-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      position: absolute;
      left: -16px;
      font-weight: 700;
    }

    /* ══ TWO-COLUMN ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .nu-col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px;
    }
    .nu-col-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-col-card.warning {
      border-left: 4px solid var(--nu-warning);
    }
    .nu-col-card.success {
      border-left: 4px solid var(--nu-success);
    }
    .nu-col-card.warning h4 { color: var(--nu-warning); }
    .nu-col-card.success h4 { color: var(--nu-success); }
    .nu-col-card ul {
      list-style: none;
    }
    .nu-col-card ul li {
      position: relative;
      padding-left: 22px;
      margin-bottom: 10px;
      font-size: 0.93rem;
      line-height: 1.5;
    }
    .nu-col-card ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 8px;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
    }

    /* ══ CONTACTS CARD ══ */
    .nu-contacts {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-radius: 8px;
      padding: 28px;
      border: 1px solid #d9e6ff;
    }
    .nu-contacts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .nu-contact {
      background: var(--nu-white);
      padding: 18px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-blue);
    }
    .nu-contact .name {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .nu-contact .role {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 8px;
    }
    .nu-contact .note {
      font-size: 0.86rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .nu-cc-rule {
      margin-top: 18px;
      padding: 12px 16px;
      background: rgba(0,0,255,0.06);
      border-radius: 4px;
      font-size: 0.88rem;
      color: var(--nu-dark-text);
    }
    .nu-cc-rule strong { color: var(--nu-blue); }

    /* ══ SUCCESS METRICS ══ */
    .nu-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
    .nu-metric {
      text-align: center;
      padding: 24px 16px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
    }
    .nu-metric-icon {
      width: 36px;
      height: 36px;
      margin: 0 auto 10px;
      color: var(--nu-blue);
    }
    .nu-metric-label {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 4px;
    }
    .nu-metric-text {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.45;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
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
    .nu-footer-divider {
      width: 80px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .nu-hero h1 { font-size: 1.7rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-meta-bar { gap: 14px; }
      .nu-email { padding: 22px; }
      .nu-email-body p, .nu-email-body .sig { padding-left: 0; }
      .nu-email-body ul { padding-left: 18px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-alert, .nu-reason-card, .nu-email, .nu-col-card { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <div class="nu-meta-label">Action Item</div>
          <div class="nu-meta-value">Boss Online Store — Pricing Removal</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Date Issued</div>
          <div class="nu-meta-value">April 21, 2026</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Action Item</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Priority</div>
          <div class="nu-meta-value">High — Channel Integrity</div>
        </div>
      </div>

      <!-- HERO -->
      <div class="nu-hero">
        <div class="nu-eyebrow">Channel Strategy Action Plan</div>
        <h1>Remove Pricing from the <span class="accent">Boss Online Store</span></h1>
        <p class="nu-hero-lead">
          Public pricing on the Boss Products online store undercuts the dealer/distributor channel that Norris Utilities® was appointed to protect.
          This action plan removes published pricing, replaces it with a "Request a Quote" flow, and routes inquiries through the proper rep
          structure. Coordinated with Troy Gongwer and Thayne Grove at Boss Products.
        </p>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-body">
          <h3>Why this matters now</h3>
          <p>
            Customers searching for Boss products are landing on the public store, seeing list pricing, and bypassing the dealer relationship.
            Dealers like Norris Utilities® cannot quote competitively when end-users already see retail numbers online. Every day pricing stays
            visible costs the channel margin and weakens the rep relationship.
          </p>
        </div>
      </div>

      <!-- WHY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Why <span>Remove Pricing</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-reasons">
          <div class="nu-reason-card">
            <div class="nu-reason-num">REASON 01</div>
            <h4>Protects the Dealer Channel</h4>
            <p>Public list pricing collapses dealer margin. Dealers can't negotiate when the customer already has the number on screen.</p>
          </div>
          <div class="nu-reason-card">
            <div class="nu-reason-num">REASON 02</div>
            <h4>Routes Leads to Reps</h4>
            <p>A quote-request flow funnels every inquiry to the appointed rep for that territory — Norris Utilities® for our footprint.</p>
          </div>
          <div class="nu-reason-card">
            <div class="nu-reason-num">REASON 03</div>
            <h4>Industry Standard for Dealer-Sold Lines</h4>
            <p>Skylift, Bay Shore Systems, Samson Rope, and FlexPro Armor all quote through reps. Boss's online pricing is the outlier.</p>
          </div>
          <div class="nu-reason-card">
            <div class="nu-reason-num">REASON 04</div>
            <h4>Captures Lead Data</h4>
            <p>Quote requests yield contact info, application detail, and territory — far more valuable than an anonymous online checkout.</p>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ol class="nu-checklist">
          <li>
            <div class="nu-checklist-body">
              <h4>Send formal request to Boss Products</h4>
              <p>Email Troy Gongwer and Thayne Grove together with the request, the rationale, and the proposed replacement language. Use the email draft below verbatim.</p>
              <span class="meta">Owner: Aaron · Target: This week</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Confirm scope: SKUs and product families</h4>
              <p>List which Boss SKUs and pages should have pricing removed. If the entire catalog, state that. If specific lines (covers, accessories, parts), name them.</p>
              <span class="meta">Owner: Aaron + Boss</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Approve the replacement CTA copy</h4>
              <p>"Request a Quote" button in place of the price. Form fields: Name, Company, Email, Phone, ZIP code, Application notes. ZIP routes to territory rep.</p>
              <span class="meta">Owner: Boss web team</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Verify lead-routing logic</h4>
              <p>Confirm that ZIPs in the Norris Utilities® territory route to acnorris@norrisutilities.com. Test with a dummy submission before launch.</p>
              <span class="meta">Owner: Aaron to test</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Audit live site after deployment</h4>
              <p>Walk every public Boss product page. Confirm zero visible prices. Screenshot any pages still showing pricing and forward to Boss for fix.</p>
              <span class="meta">Owner: Aaron · Within 24 hours of deploy</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Update internal Norris quoting workflow</h4>
              <p>Note in the master tracker that Boss inbound leads will now route through the Norris quote desk. Caroline Butler to log inbound Boss inquiries on receipt.</p>
              <span class="meta">Owner: Aaron + CB</span>
            </div>
          </li>
          <li>
            <div class="nu-checklist-body">
              <h4>Notify the Norris dealer/distributor network</h4>
              <p>Brief follow-up to dealers carrying Boss product confirming the change so they can quote without fear of being undercut online.</p>
              <span class="meta">Owner: Aaron · After Boss confirms deploy</span>
            </div>
          </li>
        </ol>
      </section>

      <!-- BEFORE / AFTER -->
      <section class="nu-section">
        <h2 class="nu-section-title">Before <span>and After</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-two-col">
          <div class="nu-col-card warning">
            <h4>Before — Current State</h4>
            <ul>
              <li>List pricing publicly visible on every Boss product page</li>
              <li>Customers shop the dealer instead of the rep</li>
              <li>No lead capture — anonymous browsing</li>
              <li>Dealer margin compressed before the conversation begins</li>
              <li>Inconsistent with how every other dealer-sold line operates</li>
            </ul>
          </div>
          <div class="nu-col-card success">
            <h4>After — Target State</h4>
            <ul>
              <li>"Request a Quote" CTA in place of pricing</li>
              <li>Inquiries routed by ZIP to the appointed territory rep</li>
              <li>Full lead detail captured: contact, company, application</li>
              <li>Dealer margin protected — quote starts the relationship</li>
              <li>Aligned with Skylift, Bay Shore, Samson, FlexPro Armor practice</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Email <span>Draft to Boss Products</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-email">
          <div class="nu-email-header">
            <div><strong>To:</strong> Troy Gongwer</div>
            <div><strong>CC:</strong> Thayne Grove</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Request — Remove pricing from Boss Online Store</div>
          </div>
          <div class="nu-email-body">
            <div class="greeting">Troy —</div>
            <p>I want to bring up something that's been costing the dealer channel and ask for your help fixing it.</p>
            <p>The Boss online store is currently publishing list pricing on the product pages. When customers in our territory shop online before calling, they show up to the conversation with the retail number already in hand. That collapses the room a dealer has to quote, and it routes the lead around the rep structure that you and Thayne built.</p>
            <p>I'd like to request that the public store be updated as follows:</p>
            <ul>
              <li>Remove visible pricing from all Boss product pages</li>
              <li>Replace the price field with a "Request a Quote" call to action</li>
              <li>Capture name, company, email, phone, ZIP, and application notes</li>
              <li>Route quote requests by ZIP to the appointed territory rep</li>
            </ul>
            <p>Every other dealer-sold line we represent — Skylift, Bay Shore Systems, Samson Rope, and FlexPro Armor — runs this way. It protects the channel, it captures real leads, and it keeps the rep relationship intact.</p>
            <p>Happy to jump on a call with you and Thayne to walk through the proposed flow and confirm scope. If it's easier, I can put together a one-page mockup of the replacement CTA and send it over for the web team.</p>
            <p>Thank y'all for considering this. I think it's the right move for the channel and I'd like to help get it across the finish line.</p>
            <div class="closing">Sincerely,</div>
            <div class="sig">Aaron C. Norris</div>
            <div class="sig" style="font-size: 0.88rem; color: var(--nu-body-text); margin-top: 6px;">
              Founder &amp; CEO<br>
              Norris Utilities®, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Boss Products <span>Contacts</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-contacts">
          <div class="nu-contacts-grid">
            <div class="nu-contact">
              <div class="name">Troy Gongwer</div>
              <div class="role">Boss Products — Primary</div>
              <div class="note">Lead recipient on the request. First call for channel-strategy questions.</div>
            </div>
            <div class="nu-contact">
              <div class="name">Thayne Grove</div>
              <div class="role">Boss Products — Co-Lead</div>
              <div class="note">CC on every Boss communication. Co-decision-maker on web and pricing.</div>
            </div>
          </div>
          <div class="nu-cc-rule">
            <strong>Standing rule:</strong> All Boss Products correspondence CCs both Troy Gongwer and Thayne Grove. No exceptions.
          </div>
        </div>
      </section>

      <!-- SUCCESS METRICS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Success <span>Looks Like</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-metrics">
          <div class="nu-metric">
            <div class="nu-metric-label">Pages Audited</div>
            <div class="nu-metric-text">Zero public Boss pages display pricing</div>
          </div>
          <div class="nu-metric">
            <div class="nu-metric-label">Lead Routing</div>
            <div class="nu-metric-text">Norris-territory ZIPs route to Aaron, verified by test submission</div>
          </div>
          <div class="nu-metric">
            <div class="nu-metric-label">Dealer Confidence</div>
            <div class="nu-metric-text">Dealer network notified and quoting without online undercut</div>
          </div>
          <div class="nu-metric">
            <div class="nu-metric-label">Inbound Leads</div>
            <div class="nu-metric-text">Quote-request volume tracked monthly via the master tracker</div>
          </div>
        </div>
      </section>

      <!-- NEXT TOUCH -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title">Next <span>Touch Point</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-col-card" style="border-left: 4px solid var(--nu-blue);">
          <h4 style="color: var(--nu-blue);">Follow-Up Schedule</h4>
          <ul>
            <li>Day 0 (today): Send email to Troy and Thayne</li>
            <li>Day 3: If no reply, follow up by phone — 205-500-1343 outbound</li>
            <li>Day 7: Confirm scope and timeline in writing</li>
            <li>Day 14: Test the live "Request a Quote" flow end-to-end</li>
            <li>Day 21: Audit complete, dealer network notified, action item closed</li>
          </ul>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color: var(--nu-white);">Aaron C. Norris</strong> | Founder &amp; CEO<br>
      Norris Utilities®, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>