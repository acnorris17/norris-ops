<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bucket Cover Modification & Return Ship — No Charge — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warning: #B8860B;
      --nu-success: #1B5E20;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.4rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 20px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-size: 0.75rem;
      font-weight: 700;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* MAIN */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      max-width: 1100px;
      margin: 0 auto;
      box-shadow: 0 4px 30px rgba(0,0,0,0.06);
    }
    .nu-content-inner { padding: 50px 50px 60px; position: relative; z-index: 1; }

    /* TITLE BLOCK */
    .nu-action-title {
      border-left: 6px solid var(--nu-cyan);
      padding: 4px 0 4px 20px;
      margin-bottom: 30px;
    }
    .nu-action-title .eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-action-title h1 {
      font-weight: 900;
      font-size: 2.1rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
    }
    .nu-action-title h1 span { color: var(--nu-blue); }

    /* SECTION HEADERS */
    .nu-section { margin-bottom: 36px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span:first-child { color: var(--nu-blue); }

    /* DECISION CALLOUT */
    .nu-decision {
      background: linear-gradient(135deg, rgba(6,208,255,0.06) 0%, rgba(0,0,255,0.04) 100%);
      border: 1px solid var(--nu-cyan);
      border-left: 6px solid var(--nu-blue);
      padding: 22px 28px;
      border-radius: 6px;
      margin-bottom: 30px;
    }
    .nu-decision-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-decision-text {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .nu-decision-sub {
      margin-top: 8px;
      font-size: 0.95rem;
      font-weight: 400;
      color: var(--nu-body-text);
    }

    /* DETAIL GRID */
    .nu-detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 8px;
    }
    .nu-detail-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-detail-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-detail-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-detail-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-detail-value.muted { font-weight: 400; color: var(--nu-body-text); }

    /* CHECKLIST */
    .nu-checklist { list-style: none; padding: 0; }
    .nu-checklist li {
      position: relative;
      padding: 14px 16px 14px 52px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 4px solid var(--nu-blue);
      font-size: 0.98rem;
    }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* RULES */
    .nu-rule-list { list-style: none; padding: 0; }
    .nu-rule-list li {
      padding: 10px 0 10px 28px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-rule-list li:last-child { border-bottom: none; }
    .nu-rule-list li::before {
      content: '•';
      position: absolute;
      left: 8px; top: 8px;
      color: var(--nu-cyan);
      font-size: 1.4rem;
      line-height: 1;
    }

    /* WARNING BANNER */
    .nu-warning-banner {
      background: #FFF8E1;
      border: 1px solid #E6C76C;
      border-left: 6px solid var(--nu-warning);
      padding: 16px 22px;
      border-radius: 6px;
      margin-bottom: 24px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .nu-warning-icon {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-warning);
      color: var(--nu-white);
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Georgia, serif;
      font-style: italic;
    }
    .nu-warning-banner p {
      font-size: 0.95rem;
      color: #5C4A12;
    }
    .nu-warning-banner p strong { color: #3D3008; }

    /* COMMS BLOCK */
    .nu-email-template {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.97rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .nu-email-meta {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: var(--nu-body-text);
      padding-bottom: 14px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-meta strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-blue);
    }
    .nu-email-body p { margin-bottom: 14px; padding-left: 1.2em; }
    .nu-email-body p:first-child { padding-left: 0; }
    .nu-email-bullet { padding-left: 2em !important; }
    .nu-email-sig { margin-top: 20px; }
    .nu-email-sig .name { font-weight: 700; }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 40px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 14px; top: 8px; bottom: 8px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-step {
      position: relative;
      margin-bottom: 22px;
    }
    .nu-timeline-step::before {
      content: '';
      position: absolute;
      left: -32px; top: 4px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      box-shadow: 0 0 0 3px var(--nu-white);
    }
    .nu-timeline-step .step-when {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .nu-timeline-step .step-what {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-timeline-step .step-detail {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 70%, #0a0e5c 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 30px;
      text-align: center;
      max-width: 1100px;
      margin: 0 auto;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 16px auto;
      opacity: 0.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.1rem; }
      .nu-content-inner { padding: 30px 24px 40px; }
      .nu-action-title h1 { font-size: 1.5rem; }
      .nu-section-title { font-size: 1.2rem; }
      .nu-decision-text { font-size: 1rem; }
      .nu-email-template { padding: 18px 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-content-area { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
      <div class="nu-doc-label">Service Action — Internal</div>
    </div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-content-inner">

      <div class="nu-action-title">
        <div class="eyebrow">reMarkable Action Item</div>
        <h1><span>Modify</span> Bucket Cover &amp; Return Ship — No Additional Charge</h1>
      </div>

      <div class="nu-decision">
        <div class="nu-decision-label">Decision Locked by Aaron</div>
        <div class="nu-decision-text">Modify the previously shipped FlexPro Armor bucket cover, return ship to the customer, and DO NOT invoice or charge the customer a second time.</div>
        <div class="nu-decision-sub">This is a service-recovery action. The original sale stands as invoiced; the modification and return shipping are absorbed by Norris Utilities®.</div>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Order</span> <span>Reference</span></div>
        <div class="nu-detail-grid">
          <div class="nu-detail-card">
            <div class="nu-detail-label">Product</div>
            <div class="nu-detail-value">FlexPro Armor Bucket Cover</div>
          </div>
          <div class="nu-detail-card">
            <div class="nu-detail-label">Status of Original Invoice</div>
            <div class="nu-detail-value">Stands — leave as invoiced</div>
          </div>
          <div class="nu-detail-card">
            <div class="nu-detail-label">Charge for Modification</div>
            <div class="nu-detail-value">$0.00 — no charge</div>
          </div>
          <div class="nu-detail-card">
            <div class="nu-detail-label">Return Shipping</div>
            <div class="nu-detail-value">Norris Utilities® pays</div>
          </div>
          <div class="nu-detail-card">
            <div class="nu-detail-label">Action Source</div>
            <div class="nu-detail-value muted">reMarkable note — captured by Aaron</div>
          </div>
          <div class="nu-detail-card">
            <div class="nu-detail-label">Owner</div>
            <div class="nu-detail-value">Aaron C. Norris</div>
          </div>
        </div>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Execution</span> <span>Checklist</span></div>
        <ul class="nu-checklist">
          <li><strong>Confirm receipt</strong> — verify the cover has arrived back at the FlexPro Armor production location and matches the original SKU on file.</li>
          <li><strong>Document modification</strong> — photograph before, in-progress, and after; note the exact change to be made and the dimensional impact.</li>
          <li><strong>Perform the modification</strong> — reuse the customer's existing cover (no new build); preserve original stitching and reinforcement where possible.</li>
          <li><strong>Quality check</strong> — verify fitment against the customer's bucket dimensions on record before re-packaging.</li>
          <li><strong>Re-ship to customer</strong> — Norris Utilities® pays freight; tracking number captured in QuickBooks notes against the original invoice.</li>
          <li><strong>Do NOT create a new invoice</strong> — no second sales order, no second charge, no shipping line item billed to the customer.</li>
          <li><strong>Log internally</strong> — add a service-action entry referencing the original invoice number and total cost absorbed (labor + freight).</li>
          <li><strong>Close-out note</strong> — short follow-up email to the customer once delivered, confirming no additional charge.</li>
        </ul>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Internal</span> <span>Rules That Apply</span></div>
        <ul class="nu-rule-list">
          <li><strong>No double-charge.</strong> The original invoice is the only charge associated with this cover; modification and return shipping are at Norris Utilities® cost.</li>
          <li><strong>FlexPro Armor</strong> — never written as "FlexPro Armor Guard" and never carries the ® symbol; it is not a registered trademark.</li>
          <li><strong>Service action over rebuild.</strong> Modify the existing cover; do not produce a new SKU and pull from inventory.</li>
          <li><strong>Caroline Butler (CB)</strong> handles customer-facing confirmation only after Aaron's review.</li>
          <li><strong>QuickBooks treatment</strong> — note absorbed cost against the original invoice; do not generate a second sales order or credit memo unless Aaron requests it.</li>
          <li><strong>Tracking</strong> — return shipment tracking number must be saved with the original order record.</li>
        </ul>
      </div>

      <div class="nu-warning-banner">
        <div class="nu-warning-icon">!</div>
        <p><strong>Critical guardrail:</strong> If anyone on the team — including QuickBooks automation, Caroline, or a freight workflow — attempts to generate a new invoice or charge the customer for the modified cover or its return freight, stop immediately and route to Aaron. The customer is to be made whole at zero additional cost.</p>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Timeline</span> <span>(Target)</span></div>
        <div class="nu-timeline">
          <div class="nu-timeline-step">
            <div class="step-when">Step 1 — On Receipt</div>
            <div class="step-what">Cover arrives back at production</div>
            <div class="step-detail">Inspect, photograph, match to original invoice on file. Confirm SKU and customer.</div>
          </div>
          <div class="nu-timeline-step">
            <div class="step-when">Step 2 — Modification</div>
            <div class="step-what">FlexPro Armor performs the modification</div>
            <div class="step-detail">Handmade USA work consistent with original build standard. Reuse the existing cover; do not pull a replacement.</div>
          </div>
          <div class="nu-timeline-step">
            <div class="step-when">Step 3 — QC &amp; Pack</div>
            <div class="step-what">Quality check against customer's bucket dimensions</div>
            <div class="step-detail">Verify fit before re-packaging. Photograph the finished cover for the file.</div>
          </div>
          <div class="nu-timeline-step">
            <div class="step-when">Step 4 — Return Ship</div>
            <div class="step-what">Norris Utilities® pays freight back to the customer</div>
            <div class="step-detail">Capture tracking number; attach to the original invoice in QuickBooks notes. No customer-facing freight line.</div>
          </div>
          <div class="nu-timeline-step">
            <div class="step-when">Step 5 — Customer Close-out</div>
            <div class="step-what">Aaron sends short confirmation email</div>
            <div class="step-detail">Confirms delivery, confirms no additional charge, asks for fitment confirmation once installed.</div>
          </div>
        </div>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Customer</span> <span>Close-out Email — Draft</span></div>
        <div class="nu-email-template">
          <div class="nu-email-meta">
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Your bucket cover — modified and on its way back</div>
          </div>
          <div class="nu-email-body">
            <p>[First Name] —</p>
            <p>Your FlexPro Armor cover has been modified and is shipping back to you today. Tracking is attached.</p>
            <p>A few things worth saying directly:</p>
            <p class="nu-email-bullet">• There is no additional charge. Your original invoice stands as the only charge for this cover.</p>
            <p class="nu-email-bullet">• Norris Utilities® is covering the modification labor and the return freight.</p>
            <p class="nu-email-bullet">• Once it lands and you have a chance to set it on the bucket, send me a quick line confirming the fit. If anything is off, we make it right.</p>
            <p>I appreciate your patience while we got this dialed in. That is the standard we hold ourselves to.</p>
            <div class="nu-email-sig">
              <p>Sincerely,</p>
              <p class="name">Aaron C. Norris</p>
              <p>Founder &amp; CEO, Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="nu-section">
        <div class="nu-section-title"><span>Why</span> <span>This Matters</span></div>
        <ul class="nu-rule-list">
          <li>Norris Utilities® is built on <em>A Legacy of Commitment®</em>. Service recovery without re-charging is exactly that commitment in practice.</li>
          <li>FlexPro Armor is a 50% margin product; the absorbed labor and freight on a single recovery is a fraction of customer lifetime value.</li>
          <li>Customers tell other customers. A rapid, no-charge modification is the kind of story that brings the next order in without a sales call.</li>
          <li>Internal precedent: this becomes the template for any future "modify-and-return-no-charge" action, so we want it documented and clean.</li>
        </ul>
      </div>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>