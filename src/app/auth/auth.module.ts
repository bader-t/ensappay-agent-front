import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    ChangePasswordComponent
  ]
})
export class AuthModule { }
