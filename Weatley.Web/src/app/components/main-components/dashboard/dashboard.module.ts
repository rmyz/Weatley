import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard-component/dashboard.component';
import { OrdersDataService } from '../../../core/data-services/orders-data.service';
import { CustomerDataService } from '../../../core/data-services/customer-data.service';
import { ReportDataService } from '../../../core/data-services/reports-data.service';
import { PageLoaderModule } from '../../../widgets/page-loader/page-loader.module';


@NgModule({
	imports: [
		CommonModule,
		MatGridListModule,
		CommonModule,
		PageLoaderModule
	],
	declarations: [
		DashboardComponent
	],
	exports: [
		MatGridListModule
	],
	providers: [
		OrdersDataService,
		CustomerDataService,
		ReportDataService
	]
})
export class DashboardModule { }
