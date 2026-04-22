<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — H2O Waterproofing Transfer Process &amp; Fees — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
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
      --nu-warning: #D9822B;
      --nu-success: #2E7D32;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-tagline: 'Playfair Display', Georgia, serif;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.6;
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
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
      opacity: 0.95;
    }
    .nu-logo-text {
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
    }

    /* CHEVRON TRANSITION (asymmetric, apex ~38%) */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* PAGE SHELL */
    .page-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 24px 60px;
      position: relative;
    }
    .page-wrap::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 520px; height: 520px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .page-wrap > * { position: relative; z-index: 1; }

    /* BREADCRUMB */
    .breadcrumb {
      font-size: 0.82rem;
      color: #6b7280;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 18px;
      font-weight: 700;
    }
    .breadcrumb span { color: var(--nu-blue); }

    /* ACTION ITEM CARD */
    .action-card {
      background: var(--nu-white);
      border-radius: 10px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 28px;
    }
    .action-card-header {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      padding: 22px 32px;
      display: flex;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
    }
    .action-id {
      display: inline-block;
      background: rgba(6, 208, 255, 0.18);
      color: var(--nu-cyan);
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border: 1px solid rgba(6, 208, 255, 0.4);
    }
    .action-priority {
      display: inline-block;
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .action-title {
      font-weight: 900;
      font-size: 1.7rem;
      line-height: 1.25;
      color: var(--nu-white);
      flex: 1 1 100%;
      margin-top: 6px;
    }
    .action-title .accent { color: var(--nu-cyan); }

    .action-body {
      padding: 32px;
    }

    .meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .meta-label {
      font-size: 0.72rem;
      font-weight: 900;
      color: #6b7280;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .meta-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    /* SECTION HEADERS */
    .section-title {
      font-weight: 900;
      font-size: 1.35rem;
      margin: 28px 0 14px;
      line-height: 1.3;
    }
    .section-title .first { color: var(--nu-blue); }
    .section-title .rest { color: var(--nu-dark-text); }

    .lead {
      font-size: 1.02rem;
      color: var(--nu-body-text);
      margin-bottom: 18px;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 8px;
    }
    .checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 4px;
      font-size: 0.98rem;
    }
    .checklist .box {
      width: 20px; height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      flex-shrink: 0;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist strong { color: var(--nu-dark-text); font-weight: 900; }

    /* INFO REQUESTED TABLE */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 20px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      overflow: hidden;
    }
    .info-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      text-align: left;
      padding: 12px 16px;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .info-table td {
      padding: 14px 16px;
      font-size: 0.94rem;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .info-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .info-table .q { font-weight: 700; color: var(--nu-dark-text); width: 42%; }
    .info-table .why { color: #555; font-style: italic; font-size: 0.88rem; }

    /* CONTACT PANEL */
    .contact-panel {
      background: linear-gradient(135deg, #f8fafd 0%, #eef5ff 100%);
      border: 1px solid #d6e4ff;
      border-radius: 8px;
      padding: 22px 26px;
      margin-bottom: 24px;
    }
    .contact-panel h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-blue);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .contact-row {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 8px 18px;
      font-size: 0.95rem;
    }
    .contact-row dt {
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .contact-row dd { color: var(--nu-body-text); }

    /* TALKING POINTS */
    .talking-points {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 20px 24px;
      margin-bottom: 24px;
    }
    .talking-points p { margin-bottom: 10px; }
    .talking-points p:last-child { margin-bottom: 0; }

    /* CALLOUT */
    .callout {
      background: #fff8e6;
      border: 1px solid #f0d27a;
      border-left: 5px solid var(--nu-accent-gold);
      border-radius: 6px;
      padding: 16px 20px;
      font-size: 0.94rem;
      color: #5a4a1a;
      margin: 20px 0;
    }
    .callout strong { color: var(--nu-dark-text); }

    /* NEXT STEPS BADGES */
    .next-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px;
      margin-top: 8px;
    }
    .step-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 18px 14px 14px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.9rem;
    }
    .step-badge .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px; height: 28px;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      border-radius: 50%;
      font-weight: 900;
      font-size: 0.9rem;
      margin-right: 12px;
      flex-shrink: 0;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 24px;
      text-align: center;
      margin-top: 40px;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
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
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .action-title { font-size: 1.3rem; }
      .action-body { padding: 22px; }
      .action-card-header { padding: 18px 22px; }
      .contact-row { grid-template-columns: 1fr; gap: 2px; }
      .contact-row dt { font-size: 0.8rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
      .step-badge { clip-path: none; border-radius: 6px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .action-card, .info-table, .contact-panel, .talking-points { box-shadow: none; }
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

  <!-- CHEVRON (asymmetric, apex ~38% from left) -->
  <div class="nu-chevron" aria-hidden="true">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- MAIN -->
  <main class="page-wrap">

    <div class="breadcrumb">Internal &nbsp;›&nbsp; Action Items &nbsp;›&nbsp; <span>Vendor Diligence</span></div>

    <!-- ACTION CARD -->
    <section class="action-card">
      <div class="action-card-header">
        <span class="action-id">Action · reMarkable</span>
        <span class="action-priority">Priority · Medium</span>
        <h1 class="action-title">Get <span class="accent">Transfer Process &amp; Fees</span> Information from H2O Waterproofing</h1>
      </div>

      <div class="action-body">

        <!-- META GRID -->
        <div class="meta-grid">
          <div class="meta-item">
            <div class="meta-label">Owner</div>
            <div class="meta-value">Aaron C. Norris</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Vendor</div>
            <div class="meta-value">H2O Waterproofing</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Captured</div>
            <div class="meta-value">reMarkable · 2026-04-22</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Target</div>
            <div class="meta-value">Response within 5 business days</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Status</div>
            <div class="meta-value" style="color: var(--nu-warning);">Open — awaiting outreach</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Channel</div>
            <div class="meta-value">Phone + Email (CC Caroline)</div>
          </div>
        </div>

        <!-- OBJECTIVE -->
        <h2 class="section-title"><span class="first">Objective.</span> <span class="rest">Understand the full transfer process and all associated fees from H2O Waterproofing.</span></h2>
        <p class="lead">
          Before committing any customer cover, warranty, or active shipment to a transfer involving H2O Waterproofing,
          Norris Utilities® needs a written, itemized explanation of how the transfer works and what it costs end-to-end.
          The goal of this action item is to obtain that information in writing from the appropriate contact at H2O Waterproofing,
          file it to the vendor record, and bring it back for an internal decision before any dollars or covers move.
        </p>

        <!-- CONTACT PANEL -->
        <div class="contact-panel">
          <h3>Vendor — H2O Waterproofing</h3>
          <dl class="contact-row">
            <dt>Primary Contact</dt><dd>To be confirmed on first call — ask for account / transfers department lead.</dd>
            <dt>Preferred Channel</dt><dd>Phone first (to confirm the right person), immediate written email follow-up to lock answers in writing.</dd>
            <dt>CC Internally</dt><dd>Caroline Butler (CB) — for filing under vendor record.</dd>
            <dt>Reference</dt><dd>Norris Utilities®, LLC · Aaron C. Norris · 205-500-1343 · acnorris@norrisutilities.com</dd>
          </dl>
        </div>

        <!-- CHECKLIST -->
        <h2 class="section-title"><span class="first">Execute.</span> <span class="rest">The four-step path to close this action.</span></h2>
        <ul class="checklist">
          <li><span class="box" aria-hidden="true"></span><div><strong>Step 1 — Make the call.</strong> Phone H2O Waterproofing. Identify yourself as Aaron C. Norris with Norris Utilities®. Ask to speak with whoever owns the transfer process (operations, account services, or owner).</div></li>
          <li><span class="box" aria-hidden="true"></span><div><strong>Step 2 — Ask the questions below.</strong> Work through the itemized list of questions. Take notes. Do not accept approximations — ask for exact dollar figures and exact lead times.</div></li>
          <li><span class="box" aria-hidden="true"></span><div><strong>Step 3 — Follow up in writing.</strong> Within the same business day, send a recap email to the contact asking them to confirm each answer in writing. CC Caroline Butler. Use Aaron's standard email voice.</div></li>
          <li><span class="box" aria-hidden="true"></span><div><strong>Step 4 — File and decide.</strong> Save the written response to the H2O Waterproofing vendor record. Review fees against current Norris Utilities® margin structure (FlexPro Armor 50%, shipping per Ben's formula) before quoting or committing to any customer.</div></li>
        </ul>

        <!-- INFO REQUESTED -->
        <h2 class="section-title"><span class="first">Request.</span> <span class="rest">The itemized information we need back from H2O Waterproofing.</span></h2>
        <table class="info-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>What We Need Answered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="q">Transfer scope</td>
              <td>What exactly does H2O Waterproofing transfer — the physical bucket cover, the waterproofing treatment, the warranty, or all three? <span class="why">Defines what we are actually buying or handing off.</span></td>
            </tr>
            <tr>
              <td class="q">Step-by-step process</td>
              <td>From the moment Norris Utilities® initiates a transfer to the moment it is complete, what are the sequential steps H2O Waterproofing performs? <span class="why">So Aaron can quote realistic customer timelines.</span></td>
            </tr>
            <tr>
              <td class="q">Who ships what, where</td>
              <td>Does the cover ship to H2O Waterproofing, back to Norris Utilities®, or direct to the end customer? Who pays inbound and outbound freight? <span class="why">Drives the final shipping line on the customer invoice.</span></td>
            </tr>
            <tr>
              <td class="q">Base transfer fee</td>
              <td>Exact dollar amount for the standard transfer. Flat fee or per-unit? <span class="why">The headline number Aaron must mark up or absorb.</span></td>
            </tr>
            <tr>
              <td class="q">Additional fees</td>
              <td>Itemize every add-on: inspection, cleaning, re-treatment, re-certification, expedite, handling, disposal, restocking, minimum-order surcharges. <span class="why">Hidden fees destroy margin if not captured up front.</span></td>
            </tr>
            <tr>
              <td class="q">Turnaround time</td>
              <td>Standard lead time in business days, expedited option and its cost, and typical queue length today. <span class="why">Customers ask "when will I get it back?" on every call.</span></td>
            </tr>
            <tr>
              <td class="q">Warranty handling</td>
              <td>Does a transfer void, preserve, extend, or reset any existing H2O Waterproofing warranty? Written warranty terms, please. <span class="why">Needed before Norris Utilities® can make any promise to the end customer.</span></td>
            </tr>
            <tr>
              <td class="q">Documentation</td>
              <td>What paperwork does H2O Waterproofing require from Norris Utilities® to initiate a transfer (bill of sale, serial number, prior invoice, etc.)? What paperwork do they return upon completion? <span class="why">So Caroline can build a repeatable intake checklist.</span></td>
            </tr>
            <tr>
              <td class="q">Payment terms</td>
              <td>Is payment due up front, on completion, or Net 30? Accepted payment methods? Any dealer/distributor pricing for Norris Utilities®? <span class="why">Determines cash flow impact and whether we qualify for a better rate.</span></td>
            </tr>
            <tr>
              <td class="q">Volume pricing</td>
              <td>Is there a break for 5, 10, or 25 units at a time? <span class="why">Relevant if we route multiple customers through a single pipeline.</span></td>
            </tr>
          </tbody>
        </table>

        <!-- TALKING POINTS -->
        <h2 class="section-title"><span class="first">Script.</span> <span class="rest">Opening language for the phone call — Aaron's voice.</span></h2>
        <div class="talking-points">
          <p><strong>Greeting (phone):</strong> "Hi — Aaron Norris with Norris Utilities out of Birmingham, Alabama. I'm a third-generation utility equipment dealer and I'm working through how your transfer program could fit into what we offer our customers. Who's the right person for me to talk to about your transfer process and fees?"</p>
          <p><strong>The ask:</strong> "I'd like to understand, in writing, exactly how the transfer works — start to finish — and every fee that hits on a typical job. That way I can quote customers cleanly and we don't have surprises on either side."</p>
          <p><strong>Close:</strong> "Appreciate it. I'll send a quick recap email today so we have everything on paper. Who's the best email address to send it to?"</p>
        </div>

        <!-- CALLOUT -->
        <div class="callout">
          <strong>Pricing guardrail.</strong> Any number H2O Waterproofing provides must be run through the Norris Utilities® margin model before it becomes a customer-facing quote. Customer Price = Cost ÷ (1 − Margin%). Shipping to customer uses Ben's formula: CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0). Do not verbally commit a customer price on the same call that H2O Waterproofing gives us their fees.
        </div>

        <!-- NEXT STEPS -->
        <h2 class="section-title"><span class="first">Next.</span> <span class="rest">Sequenced steps after the information is in hand.</span></h2>
        <div class="next-steps">
          <div class="step-badge"><span class="num">1</span>File written response to the H2O Waterproofing vendor record.</div>
          <div class="step-badge"><span class="num">2</span>Update the master tracker and close this action item.</div>
          <div class="step-badge"><span class="num">3</span>Decide: route customers to H2O or handle in-house.</div>
          <div class="step-badge"><span class="num">4</span>If routing — build the intake checklist with Caroline.</div>
        </div>

      </div>
    </section>

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