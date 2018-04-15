import { Injectable } from '@angular/core';
import { MenuItem } from '../entities/menu-item';
import { RoutingEnum } from '../enums/routing-enum';

@Injectable()
export class MenuItemsDataService {
	constructor() {}

	getMenuItems(): MenuItem[] {
		return  [new MenuItem ({ name: 'Dashboard', icon: 'dashboard', route: ''}),
		new MenuItem ({ name: 'Calendar', icon: 'today', route: RoutingEnum.CALENDAR_ROUTE}),
		new MenuItem ({ name: 'Bookings', icon: 'book', route: RoutingEnum.BOOKING_ROUTE}),
		new MenuItem ({ name: 'Notifications', icon: 'announcement', route: RoutingEnum.NOTIFICATIONS_ROUTE}),
		new MenuItem ({ name: 'Accounting', icon: 'payment', route: RoutingEnum.ACCOUNTING_ROUTE}),
		new MenuItem ({ name: 'Customers', icon: 'people', route: RoutingEnum.CUSTOMER_ROUTE}),
		new MenuItem ({ name: 'App Management', icon: 'smartphone',
		route: RoutingEnum.APP_MANAGEMENT + '/' + RoutingEnum.APP_MANAGEMENT_SERVICES}),
		new MenuItem ({ name: 'Hotel Management', icon: 'business',
		route: RoutingEnum.HOTEL_MANAGEMENT + '/' + RoutingEnum.HOTEL_MANAGEMENT_HOTEL})];
	}
}
