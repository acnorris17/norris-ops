I'll build the action-item page directly — the instructions call for complete HTML output only.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Lifetime Warranty Definition | Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

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
      --nu-alert: #C9242C;
      --nu-warn: #E89A2B;
      --nu-success: #1F8A4C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 64px 40px 96px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 80px);
      z-index: 1;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -40%; right: -15%;
      width: 70%; height: 180%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

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
      letter-spacing: 0.3em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

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
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.035) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .wrap {
      max-width: 1080px;
      margin: 0 auto;
      padding: 48px 36px 72px;
    }

    /* ACTION BAR */
    .action-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 28px;
      border-radius: 8px;
      margin-bottom: 32px;
      box-shadow: 0 4px 18px rgba(0,0,51,0.18);
    }
    .action-bar .tag {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      padding: 5px 10px;
      border-radius: 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .action-bar .priority {
      background: var(--nu-warn);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      padding: 5px 10px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .action-bar .ref {
      margin-left: auto;
      font-size: 0.82rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      letter-spacing: 0.04em;
    }

    /* TITLE BLOCK */
    .title-block { margin-bottom: 36px; }
    h1.page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    h1.page-title .accent { color: var(--nu-blue); }
    .subtitle {
      font-size: 1.08rem;
      color: var(--nu-body-text);
      font-weight: 400;
      max-width: 780px;
    }

    /* SECTIONS */
    section.block {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 22px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    section.block.highlight {
      border-left: 4px solid var(--nu-blue);
    }
    section.block.warn {
      border-left: 4px solid var(--nu-warn);
      background: #fff9ee;
    }
    section.block.success {
      border-left: 4px solid var(--nu-success);
      background: #f3fbf5;
    }

    h2.section-title {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 14px;
      color: var(--nu-dark-text);
    }
    h2.section-title .accent { color: var(--nu-blue); }

    p { margin-bottom: 14px; }
    p:last-child { margin-bottom: 0; }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-top: 18px;
    }
    .meta-item {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 12px 16px;
    }
    .meta-item .label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }
    .meta-item .value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* QUESTIONS LIST */
    ol.questions {
      list-style: none;
      counter-reset: q;
      margin-top: 8px;
    }
    ol.questions > li {
      counter-increment: q;
      position: relative;
      padding: 14px 16px 14px 54px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 3px solid var(--nu-cyan);
    }
    ol.questions > li::before {
      content: counter(q);
      position: absolute;
      left: 14px; top: 14px;
      width: 28px; height: 28px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.85rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ol.questions > li strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    ol.questions > li p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      margin: 0;
    }

    /* CHECKLIST */
    ul.checklist {
      list-style: none;
      margin-top: 10px;
    }
    ul.checklist li {
      position: relative;
      padding: 10px 0 10px 34px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    ul.checklist li:last-child { border-bottom: none; }
    ul.checklist li::before {
      content: '';
      position: absolute;
      left: 0; top: 13px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    ul.checklist li strong {
      color: var(--nu-dark-text);
    }

    /* TERM TABLE */
    .term-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 0.95rem;
    }
    .term-table th,
    .term-table td {
      text-align: left;
      padding: 12px 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .term-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.04em;
      font-size: 0.78rem;
      text-transform: uppercase;
    }
    .term-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .term-table td strong { color: var(--nu-blue); }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04), rgba(6,208,255,0.06));
      border: 1px solid rgba(0,0,255,0.12);
      border-radius: 8px;
      padding: 18px 22px;
      margin-top: 16px;
      font-size: 0.96rem;
    }
    .callout strong { color: var(--nu-blue); }

    /* CONTACT CARD */
    .contact-card {
      display: grid;
      grid-template-columns: 1fr;
      gap: 6px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 18px 22px;
      margin-top: 14px;
    }
    .contact-card .row {
      display: flex;
      gap: 12px;
      font-size: 0.95rem;
    }
    .contact-card .row .k {
      font-weight: 900;
      color: var(--nu-blue);
      min-width: 120px;
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      padding-top: 2px;
    }
    .contact-card .row .v { color: var(--nu-dark-text); font-weight: 700; }

    /* NEXT STEPS */
    .steps {
      counter-reset: step;
      margin-top: 8px;
    }
    .step {
      counter-increment: step;
      position: relative;
      padding: 14px 16px 14px 58px;
      margin-bottom: 10px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
    }
    .step::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 14px;
      width: 32px; height: 32px;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 0.95rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .step strong {
      color: var(--nu-dark-text);
      display: block;
      margin-bottom: 4px;
    }
    .step .due {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.08);
      padding: 3px 8px;
      border-radius: 3px;
      margin-left: 8px;
      text-transform: uppercase;
      vertical-align: middle;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 32px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 42px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      h1.page-title { font-size: 1.7rem; }
      .wrap { padding: 32px 20px 56px; }
      section.block { padding: 22px 20px; }
      .action-bar { flex-wrap: wrap; gap: 10px; padding: 14px 16px; }
      .action-bar .ref { margin-left: 0; width: 100%; }
      .contact-card .row { flex-direction: column; gap: 2px; }
      .contact-card .row .k { min-width: unset; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      section.block { box-shadow: none; page-break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="wrap">

      <!-- ACTION BAR -->
      <div class="action-bar">
        <span class="tag">Action Item</span>
        <span class="priority">Priority: Medium</span>
        <span class="ref">Source: reMarkable Journal · Captured 2026-04-16 · Owner: Aaron C. Norris</span>
      </div>

      <!-- TITLE -->
      <div class="title-block">
        <h1 class="page-title"><span class="accent">H2O Waterproofing</span> — Define "Lifetime Warranty" Coverage</h1>
        <p class="subtitle">
          Action item from the reMarkable journal: obtain a written definition from H2O Waterproofing of exactly what their
          "lifetime warranty" covers on the waterproof coating applied to FlexPro Armor bucket covers. This is required to
          back the warranty language Norris Utilities® publishes to customers and resellers.
        </p>
      </div>

      <!-- WHY THIS MATTERS -->
      <section class="block highlight">
        <h2 class="section-title"><span class="accent">Why</span> This Matters</h2>
        <p>
          The coating applied by H2O Waterproofing is the front line of the FlexPro Armor bucket cover against
          water intrusion, UV degradation, and abrasion. Customers — and especially dealers and distributors — are asking
          pointed questions about the lifetime-warranty claim on the cover's waterproofing. Before Norris Utilities®
          promotes that claim any further, we need H2O's written definition of its scope, limits, and remedy.
        </p>
        <p>
          Goal: a one-page warranty statement from H2O Waterproofing on their letterhead that we can attach to our
          FlexPro Armor line card, dealer packet, and customer product registration kit.
        </p>
        <div class="meta-grid">
          <div class="meta-item"><span class="label">Vendor</span><span class="value">H2O Waterproofing</span></div>
          <div class="meta-item"><span class="label">Applied To</span><span class="value">FlexPro Armor Covers</span></div>
          <div class="meta-item"><span class="label">Target Turnaround</span><span class="value">2026-04-30</span></div>
          <div class="meta-item"><span class="label">Document Needed</span><span class="value">Written Warranty PDF</span></div>
        </div>
      </section>

      <!-- QUESTIONS TO ASK -->
      <section class="block">
        <h2 class="section-title"><span class="accent">Questions</span> to Ask H2O Waterproofing</h2>
        <ol class="questions">
          <li>
            <strong>What does "lifetime" mean?</strong>
            <p>Is "lifetime" the life of the original buyer, the life of the product, or a fixed year count (e.g., 10, 15, 20 years from date of coating)? Put it in writing.</p>
          </li>
          <li>
            <strong>What failure modes are covered?</strong>
            <p>Coating delamination, cracking, blistering, loss of waterproof seal, UV-driven color fade, or seam-area bleed-through — which of these trigger a warranty claim?</p>
          </li>
          <li>
            <strong>What is specifically excluded?</strong>
            <p>Cuts, punctures, abrasion from boom/hardware contact, chemical exposure (hydraulic oil, battery acid, line-clearing herbicides), modifications by end user, improper storage, fire, theft.</p>
          </li>
          <li>
            <strong>What is the remedy?</strong>
            <p>Re-coat, replace the cover, refund, or dollar-credit toward a new unit? Who absorbs freight both ways? Is labor to remove/reinstall covered?</p>
          </li>
          <li>
            <strong>Is the warranty transferable?</strong>
            <p>If an end-user fleet is sold to another utility or contractor, does coverage transfer to the new owner, or does it terminate at resale?</p>
          </li>
          <li>
            <strong>What proof is required for a claim?</strong>
            <p>Purchase date, photos, serial or lot number of the coating batch, return of failed material, field inspection by H2O rep? Need the claim form and intake address.</p>
          </li>
          <li>
            <strong>How is the claim initiated — through H2O directly, or through Norris Utilities®?</strong>
            <p>Confirm whether Norris Utilities® is the customer's first point of contact (preferred) and whether H2O will honor claims routed through us without requiring end-user contact.</p>
          </li>
          <li>
            <strong>What maintenance voids coverage?</strong>
            <p>Cleaning chemicals to avoid, pressure-wash PSI limits, storage temperature bounds, repair procedures the end-user should NOT perform.</p>
          </li>
          <li>
            <strong>Is there a claim cap or deductible?</strong>
            <p>Per-unit cap, annual cap, or any pro-rated reduction over time? Any deductible the end-user pays before H2O performs work?</p>
          </li>
          <li>
            <strong>Will H2O issue a co-branded warranty certificate?</strong>
            <p>Ideal outcome: H2O signs off on a warranty card that Norris Utilities® ships in every FlexPro Armor box so the customer has it on day one.</p>
          </li>
        </ol>
      </section>

      <!-- KEY TERMS TO CAPTURE -->
      <section class="block">
        <h2 class="section-title"><span class="accent">Key Terms</span> to Pin Down in Writing</h2>
        <table class="term-table">
          <thead>
            <tr>
              <th style="width: 32%;">Term</th>
              <th>Why We Need a Written Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Lifetime</strong></td><td>Product-life, original-owner-life, or fixed-year span. Ambiguity here is the whole reason for this action item.</td></tr>
            <tr><td><strong>Covered defect</strong></td><td>Only manufacturing/application defects in the coating, or also field-performance failures under normal utility use?</td></tr>
            <tr><td><strong>Normal use</strong></td><td>Daily lineman environment: bucket contact, hardware wear, weather. Define what "normal" excludes.</td></tr>
            <tr><td><strong>Seam bleed-through</strong></td><td>Covers are sewn — water can track along seams even when the coating is intact. Is this a coating warranty matter or a cover-construction matter?</td></tr>
            <tr><td><strong>Remedy</strong></td><td>Re-coat vs. replace vs. refund. Dollar cap. Freight responsibility. Turnaround window.</td></tr>
            <tr><td><strong>Claim window</strong></td><td>Days from discovery of defect to notification. Don't accept anything tighter than 60 days without pushback.</td></tr>
            <tr><td><strong>Transferability</strong></td><td>Fleet resales happen constantly. We want the warranty to follow the cover, not the original buyer.</td></tr>
            <tr><td><strong>Exclusions list</strong></td><td>Chemical contact, modifications, storage conditions, repair attempts. Every excluded scenario has to be listed — silence is not clarity.</td></tr>
          </tbody>
        </table>
      </section>

      <!-- DELIVERABLES -->
      <section class="block success">
        <h2 class="section-title"><span class="accent">What</span> We Need Back from H2O</h2>
        <ul class="checklist">
          <li><strong>Written warranty document</strong> — PDF on H2O Waterproofing letterhead, signed by an authorized officer.</li>
          <li><strong>Explicit "lifetime" definition</strong> — in plain English, not marketing language.</li>
          <li><strong>Coverage and exclusions</strong> — both sides listed; no ambiguous catch-alls.</li>
          <li><strong>Claim procedure</strong> — step-by-step, including intake email/phone and response-time commitment.</li>
          <li><strong>Remedy and freight terms</strong> — dollar responsibility spelled out.</li>
          <li><strong>Transferability clause</strong> — ideally yes, with a simple registration step.</li>
          <li><strong>Co-branded customer-facing warranty card</strong> — one-page PDF we can ship in every FlexPro Armor box.</li>
          <li><strong>Permission to publish</strong> — written OK to reproduce the warranty on the Norris Utilities® line card and at NorrisUtilities.com.</li>
        </ul>
      </section>

      <!-- RISK IF UNRESOLVED -->
      <section class="block warn">
        <h2 class="section-title"><span class="accent">Risk</span> If Left Undefined</h2>
        <p>
          Promoting a "lifetime warranty" we can't back with a written H2O document exposes Norris Utilities® on three fronts:
        </p>
        <ul class="checklist">
          <li><strong>Customer trust</strong> — a warranty claim we can't fulfill damages the Legacy of Commitment® standard.</li>
          <li><strong>Dealer/distributor confidence</strong> — Tier-1 channel partners require documented warranty backing before shelving the product.</li>
          <li><strong>Legal exposure</strong> — an undefined lifetime claim invites a deceptive-warranty challenge under state consumer-protection statutes (Magnuson-Moss is federal baseline).</li>
        </ul>
        <div class="callout">
          <strong>Working rule until resolved:</strong> any outbound FlexPro Armor quote, line card, or product sheet that references a "lifetime" waterproofing warranty must be held or rephrased to the conservative "covered by manufacturer's waterproofing warranty — full terms on request" pending the H2O document.
        </div>
      </section>

      <!-- CONTACT -->
      <section class="block">
        <h2 class="section-title"><span class="accent">H2O</span> Waterproofing — Outreach</h2>
        <p>Confirm correct contact and escalation path before the call. Document who we spoke with and on what date.</p>
        <div class="contact-card">
          <div class="row"><span class="k">Vendor</span><span class="v">H2O Waterproofing</span></div>
          <div class="row"><span class="k">Primary Contact</span><span class="v">Confirm current account rep on first call</span></div>
          <div class="row"><span class="k">Our Contact</span><span class="v">Aaron C. Norris — 205-500-1343 · acnorris@norrisutilities.com</span></div>
          <div class="row"><span class="k">CC on Email</span><span class="v">Caroline Butler (CB) — admin follow-through and document filing</span></div>
          <div class="row"><span class="k">Preferred Outcome</span><span class="v">Signed warranty PDF + co-branded customer warranty card</span></div>
        </div>
      </section>

      <!-- NEXT STEPS -->
      <section class="block highlight">
        <h2 class="section-title"><span class="accent">Next</span> Steps</h2>
        <div class="steps">
          <div class="step">
            <strong>Draft outreach email to H2O Waterproofing<span class="due">Due 2026-04-17</span></strong>
            Attach this action-item page as the request scope. Ask for a written warranty document and a 15-minute phone call to walk through terms.
          </div>
          <div class="step">
            <strong>Phone call with H2O account rep<span class="due">Due 2026-04-22</span></strong>
            Run the 10 questions above. Take notes verbatim. Confirm written document timeline.
          </div>
          <div class="step">
            <strong>Receive and review written warranty<span class="due">Due 2026-04-30</span></strong>
            Aaron reviews personally before any customer-facing publication. Flag any vague language and request revision.
          </div>
          <div class="step">
            <strong>Update FlexPro Armor collateral<span class="due">After receipt</span></strong>
            Line card, dealer packet, product-registration card, and NorrisUtilities.com all updated with the confirmed warranty text. CB handles the update roll-out after Aaron signs off.
          </div>
          <div class="step">
            <strong>File in vendor warranty binder<span class="due">Ongoing</span></strong>
            Store signed H2O warranty PDF with Samson Rope and Boss Products warranty documents in the vendor-warranty folder. Attach to FlexPro Armor SKU records (NU-BC-2851, NU-BC-2834, NU-BC-2851-C, NU-BC-2834-C).
          </div>
        </div>
      </section>

      <!-- STATUS -->
      <section class="block">
        <h2 class="section-title"><span class="accent">Status</span> Tracker</h2>
        <div class="meta-grid">
          <div class="meta-item"><span class="label">Opened</span><span class="value">2026-04-16</span></div>
          <div class="meta-item"><span class="label">Owner</span><span class="value">Aaron C. Norris</span></div>
          <div class="meta-item"><span class="label">Supporting</span><span class="value">Caroline Butler (CB)</span></div>
          <div class="meta-item"><span class="label">Target Close</span><span class="value">2026-04-30</span></div>
          <div class="meta-item"><span class="label">Current State</span><span class="value">Outreach pending</span></div>
          <div class="meta-item"><span class="label">Source</span><span class="value">reMarkable Journal</span></div>
        </div>
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
  </footer>

</body>
</html>