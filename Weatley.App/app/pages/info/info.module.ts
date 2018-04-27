import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { InfoRoutingModule } from "./info-routing.module";
import { InfoComponent } from "./info.component";

@NgModule({
	imports: [
		NativeScriptModule,
		InfoRoutingModule
	],
	declarations: [
		InfoComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class InfoModule { }
