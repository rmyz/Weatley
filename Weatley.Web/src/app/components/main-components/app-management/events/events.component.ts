import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../../../../core/entities/activity';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { ActivitiesDataService } from '../../../../core/data-services/activities-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss'],
	providers: [ActivitiesDataService]
})
export class EventsComponent implements OnInit {

	displayedColumns = ['name', 'description', 'startHour', 'endHour', 'function'];

	dataSource: MatTableDataSource<Activity>;
	dataAccount: Activity[] = [];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private activitiesDataService: ActivitiesDataService,
				private router: Router,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.activitiesDataService.getActivity().subscribe(activities => {
			this.dataAccount = activities;
			this.dataSource = new MatTableDataSource<Activity>(this.dataAccount);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.APP_MANAGEMENT + '/' + RoutingEnum.APP_MANAGEMENT_EVENTS_EDIT + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.APP_MANAGEMENT + '/' + RoutingEnum.APP_MANAGEMENT_EVENTS_CREATE]);
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
			this.activitiesDataService.deleteActivity(item.id).subscribe(res => {
				this.snackBar.open('Activity deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Activity>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

}
