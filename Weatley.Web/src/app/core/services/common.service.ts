
import {throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserProfile } from '../Auth-services/User.Profile';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CommonService {
	private baseUrl = 'http://weatleywebapi.azurewebsites.net/api/';
	private localUrl = 'https://localhost:44333/api/';

	constructor(private authProfile: UserProfile) { }

	getBaseUrl(): string {
		return this.localUrl;
	}

	handleFullError(error: HttpErrorResponse) {
		return observableThrowError(error);
	}

	handleError(error: HttpErrorResponse): Observable<any> {
		const errorMessage = error;
		console.error(errorMessage);
		return observableThrowError(errorMessage.error || 'Server error');
	}

	checkAuth(): HttpHeaders {
		const profile = this.authProfile.getProfile();

		if (profile != null && profile !== undefined) {
			return new HttpHeaders({ 'Authorization': 'Bearer ' + profile.token });
		}
	}
}
