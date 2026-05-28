import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Agregarproduct } from './pages/agregarproduct/agregarproduct';
import { Login } from './pages/login/login';

export const routes: Routes = [

    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
   path: 'agregarproduct',
   component: Agregarproduct
  },
  {
    path: 'products',
    component:Products
  },
  {
    path: 'login',
    component:Login
  }

];
