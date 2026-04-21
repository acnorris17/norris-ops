<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
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
      --nu-alert-red: #C8102E;
      --nu-success-green: #1B7A3E;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 65%;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
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

    /* PRIORITY BANNER */
    .nu-priority-banner {
      background: linear-gradient(135deg, var(--nu-alert-red) 0%, #8a0a1f 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 6px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 4px 14px rgba(200, 16, 46, 0.25);
    }
    .nu-priority-banner-icon {
      font-weight: 900;
      font-size: 1.4rem;
      background: var(--nu-white);
      color: var(--nu-alert-red);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .nu-priority-banner-text {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
    }
    .nu-priority-banner-text span {
      display: block;
      font-weight: 400;
      font-size: 0.85rem;
      opacity: 0.92;
      margin-top: 2px;
    }

    /* PAGE TITLE */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .nu-page-title .blue { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      max-width: 760px;
    }

    /* SECTION */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-header {
      display: flex;
      align-items: baseline;
      gap: 14px;
      border-bottom: 3px solid var(--nu-blue);
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .nu-section-num {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      font-family: var(--font-primary);
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
    }
    .nu-section-title .dark {
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* INFO GRID */
    .nu-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .nu-info-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 20px;
      border-radius: 4px;
    }
    .nu-info-card .label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .nu-info-card .value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-info-card .value small {
      display: block;
      font-weight: 400;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
    }

    /* STEPS */
    .nu-steps {
      list-style: none;
      counter-reset: step;
    }
    .nu-step {
      counter-increment: step;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px 24px 22px 78px;
      margin-bottom: 14px;
      position: relative;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-step:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .nu-step::before {
      content: counter(step);
      position: absolute;
      left: 20px;
      top: 22px;
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0, 0, 255, 0.25);
    }
    .nu-step h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-step p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-step p:last-child { margin-bottom: 0; }
    .nu-step .meta {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--nu-blue);
      background: rgba(0, 0, 255, 0.06);
      padding: 4px 10px;
      border-radius: 4px;
      margin-top: 8px;
      margin-right: 6px;
    }
    .nu-step .meta.cost { color: var(--nu-success-green); background: rgba(27, 122, 62, 0.08); }

    /* CONTACT TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      font-size: 0.95rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .nu-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tr:last-child td { border-bottom: none; }
    .nu-table tr:hover td { background: var(--nu-light-gray); }
    .nu-table td a {
      color: var(--nu-blue);
      text-decoration: none;
      font-weight: 700;
    }
    .nu-table td a:hover { text-decoration: underline; }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .nu-checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.98rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 13px;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0, 0, 255, 0.04) 0%, rgba(6, 208, 255, 0.06) 100%);
      border-left: 5px solid var(--nu-blue);
      padding: 22px 26px;
      border-radius: 6px;
      margin: 24px 0;
    }
    .nu-callout strong { color: var(--nu-blue); }
    .nu-callout p { margin-bottom: 8px; }
    .nu-callout p:last-child { margin-bottom: 0; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
      font-family: 'Playfair Display', Georgia, serif;
    }
    .nu-footer-name {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-white);
      margin-bottom: 8px;
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
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .nu-page-title { font-size: 1.8rem; }
      .nu-step { padding: 18px 18px 18px 70px; }
      .nu-step::before { left: 14px; width: 38px; height: 38px; font-size: 1.05rem; }
      .nu-priority-banner { flex-direction: column; align-items: flex-start; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step { box-shadow: none; break-inside: avoid; }
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
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- PRIORITY BANNER -->
      <div class="nu-priority-banner">
        <div class="nu-priority-banner-icon">!</div>
        <div class="nu-priority-banner-text">
          ACTION ITEM — Title chain research required before purchase negotiation.
          <span>Pulls the underlying lien-release deed for the 4505 Butterworth estate due-diligence file.</span>
        </div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">
        Pull the <span class="blue">2018 Compass Bank → McKnight Deed</span><br>
        Instrument <span class="blue">20180</span>
      </h1>
      <p class="nu-page-subtitle">
        Source document retrieval task originated from the reMarkable action queue. This deed sits one
        link upstream in the chain of title and is required to verify lien release language, legal
        description continuity, and any reserved easements before the next negotiation step proceeds.
      </p>

      <!-- AT-A-GLANCE -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">01</span>
          <h2 class="nu-section-title">At a <span class="dark">Glance</span></h2>
        </div>
        <div class="nu-info-grid">
          <div class="nu-info-card">
            <div class="label">Document Type</div>
            <div class="value">Statutory Warranty Deed<small>Compass Bank, N.A. (Grantor) → McKnight (Grantee)</small></div>
          </div>
          <div class="nu-info-card">
            <div class="label">Recording Year</div>
            <div class="value">2018<small>Instrument prefix: 20180</small></div>
          </div>
          <div class="nu-info-card">
            <div class="label">Likely Jurisdiction</div>
            <div class="value">Jefferson County, AL<small>Confirm against subject parcel before request</small></div>
          </div>
          <div class="nu-info-card">
            <div class="label">Owner of Task</div>
            <div class="value">Aaron C. Norris<small>Personal — real estate due diligence</small></div>
          </div>
          <div class="nu-info-card">
            <div class="label">Target Turnaround</div>
            <div class="value">Within 3 business days<small>Faster if pulled in person at Probate Court</small></div>
          </div>
          <div class="nu-info-card">
            <div class="label">Estimated Cost</div>
            <div class="value">$1.00 – $5.00 / page<small>Certified copy adds approximately $5.00 + notary</small></div>
          </div>
        </div>
      </section>

      <!-- WHY IT MATTERS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">02</span>
          <h2 class="nu-section-title">Why <span class="dark">This Deed Matters</span></h2>
        </div>
        <div class="nu-callout">
          <p><strong>Chain-of-title verification.</strong> Compass Bank was acquired by BBVA in 2007
          and rebranded BBVA USA in 2019, then merged into PNC Bank in 2021. Any reference to
          "Compass Bank" as grantor on a 2018 instrument is the bank's <em>final</em> conveyance
          identity — confirming the proper successor signatory matters for current encumbrance work.</p>
          <p><strong>Lien release language.</strong> If this deed represents a foreclosure conveyance
          or release in lieu, the recital block determines whether subordinate liens were
          extinguished or survived.</p>
          <p><strong>Legal description anchor.</strong> The metes-and-bounds (or platted lot)
          description in this instrument should match what is being negotiated today. Any
          inconsistency must be resolved before earnest money is committed.</p>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">03</span>
          <h2 class="nu-section-title">How to <span class="dark">Pull the Deed</span></h2>
        </div>
        <ol class="nu-steps">
          <li class="nu-step">
            <h4>Confirm the recording county</h4>
            <p>Verify the parcel sits in Jefferson County, AL. If the subject property is in
            Shelby, St. Clair, or another county, redirect the request to that Probate Court.
            "20180" as a prefix is consistent with Jefferson County's instrument numbering format.</p>
            <span class="meta">Time: 5 minutes</span>
          </li>
          <li class="nu-step">
            <h4>Search the online recording index</h4>
            <p>Use the Jefferson County Probate Court's Land Records search portal. Enter
            grantor "Compass Bank" and grantee "McKnight" with a recording-date range of
            01/01/2018 – 12/31/2018. Confirm the full instrument number (typically 12 digits
            beginning with 20180).</p>
            <span class="meta">Time: 10 minutes</span>
            <span class="meta cost">Cost: $0 (index is free)</span>
          </li>
          <li class="nu-step">
            <h4>Order the certified copy</h4>
            <p>Once the exact instrument is located, order a certified copy through the online
            portal or by walking into the Probate Court at the Jefferson County Courthouse
            (716 Richard Arrington Jr. Blvd N, Birmingham, AL 35203). Certified copies are
            preferred for any title or attorney file.</p>
            <span class="meta">Time: 1 – 3 business days online; same-day in person</span>
            <span class="meta cost">Cost: $1 – $5 per page + ~$5 certification fee</span>
          </li>
          <li class="nu-step">
            <h4>Save to the property due-diligence folder</h4>
            <p>File the PDF under the 4505 Butterworth deal folder using the naming convention
            <em>YYYY-MM-DD_Compass-to-McKnight_Inst-20180XXXXX.pdf</em>. Note the recording date
            and book/page (if any) in the deal log.</p>
            <span class="meta">Time: 5 minutes</span>
          </li>
          <li class="nu-step">
            <h4>Flag review items for the closing attorney</h4>
            <p>Send the deed to the closing attorney with a short note calling out: (a) grantor
            signatory authority for the post-merger entity, (b) any reserved easements, mineral
            rights, or restrictive covenants, and (c) confirmation that the legal description
            ties cleanly to the next-recorded instrument in the chain.</p>
            <span class="meta">Time: 15 minutes</span>
          </li>
        </ol>
      </section>

      <!-- WHERE TO PULL -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">04</span>
          <h2 class="nu-section-title">Where to <span class="dark">Pull It</span></h2>
        </div>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Address / URL</th>
                <th>Phone</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Jefferson County Probate Court — Land Records (in person)</strong></td>
                <td>716 Richard Arrington Jr. Blvd N, Room 120, Birmingham, AL 35203</td>
                <td><a href="tel:2053255411">205-325-5411</a></td>
                <td>Same-day certified copies. Bring instrument number and payment.</td>
              </tr>
              <tr>
                <td><strong>Jefferson County Online Records Search</strong></td>
                <td>jeffconline.jccal.org (Probate / Real Property)</td>
                <td>—</td>
                <td>Index search free; copy/print fee applies. Confirm credit-card surcharge.</td>
              </tr>
              <tr>
                <td><strong>Title Company (fastest, full-service)</strong></td>
                <td>Any local title company already on file for the deal</td>
                <td>—</td>
                <td>Will pull, certify, and run a 30-year title search in one engagement.</td>
              </tr>
              <tr>
                <td><strong>Real Estate Attorney</strong></td>
                <td>Closing counsel for the Butterworth deal</td>
                <td>—</td>
                <td>Best route if signatory authority or lien-release language needs interpretation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">05</span>
          <h2 class="nu-section-title">Completion <span class="dark">Checklist</span></h2>
        </div>
        <ul class="nu-checklist">
          <li>Confirmed recording county is Jefferson County, AL.</li>
          <li>Located full instrument number beginning with 20180 in the online index.</li>
          <li>Verified grantor is "Compass Bank, N.A." and grantee surname is "McKnight."</li>
          <li>Ordered certified copy and received PDF (and physical copy if needed).</li>
          <li>Filed deed in the 4505 Butterworth due-diligence folder with the standard naming convention.</li>
          <li>Logged recording date, book/page, and instrument number in the deal log.</li>
          <li>Forwarded deed to closing attorney with the three flagged review items.</li>
          <li>Marked task complete in the reMarkable action queue.</li>
        </ul>
      </section>

      <!-- NEXT STEP -->
      <section class="nu-section">
        <div class="nu-section-header">
          <span class="nu-section-num">06</span>
          <h2 class="nu-section-title">Next <span class="dark">Step After Retrieval</span></h2>
        </div>
        <div class="nu-callout">
          <p><strong>Tie the chain forward.</strong> Once this 2018 deed is in hand, pull the
          next-recorded instrument that conveys out of McKnight (or any subsequent grantor)
          and confirm the legal description carries through verbatim. Any break, rerecording,
          or correction deed in the chain becomes an action item for the closing attorney
          before purchase negotiations advance to a binding offer.</p>
          <p><strong>Decision gate.</strong> Do not commit earnest money on the 4505 Butterworth
          property until the chain is verified clean from the 2018 conveyance forward.</p>
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-name">Aaron C. Norris | Founder &amp; CEO</div>
    <div class="nu-footer-contact">
      Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> |
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> |
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>