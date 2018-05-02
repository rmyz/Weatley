import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("FAB", () => require("nativescript-floatingactionbutton").Fab);

import { TNSFontIconService } from "nativescript-ngx-fonticon";

@Component({
	selector: "ns-app",
	templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
	private _selectedPage: string;
	private _sideDrawerTransition: DrawerTransitionBase;

	constructor(private routerExtensions: RouterExtensions, private tnsFontIconService: TNSFontIconService) {
		// Use the component constructor to inject services.
	}

	ngOnInit(): void {
		this._selectedPage = "Home";
		this._sideDrawerTransition = new SlideInOnTopTransition();
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
			}
		});

		this._selectedPage = navItemRoute;
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.closeDrawer();
	}
}
