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
      --nu-alert-red: #C62828;
      --nu-alert-amber: #E08700;
      --nu-alert-green: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 80px; height: 80px;
      margin: 0 auto 16px;
      fill: var(--nu-white);
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-title {
      margin-top: 24px;
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-white);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      opacity: 0.95;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* STATUS BANNER */
    .status-banner {
      background: linear-gradient(135deg, #fff4e5 0%, #ffe8cc 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .status-banner .status-icon {
      font-size: 1.8rem;
      line-height: 1;
      flex-shrink: 0;
    }
    .status-banner .status-body {
      font-size: 0.98rem;
      color: #5c3a00;
    }
    .status-banner .status-body strong {
      display: block;
      color: #3d2700;
      margin-bottom: 4px;
      font-size: 1.05rem;
    }

    /* SECTION */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.65rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-subtitle {
      color: #777;
      font-size: 0.95rem;
      margin-bottom: 20px;
    }

    /* ISSUE SUMMARY CARD */
    .issue-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .issue-card p {
      margin-bottom: 14px;
      color: var(--nu-dark-text);
    }
    .issue-card p:last-child { margin-bottom: 0; }

    /* KEY FACTS GRID */
    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    .fact-tile {
      background: var(--nu-light-gray);
      padding: 18px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .fact-label {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .fact-value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      line-height: 1.4;
    }

    /* ACTION STEPS */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 24px 24px 80px;
      margin-bottom: 16px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .step:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      transform: translateY(-2px);
    }
    .step::before {
      content: counter(step);
      position: absolute;
      left: 20px;
      top: 22px;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .step-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .step-meta {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .step-meta.urgent {
      background: #fee;
      color: var(--nu-alert-red);
    }
    .step-meta.soon {
      background: #fff4e5;
      color: var(--nu-alert-amber);
    }
    .step-meta.followup {
      background: #e8f5e9;
      color: var(--nu-alert-green);
    }
    .step-body {
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .step-body:last-child { margin-bottom: 0; }
    .step-body ul {
      margin: 8px 0 0 18px;
    }
    .step-body li {
      margin-bottom: 4px;
    }

    /* VENDOR TABLE */
    .vendor-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .vendor-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .vendor-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .vendor-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .vendor-table tbody tr:hover {
      background: var(--nu-light-gray);
    }
    .vendor-table tbody tr:last-child td { border-bottom: none; }
    .vendor-table .vendor-name {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed #d0d0d8;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .checklist-text strong { color: var(--nu-blue); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #e8f4ff 0%, #d4ecff 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 6px;
      margin-top: 24px;
    }
    .callout-title {
      font-weight: 900;
      color: var(--nu-blue);
      margin-bottom: 8px;
      font-size: 1.05rem;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
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
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 50px; }
      .section-title { font-size: 1.35rem; }
      .step { padding: 20px 20px 20px 20px; }
      .step::before {
        position: relative;
        left: auto; top: auto;
        margin-bottom: 12px;
      }
      .vendor-table thead { display: none; }
      .vendor-table, .vendor-table tbody, .vendor-table tr, .vendor-table td { display: block; width: 100%; }
      .vendor-table tr {
        margin-bottom: 14px;
        border: 1px solid var(--nu-medium-gray);
        border-radius: 6px;
      }
      .vendor-table td {
        border-bottom: 1px dashed var(--nu-medium-gray);
        padding: 10px 14px;
      }
      .vendor-table td::before {
        content: attr(data-label);
        display: block;
        font-weight: 700;
        font-size: 0.75rem;
        color: var(--nu-blue);
        text-transform: uppercase;
        margin-bottom: 4px;
      }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-title">Water Intrusion Remediation — Action Plan</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="status-icon">⚠</div>
        <div class="status-body">
          <strong>Open Action Item — Water Intrusion</strong>
          Professional waterproofing services required. This is a time-sensitive structural matter. Every week of delay increases remediation cost and risk of mold, framing rot, and insurance exposure.
        </div>
      </div>

      <!-- ISSUE SUMMARY -->
      <section class="section">
        <h2 class="section-title">Issue <span>Summary</span></h2>
        <p class="section-subtitle">Captured from reMarkable action item — 2026-04-21</p>

        <div class="issue-card">
          <p><strong>What was noted:</strong> Address water intrusion issue requiring professional waterproofing.</p>
          <p><strong>Why it matters:</strong> Water intrusion is the single most expensive category of deferred property maintenance. Left untreated, a minor leak becomes framing damage, drywall replacement, flooring failure, and mold remediation — each multiplying the original repair cost.</p>
          <p><strong>Decision needed from Aaron:</strong> (1) Confirm the property and location of intrusion, (2) authorize professional inspection, (3) approve vendor selection for waterproofing scope of work.</p>

          <div class="facts-grid">
            <div class="fact-tile">
              <div class="fact-label">Priority</div>
              <div class="fact-value">High — structural / moisture</div>
            </div>
            <div class="fact-tile">
              <div class="fact-label">Category</div>
              <div class="fact-value">Property maintenance</div>
            </div>
            <div class="fact-tile">
              <div class="fact-label">Specialist Required</div>
              <div class="fact-value">Licensed waterproofing contractor</div>
            </div>
            <div class="fact-tile">
              <div class="fact-label">Region</div>
              <div class="fact-value">Birmingham, AL metro</div>
            </div>
            <div class="fact-tile">
              <div class="fact-label">Source</div>
              <div class="fact-value">reMarkable action item</div>
            </div>
            <div class="fact-tile">
              <div class="fact-label">Date Logged</div>
              <div class="fact-value">2026-04-21</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="section">
        <h2 class="section-title">Action <span>Steps</span></h2>
        <p class="section-subtitle">Work this list top to bottom. Do not skip the inspection step.</p>

        <ol class="step-list">
          <li class="step">
            <div class="step-meta urgent">Do This Week</div>
            <div class="step-title">Document the intrusion before it dries</div>
            <div class="step-body">
              Photograph every affected area with a phone, including wide shots and close-ups. Note the date, the weather when the intrusion occurred, and whether water is active or residual. This documentation protects any future insurance claim and gives the vendor a precise starting point.
              <ul>
                <li>Photos of each stained, wet, or discolored surface</li>
                <li>Moisture meter reading if available (otherwise vendor brings one)</li>
                <li>Notes on recent rain events or plumbing work</li>
              </ul>
            </div>
          </li>

          <li class="step">
            <div class="step-meta urgent">Do This Week</div>
            <div class="step-title">Stop active water first — temporary containment</div>
            <div class="step-body">
              If water is still entering, place buckets, towels, or a wet-vac to contain it. Move electronics, paper, and fabric items away from the wall or floor in question. If the ceiling is sagging or a light fixture is wet, shut power to that circuit at the breaker before going further.
            </div>
          </li>

          <li class="step">
            <div class="step-meta soon">Within 3 Business Days</div>
            <div class="step-title">Schedule a professional waterproofing inspection</div>
            <div class="step-body">
              Call two or three licensed waterproofing contractors in the Birmingham metro and request free on-site assessments. Ask each to identify the water source, not just the damage location — waterproofing fails when crews treat symptoms instead of entry points.
              <ul>
                <li>Ask: "Do you use hydrostatic testing or just visual inspection?"</li>
                <li>Ask: "Will you write a scope of work with warranty terms before any cash changes hands?"</li>
                <li>Ask: "Who holds the warranty — the installer, the manufacturer, or both?"</li>
              </ul>
            </div>
          </li>

          <li class="step">
            <div class="step-meta soon">Within 7 Business Days</div>
            <div class="step-title">Compare written estimates side by side</div>
            <div class="step-body">
              Never go off a verbal quote for waterproofing. Require every bidder to put their scope, materials, dewatering approach, and warranty length in writing. Normalize the quotes on a single sheet — square footage treated, linear footage of drainage, membrane type, warranty years — so pricing is apples to apples.
            </div>
          </li>

          <li class="step">
            <div class="step-meta followup">Before Work Begins</div>
            <div class="step-title">Verify license, insurance, and lien position</div>
            <div class="step-body">
              Waterproofing contractors in Alabama should carry an AL General Contractor license for jobs over $50,000 and a Home Builders Licensure Board license for residential work. Ask for a Certificate of Insurance naming Norris Utilities, LLC (or the property owner of record) as additional insured for the duration of the job. Never pay more than 10–25% up front.
            </div>
          </li>

          <li class="step">
            <div class="step-meta followup">After Installation</div>
            <div class="step-title">Retain the warranty and test the fix</div>
            <div class="step-body">
              File the written warranty with property records. Run a hose test or wait for the next rain event and re-inspect. A reputable waterproofer will stand behind the work — if water returns inside the warranty window, the callback is free.
            </div>
          </li>
        </ol>
      </section>

      <!-- VENDOR SHORTLIST -->
      <section class="section">
        <h2 class="section-title">Birmingham <span>Waterproofing Vendors — Shortlist to Call</span></h2>
        <p class="section-subtitle">Call in order. Request written scope and COI from each.</p>

        <table class="vendor-table">
          <thead>
            <tr>
              <th>Vendor Type</th>
              <th>What to Look For</th>
              <th>Typical Scope</th>
              <th>Screening Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Vendor Type" class="vendor-name">Foundation Waterproofing Specialist</td>
              <td data-label="What to Look For">Exterior excavation, interior drain tile, sump pump install</td>
              <td data-label="Typical Scope">Basement, crawlspace, foundation wall</td>
              <td data-label="Screening Question">"Do you warranty against water entry or only against installation defects?"</td>
            </tr>
            <tr>
              <td data-label="Vendor Type" class="vendor-name">Roofing Contractor</td>
              <td data-label="What to Look For">GAF / CertainTeed / Owens Corning certified</td>
              <td data-label="Typical Scope">Flashing, valleys, penetrations, shingles</td>
              <td data-label="Screening Question">"Will you run a water test on the suspect area before writing the scope?"</td>
            </tr>
            <tr>
              <td data-label="Vendor Type" class="vendor-name">Masonry / Tuckpointing</td>
              <td data-label="What to Look For">Brick repointing, sealant application, lintel repair</td>
              <td data-label="Typical Scope">Exterior brick, chimney, window surrounds</td>
              <td data-label="Screening Question">"Do you use a breathable masonry sealer or a film-forming one?"</td>
            </tr>
            <tr>
              <td data-label="Vendor Type" class="vendor-name">Gutter / Drainage</td>
              <td data-label="What to Look For">Downspout extensions, French drain, grading correction</td>
              <td data-label="Typical Scope">Perimeter drainage, yard slope</td>
              <td data-label="Screening Question">"How far from the foundation do your extensions discharge?"</td>
            </tr>
            <tr>
              <td data-label="Vendor Type" class="vendor-name">Mold Remediation (if needed)</td>
              <td data-label="What to Look For">IICRC-certified, separate from the waterproofer</td>
              <td data-label="Typical Scope">Air quality test, containment, remediation</td>
              <td data-label="Screening Question">"Can you provide third-party post-remediation verification?"</td>
            </tr>
          </tbody>
        </table>

        <div class="callout">
          <div class="callout-title">Rule of thumb</div>
          The company that <em>finds the leak</em> should not be the same company that <em>tests the fix</em>. If a vendor both diagnoses and verifies their own work, get a second opinion before signing.
        </div>
      </section>

      <!-- PRE-APPOINTMENT CHECKLIST -->
      <section class="section">
        <h2 class="section-title">Pre-Appointment <span>Checklist</span></h2>
        <p class="section-subtitle">Have these ready before the first inspector arrives.</p>

        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Photos and video</strong> of every affected area, dated within the last 72 hours.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>History of the issue</strong> — first noticed, frequency, correlation with rainfall, any prior repairs.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Property records</strong> — year built, last roof replacement, any prior waterproofing work on file.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Insurance carrier and policy number</strong> — so you can confirm whether sudden vs. gradual water is covered before authorizing work.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Access plan</strong> — confirm the contractor has keyed or supervised access to basement, crawlspace, attic, and roof.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Three specific questions ready</strong> for every bidder (source, warranty, payment terms).</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Decision-maker available</strong> on site — Aaron or designated representative, not a verbal relay.</div>
          </div>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="section">
        <h2 class="section-title">Red <span>Flags — Walk Away If You Hear These</span></h2>
        <div class="issue-card">
          <p>• "We can start today if you sign right now" — high-pressure closing is the #1 tell of a waterproofing scam in the Southeast.</p>
          <p>• "Cash only" or "pay us in full up front" — legitimate contractors accept draws and never require 100% deposit.</p>
          <p>• No written scope of work, or a one-line invoice that says "waterproof basement — $X,XXX".</p>
          <p>• A lifetime warranty with no named entity behind it — lifetime of what? the company? the product? the owner?</p>
          <p>• Pressure to skip the permit or to avoid "making it a big deal with the city" — permits protect the owner, not the contractor.</p>
          <p>• Refusal to provide a Certificate of Insurance naming the property as additional insured.</p>
        </div>
      </section>

      <!-- NEXT STEP -->
      <section class="section">
        <h2 class="section-title">Next <span>Step for Aaron</span></h2>
        <div class="callout">
          <div class="callout-title">Confirm property and authorize first inspection</div>
          Reply to Caroline or acnorris@norrisutilities.com with (1) the address of the property experiencing intrusion, (2) approval to schedule two inspections this week, and (3) a budget ceiling above which the vendor must request re-authorization before proceeding. Once confirmed, a 24-hour callback schedule will be published.
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