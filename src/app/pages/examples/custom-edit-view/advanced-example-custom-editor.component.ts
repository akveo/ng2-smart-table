import { Component } from '@angular/core';

import { CustomEditorComponent } from './custom-editor.component';
import { CustomRenderComponent } from './custom-render.component';

@Component({
  selector: 'advanced-example-custom-editor',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class AdvancedExamplesCustomEditorComponent {

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      username: {
        title: 'User Name',
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
    },
  };
}
