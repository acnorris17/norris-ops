<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #0a7f3f;
      --nu-warning: #b8860b;
      --nu-danger: #b22222;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.2) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* GHOST PHOENIX WATERMARK */
    .ghost-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 600px;
      opacity: 0.07;
      pointer-events: none;
      z-index: 0;
    }

    /* CHEVRON */
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
      min-height: 60vh;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
      position: relative;
      z-index: 1;
    }

    /* TASK HEADER */
    .task-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
      align-items: center;
    }
    .task-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .task-pill.priority {
      background: linear-gradient(135deg, #b22222 0%, #dc3545 100%);
      color: white;
    }
    .task-pill.type {
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .task-pill.source {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: white;
    }

    .task-title {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
      letter-spacing: -0.01em;
    }
    .task-subtitle {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 40px;
      font-weight: 400;
    }

    /* SECTION TITLES — First word blue, rest dark */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin: 48px 0 20px;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--nu-cyan);
      display: inline-block;
      padding-right: 20px;
    }
    .nu-section-title .first-word { color: var(--nu-blue); }
    .nu-section-title:first-of-type { margin-top: 0; }

    /* INFO GRID */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }
    .info-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .info-card .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #777;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .info-card .value {
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      font-weight: 700;
      word-break: break-word;
    }
    .info-card .value.mono {
      font-family: 'SFMono-Regular', 'Menlo', monospace;
      font-size: 0.95rem;
    }

    /* CONTEXT BLOCK */
    .context-block {
      background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      padding: 24px 28px;
      border-radius: 6px;
      margin-bottom: 24px;
    }
    .context-block p {
      margin-bottom: 12px;
      color: var(--nu-body-text);
    }
    .context-block p:last-child { margin-bottom: 0; }

    /* STEPS */
    .action-steps {
      counter-reset: step-counter;
      list-style: none;
      margin: 20px 0;
    }
    .action-steps li {
      counter-increment: step-counter;
      position: relative;
      padding: 18px 20px 18px 70px;
      margin-bottom: 14px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .action-steps li:hover {
      transform: translateX(4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .action-steps li::before {
      content: counter(step-counter);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .action-steps li strong {
      display: block;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .action-steps li .step-note {
      font-size: 0.92rem;
      color: #555;
    }
    .action-steps li .step-note a {
      color: var(--nu-blue);
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1px dotted var(--nu-blue);
    }

    /* RESOURCE TABLE */
    .resource-table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      margin-bottom: 24px;
    }
    .resource-table th {
      background: var(--nu-navy);
      color: white;
      text-align: left;
      padding: 14px 18px;
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }
    .resource-table td {
      padding: 14px 18px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
      font-size: 0.95rem;
    }
    .resource-table tr:nth-child(even) td { background: #fafbff; }
    .resource-table .mono {
      font-family: 'SFMono-Regular', 'Menlo', monospace;
      font-size: 0.9rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* CALLOUT */
    .callout {
      padding: 18px 22px;
      border-radius: 6px;
      margin: 20px 0;
      font-size: 0.97rem;
    }
    .callout.warning {
      background: #fff8e6;
      border-left: 4px solid var(--nu-warning);
      color: #5a4500;
    }
    .callout.info {
      background: #e6f4ff;
      border-left: 4px solid var(--nu-blue);
      color: #0a2540;
    }
    .callout.success {
      background: #e8f7ef;
      border-left: 4px solid var(--nu-success);
      color: #0a3f1f;
    }
    .callout strong { display: block; margin-bottom: 4px; font-weight: 900; }

    /* CHECKLIST */
    .checklist { list-style: none; margin: 16px 0; }
    .checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      color: var(--nu-body-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 13px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: white;
    }
    .checklist li strong { color: var(--nu-dark-text); }

    /* BUTTONS */
    .action-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
      padding-top: 28px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 26px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s ease;
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: white;
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
      color: white;
    }

    /* FOOTER */
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
      font-size: 0.98rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; }
      .nu-logo-text { font-size: 2.2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-container { padding: 40px 24px 60px; }
      .task-title { font-size: 1.65rem; }
      .action-steps li { padding: 14px 16px 14px 58px; }
      .action-steps li::before { width: 30px; height: 30px; left: 14px; font-size: 0.9rem; }
      .resource-table { font-size: 0.85rem; }
      .resource-table th, .resource-table td { padding: 10px 12px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="ghost-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
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

      <div class="task-meta-bar">
        <span class="task-pill source">reMarkable Action</span>
        <span class="task-pill type">Records Research</span>
        <span class="task-pill priority">Open — Action Required</span>
      </div>

      <h1 class="task-title">Pull the 2018 Compass Bank → McKnight Deed</h1>
      <p class="task-subtitle">Instrument 20180[...] — Shelby County (Jefferson County pending confirmation), Alabama</p>

      <!-- WHAT & WHY -->
      <h2 class="nu-section-title"><span class="first-word">Task</span> Summary</h2>
      <div class="context-block">
        <p><strong>Action:</strong> Pull a copy of the recorded deed from 2018 documenting the property transfer from Compass Bank (grantor) to McKnight (grantee). Instrument number begins with <strong>20180</strong>, indicating the document was recorded in calendar year 2018.</p>
        <p><strong>Why it matters:</strong> The Compass Bank → McKnight deed is a link in a chain-of-title investigation. Pulling the actual recorded document (not just the index entry) is required to verify the grantor/grantee names, legal description, consideration, and any encumbrances referenced on the face of the deed.</p>
        <p><strong>Source:</strong> Logged to reMarkable action queue on 2026-04-16 and routed to the Norris Utilities® portal for execution.</p>
      </div>

      <!-- KEY FACTS -->
      <h2 class="nu-section-title"><span class="first-word">Known</span> Facts</h2>
      <div class="info-grid">
        <div class="info-card">
          <div class="label">Instrument Number</div>
          <div class="value mono">20180[complete digits needed]</div>
        </div>
        <div class="info-card">
          <div class="label">Recording Year</div>
          <div class="value">2018</div>
        </div>
        <div class="info-card">
          <div class="label">Grantor</div>
          <div class="value">Compass Bank</div>
        </div>
        <div class="info-card">
          <div class="label">Grantee</div>
          <div class="value">McKnight</div>
        </div>
        <div class="info-card">
          <div class="label">Document Type</div>
          <div class="value">Deed (type to be confirmed — likely foreclosure / REO / warranty)</div>
        </div>
        <div class="info-card">
          <div class="label">Jurisdiction</div>
          <div class="value">Alabama — county to confirm</div>
        </div>
      </div>

      <div class="callout warning">
        <strong>Missing inputs — confirm before filing request:</strong>
        Full instrument number (digits after 20180), recording county (Shelby, Jefferson, or other), McKnight's full legal name, and the property's legal description or parcel ID. Without the full instrument number or a parcel ID, the county clerk will likely require a broader name-index search that carries a higher fee.
      </div>

      <!-- SOURCES -->
      <h2 class="nu-section-title"><span class="first-word">Where</span> to Pull It</h2>
      <table class="resource-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Access</th>
            <th>Typical Cost</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shelby County Probate Court</strong><br>Columbiana, AL</td>
            <td>In person or mail request to Probate Judge's office</td>
            <td class="mono">$1/page certified; $0.50/page plain copy</td>
            <td>If property is in Shelby County, this is the authoritative record room.</td>
          </tr>
          <tr>
            <td><strong>Jefferson County Probate Court</strong><br>Birmingham, AL</td>
            <td>In person (Rm 201, Jefferson Co. Courthouse) or online via Probate website</td>
            <td class="mono">~$1/page + search fee</td>
            <td>Covers Compass Bank's Birmingham HQ and most 2018 lender dispositions in the Birmingham metro.</td>
          </tr>
          <tr>
            <td><strong>AlabamaDeeds.com</strong></td>
            <td>Online subscription / pay-per-document</td>
            <td class="mono">$3–$10 per document</td>
            <td>Fastest path if instrument number is complete — instant PDF download.</td>
          </tr>
          <tr>
            <td><strong>Title company (direct ask)</strong></td>
            <td>Email a local title/abstract company with the instrument number</td>
            <td class="mono">Often no charge for a single pull</td>
            <td>Fastest if we already have a working title relationship on the property.</td>
          </tr>
        </tbody>
      </table>

      <div class="callout info">
        <strong>Instrument number format reminder:</strong>
        Alabama recording numbers starting with the 4-digit year (2018-xxxxxx or 20180xxxxx) are common in both Shelby and Jefferson counties. The county's online index will accept the partial number — use that to confirm the full number before ordering a certified copy.
      </div>

      <!-- STEPS -->
      <h2 class="nu-section-title"><span class="first-word">Execution</span> Steps</h2>
      <ol class="action-steps">
        <li>
          <strong>Confirm the county.</strong>
          <span class="step-note">Review the reMarkable source note and any surrounding case file for a property address or parcel number. If the property address is known, that determines which county clerk holds the record. Do not request from a county until confirmed.</span>
        </li>
        <li>
          <strong>Complete the instrument number.</strong>
          <span class="step-note">Search the county's online recording index (Shelby: shelbyal.com; Jefferson: jccal.org/probate) using grantor "Compass Bank" and grantee "McKnight" with a 2018 date filter. Capture the full instrument number and the exact recording date.</span>
        </li>
        <li>
          <strong>Decide: plain copy or certified copy.</strong>
          <span class="step-note">A plain copy is fine for chain-of-title review. Certified copies are only needed if we plan to submit the document into a legal proceeding, an insurance claim, or a closing file.</span>
        </li>
        <li>
          <strong>Place the request.</strong>
          <span class="step-note">Preferred order: AlabamaDeeds online pull (fastest) → Title company contact (no charge) → County Probate office (authoritative but slowest). Pay with company card; save the receipt to the Norris Utilities® ops folder for the matter.</span>
        </li>
        <li>
          <strong>Save the PDF.</strong>
          <span class="step-note">File under the matter folder using the naming convention <code>2018_CompassBank_McKnight_Deed_Inst-[number].pdf</code>. Upload to the Norris Utilities® ops portal under Internal → Title Documents.</span>
        </li>
        <li>
          <strong>Extract the key facts.</strong>
          <span class="step-note">Pull grantor full name, grantee full name, deed type, consideration/price, legal description, parcel ID, date of execution, date of recording, book/page, and any encumbrances or exceptions recited on the face of the deed. Log those to the matter summary.</span>
        </li>
        <li>
          <strong>Report back to Aaron.</strong>
          <span class="step-note">Send a 3-line summary via Telegram: (1) what was pulled, (2) what it shows, (3) any red flags (missing legal, unusual consideration, riders referenced but not attached).</span>
        </li>
      </ol>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first-word">Delivery</span> Checklist</h2>
      <ul class="checklist">
        <li><strong>County confirmed</strong> — property address or parcel ID matched to the correct Alabama county.</li>
        <li><strong>Full instrument number captured</strong> — complete number recorded, not a partial match.</li>
        <li><strong>PDF saved</strong> — legible full-page scan of every page of the deed and any attached exhibits or riders.</li>
        <li><strong>Deed type identified</strong> — warranty, statutory warranty, quitclaim, foreclosure, or special/limited warranty clearly noted.</li>
        <li><strong>Consideration recorded</strong> — dollar amount on the face of the deed captured (important for chain-of-title).</li>
        <li><strong>Legal description transcribed</strong> — either typed out or verified readable in the scan.</li>
        <li><strong>Filed to ops portal</strong> — uploaded under Internal → Title Documents with proper naming.</li>
        <li><strong>Aaron notified</strong> — 3-line Telegram summary sent with link to the saved PDF.</li>
      </ul>

      <div class="callout success">
        <strong>When this is done:</strong>
        Mark the reMarkable action item as complete in the Norris Utilities® tracker and update the matter log with the date the deed was received and reviewed.
      </div>

      <!-- ACTIONS -->
      <div class="action-row">
        <a href="https://www.alabamadeeds.com" class="nu-btn-primary" target="_blank" rel="noopener">Search AlabamaDeeds</a>
        <a href="https://shelbyal.com/211/Probate-Court" class="nu-btn-secondary" target="_blank" rel="noopener">Shelby County Probate</a>
        <a href="https://jccal.org/probate" class="nu-btn-secondary" target="_blank" rel="noopener">Jefferson County Probate</a>
        <a href="mailto:acnorris@norrisutilities.com?subject=Deed%20Pulled%20-%20Compass%20Bank%20to%20McKnight%202018" class="nu-btn-secondary">Email Aaron When Complete</a>
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