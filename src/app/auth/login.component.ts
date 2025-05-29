import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Módulos de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// IMPORTA ESTOS DOS PARA EL LOGIN REAL
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // Ajus

//---------------------------------------------------------------------

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

//-----------------------------------------------------------------------



export class LoginComponent {

  //---propiedades:Variables que el HTML puede usar o ver
loginForm: FormGroup;
  //---------------------------

//--codigo que se ejecuta al inciar
//--inyeccion de servicios Acceder a servicios como FormBuilder, HttpClient, Router


  constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private router: Router
) {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

  //metodos Funciones que responden a eventos (clic, submit, etc.)

  //------funcion clic Login
 onSubmit() {
  if (this.loginForm.valid) {
    const body = {
       userName: this.loginForm.value.username, // <-- N mayúscula, igual que en Postman
       password: this.loginForm.value.password
    };

    // Llama al endpoint real (ajusta la ruta si es diferente)
    this.http.post<any>(`${environment.apiUrl}/auth/login`, body).subscribe({
      next: (response) => {
        // GUARDA EL TOKEN REAL que devuelve el backend
        localStorage.setItem('token', response.token); // AJUSTA si el campo es "token" o "accessToken"
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Usuario o contraseña inválido');
      }
    });
  }
}
}
