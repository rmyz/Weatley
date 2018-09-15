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
import { HubConnection } from '@aspnet/signalr';
import { Report } from '../../../core/entities/report';
import { Order } from '../../../core/entities/order';
import { SignalRService } from '../../../core/services/signalR.service';
import { MatSnackBar } from '@angular/material';
import { UserTypeEnum } from '../../../core/enums/userType-enum';
import * as signalR from '@aspnet/signalr';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	providers: [MenuItemsDataService, ServicesDataService, SignalRService],
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
	private hubConnection: HubConnection;

	constructor(
		private menuItemsDataService: MenuItemsDataService,
		private userProfile: UserProfile,
		private userService: UserService,
		private servicesDataService: ServicesDataService,
		private isLoggedService: IsLoggedService,
		private router: Router,
		public snackBar: MatSnackBar,
		private signalRService: SignalRService) { }

	ngOnInit() {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl('https://localhost:44333/chat')
			.configureLogging(signalR.LogLevel.Information)
			.build();
		this.hubConnection
		.start()
		.then(() => {
			console.log('Connection started!');
		})
		.catch(err => console.log('Error while establishing connection :('));

		this.hubConnection.on('sendToAllReport', (report: Report) => {
			this.signalRService.sendReport(report);
			this.snackBar.open('New report arrived!', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
			// notify user who send the report
		});

		this.hubConnection.on('sendToAllOrder', (order: Order) => {
			this.signalRService.sendOrder(order);
			this.snackBar.open('New order arrived!', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
		});

		this.hubConnection.on('test', (order: Order) => {
			this.signalRService.sendOrder(order);
			this.snackBar.open('New order arrived!', 'Dismiss', {
				duration: 3000,
				verticalPosition: 'top',
				horizontalPosition: 'end'
			});
		});

		this.user =  this.userProfile.getProfile().currentUser;

		if (this.user.userType === UserTypeEnum.MANAGER_TYPE || this.user.userType === UserTypeEnum.ADMIN_TYPE) {
			this.menuItems = this.menuItemsDataService.getManagerMenu();
		} else {
			this.menuItems = this.menuItemsDataService.getInternalMenu();
		}
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
