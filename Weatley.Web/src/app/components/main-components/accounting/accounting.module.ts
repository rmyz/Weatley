import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AccountingComponent } from './accounting-component/accounting.component';
import { GraphQLDataService } from '../../../core/data-services/graphql-data.service';
import { AccountingFormComponent } from './accounting-form/accounting-form.component';
import { PageLoaderModule } from '../../../widgets/page-loader/page-loader.module';

@NgModule({
  declarations: [AccountingComponent, AccountingFormComponent],
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    // AccountingRouter,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSnackBarModule,
    PageLoaderModule,
  ],
  providers: [GraphQLDataService],
  exports: [
    AccountingComponent,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AccountingFormComponent,
  ],
  entryComponents: [AccountingFormComponent],
})
export class AccountingModule {}
