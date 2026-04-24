<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contract Addendum Review — Basement Water Intrusion — Norris Utilities®</title>
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
    --nu-alert-red: #C8102E;
    --nu-warn-amber: #E8A33D;
    --nu-success-green: #2E7D32;
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

  /* ══ HEADER ══ */
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
    width: 72px; height: 72px;
    margin: 0 auto 14px;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    opacity: 0.12;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: auto;
    max-width: 600px;
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
    margin-bottom: 24px;
  }
  .nu-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.35rem;
    color: rgba(255,255,255,0.95);
    letter-spacing: 0.03em;
  }
  .nu-doc-badge {
    display: inline-block;
    margin-top: 22px;
    padding: 8px 22px;
    background: rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.35);
    border-radius: 4px;
    color: var(--nu-white);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  /* ══ CHEVRON ══ */
  .nu-chevron {
    position: relative;
    height: 50px;
    margin-top: -50px;
    z-index: 10;
  }
  .nu-chevron svg { width: 100%; height: 50px; display: block; }

  /* ══ CONTENT ══ */
  .nu-content-area {
    position: relative;
    background: var(--nu-white);
  }
  .nu-wrap {
    max-width: 1140px;
    margin: 0 auto;
    padding: 50px 40px 70px;
    position: relative;
    z-index: 1;
  }

  /* ══ DOC META BAR ══ */
  .nu-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0;
    background: var(--nu-navy);
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 40px;
    box-shadow: 0 4px 16px rgba(0,0,51,0.15);
  }
  .nu-meta-cell {
    padding: 18px 22px;
    border-right: 1px solid rgba(255,255,255,0.1);
  }
  .nu-meta-cell:last-child { border-right: none; }
  .nu-meta-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--nu-cyan);
    margin-bottom: 4px;
  }
  .nu-meta-value {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--nu-white);
  }

  /* ══ SECTION ══ */
  .nu-section { margin-bottom: 42px; }
  .nu-section-title {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 6px;
    letter-spacing: 0.01em;
  }
  .nu-section-title .first { color: #0033cc; }
  .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
  .nu-section-sub {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 700;
  }

  /* ══ ALERT CARD ══ */
  .nu-alert {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px;
    background: #FFF8F0;
    border-left: 5px solid var(--nu-warn-amber);
    border-radius: 4px;
    margin-bottom: 30px;
  }
  .nu-alert-icon {
    flex-shrink: 0;
    width: 38px; height: 38px;
    background: var(--nu-warn-amber);
    color: var(--nu-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.1rem;
  }
  .nu-alert-body strong {
    display: block;
    color: var(--nu-dark-text);
    font-weight: 900;
    margin-bottom: 4px;
    font-size: 1.05rem;
  }
  .nu-alert-body p {
    color: #5a4a2a;
    font-size: 0.95rem;
  }

  /* ══ REVIEW CHECKLIST ══ */
  .nu-checklist {
    background: var(--nu-white);
    border: 1px solid var(--nu-medium-gray);
    border-radius: 6px;
    padding: 8px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  }
  .nu-check-item {
    display: flex;
    gap: 16px;
    padding: 18px 24px;
    border-bottom: 1px solid var(--nu-medium-gray);
  }
  .nu-check-item:last-child { border-bottom: none; }
  .nu-check-box {
    flex-shrink: 0;
    width: 26px; height: 26px;
    border: 2px solid var(--nu-blue);
    border-radius: 4px;
    background: var(--nu-white);
    margin-top: 2px;
  }
  .nu-check-body h4 {
    font-weight: 900;
    color: var(--nu-dark-text);
    font-size: 1.02rem;
    margin-bottom: 4px;
  }
  .nu-check-body p {
    font-size: 0.92rem;
    color: #555;
  }

  /* ══ TWO COLUMN ══ */
  .nu-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .nu-card {
    background: var(--nu-white);
    border-radius: 8px;
    padding: 26px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid var(--nu-medium-gray);
  }
  .nu-card h3 {
    font-weight: 900;
    color: #0033cc;
    font-size: 1.1rem;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--nu-cyan);
  }
  .nu-card ul { list-style: none; }
  .nu-card ul li {
    padding: 8px 0;
    padding-left: 22px;
    position: relative;
    font-size: 0.93rem;
    color: var(--nu-body-text);
  }
  .nu-card ul li::before {
    content: '•';
    color: var(--nu-blue);
    font-weight: 900;
    font-size: 1.4rem;
    position: absolute;
    left: 4px;
    top: 2px;
    line-height: 1;
  }

  /* ══ RISK GRID ══ */
  .nu-risk-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 18px;
  }
  .nu-risk-cell {
    padding: 20px;
    border-radius: 6px;
    text-align: center;
    border: 2px solid;
  }
  .nu-risk-low {
    background: #EEF7EE;
    border-color: var(--nu-success-green);
    color: var(--nu-success-green);
  }
  .nu-risk-med {
    background: #FFF8F0;
    border-color: var(--nu-warn-amber);
    color: #8b6216;
  }
  .nu-risk-high {
    background: #FEF0F2;
    border-color: var(--nu-alert-red);
    color: var(--nu-alert-red);
  }
  .nu-risk-cell .label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .nu-risk-cell .val {
    font-weight: 900;
    font-size: 1.1rem;
  }

  /* ══ STEPS ══ */
  .nu-steps {
    counter-reset: step;
    display: grid;
    gap: 14px;
  }
  .nu-step {
    display: flex;
    gap: 18px;
    background: var(--nu-white);
    padding: 20px 22px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border-left: 4px solid var(--nu-blue);
  }
  .nu-step-num {
    flex-shrink: 0;
    width: 40px; height: 40px;
    background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
    color: var(--nu-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.05rem;
  }
  .nu-step-body h4 {
    font-weight: 900;
    color: var(--nu-dark-text);
    font-size: 1rem;
    margin-bottom: 4px;
  }
  .nu-step-body p {
    font-size: 0.92rem;
    color: #555;
  }

  /* ══ SIGN BLOCK ══ */
  .nu-sign {
    background: linear-gradient(135deg, #f8f9ff 0%, #eef0ff 100%);
    border: 1px dashed var(--nu-blue);
    border-radius: 8px;
    padding: 30px;
    margin-top: 32px;
  }
  .nu-sign-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 18px;
  }
  .nu-sign-line {
    border-bottom: 2px solid var(--nu-dark-text);
    height: 42px;
    margin-bottom: 6px;
  }
  .nu-sign-label {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #666;
  }

  /* ══ FOOTER ══ */
  .nu-footer {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: rgba(255,255,255,0.85);
    padding: 42px 40px;
    text-align: center;
  }
  .nu-footer-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.25rem;
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

  /* ══ RESPONSIVE ══ */
  @media (max-width: 820px) {
    .nu-two-col { grid-template-columns: 1fr; }
    .nu-risk-grid { grid-template-columns: 1fr; }
    .nu-sign-grid { grid-template-columns: 1fr; gap: 24px; }
    .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
    .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
    .nu-tagline { font-size: 1.05rem; }
    .nu-header { padding: 40px 20px 60px; }
    .nu-wrap { padding: 36px 22px 50px; }
    .nu-meta-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
  }

  @media print {
    body { background: var(--nu-white); }
    .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .nu-card, .nu-step { box-shadow: none; }
  }
</style>
</head>
<body>

<header class="nu-header">
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment®</div>
  <div class="nu-doc-badge">Contract Addendum Review</div>
</header>

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="nu-wrap">

    <!-- META BAR -->
    <div class="nu-meta">
      <div class="nu-meta-cell">
        <div class="nu-meta-label">Document Type</div>
        <div class="nu-meta-value">Contract Addendum</div>
      </div>
      <div class="nu-meta-cell">
        <div class="nu-meta-label">Subject</div>
        <div class="nu-meta-value">Basement Water Intrusion</div>
      </div>
      <div class="nu-meta-cell">
        <div class="nu-meta-label">Review Date</div>
        <div class="nu-meta-value">2026-04-24</div>
      </div>
      <div class="nu-meta-cell">
        <div class="nu-meta-label">Status</div>
        <div class="nu-meta-value">Awaiting Review</div>
      </div>
    </div>

    <!-- OVERVIEW -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Review</span> <span class="rest">Overview</span></h2>
      <div class="nu-section-sub">Action item captured from reMarkable</div>

      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-body">
          <strong>Action Required — Examine contract addendum regarding basement water intrusion</strong>
          <p>Do not sign, acknowledge, or counter-sign this addendum until every item in the checklist below has been verified. Water intrusion language typically shifts significant remediation and warranty cost onto one party — identify which party that is before signing.</p>
        </div>
      </div>

      <div class="nu-two-col">
        <div class="nu-card">
          <h3>What This Addendum Should Answer</h3>
          <ul>
            <li>Who bears cost of remediation and re-inspection</li>
            <li>How "water intrusion" is defined (stain, seep, active flow)</li>
            <li>Whether prior disclosures match current conditions</li>
            <li>Warranty carve-outs or waivers being created</li>
            <li>Escrow holdback or credit amount, if any</li>
            <li>Timeline for cure, and consequences of missed deadline</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Parties Likely Involved</h3>
          <ul>
            <li>Seller / seller's agent (original disclosure)</li>
            <li>Buyer / buyer's agent (counter-party to addendum)</li>
            <li>Closing attorney or title company</li>
            <li>Inspector of record (finding source)</li>
            <li>H2O Waterproofing (remediation vendor on file)</li>
            <li>Lender, if financing is impacted</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CHECKLIST -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Review</span> <span class="rest">Checklist</span></h2>
      <div class="nu-section-sub">Verify each item before signing</div>

      <div class="nu-checklist">
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Exact scope of "water intrusion" is defined in writing</h4>
            <p>Confirm the addendum specifies the location (wall, floor, foundation joint), the type of intrusion (active, historical, staining), and the square footage affected. Vague language like "any moisture issue" is a red flag.</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Remediation party and method are named</h4>
            <p>Written confirmation required from H2O Waterproofing (per open action items). Addendum should reference vendor, written warranty, and transferability to future owner.</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Financial responsibility is allocated</h4>
            <p>Identify exactly who pays — seller credit, escrow holdback, post-closing invoice, or buyer accepts as-is. Quantify the dollar amount and confirm it matches the vendor quote.</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Cure timeline and default terms are present</h4>
            <p>The addendum must state a firm completion date, who inspects cure, and the remedy if the deadline is missed (price reduction, walk-away right, extension mechanic).</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Warranty and future-claim language is reviewed</h4>
            <p>Watch for broad release language that waives future claims for "any and all" water-related issues. Narrow the release to the specific condition identified.</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Insurance and disclosure implications are reviewed</h4>
            <p>Confirm the remediation will not trigger insurance non-renewal, and that the addendum does not require disclosure language that harms resale value.</p>
          </div>
        </div>
        <div class="nu-check-item">
          <div class="nu-check-box"></div>
          <div class="nu-check-body">
            <h4>Signatures, initials, and exhibits are complete</h4>
            <p>All parties must sign, each page initialed where required, vendor quote attached as exhibit, and original contract referenced by date and parties.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RISK SNAPSHOT -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Snapshot</span></h2>
      <div class="nu-section-sub">Preliminary assessment — finalize after full read-through</div>

      <div class="nu-risk-grid">
        <div class="nu-risk-cell nu-risk-low">
          <div class="label">Documentation Risk</div>
          <div class="val">LOW if vendor quote &amp; inspection report attached</div>
        </div>
        <div class="nu-risk-cell nu-risk-med">
          <div class="label">Financial Risk</div>
          <div class="val">MEDIUM until dollar allocation confirmed</div>
        </div>
        <div class="nu-risk-cell nu-risk-high">
          <div class="label">Waiver / Release Risk</div>
          <div class="val">HIGH until release language narrowed</div>
        </div>
      </div>
    </section>

    <!-- NEXT STEPS -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Next</span> <span class="rest">Steps</span></h2>
      <div class="nu-section-sub">Run in order — do not skip</div>

      <div class="nu-steps">
        <div class="nu-step">
          <div class="nu-step-num">1</div>
          <div class="nu-step-body">
            <h4>Read the addendum cover-to-cover in one sitting</h4>
            <p>No interruptions. Flag every defined term and every dollar figure in the margin.</p>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">2</div>
          <div class="nu-step-body">
            <h4>Pull the original contract and inspection report</h4>
            <p>Confirm the addendum references the correct contract date and that the condition described matches the inspection finding word-for-word.</p>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">3</div>
          <div class="nu-step-body">
            <h4>Obtain written confirmation from H2O Waterproofing</h4>
            <p>Tie the vendor quote, scope, and warranty into the addendum as a named exhibit. No verbal scope.</p>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">4</div>
          <div class="nu-step-body">
            <h4>Run language past closing attorney</h4>
            <p>Specifically ask: "Does this release waive future claims beyond the identified intrusion?" If yes, narrow it.</p>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">5</div>
          <div class="nu-step-body">
            <h4>Mark up redlines and return within 48 hours</h4>
            <p>Sitting on an addendum signals acceptance. Respond fast, in writing, with specific edits or sign-off.</p>
          </div>
        </div>
        <div class="nu-step">
          <div class="nu-step-num">6</div>
          <div class="nu-step-body">
            <h4>File executed copy in project folder</h4>
            <p>Save signed PDF plus all exhibits. Log completion date in the master tracker.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SIGN BLOCK -->
    <section class="nu-section">
      <h2 class="nu-section-title"><span class="first">Reviewer</span> <span class="rest">Sign-Off</span></h2>
      <div class="nu-section-sub">Complete after full review</div>

      <div class="nu-sign">
        <p style="font-size: 0.95rem; color: var(--nu-dark-text);">
          By signing below, the reviewer confirms every checklist item has been verified and all outstanding questions have been resolved in writing.
        </p>
        <div class="nu-sign-grid">
          <div>
            <div class="nu-sign-line"></div>
            <div class="nu-sign-label">Aaron C. Norris — Reviewer</div>
          </div>
          <div>
            <div class="nu-sign-line"></div>
            <div class="nu-sign-label">Date</div>
          </div>
          <div>
            <div class="nu-sign-line"></div>
            <div class="nu-sign-label">Closing Attorney — Concurrence</div>
          </div>
          <div>
            <div class="nu-sign-line"></div>
            <div class="nu-sign-label">Date</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</main>

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