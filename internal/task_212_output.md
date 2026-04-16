<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alabama SOS LLC Search — Golan / Pel — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-warn: #C8102E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      top: -40%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* WHITE CHEVRON TRANSITION */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      padding-bottom: 65%;
      background: radial-gradient(circle, rgba(0,51,204,0.04) 0%, transparent 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE BLOCK */
    .nu-page-kicker {
      display: inline-block;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(6,208,255,0.12);
      padding: 6px 14px;
      border-radius: 3px;
      margin-bottom: 18px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      line-height: 1.2;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-lede {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 820px;
      margin-bottom: 36px;
    }

    h3.nu-subhead {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-blue);
      margin: 36px 0 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    h3.nu-subhead span { color: var(--nu-dark-text); font-weight: 700; }

    /* CHEVRON BADGES */
    .nu-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0 30px;
    }
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 24px 10px 16px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-badge.alt {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
    }
    .nu-badge.warn {
      background: linear-gradient(135deg, #6b0f1a 0%, #a51a2c 100%);
    }

    /* CONTEXT CARD */
    .nu-context-card {
      background: var(--nu-light-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 32px;
    }
    .nu-context-card p { margin-bottom: 10px; }
    .nu-context-card p:last-child { margin-bottom: 0; }

    /* STEP GRID */
    .nu-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin: 22px 0 36px;
    }
    .nu-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .nu-step-num {
      position: absolute;
      top: -14px;
      left: 18px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      padding: 5px 12px;
      border-radius: 3px;
    }
    .nu-step h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin: 6px 0 10px;
    }
    .nu-step p, .nu-step li { font-size: 0.95rem; }
    .nu-step ul { padding-left: 18px; margin-top: 6px; }
    .nu-step ul li { margin-bottom: 4px; }
    .nu-step a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
      word-break: break-word;
    }
    .nu-step a:hover { text-decoration: underline; }

    /* TABLES */
    .nu-table-wrap { overflow-x: auto; margin: 20px 0 36px; }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table .nu-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-tag.fill { background: rgba(0,51,204,0.12); color: var(--nu-blue); }
    .nu-tag.action { background: rgba(200,16,46,0.12); color: var(--nu-warn); }
    .nu-tag.info { background: rgba(6,208,255,0.18); color: #006080; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 16px 0 32px;
    }
    .nu-checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 16px 14px 48px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.97rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.08) 100%);
      border: 1px solid rgba(0,0,255,0.15);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 28px 0;
    }
    .nu-callout strong { color: var(--nu-blue); }

    .nu-warn-box {
      background: #fff5f6;
      border-left: 5px solid var(--nu-warn);
      padding: 18px 22px;
      border-radius: 0 6px 6px 0;
      margin: 20px 0 32px;
      font-size: 0.95rem;
    }
    .nu-warn-box strong { color: var(--nu-warn); }

    /* BUTTONS */
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 13px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
      margin-left: 10px;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* META BAR */
    .nu-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 8px;
      margin-bottom: 30px;
      font-size: 0.88rem;
    }
    .nu-meta-bar div strong {
      display: block;
      color: var(--nu-cyan);
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 4px;
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-section-title { font-size: 1.5rem; }
      .nu-content-area { padding: 40px 20px; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 8px 14px; }
      .nu-btn-secondary { margin-left: 0; margin-top: 10px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-table { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <span class="nu-page-kicker">reMarkable Action Item · Due Diligence</span>
      <h1 class="nu-section-title">Alabama SOS <span>LLC Search — "Golan" &amp; "Pel"</span></h1>
      <p class="nu-section-lede">
        Search the Alabama Secretary of State Business Entity Records for every active or inactive
        LLC whose name contains <strong>"Golan"</strong> or <strong>"Pel"</strong>. Capture officers,
        registered agents, formation dates, and current status so Aaron has a single source of truth
        before any next move.
      </p>

      <div class="nu-meta-bar">
        <div><strong>Owner</strong>Aaron C. Norris</div>
        <div><strong>Source</strong>reMarkable — action item</div>
        <div><strong>Date Captured</strong>2026-04-16</div>
        <div><strong>Jurisdiction</strong>State of Alabama</div>
        <div><strong>Status</strong>Open — ready to run</div>
      </div>

      <div class="nu-badge-row">
        <span class="nu-badge">PUBLIC RECORDS</span>
        <span class="nu-badge alt">ALABAMA SOS</span>
        <span class="nu-badge">LLC LOOKUP</span>
        <span class="nu-badge warn">DO NOT CONTACT WITHOUT REVIEW</span>
      </div>

      <div class="nu-context-card">
        <p><strong>Why this matters.</strong> Aaron flagged two name fragments — "Golan" and "Pel" —
        on the reMarkable and asked for a clean pull of every Alabama LLC that matches. The Alabama
        Secretary of State runs a free public Business Entity Records portal that returns entity
        name, ID number, type, status, formation date, and the registered agent on record.</p>
        <p><strong>Goal of this task.</strong> Produce a verified, dated list of every matching
        entity with enough detail for Aaron to decide which ones (if any) warrant follow-up — a
        background check, a conflict check, or a conversation. <strong>No outreach happens until
        Aaron reviews the completed list.</strong></p>
      </div>

      <!-- ===================== SEARCH STEPS ===================== -->
      <h3 class="nu-subhead">Search <span>Procedure</span></h3>
      <div class="nu-steps">

        <div class="nu-step">
          <span class="nu-step-num">STEP 01</span>
          <h4>Open the Alabama SOS portal</h4>
          <p>Go to the official Business Entity Records search:</p>
          <ul>
            <li><a href="https://arc-sos.state.al.us/cgi/corpname.mbr/input" target="_blank" rel="noopener">arc-sos.state.al.us/cgi/corpname.mbr/input</a></li>
          </ul>
          <p>This is the free, no-login version. If the URL is down, start from <a href="https://www.sos.alabama.gov/" target="_blank" rel="noopener">sos.alabama.gov</a> → Business Services → Business Entity Records.</p>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 02</span>
          <h4>Run the first query — "Golan"</h4>
          <p>In the Entity Name box, type <strong>Golan</strong>. Select <em>Starting With</em> and then run it a second time with <em>Containing</em>. Leave Entity Type as "All" so LLCs, corporations, and trade names all surface.</p>
          <ul>
            <li>Record every result, even ones that look unrelated.</li>
            <li>Screenshot the full result page before drilling in.</li>
          </ul>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 03</span>
          <h4>Run the second query — "Pel"</h4>
          <p>Repeat with <strong>Pel</strong>. Because this fragment is short, expect a large result set — entities like "Pelican", "Pell", "Peltier" will appear. Keep them; filter later, not during capture.</p>
          <ul>
            <li>Use <em>Containing</em> to catch names where "Pel" is mid-word.</li>
            <li>Export or copy each results page into the capture template below.</li>
          </ul>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 04</span>
          <h4>Open each matching LLC detail page</h4>
          <p>Click through every LLC hit — corporations and trade names can be skipped unless Aaron asks otherwise. From each LLC detail record, capture:</p>
          <ul>
            <li>Full legal entity name + entity ID</li>
            <li>Status (Exists, Dissolved, Administratively Dissolved, Forfeited)</li>
            <li>Formation date and jurisdiction</li>
            <li>Registered agent name and address</li>
            <li>Principal office address</li>
            <li>Member / officer list if displayed</li>
          </ul>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 05</span>
          <h4>Pull the filing history PDFs</h4>
          <p>For every active LLC that looks like a possible match, download the most recent formation and annual filings (Certificate of Formation, Annual Reports). These PDFs name members, officers, and amendments.</p>
          <ul>
            <li>Save files as <em>ALSOS_[EntityName]_[FilingType]_[Year].pdf</em>.</li>
            <li>Drop them in <strong>~/norris-ops/internal/research/al_sos_golan_pel/</strong>.</li>
          </ul>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 06</span>
          <h4>Cross-check the registered agent</h4>
          <p>Many shell LLCs share a commercial registered agent (CT Corp, Registered Agents Inc., URS Agents, LegalZoom). Flag any cluster where three or more of the matches use the same agent — that is a common ownership signal worth noting.</p>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 07</span>
          <h4>Build the summary table</h4>
          <p>Roll every match into the table below. Keep it to one row per entity. Use the status tags shown in the legend so Aaron can sort on his phone.</p>
        </div>

        <div class="nu-step">
          <span class="nu-step-num">STEP 08</span>
          <h4>Hand back to Aaron</h4>
          <p>Post the completed table + PDFs to the ops portal, then send Aaron a two-line Telegram summary: total matches, how many active, and which ones (if any) warrant a second look. <strong>Do not contact any of these entities.</strong></p>
        </div>

      </div>

      <!-- ===================== CAPTURE TABLE ===================== -->
      <h3 class="nu-subhead">Capture <span>Template</span></h3>
      <p style="margin-bottom:14px;">Fill this table as you work. One row per matching LLC. Leave fields blank only if the Alabama SOS record itself is silent — never guess.</p>

      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>Entity Name</th>
              <th>Entity ID</th>
              <th>Status</th>
              <th>Formation Date</th>
              <th>Registered Agent</th>
              <th>Principal Address</th>
              <th>Match Term</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><em>e.g., Golan Holdings, LLC</em></td>
              <td>000-000</td>
              <td><span class="nu-tag fill">Exists</span></td>
              <td>YYYY-MM-DD</td>
              <td>Agent name + city</td>
              <td>Street, City, AL ZIP</td>
              <td>Golan</td>
              <td>Members listed on COF</td>
            </tr>
            <tr>
              <td><em>e.g., Pel Contracting, LLC</em></td>
              <td>000-000</td>
              <td><span class="nu-tag action">Dissolved</span></td>
              <td>YYYY-MM-DD</td>
              <td>Agent name + city</td>
              <td>Street, City, AL ZIP</td>
              <td>Pel</td>
              <td>Admin dissolved; no last AR</td>
            </tr>
            <tr>
              <td><em>e.g., Pelham Lane Rentals, LLC</em></td>
              <td>000-000</td>
              <td><span class="nu-tag info">Review</span></td>
              <td>YYYY-MM-DD</td>
              <td>Agent name + city</td>
              <td>Street, City, AL ZIP</td>
              <td>Pel (mid-word)</td>
              <td>Possible false positive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:0.88rem;color:#555;margin-top:-14px;margin-bottom:30px;">
        <strong>Legend:</strong>
        <span class="nu-tag fill">Exists</span> active in good standing ·
        <span class="nu-tag action">Dissolved</span> no longer active ·
        <span class="nu-tag info">Review</span> name matches but needs human eyes.
      </p>

      <!-- ===================== COMPLETION CHECKLIST ===================== -->
      <h3 class="nu-subhead">Completion <span>Checklist</span></h3>
      <ul class="nu-checklist">
        <li>Ran "Golan" with both <em>Starting With</em> and <em>Containing</em> on Alabama SOS.</li>
        <li>Ran "Pel" with both <em>Starting With</em> and <em>Containing</em> on Alabama SOS.</li>
        <li>Captured entity ID, status, formation date, registered agent, and principal address for every LLC hit.</li>
        <li>Downloaded Certificate of Formation + most recent Annual Report PDF for every active match.</li>
        <li>Filed PDFs under ~/norris-ops/internal/research/al_sos_golan_pel/ with the naming convention above.</li>
        <li>Flagged registered-agent clusters (same agent on 3+ entities).</li>
        <li>Summary table filled in — one row per LLC, no blank required fields.</li>
        <li>Two-line Telegram summary sent to Aaron: total matches · active count · review flags.</li>
        <li>No outbound contact was made to any listed entity or agent.</li>
      </ul>

      <!-- ===================== GUARDRAILS ===================== -->
      <h3 class="nu-subhead">Guardrails <span>&amp; Cautions</span></h3>
      <div class="nu-warn-box">
        <strong>Hands off until Aaron signs off.</strong> This search is pure due diligence.
        Do not call, email, or otherwise contact any entity, owner, or registered agent surfaced
        by this search. Do not publish the results outside the internal ops portal.
      </div>
      <div class="nu-callout">
        <p><strong>Data accuracy.</strong> Alabama SOS records can lag real-world ownership by months.
        An "Exists" status only means the annual report is current — it does not confirm who actually
        runs the business today.</p>
        <p style="margin-top:10px;"><strong>Short-fragment noise.</strong> "Pel" will match names
        like Pelham, Pelican, Peltier. Keep those rows in the capture, but mark them
        <span class="nu-tag info">Review</span> so Aaron can dismiss them quickly.</p>
        <p style="margin-top:10px;"><strong>Escalation path.</strong> If a name clearly overlaps
        with an existing Norris Utilities® customer, vendor, or supplier, stop the search, tag the
        row, and surface it to Aaron before continuing.</p>
      </div>

      <!-- ===================== NEXT ACTIONS ===================== -->
      <h3 class="nu-subhead">Next <span>Actions</span></h3>
      <p style="margin-bottom:22px;">Once the table is complete, Aaron decides which entities — if any — warrant
      a deeper check (public court records, BBB, LinkedIn). This page stays the parent record
      for that follow-up work.</p>

      <div style="margin-top:10px;">
        <a class="nu-btn-primary" href="https://arc-sos.state.al.us/cgi/corpname.mbr/input" target="_blank" rel="noopener">Open Alabama SOS Search</a>
        <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=Alabama%20SOS%20Search%20%E2%80%94%20Golan%20%2F%20Pel%20Results">Send Results to Aaron</a>
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