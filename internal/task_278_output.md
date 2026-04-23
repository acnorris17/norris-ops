<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up &amp; Mel Intro — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-warning: #D4431B;
      --nu-success: #0B8A3E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ DOC BADGE ══ */
    .doc-badge-wrap {
      max-width: 1100px;
      margin: -30px auto 0;
      padding: 0 40px;
      position: relative;
      z-index: 20;
    }
    .doc-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 10px 22px;
      border-radius: 30px;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      box-shadow: 0 6px 20px rgba(0,0,0,0.12);
      border: 2px solid var(--nu-cyan);
    }
    .doc-badge-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--nu-warning);
      box-shadow: 0 0 0 4px rgba(212,67,27,0.18);
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ TITLE BLOCK ══ */
    .title-block {
      margin-bottom: 36px;
      padding-bottom: 28px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .eyebrow {
      font-weight: 900;
      font-size: 0.78rem;
      color: var(--nu-blue);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .page-title span { color: var(--nu-blue); }
    .page-deck {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      margin-top: 18px;
      font-size: 0.85rem;
      color: #555;
    }
    .meta-row strong { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ STATUS STRIP ══ */
    .status-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 40px;
      border-radius: 6px;
      overflow: hidden;
    }
    .status-cell {
      background: var(--nu-white);
      padding: 18px 18px;
    }
    .status-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .status-value {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
    }
    .status-value.accent { color: var(--nu-blue); }
    .status-value.warn { color: var(--nu-warning); }

    /* ══ SECTION ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .section-sub {
      font-size: 0.92rem;
      color: #666;
      margin-bottom: 22px;
    }
    section { margin-bottom: 48px; }

    /* ══ EMAIL CARDS ══ */
    .email-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px 26px;
      margin-bottom: 18px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .email-card:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }
    .email-card.priority {
      border-left-color: var(--nu-warning);
      background: linear-gradient(90deg, rgba(212,67,27,0.04) 0%, var(--nu-white) 40%);
    }
    .email-card.intro {
      border-left-color: var(--nu-cyan);
      background: linear-gradient(90deg, rgba(6,208,255,0.06) 0%, var(--nu-white) 40%);
    }
    .email-card.payment {
      border-left-color: var(--nu-success);
      background: linear-gradient(90deg, rgba(11,138,62,0.05) 0%, var(--nu-white) 40%);
    }
    .email-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }
    .email-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .priority .email-num { background: var(--nu-warning); }
    .intro .email-num { background: var(--nu-cyan); color: var(--nu-navy); }
    .payment .email-num { background: var(--nu-success); }

    .email-title {
      display: flex;
      align-items: center;
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .email-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
      white-space: nowrap;
    }
    .email-tag.t-priority { background: var(--nu-warning); color: var(--nu-white); }
    .email-tag.t-intro { background: var(--nu-cyan); color: var(--nu-navy); }
    .email-tag.t-payment { background: var(--nu-success); color: var(--nu-white); }

    .email-body p {
      margin-bottom: 10px;
      font-size: 0.96rem;
    }
    .email-body p:last-child { margin-bottom: 0; }

    .email-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 24px;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.85rem;
    }
    .email-meta-item {
      display: flex;
      flex-direction: column;
    }
    .email-meta-item .k {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 2px;
    }
    .email-meta-item .v {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ DRAFT PREVIEW ══ */
    .draft-block {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      margin-top: 16px;
      font-size: 0.92rem;
    }
    .draft-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .draft-block .hdr-line {
      margin-bottom: 4px;
      font-size: 0.88rem;
    }
    .draft-block .hdr-line strong { color: var(--nu-dark-text); }
    .draft-block hr {
      border: none;
      border-top: 1px solid var(--nu-medium-gray);
      margin: 12px 0;
    }
    .draft-body { line-height: 1.7; }
    .draft-body p { margin-bottom: 12px; padding-left: 16px; }
    .draft-body .greet { padding-left: 0; font-weight: 700; color: var(--nu-dark-text); }
    .draft-body .sign { padding-left: 0; margin-top: 18px; }
    .draft-body .sign-name { padding-left: 16px; font-weight: 700; color: var(--nu-dark-text); }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-content { flex: 1; }
    .check-title { font-weight: 700; color: var(--nu-dark-text); margin-bottom: 2px; }
    .check-sub { font-size: 0.88rem; color: #666; }
    .check-when {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      white-space: nowrap;
      margin-left: 12px;
    }

    /* ══ CONTACT GRID ══ */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .contact-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
    }
    .contact-card .role {
      font-size: 0.82rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .contact-card .detail {
      font-size: 0.88rem;
      line-height: 1.7;
    }
    .contact-card .detail a {
      color: var(--nu-blue);
      text-decoration: none;
      word-break: break-word;
    }
    .contact-card .detail a:hover { text-decoration: underline; }

    /* ══ NOTES CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.03) 0%, rgba(6,208,255,0.05) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin-top: 20px;
      font-size: 0.92rem;
    }
    .callout strong { color: var(--nu-blue); }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-brand {
      font-weight: 900;
      letter-spacing: 0.1em;
      color: var(--nu-white);
      margin-bottom: 4px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 900px) {
      .status-strip { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 42px 22px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .page-title { font-size: 1.7rem; }
      .content-wrap { padding: 40px 22px 60px; }
      .doc-badge-wrap { padding: 0 22px; }
      .email-head { flex-direction: column; align-items: flex-start; }
    }

    /* ══ PRINT ══ */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .email-card, .contact-card, .checklist { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

  <!-- DOC BADGE -->
  <div class="doc-badge-wrap">
    <div class="doc-badge">
      <span class="doc-badge-dot"></span>
      Action Item · Marketing &amp; Payments
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="content-wrap">

      <!-- TITLE -->
      <div class="title-block">
        <div class="eyebrow">reMarkable Action Item</div>
        <h1 class="page-title">Catch Up on <span>MK Smith Emails</span> — Intro to Mel &amp; Payment Reconciliation</h1>
        <p class="page-deck">Three-part execution plan: respond to MK Smith's outstanding marketing thread, send a warm introduction connecting MK with Mel, and reconcile open payment items with MK so the marketing workstream resumes on solid footing.</p>
        <div class="meta-row">
          <div><strong>Owner:</strong> Aaron C. Norris</div>
          <div><strong>Captured:</strong> reMarkable — 2026-04-22</div>
          <div><strong>Target Completion:</strong> End of day Wednesday, 2026-04-22</div>
          <div><strong>Channel:</strong> Email (Gmail)</div>
        </div>
      </div>

      <!-- STATUS STRIP -->
      <div class="status-strip">
        <div class="status-cell">
          <div class="status-label">Priority</div>
          <div class="status-value warn">High</div>
        </div>
        <div class="status-cell">
          <div class="status-label">Emails to Send</div>
          <div class="status-value accent">3</div>
        </div>
        <div class="status-cell">
          <div class="status-label">People Involved</div>
          <div class="status-value">MK · Mel · Aaron</div>
        </div>
        <div class="status-cell">
          <div class="status-label">Status</div>
          <div class="status-value accent">Ready to Send</div>
        </div>
      </div>

      <!-- SECTION: THE THREE EMAILS -->
      <section>
        <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Three Emails to Send</span></h2>
        <p class="section-sub">Handled in order below. Each card contains the rationale, a ready-to-edit draft in Aaron's voice, and a quick-reference meta block.</p>

        <!-- EMAIL 1: MK CATCH-UP -->
        <div class="email-card priority">
          <div class="email-head">
            <div class="email-title"><span class="email-num">1</span> Respond to MK Smith — Catch-Up on Open Marketing Thread</div>
            <span class="email-tag t-priority">Priority</span>
          </div>
          <div class="email-body">
            <p>MK Smith is the marketing contractor for Norris Utilities®. Outstanding items in the thread need acknowledgment, direction, and a clear path forward so she is not blocked waiting on Aaron. This response confirms receipt, prioritizes the work, and sets next-step cadence.</p>

            <div class="draft-block">
              <div class="draft-label">Draft — Email 1</div>
              <div class="hdr-line"><strong>To:</strong> MK Smith</div>
              <div class="hdr-line"><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
              <div class="hdr-line"><strong>Subject:</strong> Catching up — marketing priorities &amp; next steps</div>
              <hr>
              <div class="draft-body">
                <p class="greet">MK —</p>
                <p>Sorry for the delay getting back to you. I have been heads-down on shipping reconciliation and invoicing, and your thread got buried. That is on me, not you.</p>
                <p>I read back through everything this morning. Here is how I want to prioritize what you have in flight:</p>
                <p>• Anything customer-facing (landing page copy, line-card revisions, email signature) — top of the stack.<br>
                   • Brand assets and social — next in line.<br>
                   • Long-horizon items (video, trade-show collateral) — queue for May.</p>
                <p>If you can send me a one-page status on where each piece sits — owner, blocker, and what you need from me — I will turn comments around within 24 hours going forward. No more radio silence.</p>
                <p>Separately, I owe you on payment. I am reconciling that today and will have confirmation out before end of business. See the follow-up note coming behind this one.</p>
                <p>Also — I want to introduce you to Mel. Short intro landing in your inbox right after this. I think the two of you will hit it off, and there is real overlap worth exploring.</p>
                <p>Thanks for your patience. Let's get momentum back.</p>
                <p class="sign">Sincerely,</p>
                <p class="sign-name">Aaron C. Norris</p>
              </div>
            </div>

            <div class="email-meta">
              <div class="email-meta-item"><span class="k">When</span><span class="v">Send first — 2026-04-22</span></div>
              <div class="email-meta-item"><span class="k">Tone</span><span class="v">Direct, accountable, warm</span></div>
              <div class="email-meta-item"><span class="k">Expected Reply</span><span class="v">Status summary within 48 hrs</span></div>
              <div class="email-meta-item"><span class="k">Follow-Up</span><span class="v">Calendar review Friday</span></div>
            </div>
          </div>
        </div>

        <!-- EMAIL 2: INTRO TO MEL -->
        <div class="email-card intro">
          <div class="email-head">
            <div class="email-title"><span class="email-num">2</span> Introduce MK Smith to Mel — Warm Email Intro</div>
            <span class="email-tag t-intro">Intro</span>
          </div>
          <div class="email-body">
            <p>Double-opt-in style introduction. Both parties are on the To line, each gets one paragraph that positions them fairly, and Aaron steps back so they can run it from there. Keep it tight — no filler, no "just."</p>

            <div class="draft-block">
              <div class="draft-label">Draft — Email 2</div>
              <div class="hdr-line"><strong>To:</strong> MK Smith; Mel</div>
              <div class="hdr-line"><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
              <div class="hdr-line"><strong>Subject:</strong> Introduction — MK Smith (Marketing) &lt;&gt; Mel</div>
              <hr>
              <div class="draft-body">
                <p class="greet">MK and Mel —</p>
                <p>Quick introduction that I think is overdue.</p>
                <p><strong>MK</strong> runs marketing for Norris Utilities®. She is sharp on brand, campaign strategy, and the kind of content that actually moves the needle in the utility-equipment space. She has been building our line-card system and customer-facing materials, and she thinks in systems — not just campaigns.</p>
                <p><strong>Mel</strong> — you already know why I want you two connected. Your lens on positioning and network in the markets MK and I are chasing is exactly what this needs. I would rather you two set the terms of the conversation than have me play middle-man.</p>
                <p>I will get out of the way. MK — Mel's email is on this thread. Mel — MK's email is on this thread. Grab fifteen minutes when it works for both of you.</p>
                <p>Happy to join a call if useful, but not necessary.</p>
                <p class="sign">Sincerely,</p>
                <p class="sign-name">Aaron C. Norris</p>
              </div>
            </div>

            <div class="callout">
              <strong>Before sending:</strong> Confirm Mel's full name and email address from contacts. If this is a cold intro to Mel, send Mel a private heads-up first and wait for her green light before looping MK in — that is the "double opt-in" courtesy.
            </div>

            <div class="email-meta">
              <div class="email-meta-item"><span class="k">When</span><span class="v">After MK catch-up lands</span></div>
              <div class="email-meta-item"><span class="k">Format</span><span class="v">Both parties To line</span></div>
              <div class="email-meta-item"><span class="k">Opt-In</span><span class="v">Confirm Mel first</span></div>
              <div class="email-meta-item"><span class="k">Goal</span><span class="v">15-min discovery call</span></div>
            </div>
          </div>
        </div>

        <!-- EMAIL 3: PAYMENT -->
        <div class="email-card payment">
          <div class="email-head">
            <div class="email-title"><span class="email-num">3</span> Payment Reconciliation Note to MK</div>
            <span class="email-tag t-payment">Payment</span>
          </div>
          <div class="email-body">
            <p>Close the loop on outstanding payment items with MK — open invoices, approved hours, and the agreed path to keep her current going forward. Short, specific, and sent same day as the catch-up so she is not left wondering.</p>

            <div class="draft-block">
              <div class="draft-label">Draft — Email 3</div>
              <div class="hdr-line"><strong>To:</strong> MK Smith</div>
              <div class="hdr-line"><strong>CC:</strong> Caroline Butler</div>
              <div class="hdr-line"><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
              <div class="hdr-line"><strong>Subject:</strong> Payment — reconciliation &amp; path forward</div>
              <hr>
              <div class="draft-body">
                <p class="greet">MK —</p>
                <p>Following up on payment, as promised. Here is where I have it:</p>
                <p>• Please resend the most recent invoice (and any still open) directly to me and CC Caroline. I want to match it against what I show on my side before we cut payment.</p>
                <p>• Confirm preferred method — ACH, check, or the system we set up last cycle — and the remit-to address on file.</p>
                <p>• Going forward: invoice monthly on the 1st, net 15. Caroline will acknowledge receipt within one business day, and payment will clear within terms. If anything slips, you hear from me — not silence.</p>
                <p>Caroline is CC'd so she has visibility and can keep this moving if I am on the road.</p>
                <p>Appreciate you sticking with it. Let's keep building.</p>
                <p class="sign">Sincerely,</p>
                <p class="sign-name">Aaron C. Norris</p>
              </div>
            </div>

            <div class="email-meta">
              <div class="email-meta-item"><span class="k">When</span><span class="v">Same day as Email 1</span></div>
              <div class="email-meta-item"><span class="k">CC</span><span class="v">Caroline Butler (Admin)</span></div>
              <div class="email-meta-item"><span class="k">Terms</span><span class="v">Net 15, monthly on the 1st</span></div>
              <div class="email-meta-item"><span class="k">SLA</span><span class="v">CB acknowledges &lt;1 biz day</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: EXECUTION CHECKLIST -->
      <section>
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Checklist</span></h2>
        <p class="section-sub">Work this top-to-bottom. Each step is a checkbox — when all are checked, the action item is closed.</p>

        <div class="checklist">
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Re-read MK Smith's most recent email thread end-to-end</div>
              <div class="check-sub">Note specific items she is waiting on. Pull any links or file references into the reply.</div>
            </div>
            <div class="check-when">Step 1 · 10 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Send Email 1 — Catch-up &amp; priority stack</div>
              <div class="check-sub">Use the draft above. Personalize with one or two specific items from her thread.</div>
            </div>
            <div class="check-when">Step 2 · 10 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Confirm Mel's opt-in for the MK introduction</div>
              <div class="check-sub">Short private note to Mel. Do not forward MK's contact until Mel says yes.</div>
            </div>
            <div class="check-when">Step 3 · 5 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Send Email 2 — MK &lt;&gt; Mel intro</div>
              <div class="check-sub">Both parties on To line. Aaron steps back after sending.</div>
            </div>
            <div class="check-when">Step 4 · 5 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Send Email 3 — Payment reconciliation (CC Caroline Butler)</div>
              <div class="check-sub">Same-day send, paired with Email 1 so MK sees the full picture.</div>
            </div>
            <div class="check-when">Step 5 · 10 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Brief Caroline Butler on the payment thread</div>
              <div class="check-sub">Quick note so CB is not blind-sided by MK's invoice hitting her inbox.</div>
            </div>
            <div class="check-when">Step 6 · 5 min</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-content">
              <div class="check-title">Log action closed in master tracker</div>
              <div class="check-sub">Reference this page. Schedule a Friday calendar review of MK's status summary.</div>
            </div>
            <div class="check-when">Step 7 · 3 min</div>
          </div>
        </div>
      </section>

      <!-- SECTION: PEOPLE -->
      <section>
        <h2 class="nu-section-title"><span class="first">People</span> <span class="rest">on This Thread</span></h2>
        <p class="section-sub">Roles, context, and how each person fits into the next move.</p>

        <div class="contact-grid">
          <div class="contact-card">
            <h4>MK Smith</h4>
            <div class="role">Marketing Contractor</div>
            <div class="detail">
              Marketing contractor for Norris Utilities®. Drives brand, campaign strategy, line-card updates, and customer-facing materials. Primary recipient of Emails 1 and 3; introduced to Mel in Email 2.
            </div>
          </div>
          <div class="contact-card">
            <h4>Mel</h4>
            <div class="role">New Connection</div>
            <div class="detail">
              Network / positioning overlap with MK and Aaron's target markets. Confirm full name and email before intro. Opt-in first — do not blind-send.
            </div>
          </div>
          <div class="contact-card">
            <h4>Aaron C. Norris</h4>
            <div class="role">Founder &amp; CEO</div>
            <div class="detail">
              Owner of this action. Sends all three emails today. Steps back after the intro and lets MK and Mel take it from there.<br>
              <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
              <a href="tel:2055001343">205-500-1343</a>
            </div>
          </div>
          <div class="contact-card">
            <h4>Caroline Butler (CB)</h4>
            <div class="role">Admin · Tier 1 Trust</div>
            <div class="detail">
              CC'd on Email 3. Receives MK's invoice, acknowledges within one business day, and keeps payment moving when Aaron is traveling.
            </div>
          </div>
        </div>

        <div class="callout">
          <strong>Voice reminder:</strong> Em-dash greetings ("Name —"), indented paragraphs, bullets use • not -, close with "Sincerely," then "Aaron C. Norris" on the next line. No "just," no "touch base," no apologetic filler — direct and accountable.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-brand">NORRIS UTILITIES®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>