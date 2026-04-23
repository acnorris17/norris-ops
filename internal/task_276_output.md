<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Written Confirmation | Norris Utilities®</title>
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
      --nu-success-green: #0A7D3E;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }

    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 18px;
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
      margin-bottom: 22px;
      padding-left: 0.75em;
    }

    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }

    /* ══ WHITE CHEVRON TRANSITION ══ */
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

    /* ══ MAIN CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }

    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ ACTION ITEM HEADER ══ */
    .action-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 18px;
    }

    .action-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .tag-priority { background: var(--nu-alert-red); color: var(--nu-white); }
    .tag-source { background: var(--nu-navy); color: var(--nu-cyan); }
    .tag-status { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title .first-word {
      color: #0033cc;
    }

    .page-sub {
      font-size: 1.05rem;
      color: #555;
      max-width: 820px;
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    /* ══ CALLOUT ══ */
    .callout {
      background: linear-gradient(135deg, #FFF9E6 0%, #FFF3CC 100%);
      border-left: 5px solid var(--nu-accent-gold);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 36px;
    }
    .callout-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #7a5b00;
      margin-bottom: 6px;
    }
    .callout-body {
      font-size: 1rem;
      color: #3a2e00;
      line-height: 1.6;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    .nu-section-title .first-word { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ CONFIRMATION CHECKLIST ══ */
    .checklist {
      display: grid;
      gap: 14px;
    }
    .checklist-item {
      display: flex;
      gap: 16px;
      background: var(--nu-white);
      padding: 18px 22px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
    }
    .check-num {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.05rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .check-body { flex: 1; }
    .check-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .check-detail {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.55;
    }

    /* ══ TALKING POINTS ══ */
    .talking-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .talking-card {
      background: var(--nu-white);
      padding: 22px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .talking-card h4 {
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .talking-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }

    /* ══ QUESTIONS LIST ══ */
    .questions {
      background: var(--nu-light-gray);
      padding: 26px 30px;
      border-radius: 10px;
      border: 1px solid var(--nu-medium-gray);
    }
    .questions ol {
      padding-left: 20px;
      margin: 0;
    }
    .questions li {
      font-size: 1rem;
      margin-bottom: 12px;
      padding-left: 8px;
      line-height: 1.55;
      color: var(--nu-dark-text);
    }
    .questions li::marker {
      color: var(--nu-blue);
      font-weight: 900;
    }
    .questions li:last-child { margin-bottom: 0; }

    /* ══ CONTACT BOX ══ */
    .contact-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .contact-cell {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .contact-cell .lbl {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .contact-cell .val {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .contact-cell .val a {
      color: var(--nu-blue);
      text-decoration: none;
    }
    .contact-cell .val a:hover { text-decoration: underline; }

    /* ══ EMAIL TEMPLATE ══ */
    .email-template {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 28px 32px;
      box-shadow: 0 4px 18px rgba(0,0,255,0.08);
    }
    .email-header {
      padding-bottom: 14px;
      margin-bottom: 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-family: 'SF Mono', Monaco, monospace;
      font-size: 0.88rem;
      color: #555;
    }
    .email-header div { margin-bottom: 4px; }
    .email-header strong { color: var(--nu-dark-text); display: inline-block; min-width: 72px; }
    .email-body {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.75;
    }
    .email-body p {
      margin-bottom: 14px;
      padding-left: 20px;
    }
    .email-body .sig {
      padding-left: 20px;
      margin-top: 22px;
      font-size: 0.98rem;
      line-height: 1.5;
    }

    /* ══ BUTTONS ══ */
    .btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }
    .nu-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 26px;
      border-radius: 5px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px 36px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 22px 32px; }
      .page-title { font-size: 1.75rem; }
      .email-template { padding: 20px; }
      .email-body p, .email-body .sig { padding-left: 0; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .btn-row { display: none; }
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
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="action-meta">
        <span class="action-tag tag-priority">Priority Action</span>
        <span class="action-tag tag-source">reMarkable Capture</span>
        <span class="action-tag tag-status">Open — Written Confirmation Needed</span>
      </div>

      <h1 class="page-title"><span class="first-word">Call</span> H2O Waterproofing — Secure Written Confirmation</h1>
      <p class="page-sub">Action item from the reMarkable tablet. Before the job proceeds, H2O Waterproofing needs to put in writing (1) what is confirmed, (2) scope of work, and (3) the pricing and warranty terms. Verbal agreements will not be accepted.</p>

      <!-- CALLOUT -->
      <div class="callout">
        <div class="callout-label">Why This Must Be In Writing</div>
        <div class="callout-body">
          Verbal quotes and verbal "yes, we'll cover that" statements do not survive disputes, warranty claims, or change orders. Every commitment H2O Waterproofing makes on the call must come back as a written email, signed proposal, or countersigned scope-of-work document — on their letterhead, with their name, date, and signature block. No exceptions.
        </div>
      </div>

      <!-- CONTACT BOX -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Call</span> <span class="rest">Details</span></h2>
        <div class="contact-row">
          <div class="contact-cell">
            <div class="lbl">Vendor</div>
            <div class="val">H2O Waterproofing</div>
          </div>
          <div class="contact-cell">
            <div class="lbl">Caller</div>
            <div class="val">Aaron C. Norris</div>
          </div>
          <div class="contact-cell">
            <div class="lbl">Desired Outcome</div>
            <div class="val">Written confirmation via email</div>
          </div>
          <div class="contact-cell">
            <div class="lbl">Deadline</div>
            <div class="val">Before any work begins</div>
          </div>
        </div>
      </section>

      <!-- CONFIRMATION CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Items</span> <span class="rest">to Get in Writing</span></h2>
        <div class="checklist">

          <div class="checklist-item">
            <div class="check-num">1</div>
            <div class="check-body">
              <div class="check-title">Confirmation of Scope</div>
              <div class="check-detail">Exact areas to be waterproofed — square footage, surfaces (foundation, walls, roof deck, basement, etc.), and any areas explicitly excluded. "As discussed" is not acceptable — need addresses, measurements, and identifying photos.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">2</div>
            <div class="check-body">
              <div class="check-title">Materials &amp; Method</div>
              <div class="check-detail">Which product(s) will be applied, number of coats, cure time, and surface prep requirements. Manufacturer data sheet or product name must be listed — no generic "waterproof sealant."</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">3</div>
            <div class="check-body">
              <div class="check-title">Total Price &amp; Payment Terms</div>
              <div class="check-detail">All-in dollar figure. Breakdown of labor vs. materials. Any deposit required. Balance due on completion vs. net-30. No "plus change orders if we find something" language without a capped dollar limit.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">4</div>
            <div class="check-body">
              <div class="check-title">Warranty</div>
              <div class="check-detail">Length of the waterproofing warranty (in years), what is covered (leaks, product failure, workmanship), what voids it, and whether it is transferable. If they offer a lifetime warranty, put the definition of "lifetime" in writing.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">5</div>
            <div class="check-body">
              <div class="check-title">Timeline</div>
              <div class="check-detail">Start date, expected number of working days on site, and weather-delay policy. Confirm access requirements (power, water, staging area) so there are no surprise delays.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">6</div>
            <div class="check-body">
              <div class="check-title">Insurance &amp; License</div>
              <div class="check-detail">Current Certificate of Insurance listing Norris Utilities, LLC as additional insured on general liability. Copy of Alabama contractor's license. W-9 for accounts payable.</div>
            </div>
          </div>

        </div>
      </section>

      <!-- QUESTIONS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Questions</span> <span class="rest">to Ask on the Call</span></h2>
        <div class="questions">
          <ol>
            <li>Can you email the confirmation of scope and pricing by end of business today?</li>
            <li>What product are you using, and do you have the manufacturer's data sheet you can attach?</li>
            <li>What is the warranty period, and is that in writing in your proposal or separate?</li>
            <li>What voids the warranty — and is the warranty transferable if the property changes hands?</li>
            <li>If you uncover a condition that wasn't in the initial scope, what is your change-order process and capped overage amount?</li>
            <li>Can you list Norris Utilities, LLC as additional insured on the COI before the first day of work?</li>
            <li>Who is the on-site foreman, and what's the best number to reach them during the job?</li>
          </ol>
        </div>
      </section>

      <!-- TALKING POINTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Call</span> <span class="rest">Talking Points</span></h2>
        <div class="talking-grid">

          <div class="talking-card">
            <h4>Opening</h4>
            <p>"Hey — Aaron Norris with Norris Utilities. I'm circling back on the waterproofing job. Before we lock anything in, I need to get the scope, pricing, and warranty in writing so we're both on the same page."</p>
          </div>

          <div class="talking-card">
            <h4>The Ask</h4>
            <p>"Can you shoot me an email today that lists exactly what's covered, the product you're using, the total price, the warranty terms, and your timeline? Nothing starts until that's in my inbox."</p>
          </div>

          <div class="talking-card">
            <h4>Handling Push-Back</h4>
            <p>"I'm not trying to slow anything down — this is how we do every job. Once I have it in writing I can approve and you can mobilize. It protects both of us if anything comes up later."</p>
          </div>

          <div class="talking-card">
            <h4>Close</h4>
            <p>"What time today can I expect the email? Great — I'll watch for it and confirm back within the hour so you can schedule the crew."</p>
          </div>

        </div>
      </section>

      <!-- EMAIL TEMPLATE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Follow-Up</span> <span class="rest">Email Template</span></h2>
        <p style="margin-bottom: 18px; color: #555;">Send this immediately after the call to lock in what was verbally agreed and trigger the written response.</p>

        <div class="email-template">
          <div class="email-header">
            <div><strong>To:</strong> H2O Waterproofing</div>
            <div><strong>From:</strong> acnorris@norrisutilities.com</div>
            <div><strong>Subject:</strong> Written Confirmation — Waterproofing Scope, Pricing &amp; Warranty</div>
          </div>
          <div class="email-body">
            <p>Team —</p>

            <p>Thanks for the call. To move forward I need the following in writing before work begins:</p>

            <p>• Scope of work (areas, square footage, exclusions)<br>
            • Product name and manufacturer data sheet<br>
            • Total price, payment terms, and any capped change-order overage<br>
            • Warranty length, what is covered, and transferability<br>
            • Start date and expected working days on site<br>
            • Certificate of Insurance naming Norris Utilities, LLC as additional insured<br>
            • Current Alabama contractor's license and W-9</p>

            <p>Once I have these in hand I'll send written approval back the same day so your crew can mobilize.</p>

            <p>Sincerely,</p>

            <div class="sig">
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </div>
          </div>
        </div>

        <div class="btn-row">
          <a class="nu-btn nu-btn-primary" href="tel:2055001343">Ready to Call — 205-500-1343</a>
          <a class="nu-btn nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=H2O%20Waterproofing%20Written%20Confirmation">Open Follow-Up Email</a>
        </div>
      </section>

      <!-- VERIFICATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Before</span> <span class="rest">Approving the Job</span></h2>
        <div class="checklist">

          <div class="checklist-item">
            <div class="check-num">A</div>
            <div class="check-body">
              <div class="check-title">Verify the email arrived</div>
              <div class="check-detail">H2O Waterproofing's written confirmation is in the inbox — not just a voicemail or text.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">B</div>
            <div class="check-body">
              <div class="check-title">Match email content to the six items above</div>
              <div class="check-detail">If any item is missing or vague, reply and request clarification before signing.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">C</div>
            <div class="check-body">
              <div class="check-title">File the COI and W-9</div>
              <div class="check-detail">Save to the Norris Utilities® vendor file. Flag the COI expiration date on the calendar.</div>
            </div>
          </div>

          <div class="checklist-item">
            <div class="check-num">D</div>
            <div class="check-body">
              <div class="check-title">Send written approval</div>
              <div class="check-detail">Reply "Approved — proceed as written" and copy the proposal. That creates the matched written record on both sides.</div>
            </div>
          </div>

        </div>
      </section>

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