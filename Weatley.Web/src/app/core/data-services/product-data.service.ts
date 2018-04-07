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
		const url = 'http://localhost:5000/api/Products';

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => res.json());
	}

	getProductById(id: string): Observable<Product> {
		const url = 'http://localhost:5000/api/Products/' + id;

		const options = this.commonService.checkAuth();
		return this.http.get(url, options)
			.map(res => <Product>res.json());
	}

	createProduct(product: Product) {
		const options = this.commonService.checkAuth();

		return this.http
			.post('http://localhost:5000/api/Products/', product, options)
			.map((res: Response) => {
				return new Product(res.json());
			});
	}

	updateProduct(product: Product): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.put('http://localhost:5000/api/Products/' + product.id , product, options)
			.map((res: Response) => {
				return new Product(res.json());
		});
	}

	deleteProduct(productId: string): Observable<any> {
		const options = this.commonService.checkAuth();

		return this.http
			.delete('http://localhost:5000/api/Products/' + productId, options)
			.map((res: Response) => {
				return res.json();
		});
	}
}
