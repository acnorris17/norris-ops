Producing the complete HTML file for this action item. The task runner saves output to the task output file.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
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
      --nu-amber: #F59E0B;
      --nu-red: #DC2626;
      --nu-green: #059669;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
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
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
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
      margin-bottom: 20px;
      margin-right: -0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ WHITE ASYMMETRIC CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 52px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 52px; display: block; }

    /* ══ CONTENT AREA with ghost phoenix watermark ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      min-height: 400px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 800px; height: 800px;
      background-image: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 65%);
      opacity: 0.7;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    /* ══ ACTION BANNER ══ */
    .nu-action-banner {
      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
      border-left: 6px solid var(--nu-amber);
      border-radius: 8px;
      padding: 22px 28px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .nu-action-banner-icon {
      font-size: 2rem;
      line-height: 1;
    }
    .nu-action-banner-content h2 {
      font-weight: 900;
      color: #92400E;
      font-size: 1.1rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-action-banner-content p {
      color: #78350F;
      font-size: 0.95rem;
      font-weight: 400;
    }

    /* ══ SECTION TITLE ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .lead {
      color: #0033CC;
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ CARDS ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }
    .nu-card h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.15rem;
      margin-bottom: 14px;
    }
    .nu-card p {
      color: var(--nu-body-text);
      font-size: 0.98rem;
      margin-bottom: 12px;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card ul li {
      padding: 8px 0 8px 22px;
      position: relative;
      color: var(--nu-body-text);
      font-size: 0.98rem;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-card ul li:last-child { border-bottom: none; }
    .nu-card ul li::before {
      content: '•';
      position: absolute;
      left: 6px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* ══ GRID ══ */
    .nu-grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }

    /* ══ QUESTION LIST ══ */
    .nu-questions {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 32px;
    }
    .nu-question-item {
      padding: 16px 0 16px 60px;
      position: relative;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-question-item:last-child { border-bottom: none; }
    .nu-question-num {
      position: absolute;
      left: 0; top: 16px;
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0066EE 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .nu-question-text {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-question-note {
      font-size: 0.9rem;
      color: #64748B;
      font-style: italic;
    }

    /* ══ CHEVRON BADGES ══ */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 10px 28px 10px 18px;
      margin: 0 8px 8px 0;
      clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%);
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.02em;
    }

    /* ══ CONTACT CARD ══ */
    .nu-contact-card {
      background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
      border: 2px solid #BFDBFE;
      border-radius: 10px;
      padding: 28px 30px;
      margin-bottom: 32px;
    }
    .nu-contact-card h3 {
      color: #1E40AF;
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 14px;
    }
    .nu-contact-row {
      display: grid;
      grid-template-columns: 140px 1fr;
      padding: 8px 0;
      border-bottom: 1px solid rgba(30, 64, 175, 0.1);
    }
    .nu-contact-row:last-child { border-bottom: none; }
    .nu-contact-label {
      font-weight: 700;
      color: #1E3A8A;
      font-size: 0.9rem;
    }
    .nu-contact-value {
      color: var(--nu-dark-text);
      font-size: 0.95rem;
    }

    /* ══ SCRIPT BLOCK ══ */
    .nu-script {
      background: #F8FAFC;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin: 16px 0;
      font-size: 0.98rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
    }
    .nu-script .salutation {
      font-weight: 700;
      margin-bottom: 10px;
    }
    .nu-script p {
      margin-bottom: 12px;
      text-indent: 1.2em;
    }
    .nu-script .signoff {
      margin-top: 16px;
      font-weight: 400;
    }
    .nu-script .signature {
      margin-top: 2px;
      margin-left: 1.2em;
      font-weight: 700;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      list-style: none;
      padding: 0;
    }
    .nu-checklist li {
      padding: 12px 0 12px 40px;
      position: relative;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      border-bottom: 1px solid var(--nu-light-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 14px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ WHY IT MATTERS ══ */
    .nu-why {
      background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
      border-left: 6px solid var(--nu-red);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 32px;
    }
    .nu-why h3 {
      color: #991B1B;
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-why p {
      color: #7F1D1D;
      font-size: 0.98rem;
      margin-bottom: 8px;
    }
    .nu-why p:last-child { margin-bottom: 0; }

    /* ══ STATUS PILL ══ */
    .nu-status {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-status-open {
      background: #FEF3C7;
      color: #92400E;
    }

    /* ══ META ROW ══ */
    .nu-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 32px;
      padding: 16px 0;
      border-top: 1px solid var(--nu-medium-gray);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-meta-item {
      font-size: 0.85rem;
      color: #64748B;
    }
    .nu-meta-item strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-right: 6px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', 'Lato', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; margin-right: -0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-container { padding: 32px 20px 56px; }
      .nu-card, .nu-questions, .nu-contact-card { padding: 20px; }
      .nu-contact-row { grid-template-columns: 1fr; gap: 2px; }
      .nu-action-banner { flex-direction: column; text-align: center; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .nu-questions, .nu-contact-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="#FFFFFF" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="#FFFFFF" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE ASYMMETRIC CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,52 L1440,0 L1440,52 L0,52 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="nu-action-banner">
        <div class="nu-action-banner-icon">📋</div>
        <div class="nu-action-banner-content">
          <h2>Open Action Item — reMarkable</h2>
          <p>Get a written definition of lifetime warranty coverage from H2O Waterproofing before quoting it to any customer.</p>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-section-title">
        <span class="lead">Clarify</span> <span class="rest">H2O Waterproofing Lifetime Warranty</span>
      </h1>

      <!-- META -->
      <div class="nu-meta">
        <div class="nu-meta-item"><strong>Source:</strong> reMarkable notebook</div>
        <div class="nu-meta-item"><strong>Owner:</strong> Aaron C. Norris</div>
        <div class="nu-meta-item"><strong>Priority:</strong> High — blocks customer promises</div>
        <div class="nu-meta-item"><strong>Status:</strong> <span class="nu-status nu-status-open">Open</span></div>
      </div>

      <!-- WHY IT MATTERS -->
      <div class="nu-why">
        <h3>Why This Matters</h3>
        <p>H2O Waterproofing treats every FlexPro Armor bucket cover Norris Utilities® sells. "Lifetime warranty" is a phrase we use in marketing and sales conversations, but we have not yet locked down the exact terms in writing.</p>
        <p>Before Aaron or Caroline Butler quotes the lifetime warranty to a dealer, distributor, or end user, we need the written definition from H2O so every promise we make matches what H2O will actually honor.</p>
      </div>

      <!-- WHAT WE NEED -->
      <div class="nu-card">
        <h3>What We Need From H2O Waterproofing</h3>
        <ul>
          <li>The formal definition of "lifetime" — is it the lifetime of the bucket cover, the original purchaser, or the treatment itself?</li>
          <li>What specifically is covered — the waterproofing performance, the coating adhesion, re-treatment, or product replacement.</li>
          <li>What voids coverage — UV exposure limits, chemical contact, abrasion, modification, laundering, or field repair.</li>
          <li>Transferability — does the warranty follow the bucket cover if the end user sells or transfers it, or only the original purchaser.</li>
          <li>Claim process — who the customer contacts, required documentation, turnaround time, and whether inspection is required.</li>
          <li>Exclusions and dollar caps — labor, freight both ways, replacement vs. re-treatment, any consequential damage language.</li>
          <li>Written documentation we can attach to quotes and list on the FlexPro Armor line card.</li>
        </ul>
      </div>

      <!-- QUESTIONS TO ASK -->
      <div class="nu-questions">
        <h3 style="font-weight: 900; color: var(--nu-dark-text); font-size: 1.15rem; margin-bottom: 6px;">Seven Questions for the H2O Call</h3>
        <p style="color: #64748B; font-size: 0.92rem; margin-bottom: 18px;">Ask these in order. Take written notes and request a follow-up email confirming each answer.</p>

        <div class="nu-question-item">
          <div class="nu-question-num">1</div>
          <div class="nu-question-text">How do you define "lifetime" in the H2O Waterproofing warranty?</div>
          <div class="nu-question-note">Lifetime of the product, the original purchaser, or a fixed term marketed as lifetime?</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">2</div>
          <div class="nu-question-text">What failure modes are covered under the warranty?</div>
          <div class="nu-question-note">Waterproofing loss, coating peel, delamination, visible wear-through — be specific.</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">3</div>
          <div class="nu-question-text">What specifically voids the warranty?</div>
          <div class="nu-question-note">Chemicals, abrasion from tools, line-worker detergents, pressure washing, modification.</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">4</div>
          <div class="nu-question-text">Is the warranty transferable to secondary owners?</div>
          <div class="nu-question-note">Needed for fleet buyers who resell equipment inside their utility network.</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">5</div>
          <div class="nu-question-text">What is the claim process, start to finish?</div>
          <div class="nu-question-note">Who receives the claim, what evidence is required, who pays freight, re-treat vs. replace.</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">6</div>
          <div class="nu-question-text">Will you put the full warranty terms in writing on H2O letterhead?</div>
          <div class="nu-question-note">PDF we can attach to quotes and link from the FlexPro Armor line card.</div>
        </div>

        <div class="nu-question-item">
          <div class="nu-question-num">7</div>
          <div class="nu-question-text">Are there any dollar caps, pro-ration, or consequential damage exclusions?</div>
          <div class="nu-question-note">Customers will ask. Better to know the fine print before they find it.</div>
        </div>
      </div>

      <!-- H2O CONTACT -->
      <div class="nu-contact-card">
        <h3>H2O Waterproofing — Primary Contact</h3>
        <div class="nu-contact-row">
          <div class="nu-contact-label">Vendor</div>
          <div class="nu-contact-value">H2O Waterproofing — treatment partner for FlexPro Armor bucket covers</div>
        </div>
        <div class="nu-contact-row">
          <div class="nu-contact-label">Relationship</div>
          <div class="nu-contact-value">Every Norris Utilities® FlexPro Armor unit is treated by H2O prior to shipment</div>
        </div>
        <div class="nu-contact-row">
          <div class="nu-contact-label">Contact</div>
          <div class="nu-contact-value">Pull current H2O rep from vendor file before calling</div>
        </div>
        <div class="nu-contact-row">
          <div class="nu-contact-label">Preferred channel</div>
          <div class="nu-contact-value">Phone call first to align, then follow-up email requesting written warranty on letterhead</div>
        </div>
      </div>

      <!-- EMAIL SCRIPT -->
      <div class="nu-card">
        <h3>Follow-Up Email — Drop-In Draft</h3>
        <p style="font-size: 0.92rem; color: #64748B;">Send this immediately after the phone call to lock the answers into writing.</p>
        <div class="nu-script">
          <div class="salutation">[H2O Contact Name] —</div>
          <p>Thank you for the call today. I want to make sure what Norris Utilities® communicates to our FlexPro Armor customers matches exactly what H2O Waterproofing will honor, so I am putting the lifetime warranty terms in writing.</p>
          <p>Could you confirm in a written reply (or a short PDF on H2O letterhead) the following for every bucket cover you treat for us:</p>
          <p>• The exact definition of "lifetime" coverage<br>
             • What failure modes are covered and what is excluded<br>
             • What voids the warranty<br>
             • Whether the warranty transfers with the product<br>
             • The claim process, required documentation, and freight responsibility<br>
             • Any dollar caps, pro-ration, or consequential damage limits</p>
          <p>Once I have your written terms I will attach them to every FlexPro Armor quote and list them on our line card so every customer gets the same promise you stand behind. I appreciate y'all's support on this.</p>
          <div class="signoff">Sincerely,</div>
          <div class="signature">Aaron C. Norris</div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-card">
        <h3>Close-Out Checklist</h3>
        <ul class="nu-checklist">
          <li>Phone call completed with H2O — notes captured in reMarkable</li>
          <li>Written warranty terms received on H2O letterhead (PDF)</li>
          <li>PDF saved to shared vendor folder and linked from FlexPro Armor line card</li>
          <li>Warranty summary paragraph drafted and approved for use in quotes</li>
          <li>Caroline Butler briefed on the approved warranty language</li>
          <li>FlexPro Armor product page updated with the confirmed coverage terms</li>
          <li>Dealer and distributor sales sheets updated with identical language</li>
          <li>reMarkable action item marked complete; notebook entry archived</li>
        </ul>
      </div>

      <!-- DOWNSTREAM -->
      <div class="nu-grid-2">
        <div class="nu-card">
          <h3>Downstream Updates Once Confirmed</h3>
          <ul>
            <li>FlexPro Armor product page on NorrisUtilities.com</li>
            <li>FlexPro Armor line card PDF</li>
            <li>Quote template — warranty section</li>
            <li>Dealer sales kit and distributor sales kit</li>
            <li>Standard email signature boilerplate for FlexPro Armor follow-ups</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Guardrail Until Confirmed</h3>
          <p>Until the written terms are on file, do not promise "lifetime" coverage in any quote, email, or phone call. Use: "Warranty terms pending final confirmation from our treatment partner — I will send written terms before we close."</p>
          <p>Caroline Butler should use the same language on any customer-facing reply touching FlexPro Armor warranty.</p>
        </div>
      </div>

      <!-- CATEGORY BADGES -->
      <div style="margin-top: 8px;">
        <span class="nu-badge">FLEXPRO ARMOR</span>
        <span class="nu-badge">WARRANTY</span>
        <span class="nu-badge">VENDOR — H2O</span>
        <span class="nu-badge">CUSTOMER-FACING</span>
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