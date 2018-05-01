import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { OrderListRoutingModule } from "./order-list-routing.module";
import { OrderListComponent } from "./order-list.component";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";


@NgModule({
    imports: [
		NativeScriptModule,
		OrderListRoutingModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
    ],
    declarations: [
        OrderListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
	],
	exports: [
		OrderListComponent
	]
})
export class OrderListModule { }
