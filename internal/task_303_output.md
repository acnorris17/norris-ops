<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory PO Follow-Up — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,700&display=swap" rel="stylesheet">
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
      --nu-status-red: #C8102E;
      --nu-status-amber: #E8A33D;
      --nu-status-green: #2D8B3F;
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
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 84px;
      height: 84px;
      margin: 0 auto 16px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* ══ CONTENT AREA ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .nu-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* ══ DOCUMENT TITLE ══ */
    .doc-title-block {
      text-align: center;
      margin-bottom: 48px;
      padding-bottom: 28px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .doc-eyebrow {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 18px;
      border-radius: 3px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .doc-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
      line-height: 1.15;
      margin-bottom: 12px;
    }
    .doc-title span { color: var(--nu-blue); }
    .doc-subtitle {
      font-size: 1.05rem;
      color: #5a5a6e;
      font-weight: 400;
      max-width: 720px;
      margin: 0 auto;
    }

    /* ══ STATUS BAR ══ */
    .status-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 40px;
    }
    .status-tile {
      background: var(--nu-white);
      border-left: 4px solid var(--nu-blue);
      padding: 18px 20px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    }
    .status-tile.amber { border-left-color: var(--nu-status-amber); }
    .status-tile.red { border-left-color: var(--nu-status-red); }
    .status-tile.green { border-left-color: var(--nu-status-green); }
    .status-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .status-value {
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--nu-dark-text);
    }
    .status-value small {
      display: block;
      font-size: 0.78rem;
      font-weight: 400;
      color: #666;
      margin-top: 3px;
    }

    /* ══ SECTION ══ */
    .nu-section {
      margin-bottom: 44px;
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 6px;
      letter-spacing: -0.005em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-rule {
      width: 60px;
      height: 3px;
      background: var(--nu-cyan);
      margin-bottom: 22px;
      border-radius: 2px;
    }

    /* ══ ACTION CARD ══ */
    .action-card {
      background: linear-gradient(135deg, #f6f9ff 0%, #eef4ff 100%);
      border: 1px solid #d6e2ff;
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 28px;
    }
    .action-card-head {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
    }
    .action-icon {
      width: 44px;
      height: 44px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .action-card-head h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
    }
    .action-card p {
      color: #424258;
      font-size: 0.98rem;
      margin-bottom: 8px;
    }
    .action-card p strong { color: var(--nu-dark-text); }

    /* ══ TABLE ══ */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      font-size: 0.92rem;
    }
    .nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #0a0e5c 100%);
      color: var(--nu-white);
    }
    .nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-table tbody tr:hover { background: #f9faff; }
    .nu-table td.col-num { font-weight: 700; color: var(--nu-blue); width: 48px; }

    .pill {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill-amber { background: #fff4dc; color: #8a5a00; }
    .pill-red { background: #fde0e3; color: #9a0c20; }
    .pill-green { background: #d8f1de; color: #1f6630; }
    .pill-blue { background: #dde6ff; color: #0a2080; }

    /* ══ CHECKLIST ══ */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 22px;
      margin-bottom: 10px;
      border-radius: 4px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
      transition: box-shadow 0.18s ease;
    }
    .checklist li:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
    .checklist .check-box {
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .checklist .check-content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 3px;
    }
    .checklist .check-content span {
      color: #555;
      font-size: 0.92rem;
    }

    /* ══ EMAIL DRAFT ══ */
    .email-draft {
      background: #fbfbfd;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 26px 30px;
      font-family: Georgia, 'Times New Roman', serif;
      color: #2a2a3a;
      line-height: 1.7;
    }
    .email-draft .email-meta {
      font-family: var(--font-primary);
      font-size: 0.85rem;
      color: #666;
      padding-bottom: 14px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .email-draft .email-meta strong { color: var(--nu-dark-text); width: 70px; display: inline-block; }
    .email-draft p { margin-bottom: 12px; padding-left: 18px; }
    .email-draft .email-greeting { padding-left: 0; }
    .email-draft .email-sig { padding-left: 0; margin-top: 18px; font-family: var(--font-primary); font-size: 0.9rem; line-height: 1.55; }

    /* ══ TWO-COL ══ */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 800px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* ══ INFO PANEL ══ */
    .info-panel {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 24px;
    }
    .info-panel h4 {
      font-weight: 900;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    .info-panel dl { display: grid; grid-template-columns: max-content 1fr; gap: 8px 18px; font-size: 0.92rem; }
    .info-panel dt { font-weight: 700; color: #555; }
    .info-panel dd { color: var(--nu-dark-text); }

    /* ══ NEXT STEPS BANNER ══ */
    .next-banner {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 26px 32px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      margin-top: 40px;
    }
    .next-banner-text strong {
      display: block;
      font-weight: 900;
      font-size: 1.15rem;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
    }
    .next-banner-text span { font-size: 0.95rem; opacity: 0.95; }
    .next-banner-cta {
      background: var(--nu-white);
      color: var(--nu-blue);
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 700;
      text-decoration: none;
      font-size: 0.92rem;
      letter-spacing: 0.04em;
      white-space: nowrap;
      transition: transform 0.15s ease;
    }
    .next-banner-cta:hover { transform: translateY(-2px); }

    /* ══ FOOTER ══ */
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
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.85; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.15);
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-wrap { padding: 40px 22px; }
      .doc-title { font-size: 1.7rem; }
      .nu-table { font-size: 0.82rem; }
      .nu-table th, .nu-table td { padding: 10px 10px; }
      .next-banner { flex-direction: column; align-items: flex-start; }
      .action-card { padding: 22px; }
      .email-draft { padding: 22px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .next-banner, .checklist li:hover { box-shadow: none; }
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

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- TITLE -->
      <div class="doc-title-block">
        <div class="doc-eyebrow">Action Item — Internal Operations</div>
        <h1 class="doc-title"><span>Inventory PO</span> Follow-Up</h1>
        <p class="doc-subtitle">Verify receipt and confirm delivery on inventory ordered against the most recent purchase order. Source: reMarkable action capture, 2026-04-25.</p>
      </div>

      <!-- STATUS -->
      <div class="status-bar">
        <div class="status-tile amber">
          <div class="status-label">Status</div>
          <div class="status-value">Open <small>Pending vendor confirmation</small></div>
        </div>
        <div class="status-tile">
          <div class="status-label">Owner</div>
          <div class="status-value">Aaron C. Norris <small>CEO — sole sales force</small></div>
        </div>
        <div class="status-tile">
          <div class="status-label">Captured</div>
          <div class="status-value">2026-04-25 <small>reMarkable action item</small></div>
        </div>
        <div class="status-tile red">
          <div class="status-label">Target Close</div>
          <div class="status-value">2026-04-29 <small>4 business days</small></div>
        </div>
      </div>

      <!-- WHAT THIS IS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">What</span> <span class="rest">This Action Covers</span></h2>
        <div class="nu-section-rule"></div>

        <div class="action-card">
          <div class="action-card-head">
            <div class="action-icon">!</div>
            <h3>Follow up on reaching inventory ordered on last PO</h3>
          </div>
          <p>This is a procurement-side follow-up. The most recent purchase order has been issued to a vendor; the next required step is to confirm production status, ship date, tracking, and arrival window so resale commitments and customer ETAs stay accurate.</p>
          <p><strong>Why it matters:</strong> Inventory in transit is revenue locked up. Each day a PO sits without confirmation is a day FlexPro Armor, Samson Rope, or Skylift orders downstream cannot be promised with confidence. Open POs without check-ins are how ETAs slip.</p>
          <p><strong>Definition of done:</strong> Vendor confirms current production / shipping status in writing, tracking numbers (or vessel / freight reference) are recorded against the PO, ETA is logged, and any affected customer quotes are re-confirmed.</p>
        </div>
      </section>

      <!-- WHICH POs -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Which</span> <span class="rest">Open Purchase Orders to Check</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Product Line</th>
              <th>Primary Contact (CC)</th>
              <th>Last Touch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-num">1</td>
              <td><strong>Skylift</strong></td>
              <td>5× SBA40i-LW + 1× SBA47i-MH (PO 1/12/26, $1,091,402.50)</td>
              <td>Andrew Jarmoszuk · Dale Williams · Nick Jarmoszuk Jr.</td>
              <td>Per Nick Gordon, ~3 weeks to delivery (ongoing)</td>
              <td><span class="pill pill-amber">Confirm Build</span></td>
            </tr>
            <tr>
              <td class="col-num">2</td>
              <td><strong>Boss Products</strong></td>
              <td>FlexPro Armor restock — verify SKU mix and ship date</td>
              <td>Troy Gongwer · Thayne Grove (CC both, always)</td>
              <td>Pending confirmation</td>
              <td><span class="pill pill-amber">Awaiting ETA</span></td>
            </tr>
            <tr>
              <td class="col-num">3</td>
              <td><strong>Samson Rope</strong></td>
              <td>Authorized distributor restock — confirm freight + tracking</td>
              <td>Donna Poll · Sarah Daniels (CC both, always)</td>
              <td>Pending confirmation</td>
              <td><span class="pill pill-amber">Awaiting ETA</span></td>
            </tr>
            <tr>
              <td class="col-num">4</td>
              <td><strong>Bay Shore Systems</strong></td>
              <td>Drill rig parts / accessories on most recent PO</td>
              <td>Andy Barron (primary) · Herb Minatre</td>
              <td>Pending confirmation</td>
              <td><span class="pill pill-blue">Verify PO #</span></td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top:14px; font-size:0.85rem; color:#666; font-style:italic;">If any vendor's most recent PO is not listed above, append it before closing this action item. The intent is "every open vendor PO has a confirmed status," not "this exact list."</p>
      </section>

      <!-- CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Step-by-Step</span> <span class="rest">Follow-Up Checklist</span></h2>
        <div class="nu-section-rule"></div>

        <ul class="checklist">
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 1 — Pull the PO from QuickBooks</strong>
              <span>Confirm PO number, line items, dollar amount, ship-to address, and the date the PO was issued. Print or save a PDF for the file.</span>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 2 — Identify the vendor contact</strong>
              <span>Use the primary listed in the table above. Always CC both Boss Products contacts (Troy + Thayne) and both Samson contacts (Donna + Sarah) — that is the rule.</span>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 3 — Send the follow-up email</strong>
              <span>Use the draft below. Reference the PO number, ask for production status, ship date, tracking, and ETA. Do not bury the ask — lead with it.</span>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 4 — Log the response</strong>
              <span>When the vendor replies, capture the ETA and any tracking numbers in the PO record and on the master tracker. Update affected customer quotes the same day.</span>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 5 — Re-confirm with downstream customers</strong>
              <span>If the vendor ETA changed any committed customer date, send a courtesy update before the customer asks. Keeping promises means moving information faster than the gap.</span>
            </div>
          </li>
          <li>
            <div class="check-box"></div>
            <div class="check-content">
              <strong>Step 6 — Close the action item</strong>
              <span>Mark complete on the master tracker only after every open PO has a confirmed status and every affected customer has been notified.</span>
            </div>
          </li>
        </ul>
      </section>

      <!-- EMAIL DRAFT + INFO PANEL -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Reusable</span> <span class="rest">Vendor Follow-Up Email</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="email-draft">
            <div class="email-meta">
              <div><strong>To:</strong> [Vendor primary contact]</div>
              <div><strong>CC:</strong> [Secondary contact per vendor rule]</div>
              <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
              <div><strong>Subject:</strong> PO [number] — Status &amp; ETA Check-In</div>
            </div>
            <p class="email-greeting">[Name] —</p>
            <p>Following up on PO [number], issued [date] for [brief line summary].</p>
            <p>Could you please confirm:</p>
            <p>
              • Current production / order status<br>
              • Confirmed ship date<br>
              • Tracking or freight reference once it leaves<br>
              • Best ETA at our ship-to address
            </p>
            <p>I have customer commitments tied to this inventory and want to keep their dates accurate. If anything has slipped, I would rather know now and adjust on this end than discover it at the dock.</p>
            <p>Appreciate y'all.</p>
            <p class="email-sig">
              Sincerely,<br><br>
              Aaron C. Norris<br>
              Founder &amp; CEO<br>
              Norris Utilities, LLC<br>
              Cell: 205-500-1343<br>
              acnorris@norrisutilities.com
            </p>
          </div>

          <div>
            <div class="info-panel" style="margin-bottom:18px;">
              <h4>Voice Reminders</h4>
              <dl>
                <dt>Greeting</dt><dd>"Name —" (em dash, no comma)</dd>
                <dt>Bullets</dt><dd>Use • not -</dd>
                <dt>Tone</dt><dd>Direct, warm, confident — never pushy</dd>
                <dt>Lead</dt><dd>Open with the ask, not the windup</dd>
                <dt>Close</dt><dd>"Sincerely," then signature block</dd>
                <dt>Avoid</dt><dd>"just", "touch base", "leverage", emojis</dd>
              </dl>
            </div>

            <div class="info-panel">
              <h4>CC Rules (Non-Negotiable)</h4>
              <dl>
                <dt>Boss</dt><dd>Troy Gongwer + Thayne Grove (both)</dd>
                <dt>Samson</dt><dd>Donna Poll + Sarah Daniels (both)</dd>
                <dt>Skylift</dt><dd>Andrew Jarmoszuk · Dale Williams · Nick Jr.</dd>
                <dt>BSS</dt><dd>Andy Barron primary, Herb Minatre owner</dd>
                <dt>Irby</dt><dd>Jared Lemoine (Wiggs &amp; Argyle retired April 2026)</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <!-- DOWNSTREAM IMPACT -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Downstream</span> <span class="rest">Customers Who May Be Waiting</span></h2>
        <div class="nu-section-rule"></div>

        <table class="nu-table">
          <thead>
            <tr>
              <th>Customer / Account</th>
              <th>Tied To</th>
              <th>Risk if PO Slips</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Coy Crosby — Dominion Energy</strong></td>
              <td>FlexPro Armor / open Crosby orders</td>
              <td>Re-quote pressure if ship date moves</td>
              <td><span class="pill pill-blue">Notify same-day on ETA change</span></td>
            </tr>
            <tr>
              <td><strong>Bill Kugler — Terex</strong></td>
              <td>Highest-priority active deal in pipeline</td>
              <td>Loss of momentum on top opportunity</td>
              <td><span class="pill pill-blue">Personal call if material slip</span></td>
            </tr>
            <tr>
              <td><strong>Chain Electric reconciliation</strong></td>
              <td>Resolved order set — verify nothing reopened</td>
              <td>Reopen risk on closed reconciliation</td>
              <td><span class="pill pill-green">Spot-check only</span></td>
            </tr>
            <tr>
              <td><strong>Open Skylift territory orders</strong></td>
              <td>Andrew Jarmoszuk · Dale Williams · Nick Jr.</td>
              <td>Build slot risk on long-lead units</td>
              <td><span class="pill pill-amber">Confirm build week</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- LOGGING -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Where</span> <span class="rest">to Record the Outcome</span></h2>
        <div class="nu-section-rule"></div>

        <div class="two-col">
          <div class="info-panel">
            <h4>Master Tracker</h4>
            <dl>
              <dt>File</dt><dd>master_tracker (operations)</dd>
              <dt>Update</dt><dd>PO row: status, ETA, tracking, contact, last-touch date</dd>
              <dt>Promote</dt><dd>If material to revenue, mirror to deals-pipeline</dd>
            </dl>
          </div>
          <div class="info-panel">
            <h4>QuickBooks &amp; Files</h4>
            <dl>
              <dt>QB</dt><dd>Attach vendor confirmation to PO record</dd>
              <dt>Repo</dt><dd>~/norris-ops/internal/ — push after every change (permanent rule)</dd>
              <dt>Telegram</dt><dd>Alert if any vendor non-response &gt; 7 days</dd>
            </dl>
          </div>
        </div>
      </section>

      <!-- NEXT BANNER -->
      <div class="next-banner">
        <div class="next-banner-text">
          <strong>Next physical step</strong>
          <span>Open QuickBooks → Vendors → All Open Purchase Orders → start with the oldest unconfirmed PO and work the email script above.</span>
        </div>
        <a href="mailto:acnorris@norrisutilities.com?subject=PO%20Follow-Up%20Status%20Update" class="next-banner-cta">LOG STATUS →</a>
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
    <div class="nu-footer-meta">
      Internal Operations Document · Inventory PO Follow-Up · Generated 2026-04-25 · Phoenix Icon® registered trademark
    </div>
  </footer>

</body>
</html>