import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { TypologyService } from '../../typology/typology.services';
import { PersonsService } from '../persons.service'; // ajusta la ruta si es necesario
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],

  templateUrl: './persons-form.component.html',
  styleUrl: './persons-form.component.css'
})


export class PersonFormComponent  implements OnInit {
  personForm: FormGroup;

  //ComboBox
  genderOptions: any[] = [];
  bloodTypeOptions: any[] = [];
  stateOptions: any[] = [];

  //editar
  editMode: boolean = false;
  personId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private typologyService: TypologyService,  //servicio comboBox
    private personsService: PersonsService, //servicio para crear

    private route: ActivatedRoute,      // editar
    private router: Router              // editar
  ) {
    this.personForm = this.fb.group({
      personId: [null],
      personKey: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: [''],
      firstSurname: ['', Validators.required],
      secondSurname: [''],
      birthdate: [''],
      gender: ['', Validators.required],
      bloodType: ['', Validators.required],
      profession: [''],
      cui: [''],
      nit: [''],
      email: [''],
      phoneNumber: [''],
      secondaryPhoneNumber: [''],
      address: [''],
      state: ['', Validators.required]
    });
  }


  //---metodos combobox-----------------------------------
  ngOnInit() {
  this.loadGenderOptions();
  this.loadBloodTypeOptions();
  this.loadStateOptions();

  // --- Detectar si es edición ---
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.editMode = true;
      this.personId = +id;
      this.loadPerson(+id);
    }
  });

  }

  //---------
  loadGenderOptions() {
  this.typologyService.getByParent(290).subscribe({
    next: (data) => this.genderOptions = data,
    error: () => this.genderOptions = []
  });
  }

  loadBloodTypeOptions() {
  this.typologyService.getByParent(300).subscribe({
    next: data => this.bloodTypeOptions = data,
    error: () => this.bloodTypeOptions = []
  });
  }
  loadStateOptions() {
    this.typologyService.getByParent(500).subscribe({
      next: data => this.stateOptions = data,
      error: () => this.stateOptions = []
    });
  }

  //-----------metodo para cargar los datos-----
  loadPerson(id: number) {
    this.personsService.getPersonById(id).subscribe({
      next: (res) => {
        const person = res.data ? res.data : res;

        // Transforma los combos para que usen el ID (no el objeto)
        if (person.gender && typeof person.gender === 'object') {
          person.gender = person.gender.typologyId;
        }
        if (person.bloodType && typeof person.bloodType === 'object') {
          person.bloodType = person.bloodType.typologyId;
        }
        if (person.state && typeof person.state === 'object') {
          person.state = person.state.typologyId;
        }

        this.personForm.patchValue(person);
      },
      error: () => {
        alert('Error al cargar datos');
        this.router.navigate(['/persons']);
      }
    });
  }
  //---------------------------------------------------


  onSubmit() {
  if (this.personForm.valid) {
    const personData = this.personForm.value;

    if (this.editMode && this.personId) {
      // --- EDITAR ---
      this.personsService.updatePerson(this.personId, personData).subscribe({
        next: () => {
          alert('Persona actualizada correctamente');
          this.router.navigate(['/persons']);
        },
        error: () => alert('Error al actualizar persona')
      });
    } else {
      // --- CREAR ---
      this.personsService.createPerson(personData).subscribe({
        next: () => {
          alert('Persona creada correctamente');
          this.personForm.reset();
          this.router.navigate(['/persons']);
        },
        error: () => alert('Error al crear persona')
      });
    }
  }
}




}
