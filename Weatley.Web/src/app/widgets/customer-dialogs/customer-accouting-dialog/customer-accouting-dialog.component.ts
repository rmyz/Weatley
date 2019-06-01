import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Customer } from '../../../core/entities/customer';
import { Accounting } from '../../../core/entities/accounting';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';


@Component({
	selector: 'app-customer-accouting-dialog',
	templateUrl: './customer-accouting-dialog.component.html',
	styleUrls: ['./customer-accouting-dialog.component.scss']
})
export class CustomerAccoutingDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['finalPrice', 'date', 'paymentType'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Accounting>;
	dataAccounting: Accounting[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerAccoutingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataAccounting = this.customer.accountings;
		this.dataSource = new MatTableDataSource<Accounting>(this.dataAccounting);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Accounting>(this.dataAccounting);
	}
}
