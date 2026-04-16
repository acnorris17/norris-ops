<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Bucket Cover Resize & Return Ship — Norris Utilities®</title>
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
      --nu-alert-amber: #D68910;
      --nu-success-green: #1E8449;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
      opacity: 0.8;
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

    .nu-ghost-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; max-width: 540px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.35));
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
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.72em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.72em;
    }

    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* ══ CHEVRON TRANSITION ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -55px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%;
      height: 60px;
      display: block;
    }

    /* ══ PAGE RIBBON ══ */
    .nu-ribbon {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 22px 40px;
      text-align: center;
      letter-spacing: 0.08em;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
    }
    .nu-ribbon .badge {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 4px 12px;
      border-radius: 3px;
      font-weight: 900;
      margin-right: 12px;
      letter-spacing: 0.1em;
    }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }

    .nu-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 40px 72px;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.6rem;
      color: var(--nu-blue);
      margin-bottom: 8px;
      letter-spacing: -0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-section-subtitle {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 24px;
    }

    /* ══ HERO STATEMENT ══ */
    .nu-hero-card {
      background: linear-gradient(135deg, #fff8e1 0%, #fffaed 100%);
      border-left: 6px solid var(--nu-alert-amber);
      padding: 28px 32px;
      border-radius: 6px;
      margin-bottom: 40px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    }
    .nu-hero-label {
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      color: var(--nu-alert-amber);
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .nu-hero-headline {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      line-height: 1.3;
      margin-bottom: 10px;
    }
    .nu-hero-source {
      font-size: 0.88rem;
      color: #6a6a7a;
      font-style: italic;
    }

    /* ══ STATUS CHIPS ══ */
    .nu-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .nu-status-chip {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .nu-status-chip .label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: #8a8a9a;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-status-chip .value {
      font-size: 1.02rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-status-chip.accent {
      border-left: 4px solid var(--nu-blue);
    }
    .nu-status-chip.amber {
      border-left: 4px solid var(--nu-alert-amber);
    }
    .nu-status-chip.green {
      border-left: 4px solid var(--nu-success-green);
    }

    /* ══ TIMELINE / STEPS ══ */
    .nu-steps {
      margin: 16px 0 40px;
    }
    .nu-step {
      display: grid;
      grid-template-columns: 56px 1fr;
      gap: 20px;
      padding: 20px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-step:last-child { border-bottom: none; }
    .nu-step-num {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0044dd 100%);
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-step-num.done {
      background: linear-gradient(135deg, var(--nu-success-green) 0%, #27AE60 100%);
    }
    .nu-step-body h4 {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-step-body p {
      color: #555;
      font-size: 0.95rem;
      margin-bottom: 6px;
    }
    .nu-step-meta {
      font-size: 0.82rem;
      color: #8a8a9a;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    /* ══ SPEC PANEL ══ */
    .nu-spec-panel {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 28px 32px;
      margin: 32px 0 40px;
    }
    .nu-spec-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 16px;
    }
    .nu-spec-item {
      background: var(--nu-white);
      border-radius: 6px;
      padding: 16px 18px;
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-spec-item .k {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-spec-item .v {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-spec-item .note {
      font-size: 0.82rem;
      color: #777;
      margin-top: 4px;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-checklist ul {
      list-style: none;
      margin-top: 16px;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-right: 14px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ══ EMAIL DRAFT ══ */
    .nu-email-draft {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      margin-top: 24px;
    }
    .nu-email-head {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 18px 24px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
    }
    .nu-email-head .subject {
      font-weight: 900;
      font-size: 1.05rem;
      margin-top: 4px;
    }
    .nu-email-body {
      padding: 24px 28px;
      font-size: 0.95rem;
      line-height: 1.75;
      color: #333;
      white-space: pre-line;
    }
    .nu-email-meta {
      padding: 12px 28px;
      background: var(--nu-light-gray);
      font-size: 0.82rem;
      color: #666;
      border-top: 1px solid var(--nu-medium-gray);
    }

    /* ══ CTA ══ */
    .nu-btn-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 12px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
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
      padding: 12px 28px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.92rem;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.96rem;
      line-height: 1.9;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 40px 20px; }
      .nu-hero-headline { font-size: 1.2rem; }
      .nu-step { grid-template-columns: 44px 1fr; gap: 14px; }
      .nu-step-num { width: 40px; height: 40px; font-size: 1rem; }
      .nu-spec-panel, .nu-checklist { padding: 20px; }
      .nu-email-body { padding: 18px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-btn-primary, .nu-btn-secondary { display: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-ghost-phoenix" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 10 L115 40 L145 25 L125 55 L165 45 L135 75 L155 110 L115 85 L100 130 L85 85 L45 110 L65 75 L35 45 L75 55 L55 25 L85 40 Z" fill="white"/>
      <path d="M100 120 L105 155 L125 145 L112 165 L100 195 L88 165 L75 145 L95 155 Z" fill="white"/>
    </svg>
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

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="white"/>
    </svg>
  </div>

  <!-- RIBBON -->
  <div class="nu-ribbon">
    <span class="badge">ACTION REQUIRED</span>
    Internal Workflow • reMarkable Capture • Logged 2026-04-16
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- HERO -->
      <div class="nu-hero-card">
        <div class="nu-hero-label">◆ Action Item From reMarkable</div>
        <h1 class="nu-hero-headline">Modify Shipped Bucket Cover & Return-Ship for Proper Sizing</h1>
        <p class="nu-hero-source">Source: Aaron's reMarkable notebook capture, 04/16/2026 • Owner: Aaron C. Norris • Priority: High — open shipment in customer's hands</p>
      </div>

      <!-- STATUS GRID -->
      <div class="nu-status-grid">
        <div class="nu-status-chip accent">
          <div class="label">Status</div>
          <div class="value">Open — Awaiting Recall</div>
        </div>
        <div class="nu-status-chip amber">
          <div class="label">Action Type</div>
          <div class="value">Modify & Re-Ship</div>
        </div>
        <div class="nu-status-chip">
          <div class="label">Product Line</div>
          <div class="value">FlexPro Armor Bucket Cover</div>
        </div>
        <div class="nu-status-chip">
          <div class="label">Issue</div>
          <div class="value">Sizing — dimensional fit</div>
        </div>
        <div class="nu-status-chip green">
          <div class="label">Cost to Customer</div>
          <div class="value">$0 — Warranty Service</div>
        </div>
        <div class="nu-status-chip">
          <div class="label">Target Turnaround</div>
          <div class="value">5 business days, inbound to outbound</div>
        </div>
      </div>

      <!-- STEP-BY-STEP PLAN -->
      <h2 class="nu-section-title">Return-&amp;-Modify <span>Workflow</span></h2>
      <p class="nu-section-subtitle">Six-step sequence from customer call to reshipped cover — each step has a clear owner and proof-of-completion.</p>

      <div class="nu-steps">

        <div class="nu-step">
          <div class="nu-step-num">1</div>
          <div class="nu-step-body">
            <h4>Confirm Cover Dimensions With Customer</h4>
            <p>Call customer, verify bucket top opening (inside dimension), bucket depth, and which cover SKU they received. Photograph cover on-bucket if possible. Document the fit issue in writing.</p>
            <div class="nu-step-meta">Owner: Aaron C. Norris  •  Proof: call notes + photos saved to customer folder</div>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">2</div>
          <div class="nu-step-body">
            <h4>Issue Prepaid Return Label &amp; RMA Number</h4>
            <p>Generate an RMA number (format: RMA-FPA-[DATE]). Email the customer a prepaid FedEx/UPS Ground label and an RMA cover sheet to drop in the box. No restock fee — this is a sizing correction, not a return.</p>
            <div class="nu-step-meta">Owner: Caroline Butler (CB) — Aaron reviews outbound email  •  Proof: RMA email sent, tracking number logged</div>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">3</div>
          <div class="nu-step-body">
            <h4>Inbound Receipt &amp; Inspection</h4>
            <p>When the cover arrives at shop, confirm it is the unit shipped (match serial/date stamp). Lay flat, measure current dimensions vs. order specs, and note exactly what's off — length, width, strap position, or velcro placement.</p>
            <div class="nu-step-meta">Owner: Aaron C. Norris  •  Proof: inspection sheet + measurement log photographed</div>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">4</div>
          <div class="nu-step-body">
            <h4>Modification on FlexPro Armor</h4>
            <p>Execute the sizing modification — resew seams, replace panels, or re-cut to proper dimensions per customer's verified measurements. Use the USA-handmade fabrication process that ships with every FlexPro Armor cover. Document each cut/seam change with photos.</p>
            <div class="nu-step-meta">Owner: Aaron C. Norris (production lead)  •  Proof: before/after photos, updated measurement card zip-tied to cover</div>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">5</div>
          <div class="nu-step-body">
            <h4>Quality Check &amp; Return Ship</h4>
            <p>Final inspection: lay cover over same-size bucket template in shop, verify fit, strap function, velcro closure, stitching integrity. Re-fold, re-bag, include branded thank-you card, ship back to customer via the same prepaid carrier with expedited service at Norris Utilities® cost.</p>
            <div class="nu-step-meta">Owner: Aaron C. Norris  •  Proof: outbound tracking number + photo of packed cover</div>
          </div>
        </div>

        <div class="nu-step">
          <div class="nu-step-num">6</div>
          <div class="nu-step-body">
            <h4>Follow-Up &amp; Close</h4>
            <p>48 hours after delivery, Aaron calls the customer to confirm the modified cover fits correctly. Log outcome in CRM, update the SKU fit-note file if a pattern emerged, and mark the reMarkable action item as closed in the action queue.</p>
            <div class="nu-step-meta">Owner: Aaron C. Norris  •  Proof: CRM note + reMarkable item marked DONE</div>
          </div>
        </div>

      </div>

      <!-- SPEC PANEL -->
      <h2 class="nu-section-title">FlexPro Armor <span>Cover SKU Reference</span></h2>
      <p class="nu-section-subtitle">Use these official dimensions as the baseline when re-measuring and modifying the returned cover.</p>

      <div class="nu-spec-panel">
        <div class="nu-spec-grid">
          <div class="nu-spec-item">
            <div class="k">SKU NU-BC-2851</div>
            <div class="v">2-Man Cover</div>
            <div class="note">28" × 51" — full-size platform buckets</div>
          </div>
          <div class="nu-spec-item">
            <div class="k">SKU NU-BC-2834</div>
            <div class="v">1.5-Man Cover</div>
            <div class="note">28" × 34" — mid-size buckets</div>
          </div>
          <div class="nu-spec-item">
            <div class="k">SKU NU-BC-2851-C</div>
            <div class="v">2-Man Combo Cover</div>
            <div class="note">28" × 51" + internal liner kit</div>
          </div>
          <div class="nu-spec-item">
            <div class="k">SKU NU-BC-2834-C</div>
            <div class="v">1.5-Man Combo Cover</div>
            <div class="note">28" × 34" + internal liner kit</div>
          </div>
          <div class="nu-spec-item">
            <div class="k">Competitor Size</div>
            <div class="v">Their 24×48 = Our NU-BC-2851</div>
            <div class="note">Translation guide — do not size down</div>
          </div>
          <div class="nu-spec-item">
            <div class="k">Competitor Size</div>
            <div class="v">Their 24×34 = Our NU-BC-2834</div>
            <div class="note">Translation guide — do not size down</div>
          </div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title">Today's <span>Checklist</span></h2>
      <p class="nu-section-subtitle">Everything that must be true before this action item can be closed.</p>

      <div class="nu-checklist">
        <ul>
          <li><span class="box"></span><strong>Customer contacted</strong> and exact bucket opening measurements verified in writing (not recalled from memory).</li>
          <li><span class="box"></span><strong>Photos of cover on-bucket</strong> received from customer — gap points documented.</li>
          <li><span class="box"></span><strong>RMA number issued</strong> and prepaid return label emailed to the customer.</li>
          <li><span class="box"></span><strong>Inbound cover received</strong>, photographed, and matched to original order record.</li>
          <li><span class="box"></span><strong>Modification complete</strong> — before/after measurement card attached to cover.</li>
          <li><span class="box"></span><strong>Quality check passed</strong> — verified fit on shop template before outbound ship.</li>
          <li><span class="box"></span><strong>Outbound tracking sent</strong> to customer with ETA and thank-you note.</li>
          <li><span class="box"></span><strong>48-hour follow-up call completed</strong>, customer confirms proper fit.</li>
          <li><span class="box"></span><strong>CRM note updated</strong> and SKU fit-notes file reviewed for pattern.</li>
          <li><span class="box"></span><strong>reMarkable action item marked DONE</strong> in the action queue.</li>
        </ul>
      </div>

      <!-- EMAIL DRAFT -->
      <h2 class="nu-section-title" style="margin-top:48px;">Draft <span>RMA Email to Customer</span></h2>
      <p class="nu-section-subtitle">Ready for Aaron's review. CB should not send without Aaron's sign-off — this is customer-facing.</p>

      <div class="nu-email-draft">
        <div class="nu-email-head">
          From: Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;<br>
          To: [Customer Name] &lt;[customer@email]&gt;<br>
          <div class="subject">Subject: Your FlexPro Armor Cover — Let's Get the Fit Right</div>
        </div>
        <div class="nu-email-body">Name —

    Thank you for the call about your FlexPro Armor cover. You're right — it needs to fit your bucket exactly, and we're going to make that happen at no cost to you.

    Here's the plan:

    •  I'm emailing you a prepaid shipping label today. Drop the cover in any box, tape on the label, and hand it to FedEx or UPS.
    •  When it lands in our shop, I'll personally measure, modify, and re-check it against your bucket's dimensions before it goes back out.
    •  We ship it back to you expedited. Start to finish, plan on five business days.

    One quick favor — so I cut this right the first time, please send me the inside-top opening of your bucket (length × width) and the bucket depth. A photo with a tape measure across the opening is ideal.

    This is why FlexPro Armor is handmade in the USA — we can fix what we built. I'll have it back to you correct.

    Sincerely,

    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
        <div class="nu-email-meta">
          Internal note: CB — please queue this draft in Aaron's inbox for review before sending. Do not send directly.
        </div>
      </div>

      <!-- CTA -->
      <div class="nu-btn-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=Bucket%20Cover%20Recall%20%E2%80%94%20Ready%20to%20Send%20RMA" class="nu-btn-primary">Send RMA to Customer</a>
        <a href="tel:2055001343" class="nu-btn-secondary">Call Customer Now</a>
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
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a><br>
      130 Inverness Plaza #210, Birmingham, AL 35242
    </div>
  </footer>

</body>
</html>