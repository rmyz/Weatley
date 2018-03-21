import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


import { LoginComponent } from './login-component/login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		MatIconModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatToolbarModule
	],
	providers: [],
	exports: [
		LoginComponent,
	],
})
export class LoginModule { }
