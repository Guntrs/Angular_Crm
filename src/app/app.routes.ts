
// src/app/app.routes.ts
import { Routes } from '@angular/router';

//nuevas rutas
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './features/dashboard.component';

export const routes: Routes = [
  {path: 'login', component : LoginComponent },
  {path: 'dashboard', component : DashboardComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}

];

