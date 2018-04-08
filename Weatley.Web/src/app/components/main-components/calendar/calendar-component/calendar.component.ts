import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../../core/entities/booking';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import {
	startOfDay,
	endOfDay,
	subDays,
	addDays,
	endOfMonth,
	isSameDay,
	isSameMonth,
	addHours
} from 'date-fns';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	providers: [BookingDataService]
})
export class CalendarComponent implements OnInit {

	colors: any = {
		default: {
			primary: '#ad2121',
			secondary: '#FAE3E3'
		},
	};

	view = 'week';
	viewDate: Date = new Date();
	events: CalendarEvent[] = [];

	refresh: Subject<any> = new Subject();
	activeDayIsOpen = false;

	constructor(private bookingDataService: BookingDataService) { }

	ngOnInit() {
		this.bookingDataService.getBookings().subscribe(bookings => {
			for (const booking of bookings) {
				const entryEvent: CalendarEvent = {
					start: new Date(booking.startingDate),
					color: this.colors.default,
					title: booking.customer.name + ' ' + booking.customer.surname + ' Checking in at ' + this.getTime(new Date(booking.startingDate))
				};

				const leaveEvent: CalendarEvent = {
					start: new Date(booking.endDate),
					color: this.colors.default,
					title: booking.customer.name + ' ' + booking.customer.surname + ' Checking Out at ' + this.getTime(new Date(booking.endDate))
				};
				this.events.push(entryEvent);
				this.events.push(leaveEvent);
			}
			this.refresh.next();
		});
	}

	dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
		if (isSameMonth(date, this.viewDate)) {
			if (
				(isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
				events.length === 0
			) {
				this.activeDayIsOpen = false;
			} else {
				this.activeDayIsOpen = true;
				this.viewDate = date;
			}
		}
	}

	getTime(date: Date) {

		const h = date.getHours();
		const m = date.getMinutes();

		return h + ':' + m;
	}
}
