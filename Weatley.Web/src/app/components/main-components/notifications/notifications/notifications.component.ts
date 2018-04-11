import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { Order } from '../../../../core/entities/order';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss'],
	providers: [OrdersDataService]
})
export class NotificationsComponent implements OnInit {

displayedColumns = ['customer', 'finalPrice', 'status', 'function', 'function_edit'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Order>;

	newOrders: Order[] = [];
	olderOrders: Order[] = [];
	constructor(private ordersDataService: OrdersDataService,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.ordersDataService.getOrders().subscribe(orders => {
			orders.forEach(order => {
				if (order.status === 'new') {
					this.newOrders.push(order);
				} else {
					this.olderOrders.push(order);
				}
			});

			this.dataSource = new MatTableDataSource<Order>(this.olderOrders);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	applyFilter(filterValue: string) {

		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	onDelete(item) {
		const dialogRef = this.dialog.open(DialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			this.deleteRow(item, result);
		});
	}

	deleteRow(item, isDeleteable) {
		if (isDeleteable) {
			const index = this.dataSource.data.findIndex(i =>
				i.id === item.id
			);
			this.ordersDataService.deleteOrder(item.id).subscribe(res => {
				this.snackBar.open('Order deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	acceptOrder(order: Order) {
		// Set status to accepted
	}

	denyOrder(order: Order) {
		// Show dialog to send comments and set the status to denied
	}

	goToDetailsDialog(order: Order) {
		// Show dialog with details
	}

}
