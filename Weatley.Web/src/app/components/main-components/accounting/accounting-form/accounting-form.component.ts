import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { Customer } from '../../../../core/entities/customer';
const uuidv4 = require('uuid/v4');

@Component({
	selector: 'app-accounting-form',
	templateUrl: './accounting-form.component.html',
	styleUrls: ['./accounting-form.component.scss'],
	providers: [AccountingDataService, CustomerDataService]
})
export class AccountingFormComponent implements OnInit {
	private accountingById: Accounting = new Accounting ({
		id: null,
		finalPrice: null,
		date: null,
		paymentType: null,
		customer: new Customer ({
			name: null
		})
	});
	private id: string;
	private customers: Customer[] = [];

	constructor(private accountingDataService: AccountingDataService,
				private route: ActivatedRoute,
				private customerDataService: CustomerDataService) { }

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
		this.dateChange();
		if (this.id) {
			this.accountingDataService.updateAccounting(this.accountingById).subscribe(res => {
				console.log('works');
			}, err => {
				console.log(err);
			});
		} else {
			this.accountingById.id = uuidv4();
			this.accountingDataService.createAccounting(this.accountingById).subscribe(res => {
				console.log('works');
			}, err => {
				console.log(err);
			});
		}
		this.dateGoBack();
	}

	cancel() {
		history.go(-1);
	}
}
