import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "order-list", loadChildren: "./order-list/order-list.module#OrderListModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "OrderList",
	moduleId: module.id,
	templateUrl: "./order-list.component.html"
})
export class OrderListComponent implements OnInit {
	constructor() {
		/* ***********************************************************
		* Use the constructor to inject app services that you need in this component.
		*************************************************************/
	}

	ngOnInit(): void {
		/* ***********************************************************
		* Use the "ngOnInit" handler to initialize data for this component.
		*************************************************************/
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
