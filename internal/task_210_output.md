The existing file `action-clarify-lifetime-warranty.html` covers this exact topic. Per the dedup rule I'll produce a complete, polished version of the file content for this task.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Lifetime Warranty Definition — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-warn: #C9501D;
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 40%, var(--nu-cyan) 100%);
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
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      background-size: 40px 40px, 40px 40px, 40px 40px, 40px 40px, 60px 60px, 80px 80px;
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

    .nu-phoenix-icon { width: 72px; height: 72px; margin: 0 auto 12px; fill: var(--nu-white); filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3)); }
    .nu-logo-text { font-family: var(--font-primary); font-weight: 900; font-size: 3rem; color: var(--nu-white); letter-spacing: 0.35em; text-transform: uppercase; margin-bottom: 4px; text-shadow: 0 2px 20px rgba(0,0,0,0.3); }
    .nu-logo-subtitle { font-family: var(--font-primary); font-weight: 900; font-size: 1.3rem; color: var(--nu-white); letter-spacing: 0.8em; text-transform: uppercase; margin-bottom: 18px; }
    .nu-tagline { font-family: var(--font-primary); font-style: italic; font-weight: 300; font-size: 1.2rem; color: rgba(255,255,255,0.92); letter-spacing: 0.05em; }

    .nu-chevron { position: relative; height: 50px; margin-top: -50px; z-index: 10; }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    .nu-content-area { position: relative; background: var(--nu-white); }

    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      font-weight: 400;
    }

    .priority-banner {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #3e1a1a 0%, #5e2a2a 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 24px 28px;
      margin-bottom: 36px;
    }
    .priority-banner .icon {
      font-size: 2.2rem;
      line-height: 1;
    }
    .priority-banner h2 {
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
      color: #ffb8b8;
      text-transform: uppercase;
    }
    .priority-banner p {
      font-size: 0.98rem;
      line-height: 1.6;
      color: rgba(255,255,255,0.95);
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 24px;
      background: linear-gradient(180deg, #f0f4ff 0%, var(--nu-white) 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 14px;
      padding: 28px 32px;
      margin-bottom: 36px;
    }
    .phone-icon {
      width: 56px; height: 56px;
      background: var(--nu-blue);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .phone-icon svg { width: 30px; height: 30px; fill: var(--nu-white); }
    .contact-card h3 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .phone-number {
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      letter-spacing: 0.02em;
    }
    .context {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    .section-header {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .section-header span { color: var(--nu-dark-text); font-weight: 700; }

    .context-block {
      background: var(--nu-light-gray);
      border-radius: 12px;
      padding: 24px 28px;
      margin-bottom: 36px;
      border-left: 4px solid var(--nu-cyan);
    }
    .context-block h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .context-block p {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    .context-block p:last-child { margin-bottom: 0; }

    .questions-list {
      list-style: none;
      counter-reset: q;
      margin-bottom: 36px;
    }
    .questions-list li {
      counter-increment: q;
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 8px;
      padding: 18px 22px 18px 62px;
      margin-bottom: 12px;
      position: relative;
      font-size: 0.98rem;
      line-height: 1.6;
    }
    .questions-list li::before {
      content: counter(q);
      position: absolute;
      left: 16px;
      top: 16px;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
    }
    .questions-list li strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .questions-list li em {
      display: block;
      margin-top: 8px;
      font-style: italic;
      font-size: 0.88rem;
      color: #555;
    }

    .definition-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      margin-bottom: 36px;
    }
    .def-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 2px solid var(--nu-medium-gray);
    }
    .def-card h4 {
      font-weight: 900;
      font-size: 0.9rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .def-card p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--nu-body-text);
    }

    .why-banner {
      background: linear-gradient(135deg, #1a3e1a 0%, #2a5e2a 100%);
      color: var(--nu-white);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 36px;
      text-align: center;
    }
    .why-banner h2 {
      font-weight: 900;
      font-size: 1.15rem;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
      color: #a8ffa8;
      text-transform: uppercase;
    }
    .why-banner p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.95);
      max-width: 720px;
      margin: 0 auto;
    }

    .capture-box {
      background: var(--nu-white);
      border: 2px dashed var(--nu-blue);
      border-radius: 12px;
      padding: 24px 28px;
      margin-bottom: 36px;
    }
    .capture-box h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .capture-row {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 10px 18px;
      font-size: 0.95rem;
      margin-top: 10px;
    }
    .capture-row .label {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .capture-row .line {
      border-bottom: 1px solid var(--nu-medium-gray);
      min-height: 22px;
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1.05rem;
      line-height: 1.8;
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
      .priority-banner { flex-direction: column; text-align: center; }
      .contact-card { flex-direction: column; text-align: center; }
      .definition-grid { grid-template-columns: 1fr; }
      .page-title { font-size: 1.6rem; }
      .capture-row { grid-template-columns: 1fr; gap: 4px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .questions-list li { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L720,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div style="max-width: 1000px; margin: 0 auto; padding: 50px 40px;">

      <h1 class="page-title">H2O Waterproofing — <span>Lifetime Warranty Definition</span></h1>
      <p class="page-subtitle">Action Item from reMarkable · Due-Diligence Call Script &amp; Capture Sheet</p>

      <div class="priority-banner">
        <div class="icon">&#9888;</div>
        <div>
          <h2>Clarify Before You Rely On It</h2>
          <p>"Lifetime warranty" means nothing until it is defined in writing. Call H2O Waterproofing, get the exact terms on paper (email or PDF), and confirm the warranty transfers with the property. Record every answer on the capture sheet below.</p>
        </div>
      </div>

      <div class="contact-card">
        <div class="phone-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
        </div>
        <div>
          <h3>H2O Waterproofing</h3>
          <div class="phone-number">Call &amp; request written warranty terms</div>
          <div class="context">Ask for the owner or service manager · reference the property address and original work order</div>
        </div>
      </div>

      <div class="context-block">
        <h3>Why This Matters</h3>
        <p>Waterproofing contractors often market a "lifetime warranty" with very narrow coverage — some cover only labor, some only materials, some only the original homeowner, and many exclude the most common failure points (penetrations, additions, hydrostatic pressure, negative-side work). Without the definition in writing, the warranty is worth nothing at the moment you need it.</p>
        <p>Get it defined now. Get it in writing. Then decide whether it actually protects the investment.</p>
      </div>

      <h2 class="section-header">Questions <span>— Read These Exactly on the Call</span></h2>
      <ol class="questions-list">
        <li>
          <strong>Define "lifetime."</strong>
          Whose lifetime — the original customer's, the property's, the product's, or a fixed term like 25 years? Please send the exact wording from your warranty document.
          <em>Listen for: "lifetime of the structure" vs. "as long as you own the home."</em>
        </li>
        <li>
          <strong>What is covered — labor, materials, or both?</strong>
          If there is a leak after 5 years, who pays to re-excavate, tear out, and reinstall?
          <em>Listen for: "materials only" or "excludes tear-out costs."</em>
        </li>
        <li>
          <strong>Does the warranty transfer to a new owner?</strong>
          If yes, is there a transfer fee, required inspection, or paperwork deadline? Who has to sign?
          <em>Listen for: one-time transfer, fee ($100–$500 common), 30/60/90-day window.</em>
        </li>
        <li>
          <strong>What exclusions apply?</strong>
          Specifically: hydrostatic pressure, foundation movement, additions, penetrations added later, landscaping changes, sump pump failure, grading changes, cracked slabs, negative-side seepage.
          <em>Listen for anything that sounds like "acts of God" or "unforeseen site conditions."</em>
        </li>
        <li>
          <strong>What voids the warranty?</strong>
          Finishing the basement, adding a bathroom, changing drainage, installing a new sump, selling the property, missing an annual inspection — any of these?
        </li>
        <li>
          <strong>What is the claim process?</strong>
          Who do I call? What is the response time guarantee? Do they come out free to diagnose, or is there a service charge?
        </li>
        <li>
          <strong>Is there a deductible or per-occurrence cap?</strong>
          Some contractors cap lifetime claims at a dollar amount or limit to a set number of callbacks.
        </li>
        <li>
          <strong>Is the warranty backed by a third party or insured?</strong>
          If H2O Waterproofing closes tomorrow, does the warranty survive? (Most do not unless insured.)
        </li>
        <li>
          <strong>Send the signed warranty document.</strong>
          Email a PDF copy of the original warranty for the property, plus any transfer paperwork needed. Verbal promises do not close a deal.
        </li>
      </ol>

      <h2 class="section-header">Lifetime Warranty <span>— Three Common Definitions</span></h2>
      <div class="definition-grid">
        <div class="def-card">
          <h4>Strongest</h4>
          <p>Covers labor &amp; materials for the life of the structure. Fully transferable to every future owner with no fee. Insured by a third party. Covers re-excavation and restoration.</p>
        </div>
        <div class="def-card">
          <h4>Middle</h4>
          <p>Covers materials only, or labor only, for as long as the original customer owns the home. One transfer allowed, fee applies, short window (often 30 days from closing).</p>
        </div>
        <div class="def-card">
          <h4>Weakest</h4>
          <p>"Lifetime" equals manufacturer's product life (often 10–25 years). Non-transferable. Excludes labor, tear-out, hydrostatic pressure, and anything added after install.</p>
        </div>
      </div>

      <div class="capture-box">
        <h3>Capture Sheet — Fill During the Call</h3>
        <div class="capture-row">
          <div class="label">Date of call</div><div class="line"></div>
          <div class="label">Spoke with (name / title)</div><div class="line"></div>
          <div class="label">Property / work order #</div><div class="line"></div>
          <div class="label">"Lifetime" defined as</div><div class="line"></div>
          <div class="label">Covers (labor / materials / both)</div><div class="line"></div>
          <div class="label">Transferable? Fee?</div><div class="line"></div>
          <div class="label">Key exclusions</div><div class="line"></div>
          <div class="label">Voids the warranty</div><div class="line"></div>
          <div class="label">Claim process / response time</div><div class="line"></div>
          <div class="label">Third-party insured?</div><div class="line"></div>
          <div class="label">Written copy sent to</div><div class="line"></div>
          <div class="label">Follow-up date</div><div class="line"></div>
        </div>
      </div>

      <div class="why-banner">
        <h2>Decision Criteria</h2>
        <p>A lifetime warranty is only useful if it (1) is written, (2) covers labor and materials, (3) transfers to the new owner without a deal-breaking fee, and (4) survives the contractor going out of business. If any of those four fail, price the risk into the deal or walk.</p>
      </div>

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