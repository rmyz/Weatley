import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar-component/calendar.component';

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		CalendarModule.forRoot(),
	],
	declarations: [
		CalendarComponent
	],
	exports: [
		CalendarComponent
	]
})
export class FullCalendarModule { }
