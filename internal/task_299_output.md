<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peace of Mind Maintenance Program — Verification Required — Norris Utilities®</title>
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
      --nu-warn-amber: #F59E0B;
      --nu-success: #10B981;
      --nu-danger: #DC2626;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033CC 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgba(255,255,255,0.92);
    }
    .nu-doc-type {
      display: inline-block;
      margin-top: 22px;
      padding: 6px 18px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 4px;
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    /* CHEVRON */
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
      background: var(--nu-light-gray);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 80px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-title-block h1 {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 10px;
    }
    .nu-title-block h1 .accent {
      color: var(--nu-blue);
    }
    .nu-title-block .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      font-size: 0.85rem;
      color: var(--nu-body-text);
      margin-top: 14px;
    }
    .nu-title-block .meta span strong {
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-right: 6px;
    }

    /* STATUS BANNER */
    .nu-status-banner {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 20px 26px;
      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
      border-left: 6px solid var(--nu-warn-amber);
      border-radius: 6px;
      margin-bottom: 36px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-status-banner .status-icon {
      width: 44px; height: 44px;
      flex-shrink: 0;
      background: var(--nu-warn-amber);
      color: var(--nu-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.5rem;
    }
    .nu-status-banner .status-text h3 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 2px;
      font-size: 1.05rem;
    }
    .nu-status-banner .status-text p {
      font-size: 0.92rem;
      color: #78350F;
    }

    /* SECTION */
    .nu-section {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-section-title {
      font-weight: 900;
      font-size: 1.35rem;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }
    .nu-section-title .num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    .nu-section p { margin-bottom: 12px; }
    .nu-section p:last-child { margin-bottom: 0; }

    /* FACT GRID */
    .nu-fact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 18px;
    }
    .nu-fact {
      padding: 18px 20px;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      border-radius: 0 6px 6px 0;
    }
    .nu-fact .label {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-fact .value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .nu-fact .sub {
      font-size: 0.82rem;
      color: var(--nu-body-text);
      font-weight: 400;
      margin-top: 2px;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      margin-top: 10px;
    }
    .nu-checklist li {
      display: flex;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist .box {
      flex-shrink: 0;
      width: 22px; height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
    }
    .nu-checklist .content strong {
      display: block;
      color: var(--nu-dark-text);
      font-weight: 700;
      margin-bottom: 2px;
    }
    .nu-checklist .content span {
      font-size: 0.9rem;
      color: var(--nu-body-text);
    }

    /* QUESTIONS TABLE */
    .nu-q-list { counter-reset: qnum; }
    .nu-q-item {
      counter-increment: qnum;
      position: relative;
      padding: 18px 20px 18px 64px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 4px solid var(--nu-blue);
    }
    .nu-q-item::before {
      content: "Q" counter(qnum);
      position: absolute;
      top: 18px;
      left: 18px;
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      letter-spacing: 0.05em;
    }
    .nu-q-item .q {
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .nu-q-item .hint {
      font-size: 0.86rem;
      color: var(--nu-body-text);
      font-style: italic;
    }

    /* DECISION MATRIX */
    .nu-matrix {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      font-size: 0.92rem;
    }
    .nu-matrix th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 12px 14px;
      text-align: left;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-matrix td {
      padding: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-matrix tr:last-child td { border-bottom: none; }
    .nu-matrix tr:nth-child(even) td { background: var(--nu-light-gray); }
    .nu-matrix .outcome {
      font-weight: 700;
      color: var(--nu-blue);
    }
    .nu-matrix .outcome.yes { color: var(--nu-success); }
    .nu-matrix .outcome.no { color: var(--nu-danger); }

    /* NEXT STEPS */
    .nu-next-steps {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 36px;
      border-radius: 8px;
      margin-top: 32px;
    }
    .nu-next-steps h2 {
      font-weight: 900;
      font-size: 1.4rem;
      margin-bottom: 18px;
      color: var(--nu-cyan);
    }
    .nu-next-steps ol {
      margin-left: 20px;
      padding-left: 10px;
    }
    .nu-next-steps li {
      margin-bottom: 10px;
      line-height: 1.6;
    }
    .nu-next-steps li::marker {
      color: var(--nu-cyan);
      font-weight: 900;
    }
    .nu-next-steps a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 30px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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
      font-weight: 700;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 40px 20px 60px; }
      .nu-title-block h1 { font-size: 1.6rem; }
      .nu-section { padding: 22px; }
      .nu-section-title { font-size: 1.15rem; }
      .nu-status-banner { flex-direction: column; align-items: flex-start; padding: 18px; }
      .nu-next-steps { padding: 24px; }
      .nu-matrix { font-size: 0.82rem; }
      .nu-matrix th, .nu-matrix td { padding: 10px 8px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-section { box-shadow: none; break-inside: avoid; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
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
    <div class="nu-doc-type">Internal Verification Brief</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <h1><span class="accent">Peace of Mind</span> Maintenance Program — Verification Required</h1>
        <div class="meta">
          <span><strong>Action Item:</strong> reMarkable capture</span>
          <span><strong>Date Captured:</strong> 2026-04-22</span>
          <span><strong>Owner:</strong> Aaron C. Norris</span>
          <span><strong>Status:</strong> Open — verification pending</span>
        </div>
      </div>

      <!-- STATUS BANNER -->
      <div class="nu-status-banner">
        <div class="status-icon">?</div>
        <div class="status-text">
          <h3>Verification Required: Is a Peace of Mind maintenance program required?</h3>
          <p>Determine whether a Peace of Mind (PoM) maintenance program is contractually, warranty-based, or customer-driven required for the affected equipment, and document the obligation before any further action.</p>
        </div>
      </div>

      <!-- SECTION 1: WHAT WE KNOW -->
      <div class="nu-section">
        <div class="nu-section-title">
          <span class="num">1</span>
          <span><span class="first">What</span> <span class="rest">we know (captured from reMarkable)</span></span>
        </div>
        <p>The action item reads: <em>"Verify if Peace of Mind maintenance program is required for …"</em> — the specific equipment, customer, or contract reference was truncated in the capture and must be reconstructed before the verification is complete.</p>
        <p>A "Peace of Mind" program in utility equipment typically refers to a bundled preventive-maintenance and inspection offering (commonly annual or semi-annual service, DOT inspections, dielectric testing for aerial devices, and vendor-certified parts). Each manufacturer wraps the label around slightly different deliverables.</p>

        <div class="nu-fact-grid">
          <div class="nu-fact">
            <div class="label">Capture Source</div>
            <div class="value">reMarkable Tablet</div>
            <div class="sub">Aaron's daily handwritten queue</div>
          </div>
          <div class="nu-fact">
            <div class="label">Capture Date</div>
            <div class="value">2026-04-22</div>
            <div class="sub">Synced via reMarkable pipeline</div>
          </div>
          <div class="nu-fact">
            <div class="label">Item Type</div>
            <div class="value">Verification Task</div>
            <div class="sub">Requires yes/no determination</div>
          </div>
          <div class="nu-fact">
            <div class="label">Blocking</div>
            <div class="value">Equipment/Customer Reference</div>
            <div class="sub">Truncated in reMarkable note</div>
          </div>
        </div>
      </div>

      <!-- SECTION 2: RECONSTRUCT THE "FOR …" -->
      <div class="nu-section">
        <div class="nu-section-title">
          <span class="num">2</span>
          <span><span class="first">Reconstruct</span> <span class="rest">the missing reference</span></span>
        </div>
        <p>The verification can't be answered until we recover what the program is "required for." Walk these sources in order:</p>

        <ul class="nu-checklist">
          <li>
            <div class="box"></div>
            <div class="content">
              <strong>Check original reMarkable page.</strong>
              <span>Pull the source notebook page — the "for …" continuation is likely written on the next line or margin.</span>
            </div>
          </li>
          <li>
            <div class="box"></div>
            <div class="content">
              <strong>Check Skylift PO SBA40i-LW / SBA47i-MH file (PO 1/12/26).</strong>
              <span>Skylift offers a factory maintenance plan — the 5 × SBA40i-LW + 1 × SBA47i-MH order totaling $1,091,402.50 is the most likely PoM candidate in the active pipeline.</span>
            </div>
          </li>
          <li>
            <div class="box"></div>
            <div class="content">
              <strong>Check Bay Shore Systems drill rig files.</strong>
              <span>BSS drill rigs frequently ship with an optional maintenance/inspection package. Confirm with Andy Barron if one was quoted.</span>
            </div>
          </li>
          <li>
            <div class="box"></div>
            <div class="content">
              <strong>Check Terex Commander open item (Bill Kugler).</strong>
              <span>Terex branded "Peace of Mind" service plans exist — verify if this opportunity is tied to one.</span>
            </div>
          </li>
          <li>
            <div class="box"></div>
            <div class="content">
              <strong>Check recent Telegram and Gmail threads for "peace of mind", "PM plan", "maintenance agreement".</strong>
              <span>Search last 45 days. A customer may have requested it directly.</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- SECTION 3: QUESTIONS TO ANSWER -->
      <div class="nu-section">
        <div class="nu-section-title">
          <span class="num">3</span>
          <span><span class="first">Questions</span> <span class="rest">to answer before closing this item</span></span>
        </div>

        <div class="nu-q-list">
          <div class="nu-q-item">
            <div class="q">Which piece of equipment or which customer account is this Peace of Mind program tied to?</div>
            <div class="hint">The answer defines whether this is a vendor program (Skylift/Terex/BSS) or a customer-facing Norris Utilities® offering.</div>
          </div>
          <div class="nu-q-item">
            <div class="q">Is the program required by contract, by warranty, or requested by the customer?</div>
            <div class="hint">Contract/warranty → mandatory. Customer-requested → discretionary, becomes a revenue line.</div>
          </div>
          <div class="nu-q-item">
            <div class="q">Who is the program administered by — OEM, third-party service, or Norris Utilities® directly?</div>
            <div class="hint">Determines who invoices and who performs the inspections.</div>
          </div>
          <div class="nu-q-item">
            <div class="q">What is the annual cost, and what margin applies?</div>
            <div class="hint">Equipment-related services typically follow the 12–15% equipment margin band.</div>
          </div>
          <div class="nu-q-item">
            <div class="q">Is there a start-of-service trigger (delivery, commissioning, PO date)?</div>
            <div class="hint">Skylift PO (1/12/26) delivery is ~3 weeks from ship — clock may already be running.</div>
          </div>
          <div class="nu-q-item">
            <div class="q">Does it require DOT inspection, dielectric testing, or crane annual certification?</div>
            <div class="hint">Aerial devices and cranes fall under ANSI/OSHA annual inspection regulations regardless of OEM program.</div>
          </div>
        </div>
      </div>

      <!-- SECTION 4: DECISION MATRIX -->
      <div class="nu-section">
        <div class="nu-section-title">
          <span class="num">4</span>
          <span><span class="first">Decision</span> <span class="rest">matrix — required vs. optional</span></span>
        </div>
        <p>Once the questions in Section 3 are answered, use this matrix to determine whether the PoM program is required:</p>

        <table class="nu-matrix">
          <thead>
            <tr>
              <th>Condition</th>
              <th>Outcome</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PO or contract explicitly includes PoM as a line item</td>
              <td class="outcome yes">REQUIRED</td>
              <td>Schedule program, add to invoicing calendar, notify customer of coverage start.</td>
            </tr>
            <tr>
              <td>OEM warranty voids without enrolled maintenance plan</td>
              <td class="outcome yes">REQUIRED</td>
              <td>Enroll equipment; document enrollment in QuickBooks note.</td>
            </tr>
            <tr>
              <td>Federal/state regulation (DOT, OSHA, ANSI) mandates annual inspection</td>
              <td class="outcome yes">REQUIRED</td>
              <td>Bundle mandatory inspection; confirm PoM is the vehicle (vs. standalone inspection).</td>
            </tr>
            <tr>
              <td>Customer verbally asked about the program; not in any contract</td>
              <td class="outcome">OPTIONAL — QUOTE IT</td>
              <td>Prepare quote at 12–15% margin; follow up for written approval.</td>
            </tr>
            <tr>
              <td>Neither contract, warranty, regulation, nor customer request applies</td>
              <td class="outcome no">NOT REQUIRED</td>
              <td>Document the determination; close the action item with reasoning.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- SECTION 5: CONTACTS -->
      <div class="nu-section">
        <div class="nu-section-title">
          <span class="num">5</span>
          <span><span class="first">Vendor</span> <span class="rest">contacts to confirm program terms</span></span>
        </div>
        <p>Depending on which equipment the program is tied to, these are the contacts to reach with the verification question:</p>

        <div class="nu-fact-grid">
          <div class="nu-fact">
            <div class="label">Skylift</div>
            <div class="value">Andrew Jarmoszuk</div>
            <div class="sub">Dale Williams · Nick Jarmoszuk Jr · Nick Gordon (pricing/specs)</div>
          </div>
          <div class="nu-fact">
            <div class="label">Bay Shore Systems</div>
            <div class="value">Andy Barron (primary)</div>
            <div class="sub">Herb Minatre (owner)</div>
          </div>
          <div class="nu-fact">
            <div class="label">Terex</div>
            <div class="value">Bill Kugler</div>
            <div class="sub">Active opportunity</div>
          </div>
          <div class="nu-fact">
            <div class="label">Boss Products</div>
            <div class="value">Troy Gongwer + Thayne Grove</div>
            <div class="sub">CC both on all correspondence</div>
          </div>
        </div>
      </div>

      <!-- SECTION 6: NEXT STEPS -->
      <div class="nu-next-steps">
        <h2>Next Steps — Aaron's Action Path</h2>
        <ol>
          <li><strong>Recover the "for …" reference.</strong> Pull the reMarkable page and reread the next line/margin. Set a 10-minute limit.</li>
          <li><strong>If still unclear</strong>, default to the most likely candidate: Skylift PO (5 × SBA40i-LW + 1 × SBA47i-MH, $1,091,402.50, dated 1/12/26).</li>
          <li><strong>Email Andrew Jarmoszuk at Skylift.</strong> Ask: "Is a Peace of Mind maintenance program required on the 6-unit order PO'd 1/12/26, or is it an optional add-on?" CC Nick Gordon for pricing/specs.</li>
          <li><strong>Run the decision matrix</strong> (Section 4) using the vendor's answer.</li>
          <li><strong>Document the determination</strong> in the open-items tracker with the answer, the date verified, and the source (vendor email, contract line, or regulation citation).</li>
          <li><strong>If required:</strong> add to invoicing calendar at appropriate margin. <strong>If optional:</strong> prepare a customer quote. <strong>If not required:</strong> close the item.</li>
          <li><strong>Close the loop</strong> — send Aaron a one-line Telegram confirmation that the item is resolved.</li>
        </ol>
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
  </footer>

</body>
</html>