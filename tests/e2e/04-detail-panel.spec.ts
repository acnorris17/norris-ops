import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.3 — Detail panel
// Spec targets: click ▼ → 2-col panel expands, 16 mirrored copy buttons (currently
// 13 per audit §D.3 — Phase 3 adds 3), View Full History modal via /api/audit-log,
// Esc closes, 2-col on wide / 1-col on narrow.

test.describe("§D.3 detail panel", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const expandBtn = page.locator(".expand-trigger").first();
    await expect(expandBtn).toBeVisible();
  });
});
