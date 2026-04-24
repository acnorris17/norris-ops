<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Action — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-dark: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-accent-gold: #C9A84C;
      --nu-alert-red: #B71C1C;
      --nu-alert-bg: #FFF3F3;
      --nu-warning-amber: #B87700;
      --nu-warning-bg: #FFF9EC;
      --nu-ok-green: #1B7F3A;
      --nu-ok-bg: #EEF8F0;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue-dark) 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 64px 40px 88px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
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
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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

    /* CONTENT WRAPPER */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 320px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      max-width: 720px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, rgba(0,0,255,0) 65%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1080px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* DOC TITLE BLOCK */
    .doc-kicker {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--nu-blue-dark);
      margin-bottom: 10px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
    }
    .doc-title em {
      color: var(--nu-blue-dark);
      font-style: normal;
    }
    .doc-subtitle {
      font-size: 1.05rem;
      color: var(--nu-body-text);
      max-width: 780px;
      margin-bottom: 28px;
    }

    /* META STRIP */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .meta-cell {
      background: var(--nu-white);
      padding: 14px 18px;
    }
    .meta-label {
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue-dark);
      margin-bottom: 4px;
    }
    .meta-value {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .meta-value.alert { color: var(--nu-alert-red); }

    /* SECTION HEADER */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    .section-title .first { color: var(--nu-blue-dark); }
    .section-title .rest { color: var(--nu-dark-text); }

    /* ALERT CARD */
    .alert-card {
      background: var(--nu-alert-bg);
      border-left: 5px solid var(--nu-alert-red);
      border-radius: 4px;
      padding: 20px 24px;
      margin-bottom: 24px;
    }
    .alert-card .alert-head {
      font-weight: 900;
      color: var(--nu-alert-red);
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .alert-card p { font-size: 1rem; color: var(--nu-dark-text); }

    /* DISCREPANCY TABLE */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .compare-col {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      overflow: hidden;
    }
    .compare-head {
      padding: 14px 20px;
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--nu-white);
    }
    .compare-col.rental .compare-head {
      background: linear-gradient(135deg, var(--nu-blue-dark), var(--nu-blue));
    }
    .compare-col.sale .compare-head {
      background: linear-gradient(135deg, #444, #222);
    }
    .compare-body { padding: 18px 20px; font-size: 0.95rem; }
    .compare-body ul { list-style: none; padding-left: 0; }
    .compare-body li {
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-light-gray);
      display: flex;
      gap: 10px;
    }
    .compare-body li:last-child { border-bottom: none; }
    .compare-body li::before {
      content: '•';
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      line-height: 1;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .compare-col.sale .compare-body li::before { color: #888; }
    .flag {
      display: inline-block;
      background: var(--nu-warning-bg);
      color: var(--nu-warning-amber);
      font-weight: 700;
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 3px;
      margin-left: 6px;
    }
    .flag.miss {
      background: #FDE2E2;
      color: var(--nu-alert-red);
    }

    /* ACTION CHEVRONS */
    .action-list { list-style: none; padding: 0; }
    .action-item {
      display: flex;
      align-items: stretch;
      margin-bottom: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
      overflow: hidden;
    }
    .action-num {
      flex-shrink: 0;
      width: 64px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%);
    }
    .action-body {
      flex: 1;
      padding: 16px 20px 16px 26px;
    }
    .action-head {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.02rem;
      margin-bottom: 4px;
    }
    .action-desc {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin-bottom: 6px;
    }
    .action-meta {
      font-size: 0.82rem;
      color: #666;
    }
    .action-meta strong { color: var(--nu-blue-dark); }

    /* EVIDENCE */
    .evidence-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
    }
    .evidence-card {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      padding: 16px 18px;
    }
    .evidence-card h4 {
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--nu-blue-dark);
      margin-bottom: 6px;
    }
    .evidence-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* LEGAL NOTE */
    .legal-note {
      background: var(--nu-navy);
      color: rgba(255,255,255,0.92);
      border-radius: 6px;
      padding: 22px 28px;
      font-size: 0.92rem;
      line-height: 1.65;
    }
    .legal-note strong { color: var(--nu-cyan); }

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
      font-size: 1rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 840px) {
      .meta-strip { grid-template-columns: repeat(2, 1fr); }
      .compare-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1.02rem; }
      .nu-wrap { padding: 40px 22px 56px; }
      .doc-title { font-size: 1.65rem; }
      .meta-strip { grid-template-columns: 1fr; }
      .action-num { width: 50px; font-size: 1.15rem; }
      .action-body { padding: 14px 16px 14px 20px; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .compare-col, .action-item { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="doc-kicker">Action Item · Property Due Diligence</div>
      <h1 class="doc-title">Address the <em>Disclosure Discrepancy</em> Between the Rental Listing and the For-Sale Listing</h1>
      <p class="doc-subtitle">
        The rental advertisement and the for-sale Seller Property Disclosure Statement describe the same house in materially
        different terms. Before closing, each difference has to be traced to a document, attached to the file, and either
        resolved by the seller in writing or priced into the offer.
      </p>

      <!-- META STRIP -->
      <div class="meta-strip">
        <div class="meta-cell">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable — Action Capture</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Captured</div>
          <div class="meta-value">2026-04-24</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Owner</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-cell">
          <div class="meta-label">Status</div>
          <div class="meta-value alert">Open — Pre-Closing</div>
        </div>
      </div>

      <!-- ALERT -->
      <div class="alert-card">
        <div class="alert-head">Why this is a pre-closing item, not a post-closing item</div>
        <p>
          Once we sign and fund, every undisclosed condition becomes our cost and our argument. The rental listing was
          published by, or on behalf of, the seller — so anything in it is an admission. The time to resolve the gap
          between what they rented the house with and what they are now selling us is <strong>before</strong> the earnest
          money goes hard and <strong>before</strong> the financing contingency drops.
        </p>
      </div>

      <!-- DISCREPANCY COMPARE -->
      <section class="section">
        <h2 class="section-title"><span class="first">What</span> <span class="rest">the two listings say</span></h2>
        <p style="margin-bottom: 18px; color: var(--nu-body-text);">
          Pull the full text of both listings side by side. The columns below are the working template — every bullet
          needs a screenshot, an MLS export, or a Zillow/Realtor.com cache attached to the file.
        </p>

        <div class="compare-grid">
          <div class="compare-col rental">
            <div class="compare-head">As Advertised for Rent</div>
            <div class="compare-body">
              <ul>
                <li>Features / upgrades promoted as tenant amenities</li>
                <li>Condition statements the landlord relied on to set rent</li>
                <li>Mechanicals described as "new," "updated," or "recently serviced"</li>
                <li>Square footage and room count as marketed to tenants</li>
                <li>Known issues the lease addendum required tenants to acknowledge <span class="flag">cross-check</span></li>
              </ul>
            </div>
          </div>
          <div class="compare-col sale">
            <div class="compare-head">As Disclosed for Sale</div>
            <div class="compare-body">
              <ul>
                <li>Items checked "unknown" on the Seller Property Disclosure</li>
                <li>Items checked "no" that the rental listing described as "yes"</li>
                <li>Square footage on the MLS sale sheet vs. the rental sheet <span class="flag miss">gap</span></li>
                <li>Age / condition of roof, HVAC, water heater, electrical panel</li>
                <li>Any prior water, pest, foundation, or mold events <span class="flag miss">gap</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTION STEPS -->
      <section class="section">
        <h2 class="section-title"><span class="first">Action</span> <span class="rest">Steps</span></h2>
        <ol class="action-list">
          <li class="action-item">
            <div class="action-num">1</div>
            <div class="action-body">
              <div class="action-head">Freeze both listings in writing</div>
              <div class="action-desc">
                Save full PDF captures of the active for-sale MLS sheet and every recoverable version of the rental
                listing (Zillow, Realtor.com, Apartments.com, Facebook Marketplace, Craigslist, local MLS rental feed,
                and any property-manager site). Include the Wayback Machine snapshots.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Before:</strong> Next contingency deadline</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">2</div>
            <div class="action-body">
              <div class="action-head">Build the line-by-line delta sheet</div>
              <div class="action-desc">
                One row per claim. Columns: item, rental language (verbatim), sale disclosure language (verbatim),
                source URL, screenshot filename, impact ($ / risk), resolution asked of seller.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Deliverable:</strong> Delta sheet attached to the deal file</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">3</div>
            <div class="action-body">
              <div class="action-head">Send the seller a written request for clarification</div>
              <div class="action-desc">
                One letter, through the buyer's agent, listing each discrepancy and asking the seller to either amend
                the Seller Property Disclosure, produce a receipt/permit/inspection, or acknowledge the rental listing
                claim was inaccurate. No verbal answers accepted.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron + buyer's agent &nbsp;·&nbsp; <strong>Format:</strong> Email with delta sheet attached</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">4</div>
            <div class="action-body">
              <div class="action-head">Route the discrepancy through the licensed inspector</div>
              <div class="action-desc">
                Hand the inspector the rental listing ad and the delta sheet before the inspection so every claim
                gets a physical verification — roof age, HVAC age, water heater install date, panel condition,
                crawlspace moisture, windows and appliances called "new" in the ad.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Before:</strong> Inspection date</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">5</div>
            <div class="action-body">
              <div class="action-head">Pull supporting records</div>
              <div class="action-desc">
                City / county permit history, prior-sale disclosures, any prior inspection reports the listing agent
                has on file, insurance CLUE report (through our carrier), and — if the property had tenants — any
                move-in / move-out condition reports.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Tool:</strong> County portal + carrier request</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">6</div>
            <div class="action-body">
              <div class="action-head">Price the remaining risk into the offer</div>
              <div class="action-desc">
                Any item the seller will not resolve in writing gets converted to either a price reduction, a
                seller-paid credit at closing, or a walk. No "we'll handle it after closing." If the rental listing
                said "new roof" and the disclosure says "unknown," the seller names the number.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Vehicle:</strong> Written counteroffer / amendment</div>
            </div>
          </li>
          <li class="action-item">
            <div class="action-num">7</div>
            <div class="action-body">
              <div class="action-head">Loop the attorney before earnest money goes hard</div>
              <div class="action-desc">
                Alabama is a caveat-emptor state with a narrow fraudulent-concealment exception for known defects.
                A documented gap between a rental ad and a sale disclosure is exactly the kind of record an attorney
                needs to evaluate leverage and remedies. Send the delta sheet and both listings together.
              </div>
              <div class="action-meta"><strong>Owner:</strong> Aaron &nbsp;·&nbsp; <strong>Before:</strong> Earnest money goes non-refundable</div>
            </div>
          </li>
        </ol>
      </section>

      <!-- EVIDENCE -->
      <section class="section">
        <h2 class="section-title"><span class="first">Evidence</span> <span class="rest">to Preserve</span></h2>
        <div class="evidence-grid">
          <div class="evidence-card">
            <h4>Rental Listing Captures</h4>
            <p>Full-page PDF of each rental ad with URL, date, and platform visible in the header or footer.</p>
          </div>
          <div class="evidence-card">
            <h4>MLS Sale Sheet</h4>
            <p>Current active listing export, including private agent remarks if the buyer's agent can pull them.</p>
          </div>
          <div class="evidence-card">
            <h4>Seller Property Disclosure</h4>
            <p>Signed PDF on file. Note the date — any amendment issued after this one supersedes it.</p>
          </div>
          <div class="evidence-card">
            <h4>Prior Permits & Inspections</h4>
            <p>County permit portal, any prior inspection reports, insurance CLUE loss history.</p>
          </div>
          <div class="evidence-card">
            <h4>Tenant-Era Records</h4>
            <p>Lease, lease addendum, move-in / move-out condition reports, any maintenance logs from the property manager.</p>
          </div>
          <div class="evidence-card">
            <h4>Communications Log</h4>
            <p>Every email with the listing agent, seller, and attorney — kept in the deal folder, not in inbox.</p>
          </div>
        </div>
      </section>

      <!-- LEGAL -->
      <section class="section">
        <h2 class="section-title"><span class="first">Legal</span> <span class="rest">Framing</span></h2>
        <div class="legal-note">
          Alabama residential sales operate under <strong>caveat emptor</strong>, but the doctrine has a recognized
          exception for <strong>fraudulent concealment of a material defect</strong> where the seller has actual knowledge
          and a duty to disclose. A public rental advertisement that describes the property in terms inconsistent with
          the sworn Seller Property Disclosure is contemporaneous evidence of that knowledge. This file is being built
          so that — if the seller refuses to resolve the gap — we have everything an attorney would need to evaluate
          rescission, credit, or specific-performance leverage <em>before</em> closing, not after. This document is
          operational notes, not legal advice; the deal attorney makes the final call on remedies.
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>