import { test, expect } from "@playwright/test";

// Phase B V2 UI §D.4 — Notes editor
// Spec targets: click cell → textarea, save on Cmd+Enter / blur / 3s debounce,
// Esc cancels without write, 2000 char max, /api/notes-update backend.

test.describe("§D.4 notes editor", () => {
  test("placeholder — Phase 3 fills in", async ({ page }) => {
    await page.goto("/shipments.html");
    await page.waitForSelector('[data-shipments-ready="1"]', { timeout: 10000 });
    const notesCell = page.locator(".notes-cell").first();
    await expect(notesCell).toBeVisible();
  });
});
