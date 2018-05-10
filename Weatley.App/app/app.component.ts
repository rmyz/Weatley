import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("FAB", () => require("nativescript-floatingactionbutton").Fab);

import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { getString } from "tns-core-modules/application-settings/application-settings";
import { UserService } from "~/core/Auth-services/user.service";
import { CustomerDataService } from "~/core/data-services/customer-data.service";
import { Customer } from "~/core/entities/customer";
import { IsLoggedService } from "~/core/services/isLogged.service";

@Component({
	selector: "ns-app",
	templateUrl: "app.component.html",
	providers: [IsLoggedService]
})
export class AppComponent implements OnInit {

	customer: Customer;
	isAuthenticated = false;

	private _selectedPage: string;
	private _sideDrawerTransition: DrawerTransitionBase;

	constructor(
		private routerExtensions: RouterExtensions,
		private tnsFontIconService: TNSFontIconService,
		private authService: UserService,
		private isLoggedService: IsLoggedService,
		private customerDataService: CustomerDataService) {
		// Use the component constructor to inject services.
	}

	ngOnInit(): void {
		this.isAuthenticated = this.authService.isAuthenticated();
		this._selectedPage = "info";
		this._sideDrawerTransition = new SlideInOnTopTransition();
		this.isLoggedService.getMessage().subscribe((message) => this.loadUserData());
	}

	get sideDrawerTransition(): DrawerTransitionBase {
		return this._sideDrawerTransition;
	}

	isPageSelected(pageTitle: string): boolean {
		return pageTitle === this._selectedPage;
	}

	onNavItemTap(navItemRoute: string): void {
		this.routerExtensions.navigate([navItemRoute], {
			transition: {
				name: "fade"
			},
			clearHistory: true
		});

		this._selectedPage = navItemRoute;
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.closeDrawer();
	}

	loadUserData() {
		console.log("it works!");
		this.customerDataService.getCustomerById(getString("customer_id"))
			.subscribe((customer) => {
				this.customer = customer;

				console.log(customer);
			});
	}
}
