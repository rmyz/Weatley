import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Booking } from '../../core/entities/booking';
import { Activity } from '../../core/entities/activity';

@Component({
	selector: 'app-event-dialog',
	templateUrl: './event-dialog.component.html',
	styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

	booking: Booking;
	activity: Activity;

	isBooking = false;
	isActivity = false;

	constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		const rawData = this.data.event.meta;

		if (rawData.description) {
			this.activity = rawData;
			this.isActivity = true;
		} else {
			this.booking = rawData;
			this.isBooking = true;
		}
	}
}
