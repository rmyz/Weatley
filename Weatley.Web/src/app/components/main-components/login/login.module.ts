import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login-component/login.component';
import { IsLoggedService } from '../../../core/services/isLogged.service';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatToolbarModule,
		FormsModule,
		MatSnackBarModule,
		ReactiveFormsModule,
	],
	providers: [IsLoggedService],
	exports: [
		LoginComponent,
	],
})
export class LoginModule { }
