<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Catch-Up Emails &amp; Mel Introduction — Action Plan — Norris Utilities®</title>
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
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }
    .nu-doc-label {
      margin-top: 20px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: var(--nu-white);
      text-transform: uppercase;
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
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.02) 40%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .nu-section { margin-bottom: 48px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 20px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .lead { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    .nu-section-divider {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, var(--nu-blue), var(--nu-cyan));
      margin-bottom: 24px;
      border-radius: 2px;
    }

    .nu-intro-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #eef2ff 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
    }
    .nu-intro-card h2 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.35rem;
      margin-bottom: 10px;
    }
    .nu-intro-card p {
      color: var(--nu-body-text);
      font-size: 1rem;
    }

    .nu-task-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    .nu-task-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-task-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .nu-task-card.cyan { border-top-color: var(--nu-cyan); }
    .nu-task-card.gold { border-top-color: var(--nu-accent-gold); }
    .nu-task-card h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
    .nu-task-card .meta {
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      margin-bottom: 12px;
    }
    .nu-task-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
    }

    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      margin-bottom: 16px;
    }

    .nu-email-block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      margin-bottom: 28px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-email-header {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      padding: 18px 24px;
    }
    .nu-email-header .to-line {
      font-weight: 900;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
    }
    .nu-email-header .subject {
      font-size: 0.9rem;
      opacity: 0.95;
      margin-top: 4px;
      font-weight: 400;
    }
    .nu-email-meta {
      background: var(--nu-light-gray);
      padding: 12px 24px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-email-meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .nu-email-body {
      padding: 28px 32px;
      font-size: 0.97rem;
      color: var(--nu-body-text);
      line-height: 1.75;
    }
    .nu-email-body p { margin-bottom: 14px; padding-left: 12px; }
    .nu-email-body .greeting { font-weight: 700; padding-left: 0; color: var(--nu-dark-text); }
    .nu-email-body .signoff { padding-left: 0; margin-top: 20px; font-weight: 400; }
    .nu-email-body .signature { padding-left: 16px; font-weight: 700; color: var(--nu-dark-text); margin-top: 4px; }
    .nu-email-body ul { padding-left: 28px; margin-bottom: 14px; list-style: none; }
    .nu-email-body ul li { padding-left: 4px; margin-bottom: 6px; position: relative; }
    .nu-email-body ul li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      position: absolute;
      left: -14px;
    }

    .nu-checklist {
      background: linear-gradient(135deg, #f8faff 0%, var(--nu-light-gray) 100%);
      border-radius: 8px;
      padding: 28px 32px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    .nu-checklist-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 16px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .nu-check-content .step {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.98rem;
      margin-bottom: 2px;
    }
    .nu-check-content .detail {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 20px; }
      .nu-email-body { padding: 20px 22px; }
      .nu-badge { clip-path: none; border-radius: 8px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-task-card, .nu-email-block { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Action Plan &middot; Internal</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <section class="nu-section">
        <div class="nu-intro-card">
          <h2>MK Catch-Up Emails &amp; Introduction to Mel</h2>
          <p>
            reMarkable action item (2026-04-23): Send MK Smith the catch-up emails she's
            been waiting on, and include a warm introduction to Mel so the two can begin
            coordinating marketing support directly. Three messages in total &mdash; one
            catch-up note, one intro, and one working-context brief to MK.
          </p>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="lead">Action</span> <span class="rest">Summary</span>
        </h2>
        <div class="nu-section-divider"></div>

        <div class="nu-task-grid">
          <div class="nu-task-card">
            <div class="meta">Email 1 &middot; Primary</div>
            <h3>MK Catch-Up</h3>
            <p>Reconnect with MK Smith on marketing workstream. Close the loop on items
            pending since last touch and reset cadence going forward.</p>
          </div>
          <div class="nu-task-card cyan">
            <div class="meta">Email 2 &middot; Introduction</div>
            <h3>Intro: MK &harr; Mel</h3>
            <p>Warm intro so Mel can plug into MK's marketing flow directly without
            Aaron acting as a relay for every deliverable.</p>
          </div>
          <div class="nu-task-card gold">
            <div class="meta">Email 3 &middot; Brief</div>
            <h3>Context Handoff to MK</h3>
            <p>One-page orientation on what Mel is working on and where MK can add
            value &mdash; so the intro email lands with momentum behind it.</p>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="lead">Draft</span> <span class="rest">1 &mdash; MK Catch-Up</span>
        </h2>
        <div class="nu-section-divider"></div>

        <div class="nu-email-block">
          <div class="nu-email-header">
            <div class="to-line">To: MK Smith</div>
            <div class="subject">Subject: Catching up &mdash; where we are, where we're headed</div>
          </div>
          <div class="nu-email-meta">
            <strong>From:</strong> Aaron C. Norris &nbsp;|&nbsp;
            <strong>CC:</strong> (none) &nbsp;|&nbsp;
            <strong>Priority:</strong> Normal
          </div>
          <div class="nu-email-body">
            <p class="greeting">MK &mdash;</p>
            <p>It has been too long since we talked. I owe you a proper catch-up, and I
            want to make sure the marketing workstream has the runway it needs going
            into the next quarter.</p>
            <p>Here is where Norris Utilities® stands right now:</p>
            <ul>
              <li>FlexPro Armor volume is steady &mdash; handmade USA production line holding.</li>
              <li>Skylift bucket truck POs are active and we have demos booked through the spring.</li>
              <li>Samson Rope distributor work is expanding through the Southeast.</li>
              <li>Bay Shore Systems SE rep territory is generating real field activity.</li>
            </ul>
            <p>Two things I want to line up with you:</p>
            <ul>
              <li>A refreshed quarterly marketing cadence &mdash; what you need from me, what I need from you, and timing.</li>
              <li>A short call this week or next so I can walk you through what Mel is building on my side.</li>
            </ul>
            <p>Give me three times that work for you and I will hold one. Thank you for
            your patience &mdash; I'd like to close the gap on this and keep it closed.</p>
            <p class="signoff">Sincerely,</p>
            <div class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO, Norris Utilities®, LLC<br>
              205-500-1343 &middot; acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="lead">Draft</span> <span class="rest">2 &mdash; Intro: MK &harr; Mel</span>
        </h2>
        <div class="nu-section-divider"></div>

        <div class="nu-email-block">
          <div class="nu-email-header">
            <div class="to-line">To: MK Smith &nbsp;|&nbsp; Mel</div>
            <div class="subject">Subject: Introduction &mdash; MK Smith &harr; Mel</div>
          </div>
          <div class="nu-email-meta">
            <strong>From:</strong> Aaron C. Norris &nbsp;|&nbsp;
            <strong>CC:</strong> (none) &nbsp;|&nbsp;
            <strong>Priority:</strong> Normal
          </div>
          <div class="nu-email-body">
            <p class="greeting">MK, Mel &mdash;</p>
            <p>I want to connect the two of you directly so we can move faster and I
            can stop being the bottleneck between marketing and the day-to-day.</p>
            <p><strong>MK Smith</strong> is my marketing contractor at Norris Utilities®.
            She has been with us through the brand build-out &mdash; the line card,
            design system, and the voice that goes on every page we put in front of
            a customer.</p>
            <p><strong>Mel</strong> is working alongside me on content, customer-facing
            materials, and the ops portal at ops.norrisutilities.com. Mel has been
            producing a lot of the internal pages and decks and will benefit from MK's
            input on where those pieces should live in the broader marketing plan.</p>
            <p>From here, please talk directly. You do not need to copy me on every
            exchange &mdash; loop me in on decisions that affect brand, spend, or
            customer-facing output. Everything else, run with it.</p>
            <p>Thank you both.</p>
            <p class="signoff">Sincerely,</p>
            <div class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO, Norris Utilities®, LLC<br>
              205-500-1343 &middot; acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="lead">Draft</span> <span class="rest">3 &mdash; Context Brief to MK</span>
        </h2>
        <div class="nu-section-divider"></div>

        <div class="nu-email-block">
          <div class="nu-email-header">
            <div class="to-line">To: MK Smith</div>
            <div class="subject">Subject: Context before the Mel intro &mdash; what's in motion</div>
          </div>
          <div class="nu-email-meta">
            <strong>From:</strong> Aaron C. Norris &nbsp;|&nbsp;
            <strong>CC:</strong> (none) &nbsp;|&nbsp;
            <strong>Priority:</strong> Normal
          </div>
          <div class="nu-email-body">
            <p class="greeting">MK &mdash;</p>
            <p>Before the intro hits your inbox, a short brief so the conversation
            with Mel lands with context already on the table.</p>
            <p><strong>What Mel is producing:</strong></p>
            <ul>
              <li>Internal action plans and handoff pages for the ops portal.</li>
              <li>Customer-facing quotes, proposals, and one-pagers built on the line card design system.</li>
              <li>Email drafts for vendor and customer follow-ups in Aaron's voice.</li>
            </ul>
            <p><strong>Where I need your lens:</strong></p>
            <ul>
              <li>Voice and polish on anything customer-facing &mdash; you own the brand standard.</li>
              <li>Channel strategy &mdash; which of these pieces belong on the public site versus internal only.</li>
              <li>Trademark hygiene &mdash; Norris Utilities®, A Legacy of Commitment®, Phoenix Icon® all registered; FlexPro Armor is not.</li>
            </ul>
            <p><strong>What I am not asking for:</strong> you do not need to re-do
            anything Mel has already shipped. Treat it as a starting inventory, and
            tell us what is worth amplifying.</p>
            <p>When you and Mel find your groove, run it. I will stay out of the way.</p>
            <p class="signoff">Sincerely,</p>
            <div class="signature">
              Aaron C. Norris<br>
              Founder &amp; CEO, Norris Utilities®, LLC<br>
              205-500-1343 &middot; acnorris@norrisutilities.com
            </div>
          </div>
        </div>
      </section>

      <section class="nu-section">
        <h2 class="nu-section-title">
          <span class="lead">Send</span> <span class="rest">Checklist</span>
        </h2>
        <div class="nu-section-divider"></div>

        <div class="nu-badge">EXECUTE IN ORDER</div>

        <div class="nu-checklist">
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <div class="step">Step 1 &mdash; Send MK catch-up email (Draft 1)</div>
              <div class="detail">Rebuild the working rhythm. Ask for three times for a call.</div>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <div class="step">Step 2 &mdash; Send context brief to MK (Draft 3)</div>
              <div class="detail">So the Mel intro lands with inventory and expectations already set.</div>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <div class="step">Step 3 &mdash; Send MK &harr; Mel introduction (Draft 2)</div>
              <div class="detail">Both on the To: line. Aaron steps out of the relay role.</div>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <div class="step">Step 4 &mdash; Log in master tracker</div>
              <div class="detail">Mark reMarkable action item closed. Note intro date for follow-up in 14 days.</div>
            </div>
          </div>
          <div class="nu-checklist-item">
            <div class="nu-check-box"></div>
            <div class="nu-check-content">
              <div class="step">Step 5 &mdash; 14-day follow-up reminder</div>
              <div class="detail">Check with MK and Mel that the working relationship has taken hold. Adjust if not.</div>
            </div>
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