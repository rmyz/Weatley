import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
	declarations: [
		DialogComponent
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
