import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';

const routes: Routes = [
  {
    path: '', component: ClientFormComponent,
    children: [
        { path: '', component: ClientFormComponent },
        { path: 'add', component: ClientFormComponent }
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
