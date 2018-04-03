import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './components/main-components/accounting/accounting-component/accounting.component';
import { CustomerComponent } from './components/main-components/customer/customer-component/customer.component';
import { RoutingEnum } from './core/enums/routing-enum';


const routes: Routes = [
    {
      path: RoutingEnum.ACCOUNTING_ROUTE,
      component: AccountingComponent
    },
    {
      path: RoutingEnum.CUSTOMER_ROUTE,
      component: CustomerComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
