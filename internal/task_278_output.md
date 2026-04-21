<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up — Action Item — Norris Utilities®</title>
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
      --nu-priority-red: #C8102E;
      --nu-priority-amber: #E67E22;
      --nu-priority-green: #27AE60;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* ── HEADER ── */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 56px 40px 78px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
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
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ── WHITE CHEVRON ── */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ── CONTENT AREA ── */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,51,204,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* ── ACTION BANNER ── */
    .action-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 8px;
      margin-bottom: 28px;
      border-left: 6px solid var(--nu-cyan);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .action-banner-label {
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      display: block;
      margin-bottom: 3px;
    }
    .action-banner-title {
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--nu-white);
      letter-spacing: 0.01em;
    }
    .action-banner-badge {
      margin-left: auto;
      background: var(--nu-priority-amber);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* ── PAGE HEADING ── */
    .page-heading {
      margin-bottom: 8px;
    }
    .page-heading h1 {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      letter-spacing: -0.01em;
    }
    .page-heading h1 .first-word { color: #0033cc; }
    .page-heading h1 .rest { color: var(--nu-dark-text); }
    .page-heading .meta {
      margin-top: 10px;
      font-size: 0.95rem;
      color: #6a6a7c;
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      align-items: center;
    }
    .page-heading .meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-light-gray);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .meta-pill .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--nu-priority-amber);
    }

    /* ── SECTIONS ── */
    .section {
      margin-top: 40px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.45rem;
      margin-bottom: 16px;
      letter-spacing: -0.005em;
    }
    .section-title .first-word { color: #0033cc; }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ── CONTEXT CARD ── */
    .context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .context-card p { margin-bottom: 10px; }
    .context-card p:last-child { margin-bottom: 0; }

    /* ── CHECKLIST ── */
    .checklist {
      display: grid;
      gap: 14px;
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 22px;
      transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    }
    .check-item:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.07);
      border-color: #c8cadf;
    }
    .check-box {
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      margin-top: 2px;
      position: relative;
      background: var(--nu-white);
    }
    .check-body { flex: 1; }
    .check-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
      letter-spacing: 0.005em;
    }
    .check-desc {
      font-size: 0.94rem;
      color: #545466;
      line-height: 1.55;
    }
    .check-owner {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #0033cc;
      background: rgba(6,208,255,0.12);
      padding: 3px 10px;
      border-radius: 4px;
    }

    /* ── EMAIL BUCKETS ── */
    .bucket-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .bucket {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .bucket h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.005em;
    }
    .bucket h3 .accent { color: #0033cc; }
    .bucket ul { list-style: none; padding: 0; margin: 0; }
    .bucket li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
      font-size: 0.93rem;
      color: #444;
      line-height: 1.55;
    }
    .bucket li::before {
      content: '•';
      color: var(--nu-cyan);
      position: absolute;
      left: 0;
      font-weight: 900;
      font-size: 1.2rem;
      top: -2px;
    }
    .bucket.priority-intro { border-top-color: var(--nu-priority-amber); }
    .bucket.priority-intro .accent { color: var(--nu-priority-amber); }
    .bucket.priority-payment { border-top-color: var(--nu-priority-green); }
    .bucket.priority-payment .accent { color: var(--nu-priority-green); }
    .bucket.priority-review { border-top-color: var(--nu-blue); }
    .bucket.priority-general { border-top-color: #6a6a7c; }
    .bucket.priority-general .accent { color: #4a4a5e; }

    /* ── MEL INTRO PANEL ── */
    .mel-panel {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border: 1px solid #d6dcf5;
      border-radius: 10px;
      padding: 26px 28px;
      margin-top: 10px;
    }
    .mel-panel h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .mel-panel h3 .who { color: #0033cc; }
    .mel-panel .mel-desc {
      font-size: 0.95rem;
      color: #444;
      margin-bottom: 16px;
    }
    .mel-fields {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .mel-field {
      background: var(--nu-white);
      padding: 12px 14px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .mel-field .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6a6a7c;
      display: block;
      margin-bottom: 4px;
    }
    .mel-field .value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ── EMAIL DRAFT ── */
    .draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .draft-head {
      background: var(--nu-light-gray);
      padding: 16px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .draft-head .draft-row {
      display: flex;
      gap: 10px;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }
    .draft-head .draft-row:last-child { margin-bottom: 0; }
    .draft-head .field-label {
      font-weight: 900;
      color: #6a6a7c;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.75rem;
      width: 60px;
      flex-shrink: 0;
      padding-top: 2px;
    }
    .draft-head .field-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .draft-body {
      padding: 22px 26px;
      font-size: 0.96rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .draft-body p { margin-bottom: 14px; text-indent: 2em; }
    .draft-body p.no-indent { text-indent: 0; }
    .draft-body .signoff { text-indent: 0; margin-top: 22px; }
    .draft-body .signature { text-indent: 2em; }

    /* ── MONEY / PAYMENT TABLE ── */
    .pay-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .pay-table thead {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
    }
    .pay-table th, .pay-table td {
      padding: 12px 16px;
      text-align: left;
      font-size: 0.92rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .pay-table th {
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 0.76rem;
      border-bottom: none;
    }
    .pay-table tbody tr:last-child td { border-bottom: none; }
    .pay-table tbody tr:nth-child(even) { background: #fbfbfd; }
    .pay-table .status-pending { color: var(--nu-priority-amber); font-weight: 900; }
    .pay-table .status-done { color: var(--nu-priority-green); font-weight: 900; }
    .pay-table .status-review { color: #0033cc; font-weight: 900; }

    /* ── NEXT STEPS CALLOUT ── */
    .next-steps {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 50%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-top: 44px;
      box-shadow: 0 6px 20px rgba(0,51,204,0.18);
    }
    .next-steps h3 {
      font-weight: 900;
      font-size: 1.3rem;
      letter-spacing: 0.01em;
      margin-bottom: 14px;
    }
    .next-steps ol {
      padding-left: 22px;
      font-size: 0.98rem;
      line-height: 1.75;
    }
    .next-steps ol li { margin-bottom: 4px; }
    .next-steps ol li::marker { font-weight: 900; color: rgba(255,255,255,0.85); }

    /* ── FOOTER ── */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 38px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
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

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 36px 20px 48px; }
      .page-heading h1 { font-size: 1.75rem; }
      .action-banner { flex-wrap: wrap; }
      .action-banner-badge { margin-left: 0; }
      .check-item { padding: 16px 18px; }
      .draft-head .draft-row { flex-direction: column; gap: 2px; }
      .draft-head .field-label { width: auto; }
      .pay-table th, .pay-table td { padding: 10px 12px; font-size: 0.85rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .next-steps, .pay-table thead { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .check-item, .bucket, .context-card, .draft { box-shadow: none; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <div>
          <span class="action-banner-label">reMarkable Action Item</span>
          <span class="action-banner-title">Catch up on MK Smith emails — intro Mel, resolve payments, clear backlog</span>
        </div>
        <span class="action-banner-badge">Priority · This Week</span>
      </div>

      <!-- HEADING -->
      <div class="page-heading">
        <h1><span class="first-word">MK</span> <span class="rest">Email Catch-Up &amp; Mel Introduction</span></h1>
        <div class="meta">
          <span class="meta-pill"><span class="dot"></span> Status: Open</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Counterpart:</strong> MK Smith, Marketing Contractor</span>
          <span><strong>Captured:</strong> reMarkable · 2026-04-21</span>
        </div>
      </div>

      <!-- CONTEXT -->
      <section class="section">
        <div class="section-title"><span class="first-word">Why</span> <span class="rest">this matters</span></div>
        <div class="context-card">
          <p>MK Smith is the active marketing contractor for Norris Utilities®. Correspondence with her has accumulated and several items now require a response: an introduction to Mel (new contact coming into MK's workflow), outstanding payment questions, and a backlog of marketing deliverables awaiting review or sign-off.</p>
          <p>The goal today is to clear every MK email, put Mel on the field with a clean warm-intro, and close any loop that has dollars, a deadline, or a decision attached to it. Nothing goes to Caroline Butler until Aaron has personally reviewed the payment side.</p>
        </div>
      </section>

      <!-- EMAIL BUCKETS -->
      <section class="section">
        <div class="section-title"><span class="first-word">Triage</span> <span class="rest">MK's inbox by bucket</span></div>
        <div class="bucket-grid">

          <div class="bucket priority-intro">
            <h3><span class="accent">1.</span> Mel Introduction</h3>
            <ul>
              <li>Warm-intro email: Aaron → Mel + MK on one thread</li>
              <li>Include Mel's role and where she plugs into the Norris Utilities® marketing workflow</li>
              <li>Confirm whether Mel gets a norrisutilities.com alias or uses her own email</li>
              <li>Set expectation: MK is primary, Mel supports on deliverables Aaron assigns</li>
            </ul>
          </div>

          <div class="bucket priority-payment">
            <h3><span class="accent">2.</span> Payments &amp; Invoicing</h3>
            <ul>
              <li>Confirm MK's last paid invoice number and date</li>
              <li>Request any invoices still outstanding from MK with line-item detail</li>
              <li>Decide: pay via Bill.com, Zelle, or check — document in tracker</li>
              <li>All customer-facing commits from CB pause until Aaron signs off on MK's pay side</li>
            </ul>
          </div>

          <div class="bucket priority-review">
            <h3><span class="accent">3.</span> Creative Review</h3>
            <ul>
              <li>Any pending FlexPro Armor creative sitting in MK's queue — pull to desktop</li>
              <li>Verify: no ® on FlexPro Armor; Norris Utilities®, A Legacy of Commitment®, Phoenix Icon® correct</li>
              <li>Line Card design language compliance on any HTML or print pieces</li>
              <li>Approve or return with specific notes — no vague feedback</li>
            </ul>
          </div>

          <div class="bucket priority-general">
            <h3><span class="accent">4.</span> Admin &amp; Housekeeping</h3>
            <ul>
              <li>Scheduling, call times, shared folder access requests</li>
              <li>Brand asset requests (logo, phoenix SVG, color hex values)</li>
              <li>Any read-only thread — reply briefly or archive to clear inbox</li>
              <li>Flag anything requiring CB follow-through and route to her correctly</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- MEL INTRO PANEL -->
      <section class="section">
        <div class="section-title"><span class="first-word">Mel</span> <span class="rest">introduction — what must be confirmed first</span></div>
        <div class="mel-panel">
          <h3><span class="who">Before hitting send on the Mel intro:</span> confirm these fields with MK</h3>
          <div class="mel-desc">These are the blanks that must be filled with real answers from MK — do not send the warm-intro until every field below is confirmed. No placeholders, no approximations.</div>
          <div class="mel-fields">
            <div class="mel-field">
              <span class="label">Full Name</span>
              <span class="value">Confirm with MK</span>
            </div>
            <div class="mel-field">
              <span class="label">Role / Title</span>
              <span class="value">Confirm with MK</span>
            </div>
            <div class="mel-field">
              <span class="label">Email Address</span>
              <span class="value">Confirm with MK</span>
            </div>
            <div class="mel-field">
              <span class="label">Phone</span>
              <span class="value">Confirm with MK</span>
            </div>
            <div class="mel-field">
              <span class="label">First Deliverable</span>
              <span class="value">Confirm with MK</span>
            </div>
            <div class="mel-field">
              <span class="label">Reporting Line</span>
              <span class="value">Through MK → Aaron</span>
            </div>
          </div>
        </div>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="section">
        <div class="section-title"><span class="first-word">Draft</span> <span class="rest">warm-intro email (once Mel's fields are confirmed)</span></div>
        <div class="draft">
          <div class="draft-head">
            <div class="draft-row">
              <span class="field-label">To:</span>
              <span class="field-value">Mel &lt;email to confirm with MK&gt;</span>
            </div>
            <div class="draft-row">
              <span class="field-label">Cc:</span>
              <span class="field-value">MK Smith</span>
            </div>
            <div class="draft-row">
              <span class="field-label">From:</span>
              <span class="field-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
            </div>
            <div class="draft-row">
              <span class="field-label">Subject:</span>
              <span class="field-value">Welcome — Norris Utilities® Marketing</span>
            </div>
          </div>
          <div class="draft-body">
            <p class="no-indent">Mel —</p>
            <p>MK has spoken highly of you, and I'm glad to have you on the field with us. Norris Utilities® is a third-generation utility equipment dealer and distributor out of Birmingham — FlexPro Armor bucket covers, Skylift bucket trucks, Samson Rope, and Bay Shore Systems drill rigs are our core lines.</p>
            <p>MK runs point on marketing for us and will be your primary on day-to-day work. I stay close to every customer-facing piece before it goes out, and I review creative personally — so expect clear direction, quick decisions, and honest feedback.</p>
            <p>Three things it would be advantageous to confirm when you have a moment:</p>
            <p>• The best email and phone number to reach you<br>
               • Your first deliverable and the timing MK has outlined<br>
               • Any brand assets you need from our side (logo, phoenix, colors, fonts)</p>
            <p>Looking forward to earning the work together.</p>
            <p class="signoff">Sincerely,</p>
            <p class="signature">Aaron C. Norris<br>
               Founder &amp; CEO, Norris Utilities, LLC<br>
               Cell: 205-500-1343<br>
               acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- PAYMENT TABLE -->
      <section class="section">
        <div class="section-title"><span class="first-word">Payment</span> <span class="rest">reconciliation with MK</span></div>
        <table class="pay-table">
          <thead>
            <tr>
              <th style="width:32%;">Item</th>
              <th style="width:20%;">Amount</th>
              <th style="width:20%;">Method</th>
              <th style="width:28%;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Last paid MK invoice</td>
              <td>Confirm from records</td>
              <td>Confirm from records</td>
              <td class="status-review">Pull from bank + email</td>
            </tr>
            <tr>
              <td>Outstanding invoices from MK</td>
              <td>Request itemized</td>
              <td>Bill.com preferred</td>
              <td class="status-pending">Awaiting MK send</td>
            </tr>
            <tr>
              <td>Mel onboarding hours / rate</td>
              <td>Confirm with MK</td>
              <td>Through MK or direct</td>
              <td class="status-pending">Decide before intro</td>
            </tr>
            <tr>
              <td>Brand asset / licensing spend</td>
              <td>Confirm if any</td>
              <td>Direct vendor</td>
              <td class="status-review">Review with MK</td>
            </tr>
            <tr>
              <td>Aaron sign-off before CB processes</td>
              <td>—</td>
              <td>—</td>
              <td class="status-pending">Required this week</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CHECKLIST -->
      <section class="section">
        <div class="section-title"><span class="first-word">Today's</span> <span class="rest">step-by-step</span></div>
        <div class="checklist">
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">1. Open MK's thread history and sort oldest to newest</div>
              <div class="check-desc">Read every unreplied email. Mark each as: Intro / Payment / Creative Review / Admin. No triage, no movement.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">2. Reply to MK with the Mel confirmation questions</div>
              <div class="check-desc">Send MK the six fields in the Mel panel above. Ask for answers before any outside introduction goes out — protects the warm-intro.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">3. Reconcile payments with QuickBooks + bank</div>
              <div class="check-desc">Pull MK's last paid invoice number and date. Ask MK to resend anything still outstanding with itemized lines. Decide payment method and record in the master tracker.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">4. Clear the creative review queue</div>
              <div class="check-desc">Approve or return each pending piece with specific, written feedback. Verify no ® on FlexPro Armor; Norris Utilities®, A Legacy of Commitment®, and Phoenix Icon® carry the ® correctly.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">5. Send the Mel warm-intro once fields are confirmed</div>
              <div class="check-desc">Use the draft above, substituting real values from MK. CC MK. No placeholders, no approximations — if a field is missing, hold the send.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">6. Close and archive the admin thread remainder</div>
              <div class="check-desc">One-line replies or archive. Inbox from MK goes to zero before the day ends. Anything routed to Caroline Butler waits for Aaron's final review first.</div>
              <span class="check-owner">Aaron → CB last</span>
            </div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <div class="check-title">7. Log outcome in the master tracker</div>
              <div class="check-desc">Record: Mel intro sent (y/n), payments cleared, creative approved, follow-ups owed. One row per item so nothing falls through.</div>
              <span class="check-owner">Aaron</span>
            </div>
          </div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="next-steps">
        <h3>Close-out criteria — this task is done when:</h3>
        <ol>
          <li>Every MK Smith email is replied to or archived — inbox from MK is zero.</li>
          <li>Mel's six fields (name, role, email, phone, first deliverable, reporting line) are confirmed by MK.</li>
          <li>Warm-intro email to Mel is sent with MK on CC — no placeholders anywhere.</li>
          <li>MK's payment status is reconciled, decided, and logged in the master tracker.</li>
          <li>All pending creative is either approved or returned with specific written notes.</li>
          <li>Aaron has personally reviewed anything CB will touch on the customer-facing side.</li>
        </ol>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>