import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClientFormComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ],
  exports:[
    ClientFormComponent,
    LayoutComponent
  ]
})
export class ClientModule { }
