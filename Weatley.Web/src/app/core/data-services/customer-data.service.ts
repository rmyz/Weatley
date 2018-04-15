import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from '../entities/customer';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';

@Injectable()
export class CustomerDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) {}

	getCustomers(): Observable<Customer[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get( url + 'Customers', options)
					.map((res: Response) => res.json());
	}
	getCustomerById(id: string): Observable<Customer> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
					.get(url + 'Customers/' + id, options)
					.map((res: Response) => res.json());
	}
	updateCustomers(customer: Customer): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Customers/' + customer.id , customer, options)
			.map((res: Response) => {
				return new Customer(res.json());
		});
	}
	createCustomer(customer: Customer) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Customers/', customer, options)
			.map((res: Response) => {
				return new Customer(res.json());
			});
	}
	deleteGoal(customerId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Customers/' + customerId, options)
			.map((res: Response) => {
				return res.json();
			});
		}
}
