import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { provideHttpClient } from '@angular/common/http';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), ProductoService, provideHttpClient(), provideRouter(routes)]
};
