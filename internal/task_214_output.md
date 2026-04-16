<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Handle APCO Rusty Invoices — Norris Utilities®</title>
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
      --nu-alert-red: #C53030;
      --nu-alert-amber: #D69E2E;
      --nu-success-green: #2F855A;
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON TRANSITION */
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
      padding: 60px 40px 80px;
    }
    .nu-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* PAGE HEADER / TASK BANNER */
    .task-banner {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 20px 28px;
      border-radius: 6px;
      margin-bottom: 36px;
    }
    .task-banner-badge {
      background: var(--nu-alert-red);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .task-banner-text strong {
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      display: block;
    }
    .task-banner-text span {
      font-size: 0.9rem;
      color: #742A2A;
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }
    .nu-section-title .dark {
      color: var(--nu-dark-text);
    }

    section { margin-bottom: 44px; }
    section h3 {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.15rem;
      margin-bottom: 12px;
    }
    section p { margin-bottom: 12px; }

    /* CONTEXT CARD */
    .context-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 10px;
    }
    .context-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px;
      border-radius: 4px;
    }
    .context-card .label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .context-card .value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .context-card .sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* INVOICE TABLE */
    .invoice-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 6px;
      overflow: hidden;
    }
    .invoice-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .invoice-table th {
      padding: 14px 16px;
      text-align: left;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .invoice-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .invoice-table tr:last-child td { border-bottom: none; }
    .invoice-table tr:hover td { background: var(--nu-light-gray); }
    .status-pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .status-unknown { background: #FEF5E7; color: #744210; }
    .status-action { background: #FED7D7; color: #742A2A; }
    .status-verify { background: #E6FFFA; color: #234E52; }

    /* ACTION STEPS */
    .step-list {
      list-style: none;
      counter-reset: step-counter;
      padding: 0;
    }
    .step-list li {
      counter-increment: step-counter;
      position: relative;
      padding: 18px 20px 18px 70px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .step-list li::before {
      content: counter(step-counter);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .step-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .step-list li span {
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }

    /* EMAIL DRAFT BLOCK */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
      font-size: 0.95rem;
      line-height: 1.75;
    }
    .email-draft .field-line {
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-draft .field-line strong {
      color: var(--nu-blue);
      margin-right: 8px;
    }
    .email-draft .body-block { margin-top: 16px; }
    .email-draft p { margin-left: 20px; margin-bottom: 14px; }
    .email-draft .sign-off { margin-top: 16px; }
    .email-draft .sign-off p { margin-left: 20px; }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #EBF8FF 0%, #BEE3F8 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 18px 24px;
      border-radius: 4px;
      margin: 18px 0;
    }
    .callout strong { color: var(--nu-blue); }

    .callout-warn {
      background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
      border-left: 5px solid var(--nu-alert-amber);
      padding: 18px 24px;
      border-radius: 4px;
      margin: 18px 0;
    }
    .callout-warn strong { color: #92400E; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 34px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 13px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 40px 20px; }
      .invoice-table { font-size: 0.82rem; }
      .invoice-table th, .invoice-table td { padding: 10px 8px; }
      .step-list li { padding-left: 62px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-list li, .invoice-table { box-shadow: none; }
      section { page-break-inside: avoid; }
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
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
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
    <div class="nu-inner">

      <!-- TASK BANNER -->
      <div class="task-banner">
        <div class="task-banner-badge">Action Item</div>
        <div class="task-banner-text">
          <strong>Handle APCO Rusty Invoices</strong>
          <span>reMarkable captured 2026-04-16 &middot; Owner: Aaron C. Norris &middot; Priority: High</span>
        </div>
      </div>

      <!-- CONTEXT -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Context</span> <span class="dark">— Who &amp; What</span></h2>
        <p>This item surfaced from a reMarkable note. "APCO Rusty" refers to <strong>Rusty</strong> at <strong>Alabama Power Company (APCO)</strong>. The goal is to reconcile open invoices with Rusty's account, confirm which invoices are paid, outstanding, or disputed, and close the loop in writing.</p>

        <div class="context-grid">
          <div class="context-card">
            <div class="label">Customer</div>
            <div class="value">Alabama Power Company</div>
            <div class="sub">APCO — Southern Company subsidiary</div>
          </div>
          <div class="context-card">
            <div class="label">Primary Contact</div>
            <div class="value">Rusty</div>
            <div class="sub">Confirm last name &amp; title before emailing</div>
          </div>
          <div class="context-card">
            <div class="label">Task Owner</div>
            <div class="value">Aaron C. Norris</div>
            <div class="sub">Founder &amp; CEO, Norris Utilities®</div>
          </div>
          <div class="context-card">
            <div class="label">Captured</div>
            <div class="value">April 16, 2026</div>
            <div class="sub">reMarkable note &rarr; auto-task</div>
          </div>
        </div>
      </section>

      <!-- INVOICE RECONCILIATION GRID -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Invoice</span> <span class="dark">Reconciliation Worksheet</span></h2>
        <p>Pull all QuickBooks invoices tagged to Alabama Power Company. Fill this grid before contacting Rusty. Any line marked <em>Unknown</em> must be resolved by QuickBooks lookup or by Caroline Butler (CB) before outbound contact.</p>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Product / PO</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Next Step</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>— (fill from QuickBooks)</td>
              <td>—</td>
              <td>FlexPro Armor / Equipment</td>
              <td>—</td>
              <td><span class="status-pill status-unknown">Pull data</span></td>
              <td>Export QB open invoices filtered by APCO</td>
            </tr>
            <tr>
              <td>— (fill from QuickBooks)</td>
              <td>—</td>
              <td>Shipping line item?</td>
              <td>—</td>
              <td><span class="status-pill status-verify">Verify</span></td>
              <td>Confirm shipping formula applied: ROUNDUP(ROUNDUP(RegCost,0) &times; 1.10, 0)</td>
            </tr>
            <tr>
              <td>— (fill from QuickBooks)</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td><span class="status-pill status-action">Past 30 days</span></td>
              <td>Flag for follow-up call if outstanding</td>
            </tr>
          </tbody>
        </table>

        <div class="callout-warn">
          <strong>Data rule:</strong> Do not email Rusty with placeholder numbers. Every invoice #, date, and dollar amount must be pulled live from QuickBooks before the draft goes out.
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Action</span> <span class="dark">Plan — Step by Step</span></h2>
        <ol class="step-list">
          <li>
            <strong>Pull APCO account statement from QuickBooks</strong>
            <span>Filter by customer &ldquo;Alabama Power Company&rdquo; or &ldquo;APCO&rdquo;. Export as PDF for attachment. Include open and last 90 days paid so Rusty has the full picture.</span>
          </li>
          <li>
            <strong>Verify Rusty's full name, role, and email address</strong>
            <span>Check prior email threads and CB's customer sheet. If not on file, ask CB to confirm before outbound contact — avoid generic greetings.</span>
          </li>
          <li>
            <strong>Cross-check against shipping &amp; PO records</strong>
            <span>Every shipped unit should be invoiced. Reconcile any shipment that has not yet been invoiced in QuickBooks (per the open-invoices compiled truth rule).</span>
          </li>
          <li>
            <strong>Draft email to Rusty (see template below)</strong>
            <span>Use Aaron's voice — em dash greeting, indented paragraphs, bullets with &bull;. Let CB review before Aaron sends.</span>
          </li>
          <li>
            <strong>Log outcome in the master tracker</strong>
            <span>Update open-invoices.md with invoice status, date contacted, and Rusty's response. Roll into the next day's handoff.</span>
          </li>
          <li>
            <strong>Set 5-business-day follow-up</strong>
            <span>If Rusty has not responded by end of day + 5 business days, phone follow-up by Aaron directly.</span>
          </li>
        </ol>
      </section>

      <!-- EMAIL DRAFT -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Email</span> <span class="dark">Draft — For Aaron's Review</span></h2>
        <p>Drafted in Aaron's voice. Replace bracketed values with the pulled QuickBooks data before sending. Do <strong>not</strong> send this draft with placeholders intact.</p>

        <div class="email-draft">
          <div class="field-line"><strong>To:</strong> Rusty &lt;rusty@alabamapower.com — confirm address&gt;</div>
          <div class="field-line"><strong>Cc:</strong> Caroline Butler &lt;caroline@norrisutilities.com&gt;</div>
          <div class="field-line"><strong>Subject:</strong> APCO Account — Open Invoice Reconciliation</div>

          <div class="body-block">
            <p>Rusty —</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Following up on the Alabama Power account. I want to make sure we have everything squared away on our end and that nothing has slipped through.</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Attached is a current statement showing the open items tied to APCO. The bullets below summarize:</p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Invoice [#] dated [date] — $[amount] — [product/PO reference]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Invoice [#] dated [date] — $[amount] — [product/PO reference]<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Invoice [#] dated [date] — $[amount] — [product/PO reference]
            </p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;If any of these have been paid on your side but show open on ours, send me the check number or payment reference and I'll get it reconciled same day. If there is anything disputed or needing a corrected PO, I'd rather fix it quickly than let it sit.</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Caroline Butler is copied and can jump in on any admin details. Appreciate the partnership — want to keep the account clean on both sides.</p>
          </div>

          <div class="sign-off">
            <p>Sincerely,</p>
            <p>Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com</p>
          </div>
        </div>
      </section>

      <!-- NOTES & GUARDRAILS -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Notes</span> <span class="dark">&amp; Guardrails</span></h2>

        <div class="callout">
          <strong>Customer-facing rule:</strong> Per team protocol, any customer-facing email needs Aaron's review before send. CB may prepare the draft but Aaron signs off.
        </div>

        <div class="callout">
          <strong>Pricing integrity:</strong> Any re-quoted line must apply the correct margin — FlexPro Armor at 50%, Samson Rope at 30%, equipment at 12&ndash;15%. Shipping uses Ben's formula.
        </div>

        <div class="callout-warn">
          <strong>March 20 shipment check:</strong> Per the open-invoices compiled truth, March 20 shipments have not all been invoiced in QuickBooks. If APCO received anything on or around that date, double-check before assuming the invoice is out the door.
        </div>
      </section>

      <!-- COMPLETION CHECKLIST -->
      <section>
        <h2 class="nu-section-title"><span class="accent">Completion</span> <span class="dark">Checklist</span></h2>
        <ul class="checklist">
          <li>QuickBooks APCO statement pulled and saved as PDF</li>
          <li>All invoice numbers, dates, and amounts verified against shipping records</li>
          <li>Rusty's full name, title, and email confirmed</li>
          <li>Email draft reviewed by Aaron C. Norris</li>
          <li>Email sent with statement attached, CB copied</li>
          <li>Outcome logged in master tracker and open-invoices.md</li>
          <li>5-business-day follow-up reminder scheduled</li>
          <li>Task closed in reMarkable action queue</li>
        </ul>
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