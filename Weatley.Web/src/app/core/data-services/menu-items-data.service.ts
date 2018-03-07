import { Injectable } from '@angular/core';
import { MenuItem } from '../entities/menu-item';

@Injectable()
export class MenuItemsDataService {
    constructor() {}

    getMenuItems(): MenuItem[] {
        return  [new MenuItem ({ name: 'Dashboard', icon: 'dashboard', route: ''}),
        new MenuItem ({ name: 'Calendar', icon: 'today', route: 'calendar'}),
        new MenuItem ({ name: 'Notifications', icon: 'announcement', route: 'notifications'}),
        new MenuItem ({ name: 'Accounting', icon: 'payment', route: 'accounting'}),
        new MenuItem ({ name: 'Customers', icon: 'people', route: 'customers'}),
        new MenuItem ({ name: 'App Management', icon: 'smartphone', route: 'app-management'}),
        new MenuItem ({ name: 'Hotel Management', icon: 'business', route: 'hotel-management'})];
    }
}
