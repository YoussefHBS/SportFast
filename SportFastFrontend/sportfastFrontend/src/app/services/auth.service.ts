import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Cliente } from '../modelos/cliente';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;
  private clienteSubject = new BehaviorSubject<Cliente | null>(null);
  cliente$ = this.clienteSubject.asObservable();

  private usuarioActual?: Cliente;

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post('/api/register', data);
  }

  login(data: any) {
    return this.http.post<{ token: string; cliente: Cliente }>('/api/login', data).pipe(
      tap((res) => {
        this.token = res.token;
        localStorage.setItem('auth_token', this.token);
        this.usuarioActual = res.cliente;
        this.clienteSubject.next(res.cliente);
      })
    );
  }

  getUser() {
    const headers = {
      Authorization: `Bearer ${this.token || localStorage.getItem('auth_token')}`,
    };
    return this.http.get<Cliente>('/api/user', { headers }).pipe(
      tap((user) => {
        this.usuarioActual = user;
        this.clienteSubject.next(user);
      })
    );
  }

  logout() {
    const headers = {
      Authorization: `Bearer ${this.token || localStorage.getItem('auth_token')}`,
    };
    return this.http.post('/api/logout', {}, { headers }).pipe(
      tap(() => {
        this.token = null;
        localStorage.removeItem('auth_token');
        this.usuarioActual = undefined;
        this.clienteSubject.next(null);
      })
    );
  }

  setUsuario(usuario: Cliente) {
    this.usuarioActual = usuario;
    this.clienteSubject.next(usuario);
  }

  getUsuario(): Cliente | undefined {
    return this.usuarioActual;
  }

  esAdmin(): boolean {
  const cliente = this.clienteSubject.value;
  return !!cliente && Number(cliente.admin) === 1;
}
getAuthHeaders(): { [header: string]: string } {
  const token = this.token || localStorage.getItem('auth_token');
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  };
}

  getPerfilUsuario() {
  return this.http.get('/api/user', {
    headers: this.getAuthHeaders()
  });
  }


  enviarRecuperacion(correo: string) {
  return of(true).pipe(delay(1500));

}
}
