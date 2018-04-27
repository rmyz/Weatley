import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { OrderListRoutingModule } from "./order-list-routing.module";
import { OrderListComponent } from "./order-list.component";

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
    ]
})
export class OrderListModule { }
