<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item — Modify &amp; Return Bucket Cover for Proper Sizing | Norris Utilities®</title>
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

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 56px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
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
    .nu-eyebrow {
      display: inline-block;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: var(--nu-cyan);
      background: rgba(0,0,0,0.25);
      padding: 6px 16px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 2.8rem;
      color: var(--nu-white);
      letter-spacing: 0.34em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.78em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.78em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.2rem;
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

    /* PAGE TITLE BAR */
    .nu-title-bar {
      max-width: 1180px;
      margin: 0 auto;
      padding: 36px 40px 8px;
    }
    .nu-page-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      line-height: 1.18;
      margin-bottom: 6px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-sub {
      font-size: 1rem;
      color: #555;
      margin-bottom: 18px;
    }
    .nu-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 8px;
    }
    .nu-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 999px;
      background: var(--nu-medium-gray);
      color: var(--nu-dark-text);
    }
    .nu-pill.priority { background: var(--nu-alert-red); color: #fff; }
    .nu-pill.status { background: var(--nu-alert-amber); color: #fff; }
    .nu-pill.source { background: var(--nu-navy); color: var(--nu-cyan); }
    .nu-pill.due { background: var(--nu-blue); color: #fff; }

    /* MAIN GRID */
    main {
      max-width: 1180px;
      margin: 0 auto;
      padding: 18px 40px 60px;
    }
    .nu-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 28px;
    }
    @media (max-width: 900px) {
      .nu-grid { grid-template-columns: 1fr; }
    }

    /* CARDS */
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      margin-bottom: 22px;
    }
    .nu-card h2 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
      display: flex; align-items: baseline; gap: 8px;
    }
    .nu-card h2 .num {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.95rem;
      letter-spacing: 0.08em;
    }
    .nu-card h3 {
      font-weight: 700;
      font-size: 1.02rem;
      color: var(--nu-blue);
      margin: 18px 0 8px;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card ul, .nu-card ol { margin: 6px 0 14px 22px; }
    .nu-card li { margin-bottom: 6px; }

    /* CALLOUT BOX */
    .nu-callout {
      background: linear-gradient(135deg, #fff8e5 0%, #fff3d1 100%);
      border-left: 5px solid var(--nu-alert-amber);
      padding: 16px 18px;
      border-radius: 6px;
      margin: 14px 0;
    }
    .nu-callout strong { color: var(--nu-alert-amber); }
    .nu-callout.danger {
      background: linear-gradient(135deg, #fdecea 0%, #fadbd8 100%);
      border-left-color: var(--nu-alert-red);
    }
    .nu-callout.danger strong { color: var(--nu-alert-red); }
    .nu-callout.info {
      background: linear-gradient(135deg, #e8f3ff 0%, #d6e9ff 100%);
      border-left-color: var(--nu-blue);
    }
    .nu-callout.info strong { color: var(--nu-blue); }
    .nu-callout.success {
      background: linear-gradient(135deg, #e9f7ef 0%, #d4efdf 100%);
      border-left-color: var(--nu-success-green);
    }
    .nu-callout.success strong { color: var(--nu-success-green); }

    /* CHECKLIST */
    .nu-checklist { list-style: none; margin-left: 0; }
    .nu-checklist li {
      padding: 10px 12px 10px 38px;
      position: relative;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .nu-checklist li:last-child { border-bottom: none; }
    .nu-checklist li::before {
      content: '';
      position: absolute;
      left: 12px; top: 14px;
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: #fff;
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* TABLE */
    .nu-table { width: 100%; border-collapse: collapse; margin: 8px 0 14px; font-size: 0.94rem; }
    .nu-table th, .nu-table td {
      padding: 10px 12px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table th {
      background: var(--nu-light-gray);
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 0.82rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nu-table tr:hover td { background: #fafbfd; }

    /* SIDE PANEL */
    .nu-side .nu-card { padding: 20px 22px; }
    .nu-quick-fact {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid var(--nu-medium-gray);
      font-size: 0.95rem;
    }
    .nu-quick-fact:last-child { border-bottom: none; }
    .nu-quick-fact .label { color: #666; font-weight: 700; }
    .nu-quick-fact .val { color: var(--nu-dark-text); font-weight: 700; text-align: right; }

    .nu-step {
      display: flex; gap: 12px;
      margin-bottom: 14px;
    }
    .nu-step .num {
      flex-shrink: 0;
      width: 30px; height: 30px;
      background: var(--nu-blue);
      color: #fff;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 900;
      font-size: 0.9rem;
    }
    .nu-step .body { font-size: 0.95rem; }
    .nu-step .body strong { display: block; color: var(--nu-dark-text); margin-bottom: 2px; }

    .nu-sku-card {
      background: linear-gradient(135deg, #f5f8ff 0%, #e8f0ff 100%);
      border: 1px solid #c7d6ff;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 10px;
    }
    .nu-sku-card .sku {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.95rem;
      letter-spacing: 0.04em;
    }
    .nu-sku-card .name { font-size: 0.88rem; color: #555; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.85; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media print {
      body { background: #fff; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; page-break-inside: avoid; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; padding-left: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-page-title { font-size: 1.55rem; }
      .nu-title-bar, main { padding-left: 22px; padding-right: 22px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-eyebrow">Internal Action Item · reMarkable Capture</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <div class="nu-title-bar">
    <h1 class="nu-page-title"><span class="accent">Action Item:</span> Modify Shipped Bucket Cover &amp; Return for Proper Sizing</h1>
    <p class="nu-page-sub">FlexPro Armor field-fit correction — captured from reMarkable notebook, owned by Aaron C. Norris</p>
    <div class="nu-meta-row">
      <span class="nu-pill priority">Priority: High</span>
      <span class="nu-pill status">Status: In Progress</span>
      <span class="nu-pill due">Due: This Week</span>
      <span class="nu-pill source">Source: reMarkable Capture</span>
      <span class="nu-pill">Owner: Aaron C. Norris</span>
      <span class="nu-pill">Support: Caroline Butler (CB)</span>
    </div>
  </div>

  <main>
    <div class="nu-grid">

      <!-- LEFT COLUMN -->
      <section>

        <article class="nu-card">
          <h2><span class="num">01</span> Situation Summary</h2>
          <p>
            A FlexPro Armor bucket cover that was shipped to a customer requires modification for
            proper sizing. The unit needs to be returned to Norris Utilities®, adjusted to the correct
            dimensions, and re-shipped back to the customer with minimal downtime in the field.
          </p>
          <p>
            FlexPro Armor covers are handmade in the USA, so the modification is a sewing-and-finishing
            adjustment rather than a full rebuild. The objective is to make the customer whole on the
            <strong>same SKU</strong>, confirm the correct size against their bucket measurements, and
            absorb the freight both ways as a goodwill gesture.
          </p>

          <div class="nu-callout danger">
            <strong>Why this matters:</strong> This is the customer's first FlexPro Armor experience.
            How quickly and cleanly we resolve the fit issue defines whether they reorder. Speed and
            communication beat a perfect cover delivered late.
          </div>
        </article>

        <article class="nu-card">
          <h2><span class="num">02</span> Action Plan</h2>

          <h3>Phase 1 — Confirm the Fit Issue (Today)</h3>
          <ol>
            <li>Call the customer. Confirm the unit shipped, the bucket make/model, and exactly how it does not fit (too tight at the rim, too loose at the floor, length wrong, cutout misaligned, etc.).</li>
            <li>Ask the customer to send 4 measurement photos with a tape measure visible: top opening, floor opening, height/sidewall, and any cutout positions.</li>
            <li>Log the measurements in the customer's pricing sheet and the FlexPro Armor sizing log.</li>
          </ol>

          <h3>Phase 2 — Return Inbound to Birmingham (Days 1–3)</h3>
          <ol>
            <li>Generate a prepaid return label and email it to the customer with a one-line instruction: <em>"Reuse the original poly bag, drop at any UPS counter."</em></li>
            <li>CB to monitor inbound tracking. Alert Aaron the moment the return arrives at 130 Inverness Plaza #210.</li>
            <li>Inspect the cover on arrival. Photograph current dimensions before any cuts or stitching are touched.</li>
          </ol>

          <h3>Phase 3 — Modify &amp; Re-Ship (Days 3–6)</h3>
          <ol>
            <li>Coordinate the modification with our handmade-USA sewing partner. Provide the new measurements and the original SKU spec sheet.</li>
            <li>QA the modified cover against the customer's photos and measurements before it leaves the shop.</li>
            <li>Ship outbound with tracking. Email the customer the tracking number the same day, with a short note: <em>"Resized and on the way. Try it Friday and tell me how it sits."</em></li>
          </ol>

          <h3>Phase 4 — Close the Loop (Day 7+)</h3>
          <ol>
            <li>Three days after delivery, Aaron calls the customer to confirm the fit is right.</li>
            <li>If correct: log the resolved measurements as the customer's master spec for any future order.</li>
            <li>If still off: escalate to a full rebuild on Norris Utilities® at no charge.</li>
          </ol>
        </article>

        <article class="nu-card">
          <h2><span class="num">03</span> Sizing Reference — FlexPro Armor SKUs</h2>
          <p>Confirm which SKU was originally shipped, then verify the customer's bucket actually maps to it. Most fit complaints come from a competitor-size translation gap.</p>

          <table class="nu-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Configuration</th>
                <th>Top × Height</th>
                <th>Common Match</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>NU-BC-2851</strong></td>
                <td>2-Man Cover</td>
                <td>28" × 51"</td>
                <td>Competitor "24 × 48"</td>
              </tr>
              <tr>
                <td><strong>NU-BC-2834</strong></td>
                <td>1.5-Man Cover</td>
                <td>28" × 34"</td>
                <td>Competitor "24 × 34"</td>
              </tr>
              <tr>
                <td><strong>NU-BC-2851-C</strong></td>
                <td>2-Man Combo</td>
                <td>28" × 51"</td>
                <td>2-Man + accessory pack</td>
              </tr>
              <tr>
                <td><strong>NU-BC-2834-C</strong></td>
                <td>1.5-Man Combo</td>
                <td>28" × 34"</td>
                <td>1.5-Man + accessory pack</td>
              </tr>
            </tbody>
          </table>

          <div class="nu-callout info">
            <strong>Field rule:</strong> Always measure the actual bucket — never trust the lineman's
            verbal recall of size. A 24" rim with a flared lip can sit closer to 27"–28" once the cover
            is wrapped on, which is exactly why the standard NU sizes are 28" wide.
          </div>
        </article>

        <article class="nu-card">
          <h2><span class="num">04</span> Customer Communication Script</h2>

          <h3>Initial Phone Call (Aaron)</h3>
          <p>
            "Name — I got the note that the cover doesn't sit right. I want to make this right this
            week. Here is what we will do: I am sending a prepaid return label to your email today.
            Drop the cover at UPS, my team will resize it the day it lands here, and ship it right back
            to you. All freight is on us. While you have a tape measure handy, can you grab four quick
            measurements for me?"
          </p>

          <h3>Follow-Up Email (after the call)</h3>
          <p style="background:#f5f8ff; border-left:4px solid var(--nu-blue); padding:14px 18px; border-radius:4px; font-size:0.94rem;">
            Name —<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;Thank you for the call. Prepaid UPS label is attached. Drop it at any UPS counter when convenient.<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;Once the cover lands here in Birmingham, we will modify to the new measurements and ship it right back to you with tracking. All freight is on Norris Utilities®.<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;Measurements I need on your end:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Top opening (rim) — width and depth<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Floor opening — width and depth<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Inside height (rim down to floor)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• Photos of any controls or cutouts that need to be cleared<br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;Anything else off, tell me directly. We earn the business by getting this right the first time we resize it.<br><br>
            Sincerely,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris<br>
            &nbsp;&nbsp;&nbsp;&nbsp;Founder &amp; CEO, Norris Utilities, LLC<br>
            &nbsp;&nbsp;&nbsp;&nbsp;205-500-1343 | acnorris@norrisutilities.com
          </p>
        </article>

      </section>

      <!-- RIGHT COLUMN -->
      <aside class="nu-side">

        <div class="nu-card">
          <h2><span class="num">★</span> Quick Facts</h2>
          <div class="nu-quick-fact"><span class="label">Product Line</span><span class="val">FlexPro Armor</span></div>
          <div class="nu-quick-fact"><span class="label">Origin</span><span class="val">Handmade USA</span></div>
          <div class="nu-quick-fact"><span class="label">Margin Floor</span><span class="val">50%</span></div>
          <div class="nu-quick-fact"><span class="label">Freight (both ways)</span><span class="val">Norris Utilities®</span></div>
          <div class="nu-quick-fact"><span class="label">Target Turnaround</span><span class="val">5–7 days door-to-door</span></div>
          <div class="nu-quick-fact"><span class="label">Owner</span><span class="val">Aaron C. Norris</span></div>
          <div class="nu-quick-fact"><span class="label">Support</span><span class="val">Caroline Butler</span></div>
        </div>

        <div class="nu-card">
          <h2><span class="num">⏱</span> Today's 4 Steps</h2>
          <div class="nu-step">
            <div class="num">1</div>
            <div class="body"><strong>Call the customer.</strong> Confirm the misfit and request 4 measurements + photos.</div>
          </div>
          <div class="nu-step">
            <div class="num">2</div>
            <div class="body"><strong>Email the prepaid return label.</strong> CB generates UPS label, attaches to follow-up email.</div>
          </div>
          <div class="nu-step">
            <div class="num">3</div>
            <div class="body"><strong>Notify the sewing partner.</strong> Lock production slot for the day the return is expected to land.</div>
          </div>
          <div class="nu-step">
            <div class="num">4</div>
            <div class="body"><strong>Log it.</strong> Add row to FlexPro Armor sizing log so we never re-ship the wrong size to this customer again.</div>
          </div>
        </div>

        <div class="nu-card">
          <h2><span class="num">🔧</span> SKU Candidates</h2>
          <div class="nu-sku-card">
            <div class="sku">NU-BC-2851</div>
            <div class="name">2-Man Cover · 28" × 51"</div>
          </div>
          <div class="nu-sku-card">
            <div class="sku">NU-BC-2834</div>
            <div class="name">1.5-Man Cover · 28" × 34"</div>
          </div>
          <div class="nu-sku-card">
            <div class="sku">NU-BC-2851-C</div>
            <div class="name">2-Man Combo · 28" × 51"</div>
          </div>
          <div class="nu-sku-card">
            <div class="sku">NU-BC-2834-C</div>
            <div class="name">1.5-Man Combo · 28" × 34"</div>
          </div>
          <p style="font-size:0.82rem; color:#666; margin-top:8px;">Confirm originally shipped SKU before approving any modification.</p>
        </div>

        <div class="nu-card">
          <h2><span class="num">✓</span> Completion Checklist</h2>
          <ul class="nu-checklist">
            <li><strong>Customer call complete</strong> — misfit understood</li>
            <li><strong>Measurements + photos</strong> received and logged</li>
            <li><strong>Prepaid return label</strong> sent to customer</li>
            <li><strong>Inbound return</strong> received in Birmingham</li>
            <li><strong>Modification</strong> completed and QA'd</li>
            <li><strong>Outbound shipment</strong> tracking sent to customer</li>
            <li><strong>Fit confirmation call</strong> made 3 days post-delivery</li>
            <li><strong>Master spec</strong> saved to customer profile</li>
          </ul>
        </div>

        <div class="nu-card">
          <h2><span class="num">!</span> Escalation</h2>
          <div class="nu-callout success">
            <strong>If the second cover still does not fit:</strong> Norris Utilities® rebuilds the
            unit from scratch at no charge to the customer. Aaron approves verbally — no purchase order
            required.
          </div>
          <p style="font-size:0.9rem; color:#555;">
            The standing rule: a customer never pays twice for a sizing problem on a Norris Utilities®
            order. The relationship is worth more than one bucket cover.
          </p>
        </div>

      </aside>

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