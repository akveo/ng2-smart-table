import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { FilterExamplesComponent } from './filter/filter-examples.component';
import { ServerExamplesComponent } from './server/server-examples.component';
import { CustomViewEditExamplesComponent } from './custom-edit-view/custom-edit-view-examples.component';
import { VariousExamplesComponent } from './various/various-examples.component';

// 单击/双击/复选框 事件
import { ClickEventComponent } from './clickEvent/clickEvent.component';
// 隔行换色
import { GhhsComponent } from './ghhs/ghhs.component';
// 工具栏
import { ToolComponent } from './tool/tool.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'tool',
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
      // 单击/双击/复选框 
      {
        path: 'clickEvent',
        component: ClickEventComponent,
      },
      // 隔行换色
      {
        path: 'ghhs',
        component: GhhsComponent,
      },
      // 工具栏.
      {
        path: 'tool',
        component: ToolComponent,
      },
    ],
  },
];
