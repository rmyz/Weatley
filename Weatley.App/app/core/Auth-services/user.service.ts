import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { contentHeaders } from "../common/headers";
import { Token } from "../entities/token";
import { CommonService } from "../services/common.service";
import { UserProfile } from "./User.Profile";

@Injectable()
export class UserService {

	redirectUrl: string;
	errorMessage: string;

	constructor(
		private http: HttpClient,
		private router: Router,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

	isAuthenticated() {
		const profile = this.authProfile.getProfile();
		const validToken = profile.token !== "" && profile.token !== null;
		const isTokenExpired = this.isTokenExpired(profile);

		return validToken && !isTokenExpired;
	}
	isAuthorized() {
		const profile = this.authProfile.getProfile();
		const validToken = profile.token !== "" && profile.token !== null;
		const isTokenExpired = this.isTokenExpired(profile);

		return validToken && !isTokenExpired;
	}
	isTokenExpired(profile: Token) {
		const expiration = new Date(profile.expiration);

		return expiration < new Date();
	}

	login(incomingId: string) {
		const options = contentHeaders;
		const url = this.commonService.getBaseUrl() + "auth/guestToken";
		const credentials = {
			id: incomingId
		};

		return this.http.post<Token>(url, credentials, {headers: options});
	}

	logout(): void {
		this.authProfile.resetProfile();
	}
}
