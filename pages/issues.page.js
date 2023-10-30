const { Page } = require('./page');

const issuesBtn = 'a.issues ';
const statusOptions = '#operators_status_id';
const applyBtn = 'a[onclick*="submit()"]';
const statuses = 'td.status';

class IssuesPage extends Page{
    constructor(page){
        super(page);
        this.page = page;
    }

    async getStatusOptions(){
        return await this.getElement(statusOptions);
    }

    async getStatuses(){
        return await this.getElements(statuses);
    }

    async isFiltrationCorrect(){
        const statuses = await this.getStatuses();
        for (const item of statuses) {
            if (await item.textContent() !== "Closed") {
              return false;
            }
          }
          return true;
        }

    async selectFilterValue(val){
        const statusOptionsElement = await this.getStatusOptions();
        await statusOptionsElement.selectOption({ value: val });
    }

    async clickIssuesBtn(){
        await this.clickElement(issuesBtn);
    }

    async clickApplyBtn(){
        await this.clickElement(applyBtn);
    }
}

module.exports = { IssuesPage };