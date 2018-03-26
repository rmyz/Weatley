import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Customer } from '../entities/customer';

@Injectable()
export class CustomerDataService {
	constructor(private http: Http) {}

	getCustomers(): Observable<Customer[]> {
		return this.http
					.get('http://localhost:5000/api/Customers')
					.map((res: Response) => res.json());
	}
}
