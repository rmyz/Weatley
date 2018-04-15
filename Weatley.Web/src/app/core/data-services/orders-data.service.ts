import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';
import { Order } from '../entities/order';


@Injectable()
export class OrdersDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) {}

	getOrders(): Observable<Order[]> {
		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Orders', options)
			.map(res => res.json());
	}

	getOrderById(id: string): Observable<Order> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Orders/' + id, options)
			.map(res => <Order>res.json());
	}

	createOrders(order: Order) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Orders/', order, options)
			.map((res: Response) => {
				return new Order(res.json());
			});
	}

	updateOrder(order: Order): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Orders/' + order.id , order, options)
			.map((res: Response) => {
				return new Order(res.json());
		});
	}

	deleteOrder(orderId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Orders/' + orderId, options)
			.map((res: Response) => {
				return res.json();
		});
	}
}
