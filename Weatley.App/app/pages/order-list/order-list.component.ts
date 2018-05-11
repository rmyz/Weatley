import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { CustomerDataService } from "../../core/data-services/customer-data.service";

import { Customer } from "../../core/entities/customer";

import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { RouterExtensions } from "nativescript-angular/router";
import { getString } from "tns-core-modules/application-settings/application-settings";

@Component({
	selector: "OrderList",
	moduleId: module.id,
	templateUrl: "./order-list.component.html",
	providers: [CustomerDataService],
	styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
	private customer: Customer = new Customer();
	private customerId = getString("customer_id");

	constructor(private customerDataService: CustomerDataService, private tnsFontIconService: TNSFontIconService,
				private routerExtensions: RouterExtensions) { }

	ngOnInit(): void {
		this.customerDataService.getCustomerById(this.customerId).subscribe((customer) => {
			this.customer = customer;
			this.customer.orders.forEach((order) => {
				order.countProducts = 0;
				order.productsOrdered.forEach((product) => {
					order.countProducts += product.quantity;
				});
				order.totalProducts = order.countProducts + " Items";
			});
			this.customer.orders = this.customer.orders.sort((n1,n2) => {
				if (n1.orderDate < n2.orderDate) {
					return 1;
				}
			
				if (n1.orderDate > n2.orderDate) {
					return -1;
				}
			
				return 0;
			});
		});
	}

	goToOrder(order: string) {
		this.routerExtensions.navigate(["/order", order]);
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}

	fabTap(): void {
		this.routerExtensions.navigate(["/order"]);
	}
}
