import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AccountingComponent } from './accounting-component/accounting.component';


@NgModule({
  declarations: [
    AccountingComponent
  ],
  imports: [
    MatTooltipModule,
    MatIconModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule],
  providers: [],
  exports: [AccountingComponent]
})
export class AccountingModule { }
