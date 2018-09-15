import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hotel } from '../entities/hotel';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) {}

	getHotel(): Observable<Hotel> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.get<Hotel>(url + 'Hotels', {headers: options});
	}
}
