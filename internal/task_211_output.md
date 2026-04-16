<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action: Modify Bucket Cover &amp; Ship Back for Proper Sizing — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-logo-text {
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
    }
    .nu-page-tag {
      display: inline-block;
      margin-top: 22px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      padding: 7px 18px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      border-radius: 3px;
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
      padding-bottom: 40px;
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 36px 30px;
      position: relative;
      z-index: 1;
    }

    .nu-page-title {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      margin-bottom: 6px;
      line-height: 1.2;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-subtitle {
      font-size: 1.05rem;
      color: #5a5a72;
      margin-bottom: 30px;
      font-weight: 400;
    }

    /* STATUS BAR */
    .status-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 32px;
    }
    .status-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 22px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    .chip-amber { background: #FEF3C7; color: #92400E; border: 1px solid #FCD34D; }
    .chip-blue { background: #DBEAFE; color: #1E40AF; border: 1px solid #93C5FD; }
    .chip-gray { background: #F3F4F6; color: #374151; border: 1px solid #D1D5DB; }
    .chip-dot {
      width: 8px; height: 8px; border-radius: 50%; background: currentColor;
    }

    /* SECTION */
    .section-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin: 32px 0 14px;
      color: var(--nu-dark-text);
    }
    .section-title .lead {
      color: var(--nu-blue);
    }

    /* SUMMARY CARD */
    .summary-card {
      background: linear-gradient(135deg, #F8FAFF 0%, #EEF3FF 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 14px;
    }
    .summary-card p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .summary-card strong { color: var(--nu-blue); }

    /* ACTION STEPS */
    .steps {
      list-style: none;
      counter-reset: step;
      margin: 0;
      padding: 0;
    }
    .step {
      counter-increment: step;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 18px 22px 18px 72px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .step::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .step h4 {
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .step p {
      font-size: 0.93rem;
      color: #4a4a60;
      line-height: 1.55;
    }

    /* DETAIL GRID */
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 14px;
    }
    .detail-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .detail-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .detail-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .detail-sub {
      font-size: 0.85rem;
      color: #6a6a80;
      margin-top: 3px;
      font-weight: 400;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 24px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .check-text {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .check-text em { color: #6a6a80; font-style: normal; font-size: 0.86rem; display: block; margin-top: 2px; }

    /* CALLOUT */
    .callout-amber {
      background: #FFFBEB;
      border: 1px solid #FCD34D;
      border-left: 4px solid var(--nu-amber);
      padding: 16px 20px;
      border-radius: 6px;
      margin: 18px 0;
    }
    .callout-amber strong { color: #92400E; }
    .callout-amber p { font-size: 0.93rem; color: #78350F; line-height: 1.55; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 34px 20px 20px; }
      .nu-page-title { font-size: 1.55rem; }
      .step { padding: 16px 18px 16px 62px; }
      .step::before { width: 32px; height: 32px; font-size: 0.95rem; left: 14px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step, .detail-card, .checklist, .summary-card { break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-page-tag">reMarkable Action Item</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <h1 class="nu-page-title"><span>Action:</span> Modify Bucket Cover &amp; Ship Back for Proper Sizing</h1>
      <p class="nu-subtitle">FlexPro Armor sizing correction — intake, alteration, and return shipment workflow.</p>

      <div class="status-bar">
        <span class="status-chip chip-amber"><span class="chip-dot"></span>Open — Action Required</span>
        <span class="status-chip chip-blue">Source: reMarkable Notebook</span>
        <span class="status-chip chip-gray">Owner: Aaron C. Norris</span>
        <span class="status-chip chip-gray">Captured: 2026-04-15</span>
      </div>

      <!-- SUMMARY -->
      <h2 class="section-title"><span class="lead">Task</span> Summary</h2>
      <div class="summary-card">
        <p>Customer received a <strong>FlexPro Armor bucket cover</strong> that does not fit their bucket correctly. The cover needs to be <strong>modified to the correct size</strong> and <strong>shipped back</strong> to the customer. This is a fit/remake workflow — not a defect claim. Objective: make it right, document the revised measurements, and return the cover with zero out-of-pocket cost to the customer.</p>
      </div>

      <!-- KEY DETAILS -->
      <h2 class="section-title"><span class="lead">Key</span> Details to Confirm</h2>
      <div class="detail-grid">
        <div class="detail-card">
          <div class="detail-label">Product</div>
          <div class="detail-value">FlexPro Armor Bucket Cover</div>
          <div class="detail-sub">Confirm SKU: NU-BC-2851 or NU-BC-2834</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Original Size Shipped</div>
          <div class="detail-value">To be verified</div>
          <div class="detail-sub">Pull from original order record</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Correct Size Required</div>
          <div class="detail-value">Customer to confirm</div>
          <div class="detail-sub">Request photos + inside bucket measurements</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Customer</div>
          <div class="detail-value">Pending confirmation</div>
          <div class="detail-sub">Link to original order/SO#</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Return Shipping</div>
          <div class="detail-value">Norris Utilities® pays</div>
          <div class="detail-sub">Provide prepaid return label to customer</div>
        </div>
        <div class="detail-card">
          <div class="detail-label">Target Turnaround</div>
          <div class="detail-value">5–7 business days</div>
          <div class="detail-sub">From receipt at shop to re-ship</div>
        </div>
      </div>

      <!-- STEPS -->
      <h2 class="section-title"><span class="lead">Action</span> Steps</h2>
      <ol class="steps">
        <li class="step">
          <h4>Confirm correct measurements with the customer</h4>
          <p>Request inside-bucket dimensions (length × width × depth) plus photos of the bucket with a tape measure. Note whether it is a 1.5-man or 2-man bucket. Match to correct SKU: NU-BC-2834 (28"×34") or NU-BC-2851 (28"×51").</p>
        </li>
        <li class="step">
          <h4>Issue prepaid return label</h4>
          <p>Generate a prepaid return shipping label and email it to the customer. Include written instructions: fold cover, reuse original box if possible, attach label, drop at UPS/FedEx. No charge to the customer.</p>
        </li>
        <li class="step">
          <h4>Receive and inspect the returned cover</h4>
          <p>On arrival at the modification location, photograph the cover, log the condition, and verify it is the same unit originally shipped. Attach the SO# and new-size target to the work order before alteration begins.</p>
        </li>
        <li class="step">
          <h4>Modify to correct size</h4>
          <p>Alter the FlexPro Armor cover to the confirmed dimensions. Maintain original stitching quality, edge binding, and hardware placement. Re-test fit against the target inside-bucket dimensions before release.</p>
        </li>
        <li class="step">
          <h4>Quality check &amp; re-tag</h4>
          <p>Inspect stitch lines, binding, phoenix logo placement, and NU tag. Confirm overall dimensions with tape measure. Photograph the finished cover from three angles for the order record.</p>
        </li>
        <li class="step">
          <h4>Ship back to customer (Norris pays freight)</h4>
          <p>Use Ben's shipping formula for internal cost tracking only — customer is NOT billed. Ship via original carrier when possible. Email tracking number same day.</p>
        </li>
        <li class="step">
          <h4>Close the loop</h4>
          <p>Follow up with the customer 3 business days after delivery to confirm proper fit. Update the order record, mark this action item complete in the reMarkable log, and file photos in the customer folder.</p>
        </li>
      </ol>

      <!-- CALLOUT -->
      <div class="callout-amber">
        <strong>Important —</strong>
        <p>Do NOT treat this as a warranty claim. Log internally as a "size remake" so we can track fit-related returns separately from defects. If the root cause was our measurement error, no customer cost. If it was the customer's measurement error, Aaron still absorbs the alteration on the first remake — then we bill materials only on any subsequent resize.</p>
      </div>

      <!-- CHECKLIST -->
      <h2 class="section-title"><span class="lead">Completion</span> Checklist</h2>
      <div class="checklist">
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Customer confirmed correct inside-bucket dimensions (written + photo)
            <em>Save to customer folder with date stamp.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Prepaid return label sent to customer
            <em>Tracking number logged in the order record.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Returned cover received and inspected
            <em>Photos taken; condition logged.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Cover modified to correct size
            <em>Stitching, binding, and hardware verified.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Final QC complete — photos archived
            <em>Three angles minimum.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">Cover shipped back to customer — Norris Utilities® pays freight
            <em>Tracking emailed to customer same day.</em>
          </div>
        </div>
        <div class="checklist-item">
          <div class="checkbox"></div>
          <div class="check-text">3-day follow-up with customer confirming fit
            <em>Close the loop. Mark action item complete.</em>
          </div>
        </div>
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