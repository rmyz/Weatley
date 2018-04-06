import { Component, OnInit } from '@angular/core';
import { UserService } from './core/Auth-services/user.service';
import { IsLoggedService } from './core/services/isLogged.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	constructor (
		private authService: UserService,
		private isLoggedService: IsLoggedService) {}

	ngOnInit() {
	}
}
