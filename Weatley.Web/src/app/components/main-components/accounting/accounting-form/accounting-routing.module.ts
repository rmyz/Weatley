import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingFormComponent } from './accounting-form.component';
import { RoutingEnum } from '../../../../core/enums/routing-enum';


const routes: Routes = [
    {
        path: RoutingEnum.ACCOUNTING_EDIT_ROUTE + '/:id',
        component: AccountingFormComponent
    },
    {
        path: RoutingEnum.ACCOUNTING_CREATE_ROUTE,
        component: AccountingFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AccountingRouter { }


