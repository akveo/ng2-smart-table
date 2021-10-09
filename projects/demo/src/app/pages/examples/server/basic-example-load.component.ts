import { Component } from '@angular/core';

import { LocalDataSource } from 'ngx-smart-table';
import { BasicExampleLoadService } from './basic-example-load.service';

@Component({
  selector: 'basic-example-load',
  providers: [BasicExampleLoadService],
  template: `
    <ngx-smart-table [settings]="settings" [source]="source"></ngx-smart-table>
  `,
})
export class BasicExampleLoadComponent {

  source: LocalDataSource;

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        addable: false,
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

  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();

    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
}
