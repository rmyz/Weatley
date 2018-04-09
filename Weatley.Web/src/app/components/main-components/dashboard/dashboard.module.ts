import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardComponent } from './dashboard-component/dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		MatGridListModule
	],
	declarations: [
		DashboardComponent
	],
	exports: [
		MatGridListModule
	]
})
export class DashboardModule { }
