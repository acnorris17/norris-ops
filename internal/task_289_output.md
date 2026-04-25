<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow Up: Last PO Inventory Order — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
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
      background: transparent;
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
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,51,204,0.07) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-header {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      display: inline-block;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 8px 18px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-sub {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.05rem;
      color: #555;
      max-width: 740px;
      margin: 0 auto;
    }

    /* STATUS STRIP */
    .nu-status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 48px;
    }
    .nu-status-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-status-tile.amber { border-left-color: var(--nu-amber); }
    .nu-status-tile.cyan { border-left-color: var(--nu-cyan); }
    .nu-status-tile.navy { border-left-color: var(--nu-navy); }
    .nu-status-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .nu-status-value {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .nu-status-value.action { color: var(--nu-amber); }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 22px 18px 56px;
      margin-bottom: 12px;
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-body-text);
      transition: all 0.2s ease;
    }
    .nu-checklist li:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,255,0.08);
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 19px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
      font-weight: 700;
    }

    /* SCRIPT BOX */
    .nu-script-box {
      background: linear-gradient(135deg, #f8f9fc 0%, #eef2fb 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 18px;
    }
    .nu-script-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-script-body {
      font-family: var(--font-primary);
      font-size: 1rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .nu-script-body p {
      margin-bottom: 12px;
      padding-left: 18px;
    }
    .nu-script-body p:last-child { margin-bottom: 0; }
    .nu-script-body .greeting {
      padding-left: 0;
      font-weight: 700;
    }
    .nu-script-body .signoff {
      padding-left: 0;
      margin-top: 14px;
      font-weight: 400;
    }
    .nu-script-body .signature {
      padding-left: 18px;
      font-weight: 700;
      color: var(--nu-blue);
      margin-top: 4px;
    }

    /* CONTACT GRID */
    .nu-contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      transition: all 0.2s ease;
    }
    .nu-contact-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.06);
      border-color: var(--nu-cyan);
    }
    .nu-contact-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-contact-role {
      font-size: 0.85rem;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-contact-detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .nu-contact-detail a {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .nu-contact-detail a:hover {
      text-decoration: underline;
    }
    .nu-cc-note {
      font-size: 0.78rem;
      color: var(--nu-amber);
      font-weight: 700;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      letter-spacing: 0.04em;
    }

    /* DECISION TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.95rem;
    }
    table.nu-table th {
      background: linear-gradient(135deg, var(--nu-navy), #001166);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tr:last-child td { border-bottom: none; }
    table.nu-table tr:hover td { background: #f9fafd; }
    table.nu-table .col-if {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 32%;
    }
    table.nu-table .col-then {
      color: var(--nu-body-text);
    }

    /* CTA ROW */
    .nu-cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .nu-btn {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-family: var(--font-primary);
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
      background: var(--nu-navy);
      border-color: var(--nu-navy);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.25);
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

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-bottom: 44px;
      display: flex;
      align-items: center;
      gap: 22px;
    }
    .nu-callout-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 900;
    }
    .nu-callout-text {
      font-size: 1rem;
      line-height: 1.6;
    }
    .nu-callout-text strong {
      color: var(--nu-cyan);
      display: block;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
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
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.12);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-callout { flex-direction: column; text-align: center; padding: 22px; }
      .nu-script-box { padding: 22px; }
      .nu-script-body p { padding-left: 0; }
      .nu-script-body .signature { padding-left: 0; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-cta-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE HEADER -->
      <div class="nu-page-header">
        <div class="nu-eyebrow">Action Item · Inventory</div>
        <h1 class="nu-page-title">Follow Up on <span>Last PO</span> for Inventory Order</h1>
        <p class="nu-page-sub">Confirm production status, ETA, tracking, and invoice posture for the most recent purchase order placed on the inventory replenishment cycle. Close the loop in writing before end of week.</p>
      </div>

      <!-- STATUS STRIP -->
      <div class="nu-status-strip">
        <div class="nu-status-tile">
          <div class="nu-status-label">Owner</div>
          <div class="nu-status-value">Aaron C. Norris</div>
        </div>
        <div class="nu-status-tile cyan">
          <div class="nu-status-label">Opened</div>
          <div class="nu-status-value">2026-04-25</div>
        </div>
        <div class="nu-status-tile amber">
          <div class="nu-status-label">Target Close</div>
          <div class="nu-status-value action">EOW · 2026-05-01</div>
        </div>
        <div class="nu-status-tile navy">
          <div class="nu-status-label">Source</div>
          <div class="nu-status-value">reMarkable Note</div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="nu-callout">
        <div class="nu-callout-icon">!</div>
        <div class="nu-callout-text">
          <strong>The Ask, in One Sentence</strong>
          Reach out on the most recent inventory PO, confirm production status and shipment ETA, capture tracking numbers, and verify the supplier has the correct PO number on the invoice before it hits accounting.
        </div>
      </div>

      <!-- ACTION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-checklist">
          <li>
            <strong>Pull the PO record</strong>
            Open QuickBooks and locate the most recent PO issued for inventory. Note PO number, line items, quantities, unit costs, and total. Confirm the ship-to address on file is current.
          </li>
          <li>
            <strong>Cross-check the master tracker</strong>
            Compare the PO against the entry in the master tracker. If the tracker is missing a row, add it now with date issued, vendor, expected ship date, and current status.
          </li>
          <li>
            <strong>Reach out to the vendor contact</strong>
            Send the follow-up email below. Phone first if the PO is more than 14 days old without a status update — voice gets faster answers than email on stale orders.
          </li>
          <li>
            <strong>Capture production status &amp; ETA</strong>
            Get a firm or estimated ship date, mode of freight, and any tracking number that already exists. If the vendor cannot commit to a date, ask for one in writing within 48 hours.
          </li>
          <li>
            <strong>Verify invoice and PO number alignment</strong>
            Confirm the vendor has the correct PO number tied to the order so accounting can match the invoice cleanly. Mismatched POs slow payment and create reconciliation work later.
          </li>
          <li>
            <strong>Update the tracker and notify Caroline</strong>
            Record the call/email outcome in the master tracker. If the order touches a customer commitment, send Caroline a one-line note so customer-facing communication stays in sync.
          </li>
          <li>
            <strong>Close the loop in writing</strong>
            Once the vendor confirms ETA, send a short reply that restates the dates and tracking. Written confirmation prevents drift if anyone gets pulled off the order.
          </li>
        </ul>
      </section>

      <!-- EMAIL SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Template</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-script-box">
          <div class="nu-script-label">Subject: PO [Number] — Inventory Order Status Check</div>
          <div class="nu-script-body">
            <p class="greeting">[Vendor Contact First Name] —</p>
            <p>Following up on PO [Number] placed on [Date] for our inventory replenishment. I want to confirm we are on the same page heading into next week.</p>
            <p>A few items I need to button up on our side:</p>
            <p>&bull; Current production status and a firm or estimated ship date<br>
               &bull; Mode of freight and any tracking number already assigned<br>
               &bull; Confirmation that PO [Number] is tied to the invoice on your end so accounting matches it cleanly</p>
            <p>If anything has shifted since the order was placed — quantities, lead time, freight cost — please flag it now so we can adjust on this side before it reaches the customer.</p>
            <p>Appreciate your help getting this closed out.</p>
            <p class="signoff">Sincerely,</p>
            <p class="signature">Aaron C. Norris<br>Founder &amp; CEO, Norris Utilities®, LLC</p>
          </div>
        </div>
      </section>

      <!-- VENDOR CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contact Routing</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-contact-grid">

          <div class="nu-contact-card">
            <div class="nu-contact-name">BOSS Products</div>
            <div class="nu-contact-role">FlexPro Armor Production</div>
            <div class="nu-contact-detail">
              Troy Gongwer — primary<br>
              Thayne Grove — primary
            </div>
            <div class="nu-cc-note">CC BOTH on every email — no exceptions</div>
          </div>

          <div class="nu-contact-card">
            <div class="nu-contact-name">Samson Rope</div>
            <div class="nu-contact-role">Authorized Distributor</div>
            <div class="nu-contact-detail">
              Donna Poll — primary<br>
              Sarah Daniels — primary
            </div>
            <div class="nu-cc-note">CC BOTH on every email — no exceptions</div>
          </div>

          <div class="nu-contact-card">
            <div class="nu-contact-name">Skylift</div>
            <div class="nu-contact-role">Bucket Trucks · Pricing &amp; Specs</div>
            <div class="nu-contact-detail">
              Andrew Jarmoszuk<br>
              Dale Williams<br>
              Nick Jarmoszuk Jr — pricing/specs<br>
              Nick Gordon — pricing/specs
            </div>
          </div>

          <div class="nu-contact-card">
            <div class="nu-contact-name">Bay Shore Systems</div>
            <div class="nu-contact-role">Drill Rigs · SE Territory</div>
            <div class="nu-contact-detail">
              Andy Barron — primary, travel partner<br>
              Herb Minatre — owner
            </div>
          </div>

        </div>
      </section>

      <!-- DECISION TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Tree</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>If the vendor says…</th>
                <th>Then take this action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-if">Order is on schedule, ETA confirmed</td>
                <td class="col-then">Capture ETA + tracking in master tracker. Send Caroline a one-line update if the order ties to a customer commitment.</td>
              </tr>
              <tr>
                <td class="col-if">Production is delayed</td>
                <td class="col-then">Get the new firm date in writing. If the delay impacts a customer order, draft a heads-up note to the affected customer for review before sending.</td>
              </tr>
              <tr>
                <td class="col-if">PO number doesn't match their record</td>
                <td class="col-then">Forward the original PO PDF immediately. Confirm correction in writing and CC the second contact at the vendor.</td>
              </tr>
              <tr>
                <td class="col-if">Already shipped, no tracking sent</td>
                <td class="col-then">Request the tracking number same-day. Update tracker the moment it arrives and verify against the carrier site.</td>
              </tr>
              <tr>
                <td class="col-if">Quantity or pricing changed since PO</td>
                <td class="col-then">Stop. Do not accept silently. Get the change in writing, recalculate margin and customer-facing pricing, then decide whether to accept or reissue the PO.</td>
              </tr>
              <tr>
                <td class="col-if">No response within 48 hours of email</td>
                <td class="col-then">Phone the primary. If still no answer, escalate to the secondary contact. Stale POs lose priority on the production floor.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PRICING REMINDER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Margin</span> <span class="rest">Guardrails</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Product Line</th>
                <th>Margin · Customer Price Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-if">FlexPro Armor bucket covers</td>
                <td class="col-then">50% margin always. Customer Price = Cost ÷ 0.50</td>
              </tr>
              <tr>
                <td class="col-if">Samson Rope</td>
                <td class="col-then">30% margin. Customer Price = Cost ÷ 0.70</td>
              </tr>
              <tr>
                <td class="col-if">Equipment (Skylift, BSS)</td>
                <td class="col-then">12–15% margin range</td>
              </tr>
              <tr>
                <td class="col-if">Shipping (Ben's Formula)</td>
                <td class="col-then">CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-cta-row">
          <a class="nu-btn nu-btn-primary" href="mailto:acnorris@norrisutilities.com?subject=PO%20Follow-Up%20Status%20Update">Email Status Update</a>
          <a class="nu-btn nu-btn-secondary" href="tel:2055001343">Call 205-500-1343</a>
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
    <div class="nu-footer-meta">
      Generated 2026-04-25 · Internal Action Item · Inventory PO Follow-Up
    </div>
  </footer>

</body>
</html>