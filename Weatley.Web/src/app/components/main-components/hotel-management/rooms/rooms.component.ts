import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { RoomDataService } from '../../../../core/data-services/room-data.service';
import { Room } from '../../../../core/entities/room';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-rooms',
	templateUrl: './rooms.component.html',
	styleUrls: ['./rooms.component.scss'],
	providers: [ RoomDataService ]
})
export class RoomsComponent implements OnInit {

	displayedColumns = ['roomType', 'roomNumber', 'floorNumber', 'price', 'function'];

	dataSource: MatTableDataSource<Room>;
	dataAccount: Room[] = [];

	private temp = '';
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	isLoading = true;

	constructor(private roomDataService: RoomDataService,
				private router: Router,
				private dialog: MatDialog,
				public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.roomDataService.getRooms().subscribe(rooms => {
			this.dataAccount = rooms;
			this.dataSource = new MatTableDataSource<Room>(this.dataAccount);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;

			this.isLoading = false;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_ROOMS_EDIT + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_ROOMS_CREATE]);
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
			this.roomDataService.deleteRoom(item.id).subscribe(res => {
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
		this.dataSource = new MatTableDataSource<Room>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

}
