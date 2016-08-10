import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';

//noinspection TypeScriptValidateTypes
export const routes: RouterConfig = [
  {
    path: '*',
    component: AppComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
