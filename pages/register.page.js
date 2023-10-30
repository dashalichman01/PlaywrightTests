const { Page } = require('./page');

const signUpBtn = '.register';
const userNameField = '#user_login';
const passwordField = '#user_password';
const confirmPasswordField = '#user_password_confirmation';
const firstNameField = '#user_firstname';
const lastNameField = '#user_lastname';
const emailField = '#user_mail';
const sendBtn = '//input[@type="submit"]';
const successMsg = '#flash_notice'
const errorMsg = '#errorExplanation'

class RegisterPage extends Page{
    constructor(page){
        super(page);
        this.page = page;
    }

    async getUserNameField(){
        return await this.getElement(userNameField);
    }

    async getPasswordField(){
        return await this.getElement(passwordField);
    }

    async getConfirmPasswordField(){
        return await this.getElement(confirmPasswordField);
    }

    async getFirstNameField(){
        return await this.getElement(firstNameField);
    }

    async getLastNameField(){
        return await this.getElement(lastNameField);
    }

    async getEmailField(){
        return await this.getElement(emailField);
    }

    async getSuccessMsg(){
        return await this.getElement(successMsg);
    }

    async getErrorMsg(){
        return await this.getElement(errorMsg);
    }

    async setValuesForRegistration(userName, password, confirmPassword, firstName, lastName, email){
        await (await this.getUserNameField()).fill(userName);
        await (await this.getPasswordField()).fill(password);
        await (await this.getConfirmPasswordField()).fill(confirmPassword);
        await (await this.getFirstNameField()).fill(firstName);
        await (await this.getLastNameField()).fill(lastName);
        await (await this.getEmailField()).fill(email);
   }

    async clickSignUpBtn(){
        await this.clickElement(signUpBtn);
    }

    async clickSendBtn(){
        await this.clickElement(sendBtn);
    }
}

module.exports = { RegisterPage };