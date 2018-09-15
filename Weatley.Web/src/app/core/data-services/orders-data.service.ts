import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { Order } from '../entities/order';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OrdersDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) {}

	getOrders(): Observable<Array<Order>> {
		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Array<Order>>(url + 'Orders', {headers: options});
	}

	getOrderById(id: string): Observable<Order> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Order>(url + 'Orders/' + id, {headers: options});
	}

	createOrders(order: Order) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Order>(url + 'Orders/', order, {headers: options});
	}

	updateOrder(order: Order): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Order>(url + 'Orders/' + order.id , order, {headers: options});
	}

	deleteOrder(orderId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Order>(url + 'Orders/' + orderId, {headers: options});
	}
}
