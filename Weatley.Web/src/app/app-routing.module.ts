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
import { HotelManagementComponent } from './components/main-components/hotel-management/hotel-management/hotel-management.component';
import { RoomsComponent } from './components/main-components/hotel-management/rooms/rooms.component';
import { ProductsComponent } from './components/main-components/hotel-management/products/products.component';
import { HotelCardComponent } from './components/main-components/hotel-management/hotel-card/hotel-card.component';
import { InternalsComponent } from './components/main-components/hotel-management/internals/internals.component';
import { RoomFormComponent } from './components/main-components/hotel-management/rooms/room-form/room-form.component';
import { HotelFormComponent } from './components/main-components/hotel-management/hotel-card/hotel-form/hotel-form.component';
import { ProductFormComponent } from './components/main-components/hotel-management/products/product-form/product-form.component';
import { AppManagementComponent } from './components/main-components/app-management/app-management/app-management.component';
import { ServicesComponent } from './components/main-components/app-management/services/services.component';
import { EventsComponent } from './components/main-components/app-management/events/events.component';
import { ServicesFormComponent } from './components/main-components/app-management/services/services-form/services-form.component';
import { EventsFormComponent } from './components/main-components/app-management/events/events-form/events-form.component';
import { CalendarComponent } from './components/main-components/calendar/calendar-component/calendar.component';
import { NotificationsComponent } from './components/main-components/notifications/notifications/notifications.component';
import { InternalFormComponent } from './components/main-components/hotel-management/internals/internal-form/internal-form.component';

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
			{
				path: RoutingEnum.NOTIFICATIONS_ROUTE,
				component: NotificationsComponent,
				canActivate: [AuthGuard]
			},
			{
				path: RoutingEnum.HOTEL_MANAGEMENT,
				component: HotelManagementComponent,
				canActivate: [AuthGuard],
				children: [
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_HOTEL,
						component: HotelCardComponent,
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_HOTEL_EDIT + '/:id',
						component: HotelFormComponent,
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_ROOMS,
						component: RoomsComponent,
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_ROOMS_CREATE,
						component: RoomFormComponent,
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_ROOMS_EDIT + '/:id',
						component: RoomFormComponent,
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS,
						component: ProductsComponent
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS_CREATE,
						component: ProductFormComponent
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_PRODUCTS_EDIT + '/:id',
						component: ProductFormComponent
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_INTERNAL,
						component: InternalsComponent
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_INTERNAL_CREATE,
						component: InternalFormComponent
					},
					{
						path: RoutingEnum.HOTEL_MANAGEMENT_INTERNAL_EDIT + '/:id',
						component: InternalFormComponent
					},
				]
			},
			{
				path: RoutingEnum.APP_MANAGEMENT,
				component: AppManagementComponent,
				children: [
					{
						path: RoutingEnum.APP_MANAGEMENT_SERVICES,
						component: ServicesComponent
					},
					{
						path: RoutingEnum.APP_MANAGEMENT_SERVICES_CREATE,
						component: ServicesFormComponent
					},
					{
						path: RoutingEnum.APP_MANAGEMENT_SERVICES_EDIT + '/:id',
						component: ServicesFormComponent
					},
					{
						path: RoutingEnum.APP_MANAGEMENT_EVENTS,
						component: EventsComponent
					},
					{
						path: RoutingEnum.APP_MANAGEMENT_EVENTS_CREATE,
						component: EventsFormComponent
					},
					{
						path: RoutingEnum.APP_MANAGEMENT_EVENTS_EDIT + '/:id',
						component: EventsFormComponent
					},
				]
			},
			{
				path: RoutingEnum.CALENDAR_ROUTE,
				component: CalendarComponent,
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
