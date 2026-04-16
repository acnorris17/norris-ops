<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Action Item — H2O Waterproofing Lifetime Warranty Definition — Norris Utilities®</title>
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
  --nu-amber: #F59E0B;
  --nu-green: #10B981;
  --nu-red: #EF4444;
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
  background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
  opacity: 0.6;
}
.nu-header::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 65%; height: 90%;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='white' opacity='0.9'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='white' opacity='0.8'/></svg>") center/contain no-repeat;
  opacity: 0.07;
  z-index: 1;
  pointer-events: none;
}
.nu-header * { position: relative; z-index: 2; }

.nu-phoenix-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
  filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
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
  font-size: 1.2rem;
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
  letter-spacing: 0.04em;
}

/* ══ CHEVRON TRANSITION ══ */
.nu-chevron {
  position: relative;
  height: 50px;
  margin-top: -50px;
  z-index: 10;
  line-height: 0;
}
.nu-chevron svg {
  width: 100%;
  height: 50px;
  display: block;
}

/* ══ CONTENT AREA ══ */
.nu-content-area {
  position: relative;
  background: var(--nu-white);
  padding: 0;
}
.nu-content-area::before {
  content: '';
  position: absolute;
  top: 80px; left: 50%;
  transform: translateX(-50%);
  width: 520px; height: 520px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z' fill='%230000FF' opacity='1'/><path d='M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z' fill='%230000FF' opacity='1'/></svg>") center/contain no-repeat;
  opacity: 0.025;
  z-index: 0;
  pointer-events: none;
}
.nu-container {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 40px 60px;
}

/* ══ ACTION STATUS BANNER ══ */
.status-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border-left: 6px solid var(--nu-amber);
  padding: 20px 24px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(245, 158, 11, 0.15);
}
.status-banner-icon {
  width: 44px;
  height: 44px;
  background: var(--nu-amber);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-weight: 900;
  font-size: 1.3rem;
}
.status-banner-text {
  flex: 1;
}
.status-banner-label {
  font-size: 0.8rem;
  font-weight: 900;
  color: #92400E;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 2px;
}
.status-banner-msg {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--nu-dark-text);
}

/* ══ SECTION TITLES ══ */
.nu-section-title {
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--nu-blue);
  margin: 40px 0 16px;
  letter-spacing: -0.01em;
}
.nu-section-title span {
  color: var(--nu-dark-text);
  font-weight: 700;
}
.nu-section-divider {
  height: 3px;
  background: linear-gradient(90deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
  width: 60px;
  margin-bottom: 24px;
  border-radius: 2px;
}

/* ══ ACTION CARD (HERO) ══ */
.action-hero {
  background: linear-gradient(135deg, var(--nu-white) 0%, #F8FAFC 100%);
  border: 2px solid var(--nu-medium-gray);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
}
.action-hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 6px; height: 100%;
  background: linear-gradient(180deg, var(--nu-blue) 0%, var(--nu-cyan) 100%);
}
.action-hero-label {
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--nu-blue);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.action-hero-title {
  font-size: 1.65rem;
  font-weight: 900;
  color: var(--nu-dark-text);
  line-height: 1.25;
  margin-bottom: 16px;
}
.action-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--nu-medium-gray);
  font-size: 0.9rem;
}
.action-hero-meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.action-hero-meta-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #6B7280;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.action-hero-meta-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--nu-dark-text);
}

/* ══ CONTEXT BOX ══ */
.context-box {
  background: #F0F9FF;
  border: 1px solid #BAE6FD;
  border-radius: 10px;
  padding: 24px 28px;
  margin-bottom: 24px;
}
.context-box p {
  margin-bottom: 12px;
  font-size: 1rem;
  color: var(--nu-dark-text);
  line-height: 1.7;
}
.context-box p:last-child { margin-bottom: 0; }
.context-box strong { color: var(--nu-blue); font-weight: 900; }

/* ══ QUESTION LIST ══ */
.question-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.question-item {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-left: 4px solid var(--nu-cyan);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 12px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.question-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.question-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.9rem;
}
.question-content {
  flex: 1;
}
.question-text {
  font-weight: 700;
  font-size: 1rem;
  color: var(--nu-dark-text);
  margin-bottom: 6px;
}
.question-rationale {
  font-size: 0.9rem;
  color: #6B7280;
  line-height: 1.5;
}

