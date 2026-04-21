<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Follow-Up: Outstanding PO Inventory Status — Norris Utilities®</title>
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
      --nu-alert-red: #C9302C;
      --nu-warn-amber: #D97706;
      --nu-success-green: #047857;
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px);
      z-index: 1;
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }

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

    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      padding: 0 0 60px;
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px;
    }

    .task-banner {
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 100%);
      color: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 24px;
      box-shadow: 0 6px 20px rgba(0,0,51,0.15);
    }
    .task-banner-icon {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--nu-navy);
    }
    .task-banner-content h1 {
      font-weight: 900;
      font-size: 1.6rem;
      margin-bottom: 6px;
      letter-spacing: 0.01em;
    }
    .task-banner-content p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.85);
      font-weight: 400;
    }
    .task-banner-meta {
      margin-left: auto;
      text-align: right;
      font-size: 0.82rem;
      color: rgba(255,255,255,0.75);
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 16px;
      letter-spacing: 0.01em;
    }
    .nu-section-title span {
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .section-sub {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 22px;
      font-weight: 400;
    }

    section.block {
      margin-bottom: 40px;
    }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .nu-card.accent-left {
      border-left: 4px solid var(--nu-cyan);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .nu-card p {
      font-size: 0.95rem;
      color: var(--nu-body-text);
      margin-bottom: 8px;
    }
    .nu-card p:last-child { margin-bottom: 0; }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .pill {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .pill-open { background: #FEF3C7; color: #92400E; }
    .pill-action { background: #DBEAFE; color: #1E40AF; }
    .pill-critical { background: #FEE2E2; color: #991B1B; }

    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 14px 16px 14px 48px;
      position: relative;
      background: var(--nu-light-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 17px;
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
      display: block;
      margin-bottom: 2px;
    }
    .checklist li .due {
      display: inline-block;
      font-size: 0.78rem;
      color: var(--nu-alert-red);
      font-weight: 700;
      margin-top: 4px;
    }

    .email-draft {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-dark-text);
      white-space: pre-wrap;
    }
    .email-draft .email-header {
      font-family: var(--font-primary);
      font-size: 0.82rem;
      color: #555;
      padding-bottom: 12px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      white-space: normal;
    }
    .email-draft .email-header div { margin-bottom: 3px; }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .data-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 14px 16px;
      text-align: left;
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .data-table td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.93rem;
    }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:hover { background: var(--nu-light-gray); }

    .next-step-box {
      background: linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%);
      border-left: 4px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 6px;
      margin-top: 20px;
    }
    .next-step-box strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.9rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.4em; }
      .container { padding: 30px 20px; }
      .task-banner { flex-direction: column; text-align: center; }
      .task-banner-meta { margin-left: 0; text-align: center; }
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .data-table th, .data-table td { padding: 10px 8px; font-size: 0.85rem; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <main class="nu-content-area">
    <div class="container">

      <div class="task-banner">
        <div class="task-banner-icon">!</div>
        <div class="task-banner-content">
          <h1>Follow-Up: Last PO — Inventory Status</h1>
          <p>reMarkable action item. Customer is anxiously waiting on inventory arrival — contact supplier today to confirm timing.</p>
        </div>
        <div class="task-banner-meta">
          Source: reMarkable<br>
          Logged: 2026-04-20<br>
          Status: Open
        </div>
      </div>

      <section class="block">
        <h2 class="nu-section-title">Task <span>Summary</span></h2>
        <p class="section-sub">What Aaron wrote on the reMarkable, and what needs to happen next.</p>

        <div class="nu-card accent-left">
          <h3>Verbatim Action Item</h3>
          <p style="font-style: italic; color: #444;">"Follow up on order from last PO — anxiously waiting on inventory."</p>
          <p style="margin-top: 14px;">
            <span class="pill pill-action">Action Required</span>
            <span class="pill pill-open" style="margin-left: 6px;">Open</span>
          </p>
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Confirm <span>Which PO</span></h2>
        <p class="section-sub">Before any email goes out, confirm which supplier PO this refers to. Two active candidates below — verify against Aaron's purchase log.</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Candidate PO</th>
              <th>Supplier</th>
              <th>Product Line</th>
              <th>Status Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Skylift PO (issued 2026-01-12)</td>
              <td>Skylift, Inc.</td>
              <td>5× SBA40i-LW + 1× SBA47i-MH</td>
              <td>Confirm ETA with Nick Gordon</td>
            </tr>
            <tr>
              <td>FlexPro Armor restock</td>
              <td>FlexPro Armor (Dan)</td>
              <td>NU-BC-2851, NU-BC-2834 inventory</td>
              <td>Confirm production + ship date</td>
            </tr>
            <tr>
              <td>Samson Rope standing order</td>
              <td>Samson Rope (Donna/Sarah)</td>
              <td>Rope inventory replenishment</td>
              <td>Confirm backorder status</td>
            </tr>
          </tbody>
        </table>

        <div class="next-step-box">
          <strong>Next Step</strong>
          Aaron to confirm which of the above POs this follow-up targets. Once confirmed, send the matching email draft below.
        </div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Action <span>Checklist</span></h2>
        <p class="section-sub">Complete in order. Each step unblocks the next.</p>

        <ul class="checklist">
          <li>
            <strong>1. Identify the PO</strong>
            Cross-reference "last PO" against Aaron's purchase log. Confirm supplier, PO number, and date issued.
            <span class="due">Today — blocks everything below</span>
          </li>
          <li>
            <strong>2. Pull current status from supplier</strong>
            Call or email primary contact. Ask: production complete? Shipped? Tracking number? Revised ETA?
          </li>
          <li>
            <strong>3. Update tracker</strong>
            Log confirmed ETA into master_tracker. Flag if delivery has slipped past original promise date.
          </li>
          <li>
            <strong>4. Notify the end customer</strong>
            If an end customer is waiting, send a brief status update with the confirmed ETA so they are not in the dark.
          </li>
          <li>
            <strong>5. Close the reMarkable item</strong>
            Check off the action item once ETA is confirmed and customer has been notified.
          </li>
        </ul>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Email <span>Draft — Skylift</span></h2>
        <p class="section-sub">Use this if the PO is the Skylift order. Send to Nick Gordon; CC Andrew Jarmoszuk and Dale Williams.</p>

        <div class="email-draft"><div class="email-header">
          <div><strong>To:</strong> Nick Gordon &lt;nick@skylift.com&gt;</div>
          <div><strong>CC:</strong> Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Status check — Skylift PO (1/12/26) — 5× SBA40i-LW + 1× SBA47i-MH</div>
        </div>Nick —

    Checking in on the PO we issued January 12 for five SBA40i-LW and one SBA47i-MH. I want to make sure we have the latest build schedule and ETA in hand.

    A couple of specifics I need to confirm on my end:

    • Current build stage for each of the six units
    • Target ship date (or revised date if it has moved)
    • Any pending spec items or approvals you need from me to keep the line moving

    My customer is actively planning around delivery, so the sooner I can give them firm dates the better. If you can reply with an updated schedule by end of week, I'd appreciate it.

    Thanks for keeping this moving, Nick.

Sincerely,
    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Email <span>Draft — FlexPro Armor</span></h2>
        <p class="section-sub">Use this if the PO is a FlexPro Armor restock order. FlexPro Armor is handmade in the USA — never append ® and never call it "FlexPro Armor Guard."</p>

        <div class="email-draft"><div class="email-header">
          <div><strong>To:</strong> FlexPro Armor Production</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Status check — FlexPro Armor PO — inventory needed</div>
        </div>Dan —

    Following up on our last PO for FlexPro Armor inventory. I have customers lined up and need firm ship dates so I can commit delivery without giving them a moving target.

    What I need confirmed:

    • Production status for each SKU on the PO (NU-BC-2851, NU-BC-2834, combos)
    • Expected ship date out of your facility
    • Tracking numbers the moment they exist

    If anything on the PO has shifted quantity or timing, let me know now rather than after it ships. Easier to plan around a real date than to reset a customer expectation twice.

    Appreciate the work, Dan. These have been landing on customer trucks and the feedback continues to be strong.

Sincerely,
    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Email <span>Draft — Samson Rope</span></h2>
        <p class="section-sub">Use this if the PO is a Samson Rope order. Always CC both Donna Poll and Sarah Daniels.</p>

        <div class="email-draft"><div class="email-header">
          <div><strong>To:</strong> Donna Poll &lt;dpoll@samsonrope.com&gt;</div>
          <div><strong>CC:</strong> Sarah Daniels &lt;sdaniels@samsonrope.com&gt;</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Status check — Samson Rope PO — inventory follow-up</div>
        </div>Donna, Sarah —

    Checking on our last Samson Rope PO. I want to make sure I have an accurate picture of what has shipped, what is still pending, and whether any lines are on backorder.

    A few specifics:

    • Confirm which SKUs have shipped and which are still open
    • Updated ETA on any backordered items
    • Tracking numbers for anything already out the door

    My customers are planning jobs around this inventory, so firm dates — even if the news is "two more weeks" — are more useful than an open question.

    Thank you both.

Sincerely,
    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Customer <span>Holding Notice</span></h2>
        <p class="section-sub">Short note to send the end customer while the supplier confirms status — so they know they have not been forgotten.</p>

        <div class="email-draft"><div class="email-header">
          <div><strong>To:</strong> End Customer</div>
          <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
          <div><strong>Subject:</strong> Your order — inventory status update today</div>
        </div>Name —

    Wanted to give you a quick update. I'm circling back with my supplier today to get a firm arrival date on your order. I will have confirmed timing back to you before the end of the day tomorrow.

    I know you're planning around this, and I appreciate your patience. You will hear from me directly the moment I have hard dates.

Sincerely,
    Aaron C. Norris
    Founder &amp; CEO
    Norris Utilities, LLC
    Cell: 205-500-1343
    acnorris@norrisutilities.com</div>
      </section>

      <section class="block">
        <h2 class="nu-section-title">Close <span>The Loop</span></h2>
        <div class="grid-2">
          <div class="nu-card">
            <h3>When supplier replies</h3>
            <p>Update master_tracker.json with confirmed ETA. Log supplier response in the customer's deal record. Forward the confirmation to the end customer in plain language.</p>
          </div>
          <div class="nu-card">
            <h3>If ETA has slipped</h3>
            <p>Call the end customer — do not email a slipped date. Offer a concrete new date, and if possible an interim action (partial ship, substitute SKU, expedited freight at cost).</p>
          </div>
        </div>
      </section>

    </div>
  </main>

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