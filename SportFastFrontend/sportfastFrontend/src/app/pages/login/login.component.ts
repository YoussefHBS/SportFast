import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: FormGroup;
  errorMsg: string = '';

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) return;

    this.auth.login(this.form.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.auth.getUser().subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: err => {
            console.error('Error al obtener el usuario:', err);
            this.errorMsg = 'No se pudo obtener el usuario.';
          }
        });
      },
      error: err => {
        console.error('Error al iniciar sesión:', err);
        this.errorMsg = 'Correo o contraseña incorrectos';
      }
    });
  }
}
