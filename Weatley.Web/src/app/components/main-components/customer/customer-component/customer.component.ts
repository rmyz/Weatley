import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../../../../core/entities/customer';

import {
	CustomerDetailsDialogComponent
} from '../../../../widgets/customer-dialogs/customer-details-dialog/customer-details-dialog.component';
import {
	CustomerBookingDialogComponent
} from '../../../../widgets/customer-dialogs/customer-booking-dialog/customer-booking-dialog.component';
import {
	CustomerAccoutingDialogComponent
} from '../../../../widgets/customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import {
	CustomerOrderDialogComponent
} from '../../../../widgets/customer-dialogs/customer-order-dialog/customer-order-dialog.component';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.scss'],
	providers: [CustomerDataService]
})
export class CustomerComponent implements OnInit {

	displayedColumns = ['name', 'surname', 'dni', 'function', 'function_edit'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	customer: object;

	dataSource: MatTableDataSource<Customer>;
	dataCustomer: Customer[] = [];

	constructor(private customerDataService: CustomerDataService,
		private router: Router,
		private dialog: MatDialog,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.customerDataService.getCustomers().subscribe(customers => {
			this.dataCustomer = customers;
			this.dataSource = new MatTableDataSource<Customer>(this.dataCustomer);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
			console.log(this.dataSource);
		});
	}

	applyFilter(filterValue: string) {

		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.CUSTOMER_EDIT_ROUTE + '/' + id]);
	}
	goToCreate() {
		this.router.navigate([RoutingEnum.CUSTOMER_CREATE_ROUTE]);
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
			this.customerDataService.deleteGoal(item.id).subscribe(res => {
				this.snackBar.open('Customer deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Customer>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
	goToDetailsDialog(customer) {
		const dialogRef = this.dialog.open(CustomerDetailsDialogComponent, {
			width: '500px',
			data: { customer: customer }
		});
	}
	goToBookingDialog(customer) {
		const dialogRef = this.dialog.open(CustomerBookingDialogComponent, {
			width: '1000px',
			data: { customer: customer}
		});
	}
	goToAccountingDialog(customer) {
		const dialogRef = this.dialog.open(CustomerAccoutingDialogComponent, {
			width: '750px',
			data: { customer: customer}
		});
	}
	goToOrderDialog(customer) {
		const dialogRef = this.dialog.open(CustomerOrderDialogComponent, {
			width: '1000px',
			data: { customer: customer}
		});
	}
}
