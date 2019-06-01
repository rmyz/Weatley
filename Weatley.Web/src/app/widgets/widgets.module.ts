import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QRCodeModule } from 'angularx-qrcode';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerOrderDialogComponent } from './customer-dialogs/customer-order-dialog/customer-order-dialog.component';
import { CustomerReportDialogComponent } from './customer-dialogs/customer-report-dialog/customer-report-dialog.component';
import { CustomerAccoutingDialogComponent } from './customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-dialogs/customer-details-dialog/customer-details-dialog.component';
import { CustomerBookingDialogComponent } from './customer-dialogs/customer-booking-dialog/customer-booking-dialog.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { DenyOrderComponent } from './deny-order/deny-order.component';
import { DetailsOrderDialogComponent } from './details-order-dialog/details-order-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ReportTableComponent } from './report-table/report-table.component';

@NgModule({
	declarations: [
		DialogComponent,
		NotFoundComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerBookingDialogComponent,
		CustomerOrderDialogComponent,
		EventDialogComponent,
		DenyOrderComponent,
		DetailsOrderDialogComponent,
		ReportTableComponent,
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
		QRCodeModule,
		MatRadioModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatIconModule,
		MatInputModule,
		MatSlideToggleModule
	],
	providers: [],
	exports: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		EventDialogComponent,
		DenyOrderComponent,
		DetailsOrderDialogComponent,
		ReportTableComponent
	],
	entryComponents: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerDetailsDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerBookingDialogComponent,
		EventDialogComponent,
		DenyOrderComponent,
		DetailsOrderDialogComponent
	]
	})
export class WidgetsModule { }
