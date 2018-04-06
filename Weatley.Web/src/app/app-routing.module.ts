import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AccountingComponent } from './components/main-components/accounting/accounting-component/accounting.component';
import { CustomerComponent } from './components/main-components/customer/customer-component/customer.component';
import { RoutingEnum } from './core/enums/routing-enum';
import { AuthGuard } from './core/guards/auth.guard';
import { BookingComponent } from './components/main-components/booking/booking/booking.component';
import { LoginComponent } from './components/main-components/login/login-component/login.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout/main-layout.component';
import { BookingFormComponent } from './components/main-components/booking/booking-form/booking-form.component';
import { AccountingFormComponent } from './components/main-components/accounting/accounting-form/accounting-form.component';
import { NotFoundComponent } from './widgets/not-found/not-found.component';
import { CustomerFormComponent } from './components/main-components/customer/customer-form/customer-form.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: RoutingEnum.ACCOUNTING_ROUTE,
				component: AccountingComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.CUSTOMER_ROUTE,
				component: CustomerComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.CUSTOMER_CREATE_ROUTE,
				component: CustomerFormComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.CUSTOMER_EDIT_ROUTE + '/:id',
				component: CustomerFormComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.ACCOUNTING_EDIT_ROUTE + '/:id',
				component: AccountingFormComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.ACCOUNTING_CREATE_ROUTE,
				component: AccountingFormComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.BOOKING_ROUTE,
				component: BookingComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.BOOKING_EDIT_ROUTE + '/:id',
				component: BookingFormComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.BOOKING_CREATE_ROUTE,
				component: BookingFormComponent,
				canActivate: [AuthGuard]
			},
		],
		canActivate: [AuthGuard]
	},
	{
		path: RoutingEnum.LOGIN_ROUTE,
		component: LoginComponent
	},
	{
		path: RoutingEnum.NOT_FOUND_ROUTE,
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: RoutingEnum.NOT_FOUND_ROUTE
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
