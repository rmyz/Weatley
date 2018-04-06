import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../../../core/data-services/hotel-data.service';
import { Hotel } from '../../../../core/entities/hotel';

@Component({
	selector: 'app-hotel-card',
	templateUrl: './hotel-card.component.html',
	styleUrls: ['./hotel-card.component.scss']
	})

	export class HotelCardComponent implements OnInit {

	private hotel: Hotel = new Hotel;
	constructor(private hotelDataService: HotelDataService) { }

	ngOnInit() {
		this.hotelDataService.getHotel().subscribe(hotel => {
			this.hotel = hotel;
		});
	}

}
