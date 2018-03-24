import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Accounting } from '../../../../core/entities/accounting';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
	selector: 'app-accounting',
	templateUrl: './accounting.component.html',
	styleUrls: ['./accounting.component.scss'],
	providers: [AccountingDataService]
})
export class AccountingComponent implements OnInit, AfterViewInit {

	displayedColumns = ['client', 'date', 'price', 'paymentType', 'function'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	dataSource: MatTableDataSource<Accounting>;

	dataAccount: Accounting[] = [];

	constructor(private accountingDataService: AccountingDataService,
		private router: Router,
		private dialog: MatDialog) { }

	ngOnInit() {
		this.dataAccount = this.accountingDataService.getAccounting();
		this.dataSource = new MatTableDataSource<Accounting>(this.dataAccount);
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.ACCOUNTING_EDIT_ROUTE + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.ACCOUNTING_CREATE_ROUTE]);
	}
	onDelete(id) {
		console.log(this.accountingDataService.getAccountingById(id));
		const dialogRef = this.dialog.open(DialogComponent);
		dialogRef.componentInstance.id = id;
		this.dialog.open(DialogComponent);
	}
}

@Component({
	selector: 'app-dialog',
	template: `
	<h1 mat-dialog-title>Confirm</h1>
	<div mat-dialog-content>Do you want delete this order?</div>
	<div mat-dialog-actions>
	  <button mat-button style="color: #fff;background-color: #153961;" (click)="dialogAccept()">Confirm</button>
	  <button mat-button (click)="dialogRef.close(false)">Cancel</button>
	</div>
	`,
})
export class DialogComponent {
	constructor(public dialogRef: MatDialogRef<DialogComponent>,
		private accountingDataService: AccountingDataService) { }

	public id: string;

	dialogAccept() {
	}
}
