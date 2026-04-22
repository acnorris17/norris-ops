<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Written Confirmation — Norris Utilities®</title>
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
      --nu-alert-red: #D32F2F;
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
    .nu-header-inner { position: relative; z-index: 2; }

    /* GHOST PHOENIX */
    .nu-phoenix-ghost {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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

    /* CHEVRON TRANSITION */
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
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* PAGE TITLE */
    .nu-page-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 800px;
    }

    /* PRIORITY BANNER */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 20px 28px;
      margin-bottom: 40px;
      border-radius: 4px;
      border-left: 6px solid var(--nu-cyan);
    }
    .nu-priority-icon {
      font-size: 1.8rem;
      margin-right: 18px;
      color: var(--nu-cyan);
    }
    .nu-priority-text {
      flex: 1;
    }
    .nu-priority-text strong {
      display: block;
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .nu-priority-text span {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.92);
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* OBJECTIVE CARD */
    .nu-objective {
      background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
      border: 1px solid #d6e0ff;
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .nu-objective h3 {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-objective p {
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      line-height: 1.7;
    }

    /* TWO COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      .nu-grid-2 { grid-template-columns: 1fr; }
    }

    .nu-info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .nu-info-card h4 {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-info-card dl {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 8px 16px;
      font-size: 0.95rem;
    }
    .nu-info-card dt {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-info-card dd {
      color: var(--nu-body-text);
    }

    /* CALL SCRIPT */
    .nu-call-script {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 6px;
      padding: 0;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .nu-call-script-header {
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 24px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-call-script-body {
      padding: 24px 28px;
    }
    .nu-script-step {
      margin-bottom: 18px;
      padding-left: 42px;
      position: relative;
    }
    .nu-script-step:last-child { margin-bottom: 0; }
    .nu-script-step .num {
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .nu-script-step .label {
      display: block;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .nu-script-step .text {
      color: var(--nu-body-text);
      font-size: 0.97rem;
      line-height: 1.65;
    }
    .nu-script-step .text em {
      font-style: italic;
      color: var(--nu-navy);
    }

    /* CHECKLIST */
    .nu-checklist {
      background: #fbfcff;
      border: 1px solid #d6e0ff;
      border-radius: 6px;
      padding: 24px 28px;
      margin-bottom: 40px;
    }
    .nu-checklist h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
    }
    .nu-checklist ul {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      position: relative;
      padding: 10px 0 10px 38px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* REQUEST DETAILS */
    .nu-request-box {
      background: linear-gradient(135deg, #fffbea 0%, #fff5d6 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 28px;
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .nu-request-box h3 {
      font-size: 1rem;
      font-weight: 900;
      color: #8a6d1e;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-request-box p {
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      line-height: 1.7;
    }
    .nu-request-box ul {
      margin-top: 10px;
      padding-left: 22px;
    }
    .nu-request-box li {
      margin-bottom: 6px;
      color: var(--nu-dark-text);
    }

    /* OUTCOMES */
    .nu-outcomes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      .nu-outcomes { grid-template-columns: 1fr; }
    }
    .nu-outcome {
      padding: 20px;
      border-radius: 6px;
      text-align: center;
      border: 2px solid;
    }
    .nu-outcome.success {
      background: #e8f5e9;
      border-color: var(--nu-success-green);
      color: var(--nu-success-green);
    }
    .nu-outcome.partial {
      background: #fff8e1;
      border-color: var(--nu-alert-amber);
      color: #8a5a00;
    }
    .nu-outcome.followup {
      background: #fce4e4;
      border-color: var(--nu-alert-red);
      color: var(--nu-alert-red);
    }
    .nu-outcome h4 {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-outcome p {
      font-size: 0.92rem;
      line-height: 1.5;
      color: var(--nu-dark-text);
    }

    /* STATUS LOG */
    .nu-status-log {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .nu-status-log-header {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 24px;
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-status-log table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-status-log th,
    .nu-status-log td {
      padding: 12px 20px;
      text-align: left;
      font-size: 0.93rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-status-log th {
      background: var(--nu-light-gray);
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: 0.05em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-status-log td.label {
      font-weight: 700;
      color: var(--nu-blue);
      width: 180px;
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
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
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
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 20px 60px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-status-log td.label { width: auto; }
      .nu-status-log th, .nu-status-log td { padding: 10px 14px; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-info-card, .nu-call-script, .nu-checklist { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L110 35 L140 20 L120 50 L160 40 L130 70 L150 100 L110 80 L100 120 L90 80 L50 100 L70 70 L40 40 L80 50 L60 20 L90 35 Z" fill="white"/>
      <path d="M100 115 L105 140 L120 130 L110 150 L100 190 L90 150 L80 130 L95 140 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-page-label">Action Item · reMarkable Task</div>
      <h1 class="nu-page-title">Call <span>H2O Waterproofing</span><br>Obtain Written Confirmation of Work</h1>
      <p class="nu-page-subtitle">
        Follow-up call to secure written documentation that the waterproofing work was completed
        as scoped and agreed. Required for records, warranty tracking, and any future claim.
      </p>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-icon">●</div>
        <div class="nu-priority-text">
          <strong>Action Required · Open Item</strong>
          <span>Captured from reMarkable handwritten notes. Call placed the ball in H2O's court — written confirmation has not yet been received. Close this loop.</span>
        </div>
      </div>

      <!-- OBJECTIVE -->
      <div class="nu-objective">
        <h3>Objective</h3>
        <p>
          Contact H2O Waterproofing by phone and secure a <strong>written confirmation</strong>
          (email or signed document) stating that the waterproofing work was completed, the scope
          performed, the date of completion, and any warranty terms. Verbal assurance is not
          sufficient for the Norris Utilities® records file.
        </p>
      </div>

      <!-- KEY INFO GRID -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Call</span> <span class="rest">Details &amp; Context</span></h2>
        <div class="nu-grid-2">
          <div class="nu-info-card">
            <h4>Vendor</h4>
            <dl>
              <dt>Company:</dt><dd>H2O Waterproofing</dd>
              <dt>Scope:</dt><dd>Waterproofing work — completed</dd>
              <dt>Source:</dt><dd>reMarkable action capture</dd>
              <dt>Status:</dt><dd>Verbal only — no written confirmation on file</dd>
            </dl>
          </div>
          <div class="nu-info-card">
            <h4>Requester</h4>
            <dl>
              <dt>Name:</dt><dd>Aaron C. Norris</dd>
              <dt>Role:</dt><dd>Founder &amp; CEO</dd>
              <dt>Company:</dt><dd>Norris Utilities®, LLC</dd>
              <dt>Callback:</dt><dd>205-500-1343</dd>
            </dl>
          </div>
        </div>
      </section>

      <!-- CALL SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Call</span> <span class="rest">Script</span></h2>
        <div class="nu-call-script">
          <div class="nu-call-script-header">Five-Step Phone Script</div>
          <div class="nu-call-script-body">

            <div class="nu-script-step">
              <span class="num">1</span>
              <span class="label">Open — Identify Yourself</span>
              <span class="text">
                <em>"Hi, this is Aaron Norris with Norris Utilities calling. Is the person who
                handled our waterproofing job available?"</em>
              </span>
            </div>

            <div class="nu-script-step">
              <span class="num">2</span>
              <span class="label">State the Purpose Directly</span>
              <span class="text">
                <em>"I'm following up on the waterproofing work you completed for us. I need
                written confirmation for our records — either an email or a signed completion
                document."</em>
              </span>
            </div>

            <div class="nu-script-step">
              <span class="num">3</span>
              <span class="label">Specify What the Confirmation Must Contain</span>
              <span class="text">
                Scope of work performed · Date of completion · Materials/products used ·
                Warranty terms (if any) · Company letterhead or signature.
              </span>
            </div>

            <div class="nu-script-step">
              <span class="num">4</span>
              <span class="label">Set a Delivery Deadline</span>
              <span class="text">
                <em>"Can you have that sent over to acnorris@norrisutilities.com by end of
                business this week? That works best for our records."</em>
              </span>
            </div>

            <div class="nu-script-step">
              <span class="num">5</span>
              <span class="label">Close — Confirm and Log</span>
              <span class="text">
                Repeat back the commitment and the date. Thank them, log the call time,
                contact name, and expected delivery date on the Status Log below.
              </span>
            </div>

          </div>
        </div>
      </section>

      <!-- REQUEST DETAILS -->
      <div class="nu-request-box">
        <h3>What the Written Confirmation Must Include</h3>
        <p>When H2O sends the document, verify it contains every item below before filing.
        Missing items = incomplete record → request an amended copy.</p>
        <ul>
          <li>Vendor name, address, and contact info (on letterhead)</li>
          <li>Description of the waterproofing work performed</li>
          <li>Date work was completed</li>
          <li>Location/property the work was performed on</li>
          <li>Materials, coatings, or systems applied</li>
          <li>Warranty coverage and duration (if any)</li>
          <li>Signature or email-from-official-address of H2O representative</li>
        </ul>
      </div>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <div class="nu-checklist">
          <h3>Pre-Call &amp; Post-Call Checklist</h3>
          <ul>
            <li><strong>Before calling:</strong> Pull the original work order, invoice, or any prior email chain with H2O so dates and scope can be confirmed on the phone.</li>
            <li><strong>Before calling:</strong> Have a pen ready — note the name of the person you speak with and the time of the call.</li>
            <li><strong>During call:</strong> Confirm the correct email address (<em>acnorris@norrisutilities.com</em>) for delivery of the document.</li>
            <li><strong>During call:</strong> Ask whether confirmation will arrive by email (preferred) or physical mail.</li>
            <li><strong>After call:</strong> Update the Status Log below with date, contact name, and promised delivery date.</li>
            <li><strong>After call:</strong> Set a calendar reminder 48 hours after the promised delivery to follow up if nothing arrives.</li>
            <li><strong>When document arrives:</strong> Verify all required items are present, then file under vendor records.</li>
          </ul>
        </div>
      </section>

      <!-- OUTCOMES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Possible</span> <span class="rest">Outcomes</span></h2>
        <div class="nu-outcomes">
          <div class="nu-outcome success">
            <h4>Best Case</h4>
            <p>H2O agrees to email written confirmation within 24–48 hours. Log promise, wait, verify contents, file.</p>
          </div>
          <div class="nu-outcome partial">
            <h4>Partial</h4>
            <p>H2O needs time to prepare the document. Set firm deadline, log it, set 48-hour follow-up reminder.</p>
          </div>
          <div class="nu-outcome followup">
            <h4>Escalation</h4>
            <p>H2O is unresponsive or refuses. Document the refusal, escalate via certified mail requesting written confirmation.</p>
          </div>
        </div>
      </section>

      <!-- STATUS LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Status</span> <span class="rest">Log</span></h2>
        <div class="nu-status-log">
          <div class="nu-status-log-header">Track Progress Until Closed</div>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="label">Call Date / Time</td><td>____________________________</td></tr>
              <tr><td class="label">Person Spoken To</td><td>____________________________</td></tr>
              <tr><td class="label">Promised Delivery</td><td>____________________________</td></tr>
              <tr><td class="label">Delivery Method</td><td>Email &nbsp;☐ &nbsp; Mail &nbsp;☐ &nbsp; Other: __________</td></tr>
              <tr><td class="label">Received Date</td><td>____________________________</td></tr>
              <tr><td class="label">All Required Items Present?</td><td>Yes ☐ &nbsp; No ☐ &nbsp; If no, requested amendment on: __________</td></tr>
              <tr><td class="label">Filed Location</td><td>____________________________</td></tr>
              <tr><td class="label">Item Closed?</td><td>Yes ☐ &nbsp; Date: __________</td></tr>
            </tbody>
          </table>
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