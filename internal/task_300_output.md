<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Pre-Closing Call Checklist — Norris Utilities®</title>
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
      --nu-warning: #D84315;
      --nu-success: #2E7D32;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-banner {
      margin-top: 28px;
      display: inline-block;
      padding: 10px 28px;
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
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px 80px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 60px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* DOC HEAD */
    .nu-doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-doc-title span { color: var(--nu-blue); }
    .nu-doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 24px;
    }
    .nu-doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      padding: 20px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .nu-meta-item { font-size: 0.9rem; }
    .nu-meta-label {
      display: block;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.72rem;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      color: var(--nu-dark-text);
      font-weight: 400;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title span:first-child {
      color: var(--nu-blue);
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
      border-left: 6px solid var(--nu-warning);
      padding: 18px 24px;
      border-radius: 4px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .priority-banner-icon {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      background: var(--nu-warning);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .priority-banner-text {
      flex: 1;
    }
    .priority-banner-text strong {
      display: block;
      color: var(--nu-warning);
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-bottom: 20px;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      transition: all 0.2s ease;
    }
    .checklist li:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,255,0.08);
    }
    .checklist-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-content {
      flex: 1;
    }
    .checklist-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    .checklist-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* QUESTIONS TABLE */
    .qa-grid {
      display: grid;
      gap: 14px;
    }
    .qa-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 18px 22px;
    }
    .qa-number {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 3px;
      margin-bottom: 8px;
      letter-spacing: 0.08em;
    }
    .qa-question {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .qa-note {
      font-size: 0.88rem;
      color: var(--nu-body-text);
      font-style: italic;
    }
    .qa-answer-line {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.82rem;
      color: #888;
    }
    .qa-answer-line::before {
      content: 'Answer: ';
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.05em;
    }

    /* WRITING REQUIREMENT BOX */
    .writing-box {
      background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 24px;
    }
    .writing-box-title {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.1rem;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .writing-box-title::before {
      content: '✎';
      font-size: 1.4rem;
    }
    .writing-box ul {
      list-style: none;
      padding: 0;
    }
    .writing-box li {
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-dark-text);
    }
    .writing-box li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: 8px;
    }

    /* CONTACT CARDS */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-card-role {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      font-weight: 700;
      margin-bottom: 6px;
    }
    .contact-card-name {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .contact-card-line {
      font-size: 0.9rem;
      margin-bottom: 4px;
      color: var(--nu-body-text);
    }
    .contact-card-line strong {
      color: var(--nu-dark-text);
    }

    /* ACTION ROW */
    .action-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 14px;
    }
    .action-tile {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001166 100%);
      color: var(--nu-white);
      padding: 22px 20px;
      border-radius: 6px;
      text-align: center;
    }
    .action-tile-num {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-cyan);
      line-height: 1;
      margin-bottom: 6px;
    }
    .action-tile-label {
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
    }

    /* RED FLAGS */
    .red-flag-list {
      list-style: none;
      padding: 0;
    }
    .red-flag-list li {
      background: #ffebee;
      border-left: 4px solid #c62828;
      padding: 12px 18px;
      margin-bottom: 8px;
      border-radius: 3px;
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }
    .red-flag-list li::before {
      content: '⚑ ';
      color: #c62828;
      font-weight: 900;
      margin-right: 4px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
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
      margin: 14px auto;
      opacity: 0.5;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 20px 60px; }
      .nu-doc-title { font-size: 1.6rem; }
      .nu-section-title { font-size: 1.25rem; }
    }

    @media print {
      body { background: white; }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .checklist li, .qa-item, .contact-card { box-shadow: none; break-inside: avoid; }
      .nu-footer {
        background: var(--nu-navy) !important;
        -webkit-print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-banner">Pre-Closing Due Diligence</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="nu-doc-title">H2O Waterproofing — <span>Pre-Closing Call Checklist</span></h1>
      <p class="nu-doc-subtitle">Verification call and written confirmation required before closing on 4505 Butterworth Estate.</p>

      <div class="nu-doc-meta">
        <div class="nu-meta-item">
          <span class="nu-meta-label">Action Source</span>
          <span class="nu-meta-value">reMarkable Task Capture</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Priority</span>
          <span class="nu-meta-value">HIGH — Blocks Closing</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Deadline</span>
          <span class="nu-meta-value">Before Closing Date</span>
        </div>
        <div class="nu-meta-item">
          <span class="nu-meta-label">Prepared For</span>
          <span class="nu-meta-value">Aaron C. Norris</span>
        </div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-banner-icon">!</div>
        <div class="priority-banner-text">
          <strong>Written Confirmation Required</strong>
          Do not accept verbal assurances. Every response must be documented in writing via email from H2O Waterproofing on company letterhead or from a verified company email address. Save copies to the property closing file.
        </div>
      </div>

      <!-- SECTION 1 — BEFORE THE CALL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Before</span> <span>the Call — Preparation</span></h2>
        <ul class="checklist">
          <li>
            <span class="checklist-box"></span>
            <div class="checklist-content">
              <span class="checklist-label">Pull the H2O Waterproofing paperwork</span>
              <span class="checklist-detail">Gather original contract, invoices, any warranty documents, and receipts from seller disclosures on 4505 Butterworth Estate.</span>
            </div>
          </li>
          <li>
            <span class="checklist-box"></span>
            <div class="checklist-content">
              <span class="checklist-label">Confirm H2O Waterproofing phone number and company contact</span>
              <span class="checklist-detail">Verify against official H2O website or Better Business Bureau listing — do not rely solely on seller-provided numbers.</span>
            </div>
          </li>
          <li>
            <span class="checklist-box"></span>
            <div class="checklist-content">
              <span class="checklist-label">Identify who signed the original work order</span>
              <span class="checklist-detail">Know the customer of record so H2O can pull the job file quickly.</span>
            </div>
          </li>
          <li>
            <span class="checklist-box"></span>
            <div class="checklist-content">
              <span class="checklist-label">Have closing date and property address ready</span>
              <span class="checklist-detail">4505 Butterworth Estate — confirm full legal address on call.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- SECTION 2 — QUESTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Questions</span> <span>— Ask Each One, Record Answer</span></h2>

        <div class="qa-grid">

          <div class="qa-item">
            <span class="qa-number">Q1</span>
            <div class="qa-question">Is the warranty transferable to a new owner?</div>
            <div class="qa-note">If yes, what is the exact transfer process and is there a fee?</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q2</span>
            <div class="qa-question">What is the full remaining term of the warranty?</div>
            <div class="qa-note">Request original warranty start date, expiration, and any pro-rated coverage schedule.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q3</span>
            <div class="qa-question">What exactly does the warranty cover — and what is excluded?</div>
            <div class="qa-note">Get coverage scope in writing: leaks, cracks, interior damage, basement, crawlspace, foundation, etc.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q4</span>
            <div class="qa-question">Are there any open or prior claims on this property?</div>
            <div class="qa-note">Claim history is a key indicator of unresolved moisture or foundation issues.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q5</span>
            <div class="qa-question">What was the scope of the original waterproofing work performed?</div>
            <div class="qa-note">Interior drain tile, exterior membrane, sump pump install, crack injection, etc. Request full job specifications.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q6</span>
            <div class="qa-question">Is there an annual inspection or maintenance requirement to keep the warranty valid?</div>
            <div class="qa-note">If yes, what does it cost, who performs it, and when is it next due?</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q7</span>
            <div class="qa-question">What actions void the warranty?</div>
            <div class="qa-note">Common voids: grading changes, additions, unauthorized repairs, failure to maintain sump pump.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q8</span>
            <div class="qa-question">Is the warranty backed by a third-party insurer or only by H2O Waterproofing directly?</div>
            <div class="qa-note">Third-party backing protects coverage if the contractor goes out of business.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q9</span>
            <div class="qa-question">What is the response time commitment if a warranty claim is filed?</div>
            <div class="qa-note">Get service-level expectations in writing.</div>
            <div class="qa-answer-line"></div>
          </div>

          <div class="qa-item">
            <span class="qa-number">Q10</span>
            <div class="qa-question">Can you provide a written confirmation letter covering the answers above?</div>
            <div class="qa-note">This is the non-negotiable ask. No written letter, no closing.</div>
            <div class="qa-answer-line"></div>
          </div>

        </div>
      </section>

      <!-- SECTION 3 — WRITTEN CONFIRMATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Required</span> <span>in Writing — Before Closing</span></h2>

        <div class="writing-box">
          <div class="writing-box-title">Letter or email from H2O Waterproofing must include:</div>
          <ul>
            <li>Property address: 4505 Butterworth Estate</li>
            <li>Original customer of record and job number</li>
            <li>Warranty start date, expiration date, and remaining term</li>
            <li>Confirmation that warranty transfers to new owner (Aaron C. Norris) at closing</li>
            <li>Exact transfer procedure, required documentation, and any transfer fees</li>
            <li>Full scope of work originally performed</li>
            <li>Complete list of warranty coverage and exclusions</li>
            <li>List of any past or open claims on the property</li>
            <li>Maintenance requirements that keep the warranty in force</li>
            <li>Conditions or actions that void coverage</li>
            <li>Signature of an authorized H2O Waterproofing representative and date</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 4 — RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Red</span> <span>Flags — Pause Closing If Any Apply</span></h2>
        <ul class="red-flag-list">
          <li>Warranty is non-transferable or transfer requires lengthy re-inspection at buyer cost.</li>
          <li>H2O refuses to provide written confirmation of coverage details.</li>
          <li>Prior claims exist that were denied or resolved with recurring issues.</li>
          <li>Warranty is expired or close to expiring with no renewal option.</li>
          <li>Annual inspection has been missed, voiding coverage.</li>
          <li>Original scope of work is narrower than seller disclosure implied.</li>
          <li>H2O is no longer in business, unresponsive, or cannot locate the job file.</li>
          <li>Warranty is contractor-backed only with no third-party insurer.</li>
        </ul>
      </section>

      <!-- SECTION 5 — POST-CALL ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>After</span> <span>the Call — Five Actions</span></h2>
        <div class="action-row">
          <div class="action-tile">
            <div class="action-tile-num">1</div>
            <div class="action-tile-label">Save written confirmation to closing file</div>
          </div>
          <div class="action-tile">
            <div class="action-tile-num">2</div>
            <div class="action-tile-label">Forward to closing attorney and title company</div>
          </div>
          <div class="action-tile">
            <div class="action-tile-num">3</div>
            <div class="action-tile-label">Log call notes in property due diligence binder</div>
          </div>
          <div class="action-tile">
            <div class="action-tile-num">4</div>
            <div class="action-tile-label">Initiate warranty transfer paperwork</div>
          </div>
          <div class="action-tile">
            <div class="action-tile-num">5</div>
            <div class="action-tile-label">Calendar the first maintenance or inspection date</div>
          </div>
        </div>
      </section>

      <!-- SECTION 6 — CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Contacts</span> <span>— Keep on Hand During the Call</span></h2>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-card-role">Buyer</div>
            <div class="contact-card-name">Aaron C. Norris</div>
            <div class="contact-card-line"><strong>Cell:</strong> 205-500-1343</div>
            <div class="contact-card-line"><strong>Email:</strong> acnorris@norrisutilities.com</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-role">Property</div>
            <div class="contact-card-name">4505 Butterworth Estate</div>
            <div class="contact-card-line"><strong>Size:</strong> 7,098 sq ft estate</div>
            <div class="contact-card-line"><strong>Status:</strong> Under negotiation, pre-closing</div>
          </div>
          <div class="contact-card">
            <div class="contact-card-role">Vendor on Call</div>
            <div class="contact-card-name">H2O Waterproofing</div>
            <div class="contact-card-line"><strong>Confirm phone:</strong> per original contract</div>
            <div class="contact-card-line"><strong>Verify via:</strong> company website / BBB</div>
          </div>
        </div>
      </section>

      <!-- SECTION 7 — DECISION RULE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Decision</span> <span>Rule</span></h2>
        <div class="writing-box" style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-color: #2E7D32;">
          <div class="writing-box-title" style="color: #2E7D32;">Proceed to closing only if:</div>
          <ul>
            <li>Written confirmation received from H2O Waterproofing covering every item above.</li>
            <li>Warranty confirmed transferable to Aaron C. Norris.</li>
            <li>No unresolved prior claims affecting the property.</li>
            <li>Remaining warranty term is documented and substantial.</li>
            <li>Coverage scope meaningfully protects the buyer.</li>
          </ul>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>