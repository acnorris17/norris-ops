<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Southern Company Standards Update — Norris Utilities®</title>
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
      --nu-accent-gold: #C9A84C;
      --nu-amber: #E8A317;
      --nu-green: #1D8A3A;
      --nu-red: #C0392B;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-script: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 56px 40px 72px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
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
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-script);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* GHOST PHOENIX WATERMARK */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      opacity: 0.07;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
      padding: 56px 40px;
    }

    /* TITLE BLOCK */
    .action-ribbon {
      display: inline-block;
      background: var(--nu-amber);
      color: var(--nu-navy);
      padding: 6px 16px;
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 18px;
      border-radius: 3px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title .first-word { color: #0033CC; }
    .page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      max-width: 780px;
    }

    /* SUMMARY BAR */
    .summary-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      margin-bottom: 40px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .summary-cell {
      background: var(--nu-white);
      padding: 18px 18px;
      text-align: center;
    }
    .summary-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #0033CC;
      margin-bottom: 6px;
    }
    .summary-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .summary-value.priority-high {
      color: var(--nu-red);
    }

    /* SECTIONS */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .nu-section-title .first-word { color: #0033CC; }
    .nu-section-title .rest { color: var(--nu-dark-text); }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 16px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card p:last-child { margin-bottom: 0; }
    .nu-card strong { color: var(--nu-dark-text); }

    /* BADGES LIST (Chevron-style) */
    .badge-list { list-style: none; padding: 0; margin: 0; }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO-COLUMN GRID */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    /* CONTACT CARD */
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 22px;
    }
    .contact-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .contact-card .role {
      font-size: 0.82rem;
      color: #0033CC;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }
    .contact-card .detail {
      font-size: 0.92rem;
      color: #555;
      margin-bottom: 4px;
    }
    .contact-card .note {
      font-size: 0.85rem;
      color: #777;
      font-style: italic;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
    }

    /* CHECKLIST */
    .checklist { list-style: none; padding: 0; margin: 0; }
    .checklist li {
      padding: 12px 0 12px 38px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* TABLE */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .info-table th {
      background: #0033CC;
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .info-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      vertical-align: top;
    }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table tr:nth-child(even) td { background: #FAFAFC; }

    /* EMAIL BLOCK */
    .email-draft {
      background: #FAFAFC;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      padding: 22px 26px;
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .email-draft .hdr {
      font-size: 0.82rem;
      color: #666;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .email-draft .hdr span { font-weight: 700; color: var(--nu-dark-text); }
    .email-draft p { margin-bottom: 14px; text-indent: 2em; }
    .email-draft p.no-indent { text-indent: 0; }
    .email-draft .signature { margin-top: 20px; padding-left: 2em; }

    /* BUTTONS */
    .btn-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 8px; }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
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
      font-family: var(--font-script);
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-small {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      margin-top: 18px;
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 820px) {
      .summary-bar { grid-template-columns: repeat(2, 1fr); }
      .two-col { grid-template-columns: 1fr; }
      .page-title { font-size: 1.9rem; }
    }
    @media (max-width: 560px) {
      .nu-header { padding: 40px 20px 56px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 22px; }
      .summary-bar { grid-template-columns: 1fr 1fr; }
      .nu-badge {
        clip-path: none;
        border-radius: 6px;
        padding: 12px 16px;
      }
      .page-title { font-size: 1.6rem; }
      .email-draft p { text-indent: 1em; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#ffffff" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#ffffff" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <!-- Ghost phoenix watermark -->
    <svg class="nu-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#0000FF"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#0000FF"/>
    </svg>

    <div class="nu-content-inner">

      <!-- TITLE -->
      <div class="action-ribbon">Action Item — reMarkable</div>
      <h1 class="page-title"><span class="first-word">Southern</span> Company Standards Update</h1>
      <p class="page-subtitle">
        Obtain the current Southern Company approved-material and equipment standards so every
        FlexPro Armor and Skylift quote we submit to Alabama Power, Georgia Power, Mississippi
        Power, and their contractors lands on the right spec the first time.
      </p>

      <!-- SUMMARY BAR -->
      <div class="summary-bar">
        <div class="summary-cell">
          <div class="summary-label">Owner</div>
          <div class="summary-value">Aaron C. Norris</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Priority</div>
          <div class="summary-value priority-high">High</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Status</div>
          <div class="summary-value">Open</div>
        </div>
        <div class="summary-cell">
          <div class="summary-label">Target</div>
          <div class="summary-value">This week</div>
        </div>
      </div>

      <!-- SECTION: WHY THIS MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Why</span> <span class="rest">This Matters</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p>
            Southern Company and its operating utilities (Alabama Power, Georgia Power,
            Mississippi Power) maintain approved-material lists and construction standards
            that dictate what a line contractor is allowed to purchase and install. If our
            FlexPro Armor covers or Skylift bucket-truck specs are not written to match
            their current revision, we lose the quote before it reaches a buyer.
          </p>
          <p>
            Standards refresh throughout the year. Pulling the <strong>current revision</strong>
            — not the version we had on file last cycle — is how we protect our Southeast
            territory and keep wins from slipping to a competitor on a paperwork technicality.
          </p>
        </div>
      </section>

      <!-- SECTION: WHAT TO GET -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">What</span> <span class="rest">to Request</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="badge-list">
          <li class="nu-badge"><span class="badge-num">1</span>Current approved-material list — aerial device / bucket accessories</li>
          <li class="nu-badge"><span class="badge-num">2</span>Current approved-material list — rope, rigging, and fall protection</li>
          <li class="nu-badge"><span class="badge-num">3</span>Revision date, revision number, and effective date on each document</li>
          <li class="nu-badge"><span class="badge-num">4</span>Change-log summary since the last revision we have on file</li>
          <li class="nu-badge"><span class="badge-num">5</span>Point of contact for adding a new SKU to the approved list</li>
        </ul>
      </section>

      <!-- SECTION: KEY CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Key</span> <span class="rest">Contacts &amp; Channels</span></h2>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="contact-card">
            <h4>Jared Lemoine</h4>
            <div class="role">Irby Construction — Primary</div>
            <div class="detail">New primary contact as of April 2026.</div>
            <div class="detail">Irby is the Southern Company line contractor — Jared can route
              us to the standards owner and confirm which spec governs active jobs.</div>
            <div class="note">Replaces Gary Wiggs and Scott Argyle, both retired.</div>
          </div>
          <div class="contact-card">
            <h4>Michael Waldrep</h4>
            <div class="role">Sheffield Utilities</div>
            <div class="detail">Adjacent municipal utility in the Southern Co. footprint.</div>
            <div class="detail">Good cross-check: confirm whether Sheffield mirrors the Southern
              Company standard or maintains its own list.</div>
          </div>
          <div class="contact-card">
            <h4>Shon Cunningham</h4>
            <div class="role">Gridco</div>
            <div class="detail">Contractor working across the Southern Company territory.</div>
            <div class="detail">Confirm which revision Gridco is building to in the field today.</div>
          </div>
          <div class="contact-card">
            <h4>Southern Company — Sourcing</h4>
            <div class="role">Direct Channel</div>
            <div class="detail">Request the standards owner for aerial-device accessories and
              rope &amp; rigging via Southern Company's supplier-relations contact.</div>
            <div class="detail">Ask for the named engineer or standards analyst, not a generic inbox.</div>
          </div>
        </div>
      </section>

      <!-- SECTION: STEP-BY-STEP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Step-by-Step</span> <span class="rest">Execution</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ul class="checklist">
            <li><strong>Step 1.</strong> Pull the Southern Company standards revision Norris Utilities® currently has on file and note the revision date.</li>
            <li><strong>Step 2.</strong> Email Jared Lemoine at Irby first — he is closest to the active field spec and will know which revision is being built to right now.</li>
            <li><strong>Step 3.</strong> In parallel, contact Southern Company sourcing directly to request the current revision PDF and change log.</li>
            <li><strong>Step 4.</strong> Cross-check the field answer (Irby/Gridco) against the document answer (Southern Co. sourcing). If they disagree, the field answer wins for active quotes.</li>
            <li><strong>Step 5.</strong> Compare new revision to prior revision — flag every line that affects FlexPro Armor, Samson Rope, or Skylift.</li>
            <li><strong>Step 6.</strong> Save the revision to <strong>~/norris-ops/internal/</strong> and update the quoting reference so CB and every future quote use the current spec.</li>
            <li><strong>Step 7.</strong> If any Norris SKU is not on the approved list, open an approval-submission request with the named standards owner.</li>
          </ul>
        </div>
      </section>

      <!-- SECTION: WHAT TO DO WITH THE ANSWER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">After</span> <span class="rest">the Update Lands</span></h2>
        <div class="nu-section-rule"></div>
        <table class="info-table">
          <thead>
            <tr>
              <th style="width: 28%;">Area</th>
              <th>Action once the current revision is in hand</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>FlexPro Armor</strong></td>
              <td>Verify NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C are on the approved list. If any are missing, submit for approval the same day.</td>
            </tr>
            <tr>
              <td><strong>Samson Rope</strong></td>
              <td>Confirm the current approved rope list. CC Donna Poll and Sarah Daniels on any spec clarification needed from Samson.</td>
            </tr>
            <tr>
              <td><strong>Skylift</strong></td>
              <td>Verify SBA40i-LW and SBA47i-MH meet the current aerial-device spec. Loop in Nick Gordon for any pricing or spec clarifications.</td>
            </tr>
            <tr>
              <td><strong>Bay Shore Systems</strong></td>
              <td>Andy Barron is the SE travel/sales partner. Share any drill-rig-relevant standards changes directly with him.</td>
            </tr>
            <tr>
              <td><strong>Internal</strong></td>
              <td>Update the quoting reference in ~/norris-ops/internal/ so CB and every future quote default to the current spec.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Draft</span> <span class="rest">Email — To Jared Lemoine</span></h2>
        <div class="nu-section-rule"></div>
        <div class="email-draft">
          <div class="hdr">
            <span>To:</span> Jared Lemoine (Irby Construction)<br>
            <span>From:</span> Aaron C. Norris<br>
            <span>Subject:</span> Southern Company standards — current revision
          </div>
          <p class="no-indent">Jared —</p>
          <p>
            I am refreshing our Southern Company standards file and want to make sure every
            quote we send out of Norris Utilities® is written to the revision your crews are
            actually building to in the field today.
          </p>
          <p>
            When you have a few minutes, could you point me to the current approved-material
            list for aerial-device accessories and for rope &amp; rigging — along with the
            revision date so I have a clean reference on file?
          </p>
          <p>
            If there is a standards owner on the Southern Company side you would rather I
            contact directly, I am happy to go that route. I just want to start with you
            since Irby is closest to what is happening on the lines right now.
          </p>
          <p>
            Appreciate you.
          </p>
          <p class="no-indent">Sincerely,</p>
          <div class="signature">
            Aaron C. Norris<br>
            Founder &amp; CEO, Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
        <div class="btn-row">
          <a class="nu-btn-primary" href="mailto:?subject=Southern%20Company%20standards%20%E2%80%94%20current%20revision">Open in Mail</a>
          <a class="nu-btn-secondary" href="#">Copy Draft</a>
        </div>
      </section>

      <!-- SECTION: DEFINITION OF DONE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Definition</span> <span class="rest">of Done</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <ul class="checklist">
            <li>Current Southern Company approved-material lists are saved in <strong>~/norris-ops/internal/</strong> with the revision date in the filename.</li>
            <li>Change log vs. the previous revision is summarized in one page and flags every line that touches Norris products.</li>
            <li>Named standards owner is recorded for future submissions.</li>
            <li>Quoting reference is updated so CB, Aaron, and future quotes default to the current spec.</li>
            <li>Any Norris SKU not on the approved list has an approval-submission request open.</li>
          </ul>
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
    <div class="nu-footer-small">Phoenix Icon® &nbsp;·&nbsp; Birmingham, Alabama &nbsp;·&nbsp; Serving 20+ states</div>
  </footer>

</body>
</html>