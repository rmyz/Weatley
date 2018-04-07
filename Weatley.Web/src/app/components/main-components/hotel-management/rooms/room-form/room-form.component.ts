import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Room } from '../../../../../core/entities/room';
import { RoomDataService } from '../../../../../core/data-services/room-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-room-form',
	templateUrl: './room-form.component.html',
	styleUrls: ['./room-form.component.scss'],
	providers: [RoomDataService]
})
export class RoomFormComponent implements OnInit {

	private roomForm = new FormGroup ({
		roomType: new FormControl(),
		roomNumber: new FormControl(),
		floorNumber: new FormControl()
	});
	private roomById: Room = new Room({
	});
	private id: string;

	constructor(private roomDataService: RoomDataService,
				private route: ActivatedRoute,
				private fb: FormBuilder,
				private snackBar: MatSnackBar) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});
	}

	private loadData(id: string) {
		if (id) {
			this.roomDataService.getRoomById(id).subscribe(room => {
				this.roomById = room;

				this.roomForm = this.fb.group({
					roomType: [this.roomById.roomType, Validators.required],
					roomNumber: [this.roomById.roomNumber, Validators.required],
					floorNumber: [this.roomById.floorNumber, Validators.required]
				});
			});
		} else {
			this.roomForm = this.fb.group({
				roomType: [null, Validators.required],
				roomNumber: ['', Validators.required],
				floorNumber: ['', Validators.required]
			});
		}
	}

	submitRoom() {
		if (this.roomForm.valid) {
			this.roomById = this.roomForm.value;
			if (this.id) {
				this.roomById.id = this.id;
				this.roomDataService.updateRoom(this.roomById).subscribe(res => {
					this.snackBar.open('Room updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.roomById.id = uuidv4();
				this.roomDataService.createRoom(this.roomById).subscribe(res => {
					this.snackBar.open('Room created succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			}
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
