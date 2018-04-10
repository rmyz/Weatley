import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AccountingModule } from './main-components/accounting/accounting.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { LoginModule } from './main-components/login/login.module';
import { BookingModule } from './main-components/booking/booking.module';
import { CustomerModule } from './main-components/customer/customer.module';
import { HotelManagementModule } from './main-components/hotel-management/hotel-management.module';
import { AppManagementModule } from './main-components/app-management/app-management.module';
import { NotificationsModule } from './main-components/notifications/notifications.module';


@NgModule({
declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AccountingModule,
		MainLayoutModule,
		LoginModule,
		CustomerModule,
		BookingModule,
		BookingModule,
		HotelManagementModule,
		AppManagementModule,
		NotificationsModule
	],
	providers: [],
	exports: [
		AccountingModule,
		MainLayoutModule,
		LoginModule,
		CustomerModule,
		BookingModule,
		HotelManagementModule,
		AppManagementModule,
		NotificationsModule
	]

})
export class ComponentModule { }
