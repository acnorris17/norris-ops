<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compass Bank → McKnight Deed Pull — Action Item — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E8A317;
      --nu-success-green: #1E8449;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 520px;
      opacity: 0.07;
      z-index: 1 !important;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 14px;
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
      position: relative;
      z-index: 1;
    }

    /* BREADCRUMB / LABEL BAR */
    .action-label-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .action-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .action-chip.source {
      background: var(--nu-blue);
    }
    .action-chip.priority {
      background: var(--nu-alert-amber);
      color: var(--nu-navy);
    }
    .action-chip.status {
      background: var(--nu-white);
      color: var(--nu-navy);
      border: 2px solid var(--nu-navy);
    }
    .action-date {
      margin-left: auto;
      font-size: 0.9rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .action-date strong { color: var(--nu-navy); font-weight: 900; }

    /* PAGE TITLE */
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }
    .page-title .prefix {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 780px;
    }

    /* SECTION STYLING */
    section { margin-bottom: 44px; }
    .section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .section-header h2 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
    }
    .section-header h2 .lead {
      color: var(--nu-blue);
      margin-right: 6px;
    }
    .section-number {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.85rem;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.1em;
    }

    /* WHAT-IT-IS CALLOUT */
    .callout-what {
      background: linear-gradient(135deg, #fafbff 0%, #eef3ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 28px;
      font-size: 1.02rem;
      line-height: 1.65;
    }
    .callout-what strong { color: var(--nu-navy); }

    /* KEY FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .fact-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
      word-wrap: break-word;
    }
    .fact-value .small {
      display: block;
      font-size: 0.82rem;
      font-weight: 400;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* STEPS / CHECKLIST */
    .steps-list {
      list-style: none;
      counter-reset: step;
    }
    .steps-list li {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 18px 22px 18px 68px;
      margin-bottom: 12px;
      border-radius: 6px;
      position: relative;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .steps-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 18px;
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .steps-list li .step-title {
      display: block;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .steps-list li .step-detail {
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .steps-list li .step-detail code {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      padding: 1px 6px;
      border-radius: 3px;
      font-family: 'Menlo', 'Consolas', monospace;
      font-size: 0.88rem;
      color: var(--nu-navy);
    }

    /* PROBATE CONTEXT BOX */
    .probate-box {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 26px 30px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .probate-box::before {
      content: '';
      position: absolute;
      top: -40px; right: -40px;
      width: 180px; height: 180px;
      background: radial-gradient(circle, rgba(6,208,255,0.15) 0%, transparent 70%);
    }
    .probate-box h3 {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 14px;
      position: relative;
    }
    .probate-box p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.92);
      margin-bottom: 10px;
      position: relative;
    }
    .probate-box .note {
      font-size: 0.86rem;
      color: rgba(255,255,255,0.7);
      font-style: italic;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,0.15);
      position: relative;
    }

    /* WHY IT MATTERS */
    .why-matters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .why-card {
      background: var(--nu-light-gray);
      padding: 20px 22px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .why-card h4 {
      font-size: 0.82rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .why-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* DELIVERABLES LIST */
    .deliv-list {
      list-style: none;
    }
    .deliv-list li {
      padding: 12px 0 12px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .deliv-list li:last-child { border-bottom: none; }
    .deliv-list li::before {
      content: '';
      position: absolute;
      left: 4px; top: 16px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .deliv-list li strong { color: var(--nu-navy); }

    /* NEXT STEP CTA */
    .next-step {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 60%, var(--nu-cyan) 120%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 10px;
      text-align: center;
      margin-top: 20px;
    }
    .next-step h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .next-step p {
      font-size: 1rem;
      margin-bottom: 18px;
      opacity: 0.95;
    }
    .next-step .buttons {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .next-step a {
      background: var(--nu-white);
      color: var(--nu-blue);
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      transition: all 0.2s ease;
    }
    .next-step a:hover {
      background: var(--nu-navy);
      color: var(--nu-cyan);
      transform: translateY(-1px);
    }
    .next-step a.secondary {
      background: transparent;
      color: var(--nu-white);
      border: 2px solid var(--nu-white);
    }
    .next-step a.secondary:hover {
      background: var(--nu-white);
      color: var(--nu-blue);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.12);
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 22px 56px; }
      .page-title { font-size: 1.7rem; }
      .action-date { margin-left: 0; width: 100%; }
      .section-header { flex-wrap: wrap; }
      .steps-list li { padding-left: 62px; }
      .next-step { padding: 24px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .next-step a { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#ffffff"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#ffffff"/>
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- LABEL BAR -->
      <div class="action-label-bar">
        <span class="action-chip source">reMarkable Action</span>
        <span class="action-chip">Legal / Probate</span>
        <span class="action-chip priority">Priority · Medium-High</span>
        <span class="action-chip status">Status · Open</span>
        <span class="action-date">Captured <strong>2026-04-08</strong> · Due <strong>ASAP</strong></span>
      </div>

      <!-- TITLE -->
      <h1 class="page-title">
        <span class="prefix">Pull</span> the 2018 Compass Bank &rarr; McKnight Deed
      </h1>
      <p class="page-subtitle">
        Retrieve and file the recorded deed instrument so it is attached to the McKnight probate matter and available for the title review workflow.
      </p>

      <!-- WHAT IT IS -->
      <div class="callout-what">
        <strong>What this is:</strong> An action item captured from the reMarkable notebook on 2026-04-08 directing that
        the <strong>2018 Compass Bank &rarr; McKnight deed</strong> — recorded as <strong>Instrument 20180426000141760</strong> —
        be pulled from the probate / Jefferson County record set, verified, and filed into the Norris Utilities® legal workspace so it can be referenced
        in the ongoing McKnight title chain review.
      </div>

      <!-- KEY FACTS -->
      <section>
        <div class="section-header">
          <span class="section-number">01</span>
          <h2><span class="lead">Key</span> Facts</h2>
        </div>
        <div class="facts-grid">
          <div class="fact-card">
            <div class="fact-label">Instrument Number</div>
            <div class="fact-value">20180426000141760
              <span class="small">Recorded April 26, 2018</span>
            </div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Grantor</div>
            <div class="fact-value">Compass Bank
              <span class="small">Successor / beneficiary of trust deed</span>
            </div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Grantee</div>
            <div class="fact-value">McKnight
              <span class="small">Named party — connects to probate matter</span>
            </div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Record Year</div>
            <div class="fact-value">2018
              <span class="small">8 years of chain-of-title downstream</span>
            </div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Source of Task</div>
            <div class="fact-value">reMarkable Scan
              <span class="small">Captured 2026-04-08 · rm-2026-04-13 source file</span>
            </div>
          </div>
          <div class="fact-card">
            <div class="fact-label">Workstream</div>
            <div class="fact-value">McKnight Probate
              <span class="small">Title / legal review — not revenue-bearing</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PROBATE CONTEXT -->
      <section>
        <div class="section-header">
          <span class="section-number">02</span>
          <h2><span class="lead">Probate</span> Context</h2>
        </div>
        <div class="probate-box">
          <h3>Why this deed is load-bearing</h3>
          <p>
            The 2018 Compass Bank &rarr; McKnight deed sits on the McKnight chain of title. Before the probate matter can close or
            any downstream action can be taken against the property, the recorded instrument has to be in hand — not referenced, not summarized — so
            every subsequent conveyance, lien release, and encumbrance can be walked forward from a verified starting point.
          </p>
          <p>
            Compass Bank was subsequently rebranded as BBVA and then merged into PNC Bank in 2021. Because of those institutional changes, any later
            assignments, releases, or satisfactions tied to this instrument may show <em>BBVA</em> or <em>PNC</em> as the party of record — the 2018
            instrument is the anchor that ties those later documents back to a single origin.
          </p>
          <p class="note">
            Captured from the reMarkable notebook as a standalone action item — this file is the working record for the deed pull and should be
            updated as each step below is completed.
          </p>
        </div>
      </section>

      <!-- STEPS -->
      <section>
        <div class="section-header">
          <span class="section-number">03</span>
          <h2><span class="lead">How</span> to Pull the Deed</h2>
        </div>
        <ol class="steps-list">
          <li>
            <span class="step-title">Open the Jefferson County Probate Court online record search</span>
            <span class="step-detail">
              Go to the Jefferson County, Alabama probate office records portal and search by instrument number
              <code>20180426000141760</code>. The leading <code>2018</code> identifies the year; the remaining digits are the sequence and book/page key.
            </span>
          </li>
          <li>
            <span class="step-title">Confirm parties and property description match</span>
            <span class="step-detail">
              Verify Grantor reads <strong>Compass Bank</strong>, Grantee reads <strong>McKnight</strong>, and the legal description ties to the
              parcel currently under review. If any field is a mismatch, stop and flag — the instrument number may have been mis-transcribed on the
              reMarkable page.
            </span>
          </li>
          <li>
            <span class="step-title">Purchase and download the certified PDF</span>
            <span class="step-detail">
              Pay the standard per-page recording fee, download the certified copy, and save the file exactly as
              <code>2018-compass-mcknight-deed-20180426000141760.pdf</code>. The filename must include the instrument number so it is searchable alongside
              future assignments.
            </span>
          </li>
          <li>
            <span class="step-title">File the PDF into the McKnight probate workspace</span>
            <span class="step-detail">
              Upload the certified PDF into the <strong>/legal/mcknight/deeds/</strong> folder in the operations portal. Add a short header note with
              the date pulled, who pulled it, and a one-line summary of the conveyance. Do not rename once filed.
            </span>
          </li>
          <li>
            <span class="step-title">Update the master tracker and open-items list</span>
            <span class="step-detail">
              Mark this action as <strong>closed</strong> in the master tracker, add a dated line to the McKnight open-items log with the PDF path,
              and close the reMarkable action item so it does not recirculate on the next sync.
            </span>
          </li>
          <li>
            <span class="step-title">Flag any red-flag findings for legal review</span>
            <span class="step-detail">
              If the deed reveals a gap, ambiguity, or unreleased lien tied to Compass/BBVA/PNC, write a one-paragraph summary and route it to
              counsel before any further property decisions are made on the McKnight matter.
            </span>
          </li>
        </ol>
      </section>

      <!-- WHY IT MATTERS -->
      <section>
        <div class="section-header">
          <span class="section-number">04</span>
          <h2><span class="lead">Why</span> It Matters</h2>
        </div>
        <div class="why-matters">
          <div class="why-card">
            <h4>Chain of Title Integrity</h4>
            <p>
              The 2018 instrument is the anchor point for every conveyance that came after. Without it in hand, every downstream document is a claim,
              not a record.
            </p>
          </div>
          <div class="why-card">
            <h4>Probate Timing</h4>
            <p>
              Probate matters close on documentary evidence, not summaries. Pulling the deed now keeps the matter moving toward resolution rather than
              sitting waiting on paperwork.
            </p>
          </div>
          <div class="why-card">
            <h4>Institutional Succession</h4>
            <p>
              Compass &rarr; BBVA &rarr; PNC. Any later release or assignment will carry a successor name — this deed is the thread that ties those
              later documents back to one origin.
            </p>
          </div>
          <div class="why-card">
            <h4>Workflow Hygiene</h4>
            <p>
              This action has been sitting on the reMarkable since 2026-04-08. Closing it clears the backlog and removes a recurring item from the
              weekly scan-and-sort cycle.
            </p>
          </div>
        </div>
      </section>

      <!-- DELIVERABLES -->
      <section>
        <div class="section-header">
          <span class="section-number">05</span>
          <h2><span class="lead">Deliverables</span> Checklist</h2>
        </div>
        <ul class="deliv-list">
          <li><strong>Certified PDF of the 2018 Compass Bank &rarr; McKnight deed</strong> saved to the McKnight probate folder.</li>
          <li><strong>Filename</strong> follows the convention: 2018-compass-mcknight-deed-20180426000141760.pdf.</li>
          <li><strong>Header note</strong> on the filing listing pull date, who pulled it, and a one-line conveyance summary.</li>
          <li><strong>Master tracker</strong> updated — this action item marked closed with the file path.</li>
          <li><strong>reMarkable source item</strong> marked handled so it does not recirculate on the next notebook sync.</li>
          <li><strong>Legal flag</strong> raised to counsel if the deed reveals a gap, unreleased lien, or party mismatch.</li>
        </ul>
      </section>

      <!-- NEXT STEP -->
      <div class="next-step">
        <h3>Next Step — Pull the Deed</h3>
        <p>Jefferson County Probate Court portal &rarr; Instrument 20180426000141760 &rarr; File to /legal/mcknight/deeds/.</p>
        <div class="buttons">
          <a href="tel:2055001343">Call Aaron · 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=McKnight%20Deed%20Pull%20%E2%80%94%20Instrument%2020180426000141760" class="secondary">Email Update</a>
        </div>
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
    <div class="nu-footer-meta">
      Action item captured from reMarkable scan · Source: rm-2026-04-13 · Instrument 20180426000141760 · Internal operations document
    </div>
  </footer>

</body>
</html>