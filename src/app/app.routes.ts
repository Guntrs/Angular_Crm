
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

      // Redirige '/' a '/dashboard'
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Dashboard dentro del layout
      { path: 'dashboard', component: DashboardComponent },

      //  rutas para otros módulos:----------------



    ]
  },

  // Ruta comodín (cualquier otra ruta redirige a login)
  { path: '**', redirectTo: '/login' }
];

