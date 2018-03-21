import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';
import { BookingDataService } from '../data-services/bookings-data.service';

@Injectable()
export class AccountingDataService {
	constructor(private bookingDataService: BookingDataService) {}

	getAccounting(): Accounting[] {
		return  [
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 2, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(2), orders: null}),
		new Accounting ({ id: 3, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(3), orders: null}),
		new Accounting ({ id: 4, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(4), orders: null}),
		new Accounting ({ id: 5, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(5), orders: null}),
		new Accounting ({ id: 6, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(6), orders: null}),
		new Accounting ({ id: 7, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(7), orders: null}),
		new Accounting ({ id: 1, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(1), orders: null}),
		new Accounting ({ id: 2, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(2), orders: null}),
		new Accounting ({ id: 3, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(3), orders: null}),
		new Accounting ({ id: 4, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(4), orders: null}),
		new Accounting ({ id: 5, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(5), orders: null}),
		new Accounting ({ id: 6, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(6), orders: null}),
		new Accounting ({ id: 7, price: 500.24, date: '5/15/2018', paymentType: 'Efectiu', booking: this.bookingDataService.getBooking(7), orders: null})
	];
	}
	getAccountingById(id: string): Accounting {
		const accountings = this.getAccounting();
		return accountings.find(accounting => accounting.id === id);
	}
}
