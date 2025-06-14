import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  usuario: any;
  cargando = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getPerfilUsuario().subscribe({
      next: (data) => {
        this.usuario = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener perfil:', err);
        this.cargando = false;
      }
    });
  }
}
