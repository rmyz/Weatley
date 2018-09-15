import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { CommonModule } from '@angular/common';
import { UserService } from './Auth-services/user.service';
import { UserProfile } from './Auth-services/User.Profile';
import { CommonService } from './services/common.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		NativeScriptHttpClientModule
	],
	declarations: [],
	providers: [
		UserProfile,
		UserService,
		CommonService,
		HttpClientModule
	],
	exports: []
})
export class CoreModule { }
