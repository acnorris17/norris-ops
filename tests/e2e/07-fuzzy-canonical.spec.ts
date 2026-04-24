import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.5 — Fuzzy match + canonical enforce + ⚠ tooltip
// Spec targets: rapidfuzz tiers 95+ auto / 80-95 review / <80 new, ⚠ hover shows
// top 3 candidates via /api/match, canonical regex ^[A-Za-z0-9&\-\.\s]+ - [A-Za-z\s\.]+$,
// registry_remediation.py outputs 25 violations + 4 Brink candidates.

test.describe("§D.5 fuzzy + canonical", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    // Verify registry client loaded
    const registryLoaded = await page.evaluate(
      () => !!(window as any).NU?.registry
    );
    expect(registryLoaded).toBe(true);
  });
});
