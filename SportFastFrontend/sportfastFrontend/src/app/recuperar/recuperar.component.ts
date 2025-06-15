import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './recuperar.component.html',
})
export class RecuperarComponent {
  form: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  recuperar() {
    if (this.form.invalid) return;

    this.authService.enviarRecuperacion(this.form.value.correo).subscribe({
      next: () => {
        this.mensaje = 'Se ha enviado un enlace de recuperación a tu correo.';
        this.form.reset();
      },
      error: () => {
        this.mensaje = 'No se pudo enviar el correo. Intenta más tarde.';
      }
    });
  }
}
