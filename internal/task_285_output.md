<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Remove Pricing from Boss Online Store — Action Plan — Norris Utilities®</title>
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
  --nu-alert-red: #C0392B;
  --nu-success-green: #1E8449;
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
    repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
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
  fill: var(--nu-white);
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
  font-weight: 900;
  font-size: 1.4rem;
  color: var(--nu-white);
  letter-spacing: 0.8em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.nu-tagline {
  font-family: 'Playfair Display', Georgia, serif;
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
.nu-chevron svg { width: 100%; height: 50px; display: block; }

/* CONTENT AREA */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 20%; left: 50%;
  transform: translate(-50%, 0);
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 65%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}
.nu-content-area > * { position: relative; z-index: 1; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 40px 70px;
}

/* ACTION BANNER */
.action-banner {
  background: linear-gradient(135deg, #fff8e1 0%, #fff3d1 100%);
  border-left: 6px solid var(--nu-accent-gold);
  padding: 22px 28px;
  border-radius: 6px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.action-banner-icon {
  width: 48px; height: 48px;
  background: var(--nu-accent-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-weight: 900;
  font-size: 1.4rem;
}
.action-banner-text {
  font-size: 0.95rem;
  color: #5a4a1a;
}
.action-banner-text strong {
  color: var(--nu-dark-text);
  font-weight: 900;
  display: block;
  font-size: 1.05rem;
  margin-bottom: 2px;
}

/* PAGE TITLE */
.page-title-block {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 3px solid var(--nu-medium-gray);
}
.page-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--nu-blue);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.page-title {
  font-weight: 900;
  font-size: 2.4rem;
  color: var(--nu-dark-text);
  line-height: 1.15;
  margin-bottom: 14px;
}
.page-title span { color: var(--nu-blue); }
.page-subtitle {
  font-size: 1.1rem;
  color: var(--nu-body-text);
  font-weight: 400;
  max-width: 820px;
}

/* SECTION HEADERS */
.nu-section-title {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin-bottom: 20px;
  margin-top: 44px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--nu-medium-gray);
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* WHY CARD */
.why-card {
  background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
  border: 1px solid #d8e0f5;
  border-radius: 8px;
  padding: 28px 32px;
  margin-bottom: 20px;
}
.why-card h3 {
  font-weight: 900;
  font-size: 1.15rem;
  color: var(--nu-blue);
  margin-bottom: 12px;
}
.why-card p {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 12px;
}
.why-card p:last-child { margin-bottom: 0; }

/* REASON GRID */
.reason-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}
.reason-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-top: 4px solid var(--nu-blue);
  border-radius: 6px;
  padding: 20px 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.reason-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.reason-card h4 {
  font-weight: 900;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 8px;
}
.reason-card p {
  font-size: 0.92rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* STEP LIST */
.step-list {
  list-style: none;
  counter-reset: step-counter;
  margin-top: 12px;
}
.step-list li {
  counter-increment: step-counter;
  position: relative;
  padding: 20px 24px 20px 78px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
}
.step-list li::before {
  content: counter(step-counter);
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033cc 100%);
  color: var(--nu-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,255,0.25);
}
.step-list .step-title {
  font-weight: 900;
  color: var(--nu-dark-text);
  font-size: 1.05rem;
  display: block;
  margin-bottom: 4px;
}
.step-list .step-body {
  font-size: 0.94rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* EMAIL BLOCK */
.email-block {
  background: #fafbfc;
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 12px;
}
.email-meta {
  background: var(--nu-light-gray);
  padding: 14px 20px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.9rem;
}
.email-meta-row {
  display: flex;
  padding: 3px 0;
}
.email-meta-label {
  font-weight: 700;
  color: var(--nu-dark-text);
  width: 70px;
  flex-shrink: 0;
}
.email-meta-value { color: var(--nu-body-text); }
.email-body {
  padding: 24px 28px;
  font-size: 0.96rem;
  line-height: 1.75;
  color: var(--nu-dark-text);
}
.email-body p { margin-bottom: 14px; text-indent: 0; padding-left: 18px; }
.email-body p:first-child { padding-left: 0; }
.email-body ul {
  list-style: none;
  padding-left: 18px;
  margin-bottom: 14px;
}
.email-body ul li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 4px;
}
.email-body ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--nu-blue);
  font-weight: 700;
}
.email-signature {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px dashed var(--nu-medium-gray);
  padding-left: 18px;
}

