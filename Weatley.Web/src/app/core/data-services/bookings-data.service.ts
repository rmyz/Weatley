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

		return this.http
					.get('http://localhost:5000/api/Bookings', options)
					.map((res: Response) => res.json());
	}

	getBookingById(id: string): Observable<Booking> {
		const options = this.commonService.checkAuth();

		return this.http
					.get('http://localhost:5000/api/Bookings/' + id, options)
					.map((res: Response) => res.json());
	}

	createBooking(booking: Booking) {
		const options = this.commonService.checkAuth();

		return this.http
			.post('http://localhost:5000/api/Bookings/', booking, options)
			.map((res: Response) => {
				return new Booking(res.json());
			});
	}

	updateBooking(booking: Booking): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Bookings/' + booking.id , booking, options)
			.map((res: Response) => {
				return new Booking(res.json());
		});
	}

	deleteBooking(bookingId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Bookings/' + bookingId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
