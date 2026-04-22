<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Follow-Up: Last PO Inventory Order — Norris Utilities®</title>
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
    --nu-success: #10B981;
    --nu-warning: #F59E0B;
    --nu-danger: #DC2626;
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
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
    z-index: 1;
    opacity: 0.7;
  }

  .nu-header::after {
    content: '';
    position: absolute;
    top: -30%; right: -15%;
    width: 70%; height: 180%;
    background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
    z-index: 1;
  }

  .nu-header-inner { position: relative; z-index: 2; }

  /* Ghost phoenix watermark */
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
    margin-bottom: 20px;
  }
  .nu-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.95);
    letter-spacing: 0.05em;
  }

  .nu-doc-badge {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.35);
    color: var(--nu-white);
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 18px;
  }

  /* ══ CHEVRON TRANSITION ══ */
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
    background: var(--nu-light-gray);
    padding: 60px 40px 80px;
  }
  .nu-container {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* ══ SECTION HEADERS ══ */
  .nu-section-title {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #0033cc;
    letter-spacing: 0.01em;
  }
  .nu-section-title span {
    color: var(--nu-dark-text);
    font-weight: 700;
  }

  .nu-page-title {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 2.2rem;
    color: var(--nu-dark-text);
    margin-bottom: 8px;
    line-height: 1.15;
  }
  .nu-page-title span { color: #0033cc; }
  .nu-page-subtitle {
    font-size: 1.05rem;
    color: #5a5a6e;
    margin-bottom: 36px;
    font-weight: 400;
  }

  /* ══ STATUS STRIP ══ */
  .nu-status-strip {
    background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    color: var(--nu-white);
    border-radius: 10px;
    padding: 22px 28px;
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    box-shadow: 0 4px 16px rgba(10,14,92,0.18);
  }
  .nu-status-item .label {
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--nu-cyan);
    font-weight: 700;
    margin-bottom: 4px;
  }
  .nu-status-item .value {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--nu-white);
  }

  /* ══ CARDS ══ */
  .nu-card {
    background: var(--nu-white);
    border-radius: 10px;
    padding: 28px 30px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid var(--nu-medium-gray);
    margin-bottom: 24px;
  }

  /* ══ BADGE ══ */
  .nu-badge {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    color: var(--nu-white);
    padding: 12px 32px 12px 20px;
    margin-bottom: 16px;
    clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ══ CHECKLIST ══ */
  .nu-checklist {
    list-style: none;
    padding: 0;
  }
  .nu-checklist li {
    display: flex;
    align-items: flex-start;
    padding: 14px 0;
    border-bottom: 1px solid var(--nu-medium-gray);
  }
  .nu-checklist li:last-child { border-bottom: none; }
  .nu-checklist .check-box {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border: 2px solid #0033cc;
    border-radius: 4px;
    margin-right: 14px;
    margin-top: 2px;
    background: var(--nu-white);
  }
  .nu-checklist .check-text {
    flex: 1;
    font-size: 0.98rem;
    color: var(--nu-dark-text);
    line-height: 1.5;
  }
  .nu-checklist .check-text strong {
    display: block;
    font-weight: 700;
    margin-bottom: 2px;
    color: var(--nu-dark-text);
  }
  .nu-checklist .check-text .note {
    font-size: 0.88rem;
    color: #6b6b7e;
    font-weight: 400;
  }

  /* ══ INFO TABLE ══ */
  .nu-info-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
  }
  .nu-info-table th,
  .nu-info-table td {
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid var(--nu-medium-gray);
    font-size: 0.95rem;
  }
  .nu-info-table th {
    background: var(--nu-light-gray);
    font-weight: 700;
    color: var(--nu-dark-text);
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .nu-info-table tr:last-child td { border-bottom: none; }
  .nu-info-table td.label-cell {
    font-weight: 700;
    color: #0033cc;
    width: 35%;
  }

  /* ══ TWO COLUMN ══ */
  .nu-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  /* ══ ACTION BLOCK ══ */
  .nu-action-block {
    background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
    border-left: 4px solid var(--nu-blue);
    border-radius: 8px;
    padding: 22px 26px;
    margin: 20px 0;
  }
  .nu-action-block h4 {
    font-size: 1rem;
    font-weight: 900;
    color: #0033cc;
    margin-bottom: 8px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .nu-action-block p {
    font-size: 0.96rem;
    color: var(--nu-dark-text);
    line-height: 1.55;
  }

  /* ══ EMAIL TEMPLATE ══ */
  .nu-email-box {
    background: #fafafc;
    border: 1px solid var(--nu-medium-gray);
    border-radius: 8px;
    padding: 24px 28px;
    font-family: Georgia, 'Times New Roman', serif;
    color: var(--nu-dark-text);
    font-size: 0.96rem;
    line-height: 1.7;
  }
  .nu-email-box .hdr {
    font-family: var(--font-primary);
    font-size: 0.82rem;
    color: #6b6b7e;
    margin-bottom: 4px;
  }
  .nu-email-box .hdr strong { color: var(--nu-dark-text); margin-right: 6px; }
  .nu-email-box .email-body {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--nu-medium-gray);
  }
  .nu-email-box .email-body p {
    text-indent: 30px;
    margin-bottom: 14px;
  }
  .nu-email-box .email-body p.no-indent { text-indent: 0; }
  .nu-email-box .sig-block {
    margin-top: 20px;
    padding-left: 30px;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #4a4a5e;
  }

  /* ══ BULLETS ══ */
  .nu-bullets {
    list-style: none;
    padding-left: 0;
  }
  .nu-bullets li {
    position: relative;
    padding-left: 22px;
    margin-bottom: 10px;
    font-size: 0.97rem;
    color: var(--nu-dark-text);
    line-height: 1.55;
  }
  .nu-bullets li::before {
    content: '•';
    position: absolute;
    left: 4px;
    color: var(--nu-blue);
    font-weight: 900;
    font-size: 1.2rem;
    top: -2px;
  }

  /* ══ PILL ══ */
  .nu-pill {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .nu-pill.open { background: #FEF3C7; color: #92400E; }
  .nu-pill.action { background: #DBEAFE; color: #1E40AF; }

  /* ══ FOOTER ══ */
  .nu-footer {
    background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
    color: rgba(255,255,255,0.85);
    padding: 44px 40px;
    text-align: center;
    font-family: var(--font-primary);
  }
  .nu-footer-tagline {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 1.25rem;
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

  /* ══ RESPONSIVE ══ */
  @media (max-width: 768px) {
    .nu-header { padding: 50px 20px 70px; min-height: 240px; }
    .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
    .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
    .nu-tagline { font-size: 1.05rem; }
    .nu-content-area { padding: 40px 20px 60px; }
    .nu-page-title { font-size: 1.7rem; }
    .nu-card { padding: 22px 20px; }
    .nu-two-col { grid-template-columns: 1fr; }
    .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 18px; }
  }

  /* ══ PRINT ══ */
  @media print {
    body { background: white; }
    .nu-header { background: #0033cc !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .nu-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
    .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
  <div class="nu-header-inner">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-badge">Internal Action Brief</div>
  </div>
</header>

<!-- CHEVRON -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
  </svg>
</div>

<!-- CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- TITLE -->
    <h1 class="nu-page-title">Follow Up on <span>Last PO Inventory Order</span></h1>
    <p class="nu-page-subtitle">reMarkable action item captured 2026-04-22 — verify status, confirm ETA, close the loop with the vendor and the tracker.</p>

    <!-- STATUS STRIP -->
    <div class="nu-status-strip">
      <div class="nu-status-item">
        <div class="label">Action Type</div>
        <div class="value">Vendor Follow-Up</div>
      </div>
      <div class="nu-status-item">
        <div class="label">Status</div>
        <div class="value">Open — Needs Action</div>
      </div>
      <div class="nu-status-item">
        <div class="label">Owner</div>
        <div class="value">Aaron C. Norris</div>
      </div>
      <div class="nu-status-item">
        <div class="label">Target Close</div>
        <div class="value">End of Day Today</div>
      </div>
    </div>

    <!-- STEP 1: IDENTIFY -->
    <div class="nu-card">
      <div class="nu-badge">Step 1 — Identify the PO</div>
      <h3 class="nu-section-title">Pull <span>the last PO on file</span></h3>
      <p style="margin-bottom: 14px; color: var(--nu-body-text);">Before reaching out, locate the most recent purchase order so the conversation has a specific reference. Check these sources in order:</p>
      <ol class="nu-bullets" style="list-style: none;">
        <li><strong>Master Tracker</strong> — <em>~/norris-agent/data/master_tracker</em> — filter by "PO Issued" status, sort descending by date.</li>
        <li><strong>QuickBooks</strong> — Purchase Orders → sort by date → grab PO number, vendor, line items, total, and issue date.</li>
        <li><strong>Gmail</strong> — search: <code style="background:#eef1f7;padding:2px 6px;border-radius:4px;">from:(vendor) subject:PO</code> — confirm the last outgoing PO email and any vendor acknowledgement.</li>
        <li><strong>Palace / brain</strong> — <em>palace-deals</em> and <em>operations/open-invoices</em> wings carry supplemental context on outstanding orders.</li>
      </ol>
    </div>

    <!-- STEP 2: CAPTURE FACTS -->
    <div class="nu-card">
      <div class="nu-badge">Step 2 — Capture the Facts</div>
      <h3 class="nu-section-title">Fill in <span>the order details</span></h3>
      <table class="nu-info-table">
        <tr>
          <td class="label-cell">PO Number</td>
          <td>_______________________ (from QuickBooks)</td>
        </tr>
        <tr>
          <td class="label-cell">Vendor</td>
          <td>_______________________ (Skylift, Samson, Boss, Bay Shore, etc.)</td>
        </tr>
        <tr>
          <td class="label-cell">Vendor Contact</td>
          <td>_______________________ (primary + CC partner per contact rules)</td>
        </tr>
        <tr>
          <td class="label-cell">Date Issued</td>
          <td>_______________________</td>
        </tr>
        <tr>
          <td class="label-cell">Total Value</td>
          <td>$______________________</td>
        </tr>
        <tr>
          <td class="label-cell">Line Items</td>
          <td>_______________________ (SKU, qty, description)</td>
        </tr>
        <tr>
          <td class="label-cell">Promised Ship Date</td>
          <td>_______________________</td>
        </tr>
        <tr>
          <td class="label-cell">Last Vendor Update</td>
          <td>_______________________</td>
        </tr>
      </table>
    </div>

    <!-- STEP 3: CHECKLIST -->
    <div class="nu-card">
      <div class="nu-badge">Step 3 — Follow-Up Checklist</div>
      <h3 class="nu-section-title">Work <span>the list top to bottom</span></h3>
      <ul class="nu-checklist">
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Confirm order acknowledgement</strong>
            <span class="note">Did the vendor send a PO acknowledgement email? If not, that is the first thing to ask for.</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Request current production status</strong>
            <span class="note">In production / in QC / packed / shipped / delivered. Ask for a dated status, not a generic "on track."</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Get a firm ship date and carrier</strong>
            <span class="note">Shipping carrier, tracking number if shipped, and BOL if LTL/freight.</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Verify line-item count and SKUs match the PO</strong>
            <span class="note">Quantity variances cause invoice disputes. Catch them before the truck leaves.</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Capture any cost or freight change</strong>
            <span class="note">If vendor cost shifted, update Ben's Formula: CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0).</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Update Master Tracker</strong>
            <span class="note">New status, new ETA, and the date of today's vendor contact. This is the single source of truth.</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Notify the end customer (if the PO ships to a customer)</strong>
            <span class="note">If this PO is attached to an outstanding customer order, forward the ETA so they can plan crew and install.</span>
          </div>
        </li>
        <li>
          <div class="check-box"></div>
          <div class="check-text">
            <strong>Close the loop in QuickBooks</strong>
            <span class="note">Mark PO received when inventory lands. Match bill to PO. Reconcile against the invoice.</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- STEP 4: EMAIL TEMPLATE -->
    <div class="nu-card">
      <div class="nu-badge">Step 4 — Send the Follow-Up Email</div>
      <h3 class="nu-section-title">Vendor <span>email — ready to send</span></h3>
      <p style="margin-bottom: 16px; color: var(--nu-body-text);">Replace the bracketed fields with the PO details captured in Step 2. Remember the CC rules on contacts: Boss (Troy + Thayne), Samson (Donna + Sarah), Skylift (Andrew, Dale, Nick Jr).</p>

      <div class="nu-email-box">
        <div class="hdr"><strong>To:</strong> [Primary Vendor Contact]</div>
        <div class="hdr"><strong>CC:</strong> [Secondary Vendor Contact per CC rule]</div>
        <div class="hdr"><strong>Subject:</strong> PO [Number] — Status Check &amp; Ship Date Confirmation</div>

        <div class="email-body">
          <p class="no-indent">[First Name] —</p>
          <p>Following up on PO [Number] issued [Date] for [line-item summary]. Order total $[Amount].</p>
          <p>Could you confirm the following, at your convenience:</p>
          <p class="no-indent" style="padding-left: 30px;">
            • Current production or packing status<br>
            • Firm ship date and carrier<br>
            • Tracking or BOL number if the order has shipped<br>
            • Any changes to line quantities, pricing, or freight
          </p>
          <p>I have a customer waiting on this delivery and want to give them an accurate ETA today. Appreciate y'all getting back to me.</p>
          <p class="no-indent">Sincerely,</p>
          <div class="sig-block">
            Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </div>
        </div>
      </div>
    </div>

    <!-- TWO COLUMN: RISKS + ESCALATION -->
    <div class="nu-two-col">
      <div class="nu-card">
        <div class="nu-badge">Watch For</div>
        <h3 class="nu-section-title">Common <span>slip points</span></h3>
        <ul class="nu-bullets">
          <li><strong>Silent delays.</strong> No news is not good news — if the vendor has not volunteered a status in 7+ days, assume slip.</li>
          <li><strong>Freight surprises.</strong> LTL carriers change hands; confirm final-mile carrier and accessorial charges.</li>
          <li><strong>Partial shipments.</strong> Ask explicitly: "Is this shipping complete, or partial?" Partial triggers a split invoice.</li>
          <li><strong>Price creep.</strong> If vendor cost moved, margin moved. Re-run Ben's Formula on shipping before re-quoting the customer.</li>
        </ul>
      </div>

      <div class="nu-card">
        <div class="nu-badge">Escalation Path</div>
        <h3 class="nu-section-title">If <span>no response in 48 hours</span></h3>
        <ul class="nu-bullets">
          <li><strong>Day 2:</strong> Call the primary contact directly. Do not send another email.</li>
          <li><strong>Day 3:</strong> Loop in the secondary contact on a new thread with a clear subject line.</li>
          <li><strong>Day 5:</strong> If still silent, escalate to the vendor owner or sales manager — and flag the deal in the Master Tracker as at-risk.</li>
          <li><strong>Every time:</strong> Log the outreach attempts in the tracker so the timeline is auditable.</li>
        </ul>
      </div>
    </div>

    <!-- CLOSE-OUT -->
    <div class="nu-action-block">
      <h4>Close-Out Rule</h4>
      <p>This action item stays open in the Master Tracker until three things are true: (1) vendor has confirmed a firm ship date in writing, (2) tracker reflects the updated ETA, and (3) if a customer order is tied to the PO, the customer has been notified. Only then mark this follow-up complete.</p>
    </div>

    <!-- CONTEXT -->
    <div class="nu-card" style="background: var(--nu-light-gray); border: 1px dashed #b5b5c4;">
      <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
        <span class="nu-pill open">Open Action</span>
        <span class="nu-pill action">reMarkable Capture</span>
      </div>
      <p style="font-size: 0.92rem; color: #5a5a6e;">Source: reMarkable action item, 2026-04-22. Routed through the Norris Utilities® Autonomous Build Engine and filed under internal action briefs. This document mirrors the printed Line Card design language for consistency across all internal and customer-facing materials.</p>
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