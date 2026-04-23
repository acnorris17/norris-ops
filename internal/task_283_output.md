<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Warranty Document Request — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    /* ══ ROOT VARIABLES ══ */
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
      --nu-alert-red: #C8102E;
      --nu-status-amber: #E8A33D;
      --nu-status-green: #2E8B57;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
    }

    /* ══ BASE ══ */
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* Ghost phoenix watermark inside header */
    .nu-header-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    /* ══ WHITE CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 380px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 20px;
      position: relative;
      z-index: 1;
    }

    /* ══ TASK HEADER STRIP ══ */
    .task-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 24px 32px;
      border-radius: 8px;
      margin-bottom: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 18px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.18);
    }
    .task-banner-left { flex: 1; min-width: 280px; }
    .task-banner-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .task-banner-title {
      font-weight: 900;
      font-size: 1.55rem;
      line-height: 1.25;
      color: var(--nu-white);
    }
    .task-banner-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
    }
    .meta-pill {
      background: rgba(6,208,255,0.15);
      border: 1px solid rgba(6,208,255,0.4);
      color: var(--nu-cyan);
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
    }
    .priority-pill {
      background: rgba(232, 163, 61, 0.18);
      border-color: rgba(232, 163, 61, 0.5);
      color: #FFD089;
    }

    /* ══ SECTION TITLES ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 14px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .word-1 { color: #0033CC; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .section-block { margin-bottom: 40px; }

    /* ══ SUMMARY CARD ══ */
    .summary-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 26px 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      font-size: 1.02rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .summary-card strong { color: var(--nu-blue); }

    /* ══ DETAIL GRID ══ */
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .detail-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .detail-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #0033CC;
      margin-bottom: 6px;
    }
    .detail-value {
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .detail-sub {
      font-size: 0.85rem;
      font-weight: 400;
      color: #666;
      margin-top: 4px;
    }

    /* ══ WHY-IT-MATTERS ══ */
    .why-card {
      background: linear-gradient(135deg, #f6f9ff 0%, #eef4ff 100%);
      border: 1px solid #c9d8ff;
      border-radius: 8px;
      padding: 24px 28px;
    }
    .why-card ul { list-style: none; padding: 0; margin: 0; }
    .why-card li {
      padding: 8px 0 8px 28px;
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .why-card li::before {
      content: '◆';
      position: absolute;
      left: 6px;
      top: 8px;
      color: var(--nu-cyan);
      font-size: 0.8rem;
    }

    /* ══ CHEVRON BADGES (action steps) ══ */
    .step-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .step-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 32px 16px 22px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.96rem;
      letter-spacing: 0.01em;
    }
    .step-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.95rem;
      margin-right: 16px;
      flex-shrink: 0;
    }
    .step-text { flex: 1; line-height: 1.4; }

    /* ══ ASK & EMAIL DRAFT ══ */
    .ask-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .ask-meta {
      display: grid;
      grid-template-columns: 90px 1fr;
      gap: 8px 14px;
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .ask-meta dt {
      font-weight: 700;
      color: #666;
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      align-self: center;
    }
    .ask-meta dd { color: var(--nu-dark-text); font-weight: 700; }

    .email-body {
      font-size: 1rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .email-body p {
      margin-bottom: 14px;
      padding-left: 24px;
    }
    .email-body p.greeting,
    .email-body p.closing,
    .email-body p.sign { padding-left: 0; }
    .email-body p.sign {
      padding-left: 24px;
      font-weight: 700;
    }
    .email-body ul {
      list-style: none;
      padding-left: 24px;
      margin: 12px 0 18px 0;
    }
    .email-body ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 6px;
    }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .check-text { flex: 1; color: var(--nu-dark-text); line-height: 1.5; }
    .check-text strong { color: var(--nu-blue); }

    /* ══ TIMELINE ══ */
    .timeline {
      position: relative;
      padding-left: 30px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .timeline-item {
      position: relative;
      padding: 10px 0 14px 0;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px; top: 16px;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-blue);
    }
    .timeline-date {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0033CC;
    }
    .timeline-event {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-top: 2px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 30px 20px 10px; }
      .task-banner { padding: 20px 22px; }
      .task-banner-title { font-size: 1.25rem; }
      .step-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .ask-card { padding: 22px 20px; }
      .email-body p { padding-left: 12px; }
      .ask-meta { grid-template-columns: 80px 1fr; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .step-badge, .task-banner { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-left">
          <div class="task-banner-label">reMarkable Action Item</div>
          <div class="task-banner-title">Get Copy of Actual Warranty Document from H2O Waterproofing</div>
        </div>
        <div class="task-banner-meta">
          <span class="meta-pill priority-pill">Priority: Medium-High</span>
          <span class="meta-pill">Captured: 2026-04-23</span>
          <span class="meta-pill">Owner: Aaron C. Norris</span>
        </div>
      </div>

      <!-- SECTION 1: SUMMARY -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">The</span> <span class="rest">Ask</span></h2>
        <div class="summary-card">
          Request the <strong>actual written warranty document</strong> from H2O Waterproofing covering the waterproofing treatment applied to FlexPro Armor bucket covers. We need the signed/issued warranty PDF or letter — not a verbal description, not a marketing claim from the website — so we can: (1) attach it to customer quotes and PO confirmations, (2) reference exact terms when defending a claim, and (3) post it inside the Norris Utilities® ops portal as the canonical reference for CB and the sales channel.
        </div>
      </section>

      <!-- SECTION 2: KEY DETAILS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Key</span> <span class="rest">Details</span></h2>
        <div class="detail-grid">
          <div class="detail-card">
            <div class="detail-label">Vendor</div>
            <div class="detail-value">H2O Waterproofing</div>
            <div class="detail-sub">Treatment supplier for FlexPro Armor bucket covers</div>
          </div>
          <div class="detail-card">
            <div class="detail-label">Document Needed</div>
            <div class="detail-value">Signed Warranty (PDF)</div>
            <div class="detail-sub">Original or vendor-issued, with effective dates</div>
          </div>
          <div class="detail-card">
            <div class="detail-label">Channel</div>
            <div class="detail-value">Direct Email Request</div>
            <div class="detail-sub">Phone follow-up after 48 hours if no response</div>
          </div>
          <div class="detail-card">
            <div class="detail-label">Target Turnaround</div>
            <div class="detail-value">5 Business Days</div>
            <div class="detail-sub">By 2026-04-30</div>
          </div>
          <div class="detail-card">
            <div class="detail-label">Affected SKUs</div>
            <div class="detail-value">All FlexPro Armor</div>
            <div class="detail-sub">NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C</div>
          </div>
          <div class="detail-card">
            <div class="detail-label">Storage Location</div>
            <div class="detail-value">Ops Portal /docs/warranty/</div>
            <div class="detail-sub">ops.norrisutilities.com — vendor warranties</div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: WHY IT MATTERS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Why</span> <span class="rest">It Matters</span></h2>
        <div class="why-card">
          <ul>
            <li><strong>Customer trust.</strong> Linemen and utility buyers ask for the warranty in writing before issuing a PO. A vague verbal answer kills credibility on a $1,500-plus cover.</li>
            <li><strong>Claim defense.</strong> Without the actual document on file, Norris Utilities® has no defined recourse path if a cover fails in the field — we end up absorbing whatever the customer demands.</li>
            <li><strong>Channel enablement.</strong> Dealers and distributors (30%/40% off tiers) cannot resell with confidence unless they have the warranty terms in hand.</li>
            <li><strong>Quote attachment.</strong> CB needs to attach this to every FlexPro Armor quote going forward — currently a gap in the standard packet.</li>
            <li><strong>Audit readiness.</strong> Vendor warranty is part of the legal/compliance file under "Open Items — never expire until resolved."</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 4: ACTION STEPS -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Action</span> <span class="rest">Steps</span></h2>
        <div class="step-list">
          <div class="step-badge">
            <span class="step-num">1</span>
            <span class="step-text">Pull H2O Waterproofing primary contact (name, email, phone) from the Norris Utilities® vendor file. If no direct contact exists, call the H2O main line and ask for the technical / warranty department.</span>
          </div>
          <div class="step-badge">
            <span class="step-num">2</span>
            <span class="step-text">Send the warranty request email (draft below) from acnorris@norrisutilities.com. CC Caroline Butler so she has the thread for filing.</span>
          </div>
          <div class="step-badge">
            <span class="step-num">3</span>
            <span class="step-text">When the document arrives, save it as &nbsp;<em>H2O_Waterproofing_Warranty_2026.pdf</em>&nbsp; in ~/norris-ops/docs/warranty/ and push to GitHub per the standing rule.</span>
          </div>
          <div class="step-badge">
            <span class="step-num">4</span>
            <span class="step-text">Update the FlexPro Armor quote template and the customer-facing line-card PDF to reference the warranty by name and effective date.</span>
          </div>
          <div class="step-badge">
            <span class="step-num">5</span>
            <span class="step-text">Brief Caroline Butler that the warranty PDF must now be attached to every outgoing FlexPro Armor quote and PO confirmation — no exceptions.</span>
          </div>
          <div class="step-badge">
            <span class="step-num">6</span>
            <span class="step-text">Close out the reMarkable action item in the master tracker. Mark the line item under "Open Items — Legal / Compliance" as resolved.</span>
          </div>
        </div>
      </section>

      <!-- SECTION 5: EMAIL DRAFT -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Email</span> <span class="rest">Draft (Ready to Send)</span></h2>
        <div class="ask-card">
          <dl class="ask-meta">
            <dt>From</dt><dd>acnorris@norrisutilities.com</dd>
            <dt>To</dt><dd>H2O Waterproofing — primary contact</dd>
            <dt>CC</dt><dd>Caroline Butler</dd>
            <dt>Subject</dt><dd>Warranty Document Request — FlexPro Armor Treatment</dd>
          </dl>
          <div class="email-body">
            <p class="greeting">[First Name] —</p>

            <p>I'd like to get a copy of the actual written warranty that covers the waterproofing treatment H2O applies to our FlexPro Armor bucket covers.</p>

            <p>For our records and our customers, I need the document itself — the issued warranty letter or PDF — covering at minimum:</p>

            <ul>
              <li>Coverage period (length of warranty from date of treatment)</li>
              <li>What is covered (water intrusion, treatment failure, delamination, etc.)</li>
              <li>What is excluded (normal wear, abuse, customer modification)</li>
              <li>Claim process and required documentation</li>
              <li>Any pro-rata or replacement terms</li>
            </ul>

            <p>We are presenting FlexPro Armor to investor-owned utilities and large contractors, and they consistently ask for the warranty in writing before issuing a PO. Having your document attached to our quote packet will help both of us close more business, and it ensures we represent the coverage accurately.</p>

            <p>If you can email the PDF back to me at this address, I'll get it filed today and will share back any feedback we hear from the field.</p>

            <p>Appreciate y'all — looking forward to having this in hand.</p>

            <p class="closing">Sincerely,</p>
            <p class="sign">Aaron C. Norris<br>Founder &amp; CEO<br>Norris Utilities, LLC<br>Cell: 205-500-1343<br>acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6: VERIFICATION CHECKLIST -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Verification</span> <span class="rest">Checklist</span></h2>
        <div class="checklist">
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Document received</strong> — H2O Waterproofing returned an actual warranty PDF or signed letter (not a marketing brochure, not a website link, not a verbal assurance).</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Coverage period is explicit</strong> — exact months/years of coverage and effective start date are stated in writing.</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Claim process is defined</strong> — who to contact, what evidence is needed, and the response timeline are listed.</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Filed in ops portal</strong> — saved to ~/norris-ops/docs/warranty/H2O_Waterproofing_Warranty_2026.pdf and pushed to GitHub.</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Quote template updated</strong> — FlexPro Armor quote packet now references the warranty by name and includes the PDF as an attachment.</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>CB briefed</strong> — Caroline Butler instructed to attach the warranty to every outgoing FlexPro Armor quote and PO confirmation going forward.</div>
          </div>
          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-text"><strong>Tracker closed</strong> — reMarkable action item and Open-Items legal/compliance row marked resolved with date.</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7: TIMELINE -->
      <section class="section-block">
        <h2 class="nu-section-title"><span class="word-1">Timeline</span> <span class="rest">&amp; Follow-Up</span></h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2026-04-23 — Today</div>
            <div class="timeline-event">Action item captured on reMarkable. Request page built and filed in ops portal.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2026-04-24 — Day 1</div>
            <div class="timeline-event">Email sent to H2O Waterproofing primary contact. Caroline Butler CC'd for filing.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2026-04-28 — Day 3</div>
            <div class="timeline-event">If no response: phone follow-up to H2O. Confirm correct contact for warranty paperwork.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2026-04-30 — Day 5</div>
            <div class="timeline-event">Target completion. Document received, filed, quote template updated, CB briefed.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">If document not received by 2026-05-01</div>
            <div class="timeline-event">Escalate: request second contact at H2O, or evaluate alternate waterproofing supplier. Note in deals pipeline that FlexPro Armor warranty risk is unresolved.</div>
          </div>
        </div>
      </section>

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