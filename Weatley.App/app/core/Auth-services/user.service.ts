import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CommonService } from '../services/common.service';
import { contentHeaders } from '../common/headers';
import { UserProfile } from './User.Profile';
import { IProfile, IUser } from '../models/user-model';
import { RoutingEnum } from '../enums/routing-enum';

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

	login(username: string, password: string) {
		if (!username || !password) {
			return;
		}
		const options = new RequestOptions(
			{ headers: contentHeaders });

		const credentials = {
			grant_type: 'password',
			email: username,
			password: password
		};
		const url = this.commonService.getBaseUrl() + 'auth/token';

		return this.http.post(url, credentials, options)
			.map((response: Response) => {
				const userProfile: IProfile = response.json();
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

		const credentials = {
			userName: user.userName,
			name: user.name,
			surname: user.surname,
			userType: user.userType,
			email: user.email,
			password: password,
			confirmPassword: confirmPassword
		};
		const url = this.commonService.getBaseUrl() + 'auth/register';
		return this.http.post(url, credentials, options)
			.map((response: Response) => {
				return response.json();
			}).catch(this.commonService.handleFullError);
	}

	logout(): void {
		this.authProfile.resetProfile();
	}
}
