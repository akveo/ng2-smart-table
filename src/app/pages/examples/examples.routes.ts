import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
} from './examples';
import { ExamplesComponent } from './examples.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        component: DefaultExampleComponent,
      },
      {
        path: 'using-filters',
        component: FilterExamplesComponent,
      },
      {
        path: 'populate-from-server',
        component: ServerExamplesComponent,
      },
      {
        path: 'custom-editors-viewers',
        component: CustomViewEditExamplesComponent,
      },
      {
        path: 'various',
        component: VariousExamplesComponent,
      },
    ],
  },
];
