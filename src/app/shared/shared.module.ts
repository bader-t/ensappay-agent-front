import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule,
    ReactiveFormsModule,HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
