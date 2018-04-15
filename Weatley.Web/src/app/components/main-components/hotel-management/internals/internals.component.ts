import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { UsersDataService } from '../../../../core/data-services/users-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { IUser } from '../../../../core/models/user-model';

@Component({
	selector: 'app-internals',
	templateUrl: './internals.component.html',
	styleUrls: ['./internals.component.scss'],
	providers: [UsersDataService]

})
export class InternalsComponent implements OnInit {

	displayedColumns = ['name', 'surname', 'userType', 'email', 'function'];

	dataSource: MatTableDataSource<IUser>;
	dataAccount: IUser[] = [];

	private temp = '';
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private usersDataService: UsersDataService,
		private router: Router,
		private dialog: MatDialog,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.usersDataService.getUsers().subscribe(user => {
			this.dataAccount = user;
			this.dataSource = new MatTableDataSource<IUser>(this.dataAccount);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_INTERNAL_EDIT + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_INTERNAL_CREATE]);
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
			this.usersDataService.deleteUser(item.id).subscribe(res => {
				this.snackBar.open('Room deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<IUser>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
}
