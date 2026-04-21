<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Call H2O Waterproofing Before Closing — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-warn-amber: #D97706;
      --nu-success-green: #0B7A3B;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 88px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 65%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 52px;
      margin-top: -52px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 52px;
      display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 10%; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 20px;
      position: relative;
      z-index: 1;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .nu-page-eyebrow {
      display: inline-block;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.25rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-sub {
      font-size: 1.05rem;
      color: #555;
      max-width: 780px;
      margin-bottom: 36px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 16px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SUMMARY CARD ══ */
    .nu-summary-card {
      background: linear-gradient(135deg, #F8FAFF 0%, #EEF3FF 100%);
      border-left: 6px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-summary-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-navy);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-summary-card p {
      font-size: 0.98rem;
      color: var(--nu-body-text);
    }

    /* ══ META GRID ══ */
    .nu-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 16px;
    }
    .nu-meta-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 18px;
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-value.muted { font-weight: 400; color: #555; }

    /* ══ PHONE CALL BADGE ══ */
    .nu-call-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px 18px 20px;
      margin: 14px 0 8px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
    }
    .nu-call-badge-icon {
      width: 32px; height: 32px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }
    .nu-call-badge-text {
      display: flex; flex-direction: column;
    }
    .nu-call-badge-text .lbl {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 2px;
    }
    .nu-call-badge-text .val {
      font-size: 1.05rem;
      font-weight: 900;
      letter-spacing: 0.03em;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      counter-reset: step;
      margin: 10px 0 10px;
    }
    .nu-checklist li {
      counter-increment: step;
      position: relative;
      padding: 18px 22px 18px 74px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-checklist li:hover {
      border-color: var(--nu-cyan);
      box-shadow: 0 4px 14px rgba(0,0,0,0.05);
    }
    .nu-checklist li::before {
      content: counter(step);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 40px; height: 40px;
      background: linear-gradient(135deg, var(--nu-blue), #0033cc);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,255,0.2);
    }
    .nu-checklist li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .nu-checklist li span {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ TALKING POINTS ══ */
    .nu-talking-points {
      background: #FFFBEB;
      border: 1px solid #FCD34D;
      border-left: 5px solid var(--nu-warn-amber);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 16px;
    }
    .nu-talking-points h4 {
      font-weight: 900;
      font-size: 1rem;
      color: #7C2D12;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-talking-points ul {
      list-style: none;
    }
    .nu-talking-points ul li {
      position: relative;
      padding: 6px 0 6px 22px;
      font-size: 0.98rem;
      color: #44290A;
    }
    .nu-talking-points ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-warn-amber);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 10px;
    }

    /* ══ WRITTEN CONFIRMATION BOX ══ */
    .nu-written-box {
      background: #ECFDF5;
      border: 1px solid #6EE7B7;
      border-left: 5px solid var(--nu-success-green);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 16px;
    }
    .nu-written-box h4 {
      font-weight: 900;
      font-size: 1rem;
      color: #064E3B;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-written-box p {
      font-size: 0.98rem;
      color: #064E3B;
      margin-bottom: 10px;
    }
    .nu-written-box ul {
      list-style: none;
    }
    .nu-written-box ul li {
      position: relative;
      padding: 5px 0 5px 22px;
      font-size: 0.96rem;
      color: #064E3B;
    }
    .nu-written-box ul li::before {
      content: '✓';
      position: absolute;
      left: 2px;
      color: var(--nu-success-green);
      font-weight: 900;
    }

    /* ══ EMAIL TEMPLATE ══ */
    .nu-email-template {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
      font-family: 'Lato', monospace;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      margin-bottom: 16px;
    }
    .nu-email-template .hdr {
      border-bottom: 1px dashed #bbb;
      padding-bottom: 10px;
      margin-bottom: 14px;
      font-size: 0.88rem;
      color: #555;
    }
    .nu-email-template .hdr strong { color: var(--nu-navy); }

    /* ══ RED FLAGS ══ */
    .nu-red-flags {
      background: #FEF2F2;
      border: 1px solid #FCA5A5;
      border-left: 5px solid var(--nu-alert-red);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 16px;
    }
    .nu-red-flags h4 {
      font-weight: 900;
      font-size: 1rem;
      color: #7F1D1D;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-red-flags ul { list-style: none; }
    .nu-red-flags ul li {
      position: relative;
      padding: 6px 0 6px 24px;
      font-size: 0.98rem;
      color: #7F1D1D;
    }
    .nu-red-flags ul li::before {
      content: '⚠';
      position: absolute;
      left: 2px;
      top: 6px;
      color: var(--nu-alert-red);
      font-weight: 900;
    }

    /* ══ STATUS STRIP ══ */
    .nu-status-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0 8px;
    }
    .nu-status-pill {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 999px;
      padding: 8px 16px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-status-pill.priority {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-color: var(--nu-alert-red);
    }
    .nu-status-pill.deadline {
      background: var(--nu-warn-amber);
      color: var(--nu-white);
      border-color: var(--nu-warn-amber);
    }
    .nu-status-pill.source {
      background: var(--nu-navy);
      color: var(--nu-cyan);
      border-color: var(--nu-navy);
    }

    /* ══ SIGN-OFF ══ */
    .nu-signoff {
      background: linear-gradient(135deg, #F8FAFF 0%, #E8EFFF 100%);
      border-radius: 8px;
      padding: 28px 32px;
      margin-top: 28px;
      border: 1px solid #C7D4F5;
    }
    .nu-signoff h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-navy);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .nu-signoff-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-top: 10px;
    }
    .nu-signoff-grid .slot {
      border-bottom: 2px solid var(--nu-navy);
      padding-bottom: 4px;
      min-height: 36px;
    }
    .nu-signoff-grid .label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
      padding: 44px 40px;
      text-align: center;
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact strong { color: var(--nu-white); }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 20px 16px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-call-badge { clip-path: none; border-radius: 8px; }
      .nu-signoff-grid { grid-template-columns: 1fr; }
      .nu-checklist li { padding-left: 66px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-checklist li, .nu-meta-cell { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- ══════════ HEADER ══════════ -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- ══════════ CHEVRON ══════════ -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,52 L1440,0 L1440,52 L0,52 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- ══════════ CONTENT ══════════ -->
  <main class="nu-content-area">
    <div class="nu-container">

      <span class="nu-page-eyebrow">Pre-Closing Action Item</span>
      <h1 class="nu-page-title">
        Call <span class="accent">H2O Waterproofing</span><br>
        Before Closing &mdash; Get It In Writing
      </h1>
      <p class="nu-page-sub">
        Do not sign on the 4505 Butterworth estate until H2O Waterproofing has confirmed, in writing,
        the scope, warranty terms, transferability, and remaining obligations tied to any prior
        waterproofing work performed at the property.
      </p>

      <div class="nu-status-strip">
        <span class="nu-status-pill priority">Priority: HIGH</span>
        <span class="nu-status-pill deadline">Deadline: Before Closing</span>
        <span class="nu-status-pill source">Source: reMarkable Action Item</span>
        <span class="nu-status-pill">Owner: Aaron C. Norris</span>
      </div>

      <!-- SUMMARY -->
      <div class="nu-summary-card">
        <h3>Why This Matters</h3>
        <p>
          The 4505 Butterworth estate already has a disclosed water intrusion history. A verbal
          assurance from H2O Waterproofing &mdash; or from the seller relaying what H2O allegedly
          said &mdash; is not enforceable after closing. Every promise about prior work, scope,
          warranty, and transferability must be captured in writing on H2O Waterproofing letterhead
          (or an official email from their domain) before funds move.
        </p>
      </div>

      <!-- META GRID -->
      <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Details</span></h2>
      <div class="nu-meta-grid">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Action Type</div>
          <div class="nu-meta-value">Phone Call + Written Confirmation</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Vendor</div>
          <div class="nu-meta-value">H2O Waterproofing</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Property</div>
          <div class="nu-meta-value">4505 Butterworth &mdash; 7,098 sq ft estate</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Deadline</div>
          <div class="nu-meta-value">Before closing &mdash; no exceptions</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value muted">reMarkable action item (handwritten)</div>
        </div>
      </div>

      <!-- CALL BADGE -->
      <div class="nu-call-badge">
        <svg class="nu-call-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.21 2.16z"/>
        </svg>
        <div class="nu-call-badge-text">
          <span class="lbl">Call H2O Waterproofing Directly</span>
          <span class="val">Verify scope &bull; Confirm warranty &bull; Request written letter</span>
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Script &amp; Step-by-Step</span></h2>
      <ol class="nu-checklist">
        <li>
          <strong>Identify yourself and the property</strong>
          <span>State: "This is Aaron C. Norris. I am under contract to purchase 4505 Butterworth. I need to verify waterproofing work your company performed at that address."</span>
        </li>
        <li>
          <strong>Ask for the full job file</strong>
          <span>Request every invoice, work order, and inspection report tied to the address. Get dates of service, technicians on site, and exact areas treated (basement, foundation, French drain, sump system, exterior grading, etc.).</span>
        </li>
        <li>
          <strong>Confirm scope in writing</strong>
          <span>Ask specifically: what was treated, what was NOT treated, and why. If only part of the foundation was addressed, the untreated portion becomes your risk on day one.</span>
        </li>
        <li>
          <strong>Verify warranty status</strong>
          <span>Get length, what it covers, what voids it, and &mdash; critically &mdash; whether it transfers to a new owner. Many waterproofing warranties require a written transfer request and/or a transfer fee within a set number of days from closing.</span>
        </li>
        <li>
          <strong>Flag any open tickets or recurring service calls</strong>
          <span>Ask: "Has your company been back to this address more than once? Are there any open service tickets, unresolved complaints, or pending work?" Recurring calls mean the original fix did not hold.</span>
        </li>
        <li>
          <strong>Request a letter on H2O Waterproofing letterhead</strong>
          <span>Do not accept a verbal summary. Ask them to email a signed letter on company letterhead documenting scope, dates, warranty terms, transferability, and any known issues at the property. Provide your email: acnorris@norrisutilities.com.</span>
        </li>
        <li>
          <strong>Forward everything to closing attorney and agent</strong>
          <span>Once the letter arrives, send it to your closing attorney and buyer&rsquo;s agent the same day. Request it be added to the closing file and referenced in the final disclosure package.</span>
        </li>
      </ol>

      <!-- TALKING POINTS -->
      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Questions to Ask on the Call</span></h2>
      <div class="nu-talking-points">
        <h4>Ask These Directly &mdash; Do Not Accept Vague Answers</h4>
        <ul>
          <li>What exact waterproofing work was performed at 4505 Butterworth, and when?</li>
          <li>Who paid for the work &mdash; current seller, prior owner, or a third party?</li>
          <li>What warranty was issued, and what is its remaining term?</li>
          <li>Is the warranty transferable to a new owner? What is the process and fee?</li>
          <li>Are there any service calls or complaints on file for this address after the original job?</li>
          <li>Were there areas inspected but NOT treated? If so, which areas and why were they excluded?</li>
          <li>Did your company document any pre-existing damage that the waterproofing work did not correct?</li>
          <li>Can you email me a letter on H2O Waterproofing letterhead confirming all of the above today?</li>
        </ul>
      </div>

      <!-- WRITTEN CONFIRMATION -->
      <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">Must Be In Writing</span></h2>
      <div class="nu-written-box">
        <h4>Required on H2O Waterproofing Letterhead (or Official Company Email)</h4>
        <p>Do not close without receiving a document that contains each of the following items, clearly and unambiguously:</p>
        <ul>
          <li>Property address (4505 Butterworth), full job history, and dates of service</li>
          <li>Itemized scope of work performed &mdash; treated areas and excluded areas both listed</li>
          <li>Materials used, system type installed, and any subcontractors involved</li>
          <li>Warranty type, effective date, expiration date, and exact transfer process to a new owner</li>
          <li>Any transfer fee, notification deadline, or paperwork required post-closing to keep the warranty alive</li>
          <li>Confirmation of whether any open service calls, complaints, or unresolved issues exist at the address</li>
          <li>Signature of an authorized company representative with name, title, and direct phone</li>
        </ul>
      </div>

      <!-- RED FLAGS -->
      <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Flags &mdash; Pause Closing If Any Appear</span></h2>
      <div class="nu-red-flags">
        <h4>Do Not Close If You Hear Any of These</h4>
        <ul>
          <li>&ldquo;We have no record of that address.&rdquo; &mdash; the seller&rsquo;s representation is already broken.</li>
          <li>&ldquo;The warranty does not transfer.&rdquo; &mdash; you inherit the problem with none of the coverage.</li>
          <li>&ldquo;We&rsquo;ve been back several times.&rdquo; &mdash; recurring calls mean the underlying issue is not fixed.</li>
          <li>&ldquo;Only the [partial area] was done.&rdquo; &mdash; confirms untreated foundation sections; scope may not match what the seller disclosed.</li>
          <li>&ldquo;We can&rsquo;t put that in writing.&rdquo; &mdash; automatic stop. Everything goes in writing or the closing date moves.</li>
          <li>Any inconsistency between what H2O tells you and what the seller&rsquo;s disclosure claims was done.</li>
        </ul>
      </div>

      <!-- EMAIL FOLLOW-UP -->
      <h2 class="nu-section-title"><span class="first">Follow-Up</span> <span class="rest">Email &mdash; Send Same Day as Call</span></h2>
      <p style="margin-bottom: 14px; color: #555;">Send this immediately after the phone call to lock the conversation in writing. Do not wait for H2O to send the letter first.</p>
      <div class="nu-email-template">
        <div class="hdr">
          <strong>To:</strong> (H2O Waterproofing representative)<br>
          <strong>From:</strong> acnorris@norrisutilities.com<br>
          <strong>Subject:</strong> 4505 Butterworth &mdash; Written Confirmation of Waterproofing Scope &amp; Warranty (Pre-Closing)
        </div>
        (Name) &mdash;
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Thank you for taking my call today regarding the waterproofing work performed at 4505 Butterworth. As discussed, I am under contract to purchase the property and need written confirmation before closing.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Please send a letter on H2O Waterproofing letterhead that confirms the following:
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&bull; Dates and full scope of waterproofing work performed at 4505 Butterworth<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&bull; Areas treated and areas excluded from the scope<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&bull; Warranty terms, expiration date, and whether the warranty transfers to a new owner<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&bull; Transfer fee, deadline, and required paperwork, if any<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&bull; Any open service calls, complaints, or recurring issues on file at the address
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;I would like this in hand before my closing date. Please reply with the letter attached or confirm a date I can expect it.
        <br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Sincerely,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities, LLC<br>
        &nbsp;&nbsp;&nbsp;&nbsp;205-500-1343 | acnorris@norrisutilities.com
      </div>

      <!-- SIGN OFF -->
      <div class="nu-signoff">
        <h4>Closing Gate &mdash; Task Sign-Off</h4>
        <p style="font-size: 0.95rem; color: var(--nu-body-text);">
          This task is not complete until the H2O Waterproofing letter is received, reviewed, and delivered to the closing attorney.
          Do not mark &ldquo;done&rdquo; based on a phone call alone.
        </p>
        <div class="nu-signoff-grid">
          <div>
            <div class="label">Date Call Completed</div>
            <div class="slot">&nbsp;</div>
          </div>
          <div>
            <div class="label">H2O Rep Spoken With</div>
            <div class="slot">&nbsp;</div>
          </div>
          <div>
            <div class="label">Letter Received (Date)</div>
            <div class="slot">&nbsp;</div>
          </div>
          <div>
            <div class="label">Forwarded to Attorney</div>
            <div class="slot">&nbsp;</div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- ══════════ FOOTER ══════════ -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>