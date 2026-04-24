<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Receive &amp; Process Inventory — Last PO — Norris Utilities®</title>
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
      --nu-success: #1b8a3a;
      --nu-warn: #c17a00;
      --nu-danger: #b4251d;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; scroll-behavior: smooth; }
    body {
      font-family: var(--font-primary);
      color: var(--nu-body-text);
      background: var(--nu-white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* HEADER */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 80px);
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
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
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 18px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.03em;
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
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 40%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%; height: 600px;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='0.07'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='0.07'/></svg>") center/contain no-repeat;
      opacity: 1;
      z-index: 0;
      pointer-events: none;
    }
    .nu-container {
      position: relative;
      z-index: 1;
      max-width: 1180px;
      margin: 0 auto;
      padding: 60px 40px 80px;
    }

    /* TITLE BLOCK */
    .nu-title-block {
      margin-bottom: 40px;
      padding-bottom: 24px;
      border-bottom: 3px solid var(--nu-blue);
    }
    .nu-kicker {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      padding: 6px 14px;
      font-size: 0.75rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    h1.nu-page-title {
      font-weight: 900;
      font-size: 2.3rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    h1.nu-page-title span { color: var(--nu-blue); }
    .nu-subtitle {
      font-size: 1.05rem;
      color: #555;
      max-width: 780px;
    }

    /* STATUS BAR */
    .nu-status-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
      margin-bottom: 48px;
    }
    .nu-status-tile {
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 16px 18px;
      border-radius: 6px;
    }
    .nu-status-tile.priority { border-left-color: var(--nu-blue); }
    .nu-status-tile.open { border-left-color: var(--nu-warn); }
    .nu-status-label {
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      color: #6b6b7a;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-status-value {
      font-weight: 700;
      font-size: 1rem;
      color: var(--nu-dark-text);
    }

    /* SECTION */
    .nu-section { margin-bottom: 48px; }
    h2.nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 18px;
      letter-spacing: 0.01em;
    }
    h2.nu-section-title .first { color: #0033cc; }
    h2.nu-section-title .rest { color: var(--nu-dark-text); }

    /* CHEVRON BADGE STEPS */
    .nu-steps { display: grid; gap: 14px; }
    .nu-step {
      display: flex;
      align-items: stretch;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }
    .nu-step-num {
      flex-shrink: 0;
      width: 70px;
      background: var(--nu-blue);
      color: var(--nu-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.6rem;
      clip-path: polygon(0 0, 100% 0, calc(100% - 16px) 50%, 100% 100%, 0 100%);
    }
    .nu-step-body {
      padding: 14px 20px 14px 8px;
      flex-grow: 1;
    }
    .nu-step-title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .nu-step-desc {
      font-size: 0.88rem;
      font-weight: 400;
      color: rgba(255,255,255,0.82);
      line-height: 1.5;
    }

    /* CHECKLIST */
    .nu-checklist {
      list-style: none;
      display: grid;
      gap: 10px;
    }
    .nu-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-cyan);
      padding: 14px 18px;
      border-radius: 6px;
      font-size: 0.95rem;
    }
    .nu-checklist li::before {
      content: '';
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      margin-top: 2px;
      background: var(--nu-white);
    }
    .nu-checklist li strong { color: var(--nu-dark-text); }

    /* TABLE */
    .nu-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
    }
    table.nu-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.93rem;
      background: var(--nu-white);
    }
    table.nu-table thead {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
    }
    table.nu-table th {
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-size: 0.82rem;
      text-transform: uppercase;
    }
    table.nu-table td {
      padding: 12px 16px;
      border-top: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    table.nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-sku { font-weight: 700; color: var(--nu-blue); white-space: nowrap; }

    /* TWO-COL GRID */
    .nu-twocol {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }
    .nu-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nu-card h3 {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-blue);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }
    .nu-card ul { list-style: none; }
    .nu-card li {
      padding: 6px 0;
      font-size: 0.92rem;
      border-bottom: 1px dotted var(--nu-medium-gray);
    }
    .nu-card li:last-child { border-bottom: none; }
    .nu-card li strong { color: var(--nu-dark-text); }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,0,255,0.04) 0%, rgba(6,208,255,0.06) 100%);
      border-left: 6px solid var(--nu-blue);
      padding: 20px 24px;
      border-radius: 4px;
      margin: 20px 0 0;
    }
    .nu-callout-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.2em;
      color: var(--nu-blue);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .nu-callout p { font-size: 0.95rem; color: var(--nu-dark-text); }

    /* SIGN-OFF */
    .nu-signoff {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 28px;
    }
    .nu-signoff .field {
      background: var(--nu-white);
      border: 1px dashed #888;
      border-radius: 6px;
      padding: 18px;
      text-align: center;
    }
    .nu-signoff .line {
      border-bottom: 1.5px solid #333;
      height: 28px;
      margin-bottom: 8px;
    }
    .nu-signoff .lbl {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 1.2rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact {
      font-size: 0.92rem;
      line-height: 1.8;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 16px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 22px 66px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; padding-left: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      h1.nu-page-title { font-size: 1.6rem; }
      .nu-container { padding: 40px 22px 60px; }
      .nu-twocol { grid-template-columns: 1fr; }
      .nu-signoff { grid-template-columns: 1fr; }
      .nu-step-num { width: 54px; font-size: 1.25rem; }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step, .nu-footer { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Phoenix Icon®">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-container">

      <!-- TITLE -->
      <div class="nu-title-block">
        <span class="nu-kicker">reMarkable Action Item</span>
        <h1 class="nu-page-title"><span>Receive &amp;</span> Process Inventory — Last PO Order</h1>
        <p class="nu-subtitle">
          Standard receiving workflow for the most recent purchase order. Verify quantities against the PO,
          inspect condition, log serials and lot numbers, reconcile against the invoice, and release inventory
          to the fulfillment queue so open customer orders can ship without delay.
        </p>
      </div>

      <!-- STATUS BAR -->
      <div class="nu-status-bar">
        <div class="nu-status-tile priority">
          <div class="nu-status-label">Priority</div>
          <div class="nu-status-value">High — Blocks Shipments</div>
        </div>
        <div class="nu-status-tile open">
          <div class="nu-status-label">Status</div>
          <div class="nu-status-value">Open — In Transit / Received</div>
        </div>
        <div class="nu-status-tile">
          <div class="nu-status-label">Owner</div>
          <div class="nu-status-value">Aaron C. Norris</div>
        </div>
        <div class="nu-status-tile">
          <div class="nu-status-label">Source</div>
          <div class="nu-status-value">reMarkable Action Item</div>
        </div>
      </div>

      <!-- RECEIVING WORKFLOW -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Receiving</span> <span class="rest">Workflow — 7 Steps</span></h2>
        <div class="nu-steps">

          <div class="nu-step">
            <div class="nu-step-num">1</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Confirm Shipment &amp; PO Match</div>
              <div class="nu-step-desc">
                Pull the original PO from the Norris Utilities® purchasing folder. Verify carrier, PRO/tracking
                number, and expected arrival against the packing list taped to the skid or attached to the box.
                Flag any mismatch before signing for delivery.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">2</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Visual Damage Inspection — Before Driver Leaves</div>
              <div class="nu-step-desc">
                Walk the skid. Photograph all four sides, the top, and any visible damage. If anything is torn,
                crushed, or the pallet is leaning, write <strong>"Subject to Inspection — Damage Noted"</strong>
                on the BOL before signing. Do not sign clean if it is not clean.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">3</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Count &amp; Verify Against PO Line Items</div>
              <div class="nu-step-desc">
                Open the shipment. Count each SKU and match to the PO quantity. Record actual-received in the
                receiving log. Short, over, or substituted? Note it and hold product aside — do not shelve it
                until variance is resolved with the vendor.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">4</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Inspect Condition &amp; Log Serials / Lot Numbers</div>
              <div class="nu-step-desc">
                For FlexPro Armor covers: check stitching, Velcro, zipper seams, and fabric weave. For rope:
                confirm tag reel length and splice quality. For equipment: record serials. Capture lot numbers
                for anything warranty-tracked.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">5</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Reconcile Invoice vs. PO vs. Received</div>
              <div class="nu-step-desc">
                Pull the vendor invoice. All three documents — PO, packing list, invoice — must agree on SKU,
                qty, and unit price. Any variance goes to the vendor same day. Do not pay or post to QuickBooks
                until reconciled.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">6</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Update Inventory System &amp; QuickBooks</div>
              <div class="nu-step-desc">
                Increment on-hand counts by the received qty. Post the vendor bill in QuickBooks against the
                PO. Update the master tracker so CB and the fulfillment queue can see the inventory as
                available.
              </div>
            </div>
          </div>

          <div class="nu-step">
            <div class="nu-step-num">7</div>
            <div class="nu-step-body">
              <div class="nu-step-title">Release to Fulfillment — Notify Waiting Customers</div>
              <div class="nu-step-desc">
                Pull the list of open orders that were waiting on this PO. Trigger pick/pack for each. Send
                a short status update to any customer whose order was held, so they know product is landing
                and ship date is firm.
              </div>
            </div>
          </div>

        </div>

        <div class="nu-callout">
          <div class="nu-callout-label">Rule</div>
          <p>No inventory is counted "on-hand" until Steps 1–6 are complete. Do not promise ship dates to
          customers off product that is physically here but not yet reconciled and entered. Verified stock only.</p>
        </div>
      </section>

      <!-- RECEIVING CHECKLIST -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Receiving</span> <span class="rest">Day Checklist</span></h2>
        <ul class="nu-checklist">
          <li><div><strong>PO document in hand</strong> — printed or on screen, with vendor name, PO #, and line-item expected qty.</div></li>
          <li><div><strong>Camera ready</strong> — phone photos of the skid pre-breakdown, any damage, and serial plates.</div></li>
          <li><div><strong>Packing list verified</strong> against the physical count before signing BOL.</div></li>
          <li><div><strong>Damage noted on BOL</strong> if anything is off — never sign "clean" on a damaged shipment.</div></li>
          <li><div><strong>All SKUs counted</strong> and actual-received written down next to expected-qty.</div></li>
          <li><div><strong>Serials / lot numbers</strong> captured for anything warranty-tracked (equipment, rope reels, Phoenix Icon® branded product).</div></li>
          <li><div><strong>Invoice pulled</strong> and cross-checked to PO + packing list before posting to QuickBooks.</div></li>
          <li><div><strong>Variance resolved</strong> with vendor — email sent, confirmation received, notes in tracker.</div></li>
          <li><div><strong>Inventory updated</strong> in master tracker and QuickBooks.</div></li>
          <li><div><strong>Open orders released</strong> to fulfillment queue; customers updated where ship-dates shifted.</div></li>
        </ul>
      </section>

      <!-- SKU REFERENCE -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Product</span> <span class="rest">Reference — Common Received SKUs</span></h2>
        <div class="nu-table-wrap">
          <table class="nu-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Product</th>
                <th>Size</th>
                <th>Receiving Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="nu-sku">NU-BC-2851</td>
                <td>FlexPro Armor — 2-Man Bucket Cover</td>
                <td>28" × 51"</td>
                <td>Inspect stitching, Velcro closures, and zipper seams. Handmade USA — expect variation within tolerance.</td>
              </tr>
              <tr>
                <td class="nu-sku">NU-BC-2834</td>
                <td>FlexPro Armor — 1.5-Man Bucket Cover</td>
                <td>28" × 34"</td>
                <td>Same inspection as 2851. Most common OEM replacement size.</td>
              </tr>
              <tr>
                <td class="nu-sku">NU-BC-2851-C</td>
                <td>FlexPro Armor — 2-Man Combo Kit</td>
                <td>28" × 51"</td>
                <td>Verify all combo components present (cover, tie-downs, storage bag).</td>
              </tr>
              <tr>
                <td class="nu-sku">NU-BC-2834-C</td>
                <td>FlexPro Armor — 1.5-Man Combo Kit</td>
                <td>28" × 34"</td>
                <td>Verify all combo components present.</td>
              </tr>
              <tr>
                <td class="nu-sku">Samson Rope</td>
                <td>Samson Rope — Authorized Distributor stock</td>
                <td>Per PO spec</td>
                <td>Confirm tag reel length and splice. CC Donna Poll + Sarah Daniels on any variance claim.</td>
              </tr>
              <tr>
                <td class="nu-sku">Boss Products</td>
                <td>Boss Products — tooling &amp; accessories</td>
                <td>Per PO spec</td>
                <td>CC Troy Gongwer + Thayne Grove on any claim or short-ship.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CONTACTS + DOCS -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Vendor</span> <span class="rest">Contacts &amp; Document Trail</span></h2>
        <div class="nu-twocol">

          <div class="nu-card">
            <h3>Vendor Contacts — CC Protocol</h3>
            <ul>
              <li><strong>Boss Products:</strong> Troy Gongwer + Thayne Grove — CC both, always.</li>
              <li><strong>Samson Rope:</strong> Donna Poll + Sarah Daniels — CC both, always.</li>
              <li><strong>Skylift:</strong> Andrew Jarmoszuk, Dale Williams, Nick Jarmoszuk Jr.</li>
              <li><strong>Bay Shore Systems:</strong> Herb Minatre (owner) / Andy Barron (primary).</li>
              <li><strong>Irby Construction:</strong> Jared Lemoine (new primary).</li>
            </ul>
          </div>

          <div class="nu-card">
            <h3>Documents to File on Every Receive</h3>
            <ul>
              <li><strong>Signed BOL</strong> — with damage notes if applicable.</li>
              <li><strong>Packing list</strong> — annotated with actual-received counts.</li>
              <li><strong>Vendor invoice</strong> — cross-checked and marked reconciled.</li>
              <li><strong>Damage photos</strong> — if applicable, filed by PO number.</li>
              <li><strong>Serial / lot log</strong> — for warranty-tracked product.</li>
              <li><strong>Open-order release list</strong> — who got notified, when.</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- SIGN-OFF -->
      <section class="nu-section">
        <h2 class="nu-section-title"><span class="first">Receiving</span> <span class="rest">Sign-Off</span></h2>
        <p style="font-size:0.95rem; color:#555;">
          Complete after Steps 1–7 are verified. Sign-off closes the receiving event and releases product to
          inventory and fulfillment.
        </p>
        <div class="nu-signoff">
          <div class="field">
            <div class="line"></div>
            <div class="lbl">Received By</div>
          </div>
          <div class="field">
            <div class="line"></div>
            <div class="lbl">Date Received</div>
          </div>
          <div class="field">
            <div class="line"></div>
            <div class="lbl">PO Number</div>
          </div>
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
    <div class="nu-footer-meta">Birmingham, Alabama · Serving 20+ states · Phoenix Icon® registered trademark</div>
  </footer>

</body>
</html>