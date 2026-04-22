<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Remove Pricing from Boss Online Store — Action Plan — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet">
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
      --nu-alert-red: #C62828;
      --nu-success-green: #2E7D32;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 35%, #0066EE 65%, #00AAFF 85%, var(--nu-cyan) 100%);
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
      opacity: 0.6;
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
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.02em;
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
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
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

    /* DOC TITLE */
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      margin-bottom: 8px;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
    }
    .doc-title span.accent { color: #0033cc; }
    .doc-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 32px;
      font-weight: 400;
    }

    /* META STRIP */
    .meta-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 18px 24px;
      background: linear-gradient(135deg, #f8f9fb 0%, #eef1f8 100%);
      border-left: 4px solid var(--nu-blue);
      border-radius: 4px;
      margin-bottom: 40px;
      font-size: 0.92rem;
    }
    .meta-strip .meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .meta-strip .meta-item span { color: var(--nu-dark-text); font-weight: 700; }

    /* ALERT CALLOUT */
    .alert-callout {
      background: linear-gradient(135deg, #fff8f0 0%, #fff3e0 100%);
      border: 1px solid #ffb74d;
      border-left: 6px solid #e65100;
      border-radius: 6px;
      padding: 22px 28px;
      margin-bottom: 40px;
    }
    .alert-callout h3 {
      font-weight: 900;
      color: #bf360c;
      font-size: 1.1rem;
      margin-bottom: 8px;
      letter-spacing: 0.02em;
    }
    .alert-callout p { color: #4a2c1a; font-size: 0.97rem; }

    /* SECTION HEADERS */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: #0033cc;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span.rest {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-rule {
      height: 3px;
      width: 56px;
      background: var(--nu-cyan);
      margin-bottom: 20px;
      border-radius: 2px;
    }
    section { margin-bottom: 48px; }

    /* CARD */
    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }

    /* WHY GRID */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }
    .why-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .why-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .why-card h4 {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .why-card p { font-size: 0.93rem; color: #444; line-height: 1.55; }

    /* STEP LIST */
    .step-list {
      list-style: none;
      counter-reset: step-counter;
      padding: 0;
    }
    .step-list li {
      counter-increment: step-counter;
      position: relative;
      padding: 20px 22px 20px 74px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 14px;
      transition: border-color 0.2s ease;
    }
    .step-list li:hover { border-color: var(--nu-blue); }
    .step-list li::before {
      content: counter(step-counter);
      position: absolute;
      top: 50%;
      left: 18px;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
      color: var(--nu-white);
      border-radius: 50%;
      font-weight: 900;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .step-list li h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      font-size: 1.05rem;
      margin-bottom: 5px;
    }
    .step-list li p { font-size: 0.93rem; color: #555; }
    .step-list li .step-detail {
      display: block;
      font-size: 0.85rem;
      color: #777;
      margin-top: 6px;
      font-style: italic;
    }

    /* EMAIL DRAFT */
    .email-draft {
      background: #fafbfd;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 26px 30px;
      font-size: 0.95rem;
      line-height: 1.7;
      color: #222;
    }
    .email-draft .email-header {
      border-bottom: 1px solid var(--nu-medium-gray);
      padding-bottom: 14px;
      margin-bottom: 18px;
      font-size: 0.88rem;
      color: #666;
    }
    .email-draft .email-header strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .email-draft .email-body p {
      margin-bottom: 14px;
      text-indent: 2em;
    }
    .email-draft .email-body p.no-indent { text-indent: 0; }
    .email-draft .signature {
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.9rem;
      color: #444;
    }
    .email-draft .signature .sig-name {
      color: var(--nu-blue);
      font-weight: 700;
      margin-left: 2em;
    }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
      font-size: 0.93rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 13px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:hover { background: #f8f9fc; }
    .nu-table .col-check { width: 48px; text-align: center; }
    .nu-table .col-check input {
      width: 18px; height: 18px;
      accent-color: var(--nu-blue);
      cursor: pointer;
    }

    /* STATUS PILLS */
    .pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill-open { background: #fff3e0; color: #bf360c; }
    .pill-action { background: #e3f2fd; color: #0033cc; }
    .pill-done { background: #e8f5e9; color: #1b5e20; }

    /* RISK / PRESERVE SECTION */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .col-block {
      padding: 22px 24px;
      border-radius: 6px;
      border: 1px solid var(--nu-medium-gray);
    }
    .col-remove {
      background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
      border-left: 4px solid var(--nu-alert-red);
    }
    .col-keep {
      background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
      border-left: 4px solid var(--nu-success-green);
    }
    .col-block h4 {
      font-weight: 900;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }
    .col-remove h4 { color: var(--nu-alert-red); }
    .col-keep h4 { color: var(--nu-success-green); }
    .col-block ul { list-style: none; padding-left: 0; }
    .col-block ul li {
      padding: 6px 0 6px 22px;
      position: relative;
      font-size: 0.93rem;
      color: #222;
    }
    .col-remove ul li::before {
      content: '✕';
      position: absolute;
      left: 0;
      color: var(--nu-alert-red);
      font-weight: 900;
    }
    .col-keep ul li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--nu-success-green);
      font-weight: 900;
    }

    /* CC BLOCK */
    .cc-block {
      background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%);
      border-left: 4px solid var(--nu-accent-gold);
      border-radius: 4px;
      padding: 16px 20px;
      margin-top: 16px;
      font-size: 0.93rem;
    }
    .cc-block strong { color: #7f6000; font-weight: 900; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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

    /* PRINT */
    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card, .step-list li, .why-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 22px; }
      .doc-title { font-size: 1.7rem; }
      .two-col { grid-template-columns: 1fr; }
      .step-list li { padding: 18px 18px 18px 68px; }
      .nu-table thead { display: none; }
      .nu-table, .nu-table tbody, .nu-table tr, .nu-table td { display: block; width: 100%; }
      .nu-table tr { margin-bottom: 14px; border: 1px solid var(--nu-medium-gray); border-radius: 6px; }
      .nu-table td { border-top: none; border-bottom: 1px solid var(--nu-medium-gray); padding: 10px 14px; }
      .nu-table td::before {
        content: attr(data-label);
        display: block;
        font-weight: 700;
        color: var(--nu-blue);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 4px;
      }
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
    <div class="nu-logo-subtitle">U T I L I T I E S</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="nu-content-area">
    <div class="nu-container">

      <h1 class="doc-title"><span class="accent">Remove</span> Pricing From Boss Online Store</h1>
      <p class="doc-subtitle">Action plan, channel rationale, and vendor communication — Norris Utilities® &times; BOSS Products</p>

      <!-- META -->
      <div class="meta-strip">
        <div class="meta-item"><strong>Source</strong><span>reMarkable Action Item</span></div>
        <div class="meta-item"><strong>Owner</strong><span>Aaron C. Norris</span></div>
        <div class="meta-item"><strong>Vendor</strong><span>BOSS Products</span></div>
        <div class="meta-item"><strong>Contacts (CC both)</strong><span>Troy Gongwer &amp; Thayne Grove</span></div>
        <div class="meta-item"><strong>Status</strong><span class="pill pill-action">Action Required</span></div>
        <div class="meta-item"><strong>Priority</strong><span>High</span></div>
      </div>

      <!-- ALERT -->
      <div class="alert-callout">
        <h3>Why this matters right now</h3>
        <p>Public pricing on the BOSS Online Store undermines Norris Utilities® dealer margin, confuses multi-tier customers, and exposes Direct/Dealer/Distributor spreads to competitors. The Norris Utilities® channel strategy depends on tiered pricing: Direct (full), Dealers (30% off), Distributors (40% off). Published retail on a vendor storefront collapses that structure in a single click.</p>
      </div>

      <!-- PROBLEM -->
      <section>
        <h2 class="nu-section-title">Problem <span class="rest">— What is happening today</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p>The BOSS Products Online Store currently displays public, per-unit pricing on FlexPro Armor and associated accessories. Anyone — customer, competitor, prospect, or current dealer — can pull up the site and see a retail number. That number then becomes the reference point in every negotiation, even when the buyer qualifies for dealer or distributor pricing.</p>
          <p style="margin-top:12px;">The Norris Utilities® commercial model is built on a three-channel structure. Each channel carries its own discount, terms, and service expectations. A single public price on the storefront removes the leverage that structure depends on and makes the dealer channel look overpriced to any buyer who finds the page first.</p>
        </div>
      </section>

      <!-- WHY -->
      <section>
        <h2 class="nu-section-title">Why <span class="rest">— Four business reasons to remove it</span></h2>
        <div class="nu-section-rule"></div>
        <div class="why-grid">
          <div class="why-card">
            <h4>Protect Dealer Margin</h4>
            <p>Dealers buy at 30% off and resell at full price. Public pricing on the vendor store caps what dealers can charge and erodes their incentive to stock and promote the line.</p>
          </div>
          <div class="why-card">
            <h4>Protect Distributor Spread</h4>
            <p>Distributors operate at 40% off. The 10-point differential between Dealer and Distributor tiers is the spread that funds territory coverage. Public retail numbers compress that spread.</p>
          </div>
          <div class="why-card">
            <h4>Control the Conversation</h4>
            <p>Quoting is a relationship event. Customer Cost = Cost &div; (1 − Margin%). When a number lives on a public page, every quote becomes a defense of that number instead of a conversation about value.</p>
          </div>
          <div class="why-card">
            <h4>Competitive Hygiene</h4>
            <p>Competitors screenshot public pricing and use it against the brand. Removing retail from the storefront keeps pricing intelligence inside the channel where it belongs.</p>
          </div>
        </div>
      </section>

      <!-- WHAT CHANGES -->
      <section>
        <h2 class="nu-section-title">What <span class="rest">— Remove vs. preserve</span></h2>
        <div class="nu-section-rule"></div>
        <div class="two-col">
          <div class="col-block col-remove">
            <h4>Remove from public view</h4>
            <ul>
              <li>Per-unit retail pricing on FlexPro Armor SKUs</li>
              <li>Add-to-cart flows that expose pricing at checkout</li>
              <li>Any bundle, combo, or accessory price tags</li>
              <li>"Starting at $" language on product tiles</li>
              <li>Downloadable price sheets accessible without login</li>
            </ul>
          </div>
          <div class="col-block col-keep">
            <h4>Keep &amp; strengthen</h4>
            <ul>
              <li>Full product imagery, specs, and SKU details</li>
              <li>"Request a Quote" CTA routing to Norris Utilities®</li>
              <li>Dealer locator / authorized channel list</li>
              <li>Installation videos, warranty, compliance info</li>
              <li>Gated wholesale portal for authorized dealers</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ACTION PLAN -->
      <section>
        <h2 class="nu-section-title">Action <span class="rest">— Step-by-step plan</span></h2>
        <div class="nu-section-rule"></div>
        <ol class="step-list">
          <li>
            <h4>Send the vendor request to BOSS Products</h4>
            <p>Email Troy Gongwer and Thayne Grove (CC both — per house rule). State the ask, the reason, and the replacement path for buyers.</p>
            <span class="step-detail">Draft email prepared below. Sent from acnorris@norrisutilities.com.</span>
          </li>
          <li>
            <h4>Confirm the replacement CTA</h4>
            <p>Ensure every product page replaces price/cart with a "Request a Quote" button that routes inquiries to Norris Utilities® or the appropriate authorized channel.</p>
            <span class="step-detail">Form captures: name, company, state, qty, SKU, contact — routed to Aaron.</span>
          </li>
          <li>
            <h4>Verify dealer locator / channel page is live</h4>
            <p>Buyers landing without pricing must immediately see who to contact. Confirm Norris Utilities® is listed and contact details are current.</p>
            <span class="step-detail">If missing, request addition in the same email thread.</span>
          </li>
          <li>
            <h4>Audit cached / indexed price pages</h4>
            <p>Ask BOSS to submit a re-index request to Google Search Console and purge any CDN caches so old price snapshots drop from search results.</p>
            <span class="step-detail">Spot-check after 7 days via Google site: search.</span>
          </li>
          <li>
            <h4>Notify internal team</h4>
            <p>Send a short internal note to Caroline Butler (CB) so she knows the storefront no longer shows prices and can redirect any customer who mentions it.</p>
            <span class="step-detail">One-line Telegram note + tracker update.</span>
          </li>
          <li>
            <h4>Follow up in 7 business days</h4>
            <p>If the site still shows pricing, send a second email restating the request and the commercial impact. Escalate to Troy if Thayne has not moved.</p>
            <span class="step-detail">Calendar reminder set.</span>
          </li>
          <li>
            <h4>Close the loop</h4>
            <p>Once confirmed live, update the internal tracker, mark the reMarkable action item done, and archive the email thread for reference.</p>
            <span class="step-detail">File under: operations/vendor-policy/boss-pricing.</span>
          </li>
        </ol>
      </section>

      <!-- EMAIL DRAFT -->
      <section>
        <h2 class="nu-section-title">Draft <span class="rest">— Email to BOSS Products</span></h2>
        <div class="nu-section-rule"></div>
        <div class="email-draft">
          <div class="email-header">
            <div><strong>To:</strong> Thayne Grove &lt;thayne@bossproducts.com&gt;</div>
            <div><strong>CC:</strong> Troy Gongwer &lt;troy@bossproducts.com&gt;</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Boss Online Store — Request to Remove Public Pricing</div>
          </div>
          <div class="email-body">
            <p class="no-indent">Thayne —</p>
            <p>I'd like to ask that we remove per-unit pricing from the Boss Online Store for FlexPro Armor and the related accessories.</p>
            <p>Our channel model depends on three distinct tiers — Direct, Dealer, and Distributor — and the spreads between those tiers are what keep our partners invested in stocking and promoting the line. Public retail on the storefront collapses that structure and puts every quote we send on the defensive.</p>
            <p>A few specific asks:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;• Remove per-unit pricing and add-to-cart from all FlexPro Armor SKUs<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• Replace each product page CTA with "Request a Quote" routing to Norris Utilities®<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• Confirm Norris Utilities® is listed on the dealer locator with current contact info<br>
              &nbsp;&nbsp;&nbsp;&nbsp;• Submit a re-index / cache purge so old price pages drop from search results
            </p>
            <p>Happy to jump on a quick call if it's easier to walk through. Keeping product detail, specs, imagery, warranty, and install videos public is great — that's what earns the trust. The number itself is the piece I'd like moved inside the channel.</p>
            <p>Appreciate y'all. Let me know what you need from my end to make this happen.</p>
          </div>
          <div class="signature">
            <p class="no-indent">Sincerely,</p>
            <p class="sig-name">Aaron C. Norris</p>
            <p style="margin-left:2em; font-size:0.88rem; color:#666;">
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>
        </div>
        <div class="cc-block">
          <strong>House rule reminder:</strong> BOSS Products communications always CC both Troy Gongwer and Thayne Grove. Do not send to one without the other.
        </div>
      </section>

      <!-- CHECKLIST -->
      <section>
        <h2 class="nu-section-title">Checklist <span class="rest">— Track to done</span></h2>
        <div class="nu-section-rule"></div>
        <table class="nu-table">
          <thead>
            <tr>
              <th class="col-check">Done</th>
              <th>Item</th>
              <th>Owner</th>
              <th>Target</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Send request email to Thayne + Troy (CC both)</td>
              <td data-label="Owner">Aaron</td>
              <td data-label="Target">Day 1</td>
              <td data-label="Status"><span class="pill pill-action">Action</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Confirm "Request a Quote" replaces price/cart on all SKUs</td>
              <td data-label="Owner">BOSS</td>
              <td data-label="Target">Day 3</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Verify Norris Utilities® on dealer locator</td>
              <td data-label="Owner">BOSS / Aaron</td>
              <td data-label="Target">Day 3</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Re-index / CDN cache purge on removed price pages</td>
              <td data-label="Owner">BOSS</td>
              <td data-label="Target">Day 5</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Notify Caroline Butler (CB) of change</td>
              <td data-label="Owner">Aaron</td>
              <td data-label="Target">Day 1</td>
              <td data-label="Status"><span class="pill pill-action">Action</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">7-day follow-up if no confirmation</td>
              <td data-label="Owner">Aaron</td>
              <td data-label="Target">Day 7</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Spot-check Google results via site: search</td>
              <td data-label="Owner">Aaron</td>
              <td data-label="Target">Day 10</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
            <tr>
              <td class="col-check" data-label="Done"><input type="checkbox"></td>
              <td data-label="Item">Close reMarkable action item; archive email thread</td>
              <td data-label="Owner">Aaron</td>
              <td data-label="Target">On confirm</td>
              <td data-label="Status"><span class="pill pill-open">Open</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- REFERENCE -->
      <section>
        <h2 class="nu-section-title">Reference <span class="rest">— Pricing model preserved inside the channel</span></h2>
        <div class="nu-section-rule"></div>
        <div class="nu-card">
          <p><strong>Channel structure:</strong> Direct (full price) → Dealers (30% off) → Distributors (40% off).</p>
          <p style="margin-top:10px;"><strong>FlexPro Armor margin:</strong> 50%. Customer Price = Cost &divide; (1 − 0.50) = Cost &divide; 0.50.</p>
          <p style="margin-top:10px;"><strong>Shipping (Ben's Formula):</strong> CustomerCost = ROUNDUP( ROUNDUP(RegCost, 0) × 1.10, 0 ).</p>
          <p style="margin-top:10px;"><strong>Outcome of this change:</strong> Pricing stays intact, stays tiered, and stays inside the relationship. Buyers land on product, learn the value, and are routed to the right channel for their tier.</p>
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