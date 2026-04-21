<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation — Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-warn-amber: #E8A90C;
      --nu-success-green: #2D7A3E;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 14px rgba(0,0,0,0.35));
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
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* DOC BAND */
    .doc-band {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 28px 40px;
      text-align: center;
    }
    .doc-eyebrow {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
      padding: 6px 14px;
      background: rgba(0,0,255,0.06);
      border-radius: 20px;
    }
    .doc-title {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 6px;
      line-height: 1.15;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-sub {
      font-size: 1rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin: 0 auto;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px 24px;
      margin-top: 16px;
      font-size: 0.85rem;
      color: #666;
    }
    .doc-meta strong { color: var(--nu-dark-text); font-weight: 700; }

    /* MAIN CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
    }
    .wrap {
      max-width: 1160px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* PRIORITY STRIP */
    .priority-strip {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 20px;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 28px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      border-left: 6px solid var(--nu-cyan);
    }
    .priority-icon {
      width: 52px; height: 52px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .priority-icon svg { width: 28px; height: 28px; fill: var(--nu-navy); }
    .priority-body h2 {
      font-weight: 900;
      font-size: 1.25rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .priority-body p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
    }
    .priority-tag {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 8px 14px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-radius: 4px;
      white-space: nowrap;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      letter-spacing: -0.005em;
    }
    .nu-section-title span:first-child { color: var(--nu-blue); }
    .nu-section-title span:last-child { color: var(--nu-dark-text); }
    .section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
    }
    .section { margin-bottom: 44px; }

    /* SUMMARY CARD */
    .summary-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .summary-card p { margin-bottom: 12px; font-size: 1rem; }
    .summary-card p:last-child { margin-bottom: 0; }
    .summary-card strong { color: var(--nu-dark-text); font-weight: 700; }

    /* PHASE GRID */
    .phase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }
    .phase-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .phase-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
    .phase-num {
      position: absolute;
      top: -14px; left: 22px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      width: 38px; height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .phase-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin: 10px 0 6px;
    }
    .phase-window {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .phase-card p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* BADGES */
    .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 26px 12px 16px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.03em;
    }
    .nu-badge-icon {
      width: 22px; height: 22px;
      margin-right: 10px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 10px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .check-item {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 16px;
      align-items: start;
      padding: 18px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-item:last-child { border-bottom: none; }
    .check-box {
      width: 24px; height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-body h4 {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .check-body p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .check-tag {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 4px;
      white-space: nowrap;
      align-self: center;
    }
    .tag-urgent { background: rgba(200,16,46,0.1); color: var(--nu-alert-red); }
    .tag-soon { background: rgba(232,169,12,0.12); color: #9a6e00; }
    .tag-then { background: rgba(0,0,255,0.08); color: var(--nu-blue); }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .info-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .info-card ul { list-style: none; }
    .info-card li {
      padding: 8px 0;
      padding-left: 22px;
      position: relative;
      font-size: 0.92rem;
    }
    .info-card li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 8px; height: 8px;
      background: var(--nu-blue);
      transform: rotate(45deg);
    }

    /* VENDOR TABLE */
    .vendor-table {
      width: 100%;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-collapse: separate;
      border-spacing: 0;
    }
    .vendor-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .vendor-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .vendor-table tr:last-child td { border-bottom: none; }
    .vendor-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .vendor-table td strong { color: var(--nu-dark-text); }

    /* BUDGET BOX */
    .budget-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 30px 34px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: center;
    }
    .budget-box h3 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .budget-box p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      max-width: 640px;
    }
    .budget-range {
      text-align: right;
    }
    .budget-range .amount {
      font-size: 1.9rem;
      font-weight: 900;
      color: var(--nu-white);
      letter-spacing: -0.01em;
    }
    .budget-range .label {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
    }

    /* SIGNALS */
    .signals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
    }
    .signal {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 18px 20px;
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-warn-amber);
    }
    .signal strong {
      display: block;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .signal span { font-size: 0.85rem; color: var(--nu-body-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact { font-size: 0.9rem; line-height: 1.9; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .doc-title { font-size: 1.5rem; }
      .wrap { padding: 32px 20px 40px; }
      .priority-strip { grid-template-columns: 1fr; text-align: center; }
      .priority-strip .priority-icon { margin: 0 auto; }
      .two-col { grid-template-columns: 1fr; }
      .budget-box { grid-template-columns: 1fr; text-align: left; }
      .budget-range { text-align: left; }
      .nu-badge { clip-path: none; border-radius: 8px; }
      .check-item { grid-template-columns: auto 1fr; }
      .check-tag { grid-column: 1 / -1; justify-self: start; }
      .vendor-table { font-size: 0.85rem; }
      .vendor-table th, .vendor-table td { padding: 10px 12px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .phase-card, .info-card, .summary-card, .checklist, .vendor-table { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC BAND -->
  <div class="doc-band">
    <span class="doc-eyebrow">Action Item · Facility Integrity</span>
    <h1 class="doc-title">Water Intrusion Remediation — <span>Professional Waterproofing Plan</span></h1>
    <p class="doc-sub">Scoping, vendor selection, and execution plan to address active water intrusion requiring professional waterproofing. Protects inventory, office equipment, and the integrity of the structure.</p>
    <div class="doc-meta">
      <span><strong>Owner:</strong> Aaron C. Norris</span>
      <span><strong>Opened:</strong> 2026-04-21</span>
      <span><strong>Source:</strong> reMarkable Action Item</span>
      <span><strong>Status:</strong> Open · Awaiting vendor walkthrough</span>
    </div>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="wrap">

      <!-- PRIORITY STRIP -->
      <div class="priority-strip">
        <div class="priority-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C7 9 4 13 4 17a8 8 0 0 0 16 0c0-4-3-8-8-15z"/>
          </svg>
        </div>
        <div class="priority-body">
          <h2>Water Intrusion Confirmed — Professional Waterproofing Required</h2>
          <p>Do-it-yourself patching is insufficient. A licensed waterproofing contractor must diagnose the source, seal the envelope, and warranty the fix before any finish repairs are started.</p>
        </div>
        <div class="priority-tag">Priority · Act This Week</div>
      </div>

      <!-- SUMMARY -->
      <section class="section">
        <h2 class="nu-section-title"><span>Situation</span> <span>Summary</span></h2>
        <div class="section-rule"></div>
        <div class="summary-card">
          <p>Active water intrusion has been observed and logged as a priority item on the reMarkable task list. Left unaddressed, water intrusion compounds quickly: drywall wicks moisture upward, mold establishes within 48–72 hours of sustained wetness, and electrical components in the affected zone become a safety exposure.</p>
          <p><strong>The correct sequence is diagnose → stop the water → dry the cavity → verify → repair finishes.</strong> Skipping to finish repairs first is the most common expensive mistake and is the exact scenario this plan is designed to prevent.</p>
          <p>This plan moves the issue from a handwritten note into a tracked scope with named vendors, phase gates, and a working budget range. It closes when a signed waterproofing warranty is on file and a 30-day dry check passes.</p>
        </div>
      </section>

      <!-- PHASES -->
      <section class="section">
        <h2 class="nu-section-title"><span>Execution</span> <span>Phases</span></h2>
        <div class="section-rule"></div>
        <div class="phase-grid">

          <div class="phase-card">
            <div class="phase-num">1</div>
            <div class="phase-window">Today — Day 2</div>
            <div class="phase-title">Contain &amp; Document</div>
            <p>Move inventory and paper files 36" away from the affected wall. Photograph every stain, seam, and floor line. Place moisture meter readings on camera before any cleanup begins.</p>
          </div>

          <div class="phase-card">
            <div class="phase-num">2</div>
            <div class="phase-window">Day 1 — Day 3</div>
            <div class="phase-title">Vendor Walkthroughs</div>
            <p>Book three licensed waterproofing contractors for on-site inspections. Request written scopes with warranty length and exclusions clearly stated. No verbal quotes accepted.</p>
          </div>

          <div class="phase-card">
            <div class="phase-num">3</div>
            <div class="phase-window">Day 3 — Day 5</div>
            <div class="phase-title">Select &amp; Schedule</div>
            <p>Compare scopes on apples-to-apples basis. Select the contractor offering a written warranty of 5 years minimum and interior access for verification. Issue deposit, lock install date.</p>
          </div>

          <div class="phase-card">
            <div class="phase-num">4</div>
            <div class="phase-window">Week 2</div>
            <div class="phase-title">Dry &amp; Seal</div>
            <p>Commercial dehumidifier and air mover run until moisture meter reads &lt;16% in studs and &lt;12% in drywall. Contractor then executes exterior/interior seal work per scope.</p>
          </div>

          <div class="phase-card">
            <div class="phase-num">5</div>
            <div class="phase-window">Week 2 — Week 3</div>
            <div class="phase-title">Verify Under Water</div>
            <p>Controlled hose test for 30 minutes on the remediated wall. Interior inspection during and 24 hours after. No leak = proceed; any leak = back to contractor before payment.</p>
          </div>

          <div class="phase-card">
            <div class="phase-num">6</div>
            <div class="phase-window">Week 3 — Week 4</div>
            <div class="phase-title">Finish Repair &amp; Close</div>
            <p>Drywall patch, paint match, trim reinstallation. File warranty documents in the operations binder. Set 30-day and 90-day dry check reminders. Close the reMarkable item.</p>
          </div>

        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="section">
        <h2 class="nu-section-title"><span>Next</span> <span>Actions</span></h2>
        <div class="section-rule"></div>

        <div class="badge-row">
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/></svg>
            CONTAIN FIRST
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            WRITTEN SCOPES ONLY
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.41 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            WARRANTY REQUIRED
          </div>
        </div>

        <div class="checklist">

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Move inventory and paperwork 36" clear of the wet wall</h4>
              <p>FlexPro Armor stock, Samson Rope samples, and any file storage must be off the floor and away from the zone before vendors arrive.</p>
            </div>
            <div class="check-tag tag-urgent">Today</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Photograph and label every visible water sign</h4>
              <p>Interior stains, exterior grading, downspout outlets, window/door seams. Date-stamped photos protect the scope and become the baseline for warranty claims.</p>
            </div>
            <div class="check-tag tag-urgent">Today</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Book 3 licensed waterproofing contractors for site walk</h4>
              <p>Use the vendor candidates listed below. Ask each for license #, certificate of insurance, and two recent commercial references in Birmingham.</p>
            </div>
            <div class="check-tag tag-urgent">48 Hours</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Run commercial dehumidifier until moisture readings pass</h4>
              <p>Rent from Sunbelt if not available in-house. Target: &lt;16% in studs, &lt;12% in drywall. Log readings daily. Do NOT close up any cavity until readings hold.</p>
            </div>
            <div class="check-tag tag-soon">This Week</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Compare scopes side by side — select by warranty, not price</h4>
              <p>Lowest bid with no written warranty is the most expensive option. Require minimum 5-year transferable written warranty on waterproofing work.</p>
            </div>
            <div class="check-tag tag-soon">Day 5</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>Controlled hose test before final payment</h4>
              <p>30-minute sustained water on the remediated exterior. Interior observation during and 24 hours after. Retain final 25% of payment until this test passes clean.</p>
            </div>
            <div class="check-tag tag-then">Week 2</div>
          </div>

          <div class="check-item">
            <div class="check-box"></div>
            <div class="check-body">
              <h4>File warranty + set 30/90-day dry checks</h4>
              <p>Store signed warranty in operations binder and scan to the ops portal. Calendar a 30-day and 90-day visual dry check. Close the reMarkable task only after the 30-day passes.</p>
            </div>
            <div class="check-tag tag-then">Week 3</div>
          </div>

        </div>
      </section>

      <!-- WARNING SIGNALS -->
      <section class="section">
        <h2 class="nu-section-title"><span>Red-Flag</span> <span>Signals</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; max-width: 780px;">If any of these appear during the work, stop, document, and escalate before paying a scheduled installment.</p>
        <div class="signals-grid">
          <div class="signal"><strong>No written warranty offered</strong><span>Walk away. A licensed waterproofer who will not warranty their work in writing is not the right vendor.</span></div>
          <div class="signal"><strong>Insists on finish repair first</strong><span>Drywall and paint go last. Any vendor sequencing finish before seal is shortcutting the diagnosis.</span></div>
          <div class="signal"><strong>Refuses hose test</strong><span>A real fix passes a controlled hose test. Refusal to test is a refusal to stand behind the work.</span></div>
          <div class="signal"><strong>Musty smell returns</strong><span>A recurring musty smell after dry-out indicates trapped moisture or continued intrusion. Call the contractor back under warranty immediately.</span></div>
          <div class="signal"><strong>Paint bubbling near baseboard</strong><span>Post-repair bubbling = active water still reaching drywall. Open a warranty ticket the same day it is observed.</span></div>
          <div class="signal"><strong>Moisture readings rising again</strong><span>Log climbs above 16% after dry-out. This is a failed seal. Escalate before any cosmetic repair.</span></div>
        </div>
      </section>

      <!-- VENDOR TABLE -->
      <section class="section">
        <h2 class="nu-section-title"><span>Vendor</span> <span>Candidates — Birmingham Metro</span></h2>
        <div class="section-rule"></div>
        <p style="margin-bottom: 18px; max-width: 820px;">Below are the categories of vendors to solicit. Aaron to confirm specific companies before outreach; Caroline Butler to manage scheduling once names are confirmed.</p>
        <table class="vendor-table">
          <thead>
            <tr>
              <th>Vendor Category</th>
              <th>Scope They Own</th>
              <th>What to Request</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Licensed Waterproofing Contractor</strong></td>
              <td>Primary diagnosis, exterior seal, warrantied fix</td>
              <td>Written scope, 5-year minimum warranty, COI, two commercial references</td>
              <td>Tier 1 — must have 3 bids</td>
            </tr>
            <tr>
              <td><strong>Licensed Roofer</strong></td>
              <td>If intrusion traces to roofline, flashing, or gutters</td>
              <td>Roof + flashing inspection report with photos; separate quote if in scope</td>
              <td>Tier 1 — if roof suspected</td>
            </tr>
            <tr>
              <td><strong>Foundation / Grading Contractor</strong></td>
              <td>Exterior grading, downspout extensions, French drain if needed</td>
              <td>Grading fall measurement, drainage recommendation, written scope</td>
              <td>Tier 2 — if wall is below grade</td>
            </tr>
            <tr>
              <td><strong>Mold Assessor (IICRC-certified)</strong></td>
              <td>Air quality and surface testing behind the wall</td>
              <td>Pre- and post-remediation clearance reports</td>
              <td>Tier 2 — if wet &gt;72 hrs</td>
            </tr>
            <tr>
              <td><strong>Equipment Rental (Sunbelt)</strong></td>
              <td>Commercial dehumidifier, air movers, moisture meter</td>
              <td>Daily rental rate, delivery window, propane vs electric model</td>
              <td>Tier 1 — week 1 rental</td>
            </tr>
            <tr>
              <td><strong>Drywall &amp; Paint Finisher</strong></td>
              <td>Patch, texture match, paint match after seal verified</td>
              <td>Fixed-price quote keyed to square footage after cavity is signed off dry</td>
              <td>Tier 3 — last step only</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- TWO-COL: SCOPE + CRITERIA -->
      <section class="section">
        <h2 class="nu-section-title"><span>Scope</span> <span>Boundaries &amp; Selection Criteria</span></h2>
        <div class="section-rule"></div>
        <div class="two-col">

          <div class="info-card">
            <h3>In-Scope for This Project</h3>
            <ul>
              <li>Locate source of water intrusion</li>
              <li>Exterior and interior seal of the failure point</li>
              <li>Dry-out of the affected wall cavity</li>
              <li>Moisture verification with documented readings</li>
              <li>Controlled hose test after seal is installed</li>
              <li>Drywall patch, texture, and paint match</li>
              <li>Signed warranty, stored in operations binder</li>
            </ul>
          </div>

          <div class="info-card">
            <h3>Vendor Selection Criteria</h3>
            <ul>
              <li>Licensed and insured in Alabama</li>
              <li>Written scope, no verbal quotes accepted</li>
              <li>Minimum 5-year transferable warranty</li>
              <li>Two recent commercial references (Birmingham metro)</li>
              <li>Willingness to perform controlled hose test</li>
              <li>Pay schedule: 25% deposit, 50% mid, 25% post-hose-test</li>
              <li>No finish repairs paid until dry verification passes</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- BUDGET -->
      <section class="section">
        <h2 class="nu-section-title"><span>Working</span> <span>Budget Range</span></h2>
        <div class="section-rule"></div>
        <div class="budget-box">
          <div>
            <h3>Placeholder Until Bids Return</h3>
            <p>The figure below is a planning range for professional exterior waterproofing on a small-to-medium commercial wall section in the Birmingham market, including cavity dry-out, controlled testing, and drywall finish work. Actual scope and price will be set by the three written bids.</p>
          </div>
          <div class="budget-range">
            <div class="amount">$3,500 – $9,500</div>
            <div class="label">Planning Range</div>
          </div>
        </div>
      </section>

      <!-- NOTES -->
      <section class="section" style="margin-bottom:0;">
        <h2 class="nu-section-title"><span>Closing</span> <span>Note</span></h2>
        <div class="section-rule"></div>
        <div class="summary-card">
          <p>Water intrusion is the one building problem that gets exponentially more expensive every week it is ignored. The objective here is not the lowest bid — it is the last time we ever have to think about this wall.</p>
          <p><strong>Definition of done:</strong> signed 5-year warranty on file, hose test passed, 30-day dry check clean, finish repairs complete, reMarkable item closed, ops portal updated.</p>
        </div>
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