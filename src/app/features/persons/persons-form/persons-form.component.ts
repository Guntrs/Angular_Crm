import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { TypologyService } from '../../typology/typology.services';

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

  constructor(private fb: FormBuilder,
    private typologyService: TypologyService
  ) {
    this.personForm = this.fb.group({
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


  //---metodo combobox-----------------------------------
  ngOnInit() {
  this.loadGenderOptions();
  this.loadBloodTypeOptions();
  this.loadStateOptions();
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
  //---------------------------------------------------

  onSubmit() {
    if (this.personForm.valid) {
      // Por ahora, solo mostrar el valor
      console.log(this.personForm.value);
    }
  }


}
