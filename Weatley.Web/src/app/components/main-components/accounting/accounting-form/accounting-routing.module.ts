import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingFormComponent } from './accounting-form.component';


const routes: Routes = [
    {
        path: 'accounting' + '/' + 'edit' + '/:id',
        component: AccountingFormComponent
    },
    {
        path: 'accounting' + '/' + 'add',
        component: AccountingFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AccountingRouter { }


