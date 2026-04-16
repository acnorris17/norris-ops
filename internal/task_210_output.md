<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action — H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 240px;
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
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 2.8rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: rgba(255,255,255,0.95);
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* ACTION CARD */
    .action-banner {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 8px 18px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .action-banner.priority-high {
      background: linear-gradient(135deg, #b8002e 0%, #e0103d 100%);
    }
    h1.action-title {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    h1.action-title .blue-word { color: var(--nu-blue); }
    .action-subhead {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 36px;
      font-weight: 400;
    }

    .section-title {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin: 36px 0 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* WHY IT MATTERS */
    .why-card {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .why-card p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin: 0;
    }

    /* QUESTIONS LIST */
    .question-list {
      list-style: none;
      padding: 0;
      margin: 16px 0 0;
    }
    .question-list li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 16px 20px 16px 56px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.98rem;
      color: var(--nu-body-text);
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .question-list li::before {
      counter-increment: q;
      content: counter(q);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }
    .question-list { counter-reset: q; }
    .question-list li strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }

    /* CONTACT BOX */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 20px;
    }
    .contact-card .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .contact-card .name {
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .contact-card .meta {
      font-size: 0.92rem;
      color: #666;
      line-height: 1.5;
    }
    .contact-card a { color: var(--nu-blue); text-decoration: none; }
    .contact-card a:hover { text-decoration: underline; }

    /* OUTREACH */
    .outreach-block {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-top: 16px;
      border: 1px solid var(--nu-medium-gray);
    }
    .outreach-block .meta {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .outreach-block .meta strong { color: var(--nu-dark-text); }
    .outreach-block .body {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      white-space: pre-line;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
      margin-top: 14px;
    }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 14px; top: 14px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li:last-child { border-bottom: none; }

    /* META BAR */
    .meta-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0;
      background: var(--nu-dark-text);
      color: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 30px;
    }
    .meta-bar .cell {
      padding: 14px 18px;
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .meta-bar .cell:last-child { border-right: none; }
    .meta-bar .cell .k {
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
      font-weight: 900;
    }
    .meta-bar .cell .v {
      font-weight: 700;
      font-size: 0.95rem;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.7;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 36px 22px 50px; }
      h1.action-title { font-size: 1.55rem; }
      .meta-bar { grid-template-columns: 1fr 1fr; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <span class="action-banner priority-high">Action Item · Vendor Clarification</span>

      <h1 class="action-title">Get the <span class="blue-word">Lifetime Warranty</span> definition from H2O Waterproofing</h1>
      <p class="action-subhead">Source: reMarkable notebook · Need written scope of coverage before referencing the warranty in any quote, proposal, or marketing piece.</p>

      <!-- META BAR -->
      <div class="meta-bar">
        <div class="cell">
          <div class="k">Owner</div>
          <div class="v">Aaron C. Norris</div>
        </div>
        <div class="cell">
          <div class="k">Vendor</div>
          <div class="v">H2O Waterproofing</div>
        </div>
        <div class="cell">
          <div class="k">Status</div>
          <div class="v">Open — Awaiting Vendor</div>
        </div>
        <div class="cell">
          <div class="k">Captured</div>
          <div class="v">2026-04-16</div>
        </div>
      </div>

      <!-- WHY IT MATTERS -->
      <h2 class="section-title">Why <span>this matters</span></h2>
      <div class="why-card">
        <p>H2O Waterproofing is the third-party treatment partner behind the waterproofing claim used on FlexPro Armor bucket covers. The phrase <em>"lifetime warranty"</em> means different things to different vendors — and Norris Utilities® cannot honor or market a warranty we have not seen in writing. We need the formal coverage definition documented and on file before it appears in a customer-facing quote, the line card, or any sales conversation.</p>
      </div>

      <!-- QUESTIONS -->
      <h2 class="section-title">Questions to <span>ask H2O Waterproofing</span></h2>
      <ol class="question-list">
        <li><strong>Lifetime of what, exactly?</strong> Lifetime of the product, the original purchaser, the bucket, or the treatment application?</li>
        <li><strong>What is covered?</strong> Failure of the waterproofing layer only, or fabric/seam/stitching as well?</li>
        <li><strong>What is excluded?</strong> Abrasion, cuts, UV, dielectric exposure, modifications, off-label use, hot work near the cover?</li>
        <li><strong>Who is the warranty assigned to?</strong> Norris Utilities® as the dealer, the end-user lineman/utility, or both? Is it transferable on resale?</li>
        <li><strong>Claim process</strong> — Where do failures get sent (to H2O, to Norris first, or to FlexPro fabricator)? Who pays freight in/out? Repair vs. replacement decision rule?</li>
        <li><strong>Turnaround commitment</strong> — Stated SLA from receipt of failed unit to repair/replacement back in customer's hands.</li>
        <li><strong>Inspection / care requirements</strong> — Anything the customer must do (cleaning, storage, periodic inspection) to keep the warranty valid?</li>
        <li><strong>Documentation</strong> — Can H2O provide a signed PDF warranty statement on H2O letterhead that we can attach to quotes and store in the dealer packet?</li>
        <li><strong>Marketing language we may use</strong> — What exact phrasing will H2O stand behind in writing (so we don't overstate or understate)?</li>
        <li><strong>Effective date</strong> — Does coverage start on H2O treatment date, ship date from FlexPro, or customer receipt? Do prior-shipped covers fall under this same definition?</li>
      </ol>

      <!-- CONTACT -->
      <h2 class="section-title">Vendor <span>contact</span></h2>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="label">Vendor</div>
          <div class="name">H2O Waterproofing</div>
          <div class="meta">Treatment partner for FlexPro Armor bucket cover waterproofing layer. Confirm primary point of contact, direct line, and email before sending the request.</div>
        </div>
        <div class="contact-card">
          <div class="label">Internal Owner</div>
          <div class="name">Aaron C. Norris</div>
          <div class="meta">
            <a href="tel:2055001343">205-500-1343</a><br>
            <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a>
          </div>
        </div>
      </div>

      <!-- OUTREACH DRAFT -->
      <h2 class="section-title">Draft <span>outreach (email)</span></h2>
      <div class="outreach-block">
        <div class="meta">
          <strong>To:</strong> H2O Waterproofing — primary contact<br>
          <strong>From:</strong> acnorris@norrisutilities.com<br>
          <strong>Subject:</strong> Lifetime Warranty — written definition for our customer file
        </div>
        <div class="body">Name —

          Hope y'all are doing well. We are formalizing the warranty section of the FlexPro Armor dealer packet and the line card, and I need the H2O Waterproofing lifetime warranty defined in writing before we put it in front of utility customers.

          Could you send over a one-page warranty statement on H2O letterhead that covers:

          • What "lifetime" means (product life, original purchaser, treatment, etc.)
          • What is covered and what is excluded
          • Who the warranty is assigned to and whether it transfers
          • Claim process, freight responsibility, and turnaround commitment
          • Any care or inspection requirements the customer must follow
          • The exact phrasing you want us to use in our quotes and marketing

          Once I have that, we can quote the warranty with confidence and stop paraphrasing. It is going to be advantageous for both of us — utilities take the warranty conversation seriously, and a clean written scope will help us earn the business.

          Sincerely,

          Aaron C. Norris
          Founder &amp; CEO
          Norris Utilities, LLC
          Cell: 205-500-1343
          acnorris@norrisutilities.com
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="section-title">Completion <span>checklist</span></h2>
      <ul class="checklist">
        <li>Confirmed primary H2O Waterproofing contact (name, email, phone) in the contact file.</li>
        <li>Sent the written request above; logged the send date.</li>
        <li>Received signed PDF warranty statement on H2O letterhead.</li>
        <li>Saved the PDF to the dealer packet folder and attached to FlexPro Armor product record.</li>
        <li>Updated line card and quote template language to match exactly what H2O will stand behind.</li>
        <li>Briefed Caroline Butler so she can answer customer warranty questions consistently.</li>
        <li>Closed the reMarkable action item.</li>
      </ul>

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