<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Warranty Document — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-alert-red: #D32F2F;
      --nu-warn-amber: #F57C00;
      --nu-success-green: #2E7D32;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 72px; height: 72px;
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
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 50vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 600px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .nu-page-title .accent {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 30px;
      font-weight: 400;
    }

    /* ══ PRIORITY BANNER ══ */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(90deg, #fff4e5 0%, #fffaf3 100%);
      border-left: 6px solid var(--nu-warn-amber);
      padding: 18px 24px;
      border-radius: 6px;
      margin-bottom: 36px;
    }
    .nu-priority-icon {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-warn-amber);
      background: var(--nu-white);
      width: 44px; height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: 2px solid var(--nu-warn-amber);
    }
    .nu-priority-text {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-priority-text .label {
      display: block;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-warn-amber);
      margin-bottom: 3px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin: 40px 0 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      letter-spacing: -0.005em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ META GRID ══ */
    .nu-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .nu-meta-cell {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 14px 18px;
      border-radius: 4px;
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-meta-sub {
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 2px;
    }

    /* ══ CONTEXT CARD ══ */
    .nu-context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      margin-bottom: 24px;
    }
    .nu-context-card p {
      margin-bottom: 14px;
      font-size: 1rem;
    }
    .nu-context-card p:last-child { margin-bottom: 0; }
    .nu-context-card strong { color: var(--nu-dark-text); }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .nu-checklist li {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 24px 20px 72px;
      margin-bottom: 12px;
      position: relative;
      transition: border-color 0.2s ease, transform 0.2s ease;
    }
    .nu-checklist li:hover {
      border-color: var(--nu-blue);
      transform: translateX(2px);
    }
    .nu-checklist li::before {
      content: counter(step);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 38px; height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1rem;
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
      display: block;
    }
    .nu-checklist .step-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ QUESTION LIST ══ */
    .nu-question-list {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8f6fc 100%);
      border: 1px solid #cfdcff;
      border-radius: 8px;
      padding: 24px 28px;
      list-style: none;
    }
    .nu-question-list li {
      padding: 10px 0 10px 32px;
      border-bottom: 1px dashed rgba(0,0,255,0.15);
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .nu-question-list li:last-child { border-bottom: none; }
    .nu-question-list li::before {
      content: '?';
      position: absolute;
      left: 0; top: 50%;
      transform: translateY(-50%);
      width: 22px; height: 22px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ══ DRAFT EMAIL ══ */
    .nu-email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-email-header {
      background: var(--nu-light-gray);
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .nu-email-header .row {
      display: flex;
      gap: 10px;
      margin-bottom: 6px;
    }
    .nu-email-header .row:last-child { margin-bottom: 0; }
    .nu-email-header .field-label {
      font-weight: 900;
      color: var(--nu-blue);
      min-width: 70px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 0.72rem;
      padding-top: 3px;
    }
    .nu-email-header .field-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-email-body {
      padding: 28px 32px;
      font-size: 1rem;
      color: var(--nu-body-text);
      line-height: 1.75;
    }
    .nu-email-body p {
      margin-bottom: 14px;
      padding-left: 28px;
      text-indent: 0;
    }
    .nu-email-body p.greeting {
      padding-left: 0;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-email-body p.signoff {
      padding-left: 0;
      margin-top: 20px;
      margin-bottom: 4px;
    }
    .nu-email-body p.signature {
      padding-left: 28px;
      margin-bottom: 0;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-email-body ul {
      padding-left: 48px;
      margin-bottom: 14px;
      list-style: none;
    }
    .nu-email-body ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 6px;
    }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ WARRANTY REVIEW BOX ══ */
    .nu-review-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .nu-review-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 22px;
    }
    .nu-review-box h4 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .nu-review-box p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ BUTTONS ══ */
    .nu-actions {
      display: flex;
      gap: 12px;
      margin-top: 28px;
      flex-wrap: wrap;
    }
    .nu-btn-primary,
    .nu-btn-secondary {
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
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-context-card, .nu-email-body { padding: 20px; }
      .nu-email-body p, .nu-email-body p.signature { padding-left: 12px; }
      .nu-checklist li { padding: 18px 20px 18px 62px; }
      .nu-checklist li::before { left: 14px; width: 32px; height: 32px; font-size: 0.9rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-actions { display: none; }
      .nu-context-card, .nu-checklist li, .nu-email-draft { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span class="accent">Action Item —</span> H2O Waterproofing Warranty Document</h1>
      <p class="nu-page-subtitle">reMarkable capture converted to live task. Source: Aaron's handwritten note. Captured 2026-04-23.</p>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-icon">!</div>
        <div class="nu-priority-text">
          <span class="label">Priority — Due Diligence</span>
          Obtain the actual H2O Waterproofing warranty document in writing before continuing to present H2O-backed waterproofing claims to customers.
        </div>
      </div>

      <!-- META -->
      <h2 class="nu-section-title"><span>Task</span> Snapshot</h2>
      <div class="nu-meta-grid">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
          <div class="nu-meta-sub">Founder &amp; CEO</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Vendor</div>
          <div class="nu-meta-value">H2O Waterproofing</div>
          <div class="nu-meta-sub">Chemical / textile treatment supplier</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Note</div>
          <div class="nu-meta-sub">Captured 2026-04-23</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value">Open — Action Required</div>
          <div class="nu-meta-sub">Awaiting written warranty copy</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Category</div>
          <div class="nu-meta-value">Legal / Compliance</div>
          <div class="nu-meta-sub">Documentation on file</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Target</div>
          <div class="nu-meta-value">Within 5 Business Days</div>
          <div class="nu-meta-sub">Target close: 2026-04-30</div>
        </div>
      </div>

      <!-- WHY THIS MATTERS -->
      <h2 class="nu-section-title"><span>Why This</span> Matters</h2>
      <div class="nu-context-card">
        <p>
          FlexPro Armor bucket covers are positioned to customers as a premium, handmade USA product. H2O Waterproofing's treatment is one of the reasons
          we can stand behind water-resistance and UV claims. Right now Norris Utilities®, LLC has <strong>verbal assurance</strong> of a warranty
          from H2O Waterproofing — but nothing on file.
        </p>
        <p>
          Until the written warranty is in hand, we cannot accurately answer a customer who asks <strong>"What does the warranty cover, and for how long?"</strong>
          We also cannot evaluate whether to pass the warranty through to end users, bundle it with the FlexPro Armor cover warranty, or publish
          a clean specification sheet.
        </p>
        <p>
          <strong>Outcome required:</strong> a PDF copy of the actual warranty document from H2O Waterproofing, signed or on company letterhead,
          stored in Google Drive under <em>Vendors / H2O Waterproofing / Warranty</em>, and referenced from the FlexPro Armor product spec file.
        </p>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span>Action</span> Steps</h2>
      <ol class="nu-checklist">
        <li>
          <span class="step-title">Pull the H2O Waterproofing contact record</span>
          <span class="step-body">Open the vendor registry and confirm primary contact name, email, and phone. If the record is stale, update it before outreach.</span>
        </li>
        <li>
          <span class="step-title">Send the written warranty request by email</span>
          <span class="step-body">Use the draft below. Send from <strong>acnorris@norrisutilities.com</strong>. Ask for a PDF of the current warranty document, not a verbal summary.</span>
        </li>
        <li>
          <span class="step-title">Log the request in the vendor tracker</span>
          <span class="step-body">Record date sent, contact emailed, and expected response. Set a 5-business-day follow-up so nothing stalls.</span>
        </li>
        <li>
          <span class="step-title">Receive and review the warranty document</span>
          <span class="step-body">Check the review points below — coverage, duration, claim process, exclusions, and transferability — before accepting it as final.</span>
        </li>
        <li>
          <span class="step-title">File the document in Google Drive</span>
          <span class="step-body">Path: <em>Norris Utilities / Vendors / H2O Waterproofing / Warranty / H2O_Warranty_2026.pdf</em>. Link the filename into the FlexPro Armor product spec.</span>
        </li>
        <li>
          <span class="step-title">Update FlexPro Armor customer-facing materials</span>
          <span class="step-body">Once the warranty terms are confirmed, add the plain-English summary to the FlexPro Armor line card and quote template so customers see it up front.</span>
        </li>
        <li>
          <span class="step-title">Close the reMarkable action item</span>
          <span class="step-body">Mark this task complete in the master tracker and archive the reMarkable note with a note of the file location.</span>
        </li>
      </ol>

      <!-- REVIEW CRITERIA -->
      <h2 class="nu-section-title"><span>Warranty Document —</span> Review Criteria</h2>
      <div class="nu-review-grid">
        <div class="nu-review-box">
          <h4>Coverage Scope</h4>
          <p>What defects and performance failures are covered? Water intrusion, UV degradation, seam failure, color fade, chemical resistance?</p>
        </div>
        <div class="nu-review-box">
          <h4>Duration</h4>
          <p>How many years from date of treatment? Does the clock start at manufacture, sale, or end-user delivery?</p>
        </div>
        <div class="nu-review-box">
          <h4>Claim Process</h4>
          <p>Who submits the claim — Norris Utilities®, the dealer, or the end user? What documentation is required (photos, samples, proof of purchase)?</p>
        </div>
        <div class="nu-review-box">
          <h4>Exclusions</h4>
          <p>What voids the warranty — abrasion, improper storage, solvent exposure, field repair? Are these reasonable for bucket cover use cases?</p>
        </div>
        <div class="nu-review-box">
          <h4>Transferability</h4>
          <p>Does the warranty pass through from H2O → Norris Utilities® → dealer → end customer, or does it stop at the first buyer?</p>
        </div>
        <div class="nu-review-box">
          <h4>Remedy</h4>
          <p>Is the remedy a refund, replacement material, retreatment, or credit? Who pays for freight on a returned item?</p>
        </div>
      </div>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title"><span>Draft —</span> Warranty Request Email</h2>
      <div class="nu-email-draft">
        <div class="nu-email-header">
          <div class="row"><div class="field-label">From</div><div class="field-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div></div>
          <div class="row"><div class="field-label">To</div><div class="field-value">H2O Waterproofing — primary account contact</div></div>
          <div class="row"><div class="field-label">Subject</div><div class="field-value">Request — Copy of H2O Waterproofing Warranty Document</div></div>
        </div>
        <div class="nu-email-body">
          <p class="greeting">Team —</p>
          <p>
            I am requesting a copy of your current warranty document for the waterproofing treatment we are using on FlexPro Armor bucket covers.
            We have discussed the warranty verbally, but I do not have a written copy on file yet and I would like to keep our records clean.
          </p>
          <p>
            When you send it, please confirm the following so I can summarize it accurately for our dealers and customers:
          </p>
          <ul>
            <li>Exact coverage — what failures are covered and what is excluded</li>
            <li>Warranty duration and the start date of the term</li>
            <li>Claim process, including who submits and what documentation is required</li>
            <li>Whether the warranty transfers from Norris Utilities to our dealers and end users</li>
            <li>Remedy — replacement, retreatment, refund, or credit</li>
          </ul>
          <p>
            A PDF on company letterhead or signed document is ideal. If there is a current revision date on it, please note that as well so I know I have the latest.
          </p>
          <p>
            I appreciate the quick turnaround on this. Once the document is on file, we can finalize the FlexPro Armor spec sheet and pass a clear,
            plain-English warranty summary along to the folks putting our covers in the field.
          </p>
          <p class="signoff">Sincerely,</p>
          <p class="signature">Aaron C. Norris</p>
          <p class="signature" style="font-weight:400; color:var(--nu-body-text);">
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </p>
        </div>
      </div>

      <!-- FOLLOW-UP QUESTIONS -->
      <h2 class="nu-section-title"><span>Open</span> Questions</h2>
      <ul class="nu-question-list">
        <li>Who is the correct primary contact at H2O Waterproofing — is the current vendor record current, or does it need to be refreshed before the email goes out?</li>
        <li>Does H2O have a dealer-facing warranty that differs from the end-user warranty? If so, we need both versions on file.</li>
        <li>Is the warranty indexed to application method (dip, spray, factory-applied) or is it a single flat warranty regardless of process?</li>
        <li>Does H2O require Norris Utilities, LLC to use specific care or storage instructions in customer documentation for the warranty to remain valid?</li>
        <li>If H2O updates the warranty in the future, what is the notification process so we keep our FlexPro Armor materials in sync?</li>
      </ul>

      <!-- ACTIONS -->
      <div class="nu-actions">
        <a class="nu-btn-primary" href="mailto:?subject=Request%20%E2%80%94%20Copy%20of%20H2O%20Waterproofing%20Warranty%20Document">Send Request Email</a>
        <a class="nu-btn-secondary" href="#" onclick="window.print(); return false;">Print / Save as PDF</a>
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
  </footer>

</body>
</html>