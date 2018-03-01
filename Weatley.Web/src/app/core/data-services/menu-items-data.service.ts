import { Injectable } from '@angular/core';
import { MenuItem } from '../entities/menu-item';

@Injectable()
export class MenuItemsDataService {
    constructor() {}

    getMenuItems(): MenuItem[] {
        return  [new MenuItem ({ name: 'Dashboard', icon: 'dashboard'}),
        new MenuItem ({ name: 'Calendar', icon: 'today'}),
        new MenuItem ({ name: 'Notifications', icon: 'announcement'}),
        new MenuItem ({ name: 'Accounting', icon: 'payment'}),
        new MenuItem ({ name: 'Customers', icon: 'people'}),
        new MenuItem ({ name: 'App Management', icon: 'smartphone'}),
        new MenuItem ({ name: 'Hotel Management', icon: 'business'})];
    }
}
