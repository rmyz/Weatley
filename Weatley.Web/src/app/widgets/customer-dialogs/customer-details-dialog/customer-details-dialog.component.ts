import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../../../core/entities/customer';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
