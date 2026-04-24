<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reach Inventory Ordered on Last PO — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-success-green: #27AE60;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066EE 50%, #00AAFF 75%, var(--nu-cyan) 100%);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-phoenix-icon svg { width: 100%; height: 100%; }

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
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .page-eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title .blue-word { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
      max-width: 780px;
    }
    .page-date-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 18px;
      font-size: 0.9rem;
      color: #666;
    }
    .page-date-row span strong { color: var(--nu-dark-text); }

    /* ══ SECTION ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-section-title span { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-underline {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }
    .section-block { margin-bottom: 52px; }

    /* ══ STATUS CHEVRON BADGES ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-right: 8px;
    }
    .nu-badge.action { background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%); }
    .nu-badge.priority { background: linear-gradient(135deg, var(--nu-alert-red) 0%, #8B0000 100%); }

    /* ══ KPI ROW ══ */
    .kpi-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .kpi-tile {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 4px;
    }
    .kpi-tile .label {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .kpi-tile .value {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-blue);
      line-height: 1.1;
    }
    .kpi-tile .sub {
      font-size: 0.82rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ TABLE ══ */
    .ordered-table-wrap {
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    table.nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    table.nu-table thead th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    table.nu-table thead th:last-child { border-right: none; }
    table.nu-table tbody td {
      padding: 13px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:last-child td { border-bottom: none; }
    table.nu-table tbody tr:hover { background: #FAFAFC; }
    .po-sku {
      font-family: 'SF Mono', Menlo, Consolas, monospace;
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.88rem;
    }
    .qty-cell {
      font-weight: 900;
      color: var(--nu-dark-text);
      text-align: center;
    }
    .status-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .status-pill.ordered { background: #FFF4D9; color: #8B6914; }
    .status-pill.arrived { background: #D6F5E3; color: #1D6E3A; }
    .status-pill.partial { background: #E5E8FF; color: var(--nu-blue); }
    .status-pill.overdue { background: #FBD8D3; color: var(--nu-alert-red); }

    /* ══ ACTION CARD ══ */
    .action-card {
      background: linear-gradient(135deg, #F7F9FF 0%, #EEF3FF 100%);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 20px;
      position: relative;
    }
    .action-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .action-card h3 .step-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.85rem;
      margin-right: 10px;
      vertical-align: middle;
    }
    .action-card .owner-line {
      font-size: 0.82rem;
      color: #666;
      margin-bottom: 12px;
      padding-left: 40px;
    }
    .action-card ul {
      list-style: none;
      padding-left: 40px;
    }
    .action-card ul li {
      position: relative;
      padding: 6px 0 6px 20px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .action-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      top: 2px;
    }

    /* ══ CALL TO ACTION BAR ══ */
    .cta-bar {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-top: 40px;
      box-shadow: 0 8px 28px rgba(0,0,255,0.15);
    }
    .cta-bar .cta-text h4 {
      font-weight: 900;
      font-size: 1.35rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .cta-bar .cta-text p {
      font-size: 0.95rem;
      opacity: 0.92;
    }
    .cta-bar .cta-buttons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .btn-cta {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 5px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
      text-transform: uppercase;
    }
    .btn-cta.primary {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .btn-cta.primary:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.2); }
    .btn-cta.secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .btn-cta.secondary:hover { background: rgba(255,255,255,0.15); }

    /* ══ SUPPLIER CARDS ══ */
    .supplier-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .supplier-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
    }
    .supplier-card h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .supplier-card .tier {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .supplier-card .contact-lines {
      font-size: 0.9rem;
      line-height: 1.7;
    }
    .supplier-card .contact-lines strong { color: var(--nu-blue); }
    .supplier-card .note {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
    }

    /* ══ EMAIL / PHONE SCRIPT ══ */
    .script-block {
      background: #FAFBFE;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 6px;
      font-family: Georgia, 'Times New Roman', serif;
      color: #2A2A3E;
      font-size: 0.95rem;
      line-height: 1.75;
      margin-bottom: 16px;
    }
    .script-block .script-label {
      display: block;
      font-family: var(--font-primary);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
    }
    .script-block p { margin-bottom: 10px; }
    .script-block .signoff { margin-top: 14px; }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 28px;
      border-left: 2px solid var(--nu-medium-gray);
      margin-top: 8px;
    }
    .timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .timeline-item:last-child { padding-bottom: 0; }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -35px;
      top: 5px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue);
    }
    .timeline-item.done::before { background: var(--nu-success-green); box-shadow: 0 0 0 2px var(--nu-success-green); }
    .timeline-item.now::before { background: var(--nu-cyan); box-shadow: 0 0 0 2px var(--nu-cyan); animation: pulse 2s infinite; }
    .timeline-item .tl-date {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }
    .timeline-item .tl-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .timeline-item .tl-body {
      font-size: 0.9rem;
      color: #555;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.25); opacity: 0.6; }
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
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
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
      margin: 14px auto;
      opacity: 0.5;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 20px 60px; }
      .page-title { font-size: 1.7rem; }
      .cta-bar { flex-direction: column; align-items: flex-start; }
      .action-card .owner-line, .action-card ul { padding-left: 0; }
      table.nu-table { font-size: 0.82rem; }
      table.nu-table thead th, table.nu-table tbody td { padding: 10px 8px; }
    }

    @media print {
      body { background: white; }
      .nu-header, .cta-bar, .nu-footer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .cta-bar { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">reMarkable Action Item · Inventory Reconciliation</div>
        <h1 class="page-title"><span class="blue-word">Reach</span> Inventory Ordered on Last PO</h1>
        <p class="page-subtitle">
          Verify delivery status, reconcile received quantities against the most recent purchase orders, and close the gap on anything still open. This action ensures every item paid for is accounted for, stocked, or escalated for resolution.
        </p>
        <div class="page-date-row">
          <span><strong>Action Date:</strong> April 24, 2026</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Priority:</strong> High — affects open customer commitments</span>
          <span><strong>Source:</strong> reMarkable action capture</span>
        </div>
      </div>

      <!-- KPI ROW -->
      <div class="kpi-row">
        <div class="kpi-tile">
          <div class="label">Last PO Issued</div>
          <div class="value">1/12/26</div>
          <div class="sub">Skylift — 6 units</div>
        </div>
        <div class="kpi-tile">
          <div class="label">Units on Last PO</div>
          <div class="value">6</div>
          <div class="sub">5× SBA40i-LW + 1× SBA47i-MH</div>
        </div>
        <div class="kpi-tile">
          <div class="label">Lead Time Baseline</div>
          <div class="value">~3 wks</div>
          <div class="sub">Per Nick Gordon, Skylift</div>
        </div>
        <div class="kpi-tile">
          <div class="label">PO Value</div>
          <div class="value">$1,091,402.50</div>
          <div class="sub">Skylift bucket trucks</div>
        </div>
      </div>

      <!-- SECTION 1 -->
      <div class="section-block">
        <div class="nu-section-title">Open <span>Purchase Orders — Status Check</span></div>
        <div class="nu-section-underline"></div>

        <div class="ordered-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width:14%;">PO Date</th>
                <th style="width:18%;">Supplier</th>
                <th style="width:18%;">SKU / Model</th>
                <th style="width:28%;">Description</th>
                <th style="width:8%; text-align:center;">Qty</th>
                <th style="width:14%;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/12/2026</td>
                <td>Skylift</td>
                <td class="po-sku">SBA40i-LW</td>
                <td>40' working height bucket truck, lightweight chassis</td>
                <td class="qty-cell">5</td>
                <td><span class="status-pill ordered">Ordered</span></td>
              </tr>
              <tr>
                <td>01/12/2026</td>
                <td>Skylift</td>
                <td class="po-sku">SBA47i-MH</td>
                <td>47' working height, material handler option</td>
                <td class="qty-cell">1</td>
                <td><span class="status-pill ordered">Ordered</span></td>
              </tr>
              <tr>
                <td>Recent</td>
                <td>Boss Products</td>
                <td class="po-sku">NU-BC-2851</td>
                <td>FlexPro Armor 2-Man bucket cover (28"×51")</td>
                <td class="qty-cell">TBC</td>
                <td><span class="status-pill partial">Confirm w/ Troy</span></td>
              </tr>
              <tr>
                <td>Recent</td>
                <td>Boss Products</td>
                <td class="po-sku">NU-BC-2834</td>
                <td>FlexPro Armor 1.5-Man bucket cover (28"×34")</td>
                <td class="qty-cell">TBC</td>
                <td><span class="status-pill partial">Confirm w/ Troy</span></td>
              </tr>
              <tr>
                <td>Recent</td>
                <td>Samson Rope</td>
                <td class="po-sku">Samson — open PO</td>
                <td>Authorized distributor stock replenishment</td>
                <td class="qty-cell">TBC</td>
                <td><span class="status-pill partial">Confirm w/ Donna</span></td>
              </tr>
              <tr>
                <td>Recent</td>
                <td>Bay Shore Systems</td>
                <td class="po-sku">BSS — drill rig</td>
                <td>SE territory rep stock / customer-specific</td>
                <td class="qty-cell">TBC</td>
                <td><span class="status-pill partial">Confirm w/ Andy</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size:0.88rem; color:#666; font-style:italic;">
          Quantities marked "TBC" require confirmation against the supplier-side order system. The action item is to reach each supplier and lock these numbers against delivered inventory.
        </p>
      </div>

      <!-- SECTION 2 — Step-by-step -->
      <div class="section-block">
        <div class="nu-section-title">Action <span>Plan — Step by Step</span></div>
        <div class="nu-section-underline"></div>

        <div class="action-card">
          <h3><span class="step-num">1</span>Pull Every Open PO From the Tracker</h3>
          <div class="owner-line">Owner: Aaron · ETA: 15 min · Tool: master_tracker + QuickBooks</div>
          <ul>
            <li>Open <strong>~/norris-ops/internal/master_tracker.html</strong> and filter rows where status = "Ordered" or "In Transit"</li>
            <li>Cross-check against QuickBooks bill records for each supplier — every PO should have a matching open bill or expected receipt</li>
            <li>Flag any PO older than its expected lead time (Skylift ~3 weeks, FlexPro Armor ~2 weeks, Samson ~1 week) as overdue</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">2</span>Reach Each Supplier — Confirm Ship/Receive Status</h3>
          <div class="owner-line">Owner: Aaron · ETA: 45 min · Channel: phone first, email follow-up</div>
          <ul>
            <li><strong>Skylift</strong> — Nick Gordon (pricing/specs), Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr. Ask for build-status on 5× SBA40i-LW and 1× SBA47i-MH from the 1/12/26 PO</li>
            <li><strong>Boss Products / FlexPro Armor</strong> — email Troy Gongwer and Thayne Grove together. Ask for ship dates and tracking on any open NU-BC-2851 / NU-BC-2834 orders</li>
            <li><strong>Samson Rope</strong> — email Donna Poll and Sarah Daniels together. Request an open-order summary for the Norris Utilities® account</li>
            <li><strong>Bay Shore Systems</strong> — contact Andy Barron (primary). CC Herb Minatre only if escalation is needed</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">3</span>Reconcile Received Against Ordered</h3>
          <div class="owner-line">Owner: Aaron · ETA: 30 min · Tool: warehouse receiving log + UPS tracking</div>
          <ul>
            <li>For every PO line, compare ordered qty vs. received qty in the warehouse log</li>
            <li>Check UPS tracking on anything marked "In Transit" — if tracking shows delivered but nothing was received, flag for CB to investigate at the warehouse</li>
            <li>Document exact variance (qty short, qty over, or wrong SKU) on a per-PO basis</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">4</span>Allocate Inventory to Open Customer Orders</h3>
          <div class="owner-line">Owner: Aaron · ETA: 20 min · Tool: deals-pipeline + shipments ledger</div>
          <ul>
            <li>Cross-reference received inventory against open customer quotes and orders in the deals pipeline</li>
            <li>Any inbound Skylift unit must be matched to its end customer before CB begins pre-delivery paperwork</li>
            <li>FlexPro Armor covers received — allocate to Coy Crosby / Dominion backlog first, then fulfill remaining open quotes</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">5</span>Close Any Gaps — Short-ship, Backorder, or Invoice Correction</h3>
          <div class="owner-line">Owner: Aaron · ETA: variable · Escalation: direct supplier contact</div>
          <ul>
            <li>If a supplier short-shipped: request remainder with confirmed ship date or credit memo for the shortfall</li>
            <li>If a supplier over-shipped: confirm whether to keep-and-pay or return. Document the decision in the PO row</li>
            <li>If the PO is fully received: mark the row "Arrived — Complete" in master_tracker and file the packing slip with the supplier folder</li>
          </ul>
        </div>

        <div class="action-card">
          <h3><span class="step-num">6</span>Update Master Tracker + Push to GitHub</h3>
          <div class="owner-line">Owner: Aaron · ETA: 10 min · Destination: ops.norrisutilities.com</div>
          <ul>
            <li>Update each PO row in ~/norris-ops/internal/master_tracker.html with new status, received date, and any notes</li>
            <li>Copy file, commit with descriptive message, and push to GitHub so the ops portal reflects truth</li>
            <li>Send Telegram confirmation to yourself: "PO reconciliation complete — [N] POs closed, [N] open."</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 3 — Suppliers -->
      <div class="section-block">
        <div class="nu-section-title">Supplier <span>Contact Desk</span></div>
        <div class="nu-section-underline"></div>

        <div class="supplier-grid">
          <div class="supplier-card">
            <h4>Skylift</h4>
            <span class="tier">Tier 1 — Bucket Trucks</span>
            <div class="contact-lines">
              <strong>Nick Gordon</strong> — pricing / specs<br>
              <strong>Andrew Jarmoszuk</strong> — sales<br>
              <strong>Dale Williams</strong> — sales<br>
              <strong>Nick Jarmoszuk Jr.</strong> — operations
            </div>
            <div class="note">Last PO 1/12/26 for 6 units, $1,091,402.50. Lead time ~3 weeks per Nick.</div>
          </div>

          <div class="supplier-card">
            <h4>Boss Products — FlexPro Armor</h4>
            <span class="tier">Tier 1 — 50% Margin</span>
            <div class="contact-lines">
              <strong>Troy Gongwer</strong> — primary<br>
              <strong>Thayne Grove</strong> — primary<br>
              <em>CC both on every email — no exceptions.</em>
            </div>
            <div class="note">FlexPro Armor — never written with ®. Bucket covers handmade in USA. SKUs: NU-BC-2851, NU-BC-2834, combos.</div>
          </div>

          <div class="supplier-card">
            <h4>Samson Rope</h4>
            <span class="tier">Authorized Distributor — 30% Margin</span>
            <div class="contact-lines">
              <strong>Donna Poll</strong> — account rep<br>
              <strong>Sarah Daniels</strong> — account rep<br>
              <em>CC both on every email — no exceptions.</em>
            </div>
            <div class="note">Confirm open orders and request an account-level open PO summary.</div>
          </div>

          <div class="supplier-card">
            <h4>Bay Shore Systems</h4>
            <span class="tier">SE Territory Rep</span>
            <div class="contact-lines">
              <strong>Andy Barron</strong> — primary contact<br>
              <strong>Herb Minatre</strong> — owner / escalation only
            </div>
            <div class="note">Drill rigs. Travel/sales partner. Contact Andy first.</div>
          </div>
        </div>
      </div>

      <!-- SECTION 4 — Scripts -->
      <div class="section-block">
        <div class="nu-section-title">Outreach <span>Scripts — Ready to Send</span></div>
        <div class="nu-section-underline"></div>

        <div class="script-block">
          <span class="script-label">Email · Skylift — Nick Gordon</span>
          <p>Nick —</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Checking in on the January 12 PO — the five SBA40i-LW units and the one SBA47i-MH. Can you confirm where each unit is in the build cycle and give me current ship dates?</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Anything already shipped, please send tracking so I can stage pre-delivery and notify the end customer. Anything still in production, a realistic ship window works.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Appreciate the help getting these closed out.</p>
          <p class="signoff">Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
        </div>

        <div class="script-block">
          <span class="script-label">Email · Boss Products — Troy &amp; Thayne</span>
          <p>Troy, Thayne —</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Running a reconciliation on open POs. Can y'all send me a status on every open Norris Utilities order — quantities by SKU (NU-BC-2851, NU-BC-2834, combos), ship dates, and tracking where available?</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;I want to make sure everything ordered is either on the dock or in transit. If anything is delayed, flag it so I can set customer expectations.</p>
          <p class="signoff">Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
        </div>

        <div class="script-block">
          <span class="script-label">Email · Samson Rope — Donna &amp; Sarah</span>
          <p>Donna, Sarah —</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Would y'all run an open-order report on the Norris Utilities® account and send it my way? I want to verify every item I've paid for has either shipped or has a firm ship date.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Happy to hop on a quick call if it's easier to walk through.</p>
          <p class="signoff">Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
        </div>
      </div>

      <!-- SECTION 5 — Timeline -->
      <div class="section-block">
        <div class="nu-section-title">Execution <span>Timeline</span></div>
        <div class="nu-section-underline"></div>

        <div class="timeline">
          <div class="timeline-item done">
            <div class="tl-date">2026-04-24 · Morning</div>
            <div class="tl-title">Action captured on reMarkable</div>
            <div class="tl-body">Aaron wrote "Reach inventory ordered on last PO" on reMarkable tablet. Item synced into agent queue.</div>
          </div>
          <div class="timeline-item now">
            <div class="tl-date">2026-04-24 · Today</div>
            <div class="tl-title">Pull open PO list + start supplier outreach</div>
            <div class="tl-body">Run Step 1 (15 min) and Step 2 (45 min). Send the three scripted emails and call Nick Gordon direct if no same-day response.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">2026-04-25 · Friday</div>
            <div class="tl-title">Supplier replies expected</div>
            <div class="tl-body">Log replies against PO rows. Flag any overdue or silent suppliers for a second-touch escalation call.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">2026-04-27 · Monday</div>
            <div class="tl-title">Reconcile received vs. ordered</div>
            <div class="tl-body">Steps 3 and 4 — pull warehouse log, match tracking, allocate received inventory to open customer orders.</div>
          </div>
          <div class="timeline-item">
            <div class="tl-date">2026-04-28 · Tuesday</div>
            <div class="tl-title">Close gaps, update tracker, push live</div>
            <div class="tl-body">Steps 5 and 6 — resolve short-ships, update master_tracker, commit and push to ops.norrisutilities.com.</div>
          </div>
        </div>
      </div>

      <!-- CTA BAR -->
      <div class="cta-bar">
        <div class="cta-text">
          <h4>Ready to start the reconciliation?</h4>
          <p>Open the master tracker, then send the three supplier emails in the next 60 minutes.</p>
        </div>
        <div class="cta-buttons">
          <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Reconciliation%20Started" class="btn-cta primary">Log to Email</a>
          <a href="tel:2055001343" class="btn-cta secondary">Call Aaron</a>
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