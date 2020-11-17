import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { TelaInicialComponent } from './views/home/tela-inicial/tela-inicial.component';
import { LoginComponent } from './views/Login/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: TelaInicialComponent,
    canActivate: [AuthGuard],
    data: { authGuard: {redirect: '/login'}}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
