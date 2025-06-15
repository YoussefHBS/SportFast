import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  constructor(private http: HttpClient) {}

  crearSesionPago(productos: any[]) {
    return this.http.post<{ url: string }>('http://sportfast.zapto.org:8000/api/crear-sesion', {
      items: productos,
    });
  }
}
