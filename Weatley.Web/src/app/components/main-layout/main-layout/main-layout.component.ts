import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenuItemsDataService } from '../../../core/data-services/menu-items-data.service';
import { MenuItem } from '../../../core/entities/menu-item';
import { UserService } from '../../../core/Auth-services/user.service';
import { RoutingEnum } from '../../../core/enums/routing-enum';
import { IsLoggedService } from '../../../core/services/isLogged.service';
import { UserProfile } from '../../../core/Auth-services/User.Profile';
import { IUser } from '../../../core/models/user-model';
import { UserTypeEnum } from '../../../core/enums/userType-enum';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [MenuItemsDataService],
  animations: [
    trigger('sidenav', [
      state('out', style({ width: 78 })),
      state('in', style({ width: 216 })),
      transition('out => in', animate('300ms ease-in')),
      transition('in => out', animate('300ms ease-out')),
    ]),
  ],
})
export class MainLayoutComponent implements OnInit {
  nightTheme = false;
  menuItems: MenuItem[] = [];
  sidenavStatus = 'out';
  sidenavItems = true;
  user: IUser;

  constructor(
    private menuItemsDataService: MenuItemsDataService,
    private userProfile: UserProfile,
    private userService: UserService,
    private isLoggedService: IsLoggedService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.user = this.userProfile.getProfile().user;

    if (
      this.user.userType.toLowerCase() === UserTypeEnum.MANAGER_TYPE ||
      this.user.userType.toLowerCase() === UserTypeEnum.ADMIN_TYPE
    ) {
      this.menuItems = this.menuItemsDataService.getManagerMenu();
    } else {
      this.menuItems = this.menuItemsDataService.getInternalMenu();
    }
  }

  changeTheme() {
    this.nightTheme = !this.nightTheme;
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
