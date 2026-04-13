# CLAUDE.md — Norris Utilities ops portal project rules

Project-level instructions for agents editing `~/norris-ops/`. These extend the
top-level `~/CLAUDE.md` with repo-specific constraints.

## Duplicate-file guard for `/internal/`

Before creating any new file in `internal/`, check `~/norris-ops/internal/` for
any existing `.html` file with 80% or greater name similarity using difflib
`SequenceMatcher.ratio()` (case-insensitive basename comparison). If a match
exists, update that file instead of creating a new one.

The `.git/hooks/pre-commit` hook enforces this automatically — commits that
add a new `internal/*.html` with ≥0.80 similarity to an existing file are
rejected with a pointer to the closest existing match.

Rationale: without this guard, each autonomous task run tends to create a
near-duplicate action-item page (e.g., `action-follow-up-inventory-po.html`,
`action-followup-po-inventory-waiting.html`, `action-po-inventory-followup.html`
— all for the same "follow up on PO inventory" task), and the `internal/`
directory accumulates churn that has to be manually consolidated.
