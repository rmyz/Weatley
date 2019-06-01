import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { Report } from '../../../core/entities/report';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-customer-report-dialog',
	templateUrl: './customer-report-dialog.component.html',
	styleUrls: ['./customer-report-dialog.component.scss']
})
export class CustomerReportDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['description', 'date', 'status'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Report>;
	dataReport: Report[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerReportDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataReport = this.customer.reports;
		this.dataSource = new MatTableDataSource<Report>(this.dataReport);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Report>(this.dataReport);
	}
}
