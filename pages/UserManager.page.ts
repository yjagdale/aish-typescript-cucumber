import { $ } from "protractor";

export class UserManagerPage {
    public newUser: any;

    constructor() {
        this.newUser = $('#newUser');
    }
}