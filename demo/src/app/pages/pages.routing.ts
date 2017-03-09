import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ExamplesComponent } from './examples/examples.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { examplesRoutes } from './examples/examples-routes';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
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
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: examplesRoutes
  }
];

export const routing = RouterModule.forChild(routes);
