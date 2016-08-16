import { RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  }
];
