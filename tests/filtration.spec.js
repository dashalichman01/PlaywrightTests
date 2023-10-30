const { test, expect } = require('@playwright/test');
const { IssuesPage } = require('../pages/issues.page');
const { skipAd } = require('../helper/AdBlocker');

let issuesPage;
const closedFiltr = 'c';

test.describe('Registration', async ()=>{
    test.beforeEach(async ({page}) => {
        issuesPage = new IssuesPage(page);
        await issuesPage.openMainPage();
    });
    test('Filtration', async({page})=>{
        await issuesPage.clickIssuesBtn();
        await skipAd(page);
        await issuesPage.selectFilterValue(closedFiltr);
        await issuesPage.clickApplyBtn();
        expect(await issuesPage.isFiltrationCorrect()).toEqual(true)

    })
});
