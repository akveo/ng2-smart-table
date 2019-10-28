import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'basic-example-disable-actions',
  template: `<div class='not-enable'>sallam</div>
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
  styles: [`.not-enable{ color:gray!important; cursor:not-allowed; }.disabled{ color:gray!important; cursor:not-allowed; }`],
  encapsulation: ViewEncapsulation.None
})
export class BasicExampleDisableActionsComponent {

  settings = {
    edit: {
      editButtonContent: (btn) => {
        if (btn.row.data.readonly) {
          btn.isActionEdit = btn.row.data.id % 2 === 1;
          btn.isActionEditDisable = true;
        }
        return "Edit";
      },
      disableClassName: 'not-enable'
    },
    delete: {
      deleteButtonContent: (btn) => {
        if (btn.row.data.readonly) {
          btn.isActionDelete = btn.row.data.id % 2 === 1;
          btn.isActionDeleteDisable = true;
        }
        return "Delete";
      },
      confirmDelete: true,
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
      }
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      readonly: true,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      readonly: true,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      readonly: true,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      readonly: true,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
  ];

  onCustom(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }
}
