import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { OrderNewRoutingModule } from "./order-new-routing.module";
import { OrderNewComponent } from "./order-new.component";

@NgModule({
    imports: [
        NativeScriptModule,
        OrderNewRoutingModule
    ],
    declarations: [
        OrderNewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrderNewModule { }
