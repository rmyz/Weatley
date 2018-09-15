import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
	imports: [
		NativeScriptModule,
		ProfileRoutingModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
	],
	declarations: [
		ProfileComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ProfileModule { }
