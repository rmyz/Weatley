import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { CustomerDataService } from "../../core/data-services/customer-data.service";

import { Customer } from "../../core/entities/customer";

@Component({
	selector: "OrderList",
	moduleId: module.id,
	templateUrl: "./order-list.component.html",
	providers: [CustomerDataService],
	styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
	private customer: Customer = new Customer();
	private customerId = "ed90a54c-d224-49aa-8046-f88ba013f854";

	constructor(private customerDataService: CustomerDataService) { }

	ngOnInit(): void {
		this.customerDataService.getCustomerById(this.customerId).subscribe((customer) => {
			console.log("works");
			this.customer = customer;
		});
	}

	test(order) {
		console.log(order.finalPrice);
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
