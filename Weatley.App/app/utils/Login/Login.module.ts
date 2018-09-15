import { NgModule, NO_ERRORS_SCHEMA, ValueProvider } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BarcodeScanner } from "nativescript-barcodescanner";
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
	],
	providers: [
		BarcodeScanner
	]
})
export class LoginModule { }
