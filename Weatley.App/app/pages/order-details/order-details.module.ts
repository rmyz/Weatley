import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { OrderDetailsRoutingModule } from "./order-details-routing.module";
import { OrderDetailsComponent } from "./order-details.component";

@NgModule({
    imports: [
        NativeScriptModule,
        OrderDetailsRoutingModule
    ],
    declarations: [
        OrderDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrderDetailsModule { }
