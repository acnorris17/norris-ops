<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan — Micah / Sign Online Trading — Norris Utilities®</title>
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
      --nu-success: #0a7a3a;
      --nu-warning: #b8860b;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }

    /* ══ CHEVRON ══ */
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

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 40px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      line-height: 1.15;
    }
    .nu-page-title span { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-weight: 400;
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 8px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 14px;
      padding: 14px 18px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.92rem;
    }
    .nu-meta-row strong { color: var(--nu-dark-text); }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-top: 48px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ STEP CARDS ══ */
    .nu-steps {
      display: grid;
      gap: 20px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-step-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.4rem;
      box-shadow: 0 4px 10px rgba(0,0,255,0.25);
    }
    .nu-step-title {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-step-when {
      display: inline-block;
      background: var(--nu-navy);
      color: var(--nu-cyan);
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-step p {
      margin-bottom: 8px;
    }
    .nu-step ul {
      margin: 8px 0 4px 20px;
    }
    .nu-step ul li {
      margin-bottom: 4px;
    }

    /* ══ EMAIL DRAFT BLOCK ══ */
    .nu-email-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-email-header {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 14px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nu-email-label {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-cyan);
    }
    .nu-email-order {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.75);
      font-weight: 400;
    }
    .nu-email-fields {
      padding: 16px 22px 8px;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.92rem;
    }
    .nu-email-fields div {
      margin-bottom: 4px;
    }
    .nu-email-fields strong {
      display: inline-block;
      width: 70px;
      color: #666;
      font-weight: 700;
    }
    .nu-email-body {
      padding: 20px 22px;
      font-size: 0.97rem;
      line-height: 1.7;
      color: var(--nu-body-text);
    }
    .nu-email-body p {
      margin-bottom: 12px;
      padding-left: 18px;
    }
    .nu-email-body p:first-child {
      padding-left: 0;
    }
    .nu-email-body .bullets {
      padding-left: 36px;
      margin-bottom: 12px;
    }
    .nu-email-body .bullets div {
      margin-bottom: 4px;
    }
    .nu-email-body .signoff {
      padding-left: 0;
      margin-top: 18px;
    }
    .nu-email-body .signoff .name {
      padding-left: 18px;
      margin-top: 2px;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 24px;
    }
    .nu-checklist li {
      list-style: none;
      padding: 8px 0 8px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 12px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ MEETING CARD ══ */
    .nu-meeting-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
    }
    .nu-meeting-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .nu-meeting-tile h4 {
      font-weight: 900;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-meeting-tile p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-meeting-tile .sub {
      font-weight: 400;
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* ══ CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #fffbe6 0%, #fff5c4 100%);
      border-left: 4px solid var(--nu-accent-gold);
      padding: 16px 20px;
      border-radius: 6px;
      margin: 24px 0;
      font-size: 0.95rem;
    }
    .nu-callout strong { color: #7a5a00; }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
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
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-step { grid-template-columns: 1fr; }
      .nu-step-num { margin: 0 auto; }
      .nu-email-fields strong { width: 60px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-email-card { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="nu-page-title"><span>Action Plan</span> — Micah / Sign Online Trading</h1>
      <p class="nu-page-subtitle">Send emails, then schedule the meeting.</p>

      <div class="nu-meta-row">
        <div><strong>Source:</strong> reMarkable action item</div>
        <div><strong>Owner:</strong> Aaron C. Norris</div>
        <div><strong>Date opened:</strong> 2026-04-22</div>
        <div><strong>Priority:</strong> Active — sequence matters</div>
      </div>

      <!-- SECTION: SEQUENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>The</span> Sequence</h2>

        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <div>
              <div class="nu-step-when">Today</div>
              <h3 class="nu-step-title">Send the context email to Micah</h3>
              <p>Plain introduction and purpose. Gets Micah oriented before the scheduling ask. See draft below (Email #1).</p>
              <ul>
                <li>Confirm the account still needs what Micah and I last discussed</li>
                <li>Confirm the decision-makers on his side</li>
                <li>Set expectation that a short working meeting is the next step</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <div>
              <div class="nu-step-when">Same day, 30 min later</div>
              <h3 class="nu-step-title">Send the details email to Micah</h3>
              <p>The specifics — what Norris Utilities® brings to the Sign Online Trading relationship, and what I need from him to move. See draft below (Email #2).</p>
              <ul>
                <li>Product scope and margin structure</li>
                <li>Three channel tiers: Direct, Dealer, Distributor</li>
                <li>Any open items carried from the last conversation</li>
              </ul>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <div>
              <div class="nu-step-when">After he replies</div>
              <h3 class="nu-step-title">Schedule the Sign Online Trading meeting</h3>
              <p>Do not propose a calendar slot until he has responded to both emails. Then send the meeting invite with the three-option window below.</p>
              <ul>
                <li>Offer Zoom by default; in-person on request</li>
                <li>Block 45 minutes — working meeting, not a demo</li>
                <li>Cc Caroline Butler on the invite for logistics</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION: EMAIL DRAFTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Email</span> Drafts</h2>

        <!-- EMAIL 1 -->
        <div class="nu-email-card">
          <div class="nu-email-header">
            <div class="nu-email-label">Email #1 — Context</div>
            <div class="nu-email-order">Send first</div>
          </div>
          <div class="nu-email-fields">
            <div><strong>To:</strong> Micah</div>
            <div><strong>From:</strong> acnorris@norrisutilities.com</div>
            <div><strong>Subject:</strong> Sign Online Trading — picking up where we left off</div>
          </div>
          <div class="nu-email-body">
            <p>Micah —</p>
            <p>Circling back on Sign Online Trading. Before I suggest a time to meet, I want to make sure we are working from the same picture.</p>
            <p>A couple of things I would like to confirm on your end:</p>
            <div class="bullets">
              <div>• The scope we last discussed is still the right scope</div>
              <div>• You are still the right point of contact, or whether I need to include anyone else</div>
              <div>• Any timing pressure on your side I should know about</div>
            </div>
            <p>A follow-up email is coming right behind this one with the specifics. After you have both in hand, I will send over a couple of times that work on my end for a short working meeting.</p>
            <div class="signoff">
              <p>Sincerely,</p>
              <p class="name">Aaron C. Norris</p>
            </div>
          </div>
        </div>

        <!-- EMAIL 2 -->
        <div class="nu-email-card">
          <div class="nu-email-header">
            <div class="nu-email-label">Email #2 — Details</div>
            <div class="nu-email-order">Send second, same day</div>
          </div>
          <div class="nu-email-fields">
            <div><strong>To:</strong> Micah</div>
            <div><strong>From:</strong> acnorris@norrisutilities.com</div>
            <div><strong>Subject:</strong> Sign Online Trading — what we bring and what I need</div>
          </div>
          <div class="nu-email-body">
            <p>Micah —</p>
            <p>As promised, here are the specifics so we can use the meeting time to decide rather than introduce.</p>
            <p>What Norris Utilities® brings to Sign Online Trading:</p>
            <div class="bullets">
              <div>• FlexPro Armor bucket covers — handmade USA, our four core SKUs (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C)</div>
              <div>• Samson Rope — authorized distributor pricing</div>
              <div>• Skylift bucket trucks and Bay Shore Systems drill rigs on the equipment side</div>
              <div>• Three-channel structure: Direct, Dealer, Distributor</div>
            </div>
            <p>What I need from you to move this forward:</p>
            <div class="bullets">
              <div>• The channel tier that fits Sign Online Trading's model</div>
              <div>• Volume expectation for the first quarter of the relationship</div>
              <div>• Any account setup items on your end I should have in hand before we meet</div>
            </div>
            <p>Once you have had a chance to read both notes, I will send a meeting request with a couple of times. Forty-five minutes is all we need.</p>
            <div class="signoff">
              <p>Sincerely,</p>
              <p class="name">Aaron C. Norris</p>
            </div>
          </div>
        </div>

      </section>

      <!-- SECTION: MEETING -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Meeting</span> — Sign Online Trading</h2>

        <div class="nu-meeting-grid">
          <div class="nu-meeting-tile">
            <h4>Format</h4>
            <p>Zoom (default)</p>
            <div class="sub">In-person available on request</div>
          </div>
          <div class="nu-meeting-tile">
            <h4>Length</h4>
            <p>45 minutes</p>
            <div class="sub">Working meeting — not a demo</div>
          </div>
          <div class="nu-meeting-tile">
            <h4>Attendees</h4>
            <p>Aaron + Micah</p>
            <div class="sub">CB cc'd on logistics</div>
          </div>
          <div class="nu-meeting-tile">
            <h4>Purpose</h4>
            <p>Decide channel tier &amp; first-quarter scope</p>
            <div class="sub">Introductions already handled by email</div>
          </div>
        </div>

        <div class="nu-callout">
          <strong>Do not schedule before Micah replies.</strong> The two emails do the work up front. Sending a calendar invite before he has read them forces him to schedule blind — the meeting becomes an introduction instead of a decision.
        </div>

        <h3 class="nu-section-title" style="font-size:1.2rem; margin-top:28px;"><span>Proposed</span> Time Windows</h3>
        <div class="nu-meeting-grid">
          <div class="nu-meeting-tile">
            <h4>Option A</h4>
            <p>Tue, Apr 28 — 10:00 AM CT</p>
            <div class="sub">45 minutes</div>
          </div>
          <div class="nu-meeting-tile">
            <h4>Option B</h4>
            <p>Wed, Apr 29 — 2:00 PM CT</p>
            <div class="sub">45 minutes</div>
          </div>
          <div class="nu-meeting-tile">
            <h4>Option C</h4>
            <p>Thu, Apr 30 — 8:30 AM CT</p>
            <div class="sub">45 minutes</div>
          </div>
        </div>
      </section>

      <!-- SECTION: CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span>Action</span> Checklist</h2>
        <ul class="nu-checklist">
          <li>Email #1 (Context) sent to Micah</li>
          <li>Email #2 (Details) sent to Micah — same day, ~30 min after Email #1</li>
          <li>Both emails logged in the master tracker under Sign Online Trading</li>
          <li>Micah's reply received and reviewed</li>
          <li>Meeting invite sent with Option A / B / C — CB cc'd</li>
          <li>Meeting held; outcome recorded (channel tier, Q1 volume, next steps)</li>
          <li>Follow-up sent within 24 hours of the meeting with written summary</li>
        </ul>
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