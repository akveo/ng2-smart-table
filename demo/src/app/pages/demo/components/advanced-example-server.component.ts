import { Component } from '@angular/core';
import { ServerDataSource } from '../../../../../../src/ng2-smart-table/lib';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'advanced-example-server',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class AdvancedExampleServerComponent {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      albumId: {
        title: 'Album'
      },
      title: {
        title: 'Title'
      },
      url: {
        title: 'Url'
      }
    }
  };

  source: ServerDataSource;
  
  constructor(http: Http) {
    this.source = new ServerDataSource(http, {endPoint: 'https://jsonplaceholder.typicode.com/photos'});
  }
}
