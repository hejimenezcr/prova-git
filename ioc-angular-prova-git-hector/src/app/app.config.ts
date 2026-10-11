import { 
  ApplicationConfig, 
  LOCALE_ID, 
  provideZonelessChangeDetection, 
  provideBrowserGlobalErrorListeners 
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeCa from '@angular/common/locales/ca';
import { routes } from './app.routes';

// Registramos los datos del idioma catalán
registerLocaleData(localeCa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'ca' }
  ]
};