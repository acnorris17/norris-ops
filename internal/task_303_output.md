<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow Up — Inventory Order PO Status — Norris Utilities®</title>
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
      --nu-alert-red: #D32F2F;
      --nu-warning-amber: #F57C00;
      --nu-success-green: #2E7D32;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    /* Ghost phoenix watermark */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-header > *:not(.nu-phoenix-ghost) { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
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
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 60vh;
    }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .nu-page-title {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
    }

    .nu-eyebrow {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 14px;
    }

    .nu-page-title h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title h1 .accent {
      color: var(--nu-blue);
    }
    .nu-page-title .meta-line {
      font-size: 0.95rem;
      color: #555;
      font-weight: 400;
    }
    .nu-page-title .meta-line strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ STATUS BADGE ROW ══ */
    .status-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 36px;
    }

    .status-pill {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      border-radius: 4px;
      padding: 14px 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .status-pill.warn { border-left-color: var(--nu-warning-amber); }
    .status-pill.alert { border-left-color: var(--nu-alert-red); }
    .status-pill.good { border-left-color: var(--nu-success-green); }

    .status-pill .label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #777;
      margin-bottom: 4px;
    }
    .status-pill .value {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }

    /* ══ ACTION TABLE ══ */
    .nu-table-wrap {
      background: var(--nu-white);
      border-radius: 6px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: left;
      padding: 14px 16px;
    }
    .nu-table tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: #FAFAFC; }
    .nu-table .step-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      text-align: center;
      line-height: 28px;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-table .priority-high {
      color: var(--nu-alert-red);
      font-weight: 700;
    }
    .nu-table .priority-med {
      color: var(--nu-warning-amber);
      font-weight: 700;
    }
    .nu-table .priority-low {
      color: #666;
      font-weight: 700;
    }

    /* ══ CALLOUT BOXES ══ */
    .callout {
      background: linear-gradient(135deg, #F0F4FF 0%, #E8F6FF 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 24px;
    }
    .callout h3 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-navy);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .callout p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .callout p:last-child { margin-bottom: 0; }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist .check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist .check-text strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .checklist .check-text .sub {
      display: block;
      font-size: 0.85rem;
      color: #666;
      margin-top: 3px;
    }

    /* ══ CONTACT CARDS ══ */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .contact-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.09);
    }
    .contact-card .supplier {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .contact-card .name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-card .role {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 10px;
      font-style: italic;
    }
    .contact-card .contact-info {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .contact-card .contact-info a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .contact-card .contact-info a:hover { text-decoration: underline; }
    .contact-card .cc-note {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.78rem;
      color: var(--nu-warning-amber);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* ══ EMAIL TEMPLATE ══ */
    .email-template {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    }
    .email-header {
      background: var(--nu-light-gray);
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-header .row {
      margin-bottom: 5px;
    }
    .email-header .row:last-child { margin-bottom: 0; }
    .email-header .field {
      display: inline-block;
      width: 70px;
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      font-size: 0.74rem;
      letter-spacing: 0.08em;
    }
    .email-header .value { color: var(--nu-dark-text); font-weight: 400; }
    .email-body {
      padding: 26px 30px;
      font-size: 0.96rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
      font-family: Georgia, 'Times New Roman', serif;
    }
    .email-body p {
      margin-bottom: 14px;
      text-indent: 24px;
    }
    .email-body p.no-indent { text-indent: 0; }
    .email-body ul {
      margin: 0 0 14px 24px;
      list-style: none;
    }
    .email-body ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
    }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-body .sig {
      margin-top: 22px;
      text-indent: 0;
    }
    .email-body .sig-indent {
      margin-left: 24px;
      text-indent: 0;
      line-height: 1.5;
      font-size: 0.9rem;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
      font-family: var(--font-primary);
    }
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
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.5;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 20px 50px; }
      .nu-page-title h1 { font-size: 1.7rem; }
      .nu-section-title { font-size: 1.25rem; }
      .email-body { padding: 20px 18px; font-size: 0.92rem; }
      .email-body p { text-indent: 0; }
      .nu-table thead { display: none; }
      .nu-table tbody td { display: block; border-bottom: none; padding: 6px 16px; }
      .nu-table tbody tr { border-bottom: 2px solid var(--nu-medium-gray); padding: 10px 0; }
      .nu-table tbody td:first-child { padding-top: 14px; }
      .nu-table tbody td:last-child { padding-bottom: 14px; }
      .nu-table tbody td::before {
        content: attr(data-label);
        font-weight: 700;
        color: var(--nu-blue);
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        display: block;
        margin-bottom: 3px;
      }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
      }
      .nu-table thead th,
      .nu-table .step-num,
      .contact-card,
      .callout,
      .email-template {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .nu-section { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
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
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="nu-page-title">
        <span class="nu-eyebrow">Internal Action Item · reMarkable</span>
        <h1><span class="accent">Follow Up</span> on Inventory Ordered on Last PO</h1>
        <div class="meta-line">
          <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
          <strong>Date Opened:</strong> 2026-04-24 &nbsp;|&nbsp;
          <strong>Priority:</strong> <span style="color:#D32F2F;font-weight:700;">HIGH</span> &nbsp;|&nbsp;
          <strong>Target Resolution:</strong> 2026-04-28
        </div>
      </div>

      <!-- STATUS ROW -->
      <div class="status-row">
        <div class="status-pill">
          <div class="label">Action Source</div>
          <div class="value">reMarkable Note</div>
        </div>
        <div class="status-pill warn">
          <div class="label">Current Status</div>
          <div class="value">Awaiting Outreach</div>
        </div>
        <div class="status-pill good">
          <div class="label">Next Step</div>
          <div class="value">Draft PO Inquiry</div>
        </div>
        <div class="status-pill">
          <div class="label">Response Window</div>
          <div class="value">48 Hours</div>
        </div>
      </div>

      <!-- SECTION: OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Objective</span>
          <span class="rest">— What We Need to Confirm</span>
        </h2>
        <div class="callout">
          <h3>Reach Each Supplier on the Last Purchase Order</h3>
          <p>Confirm three things for every open PO: (1) production/fulfillment status, (2) current ship date, and (3) tracking or BOL once released. If a PO is partially shipped, request the balance ETA in writing.</p>
          <p>Every response gets logged in the master tracker the same day. Any slip of more than 5 business days triggers an escalation call to the supplier primary.</p>
        </div>
      </section>

      <!-- SECTION: ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Action</span>
          <span class="rest">Plan — Sequence of Steps</span>
        </h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:60px;">#</th>
                <th>Step</th>
                <th style="width:130px;">Owner</th>
                <th style="width:120px;">Priority</th>
                <th style="width:130px;">Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Step"><span class="step-num">1</span></td>
                <td data-label="Action">Pull every open PO from the master tracker. Group by supplier (Boss Products, Samson Rope, Skylift, Bay Shore Systems, Irby, others).</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-high">HIGH</span></td>
                <td data-label="Target">2026-04-24</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">2</span></td>
                <td data-label="Action">For each PO, note: PO number, order date, line items, promised ship date, current status column. Flag any PO with no supplier confirmation within 7 days.</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-high">HIGH</span></td>
                <td data-label="Target">2026-04-24</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">3</span></td>
                <td data-label="Action">Send the follow-up email template below to each supplier primary. CC the secondary contact on Boss and Samson as noted in the contact grid.</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-high">HIGH</span></td>
                <td data-label="Target">2026-04-25</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">4</span></td>
                <td data-label="Action">Wait 48 hours. If no reply, call the supplier primary and leave a voicemail. Log call attempt in tracker.</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-med">MED</span></td>
                <td data-label="Target">2026-04-27</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">5</span></td>
                <td data-label="Action">Log supplier responses (ship date, tracking, BOL) in master tracker the same day received. Update customer-facing deals if the PO is tied to a specific customer ship.</td>
                <td data-label="Owner">Aaron / CB</td>
                <td data-label="Priority"><span class="priority-med">MED</span></td>
                <td data-label="Target">2026-04-28</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">6</span></td>
                <td data-label="Action">For any PO more than 5 business days past promised ship: escalate with a phone call to supplier owner/principal. Confirm in writing what the new committed date is.</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-high">HIGH</span></td>
                <td data-label="Target">2026-04-29</td>
              </tr>
              <tr>
                <td data-label="Step"><span class="step-num">7</span></td>
                <td data-label="Action">Close the loop: mark the reMarkable action item complete once every open PO has a confirmed ship status logged. Brief CB so customer-facing updates can go out.</td>
                <td data-label="Owner">Aaron</td>
                <td data-label="Priority"><span class="priority-low">LOW</span></td>
                <td data-label="Target">2026-04-30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION: SUPPLIER CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Supplier</span>
          <span class="rest">Contacts — Who to Reach</span>
        </h2>
        <div class="contact-grid">

          <div class="contact-card">
            <div class="supplier">Boss Products</div>
            <div class="name">Troy Gongwer</div>
            <div class="role">Primary — PO Status & Production</div>
            <div class="contact-info">
              Reach by email first.<br>
              Follow-up call if silent 48 hrs.
            </div>
            <div class="cc-note">CC Thayne Grove on every email</div>
          </div>

          <div class="contact-card">
            <div class="supplier">Samson Rope</div>
            <div class="name">Donna Poll</div>
            <div class="role">Primary — Order Fulfillment</div>
            <div class="contact-info">
              Email confirmation expected same-day.<br>
              30% margin deals — verify ship on time.
            </div>
            <div class="cc-note">CC Sarah Daniels on every email</div>
          </div>

          <div class="contact-card">
            <div class="supplier">Skylift</div>
            <div class="name">Andrew Jarmoszuk</div>
            <div class="role">Primary — Production Scheduling</div>
            <div class="contact-info">
              For SBA40i-LW and SBA47i-MH PO status.<br>
              Backup: Nick Jarmoszuk Jr., Dale Williams.
            </div>
          </div>

          <div class="contact-card">
            <div class="supplier">Bay Shore Systems</div>
            <div class="name">Andy Barron</div>
            <div class="role">Primary — Drill Rig Orders</div>
            <div class="contact-info">
              Escalate to Herb Minatre (owner) if ship date slips more than 5 business days.
            </div>
          </div>

          <div class="contact-card">
            <div class="supplier">Irby Construction</div>
            <div class="name">Jared Lemoine</div>
            <div class="role">New Primary Contact</div>
            <div class="contact-info">
              Replaces Gary Wiggs and Scott Argyle (both retired April 2026).
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: EMAIL TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Email</span>
          <span class="rest">Template — Supplier PO Follow-Up</span>
        </h2>
        <div class="email-template">
          <div class="email-header">
            <div class="row"><span class="field">To:</span> <span class="value">[Supplier Primary]</span></div>
            <div class="row"><span class="field">CC:</span> <span class="value">[Supplier Secondary — per contact grid above]</span></div>
            <div class="row"><span class="field">From:</span> <span class="value">acnorris@norrisutilities.com</span></div>
            <div class="row"><span class="field">Subject:</span> <span class="value">PO [Number] — Status Check on Inventory Order</span></div>
          </div>
          <div class="email-body">
            <p class="no-indent">[First Name] —</p>

            <p>Checking in on our open PO [Number] placed on [Date]. I want to make sure I have the current production and ship timeline right so we can keep our customers updated on our end.</p>

            <p class="no-indent">Three quick confirmations:</p>
            <ul>
              <li>Current production or fulfillment status on the line items below</li>
              <li>Committed ship date (or updated date if it has moved)</li>
              <li>Tracking number or BOL once the order releases</li>
            </ul>

            <p>Line items on the PO:</p>
            <ul>
              <li>[Item 1 — qty, SKU, description]</li>
              <li>[Item 2 — qty, SKU, description]</li>
              <li>[Item 3 — qty, SKU, description]</li>
            </ul>

            <p>If anything has shifted since we placed the order, I would appreciate a written note so I can plan around it. Happy to jump on a quick call if that is easier.</p>

            <p>Thanks for taking a look, and I appreciate y'all continuing to earn the business.</p>

            <p class="sig no-indent">Sincerely,</p>
            <div class="sig-indent">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Completion</span>
          <span class="rest">Checklist — Mark When Done</span>
        </h2>
        <ul class="checklist">
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>Open POs pulled and grouped by supplier</strong>
              <span class="sub">Master tracker filtered. Every PO with no recent confirmation flagged.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>Follow-up emails sent to all supplier primaries</strong>
              <span class="sub">Boss (CC Thayne), Samson (CC Sarah), Skylift, BSS, Irby, plus any other open-PO supplier.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>48-hour silence → phone call placed and logged</strong>
              <span class="sub">Voicemail counts. Log attempt date/time in tracker.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>All supplier replies logged in master tracker</strong>
              <span class="sub">Ship date, tracking/BOL, any scope changes captured in writing.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>Customer-facing deals updated where needed</strong>
              <span class="sub">CB briefed so downstream communications to customers are accurate.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>Escalations completed on POs more than 5 days late</strong>
              <span class="sub">Phone call to supplier owner/principal, new date confirmed in writing.</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="check-text">
              <strong>reMarkable action item marked complete</strong>
              <span class="sub">Every open PO has a confirmed, logged status. Close the loop.</span>
            </span>
          </li>
        </ul>
      </section>

      <!-- SECTION: NOTES -->
      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="first">Notes</span>
          <span class="rest">— Guardrails for This Task</span>
        </h2>
        <div class="callout">
          <h3>Keep the Paper Trail</h3>
          <p>Every supplier ship date commitment must land in writing — email response, not just a phone call. If the call happens first, follow up with "confirming what we discussed" in a short email so the date is logged.</p>
          <p>Any PO tied to a named customer deal (Skylift order to Irby, Boss order to a dealer, etc.) must have the customer-facing timeline updated the same day the supplier confirms. Customers hear from us before they have to ask.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong style="color:#FFFFFF;">Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>