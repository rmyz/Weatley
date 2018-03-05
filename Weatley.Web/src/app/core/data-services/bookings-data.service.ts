import { Injectable } from '@angular/core';
import { Booking } from '../entities/booking';

@Injectable()
export class BookingDataService {
    constructor() {}

    getBookings(): Booking[] {
        return  [new Booking ({ id: 1, startDate: '5/5/2018', endDate: '5/15/2018', comment: 'Im going to arrive at 7pm.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 2, startDate: '4/7/2018', endDate: '4/22/2018', comment: 'Im going to arrive at 8pm.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 3, startDate: '6/6/2018', endDate: '6/9/2018', comment: 'Im going to arrive at 10am.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 4, startDate: '1/6/2018', endDate: '1/11/2018', comment: 'Im going to arrive at 1pm.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 5, startDate: '5/24/2018', endDate: '5/30/2018', comment: 'Im going to arrive at 5am.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 6, startDate: '9/16/2018', endDate: '9/27/2018', comment: 'Im going to arrive at 2pm.', price: 149.30, room: null, customer: null}),
        new Booking ({ id: 7, startDate: '8/5/2018', endDate: '8/17/2018', comment: 'Im going to arrive at 1am.', price: 149.30, room: null, customer: null})];
    }

    getBooking(id: number) {
        const bookings = this.getBookings();

        return bookings.find( b => id === b.id);
    }
}
