import { Component } from '@angular/core';
import {Settings} from "angular2-smart-table";

@Component({
    selector: 'basic-example',
    template: `
    <angular2-smart-table [settings]="settings"></angular2-smart-table>
  `,
    standalone: false
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
