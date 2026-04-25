<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disclosure Discrepancy Action Plan — Norris Utilities®</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&display=swap');

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
      --nu-warning: #D97706;
      --nu-danger: #B91C1C;
      --nu-success: #047857;
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

    /* ══ HEADER ══ */
    .nu-header {
      position: relative;
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 55%, #00aaff 80%, var(--nu-cyan) 100%);
      padding: 70px 40px 90px;
      text-align: center;
      overflow: hidden;
      min-height: 300px;
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
      background: radial-gradient(ellipse, rgba(6, 208, 255, 0.15) 0%, transparent 70%);
      z-index: 1;
    }
    .nu-header > * { position: relative; z-index: 2; }

    /* Ghost phoenix watermark in header */
    .nu-header-phoenix {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 420px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
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
      letter-spacing: 0.8em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-left: 0.8em;
    }
    .nu-tagline {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: rgba(255,255,255,0.95);
      letter-spacing: 0.04em;
    }

    /* ══ CHEVRON ══ */
    .nu-chevron {
      position: relative;
      height: 60px;
      margin-top: -60px;
      z-index: 10;
      line-height: 0;
    }
    .nu-chevron svg { width: 100%; height: 60px; display: block; }

    /* ══ CONTENT ══ */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      position: relative;
      z-index: 1;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px 40px;
    }

    /* ══ DOC META BAR ══ */
    .nu-doc-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
      background: var(--nu-light-gray);
      border-left: 4px solid var(--nu-blue);
      padding: 16px 22px;
      margin-bottom: 32px;
      border-radius: 4px;
    }
    .nu-doc-meta-item {
      font-size: 0.82rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--nu-dark-text);
    }
    .nu-doc-meta-item strong {
      display: block;
      color: var(--nu-blue);
      font-weight: 900;
      font-size: 0.75rem;
      margin-bottom: 3px;
      letter-spacing: 0.1em;
    }
    .nu-doc-meta-status {
      background: var(--nu-warning);
      color: var(--nu-white);
      padding: 6px 14px;
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* ══ PAGE TITLE ══ */
    .nu-page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.2rem;
      line-height: 1.2;
      margin-bottom: 10px;
      color: var(--nu-dark-text);
    }
    .nu-page-title .hl { color: var(--nu-blue); }
    .nu-page-subtitle {
      font-size: 1.05rem;
      color: #555;
      margin-bottom: 38px;
      max-width: 820px;
    }

    /* ══ SECTION HEADERS ══ */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 44px 0 18px;
      line-height: 1.3;
    }
    .nu-section-title .first { color: #0033cc; }
    .nu-section-title .rest { color: var(--nu-dark-text); font-weight: 700; }

    /* ══ SUMMARY CALLOUT ══ */
    .nu-callout {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border-left: 5px solid var(--nu-warning);
      padding: 22px 26px;
      border-radius: 6px;
      margin-bottom: 34px;
    }
    .nu-callout-label {
      font-weight: 900;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-warning);
      margin-bottom: 8px;
    }
    .nu-callout-body {
      font-size: 1rem;
      color: var(--nu-dark-text);
      line-height: 1.65;
    }

    /* ══ DISCREPANCY TABLE ══ */
    .nu-discrepancy {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 28px;
    }
    .nu-disc-panel {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 4px solid var(--nu-blue);
      border-radius: 6px;
      padding: 22px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    .nu-disc-panel.conflict { border-top-color: var(--nu-danger); }
    .nu-disc-label {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 10px;
    }
    .nu-disc-panel.conflict .nu-disc-label { color: var(--nu-danger); }
    .nu-disc-source {
      font-size: 0.88rem;
      color: #666;
      margin-bottom: 12px;
      font-style: italic;
    }
    .nu-disc-statement {
      font-size: 0.98rem;
      line-height: 1.6;
      color: var(--nu-dark-text);
    }
    .nu-disc-statement .highlight {
      background: rgba(217, 119, 6, 0.15);
      padding: 1px 4px;
      border-radius: 2px;
      font-weight: 700;
    }

    /* ══ ACTION STEPS ══ */
    .nu-steps {
      counter-reset: step;
      list-style: none;
      margin-bottom: 30px;
    }
    .nu-step {
      counter-increment: step;
      display: flex;
      gap: 18px;
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      padding: 20px 22px;
      margin-bottom: 12px;
      border-radius: 6px;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .nu-step:hover {
      transform: translateX(3px);
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }
    .nu-step::before {
      content: counter(step);
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--nu-blue), var(--nu-cyan));
      color: var(--nu-white);
      font-weight: 900;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,255,0.25);
    }
    .nu-step-body { flex: 1; }
    .nu-step-title {
      font-weight: 900;
      font-size: 1.05rem;
      color: var(--nu-dark-text);
      margin-bottom: 5px;
    }
    .nu-step-desc {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.55;
    }
    .nu-step-meta {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 0.8rem;
    }
    .nu-step-tag {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      padding: 3px 10px;
      border-radius: 20px;
      color: var(--nu-dark-text);
      font-weight: 700;
    }
    .nu-step-tag.owner { background: #dbeafe; border-color: #bfdbfe; color: #1e40af; }
    .nu-step-tag.due { background: #fee2e2; border-color: #fecaca; color: #991b1b; }

    /* ══ CHEVRON BADGES (risk ladder) ══ */
    .nu-badge-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 28px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 30px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
    }
    .nu-badge-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      font-weight: 900;
      font-size: 0.85rem;
      margin-right: 14px;
      flex-shrink: 0;
    }

    /* ══ EMAIL TEMPLATE BOX ══ */
    .nu-email-box {
      background: var(--nu-light-gray);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 24px 28px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.98rem;
      line-height: 1.75;
      color: var(--nu-dark-text);
      margin-bottom: 28px;
      white-space: pre-wrap;
    }
    .nu-email-header {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 14px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--nu-medium-gray);
    }

    /* ══ CONTACTS GRID ══ */
    .nu-contacts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 14px;
      margin-bottom: 28px;
    }
    .nu-contact-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 18px 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .nu-contact-role {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 5px;
    }
    .nu-contact-name {
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .nu-contact-detail {
      font-size: 0.88rem;
      color: #555;
      line-height: 1.5;
    }

    /* ══ CHECKLIST ══ */
    .nu-checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 26px;
      margin-bottom: 28px;
    }
    .nu-check-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px dashed var(--nu-medium-gray);
      font-size: 0.96rem;
    }
    .nu-check-item:last-child { border-bottom: none; }
    .nu-check-box {
      width: 20px;
      height: 20px;
      border: 2px solid var(--nu-blue);
      border-radius: 3px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ══ FOOTER ══ */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      color: rgba(255,255,255,0.85);
      padding: 44px 40px;
      text-align: center;
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
      line-height: 1.85;
    }
    .nu-footer-contact a { color: var(--nu-cyan); text-decoration: none; }
    .nu-footer-contact a:hover { text-decoration: underline; }

    /* ══ RESPONSIVE ══ */
    @media (max-width: 768px) {
      .nu-header { padding: 44px 20px 70px; min-height: 220px; }
      .nu-logo-text { font-size: 2rem; letter-spacing: 0.22em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1rem; }
      .nu-content-inner { padding: 40px 22px; }
      .nu-page-title { font-size: 1.6rem; }
      .nu-discrepancy { grid-template-columns: 1fr; }
      .nu-badge { clip-path: none; border-radius: 8px; padding: 14px 18px; }
      .nu-step { flex-direction: column; gap: 12px; }
    }

    @media print {
      body { background: white; }
      .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .nu-step:hover, .nu-contact-card { box-shadow: none; }
      .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <svg class="nu-header-phoenix" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white"/>
    </svg>
    <div class="nu-phoenix-icon">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
        <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
      </svg>
    </div>
    <div class="nu-logo-text">NORRIS</div>
    <div class="nu-logo-subtitle">UTILITIES</div>
    <div class="nu-tagline">A Legacy of Commitment®</div>
  </header>

  <!-- CHEVRON -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,60 L1440,0 L1440,60 L0,60 Z" fill="#FFFFFF"/>
    </svg>
  </div>

  <!-- CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- META BAR -->
      <div class="nu-doc-meta">
        <div class="nu-doc-meta-item">
          <strong>Action Plan</strong>
          Disclosure Discrepancy Resolution
        </div>
        <div class="nu-doc-meta-item">
          <strong>Logged</strong>
          reMarkable — 2026-04-24
        </div>
        <div class="nu-doc-meta-item">
          <strong>Owner</strong>
          Aaron C. Norris
        </div>
        <div class="nu-doc-meta-status">Open — Action Required</div>
      </div>

      <!-- TITLE -->
      <h1 class="nu-page-title">Address <span class="hl">Disclosure Discrepancy</span> Between Rental Listing Advertisement and Seller Disclosure</h1>
      <p class="nu-page-subtitle">An inconsistency exists between how the property is represented in its public rental listing advertisement and what has been formally disclosed in the seller's property disclosure. This document captures the finding, the action steps required to reconcile it, and the communication needed to protect the transaction.</p>

      <!-- SUMMARY CALLOUT -->
      <div class="nu-callout">
        <div class="nu-callout-label">Why This Matters</div>
        <div class="nu-callout-body">
          When the marketing representation of a property does not match the seller's legal disclosure, the buyer is put in the position of having to reconcile two conflicting descriptions of the same asset. Left unresolved, the discrepancy creates (1) a valuation question — which version is true, (2) a risk question — are there other undisclosed conditions, and (3) a legal question — what is the seller's actual representation of record. This must be resolved in writing before earnest money is at risk and before any inspection period closes.
        </div>
      </div>

      <!-- DISCREPANCY -->
      <h2 class="nu-section-title"><span class="first">The</span> <span class="rest">Discrepancy</span></h2>
      <div class="nu-discrepancy">
        <div class="nu-disc-panel">
          <div class="nu-disc-label">Source A — Rental Listing Advertisement</div>
          <div class="nu-disc-source">Public-facing marketing copy</div>
          <div class="nu-disc-statement">
            Property is advertised with <span class="highlight">features, condition, or inclusions</span> presented as current and operational to prospective renters. The advertisement is the basis on which the property has been marketed and leased.
          </div>
        </div>
        <div class="nu-disc-panel conflict">
          <div class="nu-disc-label">Source B — Seller Property Disclosure</div>
          <div class="nu-disc-source">Formal transaction document</div>
          <div class="nu-disc-statement">
            The seller's signed disclosure <span class="highlight">omits, contradicts, or qualifies</span> one or more of the features or conditions represented in the rental listing. The legal record and the marketing record do not agree.
          </div>
        </div>
      </div>

      <!-- RISK LADDER -->
      <h2 class="nu-section-title"><span class="first">Risk</span> <span class="rest">Ladder — What Could Be Wrong</span></h2>
      <div class="nu-badge-row">
        <div class="nu-badge"><span class="nu-badge-num">1</span>Feature advertised to renters (appliance, utility, amenity) is not in working order and seller knew</div>
        <div class="nu-badge"><span class="nu-badge-num">2</span>Square footage, acreage, or room count differs between listing and disclosure</div>
        <div class="nu-badge"><span class="nu-badge-num">3</span>System or improvement advertised as "new" or "updated" is actually older or unpermitted</div>
        <div class="nu-badge"><span class="nu-badge-num">4</span>Known defect (water, roof, HVAC, foundation) listed in disclosure was omitted from marketing</div>
        <div class="nu-badge"><span class="nu-badge-num">5</span>Inclusions (appliances, fixtures, systems) advertised are marked excluded or "as-is" in disclosure</div>
      </div>

      <!-- ACTION STEPS -->
      <h2 class="nu-section-title"><span class="first">Action</span> <span class="rest">Steps — In Order</span></h2>
      <ol class="nu-steps">
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Capture both records in writing, side by side</div>
            <div class="nu-step-desc">Print or screenshot the rental listing advertisement exactly as published today (date-stamp it). Pull the signed seller disclosure. Create a single two-column comparison document highlighting each line where the two sources do not agree. This is the evidence file — keep it.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Aaron</span>
              <span class="nu-step-tag due">Due: Same day</span>
              <span class="nu-step-tag">Evidence</span>
            </div>
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Notify the listing agent in writing — do not call first</div>
            <div class="nu-step-desc">Email (not text, not phone) the listing agent with the comparison attached. Ask for a written explanation of the discrepancy and a formal seller response. Requesting in writing preserves the record and anchors the clock on the seller's obligation to respond.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Aaron</span>
              <span class="nu-step-tag due">Due: Within 24 hrs of discovery</span>
              <span class="nu-step-tag">Written record</span>
            </div>
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Request an amended seller disclosure</div>
            <div class="nu-step-desc">If the rental listing contains features or conditions the disclosure omits, the seller is obligated to amend the disclosure or withdraw the marketing claim. Ask specifically for one of the two — in writing, signed, before the inspection contingency closes.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Listing agent → Seller</span>
              <span class="nu-step-tag due">Due: Before inspection period ends</span>
              <span class="nu-step-tag">Signed amendment</span>
            </div>
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Loop in your real estate attorney</div>
            <div class="nu-step-desc">Forward the evidence file and the agent's response to counsel. A disclosure/marketing conflict is the exact scenario where one hour of legal review protects the entire earnest money deposit and preserves walk-away rights. Do not assume the agent is the right party to resolve this.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Aaron</span>
              <span class="nu-step-tag due">Due: Within 48 hrs of discovery</span>
              <span class="nu-step-tag">Legal</span>
            </div>
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Order or extend inspection to target the disputed items</div>
            <div class="nu-step-desc">Whichever features or systems are in conflict — have the inspector look at those specifically and document condition. If the inspection period is running short, request a written extension while the disclosure is being reconciled. Do not let the contingency expire with this question open.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Aaron + Inspector</span>
              <span class="nu-step-tag due">Due: Before contingency expires</span>
              <span class="nu-step-tag">Physical verification</span>
            </div>
          </div>
        </li>
        <li class="nu-step">
          <div class="nu-step-body">
            <div class="nu-step-title">Decide the path — proceed, renegotiate, or terminate</div>
            <div class="nu-step-desc">Once the amended disclosure and inspection are in hand, the choice is one of three: (A) proceed as-is because the discrepancy was immaterial, (B) renegotiate price or credits to account for the corrected representation, or (C) terminate under the inspection or disclosure contingency and recover earnest money. Make the decision in writing and send through your agent and attorney.</div>
            <div class="nu-step-meta">
              <span class="nu-step-tag owner">Owner: Aaron</span>
              <span class="nu-step-tag due">Due: Before contingency expires</span>
              <span class="nu-step-tag">Decision point</span>
            </div>
          </div>
        </li>
      </ol>

      <!-- EMAIL TEMPLATE -->
      <h2 class="nu-section-title"><span class="first">Email</span> <span class="rest">Template — To the Listing Agent</span></h2>
      <div class="nu-email-box"><div class="nu-email-header">SUBJECT: DISCLOSURE DISCREPANCY — [PROPERTY ADDRESS] — WRITTEN RESPONSE REQUESTED</div>Agent Name —

      In reviewing the seller's property disclosure alongside the current rental listing advertisement for the above property, I've identified a discrepancy between how the property is represented in the two documents. I've attached a side-by-side comparison showing where the two sources do not agree.

      I'd like a written response from the seller addressing the following:

      • Confirmation of which representation is accurate — the rental listing advertisement or the signed disclosure
      • If the disclosure is incomplete, a signed, amended disclosure correcting the record
      • If the rental listing is inaccurate, written acknowledgment and correction of the marketing copy
      • Any information about the condition, age, or status of the item(s) in question that has not yet been shared

      Please treat this as a formal request. I'd like the seller's written response before the inspection contingency period closes. If additional time is needed on the seller's side, I'll consider a written extension of that contingency, but I cannot allow the period to lapse with this question unresolved.

      Sincerely,
          Aaron C. Norris
      </div>

      <!-- CONTACTS -->
      <h2 class="nu-section-title"><span class="first">Who</span> <span class="rest">to Loop In</span></h2>
      <div class="nu-contacts">
        <div class="nu-contact-card">
          <div class="nu-contact-role">Lead — Buyer</div>
          <div class="nu-contact-name">Aaron C. Norris</div>
          <div class="nu-contact-detail">Founder &amp; CEO, Norris Utilities®<br>205-500-1343<br>acnorris@norrisutilities.com</div>
        </div>
        <div class="nu-contact-card">
          <div class="nu-contact-role">Buyer's Agent</div>
          <div class="nu-contact-name">Name on file</div>
          <div class="nu-contact-detail">Forward evidence file, request listing-agent response in writing, track contingency clock.</div>
        </div>
        <div class="nu-contact-card">
          <div class="nu-contact-role">Real Estate Attorney</div>
          <div class="nu-contact-name">Name on file</div>
          <div class="nu-contact-detail">Review evidence file and seller response. Advise on amendment, renegotiation, or termination rights.</div>
        </div>
        <div class="nu-contact-card">
          <div class="nu-contact-role">Inspector</div>
          <div class="nu-contact-name">Name on file</div>
          <div class="nu-contact-detail">Targeted inspection of the specific items in conflict. Document condition in writing with photos.</div>
        </div>
      </div>

      <!-- CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Close-Out</span> <span class="rest">Checklist</span></h2>
      <div class="nu-checklist">
        <div class="nu-check-item"><div class="nu-check-box"></div>Side-by-side comparison of rental listing vs. seller disclosure filed (date-stamped)</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Written notification sent to listing agent — email on record</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Amended seller disclosure received OR written withdrawal of marketing claim</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Real estate attorney has reviewed evidence file and advised</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Inspector has examined the disputed items and issued written findings</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Inspection and disclosure contingencies tracked — no silent lapses</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Final decision documented in writing — proceed, renegotiate, or terminate</div>
        <div class="nu-check-item"><div class="nu-check-box"></div>Earnest money position confirmed with escrow holder</div>
      </div>

      <!-- GUIDING PRINCIPLE -->
      <h2 class="nu-section-title"><span class="first">Guiding</span> <span class="rest">Principle</span></h2>
      <div class="nu-callout">
        <div class="nu-callout-label">Aaron's Rule</div>
        <div class="nu-callout-body">
          Two records of the same property should not disagree. If they do, the seller is responsible for reconciling them — in writing, on the record, before the buyer is asked to close. Any request for patience, verbal assurance, or "it's not a big deal" is not a reconciliation. The contract, the disclosure, and the marketing must all say the same thing before earnest money is at risk.
        </div>
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