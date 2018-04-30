import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import {
	getBoolean,
	setBoolean,
	getNumber,
	setNumber,
	getString,
	setString,
	hasKey,
	remove,
	clear
} from "application-settings";

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

		setString('access_token', profile.token);
		setString('expires_in', profile.expiration);
		setString('nameid', nameid);
		setString('username', username);
		setString('email', email);
		setString('name', name);
		setString('surname', surname);
		setString('userType', userType);

	}

	getProfile(authorizationOnly: boolean = false): IProfile {
		const accessToken = getString('access_token');

		if (accessToken) {
			this.userProfile.token = accessToken;
			this.userProfile.expiration = getString('expires_in');
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
			this.userProfile.currentUser.id = getString('nameid');
			this.userProfile.currentUser.userName = getString('username');
			this.userProfile.currentUser.email = getString('email');
			this.userProfile.currentUser.name = getString('name');
			this.userProfile.currentUser.surname = getString('surname');
			this.userProfile.currentUser.userType = getString('userType');

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
