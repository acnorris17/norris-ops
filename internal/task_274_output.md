<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PO Follow-Up Action — Norris Utilities®</title>
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
      --nu-alert-red: #C91F1F;
      --nu-alert-amber: #E89B0A;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

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

    /* ══ DOCUMENT META BAR ══ */
    .nu-doc-meta {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 16px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.85rem;
    }
    .nu-doc-meta .meta-label {
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      font-size: 0.75rem;
      margin-right: 6px;
    }
    .nu-doc-meta .meta-value {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .status-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: var(--nu-alert-amber);
      color: var(--nu-white);
    }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 40px 60px;
    }

    /* ══ ACTION BANNER ══ */
    .action-banner {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 6px 20px rgba(0, 0, 255, 0.15);
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .action-banner .action-icon {
      font-size: 2.5rem;
      line-height: 1;
      font-weight: 900;
      color: var(--nu-cyan);
      flex-shrink: 0;
    }
    .action-banner .action-text h1 {
      font-weight: 900;
      font-size: 1.5rem;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    .action-banner .action-text p {
      font-weight: 400;
      font-size: 0.95rem;
      opacity: 0.95;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      margin-top: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-divider {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 24px;
      border-radius: 2px;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .nu-card.accent-left {
      border-left: 4px solid var(--nu-blue);
    }
    .nu-card.accent-amber {
      border-left: 4px solid var(--nu-alert-amber);
      background: #FFFBF0;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ DETAIL GRID ══ */
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 28px;
    }
    .detail-cell {
      background: var(--nu-light-gray);
      padding: 16px 18px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .detail-cell .detail-label {
      display: block;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #777;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .detail-cell .detail-value {
      display: block;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ STEP LIST ══ */
    .step-list {
      counter-reset: step;
      list-style: none;
      padding: 0;
      margin-bottom: 28px;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 18px 16px 64px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 14px;
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
      color: var(--nu-dark-text);
      font-weight: 900;
      display: block;
      margin-bottom: 4px;
      font-size: 1rem;
    }

    /* ══ EMAIL DRAFT ══ */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .email-draft .email-header-line {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      padding-bottom: 12px;
      margin-bottom: 16px;
      border-bottom: 1px dashed #ccc;
      color: #666;
    }
    .email-draft .email-header-line strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .email-draft p {
      margin-bottom: 14px;
      padding-left: 12px;
    }
    .email-draft .sig {
      margin-top: 20px;
      padding-left: 12px;
      font-family: var(--font-primary);
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--nu-body-text);
    }
    .email-draft .sig strong {
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ══ CHECK LIST ══ */
    .check-list {
      list-style: none;
      padding: 0;
    }
    .check-list li {
      padding: 10px 10px 10px 36px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .check-list li::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 13px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .check-list li:last-child { border-bottom: none; }

    /* ══ NOTE BOX ══ */
    .note-box {
      background: #F0F7FF;
      border: 1px solid #CFE3FF;
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 24px;
      font-size: 0.92rem;
      color: var(--nu-dark-text);
    }
    .note-box strong {
      color: var(--nu-blue);
      font-weight: 900;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 6px;
    }

    /* ══ FOOTER ══ */
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
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
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
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 32px 20px 40px; }
      .nu-doc-meta { padding: 14px 20px; }
      .action-banner { flex-direction: column; text-align: center; padding: 22px; }
      .action-banner .action-text h1 { font-size: 1.2rem; }
      .email-draft { padding: 18px 20px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .email-draft { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

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

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <div class="nu-doc-meta">
    <div>
      <span class="meta-label">Action Item</span>
      <span class="meta-value">PO Follow-Up — Inventory Status</span>
    </div>
    <div>
      <span class="meta-label">Date</span>
      <span class="meta-value">April 21, 2026</span>
    </div>
    <div>
      <span class="meta-label">Owner</span>
      <span class="meta-value">Aaron C. Norris</span>
    </div>
    <div>
      <span class="meta-label">Status</span>
      <span class="status-pill">Awaiting Inventory</span>
    </div>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="action-banner">
        <div class="action-icon">!</div>
        <div class="action-text">
          <h1>Follow Up on Last PO — Inventory Pending</h1>
          <p>reMarkable action item captured. Anxiously waiting on inventory to fulfill the open purchase order. Contact supplier today for ETA and commit-date confirmation.</p>
        </div>
      </div>

      <h2 class="nu-section-title">Action <span>Summary</span></h2>
      <div class="nu-section-divider"></div>

      <div class="nu-card accent-left">
        <h3>What This Is</h3>
        <p>This action item surfaced on the reMarkable: we have an outstanding purchase order from a recent shipment, and the inventory required to close out delivery has not yet arrived. The customer is waiting, we are waiting on the supplier, and the clock on this is ticking. We need supplier confirmation of ETA before end of day.</p>
      </div>

      <div class="nu-card accent-amber">
        <h3>Why It Matters</h3>
        <p>Open POs with missing inventory compound quickly. Norris Utilities® has built its reputation on delivery certainty — "A Legacy of Commitment®" is not just a tagline. Every day of silence on a pending order erodes customer trust and stalls the invoice cycle. This needs a real answer, not a vague "soon."</p>
      </div>

      <h2 class="nu-section-title">PO <span>Details to Confirm</span></h2>
      <div class="nu-section-divider"></div>

      <div class="detail-grid">
        <div class="detail-cell">
          <span class="detail-label">PO Number</span>
          <span class="detail-value">Confirm with supplier on contact</span>
        </div>
        <div class="detail-cell">
          <span class="detail-label">Original Order Date</span>
          <span class="detail-value">Last PO cycle — pull from QB</span>
        </div>
        <div class="detail-cell">
          <span class="detail-label">Product Line</span>
          <span class="detail-value">Verify SKU on PO copy</span>
        </div>
        <div class="detail-cell">
          <span class="detail-label">Quantity Outstanding</span>
          <span class="detail-value">Full shipment pending</span>
        </div>
        <div class="detail-cell">
          <span class="detail-label">Target Delivery</span>
          <span class="detail-value">Needed to invoice customer</span>
        </div>
        <div class="detail-cell">
          <span class="detail-label">Customer Status</span>
          <span class="detail-value">Expecting update</span>
        </div>
      </div>

      <div class="note-box">
        <strong>Before You Call</strong>
        Pull the open PO from QuickBooks. Confirm the PO number, original order date, SKU, quantity, and the original committed ship date. Have the supplier's quote reference open as well — it anchors the conversation and prevents "let me get back to you."
      </div>

      <h2 class="nu-section-title">Execution <span>Steps</span></h2>
      <div class="nu-section-divider"></div>

      <ol class="step-list">
        <li>
          <strong>Pull the PO file (5 minutes)</strong>
          Open QuickBooks → Purchase Orders → find the last open PO. Print the PDF or keep it on screen. Capture PO #, SKU, qty, and original committed ship date.
        </li>
        <li>
          <strong>Call the supplier directly (10 minutes)</strong>
          Phone call first, then email confirmation. Ask three questions: (1) Where is our inventory right now? (2) What is the firm ship date? (3) Can you send tracking as soon as it goes out?
        </li>
        <li>
          <strong>Send the written follow-up email (5 minutes)</strong>
          Use the draft below. This creates a paper trail and gives the supplier something in writing to reference internally.
        </li>
        <li>
          <strong>Update the customer (5 minutes)</strong>
          Once the supplier gives a firm date, send a short note to the waiting customer: "Inventory clears [date], we'll ship and invoice within 24 hours of receipt." No surprises.
        </li>
        <li>
          <strong>Log the update in the Master Tracker</strong>
          Record supplier commit date, customer notification date, and set a calendar reminder for the expected ship date. If it slips again, escalate immediately.
        </li>
      </ol>

      <h2 class="nu-section-title">Email <span>Draft — Ready to Send</span></h2>
      <div class="nu-section-divider"></div>

      <div class="email-draft">
        <div class="email-header-line">
          <strong>To:</strong> [Supplier primary contact]<br>
          <strong>CC:</strong> [Secondary contact — always CC both where applicable]<br>
          <strong>Subject:</strong> Status Check — Open PO, Inventory Pending
        </div>

        <p>[Name] —</p>

        <p>Checking in on our last PO. The inventory has not arrived yet, and I have a customer anxiously waiting on delivery. I need to give them a firm date by end of day.</p>

        <p>Can you confirm the following:</p>

        <p>
          • Current status of our shipment — warehouse, in transit, or still on order<br>
          • Firm ship date from your facility<br>
          • Tracking number as soon as it moves
        </p>

        <p>I want to honor our commitment to the customer. A quick call or reply today would be advantageous. Happy to jump on the phone — 205-500-1343.</p>

        <p>Appreciate y'all getting on this quickly.</p>

        <p>Sincerely,</p>

        <div class="sig">
          <strong>Aaron C. Norris</strong><br>
          Founder &amp; CEO<br>
          Norris Utilities®, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </div>
      </div>

      <h2 class="nu-section-title">Follow-Up <span>Checklist</span></h2>
      <div class="nu-section-divider"></div>

      <ul class="check-list">
        <li>PO pulled from QuickBooks — PO #, SKU, qty, original ship date captured</li>
        <li>Supplier called — spoke to primary contact (not voicemail)</li>
        <li>Firm ship date obtained and written down</li>
        <li>Tracking requested — will be forwarded on ship</li>
        <li>Written follow-up email sent with supplier CC'd</li>
        <li>Customer notified with new committed date</li>
        <li>Master Tracker updated — status changed from "Awaiting Inventory" to "Ship Date Confirmed"</li>
        <li>Calendar reminder set for expected arrival date</li>
        <li>Escalation trigger logged: if date slips again, move to supplier management escalation</li>
      </ul>

      <div class="note-box" style="margin-top: 28px;">
        <strong>Aaron's Standing Rule</strong>
        "Ship dates are promises. We don't forward vague supplier answers to customers — we get the real date, own it, and communicate it clearly. If the supplier cannot commit to a date, that itself is the update worth sending."
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>