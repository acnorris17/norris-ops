<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MK Catch-Up Emails &amp; Mel Introduction — Norris Utilities®</title>
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
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
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
    font-family: var(--font-primary);
    font-style: italic;
    font-weight: 300;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    letter-spacing: 0.05em;
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
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 65%; height: 65%;
    max-width: 700px;
    background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
  }
  .nu-container {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* PAGE TITLE */
  .nu-page-title-block {
    text-align: center;
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 3px solid var(--nu-medium-gray);
  }
  .nu-page-title {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 2.5rem;
    color: var(--nu-dark-text);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }
  .nu-page-title .accent { color: var(--nu-blue); }
  .nu-page-subtitle {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.15rem;
    color: var(--nu-body-text);
    max-width: 720px;
    margin: 0 auto;
  }
  .nu-action-meta {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 18px;
    background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
    color: var(--nu-white);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 4px;
  }

  /* SECTION HEADERS */
  .nu-section-title {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1.6rem;
    color: var(--nu-blue);
    margin-bottom: 20px;
    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--nu-cyan);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .nu-section-title span {
    color: var(--nu-dark-text);
    font-weight: 700;
  }

  /* CONTACT CARDS */
  .nu-contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  .nu-contact-card {
    background: var(--nu-white);
    border-left: 5px solid var(--nu-cyan);
    border-radius: 6px;
    padding: 22px 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .nu-contact-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .nu-contact-card .role {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--nu-blue);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .nu-contact-card .name {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1.4rem;
    color: var(--nu-dark-text);
    margin-bottom: 8px;
  }
  .nu-contact-card .detail {
    font-size: 0.95rem;
    color: var(--nu-body-text);
    line-height: 1.7;
  }

  /* EMAIL DRAFT BLOCKS */
  .nu-email-draft {
    background: var(--nu-light-gray);
    border-left: 6px solid var(--nu-blue);
    border-radius: 8px;
    padding: 32px 36px;
    margin-bottom: 30px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    position: relative;
  }
  .nu-email-label {
    position: absolute;
    top: -14px;
    left: 24px;
    background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    color: var(--nu-white);
    font-weight: 900;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,255,0.25);
  }
  .nu-email-meta {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 6px 16px;
    padding-bottom: 18px;
    margin-bottom: 22px;
    border-bottom: 1px dashed var(--nu-medium-gray);
    font-size: 0.93rem;
  }
  .nu-email-meta .label {
    font-weight: 700;
    color: var(--nu-blue);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.78rem;
    padding-top: 3px;
  }
  .nu-email-meta .value {
    color: var(--nu-dark-text);
    font-weight: 400;
  }
  .nu-email-body {
    font-family: var(--font-primary);
    font-size: 1rem;
    line-height: 1.75;
    color: var(--nu-dark-text);
  }
  .nu-email-body p {
    margin-bottom: 14px;
    text-indent: 0;
  }
  .nu-email-body .indent {
    padding-left: 28px;
  }
  .nu-email-body ul {
    list-style: none;
    padding-left: 28px;
    margin-bottom: 14px;
  }
  .nu-email-body ul li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 6px;
  }
  .nu-email-body ul li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--nu-blue);
    font-weight: 900;
  }
  .nu-email-body .signature {
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid var(--nu-medium-gray);
    font-size: 0.95rem;
    color: var(--nu-body-text);
  }
  .nu-email-body .signature .name {
    font-weight: 700;
    color: var(--nu-dark-text);
    font-size: 1rem;
  }

  /* CHECKLIST */
  .nu-checklist {
    background: var(--nu-white);
    border: 2px solid var(--nu-medium-gray);
    border-radius: 8px;
    padding: 28px 32px;
    margin-bottom: 30px;
  }
  .nu-checklist ol {
    list-style: none;
    counter-reset: step-counter;
    padding: 0;
  }
  .nu-checklist ol li {
    counter-increment: step-counter;
    padding: 14px 0 14px 56px;
    position: relative;
    border-bottom: 1px solid var(--nu-medium-gray);
    color: var(--nu-dark-text);
    font-size: 1rem;
    line-height: 1.6;
  }
  .nu-checklist ol li:last-child { border-bottom: none; }
  .nu-checklist ol li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 12px;
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    color: var(--nu-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 0.95rem;
    box-shadow: 0 2px 6px rgba(0,0,255,0.2);
  }
  .nu-checklist ol li strong {
    color: var(--nu-blue);
    font-weight: 700;
  }

  /* CONTEXT BOX */
  .nu-context-box {
    background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
    border-left: 5px solid var(--nu-blue);
    border-radius: 6px;
    padding: 22px 28px;
    margin-bottom: 30px;
  }
  .nu-context-box h4 {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1rem;
    color: var(--nu-blue);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }
  .nu-context-box p {
    color: var(--nu-dark-text);
    font-size: 0.97rem;
    line-height: 1.65;
  }

  /* FOOTER */
  .nu-footer {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: rgba(255,255,255,0.85);
    padding: 50px 40px;
    text-align: center;
    font-family: var(--font-primary);
  }
  .nu-footer-tagline {
    font-style: italic;
    font-weight: 300;
    font-size: 1.35rem;
    color: var(--nu-cyan);
    margin-bottom: 18px;
    font-family: 'Lato', serif;
  }
  .nu-footer-contact {
    font-size: 1rem;
    line-height: 1.9;
  }
  .nu-footer-contact a {
    color: var(--nu-cyan);
    text-decoration: none;
    font-weight: 700;
  }
  .nu-footer-contact a:hover { text-decoration: underline; }
  .nu-footer-name {
    font-weight: 700;
    color: var(--nu-white);
    margin-bottom: 4px;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .nu-header { padding: 40px 20px 60px; min-height: 200px; }
    .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
    .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
    .nu-tagline { font-size: 1rem; }
    .nu-page-title { font-size: 1.7rem; }
    .nu-content-area { padding: 40px 20px 60px; }
    .nu-email-draft { padding: 26px 20px; }
    .nu-email-meta { grid-template-columns: 1fr; gap: 2px; }
    .nu-email-meta .label { padding-top: 8px; }
    .nu-checklist { padding: 22px 20px; }
    .nu-checklist ol li { padding-left: 50px; }
    .nu-section-title { font-size: 1.3rem; }
  }

  @media print {
    .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .nu-email-draft { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
    .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  }
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
</header>

<!-- WHITE CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<!-- MAIN CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- PAGE TITLE -->
    <div class="nu-page-title-block">
      <div class="nu-page-title">MK Catch-Up Emails <span class="accent">&amp;</span> Mel Introduction</div>
      <div class="nu-page-subtitle">
        Action item from reMarkable: send catch-up correspondence to MK Smith and introduce MK to Mel via email.
        Two ready-to-send drafts and a closing checklist below.
      </div>
      <div class="nu-action-meta">Action Item • Logged 2026-04-21</div>
    </div>

    <!-- CONTEXT -->
    <div class="nu-context-box">
      <h4>Why this matters</h4>
      <p>
        MK Smith is the Norris Utilities® marketing contractor and has been quiet through the recent shipping
        and order-reconciliation push. A catch-up note keeps her warm and aligned with the Q2 marketing direction.
        The Mel introduction opens a new working line that MK can run with directly, freeing Aaron from the
        middle of every thread.
      </p>
    </div>

    <!-- CONTACTS -->
    <h2 class="nu-section-title">Recipients <span>at a Glance</span></h2>
    <div class="nu-contact-grid">
      <div class="nu-contact-card">
        <div class="role">Catch-Up Email · Recipient</div>
        <div class="name">MK Smith</div>
        <div class="detail">
          Marketing contractor — Norris Utilities®<br>
          Owns brand collateral, line card refreshes, social cadence
        </div>
      </div>
      <div class="nu-contact-card">
        <div class="role">Introduction Email · Recipients</div>
        <div class="name">MK Smith → Mel</div>
        <div class="detail">
          Aaron introduces MK to Mel directly so the two can coordinate
          without Aaron in the middle of every thread.
        </div>
      </div>
    </div>

    <!-- EMAIL 1: MK CATCH-UP -->
    <h2 class="nu-section-title">Email 1 — <span>MK Catch-Up</span></h2>
    <div class="nu-email-draft">
      <div class="nu-email-label">Draft · Send Today</div>
      <div class="nu-email-meta">
        <div class="label">From</div>
        <div class="value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
        <div class="label">To</div>
        <div class="value">MK Smith</div>
        <div class="label">Subject</div>
        <div class="value">Catching up — where we are and what's next</div>
      </div>
      <div class="nu-email-body">
        <p>MK —</p>
        <p class="indent">
          It's been a busy stretch on this end and I owe you a real catch-up. Wanted to reach out
          directly rather than let any more time go by.
        </p>
        <p class="indent">
          Quick on where Norris Utilities® stands right now:
        </p>
        <ul>
          <li>March 20 shipments are out and the customer side is closing out cleanly.</li>
          <li>Skylift PO is moving — the SBA40i-LW and SBA47i-MH builds are tracking on Nick Gordon's timeline.</li>
          <li>FlexPro Armor demand is steady; the 2-Man and 1.5-Man covers continue to carry the pipeline.</li>
          <li>Bay Shore Systems Southeast territory work is heating up alongside Andy Barron.</li>
        </ul>
        <p class="indent">
          On the marketing side, I'd like to get back into a regular cadence with you. A few things
          worth talking through when you have time:
        </p>
        <ul>
          <li>Refreshing the line card with the latest manufacturer additions.</li>
          <li>Tightening the FlexPro Armor product story for the dealer channel.</li>
          <li>A short Q2 roadmap so we're both pulling in the same direction.</li>
        </ul>
        <p class="indent">
          I'm also going to introduce you to Mel in a separate note — y'all should be talking directly
          rather than through me. More on that in the next email.
        </p>
        <p class="indent">
          Let me know what works on your side for a 20-minute call this week. Happy to do early
          morning, that's when I'm sharpest.
        </p>
        <p>Sincerely,</p>
        <div class="signature">
          <div class="name">Aaron C. Norris</div>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>
    </div>

    <!-- EMAIL 2: INTRO MK TO MEL -->
    <h2 class="nu-section-title">Email 2 — <span>Introducing MK to Mel</span></h2>
    <div class="nu-email-draft">
      <div class="nu-email-label">Draft · Send Today</div>
      <div class="nu-email-meta">
        <div class="label">From</div>
        <div class="value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
        <div class="label">To</div>
        <div class="value">MK Smith; Mel</div>
        <div class="label">Subject</div>
        <div class="value">Introduction — MK Smith &lt;&gt; Mel</div>
      </div>
      <div class="nu-email-body">
        <p>MK, Mel —</p>
        <p class="indent">
          I want to put the two of you in direct contact. Both of you are doing work that overlaps
          enough that running through me adds friction neither of you needs.
        </p>
        <p class="indent">
          A quick context for each of you:
        </p>
        <ul>
          <li>
            <strong>MK Smith</strong> — runs marketing for Norris Utilities®. She owns the brand,
            the line card, and the way we show up to dealers and end customers. If it touches how
            we look or how we tell the story, it lives with MK.
          </li>
          <li>
            <strong>Mel</strong> — partner I'm bringing closer into the workflow. The reason I'm
            making this introduction is so the two of you can coordinate directly on the work
            ahead without having to route through me on every detail.
          </li>
        </ul>
        <p class="indent">
          From here, please feel free to set up time directly. I'll stay in the loop on big calls,
          but the day-to-day is yours to drive together.
        </p>
        <p class="indent">
          Looking forward to seeing what y'all come up with.
        </p>
        <p>Sincerely,</p>
        <div class="signature">
          <div class="name">Aaron C. Norris</div>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>
    </div>

    <!-- CHECKLIST -->
    <h2 class="nu-section-title">Send <span>Checklist</span></h2>
    <div class="nu-checklist">
      <ol>
        <li>
          <strong>Confirm Mel's email address</strong> before adding to the To: line on Email 2.
          Do not send the introduction until the address is verified.
        </li>
        <li>
          <strong>Send Email 1 (MK catch-up) first.</strong> Give it 5–10 minutes to land before
          firing the introduction so MK has the heads-up referenced in the catch-up note.
        </li>
        <li>
          <strong>Send Email 2 (intro)</strong> with both MK and Mel on the To: line — direct
          introduction, not BCC.
        </li>
        <li>
          <strong>Log both sends</strong> in the master tracker so the reMarkable action item
          can be marked closed.
        </li>
        <li>
          <strong>Set a 7-day follow-up reminder.</strong> If MK and Mel haven't connected by then,
          nudge once and step back.
        </li>
      </ol>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment®</div>
  <div class="nu-footer-contact">
    <div class="nu-footer-name">Aaron C. Norris, Founder &amp; CEO</div>
    Norris Utilities®, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> |
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
</footer>

</body>
</html>