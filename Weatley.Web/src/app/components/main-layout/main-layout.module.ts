import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AccountingModule } from '../main-components/accounting/accounting.module';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    AccountingModule,
    RouterModule
  ],
  providers: [],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
