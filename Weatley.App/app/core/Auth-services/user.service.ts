import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";

import { CommonService } from "../services/common.service";
import { contentHeaders } from "../common/headers";
import { UserProfile } from "./User.Profile";
import { RoutingEnum } from "../enums/routing-enum";
import { Token } from "../entities/token";

@Injectable()
export class UserService {

	redirectUrl: string;
	errorMessage: string;

	private _SnackBar: SnackBar;

	constructor(
		private http: HttpClient,
		private router: Router,
		private authProfile: UserProfile,
		private commonService: CommonService) {
			this._SnackBar = new SnackBar();
		}

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

		return this.http.post<Token>(url, credentials, {headers: options})
			.subscribe((res) => {
				const userProfile = res;
				this.authProfile.setProfile(userProfile);
				this._SnackBar.simple("Snackbar", "red", "#fff");
				
				return res;
			}, ((error) => {
				console.log(error);
			})
		);
	}

	logout(): void {
		this.authProfile.resetProfile();
	}
}
