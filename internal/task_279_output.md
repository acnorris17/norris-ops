<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation Action Plan — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-warn-amber: #D97706;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-display: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-ghost {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: var(--font-display);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 20px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    /* ══ WHITE ASYMMETRIC CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ MAIN ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 240px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOC META ══ */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
      padding: 18px 24px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.88rem;
    }
    .nu-doc-meta strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-status-pill {
      display: inline-block;
      padding: 4px 12px;
      background: var(--nu-warn-amber);
      color: var(--nu-white);
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 48px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ OVERVIEW CARD ══ */
    .nu-overview {
      background: linear-gradient(135deg, #F8FAFF 0%, #EEF4FF 100%);
      border: 1px solid #D6E2FF;
      border-left: 5px solid var(--nu-blue);
      padding: 26px 30px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-overview p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-overview p:last-child { margin-bottom: 0; }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 30px 16px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-icon {
      width: 28px; height: 28px;
      margin-right: 14px;
      fill: var(--nu-cyan);
      flex-shrink: 0;
    }

    /* ══ STEP CARDS ══ */
    .nu-steps {
      display: grid;
      gap: 18px;
      margin-bottom: 16px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 70px 1fr;
      gap: 22px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 26px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .nu-step:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      transform: translateY(-1px);
    }
    .nu-step-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px; height: 60px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1.4rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-step h3 {
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      font-weight: 900;
      margin-bottom: 6px;
    }
    .nu-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-step-tag {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 3px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-right: 6px;
    }

    /* ══ CONTRACTOR TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:nth-child(even) td { background: #FAFBFD; }
    .nu-scope-list {
      margin: 0;
      padding-left: 18px;
      color: var(--nu-body-text);
    }
    .nu-scope-list li {
      margin-bottom: 3px;
      font-size: 0.88rem;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      gap: 14px;
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-check-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-check-text strong {
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ ALERT BOX ══ */
    .nu-alert {
      background: #FFF4E6;
      border-left: 5px solid var(--nu-warn-amber);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .nu-alert h4 {
      color: var(--nu-warn-amber);
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-alert p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ KEY STATS ══ */
    .nu-stat-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .nu-stat {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-stat-value {
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .nu-stat-label {
      font-size: 0.78rem;
      color: var(--nu-body-text);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-display);
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
    .nu-footer-divider {
      width: 60px; height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.6;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 60px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .nu-step { grid-template-columns: 1fr; gap: 12px; }
      .nu-step-num { width: 50px; height: 50px; font-size: 1.2rem; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-doc-meta { flex-direction: column; align-items: flex-start; gap: 10px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-overview, .nu-checklist, .nu-stat { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-ghost" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Plan</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- DOC META -->
      <div class="nu-doc-meta">
        <div><strong>Task Source:</strong> reMarkable Action Item</div>
        <div><strong>Opened:</strong> April 23, 2026</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><span class="nu-status-pill">Open — Action Required</span></div>
      </div>

      <!-- HEADLINE -->
      <h1 class="nu-section-title" style="font-size: 2rem; margin-bottom: 10px; border-bottom: none;">
        <span class="first">Water</span> <span class="rest">Intrusion Remediation Plan</span>
      </h1>
      <p style="color: var(--nu-body-text); font-size: 1.05rem; margin-bottom: 32px;">
        Address active water intrusion issue requiring professional waterproofing. Scope, evaluate, and remediate before secondary damage (mold, structural, electrical) takes hold.
      </p>

      <!-- ALERT -->
      <div class="nu-alert">
        <h4>Why This Moves First</h4>
        <p>Water intrusion compounds daily. Drywall wicks, framing swells, and mold colonies establish within 48–72 hours of sustained moisture. Every day of delay raises the remediation cost and shortens the life of the affected assembly.</p>
      </div>

      <!-- OVERVIEW -->
      <div class="nu-overview">
        <p><strong>Objective:</strong> Identify the source of intrusion, stop active water entry, dry out the affected area, and retain a qualified waterproofing contractor to restore a durable, warrantied envelope.</p>
        <p><strong>Success Criteria:</strong> Zero visible water entry during a simulated rain test, moisture meter readings below 15% on affected substrates, and a written workmanship warranty (minimum 5 years) in hand.</p>
      </div>

      <!-- KEY STATS -->
      <div class="nu-stat-row">
        <div class="nu-stat">
          <div class="nu-stat-value">48–72h</div>
          <div class="nu-stat-label">Mold Onset Window</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-value">≤ 15%</div>
          <div class="nu-stat-label">Target Moisture</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-value">3</div>
          <div class="nu-stat-label">Contractor Bids</div>
        </div>
        <div class="nu-stat">
          <div class="nu-stat-value">5 yr+</div>
          <div class="nu-stat-label">Warranty Required</div>
        </div>
      </div>

      <!-- PHASE 1 -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phase 1.</span> <span class="rest">Containment &amp; Assessment</span></h2>

        <div class="nu-badge-row">
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2 L22 12 L12 22 L2 12 Z M12 6 L18 12 L12 18 L6 12 Z" /></svg>
            Stop Active Water Entry
          </div>
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7 V13 L16 15" stroke="currentColor" stroke-width="2" fill="none"/></svg>
            Document Within 24 Hours
          </div>
        </div>

        <div class="nu-steps">
          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <div>
              <h3>Locate &amp; Photograph Every Sign of Intrusion</h3>
              <p>Walk the affected area. Photograph stains, efflorescence, bubbled paint, warped trim, and any standing water. Note date, time, and weather on each photo.</p>
              <span class="nu-step-tag">Phase 1 • Day 1</span>
              <span class="nu-step-tag">Owner: Aaron</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <div>
              <h3>Contain the Area</h3>
              <p>Move valuables, paper files, and electronics clear of the wet zone. Lay plastic sheeting over anything that cannot be moved. Place a bucket or towels to catch any active drip.</p>
              <span class="nu-step-tag">Phase 1 • Day 1</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <div>
              <h3>Moisture Meter Readings</h3>
              <p>Take baseline readings across walls, flooring, and adjacent structure. Record each location and value. These readings are the objective yardstick for whether the area is drying or getting worse.</p>
              <span class="nu-step-tag">Target: ≤ 15%</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">4</div>
            <div>
              <h3>Start Active Drying</h3>
              <p>Deploy dehumidifier and fans. Open wall cavity if moisture is trapped behind drywall. Continue until moisture meter hits target for three consecutive days.</p>
              <span class="nu-step-tag">Phase 1 • Days 1–5</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PHASE 2 -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phase 2.</span> <span class="rest">Source Diagnosis</span></h2>

        <div class="nu-badge-row">
          <div class="nu-badge">
            <svg class="nu-badge-icon" viewBox="0 0 24 24"><path d="M12 2 C7 2 3 6 3 11 C3 17 12 22 12 22 C12 22 21 17 21 11 C21 6 17 2 12 2 Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
            Find the Root, Not the Symptom
          </div>
        </div>

        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Water rarely enters where it appears. Rule out each probable source before committing to a repair scope.
        </p>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 28%;">Suspected Source</th>
                <th>Diagnostic Test</th>
                <th style="width: 22%;">Resolution Path</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Roof / flashing</strong></td>
                <td>Hose test from ridge down. Inspect penetrations, valleys, and counter-flashing at walls.</td>
                <td>Roofing contractor</td>
              </tr>
              <tr>
                <td><strong>Window / door seals</strong></td>
                <td>Directed spray test on each opening, starting at the sill and moving up. Hold 5 minutes per zone.</td>
                <td>Waterproofing / glazing</td>
              </tr>
              <tr>
                <td><strong>Grading / foundation</strong></td>
                <td>Check slope away from structure (min. 6" drop over first 10 ft). Inspect for hydrostatic entry at slab edge.</td>
                <td>Grading + exterior waterproofing</td>
              </tr>
              <tr>
                <td><strong>Plumbing supply / drain</strong></td>
                <td>Shut house supply, watch meter. Dye test drains if leak persists with supply off.</td>
                <td>Licensed plumber</td>
              </tr>
              <tr>
                <td><strong>HVAC condensate</strong></td>
                <td>Inspect drip pan, secondary pan, and condensate line. Clear trap and verify slope.</td>
                <td>HVAC technician</td>
              </tr>
              <tr>
                <td><strong>Wall penetration / sealant</strong></td>
                <td>Inspect every exterior caulk joint, pipe penetration, and siding seam in the suspect zone.</td>
                <td>Waterproofing contractor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHASE 3 -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phase 3.</span> <span class="rest">Contractor Selection</span></h2>

        <p style="margin-bottom: 20px; color: var(--nu-body-text);">
          Retain a <strong>professional waterproofing contractor</strong> — not a handyman. Require three written bids with identical scope so the comparison is apples-to-apples.
        </p>

        <div class="nu-table-wrap" style="margin-bottom: 22px;">
          <table class="nu-table">
            <thead>
              <tr>
                <th style="width: 22%;">Requirement</th>
                <th>What Good Looks Like</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>License &amp; Insurance</strong></td>
                <td>Current Alabama home builder / specialty license + general liability ($1M min) + workers' comp. Request certificates of insurance naming Aaron as certificate holder.</td>
              </tr>
              <tr>
                <td><strong>Referenceable Work</strong></td>
                <td>Minimum 3 recent local references within 30 miles of Birmingham. Drive by at least one completed job.</td>
              </tr>
              <tr>
                <td><strong>Written Scope</strong></td>
                <td>
                  <ul class="nu-scope-list">
                    <li>Diagnosis of source (not guess)</li>
                    <li>Materials list with manufacturer + product SKU</li>
                    <li>Surface prep requirements</li>
                    <li>Weather / temperature constraints</li>
                    <li>Cleanup &amp; haul-off included</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Warranty</strong></td>
                <td>Minimum 5-year workmanship warranty in writing. Manufacturer material warranty passed through on paper. Warranty must survive ownership transfer.</td>
              </tr>
              <tr>
                <td><strong>Payment Terms</strong></td>
                <td>No more than 10% deposit. Progress payments tied to completed phases. Final 20% held until passed rain test. Never pay 100% up front.</td>
              </tr>
              <tr>
                <td><strong>Permits</strong></td>
                <td>Contractor pulls any required local permit. Scope in writing states who is responsible.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- CONTRACTOR CHECKLIST -->
        <div class="nu-checklist">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Bid 1 received</strong> — scope + materials list + warranty terms attached</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Bid 2 received</strong> — scope + materials list + warranty terms attached</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Bid 3 received</strong> — scope + materials list + warranty terms attached</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>3 references called</strong> — verified scope, timeline, warranty follow-through</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Drive-by completed</strong> — visual inspection of at least one finished job</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>COI on file</strong> — certificate of insurance listing Aaron as certificate holder</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text"><strong>Contract signed</strong> — deposit ≤ 10%, hold-back ≥ 20%, 5-yr workmanship warranty</div>
          </div>
        </div>
      </section>

      <!-- PHASE 4 -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phase 4.</span> <span class="rest">Execution &amp; Verification</span></h2>

        <div class="nu-steps">
          <div class="nu-step">
            <div class="nu-step-num">5</div>
            <div>
              <h3>Pre-Work Walkthrough</h3>
              <p>Photograph the full work zone with the contractor present. Agree in writing on the exact scope, materials, and daily schedule before any tool comes out.</p>
              <span class="nu-step-tag">Day Of Work — AM</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">6</div>
            <div>
              <h3>Progress Photos Every Phase</h3>
              <p>Request photos at prep, during install, and post-install. Pay particular attention to flashing laps, sealant beads, and terminations — these are where jobs fail.</p>
              <span class="nu-step-tag">During Work</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">7</div>
            <div>
              <h3>Simulated Rain Test</h3>
              <p>Before final payment, run a 30-minute hose test directed at every repaired zone. Interior moisture meter must stay flat. Any rise = repair not complete.</p>
              <span class="nu-step-tag">Hold-Back Trigger</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">8</div>
            <div>
              <h3>Warranty &amp; Paperwork</h3>
              <p>Collect signed workmanship warranty, manufacturer material warranty, lien waiver, and all permit close-out paperwork. File in operations binder.</p>
              <span class="nu-step-tag">Close-Out</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">9</div>
            <div>
              <h3>30-Day &amp; 90-Day Re-Inspection</h3>
              <p>Re-check moisture readings at 30 and 90 days. File photos and readings in the property folder. This is the objective record if the warranty is ever invoked.</p>
              <span class="nu-step-tag">Post-Close</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FOLLOW-UP -->
      <section class="nu-section" style="margin-bottom: 0;">
        <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Immediate Actions</span></h2>

        <div class="nu-checklist">
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Walk the affected area today. Photograph every sign of intrusion with timestamp.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Contain valuables and start active drying within 24 hours.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Baseline moisture readings logged before any contractor visits.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Call three licensed waterproofing contractors this week. Schedule inspections.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Confirm homeowners / commercial policy coverage &mdash; notify insurer of potential claim.</div>
          </div>
          <div class="nu-check-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-text">Schedule follow-up review on the reMarkable task list for April 30, 2026.</div>
          </div>
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