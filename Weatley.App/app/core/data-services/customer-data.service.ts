import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Customer } from '../entities/customer';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerDataService {
	constructor(private http: HttpClient,
				private authProfile: UserProfile,
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
