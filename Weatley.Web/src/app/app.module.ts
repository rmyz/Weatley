import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentModule,
		HttpClientModule,
		HttpModule,
		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
