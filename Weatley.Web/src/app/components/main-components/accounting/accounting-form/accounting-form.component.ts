import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { Customer } from '../../../../core/entities/customer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-accounting-form',
	templateUrl: './accounting-form.component.html',
	styleUrls: ['./accounting-form.component.scss'],
	providers: [AccountingDataService, CustomerDataService]
})
export class AccountingFormComponent implements OnInit {
	private accountingForm = new FormGroup ({
		customer: new FormControl(),
		finalPrice: new FormControl(),
		date: new FormControl(),
		paid: new FormControl(),
		paymentType: new FormControl()
	});
	private accountingById: Accounting = new Accounting({
		customer: new Customer
	});
	private id: string;
	private customers: Customer[] = [];

	constructor(private accountingDataService: AccountingDataService,
				private route: ActivatedRoute,
				private customerDataService: CustomerDataService,
				private fb: FormBuilder,
				private snackBar: MatSnackBar) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});

			this.customerDataService.getCustomers().subscribe(customers => {
				this.customers = customers;
			});
	}

	private loadData(id: string) {
		if (id) {
			this.accountingDataService.getAccountingById(id).subscribe(accounting => {
				this.accountingById = accounting;
				this.accountingById.date = new Date(this.accountingById.date);

				this.accountingForm = this.fb.group({
					customer: [this.accountingById.customer, Validators.required],
					finalPrice: [this.accountingById.finalPrice, Validators.required],
					date: [this.accountingById.date, Validators.required],
					paid: [this.accountingById.paid, Validators.required],
					paymentType: [this.accountingById.paymentType, Validators.required]
				});
			});
		} else {
			this.accountingForm = this.fb.group({
				customer: [new Customer, Validators.required],
				finalPrice: ['', Validators.required],
				date: ['', Validators.required],
				paid: [null, Validators.required],
				paymentType: ['', Validators.required]
			});
		}
	}

	dateChange() {
		this.accountingById.date.setDate(this.accountingById.date.getDate() + 1);
	}

	dateGoBack() {
		this.accountingById.date.setDate(this.accountingById.date.getDate() - 1);
	}

	submitAccounting() {
		if (this.accountingForm.valid) {
			this.accountingById = this.accountingForm.value;
			this.dateChange();
			if (this.id) {
				this.accountingById.id = this.id;
				this.accountingDataService.updateAccounting(this.accountingById).subscribe(res => {
					this.snackBar.open('Accounting updated succesfully', 'Dismiss', {
						duration: 3000,
						verticalPosition: 'top',
						horizontalPosition: 'end'
					});
					this.cancel();
				}, err => {
					console.log(err);
				});
			} else {
				this.accountingById.id = uuidv4();
				this.accountingDataService.createAccounting(this.accountingById).subscribe(res => {
					this.snackBar.open('Accounting created succesfully', 'Dismiss', {
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
}
