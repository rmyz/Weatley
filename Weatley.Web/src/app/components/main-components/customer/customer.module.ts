import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { CustomerComponent } from './customer-component/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDataService } from '../../../core/data-services/customer-data.service';
import { CustomerRouter } from './customer-form/customer-routing.module';
import { PageLoaderModule } from '../../../widgets/page-loader/page-loader.module';

@NgModule({
	declarations: [
		CustomerComponent,
		CustomerFormComponent
	],
	imports: [
		MatTooltipModule,
		MatIconModule,
		BrowserModule,
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
		MatSelectModule,
		MatFormFieldModule,
		MatCardModule,
		CustomerRouter,
		PageLoaderModule
	],
	providers: [
		CustomerDataService
	],
	exports: [
		CustomerComponent,
		CustomerFormComponent
	],
	entryComponents: [
		CustomerFormComponent
	]
})
export class CustomerModule { }
