import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Customer } from '../entities/customer';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerDataService {
	constructor(private http: HttpClient,
				private commonService: CommonService) {}

	getCustomers(): Observable<Array<Customer>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Array<Customer>>(url + "Customers", {headers: options});
	}

	getCustomerById(id: string): Observable<Customer> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get<Customer>(url + "Customers/" + id, {headers: options});
	}
}
