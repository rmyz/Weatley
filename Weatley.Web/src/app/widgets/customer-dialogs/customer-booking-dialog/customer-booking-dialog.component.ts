import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { Booking } from '../../../core/entities/booking';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-customer-booking-dialog',
	templateUrl: './customer-booking-dialog.component.html',
	styleUrls: ['./customer-booking-dialog.component.scss']
})
export class CustomerBookingDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['startingDate', 'endDate', 'price', 'comment'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Booking>;
	dataBooking: Booking[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerBookingDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataBooking = this.customer.bookings;
		this.dataSource = new MatTableDataSource<Booking>(this.dataBooking);
		this.dataSource.paginator = this.paginator;
		console.log(this.dataSource);
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Booking>(this.dataBooking);
	}
}
