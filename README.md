# norris-ops

Ops portal for Norris Utilities®. Live at **ops.norrisutilities.com** (GitHub Pages from `main`).

## Setup after clone

Git does not ship `.git/hooks/` with the repo, so newly cloned copies need to
install the pre-commit hook once:

```bash
ln -sf ../../scripts/hooks/pre-commit .git/hooks/pre-commit
```

That's it — the hook file itself (`scripts/hooks/pre-commit`) is tracked in
this repo and the symlink points `.git/hooks/pre-commit` at it.

## What the pre-commit hook enforces

- **Brand — blocks commit:** any file containing `FlexPro Armor Guard` (the
  correct product name is `FlexPro Armor®`).
- **Dead deal — warns:** active `Gridco` / `Shon Cunningham` references
  (skipped if the line is marked `DEAD`, `CLOSED`, or `archived`).
- **Duplicate guard — blocks commit:** any new `internal/*.html` file whose
  basename has ≥ 0.80 `difflib.SequenceMatcher` similarity to an existing
  `internal/*.html` filename. Update the existing file instead of creating a
  near-duplicate. See `CLAUDE.md` for the rationale.
