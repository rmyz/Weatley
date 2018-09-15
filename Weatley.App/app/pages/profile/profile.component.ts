import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { TNSFontIconService } from "nativescript-ngx-fonticon";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getString } from "tns-core-modules/application-settings/application-settings";
import { CustomerDataService } from "~/core/data-services/customer-data.service";

import { HotelDataService } from "~/core/data-services/hotel-data.service";
import { Booking } from "~/core/entities/booking";
import { Customer } from "~/core/entities/customer";
import { Hotel } from "~/core/entities/hotel";
import { Order } from "~/core/entities/order";
import { BookingsDataService } from "~/core/data-services/booking-data.service";

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
	styleUrls: ["profile.scss"],
	providers:
	[
		HotelDataService,
		BookingsDataService
	]
})
export class ProfileComponent implements OnInit {

	hotel: Hotel;

	fullName: string;

	orders: Array<Order>;
	totalProducts = 0;
	totalOrderPrice = 0;

	booking: Booking;
	totalBookedRooms = 0;

	totalPrice = 0;

	constructor(
		private customerDataService: CustomerDataService,
		private hotelDataService: HotelDataService,
		private bookingDataService: BookingsDataService,
		private tnsFontIconService: TNSFontIconService) {
	}

	ngOnInit(): void {
		this.customerDataService.getCustomerById(getString("customer_id")).subscribe((customer) => {
			this.fullName = customer.name + " " + customer.surname;
			this.orders = customer.orders;

			for (const order of this.orders) {
				for (const product of order.productsOrdered) {
					this.totalProducts = this.totalProducts + 1;
				}
				this.totalOrderPrice = this.totalOrderPrice + order.finalPrice;
			}
			this.totalPrice = this.totalPrice + this.totalOrderPrice;

			// this.booking = customer.bookings
			// 		.find((booking) => booking.endDate > new Date());
			const bookingid = customer.bookings[0].id;

			this.bookingDataService.getBooking(bookingid).subscribe((booking) => {
				this.booking = booking;

				this.booking.rooms = "";
				for (const room of booking.bookedRooms) {
					this.booking.rooms = this.booking.rooms + " " + room.room.roomNumber;
					this.totalBookedRooms = this.totalBookedRooms + 1;
				}
				console.log(this.booking.rooms);
				this.totalPrice = this.totalPrice + booking.price;
			}, (error) => {
				console.log(error);
			});

		}, (error) => {
			console.log(error);
		});

		this.hotelDataService.getHotel().subscribe((hotel) => {
			this.hotel = hotel[0];
		}, (error) => {
			console.log(error);
		});
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
