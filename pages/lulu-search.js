//lulu search page
const { expect } = require('@playwright/test');

exports.LuluSearchPage = class LuluSearchPage {

    constructor(page) {
        this.page = page;
        this.searchInputField = page.getByTestId('Header-seacrh-input');
    }

    async goto() {
        await this.page.goto('https://www.lulu.com/search?page=1&q=&pageSize=10&adult_audience_rating=00'); //I'd try use env variable from config file (ie. 'portal_home_page')
    }

    async searchInputField() {
        await this.searchInputField.click();
    }
}