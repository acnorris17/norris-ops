<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Call — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #1B7E3F;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 480px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
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
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 40px 24px 80px;
    }
    .nu-wrap {
      max-width: 980px;
      margin: 0 auto;
      position: relative;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, var(--nu-alert-red) 0%, #8B0000 100%);
      color: var(--nu-white);
      padding: 14px 24px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 28px;
      box-shadow: 0 4px 12px rgba(200,16,46,0.25);
    }
    .priority-banner .icon {
      width: 24px; height: 24px;
      flex-shrink: 0;
    }

    /* TASK HEADLINE */
    .task-headline {
      background: var(--nu-white);
      padding: 36px 40px;
      border-radius: 10px;
      border-left: 6px solid var(--nu-blue);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 28px;
    }
    .task-eyebrow {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 5px 14px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .task-title {
      font-weight: 900;
      font-size: 2.1rem;
      line-height: 1.18;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .task-title .accent {
      color: var(--nu-blue);
    }
    .task-meta {
      font-size: 0.95rem;
      color: #555;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .task-meta-item strong {
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    /* SECTION TITLE */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin: 36px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first {
      color: #0033cc;
    }

    /* WHY CARD */
    .why-card {
      background: linear-gradient(135deg, #f4f9ff 0%, #e6f4ff 100%);
      padding: 24px 28px;
      border-radius: 8px;
      border: 1px solid #cfe4ff;
      margin-bottom: 28px;
    }
    .why-card p {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .why-card p + p { margin-top: 10px; }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      counter-reset: confirm;
      display: grid;
      gap: 14px;
    }
    .checklist li {
      counter-increment: confirm;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 18px 22px 18px 70px;
      position: relative;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .checklist li::before {
      content: counter(confirm);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 36px; height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checklist .item-title {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .checklist .item-detail {
      font-size: 0.92rem;
      color: #555;
    }

    /* CALL SCRIPT */
    .call-script {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .call-script .label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .call-script .quote {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
      padding-left: 18px;
      border-left: 3px solid var(--nu-cyan);
    }
    .call-script .quote + .quote { margin-top: 18px; }

    /* OUTCOMES TABLE */
    .outcomes {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .outcomes thead th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .outcomes tbody td {
      padding: 16px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .outcomes tbody tr:nth-child(odd) td { background: #fafbff; }
    .outcomes .pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 11px;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pill-good { background: #dff5e6; color: var(--nu-success-green); }
    .pill-watch { background: #fff3d6; color: #8a6a00; }
    .pill-bad { background: #fde0e3; color: var(--nu-alert-red); }

    /* TWO-COL */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 8px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .nu-card ul {
      list-style: none;
      padding: 0;
    }
    .nu-card li {
      padding-left: 18px;
      position: relative;
      font-size: 0.94rem;
      margin-bottom: 8px;
      line-height: 1.55;
    }
    .nu-card li::before {
      content: '•';
      color: var(--nu-cyan);
      position: absolute;
      left: 0; top: 0;
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* WRITTEN-CONFIRM CALLOUT */
    .writing-callout {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #001a66 100%);
      color: var(--nu-white);
      padding: 30px 34px;
      border-radius: 10px;
      margin-top: 28px;
      box-shadow: 0 6px 18px rgba(0,0,51,0.18);
    }
    .writing-callout h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .writing-callout p { font-size: 1rem; line-height: 1.65; }
    .writing-callout strong { color: var(--nu-cyan); }

    /* SIGN-OFF */
    .signoff {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 36px;
      background: var(--nu-white);
      padding: 26px 30px;
      border: 1px dashed var(--nu-blue);
      border-radius: 8px;
    }
    .signoff .field {
      display: flex;
      flex-direction: column;
    }
    .signoff label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .signoff .line {
      border-bottom: 1.5px solid var(--nu-dark-text);
      height: 30px;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      letter-spacing: 0.03em;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .task-headline { padding: 26px 22px; }
      .task-title { font-size: 1.55rem; }
      .two-col { grid-template-columns: 1fr; }
      .signoff { grid-template-columns: 1fr; }
      .checklist li { padding: 16px 18px 16px 58px; }
      .checklist li::before { left: 12px; width: 30px; height: 30px; font-size: 0.95rem; }
      .outcomes thead { display: none; }
      .outcomes, .outcomes tbody, .outcomes tr, .outcomes td { display: block; width: 100%; }
      .outcomes tbody td { border-top: none; border-bottom: 1px solid var(--nu-medium-gray); }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .priority-banner, .writing-callout { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L115 45 L150 25 L130 60 L170 55 L140 85 L165 120 L125 105 L115 145 L100 110 L85 145 L75 105 L35 120 L60 85 L30 55 L70 60 L50 25 L85 45 Z" fill="#FFFFFF"/>
      <path d="M100 115 L105 145 L120 138 L110 160 L100 195 L90 160 L80 138 L95 145 Z" fill="#FFFFFF"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2L1 21h22L12 2zm0 5l7.5 13h-15L12 7zm-1 4v4h2v-4h-2zm0 5v2h2v-2h-2z"/>
        </svg>
        <span>Action Item — Get It In Writing Before Closing The Loop</span>
      </div>

      <!-- TASK HEADLINE -->
      <section class="task-headline">
        <span class="task-eyebrow">reMarkable Action — Vendor Follow-Up</span>
        <h1 class="task-title">Call <span class="accent">H2O Waterproofing</span> and lock down written confirmation</h1>
        <p style="font-size: 1.05rem; color: #444; margin-top: 6px;">
          A verbal "yes" doesn't protect Norris Utilities®. Pick up the phone, get the items below confirmed in an email or signed document, and file the proof before the conversation ends.
        </p>
        <div class="task-meta">
          <div class="task-meta-item"><strong>OWNER:</strong> Aaron C. Norris</div>
          <div class="task-meta-item"><strong>OPENED:</strong> 2026-04-24</div>
          <div class="task-meta-item"><strong>VENDOR:</strong> H2O Waterproofing</div>
          <div class="task-meta-item"><strong>STATUS:</strong> Open — call required</div>
        </div>
      </section>

      <!-- WHY -->
      <h2 class="nu-section-title"><span class="first">Why</span> this matters</h2>
      <div class="why-card">
        <p>H2O Waterproofing has work, scope, or warranty terms tied to a Norris Utilities® property or asset. Verbal commitments evaporate. If something fails — a leak, a missed warranty window, a billing dispute — the only thing that stands up is paper.</p>
        <p>This task closes when (a) the call has happened, (b) the items below are confirmed in writing by H2O Waterproofing, and (c) that written confirmation is saved to the vendor file.</p>
      </div>

      <!-- WHAT TO CONFIRM -->
      <h2 class="nu-section-title"><span class="first">What</span> to confirm in writing</h2>
      <ol class="checklist">
        <li>
          <div class="item-title">Confirmation that the work is complete and accepted</div>
          <div class="item-detail">Specific scope items, square footage covered, areas treated, and the completion date. No ambiguity about what was finished and what wasn't.</div>
        </li>
        <li>
          <div class="item-title">Warranty terms — duration, coverage, and exclusions</div>
          <div class="item-detail">Length of the warranty, what it covers (leaks, blistering, peeling, adhesion failure), what voids it, and how a claim is filed.</div>
        </li>
        <li>
          <div class="item-title">Materials used and product certifications</div>
          <div class="item-detail">Manufacturer name, product line, batch or spec sheets, and any manufacturer warranties that ride along with the labor warranty.</div>
        </li>
        <li>
          <div class="item-title">Final invoice total, payment status, and any balance owed</div>
          <div class="item-detail">Confirm the dollar figure, what's paid, what's open, and the payment terms in plain English. Reconcile against the PO and the proposal.</div>
        </li>
        <li>
          <div class="item-title">Insurance and licensure on file for our records</div>
          <div class="item-detail">Certificate of insurance (COI) listing Norris Utilities®, LLC as certificate holder, plus a copy of their state license number for the work performed.</div>
        </li>
        <li>
          <div class="item-title">Single point of contact for warranty service calls</div>
          <div class="item-detail">Name, direct phone, email — the person we call if we find a problem six or twelve months from now.</div>
        </li>
      </ol>

      <!-- CALL SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Call</span> script — keep it tight</h2>
      <div class="call-script">
        <div class="label">Open the call</div>
        <p class="quote">"This is Aaron Norris with Norris Utilities. I want to walk through what was completed, the warranty, and the paperwork — and then have you send the highlights over in an email so we both have the same record. Got a few minutes?"</p>
        <div class="label" style="margin-top: 22px;">Drive each confirmation</div>
        <p class="quote">"Walk me through the scope — what got done, what didn't, and the completion date. I want to make sure my notes match yours."</p>
        <p class="quote">"What's the warranty length, what does it cover, and what voids it? Send me a one-page summary I can keep on file."</p>
        <p class="quote">"Email me the COI naming Norris Utilities, LLC as certificate holder, plus the license number on the work. Today if possible."</p>
        <p class="quote">"Final invoice — what's the total, what's paid, what's open? Send the final invoice in PDF so I can match it to the PO."</p>
        <div class="label" style="margin-top: 22px;">Close the call</div>
        <p class="quote">"Sincerely appreciate the work. Send the email today and I'll confirm receipt. If anything comes up post-completion, I'll call you direct."</p>
      </div>

      <!-- WRITTEN CONFIRM CALLOUT -->
      <div class="writing-callout">
        <h3>The deliverable is the email — not the call</h3>
        <p>Until H2O Waterproofing's written confirmation lands in <strong>acnorris@norrisutilities.com</strong>, this action item is <strong>open</strong>. A verbal recap on the phone is not the deliverable. The email — with scope, warranty, materials, invoice total, COI, and warranty contact — is the deliverable. Save it to the vendor folder before closing.</p>
      </div>

      <!-- OUTCOMES -->
      <h2 class="nu-section-title"><span class="first">Possible</span> outcomes &amp; next moves</h2>
      <table class="outcomes">
        <thead>
          <tr>
            <th style="width: 26%;">Outcome on the call</th>
            <th>What it means</th>
            <th style="width: 22%;">Next move</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="pill pill-good">Clean</span> — agrees, sending email today</td>
            <td>All six items will be confirmed in writing within 24 hours. Standard professional vendor.</td>
            <td>Wait 24 hrs. If email lands, file it and close the task.</td>
          </tr>
          <tr>
            <td><span class="pill pill-watch">Partial</span> — confirms verbally, hesitates on warranty or COI</td>
            <td>Could be a paperwork lag — could be a sign warranty terms are weaker than discussed verbally.</td>
            <td>Set a 48-hour deadline. Send a follow-up email recap and ask them to reply "confirmed."</td>
          </tr>
          <tr>
            <td><span class="pill pill-bad">Pushback</span> — won't put warranty or COI in writing</td>
            <td>Red flag. Verbal-only warranty is no warranty. Insurance not on file is a liability problem.</td>
            <td>Hold final payment. Escalate to ownership. Document the call notes today and add to vendor file.</td>
          </tr>
          <tr>
            <td><span class="pill pill-watch">Voicemail</span> — no live conversation</td>
            <td>Common. Don't let the task drift.</td>
            <td>Leave a clear voicemail. Send the same six items in an email same day. Re-call within 48 hours.</td>
          </tr>
        </tbody>
      </table>

      <!-- TWO-COL -->
      <h2 class="nu-section-title"><span class="first">Filing</span> &amp; record-keeping</h2>
      <div class="two-col">
        <div class="nu-card">
          <h3>Where the email lives once it arrives</h3>
          <ul>
            <li>Save the email to the H2O Waterproofing vendor folder</li>
            <li>Attach the COI, final invoice PDF, and warranty summary as separate files</li>
            <li>Log the warranty expiration date in the master tracker so it surfaces before it lapses</li>
            <li>Update the open-items list — close this action item only when paper is filed</li>
          </ul>
        </div>
        <div class="nu-card">
          <h3>Trigger a callback if any of these surface later</h3>
          <ul>
            <li>Any visible water intrusion, staining, or efflorescence in the treated area</li>
            <li>Coating peeling, blistering, or losing adhesion before warranty expires</li>
            <li>A second contractor flags the H2O work as deficient during unrelated inspection</li>
            <li>An invoice or charge appears that isn't in the final reconciled total</li>
          </ul>
        </div>
      </div>

      <!-- SIGN-OFF -->
      <div class="signoff">
        <div class="field">
          <label>Date Call Completed</label>
          <div class="line"></div>
        </div>
        <div class="field">
          <label>H2O Contact On Call</label>
          <div class="line"></div>
        </div>
        <div class="field">
          <label>Email Confirmation Received (Date)</label>
          <div class="line"></div>
        </div>
        <div class="field">
          <label>Aaron's Initials — Closed</label>
          <div class="line"></div>
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