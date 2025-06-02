import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private apiUrl = `${environment.apiUrl}/Person`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  // metodo listar
  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // metodo crear
  createPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person, { headers: this.getAuthHeaders() });
  }

  // Obtener persona por ID
  getPersonById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  // Actualizar persona
  updatePerson(id: number, person: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, person, { headers: this.getAuthHeaders() });
  }

}
