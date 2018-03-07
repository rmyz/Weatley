import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AccountingComponent } from './accounting-component/accounting.component';


@NgModule({
  declarations: [
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [AccountingComponent]
})
export class AccountingModule { }
