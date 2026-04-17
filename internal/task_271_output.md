<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Written Confirmation — Norris Utilities®</title>
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
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
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
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
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      font-family: 'Lato', serif;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* GHOST PHOENIX WATERMARK */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 60vh;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translate(-50%, 0);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PAGE TITLE */
    .page-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .page-kicker {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .page-kicker.urgent {
      background: var(--nu-warning);
    }
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-meta {
      font-size: 0.95rem;
      color: #666;
      margin-top: 10px;
    }
    .page-meta strong { color: var(--nu-dark-text); }

    /* SECTION */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .first-word { color: var(--nu-blue); }

    .section-block { margin-bottom: 40px; }

    /* ALERT CALLOUT */
    .alert-box {
      background: linear-gradient(135deg, #fff8ed 0%, #fff 100%);
      border-left: 6px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .alert-box .label {
      font-weight: 900;
      color: var(--nu-warning);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.8rem;
      margin-bottom: 8px;
    }
    .alert-box h3 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .alert-box p {
      font-size: 1rem;
      color: var(--nu-body-text);
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 10px; }
    .nu-card ul { margin-left: 20px; margin-bottom: 10px; }
    .nu-card li { margin-bottom: 8px; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      margin-left: 0;
      padding: 0;
    }
    .checklist li {
      position: relative;
      padding: 14px 16px 14px 52px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
      font-size: 1rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* SCRIPT BLOCK */
    .script-block {
      background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-blue);
      padding: 28px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
    .script-block .speaker {
      font-weight: 900;
      color: var(--nu-blue);
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }
    .script-block p {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      font-style: italic;
    }

    /* CONFIRMATION TABLE */
    .confirm-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      background: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .confirm-table th {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .confirm-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
      vertical-align: top;
    }
    .confirm-table tr:last-child td { border-bottom: none; }
    .confirm-table tr:nth-child(even) { background: var(--nu-light-gray); }
    .confirm-table td:first-child {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 34%;
    }

    /* CONTACT CARD */
    .contact-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .contact-card .col {
      padding: 24px;
    }
    .contact-card .col.left {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .contact-card .col.left h3 {
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .contact-card .col.left p {
      color: rgba(255,255,255,0.92);
      font-size: 0.95rem;
    }
    .contact-card .col.right h3 {
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .contact-card .col.right p {
      font-size: 0.95rem;
      margin-bottom: 6px;
    }

    /* WRITTEN EMAIL TEMPLATE */
    .email-template {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 20px;
      font-family: 'Lato', sans-serif;
    }
    .email-template .email-header {
      background: var(--nu-light-gray);
      padding: 14px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .email-template .email-header div { margin-bottom: 4px; }
    .email-template .email-header strong {
      display: inline-block;
      width: 70px;
      color: #666;
      font-weight: 700;
    }
    .email-template .email-body {
      padding: 22px 26px;
      font-size: 0.98rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .email-template .email-body p { margin-bottom: 12px; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
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
      line-height: 1.9;
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
      .nu-logo-subtitle { font-size: 0.85rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 22px; }
      .page-title { font-size: 1.7rem; }
      .contact-card { grid-template-columns: 1fr; }
      .confirm-table th, .confirm-table td { padding: 10px 12px; font-size: 0.9rem; }
      .confirm-table td:first-child { width: 40%; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .alert-box, .script-block { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- TITLE BLOCK -->
      <div class="page-title-block">
        <span class="page-kicker urgent">Pre-Closing Action Item</span>
        <h1 class="page-title">Call <span class="accent">H2O Waterproofing</span> Before Closing — Get Terms in Writing</h1>
        <div class="page-meta">
          <strong>Source:</strong> reMarkable action item &nbsp;|&nbsp;
          <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
          <strong>Generated:</strong> April 17, 2026 &nbsp;|&nbsp;
          <strong>Related:</strong> 4505 Butterworth estate acquisition
        </div>
      </div>

      <!-- ALERT -->
      <div class="alert-box">
        <div class="label">Why This Matters</div>
        <h3>Do not close until transfer terms, fees, and any remaining warranty coverage are confirmed in writing.</h3>
        <p>Verbal assurances from a vendor do not survive a closing. If H2O Waterproofing has an active warranty, service plan, or transfer process tied to the property, the written record is what makes it enforceable after the deed changes hands.</p>
      </div>

      <!-- CONTACT CARD -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Vendor</span> Contact</h2>
        <div class="contact-card">
          <div class="col left">
            <h3>H2O Waterproofing</h3>
            <p>Existing service vendor at the property. Transfer process and fees to be confirmed per prior reMarkable note.</p>
            <p style="margin-top: 14px; font-size: 0.85rem; opacity: 0.85;">Keep this call brief, direct, and get everything in writing afterward.</p>
          </div>
          <div class="col right">
            <h3>Call Objectives</h3>
            <p>1. Confirm any active warranty or service plan tied to the property</p>
            <p>2. Confirm the exact transfer process to the new owner</p>
            <p>3. Confirm any transfer fee amount and who pays it</p>
            <p>4. Request written confirmation via email before closing</p>
          </div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Pre-Closing</span> Checklist</h2>
        <ul class="checklist">
          <li><strong>Step 1:</strong> Call H2O Waterproofing. State you are the incoming owner of the Butterworth property and are finalizing closing.</li>
          <li><strong>Step 2:</strong> Confirm whether there is an active warranty, service contract, or service plan on the property.</li>
          <li><strong>Step 3:</strong> Ask the exact transfer process — what form, signature, or notice is required?</li>
          <li><strong>Step 4:</strong> Ask whether any transfer fee applies and the exact dollar amount.</li>
          <li><strong>Step 5:</strong> Ask for the remaining term, coverage scope, and any exclusions on the warranty.</li>
          <li><strong>Step 6:</strong> Request a written confirmation email summarizing all of the above — sent to acnorris@norrisutilities.com before closing.</li>
          <li><strong>Step 7:</strong> Save the emailed confirmation to the Butterworth closing file. Do not proceed to closing without it.</li>
        </ul>
      </div>

      <!-- PHONE SCRIPT -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Phone</span> Script</h2>
        <div class="script-block">
          <div class="speaker">Aaron — Opening</div>
          <p>"Hi — this is Aaron Norris. I'm the incoming owner of the property at 4505 Butterworth, and I'm closing on it shortly. I understand you all have an active arrangement at that address and I need to confirm a few items in writing before closing."</p>
        </div>
        <div class="script-block">
          <div class="speaker">Aaron — Questions</div>
          <p>"Can you confirm what's active on the property right now — warranty, service plan, or both? What's the remaining term, and what does the coverage include? What's your transfer process to the new owner, and is there a transfer fee? If so, what's the amount and who typically pays it?"</p>
        </div>
        <div class="script-block">
          <div class="speaker">Aaron — Close</div>
          <p>"Thank you. Could you send me an email summarizing everything we just discussed — coverage terms, transfer process, and any fees — to acnorris@norrisutilities.com? I need it in writing before we close. I appreciate it."</p>
        </div>
      </div>

      <!-- CONFIRMATION TABLE -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Items</span> to Capture in Writing</h2>
        <table class="confirm-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>What to Get Confirmed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active Coverage</td>
              <td>Is there a current warranty, service plan, or maintenance contract tied to 4505 Butterworth?</td>
            </tr>
            <tr>
              <td>Coverage Scope</td>
              <td>Exact work covered — foundation, basement, crawlspace, drainage, sump, other. Any exclusions?</td>
            </tr>
            <tr>
              <td>Remaining Term</td>
              <td>Start date, end date or duration, and whether it is transferable, renewable, or lifetime.</td>
            </tr>
            <tr>
              <td>Transfer Process</td>
              <td>Exact steps, forms, or signatures required to transfer coverage to the new owner.</td>
            </tr>
            <tr>
              <td>Transfer Fee</td>
              <td>Amount in dollars, who pays (buyer or seller), and whether it must be paid before or after closing.</td>
            </tr>
            <tr>
              <td>Prior Service History</td>
              <td>Any open tickets, scheduled returns, or unresolved service items on record.</td>
            </tr>
            <tr>
              <td>Written Confirmation</td>
              <td>Email to acnorris@norrisutilities.com summarizing all of the above on company letterhead or from a company address.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- EMAIL FOLLOW-UP TEMPLATE -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">Follow-Up</span> Email Template</h2>
        <p style="margin-bottom: 16px; color: var(--nu-body-text);">If the company prefers you to send the written request, use this template. Send immediately after the call.</p>
        <div class="email-template">
          <div class="email-header">
            <div><strong>To:</strong> H2O Waterproofing</div>
            <div><strong>From:</strong> acnorris@norrisutilities.com</div>
            <div><strong>Subject:</strong> 4505 Butterworth — Transfer Confirmation Request (Pre-Closing)</div>
          </div>
          <div class="email-body">
            <p>[Contact Name] —</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Thank you for taking my call today. As we discussed, I am the incoming owner of 4505 Butterworth and will be closing shortly. I need the following confirmed in writing before we close:</p>
            <p style="margin-left: 24px;">
              • Any active warranty, service plan, or contract tied to the property<br>
              • The coverage scope, remaining term, and any exclusions<br>
              • The exact transfer process to the new owner<br>
              • The transfer fee amount, if any, and who pays it<br>
              • Any open service items or unresolved tickets on record
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;A written response to this email is sufficient. I appreciate your help getting this on the record before closing.</p>
            <p>Sincerely,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities®, LLC<br>
            &nbsp;&nbsp;&nbsp;&nbsp;205-500-1343<br>
            &nbsp;&nbsp;&nbsp;&nbsp;acnorris@norrisutilities.com</p>
          </div>
        </div>
      </div>

      <!-- POST-CALL ACTIONS -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="first-word">After</span> the Call</h2>
        <div class="nu-card">
          <h3>Close the Loop</h3>
          <ul>
            <li>Save the confirmation email to the Butterworth closing folder.</li>
            <li>Forward a copy to the closing attorney and title agent so it is part of the closing record.</li>
            <li>If a transfer fee applies, add it to the closing settlement statement or budget it separately.</li>
            <li>Mark this reMarkable action item complete only after the written confirmation is in hand.</li>
            <li>Update the open-items tracker with the resolution and attach the confirmation email.</li>
          </ul>
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