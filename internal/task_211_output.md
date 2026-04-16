<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action — Modify &amp; Re-Ship Bucket Cover for Proper Sizing — Norris Utilities®</title>
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
      --nu-amber: #C9731A;
      --nu-amber-light: #FEF3E7;
      --nu-red: #B4231A;
      --nu-red-light: #FDECEB;
      --nu-green: #0E7C3A;
      --nu-green-light: #E7F5EC;
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
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
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
    .nu-doc-label {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.28);
      border-radius: 999px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    /* CHEVRON */
    .nu-chevron { position: relative; height: 50px; margin-top: -50px; z-index: 10; }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 50px 0 60px;
    }
    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      text-align: center;
      margin-bottom: 40px;
    }
    .nu-eyebrow {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.3rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-sub {
      color: #5b5b6a;
      font-size: 1.05rem;
      max-width: 720px;
      margin: 0 auto;
    }

    /* META STRIP */
    .nu-meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.12);
    }
    .nu-meta-cell {
      padding: 18px 22px;
      color: var(--nu-white);
      border-right: 1px solid rgba(255,255,255,0.08);
    }
    .nu-meta-cell:last-child { border-right: none; }
    .nu-meta-label {
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .nu-meta-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-white);
    }

    /* SECTION */
    .nu-section { margin-bottom: 38px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      color: var(--nu-dark-text);
    }
    .nu-section-title .first { color: var(--nu-blue); }

    /* ALERT CARD */
    .nu-alert {
      display: flex;
      gap: 18px;
      padding: 22px 24px;
      border-radius: 10px;
      border-left: 6px solid var(--nu-amber);
      background: var(--nu-amber-light);
      margin-bottom: 32px;
    }
    .nu-alert-icon {
      flex-shrink: 0;
      width: 42px; height: 42px;
      background: var(--nu-amber);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.25rem;
    }
    .nu-alert-body h3 {
      font-weight: 900;
      color: #7a4410;
      font-size: 1.05rem;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .nu-alert-body p { color: #663a10; font-size: 0.97rem; }

    /* STEP GRID */
    .nu-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .nu-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px 22px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .nu-step-num {
      position: absolute;
      top: -14px; left: 22px;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px; height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      box-shadow: 0 4px 10px rgba(0,0,255,0.25);
    }
    .nu-step h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-top: 4px;
      margin-bottom: 8px;
    }
    .nu-step p {
      font-size: 0.93rem;
      color: #555;
      line-height: 1.55;
    }
    .nu-step-meta {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.82rem;
      color: #777;
    }
    .nu-step-meta strong { color: var(--nu-blue); font-weight: 700; }

    /* SIZE TABLE */
    .nu-size-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    table.nu-sizes {
      width: 100%;
      border-collapse: collapse;
    }
    table.nu-sizes thead {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
    }
    table.nu-sizes th {
      padding: 14px 18px;
      text-align: left;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    table.nu-sizes td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    table.nu-sizes tr.highlight { background: #EEF4FF; }
    table.nu-sizes tr.highlight td { font-weight: 700; color: var(--nu-dark-text); }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
    }
    .nu-pill.cyan { background: var(--nu-cyan); color: var(--nu-navy); }

    /* CHECKLIST */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 24px 28px;
    }
    .nu-checklist ul { list-style: none; }
    .nu-checklist li {
      padding: 12px 0 12px 38px;
      border-bottom: 1px solid var(--nu-medium-gray);
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-body-text);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 14px;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* TWO COLUMN */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-bottom: 32px;
    }
    .nu-info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 24px;
    }
    .nu-info-card h4 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .nu-info-card dl { display: grid; gap: 8px; }
    .nu-info-card dt {
      font-size: 0.78rem;
      color: #888;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .nu-info-card dd {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }

    /* NOTE BOX */
    .nu-note {
      background: var(--nu-green-light);
      border-left: 6px solid var(--nu-green);
      border-radius: 8px;
      padding: 18px 22px;
      margin-top: 24px;
    }
    .nu-note strong { color: #0a5c2a; }
    .nu-note p { color: #1a4128; font-size: 0.95rem; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.82);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.98rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 0 20px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-meta-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
      .nu-footer { padding: 32px 20px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step:hover { transform: none; box-shadow: none; }
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
    <div class="nu-doc-label">Internal Action Item</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div class="nu-title-block">
        <div class="nu-eyebrow">reMarkable Action Item</div>
        <h1 class="nu-page-title">Modify &amp; Re-Ship <span>Bucket Cover</span> for Proper Sizing</h1>
        <p class="nu-page-sub">Customer-shipped FlexPro Armor cover requires resize rework at the shop before reshipment. This document captures the rework steps, the correct sizing reference, and the return-ship checklist.</p>
      </div>

      <!-- META STRIP -->
      <div class="nu-meta-strip">
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Source</div>
          <div class="nu-meta-value">reMarkable Notebook</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Priority</div>
          <div class="nu-meta-value">High — Customer Waiting</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Product</div>
          <div class="nu-meta-value">FlexPro Armor Cover</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
        <div class="nu-meta-cell">
          <div class="nu-meta-label">Logged</div>
          <div class="nu-meta-value">2026-04-16</div>
        </div>
      </div>

      <!-- ALERT -->
      <div class="nu-alert">
        <div class="nu-alert-icon">!</div>
        <div class="nu-alert-body">
          <h3>Cover does not match bucket dimensions</h3>
          <p>The unit currently with the customer is the wrong size for their bucket. It must come back to the shop, be modified to the correct SKU dimensions, and re-shipped. Verify the bucket measurements before reworking — do not guess.</p>
        </div>
      </div>

      <!-- STEPS -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> Steps</h2>
        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <h4>Confirm bucket dimensions</h4>
            <p>Get exact bucket measurements from the customer: top inside length, top inside width, and depth. Photograph the bucket if possible.</p>
            <div class="nu-step-meta"><strong>Owner:</strong> Aaron / CB &nbsp;·&nbsp; <strong>Method:</strong> Phone + text photo</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <h4>Issue return shipping label</h4>
            <p>Generate a prepaid return label for the incorrect cover. Include it in a follow-up email with clear pack-and-drop instructions.</p>
            <div class="nu-step-meta"><strong>Carrier:</strong> FedEx Ground &nbsp;·&nbsp; <strong>Cost:</strong> Absorbed — rework charge</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <h4>Receive cover at shop</h4>
            <p>Inspect the returned cover for wear or damage. Confirm the SKU tag and label. Flag the job in the rework queue with the customer name.</p>
            <div class="nu-step-meta"><strong>Turnaround target:</strong> 48 hours from receipt</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">4</div>
            <h4>Resize to correct SKU</h4>
            <p>Cross-check against the size table below. Modify the cover to match the confirmed bucket dimensions. All stitching to factory spec — no shortcuts on the corner reinforcements.</p>
            <div class="nu-step-meta"><strong>Spec:</strong> FlexPro Armor handmade-USA standard</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">5</div>
            <h4>QC inspection</h4>
            <p>Test-fit against a matching bucket shell or reference template. Photograph the final cover next to a tape measure, capturing top opening, depth, and corner construction.</p>
            <div class="nu-step-meta"><strong>Evidence:</strong> Save photos to customer file</div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">6</div>
            <h4>Re-ship with apology note</h4>
            <p>Pack with a handwritten note from Aaron. Ship via the same carrier used on the original order. Email tracking the moment the label prints — do not wait for pickup.</p>
            <div class="nu-step-meta"><strong>Shipping:</strong> Ben's Formula — ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0)</div>
          </div>

        </div>
      </div>

      <!-- SIZE REFERENCE -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">FlexPro</span> Armor Size Reference</h2>
        <div class="nu-size-card">
          <table class="nu-sizes">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Configuration</th>
                <th>Dimensions (W × L)</th>
                <th>Competitor Equivalent</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr class="highlight">
                <td><span class="nu-pill">NU-BC-2851</span></td>
                <td>2-Man Platform</td>
                <td>28" × 51"</td>
                <td>Competitor "24 × 48"</td>
                <td>Most common rework target</td>
              </tr>
              <tr>
                <td><span class="nu-pill">NU-BC-2834</span></td>
                <td>1.5-Man Platform</td>
                <td>28" × 34"</td>
                <td>Competitor "24 × 34"</td>
                <td>Standard single-man bucket</td>
              </tr>
              <tr>
                <td><span class="nu-pill cyan">NU-BC-2851-C</span></td>
                <td>2-Man Combo</td>
                <td>28" × 51"</td>
                <td>—</td>
                <td>Cover + accessory kit</td>
              </tr>
              <tr>
                <td><span class="nu-pill cyan">NU-BC-2834-C</span></td>
                <td>1.5-Man Combo</td>
                <td>28" × 34"</td>
                <td>—</td>
                <td>Cover + accessory kit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="nu-note">
          <p><strong>Sizing rule:</strong> Competitor "24 × 48" translates to NU-BC-2851 (28" × 51"). Competitor "24 × 34" translates to NU-BC-2834 (28" × 34"). Never match by the printed number — always match to the Norris Utilities® SKU.</p>
        </div>
      </div>

      <!-- DETAILS TWO COLUMN -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Rework</span> Details</h2>
        <div class="nu-two-col">
          <div class="nu-info-card">
            <h4>Original Shipment</h4>
            <dl>
              <dt>Product</dt>
              <dd>FlexPro Armor Bucket Cover</dd>
              <dt>Issue</dt>
              <dd>Dimensions do not match customer bucket</dd>
              <dt>Status</dt>
              <dd>Outbound — with customer</dd>
              <dt>Next action</dt>
              <dd>Pull back for resize</dd>
            </dl>
          </div>
          <div class="nu-info-card">
            <h4>Shop Workflow</h4>
            <dl>
              <dt>Receive / log</dt>
              <dd>Shop receiving station</dd>
              <dt>Rework</dt>
              <dd>In-house, handmade USA</dd>
              <dt>QC</dt>
              <dd>Test-fit + photo documentation</dd>
              <dt>Margin</dt>
              <dd>Hold at 50% — rework absorbed on our side</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title"><span class="first">Close-Out</span> Checklist</h2>
        <div class="nu-checklist">
          <ul>
            <li><strong>Customer bucket dimensions confirmed</strong> — written down, photographed, matched to SKU</li>
            <li><strong>Return label sent</strong> — with plain-English drop instructions and a thank-you note</li>
            <li><strong>Returned cover received &amp; inspected</strong> — logged against the original order</li>
            <li><strong>Cover resized to correct SKU</strong> — to factory spec, reinforced corners intact</li>
            <li><strong>QC photos on file</strong> — tape-measure shot saved to the customer folder</li>
            <li><strong>Reship tracking sent</strong> — email out the same hour the label prints</li>
            <li><strong>Follow-up scheduled</strong> — call customer 48 hours after delivery to confirm fit</li>
            <li><strong>Lesson logged</strong> — what went wrong, what we're changing to prevent it</li>
          </ul>
        </div>
      </div>

      <!-- CLOSING NOTE -->
      <div class="nu-note">
        <p><strong>Why this matters:</strong> FlexPro Armor sells on fit, feel, and follow-through. A wrong-size cover becomes a referral when we make the rework painless for the customer. Absorb the cost, move fast, communicate clearly — that's the Norris Utilities® standard.</p>
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
    <div class="nu-footer-meta">Internal Document · FlexPro Armor Rework · 2026-04-16</div>
  </footer>

</body>
</html>