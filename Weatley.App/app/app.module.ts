import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { InfoModule } from "~/pages/info/info.module";
import { OrderListModule } from "~/pages/order-list/order-list.module";
import { ProfileModule } from "~/pages/profile/profile.module";
import { LoginModule } from "~/utils/Login/Login.module";

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		NativeScriptModule,
		NativeScriptUISideDrawerModule,
		OrderListModule,
		InfoModule,
		ProfileModule,
		LoginModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
	],
	declarations: [
		AppComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
