import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CoreModule } from '../../core/core.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
