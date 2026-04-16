<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Item: Modify Shipped Bucket Cover & Return for Proper Sizing — Norris Utilities®</title>
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
      padding: 60px 40px 80px;
      text-align: center;
      overflow: hidden;
      min-height: 260px;
    }
    .nu-header::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background:
        linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 60px);
      background-size: 40px 40px, 60px 60px;
      z-index: 1;
      opacity: 0.6;
    }
    .nu-header * { position: relative; z-index: 2; }
    .nu-logo-text {
      font-weight: 900; font-size: 3rem; color: var(--nu-white);
      letter-spacing: 0.35em; text-transform: uppercase; margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900; font-size: 1.3rem; color: var(--nu-white);
      letter-spacing: 0.8em; text-transform: uppercase; margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic; font-weight: 400; font-size: 1.25rem;
      color: rgba(255,255,255,0.95); letter-spacing: 0.03em;
    }

    /* CHEVRON */
    .nu-chevron { position: relative; height: 50px; margin-top: -50px; z-index: 10; }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* TITLE BAR */
    .nu-title-bar {
      background: var(--nu-white);
      padding: 32px 40px 20px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .nu-title-bar .wrap { max-width: 1100px; margin: 0 auto; }
    .nu-eyebrow {
      display: inline-block;
      background: var(--nu-alert-amber); color: var(--nu-white);
      font-weight: 700; font-size: 0.75rem; letter-spacing: 0.15em;
      text-transform: uppercase; padding: 5px 12px; border-radius: 3px;
      margin-bottom: 12px;
    }
    .nu-page-title {
      font-weight: 900; font-size: 2rem; color: var(--nu-dark-text);
      line-height: 1.2; margin-bottom: 8px;
    }
    .nu-page-title .accent { color: var(--nu-blue); }
    .nu-page-sub { color: var(--nu-body-text); font-size: 1rem; }

    /* CONTENT */
    .nu-content {
      max-width: 1100px; margin: 0 auto; padding: 40px 40px 60px;
    }
    .row { display: grid; grid-template-columns: 2fr 1fr; gap: 28px; margin-bottom: 28px; }
    @media (max-width: 880px) { .row { grid-template-columns: 1fr; } }

    .nu-card {
      background: var(--nu-white);
      border-radius: 8px; padding: 28px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
    }
    .nu-card h2 {
      font-weight: 900; font-size: 1.35rem;
      margin-bottom: 14px; color: var(--nu-dark-text);
    }
    .nu-card h2 .blue { color: var(--nu-blue); }
    .nu-card h3 {
      font-weight: 700; font-size: 1rem;
      color: var(--nu-blue); margin: 16px 0 8px;
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    .nu-card p { margin-bottom: 12px; }
    .nu-card ul { padding-left: 22px; margin-bottom: 12px; }
    .nu-card ul li { margin-bottom: 6px; }
    .nu-card ul li::marker { color: var(--nu-blue); }

    /* PRIORITY STRIP */
    .priority-strip {
      background: linear-gradient(90deg, var(--nu-alert-amber) 0%, #E67E22 100%);
      color: var(--nu-white);
      padding: 14px 20px;
      border-radius: 6px;
      display: flex; align-items: center; gap: 14px;
      margin-bottom: 24px;
      font-weight: 700;
    }
    .priority-strip .icon {
      width: 32px; height: 32px; flex-shrink: 0;
      background: rgba(255,255,255,0.25); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
    }
    .priority-strip .label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.9; }
    .priority-strip .text { font-size: 1rem; }

    /* KEY/VALUE TABLE */
    .kv { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
    .kv tr { border-bottom: 1px solid var(--nu-medium-gray); }
    .kv tr:last-child { border-bottom: none; }
    .kv td {
      padding: 10px 0;
      vertical-align: top;
    }
    .kv td:first-child {
      font-weight: 700; color: var(--nu-dark-text);
      width: 40%; padding-right: 10px;
    }

    /* STEPS */
    .steps { counter-reset: step; list-style: none; padding: 0; margin: 0; }
    .steps li {
      counter-increment: step;
      position: relative;
      padding: 14px 14px 14px 58px;
      margin-bottom: 10px;
      background: var(--nu-light-gray);
      border-radius: 6px;
      border-left: 4px solid var(--nu-blue);
    }
    .steps li::before {
      content: counter(step);
      position: absolute;
      left: 14px; top: 50%;
      transform: translateY(-50%);
      width: 32px; height: 32px;
      background: var(--nu-blue);
      color: var(--nu-white);
      font-weight: 900; font-size: 1rem;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }
    .steps li strong { color: var(--nu-dark-text); display: block; margin-bottom: 2px; }
    .steps li .meta { font-size: 0.85rem; color: var(--nu-body-text); }

    /* SKU COMPARE */
    .sku-compare {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    }
    .sku-box {
      padding: 14px; border-radius: 6px; border: 2px solid var(--nu-medium-gray);
    }
    .sku-box.current {
      border-color: var(--nu-alert-red);
      background: rgba(192, 57, 43, 0.04);
    }
    .sku-box.target {
      border-color: var(--nu-success-green);
      background: rgba(30, 132, 73, 0.04);
    }
    .sku-box .label {
      font-size: 0.72rem; letter-spacing: 0.12em;
      text-transform: uppercase; font-weight: 900;
      margin-bottom: 6px;
    }
    .sku-box.current .label { color: var(--nu-alert-red); }
    .sku-box.target .label { color: var(--nu-success-green); }
    .sku-box .sku { font-weight: 900; font-size: 1.05rem; color: var(--nu-dark-text); }
    .sku-box .dim { font-size: 0.9rem; margin-top: 4px; }
    @media (max-width: 500px) { .sku-compare { grid-template-columns: 1fr; } }

    /* STATUS PILL */
    .pill {
      display: inline-block;
      padding: 4px 12px; border-radius: 999px;
      font-size: 0.78rem; font-weight: 700;
      letter-spacing: 0.04em; text-transform: uppercase;
    }
    .pill-open { background: rgba(214, 137, 16, 0.15); color: var(--nu-alert-amber); }
    .pill-ready { background: rgba(30, 132, 73, 0.15); color: var(--nu-success-green); }

    /* CHECKBOX LIST */
    .check-list { list-style: none; padding: 0; }
    .check-list li {
      padding: 8px 0 8px 28px;
      position: relative;
      border-bottom: 1px dashed var(--nu-medium-gray);
    }
    .check-list li:last-child { border-bottom: none; }
    .check-list li::before {
      content: '';
      position: absolute; left: 0; top: 12px;
      width: 16px; height: 16px;
      border: 2px solid var(--nu-blue); border-radius: 3px;
    }

    /* CTA */
    .cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; }
    .btn {
      display: inline-block; padding: 11px 22px;
      border-radius: 4px; font-weight: 700; font-size: 0.9rem;
      text-decoration: none; letter-spacing: 0.02em;
      transition: all 0.2s ease;
    }
    .btn-primary { background: var(--nu-blue); color: var(--nu-white); }
    .btn-primary:hover { background: #0000CC; }
    .btn-secondary {
      background: transparent; color: var(--nu-blue);
      border: 2px solid var(--nu-blue); padding: 9px 20px;
    }
    .btn-secondary:hover { background: var(--nu-blue); color: var(--nu-white); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 36px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', serif;
      font-style: italic; font-size: 1.15rem;
      color: var(--nu-cyan); margin-bottom: 10px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.8; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    @media (max-width: 640px) {
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-page-title { font-size: 1.5rem; }
      .nu-content { padding: 24px 20px 40px; }
      .nu-card { padding: 20px; }
    }
  </style>
</head>
<body>

  <header class="nu-header">
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <section class="nu-title-bar">
    <div class="wrap">
      <span class="nu-eyebrow">Action Item · reMarkable</span>
      <h1 class="nu-page-title"><span class="accent">Modify</span> Shipped Bucket Cover &amp; Return for Proper Sizing</h1>
      <div class="nu-page-sub">Open loop pulled from reMarkable notes — needs owner, deadline, and return-ship plan.</div>
    </div>
  </section>

  <main class="nu-content">

    <div class="priority-strip">
      <div class="icon">!</div>
      <div>
        <div class="label">Priority — Customer Experience</div>
        <div class="text">A shipped FlexPro Armor cover needs to be modified and re-shipped so the customer receives the correct fit. Handle before it becomes a return/refund.</div>
      </div>
    </div>

    <div class="row">
      <!-- LEFT: Core detail -->
      <div class="nu-card">
        <h2><span class="blue">The</span> Situation</h2>
        <p>A FlexPro Armor bucket cover was shipped to a customer at a size that does not fit their bucket. Rather than eat a full return plus reship a new unit, the plan is:</p>
        <ul>
          <li>Have the customer ship the cover back to us (or to the sewing partner directly).</li>
          <li>Modify the existing cover to the correct dimensions.</li>
          <li>Return-ship to the customer at no additional charge and close the loop.</li>
        </ul>

        <h3>Why this matters</h3>
        <p>FlexPro Armor is handmade in the USA and runs at a 50% margin. A modification is cheaper than producing a second unit, and a quick turnaround here protects the relationship and our reputation for making things right — a direct expression of <em>A Legacy of Commitment®</em>.</p>

        <h3>Size Correction</h3>
        <div class="sku-compare">
          <div class="sku-box current">
            <div class="label">Shipped (Wrong Fit)</div>
            <div class="sku">Confirm SKU on order</div>
            <div class="dim">Dimensions as currently built</div>
          </div>
          <div class="sku-box target">
            <div class="label">Modify To (Correct Fit)</div>
            <div class="sku">Confirm with customer</div>
            <div class="dim">Measure bucket opening: width × depth</div>
          </div>
        </div>
        <p style="margin-top:12px; font-size: 0.92rem;"><strong>Standard SKUs for reference:</strong> NU-BC-2851 (2-Man, 28&quot;×51&quot;) · NU-BC-2834 (1.5-Man, 28&quot;×34&quot;) · NU-BC-2851-C (2-Man Combo) · NU-BC-2834-C (1.5-Man Combo).</p>

        <h3>Action Plan</h3>
        <ol class="steps">
          <li>
            <strong>Call the customer</strong>
            <div class="meta">Confirm exact bucket dimensions (width × depth × any lip), apologize once, set expectation on turnaround.</div>
          </li>
          <li>
            <strong>Issue a return label</strong>
            <div class="meta">Ship-back label covered by Norris Utilities®. Route direct to the sewing partner if faster than routing through Birmingham.</div>
          </li>
          <li>
            <strong>Send modification spec to the shop</strong>
            <div class="meta">Original SKU + order number, new target dimensions, customer name, and the deadline we committed to.</div>
          </li>
          <li>
            <strong>Re-ship to customer</strong>
            <div class="meta">Ben's shipping formula: CustomerCost = ROUNDUP(ROUNDUP(RegCost,0) × 1.10, 0). We absorb this leg.</div>
          </li>
          <li>
            <strong>Close the loop</strong>
            <div class="meta">Confirm fit with a photo or call-back, log lesson learned in the order notes, and credit any applicable concession.</div>
          </li>
        </ol>
      </div>

      <!-- RIGHT: Quick reference -->
      <div>
        <div class="nu-card" style="margin-bottom: 22px;">
          <h2><span class="blue">Quick</span> Reference</h2>
          <table class="kv">
            <tr><td>Status</td><td><span class="pill pill-open">Open</span></td></tr>
            <tr><td>Owner</td><td>Aaron C. Norris</td></tr>
            <tr><td>Support</td><td>Caroline Butler (CB) — label + logistics</td></tr>
            <tr><td>Product</td><td>FlexPro Armor bucket cover</td></tr>
            <tr><td>Issue</td><td>Shipped size does not fit customer bucket</td></tr>
            <tr><td>Fix</td><td>Modify existing cover, return-ship</td></tr>
            <tr><td>Our Cost Risk</td><td>Round-trip freight + rework labor (&lt; building a 2nd unit)</td></tr>
            <tr><td>Margin Posture</td><td>Hold 50% on original sale if possible; consider small freight credit</td></tr>
          </table>
        </div>

        <div class="nu-card" style="margin-bottom: 22px;">
          <h2><span class="blue">Info</span> Needed from Customer</h2>
          <ul class="check-list">
            <li>Exact bucket inside width at the top</li>
            <li>Inside depth (front-to-back)</li>
            <li>Lip or flange height that affects the skirt</li>
            <li>Any controls/pedals that need a cutout</li>
            <li>Photo of bucket top-down with a tape measure</li>
            <li>Best return-ship address (yard, shop, or home)</li>
          </ul>
        </div>

        <div class="nu-card">
          <h2><span class="blue">Internal</span> Notes</h2>
          <p style="font-size: 0.92rem;">Once the cover is back in the shop, this is a rework ticket — not a new build. Log the remeasure values and the customer-confirmed dimensions in the order record so we have a trail if this unit is ever warranty-flagged later.</p>
          <p style="font-size: 0.92rem;">Capture the root cause: was the wrong size quoted, wrong size ordered, or wrong size sewn? The answer changes which checklist we tighten.</p>
        </div>
      </div>
    </div>

    <div class="nu-card">
      <h2><span class="blue">Close-Out</span> Checklist</h2>
      <ul class="check-list">
        <li>Customer called, corrected dimensions confirmed in writing (email or text)</li>
        <li>Return label issued and tracking saved in order record</li>
        <li>Modification spec sent to sewing partner with target date</li>
        <li>Cover received, modified, QC'd against the new dimensions</li>
        <li>Re-shipped with tracking, customer notified</li>
        <li>Fit confirmed by customer — <span class="pill pill-ready">Ready to Close</span></li>
        <li>Root cause logged so the sizing question is asked up front on the next order</li>
      </ul>

      <div class="cta-row">
        <a href="mailto:acnorris@norrisutilities.com?subject=Bucket%20Cover%20Modification%20%E2%80%94%20Status" class="btn btn-primary">Update Aaron</a>
        <a href="tel:2055001343" class="btn btn-secondary">Call Aaron: 205-500-1343</a>
      </div>
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