import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';

@Injectable()
export class AccountingDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) {}

	getAccounting(): Observable<Accounting[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Accountings', options)
					.map((res: Response) => res.json());
	}

	getAccountingById(id: string): Observable<Accounting> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Accountings/' + id, options)
					.map((res: Response) => res.json());
	}

	createAccounting(accounting: Accounting) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Accountings/', accounting, options)
			.map((res: Response) => {
				return new Accounting(res.json());
			});
	}

	updateAccounting(accounting: Accounting): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Accountings/' + accounting.id , accounting, options)
			.map((res: Response) => {
				return new Accounting(res.json());
		});
	}

	deleteAccounting(accountingId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Accountings/' + accountingId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
