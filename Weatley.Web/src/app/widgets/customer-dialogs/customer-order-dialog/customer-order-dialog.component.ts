import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { Customer } from '../../../core/entities/customer';
import { Order } from '../../../core/entities/order';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';
import { DetailsOrderDialogComponent } from '../../../widgets/details-order-dialog/details-order-dialog.component';
import { DialogComponent } from '../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-customer-order-dialog',
	templateUrl: './customer-order-dialog.component.html',
	styleUrls: ['./customer-order-dialog.component.scss']
})
export class CustomerOrderDialogComponent implements OnInit, AfterViewInit {

	displayedColumns = ['comment', 'finalPrice', 'orderDate'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	customer: Customer = new Customer;
	dataSource: MatTableDataSource<Order>;
	dataOrder: Order[] = [];

	constructor(public dialogRef: MatDialogRef<CustomerOrderDialogComponent>,
		private dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.customer = this.data.customer;
		this.dataOrder = this.customer.orders;
		this.dataSource = new MatTableDataSource<Order>(this.dataOrder);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	ngAfterViewInit() {
		this.dataSource = new MatTableDataSource<Order>(this.dataOrder);
	}

	goToDetailsDialog(order) {
		order.customer = this.customer;
		const dialogRef = this.dialog.open(DetailsOrderDialogComponent, {
			width: '500px',
			panelClass: 'details-order-dialog',
			data: { order: order
			}
		});
	}
}
