The file `action-clarify-lifetime-warranty.html` already exists and is the authoritative version for this task (20,105 bytes, current date, professionally built). Per the dedup rule, I'll return that content as the task output rather than creating a duplicate.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Brief: H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
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
      --nu-alert-amber: #F59E0B;
      --nu-success-green: #10B981;
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

    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
    }

    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.35em;
      color: var(--nu-cyan);
      text-transform: uppercase;
      padding: 6px 14px;
      border: 1px solid rgba(6,208,255,0.4);
      border-radius: 2px;
      margin-bottom: 16px;
      background: rgba(0,0,0,0.15);
    }
    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.8rem;
      color: var(--nu-white);
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      letter-spacing: 0.02em;
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
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    .nu-page-title {
      font-weight: 900;
      font-size: 2.2rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-page-title .blue { color: #0033cc; }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 30px;
      font-weight: 300;
    }

    .status-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.12);
    }
    .status-cell {
      padding: 20px 22px;
      color: var(--nu-white);
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .status-cell:last-child { border-right: none; }
    .status-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .status-value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-white);
    }
    .status-value.amber { color: var(--nu-alert-amber); }

    .section { margin-bottom: 48px; }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .section-title .first { color: #0033cc; }
    .section-title .rest { color: var(--nu-dark-text); }

    .lead-block {
      background: linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
    }
    .lead-block p {
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }

    .info-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .info-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: #0033cc;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .info-card p { font-size: 0.95rem; line-height: 1.65; }
    .info-card ul { list-style: none; padding: 0; }
    .info-card ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.95rem;
    }
    .info-card ul li::before {
      content: '•';
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.3rem;
      position: absolute;
      left: 6px;
      top: 2px;
    }

    .q-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-radius: 8px;
      overflow: hidden;
    }
    .q-table thead {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
    }
    .q-table th {
      padding: 14px 18px;
      text-align: left;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .q-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
      font-size: 0.95rem;
    }
    .q-table tr:last-child td { border-bottom: none; }
    .q-table tr:nth-child(even) td { background: #fafbfd; }
    .q-table td.num {
      font-weight: 900;
      color: var(--nu-blue);
      width: 50px;
      text-align: center;
    }

    .contact-card {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 6px 24px rgba(0,0,80,0.25);
    }
    .contact-card h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 6px;
      color: var(--nu-white);
    }
    .contact-card .sub {
      color: var(--nu-cyan);
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 14px;
    }
    .contact-item {
      background: rgba(255,255,255,0.08);
      padding: 14px 16px;
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    .contact-item .label {
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      margin-bottom: 4px;
    }
    .contact-item .val {
      font-size: 0.95rem;
      font-weight: 700;
    }
    .contact-item .val a {
      color: var(--nu-white);
      text-decoration: none;
      border-bottom: 1px dotted rgba(6,208,255,0.5);
    }

    .script-box {
      background: #fefefe;
      border: 2px solid var(--nu-medium-gray);
      border-left: 6px solid var(--nu-cyan);
      padding: 24px 28px;
      border-radius: 4px 8px 8px 4px;
      font-size: 0.98rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .script-box .opener {
      font-weight: 700;
      color: #0033cc;
      margin-bottom: 10px;
    }
    .script-box .closer {
      margin-top: 14px;
      font-style: italic;
      color: #555;
      font-size: 0.9rem;
    }

    .steps-list {
      list-style: none;
      counter-reset: step;
      padding: 0;
    }
    .steps-list li {
      counter-increment: step;
      position: relative;
      padding: 16px 20px 16px 72px;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      font-size: 0.97rem;
      line-height: 1.6;
    }
    .steps-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px; top: 50%;
      transform: translateY(-50%);
      width: 38px; height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
    }
    .steps-list li strong { color: #0033cc; }

    .priority-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: var(--nu-alert-amber);
      color: #4b2d00;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .priority-badge .dot {
      width: 8px; height: 8px;
      background: #4b2d00;
      border-radius: 50%;
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.3); }
    }

    .why-block {
      background: linear-gradient(135deg, #fff9ed 0%, #fff4d6 100%);
      border: 1px solid #f0d890;
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 24px;
    }
    .why-block h4 {
      font-weight: 900;
      color: #8a6400;
      margin-bottom: 10px;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .why-block p { color: #5c4400; font-size: 0.97rem; }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
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
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.08em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .nu-page-title { font-size: 1.6rem; }
      .status-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .status-cell:last-child { border-bottom: none; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .contact-card, .status-strip, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-eyebrow">Internal Action Brief</div>
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
    <div class="nu-container">

      <div class="priority-badge">
        <span class="dot"></span>
        Priority: Open Action — reMarkable Capture
      </div>

      <h1 class="nu-page-title">
        <span class="blue">Action Brief:</span> Define H2O Waterproofing's<br>
        Lifetime Warranty Coverage
      </h1>
      <p class="nu-page-subtitle">
        Capture the exact written definition of H2O Waterproofing's "lifetime warranty" so Norris Utilities® can
        compare it directly against the FlexPro Armor warranty terms before it comes up in a customer conversation.
      </p>

      <div class="status-strip">
        <div class="status-cell">
          <div class="status-label">Source</div>
          <div class="status-value">reMarkable Capture</div>
        </div>
        <div class="status-cell">
          <div class="status-label">Owner</div>
          <div class="status-value">Aaron C. Norris</div>
        </div>
        <div class="status-cell">
          <div class="status-label">Status</div>
          <div class="status-value amber">Awaiting Contact</div>
        </div>
        <div class="status-cell">
          <div class="status-label">Date Logged</div>
          <div class="status-value">April 16, 2026</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Why</span> <span class="rest">This Matters</span>
        </div>

        <div class="lead-block">
          <p>
            H2O Waterproofing markets a "lifetime warranty" on their bucket cover line. The word "lifetime" is used
            loosely across the industry — it can mean the lifetime of the original buyer, the lifetime of the cover
            in service, or a defined limited term dressed up in marketing language. Before FlexPro Armor goes head-to-head
            on a bid or a demo day, we need their definition in writing so our warranty positioning is factual, fair,
            and defensible.
          </p>
        </div>

        <div class="why-block">
          <h4>Business Impact</h4>
          <p>
            Customers (Irby, Sheffield Utilities, EPB Chattanooga, Gridco) ask warranty questions at purchase, renewal,
            and after any field damage. If H2O's "lifetime" is actually a limited-term policy with exclusions, we want
            a side-by-side comparison ready. If it's genuinely open-ended, we adjust FlexPro Armor's warranty messaging
            and decide whether to match, beat, or differentiate on coverage scope rather than duration.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Objective</span> <span class="rest">of This Call / Email</span>
        </div>

        <div class="two-col">
          <div class="info-card">
            <h3>Primary Goal</h3>
            <p>
              Obtain the <strong>written warranty document</strong> from H2O Waterproofing covering their bucket cover
              line. We want the actual policy PDF or web page, not a verbal summary.
            </p>
          </div>
          <div class="info-card">
            <h3>Secondary Goal</h3>
            <p>
              If no written document is produced, capture their on-the-record definition via email reply — in their
              own words — so we have a dated, sourced statement to quote from.
            </p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Questions</span> <span class="rest">to Ask H2O Waterproofing</span>
        </div>

        <table class="q-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>What We Learn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">1</td>
              <td>How do you define "lifetime" — lifetime of the product, lifetime of the original purchaser, or a specific number of years?</td>
              <td>Clarifies whether "lifetime" is open-ended or capped.</td>
            </tr>
            <tr>
              <td class="num">2</td>
              <td>Is the warranty transferable if the bucket truck is sold or re-assigned to another fleet?</td>
              <td>Relevant for utility co-ops and contractors rotating equipment.</td>
            </tr>
            <tr>
              <td class="num">3</td>
              <td>What specifically is covered — fabric, stitching, hardware, waterproofing, or all components?</td>
              <td>Reveals scope, which usually is narrower than "lifetime" implies.</td>
            </tr>
            <tr>
              <td class="num">4</td>
              <td>What voids the warranty — UV exposure, chemical contact, field modifications, normal wear?</td>
              <td>Exclusions are where most "lifetime" warranties collapse.</td>
            </tr>
            <tr>
              <td class="num">5</td>
              <td>Is repair, replacement, or refund the remedy — and does the customer pay freight or labor?</td>
              <td>Determines real cost to the end user if a claim is filed.</td>
            </tr>
            <tr>
              <td class="num">6</td>
              <td>What is your average turnaround time from claim filed to repaired/replaced cover back in service?</td>
              <td>Downtime cost matters more than warranty length for fleet operators.</td>
            </tr>
            <tr>
              <td class="num">7</td>
              <td>Can you send the full written warranty policy as a PDF for our files?</td>
              <td>Gives us the authoritative source to compare against.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Email</span> <span class="rest">Script — First Contact</span>
        </div>

        <div class="script-box">
          <div class="opener">Subject: Warranty Question — Bucket Cover Lifetime Coverage</div>
          <p>Team at H2O Waterproofing —</p>
          <br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I'm Aaron Norris with Norris Utilities®. We distribute bucket covers in the utility
            equipment space and I'd like to understand your warranty structure in more detail before any overlap comes
            up in the field.
          </p>
          <br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;A few specific questions I'd appreciate clarity on:
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;• How you define "lifetime" in your warranty — by product lifetime, original
            purchaser, or a fixed term<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Whether the warranty transfers with the equipment<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• What components are covered and what voids coverage<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Whether the remedy is repair, replacement, or refund — and who pays freight
          </p>
          <br>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;If you have the written warranty document as a PDF, that would be the cleanest way
            to share it. Happy to take a quick call if that's easier on your end.
          </p>
          <br>
          <p>Sincerely,</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
          <div class="closer">
            Aaron C. Norris / Founder &amp; CEO / Norris Utilities, LLC / 205-500-1343 / acnorris@norrisutilities.com
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Contact</span> <span class="rest">&amp; Research Starting Points</span>
        </div>

        <div class="contact-card">
          <h3>H2O Waterproofing</h3>
          <div class="sub">Initial Outreach Targets</div>
          <p>
            Aaron to identify the correct warranty contact at H2O Waterproofing. Start with whoever signs their
            customer-facing sell sheets or whoever handles their public-facing web inquiries. If a general info inbox
            is the only route, send the email above and ask them to route it to the person responsible for warranty
            claims.
          </p>
          <div class="contact-grid">
            <div class="contact-item">
              <div class="label">Likely Contact</div>
              <div class="val">Warranty / Customer Service</div>
            </div>
            <div class="contact-item">
              <div class="label">Fallback</div>
              <div class="val">Sales — request warranty hand-off</div>
            </div>
            <div class="contact-item">
              <div class="label">Delivery Format</div>
              <div class="val">Request PDF policy</div>
            </div>
            <div class="contact-item">
              <div class="label">Log Destination</div>
              <div class="val">FlexPro Armor competitive file</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Next</span> <span class="rest">Steps</span>
        </div>

        <ol class="steps-list">
          <li>
            <strong>Send outreach email</strong> to H2O Waterproofing using the script above. CC acnorris@norrisutilities.com
            to keep a clean record in Gmail.
          </li>
          <li>
            <strong>Request the written warranty PDF</strong> specifically. Verbal answers over the phone are useful but
            not quotable — we need the document to quote from in customer conversations.
          </li>
          <li>
            <strong>Log H2O's response</strong> in the FlexPro Armor competitive file on the ops portal so Caroline can
            see the side-by-side comparison without having to dig through email.
          </li>
          <li>
            <strong>Build the comparison table</strong> — FlexPro Armor warranty vs. H2O Waterproofing warranty across
            definition, transferability, covered components, exclusions, remedy, and turnaround.
          </li>
          <li>
            <strong>Brief Caroline Butler</strong> once the comparison is done so she can speak to it on inbound calls
            without needing Aaron's review on every conversation.
          </li>
          <li>
            <strong>Follow-up cadence</strong> — if no response within five business days, send a short nudge. If still
            no response within ten business days, escalate to a phone call and document what's obtainable from their
            public materials instead.
          </li>
        </ol>
      </div>

      <div class="section">
        <div class="section-title">
          <span class="first">Reference</span> <span class="rest">— FlexPro Armor Warranty Baseline</span>
        </div>

        <div class="two-col">
          <div class="info-card">
            <h3>What FlexPro Armor Offers</h3>
            <ul>
              <li>Handmade in the USA, heavy-duty fabric construction</li>
              <li>Designed for fleet-grade utility use — Skylift, Terex, and cross-fitment</li>
              <li>SKUs: NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C</li>
              <li>Standard 50% margin — Norris Utilities® direct and dealer channels</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>What We're Building Toward</h3>
            <ul>
              <li>A published FlexPro Armor warranty statement matched or exceeded against H2O's definition</li>
              <li>A one-page warranty comparison sheet for sales conversations</li>
              <li>Clean, defensible language — no "lifetime" claims we can't back in writing</li>
              <li>Caroline enabled to answer warranty questions without escalation</li>
            </ul>
          </div>
        </div>
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
    <div class="nu-footer-meta">
      INTERNAL ACTION BRIEF — NOT FOR EXTERNAL DISTRIBUTION — GENERATED 2026-04-16
    </div>
  </footer>

</body>
</html>