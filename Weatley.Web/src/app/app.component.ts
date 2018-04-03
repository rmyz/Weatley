import { Component, OnInit } from '@angular/core';
import { UserService } from './core/Auth-services/user.service';
import { IsLoggedService } from './core/services/isLogged.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	isLoggedIn = false;

	constructor (
		private authService: UserService,
		private isLoggedService: IsLoggedService) {}

	ngOnInit() {
		this.toggleLogin();
		this.isLoggedService.getMessage().subscribe(res => this.toggleLogin());
	}

	toggleLogin() {
		if (this.authService.isAuthenticated()) {
			this.isLoggedIn = !this.isLoggedIn;
		}
	}
}
