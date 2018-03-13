import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Accounting } from '../../../../core/entities/accounting';

@Component({
    selector: 'app-accounting',
    templateUrl: './accounting.component.html',
    styleUrls: ['./accounting.component.scss'],
    providers: [AccountingDataService, BookingDataService]
})
export class AccountingComponent implements OnInit, AfterViewInit {

    displayedColumns = ['id', 'price', 'date', 'paymentType', 'booking', 'orders'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: MatTableDataSource<Accounting>;

    dataAccount: Accounting[] = [];

    constructor(private accountingDataService: AccountingDataService) { }

    ngOnInit() {
        this.dataAccount = this.accountingDataService.getAccounting();
        this.dataSource =  new MatTableDataSource<Accounting>(this.dataAccount);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
