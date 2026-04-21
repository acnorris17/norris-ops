<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Call Prep & Confirmation Letter | Norris Utilities®</title>
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
      --nu-success-green: #1B7A3A;
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
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ PAGE BANNER ══ */
    .doc-banner {
      background: var(--nu-white);
      padding: 36px 40px 28px;
      text-align: center;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-action-red);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      padding: 6px 16px;
      border-radius: 3px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }
    .doc-meta {
      margin-top: 18px;
      font-size: 0.85rem;
      color: #666;
      letter-spacing: 0.02em;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* ══ CONTENT WRAPPER ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 40px 24px 60px;
    }
    .container {
      max-width: 980px;
      margin: 0 auto;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-top: 8px;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }

    /* ══ CONTACT BAR ══ */
    .contact-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 32px;
    }
    .contact-cell {
      padding: 18px 22px;
      color: var(--nu-white);
      border-right: 1px solid rgba(255,255,255,0.08);
    }
    .contact-cell:last-child { border-right: none; }
    .contact-cell-label {
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .contact-cell-value {
      font-size: 0.98rem;
      font-weight: 700;
    }
    .contact-cell-value a {
      color: var(--nu-white);
      text-decoration: none;
    }
    .contact-cell-value a:hover { color: var(--nu-cyan); }

    /* ══ ASK LIST ══ */
    .ask-list {
      list-style: none;
      counter-reset: ask;
    }
    .ask-list li {
      counter-increment: ask;
      position: relative;
      padding: 18px 18px 18px 64px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
    }
    .ask-list li::before {
      content: counter(ask);
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .ask-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .ask-list li p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ SCRIPT BLOCK ══ */
    .script-block {
      background: #f8f9fc;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 4px;
      font-size: 0.96rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .script-block p { margin-bottom: 14px; }
    .script-block p:last-child { margin-bottom: 0; }
    .script-label {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
      padding: 4px 10px;
      background: rgba(0,0,255,0.08);
      border-radius: 3px;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ FOLLOW-UP EMAIL ══ */
    .email-frame {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-top: 14px;
    }
    .email-header {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-header div { margin-bottom: 4px; }
    .email-header strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .email-body {
      padding: 26px;
      font-size: 0.96rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .email-body p { margin-bottom: 14px; padding-left: 24px; }
    .email-body p.greeting { padding-left: 0; }
    .email-body ul { margin-bottom: 14px; padding-left: 48px; list-style: none; }
    .email-body ul li { margin-bottom: 6px; position: relative; padding-left: 16px; }
    .email-body ul li::before { content: '•'; position: absolute; left: 0; color: var(--nu-blue); font-weight: 900; }
    .email-body .signoff { padding-left: 0; margin-top: 22px; }
    .email-body .sig { padding-left: 24px; margin-bottom: 4px; }

    /* ══ ALERT BOX ══ */
    .alert-box {
      background: linear-gradient(135deg, #fff8e8 0%, #fff3d4 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 22px;
    }
    .alert-box-title {
      font-weight: 900;
      color: #8a6d1f;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .alert-box-body {
      font-size: 0.94rem;
      color: var(--nu-dark-text);
    }

    /* ══ TWO-COL ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title { font-size: 1.5rem; }
      .doc-banner { padding: 26px 20px 22px; }
      .nu-card { padding: 22px 18px; }
      .two-col { grid-template-columns: 1fr; }
      .ask-list li { padding-left: 56px; }
      .contact-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- DOC BANNER -->
  <section class="doc-banner">
    <div class="doc-eyebrow">Action Item · reMarkable · Phone Call Required</div>
    <h1 class="doc-title">H2O Waterproofing — <span>Call Prep & Written Confirmation Pack</span></h1>
    <p class="doc-subtitle">Place the call, work the script, and send the follow-up email the same day so every commitment lives in writing.</p>
    <div class="doc-meta">
      <strong>Owner:</strong> Aaron C. Norris &nbsp;·&nbsp;
      <strong>Date Opened:</strong> April 21, 2026 &nbsp;·&nbsp;
      <strong>Status:</strong> Open · Awaiting Call &nbsp;·&nbsp;
      <strong>Priority:</strong> Medium-High
    </div>
  </section>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- CONTACT BAR -->
      <div class="contact-bar">
        <div class="contact-cell">
          <div class="contact-cell-label">Vendor</div>
          <div class="contact-cell-value">H2O Waterproofing</div>
        </div>
        <div class="contact-cell">
          <div class="contact-cell-label">Best Time To Call</div>
          <div class="contact-cell-value">Tue–Thu, 9:00–11:00 AM CT</div>
        </div>
        <div class="contact-cell">
          <div class="contact-cell-label">Call From</div>
          <div class="contact-cell-value"><a href="tel:2055001343">205-500-1343</a></div>
        </div>
        <div class="contact-cell">
          <div class="contact-cell-label">Reply To</div>
          <div class="contact-cell-value"><a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a></div>
        </div>
      </div>

      <!-- WHY -->
      <section class="nu-card">
        <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Call Matters</span></h2>
        <p style="margin-bottom: 14px;">A verbal "we'll take care of it" does not protect Norris Utilities® if there is a dispute later. The purpose of this call is to anchor every commitment from H2O Waterproofing in a written record — either an email reply, a PDF letter on their letterhead, or both.</p>
        <div class="alert-box">
          <div class="alert-box-title">Rule</div>
          <div class="alert-box-body">Nothing on this account is considered closed until H2O Waterproofing has confirmed it <em>in writing</em>. A phone call is the start of the conversation, never the end of it.</div>
        </div>
      </section>

      <!-- WHAT TO GET IN WRITING -->
      <section class="nu-card">
        <h2 class="nu-section-title"><span class="first">Get</span> <span class="rest">These Items In Writing</span></h2>
        <ol class="ask-list">
          <li>
            <strong>Confirmation of the agreement / scope as discussed</strong>
            <p>Have them restate, in writing, exactly what was agreed to verbally — scope of work, materials, and any exclusions. No paraphrasing, no assumptions.</p>
          </li>
          <li>
            <strong>Pricing, fees, and any transfer or processing charges</strong>
            <p>Total dollar amount, line items, taxes, transfer fees, processing fees, and the payment terms (net days, deposit required, accepted payment methods).</p>
          </li>
          <li>
            <strong>Timeline and key dates</strong>
            <p>Start date, completion target, and any milestone dates that affect Norris Utilities® scheduling. If they need anything from us to start, capture that too.</p>
          </li>
          <li>
            <strong>Warranty, guarantee, and what is excluded</strong>
            <p>Length of warranty, what triggers it, what voids it, who pays for return trips, and how a claim is opened.</p>
          </li>
          <li>
            <strong>Insurance, licensing, and W-9 on file</strong>
            <p>Current Certificate of Insurance (COI), state license number, and a signed W-9 — required before any payment is issued.</p>
          </li>
          <li>
            <strong>Single point of contact going forward</strong>
            <p>Name, direct cell, and email for the person responsible for this account at H2O Waterproofing — not a general inbox.</p>
          </li>
        </ol>
      </section>

      <!-- CALL SCRIPT -->
      <section class="nu-card">
        <h2 class="nu-section-title"><span class="first">Call</span> <span class="rest">Script</span></h2>

        <div class="script-block">
          <span class="script-label">Opening</span>
          <p>"Hey — this is Aaron Norris with Norris Utilities® in Birmingham. I appreciate you taking the call. I've got a short list I want to walk through with you, and I'd like to follow this up with an email so we both have everything in writing on our end. That work for you?"</p>
        </div>

        <div class="script-block">
          <span class="script-label">The Ask</span>
          <p>"There are six items I need confirmed: the scope as we discussed, total pricing including any transfer or processing fees, the timeline, the warranty terms, your current COI and W-9, and a direct point of contact going forward. I'll send you a recap email today — all I need is a reply that says it looks correct, or a redline if anything needs to change."</p>
        </div>

        <div class="script-block">
          <span class="script-label">If They Push Back</span>
          <p>"I understand. The reason I work this way is so neither one of us has to rely on memory six months from now. A short email reply protects both sides equally. If a written letter on your letterhead is easier than an email, that works just as well — whichever is faster for you."</p>
        </div>

        <div class="script-block">
          <span class="script-label">Close</span>
          <p>"I'll have the recap email in your inbox today. If I don't hear back by end of day Friday, I'll give you a quick call. I appreciate the partnership — looking forward to getting this one buttoned up."</p>
        </div>
      </section>

      <!-- CHECKLIST + EMAIL -->
      <div class="two-col">
        <section class="nu-card">
          <h2 class="nu-section-title"><span class="first">During</span> <span class="rest">The Call</span></h2>
          <ul class="checklist">
            <li>Confirm spelling of contact's full name & title</li>
            <li>Capture direct cell phone (not main line)</li>
            <li>Capture direct email (not info@ inbox)</li>
            <li>Note any verbal commitments — exact wording</li>
            <li>Ask: "Anything I missed that I should know?"</li>
            <li>Confirm they expect the recap email today</li>
            <li>Set expectation: reply by end of day Friday</li>
          </ul>
        </section>

        <section class="nu-card">
          <h2 class="nu-section-title"><span class="first">After</span> <span class="rest">The Call</span></h2>
          <ul class="checklist">
            <li>Send the recap email below — same day</li>
            <li>Log the call in master_tracker</li>
            <li>Save vendor contact in companies/h2o-waterproofing</li>
            <li>Calendar reminder: Friday EOD follow-up</li>
            <li>Tell Caroline (CB) the file is open</li>
            <li>If no reply by Friday — call again, document attempt</li>
          </ul>
        </section>
      </div>

      <!-- RECAP EMAIL DRAFT -->
      <section class="nu-card">
        <h2 class="nu-section-title"><span class="first">Recap</span> <span class="rest">Email — Send Same Day As Call</span></h2>
        <p style="margin-bottom: 14px; font-size: 0.94rem; color: #555;">Personalize the greeting and the bracketed items with what was actually said on the call. Send from acnorris@norrisutilities.com.</p>

        <div class="email-frame">
          <div class="email-header">
            <div><strong>To:</strong> [Contact Name] &lt;[contact email]&gt;</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Recap of our call today — Norris Utilities® / H2O Waterproofing</div>
          </div>
          <div class="email-body">
            <p class="greeting">[First Name] —</p>

            <p>Thank you for the time on the phone this morning. As promised, here is a written recap of what we discussed. If anything below is incorrect or incomplete, please reply with a correction. If it all looks right, a short "confirmed" reply is all I need.</p>

            <p><strong>1. Scope as discussed</strong></p>
            <ul>
              <li>[Insert exact scope agreed to on call]</li>
              <li>[Insert any exclusions called out]</li>
            </ul>

            <p><strong>2. Pricing & fees</strong></p>
            <ul>
              <li>Total: $[amount]</li>
              <li>Transfer / processing fees: $[amount or "none"]</li>
              <li>Payment terms: [net days, deposit, accepted methods]</li>
            </ul>

            <p><strong>3. Timeline</strong></p>
            <ul>
              <li>Start date: [date]</li>
              <li>Target completion: [date]</li>
              <li>What you need from Norris Utilities® to start: [list]</li>
            </ul>

            <p><strong>4. Warranty</strong></p>
            <ul>
              <li>Length: [duration]</li>
              <li>Coverage: [what's included]</li>
              <li>Exclusions / what voids it: [list]</li>
            </ul>

            <p><strong>5. Documents I still need</strong></p>
            <ul>
              <li>Current Certificate of Insurance (COI)</li>
              <li>Signed W-9</li>
              <li>Copy of your state license</li>
            </ul>

            <p><strong>6. Point of contact going forward</strong></p>
            <ul>
              <li>[Name], [Title] — [direct cell] — [direct email]</li>
            </ul>

            <p>If a written letter on H2O Waterproofing letterhead is easier than an email reply, that works the same way on our end — whichever is faster for you. I'll plan to follow up by end of day Friday if I haven't heard back.</p>

            <p>I appreciate the partnership.</p>

            <p class="signoff">Sincerely,</p>
            <p class="sig"><strong>Aaron C. Norris</strong></p>
            <p class="sig">Founder &amp; CEO</p>
            <p class="sig">Norris Utilities®, LLC</p>
            <p class="sig">Cell: 205-500-1343</p>
            <p class="sig">acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- ESCALATION -->
      <section class="nu-card">
        <h2 class="nu-section-title"><span class="first">Escalation</span> <span class="rest">Path If No Written Reply</span></h2>
        <ul class="checklist">
          <li><strong>Day 0 (call day):</strong> Send recap email. Log in master_tracker.</li>
          <li><strong>Day 4 (Friday EOD):</strong> Quick follow-up call — "Just making sure my email landed."</li>
          <li><strong>Day 7:</strong> Forward the original recap with a one-line note: "Re-sending in case this got buried."</li>
          <li><strong>Day 10:</strong> Escalate to a different contact at H2O Waterproofing — owner or operations lead.</li>
          <li><strong>Day 14:</strong> Pause the work / hold payment until written confirmation is received. Notify Aaron + CB.</li>
        </ul>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>