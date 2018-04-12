import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { Order } from '../../../../core/entities/order';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { Report } from '../../../../core/entities/report';
import { HubConnection } from '@aspnet/signalr-client';
import { DenyOrderComponent } from '../../../../widgets/deny-order/deny-order.component';
@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss'],
	providers: [OrdersDataService]
})
export class NotificationsComponent implements OnInit {

displayedColumns = ['customer', 'finalPrice', 'status', 'function'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	dataSource: MatTableDataSource<Order>;
	private hubConnection: HubConnection;

	newOrders: Order[] = [];
	olderOrders: Order[] = [];
	constructor(private ordersDataService: OrdersDataService,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.loadData();
		this.hubConnection = new HubConnection('http://localhost:5000/chat');
		this.hubConnection
		.start()
		.then(() => {
			console.log('Connection started!');
		})
		.catch(err => console.log('Error while establishing connection :('));

		this.hubConnection.on('sendToAllReport', (report: Report) => {
			alert('test');
		});

	}

	loadData() {
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

	acceptOrder(order: Order, i: number) {
		// Set status to accepted
		order.status = 'accepted';
		this.newOrders.splice(i, 1);
		this.ordersDataService.updateOrder(order).subscribe(updated => {
			this.snackBar.open('Order accepted succesfully', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
			this.addOrderToTable(order);
			// Send notification to the phone
		}, err => {
			console.log(err);
		});
	}

	addOrderToTable(order) {
		this.dataSource.data.push(order);
		this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
	denyOrder(order: Order, i: number) {
		order.status = 'denied';

		const dialogRef = this.dialog.open(DenyOrderComponent, {
			width: '300px',
		});
		dialogRef.afterClosed().subscribe(result => {
			this.newOrders.splice(i, 1);
			order.statusComment = result;

			this.ordersDataService.updateOrder(order).subscribe(updated => {
				this.snackBar.open('Order denied succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
				this.addOrderToTable(order);
				// Send notification to the phone
			}, err => {
				console.log(err);
			});

		});
	}

	goToDetailsDialog(order: Order) {
		// Show dialog with details
	}

	sendMessage() {
		this.hubConnection
			.invoke('sendToAllReport', new Report)
			.catch(err => console.error(err));
		}

}
