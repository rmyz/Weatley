import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AccountingModule } from './main-components/accounting/accounting.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { CustomerModule } from './main-components/customer/customer.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccountingModule,
    CustomerModule,
    MainLayoutModule
  ],
  providers: [],
  exports: [
    AccountingModule,
    CustomerModule,
    MainLayoutModule
  ]
})
export class ComponentModule { }
