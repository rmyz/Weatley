import { Component, OnInit } from '@angular/core';
import { MenuItemsDataService } from '../../../core/data-services/menu-items-data.service';
import { UserDataService } from '../../../core/data-services/users-data.service';
import { MenuItem } from '../../../core/entities/menu-item';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { User } from '../../../core/entities/user';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	providers: [MenuItemsDataService, UserDataService],
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
		private userDataService: UserDataService) { }

	ngOnInit() {
		this.menuItems = this.menuItemsDataService.getMenuItems();
		this.userDataService.getUser('C8EE9AFD-F31D-4181-9789-2D573ACF2244').subscribe( user => {
			this.user = user;
		});
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
}
