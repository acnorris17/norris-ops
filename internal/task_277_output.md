<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Micah Follow-Up — Sign Online Trade — Norris Utilities®</title>
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
    }

    /* WHITE CHEVRON */
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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* SECTION HEADERS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.75rem;
      color: #0033cc;
      margin-bottom: 24px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ACTION BRIEF */
    .action-brief {
      background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      margin-bottom: 40px;
      border-radius: 4px;
    }
    .action-brief-label {
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .action-brief-text {
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      line-height: 1.5;
    }
    .action-brief-text strong { color: #0033cc; font-weight: 900; }

    /* STEP CARDS */
    .steps-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-bottom: 48px;
    }
    .step-card {
      background: var(--nu-white);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      padding: 28px 32px;
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 20px;
      align-items: start;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
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
      font-size: 1.5rem;
      box-shadow: 0 4px 12px rgba(0,0,255,0.2);
    }
    .step-content h3 {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .step-content p {
      color: var(--nu-body-text);
      font-size: 0.98rem;
      margin-bottom: 10px;
    }
    .step-content .step-meta {
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
    }

    /* EMAIL CARDS */
    .email-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 40px;
    }
    .email-card {
      background: var(--nu-white);
      border-radius: 8px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .email-card-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 16px 22px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .email-card-header .badge {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 3px 10px;
      border-radius: 3px;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
    }
    .email-card-body { padding: 22px 26px; }
    .email-meta {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .email-meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .email-subject {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .email-body {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      line-height: 1.7;
    }
    .email-body p { margin-bottom: 12px; }
    .email-body .em-dash-greeting { font-weight: 700; }
    .email-sig {
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-size: 0.88rem;
      color: #555;
    }

    /* MEETING SCHEDULE BOX */
    .meeting-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 32px 36px;
      margin-bottom: 40px;
      position: relative;
      overflow: hidden;
    }
    .meeting-box::after {
      content: '';
      position: absolute;
      top: -30%; right: -10%;
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(6,208,255,0.12) 0%, transparent 70%);
      border-radius: 50%;
    }
    .meeting-box > * { position: relative; z-index: 1; }
    .meeting-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 18px;
      color: var(--nu-cyan);
    }
    .meeting-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }
    .meeting-item {
      padding: 14px 0;
    }
    .meeting-item-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .meeting-item-value {
      font-size: 1.05rem;
      color: var(--nu-white);
      font-weight: 700;
    }

    /* AGENDA */
    .agenda {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 40px;
    }
    .agenda ul {
      list-style: none;
      margin-top: 12px;
    }
    .agenda li {
      padding: 10px 0 10px 28px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .agenda li:last-child { border-bottom: none; }
    .agenda li::before {
      content: '';
      position: absolute;
      left: 0; top: 18px;
      width: 14px; height: 14px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    .agenda li strong { color: var(--nu-dark-text); font-weight: 700; }

    /* CHECKLIST */
    .checklist {
      background: #fafbff;
      border: 2px solid var(--nu-blue);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 14px;
      letter-spacing: 0.02em;
    }
    .checklist ul { list-style: none; }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }
    .checklist li::before {
      content: '☐';
      position: absolute;
      left: 0; top: 8px;
      font-size: 1.2rem;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.9;
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
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.4em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px 60px; }
      .email-group { grid-template-columns: 1fr; }
      .step-card { grid-template-columns: 48px 1fr; gap: 14px; padding: 22px; }
      .step-number { width: 44px; height: 44px; font-size: 1.2rem; }
      .meeting-box, .agenda, .checklist, .action-brief { padding: 22px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-card, .email-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="container">

      <h1 class="nu-section-title">Micah <span>Follow-Up — Sign Online Trade</span></h1>

      <div class="action-brief">
        <div class="action-brief-label">reMarkable Action Item</div>
        <div class="action-brief-text">
          <strong>Send Micah emails</strong>, then <strong>schedule a meeting</strong> to finalize the
          <strong>Sign Online Trade</strong>. Two-part sequence: written touchpoint first to frame the
          conversation and attach supporting documents, then a calendar invite with a concrete agenda.
        </div>
      </div>

      <h2 class="nu-section-title">Execution <span>Steps</span></h2>

      <div class="steps-grid">

        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Draft &amp; Send Email #1 — Opening Touchpoint</h3>
            <p>Reintroduce the Sign Online Trade discussion, confirm we are moving forward, and list
              the items Aaron will send in the follow-up message. Keeps Micah on the same page before
              we deliver paperwork.</p>
            <div class="step-meta">Owner: Aaron C. Norris · Channel: Email · Voice: direct, warm</div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Draft &amp; Send Email #2 — Details &amp; Terms</h3>
            <p>Deliver the specifics: trade terms, units involved, any pricing or timeline points.
              Close by asking for 2–3 time blocks that work on his calendar next week.</p>
            <div class="step-meta">Owner: Aaron C. Norris · Channel: Email · Send 24 hrs after Email #1</div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Confirm &amp; Schedule the Meeting</h3>
            <p>Once Micah responds with availability, send a calendar invite (Google Calendar) with
              agenda, dial-in or location, and any pre-read attachments.</p>
            <div class="step-meta">Target: 30 min · Format: Phone or Zoom · Follow up if no reply in 48 hrs</div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>Log in Master Tracker</h3>
            <p>Add the Sign Online Trade item to the Master Tracker with Micah as contact, current
              status, and next action so the deal is tracked through close.</p>
            <div class="step-meta">File: ~/norris-ops/data/master_tracker.json</div>
          </div>
        </div>

      </div>

      <h2 class="nu-section-title">Email <span>Drafts</span></h2>

      <div class="email-group">

        <div class="email-card">
          <div class="email-card-header">
            Email #1 <span class="badge">Opener</span>
          </div>
          <div class="email-card-body">
            <div class="email-meta">
              <strong>To:</strong> Micah<br>
              <strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
              <strong>Send:</strong> Today
            </div>
            <div class="email-subject">Subject: Sign Online Trade — picking this back up</div>
            <div class="email-body">
              <p class="em-dash-greeting">Micah —</p>
              <p>Wanted to reach back out on the Sign Online trade we talked about. I'm ready to move
                this forward and want to make it easy on your end.</p>
              <p>I'll send a second email in the next day with the full details — terms, units,
                timing — so you have everything in writing before we talk.</p>
              <p>After that, I'd like to get 30 minutes on the calendar to walk through it together
                and line out next steps.</p>
              <p>Appreciate you.</p>
              <p>Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
              <div class="email-sig">
                Founder &amp; CEO · Norris Utilities®, LLC<br>
                Cell: 205-500-1343 · acnorris@norrisutilities.com
              </div>
            </div>
          </div>
        </div>

        <div class="email-card">
          <div class="email-card-header">
            Email #2 <span class="badge">Details</span>
          </div>
          <div class="email-card-body">
            <div class="email-meta">
              <strong>To:</strong> Micah<br>
              <strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
              <strong>Send:</strong> 24 hrs after Email #1
            </div>
            <div class="email-subject">Subject: Sign Online Trade — terms &amp; a meeting ask</div>
            <div class="email-body">
              <p class="em-dash-greeting">Micah —</p>
              <p>Here are the specifics on the Sign Online trade as I understand them:</p>
              <p>• Scope of trade (units / signage / services involved)<br>
                 • Proposed terms and timing<br>
                 • Any supporting paperwork I'll have ready for the meeting</p>
              <p>If anything here needs correcting on your side, tell me now so we don't lose time
                at the meeting.</p>
              <p>Could you send me 2–3 time blocks that work next week? I'll put the invite on the
                calendar as soon as you confirm.</p>
              <p>Sincerely,<br>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
              <div class="email-sig">
                Founder &amp; CEO · Norris Utilities®, LLC<br>
                Cell: 205-500-1343 · acnorris@norrisutilities.com
              </div>
            </div>
          </div>
        </div>

      </div>

      <h2 class="nu-section-title">Meeting <span>Plan</span></h2>

      <div class="meeting-box">
        <div class="meeting-title">Sign Online Trade — Working Session</div>
        <div class="meeting-grid">
          <div class="meeting-item">
            <div class="meeting-item-label">Attendees</div>
            <div class="meeting-item-value">Aaron C. Norris · Micah</div>
          </div>
          <div class="meeting-item">
            <div class="meeting-item-label">Duration</div>
            <div class="meeting-item-value">30 minutes</div>
          </div>
          <div class="meeting-item">
            <div class="meeting-item-label">Format</div>
            <div class="meeting-item-value">Phone or Zoom</div>
          </div>
          <div class="meeting-item">
            <div class="meeting-item-label">Goal</div>
            <div class="meeting-item-value">Close the trade</div>
          </div>
        </div>
      </div>

      <div class="agenda">
        <h3 class="nu-section-title" style="font-size:1.2rem;margin-bottom:8px;">Meeting <span>Agenda</span></h3>
        <ul>
          <li><strong>0:00 – 0:05</strong> — Quick recap: what we agreed to before, what has changed</li>
          <li><strong>0:05 – 0:15</strong> — Walk through trade terms line by line (from Email #2)</li>
          <li><strong>0:15 – 0:22</strong> — Logistics: signage, delivery/pickup, transfer of ownership</li>
          <li><strong>0:22 – 0:28</strong> — Open questions &amp; Micah's concerns</li>
          <li><strong>0:28 – 0:30</strong> — Confirm next action, owner, and due date</li>
        </ul>
      </div>

      <h2 class="nu-section-title">Aaron's <span>Checklist</span></h2>

      <div class="checklist">
        <div class="checklist-title">Before this item closes out:</div>
        <ul>
          <li>Email #1 sent to Micah (opener)</li>
          <li>Email #2 sent to Micah (terms + meeting ask) within 24 hours</li>
          <li>Meeting time confirmed — calendar invite sent with agenda</li>
          <li>Pre-read attachments (if any) sent 24 hrs before the meeting</li>
          <li>Meeting held — notes captured, next action agreed</li>
          <li>Master Tracker updated with status and next action</li>
          <li>If no reply from Micah in 48 hrs → send polite nudge</li>
        </ul>
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