```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Confirmation Call — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-warn: #C9A84C;
      --nu-red: #B8292E;
      --nu-green: #1F7A43;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* WHITE ASYMMETRIC CHEVRON */
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ACTION ITEM TITLE BLOCK */
    .action-title {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 20px;
      margin-bottom: 8px;
    }
    .action-label {
      display: inline-block;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      color: var(--nu-blue-deep);
      text-transform: uppercase;
      margin-bottom: 10px;
      padding: 4px 10px;
      background: rgba(0,0,255,0.08);
      border-radius: 3px;
    }
    .action-title h1 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .action-title h1 .blue {
      color: var(--nu-blue-deep);
    }
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin: 22px 0 38px;
      padding: 16px 22px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .action-meta div span.label {
      display: block;
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
      margin-bottom: 3px;
    }
    .action-meta div span.val {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 42px 0 14px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first {
      color: var(--nu-blue-deep);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }
    .section-lede {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
      max-width: 800px;
    }

    /* CONTACT CARD */
    .contact-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 14px;
    }
    .contact-left {
      background: linear-gradient(135deg, var(--nu-blue-deep) 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 26px 28px;
    }
    .contact-left .vendor {
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
      opacity: 0.85;
      margin-bottom: 6px;
    }
    .contact-left h3 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .contact-left p {
      font-size: 0.95rem;
      opacity: 0.92;
      line-height: 1.5;
    }
    .contact-right {
      padding: 26px 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }
    .contact-right .row {
      display: flex;
      gap: 14px;
      align-items: baseline;
      padding: 4px 0;
    }
    .contact-right .row .k {
      flex: 0 0 110px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-blue-deep);
    }
    .contact-right .row .v {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* CONFIRMATION CHECKLIST */
    .confirm-list {
      list-style: none;
      display: grid;
      gap: 14px;
      margin-top: 6px;
    }
    .confirm-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 22px 18px 22px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .confirm-item:hover {
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      transform: translateY(-1px);
    }
    .confirm-num {
      flex: 0 0 44px;
      height: 44px;
      width: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue-deep), var(--nu-blue));
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .confirm-body h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .confirm-body p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .confirm-body .ask {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.85rem;
      background: rgba(6,208,255,0.12);
      border: 1px solid rgba(6,208,255,0.4);
      color: var(--nu-blue-deep);
      padding: 5px 11px;
      border-radius: 4px;
      font-weight: 700;
    }

    /* CALL SCRIPT BOX */
    .script-box {
      background: linear-gradient(180deg, var(--nu-white) 0%, var(--nu-light-gray) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .script-box .script-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .script-box .script-header .chev {
      width: 28px; height: 28px;
      background: var(--nu-blue);
      clip-path: polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%, 30% 50%);
    }
    .script-box .script-header h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .script-box p.intro {
      font-style: italic;
      color: var(--nu-blue-deep);
      font-weight: 400;
      margin-bottom: 14px;
      font-size: 1rem;
    }
    .script-box blockquote {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-cyan);
      padding: 14px 18px;
      margin: 10px 0 14px;
      font-size: 0.97rem;
      color: var(--nu-body-text);
      border-radius: 0 6px 6px 0;
      line-height: 1.65;
    }
    .script-box blockquote strong {
      color: var(--nu-dark-text);
    }

    /* WRITE-IT-DOWN / EMAIL FOLLOW-UP */
    .email-box {
      background: var(--nu-white);
      border: 2px dashed var(--nu-blue);
      border-radius: 8px;
      padding: 26px 30px;
      margin-top: 10px;
    }
    .email-box .email-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      font-weight: 900;
      padding: 5px 12px;
      border-radius: 3px;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .email-box .email-field {
      display: flex;
      gap: 10px;
      padding: 6px 0;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .email-box .email-field:last-of-type { border-bottom: none; }
    .email-box .email-field b {
      flex: 0 0 80px;
      color: var(--nu-blue-deep);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding-top: 2px;
    }
    .email-body {
      margin-top: 14px;
      padding: 18px 4px 4px;
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }
    .email-body p { margin-bottom: 14px; padding-left: 14px; }
    .email-body .sig { margin-top: 18px; padding-left: 14px; }
    .email-body .sig b { font-weight: 700; }

    /* REDFLAGS BOX */
    .redflags {
      background: linear-gradient(135deg, #fff7f7 0%, #fff 100%);
      border: 1px solid rgba(184,41,46,0.25);
      border-left: 5px solid var(--nu-red);
      border-radius: 6px;
      padding: 22px 26px;
      margin-top: 14px;
    }
    .redflags h4 {
      color: var(--nu-red);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .redflags ul {
      list-style: none;
      display: grid;
      gap: 8px;
    }
    .redflags li {
      padding-left: 22px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .redflags li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-red);
      font-weight: 900;
      font-size: 1.3rem;
      line-height: 1;
      top: 2px;
    }

    /* NEXT STEPS / ACTION FOOTER */
    .next-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 14px;
      margin-top: 10px;
    }
    .step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 20px;
      text-align: center;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .step .n {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue-deep), var(--nu-blue));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.9rem;
      padding: 6px 12px;
      border-radius: 3px;
      letter-spacing: 0.14em;
      margin-bottom: 10px;
    }
    .step h5 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* PRINT NOTES LINES */
    .notes-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .notes-box h4 {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 0.92rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .notes-box .line {
      border-bottom: 1px solid var(--nu-medium-gray);
      height: 34px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
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
    @media (max-width: 820px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 32px 20px 50px; }
      .action-title h1 { font-size: 1.55rem; }
      .contact-card { grid-template-columns: 1fr; }
      .contact-right .row .k { flex: 0 0 90px; }
      .script-box, .email-box, .notes-box { padding: 20px 18px; }
      .confirm-item { padding: 16px; gap: 12px; }
      .confirm-num { height: 36px; width: 36px; flex-basis: 36px; font-size: 0.95rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .confirm-item, .script-box, .email-box, .notes-box, .step, .redflags { box-shadow: none; }
      .step:hover, .confirm-item:hover { transform: none; box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

  <!-- WHITE ASYMMETRIC CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <div class="action-title">
        <div class="action-label">reMarkable Action Item · Vendor Follow-Up</div>
        <h1><span class="blue">Call H2O Waterproofing —</span> Get Confirmation In Writing</h1>
      </div>

      <div class="action-meta">
        <div>
          <span class="label">Owner</span>
          <span class="val">Aaron C. Norris</span>
        </div>
        <div>
          <span class="label">Vendor</span>
          <span class="val">H2O Waterproofing</span>
        </div>
        <div>
          <span class="label">Action Type</span>
          <span class="val">Phone Call + Written Follow-Up</span>
        </div>
        <div>
          <span class="label">Priority</span>
          <span class="val" style="color: var(--nu-red);">High — Written Record Required</span>
        </div>
        <div>
          <span class="label">Captured</span>
          <span class="val">reMarkable · 2026-04-23</span>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <h2 class="nu-section-title"><span class="first">Objective</span> <span class="rest">of This Call</span></h2>
      <p class="section-lede">
        Call H2O Waterproofing and get written confirmation — in email or on vendor letterhead — covering the scope of work, the warranty, the final price, and the completion date. A verbal "yes" on the phone is not enough. Every confirmed item below must be restated in writing before Norris Utilities® closes this action item.
      </p>

      <!-- CONTACT -->
      <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contact</span></h2>
      <div class="contact-card">
        <div class="contact-left">
          <div class="vendor">Vendor</div>
          <h3>H2O Waterproofing</h3>
          <p>Waterproofing contractor engaged by Norris Utilities® for work on the building envelope / foundation scope. All commitments from this vendor require written confirmation before scheduling or payment.</p>
        </div>
        <div class="contact-right">
          <div class="row">
            <span class="k">Primary Contact</span>
            <span class="v">To be confirmed on call</span>
          </div>
          <div class="row">
            <span class="k">Phone</span>
            <span class="v">On file — confirm before dialing</span>
          </div>
          <div class="row">
            <span class="k">Email</span>
            <span class="v">Ask rep to confirm best address</span>
          </div>
          <div class="row">
            <span class="k">Aaron Direct</span>
            <span class="v">205-500-1343 · acnorris@norrisutilities.com</span>
          </div>
        </div>
      </div>

      <!-- CONFIRMATION LIST -->
      <h2 class="nu-section-title"><span class="first">Get</span> <span class="rest">These In Writing</span></h2>
      <p class="section-lede">
        Walk the rep through each item on the phone, then ask them to reply by email with the same list confirmed. Do not accept "I'll put it on the invoice later" — require the written confirmation before any schedule date or deposit is committed.
      </p>

      <ol class="confirm-list">
        <li class="confirm-item">
          <div class="confirm-num">1</div>
          <div class="confirm-body">
            <h4>Confirmation of Scope of Work</h4>
            <p>Exact surfaces, square footage, and systems H2O is responsible for waterproofing — including any prep (pressure wash, crack repair, surface grinding), the membrane or coating system to be applied, the number of coats, and what is explicitly excluded.</p>
            <span class="ask">Ask: "Can you email me the exact scope line by line?"</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">2</div>
          <div class="confirm-body">
            <h4>Confirmation of Final Price</h4>
            <p>Final all-in dollar amount, broken out by labor, materials, and any trip or mobilization fee. Confirm whether the number includes tax, and confirm any unit pricing that will apply if quantities change on site.</p>
            <span class="ask">Ask: "Is this a firm bid or time-and-materials?"</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">3</div>
          <div class="confirm-body">
            <h4>Confirmation of Warranty</h4>
            <p>Length of warranty, what it covers (leaks, delamination, adhesion failure), what voids it, and whether it is labor-only or labor-plus-materials. Request the written warranty document, not just a verbal number of years.</p>
            <span class="ask">Ask: "Please attach the warranty document to your reply."</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">4</div>
          <div class="confirm-body">
            <h4>Confirmation of Start & Completion Date</h4>
            <p>Specific start date, expected duration, and firm completion date. Confirm what happens to the schedule if weather delays the job, and the cutoff after which Norris Utilities® may reschedule with no penalty.</p>
            <span class="ask">Ask: "What is your weather-delay policy in writing?"</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">5</div>
          <div class="confirm-body">
            <h4>Confirmation of Insurance & License</h4>
            <p>Active general liability certificate, workers' comp certificate, and state contractor's license number. Ask that Norris Utilities®, LLC be listed as a certificate holder — and that the COI be emailed before any crew arrives on site.</p>
            <span class="ask">Ask: "Please email a current COI with us listed as certificate holder."</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">6</div>
          <div class="confirm-body">
            <h4>Confirmation of Payment Terms</h4>
            <p>Deposit amount, progress payment schedule, final payment trigger (completion vs. inspection sign-off), accepted payment methods, and any early-payment discount. No deposit gets released until all of the above is confirmed in writing.</p>
            <span class="ask">Ask: "When is final payment due — at completion, or after inspection?"</span>
          </div>
        </li>
        <li class="confirm-item">
          <div class="confirm-num">7</div>
          <div class="confirm-body">
            <h4>Confirmation of Point of Contact During the Job</h4>
            <p>Name and cell number of the on-site foreman plus the office contact if the foreman is unreachable. Confirm how daily progress will be communicated and who Aaron calls if something goes wrong while work is in progress.</p>
            <span class="ask">Ask: "Who do I call day-of if there is an issue?"</span>
          </div>
        </li>
      </ol>

      <!-- CALL SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Script</span></h2>
      <div class="script-box">
        <div class="script-header">
          <span class="chev"></span>
          <h4>Opening, Middle, Close</h4>
        </div>
        <p class="intro">Direct, warm, firm. Lead with the ask. Do not leave the call without a commitment to email the written confirmation today.</p>

        <blockquote>
          <strong>Opening —</strong> "This is Aaron Norris with Norris Utilities. I'm calling to lock in the waterproofing project and make sure we have everything in writing before we move forward. Do you have about ten minutes?"
        </blockquote>
        <blockquote>
          <strong>Middle —</strong> "I need seven items confirmed in writing: scope, final price, warranty, start and completion dates, insurance and license, payment terms, and the on-site point of contact. Can we walk through them now so you can send me a recap email today?"
        </blockquote>
        <blockquote>
          <strong>Close —</strong> "Appreciate the time. Please send the confirmation email to acnorris@norrisutilities.com today with the warranty document and COI attached. Once I have that in hand, we can commit to the schedule."
        </blockquote>
      </div>

      <!-- EMAIL FOLLOW-UP TEMPLATE -->
      <h2 class="nu-section-title"><span class="first">Follow-Up</span> <span class="rest">Email Template</span></h2>
      <p class="section-lede">
        Send this same day — even if the rep promises to email first. Putting it in writing from the Norris Utilities® side creates the paper trail regardless of whether the vendor replies.
      </p>
      <div class="email-box">
        <div class="email-label">Aaron to Send — Same Day as the Call</div>
        <div class="email-field"><b>To</b><span>[H2O Waterproofing rep confirmed on call]</span></div>
        <div class="email-field"><b>From</b><span>acnorris@norrisutilities.com</span></div>
        <div class="email-field"><b>Subject</b><span>H2O Waterproofing — Written Confirmation of Today's Call</span></div>
        <div class="email-body">
          <p>Name —</p>
          <p>Thanks for the call today. To keep our records clean, please reply to this email confirming the following:</p>
          <p>
            &nbsp;&nbsp;&nbsp;• Scope of work (surfaces, square footage, prep, coating system, coats, exclusions)<br>
            &nbsp;&nbsp;&nbsp;• Final price (labor, materials, tax, any mobilization fee, firm bid vs. T&amp;M)<br>
            &nbsp;&nbsp;&nbsp;• Warranty (length, coverage, labor vs. labor+materials — document attached)<br>
            &nbsp;&nbsp;&nbsp;• Start date, expected duration, and firm completion date<br>
            &nbsp;&nbsp;&nbsp;• Certificate of Insurance with Norris Utilities, LLC listed as certificate holder<br>
            &nbsp;&nbsp;&nbsp;• Contractor's license number<br>
            &nbsp;&nbsp;&nbsp;• Payment terms (deposit, progress, final trigger, methods accepted)<br>
            &nbsp;&nbsp;&nbsp;• On-site foreman name and cell for the duration of the job
          </p>
          <p>Once I have that reply with the warranty and COI attached, we can lock the schedule and release the deposit per your terms.</p>
          <p>Sincerely,</p>
          <div class="sig">
            <b>Aaron C. Norris</b><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- RED FLAGS -->
      <h2 class="nu-section-title"><span class="first">Red</span> <span class="rest">Flags — Stop and Call Aaron</span></h2>
      <div class="redflags">
        <h4>If Any Of These Happen on the Call, Do Not Commit</h4>
        <ul>
          <li>Rep refuses to put the warranty in writing or will only give a verbal "lifetime" claim.</li>
          <li>Price changes from the original quote with no written explanation of why.</li>
          <li>Deposit requested before a COI has been emailed.</li>
          <li>No license number provided, or the number does not match an active Alabama contractor's license.</li>
          <li>Start date pushed more than two weeks without a documented reason.</li>
          <li>Rep asks for payment in cash, to a personal name, or via a payment app instead of company channels.</li>
          <li>Scope on the phone is materially different from the scope in the original bid.</li>
        </ul>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span class="first">After</span> <span class="rest">the Call</span></h2>
      <div class="next-steps">
        <div class="step">
          <span class="n">STEP 1</span>
          <h5>Send Recap Email</h5>
          <p>Template above — send same day to create the written record.</p>
        </div>
        <div class="step">
          <span class="n">STEP 2</span>
          <h5>File Written Reply</h5>
          <p>Save H2O's reply, warranty PDF, and COI to the vendor folder with date.</p>
        </div>
        <div class="step">
          <span class="n">STEP 3</span>
          <h5>Log in Master Tracker</h5>
          <p>Update the open-items entry with status: "Confirmed in writing — scheduled."</p>
        </div>
        <div class="step">
          <span class="n">STEP 4</span>
          <h5>Release Deposit</h5>
          <p>Only after all seven items are confirmed in writing and COI is on file.</p>
        </div>
      </div>

      <!-- CALL NOTES -->
      <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Notes</span></h2>
      <div class="notes-box">
        <h4>Write What The Rep Said — Line by Line</h4>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
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