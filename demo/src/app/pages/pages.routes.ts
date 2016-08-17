import { RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { DemoComponent } from './demo';

//noinspection TypeScriptValidateTypes
export const PagesRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];
