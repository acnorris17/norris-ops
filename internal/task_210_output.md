<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-alert: #B8860B;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.03em;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(0,0,255,0.015) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      opacity: 0.7;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-main-wrap {
      max-width: 960px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* STATUS STRIP */
    .status-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 32px;
      padding-bottom: 22px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill-open {
      background: rgba(184, 134, 11, 0.12);
      color: var(--nu-alert);
      border: 1px solid rgba(184, 134, 11, 0.3);
    }
    .pill-priority {
      background: rgba(0, 0, 255, 0.08);
      color: var(--nu-blue);
      border: 1px solid rgba(0, 0, 255, 0.2);
    }
    .pill-source {
      background: var(--nu-light-gray);
      color: var(--nu-dark-text);
      border: 1px solid var(--nu-medium-gray);
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 14px;
      line-height: 1.25;
    }
    .nu-section-title .accent { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .action-headline {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .action-headline .highlight { color: var(--nu-blue); }
    .action-sub {
      color: var(--nu-body-text);
      font-size: 1.05rem;
      font-weight: 400;
      margin-bottom: 36px;
      max-width: 720px;
    }

    /* SECTION BLOCK */
    .section-block { margin-bottom: 38px; }

    /* CALLOUT CARD */
    .callout {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #ffffff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      margin-bottom: 20px;
    }
    .callout-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .callout-body {
      color: var(--nu-dark-text);
      font-size: 1rem;
      line-height: 1.65;
    }

    /* QUESTION LIST */
    .q-list {
      list-style: none;
      counter-reset: q-counter;
      padding: 0;
    }
    .q-list li {
      counter-increment: q-counter;
      position: relative;
      padding: 16px 20px 16px 58px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .q-list li:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
    .q-list li::before {
      content: counter(q-counter);
      position: absolute;
      left: 16px;
      top: 14px;
      width: 28px;
      height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 900;
    }
    .q-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .q-list li span {
      color: var(--nu-body-text);
      font-size: 0.94rem;
    }

    /* DEFINITION GRID */
    .def-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .def-item {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .def-item h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 8px;
    }
    .def-item p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* CONTACT CARD */
    .contact-card {
      background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .contact-card .field { border-left: 2px solid var(--nu-cyan); padding-left: 14px; }
    .contact-card .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .contact-card .value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* NEXT STEPS */
    .next-steps {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin-top: 8px;
    }
    .next-steps h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .next-steps ol {
      padding-left: 20px;
      color: rgba(255,255,255,0.92);
    }
    .next-steps ol li {
      margin-bottom: 8px;
      font-size: 0.98rem;
      line-height: 1.6;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-main-wrap { padding: 40px 22px 56px; }
      .action-headline { font-size: 1.55rem; }
      .contact-card { grid-template-columns: 1fr; }
      .q-list li { padding-left: 52px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-main-wrap">

      <!-- STATUS -->
      <div class="status-strip">
        <span class="status-pill pill-open">● Open Action Item</span>
        <span class="status-pill pill-priority">Priority: Pre-Sale Clarification</span>
        <span class="status-pill pill-source">Source: reMarkable Capture</span>
      </div>

      <!-- HEADLINE -->
      <h1 class="action-headline">
        Get Definition of <span class="highlight">Lifetime Warranty</span> Coverage from H2O Waterproofing
      </h1>
      <p class="action-sub">
        Before quoting H2O Waterproofing products to customers or referencing "lifetime warranty" in any
        FlexPro Armor related communication, obtain the written definition of what "lifetime" covers —
        duration, scope, exclusions, transferability, and claim process — directly from H2O.
      </p>

      <!-- WHY IT MATTERS -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="accent">Why</span> <span class="rest">This Matters</span></h2>
        <div class="callout">
          <div class="callout-label">Commercial Risk</div>
          <div class="callout-body">
            "Lifetime warranty" means different things to different manufacturers. Without a written
            definition on file, Norris Utilities® cannot accurately represent coverage to customers,
            dealers, or distributors. A mismatch between what the customer hears and what H2O actually
            honors creates warranty-claim friction that falls on Norris Utilities® to resolve — which
            undermines the Legacy of Commitment® promise.
          </div>
        </div>
      </div>

      <!-- QUESTIONS TO ASK -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="accent">Questions</span> <span class="rest">to Send H2O Waterproofing</span></h2>
        <ol class="q-list">
          <li>
            <strong>Definition of "Lifetime"</strong>
            <span>Is "lifetime" defined as the original purchaser's lifetime, the product's service life,
              or a fixed term (e.g., 25 years)? Please send the written wording.</span>
          </li>
          <li>
            <strong>Scope of Coverage</strong>
            <span>What defects are covered — materials, workmanship, seam failure, coating adhesion,
              UV degradation? What is explicitly excluded?</span>
          </li>
          <li>
            <strong>Transferability</strong>
            <span>Does the warranty transfer if the equipment (bucket, boom, truck) is sold to a
              second owner? Does it transfer to dealers or end-users of a distributor?</span>
          </li>
          <li>
            <strong>Claim Process</strong>
            <span>What documentation is required to file a claim — proof of purchase, photos,
              installation records? Who is the point of contact and what is the turn time?</span>
          </li>
          <li>
            <strong>Remedy</strong>
            <span>Is the remedy repair, replacement, credit, or refund? Is labor covered or
              materials only? Who pays freight on a warranty return?</span>
          </li>
          <li>
            <strong>Registration Requirement</strong>
            <span>Does the warranty require product registration within a window (e.g., 30 days
              from purchase) to remain valid?</span>
          </li>
          <li>
            <strong>Written Document</strong>
            <span>Request the official PDF warranty certificate or terms-and-conditions sheet
              for our files and for inclusion in customer quotes.</span>
          </li>
        </ol>
      </div>

      <!-- WHAT WE NEED IN WRITING -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="accent">What</span> <span class="rest">We Need in Writing</span></h2>
        <div class="def-grid">
          <div class="def-item">
            <h4>Duration</h4>
            <p>Exact length of coverage and the event that triggers the clock (ship date, install date, purchase date).</p>
          </div>
          <div class="def-item">
            <h4>Covered Failures</h4>
            <p>Specific failure modes covered and a clear list of exclusions (misuse, chemical exposure, impact damage, etc.).</p>
          </div>
          <div class="def-item">
            <h4>Transferability</h4>
            <p>Whether coverage follows the product to subsequent owners or remains with the original purchaser only.</p>
          </div>
          <div class="def-item">
            <h4>Claim Procedure</h4>
            <p>Step-by-step process, required documentation, RMA requirements, and H2O point of contact name and email.</p>
          </div>
          <div class="def-item">
            <h4>Remedy &amp; Freight</h4>
            <p>Whether H2O repairs, replaces, or credits — and who pays inbound/outbound freight on warranty returns.</p>
          </div>
          <div class="def-item">
            <h4>Written Certificate</h4>
            <p>Signed PDF warranty document on H2O letterhead that can be attached to quotes and provided to end users.</p>
          </div>
        </div>
      </div>

      <!-- CONTACT TO REACH -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="accent">Contact</span> <span class="rest">Information</span></h2>
        <div class="contact-card">
          <div class="field">
            <div class="label">Supplier</div>
            <div class="value">H2O Waterproofing</div>
          </div>
          <div class="field">
            <div class="label">Requester</div>
            <div class="value">Aaron C. Norris, Founder &amp; CEO</div>
          </div>
          <div class="field">
            <div class="label">Company</div>
            <div class="value">Norris Utilities®, LLC</div>
          </div>
          <div class="field">
            <div class="label">Direct Line</div>
            <div class="value">205-500-1343</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">acnorris@norrisutilities.com</div>
          </div>
          <div class="field">
            <div class="label">Reference</div>
            <div class="value">Distributor / Dealer Due Diligence</div>
          </div>
        </div>
      </div>

      <!-- NEXT STEPS -->
      <div class="section-block">
        <h2 class="nu-section-title"><span class="accent">Next</span> <span class="rest">Steps</span></h2>
        <div class="next-steps">
          <h3>Action Sequence</h3>
          <ol>
            <li>Send the seven questions above to H2O Waterproofing's primary contact via email.</li>
            <li>Request the signed PDF warranty certificate on H2O letterhead.</li>
            <li>Save response in Norris Utilities® supplier file: <em>/suppliers/h2o-waterproofing/warranty/</em>.</li>
            <li>Update internal quote template and customer-facing product sheets with the exact language H2O provides — no paraphrasing.</li>
            <li>Flag any coverage gap that Norris Utilities® would be expected to bridge before advancing further sales.</li>
          </ol>
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