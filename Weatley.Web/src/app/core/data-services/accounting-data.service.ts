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
		const url = 'http://localhost:5000/api/Accountings';

		let options = null;
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			const headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
			options = new RequestOptions({ headers: headers });
		}
		const data: Observable<Accounting[]> = this.http.get(url, options)
			.map(res => <Accounting[]>res.json())
			.do(accoutings => {
				console.log('getAccountings:');
				console.log(accoutings);
			});

		return data;
	}

	getAccountingById(id: string): Observable<Accounting> {
		const url = 'http://localhost:5000/api/Accountings/' + id;

		let options = null;
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			const headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
			options = new RequestOptions({ headers: headers });
		}
		const data: Observable<Accounting> = this.http.get(url, options)
			.map(res => <Accounting>res.json())
			.do(accouting => {
				console.log('getAccounting:');
				console.log(accouting);
			});

		return data;
	}

	createAccounting(accounting: Accounting) {
		return this.http
			.post('http://localhost:5000/api/Accountings/', accounting)
			.map((res: Response) => {
				return new Accounting(res.json());
			});
	}

	updateAccounting(accounting: Accounting): Observable<any> {
		return this.http
			.put('http://localhost:5000/api/Accountings/' + accounting.id , accounting)
			.map((res: Response) => {
				return new Accounting(res.json());
		});
	}

	deleteGoal(accountingId: string): Observable<any> {
		return this.http
			.delete('http://localhost:5000/api/Accountings/' + accountingId)
			.map((res: Response) => {
				return res.json();
			});
		}
}
