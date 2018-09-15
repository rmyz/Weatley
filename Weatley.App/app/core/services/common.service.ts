
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserProfile } from "../Auth-services/User.Profile";

import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class CommonService {
	private baseUrl = "https://weatleyapi.azurewebsites.net/api/";
	private localUrl = "http://localhost:44333/api/";

	constructor(private authProfile: UserProfile) { }

	getBaseUrl(): string {
		return this.baseUrl;
	}

	handleFullError(error: HttpErrorResponse) {
		console.log("error");

		return observableThrowError(error);
	}

	handleError(error: HttpErrorResponse): Observable<any> {
		const errorMessage = error;
		console.error(errorMessage);

		return observableThrowError(errorMessage.error || "Server error");
	}

	checkAuth(): HttpHeaders {


		// const headers = new HttpHeaders({ "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YTE5OGRlNy03ZTdkLTQzNjEtOTM3Zi0xYTNkNzI3NmEwNWUiLCJlbWFpbCI6IkFkbWluQGFkbWluLmNvbSIsInN1YiI6WyJBZG1pbiIsIkFkbWluIiwiVGVzdCIsIkFkbWluIl0sImV4cCI6MTg0MDU1NTM1MywiaXNzIjoiaHR0cDovL3dlYXRsZXl3ZWJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJodHRwOi8vd2VhdGxleXdlYmFwaS5henVyZXdlYnNpdGVzLm5ldCJ9.M8jQcDNJGXX0PAtFV5nR6IaCprMcmErKKlJTNbZ6Zl0"});
		// return headers;
		const profile = this.authProfile.getProfile();

		return new HttpHeaders({ 'Authorization': 'Bearer ' + profile.token });
	}
}
