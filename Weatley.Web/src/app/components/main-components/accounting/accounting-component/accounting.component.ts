import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Accounting } from '../../../../core/entities/accounting';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-accounting',
	templateUrl: './accounting.component.html',
	styleUrls: ['./accounting.component.scss'],
	providers: [AccountingDataService]
})
export class AccountingComponent implements OnInit {

	displayedColumns = ['customer', 'date', 'price', 'paymentType', 'function'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	dataSource: MatTableDataSource<Accounting>;
	dataAccount: Accounting[] = [];

	constructor(private accountingDataService: AccountingDataService,
		private router: Router,
		private dialog: MatDialog) { }

	ngOnInit() {
		this.accountingDataService.getAccounting().subscribe(accountings => {
			this.dataAccount = accountings;
			this.dataSource = new MatTableDataSource<Accounting>(this.dataAccount);
			this.dataSource.paginator = this.paginator;
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

	deleteRow(item, isDeleteable) {
		if (isDeleteable) {
			const index = this.dataSource.data.findIndex(i =>
				i.id === item.id
			);
			this.accountingDataService.deleteGoal(item.id).subscribe(res => {}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Accounting>(this.dataSource.data);
	}
}
