import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../../../core/data-services/hotel-data.service';
import { Hotel } from '../../../../core/entities/hotel';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { Router } from '@angular/router';

@Component({
	selector: 'app-hotel-card',
	templateUrl: './hotel-card.component.html',
	styleUrls: ['./hotel-card.component.scss'],
	providers: [HotelDataService]
	})

	export class HotelCardComponent implements OnInit {

	private hotel: Hotel = new Hotel;

	isLoading = true;

	constructor(private hotelDataService: HotelDataService,
				private router: Router) { }

	ngOnInit() {
		this.hotelDataService.getHotels().subscribe(hotel => {
			this.hotel = hotel[0];
			this.isLoading = false;
		});
	}

	goToEdit() {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_HOTEL_EDIT + '/' + this.hotel.id]);
	}

}
