const { test, expect } = require('@playwright/test');
const { DonorsPage } = require('../pages/donors.page');
const { skipAd } = require('../helper/AdBlocker')

let donorsPage;
const paymentLink = 'https://www.paypal.com/'

test.describe('Registration', async ()=>{
    test.beforeEach(async ({page}) => {
        donorsPage = new DonorsPage(page);
        await donorsPage.openMainPage();
    });
    test('Download release', async({page})=>{
        await donorsPage.clickContributionBtn();
        await donorsPage.clickDonorsPageLink();
        await skipAd(page);
        await donorsPage.clickDonateBtn(); 
        expect(page.url().includes(paymentLink)).toBeTruthy();
})
});