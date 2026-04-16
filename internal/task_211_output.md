<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Bucket Cover Resize &amp; Return — Norris Utilities®</title>
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
      --nu-status-red: #D32F2F;
      --nu-status-amber: #F57C00;
      --nu-status-green: #2E7D32;
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
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
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
    .nu-header * { position: relative; z-index: 2; }

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
      letter-spacing: 0.32em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
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
      background: var(--nu-white);
      padding: 0;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 180px; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 600px; aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.07) 0%, transparent 70%);
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 50px 40px 60px;
    }

    /* TASK HEADER BLOCK */
    .task-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
      align-items: center;
    }
    .task-id-pill {
      background: var(--nu-navy);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .task-source-pill {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
    }
    .task-priority-pill {
      background: var(--nu-status-amber);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .task-status-pill {
      background: var(--nu-status-red);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
    }
    .page-title .blue-word { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: var(--nu-body-text);
      margin-bottom: 36px;
      font-weight: 300;
    }

    /* SECTION HEADERS */
    .nu-section {
      margin-bottom: 36px;
    }
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-dark-text);
      margin-bottom: 16px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-medium-gray);
      position: relative;
    }
    .nu-section-title::after {
      content: '';
      position: absolute;
      left: 0; bottom: -3px;
      width: 80px; height: 3px;
      background: var(--nu-blue);
    }
    .nu-section-title .blue-word { color: var(--nu-blue); }

    /* ACTION ITEM CARD */
    .action-card {
      background: var(--nu-white);
      border-left: 5px solid var(--nu-blue);
      border-radius: 6px;
      padding: 24px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      margin-bottom: 18px;
    }
    .action-card.urgent { border-left-color: var(--nu-status-red); }
    .action-card h3 {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .action-card p {
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--nu-body-text);
    }
    .action-card .source-line {
      font-size: 0.82rem;
      color: #777;
      margin-top: 12px;
      padding-top: 10px;
      border-top: 1px dashed var(--nu-medium-gray);
      font-style: italic;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-light-gray);
      border-radius: 8px;
      padding: 24px 28px;
    }
    .checklist-item {
      display: flex;
      align-items: flex-start;
      padding: 14px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      gap: 14px;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-box {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .checklist-body h4 {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
    }
    .checklist-body p {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
    }
    .checklist-body .owner {
      display: inline-block;
      margin-top: 6px;
      font-size: 0.78rem;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 3px 10px;
      border-radius: 3px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    /* DETAIL GRID */
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .detail-cell {
      background: var(--nu-light-gray);
      border-radius: 6px;
      padding: 18px 20px;
      border-top: 3px solid var(--nu-cyan);
    }
    .detail-cell .label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #666;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .detail-cell .value {
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .detail-cell .value.small {
      font-size: 0.92rem;
      font-weight: 400;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 28px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 8px; top: 6px; bottom: 6px;
      width: 3px;
      background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      border-radius: 2px;
    }
    .timeline-event {
      position: relative;
      padding: 0 0 22px 0;
    }
    .timeline-event::before {
      content: '';
      position: absolute;
      left: -28px; top: 5px;
      width: 16px; height: 16px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .timeline-event.done::before { background: var(--nu-blue); }
    .timeline-event.pending::before { border-color: var(--nu-status-amber); }
    .timeline-event .when {
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--nu-blue);
      letter-spacing: 0.04em;
    }
    .timeline-event .what {
      font-size: 0.98rem;
      color: var(--nu-dark-text);
      margin-top: 2px;
      font-weight: 400;
    }

    /* CALLOUT */
    .callout {
      background: linear-gradient(135deg, #001f66 0%, #000033 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 8px;
      margin: 28px 0;
    }
    .callout h3 {
      color: var(--nu-cyan);
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .callout p {
      font-size: 1rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.92);
    }

    /* BUTTON ROW */
    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 16px;
    }
    .nu-btn-primary, .nu-btn-secondary {
      display: inline-block;
      padding: 12px 26px;
      border-radius: 4px;
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary {
      background: var(--nu-blue);
      color: var(--nu-white);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-primary:hover {
      background: #0000CC;
      box-shadow: 0 4px 12px rgba(0,0,255,0.3);
    }
    .nu-btn-secondary {
      background: transparent;
      color: var(--nu-blue);
      border: 2px solid var(--nu-blue);
    }
    .nu-btn-secondary:hover {
      background: var(--nu-blue);
      color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 42px 40px;
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
      font-size: 0.95rem;
      line-height: 1.8;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
    }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-container { padding: 36px 22px 40px; }
      .page-title { font-size: 1.75rem; }
      .action-card, .checklist, .callout { padding: 20px; }
    }

    @media print {
      body { background: white; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .button-row { display: none; }
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
    <div class="nu-container">

      <!-- Meta Bar -->
      <div class="task-meta-bar">
        <span class="task-id-pill">Task 211</span>
        <span class="task-source-pill">reMarkable Action</span>
        <span class="task-priority-pill">High Priority</span>
        <span class="task-status-pill">Open</span>
      </div>

      <!-- Title -->
      <h1 class="page-title"><span class="blue-word">Action Item:</span> Modify Shipped Bucket Cover &amp; Return for Proper Sizing</h1>
      <p class="page-subtitle">Internal production &amp; logistics action — captured from Aaron's reMarkable notes on 2026-04-16.</p>

      <!-- Action Detail -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue-word">Action</span> Summary</h2>
        <div class="action-card urgent">
          <h3>Modify the shipped bucket cover and ship back for proper sizing</h3>
          <p>A FlexPro Armor bucket cover was shipped to a customer with a sizing issue. The unit needs to be returned, modified at our production partner, and re-shipped to the customer in the corrected size so the cover fits the customer's bucket as specified on their original order.</p>
          <div class="source-line">Source: reMarkable daily notebook — action item captured 2026-04-16</div>
        </div>
      </section>

      <!-- Key Details -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue-word">Key</span> Details</h2>
        <div class="detail-grid">
          <div class="detail-cell">
            <div class="label">Product</div>
            <div class="value">FlexPro Armor Bucket Cover</div>
          </div>
          <div class="detail-cell">
            <div class="label">Issue Type</div>
            <div class="value">Sizing — Modification Required</div>
          </div>
          <div class="detail-cell">
            <div class="label">Action Type</div>
            <div class="value">Return → Modify → Re-ship</div>
          </div>
          <div class="detail-cell">
            <div class="label">Priority</div>
            <div class="value">High — Customer Waiting</div>
          </div>
          <div class="detail-cell">
            <div class="label">Captured</div>
            <div class="value">2026-04-16</div>
          </div>
          <div class="detail-cell">
            <div class="label">Owner</div>
            <div class="value">Aaron C. Norris</div>
          </div>
          <div class="detail-cell">
            <div class="label">Support</div>
            <div class="value">Caroline Butler (CB)</div>
          </div>
          <div class="detail-cell">
            <div class="label">SKU Reference</div>
            <div class="value small">Verify against NU-BC-2851 / NU-BC-2834 (and Combo variants)</div>
          </div>
        </div>
      </section>

      <!-- Callout -->
      <div class="callout">
        <h3>Why this matters</h3>
        <p>FlexPro Armor carries a 50% margin and is our flagship handmade product. A sizing miss turns a revenue win into a logistics cost and a customer-service moment. Resolving this quickly — and confirming the corrected dimensions against the customer's bucket — protects both the relationship and the margin.</p>
      </div>

      <!-- Execution Checklist -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue-word">Execution</span> Checklist</h2>
        <div class="checklist">

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>1. Confirm correct dimensions with customer</h4>
              <p>Call or email the customer to verify the exact bucket dimensions (inside length × inside width × depth). Confirm bucket make/model and ask for a phone photo of the tag if possible. Match against our standard SKUs (NU-BC-2851, NU-BC-2834) or flag as custom.</p>
              <span class="owner">Owner: Aaron (CB on follow-up)</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>2. Issue return shipping label</h4>
              <p>CB to generate a prepaid return label and email it to the customer the same day dimensions are confirmed. Include clear pack/ship instructions — cover folded, original box if available, no additional packing required.</p>
              <span class="owner">Owner: Caroline Butler</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>3. Coordinate modification with production partner</h4>
              <p>Notify the FlexPro Armor production partner of the incoming return and the required modification. Confirm turnaround time and whether the modification is possible or a full rebuild is more cost-effective. Get it in writing.</p>
              <span class="owner">Owner: Aaron</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>4. Log the incident against the order</h4>
              <p>Update the order record and capture the root cause — was the original size mis-ordered, mis-measured, or mis-built? This closes the loop on whether we or the customer own the sizing error and guides how we handle cost.</p>
              <span class="owner">Owner: Aaron</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>5. Re-ship modified cover &amp; notify customer</h4>
              <p>Once modified, ship the cover back to the customer with tracking. Email the customer the tracking number and a short note confirming the corrected size. Follow up 48 hours after delivery to confirm proper fit on their bucket.</p>
              <span class="owner">Owner: CB ships, Aaron follows up</span>
            </div>
          </div>

          <div class="checklist-item">
            <div class="checklist-box"></div>
            <div class="checklist-body">
              <h4>6. Close the task &amp; update measurement SOP if needed</h4>
              <p>Close Task 211 in the tracker. If root cause was an internal measurement or intake error, update the FlexPro Armor order intake SOP so this sizing issue is prevented on the next order. Share the update with CB.</p>
              <span class="owner">Owner: Aaron</span>
            </div>
          </div>

        </div>
      </section>

      <!-- Timeline -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue-word">Status</span> Timeline</h2>
        <div class="timeline">
          <div class="timeline-event done">
            <div class="when">2026-04-16 — Captured</div>
            <div class="what">Action item written to reMarkable notebook and synced to Norris Utilities® internal task queue as Task 211.</div>
          </div>
          <div class="timeline-event pending">
            <div class="when">Next — Confirm Dimensions</div>
            <div class="what">Contact customer to verify correct bucket dimensions before issuing return label or notifying production partner.</div>
          </div>
          <div class="timeline-event pending">
            <div class="when">Then — Return Inbound</div>
            <div class="what">Return label issued, customer ships cover back to the FlexPro Armor production partner for modification.</div>
          </div>
          <div class="timeline-event pending">
            <div class="when">Then — Re-ship</div>
            <div class="what">Modified cover shipped back to customer with tracking. Post-delivery fit confirmation follow-up scheduled.</div>
          </div>
          <div class="timeline-event pending">
            <div class="when">Close — Task Complete</div>
            <div class="what">Task 211 closed in tracker once customer confirms proper fit. SOP updated if root cause was internal.</div>
          </div>
        </div>
      </section>

      <!-- Button Row -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="blue-word">Quick</span> Links</h2>
        <div class="button-row">
          <a href="mailto:acnorris@norrisutilities.com?subject=Task%20211%20Update%20—%20Bucket%20Cover%20Resize" class="nu-btn-primary">Email Aaron an Update</a>
          <a href="tel:2055001343" class="nu-btn-secondary">Call 205-500-1343</a>
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