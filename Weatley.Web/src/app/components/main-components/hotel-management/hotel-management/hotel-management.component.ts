import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../../../core/data-services/hotel-data.service';
import { MatTabLink } from '@angular/material/tabs';
import { RoutingEnum } from '../../../../core/enums/routing-enum';

@Component({
	selector: 'app-hotel-management',
	templateUrl: './hotel-management.component.html',
	styleUrls: ['./hotel-management.component.scss'],
	providers: [HotelDataService]
})
export class HotelManagementComponent implements OnInit {

	navLinks = [
		{ label: 'Info', path: RoutingEnum.HOTEL_MANAGEMENT_HOTEL },
		{ label: 'Rooms', path: RoutingEnum.HOTEL_MANAGEMENT_ROOMS },
		{ label: 'Products', path:  RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS },
		{ label: 'Internals', path:  RoutingEnum.HOTEL_MANAGEMENT_INTERNAL }
	];

	constructor(private hotelDataSerice: HotelDataService) { }

	ngOnInit() {
		this.hotelDataSerice.getHotel().subscribe(hotel => {
			console.log(hotel);
		});
	}

}
