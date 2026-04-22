<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Call H2O Waterproofing Before Closing — Norris Utilities®</title>
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
      --nu-red: #C23B22;
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
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 60vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TASK BANNER */
    .task-banner {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 40px;
      box-shadow: 0 8px 24px rgba(0, 51, 204, 0.2);
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .task-banner-icon {
      width: 56px;
      height: 56px;
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      flex-shrink: 0;
    }
    .task-banner-text { flex: 1; }
    .task-banner-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .task-banner-title {
      font-size: 1.35rem;
      font-weight: 900;
      line-height: 1.3;
    }
    .task-banner-priority {
      background: var(--nu-red);
      color: var(--nu-white);
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* SECTION HEADER */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      margin-top: 36px;
    }
    .nu-section-title-blue {
      color: #0033cc;
    }
    .nu-section-title-dark {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* CONTEXT CARD */
    .context-card {
      background: linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      margin-bottom: 36px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .context-card p {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .context-card p:last-child { margin-bottom: 0; }
    .context-card strong { color: var(--nu-dark-text); font-weight: 700; }

    /* QUESTION GRID */
    .question-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
    .question-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 20px 24px;
      display: flex;
      gap: 18px;
      align-items: flex-start;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .question-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      border-left-color: var(--nu-blue);
    }
    .question-number {
      background: linear-gradient(135deg, #0033cc 0%, #0066ee 100%);
      color: var(--nu-white);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .question-body { flex: 1; }
    .question-text {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 6px;
    }
    .question-note {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* WRITTEN RECORD BOX */
    .written-box {
      background: #FFF8E1;
      border: 2px dashed var(--nu-accent-gold);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 32px 0;
    }
    .written-box-title {
      font-weight: 900;
      color: #8B6F00;
      font-size: 1.05rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .written-box p {
      font-size: 0.95rem;
      color: #5C4A00;
      margin-bottom: 8px;
    }
    .written-box p:last-child { margin-bottom: 0; }

    /* CALL LOG */
    .call-log {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      margin-top: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .log-row {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 16px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .log-row:last-child { border-bottom: none; }
    .log-label {
      font-weight: 700;
      color: var(--nu-dark-text);
      letter-spacing: 0.02em;
    }
    .log-value {
      color: var(--nu-body-text);
      min-height: 1.4em;
      border-bottom: 1px dotted #ccc;
      padding-bottom: 2px;
    }

    /* ACTION ROW */
    .action-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    .nu-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 28px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* STATUS BADGE */
    .status-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
    }
    .status-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      letter-spacing: 0.03em;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--nu-red);
    }
    .status-dot.open { background: var(--nu-red); }
    .status-dot.high { background: #F59E0B; }
    .status-dot.source { background: var(--nu-blue); }

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
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 20px 60px; }
      .task-banner { flex-direction: column; text-align: center; }
      .log-row { grid-template-columns: 1fr; gap: 4px; }
      .log-value { border-bottom: 1px solid #ccc; padding: 4px 0; }
      .nu-section-title { font-size: 1.3rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-row { display: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-icon">📞</div>
        <div class="task-banner-text">
          <div class="task-banner-label">Action Item — reMarkable</div>
          <div class="task-banner-title">Call H2O Waterproofing Before Closing — Get It in Writing</div>
        </div>
        <div class="task-banner-priority">Before Closing</div>
      </div>

      <!-- STATUS CHIPS -->
      <div class="status-row">
        <span class="status-chip"><span class="status-dot open"></span> Status: Open</span>
        <span class="status-chip"><span class="status-dot high"></span> Priority: High</span>
        <span class="status-chip"><span class="status-dot source"></span> Source: reMarkable</span>
        <span class="status-chip">Owner: Aaron C. Norris</span>
        <span class="status-chip">Date: 2026-04-22</span>
      </div>

      <!-- CONTEXT -->
      <h2 class="nu-section-title"><span class="nu-section-title-blue">Why</span> <span class="nu-section-title-dark">This Call Matters</span></h2>
      <div class="nu-section-rule"></div>
      <div class="context-card">
        <p>Before the real estate closing on the 7,098 sq ft estate at 4505 Butterworth, any basement or foundation waterproofing representations made by H2O Waterproofing must be <strong>verified verbally AND captured in writing</strong>.</p>
        <p>Verbal assurances from a contractor are not enforceable after closing. The objective of this call is to convert every verbal claim into a written record — on H2O Waterproofing letterhead, email, or invoice — that can be produced later if a warranty claim is made.</p>
        <p><strong>Rule:</strong> No closing proceeds without written confirmation of transfer terms, scope of prior work, and remaining warranty coverage.</p>
      </div>

      <!-- QUESTIONS -->
      <h2 class="nu-section-title"><span class="nu-section-title-blue">Questions</span> <span class="nu-section-title-dark">to Ask on the Call</span></h2>
      <div class="nu-section-rule"></div>

      <div class="question-list">

        <div class="question-item">
          <div class="question-number">1</div>
          <div class="question-body">
            <div class="question-text">What work was performed at 4505 Butterworth, and when?</div>
            <div class="question-note">Full scope — interior drains, exterior membrane, sump pump(s), foundation crack injection, vapor barrier, egress systems. Dates and invoice numbers.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">2</div>
          <div class="question-body">
            <div class="question-text">Is the warranty transferable to a new owner?</div>
            <div class="question-note">Many waterproofing warranties become void the moment the home transfers unless a formal transfer is processed. Get the answer on the call and in writing.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">3</div>
          <div class="question-body">
            <div class="question-text">What is the warranty transfer process and fee?</div>
            <div class="question-note">Request the exact form, fee amount, and who pays (seller or buyer). Previously flagged as an open item — confirm the current 2026 figure, not an old quote.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">4</div>
          <div class="question-body">
            <div class="question-text">What is the remaining term of the warranty?</div>
            <div class="question-note">Start date, end date, and whether it is a lifetime, transferable-once, or term-limited warranty. Get the original warranty document emailed.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">5</div>
          <div class="question-body">
            <div class="question-text">What is covered and what is excluded?</div>
            <div class="question-note">Specifically ask about: cracks not treated, window wells, sump pump failure, groundwater vs. surface water, mold remediation. Exclusions are always where the gap lives.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">6</div>
          <div class="question-body">
            <div class="question-text">Are there any open service tickets, unpaid balances, or incomplete items?</div>
            <div class="question-note">An open ticket can be assigned at closing. An unpaid balance could become a lien. Force clarity before signing.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">7</div>
          <div class="question-body">
            <div class="question-text">Who is the responsible contact after transfer?</div>
            <div class="question-note">Name, direct phone, direct email. If H2O gets acquired or changes hands, the warranty record should already name the company entity, not just a person.</div>
          </div>
        </div>

        <div class="question-item">
          <div class="question-number">8</div>
          <div class="question-body">
            <div class="question-text">What is the response-time commitment if water intrudes?</div>
            <div class="question-note">Written service-level commitment — 24 hours, 72 hours, next business day? Also: emergency after-hours number.</div>
          </div>
        </div>

      </div>

      <!-- GET IN WRITING -->
      <div class="written-box">
        <div class="written-box-title">GET IN WRITING — Non-Negotiable</div>
        <p>Request that H2O Waterproofing email the following before closing, addressed to Aaron C. Norris at <strong>acnorris@norrisutilities.com</strong>:</p>
        <p>• Copy of the original warranty document and any service/invoice history for 4505 Butterworth.</p>
        <p>• Warranty transfer form with fee schedule and processing timeline.</p>
        <p>• Written confirmation of remaining term, coverage scope, and exclusions.</p>
        <p>• Statement of any open tickets, unpaid balances, or pending work — in writing, even if the answer is "none."</p>
        <p>• Name, direct phone, and direct email of the post-close service contact.</p>
      </div>

      <!-- CALL LOG -->
      <h2 class="nu-section-title"><span class="nu-section-title-blue">Call</span> <span class="nu-section-title-dark">Record — Fill In</span></h2>
      <div class="nu-section-rule"></div>
      <div class="call-log">
        <div class="log-row"><div class="log-label">Date of Call</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Time</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">H2O Contact Name</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Title / Role</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Direct Phone</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Direct Email</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Transfer Fee Quoted</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Warranty End Date</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Written Confirmation Received</div><div class="log-value"></div></div>
        <div class="log-row"><div class="log-label">Follow-Up Required</div><div class="log-value"></div></div>
      </div>

      <!-- ACTIONS -->
      <div class="action-row">
        <a href="tel:" class="nu-btn-primary">📞 Place the Call</a>
        <a href="mailto:?subject=4505%20Butterworth%20-%20Waterproofing%20Warranty%20Transfer%20-%20Please%20Confirm%20in%20Writing&body=Hello%20%E2%80%94%0A%0AI%20am%20closing%20on%20the%20home%20at%204505%20Butterworth.%20Before%20closing%2C%20please%20confirm%20the%20following%20in%20writing%3A%0A%0A%E2%80%A2%20Full%20scope%20of%20prior%20waterproofing%20work%20and%20invoice%20history%0A%E2%80%A2%20Warranty%20transfer%20process%2C%20form%2C%20and%20fee%0A%E2%80%A2%20Remaining%20warranty%20term%2C%20coverage%2C%20and%20exclusions%0A%E2%80%A2%20Any%20open%20tickets%20or%20unpaid%20balances%0A%E2%80%A2%20Post-close%20service%20contact%20(name%2C%20phone%2C%20email)%0A%0APlease%20email%20the%20original%20warranty%20document%20and%20the%20transfer%20form%20at%20your%20earliest%20convenience.%0A%0ASincerely%2C%0A%0AAaron%20C.%20Norris" class="nu-btn-secondary">✉️ Draft Follow-Up Email</a>
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