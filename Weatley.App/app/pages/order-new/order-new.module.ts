import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { OrderNewRoutingModule } from "./order-new-routing.module";
import { OrderNewComponent } from "./order-new.component";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

@NgModule({
    imports: [
        NativeScriptModule,
		OrderNewRoutingModule,
		TNSFontIconModule.forRoot({
			// tslint:disable-next-line:object-literal-key-quotes
			"mdi": "material-design-icons.css"
		})
    ],
    declarations: [
        OrderNewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OrderNewModule { }
