<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Remediation — Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-warning-amber: #D97706;
      --nu-success-green: #0E7C3A;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.92;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin: 4px 0 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-page-banner {
      margin-top: 22px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.25em;
      color: var(--nu-white);
      text-transform: uppercase;
      opacity: 0.85;
    }

    /* CHEVRON */
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* ACTION CARD TITLE */
    .nu-action-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-action-title .nu-first-word {
      color: #0033cc;
    }
    .nu-action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 26px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-action-meta strong { color: var(--nu-dark-text); }

    /* PRIORITY BANNER */
    .nu-priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #fff5f2 0%, #ffe8e0 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 18px 24px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .nu-priority-badge {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      padding: 6px 12px;
      border-radius: 3px;
      text-transform: uppercase;
      flex-shrink: 0;
    }
    .nu-priority-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-priority-text strong { color: var(--nu-alert-red); }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .nu-first-word {
      color: #0033cc;
    }
    .nu-section-title .nu-rest {
      color: var(--nu-dark-text);
    }

    /* CHEVRON BADGES */
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* TWO COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: #0033cc;
      margin-bottom: 10px;
    }
    .nu-card p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
      margin: 8px 0 0;
    }
    .nu-card li {
      font-size: 0.92rem;
      padding: 6px 0 6px 22px;
      position: relative;
      color: var(--nu-body-text);
    }
    .nu-card li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
      top: 7px;
    }

    /* STEP LIST */
    .nu-step-list {
      list-style: none;
      padding: 0;
      margin: 0;
      counter-reset: step;
    }
    .nu-step-list li {
      counter-increment: step;
      position: relative;
      padding: 14px 16px 14px 60px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-step-list li::before {
      content: counter(step);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 34px;
      height: 34px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-step-list li strong { color: #0033cc; }

    /* VENDOR TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
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
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
      color: var(--nu-body-text);
    }
    .nu-table tr:nth-child(even) td { background: #fafafa; }
    .nu-table td strong { color: var(--nu-dark-text); }

    /* STATUS PILL */
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-pill-open { background: #fff4e6; color: var(--nu-warning-amber); }
    .nu-pill-urgent { background: #ffe8e0; color: var(--nu-alert-red); }
    .nu-pill-pending { background: #e8f4ff; color: #0033cc; }

    /* INFO BOX */
    .nu-info-box {
      background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 6px;
      margin: 14px 0;
    }
    .nu-info-box h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-info-box p {
      font-size: 0.94rem;
      margin: 4px 0;
      color: var(--nu-dark-text);
    }

    /* CALLOUT */
    .nu-callout {
      background: #fffbe6;
      border-left: 5px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 14px 0;
      font-size: 0.94rem;
      color: var(--nu-dark-text);
    }
    .nu-callout strong { color: #8a6d00; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 8px 0 0;
    }
    .nu-checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      font-size: 0.94rem;
      color: var(--nu-body-text);
      border-bottom: 1px dashed var(--nu-medium-gray);
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

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 18px;
      opacity: 0.6;
    }
    .nu-footer-name {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-white);
      margin-bottom: 4px;
    }
    .nu-footer-title {
      font-size: 0.85rem;
      font-weight: 300;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.7);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 48px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-wrap { padding: 40px 22px 30px; }
      .nu-action-title { font-size: 1.6rem; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 12px 16px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-info-box, .nu-callout { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-page-banner">Facilities Action Plan · Water Intrusion Remediation</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="nu-action-title">
        <span class="nu-first-word">Address</span> Water Intrusion — Professional Waterproofing Required
      </h1>

      <div class="nu-action-meta">
        <div><strong>Source:</strong> reMarkable action item</div>
        <div><strong>Opened:</strong> April 23, 2026</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Status:</strong> <span class="nu-pill nu-pill-urgent">Open — Urgent</span></div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-badge">Priority</div>
        <div class="nu-priority-text">
          <strong>Water intrusion is time-sensitive.</strong> Standing or tracking moisture compounds damage daily — drywall, insulation, subfloor, and electrical risk grow with every hour left unaddressed. Target vendor contact within 48 hours of this plan being issued.
        </div>
      </div>

      <!-- SECTION 1: THE ISSUE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Issue</span> <span class="nu-rest">Summary</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">1</span>What we know right now</div>

        <div class="nu-grid-2">
          <div class="nu-card">
            <h3>Problem Identified</h3>
            <p>Active water intrusion observed. Source and extent still need to be confirmed by a licensed waterproofing professional before any permanent fix is scoped or quoted.</p>
            <ul>
              <li>Moisture is entering from outside the building envelope</li>
              <li>Severity requires professional diagnosis, not a DIY patch</li>
              <li>Scope of repair is unknown until inspection complete</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Why Professional Waterproofing</h3>
            <p>A qualified waterproofing contractor will identify the actual entry point, not just the symptom. Sealant on the wrong surface wastes money and leaves the leak active behind the fix.</p>
            <ul>
              <li>Moisture mapping and thermal imaging</li>
              <li>Proper membrane, drainage, or grading correction</li>
              <li>Written warranty on the repair</li>
            </ul>
          </div>
        </div>

        <div class="nu-callout">
          <strong>Note:</strong> Do not apply interior caulking, sealants, or paint over affected areas before the vendor walk-through. Doing so hides the source and can void a warranty.
        </div>
      </section>

      <!-- SECTION 2: IMMEDIATE STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Immediate</span> <span class="nu-rest">Steps — Next 48 Hours</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">2</span>Execute in order</div>

        <ol class="nu-step-list">
          <li><strong>Document the damage.</strong> Photograph every affected wall, floor, ceiling, and fixture with a timestamp. Capture wide shots and close-ups of staining, swelling, or mildew.</li>
          <li><strong>Stop active water.</strong> Place towels or absorbent mats at the point of entry. If water is pooling, use a shop vac. Do not move valuables until photographs are taken.</li>
          <li><strong>Turn on dehumidification.</strong> Run a dehumidifier and open interior doors to promote air movement. High humidity accelerates mold growth within 48–72 hours.</li>
          <li><strong>Isolate electrical risk.</strong> If water is near outlets, switches, or fixtures, kill power to that circuit at the breaker until a professional clears it.</li>
          <li><strong>Call three waterproofing vendors (list below).</strong> Request site inspection with written estimate. Note response time on each call.</li>
          <li><strong>Notify insurance carrier.</strong> Open a claim file, even if repairs ultimately fall below deductible. The claim number preserves the option later.</li>
        </ol>
      </section>

      <!-- SECTION 3: VENDOR SHORTLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Vendor</span> <span class="nu-rest">Shortlist — Birmingham Area</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">3</span>Request three written estimates</div>

        <div class="nu-info-box">
          <h4>How to evaluate the bids</h4>
          <p>Compare scope, warranty term, and start date — not just price. Lowest bid that skips drainage or membrane work is not the value it appears to be.</p>
        </div>

        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Vendor Category</th>
                <th>What They Should Provide</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Waterproofing Specialist #1</strong><br><span style="font-size:0.82rem;color:#777;">Full-service foundation / envelope</span></td>
                <td>Moisture inspection, thermal imaging, written scope, transferable warranty</td>
                <td><span class="nu-pill nu-pill-pending">To Call</span></td>
              </tr>
              <tr>
                <td><strong>Waterproofing Specialist #2</strong><br><span style="font-size:0.82rem;color:#777;">Second opinion</span></td>
                <td>Independent diagnosis — do not share Vendor #1's findings with them</td>
                <td><span class="nu-pill nu-pill-pending">To Call</span></td>
              </tr>
              <tr>
                <td><strong>Licensed Roofer</strong><br><span style="font-size:0.82rem;color:#777;">If intrusion is from above</span></td>
                <td>Roof inspection, flashing check, written report on penetrations</td>
                <td><span class="nu-pill nu-pill-open">Conditional</span></td>
              </tr>
              <tr>
                <td><strong>Water Mitigation / Restoration</strong><br><span style="font-size:0.82rem;color:#777;">If drywall or flooring is wet</span></td>
                <td>Drying equipment, moisture meter readings, mold assessment</td>
                <td><span class="nu-pill nu-pill-open">Conditional</span></td>
              </tr>
              <tr>
                <td><strong>General Contractor</strong><br><span style="font-size:0.82rem;color:#777;">For post-remediation repair</span></td>
                <td>Replace damaged drywall, paint, trim, flooring after moisture cleared</td>
                <td><span class="nu-pill nu-pill-pending">After Diagnosis</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="nu-callout">
          <strong>Aaron's rule:</strong> Never accept a verbal estimate. Every vendor submits a written scope with line-item pricing, warranty term, start date, and certificate of insurance before work begins.
        </div>
      </section>

      <!-- SECTION 4: QUESTIONS TO ASK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Questions</span> <span class="nu-rest">to Ask Each Vendor</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">4</span>Use this on every call</div>

        <div class="nu-grid-2">
          <div class="nu-card">
            <h3>Diagnostic Questions</h3>
            <ul>
              <li>What is the actual source of the intrusion?</li>
              <li>Will you provide thermal or moisture-meter readings?</li>
              <li>Is this a one-time event or a recurring pattern?</li>
              <li>Is there hidden damage behind drywall or subfloor?</li>
              <li>Do you recommend a mold assessment?</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Scope &amp; Warranty Questions</h3>
            <ul>
              <li>What is the written warranty term and coverage?</li>
              <li>Is the warranty transferable to a future owner?</li>
              <li>Does the scope include drainage, membrane, or only sealant?</li>
              <li>Do you subcontract any portion of this work?</li>
              <li>What is your earliest possible start date?</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Credentials &amp; Insurance</h3>
            <ul>
              <li>Alabama contractor license number</li>
              <li>General liability and workers comp certificate</li>
              <li>Three recent references with photos of completed work</li>
              <li>BBB standing and online review history</li>
            </ul>
          </div>
          <div class="nu-card">
            <h3>Payment &amp; Terms</h3>
            <ul>
              <li>Deposit required? What percentage?</li>
              <li>Progress payment schedule</li>
              <li>Final payment tied to written completion sign-off</li>
              <li>Change-order policy if hidden damage is found</li>
              <li>Will they direct-bill the insurance claim?</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 5: BUDGET & TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Budget</span> <span class="nu-rest">&amp; Timeline Framework</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">5</span>Expectations before quotes arrive</div>

        <div class="nu-info-box">
          <h4>Timeline Target</h4>
          <p><strong>Days 1–2:</strong> Document, stabilize, call three vendors, open insurance claim.</p>
          <p><strong>Days 3–7:</strong> Receive written estimates, compare scope, select vendor.</p>
          <p><strong>Week 2:</strong> Vendor begins remediation. Moisture mitigation runs first, permanent waterproofing second.</p>
          <p><strong>Weeks 3–4:</strong> Post-remediation repairs — drywall, paint, flooring, trim.</p>
        </div>

        <div class="nu-callout">
          <strong>Dollar discipline:</strong> Do not sign the highest bid to "just be safe," and do not sign the lowest bid to save money. Sign the bid whose written scope actually solves the root cause with a warranty long enough to outlast the next storm season.
        </div>
      </section>

      <!-- SECTION 6: FOLLOW-UP CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Close-Out</span> <span class="nu-rest">Checklist</span></h2>

        <div class="nu-badge"><span class="nu-badge-num">6</span>Do not call this job done until all boxes are checked</div>

        <div class="nu-card">
          <ul class="nu-checklist">
            <li>Written scope-of-work signed by selected vendor</li>
            <li>Certificate of insurance on file before work starts</li>
            <li>Photographs taken at every stage — before, during, after</li>
            <li>Moisture meter reading confirms dry substrate before repair phase</li>
            <li>Written warranty document received and filed</li>
            <li>Final walk-through performed with Aaron present</li>
            <li>Insurance claim either closed or withdrawn with reason documented</li>
            <li>Cost, vendor, and warranty logged to facilities records</li>
            <li>Follow-up inspection scheduled 6 months out to verify fix held</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 7: NOTES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="nu-first-word">Owner</span> <span class="nu-rest">Notes</span></h2>
        <div class="nu-card">
          <p>This action plan is generated from a reMarkable tablet note captured April 23, 2026. Aaron owns the decision and the vendor selection. Caroline Butler may coordinate scheduling and insurance paperwork, but any contract signature, deposit, or change order requires Aaron's direct review.</p>
          <p style="margin-top:10px;">Update this record in <strong>~/norris-ops/internal/</strong> as vendor quotes arrive. Do not close the item until the close-out checklist is fully complete.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-name">Aaron C. Norris</div>
    <div class="nu-footer-title">Founder &amp; CEO — Norris Utilities®, LLC</div>
    <div class="nu-footer-contact">
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>