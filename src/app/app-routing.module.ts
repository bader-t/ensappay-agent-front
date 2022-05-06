import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './home/home.component';

const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);
const clientModule = () => import('./client/client.module').then(x => x.ClientModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'client', loadChildren: clientModule, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: authModule  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
