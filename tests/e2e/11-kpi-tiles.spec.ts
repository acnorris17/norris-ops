import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.9 — 4 KPI tiles + time-window toggle
// Spec targets: 4 tiles rendered live from /api/kpi-data?window=<Today|Week|Month|Quarter|YTD>
// (Month is default), tile click filters table, delta vs prior period rendered.
// Today's pulse strip (Open SDs / Ready / Blocked / Unbilled) gets upgraded.

test.describe("§D.9 KPI tiles", () => {
  test("placeholder — Phase 3 wires /api/kpi-data", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const pulseStrip = page.locator("#invoicing-pulse");
    await expect(pulseStrip).toBeVisible();
  });
});
