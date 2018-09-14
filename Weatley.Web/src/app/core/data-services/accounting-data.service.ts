import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountingDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) {}

	getAccounting(): Observable<Array<Accounting>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Array<Accounting>>(url + 'Accountings', {headers: options});
	}

	getAccountingById(id: string): Observable<Accounting> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Accounting>(url + 'Accountings/' + id, {headers: options});
	}

	createAccounting(accounting: Accounting) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Accounting>(url + 'Accountings/', accounting, {headers: options});
	}

	updateAccounting(accounting: Accounting): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Accounting>(url + 'Accountings/' + accounting.id , accounting, {headers: options});
	}

	deleteAccounting(accountingId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Accounting>(url + 'Accountings/' + accountingId, {headers: options});
		}
}
