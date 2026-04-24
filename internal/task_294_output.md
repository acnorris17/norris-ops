<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bucket Cover Modification & Return Shipment — Norris Utilities®</title>
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
      --nu-success-green: #2E8540;
      --nu-warn-amber: #B8860B;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 2px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
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
      top: 15%; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* SECTION HEADINGS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      margin-top: 36px;
      line-height: 1.2;
    }
    .nu-section-title .accent { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-top: 10px;
    }

    /* ACTION BANNER */
    .nu-action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 24px 28px;
      border-left: 6px solid var(--nu-cyan);
      border-radius: 4px;
      margin-bottom: 30px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .nu-action-banner .label {
      display: inline-block;
      font-size: 0.75rem;
      letter-spacing: 0.22em;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 8px;
    }
    .nu-action-banner h2 {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-white);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .nu-action-banner p {
      font-size: 1rem;
      line-height: 1.55;
      color: rgba(255,255,255,0.9);
    }

    /* KEY FACTS GRID */
    .nu-facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 10px;
    }
    .nu-fact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-fact-card .key {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 700;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-fact-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .nu-fact-card.cyan { border-left-color: var(--nu-cyan); }
    .nu-fact-card.cyan .key { color: #007a99; }

    /* STATUS PILL */
    .nu-status-pill {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      margin-left: 8px;
    }
    .nu-status-pill.open { background: rgba(184, 134, 11, 0.12); color: #8a6508; border: 1px solid rgba(184,134,11,0.35); }
    .nu-status-pill.ok { background: rgba(46, 133, 64, 0.12); color: var(--nu-success-green); border: 1px solid rgba(46,133,64,0.35); }

    /* WORKFLOW STEPS */
    .nu-steps {
      list-style: none;
      counter-reset: step;
      padding: 0;
      margin: 0 0 20px 0;
    }
    .nu-steps li {
      counter-increment: step;
      position: relative;
      padding: 18px 20px 18px 70px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .nu-steps li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,51,204,0.25);
    }
    .nu-steps li .step-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-steps li .step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* POLICY CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border: 1px solid rgba(0,51,204,0.18);
      border-radius: 8px;
      padding: 24px 28px;
      margin: 24px 0;
      position: relative;
    }
    .nu-callout::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
      border-radius: 8px 0 0 8px;
    }
    .nu-callout .callout-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 10px;
    }
    .nu-callout p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
      margin-bottom: 8px;
    }
    .nu-callout p:last-child { margin-bottom: 0; }
    .nu-callout strong { color: var(--nu-navy); font-weight: 900; }

    /* TWO-COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    .nu-col-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-col-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: #0033cc;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-col-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-col-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }
    .nu-col-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      top: 8px;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* TABLE */
    .nu-table-wrap {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      margin-bottom: 24px;
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-table tbody td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      color: var(--nu-body-text);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table td.label { font-weight: 700; color: var(--nu-dark-text); width: 34%; }

    /* SIGNOFF */
    .nu-signoff {
      margin-top: 36px;
      padding: 24px 28px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.6;
    }
    .nu-signoff .sig-name {
      display: block;
      margin-top: 12px;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 20px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
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
      .nu-container { padding: 36px 20px 40px; }
      .nu-section-title { font-size: 1.25rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-action-banner h2 { font-size: 1.2rem; }
      .nu-steps li { padding: 16px 16px 16px 60px; }
      .nu-steps li::before { width: 32px; height: 32px; left: 14px; font-size: 0.9rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-col-card, .nu-fact-card, .nu-steps li, .nu-table-wrap { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Sheet</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <span class="label">reMarkable Action Item</span>
        <h2>Modify the bucket cover and ship back — do not charge again.</h2>
        <p>Customer cover returning to Norris Utilities® for modification. Rework performed at no cost. Return shipment billed at $0.00. Original invoice stays in place; no new invoice is issued for this service.</p>
      </div>

      <!-- KEY FACTS -->
      <h2 class="nu-section-title"><span class="accent">Key</span> <span class="rest">Facts <span class="nu-status-pill open">Open</span></span></h2>
      <div class="nu-facts-grid">
        <div class="nu-fact-card">
          <div class="key">Item</div>
          <div class="value">FlexPro Armor Bucket Cover</div>
        </div>
        <div class="nu-fact-card cyan">
          <div class="key">Action</div>
          <div class="value">Modify &amp; Return</div>
        </div>
        <div class="nu-fact-card">
          <div class="key">Billing</div>
          <div class="value">Do Not Charge Again</div>
        </div>
        <div class="nu-fact-card cyan">
          <div class="key">Owner</div>
          <div class="value">Aaron C. Norris</div>
        </div>
      </div>

      <!-- POLICY CALLOUT -->
      <div class="nu-callout">
        <span class="callout-label">Billing Policy — No Re-Charge</span>
        <p><strong>Original sale stands.</strong> The customer has already been invoiced and paid (or is scheduled to pay) for this bucket cover. The modification is a warranty-style rework.</p>
        <p><strong>No second invoice.</strong> Do not create a new QuickBooks invoice for the rework, the materials, or the return shipping. This work is absorbed by Norris Utilities®.</p>
        <p><strong>Return freight:</strong> prepaid by Norris Utilities®. Use the outbound UPS account. Shipping cost is an internal expense, not a customer line item.</p>
      </div>

      <!-- WORKFLOW -->
      <h2 class="nu-section-title"><span class="accent">Workflow</span> <span class="rest">— Modification &amp; Return</span></h2>
      <ol class="nu-steps">
        <li>
          <div class="step-title">Receive Inbound Cover</div>
          <div class="step-detail">Confirm receipt at the shop. Photograph the cover as-received (all four sides plus interior). Log inbound tracking in the master tracker under the existing order row — do not create a new row.</div>
        </li>
        <li>
          <div class="step-title">Verify Customer &amp; Original Invoice</div>
          <div class="step-detail">Match the cover to the customer, original purchase order, and QuickBooks invoice number. Note the SKU (NU-BC-2851 or NU-BC-2834) and confirm the modification scope before any stitching or cutting begins.</div>
        </li>
        <li>
          <div class="step-title">Perform Modification</div>
          <div class="step-detail">Complete the handmade rework per the customer's requested fit change. Quality-check against the original pattern and the new dimensions. Photograph the completed modification before boxing.</div>
        </li>
        <li>
          <div class="step-title">Box &amp; Ship Back — Prepaid</div>
          <div class="step-detail">Ship back on Norris Utilities® account. Return shipping is <strong>not</strong> billed to the customer. Insert a packing slip marked &ldquo;Warranty Rework — No Charge.&rdquo; Email the customer the return tracking number the same day it ships.</div>
        </li>
        <li>
          <div class="step-title">Close the Loop in QuickBooks</div>
          <div class="step-detail">Do <strong>not</strong> issue a new invoice. Do <strong>not</strong> open a credit memo unless the original was already paid and a refund is required — in this case, no refund is due. Add an internal note on the original invoice: &ldquo;Modified &amp; returned [date] at no charge per Aaron.&rdquo;</div>
        </li>
        <li>
          <div class="step-title">Record in Master Tracker</div>
          <div class="step-detail">Mark the existing tracker row: Status = &ldquo;Modified &amp; returned — no charge.&rdquo; Add the outbound return tracking number. Close the reMarkable action item once the customer confirms receipt.</div>
        </li>
      </ol>

      <!-- TWO-COLUMN: DO / DON'T -->
      <div class="nu-two-col">
        <div class="nu-col-card">
          <h3>Do</h3>
          <ul>
            <li>Treat this as a warranty-style rework — absorb cost, preserve the relationship.</li>
            <li>Photograph the cover before and after modification for the internal file.</li>
            <li>Ship back prepaid on the Norris Utilities® UPS account.</li>
            <li>Email the customer a short confirmation with the return tracking number.</li>
            <li>Update the original tracker row and the original QuickBooks invoice note field.</li>
            <li>Confirm delivery once UPS posts &ldquo;Delivered,&rdquo; then close the action item.</li>
          </ul>
        </div>
        <div class="nu-col-card">
          <h3>Do Not</h3>
          <ul>
            <li>Do not create a new QuickBooks invoice for the modification.</li>
            <li>Do not charge the customer for materials, labor, or return shipping.</li>
            <li>Do not bill the customer&rsquo;s UPS account or request a return label from them.</li>
            <li>Do not open a new tracker row — update the existing order row only.</li>
            <li>Do not apply the Samson Rope or FlexPro Armor margin formulas to this job.</li>
            <li>Do not mark the original invoice as void — it remains valid and paid.</li>
          </ul>
        </div>
      </div>

      <!-- REFERENCE TABLE -->
      <h2 class="nu-section-title"><span class="accent">Reference</span> <span class="rest">— Cover SKU Sizing</span></h2>
      <div class="nu-table-wrap">
        <table class="nu-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Description</th>
              <th>Dimensions</th>
              <th>Competitor Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label">NU-BC-2851</td>
              <td>FlexPro Armor — 2-Man Bucket Cover</td>
              <td>28&quot; × 51&quot;</td>
              <td>&ldquo;24×48&rdquo; on competitor sheets</td>
            </tr>
            <tr>
              <td class="label">NU-BC-2834</td>
              <td>FlexPro Armor — 1.5-Man Bucket Cover</td>
              <td>28&quot; × 34&quot;</td>
              <td>&ldquo;24×34&rdquo; on competitor sheets</td>
            </tr>
            <tr>
              <td class="label">NU-BC-2851-C</td>
              <td>FlexPro Armor — 2-Man Combo</td>
              <td>28&quot; × 51&quot; + liner</td>
              <td>—</td>
            </tr>
            <tr>
              <td class="label">NU-BC-2834-C</td>
              <td>FlexPro Armor — 1.5-Man Combo</td>
              <td>28&quot; × 34&quot; + liner</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- CUSTOMER-FACING LANGUAGE -->
      <h2 class="nu-section-title"><span class="accent">Customer</span> <span class="rest">Email — Send When It Ships</span></h2>
      <div class="nu-col-card" style="border-left: 4px solid var(--nu-blue);">
        <p style="margin-bottom: 12px;"><strong>Subject:</strong> Your modified bucket cover is on the way — no additional charge</p>
        <p style="margin-bottom: 10px;">Name —</p>
        <p style="margin-bottom: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;Your bucket cover has been modified and is shipping back to you today. UPS tracking: [tracking number].</p>
        <p style="margin-bottom: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;There is no additional charge for this rework. Your original invoice stands as-is, and return shipping is on us.</p>
        <p style="margin-bottom: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;If the fit isn&rsquo;t right when it arrives, call me directly and we&rsquo;ll make it right.</p>
        <p style="margin-bottom: 4px;">Sincerely,</p>
        <p style="margin: 0;">&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
      </div>

      <!-- SIGN-OFF -->
      <div class="nu-signoff">
        This instruction overrides any standard pricing or invoicing workflow for this specific cover. It is a one-time warranty-style rework in the spirit of Norris Utilities&rsquo; Legacy of Commitment® — we stand behind every FlexPro Armor cover we ship.
        <span class="sig-name">— Aaron C. Norris, Founder &amp; CEO</span>
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