<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Remove Pricing from Boss Online Store — Norris Utilities®</title>
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
      --nu-red: #C92B2B;
      --nu-amber: #E89A1C;
      --nu-green: #1E8E3E;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066EE 60%, #00AAFF 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
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
      margin: 0 auto 18px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.75em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.04em;
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

    /* DOCUMENT STRIP */
    .doc-strip {
      background: var(--nu-white);
      border-bottom: 1px solid var(--nu-medium-gray);
      padding: 20px 40px;
    }
    .doc-strip-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .doc-id {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      font-weight: 700;
      text-transform: uppercase;
    }
    .doc-meta {
      font-size: 0.85rem;
      color: var(--nu-body-text);
    }
    .doc-meta strong { color: var(--nu-dark-text); }
    .status-pill {
      display: inline-block;
      background: var(--nu-amber);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      padding: 5px 14px;
      border-radius: 20px;
      text-transform: uppercase;
    }

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-light-gray);
      padding: 50px 40px 80px;
    }
    .nu-container {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }

    /* TITLE BLOCK */
    .title-block {
      margin-bottom: 36px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .breadcrumb {
      font-size: 0.8rem;
      color: var(--nu-blue);
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .title-block h1 {
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin-bottom: 14px;
    }
    .title-block h1 .accent { color: var(--nu-blue); }
    .lede {
      font-size: 1.08rem;
      color: var(--nu-body-text);
      line-height: 1.7;
      max-width: 820px;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 40px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title .accent { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 30px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 20px;
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card p:last-child { margin-bottom: 0; }

    /* WHY IT MATTERS GRID */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .why-item {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px;
      border-left: 5px solid var(--nu-blue);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .why-item h4 {
      font-weight: 900;
      font-size: 1.02rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .why-item p {
      font-size: 0.94rem;
      color: var(--nu-body-text);
      margin: 0;
    }
    .why-item.red { border-left-color: var(--nu-red); }
    .why-item.amber { border-left-color: var(--nu-amber); }
    .why-item.green { border-left-color: var(--nu-green); }

    /* STEP LIST */
    .step-list {
      list-style: none;
      counter-reset: step;
    }
    .step-list li {
      counter-increment: step;
      background: var(--nu-white);
      border-radius: 10px;
      padding: 22px 26px 22px 78px;
      margin-bottom: 14px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      position: relative;
    }
    .step-list li::before {
      content: counter(step);
      position: absolute;
      left: 20px;
      top: 22px;
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.15rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .step-list h4 {
      font-weight: 900;
      font-size: 1.08rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .step-list p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin: 0;
    }
    .step-list .owner {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 10px;
      padding: 3px 10px;
      background: rgba(0,0,255,0.08);
      border-radius: 4px;
    }

    /* EMAIL DRAFT */
    .email-draft {
      background: var(--nu-white);
      border: 2px solid var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
    }
    .email-header {
      background: var(--nu-light-gray);
      padding: 16px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
    }
    .email-header .row {
      margin-bottom: 4px;
      display: flex;
      gap: 8px;
    }
    .email-header .label {
      font-weight: 700;
      color: var(--nu-dark-text);
      min-width: 70px;
    }
    .email-header .value { color: var(--nu-body-text); }
    .email-body {
      padding: 26px 30px;
      font-size: 0.98rem;
      color: var(--nu-body-text);
      line-height: 1.75;
    }
    .email-body p { margin-bottom: 14px; padding-left: 24px; }
    .email-body p.greeting { padding-left: 0; font-weight: 700; color: var(--nu-dark-text); }
    .email-body p.close { padding-left: 0; }
    .email-body p.sign { padding-left: 24px; font-weight: 700; color: var(--nu-dark-text); margin-top: 4px; margin-bottom: 0; }
    .email-body ul {
      list-style: none;
      margin: 14px 0 14px 24px;
      padding: 0;
    }
    .email-body ul li {
      padding-left: 20px;
      position: relative;
      margin-bottom: 6px;
    }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* OUTCOMES */
    .outcome-box {
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0040DD 60%, var(--nu-cyan) 140%);
      color: var(--nu-white);
      padding: 32px 36px;
      border-radius: 12px;
      box-shadow: 0 6px 24px rgba(0,0,255,0.2);
    }
    .outcome-box h3 {
      font-weight: 900;
      font-size: 1.3rem;
      margin-bottom: 16px;
      letter-spacing: 0.01em;
    }
    .outcome-box ul {
      list-style: none;
      padding: 0;
    }
    .outcome-box ul li {
      padding: 8px 0 8px 30px;
      position: relative;
      font-size: 1rem;
      line-height: 1.6;
    }
    .outcome-box ul li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.2rem;
    }

    /* CONTACT TABLE */
    .contact-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .contact-table th {
      background: var(--nu-dark-text);
      color: var(--nu-white);
      padding: 14px 18px;
      text-align: left;
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .contact-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .contact-table tr:last-child td { border-bottom: none; }
    .contact-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .contact-table .role {
      font-weight: 700;
      color: var(--nu-blue);
    }

    /* CALLOUT */
    .callout {
      background: #FFF8E8;
      border-left: 5px solid var(--nu-amber);
      padding: 20px 24px;
      border-radius: 6px;
      margin-bottom: 20px;
    }
    .callout strong { color: var(--nu-dark-text); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
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
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 64px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-area { padding: 32px 18px 50px; }
      .title-block h1 { font-size: 1.75rem; }
      .step-list li { padding-left: 72px; }
      .doc-strip { padding: 16px 20px; }
      .email-body p { padding-left: 12px; }
      .email-body p.sign { padding-left: 12px; }
    }

    /* PRINT */
    @media print {
      body { background: white; }
      .nu-header, .outcome-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .step-list li { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- DOC STRIP -->
  <div class="doc-strip">
    <div class="doc-strip-inner">
      <div class="doc-id">Internal Action Item · BOSS-STORE-001</div>
      <div class="doc-meta">
        <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
        <strong>Created:</strong> 2026-04-23 &nbsp;|&nbsp;
        <strong>Source:</strong> reMarkable Notebook
      </div>
      <div><span class="status-pill">Open — Action Required</span></div>
    </div>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="title-block">
        <div class="breadcrumb">Dealer Channel · Boss Products · MAP &amp; Pricing Policy</div>
        <h1>Remove <span class="accent">Pricing</span> from the Boss Online Store</h1>
        <p class="lede">
          Boss Products currently displays dealer/customer pricing on their public online store. This undermines Norris Utilities® as the authorized Southeast dealer, exposes our margin structure, and bypasses the quoting relationship Aaron has with each account. This document is the plan of record to get the pricing pulled from the public site and replaced with a <em>"Contact Your Authorized Dealer"</em> flow.
        </p>
      </div>

      <!-- WHY IT MATTERS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Why</span> <span class="rest">This Matters</span></h2>
        <div class="why-grid">
          <div class="why-item red">
            <h4>Dealer Channel Conflict</h4>
            <p>Customers who see Boss's public pricing call us expecting that number. We can't hold margin or protect the quote relationship when the factory publishes to the world.</p>
          </div>
          <div class="why-item amber">
            <h4>Margin Exposure</h4>
            <p>Public pricing lets every competitor (and every customer's procurement team) work backward to our dealer cost. Our equipment margin is already thin at 12–15%.</p>
          </div>
          <div class="why-item">
            <h4>Authorized Dealer Value</h4>
            <p>Norris Utilities® is the Southeast dealer. The value of that territory is diluted every day the public store stays live with prices visible.</p>
          </div>
          <div class="why-item green">
            <h4>Industry Standard</h4>
            <p>Skylift, Bay Shore Systems, and Samson Rope all operate on a "Contact Dealer" or login-gated pricing model. Boss is the outlier.</p>
          </div>
        </div>
      </section>

      <!-- OBJECTIVE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">The</span> <span class="rest">Ask</span></h2>
        <div class="nu-card">
          <h3>What "done" looks like</h3>
          <p>Boss Products removes all customer-visible pricing from bossproductsus.com. Product pages remain with specs, photos, literature, and a clear <strong>"Contact Your Authorized Dealer"</strong> button routing Southeast inquiries to Norris Utilities®. Dealer-only pricing lives behind a login, a published MAP sheet, or a direct-to-Troy quoting path — not on the public web.</p>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Execution</span> <span class="rest">Plan</span></h2>
        <ol class="step-list">
          <li>
            <h4>Phone call with Troy Gongwer — framing</h4>
            <p>Before any email goes out, Aaron calls Troy direct. This is a relationship move, not a complaint. Frame it as: "We need to protect the dealer network, yours and ours — here's what's happening in the field." Get Troy's read on internal appetite before we put anything in writing.</p>
            <span class="owner">Owner: Aaron</span>
          </li>
          <li>
            <h4>Send formal email to Troy &amp; Thayne</h4>
            <p>CC both Troy Gongwer and Thayne Grove per standing rule. Lay out the business case cleanly: channel conflict, margin exposure, dealer value, industry precedent. Propose the "Contact Dealer" flow as the fix. Draft is below — ready to send after the phone call.</p>
            <span class="owner">Owner: Aaron · CC: Troy + Thayne</span>
          </li>
          <li>
            <h4>Propose the technical fix in writing</h4>
            <p>Offer Boss a no-friction path: (a) replace price fields with "Request Quote" CTA that posts to a form, (b) route Southeast zip codes directly to acnorris@norrisutilities.com, (c) keep dealer pricing on a dealer-portal login. Remove friction from their decision.</p>
            <span class="owner">Owner: Aaron</span>
          </li>
          <li>
            <h4>Provide territory zip-code list</h4>
            <p>Norris Utilities® covers 20+ states. Give Boss a clean list of Southeast zip codes / state routing so their form logic can route inquiries automatically. CB can pull this from the existing territory map.</p>
            <span class="owner">Owner: CB — pending Aaron review</span>
          </li>
          <li>
            <h4>Follow up in 7 days if no reply</h4>
            <p>Boss response window standard: 7 days. If no movement, second touch from Aaron. If still no movement, escalate by requesting a brief call with Troy + whoever owns the website at Boss.</p>
            <span class="owner">Owner: Aaron</span>
          </li>
          <li>
            <h4>Verify &amp; document</h4>
            <p>Once pricing is pulled, screenshot the updated product pages, save to <code>~/norris-agent/output/internal/</code>, and log the date of change in the master tracker. Confirm that Southeast form submissions are actually landing in Aaron's inbox with a live test.</p>
            <span class="owner">Owner: Aaron + CB</span>
          </li>
        </ol>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Email</span> <span class="rest">Draft — Ready to Send</span></h2>
        <div class="email-draft">
          <div class="email-header">
            <div class="row"><span class="label">To:</span><span class="value">Troy Gongwer &lt;troy@bossproductsus.com&gt;</span></div>
            <div class="row"><span class="label">Cc:</span><span class="value">Thayne Grove &lt;thayne@bossproductsus.com&gt;</span></div>
            <div class="row"><span class="label">From:</span><span class="value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span></div>
            <div class="row"><span class="label">Subject:</span><span class="value">Public pricing on the Boss online store — dealer channel ask</span></div>
          </div>
          <div class="email-body">
            <p class="greeting">Troy —</p>
            <p>Following up on our call. Putting this in writing so y'all have it in front of you.</p>
            <p>The pricing that's currently live on the Boss online store is creating real friction on our end, and I believe it's costing Boss margin across the whole dealer network, not only here in the Southeast. Three things I'm seeing in the field:</p>
            <ul>
              <li>Customers come to the quote conversation anchored to the web price — we lose the ability to package shipping, freight, and service the way a dealer should.</li>
              <li>Competing dealers and end-user procurement teams are working backward from the public number to estimate dealer cost. That compresses margin for everyone.</li>
              <li>Every other line I represent — Skylift, Bay Shore, Samson — gates pricing behind a dealer relationship or a quote request. Boss is the outlier, and the dealer channel feels it.</li>
            </ul>
            <p>The ask is straightforward. Pull pricing off the public product pages and replace it with a "Contact Your Authorized Dealer" CTA. Keep the photos, specs, and literature exactly as they are — they do a great job selling the product. Route Southeast zip codes directly to me and I'll have CB send over a clean territory list so your form logic can handle it automatically.</p>
            <p>If the dealer network needs visible pricing for reference, put it behind a login or publish a MAP sheet that dealers get by email. Either path protects the street price and protects the brand.</p>
            <p>Happy to get on a call with whoever owns the website on your end and walk through the change. This is a fix that helps Boss earn the business through the dealer channel the way it was designed to work.</p>
            <p class="close">Sincerely,</p>
            <p class="sign">Aaron C. Norris</p>
          </div>
        </div>
      </section>

      <!-- CONTACTS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Key</span> <span class="rest">Contacts</span></h2>
        <table class="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Troy Gongwer</strong></td>
              <td class="role">Boss Products — Primary</td>
              <td>Phone call first. CC on all written correspondence.</td>
            </tr>
            <tr>
              <td><strong>Thayne Grove</strong></td>
              <td class="role">Boss Products — Secondary</td>
              <td>Always CC alongside Troy per standing rule.</td>
            </tr>
            <tr>
              <td><strong>Aaron C. Norris</strong></td>
              <td class="role">Norris Utilities® — Owner</td>
              <td>Sole point of contact on this action. No escalation path above.</td>
            </tr>
            <tr>
              <td><strong>Caroline Butler (CB)</strong></td>
              <td class="role">Norris Utilities® — Admin</td>
              <td>Prepares Southeast territory zip-code list for Boss web form routing.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- CALLOUT -->
      <div class="callout">
        <strong>Standing rule reminder:</strong> All Boss Products correspondence must CC both Troy Gongwer <em>and</em> Thayne Grove. All Samson Rope correspondence must CC both Donna Poll <em>and</em> Sarah Daniels. No exceptions on this action item or any other.
      </div>

      <!-- OUTCOME -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="accent">Expected</span> <span class="rest">Outcome</span></h2>
        <div class="outcome-box">
          <h3>When this is done, Norris Utilities® wins on every front.</h3>
          <ul>
            <li>Boss public product pages show specs, photos, and a "Contact Your Authorized Dealer" CTA — no prices.</li>
            <li>Southeast web inquiries route automatically to acnorris@norrisutilities.com with customer info pre-filled.</li>
            <li>Dealer cost is no longer reverse-engineerable from the public web; margin is protected across the network.</li>
            <li>Norris Utilities® reclaims the quoting relationship on every Southeast Boss opportunity — the way an authorized dealer channel is supposed to work.</li>
            <li>Relationship with Troy and Thayne is stronger, not weaker, because the ask is framed around protecting Boss's own dealer network.</li>
          </ul>
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