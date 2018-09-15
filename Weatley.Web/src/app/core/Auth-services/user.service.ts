import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { contentHeaders } from '../common/headers';
import { UserProfile } from './User.Profile';
import { IProfile, IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';

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
		const options = contentHeaders;

		const credentials = {
			grant_type: 'password',
			email: username,
			password: password
		};
		const url = this.commonService.getBaseUrl() + 'auth/token';

		return this.http.post<IProfile>(url, credentials, {headers: contentHeaders})
			.pipe(map (response => {
				const userProfile: IProfile = response;
				this.authProfile.setProfile(userProfile);
				return response;
			}));
	}
	register(user: IUser, password: string, confirmPassword: string) {
		if (!user.email || !password) {
			return;
		}

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
		return this.http.post<IProfile>(url, credentials, {headers: contentHeaders})
			.pipe(map((response) => {
				return response;
			}));
	}

	logout(): void {
		this.authProfile.resetProfile();
	}
}
