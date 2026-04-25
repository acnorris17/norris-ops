<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Pull 2018 Compass Bank → McKnight Deed — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-success-green: #1B7340;
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
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
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* ══ ACTION HEADER ══ */
    .action-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      gap: 22px;
      box-shadow: 0 6px 24px rgba(0,0,51,0.18);
      border-left: 6px solid var(--nu-cyan);
    }
    .action-banner-icon {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 1.7rem;
    }
    .action-banner-content { flex: 1; }
    .action-banner-label {
      font-size: 0.78rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--nu-cyan);
      margin-bottom: 6px;
    }
    .action-banner-title {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: 0.01em;
      line-height: 1.3;
    }

    /* ══ SECTION TITLES ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-medium-gray);
    }
    .nu-section-title span:first-child {
      color: var(--nu-blue);
    }

    /* ══ CARD ══ */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 24px;
    }

    /* ══ DETAIL TABLE ══ */
    .detail-table {
      width: 100%;
      border-collapse: collapse;
    }
    .detail-table tr { border-bottom: 1px solid var(--nu-medium-gray); }
    .detail-table tr:last-child { border-bottom: none; }
    .detail-table th {
      text-align: left;
      padding: 14px 16px 14px 0;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--nu-blue);
      width: 38%;
      vertical-align: top;
    }
    .detail-table td {
      padding: 14px 0;
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 400;
      vertical-align: top;
    }
    .detail-table td.highlight { font-weight: 700; color: var(--nu-navy); }
    .detail-table td code {
      background: var(--nu-light-gray);
      padding: 3px 8px;
      border-radius: 4px;
      font-family: 'SF Mono', Menlo, Consolas, monospace;
      font-size: 0.92rem;
      color: var(--nu-navy);
    }

    /* ══ STEP LIST ══ */
    .step-list {
      list-style: none;
      padding: 0;
      margin: 0;
      counter-reset: step;
    }
    .step-list li {
      counter-increment: step;
      position: relative;
      padding: 18px 22px 18px 70px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      margin-bottom: 12px;
      border-left: 4px solid var(--nu-blue);
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 38px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.05rem;
    }
    .step-list li strong {
      display: block;
      color: var(--nu-navy);
      font-weight: 900;
      margin-bottom: 4px;
      font-size: 1.02rem;
    }
    .step-list li span.step-detail {
      display: block;
      font-size: 0.94rem;
      color: var(--nu-body-text);
    }
    .step-list li span.step-link {
      display: inline-block;
      margin-top: 6px;
      font-size: 0.88rem;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* ══ STATUS PILL ══ */
    .pill {
      display: inline-block;
      padding: 5px 14px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill-open { background: rgba(200, 16, 46, 0.10); color: var(--nu-alert-red); border: 1px solid rgba(200, 16, 46, 0.25); }
    .pill-priority { background: rgba(201, 168, 76, 0.15); color: #8a6f1f; border: 1px solid rgba(201, 168, 76, 0.4); }

    /* ══ INFO GRID ══ */
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin: 22px 0 8px;
    }
    .info-tile {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 18px 20px;
      border-top: 4px solid var(--nu-cyan);
    }
    .info-tile-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 6px;
    }
    .info-tile-value {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--nu-navy);
      line-height: 1.4;
    }
    .info-tile-sub {
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 4px;
      font-weight: 400;
    }

    /* ══ NOTE BOX ══ */
    .note-box {
      background: linear-gradient(135deg, rgba(6, 208, 255, 0.08) 0%, rgba(0, 0, 255, 0.04) 100%);
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 6px;
      margin-top: 20px;
    }
    .note-box-title {
      font-weight: 900;
      color: var(--nu-navy);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }
    .note-box p {
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .note-box p:last-child { margin-bottom: 0; }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
      margin: 12px 0 0;
    }
    .checklist li {
      padding: 10px 0 10px 36px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
      color: var(--nu-dark-text);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.88);
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
      font-size: 0.94rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.76rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.06em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px; }
      .action-banner { flex-direction: column; text-align: center; padding: 22px; }
      .detail-table th, .detail-table td { display: block; width: 100%; padding: 6px 0; }
      .detail-table th { padding-top: 12px; }
      .detail-table tr { padding: 8px 0; }
      .step-list li { padding: 16px 16px 16px 60px; }
      .step-list li::before { left: 12px; width: 32px; height: 32px; font-size: 0.95rem; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .info-tile { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- ACTION BANNER -->
      <div class="action-banner">
        <div class="action-banner-icon">!</div>
        <div class="action-banner-content">
          <div class="action-banner-label">reMarkable Action Item · Open</div>
          <div class="action-banner-title">Pull the 2018 Compass Bank → McKnight Deed (Instrument 20180...)</div>
        </div>
      </div>

      <!-- INFO TILES -->
      <div class="info-grid">
        <div class="info-tile">
          <div class="info-tile-label">Status</div>
          <div class="info-tile-value"><span class="pill pill-open">Open</span></div>
          <div class="info-tile-sub">Pending — needs to be pulled and saved</div>
        </div>
        <div class="info-tile">
          <div class="info-tile-label">Priority</div>
          <div class="info-tile-value"><span class="pill pill-priority">High</span></div>
          <div class="info-tile-sub">Ties to Buttewoods estate review</div>
        </div>
        <div class="info-tile">
          <div class="info-tile-label">Source</div>
          <div class="info-tile-value">reMarkable</div>
          <div class="info-tile-sub">Captured 2026-04-25</div>
        </div>
        <div class="info-tile">
          <div class="info-tile-label">Owner</div>
          <div class="info-tile-value">Aaron C. Norris</div>
          <div class="info-tile-sub">Personal / legal review</div>
        </div>
      </div>

      <!-- ACTION DETAIL -->
      <section style="margin-top: 36px;">
        <h2 class="nu-section-title"><span>Action</span> <span>Detail</span></h2>
        <div class="nu-card">
          <table class="detail-table">
            <tr>
              <th>Document Requested</th>
              <td class="highlight">Recorded deed — Compass Bank to McKnight</td>
            </tr>
            <tr>
              <th>Year of Recording</th>
              <td>2018</td>
            </tr>
            <tr>
              <th>Instrument Number</th>
              <td><code>20180.....</code> <span style="color: var(--nu-alert-red); font-weight:700;">— full number to confirm at the courthouse / online portal</span></td>
            </tr>
            <tr>
              <th>Recording Jurisdiction</th>
              <td>Jefferson County, Alabama — Probate Court, Birmingham Division (most likely venue; verify against the property's tax parcel before pulling)</td>
            </tr>
            <tr>
              <th>Why It Matters</th>
              <td>Establishes the chain of title for the McKnight property. Needed to verify legal description, prior lien releases, and any reserved easements before negotiations or closing on the related estate work.</td>
            </tr>
            <tr>
              <th>Captured From</th>
              <td>reMarkable note dated 2026-04-25</td>
            </tr>
          </table>
        </div>
      </section>

      <!-- STEPS -->
      <section style="margin-top: 36px;">
        <h2 class="nu-section-title"><span>How</span> <span>To Pull It</span></h2>
        <div class="nu-card">
          <ol class="step-list">
            <li>
              <strong>Confirm the recording county</strong>
              <span class="step-detail">Cross-check the McKnight property address against the county tax assessor record. Default assumption is Jefferson County, AL. If property sits outside Jefferson, redirect to the correct probate office.</span>
            </li>
            <li>
              <strong>Open the Jefferson County Probate online portal</strong>
              <span class="step-detail">Use the Probate Court — Recording Division online search. Search by Instrument Number first; fall back to Grantor "Compass Bank" / Grantee "McKnight" if the instrument number is incomplete.</span>
              <span class="step-link">jeffcoprobatecourt.com → Records Search → Real Property</span>
            </li>
            <li>
              <strong>Lock the full instrument number</strong>
              <span class="step-detail">The reMarkable note shows "20180...". Locate the exact 10–12 digit instrument number, copy the date of recording, and capture the book/page reference if shown.</span>
            </li>
            <li>
              <strong>Pay the recording fee and download the certified copy</strong>
              <span class="step-detail">Standard certified copy fee runs ~$1/page plus $5 certification. Use the Norris Utilities® AmEx and request itemized PDF receipt for QuickBooks.</span>
            </li>
            <li>
              <strong>Save the deed PDF to the master file</strong>
              <span class="step-detail">File location: <code>~/norris-agent/output/legal/mcknight/2018_compass_to_mcknight_deed.pdf</code></span>
              <span class="step-link">Mirror to norris-ops/internal/legal/ for backup.</span>
            </li>
            <li>
              <strong>Read and flag</strong>
              <span class="step-detail">Highlight: legal description, exceptions, easements, mortgage releases, and any restrictive covenants. Note anything that affects the Buttewoods estate negotiation.</span>
            </li>
            <li>
              <strong>Log it in the open items file</strong>
              <span class="step-detail">Update <code>operations/open-items.md</code> with deed pulled date, instrument number, and one-line summary. Close the reMarkable item.</span>
            </li>
          </ol>
        </div>
      </section>

      <!-- CHECKLIST -->
      <section style="margin-top: 36px;">
        <h2 class="nu-section-title"><span>Completion</span> <span>Checklist</span></h2>
        <div class="nu-card">
          <ul class="checklist">
            <li>County confirmed (Jefferson County, AL — verify)</li>
            <li>Full instrument number captured</li>
            <li>Certified PDF downloaded</li>
            <li>PDF filed to <code>~/norris-agent/output/legal/mcknight/</code></li>
            <li>Mirrored to <code>~/norris-ops/internal/legal/</code> and pushed to GitHub</li>
            <li>Legal description and exceptions highlighted</li>
            <li>open-items.md updated and reMarkable item closed</li>
          </ul>
        </div>
      </section>

      <!-- NOTE -->
      <div class="note-box">
        <div class="note-box-title">Aaron's Note</div>
        <p>This deed is a building block for the Buttewoods estate review. Pull it before any negotiating conversation so the legal description and any reserved easements are already on the table.</p>
        <p>If the online portal returns no result for the instrument number, walk it in person at the Jefferson County Probate Court — 716 Richard Arrington Jr. Blvd N, Birmingham, AL — and request a certified copy at the counter.</p>
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
    <div class="nu-footer-meta">Action Item · reMarkable Capture 2026-04-25 · Internal Use</div>
  </footer>

</body>
</html>