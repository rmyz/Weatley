import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { Order } from '../../../../core/entities/order';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { Report } from '../../../../core/entities/report';
import { HubConnection } from '@aspnet/signalr';
import { DenyOrderComponent } from '../../../../widgets/deny-order/deny-order.component';
import { DetailsOrderDialogComponent } from '../../../../widgets/details-order-dialog/details-order-dialog.component';
import { ReportDataService } from '../../../../core/data-services/report-data.service';
import { SignalRService } from '../../../../core/services/signalR.service';
@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss'],
	providers: [OrdersDataService, ReportDataService]
})
export class NotificationsComponent implements OnInit {

displayedColumns = ['customer', 'finalPrice', 'status', 'function'];
displayedColumnsReport = ['customer', 'description', 'status'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginatorReport: MatPaginator;
	@ViewChild(MatSort) sortReport: MatSort;
	dataSourceReport: MatTableDataSource<Report>;
	dataSource: MatTableDataSource<Order>;

	newOrders: Order[] = [];
	olderOrders: Order[] = [];

	newReports: Report[] = [];
	olderReports: Report[] = [];


	isLoading = true;

	constructor(private ordersDataService: OrdersDataService,
				private reportDataService: ReportDataService,
				private dialog: MatDialog,
				public snackBar: MatSnackBar,
				private signalRService: SignalRService) { }

	ngOnInit() {
		this.loadData();
		this.signalRService.getMessage().subscribe(message => {

			if (message[0].description) {
				// Report
				console.log(message);
			} else {
				// Order
			}
		});
	}

	loadData() {
		this.ordersDataService.getOrders().subscribe(orders => {
			orders.forEach(order => {
				if (order.status === 'pending') {
					this.newOrders.push(order);
				} else {
					this.olderOrders.push(order);
				}
			});
			this.dataSource = new MatTableDataSource<Order>(this.olderOrders);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});

		this.reportDataService.getReports().subscribe(reports => {
			reports.forEach(report => {
				if (report.status === 'pending') {
					this.newReports.push(report);
				} else {
					this.olderReports.push(report);
				}
			});

			this.dataSourceReport = new MatTableDataSource<Report>(this.olderReports);
			this.dataSourceReport.sort = this.sortReport;
			this.dataSourceReport.paginator = this.paginatorReport;

			this.isLoading = false;
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
			this.addOrderToTableOrder(order);
			// Send notification to the phone
		}, err => {
			console.log(err);
		});
	}

	addOrderToTableOrder(order) {
		this.dataSource.data.push(order);
		this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	addReportToTableReport(report) {
		this.dataSourceReport.data.push(report);
		this.dataSourceReport = new MatTableDataSource<Report>(this.dataSourceReport.data);
		this.dataSourceReport.sort = this.sortReport;
		this.dataSourceReport.paginator = this.paginatorReport;
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
				this.addOrderToTableOrder(order);
				// Send notification to the phone
			}, err => {
				console.log(err);
			});

		});
	}

	dismissReport(report: Report, i: number) {
		report.status = 'seen';
		this.newReports.splice(i, 1);

		this.reportDataService.updateReport(report).subscribe(updated => {
			this.snackBar.open('Report checked succesfully', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
			this.addReportToTableReport(report);
			// Send notification to the phone
		}, err => {
			console.log(err);
		});

	}

	goToDetailsDialog(order: Order) {
		const dialogRef = this.dialog.open(DetailsOrderDialogComponent, {
			width: '500px',
			panelClass: 'details-order-dialog',
			data: { order: order}
		});
	}

}
