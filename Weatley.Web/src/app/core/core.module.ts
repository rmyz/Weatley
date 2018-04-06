import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from './Auth-services/user.service';
import { UserProfile } from './Auth-services/User.Profile';
import { CommonService } from './services/common.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
	],
	declarations: [],
	providers: [
		UserProfile,
		UserService,
		CommonService
	],
	exports: []
})
export class CoreModule { }
