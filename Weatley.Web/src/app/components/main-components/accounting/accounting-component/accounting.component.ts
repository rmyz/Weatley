import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Accounting } from '../../../../core/entities/accounting';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../../../../core/entities/customer';
import { FilterAccounting } from '../../../../core/filterEntities/filterAccounting';

@Component({
	selector: 'app-accounting',
	templateUrl: './accounting.component.html',
	styleUrls: ['./accounting.component.scss'],
	providers: [AccountingDataService]
})
export class AccountingComponent implements OnInit {

	displayedColumns = ['name', 'surname', 'date', 'finalPrice', 'paid', 'paymentType', 'function'];

	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;

	dataSource: MatTableDataSource<FilterAccounting>;
	dataAccount: FilterAccounting[] = [];
	isLoading = true;

	constructor(private accountingDataService: AccountingDataService,
		private router: Router,
		private dialog: MatDialog,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.accountingDataService.getAccounting().subscribe(accountings => {
			accountings.forEach(accounting => {
				this.dataAccount.push(new FilterAccounting({
					id: accounting.id,
					finalPrice: accounting.finalPrice,
					date: accounting.date,
					paymentType: accounting.paymentType,
					name: accounting.customer.name,
					surname: accounting.customer.surname,
					paid: accounting.paid
				}));
			});
			this.dataSource = new MatTableDataSource<FilterAccounting>(this.dataAccount);
			setTimeout(() => {
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			});

			this.isLoading = false;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.ACCOUNTING_EDIT_ROUTE + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.ACCOUNTING_CREATE_ROUTE]);
	}

	onDelete(item) {
		const dialogRef = this.dialog.open(DialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			this.deleteRow(item, result);
		});
	}

	applyFilter(filterValue: string) {

		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}

	deleteRow(item, isDeleteable) {
		if (isDeleteable) {
			const index = this.dataSource.data.findIndex(i =>
				i.id === item.id
			);
			this.accountingDataService.deleteAccounting(item.id).subscribe(res => {
				this.snackBar.open('Accounting deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<FilterAccounting>(this.dataSource.data);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
