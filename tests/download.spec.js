const { test, expect } = require('@playwright/test');
const { DownloadPage } = require('../pages/download.page');
const { skipAd } = require('../helper/AdBlocker');

let downloadPage;

test.describe('Registration', async ()=>{
    test.beforeEach(async ({page}) => {
        downloadPage = new DownloadPage(page);
        await downloadPage.openMainPage();
    });
    test('Download release', async({page})=>{
        await downloadPage.clickDownloadBtn();
        await skipAd(page);
        await downloadPage.clickOnZipRelease();
        const [download] = await Promise.all([page.waitForEvent('download'), downloadPage.clickOnZipRelease()]);
        await expect(download.suggestedFilename()).toBeTruthy(); 
})
});
