import {
  FilterExamplesComponent,
  DefaultExampleComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent } from './examples';

export const examplesRoutes = [
  {
    path: '',
    component: DefaultExampleComponent
  },
  {
    path: 'using-filters',
    component: FilterExamplesComponent
  },
  {
    path: 'populate-from-server',
    component: ServerExamplesComponent
  },
  {
    path: 'custom-editors-viewers',
    component: CustomViewEditExamplesComponent
  },
  {
    path: 'various',
    component: VariousExamplesComponent
  }
];
