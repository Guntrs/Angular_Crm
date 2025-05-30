
// src/app/app.routes.ts
import { Routes } from '@angular/router';

//nuevas rutas
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './features/dashboard.component';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

import { AuthGuard } from './core/auth/auth.guard';
import { UsersListComponent } from './features/users/users-list/users-list.component';
import { CustomersListComponent } from './features/customers/customers-list/customers-list.component';
import { EstablishmentListComponent } from './features/establishment/establishment-list/establishment-list.component';
import { OrganizationsListComponent } from './features/organizations/organizations-list/organizations-list.component';

import { UsersteamsListComponent } from './features/usersteams/usersteams-list/usersteams-list.component';
import { TeamsListComponent } from './features/teams/teams-list/teams-list.component';


import { PersonsListComponent } from './features/persons/persons-list/persons-list.component';
import { PersonFormComponent } from './features/persons/persons-form/persons-form.component';

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
      { path: 'users', component: UsersListComponent },
      { path: 'customers', component: CustomersListComponent},
      { path: 'establishment', component: EstablishmentListComponent },
      { path: 'organizations', component: OrganizationsListComponent},

      { path: 'persons', component: PersonsListComponent},
      { path: 'persons/new', component: PersonFormComponent },

      { path: 'teams', component: TeamsListComponent},
      { path: 'usersteams', component: UsersteamsListComponent},
    ]
  },

  // Ruta comodín (cualquier otra ruta redirige a login)
  { path: '**', redirectTo: '/login' }
];

