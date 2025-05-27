
// src/app/app.routes.ts
import { Routes } from '@angular/router';

//nuevas rutas
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './features/dashboard.component';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

import { AuthGuard } from './core/auth/auth.guard';



export const routes: Routes = [
  // Ruta para el login (sin layout/base)
  { path: 'login', component: LoginComponent },



  // Layout base para todo lo demás
  {
    path: '',
    component: MainLayoutComponent,

    canActivate: [AuthGuard], // ← Aplica aquí el guard

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },         // Redirige '/' a '/dashboard'
      { path: 'dashboard', component: DashboardComponent },             // Dashboard dentro del layout
      // Aquí después puedes agregar más rutas para otros módulos:
      // { path: 'users', component: UsersComponent },
      // { path: 'customers', component: CustomersComponent },
    ]
  },

  // Ruta comodín (cualquier otra ruta redirige a login)
  { path: '**', redirectTo: '/login' }
];