/* ALT OPTIONS */
.alt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 12px;
}
.alt-option {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 22px 24px;
  position: relative;
}
.alt-option.recommended {
  border: 2px solid var(--nu-success-green);
  background: linear-gradient(135deg, #f4fcf7 0%, #eaf7ef 100%);
}
.alt-option.recommended::before {
  content: 'RECOMMENDED';
  position: absolute;
  top: -11px;
  left: 20px;
  background: var(--nu-success-green);
  color: white;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  padding: 4px 12px;
  border-radius: 3px;
}
.alt-option h4 {
  font-weight: 900;
  font-size: 1.1rem;
  color: var(--nu-dark-text);
  margin-bottom: 10px;
}
.alt-option p {
  font-size: 0.93rem;
  line-height: 1.6;
  color: var(--nu-body-text);
  margin-bottom: 10px;
}
.alt-option .pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
  font-size: 0.85rem;
}
.pros-cons .pros, .pros-cons .cons {
  background: var(--nu-white);
  border-radius: 4px;
  padding: 10px 12px;
}
.pros-cons .pros {
  border-left: 3px solid var(--nu-success-green);
}
.pros-cons .cons {
  border-left: 3px solid var(--nu-alert-red);
}
.pros-cons strong {
  display: block;
  margin-bottom: 4px;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.pros-cons .pros strong { color: var(--nu-success-green); }
.pros-cons .cons strong { color: var(--nu-alert-red); }

/* TALKING POINTS */
.talking-points {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 24px 28px;
  margin-top: 12px;
}
.talking-points h4 {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1rem;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--nu-medium-gray);
}
.talking-points h4:not(:first-child) { margin-top: 20px; }
.talking-points ul {
  list-style: none;
  padding-left: 4px;
}
.talking-points ul li {
  position: relative;
  padding-left: 22px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  line-height: 1.55;
}
.talking-points ul li::before {
  content: '▸';
  position: absolute;
  left: 4px;
  color: var(--nu-cyan);
  font-weight: 900;
}

/* CHECKLIST */
.checklist {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 12px;
}
.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.96rem;
}
.checklist-item:last-child { border-bottom: none; }
.checklist-box {
  width: 22px;
  height: 22px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}
.checklist-text strong {
  font-weight: 900;
  color: var(--nu-dark-text);
  display: block;
  margin-bottom: 2px;
}
.checklist-text span {
  font-size: 0.9rem;
  color: var(--nu-body-text);
}

/* KEY CONTACTS */
.contact-box {
  background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
  border: 1px solid #d8e0f5;
  border-radius: 8px;
  padding: 22px 26px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.contact-card h5 {
  font-weight: 900;
  color: var(--nu-blue);
  font-size: 1rem;
  margin-bottom: 6px;
}
.contact-card p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--nu-body-text);
}
.contact-card p strong {
  color: var(--nu-dark-text);
  font-weight: 700;
}

/* FOOTER */
.nu-footer {
  background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
  color: rgba(255,255,255,0.85);
  padding: 44px 40px;
  text-align: center;
  font-family: var(--font-primary);
}
.nu-footer-tagline {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
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
  .container { padding: 36px 20px 50px; }
  .page-title { font-size: 1.7rem; }
  .step-list li { padding: 18px 18px 18px 64px; }
  .step-list li::before { left: 14px; width: 36px; height: 36px; font-size: 1rem; }
  .alt-option .pros-cons { grid-template-columns: 1fr; }
  .action-banner { flex-direction: column; text-align: center; }
}

