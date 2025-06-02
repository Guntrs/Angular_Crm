import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { NgIf, NgFor } from '@angular/common';

import { RouterModule } from '@angular/router'; // <-- editar

@Component({
  selector: 'app-persons-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterModule
   ],
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: any[] = [];
  loading = false;
  error = '';

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
  this.loading = true;
  this.personsService.getPersons().subscribe({
    next: (data: any) => {        // <--- aquí agrega ": any"
      this.persons = data.data ? data.data : data;
      this.loading = false;
    },
    error: (err: any) => {         // <--- aquí agrega ": any"
      this.error = 'Error al cargar personas';
      this.loading = false;
    }
  });
}
}
