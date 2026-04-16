<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-action-red: #C8102E;
      --nu-action-amber: #F39200;
      --nu-action-green: #2E8B3D;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 980px;
      margin: 0 auto;
      padding: 50px 40px 70px;
    }

    /* ══ ACTION HEADER ══ */
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }
    .action-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .action-pill.priority {
      background: var(--nu-action-amber);
    }
    .action-pill.source {
      background: var(--nu-navy);
    }
    .action-date {
      font-size: 0.85rem;
      color: #666;
      letter-spacing: 0.04em;
    }

    .action-title {
      font-weight: 900;
      font-size: 2.1rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .action-title span {
      color: var(--nu-blue);
    }
    .action-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 32px;
      line-height: 1.55;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-top: 36px;
      margin-bottom: 16px;
      color: var(--nu-dark-text);
      border-bottom: 2px solid var(--nu-cyan);
      padding-bottom: 8px;
    }
    .nu-section-title span:first-child {
      color: var(--nu-blue);
    }

    /* ══ CARD ══ */
    .info-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 18px;
    }
    .info-card.amber {
      border-left-color: var(--nu-action-amber);
      background: #FFFBF3;
    }
    .info-card.green {
      border-left-color: var(--nu-action-green);
      background: #F4FBF5;
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .info-card p { margin-bottom: 8px; }
    .info-card p:last-child { margin-bottom: 0; }

    /* ══ DETAIL GRID ══ */
    .detail-grid {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 12px 24px;
      background: var(--nu-light-gray);
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 28px;
    }
    .detail-grid dt {
      font-weight: 700;
      color: var(--nu-blue);
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .detail-grid dd {
      color: var(--nu-dark-text);
      font-size: 0.96rem;
    }

    /* ══ QUESTION LIST ══ */
    .question-list {
      list-style: none;
      counter-reset: q;
    }
    .question-list li {
      counter-increment: q;
      position: relative;
      padding: 14px 16px 14px 56px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.97rem;
      line-height: 1.5;
    }
    .question-list li::before {
      content: counter(q);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.85rem;
    }

    /* ══ EMAIL DRAFT ══ */
    .email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.96rem;
      line-height: 1.65;
      color: var(--nu-dark-text);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .email-draft .email-headers {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: #666;
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 14px;
      margin-bottom: 20px;
    }
    .email-draft .email-headers div { margin-bottom: 4px; }
    .email-draft .email-headers strong {
      color: var(--nu-dark-text);
      display: inline-block;
      width: 70px;
    }
    .email-draft p {
      margin-bottom: 14px;
      text-indent: 2em;
    }
    .email-draft p.no-indent { text-indent: 0; }
    .email-draft ul {
      list-style: none;
      margin-left: 2em;
      margin-bottom: 14px;
    }
    .email-draft ul li {
      padding-left: 18px;
      position: relative;
      margin-bottom: 4px;
    }
    .email-draft ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 900;
    }
    .email-draft .signature {
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid var(--nu-medium-gray);
      font-family: var(--font-primary);
      font-size: 0.88rem;
      color: #555;
      line-height: 1.5;
      text-indent: 0;
    }
    .email-draft .signature strong {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ NEXT STEPS ══ */
    .next-steps {
      background: linear-gradient(135deg, #F0F4FF 0%, #E8F8FF 100%);
      border-radius: 8px;
      padding: 24px 28px;
      border-left: 4px solid var(--nu-cyan);
    }
    .next-steps ol {
      margin-left: 22px;
    }
    .next-steps ol li {
      margin-bottom: 10px;
      font-size: 0.97rem;
      padding-left: 8px;
    }
    .next-steps ol li strong {
      color: var(--nu-blue);
    }

    /* ══ BUTTONS ══ */
    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      color: var(--nu-blue);
      padding: 12px 24px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
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
      font-size: 0.95rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover {
      text-decoration: underline;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 50px; }
      .action-title { font-size: 1.55rem; }
      .detail-grid {
        grid-template-columns: 1fr;
        gap: 6px;
        padding: 20px;
      }
      .detail-grid dt { margin-top: 8px; }
      .email-draft { padding: 20px; font-size: 0.92rem; }
      .email-draft p { text-indent: 1em; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header {
        background: var(--nu-blue) !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .button-row { display: none; }
      .info-card, .email-draft { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 78 L50 95 L45 78 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION HEADER -->
      <div class="action-meta">
        <span class="action-pill source">reMarkable Action</span>
        <span class="action-pill priority">Priority: Vendor Follow-Up</span>
        <span class="action-pill">Task #210</span>
        <span class="action-date">Captured: 2026-04-16</span>
      </div>

      <h1 class="action-title">
        Get the <span>Lifetime Warranty</span> Coverage Definition from H2O Waterproofing
      </h1>
      <p class="action-subtitle">
        Action item from Aaron's reMarkable. Need a written definition of what H2O Waterproofing
        considers covered (and excluded) under their "lifetime warranty" — so it can be passed
        through accurately to FlexPro Armor customers and referenced on dealer/distributor agreements.
      </p>

      <!-- WHY IT MATTERS -->
      <h2 class="nu-section-title"><span>Why</span> This Matters</h2>
      <div class="info-card amber">
        <h3>The Problem with "Lifetime"</h3>
        <p>
          "Lifetime warranty" without a written definition is one of the most-disputed terms
          in product warranty law. Whose lifetime? The original buyer's, the product's, or
          the manufacturer's? What's actually covered — material defects only, or workmanship,
          UV degradation, abrasion, repair labor, freight?
        </p>
        <p>
          Norris Utilities® passes H2O Waterproofing's coverage along to FlexPro Armor customers
          when relevant. If a customer files a claim and the answer comes back narrower than
          expected, it lands on us — not on H2O. We need their language in writing before
          the next claim, not after.
        </p>
      </div>

      <!-- DETAILS -->
      <h2 class="nu-section-title"><span>Action</span> Details</h2>
      <dl class="detail-grid">
        <dt>Action Item</dt>
        <dd>Get definition of lifetime warranty coverage from H2O Waterproofing</dd>

        <dt>Source</dt>
        <dd>reMarkable handwritten note — Aaron C. Norris</dd>

        <dt>Owner</dt>
        <dd>Aaron C. Norris (CEO)</dd>

        <dt>Vendor Contact</dt>
        <dd>H2O Waterproofing — primary vendor rep (request name + direct line if not on file)</dd>

        <dt>Deliverable</dt>
        <dd>Written warranty terms (PDF or signed letter) on H2O Waterproofing letterhead</dd>

        <dt>Target Date</dt>
        <dd>Within 10 business days of vendor request</dd>

        <dt>Storage Location</dt>
        <dd>~/norris-ops/internal/vendor-warranties/h2o-waterproofing-warranty.pdf</dd>
      </dl>

      <!-- QUESTIONS TO ASK -->
      <h2 class="nu-section-title"><span>Questions</span> to Ask H2O Waterproofing</h2>
      <p style="margin-bottom: 16px; color: #555;">
        Use the following question set when speaking or writing to H2O Waterproofing.
        Get every answer in writing — verbal warranty terms are not enforceable in a dispute.
      </p>
      <ol class="question-list">
        <li><strong>Whose lifetime?</strong> Is the warranty the lifetime of the original purchaser, the lifetime of the product as installed, or the lifetime of H2O Waterproofing as a company?</li>
        <li><strong>What products are covered?</strong> Confirm by SKU or product family — does it apply to every H2O product Norris Utilities® resells, or only specific lines?</li>
        <li><strong>What failures are covered?</strong> Material defects only? Workmanship? Adhesion failure? UV degradation? Seam failure? Coating delamination?</li>
        <li><strong>What is explicitly excluded?</strong> Abrasion, impact damage, chemical exposure, improper installation, modification, normal wear, cosmetic blemishes?</li>
        <li><strong>Is the warranty transferable?</strong> If the end user resells the equipment the product is installed on, does coverage transfer?</li>
        <li><strong>What is the remedy?</strong> Repair, replacement, refund, or credit? Who pays freight on a claim — both directions?</li>
        <li><strong>What is the claim process?</strong> Who does the customer (or Norris Utilities®) contact? What documentation is required — photos, proof of purchase, install date?</li>
        <li><strong>Pro-rata vs. full?</strong> Is coverage 100% for the product's life, or does it pro-rate after a certain number of years?</li>
        <li><strong>Registration required?</strong> Must the end user register the product within X days, or is purchase proof enough?</li>
        <li><strong>Does Norris Utilities® have authority to honor claims directly,</strong> then bill back to H2O — or must every claim route through H2O first?</li>
      </ol>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title"><span>Draft</span> Email — Ready to Send</h2>
      <div class="email-draft">
        <div class="email-headers">
          <div><strong>To:</strong> [H2O Waterproofing primary contact]</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Request — Written definition of H2O Waterproofing lifetime warranty</div>
        </div>

        <p class="no-indent">[Name] —</p>

        <p>
          I need to get H2O Waterproofing's lifetime warranty terms into writing so I can
          pass them along to my customers accurately and back them up on every claim. Right
          now I'm working from verbal understanding, and that isn't fair to anyone if a
          dispute ever comes up.
        </p>

        <p>
          Could y'all send me a one-page written definition — on H2O Waterproofing letterhead
          or as an official PDF — that covers the following:
        </p>

        <ul>
          <li>Whose lifetime the warranty refers to (original purchaser, product, or company)</li>
          <li>Which products and SKUs are covered</li>
          <li>What failures are included (defects, workmanship, adhesion, UV, etc.)</li>
          <li>What is explicitly excluded</li>
          <li>Whether the warranty is transferable to a second owner</li>
          <li>The remedy (repair / replacement / credit) and who pays freight both ways</li>
          <li>The claim process and required documentation</li>
          <li>Whether Norris Utilities® has authority to honor and bill back, or if every claim routes through H2O first</li>
        </ul>

        <p>
          Whatever the answers are, I want them clearly stated so I can build them into our
          dealer and distributor agreements and quote them confidently. The cleaner this is
          on the front end, the fewer surprises for both of us on the back end.
        </p>

        <p>
          If a phone call is easier first, I'm reachable at 205-500-1343. I'd still need the
          terms in writing afterward to keep on file.
        </p>

        <p class="no-indent">Sincerely,</p>
        <p class="no-indent" style="text-indent: 2em;">Aaron C. Norris</p>

        <div class="signature">
          <strong>Aaron C. Norris</strong><br>
          Founder &amp; CEO<br>
          Norris Utilities®, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com<br>
          www.NorrisUtilities.com
        </div>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title"><span>Next</span> Steps</h2>
      <div class="next-steps">
        <ol>
          <li><strong>Send the email above</strong> to H2O Waterproofing's primary contact today. CC Caroline Butler so she can track follow-up.</li>
          <li><strong>Set a 5-business-day reminder</strong> in Telegram. If no response by then, place a phone call to 205-500-1343-style follow-up.</li>
          <li><strong>When the written warranty arrives,</strong> save the PDF to <code>~/norris-ops/internal/vendor-warranties/h2o-waterproofing-warranty.pdf</code>, commit, and push to GitHub.</li>
          <li><strong>Update FlexPro Armor customer-facing materials</strong> only after the H2O warranty is on file — line card, spec sheets, and dealer agreements should all reference the official terms verbatim.</li>
          <li><strong>Add the warranty terms</strong> to the standard Norris Utilities® distributor agreement template so every new dealer signs against the same documented coverage.</li>
        </ol>
        <div class="button-row">
          <a href="mailto:?subject=Request%20%E2%80%94%20Written%20definition%20of%20H2O%20Waterproofing%20lifetime%20warranty" class="nu-btn-primary">Open Draft in Email</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call Aaron: 205-500-1343</a>
        </div>
      </div>

      <!-- COMPLETION -->
      <h2 class="nu-section-title"><span>Mark</span> Complete When</h2>
      <div class="info-card green">
        <h3>Definition of "Done"</h3>
        <p>
          ✓ Written warranty terms received from H2O Waterproofing on official letterhead or PDF<br>
          ✓ Document saved to <code>~/norris-ops/internal/vendor-warranties/</code><br>
          ✓ Document committed and pushed to GitHub (ops.norrisutilities.com)<br>
          ✓ FlexPro Armor customer-facing materials updated to reference the written terms verbatim<br>
          ✓ Caroline Butler notified that warranty language is now on file for use in customer quotes
        </p>
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