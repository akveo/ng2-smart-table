import {Component} from '@angular/core';
import {BasicExampleCustomActionsItemComponent} from './basic-example-custom-actions-item.component';
import {Settings} from "angular2-smart-table";

@Component({
    selector: 'basic-example-custom-actions',
    template: `
    <angular2-smart-table [settings]="settings" [source]="data" (custom)="onCustom($event)"></angular2-smart-table>
  `,
    standalone: false
})
export class BasicExampleCustomActionsComponent {

  settings: Settings = {
    actions: {
      custom: [
        {
          name: 'view',
          title: 'View ',
        },
        {
          name: 'edit',
          title: 'Edit ',
        },
        {
          name: 'delete',
          title: 'Delete ',
        },
        {
          name: 'duplicate',
          title: 'Duplicate ',
        },
        {
          name: 'component',
          title: 'Show',
          renderComponent: BasicExampleCustomActionsItemComponent,
        },
      ],
    },
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
      },
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

  onCustom(event: any) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}
