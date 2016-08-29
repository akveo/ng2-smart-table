import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES } from '../../../../../../ng2-smart-table.ts';

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
  
  ngOnInit() {
    
  }
}
