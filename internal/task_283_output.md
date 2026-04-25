<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing Warranty — Action Item — Norris Utilities®</title>
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
      --nu-status-red: #C0392B;
      --nu-status-amber: #D97706;
      --nu-status-green: #15803D;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA with ghost phoenix */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 35%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* DOCUMENT META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding: 18px 24px;
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #FFFFFF 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 36px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-meta-item {
      display: flex;
      flex-direction: column;
      font-size: 0.85rem;
    }
    .nu-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.72rem;
      margin-bottom: 2px;
    }
    .nu-meta-value {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-status-pill {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      background: var(--nu-status-amber);
      color: var(--nu-white);
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title .accent {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 760px;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 18px;
      line-height: 1.25;
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 18px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* TWO COLUMN */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 12px;
    }

    /* CONTACT BLOCK */
    .nu-contact-block {
      background: linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 22px 26px;
      margin: 12px 0;
    }
    .nu-contact-block .vendor-name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-contact-block .vendor-line {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 4px;
    }
    .nu-contact-block .vendor-line a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-contact-block .vendor-line a:hover { text-decoration: underline; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .step-num {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
    }
    .nu-checklist .step-body strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }
    .nu-checklist .step-body span {
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }

    /* QUESTION LIST */
    .nu-questions {
      list-style: none;
      padding: 0;
      margin: 8px 0 0;
    }
    .nu-questions li {
      position: relative;
      padding: 8px 0 8px 26px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .nu-questions li:last-child { border-bottom: none; }
    .nu-questions li::before {
      content: '•';
      position: absolute;
      left: 6px;
      top: 6px;
      color: var(--nu-cyan);
      font-size: 1.4rem;
      font-weight: 900;
      line-height: 1;
    }

    /* WHY-IT-MATTERS CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, #001a66 0%, #000033 100%);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      margin: 24px 0;
      position: relative;
      overflow: hidden;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      top: -30%;
      right: -10%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.2) 0%, transparent 70%);
    }
    .nu-callout h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      margin-bottom: 8px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
    }
    .nu-callout p {
      color: rgba(255,255,255,0.92);
      font-size: 0.98rem;
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }

    /* EMAIL DRAFT */
    .nu-email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      font-family: Georgia, 'Times New Roman', serif;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-email-draft .email-header {
      font-family: var(--font-primary);
      font-size: 0.9rem;
      color: var(--nu-body-text);
      border-bottom: 2px solid var(--nu-blue);
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .nu-email-draft .email-header span {
      display: inline-block;
      min-width: 70px;
      font-weight: 700;
      color: var(--nu-blue);
    }
    .nu-email-draft p { margin: 12px 0; padding-left: 24px; }
    .nu-email-draft .email-greeting,
    .nu-email-draft .email-close { padding-left: 0; }
    .nu-email-draft ul {
      list-style: none;
      padding-left: 24px;
      margin: 12px 0;
    }
    .nu-email-draft ul li { padding: 4px 0; }
    .nu-email-draft ul li::before { content: '• '; color: var(--nu-blue); }
    .nu-email-draft .signature {
      margin-top: 18px;
      padding-left: 0;
      font-family: var(--font-primary);
      font-size: 0.92rem;
      color: var(--nu-body-text);
      border-top: 1px solid var(--nu-medium-gray);
      padding-top: 14px;
    }
    .nu-email-draft .signature .name {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }

    /* REQUIRED ITEMS LIST */
    .nu-required {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-required li {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-required li:last-child { border-bottom: none; }
    .nu-required .check-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
    }
    .nu-required .item-text {
      flex: 1;
      font-size: 0.96rem;
    }
    .nu-required .item-text strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 2px;
    }
    .nu-required .item-text span {
      color: var(--nu-body-text);
      font-size: 0.88rem;
    }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline li {
      position: relative;
      padding: 8px 0 16px 36px;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 14px;
      width: 16px;
      height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline .when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .nu-timeline .what {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      font-weight: 700;
    }
    .nu-timeline .detail {
      color: var(--nu-body-text);
      font-size: 0.9rem;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 56px; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-card, .nu-callout, .nu-email-draft { padding: 20px 18px; }
      .nu-meta-bar { flex-direction: column; align-items: flex-start; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-email-draft { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <span class="nu-meta-label">Action Item</span>
          <span class="nu-meta-value">Vendor Document Request</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Owner</span>
          <span class="nu-meta-value">Aaron C. Norris</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Source</span>
          <span class="nu-meta-value">reMarkable Tablet</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Logged</span>
          <span class="nu-meta-value">2026-04-25</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Status</span>
          <span class="nu-status-pill">Open — Action Required</span>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">
        Get Copy of <span class="accent">Actual Warranty Document</span><br>
        from H2O Waterproofing
      </h1>
      <p class="nu-page-subtitle">
        Vendor follow-up to obtain the written warranty terms covering the H2O Waterproofing
        treatment used on FlexPro Armor bucket covers. Required for customer-facing documentation,
        sales collateral, and warranty claim handling.
      </p>

      <!-- WHY IT MATTERS -->
      <div class="nu-callout">
        <h3>Why This Matters</h3>
        <p>
          Norris Utilities® positions FlexPro Armor as a premium, USA-handmade product backed by
          documented performance claims. Customers — especially utility purchasing departments and
          dealer accounts — increasingly request the underlying material warranty in writing before
          issuing POs. Without the actual H2O Waterproofing document on file, sales conversations
          stall and warranty disputes have no paper trail to lean on.
        </p>
      </div>

      <!-- VENDOR -->
      <h2 class="nu-section-title"><span class="accent">Vendor</span> <span class="rest">Contact Information</span></h2>
      <div class="nu-contact-block">
        <div class="vendor-name">H2O Waterproofing</div>
        <div class="vendor-line"><strong>Relationship:</strong> Material treatment supplier — waterproofing chemistry applied during FlexPro Armor cover fabrication</div>
        <div class="vendor-line"><strong>Note:</strong> Aaron to confirm primary rep contact (phone, email, account number) and update this record once retrieved from H2O Waterproofing account file</div>
      </div>

      <!-- WHAT TO REQUEST -->
      <h2 class="nu-section-title"><span class="accent">What</span> <span class="rest">to Request</span></h2>
      <div class="nu-card">
        <h3>Required Items from H2O Waterproofing</h3>
        <ul class="nu-required">
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Signed Warranty Document (PDF)</strong>
              <span>The actual written warranty — full terms, exclusions, claim procedure, and signature block</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Coverage Period</strong>
              <span>Stated duration in years/months and the trigger date (date of treatment, date of sale, or date of installation)</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Performance Specifications</strong>
              <span>Hydrostatic resistance rating, abrasion cycles, UV exposure tolerance, and any temperature range claims</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Exclusions &amp; Limitations</strong>
              <span>Exact language on misuse, normal wear, chemical exposure, sharp punctures, and any voiding conditions</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Pass-Through Rights</strong>
              <span>Confirmation that Norris Utilities® may extend the warranty to end-customers and dealers</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Claim Process</strong>
              <span>Step-by-step procedure for submitting a claim, including who to contact, what evidence is required, and turnaround commitment</span>
            </span>
          </li>
          <li>
            <span class="check-box"></span>
            <span class="item-text">
              <strong>Material Safety / Compliance Sheet</strong>
              <span>SDS or equivalent — required for utility customers with internal procurement compliance reviews</span>
            </span>
          </li>
        </ul>
      </div>

      <!-- QUESTIONS TO ASK -->
      <h2 class="nu-section-title"><span class="accent">Questions</span> <span class="rest">to Ask the H2O Rep</span></h2>
      <div class="nu-card">
        <h3>Clarifications Beyond the Document</h3>
        <ul class="nu-questions">
          <li>Is the warranty transferable when a FlexPro Armor cover is resold or moves between fleet trucks?</li>
          <li>Does the coverage period reset if the cover is recoated, repaired, or returned for refurbishment?</li>
          <li>What documentation does H2O require from us at the time of sale to keep the warranty enforceable (lot numbers, treatment date, customer info)?</li>
          <li>Are there approved cleaning chemicals or maintenance practices that must be followed to preserve coverage?</li>
          <li>Has the warranty language been updated in the last 12 months — and if so, which version applies to the FlexPro Armor inventory we currently hold?</li>
          <li>Is there a co-branded or white-label version of the warranty Norris Utilities® may use in customer-facing literature?</li>
        </ul>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span class="accent">Action</span> <span class="rest">Steps</span></h2>
      <div class="nu-card">
        <ol class="nu-checklist">
          <li>
            <div class="step-num">1</div>
            <div class="step-body">
              <strong>Pull H2O Waterproofing contact record</strong>
              <span>Locate the rep name, direct phone, and email from the H2O account file. If missing, search Gmail for "H2O Waterproofing" and the original account-setup thread.</span>
            </div>
          </li>
          <li>
            <div class="step-num">2</div>
            <div class="step-body">
              <strong>Send the request email (draft below)</strong>
              <span>Use the prepared draft. CC Caroline Butler so she can file the response in the FlexPro Armor vendor folder when it arrives.</span>
            </div>
          </li>
          <li>
            <div class="step-num">3</div>
            <div class="step-body">
              <strong>Log the request in the master tracker</strong>
              <span>Add a row to the FlexPro Armor vendor section: requested date, expected return date, owner = Aaron, status = Awaiting H2O response.</span>
            </div>
          </li>
          <li>
            <div class="step-num">4</div>
            <div class="step-body">
              <strong>Follow up on day 5 if no response</strong>
              <span>One short, polite nudge by email. If still no response on day 8, follow up by phone with the rep directly.</span>
            </div>
          </li>
          <li>
            <div class="step-num">5</div>
            <div class="step-body">
              <strong>Save warranty PDF in canonical location</strong>
              <span>File at: ~/norris-ops/internal/vendors/h2o_waterproofing_warranty.pdf and reference it in the FlexPro Armor product spec sheet.</span>
            </div>
          </li>
          <li>
            <div class="step-num">6</div>
            <div class="step-body">
              <strong>Update customer-facing collateral</strong>
              <span>Add a "Backed by manufacturer waterproofing warranty — full terms on request" line to the FlexPro Armor sell sheet and quote template.</span>
            </div>
          </li>
          <li>
            <div class="step-num">7</div>
            <div class="step-body">
              <strong>Brief Caroline Butler</strong>
              <span>Forward the warranty PDF and a one-page plain-English summary so CB can answer customer warranty questions without escalation.</span>
            </div>
          </li>
        </ol>
      </div>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title"><span class="accent">Email</span> <span class="rest">Draft — Ready to Send</span></h2>
      <div class="nu-email-draft">
        <div class="email-header">
          <div><span>To:</span> H2O Waterproofing — primary rep</div>
          <div><span>CC:</span> Caroline Butler &lt;caroline@norrisutilities.com&gt;</div>
          <div><span>From:</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><span>Subject:</span> Request — Copy of Current Waterproofing Warranty Document</div>
        </div>

        <p class="email-greeting">Name —</p>

        <p>I'm working through our FlexPro Armor product documentation and would like to keep your current warranty on file here at Norris Utilities.</p>

        <p>Could you send over the actual signed warranty document covering the H2O Waterproofing treatment? Specifically, I'd like to make sure we have:</p>

        <ul>
          <li>The full written warranty (PDF is fine)</li>
          <li>Coverage period and what triggers the start date</li>
          <li>Performance specs — hydrostatic, abrasion, UV, temperature</li>
          <li>Exclusions and conditions that would void coverage</li>
          <li>Confirmation that we may pass the warranty through to end-customers</li>
          <li>The current claim process and turnaround commitment</li>
          <li>Latest SDS or compliance sheet for our utility customers' procurement files</li>
        </ul>

        <p>A couple of customer purchasing departments have asked for the document directly, and I'd rather have it in hand than scramble in the middle of an order.</p>

        <p>If the language has been updated recently, please send the most current version and let me know which lot or production date it first applied to.</p>

        <p>Appreciate it — happy to jump on a quick call if anything is easier to walk through live.</p>

        <p class="email-close">Sincerely,</p>

        <div class="signature">
          <div class="name">Aaron C. Norris</div>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="accent">Timeline</span> <span class="rest">&amp; Expected Cadence</span></h2>
      <div class="nu-card">
        <ul class="nu-timeline">
          <li>
            <div class="when">Day 0 — 2026-04-25</div>
            <div class="what">Action item logged from reMarkable</div>
            <div class="detail">Captured during reMarkable scan, queued into the autonomous build engine.</div>
          </li>
          <li>
            <div class="when">Day 1 — 2026-04-26</div>
            <div class="what">Confirm H2O rep contact, send email draft</div>
            <div class="detail">Aaron pulls rep info, fills the To: line, sends with Caroline CC'd.</div>
          </li>
          <li>
            <div class="when">Day 5 — 2026-04-30</div>
            <div class="what">Polite email follow-up if silent</div>
            <div class="detail">Single reply on the original thread — keeps the chain searchable later.</div>
          </li>
          <li>
            <div class="when">Day 8 — 2026-05-03</div>
            <div class="what">Phone follow-up if still no response</div>
            <div class="detail">Direct call to the rep; escalate to account manager if needed.</div>
          </li>
          <li>
            <div class="when">On Receipt</div>
            <div class="what">File document, update tracker, brief CB</div>
            <div class="detail">Save to vendor folder, mark master tracker complete, update FlexPro Armor collateral.</div>
          </li>
        </ul>
      </div>

      <!-- DOWNSTREAM -->
      <h2 class="nu-section-title"><span class="accent">Downstream</span> <span class="rest">Outputs Once Document Is in Hand</span></h2>
      <div class="nu-grid-2">
        <div class="nu-card">
          <h3>Customer-Facing Updates</h3>
          <p>Add a warranty reference line to the FlexPro Armor sell sheet, the quote template, and the line card. Include a "full terms available on request" pointer rather than embedding the entire document.</p>
        </div>
        <div class="nu-card">
          <h3>Internal Process</h3>
          <p>Caroline Butler gets a one-page plain-English summary so she can confidently answer Tier-1 warranty questions without routing every inquiry back through Aaron.</p>
        </div>
        <div class="nu-card">
          <h3>Dealer &amp; Distributor Channel</h3>
          <p>Forward the warranty to Irby (Jared Lemoine) and other active dealer accounts so it lives in their procurement file before the next quote cycle.</p>
        </div>
        <div class="nu-card">
          <h3>Compliance &amp; Claims</h3>
          <p>Establish the canonical claim path: customer reports issue → Norris Utilities® documents → submit to H2O per their stated procedure → close loop with customer.</p>
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
  </footer>

</body>
</html>