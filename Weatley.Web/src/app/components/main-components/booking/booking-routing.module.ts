import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingEnum } from '../../../core/enums/routing-enum';
import { BookingFormComponent } from './booking-form/booking-form.component';


const routes: Routes = [
	{
		path: RoutingEnum.BOOKING_EDIT_ROUTE + '/:id',
		component: BookingFormComponent
	},
	{
		path: RoutingEnum.BOOKING_CREATE_ROUTE,
		component: BookingFormComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

})
export class BookingRouter { }
