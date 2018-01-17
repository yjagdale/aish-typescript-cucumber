import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../utils/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://auth.dev.nice-incontact.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },
    allScriptsTimeout: 60000,
    getPageTimeout: 30000,
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../utils/*.ts"],
        strict: true,
        tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
