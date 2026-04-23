<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
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
      --nu-alert-red: #B91C1C;
      --nu-success-green: #15803D;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* Chevron — asymmetric apex at ~38% */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* Ghost phoenix watermark area */
    .nu-content-wrap {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-wrap::before {
      content: '';
      position: absolute;
      top: 8%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 700px;
      height: 700px;
      background-image: radial-gradient(circle at center, rgba(0, 51, 204, 0.04) 0%, transparent 60%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1060px;
      margin: 0 auto;
      padding: 56px 32px 72px;
    }

    /* Action item banner */
    .action-banner {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 36px;
      box-shadow: 0 6px 24px rgba(0, 51, 204, 0.18);
      display: flex;
      align-items: center;
      gap: 22px;
    }
    .action-banner-icon {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      fill: var(--nu-cyan);
    }
    .action-banner-text .label {
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .action-banner-text h1 {
      font-size: 1.55rem;
      font-weight: 900;
      letter-spacing: 0.01em;
      line-height: 1.25;
    }

    /* Section headers */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.01em;
      margin-bottom: 14px;
      line-height: 1.2;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section { margin-bottom: 40px; }

    /* Summary card */
    .summary-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      margin-bottom: 32px;
    }
    .summary-card p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .summary-card p:last-child { margin-bottom: 0; }

    /* Quick-facts grid */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      margin-bottom: 12px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-card .label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .fact-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .fact-card .value.small { font-size: 0.95rem; font-weight: 400; color: var(--nu-body-text); }

    /* Steps list */
    .steps {
      list-style: none;
      counter-reset: step-counter;
      margin: 0;
      padding: 0;
    }
    .step {
      counter-increment: step-counter;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px 22px 80px;
      margin-bottom: 14px;
      position: relative;
      box-shadow: 0 1px 6px rgba(0,0,0,0.03);
      transition: box-shadow 0.2s ease;
    }
    .step:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.07); }
    .step::before {
      content: counter(step-counter);
      position: absolute;
      top: 20px; left: 20px;
      width: 44px; height: 44px;
      background: linear-gradient(135deg, var(--nu-blue), #0033cc);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.15rem;
      box-shadow: 0 3px 10px rgba(0, 51, 204, 0.25);
    }
    .step h3 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
      letter-spacing: 0.005em;
    }
    .step p {
      font-size: 0.97rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .step p:last-child { margin-bottom: 0; }
    .step .meta {
      display: inline-block;
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-right: 8px;
      margin-top: 6px;
    }
    .step a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
      border-bottom: 1px solid rgba(0,0,255,0.25);
    }
    .step a:hover { border-bottom-color: var(--nu-blue); }

    /* Chevron badge for resources */
    .resource-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 0 10px 12px 0;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
    }
    .resource-badge svg {
      width: 22px; height: 22px;
      margin-right: 10px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* Context / why it matters */
    .why-box {
      background: linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%);
      border: 1px solid #d6e2ff;
      border-radius: 8px;
      padding: 24px 26px;
    }
    .why-box h3 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .why-box p { font-size: 0.98rem; margin-bottom: 8px; }
    .why-box p:last-child { margin-bottom: 0; }

    /* Checklist for what a complete pull returns */
    .deliverables {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 26px;
    }
    .deliverables ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .deliverables li {
      padding: 10px 0 10px 34px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .deliverables li:last-child { border-bottom: none; }
    .deliverables li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* Flag / alert */
    .flag {
      background: #fff7ed;
      border-left: 5px solid #f59e0b;
      border-radius: 6px;
      padding: 16px 20px;
      margin-top: 14px;
      font-size: 0.95rem;
      color: #78350f;
    }
    .flag strong { color: #92400e; }

    /* Buttons */
    .btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
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
      box-shadow: 0 4px 14px rgba(0, 0, 255, 0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* Footer */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 46px 40px;
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
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 40px 20px 56px; }
      .action-banner { flex-direction: column; align-items: flex-start; padding: 22px; }
      .action-banner-text h1 { font-size: 1.3rem; }
      .step { padding: 22px 18px 22px 18px; }
      .step::before { position: static; margin-bottom: 10px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .btn-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <div class="nu-content-wrap">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <svg class="action-banner-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2.5L18.5 9H14V4.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h4v2H8V9z" />
        </svg>
        <div class="action-banner-text">
          <div class="label">reMarkable Action Item</div>
          <h1>Pull the 2018 Compass Bank → McKnight Deed (Instrument 20180-…)</h1>
        </div>
      </div>

      <!-- SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">needs to happen</span></h2>
        <div class="summary-card">
          <p>Obtain a certified (or plain) copy of the 2018 recorded deed transferring title from <strong>Compass Bank</strong> to <strong>McKnight</strong>, referenced on the reMarkable note as <strong>Instrument 20180-…</strong> (full instrument number to be confirmed from the index).</p>
          <p>The deed is needed to verify the chain of title, confirm legal description, and build the closing file for the property due-diligence package currently in motion.</p>
        </div>
      </section>

      <!-- QUICK FACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">facts at a glance</span></h2>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="label">Grantor</div>
            <div class="value">Compass Bank</div>
          </div>
          <div class="fact-card">
            <div class="label">Grantee</div>
            <div class="value">McKnight</div>
          </div>
          <div class="fact-card">
            <div class="label">Year Recorded</div>
            <div class="value">2018</div>
          </div>
          <div class="fact-card">
            <div class="label">Instrument Number</div>
            <div class="value">20180-… <span style="font-weight:400;color:#777;">(confirm)</span></div>
          </div>
          <div class="fact-card">
            <div class="label">Recording Jurisdiction</div>
            <div class="value small">Jefferson County, AL Probate Court — Real Property Records (primary assumption; verify against the address on file)</div>
          </div>
          <div class="fact-card">
            <div class="label">Priority</div>
            <div class="value" style="color:#B91C1C;">Tied to active estate due-diligence</div>
          </div>
        </div>
      </section>

      <!-- WHY IT MATTERS -->
      <section class="nu-section">
        <div class="why-box">
          <h3>Why this matters</h3>
          <p>This deed is a link in the chain of title for the property under review. Without it, any title report, purchase negotiation, or lender submission remains incomplete and is exposed to an unrecorded-interest risk.</p>
          <p>Compass Bank became BBVA, which was acquired by PNC in 2021 — so the grantor on the face of the deed is a bank brand that no longer exists, which is a normal but often misread flag for buyers and lenders. Having the recorded instrument on file resolves that question in writing.</p>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Steps</span> <span class="rest">to pull the deed</span></h2>
        <ol class="steps">

          <li class="step">
            <h3>Confirm the full instrument number</h3>
            <p>The reMarkable note captured the prefix (20180-…) but not the full instrument. Pull the Jefferson County Probate Court grantor/grantee index and search <strong>Grantor: Compass Bank</strong>, <strong>Grantee: McKnight</strong>, <strong>Year: 2018</strong> to lock the exact number.</p>
            <span class="meta">~5 min</span>
            <span class="meta">Online search</span>
          </li>

          <li class="step">
            <h3>Verify the correct jurisdiction</h3>
            <p>If the subject property is outside Jefferson County, the deed will have been recorded in the county where the real property sits (Shelby, St. Clair, Tuscaloosa, etc.). Confirm the county of the property before paying for a copy.</p>
            <span class="meta">~5 min</span>
          </li>

          <li class="step">
            <h3>Order the certified copy</h3>
            <p>Order through the county Probate Court's online records portal (preferred — fastest) or in person at the Probate Office. Standard fee for a certified copy is typically <strong>$1.00 per page + $3.00 certification</strong> (Alabama Code §12-19-90); plain copies are <strong>$0.50/page</strong>. Deeds are usually 2–4 pages.</p>
            <span class="meta">~10 min online</span>
            <span class="meta">Certified preferred</span>
          </li>

          <li class="step">
            <h3>Save PDF to the property file</h3>
            <p>Save the PDF to <strong>~/norris-ops/internal/deeds/</strong> using the filename convention:<br>
            <code style="background:#f5f5f7;padding:3px 8px;border-radius:4px;font-size:0.9rem;">2018_compass-mcknight_inst-[number]_[county].pdf</code></p>
            <span class="meta">Push to GitHub per standard rule</span>
          </li>

          <li class="step">
            <h3>Log it into the property due-diligence tracker</h3>
            <p>Open the active property due-diligence checklist and mark "Prior deed (2018 Compass → McKnight)" as <strong>Retrieved</strong>, with date pulled and instrument number. Attach the PDF link.</p>
            <span class="meta">~3 min</span>
          </li>

          <li class="step">
            <h3>Read the deed and pull three things</h3>
            <p>Extract and record: (1) the <strong>full legal description</strong>, (2) the <strong>stated consideration</strong>, and (3) any <strong>restrictions, easements, or reservations</strong>. These are the pieces that will show up again in the title commitment and the purchase contract.</p>
            <span class="meta">~15 min</span>
          </li>

        </ol>

        <div class="flag">
          <strong>Heads up —</strong> if the deed was recorded by Compass Bank as a <em>foreclosure deed</em> or <em>deed in lieu</em>, the legal description may reference a prior mortgage that also needs to be pulled to close the chain. Flag that the moment it's visible on the face of the document.
        </div>
      </section>

      <!-- RESOURCES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Where</span> <span class="rest">to pull it</span></h2>
        <div>
          <div class="resource-badge">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Jefferson County Probate — Real Property
          </div>
          <div class="resource-badge">
            <svg viewBox="0 0 24 24"><path d="M21 10h-2V7a1 1 0 0 0-1-1h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11a1 1 0 0 0-1-1z"/></svg>
            Shelby County Probate — Real Property
          </div>
          <div class="resource-badge">
            <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z M9 9h6v6H9z"/></svg>
            AlabamaRecords.com (index search)
          </div>
          <div class="resource-badge">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/></svg>
            Title company (fallback)
          </div>
        </div>
      </section>

      <!-- DELIVERABLES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Deliverables</span> <span class="rest">that close this task</span></h2>
        <div class="deliverables">
          <ul>
            <li>Recorded PDF of the 2018 Compass Bank → McKnight deed, saved in <strong>~/norris-ops/internal/deeds/</strong></li>
            <li>Full instrument number captured and logged (replaces the "20180-…" placeholder)</li>
            <li>Legal description transcribed into the property file</li>
            <li>Consideration amount and any easements/restrictions noted</li>
            <li>Property due-diligence checklist updated with "Retrieved" status and date</li>
            <li>File pushed to the <strong>norris-ops</strong> GitHub repo per the permanent push rule</li>
          </ul>
        </div>
      </section>

      <!-- NEXT ACTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">actions for Aaron</span></h2>
        <div class="summary-card">
          <p><strong>Today:</strong> Open the Jefferson County Probate Court online records search and run the grantor/grantee lookup to confirm the full instrument number.</p>
          <p><strong>Same day:</strong> Order the certified copy online ($4.00 typical total for a 1-page deed; $7.00 for 4-page).</p>
          <p><strong>On receipt:</strong> Save to the deeds folder, transcribe the three key items, and close out the action item on the reMarkable.</p>
        </div>
        <div class="btn-row">
          <a href="#" class="nu-btn-primary">Open Jefferson County Records</a>
          <a href="#" class="nu-btn-secondary">Open Property File</a>
        </div>
      </section>

    </div>
  </div>

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