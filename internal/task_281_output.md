<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Catch-Up Emails & Mel Introduction — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 50%, #00aaff 75%, var(--nu-cyan) 100%);
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      opacity: 0.12;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      z-index: 1;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-page-label {
      display: inline-block;
      margin-top: 24px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
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
      background: var(--nu-white);
      padding: 60px 40px 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.02) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033CC;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      font-size: 0.95rem;
      color: #666;
      margin-bottom: 28px;
      font-weight: 400;
    }

    /* OVERVIEW STRIP */
    .nu-overview {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 24px 28px;
      margin-bottom: 40px;
      border-radius: 0 8px 8px 0;
    }
    .nu-overview-label {
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.8rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-overview-text {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* META BADGES */
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 40px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px 10px 14px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge.priority {
      background: linear-gradient(135deg, #8B0000 0%, #C9302C 100%);
    }
    .nu-badge.status {
      background: linear-gradient(135deg, #0033CC 0%, #0066ee 100%);
    }

    /* EMAIL CARDS */
    .nu-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
    @media (min-width: 900px) {
      .nu-grid-2 { grid-template-columns: 1fr 1fr; }
    }

    .nu-email-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      position: relative;
      overflow: hidden;
    }
    .nu-email-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    }
    .nu-email-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .nu-email-tag {
      display: inline-block;
      padding: 4px 10px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 3px;
      white-space: nowrap;
    }
    .nu-email-meta {
      display: grid;
      grid-template-columns: 70px 1fr;
      gap: 6px 12px;
      font-size: 0.9rem;
      margin-bottom: 18px;
    }
    .nu-email-meta dt {
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.78rem;
      padding-top: 2px;
    }
    .nu-email-meta dd {
      color: var(--nu-dark-text);
    }
    .nu-email-body {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 20px 22px;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
      font-family: var(--font-primary);
    }
    .nu-email-body .em {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* CHECKLIST */
    .nu-checklist {
      background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
      border-radius: 10px;
      padding: 32px;
      margin-bottom: 40px;
      border: 1px solid #dce4ff;
    }
    .nu-checklist h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 18px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-checklist ol {
      list-style: none;
      counter-reset: step;
    }
    .nu-checklist ol li {
      counter-increment: step;
      position: relative;
      padding: 12px 12px 12px 52px;
      margin-bottom: 8px;
      background: var(--nu-white);
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .nu-checklist ol li::before {
      content: counter(step);
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-checklist ol li strong {
      color: var(--nu-navy);
    }

    /* SIGNATURE BLOCK */
    .nu-signature {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 40px;
      font-size: 0.92rem;
      line-height: 1.7;
    }
    .nu-signature h3 {
      color: var(--nu-cyan);
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
      font-weight: 900;
    }
    .nu-signature .sig-name {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-white);
    }
    .nu-signature a {
      color: var(--nu-cyan);
      text-decoration: none;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 20px 60px; }
      .nu-email-card { padding: 22px; }
      .nu-email-card-header { flex-direction: column; gap: 10px; }
      .nu-email-meta { grid-template-columns: 1fr; gap: 2px 0; }
      .nu-email-meta dt { margin-top: 8px; }
      .nu-checklist { padding: 22px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-email-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-page-label">Action Item · MK Catch-Up + Mel Intro</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- OVERVIEW -->
      <div class="nu-overview">
        <div class="nu-overview-label">reMarkable Action Item</div>
        <div class="nu-overview-text">
          Send MK Smith two catch-up emails — one direct check-in on current marketing work, and one that introduces her to Mel so the two can connect and collaborate on the Norris Utilities® brand voice going forward.
        </div>
      </div>

      <!-- META -->
      <div class="nu-meta-row">
        <span class="nu-badge priority">Priority · Today</span>
        <span class="nu-badge">Owner · Aaron C. Norris</span>
        <span class="nu-badge status">Status · Drafts Ready</span>
        <span class="nu-badge">Channel · Email</span>
        <span class="nu-badge">Date · 2026-04-23</span>
      </div>

      <!-- SECTION: DRAFT EMAILS -->
      <div style="margin-bottom: 32px;">
        <h2 class="nu-section-title">Draft <span>Emails</span></h2>
        <p class="nu-section-subtitle">Review, adjust as needed, then send from acnorris@norrisutilities.com.</p>
      </div>

      <div class="nu-grid nu-grid-2">

        <!-- EMAIL 1: MK CATCH-UP -->
        <article class="nu-email-card">
          <div class="nu-email-card-header">
            <div class="nu-email-title">Email 1 — MK Catch-Up</div>
            <span class="nu-email-tag">Direct</span>
          </div>
          <dl class="nu-email-meta">
            <dt>To</dt><dd>MK Smith</dd>
            <dt>From</dt><dd>Aaron C. Norris</dd>
            <dt>Subject</dt><dd>Catching up — where we are and what's next</dd>
            <dt>CC</dt><dd>— none —</dd>
          </dl>
          <div class="nu-email-body">MK —

    It's been a minute, and I want to loop you back in on where Norris Utilities® is and what I'd like to line up next.

    A few quick notes:

    • FlexPro Armor bucket covers are moving — we shipped several orders on March 20, and reconciliation is wrapping up this week.

    • The line card design language is locked in and we've been building pages against it consistently. That gives us a clean template for any new collateral you'd want to produce.

    • I'd like to get marketing cadence back on a rhythm — LinkedIn, email, and a refreshed one-pager for the SE Bay Shore Systems territory.

    Can you grab 20 minutes this week? I'll bring a short punch list. Evenings or early mornings both work on my end.

    Sincerely,
    Aaron C. Norris</div>
        </article>

        <!-- EMAIL 2: MEL INTRO -->
        <article class="nu-email-card">
          <div class="nu-email-card-header">
            <div class="nu-email-title">Email 2 — Intro to Mel</div>
            <span class="nu-email-tag">Introduction</span>
          </div>
          <dl class="nu-email-meta">
            <dt>To</dt><dd>MK Smith; Mel</dd>
            <dt>From</dt><dd>Aaron C. Norris</dd>
            <dt>Subject</dt><dd>Intro — MK Smith &lt;&gt; Mel</dd>
            <dt>CC</dt><dd>— none —</dd>
          </dl>
          <div class="nu-email-body">MK, Mel —

    I want to put you two in touch directly.

    <span class="em">MK Smith</span> runs marketing for Norris Utilities® — she's the one behind our brand voice, collateral, and outbound cadence. She knows the product lines (FlexPro Armor, Samson Rope, Skylift, Bay Shore Systems) and knows how I like things communicated.

    <span class="em">Mel</span>, you'll add a second perspective I trust. I'd like the two of you to compare notes on where we are, what's working, and where we can sharpen the message — especially around FlexPro Armor and the SE territory for Bay Shore Systems.

    No heavy agenda on my end. A 30-minute call between you two, then send me a short recap of what you agreed to.

    Appreciate y'all.

    Sincerely,
    Aaron C. Norris</div>
        </article>

      </div>

      <!-- SEND CHECKLIST -->
      <div class="nu-checklist">
        <h3>Send Checklist</h3>
        <ol>
          <li><strong>Confirm Mel's email address</strong> before sending Email 2 — do not guess. If unsure, send Email 1 today and hold Email 2 until confirmed.</li>
          <li><strong>Send Email 1 (MK Catch-Up) first</strong> so MK knows the intro is coming before she sees Mel on a thread.</li>
          <li><strong>Send Email 2 (Intro)</strong> within 24 hours of Email 1 — don't let it slip.</li>
          <li><strong>Log both in the master tracker</strong> with date sent and expected response window (7 days).</li>
          <li><strong>Follow up day 7</strong> if no reply from either — standard Norris cadence.</li>
        </ol>
      </div>

      <!-- STANDARD SIGNATURE REFERENCE -->
      <div class="nu-signature">
        <h3>Standard Signature Block</h3>
        <div class="sig-name">Aaron C. Norris</div>
        Founder &amp; CEO<br>
        Norris Utilities, LLC<br>
        Cell: <a href="tel:2055001343">205-500-1343</a><br>
        <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
        <em>A Legacy of Commitment®</em>
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