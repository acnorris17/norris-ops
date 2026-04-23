<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Receive &amp; Process Inventory — Last PO Order — Norris Utilities®</title>
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
      --nu-success: #0A8F3C;
      --nu-warning: #D97706;
      --nu-danger: #C62828;
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-page-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 40px;
      color: var(--nu-white);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
      top: 12%; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px;
      height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* ══ TASK BANNER ══ */
    .task-banner {
      background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 40px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.08);
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      justify-content: space-between;
    }
    .task-banner-main h1 {
      font-weight: 900;
      font-size: 1.85rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .task-banner-main h1 .accent {
      color: var(--nu-blue);
    }
    .task-banner-main p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .task-meta {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    .meta-pill {
      background: var(--nu-white);
      border: 1.5px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 10px 16px;
      text-align: center;
      min-width: 120px;
    }
    .meta-pill .label {
      display: block;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #6B7280;
      font-weight: 700;
    }
    .meta-pill .value {
      display: block;
      font-size: 0.95rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-top: 4px;
    }
    .meta-pill.priority {
      border-color: var(--nu-warning);
      background: #FFF8F0;
    }
    .meta-pill.priority .value { color: var(--nu-warning); }
    .meta-pill.status {
      border-color: var(--nu-blue);
      background: #F0F4FF;
    }
    .meta-pill.status .value { color: var(--nu-blue); }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-header {
      margin-bottom: 22px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-header::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 90px; height: 2px;
      background: var(--nu-blue);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      letter-spacing: 0.01em;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-subtitle {
      font-size: 0.9rem;
      color: #6B7280;
      margin-top: 4px;
      font-weight: 400;
    }

    /* ══ CHEVRON BADGES ══ */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge .dot {
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      border-radius: 50%;
      margin-right: 10px;
      box-shadow: 0 0 8px var(--nu-cyan);
    }

    /* ══ WORKFLOW STEPS ══ */
    .workflow {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .step-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 24px;
      position: relative;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 22px rgba(0,0,255,0.1);
      border-color: var(--nu-cyan);
    }
    .step-number {
      position: absolute;
      top: -16px;
      left: 22px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      box-shadow: 0 3px 10px rgba(0,0,255,0.3);
    }
    .step-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin: 10px 0 10px;
    }
    .step-card p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .step-card ul {
      list-style: none;
      padding: 0;
    }
    .step-card ul li {
      font-size: 0.88rem;
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .step-card ul li:last-child { border-bottom: none; }
    .step-card ul li::before {
      content: '▸';
      position: absolute;
      left: 0; top: 6px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: linear-gradient(135deg, #ffffff 0%, #fafcff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 14px;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      margin-top: 2px;
      background: var(--nu-white);
      position: relative;
    }
    .checklist-item-body { flex: 1; }
    .checklist-item-body strong {
      display: block;
      font-weight: 900;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .checklist-item-body span {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ PO GRID ══ */
    .po-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 18px;
    }
    .po-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .po-tile .po-label {
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #6B7280;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .po-tile .po-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .po-tile .po-note {
      font-size: 0.82rem;
      color: #6B7280;
      margin-top: 4px;
      font-style: italic;
    }

    /* ══ ALERT BOX ══ */
    .alert-box {
      background: linear-gradient(135deg, #FFF8F0 0%, #FFFAF5 100%);
      border-left: 5px solid var(--nu-warning);
      border-radius: 8px;
      padding: 20px 24px;
      margin: 24px 0;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .alert-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: var(--nu-warning);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .alert-box h4 {
      font-weight: 900;
      color: var(--nu-warning);
      margin-bottom: 4px;
      font-size: 0.98rem;
    }
    .alert-box p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    .note-box {
      background: #F0F4FF;
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 18px 22px;
      margin: 20px 0;
    }
    .note-box h4 {
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 6px;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .note-box p {
      font-size: 0.92rem;
    }

    /* ══ DISCREPANCY TABLE ══ */
    .disc-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 14px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .disc-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .disc-table th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .disc-table td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .disc-table tr:last-child td { border-bottom: none; }
    .disc-table tr:nth-child(even) { background: #FAFBFD; }

    /* ══ CONTACT CARDS ══ */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 20px;
      border-top: 4px solid var(--nu-cyan);
    }
    .contact-card .role {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 900;
      margin-bottom: 6px;
    }
    .contact-card .name {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .contact-card .details {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .contact-card .details a {
      color: var(--nu-blue);
      text-decoration: none;
    }

    /* ══ ACTIONS ══ */
    .actions-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 28px;
      padding: 28px;
      background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-btn {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid transparent;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border-color: var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000a4a 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer .divider {
      margin: 0 8px;
      opacity: 0.5;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 56px; }
      .task-banner { padding: 20px; }
      .task-banner-main h1 { font-size: 1.4rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 18px; }
      .nu-section-title { font-size: 1.2rem; }
      .meta-pill { min-width: 100px; flex: 1; }
      .checklist { padding: 20px; }
      .actions-row { padding: 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .step-card, .checklist, .contact-card { box-shadow: none; }
      .actions-row { display: none; }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-page-label">Inventory Receiving Workflow</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TASK BANNER -->
      <section class="task-banner">
        <div class="task-banner-main">
          <h1><span class="accent">Receive</span> &amp; Process Inventory — Last PO Order</h1>
          <p>reMarkable action item — log shipment, verify against PO, update inventory, reconcile discrepancies, and close out the receiving cycle.</p>
        </div>
        <div class="task-meta">
          <div class="meta-pill priority">
            <span class="label">Priority</span>
            <span class="value">High</span>
          </div>
          <div class="meta-pill status">
            <span class="label">Status</span>
            <span class="value">Open</span>
          </div>
          <div class="meta-pill">
            <span class="label">Owner</span>
            <span class="value">Aaron C. Norris</span>
          </div>
          <div class="meta-pill">
            <span class="label">Logged</span>
            <span class="value">2026-04-23</span>
          </div>
        </div>
      </section>

      <!-- BADGES -->
      <div class="badge-row">
        <div class="nu-badge"><span class="dot"></span>Warehouse Receiving</div>
        <div class="nu-badge"><span class="dot"></span>PO Reconciliation</div>
        <div class="nu-badge"><span class="dot"></span>Inventory Update</div>
        <div class="nu-badge"><span class="dot"></span>QuickBooks Close-Out</div>
      </div>

      <!-- PURPOSE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">Purpose</span> &amp; Scope</h2>
          <div class="nu-section-subtitle">What this workflow covers and why it matters</div>
        </div>
        <p style="font-size: 1rem; color: var(--nu-body-text); max-width: 920px;">
          Every purchase order issued by Norris Utilities® must be reconciled on arrival. Until inbound inventory is counted, inspected, and logged against the PO, we cannot commit product to customer orders with confidence — and unrecorded receipts create QuickBooks drift that shows up later as margin leak. This workflow defines the exact steps to close out the last PO order and return the warehouse to a clean, documented baseline.
        </p>
      </section>

      <!-- PO INFORMATION -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">PO</span> Information Required</h2>
          <div class="nu-section-subtitle">Capture these fields before touching the inventory</div>
        </div>
        <div class="po-grid">
          <div class="po-tile">
            <div class="po-label">PO Number</div>
            <div class="po-value">Pull from original PO file</div>
            <div class="po-note">Match to sent-date in email trail</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Vendor / Supplier</div>
            <div class="po-value">Per PO header</div>
            <div class="po-note">Boss Products, Skylift, Samson Rope, BSS, etc.</div>
          </div>
          <div class="po-tile">
            <div class="po-label">PO Date Issued</div>
            <div class="po-value">Per PO document</div>
            <div class="po-note">Used for lead-time tracking</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Expected Ship Date</div>
            <div class="po-value">Per vendor confirmation</div>
            <div class="po-note">Flag if arrival &gt; 7 days late</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Actual Receive Date</div>
            <div class="po-value">Date of this action</div>
            <div class="po-note">Record at time of unload</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Carrier / Tracking</div>
            <div class="po-value">Per BOL or packing slip</div>
            <div class="po-note">Required for freight-claim window</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Freight Cost Paid</div>
            <div class="po-value">Per freight invoice</div>
            <div class="po-note">Apply Ben's Formula if billing customer</div>
          </div>
          <div class="po-tile">
            <div class="po-label">Total Line Items</div>
            <div class="po-value">Count from PO</div>
            <div class="po-note">Each line reconciled individually</div>
          </div>
        </div>
        <div class="note-box">
          <h4>Before Unloading</h4>
          <p>Confirm the driver/dock crew is not rushed. A 15-minute careful count at receiving prevents a 3-hour reconciliation later. Do not sign the BOL as "received in good condition" until you have walked the freight.</p>
        </div>
      </section>

      <!-- RECEIVING WORKFLOW -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">Receiving</span> Workflow — Step by Step</h2>
          <div class="nu-section-subtitle">Run these in order. Skip no step.</div>
        </div>
        <div class="workflow">

          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Inspect on Arrival</h3>
            <p>Walk the freight before signing the BOL. Document everything with photos.</p>
            <ul>
              <li>Photograph all four sides of each pallet</li>
              <li>Note any crushed cartons, damp spots, or dunnage failure</li>
              <li>Check seal intact on trailer if applicable</li>
              <li>Photograph the BOL and packing slip</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Sign with Exceptions</h3>
            <p>Never sign "received in good condition" blindly. Note any damage on the BOL at the point of delivery.</p>
            <ul>
              <li>Write "subject to inspection" if counting is not feasible</li>
              <li>Write "visible damage noted — see photos" if warranted</li>
              <li>Freight-claim window starts at signature</li>
              <li>Retain driver's copy with your notes</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Unload &amp; Count</h3>
            <p>Physical count against the packing slip. Each SKU verified individually — no bulk approximation.</p>
            <ul>
              <li>Stage pallets in receiving zone, not main floor</li>
              <li>Count per SKU, not per carton</li>
              <li>Record shorts, overs, and wrong-SKU items</li>
              <li>Keep original packaging until count confirmed</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Reconcile Against PO</h3>
            <p>Line-by-line match: PO quantity vs. packing slip quantity vs. physical count.</p>
            <ul>
              <li>Highlight any mismatched line</li>
              <li>Flag unit-cost differences from PO price</li>
              <li>Verify correct SKU names (e.g., NU-BC-2851 vs. NU-BC-2834)</li>
              <li>Verify FlexPro Armor naming — never "FlexPro Armor Guard"</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <h3>Inspect for Quality</h3>
            <p>Random spot-check product condition. FlexPro Armor bucket covers get a seam and fitment check.</p>
            <ul>
              <li>Open at least 1 in every 10 cartons</li>
              <li>Check stitching, grommets, and dimensions</li>
              <li>Confirm size markings match SKU (28"×51", 28"×34", etc.)</li>
              <li>Set aside any unit showing defect for RMA</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">6</div>
            <h3>Log to Inventory System</h3>
            <p>Update the Norris Utilities® inventory record with actual received quantities — not PO quantities.</p>
            <ul>
              <li>Update master_tracker for each SKU</li>
              <li>Mark PO status: Received / Short / Over / Damaged</li>
              <li>Date-stamp the receipt</li>
              <li>Link to BOL photo and packing slip photo</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">7</div>
            <h3>Enter Bill in QuickBooks</h3>
            <p>Record the vendor bill against the PO. Only after the physical count reconciles.</p>
            <ul>
              <li>Match bill line items to received quantities</li>
              <li>Apply freight cost to correct COGS account</li>
              <li>Do NOT pay bill until discrepancies resolved</li>
              <li>File PDF of bill in vendor folder</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">8</div>
            <h3>Resolve Discrepancies</h3>
            <p>Contact the vendor within 48 hours for any short, over, damaged, or wrong-item finding.</p>
            <ul>
              <li>Document with photos and written count</li>
              <li>Request credit memo, replacement, or pick-up</li>
              <li>CC required vendor contacts per brand rules</li>
              <li>Note resolution in master_tracker</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">9</div>
            <h3>Release to Fulfillment</h3>
            <p>Inventory is committable to customer orders only after steps 1–8 are complete.</p>
            <ul>
              <li>Move stock from receiving zone to pick locations</li>
              <li>Update any pending customer quotes needing this stock</li>
              <li>Notify sales (Aaron) that stock is live</li>
              <li>Trigger any back-ordered shipments waiting on this PO</li>
            </ul>
          </div>

          <div class="step-card">
            <div class="step-number">10</div>
            <h3>Close PO &amp; File</h3>
            <p>Final housekeeping. The PO is closed only when all lines are reconciled and the bill is approved.</p>
            <ul>
              <li>Mark PO status: Closed</li>
              <li>File PO, BOL, packing slip, bill in vendor folder</li>
              <li>Push all receiving docs to ops.norrisutilities.com</li>
              <li>Log entry in daily journal</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">Quick</span> Completion Checklist</h2>
          <div class="nu-section-subtitle">Tick each item before marking this action complete</div>
        </div>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>PO document pulled and printed (or on-screen)</strong>
              <span>Last PO reference located in vendor folder or email trail.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>BOL signed with exceptions (if any)</strong>
              <span>Driver's copy retained. Photos captured before signature.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Physical count complete — every SKU</strong>
              <span>No line items left as "approximate." Shorts and overs written down.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Quality spot-check performed</strong>
              <span>Minimum 1 in 10 cartons opened. Defects staged separately.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Master tracker updated with actual received quantities</strong>
              <span>PO row status changed from "Shipped" to "Received" with date.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>QuickBooks bill entered against PO</strong>
              <span>Freight allocated correctly. Bill held from payment if discrepancies exist.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Discrepancy email sent to vendor (if applicable)</strong>
              <span>Photos attached. Required CC contacts included per brand rules.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Stock released and sales notified</strong>
              <span>Pending customer orders updated. Back-orders triggered.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>All documents filed and pushed to ops portal</strong>
              <span>PO, BOL, packing slip, bill, and photos committed to norris-ops repo.</span>
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-item-body">
              <strong>Daily journal entry logged</strong>
              <span>Date-stamped line in daily_journal.md with PO reference and outcome.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- DISCREPANCY HANDLING -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">Discrepancy</span> Handling Matrix</h2>
          <div class="nu-section-subtitle">Standard response for each finding</div>
        </div>
        <table class="disc-table">
          <thead>
            <tr>
              <th>Finding</th>
              <th>First Action</th>
              <th>Window</th>
              <th>Resolution Path</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Short shipment</td>
              <td>Recount, photograph packing slip vs. physical</td>
              <td>48 hours</td>
              <td>Vendor credit memo or replacement ship</td>
            </tr>
            <tr>
              <td>Over shipment</td>
              <td>Segregate extras, notify vendor</td>
              <td>48 hours</td>
              <td>Invoice extras, return at vendor cost, or keep at agreed credit</td>
            </tr>
            <tr>
              <td>Wrong SKU</td>
              <td>Quarantine, photograph labels &amp; product</td>
              <td>48 hours</td>
              <td>Vendor pickup + replacement ship</td>
            </tr>
            <tr>
              <td>Freight damage</td>
              <td>Photograph before opening, note on BOL</td>
              <td>Carrier-dependent (48 hrs typical)</td>
              <td>Freight claim + vendor replacement</td>
            </tr>
            <tr>
              <td>Quality defect</td>
              <td>Tag for RMA, keep packaging</td>
              <td>Per vendor warranty</td>
              <td>RMA number → return for credit or replacement</td>
            </tr>
            <tr>
              <td>Price mismatch vs. PO</td>
              <td>Flag bill, hold from payment</td>
              <td>Before bill pay date</td>
              <td>Vendor corrected invoice or written price confirmation</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- VENDOR CONTACTS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <h2 class="nu-section-title"><span class="first-word">Vendor</span> Contact Reference</h2>
          <div class="nu-section-subtitle">Use these contacts when opening a discrepancy ticket — CC rules are mandatory</div>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="role">Boss Products</div>
            <div class="name">Troy Gongwer + Thayne Grove</div>
            <div class="details">CC BOTH on every communication. No single-contact emails.</div>
          </div>
          <div class="contact-card">
            <div class="role">Samson Rope</div>
            <div class="name">Donna Poll + Sarah Daniels</div>
            <div class="details">CC BOTH on every communication. 30% margin applies.</div>
          </div>
          <div class="contact-card">
            <div class="role">Skylift</div>
            <div class="name">Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr</div>
            <div class="details">Nick Gordon — pricing / specs questions.</div>
          </div>
          <div class="contact-card">
            <div class="role">Bay Shore Systems</div>
            <div class="name">Herb Minatre (owner), Andy Barron (primary)</div>
            <div class="details">Andy Barron — travel/sales partner, primary receiving contact.</div>
          </div>
          <div class="contact-card">
            <div class="role">Irby Construction</div>
            <div class="name">Jared Lemoine</div>
            <div class="details">New primary. Gary Wiggs &amp; Scott Argyle retired — do not route to them.</div>
          </div>
          <div class="contact-card">
            <div class="role">Internal — Admin</div>
            <div class="name">Caroline Butler (CB)</div>
            <div class="details">Tier 1 trust. Customer-facing drafts need Aaron's review before send.</div>
          </div>
        </div>
      </section>

      <!-- ALERT -->
      <section class="nu-section">
        <div class="alert-box">
          <div class="alert-icon">!</div>
          <div>
            <h4>Do Not Bypass Any Step</h4>
            <p>Skipping the physical count, signing the BOL clean without inspection, or entering the QuickBooks bill before reconciling has caused prior margin loss and freight claims denied on procedural grounds. The 15 minutes saved is never worth the downstream cost.</p>
          </div>
        </div>

        <div class="note-box">
          <h4>Brand Rules Reminder</h4>
          <p>FlexPro Armor is the correct product name — never "FlexPro Armor Guard," and it is NOT a registered trademark (no ® symbol). Registered marks requiring ® on first use: Norris Utilities®, A Legacy of Commitment®, Phoenix Icon®.</p>
        </div>
      </section>

      <!-- ACTIONS -->
      <section class="nu-section">
        <div class="actions-row">
          <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Received%20-%20Reconciliation%20Complete" class="nu-btn nu-btn-primary">Email Aaron: PO Complete</a>
          <a href="tel:2055001343" class="nu-btn nu-btn-secondary">Call 205-500-1343</a>
          <a href="#" class="nu-btn nu-btn-secondary" onclick="window.print();return false;">Print This Workflow</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a>
      <span class="divider">|</span>
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
      <span class="divider">|</span>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>