import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';


import { AccountingComponent } from './accounting-component/accounting.component';


@NgModule({
  declarations: [
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  exports: [AccountingComponent]
})
export class AccountingModule { }
