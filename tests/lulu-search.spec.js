const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('portal_home_page');
  });

  