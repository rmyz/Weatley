import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { Booking } from '../../../../core/entities/booking';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingEnum } from '../../../../core/enums/routing-enum';
import { DialogComponent } from '../../../../widgets/dialog/dialog.component';
import { Customer } from '../../../../core/entities/customer';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { Room } from '../../../../core/entities/room';
import { RoomDataService } from '../../../../core/data-services/room-data.service';
import { BookedRoom } from '../../../../core/entities/bookedRoom';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-booking-form',
	templateUrl: './booking-form.component.html',
	styleUrls: ['./booking-form.component.scss'],
	providers: [BookingDataService, CustomerDataService, RoomDataService]
})
export class BookingFormComponent implements OnInit {

	private bookingForm = new FormGroup ({
		customer: new FormControl(),
		price: new FormControl(),
		startingDate: new FormControl(),
		endDate: new FormControl(),
		comments: new FormControl(),
		Room: new FormControl()
	});

	private bookingById: Booking = new Booking({
		customer: new Customer
	});

	private id: string;
	private customers: Customer[] = [];
	private rooms: Room[] = [];
	private roomsBooking: Room[] = [];

	constructor(private bookingDataService: BookingDataService,
				private route: ActivatedRoute,
				private customerDataService: CustomerDataService,
				private fb: FormBuilder,
				private snackBar: MatSnackBar,
				private roomDataService: RoomDataService) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});

			this.customerDataService.getCustomers().subscribe(customers => {
				this.customers = customers;
			});

			this.roomDataService.getRooms().subscribe(rooms => {
				this.rooms = rooms;
			});
	}

	private loadData(id: string) {
		if (id) {
			this.bookingDataService.getBookingById(id).subscribe(accounting => {
				this.bookingById = accounting;
				this.bookingById.startingDate = new Date(this.bookingById.startingDate);
				this.bookingById.endDate = new Date(this.bookingById.endDate);

				this.bookingById.bookedRooms.forEach(rooms => {
					this.roomsBooking.push(rooms.room);
				});

				this.bookingForm = this.fb.group({
					customer: [this.bookingById.customer, Validators.required],
					price: [this.bookingById.price, Validators.required],
					startingDate: [this.bookingById.startingDate, Validators.required],
					endDate: [this.bookingById.endDate, Validators.required],
					comments: [this.bookingById.comment],
					Room: [this.roomsBooking, Validators.required]
				});
			});
		} else {
			this.bookingForm = this.fb.group({
				customer: [null, Validators.required],
				price: ['', Validators.required],
				startingDate: [null, Validators.required],
				endDate: [null, Validators.required],
				comments: [''],
				Room: [null, Validators.required]
			});
		}
	}

	dateChange() {
		this.bookingById.startingDate.setDate(this.bookingById.startingDate.getDate() + 1);
		this.bookingById.endDate.setDate(this.bookingById.endDate.getDate() + 1);
	}

	dateGoBack() {
		this.bookingById.startingDate.setDate(this.bookingById.startingDate.getDate() - 1);
		this.bookingById.endDate.setDate(this.bookingById.endDate.getDate() - 1);
	}

	submitBooking() {
		console.log(this.bookingForm.value);
		if (this.bookingForm.valid) {
			this.bookingById = new Booking({
				startingDate: this.bookingForm.value.startingDate,
				endDate: this.bookingForm.value.endDate,
				comment: this.bookingForm.value.comments,
				price: this.bookingForm.value.price,
				customer: this.bookingForm.value.customer
			});
			this.bookingById.bookedRooms = [];

			this.bookingForm.value.Room.forEach(room => {
				this.bookingById.bookedRooms.push(new BookedRoom({
					id: uuidv4(),
					room: room,
					roomId: room.id,
					booking: this.bookingById,
					bookingId: this.bookingById.id
				}));
			});

			this.dateChange();
			if (this.id) {
				this.bookingById.id = this.id;
				console.log(this.bookingById.bookedRooms);
				this.bookingDataService.updateBooking(this.bookingById).subscribe(res => {
					this.snackBar.open('Booking updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.bookingById.id = uuidv4();
				this.bookingDataService.createBooking(this.bookingById).subscribe(res => {
					this.snackBar.open('Booking created succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			}
			this.dateGoBack();
		} else {
			this.snackBar.open('The inputs are not valid', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
		}
	}

	cancel() {
		history.go(-1);
	}

	compareWithFunc(a, b) {

		return a.roomNumber === b.roomNumber;
	}

}
