import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import { CustomerOrderDialogComponent } from './customer-dialogs/customer-order-dialog/customer-order-dialog.component';
import { CustomerReportDialogComponent } from './customer-dialogs/customer-report-dialog/customer-report-dialog.component';
import { CustomerAccoutingDialogComponent } from './customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-dialogs/customer-details-dialog/customer-details-dialog.component';
import { CustomerBookingDialogComponent } from './customer-dialogs/customer-booking-dialog/customer-booking-dialog.component';
import { DenyOrderComponent } from './deny-order/deny-order.component';
import { DetailsOrderDialogComponent } from './details-order-dialog/details-order-dialog.component';

@NgModule({
	declarations: [
		DialogComponent,
		NotFoundComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerBookingDialogComponent,
		CustomerOrderDialogComponent,
		DenyOrderComponent,
		DetailsOrderDialogComponent
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
		MatRadioModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule
	],
	providers: [],
	exports: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		DenyOrderComponent,
		DetailsOrderDialogComponent
	],
	entryComponents: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		DenyOrderComponent
	]
	})
export class WidgetsModule { }
