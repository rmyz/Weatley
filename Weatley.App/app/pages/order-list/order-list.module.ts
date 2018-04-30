import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { OrderListRoutingModule } from "./order-list-routing.module";
import { OrderListComponent } from "./order-list.component";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";


@NgModule({
    imports: [
		NativeScriptModule,
		OrderListRoutingModule
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
