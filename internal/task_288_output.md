<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Review — Rental vs. For-Sale Listing — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');

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
      --nu-alert-red: #C41E3A;
      --nu-warn-amber: #D97706;
      --nu-ok-green: #047857;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -20%;
      width: 80%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.20) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
    }
    .nu-logo-text {
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      margin-top: 22px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 2px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%;
      aspect-ratio: 1;
      max-width: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    /* ══ DOC HEADER ══ */
    .doc-title {
      font-weight: 900;
      font-size: 2.15rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .doc-title .nu-accent { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: #555;
      font-weight: 400;
      margin-bottom: 24px;
    }
    .doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 28px;
      padding: 14px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 2px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }
    .doc-meta span strong { color: var(--nu-navy); font-weight: 700; margin-right: 4px; }

    /* ══ STATUS BANNER ══ */
    .status-banner {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 20px 24px;
      background: linear-gradient(90deg, rgba(217,119,6,0.08) 0%, rgba(217,119,6,0.02) 100%);
      border: 1px solid rgba(217,119,6,0.3);
      border-left: 5px solid var(--nu-warn-amber);
      border-radius: 4px;
      margin-bottom: 44px;
    }
    .status-banner .icon {
      flex-shrink: 0;
      width: 42px; height: 42px;
      background: var(--nu-warn-amber);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.4rem;
    }
    .status-banner h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-warn-amber);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .status-banner p { color: var(--nu-dark-text); font-size: 0.95rem; }

    /* ══ SECTION HEADERS ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 60px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }
    .nu-section > p {
      margin-bottom: 14px;
      color: var(--nu-body-text);
    }

    /* ══ COMPARISON TABLE ══ */
    .compare-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 18px;
    }
    .compare-col {
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      background: var(--nu-white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .compare-col-header {
      padding: 14px 20px;
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .compare-col-header.rental { background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue) 100%); }
    .compare-col-header.forsale { background: linear-gradient(135deg, #064663 0%, var(--nu-cyan) 100%); color: var(--nu-navy); }
    .compare-col-header .sub {
      display: block;
      font-weight: 400;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      opacity: 0.85;
      margin-top: 2px;
      text-transform: none;
    }
    .compare-col-body { padding: 6px 0; }
    .compare-col-body dl {
      display: grid;
      grid-template-columns: 140px 1fr;
      font-size: 0.9rem;
    }
    .compare-col-body dt {
      padding: 10px 16px;
      font-weight: 700;
      color: #5a5a70;
      border-top: 1px solid var(--nu-medium-gray);
      background: var(--nu-light-gray);
    }
    .compare-col-body dd {
      padding: 10px 16px;
      color: var(--nu-dark-text);
      border-top: 1px solid var(--nu-medium-gray);
    }
    .compare-col-body dt:first-of-type,
    .compare-col-body dd:first-of-type { border-top: none; }
    .cell-flag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 3px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-left: 6px;
      vertical-align: middle;
    }
    .flag-diff { background: rgba(196,30,58,0.12); color: var(--nu-alert-red); }
    .flag-match { background: rgba(4,120,87,0.12); color: var(--nu-ok-green); }

    /* ══ DISCREPANCY TABLE ══ */
    .discrepancy-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      font-size: 0.9rem;
    }
    .discrepancy-table thead th {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 14px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .discrepancy-table tbody td {
      padding: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .discrepancy-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .discrepancy-table tbody td strong { color: var(--nu-navy); }
    .sev-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .sev-high { background: rgba(196,30,58,0.12); color: var(--nu-alert-red); }
    .sev-med { background: rgba(217,119,6,0.12); color: var(--nu-warn-amber); }
    .sev-low { background: rgba(4,120,87,0.12); color: var(--nu-ok-green); }

    /* ══ RISK CARDS ══ */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
    }
    .risk-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .risk-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    }
    .risk-card.high { border-top-color: var(--nu-alert-red); }
    .risk-card.med { border-top-color: var(--nu-warn-amber); }
    .risk-card.low { border-top-color: var(--nu-ok-green); }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p { font-size: 0.9rem; color: var(--nu-body-text); }

    /* ══ ACTION CHEVRONS ══ */
    .action-list { list-style: none; margin-bottom: 8px; }
    .action-list li {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      margin-bottom: 10px;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.01em;
    }
    .action-list li .num {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
    }
    .action-list li span.owner {
      margin-left: auto;
      padding-left: 14px;
      font-weight: 400;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      white-space: nowrap;
    }

    /* ══ DOCS CHECKLIST ══ */
    .docs-checklist {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 22px 26px;
      border: 1px solid var(--nu-medium-gray);
    }
    .docs-checklist ul { list-style: none; }
    .docs-checklist li {
      padding: 10px 0;
      border-bottom: 1px dashed #d4d4db;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 0.93rem;
    }
    .docs-checklist li:last-child { border-bottom: none; }
    .docs-checklist li::before {
      content: '';
      flex-shrink: 0;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-top: 2px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.85;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.05em;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 820px) {
      .compare-grid { grid-template-columns: 1fr; }
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.55em; }
      .nu-tagline { font-size: 1rem; }
      .doc-title { font-size: 1.6rem; }
      .nu-container { padding: 40px 20px 56px; }
      .discrepancy-table { font-size: 0.82rem; }
      .discrepancy-table thead th, .discrepancy-table tbody td { padding: 10px; }
      .action-list li { clip-path: none; border-radius: 6px; padding: 14px 18px; }
      .compare-col-body dl { grid-template-columns: 110px 1fr; font-size: 0.85rem; }
    }

    @media print {
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .risk-card, .compare-col, .discrepancy-table { box-shadow: none; }
      .action-list li { clip-path: none; border-radius: 4px; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
    <div class="nu-doc-label">Internal Review Memo</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="doc-title">Disclosure Discrepancy Review — <span class="nu-accent">Rental vs. For-Sale Listing</span></h1>
      <p class="doc-subtitle">Side-by-side audit of disclosed property facts, material conditions, and representation language across both listings — with action items before we commit to purchase or negotiation posture.</p>

      <div class="doc-meta">
        <span><strong>Document:</strong> Disclosure-Review-001</span>
        <span><strong>Prepared:</strong> 2026-04-23</span>
        <span><strong>Owner:</strong> Aaron C. Norris</span>
        <span><strong>Classification:</strong> Internal / Pre-Decision</span>
        <span><strong>Status:</strong> Open — Action Required</span>
      </div>

      <!-- STATUS BANNER -->
      <div class="status-banner">
        <div class="icon">!</div>
        <div>
          <h3>Action Required Before Moving Forward</h3>
          <p>Representations made to rental tenants do not fully match the disclosures now being made to prospective buyers on the for-sale listing. Do not submit, respond to, or counter on any offer until each line item below is reconciled, documented, and confirmed in writing by the listing party.</p>
        </div>
      </div>

      <!-- SECTION 1 — OVERVIEW -->
      <section class="nu-section">
        <h2 class="nu-section-title">Purpose <span>of this Review</span></h2>
        <div class="nu-section-rule"></div>
        <p>This memo captures the specific points where the property's rental-era marketing and landlord disclosures diverge from the current for-sale MLS listing, seller property disclosure, and associated marketing materials. The goal is not to assign fault — it is to make sure we walk into the transaction with a complete, consistent, and defensible factual record before price, terms, or concessions are negotiated.</p>
        <p>Discrepancies in listed square footage, year of improvements, included fixtures, and known condition items can directly affect valuation, insurability, appraisal risk, and post-closing exposure. Every item flagged below should resolve into one of three outcomes: <strong>(a)</strong> corrected disclosure in writing, <strong>(b)</strong> price or credit adjustment, or <strong>(c)</strong> walk.</p>
      </section>

      <!-- SECTION 2 — SIDE BY SIDE -->
      <section class="nu-section">
        <h2 class="nu-section-title">Side-by-Side <span>Representations</span></h2>
        <div class="nu-section-rule"></div>
        <p>The following comparison reflects representations as they currently appear in the rental listing archive and in the active for-sale listing package. Cells flagged <em>DIFF</em> need a written reconciliation from the listing party.</p>

        <div class="compare-grid">

          <!-- RENTAL COL -->
          <div class="compare-col">
            <div class="compare-col-header rental">
              Rental Listing
              <span class="sub">As represented to tenants</span>
            </div>
            <div class="compare-col-body">
              <dl>
                <dt>Living Area</dt>
                <dd>Advertised square footage used in rent calculation <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Year Built</dt>
                <dd>Original structure year as listed in rental marketing <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Renovation Year</dt>
                <dd>"Recently renovated" language, no specific year <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Roof</dt>
                <dd>Not specifically disclosed to tenants <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>HVAC</dt>
                <dd>Described as "central heat &amp; air" — age not stated</dd>

                <dt>Appliances</dt>
                <dd>Refrigerator, range, dishwasher, microwave included with tenancy <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Water</dt>
                <dd>Public / municipal — tenant paid</dd>

                <dt>Basement / Crawl</dt>
                <dd>No known moisture issue disclosed to tenants <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Pool / Outbuildings</dt>
                <dd>Pool use permitted, "as-is" — no formal inspection shared</dd>

                <dt>Known Repairs</dt>
                <dd>Tenant-reported items logged in property manager notes <span class="cell-flag flag-diff">DIFF</span></dd>
              </dl>
            </div>
          </div>

          <!-- FOR-SALE COL -->
          <div class="compare-col">
            <div class="compare-col-header forsale">
              For-Sale Listing
              <span class="sub">As represented to buyers</span>
            </div>
            <div class="compare-col-body">
              <dl>
                <dt>Living Area</dt>
                <dd>MLS square footage figure — larger than rental number <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Year Built</dt>
                <dd>Original structure year on MLS — earlier than rental figure <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Renovation Year</dt>
                <dd>Specific renovation year cited in marketing <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Roof</dt>
                <dd>"New roof" claim in marketing; age not in seller disclosure <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>HVAC</dt>
                <dd>Listed age provided on seller disclosure form</dd>

                <dt>Appliances</dt>
                <dd>MLS "conveys with sale" list is shorter than rental inventory <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Water</dt>
                <dd>Public / municipal <span class="cell-flag flag-match">MATCH</span></dd>

                <dt>Basement / Crawl</dt>
                <dd>Seller disclosure notes prior moisture remediation <span class="cell-flag flag-diff">DIFF</span></dd>

                <dt>Pool / Outbuildings</dt>
                <dd>Pool "in working order" — no service records provided</dd>

                <dt>Known Repairs</dt>
                <dd>Seller disclosure omits items from rental repair log <span class="cell-flag flag-diff">DIFF</span></dd>
              </dl>
            </div>
          </div>

        </div>
      </section>

      <!-- SECTION 3 — DISCREPANCY DETAIL -->
      <section class="nu-section">
        <h2 class="nu-section-title">Discrepancy <span>Detail &amp; Severity</span></h2>
        <div class="nu-section-rule"></div>
        <p>Each item below names the conflict, why it matters, and the severity we are assigning internally. Severity drives whether the item is a price lever, a diligence request, or a deal-killer if left unresolved.</p>

        <table class="discrepancy-table">
          <thead>
            <tr>
              <th style="width:18%;">Item</th>
              <th style="width:42%;">Nature of the Discrepancy</th>
              <th style="width:28%;">Why It Matters</th>
              <th style="width:12%;">Severity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Square Footage</strong></td>
              <td>Rental marketing cited one heated-living-area figure; MLS cites a larger number. No appraisal or measurement source referenced on the for-sale side.</td>
              <td>Direct valuation impact. Price per square foot is the primary comp metric and affects appraisal.</td>
              <td><span class="sev-pill sev-high">High</span></td>
            </tr>
            <tr>
              <td><strong>Year Built / Renovation</strong></td>
              <td>Rental listing used one original-build year and generic "recently renovated" language. For-sale listing shows an earlier original year and a specific renovation year.</td>
              <td>Affects insurance underwriting, lender age rules, and comp selection.</td>
              <td><span class="sev-pill sev-high">High</span></td>
            </tr>
            <tr>
              <td><strong>Roof Age / Condition</strong></td>
              <td>"New roof" stated in MLS marketing, but the seller property disclosure does not specify install year or provide invoice / warranty.</td>
              <td>Insurance binding and post-closing leak exposure. Warranty transfer must be verified.</td>
              <td><span class="sev-pill sev-high">High</span></td>
            </tr>
            <tr>
              <td><strong>Moisture / Crawl or Basement</strong></td>
              <td>No moisture issue was disclosed to tenants. For-sale disclosure references prior remediation without scope or contractor.</td>
              <td>Material condition. Undisclosed-to-tenant history may also create a tenant-era claims risk for the current owner.</td>
              <td><span class="sev-pill sev-high">High</span></td>
            </tr>
            <tr>
              <td><strong>Appliances Conveying</strong></td>
              <td>Rental inventory included appliances the MLS "conveys with sale" list now excludes.</td>
              <td>Minor dollar impact but a trust signal. Force written clarification into the contract.</td>
              <td><span class="sev-pill sev-med">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Known Repair Log</strong></td>
              <td>Property manager maintained a tenant-reported repair log. Items on that log do not all appear on the seller disclosure.</td>
              <td>Seller disclosure obligations typically extend to known material defects. Omissions are the highest post-closing litigation driver.</td>
              <td><span class="sev-pill sev-high">High</span></td>
            </tr>
            <tr>
              <td><strong>Pool Service History</strong></td>
              <td>Rental allowed pool use "as-is"; for-sale claims "in working order" with no service records, no equipment ages, no leak history.</td>
              <td>Pool equipment is a known high-dollar post-closing surprise category.</td>
              <td><span class="sev-pill sev-med">Medium</span></td>
            </tr>
            <tr>
              <td><strong>Utilities / Municipal Service</strong></td>
              <td>Both listings describe public water/sewer consistently.</td>
              <td>No action needed, but include utility verification in diligence checklist.</td>
              <td><span class="sev-pill sev-low">Low</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION 4 — RISK SUMMARY -->
      <section class="nu-section">
        <h2 class="nu-section-title">Risk <span>Summary</span></h2>
        <div class="nu-section-rule"></div>
        <p>These discrepancies cluster into four risk buckets. Each one changes a different part of the deal and needs to be handled before our written offer, not after.</p>

        <div class="risk-grid">
          <div class="risk-card high">
            <h4>Valuation &amp; Appraisal Risk</h4>
            <p>Square footage and year-built conflicts directly change comps. If the appraiser uses the smaller rental-era figures, the loan value drops and the contract price has to follow.</p>
          </div>
          <div class="risk-card high">
            <h4>Disclosure &amp; Litigation Risk</h4>
            <p>Items on the tenant repair log that are absent from the seller disclosure are the classic post-closing lawsuit vector. We want those items either disclosed in writing or formally waived on the record.</p>
          </div>
          <div class="risk-card med">
            <h4>Insurability Risk</h4>
            <p>Roof age, moisture remediation history, and pool equipment drive the binder. Underwriters will ask. Better that we ask first.</p>
          </div>
          <div class="risk-card low">
            <h4>Trust &amp; Negotiation Posture</h4>
            <p>Small inconsistencies (appliance list, generic "renovated" language) are low-dollar but shape how aggressively we should push on price, credits, and contingency language.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 5 — ACTION ITEMS -->
      <section class="nu-section">
        <h2 class="nu-section-title">Action <span>Items</span></h2>
        <div class="nu-section-rule"></div>
        <p>Work these in order. Do not skip ahead to price negotiation until items 1–4 are closed in writing.</p>

        <ol class="action-list">
          <li><span class="num">1</span>Request written reconciliation of square footage, year built, and renovation year, including the measurement or permit source for each figure. <span class="owner">Aaron · Buyer Agent</span></li>
          <li><span class="num">2</span>Request dated roof installation documentation (invoice, permit, or manufacturer warranty with transfer language). <span class="owner">Aaron · Buyer Agent</span></li>
          <li><span class="num">3</span>Request scope, date, and contractor for prior moisture remediation; ask for transferable warranty. <span class="owner">Aaron · Buyer Agent</span></li>
          <li><span class="num">4</span>Obtain property manager's tenant repair log; cross-check each entry against the seller property disclosure. <span class="owner">Aaron</span></li>
          <li><span class="num">5</span>Lock the appliance "conveys with sale" list into the contract exhibit — word-for-word from the rental inventory unless a specific item is removed in writing. <span class="owner">Buyer Agent</span></li>
          <li><span class="num">6</span>Request pool equipment ages, service provider name, and last service invoice. Otherwise treat pool as "unknown" for inspection scoping. <span class="owner">Aaron</span></li>
          <li><span class="num">7</span>Instruct inspector of flagged items so the inspection is targeted (roof, crawl, pool equipment, footprint measurement). <span class="owner">Aaron</span></li>
          <li><span class="num">8</span>Do not execute offer, counter, or price concession until items 1–7 are documented. Any concession without documentation is a concession against an unknown baseline. <span class="owner">Aaron</span></li>
        </ol>
      </section>

      <!-- SECTION 6 — DOCS CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title">Documents <span>to Collect</span></h2>
        <div class="nu-section-rule"></div>
        <p>Everything on this checklist should land in our transaction file before we go firm. If a listing party refuses or cannot produce a given item, that refusal itself goes in the file.</p>

        <div class="docs-checklist">
          <ul>
            <li>Seller Property Disclosure — signed, current, every page initialed</li>
            <li>MLS data sheet — printed and date-stamped on day of offer</li>
            <li>Prior rental marketing sheet — archived copy with square footage and "renovated" language</li>
            <li>Property manager's tenant repair / service-ticket log for full rental period</li>
            <li>Roof installation invoice, permit, and manufacturer warranty transfer documents</li>
            <li>Moisture remediation scope, invoice, contractor license verification, and warranty</li>
            <li>HVAC install / service records — both systems if applicable</li>
            <li>Pool equipment list with ages and last service invoice</li>
            <li>Appraisal or floor-plan measurement source supporting MLS square footage</li>
            <li>Any certificate of occupancy or post-renovation permit sign-off</li>
            <li>Utility account transfer information (water, sewer, power, gas)</li>
            <li>Existing tenant leases, deposits, and tenant rights statement (if any tenancy remains)</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 7 — DECISION FRAME -->
      <section class="nu-section">
        <h2 class="nu-section-title">Decision <span>Frame</span></h2>
        <div class="nu-section-rule"></div>
        <p>Once action items 1–7 are back in writing, the deal falls into one of three outcomes:</p>
        <ul style="margin-left: 22px; margin-bottom: 10px;">
          <li style="margin-bottom: 8px;"><strong style="color: var(--nu-ok-green);">Proceed —</strong> every discrepancy reconciled on paper, MLS and disclosure now agree, no material condition omissions. Negotiate on price and terms normally.</li>
          <li style="margin-bottom: 8px;"><strong style="color: var(--nu-warn-amber);">Proceed with Credit —</strong> a subset of discrepancies resolves with documentation, but some material items (roof age, moisture history, pool equipment) remain open. Price reduction or closing credit must offset residual risk.</li>
          <li><strong style="color: var(--nu-alert-red);">Walk —</strong> seller refuses written reconciliation on any High-severity item, or the repair log conflicts with the disclosure and cannot be explained. Valuation, insurance, and litigation exposure are not worth the property.</li>
        </ul>
        <p>Signed-off outcome goes in this file before any earnest money is committed.</p>
      </section>

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
    <div class="nu-footer-meta">Internal Review Memo · Prepared 2026-04-23 · Classification: Pre-Decision · Do Not Distribute</div>
  </footer>

</body>
</html>