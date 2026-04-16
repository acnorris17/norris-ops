The build engine asked for raw HTML only. Per the dedup rule, the canonical `action-clarify-lifetime-warranty.html` already exists — I'll produce the complete file content for the build pipeline to write.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-action-red: #C8102E;
      --nu-action-amber: #F39200;
      --nu-action-green: #2E8B3D;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.2rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
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
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ DOC LABEL BAR ══ */
    .nu-doc-bar {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 14px 40px;
    }
    .nu-doc-bar-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      font-size: 0.82rem;
      color: var(--nu-body-text);
      letter-spacing: 0.02em;
    }
    .nu-doc-bar strong {
      color: var(--nu-blue);
      font-weight: 700;
    }
    .nu-doc-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-action-amber);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-doc-status::before {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--nu-white);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    /* ══ MAIN ══ */
    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      margin: 40px 0 18px;
      color: var(--nu-dark-text);
      letter-spacing: -0.005em;
    }
    .nu-section-title .lead {
      color: var(--nu-blue);
    }
    .nu-section-title:first-of-type { margin-top: 0; }

    .nu-eyebrow {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }

    .nu-h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.3rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-h1 .lead { color: var(--nu-blue); }

    .nu-lead-p {
      font-size: 1.08rem;
      color: var(--nu-body-text);
      max-width: 800px;
      margin-bottom: 28px;
    }

    /* ══ ACTION BANNER ══ */
    .nu-action-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 36px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 24px;
      align-items: center;
      box-shadow: 0 6px 24px rgba(0,0,51,0.18);
    }
    .nu-action-banner-icon {
      width: 56px;
      height: 56px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .nu-action-banner-icon svg {
      width: 28px;
      height: 28px;
      fill: var(--nu-navy);
    }
    .nu-action-banner-text strong {
      display: block;
      font-size: 1.15rem;
      font-weight: 900;
      margin-bottom: 4px;
      color: var(--nu-cyan);
    }
    .nu-action-banner-text span {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.88);
    }
    .nu-action-banner-meta {
      text-align: right;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.85);
      line-height: 1.5;
    }
    .nu-action-banner-meta strong {
      color: var(--nu-cyan);
      font-weight: 700;
    }

    /* ══ CARD GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 24px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-card h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .nu-card h3 .num {
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.82rem;
      margin-right: 10px;
      vertical-align: middle;
    }
    .nu-card p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .nu-card ul { margin: 8px 0 0 18px; font-size: 0.92rem; }
    .nu-card ul li { margin-bottom: 4px; }

    /* ══ KEY QUESTIONS BLOCK ══ */
    .nu-questions {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-questions h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 14px;
    }
    .nu-questions ol {
      margin-left: 22px;
      counter-reset: q;
      list-style: none;
    }
    .nu-questions ol li {
      counter-increment: q;
      padding: 12px 0 12px 38px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.97rem;
      color: var(--nu-dark-text);
    }
    .nu-questions ol li:last-child { border-bottom: none; }
    .nu-questions ol li::before {
      content: counter(q);
      position: absolute;
      left: 0; top: 12px;
      width: 26px;
      height: 26px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
      font-weight: 700;
      font-size: 0.82rem;
    }
    .nu-questions ol li em {
      display: block;
      margin-top: 4px;
      font-style: italic;
      color: var(--nu-body-text);
      font-size: 0.88rem;
    }

    /* ══ CONTACT CARD ══ */
    .nu-contact-card {
      background: linear-gradient(135deg, var(--nu-white) 0%, #fafbff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 28px;
    }
    .nu-contact-card .label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-contact-card .name {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-contact-card .role {
      font-size: 0.98rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .nu-contact-card .lines {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      font-size: 0.92rem;
    }
    .nu-contact-card .lines a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-contact-card .lines a:hover { text-decoration: underline; }

    /* ══ EMAIL DRAFT ══ */
    .nu-email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 28px;
    }
    .nu-email-draft .head {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .nu-email-draft .head div {
      margin-bottom: 4px;
    }
    .nu-email-draft .head strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .nu-email-draft .body {
      padding: 24px 28px;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      white-space: pre-wrap;
      font-family: 'Lato', sans-serif;
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
      margin-bottom: 32px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      top: 8px; bottom: 8px; left: 12px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .nu-timeline-item {
      position: relative;
      margin-bottom: 22px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      top: 22px; left: -32px;
      width: 18px; height: 18px;
      background: var(--nu-white);
      border: 4px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-item h4 {
      font-size: 1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-item .when {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-timeline-item p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* ══ FACTS TABLE ══ */
    .nu-facts {
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .nu-facts .row {
      display: grid;
      grid-template-columns: 220px 1fr;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-facts .row:last-child { border-bottom: none; }
    .nu-facts .row .k {
      background: var(--nu-light-gray);
      padding: 14px 20px;
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .nu-facts .row .v {
      padding: 14px 20px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* ══ NOTE BLOCK ══ */
    .nu-note {
      background: #fff8e6;
      border-left: 5px solid var(--nu-action-amber);
      border-radius: 4px;
      padding: 18px 22px;
      margin-bottom: 28px;
      font-size: 0.94rem;
      color: var(--nu-dark-text);
    }
    .nu-note strong {
      color: var(--nu-action-amber);
      font-weight: 900;
      letter-spacing: 0.04em;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px 28px;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .nu-checklist li {
      list-style: none;
      padding: 10px 0 10px 36px;
      position: relative;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 4px; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 820px) {
      .nu-header { padding: 40px 24px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      main { padding: 32px 22px 60px; }
      .nu-h1 { font-size: 1.7rem; }
      .nu-grid-2, .nu-grid-3 { grid-template-columns: 1fr; }
      .nu-action-banner { grid-template-columns: 1fr; text-align: center; }
      .nu-action-banner-meta { text-align: center; }
      .nu-action-banner-icon { margin: 0 auto; }
      .nu-facts .row { grid-template-columns: 1fr; }
      .nu-facts .row .k { border-bottom: 1px solid var(--nu-medium-gray); }
      .nu-doc-bar { padding: 12px 22px; }
      .nu-footer { padding: 36px 22px; font-size: 0.94rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-timeline-item, .nu-questions, .nu-checklist { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L130 60 L180 50 L150 100 L195 130 L140 140 L160 200 L100 170 L40 200 L60 140 L5 130 L50 100 L20 50 L70 60 Z" fill="#ffffff"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,60 L1440,0 L1440,60 L0,60 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC BAR -->
  <div class="nu-doc-bar">
    <div class="nu-doc-bar-inner">
      <div><strong>INTERNAL ACTION ITEM</strong> · reMarkable Task #210 · Owner: Aaron C. Norris</div>
      <div class="nu-doc-status">Open — Awaiting Supplier Response</div>
    </div>
  </div>

  <!-- MAIN -->
  <main>

    <span class="nu-eyebrow">FlexPro Armor · Supplier Coordination</span>
    <h1 class="nu-h1"><span class="lead">Get the Written Definition</span> of H2O Waterproofing's Lifetime Warranty</h1>
    <p class="nu-lead-p">
      H2O Waterproofing is the chemical treatment partner whose product is applied to every FlexPro Armor bucket cover
      we ship. Their published "lifetime warranty" language is referenced in our customer collateral, but we do not yet
      hold a written, signed definition of what "lifetime" means in plain English — duration, transferability,
      labor coverage, exclusions, and the claim process. This document is the action plan to close that gap.
    </p>

    <!-- ACTION BANNER -->
    <div class="nu-action-banner">
      <div class="nu-action-banner-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7v6c0 5 3.5 9.4 10 11 6.5-1.6 10-6 10-11V7l-10-5zm-1 15l-4-4 1.4-1.4L11 14.2l5.6-5.6L18 10l-7 7z"/></svg>
      </div>
      <div class="nu-action-banner-text">
        <strong>Action Required: Obtain Signed Warranty Statement</strong>
        <span>One‑page PDF on H2O Waterproofing letterhead, signed and dated, defining coverage in clear language we can hand to a customer without interpretation.</span>
      </div>
      <div class="nu-action-banner-meta">
        <strong>Target close:</strong> within 10 business days<br>
        <strong>Priority:</strong> High — gating customer comms
      </div>
    </div>

    <!-- WHY -->
    <h2 class="nu-section-title"><span class="lead">Why</span> This Matters</h2>
    <div class="nu-grid-3">
      <div class="nu-card">
        <h3><span class="num">1</span>Customer Trust</h3>
        <p>Field reps and dealers are being asked, "What does <em>lifetime</em> actually mean?" We need a single, written answer — not a verbal one — to honor the spirit of A Legacy of Commitment®.</p>
      </div>
      <div class="nu-card">
        <h3><span class="num">2</span>Sales Enablement</h3>
        <p>Without a written definition, the FlexPro Armor line card and dealer packets cannot include precise warranty language. That hurts close rates with utility procurement teams who require documentation.</p>
      </div>
      <div class="nu-card">
        <h3><span class="num">3</span>Risk Management</h3>
        <p>If a claim arises, ambiguity creates liability. A signed definition lets us route claims correctly and protects Norris Utilities® from being the de facto guarantor of a supplier's promise.</p>
      </div>
    </div>

    <!-- WHO TO CONTACT -->
    <h2 class="nu-section-title"><span class="lead">Who</span> to Contact</h2>
    <div class="nu-contact-card">
      <div class="label">Primary Contact</div>
      <div class="name">H2O Waterproofing — Account Manager</div>
      <div class="role">Direct supplier of the proprietary waterproofing treatment applied to FlexPro Armor bucket covers</div>
      <div class="lines">
        <div><strong>Approach:</strong> Phone first, then follow with written confirmation by email</div>
        <div><strong>Goal:</strong> Single PDF, signed, on letterhead</div>
        <div><strong>Norris owner:</strong> Aaron C. Norris</div>
        <div><strong>Backup contact in CC:</strong> Caroline Butler (CB)</div>
      </div>
    </div>

    <div class="nu-note">
      <strong>NOTE —</strong> If the H2O Waterproofing primary contact has changed since the last call, capture the new
      contact's name, title, direct line, and email and update the supplier card in the ops portal before closing this task.
    </div>

    <!-- KEY QUESTIONS -->
    <h2 class="nu-section-title"><span class="lead">Questions</span> to Get Answered (in writing)</h2>
    <div class="nu-questions">
      <h3>The 10 questions that close this loop</h3>
      <ol>
        <li>
          What is the exact duration the warranty covers?
          <em>"Lifetime of the original purchaser," "lifetime of the bucket cover product," or some defined term in years — we need the literal phrase.</em>
        </li>
        <li>
          Is the warranty transferable to a second owner if the bucket truck is sold or the cover is reissued to another crew?
          <em>Utility fleets rotate equipment frequently. A non‑transferable warranty changes how we sell it.</em>
        </li>
        <li>
          What specifically is covered — only the waterproofing treatment performance, or also the substrate, stitching, and structural integrity of the cover?
          <em>The H2O treatment is one layer of value. We need the boundary of their commitment vs. ours.</em>
        </li>
        <li>
          What conditions void the warranty? (chemical exposure, abrasion against energized hardware, modifications, third‑party repair, missed cleaning intervals, etc.)
          <em>List every voiding condition so we can mirror it in our care instructions.</em>
        </li>
        <li>
          What is the claim process — phone, email, online form? Required photos? Required proof of purchase?
          <em>We will publish this verbatim in the FlexPro Armor owner's card so a crew can file in the field.</em>
        </li>
        <li>
          What is the standard turnaround time from claim submission to resolution?
          <em>Customers will ask. Set a number we can put in the dealer packet.</em>
        </li>
        <li>
          What is the remedy — repair, replace, refund, credit?
          <em>If it's "at H2O's discretion," we need to say that plainly.</em>
        </li>
        <li>
          Does the warranty travel with the cover or with the registered owner? Is registration required?
          <em>If registration is required, we need the registration link / form to ship with every cover.</em>
        </li>
        <li>
          Are there any geographic, climate, or use‑case exclusions? (offshore, salt‑water, high‑voltage live‑line, sub‑zero storage, etc.)
          <em>Our customers operate from Alabama heat to North Dakota winters. Coverage must be explicit.</em>
        </li>
        <li>
          May Norris Utilities® reproduce the signed warranty statement in our customer‑facing line card and dealer packets?
          <em>Get written permission to reprint, with attribution language H2O is comfortable with.</em>
        </li>
      </ol>
    </div>

    <!-- EMAIL DRAFT -->
    <h2 class="nu-section-title"><span class="lead">Email</span> Draft (after the phone call)</h2>
    <div class="nu-email-draft">
      <div class="head">
        <div><strong>To:</strong> [H2O Waterproofing primary contact]</div>
        <div><strong>CC:</strong> Caroline Butler &lt;caroline@norrisutilities.com&gt;</div>
        <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
        <div><strong>Subject:</strong> Following up — Lifetime Warranty Definition for FlexPro Armor Customers</div>
      </div>
      <div class="body">[Name] —

    Thank you for the time on the phone today. As discussed, I want to make sure our customers and dealer network have a clean, written definition of what your lifetime warranty covers on the waterproofing treatment used in our FlexPro Armor bucket covers.

    Could you send a one‑page statement on H2O Waterproofing letterhead — signed and dated — that addresses:

    • Duration (the literal phrase you want us to use)
    • Whether the warranty is transferable to a second owner
    • Exactly what is covered (treatment performance vs. substrate/stitching)
    • Voiding conditions
    • The claim process, required documentation, and turnaround
    • The remedy (repair / replace / refund / credit)
    • Any geographic or use‑case exclusions
    • Permission for Norris Utilities® to reprint the statement in our line card and dealer packets

    Once we have it in hand, we will incorporate the language into our customer‑facing materials and circle back so you can review the proof before it goes to print.

    Appreciate the partnership.

    Sincerely,

       Aaron C. Norris
       Founder &amp; CEO
       Norris Utilities, LLC
       Cell: 205-500-1343
       acnorris@norrisutilities.com</div>
    </div>

    <!-- FACTS -->
    <h2 class="nu-section-title"><span class="lead">Reference</span> Facts</h2>
    <div class="nu-facts">
      <div class="row"><div class="k">Product line affected</div><div class="v">FlexPro Armor bucket covers — all SKUs (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C)</div></div>
      <div class="row"><div class="k">Supplier role</div><div class="v">H2O Waterproofing — provides the proprietary chemical treatment applied to every bucket cover before shipment</div></div>
      <div class="row"><div class="k">Where warranty is referenced today</div><div class="v">FlexPro Armor line card, dealer packets, customer email replies — verbal/short‑form only, no signed source document on file</div></div>
      <div class="row"><div class="k">Deliverable</div><div class="v">One‑page signed PDF on H2O Waterproofing letterhead, dated, addressing all 10 questions above</div></div>
      <div class="row"><div class="k">Storage location once received</div><div class="v">~/norris-ops/internal/suppliers/h2o-waterproofing/ — file as <em>warranty_definition_signed_YYYY-MM-DD.pdf</em></div></div>
      <div class="row"><div class="k">Downstream updates triggered</div><div class="v">Line card warranty paragraph · dealer packet insert · FlexPro Armor owner's care card · website warranty page</div></div>
      <div class="row"><div class="k">Owner</div><div class="v">Aaron C. Norris — primary. Caroline Butler — coordination, follow‑up scheduling, file storage.</div></div>
      <div class="row"><div class="k">Priority</div><div class="v">High — blocks finalization of FlexPro Armor customer collateral</div></div>
    </div>

    <!-- TIMELINE -->
    <h2 class="nu-section-title"><span class="lead">Execution</span> Timeline</h2>
    <div class="nu-timeline">
      <div class="nu-timeline-item">
        <div class="when">Day 1 — Today</div>
        <h4>Phone H2O Waterproofing primary contact</h4>
        <p>Walk through the 10 questions verbally. Take notes. Confirm the right person to address the written follow‑up to. Confirm preferred email and turnaround expectation.</p>
      </div>
      <div class="nu-timeline-item">
        <div class="when">Day 1 — Today</div>
        <h4>Send written follow‑up email</h4>
        <p>Use the draft above. CC Caroline Butler. Subject line includes "Following up." Save sent copy to ops portal supplier folder.</p>
      </div>
      <div class="nu-timeline-item">
        <div class="when">Day 3</div>
        <h4>First check‑in if no response</h4>
        <p>Brief, polite phone call or reply‑to‑own‑email. No pressure — confirm the request landed and they have what they need from us.</p>
      </div>
      <div class="nu-timeline-item">
        <div class="when">Day 7</div>
        <h4>Second check‑in / escalate</h4>
        <p>If still no document, escalate to a senior contact at H2O Waterproofing. Reference the customer‑facing impact directly.</p>
      </div>
      <div class="nu-timeline-item">
        <div class="when">Day 10</div>
        <h4>Document received and filed</h4>
        <p>Save the signed PDF to <em>~/norris-ops/internal/suppliers/h2o-waterproofing/</em>. Flag Caroline to begin updating customer collateral. Close this task in the reMarkable queue.</p>
      </div>
      <div class="nu-timeline-item">
        <div class="when">Day 11–14</div>
        <h4>Roll the language into customer materials</h4>
        <p>Update the FlexPro Armor line card warranty paragraph, dealer packet insert, owner's care card, and the warranty page on www.NorrisUtilities.com. Send proof to H2O Waterproofing for sign‑off before publishing.</p>
      </div>
    </div>

    <!-- CHECKLIST -->
    <h2 class="nu-section-title"><span class="lead">Closeout</span> Checklist</h2>
    <ul class="nu-checklist">
      <li>Phone call placed and notes captured</li>
      <li>Written follow‑up email sent (Caroline CC'd)</li>
      <li>Signed warranty PDF received from H2O Waterproofing</li>
      <li>PDF filed at ~/norris-ops/internal/suppliers/h2o-waterproofing/</li>
      <li>Line card warranty paragraph updated</li>
      <li>Dealer packet insert updated</li>
      <li>FlexPro Armor owner's care card updated</li>
      <li>Website warranty page updated</li>
      <li>Proof sent to H2O Waterproofing for final sign‑off</li>
      <li>reMarkable Task #210 marked complete and archived</li>
    </ul>

    <div class="nu-note">
      <strong>REMINDER —</strong> Per the brand rules, FlexPro Armor is <em>not</em> a registered trademark. Do not add ®
      or &amp;reg; to FlexPro Armor anywhere in the warranty statement, the line card update, or the website copy.
      Norris Utilities®, A Legacy of Commitment®, and Phoenix Icon® are the registered marks.
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
  </footer>

</body>
</html>