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
		const url = 'http://localhost:5000/api/Orders';

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => res.json());
	}

	getOrderById(id: string): Observable<Order> {
		const url = 'http://localhost:5000/api/Orders/' + id;

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => <Order>res.json());
	}

	createOrders(order: Order) {
		const options = this.commonService.checkAuth();

		return this.http
			.post('http://localhost:5000/api/Orders/', order, options)
			.map((res: Response) => {
				return new Order(res.json());
			});
	}

	updateOrder(order: Order): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Orders/' + order.id , order, options)
			.map((res: Response) => {
				return new Order(res.json());
		});
	}

	deleteOrder(orderId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Orders/' + orderId, options)
			.map((res: Response) => {
				return res.json();
		});
	}
}
