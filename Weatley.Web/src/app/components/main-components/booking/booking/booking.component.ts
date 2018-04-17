import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Booking } from '../../../../core/entities/booking';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';

@Component({
	selector: 'app-booking',
	templateUrl: './booking.component.html',
	styleUrls: ['./booking.component.scss'],
	providers: [BookingDataService]
})
export class BookingComponent implements OnInit {

	displayedColumns = ['customer', 'startingDate', 'endDate', 'comment', 'price', 'rooms', 'function'];

	private temp = '';
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	dataSource: MatTableDataSource<Booking>;
	dataAccount: Booking[] = [];

	isLoading = true;

	constructor(private bookingDataService: BookingDataService,
		private router: Router,
		private dialog: MatDialog,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.bookingDataService.getBookings().subscribe(bookings => {
			this.dataAccount = bookings;
			this.dataAccount.forEach(booking => {
				if (booking.comment === null) {
					booking.comment = '-';
				}
				booking.bookedRooms.forEach(bk => {
					this.temp = this.temp + ' ' + bk.room.roomNumber.toString();
				});
				booking.rooms = this.temp;
				this.temp = '';
			});
			this.dataSource = new MatTableDataSource<Booking>(this.dataAccount);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;

			this.isLoading = false;
		});
	}

	goToEdit(id) {
		this.router.navigate([RoutingEnum.BOOKING_EDIT_ROUTE + '/' + id]);
	}

	goToCreate() {
		this.router.navigate([RoutingEnum.BOOKING_CREATE_ROUTE]);
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
			this.bookingDataService.deleteBooking(item.id).subscribe(res => {
				this.snackBar.open('Booking deleted succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
			}, err => {
				console.log(err);
			});
			this.dataSource.data.splice(index, 1);
		}
		this.dataSource = new MatTableDataSource<Booking>(this.dataSource.data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

}
