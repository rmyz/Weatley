import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) {}

	getProduct(): Observable<Array<Product>> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Array<Product>>(url + 'Products', {headers: options});
	}

	getProductById(id: string): Observable<Product> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get<Product>(url + 'Products/' + id, {headers: options});
	}

	createProduct(product: Product) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post<Product>(url + 'Products/', product, {headers: options});
	}

	updateProduct(product: Product): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put<Product>(url + 'Products/' + product.id , product, {headers: options});
	}

	deleteProduct(productId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete<Product>(url + 'Products/' + productId, {headers: options});
	}
}
