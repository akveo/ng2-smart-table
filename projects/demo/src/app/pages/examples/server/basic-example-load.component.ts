import {Component} from '@angular/core';

import {LocalDataSource, Settings} from 'angular2-smart-table';
import {BasicExampleLoadService} from './basic-example-load.service';

@Component({
    selector: 'basic-example-load',
    providers: [BasicExampleLoadService],
    template: `
    <angular2-smart-table [settings]="settings" [source]="source"></angular2-smart-table>
  `,
    standalone: false
})
export class BasicExampleLoadComponent {

  source: LocalDataSource;

  settings: Settings = {
    columns: {
      id: {
        title: 'ID',
        isEditable: false,
        isAddable: false,
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
