<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Water Intrusion Disclosure Action — Norris Utilities®</title>
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
      --nu-alert-red: #B91C1C;
      --nu-alert-amber: #B45309;
      --nu-alert-green: #047857;
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
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
      width: 650px; height: 650px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-inner {
      max-width: 1080px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* TASK BANNER */
    .task-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 6px;
      border-left: 6px solid var(--nu-cyan);
      margin-bottom: 40px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.15);
    }
    .task-banner .label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .task-banner .title {
      font-size: 1.55rem;
      font-weight: 900;
      line-height: 1.25;
      color: var(--nu-white);
      margin-bottom: 10px;
    }
    .task-banner .source {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.75);
      font-style: italic;
    }

    /* SECTION HEADER */
    .section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 40px 0 18px;
      color: var(--nu-dark-text);
    }
    .section-title .lead {
      color: var(--nu-blue);
    }
    .section-sub {
      color: var(--nu-body-text);
      font-size: 1rem;
      margin-bottom: 24px;
      max-width: 780px;
    }

    /* STATUS CHIPS */
    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 7px 14px;
      border-radius: 999px;
    }
    .chip.priority { background: rgba(185,28,28,0.1); color: var(--nu-alert-red); border: 1px solid rgba(185,28,28,0.25); }
    .chip.owner { background: rgba(0,0,255,0.08); color: var(--nu-blue); border: 1px solid rgba(0,0,255,0.2); }
    .chip.status { background: rgba(180,83,9,0.1); color: var(--nu-alert-amber); border: 1px solid rgba(180,83,9,0.25); }
    .chip.legal { background: rgba(4,120,87,0.1); color: var(--nu-alert-green); border: 1px solid rgba(4,120,87,0.25); }

    /* ISSUE CARD */
    .issue-card {
      background: #FFF8F0;
      border: 1px solid #F6D2AE;
      border-left: 6px solid var(--nu-alert-amber);
      border-radius: 8px;
      padding: 26px 28px;
      margin-bottom: 32px;
    }
    .issue-card h3 {
      color: var(--nu-alert-amber);
      font-weight: 900;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 12px;
    }
    .issue-card p {
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.7;
    }
    .issue-card p + p { margin-top: 10px; }

    /* ACTION STEPS */
    .steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      margin-bottom: 20px;
    }
    .step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px 22px 72px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .step:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .step .num {
      position: absolute;
      top: 22px;
      left: 22px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .step h4 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .step .meta {
      display: inline-block;
      margin-top: 10px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--nu-blue);
      text-transform: uppercase;
    }

    /* TWO COLUMN */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 28px;
    }
    .col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .col-card h4 {
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .col-card ul {
      list-style: none;
      padding: 0;
    }
    .col-card li {
      padding: 8px 0;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-light-gray);
      display: flex;
      align-items: flex-start;
    }
    .col-card li:last-child { border-bottom: none; }
    .col-card li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      margin-right: 10px;
      flex-shrink: 0;
    }

    /* DRAFT LANGUAGE */
    .draft-block {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 28px;
      font-size: 0.97rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .draft-block .header {
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.78rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .draft-block p + p { margin-top: 10px; }

    /* RISK BOX */
    .risk-box {
      background: linear-gradient(135deg, #FFF5F5 0%, #FEE2E2 100%);
      border: 1px solid #FCA5A5;
      border-left: 6px solid var(--nu-alert-red);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 28px;
    }
    .risk-box h4 {
      color: var(--nu-alert-red);
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .risk-box p {
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      line-height: 1.65;
    }

    /* CTA ROW */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 32px 0 0;
    }
    .btn {
      display: inline-block;
      padding: 13px 28px;
      font-weight: 700;
      font-size: 0.95rem;
      border-radius: 4px;
      text-decoration: none;
      letter-spacing: 0.03em;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-primary:hover {
      background: #0000CC;
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
      transform: translateY(-1px);
    }
    .btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-inner { padding: 40px 22px 60px; }
      .task-banner .title { font-size: 1.25rem; }
      .two-col { grid-template-columns: 1fr; }
      .step { padding: 20px 20px 20px 66px; }
      .step .num { top: 20px; left: 18px; }
      .section-title { font-size: 1.3rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step, .col-card, .issue-card, .risk-box, .draft-block { box-shadow: none; page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-inner">

      <div class="task-banner">
        <div class="label">reMarkable Action Item</div>
        <div class="title">Address Water Intrusion Issue — Disclosure Omission in For-Sale Listing</div>
        <div class="source">Source: reMarkable scan · Captured for Aaron C. Norris · Norris Utilities®</div>
      </div>

      <div class="chip-row">
        <span class="chip priority">Priority: High</span>
        <span class="chip owner">Owner: Aaron C. Norris</span>
        <span class="chip status">Status: Action Required</span>
        <span class="chip legal">Risk Category: Legal / Disclosure</span>
      </div>

      <div class="issue-card">
        <h3>The Issue</h3>
        <p>A water intrusion issue was identified on the property but was not included in the for-sale listing or disclosure documents. Known material defects must be disclosed to prospective buyers in writing before an offer is made, regardless of whether the property is listed by owner, agent, or broker.</p>
        <p>Leaving the water intrusion off the disclosure exposes the seller to rescission, repair demands, and potential misrepresentation claims after closing. The fix is straightforward: disclose in writing, document what is known, and correct the listing now — before any buyer moves forward on bad information.</p>
      </div>

      <h2 class="section-title"><span class="lead">Action</span> Plan — Four Steps</h2>
      <p class="section-sub">Complete in order. Do not advance a showing, accept an offer, or sign a contract until Step 1 and Step 2 are finished in writing.</p>

      <div class="steps">

        <div class="step">
          <div class="num">1</div>
          <h4>Document the Water Intrusion Fully</h4>
          <p>Write down what happened, when it was discovered, the location (room, wall, foundation, roof, etc.), the source if known, and any repairs already performed. Attach dated photos, any invoices from plumbers, roofers, or remediation contractors, and any insurance claim records. This becomes the factual record everything else is built on.</p>
          <span class="meta">Deliverable: Written incident record + supporting files</span>
        </div>

        <div class="step">
          <div class="num">2</div>
          <h4>Update the Seller's Property Disclosure</h4>
          <p>Amend the written disclosure to explicitly identify the water intrusion issue. Use plain language — what, where, when, and whether it has been repaired. Sign and date the amended disclosure. If the property is listed through an agent, instruct them in writing to deliver the amended disclosure to every active and pending prospective buyer.</p>
          <span class="meta">Deliverable: Signed, dated amended disclosure</span>
        </div>

        <div class="step">
          <div class="num">3</div>
          <h4>Correct the Public Listing</h4>
          <p>Update the MLS entry, third-party listing sites (Zillow, Realtor.com, brokerage site), and any printed marketing collateral so the listing is consistent with the amended disclosure. Nothing in the listing should contradict what the disclosure now says about water intrusion, repair status, or condition of affected areas.</p>
          <span class="meta">Deliverable: Listing text + photos updated</span>
        </div>

        <div class="step">
          <div class="num">4</div>
          <h4>Confirm with Counsel and Close the Loop</h4>
          <p>Have the real estate attorney or broker confirm the amended disclosure is sufficient under Alabama law and that it has been delivered to all parties. File the signed disclosure with the transaction record. Save a copy to the property file in <em>~/norris-agent/output/</em> and push the final record to the ops portal so there is a permanent, timestamped audit trail.</p>
          <span class="meta">Deliverable: Attorney sign-off + archived record</span>
        </div>

      </div>

      <h2 class="section-title"><span class="lead">Information</span> to Capture</h2>
      <p class="section-sub">Pull this information together before drafting the amended disclosure. Gaps here become exposure later.</p>

      <div class="two-col">
        <div class="col-card">
          <h4>Incident Facts</h4>
          <ul>
            <li>Date water intrusion was first observed</li>
            <li>Exact location (room, wall, ceiling, foundation, basement, crawl space)</li>
            <li>Suspected or confirmed source (roof, plumbing, grading, window, HVAC)</li>
            <li>Was standing water or active leakage present</li>
            <li>Any visible staining, warping, or mold observed</li>
            <li>Duration of the event and whether it has recurred</li>
          </ul>
        </div>
        <div class="col-card">
          <h4>Response & Repairs</h4>
          <ul>
            <li>Who was called (plumber, roofer, remediation company)</li>
            <li>What work was performed and on what date</li>
            <li>Invoices, receipts, or warranty paperwork on file</li>
            <li>Whether an insurance claim was opened or paid</li>
            <li>Any moisture, humidity, or air quality testing results</li>
            <li>Open items not yet repaired — state them plainly</li>
          </ul>
        </div>
      </div>

      <h2 class="section-title"><span class="lead">Draft</span> Disclosure Language</h2>
      <p class="section-sub">Starting point for the amended disclosure. The attorney should review and finalize before signature.</p>

      <div class="draft-block">
        <div class="header">Amended Disclosure — Water Intrusion</div>
        <p>Seller hereby amends the Seller's Property Disclosure for the property identified above to include the following known condition, previously omitted from the original disclosure and for-sale listing:</p>
        <p>A water intrusion event was observed at [location — e.g., "the northwest basement wall"] on or about [date]. The suspected source was [source, or "undetermined"]. In response, [contractor or action taken, with date] performed [repair description]. [Any remaining issue, monitoring, or uncertainty is stated here — or, if fully resolved, "No further moisture intrusion has been observed since repair."]</p>
        <p>Seller is amending the disclosure to ensure prospective buyers have complete, accurate, written notice of this condition prior to making or finalizing any offer. Supporting documentation (photos, invoices, and repair records) is available upon request.</p>
        <p>Signed: Aaron C. Norris &nbsp; Date: _______________</p>
      </div>

      <h2 class="section-title"><span class="lead">Why</span> This Matters</h2>

      <div class="risk-box">
        <h4>Legal & Transaction Risk</h4>
        <p>Alabama is generally a caveat emptor state for residential sales, but known material defects — especially moisture, mold, and structural-related issues — still trigger a duty to disclose when the seller has actual knowledge. Failing to amend the listing after the issue is identified can support claims of fraudulent misrepresentation or concealment, which survive closing, can unwind the sale, and carry attorney's-fee exposure. Disclosing now, in writing, is both the cheapest and cleanest path.</p>
      </div>

      <div class="two-col">
        <div class="col-card">
          <h4>Parties to Notify</h4>
          <ul>
            <li>Listing agent or broker (in writing)</li>
            <li>Real estate attorney of record</li>
            <li>Any buyer with an active offer or showing scheduled</li>
            <li>Title company once under contract</li>
            <li>Insurance carrier if a claim was opened</li>
          </ul>
        </div>
        <div class="col-card">
          <h4>Records to Retain</h4>
          <ul>
            <li>Original listing text and disclosure (pre-amendment)</li>
            <li>Amended, signed, dated disclosure</li>
            <li>Repair invoices and contractor reports</li>
            <li>Photos — before, during, after</li>
            <li>Email trail confirming delivery to all parties</li>
            <li>Attorney sign-off memo</li>
          </ul>
        </div>
      </div>

      <div class="cta-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=Water%20Intrusion%20Disclosure%20—%20Amended%20Disclosure%20Filed" class="btn btn-primary">Email Confirmation When Filed</a>
        <a href="tel:2055001343" class="btn btn-secondary">Call Aaron: 205-500-1343</a>
      </div>

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