import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.7 — Payment badge + CC fee
// Spec targets: 6 badge types (Net30 gray / CC blue / CC-on-file 💳 cyan / ACH green /
// On Receipt orange / FREE red), CC fee = round((subtotal+shipping) * 0.04, 2),
// LineTec branches (Thornhill=Net30, Guthrie=CC, LeCompte=Net30),
// notes 💳 idempotent auto-append.

test.describe("§D.7 payment badge", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    // payment-badge.js runs post-render; first row should exist to attach to
    const firstRow = page.locator("tr.ship-row").first();
    await expect(firstRow).toBeVisible();
  });
});
