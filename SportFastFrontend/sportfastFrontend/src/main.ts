import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'; // 👈 importa esto
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // 👈 importa esto
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule) // 👈 añade esto
  ]
});
