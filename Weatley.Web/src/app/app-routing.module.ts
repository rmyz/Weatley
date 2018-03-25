import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './components/main-components/accounting/accounting-component/accounting.component';


const routes: Routes = [
	{
		path: 'accounting',
		component: AccountingComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
