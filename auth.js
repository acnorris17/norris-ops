/**
 * Norris Utilities Operations Portal - Authentication Module
 * Client-side password protection for GitHub Pages static site
 */

(function() {
  'use strict';

  // SHA-256 hash of the password (NorrisOps2026!)
  var VALID_HASH = '771222667e07d3868b063bf17c3905fe585919a8288874c46666ddc643b91182';
  var SESSION_KEY = 'nu_auth';
  var SESSION_TIMEOUT = 28800000; // 8 hours in milliseconds

  /**
   * SHA-256 hash function using Web Crypto API
   */
  async function sha256(message) {
    var msgBuffer = new TextEncoder().encode(message);
    var hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    var hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  /**
   * Check if session is valid
   */
  function isAuthenticated() {
    var token = sessionStorage.getItem(SESSION_KEY);
    if (!token) return false;
    var timestamp = parseInt(token, 10);
    if (isNaN(timestamp)) return false;
    return (Date.now() - timestamp) < SESSION_TIMEOUT;
  }

  /**
   * Create authenticated session
   */
  function createSession() {
    sessionStorage.setItem(SESSION_KEY, Date.now().toString());
  }

  /**
   * Clear session (logout)
   */
  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.href = '/norris-ops/login.html';
  }

  /**
   * Validate password and authenticate
   */
  async function authenticate(password) {
    var hash = await sha256(password);
    if (hash === VALID_HASH) {
      createSession();
      return true;
    }
    return false;
  }

  /**
   * Refresh session timestamp (extend timeout on activity)
   */
  function refreshSession() {
    if (isAuthenticated()) {
      createSession();
    }
  }

  // Expose public API
  window.NorrisAuth = {
    isAuthenticated: isAuthenticated,
    authenticate: authenticate,
    logout: logout,
    refreshSession: refreshSession,
    VALID_HASH: VALID_HASH
  };
})();
