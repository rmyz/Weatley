import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../../../../core/entities/service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { ServicesDataService } from '../../../../core/data-services/services-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
	providers: [ServicesDataService]
})
export class ServicesComponent implements OnInit {

	displayedColumns = ['name', 'description', 'function'];

	dataSource: MatTableDataSource<Service>;
	dataAccount: Service[] = [];

	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;

	isLoading = true;

	constructor(private servicesDataService: ServicesDataService,
				private router: Router,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.servicesDataService.getServices().subscribe(services => {
			this.dataAccount = services;
			this.dataSource = new MatTableDataSource<Service>(this.dataAccount);
			setTimeout(() => {
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			});

			this.isLoading = false;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.APP_MANAGEMENT + '/' + RoutingEnum.APP_MANAGEMENT_SERVICES_EDIT + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.APP_MANAGEMENT + '/' + RoutingEnum.APP_MANAGEMENT_SERVICES_CREATE]);
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
			this.servicesDataService.deleteService(item.id).subscribe(res => {
				this.snackBar.open('Service deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Service>(this.dataSource.data);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

}
