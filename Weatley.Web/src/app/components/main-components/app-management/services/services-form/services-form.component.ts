import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../../../../../core/entities/service';
import { ServicesDataService } from '../../../../../core/data-services/services-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-services-form',
	templateUrl: './services-form.component.html',
	styleUrls: ['./services-form.component.scss'],
	providers: [ServicesDataService]
})
export class ServicesFormComponent implements OnInit {

	private servicesForm = new FormGroup ({
		name: new FormControl(),
		description: new FormControl()
	});

	private serviceById: Service = new Service({
	});

	private id: string;

	constructor(private servicesDataService: ServicesDataService,
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
			this.servicesDataService.getServiceById(id).subscribe(service => {
				this.serviceById = service;

				this.servicesForm = this.fb.group({
					name: [this.serviceById.name, Validators.required],
					description: [this.serviceById.description, Validators.required]
				});
			});
		} else {
			this.servicesForm = this.fb.group({
				name: ['', Validators.required],
				description: ['', Validators.required]
			});
		}
	}

	submitService() {
		if (this.servicesForm.valid) {
			this.serviceById = this.servicesForm.value;
			if (this.id) {
				this.serviceById.id = this.id;
				this.servicesDataService.updateService(this.serviceById).subscribe(res => {
					this.snackBar.open('Service updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.serviceById.id = uuidv4();
				this.servicesDataService.createService(this.serviceById).subscribe(res => {
					this.snackBar.open('Service created succesfully', 'Dismiss', {
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
