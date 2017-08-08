import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { FilterExamplesComponent } from './filter/filter-examples.component';
import { ServerExamplesComponent } from './server/server-examples.component';
import { CustomViewEditExamplesComponent } from './custom-edit-view/custom-edit-view-examples.component';
import { VariousExamplesComponent } from './various/various-examples.component';

// 单击/双击 事件
import { ClickEventComponent } from './clickEvent/clickEvent.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'clickEvent',
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
      {
        path: 'clickEvent',
        component: ClickEventComponent,
      },
    ],
  },
];
