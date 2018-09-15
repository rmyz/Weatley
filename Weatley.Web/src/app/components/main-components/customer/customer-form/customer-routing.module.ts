import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form.component';
import { RoutingEnum } from '../../../../core/enums/routing-enum';


const routes: Routes = [
	{
		path: RoutingEnum.CUSTOMER_EDIT_ROUTE + '/:id',
		component: CustomerFormComponent
	},
	{
		path: RoutingEnum.CUSTOMER_CREATE_ROUTE,
		component: CustomerFormComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]

})
export class CustomerRouter { }


