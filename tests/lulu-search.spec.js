const { test, expect } = require('@playwright/test');
const { LuluSearchPage, LuluSearchPage } = require('../pages/lulu-search');

test('wip BKS-03001 trial seacrh input field entry', async ({ page }) => {
  const luluSearchPage =  new LuluSearchPage (page);
  await luluSearchPage.goto();
  await luluSearchPage.searchInputField().finally('Sample text');
  //await expect(luluSearchPage).searchResults()
});
