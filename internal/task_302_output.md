<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
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

    /* ══ HEADER ══ */
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark */
    .nu-header .phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 400px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 60px 40px 20px;
      position: relative;
      z-index: 1;
    }

    /* ══ TASK BANNER ══ */
    .task-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 24px;
      box-shadow: 0 8px 24px rgba(0,0,51,0.18);
    }
    .task-banner-icon {
      flex-shrink: 0;
      width: 56px; height: 56px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.5rem;
    }
    .task-banner-text .eyebrow {
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .task-banner-text h1 {
      font-weight: 900;
      font-size: 1.35rem;
      letter-spacing: 0.01em;
      line-height: 1.3;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      height: 3px;
      width: 48px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
    }

    /* ══ DETAIL CARDS ══ */
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .detail-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 18px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .detail-card .label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #0033cc;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .detail-card .value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.4;
      word-break: break-word;
    }
    .detail-card .value.mono {
      font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }

    /* ══ PRIORITY BADGE ══ */
    .priority-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 3px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .priority-badge::before {
      content: '';
      width: 8px; height: 8px;
      background: var(--nu-white);
      border-radius: 50%;
    }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 14px 16px 14px 52px;
      background: var(--nu-light-gray);
      border-radius: 4px;
      margin-bottom: 10px;
      border-left: 3px solid var(--nu-cyan);
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      transition: background 0.15s ease;
    }
    .checklist li:hover { background: #EEF2FF; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li .step-number {
      display: inline-block;
      color: var(--nu-blue);
      font-weight: 900;
      margin-right: 8px;
    }

    /* ══ CONTEXT BOX ══ */
    .context-box {
      background: linear-gradient(135deg, #F8F9FF 0%, #EEF2FF 100%);
      border: 1px solid #C7D2FE;
      border-radius: 6px;
      padding: 24px 28px;
      margin-bottom: 24px;
    }
    .context-box p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 12px;
    }
    .context-box p:last-child { margin-bottom: 0; }
    .context-box strong { color: #0033cc; font-weight: 700; }

    /* ══ INSTRUMENT NUMBER CALLOUT ══ */
    .instrument-callout {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 20px 28px;
      border-radius: 6px;
      text-align: center;
      margin-bottom: 24px;
    }
    .instrument-callout .label {
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 8px;
    }
    .instrument-callout .number {
      font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: var(--nu-white);
    }

    /* ══ ACTION BAR ══ */
    .action-bar {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .nu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 2px solid transparent;
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
      border-color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 20px; }
      .task-banner { flex-direction: column; text-align: center; padding: 20px; }
      .task-banner-icon { margin: 0 auto; }
      .instrument-callout .number { font-size: 1.2rem; }
      .detail-grid { grid-template-columns: 1fr; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .action-bar { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-icon">📜</div>
        <div class="task-banner-text">
          <div class="eyebrow">reMarkable Action Item</div>
          <h1>Pull the 2018 Compass Bank → McKnight Deed</h1>
        </div>
      </div>

      <!-- PRIORITY + METADATA CARDS -->
      <section class="nu-section">
        <div class="detail-grid">
          <div class="detail-card">
            <div class="label">Priority</div>
            <div class="value"><span class="priority-badge">High</span></div>
          </div>
          <div class="detail-card">
            <div class="label">Status</div>
            <div class="value">Open — Not Yet Pulled</div>
          </div>
          <div class="detail-card">
            <div class="label">Source</div>
            <div class="value">reMarkable Notebook</div>
          </div>
          <div class="detail-card">
            <div class="label">Logged</div>
            <div class="value">2026-04-24</div>
          </div>
          <div class="detail-card">
            <div class="label">Document Type</div>
            <div class="value">Recorded Deed</div>
          </div>
          <div class="detail-card">
            <div class="label">Recording Year</div>
            <div class="value">2018</div>
          </div>
        </div>
      </section>

      <!-- INSTRUMENT CALLOUT -->
      <div class="instrument-callout">
        <div class="label">Instrument Number</div>
        <div class="number">20180426000141760</div>
      </div>

      <!-- ACTION DETAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Required</span></h2>
        <div class="nu-section-rule"></div>
        <div class="context-box">
          <p><strong>Pull the 2018 Compass Bank → McKnight deed</strong> recorded under <strong>Instrument 20180426000141760</strong> from probate court records.</p>
          <p>This is a recorded document search. The instrument number encodes the recording date <strong>2018-04-26</strong>, which identifies the deed conveying title from Compass Bank to McKnight.</p>
          <p>Retrieve a certified or certified-copy-ready PDF and file it in the deed research folder for review alongside the 4505 Butterwood estate negotiation file.</p>
        </div>
      </section>

      <!-- WHERE TO PULL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Where</span> <span class="rest">to Pull It From</span></h2>
        <div class="nu-section-rule"></div>
        <div class="detail-grid">
          <div class="detail-card">
            <div class="label">Primary Source</div>
            <div class="value">Jefferson County AL Probate Court — Land Records</div>
          </div>
          <div class="detail-card">
            <div class="label">Online Portal</div>
            <div class="value mono">jeffconline.jccal.org</div>
          </div>
          <div class="detail-card">
            <div class="label">Search By</div>
            <div class="value">Instrument Number</div>
          </div>
          <div class="detail-card">
            <div class="label">Fallback Source</div>
            <div class="value">Shelby County Probate (if parcel falls outside Jefferson)</div>
          </div>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Step-by-Step</span> <span class="rest">Retrieval</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="checklist">
          <li><span class="step-number">01.</span>Open Jefferson County Probate Court online land-records portal.</li>
          <li><span class="step-number">02.</span>Select "Search by Instrument Number" and enter <strong>20180426000141760</strong>.</li>
          <li><span class="step-number">03.</span>Confirm the grantor reads "Compass Bank" and grantee reads "McKnight" before purchasing the copy.</li>
          <li><span class="step-number">04.</span>Download the PDF of the recorded deed (all pages, including any exhibits or legal description).</li>
          <li><span class="step-number">05.</span>Save to the deed research folder as <strong>2018-04-26_CompassBank-to-McKnight_Inst-20180426000141760.pdf</strong>.</li>
          <li><span class="step-number">06.</span>Cross-reference the legal description against the 4505 Butterwood estate parcel.</li>
          <li><span class="step-number">07.</span>Flag any encumbrances, easements, or reservations in the deed for Aaron's review.</li>
          <li><span class="step-number">08.</span>Log completion in the master tracker and close this action item.</li>
        </ul>
      </section>

      <!-- WHY THIS MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
        <div class="nu-section-rule"></div>
        <div class="context-box">
          <p>The 2018 Compass Bank → McKnight deed is a <strong>title-history link</strong> in the chain of ownership being evaluated for the 7,098 sq ft estate negotiation at 4505 Butterwood.</p>
          <p>Pulling the actual recorded instrument — rather than relying on a title summary — surfaces the <strong>exact legal description, easements, and any reservations</strong> that carry forward to the current title. Gaps or defects found here directly affect the purchase price and closing conditions.</p>
          <p>This action is <strong>blocking</strong> for any formal offer or counter-offer tied to the Butterwood estate review.</p>
        </div>
      </section>

      <!-- RELATED -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Related</span> <span class="rest">Items</span></h2>
        <div class="nu-section-rule"></div>
        <div class="detail-grid">
          <div class="detail-card">
            <div class="label">Linked Deal</div>
            <div class="value">4505 Butterwood Estate — Negotiate Purchase</div>
          </div>
          <div class="detail-card">
            <div class="label">Parent Notebook</div>
            <div class="value">reMarkable — Real Estate / Title Research</div>
          </div>
          <div class="detail-card">
            <div class="label">Owner</div>
            <div class="value">Aaron C. Norris</div>
          </div>
          <div class="detail-card">
            <div class="label">Next Review</div>
            <div class="value">Upon retrieval — same day</div>
          </div>
        </div>
      </section>

      <!-- ACTION BAR -->
      <div class="action-bar">
        <a href="https://jeffconline.jccal.org" target="_blank" rel="noopener" class="nu-btn nu-btn-primary">Open Probate Portal</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Deed%20Retrieved%20%E2%80%94%20Inst%2020180426000141760" class="nu-btn nu-btn-secondary">Email Aaron When Pulled</a>
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