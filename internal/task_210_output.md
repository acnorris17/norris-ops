Existing file `action-clarify-lifetime-warranty.html` covers this exact topic — per DEDUP RULE I'll output a polished update that overwrites it.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Lifetime Warranty Clarification | Norris Utilities®</title>
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
      --nu-alert: #C9242C;
      --nu-warn: #E89A2B;
      --nu-success: #1F8A4C;
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.25));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      text-shadow: 0 2px 18px rgba(0,0,0,0.25);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      margin-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

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
      width: 720px; height: 720px;
      background: radial-gradient(circle, rgba(0,0,255,0.028) 0%, transparent 68%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* STATUS BAR */
    .status-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      background: var(--nu-navy);
      color: var(--nu-white);
      border-radius: 8px;
      margin-bottom: 28px;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
    }
    .status-bar .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(6, 208, 255, 0.18);
      border: 1px solid rgba(6, 208, 255, 0.5);
      border-radius: 999px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
    }
    .status-bar .pill.open { background: rgba(232, 154, 43, 0.18); border-color: rgba(232, 154, 43, 0.6); color: #FFC46A; }
    .status-bar .meta { display: flex; flex-wrap: wrap; gap: 18px; font-weight: 400; }
    .status-bar .meta strong { color: var(--nu-cyan); font-weight: 700; margin-right: 6px; }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-lead {
      color: var(--nu-body-text);
      font-size: 1.02rem;
      margin-bottom: 20px;
      max-width: 780px;
    }

    /* HEADLINE */
    .headline {
      font-weight: 900;
      font-size: 2rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .headline .blue { color: var(--nu-blue); }
    .sub-headline {
      color: var(--nu-body-text);
      font-size: 1.08rem;
      max-width: 760px;
      margin-bottom: 36px;
    }

    /* BLOCKS */
    .block {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      margin-bottom: 22px;
      box-shadow: 0 2px 14px rgba(10, 14, 92, 0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .block.alert { border-left-color: var(--nu-warn); background: #FFFBF2; }
    .block.action { border-left-color: var(--nu-success); }
    .block h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .block h3 .ico {
      display: inline-flex;
      width: 26px; height: 26px;
      border-radius: 6px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-size: 0.85rem;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .block.alert h3 .ico { background: var(--nu-warn); }
    .block.action h3 .ico { background: var(--nu-success); }
    .block p { margin-bottom: 10px; }
    .block p:last-child { margin-bottom: 0; }

    /* QUESTION LIST */
    .q-list {
      list-style: none;
      counter-reset: q;
      margin-top: 6px;
    }
    .q-list li {
      counter-increment: q;
      position: relative;
      padding: 14px 16px 14px 56px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      font-size: 0.98rem;
      line-height: 1.55;
    }
    .q-list li::before {
      content: counter(q);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 30px; height: 30px;
      border-radius: 50%;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .q-list li .hint {
      display: block;
      margin-top: 6px;
      font-size: 0.86rem;
      color: #666;
      font-style: italic;
    }

    /* CONTACT CARD */
    .contact-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      background: linear-gradient(135deg, #f4f6ff 0%, #eef2ff 100%);
      padding: 24px;
      border-radius: 10px;
      border: 1px solid #d6dcff;
      margin-bottom: 22px;
    }
    .contact-card .field label {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }
    .contact-card .field .value {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .contact-card .field .value a {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .contact-card .field .value a:hover { text-decoration: underline; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
    }
    .checklist li {
      padding: 12px 14px 12px 44px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 12px; top: 14px;
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* WHY BOX */
    .why-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 12px;
      margin-bottom: 28px;
    }
    .why-box h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .why-box p {
      color: rgba(255,255,255,0.92);
      font-size: 1.02rem;
      line-height: 1.65;
    }

    /* BUTTONS */
    .actions-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 10px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-primary:hover { background: #0000CC; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,255,0.3); }
    .btn-outline {
      background: transparent;
      color: var(--nu-blue);
      border-color: var(--nu-blue);
    }
    .btn-outline:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-rule {
      max-width: 320px;
      margin: 18px auto;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(6, 208, 255, 0.5), transparent);
    }

    @media (max-width: 768px) {
      .nu-header { padding: 46px 22px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 22px 56px; }
      .headline { font-size: 1.55rem; }
      .block { padding: 22px 20px; }
      .contact-card { grid-template-columns: 1fr; }
      .status-bar { flex-direction: column; align-items: flex-start; }
    }
    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .block { box-shadow: none; border: 1px solid #ccc; }
      .actions-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- STATUS BAR -->
      <div class="status-bar">
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <span class="pill open">Open Action</span>
          <span class="pill">Task #210</span>
        </div>
        <div class="meta">
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Source:</strong> reMarkable</span>
          <span><strong>Captured:</strong> 2026-04-16</span>
        </div>
      </div>

      <!-- HEADLINE -->
      <h1 class="headline">Clarify <span class="blue">Lifetime Warranty</span> Coverage — H2O Waterproofing</h1>
      <p class="sub-headline">Get the written definition of what "lifetime warranty" actually covers on the H2O Waterproofing products Norris Utilities® is distributing. We need this in writing before the next customer touch so expectations match reality.</p>

      <!-- WHY BOX -->
      <div class="why-box">
        <h3>Why This Matters</h3>
        <p>Customers assume "lifetime" means the life of the product against all failure modes. Manufacturers usually mean the original purchaser, manufacturing defects only, and exclude wear, UV, abrasion, modification, and commercial use. Until we have H2O's definition in writing, we cannot make a warranty statement in a proposal or a cover letter — and a vague promise becomes our liability, not theirs.</p>
      </div>

      <!-- TASK DETAIL -->
      <div class="block">
        <h3><span class="ico">i</span> Source Note (reMarkable)</h3>
        <p style="font-style: italic; color: #555; border-left: 3px solid var(--nu-medium-gray); padding-left: 14px; margin-top: 6px;">"Get definition of lifetime warranty coverage from H2O Waterproofing."</p>
        <p style="margin-top: 14px;">Aaron captured this on the reMarkable during a planning session. The action is a discovery call / email to the H2O Waterproofing rep asking for the written warranty document and a plain-English explanation of what's covered and what's not.</p>
      </div>

      <!-- H2O CONTACT -->
      <h2 class="nu-section-title">H2O <span>Waterproofing Contact Information</span></h2>
      <p class="section-lead">Route the warranty question directly to the H2O sales/support contact. Request a PDF of the warranty policy — not a verbal answer.</p>
      <div class="contact-card">
        <div class="field">
          <label>Vendor</label>
          <div class="value">H2O Waterproofing</div>
        </div>
        <div class="field">
          <label>Primary Contact</label>
          <div class="value">To be confirmed by Aaron</div>
        </div>
        <div class="field">
          <label>Preferred Channel</label>
          <div class="value">Email — written record required</div>
        </div>
        <div class="field">
          <label>Request</label>
          <div class="value">Written warranty policy (PDF)</div>
        </div>
      </div>

      <!-- QUESTIONS TO ASK -->
      <h2 class="nu-section-title">Questions <span>to Ask H2O Waterproofing</span></h2>
      <p class="section-lead">Send these in one email. Ask for a single reply covering every point — don't let the definition drift across multiple conversations.</p>
      <div class="block">
        <ol class="q-list">
          <li>
            What is the exact duration of the "lifetime" warranty — lifetime of the product, lifetime of the original purchaser, or a defined year count?
            <span class="hint">"Lifetime" is a legal term with multiple meanings. Get the one H2O uses.</span>
          </li>
          <li>
            Who is the warranty transferable to — original purchaser only, or does it transfer to subsequent owners / end-user customers we sell to?
            <span class="hint">Critical for the dealer/distributor channel. We need to know what we can promise buyer #2.</span>
          </li>
          <li>
            What failure modes are covered — manufacturing defects only, or also bond failure, delamination, coating wear, UV degradation, adhesion loss?
            <span class="hint">Most "lifetime" warranties exclude wear. Confirm in writing.</span>
          </li>
          <li>
            What is specifically excluded — abrasion, impact, chemical exposure, improper installation, modifications, commercial/utility use, power washing?
            <span class="hint">The exclusions matter more than the coverage. Ask for the full exclusion list.</span>
          </li>
          <li>
            What is the claim process — who does the customer call, what documentation is required (receipt, photos, application date), and what is the turnaround time?
            <span class="hint">If the process is onerous, the warranty is effectively worthless — and we need to know before we promote it.</span>
          </li>
          <li>
            Is the remedy repair, replacement, refund, or prorated credit — and who pays freight both ways on a warranty claim?
            <span class="hint">Freight cost can exceed the product value on a small claim. Clarify upfront.</span>
          </li>
          <li>
            Does the warranty survive application on utility/industrial equipment — bucket trucks, drill rigs, chassis — or does commercial use void it?
            <span class="hint">Our customer base is almost entirely commercial/utility. A residential-only warranty is a non-starter.</span>
          </li>
          <li>
            Can H2O provide a sample warranty statement we can use verbatim in our proposals and sell sheets, so we represent it accurately?
            <span class="hint">This protects both sides. Ask for pre-approved marketing language.</span>
          </li>
        </ol>
      </div>

      <!-- DELIVERABLES -->
      <h2 class="nu-section-title">Required <span>Deliverables</span></h2>
      <p class="section-lead">When this action item is closed, we should have all of the following on file:</p>
      <div class="block action">
        <h3><span class="ico">✓</span> What We Need on File</h3>
        <ul class="checklist">
          <li><strong>Written warranty policy (PDF)</strong> — stored in Google Drive / Norris Utilities warranty folder</li>
          <li><strong>Plain-English summary</strong> — one paragraph we can paste into any proposal or customer email</li>
          <li><strong>Approved marketing language</strong> — for sell sheets, line card, and website use</li>
          <li><strong>Exclusion list</strong> — short-form bullet list of what's NOT covered, for customer-facing clarity</li>
          <li><strong>Claim process flowchart</strong> — so Caroline Butler can route customer claims without Aaron's involvement</li>
          <li><strong>Effective date</strong> — when the current warranty terms took effect, and any change log</li>
        </ul>
      </div>

      <!-- GUARDRAIL -->
      <div class="block alert">
        <h3><span class="ico">!</span> Guardrail — Do Not Until We Have This</h3>
        <p>Do not publish the H2O Waterproofing lifetime warranty on any Norris Utilities® sell sheet, quote, line card, website page, or customer email until the written definition is received, reviewed by Aaron, and stored on file. Verbal warranty promises create liability and cannot be enforced against the manufacturer downstream. This applies to CB and any contractor as well.</p>
      </div>

      <!-- NEXT STEPS -->
      <h2 class="nu-section-title">Next <span>Steps</span></h2>
      <div class="block">
        <h3><span class="ico">→</span> Execution Plan</h3>
        <p><strong>1. Draft the email</strong> — use the eight questions above, verbatim. Attach a brief one-line note that we're a distributor working on pricing/promotion materials for Q2-Q3.</p>
        <p><strong>2. Send to H2O rep</strong> — CC acnorris@norrisutilities.com so the thread is in the Norris Utilities® inbox of record.</p>
        <p><strong>3. File the response</strong> — when the PDF arrives, drop it in the shared Norris Utilities warranty folder and name it <code style="background: #f2f3ff; padding: 2px 6px; border-radius: 3px;">H2O-Warranty-Lifetime-YYYYMMDD.pdf</code> with the date of the policy version.</p>
        <p><strong>4. Update MEMORY + line card</strong> — once definition is confirmed, add the one-paragraph summary to the Norris Utilities® agent memory, and queue a line card revision for the H2O product block.</p>
        <p><strong>5. Close this task</strong> — mark Task #210 complete in the tracker with a link to the filed PDF.</p>
        <div class="actions-row">
          <a href="mailto:acnorris@norrisutilities.com?subject=H2O%20Waterproofing%20Warranty%20Definition%20Request" class="btn btn-primary">Draft Email</a>
          <a href="tel:2055001343" class="btn btn-outline">Call 205-500-1343</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-rule"></div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>