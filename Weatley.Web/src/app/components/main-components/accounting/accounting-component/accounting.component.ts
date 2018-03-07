import { Component, OnInit } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  dataAccount: [] = [];

  constructor(private accountingComponent: AccountingDataService) { }

  ngOnInit() {
    this.dataAccount = this.accountingComponent.getBookings();
  }

}
