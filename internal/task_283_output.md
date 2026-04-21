<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing Warranty Request — Norris Utilities®</title>
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
      --nu-alert-red: #C92C2C;
      --nu-success-green: #2C8A3E;
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

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      opacity: 0.07;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      height: auto;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.05em;
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
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* PAGE TITLE */
    .nu-page-badge {
      display: inline-block;
      background: linear-gradient(135deg, var(--nu-alert-red) 0%, #8a1f1f 100%);
      color: var(--nu-white);
      padding: 6px 16px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-page-title .accent {
      color: #0033cc;
    }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-cyan);
    }

    /* META GRID */
    .nu-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .nu-meta-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px;
      border-radius: 4px;
    }
    .nu-meta-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-meta-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.3;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
    }

    /* WHY BOX */
    .nu-why-box {
      background: linear-gradient(135deg, #f0f4ff 0%, #e8efff 100%);
      border: 1px solid #c8d5ff;
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 32px;
    }
    .nu-why-box p {
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    .nu-why-box p:last-child { margin-bottom: 0; }
    .nu-why-box strong {
      color: #0033cc;
      font-weight: 900;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 22px;
      margin-bottom: 10px;
      border-radius: 4px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      transition: all 0.2s ease;
    }
    .nu-checklist li:hover {
      border-left-color: var(--nu-cyan);
      box-shadow: 0 2px 10px rgba(0,51,204,0.08);
    }
    .nu-check-num {
      background: #0033cc;
      color: var(--nu-white);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .nu-check-content {
      flex: 1;
    }
    .nu-check-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-check-detail {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* EMAIL DRAFT */
    .nu-email-draft {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .nu-email-header {
      background: var(--nu-light-gray);
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-row {
      display: flex;
      gap: 12px;
      font-size: 0.9rem;
      padding: 4px 0;
    }
    .nu-email-label {
      font-weight: 900;
      color: #0033cc;
      min-width: 70px;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      padding-top: 2px;
    }
    .nu-email-value {
      color: var(--nu-dark-text);
      font-weight: 400;
    }
    .nu-email-body {
      padding: 28px 32px;
      font-size: 1rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .nu-email-body p {
      margin-bottom: 16px;
    }
    .nu-email-body ul {
      margin: 12px 0 16px 0;
      padding-left: 22px;
      list-style: none;
    }
    .nu-email-body ul li {
      position: relative;
      padding-left: 18px;
      margin-bottom: 8px;
    }
    .nu-email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .nu-email-signature {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--nu-body-text);
    }
    .nu-email-signature .name {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }

    /* CONTEXT BOX */
    .nu-context-box {
      background: #fff8e6;
      border-left: 4px solid var(--nu-accent-gold);
      padding: 20px 24px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .nu-context-box h4 {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #8a6d1f;
      margin-bottom: 10px;
    }
    .nu-context-box p {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* CTA ROW */
    .nu-cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 2px dashed var(--nu-medium-gray);
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
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
      padding: 14px 32px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 30px 20px 60px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-email-body { padding: 20px; }
      .nu-cta-row { flex-direction: column; }
      .nu-btn-primary, .nu-btn-secondary { width: 100%; text-align: center; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-page-badge">Action Required</div>
      <h1 class="nu-page-title"><span class="accent">Warranty</span> Document Request</h1>
      <p class="nu-page-subtitle">Obtain a copy of the actual written warranty document from H2O Waterproofing for FlexPro Armor.</p>

      <!-- META GRID -->
      <div class="nu-meta-grid">
        <div class="nu-meta-card">
          <div class="nu-meta-label">Vendor</div>
          <div class="nu-meta-value">H2O Waterproofing</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Product Line</div>
          <div class="nu-meta-value">FlexPro Armor Bucket Covers</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Priority</div>
          <div class="nu-meta-value">High — Customer-Facing</div>
        </div>
        <div class="nu-meta-card">
          <div class="nu-meta-label">Owner</div>
          <div class="nu-meta-value">Aaron C. Norris</div>
        </div>
      </div>

      <!-- WHY BOX -->
      <section class="nu-section">
        <h2 class="nu-section-title">Why <span>This Matters</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-why-box">
          <p>FlexPro Armor bucket covers (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C) are sold at a <strong>50% margin</strong> and represent the highest-margin line in the Norris Utilities® catalog. Customers like Dominion Energy, Linetec, AEP, Florence Electric, and Chain Electric are actively buying these covers and will ask for written warranty terms during procurement review.</p>
          <p>A verbal or "we stand behind it" commitment is not sufficient for utility procurement departments. <strong>The actual written warranty document from H2O Waterproofing</strong> — the manufacturer that handcrafts the covers in the USA — needs to be on file, reviewed, and ready to attach to quotes and invoices.</p>
          <p>Until the written warranty is in hand, every FlexPro Armor quote carries an unresolved customer question and a small compliance risk.</p>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Execution <span>Checklist</span></h2>
        <div class="nu-section-rule"></div>
        <ul class="nu-checklist">
          <li>
            <div class="nu-check-num">1</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Send the request email to H2O Waterproofing</div>
              <div class="nu-check-detail">Use the draft below. Ask for the warranty document in PDF, readable on any device.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">2</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Confirm scope covered by the warranty</div>
              <div class="nu-check-detail">Duration, materials covered, stitching, waterproofing treatment, replacement vs. repair terms, and any exclusions.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">3</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Save the PDF to the Norris Utilities® vendor library</div>
              <div class="nu-check-detail">File location: <strong>~/norris-ops/internal/vendor-docs/h2o-flexpro-armor-warranty.pdf</strong>. Commit and push to ops.norrisutilities.com per standing GitHub rule.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">4</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Attach warranty to all future FlexPro Armor quotes</div>
              <div class="nu-check-detail">Update the quote template and invoice workflow so the PDF is included by default for Dominion, Linetec, AEP, Florence, Chain Electric, and future customers.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">5</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Brief Caroline Butler (CB)</div>
              <div class="nu-check-detail">Once the warranty is on file, CB can send it out directly when customers ask — without needing Aaron's review each time.</div>
            </div>
          </li>
          <li>
            <div class="nu-check-num">6</div>
            <div class="nu-check-content">
              <div class="nu-check-title">Close the reMarkable action item</div>
              <div class="nu-check-detail">Mark complete in the tracker once PDF is received, filed, and live at ops.norrisutilities.com.</div>
            </div>
          </li>
        </ul>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Email <span>Draft — Ready to Send</span></h2>
        <div class="nu-section-rule"></div>

        <div class="nu-email-draft">
          <div class="nu-email-header">
            <div class="nu-email-row">
              <div class="nu-email-label">To</div>
              <div class="nu-email-value">H2O Waterproofing — primary contact</div>
            </div>
            <div class="nu-email-row">
              <div class="nu-email-label">From</div>
              <div class="nu-email-value">acnorris@norrisutilities.com</div>
            </div>
            <div class="nu-email-row">
              <div class="nu-email-label">Subject</div>
              <div class="nu-email-value">Request — FlexPro Armor Warranty Document</div>
            </div>
          </div>
          <div class="nu-email-body">
            <p>Team —</p>

            <p>Hope y'all are doing well. I need to get a copy of the actual written warranty document for the FlexPro Armor bucket covers on file here at Norris Utilities®.</p>

            <p>Our utility customers — Dominion Energy, Linetec, AEP, Florence Electric, Chain Electric, and a growing list — are asking for written warranty terms during their procurement review. It would be advantageous to have the document ready to attach to every quote and invoice going forward.</p>

            <p>Could you send over the current warranty in PDF format? Specifically, it would help to see:</p>
            <ul>
              <li>Warranty duration (months or years of coverage)</li>
              <li>What is covered — materials, stitching, waterproof treatment, hardware</li>
              <li>Terms for replacement versus repair</li>
              <li>Any exclusions or conditions (wear-and-tear, misuse, modifications)</li>
              <li>Process for a customer to submit a warranty claim</li>
            </ul>

            <p>Once I have this in hand, I can include it with every FlexPro Armor quote we send and it will help earn the business cleanly on the first pass.</p>

            <p>Appreciate y'all. Let me know if a quick call would be easier than email.</p>

            <p>Sincerely,</p>

            <div class="nu-email-signature">
              <div class="name">Aaron C. Norris</div>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- CONTEXT -->
      <section class="nu-section">
        <h2 class="nu-section-title">Context <span>for the Request</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-context-box">
          <h4>Why H2O Waterproofing Specifically</h4>
          <p>H2O Waterproofing is the handmade-in-USA manufacturer of the FlexPro Armor bucket cover line. They are the authoritative source for the warranty terms — not a reseller, not a repackager. The warranty document they issue is the one that applies to every FlexPro Armor SKU sold by Norris Utilities®: NU-BC-2851, NU-BC-2834, NU-BC-2851-C (Combo 2-Man), and NU-BC-2834-C (Combo 1.5-Man).</p>
        </div>
      </section>

      <!-- CTA ROW -->
      <div class="nu-cta-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=Request%20%E2%80%94%20FlexPro%20Armor%20Warranty%20Document" class="nu-btn-primary">Send Request Email</a>
        <a href="tel:2055001343" class="nu-btn-secondary">Call Aaron — 205-500-1343</a>
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