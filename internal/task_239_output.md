<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4505 Buttewoods Estate Acquisition — Norris Utilities®</title>
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
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
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 16px;
      opacity: 0.95;
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
      font-size: 1.4rem;
      color: var(--nu-white);
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .nu-tagline {
      font-family: var(--font-primary);
      font-style: italic;
      font-weight: 300;
      font-size: 1.3rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.05em;
    }

    /* CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg {
      width: 100%; height: 50px; display: block;
    }

    /* CONTENT */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.03) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
    }
    .nu-content-area > * { position: relative; z-index: 1; }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 20px 28px;
      border-radius: 6px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-left: 6px solid var(--nu-cyan);
    }
    .priority-banner .label {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      padding: 4px 10px;
      border-radius: 3px;
      text-transform: uppercase;
    }
    .priority-banner .text {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.02em;
    }

    /* PAGE TITLE */
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.4rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.15;
    }
    .page-title span { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: #666;
      font-weight: 400;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    /* SECTION */
    .section {
      margin-bottom: 48px;
    }
    .section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      color: var(--nu-blue);
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 3px solid var(--nu-blue);
      display: inline-block;
    }
    .section-title span { color: var(--nu-dark-text); font-weight: 700; }

    /* PROPERTY CARD */
    .property-card {
      background: linear-gradient(135deg, var(--nu-light-gray) 0%, var(--nu-white) 100%);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 10px;
      padding: 32px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .property-stat {
      background: var(--nu-white);
      padding: 20px;
      border-radius: 6px;
      border-left: 4px solid var(--nu-cyan);
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    }
    .property-stat .label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #666;
      margin-bottom: 6px;
    }
    .property-stat .value {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
    }
    .property-stat .value.blue { color: var(--nu-blue); }

    /* NEGOTIATION STAGES */
    .stages {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .stage {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 24px;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .stage:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .stage-number {
      position: absolute;
      top: -14px; left: 20px;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 32px; height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 0.95rem;
      box-shadow: 0 2px 8px rgba(0,0,255,0.3);
    }
    .stage-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      margin-top: 10px;
    }
    .stage-desc {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    /* CHECKLIST */
    .checklist {
      list-style: none;
      padding: 0;
    }
    .checklist li {
      padding: 14px 16px 14px 46px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      margin-bottom: 10px;
      position: relative;
      font-size: 0.95rem;
      transition: border-color 0.2s ease, background 0.2s ease;
    }
    .checklist li:hover {
      border-color: var(--nu-blue);
      background: var(--nu-light-gray);
    }
    .checklist li::before {
      content: '';
      position: absolute;
      left: 16px; top: 50%;
      transform: translateY(-50%);
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      background: var(--nu-white);
    }
    .checklist li strong {
      color: var(--nu-dark-text);
      font-weight: 900;
    }

    /* RISK GRID */
    .risk-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    .risk-card {
      background: var(--nu-white);
      border-radius: 8px;
      padding: 24px;
      border-top: 4px solid;
    }
    .risk-card.green { border-top-color: #2e8b57; background: #f0f8f3; }
    .risk-card.amber { border-top-color: var(--nu-accent-gold); background: #fdf8ec; }
    .risk-card.red { border-top-color: #c0392b; background: #fdf3f2; }
    .risk-card .risk-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .risk-card.green .risk-label { color: #2e8b57; }
    .risk-card.amber .risk-label { color: #8a6d1e; }
    .risk-card.red .risk-label { color: #c0392b; }
    .risk-card h4 {
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
    }
    .risk-card p {
      font-size: 0.9rem;
      color: #444;
      line-height: 1.5;
    }

    /* CONTACT BOX */
    .contact-box {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: var(--nu-white);
      padding: 32px;
      border-radius: 10px;
      text-align: center;
    }
    .contact-box h3 {
      font-weight: 900;
      font-size: 1.4rem;
      color: var(--nu-cyan);
      margin-bottom: 12px;
    }
    .contact-box p {
      font-size: 1rem;
      margin-bottom: 8px;
    }
    .contact-box a {
      color: var(--nu-cyan);
      text-decoration: none;
      font-weight: 700;
    }

    /* NEXT ACTION CALLOUT */
    .next-action {
      background: linear-gradient(135deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
      color: var(--nu-white);
      padding: 28px 32px;
      border-radius: 10px;
      margin-top: 32px;
    }
    .next-action .eyebrow {
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      opacity: 0.9;
      margin-bottom: 6px;
    }
    .next-action .headline {
      font-weight: 900;
      font-size: 1.35rem;
      margin-bottom: 8px;
    }
    .next-action .detail {
      font-size: 0.95rem;
      opacity: 0.95;
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 40px;
      text-align: center;
      font-family: var(--font-primary);
    }
    .nu-footer-tagline {
      font-style: italic;
      font-weight: 300;
      font-size: 1.15rem;
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

    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 200px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 1rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .container { padding: 40px 20px; }
      .page-title { font-size: 1.8rem; }
      .property-card { padding: 20px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-phoenix-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.9"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.8"/>
    </svg>
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
    <div class="container">

      <div class="priority-banner">
        <span class="label">Action Item</span>
        <span class="text">reMarkable Capture — Real Estate Acquisition Negotiation</span>
      </div>

      <h1 class="page-title"><span>Negotiate Purchase</span> — 4505 Buttewoods Estate</h1>
      <div class="page-subtitle">7,098 sq ft estate property — acquisition strategy & negotiation workflow</div>

      <!-- PROPERTY SNAPSHOT -->
      <section class="section">
        <h2 class="section-title">Property <span>Snapshot</span></h2>
        <div class="property-card">
          <p style="font-size: 1.05rem; color: #444; margin-bottom: 8px;">
            Target property under evaluation by Aaron C. Norris for private acquisition. All figures below reflect data captured on the reMarkable action note for 2026-04-23. Verify current-market comparables before opening conversation with the listing agent or seller.
          </p>
          <div class="property-grid">
            <div class="property-stat">
              <div class="label">Address</div>
              <div class="value">4505 Buttewoods</div>
            </div>
            <div class="property-stat">
              <div class="label">Total Square Footage</div>
              <div class="value blue">7,098 sq ft</div>
            </div>
            <div class="property-stat">
              <div class="label">Property Type</div>
              <div class="value">Estate</div>
            </div>
            <div class="property-stat">
              <div class="label">Transaction Status</div>
              <div class="value">Negotiation — Open</div>
            </div>
          </div>
        </div>
      </section>

      <!-- PRE-NEGOTIATION CHECKLIST -->
      <section class="section">
        <h2 class="section-title">Pre-Negotiation <span>Due Diligence</span></h2>
        <ul class="checklist">
          <li><strong>Pull comparable sales</strong> — estate properties 6,500–7,500 sq ft within a 3-mile radius, closed in the last 180 days.</li>
          <li><strong>Review property tax records</strong> — confirm assessed value, lot size, year built, recent improvements, and owner-of-record.</li>
          <li><strong>Title search</strong> — verify clear title, easements, liens, judgments, and prior deed transfers (any lender with a chain of interest).</li>
          <li><strong>Professional inspection</strong> — roof, foundation, HVAC, plumbing, electrical, and any outbuildings on the 7,098 sq ft footprint.</li>
          <li><strong>Survey confirmation</strong> — confirm lot lines, boundary markers, encroachments, right-of-way, and setback compliance.</li>
          <li><strong>Financing pre-approval</strong> — confirmed terms from Renasant Bank (Patrick Lavette) or alternate lender before the first offer is submitted.</li>
          <li><strong>Zoning &amp; use review</strong> — confirm residential/estate use, ADU rules, short-term rental restrictions, and HOA covenants (if any).</li>
          <li><strong>Determine max-walk number</strong> — hard ceiling price before emotion enters the room. Written down before first call.</li>
        </ul>
      </section>

      <!-- NEGOTIATION STAGES -->
      <section class="section">
        <h2 class="section-title">Negotiation <span>Stages</span></h2>
        <div class="stages">
          <div class="stage">
            <div class="stage-number">1</div>
            <div class="stage-title">Opening Contact</div>
            <div class="stage-desc">Direct outreach to seller or listing agent. Establish rapport, confirm motivation to sell, timeline, and disclosed issues. Do not anchor on price yet.</div>
          </div>
          <div class="stage">
            <div class="stage-number">2</div>
            <div class="stage-title">Information Gathering</div>
            <div class="stage-desc">Seller motivation, time on market, prior offers, repair history, liens, and any contingencies the seller will or will not entertain.</div>
          </div>
          <div class="stage">
            <div class="stage-number">3</div>
            <div class="stage-title">Anchor Offer</div>
            <div class="stage-desc">Submit written offer supported by comparables. Include earnest money, inspection contingency, financing contingency, and firm close date.</div>
          </div>
          <div class="stage">
            <div class="stage-number">4</div>
            <div class="stage-title">Counter Cycle</div>
            <div class="stage-desc">Work the middle. Trade on terms, not price alone — close date, repair credits, included fixtures, rent-back period. Stay inside the max-walk ceiling.</div>
          </div>
          <div class="stage">
            <div class="stage-number">5</div>
            <div class="stage-title">Contract &amp; Contingency</div>
            <div class="stage-desc">Execute purchase agreement. Inspection period, appraisal, financing contingency, and title review locked before earnest money goes hard.</div>
          </div>
          <div class="stage">
            <div class="stage-number">6</div>
            <div class="stage-title">Close &amp; Transfer</div>
            <div class="stage-desc">Final walk-through, settlement statement review, wire confirmation, deed recording, and keys-in-hand. Archive file to personal records.</div>
          </div>
        </div>
      </section>

      <!-- RISK ASSESSMENT -->
      <section class="section">
        <h2 class="section-title">Risk <span>Assessment</span></h2>
        <div class="risk-grid">
          <div class="risk-card green">
            <div class="risk-label">● Green — Manageable</div>
            <h4>Financing Capacity</h4>
            <p>Existing banking relationship with Patrick Lavette at Renasant Bank provides a clear path to pre-approval and competitive terms on an estate-grade loan.</p>
          </div>
          <div class="risk-card amber">
            <div class="risk-label">● Amber — Watch</div>
            <h4>Property Condition</h4>
            <p>7,098 sq ft estate properties carry elevated deferred-maintenance exposure — roof, HVAC zones, foundation, and major systems all need professional verification.</p>
          </div>
          <div class="risk-card amber">
            <div class="risk-label">● Amber — Watch</div>
            <h4>Appraisal Gap</h4>
            <p>Estate-class inventory is thin on recent comparables. Confirm the appraised value supports the negotiated price before releasing the financing contingency.</p>
          </div>
          <div class="risk-card red">
            <div class="risk-label">● Red — Critical</div>
            <h4>Emotional Anchoring</h4>
            <p>Largest personal risk in any estate negotiation. The pre-written max-walk number must be honored. If seller will not meet terms, walk away cleanly and revisit in 30–60 days.</p>
          </div>
          <div class="risk-card red">
            <div class="risk-label">● Red — Critical</div>
            <h4>Title &amp; Encumbrances</h4>
            <p>Older estate properties often carry prior deeds of trust, utility easements, or unrecorded claims. A full title commitment must be reviewed before contract hardens.</p>
          </div>
          <div class="risk-card green">
            <div class="risk-label">● Green — Manageable</div>
            <h4>Negotiation Experience</h4>
            <p>Aaron brings three generations of utility-equipment deal experience — comfort with large-dollar negotiations, contract terms, and walking away when the math fails.</p>
          </div>
        </div>
      </section>

      <!-- KEY NUMBERS TO CARRY -->
      <section class="section">
        <h2 class="section-title">Numbers To <span>Carry In</span></h2>
        <div class="property-card">
          <p style="margin-bottom: 16px; font-size: 1rem; color: #444;">
            Every negotiation call requires three numbers written down in advance — the target, the stretch, and the walk-away. Do not enter a conversation without all three.
          </p>
          <div class="property-grid">
            <div class="property-stat">
              <div class="label">Target Price</div>
              <div class="value blue">$ ____________</div>
            </div>
            <div class="property-stat">
              <div class="label">Stretch Ceiling</div>
              <div class="value">$ ____________</div>
            </div>
            <div class="property-stat">
              <div class="label">Hard Walk-Away</div>
              <div class="value">$ ____________</div>
            </div>
            <div class="property-stat">
              <div class="label">Close Date Preferred</div>
              <div class="value">__________</div>
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 0.9rem; color: #666; font-style: italic;">
            Fill these in before the first outreach call. Do not negotiate without them on the desk in front of you.
          </p>
        </div>
      </section>

      <!-- KEY CONTACTS -->
      <section class="section">
        <h2 class="section-title">Key <span>Contacts</span></h2>
        <div class="contact-box">
          <h3>Supporting Professionals</h3>
          <p><strong>Financing:</strong> Patrick Lavette — Renasant Bank</p>
          <p><strong>Legal / Title:</strong> Attorney of record (to be assigned at contract)</p>
          <p><strong>Inspection:</strong> Licensed residential inspector — schedule inside contingency window</p>
          <p style="margin-top: 16px; font-size: 0.9rem; opacity: 0.85;">
            All written offers and counters routed through Aaron C. Norris personally — <a href="tel:2055001343">205-500-1343</a>
          </p>
        </div>
      </section>

      <!-- NEXT ACTION -->
      <div class="next-action">
        <div class="eyebrow">Immediate Next Action</div>
        <div class="headline">Lock the three numbers — target, stretch, walk-away.</div>
        <div class="detail">Before any outbound call to the listing agent or seller, finalize the pre-approval letter with Patrick Lavette at Renasant Bank and pull the comparable-sales package. The first conversation is for information, not price.</div>
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