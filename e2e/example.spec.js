// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.lulu.com/search?page=1&q=new&pageSize=10&adult_audience_rating=00');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shop/);
});

test('enter any data to search field', async ({ page }) => {
  await page.goto('https://www.lulu.com/search?page=1&q=new&pageSize=10&adult_audience_rating=00');

  // Click the get started link.
  await page.getByTestId('Header-search-input').fill('anyText').press('Enter');


  // Expects the URL to contain intro.
  await expect(page).toHaveClass('field__input');
});
