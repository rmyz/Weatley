import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-deny-order',
	templateUrl: './deny-order.component.html',
	styleUrls: ['./deny-order.component.scss']
})
export class DenyOrderComponent implements OnInit {
	reason = '';
	denyReasons = [
		'There is no stock',
		'The kitchen is closed',
		'Service not available',
		'Other',
	];

	comment: string;

	constructor(public dialogRef: MatDialogRef<DenyOrderComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
	}

	onNoClick() {
		this.dialogRef.close('No comments');
	}

	onClick() {
		if (this.reason === 'Other') {
			this.dialogRef.close(this.comment);
		} else {
			this.dialogRef.close(this.reason);
		}
	}

}
