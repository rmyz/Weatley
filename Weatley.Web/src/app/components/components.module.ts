import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AccountingModule } from './main-components/accounting/accounting.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { BookingModule } from './main-components/booking/booking.module';


@NgModule({
declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AccountingModule,
		MainLayoutModule,
		BookingModule
	],
	providers: [],
	exports: [
		AccountingModule,
		MainLayoutModule,
		BookingModule
	]
})
export class ComponentModule { }
