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
		const url = 'http://localhost:5000/api/Services';

		let options = null;
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			const headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
			options = new RequestOptions({ headers: headers });
		}
		const data: Observable<Service[]> = this.http.get(url, options)
			.map(res => <Service[]>res.json())
			.do(services => {
				console.log('getAccountings:');
				console.log(services);
			});

		return data;
	}
}
