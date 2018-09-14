
import {throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { UserProfile } from '../Auth-services/User.Profile';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonService {
	private baseUrl = 'http://weatleywebapi.azurewebsites.net/api/';
	private localUrl = 'https://localhost:44333/api/';

	constructor(private authProfile: UserProfile) { }

	getBaseUrl(): string {
		return this.localUrl;
	}

	handleFullError(error: Response) {
		return observableThrowError(error);
	}

	handleError(error: Response): Observable<any> {
		const errorMessage = error.json();
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
