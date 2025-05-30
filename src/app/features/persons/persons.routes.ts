// src/app/features/persons/persons.routes.ts
import { Routes } from '@angular/router';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './persons-form/persons-form.component';

export const PERSONS_ROUTES: Routes = [
  { path: '', component: PersonsListComponent },
  { path: 'new', component: PersonFormComponent }
];
