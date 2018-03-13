import { Component, OnInit } from '@angular/core';
import { MenuItemsDataService } from '../../../core/data-services/menu-items-data.service';
import { MenuItem } from '../../../core/entities/menu-item';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    providers: [MenuItemsDataService]
})
export class MainLayoutComponent implements OnInit {

    theme = false;
    menuItems: MenuItem[] = [];
    openedSidenav = false;

    constructor(private menuItemsDataService: MenuItemsDataService) { }

    ngOnInit() {
        this.menuItems = this.menuItemsDataService.getMenuItems();
    }

    changeTheme() {
        this.theme = !this.theme;
    }
}
