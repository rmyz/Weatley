import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar-component/calendar.component';
import { PageLoaderModule } from '../../../widgets/page-loader/page-loader.module';

@NgModule({
	imports: [
		CommonModule,
		PageLoaderModule,
		BrowserAnimationsModule,
		CalendarModule.forRoot({provide: DateAdapter,
			useFactory: adapterFactory}),
	],
	declarations: [
		CalendarComponent
	],
	exports: [
		CalendarComponent
	]
})
export class FullCalendarModule { }
