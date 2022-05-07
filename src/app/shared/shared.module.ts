import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    CommonModule, RouterModule,
    ReactiveFormsModule,HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule,
    AlertComponent
  ]
})
export class SharedModule { }
