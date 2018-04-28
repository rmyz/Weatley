import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { CustomerDataService } from "../../core/data-services/customer-data.service";

import { Customer } from "../../core/entities/customer";

@Component({
	selector: "OrderList",
	moduleId: module.id,
	templateUrl: "./order-list.component.html",
	providers: [CustomerDataService]
})
export class OrderListComponent implements OnInit {
	private customer: Customer;

	constructor(private customerDataService: CustomerDataService) { }

	ngOnInit(): void {
		this.customerDataService.getCustomers().subscribe((customer) => {
			console.log("works");
		});
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
