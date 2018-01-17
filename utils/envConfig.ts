const { BeforeAll, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
export class EnvProperties {
    public static baseURL:any = "https://auth.dev.nice-incontact.com";

    public static getEnvUrl(){
        return this.baseURL;
    }

}