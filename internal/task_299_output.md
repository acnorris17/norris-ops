<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peace of Mind Maintenance Program Verification — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-red: #DC2626;
      --nu-green: #059669;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: 65%;
      background-image: radial-gradient(circle at center, rgba(0, 51, 204, 0.07) 0%, rgba(0, 51, 204, 0.02) 40%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TASK CARD */
    .task-banner {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 12px;
      margin-bottom: 40px;
      box-shadow: 0 8px 28px rgba(0, 51, 204, 0.18);
    }
    .task-banner-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .task-banner h1 {
      font-weight: 900;
      font-size: 1.85rem;
      line-height: 1.25;
      margin-bottom: 14px;
    }
    .task-banner-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.85);
    }
    .task-banner-meta span strong {
      color: var(--nu-cyan);
      font-weight: 700;
      margin-right: 6px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .lead {
      color: #0033cc;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
    }

    /* INFO CARDS */
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 18px;
    }
    .info-card h3 {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .info-card p { font-size: 0.95rem; line-height: 1.65; }

    /* STATUS BADGE */
    .status-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #FEF3C7;
      color: #92400E;
      border: 1px solid #FCD34D;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .status-pill::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--nu-amber);
    }
    .priority-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #DBEAFE;
      color: #1E3A8A;
      border: 1px solid #93C5FD;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 700;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist-check {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      margin-top: 2px;
      background: var(--nu-white);
      position: relative;
    }
    .checklist-content {
      flex: 1;
    }
    .checklist-content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
      font-size: 0.98rem;
    }
    .checklist-content span {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* DECISION TABLE */
    .decision-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
    }
    .decision-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .decision-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .decision-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }
    .verdict-yes { color: var(--nu-green); font-weight: 700; }
    .verdict-no  { color: var(--nu-red);   font-weight: 700; }
    .verdict-maybe { color: var(--nu-amber); font-weight: 700; }

    /* QUESTIONS GRID */
    .questions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 8px;
    }
    .question-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 0 8px 8px 0;
    }
    .question-card .q-num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.75rem;
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 8px;
    }
    .question-card p {
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      line-height: 1.5;
    }

    /* RECOMMENDATION BOX */
    .recommendation {
      background: linear-gradient(135deg, rgba(0, 51, 204, 0.05) 0%, rgba(6, 208, 255, 0.08) 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 12px;
      padding: 28px 32px;
      margin-top: 12px;
    }
    .recommendation h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .recommendation h3::before {
      content: '►';
      color: var(--nu-cyan);
      font-size: 0.85rem;
    }
    .recommendation p {
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .recommendation ul {
      margin-top: 12px;
      padding-left: 20px;
    }
    .recommendation ul li {
      margin-bottom: 8px;
      font-size: 0.94rem;
    }

    /* NEXT STEPS */
    .next-steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 8px;
    }
    .step-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .step-num {
      position: absolute;
      top: -14px; left: 18px;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
      box-shadow: 0 2px 6px rgba(0, 0, 255, 0.25);
    }
    .step-card h4 {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin: 6px 0 8px;
    }
    .step-card p {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .step-card .owner {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-inner { padding: 40px 20px 60px; }
      .task-banner { padding: 24px 22px; }
      .task-banner h1 { font-size: 1.4rem; }
      .decision-table th, .decision-table td { padding: 10px 12px; font-size: 0.82rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .info-card, .step-card, .recommendation { box-shadow: none; break-inside: avoid; }
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
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
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

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-label">reMarkable Action Item · Internal Decision Brief</div>
        <h1>Verify if Peace of Mind Maintenance Program is Required</h1>
        <div class="task-banner-meta">
          <span><strong>Captured:</strong> 2026-04-25</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Source:</strong> reMarkable Tablet</span>
          <span><strong>Type:</strong> Verification / Decision</span>
        </div>
      </div>

      <!-- STATUS -->
      <div class="status-row">
        <span class="status-pill">Status: Pending Verification</span>
        <span class="priority-pill">Priority: Medium</span>
      </div>

      <!-- WHAT THIS IS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">What</span> <span class="rest">This Action Item Is</span></h2>
        <div class="info-card">
          <p>
            Aaron flagged this on the reMarkable: <strong>determine whether the Peace of Mind maintenance program is actually required</strong> — for whom, under what contract or warranty, and at what cost. The note did not specify which equipment line the program attaches to, so the verification work below is structured to identify the program first, then decide whether Norris Utilities® needs to enroll, decline, or recommend it.
          </p>
        </div>
      </section>

      <!-- WHAT WE NEED TO VERIFY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Verification</span> <span class="rest">Checklist</span></h2>
        <div class="info-card">
          <ul class="checklist">
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Identify the source program</strong>
                <span>Which vendor offers a "Peace of Mind" maintenance program — Skylift, Bay Shore Systems, Terex, or a financing/insurance partner? Confirm the exact program name, version, and effective date.</span>
              </div>
            </li>
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Confirm the equipment or asset it covers</strong>
                <span>Tie the program to a specific unit (bucket truck, drill rig, auger, FlexPro Armor cover) or to a customer fleet. Without an asset tie-in, "required" cannot be evaluated.</span>
              </div>
            </li>
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Read the contract / warranty language</strong>
                <span>Pull the original purchase agreement, warranty card, or dealer contract. Look for clauses that make enrollment mandatory to preserve the warranty or to keep dealer/distributor pricing tiers.</span>
              </div>
            </li>
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Get the cost &amp; cadence</strong>
                <span>Confirm annual or per-service price, payment schedule, what is included (parts, labor, travel), and what is excluded. Compare to expected service spend without the program.</span>
              </div>
            </li>
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Identify the deadline</strong>
                <span>Many manufacturer maintenance programs must be enrolled within 30 / 60 / 90 days of delivery. Determine whether we are still inside that window.</span>
              </div>
            </li>
            <li>
              <div class="checklist-check"></div>
              <div class="checklist-content">
                <strong>Confirm who owns the decision</strong>
                <span>Aaron decides for Norris-owned equipment. For customer-owned equipment, the recommendation goes through Aaron, then to the customer in writing.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- DECISION FRAMEWORK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Decision</span> <span class="rest">Framework</span></h2>
        <table class="decision-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Required?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Program is a written warranty condition (skip it = void warranty)</td>
              <td><span class="verdict-yes">YES</span></td>
              <td>Enroll immediately. File the enrollment confirmation in the equipment folder.</td>
            </tr>
            <tr>
              <td>Program is required to maintain dealer/distributor pricing tier</td>
              <td><span class="verdict-yes">YES</span></td>
              <td>Enroll. Pricing tier protection outweighs annual program cost on multi-unit lines.</td>
            </tr>
            <tr>
              <td>Program is optional, vendor-pushed, but lifetime cost beats unscheduled repairs</td>
              <td><span class="verdict-maybe">EVALUATE</span></td>
              <td>Run a 3-year repair cost vs. program fee comparison. Decide unit-by-unit.</td>
            </tr>
            <tr>
              <td>Program is optional and the asset is under daily Norris control with in-house service access</td>
              <td><span class="verdict-no">NO</span></td>
              <td>Decline. Document the decline in the equipment file and notify the vendor in writing.</td>
            </tr>
            <tr>
              <td>Program is being offered to a customer on a unit Norris sold</td>
              <td><span class="verdict-maybe">CUSTOMER CHOICE</span></td>
              <td>Aaron reviews terms, then writes a clear recommendation email — customer decides.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- QUESTIONS TO ANSWER -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Six</span> <span class="rest">Questions to Resolve</span></h2>
        <div class="questions-grid">
          <div class="question-card">
            <span class="q-num">Q1</span>
            <p>Which vendor or partner is the Peace of Mind program tied to?</p>
          </div>
          <div class="question-card">
            <span class="q-num">Q2</span>
            <p>What specific equipment, serial number, or customer account does it cover?</p>
          </div>
          <div class="question-card">
            <span class="q-num">Q3</span>
            <p>Is enrollment a contractual requirement or an upsell?</p>
          </div>
          <div class="question-card">
            <span class="q-num">Q4</span>
            <p>What is the enrollment deadline and what happens if we miss it?</p>
          </div>
          <div class="question-card">
            <span class="q-num">Q5</span>
            <p>What is the all-in annual cost vs. the cost of un-programmed service calls?</p>
          </div>
          <div class="question-card">
            <span class="q-num">Q6</span>
            <p>Does Norris Utilities® pay, the customer pay, or is it bundled into the original sale?</p>
          </div>
        </div>
      </section>

      <!-- RECOMMENDATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Working</span> <span class="rest">Recommendation</span></h2>
        <div class="recommendation">
          <h3>Default Position Until Verified</h3>
          <p>
            Until the source vendor and contract language are confirmed, treat enrollment as <strong>not required</strong> and do not auto-enroll. Most vendor maintenance programs are revenue products, not warranty conditions. Verifying the actual contract before signing protects cash and avoids paying twice for service we can already access.
          </p>
          <ul>
            <li>Pull the original purchase paperwork for the asset in question and read the maintenance/warranty section verbatim.</li>
            <li>Email the vendor rep one direct question: <em>"Is enrollment in the Peace of Mind program a written requirement to maintain warranty or pricing? Yes or no, please cite the clause."</em></li>
            <li>If the answer is no, decline in writing and file the decline. If the answer is yes, enroll and capture proof of enrollment in the equipment folder.</li>
          </ul>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="lead">Next</span> <span class="rest">Steps (This Week)</span></h2>
        <div class="next-steps-grid">
          <div class="step-card">
            <div class="step-num">1</div>
            <h4>Aaron clarifies source</h4>
            <p>Confirm which vendor and which unit triggered the reMarkable note (Skylift, BSS, Terex, or other).</p>
            <span class="owner">Owner: Aaron</span>
          </div>
          <div class="step-card">
            <div class="step-num">2</div>
            <h4>Pull the contract</h4>
            <p>Locate the original purchase paperwork and warranty registration for the identified unit.</p>
            <span class="owner">Owner: Caroline Butler</span>
          </div>
          <div class="step-card">
            <div class="step-num">3</div>
            <h4>Send vendor question</h4>
            <p>One-line email to the vendor rep: required or optional, cite the clause.</p>
            <span class="owner">Owner: Aaron</span>
          </div>
          <div class="step-card">
            <div class="step-num">4</div>
            <h4>Log the decision</h4>
            <p>Record enroll / decline outcome in the equipment file and update master tracker.</p>
            <span class="owner">Owner: Caroline Butler</span>
          </div>
          <div class="step-card">
            <div class="step-num">5</div>
            <h4>Close the action item</h4>
            <p>Mark the reMarkable item complete once enrollment is confirmed or declined in writing.</p>
            <span class="owner">Owner: Aaron</span>
          </div>
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