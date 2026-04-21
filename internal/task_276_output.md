<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H2O Waterproofing — Written Confirmation Call Plan — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #1B7A3E;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 18px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* CHEVRON TRANSITION */
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 640px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      color: var(--nu-dark-text);
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .accent {
      color: #0033cc;
    }
    .nu-section + .nu-section { margin-top: 48px; }

    /* BRIEF CARD */
    .brief-card {
      background: linear-gradient(135deg, #f7f9ff 0%, #eef3ff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 28px 32px;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .brief-card h2 {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .brief-card p {
      font-size: 1rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .brief-card .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 14px;
      font-size: 0.88rem;
      color: #555;
    }
    .brief-card .meta-row strong {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* CALL SCRIPT */
    .script-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .script-label {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 4px 12px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .script-block p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }
    .script-block p + p { margin-top: 10px; }
    .script-block em {
      color: #555;
      font-style: italic;
    }

    /* CONFIRMATION CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .checklist-item {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 18px;
      padding: 20px 26px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: start;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-num {
      width: 40px; height: 40px;
      background: linear-gradient(135deg, var(--nu-blue), #0033cc);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .checklist-content h4 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .checklist-content p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .checklist-content .ask {
      display: block;
      margin-top: 8px;
      padding: 10px 14px;
      background: #f7f9ff;
      border-left: 3px solid var(--nu-cyan);
      border-radius: 3px;
      font-size: 0.9rem;
      color: var(--nu-dark-text);
      font-style: italic;
    }

    /* EMAIL BLOCK */
    .email-block {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      border: 1px solid var(--nu-medium-gray);
      font-family: 'Lato', sans-serif;
    }
    .email-headers {
      font-size: 0.88rem;
      color: #555;
      padding-bottom: 14px;
      margin-bottom: 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      line-height: 1.8;
    }
    .email-headers strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      display: inline-block;
      width: 70px;
    }
    .email-body {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }
    .email-body p {
      margin-bottom: 14px;
      padding-left: 20px;
    }
    .email-body p:first-child { padding-left: 0; }
    .email-body ul {
      padding-left: 40px;
      margin-bottom: 14px;
      list-style: none;
    }
    .email-body ul li {
      padding: 3px 0;
    }
    .email-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      margin-right: 10px;
    }
    .email-body .signature {
      padding-left: 20px;
      margin-top: 18px;
      line-height: 1.45;
      font-size: 0.92rem;
    }

    /* CALL LOG */
    .log-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-top: 18px;
    }
    .log-field {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 14px 16px;
    }
    .log-field label {
      display: block;
      font-size: 0.72rem;
      font-weight: 900;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .log-field .line {
      height: 22px;
      border-bottom: 1px dashed #bbb;
    }

    /* RED FLAGS */
    .red-flag-box {
      background: #fff5f5;
      border-left: 4px solid var(--nu-alert-red);
      border-radius: 4px;
      padding: 20px 24px;
      margin-bottom: 14px;
    }
    .red-flag-box h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-alert-red);
      margin-bottom: 6px;
    }
    .red-flag-box p {
      font-size: 0.93rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* CTA */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .nu-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan), var(--nu-blue));
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-inner { padding: 40px 22px; }
      .brief-card, .script-block, .email-block { padding: 20px; }
      .checklist-item { grid-template-columns: 44px 1fr; gap: 12px; padding: 16px 18px; }
      .checklist-num { width: 32px; height: 32px; font-size: 0.88rem; }
      .email-body p, .email-body .signature { padding-left: 10px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .script-block, .checklist, .email-block { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .cta-row { display: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-type">Vendor Call Plan &middot; Written Confirmation</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-inner">

      <!-- BRIEF -->
      <section class="nu-section">
        <div class="brief-card">
          <h2>Call Objective</h2>
          <p>Call H2O Waterproofing and obtain <strong>written confirmation</strong> of the items below. Nothing in this matter moves forward on verbal agreement alone. Every confirmed point leaves the call in an email reply, a PDF, or a signed document in hand.</p>
          <p>Why: verbal commitments from a waterproofing vendor are not enforceable against a schedule, a warranty, or a delivered scope. Paper protects Norris Utilities® and the end customer equally.</p>
          <div class="meta-row">
            <div><strong>Vendor:</strong> H2O Waterproofing</div>
            <div><strong>Owner of record:</strong> Aaron C. Norris</div>
            <div><strong>Doc date:</strong> April 20, 2026</div>
            <div><strong>Required outcome:</strong> Written confirmation on file before close of business</div>
          </div>
        </div>
      </section>

      <!-- CALL SCRIPT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Opening</span> &mdash; Set the Frame in the First 30 Seconds</h2>

        <div class="script-block">
          <span class="script-label">Greeting</span>
          <p>"This is Aaron Norris with Norris Utilities in Birmingham. Do you have a couple of minutes? I need to walk through a short list of items and get each one confirmed in writing today &mdash; either an email reply or a signed page, whichever is easier on your side."</p>
          <p><em>Stay calm, warm, and direct. The phrase "in writing" is said out loud, up front, so it is not a surprise at the end of the call.</em></p>
        </div>

        <div class="script-block">
          <span class="script-label">Anchor the Ask</span>
          <p>"I am going to read you the points one at a time. As we get through each one, I will ask you to confirm, and then I will recap it in an email to you this afternoon. If you can reply 'confirmed' to that email, we are done and we can move forward."</p>
          <p><em>This removes ambiguity. The vendor now expects a follow-up email and has been told in advance that a one-word reply closes the loop.</em></p>
        </div>
      </section>

      <!-- CONFIRMATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Confirmation</span> Checklist &mdash; Every Item Must End in Writing</h2>

        <div class="checklist">
          <div class="checklist-item">
            <div class="checklist-num">1</div>
            <div class="checklist-content">
              <h4>Confirmation of Scope</h4>
              <p>Have H2O Waterproofing state, in their own words, exactly what work they are performing, where it is being performed, and what materials and products are being used. Get the square footage or linear footage if applicable.</p>
              <span class="ask">Ask: "Can you send me in an email the exact scope of work, the address, the square footage covered, and the product or system being applied?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">2</div>
            <div class="checklist-content">
              <h4>Pricing &mdash; Lump Sum, Unit Price, or T&amp;M</h4>
              <p>Lock the number. If it is a lump sum, confirm the total. If it is unit pricing, confirm the unit rate and any minimum. If it is time and materials, confirm the hourly rate, the markup on materials, and the cap, if any.</p>
              <span class="ask">Ask: "What is the total dollar figure, and is that a firm price or subject to change? If it can change, what triggers the change?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">3</div>
            <div class="checklist-content">
              <h4>Start Date &mdash; Firm or Tentative</h4>
              <p>Get a calendar date on paper. If they cannot commit to a firm start, get the window (for example, week of May 4), and get what would cause the window to slip.</p>
              <span class="ask">Ask: "What is the start date you are committing to, and what would cause that to move?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">4</div>
            <div class="checklist-content">
              <h4>Completion Date &mdash; Duration on the Job</h4>
              <p>Get a stated duration and a projected completion date. Tie it to the start date. A vendor that will not put a completion date in writing is a vendor whose schedule cannot be planned around.</p>
              <span class="ask">Ask: "From the start date, how many working days until completion, and what is the completion date you are putting on paper?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">5</div>
            <div class="checklist-content">
              <h4>Warranty &mdash; Term, Coverage, and Exclusions</h4>
              <p>The warranty must be stated by term (for example, 5 years, 10 years, or a manufacturer&rsquo;s pass-through), by coverage (labor, materials, or both), and by exclusions. Ask specifically what voids it.</p>
              <span class="ask">Ask: "What is the warranty in years, does it cover labor and materials, and what voids it? Please include the warranty document as a PDF."</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">6</div>
            <div class="checklist-content">
              <h4>Insurance &mdash; COI with Norris Utilities as Certificate Holder</h4>
              <p>Request a current Certificate of Insurance showing General Liability, Auto, and Workers&rsquo; Compensation coverage. Norris Utilities, LLC must be listed as the certificate holder, and ideally as an additional insured where applicable.</p>
              <span class="ask">Ask: "Please have your agent email a current COI to acnorris@norrisutilities.com with Norris Utilities, LLC listed as the certificate holder."</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">7</div>
            <div class="checklist-content">
              <h4>Payment Terms &mdash; Schedule, Method, and Retention</h4>
              <p>Confirm the deposit percentage, any progress billing milestones, and the final payment trigger. Confirm retention if any is being held. Confirm the acceptable payment methods and the billing entity name and address exactly as it will appear on the invoice.</p>
              <span class="ask">Ask: "What is the payment schedule, how do you want to be paid, and what is the exact legal name and billing address that should appear on our check or ACH?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">8</div>
            <div class="checklist-content">
              <h4>Point of Contact &mdash; Who Runs the Job</h4>
              <p>Get the name, cell, and email of the person who will be on site or running the job day to day. Office numbers are not sufficient when something needs to happen on a jobsite at 7:00 AM.</p>
              <span class="ask">Ask: "Who is the on-site lead for this work, and what is the best cell number and email for that person?"</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">9</div>
            <div class="checklist-content">
              <h4>Change Order Process</h4>
              <p>Confirm in writing that no change to scope, price, or schedule is valid unless issued as a written change order signed by Aaron C. Norris. This single item prevents the majority of downstream disputes.</p>
              <span class="ask">Ask: "Please confirm in the email that any change to scope, price, or schedule requires a written change order signed by me before it is valid."</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-num">10</div>
            <div class="checklist-content">
              <h4>Lien Waivers &mdash; Partial and Final</h4>
              <p>Confirm H2O Waterproofing will provide partial lien waivers with any progress draw and a final, unconditional lien waiver with final payment. This is non-negotiable on any job that touches a property Norris Utilities or a customer holds an interest in.</p>
              <span class="ask">Ask: "Please confirm you will provide partial lien waivers with each progress draw and a final unconditional lien waiver with final payment."</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FOLLOW-UP EMAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Follow-up</span> Email &mdash; Send Within Two Hours of the Call</h2>

        <div class="email-block">
          <div class="email-headers">
            <div><strong>To:</strong> H2O Waterproofing &mdash; [contact name on call]</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Recap of our call &mdash; please reply "confirmed" to each item</div>
          </div>
          <div class="email-body">
            <p>[Name] &mdash;</p>
            <p>Thank you for the time on the phone. As promised, here is the recap of what we covered. Please reply to this email with the word "confirmed" next to each point, or note any correction, so I have our agreement on file.</p>
            <ul>
              <li>Scope of work, address, and product or system being applied</li>
              <li>Total price and whether it is firm or subject to change, with change triggers</li>
              <li>Start date and what would cause it to move</li>
              <li>Duration in working days and the completion date</li>
              <li>Warranty term, coverage (labor and materials), and exclusions &mdash; PDF to follow</li>
              <li>Current Certificate of Insurance &mdash; Norris Utilities, LLC listed as certificate holder</li>
              <li>Payment schedule, accepted methods, and the exact legal name and billing address for the invoice</li>
              <li>On-site point of contact &mdash; name, cell, email</li>
              <li>Any change to scope, price, or schedule requires a written change order signed by Aaron C. Norris before it is valid</li>
              <li>Partial lien waivers with each progress draw and a final unconditional lien waiver with final payment</li>
            </ul>
            <p>Once I have your reply and the COI on file, I am good to proceed on our end. If any item needs more time to answer, let me know which one and when you will have it back to me.</p>
            <p>Sincerely,</p>
            <div class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- RED FLAGS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Red Flags</span> &mdash; Stop and Reassess if You Hear Any of These</h2>

        <div class="red-flag-box">
          <h4>"We do not put that in writing."</h4>
          <p>Any refusal to confirm scope, price, schedule, warranty, or insurance in writing is a stop-work signal. A reputable waterproofing vendor will put every material term on paper without resistance.</p>
        </div>
        <div class="red-flag-box">
          <h4>"We'll handle it as we go."</h4>
          <p>Open-ended change terms create open-ended invoices. Insist on a written change order requirement before any work begins.</p>
        </div>
        <div class="red-flag-box">
          <h4>"Our insurance agent is hard to reach."</h4>
          <p>Certificates of Insurance are issued in minutes by any active agent. A delayed COI often means coverage is lapsed or inadequate. Do not release a deposit until the COI is on file.</p>
        </div>
        <div class="red-flag-box">
          <h4>"The warranty is verbal, we stand behind our work."</h4>
          <p>Verbal warranties cannot be transferred, enforced, or assigned. Get the written warranty document &mdash; manufacturer pass-through, contractor-backed, or both &mdash; in a PDF.</p>
        </div>
        <div class="red-flag-box">
          <h4>"We don&rsquo;t bother with lien waivers on small jobs."</h4>
          <p>Lien waivers protect the property owner regardless of job size. No progress payment goes out without a partial waiver; no final payment goes out without a final unconditional waiver.</p>
        </div>
      </section>

      <!-- CALL LOG -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Call Log</span> &mdash; Record Below for the File</h2>

        <div class="log-grid">
          <div class="log-field"><label>Date of Call</label><div class="line"></div></div>
          <div class="log-field"><label>Time (Start &mdash; End)</label><div class="line"></div></div>
          <div class="log-field"><label>H2O Contact Name</label><div class="line"></div></div>
          <div class="log-field"><label>H2O Contact Title</label><div class="line"></div></div>
          <div class="log-field"><label>Phone Number Used</label><div class="line"></div></div>
          <div class="log-field"><label>Email for Recap</label><div class="line"></div></div>
          <div class="log-field"><label>Scope Confirmed?</label><div class="line"></div></div>
          <div class="log-field"><label>Price Confirmed ($)</label><div class="line"></div></div>
          <div class="log-field"><label>Start Date</label><div class="line"></div></div>
          <div class="log-field"><label>Completion Date</label><div class="line"></div></div>
          <div class="log-field"><label>Warranty Term</label><div class="line"></div></div>
          <div class="log-field"><label>COI Received (Y/N)</label><div class="line"></div></div>
          <div class="log-field"><label>Change Order Clause OK?</label><div class="line"></div></div>
          <div class="log-field"><label>Lien Waiver Clause OK?</label><div class="line"></div></div>
          <div class="log-field"><label>Recap Email Sent At</label><div class="line"></div></div>
          <div class="log-field"><label>Written Reply Received?</label><div class="line"></div></div>
        </div>

        <div class="cta-row">
          <a class="nu-btn-primary" href="tel:2055001343">Call Aaron &mdash; 205-500-1343</a>
          <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=H2O%20Waterproofing%20%E2%80%94%20Written%20Confirmation%20Recap">Email Recap to Aaron</a>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>