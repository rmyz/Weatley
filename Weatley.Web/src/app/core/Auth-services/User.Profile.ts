import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IProfile } from '../models/user-model';

@Injectable()
export class UserProfile {
	userProfile: IProfile = {
		token: '',
		expiration: '',
		currentUser: {
			id: '',
			userName: '',
			email: '',
			userType: '',
			name: '',
			surname: '',
			hotel: null
		},
		claims: null
	};
	constructor(
		private router: Router) { }

	setProfile(profile: IProfile): void {
		const nameid = profile.claims.filter(p => p.type === 'jti')[0].value;
		const username = profile.claims.filter(p => p.type === 'sub')[0].value;
		const email = profile.claims.filter(p => p.type === 'email')[0].value;
		const name = profile.claims.filter(p => p.type === 'sub')[1].value;
		const surname = profile.claims.filter(p => p.type === 'sub')[2].value;
		const userType = profile.claims.filter(p => p.type === 'sub')[3].value;

		sessionStorage.setItem('access_token', profile.token);
		sessionStorage.setItem('expires_in', profile.expiration);
		sessionStorage.setItem('nameid', nameid);
		sessionStorage.setItem('username', username);
		sessionStorage.setItem('email', email);
		sessionStorage.setItem('name', name);
		sessionStorage.setItem('surname', surname);
		sessionStorage.setItem('userType', userType);

	}

	getProfile(authorizationOnly: boolean = false): IProfile {
		const accessToken = sessionStorage.getItem('access_token');

		if (accessToken) {
			this.userProfile.token = accessToken;
			this.userProfile.expiration = sessionStorage.getItem('expires_in');
			if (this.userProfile.currentUser == null) {
				this.userProfile.currentUser = { id: '',
					userName: '',
					email: '',
					userType: '',
					name: '',
					surname: '',
					hotel: null
				};
			}
			this.userProfile.currentUser.id = sessionStorage.getItem('nameid');
			this.userProfile.currentUser.userName = sessionStorage.getItem('username');
			this.userProfile.currentUser.email = sessionStorage.getItem('email');
			this.userProfile.currentUser.name = sessionStorage.getItem('name');
			this.userProfile.currentUser.surname = sessionStorage.getItem('surname');
			this.userProfile.currentUser.userType = sessionStorage.getItem('userType');

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
