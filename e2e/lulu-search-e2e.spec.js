const { test, expect } = require('@playwright/test');
const { LuluSearchPage } = require ('../pages/lulu-search.js')

test('has title in other file', async ({ page }) => {
    await page.goto('https://www.lulu.com/search?page=1&q=new&pageSize=10&adult_audience_rating=00');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Shop/);
  });

test('check page object have title', async ({ page }) => {
    const luluSearch = new LuluSearchPage(page);
    await luluSearch.goto();
    await expect(page).toHaveTitle(/Shop/);

})
