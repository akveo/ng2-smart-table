import { RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { DemoComponent } from './demo';
import { DocumentationComponent } from './documentation';

//noinspection TypeScriptValidateTypes
export const PagesRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  }
];
