<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Written Confirmation Action Plan — Norris Utilities®</title>
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
      --nu-warning-red: #C8102E;
      --nu-success-green: #2E7D32;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3.2rem;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    .nu-doc-stamp {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* CHEVRON */
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
      background: var(--nu-light-gray);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 36px 72px;
    }

    /* TITLE BLOCK */
    .doc-title {
      text-align: center;
      margin-bottom: 12px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .doc-title h1 .accent { color: var(--nu-blue); }
    .doc-title .doc-meta {
      font-size: 0.92rem;
      color: #666;
      letter-spacing: 0.04em;
    }

    /* PRIORITY BAR */
    .priority-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
      margin: 28px 0 36px;
      padding: 16px 24px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      border-left: 6px solid var(--nu-cyan);
      border-radius: 4px;
    }
    .priority-bar .pb-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .priority-bar .pb-icon {
      width: 36px; height: 36px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .priority-bar .pb-text {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .priority-bar .pb-text small {
      display: block;
      font-weight: 400;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.75);
      margin-top: 2px;
      letter-spacing: 0.04em;
    }
    .priority-bar .pb-status {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 6px 14px;
      border-radius: 2px;
    }

    /* SECTIONS */
    .section {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 32px 34px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .section-title {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-sub {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 22px;
      letter-spacing: 0.02em;
    }

    /* CALL SCRIPT */
    .call-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin: 14px 0;
      border-radius: 4px;
    }
    .call-card .label {
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .call-card p {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* WRITTEN-CONFIRMATION CHECKLIST */
    .confirm-list {
      list-style: none;
      counter-reset: confirm-counter;
    }
    .confirm-list li {
      counter-increment: confirm-counter;
      position: relative;
      padding: 18px 18px 18px 64px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      transition: all 0.2s ease;
    }
    .confirm-list li:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      border-color: var(--nu-cyan);
    }
    .confirm-list li::before {
      content: counter(confirm-counter);
      position: absolute;
      top: 18px;
      left: 18px;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .confirm-list li .ci-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .confirm-list li .ci-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .confirm-list li .ci-detail em {
      color: var(--nu-blue);
      font-style: normal;
      font-weight: 700;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 18px;
    }
    @media (max-width: 720px) {
      .two-col { grid-template-columns: 1fr; }
    }
    .col-card {
      background: var(--nu-light-gray);
      padding: 22px;
      border-radius: 6px;
      border-top: 4px solid var(--nu-blue);
    }
    .col-card.alt { border-top-color: var(--nu-cyan); }
    .col-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .col-card ul {
      list-style: none;
    }
    .col-card ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 7px;
      font-size: 0.92rem;
      line-height: 1.55;
    }
    .col-card ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* EMAIL DRAFT BLOCK */
    .email-draft {
      background: #fafafa;
      border: 1px dashed var(--nu-blue);
      border-radius: 6px;
      padding: 24px 26px;
      font-size: 0.94rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
      font-family: 'Lato', sans-serif;
    }
    .email-draft .field {
      display: block;
      margin-bottom: 6px;
    }
    .email-draft .field b {
      display: inline-block;
      width: 64px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-draft hr {
      border: none;
      border-top: 1px solid var(--nu-medium-gray);
      margin: 14px 0;
    }
    .email-draft .body-line { display: block; margin-bottom: 10px; }
    .email-draft .body-line.indent { padding-left: 18px; }

    /* RED-FLAG NOTES */
    .redflag-box {
      background: #fff5f5;
      border-left: 4px solid var(--nu-warning-red);
      padding: 16px 20px;
      border-radius: 4px;
      margin-top: 16px;
    }
    .redflag-box .rb-title {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-warning-red);
      margin-bottom: 6px;
    }
    .redflag-box p {
      font-size: 0.92rem;
      color: #4a1a1a;
      line-height: 1.55;
    }

    /* OUTCOME BADGES */
    .outcomes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 18px;
    }
    .outcome {
      padding: 18px 20px;
      border-radius: 6px;
      border: 2px solid var(--nu-medium-gray);
      background: var(--nu-white);
      transition: all 0.2s;
    }
    .outcome.go { border-color: var(--nu-success-green); background: #f3faf4; }
    .outcome.hold { border-color: var(--nu-accent-gold); background: #fdf9ee; }
    .outcome.stop { border-color: var(--nu-warning-red); background: #fef5f5; }
    .outcome .ot {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .outcome.go .ot { color: var(--nu-success-green); }
    .outcome.hold .ot { color: #8a6a1f; }
    .outcome.stop .ot { color: var(--nu-warning-red); }
    .outcome p {
      font-size: 0.9rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }

    /* SIGNATURE BLOCK */
    .sig-block {
      margin-top: 28px;
      padding-top: 20px;
      border-top: 2px solid var(--nu-medium-gray);
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: flex-end;
    }
    .sig-block .sig-line {
      flex: 1;
      min-width: 240px;
    }
    .sig-block .sig-line .lbl {
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #666;
      font-weight: 700;
      margin-bottom: 28px;
    }
    .sig-block .sig-line .underline {
      border-bottom: 1px solid var(--nu-dark-text);
      width: 100%;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 36px 20px 56px; }
      .doc-title h1 { font-size: 1.6rem; }
      .section { padding: 24px 20px; }
      .section-title { font-size: 1.2rem; }
      .priority-bar { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-stamp">Vendor Action Brief · H2O Waterproofing</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- DOC TITLE -->
      <div class="doc-title">
        <h1><span class="accent">H2O Waterproofing</span> — Get It in Writing</h1>
        <div class="doc-meta">Action Brief · Prepared 2026-04-22 · Owner: Aaron C. Norris</div>
      </div>

      <!-- PRIORITY BAR -->
      <div class="priority-bar">
        <div class="pb-left">
          <div class="pb-icon">!</div>
          <div class="pb-text">
            Call H2O Waterproofing — Verbal first, then locked in writing
            <small>No work begins, no deposit released, until written confirmation lands in inbox.</small>
          </div>
        </div>
        <div class="pb-status">Open · This Week</div>
      </div>

      <!-- ============================================ -->
      <!-- SECTION 1 — THE ASK / WHY -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">The <span>Ask</span></h2>
        <p class="section-sub">Source: reMarkable note (Aaron) — the action item exactly as captured.</p>

        <div class="call-card">
          <div class="label">Original Action Item</div>
          <p>Call H2O Waterproofing and get in writing: <em>(1) confirmation of scope</em> — the specifics promised over the phone, paid for, and committed to in writing before any crew arrives or invoice is paid.</p>
        </div>

        <p style="margin-top:14px; font-size:0.95rem;">
          A verbal scope is not a scope. Until H2O sends a written confirmation that mirrors what was discussed by phone — pricing, work performed, materials, warranty terms, schedule — Norris Utilities® treats this as <strong>unbooked</strong>. This brief is the call playbook plus the email follow-up that locks it in.
        </p>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 2 — CALL SCRIPT -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">Call <span>Script</span></h2>
        <p class="section-sub">Open warm. Move quickly to the written-confirmation ask. Do not hang up without an email commitment.</p>

        <div class="call-card">
          <div class="label">Step 1 — Open</div>
          <p>"Good morning — this is Aaron Norris with Norris Utilities calling about the waterproofing scope we discussed. I want to make sure we're aligned and get everything moving the right way."</p>
        </div>

        <div class="call-card">
          <div class="label">Step 2 — Confirm Verbally</div>
          <p>"Walk me through one more time exactly what's included — the scope of work, the price, the materials, the warranty, and the start date. I want to repeat it back so we're on the same page."</p>
        </div>

        <div class="call-card">
          <div class="label">Step 3 — The Lock-In Ask</div>
          <p>"Once we're aligned, I'll need you to send me a written confirmation by email today — same day. I'll reply back to confirm receipt, and that becomes our working agreement before any crew is scheduled."</p>
        </div>

        <div class="call-card">
          <div class="label">Step 4 — Close</div>
          <p>"Best email is <strong>acnorris@norrisutilities.com</strong>. I'll watch for it this afternoon. Thanks — appreciate you working with me on this."</p>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 3 — WRITTEN CONFIRMATION CHECKLIST -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">What Must Be <span>In Writing</span></h2>
        <p class="section-sub">If H2O's written confirmation is missing any of these eight items, reply and request the missing piece before approving work.</p>

        <ol class="confirm-list">
          <li>
            <div class="ci-title">Scope of Work — Line by Line</div>
            <div class="ci-detail">Every surface, every area, every preparation step. <em>"Waterproofing the basement"</em> is not a scope — <em>"Apply X membrane to north and east foundation walls below grade, including 18" footing return"</em> is.</div>
          </li>
          <li>
            <div class="ci-title">Materials & Brand Names</div>
            <div class="ci-detail">Specific product names, model numbers, and quantities. Generic <em>"sealant"</em> or <em>"membrane"</em> is not acceptable. Manufacturer warranty pass-through where applicable.</div>
          </li>
          <li>
            <div class="ci-title">Total Price — All-In</div>
            <div class="ci-detail">Labor + materials + tax + any disposal/permit fees. Written as one bottom-line number. <em>"Plus materials at cost"</em> is not a price.</div>
          </li>
          <li>
            <div class="ci-title">Payment Terms</div>
            <div class="ci-detail">Deposit amount, milestone payments (if any), final payment trigger, and accepted methods. Net terms in days, not <em>"upon completion"</em> alone.</div>
          </li>
          <li>
            <div class="ci-title">Warranty — Duration & Coverage</div>
            <div class="ci-detail">Years covered, what's covered (workmanship vs. materials), what voids the warranty, and the process to file a claim. Transferability if property is sold.</div>
          </li>
          <li>
            <div class="ci-title">Start Date & Completion Window</div>
            <div class="ci-detail">Mobilization date, expected duration in working days, and weather contingency language. <em>"Next available"</em> is not a date.</div>
          </li>
          <li>
            <div class="ci-title">Insurance & License Proof</div>
            <div class="ci-detail">Certificate of Insurance (COI) listing Norris Utilities, LLC as additional insured if applicable. State contractor license number on document.</div>
          </li>
          <li>
            <div class="ci-title">Change-Order Procedure</div>
            <div class="ci-detail">No verbal change orders. Any add-on work requires a written, signed change order with revised price before execution.</div>
          </li>
        </ol>

        <div class="redflag-box">
          <div class="rb-title">Red Flags — Do Not Proceed</div>
          <p>Pressure to pay full deposit before signed scope · Refusal to put warranty in writing · No COI provided · "Cash discount only" pricing · Verbal-only change-order policy. Any one of these = pause the job and call back to renegotiate the terms.</p>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 4 — SAME-DAY EMAIL FOLLOW-UP -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">Same-Day Email <span>Follow-Up</span></h2>
        <p class="section-sub">Send within 30 minutes of the call. This is the paper trail that turns a phone conversation into a binding agreement.</p>

        <div class="email-draft">
<span class="field"><b>To:</b> [H2O Waterproofing primary contact]</span>
<span class="field"><b>From:</b> acnorris@norrisutilities.com</span>
<span class="field"><b>Subject:</b> Following Up — Written Confirmation Needed Today</span>
<hr>
<span class="body-line">[Contact First Name] —</span>

<span class="body-line indent">Thank you for your time on the phone today. I appreciate you walking me through the scope and pricing.</span>

<span class="body-line indent">To make sure we're fully aligned and to keep our project on schedule, I need a written confirmation in this email thread today covering the following:</span>

<span class="body-line indent">  • Full scope of work — every surface and step</span>
<span class="body-line indent">  • Materials, brand names, and quantities</span>
<span class="body-line indent">  • All-in price (labor, materials, tax, fees)</span>
<span class="body-line indent">  • Deposit, payment terms, and accepted methods</span>
<span class="body-line indent">  • Warranty length, what is covered, and what voids it</span>
<span class="body-line indent">  • Mobilization date and expected completion window</span>
<span class="body-line indent">  • Certificate of Insurance and state license number</span>
<span class="body-line indent">  • Written change-order procedure</span>

<span class="body-line indent">Once I have that in hand, I'll reply to confirm receipt and we can lock in the schedule. I prefer to keep everything documented in writing — it protects both of us and keeps the job moving cleanly.</span>

<span class="body-line indent">If anything in your written confirmation differs from what we discussed by phone, please flag it directly so we can address it before any work begins.</span>

<span class="body-line indent">Sincerely,</span>

<span class="body-line indent">Aaron C. Norris</span>
<span class="body-line indent">Founder &amp; CEO, Norris Utilities, LLC</span>
<span class="body-line indent">Cell: 205-500-1343</span>
<span class="body-line indent">acnorris@norrisutilities.com</span>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 5 — INTERNAL TRACKING / OUTCOMES -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">Decision <span>Tree</span></h2>
        <p class="section-sub">Three possible outcomes after H2O responds (or doesn't). Match the response to the right action.</p>

        <div class="outcomes">
          <div class="outcome go">
            <div class="ot">GO — Proceed</div>
            <p>Written confirmation received same day, all 8 items present, matches the call. Reply to confirm receipt, schedule deposit, lock the start date.</p>
          </div>
          <div class="outcome hold">
            <div class="ot">HOLD — Clarify</div>
            <p>Email arrives but is missing 1–3 items, or numbers don't match the verbal quote. Reply same day with the specific gaps. Do NOT release deposit until corrected.</p>
          </div>
          <div class="outcome stop">
            <div class="ot">STOP — Re-evaluate</div>
            <p>No written confirmation within 48 hours, or H2O resists putting terms in writing. Pause the relationship. Get a competing quote in writing before re-engaging.</p>
          </div>
        </div>
      </section>

      <!-- ============================================ -->
      <!-- SECTION 6 — QUICK FACTS / OPS NOTES -->
      <!-- ============================================ -->
      <section class="section">
        <h2 class="section-title">Ops <span>Notes</span></h2>
        <p class="section-sub">Internal handling — file location, follow-up cadence, and where this brief lives in the workflow.</p>

        <div class="two-col">
          <div class="col-card">
            <h3>Filing &amp; Tracking</h3>
            <ul>
              <li>Save H2O's written reply as PDF in the vendor folder under the H2O Waterproofing tab.</li>
              <li>Log the call outcome in master_tracker (vendor follow-ups column) — date, contact, outcome.</li>
              <li>Tag any pending deposit in QuickBooks as "Pending Written Confirmation" until cleared.</li>
              <li>If escalation needed, route through Caroline Butler for Aaron's review.</li>
            </ul>
          </div>
          <div class="col-card alt">
            <h3>Cadence</h3>
            <ul>
              <li><strong>Day 0:</strong> Call placed, follow-up email sent same day.</li>
              <li><strong>Day 1:</strong> If no written reply, send a one-line nudge: <em>"Following up on the written scope I requested yesterday."</em></li>
              <li><strong>Day 2:</strong> If still nothing, call back direct. Document the second call.</li>
              <li><strong>Day 3+:</strong> Move to STOP outcome. Source a backup vendor.</li>
            </ul>
          </div>
        </div>

        <!-- SIGNATURE / APPROVAL -->
        <div class="sig-block">
          <div class="sig-line">
            <div class="lbl">Call Made — Date / Time</div>
            <div class="underline"></div>
          </div>
          <div class="sig-line">
            <div class="lbl">H2O Written Confirmation Received</div>
            <div class="underline"></div>
          </div>
          <div class="sig-line">
            <div class="lbl">Aaron C. Norris — Approval</div>
            <div class="underline"></div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>