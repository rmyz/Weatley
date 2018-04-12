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
	customerID: string;

	isBooking = false;
	isActivity = false;
	isQr = false;

	daysDiff: number;
	isCheckIn: boolean;
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

			const diff = Math.abs(new Date(this.booking.startingDate).getTime() - new Date(this.booking.endDate).getTime());
			this.daysDiff = Math.ceil(diff / (1000 * 3600 * 24));

			if (this.data.event.title.split(' ').splice(-1)[0] === 'In') {
				this.isCheckIn = true;
			} else {
				this.isCheckIn = false;
			}
			this.customerID = this.booking.customer.id;
		}
	}

	dialogClose() {
		this.dialogRef.close();
	}

	generateQr() {
		this.isQr = true;
	}
}
