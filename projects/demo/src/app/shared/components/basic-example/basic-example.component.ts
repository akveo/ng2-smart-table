import { Component } from '@angular/core';
import {Settings} from "../../../../../../ngx-smart-table/src/lib/lib/settings";

@Component({
  selector: 'basic-example',
  template: `
    <ngx-smart-table [settings]="settings"></ngx-smart-table>
  `,
})
export class BasicExampleComponent {

  settings: Settings = {
    columns: {
      id: {
        title: 'ID',
        width: '100px',
      },
      name: {
        title: 'Full Name',
        width: '40%',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };
}
