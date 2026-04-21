<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Inventory PO Follow-Up — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap');

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
      --nu-alert-red: #C73E1D;
      --nu-alert-amber: #E8A723;
      --nu-alert-green: #1F8A45;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-size: 1.35rem;
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
      background: var(--nu-white);
      min-height: 60vh;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      position: relative;
      z-index: 1;
    }

    /* ══ PAGE TITLE BLOCK ══ */
    .nu-page-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 18px;
      padding-bottom: 14px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-breadcrumb {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .nu-date-stamp {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-page-title span {
      color: var(--nu-blue);
    }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-bottom: 32px;
    }

    /* ══ ALERT BANNER ══ */
    .nu-alert-banner {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 32px;
    }
    .nu-alert-icon {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.8rem;
      color: var(--nu-alert-amber);
      background: var(--nu-white);
      border: 2px solid var(--nu-alert-amber);
      border-radius: 50%;
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .nu-alert-text {
      flex: 1;
    }
    .nu-alert-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .nu-alert-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    /* ══ SECTION HEADING ══ */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .nu-section-title .accent {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ ACTION CARD GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .nu-grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.09);
    }
    .nu-card-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-card-value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-card-note {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }

    /* ══ STATUS PILLS ══ */
    .nu-pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-pill-urgent {
      background: #fde4e0;
      color: var(--nu-alert-red);
    }
    .nu-pill-active {
      background: #fef3d7;
      color: #9a6f0e;
    }
    .nu-pill-ok {
      background: #def2e5;
      color: var(--nu-alert-green);
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist li:last-child {
      border-bottom: none;
    }
    .nu-checkbox {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
      position: relative;
    }
    .nu-check-content {
      flex: 1;
    }
    .nu-check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 3px;
    }
    .nu-check-sub {
      font-size: 0.88rem;
      color: var(--nu-body-text);
    }
    .nu-check-meta {
      font-size: 0.78rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-top: 4px;
    }

    /* ══ EMAIL DRAFT BLOCK ══ */
    .nu-draft-box {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      margin-top: 12px;
    }
    .nu-draft-header {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-draft-body {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
      white-space: pre-wrap;
    }

    /* ══ VENDOR TABLE ══ */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
    }
    .nu-table th {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
      color: var(--nu-dark-text);
    }
    .nu-table tr:nth-child(even) td {
      background: var(--nu-light-gray);
    }

    /* ══ CALLOUT BOX ══ */
    .nu-callout {
      background: linear-gradient(135deg, #eaf4ff 0%, #d9ebff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-callout-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-callout-body {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #000099 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.6;
    }
    .nu-footer-fineprint {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
      margin-top: 10px;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 20px 50px; }
      .nu-page-title { font-size: 1.5rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-alert-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
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
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-page-meta">
        <div class="nu-breadcrumb">Action Item &nbsp;·&nbsp; Inventory Operations</div>
        <div class="nu-date-stamp">Logged: April 21, 2026</div>
      </div>

      <h1 class="nu-page-title"><span>Follow Up</span> on Inventory Order from Last PO</h1>
      <p class="nu-page-subtitle">Anxiously waiting — source captured from reMarkable. Awaiting vendor ship confirmation and ETA to close the loop with customers holding against this stock.</p>

      <!-- STATUS BANNER -->
      <div class="nu-alert-banner">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-text">
          <div class="nu-alert-title">Action Required — Vendor Follow-Up Owed</div>
          <div class="nu-alert-body">This item originated from Aaron's reMarkable note. Until the last PO ships and an ETA is confirmed in writing, this stays on the open-items board and blocks downstream customer commitments.</div>
        </div>
      </div>

      <!-- SNAPSHOT CARDS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Current</span> <span class="rest">Status Snapshot</span></h2>
        <div class="nu-grid-3">
          <div class="nu-card">
            <div class="nu-card-label">Priority</div>
            <div class="nu-card-value"><span class="nu-pill nu-pill-urgent">Urgent</span></div>
            <div class="nu-card-note">Anxiously waiting — flagged on reMarkable</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Stage</div>
            <div class="nu-card-value"><span class="nu-pill nu-pill-active">Awaiting Vendor Reply</span></div>
            <div class="nu-card-note">PO placed — ship date not confirmed</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Owner</div>
            <div class="nu-card-value">Aaron C. Norris</div>
            <div class="nu-card-note">CB supports once ETA is confirmed</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Source</div>
            <div class="nu-card-value">reMarkable Note</div>
            <div class="nu-card-note">Captured April 21, 2026</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Next Check</div>
            <div class="nu-card-value">Within 24 Hours</div>
            <div class="nu-card-note">If no reply, escalate to secondary contact</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Impact</div>
            <div class="nu-card-value">Customer Commitments</div>
            <div class="nu-card-note">Orders staged against this inventory</div>
          </div>
        </div>
      </section>

      <!-- WHAT TO DO -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Steps</span> <span class="rest">to Close This Item</span></h2>
        <ul class="nu-checklist">
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Pull the last PO from QuickBooks and the vendor portal</div>
              <div class="nu-check-sub">Confirm PO number, line items, quantities, unit cost, and the ship-to address on file. Cross-check against the Norris Utilities® master tracker so the numbers match before the outreach goes out.</div>
              <div class="nu-check-meta">Prep · 10 minutes</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Identify the correct vendor contact and CC policy</div>
              <div class="nu-check-sub">BOSS Products → CC Troy Gongwer + Thayne Grove. Samson Rope → CC Donna Poll + Sarah Daniels. Skylift → Nick Gordon for pricing/specs, Andrew Jarmoszuk / Dale Williams / Nick Jarmoszuk Jr. for account matters. BSS → Andy Barron primary, Herb Minatre owner.</div>
              <div class="nu-check-meta">Contacts · 5 minutes</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Send the follow-up email (draft ready below)</div>
              <div class="nu-check-sub">Lead with the ask — a firm ship date and tracking number for the PO. Keep it warm, direct, and short. Apply Aaron's voice: "Name —" greeting, no filler, no apologies, close "Sincerely,".</div>
              <div class="nu-check-meta">Action · 5 minutes</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Log the outreach on the master tracker</div>
              <div class="nu-check-sub">Record date sent, vendor, PO referenced, contacts CC'd, and the promised reply-by date. This is what keeps the follow-up from slipping and gives CB the context she needs to take over.</div>
              <div class="nu-check-meta">Tracker · 3 minutes</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Escalate if no reply within 24 business hours</div>
              <div class="nu-check-sub">Call the primary contact directly at 205-500-1343's standard morning window. If still no reply, route up one level (owner / GM) using the CC list above. Document the escalation on the tracker in the same row.</div>
              <div class="nu-check-meta">Escalation · Conditional</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Notify any customers staged against this inventory</div>
              <div class="nu-check-sub">Once vendor ETA is confirmed, push the update to every customer holding against this PO. Use Aaron's voice; do not promise dates that aren't in writing from the vendor. CB handles the customer-facing send after Aaron reviews.</div>
              <div class="nu-check-meta">Downstream · 15 minutes</div>
            </div>
          </li>
          <li>
            <div class="nu-checkbox"></div>
            <div class="nu-check-content">
              <div class="nu-check-title">Close the reMarkable item and archive the thread</div>
              <div class="nu-check-sub">Mark the reMarkable note complete, move the vendor thread to the confirmed-shipped label in Gmail, and note the delivery window on the open-invoices page so invoicing does not slip once the stock lands.</div>
              <div class="nu-check-meta">Closeout · 2 minutes</div>
            </div>
          </li>
        </ul>
      </section>

      <!-- DRAFT EMAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Follow-Up</span> <span class="rest">Email Draft (Aaron's Voice)</span></h2>
        <div class="nu-callout">
          <div class="nu-callout-title">Before sending</div>
          <div class="nu-callout-body">Swap in the vendor's name, the actual PO number, and the ship-to reference. Keep the em dash greeting, keep it short, and do not add apologies. CC the full contact pair per the vendor's CC policy.</div>
        </div>
        <div class="nu-draft-box">
          <div class="nu-draft-header">Subject &nbsp;·&nbsp; Status Check — Last PO &nbsp;·&nbsp; Ship Date Request</div>
          <div class="nu-draft-body">Name —

    Checking in on the last PO we placed. We have customers staged against this stock and I'd like to give them a firm date.

    Could you confirm:

    • Ship date from your end
    • Carrier and tracking number once released
    • Any line items short-shipping or backordered

    Appreciate a reply today if at all possible. If anything has shifted on availability, I'd rather know now so we can plan around it.

    Sincerely,
    Aaron C. Norris
    Founder &amp; CEO — Norris Utilities®, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
        </div>
      </section>

      <!-- VENDOR ROUTING TABLE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Vendor</span> <span class="rest">Routing &amp; CC Policy</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Primary Contact</th>
                <th>Must CC</th>
                <th>Fallback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BOSS Products</td>
                <td>Troy Gongwer</td>
                <td>Thayne Grove (always)</td>
                <td>Call line direct</td>
              </tr>
              <tr>
                <td>Samson Rope</td>
                <td>Donna Poll</td>
                <td>Sarah Daniels (always)</td>
                <td>Distributor desk</td>
              </tr>
              <tr>
                <td>Skylift</td>
                <td>Nick Gordon (pricing / specs)</td>
                <td>Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr.</td>
                <td>Account lead on file</td>
              </tr>
              <tr>
                <td>Bay Shore Systems</td>
                <td>Andy Barron</td>
                <td>Herb Minatre (owner, escalation only)</td>
                <td>Andy mobile</td>
              </tr>
              <tr>
                <td>Irby Construction</td>
                <td>Jared Lemoine</td>
                <td>Internal ops only</td>
                <td>Email → phone after 24h</td>
              </tr>
              <tr>
                <td>FlexPro Armor (in-house run)</td>
                <td>Production lead</td>
                <td>CB for customer-facing</td>
                <td>Aaron direct</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- WHY IT MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Why</span> <span class="rest">This Item Matters</span></h2>
        <div class="nu-grid-2">
          <div class="nu-card">
            <div class="nu-card-label">Revenue Protection</div>
            <div class="nu-card-value">Customer Commitments</div>
            <div class="nu-card-note">Orders against this PO are revenue on the board. A silent vendor slip becomes a customer-facing slip within 48 hours if not caught now.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Trust &amp; Reputation</div>
            <div class="nu-card-value">"Legacy of Commitment®"</div>
            <div class="nu-card-note">Norris Utilities® wins on reliability. Proactive status updates — before the customer has to ask — are the standard on every deal.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Cash Flow</div>
            <div class="nu-card-value">Invoicing Window</div>
            <div class="nu-card-note">Stock landing = invoice sent same day per SOP. Every day the ship date slides is a day the receivable slides with it.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">Operational Discipline</div>
            <div class="nu-card-value">Open-Items Hygiene</div>
            <div class="nu-card-note">This item stays on the open-items board until the vendor confirms. Closing loops — not collecting them — is the measure of a clean week.</div>
          </div>
        </div>
      </section>

      <!-- FOLLOW-UP WINDOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Escalation</span> <span class="rest">Timeline</span></h2>
        <div class="nu-grid-3">
          <div class="nu-card">
            <div class="nu-card-label">T + 0 Hours</div>
            <div class="nu-card-value">Email Sent</div>
            <div class="nu-card-note">Primary + full CC list per vendor policy. Logged on master tracker.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">T + 24 Hours</div>
            <div class="nu-card-value">Phone Follow-Up</div>
            <div class="nu-card-note">Call the primary. Document the call note on the same tracker row.</div>
          </div>
          <div class="nu-card">
            <div class="nu-card-label">T + 48 Hours</div>
            <div class="nu-card-value">Escalate Upward</div>
            <div class="nu-card-note">Loop in the owner / GM using the vendor's published escalation path.</div>
          </div>
        </div>
      </section>

      <!-- REPORT BACK -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Report</span> <span class="rest">Card — Close This Item</span></h2>
        <div class="nu-callout">
          <div class="nu-callout-title">Definition of Done</div>
          <div class="nu-callout-body">
            ✅ Vendor has confirmed a ship date in writing.<br>
            ✅ Tracking number recorded on the master tracker and the open-invoices page.<br>
            ✅ Every affected customer has received the updated ETA in Aaron's voice after his review.<br>
            ✅ reMarkable source note marked complete and the Gmail thread labeled <em>confirmed-shipped</em>.<br>
            ✅ This page is archived to <strong>/internal/archive/</strong> once all four lines above are green.
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-fineprint">130 Inverness Plaza #210 &nbsp;·&nbsp; Birmingham, Alabama 35242 &nbsp;·&nbsp; Founded November 2021</div>
    <div class="nu-footer-fineprint">Third-Generation Utility Equipment Dealer &amp; Distributor &nbsp;·&nbsp; Phoenix Icon®</div>
  </footer>

</body>
</html>