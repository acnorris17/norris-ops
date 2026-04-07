/**
 * Norris Utilities — Portable Notes Widget
 * Add to any page: <script src="/components/notes-widget.js"></script>
 * Notes are stored in localStorage keyed by page filename.
 * Two-tier: CB sees one section, Aaron sees CB's notes + separate aaron-only section.
 */
(function() {
  'use strict';
  var pageKey = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  var NOTES_KEY = 'nu_notes_' + pageKey;
  var role = sessionStorage.getItem('nu_role') || 'cb';

  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function loadNotes() { try { return JSON.parse(localStorage.getItem(NOTES_KEY)) || []; } catch(e) { return []; } }
  function saveNotes(n) { localStorage.setItem(NOTES_KEY, JSON.stringify(n)); }
  function now() { return new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }); }
  function author() { return role === 'aaron' ? 'Aaron' : 'Caroline'; }

  function render(container) {
    var notes = loadNotes();
    var isAaron = role === 'aaron';
    var sharedNotes = notes.filter(function(n) { return !n.aaronOnly; });
    var aaronNotes = notes.filter(function(n) { return n.aaronOnly; });

    var html = '<div style="margin-top:32px;border-top:1px solid #e2e4ea;padding-top:16px">';
    html += '<button onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'" style="background:none;border:1px solid #e0e0e0;border-radius:8px;padding:8px 16px;cursor:pointer;font-family:Lato,sans-serif;font-weight:700;font-size:13px;color:#6c7293">Notes (' + notes.length + ')</button>';
    html += '<div style="display:none;margin-top:12px">';

    // Shared notes
    if (sharedNotes.length === 0) {
      html += '<p style="color:#6c7293;font-size:13px;padding:8px 0">No notes yet.</p>';
    }
    sharedNotes.forEach(function(n) {
      var col = n.author === 'Aaron' ? '#0033cc' : '#0f9d58';
      var canDel = isAaron || n.author === 'Caroline';
      html += '<div style="background:' + (n.author === 'Aaron' ? 'rgba(0,51,204,0.04)' : 'rgba(15,157,88,0.04)') + ';border-left:3px solid ' + col + ';border-radius:6px;padding:10px 14px;margin-bottom:8px">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-weight:700;font-size:12px;color:' + col + '">' + esc(n.author) + '</span><span style="font-size:11px;color:#6c7293">' + esc(n.timestamp) + '</span></div>';
      html += '<p style="font-size:14px;line-height:1.5;margin:0">' + esc(n.text) + '</p>';
      if (canDel) html += '<button onclick="NUNotesWidget.del(' + n.id + ')" style="background:none;border:none;color:#999;font-size:11px;cursor:pointer;margin-top:4px">Delete</button>';
      html += '</div>';
    });

    // Add note input
    html += '<div style="display:flex;gap:8px;margin-top:12px"><textarea id="nw-input" placeholder="Add a note..." rows="2" style="flex:1;padding:10px 14px;border:2px solid #e0e0e0;border-radius:8px;font-family:Lato,sans-serif;font-size:14px;resize:vertical;min-height:44px;outline:none"></textarea>';
    html += '<button onclick="NUNotesWidget.add(false)" style="padding:8px 18px;background:linear-gradient(135deg,#0033cc,#06D0FF);color:#fff;border:none;border-radius:8px;font-family:Lato,sans-serif;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">Add</button></div>';

    // Aaron-only notes section
    if (isAaron) {
      html += '<div class="aaron-only" style="margin-top:24px;padding-top:16px;border-top:2px dashed #0033cc">';
      html += '<div style="font-weight:900;font-size:13px;color:#0033cc;margin-bottom:8px;letter-spacing:0.5px">AARON-ONLY NOTES</div>';
      if (aaronNotes.length === 0) {
        html += '<p style="color:#6c7293;font-size:13px;padding:8px 0">No private notes.</p>';
      }
      aaronNotes.forEach(function(n) {
        html += '<div style="background:rgba(0,51,204,0.04);border-left:3px solid #0033cc;border-radius:6px;padding:10px 14px;margin-bottom:8px">';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-weight:700;font-size:12px;color:#0033cc">Aaron (Private)</span><span style="font-size:11px;color:#6c7293">' + esc(n.timestamp) + '</span></div>';
        html += '<p style="font-size:14px;line-height:1.5;margin:0">' + esc(n.text) + '</p>';
        html += '<button onclick="NUNotesWidget.del(' + n.id + ')" style="background:none;border:none;color:#999;font-size:11px;cursor:pointer;margin-top:4px">Delete</button>';
        html += '</div>';
      });
      html += '<div style="display:flex;gap:8px;margin-top:12px"><textarea id="nw-input-private" placeholder="Private note (Aaron only)..." rows="2" style="flex:1;padding:10px 14px;border:2px solid #0033cc;border-radius:8px;font-family:Lato,sans-serif;font-size:14px;resize:vertical;min-height:44px;outline:none;background:rgba(0,51,204,0.02)"></textarea>';
      html += '<button onclick="NUNotesWidget.add(true)" style="padding:8px 18px;background:linear-gradient(135deg,#0a0e5c,#0033cc);color:#fff;border:none;border-radius:8px;font-family:Lato,sans-serif;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">Add Private</button></div>';
      html += '</div>';
    }

    html += '</div></div>';
    container.innerHTML = html;
  }

  function addNote(isPrivate) {
    var inputId = isPrivate ? 'nw-input-private' : 'nw-input';
    var inp = document.getElementById(inputId);
    if (!inp || !inp.value.trim()) return;
    var notes = loadNotes();
    notes.unshift({ id: Date.now(), author: author(), timestamp: now(), text: inp.value.trim(), aaronOnly: isPrivate });
    saveNotes(notes);
    inp.value = '';
    render(document.getElementById('nu-notes-widget'));
  }

  function delNote(id) {
    var notes = loadNotes();
    if (role === 'aaron') {
      notes = notes.filter(function(n) { return n.id !== id; });
    } else {
      notes = notes.filter(function(n) { return !(n.id === id && n.author === 'Caroline'); });
    }
    saveNotes(notes);
    render(document.getElementById('nu-notes-widget'));
  }

  // Auto-inject widget
  window.addEventListener('DOMContentLoaded', function() {
    var target = document.querySelector('footer') || document.body;
    var div = document.createElement('div');
    div.id = 'nu-notes-widget';
    div.style.maxWidth = '1200px';
    div.style.margin = '0 auto';
    div.style.padding = '0 24px 40px';
    target.parentNode.insertBefore(div, target);
    render(div);
  });

  window.NUNotesWidget = { add: addNote, del: delNote };
})();
