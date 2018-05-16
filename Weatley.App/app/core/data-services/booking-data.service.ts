import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Booking } from "~/core/entities/booking";
import { UserProfile } from "../Auth-services/User.Profile";
import { CommonService } from "../services/common.service";

@Injectable()
export class BookingsDataService {
	constructor(
		private http: HttpClient,
		private authProfile: UserProfile,
		private commonService: CommonService) {}

	getBookings(): Observable<Array<Booking>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Array<Booking>>(url + "Bookings", {headers: options});
	}

	getBooking(id: string): Observable<Booking> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Booking>(url + "Bookings/" + id, {headers: options});
	}
}
