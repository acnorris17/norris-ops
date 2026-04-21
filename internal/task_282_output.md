<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory Order Follow-Up — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-alert-amber: #E89611;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ WHITE CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      background: transparent;
    }
    .nu-chevron svg {
      width: 100%;
      height: 50px;
      display: block;
    }

    /* ══ CONTENT WRAPPER ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ══ STATUS BAR ══ */
    .nu-status-bar {
      background: linear-gradient(135deg, #fff8e1 0%, #fff3d6 100%);
      border-left: 5px solid var(--nu-alert-amber);
      border-radius: 6px;
      padding: 18px 24px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .nu-status-label {
      font-weight: 900;
      color: var(--nu-alert-amber);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.85rem;
    }
    .nu-status-text {
      color: var(--nu-dark-text);
      font-weight: 700;
      font-size: 1rem;
    }
    .nu-status-date {
      margin-left: auto;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .nu-page-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
      font-weight: 400;
      max-width: 720px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.45rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
      display: inline-block;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    .nu-section {
      margin-bottom: 44px;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .nu-card-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card-body {
      font-size: 0.97rem;
      color: var(--nu-body-text);
    }
    .nu-card-body p { margin-bottom: 10px; }
    .nu-card-body strong { color: var(--nu-dark-text); }

    /* ══ ACTION LIST ══ */
    .nu-action-list {
      list-style: none;
      counter-reset: step;
    }
    .nu-action-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 20px 18px 72px;
      margin-bottom: 14px;
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.05);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .nu-action-list li:hover {
      transform: translateX(2px);
      box-shadow: 0 3px 12px rgba(0,0,0,0.09);
    }
    .nu-action-list li::before {
      content: counter(step);
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-action-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .nu-action-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ EMAIL DRAFT BOX ══ */
    .nu-email-draft {
      background: #fafafb;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      position: relative;
    }
    .nu-email-draft::before {
      content: 'DRAFT';
      position: absolute;
      top: 14px;
      right: 18px;
      font-family: var(--font-primary);
      font-size: 0.7rem;
      font-weight: 900;
      color: var(--nu-cyan);
      letter-spacing: 0.18em;
      background: var(--nu-navy);
      padding: 4px 10px;
      border-radius: 3px;
    }
    .nu-email-meta {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-bottom: 20px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-meta strong {
      color: var(--nu-dark-text);
      display: inline-block;
      width: 72px;
    }
    .nu-email-body p {
      margin-bottom: 14px;
      padding-left: 24px;
    }
    .nu-email-body .greeting {
      padding-left: 0;
      margin-bottom: 16px;
    }
    .nu-email-body .closing {
      padding-left: 0;
      margin-top: 20px;
    }
    .nu-email-body .signature {
      padding-left: 24px;
      margin-top: 4px;
      color: var(--nu-body-text);
      font-size: 0.92rem;
    }
    .nu-email-body ul {
      padding-left: 48px;
      margin-bottom: 14px;
      list-style: none;
    }
    .nu-email-body ul li {
      position: relative;
      margin-bottom: 6px;
    }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: -16px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ INFO GRID ══ */
    .nu-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 14px;
    }
    .nu-info-cell {
      background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
      border-radius: 6px;
      padding: 16px 18px;
      border-left: 3px solid var(--nu-blue);
    }
    .nu-info-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }
    .nu-info-value {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-info-value.empty {
      color: #888;
      font-weight: 400;
      font-style: italic;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
    }
    .nu-checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-dark-text);
      font-size: 0.96rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 14px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }

    /* ══ BUTTONS ══ */
    .nu-btn-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 13px 28px;
      border: none;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 11px 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 30px 20px 40px; }
      .nu-page-title { font-size: 1.75rem; }
      .nu-email-draft { padding: 20px 20px; }
      .nu-email-body p,
      .nu-email-body .signature,
      .nu-email-body ul { padding-left: 12px; }
      .nu-status-date { margin-left: 0; width: 100%; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-action-list li { break-inside: avoid; }
      .nu-email-draft { break-inside: avoid; }
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

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- STATUS BAR -->
      <div class="nu-status-bar">
        <span class="nu-status-label">● Action Required</span>
        <span class="nu-status-text">Inventory follow-up overdue — anxiously awaiting supplier response</span>
        <span class="nu-status-date">Logged: 2026-04-21</span>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">Inventory Order <span>Follow-Up</span></h1>
      <p class="nu-page-subtitle">
        Open action item captured from reMarkable notes: follow up on inventory ordered against the last purchase order.
        Aaron is anxiously awaiting confirmation of ship date and tracking. This page holds the action steps, draft
        outreach, and a space to record the response once received.
      </p>

      <!-- SECTION: ORDER SNAPSHOT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Order <span>Snapshot</span></h2>
        <div class="nu-info-grid">
          <div class="nu-info-cell">
            <div class="nu-info-label">PO Reference</div>
            <div class="nu-info-value empty">Confirm PO # from records</div>
          </div>
          <div class="nu-info-cell">
            <div class="nu-info-label">Supplier</div>
            <div class="nu-info-value empty">Confirm vendor on last PO</div>
          </div>
          <div class="nu-info-cell">
            <div class="nu-info-label">Order Status</div>
            <div class="nu-info-value">Awaiting shipment confirmation</div>
          </div>
          <div class="nu-info-cell">
            <div class="nu-info-label">Priority</div>
            <div class="nu-info-value">High — inventory hold</div>
          </div>
          <div class="nu-info-cell">
            <div class="nu-info-label">Captured From</div>
            <div class="nu-info-value">reMarkable notes</div>
          </div>
          <div class="nu-info-cell">
            <div class="nu-info-label">Owner</div>
            <div class="nu-info-value">Aaron C. Norris</div>
          </div>
        </div>
      </section>

      <!-- SECTION: ACTION PLAN -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan</span></h2>
        <ol class="nu-action-list">
          <li>
            <div class="nu-action-title">Pull the last PO from QuickBooks</div>
            <div class="nu-action-detail">Confirm PO number, line items, quantities, unit costs, and order date so the follow-up references exact numbers.</div>
          </li>
          <li>
            <div class="nu-action-title">Check inbox for any prior supplier reply</div>
            <div class="nu-action-detail">Search acnorris@norrisutilities.com and CB's folder for any ship-date confirmation or tracking already received but not filed.</div>
          </li>
          <li>
            <div class="nu-action-title">Send follow-up email to the supplier</div>
            <div class="nu-action-detail">Use the draft below. Keep tone direct and warm — ask for ship date, tracking, and any delays known.</div>
          </li>
          <li>
            <div class="nu-action-title">Place a confirming phone call</div>
            <div class="nu-action-detail">If no email reply within one business day, call the supplier rep directly. Leave voicemail with callback number 205-500-1343 if needed.</div>
          </li>
          <li>
            <div class="nu-action-title">Update master_tracker with status</div>
            <div class="nu-action-detail">Record reply (ship date, tracking, delay reason) so the open-item does not stay live in reMarkable.</div>
          </li>
          <li>
            <div class="nu-action-title">Close the reMarkable action item</div>
            <div class="nu-action-detail">Once confirmation is in hand and the tracker is updated, mark this item resolved in the reMarkable action log.</div>
          </li>
        </ol>
      </section>

      <!-- SECTION: DRAFT EMAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title">Supplier <span>Follow-Up Email</span></h2>
        <div class="nu-email-draft">
          <div class="nu-email-meta">
            <div><strong>To:</strong> Supplier primary contact</div>
            <div><strong>CC:</strong> Secondary contact (if two-contact account — see contact rules)</div>
            <div><strong>Subject:</strong> Follow-Up — Last PO, Ship Date &amp; Tracking Request</div>
          </div>
          <div class="nu-email-body">
            <p class="greeting">Name —</p>
            <p>I wanted to follow up on the inventory order tied to our most recent PO with y'all.</p>
            <p>We are anxiously waiting on this shipment so we can fulfill what is already committed on our side. I would appreciate confirmation on the following:</p>
            <ul>
              <li>Confirmed ship date out of your facility</li>
              <li>Carrier and tracking number once generated</li>
              <li>Any known delays, short-ships, or substitutions on the order</li>
            </ul>
            <p>If there is anything on our end holding this up — open balance, paperwork, or missing information — please let me know today and we will get it resolved immediately.</p>
            <p>Appreciate your help getting this moving. Looking forward to earning more of this business going forward.</p>
            <p class="closing">Sincerely,</p>
            <p class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>
        </div>
        <div class="nu-btn-row">
          <a href="mailto:?subject=Follow-Up%20%E2%80%94%20Last%20PO%2C%20Ship%20Date%20%26%20Tracking%20Request" class="nu-btn-primary">Open in Email</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call Supplier</a>
        </div>
      </section>

      <!-- SECTION: RESPONSE LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title">Response <span>Log</span></h2>
        <div class="nu-card">
          <div class="nu-card-title">Record supplier reply here</div>
          <div class="nu-card-body">
            <p><strong>Date contacted:</strong> ________________________</p>
            <p><strong>Method:</strong> ☐ Email &nbsp; ☐ Phone &nbsp; ☐ Text</p>
            <p><strong>Confirmed ship date:</strong> ________________________</p>
            <p><strong>Carrier &amp; tracking:</strong> ________________________</p>
            <p><strong>Notes / delays / partials:</strong> ________________________</p>
            <p><strong>Next check-in:</strong> ________________________</p>
          </div>
        </div>
      </section>

      <!-- SECTION: CLOSE-OUT CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Close-Out <span>Checklist</span></h2>
        <ul class="nu-checklist">
          <li>Last PO details pulled and confirmed</li>
          <li>Follow-up email sent to supplier</li>
          <li>Phone call placed if no reply within one business day</li>
          <li>Ship date and tracking confirmed in writing</li>
          <li>master_tracker updated with status and ship date</li>
          <li>Customer(s) downstream notified of delivery window</li>
          <li>reMarkable action item marked resolved</li>
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