import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';

@Component({
	selector: 'app-accounting-form',
	templateUrl: './accounting-form.component.html',
	styleUrls: ['./accounting-form.component.scss'],
	providers: [AccountingDataService]
})
export class AccountingFormComponent implements OnInit {
	private accountingById: Accounting;
	private id: string;
	constructor(private accountingDataService: AccountingDataService,
				private route: ActivatedRoute,
				private formBuilder: FormBuilder) { }

	ngOnInit() {
			this.route.params.subscribe(params => {
				this.id = params['id'];
				this.loadData(this.id);
			});
	}
	private loadData(id: string) {
		if (id) {
			this.accountingById = this.accountingDataService.getAccountingById(id);
		} else {
			this.accountingById = new Accounting({
				id: null,
				price: null,
				date: null,
				paymentType: null,
				customer: null
			});
		}
	}
	submitAccounting() {
		console.log(this.accountingById);
	}
	cancel() {
		history.go(-1);
	}
}
