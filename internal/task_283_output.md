<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing Warranty Document Request — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warning: #B8860B;
      --nu-alert-bg: #FFF8E1;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-phoenix-icon svg { width: 100%; height: 100%; }

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
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }
    .nu-doc-badge {
      display: inline-block;
      margin-top: 18px;
      padding: 8px 22px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 30px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 280px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 720px; height: 720px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      margin-bottom: 10px;
      color: var(--nu-dark-text);
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 8px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 22px;
      margin-bottom: 36px;
      padding: 14px 0;
      border-top: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .nu-meta-row strong {
      color: var(--nu-blue);
      font-weight: 700;
      margin-right: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.78rem;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 14px;
      margin-top: 36px;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: #1a1a1a; font-weight: 700; }

    /* PRIORITY ALERT CARD */
    .nu-alert {
      background: var(--nu-alert-bg);
      border-left: 5px solid var(--nu-warning);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 28px;
    }
    .nu-alert-title {
      font-weight: 900;
      color: var(--nu-warning);
      font-size: 1.05rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-alert p { color: #5a4a10; font-size: 0.98rem; }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 22px;
    }
    .nu-card h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.15rem;
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 10px; }

    /* TWO-COLUMN GRID */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }

    /* STEP LIST */
    .nu-steps { list-style: none; counter-reset: step; margin-top: 8px; }
    .nu-steps li {
      counter-increment: step;
      position: relative;
      padding: 14px 14px 14px 60px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .nu-steps li::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .nu-steps li strong { color: var(--nu-dark-text); display: block; margin-bottom: 2px; }
    .nu-steps li span { color: #555; font-size: 0.92rem; }

    /* CHECKLIST */
    .nu-checklist { list-style: none; }
    .nu-checklist li {
      position: relative;
      padding: 10px 0 10px 32px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* CONTACT TABLE */
    .nu-contact-block {
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue) 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      margin-top: 10px;
    }
    .nu-contact-block h3 {
      font-weight: 900;
      font-size: 1.25rem;
      margin-bottom: 6px;
      color: var(--nu-cyan);
      letter-spacing: 0.02em;
    }
    .nu-contact-block p { margin-bottom: 6px; color: rgba(255,255,255,0.92); }
    .nu-contact-block .vendor-name { font-weight: 900; font-size: 1.4rem; color: var(--nu-white); margin-bottom: 4px; }

    /* EMAIL DRAFT BOX */
    .nu-email-draft {
      background: #fafafa;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px;
      font-family: Georgia, 'Times New Roman', serif;
      line-height: 1.7;
      color: #2a2a2a;
    }
    .nu-email-header {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-header div { margin-bottom: 3px; }
    .nu-email-header strong { color: var(--nu-blue); display: inline-block; width: 70px; }
    .nu-email-body p { margin-bottom: 14px; text-indent: 0; }
    .nu-email-sig { margin-top: 22px; padding-top: 10px; border-top: 1px dotted #ccc; font-size: 0.92rem; color: #555; font-family: var(--font-primary); }

    /* TIMELINE */
    .nu-timeline {
      list-style: none;
      border-left: 3px solid var(--nu-cyan);
      padding-left: 22px;
      margin-left: 10px;
    }
    .nu-timeline li {
      position: relative;
      margin-bottom: 16px;
      padding-left: 4px;
    }
    .nu-timeline li::before {
      content: '';
      position: absolute;
      left: -30px; top: 6px;
      width: 14px; height: 14px;
      background: var(--nu-blue);
      border: 3px solid var(--nu-white);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--nu-cyan);
    }
    .nu-timeline .date {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      display: block;
      margin-bottom: 2px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 30px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-grid-2 { grid-template-columns: 1fr; }
      .nu-meta-row { flex-direction: column; gap: 8px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-alert, .nu-email-draft { box-shadow: none; break-inside: avoid; }
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
    <div class="nu-doc-badge">Vendor Action Item</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span class="accent">H2O Waterproofing</span> — Obtain Actual Warranty Document</h1>
      <p class="nu-page-subtitle">Secure a complete, signed copy of the written warranty for the waterproofing work on file with Norris Utilities®.</p>

      <div class="nu-meta-row">
        <div><strong>Action Item</strong>reMarkable capture</div>
        <div><strong>Priority</strong>Medium — documentation gap</div>
        <div><strong>Owner</strong>Aaron C. Norris</div>
        <div><strong>Status</strong>Open — awaiting vendor response</div>
        <div><strong>Opened</strong>April 23, 2026</div>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-title">⚠ Documentation Gap</div>
        <p>Norris Utilities® does not have a physical or PDF copy of the actual warranty document from H2O Waterproofing on file. A verbal or emailed summary is not sufficient for the permanent record. The signed warranty must be captured, archived in operations/open-items, and linked in the vendor file before this item can close.</p>
      </div>

      <!-- WHY IT MATTERS -->
      <h2 class="nu-section-title"><span class="first">Why</span> <span class="rest">This Matters</span></h2>
      <div class="nu-grid-2">
        <div class="nu-card">
          <h3>Protects the Investment</h3>
          <p>Without the signed warranty in hand, any future claim — leak, material failure, workmanship defect — has no enforceable document behind it. Verbal assurances do not survive staff turnover or a vendor ownership change.</p>
        </div>
        <div class="nu-card">
          <h3>Required for the Record</h3>
          <p>All vendor warranties must be filed in the permanent operations record alongside the invoice and scope of work. This is the same standard applied to every other vendor that performs work on our behalf.</p>
        </div>
      </div>

      <!-- WHAT TO REQUEST -->
      <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">to Request From H2O Waterproofing</span></h2>
      <ul class="nu-checklist">
        <li>The complete written warranty document — signed by an authorized representative of H2O Waterproofing.</li>
        <li>Clear statement of the warranty term (length in years) and the effective start date.</li>
        <li>Scope of coverage — what materials, workmanship, and defects are covered.</li>
        <li>Explicit list of exclusions and conditions that would void the warranty.</li>
        <li>Transfer clause — whether the warranty transfers to a new owner of the property or equipment.</li>
        <li>Claim procedure — how to file a claim, required notice period, and contact for warranty service.</li>
        <li>A signed, dated PDF delivered by email suitable for permanent archive.</li>
      </ul>

      <!-- STEPS -->
      <h2 class="nu-section-title"><span class="first">Steps</span> <span class="rest">to Close This Item</span></h2>
      <ol class="nu-steps">
        <li>
          <strong>Send the formal request email (draft below)</strong>
          <span>Use the Aaron voice template. Request a signed PDF of the warranty document on company letterhead.</span>
        </li>
        <li>
          <strong>Phone follow-up within 48 hours if no reply</strong>
          <span>Call H2O Waterproofing directly. Reference the email and confirm who is responsible for producing the document.</span>
        </li>
        <li>
          <strong>Receive and review the document</strong>
          <span>Confirm the checklist items above are all present. If the document is incomplete, reply immediately with the specific gaps.</span>
        </li>
        <li>
          <strong>Archive the signed warranty</strong>
          <span>Save to the Norris Utilities® vendor file: operations/vendors/h2o-waterproofing/warranty-[date].pdf. Add a pointer in operations/open-items.</span>
        </li>
        <li>
          <strong>Update the master tracker and close the item</strong>
          <span>Mark this reMarkable action item as complete in the master tracker with the date the warranty was received and filed.</span>
        </li>
      </ol>

      <!-- VENDOR CONTACT -->
      <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">of Record</span></h2>
      <div class="nu-contact-block">
        <div class="vendor-name">H2O Waterproofing</div>
        <h3>Action on File</h3>
        <p>Open vendor item — documentation pending. Previous reMarkable note referenced H2O Waterproof transfer process and fees; the warranty document request now takes precedence and should be resolved first.</p>
        <p style="margin-top: 12px; font-size: 0.88rem; opacity: 0.85;">Contact details to be confirmed from vendor file. If phone number or primary contact is not currently on file in the vendor record, add that to this action item when the warranty is retrieved.</p>
      </div>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Draft — Aaron Voice</span></h2>
      <div class="nu-email-draft">
        <div class="nu-email-header">
          <div><strong>To:</strong> H2O Waterproofing — primary contact</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Request for Signed Warranty Document — Norris Utilities</div>
        </div>
        <div class="nu-email-body">
          <p>Team —</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;I am reaching out to get a complete copy of the actual warranty document for the waterproofing work performed for Norris Utilities. I would like a signed PDF on your company letterhead for our permanent vendor file.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Specifically, I need the document to include:</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;• The warranty term and its effective start date<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• The full scope of coverage — materials and workmanship<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• Any exclusions or conditions that would void the warranty<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• Whether the warranty is transferable<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• The procedure and contact for filing a claim</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;If you can send the signed PDF over by the end of this week, I would be grateful. If there is an additional fee or form required on our end, let me know and I will take care of it on the same day.</p>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;Thank you for standing behind the work. I appreciate you getting this on file with us.</p>

          <p>Sincerely,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>

          <div class="nu-email-sig">
            Aaron C. Norris<br>
            Founder &amp; CEO | Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Timeline</span> <span class="rest">&amp; Follow-Up</span></h2>
      <ul class="nu-timeline">
        <li>
          <span class="date">2026-04-23 — Today</span>
          Action item captured from reMarkable. Email draft prepared. Ready for Aaron's review and send.
        </li>
        <li>
          <span class="date">2026-04-24 — Send</span>
          Formal request emailed to H2O Waterproofing. Open item logged in operations/open-items.
        </li>
        <li>
          <span class="date">2026-04-26 — 48-hour check</span>
          If no written reply received, phone call to H2O Waterproofing to reach the right person.
        </li>
        <li>
          <span class="date">2026-04-30 — Escalate if needed</span>
          If document still not delivered, second written request with escalation to ownership or principal of H2O Waterproofing.
        </li>
        <li>
          <span class="date">On Receipt — Close</span>
          Archive signed PDF to operations/vendors/h2o-waterproofing/. Update master tracker. Mark reMarkable item complete.
        </li>
      </ul>

      <!-- DEFINITION OF DONE -->
      <h2 class="nu-section-title"><span class="first">Definition</span> <span class="rest">of Done</span></h2>
      <div class="nu-card">
        <p>This action item is not closed until all three of the following are true:</p>
        <ul class="nu-checklist" style="margin-top: 10px;">
          <li>A signed, complete warranty PDF from H2O Waterproofing is saved in the Norris Utilities® vendor file.</li>
          <li>The warranty document is indexed in operations/open-items with its file path and received date.</li>
          <li>The master tracker reflects the item as complete with the date of receipt recorded.</li>
        </ul>
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