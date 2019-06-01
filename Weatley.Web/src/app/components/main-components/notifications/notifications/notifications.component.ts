import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersDataService } from '../../../../core/data-services/orders-data.service';
import { Order } from '../../../../core/entities/order';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from '../../../../core/entities/report';
import { DenyOrderComponent } from '../../../../widgets/deny-order/deny-order.component';
import { DetailsOrderDialogComponent } from '../../../../widgets/details-order-dialog/details-order-dialog.component';
import { ReportDataService } from '../../../../core/data-services/reports-data.service';
import { FilterOrder } from '../../../../core/filterEntities/filterOrders';
import { FilterReport } from '../../../../core/filterEntities/filterReport';
import { IsLoggedService } from '../../../../core/services/isLogged.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [OrdersDataService, ReportDataService],
})
export class NotificationsComponent implements OnInit {
  displayedColumns = ['name', 'surname', 'finalPrice', 'date', 'status', 'function'];
  displayedColumnsReport = ['name', 'surname', 'description', 'date', 'status'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginatorReport: MatPaginator;
  @ViewChild(MatSort, { static: false }) sortReport: MatSort;
  dataSourceReport: MatTableDataSource<FilterReport>;
  dataSource: MatTableDataSource<FilterOrder>;

  newOrders: Order[] = [];
  olderOrders: FilterOrder[] = [];

  newReports: Report[] = [];

  isLoading = true;

  constructor(
    private ordersDataService: OrdersDataService,
    private reportDataService: ReportDataService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private updateReportTable: IsLoggedService,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ordersDataService.getOrders().subscribe((orders) => {
      orders.forEach((order) => {
        if (order.status === 'pending') {
          this.newOrders.push(order);
        } else {
          this.olderOrders.push(
            new FilterOrder({
              id: order.id,
              finalPrice: order.finalPrice,
              name: order.customer.name,
              surname: order.customer.surname,
              status: order.status,
              orderDate: order.orderDate,
              order: order,
            }),
          );
        }
      });
      this.dataSource = new MatTableDataSource<FilterOrder>(this.olderOrders);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      this.isLoading = false;
    });

    this.reportDataService.getReports().subscribe((reports) => {
      reports.forEach((report) => {
        if (report.status === 'pending') {
          this.newReports.push(report);
        }
      });
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
    this.ordersDataService.updateOrder(order).subscribe(
      () => {
        this.snackBar.open('Order accepted succesfully', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
        this.addOrderToTableOrder(order);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  addOrderToTableOrder(order) {
    this.dataSource.data.push(
      new FilterOrder({
        id: order.id,
        finalPrice: order.finalPrice,
        name: order.customer.name,
        surname: order.customer.surname,
        status: order.status,
        orderDate: order.orderDate,
        order: order,
      }),
    );
    this.dataSource = new MatTableDataSource<FilterOrder>(this.dataSource.data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  denyOrder(order: Order, i: number) {
    order.status = 'denied';

    const dialogRef = this.dialog.open(DenyOrderComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.newOrders.splice(i, 1);
      order.statusComment = result;

      this.ordersDataService.updateOrder(order).subscribe(
        () => {
          this.snackBar.open('Order denied succesfully', 'Dismiss', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
          });
          this.addOrderToTableOrder(order);
        },
        (err) => {
          console.log(err);
        },
      );
    });
  }

  dismissReport(report: Report, i: number) {
    report.status = 'seen';
    this.newReports.splice(i, 1);

    this.reportDataService.updateReport(report).subscribe(
      () => {
        this.snackBar.open('Report checked succesfully', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
        });
        this.updateReportTable.sendMessage(true);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  goToDetailsDialog(order) {
    const dialogRef = this.dialog.open(DetailsOrderDialogComponent, {
      width: '500px',
      panelClass: 'details-order-dialog',
      data: { order: order.order },
    });
  }
}
