//lulu search page
const { expect } = require('@playwright/test');

exports.LuluSearchPage = class LuluSearchPage {

    constructor(page) {
        this.page = page;
        this.searchInputField = page.getByTestId('header-search-input');
        //this.searchResult = page.getByTestId('product-title');
        this.searchResult = page.locator('.ProductItem_productItem____ATu');
        this.noSearchResults = page.getByRole('heading');
        this.languageChanger = page.getByTestId('search-facet-language');
        
    }

    async goto() {
        await this.page.goto('https://www.lulu.com/search?page=1&q=&pageSize=10&adult_audience_rating=00'); //I'd try use env variable from config file (ie. 'portal_home_page')
    }

    async enterValueToSearchInputField(searchValue) {
        await this.searchInputField.click();
        await this.searchInputField.fill(searchValue);
        await this.searchInputField.press('Enter');
    }

    async searchResultIsNotNull() {
        var count = await this.searchResult.count();
        expect(count).toBeGreaterThanOrEqual(1);
        //var result = await this.searchResult 
        //expect(result).toBeVisible();
    }

    async searchResultIsNull() {
        var count = await this.searchResult.count();
        expect(count).toBeLessThan(1);
    }

    async noReasultsMessage() {
        await this.noSearchResults().toHaveText('No search results')
    }

    async changeLanguage(chosenLanguage){
        await this.languageChanger.getByText('Show all').click();
        await this.languageChanger.getByText(chosenLanguage).click();
    }

    
}



// search results is not null
    /*async searchResultIsNotNull() {
        const count = await this.searchResult().count();
        console.log(count);
    }*/

// languange change

// categories display
