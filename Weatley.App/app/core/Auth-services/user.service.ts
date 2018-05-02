import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CommonService } from "../services/common.service";
import { contentHeaders } from "../common/headers";
import { UserProfile } from "./User.Profile";
import { IProfile, IUser } from "../models/user-model";
import { RoutingEnum } from "../enums/routing-enum";
import { Token } from "../entities/token";

@Injectable()
export class UserService {
	redirectUrl: string;
	errorMessage: string;
	constructor(
		private http: Http,
		private router: Router,
		private authProfile: UserProfile,
		private commonService: CommonService) { }

	isAuthenticated() {
		const profile = this.authProfile.getProfile();
		const validToken = profile.token !== '' && profile.token !== null;
		const isTokenExpired = this.isTokenExpired(profile);
		return validToken && !isTokenExpired;
	}
	isAuthorized() {
		const profile = this.authProfile.getProfile();
		const validToken = profile.token !== '' && profile.token !== null;
		const isTokenExpired = this.isTokenExpired(profile);
		return validToken && !isTokenExpired;
	}
	isTokenExpired(profile: IProfile) {
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
				console.log(userProfile);
				this.authProfile.setProfile(userProfile);
				return response.json();
			}).catch(this.commonService.handleFullError);
	}
	register(user: IUser, password: string, confirmPassword: string) {
		if (!user.email || !password) {
			return;
		}
		const options = new RequestOptions(
			{ headers: contentHeaders });

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
