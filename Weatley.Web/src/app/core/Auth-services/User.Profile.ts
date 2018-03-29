import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { IProfile } from '../models/user-model';

@Injectable()
export class UserProfile {
	userProfile: IProfile = {
		token: '',
		expiration: '',
		currentUser: {
			id: '',
			username: '',
			email: '',
			userType: '',
			name: '',
			hotel: null
		},
		claims: null
	};
	constructor(private router: Router) {
	}

	setProfile(profile: IProfile): void {
		const nameid = profile.claims.filter(p => p.type === 'jti')[0].value;
		const username = profile.claims.filter(p => p.type === 'sub')[0].value;
		const email = profile.claims.filter(p => p.type === 'email')[0].value;
		sessionStorage.setItem('access_token', profile.token);
		sessionStorage.setItem('expires_in', profile.expiration);
		sessionStorage.setItem('nameid', nameid);
		sessionStorage.setItem('username', username);
		sessionStorage.setItem('email', email);
	}

	getProfile(authorizationOnly: boolean = false): IProfile {
		const accessToken = sessionStorage.getItem('access_token');

		if (accessToken) {
			this.userProfile.token = accessToken;
			this.userProfile.expiration = sessionStorage.getItem('expires_in');
			if (this.userProfile.currentUser == null) {
				this.userProfile.currentUser = { id: '',
					username: '',
					email: '',
					userType: '',
					name: '',
					hotel: null
				};
			}
			this.userProfile.currentUser.id = sessionStorage.getItem('nameid');
			this.userProfile.currentUser.username = sessionStorage.getItem('username');
		}

		return this.userProfile;
	}

	resetProfile(): IProfile {
		sessionStorage.removeItem('access_token');
		sessionStorage.removeItem('expires_in');
		this.userProfile = {
			token: '',
			expiration: '',
			currentUser: null,
			claims: null
		};
		return this.userProfile;
	}
}
