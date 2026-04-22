<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PO Follow-Up — Inventory Status Inquiry — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-red: #DC2626;
      --nu-green: #059669;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      background: linear-gradient(90deg, var(--nu-amber) 0%, #F97316 100%);
      color: var(--nu-white);
      padding: 16px 24px;
      border-radius: 8px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
    }
    .priority-banner-icon {
      font-size: 2rem;
      line-height: 1;
    }
    .priority-banner-text {
      flex: 1;
    }
    .priority-banner-title {
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .priority-banner-body {
      font-size: 0.95rem;
      font-weight: 400;
    }

    /* ══ SECTION TITLES ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.75rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      color: var(--nu-body-text);
      font-size: 1rem;
      margin-bottom: 28px;
      font-weight: 400;
    }

    /* ══ HERO ACTION CARD ══ */
    .action-hero {
      background: linear-gradient(135deg, var(--nu-white) 0%, #F8FAFF 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 32px 36px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.08);
    }
    .action-hero-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 5px 12px;
      border-radius: 4px;
      margin-bottom: 14px;
    }
    .action-hero-title {
      font-size: 1.75rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.25;
    }
    .action-hero-desc {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ STATUS CARDS GRID ══ */
    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    .status-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .status-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .status-card-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .status-card-value {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .status-card-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 6px;
    }
    .status-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 8px;
    }
    .status-pill.waiting { background: #FEF3C7; color: #92400E; }
    .status-pill.open { background: #DBEAFE; color: #1E40AF; }

    /* ══ FOLLOW-UP PLAN ══ */
    .plan-section {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 32px 36px;
      margin-bottom: 40px;
    }
    .plan-step {
      display: flex;
      gap: 20px;
      padding: 18px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .plan-step:last-child { border-bottom: none; }
    .plan-step-number {
      flex-shrink: 0;
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
    }
    .plan-step-content { flex: 1; }
    .plan-step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 4px;
    }
    .plan-step-body {
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }

    /* ══ EMAIL TEMPLATE ══ */
    .email-template {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 40px;
      font-family: var(--font-primary);
    }
    .email-template-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .email-template-label {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .email-meta {
      margin-bottom: 18px;
      font-size: 0.9rem;
    }
    .email-meta-row {
      display: flex;
      gap: 8px;
      padding: 4px 0;
    }
    .email-meta-key {
      font-weight: 700;
      color: var(--nu-dark-text);
      min-width: 70px;
    }
    .email-meta-val { color: var(--nu-body-text); }
    .email-body {
      background: var(--nu-white);
      padding: 24px 28px;
      border-radius: 6px;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .email-body p {
      margin-bottom: 14px;
      padding-left: 16px;
    }
    .email-body .greeting { padding-left: 0; font-weight: 700; }
    .email-body .signature {
      padding-left: 0;
      margin-top: 20px;
    }
    .email-body .bullet-list {
      padding-left: 32px;
      margin-bottom: 14px;
    }
    .email-body .bullet-list li {
      list-style: none;
      padding: 4px 0;
    }
    .email-body .bullet-list li::before {
      content: '• ';
      color: var(--nu-blue);
      font-weight: 700;
      margin-right: 6px;
    }

    /* ══ QUICK REFERENCE ══ */
    .quick-ref {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }
    .quick-ref-card {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 24px 28px;
      border-radius: 10px;
    }
    .quick-ref-card h3 {
      color: var(--nu-cyan);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .quick-ref-card ul {
      list-style: none;
      padding: 0;
    }
    .quick-ref-card li {
      padding: 5px 0;
      font-size: 0.95rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .quick-ref-card li:last-child { border-bottom: none; }
    .quick-ref-card li strong { color: var(--nu-cyan); }

    /* ══ CALL TO ACTION ══ */
    .cta-section {
      background: linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      margin-bottom: 32px;
    }
    .cta-title {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .cta-desc {
      color: var(--nu-body-text);
      margin-bottom: 22px;
      font-size: 1rem;
    }
    .cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 14px 30px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: opacity 0.2s ease;
    }
    .nu-footer-contact a:hover { opacity: 0.8; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.5;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .action-hero { padding: 24px; }
      .action-hero-title { font-size: 1.4rem; }
      .plan-section { padding: 24px; }
      .email-template { padding: 20px; }
      .email-body { padding: 18px 20px; }
      .quick-ref { grid-template-columns: 1fr; }
      .cta-buttons { flex-direction: column; }
      .nu-btn-primary, .nu-btn-secondary { width: 100%; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .status-card, .plan-section, .email-template { box-shadow: none; break-inside: avoid; }
      .cta-section, .priority-banner { break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-banner-icon">⏱</div>
        <div class="priority-banner-text">
          <div class="priority-banner-title">Action Required — Customer Awaiting Inventory</div>
          <div class="priority-banner-body">Customer is anxiously waiting on inventory from the last purchase order. Follow-up must go out today.</div>
        </div>
      </div>

      <!-- SECTION HEADER -->
      <h1 class="nu-section-title">PO <span>Follow-Up</span></h1>
      <p class="nu-section-subtitle">reMarkable action item — inventory status inquiry for prior purchase order</p>

      <!-- HERO ACTION CARD -->
      <div class="action-hero">
        <div class="action-hero-label">Action Item</div>
        <div class="action-hero-title">Follow up on order from last PO — customer anxiously waiting on inventory</div>
        <div class="action-hero-desc">
          Captured from reMarkable notebook. Customer placed a purchase order and has not yet received the inventory committed on that PO. Delay is creating field-level pressure on the customer's team. Close the loop today with a status check to the supplier and a same-day update to the customer.
        </div>
      </div>

      <!-- STATUS CARDS -->
      <div class="status-grid">
        <div class="status-card">
          <div class="status-card-label">Action Type</div>
          <div class="status-card-value">PO Follow-Up</div>
          <div class="status-card-sub">Inventory status inquiry</div>
          <span class="status-pill waiting">Waiting on Inventory</span>
        </div>
        <div class="status-card">
          <div class="status-card-label">Source</div>
          <div class="status-card-value">reMarkable Notebook</div>
          <div class="status-card-sub">Handwritten action item</div>
          <span class="status-pill open">Open</span>
        </div>
        <div class="status-card">
          <div class="status-card-label">Captured</div>
          <div class="status-card-value">April 22, 2026</div>
          <div class="status-card-sub">Today — act same day</div>
        </div>
        <div class="status-card">
          <div class="status-card-label">Owner</div>
          <div class="status-card-value">Aaron C. Norris</div>
          <div class="status-card-sub">Founder &amp; CEO</div>
        </div>
      </div>

      <!-- FOLLOW-UP PLAN -->
      <h2 class="nu-section-title">Follow-Up <span>Plan</span></h2>
      <p class="nu-section-subtitle">Five-step sequence — supplier confirmation, customer update, tracker log</p>

      <div class="plan-section">
        <div class="plan-step">
          <div class="plan-step-number">1</div>
          <div class="plan-step-content">
            <div class="plan-step-title">Pull the PO and confirm line items</div>
            <div class="plan-step-body">Open the original purchase order. Confirm SKU(s), quantity, agreed lead time, and ship-to address. Note the date the PO was issued and the committed delivery window.</div>
          </div>
        </div>
        <div class="plan-step">
          <div class="plan-step-number">2</div>
          <div class="plan-step-content">
            <div class="plan-step-title">Contact the supplier for a firm ship date</div>
            <div class="plan-step-body">Email or call the supplier rep. Ask three questions only: (a) Is the order complete? (b) What is the firm ship date? (c) What is the tracking number once it ships? Do not accept "soon" as an answer.</div>
          </div>
        </div>
        <div class="plan-step">
          <div class="plan-step-number">3</div>
          <div class="plan-step-content">
            <div class="plan-step-title">Update the customer the same day</div>
            <div class="plan-step-body">Send the customer a direct, honest status update — even if the supplier has not responded yet. Say what is known, what is pending, and when the next update will come.</div>
          </div>
        </div>
        <div class="plan-step">
          <div class="plan-step-number">4</div>
          <div class="plan-step-content">
            <div class="plan-step-title">Log the status in the Master Tracker</div>
            <div class="plan-step-body">Update master_tracker with PO number, supplier, committed ship date, and next follow-up date. Flag as "Waiting on Inventory" so the item reappears until resolved.</div>
          </div>
        </div>
        <div class="plan-step">
          <div class="plan-step-number">5</div>
          <div class="plan-step-content">
            <div class="plan-step-title">Set a 48-hour check-back</div>
            <div class="plan-step-body">If supplier has not provided tracking within 48 hours, escalate — call the supplier's account manager directly. Customer anxiety compounds the longer inventory sits unaccounted for.</div>
          </div>
        </div>
      </div>

      <!-- EMAIL TEMPLATE -->
      <h2 class="nu-section-title">Customer <span>Update Template</span></h2>
      <p class="nu-section-subtitle">Ready-to-send — fill in the bracketed fields and the message is done</p>

      <div class="email-template">
        <div class="email-template-header">
          <div class="email-template-label">Email Draft</div>
        </div>
        <div class="email-meta">
          <div class="email-meta-row">
            <div class="email-meta-key">To:</div>
            <div class="email-meta-val">[Customer name and email]</div>
          </div>
          <div class="email-meta-row">
            <div class="email-meta-key">From:</div>
            <div class="email-meta-val">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          </div>
          <div class="email-meta-row">
            <div class="email-meta-key">Subject:</div>
            <div class="email-meta-val">Status Update — PO [#####] — Inventory En Route</div>
          </div>
        </div>
        <div class="email-body">
          <p class="greeting">[First name] —</p>

          <p>Wanted to get in front of you on PO [#####] since I know your team is waiting on this inventory.</p>

          <p>Here is where we stand as of today:</p>

          <ul class="bullet-list">
            <li>PO issued: [date]</li>
            <li>Items: [qty] × [SKU/description]</li>
            <li>Ship-to: [address]</li>
            <li>Supplier status: [confirmed ship date / tracking #, or "confirmation expected within 24 hours"]</li>
          </ul>

          <p>I have the supplier on this directly. You will have tracking in hand as soon as it leaves their dock — no second-hand relay through anyone.</p>

          <p>If anything on your end has shifted (timing, quantity, ship-to), tell me now and I will adjust the order before it moves.</p>

          <p>I will follow up again within 48 hours whether or not tracking is in hand.</p>

          <p class="signature">
            Sincerely,<br><br>
            Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </p>
        </div>
      </div>

      <!-- QUICK REFERENCE -->
      <h2 class="nu-section-title">Quick <span>Reference</span></h2>
      <p class="nu-section-subtitle">Supplier contacts — CC both names on all communications</p>

      <div class="quick-ref">
        <div class="quick-ref-card">
          <h3>Supplier Contacts — CC Both</h3>
          <ul>
            <li><strong>BOSS Products:</strong> Troy Gongwer + Thayne Grove</li>
            <li><strong>Samson Rope:</strong> Donna Poll + Sarah Daniels</li>
            <li><strong>Skylift:</strong> Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr</li>
            <li><strong>Bay Shore Systems:</strong> Andy Barron (primary), Herb Minatre (owner)</li>
            <li><strong>Irby Construction:</strong> Jared Lemoine (new primary)</li>
          </ul>
        </div>
        <div class="quick-ref-card">
          <h3>Norris Utilities® SKUs</h3>
          <ul>
            <li><strong>NU-BC-2851:</strong> 2-Man, 28"×51"</li>
            <li><strong>NU-BC-2834-F:</strong> 1.5-Man, 28"×34"</li>
            <li><strong>NU-BC-2851-C:</strong> 2-Man Combo</li>
            <li><strong>NU-BC-2834-C:</strong> 1.5-Man Combo</li>
            <li><strong>Shipping:</strong> ROUNDUP(ROUNDUP(Reg,0) × 1.10, 0)</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-section">
        <div class="cta-title">Close the Loop Today</div>
        <div class="cta-desc">Call the supplier, update the customer, log the status. Do not let this item age another 24 hours.</div>
        <div class="cta-buttons">
          <a href="tel:2055001343" class="nu-btn-primary">Call 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Follow-Up%20Status" class="nu-btn-secondary">Email Aaron</a>
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
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>