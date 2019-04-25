import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../Auth-services/user.service';
import { RoutingEnum } from '../enums/routing-enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: UserService) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorized()) return true;

    this.authService.redirectUrl = state.url; // TODO This is not actually being used, fix it
    this.router.navigate([RoutingEnum.LOGIN_ROUTE]);
    return false;
  }
}
