<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow Up: Last PO for Inventory Order — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warning: #D97706;
      --nu-success: #059669;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
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
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.75em;
    }

    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
    }

    .nu-header-badge {
      display: inline-block;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--nu-white);
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-top: 18px;
      backdrop-filter: blur(6px);
    }

    /* ══ CHEVRON ══ */
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
      background: var(--nu-white);
      padding-bottom: 40px;
    }

    .nu-container {
      max-width: 960px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
      line-height: 1.15;
    }

    .nu-page-title .accent {
      color: var(--nu-blue);
    }

    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 8px;
    }

    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 18px;
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    .nu-meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-light-gray);
      padding: 6px 14px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      letter-spacing: 0.02em;
    }

    .nu-meta-chip.priority {
      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
      color: #92400E;
    }

    .nu-meta-chip.source {
      background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
      color: #1E3A8A;
    }

    .nu-meta-chip.status {
      background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
      color: #991B1B;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 40px 0 16px;
      letter-spacing: -0.01em;
    }

    .nu-section-title .first {
      color: var(--nu-blue);
    }

    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ACTION CARD ══ */
    .nu-action-card {
      background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }

    .nu-action-card h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .nu-action-card p {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }

    .nu-action-card p:last-child { margin-bottom: 0; }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nu-checklist li {
      position: relative;
      padding: 14px 16px 14px 48px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      font-size: 0.98rem;
      color: var(--nu-body-text);
      transition: all 0.2s ease;
    }

    .nu-checklist li:hover {
      border-color: var(--nu-blue);
      transform: translateX(2px);
      box-shadow: 0 2px 8px rgba(0,0,255,0.06);
    }

    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    .nu-checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ TWO-COLUMN GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
    }

    /* ══ INFO BOX ══ */
    .nu-info-box {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }

    .nu-info-box h4 {
      font-size: 0.75rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .nu-info-box p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }

    .nu-info-box ul {
      list-style: none;
      padding: 0;
    }

    .nu-info-box ul li {
      padding: 4px 0;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    .nu-info-box ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      margin-right: 10px;
    }

    /* ══ SCRIPT CARD ══ */
    .nu-script {
      background: var(--nu-navy);
      color: rgba(255,255,255,0.92);
      padding: 28px 32px;
      border-radius: 8px;
      font-family: 'Lato', sans-serif;
      font-size: 0.98rem;
      line-height: 1.75;
      position: relative;
      margin-bottom: 16px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.2);
    }

    .nu-script::before {
      content: 'SUGGESTED SCRIPT';
      position: absolute;
      top: -10px;
      left: 24px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      padding: 4px 12px;
      border-radius: 3px;
    }

    .nu-script p { margin-bottom: 10px; }
    .nu-script p:last-child { margin-bottom: 0; }
    .nu-script em { color: var(--nu-cyan); font-style: italic; }

    /* ══ CTA ROW ══ */
    .nu-cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 32px 0 12px;
    }

    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 30px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
    }

    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 14px 30px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      position: relative;
      padding-left: 28px;
      margin: 16px 0;
    }

    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(to bottom, var(--nu-blue), var(--nu-cyan));
    }

    .nu-timeline-item {
      position: relative;
      margin-bottom: 20px;
      padding-bottom: 4px;
    }

    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 14px;
      height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }

    .nu-timeline-item .label {
      font-size: 0.78rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .nu-timeline-item .content {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }

    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }

    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }

    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }

    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 48px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-grid-2 { grid-template-columns: 1fr; }
      .nu-action-card { padding: 22px 20px; }
      .nu-script { padding: 22px 20px; }
      .nu-cta-row { flex-direction: column; }
      .nu-btn-primary, .nu-btn-secondary { text-align: center; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-cta-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-header-badge">Action Item · Inventory</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span class="accent">Follow Up</span> on Last PO for Inventory Order</h1>
      <p class="nu-page-subtitle">reMarkable action item — logged for Aaron's next-step close-out.</p>

      <div class="nu-meta-row">
        <span class="nu-meta-chip source">Source: reMarkable</span>
        <span class="nu-meta-chip priority">Priority: High</span>
        <span class="nu-meta-chip status">Status: Open</span>
        <span class="nu-meta-chip">Owner: Aaron C. Norris</span>
        <span class="nu-meta-chip">Logged: 2026-04-24</span>
      </div>

      <!-- WHAT THIS IS -->
      <div class="nu-action-card">
        <h3>The Ask</h3>
        <p>Follow up on the last Purchase Order issued for the inventory order. Confirm vendor acknowledgment, production status, ship date, tracking, and any balance due. Close the loop so inventory can be reconciled and the PO marked complete.</p>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Follow-up</span> <span class="rest">Checklist</span></h2>
      <ul class="nu-checklist">
        <li><strong>1. Pull the PO from file.</strong> Locate the original PO number, line items, quantities, per-unit cost, and the date it was issued. Match against the vendor's acknowledgment email.</li>
        <li><strong>2. Confirm vendor received &amp; acknowledged.</strong> Verify the vendor has the PO on their production schedule and has not flagged any discrepancy (quantity, SKU, finish, ship-to).</li>
        <li><strong>3. Get the current production status.</strong> In-queue, in-process, complete, or ready to ship. Ask for a firm date — not a range.</li>
        <li><strong>4. Request tracking or pickup details.</strong> Carrier, tracking number, BOL, or pickup window. Forward to Caroline Butler (CB) for the receiving log.</li>
        <li><strong>5. Reconcile the invoice.</strong> Compare vendor invoice to the PO line-for-line. Flag any variance before approval to pay.</li>
        <li><strong>6. Update inventory records.</strong> Once received, update on-hand counts, mark the PO closed, and file the packing slip with the invoice.</li>
        <li><strong>7. Note any back-order or substitution.</strong> If anything shipped short or was substituted, log it and decide whether to re-order or let it ride.</li>
      </ul>

      <!-- KEY INFO -->
      <h2 class="nu-section-title"><span class="first">Key</span> <span class="rest">Information to Capture</span></h2>
      <div class="nu-grid-2">
        <div class="nu-info-box">
          <h4>From the Vendor</h4>
          <ul>
            <li>PO number referenced on their end</li>
            <li>Production / ship status</li>
            <li>Committed ship date</li>
            <li>Carrier &amp; tracking number</li>
            <li>Invoice number and amount</li>
          </ul>
        </div>
        <div class="nu-info-box">
          <h4>For Internal Records</h4>
          <ul>
            <li>Original PO date and total</li>
            <li>Items expected vs. confirmed</li>
            <li>Any changes to pricing or qty</li>
            <li>Receiving point of contact</li>
            <li>Payment terms &amp; due date</li>
          </ul>
        </div>
      </div>

      <!-- SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Follow-up</span> <span class="rest">Message — Email or Call</span></h2>
      <div class="nu-script">
        <p>Name —</p>
        <p>Following up on our last Purchase Order for inventory. Can you confirm the production status and ship date? I want to make sure we stay on schedule for the customers we have waiting.</p>
        <p>If it's already shipped, please send tracking. If the invoice has gone out, please resend so we can reconcile on our side.</p>
        <p>Appreciate y'all. Let me know what you need from me to keep this moving.</p>
        <p>Sincerely,<br><em>Aaron C. Norris</em></p>
      </div>

      <!-- TIMELINE -->
      <h2 class="nu-section-title"><span class="first">Close-Out</span> <span class="rest">Timeline</span></h2>
      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="label">Today</div>
          <div class="content">Send the follow-up email or make the call. Pull the PO from file before reaching out so the reference is in hand.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="label">Within 48 Hours</div>
          <div class="content">Expect vendor response with status and ship date. If silent, one phone call — do not let it drift into a second email chain.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="label">On Receipt</div>
          <div class="content">CB logs the shipment, matches packing slip to PO, flags any short-ship. Invoice enters AP queue.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="label">Close</div>
          <div class="content">PO marked complete in inventory records. Pay the invoice per terms. File packing slip and invoice together.</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="nu-cta-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Follow-Up%20%E2%80%94%20Inventory%20Order" class="nu-btn-primary">Draft Email Now</a>
        <a href="tel:2055001343" class="nu-btn-secondary">Call Aaron: 205-500-1343</a>
      </div>

      <div class="nu-action-card" style="border-left-color: var(--nu-cyan); margin-top: 32px;">
        <h3>Why This Matters</h3>
        <p>An open PO is working capital out the door with no resolution. Every day the PO sits unconfirmed is a day inventory planning, customer delivery promises, and cash reconciliation all move without clean data. Closing the loop on this PO keeps the books honest and the pipeline accurate.</p>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>