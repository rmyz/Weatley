import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatDialogModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';

import { CustomerOrderDialogComponent } from './customer-dialogs/customer-order-dialog/customer-order-dialog.component';
import { CustomerReportDialogComponent } from './customer-dialogs/customer-report-dialog/customer-report-dialog.component';
import { CustomerAccoutingDialogComponent } from './customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-dialogs/customer-details-dialog/customer-details-dialog.component';
import { CustomerBookingDialogComponent } from './customer-dialogs/customer-booking-dialog/customer-booking-dialog.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@NgModule({
	declarations: [
		DialogComponent,
		NotFoundComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerBookingDialogComponent,
		CustomerOrderDialogComponent,
		EventDialogComponent
	],
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		MatCardModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		CommonModule,
		MatToolbarModule,
		QRCodeModule

	],
	providers: [],
	exports: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		EventDialogComponent

	],
	entryComponents: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		EventDialogComponent

	]
	})
export class WidgetsModule { }
