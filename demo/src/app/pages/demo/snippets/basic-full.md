import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES } from 'ng2-smart-table';

@Component({
  selector: 'basic-example-data',
  directives: [NG2_SMART_TABLE_DIRECTIVES], // register the directive
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    // ... other rows here
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
}
