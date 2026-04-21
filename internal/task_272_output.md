<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Rental Listing Disclosure Discrepancy — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-alert-red: #C92A2A;
      --nu-warn-amber: #E8A33D;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 40%, #0066ee 70%, #00aaff 90%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ACTION HEADER */
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
      align-items: center;
    }
    .action-tag {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .tag-priority {
      background: var(--nu-alert-red);
      color: var(--nu-white);
    }
    .tag-source {
      background: var(--nu-navy);
      color: var(--nu-cyan);
    }
    .tag-type {
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .tag-date {
      background: transparent;
      color: var(--nu-body-text);
      border: 1px solid var(--nu-medium-gray);
    }

    .action-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .action-title .highlight {
      color: var(--nu-blue);
    }
    .action-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 40px;
      max-width: 780px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-top: 40px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ALERT BANNER */
    .alert-banner {
      background: linear-gradient(135deg, #fff4e6 0%, #fffaf0 100%);
      border-left: 5px solid var(--nu-warn-amber);
      padding: 18px 24px;
      margin-bottom: 32px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .alert-banner strong {
      color: #8a5a00;
      font-weight: 900;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
    }
    .alert-banner p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* COMPARISON TABLE */
    .discrepancy-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      margin-bottom: 32px;
    }
    .discrepancy-col {
      background: var(--nu-white);
      padding: 28px;
    }
    .discrepancy-col h4 {
      font-weight: 900;
      font-size: 1.05rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 3px solid;
    }
    .col-listed h4 {
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .col-actual h4 {
      color: var(--nu-alert-red);
      border-color: var(--nu-alert-red);
    }
    .discrepancy-col ul {
      list-style: none;
      padding: 0;
    }
    .discrepancy-col li {
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .discrepancy-col li:last-child { border-bottom: none; }
    .discrepancy-col li::before {
      content: '';
      min-width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-top: 8px;
      flex-shrink: 0;
    }
    .col-listed li::before { background: var(--nu-blue); }
    .col-actual li::before { background: var(--nu-alert-red); }
    .discrepancy-col li strong {
      color: var(--nu-dark-text);
      display: block;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .discrepancy-col li span {
      color: var(--nu-body-text);
      font-size: 0.9rem;
    }

    /* ACTION STEPS */
    .steps-list {
      counter-reset: step-counter;
      list-style: none;
      padding: 0;
    }
    .steps-list li {
      counter-increment: step-counter;
      position: relative;
      padding: 20px 24px 20px 72px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 14px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .steps-list li:hover {
      transform: translateX(4px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .steps-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .steps-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .steps-list li p {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      margin: 0;
    }

    /* RISK CARDS */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-alert-red);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .risk-card.medium { border-top-color: var(--nu-warn-amber); }
    .risk-card.low { border-top-color: var(--nu-blue); }
    .risk-card h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .risk-level {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 3px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
    }
    .risk-card.medium .risk-level { background: var(--nu-warn-amber); }
    .risk-card.low .risk-level { background: var(--nu-blue); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 8px;
      margin: 32px 0;
      position: relative;
      overflow: hidden;
    }
    .callout::before {
      content: '';
      position: absolute;
      top: -50%; right: -10%;
      width: 60%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.12) 0%, transparent 70%);
      z-index: 0;
    }
    .callout > * { position: relative; z-index: 1; }
    .callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .callout p {
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.9);
    }

    /* BUTTON ROW */
    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 20px auto;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .action-title { font-size: 1.6rem; }
      .nu-container { padding: 40px 20px; }
      .discrepancy-grid { grid-template-columns: 1fr; }
      .steps-list li { padding: 18px 18px 18px 62px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .steps-list li { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .button-row { display: none; }
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
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- META TAGS -->
      <div class="action-meta">
        <span class="action-tag tag-priority">Priority — Pre-Closing</span>
        <span class="action-tag tag-source">Source: reMarkable Capture</span>
        <span class="action-tag tag-type">Real Estate Due Diligence</span>
        <span class="action-tag tag-date">Captured 2026-04-20</span>
      </div>

      <!-- TITLE -->
      <h1 class="action-title">
        Address <span class="highlight">Disclosure Discrepancy</span> Between Rental Listing &amp; Seller Disclosure
      </h1>
      <p class="action-subtitle">
        Property file shows the 4505 Butterworth estate was previously marketed as a rental. The rental listing advertisement describes property conditions and features that do not match what is stated in the current seller's disclosure package. This must be reconciled — in writing — before closing.
      </p>

      <!-- ALERT -->
      <div class="alert-banner">
        <strong>Why This Matters</strong>
        <p>A disclosure discrepancy between a prior rental advertisement and the current seller's disclosure is a material misrepresentation risk. Once closing occurs, the ability to recover damages diminishes substantially. Any condition advertised in the rental listing is presumed known to the seller.</p>
      </div>

      <!-- DISCREPANCY COMPARISON -->
      <h2 class="nu-section-title">What Is <span>Inconsistent</span></h2>
      <div class="discrepancy-grid">
        <div class="discrepancy-col col-listed">
          <h4>Rental Listing Advertisement</h4>
          <ul>
            <li>
              <div>
                <strong>Basement &amp; Lower Level</strong>
                <span>Advertised as "dry, finished lower level" suitable for tenant occupancy and storage.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Roof &amp; Exterior Envelope</strong>
                <span>Rental ad states "recent roof, no active leaks — move-in ready."</span>
              </div>
            </li>
            <li>
              <div>
                <strong>HVAC Systems</strong>
                <span>Listed as "fully serviced, dual-zone operational."</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Water &amp; Drainage</strong>
                <span>No mention of prior water intrusion or drainage issues in the advertisement.</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="discrepancy-col col-actual">
          <h4>Current Seller Disclosure</h4>
          <ul>
            <li>
              <div>
                <strong>Basement &amp; Lower Level</strong>
                <span>Disclosure omits any statement about moisture, staining, or prior waterproofing remediation.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Roof &amp; Exterior Envelope</strong>
                <span>No roof age or warranty information provided. No mention of prior leak repairs.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>HVAC Systems</strong>
                <span>Disclosure silent on service history; no unit age or zone configuration listed.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Water &amp; Drainage</strong>
                <span>H2O Waterproofing was engaged per prior correspondence — omitted from disclosure entirely.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title">Action <span>Steps</span></h2>
      <ol class="steps-list">
        <li>
          <strong>Pull both documents side by side.</strong>
          <p>Retrieve the original rental listing advertisement (MLS, Zillow archive, Craigslist, or property manager's file) and the executed seller's disclosure. Print both. Mark every inconsistency by line.</p>
        </li>
        <li>
          <strong>Draft written inquiry to seller's agent.</strong>
          <p>Request a revised, signed, and dated disclosure addressing each identified item. Do not rely on verbal assurances. Written paper trail only.</p>
        </li>
        <li>
          <strong>Secure H2O Waterproofing records in writing.</strong>
          <p>Coordinates with the separate action item on waterproofing. Obtain the scope-of-work, invoices, and any transferable warranty before signing closing documents.</p>
        </li>
        <li>
          <strong>Notify attorney of record.</strong>
          <p>Forward the rental ad and the disclosure with discrepancies marked. Ask counsel to confirm whether the discrepancy rises to the level of a material misrepresentation under Alabama law.</p>
        </li>
        <li>
          <strong>Preserve contingency rights.</strong>
          <p>Review purchase agreement for due-diligence and inspection contingency deadlines. Do NOT allow any contingency to lapse while this discrepancy is unresolved. Request an extension in writing if needed.</p>
        </li>
        <li>
          <strong>Document everything in the file.</strong>
          <p>Add a dated entry to the 4505 Butterworth property folder. Screenshots of the rental listing. Copies of both disclosures. Dated correspondence log.</p>
        </li>
      </ol>

      <!-- RISKS -->
      <h2 class="nu-section-title">Risk <span>Assessment</span></h2>
      <div class="risk-grid">
        <div class="risk-card">
          <span class="risk-level">High</span>
          <h4>Material Misrepresentation</h4>
          <p>If the seller advertised a condition in the rental listing that is no longer true, or failed to disclose it in the sale, this is actionable — but only if caught before closing or clearly documented beforehand.</p>
        </div>
        <div class="risk-card medium">
          <span class="risk-level">Medium</span>
          <h4>Closing Delay</h4>
          <p>Resolving this may push the closing date. Plan for it. Do not let calendar pressure compromise due diligence. Far better to delay than to close on a misrepresentation.</p>
        </div>
        <div class="risk-card medium">
          <span class="risk-level">Medium</span>
          <h4>Insurance &amp; Title Complications</h4>
          <p>Undisclosed water intrusion or HVAC issues can affect homeowner's insurance binding and title endorsements. Loop the insurance agent and title company in parallel.</p>
        </div>
        <div class="risk-card low">
          <span class="risk-level">Low</span>
          <h4>Seller Cooperation</h4>
          <p>Most sellers respond to a documented, professional inquiry with a revised disclosure. The probability of outright refusal is low — but refusal itself is a red flag worth noting in the file.</p>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <h3>The Standard</h3>
        <p>
          Norris Utilities® operates on the principle that the only acceptable answer is the truthful one. That standard extends to every personal and business transaction. If the rental listing advertised something, the seller knew it. Silence on the disclosure is not acceptable. Reconcile it — in writing — or walk.
        </p>
      </div>

      <!-- RELATED -->
      <h2 class="nu-section-title">Related <span>Action Items</span></h2>
      <ul class="steps-list">
        <li>
          <strong>Negotiate purchase of the 7,098 sq ft estate at 4505 Butterworth.</strong>
          <p>Parent negotiation track. This disclosure discrepancy is a direct input to that negotiation — use it.</p>
        </li>
        <li>
          <strong>Call H2O Waterproofing before closing and get scope in writing.</strong>
          <p>Directly linked. Their records may reveal the full waterproofing history that was omitted from the disclosure.</p>
        </li>
        <li>
          <strong>Address water intrusion issue disclosure omission.</strong>
          <p>Sibling action item. Track both together in the property folder. One resolution document should cover both.</p>
        </li>
      </ul>

      <!-- BUTTONS -->
      <div class="button-row">
        <a href="tel:2055001343" class="nu-btn-primary">Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=4505%20Butterworth%20%E2%80%94%20Disclosure%20Discrepancy" class="nu-btn-secondary">Email the File</a>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      130 Inverness Plaza #210, Birmingham, AL 35242<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>