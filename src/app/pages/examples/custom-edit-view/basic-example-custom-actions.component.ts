import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-custom-actions',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data" (custom)="onCustom($event)"></ng2-smart-table>
  `,
})
export class BasicExampleCustomActionsComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: true
    },
    custom: [{
      action: 'view',
      buttonContent: `view `
    }, {
      action: 'duplicate',
      buttonContent: 'duplicate '
    }],
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      }
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
  ];

  constructor() { }

  onCustom(event) {
    console.log(event);
  }
}
