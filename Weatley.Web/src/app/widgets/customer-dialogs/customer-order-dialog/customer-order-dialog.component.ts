import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { Order } from '../../../core/entities/order';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-customer-order-dialog',
	templateUrl: './customer-order-dialog.component.html',
	styleUrls: ['./customer-order-dialog.component.scss']
})
export class CustomerOrderDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['comment', 'finalPrice', 'orderDate', 'deliveryDate'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Order>;
	dataOrder: Order[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerOrderDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataOrder = this.customer.orders;
		this.dataSource = new MatTableDataSource<Order>(this.dataOrder);
		this.dataSource.paginator = this.paginator;
		console.log(this.dataOrder);
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Order>(this.dataOrder);
	}
}
