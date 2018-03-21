import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Accounting } from '../../../../core/entities/accounting';

import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';

@Component({
  selector: 'app-accounting-form',
  templateUrl: './accounting-form.component.html',
  styleUrls: ['./accounting-form.component.scss'],
  providers: [AccountingDataService, BookingDataService]
})
export class AccountingFormComponent implements OnInit {


  dataAccount: Accounting[] = [];

  id: string;

  constructor(private accountingDataService: AccountingDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataAccount = this.accountingDataService.getAccounting();

    this.route.parent.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);

    const accountingById = this.accountingDataService.getAccountingById(this.id);
    console.log(accountingById);
  }
}
