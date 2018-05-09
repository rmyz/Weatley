import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { InfoModule } from "~/pages/info/info.module";
import { OrderListModule } from "~/pages/order-list/order-list.module";
import { ProfileModule } from "~/pages/profile/profile.module";
import { LoginModule } from "~/utils/Login/Login.module";
import { CoreModule } from "./core/core.module";

import { OrderDetailsModule } from "~/pages/order-details/order-details.module";
import { OrderNewModule } from "~/pages/order-new/order-new.module";
import { ReportModule } from "~/pages/report/report.module";

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		NativeScriptModule,
		HttpClientModule,
		NativeScriptHttpClientModule,
		CoreModule,
		NativeScriptUISideDrawerModule,
		OrderListModule,
		OrderDetailsModule,
		OrderNewModule,
		InfoModule,
		ProfileModule,
		LoginModule,
		ReportModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
	],
	declarations: [
		AppComponent
	],
	providers: [
		HttpClientModule,
		NativeScriptHttpClientModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
