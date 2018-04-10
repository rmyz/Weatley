import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../../core/entities/booking';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { ActivitiesDataService } from '../../../../core/data-services/activities-data.service';
import { MatDialog } from '@angular/material';
import { EventDialogComponent } from '../../../../widgets/event-dialog/event-dialog.component';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	providers: [
		BookingDataService,
		ActivitiesDataService
	]
})
export class CalendarComponent implements OnInit {

	colors: any = {
		default: {
			primary: '#2962FF',
			secondary: '#BBDEFB'
		},
	};

	view = 'week';
	viewDate: Date = new Date();
	events: CalendarEvent[] = [];

	refresh: Subject<any> = new Subject();
	activeDayIsOpen = false;

	constructor(
		private bookingDataService: BookingDataService,
		private activitiesDataService: ActivitiesDataService,
		private dialog: MatDialog
	) { }

	ngOnInit() {
		this.bookingDataService.getBookings().subscribe(bookings => {
			for (const booking of bookings) {
				const entryEvent: CalendarEvent = {
					start: new Date(booking.startingDate),
					color: this.colors.default,
					title: booking.customer.name + ' ' + booking.customer.surname + ' Checking in',
					meta: booking
				};

				const leaveEvent: CalendarEvent = {
					start: new Date(booking.endDate),
					color: this.colors.default,
					title: booking.customer.name + ' ' + booking.customer.surname + ' Checking Out',
					meta: booking
				};
				this.events.push(entryEvent);
				this.events.push(leaveEvent);
			}
			this.refresh.next();
		});

		this.activitiesDataService.getActivity().subscribe( activities => {
			for (const activity of activities) {
				const event: CalendarEvent = {
					start: new Date(activity.startHour),
					end: new Date(activity.endHour),
					color: this.colors.default,
					title: activity.name,
					meta: activity
				};
				this.events.push(event);
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

	handleEvent(action: string, event: CalendarEvent): void {
		const dialogRef = this.dialog.open(EventDialogComponent, {
			width: '500px',
			data: { event: event }
		});
	}

	getTime(date: Date) {

		const h = date.getHours();
		const m = date.getMinutes();

		return h + ':' + m;
	}
}
