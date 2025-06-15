import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';
import { Color } from '../modelos/color';
import { Talla } from '../modelos/talla';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = '/api/productos';

constructor(private http: HttpClient, private authService: AuthService) {}

private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    });
  }

getAdminProductos(): Observable<Producto[]> {
  return this.http.get<Producto[]>('/api/admin/productos', {
    headers: this.authService.getAuthHeaders()
  });
}

  getTodos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}?categoria=${categoria}`);
  }

  getPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  crear(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  actualizar(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getColoresPorProducto(id: number): Observable<Color[]> {
    return this.http.get<Color[]>(`${this.apiUrl}/${id}/colores`);
  }

  getTallasPorProducto(id: number): Observable<Talla[]> {
    return this.http.get<Talla[]>(`${this.apiUrl}/${id}/tallas`);
  }


  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>('/api/admin/productos', producto, {
      headers: this.getAuthHeaders()
    });
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`/api/admin/productos/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
  return this.http.put<Producto>(
    `/api/admin/productos/${id}`,
    producto,
    { headers: this.getAuthHeaders() }
  );
}


}
