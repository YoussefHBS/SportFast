import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  imports: [RouterOutlet,RouterLink,RouterModule,CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'sportfastFrontend';
  arrayObjetos: Producto[] = [];
  currentYear = new Date().getFullYear();
  cliente: any = null;

  @ViewChild('offcanvasNavbar', { static: false }) offcanvasNavbar?: ElementRef;

  constructor(
    public carritoService: CarritoService,
    private authService: AuthService,
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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarLayout = !event.urlAfterRedirects.startsWith('/admin');
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe();
  }

   mostrarLayout: boolean = true;


  get esAdmin(): boolean {
  return this.auth.esAdmin();
}
  // ayuda de chtgpt 
  cerrarOffcanvas() {
    const offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas) {
      // Bootstrap 5 Offcanvas
      // @ts-ignore
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
      bsOffcanvas.hide();
    }
  }
}
