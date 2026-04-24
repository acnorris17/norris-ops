import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.2 — Status pill
// Spec targets: 7-state enum (PENDING/PROCESSING/SHIPPED/DELIVERED/INVOICED/REVIEW/BLOCKED),
// click→dropdown, arrow-key nav, INVOICED immutability modal, audit-log tooltip.

test.describe("§D.2 status pill", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const pill = page.locator(".status-pill").first();
    await expect(pill).toBeVisible();
  });
});
