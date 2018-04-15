import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Hotel } from '../entities/hotel';
import { CommonService } from '../services/common.service';

@Injectable()
export class HotelDataService {
	constructor(private http: Http,
		private commonService: CommonService) {}

	getHotel(): Observable<Hotel> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get(url + 'Hotels/782A6441-7A9D-4C1C-9B9F-27E13ABD7CD1', options)
			.map((res: Response) => res.json());
	}

	updateHotel(hotel: Hotel): Observable<any> {
		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Hotels/' + hotel.id , hotel, options)
			.map((res: Response) => {
				return new Hotel(res.json());
		});
	}
}
