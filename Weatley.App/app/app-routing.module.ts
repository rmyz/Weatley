import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InfoComponent } from "~/pages/info/info.component";
import { OrderListComponent } from "~/pages/order-list/order-list.component";
import { ProfileComponent } from "~/pages/profile/profile.component";
import { LoginComponent } from "~/utils/Login/Login.component";

const routes: Routes = [
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
	{ path: "settings", loadChildren: "./pages/settings/settings.module#SettingsModule" },
	{ path: "orderList", component: OrderListComponent },
	{ path: "info", component: InfoComponent },
	{ path: "profile", component: ProfileComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
