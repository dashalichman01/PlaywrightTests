const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/register.page');
const generator = require('../helper/generator');

let registerPage;

const userName = generator.randomUserName();
const password = generator.randomPassword();
const wrongPassword = password + "1";
const firstName = generator.randomFirstName();
const lastName = generator.randomLastName();
const email = generator.randomEmail();

test.describe('Registration', async ()=>{
    test.beforeEach(async ({page}) => {
        registerPage = new RegisterPage(page);
        await registerPage.openMainPage();
    });

    test('Registration with valid data', async() => {
        await registerPage.clickSignUpBtn();
        await registerPage.setValuesForRegistration(userName, password, password, firstName, lastName,  email);
        await registerPage.clickSendBtn();
        await expect(await registerPage.getSuccessMsg()).toContainText("Account was successfully created");
    });

    test('Registration with invalid data', async() =>{
        await registerPage.clickSignUpBtn();
        await registerPage.setValuesForRegistration(userName, password, wrongPassword, firstName, lastName,  email);
        await registerPage.clickSendBtn();
        await expect(await registerPage.getErrorMsg()).toContainText("Password doesn't match confirmation");
    })
})