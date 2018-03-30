import { Component, OnInit } from '@angular/core';
import { MenuItemsDataService } from '../../../core/data-services/menu-items-data.service';
import { MenuItem } from '../../../core/entities/menu-item';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { UserService } from '../../../core/Auth-services/user.service';
import { User } from '../../../core/entities/user';
import { Router } from '@angular/router';
import { ServicesDataService } from '../../../core/data-services/services-data.service';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	providers: [MenuItemsDataService, ServicesDataService],
	animations: [
		trigger('sidenav', [
			state('out',
				style({ width: 78 })
			),
			state('in',
				style({ width: 216 })
			),
			transition('out => in', animate('300ms ease-in')),
			transition('in => out', animate('300ms ease-out'))
		]),
	]
})
export class MainLayoutComponent implements OnInit {

	theme = false;
	menuItems: MenuItem[] = [];
	sidenavStatus = 'out';
	sidenavItems = true;
	user: User;

	constructor(
		private menuItemsDataService: MenuItemsDataService,
		private userService: UserService,
		private servicesDataService: ServicesDataService,
		private router: Router) { }

	ngOnInit() {
		this.menuItems = this.menuItemsDataService.getMenuItems();
	}

	changeTheme() {
		this.theme = !this.theme;
	}

	toggleState() {
		this.sidenavStatus = this.sidenavStatus === 'out' ? 'in' : 'out';
	}

	animationDone() {
		this.sidenavItems = !this.sidenavItems;
	}

	logOut() {
		this.userService.logout();
	}
}
