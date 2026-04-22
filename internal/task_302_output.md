<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — 2018 Compass Bank → McKnight Deed Pull — Norris Utilities®</title>
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
      --nu-alert-red: #CC1F1F;
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
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 40px 40px, 40px 40px, 60px 60px, 80px 80px;
      opacity: 0.6;
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
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
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
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
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1 / 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 50px 40px;
      position: relative;
      z-index: 1;
    }

    /* ACTION BAR */
    .action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 8px;
      margin-bottom: 40px;
      border-left: 6px solid var(--nu-cyan);
    }
    .action-bar-label {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
    }
    .action-bar-title {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-white);
    }
    .action-bar-priority {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.65rem;
      margin-bottom: 18px;
      line-height: 1.25;
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section {
      margin-bottom: 44px;
    }

    /* DEED SUMMARY CARD */
    .deed-card {
      background: linear-gradient(135deg, #fafbff 0%, #f1f4ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 32px;
    }
    .deed-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      letter-spacing: 0.02em;
    }
    .deed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px 28px;
    }
    .deed-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .deed-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .deed-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      font-variant-numeric: tabular-nums;
      word-break: break-word;
    }
    .deed-value.mono {
      font-family: 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.95rem;
      font-weight: 700;
    }

    /* STEP LIST */
    .step-list {
      counter-reset: step;
      list-style: none;
      padding: 0;
    }
    .step-item {
      counter-increment: step;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px 22px 78px;
      margin-bottom: 14px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .step-item:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .step-item::before {
      content: counter(step);
      position: absolute;
      top: 22px;
      left: 22px;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,255,0.25);
    }
    .step-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-detail {
      font-size: 0.96rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .step-detail a {
      color: var(--nu-blue);
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1px dotted var(--nu-blue);
    }
    .step-detail a:hover {
      color: #0000CC;
    }

    /* CHEVRON BADGE */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.04em;
      margin-bottom: 18px;
    }
    .nu-badge-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      fill: var(--nu-cyan);
    }

    /* WHY PANEL */
    .why-panel {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      border-left: 6px solid var(--nu-cyan);
    }
    .why-panel h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-cyan);
      margin-bottom: 10px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .why-panel p {
      color: rgba(255,255,255,0.92);
      font-size: 0.98rem;
      line-height: 1.65;
      margin-bottom: 10px;
    }
    .why-panel p:last-child { margin-bottom: 0; }

    /* ACTIONS ROW */
    .actions-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 10px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 13px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* STATUS ROW */
    .status-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .status-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--nu-accent-gold);
    }
    .status-dot.open { background: var(--nu-accent-gold); }
    .status-dot.priority { background: var(--nu-alert-red); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
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
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px; }
      .step-item { padding: 60px 18px 18px; }
      .step-item::before { top: 16px; left: 18px; width: 34px; height: 34px; font-size: 1rem; }
      .action-bar { padding: 14px 18px; }
      .deed-card { padding: 22px 20px; }
      .why-panel { padding: 22px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .step-item:hover, .step-item { transform: none; box-shadow: none; border: 1px solid #ccc; }
      .actions-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BAR -->
      <div class="action-bar">
        <div>
          <div class="action-bar-label">reMarkable Action Item</div>
          <div class="action-bar-title">Pull 2018 Compass Bank → McKnight Deed</div>
        </div>
        <div class="action-bar-priority">Open</div>
      </div>

      <!-- TITLE -->
      <div class="nu-section">
        <h1 class="nu-section-title">
          <span class="accent">Deed</span> <span class="rest">Retrieval — Probate Court Pull</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--nu-body-text); max-width: 720px;">
          Retrieve the 2018 Compass Bank to McKnight warranty deed from the Jefferson County Probate Court records. Document is needed from the probate file for title chain verification and reference.
        </p>
        <div class="status-row">
          <span class="status-tag"><span class="status-dot priority"></span>Priority</span>
          <span class="status-tag"><span class="status-dot open"></span>Status: Open</span>
          <span class="status-tag"><span class="status-dot" style="background: var(--nu-cyan);"></span>Source: reMarkable</span>
        </div>
      </div>

      <!-- DEED SUMMARY -->
      <div class="nu-section">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          </svg>
          Document Particulars
        </div>
        <div class="deed-card">
          <h3>Deed Identification</h3>
          <div class="deed-grid">
            <div class="deed-field">
              <span class="deed-label">Grantor</span>
              <span class="deed-value">Compass Bank</span>
            </div>
            <div class="deed-field">
              <span class="deed-label">Grantee</span>
              <span class="deed-value">McKnight</span>
            </div>
            <div class="deed-field">
              <span class="deed-label">Year Recorded</span>
              <span class="deed-value">2018</span>
            </div>
            <div class="deed-field">
              <span class="deed-label">Instrument Number</span>
              <span class="deed-value mono">201804260001417600</span>
            </div>
            <div class="deed-field">
              <span class="deed-label">Record Type</span>
              <span class="deed-value">Warranty Deed (Probate File)</span>
            </div>
            <div class="deed-field">
              <span class="deed-label">Recording Date (Implied)</span>
              <span class="deed-value">April 26, 2018</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RETRIEVAL STEPS -->
      <div class="nu-section">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          Retrieval Checklist
        </div>

        <ol class="step-list">
          <li class="step-item">
            <div class="step-title">Open Jefferson County Probate Court online records</div>
            <div class="step-detail">
              Go to the Jefferson County, Alabama Probate Court public records search. Select the "Real Property Records" or "Land Records" search tool.
            </div>
          </li>
          <li class="step-item">
            <div class="step-title">Search by Instrument Number</div>
            <div class="step-detail">
              Enter Instrument Number <strong>201804260001417600</strong> in the search field. This is the fastest, most precise path to the exact document.
            </div>
          </li>
          <li class="step-item">
            <div class="step-title">Verify the match before paying</div>
            <div class="step-detail">
              Confirm Grantor shows "Compass Bank" and Grantee shows "McKnight." Verify the 2018 recording year. If any field mismatches, stop and double-check the instrument number on the reMarkable source note.
            </div>
          </li>
          <li class="step-item">
            <div class="step-title">Purchase and download the certified copy</div>
            <div class="step-detail">
              Pay the copy fee (typically $1 per page online). Download the PDF directly from the records portal. Save it as <strong>2018_CompassBank_McKnight_Deed_201804260001417600.pdf</strong>.
            </div>
          </li>
          <li class="step-item">
            <div class="step-title">File in the Norris Utilities® records system</div>
            <div class="step-detail">
              Save the PDF to <strong>~/norris-agent/output/deeds/</strong> and copy to <strong>~/norris-ops/internal/deeds/</strong>. Add an entry to the records index with retrieval date and instrument number.
            </div>
          </li>
          <li class="step-item">
            <div class="step-title">Close the reMarkable action item</div>
            <div class="step-detail">
              Mark the reMarkable action item complete. Log the filing path in the daily journal so the deed is traceable from the original action note.
            </div>
          </li>
        </ol>
      </div>

      <!-- WHY PANEL -->
      <div class="nu-section">
        <div class="why-panel">
          <h3>Why This Matters</h3>
          <p>
            The 2018 Compass Bank → McKnight deed sits in the probate chain for a property Aaron C. Norris flagged on his reMarkable. Pulling the certified instrument now — rather than reconstructing from memory or third-party summaries — puts the primary source document in Aaron's hands for any legal, title, or advisory conversation that follows.
          </p>
          <p>
            Compass Bank was absorbed into BBVA and then PNC; original deed records from the 2018 era are held by the Jefferson County Probate Court, not the bank. The probate court instrument number is the authoritative handle.
          </p>
        </div>
      </div>

      <!-- ACTIONS -->
      <div class="nu-section" style="margin-bottom: 0;">
        <div class="actions-row">
          <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
          <a href="mailto:acnorris@norrisutilities.com?subject=2018%20Compass%20Bank%20%E2%86%92%20McKnight%20Deed%20Pulled&body=Aaron%20%E2%80%94%0A%0AThe%202018%20Compass%20Bank%20to%20McKnight%20deed%20(Instrument%20201804260001417600)%20has%20been%20pulled%20from%20Jefferson%20County%20Probate%20Court%20and%20filed.%0A%0ASincerely%2C%0A" class="nu-btn-secondary">Email Confirmation</a>
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
      Internal Action Record • Generated by the Norris Utilities® Autonomous Build Engine
    </div>
  </footer>

</body>
</html>