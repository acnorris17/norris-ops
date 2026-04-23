<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation — Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C91E1E;
      --nu-warn-amber: #E08A00;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.92;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* Ghost phoenix watermark */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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

    /* ══ DOCUMENT META BAR ══ */
    .nu-doc-meta {
      background: var(--nu-light-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 14px 40px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
      display: flex;
      flex-wrap: wrap;
      gap: 20px 40px;
      justify-content: center;
    }
    .nu-doc-meta strong {
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* ══ SECTION TITLE ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 20px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-divider {
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* ══ PRIORITY BANNER ══ */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 8px;
      margin-bottom: 40px;
      border-left: 6px solid var(--nu-alert-red);
      box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    }
    .nu-priority-banner .icon {
      font-size: 2rem;
      line-height: 1;
      color: var(--nu-cyan);
      flex-shrink: 0;
    }
    .nu-priority-banner .label {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .nu-priority-banner .message {
      font-size: 1.05rem;
      font-weight: 400;
      line-height: 1.5;
    }

    /* ══ OVERVIEW GRID ══ */
    .nu-overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-bottom: 48px;
    }
    .nu-overview-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-overview-card .label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-overview-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .nu-overview-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 6px;
      font-weight: 400;
    }

    /* ══ STEP BLOCK ══ */
    .nu-step-list {
      list-style: none;
      padding: 0;
      margin: 0 0 48px 0;
      counter-reset: step-counter;
    }
    .nu-step {
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px 24px 88px;
      margin-bottom: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      counter-increment: step-counter;
    }
    .nu-step::before {
      content: counter(step-counter, decimal-leading-zero);
      position: absolute;
      top: 22px;
      left: 22px;
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.15rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0,0,255,0.25);
    }
    .nu-step h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .nu-step ul {
      margin: 8px 0 0 18px;
      padding: 0;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .nu-step ul li {
      margin-bottom: 4px;
    }
    .nu-step .owner-tag {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-navy);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 3px;
      margin-top: 6px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* ══ CONTRACTOR TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      margin-bottom: 48px;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
      background: var(--nu-white);
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td {
      border-bottom: none;
    }
    .nu-table tbody tr:nth-child(even) {
      background: var(--nu-light-gray);
    }
    .nu-table .qual {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      display: block;
      margin-top: 3px;
    }

    /* ══ INSPECTION CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-cyan);
      padding: 26px 30px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 48px;
    }
    .nu-checklist h3 {
      font-weight: 900;
      color: var(--nu-navy);
      font-size: 1.15rem;
      margin-bottom: 14px;
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 8px 0 8px 32px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      border-bottom: 1px dashed rgba(0,0,0,0.08);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ RISK / COST PANEL ══ */
    .nu-risk-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 48px;
    }
    .nu-risk-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-risk-box.danger { border-top: 4px solid var(--nu-alert-red); }
    .nu-risk-box.cost { border-top: 4px solid var(--nu-warn-amber); }
    .nu-risk-box h3 {
      font-size: 0.82rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .nu-risk-box.danger h3 { color: var(--nu-alert-red); }
    .nu-risk-box.cost h3 { color: var(--nu-warn-amber); }
    .nu-risk-box ul {
      list-style: none;
      padding: 0;
    }
    .nu-risk-box li {
      font-size: 0.93rem;
      padding: 6px 0 6px 20px;
      position: relative;
      color: var(--nu-body-text);
    }
    .nu-risk-box li::before {
      content: '•';
      position: absolute;
      left: 0; top: 4px;
      color: var(--nu-blue);
      font-size: 1.2rem;
      font-weight: 900;
    }
    .nu-risk-box .total {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-navy);
    }

    /* ══ DECISION CTA ══ */
    .nu-cta-block {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0044dd 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 36px 40px;
      border-radius: 10px;
      margin-bottom: 20px;
      text-align: center;
      box-shadow: 0 8px 28px rgba(0,0,255,0.2);
    }
    .nu-cta-block h3 {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-cta-block p {
      font-size: 1rem;
      opacity: 0.95;
      margin-bottom: 18px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    .nu-cta-buttons {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .nu-btn {
      display: inline-block;
      padding: 12px 26px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    .nu-btn-white {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .nu-btn-white:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }
    .nu-btn-outline {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .nu-btn-outline:hover {
      background: rgba(255,255,255,0.15);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
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
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-stamp {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 56px; }
      .nu-section-title { font-size: 1.35rem; }
      .nu-step { padding: 22px 20px 22px 72px; }
      .nu-step::before { width: 40px; height: 40px; top: 20px; left: 16px; font-size: 0.95rem; }
      .nu-risk-grid { grid-template-columns: 1fr; }
      .nu-priority-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-cta-block, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-overview-card, .nu-risk-box { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC META BAR -->
  <div class="nu-doc-meta">
    <div><strong>Document</strong> &nbsp; Action Plan — Water Intrusion Remediation</div>
    <div><strong>Issued</strong> &nbsp; April 22, 2026</div>
    <div><strong>Owner</strong> &nbsp; Aaron C. Norris</div>
    <div><strong>Status</strong> &nbsp; Open — Professional Response Required</div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="icon">⚠</div>
        <div>
          <div class="label">Priority — Water Intrusion</div>
          <div class="message">
            Address active water intrusion with a qualified waterproofing contractor before further moisture damage, mold growth, or structural compromise occurs. Delay increases remediation cost and insurance exposure.
          </div>
        </div>
      </div>

      <!-- OVERVIEW -->
      <h2 class="nu-section-title"><span class="first">Situation</span> <span class="rest">Overview</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-overview-grid">
        <div class="nu-overview-card">
          <div class="label">Issue</div>
          <div class="value">Water Intrusion</div>
          <div class="sub">Source, extent, and duration to be documented on site walk.</div>
        </div>
        <div class="nu-overview-card">
          <div class="label">Required Response</div>
          <div class="value">Professional Waterproofing</div>
          <div class="sub">DIY patching is not acceptable — licensed contractor engagement.</div>
        </div>
        <div class="nu-overview-card">
          <div class="label">Action Owner</div>
          <div class="value">Aaron C. Norris</div>
          <div class="sub">Coordinate with qualified vendor; keep written record.</div>
        </div>
        <div class="nu-overview-card">
          <div class="label">Target Window</div>
          <div class="value">Within 14 Days</div>
          <div class="sub">Initial inspections scheduled within the first 7 days.</div>
        </div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span class="first">Step-By-Step</span> <span class="rest">Action Plan</span></h2>
      <div class="nu-section-divider"></div>

      <ol class="nu-step-list">

        <li class="nu-step">
          <h3>Document the Intrusion Before Anyone Touches It</h3>
          <p>Photograph and video every affected area in daylight and with a flashlight. Mark water lines on walls with blue painter's tape and the date. Save a dry, non-porous sample of any affected material if removal is required later.</p>
          <ul>
            <li>Photos: wide shot, mid shot, close-up of each wet location</li>
            <li>Note staining, efflorescence, bubbling paint, soft drywall, warped flooring</li>
            <li>Save photos to a dated folder and back up to cloud storage</li>
          </ul>
          <span class="owner-tag">Owner: Aaron</span>
        </li>

        <li class="nu-step">
          <h3>Stop the Active Water Source (If Obvious)</h3>
          <p>If the intrusion is tied to a plumbing leak, overflowing gutter, downspout discharge, irrigation line, or open penetration, stop the source temporarily. Do not perform drywall or foundation repair — only interrupt the flow of water so the professional inspection is accurate, not ongoing.</p>
          <ul>
            <li>Shut off supply valve to suspected plumbing fixture</li>
            <li>Redirect downspouts away from the foundation</li>
            <li>Cover exterior breaches with tarp and stake until contractor arrives</li>
          </ul>
          <span class="owner-tag">Owner: Aaron</span>
        </li>

        <li class="nu-step">
          <h3>Extract Standing Water and Begin Drying</h3>
          <p>Rent or deploy a wet/dry vacuum, air movers, and a commercial dehumidifier. Materials left wet for more than 48 hours enter the mold-growth window and change the entire scope and cost of the remediation.</p>
          <ul>
            <li>Remove standing water within hours, not days</li>
            <li>Pull baseboards if drywall is saturated to allow airflow behind</li>
            <li>Run dehumidifier continuously until relative humidity returns to 45–55%</li>
          </ul>
          <span class="owner-tag">Owner: Aaron</span>
        </li>

        <li class="nu-step">
          <h3>Engage a Licensed Waterproofing Contractor</h3>
          <p>Contact a minimum of three qualified waterproofing contractors for on-site inspection. Require that each be licensed in Alabama, carry liability insurance, and provide a written scope of work. Pass over anyone who quotes by phone without seeing the property.</p>
          <ul>
            <li>Request: license number, certificate of insurance, references</li>
            <li>Written estimate must itemize labor, materials, warranty term, exclusions</li>
            <li>Confirm whether interior, exterior, or combined waterproofing is recommended</li>
          </ul>
          <span class="owner-tag">Owner: Aaron — Vendor selection</span>
        </li>

        <li class="nu-step">
          <h3>Order a Moisture and Mold Assessment</h3>
          <p>If any material has been wet for more than 48 hours, order an independent moisture and mold assessment — separate from the waterproofing contractor, to avoid conflict of interest. Moisture readings establish the baseline for post-remediation verification.</p>
          <ul>
            <li>Use a certified indoor environmental professional (IEP)</li>
            <li>Retain the pre-remediation report — required if an insurance claim follows</li>
            <li>Ensure the post-remediation clearance is performed by the same IEP</li>
          </ul>
          <span class="owner-tag">Owner: Aaron — Third party</span>
        </li>

        <li class="nu-step">
          <h3>Notify the Insurance Carrier in Writing</h3>
          <p>Open a claim or a no-fault notification with the property insurance carrier as soon as the inspection confirms category and cause. Written notice protects the policy even if the decision later is to repair out of pocket.</p>
          <ul>
            <li>Preserve photos, invoices, and moisture readings from Steps 1–5</li>
            <li>Request the claim number and adjuster name in writing</li>
            <li>Do not sign any "assignment of benefits" paperwork from a contractor</li>
          </ul>
          <span class="owner-tag">Owner: Aaron</span>
        </li>

        <li class="nu-step">
          <h3>Select Scope and Authorize Work</h3>
          <p>Compare the three contractor scopes side by side. Lowest price is not the decision criterion — warranty term, method, and scope completeness are. Authorize work in writing with a fixed price, start date, completion date, and defined payment schedule.</p>
          <ul>
            <li>Never prepay more than the contractor's material cost (typically 10–30%)</li>
            <li>Require lien waivers from subcontractors on final payment</li>
            <li>Retain 10% holdback until post-remediation clearance passes</li>
          </ul>
          <span class="owner-tag">Owner: Aaron</span>
        </li>

        <li class="nu-step">
          <h3>Verify Completion and Archive the Record</h3>
          <p>Do not release final payment until moisture readings, clearance testing, and a written warranty are all on file. Archive the full package — photos, reports, contracts, warranty — in the Norris Utilities® property records, not just a phone album.</p>
          <ul>
            <li>Post-remediation moisture readings at or below 15% in wood, 1% in concrete</li>
            <li>Negative-pressure clearance test if demo or mold was present</li>
            <li>Warranty filed with vendor contact, term, and transferability noted</li>
          </ul>
          <span class="owner-tag">Owner: Aaron — Closeout</span>
        </li>

      </ol>

      <!-- CONTRACTOR QUALIFICATION -->
      <h2 class="nu-section-title"><span class="first">Contractor</span> <span class="rest">Qualification Criteria</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th style="width: 28%;">Requirement</th>
              <th>What to Confirm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Alabama License</strong></td>
              <td>Active state contractor license in good standing. Verify at the Alabama Home Builders Licensure Board or General Contractors Board. <span class="qual">Written license number required on estimate.</span></td>
            </tr>
            <tr>
              <td><strong>Liability Insurance</strong></td>
              <td>Certificate of insurance with minimum $1M general liability, current dates, and Norris Utilities, LLC listed as certificate holder during the project.</td>
            </tr>
            <tr>
              <td><strong>Workers' Comp</strong></td>
              <td>Alabama workers' compensation coverage for all crew on site. Missing coverage transfers injury liability to the property owner.</td>
            </tr>
            <tr>
              <td><strong>Specialized Method</strong></td>
              <td>Firm must perform waterproofing as a core line — not a remodeler offering it as a one-off. Ask for three reference jobs of similar scope completed in the last 24 months.</td>
            </tr>
            <tr>
              <td><strong>Written Warranty</strong></td>
              <td>Minimum 5-year labor and material warranty for interior or exterior waterproofing. 10+ years for foundation drainage systems. Warranty must be transferable on property sale.</td>
            </tr>
            <tr>
              <td><strong>Transparent Scope</strong></td>
              <td>Line-item estimate with method (e.g., interior drain tile, exterior membrane, epoxy injection), materials, labor, and explicit exclusions. Any "allowance" items must be capped.</td>
            </tr>
            <tr>
              <td><strong>Independent Reviews</strong></td>
              <td>Check BBB, Google, and state licensing board complaints. A single angry review is normal; a pattern of unresolved complaints is disqualifying.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ON-SITE CHECKLIST -->
      <div class="nu-checklist">
        <h3>On-Site Inspection Checklist (Bring a Copy to Each Estimate)</h3>
        <ul>
          <li>Exact location and dimensions of affected area documented</li>
          <li>Source of water intrusion diagnosed (grade, foundation, plumbing, roof, window)</li>
          <li>Moisture meter readings logged on wood, drywall, and concrete</li>
          <li>Written recommendation: interior, exterior, or combined approach</li>
          <li>Materials specified by brand and product — not "industry standard"</li>
          <li>Drainage, sump, or vapor barrier components listed separately</li>
          <li>Crew size, working days, and daily hours estimate</li>
          <li>Clean-up, disposal, and restoration of landscaping included or excluded</li>
          <li>Price valid for a stated number of days</li>
          <li>Warranty term, what voids it, and transferability on sale</li>
        </ul>
      </div>

      <!-- RISK + COST -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">&amp; Cost Exposure</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-risk-grid">
        <div class="nu-risk-box danger">
          <h3>Risk of Delay</h3>
          <ul>
            <li>Mold growth begins in 24–48 hours on wet organic materials</li>
            <li>Structural wood rot and rebar corrosion accelerate with repeated saturation</li>
            <li>Insurance carriers may deny claims for "gradual damage" not addressed promptly</li>
            <li>Indoor air quality and occupant health affected by persistent moisture</li>
            <li>Finish materials (drywall, flooring, cabinetry) multiply repair cost over time</li>
          </ul>
          <div class="total">Every week of delay raises remediation cost and claim risk.</div>
        </div>
        <div class="nu-risk-box cost">
          <h3>Budget Framework</h3>
          <ul>
            <li>Moisture / mold assessment (IEP): $450 – $900</li>
            <li>Emergency drying &amp; dehumidification: $800 – $2,500</li>
            <li>Interior waterproofing (per linear foot of wall): $90 – $150</li>
            <li>Exterior excavation + membrane (per linear foot): $170 – $300</li>
            <li>Sump pump system install: $1,200 – $3,500</li>
            <li>Finish restoration (drywall, paint, trim): scope dependent</li>
          </ul>
          <div class="total">Carry a 15% contingency on the authorized scope.</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="nu-cta-block">
        <h3>Decision Point — Schedule the First Inspection This Week</h3>
        <p>Three qualified contractors, on site, within seven days. Aaron personally walks each inspection. Written scopes compared before any work is authorized.</p>
        <div class="nu-cta-buttons">
          <a href="tel:2055001343" class="nu-btn nu-btn-white">Call 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=Water%20Intrusion%20Remediation%20-%20Contractor%20Scheduling" class="nu-btn nu-btn-outline">Email Aaron</a>
        </div>
      </div>

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
    <div class="nu-footer-stamp">
      Internal Action Plan — Water Intrusion Remediation &nbsp;·&nbsp; Issued 2026-04-22
    </div>
  </footer>

</body>
</html>