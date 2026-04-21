<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Water Intrusion Disclosure Omission — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-alert-amber: #E67E22;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 55%, #00AAFF 80%, var(--nu-cyan) 100%);
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
      background-size: 60px 60px, 80px 80px;
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
      width: 68px;
      height: 68px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
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
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 60px 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ DOCUMENT META BAR ══ */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 36px;
      font-size: 0.85rem;
    }
    .doc-meta-item { display: flex; align-items: center; gap: 6px; }
    .doc-meta-label {
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .doc-meta-value { color: var(--nu-dark-text); font-weight: 400; }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 24px;
      background: linear-gradient(90deg, #FDEAEA 0%, #FFF5F5 100%);
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 4px;
      margin-bottom: 40px;
    }
    .priority-badge {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .priority-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-block {
      margin-bottom: 44px;
    }

    /* ══ ACTION TITLE ══ */
    .action-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .action-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 36px;
    }

    /* ══ FACT TABLE ══ */
    .fact-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .fact-table th, .fact-table td {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.95rem;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .fact-table th {
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      width: 32%;
      vertical-align: top;
    }
    .fact-table td { color: var(--nu-dark-text); }
    .fact-table tr:last-child th, .fact-table tr:last-child td { border-bottom: none; }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 14px 18px 14px 54px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      transition: all 0.2s ease;
    }
    .checklist li:hover {
      border-color: var(--nu-blue);
      box-shadow: 0 2px 8px rgba(0,0,255,0.08);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-blue);
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }

    /* ══ ALERT BOX ══ */
    .alert-box {
      background: #FFF8E1;
      border-left: 5px solid var(--nu-alert-amber);
      padding: 20px 24px;
      border-radius: 4px;
      margin: 24px 0;
    }
    .alert-box-title {
      font-weight: 900;
      color: var(--nu-alert-amber);
      text-transform: uppercase;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    .alert-box p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ RISK GRID ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
      margin-top: 12px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .risk-card.severe { border-top-color: var(--nu-alert-red); }
    .risk-card.moderate { border-top-color: var(--nu-alert-amber); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .risk-tag {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .risk-tag.severe { background: #FDEAEA; color: var(--nu-alert-red); }
    .risk-tag.moderate { background: #FFF4E5; color: var(--nu-alert-amber); }
    .risk-tag.info { background: #E3F2FD; color: var(--nu-blue); }

    /* ══ BADGE BAR ══ */
    .status-badge {
      display: inline-block;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 22px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%);
      margin-bottom: 12px;
    }

    /* ══ DECISION TABLE ══ */
    .decision-path {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      margin-top: 16px;
    }
    .decision-path h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1.05rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .decision-path ol {
      padding-left: 22px;
    }
    .decision-path ol li {
      margin-bottom: 10px;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .decision-path ol li strong { color: var(--nu-blue); }

    /* ══ NEXT ACTIONS BLOCK ══ */
    .next-action-block {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 32px 28px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .next-action-block h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .next-action-block p {
      font-size: 0.98rem;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    .next-action-block .deadline {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 6px 14px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 10px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      line-height: 1.9;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 0 22px; }
      .action-title { font-size: 1.55rem; }
      .fact-table th, .fact-table td { display: block; width: 100%; padding: 10px 14px; }
      .fact-table th { border-bottom: none; padding-bottom: 0; }
      .doc-meta { flex-direction: column; gap: 8px; }
      .priority-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .risk-card, .checklist li { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOCUMENT META -->
      <div class="doc-meta">
        <div class="doc-meta-item"><span class="doc-meta-label">Document:</span><span class="doc-meta-value">Action Item Brief</span></div>
        <div class="doc-meta-item"><span class="doc-meta-label">Source:</span><span class="doc-meta-value">reMarkable</span></div>
        <div class="doc-meta-item"><span class="doc-meta-label">Date Logged:</span><span class="doc-meta-value">April 20, 2026</span></div>
        <div class="doc-meta-item"><span class="doc-meta-label">Owner:</span><span class="doc-meta-value">Aaron C. Norris</span></div>
        <div class="doc-meta-item"><span class="doc-meta-label">Status:</span><span class="doc-meta-value">Open — Legal Review Pending</span></div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-badge">Urgent</div>
        <div class="priority-text">Disclosure omission on an active real-estate listing carries legal, financial, and reputational exposure. Pause any pending offer action until corrected in writing.</div>
      </div>

      <!-- ACTION TITLE -->
      <div class="section-block">
        <div class="status-badge">ACTION ITEM — REAL ESTATE COMPLIANCE</div>
        <h1 class="action-title">Address Water Intrusion Issue — Disclosure Omission on For-Sale Property</h1>
        <p class="action-subtitle">A known water intrusion condition was not included on the seller's property disclosure statement for a property currently listed for sale. This brief captures the facts to gather, the required corrections, and the decision path before the next buyer interaction.</p>
      </div>

      <!-- SECTION 1 — SITUATION -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Situation</span> <span class="rest">Snapshot</span></h2>
        <table class="fact-table">
          <tr>
            <th>Nature of Issue</th>
            <td>Water intrusion — active or historical entry of water into the structure (basement, crawl space, roof, wall, or foundation). Root cause and scope to be confirmed.</td>
          </tr>
          <tr>
            <th>Current Problem</th>
            <td>The condition was not disclosed on the Seller's Property Disclosure Statement (SPDS) provided to prospective buyers.</td>
          </tr>
          <tr>
            <th>Core Risk</th>
            <td>Material-fact omission on a residential disclosure can constitute misrepresentation under Alabama real-estate and consumer protection law, and may void the sale, trigger rescission, or support a claim for damages.</td>
          </tr>
          <tr>
            <th>Window for Correction</th>
            <td>Correct <strong>before</strong> offer acceptance, contract execution, or buyer-funded inspection. Every day of delay increases exposure.</td>
          </tr>
          <tr>
            <th>Agent / Broker Notification</th>
            <td>Listing agent and managing broker must be informed in writing so the updated disclosure can be redistributed to every party that received the original.</td>
          </tr>
        </table>
      </div>

      <!-- SECTION 2 — FACTS TO CONFIRM -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Facts</span> <span class="rest">to Confirm Before Action</span></h2>
        <ul class="checklist">
          <li>
            <strong>Location of intrusion</strong>
            Identify exact area — basement wall, crawl space, attic/roof deck, window frame, foundation, slab penetration. Note square footage affected.
          </li>
          <li>
            <strong>Date first observed</strong>
            Establish the earliest known date the condition was noticed — by the seller, a contractor, an inspector, or a prior occupant.
          </li>
          <li>
            <strong>Cause, if known</strong>
            Storm event, failed grading, gutter overflow, plumbing leak, cracked foundation, roof penetration, or unknown. Attach any contractor assessments on file.
          </li>
          <li>
            <strong>Remediation history</strong>
            Whether any repair, sealant, sump pump install, waterproofing, mold remediation, or drywall replacement has been performed, and by whom.
          </li>
          <li>
            <strong>Current condition</strong>
            Active leak, dormant, or fully resolved. Include photos and dates. Note any visible staining, efflorescence, mold, or odor.
          </li>
          <li>
            <strong>Insurance claim history</strong>
            Any homeowner insurance claim filed related to water damage. This will appear on a CLUE report and should match the disclosure.
          </li>
          <li>
            <strong>Paper trail</strong>
            Collect invoices, estimates, contractor names, inspection reports, and any text or email referring to the issue.
          </li>
        </ul>
      </div>

      <!-- SECTION 3 — WHY IT MATTERS -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Exposure Profile</span></h2>
        <div class="risk-grid">
          <div class="risk-card severe">
            <div class="risk-tag severe">Severe</div>
            <h4>Rescission of Sale</h4>
            <p>A buyer who discovers an undisclosed material defect post-closing may pursue rescission — unwinding the sale and returning funds, with the seller potentially liable for transaction costs.</p>
          </div>
          <div class="risk-card severe">
            <div class="risk-tag severe">Severe</div>
            <h4>Fraud / Misrepresentation Claim</h4>
            <p>Alabama law recognizes fraudulent concealment and innocent misrepresentation as causes of action. Damages can include repair cost, diminution in value, and in some cases punitive damages.</p>
          </div>
          <div class="risk-card moderate">
            <div class="risk-tag moderate">Moderate</div>
            <h4>Broker / Agent Liability</h4>
            <p>A listing agent with knowledge of the condition who did not ensure disclosure may face Alabama Real Estate Commission discipline and civil co-defendant exposure.</p>
          </div>
          <div class="risk-card moderate">
            <div class="risk-tag moderate">Moderate</div>
            <h4>Appraisal / Lender Re-Review</h4>
            <p>An amended disclosure may trigger a re-appraisal or require lender notification — potentially delaying closing or reducing loan amount if value is impacted.</p>
          </div>
          <div class="risk-card">
            <div class="risk-tag info">Neutral</div>
            <h4>Corrected Disclosure Cures Most Risk</h4>
            <p>An amended written disclosure delivered to all offerors and acknowledged in writing dramatically limits downstream liability. Correction is the cheapest remedy available.</p>
          </div>
          <div class="risk-card">
            <div class="risk-tag info">Neutral</div>
            <h4>Price Adjustment Option</h4>
            <p>A credit at closing or price reduction reflecting repair cost is often sufficient to keep a deal intact once the defect is disclosed in good faith.</p>
          </div>
        </div>
      </div>

      <!-- SECTION 4 — ALERT -->
      <div class="section-block">
        <div class="alert-box">
          <div class="alert-box-title">Do Not — Until Counsel Confirms</div>
          <p>Do not communicate details of the water intrusion to the buyer or buyer's agent informally (text, call, email) before filing the amended written disclosure. Informal statements can be characterized as selective disclosure and complicate the record. Route everything through the listing agent and — where advisable — the attorney.</p>
        </div>
      </div>

      <!-- SECTION 5 — DECISION PATH -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Decision</span> <span class="rest">Path</span></h2>
        <div class="decision-path">
          <h4>Step-by-Step Correction Protocol</h4>
          <ol>
            <li><strong>Stop the clock.</strong> Confirm with the listing agent that no offer is pending signature. If one is pending, request a pause in writing.</li>
            <li><strong>Consult real-estate counsel.</strong> A 30-minute call with an Alabama real-estate attorney to confirm the amendment language and delivery obligation under the specific contract form.</li>
            <li><strong>Draft the amended SPDS.</strong> Include location, date first observed, cause if known, remediation history, current status, and any related insurance claim. Attach supporting documents.</li>
            <li><strong>Obtain seller signature and date.</strong> The amended disclosure must be signed fresh — do not backdate.</li>
            <li><strong>Deliver to every prior recipient.</strong> The listing agent redistributes to every buyer agent who received the original — request written acknowledgment of receipt.</li>
            <li><strong>Offer a remedy, if appropriate.</strong> Where warranted, pair the amended disclosure with a repair credit, completed repair documentation, or a price adjustment to keep the transaction on track.</li>
            <li><strong>Log and file.</strong> Save the amended disclosure, acknowledgment receipts, attorney correspondence, and timeline in the property file and Norris Utilities® operations archive.</li>
          </ol>
        </div>
      </div>

      <!-- SECTION 6 — NEXT ACTION -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Aaron's</span> <span class="rest">Next Action</span></h2>
        <div class="next-action-block">
          <h3>Before the next buyer interaction occurs on this property:</h3>
          <p>1. Call real-estate counsel to confirm the correct amendment form and delivery path under Alabama law.</p>
          <p>2. Sit with the listing agent and gather the seven facts listed in the "Facts to Confirm" section above.</p>
          <p>3. Execute the amended disclosure and route it through the listing broker for redistribution with written acknowledgment.</p>
          <p>4. Decide, with counsel's guidance, whether a repair credit, completed repair, or price adjustment is the cleanest remedy to close in good faith.</p>
          <div class="deadline">Target: Complete Within 72 Hours</div>
        </div>
      </div>

      <!-- SECTION 7 — PRINCIPLES -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first">Guiding</span> <span class="rest">Principles</span></h2>
        <table class="fact-table">
          <tr>
            <th>Honesty First</th>
            <td>Full disclosure protects the buyer, the seller, and the deal. A corrected disclosure delivered promptly and in writing is the cheapest form of insurance available.</td>
          </tr>
          <tr>
            <th>Paper Beats Memory</th>
            <td>Every step of the correction must be in writing with a date stamp. Verbal reassurances do not survive a lawsuit.</td>
          </tr>
          <tr>
            <th>Counsel Before Contact</th>
            <td>Talk to the attorney before the buyer. The order of operations protects the record.</td>
          </tr>
          <tr>
            <th>Resolve, Don't Conceal</th>
            <td>The long-term cost of an undisclosed defect always exceeds the short-term inconvenience of amending a disclosure.</td>
          </tr>
        </table>
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