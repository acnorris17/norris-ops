<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-alert: #B8321C;
      --nu-success: #1A7A3E;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 70px; height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.25));
    }
    .nu-logo-text {
      font-family: var(--font-primary);
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
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
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
      min-height: 400px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-wrap {
      position: relative;
      z-index: 1;
      max-width: 960px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ACTION BAR */
    .action-bar {
      display: flex;
      align-items: center;
      gap: 14px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 22px;
      border-radius: 6px;
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .action-bar .tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 4px 10px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .action-bar .status {
      margin-left: auto;
      font-weight: 400;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.8);
    }

    /* SECTION TITLES */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.7rem;
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title .kw { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-sub {
      color: #6b6b7e;
      font-size: 0.95rem;
      margin-bottom: 22px;
    }

    /* PAGE HEADING */
    .page-heading {
      margin-bottom: 14px;
    }
    .page-heading h1 {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .page-heading h1 .accent { color: #0033cc; }
    .page-heading .lede {
      font-size: 1.05rem;
      color: #4a4a5e;
      max-width: 720px;
    }

    /* FACT GRID */
    .fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin: 28px 0;
    }
    .fact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 6px;
      padding: 16px 18px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    }
    .fact .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 6px;
    }
    .fact .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      line-height: 1.35;
    }
    .fact .sub {
      font-size: 0.82rem;
      color: #6b6b7e;
      margin-top: 4px;
      font-weight: 400;
    }

    /* STEPS */
    .steps {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .step {
      display: flex;
      gap: 18px;
      padding: 18px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .step:last-child { border-bottom: none; padding-bottom: 0; }
    .step:first-child { padding-top: 0; }
    .step-num {
      flex-shrink: 0;
      width: 38px; height: 38px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .step-body h3 {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-body p {
      color: #4a4a5e;
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .step-body ul {
      margin: 8px 0 4px 18px;
      color: #4a4a5e;
      font-size: 0.92rem;
    }
    .step-body li { margin-bottom: 4px; }
    .step-body .mono {
      font-family: 'SF Mono', Menlo, Consolas, monospace;
      background: var(--nu-light-gray);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.88rem;
      color: var(--nu-navy);
    }

    /* CONTACT BLOCK */
    .contact-block {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .contact-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, #fafafc 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
    }
    .contact-card h4 {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #0033cc;
      margin-bottom: 10px;
    }
    .contact-card .org {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .contact-card .line {
      font-size: 0.92rem;
      color: #4a4a5e;
      margin-bottom: 3px;
    }
    .contact-card a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .contact-card a:hover { text-decoration: underline; }

    /* WHY BOX */
    .why-box {
      background: linear-gradient(135deg, #eef3ff 0%, #e0ecff 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 28px;
    }
    .why-box h3 {
      color: #0033cc;
      font-weight: 900;
      font-size: 1.05rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .why-box p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px 28px;
      margin-bottom: 28px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }
    .check-box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 1px;
    }

    /* BUTTONS */
    .btn-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 14px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 13px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(0,0,255,0.3);
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
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      font-family: 'Lato', serif;
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
      .nu-header { padding: 44px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 22px 60px; }
      .page-heading h1 { font-size: 1.7rem; }
      .steps { padding: 20px 18px; }
      .step { gap: 12px; }
      .action-bar { flex-wrap: wrap; }
      .action-bar .status { margin-left: 0; width: 100%; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .steps, .contact-card, .fact, .checklist { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <!-- ACTION BAR -->
      <div class="action-bar">
        <span class="tag">Action Item</span>
        <span>reMarkable — Title Research</span>
        <span class="status">Priority: High · Opened 2026-04-23</span>
      </div>

      <!-- HEADING -->
      <div class="page-heading">
        <h1>Pull the <span class="accent">2018 Compass Bank → McKnight</span> Deed</h1>
        <p class="lede">
          Retrieve the recorded deed from the Jefferson County, Alabama Probate Court records
          to establish the chain of title for the 4505 Butterworth estate review. The 2018
          instrument documents the Compass Bank (foreclosing lender) conveyance to the McKnight
          grantee — a critical link in the title chain.
        </p>
      </div>

      <!-- FACTS -->
      <div class="fact-grid">
        <div class="fact">
          <div class="label">Instrument Year</div>
          <div class="value">2018</div>
          <div class="sub">Recording year per reMarkable note</div>
        </div>
        <div class="fact">
          <div class="label">Instrument Number</div>
          <div class="value">20180… (confirm full #)</div>
          <div class="sub">Full number to be captured during pull</div>
        </div>
        <div class="fact">
          <div class="label">Grantor</div>
          <div class="value">Compass Bank</div>
          <div class="sub">(Now BBVA / PNC Bank successor entity)</div>
        </div>
        <div class="fact">
          <div class="label">Grantee</div>
          <div class="value">McKnight</div>
          <div class="sub">Confirm full legal name of grantee at pull</div>
        </div>
        <div class="fact">
          <div class="label">Recording Office</div>
          <div class="value">Jefferson County Probate</div>
          <div class="sub">716 Richard Arrington Jr. Blvd N, Birmingham, AL</div>
        </div>
        <div class="fact">
          <div class="label">Cost Estimate</div>
          <div class="value">$1.00 / page + $3.00 cert.</div>
          <div class="sub">Typical AL probate fees; certified copy recommended</div>
        </div>
      </div>

      <!-- WHY -->
      <div class="why-box">
        <h3>Why this matters</h3>
        <p>
          This deed is one link in the chain of title for the 4505 Butterworth estate being
          evaluated for purchase. A gap or defect in the 2018 bank-to-buyer conveyance would
          flag a title cloud before closing. Pulling the recorded instrument now — rather than
          relying on a later title commitment — lets us verify grantor authority, legal
          description, and any reservations or encumbrances before any earnest money changes hands.
        </p>
      </div>

      <!-- SECTION: STEPS -->
      <div class="nu-section-title">
        <span class="kw">How</span> <span class="rest">to Pull the Deed</span>
      </div>
      <p class="nu-section-sub">Three retrieval paths — use the fastest one that returns a clean scan.</p>

      <div class="steps">

        <div class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <h3>Online search — Jefferson County Probate records</h3>
            <p>Go to the Jefferson County Judge of Probate recording search and query by instrument number and year.</p>
            <ul>
              <li>Site: <span class="mono">probate.jccal.org</span> → Records Search → Recorded Documents</li>
              <li>Search by: Instrument Number beginning with <span class="mono">2018</span></li>
              <li>If number is partial: search Grantor = <span class="mono">Compass Bank</span>, Grantee = <span class="mono">McKnight</span>, Date Range = 01/01/2018 – 12/31/2018</li>
              <li>Download the PDF and save as <span class="mono">4505_butterworth_2018_compass_mcknight_deed.pdf</span></li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <h3>In-person pull (if online is incomplete)</h3>
            <p>The Jefferson County Courthouse records room maintains the certified originals and can produce a stamped copy.</p>
            <ul>
              <li>Location: Jefferson County Courthouse — 716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203</li>
              <li>Floor: Probate Records (check posted signage)</li>
              <li>Hours: Monday–Friday, 8:00 AM – 5:00 PM</li>
              <li>Request: "Certified copy, Instrument 2018-XXXXXX, Compass Bank to McKnight"</li>
              <li>Bring: instrument number (or grantor/grantee + approximate date), payment (card or check)</li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <h3>Delegate to a title agent (fastest if deal timeline is tight)</h3>
            <p>If this is part of a purchase under contract, the closing attorney or title company can pull it faster and include it in the title exam.</p>
            <ul>
              <li>Ask for: recorded copy of the 2018 deed plus a preliminary title commitment</li>
              <li>Typical turnaround: 2–5 business days</li>
              <li>Typical cost: bundled into title exam fee (no separate charge)</li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <h3>Verify once pulled</h3>
            <p>Before filing the deed away, spot-check the critical fields:</p>
            <ul>
              <li>Legal description matches the current parcel for 4505 Butterworth</li>
              <li>Compass Bank's authority to convey (foreclosure deed vs. warranty deed — note which)</li>
              <li>Any reservations, easements, or restrictions carried forward</li>
              <li>Recording stamp is visible and legible on all pages</li>
              <li>Grantee name (McKnight) matches the party who later conveyed or still holds title</li>
            </ul>
          </div>
        </div>

      </div>

      <!-- CONTACTS -->
      <div class="nu-section-title">
        <span class="kw">Who</span> <span class="rest">to Contact</span>
      </div>
      <p class="nu-section-sub">Direct contacts for records, title work, and legal review.</p>

      <div class="contact-block">
        <div class="contact-card">
          <h4>Records Office</h4>
          <div class="org">Jefferson County Probate</div>
          <div class="line">716 Richard Arrington Jr. Blvd N</div>
          <div class="line">Birmingham, AL 35203</div>
          <div class="line"><a href="https://probate.jccal.org">probate.jccal.org</a></div>
          <div class="line">Main: <a href="tel:2053254250">205-325-4250</a></div>
        </div>
        <div class="contact-card">
          <h4>Title / Real Estate Counsel</h4>
          <div class="org">To Be Assigned</div>
          <div class="line">Engage Norris Utilities' preferred real estate attorney for the Butterworth transaction before earnest money.</div>
          <div class="line">Aaron to confirm counsel of record.</div>
        </div>
        <div class="contact-card">
          <h4>Banking / Lender Record Confirmation</h4>
          <div class="org">Patrick Lavette — Renasant Bank</div>
          <div class="line">If financing is involved, Patrick can flag what the lender's title requirements will be before we pull additional deeds.</div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <div class="nu-section-title">
        <span class="kw">Completion</span> <span class="rest">Checklist</span>
      </div>
      <p class="nu-section-sub">Mark each item as done before closing this action item.</p>

      <div class="checklist">
        <div class="checklist-item"><div class="check-box"></div>Full instrument number captured (complete 20180-series number, not just the prefix)</div>
        <div class="checklist-item"><div class="check-box"></div>Recorded deed PDF downloaded and filed under <span class="mono">/Butterworth-Estate/Title/</span></div>
        <div class="checklist-item"><div class="check-box"></div>Certified copy ordered if original online scan is low-quality or incomplete</div>
        <div class="checklist-item"><div class="check-box"></div>Deed type confirmed (foreclosure deed, warranty deed, statutory warranty, quitclaim)</div>
        <div class="checklist-item"><div class="check-box"></div>Legal description cross-checked against current parcel tax record (4505 Butterworth)</div>
        <div class="checklist-item"><div class="check-box"></div>McKnight grantee name and any subsequent conveyances logged in the title chain summary</div>
        <div class="checklist-item"><div class="check-box"></div>Any reservations, easements, or encumbrances noted in the deal file</div>
        <div class="checklist-item"><div class="check-box"></div>File shared with closing attorney once engaged</div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="btn-row">
        <a class="nu-btn-primary" href="https://probate.jccal.org" target="_blank" rel="noopener">Open Probate Records Search</a>
        <a class="nu-btn-secondary" href="tel:2053254250">Call Records Office</a>
        <a class="nu-btn-secondary" href="mailto:acnorris@norrisutilities.com?subject=4505%20Butterworth%20-%20Compass%20Bank%20to%20McKnight%20Deed%20Pull">Email Status Update</a>
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