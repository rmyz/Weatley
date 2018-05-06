import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Routes } from "@angular/router";

import { InfoComponent } from "~/pages/info/info.component";
import { OrderListComponent } from "~/pages/order-list/order-list.component";
import { ProfileComponent } from "~/pages/profile/profile.component";
import { LoginComponent } from "~/utils/Login/Login.component";

import { HomeComponent } from "~/pages/home/home.component";

import { OrderDetailsComponent } from "~/pages/order-details/order-details.component";
import { OrderNewComponent } from "~/pages/order-new/order-new.component";

const routes: Routes = [
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "orderList", component: OrderListComponent },
	{ path: "info", component: InfoComponent },
	{ path: "profile", component: ProfileComponent },
	{ path: "order/:id", component: OrderDetailsComponent },
	{ path: "order", component: OrderNewComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
