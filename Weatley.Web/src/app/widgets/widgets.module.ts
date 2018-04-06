import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { CustomerOrderDialogComponent } from './customer-dialogs/customer-order-dialog/customer-order-dialog.component';
import { CustomerReportDialogComponent } from './customer-dialogs/customer-report-dialog/customer-report-dialog.component';
import { CustomerAccoutingDialogComponent } from './customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-dialogs/customer-details-dialog/customer-details-dialog.component';
import { CustomerBookingDialogComponent } from './customer-dialogs/customer-booking-dialog/customer-booking-dialog.component';

@NgModule({
	declarations: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerBookingDialogComponent
	],
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatDividerModule,
		MatListModule,
		MatCardModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		CommonModule
	],
	providers: [],
	exports: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent
	],
	entryComponents: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent
	]
	})
export class WidgetsModule { }
