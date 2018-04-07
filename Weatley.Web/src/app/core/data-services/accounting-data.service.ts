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

		return this.http
					.get('http://localhost:5000/api/Accounting', options)
					.map((res: Response) => res.json());
	}

	getAccountingById(id: string): Observable<Accounting> {
		const options = this.commonService.checkAuth();

		return this.http
					.get('http://localhost:5000/api/Accounting/' + id, options)
					.map((res: Response) => res.json());
	}

	createAccounting(accounting: Accounting) {
		const options = this.commonService.checkAuth();

		return this.http
			.post('http://localhost:5000/api/Accountings/', accounting, options)
			.map((res: Response) => {
				return new Accounting(res.json());
			});
	}

	updateAccounting(accounting: Accounting): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Accountings/' + accounting.id , accounting, options)
			.map((res: Response) => {
				return new Accounting(res.json());
		});
	}

	deleteAccounting(accountingId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Accountings/' + accountingId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
