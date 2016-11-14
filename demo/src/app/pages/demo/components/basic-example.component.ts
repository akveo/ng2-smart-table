import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings"></ng2-smart-table>
  `
})
export class BasicExampleComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false
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
    },
    primary: 'id'
  };
  
  ngOnInit() {
    
  }
}
