import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';

@Component({
	selector: 'app-accounting-form',
	templateUrl: './accounting-form.component.html',
	styleUrls: ['./accounting-form.component.scss'],
	providers: [AccountingDataService]
})
export class AccountingFormComponent implements OnInit {
	private accountingById: Accounting;

	constructor(private accountingDataService: AccountingDataService,
							private route: ActivatedRoute) { }

	ngOnInit() {
		if (this.route.params) {
			this.route.params.subscribe(params => {
				this.accountingById = this.accountingDataService.getAccountingById(params['id']);
				console.log(this.accountingById);
			});
		}

	}
}
