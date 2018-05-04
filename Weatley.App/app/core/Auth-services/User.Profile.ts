import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { Router } from "@angular/router";
import {
	clear,
	getString,
	remove,
	setString
} from "application-settings";

import { Token } from "../entities/token";

@Injectable()
export class UserProfile {
	userProfile: Token = {
		id: "",
		token: "",
		expiration: null
	};
	constructor(
		private router: Router) { }

	setProfile(profile: Token, id: string): void {

		setString("customer_id", id);
		setString("access_token", profile.token);
		setString("expires_in", profile.expiration.toString());

	}

	getProfile(authorizationOnly: boolean = false): Token {
		const accessToken = getString("access_token");

		if (accessToken) {
			this.userProfile.id = getString("customer_id");
			this.userProfile.token = accessToken;
			this.userProfile.expiration = new Date(getString("expires_in"));
		}

		return this.userProfile;
	}

	resetProfile(): Token {
		remove("customer_id");
		remove("access_token");
		remove("expires_in");
		this.userProfile = {
			id: "",
			token: "",
			expiration: null
		};

		return this.userProfile;
	}

}
