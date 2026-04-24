import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.4 — Invoice archive flow
// Spec targets: Invoice Sent checkbox → confetti + toast + slide-out + mega check,
// /api/invoice-sent backend, reverse-archive confirm dialog,
// archive page upgrade (group-by-month, sortable by invoice#, CSV export).

test.describe("§D.4 invoice archive", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const invoiceSentBox = page.locator(".invoice-sent-box").first();
    await expect(invoiceSentBox).toBeVisible();
  });
});
