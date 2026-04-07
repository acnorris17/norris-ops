# Norris Utilities Document Management

## How to Add a Document

1. Place the file in the correct folder:
   - `guides/` — Operating guides, SOPs, how-tos
   - `templates/` — Email templates, form templates
   - `reports/` — Financial reports, expense reports
   - `specs/` — Product specifications, data sheets

2. Name the file: `YYYY-MM-DD_Document_Name.pdf` (or .html)
   - Example: `2026-04-07_FlexPro_Armor_Spec_Sheet.pdf`

3. Add an entry to `manifest.json` with:
   - `title` — Display name
   - `category` — guides, templates, reports, or specs
   - `filename` — The file name
   - `path` — URL path from site root
   - `date` — YYYY-MM-DD
   - `access` — "team" (visible to CB) or "aaron-only"
   - `description` — One-line summary

4. The Docs tab on the portal will auto-read manifest.json.

## Access Control

- `"access": "team"` — Visible to everyone (Aaron + CB)
- `"access": "aaron-only"` — Hidden when CB is logged in
