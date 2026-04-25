<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contract Addendum Review: Basement Water Intrusion — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-warning-red: #C8102E;
      --nu-warning-amber: #F59E0B;
      --nu-success-green: #16A34A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    /* Ghost phoenix watermark in header */
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
    .nu-phoenix-ghost svg { width: 100%; height: auto; fill: white; }

    .nu-header-content { position: relative; z-index: 2; }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 24px rgba(0,0,0,0.35);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }
    .nu-header-doc-label {
      margin-top: 26px;
      display: inline-block;
      padding: 8px 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--nu-white);
    }

    /* ══ ASYMMETRIC WHITE CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
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
      padding: 60px 40px;
    }

    /* ══ DOCUMENT TITLE BAR ══ */
    .doc-title-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
      margin-bottom: 40px;
    }
    .doc-title-bar h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.15rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .doc-title-bar h1 span { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      text-align: right;
      line-height: 1.65;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* ══ STATUS STRIP ══ */
    .status-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 0;
      margin-bottom: 40px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    }
    .status-cell {
      flex: 1 1 200px;
      padding: 18px 22px;
      background: var(--nu-white);
      border-right: 1px solid var(--nu-medium-gray);
    }
    .status-cell:last-child { border-right: none; }
    .status-cell.priority { background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%); }
    .status-cell.action { background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); }
    .status-cell .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .status-cell .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .status-cell.priority .value { color: var(--nu-warning-red); }
    .status-cell.action .value { color: #b45309; }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SUMMARY BOX ══ */
    .summary-box {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    .summary-box p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .summary-box p + p { margin-top: 12px; }

    /* ══ REVIEW CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      gap: 14px;
    }
    .checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 16px 20px 16px 18px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .checklist li:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .checklist .num {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.82rem;
    }
    .checklist .body strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 4px;
    }
    .checklist .body span {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ KEY ITEMS TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 6px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) { background: #fafafd; }
    .nu-table .col-clause { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }
    .nu-table .col-risk-high { color: var(--nu-warning-red); font-weight: 700; }
    .nu-table .col-risk-med { color: #b45309; font-weight: 700; }
    .nu-table .col-risk-low { color: var(--nu-success-green); font-weight: 700; }

    /* ══ ALERT CALLOUT ══ */
    .alert-callout {
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
      border: 1px solid #fca5a5;
      border-left: 5px solid var(--nu-warning-red);
      border-radius: 4px;
      padding: 22px 26px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
    }
    .alert-icon {
      flex-shrink: 0;
      width: 40px; height: 40px;
      background: var(--nu-warning-red);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .alert-callout h3 {
      color: #991b1b;
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .alert-callout p {
      color: #7f1d1d;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* ══ DECISION GRID ══ */
    .decision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .decision-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .decision-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.1);
    }
    .decision-card .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .badge.sign { background: #dcfce7; color: #166534; }
    .badge.negotiate { background: #fef3c7; color: #92400e; }
    .badge.reject { background: #fee2e2; color: #991b1b; }
    .decision-card h4 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .decision-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    /* ══ ACTION STEPS ══ */
    .action-steps {
      counter-reset: step-counter;
      list-style: none;
      padding: 0;
    }
    .action-steps li {
      counter-increment: step-counter;
      position: relative;
      padding: 18px 22px 18px 78px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .action-steps li::before {
      content: counter(step-counter);
      position: absolute;
      top: 50%;
      left: 18px;
      transform: translateY(-50%);
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.15rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .action-steps li strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 3px;
    }
    .action-steps li span {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ SIGNATURE BLOCK ══ */
    .signature-block {
      margin-top: 28px;
      padding: 30px 32px;
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border: 2px dashed var(--nu-blue);
      border-radius: 8px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .signature-block .sig-field {
      border-bottom: 2px solid var(--nu-dark-text);
      padding-bottom: 6px;
      min-height: 50px;
      display: flex;
      align-items: flex-end;
    }
    .signature-block .sig-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-body-text);
      margin-top: 8px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
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
      letter-spacing: 0.03em;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }
    .nu-footer-name {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-white);
      letter-spacing: 0.05em;
      margin-bottom: 4px;
    }
    .nu-footer-title {
      font-size: 0.88rem;
      color: rgba(255,255,255,0.75);
      margin-bottom: 12px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: var(--nu-white); }
    .nu-footer-confidential {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title-bar h1 { font-size: 1.55rem; }
      .doc-meta { text-align: left; }
      .checklist { grid-template-columns: 1fr; }
      .signature-block { grid-template-columns: 1fr; gap: 24px; }
      .status-cell { flex: 1 1 100%; border-right: none; border-bottom: 1px solid var(--nu-medium-gray); }
      .status-cell:last-child { border-bottom: none; }
      .nu-table th, .nu-table td { padding: 10px 12px; font-size: 0.84rem; }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .checklist li, .decision-card, .action-steps li { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-section { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-ghost">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z"/>
      </svg>
    </div>
    <div class="nu-header-content">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-header-doc-label">Contract Addendum Review</div>
    </div>
  </header>

  <!-- WHITE ASYMMETRIC CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE BAR -->
      <div class="doc-title-bar">
        <h1><span>Examine</span> Contract Addendum:<br>Basement Water Intrusion</h1>
        <div class="doc-meta">
          <strong>Document ID:</strong> NU-LEGAL-2026-0425<br>
          <strong>Date Prepared:</strong> April 25, 2026<br>
          <strong>Prepared For:</strong> Aaron C. Norris, Founder &amp; CEO<br>
          <strong>Status:</strong> Pending Review
        </div>
      </div>

      <!-- STATUS STRIP -->
      <div class="status-strip">
        <div class="status-cell priority">
          <div class="label">Priority</div>
          <div class="value">High — Review Before Signature</div>
        </div>
        <div class="status-cell action">
          <div class="label">Action Required</div>
          <div class="value">Examine &amp; Annotate</div>
        </div>
        <div class="status-cell">
          <div class="label">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
        <div class="status-cell">
          <div class="label">Source</div>
          <div class="value">reMarkable Action Item</div>
        </div>
      </div>

      <!-- PURPOSE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Purpose</span> <span class="rest">of This Review</span></h2>
        <div class="summary-box">
          <p>This worksheet supports the careful examination of a contract addendum addressing <strong>Basement Water Intrusion</strong>. The addendum modifies an existing agreement to allocate responsibility, scope of repair, warranty coverage, and remediation obligations relating to water entering a basement structure.</p>
          <p>Use this document to read the addendum line-by-line, capture concerns in the margins, and reach a clear sign / negotiate / reject decision before any signature is applied. Nothing here replaces legal counsel — it is a structured pass to ensure no clause is signed without understanding.</p>
        </div>
      </section>

      <!-- REVIEW CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Review</span> <span class="rest">Checklist — 10 Points to Verify</span></h2>
        <ul class="checklist">
          <li>
            <div class="num">1</div>
            <div class="body">
              <strong>Scope of Water Intrusion Defined</strong>
              <span>Does the addendum specify exactly what counts as "basement water intrusion" — seepage, active leaks, hydrostatic pressure, sewage backup, or all of the above?</span>
            </div>
          </li>
          <li>
            <div class="num">2</div>
            <div class="body">
              <strong>Responsible Party Identified</strong>
              <span>Is responsibility for diagnosis, repair, and recurrence clearly assigned — seller, buyer, contractor, or shared?</span>
            </div>
          </li>
          <li>
            <div class="num">3</div>
            <div class="body">
              <strong>Inspection &amp; Documentation Standard</strong>
              <span>Is a licensed inspector or waterproofing specialist required to certify the condition before and after repair?</span>
            </div>
          </li>
          <li>
            <div class="num">4</div>
            <div class="body">
              <strong>Repair Method &amp; Specification</strong>
              <span>Is the repair method named (interior drain tile, exterior excavation, sump system, sealant injection) or left vague?</span>
            </div>
          </li>
          <li>
            <div class="num">5</div>
            <div class="body">
              <strong>Warranty Term &amp; Transferability</strong>
              <span>What length of warranty is provided on the work? Does the warranty transfer with property ownership?</span>
            </div>
          </li>
          <li>
            <div class="num">6</div>
            <div class="body">
              <strong>Cost Allocation &amp; Caps</strong>
              <span>Is there a dollar cap on remediation costs? Who pays if cost exceeds the cap — and what is the buyer's exit if it does?</span>
            </div>
          </li>
          <li>
            <div class="num">7</div>
            <div class="body">
              <strong>Mold &amp; Indirect Damage Coverage</strong>
              <span>Is consequential damage included — flooring, drywall, mold remediation, contents, HVAC components?</span>
            </div>
          </li>
          <li>
            <div class="num">8</div>
            <div class="body">
              <strong>Timeline &amp; Closing Impact</strong>
              <span>Is there a deadline for completion? What happens to closing if the repair is not finished on time?</span>
            </div>
          </li>
          <li>
            <div class="num">9</div>
            <div class="body">
              <strong>Disclosure Tie-In</strong>
              <span>Does the addendum reconcile with the seller's prior disclosure statement, or does it contradict earlier representations?</span>
            </div>
          </li>
          <li>
            <div class="num">10</div>
            <div class="body">
              <strong>Termination &amp; Remedy Rights</strong>
              <span>If the issue cannot be cured, may the buyer terminate without penalty and recover earnest money?</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- KEY CLAUSES TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Key</span> <span class="rest">Clauses to Locate &amp; Mark Up</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Clause</th>
                <th>What to Look For</th>
                <th>Why It Matters</th>
                <th>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="col-clause">As-Is Waiver</td>
                <td>Language stating the property is accepted as-is despite the water issue.</td>
                <td>Can extinguish the buyer's right to demand any repair after closing.</td>
                <td class="col-risk-high">High</td>
              </tr>
              <tr>
                <td class="col-clause">Limit of Liability</td>
                <td>A capped seller liability or a release of claims after closing.</td>
                <td>If the cap is too low, the buyer absorbs cost overruns alone.</td>
                <td class="col-risk-high">High</td>
              </tr>
              <tr>
                <td class="col-clause">Cure Period</td>
                <td>Number of days the seller has to repair before buyer's options trigger.</td>
                <td>A vague or excessive period delays closing or weakens leverage.</td>
                <td class="col-risk-med">Medium</td>
              </tr>
              <tr>
                <td class="col-clause">Inspector Selection</td>
                <td>Who chooses the inspector and pays for re-inspection.</td>
                <td>Seller-chosen inspectors often produce favorable findings.</td>
                <td class="col-risk-med">Medium</td>
              </tr>
              <tr>
                <td class="col-clause">Indemnification</td>
                <td>Mutual indemnity for future water-related claims.</td>
                <td>One-sided indemnity shifts long-tail liability to the buyer.</td>
                <td class="col-risk-high">High</td>
              </tr>
              <tr>
                <td class="col-clause">Warranty Carve-Outs</td>
                <td>Exclusions for "acts of God," extreme weather, grading changes.</td>
                <td>Broad carve-outs can render a warranty meaningless on the most common cause.</td>
                <td class="col-risk-med">Medium</td>
              </tr>
              <tr>
                <td class="col-clause">Escrow Holdback</td>
                <td>Funds held in escrow until repair completion is verified.</td>
                <td>Strong protection — confirm amount is sufficient and release conditions are clear.</td>
                <td class="col-risk-low">Low (favorable)</td>
              </tr>
              <tr>
                <td class="col-clause">Severability</td>
                <td>Whether a void clause invalidates the whole addendum or stands alone.</td>
                <td>Affects fallback position if any provision is found unenforceable.</td>
                <td class="col-risk-low">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ALERT -->
      <section class="nu-section">
        <div class="alert-callout">
          <div class="alert-icon">!</div>
          <div>
            <h3>Do Not Sign Without Legal Counsel Review</h3>
            <p>Basement water intrusion addenda commonly contain language that releases the seller from future liability for mold, foundation movement, and consequential damages. Have a real-estate attorney verify the indemnity, warranty, and as-is provisions before signing. The cost of an attorney review is small relative to the cost of a recurring intrusion event.</p>
          </div>
        </div>
      </section>

      <!-- DECISION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Decision</span> <span class="rest">Framework</span></h2>
        <div class="decision-grid">
          <div class="decision-card">
            <span class="badge sign">Sign</span>
            <h4>If All Conditions Met</h4>
            <p>Repair scope and method are specified, transferable warranty of at least one full year is included, escrow holdback covers repair plus 25% contingency, and indemnity language is mutual.</p>
          </div>
          <div class="decision-card">
            <span class="badge negotiate">Negotiate</span>
            <h4>If Most Conditions Met</h4>
            <p>One or two protections are missing — propose redlines: extend warranty, raise the cap, add mold and consequential coverage, or convert a one-sided indemnity to mutual. Counter-sign only after revisions.</p>
          </div>
          <div class="decision-card">
            <span class="badge reject">Reject</span>
            <h4>If Critical Risks Stand</h4>
            <p>Reject if the addendum forces an as-is acceptance, omits a cure period, releases the seller from prior disclosure obligations, or bars the buyer's right to terminate when repair fails. Walk before signing.</p>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Action</span> <span class="rest">Steps — In Order</span></h2>
        <ol class="action-steps">
          <li>
            <strong>Read the entire addendum twice — once for flow, once for line-by-line markup.</strong>
            <span>Highlight every defined term, dollar amount, and date. Circle any verb that allocates responsibility (shall, may, must, will).</span>
          </li>
          <li>
            <strong>Walk the 10-point checklist above and write a yes / no / unclear next to each item.</strong>
            <span>Anything marked "unclear" is a question for either the seller's counsel or your own attorney.</span>
          </li>
          <li>
            <strong>Cross-reference the addendum against the original purchase agreement and seller disclosure.</strong>
            <span>Look for contradictions. The addendum should clarify, not silently overwrite, the underlying contract.</span>
          </li>
          <li>
            <strong>Obtain a written scope and price quote from a qualified waterproofing contractor.</strong>
            <span>This number anchors any escrow holdback or seller credit negotiation.</span>
          </li>
          <li>
            <strong>Send the marked-up draft to a real-estate attorney for review and proposed redlines.</strong>
            <span>Allow 48–72 hours for a thorough legal pass. Do not accept verbal-only legal advice.</span>
          </li>
          <li>
            <strong>Negotiate, finalize, and require initials on every page — not just the signature block.</strong>
            <span>Page-level initials prevent later disputes over which version was actually agreed to.</span>
          </li>
          <li>
            <strong>Retain a fully executed copy with all attachments in long-term storage.</strong>
            <span>Save digital and printed copies. Recurrence claims may surface years later.</span>
          </li>
        </ol>
      </section>

      <!-- SIGNATURE BLOCK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Reviewer</span> <span class="rest">Acknowledgment</span></h2>
        <p style="margin-bottom: 8px; color: var(--nu-body-text);">By signing below, the reviewer confirms the addendum was examined against the checklist above and a decision recorded.</p>
        <div class="signature-block">
          <div>
            <div class="sig-field"></div>
            <div class="sig-label">Reviewer Signature</div>
          </div>
          <div>
            <div class="sig-field"></div>
            <div class="sig-label">Date of Review</div>
          </div>
          <div>
            <div class="sig-field"></div>
            <div class="sig-label">Decision (Sign / Negotiate / Reject)</div>
          </div>
          <div>
            <div class="sig-field"></div>
            <div class="sig-label">Attorney Consulted (Name)</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-name">Aaron C. Norris</div>
    <div class="nu-footer-title">Founder &amp; CEO | Norris Utilities®, LLC</div>
    <div class="nu-footer-contact">
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-confidential">Confidential — Internal Review Document</div>
  </footer>

</body>
</html>