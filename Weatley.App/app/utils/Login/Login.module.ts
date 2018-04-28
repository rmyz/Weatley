import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginRoutingModule } from "./Login-routing.module";
import { LoginComponent } from "./Login.component";

@NgModule({
	imports: [
		NativeScriptModule,
		LoginRoutingModule
	],
	declarations: [
		LoginComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class LoginModule { }