@media print {
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
  .reason-card:hover { transform: none; box-shadow: none; }
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet">
</head>
<body>

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

<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L548,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
  </svg>
</div>

<main class="nu-content-area">
  <div class="container">

    <div class="action-banner">
      <div class="action-banner-icon">!</div>
      <div class="action-banner-text">
        <strong>reMarkable Action Item</strong>
        Remove public-facing pricing from the Boss Online Store. Requires coordination with Troy Gongwer and Thayne Grove at Boss Products before any change goes live.
      </div>
    </div>

    <div class="page-title-block">
      <div class="page-eyebrow">Vendor Coordination · BOSS Products</div>
      <h1 class="page-title">Remove Pricing from <span>Boss Online Store</span></h1>
      <p class="page-subtitle">Action plan for suppressing public retail pricing on the Boss Online Store so dealer and distributor channels can quote without undercutting, and so Norris Utilities® can protect margin discipline across the FlexPro Armor and BOSS product lines.</p>
    </div>

    <!-- WHY -->
    <h2 class="nu-section-title"><span>Why This</span> Matters</h2>

    <div class="why-card">
      <h3>The problem with public prices on a manufacturer's online store</h3>
      <p>When BOSS retail prices are visible to any visitor, every dealer, distributor, and end-user is anchored to that number before a conversation ever starts. It compresses our ability to quote by channel, it exposes dealer-net math in reverse, and it puts Aaron in the position of defending a price he didn't set.</p>
      <p>Norris Utilities® operates a three-tier channel — Direct → Dealers (30% off) → Distributors (40% off). That only works if the manufacturer's public surface stays quiet. Removing pricing is the cleanest, fastest way to restore control without changing a single SKU, cost, or agreement.</p>
    </div>

    <div class="reason-grid">
      <div class="reason-card">
        <h4>Channel protection</h4>
        <p>Dealers and distributors can't hold a 30–40% margin if end-users already see a MAP-style number on the manufacturer's site.</p>
      </div>
      <div class="reason-card">
        <h4>Quote flexibility</h4>
        <p>Removing public pricing lets Aaron quote regional freight, bundle discounts, and account-specific terms without negotiating against a web page.</p>
      </div>
      <div class="reason-card">
        <h4>Lead capture</h4>
        <p>"Request a Quote" converts visitors into contacts. A public price button lets them leave without ever identifying themselves.</p>
      </div>
      <div class="reason-card">
        <h4>Margin discipline</h4>
        <p>Hidden pricing reinforces the value conversation — warranty, support, handmade USA construction — instead of a dollar figure.</p>
      </div>
    </div>

    <!-- ACTION PLAN -->
    <h2 class="nu-section-title"><span>The Action</span> Plan</h2>

    <ol class="step-list">
      <li>
        <span class="step-title">Document the current state</span>
        <span class="step-body">Screenshot every Boss Online Store page that currently displays a public price. Note the SKU, URL, and displayed price for each. This is the before-snapshot and becomes the evidence packet sent to Troy and Thayne.</span>
      </li>
      <li>
        <span class="step-title">Confirm Norris Utilities® standing to make the ask</span>
        <span class="step-body">Pull the most recent BOSS dealer agreement and any pricing/MAP language. Confirm Norris Utilities® status (authorized dealer/distributor) and purchase volume over the last 12 months to strengthen the request.</span>
      </li>
      <li>
        <span class="step-title">Draft the email to Troy Gongwer + Thayne Grove</span>
        <span class="step-body">One message, both CC'd (per standing rule for BOSS communications). Keep it short, channel-focused, and solution-oriented. Offer the two alternatives before they have to ask.</span>
      </li>
      <li>
        <span class="step-title">Send and log the outreach</span>
        <span class="step-body">Send the email, then log the outreach in the master tracker with a 7-day follow-up flag. If no response by day 7, Aaron follows up directly with Troy by phone.</span>
      </li>
      <li>
        <span class="step-title">Confirm implementation and verify live</span>
        <span class="step-body">Once BOSS confirms the change, visit the store in an incognito window. Check five SKUs across desktop and mobile. Screenshot the after-state. Archive both snapshots in the vendor file.</span>
      </li>
      <li>
        <span class="step-title">Notify the dealer and distributor network</span>
        <span class="step-body">Send a brief update to the active BOSS reseller list: "Public pricing has been removed from the BOSS online store — quote freely within your channel terms." Reinforces the value we just unlocked for them.</span>
    </li>
    </ol>

    <!-- EMAIL DRAFT -->
    <h2 class="nu-section-title"><span>The</span> Email</h2>

    <div class="email-block">
      <div class="email-meta">
        <div class="email-meta-row"><span class="email-meta-label">To:</span><span class="email-meta-value">Troy Gongwer &lt;troy@bossproducts.com&gt;</span></div>
        <div class="email-meta-row"><span class="email-meta-label">CC:</span><span class="email-meta-value">Thayne Grove &lt;thayne@bossproducts.com&gt;</span></div>
        <div class="email-meta-row"><span class="email-meta-label">From:</span><span class="email-meta-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span></div>
        <div class="email-meta-row"><span class="email-meta-label">Subject:</span><span class="email-meta-value">Request — Remove public pricing from the Boss Online Store</span></div>
      </div>
      <div class="email-body">
        <p>Troy —</p>
        <p>I want to raise something with both of you that I believe will help BOSS, the dealer network, and Norris Utilities® all at once.</p>
        <p>Right now the Boss Online Store displays retail pricing publicly. That creates a friction point every time I (or any of your other dealers) put a quote in front of a utility, municipality, or contractor. They see the web number first, and the conversation starts from a place of defending — not selling.</p>
        <p>My ask is straightforward — <strong>remove the public-facing price display</strong> on the online store and replace the buy button with one of the following:</p>
        <ul>
          <li>"Request a Quote" — routes to BOSS or to an authorized dealer</li>
          <li>"Call for Pricing" with 1–2 phone numbers listed</li>
          <li>A required account login to view pricing (dealer-only visibility)</li>
        </ul>
        <p>Any of those three protects the channel, opens lead capture for BOSS, and gives the dealer base real room to quote by region, freight, and volume. It also aligns the online surface with how BOSS is sold everywhere else.</p>
        <p>I'm happy to jump on a call this week with both of you to walk through what I'm seeing in the field. If it's easier, I can also send over the specific pages where the public pricing is working against us.</p>
        <p>Appreciate y'all — I think this is a small change that earns the business back from a lot of deals we're currently losing on anchor price alone.</p>
        <div class="email-signature">
          <p>Sincerely,</p>
          <p>Aaron C. Norris<br>
          Founder &amp; CEO<br>
          Norris Utilities®, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com</p>
        </div>
      </div>
    </div>

    <!-- ALTERNATIVES -->
    <h2 class="nu-section-title"><span>The Three</span> Options to Offer BOSS</h2>

    <div class="alt-grid">
      <div class="alt-option recommended">
        <h4>Option 1 — Request a Quote form</h4>
        <p>Replace every price with a "Request a Quote" button that collects name, company, state, SKUs of interest, and quantity.</p>
        <div class="pros-cons">
          <div class="pros">
            <strong>Pros</strong>
            Captures leads, hides price, routes to dealers by region
          </div>
          <div class="cons">
            <strong>Cons</strong>
            Requires form wiring and routing logic
          </div>
        </div>
      </div>

      <div class="alt-option">
        <h4>Option 2 — Call for Pricing</h4>
        <p>Replace prices with "Call for Pricing" plus BOSS main line and 1–2 regional dealer numbers including Norris Utilities®.</p>
        <div class="pros-cons">
          <div class="pros">
            <strong>Pros</strong>
            Zero dev work, immediate deploy, warm voice conversion
          </div>
          <div class="cons">
            <strong>Cons</strong>
            No lead capture if nobody calls
          </div>
        </div>
      </div>

      <div class="alt-option">
        <h4>Option 3 — Dealer login required</h4>
        <p>Keep prices but gate them behind an authorized-dealer login. Public visitors see SKUs and specs only.</p>
        <div class="pros-cons">
          <div class="pros">
            <strong>Pros</strong>
            Cleanest channel protection, dealer-only MAP visibility
          </div>
          <div class="cons">
            <strong>Cons</strong>
            Requires auth/account system — longest timeline
          </div>
        </div>
      </div>
    </div>

    <!-- TALKING POINTS -->
    <h2 class="nu-section-title"><span>Talking Points</span> for the Follow-Up Call</h2>

    <div class="talking-points">
      <h4>If Troy or Thayne asks why now</h4>
      <ul>
        <li>Utility buyers are arriving at quotes pre-anchored to the online price — killing the value conversation before it starts</li>
        <li>Dealer network is asking Norris Utilities® to escalate on their behalf — this is a shared pain point, not a Norris-only ask</li>
        <li>Every other BOSS channel (trade shows, catalog, dealer sheets) already uses request-for-quote language — online is the outlier</li>
      </ul>

      <h4>If they push back on "customers want price transparency"</h4>
      <ul>
        <li>Utility and infrastructure buyers are not retail — they expect a quote, a freight number, and terms specific to their account</li>
        <li>Transparency in this segment = fast, accurate quote turnaround — not a public sticker price</li>
        <li>Samson Rope, Skylift, and Bay Shore Systems all operate this way — it's the industry standard for this buyer profile</li>
      </ul>

      <h4>If they ask what Norris Utilities® will do in exchange</h4>
      <ul>
        <li>Commit to a same-day quote response on every BOSS inquiry routed to Norris Utilities®</li>
        <li>Feature BOSS product family prominently on the Norris Utilities® line card and at every customer visit</li>
        <li>Share quote-conversion data back to BOSS quarterly once the new flow is live</li>
      </ul>
    </div>

    <!-- CHECKLIST -->
    <h2 class="nu-section-title"><span>Execution</span> Checklist</h2>

    <div class="checklist">
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Screenshot current Boss Online Store pricing (before-state)</strong>
          <span>Desktop + mobile, top 10 SKUs — archive in vendor file</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Pull current BOSS dealer agreement / MAP language</strong>
          <span>Confirm Norris Utilities® standing and 12-month purchase volume</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Send email to Troy Gongwer with Thayne Grove CC'd</strong>
          <span>Per standing rule: BOSS communications always copy both</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Log outreach in master tracker with 7-day follow-up flag</strong>
          <span>If no reply by day 7, Aaron calls Troy directly</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Verify live change in incognito browser</strong>
          <span>Five SKUs, desktop + mobile, screenshot the after-state</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>Notify active BOSS reseller network of the change</strong>
          <span>Short email — reinforces channel value Norris Utilities® just unlocked</span>
        </div>
      </div>
      <div class="checklist-item">
        <div class="checklist-box"></div>
        <div class="checklist-text">
          <strong>File before/after evidence in vendor folder</strong>
          <span>Vendor → BOSS Products → 2026-04 Online Store Pricing Change</span>
        </div>
      </div>
    </div>

    <!-- KEY CONTACTS -->
    <h2 class="nu-section-title"><span>Key</span> Contacts</h2>

    <div class="contact-box">
      <div class="contact-card">
        <h5>Troy Gongwer</h5>
        <p><strong>BOSS Products</strong><br>Primary contact for this request. Always CC Thayne on any BOSS communication.</p>
      </div>
      <div class="contact-card">
        <h5>Thayne Grove</h5>
        <p><strong>BOSS Products</strong><br>Standing CC on all BOSS communications. Part of any decision that affects the channel.</p>
      </div>
      <div class="contact-card">
        <h5>Aaron C. Norris</h5>
        <p><strong>Norris Utilities®, LLC</strong><br>Founder &amp; CEO — owns this conversation. 205-500-1343.</p>
      </div>
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