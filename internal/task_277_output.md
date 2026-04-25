<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Micah / Sign Online Trading — Action Plan — Norris Utilities®</title>
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
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
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
      width: 80px;
      height: 80px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

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
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .doc-title {
      text-align: center;
      margin-bottom: 50px;
      padding-bottom: 30px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 3px;
      margin-bottom: 16px;
    }
    .doc-title h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .doc-title h1 span { color: var(--nu-blue); }
    .doc-meta {
      font-size: 0.95rem;
      color: #666;
      font-weight: 400;
    }

    /* SECTIONS */
    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-cyan);
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* SUMMARY CARD */
    .summary-card {
      background: linear-gradient(135deg, #f8faff 0%, #eef4ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .summary-card p {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .summary-card strong { color: var(--nu-blue); font-weight: 900; }

    /* STEP CARDS */
    .step-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .step-card {
      display: flex;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .step-number {
      flex-shrink: 0;
      width: 80px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 2.2rem;
      letter-spacing: -0.02em;
    }
    .step-body {
      flex: 1;
      padding: 22px 26px;
    }
    .step-body h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .step-body p {
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .step-meta {
      display: inline-block;
      background: var(--nu-light-gray);
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 3px;
      margin-top: 8px;
      letter-spacing: 0.04em;
    }

    /* EMAIL DRAFTS */
    .email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-bottom: 28px;
      overflow: hidden;
    }
    .email-header {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 22px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .email-header .email-tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-size: 0.72rem;
      font-weight: 900;
      padding: 3px 10px;
      border-radius: 3px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .email-meta {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
      color: var(--nu-dark-text);
    }
    .email-meta div { margin-bottom: 4px; }
    .email-meta strong { display: inline-block; min-width: 70px; color: var(--nu-blue); font-weight: 700; }
    .email-body {
      padding: 22px 26px;
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--nu-body-text);
    }
    .email-body p { margin-bottom: 14px; padding-left: 18px; }
    .email-body p.greeting { padding-left: 0; font-weight: 700; }
    .email-body p.signature { padding-left: 18px; margin-top: 24px; margin-bottom: 4px; }
    .email-body p.sig-name { padding-left: 18px; margin-bottom: 0; font-weight: 700; }
    .email-body ul { padding-left: 36px; margin-bottom: 14px; list-style: none; }
    .email-body ul li { position: relative; margin-bottom: 6px; }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: -16px;
      color: var(--nu-blue);
      font-weight: 900;
    }

    /* MEETING CARD */
    .meeting-card {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0,0,51,0.2);
    }
    .meeting-card h3 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 18px;
      color: var(--nu-cyan);
    }
    .meeting-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 22px;
    }
    .meeting-item {
      border-left: 3px solid var(--nu-cyan);
      padding-left: 14px;
    }
    .meeting-item .label {
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      font-weight: 700;
      margin-bottom: 4px;
    }
    .meeting-item .value {
      font-size: 1.0rem;
      color: var(--nu-white);
      font-weight: 400;
      line-height: 1.5;
    }
    .meeting-item .value strong { font-weight: 900; }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .checklist-item:last-child { border-bottom: none; }
    .checkbox {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist-text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }
    .checklist-text strong { color: var(--nu-blue); font-weight: 700; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
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

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px 60px; }
      .doc-title h1 { font-size: 1.7rem; }
      .step-card { flex-direction: column; }
      .step-number { width: 100%; padding: 14px; font-size: 1.6rem; }
      .step-body { padding: 18px 20px; }
      .email-body { padding: 18px 20px; }
      .email-body p, .email-body p.signature, .email-body p.sig-name { padding-left: 8px; }
      .meeting-card { padding: 22px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .step-card, .email-draft { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
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

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="container">

      <!-- TITLE -->
      <div class="doc-title">
        <div class="doc-eyebrow">Action Item — reMarkable</div>
        <h1>Micah / <span>Sign Online Trading</span><br>Outreach &amp; Meeting Plan</h1>
        <div class="doc-meta">Prepared 2026-04-24 &nbsp;•&nbsp; Owner: Aaron C. Norris</div>
      </div>

      <!-- SUMMARY -->
      <div class="summary-card">
        <p><strong>Objective:</strong> Send Micah the two follow-up emails this week, then lock a 30-minute discovery meeting with the Sign Online Trading team to scope the partnership opportunity. Goal is a confirmed meeting on the calendar within 7 business days.</p>
      </div>

      <!-- STEPS -->
      <div class="nu-section">
        <h2 class="nu-section-title">Execution <span>Sequence</span></h2>
        <div class="step-grid">

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-body">
              <h3>Send Email #1 — Reconnect &amp; Reset</h3>
              <p>Re-open the conversation with Micah. Acknowledge the time gap, restate Norris Utilities' value, and signal that a more detailed proposal is coming in a follow-up note.</p>
              <span class="step-meta">Send Today — Before 10:00 AM CT</span>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-body">
              <h3>Send Email #2 — Meeting Request</h3>
              <p>Send the second email 24–48 hours after Email #1. Propose three concrete time windows for a 30-minute call with Sign Online Trading. Include phone, video, and in-person options.</p>
              <span class="step-meta">Send 24–48 Hours After Email #1</span>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-body">
              <h3>Schedule the Meeting</h3>
              <p>Once Micah picks a time, send a calendar invite from acnorris@norrisutilities.com with agenda attached. Add the meeting to the master tracker and set a 24-hour reminder.</p>
              <span class="step-meta">Within 1 Business Day of Reply</span>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-body">
              <h3>Confirm 24 Hours Out</h3>
              <p>Day before the meeting: short confirmation email with the dial-in link or address, attendee list, and the three discussion topics. Keeps no-shows to zero.</p>
              <span class="step-meta">T-Minus 24 Hours</span>
            </div>
          </div>

        </div>
      </div>

      <!-- EMAIL DRAFT 1 -->
      <div class="nu-section">
        <h2 class="nu-section-title">Email <span>#1 — Reconnect</span></h2>
        <div class="email-draft">
          <div class="email-header">
            <span>From: Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
            <span class="email-tag">Send First</span>
          </div>
          <div class="email-meta">
            <div><strong>To:</strong> Micah — Sign Online Trading</div>
            <div><strong>Subject:</strong> Norris Utilities — Picking back up where we left off</div>
            <div><strong>Send:</strong> Today, before 10:00 AM CT</div>
          </div>
          <div class="email-body">
            <p class="greeting">Micah —</p>
            <p>Wanted to circle back. It has been longer than I intended since we last spoke, and that is on me.</p>
            <p>Norris Utilities® has continued to grow on the FlexPro Armor and Skylift sides, and Sign Online Trading kept coming back to mind every time we discussed channel partners. I think there is a clean fit here that benefits both sides.</p>
            <p>I will follow up in the next day or two with a short note proposing a few times for a 30-minute call so we can walk through what that partnership could look like. No deck, no pressure — just a working conversation.</p>
            <p>Appreciate the patience. Talk soon.</p>
            <p class="signature">Sincerely,</p>
            <p class="sig-name">Aaron C. Norris</p>
            <p style="padding-left: 18px; font-size: 0.88rem; color: #666; margin-top: 4px;">
              Founder &amp; CEO | Norris Utilities®, LLC<br>
              205-500-1343 | acnorris@norrisutilities.com<br>
              www.NorrisUtilities.com
            </p>
          </div>
        </div>
      </div>

      <!-- EMAIL DRAFT 2 -->
      <div class="nu-section">
        <h2 class="nu-section-title">Email <span>#2 — Meeting Request</span></h2>
        <div class="email-draft">
          <div class="email-header">
            <span>From: Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span>
            <span class="email-tag">Send Second</span>
          </div>
          <div class="email-meta">
            <div><strong>To:</strong> Micah — Sign Online Trading</div>
            <div><strong>Subject:</strong> 30 minutes next week — Sign Online &times; Norris Utilities</div>
            <div><strong>Send:</strong> 24–48 hours after Email #1</div>
          </div>
          <div class="email-body">
            <p class="greeting">Micah —</p>
            <p>Following up as promised. I would like to put a 30-minute working call on the calendar with you and whoever from Sign Online Trading you would want in the room.</p>
            <p>Three topics I want to cover:</p>
            <ul>
              <li>What Sign Online is actively quoting that overlaps with our line — FlexPro Armor, Samson Rope, Skylift bucket trucks, Bay Shore Systems drill rigs.</li>
              <li>Margin and territory structure — how a dealer or distributor relationship would be priced and protected.</li>
              <li>Two or three live opportunities we could move on together inside the next 60 days.</li>
            </ul>
            <p>Three options on my end — pick whichever lands best for y'all:</p>
            <ul>
              <li>Tuesday — 9:30 AM CT</li>
              <li>Wednesday — 2:00 PM CT</li>
              <li>Thursday — 10:00 AM CT</li>
            </ul>
            <p>Phone, Zoom, or I can drive over — whatever is easiest. Send back the slot that works and I will get the invite out.</p>
            <p class="signature">Sincerely,</p>
            <p class="sig-name">Aaron C. Norris</p>
            <p style="padding-left: 18px; font-size: 0.88rem; color: #666; margin-top: 4px;">
              Founder &amp; CEO | Norris Utilities®, LLC<br>
              205-500-1343 | acnorris@norrisutilities.com<br>
              www.NorrisUtilities.com
            </p>
          </div>
        </div>
      </div>

      <!-- MEETING SETUP -->
      <div class="nu-section">
        <h2 class="nu-section-title">Meeting <span>Setup Block</span></h2>
        <div class="meeting-card">
          <h3>Sign Online Trading — Discovery Call</h3>
          <div class="meeting-grid">
            <div class="meeting-item">
              <div class="label">Duration</div>
              <div class="value"><strong>30 minutes</strong></div>
            </div>
            <div class="meeting-item">
              <div class="label">Host</div>
              <div class="value">Aaron C. Norris<br>Norris Utilities®</div>
            </div>
            <div class="meeting-item">
              <div class="label">Attendees</div>
              <div class="value">Micah + Sign Online team<br>(Aaron to confirm names)</div>
            </div>
            <div class="meeting-item">
              <div class="label">Format</div>
              <div class="value">Phone, Zoom, or in-person<br>(Micah's preference)</div>
            </div>
            <div class="meeting-item">
              <div class="label">Agenda</div>
              <div class="value">Active overlap • Margin &amp; territory • 60-day opportunities</div>
            </div>
            <div class="meeting-item">
              <div class="label">Outcome Goal</div>
              <div class="value">Verbal alignment on partnership structure + one named pilot opportunity</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-section">
        <h2 class="nu-section-title">Aaron's <span>Checklist</span></h2>
        <div class="checklist">
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Today:</strong> Send Email #1 — Reconnect &amp; Reset (before 10:00 AM CT).</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Tomorrow or Day After:</strong> Send Email #2 — Meeting Request with three time slots.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>On Reply:</strong> Send calendar invite within 1 business day. Add agenda to invite body.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Add to Master Tracker:</strong> Log meeting date, attendees, and outcome goal.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>T-Minus 24 Hours:</strong> Send confirmation note with dial-in / location and topic list.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>After Meeting:</strong> Same-day recap email with action items and next-step date.</div>
          </div>
          <div class="checklist-item">
            <div class="checkbox"></div>
            <div class="checklist-text"><strong>Escalate if no reply by Day 5:</strong> Short follow-up — single line, single ask.</div>
          </div>
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