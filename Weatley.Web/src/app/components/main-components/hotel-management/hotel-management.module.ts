import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';


import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ProductsComponent } from './products/products.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';

@NgModule({
	declarations: [
		HotelManagementComponent,
		RoomsComponent,
		ProductsComponent,
		HotelCardComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		MatTabsModule,
		RouterModule
	],
	providers: [
	],
	exports: [
		HotelManagementComponent,
		RoomsComponent,
		HotelCardComponent
	],
	entryComponents: [
	]
})
export class HotelManagementModule { }
