import { Injectable } from '@angular/core';
import { Booking } from '../entities/booking';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingDataService {
	constructor(private http: Http) {}

	getBookings(): Observable<Booking[]> {
		return this.http
					.get('http://localhost:5000/api/Bookings')
					.map((res: Response) => res.json());
	}

	getBookingById(id: string): Observable<Booking> {
		return this.http
					.get('http://localhost:5000/api/Bookings/' + id)
					.map((res: Response) => res.json());
	}

	createBooking(booking: Booking) {
		return this.http
			.post('http://localhost:5000/api/Bookings/', booking)
			.map((res: Response) => {
				return new Booking(res.json());
			});
	}

	updateBooking(booking: Booking): Observable<any> {
		return this.http
			.put('http://localhost:5000/api/Bookings/' + booking.id , booking)
			.map((res: Response) => {
				return new Booking(res.json());
		});
	}

	deleteBooking(bookingId: string): Observable<any> {
		return this.http
			.delete('http://localhost:5000/api/Bookings/' + bookingId)
			.map((res: Response) => {
				return res.json();
			});
		}
}
