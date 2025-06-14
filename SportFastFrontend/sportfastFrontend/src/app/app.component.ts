import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from './modelos/producto';
import { AuthService } from './services/auth.service';
import { CarritoService } from './services/carrito.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,    // Necesario para routerLink
    CommonModule     // Necesario para *ngIf, *ngFor
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sportfastFrontend';
  arrayObjetos: Producto[] = [];
  currentYear = new Date().getFullYear();
  cliente: any = null;

  constructor(
    public carritoService: CarritoService,
    private authService: AuthService,  // <- inyectado aquí
    public router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.cliente$.subscribe(cliente => {
      this.cliente = cliente;
    });

    if (localStorage.getItem('auth_token')) {
      this.authService.getUser().subscribe();
    }

    // 👇 Escuchar cambios de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Oculta layout si estás en /admin
        this.mostrarLayout = !event.urlAfterRedirects.startsWith('/admin');
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
  }

   mostrarLayout: boolean = true; // Ahora es una propiedad, no un getter


  get esAdmin(): boolean {
  return this.auth.esAdmin();
}
}
