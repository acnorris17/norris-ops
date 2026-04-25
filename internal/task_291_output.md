<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Written Confirmation Follow-Up — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-success: #10B981;
      --nu-warning: #F59E0B;
      --nu-danger: #EF4444;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
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

    /* GHOST PHOENIX WATERMARK */
    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 14px rgba(0,0,0,0.35));
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
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* WHITE CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 0 70px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE */
    .nu-page-header {
      text-align: center;
      margin-bottom: 40px;
    }
    .nu-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 16px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .nu-page-title .nu-blue-word { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* PRIORITY STRIP */
    .nu-priority-strip {
      background: linear-gradient(135deg, var(--nu-warning) 0%, #D97706 100%);
      color: var(--nu-white);
      padding: 14px 24px;
      border-radius: 6px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 700;
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.25);
    }
    .nu-priority-strip-icon {
      font-size: 1.4rem;
      flex-shrink: 0;
    }
    .nu-priority-strip-text {
      flex: 1;
      font-size: 0.95rem;
      letter-spacing: 0.01em;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO-COLUMN GRID */
    .nu-two-col {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }
    @media (max-width: 860px) {
      .nu-two-col { grid-template-columns: 1fr; }
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-card h3 .blue { color: var(--nu-blue); }

    /* CALL DETAILS */
    .nu-detail-row {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 16px;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-detail-row:last-child { border-bottom: none; }
    .nu-detail-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-size: 0.78rem;
      padding-top: 2px;
    }
    .nu-detail-value {
      color: var(--nu-body-text);
    }

    /* CALL SCRIPT */
    .nu-script {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin: 16px 0;
      font-size: 0.95rem;
      line-height: 1.65;
    }
    .nu-script-label {
      display: block;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.72rem;
      margin-bottom: 6px;
    }
    .nu-script p { margin-bottom: 12px; }
    .nu-script p:last-child { margin-bottom: 0; }
    .nu-script em {
      color: var(--nu-dark-text);
      font-style: normal;
      font-weight: 700;
      background: rgba(6, 208, 255, 0.18);
      padding: 1px 6px;
      border-radius: 3px;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 12px 14px 12px 44px;
      margin-bottom: 8px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      font-size: 0.94rem;
      border-left: 3px solid var(--nu-cyan);
      transition: background 0.15s ease;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* CONFIRMATION FIELDS */
    .nu-confirm-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    @media (max-width: 600px) {
      .nu-confirm-grid { grid-template-columns: 1fr; }
    }
    .nu-confirm-field {
      background: var(--nu-light-gray);
      padding: 12px 14px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-blue);
    }
    .nu-confirm-field label {
      display: block;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 4px;
    }
    .nu-confirm-field .blank {
      display: block;
      height: 22px;
      border-bottom: 1.5px dotted #999;
    }

    /* INFO BOX */
    .nu-info-box {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      padding: 18px 22px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .nu-info-box-title {
      font-weight: 900;
      font-size: 0.95rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-info-box p {
      font-size: 0.92rem;
      line-height: 1.6;
    }

    /* WHY-IT-MATTERS */
    .nu-why-list {
      list-style: none;
      padding: 0;
    }
    .nu-why-list li {
      padding-left: 28px;
      position: relative;
      margin-bottom: 12px;
      font-size: 0.94rem;
      line-height: 1.55;
    }
    .nu-why-list li::before {
      content: '•';
      position: absolute;
      left: 8px; top: -2px;
      color: var(--nu-blue);
      font-size: 1.6rem;
      font-weight: 900;
      line-height: 1;
    }

    /* EMAIL TEMPLATE */
    .nu-email {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
      font-size: 0.93rem;
      line-height: 1.65;
      font-family: 'Georgia', 'Times New Roman', serif;
    }
    .nu-email-header {
      padding-bottom: 12px;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-family: var(--font-primary);
      font-size: 0.85rem;
    }
    .nu-email-header div {
      padding: 3px 0;
    }
    .nu-email-header .label {
      display: inline-block;
      width: 70px;
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-email-body p {
      margin-bottom: 12px;
      padding-left: 20px;
    }
    .nu-email-body .greeting {
      padding-left: 0;
    }
    .nu-email-body .signature {
      padding-left: 0;
      margin-top: 14px;
    }
    .nu-email-body .signature-name {
      padding-left: 20px;
      margin-top: 0;
    }
    .nu-email .bullet {
      padding-left: 36px;
    }

    /* OUTCOMES */
    .nu-outcomes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 24px;
    }
    @media (max-width: 760px) {
      .nu-outcomes { grid-template-columns: 1fr; }
    }
    .nu-outcome {
      padding: 18px;
      border-radius: 8px;
      border-top: 4px solid;
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-outcome.success { border-top-color: var(--nu-success); }
    .nu-outcome.warning { border-top-color: var(--nu-warning); }
    .nu-outcome.escalate { border-top-color: var(--nu-danger); }
    .nu-outcome-title {
      font-weight: 900;
      font-size: 0.95rem;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-outcome-title.success { color: var(--nu-success); }
    .nu-outcome-title.warning { color: var(--nu-warning); }
    .nu-outcome-title.escalate { color: var(--nu-danger); }
    .nu-outcome-text {
      font-size: 0.88rem;
      line-height: 1.55;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
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
    .nu-footer-meta {
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,0.1);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.03em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 24px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-detail-row { grid-template-columns: 1fr; gap: 4px; }
      .nu-detail-label { padding-top: 0; }
      .nu-container { padding: 0 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-outcome { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE HEADER -->
      <div class="nu-page-header">
        <div class="nu-eyebrow">Action Item • reMarkable Capture</div>
        <h1 class="nu-page-title">
          <span class="nu-blue-word">Call</span> H2O Waterproofing<br>
          for Written Confirmation of Work
        </h1>
        <p class="nu-page-subtitle">
          Phone-then-email follow-up to convert verbal commitments into a written, signed scope of work that protects Norris Utilities® and clarifies expectations on both sides.
        </p>
      </div>

      <!-- PRIORITY STRIP -->
      <div class="nu-priority-strip">
        <span class="nu-priority-strip-icon">▲</span>
        <span class="nu-priority-strip-text">
          OPEN ITEM — verbal-only confirmation. No paper trail exists yet. Resolve before any further work proceeds or invoice is paid.
        </span>
      </div>

      <!-- DETAILS + WHY -->
      <div class="nu-two-col">
        <div class="nu-card">
          <h3><span class="blue">Call</span> Details</h3>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Vendor</div>
            <div class="nu-detail-value">H2O Waterproofing</div>
          </div>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Caller</div>
            <div class="nu-detail-value">Aaron C. Norris, Founder &amp; CEO</div>
          </div>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Best Time</div>
            <div class="nu-detail-value">Tuesday – Thursday, 9:00 AM – 11:00 AM CT</div>
          </div>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Channel</div>
            <div class="nu-detail-value">Voice call first → email written confirmation immediately after</div>
          </div>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Goal</div>
            <div class="nu-detail-value">Receive a written, signed scope-of-work and price confirmation in writing — email or PDF acceptable.</div>
          </div>
          <div class="nu-detail-row">
            <div class="nu-detail-label">Status</div>
            <div class="nu-detail-value">Open — verbal commitment only, no paperwork on file</div>
          </div>
        </div>

        <div class="nu-card">
          <h3><span class="blue">Why</span> This Matters</h3>
          <ul class="nu-why-list">
            <li>Verbal-only agreements create scope drift and price disputes.</li>
            <li>Aaron needs the paper trail before approving payment or scheduling next steps.</li>
            <li>Written confirmation locks in pricing, materials, and warranty terms.</li>
            <li>Protects Norris Utilities® from change-order surprises.</li>
            <li>Files cleanly into the open-items tracker once received.</li>
          </ul>
        </div>
      </div>

      <!-- CALL SCRIPT -->
      <div class="nu-card" style="margin-bottom: 28px;">
        <h3><span class="blue">Phone</span> Script</h3>

        <div class="nu-script">
          <span class="nu-script-label">Opener</span>
          <p>"Hey, this is Aaron Norris with Norris Utilities. I'm following up on the waterproofing work we discussed — I want to make sure we're on the same page in writing before things move forward."</p>
        </div>

        <div class="nu-script">
          <span class="nu-script-label">The Ask</span>
          <p>"Could you send me a written confirmation of the work — <em>scope</em>, <em>price</em>, <em>materials</em>, <em>start date</em>, and <em>warranty</em>? Email is fine. I just need it on paper so I can file it on my end."</p>
        </div>

        <div class="nu-script">
          <span class="nu-script-label">If They Push Back</span>
          <p>"I appreciate that. We always run everything through written documentation — it's how we protect both sides. Even a short email summary works for me."</p>
        </div>

        <div class="nu-script">
          <span class="nu-script-label">Close</span>
          <p>"Send it to <em>acnorris@norrisutilities.com</em>. Once I've got it in hand, we're good to keep moving. Appreciate y'all."</p>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-card" style="margin-bottom: 28px;">
        <h3><span class="blue">Confirmation</span> Must Include</h3>
        <ul class="nu-checklist">
          <li><strong>Scope of work</strong> — exactly what is being waterproofed (location, square footage, surfaces).</li>
          <li><strong>Materials and method</strong> — product names, application process, number of coats.</li>
          <li><strong>Total price</strong> — itemized if possible (labor, materials, mobilization, taxes).</li>
          <li><strong>Payment terms</strong> — deposit required, balance schedule, net days.</li>
          <li><strong>Start and completion dates</strong> — firm dates, not "next week-ish."</li>
          <li><strong>Warranty</strong> — duration, what is covered, what voids it.</li>
          <li><strong>Insurance &amp; license</strong> — current COI naming Norris Utilities®, LLC if applicable.</li>
          <li><strong>Signature</strong> — H2O Waterproofing principal signed; Aaron countersigns on receipt.</li>
        </ul>
      </div>

      <!-- INFO BOX + CONFIRM FIELDS -->
      <div class="nu-two-col">
        <div class="nu-card">
          <h3><span class="blue">Capture</span> on the Call</h3>
          <p style="font-size: 0.9rem; margin-bottom: 14px; color: var(--nu-body-text);">
            Fill these in during the call so the email follow-up writes itself.
          </p>
          <div class="nu-confirm-grid">
            <div class="nu-confirm-field">
              <label>Spoke With</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Direct Phone / Cell</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Email for Confirmation</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Promised Send-By</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Quoted Price</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Start Date</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Warranty Term</label>
              <span class="blank"></span>
            </div>
            <div class="nu-confirm-field">
              <label>Call Date / Time</label>
              <span class="blank"></span>
            </div>
          </div>
        </div>

        <div>
          <div class="nu-info-box">
            <div class="nu-info-box-title">Tone Reminder</div>
            <p>Direct, warm, confident. Never apologetic. The written confirmation isn't a favor — it's how Norris Utilities® does business with every vendor. Y'all-friendly is fine; pushy is not.</p>
          </div>
          <div class="nu-info-box">
            <div class="nu-info-box-title">Documentation Path</div>
            <p>Once received, save the confirmation to <strong>~/norris-ops/internal/vendors/h2o-waterproofing/</strong>, log the date in the open-items tracker, and remove this action item from the reMarkable list.</p>
          </div>
        </div>
      </div>

      <!-- FOLLOW-UP EMAIL -->
      <h2 class="nu-section-title" style="margin-top: 12px;">
        <span class="first">Follow-Up</span> <span class="rest">Email Template</span>
      </h2>
      <div class="nu-email">
        <div class="nu-email-header">
          <div><span class="label">From:</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><span class="label">To:</span> H2O Waterproofing</div>
          <div><span class="label">Subject:</span> Written confirmation — waterproofing scope &amp; pricing</div>
        </div>
        <div class="nu-email-body">
          <p class="greeting">Name —</p>
          <p>Good talking with you today. As we discussed, I'd like to get the waterproofing work confirmed in writing so we both have a clean record before we move forward.</p>
          <p>When you have a minute, please send over a short confirmation that covers:</p>
          <p class="bullet">• Scope of work (location and surfaces)</p>
          <p class="bullet">• Materials and method</p>
          <p class="bullet">• Total price and payment terms</p>
          <p class="bullet">• Start and completion dates</p>
          <p class="bullet">• Warranty term</p>
          <p>Email reply is fine — no formal contract needed unless you prefer one. Once I have it in hand, we are good to keep moving.</p>
          <p>Appreciate y'all and the work you've put in so far.</p>
          <p class="signature">Sincerely,</p>
          <p class="signature-name">Aaron C. Norris<br>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com</p>
        </div>
      </div>

      <!-- OUTCOMES -->
      <h2 class="nu-section-title" style="margin-top: 36px;">
        <span class="first">Possible</span> <span class="rest">Outcomes &amp; Next Steps</span>
      </h2>
      <div class="nu-outcomes">
        <div class="nu-outcome success">
          <div class="nu-outcome-title success">✓ Confirmation Received</div>
          <div class="nu-outcome-text">
            File under H2O Waterproofing vendor folder. Update open-items tracker. Authorize payment / next milestone. Close this action item.
          </div>
        </div>
        <div class="nu-outcome warning">
          <div class="nu-outcome-title warning">◐ Promised but Not Sent</div>
          <div class="nu-outcome-text">
            48-hour follow-up by phone. If still nothing, second email with deadline: "If I do not have it by [date], we'll need to pause work until I do."
          </div>
        </div>
        <div class="nu-outcome escalate">
          <div class="nu-outcome-title escalate">✕ Refusal or No Response</div>
          <div class="nu-outcome-text">
            Pause all work. Do not authorize payment. Document the refusal. Decide whether to source a new waterproofing vendor before resuming.
          </div>
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
    <div class="nu-footer-meta">
      Internal action sheet • Generated for reMarkable open-item resolution • Birmingham, Alabama
    </div>
  </footer>

</body>
</html>