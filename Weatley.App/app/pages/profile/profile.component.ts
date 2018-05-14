import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getString } from "tns-core-modules/application-settings/application-settings";
import { CustomerDataService } from "~/core/data-services/customer-data.service";

import { Booking } from "~/core/entities/booking";
import { Customer } from "~/core/entities/customer";
import { Order } from "~/core/entities/order";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "profile", loadChildren: "./profile/profile.module#ProfileModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "Profile",
	moduleId: module.id,
	templateUrl: "./profile.component.html",
	styleUrls: ["profile.scss"]
})
export class ProfileComponent implements OnInit {

	fullName: string;
	booking: Booking;
	orders: Array<Order>;
	totalPrice: number;
	constructor(
		private customerDataService: CustomerDataService,
		private tnsFontIconService: TNSFontIconService) {
	}

	ngOnInit(): void {
		this.customerDataService.getCustomerById(getString("customer_id")).subscribe((customer) => {
			this.fullName = customer.name + " " + customer.surname;
			this.orders = customer.orders;

			for (const order of this.orders) {
				order.countProducts = 0;
				for (const product of order.productsOrdered) {
					order.countProducts += product.quantity;
				}
				order.totalProducts = "You ordered " + order.countProducts + " Items";
			}
			this.findBooking(customer);

		}, (error) => {
			console.log(error);
		});
	}

	findBooking(customer: Customer) {
		// this.booking = customer.bookings
		// 		.find((booking) => booking.endDate > new Date());
		this.booking = customer.bookings[1];
		for (const room of this.booking.bookedRooms) {
			this.booking.rooms = this.booking.rooms + " " + room.room;
		}
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
