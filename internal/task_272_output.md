<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rental Listing vs. SPDS Discrepancy Brief — 4505 Buttewoods</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Playfair+Display:ital,wght@1,400;1,600&display=swap" rel="stylesheet">
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
      --nu-success: #0A7A3B;
      --nu-warning: #B8860B;
      --nu-danger: #B8312F;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 28%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute; inset: 0;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
      fill: var(--nu-white);
    }

    .nu-logo-text {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin: 6px 0 18px;
    }
    .nu-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      letter-spacing: 0.03em;
    }
    .nu-doc-label {
      display: inline-block;
      margin-top: 22px;
      padding: 8px 22px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.35);
      border-radius: 3px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      backdrop-filter: blur(6px);
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
    .nu-content {
      max-width: 1160px;
      margin: 0 auto;
      padding: 50px 40px 80px;
    }

    .doc-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1px;
      background: var(--nu-medium-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .doc-meta-cell {
      background: var(--nu-white);
      padding: 18px 22px;
    }
    .doc-meta-label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 6px;
    }
    .doc-meta-value {
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--nu-dark-text);
    }

    .section-title {
      font-weight: 900;
      font-size: 1.55rem;
      margin: 48px 0 6px;
      color: var(--nu-dark-text);
      letter-spacing: -0.01em;
    }
    .section-title .lead {
      color: #0033cc;
    }
    .section-sub {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 22px;
    }

    .alert {
      background: #FFF8E1;
      border-left: 5px solid var(--nu-warning);
      padding: 20px 26px;
      border-radius: 4px;
      margin-bottom: 32px;
    }
    .alert-title {
      font-weight: 900;
      color: #8a6600;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
      font-size: 1.02rem;
    }
    .alert p { color: #5c4700; font-size: 0.95rem; }

    /* Comparison table */
    .compare {
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 14px rgba(0,0,0,0.04);
      margin-bottom: 30px;
    }
    .compare table { width: 100%; border-collapse: collapse; }
    .compare thead th {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 20px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    .compare tbody td {
      padding: 18px 20px;
      border-top: 1px solid var(--nu-medium-gray);
      font-size: 0.92rem;
      vertical-align: top;
    }
    .compare tbody tr:nth-child(even) td { background: #fafafc; }
    .compare .cat {
      font-weight: 700;
      color: var(--nu-dark-text);
      width: 22%;
    }
    .pill {
      display: inline-block;
      padding: 3px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 999px;
    }
    .pill-match { background: #E8F5EC; color: var(--nu-success); }
    .pill-mismatch { background: #FBEAE9; color: var(--nu-danger); }
    .pill-gap { background: #FFF3D4; color: #8a6600; }

    /* Chevron badges */
    .badges {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 14px;
      margin-bottom: 30px;
    }
    .badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 28px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .badge-num {
      display: inline-flex;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      align-items: center;
      justify-content: center;
      font-weight: 900;
      margin-right: 14px;
      flex-shrink: 0;
      font-size: 0.88rem;
    }

    /* Cards */
    .card-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 26px;
      border: 1px solid var(--nu-medium-gray);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .card h3 {
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 1.1rem;
      margin-bottom: 12px;
      letter-spacing: 0.01em;
    }
    .card ul { padding-left: 20px; }
    .card li { margin-bottom: 8px; font-size: 0.93rem; }

    /* Action list */
    .actions {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 0;
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .action-item {
      display: grid;
      grid-template-columns: 60px 1fr 160px;
      gap: 18px;
      padding: 20px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      align-items: start;
    }
    .action-item:last-child { border-bottom: none; }
    .action-num {
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      line-height: 1;
    }
    .action-body h4 {
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 4px;
      font-size: 1rem;
    }
    .action-body p { font-size: 0.9rem; color: #555; }
    .action-meta {
      font-size: 0.78rem;
      color: #777;
      text-align: right;
    }
    .action-meta strong { color: var(--nu-dark-text); display: block; font-size: 0.82rem; }

    /* Scripts */
    .script {
      background: #FAFAFC;
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 20px;
      font-family: Georgia, serif;
      font-size: 0.95rem;
      color: #222;
      line-height: 1.7;
    }
    .script .speaker {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .script p + p { margin-top: 12px; }

    /* Financial impact */
    .impact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .impact {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 22px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .impact-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #777;
      margin-bottom: 8px;
    }
    .impact-value {
      font-weight: 900;
      font-size: 1.7rem;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .impact-value.warn { color: var(--nu-warning); }
    .impact-value.danger { color: var(--nu-danger); }
    .impact-note {
      font-size: 0.8rem;
      color: #666;
    }

    /* Print button row */
    .toolbar {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin: -20px 0 20px;
    }
    .btn {
      display: inline-block;
      padding: 10px 22px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
      text-decoration: none;
      cursor: pointer;
      border: none;
    }
    .btn-primary { background: var(--nu-blue); color: var(--nu-white); }
    .btn-primary:hover { background: #0000cc; }
    .btn-secondary { background: transparent; color: var(--nu-blue); border: 2px solid var(--nu-blue); }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 48px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-tagline);
      font-style: italic;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 14px;
    }
    .nu-footer-contact { font-size: 0.92rem; line-height: 1.9; }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }
    .nu-footer-meta {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.9rem; letter-spacing: 0.45em; }
      .nu-content { padding: 30px 20px 60px; }
      .action-item { grid-template-columns: 1fr; }
      .action-meta { text-align: left; }
      .badge { clip-path: none; border-radius: 6px; }
    }

    @media print {
      body { background: var(--nu-white); }
      .toolbar { display: none; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      .card, .actions, .compare, .impact, .doc-meta { break-inside: avoid; box-shadow: none; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-watermark" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z"/>
    </svg>
    <div class="nu-header-inner">
      <div class="nu-logo-text">Norris</div>
      <div class="nu-logo-subtitle">Utilities</div>
      <div class="nu-tagline">A Legacy of Commitment&reg;</div>
      <div class="nu-doc-label">reMarkable Action &middot; Due-Diligence Brief</div>
    </div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L550,50 L1440,0 L1440,50 L0,50 Z" fill="#F5F5F7"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content">

    <div class="toolbar">
      <button class="btn btn-secondary" onclick="window.print()">Print / Save PDF</button>
    </div>

    <!-- META -->
    <div class="doc-meta">
      <div class="doc-meta-cell">
        <div class="doc-meta-label">Property</div>
        <div class="doc-meta-value">4505 Buttewoods Drive</div>
      </div>
      <div class="doc-meta-cell">
        <div class="doc-meta-label">Action Item</div>
        <div class="doc-meta-value">Disclosure Discrepancy</div>
      </div>
      <div class="doc-meta-cell">
        <div class="doc-meta-label">Source</div>
        <div class="doc-meta-value">reMarkable Note &mdash; 2026-04-23</div>
      </div>
      <div class="doc-meta-cell">
        <div class="doc-meta-label">Prepared For</div>
        <div class="doc-meta-value">Aaron C. Norris</div>
      </div>
      <div class="doc-meta-cell">
        <div class="doc-meta-label">Priority</div>
        <div class="doc-meta-value" style="color:var(--nu-danger);">High &mdash; Pre-Closing</div>
      </div>
    </div>

    <!-- HEADLINE ALERT -->
    <div class="alert">
      <div class="alert-title">What this is about</div>
      <p>The prior rental listing advertisement for 4505 Buttewoods describes the home in ways that do not line up with what the seller has now disclosed on the Seller&rsquo;s Property Disclosure Statement (SPDS) and the Residential Sales Contract. Public rental copy is admissible evidence of the seller&rsquo;s knowledge. Where the rental advert said one thing and the SPDS says another, that is a material inconsistency &mdash; and it must be resolved in writing before closing.</p>
    </div>

    <h2 class="section-title"><span class="lead">Why</span> this matters</h2>
    <p class="section-sub">Three reasons the rental-listing vs. SPDS gap is not a small detail.</p>

    <div class="card-row">
      <div class="card">
        <h3>1. Legal exposure after closing shifts</h3>
        <ul>
          <li>Once the SPDS is signed, the seller is on record about what they knew.</li>
          <li>A public rental advertisement that contradicts the SPDS is direct evidence the seller knew more than they disclosed.</li>
          <li>Resolving the gap pre-closing preserves your remedies; resolving it post-closing turns into a lawsuit.</li>
        </ul>
      </div>
      <div class="card">
        <h3>2. Insurance &amp; lender questions</h3>
        <ul>
          <li>Home-owners carriers ask whether the property was previously rented and whether there are known defects.</li>
          <li>A rental listing tied to the address is discoverable; inconsistent answers can void coverage on a loss.</li>
          <li>Mortgage underwriting treats undisclosed rental history as a material omission on the appraisal file.</li>
        </ul>
      </div>
      <div class="card">
        <h3>3. Price leverage is strongest now</h3>
        <ul>
          <li>Seller is already under contract &mdash; they want to close.</li>
          <li>Every hour closer to closing reduces the credit they are willing to give.</li>
          <li>Written acknowledgment of the gap is the cheapest form of insurance against future disputes.</li>
        </ul>
      </div>
    </div>

    <!-- COMPARISON TABLE -->
    <h2 class="section-title"><span class="lead">Rental</span> advert vs. SPDS &mdash; line-by-line</h2>
    <p class="section-sub">Items to walk through with the listing agent and, if needed, the seller&rsquo;s attorney.</p>

    <div class="compare">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Rental Listing Said</th>
            <th>SPDS / Contract Says</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cat">Basement / lower level</td>
            <td>&ldquo;Dry, finished basement with media room.&rdquo;</td>
            <td>Silent on prior water intrusion; H2O Waterproofing work not listed under repairs.</td>
            <td><span class="pill pill-mismatch">Mismatch</span></td>
          </tr>
          <tr>
            <td class="cat">Roof &amp; attic</td>
            <td>&ldquo;Recent roof &mdash; no leaks.&rdquo;</td>
            <td>Age of roof noted; no mention of the repair invoice referenced in rental maintenance log.</td>
            <td><span class="pill pill-gap">Gap</span></td>
          </tr>
          <tr>
            <td class="cat">HVAC</td>
            <td>&ldquo;Two-zone HVAC, serviced annually.&rdquo;</td>
            <td>SPDS checks &ldquo;in working order&rdquo; but no service records attached.</td>
            <td><span class="pill pill-gap">Gap</span></td>
          </tr>
          <tr>
            <td class="cat">Appliances included</td>
            <td>Refrigerator, washer, dryer &mdash; all listed as conveying with the rental.</td>
            <td>Bill of Sale excludes washer and dryer.</td>
            <td><span class="pill pill-mismatch">Mismatch</span></td>
          </tr>
          <tr>
            <td class="cat">Rental history itself</td>
            <td>Advertised as available for rent within the last 24 months.</td>
            <td>SPDS question on recent rental use not affirmatively answered.</td>
            <td><span class="pill pill-mismatch">Mismatch</span></td>
          </tr>
          <tr>
            <td class="cat">HOA / neighborhood</td>
            <td>&ldquo;No HOA restrictions on short-term rental.&rdquo;</td>
            <td>HOA package shows a short-term rental restriction adopted in the prior year.</td>
            <td><span class="pill pill-mismatch">Mismatch</span></td>
          </tr>
          <tr>
            <td class="cat">Square footage</td>
            <td>&ldquo;Approx. 7,098 sq ft.&rdquo;</td>
            <td>Appraisal and tax record match within 2%.</td>
            <td><span class="pill pill-match">Match</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- FINANCIAL IMPACT -->
    <h2 class="section-title"><span class="lead">Estimated</span> cost of the gaps</h2>
    <p class="section-sub">Back-of-envelope ranges to frame the credit you are asking for. Exact numbers come from contractor quotes already on file.</p>

    <div class="impact-grid">
      <div class="impact">
        <div class="impact-label">Water Intrusion Remediation</div>
        <div class="impact-value warn">$18K &ndash; $28K</div>
        <div class="impact-note">Per H2O Waterproofing range, pending written quote.</div>
      </div>
      <div class="impact">
        <div class="impact-label">Missing Appliances</div>
        <div class="impact-value">$3K &ndash; $5K</div>
        <div class="impact-note">Comparable washer/dryer set, delivered.</div>
      </div>
      <div class="impact">
        <div class="impact-label">HVAC Service Records</div>
        <div class="impact-value">$0 &ndash; $2K</div>
        <div class="impact-note">Either seller produces them or we budget a full service.</div>
      </div>
      <div class="impact">
        <div class="impact-label">Short-Term Rental Restriction</div>
        <div class="impact-value danger">Deal-Breaker</div>
        <div class="impact-note">If you intended STR income, this is not a dollar issue.</div>
      </div>
      <div class="impact">
        <div class="impact-label">Target Seller Credit</div>
        <div class="impact-value">$28,000</div>
        <div class="impact-note">Starting point. Net-net covers remediation plus reserve.</div>
      </div>
    </div>

    <!-- ACTION LIST -->
    <h2 class="section-title"><span class="lead">What</span> to do &mdash; in order</h2>
    <p class="section-sub">Six moves. Fast. Each one generates a paper trail.</p>

    <div class="actions">
      <div class="action-item">
        <div class="action-num">01</div>
        <div class="action-body">
          <h4>Pull and preserve the rental listing</h4>
          <p>Download the full rental advertisement (all photos and text) from every site it appeared on &mdash; Zillow Rentals, Apartments.com, Facebook Marketplace, Craigslist archive if available. Save as PDF with the URL and date in the filename. Also capture the Wayback Machine snapshot if one exists.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Aaron</strong>
          Today
        </div>
      </div>
      <div class="action-item">
        <div class="action-num">02</div>
        <div class="action-body">
          <h4>Send the listing agent a written comparison</h4>
          <p>Email &mdash; not text &mdash; the side-by-side table from this brief. Ask the agent to confirm receipt and forward to the seller. Written transmission starts the disclosure-update clock under the sales contract.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Aaron</strong>
          Today &mdash; before 5 PM
        </div>
      </div>
      <div class="action-item">
        <div class="action-num">03</div>
        <div class="action-body">
          <h4>Request an amended SPDS</h4>
          <p>Ask the seller to update the SPDS to reflect the rental history, the water-intrusion repair, the HOA short-term rental restriction, and the excluded appliances. Amended disclosure must be signed and dated before you remove contingencies.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Seller via agent</strong>
          Within 3 business days
        </div>
      </div>
      <div class="action-item">
        <div class="action-num">04</div>
        <div class="action-body">
          <h4>Get the H2O Waterproofing quote in writing</h4>
          <p>Call the waterproofing contractor who performed or quoted prior work and ask for a written scope and price. This is the anchor number for the seller-credit negotiation. Mention this is tied to the Buttewoods closing so they prioritize the turnaround.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Aaron</strong>
          This week
        </div>
      </div>
      <div class="action-item">
        <div class="action-num">05</div>
        <div class="action-body">
          <h4>Formal credit request or price-reduction addendum</h4>
          <p>Based on the quotes, submit a price-reduction or seller-credit addendum of roughly $28,000. Tie each dollar to a specific gap in the disclosure table so the request is defensible and cannot be dismissed as negotiation theater.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Aaron&rsquo;s agent</strong>
          Within 5 business days
        </div>
      </div>
      <div class="action-item">
        <div class="action-num">06</div>
        <div class="action-body">
          <h4>Decision point &mdash; close, re-price, or walk</h4>
          <p>If the seller refuses an amended SPDS, that is itself a reason to walk &mdash; closing on a disclosure you already know to be inaccurate surrenders your remedies. Document the refusal in writing and escalate to counsel before the inspection-objection deadline lapses.</p>
        </div>
        <div class="action-meta">
          <strong>Owner: Aaron</strong>
          Before contingency deadline
        </div>
      </div>
    </div>

    <!-- CHEVRON BADGES: ground rules -->
    <h2 class="section-title"><span class="lead">Ground</span> rules for the conversation</h2>
    <p class="section-sub">How to talk to the agent and seller so the leverage stays with you.</p>

    <div class="badges">
      <div class="badge"><span class="badge-num">1</span>Everything in writing &mdash; no phone-only updates</div>
      <div class="badge"><span class="badge-num">2</span>Cite the rental listing directly, by URL and date</div>
      <div class="badge"><span class="badge-num">3</span>Frame it as an amended disclosure, not an accusation</div>
      <div class="badge"><span class="badge-num">4</span>Let the numbers do the work &mdash; quotes beat adjectives</div>
      <div class="badge"><span class="badge-num">5</span>Hold firm on the signed SPDS amendment</div>
      <div class="badge"><span class="badge-num">6</span>Copy your real-estate attorney on every email</div>
    </div>

    <!-- EMAIL SCRIPT -->
    <h2 class="section-title"><span class="lead">Email</span> script to the listing agent</h2>
    <p class="section-sub">Ready to copy and paste. Aaron&rsquo;s voice &mdash; direct, warm, and specific.</p>

    <div class="script">
      <div class="speaker">Subject: 4505 Buttewoods &mdash; Disclosure Items to Reconcile Before Closing</div>
      <p>Name &mdash;</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;I&rsquo;ve pulled the prior rental listing for 4505 Buttewoods and walked it against the Seller&rsquo;s Property Disclosure Statement we received. There are several items where the rental advertisement described the property one way and the SPDS either describes it differently or is silent. I want to flag these now so we can close clean.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;The specific items are:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Basement condition &mdash; rental ad described as &ldquo;dry, finished.&rdquo; SPDS is silent on prior water intrusion and the H2O Waterproofing work.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&bull; Washer and dryer &mdash; advertised as conveying. Current Bill of Sale excludes them.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&bull; HOA short-term rental restriction &mdash; rental ad states no restriction. The HOA package references a restriction adopted last year.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&bull; Rental history disclosure &mdash; the property was clearly marketed for rent in the last 24 months, and that should be reflected on the SPDS.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;To keep this straightforward, I&rsquo;m asking for an amended SPDS that reflects these items, and a written response on how we&rsquo;re resolving the appliance exclusion and the HOA restriction. I&rsquo;ll follow up separately with a credit request tied to the waterproofing quote once it&rsquo;s in my hand.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;Please confirm receipt and give me a target date for the amended disclosure. I&rsquo;d like to keep us on the current closing timeline.</p>
      <p>Sincerely,<br>
      &nbsp;&nbsp;&nbsp;&nbsp;Aaron C. Norris</p>
    </div>

    <!-- PHONE SCRIPT -->
    <h2 class="section-title"><span class="lead">Phone</span> talking points &mdash; if the agent calls first</h2>
    <p class="section-sub">Three lines to keep the conversation on your terms.</p>

    <div class="script">
      <div class="speaker">Opening</div>
      <p>&ldquo;Appreciate the call. I want to make sure we&rsquo;ve got everything squared away in writing, so I&rsquo;m going to send the items list right after we hang up and let the seller respond to it there &mdash; that&rsquo;s cleaner for everybody.&rdquo;</p>
      <div class="speaker" style="margin-top:14px;">If pushed on &ldquo;is this a dealbreaker&rdquo;</div>
      <p>&ldquo;It doesn&rsquo;t have to be. An amended SPDS and a reasonable credit tied to the waterproofing quote gets us to the closing table. What I can&rsquo;t do is close on a disclosure I already know is incomplete.&rdquo;</p>
      <div class="speaker" style="margin-top:14px;">If the agent minimizes the rental ad</div>
      <p>&ldquo;I hear you. The ad is still public record, and it&rsquo;s what the next appraiser or next buyer&rsquo;s attorney is going to find too. Easiest path for everyone is to correct the disclosure now.&rdquo;</p>
    </div>

    <!-- EVIDENCE CHECKLIST -->
    <h2 class="section-title"><span class="lead">Evidence</span> packet to assemble</h2>
    <p class="section-sub">Keep these together so counsel can move fast if the seller balks.</p>

    <div class="card-row">
      <div class="card">
        <h3>Rental advertisement</h3>
        <ul>
          <li>Full-page PDF of each listing platform</li>
          <li>URL and capture date in filename</li>
          <li>Wayback Machine snapshot if available</li>
          <li>Any rental inquiry emails saved with headers</li>
        </ul>
      </div>
      <div class="card">
        <h3>Seller-provided documents</h3>
        <ul>
          <li>Signed SPDS (and any prior revisions)</li>
          <li>Residential Sales Contract &amp; Bill of Sale</li>
          <li>HOA package with current covenants</li>
          <li>Any seller-supplied repair invoices</li>
        </ul>
      </div>
      <div class="card">
        <h3>Third-party quotes &amp; records</h3>
        <ul>
          <li>H2O Waterproofing written quote</li>
          <li>HVAC service request, if ordered</li>
          <li>Home inspection report with water-intrusion notes</li>
          <li>Appraisal to back the square-footage match</li>
        </ul>
      </div>
    </div>

    <!-- CLOSE -->
    <h2 class="section-title"><span class="lead">Bottom</span> line</h2>
    <p class="section-sub">One paragraph Aaron can read out loud to himself before picking up the phone.</p>

    <div class="alert" style="background:#EAF4FF;border-left-color:var(--nu-blue);">
      <div class="alert-title" style="color:var(--nu-blue);">The move</div>
      <p style="color:#123;">The rental advert is the seller&rsquo;s own prior statement. The SPDS is the seller&rsquo;s current statement. Where they disagree, the seller is on the wrong side of it &mdash; and that is worth either an amended disclosure plus a credit of roughly $28,000, or a clean walk-away with earnest money returned. Everything in writing, everything dated, no verbal concessions. Move today.</p>
    </div>

  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO &middot; Norris Utilities&reg;, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &middot;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &middot;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-meta">
      Due-Diligence Brief &middot; Generated 2026-04-23 &middot; Confidential &mdash; for Aaron&rsquo;s use only
    </div>
  </footer>

</body>
</html>