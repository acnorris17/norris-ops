<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PO Follow-Up — Inventory Status Request — Norris Utilities®</title>
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
      --nu-urgent-red: #C8102E;
      --nu-warning-amber: #E8A317;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.8;
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
      width: 72px; height: 72px;
      margin: 0 auto 12px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 650px; height: 650px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* PAGE TITLE BLOCK */
    .page-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 32px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .page-eyebrow {
      display: inline-block;
      background: var(--nu-urgent-red);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 3px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .page-title .highlight { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--nu-body-text);
      max-width: 720px;
      margin: 0 auto;
    }

    /* SECTION */
    .nu-section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* STATUS CARD */
    .status-card {
      background: linear-gradient(135deg, #FFF8E1 0%, #FFFDF5 100%);
      border-left: 6px solid var(--nu-warning-amber);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .status-card .status-label {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-warning-amber);
      margin-bottom: 8px;
    }
    .status-card .status-headline {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }

    /* DETAILS GRID */
    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .detail-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .detail-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .detail-card .label {
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .detail-card .value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      line-height: 1.45;
    }
    .detail-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-top: 4px;
    }

    /* ACTION STEPS */
    .action-steps {
      list-style: none;
      counter-reset: step-counter;
      padding: 0;
      margin: 0;
    }
    .action-steps li {
      counter-increment: step-counter;
      position: relative;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px 20px 72px;
      margin-bottom: 14px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .action-steps li::before {
      content: counter(step-counter);
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 38px; height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .action-steps li .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .action-steps li .step-detail {
      color: var(--nu-body-text);
      font-size: 0.92rem;
      line-height: 1.55;
    }

    /* EMAIL PREVIEW */
    .email-preview {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: Georgia, 'Times New Roman', serif;
      color: var(--nu-dark-text);
      line-height: 1.7;
      font-size: 0.98rem;
    }
    .email-preview .email-header {
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 14px;
      margin-bottom: 18px;
      font-family: var(--font-primary);
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .email-preview .email-header div { margin-bottom: 4px; }
    .email-preview .email-header strong {
      color: var(--nu-dark-text);
      display: inline-block;
      width: 72px;
    }
    .email-preview p { margin-bottom: 14px; padding-left: 24px; }
    .email-preview p.greeting { padding-left: 0; }
    .email-preview p.bullets { padding-left: 48px; }
    .email-preview .sig { padding-left: 24px; margin-top: 20px; }
    .email-preview .sig-name { font-weight: 700; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-box {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 16px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .checklist-text strong { color: var(--nu-blue); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
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
      .nu-inner { padding: 40px 20px 60px; }
      .page-title { font-size: 1.7rem; }
      .action-steps li { padding: 18px 18px 18px 62px; }
      .action-steps li::before { width: 32px; height: 32px; left: 16px; font-size: 0.95rem; }
      .email-preview { padding: 20px; }
      .email-preview p { padding-left: 12px; }
      .email-preview p.bullets { padding-left: 24px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .detail-card, .action-steps li, .email-preview, .checklist { box-shadow: none; }
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- PAGE TITLE -->
      <div class="page-title-block">
        <span class="page-eyebrow">Action Item — Follow-Up Required</span>
        <h1 class="page-title">PO <span class="highlight">Inventory Status</span> Follow-Up</h1>
        <p class="page-subtitle">Customer is anxiously waiting on inventory from the last Purchase Order. A structured follow-up is owed today to confirm shipment timing, tracking, and any outstanding hold points.</p>
      </div>

      <!-- STATUS CARD -->
      <div class="status-card">
        <div class="status-label">Current Status</div>
        <div class="status-headline">Customer has escalated: "anxiously waiting on inventory." Awaiting confirmed ship date, tracking numbers, and an honest accounting of any backorder or delay on the last PO.</div>
      </div>

      <!-- KEY DETAILS GRID -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Snapshot</span></h2>
        <div class="details-grid">
          <div class="detail-card">
            <div class="label">Priority</div>
            <div class="value">High — Customer Waiting</div>
            <div class="sub">Delay risks the relationship and future POs.</div>
          </div>
          <div class="detail-card">
            <div class="label">Owner</div>
            <div class="value">Aaron C. Norris</div>
            <div class="sub">Founder &amp; CEO — direct contact to customer.</div>
          </div>
          <div class="detail-card">
            <div class="label">Trigger Source</div>
            <div class="value">reMarkable Action Item</div>
            <div class="sub">Captured during field notes; logged into brain.</div>
          </div>
          <div class="detail-card">
            <div class="label">Target Response</div>
            <div class="value">Today — Before End of Day</div>
            <div class="sub">Customer expects same-day acknowledgement.</div>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Plan</span></h2>
        <ol class="action-steps">
          <li>
            <span class="step-title">Pull the last PO from QuickBooks and the master tracker</span>
            <span class="step-detail">Confirm PO number, line items, quantities, ship-to address, and original promised delivery window. Note any split shipments or partial fills already recorded.</span>
          </li>
          <li>
            <span class="step-title">Call the manufacturer / supplier directly</span>
            <span class="step-detail">For FlexPro Armor, Samson Rope (CC Donna Poll &amp; Sarah Daniels), Skylift (Nick Gordon), BOSS Products (CC Troy Gongwer &amp; Thayne Grove), or Bay Shore Systems (Andy Barron) — request a hard ship date, tracking number, and any flag on backorder.</span>
          </li>
          <li>
            <span class="step-title">Verify tracking — do not rely on supplier promises alone</span>
            <span class="step-detail">If a tracking number exists, confirm the carrier (UPS / FedEx / freight LTL) shows movement. If nothing is in transit yet, say so honestly to the customer.</span>
          </li>
          <li>
            <span class="step-title">Send the customer follow-up email today</span>
            <span class="step-detail">Use the draft below. Lead with the answer. No filler. Give them the real ship date, tracking if available, or the next hard checkpoint if it is not yet shipped.</span>
          </li>
          <li>
            <span class="step-title">Log the update in the master tracker and Open Items</span>
            <span class="step-detail">Record the new expected delivery date, any backorder flags, and the next follow-up date. Mark invoicing status so revenue does not slip through.</span>
          </li>
        </ol>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Customer</span> <span class="rest">Follow-Up Email — Draft</span></h2>
        <div class="email-preview">
          <div class="email-header">
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>To:</strong> [Customer Name &amp; Email]</div>
            <div><strong>Subject:</strong> PO [Number] — Shipment &amp; Inventory Update</div>
          </div>

          <p class="greeting">[Name] —</p>

          <p>Thank you for the patience on this last PO. I owe you a straight answer on where the inventory stands, so here it is:</p>

          <p class="bullets">• Ship date: [confirmed date from supplier]<br>
          • Tracking: [carrier + tracking number, or "pending, posting by EOD"]<br>
          • Backorder items, if any: [name item + revised ETA, or "none — full PO shipping complete"]<br>
          • Delivery window to your dock: [date range]</p>

          <p>If anything changes between now and the delivery, you will hear it from me directly — not after the fact. I know y'all are waiting and I want you running, not calling to chase.</p>

          <p>Call my cell anytime at 205-500-1343 if you want to talk through it.</p>

          <div class="sig">
            <p>Sincerely,</p>
            <p class="sig-name">Aaron C. Norris</p>
            <p>Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- VERIFICATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Before</span> <span class="rest">You Hit Send — Verification Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>PO number &amp; line items confirmed</strong> against QuickBooks and the master tracker.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Supplier spoken to directly</strong> — not just email. Voice confirmation of ship date.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Tracking number verified</strong> on the carrier site, or honest "not yet shipped" stated.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Correct CC list</strong> — Samson Rope always CC Donna Poll &amp; Sarah Daniels; BOSS always CC Troy Gongwer &amp; Thayne Grove.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Invoicing status</strong> reviewed — if shipment is complete but not yet invoiced, queue the invoice now. March 20 shipments are still open.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-text"><strong>Next follow-up date</strong> logged in Open Items so this never falls silent again.</div>
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