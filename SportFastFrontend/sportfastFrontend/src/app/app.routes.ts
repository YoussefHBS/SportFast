import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
export const routes: Routes = [
  {
    path: 'hombre',
    loadComponent: () => import('./hombre/hombre.component').then(m => m.HombreComponent)
  },
  {
    path: 'mujer',
    loadComponent: () => import('./mujer/mujer.component').then(m => m.MujerComponent)
  },
  {
    path: 'nino',
    loadComponent: () => import('./nino/nino.component').then(m => m.NinoComponent)
  },
  {
    path: 'nina',
    loadComponent: () => import('./nina/nina.component').then(m => m.NinaComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  { path: 'recuperar', component: RecuperarComponent },
  {
    path: 'carrito',
    loadComponent: () => import('./carrito/carrito.component').then(m => m.CarritoComponent)
  },
 { path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
      },
  { path: 'perfil', component: PerfilComponent }
,
  {
  path: 'mas-informacion',
  loadComponent: () => import('./mas-informacion/mas-informacion.component').then(m => m.MasInformacionComponent)
},
  {
    path: '',
    component: PaginaPrincipalComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
