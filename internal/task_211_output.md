<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action: Modify Bucket Cover &amp; Ship Back — Norris Utilities®</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
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
      --nu-alert: #D64545;
      --nu-warn: #F5A623;
      --nu-success: #2E8B57;
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
      background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 40%, var(--nu-cyan) 100%);
      padding: 50px 40px 70px;
      text-align: center;
      overflow: hidden;
      min-height: 220px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    .nu-logo-text {
      font-weight: 900;
      font-size: 2.6rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 2px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      margin-bottom: 14px;
    }
    .nu-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: rgba(255,255,255,0.95);
    }
    .nu-header-eyebrow {
      display: inline-block;
      margin-bottom: 18px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      color: var(--nu-white);
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 2px;
    }

    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    .nu-content-area {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 32px 80px;
    }

    .action-title {
      font-weight: 900;
      font-size: 2rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .action-title span { color: var(--nu-blue); }
    .action-subtitle {
      font-size: 1.05rem;
      color: #666;
      margin-bottom: 28px;
    }

    .status-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 30px;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .pill-priority { background: var(--nu-alert); color: #fff; }
    .pill-source { background: var(--nu-navy); color: #fff; }
    .pill-status { background: var(--nu-warn); color: #fff; }
    .pill-date { background: var(--nu-medium-gray); color: var(--nu-dark-text); }

    .section {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 28px 32px;
      margin-bottom: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      border: 1px solid var(--nu-medium-gray);
    }
    .section h2 {
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-dark-text);
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--nu-cyan);
    }
    .section h2 span { color: var(--nu-blue); }
    .section p { margin-bottom: 12px; }
    .section p:last-child { margin-bottom: 0; }

    .callout {
      background: linear-gradient(135deg, #FFF9E6 0%, #FFF3CC 100%);
      border-left: 5px solid var(--nu-warn);
      padding: 16px 20px;
      border-radius: 6px;
      margin: 16px 0;
    }
    .callout strong { color: #8A5A00; }

    .steps {
      counter-reset: step;
      list-style: none;
      padding: 0;
    }
    .steps li {
      position: relative;
      padding: 14px 14px 14px 60px;
      margin-bottom: 12px;
      background: var(--nu-light-gray);
      border-radius: 8px;
      border-left: 4px solid var(--nu-blue);
      counter-increment: step;
    }
    .steps li::before {
      content: counter(step);
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      background: var(--nu-blue);
      color: #fff;
      font-weight: 900;
      font-size: 1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .steps li strong { color: var(--nu-dark-text); }

    .size-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 0.95rem;
    }
    .size-table th, .size-table td {
      padding: 12px 14px;
      text-align: left;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .size-table th {
      background: var(--nu-navy);
      color: var(--nu-white);
      font-weight: 700;
      letter-spacing: 0.03em;
    }
    .size-table tr:nth-child(even) td { background: var(--nu-light-gray); }
    .size-table td.sku { font-weight: 700; color: var(--nu-blue); font-family: monospace; }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 10px;
    }
    .contact-card {
      background: var(--nu-light-gray);
      padding: 14px 18px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
    }
    .contact-card .label {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 4px;
    }
    .contact-card .name {
      font-weight: 700;
      color: var(--nu-dark-text);
      font-size: 1rem;
    }
    .contact-card .meta { font-size: 0.85rem; color: #666; }

    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 10px 0 10px 32px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .checklist li:last-child { border-bottom: none; }
    .checklist li::before {
      content: '☐';
      position: absolute;
      left: 0;
      top: 8px;
      font-size: 1.3rem;
      color: var(--nu-blue);
      font-weight: 900;
    }

    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px 24px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
      color: var(--nu-cyan);
      margin-bottom: 10px;
    }
    .nu-footer-contact { font-size: 0.95rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
      .nu-header { padding: 36px 20px 55px; min-height: 180px; }
      .nu-logo-text { font-size: 1.9rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.85rem; letter-spacing: 0.5em; }
      .action-title { font-size: 1.55rem; }
      .section { padding: 22px 20px; }
      .steps li { padding: 14px 14px 14px 54px; }
    }

    @media print {
      body { background: #fff; }
      .nu-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .section { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-header-eyebrow">Action Briefing · Internal</div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <main class="nu-content-area">

    <h1 class="action-title">Modify Shipped <span>FlexPro Armor</span> Bucket Cover<br>&amp; Return for Proper Sizing</h1>
    <p class="action-subtitle">reMarkable action item — handwritten note captured 2026-04-15. Bucket cover was shipped at the wrong size; modification at our end and return to manufacturer required.</p>

    <div class="status-row">
      <span class="pill pill-priority">PRIORITY · HIGH</span>
      <span class="pill pill-source">SOURCE · reMarkable</span>
      <span class="pill pill-status">STATUS · OPEN</span>
      <span class="pill pill-date">CAPTURED · 2026-04-15</span>
    </div>

    <section class="section">
      <h2><span>Situation.</span> What happened</h2>
      <p>A FlexPro Armor bucket cover was shipped to us (or from us to a customer) in a size that does not match the actual bucket dimensions. The cover needs to be pulled, measured against the correct spec, modified, and returned to the supplier / re-shipped to the customer at the proper size.</p>
      <div class="callout">
        <strong>Why this matters:</strong> FlexPro Armor is handmade USA product sold at 50% margin. A wrong-size cover cannot be installed safely on the bucket — wrong fit means the cover either binds on the liner or leaves exposed fiberglass, which defeats the dielectric and weather barrier benefit entirely.
      </div>
    </section>

    <section class="section">
      <h2><span>Reference.</span> Correct FlexPro Armor sizing</h2>
      <p>Confirm the bucket's internal dimensions against this SKU table before modifying or re-ordering. Competitor cover sizes (e.g. "24×48") translate up — their numbers are internal bucket size; our numbers are finished cover dimensions.</p>
      <table class="size-table">
        <thead>
          <tr><th>SKU</th><th>Description</th><th>Finished Cover Size</th><th>Competitor Equivalent</th></tr>
        </thead>
        <tbody>
          <tr><td class="sku">NU-BC-2851</td><td>2-Man</td><td>28" × 51"</td><td>"24 × 48"</td></tr>
          <tr><td class="sku">NU-BC-2834</td><td>1.5-Man</td><td>28" × 34"</td><td>"24 × 34"</td></tr>
          <tr><td class="sku">NU-BC-2851-C</td><td>2-Man Combo (cover + liner)</td><td>28" × 51"</td><td>—</td></tr>
          <tr><td class="sku">NU-BC-2834-C</td><td>1.5-Man Combo (cover + liner)</td><td>28" × 34"</td><td>—</td></tr>
        </tbody>
      </table>
    </section>

    <section class="section">
      <h2><span>Steps.</span> Modify &amp; ship back</h2>
      <ol class="steps">
        <li><strong>Pull the cover and confirm actual dimensions.</strong> Lay flat, measure inside seams: opening width, opening length, skirt depth. Note which measurement is off vs. the SKU spec.</li>
        <li><strong>Photograph the issue.</strong> Tape measure in frame, both axes. Two angles minimum. File to <em>~/norris-agent/output/flexpro-returns/</em> with date + SKU in filename.</li>
        <li><strong>Log a return authorization.</strong> Reach out to the FlexPro Armor manufacturer with photos, measurements, PO number, and the finished size actually received vs. the SKU ordered. Request RA# before shipping anything back.</li>
        <li><strong>Modify in-house only if authorized.</strong> Do not alter the cover unless the manufacturer confirms the modification is acceptable under the lifetime warranty. Unapproved mods void coverage.</li>
        <li><strong>Prep return shipment.</strong> Original packaging if possible. RA# on the outside of the carton. Apply shipping per Ben's formula: <em>CustomerCost = ROUNDUP(ROUNDUP(RegCost, 0) × 1.10, 0)</em> — then pass to manufacturer at our cost if it was their error.</li>
        <li><strong>Tracking &amp; confirmation.</strong> Email tracking to Caroline Butler and the manufacturer contact the same day it ships. Confirm receipt within 5 business days.</li>
        <li><strong>Replacement order.</strong> Release the correctly-sized cover only after the manufacturer confirms the incorrect unit is en route back, unless the end-customer is on a job-site deadline — in which case ship replacement same day and reconcile the return separately.</li>
      </ol>
    </section>

    <section class="section">
      <h2><span>Contacts.</span> Who to loop in</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="label">Admin / Logistics</div>
          <div class="name">Caroline Butler (CB)</div>
          <div class="meta">Handles RA paperwork &amp; shipment tracking. Aaron's review required before any customer-facing email goes out.</div>
        </div>
        <div class="contact-card">
          <div class="label">FlexPro Armor</div>
          <div class="name">Manufacturer (handmade USA)</div>
          <div class="meta">Direct line for warranty, RA#, and replacement. Confirm via email + phone for same-day RA.</div>
        </div>
        <div class="contact-card">
          <div class="label">CEO / Final sign-off</div>
          <div class="name">Aaron C. Norris</div>
          <div class="meta">205-500-1343 · acnorris@norrisutilities.com</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2><span>Checklist.</span> Before closing this action</h2>
      <ul class="checklist">
        <li>Cover measured, photos captured, SKU mismatch documented</li>
        <li>RA# obtained from FlexPro Armor manufacturer in writing</li>
        <li>Return shipment prepped with RA# visible on carton</li>
        <li>Tracking sent to Caroline Butler + manufacturer same day</li>
        <li>Replacement cover ordered at correct SKU and size</li>
        <li>Customer (if applicable) notified with revised ETA and zero cost to them</li>
        <li>Warranty status confirmed unaffected by modification / return</li>
        <li>Action item marked complete in reMarkable queue</li>
      </ul>
    </section>

    <section class="section">
      <h2><span>Notes.</span> Voice &amp; margin</h2>
      <p>When emailing the manufacturer: direct, warm, no filler. Lead with the PO and SKU mismatch, not apologies. Customer-facing language (if this reached an end user): "We're pulling the cover back, sizing it correctly, and returning it at no cost to you."</p>
      <p>Margin protection: if the return cost + replacement labor erodes the 50% FlexPro Armor margin on this unit, record the variance and flag the manufacturer for credit on the next PO. Do not absorb repeat sizing errors silently.</p>
    </section>

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