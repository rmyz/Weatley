import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { Accounting } from '../../../core/entities/accounting';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';


@Component({
	selector: 'app-customer-accouting-dialog',
	templateUrl: './customer-accouting-dialog.component.html',
	styleUrls: ['./customer-accouting-dialog.component.scss']
})
export class CustomerAccoutingDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['finalPrice', 'date', 'paymentType'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Accounting>;
	dataAccounting: Accounting[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerAccoutingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataAccounting = this.customer.accountings;
		this.dataSource = new MatTableDataSource<Accounting>(this.dataAccounting);
		this.dataSource.paginator = this.paginator;
		console.log(this.customer);
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Accounting>(this.dataAccounting);
	}
}
