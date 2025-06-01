import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TypologyService {
  private apiUrl = `${environment.apiUrl}/Typology`;

  constructor(private http: HttpClient) {}

  // Traer opciones por parentId (usa el endpoint real de tu backend)
  getByParent(parentId: number): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.http.get<any[]>(`${this.apiUrl}/by-parent/${parentId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }
}
