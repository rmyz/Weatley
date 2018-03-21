import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { AccountingDataService } from '../../../../core/data-services/accounting-data.service';
import { BookingDataService } from '../../../../core/data-services/bookings-data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Accounting } from '../../../../core/entities/accounting';
import { Router } from '@angular/router';



@Component({
	selector: 'app-accounting',
	templateUrl: './accounting.component.html',
	styleUrls: ['./accounting.component.scss'],
	providers: [AccountingDataService, BookingDataService]
})
export class AccountingComponent implements OnInit, AfterViewInit {

	displayedColumns = ['id', 'price', 'date', 'paymentType', 'booking', 'orders', 'function'];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	dataSource: MatTableDataSource<Accounting>;

	dataAccount: Accounting[] = [];

	constructor(private accountingDataService: AccountingDataService, private router: Router) { }

	ngOnInit() {
		this.dataAccount = this.accountingDataService.getAccounting();
		this.dataSource =  new MatTableDataSource<Accounting>(this.dataAccount);
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	goToEdit(id) {
		console.log(id);
		this.router.navigate(['accounting' + '/' + 'edit/' + id]);
	}
}
