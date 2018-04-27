import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OrderNewComponent } from "./order-new.component";

const routes: Routes = [
    { path: "", component: OrderNewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrderNewRoutingModule { }
