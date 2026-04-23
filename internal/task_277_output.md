<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — Micah / Sign Online Trading — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* GHOST PHOENIX WATERMARK */
    .ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }

    /* CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      position: relative;
      z-index: 2;
    }

    /* PAGE TITLE BLOCK */
    .page-intro {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 32px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .page-intro h1 {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: -0.01em;
    }
    .page-intro h1 .accent { color: var(--nu-blue); }
    .page-intro .subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }
    .page-intro .meta-row {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 20px;
      flex-wrap: wrap;
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .page-intro .meta-row span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .page-intro .meta-row strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.005em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-sub {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 22px;
    }
    section { margin-bottom: 48px; }

    /* BADGE STRIP */
    .badge-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 14px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .nu-badge .badge-num {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1rem;
      margin-right: 12px;
      flex-shrink: 0;
    }

    /* STEP CARD */
    .step-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      margin-bottom: 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .step-card .step-head {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .step-card .step-num {
      flex-shrink: 0;
      width: 38px; height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step-card .step-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      flex: 1;
    }
    .step-card .step-when {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 4px 10px;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .step-card p { margin-bottom: 10px; }
    .step-card ul {
      list-style: none;
      padding: 0;
      margin: 10px 0;
    }
    .step-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.95rem;
    }
    .step-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1.2;
    }

    /* EMAIL DRAFT BLOCKS */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 22px 26px;
      margin-top: 14px;
      font-size: 0.94rem;
    }
    .email-draft .email-meta {
      display: grid;
      grid-template-columns: 90px 1fr;
      gap: 6px 16px;
      padding-bottom: 12px;
      margin-bottom: 14px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
    }
    .email-draft .email-meta .label {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-size: 0.72rem;
    }
    .email-draft .email-meta .value { color: var(--nu-dark-text); }
    .email-draft .email-body {
      font-family: var(--font-primary);
      white-space: pre-wrap;
      color: var(--nu-body-text);
      line-height: 1.7;
      padding-left: 14px;
    }
    .email-draft .email-signature {
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
      color: var(--nu-body-text);
      line-height: 1.6;
      padding-left: 14px;
    }

    /* INFO GRID */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 18px;
    }
    .info-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .info-cell .label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .info-cell .value {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      line-height: 1.4;
    }
    .info-cell .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
      font-weight: 400;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .checklist ul { list-style: none; padding: 0; }
    .checklist ul li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist ul li:last-child { border-bottom: none; }
    .checklist ul li::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 12px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* MEETING AGENDA */
    .agenda-card {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px 34px;
      box-shadow: 0 6px 20px rgba(0,0,255,0.2);
    }
    .agenda-card h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .agenda-card .agenda-sub {
      color: rgba(255,255,255,0.85);
      font-size: 0.95rem;
      margin-bottom: 22px;
    }
    .agenda-card ol {
      list-style: none;
      padding: 0;
      counter-reset: agenda;
    }
    .agenda-card ol li {
      counter-increment: agenda;
      padding: 12px 0 12px 46px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      font-size: 0.98rem;
    }
    .agenda-card ol li:last-child { border-bottom: none; }
    .agenda-card ol li::before {
      content: counter(agenda);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 32px; height: 32px;
      border-radius: 50%;
      background: var(--nu-white);
      color: var(--nu-blue);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
    }
    .agenda-card ol li .duration {
      display: inline-block;
      font-size: 0.78rem;
      background: rgba(255,255,255,0.2);
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 10px;
      font-weight: 700;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .page-intro h1 { font-size: 1.6rem; }
      .nu-content-wrap { padding: 40px 20px 50px; }
      .step-card { padding: 22px 20px; }
      .step-card .step-head { flex-wrap: wrap; }
      .email-draft { padding: 18px 18px; }
      .email-draft .email-meta { grid-template-columns: 1fr; gap: 2px; }
      .agenda-card { padding: 24px 22px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-card, .info-cell, .checklist { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="ghost-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- PAGE INTRO -->
      <div class="page-intro">
        <h1><span class="accent">Action Plan —</span> Micah &amp; Sign Online Trading</h1>
        <p class="subtitle">
          Two-stage outreach: send the two prepared emails to Micah, then lock in a working meeting
          to move the Sign Online Trading opportunity forward.
        </p>
        <div class="meta-row">
          <span><strong>Source:</strong> reMarkable action item</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Captured:</strong> 2026-04-23</span>
          <span><strong>Status:</strong> Open — ready to execute</span>
        </div>
      </div>

      <!-- OVERVIEW BADGES -->
      <section>
        <h2 class="nu-section-title">Execution <span>Sequence</span></h2>
        <p class="nu-section-sub">Three moves, in order. Emails first, meeting second, trading kickoff third.</p>
        <div class="badge-strip">
          <div class="nu-badge"><span class="badge-num">01</span>Send both emails to Micah</div>
          <div class="nu-badge"><span class="badge-num">02</span>Schedule working meeting</div>
          <div class="nu-badge"><span class="badge-num">03</span>Launch Sign Online trading</div>
        </div>
      </section>

      <!-- STEP 1 — EMAIL 1 -->
      <section>
        <h2 class="nu-section-title">Step 1 — <span>Email One (Context &amp; Status)</span></h2>
        <p class="nu-section-sub">First email gives Micah the current state so he can read it on his own time.</p>

        <div class="step-card">
          <div class="step-head">
            <div class="step-num">1</div>
            <div class="step-title">Email One — Where We Stand</div>
            <div class="step-when">Send today</div>
          </div>
          <p>Purpose: put the facts on the table before any meeting — what's in motion, what needs his input.</p>
          <ul>
            <li>Keep to a single screen. No attachments on email one.</li>
            <li>End with a clear "meeting ask" so Micah knows email two is coming with times.</li>
            <li>CC: none. Keep this one between Aaron and Micah.</li>
          </ul>

          <div class="email-draft">
            <div class="email-meta">
              <span class="label">To</span><span class="value">Micah</span>
              <span class="label">From</span><span class="value">acnorris@norrisutilities.com</span>
              <span class="label">Subject</span><span class="value">Sign Online Trading — where we stand &amp; quick ask</span>
            </div>
            <div class="email-body">Micah —

    Wanted to put everything in one place so you have it in writing before we get on a call.

    Here is where we are on Sign Online Trading:

    • The path forward is clear on my side — I'm ready to move as soon as we align on the structure.
    • A few open items need your read before we sign anything, and I'd rather walk through them live than volley email.
    • I'll follow this note with a second email laying out specific meeting times.

    My goal is to have us aligned, signed, and trading inside the next two weeks. I think that's realistic if we can get 30–45 minutes on the calendar this week.

    Call me at 205-500-1343 anytime if it's easier than typing.

    Sincerely,
    Aaron C. Norris</div>
            <div class="email-signature">Aaron C. Norris<br>Founder &amp; CEO | Norris Utilities, LLC<br>Cell: 205-500-1343<br>acnorris@norrisutilities.com</div>
          </div>
        </div>
      </section>

      <!-- STEP 2 — EMAIL 2 -->
      <section>
        <h2 class="nu-section-title">Step 2 — <span>Email Two (Meeting Times)</span></h2>
        <p class="nu-section-sub">Second email, sent right after the first, offers three concrete windows.</p>

        <div class="step-card">
          <div class="step-head">
            <div class="step-num">2</div>
            <div class="step-title">Email Two — Meeting Request</div>
            <div class="step-when">Send today (15 min after Email 1)</div>
          </div>
          <p>Purpose: convert Email 1 into a calendar hold. Give three options — don't ask "what works."</p>
          <ul>
            <li>Offer three specific windows in the next 5 business days.</li>
            <li>Default to 30 minutes on video. Leave 45 in the invite in case it runs.</li>
            <li>Ask for confirmation by end of next business day.</li>
          </ul>

          <div class="email-draft">
            <div class="email-meta">
              <span class="label">To</span><span class="value">Micah</span>
              <span class="label">From</span><span class="value">acnorris@norrisutilities.com</span>
              <span class="label">Subject</span><span class="value">Sign Online Trading — 3 times that work for me</span>
            </div>
            <div class="email-body">Micah —

    Here are three windows I can hold this week and next. Pick whichever is easiest — I'll send a calendar invite as soon as I hear back.

    • Option A — Thursday, 9:00–9:45 AM CT
    • Option B — Friday, 1:30–2:15 PM CT
    • Option C — Monday, 10:00–10:45 AM CT

    Agenda will be short:
    • Review the two open items from the last exchange
    • Confirm the trading structure and who signs what
    • Set a target go-live date

    If none of those work, send me two or three times that do and I'll make one fit.

    Sincerely,
    Aaron C. Norris</div>
            <div class="email-signature">Aaron C. Norris<br>Founder &amp; CEO | Norris Utilities, LLC<br>Cell: 205-500-1343<br>acnorris@norrisutilities.com</div>
          </div>
        </div>
      </section>

      <!-- STEP 3 — SCHEDULE MEETING -->
      <section>
        <h2 class="nu-section-title">Step 3 — <span>Schedule the Meeting</span></h2>
        <p class="nu-section-sub">Once Micah picks a window, lock it on the calendar within the hour.</p>

        <div class="info-grid">
          <div class="info-cell">
            <div class="label">Platform</div>
            <div class="value">Google Meet (default)</div>
            <div class="sub">Phone fallback — 205-500-1343</div>
          </div>
          <div class="info-cell">
            <div class="label">Duration</div>
            <div class="value">30 minutes held, 45 reserved</div>
            <div class="sub">Short is better — leave room if needed</div>
          </div>
          <div class="info-cell">
            <div class="label">Invite Title</div>
            <div class="value">Norris Utilities × Micah — Sign Online Trading</div>
            <div class="sub">Clear subject so it doesn't get buried</div>
          </div>
          <div class="info-cell">
            <div class="label">Attendees</div>
            <div class="value">Aaron C. Norris · Micah</div>
            <div class="sub">Add Caroline only if document signing is on the agenda</div>
          </div>
          <div class="info-cell">
            <div class="label">Pre-read</div>
            <div class="value">Attach Email 1 text to the invite body</div>
            <div class="sub">Keeps context with the meeting</div>
          </div>
          <div class="info-cell">
            <div class="label">Confirmation</div>
            <div class="value">Reply-all the accept + a one-line note</div>
            <div class="sub">"Looking forward to it — talk then."</div>
          </div>
        </div>

        <div class="agenda-card" style="margin-top: 28px;">
          <h3>Meeting Agenda — 30 Minutes</h3>
          <div class="agenda-sub">Tight, ordered, and focused on getting Sign Online Trading live.</div>
          <ol>
            <li>Welcome &amp; quick recap of where we left off <span class="duration">3 min</span></li>
            <li>Walk the two open items from Email 1 — get yes/no on each <span class="duration">8 min</span></li>
            <li>Confirm the trading structure and signatories <span class="duration">7 min</span></li>
            <li>Agree on target go-live date and who owns what <span class="duration">7 min</span></li>
            <li>Action items read-back + calendar next checkpoint <span class="duration">5 min</span></li>
          </ol>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section>
        <h2 class="nu-section-title">Execution <span>Checklist</span></h2>
        <p class="nu-section-sub">Walk this top-to-bottom. Don't jump ahead — the order matters.</p>

        <div class="checklist">
          <ul>
            <li>Review Email 1 draft — confirm the two open items referenced are current</li>
            <li>Send Email 1 to Micah from acnorris@norrisutilities.com</li>
            <li>Wait 15 minutes, then send Email 2 with the three meeting windows</li>
            <li>Flag the thread in Gmail so a reply is not missed</li>
            <li>When Micah picks a time, send Google Meet invite within one hour</li>
            <li>Paste Email 1 text into the invite body as the pre-read</li>
            <li>Set a Telegram reminder 24 hours before the meeting</li>
            <li>Prep a one-page brief the morning of — open items, proposed structure, go-live target</li>
            <li>After the meeting, send a same-day recap email with decisions and next steps</li>
            <li>Log outcome in the master tracker and close the reMarkable action item</li>
          </ul>
        </div>
      </section>

      <!-- REFERENCE -->
      <section>
        <h2 class="nu-section-title">Reference <span>Detail</span></h2>
        <p class="nu-section-sub">Quick-access data for executing this action without a second lookup.</p>

        <div class="info-grid">
          <div class="info-cell">
            <div class="label">Primary Contact</div>
            <div class="value">Micah</div>
            <div class="sub">Sign Online Trading lead</div>
          </div>
          <div class="info-cell">
            <div class="label">Aaron's Line</div>
            <div class="value">205-500-1343</div>
            <div class="sub">Offered in Email 1 for anything urgent</div>
          </div>
          <div class="info-cell">
            <div class="label">Aaron's Email</div>
            <div class="value">acnorris@norrisutilities.com</div>
            <div class="sub">Only address used for this thread</div>
          </div>
          <div class="info-cell">
            <div class="label">Target Close</div>
            <div class="value">Aligned, signed, trading in 14 days</div>
            <div class="sub">Stated in Email 1 to set tempo</div>
          </div>
          <div class="info-cell">
            <div class="label">Escalation Trigger</div>
            <div class="value">No reply by end of next business day</div>
            <div class="sub">Call 205-500-1343 — do not re-email</div>
          </div>
          <div class="info-cell">
            <div class="label">Source Record</div>
            <div class="value">reMarkable action item — 2026-04-23</div>
            <div class="sub">Close after post-meeting recap is sent</div>
          </div>
        </div>
      </section>

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