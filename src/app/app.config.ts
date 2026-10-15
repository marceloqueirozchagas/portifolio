import { PortfolioUrlSerializer } from './portfolio-url-serializer';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: UrlSerializer, useClass: PortfolioUrlSerializer },
    provideClientHydration(),
  ],
};
