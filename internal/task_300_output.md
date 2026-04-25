<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Pre-Closing Action Item — Norris Utilities®</title>
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
      --nu-alert-red: #C62828;
      --nu-alert-amber: #F57C00;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 320px;
    }

    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

    .nu-header-inner {
      position: relative;
      z-index: 2;
      max-width: 1100px;
      margin: 0 auto;
    }

    .nu-phoenix-watermark {
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

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.35);
    }

    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }

    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.28);
      border: 1px solid rgba(6, 208, 255, 0.55);
      color: var(--nu-cyan);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* MAIN */
    main.nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 20px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 22px;
      margin-bottom: 14px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      letter-spacing: -0.01em;
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-subtitle {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-top: 6px;
      font-weight: 400;
    }

    /* META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin: 22px 0 36px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-meta-item {
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .nu-meta-item strong {
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 0.75rem;
      display: block;
      margin-bottom: 2px;
    }
    .nu-meta-item .val {
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-meta-divider {
      width: 1px;
      background: var(--nu-medium-gray);
    }

    /* PRIORITY BANNER */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 26px;
      margin-bottom: 36px;
      border-radius: 6px;
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-priority-banner .icon {
      font-size: 1.6rem;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .nu-priority-banner .label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      display: block;
      margin-bottom: 2px;
    }
    .nu-priority-banner .text {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.4;
    }

    /* SECTION HEADERS */
    .nu-h2 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 38px 0 16px;
      color: var(--nu-dark-text);
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-h2 .first {
      color: var(--nu-blue);
    }

    /* CALL CARD */
    .nu-call-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 30px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .nu-call-card h3 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }
    .nu-call-card .vendor-name {
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-call-card .vendor-role {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 14px;
    }
    .nu-call-card .contact-block {
      background: var(--nu-light-gray);
      padding: 14px 16px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-call-card .contact-block .ln {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-call-card .contact-block .ln:last-child { margin-bottom: 0; }
    .nu-call-card .contact-block strong {
      color: var(--nu-blue);
      font-weight: 700;
    }
    .nu-call-card .contact-block a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-call-card .contact-block a:hover { text-decoration: underline; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      counter-reset: chk;
      margin: 18px 0 28px;
    }
    .nu-checklist li {
      counter-increment: chk;
      position: relative;
      padding: 18px 22px 18px 64px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-checklist li::before {
      content: counter(chk);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-checklist li strong {
      display: block;
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .nu-checklist li .detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .nu-checklist li .verify {
      display: inline-block;
      margin-top: 8px;
      padding: 3px 10px;
      background: rgba(6, 208, 255, 0.12);
      color: var(--nu-blue);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border-radius: 3px;
    }

    /* QUESTIONS GRID */
    .nu-questions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
      margin: 18px 0 28px;
    }
    .nu-question {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      position: relative;
      padding-left: 48px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-question::before {
      content: 'Q';
      position: absolute;
      left: 14px;
      top: 16px;
      width: 24px;
      height: 24px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .nu-question .q-text {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .nu-question .q-why {
      font-size: 0.84rem;
      color: var(--nu-body-text);
      font-style: italic;
    }

    /* WRITING REQUIREMENTS */
    .nu-writing-box {
      background: linear-gradient(135deg, #fff8e1 0%, #fff3d6 100%);
      border: 1px solid #f0d99c;
      border-left: 6px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 18px 0 28px;
    }
    .nu-writing-box h4 {
      font-weight: 900;
      color: #6b4f00;
      font-size: 1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .nu-writing-box ul {
      list-style: none;
      padding: 0;
    }
    .nu-writing-box ul li {
      padding: 6px 0 6px 24px;
      position: relative;
      color: #4a3800;
      font-size: 0.95rem;
    }
    .nu-writing-box ul li::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 6px;
      color: #8b6900;
      font-weight: 900;
    }

    /* CALL SCRIPT */
    .nu-script {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      margin: 18px 0 28px;
      position: relative;
    }
    .nu-script::before {
      content: '"';
      position: absolute;
      top: -12px;
      left: 22px;
      font-size: 5rem;
      font-family: 'Playfair Display', serif;
      color: var(--nu-cyan);
      line-height: 1;
    }
    .nu-script .script-label {
      font-size: 0.78rem;
      color: var(--nu-cyan);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 12px;
      padding-left: 30px;
    }
    .nu-script p {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.92);
      padding-left: 30px;
      margin-bottom: 12px;
    }
    .nu-script p:last-child { margin-bottom: 0; }

    /* DEADLINE BAR */
    .nu-deadline-bar {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 18px 24px;
      background: linear-gradient(90deg, rgba(198,40,40,0.08) 0%, rgba(198,40,40,0.02) 100%);
      border: 1px solid rgba(198,40,40,0.25);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 6px;
      margin: 18px 0 28px;
    }
    .nu-deadline-bar .badge {
      flex-shrink: 0;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 8px 14px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 3px;
    }
    .nu-deadline-bar .text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .nu-deadline-bar .text strong { color: var(--nu-alert-red); }

    /* OUTCOME GRID */
    .nu-outcome-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin: 18px 0 28px;
    }
    .nu-outcome {
      padding: 18px 20px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
    }
    .nu-outcome.green { border-left: 6px solid var(--nu-success-green); }
    .nu-outcome.amber { border-left: 6px solid var(--nu-alert-amber); }
    .nu-outcome.red { border-left: 6px solid var(--nu-alert-red); }
    .nu-outcome h5 {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-outcome.green h5 { color: var(--nu-success-green); }
    .nu-outcome.amber h5 { color: var(--nu-alert-amber); }
    .nu-outcome.red h5 { color: var(--nu-alert-red); }
    .nu-outcome p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* SIGN OFF */
    .nu-signoff {
      margin: 36px 0 12px;
      padding: 22px 26px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border: 1px dashed var(--nu-medium-gray);
    }
    .nu-signoff h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .nu-signoff-row {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
    .nu-signoff-line {
      flex: 1;
      min-width: 220px;
    }
    .nu-signoff-line .lbl {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
      font-weight: 700;
    }
    .nu-signoff-line .ln {
      border-bottom: 1.5px solid var(--nu-dark-text);
      height: 28px;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 36px 22px 12px; }
      .nu-section-title { font-size: 1.5rem; }
      .nu-call-card { grid-template-columns: 1fr; padding: 22px; }
      .nu-meta-bar { flex-direction: column; gap: 14px; }
      .nu-meta-divider { display: none; }
      .nu-script { padding: 22px 22px 22px 22px; }
      .nu-script .script-label, .nu-script p { padding-left: 0; }
      .nu-script::before { display: none; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-call-card, .nu-checklist li, .nu-question { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Pre-Closing Action Item</div>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div class="nu-title-block">
        <div class="nu-section-title">Call <span>H2O Waterproofing — Pre-Closing Verification</span></div>
        <div class="nu-subtitle">Confirm scope, warranty, and transferability in writing before the property closes.</div>
      </div>

      <!-- META BAR -->
      <div class="nu-meta-bar">
        <div class="nu-meta-item">
          <strong>Owner</strong>
          <div class="val">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-divider"></div>
        <div class="nu-meta-item">
          <strong>Property</strong>
          <div class="val">4505 Buttewoods Lane</div>
        </div>
        <div class="nu-meta-divider"></div>
        <div class="nu-meta-item">
          <strong>Source</strong>
          <div class="val">reMarkable Action Item</div>
        </div>
        <div class="nu-meta-divider"></div>
        <div class="nu-meta-item">
          <strong>Status</strong>
          <div class="val">Open — Action Required</div>
        </div>
        <div class="nu-meta-divider"></div>
        <div class="nu-meta-item">
          <strong>Generated</strong>
          <div class="val">2026-04-25</div>
        </div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="icon">!</div>
        <div>
          <span class="label">Why this matters</span>
          <div class="text">Verbal assurances disappear at the closing table. Anything H2O Waterproofing has promised about scope, materials, warranty length, and transferability must be confirmed in writing while we are still pre-closing — once title transfers, leverage drops to zero.</div>
        </div>
      </div>

      <!-- VENDOR CARD -->
      <h2 class="nu-h2"><span class="first">Vendor</span> Contact</h2>
      <div class="nu-call-card">
        <div>
          <h3>Call This Vendor</h3>
          <div class="vendor-name">H2O Waterproofing</div>
          <div class="vendor-role">Waterproofing contractor on file for 4505 Buttewoods Lane</div>
          <div class="contact-block">
            <div class="ln"><strong>When:</strong> Before closing — sooner is better</div>
            <div class="ln"><strong>Who:</strong> Owner / project manager (whoever signed the original work order)</div>
            <div class="ln"><strong>Caller:</strong> Aaron C. Norris — <a href="tel:2055001343">205-500-1343</a></div>
            <div class="ln"><strong>Mode:</strong> Phone first — follow with email confirming what was discussed</div>
          </div>
        </div>
        <div>
          <h3>Goal of the Call</h3>
          <div class="vendor-role" style="margin-bottom:12px;">Walk away with a written record — emailed PDF or signed letter — covering everything below. Nothing verbal, nothing implied.</div>
          <div class="contact-block">
            <div class="ln"><strong>Format accepted:</strong> Signed letter, scope-of-work doc, or email reply quoting the points back</div>
            <div class="ln"><strong>Deliver to:</strong> <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a></div>
            <div class="ln"><strong>Save copy to:</strong> Closing file + property folder</div>
          </div>
        </div>
      </div>

      <!-- DEADLINE -->
      <div class="nu-deadline-bar">
        <div class="badge">Deadline</div>
        <div class="text">Get the written confirmation in hand <strong>before closing day</strong>. Aim for at least 5 business days of cushion so corrections or clarifications can be made without delaying the closing.</div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-h2"><span class="first">Confirm</span> in Writing — Required Items</h2>
      <ol class="nu-checklist">
        <li>
          <strong>Scope of work performed</strong>
          <div class="detail">Exactly what was waterproofed — basement walls, foundation, crawl space, exterior membrane, interior drainage, sump system. Listed by area, not generic language.</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Materials and methods used</strong>
          <div class="detail">Specific products applied (membrane brand, sealant type, drain tile spec) so any future contractor can match or extend the system.</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Warranty term and start date</strong>
          <div class="detail">How many years, what date the clock started, and what the warranty actually covers (water intrusion only, materials, labor, both).</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Transferability to new owner</strong>
          <div class="detail">Critical. Confirm the warranty transfers to Aaron C. Norris as new owner — and whether a transfer fee, paperwork, or notification window applies.</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Exclusions and conditions</strong>
          <div class="detail">What voids the warranty — landscaping changes, additions, gutter neglect, hydrostatic pressure events, anything the homeowner is responsible for maintaining.</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Service call procedure</strong>
          <div class="detail">How to file a claim, expected response time, who to call, and any annual inspection requirement to keep the warranty active.</div>
          <span class="verify">Must be in writing</span>
        </li>
        <li>
          <strong>Outstanding work or open items</strong>
          <div class="detail">Confirm there is no unfinished work, no unpaid balance, and no liens tied to the H2O Waterproofing job.</div>
          <span class="verify">Must be in writing</span>
        </li>
      </ol>

      <!-- WRITING REQUIREMENTS -->
      <div class="nu-writing-box">
        <h4>What "In Writing" means here</h4>
        <ul>
          <li>Signed letter on H2O Waterproofing letterhead, OR</li>
          <li>Email from a verifiable company address summarizing each of the seven points above, OR</li>
          <li>Original work order/warranty document plus an email confirming transfer to Aaron C. Norris</li>
          <li>Sticky notes, text messages, and "I'll vouch for it" do not count</li>
        </ul>
      </div>

      <!-- QUESTIONS -->
      <h2 class="nu-h2"><span class="first">Specific</span> Questions to Ask</h2>
      <div class="nu-questions">
        <div class="nu-question">
          <div class="q-text">When was the work completed?</div>
          <div class="q-why">Anchors the warranty start date.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Is the warranty fully paid?</div>
          <div class="q-why">Some warranties require a paid-in-full status to remain in force.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Does the warranty transfer automatically?</div>
          <div class="q-why">Or does it require notification, a fee, or new paperwork?</div>
        </div>
        <div class="nu-question">
          <div class="q-text">What is the transfer deadline?</div>
          <div class="q-why">Some companies require notification within 30 days of closing.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Are there any open service tickets?</div>
          <div class="q-why">Anything pending that the seller never had completed.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Annual inspection required?</div>
          <div class="q-why">Missing one can void coverage on some warranties.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Who do I call for a service issue?</div>
          <div class="q-why">Direct line, name, response window.</div>
        </div>
        <div class="nu-question">
          <div class="q-text">Can you email me everything you have on the property?</div>
          <div class="q-why">Original contract, invoices, warranty doc, photos of work.</div>
        </div>
      </div>

      <!-- SCRIPT -->
      <h2 class="nu-h2"><span class="first">Phone</span> Script — Opening Lines</h2>
      <div class="nu-script">
        <div class="script-label">Use as a starting point</div>
        <p>"Hi, this is Aaron Norris. I am closing on a property at 4505 Buttewoods Lane, and your company performed waterproofing work there. Before we close, I want to confirm a few things in writing so the warranty transfers cleanly to me as the new owner."</p>
        <p>"Could you pull the file on that address? I would like a written summary of the scope of work, the warranty term and start date, what is covered, what voids it, and the transfer process. An email back to me would be perfect."</p>
        <p>"I would also like to know if there are any open service items, an annual inspection requirement, or a transfer fee I need to budget for. Once I have that in hand, we can finalize closing."</p>
      </div>

      <!-- OUTCOMES -->
      <h2 class="nu-h2"><span class="first">Possible</span> Outcomes & Next Move</h2>
      <div class="nu-outcome-grid">
        <div class="nu-outcome green">
          <h5>Green Light</h5>
          <p>Written confirmation received, warranty transfers, no open items, clear service path. Save to closing file. Proceed to close.</p>
        </div>
        <div class="nu-outcome amber">
          <h5>Yellow Flag</h5>
          <p>Warranty transfers but requires a fee, notification within 30 days, or annual inspection. Document the requirements, set calendar reminders, budget any fee.</p>
        </div>
        <div class="nu-outcome red">
          <h5>Red Flag</h5>
          <p>Warranty does not transfer, scope is unclear, open service items, or unpaid balance. Raise with closing attorney before signing — may require seller credit or repair commitment.</p>
        </div>
      </div>

      <!-- SIGN OFF -->
      <div class="nu-signoff">
        <h4>Verification Log</h4>
        <div class="nu-signoff-row">
          <div class="nu-signoff-line">
            <div class="lbl">Call Date</div>
            <div class="ln"></div>
          </div>
          <div class="nu-signoff-line">
            <div class="lbl">Spoke With</div>
            <div class="ln"></div>
          </div>
          <div class="nu-signoff-line">
            <div class="lbl">Written Confirmation Received</div>
            <div class="ln"></div>
          </div>
          <div class="nu-signoff-line">
            <div class="lbl">Saved To</div>
            <div class="ln"></div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>