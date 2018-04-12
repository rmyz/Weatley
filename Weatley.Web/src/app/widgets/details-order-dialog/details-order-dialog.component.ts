import { Component, OnInit, Inject } from '@angular/core';
import { Order } from '../../core/entities/order';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-details-order-dialog',
	templateUrl: './details-order-dialog.component.html',
	styleUrls: ['./details-order-dialog.component.scss']
})
export class DetailsOrderDialogComponent implements OnInit {

	order: Order;
	constructor(public dialogRef: MatDialogRef<DetailsOrderDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.order = this.data.order;
	}

}
