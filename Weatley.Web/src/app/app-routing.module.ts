import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AccountingComponent } from './components/main-components/accounting/accounting-component/accounting.component';
import { RoutingEnum } from './core/enums/routing-enum';
import { AuthGuard } from './core/guards/auth.guard';
import { BookingComponent } from './components/main-components/booking/booking/booking.component';


const routes: Routes = [
	{
		path: RoutingEnum.ACCOUNTING_ROUTE,
		component: AccountingComponent,
		canActivate: [AuthGuard]
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
