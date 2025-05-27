import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//  módulos de Angular Material
import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',  // Nombre del componente (para usar en HTML)
  standalone: true,
    // Aquí van los módulos que tu componente usa (standalone)
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',   // Archivo HTML asociado
  styleUrl: './login.component.css'  // Archivo CSS asociado
})

export class LoginComponent {
loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con dos campos obligatorios
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  if (this.loginForm.valid) {
    // Simula un login exitoso y guarda un "token" en localStorage
    // En el futuro, aquí deberías recibir el token real del backend
    const fakeToken = 'jwt-token-ejemplo'; // Simula un JWT recibido del backend

     localStorage.setItem('token', fakeToken);

    // Redirige al dashboard después de login (opcional)
    window.location.href = '/dashboard';
  }
}
}
