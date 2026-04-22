<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contract Addendum Review — Basement Water Intrusion — Norris Utilities®</title>
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
      --nu-alert-red: #C41E3A;
      --nu-alert-amber: #E8A317;
      --nu-success-green: #2E7D32;
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
    .nu-header * { position: relative; z-index: 2; }
    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      opacity: 0.07;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(4);
      z-index: 1 !important;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 14px;
      font-weight: 700;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.9);
      letter-spacing: 0.3em;
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
      min-height: 60vh;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      position: relative;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 6px 0 6px 24px;
      margin-bottom: 36px;
    }
    .nu-title-eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-page-title {
      font-size: 2rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-subtitle {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
    }

    /* ALERT BANNER */
    .nu-alert {
      background: linear-gradient(135deg, #fff7e6 0%, #fff1d1 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 18px 24px;
      margin-bottom: 32px;
      border-radius: 4px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .nu-alert-icon {
      font-weight: 900;
      color: var(--nu-alert-amber);
      font-size: 1.3rem;
      flex-shrink: 0;
    }
    .nu-alert-body {
      font-size: 0.95rem;
      color: #5b4700;
      line-height: 1.5;
    }
    .nu-alert-body strong { color: #3d2f00; }

    /* SECTIONS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section p {
      margin-bottom: 12px;
      font-size: 1rem;
    }

    /* FACT GRID */
    .nu-fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .nu-fact-card {
      background: var(--nu-light-gray);
      border-top: 3px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .nu-fact-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-fact-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.4;
    }
    .nu-fact-value.pending { color: var(--nu-alert-amber); }

    /* CHECKLIST */
    .nu-checklist {
      background: #fafafc;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
    }
    .nu-checklist-item {
      display: flex;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .nu-check-content h4 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-check-content p {
      font-size: 0.92rem;
      color: #555;
      margin: 0;
    }

    /* RED/YELLOW/GREEN FLAG TABLE */
    .nu-flag-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      font-size: 0.95rem;
    }
    .nu-flag-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .nu-flag-table td {
      padding: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-flag-table tr:nth-child(even) td {
      background: #fafafc;
    }
    .nu-flag-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-white);
      white-space: nowrap;
    }
    .nu-flag-pill.red { background: var(--nu-alert-red); }
    .nu-flag-pill.amber { background: var(--nu-alert-amber); }
    .nu-flag-pill.green { background: var(--nu-success-green); }

    /* DEFINITION LIST */
    .nu-definition-list {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 20px 24px;
      margin-bottom: 16px;
    }
    .nu-definition-list dt {
      font-weight: 700;
      color: var(--nu-blue);
      margin-top: 14px;
      margin-bottom: 4px;
      font-size: 0.95rem;
    }
    .nu-definition-list dt:first-child { margin-top: 0; }
    .nu-definition-list dd {
      color: var(--nu-body-text);
      font-size: 0.95rem;
      padding-left: 0;
    }

    /* ACTION PANEL */
    .nu-action-panel {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .nu-action-panel h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-action-panel ol {
      padding-left: 22px;
    }
    .nu-action-panel li {
      margin-bottom: 10px;
      line-height: 1.55;
    }

    /* NOTE BOX */
    .nu-note {
      background: #f0f6ff;
      border-left: 4px solid var(--nu-blue);
      padding: 16px 20px;
      font-size: 0.95rem;
      color: #1a2e5c;
      margin-bottom: 16px;
      border-radius: 0 4px 4px 0;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
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
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.5rem; }
      .nu-container { padding: 30px 20px 50px; }
      .nu-flag-table { font-size: 0.85rem; }
      .nu-flag-table th, .nu-flag-table td { padding: 10px 8px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .nu-action-panel, .nu-alert { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Review Document</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-container">

      <div class="nu-title-block">
        <div class="nu-title-eyebrow">Action Item — reMarkable Capture</div>
        <h1 class="nu-page-title">Examine <span>Contract Addendum</span></h1>
        <div class="nu-subtitle">Subject: Basement Water Intrusion — clause review, risk assessment, and action plan</div>
      </div>

      <div class="nu-alert">
        <div class="nu-alert-icon">⚠</div>
        <div class="nu-alert-body">
          <strong>Do not sign the addendum yet.</strong> Read every paragraph against this checklist first.
          Water-intrusion language in a contract addendum shifts remediation cost, disclosure liability, and
          warranty scope. Once signed, the addendum typically overrides the original purchase agreement on
          any conflicting point — so the cost of getting this wrong runs for the life of ownership, not just
          the closing.
        </div>
      </div>

      <section class="nu-section">
        <h2 class="nu-section-title">Document <span>Snapshot</span></h2>
        <div class="nu-fact-grid">
          <div class="nu-fact-card">
            <div class="nu-fact-label">Document Type</div>
            <div class="nu-fact-value">Contract Addendum</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Subject</div>
            <div class="nu-fact-value">Basement Water Intrusion</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Property / Party</div>
            <div class="nu-fact-value pending">To be filled from addendum</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Effective Date</div>
            <div class="nu-fact-value pending">Per addendum</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Review Owner</div>
            <div class="nu-fact-value">Aaron C. Norris</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Priority</div>
            <div class="nu-fact-value" style="color: var(--nu-alert-red);">High — blocks closing</div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Clause-by-Clause <span>Review Checklist</span></h2>
        <div class="nu-checklist">

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>1. Who pays for remediation?</h4>
              <p>Identify which party is financially responsible for correcting the water intrusion — seller, buyer, or split. Confirm a hard dollar cap or percentage, not an open-ended obligation.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>2. Scope of "water intrusion" — is it defined?</h4>
              <p>Does the addendum define the phrase, or does it leave it vague? Vague = future disputes. Insist on a specific description (e.g., active leak at west foundation wall, efflorescence in northwest corner, sump pump discharge failure).</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>3. Remediation standard — repair vs. cure</h4>
              <p>Confirm whether the seller must merely "repair" or fully "cure" the condition, with proof. Acceptable cure language: licensed contractor, written warranty, pre- and post-inspection documentation.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>4. Inspection and verification rights</h4>
              <p>Buyer must retain the right to re-inspect after remediation and before closing. A clause allowing a licensed waterproofing or structural engineer sign-off protects against cosmetic-only fixes.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>5. Warranty — length, transferability, backer</h4>
              <p>Get the warranty in writing — 5, 10, 15, or lifetime? Is it contractor-backed or manufacturer-backed? Transferable to future owners? Not all waterproofing warranties survive a sale.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>6. Disclosure — does the seller affirm prior conditions?</h4>
              <p>The addendum should confirm the seller's written disclosure of all known past water events. Silence on history is a red flag — ask for a written statement of prior episodes.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>7. Mold, microbial, and air-quality exclusions</h4>
              <p>Water intrusion and mold are related but not identical. Confirm whether mold testing and remediation are inside or outside the addendum's scope. If excluded, push for separate mold coverage.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>8. Time limits — when must the remediation be complete?</h4>
              <p>Pin a deadline. "Prior to closing" is acceptable; "within a reasonable time" is not. If work will extend past closing, require escrow holdback equal to 150% of the contractor quote.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>9. Escrow holdback — amount, release conditions</h4>
              <p>If used, confirm: dollar amount, who holds it, conditions for release, and who gets interest. Release should require both written contractor sign-off AND buyer re-inspection approval.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>10. Release / waiver language — what is the buyer giving up?</h4>
              <p>This is where sellers bury liability protection. Look for phrases like "buyer accepts as-is," "waives all future claims," or "releases seller from any further obligation." Strike or narrow these.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>11. Insurance — does existing homeowner's policy cover it?</h4>
              <p>Many policies exclude water from ground seepage. Confirm the buyer's insurance carrier will still write a policy at the expected premium once the addendum is executed. Call the carrier before signing.</p>
            </div>
          </div>

          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <h4>12. Survival clause — does the addendum survive closing?</h4>
              <p>"Merger" doctrine in many states means contract rights die at closing unless the addendum explicitly states they survive. Insist on a survival clause for any post-closing remediation, warranty, or disclosure obligation.</p>
            </div>
          </div>

        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Red / Amber / Green <span>Flag Guide</span></h2>
        <table class="nu-flag-table">
          <thead>
            <tr>
              <th style="width: 110px;">Flag</th>
              <th>Language or Condition to Watch For</th>
              <th style="width: 180px;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="nu-flag-pill red">Red</span></td>
              <td>"Buyer accepts property in as-is condition notwithstanding known water intrusion, and releases seller from any and all claims."</td>
              <td>Do not sign. Strike or heavily narrow.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill red">Red</span></td>
              <td>No defined scope of work, no contractor named, no dollar cap for seller's obligation.</td>
              <td>Require scope + cap before signing.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill red">Red</span></td>
              <td>"Within a reasonable time" or no deadline to complete remediation.</td>
              <td>Replace with firm date or escrow holdback.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill amber">Amber</span></td>
              <td>Warranty under 5 years or non-transferable.</td>
              <td>Negotiate longer term and transferability.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill amber">Amber</span></td>
              <td>Mold / microbial expressly excluded without separate provision.</td>
              <td>Add mold testing contingency.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill amber">Amber</span></td>
              <td>Remediation contractor chosen solely by seller, no buyer approval.</td>
              <td>Require mutual approval or qualified-list selection.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill green">Green</span></td>
              <td>Specific scope, licensed contractor, written transferable warranty ≥ 10 years, buyer re-inspection right, survival clause.</td>
              <td>Acceptable — confirm dates and proceed.</td>
            </tr>
            <tr>
              <td><span class="nu-flag-pill green">Green</span></td>
              <td>Escrow holdback ≥ 150% of contractor estimate with clear release conditions.</td>
              <td>Acceptable — confirm escrow agent.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Key <span>Terms Cheat Sheet</span></h2>
        <div class="nu-definition-list">
          <dl>
            <dt>Addendum</dt>
            <dd>A document added to an existing contract that modifies or supplements its terms. In most purchase agreements, the addendum controls where its terms conflict with the base contract.</dd>

            <dt>Water Intrusion</dt>
            <dd>The unwanted entry of water into a structure through walls, floors, foundations, windows, or roofs. Includes active leaks, seepage, capillary action, hydrostatic pressure, and vapor migration.</dd>

            <dt>Remediation</dt>
            <dd>The physical work performed to stop the intrusion and repair resulting damage. Not the same as disclosure — remediation is the fix, disclosure is the admission.</dd>

            <dt>Cure</dt>
            <dd>A higher standard than "repair." Requires the condition to be eliminated, not merely patched, and typically documented by licensed third party.</dd>

            <dt>Escrow Holdback</dt>
            <dd>Funds withheld at closing and held by a third-party escrow agent until agreed conditions (e.g., successful remediation) are satisfied.</dd>

            <dt>Survival Clause</dt>
            <dd>Language stating that certain contract provisions continue in force after closing. Without it, most jurisdictions merge contract obligations into the deed and they become unenforceable.</dd>

            <dt>Merger Doctrine</dt>
            <dd>Legal principle under which the terms of a real estate contract are absorbed into the deed at closing, extinguishing any unmet obligations not preserved by a survival clause.</dd>

            <dt>Efflorescence</dt>
            <dd>White crystalline deposit on masonry caused by water carrying mineral salts through the material. Visual indicator of past or ongoing water migration.</dd>
          </dl>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Plan</span></h2>
        <div class="nu-action-panel">
          <h3>Next Steps — In Order</h3>
          <ol>
            <li><strong>Read the addendum once end-to-end</strong> without editing — get the shape of it.</li>
            <li><strong>Second pass: mark each of the 12 checklist items above</strong> directly on the document (✓ acceptable / ? ambiguous / ✗ unacceptable).</li>
            <li><strong>Run the Red/Amber/Green flag scan</strong> — any red flag blocks the signature until renegotiated.</li>
            <li><strong>Pull the original purchase agreement</strong> and identify every clause the addendum modifies. Flag any conflicts.</li>
            <li><strong>Contact a licensed waterproofing contractor</strong> for an independent written estimate. Use this number to size any escrow holdback at 150%.</li>
            <li><strong>Call the homeowner's insurance carrier</strong> and ask specifically: "Will you write a policy on a property with a disclosed water-intrusion history, and at what premium?"</li>
            <li><strong>Engage a real estate attorney</strong> before signing. Attorney review on an addendum of this type is mandatory — the cost is trivial against the downside.</li>
            <li><strong>Negotiate revisions</strong> based on attorney and contractor input. Do not sign the original language if any red flag remains.</li>
            <li><strong>Sign only the revised, attorney-approved version</strong> — and keep a clean PDF copy alongside the original purchase agreement.</li>
          </ol>
        </div>

        <div class="nu-note">
          <strong>Reminder:</strong> This document is an internal review checklist, not legal advice. A real estate
          attorney licensed in the state where the property sits must review the final addendum before signature.
          The cost of an attorney review is ordinarily a few hundred dollars; the cost of a bad water-intrusion
          clause routinely runs into the tens of thousands.
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">Decision <span>Log</span></h2>
        <div class="nu-fact-grid">
          <div class="nu-fact-card">
            <div class="nu-fact-label">Reviewed By</div>
            <div class="nu-fact-value">Aaron C. Norris</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Attorney Consulted</div>
            <div class="nu-fact-value pending">Pending engagement</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Contractor Estimate</div>
            <div class="nu-fact-value pending">Pending</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Insurance Confirmation</div>
            <div class="nu-fact-value pending">Pending carrier call</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Final Decision</div>
            <div class="nu-fact-value pending">Hold — do not sign</div>
          </div>
          <div class="nu-fact-card">
            <div class="nu-fact-label">Document Date</div>
            <div class="nu-fact-value">April 22, 2026</div>
          </div>
        </div>
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