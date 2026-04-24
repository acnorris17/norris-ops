<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up Action Plan — Norris Utilities®</title>
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
      --nu-warning: #D97706;
      --nu-success: #059669;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* Ghost phoenix watermark in header */
    .nu-header-watermark {
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

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .page-eyebrow {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: #6B6B7A;
      font-weight: 400;
      max-width: 760px;
      margin: 0 auto;
    }
    .page-meta {
      display: inline-flex;
      gap: 20px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #6B6B7A;
      flex-wrap: wrap;
      justify-content: center;
    }
    .page-meta span { display: inline-flex; align-items: center; gap: 6px; }
    .page-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SECTION HEADER ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SUMMARY STRIP ══ */
    .summary-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .summary-tile {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 22px 20px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .summary-tile::after {
      content: '';
      position: absolute;
      top: -30%; right: -30%;
      width: 60%; height: 160%;
      background: radial-gradient(circle, rgba(6,208,255,0.2) 0%, transparent 70%);
    }
    .summary-tile .tile-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .summary-tile .tile-value {
      font-size: 1.7rem;
      font-weight: 900;
      color: var(--nu-white);
      line-height: 1.1;
      margin-bottom: 6px;
    }
    .summary-tile .tile-note {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.8);
      font-weight: 400;
    }

    /* ══ ACTION ITEM CARDS ══ */
    .action-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
    }
    .action-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .action-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .action-card.priority-high {
      border-left-color: #DC2626;
    }
    .action-card.priority-medium {
      border-left-color: var(--nu-warning);
    }
    .action-card.priority-info {
      border-left-color: var(--nu-cyan);
    }

    .action-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .action-number-title {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .action-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .action-title {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }
    .priority-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .priority-tag.high {
      background: #FEE2E2;
      color: #DC2626;
    }
    .priority-tag.medium {
      background: #FEF3C7;
      color: var(--nu-warning);
    }
    .priority-tag.info {
      background: #E0F2FE;
      color: #0369A1;
    }

    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 14px;
      font-size: 0.82rem;
      color: #6B6B7A;
      padding-bottom: 14px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .action-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .action-body {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      line-height: 1.65;
    }
    .action-body p { margin-bottom: 10px; }
    .action-body ul {
      list-style: none;
      padding-left: 4px;
      margin: 8px 0 4px;
    }
    .action-body ul li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
    }
    .action-body ul li::before {
      content: '•';
      position: absolute;
      left: 4px;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .action-body .next-step {
      margin-top: 14px;
      padding: 12px 16px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      font-size: 0.9rem;
      border-left: 3px solid var(--nu-cyan);
    }
    .action-body .next-step strong {
      display: block;
      color: #0033cc;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* ══ INTRO EMAIL DRAFT BLOCK ══ */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: 'Lato', Georgia, serif;
      color: var(--nu-dark-text);
      margin-top: 16px;
    }
    .email-draft-header {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 4px 12px;
      padding-bottom: 18px;
      border-bottom: 2px solid var(--nu-medium-gray);
      margin-bottom: 20px;
      font-size: 0.9rem;
    }
    .email-draft-header .label {
      font-weight: 700;
      color: #6B6B7A;
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      padding-top: 2px;
    }
    .email-draft-body {
      line-height: 1.8;
      font-size: 0.95rem;
    }
    .email-draft-body p { margin-bottom: 14px; }
    .email-draft-body .greeting { margin-bottom: 18px; }
    .email-draft-body .signoff {
      margin-top: 22px;
    }
    .email-draft-body .signature {
      margin-top: 2px;
      font-weight: 700;
    }
    .email-draft-body .sig-line {
      font-size: 0.85rem;
      color: #6B6B7A;
      font-weight: 400;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      flex: 1;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .checklist-text strong {
      display: block;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 2px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 18px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 18px auto;
      opacity: 0.6;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.25em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 22px 48px; }
      .page-title { font-size: 1.7rem; }
      .action-card { padding: 20px; }
      .action-title { font-size: 1.05rem; }
      .email-draft { padding: 22px 20px; }
      .email-draft-header { grid-template-columns: 70px 1fr; font-size: 0.82rem; }
      .summary-tile .tile-value { font-size: 1.4rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .summary-tile {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .action-card, .checklist { box-shadow: none; }
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
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <div class="page-eyebrow">reMarkable Action Item</div>
        <h1 class="page-title">MK Email <span class="accent">Catch-Up</span> Action Plan</h1>
        <p class="page-subtitle">
          Clear the marketing backlog with MK Smith: intro Mel via email, resolve open payment, and close out pending deliverables so the marketing pipeline resumes without drag.
        </p>
        <div class="page-meta">
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Source:</strong> reMarkable Tablet</span>
          <span><strong>Logged:</strong> 2026-04-23</span>
          <span><strong>Status:</strong> Open</span>
        </div>
      </div>

      <!-- SUMMARY STRIP -->
      <div class="summary-strip">
        <div class="summary-tile">
          <div class="tile-label">Action Items</div>
          <div class="tile-value">4</div>
          <div class="tile-note">Catch-up tasks with MK</div>
        </div>
        <div class="summary-tile">
          <div class="tile-label">Priority</div>
          <div class="tile-value">Medium</div>
          <div class="tile-note">Marketing rhythm, not blocking</div>
        </div>
        <div class="summary-tile">
          <div class="tile-label">Target</div>
          <div class="tile-value">This Week</div>
          <div class="tile-note">Clear by 2026-04-25</div>
        </div>
        <div class="summary-tile">
          <div class="tile-label">Key Intro</div>
          <div class="tile-value">MK → Mel</div>
          <div class="tile-note">Email handoff required</div>
        </div>
      </div>

      <!-- SECTION: ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Items</span></h2>

        <div class="action-grid">

          <!-- ACTION 1 -->
          <div class="action-card priority-medium">
            <div class="action-header">
              <div class="action-number-title">
                <div class="action-number">1</div>
                <div class="action-title">Read and Triage MK's Open Email Thread</div>
              </div>
              <span class="priority-tag medium">Do First</span>
            </div>
            <div class="action-meta">
              <span><strong>Contact:</strong> MK Smith (Marketing Contractor)</span>
              <span><strong>Channel:</strong> Email</span>
              <span><strong>Time est:</strong> 20 minutes</span>
            </div>
            <div class="action-body">
              <p>Before replying, read every unanswered email from MK top to bottom so nothing gets missed. Sort them into three buckets so the reply is clean and complete.</p>
              <ul>
                <li><strong>Intro-to-Mel items</strong> — anything MK is asking for before she can make the introduction</li>
                <li><strong>Payment items</strong> — outstanding invoice or payment confirmation MK needs acknowledged</li>
                <li><strong>Deliverables</strong> — any artwork, copy, or marketing asset MK sent that needs Aaron's approval or sign-off</li>
              </ul>
              <div class="next-step">
                <strong>Next Step</strong>
                Open Gmail → label MK's unanswered messages with "MK-Catchup" → work them in order of oldest first.
              </div>
            </div>
          </div>

          <!-- ACTION 2 -->
          <div class="action-card priority-high">
            <div class="action-header">
              <div class="action-number-title">
                <div class="action-number">2</div>
                <div class="action-title">Send Intro Email: MK Smith ⇄ Mel</div>
              </div>
              <span class="priority-tag high">Primary Task</span>
            </div>
            <div class="action-meta">
              <span><strong>From:</strong> Aaron C. Norris</span>
              <span><strong>To:</strong> MK Smith</span>
              <span><strong>CC:</strong> Mel</span>
              <span><strong>Subject:</strong> Intro — MK Smith & Mel</span>
            </div>
            <div class="action-body">
              <p>Warm introduction email putting MK and Mel directly in touch so they can coordinate without Aaron in the loop after the handoff. Use Aaron's voice — em dash greeting, indented paragraphs, bullets with •, "Sincerely," close.</p>

              <div class="email-draft">
                <div class="email-draft-header">
                  <div class="label">To</div><div>MK Smith</div>
                  <div class="label">Cc</div><div>Mel</div>
                  <div class="label">Subject</div><div>Intro — MK Smith &amp; Mel</div>
                </div>
                <div class="email-draft-body">
                  <p class="greeting">MK and Mel —</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Happy to connect y'all. MK handles Norris Utilities® marketing on the contractor side — brand, creative direction, and campaign execution. Mel is joining the circle because the scope of what we're building together is going to be advantageous for both of you to know directly.</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;A quick orientation so you can take it from here:</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;• MK — Mel is the right person to loop in on the next phase of brand work we discussed<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;• Mel — MK has full context on Norris Utilities® look, feel, and Line Card design language<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;• Both — please set a 30-minute call at your convenience; I don't need to be on it</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Copy me on anything I need to weigh in on, but otherwise y'all have the ball. Appreciate both of you.</p>
                  <p class="signoff">Sincerely,</p>
                  <p class="signature">&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
                  <p class="sig-line">&nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO | Norris Utilities®, LLC</p>
                  <p class="sig-line">&nbsp;&nbsp;&nbsp;&nbsp;Cell: 205-500-1343 | acnorris@norrisutilities.com</p>
                </div>
              </div>

              <div class="next-step">
                <strong>Next Step</strong>
                Confirm Mel's email address and last name before sending. Save the draft in Gmail labeled "MK-Intro-Mel" so it is easy to retrieve.
              </div>
            </div>
          </div>

          <!-- ACTION 3 -->
          <div class="action-card priority-high">
            <div class="action-header">
              <div class="action-number-title">
                <div class="action-number">3</div>
                <div class="action-title">Resolve Payment Owed / Due with MK</div>
              </div>
              <span class="priority-tag high">Money</span>
            </div>
            <div class="action-meta">
              <span><strong>Contact:</strong> MK Smith</span>
              <span><strong>System:</strong> QuickBooks</span>
              <span><strong>Time est:</strong> 15 minutes</span>
            </div>
            <div class="action-body">
              <p>MK has a payment item waiting. Don't leave a contractor hanging — money before marketing. Close the loop in writing so both sides have a record.</p>
              <ul>
                <li>Pull the most recent invoice MK submitted — confirm amount, date, and scope match what was agreed</li>
                <li>If approved, record and pay in QuickBooks, then reply to MK with payment date and method</li>
                <li>If questions remain, reply with the specific line items needing clarification — don't let it sit silent</li>
                <li>Update the master tracker so this doesn't resurface as an open item next week</li>
              </ul>
              <div class="next-step">
                <strong>Next Step</strong>
                Open QuickBooks → locate MK's latest invoice → approve/pay or flag questions → email MK within 24 hours.
              </div>
            </div>
          </div>

          <!-- ACTION 4 -->
          <div class="action-card priority-info">
            <div class="action-header">
              <div class="action-number-title">
                <div class="action-number">4</div>
                <div class="action-title">Close Out Pending Deliverables and Log Status</div>
              </div>
              <span class="priority-tag info">Cleanup</span>
            </div>
            <div class="action-meta">
              <span><strong>Touches:</strong> Marketing pipeline</span>
              <span><strong>System:</strong> Master tracker</span>
              <span><strong>Time est:</strong> 15 minutes</span>
            </div>
            <div class="action-body">
              <p>After the intro and payment are handled, close the final loop: any piece of marketing work MK had in flight needs a clear status — approved, revise, or parked.</p>
              <ul>
                <li>List every deliverable MK has mentioned in the last 30 days</li>
                <li>Mark each one: Approved / Needs Revision / On Hold / Dropped</li>
                <li>Reply once with the consolidated status so MK isn't chasing one-by-one</li>
                <li>Add a recurring 15-minute weekly check-in to prevent another backlog</li>
              </ul>
              <div class="next-step">
                <strong>Next Step</strong>
                Add a Monday 9:00 AM standing Telegram note: "MK marketing pulse — 15 min review."
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- COMPLETION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Completion</span> <span class="rest">Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Inbox triage complete</strong>
              All MK emails read and labeled "MK-Catchup" in Gmail.
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Intro email sent</strong>
              MK ⇄ Mel introduction delivered; Aaron CC'd; draft saved to "MK-Intro-Mel" label.
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Payment handled</strong>
              MK invoice reviewed, paid in QuickBooks (or questions sent), confirmation emailed.
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Deliverables status sent</strong>
              Single consolidated status email to MK covering every open deliverable.
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Weekly cadence locked</strong>
              Monday 9:00 AM 15-minute MK check-in added to calendar.
            </div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text">
              <strong>Tracker updated</strong>
              Master tracker reflects closed items; this action item marked Complete.
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO<br>
      Norris Utilities®, LLC | Birmingham, Alabama<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>