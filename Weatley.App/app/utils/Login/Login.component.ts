import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "Login", loadChildren: "./Login/Login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "Login",
	styleUrls: ["Login.scss"],
	moduleId: module.id,
	templateUrl: "./Login.component.html"
})
export class LoginComponent implements OnInit {
	email: string;
	password: string;

	constructor(
		private page: Page,
		private routerExtensions: RouterExtensions) {

	}

	ngOnInit(): void {
		this.page.actionBarHidden = true;
	}

	onLoginWithSocialProviderButtonTap(): void {
		/* ***********************************************************
		* For log in with social provider you can add your custom logic or
		* use NativeScript plugin for log in with Facebook
		* http://market.nativescript.org/plugins/nativescript-facebook
		*************************************************************/
	}

	onSigninButtonTap(): void {
		const email = this.email;
		const password = this.password;

	}

	onForgotPasswordTap(): void {
		/* ***********************************************************
		* Call your Forgot Password logic here.
		*************************************************************/
	}
}
