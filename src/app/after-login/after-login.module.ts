import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { ClickOutsideModule } from 'ng4-click-outside';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    AfterLoginRoutingModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    PerfectScrollbarModule,
    ClickOutsideModule
    
  ],
  declarations: [HeadersComponent, FootersComponent, SidebarsComponent],
  exports:[HeadersComponent,FootersComponent,SidebarsComponent],
  providers:[{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]

})
export class AfterLoginModule { }
