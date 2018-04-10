import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Booking } from '../../core/entities/booking';

@Component({
	selector: 'app-event-dialog',
	templateUrl: './event-dialog.component.html',
	styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

	rawData: Booking;

	constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.rawData = <Booking> this.data.event.meta;
		console.log(this.rawData);

		if (this.rawData instanceof Booking) {
			console.log('lmao');
		}
	}

}
