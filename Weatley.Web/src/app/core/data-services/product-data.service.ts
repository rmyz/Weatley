import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserProfile } from '../Auth-services/User.Profile';
import { CommonService } from '../services/common.service';
import { Product } from '../entities/product';

@Injectable()
export class ProductDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) {}

	getProduct(): Observable<Product[]> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Products', options)
			.map(res => res.json());
	}

	getProductById(id: string): Observable<Product> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http.get(url + 'Products/' + id, options)
			.map(res => <Product>res.json());
	}

	createProduct(product: Product) {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.post(url + 'Products/', product, options)
			.map((res: Response) => {
				return new Product(res.json());
			});
	}

	updateProduct(product: Product): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.put(url + 'Products/' + product.id , product, options)
			.map((res: Response) => {
				return new Product(res.json());
		});
	}

	deleteProduct(productId: string): Observable<any> {

		const options = this.commonService.checkAuth();
		const url = this.commonService.getBaseUrl();

		return this.http
			.delete(url + 'Products/' + productId, options)
			.map((res: Response) => {
				return res.json();
		});
	}
}
