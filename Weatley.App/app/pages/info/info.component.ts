import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { HotelDataService } from "~/core/data-services/hotel-data.service";

import { Activity } from "~/core/entities/activity";
import { Hotel } from "~/core/entities/hotel";
import { Service } from "~/core/entities/service";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "info", loadChildren: "./info/info.module#InfoModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
	selector: "Info",
	moduleId: module.id,
	templateUrl: "./info.component.html",
	styleUrls: ["./info.component.scss"],
	providers: [HotelDataService]
})
export class InfoComponent implements OnInit {

	private hotel: Hotel = new Hotel();
	private activities: Array<Activity>;
	private services: Array<Service>;
	constructor(private hotelDataService: HotelDataService) { }

	ngOnInit(): void {
		this.hotelDataService.getHotel().subscribe((hotel) => {
			this.hotel = hotel[0];
			this.activities = hotel[0].activities;
			this.services = hotel[0].services;
		});
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}
}
