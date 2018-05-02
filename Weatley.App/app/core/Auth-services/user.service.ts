import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { CommonService } from "../services/common.service";
import { contentHeaders } from "../common/headers";
import { UserProfile } from "./User.Profile";
import { IProfile, IUser } from "../models/user-model";
import { RoutingEnum } from "../enums/routing-enum";

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
	isTokenExpired(profile: IProfile) {
		const expiration = new Date(profile.expiration);

		return expiration < new Date();
	}

	login(id: string) {
		const options = contentHeaders;
		const url = this.commonService.getBaseUrl() + "auth/guestToken";

		return this.http.post(url, id, {headers: options})
			.map((res: Response) => {
				const userProfile = (<any>res).res.json();
				console.log(userProfile);
				this.authProfile.setProfile(userProfile);

				return res.json();
			}).catch(this.commonService.handleFullError);
	}

	logout(): void {
		this.authProfile.resetProfile();
	}
}
