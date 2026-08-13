import { Routes } from '@angular/router';

import { Login } from './componentes/login/login';
import { Home } from './componentes/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  }
];