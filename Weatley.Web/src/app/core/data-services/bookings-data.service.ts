import { Injectable } from '@angular/core';
import { Booking } from '../entities/booking';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonService } from '../services/common.service';


@Injectable()
export class BookingDataService {

	constructor(private http: Http,
				private commonService: CommonService) {}

	getBookings(): Observable<Booking[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Bookings', options)
					.map((res: Response) => res.json());
	}

	getBookingById(id: string): Observable<Booking> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Bookings/' + id, options)
					.map((res: Response) => res.json());
	}

	createBooking(booking: Booking) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Bookings/', booking, options)
			.map((res: Response) => {
				return new Booking(res.json());
			});
	}

	updateBooking(booking: Booking): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Bookings/' + booking.id , booking, options)
			.map((res: Response) => {
				return new Booking(res.json());
		});
	}

	deleteBooking(bookingId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Bookings/' + bookingId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
