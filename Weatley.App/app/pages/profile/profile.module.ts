import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
	imports: [
		NativeScriptModule,
		ProfileRoutingModule
	],
	declarations: [
		ProfileComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ProfileModule { }
