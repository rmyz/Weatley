import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material';

import { AccountingComponent } from './accounting-component/accounting.component';
import { AccountingFormComponent } from './accounting-form/accounting-form.component';
import { AccountingRouter } from './accounting-form/accounting-routing.module';
import { DialogComponent } from './accounting-component/accounting.component';

@NgModule({
  declarations: [
    AccountingComponent,
    AccountingFormComponent,
    DialogComponent
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
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    AccountingRouter,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [
  ],
  exports: [
    AccountingComponent,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AccountingFormComponent
  ],
  entryComponents: [
    AccountingFormComponent,
    DialogComponent
  ]
})
export class AccountingModule { }
