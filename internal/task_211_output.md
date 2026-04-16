<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Bucket Cover Resize & Reship — Norris Utilities®</title>
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
      --nu-status-amber: #E89B0E;
      --nu-status-green: #1F9D55;
      --nu-status-red: #C53030;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
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
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
      opacity: 0.95;
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
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
      letter-spacing: 0.04em;
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
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
      padding: 50px 32px 70px;
    }

    /* ══ TASK META BAR ══ */
    .task-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      background: var(--nu-white);
      border-radius: 10px;
      padding: 18px 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border-left: 5px solid var(--nu-blue);
      margin-bottom: 28px;
    }
    .task-meta-left {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .meta-pill.source { background: var(--nu-medium-gray); color: var(--nu-dark-text); }
    .meta-pill.priority { background: rgba(232,155,14,0.12); color: var(--nu-status-amber); }
    .meta-pill.status { background: rgba(0,0,255,0.08); color: var(--nu-blue); }
    .meta-date {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      font-weight: 700;
    }

    /* ══ SECTION HEADER ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      line-height: 1.25;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-eyebrow {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      background: var(--nu-navy);
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 14px;
    }

    h1.action-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .action-sub {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 0;
    }

    /* ══ CARD ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    .nu-card.intro { border-top: 4px solid var(--nu-blue); }

    .intro p {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 12px;
    }
    .intro p:last-child { margin-bottom: 0; }

    /* ══ TWO COLUMN ══ */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .info-block h3 {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .info-row:last-child { border-bottom: none; }
    .info-row .label {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .info-row .value {
      color: var(--nu-body-text);
      text-align: right;
    }
    .value strong { color: var(--nu-blue); }

    /* ══ STEP LIST ══ */
    .step-list {
      counter-reset: step;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 18px 18px 70px;
      margin-bottom: 14px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-blue);
      transition: transform 0.15s ease;
    }
    .step-list li:hover {
      transform: translateX(2px);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .step-list li .step-title {
      display: block;
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .step-list li .step-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }

    /* ══ SIZE TABLE ══ */
    .sku-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8px;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .sku-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
    }
    .sku-table th, .sku-table td {
      padding: 12px 14px;
      text-align: left;
      font-size: 0.9rem;
    }
    .sku-table th {
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.78rem;
    }
    .sku-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .sku-table tbody tr.flagged {
      background: rgba(6,208,255,0.10);
      font-weight: 700;
    }
    .sku-table td.sku { font-weight: 900; color: var(--nu-blue); font-family: 'Lato', monospace; }

    /* ══ CALLOUT ══ */
    .callout {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      background: linear-gradient(135deg, #fff8ec 0%, #fff3d6 100%);
      border-left: 5px solid var(--nu-status-amber);
      padding: 18px 22px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    .callout-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      fill: var(--nu-status-amber);
      margin-top: 2px;
    }
    .callout-body strong {
      color: var(--nu-dark-text);
      display: block;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .callout-body p {
      font-size: 0.93rem;
      color: #6b5318;
      margin: 0;
    }

    /* ══ ACTION BAR ══ */
    .action-bar {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 32px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 6px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: var(--nu-navy);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,255,0.28);
    }
    .nu-btn-secondary {
      background: var(--nu-white);
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 32px 18px 50px; }
      h1.action-title { font-size: 1.5rem; }
      .grid-2 { grid-template-columns: 1fr; gap: 16px; }
      .nu-card { padding: 22px 20px; }
      .step-list li { padding: 16px 14px 16px 60px; }
      .step-list li::before { width: 32px; height: 32px; left: 14px; font-size: 0.9rem; }
      .task-meta { flex-direction: column; align-items: flex-start; }
      .info-row { flex-direction: column; gap: 4px; }
      .info-row .value { text-align: left; }
      .sku-table th, .sku-table td { padding: 10px 8px; font-size: 0.82rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .step-list li { box-shadow: none; border: 1px solid #ddd; }
      .action-bar { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- META BAR -->
      <div class="task-meta">
        <div class="task-meta-left">
          <span class="meta-pill source">📓 reMarkable Capture</span>
          <span class="meta-pill priority">● High Priority</span>
          <span class="meta-pill status">In Progress</span>
        </div>
        <div class="meta-date">Logged: 2026-04-16</div>
      </div>

      <!-- TITLE BLOCK -->
      <span class="nu-eyebrow">Internal Action Item</span>
      <h1 class="action-title">Modify Shipped Bucket Cover &amp; Reship for Proper Sizing</h1>
      <p class="action-sub" style="margin-bottom: 28px;">FlexPro Armor returns workflow — pulled from Aaron's reMarkable notebook on 2026-04-16. Owner: Aaron C. Norris. Support: Caroline Butler (CB).</p>

      <!-- INTRO CARD -->
      <div class="nu-card intro">
        <p><strong>Situation.</strong> A FlexPro Armor bucket cover that was shipped to a customer needs to be modified to the correct size, then shipped back out. The unit is being routed back to the workshop for resize before redelivery.</p>
        <p><strong>Goal.</strong> Confirm the correct SKU for the customer's bucket, complete the resize, and get the cover back in the customer's hands without a second mistake. CB owns shipping coordination; Aaron owns the size confirmation call before any cutting begins.</p>
      </div>

      <!-- TWO COLUMN: TICKET INFO & SHIPPING -->
      <div class="grid-2">
        <div class="nu-card info-block">
          <h3>Ticket Details</h3>
          <div class="info-row">
            <span class="label">Source</span>
            <span class="value">reMarkable Notebook</span>
          </div>
          <div class="info-row">
            <span class="label">Captured</span>
            <span class="value">2026-04-16</span>
          </div>
          <div class="info-row">
            <span class="label">Product Line</span>
            <span class="value"><strong>FlexPro Armor</strong></span>
          </div>
          <div class="info-row">
            <span class="label">Issue Type</span>
            <span class="value">Sizing — Resize &amp; Reship</span>
          </div>
          <div class="info-row">
            <span class="label">Owner</span>
            <span class="value">Aaron C. Norris</span>
          </div>
          <div class="info-row">
            <span class="label">Support</span>
            <span class="value">Caroline Butler (CB)</span>
          </div>
        </div>

        <div class="nu-card info-block">
          <h3>Shipping Plan</h3>
          <div class="info-row">
            <span class="label">Inbound (Return)</span>
            <span class="value">Customer → Workshop</span>
          </div>
          <div class="info-row">
            <span class="label">Workshop Action</span>
            <span class="value">Resize to confirmed SKU</span>
          </div>
          <div class="info-row">
            <span class="label">Outbound (Reship)</span>
            <span class="value">Workshop → Customer</span>
          </div>
          <div class="info-row">
            <span class="label">Shipping Formula</span>
            <span class="value">ROUNDUP(ROUNDUP(Cost,0) × 1.10, 0)</span>
          </div>
          <div class="info-row">
            <span class="label">Reship Cost</span>
            <span class="value"><strong>Norris Utilities® covers</strong></span>
          </div>
          <div class="info-row">
            <span class="label">Target Turnaround</span>
            <span class="value">≤ 5 business days from receipt</span>
          </div>
        </div>
      </div>

      <!-- CALLOUT -->
      <div class="callout">
        <svg class="callout-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L22 20 L2 20 Z M12 9 L12 14 M12 17 L12 17.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="callout-body">
          <strong>Do not cut until size is confirmed.</strong>
          <p>Aaron must verify the customer's actual bucket dimensions (top opening width × depth, in inches) in writing — text or email — before the workshop modifies the cover. A second wrong size eats the margin and the relationship.</p>
        </div>
      </div>

      <!-- STEP LIST -->
      <h2 class="nu-section-title">Action <span>Steps</span></h2>
      <ol class="step-list">
        <li>
          <span class="step-title">Pull the original order record</span>
          <span class="step-detail">Locate the customer's PO or invoice in the AP tracker. Note which SKU shipped and the size on file. Confirm shipping address still matches.</span>
        </li>
        <li>
          <span class="step-title">Call the customer to confirm bucket dimensions</span>
          <span class="step-detail">Aaron calls the customer directly. Get the top opening (width) and depth in inches. Ask whether it's a 1.5-Man or 2-Man bucket. Get confirmation in writing (follow-up text or email).</span>
        </li>
        <li>
          <span class="step-title">Match dimensions to the correct SKU</span>
          <span class="step-detail">Use the FlexPro Armor SKU table below. If the bucket falls between sizes, default to the larger SKU — fit can be tightened with the drawstring, slack cannot be added.</span>
        </li>
        <li>
          <span class="step-title">CB issues the prepaid return label</span>
          <span class="step-detail">Caroline emails the customer the prepaid label and a one-paragraph note: apology, confirmed new SKU, expected reship date. Aaron CC'd. Note logged in AP tracker.</span>
        </li>
        <li>
          <span class="step-title">Workshop receives &amp; modifies the cover</span>
          <span class="step-detail">On receipt, inspect for damage. Resize to the confirmed SKU dimensions. Inspect stitching and Phoenix Icon® badge placement before packaging. No cutting before written size confirmation is on file.</span>
        </li>
        <li>
          <span class="step-title">Reship &amp; close the loop</span>
          <span class="step-detail">Norris Utilities® covers outbound shipping (do not bill the customer). CB sends tracking the same day it ships. Aaron follows up with the customer by phone within 48 hours of delivery to confirm fit.</span>
        </li>
        <li>
          <span class="step-title">Close the action item</span>
          <span class="step-detail">Mark this reMarkable item complete. Log root cause (wrong size on original PO, customer-supplied dimensions off, etc.) in the agent learnings file so the same mistake does not repeat.</span>
        </li>
      </ol>

      <!-- SKU TABLE -->
      <h2 class="nu-section-title" style="margin-top: 36px;">FlexPro Armor <span>SKU Reference</span></h2>
      <div class="nu-card" style="padding: 18px;">
        <table class="sku-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Bucket Size</th>
              <th>Dimensions (W × D)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="sku">NU-BC-2834</td>
              <td>1.5-Man</td>
              <td>28" × 34"</td>
              <td>Standard cover</td>
            </tr>
            <tr>
              <td class="sku">NU-BC-2834-C</td>
              <td>1.5-Man</td>
              <td>28" × 34"</td>
              <td>Combo (cover + accessories)</td>
            </tr>
            <tr>
              <td class="sku">NU-BC-2851</td>
              <td>2-Man</td>
              <td>28" × 51"</td>
              <td>Standard cover</td>
            </tr>
            <tr>
              <td class="sku">NU-BC-2851-C</td>
              <td>2-Man</td>
              <td>28" × 51"</td>
              <td>Combo (cover + accessories)</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.85rem; color: #555; margin-top: 14px; padding: 10px 14px; background: var(--nu-light-gray); border-radius: 6px;">
          <strong>Competitor size translation:</strong> A customer who says "24 × 48" usually has a bucket that fits our <strong>NU-BC-2851 (28" × 51")</strong>. A customer who says "24 × 34" usually fits <strong>NU-BC-2834 (28" × 34")</strong>.
        </p>
      </div>

      <!-- CUSTOMER COMMUNICATION TEMPLATE -->
      <h2 class="nu-section-title" style="margin-top: 36px;">Customer <span>Note (CB Template)</span></h2>
      <div class="nu-card">
        <div style="background: var(--nu-light-gray); padding: 22px; border-radius: 8px; border-left: 4px solid var(--nu-cyan); font-family: var(--font-primary);">
          <p style="margin-bottom: 14px;"><strong>Subject:</strong> Your FlexPro Armor cover — resize on the way back to you</p>
          <p style="margin-bottom: 14px;">[Name] —</p>
          <p style="margin-bottom: 14px; padding-left: 24px;">Thanks for your patience. The cover that arrived isn't the right fit for your bucket, and that's on us.</p>
          <p style="margin-bottom: 14px; padding-left: 24px;">Attached is a prepaid return label. Send it back at your convenience and we'll resize it to the correct dimensions you and Aaron confirmed. We'll cover the reship — no charge to you.</p>
          <p style="margin-bottom: 14px; padding-left: 24px;">Expected back in your hands within 5 business days of us receiving it. I'll send tracking the day it ships.</p>
          <p style="margin-bottom: 6px;">Sincerely,</p>
          <p style="padding-left: 24px;">Caroline Butler<br>Norris Utilities®, LLC</p>
        </div>
      </div>

      <!-- BUTTONS -->
      <div class="action-bar">
        <a href="tel:2055001343" class="nu-btn-primary">📞 Call Aaron — 205-500-1343</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Bucket%20Cover%20Resize%20%E2%80%94%20Status%20Update" class="nu-btn-secondary">✉ Email Status Update</a>
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