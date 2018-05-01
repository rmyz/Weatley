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

		const headers = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTE5OGRlNy03ZTdkLTQzNjEtOTM3Zi0xYTNkNzI3NmEwNWUiLCJlbWFpbCI6IkFkbWluQGFkbWluLmNvbSIsInN1YiI6WyJBZG1pbiIsIkFkbWluIiwiVGVzdCIsIkFkbWluIl0sImV4cCI6MTg0MDU1NTM1MywiaXNzIjoiaHR0cDovL3dlYXRsZXl3ZWJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJodHRwOi8vd2VhdGxleXdlYmFwaS5henVyZXdlYnNpdGVzLm5ldCJ9.M8jQcDNJGXX0PAtFV5nR6IaCprMcmErKKlJTNbZ6Zl0'});
		return headers;
		// const profile = this.authProfile.getProfile();

		// if (profile != null && profile !== undefined) {
		// 	return new HttpHeaders({ 'Authorization': 'Bearer ' + profile.token });
		// }
	}
}
