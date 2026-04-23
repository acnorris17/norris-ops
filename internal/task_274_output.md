<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PO Follow-Up — Inventory Status Inquiry — Norris Utilities®</title>
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
      --nu-amber-bg: #FEF3C7;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 80px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* DOCUMENT TITLE */
    .doc-title-block {
      background: var(--nu-white);
      border-left: 6px solid var(--nu-blue);
      padding: 28px 32px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-radius: 4px;
    }
    .doc-eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.9rem;
      color: #666;
      margin-top: 10px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, var(--nu-amber-bg) 0%, #FED7AA 100%);
      border: 2px solid var(--nu-amber);
      border-radius: 8px;
      padding: 20px 28px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .priority-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      background: var(--nu-amber);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.5rem;
    }
    .priority-text {
      font-weight: 700;
      color: #78350F;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .priority-text strong { display: block; font-size: 1.05rem; margin-bottom: 4px; color: #92400E; }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CONTEXT GRID */
    .context-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 8px;
    }
    .context-item {
      background: var(--nu-light-gray);
      padding: 18px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .context-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 6px;
    }
    .context-value {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.4;
    }
    .context-value.highlight { color: var(--nu-blue); font-size: 1.1rem; }

    /* ACTION CHECKLIST */
    .action-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .action-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 18px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      border-left: 4px solid var(--nu-blue);
    }
    .action-num {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .action-body {
      flex: 1;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      line-height: 1.5;
    }
    .action-body strong { color: var(--nu-blue); }

    /* EMAIL DRAFT */
    .email-draft {
      background: #FAFAFC;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #1a1a1a;
      line-height: 1.75;
    }
    .email-headers {
      font-family: var(--font-primary);
      font-size: 0.9rem;
      padding-bottom: 16px;
      margin-bottom: 20px;
      border-bottom: 1px dashed #ccc;
      color: #555;
    }
    .email-headers div { padding: 3px 0; }
    .email-headers strong { color: var(--nu-dark-text); display: inline-block; min-width: 70px; }
    .email-body p {
      margin: 0 0 1em 0;
      text-indent: 2em;
    }
    .email-body p.no-indent { text-indent: 0; }
    .email-body ul {
      list-style: none;
      padding-left: 2em;
      margin: 0 0 1em 0;
    }
    .email-body ul li {
      padding: 4px 0;
      position: relative;
      padding-left: 1.2em;
    }
    .email-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      position: absolute;
      left: 0;
      font-weight: 700;
    }
    .email-sig {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid #ddd;
      font-size: 0.95rem;
    }
    .email-sig .sig-name {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 1.05rem;
    }

    /* TALKING POINTS */
    .talking-points {
      list-style: none;
      padding: 0;
    }
    .talking-points li {
      padding: 12px 0 12px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }
    .talking-points li:last-child { border-bottom: none; }
    .talking-points li::before {
      content: '▸';
      position: absolute;
      left: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
      top: 10px;
    }

    /* INFO CALLOUT */
    .info-callout {
      background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      border-radius: 4px;
      margin-top: 20px;
      font-size: 0.95rem;
      color: #1E3A8A;
    }
    .info-callout strong { color: var(--nu-blue); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, #000033 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
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
    .nu-footer-rule {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 0 auto 20px;
      border: none;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-area { padding: 30px 18px 50px; }
      .nu-section { padding: 22px 20px; }
      .doc-title { font-size: 1.4rem; }
      .doc-title-block { padding: 20px 22px; }
      .email-draft { padding: 20px 18px; }
      .email-body p { text-indent: 1em; }
      .priority-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; border: 1px solid #ddd; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- DOC TITLE -->
      <div class="doc-title-block">
        <div class="doc-eyebrow">Action Item · reMarkable Capture</div>
        <h1 class="doc-title">PO Follow-Up — <span>Inventory Status Inquiry</span></h1>
        <div class="doc-meta">Captured: 2026-04-22 · Owner: Aaron C. Norris · Status: Open — Awaiting Response</div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="priority-icon">!</div>
        <div class="priority-text">
          <strong>Customer is Anxiously Waiting</strong>
          Last PO has been placed and acknowledged — inventory has not yet arrived. Aaron needs a firm ETA, current production status, and tracking information before the customer escalates.
        </div>
      </div>

      <!-- ACTION CONTEXT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Context</span></h2>
        <p style="color: var(--nu-body-text); margin-bottom: 18px;">
          Captured from the reMarkable on 2026-04-22. Aaron noted the need to follow up on the most recent purchase order — the customer is anxiously waiting on inventory to arrive and needs a status update from the supplier.
        </p>
        <div class="context-grid">
          <div class="context-item">
            <div class="context-label">Action Type</div>
            <div class="context-value">Supplier Follow-Up</div>
          </div>
          <div class="context-item">
            <div class="context-label">Urgency</div>
            <div class="context-value highlight">High — Customer Waiting</div>
          </div>
          <div class="context-item">
            <div class="context-label">Subject</div>
            <div class="context-value">Last PO — Inventory ETA</div>
          </div>
          <div class="context-item">
            <div class="context-label">Owner</div>
            <div class="context-value">Aaron C. Norris</div>
          </div>
          <div class="context-item">
            <div class="context-label">Source</div>
            <div class="context-value">reMarkable Capture</div>
          </div>
          <div class="context-item">
            <div class="context-label">Target Response</div>
            <div class="context-value">Within 24 Hours</div>
          </div>
        </div>
        <div class="info-callout">
          <strong>Open Item:</strong> The specific PO number, supplier, and customer end-recipient were not captured in the reMarkable note. Confirm details from the master tracker and QuickBooks PO log before sending the follow-up email so references are exact.
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps</span></h2>
        <ol class="action-list">
          <li class="action-item">
            <div class="action-num">1</div>
            <div class="action-body">
              <strong>Pull the last PO record.</strong> Open the master tracker and QuickBooks to confirm PO number, date issued, supplier, line items, and the customer waiting on the shipment.
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">2</div>
            <div class="action-body">
              <strong>Check existing communications.</strong> Search Gmail for the original PO acknowledgment. Note the last response date and any ETA the supplier previously committed to.
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">3</div>
            <div class="action-body">
              <strong>Send the follow-up email.</strong> Use the draft below. CC the appropriate secondary contact per house rules (Boss Products: Troy Gongwer + Thayne Grove · Samson Rope: Donna Poll + Sarah Daniels).
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">4</div>
            <div class="action-body">
              <strong>Update the master tracker.</strong> Note follow-up date, who was contacted, and what was asked. Set the next-touch date for 48 hours out if no reply.
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">5</div>
            <div class="action-body">
              <strong>Notify the customer.</strong> Once the supplier replies with an updated ETA or tracking number, relay it to the end customer the same business day so they see action.
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">6</div>
            <div class="action-body">
              <strong>Escalate if no response in 48 hours.</strong> Place a direct phone call to the supplier rep. Document call outcome in the tracker.
            </div>
          </li>
        </ol>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Draft — Ready to Send</span></h2>
        <div class="email-draft">
          <div class="email-headers">
            <div><strong>To:</strong> [Supplier primary contact — confirm from PO]</div>
            <div><strong>CC:</strong> [Secondary supplier contact per house rule]</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Following Up on PO [#] — Inventory Status Needed</div>
          </div>
          <div class="email-body">
            <p class="no-indent">[Name] —</p>
            <p>Following up on the last purchase order we placed. Our customer is anxiously waiting on the inventory to arrive and I need to give them a firm update.</p>
            <p>Could you confirm the following at your earliest convenience:</p>
            <ul>
              <li>Current production or fulfillment status</li>
              <li>Expected ship date out of your facility</li>
              <li>Tracking number once the shipment moves</li>
              <li>Any line items at risk of further delay</li>
            </ul>
            <p>If anything has slipped on your end, I would rather know now so I can manage the conversation on this side. Appreciate y'all jumping on this — I would like to circle back to my customer today if possible.</p>
            <p>Thanks for the help.</p>
            <p class="no-indent">Sincerely,</p>
            <div class="email-sig">
              <div class="sig-name">Aaron C. Norris</div>
              <div>Founder &amp; CEO</div>
              <div>Norris Utilities, LLC</div>
              <div>Cell: 205-500-1343</div>
              <div>acnorris@norrisutilities.com</div>
            </div>
          </div>
        </div>
        <div class="info-callout">
          <strong>Voice check:</strong> Em dash greeting, indented paragraphs, bullets use • marker, "y'all" used naturally, no filler, direct ask in the first paragraph. Signature block matches Aaron's standard format.
        </div>
      </section>

      <!-- PHONE TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Phone</span> <span class="rest">Talking Points (Backup)</span></h2>
        <p style="color: var(--nu-body-text); margin-bottom: 14px;">
          If a phone call is needed instead of (or in addition to) the email, lead with these in order:
        </p>
        <ul class="talking-points">
          <li>Reference the PO number and date placed — keep it specific, not vague.</li>
          <li>State that the end customer is waiting and the relationship is at stake.</li>
          <li>Ask for the firm ship date out of their facility, not an estimate.</li>
          <li>Request the tracking number be emailed the moment it generates.</li>
          <li>Ask if any line items are at risk so partial-ship options can be explored.</li>
          <li>Confirm who to call directly if the timeline slips again.</li>
          <li>Thank them — keep the relationship professional regardless of frustration.</li>
        </ul>
      </section>

      <!-- CUSTOMER UPDATE TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Customer</span> <span class="rest">Update — Once ETA Confirmed</span></h2>
        <div class="email-draft">
          <div class="email-headers">
            <div><strong>To:</strong> [Customer]</div>
            <div><strong>From:</strong> Aaron C. Norris</div>
            <div><strong>Subject:</strong> Update on Your Order — Inventory Status</div>
          </div>
          <div class="email-body">
            <p class="no-indent">[Name] —</p>
            <p>Wanted to give you a direct update on your order. I reached out to the supplier today and here is where things stand:</p>
            <ul>
              <li>Current status: [pull from supplier reply]</li>
              <li>Expected ship date: [date]</li>
              <li>Tracking: [number, or "will be sent the moment it generates"]</li>
            </ul>
            <p>I appreciate your patience. I will stay on this until the inventory is in your hands and follow up the moment anything changes.</p>
            <p class="no-indent">Sincerely,</p>
            <div class="email-sig">
              <div class="sig-name">Aaron C. Norris</div>
              <div>Founder &amp; CEO</div>
              <div>Norris Utilities, LLC</div>
              <div>Cell: 205-500-1343</div>
              <div>acnorris@norrisutilities.com</div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRACKER UPDATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Tracker</span> <span class="rest">Update Required</span></h2>
        <div class="context-grid">
          <div class="context-item">
            <div class="context-label">Field</div>
            <div class="context-value">Last Touch Date</div>
          </div>
          <div class="context-item">
            <div class="context-label">Update To</div>
            <div class="context-value highlight">2026-04-22</div>
          </div>
          <div class="context-item">
            <div class="context-label">Field</div>
            <div class="context-value">Status</div>
          </div>
          <div class="context-item">
            <div class="context-label">Update To</div>
            <div class="context-value highlight">Awaiting Supplier Reply</div>
          </div>
          <div class="context-item">
            <div class="context-label">Field</div>
            <div class="context-value">Next Action Date</div>
          </div>
          <div class="context-item">
            <div class="context-label">Update To</div>
            <div class="context-value highlight">2026-04-24 (48 hr)</div>
          </div>
          <div class="context-item">
            <div class="context-label">Field</div>
            <div class="context-value">Escalation Trigger</div>
          </div>
          <div class="context-item">
            <div class="context-label">Update To</div>
            <div class="context-value">No reply by 2026-04-24 → phone call</div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <hr class="nu-footer-rule">
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>