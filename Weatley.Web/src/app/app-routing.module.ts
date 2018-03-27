import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './components/main-components/accounting/accounting-component/accounting.component';
import { RoutingEnum } from './core/enums/routing-enum';
import { BookingComponent } from './components/main-components/booking/booking/booking.component';


const routes: Routes = [
	{
		path: RoutingEnum.ACCOUNTING_ROUTE,
		component: AccountingComponent
	},
	{
		path: RoutingEnum.BOOKING_ROUTE,
		component: BookingComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
