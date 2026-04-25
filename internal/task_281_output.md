<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — MK Catch-Up & Mel Introduction — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B7A3F;
      --nu-warning: #C9530A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
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
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 56px;
      margin-top: -56px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 56px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; right: -100px;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      line-height: 1.15;
    }
    .nu-page-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 32px;
      font-weight: 400;
    }

    /* META BAR */
    .nu-meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      background: linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 36px;
    }
    .nu-meta-item {
      font-size: 0.85rem;
    }
    .nu-meta-label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 0.72rem;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 600;
    }
    .nu-status-pill {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin: 44px 0 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CONTEXT GRID */
    .nu-context-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 12px;
    }
    .nu-context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-context-card h3 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .nu-context-card h3::before {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--nu-cyan);
      transform: rotate(45deg);
    }
    .nu-context-card .name {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-context-card .role {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 12px;
      font-style: italic;
    }
    .nu-context-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-context-card li {
      font-size: 0.92rem;
      padding: 5px 0;
      padding-left: 14px;
      position: relative;
    }
    .nu-context-card li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 0;
    }

    /* CHECKLIST */
    .nu-checklist {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 12px;
    }
    .nu-checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid #eef0f5;
      font-size: 0.97rem;
    }
    .nu-checklist-item:last-child { border-bottom: none; }
    .nu-checkbox {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .nu-checklist-item .step-num {
      font-weight: 900;
      color: var(--nu-blue);
      margin-right: 10px;
      min-width: 26px;
    }

    /* EMAIL DRAFT */
    .nu-email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      margin-bottom: 24px;
    }
    .nu-email-header {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .nu-email-header h3 {
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .nu-email-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-email-fields {
      background: #f5f7fb;
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .nu-email-field {
      display: flex;
      padding: 4px 0;
    }
    .nu-email-field-label {
      font-weight: 700;
      color: var(--nu-blue);
      min-width: 78px;
      letter-spacing: 0.02em;
    }
    .nu-email-field-value {
      color: var(--nu-dark-text);
      flex: 1;
      word-break: break-word;
    }
    .nu-email-body {
      padding: 28px 32px;
      font-size: 0.97rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .nu-email-body p {
      margin-bottom: 16px;
      padding-left: 24px;
    }
    .nu-email-body p.no-indent {
      padding-left: 0;
    }
    .nu-email-body .greeting {
      padding-left: 0;
      font-weight: 700;
    }
    .nu-email-body .signature {
      padding-left: 24px;
      margin-top: 24px;
      line-height: 1.5;
    }
    .nu-email-body .signature .name {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .nu-email-body .bullet-list {
      list-style: none;
      padding-left: 24px;
      margin-bottom: 16px;
    }
    .nu-email-body .bullet-list li {
      padding: 4px 0 4px 18px;
      position: relative;
    }
    .nu-email-body .bullet-list li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* COPY BUTTON ROW */
    .nu-action-row {
      padding: 14px 24px;
      background: #fafbfd;
      border-top: 1px solid var(--nu-medium-gray);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 10px 22px;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      cursor: pointer;
      border: 2px solid var(--nu-blue);
      transition: all 0.18s ease;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0,0,255,0.25);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-action-note {
      font-size: 0.82rem;
      color: #666;
      margin-left: auto;
      font-style: italic;
    }

    /* TALKING POINTS */
    .nu-talking-points {
      background: linear-gradient(135deg, #fffbf3 0%, #fff5e0 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 22px 28px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 20px;
    }
    .nu-talking-points h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      font-size: 1rem;
    }
    .nu-talking-points ul {
      list-style: none;
      padding: 0;
    }
    .nu-talking-points li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.94rem;
    }
    .nu-talking-points li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--nu-accent-gold);
      font-weight: 900;
    }

    /* TIMELINE */
    .nu-timeline {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 24px;
      margin-left: 8px;
    }
    .nu-timeline-item {
      position: relative;
      padding: 12px 0 12px 0;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -32px;
      top: 18px;
      width: 14px;
      height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .nu-timeline-when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: -40%; left: -10%;
      width: 50%; height: 180%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.08) 0%, transparent 70%);
    }
    .nu-footer * { position: relative; z-index: 2; }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.18em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 50px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-context-grid { grid-template-columns: 1fr; }
      .nu-email-body { padding: 22px 20px; }
      .nu-email-body p, .nu-email-body .signature, .nu-email-body .bullet-list { padding-left: 0; }
      .nu-action-note { margin-left: 0; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-row { display: none; }
      .nu-email-draft { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,56 L1440,0 L1440,56 L0,56 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title">Action Item: <span>MK Catch-Up & Mel Introduction</span></h1>
      <p class="nu-page-subtitle">Send MK Smith catch-up emails and make an email introduction between MK and Mel.</p>

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Action Item</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Captured</div>
          <div class="nu-meta-value">2026-04-24</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value"><span class="nu-status-pill">Drafts Ready — Aaron Review</span></div>
        </div>
      </div>

      <!-- CONTEXT -->
      <h2 class="nu-section-title">The <span>People Involved</span></h2>
      <div class="nu-context-grid">
        <div class="nu-context-card">
          <h3>Recipient One</h3>
          <div class="name">Mary Katherine "MK" Smith</div>
          <div class="role">Marketing Contractor — Norris Utilities®</div>
          <ul>
            <li>Independent contractor, not an employee</li>
            <li>Owns brand voice, social, and marketing collateral</li>
            <li>Works closely with Aaron on FlexPro Armor positioning</li>
            <li>Needs an active pipeline of marketing assets and customer wins to talk about</li>
          </ul>
        </div>
        <div class="nu-context-card">
          <h3>Recipient Two</h3>
          <div class="name">Mel</div>
          <div class="role">Marketing/creative collaborator — to be introduced to MK</div>
          <ul>
            <li>Aaron is brokering the introduction by email</li>
            <li>Goal: open the door for MK and Mel to compare notes and see where they can help each other</li>
            <li>Aaron stays on the thread but lets the two of them drive next steps</li>
          </ul>
        </div>
      </div>

      <!-- WORKFLOW -->
      <h2 class="nu-section-title">The <span>Workflow</span></h2>
      <div class="nu-checklist">
        <div class="nu-checklist-item">
          <div class="nu-checkbox"></div>
          <div class="step-num">1.</div>
          <div>Review Email A (Catch-Up to MK) below — confirm the project list reflects what you want her focused on this cycle.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-checkbox"></div>
          <div class="step-num">2.</div>
          <div>Review Email B (Intro: MK ↔ Mel) — confirm Mel's email address before sending and adjust the one-line bio for each side if needed.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-checkbox"></div>
          <div class="step-num">3.</div>
          <div>Send Email A first so MK has fresh context, then send Email B within 30 minutes so the intro lands while she's already in the inbox.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-checkbox"></div>
          <div class="step-num">4.</div>
          <div>Drop both threads into the "Marketing — MK" Gmail label so future follow-ups stay grouped.</div>
        </div>
        <div class="nu-checklist-item">
          <div class="nu-checkbox"></div>
          <div class="step-num">5.</div>
          <div>Mark this action item closed on the master tracker once both messages are sent.</div>
        </div>
      </div>

      <!-- EMAIL A -->
      <h2 class="nu-section-title">Email A — <span>Catch-Up to MK</span></h2>

      <div class="nu-email-draft">
        <div class="nu-email-header">
          <h3>Catch-Up: Where We Are & What's Next</h3>
          <div class="nu-email-tag">Draft — Send First</div>
        </div>
        <div class="nu-email-fields">
          <div class="nu-email-field">
            <div class="nu-email-field-label">From:</div>
            <div class="nu-email-field-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          </div>
          <div class="nu-email-field">
            <div class="nu-email-field-label">To:</div>
            <div class="nu-email-field-value">MK Smith</div>
          </div>
          <div class="nu-email-field">
            <div class="nu-email-field-label">Subject:</div>
            <div class="nu-email-field-value">Catch-up — where we are and what's next</div>
          </div>
        </div>
        <div class="nu-email-body">
          <p class="greeting">MK —</p>

          <p>I owe you a real catch-up rather than another scattered text, so here it is in one place. We've moved a lot of pieces in the last few weeks and I want you working from the same picture I am.</p>

          <p>On the FlexPro Armor side, the bucket cover line continues to be the strongest pull. NU-BC-2851 and NU-BC-2834 are the two SKUs doing most of the work, and the combo versions are starting to land with utility crews who want one purchase order instead of two. The story is still the same one we've been telling — handmade in the U.S., 50% margin, built for guys who actually live in their buckets — and the field response is backing it up.</p>

          <p>On the equipment side, the Skylift conversation with Nick Gordon is moving, and the Bay Shore Systems territory work with Andy Barron is opening up new accounts in the Southeast. None of that is public-facing yet, but it's shaping where we're going to want marketing energy in the second half of the year.</p>

          <p class="no-indent" style="padding-left: 0; font-weight: 700; color: var(--nu-blue);">What I'd like from you in the next two weeks:</p>

          <ul class="bullet-list">
            <li>A short refresh of the FlexPro Armor one-pager so it reflects the current SKU lineup and the combo bundles.</li>
            <li>Two or three short customer-story posts we can run on social — I'll feed you the names and the short version of what happened in the field.</li>
            <li>A simple email-signature audit across the team so everyone is on the same Norris Utilities® branding.</li>
            <li>One conversation about Q3 — what you'd ideally be building next so we're not chasing it last minute.</li>
          </ul>

          <p>Separate from this, I'm sending you a short intro email right after this one. I want to put you in front of Mel — y'all are in adjacent lanes and I think a conversation between the two of you would be advantageous on both ends. No agenda from me beyond that. Take it where it makes sense.</p>

          <p>Tell me what's missing from your side, and let me know if any of the above needs to shift around your bandwidth this month. I'd rather adjust now than at the deadline.</p>

          <div class="signature">
            <p style="padding-left: 0;">Sincerely,</p>
            <span class="name">Aaron C. Norris</span><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
        <div class="nu-action-row">
          <a class="nu-btn-primary" href="mailto:?subject=Catch-up%20%E2%80%94%20where%20we%20are%20and%20what%27s%20next">Open in Mail</a>
          <a class="nu-btn-secondary" href="#">Mark as Sent</a>
          <span class="nu-action-note">Send first — gives MK context before the intro lands.</span>
        </div>
      </div>

      <!-- EMAIL B -->
      <h2 class="nu-section-title">Email B — <span>Introduction: MK ↔ Mel</span></h2>

      <div class="nu-email-draft">
        <div class="nu-email-header">
          <h3>Intro: MK Smith ↔ Mel</h3>
          <div class="nu-email-tag">Draft — Send Second</div>
        </div>
        <div class="nu-email-fields">
          <div class="nu-email-field">
            <div class="nu-email-field-label">From:</div>
            <div class="nu-email-field-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          </div>
          <div class="nu-email-field">
            <div class="nu-email-field-label">To:</div>
            <div class="nu-email-field-value">MK Smith; Mel</div>
          </div>
          <div class="nu-email-field">
            <div class="nu-email-field-label">Subject:</div>
            <div class="nu-email-field-value">Intro — MK Smith &lt;&gt; Mel</div>
          </div>
        </div>
        <div class="nu-email-body">
          <p class="greeting">MK, Mel —</p>

          <p>Quick note to put the two of you in the same inbox. I've been meaning to make this introduction for a while and today's the day.</p>

          <p>MK — meet Mel. Mel works in the marketing and creative space and has a way of seeing the bigger picture on positioning. We've crossed paths enough times that I know there's overlap with what you and I are doing on the Norris Utilities® side, and I'd rather you two find each other than wait for a meeting where I'm trying to translate.</p>

          <p>Mel — meet MK. MK is the marketing contractor on the Norris Utilities® side. She owns our brand voice, our social presence, and the customer-story work behind FlexPro Armor and the rest of our line. She's sharp, low-drama, and ships work on time. If there's an angle where the two of you can compare notes or pull each other into a project, I want it to be easy to do.</p>

          <p>I'm stepping out of the thread from here. Take it from a phone call, a coffee, a Loom, whatever fits. I'll loop back in if either of you wants me to.</p>

          <p>Glad to finally get this on the calendar.</p>

          <div class="signature">
            <p style="padding-left: 0;">Sincerely,</p>
            <span class="name">Aaron C. Norris</span><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
        <div class="nu-action-row">
          <a class="nu-btn-primary" href="mailto:?subject=Intro%20%E2%80%94%20MK%20Smith%20%3C%3E%20Mel">Open in Mail</a>
          <a class="nu-btn-secondary" href="#">Mark as Sent</a>
          <span class="nu-action-note">Confirm Mel's email before sending. CC nobody else.</span>
        </div>
      </div>

      <!-- TALKING POINTS -->
      <h2 class="nu-section-title">If <span>MK Calls After Reading</span></h2>
      <div class="nu-talking-points">
        <h4>Have these answers ready:</h4>
        <ul>
          <li>Q3 priorities are still under construction — Aaron will set the calendar within two weeks, but the FlexPro Armor refresh and the customer-story posts are not waiting on Q3.</li>
          <li>Customer-story names will come from Aaron directly — MK does not need to source them.</li>
          <li>Mel introduction is genuinely no-strings — Aaron is not asking MK to recruit Mel onto Norris work, just to know each other.</li>
          <li>Email-signature audit is a one-pass project, not a redesign — current Lato/branding stays, the goal is consistency across the team.</li>
          <li>Bandwidth is negotiable — Aaron would rather flex the scope than miss the deadline.</li>
        </ul>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title">After <span>The Send</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-when">Same Day</div>
          <div class="nu-timeline-text">Both emails sent. Drafts deleted. Threads labeled "Marketing — MK".</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-when">Within 48 Hours</div>
          <div class="nu-timeline-text">If MK has not responded to the catch-up, send a one-line nudge. If MK and Mel have not responded to the intro, no nudge — that one runs on their pace.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-when">Within 7 Days</div>
          <div class="nu-timeline-text">Confirm with MK that the FlexPro Armor one-pager refresh and customer-story posts are scoped and on her calendar.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-when">Within 14 Days</div>
          <div class="nu-timeline-text">Hold the Q3 conversation with MK. Lock the next-quarter marketing focus before it slides into June.</div>
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