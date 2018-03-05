import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';
import { BookingDataService } from '../data-services/bookings-data.service';

@Injectable()
export class AccountingDataService {
	constructor(private bookingDataService: BookingDataService) {}

	getBookings(): Accounting[] {
		return  [new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null})];
	}
}
