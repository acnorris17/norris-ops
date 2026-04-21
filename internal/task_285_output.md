<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Plan: Remove Pricing from Boss Online Store — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
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
      --nu-success: #1B7F3A;
      --nu-warning: #C9A84C;
      --nu-alert: #C0392B;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 25%, #0066ee 55%, #00aaff 80%, #06D0FF 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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

    .nu-phoenix {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ CONTENT WRAPPER ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; height: 600px;
      background: radial-gradient(circle, rgba(0, 51, 204, 0.04) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }
    .nu-wrap {
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 70px;
      z-index: 1;
    }

    /* ══ DOCUMENT META ══ */
    .nu-doc-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 20px;
      background: linear-gradient(90deg, var(--nu-light-gray) 0%, #fff 100%);
      border-left: 4px solid var(--nu-blue);
      margin-bottom: 30px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
    }
    .nu-doc-meta strong { color: var(--nu-blue); font-weight: 900; }
    .nu-doc-meta .pill {
      display: inline-block;
      background: var(--nu-alert);
      color: #fff;
      padding: 4px 12px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    /* ══ TITLE BLOCK ══ */
    .nu-title-block {
      margin-bottom: 36px;
      padding-bottom: 22px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-eyebrow {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.1rem;
      color: #555;
      font-weight: 400;
      max-width: 750px;
    }

    /* ══ SECTION ══ */
    .nu-section { margin-bottom: 40px; }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 16px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* ══ ALERT BOX ══ */
    .nu-alert-box {
      background: linear-gradient(135deg, #fff8f6 0%, #fdecea 100%);
      border-left: 5px solid var(--nu-alert);
      border-radius: 4px;
      padding: 20px 24px;
      margin-bottom: 30px;
    }
    .nu-alert-title {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-alert);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .nu-alert-body {
      font-size: 0.97rem;
      color: var(--nu-dark-text);
      line-height: 1.6;
    }

    /* ══ CONTEXT GRID ══ */
    .nu-context-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 14px;
    }
    .nu-context-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-context-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-context-value {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-context-value small {
      display: block;
      font-weight: 400;
      color: #666;
      font-size: 0.85rem;
      margin-top: 3px;
    }

    /* ══ STEP CARDS ══ */
    .nu-steps { display: flex; flex-direction: column; gap: 16px; }
    .nu-step {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 18px;
      align-items: start;
    }
    .nu-step-num {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.3rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-step-title {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-step-desc {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 10px;
    }
    .nu-step-desc strong { color: var(--nu-dark-text); }
    .nu-step-desc code {
      background: var(--nu-light-gray);
      padding: 2px 7px;
      border-radius: 3px;
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 0.85rem;
      color: var(--nu-blue);
    }
    .nu-step ul {
      margin: 8px 0 4px 18px;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .nu-step ul li { margin-bottom: 4px; }
    .nu-step-meta {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.06);
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.03em;
    }

    /* ══ EMAIL DRAFT ══ */
    .nu-email {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-email-head {
      background: var(--nu-light-gray);
      padding: 14px 22px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.88rem;
    }
    .nu-email-head div { margin-bottom: 4px; }
    .nu-email-head strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .nu-email-body {
      padding: 24px 26px;
      font-size: 0.96rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .nu-email-body p { margin-bottom: 14px; }
    .nu-email-body p.indent { padding-left: 0; }
    .nu-email-body .sig {
      margin-top: 22px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      color: var(--nu-body-text);
    }
    .nu-email-body .sig strong { color: var(--nu-dark-text); }

    /* ══ TWO-COL ══ */
    .nu-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .nu-panel {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 22px 24px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .nu-panel.warn { border-top: 4px solid var(--nu-warning); }
    .nu-panel.good { border-top: 4px solid var(--nu-success); }
    .nu-panel-title {
      font-weight: 900;
      font-size: 1rem;
      margin-bottom: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-panel.warn .nu-panel-title { color: var(--nu-warning); }
    .nu-panel.good .nu-panel-title { color: var(--nu-success); }
    .nu-panel ul {
      margin-left: 18px;
      font-size: 0.93rem;
      color: var(--nu-body-text);
    }
    .nu-panel ul li { margin-bottom: 8px; }

    /* ══ TIMELINE ══ */
    .nu-timeline {
      background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
    }
    .nu-timeline-row {
      display: grid;
      grid-template-columns: 130px 1fr;
      gap: 18px;
      padding: 12px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.94rem;
    }
    .nu-timeline-row:last-child { border-bottom: none; }
    .nu-timeline-when {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.9rem;
      letter-spacing: 0.02em;
    }
    .nu-timeline-what { color: var(--nu-dark-text); }
    .nu-timeline-what strong { color: var(--nu-dark-text); }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 26px;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid var(--nu-light-gray);
      font-size: 0.95rem;
      color: var(--nu-dark-text);
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      flex-shrink: 0;
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
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 1rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-divider {
      width: 60px;
      height: 2px;
      background: var(--nu-cyan);
      margin: 14px auto;
      opacity: 0.5;
    }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 36px 22px 50px; }
      .nu-page-title { font-size: 1.7rem; }
      .nu-two-col { grid-template-columns: 1fr; }
      .nu-step { grid-template-columns: 1fr; }
      .nu-step-num { width: 42px; height: 42px; font-size: 1.1rem; }
      .nu-timeline-row { grid-template-columns: 1fr; gap: 4px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <svg class="nu-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="nu-wrap">

      <div class="nu-doc-meta">
        <span><strong>Action Item</strong> · reMarkable capture · Boss Online Store</span>
        <span><span class="pill">Action Required</span> &nbsp; Owner: Aaron C. Norris &nbsp; · &nbsp; Date: 2026-04-21</span>
      </div>

      <div class="nu-title-block">
        <div class="nu-eyebrow">Channel Pricing · Action Plan</div>
        <h1 class="nu-page-title">Remove Pricing from <span class="accent">Boss Online Store</span></h1>
        <p class="nu-page-subtitle">Pull all customer-facing prices from the Boss Products online store listings under the Norris Utilities® reseller account, restore quote-on-request flow, and align the public storefront with the dealer/distributor channel pricing structure.</p>
      </div>

      <!-- WHY -->
      <section class="nu-section">
        <div class="nu-alert-box">
          <div class="nu-alert-title">Why This Matters</div>
          <div class="nu-alert-body">
            Public pricing on the Boss online store undercuts the three-channel structure (Direct → Dealers 30% off → Distributors 40% off). Posted prices erode dealer margin, expose competitor visibility into landed cost, and short-circuit the relationship-driven sales process. Quotes must be issued direct from Norris Utilities® so the correct margin tier and Ben's shipping formula (ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)) are applied per customer.
          </div>
        </div>
      </section>

      <!-- CONTEXT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Quick</span> <span class="rest">Context</span></h2>
        <div class="nu-context-grid">
          <div class="nu-context-card">
            <div class="nu-context-label">Vendor</div>
            <div class="nu-context-value">BOSS Products
              <small>Authorized reseller channel</small>
            </div>
          </div>
          <div class="nu-context-card">
            <div class="nu-context-label">Vendor Contacts</div>
            <div class="nu-context-value">Troy Gongwer + Thayne Grove
              <small>CC both on every email</small>
            </div>
          </div>
          <div class="nu-context-card">
            <div class="nu-context-label">Issue</div>
            <div class="nu-context-value">Public prices visible
              <small>Online store listings show MSRP</small>
            </div>
          </div>
          <div class="nu-context-card">
            <div class="nu-context-label">Desired State</div>
            <div class="nu-context-value">Quote on Request
              <small>"Call for Pricing" replaces dollar amount</small>
            </div>
          </div>
        </div>
      </section>

      <!-- STEPS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps</span></h2>
        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <div>
              <div class="nu-step-title">Inventory every priced listing</div>
              <div class="nu-step-desc">Log into the Boss Products online store as Norris Utilities® and walk every active product page. Capture the SKU, title, posted price, and direct URL for each listing where a dollar amount is currently visible.</div>
              <ul>
                <li>Save list as <code>boss_priced_listings_2026-04-21.md</code></li>
                <li>Flag any listing that also shows a "compare at" or strike-through price</li>
                <li>Note which listings are tied to bundles vs. individual SKUs</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron · Time: 30 min</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <div>
              <div class="nu-step-title">Send removal request to Boss Products</div>
              <div class="nu-step-desc">Email <strong>Troy Gongwer</strong> and <strong>Thayne Grove</strong> together (CC both — never one without the other) with the inventory list attached. Use the draft below. Request that all prices be hidden and replaced with a "Request a Quote" or "Call for Pricing" call-to-action.</div>
              <ul>
                <li>Subject: clear, specific, no jargon</li>
                <li>Attach the SKU/URL inventory from Step 1</li>
                <li>Specify the replacement CTA wording you want shown</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron · Time: 15 min</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <div>
              <div class="nu-step-title">Confirm replacement CTA routing</div>
              <div class="nu-step-desc">When the "Request a Quote" link is added, confirm the inquiry destination. Quote requests should route to <code>acnorris@norrisutilities.com</code> with Caroline Butler optionally CC'd, never to Boss directly. This protects channel ownership.</div>
              <ul>
                <li>Verify Boss is not capturing the lead</li>
                <li>Verify the form passes SKU + customer info to Aaron</li>
                <li>Test with a dummy submission once live</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron · Time: 20 min after vendor reply</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">4</div>
            <div>
              <div class="nu-step-title">Verify the change is live</div>
              <div class="nu-step-desc">Re-walk every URL from the Step 1 inventory in an incognito window (logged out, no cookies). Every dollar amount must be gone and replaced with the agreed CTA. Document any listing still showing a price and re-ping the vendor same-day.</div>
              <ul>
                <li>Use Chrome incognito + Safari private as a cross-check</li>
                <li>Screenshot each cleaned listing for the file</li>
                <li>Test on mobile — Boss listings render differently on small screens</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron · Time: 25 min</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">5</div>
            <div>
              <div class="nu-step-title">Update internal pricing reference</div>
              <div class="nu-step-desc">Note in the master tracker that Boss online listings are now quote-on-request. Add a one-line entry to the channel pricing reference so Caroline and any future team member quotes Boss product correctly: Direct → Dealers 30% off → Distributors 40% off, plus Ben's shipping formula on every line.</div>
              <ul>
                <li>Update <code>master_tracker</code></li>
                <li>Update <code>pricing_quoting_reference</code></li>
                <li>Note the date the change went live</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron + CB · Time: 10 min</span>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">6</div>
            <div>
              <div class="nu-step-title">Close the loop with Boss</div>
              <div class="nu-step-desc">Once verified live, send a brief thank-you confirmation to Troy and Thayne. This keeps the relationship warm and creates a paper trail confirming the change was completed at our request and accepted by the vendor.</div>
              <ul>
                <li>One-paragraph email, no attachments</li>
                <li>Reference the original request thread</li>
                <li>Note the verification date</li>
              </ul>
              <span class="nu-step-meta">Owner: Aaron · Time: 5 min</span>
            </div>
          </div>

        </div>
      </section>

      <!-- EMAIL DRAFT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Draft to Boss Products</span></h2>
        <div class="nu-email">
          <div class="nu-email-head">
            <div><strong>To:</strong> Troy Gongwer &lt;troy@bossproducts.com&gt;</div>
            <div><strong>CC:</strong> Thayne Grove &lt;thayne@bossproducts.com&gt;</div>
            <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
            <div><strong>Subject:</strong> Norris Utilities® reseller listings — remove posted prices, switch to Request a Quote</div>
          </div>
          <div class="nu-email-body">
            <p>Troy and Thayne —</p>

            <p class="indent">Quick request on the Boss online store listings under our Norris Utilities® reseller account. We need to pull the posted prices from every active SKU we resell and switch the listings over to a "Request a Quote" or "Call for Pricing" call-to-action.</p>

            <p class="indent">The reason is simple — we sell through three channels (direct, dealer, distributor) and each tier carries its own pricing. Public dollar amounts on the storefront undercut our dealer partners and limit the conversation we need to have with each customer before quoting.</p>

            <p class="indent">A few specifics so we keep this clean:</p>

            <p class="indent">• Inventory list of every priced listing under our reseller account is attached.<br>
            • Replace each posted price with the same CTA wording across the board — happy to defer to whatever your platform supports cleanest.<br>
            • Quote inquiries should route to acnorris@norrisutilities.com so Norris Utilities® owns the channel response.<br>
            • Once changes are live, I'll re-walk every listing in incognito and confirm.</p>

            <p class="indent">When can your team have this turned around? If easier to handle on a quick call, my cell is below.</p>

            <p class="indent">Appreciate y'all keeping the channel structure clean — it's been good for both of us.</p>

            <p>Sincerely,</p>
            <p style="padding-left:0;">&nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>

            <div class="sig">
              <strong>Aaron C. Norris</strong><br>
              Founder &amp; CEO, Norris Utilities, LLC<br>
              Cell: 205-500-1343 &nbsp;|&nbsp; acnorris@norrisutilities.com<br>
              www.NorrisUtilities.com
            </div>
          </div>
        </div>
      </section>

      <!-- DO / DON'T -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Guardrails</span> <span class="rest">— Do &amp; Don't</span></h2>
        <div class="nu-two-col">
          <div class="nu-panel good">
            <div class="nu-panel-title">Do</div>
            <ul>
              <li>CC <strong>both</strong> Troy Gongwer and Thayne Grove on every Boss email — always.</li>
              <li>Use a single, consistent CTA across all listings ("Request a Quote").</li>
              <li>Route inquiries to acnorris@norrisutilities.com so Norris Utilities® owns the lead.</li>
              <li>Verify in incognito on desktop <em>and</em> mobile — Boss mobile templates differ.</li>
              <li>Document the live-date in the master tracker and pricing reference.</li>
            </ul>
          </div>
          <div class="nu-panel warn">
            <div class="nu-panel-title">Don't</div>
            <ul>
              <li>Don't email Troy without copying Thayne (or vice versa).</li>
              <li>Don't let Boss capture the quote inquiry — that bypasses our channel.</li>
              <li>Don't ship a partial fix — every priced listing must change in one pass.</li>
              <li>Don't assume the change is live based on the vendor's word — verify it.</li>
              <li>Don't re-publish prices in any other public-facing channel (PDF line card, web).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- TIMELINE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Target</span> <span class="rest">Timeline</span></h2>
        <div class="nu-timeline">
          <div class="nu-timeline-row">
            <div class="nu-timeline-when">2026-04-21</div>
            <div class="nu-timeline-what"><strong>Day 0 —</strong> Inventory priced listings (Step 1) and send removal request to Boss (Step 2).</div>
          </div>
          <div class="nu-timeline-row">
            <div class="nu-timeline-when">2026-04-22 → 24</div>
            <div class="nu-timeline-what"><strong>Days 1–3 —</strong> Boss confirms scope and replacement CTA routing (Step 3). Follow up daily if no reply by 4 PM CT.</div>
          </div>
          <div class="nu-timeline-row">
            <div class="nu-timeline-when">2026-04-25 → 28</div>
            <div class="nu-timeline-what"><strong>Days 4–7 —</strong> Boss implements changes. Aaron verifies live state in incognito + mobile (Step 4).</div>
          </div>
          <div class="nu-timeline-row">
            <div class="nu-timeline-when">2026-04-29</div>
            <div class="nu-timeline-what"><strong>Day 8 —</strong> Update internal master tracker and pricing reference (Step 5). Send vendor close-the-loop confirmation (Step 6).</div>
          </div>
          <div class="nu-timeline-row">
            <div class="nu-timeline-when">2026-05-13</div>
            <div class="nu-timeline-what"><strong>+2 weeks —</strong> Spot-check three random listings to confirm the change has stuck. Add note to follow-up rotation.</div>
          </div>
        </div>
      </section>

      <!-- VERIFICATION -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Verification</span> <span class="rest">Checklist</span></h2>
        <div class="nu-checklist">
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Full inventory of priced listings captured with SKU + URL.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Removal request emailed to Troy + Thayne (both CC'd).</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Boss reply received confirming scope and timeline.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Replacement CTA wording agreed and consistent across listings.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Quote inquiry routing tested with a dummy submission landing in Aaron's inbox.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Every listing re-walked in incognito on desktop — no dollar amounts visible.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Every listing re-walked in mobile private mode — no dollar amounts visible.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Master tracker updated with live-date.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Pricing reference updated noting Boss = quote-on-request.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Close-the-loop confirmation sent to Troy + Thayne.</div></div>
          <div class="nu-check-item"><div class="nu-check-box"></div><div>Two-week follow-up scheduled to spot-check that listings remain clean.</div></div>
        </div>
      </section>

    </div>
  </main>

  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a><br>
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
  </footer>

</body>
</html>