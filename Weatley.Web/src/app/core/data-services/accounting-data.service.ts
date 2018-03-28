import { Injectable } from '@angular/core';
import { Accounting } from '../entities/accounting';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountingDataService {
	constructor(private http: Http) {}

	getAccounting(): Observable<Accounting[]> {
		return this.http
					.get('http://localhost:5000/api/Accountings')
					.map((res: Response) => res.json());
	}

	getAccountingById(id: string): Observable<Accounting> {
		return this.http
					.get('http://localhost:5000/api/Accountings/' + id)
					.map((res: Response) => res.json());
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

	deleteAccounting(accountingId: string): Observable<any> {
		return this.http
			.delete('http://localhost:5000/api/Accountings/' + accountingId)
			.map((res: Response) => {
				return res.json();
			});
		}
}
