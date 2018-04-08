import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Service } from '../entities/service';
import { CommonService } from '../services/common.service';
import { UserProfile } from '../Auth-services/User.Profile';

@Injectable()
export class ServicesDataService {
	constructor(private http: Http,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

		getServices(): Observable<Service[]> {
			const options = this.commonService.checkAuth();
			return this.http
						.get('http://localhost:5000/api/Services', options)
						.map((res: Response) => res.json());
		}

		getServiceById(id: string): Observable<Service> {
			const options = this.commonService.checkAuth();
			return this.http
						.get('http://localhost:5000/api/Services/' + id, options)
						.map((res: Response) => res.json());
		}

		createService(service: Service) {
			const options = this.commonService.checkAuth();

			return this.http
				.post('http://localhost:5000/api/Services/', service, options)
				.map((res: Response) => {
					return new Service(res.json());
				});
		}

		updateService(service: Service): Observable<any> {
			const options = this.commonService.checkAuth();

			return this.http
				.put('http://localhost:5000/api/Services/' + service.id , service, options)
				.map((res: Response) => {
					return new Service(res.json());
			});
		}

		deleteService(serviceId: string): Observable<any> {
			const options = this.commonService.checkAuth();

			return this.http
				.delete('http://localhost:5000/api/Services/' + serviceId, options)
				.map((res: Response) => {
					return res.json();
				});
		}
}
