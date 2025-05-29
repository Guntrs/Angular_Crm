import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



// Puedes reemplazar 'any' por una interfaz Customer cuando la tengas.
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // Endpoint real según tu backend y Postman
  private apiUrl = `${environment.apiUrl}/Customer`; // O /User, /Team, etc.

  constructor(private http: HttpClient) {}

  // Método para generar headers con el token
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // así accede Angular al JWT guardado
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Método para obtener todos los customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  // Puedes agregar más métodos para CRUD:
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer, {
      headers: this.getAuthHeaders()
    });
  }

  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customer, {
      headers: this.getAuthHeaders()
    });
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
