import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-customer-details-dialog',
	templateUrl: './customer-details-dialog.component.html',
	styleUrls: ['./customer-details-dialog.component.scss']
})
export class CustomerDetailsDialogComponent implements OnInit {

	customer: Customer;

	constructor(public dialogRef: MatDialogRef<CustomerDetailsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
	}

}
