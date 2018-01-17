import { browser, protractor } from "protractor";
import { EnvProperties } from '../utils/envConfig';
import { LoginPage } from "../pages/Login.page";

const { Given, When, Then, setDefaultTimeout } = require("cucumber");

const loginPage: LoginPage = new LoginPage();

When(/^I enter username as "(.*?)"$/, async (text) => {
    await loginPage.userName.sendKeys(text);
});

When(/^I enter password as "(.*?)"$/, async (text) => {
    await loginPage.password.sendKeys(text);
});

When(/^I click on sign in button$/, async () => {
    await loginPage.signIn.click();
});

Given(/^I am on Login Page$/, async () => {
    await browser.get(EnvProperties.getEnvUrl());
});

Then('I get User Manager Page', async () => {
    setDefaultTimeout(50000);
    let url:any = browser.getCurrentUrl();
    await url;       
});
