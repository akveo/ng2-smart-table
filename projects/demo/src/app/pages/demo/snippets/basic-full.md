import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-data',
  styles: [],
  template: `
    <angular2-smart-table [settings]="settings" [source]="data"></angular2-smart-table>
  `
})
export class BasicExampleDataComponent {

  settings: Settings = {
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
