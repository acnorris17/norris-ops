<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Catch-Up Emails &amp; Mel Intro — Norris Utilities®</title>
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
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
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
      width: 80px; height: 80px;
      margin: 0 auto 16px;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-document-label {
      margin-top: 14px;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }

    .nu-intro {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 24px 28px;
      margin-bottom: 40px;
      border-radius: 0 8px 8px 0;
    }
    .nu-intro p {
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      line-height: 1.65;
    }
    .nu-intro strong { color: var(--nu-blue); font-weight: 700; }

    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 20px;
      margin-bottom: 20px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-badge-cyan {
      background: linear-gradient(135deg, #0033CC 0%, var(--nu-cyan) 100%);
    }

    .nu-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .nu-meta-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-meta-value {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-meta-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
      font-weight: 400;
    }

    .nu-email-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      margin-bottom: 32px;
      overflow: hidden;
    }
    .nu-email-header {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nu-email-header h3 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.02em;
    }
    .nu-email-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-email-meta {
      background: var(--nu-light-gray);
      padding: 16px 28px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .nu-email-meta-row {
      display: flex;
      margin-bottom: 5px;
    }
    .nu-email-meta-row:last-child { margin-bottom: 0; }
    .nu-email-meta-key {
      font-weight: 700;
      color: var(--nu-blue);
      min-width: 70px;
    }
    .nu-email-meta-val { color: var(--nu-dark-text); }
    .nu-email-body {
      padding: 28px;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-email-body p { margin-bottom: 16px; text-indent: 1.5em; }
    .nu-email-body p.no-indent { text-indent: 0; }
    .nu-email-body ul {
      list-style: none;
      margin: 6px 0 16px 1.5em;
    }
    .nu-email-body ul li {
      padding-left: 20px;
      position: relative;
      margin-bottom: 6px;
    }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .nu-email-sig {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-email-sig strong { color: var(--nu-navy); }

    .nu-checklist {
      background: linear-gradient(135deg, #F5F5F7 0%, #EDEDF2 100%);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 32px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist h2 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
    }
    .nu-checklist ol {
      list-style: none;
      counter-reset: step;
    }
    .nu-checklist ol li {
      counter-increment: step;
      padding: 12px 0 12px 48px;
      position: relative;
      border-bottom: 1px solid rgba(0,0,51,0.08);
      color: var(--nu-dark-text);
    }
    .nu-checklist ol li:last-child { border-bottom: none; }
    .nu-checklist ol li::before {
      content: counter(step);
      position: absolute;
      left: 0; top: 12px;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .nu-checklist ol li strong { color: var(--nu-navy); }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
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
    .nu-footer-name { font-weight: 700; color: var(--nu-white); }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-badge { clip-path: none; border-radius: 6px; }
      .nu-email-body { padding: 20px; }
      .nu-email-header, .nu-email-meta { padding: 14px 20px; }
      .nu-checklist { padding: 22px; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-email-block, .nu-meta-card { box-shadow: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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
    <div class="nu-document-label">Action Item · Marketing Outreach</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-badge nu-badge-cyan">reMarkable Action Item</div>
      <h1 class="nu-section-title">MK Catch-Up <span>Emails &amp; Mel Introduction</span></h1>
      <div class="nu-section-rule"></div>

      <div class="nu-intro">
        <p><strong>Objective:</strong> Send MK Smith two catch-up emails to re-engage on marketing deliverables and close the loop on open items, and introduce MK to Mel so the two can connect directly on shared creative work. Draft copy for both emails is prepared below, ready for Aaron's review before sending.</p>
      </div>

      <div class="nu-meta-grid">
        <div class="nu-meta-card">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
          <div class="nu-meta-sub">Founder &amp; CEO, sole sender</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Primary Recipient</div>
          <div class="nu-meta-value">MK Smith</div>
          <div class="nu-meta-sub">Marketing Contractor</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Introduction Target</div>
          <div class="nu-meta-value">Mel</div>
          <div class="nu-meta-sub">Creative partner — email intro</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Status</div>
          <div class="nu-meta-value">Drafts Ready</div>
          <div class="nu-meta-sub">Awaiting Aaron's final review</div>
        </div>
      </div>

      <!-- EMAIL 1 — CATCH-UP -->
      <div class="nu-email-block">
        <div class="nu-email-header">
          <h3>Email 1 — Catch-Up with MK</h3>
          <span class="nu-email-tag">Draft</span>
        </div>
        <div class="nu-email-meta">
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">To:</span>
            <span class="nu-email-meta-val">MK Smith</span>
          </div>
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">From:</span>
            <span class="nu-email-meta-val">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
          </div>
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">Subject:</span>
            <span class="nu-email-meta-val">Catching up — where we are and what's next</span>
          </div>
        </div>
        <div class="nu-email-body">
          <p class="no-indent">MK —</p>
          <p>It's been a minute and I wanted to catch you up on where we are. The line card refresh landed well, the FlexPro Armor imagery is doing the work I hoped it would at shows, and the Phoenix Icon® treatment you built has become the anchor for everything we put out.</p>
          <p>A few things I'd like to move forward this month:</p>
          <ul>
            <li>Short-form social assets for FlexPro Armor — vertical, show-floor ready</li>
            <li>A refreshed Samson Rope one-pager for distributor outreach</li>
            <li>A clean Skylift spec sheet template we can drop new models into</li>
          </ul>
          <p>Let me know what's realistic on your end for timing. Happy to jump on a quick call if that's easier than email.</p>
          <p>Also — separate note coming shortly. I'd like to introduce you to Mel. I think there's real value in you two talking directly.</p>
          <p class="no-indent">Sincerely,</p>
          <p class="no-indent" style="margin-left:1.5em;">Aaron C. Norris</p>
          <div class="nu-email-sig">
            <strong>Aaron C. Norris</strong><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- EMAIL 2 — INTRO TO MEL -->
      <div class="nu-email-block">
        <div class="nu-email-header">
          <h3>Email 2 — Intro: MK &amp; Mel</h3>
          <span class="nu-email-tag">Draft</span>
        </div>
        <div class="nu-email-meta">
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">To:</span>
            <span class="nu-email-meta-val">MK Smith; Mel</span>
          </div>
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">From:</span>
            <span class="nu-email-meta-val">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
          </div>
          <div class="nu-email-meta-row">
            <span class="nu-email-meta-key">Subject:</span>
            <span class="nu-email-meta-val">Introduction — MK Smith &amp; Mel</span>
          </div>
        </div>
        <div class="nu-email-body">
          <p class="no-indent">MK, Mel —</p>
          <p>Pleasure to connect the two of you. I've been wanting to make this introduction for a while.</p>
          <p>MK — Mel is someone I trust and whose work I respect. Creative sensibility, follow-through, and a genuinely good person. I think y'all will enjoy comparing notes.</p>
          <p>Mel — MK Smith is the marketing contractor who has shaped the Norris Utilities® visual voice. The line card, the FlexPro Armor creative, the Phoenix Icon® treatments across our materials — that's MK's work. She knows our brand cold.</p>
          <p>I'll step back and let you two take it from here. If there's anything I can do to make a first conversation easier, say the word.</p>
          <p class="no-indent">Sincerely,</p>
          <p class="no-indent" style="margin-left:1.5em;">Aaron C. Norris</p>
          <div class="nu-email-sig">
            <strong>Aaron C. Norris</strong><br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- SEND CHECKLIST -->
      <div class="nu-checklist">
        <h2>Send Checklist</h2>
        <ol>
          <li><strong>Review both drafts</strong> — confirm voice, tone, and deliverable list match current priorities.</li>
          <li><strong>Confirm Mel's email address</strong> before sending the introduction — do not send to a stale address.</li>
          <li><strong>Send Email 1 first</strong> — gives MK a heads-up that the intro is coming so it doesn't arrive cold.</li>
          <li><strong>Send Email 2 within the same day</strong> — keeps the two notes tied together in MK's inbox.</li>
          <li><strong>Log both sends</strong> in the master tracker with date and any follow-up window.</li>
        </ol>
      </div>

      <!-- NOTES -->
      <div class="nu-badge">Notes for Aaron</div>
      <div class="nu-intro" style="border-left-color: var(--nu-blue);">
        <p>Drafts use Aaron's standard voice: em-dash greeting, indented paragraphs, bullets with <strong>•</strong>, "Sincerely," close, full signature block. No filler, no buzzwords. Deliverable list in Email 1 can be trimmed or expanded based on current workload — replace the three bullets with whatever's most pressing when you sit down to send.</p>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <span class="nu-footer-name">Aaron C. Norris</span>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>