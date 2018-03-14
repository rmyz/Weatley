import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


import { AccountingComponent } from './accounting-component/accounting.component';
import { AccountingEditDialogComponent } from './accounting-edit-dialog/accounting-edit-dialog.component';


@NgModule({
  declarations: [
    AccountingComponent,
    AccountingEditDialogComponent
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
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  exports: [AccountingComponent],
  entryComponents: [AccountingEditDialogComponent]
})
export class AccountingModule { }
