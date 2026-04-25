<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow Up: Last PO Inventory Order — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B7A3E;
      --nu-warning: #C97A1A;
      --nu-alert: #B22222;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header > * { position: relative; z-index: 2; }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* CHEVRON */
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
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 28px;
      border-radius: 2px;
    }

    /* INTRO BANNER */
    .nu-action-banner {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 30px 32px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.18);
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 24px;
      align-items: center;
    }
    .nu-action-banner-icon {
      width: 64px;
      height: 64px;
      background: rgba(6,208,255,0.18);
      border: 2px solid var(--nu-cyan);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .nu-action-banner-icon svg { width: 36px; height: 36px; fill: var(--nu-cyan); }
    .nu-action-banner-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .nu-action-banner-title {
      font-size: 1.6rem;
      font-weight: 900;
      letter-spacing: 0.01em;
      line-height: 1.25;
    }
    .nu-action-banner-meta {
      margin-top: 10px;
      font-size: 0.92rem;
      color: rgba(255,255,255,0.85);
      font-weight: 400;
    }

    /* SUMMARY GRID */
    .nu-summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 50px;
    }
    .nu-summary-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-summary-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-summary-card.gold { border-left-color: var(--nu-accent-gold); }
    .nu-summary-card.alert { border-left-color: var(--nu-alert); }
    .nu-summary-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #6a6a7a;
      margin-bottom: 8px;
    }
    .nu-summary-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .nu-summary-sub {
      margin-top: 4px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* SECTION */
    .nu-section { margin-bottom: 50px; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      counter-reset: step;
    }
    .nu-checklist li {
      counter-increment: step;
      position: relative;
      padding: 18px 22px 18px 70px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .nu-checklist li:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.07);
    }
    .nu-checklist li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,255,0.25);
    }
    .nu-checklist .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-checklist .step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* CONTACTS TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.94rem;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, #0a0e5c, #0033cc);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      letter-spacing: 0.06em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: #fafafc; }
    .nu-table .vendor-name {
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .nu-table .vendor-tag {
      display: inline-block;
      margin-top: 4px;
      padding: 2px 8px;
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
      font-size: 0.72rem;
      font-weight: 700;
      border-radius: 3px;
      letter-spacing: 0.04em;
    }

    .nu-status-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .nu-status-pill.due { background: #FBE9C8; color: #8A5A0E; }
    .nu-status-pill.confirm { background: #C8E6F8; color: #0a4d7a; }
    .nu-status-pill.partial { background: #FAD2C0; color: #8A2D0E; }

    /* QUESTIONS BLOCK */
    .nu-questions {
      background: linear-gradient(135deg, #f5f8ff 0%, #eef4ff 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 26px 28px;
    }
    .nu-questions h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 12px;
      letter-spacing: 0.01em;
    }
    .nu-questions ul { padding-left: 22px; }
    .nu-questions li {
      margin-bottom: 8px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .nu-questions li::marker { color: var(--nu-blue); font-weight: 900; }

    /* TEMPLATE BLOCK */
    .nu-email-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .nu-email-header {
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 14px 22px;
      font-size: 0.85rem;
    }
    .nu-email-header .row { display: flex; gap: 8px; padding: 2px 0; }
    .nu-email-header .label {
      font-weight: 700;
      color: #6a6a7a;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.74rem;
      min-width: 70px;
    }
    .nu-email-header .value { color: var(--nu-dark-text); }
    .nu-email-body {
      padding: 26px 30px;
      font-size: 0.96rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .nu-email-body p { margin-bottom: 14px; padding-left: 18px; }
    .nu-email-body p:first-child { padding-left: 0; }
    .nu-email-body ul { padding-left: 38px; margin-bottom: 14px; list-style: none; }
    .nu-email-body ul li { position: relative; margin-bottom: 6px; }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: -16px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .nu-email-sig {
      padding-left: 18px;
      margin-top: 18px;
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-email-sig strong { color: var(--nu-dark-text); }

    /* CTA STRIP */
    .nu-cta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 30px;
    }
    .nu-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(0,0,255,0.3);
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

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
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
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto 18px;
      opacity: 0.6;
    }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-content-wrap { padding: 40px 22px 60px; }
      .nu-action-banner {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .nu-action-banner-icon { margin: 0 auto; }
      .nu-action-banner-title { font-size: 1.25rem; }
      .nu-checklist li { padding: 16px 18px 16px 60px; }
      .nu-checklist li::before { left: 12px; width: 32px; height: 32px; font-size: 0.85rem; }
      .nu-cta-strip .nu-btn { width: 100%; justify-content: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-checklist li { box-shadow: none; }
      .nu-cta-strip { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- ACTION BANNER -->
      <section class="nu-action-banner">
        <div class="nu-action-banner-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4h18v3H3V4zm0 5h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9zm6 3v2h6v-2H9z"/>
          </svg>
        </div>
        <div>
          <div class="nu-action-banner-label">reMarkable Action Item</div>
          <div class="nu-action-banner-title">Follow Up on Last PO Inventory Order</div>
          <div class="nu-action-banner-meta">
            Captured 2026-04-25 · Owner: Aaron C. Norris · Channel: Direct call + email confirmation
          </div>
        </div>
      </section>

      <!-- SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Status</span> <span class="rest">at a Glance</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-summary-grid">
          <div class="nu-summary-card">
            <div class="nu-summary-label">Action Type</div>
            <div class="nu-summary-value">Inventory PO Follow-Up</div>
            <div class="nu-summary-sub">Confirm fulfillment status, ETA, and outstanding balance</div>
          </div>
          <div class="nu-summary-card cyan">
            <div class="nu-summary-label">Priority</div>
            <div class="nu-summary-value">High</div>
            <div class="nu-summary-sub">Cash flow + customer commitments depend on this</div>
          </div>
          <div class="nu-summary-card gold">
            <div class="nu-summary-label">Target Close</div>
            <div class="nu-summary-value">Within 48 Hours</div>
            <div class="nu-summary-sub">Calls placed by EOD 2026-04-26 · written confirms by 2026-04-27</div>
          </div>
          <div class="nu-summary-card alert">
            <div class="nu-summary-label">Owner</div>
            <div class="nu-summary-value">Aaron C. Norris</div>
            <div class="nu-summary-sub">Caroline Butler logs replies in master tracker</div>
          </div>
        </div>
      </section>

      <!-- WHY THIS MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
        <div class="nu-section-rule"></div>
        <p style="font-size:1.02rem;">
          The last inventory purchase order represents committed capital and committed delivery dates. Until each line item is
          confirmed shipped, in transit, or received, every downstream commitment — customer ETAs, FlexPro Armor builds, Samson Rope
          allocations, and equipment staging — is exposed. This brief consolidates the follow-up into a single repeatable workflow so
          nothing falls through the cracks before the next reMarkable review.
        </p>
      </section>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <ol class="nu-checklist">
          <li>
            <div class="step-title">Pull the most recent PO from the master tracker</div>
            <div class="step-detail">Open <em>~/norris-ops/data/master_tracker</em> and the matching QuickBooks PO. Confirm PO number, vendor, line items, totals, deposit paid, and original promise date.</div>
          </li>
          <li>
            <div class="step-title">Cross-check against the open invoices file</div>
            <div class="step-detail">Open <em>operations/open-invoices</em>. Verify nothing on this PO has already been received and invoiced — preventing a duplicate follow-up.</div>
          </li>
          <li>
            <div class="step-title">Call the vendor primary contact first</div>
            <div class="step-detail">Live conversation captures tone and slippage signals an email cannot. Use the contact table below — always loop in the secondary on follow-up emails.</div>
          </li>
          <li>
            <div class="step-title">Send written confirmation within 1 hour of the call</div>
            <div class="step-detail">Use the email template below. Restate everything verbally agreed: ship date, tracking, balance due, and any product substitutions.</div>
          </li>
          <li>
            <div class="step-title">Log the response in master tracker + Folk CRM</div>
            <div class="step-detail">Update PO status, ETA, and any partial-shipment notes. Flag for next review if no reply within 48 hours.</div>
          </li>
          <li>
            <div class="step-title">Notify affected customers proactively</div>
            <div class="step-detail">If ETA slipped, draft a customer-side update for Caroline to review before sending. Never let the customer learn about a delay from someone else.</div>
          </li>
          <li>
            <div class="step-title">Close the loop on reMarkable</div>
            <div class="step-detail">Mark the action item complete only when the PO is fully received, invoiced where applicable, and the file copy in <em>~/norris-ops/internal/</em> is updated.</div>
          </li>
        </ol>
      </section>

      <!-- VENDOR CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contact Map</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:24%;">Vendor</th>
                <th style="width:30%;">Primary Contact</th>
                <th style="width:30%;">Always CC</th>
                <th style="width:16%;">Confirm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="vendor-name">Boss Products</div>
                  <span class="vendor-tag">FlexPro Armor</span>
                </td>
                <td>Troy Gongwer<br><span style="color:#6a6a7a;font-size:0.86rem;">Order entry &amp; build status</span></td>
                <td>Thayne Grove<br><span style="color:#6a6a7a;font-size:0.86rem;">Production / shipping</span></td>
                <td><span class="nu-status-pill due">Ship date</span></td>
              </tr>
              <tr>
                <td>
                  <div class="vendor-name">Samson Rope</div>
                  <span class="vendor-tag">Distributor PO</span>
                </td>
                <td>Donna Poll</td>
                <td>Sarah Daniels</td>
                <td><span class="nu-status-pill confirm">Tracking</span></td>
              </tr>
              <tr>
                <td>
                  <div class="vendor-name">Skylift</div>
                  <span class="vendor-tag">5× SBA40i-LW + 1× SBA47i-MH</span>
                </td>
                <td>Andrew Jarmoszuk</td>
                <td>Dale Williams · Nick Jarmoszuk Jr</td>
                <td><span class="nu-status-pill partial">Build slot</span></td>
              </tr>
              <tr>
                <td>
                  <div class="vendor-name">Bay Shore Systems</div>
                  <span class="vendor-tag">Drill rigs · SE rep</span>
                </td>
                <td>Andy Barron</td>
                <td>Herb Minatre</td>
                <td><span class="nu-status-pill confirm">PO ack</span></td>
              </tr>
              <tr>
                <td>
                  <div class="vendor-name">Irby Construction</div>
                  <span class="vendor-tag">Direct distributor</span>
                </td>
                <td>Jared Lemoine</td>
                <td>—</td>
                <td><span class="nu-status-pill due">Open balance</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- QUESTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Questions</span> <span class="rest">to Resolve on the Call</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-questions">
          <h4>Bring written answers back into the tracker:</h4>
          <ul>
            <li>What is the current build / pick status for every line item on the PO?</li>
            <li>Which items are already in transit, and what is the carrier + tracking number?</li>
            <li>Is the original delivery promise still on track, or has it slipped — and by how many days?</li>
            <li>Are any line items on backorder or being substituted? If so, with what and at what cost?</li>
            <li>Is the deposit fully applied, and what is the remaining balance plus due date?</li>
            <li>Will partial shipments be billed separately, or rolled into one final invoice?</li>
            <li>Are there any freight or fuel surcharges added since the PO was issued?</li>
          </ul>
        </div>
      </section>

      <!-- EMAIL TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Written</span> <span class="rest">Confirmation Template</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-email-card">
          <div class="nu-email-header">
            <div class="row"><span class="label">To</span><span class="value">[Primary Vendor Contact]</span></div>
            <div class="row"><span class="label">CC</span><span class="value">[Secondary Contact] · acnorris@norrisutilities.com</span></div>
            <div class="row"><span class="label">Subject</span><span class="value">PO #[Number] — Status Confirmation &amp; Next Steps</span></div>
          </div>
          <div class="nu-email-body">
            <p>[First name] —</p>
            <p>Thank you for the call today. Confirming what we discussed on PO #[Number] dated [PO date]:</p>
            <ul>
              <li>Line items shipped to date: [list]</li>
              <li>Items still in production / on the floor: [list with revised ship date]</li>
              <li>Carrier &amp; tracking for items in transit: [carrier — tracking number]</li>
              <li>Deposit applied: [amount] · Balance due: [amount] · Due date: [date]</li>
              <li>Substitutions or freight adjustments: [list any · or "none"]</li>
            </ul>
            <p>If anything above does not match your records, please reply by [date + 24 hrs] so we can correct it on our side before we update the customers waiting on this material.</p>
            <p>Appreciate the partnership and the quick turnaround.</p>
            <div class="nu-email-sig">
              Sincerely,<br><br>
              <strong>Aaron C. Norris</strong><br>
              Founder &amp; CEO<br>
              Norris Utilities®, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="nu-section" style="margin-bottom:0;">
        <h2 class="nu-section-title"><span class="first">Quick</span> <span class="rest">Actions</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-cta-strip">
          <a class="nu-btn nu-btn-primary" href="tel:2055001343">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1L6.6 10.8z"/></svg>
            Call Aaron · 205-500-1343
          </a>
          <a class="nu-btn nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=PO%20Inventory%20Follow-Up">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7L4 6v2l8 5 8-5V6l-8 5z"/></svg>
            Email Confirmation Loop
          </a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO · Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> ·
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> ·
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">Internal Action Brief · Generated 2026-04-25</div>
  </footer>

</body>
</html>