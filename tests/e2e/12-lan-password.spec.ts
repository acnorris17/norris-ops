import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.10 — LAN password bypass
// Spec: detect host=192.168.1.184|localhost|127.0.0.1 → skip portal password.
// norrisops.com unchanged (CF Access + portal password tier filter both intact).

test.describe("§D.10 LAN password bypass", () => {
  test("LAN: shipments.html loads without login-overlay", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const loginOverlay = page.locator(".login-overlay:not(.hidden)");
    await expect(loginOverlay).toHaveCount(0);
  });
});
