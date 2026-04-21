<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rental Listing Disclosure Discrepancy — Action Plan — Norris Utilities®</title>
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
      --nu-alert-red: #B91C1C;
      --nu-alert-amber: #D97706;
      --nu-success-green: #15803D;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

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
      letter-spacing: 0.32em;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.25);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.04em;
    }
    .nu-doc-label {
      margin-top: 14px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.4em;
      color: rgba(255,255,255,0.85);
      text-transform: uppercase;
    }

    /* GHOST PHOENIX WATERMARK */
    .watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 680px;
      opacity: 0.07;
      z-index: 0;
      pointer-events: none;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* MAIN */
    main {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      position: relative;
      z-index: 2;
    }

    /* DOCUMENT HEAD */
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-title {
      font-weight: 900;
      font-size: 1.9rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      max-width: 70%;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-meta-right {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      text-align: right;
      line-height: 1.5;
    }
    .doc-meta-right strong { color: var(--nu-dark-text); }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, #FEF3F2 0%, #FEE4E2 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 18px 22px;
      border-radius: 4px;
      margin-bottom: 32px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .priority-banner .icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--nu-alert-red);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }
    .priority-banner .text strong {
      display: block;
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-alert-red);
      margin-bottom: 4px;
    }
    .priority-banner .text p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      line-height: 1.5;
    }

    /* SECTION HEADINGS */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin: 36px 0 16px;
      line-height: 1.3;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title::before {
      content: '';
      display: inline-block;
      width: 8px; height: 8px;
      background: var(--nu-cyan);
      margin-right: 12px;
      transform: rotate(45deg);
      vertical-align: middle;
    }

    /* DISCREPANCY COMPARISON GRID */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 16px 0 8px;
    }
    .compare-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      position: relative;
    }
    .compare-card.listing { border-top: 4px solid var(--nu-alert-amber); }
    .compare-card.actual  { border-top: 4px solid var(--nu-blue); }
    .compare-card h4 {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .compare-card.listing h4 { color: var(--nu-alert-amber); }
    .compare-card.actual  h4 { color: var(--nu-blue); }
    .compare-card dl {
      font-size: 0.92rem;
    }
    .compare-card dt {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-top: 10px;
      font-size: 0.82rem;
      letter-spacing: 0.02em;
    }
    .compare-card dt:first-child { margin-top: 0; }
    .compare-card dd {
      color: var(--nu-body-text);
      margin-left: 0;
      line-height: 1.5;
    }

    /* DELTA ROW */
    .delta-row {
      background: #FFFBEB;
      border: 1px solid #FCD34D;
      border-radius: 6px;
      padding: 14px 18px;
      font-size: 0.92rem;
      color: var(--nu-dark-text);
      margin: 10px 0 24px;
    }
    .delta-row strong { color: var(--nu-alert-amber); }

    /* ACTION STEPS */
    .steps {
      list-style: none;
      counter-reset: step;
      margin: 12px 0 20px;
    }
    .steps > li {
      counter-increment: step;
      display: flex;
      gap: 18px;
      padding: 18px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .steps > li::before {
      content: counter(step);
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1rem;
    }
    .steps .step-content {
      flex: 1;
    }
    .steps .step-title {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .steps .step-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .steps .step-owner {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 4px 10px;
      background: var(--nu-white);
      color: var(--nu-blue);
      border: 1px solid var(--nu-blue);
      border-radius: 3px;
      text-transform: uppercase;
    }

    /* RISK BADGES */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin: 16px 0 24px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .risk-card h5 {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .risk-card.high h5   { color: var(--nu-alert-red); }
    .risk-card.medium h5 { color: var(--nu-alert-amber); }
    .risk-card.low h5    { color: var(--nu-success-green); }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
      line-height: 1.5;
    }

    /* SCRIPT / TALKING POINTS */
    .script-box {
      background: linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%);
      border: 1px solid #DBE4FF;
      border-radius: 8px;
      padding: 22px 26px;
      margin: 16px 0 24px;
    }
    .script-box p {
      font-size: 0.95rem;
      color: var(--nu-dark-text);
      font-style: italic;
      line-height: 1.65;
      margin-bottom: 10px;
    }
    .script-box p:last-child { margin-bottom: 0; }
    .script-box .label {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
      font-style: normal;
    }

    /* OUTCOMES */
    .outcomes {
      list-style: none;
      margin: 12px 0 8px;
    }
    .outcomes li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .outcomes li:last-child { border-bottom: none; }
    .outcomes .bullet {
      flex-shrink: 0;
      width: 10px; height: 10px;
      background: var(--nu-cyan);
      margin-top: 8px;
      transform: rotate(45deg);
    }

    /* SIGNATURE LINE */
    .sign-line {
      margin-top: 40px;
      padding: 22px 24px;
      border: 2px dashed var(--nu-blue);
      border-radius: 6px;
      background: #F8FAFF;
    }
    .sign-line h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .sign-line p {
      font-size: 0.9rem;
      color: var(--nu-dark-text);
      line-height: 1.55;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 60%, #001a99 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
      letter-spacing: 0.02em;
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
    .nu-footer-legal {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.04em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 35px 22px 50px; }
      .doc-title { font-size: 1.4rem; max-width: 100%; }
      .doc-meta-right { text-align: left; }
      .compare-grid { grid-template-columns: 1fr; }
      .steps > li { padding: 14px 14px; gap: 12px; }
    }

    @media print {
      body { background: white; }
      .nu-header, .nu-footer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .steps > li { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L58 22 L74 12 L64 30 L84 24 L68 40 L80 54 L58 44 L50 65 L42 44 L20 54 L32 40 L16 24 L36 30 L26 12 L42 22 Z" fill="white" opacity="0.95"/>
      <path d="M50 58 L53 72 L62 66 L56 78 L50 96 L44 78 L38 66 L47 72 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Action Plan · Real Estate Disclosure</div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main>
    <svg class="watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L58 22 L74 12 L64 30 L84 24 L68 40 L80 54 L58 44 L50 65 L42 44 L20 54 L32 40 L16 24 L36 30 L26 12 L42 22 Z" fill="#0000FF"/>
      <path d="M50 58 L53 72 L62 66 L56 78 L50 96 L44 78 L38 66 L47 72 Z" fill="#0000FF"/>
    </svg>

    <div class="container">

      <!-- DOC META -->
      <div class="doc-meta">
        <div class="doc-title">
          Address <span>Disclosure Discrepancy</span> — Rental Listing Advertisement
        </div>
        <div class="doc-meta-right">
          <strong>Prepared for:</strong> Aaron C. Norris<br>
          <strong>Date:</strong> April 21, 2026<br>
          <strong>Priority:</strong> High — Pre-Closing<br>
          <strong>Source:</strong> reMarkable Action Item
        </div>
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner">
        <div class="icon">!</div>
        <div class="text">
          <strong>Why This Matters</strong>
          <p>An inconsistency between what the property was advertised as when rented and what is now stated on the Seller Property Disclosure creates a paper trail that can be cited later as a material misrepresentation. This must be reconciled in writing — with the seller and the listing broker — before closing.</p>
        </div>
      </div>

      <!-- SECTION 1: THE DISCREPANCY -->
      <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Discrepancy</span></h2>
      <p style="margin-bottom: 8px;">Side-by-side comparison of what the rental listing advertised versus what the current disclosure / title / seller representations state. Pull the exact wording from both sources before signing anything.</p>

      <div class="compare-grid">
        <div class="compare-card listing">
          <h4>Rental Listing (Advertised)</h4>
          <dl>
            <dt>Source document</dt>
            <dd>Historical rental advertisement (Zillow / Rent.com / MLS rental archive / Craigslist cache)</dd>
            <dt>Represented feature</dt>
            <dd>Square footage, bedroom/bath count, finished basement, garage, HVAC, outbuildings, lot dimensions — pull the exact line from the ad</dd>
            <dt>Date advertised</dt>
            <dd>Pull exact posting date from archive / Wayback Machine capture</dd>
            <dt>Listing agent / owner at time</dt>
            <dd>Capture name on the advertisement</dd>
          </dl>
        </div>

        <div class="compare-card actual">
          <h4>Current Disclosure (Conveyed)</h4>
          <dl>
            <dt>Source document</dt>
            <dd>Seller Property Disclosure form + current MLS for-sale listing</dd>
            <dt>Stated feature</dt>
            <dd>Corresponding line from the disclosure / for-sale listing — note the wording exactly</dd>
            <dt>Date of disclosure</dt>
            <dd>Date on the signed Seller Property Disclosure</dd>
            <dt>Current listing broker</dt>
            <dd>Name + brokerage on the active for-sale MLS</dd>
          </dl>
        </div>
      </div>

      <div class="delta-row">
        <strong>Delta to resolve:</strong> Document the exact wording from each source, the calendar gap between them, and whether the difference affects price, financing, appraisal, insurability, or permit status. The written delta becomes the addendum request.
      </div>

      <!-- SECTION 2: ACTION STEPS -->
      <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps — In Order</span></h2>

      <ol class="steps">
        <li>
          <div class="step-content">
            <div class="step-title">Capture and preserve both pieces of evidence</div>
            <div class="step-body">Pull a full-page PDF of the archived rental listing (use Wayback Machine if the original ad is taken down). Pull a clean PDF of the current for-sale MLS listing and the signed Seller Property Disclosure. Save all three to the deal folder with the date captured in the filename.</div>
            <span class="step-owner">Owner: Aaron</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Write a one-page discrepancy memo</div>
            <div class="step-body">Quote the exact language from the rental ad, quote the exact language from the current disclosure, and state the delta in one sentence. Keep it factual — no accusations, no tone. This memo is the attachment to every outgoing request.</div>
            <span class="step-owner">Owner: Aaron</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Send a written request for clarification to the listing broker</div>
            <div class="step-body">Email — not a phone call — the current listing broker and the seller's attorney (if identified). Attach both source documents and the memo. Request a written explanation, a corrected disclosure, or a seller's addendum within a stated deadline (recommend 3 business days).</div>
            <span class="step-owner">Owner: Aaron</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Loop in closing attorney and real-estate counsel</div>
            <div class="step-body">Forward the memo and both source documents to the closing attorney. Ask specifically: (a) is this a material misrepresentation under Alabama law? (b) does it trigger a re-inspection or appraisal re-review? (c) what addendum language will cure it? Do not rely on the broker's opinion — get counsel in writing.</div>
            <span class="step-owner">Owner: Aaron + Attorney</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Order verification of the disputed feature</div>
            <div class="step-body">If square footage — order an independent appraiser measurement. If bedroom count / permits / septic — pull records from the municipality. If HVAC / systems — schedule a targeted re-inspection. Verification must be third-party, not seller-supplied.</div>
            <span class="step-owner">Owner: Aaron</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Negotiate the remedy in writing</div>
            <div class="step-body">Acceptable outcomes, in order of preference: (1) corrected disclosure + price reduction that matches the verified feature, (2) seller credit at closing, (3) escrow holdback until cured, (4) walk with earnest money returned. Put the chosen remedy in an addendum signed by both parties before closing is scheduled.</div>
            <span class="step-owner">Owner: Aaron + Attorney</span>
          </div>
        </li>
        <li>
          <div class="step-content">
            <div class="step-title">Decision gate — close, re-negotiate, or walk</div>
            <div class="step-body">If seller refuses to acknowledge the discrepancy in writing, walk. A seller who will not correct a disclosure in the contract phase will not respond cooperatively after closing. Earnest money protection under the disclosure contingency is the leverage — use it.</div>
            <span class="step-owner">Owner: Aaron</span>
          </div>
        </li>
      </ol>

      <!-- SECTION 3: RISK -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">if Left Unresolved</span></h2>

      <div class="risk-grid">
        <div class="risk-card high">
          <h5>High — Legal Exposure</h5>
          <p>Closing on a property with a known, documented disclosure inconsistency weakens a future misrepresentation claim. Once you close with knowledge, the remedy window narrows sharply.</p>
        </div>
        <div class="risk-card high">
          <h5>High — Appraisal / Financing</h5>
          <p>If the disputed feature (square footage, bedroom count, legal use) affects appraised value, the lender may re-underwrite or reduce loan proceeds after closing, forcing cash to close.</p>
        </div>
        <div class="risk-card medium">
          <h5>Medium — Title & Insurance</h5>
          <p>A feature advertised but not legally permitted (finished basement, added bedroom, outbuilding) can be flagged by title underwriters or excluded from the hazard policy.</p>
        </div>
        <div class="risk-card medium">
          <h5>Medium — Resale</h5>
          <p>You inherit the same discrepancy at your resale. Every future buyer's agent will pull the same archived ad and ask the same question.</p>
        </div>
        <div class="risk-card low">
          <h5>Low — Process Friction</h5>
          <p>Addressing this in writing adds days, not weeks. Sellers who refuse a written correction during the contingency period are the signal, not the delay itself.</p>
        </div>
      </div>

      <!-- SECTION 4: EMAIL SCRIPT -->
      <h2 class="nu-section-title"><span class="first">Draft</span> <span class="rest">Language — Request to Listing Broker</span></h2>

      <div class="script-box">
        <span class="label">Email to listing broker (CC closing attorney)</span>
        <p>Name —</p>
        <p>In preparing to close, we compared the Seller Property Disclosure against the prior rental advertisement for the same property. There is a material discrepancy in the description of [feature]. Both documents are attached, with the exact language highlighted on each.</p>
        <p>Before we move forward, we need one of the following in writing, within three business days: a corrected Seller Property Disclosure, a seller's addendum that resolves the difference, or a written explanation from the seller that we can review with counsel.</p>
        <p>We want to close — and we want to close on a clean record. Please confirm receipt and let me know which path the seller intends to take.</p>
        <p>Sincerely,<br>Aaron C. Norris</p>
      </div>

      <!-- SECTION 5: DESIRED OUTCOMES -->
      <h2 class="nu-section-title"><span class="first">Desired</span> <span class="rest">Outcomes</span></h2>
      <ul class="outcomes">
        <li><span class="bullet"></span><span>Written, signed acknowledgement from the seller of the discrepancy — on the record before closing.</span></li>
        <li><span class="bullet"></span><span>Corrected Seller Property Disclosure or a binding addendum that matches verified, third-party facts.</span></li>
        <li><span class="bullet"></span><span>Price adjustment, seller credit, or escrow holdback proportionate to the verified impact of the delta.</span></li>
        <li><span class="bullet"></span><span>Closing attorney's file documents the resolution path, preserving future claim rights.</span></li>
        <li><span class="bullet"></span><span>Clean contingency release — only after the addendum is executed, not before.</span></li>
      </ul>

      <!-- SIGNATURE LINE -->
      <div class="sign-line">
        <h4>Before Signing a Waiver, Confirm:</h4>
        <p>✓ The written explanation from seller is in the file.<br>
        ✓ The addendum is signed by both parties.<br>
        ✓ Counsel has reviewed the cure language.<br>
        ✓ Any verification (appraisal re-measurement, permit pull, inspection) is back and matches the addendum.<br>
        ✓ Earnest money disposition is documented in the event of renegotiation failure.</p>
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
    <div class="nu-footer-legal">
      Internal action plan · Not legal advice · Verify all steps with licensed Alabama real-estate counsel before signing.
    </div>
  </footer>

</body>
</html>