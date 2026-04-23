<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buttewoods Estate Acquisition — Negotiation Playbook — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

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
      --nu-success: #0B8F3E;
      --nu-warn: #C77700;
      --nu-danger: #B91C1C;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 35%, #0066ee 65%, #00aaff 85%, var(--nu-cyan) 100%);
      padding: 64px 40px 88px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
    }
    .nu-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 80px);
      z-index: 1;
      opacity: 0.7;
    }
    .nu-header::after {
      content: '';
      position: absolute;
      top: -50%; right: -20%;
      width: 80%; height: 200%;
      background: radial-gradient(ellipse, rgba(6,208,255,0.18) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header * { position: relative; z-index: 2; }

    .nu-phoenix-icon {
      width: 72px; height: 72px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
    }
    .nu-logo-text {
      font-weight: 900;
      font-size: 3rem;
      color: var(--nu-white);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 4px;
      text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }
    .nu-logo-subtitle {
      font-weight: 900;
      font-size: 1.2rem;
      color: var(--nu-white);
      letter-spacing: 0.75em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .nu-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.92);
      letter-spacing: 0.05em;
    }
    .nu-doc-meta {
      margin-top: 18px;
      display: inline-block;
      padding: 6px 18px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 100px;
      color: var(--nu-white);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    /* WHITE ASYMMETRIC CHEVRON */
    .nu-chevron {
      position: relative;
      height: 50px;
      margin-top: -50px;
      z-index: 10;
    }
    .nu-chevron svg { width: 100%; height: 50px; display: block; }

    /* CONTENT AREA + GHOST PHOENIX */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
      overflow: hidden;
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 20%; left: 50%;
      transform: translateX(-50%);
      width: 65%; max-width: 700px;
      aspect-ratio: 1;
      background: radial-gradient(circle, rgba(0,0,255,0.04) 0%, transparent 70%);
      opacity: 0.7;
      z-index: 0;
    }
    .nu-wrap {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 40px;
    }

    /* HEADLINE */
    .nu-headline {
      font-weight: 900;
      font-size: 2.25rem;
      color: var(--nu-dark-text);
      line-height: 1.15;
      margin-bottom: 8px;
    }
    .nu-headline .blue { color: var(--nu-blue); }
    .nu-subhead {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 32px;
      max-width: 820px;
    }

    /* PROPERTY SNAPSHOT */
    .nu-snapshot {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2px;
      background: var(--nu-medium-gray);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 40px;
      box-shadow: 0 2px 14px rgba(0,0,0,0.06);
    }
    .nu-snapshot-cell {
      background: var(--nu-white);
      padding: 22px 20px;
      text-align: center;
    }
    .nu-snapshot-label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 8px;
    }
    .nu-snapshot-value {
      font-weight: 900;
      font-size: 1.35rem;
      color: var(--nu-dark-text);
      line-height: 1.2;
    }
    .nu-snapshot-note {
      font-size: 0.75rem;
      color: #777;
      margin-top: 4px;
    }

    /* SECTION HEADER */
    .nu-section-title {
      font-weight: 900;
      font-size: 1.5rem;
      margin: 44px 0 16px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .lead { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* CHEVRON BADGES */
    .nu-badge {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 12px 28px 12px 18px;
      margin: 4px 8px 12px 0;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%);
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-badge.cyan { background: linear-gradient(135deg, #0033cc, var(--nu-cyan)); }

    /* CARDS */
    .nu-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 12px;
    }
    .nu-card {
      background: var(--nu-white);
      border-radius: 10px;
      padding: 24px 24px 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .nu-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(0,0,0,0.09);
    }
    .nu-card.cyan-top { border-top-color: var(--nu-cyan); }
    .nu-card.gold-top { border-top-color: var(--nu-accent-gold); }
    .nu-card-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 10px;
      letter-spacing: 0.02em;
    }
    .nu-card-title .num {
      display: inline-block;
      background: var(--nu-blue);
      color: var(--nu-white);
      width: 28px; height: 28px;
      line-height: 28px;
      text-align: center;
      border-radius: 50%;
      font-size: 0.85rem;
      margin-right: 10px;
      vertical-align: middle;
    }
    .nu-card p { font-size: 0.95rem; margin-bottom: 8px; }
    .nu-card ul { padding-left: 20px; font-size: 0.92rem; }
    .nu-card ul li { margin-bottom: 4px; }

    /* PRICE LADDER */
    .nu-ladder {
      background: var(--nu-light-gray);
      border-radius: 12px;
      padding: 28px;
      margin: 12px 0 24px;
    }
    .nu-ladder-row {
      display: grid;
      grid-template-columns: 150px 1fr auto;
      gap: 18px;
      align-items: center;
      padding: 14px 0;
      border-bottom: 1px dashed #cfcfd6;
    }
    .nu-ladder-row:last-child { border-bottom: none; }
    .nu-ladder-tier {
      font-weight: 900;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
    }
    .nu-ladder-desc {
      font-size: 0.93rem;
      color: #444;
    }
    .nu-ladder-price {
      font-weight: 900;
      font-size: 1.15rem;
      color: var(--nu-dark-text);
      text-align: right;
      min-width: 140px;
    }
    .nu-ladder-row.anchor .nu-ladder-tier { color: var(--nu-danger); }
    .nu-ladder-row.target .nu-ladder-tier { color: var(--nu-success); }
    .nu-ladder-row.walk  .nu-ladder-tier  { color: var(--nu-warn); }

    /* TABLE */
    .nu-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--nu-white);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      font-size: 0.92rem;
      margin-bottom: 12px;
    }
    .nu-table thead th {
      background: linear-gradient(135deg, var(--nu-blue), #0044dd);
      color: var(--nu-white);
      text-align: left;
      padding: 14px 16px;
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nu-table tbody td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--nu-medium-gray);
      vertical-align: top;
    }
    .nu-table tbody tr:nth-child(even) { background: var(--nu-light-gray); }
    .nu-table tbody tr:last-child td { border-bottom: none; }
    .nu-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 100px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .nu-pill.green { background: #E6F6EC; color: var(--nu-success); }
    .nu-pill.amber { background: #FFF3E0; color: var(--nu-warn); }
    .nu-pill.red   { background: #FDECEC; color: var(--nu-danger); }
    .nu-pill.blue  { background: #E5EFFF; color: var(--nu-blue); }

    /* CHECKLIST */
    .nu-check {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 10px 28px;
      margin-bottom: 8px;
    }
    .nu-check li {
      position: relative;
      padding-left: 30px;
      font-size: 0.94rem;
    }
    .nu-check li::before {
      content: '';
      position: absolute;
      left: 0; top: 4px;
      width: 18px; height: 18px;
      border: 2px solid var(--nu-blue);
      border-radius: 4px;
      background: var(--nu-white);
    }

    /* CALLOUT */
    .nu-callout {
      background: linear-gradient(135deg, rgba(0,51,204,0.04), rgba(6,208,255,0.06));
      border-left: 4px solid var(--nu-cyan);
      padding: 18px 22px;
      border-radius: 0 10px 10px 0;
      margin: 16px 0 28px;
      font-size: 0.96rem;
    }
    .nu-callout strong { color: var(--nu-blue); }

    /* TIMELINE */
    .nu-timeline {
      position: relative;
      padding-left: 36px;
      margin-bottom: 16px;
    }
    .nu-timeline::before {
      content: '';
      position: absolute;
      left: 12px; top: 6px; bottom: 6px;
      width: 2px;
      background: linear-gradient(180deg, var(--nu-blue), var(--nu-cyan));
    }
    .nu-timeline-item {
      position: relative;
      padding-bottom: 22px;
    }
    .nu-timeline-item::before {
      content: '';
      position: absolute;
      left: -30px; top: 4px;
      width: 14px; height: 14px;
      background: var(--nu-white);
      border: 3px solid var(--nu-blue);
      border-radius: 50%;
    }
    .nu-timeline-day {
      font-weight: 900;
      color: var(--nu-blue);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .nu-timeline-desc { font-size: 0.94rem; }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: 'Lato', serif;
      font-style: italic;
      font-weight: 300;
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
    .nu-footer-disclaimer {
      margin-top: 18px;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      max-width: 780px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 40px 20px 60px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.45em; }
      .nu-tagline { font-size: 1rem; }
      .nu-wrap { padding: 44px 22px; }
      .nu-headline { font-size: 1.7rem; }
      .nu-ladder-row {
        grid-template-columns: 1fr;
        gap: 4px;
      }
      .nu-ladder-price { text-align: left; }
      .nu-badge { clip-path: none; border-radius: 6px; padding: 10px 16px; }
      .nu-table thead { display: none; }
      .nu-table tbody td { display: block; border: none; padding: 6px 14px; }
      .nu-table tbody tr { display: block; padding: 12px 0; border-bottom: 1px solid var(--nu-medium-gray); }
    }

    @media print {
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-card { box-shadow: none; border: 1px solid #ccc; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
      a { color: var(--nu-blue); }
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
    <div class="nu-doc-meta">Internal Negotiation Playbook &nbsp;·&nbsp; 2026-04-23</div>
  </header>

  <!-- CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-wrap">

      <!-- HEADLINE -->
      <h1 class="nu-headline"><span class="blue">Buttewoods Estate —</span> Acquisition Negotiation Playbook</h1>
      <p class="nu-subhead">
        Action item pulled from the reMarkable queue on 2026-04-23: <strong>negotiate purchase of the 7,098&nbsp;sq&nbsp;ft estate at 4505 Buttewoods.</strong>
        This page is Aaron's one-stop negotiation file — property snapshot, price ladder, offer structure, due-diligence checklist, and a day-by-day plan to close under favorable terms.
      </p>

      <!-- SNAPSHOT -->
      <div class="nu-snapshot">
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Address</div>
          <div class="nu-snapshot-value">4505 Buttewoods</div>
          <div class="nu-snapshot-note">Estate property</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Heated Area</div>
          <div class="nu-snapshot-value">7,098 sq ft</div>
          <div class="nu-snapshot-note">Confirm via appraisal</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Buyer</div>
          <div class="nu-snapshot-value">A.C. Norris</div>
          <div class="nu-snapshot-note">Personal / holding entity TBD</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Lender</div>
          <div class="nu-snapshot-value">Renasant Bank</div>
          <div class="nu-snapshot-note">Patrick Lavette — contact</div>
        </div>
        <div class="nu-snapshot-cell">
          <div class="nu-snapshot-label">Target Close</div>
          <div class="nu-snapshot-value">30–45 Days</div>
          <div class="nu-snapshot-note">From binding contract</div>
        </div>
      </div>

      <div class="nu-callout">
        <strong>Ground rule:</strong> Do not talk price verbally with the seller or listing agent until the <em>comps, condition, and financing</em> legs of the stool are all confirmed.
        An offer made before the workbook below is complete is a gift to the other side. Aaron writes the first number, in writing, with terms attached.
      </div>

      <!-- SECTION: Price Ladder -->
      <h2 class="nu-section-title"><span class="lead">Price</span> <span class="rest">Ladder — Three Numbers Aaron Carries Into Every Conversation</span></h2>
      <p class="nu-subhead" style="margin-bottom:14px;">
        The ladder is fixed before the first call. Do not re-compute mid-negotiation.
        Fill dollar figures once comps come back from Renasant's appraiser and the buyer's inspection is scheduled.
      </p>

      <div class="nu-ladder">
        <div class="nu-ladder-row anchor">
          <div class="nu-ladder-tier">Anchor Offer</div>
          <div class="nu-ladder-desc">First written offer. Below appraised market, supported by two deficiencies or carry-cost items. Establishes the frame.</div>
          <div class="nu-ladder-price">$ ______ / sq ft</div>
        </div>
        <div class="nu-ladder-row target">
          <div class="nu-ladder-tier">Target Close</div>
          <div class="nu-ladder-desc">The number Aaron will sign at. Must clear Renasant's appraisal with room and leave 10–12% equity cushion day one.</div>
          <div class="nu-ladder-price">$ ______ / sq ft</div>
        </div>
        <div class="nu-ladder-row walk">
          <div class="nu-ladder-tier">Walk Price</div>
          <div class="nu-ladder-desc">Hard ceiling. Beyond this, the deal stops penciling against rent comps and 12-month carry. Aaron walks in writing — no exceptions.</div>
          <div class="nu-ladder-price">$ ______ / sq ft</div>
        </div>
      </div>

      <!-- SECTION: Pre-Offer Intel -->
      <h2 class="nu-section-title"><span class="lead">Pre-Offer</span> <span class="rest">Intel — Gather Before Making a Number Public</span></h2>

      <div class="nu-card-grid">
        <div class="nu-card">
          <div class="nu-card-title"><span class="num">1</span>Public Record Pull</div>
          <p>Order the current deed, prior deeds (15-year window), any open mortgages, liens, and tax certificates on 4505 Buttewoods.</p>
          <ul>
            <li>Recorded sale prices and dates</li>
            <li>Mortgage balance vs. likely equity</li>
            <li>UCC filings, judgments, mechanic's liens</li>
            <li>Tax assessor's valuation and millage</li>
          </ul>
        </div>
        <div class="nu-card cyan-top">
          <div class="nu-card-title"><span class="num">2</span>Seller Motivation Map</div>
          <p>Why are they selling? The answer dictates leverage.</p>
          <ul>
            <li>Estate sale / probate (motivated, timeline-sensitive)</li>
            <li>Relocation (flexible on terms, less on price)</li>
            <li>Distress or deferred maintenance (price + credits)</li>
            <li>Discretionary move-up (price-led, rarely flexible)</li>
          </ul>
        </div>
        <div class="nu-card gold-top">
          <div class="nu-card-title"><span class="num">3</span>Three Comps, Minimum</div>
          <p>Pull three closed sales within 0.5 mi, 5,500–8,500 sq ft, closed in the last 9 months.</p>
          <ul>
            <li>$/sq ft (adjusted for lot + condition)</li>
            <li>Days on market</li>
            <li>List-to-close ratio</li>
            <li>Concessions given by seller</li>
          </ul>
        </div>
        <div class="nu-card">
          <div class="nu-card-title"><span class="num">4</span>Carry &amp; Exit Math</div>
          <p>Before Aaron offers, the spreadsheet must show break-even under two exits:</p>
          <ul>
            <li>Hold-and-rent at local comp rent</li>
            <li>Refinance-and-hold at Renasant's 12-mo rate sheet</li>
            <li>Flip after 12 months at conservative appreciation (0%)</li>
          </ul>
        </div>
      </div>

      <!-- SECTION: Offer Terms -->
      <h2 class="nu-section-title"><span class="lead">Offer</span> <span class="rest">Structure — Terms That Protect Aaron &amp; Pull the Deal Toward Close</span></h2>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Aaron's Position</th>
            <th>Fallback</th>
            <th>Walk Trigger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Earnest Money</strong></td>
            <td>1% of offer, deposited with title company</td>
            <td>Up to 2% if seller counters on price alone</td>
            <td>Any demand to release earnest before clear title</td>
          </tr>
          <tr>
            <td><strong>Inspection Period</strong></td>
            <td>14 calendar days, whole-house + sewer scope + roof</td>
            <td>10 days if seller provides recent inspection report</td>
            <td>Less than 7 days or "as-is, no inspection"</td>
          </tr>
          <tr>
            <td><strong>Financing Contingency</strong></td>
            <td>Renasant pre-approval, 21-day appraisal contingency</td>
            <td>Split appraisal gap up to 2% if target stays intact</td>
            <td>Appraisal waiver demand</td>
          </tr>
          <tr>
            <td><strong>Repair Credits</strong></td>
            <td>Dollar-credit at close, not seller-performed repairs</td>
            <td>Escrow holdback for scoped items over $3k</td>
            <td>Seller insisting on own contractor for major items</td>
          </tr>
          <tr>
            <td><strong>Closing Date</strong></td>
            <td>30–45 days from binding contract</td>
            <td>Post-close leaseback up to 30 days at market rent</td>
            <td>Rent-free leaseback beyond 14 days</td>
          </tr>
          <tr>
            <td><strong>Title</strong></td>
            <td>Buyer chooses title company, owner's policy required</td>
            <td>Seller's preferred title if pricing is par</td>
            <td>Any title defect seller refuses to cure</td>
          </tr>
          <tr>
            <td><strong>Survey</strong></td>
            <td>New boundary + improvement survey, buyer's expense</td>
            <td>Existing survey if dated within 24 months, no material change</td>
            <td>Encroachment or easement conflict with no cure plan</td>
          </tr>
          <tr>
            <td><strong>Personal Property</strong></td>
            <td>Attached fixtures only — conveyed in bill of sale</td>
            <td>Select items itemized, "no monetary value" language</td>
            <td>Co-mingled inventory that clouds appraisal</td>
          </tr>
        </tbody>
      </table>

      <!-- SECTION: Due Diligence Checklist -->
      <h2 class="nu-section-title"><span class="lead">Due</span> <span class="rest">Diligence Checklist — Before Earnest Money Goes Hard</span></h2>

      <ul class="nu-check">
        <li>Whole-house inspection ordered and completed</li>
        <li>Roof inspection (separate trade, written condition report)</li>
        <li>HVAC — age, load, refrigerant, two-stage report</li>
        <li>Sewer line scope to the tap, video on file</li>
        <li>Foundation / structural walk with licensed engineer</li>
        <li>Termite / wood-destroying organism letter</li>
        <li>Radon test, 48-hour passive at minimum</li>
        <li>Pool / outbuilding inspection (if applicable)</li>
        <li>Mold and air-quality sampling where moisture flagged</li>
        <li>Well / septic inspections (if not on municipal)</li>
        <li>Utility transfer packet: power, gas, water, trash</li>
        <li>HOA / deed restriction disclosure reviewed</li>
        <li>Flood zone and elevation certificate verified</li>
        <li>Insurance quote bound (hazard + liability)</li>
        <li>Title commitment cleared, exceptions reviewed</li>
        <li>Survey compared to legal description and plat</li>
        <li>Appraisal in writing, at or above purchase price</li>
        <li>Final walkthrough within 48 hours of close</li>
      </ul>

      <!-- SECTION: Negotiation Script -->
      <h2 class="nu-section-title"><span class="lead">Negotiation</span> <span class="rest">Script — Aaron's Voice, Always</span></h2>

      <div class="nu-card-grid">
        <div class="nu-card">
          <div class="nu-card-title">Opening — First Call to Listing Agent</div>
          <p style="margin-bottom:8px;"><em>"Appreciate the time. Our group has been tracking 4505 Buttewoods. Before we put anything in writing, I'd like to understand three things: the seller's timeline, what they'd need to see to feel this is done, and whether there are disclosures you can share."</em></p>
          <p><strong>Why:</strong> Establishes Aaron as a serious, terms-first buyer. Opens the motivation map. No number floated.</p>
        </div>
        <div class="nu-card cyan-top">
          <div class="nu-card-title">Anchor Delivery</div>
          <p style="margin-bottom:8px;"><em>"Our written offer is attached. The number reflects two items: the comps at [street/closing date] and the carry on the work we'll need to do in the first 90 days. We've priced it so the transaction can actually close. I'd rather send a clean offer at a real number than chase a counter we both know won't survive the appraisal."</em></p>
          <p><strong>Why:</strong> Names the comps, names the condition, tethers price to reality. Makes it hard for the seller to dismiss.</p>
        </div>
        <div class="nu-card gold-top">
          <div class="nu-card-title">Counter — Hold the Line</div>
          <p style="margin-bottom:8px;"><em>"I hear you. Here's where I can move — and here's where I can't. I can [raise earnest / shorten inspection / take leaseback]. I can't move on price beyond [target] because the appraisal won't support it and Renasant won't fund it. That's not posturing — that's the file."</em></p>
          <p><strong>Why:</strong> Trade terms before price. Cites the lender — a third party the seller can't argue with.</p>
        </div>
        <div class="nu-card">
          <div class="nu-card-title">Walk — Professional, Written</div>
          <p style="margin-bottom:8px;"><em>"We've taken this as far as the numbers allow. Releasing earnest today, with thanks. If circumstances change on your side, my offer stands at [target] through [date]. Appreciate the consideration."</em></p>
          <p><strong>Why:</strong> A clean walk keeps the door open. 30–60% of stalled deals come back — only the buyers who left professionally get the call.</p>
        </div>
      </div>

      <!-- SECTION: Leverage Points -->
      <h2 class="nu-section-title"><span class="lead">Leverage</span> <span class="rest">Points — Use, Don't Squander</span></h2>

      <div class="nu-callout">
        <strong>Rule of one:</strong> Only one leverage point per conversation. Pile-on complaints make Aaron sound petty and give the seller air cover to say no to everything.
      </div>

      <table class="nu-table">
        <thead>
          <tr><th>Leverage</th><th>Strength</th><th>When to Use</th></tr>
        </thead>
        <tbody>
          <tr><td>Cash-equivalent financing (Renasant pre-approval + proof of funds)</td><td><span class="nu-pill green">High</span></td><td>Opening offer. Frames Aaron as the safest close on the table.</td></tr>
          <tr><td>Flexible closing / leaseback window</td><td><span class="nu-pill green">High</span></td><td>Estate or relocation sellers — timing matters more than top-of-market price.</td></tr>
          <tr><td>Documented inspection findings</td><td><span class="nu-pill amber">Medium</span></td><td>After inspection. Written report with contractor bids attached, not vibes.</td></tr>
          <tr><td>Days on market / stale listing</td><td><span class="nu-pill amber">Medium</span></td><td>Only after 45+ DOM. Do not reference DOM in the first call.</td></tr>
          <tr><td>Appraisal gap</td><td><span class="nu-pill amber">Medium</span></td><td>Post-appraisal, in writing, with lender statement attached.</td></tr>
          <tr><td>Competing buyer pressure (theirs)</td><td><span class="nu-pill red">Handle w/ care</span></td><td>If agent claims multiple offers, request proof in writing. Do not raise blind.</td></tr>
          <tr><td>Personal emotional appeal</td><td><span class="nu-pill blue">Situational</span></td><td>Reserve for sellers who are leaving a long-time home. A short, genuine letter — never on the first contact.</td></tr>
        </tbody>
      </table>

      <!-- SECTION: Timeline -->
      <h2 class="nu-section-title"><span class="lead">30-Day</span> <span class="rest">Action Timeline — From Today to Binding Contract</span></h2>

      <div class="nu-timeline">
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Day 1 — Wed, 2026-04-23</div>
          <div class="nu-timeline-desc">Pull public record on 4505 Buttewoods. Call Patrick Lavette at Renasant to confirm pre-approval letter on buyer's letterhead. Schedule interior showing within 72 hours.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Days 2–3</div>
          <div class="nu-timeline-desc">Order three comps from broker or pull via tax assessor. Build carry-and-exit spreadsheet. Confirm the ladder (Anchor / Target / Walk) and print it.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Day 4 — Showing</div>
          <div class="nu-timeline-desc">Walk the property with a notebook. No price talk. Photograph deficiencies. Ask three open-ended questions about seller motivation. Leave.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Days 5–7</div>
          <div class="nu-timeline-desc">Review showing notes with CB for second-eye on condition items. Finalize written offer package: contract + pre-approval + proof of funds + cover letter.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Day 8 — Anchor Offer Sent</div>
          <div class="nu-timeline-desc">Deliver written offer via email to listing agent by 10 a.m. Central. Response deadline: 72 hours. Silent after send — no follow-up calls until the clock runs out.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Days 9–11</div>
          <div class="nu-timeline-desc">Review counter (if any) against ladder. Never counter same-day unless inside the 72-hour window. Move terms first, price second.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Days 12–14</div>
          <div class="nu-timeline-desc">Binding contract signed or deal closed out cleanly. If binding: inspection ordered same day, earnest wired to title within 24 hours.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Days 15–28 — Diligence</div>
          <div class="nu-timeline-desc">All inspections complete by Day 21. Appraisal ordered through Renasant by Day 22. Insurance quote bound by Day 25. Title commitment reviewed by Day 28.</div>
        </div>
        <div class="nu-timeline-item">
          <div class="nu-timeline-day">Day 30 — Clear to Close</div>
          <div class="nu-timeline-desc">Final walkthrough 24–48 hours pre-close. Wire instructions verified by phone call (never by email). Close and record deed. Keys in hand.</div>
        </div>
      </div>

      <!-- SECTION: Decision Matrix -->
      <h2 class="nu-section-title"><span class="lead">Go</span> <span class="rest">/ No-Go Decision Matrix</span></h2>

      <table class="nu-table">
        <thead>
          <tr>
            <th>Signal</th>
            <th>Green — Proceed</th>
            <th>Yellow — Pause &amp; Verify</th>
            <th>Red — Walk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Appraisal vs. Target</strong></td>
            <td>At or above target</td>
            <td>Within 2% of target</td>
            <td>Below target with no seller concession</td>
          </tr>
          <tr>
            <td><strong>Title</strong></td>
            <td>Clean commitment, insurable</td>
            <td>Minor easement, survey addresses it</td>
            <td>Open liens seller will not clear at close</td>
          </tr>
          <tr>
            <td><strong>Structural</strong></td>
            <td>Cosmetic only, normal for age</td>
            <td>Moisture or movement with scoped bid</td>
            <td>Active foundation movement, no remediation plan</td>
          </tr>
          <tr>
            <td><strong>Seller Behavior</strong></td>
            <td>Responsive within 48 hours, written</td>
            <td>Slow but consistent, terms-negotiable</td>
            <td>Moving goalposts, verbal-only commitments</td>
          </tr>
          <tr>
            <td><strong>Financing</strong></td>
            <td>Renasant confirms clear-to-close path</td>
            <td>Minor conditions list, curable pre-close</td>
            <td>Any demand for appraisal waiver, or loan products Aaron didn't request</td>
          </tr>
        </tbody>
      </table>

      <!-- SECTION: Stakeholders -->
      <h2 class="nu-section-title"><span class="lead">Stakeholders</span> <span class="rest">&amp; Who Does What</span></h2>

      <div class="nu-card-grid">
        <div class="nu-card">
          <div class="nu-card-title">Aaron C. Norris — Principal</div>
          <p>Sole decision authority on price, terms, and walk. All final written communication signed by Aaron.</p>
        </div>
        <div class="nu-card cyan-top">
          <div class="nu-card-title">Patrick Lavette — Renasant Bank</div>
          <p>Pre-approval letter, appraisal ordering, rate lock, loan-to-value confirmation. Direct point of contact.</p>
        </div>
        <div class="nu-card gold-top">
          <div class="nu-card-title">CPA — Structure &amp; Tax</div>
          <p>Confirms entity of acquisition (personal vs. LLC), depreciation posture if hold-and-rent, basis tracking for future exit.</p>
        </div>
        <div class="nu-card">
          <div class="nu-card-title">Real-Estate Attorney</div>
          <p>Reviews contract before signature, title commitment before close, and final closing statement line-by-line.</p>
        </div>
        <div class="nu-card cyan-top">
          <div class="nu-card-title">Caroline Butler (CB)</div>
          <p>Document custody: offer package, inspection reports, disclosures, closing binder. Calendar management for inspections and walkthroughs.</p>
        </div>
        <div class="nu-card gold-top">
          <div class="nu-card-title">Title Company</div>
          <p>Aaron chooses. Holds earnest, clears title, disburses at close. Wire instructions verified by phone only — never by email, never on a link in an email.</p>
        </div>
      </div>

      <div class="nu-callout">
        <strong>Verification rule:</strong> Wire fraud remains the #1 loss in real estate closings. Aaron verifies every wiring instruction by calling the title company at a number pulled from their website — never a number that arrived in an email — and confirms dollar-for-dollar before the wire leaves Renasant.
      </div>

      <!-- BADGE ROW -->
      <h2 class="nu-section-title"><span class="lead">Aaron's</span> <span class="rest">Four Non-Negotiables</span></h2>
      <div style="margin-bottom: 40px;">
        <span class="nu-badge">Appraisal Clears Target</span>
        <span class="nu-badge cyan">Clean Title at Close</span>
        <span class="nu-badge">Inspection Period ≥ 10 Days</span>
        <span class="nu-badge cyan">Written Offers Only</span>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      Aaron C. Norris, Founder &amp; CEO | Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-disclaimer">
      Internal working document. Real-estate acquisition playbook, not legal or financial advice. Aaron will have final terms reviewed by counsel and CPA prior to execution. Dollar figures on the Price Ladder are to be completed once comps, appraisal range, and carry model are finalized.
    </div>
  </footer>

</body>
</html>