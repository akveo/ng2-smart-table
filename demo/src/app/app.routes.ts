import { provideRouter, RouterConfig } from '@angular/router';
import { PagesRoutes } from './pages/pages.routes';

//noinspection TypeScriptValidateTypes
export const routes: RouterConfig = [
  ...PagesRoutes,
  {
    path: '**',
    redirectTo: '/'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
