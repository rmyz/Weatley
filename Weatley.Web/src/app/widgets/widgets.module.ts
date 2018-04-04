import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		DialogComponent,
		NotFoundComponent
	],
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatCardModule
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
