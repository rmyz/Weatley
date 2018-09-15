import { Injectable } from '@angular/core';
import { Booking } from '../entities/booking';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookingDataService {

	constructor(private http: HttpClient,
				private commonService: CommonService) {}

	getBookings(): Observable<Array<Booking>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Array<Booking>>(url + 'Bookings', {headers: options});
	}

	getBookingById(id: string): Observable<Booking> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Booking>(url + 'Bookings/' + id, {headers: options});
	}

	createBooking(booking: Booking) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Booking>(url + 'Bookings/', booking, {headers: options});
	}

	updateBooking(booking: Booking): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Booking>(url + 'Bookings/' + booking.id , booking, {headers: options});
	}

	deleteBooking(bookingId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Booking>(url + 'Bookings/' + bookingId, {headers: options});
		}
}
