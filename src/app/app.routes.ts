import { Routes } from '@angular/router';
import { PortfolioPage } from './portfolio-page';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: PortfolioPage, data: { locale: 'pt-BR' } },
  { path: 'en', component: PortfolioPage, data: { locale: 'en' } },
];
