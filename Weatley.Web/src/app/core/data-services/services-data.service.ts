import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../entities/service';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesDataService {
	constructor(private http: HttpClient,
		private commonService: CommonService) { }

		getServices(): Observable<Array<Service>> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get<Array<Service>>(url + 'Services', {headers: options});
		}

		getServiceById(id: string): Observable<Service> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
						.get<Service>(url + 'Services/' + id, {headers: options});
		}

		createService(service: Service) {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.post<Service>(url + 'Services/', service, {headers: options});
		}

		updateService(service: Service): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.put<Service>(url + 'Services/' + service.id , service, {headers: options});
		}

		deleteService(serviceId: string): Observable<any> {

			const options = this.commonService.checkAuth();
			const url = this.commonService.getBaseUrl();

			return this.http
				.delete<Service>(url + 'Services/' + serviceId, {headers: options});
		}
}
