<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bucket Cover Modification & Return Ship — No Recharge — Norris Utilities®</title>
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
      --nu-warn: #C8102E;
      --nu-success: #1B7F3A;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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

    .nu-phoenix-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
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
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,51,204,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 30px;
    }

    /* TITLE BLOCK */
    .doc-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 4px 0 4px 24px;
      margin-bottom: 32px;
    }
    .doc-eyebrow {
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.95rem;
      color: #555;
    }
    .doc-meta strong { color: var(--nu-dark-text); }

    /* DIRECTIVE BANNER */
    .directive-banner {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #0033CC 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 36px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
      position: relative;
      overflow: hidden;
    }
    .directive-banner::after {
      content: '';
      position: absolute;
      top: -40%; right: -10%;
      width: 50%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 0;
    }
    .directive-banner > * { position: relative; z-index: 1; }
    .directive-label {
      font-size: 0.78rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .directive-text {
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.4;
    }
    .directive-text em {
      font-style: italic;
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .directive-sub {
      margin-top: 12px;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      font-weight: 400;
    }

    /* SECTION HEADERS */
    .section {
      margin-bottom: 36px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title .lead { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* INFO CARDS */
    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .info-card .field-row {
      display: flex;
      justify-content: space-between;
      padding: 7px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .info-card .field-row:last-child { border-bottom: none; }
    .info-card .field-row .lbl {
      color: #666;
      font-weight: 700;
    }
    .info-card .field-row .val {
      color: var(--nu-dark-text);
      font-weight: 400;
      text-align: right;
    }
    .info-card .field-row .val.tbd {
      color: #888;
      font-style: italic;
    }

    /* CHEVRON BADGES */
    .badge-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 8px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge .num {
      display: inline-flex;
      width: 26px; height: 26px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      align-items: center;
      justify-content: center;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.85rem;
    }
    @media (max-width: 768px) {
      .nu-badge { clip-path: none; border-radius: 8px; padding-left: 16px; padding-right: 16px; }
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.97rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist .box {
      display: inline-block;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-right: 12px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist strong { color: var(--nu-dark-text); }

    /* GUARDRAIL CALLOUT */
    .guardrail {
      background: #FFF7E6;
      border-left: 6px solid var(--nu-accent-gold);
      padding: 18px 22px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .guardrail-title {
      font-weight: 900;
      color: #8B6914;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .guardrail-body {
      color: var(--nu-dark-text);
      font-size: 0.97rem;
      font-weight: 400;
    }

    /* DO/DONT */
    .do-dont {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }
    @media (max-width: 768px) {
      .do-dont { grid-template-columns: 1fr; }
    }
    .panel {
      border-radius: 8px;
      padding: 20px 22px;
      border: 1px solid var(--nu-medium-gray);
    }
    .panel.do {
      background: #F1FAF3;
      border-color: #BFE5C9;
    }
    .panel.dont {
      background: #FDF2F2;
      border-color: #F2C2C2;
    }
    .panel h4 {
      font-size: 0.85rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .panel.do h4 { color: var(--nu-success); }
    .panel.dont h4 { color: var(--nu-warn); }
    .panel ul { padding-left: 18px; }
    .panel ul li { margin-bottom: 6px; font-size: 0.95rem; }

    /* SHIPPING TABLE */
    .ship-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
    }
    .ship-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .ship-table td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .ship-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .ship-table .lbl { font-weight: 700; color: var(--nu-dark-text); width: 32%; }

    /* INVOICE NOTE */
    .invoice-note {
      background: #EAF4FF;
      border: 1px solid #BCD9F5;
      border-radius: 8px;
      padding: 18px 22px;
      font-size: 0.97rem;
    }
    .invoice-note strong { color: var(--nu-blue); }

    /* COMM TEMPLATE */
    .comm-block {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      border-radius: 4px;
      font-size: 0.96rem;
      white-space: pre-wrap;
      line-height: 1.7;
      color: var(--nu-dark-text);
    }
    .comm-block .sig { color: #555; font-style: normal; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
      text-align: center;
      margin-top: 30px;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 22px 20px; }
      .doc-title { font-size: 1.6rem; }
      .directive-text { font-size: 1.1rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .info-card, .ship-table, .panel { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-content-inner">

      <div class="doc-title-block">
        <div class="doc-eyebrow">Internal Action Item · FlexPro Armor Service Workflow</div>
        <h1 class="doc-title">Modify <span>Returned Bucket Cover</span> &amp; Ship Back — No Recharge</h1>
        <div class="doc-meta">
          <strong>Owner:</strong> Aaron C. Norris &nbsp; · &nbsp;
          <strong>Source:</strong> reMarkable action item &nbsp; · &nbsp;
          <strong>Document Date:</strong> 2026-04-22
        </div>
      </div>

      <!-- DIRECTIVE -->
      <div class="directive-banner">
        <div class="directive-label">Standing Directive</div>
        <div class="directive-text">
          Modify the returned FlexPro Armor bucket cover to the customer's corrected specs and ship it back at <em>no additional charge</em>.
        </div>
        <div class="directive-sub">
          This is a goodwill rework. Original invoice stands as billed. Do <strong>not</strong> create a new invoice. Do <strong>not</strong> bill freight on the return shipment. Internal labor and outbound freight are absorbed by Norris Utilities®.
        </div>
      </div>

      <!-- ORDER SNAPSHOT -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Order</span> <span class="rest">Snapshot</span></h2>
        <div class="two-col">
          <div class="info-card">
            <h3>Original Order — Reference</h3>
            <div class="field-row"><span class="lbl">Product line</span><span class="val">FlexPro Armor — Bucket Cover</span></div>
            <div class="field-row"><span class="lbl">SKU candidates</span><span class="val">NU-BC-2851 / NU-BC-2834 (confirm on intake)</span></div>
            <div class="field-row"><span class="lbl">Original ship date</span><span class="val tbd">Confirm from outbound UPS record</span></div>
            <div class="field-row"><span class="lbl">Original invoice</span><span class="val">Already issued — remains valid</span></div>
            <div class="field-row"><span class="lbl">Customer status</span><span class="val">Active — relationship in good standing</span></div>
          </div>
          <div class="info-card">
            <h3>Return / Rework — This Action</h3>
            <div class="field-row"><span class="lbl">Inbound cover</span><span class="val">Returned to Norris Utilities® for modification</span></div>
            <div class="field-row"><span class="lbl">Reason</span><span class="val">Spec adjustment / fit correction</span></div>
            <div class="field-row"><span class="lbl">Charge to customer</span><span class="val" style="color: var(--nu-success); font-weight: 700;">$0.00 — no recharge, no freight</span></div>
            <div class="field-row"><span class="lbl">Outbound freight</span><span class="val">Norris Utilities® absorbs</span></div>
            <div class="field-row"><span class="lbl">Target turnaround</span><span class="val">Ship back within 5 business days of intake</span></div>
          </div>
        </div>
      </section>

      <!-- WORKFLOW -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Workflow</span> <span class="rest">— Step by Step</span></h2>
        <div class="badge-list">
          <div class="nu-badge"><span class="num">1</span>Receive returned bucket cover at Birmingham — log inbound tracking number, photograph as-received condition.</div>
          <div class="nu-badge"><span class="num">2</span>Verify modification spec in writing with customer (size, cutouts, hardware, color) before any cutting.</div>
          <div class="nu-badge"><span class="num">3</span>Tag the unit "REWORK — NO CHARGE" so production does not pull a new SKU and finance does not generate an invoice.</div>
          <div class="nu-badge"><span class="num">4</span>Perform the modification to the corrected dimensions — full FlexPro Armor build quality standards apply.</div>
          <div class="nu-badge"><span class="num">5</span>QC the reworked cover side-by-side against the corrected spec sheet. Photograph finished unit.</div>
          <div class="nu-badge"><span class="num">6</span>Ship UPS back to the customer on Norris Utilities® account. Email tracking number same day.</div>
          <div class="nu-badge"><span class="num">7</span>Close the action item in the tracker — note "Rework complete, shipped no-charge per Aaron."</div>
        </div>
      </section>

      <!-- SHIPPING + BILLING RULES -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Shipping</span> <span class="rest">&amp; Billing Rules</span></h2>
        <table class="ship-table">
          <thead>
            <tr><th>Item</th><th>Rule for this rework</th></tr>
          </thead>
          <tbody>
            <tr><td class="lbl">Outbound freight charge</td><td>$0.00 to customer. Cost booked to Norris Utilities® internal — service / goodwill account.</td></tr>
            <tr><td class="lbl">Ben's Shipping Formula</td><td>Does <strong>not</strong> apply. Formula governs new-order shipping only: <em>CustomerCost = ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0)</em>. Skip it on this shipment.</td></tr>
            <tr><td class="lbl">QuickBooks invoice</td><td>Do <strong>not</strong> create a new invoice. Do <strong>not</strong> reopen, void, or amend the original invoice — it remains as billed.</td></tr>
            <tr><td class="lbl">Sales tax</td><td>Not applicable — no new sale event. No tax line.</td></tr>
            <tr><td class="lbl">Carrier &amp; service</td><td>UPS Ground unless customer's downtime requires expedited — if expedited, still no charge to customer.</td></tr>
            <tr><td class="lbl">Insurance / declared value</td><td>Declare value of the modified cover for inbound and outbound legs. Norris Utilities® eats any claim outcome.</td></tr>
            <tr><td class="lbl">Tracking notification</td><td>Aaron sends tracking directly. CB copies into Master Tracker the same day.</td></tr>
          </tbody>
        </table>
      </section>

      <!-- DO / DONT -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Do</span> <span class="rest">/ Do Not</span></h2>
        <div class="do-dont">
          <div class="panel do">
            <h4>Do</h4>
            <ul>
              <li>Confirm corrected spec in writing before cutting.</li>
              <li>Photograph the cover at intake, mid-rework, and at outbound.</li>
              <li>Ship back on Norris Utilities® UPS account.</li>
              <li>Email tracking the same day the package leaves.</li>
              <li>Log the rework in the Master Tracker as "Rework — no charge."</li>
              <li>Tell the customer plainly: "There's no additional charge — we're making this right."</li>
            </ul>
          </div>
          <div class="panel dont">
            <h4>Do Not</h4>
            <ul>
              <li>Do not create a new QuickBooks invoice for any amount.</li>
              <li>Do not void, reopen, or modify the original invoice.</li>
              <li>Do not bill freight, materials, or labor for the rework.</li>
              <li>Do not apply Ben's Shipping Formula to this shipment.</li>
              <li>Do not pull a fresh SKU from inventory — this is the same physical unit reworked.</li>
              <li>Do not send the customer anything that looks like a charge confirmation.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- GUARDRAILS -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Brand</span> <span class="rest">Guardrails</span></h2>
        <div class="guardrail">
          <div class="guardrail-title">Trademark Usage</div>
          <div class="guardrail-body">
            FlexPro Armor is the correct product name — never "FlexPro Armor Guard." FlexPro Armor is <strong>not</strong> a registered trademark, so do <strong>not</strong> add ® to it in any customer-facing message, label, packing slip, or email signature. Norris Utilities®, A Legacy of Commitment®, and Phoenix Icon® always carry the registered symbol on first use.
          </div>
        </div>
        <div class="guardrail">
          <div class="guardrail-title">Trust Posture</div>
          <div class="guardrail-body">
            This rework is a goodwill action that protects a multi-order relationship. The cost of the modification and freight is materially smaller than the lifetime value of an active FlexPro Armor account, and it reinforces the "A Legacy of Commitment®" promise on every reorder thereafter.
          </div>
        </div>
      </section>

      <!-- INVOICE NOTE -->
      <section class="section">
        <h2 class="section-title"><span class="lead">QuickBooks</span> <span class="rest">Note</span></h2>
        <div class="invoice-note">
          <strong>Reminder for CB:</strong> If the original invoice for this customer is among the open March 20 shipments (still uninvoiced as of the April 13 audit), invoice the original sale at the original amount when ready — the rework does not affect that figure. Add an internal note on the invoice: <em>"Cover reworked &amp; reshipped 2026 at no additional charge — see action item file."</em>
        </div>
      </section>

      <!-- CUSTOMER MESSAGE -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Customer</span> <span class="rest">Message — Template</span></h2>
        <div class="comm-block">Name —

    Your bucket cover is back at our shop. We're making the modification you asked for and shipping it straight back to you at no additional charge — original invoice stands as is.

    I'll send you the UPS tracking the same day it leaves Birmingham. If anything about the new fit isn't right, call me directly and we'll take care of it.

    Thanks for the patience while we got this dialed in.

Sincerely,

    Aaron C. Norris
    <span class="sig">Founder &amp; CEO · Norris Utilities, LLC
    Cell: 205-500-1343 · acnorris@norrisutilities.com</span></div>
      </section>

      <!-- INTERNAL CHECKLIST -->
      <section class="section">
        <h2 class="section-title"><span class="lead">Closeout</span> <span class="rest">Checklist</span></h2>
        <ul class="checklist">
          <li><span class="box"></span><span><strong>Intake logged</strong> — inbound UPS tracking captured, condition photos saved.</span></li>
          <li><span class="box"></span><span><strong>Spec confirmed in writing</strong> — corrected dimensions on file before cut.</span></li>
          <li><span class="box"></span><span><strong>Unit tagged "REWORK — NO CHARGE"</strong> — finance and production both flagged.</span></li>
          <li><span class="box"></span><span><strong>Modification complete</strong> — QC pass against corrected spec.</span></li>
          <li><span class="box"></span><span><strong>Outbound shipped</strong> — UPS on Norris Utilities® account, no freight billed.</span></li>
          <li><span class="box"></span><span><strong>Tracking sent to customer</strong> — same day, by Aaron.</span></li>
          <li><span class="box"></span><span><strong>Master Tracker updated</strong> — entry: "Rework complete, shipped no-charge."</span></li>
          <li><span class="box"></span><span><strong>QuickBooks left untouched</strong> — no new invoice, original invoice unchanged.</span></li>
        </ul>
      </section>

    </div>
  </main>

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