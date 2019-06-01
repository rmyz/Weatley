import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Activity } from '../../../../../core/entities/activity';
import { ActivitiesDataService } from '../../../../../core/data-services/activities-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-events-form',
	templateUrl: './events-form.component.html',
	styleUrls: ['./events-form.component.scss'],
	providers: [ActivitiesDataService]
})
export class EventsFormComponent implements OnInit {

	private eventsForm = new FormGroup ({
		name: new FormControl(),
		description: new FormControl(),
		startDate: new FormControl(),
		timeStart: new FormControl(),
		endDate: new FormControl(),
		timeEnd: new FormControl()
	});

	private activityById: Activity = new Activity({
	});

	private id: string;

	constructor(private activitiesDataService: ActivitiesDataService,
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
			this.activitiesDataService.getActivityById(id).subscribe(activity => {
				this.activityById = activity;
				this.activityById.startHour = new Date(this.activityById.startHour);
				this.activityById.endHour = new Date(this.activityById.endHour);

				this.eventsForm = this.fb.group({
					name: [this.activityById.name, Validators.required],
					description: [this.activityById.description, Validators.required],
					startDate: [this.activityById.startHour, Validators.required],
					timeStart: [null, Validators.required],
					endDate: [this.activityById.endHour, Validators.required],
					timeEnd: [null, Validators.required],

				});
			});
		} else {
			this.eventsForm = this.fb.group({
				name: ['', Validators.required],
				description: ['', Validators.required],
				startDate: [null, Validators.required],
				timeStart: [null, Validators.required],
				endDate: [null, Validators.required],
				timeEnd: [null, Validators.required],
			});
		}
	}

	submitEvent() {
		if (this.eventsForm.valid) {

			const time: string = this.eventsForm.value.timeStart;
			const time2: string = this.eventsForm.value.timeEnd;


			console.log(time);
			this.activityById = new Activity({
				name: this.eventsForm.value.name,
				description: this.eventsForm.value.description,
				startHour: new Date(this.eventsForm.value.startDate),
				endHour: new Date(this.eventsForm.value.endDate),
				hotel: this.activityById.hotel
			});

			let parts = time.match(/(\d+)\:(\d+)/);
			let hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12;
			let minutes = parseInt(parts[2], 10);

			this.activityById.startHour.setHours(hours + 2);
			this.activityById.startHour.setMinutes(minutes);

			parts = time2.match(/(\d+)\:(\d+)/);
			hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12;
			minutes = parseInt(parts[2], 10);

			this.activityById.endHour.setHours(hours + 2);
			this.activityById.endHour.setMinutes(minutes);

			console.log(this.activityById);
			if (this.id) {
				this.activityById.id = this.id;
				this.activitiesDataService.updateActivity(this.activityById).subscribe(res => {
					this.snackBar.open('Activity updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.activityById.id = uuidv4();
				this.activitiesDataService.createActivity(this.activityById).subscribe(res => {
					this.snackBar.open('Activity created succesfully', 'Dismiss', {
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
