import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers } from "@angular/http";
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

import { Token } from "../entities/token";

@Injectable()
export class UserProfile {
	userProfile: Token = {
		token: "",
		expiration: null,
	};
	constructor(
		private router: Router) { }

	setProfile(profile: Token): void {

		setString("access_token", profile.token);
		setString("expires_in", profile.expiration.toDateString());

	}

	getProfile(authorizationOnly: boolean = false): Token {
		const accessToken = getString("access_token");

		if (accessToken) {
			this.userProfile.token = accessToken;
			this.userProfile.expiration = new Date(getString("expires_in"));
		}

		return this.userProfile;
	}

	resetProfile(): Token {
		remove("access_token");
		remove("expires_in");
		this.userProfile = {
			token: "",
			expiration: null,
		};

		return this.userProfile;
	}
}
