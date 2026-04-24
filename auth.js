/**
 * Norris Utilities Operations Portal - Authentication Module
 * Two-tier access: CB (limited) and Aaron (full)
 */

(function() {
  'use strict';

  var SESSION_KEY = 'nu_auth';
  var ROLE_KEY = 'nu_role';
  var SESSION_TIMEOUT = 28800000; // 8 hours in milliseconds

  // Password-to-role mapping
  var PASSWORDS = {
    'legacy2026': 'cb',
    'norris2026': 'aaron'
  };

  /**
   * §D.10 — LAN password bypass.
   * When loaded from 192.168.1.184 / localhost / 127.0.0.1 the portal password
   * is skipped and the caller is treated as 'aaron'. Cloudflare Access + the
   * portal password tier filter are both intact for norrisops.com (they run
   * when isLanHost() returns false).
   */
  function isLanHost() {
    var h = location.hostname;
    return h === '192.168.1.184' || h === 'localhost' || h === '127.0.0.1';
  }

  /**
   * Check if session is valid
   */
  function isAuthenticated() {
    if (isLanHost()) return true;
    var token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return false;
    var timestamp = parseInt(token, 10);
    if (isNaN(timestamp)) return false;
    return (Date.now() - timestamp) < SESSION_TIMEOUT;
  }

  /**
   * Get current user role
   */
  function getRole() {
    if (isLanHost()) return 'aaron';  // §D.10 LAN bypass
    return sessionStorage.getItem(ROLE_KEY) || null;
  }

  /**
   * Create authenticated session with role
   */
  function createSession(role) {
    sessionStorage.setItem(SESSION_KEY, Date.now().toString());
    sessionStorage.setItem(ROLE_KEY, role);
  }

  /**
   * Clear session (logout)
   */
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(ROLE_KEY);
    window.location.href = '/norris-ops/login.html';
  }

  /**
   * Validate password and authenticate
   * Returns role string ('cb' or 'aaron') on success, false on failure
   */
  function authenticate(password) {
    var role = PASSWORDS[password] || null;
    if (role) {
      createSession(role);
      return role;
    }
    return false;
  }

  /**
   * Refresh session timestamp (extend timeout on activity)
   */
  function refreshSession() {
    var role = getRole();
    if (isAuthenticated() && role) {
      createSession(role);
    }
  }

  /**
   * Apply role-based visibility to the page
   */
  function applyRole() {
    var role = getRole();
    if (role === 'cb') {
      document.body.classList.add('role-cb');
    }
  }

  // Expose public API
  window.NorrisAuth = {
    isAuthenticated: isAuthenticated,
    authenticate: authenticate,
    logout: logout,
    refreshSession: refreshSession,
    getRole: getRole,
    applyRole: applyRole,
    isLanHost: isLanHost
  };
  // Make role available as a plain property for sound-engine.js, etc.
  try {
    window.NU = window.NU || {};
    window.NU.role = getRole();
  } catch (e) { /* ignore */ }
})();
