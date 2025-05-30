import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './persons-form.component.html',
  styleUrl: './persons-form.component.css'
})
export class PersonFormComponent {
  personForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      personKey: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: [''],
      firstSurname: ['', Validators.required],
      secondSurname: ['']
      // Agrega más campos según tu entidad
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      // Por ahora, solo mostrar el valor
      console.log(this.personForm.value);
    }
  }
}
