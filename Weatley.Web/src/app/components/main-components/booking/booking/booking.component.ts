import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Booking } from '../../../../core/entities/booking';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { Router } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { FilterBooking } from '../../../../core/filterEntities/filterBooking';

@Component({
	selector: 'app-booking',
	templateUrl: './booking.component.html',
	styleUrls: ['./booking.component.scss'],
	providers: [BookingDataService]
})
export class BookingComponent implements OnInit {

	displayedColumns = ['name', 'surname', 'startingDate', 'endDate', 'comment', 'price', 'rooms', 'function'];

	private temp = '';
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort: MatSort;

	dataSource: MatTableDataSource<FilterBooking>;
	dataAccount: FilterBooking[] = [];

	isLoading = true;

	constructor(private bookingDataService: BookingDataService,
		private router: Router,
		private dialog: MatDialog,
		public snackBar: MatSnackBar) { }

	ngOnInit() {
		this.bookingDataService.getBookings().subscribe(bookings => {
			bookings.forEach(booking => {
				if (booking.comment === null || booking.comment === '') {
					booking.comment = '-';
				}
				booking.bookedRooms.forEach(bk => {
					this.temp = this.temp + ' ' + bk.room.roomNumber.toString();
				});
				booking.rooms = this.temp;
				this.temp = '';

				this.dataAccount.push( new FilterBooking({
					id: booking.id,
					startingDate: booking.startingDate,
					endDate: booking.endDate,
					comment: booking.comment,
					price: booking.price,
					name: booking.customer.name,
					surname: booking.customer.surname,
					rooms: booking.rooms
				}));

			});

			this.dataSource = new MatTableDataSource<FilterBooking>(this.dataAccount);
			setTimeout(() => {
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			});

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
		this.dataSource = new MatTableDataSource<FilterBooking>(this.dataSource.data);
		setTimeout(() => {
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

}
