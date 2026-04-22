<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rental Listing Disclosure Discrepancy — Action Brief — Norris Utilities®</title>
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
      --nu-alert-red: #C0392B;
      --nu-warn-amber: #D68910;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      opacity: 0.95;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
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

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding-bottom: 60px;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 45%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 800px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 0;
    }

    /* DOC TITLE BLOCK */
    .doc-title-block {
      border-left: 6px solid var(--nu-blue);
      padding: 6px 0 6px 20px;
      margin-bottom: 32px;
    }
    .doc-kicker {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 8px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.2;
      color: var(--nu-dark-text);
    }
    .doc-title .hi { color: var(--nu-blue); }
    .doc-subtitle {
      margin-top: 10px;
      font-size: 1.05rem;
      color: var(--nu-body-text);
      font-weight: 400;
    }

    /* META STRIP */
    .meta-strip {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 36px;
    }
    .meta-item {
      background: var(--nu-white);
      padding: 14px 18px;
    }
    .meta-label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 4px;
    }
    .meta-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* ALERT BAR */
    .alert-bar {
      background: linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%);
      border-left: 5px solid var(--nu-warn-amber);
      padding: 18px 22px;
      margin-bottom: 36px;
      border-radius: 0 6px 6px 0;
    }
    .alert-bar strong {
      color: var(--nu-warn-amber);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 6px;
    }
    .alert-bar p {
      color: var(--nu-dark-text);
      font-size: 0.98rem;
    }

    /* SECTIONS */
    section { margin-bottom: 44px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .nu-section-title .first {
      color: var(--nu-blue);
    }
    .nu-section-title .rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-divider {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
    }

    /* COMPARISON TABLE */
    .compare-table {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 16px;
    }
    .compare-col {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .compare-head {
      padding: 14px 18px;
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--nu-white);
    }
    .compare-head.listing {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
    }
    .compare-head.disclosure {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
    }
    .compare-body {
      padding: 18px 20px;
      font-size: 0.95rem;
    }
    .compare-body ul {
      list-style: none;
    }
    .compare-body li {
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      display: flex;
      justify-content: space-between;
      gap: 12px;
    }
    .compare-body li:last-child { border-bottom: none; }
    .compare-body .k {
      color: var(--nu-body-text);
      font-weight: 400;
    }
    .compare-body .v {
      color: var(--nu-dark-text);
      font-weight: 700;
      text-align: right;
    }
    .compare-body .v.flag {
      color: var(--nu-alert-red);
    }

    /* DISCREPANCY LIST */
    .disc-list {
      list-style: none;
      margin-top: 10px;
    }
    .disc-list li {
      display: flex;
      gap: 16px;
      padding: 16px 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-alert-red);
      border-radius: 0 6px 6px 0;
      margin-bottom: 10px;
    }
    .disc-num {
      flex-shrink: 0;
      width: 32px; height: 32px;
      background: var(--nu-alert-red);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .disc-content h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .disc-content p {
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }

    /* ACTION CHEVRONS */
    .action-list {
      list-style: none;
      margin-top: 10px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 20px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
      font-weight: 700;
      font-size: 0.95rem;
    }
    .nu-badge-num {
      flex-shrink: 0;
      width: 30px; height: 30px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      font-size: 0.9rem;
    }
    .nu-badge-text { flex: 1; }
    .nu-badge-text strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 2px;
    }
    .nu-badge-text span {
      font-weight: 400;
      font-size: 0.88rem;
      color: rgba(255,255,255,0.85);
    }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 10px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }
    .risk-level {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 10px;
    }
    .risk-level.high { background: #fdecea; color: var(--nu-alert-red); }
    .risk-level.med { background: #fff4e6; color: var(--nu-warn-amber); }
    .risk-level.low { background: #e8f6f3; color: #148f77; }

    /* EVIDENCE BLOCK */
    .evidence {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 22px 26px;
      border: 1px solid var(--nu-medium-gray);
    }
    .evidence ol {
      margin-left: 20px;
      margin-top: 8px;
    }
    .evidence li {
      padding: 6px 0;
      font-size: 0.95rem;
    }
    .evidence li strong { color: var(--nu-dark-text); }

    /* CTA */
    .cta-row {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 30px;
      padding-top: 24px;
      border-top: 2px solid var(--nu-medium-gray);
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 26px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-blue);
      padding: 12px 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s;
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
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .wrap { padding: 40px 22px 0; }
      .doc-title { font-size: 1.6rem; }
      .compare-table { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 14px 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header, .nu-footer {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .cta-row { display: none; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
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
    <div class="wrap">

      <div class="doc-title-block">
        <div class="doc-kicker">reMarkable Action Item · Property Transaction</div>
        <h1 class="doc-title">Address <span class="hi">Disclosure Discrepancy</span> Between Rental Listing Advertisement &amp; Seller's Property Disclosure</h1>
        <p class="doc-subtitle">Work brief for reconciling material facts advertised publicly in the rental listing against what the seller disclosed on the property disclosure form. Produced for Aaron C. Norris before any further movement on the purchase.</p>
      </div>

      <div class="meta-strip">
        <div class="meta-item">
          <div class="meta-label">Prepared For</div>
          <div class="meta-value">Aaron C. Norris</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Date Captured</div>
          <div class="meta-value">2026-04-22</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Source</div>
          <div class="meta-value">reMarkable Handwritten Note</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">Priority</div>
          <div class="meta-value" style="color: var(--nu-alert-red);">HIGH — Pre-Closing</div>
        </div>
      </div>

      <div class="alert-bar">
        <strong>Why this matters</strong>
        <p>A gap between what the property was <em>advertised</em> as in its active rental listing and what the seller <em>disclosed</em> on the seller's disclosure is a material fact. Under Alabama residential transfer rules and Aaron's own stated rule of honesty first, the discrepancy must be reconciled in writing — not glossed over — before any further earnest money, inspection, or closing steps proceed.</p>
      </div>

      <section>
        <h2 class="nu-section-title"><span class="first">Issue.</span> <span class="rest">What the discrepancy actually is</span></h2>
        <div class="section-divider"></div>
        <p>The rental listing advertisement (the public marketing piece used while the property was on the rental market) makes representations about the home's condition, finishes, and features. The seller's disclosure form (the legal document delivered with the purchase contract) makes a separate set of representations about known defects, repairs, and condition. These two documents do not match. Side-by-side:</p>

        <div class="compare-table">
          <div class="compare-col">
            <div class="compare-head listing">Rental Listing Advertisement</div>
            <div class="compare-body">
              <ul>
                <li><span class="k">Represented Condition</span><span class="v">Move-in ready / no known issues</span></li>
                <li><span class="k">Roof / Envelope</span><span class="v">Advertised as sound</span></li>
                <li><span class="k">Water Intrusion</span><span class="v">Not mentioned</span></li>
                <li><span class="k">Systems (HVAC, plumbing, electrical)</span><span class="v">Advertised as working</span></li>
                <li><span class="k">Repairs in last 24 months</span><span class="v">Not mentioned</span></li>
                <li><span class="k">Tenant-reported issues</span><span class="v">Not mentioned</span></li>
              </ul>
            </div>
          </div>
          <div class="compare-col">
            <div class="compare-head disclosure">Seller's Property Disclosure</div>
            <div class="compare-body">
              <ul>
                <li><span class="k">Represented Condition</span><span class="v flag">Defects / repair history noted</span></li>
                <li><span class="k">Roof / Envelope</span><span class="v flag">Known issue or prior repair disclosed</span></li>
                <li><span class="k">Water Intrusion</span><span class="v flag">Disclosed (or omitted where it should be)</span></li>
                <li><span class="k">Systems</span><span class="v flag">Items flagged "unknown" or "as-is"</span></li>
                <li><span class="k">Repairs in last 24 months</span><span class="v flag">Listed — contradicts "move-in ready"</span></li>
                <li><span class="k">Tenant-reported issues</span><span class="v flag">Listed — contradicts listing silence</span></li>
              </ul>
            </div>
          </div>
        </div>
        <p style="margin-top:14px; font-size:0.92rem; color:var(--nu-body-text); font-style:italic;">Fill the right-column specifics in from the actual disclosure form once the side-by-side is in front of Aaron; the structure above is what's already known from the reMarkable note — the two documents disagree and the disagreement is material.</p>
      </section>

      <section>
        <h2 class="nu-section-title"><span class="first">Specific.</span> <span class="rest">Discrepancies to reconcile, line by line</span></h2>
        <div class="section-divider"></div>
        <ul class="disc-list">
          <li>
            <div class="disc-num">1</div>
            <div class="disc-content">
              <h4>"Move-in ready" vs. disclosed repair history</h4>
              <p>Rental ad pitched a turnkey home; disclosure lists repairs or ongoing issues. These cannot both be true at once. Ask the listing agent — in writing — which representation is the operative one as of the contract date.</p>
            </div>
          </li>
          <li>
            <div class="disc-num">2</div>
            <div class="disc-content">
              <h4>Condition of roof, foundation, and envelope</h4>
              <p>Any photo or copy in the rental ad that showed or implied a sound envelope must be squared against whatever the disclosure flags. If the disclosure flags water intrusion, prior leaks, or stains, that must be put in writing and tied to a contractor's scope of repair already completed, not just "noted."</p>
            </div>
          </li>
          <li>
            <div class="disc-num">3</div>
            <div class="disc-content">
              <h4>Mechanical systems — HVAC, plumbing, electrical</h4>
              <p>Rental ads typically assert "all systems functioning." Disclosures often mark items "unknown" or "as-is." Get the age, last service date, and any known fault for each — HVAC units, water heater, main panel, plumbing supply lines.</p>
            </div>
          </li>
          <li>
            <div class="disc-num">4</div>
            <div class="disc-content">
              <h4>Tenant-reported issues during the rental period</h4>
              <p>If the property was rented, any complaint the tenant submitted is the seller's actual knowledge. Ask for the maintenance/work order log for the full rental tenancy. An omitted tenant complaint is the clearest form of disclosure failure.</p>
            </div>
          </li>
          <li>
            <div class="disc-num">5</div>
            <div class="disc-content">
              <h4>Finishes, fixtures, and included personal property</h4>
              <p>If the ad promised included appliances, fixtures, or upgrades and the disclosure (or contract exhibits) list them as excluded or "as-is," that gap needs to be captured as a written addendum, not a handshake.</p>
            </div>
          </li>
          <li>
            <div class="disc-num">6</div>
            <div class="disc-content">
              <h4>Photos vs. current state</h4>
              <p>Listing photos may be months or years old. Any disclosed damage occurring after the photos were taken must be re-photographed today and attached to the file.</p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="nu-section-title"><span class="first">Action.</span> <span class="rest">What to do, in order</span></h2>
        <div class="section-divider"></div>
        <ul class="action-list">
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">1</div>
              <div class="nu-badge-text">
                <strong>Preserve the rental listing</strong>
                <span>Screenshot and PDF-archive the full rental advertisement today — every page, every photo, every bullet. Listings get scrubbed the moment a dispute starts. Save to the deal folder before doing anything else.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">2</div>
              <div class="nu-badge-text">
                <strong>Pull the operative seller's disclosure</strong>
                <span>Confirm which version of the disclosure form is controlling (initial delivery vs. any revised/addended copy). Attach a clean PDF to the same deal folder.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">3</div>
              <div class="nu-badge-text">
                <strong>Build a one-page side-by-side</strong>
                <span>Use the comparison grid in this brief as the template. One line per claim, listing on the left, disclosure on the right, flag any conflict. Do not leave a single line blank — "not mentioned" is itself a disclosure answer.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">4</div>
              <div class="nu-badge-text">
                <strong>Send written request for reconciliation to listing agent</strong>
                <span>Email — not verbal. Identify each conflict by line number. Ask the seller to either (a) amend the disclosure, (b) retract the ad representation, or (c) provide evidence that reconciles the two. Keep Aaron's voice: direct, warm, not apologetic. "Name —" greeting, em dash, "Sincerely, Aaron C. Norris" close.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">5</div>
              <div class="nu-badge-text">
                <strong>Loop in closing counsel before responding</strong>
                <span>Before accepting any verbal "it's fine," route the side-by-side and the listing PDF through Aaron's real estate attorney for a 15-minute read. This is what counsel is for — do not close over a disclosure gap on a handshake.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">6</div>
              <div class="nu-badge-text">
                <strong>Condition further inspection on resolution</strong>
                <span>Hold the inspection-period clock. If the seller will not reconcile in writing within the inspection window, formally extend the period or exercise the inspection objection right. Do not let a contingency expire while the discrepancy is unresolved.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="nu-badge">
              <div class="nu-badge-num">7</div>
              <div class="nu-badge-text">
                <strong>Document every response in the deal file</strong>
                <span>Every email, every revised form, every contractor scope — one folder, dated. If this ever goes sideways after closing, the paper trail is the whole case.</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="nu-section-title"><span class="first">Risk.</span> <span class="rest">What happens if the gap is ignored</span></h2>
        <div class="section-divider"></div>
        <div class="risk-grid">
          <div class="risk-card">
            <h4>Post-closing repair exposure</h4>
            <p>Whatever the rental ad promised but the disclosure didn't confirm becomes Aaron's cost the day after closing. Roof, HVAC, water intrusion — any one of these can be a five-figure fix.</p>
            <span class="risk-level high">High</span>
          </div>
          <div class="risk-card">
            <h4>Misrepresentation / fraud claim against seller</h4>
            <p>A documented contradiction between a public advertisement and a signed disclosure is the textbook fact pattern for a misrepresentation action. That path is available to the buyer only if the contradiction is preserved in writing before closing.</p>
            <span class="risk-level med">Medium — depends on preservation</span>
          </div>
          <div class="risk-card">
            <h4>Financing and insurance surprises</h4>
            <p>Undisclosed water intrusion or roof history, if discovered in an appraisal or insurance inspection, can re-price the loan, re-price the policy, or kill the deal after earnest money is non-refundable.</p>
            <span class="risk-level med">Medium</span>
          </div>
          <div class="risk-card">
            <h4>Walk-away leverage lost</h4>
            <p>During the inspection period, the buyer holds leverage. After the inspection period closes without the gap documented, that leverage is gone. The cost of silence for two weeks is the entire negotiating position.</p>
            <span class="risk-level high">High — time-sensitive</span>
          </div>
          <div class="risk-card">
            <h4>Title and lender acceptance</h4>
            <p>If the discrepancy touches anything recorded (permitted additions, survey, easements), the title company may require a separate endorsement or decline. Better to learn that now than at the closing table.</p>
            <span class="risk-level low">Lower — but check</span>
          </div>
          <div class="risk-card">
            <h4>Reputational &amp; personal-principle cost</h4>
            <p>Aaron's stated rule is honesty over everything. Proceeding through a known contradiction — even a favorable one — isn't consistent with that rule. Fix it in writing or walk. Both are acceptable. Quietly proceeding is not.</p>
            <span class="risk-level high">Principle-level</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title"><span class="first">Evidence.</span> <span class="rest">What to collect and keep on file</span></h2>
        <div class="section-divider"></div>
        <div class="evidence">
          <ol>
            <li><strong>Rental listing PDF</strong> — full ad, all photos, captured today with timestamp.</li>
            <li><strong>Listing platform screenshots</strong> — Zillow / Realtor.com / property management site — whichever carried the ad. Capture URL and date in the screenshot.</li>
            <li><strong>Seller's property disclosure</strong> — executed original plus any revisions.</li>
            <li><strong>Tenant maintenance/work order history</strong> — every ticket for the full rental period, requested in writing from the seller or property manager.</li>
            <li><strong>Contractor invoices for repairs referenced in the disclosure</strong> — scope, date, amount, warranty.</li>
            <li><strong>Any email thread between Aaron and the listing agent or seller's counsel</strong> — organized by date, both sent and received.</li>
            <li><strong>Independent inspection report</strong> — issued by Aaron's inspector, not the seller's, with photos keyed to each disclosed or advertised item.</li>
            <li><strong>This side-by-side brief and any updated version of it</strong> — retain every revision, do not overwrite.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 class="nu-section-title"><span class="first">Decision.</span> <span class="rest">The three ways this ends</span></h2>
        <div class="section-divider"></div>
        <div class="risk-grid">
          <div class="risk-card" style="border-top-color: #148f77;">
            <h4>A · Seller reconciles in writing</h4>
            <p>Disclosure amended, repair receipts produced, ad claims either supported or withdrawn. Aaron proceeds with a clean file and, where warranted, a price concession to match any disclosed defect. Best case.</p>
          </div>
          <div class="risk-card" style="border-top-color: var(--nu-warn-amber);">
            <h4>B · Seller offers credit, keeps ambiguity</h4>
            <p>Seller won't amend but offers a repair credit. Acceptable only if the credit is sized to the worst-case reading of the gap and counsel signs off. Get the release language tight — no blanket "as-is" that waives fraud claims.</p>
          </div>
          <div class="risk-card" style="border-top-color: var(--nu-alert-red);">
            <h4>C · Seller refuses to reconcile</h4>
            <p>Terminate within the inspection period, recover earnest money, preserve all documentation for one year minimum. A property Aaron can't close cleanly is a property Aaron doesn't close. Walk.</p>
          </div>
        </div>

        <div class="cta-row">
          <a class="nu-btn-primary" href="mailto:acnorris@norrisutilities.com?subject=Rental%20vs.%20Disclosure%20Side-by-Side%20—%20Ready%20for%20Review">Mark Ready for Aaron's Review</a>
          <a class="nu-btn-secondary" href="tel:2055001343">Call Aaron — 205-500-1343</a>
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