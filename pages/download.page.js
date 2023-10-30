const { Page } = require('./page');

const downloadBtn = '.download ';
const zipRelease = '//a[text()="redmine-4.2.11.zip"]'

class DownloadPage extends Page{
    constructor(page){
        super(page);
        this.page = page;
    }

    async clickOnZipRelease(){
        await this.clickElement(zipRelease);
    }

    async clickDownloadBtn(){
        await this.clickElement(downloadBtn);
    }
}

module.exports = { DownloadPage };