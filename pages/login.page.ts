import {$} from "protractor";

export class LoginPage {
    public userName: any;
    public password: any;
    public signIn: any;
    public forgotPassword: any;


    constructor() {
        this.userName = $("#emailField");
        this.password = $("#passField");
        this.signIn = $("#loginBtn");
        this.forgotPassword = $("#forgot-password-link")
    }
}
