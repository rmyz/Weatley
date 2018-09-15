import { Component, Inject, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { Page } from "ui/page";
import { UserProfile } from "~/core/Auth-services/User.Profile";
import { UserService } from "~/core/Auth-services/user.service";
import { IsLoggedService } from "~/core/services/isLogged.service";

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
	templateUrl: "./Login.component.html",
})
export class LoginComponent implements OnInit {

	_SnackBar: SnackBar;
	constructor(
		private page: Page,
		private routerExtensions: RouterExtensions,
		private barcodeScanner: BarcodeScanner,
		private userService: UserService,
		private authProfile: UserProfile,
		private isLoggedService: IsLoggedService
	) {
		this._SnackBar = new SnackBar();
	}

	ngOnInit(): void {
		this.page.actionBarHidden = true;

		if (this.userService.isAuthenticated()) {
			this.routerExtensions.navigate(["/info"], {
				transition: {
					name: "fade"
				},
				clearHistory: true
			});

			this.isLoggedService.sendMessage(true);
		}
	}

	onQrScannButtonTap(): void {
		this.barcodeScanner.scan({
			formats: "QR_CODE",
			message: "Use the volume buttons for extra light",
			showFlipCameraButton: true,
			showTorchButton: true
		}).then((result) => {
			this.userService.login(result.text)
			.subscribe((res) => {
				const userProfile = res;

				this.authProfile.setProfile(userProfile, result.text);

				this.showSnackbar("Successfully logged in!");
				this.isLoggedService.sendMessage(true);

				this.routerExtensions.navigate(["/info"], {
					transition: {
						name: "fade"
					},
					clearHistory: true
				});

			}, ((error) => {
				console.error(error);
				this.showSnackbar("Couldn’t sign in, try again later.");
			})
		);
		}, (errorMessage) => {
			console.log("No scan. " + errorMessage);
		});
	}

	navigateHome() {
		this.userService.login("446EDE2E-71E8-4184-BC3A-3F29039A2322")
			.subscribe((res) => {
				const userProfile = res;

				this.authProfile.setProfile(userProfile, "446EDE2E-71E8-4184-BC3A-3F29039A2322");

				this.showSnackbar("Successfully logged in!");
				this.isLoggedService.sendMessage(true);

				this.routerExtensions.navigate(["/info"], {
					transition: {
						name: "fade"
					},
					clearHistory: true
				});

			}, ((error) => {
				console.error(error);
				this.showSnackbar("Couldn’t sign in, try again later.");
			})
		);
	}

	showSnackbar(text: string) {
		const options: SnackBarOptions = {
			actionText: "Dismiss",
			snackText: text,
			hideDelay: 3000,
			textColor: "#ffffff",
			backgroundColor: "#2196F3"
		};

		this._SnackBar.action(options);
	}
}
