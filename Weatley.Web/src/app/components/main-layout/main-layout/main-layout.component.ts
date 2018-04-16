import { Component, OnInit } from '@angular/core';
import { MenuItemsDataService } from '../../../core/data-services/menu-items-data.service';
import { MenuItem } from '../../../core/entities/menu-item';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { UserService } from '../../../core/Auth-services/user.service';
import { Router } from '@angular/router';
import { ServicesDataService } from '../../../core/data-services/services-data.service';
import { RoutingEnum } from '../../../core/enums/routing-enum';
import { IsLoggedService } from '../../../core/services/isLogged.service';
import { UserProfile } from '../../../core/Auth-services/User.Profile';
import { IUser } from '../../../core/models/user-model';

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
	user: IUser;

	constructor(
		private menuItemsDataService: MenuItemsDataService,
		private userProfile: UserProfile,
		private userService: UserService,
		private servicesDataService: ServicesDataService,
		private isLoggedService: IsLoggedService,
		private router: Router) { }

	ngOnInit() {
		this.menuItems = this.menuItemsDataService.getMenuItems();
		this.user =  this.userProfile.getProfile().currentUser;
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
		this.isLoggedService.sendMessage(true);
		this.router.navigate([RoutingEnum.LOGIN_ROUTE]);
	}
}
