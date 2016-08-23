import { Component } from '@angular/core';

import { NG2_SMART_TABLE_DIRECTIVES, LocalDataSource } from '../../../../../../ng2-smart-table.ts';
import { BasicExampleLoadService } from './basic-example-load.service';

@Component({
  selector: 'basic-example-load',
  directives: [NG2_SMART_TABLE_DIRECTIVES], // register the directive
  styles: [],
  providers: [BasicExampleLoadService],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class BasicExampleLoadComponent {

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

  source: LocalDataSource;

  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();
    
    this.service.getData().then((data) => {
      this.source.load(data);
    })
  }
}