/* ══ RISK GRID ══ */
.risk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 8px;
}
.risk-card {
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 10px;
  padding: 20px;
  position: relative;
}
.risk-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.risk-badge {
  font-size: 0.7rem;
  font-weight: 900;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.risk-badge.high { background: #FEE2E2; color: #991B1B; }
.risk-badge.med { background: #FEF3C7; color: #92400E; }
.risk-badge.low { background: #D1FAE5; color: #065F46; }
.risk-card-title {
  font-weight: 900;
  color: var(--nu-dark-text);
  font-size: 1rem;
}
.risk-card-text {
  font-size: 0.9rem;
  color: var(--nu-body-text);
  line-height: 1.55;
}

/* ══ CHECKLIST ══ */
.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}
.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: var(--nu-white);
  border: 1px solid var(--nu-medium-gray);
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: var(--nu-dark-text);
}
.checklist-box {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border: 2px solid var(--nu-blue);
  border-radius: 4px;
  margin-top: 1px;
  background: var(--nu-white);
}

/* ══ EMAIL DRAFT ══ */
.email-draft {
  background: #FAFBFF;
  border: 1px solid #DBEAFE;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
}
.email-draft-header {
  background: linear-gradient(135deg, var(--nu-blue) 0%, #0033CC 100%);
  color: white;
  padding: 14px 20px;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.email-draft-meta {
  padding: 16px 24px;
  border-bottom: 1px solid var(--nu-medium-gray);
  font-size: 0.88rem;
  background: var(--nu-white);
}
.email-draft-meta-row {
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
}
.email-draft-meta-row:last-child { margin-bottom: 0; }
.email-draft-meta-label {
  font-weight: 900;
  color: var(--nu-dark-text);
  min-width: 65px;
}
.email-draft-meta-value { color: var(--nu-body-text); }
.email-draft-body {
  padding: 24px 28px;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--nu-dark-text);
  background: var(--nu-white);
}
.email-draft-body p {
  margin-bottom: 14px;
  padding-left: 24px;
}
.email-draft-body p.greeting,
.email-draft-body p.close { padding-left: 0; }
.email-draft-body p.sig { padding-left: 24px; }
.email-draft-body ul {
  padding-left: 48px;
  margin-bottom: 14px;
  list-style: none;
}
.email-draft-body ul li {
  position: relative;
  margin-bottom: 6px;
}
.email-draft-body ul li::before {
  content: '•';
  position: absolute;
  left: -16px;
  color: var(--nu-blue);
  font-weight: 900;
}

/* ══ CTA ROW ══ */
.cta-row {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.nu-btn-primary, .nu-btn-secondary {
  display: inline-block;
  padding: 13px 28px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  transition: all 0.2s ease;
  font-family: var(--font-primary);
  border: 2px solid var(--nu-blue);
}
.nu-btn-primary {
  background: var(--nu-blue);
  color: var(--nu-white);
}
.nu-btn-primary:hover {
  background: #0000CC;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,255,0.25);
}
.nu-btn-secondary {
  background: transparent;
  color: var(--nu-blue);
}
.nu-btn-secondary:hover {
  background: var(--nu-blue);
  color: var(--nu-white);
}

/* ══ FOOTER ══ */
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
  font-size: 1.2rem;
  color: var(--nu-cyan);
  margin-bottom: 14px;
}
.nu-footer-contact {
  font-size: 0.95rem;
  line-height: 1.9;
}
.nu-footer-contact a {
  color: var(--nu-cyan);
  text-decoration: none;
}
.nu-footer-contact a:hover { text-decoration: underline; }
.nu-footer-legal {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.15);
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.04em;
}

/* ══ RESPONSIVE ══ */
@media (max-width: 768px) {
  .nu-header { padding: 40px 20px 60px; min-height: 200px; }
  .nu-logo-text { font-size: 2rem; letter-spacing: 0.2em; }
  .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
  .nu-tagline { font-size: 1rem; }
  .nu-container { padding: 32px 20px 40px; }
  .action-hero { padding: 22px; }
  .action-hero-title { font-size: 1.3rem; }
  .email-draft-body { padding: 18px 20px; }
  .email-draft-body p { padding-left: 12px; }
  .cta-row { flex-direction: column; }
  .nu-btn-primary, .nu-btn-secondary { text-align: center; }
}

@media print {
  body { background: white; }
  .nu-header { background: var(--nu-blue) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .action-hero, .question-item, .risk-card, .checklist li { box-shadow: none; }
  .cta-row { display: none; }
  .nu-footer { background: var(--nu-navy) !important; -webkit-print-color-adjust: exact; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="nu-header">
  <div class="nu-phoenix-icon">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.95"/>
      <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.85"/>
    </svg>
  </div>
  <div class="nu-logo-text">NORRIS</div>
  <div class="nu-logo-subtitle">UTILITIES</div>
  <div class="nu-tagline">A Legacy of Commitment&reg;</div>
</header>

<!-- WHITE CHEVRON TRANSITION -->
<div class="nu-chevron">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- MAIN CONTENT -->
<main class="nu-content-area">
  <div class="nu-container">

    <!-- STATUS BANNER -->
    <div class="status-banner">
      <div class="status-banner-icon">!</div>
      <div class="status-banner-text">
        <div class="status-banner-label">Open Action &mdash; Vendor Follow-Up Required</div>
        <div class="status-banner-msg">Obtain written definition of H2O Waterproofing&rsquo;s &ldquo;lifetime warranty&rdquo; coverage before referencing in any customer communication or proposal.</div>
      </div>
    </div>

    <!-- ACTION HERO -->
    <section class="action-hero">
      <div class="action-hero-label">reMarkable Action Item &bull; Task 210</div>
      <h1 class="action-hero-title">Get Definition of Lifetime Warranty Coverage from H2O Waterproofing</h1>
      <div class="action-hero-meta">
        <div class="action-hero-meta-item">
          <span class="action-hero-meta-label">Source</span>
          <span class="action-hero-meta-value">reMarkable Notebook</span>
        </div>
        <div class="action-hero-meta-item">
          <span class="action-hero-meta-label">Captured</span>
          <span class="action-hero-meta-value">April 16, 2026</span>
        </div>
        <div class="action-hero-meta-item">
          <span class="action-hero-meta-label">Owner</span>
          <span class="action-hero-meta-value">Aaron C. Norris</span>
        </div>
        <div class="action-hero-meta-item">
          <span class="action-hero-meta-label">Priority</span>
          <span class="action-hero-meta-value">Medium &ndash; Pre-Sale Gate</span>
        </div>
        <div class="action-hero-meta-item">
          <span class="action-hero-meta-label">Target Close</span>
          <span class="action-hero-meta-value">Within 5 Business Days</span>
        </div>
      </div>
    </section>

    <!-- WHY IT MATTERS -->
    <h2 class="nu-section-title"><span>Why</span> This Matters</h2>
    <div class="nu-section-divider"></div>
    <div class="context-box">
      <p><strong>The problem:</strong> &ldquo;Lifetime warranty&rdquo; is one of the most frequently misunderstood terms in the waterproofing and coatings industry. Without a written definition from H2O Waterproofing, Norris Utilities&reg; cannot responsibly quote, endorse, or cross-sell the product alongside FlexPro Armor bucket covers or Skylift truck bodies.</p>
      <p><strong>The risk:</strong> Customers hear &ldquo;lifetime&rdquo; and assume forever &mdash; but the term often means the lifetime of the original purchaser, the lifetime of the installation, a fixed year count (10, 15, 25), or only the membrane and not the labor or substrate. Any ambiguity gets pushed onto us when a claim is filed.</p>
      <p><strong>The fix:</strong> Get the warranty language <em>in writing</em>, confirm exclusions, and file the document in the vendor library before it is ever referenced on a quote or customer conversation.</p>
    </div>

    <!-- QUESTIONS TO ASK -->
    <h2 class="nu-section-title"><span>Questions</span> for H2O Waterproofing</h2>
    <div class="nu-section-divider"></div>
    <ol class="question-list">
      <li class="question-item">
        <div class="question-number">1</div>
        <div class="question-content">
          <div class="question-text">What does &ldquo;lifetime&rdquo; actually cover &mdash; product, labor, or both?</div>
          <div class="question-rationale">Most product warranties exclude labor. If labor is excluded, we need to state that plainly to customers.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">2</div>
        <div class="question-content">
          <div class="question-text">Whose lifetime &mdash; the original purchaser, the structure, or the coating itself?</div>
          <div class="question-rationale">Transferability is a major objection point. Non-transferable warranties lose value on resale.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">3</div>
        <div class="question-content">
          <div class="question-text">Is there a written exclusions list (UV exposure, chemical attack, abrasion, movement cracks, ponding)?</div>
          <div class="question-rationale">Exclusions are where claims die. We need the full list before selling the promise.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">4</div>
        <div class="question-content">
          <div class="question-text">What triggers a void &mdash; substrate prep failures, ambient temperature, third-party repairs, missed inspections?</div>
          <div class="question-rationale">Voiding conditions must be communicated to the installer and the end customer up front.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">5</div>
        <div class="question-content">
          <div class="question-text">Is the warranty pro-rated or full-replacement, and over what curve?</div>
          <div class="question-rationale">A &ldquo;lifetime&rdquo; warranty that pays 10% at year 15 is not what the customer pictures.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">6</div>
        <div class="question-content">
          <div class="question-text">What is the claim process &mdash; who files, what documentation is required, what is the turnaround?</div>
          <div class="question-rationale">Claim friction erodes trust. We need to know the steps before pointing a customer at them.</div>
        </div>
      </li>
      <li class="question-item">
        <div class="question-number">7</div>
        <div class="question-content">
          <div class="question-text">Can we receive the signed warranty certificate as a PDF template for our vendor library?</div>
          <div class="question-rationale">We maintain a master vendor warranty folder so CB and the sales team can pull the exact language on demand.</div>
        </div>
      </li>
    </ol>

    <!-- RISK CARDS -->
    <h2 class="nu-section-title"><span>Risk</span> Profile Until Resolved</h2>
    <div class="nu-section-divider"></div>
    <div class="risk-grid">
      <div class="risk-card">
        <div class="risk-card-header">
          <span class="risk-badge high">High</span>
          <span class="risk-card-title">Customer Misrepresentation</span>
        </div>
        <div class="risk-card-text">If a proposal uses the word &ldquo;lifetime&rdquo; without written backing, Norris Utilities&reg; owns the promise when a claim is denied.</div>
      </div>
      <div class="risk-card">
        <div class="risk-card-header">
          <span class="risk-badge med">Med</span>
          <span class="risk-card-title">Cross-Sell Friction</span>
        </div>
        <div class="risk-card-text">H2O cannot be bundled with FlexPro Armor or Skylift proposals until the warranty language is on file and margin-neutral.</div>
      </div>
      <div class="risk-card">
        <div class="risk-card-header">
          <span class="risk-badge med">Med</span>
          <span class="risk-card-title">Dealer Trust</span>
        </div>
        <div class="risk-card-text">Dealers quoting our vendor line expect a one-page warranty summary. Missing that document slows the first sale.</div>
      </div>
      <div class="risk-card">
        <div class="risk-card-header">
          <span class="risk-badge low">Low</span>
          <span class="risk-badge low" style="display:none;"></span>
          <span class="risk-card-title">Internal Documentation Gap</span>
        </div>
        <div class="risk-card-text">Caroline&rsquo;s vendor binder and the ops portal vendor library both have an open slot for this record.</div>
      </div>
    </div>

    <!-- EMAIL DRAFT -->
    <h2 class="nu-section-title"><span>Draft</span> Email to H2O Waterproofing</h2>
    <div class="nu-section-divider"></div>
    <div class="email-draft">
      <div class="email-draft-header">Outbound &bull; Ready for Aaron&rsquo;s Review</div>
      <div class="email-draft-meta">
        <div class="email-draft-meta-row"><span class="email-draft-meta-label">To:</span><span class="email-draft-meta-value">H2O Waterproofing &mdash; primary contact</span></div>
        <div class="email-draft-meta-row"><span class="email-draft-meta-label">From:</span><span class="email-draft-meta-value">Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</span></div>
        <div class="email-draft-meta-row"><span class="email-draft-meta-label">CC:</span><span class="email-draft-meta-value">Caroline Butler</span></div>
        <div class="email-draft-meta-row"><span class="email-draft-meta-label">Subject:</span><span class="email-draft-meta-value">Request &mdash; Written Definition of Lifetime Warranty Coverage</span></div>
      </div>
      <div class="email-draft-body">
        <p class="greeting">Team &mdash;</p>
        <p>Before we reference the H2O Waterproofing lifetime warranty in any of our proposals or customer conversations, I want to make sure we represent it accurately. Would you send over the written definition of what the lifetime warranty actually covers?</p>
        <p>Specifically, I would like clarity on the following:</p>
        <ul>
          <li>Whether coverage applies to product only, or to product and labor</li>
          <li>Whose lifetime governs the term (original purchaser, installation, or coating)</li>
          <li>The full list of exclusions &mdash; UV, chemical, abrasion, movement, ponding, etc.</li>
          <li>Conditions that void the warranty, including substrate prep and third-party repair</li>
          <li>Whether the warranty is pro-rated or full-replacement, and the schedule</li>
          <li>The claim process, required documentation, and typical turnaround</li>
        </ul>
        <p>Ideally, we would love a PDF of the signed warranty certificate we can keep on file for our vendor library. Our admin, Caroline Butler, will log it so our sales team can pull the exact language on demand.</p>
        <p>Appreciate your help here &mdash; getting this on paper protects you and our mutual customers.</p>
        <p class="close">Sincerely,</p>
        <p class="sig">
          Aaron C. Norris<br>
          Founder &amp; CEO<br>
          Norris Utilities, LLC<br>
          Cell: 205-500-1343<br>
          acnorris@norrisutilities.com
        </p>
      </div>
    </div>

    <!-- CHECKLIST -->
    <h2 class="nu-section-title"><span>Completion</span> Checklist</h2>
    <div class="nu-section-divider"></div>
    <ul class="checklist">
      <li><span class="checklist-box"></span><span>Confirm correct H2O Waterproofing contact name and email before sending.</span></li>
      <li><span class="checklist-box"></span><span>Send warranty definition request email (draft above).</span></li>
      <li><span class="checklist-box"></span><span>Receive written warranty document &mdash; reply or attached PDF.</span></li>
      <li><span class="checklist-box"></span><span>Save PDF to vendor library: <em>ops.norrisutilities.com / internal / vendor-warranties / h2o-waterproofing-lifetime.pdf</em></span></li>
      <li><span class="checklist-box"></span><span>Build one-page plain-English summary for the sales team (what it covers, what it excludes, claim steps).</span></li>
      <li><span class="checklist-box"></span><span>Brief Caroline Butler so customer-facing questions can be answered without escalation.</span></li>
      <li><span class="checklist-box"></span><span>Update ops portal vendor line card entry with a link to the warranty summary.</span></li>
      <li><span class="checklist-box"></span><span>Mark reMarkable Task 210 as complete in the capture log.</span></li>
    </ul>

    <!-- CTA ROW -->
    <div class="cta-row">
      <a href="mailto:acnorris@norrisutilities.com?subject=H2O%20Warranty%20Action%20%E2%80%94%20Task%20210" class="nu-btn-primary">Email Aaron Update</a>
      <a href="tel:2055001343" class="nu-btn-secondary">Call 205-500-1343</a>
    </div>

  </div>
</main>

<!-- FOOTER -->
<footer class="nu-footer">
  <div class="nu-footer-tagline">A Legacy of Commitment&reg;</div>
  <div class="nu-footer-contact">
    Aaron C. Norris, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities&reg;, LLC<br>
    <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
    <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
    <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
  </div>
  <div class="nu-footer-legal">
    130 Inverness Plaza #210, Birmingham, AL 35242 &nbsp;&bull;&nbsp; Third-Generation Utility Equipment Dealer &amp; Distributor &nbsp;&bull;&nbsp; Serving 20+ States
  </div>
</footer>

</body>
</html>