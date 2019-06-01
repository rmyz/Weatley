import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { AppManagementComponent } from './app-management/app-management.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { EventsFormComponent } from './events/events-form/events-form.component';
import { ServicesFormComponent } from './services/services-form/services-form.component';
import { PageLoaderModule } from '../../../widgets/page-loader/page-loader.module';

@NgModule({
	declarations: [
		AppManagementComponent,
		ServicesComponent,
		EventsComponent,
		EventsFormComponent,
		ServicesFormComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		MatTabsModule,
		RouterModule,
		MatCardModule,
		MatButtonModule,
		BrowserAnimationsModule,
		MatTableModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatSelectModule,
		MatCardModule,
		MatGridListModule,
		MatDividerModule,
		MatSnackBarModule,
		MatTooltipModule,
		MatIconModule,
		PageLoaderModule
	],
	providers: [
	],
	exports: [
		AppManagementComponent,
		ServicesComponent,
		ServicesFormComponent,
		EventsComponent,
		EventsFormComponent
	],
	entryComponents: [
	]
})
export class AppManagementModule { }
