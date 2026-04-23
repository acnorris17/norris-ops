<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Micah / Sign Online Trade — Norris Utilities®</title>
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
      --nu-success: #1E8449;
      --nu-warning: #B7791F;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 90px;
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
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 18px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* CHEVRON TRANSITION */
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #B7791F 0%, var(--nu-accent-gold) 100%);
      color: var(--nu-white);
      padding: 8px 18px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 18px;
      box-shadow: 0 4px 14px rgba(183,121,31,0.3);
    }
    .priority-banner::before {
      content: '●';
      color: var(--nu-white);
      font-size: 0.7rem;
    }

    /* PAGE TITLE */
    .page-title {
      font-weight: 900;
      font-size: 2.5rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .page-title .accent {
      color: var(--nu-blue);
    }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      margin-bottom: 8px;
    }
    .meta-line {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.88rem;
      color: #666;
      margin-bottom: 36px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .meta-line .meta-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .meta-line .meta-label {
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.75rem;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin-bottom: 18px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .first-word { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* STEP CARDS */
    .step-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .step-card {
      display: grid;
      grid-template-columns: 64px 1fr;
      gap: 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.08);
    }
    .step-number {
      width: 56px; height: 56px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
      box-shadow: 0 4px 12px rgba(0,0,255,0.25);
    }
    .step-body h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p {
      color: #444;
      font-size: 0.96rem;
      margin-bottom: 8px;
    }
    .step-body ul {
      margin: 8px 0 4px 0;
      padding-left: 18px;
    }
    .step-body li {
      margin-bottom: 6px;
      font-size: 0.92rem;
      color: #444;
    }
    .step-tag {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-right: 6px;
      margin-top: 4px;
    }

    /* EMAIL DRAFT BOX */
    .email-draft {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-top: 14px;
      font-size: 0.95rem;
      line-height: 1.7;
    }
    .email-draft .email-header {
      border-bottom: 1px dashed #cdd1d8;
      padding-bottom: 12px;
      margin-bottom: 14px;
      font-size: 0.85rem;
      color: #555;
    }
    .email-draft .email-header span {
      color: var(--nu-blue);
      font-weight: 700;
      display: inline-block;
      width: 70px;
    }
    .email-draft .email-body {
      color: var(--nu-dark-text);
      white-space: pre-line;
    }
    .email-draft .email-body p { margin-bottom: 10px; }

    /* INFO PANEL */
    .info-panel {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .info-cell {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
    }
    .info-cell .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .info-cell .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .info-cell .sub {
      font-size: 0.85rem;
      color: #666;
      margin-top: 4px;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 2px solid var(--nu-blue);
      border-radius: 10px;
      padding: 24px 28px;
      margin-top: 12px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist-text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      font-weight: 400;
    }
    .checklist-text strong {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 6px;
      margin: 18px 0;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .callout strong { color: var(--nu-blue); }

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
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px 56px; }
      .page-title { font-size: 1.85rem; }
      .step-card { grid-template-columns: 1fr; gap: 12px; }
      .step-number { width: 48px; height: 48px; font-size: 1.2rem; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-card { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <div class="priority-banner">Action Required</div>

      <h1 class="page-title">
        <span class="accent">Micah —</span> Email Sequence + Sign Online Trade Meeting
      </h1>
      <p class="page-subtitle">Send the email thread to Micah, then schedule the working meeting to set up Sign Online Trade access.</p>

      <div class="meta-line">
        <div class="meta-item"><span class="meta-label">Source:</span> reMarkable Action Item</div>
        <div class="meta-item"><span class="meta-label">Owner:</span> Aaron C. Norris</div>
        <div class="meta-item"><span class="meta-label">Logged:</span> April 23, 2026</div>
        <div class="meta-item"><span class="meta-label">Status:</span> Open</div>
      </div>

      <!-- EXECUTIVE SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">The</span> <span class="rest">Two-Step Plan</span></h2>
        <div class="info-panel">
          <div class="info-cell">
            <div class="label">Step 1</div>
            <div class="value">Send Emails to Micah</div>
            <div class="sub">Forward the relevant context thread + a clear cover note framing what's needed.</div>
          </div>
          <div class="info-cell">
            <div class="label">Step 2</div>
            <div class="value">Schedule Working Meeting</div>
            <div class="sub">30-minute call to walk through Sign Online Trade setup together.</div>
          </div>
          <div class="info-cell">
            <div class="label">Outcome</div>
            <div class="value">Sign Online Trade Live</div>
            <div class="sub">Account configured, login verified, first transaction path tested.</div>
          </div>
        </div>
      </section>

      <!-- STEP-BY-STEP -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Execution</span> <span class="rest">Sequence</span></h2>
        <div class="step-grid">

          <!-- STEP 1 -->
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-body">
              <h3>Pull the Relevant Email Thread</h3>
              <p>Locate the existing thread that references Sign Online Trade — anything Micah will need for context (vendor onboarding messages, account-setup links, prior correspondence).</p>
              <ul>
                <li>Open Gmail → search for "Sign Online Trade" + "Micah"</li>
                <li>Confirm the latest message is the one to forward (no stale info)</li>
                <li>Strip any internal pricing or margin commentary before forwarding</li>
              </ul>
              <span class="step-tag">Gmail</span>
              <span class="step-tag">5 min</span>
            </div>
          </div>

          <!-- STEP 2 -->
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-body">
              <h3>Send the Cover Email to Micah</h3>
              <p>Forward the thread with a short cover note in Aaron's voice — direct, warm, leads with the ask.</p>
              <ul>
                <li>Subject line states purpose plainly</li>
                <li>Cover note explains what Micah is being asked to review and why</li>
                <li>Closes with the meeting ask so step 3 happens naturally</li>
              </ul>
              <span class="step-tag">Email Voice</span>
              <span class="step-tag">10 min</span>

              <div class="email-draft">
                <div class="email-header">
                  <div><span>To:</span> Micah</div>
                  <div><span>From:</span> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
                  <div><span>Subject:</span> Sign Online Trade — getting you set up</div>
                </div>
                <div class="email-body">
                  <p>Micah —</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Forwarding the thread on Sign Online Trade so you have the full picture. Take a look when you get a minute — the account-setup pieces are toward the bottom.</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Once you've had a chance to read through, let's get on a quick call and walk through the setup together. Want to be sure we get the access and roles right the first time so we're not chasing it later.</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Reply with a couple of windows that work this week and I'll send a calendar hold.</p>
                  <p>Sincerely,</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities, LLC<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Cell: 205-500-1343<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;acnorris@norrisutilities.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 3 -->
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-body">
              <h3>Wait for Micah's Reply (Same-Day or Next-Day)</h3>
              <p>If no reply within 48 hours, send a one-line nudge: "Micah — circling back on the Sign Online Trade thread. What does your week look like?"</p>
              <ul>
                <li>Set a 48-hour follow-up reminder when the email goes out</li>
                <li>Telegram alert if Aaron is away from inbox</li>
              </ul>
              <span class="step-tag">Follow-up Loop</span>
            </div>
          </div>

          <!-- STEP 4 -->
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-body">
              <h3>Schedule the Working Meeting</h3>
              <p>Once Micah responds with windows, send a Google Calendar invite with all the working materials linked.</p>
              <ul>
                <li><strong>Duration:</strong> 30 minutes (book 45 to leave buffer)</li>
                <li><strong>Format:</strong> Phone or video — Aaron's preference: phone unless screen share is needed</li>
                <li><strong>Title:</strong> "Norris Utilities × Micah — Sign Online Trade Setup"</li>
                <li><strong>Description:</strong> Agenda + link to the original thread + access checklist below</li>
                <li><strong>Location:</strong> Aaron's cell 205-500-1343 OR Google Meet link</li>
              </ul>
              <span class="step-tag">Google Calendar</span>
              <span class="step-tag">5 min</span>
            </div>
          </div>

          <!-- STEP 5 -->
          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-body">
              <h3>Run the Meeting — Setup Checklist</h3>
              <p>Walk through together, end the call with the account live.</p>
              <div class="checklist">
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>Account credentials</strong> — confirm Micah has the login or knows where to retrieve it</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>User roles &amp; permissions</strong> — admin vs. trade-only, who can post and who can view</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>Norris Utilities® profile setup</strong> — company name, EIN, contact info, logo upload</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>Listings or trade categories</strong> — which equipment categories Norris is selling/trading</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>Notifications</strong> — route alerts to Aaron's inbox + Telegram if supported</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>First test transaction or listing</strong> — post one item end-to-end to verify the flow</div>
                </div>
                <div class="checklist-item">
                  <div class="checkbox"></div>
                  <div class="checklist-text"><strong>Next-step ownership</strong> — agree who handles ongoing posts (Aaron, Caroline Butler, or Micah)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 6 -->
          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-body">
              <h3>Post-Meeting Wrap</h3>
              <p>Lock in the outcome before the day ends — no loose threads.</p>
              <ul>
                <li>Send Micah a one-paragraph recap email — what was decided, who owns what, when next check-in happens</li>
                <li>Update Norris Utilities master tracker: Sign Online Trade marked active</li>
                <li>Add account credentials to secure password vault</li>
                <li>Close this action item in reMarkable / task queue</li>
              </ul>
              <span class="step-tag">Recap Email</span>
              <span class="step-tag">Tracker Update</span>
            </div>
          </div>

        </div>
      </section>

      <!-- AARON NOTES -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first-word">Notes</span> <span class="rest">for Aaron</span></h2>
        <div class="callout">
          <strong>Voice reminder:</strong> Lead with the ask. Don't bury the meeting request at the bottom of the cover email — the second paragraph is the one Micah will act on.
        </div>
        <div class="callout">
          <strong>Time it:</strong> Send the email before noon so Micah has the rest of his workday to reply. A morning send tends to convert to a same-week meeting; an evening send slides to next week.
        </div>
        <div class="callout">
          <strong>If Sign Online Trade is the platform name:</strong> verify the exact name in their welcome email before mentioning it back to Micah — getting the platform name right on the first send signals you've done the homework.
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