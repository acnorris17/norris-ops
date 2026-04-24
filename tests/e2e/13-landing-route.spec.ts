import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.11 — Landing route
// Spec: 192.168.1.184:8765/ → /shipments.html (redirect or default-page change).
// norrisops.com/ unchanged (portal dashboard).

test.describe("§D.11 landing route", () => {
  test.skip("placeholder — Phase 3 implements redirect", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/shipments\.html$/);
  });
});
