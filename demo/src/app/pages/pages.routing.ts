import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { DocumentationComponent } from './documentation/documentation.component';
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
  }
];

export const routing = RouterModule.forChild(routes);