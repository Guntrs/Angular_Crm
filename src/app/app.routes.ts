
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
      {
        path: 'persons',
        loadChildren: () =>
        import('./features/persons/persons.routes').then(m => m.PERSONS_ROUTES)
      },

      {
        path: 'customers',
        loadChildren: () =>
        import('./features/customers/customers.routes').then(m => m.CUSTOMERS_ROUTES)
      },

      {
        path: 'establishment',
        loadChildren: () =>
        import('./features/establishment/establishment.routes').then(m => m.ESTABLISHMENT_ROUTES)
      },

      {
        path: 'organizations',
        loadChildren: () =>
        import('./features/organizations/organizations.routes').then(m => m.ORGANIZATIONS_ROUTES)
      },

      {
        path: 'teams',
        loadChildren: () =>
        import('./features/teams/teams.routes').then(m => m.TEAMS_ROUTES)
      },

      {
        path: 'users',
        loadChildren: () =>
        import('./features/users/users.routes').then(m => m.USERS_ROUTES)
      },

      {
        path: 'usersteams',
        loadChildren: () =>
        import('./features/usersteams/usersteams.routes').then(m => m.USERSTEAMS_ROUTES)
      }

    ]
  },

  // Ruta comodín (cualquier otra ruta redirige a login)
  { path: '**', redirectTo: '/login' }
];

