/**
 * Norris Utilities® Global Navigation Bar
 * Include via <script src="/components/nav.js"></script> on any page.
 * Reads sessionStorage 'portal-role' for CB vs Aaron visibility.
 * Adjusts body padding-top automatically.
 */
(function(){
  'use strict';

  // Detect role — main portal stores role under 'nu_role'
  var role = sessionStorage.getItem('nu_role') || sessionStorage.getItem('portal-role') || 'aaron';
  // Also check the main portal auth key — if nu_auth_2026 is set, user is logged in
  var isLoggedIn = sessionStorage.getItem('nu_auth_2026') === 'granted' ||
                   sessionStorage.getItem('nu_auth') === '1' ||
                   sessionStorage.getItem('nu_notes_auth') === 'granted';

  // Determine active page from URL
  var path = window.location.pathname;

  // All navigation links
  var allLinks = [
    { href: '/index.html',                    label: 'Dashboard',        cb: true,  icon: '\u2302' },
    { href: '/shipping-log.html',             label: 'Shipping Log',     cb: true,  icon: '\uD83D\uDCE6' },
    { href: '/calendar.html',                 label: 'Calendar',         cb: true,  icon: '\uD83D\uDCC5' },
    { href: '/cb-dashboard.html',             label: 'CB Dashboard',     cb: true,  icon: '\uD83D\uDCCB' },
    { href: '/internal/telegram_log.html',    label: 'Telegram Log',     cb: false, icon: '\uD83D\uDCAC' },
    { href: '/internal/email_dashboard.html', label: 'Email',            cb: false, icon: '\u2709' },
    { href: '/internal/samson_dashboard.html',label: 'Samson',           cb: false, icon: '\uD83E\uDDF5' },
    { href: '/tools/pricing-calculator.html', label: 'Pricing',          cb: false, icon: '\uD83E\uDDEE' },
    { href: '/internal/portal_notes.html',    label: 'Notes',            cb: false, icon: '\uD83D\uDCDD' },
    { href: '/team-live.html',                label: 'AI Team',          cb: false, icon: '\uD83E\uDD16' },
    { href: '/aaron.html',                    label: 'AC',               cb: false, icon: '\uD83D\uDC64' }
  ];

  // Filter links based on role
  var links = allLinks;
  if (role === 'cb') {
    links = allLinks.filter(function(l){ return l.cb; });
  }

  // Build nav HTML
  var navHTML = '<div id="nu-global-nav" style="' +
    'position:fixed;top:0;left:0;right:0;height:50px;z-index:9990;' +
    'background:linear-gradient(135deg,#0a0e5c 0%,#0d1240 50%,#0a0e5c 100%);' +
    'display:flex;align-items:center;padding:0 16px;' +
    'font-family:Lato,sans-serif;box-shadow:0 2px 12px rgba(0,0,0,0.3);' +
    'border-bottom:1px solid rgba(6,208,255,0.15);overflow-x:auto;overflow-y:hidden;' +
    '-webkit-overflow-scrolling:touch">';

  // Logo / Home link
  navHTML += '<a href="/index.html" style="' +
    'color:#fff;text-decoration:none;font-weight:900;font-size:14px;letter-spacing:1.5px;' +
    'margin-right:20px;white-space:nowrap;display:flex;align-items:center;gap:8px;flex-shrink:0">' +
    '<span style="color:#06D0FF;font-size:16px">\u2726</span>' +
    'NORRIS UTILITIES</a>';

  // Separator
  navHTML += '<div style="width:1px;height:24px;background:rgba(255,255,255,0.15);margin-right:12px;flex-shrink:0"></div>';

  // Navigation links
  links.forEach(function(link){
    var isActive = path === link.href ||
                   (link.href === '/index.html' && (path === '/' || path === '/index.html'));
    var activeStyle = isActive ?
      'color:#06D0FF;border-bottom:2px solid #06D0FF;' :
      'color:rgba(255,255,255,0.7);border-bottom:2px solid transparent;';

    navHTML += '<a href="' + link.href + '" style="' +
      'text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.5px;' +
      'padding:0 12px;height:50px;display:flex;align-items:center;white-space:nowrap;' +
      'transition:color 0.15s,border-color 0.15s;flex-shrink:0;' +
      activeStyle + '"' +
      ' onmouseover="this.style.color=\'#06D0FF\'"' +
      ' onmouseout="this.style.color=\'' + (isActive ? '#06D0FF' : 'rgba(255,255,255,0.7)') + '\'">' +
      link.label + '</a>';
  });

  navHTML += '</div>';

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Adjust body padding
  var currentPadding = parseInt(window.getComputedStyle(document.body).paddingTop) || 0;
  document.body.style.paddingTop = Math.max(currentPadding, 60) + 'px';

  // Handle login overlays — they should cover the nav too
  var overlays = document.querySelectorAll('.login-overlay');
  overlays.forEach(function(o){ o.style.zIndex = '10000'; });

})();
