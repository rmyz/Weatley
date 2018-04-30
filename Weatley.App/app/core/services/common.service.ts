import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Response, RequestOptions, Headers } from '@angular/http';
import { UserProfile } from '../Auth-services/User.Profile';

import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonService {
	private baseUrl = 'http://weatleywebapi.azurewebsites.net/api/';
	private localUrl = 'http://localhost:5000/api/';

	constructor(private authProfile: UserProfile) { }

	getBaseUrl(): string {
		return this.baseUrl;
	}

	handleFullError(error: Response) {
		return Observable.throw(error);
	}

	handleError(error: Response): Observable<any> {
		const errorMessage = error.json();
		console.error(errorMessage);
		return Observable.throw(errorMessage.error || 'Server error');
	}

	checkAuth(): HttpHeaders {
		let options = null;
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			return new HttpHeaders({ 'Authorization': 'Bearer ' + profile.token });
		}
	}
}
