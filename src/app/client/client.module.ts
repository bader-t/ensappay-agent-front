import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { ClientListComponent } from './components/client-list/client-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  exports:[
    LayoutComponent,
    ClientListComponent
  ]
})
export class ClientModule { }
