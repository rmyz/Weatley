import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ReportComponent } from "./report.component";

const routes: Routes = [
	{ path: "", component: ReportComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class ReportRoutingModule { }
