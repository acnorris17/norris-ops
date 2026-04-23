/* Customer registry client — Phase A scope.
   Mirrors lib/registry_loader.py match logic:
     exact canonical (100), exact alias (99), poc.name (99),
     normalized exact (97), else (null, 0).
   Fuzzy match + mutations are Phase B. */

(function () {
  "use strict";

  const REGISTRY_URL = "/data/customer_registry.json";

  const state = {
    loaded: false,
    loading: null,
    entries: [],
    byIdMap: Object.create(null),
    canonicalMap: Object.create(null),
    aliasMap: Object.create(null),
    error: null,
  };

  function normalize(s) {
    if (!s) return "";
    return s
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function indexEntries(entries) {
    state.entries = entries;
    state.byIdMap = Object.create(null);
    state.canonicalMap = Object.create(null);
    state.aliasMap = Object.create(null);

    for (const e of entries) state.byIdMap[e.id] = e;

    for (const e of entries) {
      const canonLower = (e.canonical_name || "").toLowerCase();
      if (canonLower) state.canonicalMap[canonLower] = e.id;
    }

    for (const e of entries) {
      const aliases = e.aliases || [];
      for (const a of aliases) {
        const k = (a || "").toLowerCase();
        if (!k || k in state.canonicalMap) continue;
        state.aliasMap[k] = e.id;
      }
      const pocName = e.poc && e.poc.name;
      if (pocName) {
        const pk = pocName.toLowerCase();
        if (!(pk in state.canonicalMap) && !(pk in state.aliasMap)) {
          state.aliasMap[pk] = e.id;
        }
      }
    }
  }

  function load() {
    if (state.loaded) return Promise.resolve(state.entries);
    if (state.loading) return state.loading;
    state.loading = fetch(REGISTRY_URL, { cache: "no-cache" })
      .then((r) => {
        if (!r.ok) throw new Error(`registry ${r.status}`);
        return r.json();
      })
      .then((data) => {
        indexEntries(data);
        state.loaded = true;
        return data;
      })
      .catch((e) => {
        state.error = e;
        console.warn("[registry] load failed — matcher returns null:", e.message);
        indexEntries([]);
        state.loaded = true;
        return [];
      });
    return state.loading;
  }

  function match(raw) {
    if (!state.loaded) return { entry: null, confidence: 0 };
    if (!raw) return { entry: null, confidence: 0 };
    const key = raw.toLowerCase().trim();
    if (!key) return { entry: null, confidence: 0 };

    if (key in state.canonicalMap) {
      return { entry: state.byIdMap[state.canonicalMap[key]], confidence: 100 };
    }
    if (key in state.aliasMap) {
      return { entry: state.byIdMap[state.aliasMap[key]], confidence: 99 };
    }

    const normKey = normalize(raw);
    if (!normKey) return { entry: null, confidence: 0 };

    for (const canon in state.canonicalMap) {
      if (normalize(canon) === normKey) {
        return {
          entry: state.byIdMap[state.canonicalMap[canon]],
          confidence: 97,
        };
      }
    }
    for (const alias in state.aliasMap) {
      if (normalize(alias) === normKey) {
        return {
          entry: state.byIdMap[state.aliasMap[alias]],
          confidence: 97,
        };
      }
    }
    return { entry: null, confidence: 0 };
  }

  function byId(entryId) {
    return state.byIdMap[entryId] || null;
  }

  function billTo(entryId) {
    const entry = byId(entryId);
    if (!entry) return null;
    const poc = entry.poc || {};
    return {
      company: entry.company_root || null,
      canonical_name: entry.canonical_name || null,
      ordered_by: poc.name || null,
      email: poc.email || null,
      phone: poc.phone || null,
      mobile: poc.mobile || null,
      payment: entry.payment || {},
    };
  }

  window.NU = window.NU || {};
  window.NU.registry = {
    load,
    match,
    byId,
    billTo,
    get entries() { return state.entries; },
    get loaded() { return state.loaded; },
    get error() { return state.error; },
  };

  // Auto-load on script include (page fetches registry immediately).
  load();
})();
