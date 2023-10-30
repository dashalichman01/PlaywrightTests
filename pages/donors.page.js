const { Page } = require('./page');

const contributingBtn = 'li a[href="#Contributing-and-helping-out"]';
const donorsPageLink = 'a[href="/projects/redmine/wiki/Donors"]' ;
const donateBtn = 'input[name="submit"]';

class DonorsPage extends Page{
    constructor(page){
        super(page);
        this.page = page;
    }

    async clickContributionBtn(){
        await this.clickElement(contributingBtn);
    }

    async clickDonorsPageLink(){
        await this.clickElement(donorsPageLink);
    }

    async clickDonateBtn(){
        await this.clickElement(donateBtn);
    }
    
}

module.exports = { DonorsPage };