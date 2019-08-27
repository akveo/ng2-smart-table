import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  template: `
    <ng2-smart-table [settings]="settings"></ng2-smart-table>
  `,
})
export class BasicExampleComponent {

  settings = {
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
