import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { ComponentModule } from './components/components.module';

import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentModule,
		WidgetsModule,
		HttpClientModule
	],
	providers: [
		CoreModule,
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
