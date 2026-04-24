<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inventory PO Follow-Up — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --nu-blue: #0000FF;
      --nu-blue-deep: #0033CC;
      --nu-cyan: #06D0FF;
      --nu-navy: #000033;
      --nu-white: #FFFFFF;
      --nu-light-gray: #F5F5F7;
      --nu-medium-gray: #E8E8EC;
      --nu-dark-text: #1A1A2E;
      --nu-body-text: #333333;
      --nu-alert-red: #D72638;
      --nu-warn-amber: #F4A83C;
      --nu-ok-green: #2E9E5B;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, var(--nu-blue-deep) 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 60px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 280px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 80px);
      z-index: 1;
      opacity: 0.6;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-logo-text {
      font-weight: 900;
      font-size: 3.4rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-top: 4px;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

    /* ══ WHITE CHEVRON ══ */
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
    .nu-content-wrap {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* ══ PAGE TITLE ══ */
    .page-title {
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .page-title span { color: var(--nu-blue-deep); }
    .page-sub {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 36px;
      font-weight: 400;
    }

    /* ══ PRIORITY BANNER ══ */
    .priority-banner {
      background: linear-gradient(135deg, #fff4f1 0%, #ffe8e0 100%);
      border-left: 6px solid var(--nu-alert-red);
      padding: 20px 24px;
      margin-bottom: 40px;
      border-radius: 6px;
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .priority-banner .flag {
      font-size: 1.5rem;
      flex-shrink: 0;
      color: var(--nu-alert-red);
      font-weight: 900;
    }
    .priority-banner .label {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-alert-red);
      margin-bottom: 4px;
    }
    .priority-banner .text {
      font-size: 1rem;
      color: var(--nu-dark-text);
      font-weight: 700;
    }

    /* ══ SECTION HEADERS ══ */
    .section {
      margin-bottom: 44px;
    }
    .section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .section-title span:first-child { color: var(--nu-blue-deep); }
    .section-title span:last-child { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ STATUS CHIPS ══ */
    .chip {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .chip-open { background: #fff3d6; color: #8a5a00; }
    .chip-urgent { background: #ffe0e0; color: var(--nu-alert-red); }
    .chip-pending { background: #e0ecff; color: var(--nu-blue-deep); }

    /* ══ ACTION CARD GRID ══ */
    .action-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .action-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue-deep);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .action-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .action-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .action-card p {
      font-size: 0.92rem;
      color: #555;
      margin-bottom: 10px;
    }
    .action-card .meta {
      font-size: 0.8rem;
      color: #888;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    /* ══ INFO TABLE ══ */
    .info-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .info-table th {
      background: var(--nu-blue-deep);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 18px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .info-table td {
      padding: 14px 18px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
      vertical-align: top;
    }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table tr:nth-child(even) td { background: #fafafc; }
    .info-table .label-cell {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 35%;
    }

    /* ══ TIMELINE ══ */
    .timeline {
      list-style: none;
      padding: 0;
      position: relative;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 8px; bottom: 8px;
      width: 2px;
      background: var(--nu-medium-gray);
    }
    .timeline li {
      position: relative;
      padding: 0 0 22px 40px;
    }
    .timeline li::before {
      content: '';
      position: absolute;
      left: 6px; top: 6px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: var(--nu-cyan);
      border: 3px solid var(--nu-white);
      box-shadow: 0 0 0 2px var(--nu-blue-deep);
    }
    .timeline li.active::before { background: var(--nu-alert-red); box-shadow: 0 0 0 2px var(--nu-alert-red); }
    .timeline .t-date {
      font-weight: 900;
      color: var(--nu-blue-deep);
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .timeline .t-text {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
    }

    /* ══ CTA ══ */
    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    .btn-primary, .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
    }
    .btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
    }
    .btn-primary:hover {
      background: var(--nu-blue-deep);
      transform: translateY(-1px);
      box-shadow: 0 6px 14px rgba(0,0,255,0.25);
    }
    .btn-secondary {
      background: transparent;
      color: var(--nu-blue-deep);
      border: 2px solid var(--nu-blue-deep);
    }
    .btn-secondary:hover {
      background: var(--nu-blue-deep);
      color: var(--nu-white);
    }

    /* ══ DRAFT EMAIL BOX ══ */
    .email-draft {
      background: #fafafc;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 28px 32px;
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      line-height: 1.7;
    }
    .email-draft .hdr {
      font-size: 0.82rem;
      color: #777;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .email-draft .hdr div { margin-bottom: 3px; }
    .email-draft p { margin-bottom: 14px; text-indent: 1.5em; }
    .email-draft p.no-indent { text-indent: 0; }
    .email-draft ul {
      list-style: none;
      padding-left: 1.5em;
      margin-bottom: 14px;
    }
    .email-draft ul li::before {
      content: '•  ';
      color: var(--nu-blue-deep);
      font-weight: 900;
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
      font-size: 1.3rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
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

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-wrap { padding: 40px 22px 60px; }
      .page-title { font-size: 1.7rem; }
      .info-table th, .info-table td { padding: 10px 12px; font-size: 0.88rem; }
      .info-table .label-cell { width: 40%; }
      .email-draft { padding: 20px 22px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .cta-row { display: none; }
      .nu-footer { -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- WHITE CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-wrap">

      <div class="page-title"><span>Inventory PO</span> Follow-Up</div>
      <div class="page-sub">reMarkable Action Item &middot; Opened 2026-04-23 &middot; Norris Utilities®, LLC — Birmingham, AL</div>

      <div class="priority-banner">
        <div class="flag">!</div>
        <div>
          <div class="label">Urgent — Awaiting Supplier Response</div>
          <div class="text">Aaron is anxiously waiting on the last inventory PO. Status check owed today. Do not close until shipment, tracking, and ETA are confirmed in writing.</div>
        </div>
      </div>

      <!-- SECTION: ORDER SNAPSHOT -->
      <section class="section">
        <div class="section-title"><span>Order</span> <span>Snapshot</span></div>
        <table class="info-table">
          <tbody>
            <tr>
              <td class="label-cell">Action Item</td>
              <td>Follow up on inventory order from last PO — anxiously waiting for update</td>
            </tr>
            <tr>
              <td class="label-cell">Source</td>
              <td>reMarkable notebook (Aaron's handwritten queue)</td>
            </tr>
            <tr>
              <td class="label-cell">Status</td>
              <td><span class="chip chip-urgent">Open &middot; Urgent</span></td>
            </tr>
            <tr>
              <td class="label-cell">Owner</td>
              <td>Aaron C. Norris, Founder &amp; CEO</td>
            </tr>
            <tr>
              <td class="label-cell">Support</td>
              <td>Caroline Butler (CB) — customer-facing drafts; Aaron reviews before send</td>
            </tr>
            <tr>
              <td class="label-cell">Opened</td>
              <td>2026-04-23</td>
            </tr>
            <tr>
              <td class="label-cell">Next Check-In</td>
              <td>End of business 2026-04-23 — escalate to phone call if no email reply</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: WHAT NEEDS TO HAPPEN -->
      <section class="section">
        <div class="section-title"><span>What</span> <span>Needs To Happen Today</span></div>
        <div class="action-grid">

          <div class="action-card">
            <h3>1. Pull the PO Record</h3>
            <p>Open the most recent inventory PO in QuickBooks. Confirm PO number, supplier, line items, quantities, unit cost, and the date the PO was issued. Cross-reference against the master tracker.</p>
            <span class="meta">Owner: Aaron &middot; 5 min</span>
          </div>

          <div class="action-card">
            <h3>2. Check the Supplier Thread</h3>
            <p>Search Gmail for the PO number. Pull the last exchange with the supplier rep. Note the date of last contact, what was promised, and what is still outstanding.</p>
            <span class="meta">Owner: Aaron &middot; 5 min</span>
          </div>

          <div class="action-card">
            <h3>3. Send the Follow-Up Email</h3>
            <p>Use the draft below. CC Caroline Butler so she can log the response. For Boss Products CC both Troy Gongwer and Thayne Grove. For Samson Rope CC both Donna Poll and Sarah Daniels.</p>
            <span class="meta">Owner: Aaron &middot; 5 min</span>
          </div>

          <div class="action-card">
            <h3>4. Log the Follow-Up</h3>
            <p>Update the master tracker with: date of follow-up, who was contacted, what was asked. Status stays Open until tracking number or revised ETA is received.</p>
            <span class="meta">Owner: CB &middot; 3 min</span>
          </div>

          <div class="action-card">
            <h3>5. Phone Escalation If Silent</h3>
            <p>If no reply by end of business, call the supplier rep directly. Aaron's cell is 205-500-1343 — use it to return their call. Document the verbal reply in the tracker the same day.</p>
            <span class="meta">Owner: Aaron &middot; 10 min</span>
          </div>

          <div class="action-card">
            <h3>6. Confirm Shipping &amp; ETA</h3>
            <p>Do not close the item until you have: (a) carrier, (b) tracking number, (c) confirmed ship date, (d) delivery window. Record all four on the PO in QuickBooks.</p>
            <span class="meta">Owner: Aaron &middot; at reply</span>
          </div>

        </div>
      </section>

      <!-- SECTION: EMAIL DRAFT -->
      <section class="section">
        <div class="section-title"><span>Draft</span> <span>Follow-Up Email</span></div>
        <div class="email-draft">
          <div class="hdr">
            <div><strong>To:</strong> [Supplier contact — use primary rep on file]</div>
            <div><strong>CC:</strong> Caroline Butler &lt;caroline@norrisutilities.com&gt; &nbsp;|&nbsp; Secondary rep if Boss Products or Samson Rope</div>
            <div><strong>Subject:</strong> Status Check — Norris Utilities PO [insert PO #]</div>
          </div>

          <p class="no-indent">[Rep first name] —</p>

          <p>Checking in on our last purchase order — PO number [insert PO #], placed [insert date]. I want to confirm where we stand so I can plan around the inbound inventory.</p>

          <p class="no-indent">A few specifics I need back from you:</p>
          <ul>
            <li>Has the order shipped? If so, carrier and tracking number.</li>
            <li>If not yet shipped, target ship date and reason for the delay.</li>
            <li>Confirmed delivery window to our Birmingham receiving address.</li>
            <li>Any line items short-shipped or on backorder.</li>
          </ul>

          <p>I have customer commitments tied to this inventory, so a same-day reply would be advantageous. If it is easier to cover by phone, my cell is 205-500-1343 — call or text anytime.</p>

          <p>Appreciate you getting back to me today.</p>

          <p class="no-indent">Sincerely,</p>
          <p class="no-indent" style="margin-left: 1.5em;">
            Aaron C. Norris<br>
            Founder &amp; CEO<br>
            Norris Utilities, LLC<br>
            Cell: 205-500-1343<br>
            acnorris@norrisutilities.com
          </p>
        </div>

        <div class="cta-row">
          <a class="btn-primary" href="mailto:?cc=caroline@norrisutilities.com&subject=Status%20Check%20%E2%80%94%20Norris%20Utilities%20PO%20%5Binsert%20PO%20%23%5D">Open in Mail Client</a>
          <a class="btn-secondary" href="tel:2055001343">Call From 205-500-1343</a>
        </div>
      </section>

      <!-- SECTION: TIMELINE -->
      <section class="section">
        <div class="section-title"><span>Follow-Up</span> <span>Timeline</span></div>
        <ul class="timeline">
          <li class="active">
            <div class="t-date">2026-04-23 — Today</div>
            <div class="t-text">reMarkable action item opened. Aaron is anxiously waiting on update. Draft email queued, awaiting send.</div>
          </li>
          <li>
            <div class="t-date">2026-04-23 — End of Business</div>
            <div class="t-text">If no email reply, Aaron places direct phone call to supplier rep and documents verbal response.</div>
          </li>
          <li>
            <div class="t-date">2026-04-24 — Morning</div>
            <div class="t-text">CB confirms tracking number received, updates master tracker, enters expected delivery date in QuickBooks PO record.</div>
          </li>
          <li>
            <div class="t-date">On Delivery</div>
            <div class="t-text">Receiving verifies line items and quantities against PO. Any short-ship or damage documented and sent back to supplier same day.</div>
          </li>
          <li>
            <div class="t-date">Post-Delivery</div>
            <div class="t-text">Inventory counted into stock. PO marked closed in QuickBooks. Action item removed from reMarkable queue.</div>
          </li>
        </ul>
      </section>

      <!-- SECTION: SUPPLIER CC RULES -->
      <section class="section">
        <div class="section-title"><span>Supplier</span> <span>CC Rules</span></div>
        <table class="info-table">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Primary Contact</th>
              <th>Always CC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Boss Products</td>
              <td>Troy Gongwer</td>
              <td>Thayne Grove (both always)</td>
            </tr>
            <tr>
              <td class="label-cell">Samson Rope</td>
              <td>Donna Poll</td>
              <td>Sarah Daniels (both always)</td>
            </tr>
            <tr>
              <td class="label-cell">Skylift</td>
              <td>Nick Jarmoszuk Jr or Andrew Jarmoszuk</td>
              <td>Dale Williams; Nick Gordon for pricing/specs</td>
            </tr>
            <tr>
              <td class="label-cell">Irby Construction</td>
              <td>Jared Lemoine (new primary)</td>
              <td>Gary Wiggs and Scott Argyle are retired — do not CC</td>
            </tr>
            <tr>
              <td class="label-cell">Bay Shore Systems</td>
              <td>Andy Barron</td>
              <td>Herb Minatre (owner) on major issues only</td>
            </tr>
            <tr>
              <td class="label-cell">FlexPro Armor (internal build)</td>
              <td>Aaron direct</td>
              <td>CB on customer-facing communications</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- SECTION: CLOSE-OUT CHECKLIST -->
      <section class="section">
        <div class="section-title"><span>Close-Out</span> <span>Checklist</span></div>
        <table class="info-table">
          <tbody>
            <tr>
              <td class="label-cell">Tracking number on file</td>
              <td><span class="chip chip-pending">Pending</span></td>
            </tr>
            <tr>
              <td class="label-cell">Ship date confirmed in writing</td>
              <td><span class="chip chip-pending">Pending</span></td>
            </tr>
            <tr>
              <td class="label-cell">Delivery window recorded</td>
              <td><span class="chip chip-pending">Pending</span></td>
            </tr>
            <tr>
              <td class="label-cell">Backorders flagged (if any)</td>
              <td><span class="chip chip-pending">Pending</span></td>
            </tr>
            <tr>
              <td class="label-cell">Master tracker updated</td>
              <td><span class="chip chip-open">Open</span></td>
            </tr>
            <tr>
              <td class="label-cell">reMarkable item marked complete</td>
              <td><span class="chip chip-open">Open</span></td>
            </tr>
          </tbody>
        </table>
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