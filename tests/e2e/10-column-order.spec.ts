import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.8 — Column order (15 columns, exact)
// Spec: Invoice Sent | Inv. # | SD | Status | Order Date | Customer | P/N |
//       Description | QTY | Ship To+POC | Tracking # | PO # | CC Fee |
//       Shipping | Notes
// Plus: dead row-selector checkbox REMOVED from DOM.

test.describe("§D.8 column order", () => {
  test("placeholder — Phase 3 enforces 15-col exact order", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    // Placeholder: confirm thead renders something. Phase 3 replaces with strict ordering check.
    const thead = page.locator(".shipments-table thead");
    await expect(thead).toBeVisible();
  });
});
