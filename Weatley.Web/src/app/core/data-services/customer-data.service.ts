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
		const url = 'http://localhost:5000/api/Customers';

		let options = null;
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			const headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
			options = new RequestOptions({ headers: headers });
		}
		const data: Observable<Customer[]> = this.http.get(url, options)
			.map(res => <Customer[]>res.json())
			.do(customers => {
				console.log('getCustomers:');
				console.log(customers);
			});

		return data;
	}
	getCustomerById(id: string): Observable<Customer> {
		return this.http
					.get('http://localhost:5000/api/Customers/' + id)
					.map((res: Response) => res.json());
	}
	updateCustomers(customer: Customer): Observable<any> {
		return this.http
			.put('http://localhost:5000/api/Customers/' + customer.id , customer)
			.map((res: Response) => {
				return new Customer(res.json());
		});
	}
	createCustomer(customer: Customer) {
		return this.http
			.post('http://localhost:5000/api/Customers/', customer)
			.map((res: Response) => {
				return new Customer(res.json());
			});
	}
	deleteGoal(customerId: string): Observable<any> {
		return this.http
			.delete('http://localhost:5000/api/Customers/' + customerId)
			.map((res: Response) => {
				return res.json();
			});
		}
}
