import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Routes } from "@angular/router";

import { InfoComponent } from "~/pages/info/info.component";
import { OrderListComponent } from "~/pages/order-list/order-list.component";
import { ProfileComponent } from "~/pages/profile/profile.component";

import { HomeComponent } from "~/pages/home/home.component";
import { SettingsComponent } from "~/pages/settings/settings.component";

const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "home", component: HomeComponent },
	{ path: "settings", component: SettingsComponent },
	{ path: "orderList", component: OrderListComponent },
	{ path: "info", component: InfoComponent },
	{ path: "profile", component: ProfileComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
