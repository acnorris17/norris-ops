<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Catch-Up Emails + Mel Introduction — Norris Utilities®</title>
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      margin: 0 auto 12px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translate(-50%, 0);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,51,204,0.035) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    .nu-page-header {
      text-align: center;
      margin-bottom: 48px;
    }
    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.3em;
      color: var(--nu-blue);
      text-transform: uppercase;
      background: rgba(6, 208, 255, 0.12);
      padding: 8px 18px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      line-height: 1.2;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-sub {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin: 40px 0 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title span { color: var(--nu-blue); }

    /* ══ TASK META BOX ══ */
    .nu-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 32px;
    }
    .nu-meta-item {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .nu-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ EMAIL CARD ══ */
    .nu-email-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 0;
      box-shadow: 0 4px 18px rgba(0,0,0,0.07);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
      overflow: hidden;
    }
    .nu-email-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nu-email-title-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .nu-email-num {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      width: 30px; height: 30px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      flex-shrink: 0;
    }
    .nu-email-title {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .nu-email-tag {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      background: rgba(6, 208, 255, 0.2);
      color: var(--nu-cyan);
      padding: 4px 10px;
      border-radius: 3px;
    }
    .nu-email-body {
      padding: 24px 28px 28px;
    }
    .nu-field-row {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.92rem;
    }
    .nu-field-row:last-of-type { border-bottom: none; }
    .nu-field-label {
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.75rem;
      padding-top: 2px;
    }
    .nu-field-value { color: var(--nu-dark-text); }

    .nu-email-preview {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      margin-top: 20px;
      border-radius: 0 6px 6px 0;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .nu-email-preview p { margin-bottom: 14px; text-indent: 24px; }
    .nu-email-preview p:first-child { text-indent: 0; font-weight: 700; }
    .nu-email-preview p:last-child { margin-bottom: 0; }
    .nu-email-preview .sig {
      text-indent: 0;
      margin-top: 18px;
      font-style: normal;
    }
    .nu-email-preview .sig-name {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      list-style: none;
    }
    .nu-checklist li {
      position: relative;
      padding: 12px 0 12px 36px;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 15px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-blue);
      margin-right: 6px;
    }

    /* ══ CTA BAR ══ */
    .nu-cta-bar {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0066ee 60%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }
    .nu-cta-text {
      font-weight: 700;
      font-size: 1.1rem;
    }
    .nu-cta-sub {
      font-weight: 400;
      font-size: 0.9rem;
      opacity: 0.9;
      margin-top: 4px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 26px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.8rem; }
      .nu-field-row { grid-template-columns: 1fr; gap: 2px; }
      .nu-email-header { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-email-card, .nu-checklist, .nu-meta { box-shadow: none; break-inside: avoid; }
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
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-page-header">
        <span class="nu-eyebrow">Action Item · Marketing</span>
        <h1 class="nu-page-title">MK <span class="accent">Catch-Up Emails</span> + Mel Introduction</h1>
        <p class="nu-page-sub">Re-open the communication channel with MK Smith after the recent quiet stretch, and introduce Mel directly via email so MK and Mel can begin coordinating on open marketing items.</p>
      </div>

      <!-- TASK META -->
      <div class="nu-meta">
        <div class="nu-meta-item">
          <div class="nu-meta-label">Action Source</div>
          <div class="nu-meta-value">reMarkable Notebook</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Captured</div>
          <div class="nu-meta-value">2026-04-21</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-item">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value" style="color: var(--nu-blue);">Open — Send Today</div>
        </div>
      </div>

      <!-- SECTION: EMAIL 1 -->
      <h2 class="nu-section-title"><span>Email 1 —</span> MK Catch-Up</h2>

      <div class="nu-email-card">
        <div class="nu-email-header">
          <div class="nu-email-title-row">
            <span class="nu-email-num">1</span>
            <span class="nu-email-title">Catch-Up with MK Smith</span>
          </div>
          <span class="nu-email-tag">Direct Send</span>
        </div>
        <div class="nu-email-body">
          <div class="nu-field-row">
            <div class="nu-field-label">To</div>
            <div class="nu-field-value">MK Smith (Marketing Contractor)</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">From</div>
            <div class="nu-field-value">acnorris@norrisutilities.com</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">Subject</div>
            <div class="nu-field-value">Catching up — where we stand and what's next</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">Purpose</div>
            <div class="nu-field-value">Reconnect, share recent wins, align on the next 30 days</div>
          </div>

          <div class="nu-email-preview">
            <p>MK —</p>
            <p>It's been a minute, and I wanted to loop you back in on where Norris Utilities® is at and where I need your help next.</p>
            <p>Since we last connected, the Line Card has gone live, FlexPro Armor has moved through several reorders, and the Skylift PO from January is progressing. The ops portal at ops.norrisutilities.com is running daily and our inbound email volume has picked up meaningfully.</p>
            <p>A few items I'd like your eyes on:</p>
            <p>• Social content cadence — we have a real backlog of field photos now worth deploying<br>
               • Website updates — the FlexPro Armor product pages need a refresh with the updated SKU matrix<br>
               • A proper case study — Dominion Energy (Coy Crosby) is ready to be written up</p>
            <p>I'd like to get on a 20-minute call this week to walk through priorities. I'm also going to introduce you to Mel in a separate email — Mel is going to be helping on the coordination side, and I want you two connected directly so nothing has to route through me.</p>
            <p>Let me know what works on your end.</p>
            <p class="sig">Sincerely,<br><span class="sig-name">Aaron C. Norris</span></p>
          </div>
        </div>
      </div>

      <!-- SECTION: EMAIL 2 -->
      <h2 class="nu-section-title"><span>Email 2 —</span> Mel Introduction</h2>

      <div class="nu-email-card">
        <div class="nu-email-header">
          <div class="nu-email-title-row">
            <span class="nu-email-num">2</span>
            <span class="nu-email-title">Introducing Mel to MK</span>
          </div>
          <span class="nu-email-tag">CC Both</span>
        </div>
        <div class="nu-email-body">
          <div class="nu-field-row">
            <div class="nu-field-label">To</div>
            <div class="nu-field-value">MK Smith</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">CC</div>
            <div class="nu-field-value">Mel</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">From</div>
            <div class="nu-field-value">acnorris@norrisutilities.com</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">Subject</div>
            <div class="nu-field-value">Intro — MK Smith ↔ Mel</div>
          </div>
          <div class="nu-field-row">
            <div class="nu-field-label">Purpose</div>
            <div class="nu-field-value">Direct introduction so MK and Mel can coordinate without routing through Aaron</div>
          </div>

          <div class="nu-email-preview">
            <p>MK, Mel —</p>
            <p>Quick introduction so y'all can work together directly going forward.</p>
            <p>MK Smith has been our marketing contractor and has handled brand work, the Line Card design language, and product page collateral for Norris Utilities®. MK knows the brand rules and the voice inside and out.</p>
            <p>Mel is stepping in to help coordinate the moving pieces on our marketing and communications work — cadence, deadlines, and keeping initiatives from getting stuck on my desk.</p>
            <p>The goal: y'all two connected directly so decisions on timing, deliverables, and priorities don't have to wait on me. I'll stay in the loop on the big calls, but I don't want to be the bottleneck for execution.</p>
            <p>Mel — MK will share the current backlog and what's shipped. MK — Mel will reach out this week to lock in a recurring coordination slot.</p>
            <p>Appreciate both of you. Looking forward to seeing this team earn the business.</p>
            <p class="sig">Sincerely,<br><span class="sig-name">Aaron C. Norris</span></p>
          </div>
        </div>
      </div>

      <!-- EXECUTION CHECKLIST -->
      <h2 class="nu-section-title"><span>Execution</span> Checklist</h2>
      <ul class="nu-checklist">
        <li><strong>1.</strong> Confirm MK Smith's current email address on file before sending.</li>
        <li><strong>2.</strong> Confirm Mel's email address and preferred name/spelling for the intro line.</li>
        <li><strong>3.</strong> Send Email 1 (MK catch-up) first, wait for read/reply, then send Email 2 (intro).</li>
        <li><strong>4.</strong> Use Aaron's voice guide: em-dash greeting, indented paragraphs, bullets use •, close with "Sincerely," then "Aaron C. Norris".</li>
        <li><strong>5.</strong> Log both sends in the master tracker under "Marketing — MK re-engagement".</li>
        <li><strong>6.</strong> Set a 5-day follow-up reminder if MK has not replied to Email 1.</li>
        <li><strong>7.</strong> Once Mel and MK confirm a recurring coordination slot, add it to the shared calendar.</li>
      </ul>

      <!-- CTA -->
      <div class="nu-cta-bar">
        <div>
          <div class="nu-cta-text">Ready to send today.</div>
          <div class="nu-cta-sub">Both drafts are prepared. Verify email addresses, then send in order.</div>
        </div>
        <a href="mailto:acnorris@norrisutilities.com?subject=MK%20%2B%20Mel%20emails%20sent" class="nu-btn-primary">Mark as Sent</a>
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