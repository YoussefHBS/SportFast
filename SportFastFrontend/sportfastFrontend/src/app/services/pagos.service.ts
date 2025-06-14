import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  constructor(private http: HttpClient) {}

  crearSesionPago(productos: any[]) {
    return this.http.post<{ url: string }>('http://localhost:8000/api/crear-sesion', {
      items: productos,
    });
  }
}
