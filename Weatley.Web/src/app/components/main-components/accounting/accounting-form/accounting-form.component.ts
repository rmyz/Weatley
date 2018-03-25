import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { CustomerDataService } from '../../../../core/data-services/customer-data.service';
import { Customer } from '../../../../core/entities/customer';

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
				console.log(this.accountingById.customer);
			});
		}
	}

	submitAccounting() {
		console.log(this.accountingById);
		if (this.id) {
			this.accountingDataService.updateAccounting(this.accountingById).subscribe(res => {
				console.log('works');
			}, err => {
				console.log(err);
			});
		} else {
			// Delete this id
			this.accountingById.id = '1bd8ca5a-ebc8-4dd7-b7ef-0b3d78c78e32';
			this.accountingDataService.createAccounting(this.accountingById).subscribe(res => {
				console.log('works');
			}, err => {
				console.log(err);
			});
		}
	}

	cancel() {
		history.go(-1);
	}
}
