import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { CustomerOrderDialogComponent } from './customer-dialogs/customer-order-dialog/customer-order-dialog.component';
import { CustomerReportDialogComponent } from './customer-dialogs/customer-report-dialog/customer-report-dialog.component';
import { CustomerAccoutingDialogComponent } from './customer-dialogs/customer-accouting-dialog/customer-accouting-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-dialogs/customer-details-dialog/customer-details-dialog.component';

@NgModule({
	declarations: [
		DialogComponent,
		CustomerOrderDialogComponent,
		CustomerReportDialogComponent,
		CustomerAccoutingDialogComponent,
		CustomerDetailsDialogComponent
	],
	imports: [
		MatDialogModule,
		MatButtonModule
	],
	providers: [],
	exports: [
		DialogComponent
	],
	entryComponents: [
		DialogComponent
	]
	})
export class WidgetsModule { }
