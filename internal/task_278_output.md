<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MK Email Catch-Up & Mel Introduction — Action Plan — Norris Utilities®</title>
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
      --nu-success: #2D8B3F;
      --nu-warning: #C9A84C;
      --nu-urgent: #C42B2B;
      --font-primary: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-italic: 'Playfair Display', Georgia, serif;
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
      background: linear-gradient(135deg, #0a0e5c 0%, #0033cc 30%, #0066ee 60%, #00aaff 85%, var(--nu-cyan) 100%);
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
        repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
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
    .nu-header-inner { position: relative; z-index: 2; }

    .nu-phoenix-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
      max-width: 500px;
      opacity: 0.07;
      z-index: 1;
      pointer-events: none;
    }

    .nu-phoenix-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 14px;
      filter: drop-shadow(0 2px 12px rgba(0,0,0,0.35));
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
      font-size: 1.25rem;
      color: var(--nu-white);
      letter-spacing: 0.7em;
      text-transform: uppercase;
      margin-bottom: 22px;
      padding-left: 0.7em;
    }
    .nu-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.35rem;
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

    /* CONTENT AREA */
    .nu-content-area {
      position: relative;
      background: var(--nu-white);
    }
    .nu-content-area::before {
      content: '';
      position: absolute;
      top: 200px; left: 50%;
      transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(0,0,255,0.025) 0%, transparent 70%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
    .nu-content-inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;
      z-index: 1;
    }

    /* PAGE TITLE */
    .page-eyebrow {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--nu-blue);
      background: rgba(0,0,255,0.07);
      padding: 6px 16px;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .page-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 2.5rem;
      line-height: 1.15;
      color: var(--nu-dark-text);
      margin-bottom: 12px;
    }
    .page-title .accent { color: var(--nu-blue); }
    .page-subtitle {
      font-size: 1.1rem;
      color: #555;
      max-width: 780px;
      margin-bottom: 8px;
    }
    .page-meta {
      font-size: 0.88rem;
      color: #777;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--nu-medium-gray);
    }
    .page-meta strong { color: var(--nu-dark-text); }

    /* SECTION TITLE */
    .nu-section-title {
      font-family: var(--font-primary);
      font-weight: 900;
      font-size: 1.5rem;
      margin: 50px 0 18px;
      letter-spacing: 0.01em;
    }
    .nu-section-title .first { color: var(--nu-blue); }
    .nu-section-title .rest { color: var(--nu-dark-text); }

    /* PRIORITY BANNER */
    .priority-banner {
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 60%, var(--nu-blue) 100%);
      color: var(--nu-white);
      padding: 24px 28px;
      border-radius: 10px;
      margin-bottom: 32px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 22px;
      align-items: center;
      box-shadow: 0 6px 20px rgba(0,0,51,0.18);
    }
    .priority-banner .pb-icon {
      width: 54px; height: 54px;
      background: var(--nu-cyan);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 900;
      color: var(--nu-navy);
      flex-shrink: 0;
    }
    .priority-banner .pb-text strong {
      display: block;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
    .priority-banner .pb-text span {
      font-size: 0.92rem;
      color: rgba(255,255,255,0.82);
    }
    .priority-banner .pb-status {
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* BADGE ROW (chevron badges) */
    .badge-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    .nu-badge {
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #1a1a3e 0%, #2a2a5e 100%);
      color: var(--nu-white);
      padding: 14px 32px 14px 18px;
      clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%);
      font-weight: 700;
      font-size: 0.92rem;
      letter-spacing: 0.02em;
      min-height: 56px;
    }
    .nu-badge-icon {
      width: 28px; height: 28px;
      margin-right: 12px;
      flex-shrink: 0;
      color: var(--nu-cyan);
    }
    .nu-badge-text small {
      display: block;
      font-size: 0.72rem;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    /* THREAD CARD GRID */
    .thread-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .thread-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-left: 4px solid var(--nu-blue);
      border-radius: 8px;
      padding: 22px 24px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .thread-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
    .thread-card.urgent { border-left-color: var(--nu-urgent); }
    .thread-card.priority { border-left-color: var(--nu-cyan); }
    .thread-card.intro { border-left-color: var(--nu-accent-gold); }

    .tc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      gap: 12px;
    }
    .tc-tag {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .tc-tag.urgent { background: rgba(196,43,43,0.1); color: var(--nu-urgent); }
    .tc-tag.priority { background: rgba(6,208,255,0.15); color: #0080a8; }
    .tc-tag.intro { background: rgba(201,168,76,0.15); color: #8a6f1f; }
    .tc-tag.standard { background: rgba(0,0,255,0.08); color: var(--nu-blue); }

    .tc-num {
      font-size: 0.75rem;
      font-weight: 700;
      color: #999;
      letter-spacing: 0.05em;
    }
    .tc-title {
      font-size: 1.08rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .tc-meta {
      font-size: 0.82rem;
      color: #777;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--nu-medium-gray);
    }
    .tc-meta strong { color: var(--nu-dark-text); font-weight: 700; }
    .tc-body {
      font-size: 0.92rem;
      color: var(--nu-body-text);
      line-height: 1.55;
      margin-bottom: 14px;
    }
    .tc-action {
      background: var(--nu-light-gray);
      border-radius: 5px;
      padding: 10px 14px;
      font-size: 0.85rem;
      color: var(--nu-dark-text);
      border-left: 3px solid var(--nu-cyan);
    }
    .tc-action strong {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--nu-blue);
      margin-bottom: 4px;
    }

    /* MEL INTRO PANEL */
    .intro-panel {
      background: linear-gradient(135deg, var(--nu-white) 0%, #fafbff 100%);
      border: 2px solid var(--nu-blue);
      border-radius: 12px;
      padding: 32px 36px;
      margin-bottom: 30px;
      position: relative;
      overflow: hidden;
    }
    .intro-panel::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(6,208,255,0.1) 0%, transparent 70%);
      border-radius: 50%;
      transform: translate(50%, -50%);
    }
    .intro-panel-inner { position: relative; z-index: 1; }
    .intro-panel h3 {
      font-size: 1.4rem;
      font-weight: 900;
      color: var(--nu-dark-text);
      margin-bottom: 6px;
    }
    .intro-panel h3 .accent { color: var(--nu-blue); }
    .intro-panel .ip-sub {
      font-size: 0.88rem;
      color: #777;
      margin-bottom: 22px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .email-preview {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 6px;
      padding: 22px 26px;
      margin-top: 18px;
      font-family: 'Lato', sans-serif;
    }
    .email-headers {
      font-size: 0.85rem;
      color: #555;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--nu-medium-gray);
      margin-bottom: 16px;
    }
    .email-headers div { margin-bottom: 4px; }
    .email-headers strong {
      display: inline-block;
      width: 70px;
      color: var(--nu-blue);
      font-weight: 700;
    }
    .email-body {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--nu-body-text);
    }
    .email-body p {
      margin-bottom: 14px;
      padding-left: 20px;
    }
    .email-body p.greeting { padding-left: 0; }
    .email-body p.signature {
      padding-left: 20px;
      margin-top: 18px;
    }
    .email-body p.sign-name {
      padding-left: 20px;
      margin-top: 4px;
      font-weight: 700;
      color: var(--nu-dark-text);
    }
    .email-body ul {
      list-style: none;
      padding-left: 20px;
      margin-bottom: 14px;
    }
    .email-body ul li {
      padding-left: 16px;
      position: relative;
      margin-bottom: 6px;
    }
    .email-body ul li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--nu-blue);
      font-weight: 700;
    }

    /* CHECKLIST */
    .checklist {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-radius: 8px;
      padding: 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      margin-bottom: 24px;
      overflow: hidden;
    }
    .checklist-item {
      display: grid;
      grid-template-columns: 44px 1fr auto;
      gap: 16px;
      align-items: center;
      padding: 18px 24px;
      border-bottom: 1px solid var(--nu-medium-gray);
      transition: background 0.15s ease;
    }
    .checklist-item:last-child { border-bottom: none; }
    .checklist-item:hover { background: #fafbff; }
    .checklist-item .ci-check {
      width: 26px; height: 26px;
      border: 2px solid var(--nu-blue);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .checklist-item .ci-content strong {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      color: var(--nu-dark-text);
      margin-bottom: 3px;
    }
    .checklist-item .ci-content span {
      font-size: 0.85rem;
      color: #666;
    }
    .checklist-item .ci-time {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--nu-blue);
      letter-spacing: 0.05em;
      background: rgba(0,0,255,0.07);
      padding: 5px 12px;
      border-radius: 3px;
      text-transform: uppercase;
    }

    /* DIAMOND METRIC GRID */
    .metric-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 18px;
      margin-bottom: 30px;
    }
    .metric-card {
      background: var(--nu-white);
      border: 1px solid var(--nu-medium-gray);
      border-top: 3px solid var(--nu-cyan);
      border-radius: 8px;
      padding: 22px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .metric-card .mc-num {
      font-size: 2.2rem;
      font-weight: 900;
      color: var(--nu-blue);
      line-height: 1;
      margin-bottom: 6px;
    }
    .metric-card .mc-label {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
    }

    /* CTA */
    .cta-block {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 100%);
      border-radius: 10px;
      padding: 32px 36px;
      margin-top: 40px;
      color: var(--nu-white);
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
    }
    .cta-block h4 {
      font-size: 1.3rem;
      font-weight: 900;
      margin-bottom: 6px;
      color: var(--nu-white);
    }
    .cta-block p {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.8);
    }
    .cta-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
    .nu-btn-primary {
      display: inline-block;
      background: var(--nu-cyan);
      color: var(--nu-navy);
      padding: 13px 26px;
      border: none;
      border-radius: 5px;
      font-weight: 900;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-primary:hover {
      background: #5ce0ff;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(6,208,255,0.4);
    }
    .nu-btn-secondary {
      display: inline-block;
      background: transparent;
      color: var(--nu-white);
      padding: 13px 26px;
      border: 2px solid rgba(255,255,255,0.4);
      border-radius: 5px;
      font-weight: 700;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .nu-btn-secondary:hover {
      background: rgba(255,255,255,0.1);
      border-color: var(--nu-white);
    }

    /* FOOTER */
    .nu-footer {
      background: linear-gradient(135deg, var(--nu-navy) 0%, #000066 50%, #000033 100%);
      color: rgba(255,255,255,0.85);
      padding: 50px 40px;
      text-align: center;
    }
    .nu-footer-tagline {
      font-family: var(--font-italic);
      font-style: italic;
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--nu-cyan);
      margin-bottom: 16px;
    }
    .nu-footer-contact {
      font-size: 0.95rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.85);
    }
    .nu-footer-contact strong {
      color: var(--nu-white);
      font-weight: 700;
    }
    .nu-footer-contact a {
      color: var(--nu-cyan);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .nu-footer-contact a:hover { color: #5ce0ff; }
    .nu-footer-divider {
      height: 1px;
      background: rgba(255,255,255,0.15);
      margin: 22px auto;
      max-width: 400px;
    }
    .nu-footer-meta {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      letter-spacing: 0.05em;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .nu-header { padding: 50px 20px 70px; min-height: 240px; }
      .nu-logo-text { font-size: 2.1rem; letter-spacing: 0.2em; }
      .nu-logo-subtitle { font-size: 0.95rem; letter-spacing: 0.5em; }
      .nu-tagline { font-size: 1.05rem; }
      .nu-content-inner { padding: 40px 22px; }
      .page-title { font-size: 1.85rem; }
      .priority-banner {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .priority-banner .pb-icon { margin: 0 auto; }
      .nu-badge {
        clip-path: none;
        border-radius: 6px;
        padding: 14px 16px;
      }
      .checklist-item {
        grid-template-columns: 30px 1fr;
        gap: 12px;
      }
      .checklist-item .ci-time {
        grid-column: 1 / -1;
        justify-self: start;
        margin-top: 6px;
      }
      .cta-block {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .cta-buttons { justify-content: center; }
      .intro-panel { padding: 22px; }
      .email-headers strong { width: 56px; }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="nu-header">
    <div class="nu-header-inner">
      <div class="nu-phoenix-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5 L55 20 L70 10 L60 25 L80 20 L65 35 L75 50 L55 40 L50 60 L45 40 L25 50 L35 35 L20 20 L40 25 L30 10 L45 20 Z" fill="white" opacity="0.92"/>
          <path d="M50 55 L52 70 L60 65 L55 75 L50 95 L45 75 L40 65 L48 70 Z" fill="white" opacity="0.82"/>
        </svg>
      </div>
      <div class="nu-logo-text">NORRIS</div>
      <div class="nu-logo-subtitle">UTILITIES</div>
      <div class="nu-tagline">A Legacy of Commitment®</div>
    </div>
  </header>

  <!-- WHITE CHEVRON TRANSITION -->
  <div class="nu-chevron">
    <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L547,50 L1440,0 L1440,50 L0,50 Z" fill="white"/>
    </svg>
  </div>

  <!-- MAIN CONTENT -->
  <main class="nu-content-area">
    <div class="nu-content-inner">

      <!-- PAGE TITLE -->
      <span class="page-eyebrow">Action Item · Marketing & Partnerships</span>
      <h1 class="page-title">MK Email <span class="accent">Catch-Up</span> &amp; Mel Introduction</h1>
      <p class="page-subtitle">Process the open MK Smith email backlog, send the Mel introduction, and confirm outstanding payment items in one focused work block.</p>
      <div class="page-meta">
        <strong>Source:</strong> reMarkable action item · captured 2026-04-21 &nbsp;|&nbsp;
        <strong>Owner:</strong> Aaron C. Norris &nbsp;|&nbsp;
        <strong>Estimated time:</strong> 35–45 minutes &nbsp;|&nbsp;
        <strong>Status:</strong> Ready to execute
      </div>

      <!-- PRIORITY BANNER -->
      <div class="priority-banner" style="margin-top: 36px;">
        <div class="pb-icon">!</div>
        <div class="pb-text">
          <strong>Mel introduction is the gating item</strong>
          <span>MK is waiting on the introduction email before she can move forward. Send it first — the rest of the backlog flows from there.</span>
        </div>
        <div class="pb-status">Do First</div>
      </div>

      <!-- AT A GLANCE METRICS -->
      <h2 class="nu-section-title"><span class="first">At</span> <span class="rest">a Glance</span></h2>
      <div class="metric-row">
        <div class="metric-card">
          <div class="mc-num">3</div>
          <div class="mc-label">Open Threads</div>
        </div>
        <div class="metric-card">
          <div class="mc-num">1</div>
          <div class="mc-label">Intro Email</div>
        </div>
        <div class="metric-card">
          <div class="mc-num">1</div>
          <div class="mc-label">Payment Item</div>
        </div>
        <div class="metric-card">
          <div class="mc-num">~40</div>
          <div class="mc-label">Minutes Total</div>
        </div>
      </div>

      <!-- BADGES -->
      <div class="badge-row">
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <div class="nu-badge-text">
            <small>Channel</small>
            Email — MK Smith
          </div>
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <div class="nu-badge-text">
            <small>New Contact</small>
            Mel — to be introduced
          </div>
        </div>
        <div class="nu-badge">
          <svg class="nu-badge-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
          <div class="nu-badge-text">
            <small>Open Question</small>
            Payment status
          </div>
        </div>
      </div>

      <!-- OPEN THREADS -->
      <h2 class="nu-section-title"><span class="first">Open</span> <span class="rest">MK Email Threads</span></h2>
      <div class="thread-grid">

        <div class="thread-card intro">
          <div class="tc-header">
            <span class="tc-tag intro">Intro · Top Priority</span>
            <span class="tc-num">Thread 1 / 3</span>
          </div>
          <div class="tc-title">Introduce MK to Mel via Email</div>
          <div class="tc-meta"><strong>From:</strong> Aaron &nbsp;|&nbsp; <strong>To:</strong> MK Smith &amp; Mel &nbsp;|&nbsp; <strong>Type:</strong> New introduction</div>
          <div class="tc-body">
            Two-way introduction email connecting MK (Norris Utilities® marketing contractor) with Mel. Sets the stage for a direct working relationship so Aaron does not need to be the middleman on every exchange.
          </div>
          <div class="tc-action">
            <strong>Action</strong>
            Send the intro email below as the first step. Both parties cc'd. Hand the relationship off — they take it from there.
          </div>
        </div>

        <div class="thread-card priority">
          <div class="tc-header">
            <span class="tc-tag priority">Payment</span>
            <span class="tc-num">Thread 2 / 3</span>
          </div>
          <div class="tc-title">Confirm MK Payment Status</div>
          <div class="tc-meta"><strong>From:</strong> MK Smith &nbsp;|&nbsp; <strong>To:</strong> Aaron &nbsp;|&nbsp; <strong>Type:</strong> Outstanding invoice / payment</div>
          <div class="tc-body">
            MK has raised a payment item that needs Aaron's confirmation. Pull the invoice, verify the amount and the work it covers, then send confirmation of payment date or process payment if it is overdue.
          </div>
          <div class="tc-action">
            <strong>Action</strong>
            Open MK's most recent invoice in QuickBooks. Confirm amount &amp; status. Reply with: pay date, method, and reference number.
          </div>
        </div>

        <div class="thread-card">
          <div class="tc-header">
            <span class="tc-tag standard">Backlog Sweep</span>
            <span class="tc-num">Thread 3 / 3</span>
          </div>
          <div class="tc-title">Catch Up on Remaining MK Emails</div>
          <div class="tc-meta"><strong>From:</strong> MK Smith &nbsp;|&nbsp; <strong>To:</strong> Aaron &nbsp;|&nbsp; <strong>Type:</strong> General marketing backlog</div>
          <div class="tc-body">
            Sweep all remaining unread or unanswered MK emails. Reply, file, or convert to action items. Close the loop on every open thread so MK is not blocked on Aaron for any active work.
          </div>
          <div class="tc-action">
            <strong>Action</strong>
            Open Gmail → search <em>from:MK</em>. Process each thread with the 4-D rule: Do, Delegate, Defer, Delete.
          </div>
        </div>

      </div>

      <!-- MEL INTRO PANEL -->
      <h2 class="nu-section-title"><span class="first">Mel</span> <span class="rest">Introduction — Email Draft</span></h2>
      <div class="intro-panel">
        <div class="intro-panel-inner">
          <h3>Two-Way <span class="accent">Introduction</span></h3>
          <div class="ip-sub">Aaron's voice · Em-dash greeting · Indented paragraphs</div>
          <p style="font-size: 0.92rem; color: #555;">Use this draft as-is or lightly tailor before sending. The goal: hand MK and Mel a clean handshake so they can take the next step directly.</p>

          <div class="email-preview">
            <div class="email-headers">
              <div><strong>From:</strong> Aaron C. Norris &lt;acnorris@norrisutilities.com&gt;</div>
              <div><strong>To:</strong> MK Smith</div>
              <div><strong>Cc:</strong> Mel</div>
              <div><strong>Subject:</strong> Introduction — MK &amp; Mel</div>
            </div>
            <div class="email-body">
              <p class="greeting">MK and Mel —</p>
              <p>I want to make sure the two of you are connected directly so anything you need can move without waiting on me.</p>
              <p>A quick introduction:</p>
              <ul>
                <li><strong>MK Smith</strong> — Marketing contractor for Norris Utilities®. Handles brand, creative direction, and outbound campaigns.</li>
                <li><strong>Mel</strong> — Joining the conversation to coordinate on the items we discussed.</li>
              </ul>
              <p>I'll let the two of you take it from here. Please loop me in if any decision needs my sign-off — otherwise, run with it.</p>
              <p>Appreciate you both.</p>
              <p class="signature">Sincerely,</p>
              <p class="sign-name">Aaron C. Norris</p>
              <p style="padding-left: 20px; font-size: 0.85rem; color: #666; margin-top: -10px;">
                Founder &amp; CEO<br>
                Norris Utilities, LLC<br>
                Cell: 205-500-1343<br>
                acnorris@norrisutilities.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- EXECUTION CHECKLIST -->
      <h2 class="nu-section-title"><span class="first">Execution</span> <span class="rest">Checklist</span></h2>
      <div class="checklist">

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 1 — Send Mel introduction email</strong>
            <span>Use the draft above. MK and Mel both on the To/Cc line. Aaron sends.</span>
          </div>
          <div class="ci-time">5 min</div>
        </div>

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 2 — Pull MK's payment item</strong>
            <span>Open Gmail thread + QuickBooks invoice. Confirm amount, work covered, and current pay status.</span>
          </div>
          <div class="ci-time">10 min</div>
        </div>

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 3 — Reply to MK on payment</strong>
            <span>Confirm pay date, method, and reference. If already paid, send the receipt. If pending, give a firm date.</span>
          </div>
          <div class="ci-time">5 min</div>
        </div>

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 4 — Sweep remaining MK threads</strong>
            <span>Search <em>from:MK</em> in Gmail. Process every unread / unanswered email. Apply Do, Delegate, Defer, or Delete to each.</span>
          </div>
          <div class="ci-time">15 min</div>
        </div>

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 5 — Log outcomes in tracker</strong>
            <span>Update the master tracker: Mel intro sent, MK payment status, any new action items captured.</span>
          </div>
          <div class="ci-time">5 min</div>
        </div>

        <div class="checklist-item">
          <div class="ci-check"></div>
          <div class="ci-content">
            <strong>Step 6 — Close the reMarkable item</strong>
            <span>Strike the action item on the reMarkable. Done is done.</span>
          </div>
          <div class="ci-time">2 min</div>
        </div>

      </div>

      <!-- VOICE REMINDERS -->
      <h2 class="nu-section-title"><span class="first">Voice</span> <span class="rest">Reminders</span></h2>
      <div class="thread-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
        <div class="thread-card">
          <div class="tc-title" style="font-size: 0.98rem; margin-bottom: 6px;">Greeting</div>
          <div class="tc-body" style="margin-bottom: 0;">"<strong>Name —</strong>" with em dash. No comma. Both names on a two-way intro.</div>
        </div>
        <div class="thread-card">
          <div class="tc-title" style="font-size: 0.98rem; margin-bottom: 6px;">Body</div>
          <div class="tc-body" style="margin-bottom: 0;">Indented paragraphs. Blank line between each. Bullets use <strong>•</strong> not -.</div>
        </div>
        <div class="thread-card">
          <div class="tc-title" style="font-size: 0.98rem; margin-bottom: 6px;">Close</div>
          <div class="tc-body" style="margin-bottom: 0;">"Sincerely," then "Aaron C. Norris" on the next line. Full sig follows.</div>
        </div>
        <div class="thread-card">
          <div class="tc-title" style="font-size: 0.98rem; margin-bottom: 6px;">Avoid</div>
          <div class="tc-body" style="margin-bottom: 0;">No "just", "touch base", "leverage", "synergy". No emojis in business email.</div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-block">
        <div>
          <h4>Ready to clear the backlog?</h4>
          <p>Send the Mel intro first — that unblocks MK. Then process the payment item. Then sweep the rest.</p>
        </div>
        <div class="cta-buttons">
          <a href="mailto:?subject=Introduction%20%E2%80%94%20MK%20%26%20Mel" class="nu-btn-primary">Open Intro Email</a>
          <a href="https://mail.google.com/mail/u/0/#search/from%3AMK" class="nu-btn-secondary">Open MK Inbox</a>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="nu-footer">
    <div class="nu-footer-tagline">A Legacy of Commitment®</div>
    <div class="nu-footer-contact">
      <strong>Aaron C. Norris</strong>, Founder &amp; CEO &nbsp;|&nbsp; Norris Utilities®, LLC<br>
      <a href="tel:2055001343">205-500-1343</a> &nbsp;|&nbsp;
      <a href="mailto:acnorris@norrisutilities.com">acnorris@norrisutilities.com</a> &nbsp;|&nbsp;
      <a href="https://www.norrisutilities.com">www.NorrisUtilities.com</a>
    </div>
    <div class="nu-footer-divider"></div>
    <div class="nu-footer-meta">
      130 Inverness Plaza #210, Birmingham, AL 35242 &nbsp;·&nbsp; Phoenix Icon® · A Legacy of Commitment®
    </div>
  </footer>

</body>
</html>