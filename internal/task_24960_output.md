<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow-Up Draft Approval — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warn: #C9A84C;
      --nu-danger: #B00020;
      --nu-success: #1B7A3E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 56px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 240px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 60px),
        repeating-linear-gradient(0deg,  rgba(255,255,255,0.02)  0 1px, transparent 1px 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute; top: -40%; right: -20%;
      width: 70%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
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
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 40px 24px 64px;
    }
    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    .approval-banner {
      background: linear-gradient(135deg, var(--nu-warn) 0%, #d4b95c 100%);
      color: var(--nu-dark-text);
      padding: 18px 24px;
      border-radius: 8px;
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 4px 14px rgba(201,168,76,0.25);
    }
    .approval-banner .dot {
      width: 12px; height: 12px;
      background: var(--nu-dark-text);
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: 0 0 0 4px rgba(0,0,0,0.08);
    }
    .approval-banner strong { font-weight: 900; letter-spacing: 0.02em; }

    .meta-grid {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 8px 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 24px;
      margin-bottom: 24px;
      font-size: 0.95rem;
    }
    .meta-grid dt {
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      align-self: center;
    }
    .meta-grid dd { color: var(--nu-dark-text); }

    .section-title {
      font-weight: 900;
      font-size: 1.35rem;
      margin: 28px 0 12px;
      color: var(--nu-dark-text);
    }
    .section-title span:first-child { color: var(--nu-blue); }

    .draft-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 0;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      overflow: hidden;
    }
    .draft-card .draft-head {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .draft-card .draft-head .label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #666;
    }
    .draft-card .draft-head .pill {
      background: var(--nu-warn);
      color: var(--nu-dark-text);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .draft-body {
      padding: 26px;
      font-size: 1rem;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
      font-family: var(--font-primary);
      min-height: 120px;
    }
    .draft-body .greeting {
      font-weight: 700;
      font-size: 1.05rem;
      margin-bottom: 18px;
    }
    .draft-empty-note {
      margin-top: 16px;
      padding: 14px 16px;
      background: #fff8e6;
      border-left: 3px solid var(--nu-warn);
      color: #6a5217;
      font-size: 0.9rem;
      border-radius: 0 6px 6px 0;
    }

    .signature {
      margin-top: 28px;
      padding-top: 18px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .signature .sig-name { font-weight: 700; color: var(--nu-dark-text); }

    .actions {
      margin-top: 28px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      font-weight: 700;
      font-size: 0.95rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
      letter-spacing: 0.02em;
    }
    .btn-approve { background: var(--nu-success); color: #fff; }
    .btn-approve:hover { background: #146030; transform: translateY(-1px); }
    .btn-edit { background: var(--nu-blue); color: #fff; }
    .btn-edit:hover { background: #0000cc; transform: translateY(-1px); }
    .btn-decline {
      background: transparent;
      color: var(--nu-danger);
      border: 2px solid var(--nu-danger);
    }
    .btn-decline:hover { background: var(--nu-danger); color: #fff; }

    .checklist {
      margin-top: 32px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
    }
    .checklist h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .checklist ul { list-style: none; }
    .checklist li {
      padding: 6px 0 6px 26px;
      position: relative;
      color: var(--nu-body-text);
      font-size: 0.95rem;
    }
    .checklist li::before {
      content: '•';
      position: absolute;
      left: 8px;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.2rem;
      top: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 24px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 640px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .meta-grid { grid-template-columns: 1fr; gap: 4px; }
      .meta-grid dt { margin-top: 8px; }
      .actions { justify-content: stretch; }
      .actions .btn { flex: 1; justify-content: center; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="container">

      <div class="approval-banner">
        <span class="dot"></span>
        <div>
          <strong>Approval Needed</strong> — A follow-up email draft is awaiting your review before it can be sent.
        </div>
      </div>

      <h1 class="section-title"><span>Follow-Up</span> <span>Draft Review</span></h1>

      <dl class="meta-grid">
        <dt>Type</dt><dd>Follow-Up Email</dd>
        <dt>Recipient</dt><dd>Aaron C. Norris</dd>
        <dt>Routed To</dt><dd>acnorris@norrisutilities.com</dd>
        <dt>Queued</dt><dd>2026-04-16</dd>
        <dt>Status</dt><dd><strong style="color: var(--nu-warn);">Pending Approval</strong></dd>
        <dt>Source</dt><dd>Follow-Up Drafts Queue</dd>
      </dl>

      <div class="draft-card">
        <div class="draft-head">
          <span class="label">Draft Body — As Currently Queued</span>
          <span class="pill">Incomplete</span>
        </div>
        <div class="draft-body"><div class="greeting">Aaron —</div>(No body content was supplied with this draft. The greeting line is the only content currently in the queue. Please add the message body before approving for send, or decline to remove from the queue.)<div class="draft-empty-note">
            This draft was generated with only the salutation. To honor the "no placeholders, no fabrication" rule, no body text has been auto-generated. You can either edit the draft to add the message, or decline so the slot is cleared from the follow-up queue.
          </div></div>
      </div>

      <div class="signature">
        <div class="sig-name">Sincerely,</div>
        <div class="sig-name" style="margin-top: 6px;">Aaron C. Norris</div>
        <div>Founder &amp; CEO, Norris Utilities®, LLC</div>
        <div>Cell: 205-500-1343</div>
        <div>acnorris@norrisutilities.com</div>
      </div>

      <div class="actions">
        <a href="mailto:acnorris@norrisutilities.com?subject=DECLINE%20-%20Follow-Up%20Draft%20(Aaron%20C.%20Norris)&body=Decline%20draft%20and%20remove%20from%20queue." class="btn btn-decline">Decline / Remove</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=EDIT%20-%20Follow-Up%20Draft%20(Aaron%20C.%20Norris)&body=Aaron%20%E2%80%94%0A%0A%5BReplace%20with%20edited%20draft%5D%0A%0ASincerely%2C%0AAaron%20C.%20Norris" class="btn btn-edit">Edit Draft</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=APPROVE%20-%20Follow-Up%20Draft%20(Aaron%20C.%20Norris)&body=Approve%20and%20send%20follow-up%20draft%20as%20queued." class="btn btn-approve">Approve &amp; Send</a>
      </div>

      <div class="checklist">
        <h3>Pre-Send Checklist</h3>
        <ul>
          <li>Confirm recipient name and email are correct.</li>
          <li>Verify the message body has actual content — no empty drafts go out.</li>
          <li>Check trademarks: Norris Utilities®, A Legacy of Commitment®, Phoenix Icon® always include ®. FlexPro Armor never carries ®.</li>
          <li>Greeting uses em dash format: "Name —" (no comma).</li>
          <li>Close with "Sincerely," then "Aaron C. Norris" on the next line.</li>
          <li>No filler words ("just", "touch base", "leverage", "synergy") and no emojis.</li>
        </ul>
      </div>

    </div>
  </main>

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