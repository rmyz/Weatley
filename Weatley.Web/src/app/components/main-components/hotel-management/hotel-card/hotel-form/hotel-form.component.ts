import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HotelDataService } from '../../../../../core/data-services/hotel-data.service';
import { Hotel } from '../../../../../core/entities/hotel';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-hotel-form',
	templateUrl: './hotel-form.component.html',
	styleUrls: ['./hotel-form.component.scss'],
	providers: [HotelDataService]
})
export class HotelFormComponent implements OnInit {

	private hotelForm = new FormGroup ({
		name: new FormControl(),
		description: new FormControl(),
		address: new FormControl(),
		email: new FormControl(),
		phoneNumber: new FormControl(),
		website: new FormControl()
	});

	private hotelById: Hotel = new Hotel({
	});

	private id: string;


	constructor(private hotelDataService: HotelDataService,
				private fb: FormBuilder,
				private snackBar: MatSnackBar,
				private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.id = params['id'];
			this.loadData();
		});
	}

	private loadData() {
		this.hotelDataService.getHotel(this.id).subscribe(hotel => {
			this.hotelById = hotel;

			this.hotelForm = this.fb.group({
				name: [this.hotelById.name, Validators.required],
				description: [this.hotelById.description, Validators.required],
				address: [this.hotelById.address, Validators.required],
				email: [this.hotelById.email, Validators.required],
				phoneNumber: [this.hotelById.phoneNumber, Validators.required],
				website: [this.hotelById.website, Validators.required]
			});
		});
	}

	submitRoom() {
		if (this.hotelForm.valid) {
			this.hotelById = this.hotelForm.value;
			this.hotelById.id = this.id;
			this.hotelDataService.updateHotel(this.hotelById).subscribe(res => {
				this.snackBar.open('Hotel updated succesfully', 'Dismiss', {
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'end'
				});
				this.cancel();
			}, err => {
				console.log(err);
			});

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

}
