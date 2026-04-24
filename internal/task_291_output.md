<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Written Confirmation | Norris Utilities®</title>
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
      --nu-alert-red: #D0342C;
      --nu-alert-amber: #E8A317;
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

    /* HEADER — Line Card Gradient */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 120px; left: 50%;
      transform: translateX(-50%);
      width: 650px; height: 650px;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1080px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, var(--nu-alert-amber) 0%, #D99113 100%);
      color: var(--nu-white);
      padding: 16px 24px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 32px;
      box-shadow: 0 4px 14px rgba(232,163,23,0.25);
    }
    .priority-banner-icon {
      width: 28px; height: 28px;
      flex-shrink: 0;
      fill: var(--nu-white);
    }
    .priority-banner-text {
      font-weight: 700;
      font-size: 0.98rem;
      letter-spacing: 0.02em;
    }
    .priority-banner-text span {
      opacity: 0.9;
      font-weight: 400;
      margin-left: 8px;
    }

    /* TITLE BLOCK */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.9rem;
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 760px;
      line-height: 1.65;
    }

    /* CARD GRID */
    .nu-card-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
      margin-bottom: 32px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }

    .card-label {
      text-transform: uppercase;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      font-weight: 900;
      margin-bottom: 8px;
    }
    .card-h {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      border-bottom: 2px solid var(--nu-medium-gray);
      padding-bottom: 10px;
    }
    .card-h span.accent { color: #0033cc; }

    /* META STRIP */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 28px;
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 18px 20px;
    }
    .meta-cell-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .meta-cell-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .meta-cell-sub {
      font-size: 0.82rem;
      font-weight: 400;
      color: #666;
      margin-top: 2px;
    }

    /* ACTION LIST */
    .action-list {
      list-style: none;
      counter-reset: step;
    }
    .action-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 18px 16px 62px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      line-height: 1.55;
    }
    .action-list li::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 34px; height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .action-list li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .action-list li span {
      color: #555;
      font-size: 0.92rem;
    }

    /* BADGE CHEVRONS */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 22px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 24px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      padding-left: 28px;
    }
    .nu-badge.cyan {
      background: linear-gradient(135deg, #0033cc 0%, var(--nu-cyan) 100%);
    }

    /* CALL SCRIPT */
    .script-box {
      background: linear-gradient(180deg, #f8fafe 0%, #eef3fb 100%);
      border: 1px solid #d4def0;
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 8px;
      margin-bottom: 14px;
    }
    .script-box p {
      margin-bottom: 12px;
      font-size: 0.95rem;
      color: #222;
      line-height: 1.65;
    }
    .script-box p:last-child { margin-bottom: 0; }
    .script-box em {
      color: #0033cc;
      font-weight: 700;
      font-style: normal;
    }
    .script-label {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      color: #0033cc;
      margin-bottom: 8px;
    }

    /* CONFIRMATION CHECKLIST */
    .confirm-list {
      list-style: none;
    }
    .confirm-list li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .confirm-list li:last-child { border-bottom: none; }
    .confirm-list li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .confirm-list li::after {
      content: '';
      position: absolute;
      left: 5px; top: 17px;
      width: 12px; height: 7px;
      border-left: 2.5px solid var(--nu-cyan);
      border-bottom: 2.5px solid var(--nu-cyan);
      transform: rotate(-45deg);
      opacity: 0;
    }
    .confirm-list li strong { color: #0033cc; }

    /* BACKGROUND / WHY */
    .context-block {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .context-block p {
      margin-bottom: 12px;
      font-size: 0.97rem;
      line-height: 1.7;
      color: #333;
    }
    .context-block p:last-child { margin-bottom: 0; }

    /* BUTTONS */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
      padding-top: 26px;
      border-top: 2px solid var(--nu-medium-gray);
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 28px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: var(--nu-white);
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
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

    /* RESPONSIVE */
    @media (max-width: 860px) {
      .nu-card-grid { grid-template-columns: 1fr; }
      .meta-strip { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 36px 20px 56px; }
      .nu-section-title { font-size: 1.5rem; }
      .meta-strip { grid-template-columns: 1fr; }
      .nu-card, .context-block { padding: 22px; }
      .action-list li { padding-left: 56px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 18px; }
      .cta-row { flex-direction: column; }
      .nu-btn-primary, .nu-btn-secondary { justify-content: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .context-block { box-shadow: none; border: 1px solid #ccc; }
      .cta-row { display: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner" role="alert">
        <svg class="priority-banner-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2L1 21h22L12 2zm0 4.5L19.5 19h-15L12 6.5zM11 10v5h2v-5h-2zm0 6v2h2v-2h-2z"/>
        </svg>
        <div class="priority-banner-text">
          ACTION REQUIRED — OPEN ITEM
          <span>Source: reMarkable action list · Owner: Aaron C. Norris</span>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-section-title">
        <span class="first">Call</span> <span class="rest">H2O Waterproofing</span>
      </h1>
      <p class="nu-section-subtitle">
        Get written confirmation of the work that was performed. A phone call opens the conversation; a written document (email with attached invoice, scope-of-work letter, or signed job sheet) is what we need on file for records, warranty tracking, and downstream reference on the FlexPro Armor waterproofing program.
      </p>

      <!-- BADGE ROW -->
      <div class="badge-row">
        <span class="nu-badge">OPEN ACTION ITEM</span>
        <span class="nu-badge cyan">WRITTEN CONFIRMATION REQUIRED</span>
        <span class="nu-badge">VENDOR · H2O WATERPROOFING</span>
      </div>

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-cell-label">Vendor</div>
          <div class="meta-cell-value">H2O Waterproofing</div>
          <div class="meta-cell-sub">Service provider</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Channel</div>
          <div class="meta-cell-value">Phone → Email</div>
          <div class="meta-cell-sub">Call first, then get it in writing</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Outcome</div>
          <div class="meta-cell-value">Written Doc on File</div>
          <div class="meta-cell-sub">Invoice or scope letter</div>
        </div>
        <div class="meta-cell">
          <div class="meta-cell-label">Priority</div>
          <div class="meta-cell-value">Open — Follow Up</div>
          <div class="meta-cell-sub">Close this week</div>
        </div>
      </div>

      <!-- CARD GRID -->
      <div class="nu-card-grid">

        <!-- LEFT: ACTION STEPS -->
        <div class="nu-card">
          <div class="card-label">Execution Plan</div>
          <div class="card-h"><span class="accent">Steps</span> to Close This Item</div>

          <ol class="action-list">
            <li>
              <strong>Place the call to H2O Waterproofing</strong>
              <span>Ask for the representative who handled the recent job. Identify yourself as Aaron Norris with Norris Utilities®.</span>
            </li>
            <li>
              <strong>Confirm the scope verbally</strong>
              <span>Walk through what was done, where, and when. Get the tech's name, the date(s) of service, and any materials or product they used.</span>
            </li>
            <li>
              <strong>Request written documentation</strong>
              <span>Ask them to email a completion letter, invoice, or signed job sheet describing the work performed. Provide acnorris@norrisutilities.com as the delivery address.</span>
            </li>
            <li>
              <strong>Set a clear deadline</strong>
              <span>Ask for it by end of business the next day. Offer to send a follow-up email summarizing the call so they have a written request in hand.</span>
            </li>
            <li>
              <strong>File and log when received</strong>
              <span>Save the document to Norris Utilities® vendor records. Log the closure under the reMarkable action list and update Legacy with the completion date.</span>
            </li>
          </ol>
        </div>

        <!-- RIGHT: CONTACT + OWNERSHIP -->
        <div class="nu-card">
          <div class="card-label">Owner & Contact</div>
          <div class="card-h"><span class="accent">Who</span> Handles This</div>

          <p style="font-size: 0.95rem; line-height: 1.7; color: #333; margin-bottom: 14px;">
            <strong style="color: var(--nu-dark-text);">Aaron C. Norris</strong><br>
            Founder &amp; CEO, Norris Utilities®, LLC<br>
            <a href="tel:2055001343" style="color: #0033cc; text-decoration: none; font-weight: 700;">205-500-1343</a><br>
            <a href="mailto:acnorris@norrisutilities.com" style="color: #0033cc; text-decoration: none; font-weight: 700;">acnorris@norrisutilities.com</a>
          </p>

          <div style="background: var(--nu-light-gray); padding: 14px 16px; border-radius: 6px; border-left: 3px solid var(--nu-cyan); margin-top: 12px;">
            <div style="font-size: 0.72rem; font-weight: 900; letter-spacing: 0.14em; color: #0033cc; text-transform: uppercase; margin-bottom: 6px;">Delivery Address</div>
            <div style="font-size: 0.92rem; color: var(--nu-dark-text); font-weight: 700;">
              acnorris@norrisutilities.com
            </div>
            <div style="font-size: 0.82rem; color: #666; margin-top: 4px;">
              Written confirmation should arrive here.
            </div>
          </div>

          <div style="background: var(--nu-light-gray); padding: 14px 16px; border-radius: 6px; border-left: 3px solid var(--nu-blue); margin-top: 12px;">
            <div style="font-size: 0.72rem; font-weight: 900; letter-spacing: 0.14em; color: #0033cc; text-transform: uppercase; margin-bottom: 6px;">Backup Owner</div>
            <div style="font-size: 0.92rem; color: var(--nu-dark-text); font-weight: 700;">
              Caroline Butler (CB)
            </div>
            <div style="font-size: 0.82rem; color: #666; margin-top: 4px;">
              Admin — can log receipt and file the document upon review by Aaron.
            </div>
          </div>
        </div>

      </div>

      <!-- WHY / CONTEXT -->
      <div class="context-block">
        <div class="card-label" style="color: var(--nu-cyan);">Why This Matters</div>
        <div class="card-h" style="margin-bottom: 18px;"><span class="accent">The</span> Case for Written Confirmation</div>
        <p>
          A verbal conversation captures the relationship. A written document captures the record. For Norris Utilities®, every vendor transaction needs a paper trail — especially anything that touches warranty coverage, quality control on FlexPro Armor materials, or transfer/fee information being gathered from H2O Waterproofing for the ongoing review.
        </p>
        <p>
          Without written confirmation, there is no enforceable reference for what was agreed, what was delivered, or what was charged. If a follow-up question arises six months from now — from a customer, an auditor, or our insurance carrier — Aaron needs to open one email and see the full scope in H2O Waterproofing's own words.
        </p>
        <p>
          This request is routine, professional, and expected of any reputable service provider. Getting it in writing is the default, not the exception.
        </p>
      </div>

      <!-- CALL SCRIPT -->
      <div class="nu-card" style="margin-bottom: 28px;">
        <div class="card-label">Phone Script</div>
        <div class="card-h"><span class="accent">What</span> to Say on the Call</div>

        <div class="script-box">
          <div class="script-label">Opening</div>
          <p>"Hi, this is <em>Aaron Norris with Norris Utilities®</em>. I'm following up on the work your team recently completed for us. I wanted to confirm the scope and ask that you send over a written summary for our records."</p>
        </div>

        <div class="script-box">
          <div class="script-label">The Ask</div>
          <p>"Could you email me a completion letter or invoice that lists <em>the date of service, the technician's name, the scope of work performed, and any materials used</em>? Please send it to <em>acnorris@norrisutilities.com</em>."</p>
        </div>

        <div class="script-box">
          <div class="script-label">Set the Deadline</div>
          <p>"I'd like to have that on file by <em>end of business tomorrow</em>. I'll send you a short follow-up email right after this call summarizing what we discussed, so you have the request in writing on your end as well."</p>
        </div>

        <div class="script-box">
          <div class="script-label">Close</div>
          <p>"Appreciate it. If anything else comes up on your end, call or text me directly at <em>205-500-1343</em>. Thanks."</p>
        </div>
      </div>

      <!-- CONFIRMATION CHECKLIST -->
      <div class="nu-card" style="margin-bottom: 28px;">
        <div class="card-label">What the Document Must Contain</div>
        <div class="card-h"><span class="accent">Confirmation</span> Requirements</div>

        <ul class="confirm-list">
          <li><strong>Vendor name and contact:</strong> H2O Waterproofing letterhead, address, phone, and tech's name.</li>
          <li><strong>Date(s) of service:</strong> When the work was performed on site.</li>
          <li><strong>Scope of work:</strong> Clear description of what was done and where.</li>
          <li><strong>Materials and products used:</strong> Product names, quantities, and any warranty information.</li>
          <li><strong>Pricing / invoice:</strong> Total charged, payment terms, and payment status.</li>
          <li><strong>Transfer process and fees:</strong> Written confirmation of the transfer process and associated fees being reviewed.</li>
          <li><strong>Signature or authorized sender:</strong> Email from a company address or signed PDF.</li>
        </ul>
      </div>

      <!-- CTA ROW -->
      <div class="cta-row">
        <a href="tel:2055001343" class="nu-btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z"/></svg>
          Call Aaron — 205-500-1343
        </a>
        <a href="mailto:acnorris@norrisutilities.com?subject=H2O%20Waterproofing%20%E2%80%94%20Written%20Confirmation%20Follow-Up&amp;body=Following%20our%20call%20today%2C%20please%20send%20a%20written%20confirmation%20of%20the%20work%20performed%20(scope%2C%20date%2C%20technician%2C%20materials%2C%20invoice)%20to%20acnorris%40norrisutilities.com.%20Also%20please%20include%20the%20transfer%20process%20and%20fees%20information%20we%20discussed.%20%0A%0AThanks%2C%0AAaron%20C.%20Norris%0ANorris%20Utilities%2C%20LLC%0A205-500-1343" class="nu-btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Draft Follow-Up Email
        </a>
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